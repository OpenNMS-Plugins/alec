const de = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, CS = {}, SS = window.Vue.resolveComponent, ES = window.Vue.createVNode, kS = window.Vue.openBlock, IS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const xS = { class: "main" };
function AS(e, o) {
  const r = SS("router-view");
  return kS(), IS("div", xS, [
    ES(r)
  ]);
}
const BS = /* @__PURE__ */ de(CS, [["render", AS], ["__scopeId", "data-v-5d32d140"]]), TS = window.Vue.defineComponent, DS = window.Vue.openBlock, NS = window.Vue.createBlock, LS = /* @__PURE__ */ TS({
  __name: "App",
  setup(e) {
    return (o, r) => (DS(), NS(BS));
  }
});
var Si = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function MS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lm = { exports: {} }, hd = { exports: {} }, Mm = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, OS = Mm, pd = Object.prototype.toString, wd = function(e) {
  return function(o) {
    var r = pd.call(o);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Zr(e) {
  return e = e.toLowerCase(), function(r) {
    return wd(r) === e;
  };
}
function vd(e) {
  return Array.isArray(e);
}
function Fa(e) {
  return typeof e > "u";
}
function PS(e) {
  return e !== null && !Fa(e) && e.constructor !== null && !Fa(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Om = Zr("ArrayBuffer");
function RS(e) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(e) : o = e && e.buffer && Om(e.buffer), o;
}
function FS(e) {
  return typeof e == "string";
}
function US(e) {
  return typeof e == "number";
}
function Pm(e) {
  return e !== null && typeof e == "object";
}
function Ta(e) {
  if (wd(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var WS = Zr("Date"), qS = Zr("File"), HS = Zr("Blob"), zS = Zr("FileList");
function md(e) {
  return pd.call(e) === "[object Function]";
}
function YS(e) {
  return Pm(e) && md(e.pipe);
}
function GS(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || pd.call(e) === o || md(e.toString) && e.toString() === o);
}
var jS = Zr("URLSearchParams");
function ZS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function KS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function _d(e, o) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), vd(e))
      for (var r = 0, s = e.length; r < s; r++)
        o.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && o.call(null, e[a], a, e);
}
function Jc() {
  var e = {};
  function o(a, u) {
    Ta(e[u]) && Ta(a) ? e[u] = Jc(e[u], a) : Ta(a) ? e[u] = Jc({}, a) : vd(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    _d(arguments[r], o);
  return e;
}
function JS(e, o, r) {
  return _d(o, function(a, u) {
    r && typeof a == "function" ? e[u] = OS(a, r) : e[u] = a;
  }), e;
}
function XS(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function QS(e, o, r, s) {
  e.prototype = Object.create(o.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function eE(e, o, r) {
  var s, a, u, c = {};
  o = o || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      u = s[a], c[u] || (o[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, o)) && e !== Object.prototype);
  return o;
}
function tE(e, o, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= o.length;
  var s = e.indexOf(o, r);
  return s !== -1 && s === r;
}
function nE(e) {
  if (!e)
    return null;
  var o = e.length;
  if (Fa(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var rE = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Qe = {
  isArray: vd,
  isArrayBuffer: Om,
  isBuffer: PS,
  isFormData: GS,
  isArrayBufferView: RS,
  isString: FS,
  isNumber: US,
  isObject: Pm,
  isPlainObject: Ta,
  isUndefined: Fa,
  isDate: WS,
  isFile: qS,
  isBlob: HS,
  isFunction: md,
  isStream: YS,
  isURLSearchParams: jS,
  isStandardBrowserEnv: KS,
  forEach: _d,
  merge: Jc,
  extend: JS,
  trim: ZS,
  stripBOM: XS,
  inherits: QS,
  toFlatObject: eE,
  kindOf: wd,
  kindOfTest: Zr,
  endsWith: tE,
  toArray: nE,
  isTypedArray: rE,
  isFileList: zS
}, ho = Qe;
function gp(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Rm = function(o, r, s) {
  if (!r)
    return o;
  var a;
  if (s)
    a = s(r);
  else if (ho.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    ho.forEach(r, function(w, v) {
      w === null || typeof w > "u" || (ho.isArray(w) ? v = v + "[]" : w = [w], ho.forEach(w, function($) {
        ho.isDate($) ? $ = $.toISOString() : ho.isObject($) && ($ = JSON.stringify($)), u.push(gp(v) + "=" + gp($));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, oE = Qe;
function Xa() {
  this.handlers = [];
}
Xa.prototype.use = function(o, r, s) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Xa.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Xa.prototype.forEach = function(o) {
  oE.forEach(this.handlers, function(s) {
    s !== null && o(s);
  });
};
var iE = Xa, sE = Qe, aE = function(o, r) {
  sE.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, Fm = Qe;
function Fo(e, o, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
Fm.inherits(Fo, Error, {
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
var Um = Fo.prototype, Wm = {};
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
  Wm[e] = { value: e };
});
Object.defineProperties(Fo, Wm);
Object.defineProperty(Um, "isAxiosError", { value: !0 });
Fo.from = function(e, o, r, s, a, u) {
  var c = Object.create(Um);
  return Fm.toFlatObject(e, c, function(w) {
    return w !== Error.prototype;
  }), Fo.call(c, e.message, o, r, s, a), c.name = e.name, u && Object.assign(c, u), c;
};
var Yo = Fo, qm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, an = Qe;
function lE(e, o) {
  o = o || new FormData();
  var r = [];
  function s(u) {
    return u === null ? "" : an.isDate(u) ? u.toISOString() : an.isArrayBuffer(u) || an.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (an.isPlainObject(u) || an.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      r.push(u), an.forEach(u, function(w, v) {
        if (!an.isUndefined(w)) {
          var _ = c ? c + "." + v : v, $;
          if (w && !c && typeof w == "object") {
            if (an.endsWith(v, "{}"))
              w = JSON.stringify(w);
            else if (an.endsWith(v, "[]") && ($ = an.toArray(w))) {
              $.forEach(function(y) {
                !an.isUndefined(y) && o.append(_, s(y));
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
var Hm = lE, qu, $p;
function uE() {
  if ($p)
    return qu;
  $p = 1;
  var e = Yo;
  return qu = function(r, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, qu;
}
var Hu, yp;
function cE() {
  if (yp)
    return Hu;
  yp = 1;
  var e = Qe;
  return Hu = e.isStandardBrowserEnv() ? function() {
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
  }(), Hu;
}
var dE = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, fE = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, hE = dE, pE = fE, zm = function(o, r) {
  return o && !hE(r) ? pE(o, r) : r;
}, zu, bp;
function wE() {
  if (bp)
    return zu;
  bp = 1;
  var e = Qe, o = [
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
  return zu = function(s) {
    var a = {}, u, c, f;
    return s && e.forEach(s.split(`
`), function(v) {
      if (f = v.indexOf(":"), u = e.trim(v.substr(0, f)).toLowerCase(), c = e.trim(v.substr(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, zu;
}
var Yu, Vp;
function vE() {
  if (Vp)
    return Yu;
  Vp = 1;
  var e = Qe;
  return Yu = e.isStandardBrowserEnv() ? function() {
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
  }(), Yu;
}
var Gu, Cp;
function Qa() {
  if (Cp)
    return Gu;
  Cp = 1;
  var e = Yo, o = Qe;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), Gu = r, Gu;
}
var ju, Sp;
function mE() {
  return Sp || (Sp = 1, ju = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), ju;
}
var Zu, Ep;
function kp() {
  if (Ep)
    return Zu;
  Ep = 1;
  var e = Qe, o = uE(), r = cE(), s = Rm, a = zm, u = wE(), c = vE(), f = qm, w = Yo, v = Qa(), _ = mE();
  return Zu = function(y) {
    return new Promise(function(D, M) {
      var L = y.data, S = y.headers, T = y.responseType, B;
      function P() {
        y.cancelToken && y.cancelToken.unsubscribe(B), y.signal && y.signal.removeEventListener("abort", B);
      }
      e.isFormData(L) && e.isStandardBrowserEnv() && delete S["Content-Type"];
      var k = new XMLHttpRequest();
      if (y.auth) {
        var R = y.auth.username || "", O = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        S.Authorization = "Basic " + btoa(R + ":" + O);
      }
      var H = a(y.baseURL, y.url);
      k.open(y.method.toUpperCase(), s(H, y.params, y.paramsSerializer), !0), k.timeout = y.timeout;
      function $e() {
        if (!!k) {
          var ge = "getAllResponseHeaders" in k ? u(k.getAllResponseHeaders()) : null, ke = !T || T === "text" || T === "json" ? k.responseText : k.response, Ae = {
            data: ke,
            status: k.status,
            statusText: k.statusText,
            headers: ge,
            config: y,
            request: k
          };
          o(function(Pe) {
            D(Pe), P();
          }, function(Pe) {
            M(Pe), P();
          }, Ae), k = null;
        }
      }
      if ("onloadend" in k ? k.onloadend = $e : k.onreadystatechange = function() {
        !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout($e);
      }, k.onabort = function() {
        !k || (M(new w("Request aborted", w.ECONNABORTED, y, k)), k = null);
      }, k.onerror = function() {
        M(new w("Network Error", w.ERR_NETWORK, y, k, k)), k = null;
      }, k.ontimeout = function() {
        var ke = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Ae = y.transitional || f;
        y.timeoutErrorMessage && (ke = y.timeoutErrorMessage), M(new w(
          ke,
          Ae.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          k
        )), k = null;
      }, e.isStandardBrowserEnv()) {
        var le = (y.withCredentials || c(H)) && y.xsrfCookieName ? r.read(y.xsrfCookieName) : void 0;
        le && (S[y.xsrfHeaderName] = le);
      }
      "setRequestHeader" in k && e.forEach(S, function(ke, Ae) {
        typeof L > "u" && Ae.toLowerCase() === "content-type" ? delete S[Ae] : k.setRequestHeader(Ae, ke);
      }), e.isUndefined(y.withCredentials) || (k.withCredentials = !!y.withCredentials), T && T !== "json" && (k.responseType = y.responseType), typeof y.onDownloadProgress == "function" && k.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && k.upload && k.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (B = function(ge) {
        !k || (M(!ge || ge && ge.type ? new v() : ge), k.abort(), k = null);
      }, y.cancelToken && y.cancelToken.subscribe(B), y.signal && (y.signal.aborted ? B() : y.signal.addEventListener("abort", B))), L || (L = null);
      var ye = _(H);
      if (ye && ["http", "https", "file"].indexOf(ye) === -1) {
        M(new w("Unsupported protocol " + ye + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      k.send(L);
    });
  }, Zu;
}
var Ku, Ip;
function _E() {
  return Ip || (Ip = 1, Ku = null), Ku;
}
var Ye = Qe, xp = aE, Ap = Yo, gE = qm, $E = Hm, yE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Bp(e, o) {
  !Ye.isUndefined(e) && Ye.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function bE() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = kp()), e;
}
function VE(e, o, r) {
  if (Ye.isString(e))
    try {
      return (o || JSON.parse)(e), Ye.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var el = {
  transitional: gE,
  adapter: bE(),
  transformRequest: [function(o, r) {
    if (xp(r, "Accept"), xp(r, "Content-Type"), Ye.isFormData(o) || Ye.isArrayBuffer(o) || Ye.isBuffer(o) || Ye.isStream(o) || Ye.isFile(o) || Ye.isBlob(o))
      return o;
    if (Ye.isArrayBufferView(o))
      return o.buffer;
    if (Ye.isURLSearchParams(o))
      return Bp(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var s = Ye.isObject(o), a = r && r["Content-Type"], u;
    if ((u = Ye.isFileList(o)) || s && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return $E(u ? { "files[]": o } : o, c && new c());
    } else if (s || a === "application/json")
      return Bp(r, "application/json"), VE(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || el.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !s && this.responseType === "json";
    if (u || a && Ye.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? Ap.from(c, Ap.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: _E()
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
Ye.forEach(["delete", "get", "head"], function(o) {
  el.headers[o] = {};
});
Ye.forEach(["post", "put", "patch"], function(o) {
  el.headers[o] = Ye.merge(yE);
});
var gd = el, CE = Qe, SE = gd, EE = function(o, r, s) {
  var a = this || SE;
  return CE.forEach(s, function(c) {
    o = c.call(a, o, r);
  }), o;
}, Ju, Tp;
function Ym() {
  return Tp || (Tp = 1, Ju = function(o) {
    return !!(o && o.__CANCEL__);
  }), Ju;
}
var Dp = Qe, Xu = EE, kE = Ym(), IE = gd, xE = Qa();
function Qu(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new xE();
}
var AE = function(o) {
  Qu(o), o.headers = o.headers || {}, o.data = Xu.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = Dp.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), Dp.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete o.headers[a];
    }
  );
  var r = o.adapter || IE.adapter;
  return r(o).then(function(a) {
    return Qu(o), a.data = Xu.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return kE(a) || (Qu(o), a && a.response && (a.response.data = Xu.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, Bt = Qe, Gm = function(o, r) {
  r = r || {};
  var s = {};
  function a(_, $) {
    return Bt.isPlainObject(_) && Bt.isPlainObject($) ? Bt.merge(_, $) : Bt.isPlainObject($) ? Bt.merge({}, $) : Bt.isArray($) ? $.slice() : $;
  }
  function u(_) {
    if (Bt.isUndefined(r[_])) {
      if (!Bt.isUndefined(o[_]))
        return a(void 0, o[_]);
    } else
      return a(o[_], r[_]);
  }
  function c(_) {
    if (!Bt.isUndefined(r[_]))
      return a(void 0, r[_]);
  }
  function f(_) {
    if (Bt.isUndefined(r[_])) {
      if (!Bt.isUndefined(o[_]))
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
  return Bt.forEach(Object.keys(o).concat(Object.keys(r)), function($) {
    var y = v[$] || u, I = y($);
    Bt.isUndefined(I) && y !== w || (s[$] = I);
  }), s;
}, ec, Np;
function jm() {
  return Np || (Np = 1, ec = {
    version: "0.27.2"
  }), ec;
}
var BE = jm().version, cr = Yo, $d = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  $d[e] = function(s) {
    return typeof s === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var Lp = {};
$d.transitional = function(o, r, s) {
  function a(u, c) {
    return "[Axios v" + BE + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
  }
  return function(u, c, f) {
    if (o === !1)
      throw new cr(
        a(c, " has been removed" + (r ? " in " + r : "")),
        cr.ERR_DEPRECATED
      );
    return r && !Lp[c] && (Lp[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, c, f) : !0;
  };
};
function TE(e, o, r) {
  if (typeof e != "object")
    throw new cr("options must be an object", cr.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a], c = o[u];
    if (c) {
      var f = e[u], w = f === void 0 || c(f, u, e);
      if (w !== !0)
        throw new cr("option " + u + " must be " + w, cr.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new cr("Unknown option " + u, cr.ERR_BAD_OPTION);
  }
}
var DE = {
  assertOptions: TE,
  validators: $d
}, Zm = Qe, NE = Rm, Mp = iE, Op = AE, tl = Gm, LE = zm, Km = DE, po = Km.validators;
function Uo(e) {
  this.defaults = e, this.interceptors = {
    request: new Mp(),
    response: new Mp()
  };
}
Uo.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = tl(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Km.assertOptions(s, {
    silentJSONParsing: po.transitional(po.boolean),
    forcedJSONParsing: po.transitional(po.boolean),
    clarifyTimeoutError: po.transitional(po.boolean)
  }, !1);
  var a = [], u = !0;
  this.interceptors.request.forEach(function(I) {
    typeof I.runWhen == "function" && I.runWhen(r) === !1 || (u = u && I.synchronous, a.unshift(I.fulfilled, I.rejected));
  });
  var c = [];
  this.interceptors.response.forEach(function(I) {
    c.push(I.fulfilled, I.rejected);
  });
  var f;
  if (!u) {
    var w = [Op, void 0];
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
    f = Op(v);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
Uo.prototype.getUri = function(o) {
  o = tl(this.defaults, o);
  var r = LE(o.baseURL, o.url);
  return NE(r, o.params, o.paramsSerializer);
};
Zm.forEach(["delete", "get", "head", "options"], function(o) {
  Uo.prototype[o] = function(r, s) {
    return this.request(tl(s || {}, {
      method: o,
      url: r,
      data: (s || {}).data
    }));
  };
});
Zm.forEach(["post", "put", "patch"], function(o) {
  function r(s) {
    return function(u, c, f) {
      return this.request(tl(f || {}, {
        method: o,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  Uo.prototype[o] = r(), Uo.prototype[o + "Form"] = r(!0);
});
var ME = Uo, tc, Pp;
function OE() {
  if (Pp)
    return tc;
  Pp = 1;
  var e = Qa();
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
  }, tc = o, tc;
}
var nc, Rp;
function PE() {
  return Rp || (Rp = 1, nc = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), nc;
}
var rc, Fp;
function RE() {
  if (Fp)
    return rc;
  Fp = 1;
  var e = Qe;
  return rc = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, rc;
}
var Up = Qe, FE = Mm, Da = ME, UE = Gm, WE = gd;
function Jm(e) {
  var o = new Da(e), r = FE(Da.prototype.request, o);
  return Up.extend(r, Da.prototype, o), Up.extend(r, o), r.create = function(a) {
    return Jm(UE(e, a));
  }, r;
}
var Vt = Jm(WE);
Vt.Axios = Da;
Vt.CanceledError = Qa();
Vt.CancelToken = OE();
Vt.isCancel = Ym();
Vt.VERSION = jm().version;
Vt.toFormData = Hm;
Vt.AxiosError = Yo;
Vt.Cancel = Vt.CanceledError;
Vt.all = function(o) {
  return Promise.all(o);
};
Vt.spread = PE();
Vt.isAxiosError = RE();
hd.exports = Vt;
hd.exports.default = Vt;
(function(e) {
  e.exports = hd.exports;
})(Lm);
const Xm = /* @__PURE__ */ MS(Lm.exports), qn = Xm.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), pt = Xm.create({
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
(function(e, o) {
  (function() {
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", v = 500, _ = "__lodash_placeholder__", $ = 1, y = 2, I = 4, D = 1, M = 2, L = 1, S = 2, T = 4, B = 8, P = 16, k = 32, R = 64, O = 128, H = 256, $e = 512, le = 30, ye = "...", ge = 800, ke = 16, Ae = 1, we = 2, Pe = 3, Le = 1 / 0, He = 9007199254740991, Hn = 17976931348623157e292, _r = 0 / 0, Ct = 4294967295, hs = Ct - 1, ps = Ct >>> 1, ws = [
      ["ary", O],
      ["bind", L],
      ["bindKey", S],
      ["curry", B],
      ["curryRight", P],
      ["flip", $e],
      ["partial", k],
      ["partialRight", R],
      ["rearg", H]
    ], kn = "[object Arguments]", gr = "[object Array]", vs = "[object AsyncFunction]", zn = "[object Boolean]", Yn = "[object Date]", ms = "[object DOMException]", $r = "[object Error]", ue = "[object Function]", te = "[object GeneratorFunction]", ne = "[object Map]", Gn = "[object Number]", _s = "[object Null]", Pt = "[object Object]", ii = "[object Promise]", Wg = "[object Proxy]", si = "[object RegExp]", tn = "[object Set]", ai = "[object String]", gs = "[object Symbol]", qg = "[object Undefined]", li = "[object WeakMap]", Hg = "[object WeakSet]", ui = "[object ArrayBuffer]", Jr = "[object DataView]", bl = "[object Float32Array]", Vl = "[object Float64Array]", Cl = "[object Int8Array]", Sl = "[object Int16Array]", El = "[object Int32Array]", kl = "[object Uint8Array]", Il = "[object Uint8ClampedArray]", xl = "[object Uint16Array]", Al = "[object Uint32Array]", zg = /\b__p \+= '';/g, Yg = /\b(__p \+=) '' \+/g, Gg = /(__e\(.*?\)|\b__t\)) \+\n'';/g, qd = /&(?:amp|lt|gt|quot|#39);/g, Hd = /[&<>"']/g, jg = RegExp(qd.source), Zg = RegExp(Hd.source), Kg = /<%-([\s\S]+?)%>/g, Jg = /<%([\s\S]+?)%>/g, zd = /<%=([\s\S]+?)%>/g, Xg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Qg = /^\w*$/, e1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Bl = /[\\^$.*+?()[\]{}|]/g, t1 = RegExp(Bl.source), Tl = /^\s+/, n1 = /\s/, r1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, o1 = /\{\n\/\* \[wrapped with (.+)\] \*/, i1 = /,? & /, s1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, a1 = /[()=,{}\[\]\/\s]/, l1 = /\\(\\)?/g, u1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Yd = /\w*$/, c1 = /^[-+]0x[0-9a-f]+$/i, d1 = /^0b[01]+$/i, f1 = /^\[object .+?Constructor\]$/, h1 = /^0o[0-7]+$/i, p1 = /^(?:0|[1-9]\d*)$/, w1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, $s = /($^)/, v1 = /['\n\r\u2028\u2029\\]/g, ys = "\\ud800-\\udfff", m1 = "\\u0300-\\u036f", _1 = "\\ufe20-\\ufe2f", g1 = "\\u20d0-\\u20ff", Gd = m1 + _1 + g1, jd = "\\u2700-\\u27bf", Zd = "a-z\\xdf-\\xf6\\xf8-\\xff", $1 = "\\xac\\xb1\\xd7\\xf7", y1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", b1 = "\\u2000-\\u206f", V1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Kd = "A-Z\\xc0-\\xd6\\xd8-\\xde", Jd = "\\ufe0e\\ufe0f", Xd = $1 + y1 + b1 + V1, Dl = "['\u2019]", C1 = "[" + ys + "]", Qd = "[" + Xd + "]", bs = "[" + Gd + "]", ef = "\\d+", S1 = "[" + jd + "]", tf = "[" + Zd + "]", nf = "[^" + ys + Xd + ef + jd + Zd + Kd + "]", Nl = "\\ud83c[\\udffb-\\udfff]", E1 = "(?:" + bs + "|" + Nl + ")", rf = "[^" + ys + "]", Ll = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ml = "[\\ud800-\\udbff][\\udc00-\\udfff]", Xr = "[" + Kd + "]", of = "\\u200d", sf = "(?:" + tf + "|" + nf + ")", k1 = "(?:" + Xr + "|" + nf + ")", af = "(?:" + Dl + "(?:d|ll|m|re|s|t|ve))?", lf = "(?:" + Dl + "(?:D|LL|M|RE|S|T|VE))?", uf = E1 + "?", cf = "[" + Jd + "]?", I1 = "(?:" + of + "(?:" + [rf, Ll, Ml].join("|") + ")" + cf + uf + ")*", x1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", A1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", df = cf + uf + I1, B1 = "(?:" + [S1, Ll, Ml].join("|") + ")" + df, T1 = "(?:" + [rf + bs + "?", bs, Ll, Ml, C1].join("|") + ")", D1 = RegExp(Dl, "g"), N1 = RegExp(bs, "g"), Ol = RegExp(Nl + "(?=" + Nl + ")|" + T1 + df, "g"), L1 = RegExp([
      Xr + "?" + tf + "+" + af + "(?=" + [Qd, Xr, "$"].join("|") + ")",
      k1 + "+" + lf + "(?=" + [Qd, Xr + sf, "$"].join("|") + ")",
      Xr + "?" + sf + "+" + af,
      Xr + "+" + lf,
      A1,
      x1,
      ef,
      B1
    ].join("|"), "g"), M1 = RegExp("[" + of + ys + Gd + Jd + "]"), O1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, P1 = [
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
    ], R1 = -1, Se = {};
    Se[bl] = Se[Vl] = Se[Cl] = Se[Sl] = Se[El] = Se[kl] = Se[Il] = Se[xl] = Se[Al] = !0, Se[kn] = Se[gr] = Se[ui] = Se[zn] = Se[Jr] = Se[Yn] = Se[$r] = Se[ue] = Se[ne] = Se[Gn] = Se[Pt] = Se[si] = Se[tn] = Se[ai] = Se[li] = !1;
    var Ve = {};
    Ve[kn] = Ve[gr] = Ve[ui] = Ve[Jr] = Ve[zn] = Ve[Yn] = Ve[bl] = Ve[Vl] = Ve[Cl] = Ve[Sl] = Ve[El] = Ve[ne] = Ve[Gn] = Ve[Pt] = Ve[si] = Ve[tn] = Ve[ai] = Ve[gs] = Ve[kl] = Ve[Il] = Ve[xl] = Ve[Al] = !0, Ve[$r] = Ve[ue] = Ve[li] = !1;
    var F1 = {
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
    }, U1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, W1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, q1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, H1 = parseFloat, z1 = parseInt, ff = typeof Si == "object" && Si && Si.Object === Object && Si, Y1 = typeof self == "object" && self && self.Object === Object && self, Ge = ff || Y1 || Function("return this")(), Pl = o && !o.nodeType && o, yr = Pl && !0 && e && !e.nodeType && e, hf = yr && yr.exports === Pl, Rl = hf && ff.process, Rt = function() {
      try {
        var b = yr && yr.require && yr.require("util").types;
        return b || Rl && Rl.binding && Rl.binding("util");
      } catch {
      }
    }(), pf = Rt && Rt.isArrayBuffer, wf = Rt && Rt.isDate, vf = Rt && Rt.isMap, mf = Rt && Rt.isRegExp, _f = Rt && Rt.isSet, gf = Rt && Rt.isTypedArray;
    function St(b, E, C) {
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
    function G1(b, E, C, U) {
      for (var K = -1, fe = b == null ? 0 : b.length; ++K < fe; ) {
        var Re = b[K];
        E(U, Re, C(Re), b);
      }
      return U;
    }
    function Ft(b, E) {
      for (var C = -1, U = b == null ? 0 : b.length; ++C < U && E(b[C], C, b) !== !1; )
        ;
      return b;
    }
    function j1(b, E) {
      for (var C = b == null ? 0 : b.length; C-- && E(b[C], C, b) !== !1; )
        ;
      return b;
    }
    function $f(b, E) {
      for (var C = -1, U = b == null ? 0 : b.length; ++C < U; )
        if (!E(b[C], C, b))
          return !1;
      return !0;
    }
    function jn(b, E) {
      for (var C = -1, U = b == null ? 0 : b.length, K = 0, fe = []; ++C < U; ) {
        var Re = b[C];
        E(Re, C, b) && (fe[K++] = Re);
      }
      return fe;
    }
    function Vs(b, E) {
      var C = b == null ? 0 : b.length;
      return !!C && Qr(b, E, 0) > -1;
    }
    function Fl(b, E, C) {
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
    function Zn(b, E) {
      for (var C = -1, U = E.length, K = b.length; ++C < U; )
        b[K + C] = E[C];
      return b;
    }
    function Ul(b, E, C, U) {
      var K = -1, fe = b == null ? 0 : b.length;
      for (U && fe && (C = b[++K]); ++K < fe; )
        C = E(C, b[K], K, b);
      return C;
    }
    function Z1(b, E, C, U) {
      var K = b == null ? 0 : b.length;
      for (U && K && (C = b[--K]); K--; )
        C = E(C, b[K], K, b);
      return C;
    }
    function Wl(b, E) {
      for (var C = -1, U = b == null ? 0 : b.length; ++C < U; )
        if (E(b[C], C, b))
          return !0;
      return !1;
    }
    var K1 = ql("length");
    function J1(b) {
      return b.split("");
    }
    function X1(b) {
      return b.match(s1) || [];
    }
    function yf(b, E, C) {
      var U;
      return C(b, function(K, fe, Re) {
        if (E(K, fe, Re))
          return U = fe, !1;
      }), U;
    }
    function Cs(b, E, C, U) {
      for (var K = b.length, fe = C + (U ? 1 : -1); U ? fe-- : ++fe < K; )
        if (E(b[fe], fe, b))
          return fe;
      return -1;
    }
    function Qr(b, E, C) {
      return E === E ? c0(b, E, C) : Cs(b, bf, C);
    }
    function Q1(b, E, C, U) {
      for (var K = C - 1, fe = b.length; ++K < fe; )
        if (U(b[K], E))
          return K;
      return -1;
    }
    function bf(b) {
      return b !== b;
    }
    function Vf(b, E) {
      var C = b == null ? 0 : b.length;
      return C ? zl(b, E) / C : _r;
    }
    function ql(b) {
      return function(E) {
        return E == null ? r : E[b];
      };
    }
    function Hl(b) {
      return function(E) {
        return b == null ? r : b[E];
      };
    }
    function Cf(b, E, C, U, K) {
      return K(b, function(fe, Re, be) {
        C = U ? (U = !1, fe) : E(C, fe, Re, be);
      }), C;
    }
    function e0(b, E) {
      var C = b.length;
      for (b.sort(E); C--; )
        b[C] = b[C].value;
      return b;
    }
    function zl(b, E) {
      for (var C, U = -1, K = b.length; ++U < K; ) {
        var fe = E(b[U]);
        fe !== r && (C = C === r ? fe : C + fe);
      }
      return C;
    }
    function Yl(b, E) {
      for (var C = -1, U = Array(b); ++C < b; )
        U[C] = E(C);
      return U;
    }
    function t0(b, E) {
      return Ee(E, function(C) {
        return [C, b[C]];
      });
    }
    function Sf(b) {
      return b && b.slice(0, xf(b) + 1).replace(Tl, "");
    }
    function Et(b) {
      return function(E) {
        return b(E);
      };
    }
    function Gl(b, E) {
      return Ee(E, function(C) {
        return b[C];
      });
    }
    function ci(b, E) {
      return b.has(E);
    }
    function Ef(b, E) {
      for (var C = -1, U = b.length; ++C < U && Qr(E, b[C], 0) > -1; )
        ;
      return C;
    }
    function kf(b, E) {
      for (var C = b.length; C-- && Qr(E, b[C], 0) > -1; )
        ;
      return C;
    }
    function n0(b, E) {
      for (var C = b.length, U = 0; C--; )
        b[C] === E && ++U;
      return U;
    }
    var r0 = Hl(F1), o0 = Hl(U1);
    function i0(b) {
      return "\\" + q1[b];
    }
    function s0(b, E) {
      return b == null ? r : b[E];
    }
    function eo(b) {
      return M1.test(b);
    }
    function a0(b) {
      return O1.test(b);
    }
    function l0(b) {
      for (var E, C = []; !(E = b.next()).done; )
        C.push(E.value);
      return C;
    }
    function jl(b) {
      var E = -1, C = Array(b.size);
      return b.forEach(function(U, K) {
        C[++E] = [K, U];
      }), C;
    }
    function If(b, E) {
      return function(C) {
        return b(E(C));
      };
    }
    function Kn(b, E) {
      for (var C = -1, U = b.length, K = 0, fe = []; ++C < U; ) {
        var Re = b[C];
        (Re === E || Re === _) && (b[C] = _, fe[K++] = C);
      }
      return fe;
    }
    function Ss(b) {
      var E = -1, C = Array(b.size);
      return b.forEach(function(U) {
        C[++E] = U;
      }), C;
    }
    function u0(b) {
      var E = -1, C = Array(b.size);
      return b.forEach(function(U) {
        C[++E] = [U, U];
      }), C;
    }
    function c0(b, E, C) {
      for (var U = C - 1, K = b.length; ++U < K; )
        if (b[U] === E)
          return U;
      return -1;
    }
    function d0(b, E, C) {
      for (var U = C + 1; U--; )
        if (b[U] === E)
          return U;
      return U;
    }
    function to(b) {
      return eo(b) ? h0(b) : K1(b);
    }
    function nn(b) {
      return eo(b) ? p0(b) : J1(b);
    }
    function xf(b) {
      for (var E = b.length; E-- && n1.test(b.charAt(E)); )
        ;
      return E;
    }
    var f0 = Hl(W1);
    function h0(b) {
      for (var E = Ol.lastIndex = 0; Ol.test(b); )
        ++E;
      return E;
    }
    function p0(b) {
      return b.match(Ol) || [];
    }
    function w0(b) {
      return b.match(L1) || [];
    }
    var v0 = function b(E) {
      E = E == null ? Ge : no.defaults(Ge.Object(), E, no.pick(Ge, P1));
      var C = E.Array, U = E.Date, K = E.Error, fe = E.Function, Re = E.Math, be = E.Object, Zl = E.RegExp, m0 = E.String, Ut = E.TypeError, Es = C.prototype, _0 = fe.prototype, ro = be.prototype, ks = E["__core-js_shared__"], Is = _0.toString, ve = ro.hasOwnProperty, g0 = 0, Af = function() {
        var t = /[^.]+$/.exec(ks && ks.keys && ks.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), xs = ro.toString, $0 = Is.call(be), y0 = Ge._, b0 = Zl(
        "^" + Is.call(ve).replace(Bl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), As = hf ? E.Buffer : r, Jn = E.Symbol, Bs = E.Uint8Array, Bf = As ? As.allocUnsafe : r, Ts = If(be.getPrototypeOf, be), Tf = be.create, Df = ro.propertyIsEnumerable, Ds = Es.splice, Nf = Jn ? Jn.isConcatSpreadable : r, di = Jn ? Jn.iterator : r, br = Jn ? Jn.toStringTag : r, Ns = function() {
        try {
          var t = kr(be, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), V0 = E.clearTimeout !== Ge.clearTimeout && E.clearTimeout, C0 = U && U.now !== Ge.Date.now && U.now, S0 = E.setTimeout !== Ge.setTimeout && E.setTimeout, Ls = Re.ceil, Ms = Re.floor, Kl = be.getOwnPropertySymbols, E0 = As ? As.isBuffer : r, Lf = E.isFinite, k0 = Es.join, I0 = If(be.keys, be), Fe = Re.max, et = Re.min, x0 = U.now, A0 = E.parseInt, Mf = Re.random, B0 = Es.reverse, Jl = kr(E, "DataView"), fi = kr(E, "Map"), Xl = kr(E, "Promise"), oo = kr(E, "Set"), hi = kr(E, "WeakMap"), pi = kr(be, "create"), Os = hi && new hi(), io = {}, T0 = Ir(Jl), D0 = Ir(fi), N0 = Ir(Xl), L0 = Ir(oo), M0 = Ir(hi), Ps = Jn ? Jn.prototype : r, wi = Ps ? Ps.valueOf : r, Of = Ps ? Ps.toString : r;
      function h(t) {
        if (Be(t) && !J(t) && !(t instanceof ie)) {
          if (t instanceof Wt)
            return t;
          if (ve.call(t, "__wrapped__"))
            return Ph(t);
        }
        return new Wt(t);
      }
      var so = function() {
        function t() {
        }
        return function(n) {
          if (!Ie(n))
            return {};
          if (Tf)
            return Tf(n);
          t.prototype = n;
          var i = new t();
          return t.prototype = r, i;
        };
      }();
      function Rs() {
      }
      function Wt(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        escape: Kg,
        evaluate: Jg,
        interpolate: zd,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = Rs.prototype, h.prototype.constructor = h, Wt.prototype = so(Rs.prototype), Wt.prototype.constructor = Wt;
      function ie(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ct, this.__views__ = [];
      }
      function O0() {
        var t = new ie(this.__wrapped__);
        return t.__actions__ = wt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = wt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = wt(this.__views__), t;
      }
      function P0() {
        if (this.__filtered__) {
          var t = new ie(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function R0() {
        var t = this.__wrapped__.value(), n = this.__dir__, i = J(t), l = n < 0, d = i ? t.length : 0, p = J$(0, d, this.__views__), m = p.start, g = p.end, V = g - m, x = l ? g : m - 1, A = this.__iteratees__, N = A.length, F = 0, q = et(V, this.__takeCount__);
        if (!i || !l && d == V && q == V)
          return ah(t, this.__actions__);
        var G = [];
        e:
          for (; V-- && F < q; ) {
            x += n;
            for (var Q = -1, j = t[x]; ++Q < N; ) {
              var oe = A[Q], se = oe.iteratee, xt = oe.type, ct = se(j);
              if (xt == we)
                j = ct;
              else if (!ct) {
                if (xt == Ae)
                  continue e;
                break e;
              }
            }
            G[F++] = j;
          }
        return G;
      }
      ie.prototype = so(Rs.prototype), ie.prototype.constructor = ie;
      function Vr(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function F0() {
        this.__data__ = pi ? pi(null) : {}, this.size = 0;
      }
      function U0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function W0(t) {
        var n = this.__data__;
        if (pi) {
          var i = n[t];
          return i === w ? r : i;
        }
        return ve.call(n, t) ? n[t] : r;
      }
      function q0(t) {
        var n = this.__data__;
        return pi ? n[t] !== r : ve.call(n, t);
      }
      function H0(t, n) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = pi && n === r ? w : n, this;
      }
      Vr.prototype.clear = F0, Vr.prototype.delete = U0, Vr.prototype.get = W0, Vr.prototype.has = q0, Vr.prototype.set = H0;
      function In(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function z0() {
        this.__data__ = [], this.size = 0;
      }
      function Y0(t) {
        var n = this.__data__, i = Fs(n, t);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : Ds.call(n, i, 1), --this.size, !0;
      }
      function G0(t) {
        var n = this.__data__, i = Fs(n, t);
        return i < 0 ? r : n[i][1];
      }
      function j0(t) {
        return Fs(this.__data__, t) > -1;
      }
      function Z0(t, n) {
        var i = this.__data__, l = Fs(i, t);
        return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
      }
      In.prototype.clear = z0, In.prototype.delete = Y0, In.prototype.get = G0, In.prototype.has = j0, In.prototype.set = Z0;
      function xn(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function K0() {
        this.size = 0, this.__data__ = {
          hash: new Vr(),
          map: new (fi || In)(),
          string: new Vr()
        };
      }
      function J0(t) {
        var n = Xs(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function X0(t) {
        return Xs(this, t).get(t);
      }
      function Q0(t) {
        return Xs(this, t).has(t);
      }
      function e$(t, n) {
        var i = Xs(this, t), l = i.size;
        return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
      }
      xn.prototype.clear = K0, xn.prototype.delete = J0, xn.prototype.get = X0, xn.prototype.has = Q0, xn.prototype.set = e$;
      function Cr(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new xn(); ++n < i; )
          this.add(t[n]);
      }
      function t$(t) {
        return this.__data__.set(t, w), this;
      }
      function n$(t) {
        return this.__data__.has(t);
      }
      Cr.prototype.add = Cr.prototype.push = t$, Cr.prototype.has = n$;
      function rn(t) {
        var n = this.__data__ = new In(t);
        this.size = n.size;
      }
      function r$() {
        this.__data__ = new In(), this.size = 0;
      }
      function o$(t) {
        var n = this.__data__, i = n.delete(t);
        return this.size = n.size, i;
      }
      function i$(t) {
        return this.__data__.get(t);
      }
      function s$(t) {
        return this.__data__.has(t);
      }
      function a$(t, n) {
        var i = this.__data__;
        if (i instanceof In) {
          var l = i.__data__;
          if (!fi || l.length < a - 1)
            return l.push([t, n]), this.size = ++i.size, this;
          i = this.__data__ = new xn(l);
        }
        return i.set(t, n), this.size = i.size, this;
      }
      rn.prototype.clear = r$, rn.prototype.delete = o$, rn.prototype.get = i$, rn.prototype.has = s$, rn.prototype.set = a$;
      function Pf(t, n) {
        var i = J(t), l = !i && xr(t), d = !i && !l && nr(t), p = !i && !l && !d && co(t), m = i || l || d || p, g = m ? Yl(t.length, m0) : [], V = g.length;
        for (var x in t)
          (n || ve.call(t, x)) && !(m && (x == "length" || d && (x == "offset" || x == "parent") || p && (x == "buffer" || x == "byteLength" || x == "byteOffset") || Dn(x, V))) && g.push(x);
        return g;
      }
      function Rf(t) {
        var n = t.length;
        return n ? t[uu(0, n - 1)] : r;
      }
      function l$(t, n) {
        return Qs(wt(t), Sr(n, 0, t.length));
      }
      function u$(t) {
        return Qs(wt(t));
      }
      function Ql(t, n, i) {
        (i !== r && !on(t[n], i) || i === r && !(n in t)) && An(t, n, i);
      }
      function vi(t, n, i) {
        var l = t[n];
        (!(ve.call(t, n) && on(l, i)) || i === r && !(n in t)) && An(t, n, i);
      }
      function Fs(t, n) {
        for (var i = t.length; i--; )
          if (on(t[i][0], n))
            return i;
        return -1;
      }
      function c$(t, n, i, l) {
        return Xn(t, function(d, p, m) {
          n(l, d, i(d), m);
        }), l;
      }
      function Ff(t, n) {
        return t && vn(n, ze(n), t);
      }
      function d$(t, n) {
        return t && vn(n, mt(n), t);
      }
      function An(t, n, i) {
        n == "__proto__" && Ns ? Ns(t, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[n] = i;
      }
      function eu(t, n) {
        for (var i = -1, l = n.length, d = C(l), p = t == null; ++i < l; )
          d[i] = p ? r : Nu(t, n[i]);
        return d;
      }
      function Sr(t, n, i) {
        return t === t && (i !== r && (t = t <= i ? t : i), n !== r && (t = t >= n ? t : n)), t;
      }
      function qt(t, n, i, l, d, p) {
        var m, g = n & $, V = n & y, x = n & I;
        if (i && (m = d ? i(t, l, d, p) : i(t)), m !== r)
          return m;
        if (!Ie(t))
          return t;
        var A = J(t);
        if (A) {
          if (m = Q$(t), !g)
            return wt(t, m);
        } else {
          var N = tt(t), F = N == ue || N == te;
          if (nr(t))
            return ch(t, g);
          if (N == Pt || N == kn || F && !d) {
            if (m = V || F ? {} : xh(t), !g)
              return V ? W$(t, d$(m, t)) : U$(t, Ff(m, t));
          } else {
            if (!Ve[N])
              return d ? t : {};
            m = ey(t, N, g);
          }
        }
        p || (p = new rn());
        var q = p.get(t);
        if (q)
          return q;
        p.set(t, m), op(t) ? t.forEach(function(j) {
          m.add(qt(j, n, i, j, t, p));
        }) : np(t) && t.forEach(function(j, oe) {
          m.set(oe, qt(j, n, i, oe, t, p));
        });
        var G = x ? V ? $u : gu : V ? mt : ze, Q = A ? r : G(t);
        return Ft(Q || t, function(j, oe) {
          Q && (oe = j, j = t[oe]), vi(m, oe, qt(j, n, i, oe, t, p));
        }), m;
      }
      function f$(t) {
        var n = ze(t);
        return function(i) {
          return Uf(i, t, n);
        };
      }
      function Uf(t, n, i) {
        var l = i.length;
        if (t == null)
          return !l;
        for (t = be(t); l--; ) {
          var d = i[l], p = n[d], m = t[d];
          if (m === r && !(d in t) || !p(m))
            return !1;
        }
        return !0;
      }
      function Wf(t, n, i) {
        if (typeof t != "function")
          throw new Ut(c);
        return Vi(function() {
          t.apply(r, i);
        }, n);
      }
      function mi(t, n, i, l) {
        var d = -1, p = Vs, m = !0, g = t.length, V = [], x = n.length;
        if (!g)
          return V;
        i && (n = Ee(n, Et(i))), l ? (p = Fl, m = !1) : n.length >= a && (p = ci, m = !1, n = new Cr(n));
        e:
          for (; ++d < g; ) {
            var A = t[d], N = i == null ? A : i(A);
            if (A = l || A !== 0 ? A : 0, m && N === N) {
              for (var F = x; F--; )
                if (n[F] === N)
                  continue e;
              V.push(A);
            } else
              p(n, N, l) || V.push(A);
          }
        return V;
      }
      var Xn = wh(wn), qf = wh(nu, !0);
      function h$(t, n) {
        var i = !0;
        return Xn(t, function(l, d, p) {
          return i = !!n(l, d, p), i;
        }), i;
      }
      function Us(t, n, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var p = t[l], m = n(p);
          if (m != null && (g === r ? m === m && !It(m) : i(m, g)))
            var g = m, V = p;
        }
        return V;
      }
      function p$(t, n, i, l) {
        var d = t.length;
        for (i = X(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === r || l > d ? d : X(l), l < 0 && (l += d), l = i > l ? 0 : sp(l); i < l; )
          t[i++] = n;
        return t;
      }
      function Hf(t, n) {
        var i = [];
        return Xn(t, function(l, d, p) {
          n(l, d, p) && i.push(l);
        }), i;
      }
      function je(t, n, i, l, d) {
        var p = -1, m = t.length;
        for (i || (i = ny), d || (d = []); ++p < m; ) {
          var g = t[p];
          n > 0 && i(g) ? n > 1 ? je(g, n - 1, i, l, d) : Zn(d, g) : l || (d[d.length] = g);
        }
        return d;
      }
      var tu = vh(), zf = vh(!0);
      function wn(t, n) {
        return t && tu(t, n, ze);
      }
      function nu(t, n) {
        return t && zf(t, n, ze);
      }
      function Ws(t, n) {
        return jn(n, function(i) {
          return Nn(t[i]);
        });
      }
      function Er(t, n) {
        n = er(n, t);
        for (var i = 0, l = n.length; t != null && i < l; )
          t = t[mn(n[i++])];
        return i && i == l ? t : r;
      }
      function Yf(t, n, i) {
        var l = n(t);
        return J(t) ? l : Zn(l, i(t));
      }
      function lt(t) {
        return t == null ? t === r ? qg : _s : br && br in be(t) ? K$(t) : uy(t);
      }
      function ru(t, n) {
        return t > n;
      }
      function w$(t, n) {
        return t != null && ve.call(t, n);
      }
      function v$(t, n) {
        return t != null && n in be(t);
      }
      function m$(t, n, i) {
        return t >= et(n, i) && t < Fe(n, i);
      }
      function ou(t, n, i) {
        for (var l = i ? Fl : Vs, d = t[0].length, p = t.length, m = p, g = C(p), V = 1 / 0, x = []; m--; ) {
          var A = t[m];
          m && n && (A = Ee(A, Et(n))), V = et(A.length, V), g[m] = !i && (n || d >= 120 && A.length >= 120) ? new Cr(m && A) : r;
        }
        A = t[0];
        var N = -1, F = g[0];
        e:
          for (; ++N < d && x.length < V; ) {
            var q = A[N], G = n ? n(q) : q;
            if (q = i || q !== 0 ? q : 0, !(F ? ci(F, G) : l(x, G, i))) {
              for (m = p; --m; ) {
                var Q = g[m];
                if (!(Q ? ci(Q, G) : l(t[m], G, i)))
                  continue e;
              }
              F && F.push(G), x.push(q);
            }
          }
        return x;
      }
      function _$(t, n, i, l) {
        return wn(t, function(d, p, m) {
          n(l, i(d), p, m);
        }), l;
      }
      function _i(t, n, i) {
        n = er(n, t), t = Dh(t, n);
        var l = t == null ? t : t[mn(zt(n))];
        return l == null ? r : St(l, t, i);
      }
      function Gf(t) {
        return Be(t) && lt(t) == kn;
      }
      function g$(t) {
        return Be(t) && lt(t) == ui;
      }
      function $$(t) {
        return Be(t) && lt(t) == Yn;
      }
      function gi(t, n, i, l, d) {
        return t === n ? !0 : t == null || n == null || !Be(t) && !Be(n) ? t !== t && n !== n : y$(t, n, i, l, gi, d);
      }
      function y$(t, n, i, l, d, p) {
        var m = J(t), g = J(n), V = m ? gr : tt(t), x = g ? gr : tt(n);
        V = V == kn ? Pt : V, x = x == kn ? Pt : x;
        var A = V == Pt, N = x == Pt, F = V == x;
        if (F && nr(t)) {
          if (!nr(n))
            return !1;
          m = !0, A = !1;
        }
        if (F && !A)
          return p || (p = new rn()), m || co(t) ? Eh(t, n, i, l, d, p) : j$(t, n, V, i, l, d, p);
        if (!(i & D)) {
          var q = A && ve.call(t, "__wrapped__"), G = N && ve.call(n, "__wrapped__");
          if (q || G) {
            var Q = q ? t.value() : t, j = G ? n.value() : n;
            return p || (p = new rn()), d(Q, j, i, l, p);
          }
        }
        return F ? (p || (p = new rn()), Z$(t, n, i, l, d, p)) : !1;
      }
      function b$(t) {
        return Be(t) && tt(t) == ne;
      }
      function iu(t, n, i, l) {
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
          var V = g[0], x = t[V], A = g[1];
          if (m && g[2]) {
            if (x === r && !(V in t))
              return !1;
          } else {
            var N = new rn();
            if (l)
              var F = l(x, A, V, t, n, N);
            if (!(F === r ? gi(A, x, D | M, l, N) : F))
              return !1;
          }
        }
        return !0;
      }
      function jf(t) {
        if (!Ie(t) || oy(t))
          return !1;
        var n = Nn(t) ? b0 : f1;
        return n.test(Ir(t));
      }
      function V$(t) {
        return Be(t) && lt(t) == si;
      }
      function C$(t) {
        return Be(t) && tt(t) == tn;
      }
      function S$(t) {
        return Be(t) && ia(t.length) && !!Se[lt(t)];
      }
      function Zf(t) {
        return typeof t == "function" ? t : t == null ? _t : typeof t == "object" ? J(t) ? Xf(t[0], t[1]) : Jf(t) : mp(t);
      }
      function su(t) {
        if (!bi(t))
          return I0(t);
        var n = [];
        for (var i in be(t))
          ve.call(t, i) && i != "constructor" && n.push(i);
        return n;
      }
      function E$(t) {
        if (!Ie(t))
          return ly(t);
        var n = bi(t), i = [];
        for (var l in t)
          l == "constructor" && (n || !ve.call(t, l)) || i.push(l);
        return i;
      }
      function au(t, n) {
        return t < n;
      }
      function Kf(t, n) {
        var i = -1, l = vt(t) ? C(t.length) : [];
        return Xn(t, function(d, p, m) {
          l[++i] = n(d, p, m);
        }), l;
      }
      function Jf(t) {
        var n = bu(t);
        return n.length == 1 && n[0][2] ? Bh(n[0][0], n[0][1]) : function(i) {
          return i === t || iu(i, t, n);
        };
      }
      function Xf(t, n) {
        return Cu(t) && Ah(n) ? Bh(mn(t), n) : function(i) {
          var l = Nu(i, t);
          return l === r && l === n ? Lu(i, t) : gi(n, l, D | M);
        };
      }
      function qs(t, n, i, l, d) {
        t !== n && tu(n, function(p, m) {
          if (d || (d = new rn()), Ie(p))
            k$(t, n, m, i, qs, l, d);
          else {
            var g = l ? l(Eu(t, m), p, m + "", t, n, d) : r;
            g === r && (g = p), Ql(t, m, g);
          }
        }, mt);
      }
      function k$(t, n, i, l, d, p, m) {
        var g = Eu(t, i), V = Eu(n, i), x = m.get(V);
        if (x) {
          Ql(t, i, x);
          return;
        }
        var A = p ? p(g, V, i + "", t, n, m) : r, N = A === r;
        if (N) {
          var F = J(V), q = !F && nr(V), G = !F && !q && co(V);
          A = V, F || q || G ? J(g) ? A = g : Te(g) ? A = wt(g) : q ? (N = !1, A = ch(V, !0)) : G ? (N = !1, A = dh(V, !0)) : A = [] : Ci(V) || xr(V) ? (A = g, xr(g) ? A = ap(g) : (!Ie(g) || Nn(g)) && (A = xh(V))) : N = !1;
        }
        N && (m.set(V, A), d(A, V, l, p, m), m.delete(V)), Ql(t, i, A);
      }
      function Qf(t, n) {
        var i = t.length;
        if (!!i)
          return n += n < 0 ? i : 0, Dn(n, i) ? t[n] : r;
      }
      function eh(t, n, i) {
        n.length ? n = Ee(n, function(p) {
          return J(p) ? function(m) {
            return Er(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [_t];
        var l = -1;
        n = Ee(n, Et(Y()));
        var d = Kf(t, function(p, m, g) {
          var V = Ee(n, function(x) {
            return x(p);
          });
          return { criteria: V, index: ++l, value: p };
        });
        return e0(d, function(p, m) {
          return F$(p, m, i);
        });
      }
      function I$(t, n) {
        return th(t, n, function(i, l) {
          return Lu(t, l);
        });
      }
      function th(t, n, i) {
        for (var l = -1, d = n.length, p = {}; ++l < d; ) {
          var m = n[l], g = Er(t, m);
          i(g, m) && $i(p, er(m, t), g);
        }
        return p;
      }
      function x$(t) {
        return function(n) {
          return Er(n, t);
        };
      }
      function lu(t, n, i, l) {
        var d = l ? Q1 : Qr, p = -1, m = n.length, g = t;
        for (t === n && (n = wt(n)), i && (g = Ee(t, Et(i))); ++p < m; )
          for (var V = 0, x = n[p], A = i ? i(x) : x; (V = d(g, A, V, l)) > -1; )
            g !== t && Ds.call(g, V, 1), Ds.call(t, V, 1);
        return t;
      }
      function nh(t, n) {
        for (var i = t ? n.length : 0, l = i - 1; i--; ) {
          var d = n[i];
          if (i == l || d !== p) {
            var p = d;
            Dn(d) ? Ds.call(t, d, 1) : fu(t, d);
          }
        }
        return t;
      }
      function uu(t, n) {
        return t + Ms(Mf() * (n - t + 1));
      }
      function A$(t, n, i, l) {
        for (var d = -1, p = Fe(Ls((n - t) / (i || 1)), 0), m = C(p); p--; )
          m[l ? p : ++d] = t, t += i;
        return m;
      }
      function cu(t, n) {
        var i = "";
        if (!t || n < 1 || n > He)
          return i;
        do
          n % 2 && (i += t), n = Ms(n / 2), n && (t += t);
        while (n);
        return i;
      }
      function re(t, n) {
        return ku(Th(t, n, _t), t + "");
      }
      function B$(t) {
        return Rf(fo(t));
      }
      function T$(t, n) {
        var i = fo(t);
        return Qs(i, Sr(n, 0, i.length));
      }
      function $i(t, n, i, l) {
        if (!Ie(t))
          return t;
        n = er(n, t);
        for (var d = -1, p = n.length, m = p - 1, g = t; g != null && ++d < p; ) {
          var V = mn(n[d]), x = i;
          if (V === "__proto__" || V === "constructor" || V === "prototype")
            return t;
          if (d != m) {
            var A = g[V];
            x = l ? l(A, V, g) : r, x === r && (x = Ie(A) ? A : Dn(n[d + 1]) ? [] : {});
          }
          vi(g, V, x), g = g[V];
        }
        return t;
      }
      var rh = Os ? function(t, n) {
        return Os.set(t, n), t;
      } : _t, D$ = Ns ? function(t, n) {
        return Ns(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Ou(n),
          writable: !0
        });
      } : _t;
      function N$(t) {
        return Qs(fo(t));
      }
      function Ht(t, n, i) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = C(d); ++l < d; )
          p[l] = t[l + n];
        return p;
      }
      function L$(t, n) {
        var i;
        return Xn(t, function(l, d, p) {
          return i = n(l, d, p), !i;
        }), !!i;
      }
      function Hs(t, n, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= ps) {
          for (; l < d; ) {
            var p = l + d >>> 1, m = t[p];
            m !== null && !It(m) && (i ? m <= n : m < n) ? l = p + 1 : d = p;
          }
          return d;
        }
        return du(t, n, _t, i);
      }
      function du(t, n, i, l) {
        var d = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var m = n !== n, g = n === null, V = It(n), x = n === r; d < p; ) {
          var A = Ms((d + p) / 2), N = i(t[A]), F = N !== r, q = N === null, G = N === N, Q = It(N);
          if (m)
            var j = l || G;
          else
            x ? j = G && (l || F) : g ? j = G && F && (l || !q) : V ? j = G && F && !q && (l || !Q) : q || Q ? j = !1 : j = l ? N <= n : N < n;
          j ? d = A + 1 : p = A;
        }
        return et(p, hs);
      }
      function oh(t, n) {
        for (var i = -1, l = t.length, d = 0, p = []; ++i < l; ) {
          var m = t[i], g = n ? n(m) : m;
          if (!i || !on(g, V)) {
            var V = g;
            p[d++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function ih(t) {
        return typeof t == "number" ? t : It(t) ? _r : +t;
      }
      function kt(t) {
        if (typeof t == "string")
          return t;
        if (J(t))
          return Ee(t, kt) + "";
        if (It(t))
          return Of ? Of.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Le ? "-0" : n;
      }
      function Qn(t, n, i) {
        var l = -1, d = Vs, p = t.length, m = !0, g = [], V = g;
        if (i)
          m = !1, d = Fl;
        else if (p >= a) {
          var x = n ? null : Y$(t);
          if (x)
            return Ss(x);
          m = !1, d = ci, V = new Cr();
        } else
          V = n ? [] : g;
        e:
          for (; ++l < p; ) {
            var A = t[l], N = n ? n(A) : A;
            if (A = i || A !== 0 ? A : 0, m && N === N) {
              for (var F = V.length; F--; )
                if (V[F] === N)
                  continue e;
              n && V.push(N), g.push(A);
            } else
              d(V, N, i) || (V !== g && V.push(N), g.push(A));
          }
        return g;
      }
      function fu(t, n) {
        return n = er(n, t), t = Dh(t, n), t == null || delete t[mn(zt(n))];
      }
      function sh(t, n, i, l) {
        return $i(t, n, i(Er(t, n)), l);
      }
      function zs(t, n, i, l) {
        for (var d = t.length, p = l ? d : -1; (l ? p-- : ++p < d) && n(t[p], p, t); )
          ;
        return i ? Ht(t, l ? 0 : p, l ? p + 1 : d) : Ht(t, l ? p + 1 : 0, l ? d : p);
      }
      function ah(t, n) {
        var i = t;
        return i instanceof ie && (i = i.value()), Ul(n, function(l, d) {
          return d.func.apply(d.thisArg, Zn([l], d.args));
        }, i);
      }
      function hu(t, n, i) {
        var l = t.length;
        if (l < 2)
          return l ? Qn(t[0]) : [];
        for (var d = -1, p = C(l); ++d < l; )
          for (var m = t[d], g = -1; ++g < l; )
            g != d && (p[d] = mi(p[d] || m, t[g], n, i));
        return Qn(je(p, 1), n, i);
      }
      function lh(t, n, i) {
        for (var l = -1, d = t.length, p = n.length, m = {}; ++l < d; ) {
          var g = l < p ? n[l] : r;
          i(m, t[l], g);
        }
        return m;
      }
      function pu(t) {
        return Te(t) ? t : [];
      }
      function wu(t) {
        return typeof t == "function" ? t : _t;
      }
      function er(t, n) {
        return J(t) ? t : Cu(t, n) ? [t] : Oh(pe(t));
      }
      var M$ = re;
      function tr(t, n, i) {
        var l = t.length;
        return i = i === r ? l : i, !n && i >= l ? t : Ht(t, n, i);
      }
      var uh = V0 || function(t) {
        return Ge.clearTimeout(t);
      };
      function ch(t, n) {
        if (n)
          return t.slice();
        var i = t.length, l = Bf ? Bf(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function vu(t) {
        var n = new t.constructor(t.byteLength);
        return new Bs(n).set(new Bs(t)), n;
      }
      function O$(t, n) {
        var i = n ? vu(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function P$(t) {
        var n = new t.constructor(t.source, Yd.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function R$(t) {
        return wi ? be(wi.call(t)) : {};
      }
      function dh(t, n) {
        var i = n ? vu(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function fh(t, n) {
        if (t !== n) {
          var i = t !== r, l = t === null, d = t === t, p = It(t), m = n !== r, g = n === null, V = n === n, x = It(n);
          if (!g && !x && !p && t > n || p && m && V && !g && !x || l && m && V || !i && V || !d)
            return 1;
          if (!l && !p && !x && t < n || x && i && d && !l && !p || g && i && d || !m && d || !V)
            return -1;
        }
        return 0;
      }
      function F$(t, n, i) {
        for (var l = -1, d = t.criteria, p = n.criteria, m = d.length, g = i.length; ++l < m; ) {
          var V = fh(d[l], p[l]);
          if (V) {
            if (l >= g)
              return V;
            var x = i[l];
            return V * (x == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function hh(t, n, i, l) {
        for (var d = -1, p = t.length, m = i.length, g = -1, V = n.length, x = Fe(p - m, 0), A = C(V + x), N = !l; ++g < V; )
          A[g] = n[g];
        for (; ++d < m; )
          (N || d < p) && (A[i[d]] = t[d]);
        for (; x--; )
          A[g++] = t[d++];
        return A;
      }
      function ph(t, n, i, l) {
        for (var d = -1, p = t.length, m = -1, g = i.length, V = -1, x = n.length, A = Fe(p - g, 0), N = C(A + x), F = !l; ++d < A; )
          N[d] = t[d];
        for (var q = d; ++V < x; )
          N[q + V] = n[V];
        for (; ++m < g; )
          (F || d < p) && (N[q + i[m]] = t[d++]);
        return N;
      }
      function wt(t, n) {
        var i = -1, l = t.length;
        for (n || (n = C(l)); ++i < l; )
          n[i] = t[i];
        return n;
      }
      function vn(t, n, i, l) {
        var d = !i;
        i || (i = {});
        for (var p = -1, m = n.length; ++p < m; ) {
          var g = n[p], V = l ? l(i[g], t[g], g, i, t) : r;
          V === r && (V = t[g]), d ? An(i, g, V) : vi(i, g, V);
        }
        return i;
      }
      function U$(t, n) {
        return vn(t, Vu(t), n);
      }
      function W$(t, n) {
        return vn(t, kh(t), n);
      }
      function Ys(t, n) {
        return function(i, l) {
          var d = J(i) ? G1 : c$, p = n ? n() : {};
          return d(i, t, Y(l, 2), p);
        };
      }
      function ao(t) {
        return re(function(n, i) {
          var l = -1, d = i.length, p = d > 1 ? i[d - 1] : r, m = d > 2 ? i[2] : r;
          for (p = t.length > 3 && typeof p == "function" ? (d--, p) : r, m && ut(i[0], i[1], m) && (p = d < 3 ? r : p, d = 1), n = be(n); ++l < d; ) {
            var g = i[l];
            g && t(n, g, l, p);
          }
          return n;
        });
      }
      function wh(t, n) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!vt(i))
            return t(i, l);
          for (var d = i.length, p = n ? d : -1, m = be(i); (n ? p-- : ++p < d) && l(m[p], p, m) !== !1; )
            ;
          return i;
        };
      }
      function vh(t) {
        return function(n, i, l) {
          for (var d = -1, p = be(n), m = l(n), g = m.length; g--; ) {
            var V = m[t ? g : ++d];
            if (i(p[V], V, p) === !1)
              break;
          }
          return n;
        };
      }
      function q$(t, n, i) {
        var l = n & L, d = yi(t);
        function p() {
          var m = this && this !== Ge && this instanceof p ? d : t;
          return m.apply(l ? i : this, arguments);
        }
        return p;
      }
      function mh(t) {
        return function(n) {
          n = pe(n);
          var i = eo(n) ? nn(n) : r, l = i ? i[0] : n.charAt(0), d = i ? tr(i, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function lo(t) {
        return function(n) {
          return Ul(wp(pp(n).replace(D1, "")), t, "");
        };
      }
      function yi(t) {
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
          var i = so(t.prototype), l = t.apply(i, n);
          return Ie(l) ? l : i;
        };
      }
      function H$(t, n, i) {
        var l = yi(t);
        function d() {
          for (var p = arguments.length, m = C(p), g = p, V = uo(d); g--; )
            m[g] = arguments[g];
          var x = p < 3 && m[0] !== V && m[p - 1] !== V ? [] : Kn(m, V);
          if (p -= x.length, p < i)
            return bh(
              t,
              n,
              Gs,
              d.placeholder,
              r,
              m,
              x,
              r,
              r,
              i - p
            );
          var A = this && this !== Ge && this instanceof d ? l : t;
          return St(A, this, m);
        }
        return d;
      }
      function _h(t) {
        return function(n, i, l) {
          var d = be(n);
          if (!vt(n)) {
            var p = Y(i, 3);
            n = ze(n), i = function(g) {
              return p(d[g], g, d);
            };
          }
          var m = t(n, i, l);
          return m > -1 ? d[p ? n[m] : m] : r;
        };
      }
      function gh(t) {
        return Tn(function(n) {
          var i = n.length, l = i, d = Wt.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new Ut(c);
            if (d && !m && Js(p) == "wrapper")
              var m = new Wt([], !0);
          }
          for (l = m ? l : i; ++l < i; ) {
            p = n[l];
            var g = Js(p), V = g == "wrapper" ? yu(p) : r;
            V && Su(V[0]) && V[1] == (O | B | k | H) && !V[4].length && V[9] == 1 ? m = m[Js(V[0])].apply(m, V[3]) : m = p.length == 1 && Su(p) ? m[g]() : m.thru(p);
          }
          return function() {
            var x = arguments, A = x[0];
            if (m && x.length == 1 && J(A))
              return m.plant(A).value();
            for (var N = 0, F = i ? n[N].apply(this, x) : A; ++N < i; )
              F = n[N].call(this, F);
            return F;
          };
        });
      }
      function Gs(t, n, i, l, d, p, m, g, V, x) {
        var A = n & O, N = n & L, F = n & S, q = n & (B | P), G = n & $e, Q = F ? r : yi(t);
        function j() {
          for (var oe = arguments.length, se = C(oe), xt = oe; xt--; )
            se[xt] = arguments[xt];
          if (q)
            var ct = uo(j), At = n0(se, ct);
          if (l && (se = hh(se, l, d, q)), p && (se = ph(se, p, m, q)), oe -= At, q && oe < x) {
            var De = Kn(se, ct);
            return bh(
              t,
              n,
              Gs,
              j.placeholder,
              i,
              se,
              De,
              g,
              V,
              x - oe
            );
          }
          var sn = N ? i : this, Mn = F ? sn[t] : t;
          return oe = se.length, g ? se = cy(se, g) : G && oe > 1 && se.reverse(), A && V < oe && (se.length = V), this && this !== Ge && this instanceof j && (Mn = Q || yi(Mn)), Mn.apply(sn, se);
        }
        return j;
      }
      function $h(t, n) {
        return function(i, l) {
          return _$(i, t, n(l), {});
        };
      }
      function js(t, n) {
        return function(i, l) {
          var d;
          if (i === r && l === r)
            return n;
          if (i !== r && (d = i), l !== r) {
            if (d === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = kt(i), l = kt(l)) : (i = ih(i), l = ih(l)), d = t(i, l);
          }
          return d;
        };
      }
      function mu(t) {
        return Tn(function(n) {
          return n = Ee(n, Et(Y())), re(function(i) {
            var l = this;
            return t(n, function(d) {
              return St(d, l, i);
            });
          });
        });
      }
      function Zs(t, n) {
        n = n === r ? " " : kt(n);
        var i = n.length;
        if (i < 2)
          return i ? cu(n, t) : n;
        var l = cu(n, Ls(t / to(n)));
        return eo(n) ? tr(nn(l), 0, t).join("") : l.slice(0, t);
      }
      function z$(t, n, i, l) {
        var d = n & L, p = yi(t);
        function m() {
          for (var g = -1, V = arguments.length, x = -1, A = l.length, N = C(A + V), F = this && this !== Ge && this instanceof m ? p : t; ++x < A; )
            N[x] = l[x];
          for (; V--; )
            N[x++] = arguments[++g];
          return St(F, d ? i : this, N);
        }
        return m;
      }
      function yh(t) {
        return function(n, i, l) {
          return l && typeof l != "number" && ut(n, i, l) && (i = l = r), n = Ln(n), i === r ? (i = n, n = 0) : i = Ln(i), l = l === r ? n < i ? 1 : -1 : Ln(l), A$(n, i, l, t);
        };
      }
      function Ks(t) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Yt(n), i = Yt(i)), t(n, i);
        };
      }
      function bh(t, n, i, l, d, p, m, g, V, x) {
        var A = n & B, N = A ? m : r, F = A ? r : m, q = A ? p : r, G = A ? r : p;
        n |= A ? k : R, n &= ~(A ? R : k), n & T || (n &= ~(L | S));
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
          x
        ], j = i.apply(r, Q);
        return Su(t) && Nh(j, Q), j.placeholder = l, Lh(j, t, n);
      }
      function _u(t) {
        var n = Re[t];
        return function(i, l) {
          if (i = Yt(i), l = l == null ? 0 : et(X(l), 292), l && Lf(i)) {
            var d = (pe(i) + "e").split("e"), p = n(d[0] + "e" + (+d[1] + l));
            return d = (pe(p) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(i);
        };
      }
      var Y$ = oo && 1 / Ss(new oo([, -0]))[1] == Le ? function(t) {
        return new oo(t);
      } : Fu;
      function Vh(t) {
        return function(n) {
          var i = tt(n);
          return i == ne ? jl(n) : i == tn ? u0(n) : t0(n, t(n));
        };
      }
      function Bn(t, n, i, l, d, p, m, g) {
        var V = n & S;
        if (!V && typeof t != "function")
          throw new Ut(c);
        var x = l ? l.length : 0;
        if (x || (n &= ~(k | R), l = d = r), m = m === r ? m : Fe(X(m), 0), g = g === r ? g : X(g), x -= d ? d.length : 0, n & R) {
          var A = l, N = d;
          l = d = r;
        }
        var F = V ? r : yu(t), q = [
          t,
          n,
          i,
          l,
          d,
          A,
          N,
          p,
          m,
          g
        ];
        if (F && ay(q, F), t = q[0], n = q[1], i = q[2], l = q[3], d = q[4], g = q[9] = q[9] === r ? V ? 0 : t.length : Fe(q[9] - x, 0), !g && n & (B | P) && (n &= ~(B | P)), !n || n == L)
          var G = q$(t, n, i);
        else
          n == B || n == P ? G = H$(t, n, g) : (n == k || n == (L | k)) && !d.length ? G = z$(t, n, i, l) : G = Gs.apply(r, q);
        var Q = F ? rh : Nh;
        return Lh(Q(G, q), t, n);
      }
      function Ch(t, n, i, l) {
        return t === r || on(t, ro[i]) && !ve.call(l, i) ? n : t;
      }
      function Sh(t, n, i, l, d, p) {
        return Ie(t) && Ie(n) && (p.set(n, t), qs(t, n, r, Sh, p), p.delete(n)), t;
      }
      function G$(t) {
        return Ci(t) ? r : t;
      }
      function Eh(t, n, i, l, d, p) {
        var m = i & D, g = t.length, V = n.length;
        if (g != V && !(m && V > g))
          return !1;
        var x = p.get(t), A = p.get(n);
        if (x && A)
          return x == n && A == t;
        var N = -1, F = !0, q = i & M ? new Cr() : r;
        for (p.set(t, n), p.set(n, t); ++N < g; ) {
          var G = t[N], Q = n[N];
          if (l)
            var j = m ? l(Q, G, N, n, t, p) : l(G, Q, N, t, n, p);
          if (j !== r) {
            if (j)
              continue;
            F = !1;
            break;
          }
          if (q) {
            if (!Wl(n, function(oe, se) {
              if (!ci(q, se) && (G === oe || d(G, oe, i, l, p)))
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
      function j$(t, n, i, l, d, p, m) {
        switch (i) {
          case Jr:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case ui:
            return !(t.byteLength != n.byteLength || !p(new Bs(t), new Bs(n)));
          case zn:
          case Yn:
          case Gn:
            return on(+t, +n);
          case $r:
            return t.name == n.name && t.message == n.message;
          case si:
          case ai:
            return t == n + "";
          case ne:
            var g = jl;
          case tn:
            var V = l & D;
            if (g || (g = Ss), t.size != n.size && !V)
              return !1;
            var x = m.get(t);
            if (x)
              return x == n;
            l |= M, m.set(t, n);
            var A = Eh(g(t), g(n), l, d, p, m);
            return m.delete(t), A;
          case gs:
            if (wi)
              return wi.call(t) == wi.call(n);
        }
        return !1;
      }
      function Z$(t, n, i, l, d, p) {
        var m = i & D, g = gu(t), V = g.length, x = gu(n), A = x.length;
        if (V != A && !m)
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
            var xt = m ? l(se, oe, F, n, t, p) : l(oe, se, F, t, n, p);
          if (!(xt === r ? oe === se || d(oe, se, i, l, p) : xt)) {
            Q = !1;
            break;
          }
          j || (j = F == "constructor");
        }
        if (Q && !j) {
          var ct = t.constructor, At = n.constructor;
          ct != At && "constructor" in t && "constructor" in n && !(typeof ct == "function" && ct instanceof ct && typeof At == "function" && At instanceof At) && (Q = !1);
        }
        return p.delete(t), p.delete(n), Q;
      }
      function Tn(t) {
        return ku(Th(t, r, Uh), t + "");
      }
      function gu(t) {
        return Yf(t, ze, Vu);
      }
      function $u(t) {
        return Yf(t, mt, kh);
      }
      var yu = Os ? function(t) {
        return Os.get(t);
      } : Fu;
      function Js(t) {
        for (var n = t.name + "", i = io[n], l = ve.call(io, n) ? i.length : 0; l--; ) {
          var d = i[l], p = d.func;
          if (p == null || p == t)
            return d.name;
        }
        return n;
      }
      function uo(t) {
        var n = ve.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function Y() {
        var t = h.iteratee || Pu;
        return t = t === Pu ? Zf : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Xs(t, n) {
        var i = t.__data__;
        return ry(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function bu(t) {
        for (var n = ze(t), i = n.length; i--; ) {
          var l = n[i], d = t[l];
          n[i] = [l, d, Ah(d)];
        }
        return n;
      }
      function kr(t, n) {
        var i = s0(t, n);
        return jf(i) ? i : r;
      }
      function K$(t) {
        var n = ve.call(t, br), i = t[br];
        try {
          t[br] = r;
          var l = !0;
        } catch {
        }
        var d = xs.call(t);
        return l && (n ? t[br] = i : delete t[br]), d;
      }
      var Vu = Kl ? function(t) {
        return t == null ? [] : (t = be(t), jn(Kl(t), function(n) {
          return Df.call(t, n);
        }));
      } : Uu, kh = Kl ? function(t) {
        for (var n = []; t; )
          Zn(n, Vu(t)), t = Ts(t);
        return n;
      } : Uu, tt = lt;
      (Jl && tt(new Jl(new ArrayBuffer(1))) != Jr || fi && tt(new fi()) != ne || Xl && tt(Xl.resolve()) != ii || oo && tt(new oo()) != tn || hi && tt(new hi()) != li) && (tt = function(t) {
        var n = lt(t), i = n == Pt ? t.constructor : r, l = i ? Ir(i) : "";
        if (l)
          switch (l) {
            case T0:
              return Jr;
            case D0:
              return ne;
            case N0:
              return ii;
            case L0:
              return tn;
            case M0:
              return li;
          }
        return n;
      });
      function J$(t, n, i) {
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
              n = et(n, t + m);
              break;
            case "takeRight":
              t = Fe(t, n - m);
              break;
          }
        }
        return { start: t, end: n };
      }
      function X$(t) {
        var n = t.match(o1);
        return n ? n[1].split(i1) : [];
      }
      function Ih(t, n, i) {
        n = er(n, t);
        for (var l = -1, d = n.length, p = !1; ++l < d; ) {
          var m = mn(n[l]);
          if (!(p = t != null && i(t, m)))
            break;
          t = t[m];
        }
        return p || ++l != d ? p : (d = t == null ? 0 : t.length, !!d && ia(d) && Dn(m, d) && (J(t) || xr(t)));
      }
      function Q$(t) {
        var n = t.length, i = new t.constructor(n);
        return n && typeof t[0] == "string" && ve.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function xh(t) {
        return typeof t.constructor == "function" && !bi(t) ? so(Ts(t)) : {};
      }
      function ey(t, n, i) {
        var l = t.constructor;
        switch (n) {
          case ui:
            return vu(t);
          case zn:
          case Yn:
            return new l(+t);
          case Jr:
            return O$(t, i);
          case bl:
          case Vl:
          case Cl:
          case Sl:
          case El:
          case kl:
          case Il:
          case xl:
          case Al:
            return dh(t, i);
          case ne:
            return new l();
          case Gn:
          case ai:
            return new l(t);
          case si:
            return P$(t);
          case tn:
            return new l();
          case gs:
            return R$(t);
        }
      }
      function ty(t, n) {
        var i = n.length;
        if (!i)
          return t;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), t.replace(r1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function ny(t) {
        return J(t) || xr(t) || !!(Nf && t && t[Nf]);
      }
      function Dn(t, n) {
        var i = typeof t;
        return n = n == null ? He : n, !!n && (i == "number" || i != "symbol" && p1.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function ut(t, n, i) {
        if (!Ie(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? vt(i) && Dn(n, i.length) : l == "string" && n in i) ? on(i[n], t) : !1;
      }
      function Cu(t, n) {
        if (J(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || It(t) ? !0 : Qg.test(t) || !Xg.test(t) || n != null && t in be(n);
      }
      function ry(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function Su(t) {
        var n = Js(t), i = h[n];
        if (typeof i != "function" || !(n in ie.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = yu(i);
        return !!l && t === l[0];
      }
      function oy(t) {
        return !!Af && Af in t;
      }
      var iy = ks ? Nn : Wu;
      function bi(t) {
        var n = t && t.constructor, i = typeof n == "function" && n.prototype || ro;
        return t === i;
      }
      function Ah(t) {
        return t === t && !Ie(t);
      }
      function Bh(t, n) {
        return function(i) {
          return i == null ? !1 : i[t] === n && (n !== r || t in be(i));
        };
      }
      function sy(t) {
        var n = ra(t, function(l) {
          return i.size === v && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function ay(t, n) {
        var i = t[1], l = n[1], d = i | l, p = d < (L | S | O), m = l == O && i == B || l == O && i == H && t[7].length <= n[8] || l == (O | H) && n[7].length <= n[8] && i == B;
        if (!(p || m))
          return t;
        l & L && (t[2] = n[2], d |= i & L ? 0 : T);
        var g = n[3];
        if (g) {
          var V = t[3];
          t[3] = V ? hh(V, g, n[4]) : g, t[4] = V ? Kn(t[3], _) : n[4];
        }
        return g = n[5], g && (V = t[5], t[5] = V ? ph(V, g, n[6]) : g, t[6] = V ? Kn(t[5], _) : n[6]), g = n[7], g && (t[7] = g), l & O && (t[8] = t[8] == null ? n[8] : et(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function ly(t) {
        var n = [];
        if (t != null)
          for (var i in be(t))
            n.push(i);
        return n;
      }
      function uy(t) {
        return xs.call(t);
      }
      function Th(t, n, i) {
        return n = Fe(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, p = Fe(l.length - n, 0), m = C(p); ++d < p; )
            m[d] = l[n + d];
          d = -1;
          for (var g = C(n + 1); ++d < n; )
            g[d] = l[d];
          return g[n] = i(m), St(t, this, g);
        };
      }
      function Dh(t, n) {
        return n.length < 2 ? t : Er(t, Ht(n, 0, -1));
      }
      function cy(t, n) {
        for (var i = t.length, l = et(n.length, i), d = wt(t); l--; ) {
          var p = n[l];
          t[l] = Dn(p, i) ? d[p] : r;
        }
        return t;
      }
      function Eu(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var Nh = Mh(rh), Vi = S0 || function(t, n) {
        return Ge.setTimeout(t, n);
      }, ku = Mh(D$);
      function Lh(t, n, i) {
        var l = n + "";
        return ku(t, ty(l, dy(X$(l), i)));
      }
      function Mh(t) {
        var n = 0, i = 0;
        return function() {
          var l = x0(), d = ke - (l - i);
          if (i = l, d > 0) {
            if (++n >= ge)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Qs(t, n) {
        var i = -1, l = t.length, d = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var p = uu(i, d), m = t[p];
          t[p] = t[i], t[i] = m;
        }
        return t.length = n, t;
      }
      var Oh = sy(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(e1, function(i, l, d, p) {
          n.push(d ? p.replace(l1, "$1") : l || i);
        }), n;
      });
      function mn(t) {
        if (typeof t == "string" || It(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Le ? "-0" : n;
      }
      function Ir(t) {
        if (t != null) {
          try {
            return Is.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function dy(t, n) {
        return Ft(ws, function(i) {
          var l = "_." + i[0];
          n & i[1] && !Vs(t, l) && t.push(l);
        }), t.sort();
      }
      function Ph(t) {
        if (t instanceof ie)
          return t.clone();
        var n = new Wt(t.__wrapped__, t.__chain__);
        return n.__actions__ = wt(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function fy(t, n, i) {
        (i ? ut(t, n, i) : n === r) ? n = 1 : n = Fe(X(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, p = 0, m = C(Ls(l / n)); d < l; )
          m[p++] = Ht(t, d, d += n);
        return m;
      }
      function hy(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++n < i; ) {
          var p = t[n];
          p && (d[l++] = p);
        }
        return d;
      }
      function py() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = C(t - 1), i = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Zn(J(i) ? wt(i) : [i], je(n, 1));
      }
      var wy = re(function(t, n) {
        return Te(t) ? mi(t, je(n, 1, Te, !0)) : [];
      }), vy = re(function(t, n) {
        var i = zt(n);
        return Te(i) && (i = r), Te(t) ? mi(t, je(n, 1, Te, !0), Y(i, 2)) : [];
      }), my = re(function(t, n) {
        var i = zt(n);
        return Te(i) && (i = r), Te(t) ? mi(t, je(n, 1, Te, !0), r, i) : [];
      });
      function _y(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : X(n), Ht(t, n < 0 ? 0 : n, l)) : [];
      }
      function gy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : X(n), n = l - n, Ht(t, 0, n < 0 ? 0 : n)) : [];
      }
      function $y(t, n) {
        return t && t.length ? zs(t, Y(n, 3), !0, !0) : [];
      }
      function yy(t, n) {
        return t && t.length ? zs(t, Y(n, 3), !0) : [];
      }
      function by(t, n, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && ut(t, n, i) && (i = 0, l = d), p$(t, n, i, l)) : [];
      }
      function Rh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : X(i);
        return d < 0 && (d = Fe(l + d, 0)), Cs(t, Y(n, 3), d);
      }
      function Fh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== r && (d = X(i), d = i < 0 ? Fe(l + d, 0) : et(d, l - 1)), Cs(t, Y(n, 3), d, !0);
      }
      function Uh(t) {
        var n = t == null ? 0 : t.length;
        return n ? je(t, 1) : [];
      }
      function Vy(t) {
        var n = t == null ? 0 : t.length;
        return n ? je(t, Le) : [];
      }
      function Cy(t, n) {
        var i = t == null ? 0 : t.length;
        return i ? (n = n === r ? 1 : X(n), je(t, n)) : [];
      }
      function Sy(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function Wh(t) {
        return t && t.length ? t[0] : r;
      }
      function Ey(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : X(i);
        return d < 0 && (d = Fe(l + d, 0)), Qr(t, n, d);
      }
      function ky(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ht(t, 0, -1) : [];
      }
      var Iy = re(function(t) {
        var n = Ee(t, pu);
        return n.length && n[0] === t[0] ? ou(n) : [];
      }), xy = re(function(t) {
        var n = zt(t), i = Ee(t, pu);
        return n === zt(i) ? n = r : i.pop(), i.length && i[0] === t[0] ? ou(i, Y(n, 2)) : [];
      }), Ay = re(function(t) {
        var n = zt(t), i = Ee(t, pu);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === t[0] ? ou(i, r, n) : [];
      });
      function By(t, n) {
        return t == null ? "" : k0.call(t, n);
      }
      function zt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function Ty(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== r && (d = X(i), d = d < 0 ? Fe(l + d, 0) : et(d, l - 1)), n === n ? d0(t, n, d) : Cs(t, bf, d, !0);
      }
      function Dy(t, n) {
        return t && t.length ? Qf(t, X(n)) : r;
      }
      var Ny = re(qh);
      function qh(t, n) {
        return t && t.length && n && n.length ? lu(t, n) : t;
      }
      function Ly(t, n, i) {
        return t && t.length && n && n.length ? lu(t, n, Y(i, 2)) : t;
      }
      function My(t, n, i) {
        return t && t.length && n && n.length ? lu(t, n, r, i) : t;
      }
      var Oy = Tn(function(t, n) {
        var i = t == null ? 0 : t.length, l = eu(t, n);
        return nh(t, Ee(n, function(d) {
          return Dn(d, i) ? +d : d;
        }).sort(fh)), l;
      });
      function Py(t, n) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, d = [], p = t.length;
        for (n = Y(n, 3); ++l < p; ) {
          var m = t[l];
          n(m, l, t) && (i.push(m), d.push(l));
        }
        return nh(t, d), i;
      }
      function Iu(t) {
        return t == null ? t : B0.call(t);
      }
      function Ry(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && ut(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : X(n), i = i === r ? l : X(i)), Ht(t, n, i)) : [];
      }
      function Fy(t, n) {
        return Hs(t, n);
      }
      function Uy(t, n, i) {
        return du(t, n, Y(i, 2));
      }
      function Wy(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Hs(t, n);
          if (l < i && on(t[l], n))
            return l;
        }
        return -1;
      }
      function qy(t, n) {
        return Hs(t, n, !0);
      }
      function Hy(t, n, i) {
        return du(t, n, Y(i, 2), !0);
      }
      function zy(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Hs(t, n, !0) - 1;
          if (on(t[l], n))
            return l;
        }
        return -1;
      }
      function Yy(t) {
        return t && t.length ? oh(t) : [];
      }
      function Gy(t, n) {
        return t && t.length ? oh(t, Y(n, 2)) : [];
      }
      function jy(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ht(t, 1, n) : [];
      }
      function Zy(t, n, i) {
        return t && t.length ? (n = i || n === r ? 1 : X(n), Ht(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Ky(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : X(n), n = l - n, Ht(t, n < 0 ? 0 : n, l)) : [];
      }
      function Jy(t, n) {
        return t && t.length ? zs(t, Y(n, 3), !1, !0) : [];
      }
      function Xy(t, n) {
        return t && t.length ? zs(t, Y(n, 3)) : [];
      }
      var Qy = re(function(t) {
        return Qn(je(t, 1, Te, !0));
      }), eb = re(function(t) {
        var n = zt(t);
        return Te(n) && (n = r), Qn(je(t, 1, Te, !0), Y(n, 2));
      }), tb = re(function(t) {
        var n = zt(t);
        return n = typeof n == "function" ? n : r, Qn(je(t, 1, Te, !0), r, n);
      });
      function nb(t) {
        return t && t.length ? Qn(t) : [];
      }
      function rb(t, n) {
        return t && t.length ? Qn(t, Y(n, 2)) : [];
      }
      function ob(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? Qn(t, r, n) : [];
      }
      function xu(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = jn(t, function(i) {
          if (Te(i))
            return n = Fe(i.length, n), !0;
        }), Yl(n, function(i) {
          return Ee(t, ql(i));
        });
      }
      function Hh(t, n) {
        if (!(t && t.length))
          return [];
        var i = xu(t);
        return n == null ? i : Ee(i, function(l) {
          return St(n, r, l);
        });
      }
      var ib = re(function(t, n) {
        return Te(t) ? mi(t, n) : [];
      }), sb = re(function(t) {
        return hu(jn(t, Te));
      }), ab = re(function(t) {
        var n = zt(t);
        return Te(n) && (n = r), hu(jn(t, Te), Y(n, 2));
      }), lb = re(function(t) {
        var n = zt(t);
        return n = typeof n == "function" ? n : r, hu(jn(t, Te), r, n);
      }), ub = re(xu);
      function cb(t, n) {
        return lh(t || [], n || [], vi);
      }
      function db(t, n) {
        return lh(t || [], n || [], $i);
      }
      var fb = re(function(t) {
        var n = t.length, i = n > 1 ? t[n - 1] : r;
        return i = typeof i == "function" ? (t.pop(), i) : r, Hh(t, i);
      });
      function zh(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function hb(t, n) {
        return n(t), t;
      }
      function ea(t, n) {
        return n(t);
      }
      var pb = Tn(function(t) {
        var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(p) {
          return eu(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof ie) || !Dn(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: ea,
          args: [d],
          thisArg: r
        }), new Wt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function wb() {
        return zh(this);
      }
      function vb() {
        return new Wt(this.value(), this.__chain__);
      }
      function mb() {
        this.__values__ === r && (this.__values__ = ip(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function _b() {
        return this;
      }
      function gb(t) {
        for (var n, i = this; i instanceof Rs; ) {
          var l = Ph(i);
          l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
          var d = l;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function $b() {
        var t = this.__wrapped__;
        if (t instanceof ie) {
          var n = t;
          return this.__actions__.length && (n = new ie(this)), n = n.reverse(), n.__actions__.push({
            func: ea,
            args: [Iu],
            thisArg: r
          }), new Wt(n, this.__chain__);
        }
        return this.thru(Iu);
      }
      function yb() {
        return ah(this.__wrapped__, this.__actions__);
      }
      var bb = Ys(function(t, n, i) {
        ve.call(t, i) ? ++t[i] : An(t, i, 1);
      });
      function Vb(t, n, i) {
        var l = J(t) ? $f : h$;
        return i && ut(t, n, i) && (n = r), l(t, Y(n, 3));
      }
      function Cb(t, n) {
        var i = J(t) ? jn : Hf;
        return i(t, Y(n, 3));
      }
      var Sb = _h(Rh), Eb = _h(Fh);
      function kb(t, n) {
        return je(ta(t, n), 1);
      }
      function Ib(t, n) {
        return je(ta(t, n), Le);
      }
      function xb(t, n, i) {
        return i = i === r ? 1 : X(i), je(ta(t, n), i);
      }
      function Yh(t, n) {
        var i = J(t) ? Ft : Xn;
        return i(t, Y(n, 3));
      }
      function Gh(t, n) {
        var i = J(t) ? j1 : qf;
        return i(t, Y(n, 3));
      }
      var Ab = Ys(function(t, n, i) {
        ve.call(t, i) ? t[i].push(n) : An(t, i, [n]);
      });
      function Bb(t, n, i, l) {
        t = vt(t) ? t : fo(t), i = i && !l ? X(i) : 0;
        var d = t.length;
        return i < 0 && (i = Fe(d + i, 0)), sa(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && Qr(t, n, i) > -1;
      }
      var Tb = re(function(t, n, i) {
        var l = -1, d = typeof n == "function", p = vt(t) ? C(t.length) : [];
        return Xn(t, function(m) {
          p[++l] = d ? St(n, m, i) : _i(m, n, i);
        }), p;
      }), Db = Ys(function(t, n, i) {
        An(t, i, n);
      });
      function ta(t, n) {
        var i = J(t) ? Ee : Kf;
        return i(t, Y(n, 3));
      }
      function Nb(t, n, i, l) {
        return t == null ? [] : (J(n) || (n = n == null ? [] : [n]), i = l ? r : i, J(i) || (i = i == null ? [] : [i]), eh(t, n, i));
      }
      var Lb = Ys(function(t, n, i) {
        t[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Mb(t, n, i) {
        var l = J(t) ? Ul : Cf, d = arguments.length < 3;
        return l(t, Y(n, 4), i, d, Xn);
      }
      function Ob(t, n, i) {
        var l = J(t) ? Z1 : Cf, d = arguments.length < 3;
        return l(t, Y(n, 4), i, d, qf);
      }
      function Pb(t, n) {
        var i = J(t) ? jn : Hf;
        return i(t, oa(Y(n, 3)));
      }
      function Rb(t) {
        var n = J(t) ? Rf : B$;
        return n(t);
      }
      function Fb(t, n, i) {
        (i ? ut(t, n, i) : n === r) ? n = 1 : n = X(n);
        var l = J(t) ? l$ : T$;
        return l(t, n);
      }
      function Ub(t) {
        var n = J(t) ? u$ : N$;
        return n(t);
      }
      function Wb(t) {
        if (t == null)
          return 0;
        if (vt(t))
          return sa(t) ? to(t) : t.length;
        var n = tt(t);
        return n == ne || n == tn ? t.size : su(t).length;
      }
      function qb(t, n, i) {
        var l = J(t) ? Wl : L$;
        return i && ut(t, n, i) && (n = r), l(t, Y(n, 3));
      }
      var Hb = re(function(t, n) {
        if (t == null)
          return [];
        var i = n.length;
        return i > 1 && ut(t, n[0], n[1]) ? n = [] : i > 2 && ut(n[0], n[1], n[2]) && (n = [n[0]]), eh(t, je(n, 1), []);
      }), na = C0 || function() {
        return Ge.Date.now();
      };
      function zb(t, n) {
        if (typeof n != "function")
          throw new Ut(c);
        return t = X(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function jh(t, n, i) {
        return n = i ? r : n, n = t && n == null ? t.length : n, Bn(t, O, r, r, r, r, n);
      }
      function Zh(t, n) {
        var i;
        if (typeof n != "function")
          throw new Ut(c);
        return t = X(t), function() {
          return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = r), i;
        };
      }
      var Au = re(function(t, n, i) {
        var l = L;
        if (i.length) {
          var d = Kn(i, uo(Au));
          l |= k;
        }
        return Bn(t, l, n, i, d);
      }), Kh = re(function(t, n, i) {
        var l = L | S;
        if (i.length) {
          var d = Kn(i, uo(Kh));
          l |= k;
        }
        return Bn(n, l, t, i, d);
      });
      function Jh(t, n, i) {
        n = i ? r : n;
        var l = Bn(t, B, r, r, r, r, r, n);
        return l.placeholder = Jh.placeholder, l;
      }
      function Xh(t, n, i) {
        n = i ? r : n;
        var l = Bn(t, P, r, r, r, r, r, n);
        return l.placeholder = Xh.placeholder, l;
      }
      function Qh(t, n, i) {
        var l, d, p, m, g, V, x = 0, A = !1, N = !1, F = !0;
        if (typeof t != "function")
          throw new Ut(c);
        n = Yt(n) || 0, Ie(i) && (A = !!i.leading, N = "maxWait" in i, p = N ? Fe(Yt(i.maxWait) || 0, n) : p, F = "trailing" in i ? !!i.trailing : F);
        function q(De) {
          var sn = l, Mn = d;
          return l = d = r, x = De, m = t.apply(Mn, sn), m;
        }
        function G(De) {
          return x = De, g = Vi(oe, n), A ? q(De) : m;
        }
        function Q(De) {
          var sn = De - V, Mn = De - x, _p = n - sn;
          return N ? et(_p, p - Mn) : _p;
        }
        function j(De) {
          var sn = De - V, Mn = De - x;
          return V === r || sn >= n || sn < 0 || N && Mn >= p;
        }
        function oe() {
          var De = na();
          if (j(De))
            return se(De);
          g = Vi(oe, Q(De));
        }
        function se(De) {
          return g = r, F && l ? q(De) : (l = d = r, m);
        }
        function xt() {
          g !== r && uh(g), x = 0, l = V = d = g = r;
        }
        function ct() {
          return g === r ? m : se(na());
        }
        function At() {
          var De = na(), sn = j(De);
          if (l = arguments, d = this, V = De, sn) {
            if (g === r)
              return G(V);
            if (N)
              return uh(g), g = Vi(oe, n), q(V);
          }
          return g === r && (g = Vi(oe, n)), m;
        }
        return At.cancel = xt, At.flush = ct, At;
      }
      var Yb = re(function(t, n) {
        return Wf(t, 1, n);
      }), Gb = re(function(t, n, i) {
        return Wf(t, Yt(n) || 0, i);
      });
      function jb(t) {
        return Bn(t, $e);
      }
      function ra(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Ut(c);
        var i = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(d))
            return p.get(d);
          var m = t.apply(this, l);
          return i.cache = p.set(d, m) || p, m;
        };
        return i.cache = new (ra.Cache || xn)(), i;
      }
      ra.Cache = xn;
      function oa(t) {
        if (typeof t != "function")
          throw new Ut(c);
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
      function Zb(t) {
        return Zh(2, t);
      }
      var Kb = M$(function(t, n) {
        n = n.length == 1 && J(n[0]) ? Ee(n[0], Et(Y())) : Ee(je(n, 1), Et(Y()));
        var i = n.length;
        return re(function(l) {
          for (var d = -1, p = et(l.length, i); ++d < p; )
            l[d] = n[d].call(this, l[d]);
          return St(t, this, l);
        });
      }), Bu = re(function(t, n) {
        var i = Kn(n, uo(Bu));
        return Bn(t, k, r, n, i);
      }), ep = re(function(t, n) {
        var i = Kn(n, uo(ep));
        return Bn(t, R, r, n, i);
      }), Jb = Tn(function(t, n) {
        return Bn(t, H, r, r, r, n);
      });
      function Xb(t, n) {
        if (typeof t != "function")
          throw new Ut(c);
        return n = n === r ? n : X(n), re(t, n);
      }
      function Qb(t, n) {
        if (typeof t != "function")
          throw new Ut(c);
        return n = n == null ? 0 : Fe(X(n), 0), re(function(i) {
          var l = i[n], d = tr(i, 0, n);
          return l && Zn(d, l), St(t, this, d);
        });
      }
      function eV(t, n, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new Ut(c);
        return Ie(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), Qh(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function tV(t) {
        return jh(t, 1);
      }
      function nV(t, n) {
        return Bu(wu(n), t);
      }
      function rV() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return J(t) ? t : [t];
      }
      function oV(t) {
        return qt(t, I);
      }
      function iV(t, n) {
        return n = typeof n == "function" ? n : r, qt(t, I, n);
      }
      function sV(t) {
        return qt(t, $ | I);
      }
      function aV(t, n) {
        return n = typeof n == "function" ? n : r, qt(t, $ | I, n);
      }
      function lV(t, n) {
        return n == null || Uf(t, n, ze(n));
      }
      function on(t, n) {
        return t === n || t !== t && n !== n;
      }
      var uV = Ks(ru), cV = Ks(function(t, n) {
        return t >= n;
      }), xr = Gf(function() {
        return arguments;
      }()) ? Gf : function(t) {
        return Be(t) && ve.call(t, "callee") && !Df.call(t, "callee");
      }, J = C.isArray, dV = pf ? Et(pf) : g$;
      function vt(t) {
        return t != null && ia(t.length) && !Nn(t);
      }
      function Te(t) {
        return Be(t) && vt(t);
      }
      function fV(t) {
        return t === !0 || t === !1 || Be(t) && lt(t) == zn;
      }
      var nr = E0 || Wu, hV = wf ? Et(wf) : $$;
      function pV(t) {
        return Be(t) && t.nodeType === 1 && !Ci(t);
      }
      function wV(t) {
        if (t == null)
          return !0;
        if (vt(t) && (J(t) || typeof t == "string" || typeof t.splice == "function" || nr(t) || co(t) || xr(t)))
          return !t.length;
        var n = tt(t);
        if (n == ne || n == tn)
          return !t.size;
        if (bi(t))
          return !su(t).length;
        for (var i in t)
          if (ve.call(t, i))
            return !1;
        return !0;
      }
      function vV(t, n) {
        return gi(t, n);
      }
      function mV(t, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(t, n) : r;
        return l === r ? gi(t, n, r, i) : !!l;
      }
      function Tu(t) {
        if (!Be(t))
          return !1;
        var n = lt(t);
        return n == $r || n == ms || typeof t.message == "string" && typeof t.name == "string" && !Ci(t);
      }
      function _V(t) {
        return typeof t == "number" && Lf(t);
      }
      function Nn(t) {
        if (!Ie(t))
          return !1;
        var n = lt(t);
        return n == ue || n == te || n == vs || n == Wg;
      }
      function tp(t) {
        return typeof t == "number" && t == X(t);
      }
      function ia(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= He;
      }
      function Ie(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function Be(t) {
        return t != null && typeof t == "object";
      }
      var np = vf ? Et(vf) : b$;
      function gV(t, n) {
        return t === n || iu(t, n, bu(n));
      }
      function $V(t, n, i) {
        return i = typeof i == "function" ? i : r, iu(t, n, bu(n), i);
      }
      function yV(t) {
        return rp(t) && t != +t;
      }
      function bV(t) {
        if (iy(t))
          throw new K(u);
        return jf(t);
      }
      function VV(t) {
        return t === null;
      }
      function CV(t) {
        return t == null;
      }
      function rp(t) {
        return typeof t == "number" || Be(t) && lt(t) == Gn;
      }
      function Ci(t) {
        if (!Be(t) || lt(t) != Pt)
          return !1;
        var n = Ts(t);
        if (n === null)
          return !0;
        var i = ve.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && Is.call(i) == $0;
      }
      var Du = mf ? Et(mf) : V$;
      function SV(t) {
        return tp(t) && t >= -He && t <= He;
      }
      var op = _f ? Et(_f) : C$;
      function sa(t) {
        return typeof t == "string" || !J(t) && Be(t) && lt(t) == ai;
      }
      function It(t) {
        return typeof t == "symbol" || Be(t) && lt(t) == gs;
      }
      var co = gf ? Et(gf) : S$;
      function EV(t) {
        return t === r;
      }
      function kV(t) {
        return Be(t) && tt(t) == li;
      }
      function IV(t) {
        return Be(t) && lt(t) == Hg;
      }
      var xV = Ks(au), AV = Ks(function(t, n) {
        return t <= n;
      });
      function ip(t) {
        if (!t)
          return [];
        if (vt(t))
          return sa(t) ? nn(t) : wt(t);
        if (di && t[di])
          return l0(t[di]());
        var n = tt(t), i = n == ne ? jl : n == tn ? Ss : fo;
        return i(t);
      }
      function Ln(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Yt(t), t === Le || t === -Le) {
          var n = t < 0 ? -1 : 1;
          return n * Hn;
        }
        return t === t ? t : 0;
      }
      function X(t) {
        var n = Ln(t), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function sp(t) {
        return t ? Sr(X(t), 0, Ct) : 0;
      }
      function Yt(t) {
        if (typeof t == "number")
          return t;
        if (It(t))
          return _r;
        if (Ie(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Ie(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Sf(t);
        var i = d1.test(t);
        return i || h1.test(t) ? z1(t.slice(2), i ? 2 : 8) : c1.test(t) ? _r : +t;
      }
      function ap(t) {
        return vn(t, mt(t));
      }
      function BV(t) {
        return t ? Sr(X(t), -He, He) : t === 0 ? t : 0;
      }
      function pe(t) {
        return t == null ? "" : kt(t);
      }
      var TV = ao(function(t, n) {
        if (bi(n) || vt(n)) {
          vn(n, ze(n), t);
          return;
        }
        for (var i in n)
          ve.call(n, i) && vi(t, i, n[i]);
      }), lp = ao(function(t, n) {
        vn(n, mt(n), t);
      }), aa = ao(function(t, n, i, l) {
        vn(n, mt(n), t, l);
      }), DV = ao(function(t, n, i, l) {
        vn(n, ze(n), t, l);
      }), NV = Tn(eu);
      function LV(t, n) {
        var i = so(t);
        return n == null ? i : Ff(i, n);
      }
      var MV = re(function(t, n) {
        t = be(t);
        var i = -1, l = n.length, d = l > 2 ? n[2] : r;
        for (d && ut(n[0], n[1], d) && (l = 1); ++i < l; )
          for (var p = n[i], m = mt(p), g = -1, V = m.length; ++g < V; ) {
            var x = m[g], A = t[x];
            (A === r || on(A, ro[x]) && !ve.call(t, x)) && (t[x] = p[x]);
          }
        return t;
      }), OV = re(function(t) {
        return t.push(r, Sh), St(up, r, t);
      });
      function PV(t, n) {
        return yf(t, Y(n, 3), wn);
      }
      function RV(t, n) {
        return yf(t, Y(n, 3), nu);
      }
      function FV(t, n) {
        return t == null ? t : tu(t, Y(n, 3), mt);
      }
      function UV(t, n) {
        return t == null ? t : zf(t, Y(n, 3), mt);
      }
      function WV(t, n) {
        return t && wn(t, Y(n, 3));
      }
      function qV(t, n) {
        return t && nu(t, Y(n, 3));
      }
      function HV(t) {
        return t == null ? [] : Ws(t, ze(t));
      }
      function zV(t) {
        return t == null ? [] : Ws(t, mt(t));
      }
      function Nu(t, n, i) {
        var l = t == null ? r : Er(t, n);
        return l === r ? i : l;
      }
      function YV(t, n) {
        return t != null && Ih(t, n, w$);
      }
      function Lu(t, n) {
        return t != null && Ih(t, n, v$);
      }
      var GV = $h(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = xs.call(n)), t[n] = i;
      }, Ou(_t)), jV = $h(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = xs.call(n)), ve.call(t, n) ? t[n].push(i) : t[n] = [i];
      }, Y), ZV = re(_i);
      function ze(t) {
        return vt(t) ? Pf(t) : su(t);
      }
      function mt(t) {
        return vt(t) ? Pf(t, !0) : E$(t);
      }
      function KV(t, n) {
        var i = {};
        return n = Y(n, 3), wn(t, function(l, d, p) {
          An(i, n(l, d, p), l);
        }), i;
      }
      function JV(t, n) {
        var i = {};
        return n = Y(n, 3), wn(t, function(l, d, p) {
          An(i, d, n(l, d, p));
        }), i;
      }
      var XV = ao(function(t, n, i) {
        qs(t, n, i);
      }), up = ao(function(t, n, i, l) {
        qs(t, n, i, l);
      }), QV = Tn(function(t, n) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        n = Ee(n, function(p) {
          return p = er(p, t), l || (l = p.length > 1), p;
        }), vn(t, $u(t), i), l && (i = qt(i, $ | y | I, G$));
        for (var d = n.length; d--; )
          fu(i, n[d]);
        return i;
      });
      function eC(t, n) {
        return cp(t, oa(Y(n)));
      }
      var tC = Tn(function(t, n) {
        return t == null ? {} : I$(t, n);
      });
      function cp(t, n) {
        if (t == null)
          return {};
        var i = Ee($u(t), function(l) {
          return [l];
        });
        return n = Y(n), th(t, i, function(l, d) {
          return n(l, d[0]);
        });
      }
      function nC(t, n, i) {
        n = er(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var p = t == null ? r : t[mn(n[l])];
          p === r && (l = d, p = i), t = Nn(p) ? p.call(t) : p;
        }
        return t;
      }
      function rC(t, n, i) {
        return t == null ? t : $i(t, n, i);
      }
      function oC(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : $i(t, n, i, l);
      }
      var dp = Vh(ze), fp = Vh(mt);
      function iC(t, n, i) {
        var l = J(t), d = l || nr(t) || co(t);
        if (n = Y(n, 4), i == null) {
          var p = t && t.constructor;
          d ? i = l ? new p() : [] : Ie(t) ? i = Nn(p) ? so(Ts(t)) : {} : i = {};
        }
        return (d ? Ft : wn)(t, function(m, g, V) {
          return n(i, m, g, V);
        }), i;
      }
      function sC(t, n) {
        return t == null ? !0 : fu(t, n);
      }
      function aC(t, n, i) {
        return t == null ? t : sh(t, n, wu(i));
      }
      function lC(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : sh(t, n, wu(i), l);
      }
      function fo(t) {
        return t == null ? [] : Gl(t, ze(t));
      }
      function uC(t) {
        return t == null ? [] : Gl(t, mt(t));
      }
      function cC(t, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Yt(i), i = i === i ? i : 0), n !== r && (n = Yt(n), n = n === n ? n : 0), Sr(Yt(t), n, i);
      }
      function dC(t, n, i) {
        return n = Ln(n), i === r ? (i = n, n = 0) : i = Ln(i), t = Yt(t), m$(t, n, i);
      }
      function fC(t, n, i) {
        if (i && typeof i != "boolean" && ut(t, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof t == "boolean" && (i = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Ln(t), n === r ? (n = t, t = 0) : n = Ln(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (i || t % 1 || n % 1) {
          var d = Mf();
          return et(t + d * (n - t + H1("1e-" + ((d + "").length - 1))), n);
        }
        return uu(t, n);
      }
      var hC = lo(function(t, n, i) {
        return n = n.toLowerCase(), t + (i ? hp(n) : n);
      });
      function hp(t) {
        return Mu(pe(t).toLowerCase());
      }
      function pp(t) {
        return t = pe(t), t && t.replace(w1, r0).replace(N1, "");
      }
      function pC(t, n, i) {
        t = pe(t), n = kt(n);
        var l = t.length;
        i = i === r ? l : Sr(X(i), 0, l);
        var d = i;
        return i -= n.length, i >= 0 && t.slice(i, d) == n;
      }
      function wC(t) {
        return t = pe(t), t && Zg.test(t) ? t.replace(Hd, o0) : t;
      }
      function vC(t) {
        return t = pe(t), t && t1.test(t) ? t.replace(Bl, "\\$&") : t;
      }
      var mC = lo(function(t, n, i) {
        return t + (i ? "-" : "") + n.toLowerCase();
      }), _C = lo(function(t, n, i) {
        return t + (i ? " " : "") + n.toLowerCase();
      }), gC = mh("toLowerCase");
      function $C(t, n, i) {
        t = pe(t), n = X(n);
        var l = n ? to(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return Zs(Ms(d), i) + t + Zs(Ls(d), i);
      }
      function yC(t, n, i) {
        t = pe(t), n = X(n);
        var l = n ? to(t) : 0;
        return n && l < n ? t + Zs(n - l, i) : t;
      }
      function bC(t, n, i) {
        t = pe(t), n = X(n);
        var l = n ? to(t) : 0;
        return n && l < n ? Zs(n - l, i) + t : t;
      }
      function VC(t, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), A0(pe(t).replace(Tl, ""), n || 0);
      }
      function CC(t, n, i) {
        return (i ? ut(t, n, i) : n === r) ? n = 1 : n = X(n), cu(pe(t), n);
      }
      function SC() {
        var t = arguments, n = pe(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var EC = lo(function(t, n, i) {
        return t + (i ? "_" : "") + n.toLowerCase();
      });
      function kC(t, n, i) {
        return i && typeof i != "number" && ut(t, n, i) && (n = i = r), i = i === r ? Ct : i >>> 0, i ? (t = pe(t), t && (typeof n == "string" || n != null && !Du(n)) && (n = kt(n), !n && eo(t)) ? tr(nn(t), 0, i) : t.split(n, i)) : [];
      }
      var IC = lo(function(t, n, i) {
        return t + (i ? " " : "") + Mu(n);
      });
      function xC(t, n, i) {
        return t = pe(t), i = i == null ? 0 : Sr(X(i), 0, t.length), n = kt(n), t.slice(i, i + n.length) == n;
      }
      function AC(t, n, i) {
        var l = h.templateSettings;
        i && ut(t, n, i) && (n = r), t = pe(t), n = aa({}, n, l, Ch);
        var d = aa({}, n.imports, l.imports, Ch), p = ze(d), m = Gl(d, p), g, V, x = 0, A = n.interpolate || $s, N = "__p += '", F = Zl(
          (n.escape || $s).source + "|" + A.source + "|" + (A === zd ? u1 : $s).source + "|" + (n.evaluate || $s).source + "|$",
          "g"
        ), q = "//# sourceURL=" + (ve.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++R1 + "]") + `
`;
        t.replace(F, function(j, oe, se, xt, ct, At) {
          return se || (se = xt), N += t.slice(x, At).replace(v1, i0), oe && (g = !0, N += `' +
__e(` + oe + `) +
'`), ct && (V = !0, N += `';
` + ct + `;
__p += '`), se && (N += `' +
((__t = (` + se + `)) == null ? '' : __t) +
'`), x = At + j.length, j;
        }), N += `';
`;
        var G = ve.call(n, "variable") && n.variable;
        if (!G)
          N = `with (obj) {
` + N + `
}
`;
        else if (a1.test(G))
          throw new K(f);
        N = (V ? N.replace(zg, "") : N).replace(Yg, "$1").replace(Gg, "$1;"), N = "function(" + (G || "obj") + `) {
` + (G ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (V ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + N + `return __p
}`;
        var Q = vp(function() {
          return fe(p, q + "return " + N).apply(r, m);
        });
        if (Q.source = N, Tu(Q))
          throw Q;
        return Q;
      }
      function BC(t) {
        return pe(t).toLowerCase();
      }
      function TC(t) {
        return pe(t).toUpperCase();
      }
      function DC(t, n, i) {
        if (t = pe(t), t && (i || n === r))
          return Sf(t);
        if (!t || !(n = kt(n)))
          return t;
        var l = nn(t), d = nn(n), p = Ef(l, d), m = kf(l, d) + 1;
        return tr(l, p, m).join("");
      }
      function NC(t, n, i) {
        if (t = pe(t), t && (i || n === r))
          return t.slice(0, xf(t) + 1);
        if (!t || !(n = kt(n)))
          return t;
        var l = nn(t), d = kf(l, nn(n)) + 1;
        return tr(l, 0, d).join("");
      }
      function LC(t, n, i) {
        if (t = pe(t), t && (i || n === r))
          return t.replace(Tl, "");
        if (!t || !(n = kt(n)))
          return t;
        var l = nn(t), d = Ef(l, nn(n));
        return tr(l, d).join("");
      }
      function MC(t, n) {
        var i = le, l = ye;
        if (Ie(n)) {
          var d = "separator" in n ? n.separator : d;
          i = "length" in n ? X(n.length) : i, l = "omission" in n ? kt(n.omission) : l;
        }
        t = pe(t);
        var p = t.length;
        if (eo(t)) {
          var m = nn(t);
          p = m.length;
        }
        if (i >= p)
          return t;
        var g = i - to(l);
        if (g < 1)
          return l;
        var V = m ? tr(m, 0, g).join("") : t.slice(0, g);
        if (d === r)
          return V + l;
        if (m && (g += V.length - g), Du(d)) {
          if (t.slice(g).search(d)) {
            var x, A = V;
            for (d.global || (d = Zl(d.source, pe(Yd.exec(d)) + "g")), d.lastIndex = 0; x = d.exec(A); )
              var N = x.index;
            V = V.slice(0, N === r ? g : N);
          }
        } else if (t.indexOf(kt(d), g) != g) {
          var F = V.lastIndexOf(d);
          F > -1 && (V = V.slice(0, F));
        }
        return V + l;
      }
      function OC(t) {
        return t = pe(t), t && jg.test(t) ? t.replace(qd, f0) : t;
      }
      var PC = lo(function(t, n, i) {
        return t + (i ? " " : "") + n.toUpperCase();
      }), Mu = mh("toUpperCase");
      function wp(t, n, i) {
        return t = pe(t), n = i ? r : n, n === r ? a0(t) ? w0(t) : X1(t) : t.match(n) || [];
      }
      var vp = re(function(t, n) {
        try {
          return St(t, r, n);
        } catch (i) {
          return Tu(i) ? i : new K(i);
        }
      }), RC = Tn(function(t, n) {
        return Ft(n, function(i) {
          i = mn(i), An(t, i, Au(t[i], t));
        }), t;
      });
      function FC(t) {
        var n = t == null ? 0 : t.length, i = Y();
        return t = n ? Ee(t, function(l) {
          if (typeof l[1] != "function")
            throw new Ut(c);
          return [i(l[0]), l[1]];
        }) : [], re(function(l) {
          for (var d = -1; ++d < n; ) {
            var p = t[d];
            if (St(p[0], this, l))
              return St(p[1], this, l);
          }
        });
      }
      function UC(t) {
        return f$(qt(t, $));
      }
      function Ou(t) {
        return function() {
          return t;
        };
      }
      function WC(t, n) {
        return t == null || t !== t ? n : t;
      }
      var qC = gh(), HC = gh(!0);
      function _t(t) {
        return t;
      }
      function Pu(t) {
        return Zf(typeof t == "function" ? t : qt(t, $));
      }
      function zC(t) {
        return Jf(qt(t, $));
      }
      function YC(t, n) {
        return Xf(t, qt(n, $));
      }
      var GC = re(function(t, n) {
        return function(i) {
          return _i(i, t, n);
        };
      }), jC = re(function(t, n) {
        return function(i) {
          return _i(t, i, n);
        };
      });
      function Ru(t, n, i) {
        var l = ze(n), d = Ws(n, l);
        i == null && !(Ie(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = Ws(n, ze(n)));
        var p = !(Ie(i) && "chain" in i) || !!i.chain, m = Nn(t);
        return Ft(d, function(g) {
          var V = n[g];
          t[g] = V, m && (t.prototype[g] = function() {
            var x = this.__chain__;
            if (p || x) {
              var A = t(this.__wrapped__), N = A.__actions__ = wt(this.__actions__);
              return N.push({ func: V, args: arguments, thisArg: t }), A.__chain__ = x, A;
            }
            return V.apply(t, Zn([this.value()], arguments));
          });
        }), t;
      }
      function ZC() {
        return Ge._ === this && (Ge._ = y0), this;
      }
      function Fu() {
      }
      function KC(t) {
        return t = X(t), re(function(n) {
          return Qf(n, t);
        });
      }
      var JC = mu(Ee), XC = mu($f), QC = mu(Wl);
      function mp(t) {
        return Cu(t) ? ql(mn(t)) : x$(t);
      }
      function eS(t) {
        return function(n) {
          return t == null ? r : Er(t, n);
        };
      }
      var tS = yh(), nS = yh(!0);
      function Uu() {
        return [];
      }
      function Wu() {
        return !1;
      }
      function rS() {
        return {};
      }
      function oS() {
        return "";
      }
      function iS() {
        return !0;
      }
      function sS(t, n) {
        if (t = X(t), t < 1 || t > He)
          return [];
        var i = Ct, l = et(t, Ct);
        n = Y(n), t -= Ct;
        for (var d = Yl(l, n); ++i < t; )
          n(i);
        return d;
      }
      function aS(t) {
        return J(t) ? Ee(t, mn) : It(t) ? [t] : wt(Oh(pe(t)));
      }
      function lS(t) {
        var n = ++g0;
        return pe(t) + n;
      }
      var uS = js(function(t, n) {
        return t + n;
      }, 0), cS = _u("ceil"), dS = js(function(t, n) {
        return t / n;
      }, 1), fS = _u("floor");
      function hS(t) {
        return t && t.length ? Us(t, _t, ru) : r;
      }
      function pS(t, n) {
        return t && t.length ? Us(t, Y(n, 2), ru) : r;
      }
      function wS(t) {
        return Vf(t, _t);
      }
      function vS(t, n) {
        return Vf(t, Y(n, 2));
      }
      function mS(t) {
        return t && t.length ? Us(t, _t, au) : r;
      }
      function _S(t, n) {
        return t && t.length ? Us(t, Y(n, 2), au) : r;
      }
      var gS = js(function(t, n) {
        return t * n;
      }, 1), $S = _u("round"), yS = js(function(t, n) {
        return t - n;
      }, 0);
      function bS(t) {
        return t && t.length ? zl(t, _t) : 0;
      }
      function VS(t, n) {
        return t && t.length ? zl(t, Y(n, 2)) : 0;
      }
      return h.after = zb, h.ary = jh, h.assign = TV, h.assignIn = lp, h.assignInWith = aa, h.assignWith = DV, h.at = NV, h.before = Zh, h.bind = Au, h.bindAll = RC, h.bindKey = Kh, h.castArray = rV, h.chain = zh, h.chunk = fy, h.compact = hy, h.concat = py, h.cond = FC, h.conforms = UC, h.constant = Ou, h.countBy = bb, h.create = LV, h.curry = Jh, h.curryRight = Xh, h.debounce = Qh, h.defaults = MV, h.defaultsDeep = OV, h.defer = Yb, h.delay = Gb, h.difference = wy, h.differenceBy = vy, h.differenceWith = my, h.drop = _y, h.dropRight = gy, h.dropRightWhile = $y, h.dropWhile = yy, h.fill = by, h.filter = Cb, h.flatMap = kb, h.flatMapDeep = Ib, h.flatMapDepth = xb, h.flatten = Uh, h.flattenDeep = Vy, h.flattenDepth = Cy, h.flip = jb, h.flow = qC, h.flowRight = HC, h.fromPairs = Sy, h.functions = HV, h.functionsIn = zV, h.groupBy = Ab, h.initial = ky, h.intersection = Iy, h.intersectionBy = xy, h.intersectionWith = Ay, h.invert = GV, h.invertBy = jV, h.invokeMap = Tb, h.iteratee = Pu, h.keyBy = Db, h.keys = ze, h.keysIn = mt, h.map = ta, h.mapKeys = KV, h.mapValues = JV, h.matches = zC, h.matchesProperty = YC, h.memoize = ra, h.merge = XV, h.mergeWith = up, h.method = GC, h.methodOf = jC, h.mixin = Ru, h.negate = oa, h.nthArg = KC, h.omit = QV, h.omitBy = eC, h.once = Zb, h.orderBy = Nb, h.over = JC, h.overArgs = Kb, h.overEvery = XC, h.overSome = QC, h.partial = Bu, h.partialRight = ep, h.partition = Lb, h.pick = tC, h.pickBy = cp, h.property = mp, h.propertyOf = eS, h.pull = Ny, h.pullAll = qh, h.pullAllBy = Ly, h.pullAllWith = My, h.pullAt = Oy, h.range = tS, h.rangeRight = nS, h.rearg = Jb, h.reject = Pb, h.remove = Py, h.rest = Xb, h.reverse = Iu, h.sampleSize = Fb, h.set = rC, h.setWith = oC, h.shuffle = Ub, h.slice = Ry, h.sortBy = Hb, h.sortedUniq = Yy, h.sortedUniqBy = Gy, h.split = kC, h.spread = Qb, h.tail = jy, h.take = Zy, h.takeRight = Ky, h.takeRightWhile = Jy, h.takeWhile = Xy, h.tap = hb, h.throttle = eV, h.thru = ea, h.toArray = ip, h.toPairs = dp, h.toPairsIn = fp, h.toPath = aS, h.toPlainObject = ap, h.transform = iC, h.unary = tV, h.union = Qy, h.unionBy = eb, h.unionWith = tb, h.uniq = nb, h.uniqBy = rb, h.uniqWith = ob, h.unset = sC, h.unzip = xu, h.unzipWith = Hh, h.update = aC, h.updateWith = lC, h.values = fo, h.valuesIn = uC, h.without = ib, h.words = wp, h.wrap = nV, h.xor = sb, h.xorBy = ab, h.xorWith = lb, h.zip = ub, h.zipObject = cb, h.zipObjectDeep = db, h.zipWith = fb, h.entries = dp, h.entriesIn = fp, h.extend = lp, h.extendWith = aa, Ru(h, h), h.add = uS, h.attempt = vp, h.camelCase = hC, h.capitalize = hp, h.ceil = cS, h.clamp = cC, h.clone = oV, h.cloneDeep = sV, h.cloneDeepWith = aV, h.cloneWith = iV, h.conformsTo = lV, h.deburr = pp, h.defaultTo = WC, h.divide = dS, h.endsWith = pC, h.eq = on, h.escape = wC, h.escapeRegExp = vC, h.every = Vb, h.find = Sb, h.findIndex = Rh, h.findKey = PV, h.findLast = Eb, h.findLastIndex = Fh, h.findLastKey = RV, h.floor = fS, h.forEach = Yh, h.forEachRight = Gh, h.forIn = FV, h.forInRight = UV, h.forOwn = WV, h.forOwnRight = qV, h.get = Nu, h.gt = uV, h.gte = cV, h.has = YV, h.hasIn = Lu, h.head = Wh, h.identity = _t, h.includes = Bb, h.indexOf = Ey, h.inRange = dC, h.invoke = ZV, h.isArguments = xr, h.isArray = J, h.isArrayBuffer = dV, h.isArrayLike = vt, h.isArrayLikeObject = Te, h.isBoolean = fV, h.isBuffer = nr, h.isDate = hV, h.isElement = pV, h.isEmpty = wV, h.isEqual = vV, h.isEqualWith = mV, h.isError = Tu, h.isFinite = _V, h.isFunction = Nn, h.isInteger = tp, h.isLength = ia, h.isMap = np, h.isMatch = gV, h.isMatchWith = $V, h.isNaN = yV, h.isNative = bV, h.isNil = CV, h.isNull = VV, h.isNumber = rp, h.isObject = Ie, h.isObjectLike = Be, h.isPlainObject = Ci, h.isRegExp = Du, h.isSafeInteger = SV, h.isSet = op, h.isString = sa, h.isSymbol = It, h.isTypedArray = co, h.isUndefined = EV, h.isWeakMap = kV, h.isWeakSet = IV, h.join = By, h.kebabCase = mC, h.last = zt, h.lastIndexOf = Ty, h.lowerCase = _C, h.lowerFirst = gC, h.lt = xV, h.lte = AV, h.max = hS, h.maxBy = pS, h.mean = wS, h.meanBy = vS, h.min = mS, h.minBy = _S, h.stubArray = Uu, h.stubFalse = Wu, h.stubObject = rS, h.stubString = oS, h.stubTrue = iS, h.multiply = gS, h.nth = Dy, h.noConflict = ZC, h.noop = Fu, h.now = na, h.pad = $C, h.padEnd = yC, h.padStart = bC, h.parseInt = VC, h.random = fC, h.reduce = Mb, h.reduceRight = Ob, h.repeat = CC, h.replace = SC, h.result = nC, h.round = $S, h.runInContext = b, h.sample = Rb, h.size = Wb, h.snakeCase = EC, h.some = qb, h.sortedIndex = Fy, h.sortedIndexBy = Uy, h.sortedIndexOf = Wy, h.sortedLastIndex = qy, h.sortedLastIndexBy = Hy, h.sortedLastIndexOf = zy, h.startCase = IC, h.startsWith = xC, h.subtract = yS, h.sum = bS, h.sumBy = VS, h.template = AC, h.times = sS, h.toFinite = Ln, h.toInteger = X, h.toLength = sp, h.toLower = BC, h.toNumber = Yt, h.toSafeInteger = BV, h.toString = pe, h.toUpper = TC, h.trim = DC, h.trimEnd = NC, h.trimStart = LC, h.truncate = MC, h.unescape = OC, h.uniqueId = lS, h.upperCase = PC, h.upperFirst = Mu, h.each = Yh, h.eachRight = Gh, h.first = Wh, Ru(h, function() {
        var t = {};
        return wn(h, function(n, i) {
          ve.call(h.prototype, i) || (t[i] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = s, Ft(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), Ft(["drop", "take"], function(t, n) {
        ie.prototype[t] = function(i) {
          i = i === r ? 1 : Fe(X(i), 0);
          var l = this.__filtered__ && !n ? new ie(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = et(i, l.__takeCount__) : l.__views__.push({
            size: et(i, Ct),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ie.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), Ft(["filter", "map", "takeWhile"], function(t, n) {
        var i = n + 1, l = i == Ae || i == Pe;
        ie.prototype[t] = function(d) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: Y(d, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), Ft(["head", "last"], function(t, n) {
        var i = "take" + (n ? "Right" : "");
        ie.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), Ft(["initial", "tail"], function(t, n) {
        var i = "drop" + (n ? "" : "Right");
        ie.prototype[t] = function() {
          return this.__filtered__ ? new ie(this) : this[i](1);
        };
      }), ie.prototype.compact = function() {
        return this.filter(_t);
      }, ie.prototype.find = function(t) {
        return this.filter(t).head();
      }, ie.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, ie.prototype.invokeMap = re(function(t, n) {
        return typeof t == "function" ? new ie(this) : this.map(function(i) {
          return _i(i, t, n);
        });
      }), ie.prototype.reject = function(t) {
        return this.filter(oa(Y(t)));
      }, ie.prototype.slice = function(t, n) {
        t = X(t);
        var i = this;
        return i.__filtered__ && (t > 0 || n < 0) ? new ie(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== r && (n = X(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
      }, ie.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, ie.prototype.toArray = function() {
        return this.take(Ct);
      }, wn(ie.prototype, function(t, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !d || (h.prototype[n] = function() {
          var m = this.__wrapped__, g = l ? [1] : arguments, V = m instanceof ie, x = g[0], A = V || J(m), N = function(oe) {
            var se = d.apply(h, Zn([oe], g));
            return l && F ? se[0] : se;
          };
          A && i && typeof x == "function" && x.length != 1 && (V = A = !1);
          var F = this.__chain__, q = !!this.__actions__.length, G = p && !F, Q = V && !q;
          if (!p && A) {
            m = Q ? m : new ie(this);
            var j = t.apply(m, g);
            return j.__actions__.push({ func: ea, args: [N], thisArg: r }), new Wt(j, F);
          }
          return G && Q ? t.apply(this, g) : (j = this.thru(N), G ? l ? j.value()[0] : j.value() : j);
        });
      }), Ft(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = Es[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
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
      }), wn(ie.prototype, function(t, n) {
        var i = h[n];
        if (i) {
          var l = i.name + "";
          ve.call(io, l) || (io[l] = []), io[l].push({ name: n, func: i });
        }
      }), io[Gs(r, S).name] = [{
        name: "wrapper",
        func: r
      }], ie.prototype.clone = O0, ie.prototype.reverse = P0, ie.prototype.value = R0, h.prototype.at = pb, h.prototype.chain = wb, h.prototype.commit = vb, h.prototype.next = mb, h.prototype.plant = gb, h.prototype.reverse = $b, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = yb, h.prototype.first = h.prototype.head, di && (h.prototype[di] = _b), h;
    }, no = v0();
    yr ? ((yr.exports = no)._ = no, Pl._ = no) : Ge._ = no;
  }).call(Si);
})(_e, _e.exports);
const qE = "/alarms?_s=", nl = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, HE = async (e, o) => {
  try {
    return (await pt.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      nl
    )).status === 204;
  } catch {
    return !1;
  }
}, Qm = async (e, o) => {
  try {
    return (await pt.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      nl
    )).status === 204;
  } catch {
    return !1;
  }
}, zE = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await qn.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      nl
    )).status == 204;
  } catch {
    return !1;
  }
}, YE = async () => {
  try {
    const e = `${qE}isSituation==true&limit=0`, o = await qn(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, GE = async (e) => {
  try {
    const o = e.join(",id=="), r = await qn(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, e_ = async (e) => {
  try {
    const o = await qn(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, jE = async (e) => {
  try {
    const o = await qn(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, ZE = async () => {
  try {
    const e = await qn("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => _e.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, KE = async (e, o, r) => {
  try {
    return (await qn.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      nl
    )).status == 204;
  } catch {
    return !1;
  }
}, JE = async (e, o) => {
  try {
    return (await qn.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, XE = async () => {
  try {
    const e = await qn.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, QE = window.Pinia.defineStore, pn = QE("situationsStore", {
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
      const e = await ZE();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await YE();
      if (e) {
        const o = e.alarm.map((u) => {
          var c;
          return u.status = (c = u.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, u;
        });
        this.filteredSituations = o.map((u) => u.id);
        const r = _e.exports.groupBy(o, "status"), a = [
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
        const s = await e_(e);
        if (s) {
          const a = (o = s.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await GE(a);
          s.status = (r = s.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : r.value, s.alarms = _e.exports.sortBy(c, ["id"]), this.situationDetail = s;
        }
      }
    },
    async getEvents(e, o) {
      const r = {};
      await Promise.all(
        o.map(async (s) => {
          const a = await jE(s);
          a && (r[s] = _e.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await XE();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), ek = window.Vue.openBlock, tk = window.Vue.createElementBlock, nk = window.Vue.createElementVNode;
var rk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ok = {}, ik = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, sk = /* @__PURE__ */ nk("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), ak = [
  sk
];
function lk(e, o) {
  return ek(), tk("svg", ik, ak);
}
var Wo = /* @__PURE__ */ rk(ok, [["render", lk]]);
var uk = Object.defineProperty, Wp = Object.getOwnPropertySymbols, ck = Object.prototype.hasOwnProperty, dk = Object.prototype.propertyIsEnumerable, qp = (e, o, r) => o in e ? uk(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Hp = (e, o) => {
  for (var r in o || (o = {}))
    ck.call(o, r) && qp(e, r, o[r]);
  if (Wp)
    for (var r of Wp(o))
      dk.call(o, r) && qp(e, r, o[r]);
  return e;
};
const fk = window.Vue.defineComponent, hk = window.Vue.toRaw, oc = window.Vue.h;
var pk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const wk = {
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
}, vk = fk({
  props: wk,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = hk(this.icon);
    return this.$slots.default ? oc("span", { class: "feather-icon-container" }, [
      oc(this.$slots.default()[0], Hp({
        class: o
      }, r))
    ]) : oc(s, Hp({
      class: o
    }, r));
  }
});
var Z = /* @__PURE__ */ pk(vk, [["__scopeId", "data-v-52cbf270"]]);
const mk = window.Vue.openBlock, _k = window.Vue.createElementBlock, gk = window.Vue.createElementVNode;
var $k = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const yk = {}, bk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Vk = /* @__PURE__ */ gk("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), Ck = [
  Vk
];
function Sk(e, o) {
  return mk(), _k("svg", bk, Ck);
}
var t_ = /* @__PURE__ */ $k(yk, [["render", Sk]]);
const Xe = {
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
function Vn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var o = Number(e);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function Ce(e, o) {
  if (o.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function qe(e) {
  Ce(1, arguments);
  var o = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && o === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || o === "[object Number]" ? new Date(e) : ((typeof e == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Ek(e, o) {
  Ce(2, arguments);
  var r = qe(e), s = Vn(o);
  return isNaN(s) ? new Date(NaN) : (s && r.setDate(r.getDate() + s), r);
}
function kk(e, o) {
  Ce(2, arguments);
  var r = qe(e).getTime(), s = Vn(o);
  return new Date(r + s);
}
var Ik = {};
function Go() {
  return Ik;
}
function zp(e, o) {
  var r, s, a, u, c, f, w, v;
  Ce(1, arguments);
  var _ = Go(), $ = Vn((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = qe(e), I = y.getDay(), D = (I < $ ? 7 : 0) + I - $;
  return y.setDate(y.getDate() - D), y.setHours(0, 0, 0, 0), y;
}
function Xc(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function Yp(e) {
  Ce(1, arguments);
  var o = qe(e);
  return o.setHours(0, 0, 0, 0), o;
}
function xk(e, o) {
  Ce(2, arguments);
  var r = qe(e), s = qe(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function n_(e, o) {
  Ce(2, arguments);
  var r = Yp(e), s = Yp(o);
  return r.getTime() === s.getTime();
}
function Ak(e) {
  return Ce(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Bk(e) {
  if (Ce(1, arguments), !Ak(e) && typeof e != "number")
    return !1;
  var o = qe(e);
  return !isNaN(Number(o));
}
function Tk(e, o) {
  Ce(2, arguments);
  var r = Vn(o);
  return kk(e, -r);
}
var Dk = 864e5;
function Nk(e) {
  Ce(1, arguments);
  var o = qe(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / Dk) + 1;
}
function Ua(e) {
  Ce(1, arguments);
  var o = 1, r = qe(e), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function r_(e) {
  Ce(1, arguments);
  var o = qe(e), r = o.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Ua(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = Ua(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function Lk(e) {
  Ce(1, arguments);
  var o = r_(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = Ua(r);
  return s;
}
var Mk = 6048e5;
function Ok(e) {
  Ce(1, arguments);
  var o = qe(e), r = Ua(o).getTime() - Lk(o).getTime();
  return Math.round(r / Mk) + 1;
}
function Wa(e, o) {
  var r, s, a, u, c, f, w, v;
  Ce(1, arguments);
  var _ = Go(), $ = Vn((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = qe(e), I = y.getUTCDay(), D = (I < $ ? 7 : 0) + I - $;
  return y.setUTCDate(y.getUTCDate() - D), y.setUTCHours(0, 0, 0, 0), y;
}
function o_(e, o) {
  var r, s, a, u, c, f, w, v;
  Ce(1, arguments);
  var _ = qe(e), $ = _.getUTCFullYear(), y = Go(), I = Vn((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = y.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(I >= 1 && I <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var D = new Date(0);
  D.setUTCFullYear($ + 1, 0, I), D.setUTCHours(0, 0, 0, 0);
  var M = Wa(D, o), L = new Date(0);
  L.setUTCFullYear($, 0, I), L.setUTCHours(0, 0, 0, 0);
  var S = Wa(L, o);
  return _.getTime() >= M.getTime() ? $ + 1 : _.getTime() >= S.getTime() ? $ : $ - 1;
}
function Pk(e, o) {
  var r, s, a, u, c, f, w, v;
  Ce(1, arguments);
  var _ = Go(), $ = Vn((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : _.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = o_(e, o), I = new Date(0);
  I.setUTCFullYear(y, 0, $), I.setUTCHours(0, 0, 0, 0);
  var D = Wa(I, o);
  return D;
}
var Rk = 6048e5;
function Fk(e, o) {
  Ce(1, arguments);
  var r = qe(e), s = Wa(r, o).getTime() - Pk(r, o).getTime();
  return Math.round(s / Rk) + 1;
}
function me(e, o) {
  for (var r = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var Uk = {
  y: function(e, o) {
    var r = e.getUTCFullYear(), s = r > 0 ? r : 1 - r;
    return me(o === "yy" ? s % 100 : s, o.length);
  },
  M: function(e, o) {
    var r = e.getUTCMonth();
    return o === "M" ? String(r + 1) : me(r + 1, 2);
  },
  d: function(e, o) {
    return me(e.getUTCDate(), o.length);
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
    return me(e.getUTCHours() % 12 || 12, o.length);
  },
  H: function(e, o) {
    return me(e.getUTCHours(), o.length);
  },
  m: function(e, o) {
    return me(e.getUTCMinutes(), o.length);
  },
  s: function(e, o) {
    return me(e.getUTCSeconds(), o.length);
  },
  S: function(e, o) {
    var r = o.length, s = e.getUTCMilliseconds(), a = Math.floor(s * Math.pow(10, r - 3));
    return me(a, o.length);
  }
};
const rr = Uk;
var wo = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Wk = {
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
    return rr.y(e, o);
  },
  Y: function(e, o, r, s) {
    var a = o_(e, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return me(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : me(u, o.length);
  },
  R: function(e, o) {
    var r = r_(e);
    return me(r, o.length);
  },
  u: function(e, o) {
    var r = e.getUTCFullYear();
    return me(r, o.length);
  },
  Q: function(e, o, r) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(s);
      case "QQ":
        return me(s, 2);
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
        return me(s, 2);
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
        return rr.M(e, o);
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
        return me(s + 1, 2);
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
    var a = Fk(e, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : me(a, o.length);
  },
  I: function(e, o, r) {
    var s = Ok(e);
    return o === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : me(s, o.length);
  },
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : rr.d(e, o);
  },
  D: function(e, o, r) {
    var s = Nk(e);
    return o === "Do" ? r.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : me(s, o.length);
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
        return me(u, 2);
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
        return me(u, o.length);
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
        return me(a, o.length);
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
    switch (s === 12 ? a = wo.noon : s === 0 ? a = wo.midnight : a = s / 12 >= 1 ? "pm" : "am", o) {
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
    switch (s >= 17 ? a = wo.evening : s >= 12 ? a = wo.afternoon : s >= 4 ? a = wo.morning : a = wo.night, o) {
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
    return rr.h(e, o);
  },
  H: function(e, o, r) {
    return o === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : rr.H(e, o);
  },
  K: function(e, o, r) {
    var s = e.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : me(s, o.length);
  },
  k: function(e, o, r) {
    var s = e.getUTCHours();
    return s === 0 && (s = 24), o === "ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : me(s, o.length);
  },
  m: function(e, o, r) {
    return o === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : rr.m(e, o);
  },
  s: function(e, o, r) {
    return o === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : rr.s(e, o);
  },
  S: function(e, o) {
    return rr.S(e, o);
  },
  X: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      case "X":
        return jp(u);
      case "XXXX":
      case "XX":
        return qr(u);
      case "XXXXX":
      case "XXX":
      default:
        return qr(u, ":");
    }
  },
  x: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return jp(u);
      case "xxxx":
      case "xx":
        return qr(u);
      case "xxxxx":
      case "xxx":
      default:
        return qr(u, ":");
    }
  },
  O: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Gp(u, ":");
      case "OOOO":
      default:
        return "GMT" + qr(u, ":");
    }
  },
  z: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Gp(u, ":");
      case "zzzz":
      default:
        return "GMT" + qr(u, ":");
    }
  },
  t: function(e, o, r, s) {
    var a = s._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return me(u, o.length);
  },
  T: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTime();
    return me(u, o.length);
  }
};
function Gp(e, o) {
  var r = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var c = o || "";
  return r + String(a) + c + me(u, 2);
}
function jp(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + me(Math.abs(e) / 60, 2);
  }
  return qr(e, o);
}
function qr(e, o) {
  var r = o || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = me(Math.floor(a / 60), 2), c = me(a % 60, 2);
  return s + u + r + c;
}
const qk = Wk;
var Zp = function(e, o) {
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
}, i_ = function(e, o) {
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
    return Zp(e, o);
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
  return u.replace("{{date}}", Zp(s, o)).replace("{{time}}", i_(a, o));
}, zk = {
  p: i_,
  P: Hk
};
const Yk = zk;
var Gk = ["D", "DD"], jk = ["YY", "YYYY"];
function Zk(e) {
  return Gk.indexOf(e) !== -1;
}
function Kk(e) {
  return jk.indexOf(e) !== -1;
}
function Kp(e, o, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Jk = {
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
}, Xk = function(e, o, r) {
  var s, a = Jk[e];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const Qk = Xk;
function ic(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, s = e.formats[r] || e.formats[e.defaultWidth];
    return s;
  };
}
var e2 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, t2 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, n2 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, r2 = {
  date: ic({
    formats: e2,
    defaultWidth: "full"
  }),
  time: ic({
    formats: t2,
    defaultWidth: "full"
  }),
  dateTime: ic({
    formats: n2,
    defaultWidth: "full"
  })
};
const o2 = r2;
var i2 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, s2 = function(e, o, r, s) {
  return i2[e];
};
const a2 = s2;
function Ei(e) {
  return function(o, r) {
    var s = r != null && r.context ? String(r.context) : "standalone", a;
    if (s === "formatting" && e.formattingValues) {
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
var l2 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, u2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, c2 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, d2 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, f2 = {
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
}, h2 = {
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
}, p2 = function(e, o) {
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
}, w2 = {
  ordinalNumber: p2,
  era: Ei({
    values: l2,
    defaultWidth: "wide"
  }),
  quarter: Ei({
    values: u2,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Ei({
    values: c2,
    defaultWidth: "wide"
  }),
  day: Ei({
    values: d2,
    defaultWidth: "wide"
  }),
  dayPeriod: Ei({
    values: f2,
    defaultWidth: "wide",
    formattingValues: h2,
    defaultFormattingWidth: "wide"
  })
};
const v2 = w2;
function ki(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], w = Array.isArray(f) ? _2(f, function($) {
      return $.test(c);
    }) : m2(f, function($) {
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
function m2(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function _2(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function g2(e) {
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
var $2 = /^(\d+)(th|st|nd|rd)?/i, y2 = /\d+/i, b2 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, V2 = {
  any: [/^b/i, /^(a|c)/i]
}, C2 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, S2 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, E2 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, k2 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, I2 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, x2 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, A2 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, B2 = {
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
}, T2 = {
  ordinalNumber: g2({
    matchPattern: $2,
    parsePattern: y2,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ki({
    matchPatterns: b2,
    defaultMatchWidth: "wide",
    parsePatterns: V2,
    defaultParseWidth: "any"
  }),
  quarter: ki({
    matchPatterns: C2,
    defaultMatchWidth: "wide",
    parsePatterns: S2,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: ki({
    matchPatterns: E2,
    defaultMatchWidth: "wide",
    parsePatterns: k2,
    defaultParseWidth: "any"
  }),
  day: ki({
    matchPatterns: I2,
    defaultMatchWidth: "wide",
    parsePatterns: x2,
    defaultParseWidth: "any"
  }),
  dayPeriod: ki({
    matchPatterns: A2,
    defaultMatchWidth: "any",
    parsePatterns: B2,
    defaultParseWidth: "any"
  })
};
const D2 = T2;
var N2 = {
  code: "en-US",
  formatDistance: Qk,
  formatLong: o2,
  formatRelative: a2,
  localize: v2,
  match: D2,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const s_ = N2;
var L2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, M2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, O2 = /^'([^]*?)'?$/, P2 = /''/g, R2 = /[a-zA-Z]/;
function F2(e, o, r) {
  var s, a, u, c, f, w, v, _, $, y, I, D, M, L, S, T, B, P;
  Ce(2, arguments);
  var k = String(o), R = Go(), O = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : R.locale) !== null && s !== void 0 ? s : s_, H = Vn((u = (c = (f = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (v = r.locale) === null || v === void 0 || (_ = v.options) === null || _ === void 0 ? void 0 : _.firstWeekContainsDate) !== null && f !== void 0 ? f : R.firstWeekContainsDate) !== null && c !== void 0 ? c : ($ = R.locale) === null || $ === void 0 || (y = $.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(H >= 1 && H <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var $e = Vn((I = (D = (M = (L = r == null ? void 0 : r.weekStartsOn) !== null && L !== void 0 ? L : r == null || (S = r.locale) === null || S === void 0 || (T = S.options) === null || T === void 0 ? void 0 : T.weekStartsOn) !== null && M !== void 0 ? M : R.weekStartsOn) !== null && D !== void 0 ? D : (B = R.locale) === null || B === void 0 || (P = B.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && I !== void 0 ? I : 0);
  if (!($e >= 0 && $e <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!O.localize)
    throw new RangeError("locale must contain localize property");
  if (!O.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var le = qe(e);
  if (!Bk(le))
    throw new RangeError("Invalid time value");
  var ye = Xc(le), ge = Tk(le, ye), ke = {
    firstWeekContainsDate: H,
    weekStartsOn: $e,
    locale: O,
    _originalDate: le
  }, Ae = k.match(M2).map(function(we) {
    var Pe = we[0];
    if (Pe === "p" || Pe === "P") {
      var Le = Yk[Pe];
      return Le(we, O.formatLong);
    }
    return we;
  }).join("").match(L2).map(function(we) {
    if (we === "''")
      return "'";
    var Pe = we[0];
    if (Pe === "'")
      return U2(we);
    var Le = qk[Pe];
    if (Le)
      return !(r != null && r.useAdditionalWeekYearTokens) && Kk(we) && Kp(we, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && Zk(we) && Kp(we, o, String(e)), Le(ge, we, O.localize, ke);
    if (Pe.match(R2))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Pe + "`");
    return we;
  }).join("");
  return Ae;
}
function U2(e) {
  var o = e.match(O2);
  return o ? o[1].replace(P2, "'") : e;
}
function a_(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function W2(e) {
  return a_({}, e);
}
var Jp = 1e3 * 60, qa = 60 * 24, Xp = qa * 30, Qp = qa * 365;
function rl(e, o, r) {
  var s, a, u;
  Ce(2, arguments);
  var c = Go(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : s_;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = xk(e, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var v = a_(W2(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), _, $;
  w > 0 ? (_ = qe(o), $ = qe(e)) : (_ = qe(e), $ = qe(o));
  var y = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), I;
  if (y === "floor")
    I = Math.floor;
  else if (y === "ceil")
    I = Math.ceil;
  else if (y === "round")
    I = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var D = $.getTime() - _.getTime(), M = D / Jp, L = Xc($) - Xc(_), S = (D - L) / Jp, T = r == null ? void 0 : r.unit, B;
  if (T ? B = String(T) : M < 1 ? B = "second" : M < 60 ? B = "minute" : M < qa ? B = "hour" : S < Xp ? B = "day" : S < Qp ? B = "month" : B = "year", B === "second") {
    var P = I(D / 1e3);
    return f.formatDistance("xSeconds", P, v);
  } else if (B === "minute") {
    var k = I(M);
    return f.formatDistance("xMinutes", k, v);
  } else if (B === "hour") {
    var R = I(M / 60);
    return f.formatDistance("xHours", R, v);
  } else if (B === "day") {
    var O = I(S / qa);
    return f.formatDistance("xDays", O, v);
  } else if (B === "month") {
    var H = I(S / Xp);
    return H === 12 && T !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", H, v);
  } else if (B === "year") {
    var $e = I(S / Qp);
    return f.formatDistance("xYears", $e, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function q2(e, o, r) {
  Ce(2, arguments);
  var s = zp(e, r), a = zp(o, r);
  return s.getTime() === a.getTime();
}
function H2(e, o) {
  return Ce(1, arguments), q2(e, Date.now(), o);
}
function z2(e) {
  return Ce(1, arguments), n_(e, Date.now());
}
function Y2(e, o) {
  Ce(2, arguments);
  var r = Vn(o);
  return Ek(e, -r);
}
function G2(e) {
  return Ce(1, arguments), n_(e, Y2(Date.now(), 1));
}
const Cn = (e) => {
  let o = "";
  if (e)
    try {
      o = F2(new Date(e), Xe.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, l_ = (e, o) => {
  const s = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), a = s.length > o ? "..." : "";
  return s.substring(0, o) + a;
}, j2 = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (s) => z2(s.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (s) => G2(s.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (s) => H2(s.firstEventTime)
      );
      break;
  }
  return r;
}, ol = "/alec", u_ = "/alec/engine/configuration", c_ = "/alec/claude/configuration", Z2 = "/alec/claude/suggestions", K2 = "/alec/claude/usage", d_ = "/alec/situation", J2 = async () => {
  try {
    const e = await pt.get(`${u_}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, X2 = async (e) => {
  try {
    return (await pt.post(u_, e)).status === 200;
  } catch {
    return !1;
  }
}, Q2 = async () => {
  try {
    const e = await pt.get(c_);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, eI = async (e) => {
  try {
    const o = await pt.post(c_, e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, f_ = async (e) => {
  try {
    const o = await pt.get(`${Z2}/${e}`);
    return o.status === 200 ? o.data : o.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, tI = async (e = 30) => {
  try {
    const o = await pt.get(`${K2}?days=${e}`);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, h_ = async (e, o) => {
  try {
    const r = await pt.post(`${ol}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return o == Xe.REJECTED.toLowerCase() && r.status === 200 && await Qm(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, ew = async (e, o) => {
  try {
    return (await pt.delete(`${ol}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, p_ = async (e, o) => {
  try {
    return (await pt.put(`${ol}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, nI = async (e) => {
  try {
    return (await pt.post(d_, e)).status === 200;
  } catch {
    return !1;
  }
}, rI = async () => {
  try {
    return (await pt.post(`${d_}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, oI = async () => {
  try {
    return (await pt.post(`${ol}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, iI = window.Vue.defineComponent, Tt = window.Vue.unref, sc = window.Vue.normalizeClass, yn = window.Vue.createElementVNode, Ar = window.Vue.toDisplayString, or = window.Vue.openBlock, ir = window.Vue.createElementBlock, Ii = window.Vue.createCommentVNode, tw = window.Vue.createVNode, Qc = window.Vue.createTextVNode, sI = window.Vue.renderList, aI = window.Vue.Fragment, lI = window.Vue.pushScopeId, uI = window.Vue.popScopeId, yd = (e) => (lI("data-v-2ed3bdb3"), e = e(), uI(), e), cI = { class: "content" }, dI = { class: "title-row" }, fI = { class: "title" }, hI = ["title"], pI = {
  key: 1,
  class: "accepted"
}, wI = {
  key: 2,
  class: "rejected"
}, vI = /* @__PURE__ */ yd(() => /* @__PURE__ */ yn("span", { class: "info-title" }, " Duration: ", -1)), mI = { key: 0 }, _I = /* @__PURE__ */ yd(() => /* @__PURE__ */ yn("span", { class: "info-title" }, " First Event: ", -1)), gI = { class: "description" }, $I = /* @__PURE__ */ yd(() => /* @__PURE__ */ yn("hr", null, null, -1)), yI = {
  key: 1,
  class: "count-info"
}, bI = /* @__PURE__ */ Qc(" Alarms: "), VI = { class: "info-title" }, CI = window.Vue.onMounted, SI = window.Vue.ref, EI = /* @__PURE__ */ iI({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, s = Xe.ACCEPTED, a = Xe.REJECTED, u = new Date().getTime(), c = () => {
      var w;
      o("situation-selected", (w = r.situationInfo) == null ? void 0 : w.id);
    }, f = SI("none");
    return CI(async () => {
      var v;
      if (((v = r.situationInfo) == null ? void 0 : v.id) === void 0)
        return;
      const w = await f_(r.situationInfo.id);
      w && w.status && (f.value = w.status);
    }), (w, v) => {
      var _, $, y;
      return or(), ir("div", {
        onClick: c,
        class: sc(["card", {
          rejected: r.situationInfo.status == Tt(a)
        }])
      }, [
        yn("div", {
          class: sc(["severity-line", [`${($ = (_ = r.situationInfo) == null ? void 0 : _.severity) == null ? void 0 : $.toLowerCase()}-bg dark`]])
        }, null, 2),
        yn("div", cI, [
          yn("div", dI, [
            yn("div", fI, "Situation " + Ar((y = r.situationInfo) == null ? void 0 : y.id), 1),
            f.value !== "none" ? (or(), ir("span", {
              key: 0,
              class: sc(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + Ar(f.value === "pending" ? "\u2026" : ""), 11, hI)) : Ii("", !0),
            r.situationInfo.status == Tt(s) ? (or(), ir("div", pI, [
              tw(Tt(Z), {
                icon: Tt(Wo),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Ii("", !0),
            r.situationInfo.status == Tt(a) ? (or(), ir("div", wI, [
              tw(Tt(Z), {
                icon: Tt(t_),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Ii("", !0)
          ]),
          yn("div", null, [
            vI,
            Qc(" " + Ar(Tt(rl)(
              Tt(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? Ii("", !0) : (or(), ir("div", mI, [
            _I,
            Qc(Ar(Tt(Cn)(r.situationInfo.firstEventTime)), 1)
          ])),
          yn("div", gI, Ar(Tt(l_)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          $I,
          r.situationInfo.relatedAlarms ? (or(), ir("div", yI, [
            bI,
            yn("span", VI, Ar(r.situationInfo.relatedAlarms.length), 1)
          ])) : Ii("", !0),
          (or(!0), ir(aI, null, sI(Tt(_e.exports.keys)(
            Tt(_e.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (I) => (or(), ir("div", {
            class: "info-title",
            key: I
          }, " - " + Ar(I), 1))), 128))
        ])
      ], 2);
    };
  }
});
const w_ = /* @__PURE__ */ de(EI, [["__scopeId", "data-v-2ed3bdb3"]]), kI = window.Vue.openBlock, II = window.Vue.createElementBlock, xI = window.Vue.createElementVNode;
var AI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const BI = {}, TI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, DI = /* @__PURE__ */ xI("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), NI = [
  DI
];
function LI(e, o) {
  return kI(), II("svg", TI, NI);
}
var MI = /* @__PURE__ */ AI(BI, [["render", LI]]);
const OI = window.Vue.openBlock, PI = window.Vue.createElementBlock, v_ = window.Vue.createElementVNode;
var RI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const FI = {}, UI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WI = /* @__PURE__ */ v_("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), qI = /* @__PURE__ */ v_("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), HI = [
  WI,
  qI
];
function zI(e, o) {
  return OI(), PI("svg", UI, HI);
}
var YI = /* @__PURE__ */ RI(FI, [["render", zI]]);
const GI = window.Vue.openBlock, jI = window.Vue.createElementBlock, ZI = window.Vue.createElementVNode;
var KI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const JI = {}, XI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, QI = /* @__PURE__ */ ZI("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), ex = [
  QI
];
function tx(e, o) {
  return GI(), jI("svg", XI, ex);
}
var nx = /* @__PURE__ */ KI(JI, [["render", tx]]);
const rx = window.Vue.openBlock, ox = window.Vue.createElementBlock, ix = window.Vue.createElementVNode;
var sx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ax = {}, lx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ux = /* @__PURE__ */ ix("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), cx = [
  ux
];
function dx(e, o) {
  return rx(), ox("svg", lx, cx);
}
var m_ = /* @__PURE__ */ sx(ax, [["render", dx]]);
const fx = window.Vue.defineComponent, sr = window.Vue.unref, la = window.Vue.normalizeClass, ua = window.Vue.createVNode, hx = window.Vue.openBlock, px = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const wx = { class: "paginator" }, vx = /* @__PURE__ */ fx({
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
    return (a, u) => (hx(), px("div", wx, [
      ua(sr(Z), {
        icon: sr(MI),
        "aria-hidden": "true",
        class: la(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      ua(sr(Z), {
        icon: sr(nx),
        "aria-hidden": "true",
        class: la(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      ua(sr(Z), {
        icon: sr(m_),
        "aria-hidden": "true",
        class: la(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      ua(sr(Z), {
        icon: sr(YI),
        "aria-hidden": "true",
        class: la(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const mx = /* @__PURE__ */ de(vx, [["__scopeId", "data-v-40758818"]]);
const ce = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, _x = window.Vue.computed, il = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = _x(() => e.value[s] ? e.value[s] : o[s]);
  }), r;
};
const Gr = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, jr = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var gx = Object.defineProperty, $x = Object.defineProperties, yx = Object.getOwnPropertyDescriptors, nw = Object.getOwnPropertySymbols, bx = Object.prototype.hasOwnProperty, Vx = Object.prototype.propertyIsEnumerable, rw = (e, o, r) => o in e ? gx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ow = (e, o) => {
  for (var r in o || (o = {}))
    bx.call(o, r) && rw(e, r, o[r]);
  if (nw)
    for (var r of nw(o))
      Vx.call(o, r) && rw(e, r, o[r]);
  return e;
}, Cx = (e, o) => $x(e, yx(o));
const Sx = window.Vue.defineComponent, Ex = window.Vue.h;
var kx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Ix = {
  center: {
    type: Boolean,
    default: !1
  }
}, xx = Sx({
  props: Ix,
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
        this.styles = Cx(ow({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, jr(this.failsafe), this.failsafe = Gr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return Ex("div", {
        style: ow({}, this.styles),
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
var pr = /* @__PURE__ */ kx(xx, [["__scopeId", "data-v-18e2a5db"]]);
const Ax = window.Vue.openBlock, Bx = window.Vue.createElementBlock, Tx = window.Vue.createElementVNode;
var Dx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Nx = {}, Lx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Mx = /* @__PURE__ */ Tx("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), Ox = [
  Mx
];
function Px(e, o) {
  return Ax(), Bx("svg", Lx, Ox);
}
var jo = /* @__PURE__ */ Dx(Nx, [["render", Px]]);
const iw = window.Vue.computed, Rx = (e, o, r) => {
  const s = iw(() => o.value.filter((u) => !u.disabled)), a = iw(() => e.value ? s.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(s.value[s.value.length - 1]) : r(s.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === s.value.length - 1 ? r(s.value[0]) : r(s.value[a.value + 1]));
    }
  };
};
const Fx = window.Vue.openBlock, Ux = window.Vue.createElementBlock, bd = window.Vue.createElementVNode;
var Wx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const qx = {}, Hx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zx = /* @__PURE__ */ bd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Yx = /* @__PURE__ */ bd("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Gx = /* @__PURE__ */ bd("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), jx = [
  zx,
  Yx,
  Gx
];
function Zx(e, o) {
  return Fx(), Ux("svg", Hx, jx);
}
var Kx = /* @__PURE__ */ Wx(qx, [["render", Zx]]), Jx = Object.defineProperty, Xx = Object.defineProperties, Qx = Object.getOwnPropertyDescriptors, sw = Object.getOwnPropertySymbols, eA = Object.prototype.hasOwnProperty, tA = Object.prototype.propertyIsEnumerable, aw = (e, o, r) => o in e ? Jx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, __ = (e, o) => {
  for (var r in o || (o = {}))
    eA.call(o, r) && aw(e, r, o[r]);
  if (sw)
    for (var r of sw(o))
      tA.call(o, r) && aw(e, r, o[r]);
  return e;
}, g_ = (e, o) => Xx(e, Qx(o));
const Zo = window.Vue.defineComponent, ns = window.Vue.resolveComponent, bn = window.Vue.openBlock, Do = window.Vue.createElementBlock, nA = window.Vue.createVNode, Ha = window.Vue.createBlock, rA = window.Vue.withModifiers, qo = window.Vue.inject, rs = window.Vue.computed, oA = window.Vue.normalizeClass, vo = window.Vue.createElementVNode, za = window.Vue.toDisplayString, Na = window.Vue.renderSlot, Zi = window.Vue.createCommentVNode, iA = window.Vue.withDirectives, sA = window.Vue.vShow, ed = window.Vue.ref, lw = window.Vue.toRef, uw = window.Vue.nextTick, td = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Vd = window.Vue.provide, cw = window.Vue.isRef, aA = window.Vue.onBeforeUnmount;
var ls = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const lA = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, uA = Zo({
  props: lA,
  components: {
    FeatherIcon: Z
  }
}), cA = ["title"];
function dA(e, o, r, s, a, u) {
  const c = ns("FeatherIcon");
  return bn(), Do("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    nA(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, cA);
}
var fA = /* @__PURE__ */ ls(uA, [["render", dA], ["__scopeId", "data-v-4265058e"]]);
const hA = Zo({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return jo;
    }
  },
  components: {
    ActionIcon: fA
  }
});
function pA(e, o, r, s, a, u) {
  const c = ns("ActionIcon");
  return bn(), Ha(c, {
    onClick: o[0] || (o[0] = rA((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var wA = /* @__PURE__ */ ls(hA, [["render", pA]]);
const vA = Zo({
  computed: {
    errorIcon() {
      return Kx;
    }
  },
  components: {
    FeatherIcon: Z
  }
});
function mA(e, o, r, s, a, u) {
  const c = ns("FeatherIcon");
  return bn(), Ha(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var _A = /* @__PURE__ */ ls(vA, [["render", mA], ["__scopeId", "data-v-0b8faef3"]]);
const gA = {
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
}, $A = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, yA = Zo({
  emits: $A,
  props: gA,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = qo("wrapperOptions", {}), o = qo("validationErrorMessage", !1), r = rs(() => e.error ? e.error : o && o.value ? o.value : !1);
    return g_(__({}, e), { error: r });
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
    ClearIcon: wA,
    ErrorIcon: _A
  }
}), bA = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, VA = ["for"], CA = { class: "prefix" }, SA = { class: "post" };
function EA(e, o, r, s, a, u) {
  const c = ns("ClearIcon"), f = ns("ErrorIcon");
  return bn(), Do("div", {
    class: oA(["feather-input-wrapper-container", e.containerCls])
  }, [
    vo("fieldset", bA, [
      vo("legend", null, za(e.label), 1)
    ]),
    vo("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, za(e.label), 9, VA),
    vo("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => e.handleWrapperClick && e.handleWrapperClick(...w))
    }, [
      vo("div", CA, [
        Na(e.$slots, "pre", {}, void 0, !0)
      ]),
      Na(e.$slots, "default", {}, void 0, !0),
      vo("div", SA, [
        e.showClear && e.computedClearText ? (bn(), Ha(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (w) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Zi("", !0),
        e.error ? (bn(), Ha(f, { key: 1 })) : Zi("", !0),
        Na(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var sl = /* @__PURE__ */ ls(yA, [["render", EA], ["__scopeId", "data-v-4db296db"]]);
const kA = Zo({
  setup() {
    const e = qo("subTextOptions", {}), o = qo("validationErrorMessage", !1), r = rs(() => e.error ? e.error : o && o.value ? o.value : "");
    return g_(__({}, e), { error: r });
  }
}), IA = { class: "feather-input-sub-text" }, xA = {
  key: 0,
  class: "feather-input-spacer"
}, AA = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, BA = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function TA(e, o, r, s, a, u) {
  return iA((bn(), Do("div", IA, [
    !e.hint && !e.error.length ? (bn(), Do("div", xA, "\xA0")) : Zi("", !0),
    e.hint && !e.error.length ? (bn(), Do("div", AA, za(e.hint), 1)) : Zi("", !0),
    e.error.length > 0 ? (bn(), Do("div", BA, za(e.error), 1)) : Zi("", !0),
    Na(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [sA, !e.inline || e.hint || e.error.length]
  ]);
}
var Ko = /* @__PURE__ */ ls(kA, [["render", TA], ["__scopeId", "data-v-8e0ac99e"]]);
const DA = {
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
Zo({
  props: DA,
  setup(e) {
    const o = qo("featherFormErrors", ed([])), r = lw(e, "errorList"), s = rs(() => {
      var _;
      return (_ = r.value) != null && _.length ? r.value : o.value;
    }), a = lw(e, "generalError"), u = (_) => {
      document.getElementById(_).focus();
    }, c = (_) => _.replace(/ \*$/, ""), f = ed(), w = (_) => `${c(_.label)} - ${_.message}`, v = rs(() => (s.value.length && uw(() => f.value.focus()), e.headingText(s.value)));
    return td(a, (_) => {
      _.length && uw(() => f.value.focus());
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
const Jo = (e, o, r, s, a) => {
  const u = qo("featherForm", !1);
  if (s && u && e.value) {
    const c = ed("");
    Vd("validationErrorMessage", c);
    const f = () => {
      if (a && cw(a) && a.value)
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
    }, v = {
      clear: () => {
        c.value = "";
      },
      validate: f
    };
    return a && cw(a) && td(a, () => {
      u.runValidation();
    }), td(e, (_, $) => {
      _ && u && u.register(_, v), $ && u && u.deregister($);
    }, { immediate: !0 }), aA(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Xo = (e) => ({
  inherittedAttrs: rs(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Qo = {
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
}, ei = (e) => {
  Vd("subTextOptions", e);
}, al = {
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
}, ll = (e) => {
  Vd("wrapperOptions", e);
}, ca = window.Vue.ref, NA = window.Vue.watch, LA = window.Vue.watchEffect, dw = window.Vue.computed, ac = window.Vue.provide, $_ = (e, o, r, s, a) => {
  const u = ca([]), c = ca(), f = ca(), w = ca();
  LA(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((T) => T.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let T = u.value.filter((B) => !B.disabled);
      T = T.length ? T : u.value, f.value = T[0], f.value.first = !0;
    }
  }), NA(c, (S, T) => {
    T && (T.checked = !1), S && (S.checked = !0);
  });
  const v = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (o("update:modelValue", S.value), c.value = S, S.focus()));
  }, _ = dw(() => c.value || f.value), $ = Rx(_, u, v), y = dw(() => ce("feather-radio-group"));
  w.value = y.value;
  const { validate: I } = Jo(w, e, r, s, a);
  return ac("register", (S) => {
    u.value = [...u.value, S], w.value === y.value && (w.value = S.id);
  }), ac("select", v), ac("blur", (S) => {
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
    validate: I,
    firstElementId: w,
    groupId: y
  };
};
var MA = Object.defineProperty, OA = Object.defineProperties, PA = Object.getOwnPropertyDescriptors, fw = Object.getOwnPropertySymbols, RA = Object.prototype.hasOwnProperty, FA = Object.prototype.propertyIsEnumerable, hw = (e, o, r) => o in e ? MA(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Oo = (e, o) => {
  for (var r in o || (o = {}))
    RA.call(o, r) && hw(e, r, o[r]);
  if (fw)
    for (var r of fw(o))
      FA.call(o, r) && hw(e, r, o[r]);
  return e;
}, y_ = (e, o) => OA(e, PA(o));
const wr = window.Vue.defineComponent, Ki = window.Vue.inject, Ya = window.Vue.computed, Ji = window.Vue.ref, en = window.Vue.resolveComponent, Mt = window.Vue.openBlock, us = window.Vue.createElementBlock, b_ = window.Vue.normalizeClass, Sn = window.Vue.renderSlot, fr = window.Vue.createBlock, os = window.Vue.createCommentVNode, Ga = window.Vue.createElementVNode, UA = window.Vue.withModifiers, ul = window.Vue.createVNode, V_ = window.Vue.toRef, nd = window.Vue.mergeProps, Wn = window.Vue.withCtx, WA = window.Vue.h, qA = window.Vue.provide;
var vr = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const HA = {
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
}, zA = wr({
  props: HA,
  setup(e) {
    const o = Ki("isCondensed", null), r = Ya(() => o || e.condensed), s = Ji(!1);
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
    FeatherRipple: pr
  }
}), YA = ["aria-disabled"];
function GA(e, o, r, s, a, u) {
  const c = en("FeatherRipple");
  return Mt(), us("div", {
    class: b_(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    Sn(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (Mt(), fr(c, { key: 0 })) : os("", !0)
  ], 42, YA);
}
var cl = /* @__PURE__ */ vr(zA, [["render", GA], ["__scopeId", "data-v-44d413dc"]]);
const jA = {
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
}, ZA = wr({
  emits: ["delete"],
  props: jA,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: jo
    };
  },
  components: {
    FeatherIcon: Z
  }
}), KA = { class: "chip-delete" }, JA = ["aria-label", "aria-describedby"];
function XA(e, o, r, s, a, u) {
  const c = en("FeatherIcon");
  return Mt(), us("span", KA, [
    Ga("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = UA((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      ul(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, JA)
  ]);
}
var QA = /* @__PURE__ */ vr(ZA, [["render", XA], ["__scopeId", "data-v-4bae6cb4"]]);
const eB = wr({
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
}), tB = ["title"];
function nB(e, o, r, s, a, u) {
  return Mt(), us("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    Sn(e.$slots, "default", {}, void 0, !0)
  ], 8, tB);
}
var dl = /* @__PURE__ */ vr(eB, [["render", nB], ["__scopeId", "data-v-1a0445b2"]]);
const rB = {}, oB = {
  class: "chip-icon",
  role: "presentation"
};
function iB(e, o) {
  return Mt(), us("span", oB, [
    Sn(e.$slots, "default", {}, void 0, !0)
  ]);
}
var fl = /* @__PURE__ */ vr(rB, [["render", iB], ["__scopeId", "data-v-2230176f"]]);
const pw = {
  delete: "Remove"
}, sB = wr({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => pw
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, o) {
    const r = il(V_(e, "labels"), pw), s = Ya(() => ce("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = Oo({}, o.attrs);
    return e.disabled && delete u.onClick, y_(Oo({}, r), {
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
    Chip: cl,
    DeleteIcon: QA,
    Label: dl,
    PreIcon: fl
  }
}), aB = ["aria-disabled"];
function lB(e, o, r, s, a, u) {
  const c = en("PreIcon"), f = en("Label"), w = en("DeleteIcon"), v = en("Chip");
  return Mt(), fr(v, nd(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: Wn(() => [
      Ga("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Ga("span", nd(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (Mt(), fr(c, { key: 0 }, {
            default: Wn(() => [
              Sn(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : os("", !0),
          ul(f, { id: e.chipTextId }, {
            default: Wn(() => [
              Sn(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, aB),
      e.canDelete ? (Mt(), fr(w, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (_) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : os("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var uB = /* @__PURE__ */ vr(sB, [["render", lB], ["__scopeId", "data-v-48b2704a"]]);
const cB = wr({
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
    Chip: cl,
    Label: dl,
    PreIcon: fl
  }
}), dB = ["aria-disabled"];
function fB(e, o, r, s, a, u) {
  const c = en("PreIcon"), f = en("Label"), w = en("Chip");
  return Mt(), fr(w, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: Wn(() => [
      Ga("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (Mt(), fr(c, { key: 0 }, {
          default: Wn(() => [
            Sn(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : os("", !0),
        ul(f, null, {
          default: Wn(() => [
            Sn(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, dB)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var hB = /* @__PURE__ */ vr(cB, [["render", fB], ["__scopeId", "data-v-3e0c4eba"]]);
const pB = wr({
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
    const o = Ji(!1), r = Ji(!1), s = Ya(() => ce("chip-label-id")), a = Ya(() => o.value || r.value ? 0 : -1), u = Ji(), c = () => {
      u.value.$el.focus();
    }, f = Ki("register", (y) => {
    }), w = Ki("blur", (y) => {
    }), v = Ki("select", (y) => {
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
    Chip: cl,
    Label: dl,
    PreIcon: fl
  }
});
function wB(e, o, r, s, a, u) {
  const c = en("PreIcon"), f = en("Label"), w = en("Chip");
  return Mt(), fr(w, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: b_(["focus hover", { selected: e.checked }]),
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
    default: Wn(() => [
      e.hasIcon ? (Mt(), fr(c, { key: 0 }, {
        default: Wn(() => [
          Sn(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : os("", !0),
      ul(f, { id: e.labelId }, {
        default: Wn(() => [
          Sn(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var vB = /* @__PURE__ */ vr(pB, [["render", wB], ["__scopeId", "data-v-bbcc2f70"]]);
const mB = {
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
}, ww = wr({
  props: mB,
  setup() {
    return { format: Ki("chipListFormat", "") };
  },
  render() {
    const e = (o) => WA(o, Oo(Oo({}, this.$props), this.$attrs), Oo({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(uB) : this.format === "radio" ? e(vB) : e(hB);
  }
}), _B = {
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
}, gB = wr({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: _B,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    qA("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const c = V_(e, "modelValue");
      return y_(Oo({
        attrs: {
          role: "radiogroup"
        }
      }, $_(c, o.emit, e.label, {}, Ji(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), $B = ["aria-label"];
function yB(e, o, r, s, a, u) {
  return Mt(), us("div", nd(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    Sn(e.$slots, "default", {}, void 0, !0)
  ], 16, $B);
}
var bB = /* @__PURE__ */ vr(gB, [["render", yB], ["__scopeId", "data-v-1e06f41d"]]);
const VB = window.Vue.defineComponent, CB = window.Vue.normalizeClass, SB = window.Vue.openBlock, EB = window.Vue.createElementBlock, kB = window.Vue.createCommentVNode, IB = /* @__PURE__ */ VB({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (SB(), EB("span", {
      key: 0,
      class: CB(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : kB("", !0);
  }
});
const xB = /* @__PURE__ */ de(IB, [["__scopeId", "data-v-e08880d6"]]), AB = window.Vue.defineComponent, xi = window.Vue.unref, C_ = window.Vue.createTextVNode, lc = window.Vue.normalizeClass, uc = window.Vue.withCtx, BB = window.Vue.createVNode, TB = window.Vue.renderList, DB = window.Vue.Fragment, da = window.Vue.openBlock, NB = window.Vue.createElementBlock, cc = window.Vue.createBlock, vw = window.Vue.createCommentVNode, LB = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const MB = /* @__PURE__ */ C_(" ALL "), mw = window.Vue.ref, OB = window.Vue.watch, PB = window.Vue.computed, RB = window.Vue.reactive, FB = /* @__PURE__ */ AB({
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
    const r = e, s = mw(!1), a = PB(() => _e.exports.keys(_e.exports.groupBy(r.alarms, r.property))), u = mw(
      (w = r.preSelected) != null && w.length ? r.preSelected : ["all"]
    ), c = RB({
      alarms: r.alarms
    }), f = (v) => {
      u.value = u.value.filter((_) => _ !== "all"), u.value.includes(v) ? u.value = u.value.filter((_) => _ !== v) : u.value.push(v), (v === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return OB(r, () => {
      var v;
      u.value = (v = r.preSelected) != null && v.length ? r.preSelected : ["all"], c.alarms = r.alarms, s.value = !1;
    }), (v, _) => xi(a).length > 0 ? (da(), cc(xi(bB), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: lc({ vertical: r.isVertical })
    }, {
      default: uc(() => [
        BB(xi(ww), {
          class: lc({ clicked: u.value.includes("all") }),
          onClick: _[0] || (_[0] = ($) => f("all"))
        }, {
          default: uc(() => [
            MB
          ]),
          _: 1
        }, 8, ["class"]),
        (da(!0), NB(DB, null, TB(xi(a), ($) => (da(), cc(xi(ww), {
          class: lc([
            { clicked: u.value.includes($) },
            `${$ == null ? void 0 : $.toLowerCase()}-bg`
          ]),
          key: $,
          onClick: (y) => f($)
        }, {
          default: uc(() => [
            e.property == "severity" ? (da(), cc(xB, {
              key: 0,
              severity: $
            }, null, 8, ["severity"])) : vw("", !0),
            C_(LB($), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : vw("", !0);
  }
});
const UB = /* @__PURE__ */ de(FB, [["__scopeId", "data-v-d83b0f85"]]);
const WB = window.Vue.watch, qB = window.Vue.onBeforeUnmount, HB = window.Vue.ref, zB = window.Vue.onMounted, YB = (e) => {
  const o = HB(!1);
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
  return zB(() => {
    const c = WB(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    qB(() => {
      c(), u();
    });
  }), o;
}, GB = window.Vue.watch, jB = window.Vue.onBeforeUnmount, ZB = window.Vue.ref, KB = window.Vue.onMounted, JB = (e, o) => {
  const r = ZB(!1), s = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((v) => v && v.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return KB(() => {
    const c = GB(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    jB(() => {
      c(), u();
    });
  }), r;
}, XB = window.Vue.watch, QB = window.Vue.onBeforeUnmount, eT = window.Vue.ref, S_ = (e, o) => {
  const r = eT(!1);
  let s = !1;
  const a = (w) => {
    o(w), s = !1;
  };
  function u(w) {
    s || (requestAnimationFrame(() => a(w)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = XB([e, r], ([w, v], _) => {
    _ && _.length && _[0] && _[0].removeEventListener("scroll", u, !0), v && w ? w.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return QB(() => {
    f(), c();
  }), r;
}, tT = window.Vue.defineComponent, On = window.Vue.ref, _w = window.Vue.toRef, nT = window.Vue.onMounted, rT = window.Vue.watch, gw = window.Vue.computed, oT = window.Vue.nextTick, $w = window.Vue.openBlock, yw = window.Vue.createElementBlock, bw = window.Vue.renderSlot, iT = window.Vue.normalizeClass, sT = window.Vue.normalizeStyle, aT = window.Vue.createCommentVNode;
var lT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const uT = {
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
}, cT = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, dT = tT({
  emits: cT,
  props: uT,
  setup(e, o) {
    const r = On(), s = On(), a = _w(e, "open"), u = _w(e, "noExpand"), c = On("auto"), f = On(), w = On(e.triggerId || ce("feather-menu-trigger")), v = On(ce("feather-menu-dropdown")), _ = On(""), $ = On("");
    nT(() => {
      f.value = window;
    });
    const y = On(!1), I = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), D = () => {
      if (!s.value)
        return;
      const k = r.value.getBoundingClientRect();
      y.value = !0, c.value = "auto", oT(() => {
        let { height: R, width: O } = s.value.getBoundingClientRect();
        const H = I(), $e = H.height, le = H.width;
        e.fill && O < k.width ? (c.value = k.width + "px", O = k.width) : c.value = O + "px";
        let ye = 0;
        $e - k.bottom < R && k.top >= R ? (ye = k.top - R, e.cover && (ye += k.height)) : (ye = k.bottom, e.cover && (ye -= k.height));
        let ge = e.right ? k.right - O : k.left;
        !e.right && k.right >= O && le - k.left < O && (ge = k.right - O), e.right && k.right <= O && le - k.left > O && (ge = k.left), $.value = `${ge}px`, _.value = `${ye}px`, y.value = !1;
      });
    }, L = JB(r, (k) => {
      o.emit("outside-click", k);
    }), S = YB(D), T = S_(f, D);
    rT([a, s], ([k, R]) => {
      k && R && D(), L.value = k, S.value = k, T.value = k;
    });
    const B = gw(() => {
      const k = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return a.value && (k["aria-controls"] = v.value), u.value || (k["aria-expanded"] = a.value ? "true" : "false"), k;
    }), P = gw(() => ({
      click: (k) => {
        o.emit("trigger-click", k);
      }
    }));
    return {
      positionTop: _,
      positionLeft: $,
      triggerId: w,
      triggerAttrs: B,
      triggerListeners: P,
      menuId: v,
      menu: s,
      menuWidth: c,
      root: r,
      calculatePosition: D,
      calculating: y
    };
  }
}), fT = ["data-ref-id"], hT = ["data-ref-id", "id"];
function pT(e, o, r, s, a, u) {
  return $w(), yw("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    bw(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? ($w(), yw("div", {
      key: 0,
      class: iT(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: sT({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      bw(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, hT)) : aT("", !0)
  ], 8, fT);
}
var E_ = /* @__PURE__ */ lT(dT, [["render", pT], ["__scopeId", "data-v-f75af406"]]), wT = {
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
const vT = window.Vue.openBlock, mT = window.Vue.createElementBlock, _T = window.Vue.createElementVNode;
var gT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $T = {}, yT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bT = /* @__PURE__ */ _T("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), VT = [
  bT
];
function CT(e, o) {
  return vT(), mT("svg", yT, VT);
}
var ST = /* @__PURE__ */ gT($T, [["render", CT]]);
const ET = window.Vue.openBlock, kT = window.Vue.createElementBlock, Cd = window.Vue.createElementVNode;
var IT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const xT = {}, AT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, BT = /* @__PURE__ */ Cd("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), TT = /* @__PURE__ */ Cd("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), DT = /* @__PURE__ */ Cd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), NT = [
  BT,
  TT,
  DT
];
function LT(e, o) {
  return ET(), kT("svg", AT, NT);
}
var MT = /* @__PURE__ */ IT(xT, [["render", LT]]);
const OT = window.Vue.openBlock, PT = window.Vue.createElementBlock, RT = window.Vue.createElementVNode;
var FT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const UT = {}, WT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, qT = /* @__PURE__ */ RT("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), HT = [
  qT
];
function zT(e, o) {
  return OT(), PT("svg", WT, HT);
}
var hl = /* @__PURE__ */ FT(UT, [["render", zT]]);
const is = function(e, o) {
  if (!e || !o)
    return;
  let r = e.getBoundingClientRect().height;
  const s = getComputedStyle(e);
  r += parseInt(s.getPropertyValue("margin-top"), 10), r += parseInt(s.getPropertyValue("margin-bottom"), 10), o.scrollTop = e.offsetTop - o.getBoundingClientRect().height + r;
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
const YT = window.Vue.defineComponent, GT = window.Vue.openBlock, jT = window.Vue.createElementBlock, ZT = window.Vue.normalizeClass, KT = window.Vue.pushScopeId, JT = window.Vue.popScopeId, rd = window.Vue.createElementVNode;
var XT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QT = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, eD = {
  click: (e) => !0
}, tD = YT({
  emits: eD,
  props: QT,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), k_ = (e) => (KT("data-v-07e020f5"), e = e(), JT(), e), nD = /* @__PURE__ */ k_(() => /* @__PURE__ */ rd("div", { class: "track" }, null, -1)), rD = /* @__PURE__ */ k_(() => /* @__PURE__ */ rd("div", { class: "switcher" }, [
  /* @__PURE__ */ rd("div", { class: "switch-circle" })
], -1)), oD = [
  nD,
  rD
];
function iD(e, o, r, s, a, u) {
  return GT(), jT("div", {
    class: ZT(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, oD, 2);
}
var sD = /* @__PURE__ */ XT(tD, [["render", iD], ["__scopeId", "data-v-07e020f5"]]), aD = Object.defineProperty, lD = Object.defineProperties, uD = Object.getOwnPropertyDescriptors, Vw = Object.getOwnPropertySymbols, cD = Object.prototype.hasOwnProperty, dD = Object.prototype.propertyIsEnumerable, Cw = (e, o, r) => o in e ? aD(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Sw = (e, o) => {
  for (var r in o || (o = {}))
    cD.call(o, r) && Cw(e, r, o[r]);
  if (Vw)
    for (var r of Vw(o))
      dD.call(o, r) && Cw(e, r, o[r]);
  return e;
}, Ew = (e, o) => lD(e, uD(o));
const Sd = window.Vue.defineComponent, Br = window.Vue.h, fD = window.Vue.openBlock, hD = window.Vue.createElementBlock, pD = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var I_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const wD = {
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
}, vD = Sd({
  inheritAttrs: !1,
  props: wD,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = Br("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Br("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = Br("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : Br(pr);
    if (this.asLi)
      return Br("li", Ew(Sw({}, this.$attrs), {
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
    const u = Br("a", Ew(Sw({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, s, a]);
    return Br("li", {}, [u]);
  }
});
var cs = /* @__PURE__ */ I_(vD, [["__scopeId", "data-v-7c46b2b3"]]);
Sd({
  components: {
    FeatherListItem: cs
  }
});
const mD = {}, _D = { class: "feather-list" };
function gD(e, o) {
  return fD(), hD("ul", _D, [
    pD(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Ed = /* @__PURE__ */ I_(mD, [["render", gD], ["__scopeId", "data-v-941a1d50"]]);
const $D = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, yD = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
Sd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: $D,
  props: yD,
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
  components: { SwitchRender: sD, FeatherListItem: cs }
});
var bD = Object.defineProperty, VD = Object.defineProperties, CD = Object.getOwnPropertyDescriptors, kw = Object.getOwnPropertySymbols, SD = Object.prototype.hasOwnProperty, ED = Object.prototype.propertyIsEnumerable, Iw = (e, o, r) => o in e ? bD(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ot = (e, o) => {
  for (var r in o || (o = {}))
    SD.call(o, r) && Iw(e, r, o[r]);
  if (kw)
    for (var r of kw(o))
      ED.call(o, r) && Iw(e, r, o[r]);
  return e;
}, kD = (e, o) => VD(e, CD(o));
const ti = window.Vue.defineComponent, he = window.Vue.openBlock, We = window.Vue.createElementBlock, yt = window.Vue.createElementVNode, hn = window.Vue.toDisplayString, Qt = window.Vue.createCommentVNode, Oe = window.Vue.resolveComponent, Xt = window.Vue.createBlock, st = window.Vue.withCtx, Po = window.Vue.Fragment, Xi = window.Vue.renderList, bt = window.Vue.createVNode, kd = window.Vue.withModifiers, Yr = window.Vue.normalizeClass, od = window.Vue.renderSlot, x_ = window.Vue.createTextVNode, ID = window.Vue.pushScopeId, xD = window.Vue.popScopeId, A_ = window.Vue.reactive, B_ = window.Vue.nextTick, dc = window.Vue.markRaw, fc = window.Vue.toRef, xw = window.Vue.computed, AD = window.Vue.toRefs, mo = window.Vue.ref, hc = window.Vue.mergeProps, Aw = window.Vue.toHandlers, fa = window.Vue.withDirectives, ha = window.Vue.vShow;
var pl = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, Id = {
  query: {
    type: String
  }
}, Kr = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const BD = ti({
  mixins: [],
  props: Ot(Ot({
    text: {
      type: String,
      required: !0
    }
  }, pl), Id),
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
}, DD = { key: 1 };
function ND(e, o, r, s, a, u) {
  return he(), We("span", null, [
    yt("span", null, hn(e.beginning), 1),
    e.highlighted ? (he(), We("span", TD, hn(e.highlighted), 1)) : Qt("", !0),
    e.end ? (he(), We("span", DD, hn(e.end), 1)) : Qt("", !0)
  ]);
}
var T_ = /* @__PURE__ */ Kr(BD, [["render", ND], ["__scopeId", "data-v-8abe2492"]]);
const LD = ti({
  emits: ["select", "deselect"],
  props: Ot(Ot({
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
  }, pl), Id),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        is(o, r.$el);
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
    FeatherList: Ed,
    FeatherListItem: cs,
    Highlighter: T_
  }
}), MD = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function OD(e, o, r, s, a, u) {
  const c = Oe("Highlighter"), f = Oe("FeatherListItem"), w = Oe("FeatherList");
  return he(), Xt(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: st(() => [
      (he(!0), We(Po, null, Xi(e.items, (v, _) => (he(), We(Po, {
        key: v[e.textProp]
      }, [
        bt(f, {
          "as-li": "",
          id: e.getId(_),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(v),
          highlighted: e.isActive(_),
          selected: e.isSelected(v),
          onClick: kd(($) => e.select(v), ["stop"])
        }, {
          default: st(() => [
            bt(c, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (he(), We("span", MD, hn(e.newLabel), 1)) : Qt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (he(), We("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : Qt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var PD = /* @__PURE__ */ Kr(LD, [["render", OD], ["__scopeId", "data-v-f623434a"]]);
const RD = ti({
  emits: ["select"],
  props: Ot(Ot({
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
  }, pl), Id),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        is(o, r);
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
    Highlighter: T_
  }
}), FD = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, UD = ["aria-multiselectable"], WD = { role: "row" }, qD = ["aria-selected", "onClick"], HD = ["id", "aria-selected"], zD = { key: 1 };
function YD(e, o, r, s, a, u) {
  const c = Oe("Highlighter");
  return he(), We("div", FD, [
    yt("table", {
      class: Yr(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      yt("thead", null, [
        yt("tr", WD, [
          (he(!0), We(Po, null, Xi(e.config, (f) => (he(), We("th", {
            key: f.title
          }, hn(f.title), 1))), 128))
        ])
      ]),
      yt("tbody", null, [
        (he(!0), We(Po, null, Xi(e.items, (f, w) => (he(), We("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Yr({ focus: e.isActive(w), selected: e.isSelected(f) }),
          onClick: kd((v) => e.select(f), ["stop"])
        }, [
          (he(!0), We(Po, null, Xi(e.config, (v, _) => (he(), We("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(w, _),
            "aria-selected": e.isSelected(f),
            class: Yr({ "focus-cell": e.isActiveCell(w, _) })
          }, [
            v.prop === e.textProp ? (he(), Xt(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (he(), We("p", zD, hn(f[v.prop]), 1))
          ], 10, HD))), 128))
        ], 10, qD))), 128))
      ])
    ], 10, UD)
  ], 512);
}
var GD = /* @__PURE__ */ Kr(RD, [["render", YD], ["__scopeId", "data-v-58c88fd1"]]);
const jD = ti({
  components: {
    FeatherList: Ed,
    FeatherListItem: cs
  }
});
function ZD(e, o, r, s, a, u) {
  const c = Oe("FeatherListItem"), f = Oe("FeatherList");
  return he(), Xt(f, { class: "result-list" }, {
    default: st(() => [
      bt(c, { "as-li": "" }, {
        default: st(() => [
          od(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var KD = /* @__PURE__ */ Kr(jD, [["render", ZD], ["__scopeId", "data-v-06b752c6"]]);
const JD = ti({
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
    Cancel: jo,
    BaseChip: cl,
    BaseChipLabel: dl,
    BaseChipPreIcon: fl
  }
});
function XD(e, o, r, s, a, u) {
  const c = Oe("FeatherIcon"), f = Oe("BaseChipPreIcon"), w = Oe("BaseChipLabel"), v = Oe("Cancel"), _ = Oe("BaseChip");
  return he(), Xt(_, {
    class: Yr(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: st(() => [
      e.showPreIcon ? (he(), Xt(f, { key: 0 }, {
        default: st(() => {
          var $, y;
          return [
            bt(c, {
              icon: ($ = e.pre) == null ? void 0 : $.icon,
              title: (y = e.pre) == null ? void 0 : y.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Qt("", !0),
      bt(w, null, {
        default: st(() => [
          x_(hn(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? Qt("", !0) : (he(), We("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = kd((...$) => e.handleClick && e.handleClick(...$), ["stop"]))
      }, [
        bt(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: st(() => [
            bt(v)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var QD = /* @__PURE__ */ Kr(JD, [["render", XD], ["__scopeId", "data-v-e0fc6ac0"]]);
const eN = {}, tN = (e) => (ID("data-v-aa720e06"), e = e(), xD(), e), nN = { class: "spinner-container" }, rN = /* @__PURE__ */ tN(() => /* @__PURE__ */ yt("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ yt("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), oN = [
  rN
];
function iN(e, o) {
  return he(), We("div", nN, oN);
}
var sN = /* @__PURE__ */ Kr(eN, [["render", iN], ["__scopeId", "data-v-aa720e06"]]), wl = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(wl || {});
const D_ = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, aN = Ot(Ot(Ot({
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
    validator: (e) => !!wl[e]
  },
  labels: {
    type: Object,
    default: () => D_
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, pl), Qo), al), lN = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, uN = (e, o, r, s) => {
  if (r.toLowerCase() === wl.multi) {
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
}, cN = () => {
  const e = A_({
    row: -1
  }), o = (u) => {
    B_(() => {
      e.row = u;
    });
  }, r = (u, c) => {
    if (u.keyCode === ee.DOWN) {
      if (u.preventDefault(), e.row === -1)
        s(), o(0);
      else if (e.row + 1 <= c.length - 1) {
        const f = e.row;
        s(), o(f + 1);
      }
      return !0;
    }
    if (u.keyCode === ee.UP) {
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
}, dN = (e) => {
  const o = A_({
    row: -1,
    col: -1
  }), r = (c, f) => {
    B_(() => {
      o.col = f, o.row = c;
    });
  }, s = (c, f) => {
    if (c.keyCode === ee.DOWN) {
      if (c.preventDefault(), o.row === -1)
        a(), r(0, 0);
      else if (o.row + 1 <= f.length - 1) {
        const w = o.row, v = o.col;
        a(), r(w + 1, v);
      }
      return !0;
    }
    if (c.keyCode === ee.UP) {
      if (c.preventDefault(), o.row === 0)
        a();
      else if (o.row > 0) {
        const w = o.row, v = o.col;
        a(), r(w - 1, v);
      }
      return !0;
    }
    if (c.keyCode === ee.RIGHT && o.row !== -1) {
      if (c.preventDefault(), o.col + 1 <= e.length - 1) {
        const w = o.col, v = o.row;
        a(), r(v, w + 1);
      } else if (o.col <= e.length - 1 && o.row + 1 <= f.length - 1) {
        const w = o.row;
        a(), r(w + 1, 0);
      }
      return !0;
    }
    if (c.keyCode === ee.LEFT && o.row !== -1) {
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
    if (c.keyCode === ee.END && o.row !== -1) {
      c.preventDefault();
      const w = o.row;
      return a(), r(c.ctrlKey ? f.length - 1 : w, e.length - 1), !0;
    }
    if (c.keyCode === ee.HOME && o.row !== -1) {
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
}, fN = ti({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: lN,
  props: aN,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== wl.multi;
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
      return dc(ST);
    },
    minCharIcon() {
      return dc(MT);
    },
    dropdownIcon() {
      return dc(hl);
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
        is(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, o) {
        e && o && e.length > o.length && this.scrollContainer && this.$nextTick(() => {
          is(this.inputRef, this.scrollContainer);
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
      r !== void 0 && (jr(this.typingTimeout), this.typingTimeout = Gr(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === ee.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === ee.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const s = this.modelValue;
        this.removeFromValue(s[this.activeChipIndex]), o();
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
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const s = this.modelValue;
        e.keyCode === ee.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = s.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === ee.RIGHT && (e.preventDefault(), this.activeChipIndex === s.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < s.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === ee.DELETE || e.keyCode === ee.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(s[this.activeChipIndex]), r(), o());
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
    const r = il(fc(e, "labels"), D_);
    ei(e), ll(e);
    let s;
    e.gridConfig ? s = dN(e.gridConfig) : s = cN();
    const a = fc(e, "id"), u = xw(() => a.value ? a.value : ce("feather-autocomplete-input")), { validate: c } = Jo(u, fc(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: w, textProp: v, allowNew: _, type: $, minChar: y } = AD(e), I = mo(!1), D = mo(!1), M = mo(!1), L = mo(""), S = mo([]), T = mo(), B = xw(() => T.value), P = () => {
      I.value && !D.value && (L.value && L.value.length >= y.value && o.emit("search", L.value), y.value <= 0 && o.emit("search", L.value || ""), S.value = [], s.reset());
    }, k = uN({
      selectionLimit: f,
      selectionLimitReached: D,
      modelValue: w,
      textProp: v,
      allowNew: _,
      forceCloseResults: M,
      query: L,
      internalResults: S,
      input: B,
      emitSearch: P
    }, s, $.value, o.emit);
    return kD(Ot(Ot({}, r), Xo(o.attrs)), {
      query: L,
      internalResults: S,
      selectionLimitReached: D,
      forceCloseResults: M,
      hasFocus: I,
      strategy: k,
      emitSearch: P,
      active: s.active,
      handleResultNavigation: s.handleKeyPress,
      resetResultIndex: s.reset,
      selectFirst: s.first,
      inputId: u,
      input: T,
      incomingId: a,
      inputRef: B,
      validate: c
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: sl,
    InputSubText: Ko,
    AutocompleteResults: PD,
    AutocompleteResultsGrid: GD,
    Chip: QD,
    MenuMessage: KD,
    FeatherIcon: Z,
    FeatherMenu: E_,
    Spinner: sN
  }
}), hN = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, pN = ["id"], wN = { "data-ref-id": "feather-autocomplete-no-results" }, vN = { "data-ref-id": "feather-autocomplete-selection-limit" }, mN = { "data-ref-id": "feather-autocomplete-min-char" };
function _N(e, o, r, s, a, u) {
  const c = Oe("FeatherIcon"), f = Oe("Chip"), w = Oe("InputWrapper"), v = Oe("AutocompleteResults"), _ = Oe("AutocompleteResultsGrid"), $ = Oe("MenuMessage"), y = Oe("Spinner"), I = Oe("FeatherMenu"), D = Oe("InputSubText");
  return he(), We("div", hc(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    bt(I, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Yr(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: st(({ attrs: M, on: L }) => [
        bt(w, hc(Ot(Ot({}, M), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, Aw(L), { ref: "scroll" }), {
          pre: st(() => [
            od(e.$slots, "pre", {}, () => [
              bt(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: st(() => [
            bt(c, {
              icon: e.dropdownIcon,
              class: Yr(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: st(() => [
            yt("div", {
              class: Yr(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              yt("div", hN, null, 512),
              yt("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, hn(e.selectedDescribedByText), 9, pN),
              (he(!0), We(Po, null, Xi(e.modelValueList, (S, T) => fa((he(), Xt(f, {
                key: S[e.textProp],
                role: "button",
                id: T === e.activeChipIndex ? e.activeChipId : null,
                focused: T === e.activeChipIndex,
                disabled: e.disabled,
                text: S[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(S),
                onDelete: (B) => e.removeFromValue(S)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [ha, !e.singleSelect]
              ])), 128)),
              yt("textarea", hc(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Aw(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: st(() => [
        e.gridConfig ? Qt("", !0) : fa((he(), Xt(v, {
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
          [ha, e.showResults]
        ]),
        e.gridConfig ? fa((he(), Xt(_, {
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
          [ha, e.showResults]
        ]) : Qt("", !0),
        e.showNoResults ? (he(), Xt($, { key: 2 }, {
          default: st(() => [
            yt("span", wN, hn(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : Qt("", !0),
        e.showSelectionLimit ? (he(), Xt($, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: st(() => [
            bt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            yt("span", vN, hn(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Qt("", !0),
        e.minChar ? fa((he(), Xt($, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: st(() => [
            bt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            yt("span", mN, [
              od(e.$slots, "min-char", {}, () => [
                x_(hn(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [ha, e.showMinCharWarning]
        ]) : Qt("", !0),
        e.showLoading ? (he(), Xt(y, { key: 5 })) : Qt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    bt(D, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var gN = /* @__PURE__ */ Kr(fN, [["render", _N], ["__scopeId", "data-v-43a7e951"]]);
var $N = Object.defineProperty, yN = Object.defineProperties, bN = Object.getOwnPropertyDescriptors, Bw = Object.getOwnPropertySymbols, VN = Object.prototype.hasOwnProperty, CN = Object.prototype.propertyIsEnumerable, Tw = (e, o, r) => o in e ? $N(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, La = (e, o) => {
  for (var r in o || (o = {}))
    VN.call(o, r) && Tw(e, r, o[r]);
  if (Bw)
    for (var r of Bw(o))
      CN.call(o, r) && Tw(e, r, o[r]);
  return e;
}, N_ = (e, o) => yN(e, bN(o));
const L_ = window.Vue.defineComponent, SN = window.Vue.ref, Qi = window.Vue.computed, EN = window.Vue.reactive, Dw = window.Vue.watch, pc = window.Vue.inject, M_ = window.Vue.resolveComponent, id = window.Vue.openBlock, O_ = window.Vue.createElementBlock, hr = window.Vue.createElementVNode, kN = window.Vue.createBlock, IN = window.Vue.createCommentVNode, P_ = window.Vue.renderSlot, xN = window.Vue.pushScopeId, AN = window.Vue.popScopeId, wc = window.Vue.toRef, Nw = window.Vue.mergeProps, BN = window.Vue.toDisplayString, TN = window.Vue.createVNode;
var R_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const DN = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, NN = L_({
  props: DN,
  setup(e) {
    const o = SN(), r = () => {
      o.value.focus();
    }, s = Qi(() => ce("feather-radio-button")), a = EN({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = Qi(() => ce("radio-label-id")), c = Qi(() => a.first || a.checked ? 0 : -1);
    Dw(() => e.disabled, ($) => {
      a.disabled = $;
    }, { immediate: !0 }), Dw(() => e.value, ($) => {
      a.value = $;
    }, { immediate: !0 });
    const f = pc("register", ($) => {
    }), w = pc("blur", ($) => {
    }), v = pc("select", ($) => {
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
      id: s
    };
  },
  components: {
    FeatherRipple: pr
  }
}), LN = (e) => (xN("data-v-24790cf0"), e = e(), AN(), e), MN = { class: "layout-container" }, ON = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], PN = { class: "radio hover focus" }, RN = /* @__PURE__ */ LN(() => /* @__PURE__ */ hr("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ hr("svg", { class: "dot" }, [
    /* @__PURE__ */ hr("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), FN = ["id"];
function UN(e, o, r, s, a, u) {
  const c = M_("feather-ripple");
  return id(), O_("div", MN, [
    hr("div", {
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
      hr("div", PN, [
        RN,
        e.vm.disabled ? IN("", !0) : (id(), kN(c, {
          key: 0,
          center: ""
        }))
      ]),
      hr("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        P_(e.$slots, "default", {}, void 0, !0)
      ], 8, FN)
    ], 40, ON)
  ]);
}
var sd = /* @__PURE__ */ R_(NN, [["render", UN], ["__scopeId", "data-v-24790cf0"]]);
const WN = N_(La({}, Qo), {
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
}), qN = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, HN = L_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: WN,
  emits: qN,
  setup(e, o) {
    ei(e);
    const r = wc(e, "error"), s = wc(e, "modelValue"), a = Qi(() => ce("feather-input-description")), u = Qi(() => {
      const c = N_(La({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return La(La({
      descriptionId: a,
      attrs: u
    }, $_(s, o.emit, e.label, e.schema, wc(e, "error"))), Xo(o.attrs));
  },
  components: {
    InputSubText: Ko
  }
}), zN = ["for"], YN = ["id"];
function GN(e, o, r, s, a, u) {
  const c = M_("InputSubText");
  return id(), O_("div", Nw(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    hr("label", {
      for: e.groupId,
      class: "group-label"
    }, BN(e.label), 9, zN),
    hr("div", Nw(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      P_(e.$slots, "default", {}, void 0, !0)
    ], 16, YN),
    TN(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var F_ = /* @__PURE__ */ R_(HN, [["render", GN], ["__scopeId", "data-v-6775aeb9"]]);
const jN = window.Vue.defineComponent, ZN = window.Vue.renderList, KN = window.Vue.Fragment, Lw = window.Vue.openBlock, JN = window.Vue.createElementBlock, XN = window.Vue.toDisplayString, QN = window.Vue.createTextVNode, Mw = window.Vue.unref, Ow = window.Vue.withCtx, eL = window.Vue.createVNode, tL = window.Vue.createBlock, nL = window.Vue.watch, rL = window.Vue.ref, oL = /* @__PURE__ */ jN({
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
    ], a = rL(r.preSelected || s[0].id);
    return nL(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (Lw(), tL(Mw(F_), {
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
      default: Ow(() => [
        (Lw(), JN(KN, null, ZN(s, (f) => eL(Mw(sd), {
          value: f.id,
          key: f.id
        }, {
          default: Ow(() => [
            QN(XN(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const iL = /* @__PURE__ */ de(oL, [["__scopeId", "data-v-0363302c"]]);
var sL = Object.defineProperty, aL = Object.defineProperties, lL = Object.getOwnPropertyDescriptors, Pw = Object.getOwnPropertySymbols, uL = Object.prototype.hasOwnProperty, cL = Object.prototype.propertyIsEnumerable, Rw = (e, o, r) => o in e ? sL(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ai = (e, o) => {
  for (var r in o || (o = {}))
    uL.call(o, r) && Rw(e, r, o[r]);
  if (Pw)
    for (var r of Pw(o))
      cL.call(o, r) && Rw(e, r, o[r]);
  return e;
}, Fw = (e, o) => aL(e, lL(o));
const dL = window.Vue.defineComponent, fL = window.Vue.inject, Bi = window.Vue.h;
var hL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const pL = {
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
}, wL = dL({
  inheritAttrs: !1,
  props: pL,
  setup() {
    return { hasTooltip: fL("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const w = ["btn", "hover", "focus", f];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, o = this.asAnchor ? "a" : "button", r = {}, s = Ai({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = Bi(pr);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), Bi(o, Fw(Ai(Ai({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Bi(pr, { center: !0 })
      ]);
    }
    const c = Bi("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Bi(o, Fw(Ai(Ai({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var ae = /* @__PURE__ */ hL(wL, [["__scopeId", "data-v-702d1074"]]);
const vL = window.Vue.openBlock, mL = window.Vue.createElementBlock, _L = window.Vue.createElementVNode;
var gL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $L = {}, yL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bL = /* @__PURE__ */ _L("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), VL = [
  bL
];
function CL(e, o) {
  return vL(), mL("svg", yL, VL);
}
var SL = /* @__PURE__ */ gL($L, [["render", CL]]);
const EL = window.Vue.openBlock, kL = window.Vue.createElementBlock, IL = window.Vue.createElementVNode;
var xL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const AL = {}, BL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, TL = /* @__PURE__ */ IL("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), DL = [
  TL
];
function NL(e, o) {
  return EL(), kL("svg", BL, DL);
}
var LL = /* @__PURE__ */ xL(AL, [["render", NL]]);
const ML = window.Vue.openBlock, OL = window.Vue.createElementBlock, PL = window.Vue.createElementVNode;
var RL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const FL = {}, UL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WL = /* @__PURE__ */ PL("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), qL = [
  WL
];
function HL(e, o) {
  return ML(), OL("svg", UL, qL);
}
var U_ = /* @__PURE__ */ RL(FL, [["render", HL]]);
const zL = window.Vue.defineComponent, _n = window.Vue.unref, Tr = window.Vue.createVNode, Uw = window.Vue.toDisplayString, Fn = window.Vue.createElementVNode, W_ = window.Vue.createTextVNode, Ww = window.Vue.openBlock, qw = window.Vue.createElementBlock, YL = window.Vue.createCommentVNode, GL = window.Vue.withCtx, jL = window.Vue.vShow, ZL = window.Vue.normalizeClass, KL = window.Vue.withDirectives, JL = window.Vue.Fragment, XL = window.Vue.pushScopeId, QL = window.Vue.popScopeId, q_ = (e) => (XL("data-v-b1dc2670"), e = e(), QL(), e), e3 = /* @__PURE__ */ W_(" Filters "), t3 = { class: "count" }, n3 = { class: "results" }, r3 = { class: "total" }, o3 = /* @__PURE__ */ W_(" Reset "), i3 = /* @__PURE__ */ q_(() => /* @__PURE__ */ Fn("div", { class: "title" }, "By Severities:", -1)), s3 = /* @__PURE__ */ q_(() => /* @__PURE__ */ Fn("div", { class: "title" }, "By Start Date:", -1)), Dr = window.Vue.ref, a3 = window.Vue.reactive, l3 = window.Vue.markRaw, Hw = window.Vue.watch, u3 = /* @__PURE__ */ zL({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: o }) {
    const r = e, s = l3({
      FilterAlt: SL,
      ExpandLess: LL,
      ExpandMore: hl,
      Refresh: U_
    }), a = pn(), u = Dr(r.isOpen), c = Dr(["all"]), f = Dr(1), w = Dr(r.list), v = Dr(!1), _ = Dr(0), $ = Dr(null), y = a3({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), I = () => {
      var R, O;
      r.saveFilters && a.filters && (a.filters.node && (y.nodeSelectedValue = a.filters.node), ((R = a.filters) == null ? void 0 : R.severities) && !((O = a.filters) != null && O.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, B());
    }, D = () => {
      y.nodes = a.nodes, y.results = a.nodes;
    };
    Hw(
      () => a.nodes,
      () => {
        D();
      }
    ), Hw(r, () => {
      w.value = r.list, I();
    });
    const M = (R) => {
      c.value = R, B();
    }, L = (R) => {
      f.value = R, B();
    }, S = (R) => {
      if (!R)
        return y.nodeSelectedValue = void 0, [];
      v.value = !0, y.results = y.nodes.filter((O) => O.label.toLowerCase().indexOf(R) > -1).map((O) => ({
        _text: O.label,
        id: O.id
      })), v.value = !1;
    }, T = () => {
      c.value = ["all"], f.value = 1, y.nodeSelectedValue = void 0, _.value = 0, o("filtered-list", r.list), r.isOpen || (u.value = !1), r.saveFilters && (a.filters = null), w.value = r.list;
    }, B = () => {
      _.value = 0;
      let R = r.list;
      y.nodeSelectedValue && y.nodeSelectedValue._text && (_.value++, r.isSituation ? R = R.map((O) => {
        if (O.relatedAlarms.filter(
          (le) => {
            var ye;
            return le.nodeLabel === ((ye = y.nodeSelectedValue) == null ? void 0 : ye._text);
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
      )), f.value !== 1 && (_.value++, R = j2(
        f.value,
        R
      )), w.value = R, r.saveFilters && P(), o("filtered-list", R);
    }, P = () => {
      a.filters = {
        node: y.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, k = () => {
      u.value = !u.value;
    };
    return (R, O) => (Ww(), qw(JL, null, [
      r.isOpen ? YL("", !0) : (Ww(), qw("div", {
        key: 0,
        class: "btn-filter",
        onClick: k
      }, [
        Fn("div", null, [
          Tr(_n(Z), {
            icon: _n(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          e3,
          Fn("span", t3, Uw(_.value), 1)
        ]),
        Tr(_n(Z), {
          icon: u.value ? _n(s).ExpandLess : _n(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      KL(Fn("div", {
        class: ZL(["filters", { collapsed: !r.isOpen }])
      }, [
        Fn("div", n3, [
          Fn("div", r3, "Results: " + Uw(_n(w).length), 1),
          Tr(_n(ae), {
            class: "btn-reset",
            onClick: T
          }, {
            default: GL(() => [
              Tr(_n(Z), {
                icon: _n(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              o3
            ]),
            _: 1
          })
        ]),
        Fn("div", null, [
          Tr(_n(gN), {
            ref_key: "autocomplete",
            ref: $,
            label: "Search by node",
            loading: v.value,
            modelValue: y.nodeSelectedValue,
            "onUpdate:modelValue": [
              O[0] || (O[0] = (H) => y.nodeSelectedValue = H),
              B
            ],
            results: y.results,
            type: "single",
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"]),
          i3,
          Tr(UB, {
            alarms: r.list,
            onSelectedOption: M,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          Fn("div", null, [
            s3,
            Tr(iL, {
              onFilterDateSelected: L,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [jL, u.value]
      ])
    ], 64));
  }
});
const ni = /* @__PURE__ */ de(u3, [["__scopeId", "data-v-b1dc2670"]]), c3 = window.Vue.openBlock, d3 = window.Vue.createElementBlock, f3 = window.Vue.createElementVNode;
var h3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const p3 = {}, w3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, v3 = /* @__PURE__ */ f3("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), m3 = [
  v3
];
function _3(e, o) {
  return c3(), d3("svg", w3, m3);
}
var vl = /* @__PURE__ */ h3(p3, [["render", _3]]);
const g3 = window.Vue.openBlock, $3 = window.Vue.createElementBlock, H_ = window.Vue.createElementVNode;
var y3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const b3 = {}, V3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, C3 = /* @__PURE__ */ H_("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), S3 = /* @__PURE__ */ H_("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), E3 = [
  C3,
  S3
];
function k3(e, o) {
  return g3(), $3("svg", V3, E3);
}
var I3 = /* @__PURE__ */ y3(b3, [["render", k3]]);
const x3 = window.Vue.openBlock, A3 = window.Vue.createElementBlock, B3 = window.Vue.createElementVNode;
var T3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const D3 = {}, N3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, L3 = /* @__PURE__ */ B3("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), M3 = [
  L3
];
function O3(e, o) {
  return x3(), A3("svg", N3, M3);
}
var P3 = /* @__PURE__ */ T3(D3, [["render", O3]]);
const mr = () => window.VRouter || Ug;
const R3 = window.Vue.openBlock, F3 = window.Vue.createElementBlock, U3 = window.Vue.pushScopeId, W3 = window.Vue.popScopeId, zw = window.Vue.createElementVNode;
var q3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const H3 = {}, z3 = (e) => (U3("data-v-2263be39"), e = e(), W3(), e), Y3 = { class: "spinner-container" }, G3 = /* @__PURE__ */ z3(() => /* @__PURE__ */ zw("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ zw("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), j3 = [
  G3
];
function Z3(e, o) {
  return R3(), F3("div", Y3, j3);
}
var ss = /* @__PURE__ */ q3(H3, [["render", Z3], ["__scopeId", "data-v-2263be39"]]);
const K3 = window.Vue.defineComponent, vc = window.Vue.unref, J3 = window.Vue.createVNode, X3 = window.Vue.createElementVNode, Q3 = window.Vue.withCtx, eM = window.Vue.openBlock, tM = window.Vue.createBlock, nM = window.Vue.pushScopeId, rM = window.Vue.popScopeId, oM = (e) => (nM("data-v-fba500de"), e = e(), rM(), e), iM = /* @__PURE__ */ oM(() => /* @__PURE__ */ X3("span", null, "New Situation", -1)), sM = window.Vue.markRaw, aM = /* @__PURE__ */ K3({
  __name: "NewSituationBtn",
  setup(e) {
    const o = mr(), r = sM({
      Add: vl
    }), s = () => {
      o.push({
        name: "addSituation"
      });
    };
    return (a, u) => (eM(), tM(vc(ae), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: Q3(() => [
        J3(vc(Z), {
          icon: vc(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        iM
      ]),
      _: 1
    }));
  }
});
const z_ = /* @__PURE__ */ de(aM, [["__scopeId", "data-v-fba500de"]]), lM = "/whoami", uM = async () => {
  try {
    const e = await pt.get(lM);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, cM = window.Pinia.defineStore, dM = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, Ho = cM("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null,
    claudeConfig: null,
    claudeUsage: null
  }),
  actions: {
    async getUserRole() {
      const e = await uM();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await J2();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o, r) {
      const s = {
        ...dM,
        ...r,
        distanceMeasureName: o ? Xe.HELLINGER_OPTION : Xe.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return o || (s.hellingerW = null, s.hellingerBias = null), await X2(s) ? (this.engineInfo = s, !0) : !1;
    },
    async getClaudeConfig() {
      const e = await Q2();
      return e && (this.claudeConfig = e), e;
    },
    async setClaudeConfig(e) {
      const o = await eI(e);
      return o ? (this.claudeConfig = o, !0) : !1;
    },
    async getClaudeUsage(e = 30) {
      const o = await tI(e);
      return o && (this.claudeUsage = o), o;
    }
  }
}), fM = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", hM = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", pM = window.Vue.defineComponent, _o = window.Vue.unref, go = window.Vue.openBlock, $o = window.Vue.createElementBlock, wM = window.Vue.createCommentVNode, Y_ = window.Vue.createTextVNode, Yw = window.Vue.Fragment, G_ = window.Vue.createElementVNode, vM = window.Vue.pushScopeId, mM = window.Vue.popScopeId, _M = (e) => (vM("data-v-b87e4e5c"), e = e(), mM(), e), gM = ["src"], $M = { class: "engine" }, yM = /* @__PURE__ */ Y_(" ENGINE "), bM = {
  key: 0,
  class: "type"
}, VM = {
  key: 1,
  class: "type"
}, CM = /* @__PURE__ */ Y_(" ENGINE "), SM = /* @__PURE__ */ _M(() => /* @__PURE__ */ G_("div", {
  class: "type not-set",
  "data-test": "configuration-not-set"
}, "CONFIGURE", -1)), Gw = window.Vue.computed, EM = /* @__PURE__ */ pM({
  __name: "ConfigurationInfo",
  setup(e) {
    const o = mr(), r = Ho(), s = () => {
      o.push({
        name: "settings"
      });
    }, a = Gw(() => {
      var c;
      return !!((c = r.engineInfo) != null && c.engineName);
    }), u = Gw(
      () => {
        var c;
        return ((c = r.engineInfo) == null ? void 0 : c.engineName) == Xe.ENGINE_DBSCAN;
      }
    );
    return (c, f) => (go(), $o("div", {
      class: "info-engine",
      onClick: s,
      "data-test": "configuration-info"
    }, [
      _o(a) ? (go(), $o("img", {
        key: 0,
        src: _o(u) ? _o(hM) : _o(fM),
        class: "icon-type"
      }, null, 8, gM)) : wM("", !0),
      G_("div", $M, [
        _o(a) ? (go(), $o(Yw, { key: 0 }, [
          yM,
          _o(u) ? (go(), $o("div", bM, "CLUSTERING")) : (go(), $o("div", VM, "DEEP LEARNING"))
        ], 64)) : (go(), $o(Yw, { key: 1 }, [
          CM,
          SM
        ], 64))
      ])
    ]));
  }
});
const kM = /* @__PURE__ */ de(EM, [["__scopeId", "data-v-b87e4e5c"]]);
const IM = {}, xM = window.Vue.openBlock, AM = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const BM = { class: "empty" };
function TM(e, o) {
  return xM(), AM("div", BM, "No results found.");
}
const ri = /* @__PURE__ */ de(IM, [["render", TM], ["__scopeId", "data-v-725433ac"]]), DM = window.Vue.defineComponent, $n = window.Vue.createElementVNode, Ti = window.Vue.unref, Nr = window.Vue.createVNode, NM = window.Vue.withCtx, pa = window.Vue.toDisplayString, Pn = window.Vue.openBlock, Lr = window.Vue.createElementBlock, jw = window.Vue.createCommentVNode, Zw = window.Vue.createBlock, LM = window.Vue.renderList, MM = window.Vue.Fragment, OM = window.Vue.pushScopeId, PM = window.Vue.popScopeId, j_ = (e) => (OM("data-v-2675e2f8"), e = e(), PM(), e), RM = { class: "list-main" }, FM = { class: "header" }, UM = /* @__PURE__ */ j_(() => /* @__PURE__ */ $n("h2", null, "Situation List", -1)), WM = { class: "link-btns" }, qM = /* @__PURE__ */ j_(() => /* @__PURE__ */ $n("span", null, "View Unassociated Alarms", -1)), HM = { class: "content" }, zM = { class: "left-filters" }, YM = { class: "container" }, GM = { class: "autocomplete" }, jM = { key: 0 }, ZM = { key: 1 }, KM = { key: 0 }, JM = { class: "situation-list" }, XM = {
  key: 0,
  class: "footer-pager"
}, QM = window.Vue.reactive, wa = window.Vue.ref, e4 = window.Vue.watch, t4 = window.Vue.markRaw, n4 = /* @__PURE__ */ DM({
  __name: "SituationList",
  setup(e) {
    const o = t4({
      Add: vl,
      View: I3,
      Settings: P3
    }), r = mr(), s = pn(), a = Ho();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = QM({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = wa(!0), w = wa(0), v = wa(1), _ = wa(0), $ = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    e4(
      () => s.situations,
      () => {
        f.value = !1, $(), M(s.situations);
      }
    );
    const y = (S) => {
      w.value = S, c.situations = c.allSituations[w.value];
    }, I = (S) => {
      r.push({
        name: "situationDetail",
        params: {
          id: S
        }
      });
    }, D = () => {
      r.push({
        name: "viewUnassignedAlarms"
      });
    }, M = (S) => {
      _.value = S.length, c.allSituations = _e.exports.chunk(S, u);
      const T = S.map((B) => B.id);
      s.filteredSituations = T, w.value = 0, c.situations = c.allSituations[0], v.value = c.allSituations.length;
    }, L = (S) => {
      S.length ? M(S) : c.situations = [];
    };
    return (S, T) => {
      var B;
      return Pn(), Lr("div", RM, [
        $n("div", FM, [
          UM,
          $n("div", WM, [
            Nr(Ti(ae), {
              class: "view-situation-btn",
              onClick: T[0] || (T[0] = () => D())
            }, {
              default: NM(() => [
                Nr(Ti(Z), {
                  icon: Ti(o).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                qM
              ]),
              _: 1
            }),
            Nr(z_),
            Nr(kM)
          ])
        ]),
        $n("div", HM, [
          $n("div", zM, [
            Nr(ni, {
              list: Ti(s).situations,
              onFilteredList: L,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          $n("div", YM, [
            $n("div", GM, [
              c.situations && c.situations.length ? (Pn(), Lr("div", jM, " Result: " + pa((B = c.situations) == null ? void 0 : B.length) + " of " + pa(_.value), 1)) : jw("", !0)
            ]),
            f.value ? (Pn(), Zw(Ti(ss), {
              key: 0,
              class: "spinner"
            })) : (Pn(), Lr("div", ZM, [
              c.situations && c.situations.length ? (Pn(), Lr("div", KM, [
                $n("div", JM, [
                  (Pn(!0), Lr(MM, null, LM(c.situations, (P) => (Pn(), Lr("div", {
                    class: "card",
                    key: P.id
                  }, [
                    Nr(w_, {
                      onClick: () => I(P.id),
                      "situation-info": P
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                _.value > u ? (Pn(), Lr("div", XM, [
                  $n("div", null, "Page: " + pa(w.value + 1) + " of " + pa(v.value), 1),
                  Nr(mx, {
                    onGoToPage: y,
                    currentPage: w.value,
                    totalPages: v.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : jw("", !0)
              ])) : (Pn(), Zw(ri, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const r4 = /* @__PURE__ */ de(n4, [["__scopeId", "data-v-2675e2f8"]]);
const va = window.Vue.ref, o4 = window.Vue.inject, i4 = window.Vue.computed, s4 = window.Vue.onMounted, Z_ = {
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
}, K_ = (e) => {
  const o = va(!1), r = va(), s = va(e.controls), a = va(e.id), u = () => {
    r.value && r.value.focus();
  }, c = o4("registerTab");
  s4(() => {
    if (r.value && c) {
      const w = r.value.parentElement, v = w && w.parentElement ? w.parentElement : void 0, _ = Array.from(v ? v.children : []).filter((y) => y.querySelectorAll("[role=tab]").length), $ = w ? _.indexOf(w) : -1;
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
  const f = i4(() => ({
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
}, Kw = window.Vue.ref, a4 = window.Vue.toRef, l4 = window.Vue.watch, Jw = window.Vue.provide, J_ = {
  prop: "modelValue",
  event: "update:modelValue"
}, X_ = {
  "update:modelValue": (e) => !0
}, Q_ = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, eg = (e, o) => {
  const r = a4(e, "modelValue"), s = Kw(e.modelValue), a = Kw([]);
  l4(r, (D) => {
    w(D);
  });
  const u = (D) => {
    D.preventDefault(), a.value.some((M, L) => M.tab && M.tab.el.contains(D.target) ? (f(L), w(L), !0) : !1);
  }, c = (D) => {
    if (((H) => H.shiftKey || H.ctrlKey || H.metaKey || H.altKey)(D))
      return;
    const L = D.keyCode, S = (H) => {
      H.stopPropagation(), H.preventDefault();
    }, T = a.value.filter((H) => H.tab && !H.tab.disabled), B = a.value.findIndex((H) => H.tab && H.tab.el.contains(document.activeElement));
    let P = B !== -1 ? B : s.value;
    const k = [ee.RIGHT], R = [ee.LEFT], O = [ee.ENTER, ee.SPACE];
    e.vertical && (k.push(ee.DOWN), R.push(ee.UP)), k.indexOf(L) > -1 ? (P++, P >= T.length && (P = 0), S(D), f(a.value.indexOf(T[P]))) : R.indexOf(L) > -1 && (P--, P < 0 && (P = T.length - 1), S(D), f(a.value.indexOf(T[P]))), O.indexOf(L) > -1 && w(P);
  }, f = (D) => {
    a.value.forEach(function(M, L) {
      D === L && M.tab && M.tab.focus();
    });
  }, w = (D) => {
    const M = a.value[D];
    !M || M.tab && M.tab.disabled || (a.value.forEach((L, S) => {
      L.tab && (L.tab.selected = D === S), L.panel && (L.panel.selected = D === S);
    }), s.value = D, o.emit("update:modelValue", D));
  };
  Jw("registerTab", (D) => {
    const M = D.index;
    M > -1 && (a.value[M] = { ...a.value[M], tab: D }, a.value = [...a.value], $());
  }), Jw("registerPanel", (D) => {
    const M = D.index;
    M > -1 && (a.value[M] = {
      ...a.value[M],
      panel: D
    }, a.value = [...a.value], $());
  });
  const $ = () => {
    a.value.forEach(({ tab: D, panel: M }, L) => {
      if (M && D) {
        const S = D.id || ce("tab"), T = D.controls || ce("panel");
        D.controls = T, D.id = S, M.tab = S, M.id = T;
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
}, ma = window.Vue.ref, u4 = window.Vue.inject, c4 = window.Vue.computed, d4 = window.Vue.onMounted, tg = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, ng = (e) => {
  const o = ma(!1), r = ma(), s = ma(e.tab), a = ma(e.id), u = u4("registerPanel");
  d4(() => {
    if (u) {
      const f = r.value, w = f && f.parentElement ? f.parentElement : void 0, v = f ? Array.from(w ? w.children : []).indexOf(f) : -1;
      u({
        selected: o,
        id: a,
        tab: s,
        el: r.value,
        index: v
      });
    }
  });
  const c = c4(() => ({
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
}, xd = window.Vue.defineComponent, f4 = window.Vue.resolveComponent, Ad = window.Vue.openBlock, Bd = window.Vue.createElementBlock, es = window.Vue.createElementVNode, rg = window.Vue.mergeProps, ja = window.Vue.renderSlot, h4 = window.Vue.createVNode, p4 = window.Vue.normalizeStyle, w4 = window.Vue.toHandlers, v4 = window.Vue.withDirectives, m4 = window.Vue.normalizeProps, _4 = window.Vue.guardReactiveProps, g4 = window.Vue.vShow;
var Td = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $4 = Z_, y4 = xd({
  props: $4,
  setup(e) {
    return K_(e);
  },
  components: {
    FeatherRipple: pr
  }
}), b4 = { role: "presentation" }, V4 = { class: "tab-text" };
function C4(e, o, r, s, a, u) {
  const c = f4("FeatherRipple");
  return Ad(), Bd("li", b4, [
    es("button", rg(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      es("span", V4, [
        ja(e.$slots, "default", {}, void 0, !0)
      ]),
      h4(c)
    ], 16)
  ]);
}
var mc = /* @__PURE__ */ Td(y4, [["render", C4], ["__scopeId", "data-v-e6bb52b6"]]);
const S4 = Q_, E4 = X_, k4 = xd({
  model: J_,
  emits: E4,
  props: S4,
  setup(e, o) {
    return eg(e, o);
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
}), I4 = { class: "feather-tab-container" }, x4 = { class: "tab-panels" };
function A4(e, o, r, s, a, u) {
  return Ad(), Bd("div", I4, [
    es("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: p4({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    es("ul", rg(e.attrs, w4(e.listeners)), [
      ja(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    es("div", x4, [
      ja(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var B4 = /* @__PURE__ */ Td(k4, [["render", A4], ["__scopeId", "data-v-27adffb9"]]);
const T4 = tg, D4 = xd({
  props: T4,
  setup(e) {
    return ng(e);
  }
});
function N4(e, o, r, s, a, u) {
  return v4((Ad(), Bd("div", m4(_4(e.attrs)), [
    ja(e.$slots, "default")
  ], 16)), [
    [g4, e.selected]
  ]);
}
var _c = /* @__PURE__ */ Td(D4, [["render", N4]]);
const L4 = window.Vue.defineComponent, M4 = window.Vue.toDisplayString, O4 = window.Vue.normalizeClass, P4 = window.Vue.openBlock, R4 = window.Vue.createElementBlock, F4 = window.Vue.createCommentVNode, U4 = /* @__PURE__ */ L4({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (P4(), R4("span", {
      key: 0,
      class: O4(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, M4(o.severity), 3)) : F4("", !0);
  }
});
const og = /* @__PURE__ */ de(U4, [["__scopeId", "data-v-83c2cdce"]]), W4 = window.Vue.defineComponent, Xw = window.Vue.toDisplayString, Qw = window.Vue.createElementVNode, q4 = window.Vue.openBlock, H4 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const z4 = { class: "box" }, Y4 = { class: "label" }, G4 = { class: "date" }, j4 = /* @__PURE__ */ W4({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (q4(), H4("div", z4, [
      Qw("div", Y4, Xw(o.label), 1),
      Qw("div", G4, Xw(o.info), 1)
    ]));
  }
});
const gc = /* @__PURE__ */ de(j4, [["__scopeId", "data-v-b4afa751"]]), Z4 = window.Vue.defineComponent, K4 = window.Vue.unref, J4 = window.Vue.renderList, X4 = window.Vue.Fragment, $c = window.Vue.openBlock, yc = window.Vue.createElementBlock, Q4 = window.Vue.toDisplayString, eO = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const tO = { class: "alarms-list" }, nO = /* @__PURE__ */ Z4({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, s) => ($c(), yc("div", tO, [
      ($c(!0), yc(X4, null, J4(K4(_e.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => ($c(), yc("div", {
        class: eO(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, Q4(a.length), 3))), 128))
    ]));
  }
});
const rO = /* @__PURE__ */ de(nO, [["__scopeId", "data-v-52d63440"]]), oO = window.Vue.openBlock, iO = window.Vue.createElementBlock, sO = window.Vue.createElementVNode;
var aO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const lO = {}, uO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, cO = /* @__PURE__ */ sO("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), dO = [
  cO
];
function fO(e, o) {
  return oO(), iO("svg", uO, dO);
}
var hO = /* @__PURE__ */ aO(lO, [["render", fO]]);
const pO = window.Vue.openBlock, wO = window.Vue.createElementBlock, vO = window.Vue.createStaticVNode;
var mO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const _O = {}, gO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $O = /* @__PURE__ */ vO('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), yO = [
  $O
];
function bO(e, o) {
  return pO(), wO("svg", gO, yO);
}
var Za = /* @__PURE__ */ mO(_O, [["render", bO]]);
const VO = window.Vue.defineComponent, ln = window.Vue.unref, bc = window.Vue.createVNode, Dd = window.Vue.createElementVNode, Vc = window.Vue.withCtx, _a = window.Vue.openBlock, Cc = window.Vue.createBlock, Sc = window.Vue.createCommentVNode, CO = window.Vue.normalizeClass, SO = window.Vue.createElementBlock, EO = window.Vue.pushScopeId, kO = window.Vue.popScopeId, Nd = (e) => (EO("data-v-e073070b"), e = e(), kO(), e), IO = /* @__PURE__ */ Nd(() => /* @__PURE__ */ Dd("span", null, "Acknowledge", -1)), xO = /* @__PURE__ */ Nd(() => /* @__PURE__ */ Dd("span", null, "Escalate", -1)), AO = /* @__PURE__ */ Nd(() => /* @__PURE__ */ Dd("span", null, "Clear", -1)), BO = /* @__PURE__ */ VO({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const o = e, r = pn(), s = async (u) => {
      await HE(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await h_(
        o.situationId,
        Xe.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await Qm(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (_a(), SO("div", {
      class: CO(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? Sc("", !0) : (_a(), Cc(ln(ae), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: Vc(() => [
          bc(ln(Z), {
            icon: ln(Wo),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          IO
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (_a(), Cc(ln(ae), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(ln(Xe).ESCALATE))
      }, {
        default: Vc(() => [
          bc(ln(Z), {
            icon: ln(hO),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          xO
        ]),
        _: 1
      })) : Sc("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (_a(), Cc(ln(ae), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(ln(Xe).CLEAR))
      }, {
        default: Vc(() => [
          bc(ln(Z), {
            icon: ln(Za),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          AO
        ]),
        _: 1
      })) : Sc("", !0)
    ], 2));
  }
});
const ig = /* @__PURE__ */ de(BO, [["__scopeId", "data-v-e073070b"]]);
var TO = Object.defineProperty, DO = Object.defineProperties, NO = Object.getOwnPropertyDescriptors, ev = Object.getOwnPropertySymbols, LO = Object.prototype.hasOwnProperty, MO = Object.prototype.propertyIsEnumerable, tv = (e, o, r) => o in e ? TO(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ad = (e, o) => {
  for (var r in o || (o = {}))
    LO.call(o, r) && tv(e, r, o[r]);
  if (ev)
    for (var r of ev(o))
      MO.call(o, r) && tv(e, r, o[r]);
  return e;
}, sg = (e, o) => DO(e, NO(o));
const ag = window.Vue.defineComponent, OO = window.Vue.inject, PO = window.Vue.resolveComponent, Ec = window.Vue.openBlock, nv = window.Vue.createElementBlock, No = window.Vue.createElementVNode, RO = window.Vue.createBlock, rv = window.Vue.createCommentVNode, FO = window.Vue.renderSlot, UO = window.Vue.pushScopeId, WO = window.Vue.popScopeId, kc = window.Vue.toRef, ga = window.Vue.computed, qO = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var HO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const zO = {
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
}, YO = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, GO = ag({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: YO,
  props: zO,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: OO("registerCheckbox", (o) => {
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
    FeatherRipple: pr
  }
}), jO = (e) => (UO("data-v-a7af27e2"), e = e(), WO(), e), ZO = { class: "layout-container" }, KO = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], JO = { class: "checkbox hover focus" }, XO = /* @__PURE__ */ jO(() => /* @__PURE__ */ No("div", { class: "box" }, [
  /* @__PURE__ */ No("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ No("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ No("div", { class: "indeterminate" })
], -1)), QO = ["id", "for"];
function eP(e, o, r, s, a, u) {
  const c = PO("feather-ripple");
  return Ec(), nv("div", ZO, [
    No("div", {
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
      No("div", JO, [
        XO,
        e.disabled ? rv("", !0) : (Ec(), RO(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? rv("", !0) : (Ec(), nv("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        FO(e.$slots, "default", {}, void 0, !0)
      ], 8, QO))
    ], 40, KO)
  ]);
}
var zo = /* @__PURE__ */ HO(GO, [["render", eP], ["__scopeId", "data-v-a7af27e2"]]);
const tP = sg(ad({}, Qo), {
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
ag({
  props: tP,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    ei(e);
    const r = kc(e, "error"), s = ga(() => ce("feather-checkbox-group")), a = ga(() => ce("feather-input-description")), u = ga(() => ce("feather-input-label")), c = ga(() => {
      const _ = JSON.parse(JSON.stringify(o.attrs));
      return _["aria-invalid"] || (_["aria-invalid"] = !!r.value), sg(ad({}, _), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = qO(s.value), { validate: w } = Jo(f, kc(e, "modelValue"), e.label, e.schema, kc(e, "error"));
    return ad({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: w,
      registerCheckbox: (_) => {
        _ && f.value === s.value && (f.value = _);
      }
    }, Xo(o.attrs));
  },
  components: {
    InputSubText: Ko
  }
});
const nP = window.Vue.openBlock, rP = window.Vue.createElementBlock, lg = window.Vue.createElementVNode;
var oP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const iP = {}, sP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, aP = /* @__PURE__ */ lg("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), lP = /* @__PURE__ */ lg("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), uP = [
  aP,
  lP
];
function cP(e, o) {
  return nP(), rP("svg", sP, uP);
}
var dP = /* @__PURE__ */ oP(iP, [["render", cP]]);
var fP = Object.defineProperty, hP = Object.defineProperties, pP = Object.getOwnPropertyDescriptors, ov = Object.getOwnPropertySymbols, wP = Object.prototype.hasOwnProperty, vP = Object.prototype.propertyIsEnumerable, iv = (e, o, r) => o in e ? fP(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Lo = (e, o) => {
  for (var r in o || (o = {}))
    wP.call(o, r) && iv(e, r, o[r]);
  if (ov)
    for (var r of ov(o))
      vP.call(o, r) && iv(e, r, o[r]);
  return e;
}, ug = (e, o) => hP(e, pP(o));
const mP = window.Vue.defineComponent, Ic = window.Vue.toRef, _P = window.Vue.computed, sv = window.Vue.resolveComponent, av = window.Vue.openBlock, lv = window.Vue.createElementBlock, uv = window.Vue.mergeProps, cv = window.Vue.createVNode, gP = window.Vue.normalizeClass, dv = window.Vue.withCtx, $P = window.Vue.createElementVNode, yP = window.Vue.toDisplayString, bP = window.Vue.createCommentVNode;
var VP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const CP = ug(Lo(Lo({}, al), Qo), {
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
}), SP = {
  "update:modelValue": (e) => !0
}, EP = mP({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: SP,
  props: CP,
  setup(e, o) {
    ei(e), ll(e);
    const r = Ic(e, "id"), s = _P(() => r.value ? r.value : ce("feather-textarea-label")), { validate: a } = Jo(s, Ic(e, "modelValue"), e.label, e.schema, Ic(e, "error"));
    return Lo({
      inputId: s,
      incomingId: r,
      validate: a
    }, Xo(o.attrs));
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
      const e = Lo({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), ug(Lo(Lo({}, e), this.listeners), {
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
    InputSubText: Ko,
    InputWrapper: sl
  }
}), kP = ["maxlength"], IP = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function xP(e, o, r, s, a, u) {
  const c = sv("InputWrapper"), f = sv("InputSubText");
  return av(), lv("div", uv(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    cv(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: gP(["feather-textarea-content", e.contentCls])
    }, {
      default: dv(() => [
        $P("textarea", uv(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, kP)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    cv(f, { id: e.descriptionId }, {
      right: dv(() => [
        e.maxlength ? (av(), lv("div", IP, yP(e.charCount), 1)) : bP("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var ld = /* @__PURE__ */ VP(EP, [["render", xP], ["__scopeId", "data-v-0648df5c"]]);
const AP = window.Pinia.defineStore, ml = AP("appStore", {
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
}), BP = window.Vue.defineComponent, fv = window.Vue.toDisplayString, Di = window.Vue.createElementVNode, Mr = window.Vue.unref, yo = window.Vue.openBlock, hv = window.Vue.createBlock, Ni = window.Vue.createCommentVNode, pv = window.Vue.createVNode, $a = window.Vue.createElementBlock, TP = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const DP = { class: "row" }, NP = { class: "label" }, LP = { class: "action-icons" }, MP = { class: "icon-btn" }, OP = {
  key: 0,
  class: "icon-btn"
}, PP = {
  key: 1,
  class: "icon-btn"
}, RP = {
  key: 0,
  class: "text"
}, FP = window.Vue.watch, wv = window.Vue.ref, UP = /* @__PURE__ */ BP({
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
    const o = e, r = ml(), s = wv(!1), a = wv((w = o.memo) == null ? void 0 : w.body);
    FP(o, () => {
      var v;
      a.value = (v = o.memo) == null ? void 0 : v.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await JE(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await KE(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (v, _) => (yo(), $a("div", {
      class: TP([o.boxType === "small" ? "box-small" : "box"])
    }, [
      Di("div", DP, [
        Di("div", NP, fv(e.label), 1),
        Di("div", LP, [
          Di("div", MP, [
            s.value ? Ni("", !0) : (yo(), hv(Mr(Z), {
              key: 0,
              icon: Mr(dP),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (yo(), $a("div", OP, [
            pv(Mr(Z), {
              icon: Mr(Wo),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Ni("", !0),
          a.value && a.value != "" || s.value ? (yo(), $a("div", PP, [
            pv(Mr(Z), {
              icon: Mr(jo),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : Ni("", !0)
        ])
      ]),
      Di("div", null, [
        !s.value && a.value != null ? (yo(), $a("div", RP, fv(a.value), 1)) : Ni("", !0),
        s.value ? (yo(), hv(Mr(ld), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": _[0] || (_[0] = ($) => a.value = $),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Ni("", !0)
      ])
    ], 2));
  }
});
const Ka = /* @__PURE__ */ de(UP, [["__scopeId", "data-v-3f44e250"]]), WP = window.Vue.defineComponent, Or = window.Vue.unref, bo = window.Vue.createVNode, Li = window.Vue.toDisplayString, dn = window.Vue.createElementVNode, vv = window.Vue.openBlock, mv = window.Vue.createElementBlock, _v = window.Vue.createCommentVNode, xc = window.Vue.createTextVNode, qP = window.Vue.pushScopeId, HP = window.Vue.popScopeId, Ld = (e) => (qP("data-v-02d1e7f0"), e = e(), HP(), e), zP = {
  key: 0,
  class: "card"
}, YP = { class: "row" }, GP = {
  key: 0,
  class: "ack"
}, jP = /* @__PURE__ */ Ld(() => /* @__PURE__ */ dn("strong", null, " Duration: ", -1)), ZP = ["innerHTML"], KP = /* @__PURE__ */ Ld(() => /* @__PURE__ */ dn("strong", null, "First Event", -1)), JP = /* @__PURE__ */ Ld(() => /* @__PURE__ */ dn("strong", null, "Last Event", -1)), XP = { class: "section memo-boxes" }, gv = window.Vue.ref, QP = window.Vue.watch, eR = /* @__PURE__ */ WP({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, s = gv(!1), a = gv(r.alarm), u = new Date().getTime();
    QP(r, () => {
      a.value = r.alarm, s.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (w) => {
      const v = await e_(w);
      v && (a.value = v);
    };
    return (w, v) => {
      var _, $, y, I, D;
      return a.value ? (vv(), mv("div", zP, [
        dn("div", null, [
          dn("div", YP, [
            bo(Or(zo), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                v[0] || (v[0] = (M) => s.value = M),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            dn("div", {
              class: "title",
              onClick: v[1] || (v[1] = () => {
                s.value = !s.value, c();
              })
            }, Li(a.value.nodeLabel) + " - " + Li(a.value.id), 1),
            bo(og, {
              severity: (_ = a.value) == null ? void 0 : _.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (vv(), mv("div", GP, [
              bo(Or(Z), {
                icon: Or(Wo),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : _v("", !0)
          ]),
          dn("div", null, [
            jP,
            xc(" " + Li(Or(rl)(Or(u), new Date(a.value.firstEventTime))), 1)
          ]),
          dn("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, ZP),
          dn("div", null, [
            KP,
            xc(" - " + Li(Or(Cn)(a.value.firstEventTime)), 1)
          ]),
          dn("div", null, [
            JP,
            xc(" - " + Li(Or(Cn)(a.value.lastEventTime)), 1)
          ]),
          dn("div", XP, [
            bo(Ka, {
              id: ($ = a.value) == null ? void 0 : $.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (y = a.value) == null ? void 0 : y.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            bo(Ka, {
              id: (I = a.value) == null ? void 0 : I.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (D = a.value) == null ? void 0 : D.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        bo(ig, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : _v("", !0);
    };
  }
});
const tR = /* @__PURE__ */ de(eR, [["__scopeId", "data-v-02d1e7f0"]]), nR = window.Vue.openBlock, rR = window.Vue.createElementBlock, cg = window.Vue.createElementVNode;
var oR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const iR = {}, sR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, aR = /* @__PURE__ */ cg("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), lR = /* @__PURE__ */ cg("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), uR = [
  aR,
  lR
];
function cR(e, o) {
  return nR(), rR("svg", sR, uR);
}
var ud = /* @__PURE__ */ oR(iR, [["render", cR]]);
const dR = window.Vue.watch, fR = window.Vue.ref, hR = window.Vue.onBeforeUnmount, dg = (e) => {
  const o = fR(!1), r = (s) => {
    s.keyCode === ee.ESCAPE && (s.preventDefault(), o.value = !o.value);
  };
  return dR(e, (s) => {
    s ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), hR(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, pR = window.Vue.watch, fg = (e) => {
  let o;
  pR(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, hg = window.Vue.watch, pg = window.Vue.onBeforeUnmount, wg = window.Vue.nextTick, wR = window.Vue.onMounted, vg = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, Ja = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, mg = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  pg(() => Ja(o, r)), wR(() => hg(e, (s) => {
    s ? wg(() => {
      o = vg(r);
    }) : Ja(o, r);
  }, { immediate: !0 }));
}, vR = (e, o) => {
  let r;
  pg(() => Ja(r, o.value ? o.value.offsetParent : !1)), hg([e, o], ([s, a]) => {
    s && a ? wg(() => {
      r = vg(a.offsetParent);
    }) : a && Ja(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var mR = Object.defineProperty, $v = Object.getOwnPropertySymbols, _R = Object.prototype.hasOwnProperty, gR = Object.prototype.propertyIsEnumerable, yv = (e, o, r) => o in e ? mR(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, $R = (e, o) => {
  for (var r in o || (o = {}))
    _R.call(o, r) && yv(e, r, o[r]);
  if ($v)
    for (var r of $v(o))
      gR.call(o, r) && yv(e, r, o[r]);
  return e;
};
const Md = window.Vue.defineComponent, ts = window.Vue.ref, yR = window.Vue.nextTick, _g = window.Vue.openBlock, gg = window.Vue.createElementBlock, Od = window.Vue.createElementVNode, bR = window.Vue.renderSlot, VR = window.Vue.resolveComponent, CR = window.Vue.normalizeClass, SR = window.Vue.withModifiers, ER = window.Vue.createVNode, bv = window.Vue.toRef, Vv = window.Vue.computed, Cv = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var $g = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const kR = {
  enable: {
    type: Boolean,
    required: !0
  }
}, IR = Md({
  props: kR,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = ts(), o = ts(!1), r = (_, $) => {
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
          const I = _;
          return I.type !== "hidden" && I.type !== "file";
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
      $ && $.focus ? yR(() => {
        $.focus();
      }) : s(_);
    }, w = ts();
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
}), xR = /* @__PURE__ */ Od("div", { tabindex: "0" }, null, -1), AR = {
  class: "focus-trap-content",
  ref: "content"
}, BR = /* @__PURE__ */ Od("div", { tabindex: "0" }, null, -1);
function TR(e, o, r, s, a, u) {
  return _g(), gg("div", null, [
    xR,
    Od("div", AR, [
      bR(e.$slots, "default")
    ], 512),
    BR
  ]);
}
var yg = /* @__PURE__ */ $g(IR, [["render", TR]]);
const DR = Md({
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
    icon: () => jo
  },
  components: {
    FeatherIcon: Z
  }
}), NR = ["aria-label"];
function LR(e, o, r, s, a, u) {
  const c = VR("FeatherIcon");
  return _g(), gg("a", {
    href: "#",
    class: CR(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = SR((f) => e.$emit("close"), ["prevent"]))
  }, [
    ER(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, NR);
}
var bg = /* @__PURE__ */ $g(DR, [["render", LR], ["__scopeId", "data-v-fc0f3f00"]]);
const Vg = {
  title: "REQUIRED",
  close: "Close Dialog"
}, MR = {
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
    default: () => Vg,
    validator: (e) => !!e.title
  }
}, OR = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
Md({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: OR,
  props: MR,
  setup(e, o) {
    const r = il(bv(e, "labels"), Vg), s = bv(e, "modelValue"), a = ts(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = Vv(() => !!o.slots.footer), f = Vv(() => ce("dialog-header"));
    e.relative ? vR(s, a) : mg(s), fg(s), Cv(dg(s), () => {
      u();
    });
    const w = ts(e.modelValue);
    return Cv(w, (v) => {
      v ? o.emit("shown") : o.emit("hidden");
    }), $R({ close: u, hasFooter: c, headerId: f, element: a, shown: w }, r);
  },
  components: {
    FocusTrap: yg,
    DialogClose: bg
  }
});
var PR = Object.defineProperty, Sv = Object.getOwnPropertySymbols, RR = Object.prototype.hasOwnProperty, FR = Object.prototype.propertyIsEnumerable, Ev = (e, o, r) => o in e ? PR(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, _l = (e, o) => {
  for (var r in o || (o = {}))
    RR.call(o, r) && Ev(e, r, o[r]);
  if (Sv)
    for (var r of Sv(o))
      FR.call(o, r) && Ev(e, r, o[r]);
  return e;
};
const gl = window.Vue.defineComponent, kv = window.Vue.toRef, Iv = window.Vue.watch, xv = window.Vue.ref, Av = window.Vue.resolveComponent, ya = window.Vue.openBlock, Bv = window.Vue.createBlock, UR = window.Vue.Teleport, Tv = window.Vue.createElementBlock, Ac = window.Vue.createVNode, Dv = window.Vue.Transition, Bc = window.Vue.withCtx, Nv = window.Vue.createCommentVNode, WR = window.Vue.withDirectives, qR = window.Vue.normalizeStyle, HR = window.Vue.normalizeClass, Lv = window.Vue.createElementVNode, zR = window.Vue.renderSlot, YR = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var GR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Cg = {
  title: "REQUIRED",
  close: "Close Dialog"
}, jR = {
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
    default: () => Cg,
    validator: (e) => !!e.title
  }
}, ZR = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, KR = gl({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: ZR,
  props: jR,
  setup(e, o) {
    const r = il(kv(e, "labels"), Cg), s = kv(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    mg(s), fg(s), Iv(dg(s), () => {
      a();
    });
    const u = xv(), c = xv(!1);
    return Iv(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), _l({ close: a, shown: c, isShown: s, element: u }, r);
  },
  components: {
    DialogClose: bg,
    FocusTrap: yg
  }
}), JR = {
  key: 0,
  class: "drawer-container feather-styles"
}, XR = {
  key: 0,
  class: "greyedOut"
}, QR = ["aria-label"], e8 = { class: "slot" };
function t8(e, o, r, s, a, u) {
  const c = Av("dialog-close"), f = Av("focus-trap");
  return ya(), Bv(UR, { to: "body" }, [
    e.modelValue ? (ya(), Tv("div", JR, [
      Ac(Dv, { name: "greyOutShim" }, {
        default: Bc(() => [
          e.modelValue ? (ya(), Tv("div", XR)) : Nv("", !0)
        ]),
        _: 1
      }),
      Ac(Dv, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (w) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (w) => e.shown = !1)
      }, {
        default: Bc(() => [
          WR((ya(), Bv(f, {
            enable: e.modelValue,
            style: qR({ width: e.width }),
            key: "sect",
            class: HR(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: Bc(() => [
              Lv("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                Lv("div", e8, [
                  zR(e.$slots, "default", {}, void 0, !0)
                ]),
                Ac(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, QR)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [YR, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : Nv("", !0)
  ]);
}
var Sg = /* @__PURE__ */ GR(KR, [["render", t8], ["__scopeId", "data-v-0a36e1dc"]]);
const n8 = _l({
  label: {
    type: String,
    required: !0
  }
}, Z_);
gl({
  name: "DrawerTab",
  props: n8,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = Gr(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      jr(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return K_(e);
  },
  components: {
    FeatherRipple: pr
  }
});
const r8 = _l({}, Q_), o8 = X_;
gl({
  emits: o8,
  model: J_,
  props: r8,
  setup(e, o) {
    return eg(e, o);
  }
});
const i8 = _l({
  header: {
    type: String
  }
}, tg);
gl({
  name: "DrawerTabContent",
  props: i8,
  setup(e) {
    return ng(e);
  },
  directives: {
    MenuFocusLoop: wT
  }
});
const s8 = window.Vue.defineComponent, Eg = window.Vue.createElementVNode, Mv = window.Vue.createVNode, a8 = window.Vue.renderList, l8 = window.Vue.Fragment, Mi = window.Vue.openBlock, Tc = window.Vue.createElementBlock, Ov = window.Vue.createBlock, u8 = window.Vue.unref, c8 = window.Vue.withCtx, d8 = window.Vue.pushScopeId, f8 = window.Vue.popScopeId, h8 = (e) => (d8("data-v-c7c65659"), e = e(), f8(), e), p8 = { class: "content" }, w8 = /* @__PURE__ */ h8(() => /* @__PURE__ */ Eg("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), v8 = {
  key: 0,
  class: "situation-list"
}, Dc = window.Vue.ref, Pv = window.Vue.watch, m8 = /* @__PURE__ */ s8({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, s = pn(), a = Dc(r.visible), u = () => {
      let v = s.situations;
      r.situationId !== 0 && (v = s.situations.filter(
        (_) => _.id != r.situationId
      )), c.value = v, f.value = v;
    }, c = Dc(s.situations), f = Dc(s.situations);
    Pv(r, () => {
      a.value = r.visible, u();
    }), Pv(
      () => s.situations,
      () => {
        u();
      }
    );
    const w = (v) => {
      f.value = v;
    };
    return (v, _) => (Mi(), Ov(u8(Sg), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        _[0] || (_[0] = ($) => a.value = $),
        _[1] || (_[1] = ($) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: c8(() => [
        Eg("div", p8, [
          w8,
          Mv(ni, {
            list: c.value,
            isSituation: "",
            onFilteredList: w
          }, null, 8, ["list"]),
          f.value.length ? (Mi(), Tc("div", v8, [
            (Mi(!0), Tc(l8, null, a8(f.value, ($) => (Mi(), Tc("div", {
              class: "card",
              key: $.id
            }, [
              Mv(w_, {
                onClick: (y) => o("situation-selected", $.id),
                "situation-info": $,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Mi(), Ov(ri, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const kg = /* @__PURE__ */ de(m8, [["__scopeId", "data-v-c7c65659"]]), _8 = window.Vue.defineComponent, Rv = window.Vue.normalizeClass, To = window.Vue.createElementVNode, ba = window.Vue.unref, g8 = window.Vue.createVNode, Va = window.Vue.toDisplayString, $8 = window.Vue.createTextVNode, y8 = window.Vue.openBlock, b8 = window.Vue.createElementBlock, V8 = window.Vue.pushScopeId, C8 = window.Vue.popScopeId, S8 = (e) => (V8("data-v-e1e9b696"), e = e(), C8(), e), E8 = { class: "alarmInfo" }, k8 = { class: "alarm-title" }, I8 = /* @__PURE__ */ S8(() => /* @__PURE__ */ To("strong", null, " Duration: ", -1)), x8 = { class: "description" }, A8 = /* @__PURE__ */ _8({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, s = new Date().getTime();
    return (a, u) => (y8(), b8("div", {
      class: Rv(["alarm", { selected: r.selected }])
    }, [
      To("div", E8, [
        To("div", {
          class: Rv(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        g8(ba(zo), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        To("div", k8, Va(e.alarm.nodeLabel) + " - " + Va(e.alarm.id), 1)
      ]),
      To("div", null, [
        I8,
        $8(" " + Va(ba(rl)(ba(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      To("div", x8, Va(ba(l_)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const Pd = /* @__PURE__ */ de(A8, [["__scopeId", "data-v-e1e9b696"]]), B8 = window.Vue.defineComponent, Ma = window.Vue.createElementVNode, Vo = window.Vue.unref, T8 = window.Vue.toDisplayString, Fv = window.Vue.withCtx, Nc = window.Vue.createVNode, D8 = window.Vue.renderList, N8 = window.Vue.Fragment, Oi = window.Vue.openBlock, Lc = window.Vue.createElementBlock, Uv = window.Vue.createBlock, L8 = window.Vue.pushScopeId, M8 = window.Vue.popScopeId, O8 = (e) => (L8("data-v-4bc80d4b"), e = e(), M8(), e), P8 = { class: "content" }, R8 = { class: "header" }, F8 = /* @__PURE__ */ O8(() => /* @__PURE__ */ Ma("h4", null, "ADD ALARMS", -1)), U8 = {
  key: 0,
  class: "alarms-list"
}, Ca = window.Vue.ref, Wv = window.Vue.watch, W8 = /* @__PURE__ */ B8({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, s = pn(), a = Ca(r.visible), u = Ca([]), c = Ca(["all"]), f = Ca(s.unassignedAlarms);
    Wv(r, () => {
      a.value = r.visible, u.value = [], f.value = s.unassignedAlarms;
    }), Wv(
      () => s.unassignedAlarms,
      () => {
        _();
      }
    );
    const w = (y) => {
      _e.exports.includes(u.value, y) ? _e.exports.remove(u.value, (I) => I === y) : u.value.push(y);
    }, v = () => {
      o("alarms-selected", u.value);
    }, _ = () => {
      let y = s.unassignedAlarms;
      c.value.includes("all") || (y = y.filter(
        (I) => c.value.includes(I.severity)
      )), f.value = y;
    }, $ = (y) => {
      f.value = y;
    };
    return (y, I) => (Oi(), Uv(Vo(Sg), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        I[0] || (I[0] = (D) => a.value = D),
        I[1] || (I[1] = (D) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: Fv(() => [
        Ma("div", P8, [
          Ma("div", R8, [
            F8,
            Nc(Vo(ae), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: Fv(() => [
                Ma("span", null, "Add " + T8(Vo(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          Nc(ni, {
            list: Vo(s).unassignedAlarms,
            onFilteredList: $
          }, null, 8, ["list"]),
          f.value.length ? (Oi(), Lc("div", U8, [
            (Oi(!0), Lc(N8, null, D8(f.value, (D) => (Oi(), Lc("div", {
              class: "card",
              key: D.id
            }, [
              Nc(Pd, {
                selected: Vo(_e.exports.includes)(Vo(u), D.id),
                alarm: D,
                onSelectedAlarm: w
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (Oi(), Uv(ri, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const q8 = /* @__PURE__ */ de(W8, [["__scopeId", "data-v-4bc80d4b"]]), H8 = window.Vue.openBlock, z8 = window.Vue.createElementBlock, Ig = window.Vue.createElementVNode;
var Y8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const G8 = {}, j8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Z8 = /* @__PURE__ */ Ig("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), K8 = /* @__PURE__ */ Ig("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), J8 = [
  Z8,
  K8
];
function X8(e, o) {
  return H8(), z8("svg", j8, J8);
}
var qv = /* @__PURE__ */ Y8(G8, [["render", X8]]);
const Q8 = window.Vue.defineComponent, Lt = window.Vue.createElementVNode, nt = window.Vue.unref, dt = window.Vue.createVNode, Pi = window.Vue.withCtx, e5 = window.Vue.renderList, Hv = window.Vue.Fragment, Ri = window.Vue.openBlock, Sa = window.Vue.createElementBlock, t5 = window.Vue.createBlock, n5 = window.Vue.pushScopeId, r5 = window.Vue.popScopeId, oi = (e) => (n5("data-v-524b0835"), e = e(), r5(), e), o5 = { class: "container" }, i5 = { class: "header" }, s5 = /* @__PURE__ */ oi(() => /* @__PURE__ */ Lt("div", { class: "title" }, "Alarms", -1)), a5 = /* @__PURE__ */ oi(() => /* @__PURE__ */ Lt("span", null, "Add Alarms", -1)), l5 = { class: "alarms-container" }, u5 = { class: "filters" }, c5 = { class: "list" }, d5 = { class: "row actions" }, f5 = /* @__PURE__ */ oi(() => /* @__PURE__ */ Lt("span", null, "Clear", -1)), h5 = /* @__PURE__ */ oi(() => /* @__PURE__ */ Lt("span", null, "Acknowledge", -1)), p5 = /* @__PURE__ */ oi(() => /* @__PURE__ */ Lt("span", null, "Move", -1)), w5 = /* @__PURE__ */ oi(() => /* @__PURE__ */ Lt("span", null, "Remove", -1)), v5 = { class: "section" }, m5 = {
  key: 0,
  class: "alarm-list"
}, Ea = window.Vue.ref, _5 = window.Vue.watch, g5 = window.Vue.reactive, $5 = window.Vue.markRaw, y5 = /* @__PURE__ */ Q8({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = $5({
      Add: vl,
      Delete: qv,
      MarkComplete: Za,
      CheckCircle: Wo,
      ExitToApp: ud
    }), s = ml(), a = pn(), u = Ea(!1), c = Ea(["all"]), f = Ea(!1), w = Ea(!1), v = g5({
      selectedAlarms: [],
      alarms: o.alarms
    });
    _5(o, () => {
      c.value = ["all"], v.alarms = o.alarms, v.selectedAlarms = [], u.value = !1;
    });
    const _ = (B) => {
      v.selectedAlarms.includes(B) ? _e.exports.remove(v.selectedAlarms, (P) => P == B) : v.selectedAlarms.push(B);
    }, $ = async (B) => {
      v.selectedAlarms.length ? (await zE(v.selectedAlarms, B), a.getSituation(o.situationId), v.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, y = () => v.selectedAlarms.length === o.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), I = async () => {
      y() && (await ew(
        o.situationId,
        v.selectedAlarms
      ) ? a.getSituation(o.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, D = async (B) => {
      y() && (await ew(
        o.situationId,
        v.selectedAlarms
      ) ? await M(B, v.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, M = async (B, P) => {
      P.length ? await p_(B, P) ? a.getSituation(B) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, L = async (B) => {
      await M(o.situationId, B), w.value = !1;
    }, S = () => {
      v.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, T = (B) => {
      v.alarms = B;
    };
    return (B, P) => (Ri(), Sa(Hv, null, [
      Lt("div", o5, [
        Lt("div", i5, [
          s5,
          dt(nt(ae), {
            class: "add-alarms-btn",
            onClick: P[0] || (P[0] = (k) => w.value = !0)
          }, {
            default: Pi(() => [
              dt(nt(Z), {
                icon: nt(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              a5
            ]),
            _: 1
          })
        ]),
        Lt("div", l5, [
          Lt("div", u5, [
            dt(ni, {
              list: o.alarms,
              onFilteredList: T,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Lt("div", c5, [
            Lt("div", d5, [
              dt(nt(zo), {
                modelValue: u.value,
                "onUpdate:modelValue": P[1] || (P[1] = (k) => u.value = k),
                label: "selected"
              }, null, 8, ["modelValue"]),
              dt(nt(ae), {
                onClick: P[2] || (P[2] = () => $("clear"))
              }, {
                default: Pi(() => [
                  dt(nt(Z), {
                    icon: nt(Za),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  f5
                ]),
                _: 1
              }),
              dt(nt(ae), {
                onClick: P[3] || (P[3] = () => $("ack"))
              }, {
                default: Pi(() => [
                  dt(nt(Z), {
                    icon: nt(Wo),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  h5
                ]),
                _: 1
              }),
              dt(nt(ae), { onClick: S }, {
                default: Pi(() => [
                  dt(nt(Z), {
                    icon: nt(ud),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  p5
                ]),
                _: 1
              }),
              dt(nt(ae), { onClick: I }, {
                default: Pi(() => [
                  dt(nt(Z), {
                    icon: nt(qv),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  w5
                ]),
                _: 1
              })
            ]),
            Lt("div", v5, [
              v.alarms.length > 0 ? (Ri(), Sa("div", m5, [
                (Ri(!0), Sa(Hv, null, e5(v.alarms, (k) => (Ri(), Sa("div", {
                  key: k.id
                }, [
                  dt(tR, {
                    alarm: k,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: _
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (Ri(), t5(ri, { key: 1 }))
            ])
          ])
        ])
      ]),
      dt(kg, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: D,
        onDrawerClosed: P[4] || (P[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      dt(q8, {
        visible: w.value,
        onAlarmsSelected: L,
        onDrawerAlarmsClosed: P[5] || (P[5] = () => w.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const b5 = /* @__PURE__ */ de(y5, [["__scopeId", "data-v-524b0835"]]), V5 = window.Vue.defineComponent, un = window.Vue.createVNode, Gt = window.Vue.unref, Mc = window.Vue.normalizeClass, ka = window.Vue.toDisplayString, Fi = window.Vue.openBlock, Ui = window.Vue.createElementBlock, zv = window.Vue.createCommentVNode, C5 = window.Vue.withCtx, Jt = window.Vue.createElementVNode, S5 = window.Vue.Fragment, E5 = window.Vue.pushScopeId, k5 = window.Vue.popScopeId, I5 = (e) => (E5("data-v-eab7334d"), e = e(), k5(), e), x5 = { class: "section" }, A5 = { class: "action-section" }, B5 = { class: "btn-row" }, T5 = { key: 0 }, D5 = { key: 1 }, N5 = {
  key: 0,
  class: "situation-detail"
}, L5 = { class: "situation-info" }, M5 = { class: "id" }, O5 = ["innerHTML"], P5 = /* @__PURE__ */ I5(() => /* @__PURE__ */ Jt("p", null, null, -1)), R5 = { class: "boxes" }, F5 = { class: "parameters" }, U5 = { class: "section memo-boxes" }, W5 = { key: 0 }, Yv = window.Vue.ref, q5 = window.Vue.watch, H5 = /* @__PURE__ */ V5({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = ml(), s = pn(), a = Xe.REJECTED, u = Yv(o.situationInfo.status), c = Yv(o.situationInfo);
    q5(o, () => {
      u.value = o.situationInfo.status || "", c.value = o.situationInfo;
    });
    const f = async (w) => {
      var _;
      await h_(
        (_ = o.situationInfo) == null ? void 0 : _.id,
        w.toLowerCase()
      ) ? (u.value = w, s.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (w, v) => {
      var _, $, y, I, D, M, L, S, T, B, P, k;
      return Fi(), Ui(S5, null, [
        Jt("div", x5, [
          Jt("div", A5, [
            un(ig, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Jt("div", B5, [
              un(Gt(ae), {
                class: Mc(["btn", { rejected: u.value == Gt(a) }]),
                "data-test": "btn-reject",
                onClick: v[0] || (v[0] = (R) => f(Gt(a)))
              }, {
                default: C5(() => [
                  un(Gt(Z), {
                    icon: Gt(t_),
                    "aria-hidden": "true",
                    class: Mc(["icon reject", { rejected: u.value == Gt(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == Gt(a) ? (Fi(), Ui("span", T5, ka(Gt(a)), 1)) : (Fi(), Ui("span", D5, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (Fi(), Ui("div", N5, [
            Jt("div", {
              class: Mc(["severity-line", [`${($ = (_ = c.value) == null ? void 0 : _.severity) == null ? void 0 : $.toLowerCase()}-bg dark`]])
            }, null, 2),
            Jt("div", L5, [
              Jt("div", M5, [
                Jt("div", null, " Situation - " + ka((y = c.value) == null ? void 0 : y.id) + " - " + ka(c.value.alarms.length) + " alarm(s) affects " + ka(Gt(_e.exports.size)(Gt(_e.exports.groupBy)((I = c.value) == null ? void 0 : I.alarms, "nodeId"))) + " node(s) ", 1),
                un(og, {
                  severity: (D = c.value) == null ? void 0 : D.severity
                }, null, 8, ["severity"])
              ]),
              Jt("span", {
                innerHTML: c.value.description
              }, null, 8, O5),
              P5,
              Jt("div", R5, [
                un(gc, {
                  label: "First Event",
                  info: Gt(Cn)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                un(gc, {
                  label: "Last Event",
                  info: Gt(Cn)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                un(gc, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Jt("div", F5, [
              un(rO, {
                alarms: (M = c.value) == null ? void 0 : M.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : zv("", !0),
          Jt("div", U5, [
            un(Ka, {
              id: (L = c.value) == null ? void 0 : L.id,
              situationId: (S = c.value) == null ? void 0 : S.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (T = c.value) == null ? void 0 : T.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            un(Ka, {
              id: (B = c.value) == null ? void 0 : B.id,
              situationId: (P = c.value) == null ? void 0 : P.id,
              label: "Journal Memo",
              type: "journal",
              memo: (k = c.value) == null ? void 0 : k.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (Fi(), Ui("div", W5, [
          un(b5, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : zv("", !0)
      ], 64);
    };
  }
});
const z5 = /* @__PURE__ */ de(H5, [["__scopeId", "data-v-eab7334d"]]);
var Y5 = Object.defineProperty, G5 = Object.defineProperties, j5 = Object.getOwnPropertyDescriptors, Gv = Object.getOwnPropertySymbols, Z5 = Object.prototype.hasOwnProperty, K5 = Object.prototype.propertyIsEnumerable, jv = (e, o, r) => o in e ? Y5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, cd = (e, o) => {
  for (var r in o || (o = {}))
    Z5.call(o, r) && jv(e, r, o[r]);
  if (Gv)
    for (var r of Gv(o))
      K5.call(o, r) && jv(e, r, o[r]);
  return e;
}, J5 = (e, o) => G5(e, j5(o));
const xg = window.Vue.defineComponent, Hr = window.Vue.resolveComponent, Oa = window.Vue.openBlock, Zv = window.Vue.createBlock, Pa = window.Vue.mergeProps, zr = window.Vue.withCtx, Ag = window.Vue.createElementBlock, X5 = window.Vue.Fragment, Q5 = window.Vue.renderList, e7 = window.Vue.createTextVNode, t7 = window.Vue.toDisplayString, n7 = window.Vue.computed, Kv = window.Vue.toRef, Wi = window.Vue.createVNode, Jv = window.Vue.toHandlers, r7 = window.Vue.renderSlot, o7 = window.Vue.normalizeClass, i7 = window.Vue.createElementVNode;
var Bg = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const s7 = xg({
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
        is(o, this.$refs.list.$el);
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
    FeatherList: Ed,
    FeatherListItem: cs
  }
});
function a7(e, o, r, s, a, u) {
  const c = Hr("FeatherListItem"), f = Hr("FeatherList");
  return Oa(), Zv(f, Pa(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: zr(() => [
      (Oa(!0), Ag(X5, null, Q5(e.options, (w, v) => (Oa(), Zv(c, {
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
        default: zr(() => [
          e7(t7(w[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var l7 = /* @__PURE__ */ Bg(s7, [["render", a7], ["__scopeId", "data-v-eae820da"]]);
const u7 = J5(cd(cd({}, al), Qo), {
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
}), c7 = {
  "update:modelValue": (e) => !0
}, d7 = xg({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: c7,
  props: u7,
  setup(e, o) {
    ei(e), ll(e);
    const r = n7(() => ce("feather-select-input")), { validate: s } = Jo(r, Kv(e, "modelValue"), e.label, e.schema, Kv(e, "error"));
    return cd({
      inputId: r,
      validate: s
    }, Xo(o.attrs));
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
    icon: () => hl
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
        const o = String.fromCharCode(e.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      jr(this.delayTimeout), this.delayTimeout = Gr(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: sl,
    InputSubText: Ko,
    FeatherMenu: E_,
    List: l7,
    FeatherIcon: Z
  }
});
function f7(e, o, r, s, a, u) {
  const c = Hr("FeatherIcon"), f = Hr("InputWrapper"), w = Hr("List"), v = Hr("FeatherMenu"), _ = Hr("InputSubText");
  return Oa(), Ag("div", Pa(e.inherittedAttrs, { class: "feather-select-container" }), [
    Wi(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: zr(($) => [
        Wi(f, Pa({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, $.attrs, Jv($.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: zr(() => [
            r7(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: zr(() => [
            Wi(c, {
              class: o7(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: zr(() => [
            i7("input", Pa(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Jv(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: zr(() => [
        Wi(w, {
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
    Wi(_, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var h7 = /* @__PURE__ */ Bg(d7, [["render", f7], ["__scopeId", "data-v-ecb32d90"]]);
const p7 = window.Vue.openBlock, w7 = window.Vue.createElementBlock, Tg = window.Vue.createElementVNode;
var v7 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const m7 = {}, _7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, g7 = /* @__PURE__ */ Tg("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), $7 = /* @__PURE__ */ Tg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), y7 = [
  g7,
  $7
];
function b7(e, o) {
  return p7(), w7("svg", _7, y7);
}
var V7 = /* @__PURE__ */ v7(m7, [["render", b7]]);
const Ra = window.Vue.openBlock, dd = window.Vue.createElementBlock, Dg = window.Vue.createElementVNode, C7 = window.Vue.defineComponent, Pr = window.Vue.ref, S7 = window.Vue.provide, Xv = window.Vue.computed, E7 = window.Vue.onUnmounted, Qv = window.Vue.toRef, k7 = window.Vue.resolveComponent, I7 = window.Vue.Fragment, x7 = window.Vue.createBlock, A7 = window.Vue.Teleport, em = window.Vue.createVNode, B7 = window.Vue.Transition, T7 = window.Vue.withCtx, D7 = window.Vue.normalizeClass, N7 = window.Vue.normalizeStyle, L7 = window.Vue.toDisplayString, M7 = window.Vue.createCommentVNode, O7 = window.Vue.renderSlot, Oc = window.Vue.nextTick;
var Ng = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const P7 = {}, R7 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, F7 = /* @__PURE__ */ Dg("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), U7 = [
  F7
];
function W7(e, o) {
  return Ra(), dd("svg", R7, U7);
}
var q7 = /* @__PURE__ */ Ng(P7, [["render", W7]]), Je = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Je || {}), Un = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Un || {});
const H7 = (e, o, r, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + s && c.push(Je.top), a >= o.height + s && c.push(Je.bottom);
  const f = [];
  u >= o.width + s && f.push(Je.right), e.left >= o.width + s && f.push(Je.left);
  let w = [...f, ...c];
  return (r === Je.top || r === Je.bottom) && (w = [...c, ...f]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, z7 = (e, o, r, s, a = 28) => {
  if (e === Je.left || e === Je.right)
    return Un.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], w = u, v = c + o.width / 2, _ = r.width - a, $ = r.width / 2;
  return w >= $ && v >= $ && f.push(Un.center), v >= _ && f.push(Un.left), w >= _ && f.push(Un.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, Y7 = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Je.top
  },
  pointerAlignment: {
    type: String,
    default: () => Un.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, G7 = C7({
  props: Y7,
  setup(e) {
    const o = Pr(!1), r = Pr(!1), s = ce("feather-tooltip-trigger"), a = ce("feather-tooltip"), u = "data-feather-tooltip";
    S7("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      jr(c), o.value || (c = Gr(M, e.enterDelay));
    }, w = () => {
      jr(c), c = Gr(L, e.exitDelay);
    }, v = (ye) => {
      ye.keyCode === ee.ESCAPE && (ye.preventDefault(), L(!0));
    }, _ = Xv(() => ({
      [u]: s,
      "aria-describedby": a
    })), $ = {
      mouseenter: f,
      mouseleave: w,
      focus: f,
      blur: w,
      keydown: v
    }, y = Pr(document), I = S_(y, () => L(!0));
    E7(() => L(!0));
    const D = () => document.getElementById(a), M = () => {
      r.value = !1, o.value = !0, Oc(() => {
        const ye = D();
        le(ye), o.value = !1, Oc(() => {
          r.value = !0, o.value = !0, I.value = !0;
        });
      });
    }, L = (ye = !1) => {
      R.value = "", k.value = "", O.value = "", H.value = "", o.value = !1, ye && (r.value = !1), I.value = !1;
    }, S = Qv(e, "placement"), T = Qv(e, "pointerAlignment"), B = 8, P = 24, k = Pr(""), R = Pr(""), O = Pr(""), H = Pr(""), $e = Xv(() => H.value ? "p-" + H.value : !1), le = (ye) => {
      const ge = document.querySelector(`[${u}=${s}]`);
      if (!ge) {
        console.log("trigger not found");
        return;
      }
      Oc(() => {
        const ke = ge.getBoundingClientRect(), Ae = ye.getBoundingClientRect(), we = H7(ke, Ae, S.value, B), Pe = z7(we, ke, Ae, T.value, P);
        O.value = Pe.toString(), H.value = we.toString();
        let Le = 0, He = 0;
        if ((we === Je.left || we === Je.right) && (Le = ke.top + ke.height / 2 - Ae.height / 2, we === Je.left && (He = ke.left - Ae.width - B), we === Je.right && (He = ke.right)), we === Je.top || we === Je.bottom) {
          Le = ke.top - Ae.height - B, we === Je.bottom && (Le = ke.bottom);
          const Hn = ke.left + ke.width / 2;
          switch (Pe) {
            case Un.center:
              He = Hn - Ae.width / 2;
              break;
            case Un.left:
              He = Hn - P;
              break;
            case Un.right:
              He = Hn - Ae.width + P;
              break;
          }
        }
        k.value = Le.toString() + "px", R.value = He.toString() + "px";
      });
    };
    return {
      attrs: _,
      listeners: $,
      show: o,
      animate: r,
      alignmentClass: O,
      placementClass: $e,
      top: k,
      left: R,
      tooltipID: a
    };
  },
  components: {
    Pointer: q7
  }
}), j7 = ["id"];
function Z7(e, o, r, s, a, u) {
  const c = k7("Pointer");
  return Ra(), dd(I7, null, [
    (Ra(), x7(A7, { to: "body" }, [
      em(B7, { css: e.animate }, {
        default: T7(() => [
          e.show ? (Ra(), dd("div", {
            key: 0,
            class: D7(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: N7({ left: e.left, top: e.top })
          }, [
            Dg("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, L7(e.title), 9, j7),
            em(c, { class: "tooltip-pointer" })
          ], 6)) : M7("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    O7(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var tm = /* @__PURE__ */ Ng(G7, [["render", Z7], ["__scopeId", "data-v-3da6b22e"]]);
const K7 = window.Vue.defineComponent, Pc = window.Vue.normalizeStyle, Rc = window.Vue.createElementVNode, qi = window.Vue.unref, nm = window.Vue.toHandlers, rm = window.Vue.mergeProps, om = window.Vue.withCtx, im = window.Vue.createVNode, J7 = window.Vue.renderList, X7 = window.Vue.Fragment, Hi = window.Vue.openBlock, zi = window.Vue.createElementBlock, sm = window.Vue.normalizeClass, am = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Q7 = { class: "row" }, e6 = /* @__PURE__ */ K7({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = new Date().getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => (Hi(), zi("div", Q7, [
      Rc("div", {
        class: "line-gray",
        style: Pc({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      im(qi(tm), {
        title: qi(Cn)(e.alarm.firstEventTime)
      }, {
        default: om(({ attrs: f, on: w }) => [
          Rc("div", rm({ class: "circle" }, f, nm(w), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Hi(!0), zi(X7, null, J7(o.events, (f, w) => (Hi(), zi("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[w + 1] ? (Hi(), zi("div", {
          key: 0,
          class: sm(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: Pc({
            width: s(f.createTime, o.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : am("", !0),
        im(qi(tm), {
          title: qi(Cn)(e.alarm.firstEventTime)
        }, {
          default: om(({ attrs: v, on: _ }) => [
            o.events[w + 1] ? (Hi(), zi("div", rm({ key: 0 }, v, nm(_), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : am("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      Rc("div", {
        class: sm(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: Pc({
          width: s(e.events[e.events.length - 1].createTime, qi(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const t6 = /* @__PURE__ */ de(e6, [["__scopeId", "data-v-3341d12d"]]), n6 = window.Vue.openBlock, r6 = window.Vue.createElementBlock, Lg = window.Vue.createElementVNode;
var o6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const i6 = {}, s6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, a6 = /* @__PURE__ */ Lg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), l6 = /* @__PURE__ */ Lg("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), u6 = [
  a6,
  l6
];
function c6(e, o) {
  return n6(), r6("svg", s6, u6);
}
var d6 = /* @__PURE__ */ o6(i6, [["render", c6]]);
const f6 = window.Vue.defineComponent, fd = window.Vue.createElementVNode, h6 = window.Vue.renderList, lm = window.Vue.Fragment, Fc = window.Vue.openBlock, Uc = window.Vue.createElementBlock, p6 = window.Vue.normalizeClass, w6 = window.Vue.unref, um = window.Vue.toDisplayString, v6 = window.Vue.pushScopeId, m6 = window.Vue.popScopeId, _6 = (e) => (v6("data-v-2e087f7b"), e = e(), m6(), e), g6 = /* @__PURE__ */ _6(() => /* @__PURE__ */ fd("strong", null, "Events:", -1)), $6 = /* @__PURE__ */ f6({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (Fc(), Uc(lm, null, [
      g6,
      (Fc(!0), Uc(lm, null, h6(o.events, (a) => (Fc(), Uc("div", {
        class: "event-description",
        key: a.id
      }, [
        fd("div", {
          class: p6(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        fd("div", null, um(w6(Cn)(a.createTime)) + " - " + um(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const y6 = /* @__PURE__ */ de($6, [["__scopeId", "data-v-2e087f7b"]]), b6 = window.Vue.defineComponent, V6 = window.Vue.normalizeClass, Nt = window.Vue.createElementVNode, Co = window.Vue.toDisplayString, gt = window.Vue.unref, So = window.Vue.createVNode, Mg = window.Vue.createTextVNode, C6 = window.Vue.renderList, cm = window.Vue.Fragment, Rn = window.Vue.openBlock, Rr = window.Vue.createElementBlock, dm = window.Vue.createBlock, Ia = window.Vue.createCommentVNode, S6 = window.Vue.normalizeStyle, E6 = window.Vue.pushScopeId, k6 = window.Vue.popScopeId, I6 = (e) => (E6("data-v-01717d0d"), e = e(), k6(), e), x6 = { class: "section detail" }, A6 = { class: "id" }, B6 = {
  key: 0,
  class: "section"
}, T6 = /* @__PURE__ */ I6(() => /* @__PURE__ */ Nt("div", { class: "id" }, "Alarms", -1)), D6 = { class: "action-btns" }, N6 = { class: "zoom" }, L6 = /* @__PURE__ */ Mg(" Zoom "), M6 = { class: "times" }, O6 = {
  key: 0,
  class: "timeline-container"
}, P6 = { class: "alarm-id" }, R6 = {
  key: 0,
  class: "panel"
}, ar = window.Vue.ref, F6 = window.Vue.watch, U6 = /* @__PURE__ */ b6({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var P, k;
    const o = e, r = pn(), s = ar(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = ar(a[0]), c = ar(o.width), f = ar(o.width), w = ar(new Date().getTime()), v = () => {
      var R, O;
      if (!o.situation.events) {
        const H = (O = (R = o.situation) == null ? void 0 : R.alarms) == null ? void 0 : O.map(($e) => $e.id);
        r.getEvents(o.situation.id, H);
      }
    };
    v();
    const _ = () => (w.value = new Date().getTime(), c.value / (Number(w.value) - Number(y.value))), $ = ar(o.situation.alarms), y = ar(
      ((k = _e.exports.minBy((P = o.situation) == null ? void 0 : P.alarms, "firstEventTime")) == null ? void 0 : k.firstEventTime) || new Date().getTime()
    ), I = ar(_());
    F6(o, () => {
      var R, O;
      y.value = ((O = _e.exports.minBy((R = o.situation) == null ? void 0 : R.alarms, "firstEventTime")) == null ? void 0 : O.firstEventTime) || new Date().getTime(), v(), c.value = f.value, I.value = _(), $.value = o.situation.alarms, u.value = a[0];
    });
    const D = (R) => {
      if ((R == null ? void 0 : R.id) === 1 && ($.value = o.situation.alarms), (R == null ? void 0 : R.id) === 2) {
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
      if ((R == null ? void 0 : R.id) === 3) {
        const O = _e.exports.reverse(
          _e.exports.sortBy(
            o.situation.alarms,
            (H) => Number(H.lastEventTime) - Number(H.firstEventTime)
          )
        );
        $.value = O;
      }
    }, M = () => {
      c.value += 100, I.value = _();
    }, L = () => {
      c.value -= 100, I.value = _();
    }, S = () => {
      c.value = f.value, I.value = _();
    }, T = (R) => {
      s.value = R;
    }, B = () => {
      s.value = 0;
    };
    return (R, O) => {
      var H, $e;
      return Rn(), Rr(cm, null, [
        Nt("div", x6, [
          Nt("div", {
            class: V6(["severity-line", [`${($e = (H = o.situation) == null ? void 0 : H.severity) == null ? void 0 : $e.toLowerCase()}-bg dark`]])
          }, null, 2),
          Nt("div", null, [
            Nt("div", A6, "Situation " + Co(o.situation.id), 1),
            Nt("div", null, " Duration: " + Co(gt(rl)(w.value, new Date(y.value))), 1)
          ])
        ]),
        $.value && $.value.length > 0 ? (Rn(), Rr("div", B6, [
          T6,
          Nt("div", D6, [
            So(gt(h7), {
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
            Nt("div", N6, [
              L6,
              Nt("div", null, [
                So(gt(Z), {
                  icon: gt(V7),
                  class: "zoom-icon",
                  onClick: M
                }, null, 8, ["icon"]),
                So(gt(Z), {
                  icon: gt(U_),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                So(gt(Z), {
                  icon: gt(d6),
                  class: "zoom-icon",
                  onClick: L
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Rn(), Rr("div", {
            key: 0,
            class: "alarms",
            style: S6({
              width: f.value + 50 + "px"
            })
          }, [
            Nt("div", M6, [
              Nt("div", null, Co(gt(Cn)(y.value)), 1),
              Nt("div", null, Co(gt(Cn)(w.value)), 1)
            ]),
            e.situation.events ? (Rn(), Rr("div", O6, [
              (Rn(!0), Rr(cm, null, C6($.value, (le) => (Rn(), Rr("div", {
                class: "timeline",
                key: le.id
              }, [
                Nt("div", P6, [
                  Mg(Co(le.nodeLabel) + " - " + Co(le.id) + " ", 1),
                  s.value === le.id ? (Rn(), dm(gt(Z), {
                    key: 0,
                    icon: gt(hl),
                    class: "zoom-icon expand",
                    onClick: B
                  }, null, 8, ["icon"])) : (Rn(), dm(gt(Z), {
                    key: 1,
                    icon: gt(m_),
                    class: "zoom-icon expand",
                    onClick: () => T(le.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                So(t6, {
                  alarm: le,
                  proportion: I.value,
                  "min-start": y.value,
                  events: o.situation.events[le.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === le.id ? (Rn(), Rr("div", R6, [
                  So(y6, {
                    events: o.situation.events[le.id]
                  }, null, 8, ["events"])
                ])) : Ia("", !0)
              ]))), 128))
            ])) : Ia("", !0)
          ], 4)) : Ia("", !0)
        ])) : Ia("", !0)
      ], 64);
    };
  }
});
const W6 = /* @__PURE__ */ de(U6, [["__scopeId", "data-v-01717d0d"]]), q6 = window.Vue.defineComponent, fn = window.Vue.createElementVNode, En = window.Vue.createTextVNode, Eo = window.Vue.unref, xa = window.Vue.withCtx, ko = window.Vue.createVNode, rt = window.Vue.openBlock, ot = window.Vue.createElementBlock, fm = window.Vue.createCommentVNode, H6 = window.Vue.resolveComponent, Io = window.Vue.toDisplayString, hm = window.Vue.renderList, pm = window.Vue.Fragment, z6 = window.Vue.pushScopeId, Y6 = window.Vue.popScopeId, $l = (e) => (z6("data-v-2f167fbc"), e = e(), Y6(), e), G6 = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, j6 = { class: "header" }, Z6 = /* @__PURE__ */ $l(() => /* @__PURE__ */ fn("h3", null, "AI Suggestions", -1)), K6 = /* @__PURE__ */ En(" Refresh "), J6 = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, X6 = /* @__PURE__ */ $l(() => /* @__PURE__ */ fn("span", null, "Loading\u2026", -1)), Q6 = {
  key: 1,
  class: "state-row",
  "data-test": "ai-absent"
}, eF = /* @__PURE__ */ En(" No AI suggestions are available for this situation. The Claude integration may be disabled, or the analysis has not run yet \u2014 check the "), tF = /* @__PURE__ */ En("configuration page"), nF = /* @__PURE__ */ En(" to enable it. "), rF = {
  key: 2,
  class: "state-row",
  "data-test": "ai-pending"
}, oF = {
  key: 3,
  class: "state-row failed",
  "data-test": "ai-failed"
}, iF = { class: "failed-msg" }, sF = /* @__PURE__ */ En(" The last Claude request failed: "), aF = /* @__PURE__ */ En(" Retry "), lF = {
  key: 4,
  class: "state-row",
  "data-test": "ai-error"
}, uF = /* @__PURE__ */ En(" Could not load suggestions. Please retry. "), cF = /* @__PURE__ */ En("Retry"), dF = {
  key: 5,
  "data-test": "ai-ready"
}, fF = {
  key: 0,
  class: "meta"
}, hF = /* @__PURE__ */ En(" Generated by "), pF = { class: "section" }, wF = /* @__PURE__ */ $l(() => /* @__PURE__ */ fn("h4", null, "Probable root causes", -1)), vF = {
  key: 0,
  "data-test": "ai-root-causes"
}, mF = {
  key: 1,
  class: "empty"
}, _F = { class: "section" }, gF = /* @__PURE__ */ $l(() => /* @__PURE__ */ fn("h4", null, "Possible resolutions", -1)), $F = {
  key: 0,
  "data-test": "ai-resolutions"
}, yF = {
  key: 1,
  class: "empty"
}, bF = window.Vue.computed, VF = window.Vue.onBeforeUnmount, CF = window.Vue.onMounted, wm = window.Vue.ref, SF = /* @__PURE__ */ q6({
  __name: "AISuggestionsTab",
  props: {
    situationId: null
  },
  setup(e) {
    const o = e, r = wm("loading"), s = wm(null), a = 5e3, u = 5 * 60 * 1e3;
    let c = null, f = 0;
    const w = () => {
      c !== null && (clearInterval(c), c = null);
    }, v = () => {
      r.value === "pending" && c === null && (f = Date.now(), c = setInterval(async () => {
        if (Date.now() - f > u) {
          w();
          return;
        }
        await _(), r.value !== "pending" && w();
      }, a));
    }, _ = async () => {
      const I = await f_(o.situationId);
      if (I === !1) {
        r.value = "error";
        return;
      }
      if (I === null) {
        r.value = "absent", s.value = null;
        return;
      }
      s.value = I, r.value = I.status;
    }, $ = async () => {
      r.value = "loading", w(), await _(), v();
    };
    CF(async () => {
      await _(), v();
    }), VF(() => w());
    const y = bF(() => {
      var I;
      return (I = s.value) != null && I.requestedAt ? new Date(s.value.requestedAt).toLocaleString() : "";
    });
    return (I, D) => {
      var L;
      const M = H6("router-link");
      return rt(), ot("div", G6, [
        fn("div", j6, [
          Z6,
          ko(Eo(ae), {
            secondary: "",
            "data-test": "ai-refresh",
            onClick: $
          }, {
            default: xa(() => [
              K6
            ]),
            _: 1
          })
        ]),
        r.value === "loading" ? (rt(), ot("div", J6, [
          ko(Eo(ss)),
          X6
        ])) : r.value === "absent" ? (rt(), ot("div", Q6, [
          eF,
          ko(M, { to: "/settings" }, {
            default: xa(() => [
              tF
            ]),
            _: 1
          }),
          nF
        ])) : r.value === "pending" ? (rt(), ot("div", rF, [
          ko(Eo(ss)),
          fn("span", null, " Analyzing alarms with Claude\u2026 requested at " + Io(Eo(y)) + ". ", 1)
        ])) : r.value === "failed" ? (rt(), ot("div", oF, [
          fn("div", iF, [
            sF,
            fn("code", null, Io(((L = s.value) == null ? void 0 : L.error) || "unknown error"), 1)
          ]),
          ko(Eo(ae), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: $
          }, {
            default: xa(() => [
              aF
            ]),
            _: 1
          })
        ])) : r.value === "error" ? (rt(), ot("div", lF, [
          uF,
          ko(Eo(ae), {
            secondary: "",
            onClick: $
          }, {
            default: xa(() => [
              cF
            ]),
            _: 1
          })
        ])) : r.value === "ready" && s.value ? (rt(), ot("div", dF, [
          s.value.completedAt ? (rt(), ot("div", fF, [
            hF,
            fn("strong", null, Io(s.value.model), 1),
            En(" at " + Io(new Date(s.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : fm("", !0),
          fn("div", pF, [
            wF,
            s.value.rootCauses.length ? (rt(), ot("ol", vF, [
              (rt(!0), ot(pm, null, hm(s.value.rootCauses, (S, T) => (rt(), ot("li", {
                key: `cause-${T}`
              }, Io(S), 1))), 128))
            ])) : (rt(), ot("div", mF, "No root causes returned."))
          ]),
          fn("div", _F, [
            gF,
            s.value.resolutions.length ? (rt(), ot("ol", $F, [
              (rt(!0), ot(pm, null, hm(s.value.resolutions, (S, T) => (rt(), ot("li", {
                key: `res-${T}`
              }, Io(S), 1))), 128))
            ])) : (rt(), ot("div", yF, "No resolutions returned."))
          ])
        ])) : fm("", !0)
      ]);
    };
  }
});
const EF = /* @__PURE__ */ de(SF, [["__scopeId", "data-v-2f167fbc"]]), kF = window.Vue.openBlock, IF = window.Vue.createElementBlock, xF = window.Vue.createElementVNode;
var AF = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const BF = {}, TF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, DF = /* @__PURE__ */ xF("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), NF = [
  DF
];
function LF(e, o) {
  return kF(), IF("svg", TF, NF);
}
var Ro = /* @__PURE__ */ AF(BF, [["render", LF]]);
const Og = window.Vue.defineComponent, Wc = window.Vue.ref, MF = window.Vue.toRef, qc = window.Vue.inject, vm = window.Vue.watch, OF = window.Vue.nextTick, mm = window.Vue.openBlock, _m = window.Vue.createElementBlock, Hc = window.Vue.createElementVNode, PF = window.Vue.normalizeClass, gm = window.Vue.renderSlot, $m = window.Vue.createCommentVNode, zc = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var RF = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const FF = {
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
}, UF = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, WF = Og({
  emits: UF,
  props: FF,
  setup(e, o) {
    const r = Wc(), s = Wc(!1), a = Wc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = MF(e, "modelValue"), f = qc("queueSnackbar", !1), w = qc("unqueueSnackbar", !1), v = qc("nextSnackbar", () => {
    }), _ = (M, L) => {
      let S, T, B = L;
      const P = () => {
        !S || (jr(S), S = 0, B -= Date.now() - T);
      }, k = () => {
        S || (T = Date.now(), S = Gr(M, B));
      };
      return k(), { pause: P, resume: k };
    }, $ = () => {
      s.value = !1, o.emit("closed"), v && v();
    }, y = (M) => {
      M.keyCode === ee.ESCAPE && (a.value = !1);
    }, I = () => {
      r.value.pause();
    }, D = () => {
      a.value && r.value.resume();
    };
    return vm(c, (M) => {
      M ? OF(() => {
        f === !1 ? a.value = M : f(u, a);
      }) : w === !1 ? a.value = M : w(u);
    }, { immediate: !0 }), vm(a, (M) => {
      M ? (s.value = !0, r.value = _(() => {
        a.value = !1;
      }, e.timeout)) : (o.emit("update:modelValue", !1), I());
    }), {
      hideTimeout: r,
      contentShow: s,
      internalValue: a,
      id: u,
      incomingValue: c,
      closed: $,
      keyPressed: y,
      stopTimer: I,
      resumeTimer: D
    };
  }
}), qF = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, HF = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, zF = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, YF = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function GF(e, o, r, s, a, u) {
  return e.modelValue || e.contentShow ? (mm(), _m("div", qF, [
    Hc("div", {
      class: PF(["feather-snackbar", {
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
      Hc("div", HF, [
        e.contentShow ? (mm(), _m("div", zF, [
          gm(e.$slots, "default", {}, void 0, !0)
        ])) : $m("", !0)
      ]),
      Hc("div", YF, [
        gm(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : $m("", !0);
}
var yl = /* @__PURE__ */ RF(WF, [["render", GF], ["__scopeId", "data-v-5cf64a62"]]);
const jF = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
Og({
  props: jF,
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
    return zc("queueSnackbar", s), zc("unqueueSnackbar", a), zc("nextSnackbar", u), {
      curr: e,
      queue: o,
      showSnackbar: r,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const ZF = window.Vue.defineComponent, xe = window.Vue.unref, it = window.Vue.createVNode, as = window.Vue.createElementVNode, $t = window.Vue.withCtx, Fr = window.Vue.openBlock, Yc = window.Vue.createBlock, ym = window.Vue.createCommentVNode, ds = window.Vue.createTextVNode, Aa = window.Vue.createElementBlock, bm = window.Vue.toDisplayString, KF = window.Vue.pushScopeId, JF = window.Vue.popScopeId, Rd = (e) => (KF("data-v-a5b2d880"), e = e(), JF(), e), XF = { id: "cont" }, QF = { class: "btns-navigation" }, e9 = /* @__PURE__ */ Rd(() => /* @__PURE__ */ as("span", null, "Situation List", -1)), t9 = /* @__PURE__ */ Rd(() => /* @__PURE__ */ as("span", null, "Show Previous Situation ", -1)), n9 = /* @__PURE__ */ Rd(() => /* @__PURE__ */ as("span", null, "Show Next Situation", -1)), r9 = { key: 1 }, o9 = {
  key: 0,
  class: "detail"
}, i9 = /* @__PURE__ */ ds("Details"), s9 = /* @__PURE__ */ ds("Metrics"), a9 = /* @__PURE__ */ ds("AI Suggestions"), l9 = {
  key: 1,
  class: "noSituation"
}, u9 = /* @__PURE__ */ ds("dismiss"), Ur = window.Vue.ref, Vm = window.Vue.watch, c9 = window.Vue.onMounted, d9 = window.VueRouter.useRoute, f9 = /* @__PURE__ */ ZF({
  __name: "SituationDetail",
  setup(e) {
    const o = mr(), r = d9(), s = parseInt(r.params.id), a = Ur(s), u = pn(), c = ml(), f = Ur(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const w = Ur(), v = Ur(), _ = Ur(!0), $ = Ur(
      u.filteredSituations.findIndex((L) => L === a.value)
    ), y = Ur(!1);
    Vm(
      () => u.situationDetail,
      () => {
        w.value = u.situationDetail, _.value = !1, u.getUnassignedAlarms();
      }
    ), c9(() => {
      var S;
      const L = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      v.value = L - 90;
    });
    const I = () => {
      o.push({
        name: "situations"
      });
    }, D = (L) => {
      const S = $.value, T = u.filteredSituations[S + L];
      o.push({
        name: "situationDetail",
        params: {
          id: T
        }
      });
    };
    Vm(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), $.value = u.filteredSituations.findIndex((L) => L == a.value);
    }), c.$subscribe((L, S) => {
      y.value = S.showError;
    });
    const M = (L) => {
      f.value = L || 0;
    };
    return (L, S) => (Fr(), Aa("div", XF, [
      as("div", QF, [
        it(xe(ae), {
          primary: "",
          onClick: S[0] || (S[0] = () => I())
        }, {
          default: $t(() => [
            it(xe(Z), {
              icon: xe(Ro),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            e9
          ]),
          _: 1
        }),
        as("div", null, [
          it(xe(ae), {
            disabled: !xe(u).filteredSituations[$.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => D(-1))
          }, {
            default: $t(() => [
              it(xe(Z), {
                icon: xe(Ro),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              t9
            ]),
            _: 1
          }, 8, ["disabled"]),
          it(xe(ae), {
            disabled: !xe(u).filteredSituations[$.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => D(1))
          }, {
            default: $t(() => [
              n9,
              it(xe(Z), {
                icon: xe(Ro),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _.value ? (Fr(), Yc(xe(ss), {
        key: 0,
        class: "spinner"
      })) : (Fr(), Aa("div", r9, [
        w.value ? (Fr(), Aa("div", o9, [
          it(xe(B4), { "onUpdate:modelValue": M }, {
            tabs: $t(() => [
              it(xe(mc), null, {
                default: $t(() => [
                  i9
                ]),
                _: 1
              }),
              it(xe(mc), null, {
                default: $t(() => [
                  s9
                ]),
                _: 1
              }),
              it(xe(mc), { "data-test": "ai-suggestions-tab" }, {
                default: $t(() => [
                  a9
                ]),
                _: 1
              })
            ]),
            default: $t(() => [
              it(xe(_c), { class: "panel" }, {
                default: $t(() => [
                  it(z5, { "situation-info": w.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              it(xe(_c), { class: "panel" }, {
                default: $t(() => [
                  v.value && f.value == 1 ? (Fr(), Yc(W6, {
                    key: 0,
                    situation: w.value,
                    width: v.value
                  }, null, 8, ["situation", "width"])) : ym("", !0)
                ]),
                _: 1
              }),
              it(xe(_c), { class: "panel" }, {
                default: $t(() => [
                  f.value == 2 ? (Fr(), Yc(EF, {
                    key: 0,
                    "situation-id": w.value.id
                  }, null, 8, ["situation-id"])) : ym("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (Fr(), Aa("div", l9, " Error. The situation " + bm(xe(s)) + " does not exist. ", 1))
      ])),
      it(xe(yl), {
        modelValue: y.value,
        "onUpdate:modelValue": S[4] || (S[4] = (T) => y.value = T),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: $t(() => [
          it(xe(ae), {
            onClick: S[3] || (S[3] = (T) => y.value = !1),
            text: ""
          }, {
            default: $t(() => [
              u9
            ]),
            _: 1
          })
        ]),
        default: $t(() => [
          ds(bm(xe(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const h9 = /* @__PURE__ */ de(f9, [["__scopeId", "data-v-a5b2d880"]]), p9 = window.Vue.defineComponent, Ze = window.Vue.unref, jt = window.Vue.createVNode, ht = window.Vue.createElementVNode, xo = window.Vue.withCtx, Ao = window.Vue.openBlock, Yi = window.Vue.createElementBlock, w9 = window.Vue.createCommentVNode, v9 = window.Vue.toDisplayString, Fd = window.Vue.createTextVNode, m9 = window.Vue.normalizeClass, _9 = window.Vue.renderList, g9 = window.Vue.Fragment, $9 = window.Vue.createBlock, y9 = window.Vue.pushScopeId, b9 = window.Vue.popScopeId, fs = (e) => (y9("data-v-1a57a9f3"), e = e(), b9(), e), V9 = { class: "container" }, C9 = /* @__PURE__ */ fs(() => /* @__PURE__ */ ht("span", null, "Situation List", -1)), S9 = /* @__PURE__ */ fs(() => /* @__PURE__ */ ht("h2", null, "New Situation", -1)), E9 = { class: "form" }, k9 = { class: "fields" }, I9 = {
  key: 0,
  class: "errorList"
}, x9 = { class: "footer" }, A9 = /* @__PURE__ */ fs(() => /* @__PURE__ */ ht("span", null, "Clear", -1)), B9 = /* @__PURE__ */ fs(() => /* @__PURE__ */ ht("span", null, "Add Situation", -1)), T9 = { class: "alarm-column" }, D9 = { class: "header-alarms" }, N9 = /* @__PURE__ */ fs(() => /* @__PURE__ */ ht("h3", null, "Add Unassociated Alarms", -1)), L9 = /* @__PURE__ */ Fd(" Total Alarms Added: "), M9 = { class: "total" }, O9 = { class: "list" }, P9 = { class: "filters" }, R9 = {
  key: 0,
  class: "alarms"
}, F9 = /* @__PURE__ */ Fd(" Error on creating new situation :( "), U9 = /* @__PURE__ */ Fd("dismiss"), lr = window.Vue.ref, W9 = window.Vue.watch, q9 = /* @__PURE__ */ p9({
  __name: "AddSituation",
  setup(e) {
    const o = mr(), r = pn(), s = lr(), a = lr(""), u = lr(), c = lr(""), f = lr([]), w = lr(!1), v = lr(), _ = lr(r.unassignedAlarms);
    _.value.length || r.getUnassignedAlarms(), W9(
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
      w.value = !1, _e.exports.includes(f.value, S) ? _e.exports.remove(f.value, (T) => T === S) : f.value.push(S);
    }, I = () => {
      const S = "This field should not be empty";
      let T = !0;
      return s.value || (a.value = S, T = !1), u.value || (c.value = S, T = !1), f.value.length < 2 && (w.value = !0, T = !1), T;
    }, D = async () => {
      if (I()) {
        const S = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: s.value
        };
        await nI(S) ? o.push({
          name: "situations"
        }) : v.value = !0;
      }
    }, M = () => {
      s.value = "", u.value = "", f.value = [], _.value = r.unassignedAlarms;
    }, L = (S) => {
      _.value = S;
    };
    return (S, T) => (Ao(), Yi("div", V9, [
      jt(Ze(ae), {
        primary: "",
        onClick: T[0] || (T[0] = () => $()),
        class: "back-btn"
      }, {
        default: xo(() => [
          jt(Ze(Z), {
            icon: Ze(Ro),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          C9
        ]),
        _: 1
      }),
      S9,
      ht("div", E9, [
        ht("div", k9, [
          jt(Ze(ld), {
            modelValue: s.value,
            "onUpdate:modelValue": T[1] || (T[1] = (B) => s.value = B),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          jt(Ze(ld), {
            modelValue: u.value,
            "onUpdate:modelValue": T[2] || (T[2] = (B) => u.value = B),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          w.value ? (Ao(), Yi("div", I9, " You must add at least 2 alarms. ")) : w9("", !0),
          ht("div", x9, [
            jt(Ze(ae), {
              class: "btn",
              onClick: M
            }, {
              default: xo(() => [
                jt(Ze(Z), {
                  icon: Ze(jo),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                A9
              ]),
              _: 1
            }),
            jt(Ze(ae), {
              class: "btn-add",
              onClick: D
            }, {
              default: xo(() => [
                jt(Ze(Z), {
                  icon: Ze(vl),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                B9
              ]),
              _: 1
            })
          ])
        ]),
        ht("div", T9, [
          ht("div", D9, [
            N9,
            ht("div", null, [
              ht("div", {
                class: m9(["totalAlarms", { errorList: w.value }])
              }, [
                L9,
                ht("span", M9, v9(Ze(f).length), 1)
              ], 2)
            ])
          ]),
          ht("div", O9, [
            ht("div", P9, [
              jt(ni, {
                list: Ze(r).unassignedAlarms,
                onFilteredList: L,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            _.value.length ? (Ao(), Yi("div", R9, [
              (Ao(!0), Yi(g9, null, _9(_.value, (B) => (Ao(), Yi("div", {
                key: B.id,
                class: "alarm-card"
              }, [
                jt(Pd, {
                  selected: Ze(_e.exports.includes)(Ze(f), B.id),
                  alarm: B,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Ao(), $9(ri, { key: 1 }))
          ])
        ])
      ]),
      jt(Ze(yl), {
        modelValue: v.value,
        "onUpdate:modelValue": T[4] || (T[4] = (B) => v.value = B),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: xo(() => [
          jt(Ze(ae), {
            onClick: T[3] || (T[3] = (B) => v.value = !1),
            text: ""
          }, {
            default: xo(() => [
              U9
            ]),
            _: 1
          })
        ]),
        default: xo(() => [
          F9
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const H9 = /* @__PURE__ */ de(q9, [["__scopeId", "data-v-1a57a9f3"]]), z9 = window.Vue.defineComponent, Y9 = window.Vue.createElementVNode, G9 = window.Vue.createTextVNode, j9 = window.Vue.unref, Z9 = window.Vue.withCtx, K9 = window.Vue.createVNode, J9 = window.Vue.Fragment, X9 = window.Vue.openBlock, Q9 = window.Vue.createElementBlock, eU = window.Vue.pushScopeId, tU = window.Vue.popScopeId, nU = (e) => (eU("data-v-bcb7dcc6"), e = e(), tU(), e), rU = /* @__PURE__ */ nU(() => /* @__PURE__ */ Y9("div", { class: "main" }, "Something bad is happening...", -1)), oU = /* @__PURE__ */ G9(" Reload "), iU = /* @__PURE__ */ z9({
  __name: "ErrorPage",
  setup(e) {
    const o = mr(), r = () => {
      o.push({ name: "situations" });
    };
    return (s, a) => (X9(), Q9(J9, null, [
      rU,
      K9(j9(ae), {
        primary: "",
        onClick: r
      }, {
        default: Z9(() => [
          oU
        ]),
        _: 1
      })
    ], 64));
  }
});
const sU = /* @__PURE__ */ de(iU, [["__scopeId", "data-v-bcb7dcc6"]]), aU = window.Vue.defineComponent, ft = window.Vue.unref, cn = window.Vue.createVNode, dr = window.Vue.createElementVNode, Gi = window.Vue.withCtx, Wr = window.Vue.openBlock, Cm = window.Vue.createBlock, lU = window.Vue.renderList, uU = window.Vue.Fragment, ji = window.Vue.createElementBlock, cU = window.Vue.toDisplayString, Pg = window.Vue.createTextVNode, dU = window.Vue.pushScopeId, fU = window.Vue.popScopeId, Ud = (e) => (dU("data-v-6078e4ad"), e = e(), fU(), e), hU = { class: "container" }, pU = { class: "nav-btns" }, wU = /* @__PURE__ */ Ud(() => /* @__PURE__ */ dr("span", null, "Situation List", -1)), vU = /* @__PURE__ */ Ud(() => /* @__PURE__ */ dr("h2", null, "List Unassociated Alarms", -1)), mU = { class: "content" }, _U = { class: "filters" }, gU = { class: "list" }, $U = { class: "action-btns" }, yU = /* @__PURE__ */ Ud(() => /* @__PURE__ */ dr("span", null, "Move", -1)), bU = { key: 1 }, VU = {
  key: 0,
  class: "alarms"
}, CU = /* @__PURE__ */ Pg("dismiss"), ur = window.Vue.ref, SU = window.Vue.watch, EU = window.Vue.markRaw, kU = /* @__PURE__ */ aU({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = EU({
      ArrowBack: Ro,
      ExitToApp: ud
    }), r = mr(), s = pn();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = ur([]), u = ur([]), c = ur(!1), f = ur(!1), w = ur(""), v = ur(!1), _ = ur(!1), $ = ur(!0);
    SU(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, $.value = !1;
      }
    );
    const y = (T) => {
      _e.exports.includes(u.value, T) ? _e.exports.remove(u.value, (B) => B === T) : u.value.push(T);
    }, I = () => {
      c.value ? u.value = a.value.map((T) => T.id) : u.value = [];
    }, D = async (T) => {
      await p_(T, u.value) ? s.getUnassignedAlarms() : (v.value = !0, _.value = !0, w.value = "Error on moving the alarms :("), f.value = !1;
    }, M = () => {
      r.push({
        name: "situations"
      });
    }, L = () => {
      u.value.length ? f.value = !0 : (v.value = !0, _.value = !1, w.value = "You need to choose at least one alarm!");
    }, S = (T) => {
      a.value = T;
    };
    return (T, B) => (Wr(), ji("div", hU, [
      dr("div", pU, [
        cn(ft(ae), {
          primary: "",
          onClick: B[0] || (B[0] = () => M())
        }, {
          default: Gi(() => [
            cn(ft(Z), {
              icon: ft(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            wU
          ]),
          _: 1
        }),
        cn(z_)
      ]),
      vU,
      dr("div", mU, [
        dr("div", _U, [
          cn(ni, {
            list: ft(s).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        dr("div", gU, [
          dr("div", $U, [
            cn(ft(zo), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                B[1] || (B[1] = (P) => c.value = P),
                I
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            cn(ft(ae), { onClick: L }, {
              default: Gi(() => [
                cn(ft(Z), {
                  icon: ft(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                yU
              ]),
              _: 1
            })
          ]),
          $.value ? (Wr(), Cm(ft(ss), {
            key: 0,
            class: "spinner"
          })) : (Wr(), ji("div", bU, [
            ft(a).length ? (Wr(), ji("div", VU, [
              (Wr(!0), ji(uU, null, lU(ft(a), (P) => (Wr(), ji("div", {
                key: P.id,
                class: "card"
              }, [
                cn(Pd, {
                  selected: ft(_e.exports.includes)(ft(u), P.id),
                  alarm: P,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Wr(), Cm(ri, { key: 1 }))
          ]))
        ])
      ]),
      cn(kg, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: D,
        onDrawerClosed: B[2] || (B[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      cn(ft(yl), {
        modelValue: v.value,
        "onUpdate:modelValue": B[4] || (B[4] = (P) => v.value = P),
        right: "",
        error: _.value,
        timeout: 6e3
      }, {
        button: Gi(() => [
          cn(ft(ae), {
            onClick: B[3] || (B[3] = (P) => v.value = !1),
            text: ""
          }, {
            default: Gi(() => [
              CU
            ]),
            _: 1
          })
        ]),
        default: Gi(() => [
          Pg(cU(w.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const IU = /* @__PURE__ */ de(kU, [["__scopeId", "data-v-6078e4ad"]]), xU = window.Vue.defineComponent, Gc = window.Vue.unref, AU = window.Vue.createVNode, BU = window.Vue.createElementVNode, TU = window.Vue.withCtx, DU = window.Vue.openBlock, NU = window.Vue.createBlock, LU = window.Vue.pushScopeId, MU = window.Vue.popScopeId, OU = (e) => (LU("data-v-17251e76"), e = e(), MU(), e), PU = /* @__PURE__ */ OU(() => /* @__PURE__ */ BU("span", null, "Situation List", -1)), RU = window.Vue.markRaw, FU = /* @__PURE__ */ xU({
  __name: "SituationListBtn",
  setup(e) {
    const o = mr(), r = RU({
      ArrowBack: Ro
    }), s = () => {
      o.push({
        name: "situations"
      });
    };
    return (a, u) => (DU(), NU(Gc(ae), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: TU(() => [
        AU(Gc(Z), {
          icon: Gc(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        PU
      ]),
      _: 1
    }));
  }
});
const UU = /* @__PURE__ */ de(FU, [["__scopeId", "data-v-17251e76"]]);
var WU = Object.defineProperty, qU = Object.defineProperties, HU = Object.getOwnPropertyDescriptors, Sm = Object.getOwnPropertySymbols, zU = Object.prototype.hasOwnProperty, YU = Object.prototype.propertyIsEnumerable, Em = (e, o, r) => o in e ? WU(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Mo = (e, o) => {
  for (var r in o || (o = {}))
    zU.call(o, r) && Em(e, r, o[r]);
  if (Sm)
    for (var r of Sm(o))
      YU.call(o, r) && Em(e, r, o[r]);
  return e;
}, GU = (e, o) => qU(e, HU(o));
const jU = window.Vue.defineComponent, km = window.Vue.toRef, ZU = window.Vue.computed, KU = window.Vue.ref, Im = window.Vue.resolveComponent, xm = window.Vue.openBlock, Am = window.Vue.createElementBlock, Bm = window.Vue.mergeProps, Tm = window.Vue.createVNode, JU = window.Vue.normalizeClass, Ba = window.Vue.withCtx, Dm = window.Vue.renderSlot, XU = window.Vue.createElementVNode, QU = window.Vue.toHandlers, eW = window.Vue.toDisplayString, tW = window.Vue.createCommentVNode, nW = Mo(Mo({
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
}, al), Qo), rW = {
  "update:modelValue": (e) => !0
};
var oW = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const iW = jU({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: rW,
  props: nW,
  setup(e, o) {
    ei(e), ll(e);
    const r = km(e, "id"), s = ZU(() => r.value ? r.value : ce("feather-input-label")), a = KU(), { validate: u } = Jo(s, a, e.label, e.schema, km(e, "error"));
    return Mo({
      inputId: s,
      internalValue: a,
      validate: u
    }, Xo(o.attrs));
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
      const e = Mo({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), GU(Mo(Mo({}, e), this.listeners), {
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
    InputSubText: Ko,
    InputWrapper: sl
  }
}), sW = ["maxlength"], aW = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function lW(e, o, r, s, a, u) {
  const c = Im("InputWrapper"), f = Im("InputSubText");
  return xm(), Am("div", Bm(e.inherittedAttrs, { class: "feather-input-container" }), [
    Tm(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: JU(["feather-input-content", e.contentCls])
    }, {
      pre: Ba(() => [
        Dm(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: Ba(() => [
        Dm(e.$slots, "post", {}, void 0, !0)
      ]),
      default: Ba(() => [
        XU("input", Bm(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, QU(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, sW)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Tm(f, { id: e.descriptionId }, {
      right: Ba(() => [
        e.maxlength ? (xm(), Am("div", aW, eW(e.charCount), 1)) : tW("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Bo = /* @__PURE__ */ oW(iW, [["render", lW], ["__scopeId", "data-v-bf37b0d6"]]);
const uW = window.Vue.openBlock, cW = window.Vue.createElementBlock, Wd = window.Vue.createElementVNode;
var dW = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fW = {}, hW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pW = /* @__PURE__ */ Wd("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), wW = /* @__PURE__ */ Wd("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), vW = /* @__PURE__ */ Wd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), mW = [
  pW,
  wW,
  vW
];
function _W(e, o) {
  return uW(), cW("svg", hW, mW);
}
var gW = /* @__PURE__ */ dW(fW, [["render", _W]]);
const $W = window.Vue.openBlock, yW = window.Vue.createElementBlock, Rg = window.Vue.createElementVNode;
var bW = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const VW = {}, CW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, SW = /* @__PURE__ */ Rg("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), EW = /* @__PURE__ */ Rg("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), kW = [
  SW,
  EW
];
function IW(e, o) {
  return $W(), yW("svg", CW, kW);
}
var xW = /* @__PURE__ */ bW(VW, [["render", IW]]);
const AW = window.Vue.defineComponent, Me = window.Vue.createVNode, W = window.Vue.createElementVNode, z = window.Vue.unref, at = window.Vue.createTextVNode, Zt = window.Vue.withCtx, Dt = window.Vue.openBlock, gn = window.Vue.createElementBlock, Kt = window.Vue.createCommentVNode, jc = window.Vue.createBlock, Ue = window.Vue.toDisplayString, Nm = window.Vue.Fragment, BW = window.Vue.createStaticVNode, TW = window.Vue.pushScopeId, DW = window.Vue.popScopeId, Ne = (e) => (TW("data-v-4b49dbf7"), e = e(), DW(), e), NW = { class: "container" }, LW = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("h3", { "data-test": "page-title" }, "Correlation Engine Configuration Page", -1)), MW = { class: "section" }, OW = { class: "title" }, PW = /* @__PURE__ */ at(" Choose the correlation engine that ALEC will use (see "), RW = ["href"], FW = /* @__PURE__ */ at(" for more information): "), UW = /* @__PURE__ */ at("Clustering"), WW = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("div", { class: "hellinger" }, [
  /* @__PURE__ */ W("strong", null, "Hellinger distance")
], -1)), qW = /* @__PURE__ */ at(" LLM Based "), HW = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), zW = {
  class: "section",
  "data-test": "claude-section"
}, YW = { class: "title-row" }, GW = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("div", { class: "title" }, "Claude Root Cause Analysis", -1)), jW = ["aria-expanded"], ZW = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("div", { class: "claude-help" }, " When a new situation is created, ALEC will ask Claude to suggest up to 3 probable root causes and 3 possible resolutions based on the clustered alarms. Suggestions appear on the situation detail page. The API key is stored on the OpenNMS server and applies to all users of this plugin. ", -1)), KW = {
  key: 0,
  class: "help-popover",
  "data-test": "claude-key-help-popover"
}, JW = /* @__PURE__ */ BW('<strong data-v-4b49dbf7>How to get an Anthropic API key:</strong><ol data-v-4b49dbf7><li data-v-4b49dbf7> Go to <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" data-v-4b49dbf7>console.anthropic.com</a> and sign in (or create an account). </li><li data-v-4b49dbf7> Add a payment method under <em data-v-4b49dbf7>Billing \u2192 Add payment method</em>. Anthropic requires this before any API key can be created. </li><li data-v-4b49dbf7> Open <em data-v-4b49dbf7>API Keys</em> in the left sidebar and click <em data-v-4b49dbf7>Create Key</em>. Give it a descriptive name (e.g. <code data-v-4b49dbf7>alec-claude-suggestions</code>) so you can revoke it later without affecting other integrations. </li><li data-v-4b49dbf7><strong data-v-4b49dbf7>Copy the key immediately</strong> \u2014 it starts with <code data-v-4b49dbf7>sk-ant-\u2026</code> and Anthropic only shows it once. </li><li data-v-4b49dbf7> Paste it into the field below and click <em data-v-4b49dbf7>Save Changes</em>. The key is stored on the OpenNMS server; it is never returned to the browser after saving. </li></ol><p class="pricing-hint" data-v-4b49dbf7> Pricing for the Sonnet 4.6 model that ALEC uses: $3 / $15 per million input / output tokens (cache reads cheaper). A single situation analysis is typically a few hundred tokens \u2014 fractions of a cent. Track 30-day usage in the panel below after you save. </p>', 3), XW = [
  JW
], QW = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("strong", null, "Claude Enabled Root Cause Analysis", -1)), eq = {
  key: 1,
  class: "caption",
  "data-test": "claude-no-key-hint"
}, tq = { class: "claude-key-row" }, nq = /* @__PURE__ */ at(" Clear Key "), rq = {
  key: 2,
  class: "claude-key-saved",
  "data-test": "claude-key-saved"
}, oq = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("span", null, " API key on file. The stored key is never sent back to the browser \u2014 leave the field blank to keep it, or paste a new one to replace it. ", -1)), iq = {
  key: 3,
  class: "caption",
  "data-test": "claude-cleared-hint"
}, sq = {
  key: 4,
  class: "claude-usage",
  "data-test": "claude-usage"
}, aq = { class: "usage-summary" }, lq = { class: "usage-label" }, uq = ["title"], cq = ["title"], dq = {
  key: 0,
  class: "usage-details",
  "data-test": "claude-usage-details"
}, fq = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("dt", null, "Input", -1)), hq = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("dt", null, "Output", -1)), pq = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("dt", null, "Cache read", -1)), wq = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("dt", null, "Cache create", -1)), vq = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("dt", null, "Calls", -1)), mq = { class: "muted" }, _q = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("dt", null, "Cache hit", -1)), gq = { class: "pricing-note" }, $q = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, yq = { class: "title-row" }, bq = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("div", { class: "title" }, "Correlation variables", -1)), Vq = ["aria-expanded"], Cq = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, Sq = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("strong", null, "Alpha (\u03B1)", -1)), Eq = /* @__PURE__ */ at(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), kq = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("strong", null, "Beta (\u03B2)", -1)), Iq = /* @__PURE__ */ at(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), xq = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("code", null, "[0, 1]", -1)), Aq = /* @__PURE__ */ at(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), Bq = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("strong", null, "Epsilon (\u03B5)", -1)), Tq = /* @__PURE__ */ at(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), Dq = { "data-test": "help-hellinger-w" }, Nq = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("strong", null, "Hellinger w", -1)), Lq = /* @__PURE__ */ at(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), Mq = { "data-test": "help-hellinger-bias" }, Oq = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("strong", null, "Hellinger bias", -1)), Pq = /* @__PURE__ */ at(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), Rq = { class: "variables" }, Fq = { class: "action-row" }, Uq = /* @__PURE__ */ at(" Close All Open Situations "), Wq = /* @__PURE__ */ at(" Re-Evaluate All Open Alarms "), qq = /* @__PURE__ */ Ne(() => /* @__PURE__ */ W("span", null, "Save Changes", -1)), Hq = /* @__PURE__ */ at("dismiss"), Zc = window.Vue.computed, zq = window.Vue.markRaw, Yq = window.Vue.onMounted, Ke = window.Vue.ref, Gq = /* @__PURE__ */ AW({
  __name: "AccountSettings",
  setup(e) {
    var Le, He, Hn, _r, Ct, hs, ps, ws, kn, gr, vs, zn, Yn, ms, $r;
    const o = (ue) => ue >= 1e6 ? (ue / 1e6).toFixed(1) + "M" : ue >= 1e3 ? (ue / 1e3).toFixed(1) + "K" : String(ue), r = (ue) => ue < 0.01 ? "~$0.00" : "~$" + ue.toFixed(2), s = zq({
      MarkComplete: Za,
      Help: gW,
      Restore: xW
    }), a = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, u = Ho(), c = Ke(((Le = u.engineInfo) == null ? void 0 : Le.engineName) || Xe.ENGINE_DBSCAN), f = Ke(
      u.engineInfo ? u.engineInfo.distanceMeasureName === Xe.HELLINGER_OPTION : !0
    ), w = Ke((Hn = (He = u.engineInfo) == null ? void 0 : He.alpha) != null ? Hn : a.alpha), v = Ke((Ct = (_r = u.engineInfo) == null ? void 0 : _r.beta) != null ? Ct : a.beta), _ = Ke((ps = (hs = u.engineInfo) == null ? void 0 : hs.epsilon) != null ? ps : a.epsilon), $ = Ke(
      (kn = (ws = u.engineInfo) == null ? void 0 : ws.hellingerW) != null ? kn : a.hellingerW
    ), y = Ke(
      (vs = (gr = u.engineInfo) == null ? void 0 : gr.hellingerBias) != null ? vs : a.hellingerBias
    ), I = Zc(() => c.value === Xe.ENGINE_DBSCAN), D = Zc(() => I.value && f.value), M = Ke((Yn = (zn = u.claudeConfig) == null ? void 0 : zn.enabled) != null ? Yn : !1), L = Ke(""), S = Ke(($r = (ms = u.claudeConfig) == null ? void 0 : ms.apiKeyPresent) != null ? $r : !1), T = Ke(!1), B = Zc(
      () => (!S.value || T.value) && L.value.trim().length === 0
    ), P = () => {
      L.value = "", T.value = !0, S.value = !1, M.value = !1;
    }, k = Ke(!1), R = Ke(!1), O = Ke(!1), H = Ke(!1), $e = Ke(""), le = Ke(!1);
    Yq(async () => {
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
    }, ke = () => {
      if (T.value)
        return { enabled: !1, clearApiKey: !0 };
      const ue = L.value.trim(), te = { enabled: M.value };
      return ue.length > 0 && (te.apiKey = ue), te;
    }, Ae = async () => {
      var Gn, _s, Pt, ii;
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
      ), ne = await u.setClaudeConfig(ke());
      ne && (L.value = "", T.value = !1, S.value = (_s = (Gn = u.claudeConfig) == null ? void 0 : Gn.apiKeyPresent) != null ? _s : !1, M.value = (ii = (Pt = u.claudeConfig) == null ? void 0 : Pt.enabled) != null ? ii : !1, u.getClaudeUsage(30)), te && ne ? (u.getEngineInfo(), ge("The settings were saved!", !1)) : ge(
        te && !ne ? "Engine settings saved, but Claude configuration could not be saved (an API key is required to enable the integration)." : "Error on saving the settings",
        !0
      );
    }, we = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const ue = await rI();
      ge(
        ue ? "All open situations were closed." : "Failed to close situations.",
        !ue
      );
    }, Pe = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const ue = await oI();
      ge(
        ue ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !ue
      );
    };
    return (ue, te) => (Dt(), gn(Nm, null, [
      Me(UU),
      W("div", NW, [
        LW,
        W("div", MW, [
          W("div", OW, [
            PW,
            W("a", {
              target: "_blank",
              href: z(Xe).URL_DOCUMENTATION
            }, "Correlation Engines documentation", 8, RW),
            FW
          ]),
          Me(z(F_), {
            vertical: "",
            modelValue: c.value,
            "onUpdate:modelValue": te[1] || (te[1] = (ne) => c.value = ne),
            label: "",
            hideLabel: ""
          }, {
            default: Zt(() => [
              Me(z(sd), {
                class: "radio-item",
                value: z(Xe).ENGINE_DBSCAN
              }, {
                default: Zt(() => [
                  UW
                ]),
                _: 1
              }, 8, ["value"]),
              Me(z(zo), {
                modelValue: f.value,
                "onUpdate:modelValue": te[0] || (te[0] = (ne) => f.value = ne),
                disabled: !z(I),
                class: "checkbox"
              }, {
                default: Zt(() => [
                  WW
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              Me(z(sd), {
                class: "radio-item",
                value: z(Xe).ENGINE_LLM,
                disabled: "",
                "data-test": "engine-llm"
              }, {
                default: Zt(() => [
                  qW
                ]),
                _: 1
              }, 8, ["value"]),
              HW
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        W("div", zW, [
          W("div", YW, [
            GW,
            W("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": R.value,
              "aria-label": "How to get an Anthropic API key",
              "data-test": "claude-key-help",
              onClick: te[2] || (te[2] = (ne) => R.value = !R.value)
            }, [
              Me(z(Z), {
                icon: z(s).Help
              }, null, 8, ["icon"])
            ], 8, jW)
          ]),
          ZW,
          R.value ? (Dt(), gn("div", KW, XW)) : Kt("", !0),
          Me(z(zo), {
            modelValue: M.value,
            "onUpdate:modelValue": te[3] || (te[3] = (ne) => M.value = ne),
            disabled: z(B),
            class: "checkbox",
            "data-test": "claude-enabled"
          }, {
            default: Zt(() => [
              QW
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          z(B) ? (Dt(), gn("div", eq, " Enter an API key to enable. ")) : Kt("", !0),
          W("div", tq, [
            Me(z(Bo), {
              modelValue: L.value,
              "onUpdate:modelValue": te[4] || (te[4] = (ne) => L.value = ne),
              type: "password",
              autocomplete: "new-password",
              label: S.value && !T.value ? "Anthropic API key \u2014 saved (paste a new key to replace)" : "Anthropic API key",
              "data-test": "claude-api-key",
              class: "claude-key-input"
            }, null, 8, ["modelValue", "label"]),
            S.value && !T.value ? (Dt(), jc(z(ae), {
              key: 0,
              secondary: "",
              "data-test": "claude-clear-key",
              onClick: P
            }, {
              default: Zt(() => [
                nq
              ]),
              _: 1
            })) : Kt("", !0)
          ]),
          S.value && !T.value ? (Dt(), gn("div", rq, [
            Me(z(Z), {
              icon: z(s).MarkComplete,
              class: "saved-icon"
            }, null, 8, ["icon"]),
            oq
          ])) : Kt("", !0),
          T.value ? (Dt(), gn("div", iq, " Stored API key will be removed on save. ")) : Kt("", !0),
          z(u).claudeUsage ? (Dt(), gn("div", sq, [
            W("div", aq, [
              W("span", lq, "Last " + Ue(z(u).claudeUsage.daysWindow) + " days:", 1),
              W("span", {
                class: "usage-tokens",
                title: `${z(u).claudeUsage.totalTokens.toLocaleString()} tokens`,
                "data-test": "claude-usage-tokens"
              }, Ue(o(z(u).claudeUsage.totalTokens)) + " tokens ", 9, uq),
              W("span", {
                class: "usage-cost",
                title: z(u).claudeUsage.pricingNote,
                "data-test": "claude-usage-cost"
              }, " (" + Ue(r(z(u).claudeUsage.estimatedCostUsd)) + ") ", 9, cq),
              W("button", {
                type: "button",
                class: "usage-toggle",
                onClick: te[5] || (te[5] = (ne) => le.value = !le.value),
                "data-test": "claude-usage-toggle"
              }, Ue(le.value ? "hide details" : "show details"), 1)
            ]),
            le.value ? (Dt(), gn("dl", dq, [
              W("div", null, [
                fq,
                W("dd", null, Ue(o(z(u).claudeUsage.inputTokens)), 1)
              ]),
              W("div", null, [
                hq,
                W("dd", null, Ue(o(z(u).claudeUsage.outputTokens)), 1)
              ]),
              W("div", null, [
                pq,
                W("dd", null, Ue(o(z(u).claudeUsage.cacheReadInputTokens)), 1)
              ]),
              W("div", null, [
                wq,
                W("dd", null, Ue(o(z(u).claudeUsage.cacheCreationInputTokens)), 1)
              ]),
              W("div", null, [
                vq,
                W("dd", null, [
                  at(Ue(z(u).claudeUsage.calls) + " ", 1),
                  W("span", mq, "(" + Ue(z(u).claudeUsage.successfulCalls) + " ok / " + Ue(z(u).claudeUsage.failedCalls) + " failed)", 1)
                ])
              ]),
              W("div", null, [
                _q,
                W("dd", null, Ue((z(u).claudeUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
              ]),
              W("div", gq, Ue(z(u).claudeUsage.pricingNote), 1)
            ])) : Kt("", !0)
          ])) : Kt("", !0)
        ]),
        z(I) ? (Dt(), gn("div", $q, [
          W("div", yq, [
            bq,
            W("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": k.value,
              "aria-label": "Show help for correlation variables",
              "data-test": "variables-help",
              onClick: te[6] || (te[6] = (ne) => k.value = !k.value)
            }, [
              Me(z(Z), {
                icon: z(s).Help
              }, null, 8, ["icon"])
            ], 8, Vq),
            W("button", {
              type: "button",
              class: "icon-btn reset-icon",
              "aria-label": "Reset correlation variables to defaults",
              "data-test": "variables-reset",
              onClick: ye
            }, [
              Me(z(Z), {
                icon: z(s).Restore
              }, null, 8, ["icon"])
            ])
          ]),
          k.value ? (Dt(), gn("div", Cq, [
            W("ul", null, [
              W("li", null, [
                Sq,
                Eq,
                W("em", null, "Default: " + Ue(a.alpha), 1)
              ]),
              W("li", null, [
                kq,
                Iq,
                xq,
                Aq,
                W("em", null, "Default: " + Ue(a.beta), 1)
              ]),
              W("li", null, [
                Bq,
                Tq,
                W("em", null, "Default: " + Ue(a.epsilon), 1)
              ]),
              z(D) ? (Dt(), gn(Nm, { key: 0 }, [
                W("li", Dq, [
                  Nq,
                  Lq,
                  W("em", null, "Default: " + Ue(a.hellingerW), 1)
                ]),
                W("li", Mq, [
                  Oq,
                  Pq,
                  W("em", null, "Default: " + Ue(a.hellingerBias), 1)
                ])
              ], 64)) : Kt("", !0)
            ])
          ])) : Kt("", !0),
          W("div", Rq, [
            Me(z(Bo), {
              modelValue: w.value,
              "onUpdate:modelValue": te[7] || (te[7] = (ne) => w.value = ne),
              type: "number",
              label: "Alpha",
              "data-test": "variable-alpha"
            }, null, 8, ["modelValue"]),
            Me(z(Bo), {
              modelValue: v.value,
              "onUpdate:modelValue": te[8] || (te[8] = (ne) => v.value = ne),
              type: "number",
              label: "Beta",
              "data-test": "variable-beta"
            }, null, 8, ["modelValue"]),
            Me(z(Bo), {
              modelValue: _.value,
              "onUpdate:modelValue": te[9] || (te[9] = (ne) => _.value = ne),
              type: "number",
              label: "Epsilon",
              "data-test": "variable-epsilon"
            }, null, 8, ["modelValue"]),
            z(D) ? (Dt(), jc(z(Bo), {
              key: 0,
              modelValue: $.value,
              "onUpdate:modelValue": te[10] || (te[10] = (ne) => $.value = ne),
              type: "number",
              label: "Hellinger w",
              "data-test": "variable-hellinger-w"
            }, null, 8, ["modelValue"])) : Kt("", !0),
            z(D) ? (Dt(), jc(z(Bo), {
              key: 1,
              modelValue: y.value,
              "onUpdate:modelValue": te[11] || (te[11] = (ne) => y.value = ne),
              type: "number",
              label: "Hellinger bias",
              "data-test": "variable-hellinger-bias"
            }, null, 8, ["modelValue"])) : Kt("", !0)
          ])
        ])) : Kt("", !0),
        W("div", Fq, [
          Me(z(ae), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: we
          }, {
            default: Zt(() => [
              Uq
            ]),
            _: 1
          }),
          Me(z(ae), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: Pe
          }, {
            default: Zt(() => [
              Wq
            ]),
            _: 1
          }),
          Me(z(ae), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: Ae
          }, {
            default: Zt(() => [
              Me(z(Z), {
                icon: z(s).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              qq
            ]),
            _: 1
          })
        ]),
        Me(z(yl), {
          modelValue: O.value,
          "onUpdate:modelValue": te[13] || (te[13] = (ne) => O.value = ne),
          right: "",
          error: H.value,
          timeout: 6e3
        }, {
          button: Zt(() => [
            Me(z(ae), {
              onClick: te[12] || (te[12] = (ne) => O.value = !1),
              text: ""
            }, {
              default: Zt(() => [
                Hq
              ]),
              _: 1
            })
          ]),
          default: Zt(() => [
            at(Ue($e.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const jq = /* @__PURE__ */ de(Gq, [["__scopeId", "data-v-4b49dbf7"]]), Zq = window.VueRouter.createRouter, Kq = window.VueRouter.createWebHistory, Jq = async () => {
  const e = Ho();
  e.userId || await e.getUserRole();
}, Fg = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const o = window.VRouter || Ug;
      await Ho().getUserRole(), o.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => Jq(),
    component: r4
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: h9
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: H9
  },
  {
    path: "/error",
    name: "error",
    component: sU
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: IU
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      await Ho().getEngineInfo();
    },
    component: jq
  }
], Kc = window.VRouter;
if (Kc) {
  const e = "Plugin-alecUiExtension", o = Kc.hasRoute(e) ? e : "Plugin";
  for (const r of Fg) {
    const { path: s, name: a, component: u, beforeEnter: c } = r;
    Kc.addRoute(o, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const Ug = Zq({
  history: Kq(),
  routes: Fg
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = LS;
