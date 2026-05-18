const ue = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, yS = {}, VS = window.Vue.resolveComponent, bS = window.Vue.createVNode, CS = window.Vue.openBlock, SS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const ES = { class: "main" };
function IS(e, o) {
  const r = VS("router-view");
  return CS(), SS("div", ES, [
    bS(r)
  ]);
}
const kS = /* @__PURE__ */ ue(yS, [["render", IS], ["__scopeId", "data-v-5d32d140"]]), xS = window.Vue.defineComponent, AS = window.Vue.openBlock, BS = window.Vue.createBlock, TS = /* @__PURE__ */ xS({
  __name: "App",
  setup(e) {
    return (o, r) => (AS(), BS(kS));
  }
});
var yi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function DS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nm = { exports: {} }, fd = { exports: {} }, Lm = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, NS = Lm, hd = Object.prototype.toString, pd = function(e) {
  return function(o) {
    var r = hd.call(o);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Zr(e) {
  return e = e.toLowerCase(), function(r) {
    return pd(r) === e;
  };
}
function wd(e) {
  return Array.isArray(e);
}
function Oa(e) {
  return typeof e > "u";
}
function LS(e) {
  return e !== null && !Oa(e) && e.constructor !== null && !Oa(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Mm = Zr("ArrayBuffer");
function MS(e) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(e) : o = e && e.buffer && Mm(e.buffer), o;
}
function OS(e) {
  return typeof e == "string";
}
function PS(e) {
  return typeof e == "number";
}
function Om(e) {
  return e !== null && typeof e == "object";
}
function xa(e) {
  if (pd(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var RS = Zr("Date"), FS = Zr("File"), US = Zr("Blob"), WS = Zr("FileList");
function vd(e) {
  return hd.call(e) === "[object Function]";
}
function qS(e) {
  return Om(e) && vd(e.pipe);
}
function HS(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || hd.call(e) === o || vd(e.toString) && e.toString() === o);
}
var zS = Zr("URLSearchParams");
function YS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function GS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function md(e, o) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), wd(e))
      for (var r = 0, s = e.length; r < s; r++)
        o.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && o.call(null, e[a], a, e);
}
function Kc() {
  var e = {};
  function o(a, u) {
    xa(e[u]) && xa(a) ? e[u] = Kc(e[u], a) : xa(a) ? e[u] = Kc({}, a) : wd(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    md(arguments[r], o);
  return e;
}
function jS(e, o, r) {
  return md(o, function(a, u) {
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
  if (Oa(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var eE = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Xe = {
  isArray: wd,
  isArrayBuffer: Mm,
  isBuffer: LS,
  isFormData: HS,
  isArrayBufferView: MS,
  isString: OS,
  isNumber: PS,
  isObject: Om,
  isPlainObject: xa,
  isUndefined: Oa,
  isDate: RS,
  isFile: FS,
  isBlob: US,
  isFunction: vd,
  isStream: qS,
  isURLSearchParams: zS,
  isStandardBrowserEnv: GS,
  forEach: md,
  merge: Kc,
  extend: jS,
  trim: YS,
  stripBOM: ZS,
  inherits: KS,
  toFlatObject: JS,
  kindOf: pd,
  kindOfTest: Zr,
  endsWith: XS,
  toArray: QS,
  isTypedArray: eE,
  isFileList: WS
}, ho = Xe;
function gp(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Pm = function(o, r, s) {
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
}, tE = Xe;
function Za() {
  this.handlers = [];
}
Za.prototype.use = function(o, r, s) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Za.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Za.prototype.forEach = function(o) {
  tE.forEach(this.handlers, function(s) {
    s !== null && o(s);
  });
};
var nE = Za, rE = Xe, oE = function(o, r) {
  rE.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, Rm = Xe;
function Oo(e, o, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
Rm.inherits(Oo, Error, {
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
var Fm = Oo.prototype, Um = {};
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
  Um[e] = { value: e };
});
Object.defineProperties(Oo, Um);
Object.defineProperty(Fm, "isAxiosError", { value: !0 });
Oo.from = function(e, o, r, s, a, u) {
  var c = Object.create(Fm);
  return Rm.toFlatObject(e, c, function(w) {
    return w !== Error.prototype;
  }), Oo.call(c, e.message, o, r, s, a), c.name = e.name, u && Object.assign(c, u), c;
};
var qo = Oo, Wm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, sn = Xe;
function iE(e, o) {
  o = o || new FormData();
  var r = [];
  function s(u) {
    return u === null ? "" : sn.isDate(u) ? u.toISOString() : sn.isArrayBuffer(u) || sn.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (sn.isPlainObject(u) || sn.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      r.push(u), sn.forEach(u, function(w, v) {
        if (!sn.isUndefined(w)) {
          var _ = c ? c + "." + v : v, $;
          if (w && !c && typeof w == "object") {
            if (sn.endsWith(v, "{}"))
              w = JSON.stringify(w);
            else if (sn.endsWith(v, "[]") && ($ = sn.toArray(w))) {
              $.forEach(function(y) {
                !sn.isUndefined(y) && o.append(_, s(y));
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
var qm = iE, Fu, $p;
function sE() {
  if ($p)
    return Fu;
  $p = 1;
  var e = qo;
  return Fu = function(r, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, Fu;
}
var Uu, yp;
function aE() {
  if (yp)
    return Uu;
  yp = 1;
  var e = Xe;
  return Uu = e.isStandardBrowserEnv() ? function() {
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
  }(), Uu;
}
var lE = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, uE = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, cE = lE, dE = uE, Hm = function(o, r) {
  return o && !cE(r) ? dE(o, r) : r;
}, Wu, Vp;
function fE() {
  if (Vp)
    return Wu;
  Vp = 1;
  var e = Xe, o = [
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
  return Wu = function(s) {
    var a = {}, u, c, f;
    return s && e.forEach(s.split(`
`), function(v) {
      if (f = v.indexOf(":"), u = e.trim(v.substr(0, f)).toLowerCase(), c = e.trim(v.substr(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, Wu;
}
var qu, bp;
function hE() {
  if (bp)
    return qu;
  bp = 1;
  var e = Xe;
  return qu = e.isStandardBrowserEnv() ? function() {
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
  }(), qu;
}
var Hu, Cp;
function Ka() {
  if (Cp)
    return Hu;
  Cp = 1;
  var e = qo, o = Xe;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), Hu = r, Hu;
}
var zu, Sp;
function pE() {
  return Sp || (Sp = 1, zu = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), zu;
}
var Yu, Ep;
function Ip() {
  if (Ep)
    return Yu;
  Ep = 1;
  var e = Xe, o = sE(), r = aE(), s = Pm, a = Hm, u = fE(), c = hE(), f = Wm, w = qo, v = Ka(), _ = pE();
  return Yu = function(y) {
    return new Promise(function(D, M) {
      var L = y.data, S = y.headers, T = y.responseType, B;
      function O() {
        y.cancelToken && y.cancelToken.unsubscribe(B), y.signal && y.signal.removeEventListener("abort", B);
      }
      e.isFormData(L) && e.isStandardBrowserEnv() && delete S["Content-Type"];
      var I = new XMLHttpRequest();
      if (y.auth) {
        var R = y.auth.username || "", P = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        S.Authorization = "Basic " + btoa(R + ":" + P);
      }
      var H = a(y.baseURL, y.url);
      I.open(y.method.toUpperCase(), s(H, y.params, y.paramsSerializer), !0), I.timeout = y.timeout;
      function we() {
        if (!!I) {
          var Se = "getAllResponseHeaders" in I ? u(I.getAllResponseHeaders()) : null, Ie = !T || T === "text" || T === "json" ? I.responseText : I.response, Ae = {
            data: Ie,
            status: I.status,
            statusText: I.statusText,
            headers: Se,
            config: y,
            request: I
          };
          o(function(Ne) {
            D(Ne), O();
          }, function(Ne) {
            M(Ne), O();
          }, Ae), I = null;
        }
      }
      if ("onloadend" in I ? I.onloadend = we : I.onreadystatechange = function() {
        !I || I.readyState !== 4 || I.status === 0 && !(I.responseURL && I.responseURL.indexOf("file:") === 0) || setTimeout(we);
      }, I.onabort = function() {
        !I || (M(new w("Request aborted", w.ECONNABORTED, y, I)), I = null);
      }, I.onerror = function() {
        M(new w("Network Error", w.ERR_NETWORK, y, I, I)), I = null;
      }, I.ontimeout = function() {
        var Ie = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Ae = y.transitional || f;
        y.timeoutErrorMessage && (Ie = y.timeoutErrorMessage), M(new w(
          Ie,
          Ae.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          I
        )), I = null;
      }, e.isStandardBrowserEnv()) {
        var he = (y.withCredentials || c(H)) && y.xsrfCookieName ? r.read(y.xsrfCookieName) : void 0;
        he && (S[y.xsrfHeaderName] = he);
      }
      "setRequestHeader" in I && e.forEach(S, function(Ie, Ae) {
        typeof L > "u" && Ae.toLowerCase() === "content-type" ? delete S[Ae] : I.setRequestHeader(Ae, Ie);
      }), e.isUndefined(y.withCredentials) || (I.withCredentials = !!y.withCredentials), T && T !== "json" && (I.responseType = y.responseType), typeof y.onDownloadProgress == "function" && I.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && I.upload && I.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (B = function(Se) {
        !I || (M(!Se || Se && Se.type ? new v() : Se), I.abort(), I = null);
      }, y.cancelToken && y.cancelToken.subscribe(B), y.signal && (y.signal.aborted ? B() : y.signal.addEventListener("abort", B))), L || (L = null);
      var ce = _(H);
      if (ce && ["http", "https", "file"].indexOf(ce) === -1) {
        M(new w("Unsupported protocol " + ce + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      I.send(L);
    });
  }, Yu;
}
var Gu, kp;
function wE() {
  return kp || (kp = 1, Gu = null), Gu;
}
var Ye = Xe, xp = oE, Ap = qo, vE = Wm, mE = qm, _E = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Bp(e, o) {
  !Ye.isUndefined(e) && Ye.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function gE() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Ip()), e;
}
function $E(e, o, r) {
  if (Ye.isString(e))
    try {
      return (o || JSON.parse)(e), Ye.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var Ja = {
  transitional: vE,
  adapter: gE(),
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
      return mE(u ? { "files[]": o } : o, c && new c());
    } else if (s || a === "application/json")
      return Bp(r, "application/json"), $E(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Ja.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !s && this.responseType === "json";
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
    FormData: wE()
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
  Ja.headers[o] = {};
});
Ye.forEach(["post", "put", "patch"], function(o) {
  Ja.headers[o] = Ye.merge(_E);
});
var _d = Ja, yE = Xe, VE = _d, bE = function(o, r, s) {
  var a = this || VE;
  return yE.forEach(s, function(c) {
    o = c.call(a, o, r);
  }), o;
}, ju, Tp;
function zm() {
  return Tp || (Tp = 1, ju = function(o) {
    return !!(o && o.__CANCEL__);
  }), ju;
}
var Dp = Xe, Zu = bE, CE = zm(), SE = _d, EE = Ka();
function Ku(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new EE();
}
var IE = function(o) {
  Ku(o), o.headers = o.headers || {}, o.data = Zu.call(
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
  var r = o.adapter || SE.adapter;
  return r(o).then(function(a) {
    return Ku(o), a.data = Zu.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return CE(a) || (Ku(o), a && a.response && (a.response.data = Zu.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, Tt = Xe, Ym = function(o, r) {
  r = r || {};
  var s = {};
  function a(_, $) {
    return Tt.isPlainObject(_) && Tt.isPlainObject($) ? Tt.merge(_, $) : Tt.isPlainObject($) ? Tt.merge({}, $) : Tt.isArray($) ? $.slice() : $;
  }
  function u(_) {
    if (Tt.isUndefined(r[_])) {
      if (!Tt.isUndefined(o[_]))
        return a(void 0, o[_]);
    } else
      return a(o[_], r[_]);
  }
  function c(_) {
    if (!Tt.isUndefined(r[_]))
      return a(void 0, r[_]);
  }
  function f(_) {
    if (Tt.isUndefined(r[_])) {
      if (!Tt.isUndefined(o[_]))
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
  return Tt.forEach(Object.keys(o).concat(Object.keys(r)), function($) {
    var y = v[$] || u, k = y($);
    Tt.isUndefined(k) && y !== w || (s[$] = k);
  }), s;
}, Ju, Np;
function Gm() {
  return Np || (Np = 1, Ju = {
    version: "0.27.2"
  }), Ju;
}
var kE = Gm().version, dr = qo, gd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  gd[e] = function(s) {
    return typeof s === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var Lp = {};
gd.transitional = function(o, r, s) {
  function a(u, c) {
    return "[Axios v" + kE + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
  }
  return function(u, c, f) {
    if (o === !1)
      throw new dr(
        a(c, " has been removed" + (r ? " in " + r : "")),
        dr.ERR_DEPRECATED
      );
    return r && !Lp[c] && (Lp[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, c, f) : !0;
  };
};
function xE(e, o, r) {
  if (typeof e != "object")
    throw new dr("options must be an object", dr.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a], c = o[u];
    if (c) {
      var f = e[u], w = f === void 0 || c(f, u, e);
      if (w !== !0)
        throw new dr("option " + u + " must be " + w, dr.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new dr("Unknown option " + u, dr.ERR_BAD_OPTION);
  }
}
var AE = {
  assertOptions: xE,
  validators: gd
}, jm = Xe, BE = Pm, Mp = nE, Op = IE, Xa = Ym, TE = Hm, Zm = AE, po = Zm.validators;
function Po(e) {
  this.defaults = e, this.interceptors = {
    request: new Mp(),
    response: new Mp()
  };
}
Po.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Xa(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Zm.assertOptions(s, {
    silentJSONParsing: po.transitional(po.boolean),
    forcedJSONParsing: po.transitional(po.boolean),
    clarifyTimeoutError: po.transitional(po.boolean)
  }, !1);
  var a = [], u = !0;
  this.interceptors.request.forEach(function(k) {
    typeof k.runWhen == "function" && k.runWhen(r) === !1 || (u = u && k.synchronous, a.unshift(k.fulfilled, k.rejected));
  });
  var c = [];
  this.interceptors.response.forEach(function(k) {
    c.push(k.fulfilled, k.rejected);
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
Po.prototype.getUri = function(o) {
  o = Xa(this.defaults, o);
  var r = TE(o.baseURL, o.url);
  return BE(r, o.params, o.paramsSerializer);
};
jm.forEach(["delete", "get", "head", "options"], function(o) {
  Po.prototype[o] = function(r, s) {
    return this.request(Xa(s || {}, {
      method: o,
      url: r,
      data: (s || {}).data
    }));
  };
});
jm.forEach(["post", "put", "patch"], function(o) {
  function r(s) {
    return function(u, c, f) {
      return this.request(Xa(f || {}, {
        method: o,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  Po.prototype[o] = r(), Po.prototype[o + "Form"] = r(!0);
});
var DE = Po, Xu, Pp;
function NE() {
  if (Pp)
    return Xu;
  Pp = 1;
  var e = Ka();
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
  }, Xu = o, Xu;
}
var Qu, Rp;
function LE() {
  return Rp || (Rp = 1, Qu = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), Qu;
}
var ec, Fp;
function ME() {
  if (Fp)
    return ec;
  Fp = 1;
  var e = Xe;
  return ec = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, ec;
}
var Up = Xe, OE = Lm, Aa = DE, PE = Ym, RE = _d;
function Km(e) {
  var o = new Aa(e), r = OE(Aa.prototype.request, o);
  return Up.extend(r, Aa.prototype, o), Up.extend(r, o), r.create = function(a) {
    return Km(PE(e, a));
  }, r;
}
var Ct = Km(RE);
Ct.Axios = Aa;
Ct.CanceledError = Ka();
Ct.CancelToken = NE();
Ct.isCancel = zm();
Ct.VERSION = Gm().version;
Ct.toFormData = qm;
Ct.AxiosError = qo;
Ct.Cancel = Ct.CanceledError;
Ct.all = function(o) {
  return Promise.all(o);
};
Ct.spread = LE();
Ct.isAxiosError = ME();
fd.exports = Ct;
fd.exports.default = Ct;
(function(e) {
  e.exports = fd.exports;
})(Nm);
const Jm = /* @__PURE__ */ DS(Nm.exports), qn = Jm.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), pt = Jm.create({
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
(function(e, o) {
  (function() {
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", v = 500, _ = "__lodash_placeholder__", $ = 1, y = 2, k = 4, D = 1, M = 2, L = 1, S = 2, T = 4, B = 8, O = 16, I = 32, R = 64, P = 128, H = 256, we = 512, he = 30, ce = "...", Se = 800, Ie = 16, Ae = 1, ve = 2, Ne = 3, Le = 1 / 0, qe = 9007199254740991, Hn = 17976931348623157e292, gr = 0 / 0, St = 4294967295, us = St - 1, cs = St >>> 1, ds = [
      ["ary", P],
      ["bind", L],
      ["bindKey", S],
      ["curry", B],
      ["curryRight", O],
      ["flip", we],
      ["partial", I],
      ["partialRight", R],
      ["rearg", H]
    ], In = "[object Arguments]", $r = "[object Array]", fs = "[object AsyncFunction]", zn = "[object Boolean]", Yn = "[object Date]", hs = "[object DOMException]", ae = "[object Error]", te = "[object Function]", me = "[object GeneratorFunction]", wt = "[object Map]", Gn = "[object Number]", ps = "[object Null]", Pt = "[object Object]", Wd = "[object Promise]", Rg = "[object Proxy]", ni = "[object RegExp]", en = "[object Set]", ri = "[object String]", ws = "[object Symbol]", Fg = "[object Undefined]", oi = "[object WeakMap]", Ug = "[object WeakSet]", ii = "[object ArrayBuffer]", Jr = "[object DataView]", gl = "[object Float32Array]", $l = "[object Float64Array]", yl = "[object Int8Array]", Vl = "[object Int16Array]", bl = "[object Int32Array]", Cl = "[object Uint8Array]", Sl = "[object Uint8ClampedArray]", El = "[object Uint16Array]", Il = "[object Uint32Array]", Wg = /\b__p \+= '';/g, qg = /\b(__p \+=) '' \+/g, Hg = /(__e\(.*?\)|\b__t\)) \+\n'';/g, qd = /&(?:amp|lt|gt|quot|#39);/g, Hd = /[&<>"']/g, zg = RegExp(qd.source), Yg = RegExp(Hd.source), Gg = /<%-([\s\S]+?)%>/g, jg = /<%([\s\S]+?)%>/g, zd = /<%=([\s\S]+?)%>/g, Zg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Kg = /^\w*$/, Jg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, kl = /[\\^$.*+?()[\]{}|]/g, Xg = RegExp(kl.source), xl = /^\s+/, Qg = /\s/, e1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, t1 = /\{\n\/\* \[wrapped with (.+)\] \*/, n1 = /,? & /, r1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, o1 = /[()=,{}\[\]\/\s]/, i1 = /\\(\\)?/g, s1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Yd = /\w*$/, a1 = /^[-+]0x[0-9a-f]+$/i, l1 = /^0b[01]+$/i, u1 = /^\[object .+?Constructor\]$/, c1 = /^0o[0-7]+$/i, d1 = /^(?:0|[1-9]\d*)$/, f1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, vs = /($^)/, h1 = /['\n\r\u2028\u2029\\]/g, ms = "\\ud800-\\udfff", p1 = "\\u0300-\\u036f", w1 = "\\ufe20-\\ufe2f", v1 = "\\u20d0-\\u20ff", Gd = p1 + w1 + v1, jd = "\\u2700-\\u27bf", Zd = "a-z\\xdf-\\xf6\\xf8-\\xff", m1 = "\\xac\\xb1\\xd7\\xf7", _1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", g1 = "\\u2000-\\u206f", $1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Kd = "A-Z\\xc0-\\xd6\\xd8-\\xde", Jd = "\\ufe0e\\ufe0f", Xd = m1 + _1 + g1 + $1, Al = "['\u2019]", y1 = "[" + ms + "]", Qd = "[" + Xd + "]", _s = "[" + Gd + "]", ef = "\\d+", V1 = "[" + jd + "]", tf = "[" + Zd + "]", nf = "[^" + ms + Xd + ef + jd + Zd + Kd + "]", Bl = "\\ud83c[\\udffb-\\udfff]", b1 = "(?:" + _s + "|" + Bl + ")", rf = "[^" + ms + "]", Tl = "(?:\\ud83c[\\udde6-\\uddff]){2}", Dl = "[\\ud800-\\udbff][\\udc00-\\udfff]", Xr = "[" + Kd + "]", of = "\\u200d", sf = "(?:" + tf + "|" + nf + ")", C1 = "(?:" + Xr + "|" + nf + ")", af = "(?:" + Al + "(?:d|ll|m|re|s|t|ve))?", lf = "(?:" + Al + "(?:D|LL|M|RE|S|T|VE))?", uf = b1 + "?", cf = "[" + Jd + "]?", S1 = "(?:" + of + "(?:" + [rf, Tl, Dl].join("|") + ")" + cf + uf + ")*", E1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", I1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", df = cf + uf + S1, k1 = "(?:" + [V1, Tl, Dl].join("|") + ")" + df, x1 = "(?:" + [rf + _s + "?", _s, Tl, Dl, y1].join("|") + ")", A1 = RegExp(Al, "g"), B1 = RegExp(_s, "g"), Nl = RegExp(Bl + "(?=" + Bl + ")|" + x1 + df, "g"), T1 = RegExp([
      Xr + "?" + tf + "+" + af + "(?=" + [Qd, Xr, "$"].join("|") + ")",
      C1 + "+" + lf + "(?=" + [Qd, Xr + sf, "$"].join("|") + ")",
      Xr + "?" + sf + "+" + af,
      Xr + "+" + lf,
      I1,
      E1,
      ef,
      k1
    ].join("|"), "g"), D1 = RegExp("[" + of + ms + Gd + Jd + "]"), N1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, L1 = [
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
    ], M1 = -1, Ce = {};
    Ce[gl] = Ce[$l] = Ce[yl] = Ce[Vl] = Ce[bl] = Ce[Cl] = Ce[Sl] = Ce[El] = Ce[Il] = !0, Ce[In] = Ce[$r] = Ce[ii] = Ce[zn] = Ce[Jr] = Ce[Yn] = Ce[ae] = Ce[te] = Ce[wt] = Ce[Gn] = Ce[Pt] = Ce[ni] = Ce[en] = Ce[ri] = Ce[oi] = !1;
    var Ve = {};
    Ve[In] = Ve[$r] = Ve[ii] = Ve[Jr] = Ve[zn] = Ve[Yn] = Ve[gl] = Ve[$l] = Ve[yl] = Ve[Vl] = Ve[bl] = Ve[wt] = Ve[Gn] = Ve[Pt] = Ve[ni] = Ve[en] = Ve[ri] = Ve[ws] = Ve[Cl] = Ve[Sl] = Ve[El] = Ve[Il] = !0, Ve[ae] = Ve[te] = Ve[oi] = !1;
    var O1 = {
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
    }, P1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, R1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, F1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, U1 = parseFloat, W1 = parseInt, ff = typeof yi == "object" && yi && yi.Object === Object && yi, q1 = typeof self == "object" && self && self.Object === Object && self, je = ff || q1 || Function("return this")(), Ll = o && !o.nodeType && o, yr = Ll && !0 && e && !e.nodeType && e, hf = yr && yr.exports === Ll, Ml = hf && ff.process, Rt = function() {
      try {
        var V = yr && yr.require && yr.require("util").types;
        return V || Ml && Ml.binding && Ml.binding("util");
      } catch {
      }
    }(), pf = Rt && Rt.isArrayBuffer, wf = Rt && Rt.isDate, vf = Rt && Rt.isMap, mf = Rt && Rt.isRegExp, _f = Rt && Rt.isSet, gf = Rt && Rt.isTypedArray;
    function Et(V, E, C) {
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
    function H1(V, E, C, U) {
      for (var K = -1, de = V == null ? 0 : V.length; ++K < de; ) {
        var Pe = V[K];
        E(U, Pe, C(Pe), V);
      }
      return U;
    }
    function Ft(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U && E(V[C], C, V) !== !1; )
        ;
      return V;
    }
    function z1(V, E) {
      for (var C = V == null ? 0 : V.length; C-- && E(V[C], C, V) !== !1; )
        ;
      return V;
    }
    function $f(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U; )
        if (!E(V[C], C, V))
          return !1;
      return !0;
    }
    function jn(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length, K = 0, de = []; ++C < U; ) {
        var Pe = V[C];
        E(Pe, C, V) && (de[K++] = Pe);
      }
      return de;
    }
    function gs(V, E) {
      var C = V == null ? 0 : V.length;
      return !!C && Qr(V, E, 0) > -1;
    }
    function Ol(V, E, C) {
      for (var U = -1, K = V == null ? 0 : V.length; ++U < K; )
        if (C(E, V[U]))
          return !0;
      return !1;
    }
    function Ee(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length, K = Array(U); ++C < U; )
        K[C] = E(V[C], C, V);
      return K;
    }
    function Zn(V, E) {
      for (var C = -1, U = E.length, K = V.length; ++C < U; )
        V[K + C] = E[C];
      return V;
    }
    function Pl(V, E, C, U) {
      var K = -1, de = V == null ? 0 : V.length;
      for (U && de && (C = V[++K]); ++K < de; )
        C = E(C, V[K], K, V);
      return C;
    }
    function Y1(V, E, C, U) {
      var K = V == null ? 0 : V.length;
      for (U && K && (C = V[--K]); K--; )
        C = E(C, V[K], K, V);
      return C;
    }
    function Rl(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U; )
        if (E(V[C], C, V))
          return !0;
      return !1;
    }
    var G1 = Fl("length");
    function j1(V) {
      return V.split("");
    }
    function Z1(V) {
      return V.match(r1) || [];
    }
    function yf(V, E, C) {
      var U;
      return C(V, function(K, de, Pe) {
        if (E(K, de, Pe))
          return U = de, !1;
      }), U;
    }
    function $s(V, E, C, U) {
      for (var K = V.length, de = C + (U ? 1 : -1); U ? de-- : ++de < K; )
        if (E(V[de], de, V))
          return de;
      return -1;
    }
    function Qr(V, E, C) {
      return E === E ? a0(V, E, C) : $s(V, Vf, C);
    }
    function K1(V, E, C, U) {
      for (var K = C - 1, de = V.length; ++K < de; )
        if (U(V[K], E))
          return K;
      return -1;
    }
    function Vf(V) {
      return V !== V;
    }
    function bf(V, E) {
      var C = V == null ? 0 : V.length;
      return C ? Wl(V, E) / C : gr;
    }
    function Fl(V) {
      return function(E) {
        return E == null ? r : E[V];
      };
    }
    function Ul(V) {
      return function(E) {
        return V == null ? r : V[E];
      };
    }
    function Cf(V, E, C, U, K) {
      return K(V, function(de, Pe, ye) {
        C = U ? (U = !1, de) : E(C, de, Pe, ye);
      }), C;
    }
    function J1(V, E) {
      var C = V.length;
      for (V.sort(E); C--; )
        V[C] = V[C].value;
      return V;
    }
    function Wl(V, E) {
      for (var C, U = -1, K = V.length; ++U < K; ) {
        var de = E(V[U]);
        de !== r && (C = C === r ? de : C + de);
      }
      return C;
    }
    function ql(V, E) {
      for (var C = -1, U = Array(V); ++C < V; )
        U[C] = E(C);
      return U;
    }
    function X1(V, E) {
      return Ee(E, function(C) {
        return [C, V[C]];
      });
    }
    function Sf(V) {
      return V && V.slice(0, xf(V) + 1).replace(xl, "");
    }
    function It(V) {
      return function(E) {
        return V(E);
      };
    }
    function Hl(V, E) {
      return Ee(E, function(C) {
        return V[C];
      });
    }
    function si(V, E) {
      return V.has(E);
    }
    function Ef(V, E) {
      for (var C = -1, U = V.length; ++C < U && Qr(E, V[C], 0) > -1; )
        ;
      return C;
    }
    function If(V, E) {
      for (var C = V.length; C-- && Qr(E, V[C], 0) > -1; )
        ;
      return C;
    }
    function Q1(V, E) {
      for (var C = V.length, U = 0; C--; )
        V[C] === E && ++U;
      return U;
    }
    var e0 = Ul(O1), t0 = Ul(P1);
    function n0(V) {
      return "\\" + F1[V];
    }
    function r0(V, E) {
      return V == null ? r : V[E];
    }
    function eo(V) {
      return D1.test(V);
    }
    function o0(V) {
      return N1.test(V);
    }
    function i0(V) {
      for (var E, C = []; !(E = V.next()).done; )
        C.push(E.value);
      return C;
    }
    function zl(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U, K) {
        C[++E] = [K, U];
      }), C;
    }
    function kf(V, E) {
      return function(C) {
        return V(E(C));
      };
    }
    function Kn(V, E) {
      for (var C = -1, U = V.length, K = 0, de = []; ++C < U; ) {
        var Pe = V[C];
        (Pe === E || Pe === _) && (V[C] = _, de[K++] = C);
      }
      return de;
    }
    function ys(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U) {
        C[++E] = U;
      }), C;
    }
    function s0(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U) {
        C[++E] = [U, U];
      }), C;
    }
    function a0(V, E, C) {
      for (var U = C - 1, K = V.length; ++U < K; )
        if (V[U] === E)
          return U;
      return -1;
    }
    function l0(V, E, C) {
      for (var U = C + 1; U--; )
        if (V[U] === E)
          return U;
      return U;
    }
    function to(V) {
      return eo(V) ? c0(V) : G1(V);
    }
    function tn(V) {
      return eo(V) ? d0(V) : j1(V);
    }
    function xf(V) {
      for (var E = V.length; E-- && Qg.test(V.charAt(E)); )
        ;
      return E;
    }
    var u0 = Ul(R1);
    function c0(V) {
      for (var E = Nl.lastIndex = 0; Nl.test(V); )
        ++E;
      return E;
    }
    function d0(V) {
      return V.match(Nl) || [];
    }
    function f0(V) {
      return V.match(T1) || [];
    }
    var h0 = function V(E) {
      E = E == null ? je : no.defaults(je.Object(), E, no.pick(je, L1));
      var C = E.Array, U = E.Date, K = E.Error, de = E.Function, Pe = E.Math, ye = E.Object, Yl = E.RegExp, p0 = E.String, Ut = E.TypeError, Vs = C.prototype, w0 = de.prototype, ro = ye.prototype, bs = E["__core-js_shared__"], Cs = w0.toString, _e = ro.hasOwnProperty, v0 = 0, Af = function() {
        var t = /[^.]+$/.exec(bs && bs.keys && bs.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Ss = ro.toString, m0 = Cs.call(ye), _0 = je._, g0 = Yl(
        "^" + Cs.call(_e).replace(kl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Es = hf ? E.Buffer : r, Jn = E.Symbol, Is = E.Uint8Array, Bf = Es ? Es.allocUnsafe : r, ks = kf(ye.getPrototypeOf, ye), Tf = ye.create, Df = ro.propertyIsEnumerable, xs = Vs.splice, Nf = Jn ? Jn.isConcatSpreadable : r, ai = Jn ? Jn.iterator : r, Vr = Jn ? Jn.toStringTag : r, As = function() {
        try {
          var t = Ir(ye, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), $0 = E.clearTimeout !== je.clearTimeout && E.clearTimeout, y0 = U && U.now !== je.Date.now && U.now, V0 = E.setTimeout !== je.setTimeout && E.setTimeout, Bs = Pe.ceil, Ts = Pe.floor, Gl = ye.getOwnPropertySymbols, b0 = Es ? Es.isBuffer : r, Lf = E.isFinite, C0 = Vs.join, S0 = kf(ye.keys, ye), Re = Pe.max, Qe = Pe.min, E0 = U.now, I0 = E.parseInt, Mf = Pe.random, k0 = Vs.reverse, jl = Ir(E, "DataView"), li = Ir(E, "Map"), Zl = Ir(E, "Promise"), oo = Ir(E, "Set"), ui = Ir(E, "WeakMap"), ci = Ir(ye, "create"), Ds = ui && new ui(), io = {}, x0 = kr(jl), A0 = kr(li), B0 = kr(Zl), T0 = kr(oo), D0 = kr(ui), Ns = Jn ? Jn.prototype : r, di = Ns ? Ns.valueOf : r, Of = Ns ? Ns.toString : r;
      function h(t) {
        if (Be(t) && !J(t) && !(t instanceof oe)) {
          if (t instanceof Wt)
            return t;
          if (_e.call(t, "__wrapped__"))
            return Ph(t);
        }
        return new Wt(t);
      }
      var so = function() {
        function t() {
        }
        return function(n) {
          if (!ke(n))
            return {};
          if (Tf)
            return Tf(n);
          t.prototype = n;
          var i = new t();
          return t.prototype = r, i;
        };
      }();
      function Ls() {
      }
      function Wt(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        escape: Gg,
        evaluate: jg,
        interpolate: zd,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = Ls.prototype, h.prototype.constructor = h, Wt.prototype = so(Ls.prototype), Wt.prototype.constructor = Wt;
      function oe(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = St, this.__views__ = [];
      }
      function N0() {
        var t = new oe(this.__wrapped__);
        return t.__actions__ = vt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = vt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = vt(this.__views__), t;
      }
      function L0() {
        if (this.__filtered__) {
          var t = new oe(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function M0() {
        var t = this.__wrapped__.value(), n = this.__dir__, i = J(t), l = n < 0, d = i ? t.length : 0, p = j$(0, d, this.__views__), m = p.start, g = p.end, b = g - m, x = l ? g : m - 1, A = this.__iteratees__, N = A.length, F = 0, q = Qe(b, this.__takeCount__);
        if (!i || !l && d == b && q == b)
          return ah(t, this.__actions__);
        var Y = [];
        e:
          for (; b-- && F < q; ) {
            x += n;
            for (var Q = -1, G = t[x]; ++Q < N; ) {
              var re = A[Q], ie = re.iteratee, At = re.type, ct = ie(G);
              if (At == ve)
                G = ct;
              else if (!ct) {
                if (At == Ae)
                  continue e;
                break e;
              }
            }
            Y[F++] = G;
          }
        return Y;
      }
      oe.prototype = so(Ls.prototype), oe.prototype.constructor = oe;
      function br(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function O0() {
        this.__data__ = ci ? ci(null) : {}, this.size = 0;
      }
      function P0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function R0(t) {
        var n = this.__data__;
        if (ci) {
          var i = n[t];
          return i === w ? r : i;
        }
        return _e.call(n, t) ? n[t] : r;
      }
      function F0(t) {
        var n = this.__data__;
        return ci ? n[t] !== r : _e.call(n, t);
      }
      function U0(t, n) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = ci && n === r ? w : n, this;
      }
      br.prototype.clear = O0, br.prototype.delete = P0, br.prototype.get = R0, br.prototype.has = F0, br.prototype.set = U0;
      function kn(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function W0() {
        this.__data__ = [], this.size = 0;
      }
      function q0(t) {
        var n = this.__data__, i = Ms(n, t);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : xs.call(n, i, 1), --this.size, !0;
      }
      function H0(t) {
        var n = this.__data__, i = Ms(n, t);
        return i < 0 ? r : n[i][1];
      }
      function z0(t) {
        return Ms(this.__data__, t) > -1;
      }
      function Y0(t, n) {
        var i = this.__data__, l = Ms(i, t);
        return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
      }
      kn.prototype.clear = W0, kn.prototype.delete = q0, kn.prototype.get = H0, kn.prototype.has = z0, kn.prototype.set = Y0;
      function xn(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function G0() {
        this.size = 0, this.__data__ = {
          hash: new br(),
          map: new (li || kn)(),
          string: new br()
        };
      }
      function j0(t) {
        var n = js(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function Z0(t) {
        return js(this, t).get(t);
      }
      function K0(t) {
        return js(this, t).has(t);
      }
      function J0(t, n) {
        var i = js(this, t), l = i.size;
        return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
      }
      xn.prototype.clear = G0, xn.prototype.delete = j0, xn.prototype.get = Z0, xn.prototype.has = K0, xn.prototype.set = J0;
      function Cr(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new xn(); ++n < i; )
          this.add(t[n]);
      }
      function X0(t) {
        return this.__data__.set(t, w), this;
      }
      function Q0(t) {
        return this.__data__.has(t);
      }
      Cr.prototype.add = Cr.prototype.push = X0, Cr.prototype.has = Q0;
      function nn(t) {
        var n = this.__data__ = new kn(t);
        this.size = n.size;
      }
      function e$() {
        this.__data__ = new kn(), this.size = 0;
      }
      function t$(t) {
        var n = this.__data__, i = n.delete(t);
        return this.size = n.size, i;
      }
      function n$(t) {
        return this.__data__.get(t);
      }
      function r$(t) {
        return this.__data__.has(t);
      }
      function o$(t, n) {
        var i = this.__data__;
        if (i instanceof kn) {
          var l = i.__data__;
          if (!li || l.length < a - 1)
            return l.push([t, n]), this.size = ++i.size, this;
          i = this.__data__ = new xn(l);
        }
        return i.set(t, n), this.size = i.size, this;
      }
      nn.prototype.clear = e$, nn.prototype.delete = t$, nn.prototype.get = n$, nn.prototype.has = r$, nn.prototype.set = o$;
      function Pf(t, n) {
        var i = J(t), l = !i && xr(t), d = !i && !l && nr(t), p = !i && !l && !d && co(t), m = i || l || d || p, g = m ? ql(t.length, p0) : [], b = g.length;
        for (var x in t)
          (n || _e.call(t, x)) && !(m && (x == "length" || d && (x == "offset" || x == "parent") || p && (x == "buffer" || x == "byteLength" || x == "byteOffset") || Dn(x, b))) && g.push(x);
        return g;
      }
      function Rf(t) {
        var n = t.length;
        return n ? t[su(0, n - 1)] : r;
      }
      function i$(t, n) {
        return Zs(vt(t), Sr(n, 0, t.length));
      }
      function s$(t) {
        return Zs(vt(t));
      }
      function Kl(t, n, i) {
        (i !== r && !rn(t[n], i) || i === r && !(n in t)) && An(t, n, i);
      }
      function fi(t, n, i) {
        var l = t[n];
        (!(_e.call(t, n) && rn(l, i)) || i === r && !(n in t)) && An(t, n, i);
      }
      function Ms(t, n) {
        for (var i = t.length; i--; )
          if (rn(t[i][0], n))
            return i;
        return -1;
      }
      function a$(t, n, i, l) {
        return Xn(t, function(d, p, m) {
          n(l, d, i(d), m);
        }), l;
      }
      function Ff(t, n) {
        return t && vn(n, He(n), t);
      }
      function l$(t, n) {
        return t && vn(n, _t(n), t);
      }
      function An(t, n, i) {
        n == "__proto__" && As ? As(t, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[n] = i;
      }
      function Jl(t, n) {
        for (var i = -1, l = n.length, d = C(l), p = t == null; ++i < l; )
          d[i] = p ? r : Bu(t, n[i]);
        return d;
      }
      function Sr(t, n, i) {
        return t === t && (i !== r && (t = t <= i ? t : i), n !== r && (t = t >= n ? t : n)), t;
      }
      function qt(t, n, i, l, d, p) {
        var m, g = n & $, b = n & y, x = n & k;
        if (i && (m = d ? i(t, l, d, p) : i(t)), m !== r)
          return m;
        if (!ke(t))
          return t;
        var A = J(t);
        if (A) {
          if (m = K$(t), !g)
            return vt(t, m);
        } else {
          var N = et(t), F = N == te || N == me;
          if (nr(t))
            return ch(t, g);
          if (N == Pt || N == In || F && !d) {
            if (m = b || F ? {} : xh(t), !g)
              return b ? R$(t, l$(m, t)) : P$(t, Ff(m, t));
          } else {
            if (!Ve[N])
              return d ? t : {};
            m = J$(t, N, g);
          }
        }
        p || (p = new nn());
        var q = p.get(t);
        if (q)
          return q;
        p.set(t, m), op(t) ? t.forEach(function(G) {
          m.add(qt(G, n, i, G, t, p));
        }) : np(t) && t.forEach(function(G, re) {
          m.set(re, qt(G, n, i, re, t, p));
        });
        var Y = x ? b ? mu : vu : b ? _t : He, Q = A ? r : Y(t);
        return Ft(Q || t, function(G, re) {
          Q && (re = G, G = t[re]), fi(m, re, qt(G, n, i, re, t, p));
        }), m;
      }
      function u$(t) {
        var n = He(t);
        return function(i) {
          return Uf(i, t, n);
        };
      }
      function Uf(t, n, i) {
        var l = i.length;
        if (t == null)
          return !l;
        for (t = ye(t); l--; ) {
          var d = i[l], p = n[d], m = t[d];
          if (m === r && !(d in t) || !p(m))
            return !1;
        }
        return !0;
      }
      function Wf(t, n, i) {
        if (typeof t != "function")
          throw new Ut(c);
        return gi(function() {
          t.apply(r, i);
        }, n);
      }
      function hi(t, n, i, l) {
        var d = -1, p = gs, m = !0, g = t.length, b = [], x = n.length;
        if (!g)
          return b;
        i && (n = Ee(n, It(i))), l ? (p = Ol, m = !1) : n.length >= a && (p = si, m = !1, n = new Cr(n));
        e:
          for (; ++d < g; ) {
            var A = t[d], N = i == null ? A : i(A);
            if (A = l || A !== 0 ? A : 0, m && N === N) {
              for (var F = x; F--; )
                if (n[F] === N)
                  continue e;
              b.push(A);
            } else
              p(n, N, l) || b.push(A);
          }
        return b;
      }
      var Xn = wh(wn), qf = wh(Ql, !0);
      function c$(t, n) {
        var i = !0;
        return Xn(t, function(l, d, p) {
          return i = !!n(l, d, p), i;
        }), i;
      }
      function Os(t, n, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var p = t[l], m = n(p);
          if (m != null && (g === r ? m === m && !xt(m) : i(m, g)))
            var g = m, b = p;
        }
        return b;
      }
      function d$(t, n, i, l) {
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
      function Ze(t, n, i, l, d) {
        var p = -1, m = t.length;
        for (i || (i = Q$), d || (d = []); ++p < m; ) {
          var g = t[p];
          n > 0 && i(g) ? n > 1 ? Ze(g, n - 1, i, l, d) : Zn(d, g) : l || (d[d.length] = g);
        }
        return d;
      }
      var Xl = vh(), zf = vh(!0);
      function wn(t, n) {
        return t && Xl(t, n, He);
      }
      function Ql(t, n) {
        return t && zf(t, n, He);
      }
      function Ps(t, n) {
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
        return t == null ? t === r ? Fg : ps : Vr && Vr in ye(t) ? G$(t) : sy(t);
      }
      function eu(t, n) {
        return t > n;
      }
      function f$(t, n) {
        return t != null && _e.call(t, n);
      }
      function h$(t, n) {
        return t != null && n in ye(t);
      }
      function p$(t, n, i) {
        return t >= Qe(n, i) && t < Re(n, i);
      }
      function tu(t, n, i) {
        for (var l = i ? Ol : gs, d = t[0].length, p = t.length, m = p, g = C(p), b = 1 / 0, x = []; m--; ) {
          var A = t[m];
          m && n && (A = Ee(A, It(n))), b = Qe(A.length, b), g[m] = !i && (n || d >= 120 && A.length >= 120) ? new Cr(m && A) : r;
        }
        A = t[0];
        var N = -1, F = g[0];
        e:
          for (; ++N < d && x.length < b; ) {
            var q = A[N], Y = n ? n(q) : q;
            if (q = i || q !== 0 ? q : 0, !(F ? si(F, Y) : l(x, Y, i))) {
              for (m = p; --m; ) {
                var Q = g[m];
                if (!(Q ? si(Q, Y) : l(t[m], Y, i)))
                  continue e;
              }
              F && F.push(Y), x.push(q);
            }
          }
        return x;
      }
      function w$(t, n, i, l) {
        return wn(t, function(d, p, m) {
          n(l, i(d), p, m);
        }), l;
      }
      function pi(t, n, i) {
        n = er(n, t), t = Dh(t, n);
        var l = t == null ? t : t[mn(zt(n))];
        return l == null ? r : Et(l, t, i);
      }
      function Gf(t) {
        return Be(t) && lt(t) == In;
      }
      function v$(t) {
        return Be(t) && lt(t) == ii;
      }
      function m$(t) {
        return Be(t) && lt(t) == Yn;
      }
      function wi(t, n, i, l, d) {
        return t === n ? !0 : t == null || n == null || !Be(t) && !Be(n) ? t !== t && n !== n : _$(t, n, i, l, wi, d);
      }
      function _$(t, n, i, l, d, p) {
        var m = J(t), g = J(n), b = m ? $r : et(t), x = g ? $r : et(n);
        b = b == In ? Pt : b, x = x == In ? Pt : x;
        var A = b == Pt, N = x == Pt, F = b == x;
        if (F && nr(t)) {
          if (!nr(n))
            return !1;
          m = !0, A = !1;
        }
        if (F && !A)
          return p || (p = new nn()), m || co(t) ? Eh(t, n, i, l, d, p) : z$(t, n, b, i, l, d, p);
        if (!(i & D)) {
          var q = A && _e.call(t, "__wrapped__"), Y = N && _e.call(n, "__wrapped__");
          if (q || Y) {
            var Q = q ? t.value() : t, G = Y ? n.value() : n;
            return p || (p = new nn()), d(Q, G, i, l, p);
          }
        }
        return F ? (p || (p = new nn()), Y$(t, n, i, l, d, p)) : !1;
      }
      function g$(t) {
        return Be(t) && et(t) == wt;
      }
      function nu(t, n, i, l) {
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
          var b = g[0], x = t[b], A = g[1];
          if (m && g[2]) {
            if (x === r && !(b in t))
              return !1;
          } else {
            var N = new nn();
            if (l)
              var F = l(x, A, b, t, n, N);
            if (!(F === r ? wi(A, x, D | M, l, N) : F))
              return !1;
          }
        }
        return !0;
      }
      function jf(t) {
        if (!ke(t) || ty(t))
          return !1;
        var n = Nn(t) ? g0 : u1;
        return n.test(kr(t));
      }
      function $$(t) {
        return Be(t) && lt(t) == ni;
      }
      function y$(t) {
        return Be(t) && et(t) == en;
      }
      function V$(t) {
        return Be(t) && ta(t.length) && !!Ce[lt(t)];
      }
      function Zf(t) {
        return typeof t == "function" ? t : t == null ? gt : typeof t == "object" ? J(t) ? Xf(t[0], t[1]) : Jf(t) : mp(t);
      }
      function ru(t) {
        if (!_i(t))
          return S0(t);
        var n = [];
        for (var i in ye(t))
          _e.call(t, i) && i != "constructor" && n.push(i);
        return n;
      }
      function b$(t) {
        if (!ke(t))
          return iy(t);
        var n = _i(t), i = [];
        for (var l in t)
          l == "constructor" && (n || !_e.call(t, l)) || i.push(l);
        return i;
      }
      function ou(t, n) {
        return t < n;
      }
      function Kf(t, n) {
        var i = -1, l = mt(t) ? C(t.length) : [];
        return Xn(t, function(d, p, m) {
          l[++i] = n(d, p, m);
        }), l;
      }
      function Jf(t) {
        var n = gu(t);
        return n.length == 1 && n[0][2] ? Bh(n[0][0], n[0][1]) : function(i) {
          return i === t || nu(i, t, n);
        };
      }
      function Xf(t, n) {
        return yu(t) && Ah(n) ? Bh(mn(t), n) : function(i) {
          var l = Bu(i, t);
          return l === r && l === n ? Tu(i, t) : wi(n, l, D | M);
        };
      }
      function Rs(t, n, i, l, d) {
        t !== n && Xl(n, function(p, m) {
          if (d || (d = new nn()), ke(p))
            C$(t, n, m, i, Rs, l, d);
          else {
            var g = l ? l(bu(t, m), p, m + "", t, n, d) : r;
            g === r && (g = p), Kl(t, m, g);
          }
        }, _t);
      }
      function C$(t, n, i, l, d, p, m) {
        var g = bu(t, i), b = bu(n, i), x = m.get(b);
        if (x) {
          Kl(t, i, x);
          return;
        }
        var A = p ? p(g, b, i + "", t, n, m) : r, N = A === r;
        if (N) {
          var F = J(b), q = !F && nr(b), Y = !F && !q && co(b);
          A = b, F || q || Y ? J(g) ? A = g : Te(g) ? A = vt(g) : q ? (N = !1, A = ch(b, !0)) : Y ? (N = !1, A = dh(b, !0)) : A = [] : $i(b) || xr(b) ? (A = g, xr(g) ? A = ap(g) : (!ke(g) || Nn(g)) && (A = xh(b))) : N = !1;
        }
        N && (m.set(b, A), d(A, b, l, p, m), m.delete(b)), Kl(t, i, A);
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
        }) : n = [gt];
        var l = -1;
        n = Ee(n, It(z()));
        var d = Kf(t, function(p, m, g) {
          var b = Ee(n, function(x) {
            return x(p);
          });
          return { criteria: b, index: ++l, value: p };
        });
        return J1(d, function(p, m) {
          return O$(p, m, i);
        });
      }
      function S$(t, n) {
        return th(t, n, function(i, l) {
          return Tu(t, l);
        });
      }
      function th(t, n, i) {
        for (var l = -1, d = n.length, p = {}; ++l < d; ) {
          var m = n[l], g = Er(t, m);
          i(g, m) && vi(p, er(m, t), g);
        }
        return p;
      }
      function E$(t) {
        return function(n) {
          return Er(n, t);
        };
      }
      function iu(t, n, i, l) {
        var d = l ? K1 : Qr, p = -1, m = n.length, g = t;
        for (t === n && (n = vt(n)), i && (g = Ee(t, It(i))); ++p < m; )
          for (var b = 0, x = n[p], A = i ? i(x) : x; (b = d(g, A, b, l)) > -1; )
            g !== t && xs.call(g, b, 1), xs.call(t, b, 1);
        return t;
      }
      function nh(t, n) {
        for (var i = t ? n.length : 0, l = i - 1; i--; ) {
          var d = n[i];
          if (i == l || d !== p) {
            var p = d;
            Dn(d) ? xs.call(t, d, 1) : uu(t, d);
          }
        }
        return t;
      }
      function su(t, n) {
        return t + Ts(Mf() * (n - t + 1));
      }
      function I$(t, n, i, l) {
        for (var d = -1, p = Re(Bs((n - t) / (i || 1)), 0), m = C(p); p--; )
          m[l ? p : ++d] = t, t += i;
        return m;
      }
      function au(t, n) {
        var i = "";
        if (!t || n < 1 || n > qe)
          return i;
        do
          n % 2 && (i += t), n = Ts(n / 2), n && (t += t);
        while (n);
        return i;
      }
      function ne(t, n) {
        return Cu(Th(t, n, gt), t + "");
      }
      function k$(t) {
        return Rf(fo(t));
      }
      function x$(t, n) {
        var i = fo(t);
        return Zs(i, Sr(n, 0, i.length));
      }
      function vi(t, n, i, l) {
        if (!ke(t))
          return t;
        n = er(n, t);
        for (var d = -1, p = n.length, m = p - 1, g = t; g != null && ++d < p; ) {
          var b = mn(n[d]), x = i;
          if (b === "__proto__" || b === "constructor" || b === "prototype")
            return t;
          if (d != m) {
            var A = g[b];
            x = l ? l(A, b, g) : r, x === r && (x = ke(A) ? A : Dn(n[d + 1]) ? [] : {});
          }
          fi(g, b, x), g = g[b];
        }
        return t;
      }
      var rh = Ds ? function(t, n) {
        return Ds.set(t, n), t;
      } : gt, A$ = As ? function(t, n) {
        return As(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Nu(n),
          writable: !0
        });
      } : gt;
      function B$(t) {
        return Zs(fo(t));
      }
      function Ht(t, n, i) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = C(d); ++l < d; )
          p[l] = t[l + n];
        return p;
      }
      function T$(t, n) {
        var i;
        return Xn(t, function(l, d, p) {
          return i = n(l, d, p), !i;
        }), !!i;
      }
      function Fs(t, n, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= cs) {
          for (; l < d; ) {
            var p = l + d >>> 1, m = t[p];
            m !== null && !xt(m) && (i ? m <= n : m < n) ? l = p + 1 : d = p;
          }
          return d;
        }
        return lu(t, n, gt, i);
      }
      function lu(t, n, i, l) {
        var d = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var m = n !== n, g = n === null, b = xt(n), x = n === r; d < p; ) {
          var A = Ts((d + p) / 2), N = i(t[A]), F = N !== r, q = N === null, Y = N === N, Q = xt(N);
          if (m)
            var G = l || Y;
          else
            x ? G = Y && (l || F) : g ? G = Y && F && (l || !q) : b ? G = Y && F && !q && (l || !Q) : q || Q ? G = !1 : G = l ? N <= n : N < n;
          G ? d = A + 1 : p = A;
        }
        return Qe(p, us);
      }
      function oh(t, n) {
        for (var i = -1, l = t.length, d = 0, p = []; ++i < l; ) {
          var m = t[i], g = n ? n(m) : m;
          if (!i || !rn(g, b)) {
            var b = g;
            p[d++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function ih(t) {
        return typeof t == "number" ? t : xt(t) ? gr : +t;
      }
      function kt(t) {
        if (typeof t == "string")
          return t;
        if (J(t))
          return Ee(t, kt) + "";
        if (xt(t))
          return Of ? Of.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Le ? "-0" : n;
      }
      function Qn(t, n, i) {
        var l = -1, d = gs, p = t.length, m = !0, g = [], b = g;
        if (i)
          m = !1, d = Ol;
        else if (p >= a) {
          var x = n ? null : q$(t);
          if (x)
            return ys(x);
          m = !1, d = si, b = new Cr();
        } else
          b = n ? [] : g;
        e:
          for (; ++l < p; ) {
            var A = t[l], N = n ? n(A) : A;
            if (A = i || A !== 0 ? A : 0, m && N === N) {
              for (var F = b.length; F--; )
                if (b[F] === N)
                  continue e;
              n && b.push(N), g.push(A);
            } else
              d(b, N, i) || (b !== g && b.push(N), g.push(A));
          }
        return g;
      }
      function uu(t, n) {
        return n = er(n, t), t = Dh(t, n), t == null || delete t[mn(zt(n))];
      }
      function sh(t, n, i, l) {
        return vi(t, n, i(Er(t, n)), l);
      }
      function Us(t, n, i, l) {
        for (var d = t.length, p = l ? d : -1; (l ? p-- : ++p < d) && n(t[p], p, t); )
          ;
        return i ? Ht(t, l ? 0 : p, l ? p + 1 : d) : Ht(t, l ? p + 1 : 0, l ? d : p);
      }
      function ah(t, n) {
        var i = t;
        return i instanceof oe && (i = i.value()), Pl(n, function(l, d) {
          return d.func.apply(d.thisArg, Zn([l], d.args));
        }, i);
      }
      function cu(t, n, i) {
        var l = t.length;
        if (l < 2)
          return l ? Qn(t[0]) : [];
        for (var d = -1, p = C(l); ++d < l; )
          for (var m = t[d], g = -1; ++g < l; )
            g != d && (p[d] = hi(p[d] || m, t[g], n, i));
        return Qn(Ze(p, 1), n, i);
      }
      function lh(t, n, i) {
        for (var l = -1, d = t.length, p = n.length, m = {}; ++l < d; ) {
          var g = l < p ? n[l] : r;
          i(m, t[l], g);
        }
        return m;
      }
      function du(t) {
        return Te(t) ? t : [];
      }
      function fu(t) {
        return typeof t == "function" ? t : gt;
      }
      function er(t, n) {
        return J(t) ? t : yu(t, n) ? [t] : Oh(pe(t));
      }
      var D$ = ne;
      function tr(t, n, i) {
        var l = t.length;
        return i = i === r ? l : i, !n && i >= l ? t : Ht(t, n, i);
      }
      var uh = $0 || function(t) {
        return je.clearTimeout(t);
      };
      function ch(t, n) {
        if (n)
          return t.slice();
        var i = t.length, l = Bf ? Bf(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function hu(t) {
        var n = new t.constructor(t.byteLength);
        return new Is(n).set(new Is(t)), n;
      }
      function N$(t, n) {
        var i = n ? hu(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function L$(t) {
        var n = new t.constructor(t.source, Yd.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function M$(t) {
        return di ? ye(di.call(t)) : {};
      }
      function dh(t, n) {
        var i = n ? hu(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function fh(t, n) {
        if (t !== n) {
          var i = t !== r, l = t === null, d = t === t, p = xt(t), m = n !== r, g = n === null, b = n === n, x = xt(n);
          if (!g && !x && !p && t > n || p && m && b && !g && !x || l && m && b || !i && b || !d)
            return 1;
          if (!l && !p && !x && t < n || x && i && d && !l && !p || g && i && d || !m && d || !b)
            return -1;
        }
        return 0;
      }
      function O$(t, n, i) {
        for (var l = -1, d = t.criteria, p = n.criteria, m = d.length, g = i.length; ++l < m; ) {
          var b = fh(d[l], p[l]);
          if (b) {
            if (l >= g)
              return b;
            var x = i[l];
            return b * (x == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function hh(t, n, i, l) {
        for (var d = -1, p = t.length, m = i.length, g = -1, b = n.length, x = Re(p - m, 0), A = C(b + x), N = !l; ++g < b; )
          A[g] = n[g];
        for (; ++d < m; )
          (N || d < p) && (A[i[d]] = t[d]);
        for (; x--; )
          A[g++] = t[d++];
        return A;
      }
      function ph(t, n, i, l) {
        for (var d = -1, p = t.length, m = -1, g = i.length, b = -1, x = n.length, A = Re(p - g, 0), N = C(A + x), F = !l; ++d < A; )
          N[d] = t[d];
        for (var q = d; ++b < x; )
          N[q + b] = n[b];
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
      function vn(t, n, i, l) {
        var d = !i;
        i || (i = {});
        for (var p = -1, m = n.length; ++p < m; ) {
          var g = n[p], b = l ? l(i[g], t[g], g, i, t) : r;
          b === r && (b = t[g]), d ? An(i, g, b) : fi(i, g, b);
        }
        return i;
      }
      function P$(t, n) {
        return vn(t, $u(t), n);
      }
      function R$(t, n) {
        return vn(t, Ih(t), n);
      }
      function Ws(t, n) {
        return function(i, l) {
          var d = J(i) ? H1 : a$, p = n ? n() : {};
          return d(i, t, z(l, 2), p);
        };
      }
      function ao(t) {
        return ne(function(n, i) {
          var l = -1, d = i.length, p = d > 1 ? i[d - 1] : r, m = d > 2 ? i[2] : r;
          for (p = t.length > 3 && typeof p == "function" ? (d--, p) : r, m && ut(i[0], i[1], m) && (p = d < 3 ? r : p, d = 1), n = ye(n); ++l < d; ) {
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
          if (!mt(i))
            return t(i, l);
          for (var d = i.length, p = n ? d : -1, m = ye(i); (n ? p-- : ++p < d) && l(m[p], p, m) !== !1; )
            ;
          return i;
        };
      }
      function vh(t) {
        return function(n, i, l) {
          for (var d = -1, p = ye(n), m = l(n), g = m.length; g--; ) {
            var b = m[t ? g : ++d];
            if (i(p[b], b, p) === !1)
              break;
          }
          return n;
        };
      }
      function F$(t, n, i) {
        var l = n & L, d = mi(t);
        function p() {
          var m = this && this !== je && this instanceof p ? d : t;
          return m.apply(l ? i : this, arguments);
        }
        return p;
      }
      function mh(t) {
        return function(n) {
          n = pe(n);
          var i = eo(n) ? tn(n) : r, l = i ? i[0] : n.charAt(0), d = i ? tr(i, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function lo(t) {
        return function(n) {
          return Pl(wp(pp(n).replace(A1, "")), t, "");
        };
      }
      function mi(t) {
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
          return ke(l) ? l : i;
        };
      }
      function U$(t, n, i) {
        var l = mi(t);
        function d() {
          for (var p = arguments.length, m = C(p), g = p, b = uo(d); g--; )
            m[g] = arguments[g];
          var x = p < 3 && m[0] !== b && m[p - 1] !== b ? [] : Kn(m, b);
          if (p -= x.length, p < i)
            return Vh(
              t,
              n,
              qs,
              d.placeholder,
              r,
              m,
              x,
              r,
              r,
              i - p
            );
          var A = this && this !== je && this instanceof d ? l : t;
          return Et(A, this, m);
        }
        return d;
      }
      function _h(t) {
        return function(n, i, l) {
          var d = ye(n);
          if (!mt(n)) {
            var p = z(i, 3);
            n = He(n), i = function(g) {
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
            if (d && !m && Gs(p) == "wrapper")
              var m = new Wt([], !0);
          }
          for (l = m ? l : i; ++l < i; ) {
            p = n[l];
            var g = Gs(p), b = g == "wrapper" ? _u(p) : r;
            b && Vu(b[0]) && b[1] == (P | B | I | H) && !b[4].length && b[9] == 1 ? m = m[Gs(b[0])].apply(m, b[3]) : m = p.length == 1 && Vu(p) ? m[g]() : m.thru(p);
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
      function qs(t, n, i, l, d, p, m, g, b, x) {
        var A = n & P, N = n & L, F = n & S, q = n & (B | O), Y = n & we, Q = F ? r : mi(t);
        function G() {
          for (var re = arguments.length, ie = C(re), At = re; At--; )
            ie[At] = arguments[At];
          if (q)
            var ct = uo(G), Bt = Q1(ie, ct);
          if (l && (ie = hh(ie, l, d, q)), p && (ie = ph(ie, p, m, q)), re -= Bt, q && re < x) {
            var De = Kn(ie, ct);
            return Vh(
              t,
              n,
              qs,
              G.placeholder,
              i,
              ie,
              De,
              g,
              b,
              x - re
            );
          }
          var on = N ? i : this, Mn = F ? on[t] : t;
          return re = ie.length, g ? ie = ay(ie, g) : Y && re > 1 && ie.reverse(), A && b < re && (ie.length = b), this && this !== je && this instanceof G && (Mn = Q || mi(Mn)), Mn.apply(on, ie);
        }
        return G;
      }
      function $h(t, n) {
        return function(i, l) {
          return w$(i, t, n(l), {});
        };
      }
      function Hs(t, n) {
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
      function pu(t) {
        return Tn(function(n) {
          return n = Ee(n, It(z())), ne(function(i) {
            var l = this;
            return t(n, function(d) {
              return Et(d, l, i);
            });
          });
        });
      }
      function zs(t, n) {
        n = n === r ? " " : kt(n);
        var i = n.length;
        if (i < 2)
          return i ? au(n, t) : n;
        var l = au(n, Bs(t / to(n)));
        return eo(n) ? tr(tn(l), 0, t).join("") : l.slice(0, t);
      }
      function W$(t, n, i, l) {
        var d = n & L, p = mi(t);
        function m() {
          for (var g = -1, b = arguments.length, x = -1, A = l.length, N = C(A + b), F = this && this !== je && this instanceof m ? p : t; ++x < A; )
            N[x] = l[x];
          for (; b--; )
            N[x++] = arguments[++g];
          return Et(F, d ? i : this, N);
        }
        return m;
      }
      function yh(t) {
        return function(n, i, l) {
          return l && typeof l != "number" && ut(n, i, l) && (i = l = r), n = Ln(n), i === r ? (i = n, n = 0) : i = Ln(i), l = l === r ? n < i ? 1 : -1 : Ln(l), I$(n, i, l, t);
        };
      }
      function Ys(t) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Yt(n), i = Yt(i)), t(n, i);
        };
      }
      function Vh(t, n, i, l, d, p, m, g, b, x) {
        var A = n & B, N = A ? m : r, F = A ? r : m, q = A ? p : r, Y = A ? r : p;
        n |= A ? I : R, n &= ~(A ? R : I), n & T || (n &= ~(L | S));
        var Q = [
          t,
          n,
          d,
          q,
          N,
          Y,
          F,
          g,
          b,
          x
        ], G = i.apply(r, Q);
        return Vu(t) && Nh(G, Q), G.placeholder = l, Lh(G, t, n);
      }
      function wu(t) {
        var n = Pe[t];
        return function(i, l) {
          if (i = Yt(i), l = l == null ? 0 : Qe(X(l), 292), l && Lf(i)) {
            var d = (pe(i) + "e").split("e"), p = n(d[0] + "e" + (+d[1] + l));
            return d = (pe(p) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(i);
        };
      }
      var q$ = oo && 1 / ys(new oo([, -0]))[1] == Le ? function(t) {
        return new oo(t);
      } : Ou;
      function bh(t) {
        return function(n) {
          var i = et(n);
          return i == wt ? zl(n) : i == en ? s0(n) : X1(n, t(n));
        };
      }
      function Bn(t, n, i, l, d, p, m, g) {
        var b = n & S;
        if (!b && typeof t != "function")
          throw new Ut(c);
        var x = l ? l.length : 0;
        if (x || (n &= ~(I | R), l = d = r), m = m === r ? m : Re(X(m), 0), g = g === r ? g : X(g), x -= d ? d.length : 0, n & R) {
          var A = l, N = d;
          l = d = r;
        }
        var F = b ? r : _u(t), q = [
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
        if (F && oy(q, F), t = q[0], n = q[1], i = q[2], l = q[3], d = q[4], g = q[9] = q[9] === r ? b ? 0 : t.length : Re(q[9] - x, 0), !g && n & (B | O) && (n &= ~(B | O)), !n || n == L)
          var Y = F$(t, n, i);
        else
          n == B || n == O ? Y = U$(t, n, g) : (n == I || n == (L | I)) && !d.length ? Y = W$(t, n, i, l) : Y = qs.apply(r, q);
        var Q = F ? rh : Nh;
        return Lh(Q(Y, q), t, n);
      }
      function Ch(t, n, i, l) {
        return t === r || rn(t, ro[i]) && !_e.call(l, i) ? n : t;
      }
      function Sh(t, n, i, l, d, p) {
        return ke(t) && ke(n) && (p.set(n, t), Rs(t, n, r, Sh, p), p.delete(n)), t;
      }
      function H$(t) {
        return $i(t) ? r : t;
      }
      function Eh(t, n, i, l, d, p) {
        var m = i & D, g = t.length, b = n.length;
        if (g != b && !(m && b > g))
          return !1;
        var x = p.get(t), A = p.get(n);
        if (x && A)
          return x == n && A == t;
        var N = -1, F = !0, q = i & M ? new Cr() : r;
        for (p.set(t, n), p.set(n, t); ++N < g; ) {
          var Y = t[N], Q = n[N];
          if (l)
            var G = m ? l(Q, Y, N, n, t, p) : l(Y, Q, N, t, n, p);
          if (G !== r) {
            if (G)
              continue;
            F = !1;
            break;
          }
          if (q) {
            if (!Rl(n, function(re, ie) {
              if (!si(q, ie) && (Y === re || d(Y, re, i, l, p)))
                return q.push(ie);
            })) {
              F = !1;
              break;
            }
          } else if (!(Y === Q || d(Y, Q, i, l, p))) {
            F = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), F;
      }
      function z$(t, n, i, l, d, p, m) {
        switch (i) {
          case Jr:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case ii:
            return !(t.byteLength != n.byteLength || !p(new Is(t), new Is(n)));
          case zn:
          case Yn:
          case Gn:
            return rn(+t, +n);
          case ae:
            return t.name == n.name && t.message == n.message;
          case ni:
          case ri:
            return t == n + "";
          case wt:
            var g = zl;
          case en:
            var b = l & D;
            if (g || (g = ys), t.size != n.size && !b)
              return !1;
            var x = m.get(t);
            if (x)
              return x == n;
            l |= M, m.set(t, n);
            var A = Eh(g(t), g(n), l, d, p, m);
            return m.delete(t), A;
          case ws:
            if (di)
              return di.call(t) == di.call(n);
        }
        return !1;
      }
      function Y$(t, n, i, l, d, p) {
        var m = i & D, g = vu(t), b = g.length, x = vu(n), A = x.length;
        if (b != A && !m)
          return !1;
        for (var N = b; N--; ) {
          var F = g[N];
          if (!(m ? F in n : _e.call(n, F)))
            return !1;
        }
        var q = p.get(t), Y = p.get(n);
        if (q && Y)
          return q == n && Y == t;
        var Q = !0;
        p.set(t, n), p.set(n, t);
        for (var G = m; ++N < b; ) {
          F = g[N];
          var re = t[F], ie = n[F];
          if (l)
            var At = m ? l(ie, re, F, n, t, p) : l(re, ie, F, t, n, p);
          if (!(At === r ? re === ie || d(re, ie, i, l, p) : At)) {
            Q = !1;
            break;
          }
          G || (G = F == "constructor");
        }
        if (Q && !G) {
          var ct = t.constructor, Bt = n.constructor;
          ct != Bt && "constructor" in t && "constructor" in n && !(typeof ct == "function" && ct instanceof ct && typeof Bt == "function" && Bt instanceof Bt) && (Q = !1);
        }
        return p.delete(t), p.delete(n), Q;
      }
      function Tn(t) {
        return Cu(Th(t, r, Uh), t + "");
      }
      function vu(t) {
        return Yf(t, He, $u);
      }
      function mu(t) {
        return Yf(t, _t, Ih);
      }
      var _u = Ds ? function(t) {
        return Ds.get(t);
      } : Ou;
      function Gs(t) {
        for (var n = t.name + "", i = io[n], l = _e.call(io, n) ? i.length : 0; l--; ) {
          var d = i[l], p = d.func;
          if (p == null || p == t)
            return d.name;
        }
        return n;
      }
      function uo(t) {
        var n = _e.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function z() {
        var t = h.iteratee || Lu;
        return t = t === Lu ? Zf : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function js(t, n) {
        var i = t.__data__;
        return ey(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function gu(t) {
        for (var n = He(t), i = n.length; i--; ) {
          var l = n[i], d = t[l];
          n[i] = [l, d, Ah(d)];
        }
        return n;
      }
      function Ir(t, n) {
        var i = r0(t, n);
        return jf(i) ? i : r;
      }
      function G$(t) {
        var n = _e.call(t, Vr), i = t[Vr];
        try {
          t[Vr] = r;
          var l = !0;
        } catch {
        }
        var d = Ss.call(t);
        return l && (n ? t[Vr] = i : delete t[Vr]), d;
      }
      var $u = Gl ? function(t) {
        return t == null ? [] : (t = ye(t), jn(Gl(t), function(n) {
          return Df.call(t, n);
        }));
      } : Pu, Ih = Gl ? function(t) {
        for (var n = []; t; )
          Zn(n, $u(t)), t = ks(t);
        return n;
      } : Pu, et = lt;
      (jl && et(new jl(new ArrayBuffer(1))) != Jr || li && et(new li()) != wt || Zl && et(Zl.resolve()) != Wd || oo && et(new oo()) != en || ui && et(new ui()) != oi) && (et = function(t) {
        var n = lt(t), i = n == Pt ? t.constructor : r, l = i ? kr(i) : "";
        if (l)
          switch (l) {
            case x0:
              return Jr;
            case A0:
              return wt;
            case B0:
              return Wd;
            case T0:
              return en;
            case D0:
              return oi;
          }
        return n;
      });
      function j$(t, n, i) {
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
              n = Qe(n, t + m);
              break;
            case "takeRight":
              t = Re(t, n - m);
              break;
          }
        }
        return { start: t, end: n };
      }
      function Z$(t) {
        var n = t.match(t1);
        return n ? n[1].split(n1) : [];
      }
      function kh(t, n, i) {
        n = er(n, t);
        for (var l = -1, d = n.length, p = !1; ++l < d; ) {
          var m = mn(n[l]);
          if (!(p = t != null && i(t, m)))
            break;
          t = t[m];
        }
        return p || ++l != d ? p : (d = t == null ? 0 : t.length, !!d && ta(d) && Dn(m, d) && (J(t) || xr(t)));
      }
      function K$(t) {
        var n = t.length, i = new t.constructor(n);
        return n && typeof t[0] == "string" && _e.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function xh(t) {
        return typeof t.constructor == "function" && !_i(t) ? so(ks(t)) : {};
      }
      function J$(t, n, i) {
        var l = t.constructor;
        switch (n) {
          case ii:
            return hu(t);
          case zn:
          case Yn:
            return new l(+t);
          case Jr:
            return N$(t, i);
          case gl:
          case $l:
          case yl:
          case Vl:
          case bl:
          case Cl:
          case Sl:
          case El:
          case Il:
            return dh(t, i);
          case wt:
            return new l();
          case Gn:
          case ri:
            return new l(t);
          case ni:
            return L$(t);
          case en:
            return new l();
          case ws:
            return M$(t);
        }
      }
      function X$(t, n) {
        var i = n.length;
        if (!i)
          return t;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), t.replace(e1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Q$(t) {
        return J(t) || xr(t) || !!(Nf && t && t[Nf]);
      }
      function Dn(t, n) {
        var i = typeof t;
        return n = n == null ? qe : n, !!n && (i == "number" || i != "symbol" && d1.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function ut(t, n, i) {
        if (!ke(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? mt(i) && Dn(n, i.length) : l == "string" && n in i) ? rn(i[n], t) : !1;
      }
      function yu(t, n) {
        if (J(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || xt(t) ? !0 : Kg.test(t) || !Zg.test(t) || n != null && t in ye(n);
      }
      function ey(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function Vu(t) {
        var n = Gs(t), i = h[n];
        if (typeof i != "function" || !(n in oe.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = _u(i);
        return !!l && t === l[0];
      }
      function ty(t) {
        return !!Af && Af in t;
      }
      var ny = bs ? Nn : Ru;
      function _i(t) {
        var n = t && t.constructor, i = typeof n == "function" && n.prototype || ro;
        return t === i;
      }
      function Ah(t) {
        return t === t && !ke(t);
      }
      function Bh(t, n) {
        return function(i) {
          return i == null ? !1 : i[t] === n && (n !== r || t in ye(i));
        };
      }
      function ry(t) {
        var n = Qs(t, function(l) {
          return i.size === v && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function oy(t, n) {
        var i = t[1], l = n[1], d = i | l, p = d < (L | S | P), m = l == P && i == B || l == P && i == H && t[7].length <= n[8] || l == (P | H) && n[7].length <= n[8] && i == B;
        if (!(p || m))
          return t;
        l & L && (t[2] = n[2], d |= i & L ? 0 : T);
        var g = n[3];
        if (g) {
          var b = t[3];
          t[3] = b ? hh(b, g, n[4]) : g, t[4] = b ? Kn(t[3], _) : n[4];
        }
        return g = n[5], g && (b = t[5], t[5] = b ? ph(b, g, n[6]) : g, t[6] = b ? Kn(t[5], _) : n[6]), g = n[7], g && (t[7] = g), l & P && (t[8] = t[8] == null ? n[8] : Qe(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function iy(t) {
        var n = [];
        if (t != null)
          for (var i in ye(t))
            n.push(i);
        return n;
      }
      function sy(t) {
        return Ss.call(t);
      }
      function Th(t, n, i) {
        return n = Re(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, p = Re(l.length - n, 0), m = C(p); ++d < p; )
            m[d] = l[n + d];
          d = -1;
          for (var g = C(n + 1); ++d < n; )
            g[d] = l[d];
          return g[n] = i(m), Et(t, this, g);
        };
      }
      function Dh(t, n) {
        return n.length < 2 ? t : Er(t, Ht(n, 0, -1));
      }
      function ay(t, n) {
        for (var i = t.length, l = Qe(n.length, i), d = vt(t); l--; ) {
          var p = n[l];
          t[l] = Dn(p, i) ? d[p] : r;
        }
        return t;
      }
      function bu(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var Nh = Mh(rh), gi = V0 || function(t, n) {
        return je.setTimeout(t, n);
      }, Cu = Mh(A$);
      function Lh(t, n, i) {
        var l = n + "";
        return Cu(t, X$(l, ly(Z$(l), i)));
      }
      function Mh(t) {
        var n = 0, i = 0;
        return function() {
          var l = E0(), d = Ie - (l - i);
          if (i = l, d > 0) {
            if (++n >= Se)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Zs(t, n) {
        var i = -1, l = t.length, d = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var p = su(i, d), m = t[p];
          t[p] = t[i], t[i] = m;
        }
        return t.length = n, t;
      }
      var Oh = ry(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(Jg, function(i, l, d, p) {
          n.push(d ? p.replace(i1, "$1") : l || i);
        }), n;
      });
      function mn(t) {
        if (typeof t == "string" || xt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Le ? "-0" : n;
      }
      function kr(t) {
        if (t != null) {
          try {
            return Cs.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function ly(t, n) {
        return Ft(ds, function(i) {
          var l = "_." + i[0];
          n & i[1] && !gs(t, l) && t.push(l);
        }), t.sort();
      }
      function Ph(t) {
        if (t instanceof oe)
          return t.clone();
        var n = new Wt(t.__wrapped__, t.__chain__);
        return n.__actions__ = vt(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function uy(t, n, i) {
        (i ? ut(t, n, i) : n === r) ? n = 1 : n = Re(X(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, p = 0, m = C(Bs(l / n)); d < l; )
          m[p++] = Ht(t, d, d += n);
        return m;
      }
      function cy(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++n < i; ) {
          var p = t[n];
          p && (d[l++] = p);
        }
        return d;
      }
      function dy() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = C(t - 1), i = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Zn(J(i) ? vt(i) : [i], Ze(n, 1));
      }
      var fy = ne(function(t, n) {
        return Te(t) ? hi(t, Ze(n, 1, Te, !0)) : [];
      }), hy = ne(function(t, n) {
        var i = zt(n);
        return Te(i) && (i = r), Te(t) ? hi(t, Ze(n, 1, Te, !0), z(i, 2)) : [];
      }), py = ne(function(t, n) {
        var i = zt(n);
        return Te(i) && (i = r), Te(t) ? hi(t, Ze(n, 1, Te, !0), r, i) : [];
      });
      function wy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : X(n), Ht(t, n < 0 ? 0 : n, l)) : [];
      }
      function vy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : X(n), n = l - n, Ht(t, 0, n < 0 ? 0 : n)) : [];
      }
      function my(t, n) {
        return t && t.length ? Us(t, z(n, 3), !0, !0) : [];
      }
      function _y(t, n) {
        return t && t.length ? Us(t, z(n, 3), !0) : [];
      }
      function gy(t, n, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && ut(t, n, i) && (i = 0, l = d), d$(t, n, i, l)) : [];
      }
      function Rh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : X(i);
        return d < 0 && (d = Re(l + d, 0)), $s(t, z(n, 3), d);
      }
      function Fh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== r && (d = X(i), d = i < 0 ? Re(l + d, 0) : Qe(d, l - 1)), $s(t, z(n, 3), d, !0);
      }
      function Uh(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ze(t, 1) : [];
      }
      function $y(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ze(t, Le) : [];
      }
      function yy(t, n) {
        var i = t == null ? 0 : t.length;
        return i ? (n = n === r ? 1 : X(n), Ze(t, n)) : [];
      }
      function Vy(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function Wh(t) {
        return t && t.length ? t[0] : r;
      }
      function by(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : X(i);
        return d < 0 && (d = Re(l + d, 0)), Qr(t, n, d);
      }
      function Cy(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ht(t, 0, -1) : [];
      }
      var Sy = ne(function(t) {
        var n = Ee(t, du);
        return n.length && n[0] === t[0] ? tu(n) : [];
      }), Ey = ne(function(t) {
        var n = zt(t), i = Ee(t, du);
        return n === zt(i) ? n = r : i.pop(), i.length && i[0] === t[0] ? tu(i, z(n, 2)) : [];
      }), Iy = ne(function(t) {
        var n = zt(t), i = Ee(t, du);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === t[0] ? tu(i, r, n) : [];
      });
      function ky(t, n) {
        return t == null ? "" : C0.call(t, n);
      }
      function zt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function xy(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== r && (d = X(i), d = d < 0 ? Re(l + d, 0) : Qe(d, l - 1)), n === n ? l0(t, n, d) : $s(t, Vf, d, !0);
      }
      function Ay(t, n) {
        return t && t.length ? Qf(t, X(n)) : r;
      }
      var By = ne(qh);
      function qh(t, n) {
        return t && t.length && n && n.length ? iu(t, n) : t;
      }
      function Ty(t, n, i) {
        return t && t.length && n && n.length ? iu(t, n, z(i, 2)) : t;
      }
      function Dy(t, n, i) {
        return t && t.length && n && n.length ? iu(t, n, r, i) : t;
      }
      var Ny = Tn(function(t, n) {
        var i = t == null ? 0 : t.length, l = Jl(t, n);
        return nh(t, Ee(n, function(d) {
          return Dn(d, i) ? +d : d;
        }).sort(fh)), l;
      });
      function Ly(t, n) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, d = [], p = t.length;
        for (n = z(n, 3); ++l < p; ) {
          var m = t[l];
          n(m, l, t) && (i.push(m), d.push(l));
        }
        return nh(t, d), i;
      }
      function Su(t) {
        return t == null ? t : k0.call(t);
      }
      function My(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && ut(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : X(n), i = i === r ? l : X(i)), Ht(t, n, i)) : [];
      }
      function Oy(t, n) {
        return Fs(t, n);
      }
      function Py(t, n, i) {
        return lu(t, n, z(i, 2));
      }
      function Ry(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Fs(t, n);
          if (l < i && rn(t[l], n))
            return l;
        }
        return -1;
      }
      function Fy(t, n) {
        return Fs(t, n, !0);
      }
      function Uy(t, n, i) {
        return lu(t, n, z(i, 2), !0);
      }
      function Wy(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Fs(t, n, !0) - 1;
          if (rn(t[l], n))
            return l;
        }
        return -1;
      }
      function qy(t) {
        return t && t.length ? oh(t) : [];
      }
      function Hy(t, n) {
        return t && t.length ? oh(t, z(n, 2)) : [];
      }
      function zy(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ht(t, 1, n) : [];
      }
      function Yy(t, n, i) {
        return t && t.length ? (n = i || n === r ? 1 : X(n), Ht(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Gy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : X(n), n = l - n, Ht(t, n < 0 ? 0 : n, l)) : [];
      }
      function jy(t, n) {
        return t && t.length ? Us(t, z(n, 3), !1, !0) : [];
      }
      function Zy(t, n) {
        return t && t.length ? Us(t, z(n, 3)) : [];
      }
      var Ky = ne(function(t) {
        return Qn(Ze(t, 1, Te, !0));
      }), Jy = ne(function(t) {
        var n = zt(t);
        return Te(n) && (n = r), Qn(Ze(t, 1, Te, !0), z(n, 2));
      }), Xy = ne(function(t) {
        var n = zt(t);
        return n = typeof n == "function" ? n : r, Qn(Ze(t, 1, Te, !0), r, n);
      });
      function Qy(t) {
        return t && t.length ? Qn(t) : [];
      }
      function eV(t, n) {
        return t && t.length ? Qn(t, z(n, 2)) : [];
      }
      function tV(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? Qn(t, r, n) : [];
      }
      function Eu(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = jn(t, function(i) {
          if (Te(i))
            return n = Re(i.length, n), !0;
        }), ql(n, function(i) {
          return Ee(t, Fl(i));
        });
      }
      function Hh(t, n) {
        if (!(t && t.length))
          return [];
        var i = Eu(t);
        return n == null ? i : Ee(i, function(l) {
          return Et(n, r, l);
        });
      }
      var nV = ne(function(t, n) {
        return Te(t) ? hi(t, n) : [];
      }), rV = ne(function(t) {
        return cu(jn(t, Te));
      }), oV = ne(function(t) {
        var n = zt(t);
        return Te(n) && (n = r), cu(jn(t, Te), z(n, 2));
      }), iV = ne(function(t) {
        var n = zt(t);
        return n = typeof n == "function" ? n : r, cu(jn(t, Te), r, n);
      }), sV = ne(Eu);
      function aV(t, n) {
        return lh(t || [], n || [], fi);
      }
      function lV(t, n) {
        return lh(t || [], n || [], vi);
      }
      var uV = ne(function(t) {
        var n = t.length, i = n > 1 ? t[n - 1] : r;
        return i = typeof i == "function" ? (t.pop(), i) : r, Hh(t, i);
      });
      function zh(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function cV(t, n) {
        return n(t), t;
      }
      function Ks(t, n) {
        return n(t);
      }
      var dV = Tn(function(t) {
        var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(p) {
          return Jl(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof oe) || !Dn(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: Ks,
          args: [d],
          thisArg: r
        }), new Wt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function fV() {
        return zh(this);
      }
      function hV() {
        return new Wt(this.value(), this.__chain__);
      }
      function pV() {
        this.__values__ === r && (this.__values__ = ip(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function wV() {
        return this;
      }
      function vV(t) {
        for (var n, i = this; i instanceof Ls; ) {
          var l = Ph(i);
          l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
          var d = l;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function mV() {
        var t = this.__wrapped__;
        if (t instanceof oe) {
          var n = t;
          return this.__actions__.length && (n = new oe(this)), n = n.reverse(), n.__actions__.push({
            func: Ks,
            args: [Su],
            thisArg: r
          }), new Wt(n, this.__chain__);
        }
        return this.thru(Su);
      }
      function _V() {
        return ah(this.__wrapped__, this.__actions__);
      }
      var gV = Ws(function(t, n, i) {
        _e.call(t, i) ? ++t[i] : An(t, i, 1);
      });
      function $V(t, n, i) {
        var l = J(t) ? $f : c$;
        return i && ut(t, n, i) && (n = r), l(t, z(n, 3));
      }
      function yV(t, n) {
        var i = J(t) ? jn : Hf;
        return i(t, z(n, 3));
      }
      var VV = _h(Rh), bV = _h(Fh);
      function CV(t, n) {
        return Ze(Js(t, n), 1);
      }
      function SV(t, n) {
        return Ze(Js(t, n), Le);
      }
      function EV(t, n, i) {
        return i = i === r ? 1 : X(i), Ze(Js(t, n), i);
      }
      function Yh(t, n) {
        var i = J(t) ? Ft : Xn;
        return i(t, z(n, 3));
      }
      function Gh(t, n) {
        var i = J(t) ? z1 : qf;
        return i(t, z(n, 3));
      }
      var IV = Ws(function(t, n, i) {
        _e.call(t, i) ? t[i].push(n) : An(t, i, [n]);
      });
      function kV(t, n, i, l) {
        t = mt(t) ? t : fo(t), i = i && !l ? X(i) : 0;
        var d = t.length;
        return i < 0 && (i = Re(d + i, 0)), na(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && Qr(t, n, i) > -1;
      }
      var xV = ne(function(t, n, i) {
        var l = -1, d = typeof n == "function", p = mt(t) ? C(t.length) : [];
        return Xn(t, function(m) {
          p[++l] = d ? Et(n, m, i) : pi(m, n, i);
        }), p;
      }), AV = Ws(function(t, n, i) {
        An(t, i, n);
      });
      function Js(t, n) {
        var i = J(t) ? Ee : Kf;
        return i(t, z(n, 3));
      }
      function BV(t, n, i, l) {
        return t == null ? [] : (J(n) || (n = n == null ? [] : [n]), i = l ? r : i, J(i) || (i = i == null ? [] : [i]), eh(t, n, i));
      }
      var TV = Ws(function(t, n, i) {
        t[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function DV(t, n, i) {
        var l = J(t) ? Pl : Cf, d = arguments.length < 3;
        return l(t, z(n, 4), i, d, Xn);
      }
      function NV(t, n, i) {
        var l = J(t) ? Y1 : Cf, d = arguments.length < 3;
        return l(t, z(n, 4), i, d, qf);
      }
      function LV(t, n) {
        var i = J(t) ? jn : Hf;
        return i(t, ea(z(n, 3)));
      }
      function MV(t) {
        var n = J(t) ? Rf : k$;
        return n(t);
      }
      function OV(t, n, i) {
        (i ? ut(t, n, i) : n === r) ? n = 1 : n = X(n);
        var l = J(t) ? i$ : x$;
        return l(t, n);
      }
      function PV(t) {
        var n = J(t) ? s$ : B$;
        return n(t);
      }
      function RV(t) {
        if (t == null)
          return 0;
        if (mt(t))
          return na(t) ? to(t) : t.length;
        var n = et(t);
        return n == wt || n == en ? t.size : ru(t).length;
      }
      function FV(t, n, i) {
        var l = J(t) ? Rl : T$;
        return i && ut(t, n, i) && (n = r), l(t, z(n, 3));
      }
      var UV = ne(function(t, n) {
        if (t == null)
          return [];
        var i = n.length;
        return i > 1 && ut(t, n[0], n[1]) ? n = [] : i > 2 && ut(n[0], n[1], n[2]) && (n = [n[0]]), eh(t, Ze(n, 1), []);
      }), Xs = y0 || function() {
        return je.Date.now();
      };
      function WV(t, n) {
        if (typeof n != "function")
          throw new Ut(c);
        return t = X(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function jh(t, n, i) {
        return n = i ? r : n, n = t && n == null ? t.length : n, Bn(t, P, r, r, r, r, n);
      }
      function Zh(t, n) {
        var i;
        if (typeof n != "function")
          throw new Ut(c);
        return t = X(t), function() {
          return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = r), i;
        };
      }
      var Iu = ne(function(t, n, i) {
        var l = L;
        if (i.length) {
          var d = Kn(i, uo(Iu));
          l |= I;
        }
        return Bn(t, l, n, i, d);
      }), Kh = ne(function(t, n, i) {
        var l = L | S;
        if (i.length) {
          var d = Kn(i, uo(Kh));
          l |= I;
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
        var l = Bn(t, O, r, r, r, r, r, n);
        return l.placeholder = Xh.placeholder, l;
      }
      function Qh(t, n, i) {
        var l, d, p, m, g, b, x = 0, A = !1, N = !1, F = !0;
        if (typeof t != "function")
          throw new Ut(c);
        n = Yt(n) || 0, ke(i) && (A = !!i.leading, N = "maxWait" in i, p = N ? Re(Yt(i.maxWait) || 0, n) : p, F = "trailing" in i ? !!i.trailing : F);
        function q(De) {
          var on = l, Mn = d;
          return l = d = r, x = De, m = t.apply(Mn, on), m;
        }
        function Y(De) {
          return x = De, g = gi(re, n), A ? q(De) : m;
        }
        function Q(De) {
          var on = De - b, Mn = De - x, _p = n - on;
          return N ? Qe(_p, p - Mn) : _p;
        }
        function G(De) {
          var on = De - b, Mn = De - x;
          return b === r || on >= n || on < 0 || N && Mn >= p;
        }
        function re() {
          var De = Xs();
          if (G(De))
            return ie(De);
          g = gi(re, Q(De));
        }
        function ie(De) {
          return g = r, F && l ? q(De) : (l = d = r, m);
        }
        function At() {
          g !== r && uh(g), x = 0, l = b = d = g = r;
        }
        function ct() {
          return g === r ? m : ie(Xs());
        }
        function Bt() {
          var De = Xs(), on = G(De);
          if (l = arguments, d = this, b = De, on) {
            if (g === r)
              return Y(b);
            if (N)
              return uh(g), g = gi(re, n), q(b);
          }
          return g === r && (g = gi(re, n)), m;
        }
        return Bt.cancel = At, Bt.flush = ct, Bt;
      }
      var qV = ne(function(t, n) {
        return Wf(t, 1, n);
      }), HV = ne(function(t, n, i) {
        return Wf(t, Yt(n) || 0, i);
      });
      function zV(t) {
        return Bn(t, we);
      }
      function Qs(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Ut(c);
        var i = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(d))
            return p.get(d);
          var m = t.apply(this, l);
          return i.cache = p.set(d, m) || p, m;
        };
        return i.cache = new (Qs.Cache || xn)(), i;
      }
      Qs.Cache = xn;
      function ea(t) {
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
      function YV(t) {
        return Zh(2, t);
      }
      var GV = D$(function(t, n) {
        n = n.length == 1 && J(n[0]) ? Ee(n[0], It(z())) : Ee(Ze(n, 1), It(z()));
        var i = n.length;
        return ne(function(l) {
          for (var d = -1, p = Qe(l.length, i); ++d < p; )
            l[d] = n[d].call(this, l[d]);
          return Et(t, this, l);
        });
      }), ku = ne(function(t, n) {
        var i = Kn(n, uo(ku));
        return Bn(t, I, r, n, i);
      }), ep = ne(function(t, n) {
        var i = Kn(n, uo(ep));
        return Bn(t, R, r, n, i);
      }), jV = Tn(function(t, n) {
        return Bn(t, H, r, r, r, n);
      });
      function ZV(t, n) {
        if (typeof t != "function")
          throw new Ut(c);
        return n = n === r ? n : X(n), ne(t, n);
      }
      function KV(t, n) {
        if (typeof t != "function")
          throw new Ut(c);
        return n = n == null ? 0 : Re(X(n), 0), ne(function(i) {
          var l = i[n], d = tr(i, 0, n);
          return l && Zn(d, l), Et(t, this, d);
        });
      }
      function JV(t, n, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new Ut(c);
        return ke(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), Qh(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function XV(t) {
        return jh(t, 1);
      }
      function QV(t, n) {
        return ku(fu(n), t);
      }
      function eb() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return J(t) ? t : [t];
      }
      function tb(t) {
        return qt(t, k);
      }
      function nb(t, n) {
        return n = typeof n == "function" ? n : r, qt(t, k, n);
      }
      function rb(t) {
        return qt(t, $ | k);
      }
      function ob(t, n) {
        return n = typeof n == "function" ? n : r, qt(t, $ | k, n);
      }
      function ib(t, n) {
        return n == null || Uf(t, n, He(n));
      }
      function rn(t, n) {
        return t === n || t !== t && n !== n;
      }
      var sb = Ys(eu), ab = Ys(function(t, n) {
        return t >= n;
      }), xr = Gf(function() {
        return arguments;
      }()) ? Gf : function(t) {
        return Be(t) && _e.call(t, "callee") && !Df.call(t, "callee");
      }, J = C.isArray, lb = pf ? It(pf) : v$;
      function mt(t) {
        return t != null && ta(t.length) && !Nn(t);
      }
      function Te(t) {
        return Be(t) && mt(t);
      }
      function ub(t) {
        return t === !0 || t === !1 || Be(t) && lt(t) == zn;
      }
      var nr = b0 || Ru, cb = wf ? It(wf) : m$;
      function db(t) {
        return Be(t) && t.nodeType === 1 && !$i(t);
      }
      function fb(t) {
        if (t == null)
          return !0;
        if (mt(t) && (J(t) || typeof t == "string" || typeof t.splice == "function" || nr(t) || co(t) || xr(t)))
          return !t.length;
        var n = et(t);
        if (n == wt || n == en)
          return !t.size;
        if (_i(t))
          return !ru(t).length;
        for (var i in t)
          if (_e.call(t, i))
            return !1;
        return !0;
      }
      function hb(t, n) {
        return wi(t, n);
      }
      function pb(t, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(t, n) : r;
        return l === r ? wi(t, n, r, i) : !!l;
      }
      function xu(t) {
        if (!Be(t))
          return !1;
        var n = lt(t);
        return n == ae || n == hs || typeof t.message == "string" && typeof t.name == "string" && !$i(t);
      }
      function wb(t) {
        return typeof t == "number" && Lf(t);
      }
      function Nn(t) {
        if (!ke(t))
          return !1;
        var n = lt(t);
        return n == te || n == me || n == fs || n == Rg;
      }
      function tp(t) {
        return typeof t == "number" && t == X(t);
      }
      function ta(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= qe;
      }
      function ke(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function Be(t) {
        return t != null && typeof t == "object";
      }
      var np = vf ? It(vf) : g$;
      function vb(t, n) {
        return t === n || nu(t, n, gu(n));
      }
      function mb(t, n, i) {
        return i = typeof i == "function" ? i : r, nu(t, n, gu(n), i);
      }
      function _b(t) {
        return rp(t) && t != +t;
      }
      function gb(t) {
        if (ny(t))
          throw new K(u);
        return jf(t);
      }
      function $b(t) {
        return t === null;
      }
      function yb(t) {
        return t == null;
      }
      function rp(t) {
        return typeof t == "number" || Be(t) && lt(t) == Gn;
      }
      function $i(t) {
        if (!Be(t) || lt(t) != Pt)
          return !1;
        var n = ks(t);
        if (n === null)
          return !0;
        var i = _e.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && Cs.call(i) == m0;
      }
      var Au = mf ? It(mf) : $$;
      function Vb(t) {
        return tp(t) && t >= -qe && t <= qe;
      }
      var op = _f ? It(_f) : y$;
      function na(t) {
        return typeof t == "string" || !J(t) && Be(t) && lt(t) == ri;
      }
      function xt(t) {
        return typeof t == "symbol" || Be(t) && lt(t) == ws;
      }
      var co = gf ? It(gf) : V$;
      function bb(t) {
        return t === r;
      }
      function Cb(t) {
        return Be(t) && et(t) == oi;
      }
      function Sb(t) {
        return Be(t) && lt(t) == Ug;
      }
      var Eb = Ys(ou), Ib = Ys(function(t, n) {
        return t <= n;
      });
      function ip(t) {
        if (!t)
          return [];
        if (mt(t))
          return na(t) ? tn(t) : vt(t);
        if (ai && t[ai])
          return i0(t[ai]());
        var n = et(t), i = n == wt ? zl : n == en ? ys : fo;
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
        return t ? Sr(X(t), 0, St) : 0;
      }
      function Yt(t) {
        if (typeof t == "number")
          return t;
        if (xt(t))
          return gr;
        if (ke(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = ke(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Sf(t);
        var i = l1.test(t);
        return i || c1.test(t) ? W1(t.slice(2), i ? 2 : 8) : a1.test(t) ? gr : +t;
      }
      function ap(t) {
        return vn(t, _t(t));
      }
      function kb(t) {
        return t ? Sr(X(t), -qe, qe) : t === 0 ? t : 0;
      }
      function pe(t) {
        return t == null ? "" : kt(t);
      }
      var xb = ao(function(t, n) {
        if (_i(n) || mt(n)) {
          vn(n, He(n), t);
          return;
        }
        for (var i in n)
          _e.call(n, i) && fi(t, i, n[i]);
      }), lp = ao(function(t, n) {
        vn(n, _t(n), t);
      }), ra = ao(function(t, n, i, l) {
        vn(n, _t(n), t, l);
      }), Ab = ao(function(t, n, i, l) {
        vn(n, He(n), t, l);
      }), Bb = Tn(Jl);
      function Tb(t, n) {
        var i = so(t);
        return n == null ? i : Ff(i, n);
      }
      var Db = ne(function(t, n) {
        t = ye(t);
        var i = -1, l = n.length, d = l > 2 ? n[2] : r;
        for (d && ut(n[0], n[1], d) && (l = 1); ++i < l; )
          for (var p = n[i], m = _t(p), g = -1, b = m.length; ++g < b; ) {
            var x = m[g], A = t[x];
            (A === r || rn(A, ro[x]) && !_e.call(t, x)) && (t[x] = p[x]);
          }
        return t;
      }), Nb = ne(function(t) {
        return t.push(r, Sh), Et(up, r, t);
      });
      function Lb(t, n) {
        return yf(t, z(n, 3), wn);
      }
      function Mb(t, n) {
        return yf(t, z(n, 3), Ql);
      }
      function Ob(t, n) {
        return t == null ? t : Xl(t, z(n, 3), _t);
      }
      function Pb(t, n) {
        return t == null ? t : zf(t, z(n, 3), _t);
      }
      function Rb(t, n) {
        return t && wn(t, z(n, 3));
      }
      function Fb(t, n) {
        return t && Ql(t, z(n, 3));
      }
      function Ub(t) {
        return t == null ? [] : Ps(t, He(t));
      }
      function Wb(t) {
        return t == null ? [] : Ps(t, _t(t));
      }
      function Bu(t, n, i) {
        var l = t == null ? r : Er(t, n);
        return l === r ? i : l;
      }
      function qb(t, n) {
        return t != null && kh(t, n, f$);
      }
      function Tu(t, n) {
        return t != null && kh(t, n, h$);
      }
      var Hb = $h(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = Ss.call(n)), t[n] = i;
      }, Nu(gt)), zb = $h(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = Ss.call(n)), _e.call(t, n) ? t[n].push(i) : t[n] = [i];
      }, z), Yb = ne(pi);
      function He(t) {
        return mt(t) ? Pf(t) : ru(t);
      }
      function _t(t) {
        return mt(t) ? Pf(t, !0) : b$(t);
      }
      function Gb(t, n) {
        var i = {};
        return n = z(n, 3), wn(t, function(l, d, p) {
          An(i, n(l, d, p), l);
        }), i;
      }
      function jb(t, n) {
        var i = {};
        return n = z(n, 3), wn(t, function(l, d, p) {
          An(i, d, n(l, d, p));
        }), i;
      }
      var Zb = ao(function(t, n, i) {
        Rs(t, n, i);
      }), up = ao(function(t, n, i, l) {
        Rs(t, n, i, l);
      }), Kb = Tn(function(t, n) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        n = Ee(n, function(p) {
          return p = er(p, t), l || (l = p.length > 1), p;
        }), vn(t, mu(t), i), l && (i = qt(i, $ | y | k, H$));
        for (var d = n.length; d--; )
          uu(i, n[d]);
        return i;
      });
      function Jb(t, n) {
        return cp(t, ea(z(n)));
      }
      var Xb = Tn(function(t, n) {
        return t == null ? {} : S$(t, n);
      });
      function cp(t, n) {
        if (t == null)
          return {};
        var i = Ee(mu(t), function(l) {
          return [l];
        });
        return n = z(n), th(t, i, function(l, d) {
          return n(l, d[0]);
        });
      }
      function Qb(t, n, i) {
        n = er(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var p = t == null ? r : t[mn(n[l])];
          p === r && (l = d, p = i), t = Nn(p) ? p.call(t) : p;
        }
        return t;
      }
      function eC(t, n, i) {
        return t == null ? t : vi(t, n, i);
      }
      function tC(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : vi(t, n, i, l);
      }
      var dp = bh(He), fp = bh(_t);
      function nC(t, n, i) {
        var l = J(t), d = l || nr(t) || co(t);
        if (n = z(n, 4), i == null) {
          var p = t && t.constructor;
          d ? i = l ? new p() : [] : ke(t) ? i = Nn(p) ? so(ks(t)) : {} : i = {};
        }
        return (d ? Ft : wn)(t, function(m, g, b) {
          return n(i, m, g, b);
        }), i;
      }
      function rC(t, n) {
        return t == null ? !0 : uu(t, n);
      }
      function oC(t, n, i) {
        return t == null ? t : sh(t, n, fu(i));
      }
      function iC(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : sh(t, n, fu(i), l);
      }
      function fo(t) {
        return t == null ? [] : Hl(t, He(t));
      }
      function sC(t) {
        return t == null ? [] : Hl(t, _t(t));
      }
      function aC(t, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Yt(i), i = i === i ? i : 0), n !== r && (n = Yt(n), n = n === n ? n : 0), Sr(Yt(t), n, i);
      }
      function lC(t, n, i) {
        return n = Ln(n), i === r ? (i = n, n = 0) : i = Ln(i), t = Yt(t), p$(t, n, i);
      }
      function uC(t, n, i) {
        if (i && typeof i != "boolean" && ut(t, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof t == "boolean" && (i = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Ln(t), n === r ? (n = t, t = 0) : n = Ln(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (i || t % 1 || n % 1) {
          var d = Mf();
          return Qe(t + d * (n - t + U1("1e-" + ((d + "").length - 1))), n);
        }
        return su(t, n);
      }
      var cC = lo(function(t, n, i) {
        return n = n.toLowerCase(), t + (i ? hp(n) : n);
      });
      function hp(t) {
        return Du(pe(t).toLowerCase());
      }
      function pp(t) {
        return t = pe(t), t && t.replace(f1, e0).replace(B1, "");
      }
      function dC(t, n, i) {
        t = pe(t), n = kt(n);
        var l = t.length;
        i = i === r ? l : Sr(X(i), 0, l);
        var d = i;
        return i -= n.length, i >= 0 && t.slice(i, d) == n;
      }
      function fC(t) {
        return t = pe(t), t && Yg.test(t) ? t.replace(Hd, t0) : t;
      }
      function hC(t) {
        return t = pe(t), t && Xg.test(t) ? t.replace(kl, "\\$&") : t;
      }
      var pC = lo(function(t, n, i) {
        return t + (i ? "-" : "") + n.toLowerCase();
      }), wC = lo(function(t, n, i) {
        return t + (i ? " " : "") + n.toLowerCase();
      }), vC = mh("toLowerCase");
      function mC(t, n, i) {
        t = pe(t), n = X(n);
        var l = n ? to(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return zs(Ts(d), i) + t + zs(Bs(d), i);
      }
      function _C(t, n, i) {
        t = pe(t), n = X(n);
        var l = n ? to(t) : 0;
        return n && l < n ? t + zs(n - l, i) : t;
      }
      function gC(t, n, i) {
        t = pe(t), n = X(n);
        var l = n ? to(t) : 0;
        return n && l < n ? zs(n - l, i) + t : t;
      }
      function $C(t, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), I0(pe(t).replace(xl, ""), n || 0);
      }
      function yC(t, n, i) {
        return (i ? ut(t, n, i) : n === r) ? n = 1 : n = X(n), au(pe(t), n);
      }
      function VC() {
        var t = arguments, n = pe(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var bC = lo(function(t, n, i) {
        return t + (i ? "_" : "") + n.toLowerCase();
      });
      function CC(t, n, i) {
        return i && typeof i != "number" && ut(t, n, i) && (n = i = r), i = i === r ? St : i >>> 0, i ? (t = pe(t), t && (typeof n == "string" || n != null && !Au(n)) && (n = kt(n), !n && eo(t)) ? tr(tn(t), 0, i) : t.split(n, i)) : [];
      }
      var SC = lo(function(t, n, i) {
        return t + (i ? " " : "") + Du(n);
      });
      function EC(t, n, i) {
        return t = pe(t), i = i == null ? 0 : Sr(X(i), 0, t.length), n = kt(n), t.slice(i, i + n.length) == n;
      }
      function IC(t, n, i) {
        var l = h.templateSettings;
        i && ut(t, n, i) && (n = r), t = pe(t), n = ra({}, n, l, Ch);
        var d = ra({}, n.imports, l.imports, Ch), p = He(d), m = Hl(d, p), g, b, x = 0, A = n.interpolate || vs, N = "__p += '", F = Yl(
          (n.escape || vs).source + "|" + A.source + "|" + (A === zd ? s1 : vs).source + "|" + (n.evaluate || vs).source + "|$",
          "g"
        ), q = "//# sourceURL=" + (_e.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++M1 + "]") + `
`;
        t.replace(F, function(G, re, ie, At, ct, Bt) {
          return ie || (ie = At), N += t.slice(x, Bt).replace(h1, n0), re && (g = !0, N += `' +
__e(` + re + `) +
'`), ct && (b = !0, N += `';
` + ct + `;
__p += '`), ie && (N += `' +
((__t = (` + ie + `)) == null ? '' : __t) +
'`), x = Bt + G.length, G;
        }), N += `';
`;
        var Y = _e.call(n, "variable") && n.variable;
        if (!Y)
          N = `with (obj) {
` + N + `
}
`;
        else if (o1.test(Y))
          throw new K(f);
        N = (b ? N.replace(Wg, "") : N).replace(qg, "$1").replace(Hg, "$1;"), N = "function(" + (Y || "obj") + `) {
` + (Y ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (b ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + N + `return __p
}`;
        var Q = vp(function() {
          return de(p, q + "return " + N).apply(r, m);
        });
        if (Q.source = N, xu(Q))
          throw Q;
        return Q;
      }
      function kC(t) {
        return pe(t).toLowerCase();
      }
      function xC(t) {
        return pe(t).toUpperCase();
      }
      function AC(t, n, i) {
        if (t = pe(t), t && (i || n === r))
          return Sf(t);
        if (!t || !(n = kt(n)))
          return t;
        var l = tn(t), d = tn(n), p = Ef(l, d), m = If(l, d) + 1;
        return tr(l, p, m).join("");
      }
      function BC(t, n, i) {
        if (t = pe(t), t && (i || n === r))
          return t.slice(0, xf(t) + 1);
        if (!t || !(n = kt(n)))
          return t;
        var l = tn(t), d = If(l, tn(n)) + 1;
        return tr(l, 0, d).join("");
      }
      function TC(t, n, i) {
        if (t = pe(t), t && (i || n === r))
          return t.replace(xl, "");
        if (!t || !(n = kt(n)))
          return t;
        var l = tn(t), d = Ef(l, tn(n));
        return tr(l, d).join("");
      }
      function DC(t, n) {
        var i = he, l = ce;
        if (ke(n)) {
          var d = "separator" in n ? n.separator : d;
          i = "length" in n ? X(n.length) : i, l = "omission" in n ? kt(n.omission) : l;
        }
        t = pe(t);
        var p = t.length;
        if (eo(t)) {
          var m = tn(t);
          p = m.length;
        }
        if (i >= p)
          return t;
        var g = i - to(l);
        if (g < 1)
          return l;
        var b = m ? tr(m, 0, g).join("") : t.slice(0, g);
        if (d === r)
          return b + l;
        if (m && (g += b.length - g), Au(d)) {
          if (t.slice(g).search(d)) {
            var x, A = b;
            for (d.global || (d = Yl(d.source, pe(Yd.exec(d)) + "g")), d.lastIndex = 0; x = d.exec(A); )
              var N = x.index;
            b = b.slice(0, N === r ? g : N);
          }
        } else if (t.indexOf(kt(d), g) != g) {
          var F = b.lastIndexOf(d);
          F > -1 && (b = b.slice(0, F));
        }
        return b + l;
      }
      function NC(t) {
        return t = pe(t), t && zg.test(t) ? t.replace(qd, u0) : t;
      }
      var LC = lo(function(t, n, i) {
        return t + (i ? " " : "") + n.toUpperCase();
      }), Du = mh("toUpperCase");
      function wp(t, n, i) {
        return t = pe(t), n = i ? r : n, n === r ? o0(t) ? f0(t) : Z1(t) : t.match(n) || [];
      }
      var vp = ne(function(t, n) {
        try {
          return Et(t, r, n);
        } catch (i) {
          return xu(i) ? i : new K(i);
        }
      }), MC = Tn(function(t, n) {
        return Ft(n, function(i) {
          i = mn(i), An(t, i, Iu(t[i], t));
        }), t;
      });
      function OC(t) {
        var n = t == null ? 0 : t.length, i = z();
        return t = n ? Ee(t, function(l) {
          if (typeof l[1] != "function")
            throw new Ut(c);
          return [i(l[0]), l[1]];
        }) : [], ne(function(l) {
          for (var d = -1; ++d < n; ) {
            var p = t[d];
            if (Et(p[0], this, l))
              return Et(p[1], this, l);
          }
        });
      }
      function PC(t) {
        return u$(qt(t, $));
      }
      function Nu(t) {
        return function() {
          return t;
        };
      }
      function RC(t, n) {
        return t == null || t !== t ? n : t;
      }
      var FC = gh(), UC = gh(!0);
      function gt(t) {
        return t;
      }
      function Lu(t) {
        return Zf(typeof t == "function" ? t : qt(t, $));
      }
      function WC(t) {
        return Jf(qt(t, $));
      }
      function qC(t, n) {
        return Xf(t, qt(n, $));
      }
      var HC = ne(function(t, n) {
        return function(i) {
          return pi(i, t, n);
        };
      }), zC = ne(function(t, n) {
        return function(i) {
          return pi(t, i, n);
        };
      });
      function Mu(t, n, i) {
        var l = He(n), d = Ps(n, l);
        i == null && !(ke(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = Ps(n, He(n)));
        var p = !(ke(i) && "chain" in i) || !!i.chain, m = Nn(t);
        return Ft(d, function(g) {
          var b = n[g];
          t[g] = b, m && (t.prototype[g] = function() {
            var x = this.__chain__;
            if (p || x) {
              var A = t(this.__wrapped__), N = A.__actions__ = vt(this.__actions__);
              return N.push({ func: b, args: arguments, thisArg: t }), A.__chain__ = x, A;
            }
            return b.apply(t, Zn([this.value()], arguments));
          });
        }), t;
      }
      function YC() {
        return je._ === this && (je._ = _0), this;
      }
      function Ou() {
      }
      function GC(t) {
        return t = X(t), ne(function(n) {
          return Qf(n, t);
        });
      }
      var jC = pu(Ee), ZC = pu($f), KC = pu(Rl);
      function mp(t) {
        return yu(t) ? Fl(mn(t)) : E$(t);
      }
      function JC(t) {
        return function(n) {
          return t == null ? r : Er(t, n);
        };
      }
      var XC = yh(), QC = yh(!0);
      function Pu() {
        return [];
      }
      function Ru() {
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
      function rS(t, n) {
        if (t = X(t), t < 1 || t > qe)
          return [];
        var i = St, l = Qe(t, St);
        n = z(n), t -= St;
        for (var d = ql(l, n); ++i < t; )
          n(i);
        return d;
      }
      function oS(t) {
        return J(t) ? Ee(t, mn) : xt(t) ? [t] : vt(Oh(pe(t)));
      }
      function iS(t) {
        var n = ++v0;
        return pe(t) + n;
      }
      var sS = Hs(function(t, n) {
        return t + n;
      }, 0), aS = wu("ceil"), lS = Hs(function(t, n) {
        return t / n;
      }, 1), uS = wu("floor");
      function cS(t) {
        return t && t.length ? Os(t, gt, eu) : r;
      }
      function dS(t, n) {
        return t && t.length ? Os(t, z(n, 2), eu) : r;
      }
      function fS(t) {
        return bf(t, gt);
      }
      function hS(t, n) {
        return bf(t, z(n, 2));
      }
      function pS(t) {
        return t && t.length ? Os(t, gt, ou) : r;
      }
      function wS(t, n) {
        return t && t.length ? Os(t, z(n, 2), ou) : r;
      }
      var vS = Hs(function(t, n) {
        return t * n;
      }, 1), mS = wu("round"), _S = Hs(function(t, n) {
        return t - n;
      }, 0);
      function gS(t) {
        return t && t.length ? Wl(t, gt) : 0;
      }
      function $S(t, n) {
        return t && t.length ? Wl(t, z(n, 2)) : 0;
      }
      return h.after = WV, h.ary = jh, h.assign = xb, h.assignIn = lp, h.assignInWith = ra, h.assignWith = Ab, h.at = Bb, h.before = Zh, h.bind = Iu, h.bindAll = MC, h.bindKey = Kh, h.castArray = eb, h.chain = zh, h.chunk = uy, h.compact = cy, h.concat = dy, h.cond = OC, h.conforms = PC, h.constant = Nu, h.countBy = gV, h.create = Tb, h.curry = Jh, h.curryRight = Xh, h.debounce = Qh, h.defaults = Db, h.defaultsDeep = Nb, h.defer = qV, h.delay = HV, h.difference = fy, h.differenceBy = hy, h.differenceWith = py, h.drop = wy, h.dropRight = vy, h.dropRightWhile = my, h.dropWhile = _y, h.fill = gy, h.filter = yV, h.flatMap = CV, h.flatMapDeep = SV, h.flatMapDepth = EV, h.flatten = Uh, h.flattenDeep = $y, h.flattenDepth = yy, h.flip = zV, h.flow = FC, h.flowRight = UC, h.fromPairs = Vy, h.functions = Ub, h.functionsIn = Wb, h.groupBy = IV, h.initial = Cy, h.intersection = Sy, h.intersectionBy = Ey, h.intersectionWith = Iy, h.invert = Hb, h.invertBy = zb, h.invokeMap = xV, h.iteratee = Lu, h.keyBy = AV, h.keys = He, h.keysIn = _t, h.map = Js, h.mapKeys = Gb, h.mapValues = jb, h.matches = WC, h.matchesProperty = qC, h.memoize = Qs, h.merge = Zb, h.mergeWith = up, h.method = HC, h.methodOf = zC, h.mixin = Mu, h.negate = ea, h.nthArg = GC, h.omit = Kb, h.omitBy = Jb, h.once = YV, h.orderBy = BV, h.over = jC, h.overArgs = GV, h.overEvery = ZC, h.overSome = KC, h.partial = ku, h.partialRight = ep, h.partition = TV, h.pick = Xb, h.pickBy = cp, h.property = mp, h.propertyOf = JC, h.pull = By, h.pullAll = qh, h.pullAllBy = Ty, h.pullAllWith = Dy, h.pullAt = Ny, h.range = XC, h.rangeRight = QC, h.rearg = jV, h.reject = LV, h.remove = Ly, h.rest = ZV, h.reverse = Su, h.sampleSize = OV, h.set = eC, h.setWith = tC, h.shuffle = PV, h.slice = My, h.sortBy = UV, h.sortedUniq = qy, h.sortedUniqBy = Hy, h.split = CC, h.spread = KV, h.tail = zy, h.take = Yy, h.takeRight = Gy, h.takeRightWhile = jy, h.takeWhile = Zy, h.tap = cV, h.throttle = JV, h.thru = Ks, h.toArray = ip, h.toPairs = dp, h.toPairsIn = fp, h.toPath = oS, h.toPlainObject = ap, h.transform = nC, h.unary = XV, h.union = Ky, h.unionBy = Jy, h.unionWith = Xy, h.uniq = Qy, h.uniqBy = eV, h.uniqWith = tV, h.unset = rC, h.unzip = Eu, h.unzipWith = Hh, h.update = oC, h.updateWith = iC, h.values = fo, h.valuesIn = sC, h.without = nV, h.words = wp, h.wrap = QV, h.xor = rV, h.xorBy = oV, h.xorWith = iV, h.zip = sV, h.zipObject = aV, h.zipObjectDeep = lV, h.zipWith = uV, h.entries = dp, h.entriesIn = fp, h.extend = lp, h.extendWith = ra, Mu(h, h), h.add = sS, h.attempt = vp, h.camelCase = cC, h.capitalize = hp, h.ceil = aS, h.clamp = aC, h.clone = tb, h.cloneDeep = rb, h.cloneDeepWith = ob, h.cloneWith = nb, h.conformsTo = ib, h.deburr = pp, h.defaultTo = RC, h.divide = lS, h.endsWith = dC, h.eq = rn, h.escape = fC, h.escapeRegExp = hC, h.every = $V, h.find = VV, h.findIndex = Rh, h.findKey = Lb, h.findLast = bV, h.findLastIndex = Fh, h.findLastKey = Mb, h.floor = uS, h.forEach = Yh, h.forEachRight = Gh, h.forIn = Ob, h.forInRight = Pb, h.forOwn = Rb, h.forOwnRight = Fb, h.get = Bu, h.gt = sb, h.gte = ab, h.has = qb, h.hasIn = Tu, h.head = Wh, h.identity = gt, h.includes = kV, h.indexOf = by, h.inRange = lC, h.invoke = Yb, h.isArguments = xr, h.isArray = J, h.isArrayBuffer = lb, h.isArrayLike = mt, h.isArrayLikeObject = Te, h.isBoolean = ub, h.isBuffer = nr, h.isDate = cb, h.isElement = db, h.isEmpty = fb, h.isEqual = hb, h.isEqualWith = pb, h.isError = xu, h.isFinite = wb, h.isFunction = Nn, h.isInteger = tp, h.isLength = ta, h.isMap = np, h.isMatch = vb, h.isMatchWith = mb, h.isNaN = _b, h.isNative = gb, h.isNil = yb, h.isNull = $b, h.isNumber = rp, h.isObject = ke, h.isObjectLike = Be, h.isPlainObject = $i, h.isRegExp = Au, h.isSafeInteger = Vb, h.isSet = op, h.isString = na, h.isSymbol = xt, h.isTypedArray = co, h.isUndefined = bb, h.isWeakMap = Cb, h.isWeakSet = Sb, h.join = ky, h.kebabCase = pC, h.last = zt, h.lastIndexOf = xy, h.lowerCase = wC, h.lowerFirst = vC, h.lt = Eb, h.lte = Ib, h.max = cS, h.maxBy = dS, h.mean = fS, h.meanBy = hS, h.min = pS, h.minBy = wS, h.stubArray = Pu, h.stubFalse = Ru, h.stubObject = eS, h.stubString = tS, h.stubTrue = nS, h.multiply = vS, h.nth = Ay, h.noConflict = YC, h.noop = Ou, h.now = Xs, h.pad = mC, h.padEnd = _C, h.padStart = gC, h.parseInt = $C, h.random = uC, h.reduce = DV, h.reduceRight = NV, h.repeat = yC, h.replace = VC, h.result = Qb, h.round = mS, h.runInContext = V, h.sample = MV, h.size = RV, h.snakeCase = bC, h.some = FV, h.sortedIndex = Oy, h.sortedIndexBy = Py, h.sortedIndexOf = Ry, h.sortedLastIndex = Fy, h.sortedLastIndexBy = Uy, h.sortedLastIndexOf = Wy, h.startCase = SC, h.startsWith = EC, h.subtract = _S, h.sum = gS, h.sumBy = $S, h.template = IC, h.times = rS, h.toFinite = Ln, h.toInteger = X, h.toLength = sp, h.toLower = kC, h.toNumber = Yt, h.toSafeInteger = kb, h.toString = pe, h.toUpper = xC, h.trim = AC, h.trimEnd = BC, h.trimStart = TC, h.truncate = DC, h.unescape = NC, h.uniqueId = iS, h.upperCase = LC, h.upperFirst = Du, h.each = Yh, h.eachRight = Gh, h.first = Wh, Mu(h, function() {
        var t = {};
        return wn(h, function(n, i) {
          _e.call(h.prototype, i) || (t[i] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = s, Ft(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), Ft(["drop", "take"], function(t, n) {
        oe.prototype[t] = function(i) {
          i = i === r ? 1 : Re(X(i), 0);
          var l = this.__filtered__ && !n ? new oe(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Qe(i, l.__takeCount__) : l.__views__.push({
            size: Qe(i, St),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, oe.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), Ft(["filter", "map", "takeWhile"], function(t, n) {
        var i = n + 1, l = i == Ae || i == Ne;
        oe.prototype[t] = function(d) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: z(d, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), Ft(["head", "last"], function(t, n) {
        var i = "take" + (n ? "Right" : "");
        oe.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), Ft(["initial", "tail"], function(t, n) {
        var i = "drop" + (n ? "" : "Right");
        oe.prototype[t] = function() {
          return this.__filtered__ ? new oe(this) : this[i](1);
        };
      }), oe.prototype.compact = function() {
        return this.filter(gt);
      }, oe.prototype.find = function(t) {
        return this.filter(t).head();
      }, oe.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, oe.prototype.invokeMap = ne(function(t, n) {
        return typeof t == "function" ? new oe(this) : this.map(function(i) {
          return pi(i, t, n);
        });
      }), oe.prototype.reject = function(t) {
        return this.filter(ea(z(t)));
      }, oe.prototype.slice = function(t, n) {
        t = X(t);
        var i = this;
        return i.__filtered__ && (t > 0 || n < 0) ? new oe(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== r && (n = X(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
      }, oe.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, oe.prototype.toArray = function() {
        return this.take(St);
      }, wn(oe.prototype, function(t, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !d || (h.prototype[n] = function() {
          var m = this.__wrapped__, g = l ? [1] : arguments, b = m instanceof oe, x = g[0], A = b || J(m), N = function(re) {
            var ie = d.apply(h, Zn([re], g));
            return l && F ? ie[0] : ie;
          };
          A && i && typeof x == "function" && x.length != 1 && (b = A = !1);
          var F = this.__chain__, q = !!this.__actions__.length, Y = p && !F, Q = b && !q;
          if (!p && A) {
            m = Q ? m : new oe(this);
            var G = t.apply(m, g);
            return G.__actions__.push({ func: Ks, args: [N], thisArg: r }), new Wt(G, F);
          }
          return Y && Q ? t.apply(this, g) : (G = this.thru(N), Y ? l ? G.value()[0] : G.value() : G);
        });
      }), Ft(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = Vs[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
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
      }), wn(oe.prototype, function(t, n) {
        var i = h[n];
        if (i) {
          var l = i.name + "";
          _e.call(io, l) || (io[l] = []), io[l].push({ name: n, func: i });
        }
      }), io[qs(r, S).name] = [{
        name: "wrapper",
        func: r
      }], oe.prototype.clone = N0, oe.prototype.reverse = L0, oe.prototype.value = M0, h.prototype.at = dV, h.prototype.chain = fV, h.prototype.commit = hV, h.prototype.next = pV, h.prototype.plant = vV, h.prototype.reverse = mV, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = _V, h.prototype.first = h.prototype.head, ai && (h.prototype[ai] = wV), h;
    }, no = h0();
    yr ? ((yr.exports = no)._ = no, Ll._ = no) : je._ = no;
  }).call(yi);
})($e, $e.exports);
const FE = "/alarms?_s=", Qa = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, UE = async (e, o) => {
  try {
    return (await pt.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      Qa
    )).status === 204;
  } catch {
    return !1;
  }
}, Xm = async (e, o) => {
  try {
    return (await pt.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      Qa
    )).status === 204;
  } catch {
    return !1;
  }
}, WE = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await qn.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      Qa
    )).status == 204;
  } catch {
    return !1;
  }
}, qE = async () => {
  try {
    const e = `${FE}isSituation==true&limit=0`, o = await qn(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, HE = async (e) => {
  try {
    const o = e.join(",id=="), r = await qn(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Qm = async (e) => {
  try {
    const o = await qn(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, zE = async (e) => {
  try {
    const o = await qn(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, YE = async () => {
  try {
    const e = await qn("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => $e.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, GE = async (e, o, r) => {
  try {
    return (await qn.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      Qa
    )).status == 204;
  } catch {
    return !1;
  }
}, jE = async (e, o) => {
  try {
    return (await qn.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, ZE = async () => {
  try {
    const e = await qn.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, KE = window.Pinia.defineStore, pn = KE("situationsStore", {
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
      const e = await YE();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await qE();
      if (e) {
        const o = e.alarm.map((u) => {
          var c;
          return u.status = (c = u.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, u;
        });
        this.filteredSituations = o.map((u) => u.id);
        const r = $e.exports.groupBy(o, "status"), a = [
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
        const s = await Qm(e);
        if (s) {
          const a = (o = s.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await HE(a);
          s.status = (r = s.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : r.value, s.alarms = $e.exports.sortBy(c, ["id"]), this.situationDetail = s;
        }
      }
    },
    async getEvents(e, o) {
      const r = {};
      await Promise.all(
        o.map(async (s) => {
          const a = await zE(s);
          a && (r[s] = $e.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await ZE();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), JE = window.Vue.openBlock, XE = window.Vue.createElementBlock, QE = window.Vue.createElementVNode;
var e2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const t2 = {}, n2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, r2 = /* @__PURE__ */ QE("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), o2 = [
  r2
];
function i2(e, o) {
  return JE(), XE("svg", n2, o2);
}
var Ro = /* @__PURE__ */ e2(t2, [["render", i2]]);
var s2 = Object.defineProperty, Wp = Object.getOwnPropertySymbols, a2 = Object.prototype.hasOwnProperty, l2 = Object.prototype.propertyIsEnumerable, qp = (e, o, r) => o in e ? s2(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Hp = (e, o) => {
  for (var r in o || (o = {}))
    a2.call(o, r) && qp(e, r, o[r]);
  if (Wp)
    for (var r of Wp(o))
      l2.call(o, r) && qp(e, r, o[r]);
  return e;
};
const u2 = window.Vue.defineComponent, c2 = window.Vue.toRaw, tc = window.Vue.h;
var d2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const f2 = {
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
}, h2 = u2({
  props: f2,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = c2(this.icon);
    return this.$slots.default ? tc("span", { class: "feather-icon-container" }, [
      tc(this.$slots.default()[0], Hp({
        class: o
      }, r))
    ]) : tc(s, Hp({
      class: o
    }, r));
  }
});
var Z = /* @__PURE__ */ d2(h2, [["__scopeId", "data-v-52cbf270"]]);
const p2 = window.Vue.openBlock, w2 = window.Vue.createElementBlock, v2 = window.Vue.createElementVNode;
var m2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const _2 = {}, g2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $2 = /* @__PURE__ */ v2("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), y2 = [
  $2
];
function V2(e, o) {
  return p2(), w2("svg", g2, y2);
}
var e_ = /* @__PURE__ */ m2(_2, [["render", V2]]);
const Ge = {
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
function bn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var o = Number(e);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function be(e, o) {
  if (o.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function We(e) {
  be(1, arguments);
  var o = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && o === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || o === "[object Number]" ? new Date(e) : ((typeof e == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function b2(e, o) {
  be(2, arguments);
  var r = We(e), s = bn(o);
  return isNaN(s) ? new Date(NaN) : (s && r.setDate(r.getDate() + s), r);
}
function C2(e, o) {
  be(2, arguments);
  var r = We(e).getTime(), s = bn(o);
  return new Date(r + s);
}
var S2 = {};
function Ho() {
  return S2;
}
function zp(e, o) {
  var r, s, a, u, c, f, w, v;
  be(1, arguments);
  var _ = Ho(), $ = bn((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = We(e), k = y.getDay(), D = (k < $ ? 7 : 0) + k - $;
  return y.setDate(y.getDate() - D), y.setHours(0, 0, 0, 0), y;
}
function Jc(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function Yp(e) {
  be(1, arguments);
  var o = We(e);
  return o.setHours(0, 0, 0, 0), o;
}
function E2(e, o) {
  be(2, arguments);
  var r = We(e), s = We(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function t_(e, o) {
  be(2, arguments);
  var r = Yp(e), s = Yp(o);
  return r.getTime() === s.getTime();
}
function I2(e) {
  return be(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function k2(e) {
  if (be(1, arguments), !I2(e) && typeof e != "number")
    return !1;
  var o = We(e);
  return !isNaN(Number(o));
}
function x2(e, o) {
  be(2, arguments);
  var r = bn(o);
  return C2(e, -r);
}
var A2 = 864e5;
function B2(e) {
  be(1, arguments);
  var o = We(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / A2) + 1;
}
function Pa(e) {
  be(1, arguments);
  var o = 1, r = We(e), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function n_(e) {
  be(1, arguments);
  var o = We(e), r = o.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Pa(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = Pa(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function T2(e) {
  be(1, arguments);
  var o = n_(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = Pa(r);
  return s;
}
var D2 = 6048e5;
function N2(e) {
  be(1, arguments);
  var o = We(e), r = Pa(o).getTime() - T2(o).getTime();
  return Math.round(r / D2) + 1;
}
function Ra(e, o) {
  var r, s, a, u, c, f, w, v;
  be(1, arguments);
  var _ = Ho(), $ = bn((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = We(e), k = y.getUTCDay(), D = (k < $ ? 7 : 0) + k - $;
  return y.setUTCDate(y.getUTCDate() - D), y.setUTCHours(0, 0, 0, 0), y;
}
function r_(e, o) {
  var r, s, a, u, c, f, w, v;
  be(1, arguments);
  var _ = We(e), $ = _.getUTCFullYear(), y = Ho(), k = bn((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = y.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(k >= 1 && k <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var D = new Date(0);
  D.setUTCFullYear($ + 1, 0, k), D.setUTCHours(0, 0, 0, 0);
  var M = Ra(D, o), L = new Date(0);
  L.setUTCFullYear($, 0, k), L.setUTCHours(0, 0, 0, 0);
  var S = Ra(L, o);
  return _.getTime() >= M.getTime() ? $ + 1 : _.getTime() >= S.getTime() ? $ : $ - 1;
}
function L2(e, o) {
  var r, s, a, u, c, f, w, v;
  be(1, arguments);
  var _ = Ho(), $ = bn((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : _.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = r_(e, o), k = new Date(0);
  k.setUTCFullYear(y, 0, $), k.setUTCHours(0, 0, 0, 0);
  var D = Ra(k, o);
  return D;
}
var M2 = 6048e5;
function O2(e, o) {
  be(1, arguments);
  var r = We(e), s = Ra(r, o).getTime() - L2(r, o).getTime();
  return Math.round(s / M2) + 1;
}
function ge(e, o) {
  for (var r = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var P2 = {
  y: function(e, o) {
    var r = e.getUTCFullYear(), s = r > 0 ? r : 1 - r;
    return ge(o === "yy" ? s % 100 : s, o.length);
  },
  M: function(e, o) {
    var r = e.getUTCMonth();
    return o === "M" ? String(r + 1) : ge(r + 1, 2);
  },
  d: function(e, o) {
    return ge(e.getUTCDate(), o.length);
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
    return ge(e.getUTCHours() % 12 || 12, o.length);
  },
  H: function(e, o) {
    return ge(e.getUTCHours(), o.length);
  },
  m: function(e, o) {
    return ge(e.getUTCMinutes(), o.length);
  },
  s: function(e, o) {
    return ge(e.getUTCSeconds(), o.length);
  },
  S: function(e, o) {
    var r = o.length, s = e.getUTCMilliseconds(), a = Math.floor(s * Math.pow(10, r - 3));
    return ge(a, o.length);
  }
};
const rr = P2;
var wo = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, R2 = {
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
    var a = r_(e, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return ge(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : ge(u, o.length);
  },
  R: function(e, o) {
    var r = n_(e);
    return ge(r, o.length);
  },
  u: function(e, o) {
    var r = e.getUTCFullYear();
    return ge(r, o.length);
  },
  Q: function(e, o, r) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(s);
      case "QQ":
        return ge(s, 2);
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
        return ge(s, 2);
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
        return ge(s + 1, 2);
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
    var a = O2(e, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ge(a, o.length);
  },
  I: function(e, o, r) {
    var s = N2(e);
    return o === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : ge(s, o.length);
  },
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : rr.d(e, o);
  },
  D: function(e, o, r) {
    var s = B2(e);
    return o === "Do" ? r.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : ge(s, o.length);
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
        return ge(u, 2);
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
        return ge(u, o.length);
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
        return ge(a, o.length);
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
    }) : ge(s, o.length);
  },
  k: function(e, o, r) {
    var s = e.getUTCHours();
    return s === 0 && (s = 24), o === "ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : ge(s, o.length);
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
    return ge(u, o.length);
  },
  T: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTime();
    return ge(u, o.length);
  }
};
function Gp(e, o) {
  var r = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var c = o || "";
  return r + String(a) + c + ge(u, 2);
}
function jp(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + ge(Math.abs(e) / 60, 2);
  }
  return qr(e, o);
}
function qr(e, o) {
  var r = o || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = ge(Math.floor(a / 60), 2), c = ge(a % 60, 2);
  return s + u + r + c;
}
const F2 = R2;
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
}, o_ = function(e, o) {
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
}, U2 = function(e, o) {
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
  return u.replace("{{date}}", Zp(s, o)).replace("{{time}}", o_(a, o));
}, W2 = {
  p: o_,
  P: U2
};
const q2 = W2;
var H2 = ["D", "DD"], z2 = ["YY", "YYYY"];
function Y2(e) {
  return H2.indexOf(e) !== -1;
}
function G2(e) {
  return z2.indexOf(e) !== -1;
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
var j2 = {
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
}, Z2 = function(e, o, r) {
  var s, a = j2[e];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const K2 = Z2;
function nc(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, s = e.formats[r] || e.formats[e.defaultWidth];
    return s;
  };
}
var J2 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, X2 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Q2 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, eI = {
  date: nc({
    formats: J2,
    defaultWidth: "full"
  }),
  time: nc({
    formats: X2,
    defaultWidth: "full"
  }),
  dateTime: nc({
    formats: Q2,
    defaultWidth: "full"
  })
};
const tI = eI;
var nI = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, rI = function(e, o, r, s) {
  return nI[e];
};
const oI = rI;
function Vi(e) {
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
var iI = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, sI = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, aI = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, lI = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, uI = {
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
}, cI = {
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
}, dI = function(e, o) {
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
}, fI = {
  ordinalNumber: dI,
  era: Vi({
    values: iI,
    defaultWidth: "wide"
  }),
  quarter: Vi({
    values: sI,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Vi({
    values: aI,
    defaultWidth: "wide"
  }),
  day: Vi({
    values: lI,
    defaultWidth: "wide"
  }),
  dayPeriod: Vi({
    values: uI,
    defaultWidth: "wide",
    formattingValues: cI,
    defaultFormattingWidth: "wide"
  })
};
const hI = fI;
function bi(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], w = Array.isArray(f) ? wI(f, function($) {
      return $.test(c);
    }) : pI(f, function($) {
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
function pI(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function wI(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function vI(e) {
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
var mI = /^(\d+)(th|st|nd|rd)?/i, _I = /\d+/i, gI = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, $I = {
  any: [/^b/i, /^(a|c)/i]
}, yI = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, VI = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, bI = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, CI = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, SI = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, EI = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, II = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, kI = {
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
}, xI = {
  ordinalNumber: vI({
    matchPattern: mI,
    parsePattern: _I,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: bi({
    matchPatterns: gI,
    defaultMatchWidth: "wide",
    parsePatterns: $I,
    defaultParseWidth: "any"
  }),
  quarter: bi({
    matchPatterns: yI,
    defaultMatchWidth: "wide",
    parsePatterns: VI,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: bi({
    matchPatterns: bI,
    defaultMatchWidth: "wide",
    parsePatterns: CI,
    defaultParseWidth: "any"
  }),
  day: bi({
    matchPatterns: SI,
    defaultMatchWidth: "wide",
    parsePatterns: EI,
    defaultParseWidth: "any"
  }),
  dayPeriod: bi({
    matchPatterns: II,
    defaultMatchWidth: "any",
    parsePatterns: kI,
    defaultParseWidth: "any"
  })
};
const AI = xI;
var BI = {
  code: "en-US",
  formatDistance: K2,
  formatLong: tI,
  formatRelative: oI,
  localize: hI,
  match: AI,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const i_ = BI;
var TI = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, DI = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, NI = /^'([^]*?)'?$/, LI = /''/g, MI = /[a-zA-Z]/;
function OI(e, o, r) {
  var s, a, u, c, f, w, v, _, $, y, k, D, M, L, S, T, B, O;
  be(2, arguments);
  var I = String(o), R = Ho(), P = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : R.locale) !== null && s !== void 0 ? s : i_, H = bn((u = (c = (f = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (v = r.locale) === null || v === void 0 || (_ = v.options) === null || _ === void 0 ? void 0 : _.firstWeekContainsDate) !== null && f !== void 0 ? f : R.firstWeekContainsDate) !== null && c !== void 0 ? c : ($ = R.locale) === null || $ === void 0 || (y = $.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(H >= 1 && H <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var we = bn((k = (D = (M = (L = r == null ? void 0 : r.weekStartsOn) !== null && L !== void 0 ? L : r == null || (S = r.locale) === null || S === void 0 || (T = S.options) === null || T === void 0 ? void 0 : T.weekStartsOn) !== null && M !== void 0 ? M : R.weekStartsOn) !== null && D !== void 0 ? D : (B = R.locale) === null || B === void 0 || (O = B.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && k !== void 0 ? k : 0);
  if (!(we >= 0 && we <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!P.localize)
    throw new RangeError("locale must contain localize property");
  if (!P.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var he = We(e);
  if (!k2(he))
    throw new RangeError("Invalid time value");
  var ce = Jc(he), Se = x2(he, ce), Ie = {
    firstWeekContainsDate: H,
    weekStartsOn: we,
    locale: P,
    _originalDate: he
  }, Ae = I.match(DI).map(function(ve) {
    var Ne = ve[0];
    if (Ne === "p" || Ne === "P") {
      var Le = q2[Ne];
      return Le(ve, P.formatLong);
    }
    return ve;
  }).join("").match(TI).map(function(ve) {
    if (ve === "''")
      return "'";
    var Ne = ve[0];
    if (Ne === "'")
      return PI(ve);
    var Le = F2[Ne];
    if (Le)
      return !(r != null && r.useAdditionalWeekYearTokens) && G2(ve) && Kp(ve, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && Y2(ve) && Kp(ve, o, String(e)), Le(Se, ve, P.localize, Ie);
    if (Ne.match(MI))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ne + "`");
    return ve;
  }).join("");
  return Ae;
}
function PI(e) {
  var o = e.match(NI);
  return o ? o[1].replace(LI, "'") : e;
}
function s_(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function RI(e) {
  return s_({}, e);
}
var Jp = 1e3 * 60, Fa = 60 * 24, Xp = Fa * 30, Qp = Fa * 365;
function el(e, o, r) {
  var s, a, u;
  be(2, arguments);
  var c = Ho(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : i_;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = E2(e, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var v = s_(RI(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), _, $;
  w > 0 ? (_ = We(o), $ = We(e)) : (_ = We(e), $ = We(o));
  var y = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), k;
  if (y === "floor")
    k = Math.floor;
  else if (y === "ceil")
    k = Math.ceil;
  else if (y === "round")
    k = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var D = $.getTime() - _.getTime(), M = D / Jp, L = Jc($) - Jc(_), S = (D - L) / Jp, T = r == null ? void 0 : r.unit, B;
  if (T ? B = String(T) : M < 1 ? B = "second" : M < 60 ? B = "minute" : M < Fa ? B = "hour" : S < Xp ? B = "day" : S < Qp ? B = "month" : B = "year", B === "second") {
    var O = k(D / 1e3);
    return f.formatDistance("xSeconds", O, v);
  } else if (B === "minute") {
    var I = k(M);
    return f.formatDistance("xMinutes", I, v);
  } else if (B === "hour") {
    var R = k(M / 60);
    return f.formatDistance("xHours", R, v);
  } else if (B === "day") {
    var P = k(S / Fa);
    return f.formatDistance("xDays", P, v);
  } else if (B === "month") {
    var H = k(S / Xp);
    return H === 12 && T !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", H, v);
  } else if (B === "year") {
    var we = k(S / Qp);
    return f.formatDistance("xYears", we, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function FI(e, o, r) {
  be(2, arguments);
  var s = zp(e, r), a = zp(o, r);
  return s.getTime() === a.getTime();
}
function UI(e, o) {
  return be(1, arguments), FI(e, Date.now(), o);
}
function WI(e) {
  return be(1, arguments), t_(e, Date.now());
}
function qI(e, o) {
  be(2, arguments);
  var r = bn(o);
  return b2(e, -r);
}
function HI(e) {
  return be(1, arguments), t_(e, qI(Date.now(), 1));
}
const Cn = (e) => {
  let o = "";
  if (e)
    try {
      o = OI(new Date(e), Ge.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, a_ = (e, o) => {
  const s = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), a = s.length > o ? "..." : "";
  return s.substring(0, o) + a;
}, zI = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (s) => WI(s.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (s) => HI(s.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (s) => UI(s.firstEventTime)
      );
      break;
  }
  return r;
}, tl = "/alec", l_ = "/alec/engine/configuration", u_ = "/alec/claude/configuration", YI = "/alec/claude/suggestions", GI = "/alec/claude/usage", c_ = "/alec/situation", jI = async () => {
  try {
    const e = await pt.get(`${l_}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, ZI = async (e) => {
  try {
    return (await pt.post(l_, e)).status === 200;
  } catch {
    return !1;
  }
}, KI = async () => {
  try {
    const e = await pt.get(u_);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, JI = async (e) => {
  try {
    const o = await pt.post(u_, e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, d_ = async (e) => {
  try {
    const o = await pt.get(`${YI}/${e}`);
    return o.status === 200 ? o.data : o.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, XI = async (e = 30) => {
  try {
    const o = await pt.get(`${GI}?days=${e}`);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, f_ = async (e, o) => {
  try {
    const r = await pt.post(`${tl}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return o == Ge.REJECTED.toLowerCase() && r.status === 200 && await Xm(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, ew = async (e, o) => {
  try {
    return (await pt.delete(`${tl}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, h_ = async (e, o) => {
  try {
    return (await pt.put(`${tl}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, QI = async (e) => {
  try {
    return (await pt.post(c_, e)).status === 200;
  } catch {
    return !1;
  }
}, ek = async () => {
  try {
    return (await pt.post(`${c_}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, tk = async () => {
  try {
    return (await pt.post(`${tl}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, nk = window.Vue.defineComponent, Dt = window.Vue.unref, rc = window.Vue.normalizeClass, yn = window.Vue.createElementVNode, Ar = window.Vue.toDisplayString, or = window.Vue.openBlock, ir = window.Vue.createElementBlock, Ci = window.Vue.createCommentVNode, tw = window.Vue.createVNode, Xc = window.Vue.createTextVNode, rk = window.Vue.renderList, ok = window.Vue.Fragment, ik = window.Vue.pushScopeId, sk = window.Vue.popScopeId, $d = (e) => (ik("data-v-2ed3bdb3"), e = e(), sk(), e), ak = { class: "content" }, lk = { class: "title-row" }, uk = { class: "title" }, ck = ["title"], dk = {
  key: 1,
  class: "accepted"
}, fk = {
  key: 2,
  class: "rejected"
}, hk = /* @__PURE__ */ $d(() => /* @__PURE__ */ yn("span", { class: "info-title" }, " Duration: ", -1)), pk = { key: 0 }, wk = /* @__PURE__ */ $d(() => /* @__PURE__ */ yn("span", { class: "info-title" }, " First Event: ", -1)), vk = { class: "description" }, mk = /* @__PURE__ */ $d(() => /* @__PURE__ */ yn("hr", null, null, -1)), _k = {
  key: 1,
  class: "count-info"
}, gk = /* @__PURE__ */ Xc(" Alarms: "), $k = { class: "info-title" }, yk = window.Vue.onMounted, Vk = window.Vue.ref, bk = /* @__PURE__ */ nk({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, s = Ge.ACCEPTED, a = Ge.REJECTED, u = new Date().getTime(), c = () => {
      var w;
      o("situation-selected", (w = r.situationInfo) == null ? void 0 : w.id);
    }, f = Vk("none");
    return yk(async () => {
      var v;
      if (((v = r.situationInfo) == null ? void 0 : v.id) === void 0)
        return;
      const w = await d_(r.situationInfo.id);
      w && w.status && (f.value = w.status);
    }), (w, v) => {
      var _, $, y;
      return or(), ir("div", {
        onClick: c,
        class: rc(["card", {
          rejected: r.situationInfo.status == Dt(a)
        }])
      }, [
        yn("div", {
          class: rc(["severity-line", [`${($ = (_ = r.situationInfo) == null ? void 0 : _.severity) == null ? void 0 : $.toLowerCase()}-bg dark`]])
        }, null, 2),
        yn("div", ak, [
          yn("div", lk, [
            yn("div", uk, "Situation " + Ar((y = r.situationInfo) == null ? void 0 : y.id), 1),
            f.value !== "none" ? (or(), ir("span", {
              key: 0,
              class: rc(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + Ar(f.value === "pending" ? "\u2026" : ""), 11, ck)) : Ci("", !0),
            r.situationInfo.status == Dt(s) ? (or(), ir("div", dk, [
              tw(Dt(Z), {
                icon: Dt(Ro),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Ci("", !0),
            r.situationInfo.status == Dt(a) ? (or(), ir("div", fk, [
              tw(Dt(Z), {
                icon: Dt(e_),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Ci("", !0)
          ]),
          yn("div", null, [
            hk,
            Xc(" " + Ar(Dt(el)(
              Dt(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? Ci("", !0) : (or(), ir("div", pk, [
            wk,
            Xc(Ar(Dt(Cn)(r.situationInfo.firstEventTime)), 1)
          ])),
          yn("div", vk, Ar(Dt(a_)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          mk,
          r.situationInfo.relatedAlarms ? (or(), ir("div", _k, [
            gk,
            yn("span", $k, Ar(r.situationInfo.relatedAlarms.length), 1)
          ])) : Ci("", !0),
          (or(!0), ir(ok, null, rk(Dt($e.exports.keys)(
            Dt($e.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (k) => (or(), ir("div", {
            class: "info-title",
            key: k
          }, " - " + Ar(k), 1))), 128))
        ])
      ], 2);
    };
  }
});
const p_ = /* @__PURE__ */ ue(bk, [["__scopeId", "data-v-2ed3bdb3"]]), Ck = window.Vue.openBlock, Sk = window.Vue.createElementBlock, Ek = window.Vue.createElementVNode;
var Ik = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const kk = {}, xk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Ak = /* @__PURE__ */ Ek("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), Bk = [
  Ak
];
function Tk(e, o) {
  return Ck(), Sk("svg", xk, Bk);
}
var Dk = /* @__PURE__ */ Ik(kk, [["render", Tk]]);
const Nk = window.Vue.openBlock, Lk = window.Vue.createElementBlock, w_ = window.Vue.createElementVNode;
var Mk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Ok = {}, Pk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Rk = /* @__PURE__ */ w_("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), Fk = /* @__PURE__ */ w_("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), Uk = [
  Rk,
  Fk
];
function Wk(e, o) {
  return Nk(), Lk("svg", Pk, Uk);
}
var qk = /* @__PURE__ */ Mk(Ok, [["render", Wk]]);
const Hk = window.Vue.openBlock, zk = window.Vue.createElementBlock, Yk = window.Vue.createElementVNode;
var Gk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const jk = {}, Zk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Kk = /* @__PURE__ */ Yk("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), Jk = [
  Kk
];
function Xk(e, o) {
  return Hk(), zk("svg", Zk, Jk);
}
var Qk = /* @__PURE__ */ Gk(jk, [["render", Xk]]);
const ex = window.Vue.openBlock, tx = window.Vue.createElementBlock, nx = window.Vue.createElementVNode;
var rx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ox = {}, ix = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, sx = /* @__PURE__ */ nx("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), ax = [
  sx
];
function lx(e, o) {
  return ex(), tx("svg", ix, ax);
}
var v_ = /* @__PURE__ */ rx(ox, [["render", lx]]);
const ux = window.Vue.defineComponent, sr = window.Vue.unref, oa = window.Vue.normalizeClass, ia = window.Vue.createVNode, cx = window.Vue.openBlock, dx = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const fx = { class: "paginator" }, hx = /* @__PURE__ */ ux({
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
    return (a, u) => (cx(), dx("div", fx, [
      ia(sr(Z), {
        icon: sr(Dk),
        "aria-hidden": "true",
        class: oa(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      ia(sr(Z), {
        icon: sr(Qk),
        "aria-hidden": "true",
        class: oa(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      ia(sr(Z), {
        icon: sr(v_),
        "aria-hidden": "true",
        class: oa(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      ia(sr(Z), {
        icon: sr(qk),
        "aria-hidden": "true",
        class: oa(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const px = /* @__PURE__ */ ue(hx, [["__scopeId", "data-v-40758818"]]);
const le = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, wx = window.Vue.computed, nl = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = wx(() => e.value[s] ? e.value[s] : o[s]);
  }), r;
};
const Gr = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, jr = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var vx = Object.defineProperty, mx = Object.defineProperties, _x = Object.getOwnPropertyDescriptors, nw = Object.getOwnPropertySymbols, gx = Object.prototype.hasOwnProperty, $x = Object.prototype.propertyIsEnumerable, rw = (e, o, r) => o in e ? vx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ow = (e, o) => {
  for (var r in o || (o = {}))
    gx.call(o, r) && rw(e, r, o[r]);
  if (nw)
    for (var r of nw(o))
      $x.call(o, r) && rw(e, r, o[r]);
  return e;
}, yx = (e, o) => mx(e, _x(o));
const Vx = window.Vue.defineComponent, bx = window.Vue.h;
var Cx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Sx = {
  center: {
    type: Boolean,
    default: !1
  }
}, Ex = Vx({
  props: Sx,
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
        this.styles = yx(ow({}, a), {
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
      return bx("div", {
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
var wr = /* @__PURE__ */ Cx(Ex, [["__scopeId", "data-v-18e2a5db"]]);
const Ix = window.Vue.openBlock, kx = window.Vue.createElementBlock, xx = window.Vue.createElementVNode;
var Ax = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Bx = {}, Tx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Dx = /* @__PURE__ */ xx("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), Nx = [
  Dx
];
function Lx(e, o) {
  return Ix(), kx("svg", Tx, Nx);
}
var zo = /* @__PURE__ */ Ax(Bx, [["render", Lx]]);
const iw = window.Vue.computed, Mx = (e, o, r) => {
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
const Ox = window.Vue.openBlock, Px = window.Vue.createElementBlock, yd = window.Vue.createElementVNode;
var Rx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Fx = {}, Ux = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Wx = /* @__PURE__ */ yd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), qx = /* @__PURE__ */ yd("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Hx = /* @__PURE__ */ yd("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), zx = [
  Wx,
  qx,
  Hx
];
function Yx(e, o) {
  return Ox(), Px("svg", Ux, zx);
}
var Gx = /* @__PURE__ */ Rx(Fx, [["render", Yx]]), jx = Object.defineProperty, Zx = Object.defineProperties, Kx = Object.getOwnPropertyDescriptors, sw = Object.getOwnPropertySymbols, Jx = Object.prototype.hasOwnProperty, Xx = Object.prototype.propertyIsEnumerable, aw = (e, o, r) => o in e ? jx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m_ = (e, o) => {
  for (var r in o || (o = {}))
    Jx.call(o, r) && aw(e, r, o[r]);
  if (sw)
    for (var r of sw(o))
      Xx.call(o, r) && aw(e, r, o[r]);
  return e;
}, __ = (e, o) => Zx(e, Kx(o));
const Yo = window.Vue.defineComponent, Xi = window.Vue.resolveComponent, Vn = window.Vue.openBlock, Ao = window.Vue.createElementBlock, Qx = window.Vue.createVNode, Ua = window.Vue.createBlock, eA = window.Vue.withModifiers, Fo = window.Vue.inject, Qi = window.Vue.computed, tA = window.Vue.normalizeClass, vo = window.Vue.createElementVNode, Wa = window.Vue.toDisplayString, Ba = window.Vue.renderSlot, zi = window.Vue.createCommentVNode, nA = window.Vue.withDirectives, rA = window.Vue.vShow, Qc = window.Vue.ref, lw = window.Vue.toRef, uw = window.Vue.nextTick, ed = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Vd = window.Vue.provide, cw = window.Vue.isRef, oA = window.Vue.onBeforeUnmount;
var os = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const iA = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, sA = Yo({
  props: iA,
  components: {
    FeatherIcon: Z
  }
}), aA = ["title"];
function lA(e, o, r, s, a, u) {
  const c = Xi("FeatherIcon");
  return Vn(), Ao("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    Qx(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, aA);
}
var uA = /* @__PURE__ */ os(sA, [["render", lA], ["__scopeId", "data-v-4265058e"]]);
const cA = Yo({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return zo;
    }
  },
  components: {
    ActionIcon: uA
  }
});
function dA(e, o, r, s, a, u) {
  const c = Xi("ActionIcon");
  return Vn(), Ua(c, {
    onClick: o[0] || (o[0] = eA((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var fA = /* @__PURE__ */ os(cA, [["render", dA]]);
const hA = Yo({
  computed: {
    errorIcon() {
      return Gx;
    }
  },
  components: {
    FeatherIcon: Z
  }
});
function pA(e, o, r, s, a, u) {
  const c = Xi("FeatherIcon");
  return Vn(), Ua(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var wA = /* @__PURE__ */ os(hA, [["render", pA], ["__scopeId", "data-v-0b8faef3"]]);
const vA = {
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
}, mA = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, _A = Yo({
  emits: mA,
  props: vA,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = Fo("wrapperOptions", {}), o = Fo("validationErrorMessage", !1), r = Qi(() => e.error ? e.error : o && o.value ? o.value : !1);
    return __(m_({}, e), { error: r });
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
    ClearIcon: fA,
    ErrorIcon: wA
  }
}), gA = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, $A = ["for"], yA = { class: "prefix" }, VA = { class: "post" };
function bA(e, o, r, s, a, u) {
  const c = Xi("ClearIcon"), f = Xi("ErrorIcon");
  return Vn(), Ao("div", {
    class: tA(["feather-input-wrapper-container", e.containerCls])
  }, [
    vo("fieldset", gA, [
      vo("legend", null, Wa(e.label), 1)
    ]),
    vo("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Wa(e.label), 9, $A),
    vo("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => e.handleWrapperClick && e.handleWrapperClick(...w))
    }, [
      vo("div", yA, [
        Ba(e.$slots, "pre", {}, void 0, !0)
      ]),
      Ba(e.$slots, "default", {}, void 0, !0),
      vo("div", VA, [
        e.showClear && e.computedClearText ? (Vn(), Ua(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (w) => e.$emit("clear"))
        }, null, 8, ["clear"])) : zi("", !0),
        e.error ? (Vn(), Ua(f, { key: 1 })) : zi("", !0),
        Ba(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var rl = /* @__PURE__ */ os(_A, [["render", bA], ["__scopeId", "data-v-4db296db"]]);
const CA = Yo({
  setup() {
    const e = Fo("subTextOptions", {}), o = Fo("validationErrorMessage", !1), r = Qi(() => e.error ? e.error : o && o.value ? o.value : "");
    return __(m_({}, e), { error: r });
  }
}), SA = { class: "feather-input-sub-text" }, EA = {
  key: 0,
  class: "feather-input-spacer"
}, IA = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, kA = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function xA(e, o, r, s, a, u) {
  return nA((Vn(), Ao("div", SA, [
    !e.hint && !e.error.length ? (Vn(), Ao("div", EA, "\xA0")) : zi("", !0),
    e.hint && !e.error.length ? (Vn(), Ao("div", IA, Wa(e.hint), 1)) : zi("", !0),
    e.error.length > 0 ? (Vn(), Ao("div", kA, Wa(e.error), 1)) : zi("", !0),
    Ba(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [rA, !e.inline || e.hint || e.error.length]
  ]);
}
var Go = /* @__PURE__ */ os(CA, [["render", xA], ["__scopeId", "data-v-8e0ac99e"]]);
const AA = {
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
Yo({
  props: AA,
  setup(e) {
    const o = Fo("featherFormErrors", Qc([])), r = lw(e, "errorList"), s = Qi(() => {
      var _;
      return (_ = r.value) != null && _.length ? r.value : o.value;
    }), a = lw(e, "generalError"), u = (_) => {
      document.getElementById(_).focus();
    }, c = (_) => _.replace(/ \*$/, ""), f = Qc(), w = (_) => `${c(_.label)} - ${_.message}`, v = Qi(() => (s.value.length && uw(() => f.value.focus()), e.headingText(s.value)));
    return ed(a, (_) => {
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
const jo = (e, o, r, s, a) => {
  const u = Fo("featherForm", !1);
  if (s && u && e.value) {
    const c = Qc("");
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
    return a && cw(a) && ed(a, () => {
      u.runValidation();
    }), ed(e, (_, $) => {
      _ && u && u.register(_, v), $ && u && u.deregister($);
    }, { immediate: !0 }), oA(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Zo = (e) => ({
  inherittedAttrs: Qi(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Ko = {
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
}, Jo = (e) => {
  Vd("subTextOptions", e);
}, ol = {
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
}, il = (e) => {
  Vd("wrapperOptions", e);
}, sa = window.Vue.ref, BA = window.Vue.watch, TA = window.Vue.watchEffect, dw = window.Vue.computed, oc = window.Vue.provide, g_ = (e, o, r, s, a) => {
  const u = sa([]), c = sa(), f = sa(), w = sa();
  TA(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((T) => T.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let T = u.value.filter((B) => !B.disabled);
      T = T.length ? T : u.value, f.value = T[0], f.value.first = !0;
    }
  }), BA(c, (S, T) => {
    T && (T.checked = !1), S && (S.checked = !0);
  });
  const v = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (o("update:modelValue", S.value), c.value = S, S.focus()));
  }, _ = dw(() => c.value || f.value), $ = Mx(_, u, v), y = dw(() => le("feather-radio-group"));
  w.value = y.value;
  const { validate: k } = jo(w, e, r, s, a);
  return oc("register", (S) => {
    u.value = [...u.value, S], w.value === y.value && (w.value = S.id);
  }), oc("select", v), oc("blur", (S) => {
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
    validate: k,
    firstElementId: w,
    groupId: y
  };
};
var DA = Object.defineProperty, NA = Object.defineProperties, LA = Object.getOwnPropertyDescriptors, fw = Object.getOwnPropertySymbols, MA = Object.prototype.hasOwnProperty, OA = Object.prototype.propertyIsEnumerable, hw = (e, o, r) => o in e ? DA(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, No = (e, o) => {
  for (var r in o || (o = {}))
    MA.call(o, r) && hw(e, r, o[r]);
  if (fw)
    for (var r of fw(o))
      OA.call(o, r) && hw(e, r, o[r]);
  return e;
}, $_ = (e, o) => NA(e, LA(o));
const vr = window.Vue.defineComponent, Yi = window.Vue.inject, qa = window.Vue.computed, Gi = window.Vue.ref, Qt = window.Vue.resolveComponent, Mt = window.Vue.openBlock, is = window.Vue.createElementBlock, y_ = window.Vue.normalizeClass, Sn = window.Vue.renderSlot, hr = window.Vue.createBlock, es = window.Vue.createCommentVNode, Ha = window.Vue.createElementVNode, PA = window.Vue.withModifiers, sl = window.Vue.createVNode, V_ = window.Vue.toRef, td = window.Vue.mergeProps, Wn = window.Vue.withCtx, RA = window.Vue.h, FA = window.Vue.provide;
var mr = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const UA = {
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
}, WA = vr({
  props: UA,
  setup(e) {
    const o = Yi("isCondensed", null), r = qa(() => o || e.condensed), s = Gi(!1);
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
    FeatherRipple: wr
  }
}), qA = ["aria-disabled"];
function HA(e, o, r, s, a, u) {
  const c = Qt("FeatherRipple");
  return Mt(), is("div", {
    class: y_(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    Sn(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (Mt(), hr(c, { key: 0 })) : es("", !0)
  ], 42, qA);
}
var al = /* @__PURE__ */ mr(WA, [["render", HA], ["__scopeId", "data-v-44d413dc"]]);
const zA = {
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
}, YA = vr({
  emits: ["delete"],
  props: zA,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: zo
    };
  },
  components: {
    FeatherIcon: Z
  }
}), GA = { class: "chip-delete" }, jA = ["aria-label", "aria-describedby"];
function ZA(e, o, r, s, a, u) {
  const c = Qt("FeatherIcon");
  return Mt(), is("span", GA, [
    Ha("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = PA((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      sl(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, jA)
  ]);
}
var KA = /* @__PURE__ */ mr(YA, [["render", ZA], ["__scopeId", "data-v-4bae6cb4"]]);
const JA = vr({
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
}), XA = ["title"];
function QA(e, o, r, s, a, u) {
  return Mt(), is("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    Sn(e.$slots, "default", {}, void 0, !0)
  ], 8, XA);
}
var ll = /* @__PURE__ */ mr(JA, [["render", QA], ["__scopeId", "data-v-1a0445b2"]]);
const eB = {}, tB = {
  class: "chip-icon",
  role: "presentation"
};
function nB(e, o) {
  return Mt(), is("span", tB, [
    Sn(e.$slots, "default", {}, void 0, !0)
  ]);
}
var ul = /* @__PURE__ */ mr(eB, [["render", nB], ["__scopeId", "data-v-2230176f"]]);
const pw = {
  delete: "Remove"
}, rB = vr({
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
    const r = nl(V_(e, "labels"), pw), s = qa(() => le("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = No({}, o.attrs);
    return e.disabled && delete u.onClick, $_(No({}, r), {
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
    Chip: al,
    DeleteIcon: KA,
    Label: ll,
    PreIcon: ul
  }
}), oB = ["aria-disabled"];
function iB(e, o, r, s, a, u) {
  const c = Qt("PreIcon"), f = Qt("Label"), w = Qt("DeleteIcon"), v = Qt("Chip");
  return Mt(), hr(v, td(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: Wn(() => [
      Ha("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Ha("span", td(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (Mt(), hr(c, { key: 0 }, {
            default: Wn(() => [
              Sn(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : es("", !0),
          sl(f, { id: e.chipTextId }, {
            default: Wn(() => [
              Sn(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, oB),
      e.canDelete ? (Mt(), hr(w, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (_) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : es("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var sB = /* @__PURE__ */ mr(rB, [["render", iB], ["__scopeId", "data-v-48b2704a"]]);
const aB = vr({
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
    Chip: al,
    Label: ll,
    PreIcon: ul
  }
}), lB = ["aria-disabled"];
function uB(e, o, r, s, a, u) {
  const c = Qt("PreIcon"), f = Qt("Label"), w = Qt("Chip");
  return Mt(), hr(w, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: Wn(() => [
      Ha("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (Mt(), hr(c, { key: 0 }, {
          default: Wn(() => [
            Sn(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : es("", !0),
        sl(f, null, {
          default: Wn(() => [
            Sn(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, lB)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var cB = /* @__PURE__ */ mr(aB, [["render", uB], ["__scopeId", "data-v-3e0c4eba"]]);
const dB = vr({
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
    const o = Gi(!1), r = Gi(!1), s = qa(() => le("chip-label-id")), a = qa(() => o.value || r.value ? 0 : -1), u = Gi(), c = () => {
      u.value.$el.focus();
    }, f = Yi("register", (y) => {
    }), w = Yi("blur", (y) => {
    }), v = Yi("select", (y) => {
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
    Chip: al,
    Label: ll,
    PreIcon: ul
  }
});
function fB(e, o, r, s, a, u) {
  const c = Qt("PreIcon"), f = Qt("Label"), w = Qt("Chip");
  return Mt(), hr(w, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: y_(["focus hover", { selected: e.checked }]),
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
      e.hasIcon ? (Mt(), hr(c, { key: 0 }, {
        default: Wn(() => [
          Sn(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : es("", !0),
      sl(f, { id: e.labelId }, {
        default: Wn(() => [
          Sn(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var hB = /* @__PURE__ */ mr(dB, [["render", fB], ["__scopeId", "data-v-bbcc2f70"]]);
const pB = {
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
}, ww = vr({
  props: pB,
  setup() {
    return { format: Yi("chipListFormat", "") };
  },
  render() {
    const e = (o) => RA(o, No(No({}, this.$props), this.$attrs), No({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(sB) : this.format === "radio" ? e(hB) : e(cB);
  }
}), wB = {
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
}, vB = vr({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: wB,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    FA("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const c = V_(e, "modelValue");
      return $_(No({
        attrs: {
          role: "radiogroup"
        }
      }, g_(c, o.emit, e.label, {}, Gi(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), mB = ["aria-label"];
function _B(e, o, r, s, a, u) {
  return Mt(), is("div", td(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    Sn(e.$slots, "default", {}, void 0, !0)
  ], 16, mB);
}
var gB = /* @__PURE__ */ mr(vB, [["render", _B], ["__scopeId", "data-v-1e06f41d"]]);
const $B = window.Vue.defineComponent, yB = window.Vue.normalizeClass, VB = window.Vue.openBlock, bB = window.Vue.createElementBlock, CB = window.Vue.createCommentVNode, SB = /* @__PURE__ */ $B({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (VB(), bB("span", {
      key: 0,
      class: yB(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : CB("", !0);
  }
});
const EB = /* @__PURE__ */ ue(SB, [["__scopeId", "data-v-e08880d6"]]), IB = window.Vue.defineComponent, Si = window.Vue.unref, b_ = window.Vue.createTextVNode, ic = window.Vue.normalizeClass, sc = window.Vue.withCtx, kB = window.Vue.createVNode, xB = window.Vue.renderList, AB = window.Vue.Fragment, aa = window.Vue.openBlock, BB = window.Vue.createElementBlock, ac = window.Vue.createBlock, vw = window.Vue.createCommentVNode, TB = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const DB = /* @__PURE__ */ b_(" ALL "), mw = window.Vue.ref, NB = window.Vue.watch, LB = window.Vue.computed, MB = window.Vue.reactive, OB = /* @__PURE__ */ IB({
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
    const r = e, s = mw(!1), a = LB(() => $e.exports.keys($e.exports.groupBy(r.alarms, r.property))), u = mw(
      (w = r.preSelected) != null && w.length ? r.preSelected : ["all"]
    ), c = MB({
      alarms: r.alarms
    }), f = (v) => {
      u.value = u.value.filter((_) => _ !== "all"), u.value.includes(v) ? u.value = u.value.filter((_) => _ !== v) : u.value.push(v), (v === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return NB(r, () => {
      var v;
      u.value = (v = r.preSelected) != null && v.length ? r.preSelected : ["all"], c.alarms = r.alarms, s.value = !1;
    }), (v, _) => Si(a).length > 0 ? (aa(), ac(Si(gB), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: ic({ vertical: r.isVertical })
    }, {
      default: sc(() => [
        kB(Si(ww), {
          class: ic({ clicked: u.value.includes("all") }),
          onClick: _[0] || (_[0] = ($) => f("all"))
        }, {
          default: sc(() => [
            DB
          ]),
          _: 1
        }, 8, ["class"]),
        (aa(!0), BB(AB, null, xB(Si(a), ($) => (aa(), ac(Si(ww), {
          class: ic([
            { clicked: u.value.includes($) },
            `${$ == null ? void 0 : $.toLowerCase()}-bg`
          ]),
          key: $,
          onClick: (y) => f($)
        }, {
          default: sc(() => [
            e.property == "severity" ? (aa(), ac(EB, {
              key: 0,
              severity: $
            }, null, 8, ["severity"])) : vw("", !0),
            b_(TB($), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : vw("", !0);
  }
});
const PB = /* @__PURE__ */ ue(OB, [["__scopeId", "data-v-d83b0f85"]]);
const RB = window.Vue.watch, FB = window.Vue.onBeforeUnmount, UB = window.Vue.ref, WB = window.Vue.onMounted, qB = (e) => {
  const o = UB(!1);
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
  return WB(() => {
    const c = RB(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    FB(() => {
      c(), u();
    });
  }), o;
}, HB = window.Vue.watch, zB = window.Vue.onBeforeUnmount, YB = window.Vue.ref, GB = window.Vue.onMounted, jB = (e, o) => {
  const r = YB(!1), s = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((v) => v && v.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return GB(() => {
    const c = HB(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    zB(() => {
      c(), u();
    });
  }), r;
}, ZB = window.Vue.watch, KB = window.Vue.onBeforeUnmount, JB = window.Vue.ref, C_ = (e, o) => {
  const r = JB(!1);
  let s = !1;
  const a = (w) => {
    o(w), s = !1;
  };
  function u(w) {
    s || (requestAnimationFrame(() => a(w)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = ZB([e, r], ([w, v], _) => {
    _ && _.length && _[0] && _[0].removeEventListener("scroll", u, !0), v && w ? w.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return KB(() => {
    f(), c();
  }), r;
}, XB = window.Vue.defineComponent, On = window.Vue.ref, _w = window.Vue.toRef, QB = window.Vue.onMounted, eT = window.Vue.watch, gw = window.Vue.computed, tT = window.Vue.nextTick, $w = window.Vue.openBlock, yw = window.Vue.createElementBlock, Vw = window.Vue.renderSlot, nT = window.Vue.normalizeClass, rT = window.Vue.normalizeStyle, oT = window.Vue.createCommentVNode;
var iT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const sT = {
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
}, aT = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, lT = XB({
  emits: aT,
  props: sT,
  setup(e, o) {
    const r = On(), s = On(), a = _w(e, "open"), u = _w(e, "noExpand"), c = On("auto"), f = On(), w = On(e.triggerId || le("feather-menu-trigger")), v = On(le("feather-menu-dropdown")), _ = On(""), $ = On("");
    QB(() => {
      f.value = window;
    });
    const y = On(!1), k = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), D = () => {
      if (!s.value)
        return;
      const I = r.value.getBoundingClientRect();
      y.value = !0, c.value = "auto", tT(() => {
        let { height: R, width: P } = s.value.getBoundingClientRect();
        const H = k(), we = H.height, he = H.width;
        e.fill && P < I.width ? (c.value = I.width + "px", P = I.width) : c.value = P + "px";
        let ce = 0;
        we - I.bottom < R && I.top >= R ? (ce = I.top - R, e.cover && (ce += I.height)) : (ce = I.bottom, e.cover && (ce -= I.height));
        let Se = e.right ? I.right - P : I.left;
        !e.right && I.right >= P && he - I.left < P && (Se = I.right - P), e.right && I.right <= P && he - I.left > P && (Se = I.left), $.value = `${Se}px`, _.value = `${ce}px`, y.value = !1;
      });
    }, L = jB(r, (I) => {
      o.emit("outside-click", I);
    }), S = qB(D), T = C_(f, D);
    eT([a, s], ([I, R]) => {
      I && R && D(), L.value = I, S.value = I, T.value = I;
    });
    const B = gw(() => {
      const I = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return a.value && (I["aria-controls"] = v.value), u.value || (I["aria-expanded"] = a.value ? "true" : "false"), I;
    }), O = gw(() => ({
      click: (I) => {
        o.emit("trigger-click", I);
      }
    }));
    return {
      positionTop: _,
      positionLeft: $,
      triggerId: w,
      triggerAttrs: B,
      triggerListeners: O,
      menuId: v,
      menu: s,
      menuWidth: c,
      root: r,
      calculatePosition: D,
      calculating: y
    };
  }
}), uT = ["data-ref-id"], cT = ["data-ref-id", "id"];
function dT(e, o, r, s, a, u) {
  return $w(), yw("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    Vw(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? ($w(), yw("div", {
      key: 0,
      class: nT(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: rT({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      Vw(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, cT)) : oT("", !0)
  ], 8, uT);
}
var S_ = /* @__PURE__ */ iT(lT, [["render", dT], ["__scopeId", "data-v-f75af406"]]), fT = {
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
const hT = window.Vue.openBlock, pT = window.Vue.createElementBlock, wT = window.Vue.createElementVNode;
var vT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const mT = {}, _T = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, gT = /* @__PURE__ */ wT("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), $T = [
  gT
];
function yT(e, o) {
  return hT(), pT("svg", _T, $T);
}
var VT = /* @__PURE__ */ vT(mT, [["render", yT]]);
const bT = window.Vue.openBlock, CT = window.Vue.createElementBlock, bd = window.Vue.createElementVNode;
var ST = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ET = {}, IT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, kT = /* @__PURE__ */ bd("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), xT = /* @__PURE__ */ bd("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), AT = /* @__PURE__ */ bd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), BT = [
  kT,
  xT,
  AT
];
function TT(e, o) {
  return bT(), CT("svg", IT, BT);
}
var DT = /* @__PURE__ */ ST(ET, [["render", TT]]);
const NT = window.Vue.openBlock, LT = window.Vue.createElementBlock, MT = window.Vue.createElementVNode;
var OT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const PT = {}, RT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, FT = /* @__PURE__ */ MT("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), UT = [
  FT
];
function WT(e, o) {
  return NT(), LT("svg", RT, UT);
}
var cl = /* @__PURE__ */ OT(PT, [["render", WT]]);
const ts = function(e, o) {
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
const qT = window.Vue.defineComponent, HT = window.Vue.openBlock, zT = window.Vue.createElementBlock, YT = window.Vue.normalizeClass, GT = window.Vue.pushScopeId, jT = window.Vue.popScopeId, nd = window.Vue.createElementVNode;
var ZT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const KT = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, JT = {
  click: (e) => !0
}, XT = qT({
  emits: JT,
  props: KT,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), E_ = (e) => (GT("data-v-07e020f5"), e = e(), jT(), e), QT = /* @__PURE__ */ E_(() => /* @__PURE__ */ nd("div", { class: "track" }, null, -1)), eD = /* @__PURE__ */ E_(() => /* @__PURE__ */ nd("div", { class: "switcher" }, [
  /* @__PURE__ */ nd("div", { class: "switch-circle" })
], -1)), tD = [
  QT,
  eD
];
function nD(e, o, r, s, a, u) {
  return HT(), zT("div", {
    class: YT(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, tD, 2);
}
var rD = /* @__PURE__ */ ZT(XT, [["render", nD], ["__scopeId", "data-v-07e020f5"]]), oD = Object.defineProperty, iD = Object.defineProperties, sD = Object.getOwnPropertyDescriptors, bw = Object.getOwnPropertySymbols, aD = Object.prototype.hasOwnProperty, lD = Object.prototype.propertyIsEnumerable, Cw = (e, o, r) => o in e ? oD(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Sw = (e, o) => {
  for (var r in o || (o = {}))
    aD.call(o, r) && Cw(e, r, o[r]);
  if (bw)
    for (var r of bw(o))
      lD.call(o, r) && Cw(e, r, o[r]);
  return e;
}, Ew = (e, o) => iD(e, sD(o));
const Cd = window.Vue.defineComponent, Br = window.Vue.h, uD = window.Vue.openBlock, cD = window.Vue.createElementBlock, dD = window.Vue.renderSlot;
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
const fD = {
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
}, hD = Cd({
  inheritAttrs: !1,
  props: fD,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = Br("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Br("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = Br("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : Br(wr);
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
var ss = /* @__PURE__ */ I_(hD, [["__scopeId", "data-v-7c46b2b3"]]);
Cd({
  components: {
    FeatherListItem: ss
  }
});
const pD = {}, wD = { class: "feather-list" };
function vD(e, o) {
  return uD(), cD("ul", wD, [
    dD(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Sd = /* @__PURE__ */ I_(pD, [["render", vD], ["__scopeId", "data-v-941a1d50"]]);
const mD = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, _D = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
Cd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: mD,
  props: _D,
  computed: {
    labelId() {
      return le("switch-label");
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
  components: { SwitchRender: rD, FeatherListItem: ss }
});
var gD = Object.defineProperty, $D = Object.defineProperties, yD = Object.getOwnPropertyDescriptors, Iw = Object.getOwnPropertySymbols, VD = Object.prototype.hasOwnProperty, bD = Object.prototype.propertyIsEnumerable, kw = (e, o, r) => o in e ? gD(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ot = (e, o) => {
  for (var r in o || (o = {}))
    VD.call(o, r) && kw(e, r, o[r]);
  if (Iw)
    for (var r of Iw(o))
      bD.call(o, r) && kw(e, r, o[r]);
  return e;
}, CD = (e, o) => $D(e, yD(o));
const Xo = window.Vue.defineComponent, fe = window.Vue.openBlock, Ue = window.Vue.createElementBlock, Vt = window.Vue.createElementVNode, hn = window.Vue.toDisplayString, Xt = window.Vue.createCommentVNode, Me = window.Vue.resolveComponent, Jt = window.Vue.createBlock, st = window.Vue.withCtx, Lo = window.Vue.Fragment, ji = window.Vue.renderList, bt = window.Vue.createVNode, Ed = window.Vue.withModifiers, Yr = window.Vue.normalizeClass, rd = window.Vue.renderSlot, k_ = window.Vue.createTextVNode, SD = window.Vue.pushScopeId, ED = window.Vue.popScopeId, x_ = window.Vue.reactive, A_ = window.Vue.nextTick, lc = window.Vue.markRaw, uc = window.Vue.toRef, xw = window.Vue.computed, ID = window.Vue.toRefs, mo = window.Vue.ref, cc = window.Vue.mergeProps, Aw = window.Vue.toHandlers, la = window.Vue.withDirectives, ua = window.Vue.vShow;
var dl = {
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
const kD = Xo({
  mixins: [],
  props: Ot(Ot({
    text: {
      type: String,
      required: !0
    }
  }, dl), Id),
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
}), xD = {
  key: 0,
  class: "highlight"
}, AD = { key: 1 };
function BD(e, o, r, s, a, u) {
  return fe(), Ue("span", null, [
    Vt("span", null, hn(e.beginning), 1),
    e.highlighted ? (fe(), Ue("span", xD, hn(e.highlighted), 1)) : Xt("", !0),
    e.end ? (fe(), Ue("span", AD, hn(e.end), 1)) : Xt("", !0)
  ]);
}
var B_ = /* @__PURE__ */ Kr(kD, [["render", BD], ["__scopeId", "data-v-8abe2492"]]);
const TD = Xo({
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
  }, dl), Id),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        ts(o, r.$el);
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
    FeatherList: Sd,
    FeatherListItem: ss,
    Highlighter: B_
  }
}), DD = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function ND(e, o, r, s, a, u) {
  const c = Me("Highlighter"), f = Me("FeatherListItem"), w = Me("FeatherList");
  return fe(), Jt(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: st(() => [
      (fe(!0), Ue(Lo, null, ji(e.items, (v, _) => (fe(), Ue(Lo, {
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
          onClick: Ed(($) => e.select(v), ["stop"])
        }, {
          default: st(() => [
            bt(c, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (fe(), Ue("span", DD, hn(e.newLabel), 1)) : Xt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (fe(), Ue("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : Xt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var LD = /* @__PURE__ */ Kr(TD, [["render", ND], ["__scopeId", "data-v-f623434a"]]);
const MD = Xo({
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
  }, dl), Id),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        ts(o, r);
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
    Highlighter: B_
  }
}), OD = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, PD = ["aria-multiselectable"], RD = { role: "row" }, FD = ["aria-selected", "onClick"], UD = ["id", "aria-selected"], WD = { key: 1 };
function qD(e, o, r, s, a, u) {
  const c = Me("Highlighter");
  return fe(), Ue("div", OD, [
    Vt("table", {
      class: Yr(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      Vt("thead", null, [
        Vt("tr", RD, [
          (fe(!0), Ue(Lo, null, ji(e.config, (f) => (fe(), Ue("th", {
            key: f.title
          }, hn(f.title), 1))), 128))
        ])
      ]),
      Vt("tbody", null, [
        (fe(!0), Ue(Lo, null, ji(e.items, (f, w) => (fe(), Ue("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Yr({ focus: e.isActive(w), selected: e.isSelected(f) }),
          onClick: Ed((v) => e.select(f), ["stop"])
        }, [
          (fe(!0), Ue(Lo, null, ji(e.config, (v, _) => (fe(), Ue("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(w, _),
            "aria-selected": e.isSelected(f),
            class: Yr({ "focus-cell": e.isActiveCell(w, _) })
          }, [
            v.prop === e.textProp ? (fe(), Jt(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (fe(), Ue("p", WD, hn(f[v.prop]), 1))
          ], 10, UD))), 128))
        ], 10, FD))), 128))
      ])
    ], 10, PD)
  ], 512);
}
var HD = /* @__PURE__ */ Kr(MD, [["render", qD], ["__scopeId", "data-v-58c88fd1"]]);
const zD = Xo({
  components: {
    FeatherList: Sd,
    FeatherListItem: ss
  }
});
function YD(e, o, r, s, a, u) {
  const c = Me("FeatherListItem"), f = Me("FeatherList");
  return fe(), Jt(f, { class: "result-list" }, {
    default: st(() => [
      bt(c, { "as-li": "" }, {
        default: st(() => [
          rd(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var GD = /* @__PURE__ */ Kr(zD, [["render", YD], ["__scopeId", "data-v-06b752c6"]]);
const jD = Xo({
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
    Cancel: zo,
    BaseChip: al,
    BaseChipLabel: ll,
    BaseChipPreIcon: ul
  }
});
function ZD(e, o, r, s, a, u) {
  const c = Me("FeatherIcon"), f = Me("BaseChipPreIcon"), w = Me("BaseChipLabel"), v = Me("Cancel"), _ = Me("BaseChip");
  return fe(), Jt(_, {
    class: Yr(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: st(() => [
      e.showPreIcon ? (fe(), Jt(f, { key: 0 }, {
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
      })) : Xt("", !0),
      bt(w, null, {
        default: st(() => [
          k_(hn(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? Xt("", !0) : (fe(), Ue("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = Ed((...$) => e.handleClick && e.handleClick(...$), ["stop"]))
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
var KD = /* @__PURE__ */ Kr(jD, [["render", ZD], ["__scopeId", "data-v-e0fc6ac0"]]);
const JD = {}, XD = (e) => (SD("data-v-aa720e06"), e = e(), ED(), e), QD = { class: "spinner-container" }, eN = /* @__PURE__ */ XD(() => /* @__PURE__ */ Vt("svg", {
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
], -1)), tN = [
  eN
];
function nN(e, o) {
  return fe(), Ue("div", QD, tN);
}
var rN = /* @__PURE__ */ Kr(JD, [["render", nN], ["__scopeId", "data-v-aa720e06"]]), fl = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(fl || {});
const T_ = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, oN = Ot(Ot(Ot({
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
    validator: (e) => !!fl[e]
  },
  labels: {
    type: Object,
    default: () => T_
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, dl), Ko), ol), iN = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, sN = (e, o, r, s) => {
  if (r.toLowerCase() === fl.multi) {
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
}, aN = () => {
  const e = x_({
    row: -1
  }), o = (u) => {
    A_(() => {
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
}, lN = (e) => {
  const o = x_({
    row: -1,
    col: -1
  }), r = (c, f) => {
    A_(() => {
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
}, uN = Xo({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: iN,
  props: oN,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== fl.multi;
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
      return le("result-item");
    },
    minCharWarningId() {
      return le("min-char-warning");
    },
    subTextId() {
      return le("feather-autocomplete-description");
    },
    resultsId() {
      return le("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return le("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return lc(VT);
    },
    minCharIcon() {
      return lc(DT);
    },
    dropdownIcon() {
      return lc(cl);
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
        ts(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, o) {
        e && o && e.length > o.length && this.scrollContainer && this.$nextTick(() => {
          ts(this.inputRef, this.scrollContainer);
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
      return this.activeChipId = le("active-chip"), this.activeChipId;
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
    const r = nl(uc(e, "labels"), T_);
    Jo(e), il(e);
    let s;
    e.gridConfig ? s = lN(e.gridConfig) : s = aN();
    const a = uc(e, "id"), u = xw(() => a.value ? a.value : le("feather-autocomplete-input")), { validate: c } = jo(u, uc(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: w, textProp: v, allowNew: _, type: $, minChar: y } = ID(e), k = mo(!1), D = mo(!1), M = mo(!1), L = mo(""), S = mo([]), T = mo(), B = xw(() => T.value), O = () => {
      k.value && !D.value && (L.value && L.value.length >= y.value && o.emit("search", L.value), y.value <= 0 && o.emit("search", L.value || ""), S.value = [], s.reset());
    }, I = sN({
      selectionLimit: f,
      selectionLimitReached: D,
      modelValue: w,
      textProp: v,
      allowNew: _,
      forceCloseResults: M,
      query: L,
      internalResults: S,
      input: B,
      emitSearch: O
    }, s, $.value, o.emit);
    return CD(Ot(Ot({}, r), Zo(o.attrs)), {
      query: L,
      internalResults: S,
      selectionLimitReached: D,
      forceCloseResults: M,
      hasFocus: k,
      strategy: I,
      emitSearch: O,
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
    InputWrapper: rl,
    InputSubText: Go,
    AutocompleteResults: LD,
    AutocompleteResultsGrid: HD,
    Chip: KD,
    MenuMessage: GD,
    FeatherIcon: Z,
    FeatherMenu: S_,
    Spinner: rN
  }
}), cN = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, dN = ["id"], fN = { "data-ref-id": "feather-autocomplete-no-results" }, hN = { "data-ref-id": "feather-autocomplete-selection-limit" }, pN = { "data-ref-id": "feather-autocomplete-min-char" };
function wN(e, o, r, s, a, u) {
  const c = Me("FeatherIcon"), f = Me("Chip"), w = Me("InputWrapper"), v = Me("AutocompleteResults"), _ = Me("AutocompleteResultsGrid"), $ = Me("MenuMessage"), y = Me("Spinner"), k = Me("FeatherMenu"), D = Me("InputSubText");
  return fe(), Ue("div", cc(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    bt(k, {
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
        bt(w, cc(Ot(Ot({}, M), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, Aw(L), { ref: "scroll" }), {
          pre: st(() => [
            rd(e.$slots, "pre", {}, () => [
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
            Vt("div", {
              class: Yr(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              Vt("div", cN, null, 512),
              Vt("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, hn(e.selectedDescribedByText), 9, dN),
              (fe(!0), Ue(Lo, null, ji(e.modelValueList, (S, T) => la((fe(), Jt(f, {
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
                [ua, !e.singleSelect]
              ])), 128)),
              Vt("textarea", cc(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Aw(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: st(() => [
        e.gridConfig ? Xt("", !0) : la((fe(), Jt(v, {
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
          [ua, e.showResults]
        ]),
        e.gridConfig ? la((fe(), Jt(_, {
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
          [ua, e.showResults]
        ]) : Xt("", !0),
        e.showNoResults ? (fe(), Jt($, { key: 2 }, {
          default: st(() => [
            Vt("span", fN, hn(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : Xt("", !0),
        e.showSelectionLimit ? (fe(), Jt($, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: st(() => [
            bt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            Vt("span", hN, hn(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Xt("", !0),
        e.minChar ? la((fe(), Jt($, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: st(() => [
            bt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            Vt("span", pN, [
              rd(e.$slots, "min-char", {}, () => [
                k_(hn(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [ua, e.showMinCharWarning]
        ]) : Xt("", !0),
        e.showLoading ? (fe(), Jt(y, { key: 5 })) : Xt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    bt(D, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var vN = /* @__PURE__ */ Kr(uN, [["render", wN], ["__scopeId", "data-v-43a7e951"]]);
var mN = Object.defineProperty, _N = Object.defineProperties, gN = Object.getOwnPropertyDescriptors, Bw = Object.getOwnPropertySymbols, $N = Object.prototype.hasOwnProperty, yN = Object.prototype.propertyIsEnumerable, Tw = (e, o, r) => o in e ? mN(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ta = (e, o) => {
  for (var r in o || (o = {}))
    $N.call(o, r) && Tw(e, r, o[r]);
  if (Bw)
    for (var r of Bw(o))
      yN.call(o, r) && Tw(e, r, o[r]);
  return e;
}, D_ = (e, o) => _N(e, gN(o));
const N_ = window.Vue.defineComponent, VN = window.Vue.ref, Zi = window.Vue.computed, bN = window.Vue.reactive, Dw = window.Vue.watch, dc = window.Vue.inject, L_ = window.Vue.resolveComponent, od = window.Vue.openBlock, M_ = window.Vue.createElementBlock, pr = window.Vue.createElementVNode, CN = window.Vue.createBlock, SN = window.Vue.createCommentVNode, O_ = window.Vue.renderSlot, EN = window.Vue.pushScopeId, IN = window.Vue.popScopeId, fc = window.Vue.toRef, Nw = window.Vue.mergeProps, kN = window.Vue.toDisplayString, xN = window.Vue.createVNode;
var P_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const AN = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, BN = N_({
  props: AN,
  setup(e) {
    const o = VN(), r = () => {
      o.value.focus();
    }, s = Zi(() => le("feather-radio-button")), a = bN({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = Zi(() => le("radio-label-id")), c = Zi(() => a.first || a.checked ? 0 : -1);
    Dw(() => e.disabled, ($) => {
      a.disabled = $;
    }, { immediate: !0 }), Dw(() => e.value, ($) => {
      a.value = $;
    }, { immediate: !0 });
    const f = dc("register", ($) => {
    }), w = dc("blur", ($) => {
    }), v = dc("select", ($) => {
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
    FeatherRipple: wr
  }
}), TN = (e) => (EN("data-v-24790cf0"), e = e(), IN(), e), DN = { class: "layout-container" }, NN = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], LN = { class: "radio hover focus" }, MN = /* @__PURE__ */ TN(() => /* @__PURE__ */ pr("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ pr("svg", { class: "dot" }, [
    /* @__PURE__ */ pr("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), ON = ["id"];
function PN(e, o, r, s, a, u) {
  const c = L_("feather-ripple");
  return od(), M_("div", DN, [
    pr("div", {
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
      pr("div", LN, [
        MN,
        e.vm.disabled ? SN("", !0) : (od(), CN(c, {
          key: 0,
          center: ""
        }))
      ]),
      pr("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        O_(e.$slots, "default", {}, void 0, !0)
      ], 8, ON)
    ], 40, NN)
  ]);
}
var id = /* @__PURE__ */ P_(BN, [["render", PN], ["__scopeId", "data-v-24790cf0"]]);
const RN = D_(Ta({}, Ko), {
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
}), FN = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, UN = N_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: RN,
  emits: FN,
  setup(e, o) {
    Jo(e);
    const r = fc(e, "error"), s = fc(e, "modelValue"), a = Zi(() => le("feather-input-description")), u = Zi(() => {
      const c = D_(Ta({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return Ta(Ta({
      descriptionId: a,
      attrs: u
    }, g_(s, o.emit, e.label, e.schema, fc(e, "error"))), Zo(o.attrs));
  },
  components: {
    InputSubText: Go
  }
}), WN = ["for"], qN = ["id"];
function HN(e, o, r, s, a, u) {
  const c = L_("InputSubText");
  return od(), M_("div", Nw(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    pr("label", {
      for: e.groupId,
      class: "group-label"
    }, kN(e.label), 9, WN),
    pr("div", Nw(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      O_(e.$slots, "default", {}, void 0, !0)
    ], 16, qN),
    xN(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var R_ = /* @__PURE__ */ P_(UN, [["render", HN], ["__scopeId", "data-v-6775aeb9"]]);
const zN = window.Vue.defineComponent, YN = window.Vue.renderList, GN = window.Vue.Fragment, Lw = window.Vue.openBlock, jN = window.Vue.createElementBlock, ZN = window.Vue.toDisplayString, KN = window.Vue.createTextVNode, Mw = window.Vue.unref, Ow = window.Vue.withCtx, JN = window.Vue.createVNode, XN = window.Vue.createBlock, QN = window.Vue.watch, eL = window.Vue.ref, tL = /* @__PURE__ */ zN({
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
    ], a = eL(r.preSelected || s[0].id);
    return QN(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (Lw(), XN(Mw(R_), {
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
        (Lw(), jN(GN, null, YN(s, (f) => JN(Mw(id), {
          value: f.id,
          key: f.id
        }, {
          default: Ow(() => [
            KN(ZN(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const nL = /* @__PURE__ */ ue(tL, [["__scopeId", "data-v-0363302c"]]);
var rL = Object.defineProperty, oL = Object.defineProperties, iL = Object.getOwnPropertyDescriptors, Pw = Object.getOwnPropertySymbols, sL = Object.prototype.hasOwnProperty, aL = Object.prototype.propertyIsEnumerable, Rw = (e, o, r) => o in e ? rL(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ei = (e, o) => {
  for (var r in o || (o = {}))
    sL.call(o, r) && Rw(e, r, o[r]);
  if (Pw)
    for (var r of Pw(o))
      aL.call(o, r) && Rw(e, r, o[r]);
  return e;
}, Fw = (e, o) => oL(e, iL(o));
const lL = window.Vue.defineComponent, uL = window.Vue.inject, Ii = window.Vue.h;
var cL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const dL = {
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
}, fL = lL({
  inheritAttrs: !1,
  props: dL,
  setup() {
    return { hasTooltip: uL("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const w = ["btn", "hover", "focus", f];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, o = this.asAnchor ? "a" : "button", r = {}, s = Ei({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = Ii(wr);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), Ii(o, Fw(Ei(Ei({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Ii(wr, { center: !0 })
      ]);
    }
    const c = Ii("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Ii(o, Fw(Ei(Ei({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var se = /* @__PURE__ */ cL(fL, [["__scopeId", "data-v-702d1074"]]);
const hL = window.Vue.openBlock, pL = window.Vue.createElementBlock, wL = window.Vue.createElementVNode;
var vL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const mL = {}, _L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, gL = /* @__PURE__ */ wL("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), $L = [
  gL
];
function yL(e, o) {
  return hL(), pL("svg", _L, $L);
}
var VL = /* @__PURE__ */ vL(mL, [["render", yL]]);
const bL = window.Vue.openBlock, CL = window.Vue.createElementBlock, SL = window.Vue.createElementVNode;
var EL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const IL = {}, kL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, xL = /* @__PURE__ */ SL("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), AL = [
  xL
];
function BL(e, o) {
  return bL(), CL("svg", kL, AL);
}
var TL = /* @__PURE__ */ EL(IL, [["render", BL]]);
const DL = window.Vue.openBlock, NL = window.Vue.createElementBlock, LL = window.Vue.createElementVNode;
var ML = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const OL = {}, PL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, RL = /* @__PURE__ */ LL("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), FL = [
  RL
];
function UL(e, o) {
  return DL(), NL("svg", PL, FL);
}
var F_ = /* @__PURE__ */ ML(OL, [["render", UL]]);
const WL = window.Vue.defineComponent, _n = window.Vue.unref, Tr = window.Vue.createVNode, Uw = window.Vue.toDisplayString, Fn = window.Vue.createElementVNode, U_ = window.Vue.createTextVNode, Ww = window.Vue.openBlock, qw = window.Vue.createElementBlock, qL = window.Vue.createCommentVNode, HL = window.Vue.withCtx, zL = window.Vue.vShow, YL = window.Vue.normalizeClass, GL = window.Vue.withDirectives, jL = window.Vue.Fragment, ZL = window.Vue.pushScopeId, KL = window.Vue.popScopeId, W_ = (e) => (ZL("data-v-b1dc2670"), e = e(), KL(), e), JL = /* @__PURE__ */ U_(" Filters "), XL = { class: "count" }, QL = { class: "results" }, eM = { class: "total" }, tM = /* @__PURE__ */ U_(" Reset "), nM = /* @__PURE__ */ W_(() => /* @__PURE__ */ Fn("div", { class: "title" }, "By Severities:", -1)), rM = /* @__PURE__ */ W_(() => /* @__PURE__ */ Fn("div", { class: "title" }, "By Start Date:", -1)), Dr = window.Vue.ref, oM = window.Vue.reactive, iM = window.Vue.markRaw, Hw = window.Vue.watch, sM = /* @__PURE__ */ WL({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: o }) {
    const r = e, s = iM({
      FilterAlt: VL,
      ExpandLess: TL,
      ExpandMore: cl,
      Refresh: F_
    }), a = pn(), u = Dr(r.isOpen), c = Dr(["all"]), f = Dr(1), w = Dr(r.list), v = Dr(!1), _ = Dr(0), $ = Dr(null), y = oM({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), k = () => {
      var R, P;
      r.saveFilters && a.filters && (a.filters.node && (y.nodeSelectedValue = a.filters.node), ((R = a.filters) == null ? void 0 : R.severities) && !((P = a.filters) != null && P.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, B());
    }, D = () => {
      y.nodes = a.nodes, y.results = a.nodes;
    };
    Hw(
      () => a.nodes,
      () => {
        D();
      }
    ), Hw(r, () => {
      w.value = r.list, k();
    });
    const M = (R) => {
      c.value = R, B();
    }, L = (R) => {
      f.value = R, B();
    }, S = (R) => {
      if (!R)
        return y.nodeSelectedValue = void 0, [];
      v.value = !0, y.results = y.nodes.filter((P) => P.label.toLowerCase().indexOf(R) > -1).map((P) => ({
        _text: P.label,
        id: P.id
      })), v.value = !1;
    }, T = () => {
      c.value = ["all"], f.value = 1, y.nodeSelectedValue = void 0, _.value = 0, o("filtered-list", r.list), r.isOpen || (u.value = !1), r.saveFilters && (a.filters = null), w.value = r.list;
    }, B = () => {
      _.value = 0;
      let R = r.list;
      y.nodeSelectedValue && y.nodeSelectedValue._text && (_.value++, r.isSituation ? R = R.map((P) => {
        if (P.relatedAlarms.filter(
          (he) => {
            var ce;
            return he.nodeLabel === ((ce = y.nodeSelectedValue) == null ? void 0 : ce._text);
          }
        ).length > 0)
          return P;
      }).filter((P) => P) : R = R.filter(
        (P) => {
          var H;
          return P.nodeLabel === ((H = y.nodeSelectedValue) == null ? void 0 : H._text);
        }
      )), c.value.includes("all") || (_.value++, R = R.filter(
        (P) => c.value.includes(P.severity)
      )), f.value !== 1 && (_.value++, R = zI(
        f.value,
        R
      )), w.value = R, r.saveFilters && O(), o("filtered-list", R);
    }, O = () => {
      a.filters = {
        node: y.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, I = () => {
      u.value = !u.value;
    };
    return (R, P) => (Ww(), qw(jL, null, [
      r.isOpen ? qL("", !0) : (Ww(), qw("div", {
        key: 0,
        class: "btn-filter",
        onClick: I
      }, [
        Fn("div", null, [
          Tr(_n(Z), {
            icon: _n(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          JL,
          Fn("span", XL, Uw(_.value), 1)
        ]),
        Tr(_n(Z), {
          icon: u.value ? _n(s).ExpandLess : _n(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      GL(Fn("div", {
        class: YL(["filters", { collapsed: !r.isOpen }])
      }, [
        Fn("div", QL, [
          Fn("div", eM, "Results: " + Uw(_n(w).length), 1),
          Tr(_n(se), {
            class: "btn-reset",
            onClick: T
          }, {
            default: HL(() => [
              Tr(_n(Z), {
                icon: _n(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              tM
            ]),
            _: 1
          })
        ]),
        Fn("div", null, [
          Tr(_n(vN), {
            ref_key: "autocomplete",
            ref: $,
            label: "Search by node",
            loading: v.value,
            modelValue: y.nodeSelectedValue,
            "onUpdate:modelValue": [
              P[0] || (P[0] = (H) => y.nodeSelectedValue = H),
              B
            ],
            results: y.results,
            type: "single",
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"]),
          nM,
          Tr(PB, {
            alarms: r.list,
            onSelectedOption: M,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          Fn("div", null, [
            rM,
            Tr(nL, {
              onFilterDateSelected: L,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [zL, u.value]
      ])
    ], 64));
  }
});
const Qo = /* @__PURE__ */ ue(sM, [["__scopeId", "data-v-b1dc2670"]]), aM = window.Vue.openBlock, lM = window.Vue.createElementBlock, uM = window.Vue.createElementVNode;
var cM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const dM = {}, fM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hM = /* @__PURE__ */ uM("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), pM = [
  hM
];
function wM(e, o) {
  return aM(), lM("svg", fM, pM);
}
var hl = /* @__PURE__ */ cM(dM, [["render", wM]]);
const vM = window.Vue.openBlock, mM = window.Vue.createElementBlock, q_ = window.Vue.createElementVNode;
var _M = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const gM = {}, $M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yM = /* @__PURE__ */ q_("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), VM = /* @__PURE__ */ q_("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), bM = [
  yM,
  VM
];
function CM(e, o) {
  return vM(), mM("svg", $M, bM);
}
var SM = /* @__PURE__ */ _M(gM, [["render", CM]]);
const EM = window.Vue.openBlock, IM = window.Vue.createElementBlock, kM = window.Vue.createElementVNode;
var xM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const AM = {}, BM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, TM = /* @__PURE__ */ kM("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), DM = [
  TM
];
function NM(e, o) {
  return EM(), IM("svg", BM, DM);
}
var LM = /* @__PURE__ */ xM(AM, [["render", NM]]);
const _r = () => window.VRouter || Pg;
const MM = window.Vue.openBlock, OM = window.Vue.createElementBlock, PM = window.Vue.pushScopeId, RM = window.Vue.popScopeId, zw = window.Vue.createElementVNode;
var FM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const UM = {}, WM = (e) => (PM("data-v-2263be39"), e = e(), RM(), e), qM = { class: "spinner-container" }, HM = /* @__PURE__ */ WM(() => /* @__PURE__ */ zw("svg", {
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
], -1)), zM = [
  HM
];
function YM(e, o) {
  return MM(), OM("div", qM, zM);
}
var ns = /* @__PURE__ */ FM(UM, [["render", YM], ["__scopeId", "data-v-2263be39"]]);
const GM = window.Vue.defineComponent, hc = window.Vue.unref, jM = window.Vue.createVNode, ZM = window.Vue.createElementVNode, KM = window.Vue.withCtx, JM = window.Vue.openBlock, XM = window.Vue.createBlock, QM = window.Vue.pushScopeId, e3 = window.Vue.popScopeId, t3 = (e) => (QM("data-v-fba500de"), e = e(), e3(), e), n3 = /* @__PURE__ */ t3(() => /* @__PURE__ */ ZM("span", null, "New Situation", -1)), r3 = window.Vue.markRaw, o3 = /* @__PURE__ */ GM({
  __name: "NewSituationBtn",
  setup(e) {
    const o = _r(), r = r3({
      Add: hl
    }), s = () => {
      o.push({
        name: "addSituation"
      });
    };
    return (a, u) => (JM(), XM(hc(se), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: KM(() => [
        jM(hc(Z), {
          icon: hc(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        n3
      ]),
      _: 1
    }));
  }
});
const H_ = /* @__PURE__ */ ue(o3, [["__scopeId", "data-v-fba500de"]]), i3 = "/whoami", s3 = async () => {
  try {
    const e = await pt.get(i3);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, a3 = window.Pinia.defineStore, l3 = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, Uo = a3("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null,
    claudeConfig: null,
    claudeUsage: null
  }),
  actions: {
    async getUserRole() {
      const e = await s3();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await jI();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o, r) {
      const s = {
        ...l3,
        ...r,
        distanceMeasureName: o ? Ge.HELLINGER_OPTION : Ge.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return o || (s.hellingerW = null, s.hellingerBias = null), await ZI(s) ? (this.engineInfo = s, !0) : !1;
    },
    async getClaudeConfig() {
      const e = await KI();
      return e && (this.claudeConfig = e), e;
    },
    async setClaudeConfig(e) {
      const o = await JI(e);
      return o ? (this.claudeConfig = o, !0) : !1;
    },
    async getClaudeUsage(e = 30) {
      const o = await XI(e);
      return o && (this.claudeUsage = o), o;
    }
  }
}), u3 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", c3 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", d3 = window.Vue.defineComponent, ca = window.Vue.unref, Yw = window.Vue.createElementVNode, pc = window.Vue.openBlock, wc = window.Vue.createElementBlock, f3 = window.Vue.createCommentVNode, h3 = window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const p3 = {
  key: 0,
  class: "info-engine"
}, w3 = ["src"], v3 = /* @__PURE__ */ h3(" ENGINE "), m3 = {
  key: 0,
  class: "type"
}, _3 = {
  key: 1,
  class: "type"
}, g3 = window.Vue.watch, $3 = window.Vue.ref, y3 = /* @__PURE__ */ d3({
  __name: "ConfigurationInfo",
  setup(e) {
    var u;
    const o = _r(), r = Uo(), s = () => {
      o.push({
        name: "settings"
      });
    }, a = $3(
      ((u = r.engineInfo) == null ? void 0 : u.engineName) == Ge.ENGINE_DBSCAN
    );
    return g3(
      () => r.engineInfo,
      () => {
        var c;
        a.value = ((c = r.engineInfo) == null ? void 0 : c.engineName) == Ge.ENGINE_DBSCAN;
      }
    ), (c, f) => ca(r).engineInfo && ca(r).engineInfo.engineName ? (pc(), wc("div", p3, [
      Yw("img", {
        src: a.value ? ca(c3) : ca(u3),
        class: "icon-type"
      }, null, 8, w3),
      Yw("div", {
        class: "engine",
        onClick: s
      }, [
        v3,
        a.value ? (pc(), wc("div", m3, "CLUSTERING")) : (pc(), wc("div", _3, "DEEP LEARNING"))
      ])
    ])) : f3("", !0);
  }
});
const V3 = /* @__PURE__ */ ue(y3, [["__scopeId", "data-v-9a6c1414"]]);
const b3 = {}, C3 = window.Vue.openBlock, S3 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const E3 = { class: "empty" };
function I3(e, o) {
  return C3(), S3("div", E3, "No results found.");
}
const ei = /* @__PURE__ */ ue(b3, [["render", I3], ["__scopeId", "data-v-725433ac"]]), k3 = window.Vue.defineComponent, $n = window.Vue.createElementVNode, ki = window.Vue.unref, Nr = window.Vue.createVNode, x3 = window.Vue.withCtx, da = window.Vue.toDisplayString, Pn = window.Vue.openBlock, Lr = window.Vue.createElementBlock, Gw = window.Vue.createCommentVNode, jw = window.Vue.createBlock, A3 = window.Vue.renderList, B3 = window.Vue.Fragment, T3 = window.Vue.pushScopeId, D3 = window.Vue.popScopeId, z_ = (e) => (T3("data-v-2675e2f8"), e = e(), D3(), e), N3 = { class: "list-main" }, L3 = { class: "header" }, M3 = /* @__PURE__ */ z_(() => /* @__PURE__ */ $n("h2", null, "Situation List", -1)), O3 = { class: "link-btns" }, P3 = /* @__PURE__ */ z_(() => /* @__PURE__ */ $n("span", null, "View Unassociated Alarms", -1)), R3 = { class: "content" }, F3 = { class: "left-filters" }, U3 = { class: "container" }, W3 = { class: "autocomplete" }, q3 = { key: 0 }, H3 = { key: 1 }, z3 = { key: 0 }, Y3 = { class: "situation-list" }, G3 = {
  key: 0,
  class: "footer-pager"
}, j3 = window.Vue.reactive, fa = window.Vue.ref, Z3 = window.Vue.watch, K3 = window.Vue.markRaw, J3 = /* @__PURE__ */ k3({
  __name: "SituationList",
  setup(e) {
    const o = K3({
      Add: hl,
      View: SM,
      Settings: LM
    }), r = _r(), s = pn(), a = Uo();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = j3({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = fa(!0), w = fa(0), v = fa(1), _ = fa(0), $ = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    Z3(
      () => s.situations,
      () => {
        f.value = !1, $(), M(s.situations);
      }
    );
    const y = (S) => {
      w.value = S, c.situations = c.allSituations[w.value];
    }, k = (S) => {
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
      _.value = S.length, c.allSituations = $e.exports.chunk(S, u);
      const T = S.map((B) => B.id);
      s.filteredSituations = T, w.value = 0, c.situations = c.allSituations[0], v.value = c.allSituations.length;
    }, L = (S) => {
      S.length ? M(S) : c.situations = [];
    };
    return (S, T) => {
      var B;
      return Pn(), Lr("div", N3, [
        $n("div", L3, [
          M3,
          $n("div", O3, [
            Nr(ki(se), {
              class: "view-situation-btn",
              onClick: T[0] || (T[0] = () => D())
            }, {
              default: x3(() => [
                Nr(ki(Z), {
                  icon: ki(o).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                P3
              ]),
              _: 1
            }),
            Nr(H_),
            Nr(V3)
          ])
        ]),
        $n("div", R3, [
          $n("div", F3, [
            Nr(Qo, {
              list: ki(s).situations,
              onFilteredList: L,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          $n("div", U3, [
            $n("div", W3, [
              c.situations && c.situations.length ? (Pn(), Lr("div", q3, " Result: " + da((B = c.situations) == null ? void 0 : B.length) + " of " + da(_.value), 1)) : Gw("", !0)
            ]),
            f.value ? (Pn(), jw(ki(ns), {
              key: 0,
              class: "spinner"
            })) : (Pn(), Lr("div", H3, [
              c.situations && c.situations.length ? (Pn(), Lr("div", z3, [
                $n("div", Y3, [
                  (Pn(!0), Lr(B3, null, A3(c.situations, (O) => (Pn(), Lr("div", {
                    class: "card",
                    key: O.id
                  }, [
                    Nr(p_, {
                      onClick: () => k(O.id),
                      "situation-info": O
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                _.value > u ? (Pn(), Lr("div", G3, [
                  $n("div", null, "Page: " + da(w.value + 1) + " of " + da(v.value), 1),
                  Nr(px, {
                    onGoToPage: y,
                    currentPage: w.value,
                    totalPages: v.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : Gw("", !0)
              ])) : (Pn(), jw(ei, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const X3 = /* @__PURE__ */ ue(J3, [["__scopeId", "data-v-2675e2f8"]]);
const ha = window.Vue.ref, Q3 = window.Vue.inject, eO = window.Vue.computed, tO = window.Vue.onMounted, Y_ = {
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
}, G_ = (e) => {
  const o = ha(!1), r = ha(), s = ha(e.controls), a = ha(e.id), u = () => {
    r.value && r.value.focus();
  }, c = Q3("registerTab");
  tO(() => {
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
  const f = eO(() => ({
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
}, Zw = window.Vue.ref, nO = window.Vue.toRef, rO = window.Vue.watch, Kw = window.Vue.provide, j_ = {
  prop: "modelValue",
  event: "update:modelValue"
}, Z_ = {
  "update:modelValue": (e) => !0
}, K_ = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, J_ = (e, o) => {
  const r = nO(e, "modelValue"), s = Zw(e.modelValue), a = Zw([]);
  rO(r, (D) => {
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
    let O = B !== -1 ? B : s.value;
    const I = [ee.RIGHT], R = [ee.LEFT], P = [ee.ENTER, ee.SPACE];
    e.vertical && (I.push(ee.DOWN), R.push(ee.UP)), I.indexOf(L) > -1 ? (O++, O >= T.length && (O = 0), S(D), f(a.value.indexOf(T[O]))) : R.indexOf(L) > -1 && (O--, O < 0 && (O = T.length - 1), S(D), f(a.value.indexOf(T[O]))), P.indexOf(L) > -1 && w(O);
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
  Kw("registerTab", (D) => {
    const M = D.index;
    M > -1 && (a.value[M] = { ...a.value[M], tab: D }, a.value = [...a.value], $());
  }), Kw("registerPanel", (D) => {
    const M = D.index;
    M > -1 && (a.value[M] = {
      ...a.value[M],
      panel: D
    }, a.value = [...a.value], $());
  });
  const $ = () => {
    a.value.forEach(({ tab: D, panel: M }, L) => {
      if (M && D) {
        const S = D.id || le("tab"), T = D.controls || le("panel");
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
}, pa = window.Vue.ref, oO = window.Vue.inject, iO = window.Vue.computed, sO = window.Vue.onMounted, X_ = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, Q_ = (e) => {
  const o = pa(!1), r = pa(), s = pa(e.tab), a = pa(e.id), u = oO("registerPanel");
  sO(() => {
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
  const c = iO(() => ({
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
}, kd = window.Vue.defineComponent, aO = window.Vue.resolveComponent, xd = window.Vue.openBlock, Ad = window.Vue.createElementBlock, Ki = window.Vue.createElementVNode, eg = window.Vue.mergeProps, za = window.Vue.renderSlot, lO = window.Vue.createVNode, uO = window.Vue.normalizeStyle, cO = window.Vue.toHandlers, dO = window.Vue.withDirectives, fO = window.Vue.normalizeProps, hO = window.Vue.guardReactiveProps, pO = window.Vue.vShow;
var Bd = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const wO = Y_, vO = kd({
  props: wO,
  setup(e) {
    return G_(e);
  },
  components: {
    FeatherRipple: wr
  }
}), mO = { role: "presentation" }, _O = { class: "tab-text" };
function gO(e, o, r, s, a, u) {
  const c = aO("FeatherRipple");
  return xd(), Ad("li", mO, [
    Ki("button", eg(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      Ki("span", _O, [
        za(e.$slots, "default", {}, void 0, !0)
      ]),
      lO(c)
    ], 16)
  ]);
}
var vc = /* @__PURE__ */ Bd(vO, [["render", gO], ["__scopeId", "data-v-e6bb52b6"]]);
const $O = K_, yO = Z_, VO = kd({
  model: j_,
  emits: yO,
  props: $O,
  setup(e, o) {
    return J_(e, o);
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
}), bO = { class: "feather-tab-container" }, CO = { class: "tab-panels" };
function SO(e, o, r, s, a, u) {
  return xd(), Ad("div", bO, [
    Ki("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: uO({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    Ki("ul", eg(e.attrs, cO(e.listeners)), [
      za(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Ki("div", CO, [
      za(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var EO = /* @__PURE__ */ Bd(VO, [["render", SO], ["__scopeId", "data-v-27adffb9"]]);
const IO = X_, kO = kd({
  props: IO,
  setup(e) {
    return Q_(e);
  }
});
function xO(e, o, r, s, a, u) {
  return dO((xd(), Ad("div", fO(hO(e.attrs)), [
    za(e.$slots, "default")
  ], 16)), [
    [pO, e.selected]
  ]);
}
var mc = /* @__PURE__ */ Bd(kO, [["render", xO]]);
const AO = window.Vue.defineComponent, BO = window.Vue.toDisplayString, TO = window.Vue.normalizeClass, DO = window.Vue.openBlock, NO = window.Vue.createElementBlock, LO = window.Vue.createCommentVNode, MO = /* @__PURE__ */ AO({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (DO(), NO("span", {
      key: 0,
      class: TO(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, BO(o.severity), 3)) : LO("", !0);
  }
});
const tg = /* @__PURE__ */ ue(MO, [["__scopeId", "data-v-83c2cdce"]]), OO = window.Vue.defineComponent, Jw = window.Vue.toDisplayString, Xw = window.Vue.createElementVNode, PO = window.Vue.openBlock, RO = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const FO = { class: "box" }, UO = { class: "label" }, WO = { class: "date" }, qO = /* @__PURE__ */ OO({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (PO(), RO("div", FO, [
      Xw("div", UO, Jw(o.label), 1),
      Xw("div", WO, Jw(o.info), 1)
    ]));
  }
});
const _c = /* @__PURE__ */ ue(qO, [["__scopeId", "data-v-b4afa751"]]), HO = window.Vue.defineComponent, zO = window.Vue.unref, YO = window.Vue.renderList, GO = window.Vue.Fragment, gc = window.Vue.openBlock, $c = window.Vue.createElementBlock, jO = window.Vue.toDisplayString, ZO = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const KO = { class: "alarms-list" }, JO = /* @__PURE__ */ HO({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (gc(), $c("div", KO, [
      (gc(!0), $c(GO, null, YO(zO($e.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (gc(), $c("div", {
        class: ZO(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, jO(a.length), 3))), 128))
    ]));
  }
});
const XO = /* @__PURE__ */ ue(JO, [["__scopeId", "data-v-52d63440"]]), QO = window.Vue.openBlock, e4 = window.Vue.createElementBlock, t4 = window.Vue.createElementVNode;
var n4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const r4 = {}, o4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, i4 = /* @__PURE__ */ t4("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), s4 = [
  i4
];
function a4(e, o) {
  return QO(), e4("svg", o4, s4);
}
var l4 = /* @__PURE__ */ n4(r4, [["render", a4]]);
const u4 = window.Vue.openBlock, c4 = window.Vue.createElementBlock, d4 = window.Vue.createStaticVNode;
var f4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const h4 = {}, p4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, w4 = /* @__PURE__ */ d4('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), v4 = [
  w4
];
function m4(e, o) {
  return u4(), c4("svg", p4, v4);
}
var Ya = /* @__PURE__ */ f4(h4, [["render", m4]]);
const _4 = window.Vue.defineComponent, an = window.Vue.unref, yc = window.Vue.createVNode, Td = window.Vue.createElementVNode, Vc = window.Vue.withCtx, wa = window.Vue.openBlock, bc = window.Vue.createBlock, Cc = window.Vue.createCommentVNode, g4 = window.Vue.normalizeClass, $4 = window.Vue.createElementBlock, y4 = window.Vue.pushScopeId, V4 = window.Vue.popScopeId, Dd = (e) => (y4("data-v-e073070b"), e = e(), V4(), e), b4 = /* @__PURE__ */ Dd(() => /* @__PURE__ */ Td("span", null, "Acknowledge", -1)), C4 = /* @__PURE__ */ Dd(() => /* @__PURE__ */ Td("span", null, "Escalate", -1)), S4 = /* @__PURE__ */ Dd(() => /* @__PURE__ */ Td("span", null, "Clear", -1)), E4 = /* @__PURE__ */ _4({
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
      await UE(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await f_(
        o.situationId,
        Ge.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await Xm(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (wa(), $4("div", {
      class: g4(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? Cc("", !0) : (wa(), bc(an(se), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: Vc(() => [
          yc(an(Z), {
            icon: an(Ro),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          b4
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (wa(), bc(an(se), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(an(Ge).ESCALATE))
      }, {
        default: Vc(() => [
          yc(an(Z), {
            icon: an(l4),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          C4
        ]),
        _: 1
      })) : Cc("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (wa(), bc(an(se), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(an(Ge).CLEAR))
      }, {
        default: Vc(() => [
          yc(an(Z), {
            icon: an(Ya),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          S4
        ]),
        _: 1
      })) : Cc("", !0)
    ], 2));
  }
});
const ng = /* @__PURE__ */ ue(E4, [["__scopeId", "data-v-e073070b"]]);
var I4 = Object.defineProperty, k4 = Object.defineProperties, x4 = Object.getOwnPropertyDescriptors, Qw = Object.getOwnPropertySymbols, A4 = Object.prototype.hasOwnProperty, B4 = Object.prototype.propertyIsEnumerable, ev = (e, o, r) => o in e ? I4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, sd = (e, o) => {
  for (var r in o || (o = {}))
    A4.call(o, r) && ev(e, r, o[r]);
  if (Qw)
    for (var r of Qw(o))
      B4.call(o, r) && ev(e, r, o[r]);
  return e;
}, rg = (e, o) => k4(e, x4(o));
const og = window.Vue.defineComponent, T4 = window.Vue.inject, D4 = window.Vue.resolveComponent, Sc = window.Vue.openBlock, tv = window.Vue.createElementBlock, Bo = window.Vue.createElementVNode, N4 = window.Vue.createBlock, nv = window.Vue.createCommentVNode, L4 = window.Vue.renderSlot, M4 = window.Vue.pushScopeId, O4 = window.Vue.popScopeId, Ec = window.Vue.toRef, va = window.Vue.computed, P4 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var R4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const F4 = {
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
}, U4 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, W4 = og({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: U4,
  props: F4,
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
      return this.label && this.label.length ? void 0 : le("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : le("checkbox-label");
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
    FeatherRipple: wr
  }
}), q4 = (e) => (M4("data-v-a7af27e2"), e = e(), O4(), e), H4 = { class: "layout-container" }, z4 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], Y4 = { class: "checkbox hover focus" }, G4 = /* @__PURE__ */ q4(() => /* @__PURE__ */ Bo("div", { class: "box" }, [
  /* @__PURE__ */ Bo("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Bo("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Bo("div", { class: "indeterminate" })
], -1)), j4 = ["id", "for"];
function Z4(e, o, r, s, a, u) {
  const c = D4("feather-ripple");
  return Sc(), tv("div", H4, [
    Bo("div", {
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
      Bo("div", Y4, [
        G4,
        e.disabled ? nv("", !0) : (Sc(), N4(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? nv("", !0) : (Sc(), tv("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        L4(e.$slots, "default", {}, void 0, !0)
      ], 8, j4))
    ], 40, z4)
  ]);
}
var Wo = /* @__PURE__ */ R4(W4, [["render", Z4], ["__scopeId", "data-v-a7af27e2"]]);
const K4 = rg(sd({}, Ko), {
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
og({
  props: K4,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    Jo(e);
    const r = Ec(e, "error"), s = va(() => le("feather-checkbox-group")), a = va(() => le("feather-input-description")), u = va(() => le("feather-input-label")), c = va(() => {
      const _ = JSON.parse(JSON.stringify(o.attrs));
      return _["aria-invalid"] || (_["aria-invalid"] = !!r.value), rg(sd({}, _), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = P4(s.value), { validate: w } = jo(f, Ec(e, "modelValue"), e.label, e.schema, Ec(e, "error"));
    return sd({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: w,
      registerCheckbox: (_) => {
        _ && f.value === s.value && (f.value = _);
      }
    }, Zo(o.attrs));
  },
  components: {
    InputSubText: Go
  }
});
const J4 = window.Vue.openBlock, X4 = window.Vue.createElementBlock, ig = window.Vue.createElementVNode;
var Q4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const eP = {}, tP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, nP = /* @__PURE__ */ ig("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), rP = /* @__PURE__ */ ig("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), oP = [
  nP,
  rP
];
function iP(e, o) {
  return J4(), X4("svg", tP, oP);
}
var sP = /* @__PURE__ */ Q4(eP, [["render", iP]]);
var aP = Object.defineProperty, lP = Object.defineProperties, uP = Object.getOwnPropertyDescriptors, rv = Object.getOwnPropertySymbols, cP = Object.prototype.hasOwnProperty, dP = Object.prototype.propertyIsEnumerable, ov = (e, o, r) => o in e ? aP(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, To = (e, o) => {
  for (var r in o || (o = {}))
    cP.call(o, r) && ov(e, r, o[r]);
  if (rv)
    for (var r of rv(o))
      dP.call(o, r) && ov(e, r, o[r]);
  return e;
}, sg = (e, o) => lP(e, uP(o));
const fP = window.Vue.defineComponent, Ic = window.Vue.toRef, hP = window.Vue.computed, iv = window.Vue.resolveComponent, sv = window.Vue.openBlock, av = window.Vue.createElementBlock, lv = window.Vue.mergeProps, uv = window.Vue.createVNode, pP = window.Vue.normalizeClass, cv = window.Vue.withCtx, wP = window.Vue.createElementVNode, vP = window.Vue.toDisplayString, mP = window.Vue.createCommentVNode;
var _P = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const gP = sg(To(To({}, ol), Ko), {
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
}), $P = {
  "update:modelValue": (e) => !0
}, yP = fP({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: $P,
  props: gP,
  setup(e, o) {
    Jo(e), il(e);
    const r = Ic(e, "id"), s = hP(() => r.value ? r.value : le("feather-textarea-label")), { validate: a } = jo(s, Ic(e, "modelValue"), e.label, e.schema, Ic(e, "error"));
    return To({
      inputId: s,
      incomingId: r,
      validate: a
    }, Zo(o.attrs));
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
      return le("feather-textarea-description");
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
      const e = To({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), sg(To(To({}, e), this.listeners), {
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
    InputSubText: Go,
    InputWrapper: rl
  }
}), VP = ["maxlength"], bP = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function CP(e, o, r, s, a, u) {
  const c = iv("InputWrapper"), f = iv("InputSubText");
  return sv(), av("div", lv(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    uv(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: pP(["feather-textarea-content", e.contentCls])
    }, {
      default: cv(() => [
        wP("textarea", lv(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, VP)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    uv(f, { id: e.descriptionId }, {
      right: cv(() => [
        e.maxlength ? (sv(), av("div", bP, vP(e.charCount), 1)) : mP("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var ad = /* @__PURE__ */ _P(yP, [["render", CP], ["__scopeId", "data-v-0648df5c"]]);
const SP = window.Pinia.defineStore, pl = SP("appStore", {
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
}), EP = window.Vue.defineComponent, dv = window.Vue.toDisplayString, xi = window.Vue.createElementVNode, Mr = window.Vue.unref, _o = window.Vue.openBlock, fv = window.Vue.createBlock, Ai = window.Vue.createCommentVNode, hv = window.Vue.createVNode, ma = window.Vue.createElementBlock, IP = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const kP = { class: "row" }, xP = { class: "label" }, AP = { class: "action-icons" }, BP = { class: "icon-btn" }, TP = {
  key: 0,
  class: "icon-btn"
}, DP = {
  key: 1,
  class: "icon-btn"
}, NP = {
  key: 0,
  class: "text"
}, LP = window.Vue.watch, pv = window.Vue.ref, MP = /* @__PURE__ */ EP({
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
    const o = e, r = pl(), s = pv(!1), a = pv((w = o.memo) == null ? void 0 : w.body);
    LP(o, () => {
      var v;
      a.value = (v = o.memo) == null ? void 0 : v.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await jE(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await GE(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (v, _) => (_o(), ma("div", {
      class: IP([o.boxType === "small" ? "box-small" : "box"])
    }, [
      xi("div", kP, [
        xi("div", xP, dv(e.label), 1),
        xi("div", AP, [
          xi("div", BP, [
            s.value ? Ai("", !0) : (_o(), fv(Mr(Z), {
              key: 0,
              icon: Mr(sP),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (_o(), ma("div", TP, [
            hv(Mr(Z), {
              icon: Mr(Ro),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Ai("", !0),
          a.value && a.value != "" || s.value ? (_o(), ma("div", DP, [
            hv(Mr(Z), {
              icon: Mr(zo),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : Ai("", !0)
        ])
      ]),
      xi("div", null, [
        !s.value && a.value != null ? (_o(), ma("div", NP, dv(a.value), 1)) : Ai("", !0),
        s.value ? (_o(), fv(Mr(ad), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": _[0] || (_[0] = ($) => a.value = $),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Ai("", !0)
      ])
    ], 2));
  }
});
const Ga = /* @__PURE__ */ ue(MP, [["__scopeId", "data-v-3f44e250"]]), OP = window.Vue.defineComponent, Or = window.Vue.unref, go = window.Vue.createVNode, Bi = window.Vue.toDisplayString, dn = window.Vue.createElementVNode, wv = window.Vue.openBlock, vv = window.Vue.createElementBlock, mv = window.Vue.createCommentVNode, kc = window.Vue.createTextVNode, PP = window.Vue.pushScopeId, RP = window.Vue.popScopeId, Nd = (e) => (PP("data-v-02d1e7f0"), e = e(), RP(), e), FP = {
  key: 0,
  class: "card"
}, UP = { class: "row" }, WP = {
  key: 0,
  class: "ack"
}, qP = /* @__PURE__ */ Nd(() => /* @__PURE__ */ dn("strong", null, " Duration: ", -1)), HP = ["innerHTML"], zP = /* @__PURE__ */ Nd(() => /* @__PURE__ */ dn("strong", null, "First Event", -1)), YP = /* @__PURE__ */ Nd(() => /* @__PURE__ */ dn("strong", null, "Last Event", -1)), GP = { class: "section memo-boxes" }, _v = window.Vue.ref, jP = window.Vue.watch, ZP = /* @__PURE__ */ OP({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, s = _v(!1), a = _v(r.alarm), u = new Date().getTime();
    jP(r, () => {
      a.value = r.alarm, s.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (w) => {
      const v = await Qm(w);
      v && (a.value = v);
    };
    return (w, v) => {
      var _, $, y, k, D;
      return a.value ? (wv(), vv("div", FP, [
        dn("div", null, [
          dn("div", UP, [
            go(Or(Wo), {
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
            }, Bi(a.value.nodeLabel) + " - " + Bi(a.value.id), 1),
            go(tg, {
              severity: (_ = a.value) == null ? void 0 : _.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (wv(), vv("div", WP, [
              go(Or(Z), {
                icon: Or(Ro),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : mv("", !0)
          ]),
          dn("div", null, [
            qP,
            kc(" " + Bi(Or(el)(Or(u), new Date(a.value.firstEventTime))), 1)
          ]),
          dn("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, HP),
          dn("div", null, [
            zP,
            kc(" - " + Bi(Or(Cn)(a.value.firstEventTime)), 1)
          ]),
          dn("div", null, [
            YP,
            kc(" - " + Bi(Or(Cn)(a.value.lastEventTime)), 1)
          ]),
          dn("div", GP, [
            go(Ga, {
              id: ($ = a.value) == null ? void 0 : $.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (y = a.value) == null ? void 0 : y.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            go(Ga, {
              id: (k = a.value) == null ? void 0 : k.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (D = a.value) == null ? void 0 : D.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        go(ng, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : mv("", !0);
    };
  }
});
const KP = /* @__PURE__ */ ue(ZP, [["__scopeId", "data-v-02d1e7f0"]]), JP = window.Vue.openBlock, XP = window.Vue.createElementBlock, ag = window.Vue.createElementVNode;
var QP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const eR = {}, tR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, nR = /* @__PURE__ */ ag("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), rR = /* @__PURE__ */ ag("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), oR = [
  nR,
  rR
];
function iR(e, o) {
  return JP(), XP("svg", tR, oR);
}
var ld = /* @__PURE__ */ QP(eR, [["render", iR]]);
const sR = window.Vue.watch, aR = window.Vue.ref, lR = window.Vue.onBeforeUnmount, lg = (e) => {
  const o = aR(!1), r = (s) => {
    s.keyCode === ee.ESCAPE && (s.preventDefault(), o.value = !o.value);
  };
  return sR(e, (s) => {
    s ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), lR(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, uR = window.Vue.watch, ug = (e) => {
  let o;
  uR(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, cg = window.Vue.watch, dg = window.Vue.onBeforeUnmount, fg = window.Vue.nextTick, cR = window.Vue.onMounted, hg = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, ja = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, pg = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  dg(() => ja(o, r)), cR(() => cg(e, (s) => {
    s ? fg(() => {
      o = hg(r);
    }) : ja(o, r);
  }, { immediate: !0 }));
}, dR = (e, o) => {
  let r;
  dg(() => ja(r, o.value ? o.value.offsetParent : !1)), cg([e, o], ([s, a]) => {
    s && a ? fg(() => {
      r = hg(a.offsetParent);
    }) : a && ja(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var fR = Object.defineProperty, gv = Object.getOwnPropertySymbols, hR = Object.prototype.hasOwnProperty, pR = Object.prototype.propertyIsEnumerable, $v = (e, o, r) => o in e ? fR(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, wR = (e, o) => {
  for (var r in o || (o = {}))
    hR.call(o, r) && $v(e, r, o[r]);
  if (gv)
    for (var r of gv(o))
      pR.call(o, r) && $v(e, r, o[r]);
  return e;
};
const Ld = window.Vue.defineComponent, Ji = window.Vue.ref, vR = window.Vue.nextTick, wg = window.Vue.openBlock, vg = window.Vue.createElementBlock, Md = window.Vue.createElementVNode, mR = window.Vue.renderSlot, _R = window.Vue.resolveComponent, gR = window.Vue.normalizeClass, $R = window.Vue.withModifiers, yR = window.Vue.createVNode, yv = window.Vue.toRef, Vv = window.Vue.computed, bv = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var mg = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const VR = {
  enable: {
    type: Boolean,
    required: !0
  }
}, bR = Ld({
  props: VR,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = Ji(), o = Ji(!1), r = (_, $) => {
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
          const k = _;
          return k.type !== "hidden" && k.type !== "file";
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
      $ && $.focus ? vR(() => {
        $.focus();
      }) : s(_);
    }, w = Ji();
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
}), CR = /* @__PURE__ */ Md("div", { tabindex: "0" }, null, -1), SR = {
  class: "focus-trap-content",
  ref: "content"
}, ER = /* @__PURE__ */ Md("div", { tabindex: "0" }, null, -1);
function IR(e, o, r, s, a, u) {
  return wg(), vg("div", null, [
    CR,
    Md("div", SR, [
      mR(e.$slots, "default")
    ], 512),
    ER
  ]);
}
var _g = /* @__PURE__ */ mg(bR, [["render", IR]]);
const kR = Ld({
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
    icon: () => zo
  },
  components: {
    FeatherIcon: Z
  }
}), xR = ["aria-label"];
function AR(e, o, r, s, a, u) {
  const c = _R("FeatherIcon");
  return wg(), vg("a", {
    href: "#",
    class: gR(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = $R((f) => e.$emit("close"), ["prevent"]))
  }, [
    yR(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, xR);
}
var gg = /* @__PURE__ */ mg(kR, [["render", AR], ["__scopeId", "data-v-fc0f3f00"]]);
const $g = {
  title: "REQUIRED",
  close: "Close Dialog"
}, BR = {
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
    default: () => $g,
    validator: (e) => !!e.title
  }
}, TR = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
Ld({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: TR,
  props: BR,
  setup(e, o) {
    const r = nl(yv(e, "labels"), $g), s = yv(e, "modelValue"), a = Ji(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = Vv(() => !!o.slots.footer), f = Vv(() => le("dialog-header"));
    e.relative ? dR(s, a) : pg(s), ug(s), bv(lg(s), () => {
      u();
    });
    const w = Ji(e.modelValue);
    return bv(w, (v) => {
      v ? o.emit("shown") : o.emit("hidden");
    }), wR({ close: u, hasFooter: c, headerId: f, element: a, shown: w }, r);
  },
  components: {
    FocusTrap: _g,
    DialogClose: gg
  }
});
var DR = Object.defineProperty, Cv = Object.getOwnPropertySymbols, NR = Object.prototype.hasOwnProperty, LR = Object.prototype.propertyIsEnumerable, Sv = (e, o, r) => o in e ? DR(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, wl = (e, o) => {
  for (var r in o || (o = {}))
    NR.call(o, r) && Sv(e, r, o[r]);
  if (Cv)
    for (var r of Cv(o))
      LR.call(o, r) && Sv(e, r, o[r]);
  return e;
};
const vl = window.Vue.defineComponent, Ev = window.Vue.toRef, Iv = window.Vue.watch, kv = window.Vue.ref, xv = window.Vue.resolveComponent, _a = window.Vue.openBlock, Av = window.Vue.createBlock, MR = window.Vue.Teleport, Bv = window.Vue.createElementBlock, xc = window.Vue.createVNode, Tv = window.Vue.Transition, Ac = window.Vue.withCtx, Dv = window.Vue.createCommentVNode, OR = window.Vue.withDirectives, PR = window.Vue.normalizeStyle, RR = window.Vue.normalizeClass, Nv = window.Vue.createElementVNode, FR = window.Vue.renderSlot, UR = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var WR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const yg = {
  title: "REQUIRED",
  close: "Close Dialog"
}, qR = {
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
    default: () => yg,
    validator: (e) => !!e.title
  }
}, HR = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, zR = vl({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: HR,
  props: qR,
  setup(e, o) {
    const r = nl(Ev(e, "labels"), yg), s = Ev(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    pg(s), ug(s), Iv(lg(s), () => {
      a();
    });
    const u = kv(), c = kv(!1);
    return Iv(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), wl({ close: a, shown: c, isShown: s, element: u }, r);
  },
  components: {
    DialogClose: gg,
    FocusTrap: _g
  }
}), YR = {
  key: 0,
  class: "drawer-container feather-styles"
}, GR = {
  key: 0,
  class: "greyedOut"
}, jR = ["aria-label"], ZR = { class: "slot" };
function KR(e, o, r, s, a, u) {
  const c = xv("dialog-close"), f = xv("focus-trap");
  return _a(), Av(MR, { to: "body" }, [
    e.modelValue ? (_a(), Bv("div", YR, [
      xc(Tv, { name: "greyOutShim" }, {
        default: Ac(() => [
          e.modelValue ? (_a(), Bv("div", GR)) : Dv("", !0)
        ]),
        _: 1
      }),
      xc(Tv, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (w) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (w) => e.shown = !1)
      }, {
        default: Ac(() => [
          OR((_a(), Av(f, {
            enable: e.modelValue,
            style: PR({ width: e.width }),
            key: "sect",
            class: RR(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: Ac(() => [
              Nv("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                Nv("div", ZR, [
                  FR(e.$slots, "default", {}, void 0, !0)
                ]),
                xc(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, jR)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [UR, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : Dv("", !0)
  ]);
}
var Vg = /* @__PURE__ */ WR(zR, [["render", KR], ["__scopeId", "data-v-0a36e1dc"]]);
const JR = wl({
  label: {
    type: String,
    required: !0
  }
}, Y_);
vl({
  name: "DrawerTab",
  props: JR,
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
    return G_(e);
  },
  components: {
    FeatherRipple: wr
  }
});
const XR = wl({}, K_), QR = Z_;
vl({
  emits: QR,
  model: j_,
  props: XR,
  setup(e, o) {
    return J_(e, o);
  }
});
const e8 = wl({
  header: {
    type: String
  }
}, X_);
vl({
  name: "DrawerTabContent",
  props: e8,
  setup(e) {
    return Q_(e);
  },
  directives: {
    MenuFocusLoop: fT
  }
});
const t8 = window.Vue.defineComponent, bg = window.Vue.createElementVNode, Lv = window.Vue.createVNode, n8 = window.Vue.renderList, r8 = window.Vue.Fragment, Ti = window.Vue.openBlock, Bc = window.Vue.createElementBlock, Mv = window.Vue.createBlock, o8 = window.Vue.unref, i8 = window.Vue.withCtx, s8 = window.Vue.pushScopeId, a8 = window.Vue.popScopeId, l8 = (e) => (s8("data-v-c7c65659"), e = e(), a8(), e), u8 = { class: "content" }, c8 = /* @__PURE__ */ l8(() => /* @__PURE__ */ bg("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), d8 = {
  key: 0,
  class: "situation-list"
}, Tc = window.Vue.ref, Ov = window.Vue.watch, f8 = /* @__PURE__ */ t8({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, s = pn(), a = Tc(r.visible), u = () => {
      let v = s.situations;
      r.situationId !== 0 && (v = s.situations.filter(
        (_) => _.id != r.situationId
      )), c.value = v, f.value = v;
    }, c = Tc(s.situations), f = Tc(s.situations);
    Ov(r, () => {
      a.value = r.visible, u();
    }), Ov(
      () => s.situations,
      () => {
        u();
      }
    );
    const w = (v) => {
      f.value = v;
    };
    return (v, _) => (Ti(), Mv(o8(Vg), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        _[0] || (_[0] = ($) => a.value = $),
        _[1] || (_[1] = ($) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: i8(() => [
        bg("div", u8, [
          c8,
          Lv(Qo, {
            list: c.value,
            isSituation: "",
            onFilteredList: w
          }, null, 8, ["list"]),
          f.value.length ? (Ti(), Bc("div", d8, [
            (Ti(!0), Bc(r8, null, n8(f.value, ($) => (Ti(), Bc("div", {
              class: "card",
              key: $.id
            }, [
              Lv(p_, {
                onClick: (y) => o("situation-selected", $.id),
                "situation-info": $,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Ti(), Mv(ei, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const Cg = /* @__PURE__ */ ue(f8, [["__scopeId", "data-v-c7c65659"]]), h8 = window.Vue.defineComponent, Pv = window.Vue.normalizeClass, xo = window.Vue.createElementVNode, ga = window.Vue.unref, p8 = window.Vue.createVNode, $a = window.Vue.toDisplayString, w8 = window.Vue.createTextVNode, v8 = window.Vue.openBlock, m8 = window.Vue.createElementBlock, _8 = window.Vue.pushScopeId, g8 = window.Vue.popScopeId, $8 = (e) => (_8("data-v-e1e9b696"), e = e(), g8(), e), y8 = { class: "alarmInfo" }, V8 = { class: "alarm-title" }, b8 = /* @__PURE__ */ $8(() => /* @__PURE__ */ xo("strong", null, " Duration: ", -1)), C8 = { class: "description" }, S8 = /* @__PURE__ */ h8({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, s = new Date().getTime();
    return (a, u) => (v8(), m8("div", {
      class: Pv(["alarm", { selected: r.selected }])
    }, [
      xo("div", y8, [
        xo("div", {
          class: Pv(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        p8(ga(Wo), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        xo("div", V8, $a(e.alarm.nodeLabel) + " - " + $a(e.alarm.id), 1)
      ]),
      xo("div", null, [
        b8,
        w8(" " + $a(ga(el)(ga(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      xo("div", C8, $a(ga(a_)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const Od = /* @__PURE__ */ ue(S8, [["__scopeId", "data-v-e1e9b696"]]), E8 = window.Vue.defineComponent, Da = window.Vue.createElementVNode, $o = window.Vue.unref, I8 = window.Vue.toDisplayString, Rv = window.Vue.withCtx, Dc = window.Vue.createVNode, k8 = window.Vue.renderList, x8 = window.Vue.Fragment, Di = window.Vue.openBlock, Nc = window.Vue.createElementBlock, Fv = window.Vue.createBlock, A8 = window.Vue.pushScopeId, B8 = window.Vue.popScopeId, T8 = (e) => (A8("data-v-4bc80d4b"), e = e(), B8(), e), D8 = { class: "content" }, N8 = { class: "header" }, L8 = /* @__PURE__ */ T8(() => /* @__PURE__ */ Da("h4", null, "ADD ALARMS", -1)), M8 = {
  key: 0,
  class: "alarms-list"
}, ya = window.Vue.ref, Uv = window.Vue.watch, O8 = /* @__PURE__ */ E8({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, s = pn(), a = ya(r.visible), u = ya([]), c = ya(["all"]), f = ya(s.unassignedAlarms);
    Uv(r, () => {
      a.value = r.visible, u.value = [], f.value = s.unassignedAlarms;
    }), Uv(
      () => s.unassignedAlarms,
      () => {
        _();
      }
    );
    const w = (y) => {
      $e.exports.includes(u.value, y) ? $e.exports.remove(u.value, (k) => k === y) : u.value.push(y);
    }, v = () => {
      o("alarms-selected", u.value);
    }, _ = () => {
      let y = s.unassignedAlarms;
      c.value.includes("all") || (y = y.filter(
        (k) => c.value.includes(k.severity)
      )), f.value = y;
    }, $ = (y) => {
      f.value = y;
    };
    return (y, k) => (Di(), Fv($o(Vg), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        k[0] || (k[0] = (D) => a.value = D),
        k[1] || (k[1] = (D) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: Rv(() => [
        Da("div", D8, [
          Da("div", N8, [
            L8,
            Dc($o(se), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: Rv(() => [
                Da("span", null, "Add " + I8($o(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          Dc(Qo, {
            list: $o(s).unassignedAlarms,
            onFilteredList: $
          }, null, 8, ["list"]),
          f.value.length ? (Di(), Nc("div", M8, [
            (Di(!0), Nc(x8, null, k8(f.value, (D) => (Di(), Nc("div", {
              class: "card",
              key: D.id
            }, [
              Dc(Od, {
                selected: $o($e.exports.includes)($o(u), D.id),
                alarm: D,
                onSelectedAlarm: w
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (Di(), Fv(ei, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const P8 = /* @__PURE__ */ ue(O8, [["__scopeId", "data-v-4bc80d4b"]]), R8 = window.Vue.openBlock, F8 = window.Vue.createElementBlock, Sg = window.Vue.createElementVNode;
var U8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const W8 = {}, q8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, H8 = /* @__PURE__ */ Sg("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), z8 = /* @__PURE__ */ Sg("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), Y8 = [
  H8,
  z8
];
function G8(e, o) {
  return R8(), F8("svg", q8, Y8);
}
var Wv = /* @__PURE__ */ U8(W8, [["render", G8]]);
const j8 = window.Vue.defineComponent, Lt = window.Vue.createElementVNode, tt = window.Vue.unref, dt = window.Vue.createVNode, Ni = window.Vue.withCtx, Z8 = window.Vue.renderList, qv = window.Vue.Fragment, Li = window.Vue.openBlock, Va = window.Vue.createElementBlock, K8 = window.Vue.createBlock, J8 = window.Vue.pushScopeId, X8 = window.Vue.popScopeId, ti = (e) => (J8("data-v-524b0835"), e = e(), X8(), e), Q8 = { class: "container" }, e5 = { class: "header" }, t5 = /* @__PURE__ */ ti(() => /* @__PURE__ */ Lt("div", { class: "title" }, "Alarms", -1)), n5 = /* @__PURE__ */ ti(() => /* @__PURE__ */ Lt("span", null, "Add Alarms", -1)), r5 = { class: "alarms-container" }, o5 = { class: "filters" }, i5 = { class: "list" }, s5 = { class: "row actions" }, a5 = /* @__PURE__ */ ti(() => /* @__PURE__ */ Lt("span", null, "Clear", -1)), l5 = /* @__PURE__ */ ti(() => /* @__PURE__ */ Lt("span", null, "Acknowledge", -1)), u5 = /* @__PURE__ */ ti(() => /* @__PURE__ */ Lt("span", null, "Move", -1)), c5 = /* @__PURE__ */ ti(() => /* @__PURE__ */ Lt("span", null, "Remove", -1)), d5 = { class: "section" }, f5 = {
  key: 0,
  class: "alarm-list"
}, ba = window.Vue.ref, h5 = window.Vue.watch, p5 = window.Vue.reactive, w5 = window.Vue.markRaw, v5 = /* @__PURE__ */ j8({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = w5({
      Add: hl,
      Delete: Wv,
      MarkComplete: Ya,
      CheckCircle: Ro,
      ExitToApp: ld
    }), s = pl(), a = pn(), u = ba(!1), c = ba(["all"]), f = ba(!1), w = ba(!1), v = p5({
      selectedAlarms: [],
      alarms: o.alarms
    });
    h5(o, () => {
      c.value = ["all"], v.alarms = o.alarms, v.selectedAlarms = [], u.value = !1;
    });
    const _ = (B) => {
      v.selectedAlarms.includes(B) ? $e.exports.remove(v.selectedAlarms, (O) => O == B) : v.selectedAlarms.push(B);
    }, $ = async (B) => {
      v.selectedAlarms.length ? (await WE(v.selectedAlarms, B), a.getSituation(o.situationId), v.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, y = () => v.selectedAlarms.length === o.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), k = async () => {
      y() && (await ew(
        o.situationId,
        v.selectedAlarms
      ) ? a.getSituation(o.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, D = async (B) => {
      y() && (await ew(
        o.situationId,
        v.selectedAlarms
      ) ? await M(B, v.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, M = async (B, O) => {
      O.length ? await h_(B, O) ? a.getSituation(B) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, L = async (B) => {
      await M(o.situationId, B), w.value = !1;
    }, S = () => {
      v.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, T = (B) => {
      v.alarms = B;
    };
    return (B, O) => (Li(), Va(qv, null, [
      Lt("div", Q8, [
        Lt("div", e5, [
          t5,
          dt(tt(se), {
            class: "add-alarms-btn",
            onClick: O[0] || (O[0] = (I) => w.value = !0)
          }, {
            default: Ni(() => [
              dt(tt(Z), {
                icon: tt(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              n5
            ]),
            _: 1
          })
        ]),
        Lt("div", r5, [
          Lt("div", o5, [
            dt(Qo, {
              list: o.alarms,
              onFilteredList: T,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Lt("div", i5, [
            Lt("div", s5, [
              dt(tt(Wo), {
                modelValue: u.value,
                "onUpdate:modelValue": O[1] || (O[1] = (I) => u.value = I),
                label: "selected"
              }, null, 8, ["modelValue"]),
              dt(tt(se), {
                onClick: O[2] || (O[2] = () => $("clear"))
              }, {
                default: Ni(() => [
                  dt(tt(Z), {
                    icon: tt(Ya),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  a5
                ]),
                _: 1
              }),
              dt(tt(se), {
                onClick: O[3] || (O[3] = () => $("ack"))
              }, {
                default: Ni(() => [
                  dt(tt(Z), {
                    icon: tt(Ro),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  l5
                ]),
                _: 1
              }),
              dt(tt(se), { onClick: S }, {
                default: Ni(() => [
                  dt(tt(Z), {
                    icon: tt(ld),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  u5
                ]),
                _: 1
              }),
              dt(tt(se), { onClick: k }, {
                default: Ni(() => [
                  dt(tt(Z), {
                    icon: tt(Wv),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  c5
                ]),
                _: 1
              })
            ]),
            Lt("div", d5, [
              v.alarms.length > 0 ? (Li(), Va("div", f5, [
                (Li(!0), Va(qv, null, Z8(v.alarms, (I) => (Li(), Va("div", {
                  key: I.id
                }, [
                  dt(KP, {
                    alarm: I,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: _
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (Li(), K8(ei, { key: 1 }))
            ])
          ])
        ])
      ]),
      dt(Cg, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: D,
        onDrawerClosed: O[4] || (O[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      dt(P8, {
        visible: w.value,
        onAlarmsSelected: L,
        onDrawerAlarmsClosed: O[5] || (O[5] = () => w.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const m5 = /* @__PURE__ */ ue(v5, [["__scopeId", "data-v-524b0835"]]), _5 = window.Vue.defineComponent, ln = window.Vue.createVNode, Gt = window.Vue.unref, Lc = window.Vue.normalizeClass, Ca = window.Vue.toDisplayString, Mi = window.Vue.openBlock, Oi = window.Vue.createElementBlock, Hv = window.Vue.createCommentVNode, g5 = window.Vue.withCtx, Kt = window.Vue.createElementVNode, $5 = window.Vue.Fragment, y5 = window.Vue.pushScopeId, V5 = window.Vue.popScopeId, b5 = (e) => (y5("data-v-eab7334d"), e = e(), V5(), e), C5 = { class: "section" }, S5 = { class: "action-section" }, E5 = { class: "btn-row" }, I5 = { key: 0 }, k5 = { key: 1 }, x5 = {
  key: 0,
  class: "situation-detail"
}, A5 = { class: "situation-info" }, B5 = { class: "id" }, T5 = ["innerHTML"], D5 = /* @__PURE__ */ b5(() => /* @__PURE__ */ Kt("p", null, null, -1)), N5 = { class: "boxes" }, L5 = { class: "parameters" }, M5 = { class: "section memo-boxes" }, O5 = { key: 0 }, zv = window.Vue.ref, P5 = window.Vue.watch, R5 = /* @__PURE__ */ _5({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = pl(), s = pn(), a = Ge.REJECTED, u = zv(o.situationInfo.status), c = zv(o.situationInfo);
    P5(o, () => {
      u.value = o.situationInfo.status || "", c.value = o.situationInfo;
    });
    const f = async (w) => {
      var _;
      await f_(
        (_ = o.situationInfo) == null ? void 0 : _.id,
        w.toLowerCase()
      ) ? (u.value = w, s.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (w, v) => {
      var _, $, y, k, D, M, L, S, T, B, O, I;
      return Mi(), Oi($5, null, [
        Kt("div", C5, [
          Kt("div", S5, [
            ln(ng, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Kt("div", E5, [
              ln(Gt(se), {
                class: Lc(["btn", { rejected: u.value == Gt(a) }]),
                "data-test": "btn-reject",
                onClick: v[0] || (v[0] = (R) => f(Gt(a)))
              }, {
                default: g5(() => [
                  ln(Gt(Z), {
                    icon: Gt(e_),
                    "aria-hidden": "true",
                    class: Lc(["icon reject", { rejected: u.value == Gt(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == Gt(a) ? (Mi(), Oi("span", I5, Ca(Gt(a)), 1)) : (Mi(), Oi("span", k5, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (Mi(), Oi("div", x5, [
            Kt("div", {
              class: Lc(["severity-line", [`${($ = (_ = c.value) == null ? void 0 : _.severity) == null ? void 0 : $.toLowerCase()}-bg dark`]])
            }, null, 2),
            Kt("div", A5, [
              Kt("div", B5, [
                Kt("div", null, " Situation - " + Ca((y = c.value) == null ? void 0 : y.id) + " - " + Ca(c.value.alarms.length) + " alarm(s) affects " + Ca(Gt($e.exports.size)(Gt($e.exports.groupBy)((k = c.value) == null ? void 0 : k.alarms, "nodeId"))) + " node(s) ", 1),
                ln(tg, {
                  severity: (D = c.value) == null ? void 0 : D.severity
                }, null, 8, ["severity"])
              ]),
              Kt("span", {
                innerHTML: c.value.description
              }, null, 8, T5),
              D5,
              Kt("div", N5, [
                ln(_c, {
                  label: "First Event",
                  info: Gt(Cn)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                ln(_c, {
                  label: "Last Event",
                  info: Gt(Cn)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                ln(_c, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Kt("div", L5, [
              ln(XO, {
                alarms: (M = c.value) == null ? void 0 : M.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Hv("", !0),
          Kt("div", M5, [
            ln(Ga, {
              id: (L = c.value) == null ? void 0 : L.id,
              situationId: (S = c.value) == null ? void 0 : S.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (T = c.value) == null ? void 0 : T.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            ln(Ga, {
              id: (B = c.value) == null ? void 0 : B.id,
              situationId: (O = c.value) == null ? void 0 : O.id,
              label: "Journal Memo",
              type: "journal",
              memo: (I = c.value) == null ? void 0 : I.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (Mi(), Oi("div", O5, [
          ln(m5, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Hv("", !0)
      ], 64);
    };
  }
});
const F5 = /* @__PURE__ */ ue(R5, [["__scopeId", "data-v-eab7334d"]]);
var U5 = Object.defineProperty, W5 = Object.defineProperties, q5 = Object.getOwnPropertyDescriptors, Yv = Object.getOwnPropertySymbols, H5 = Object.prototype.hasOwnProperty, z5 = Object.prototype.propertyIsEnumerable, Gv = (e, o, r) => o in e ? U5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ud = (e, o) => {
  for (var r in o || (o = {}))
    H5.call(o, r) && Gv(e, r, o[r]);
  if (Yv)
    for (var r of Yv(o))
      z5.call(o, r) && Gv(e, r, o[r]);
  return e;
}, Y5 = (e, o) => W5(e, q5(o));
const Eg = window.Vue.defineComponent, Hr = window.Vue.resolveComponent, Na = window.Vue.openBlock, jv = window.Vue.createBlock, La = window.Vue.mergeProps, zr = window.Vue.withCtx, Ig = window.Vue.createElementBlock, G5 = window.Vue.Fragment, j5 = window.Vue.renderList, Z5 = window.Vue.createTextVNode, K5 = window.Vue.toDisplayString, J5 = window.Vue.computed, Zv = window.Vue.toRef, Pi = window.Vue.createVNode, Kv = window.Vue.toHandlers, X5 = window.Vue.renderSlot, Q5 = window.Vue.normalizeClass, e6 = window.Vue.createElementVNode;
var kg = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const t6 = Eg({
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
      return le("feather-select-active");
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
        ts(o, this.$refs.list.$el);
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
    FeatherList: Sd,
    FeatherListItem: ss
  }
});
function n6(e, o, r, s, a, u) {
  const c = Hr("FeatherListItem"), f = Hr("FeatherList");
  return Na(), jv(f, La(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: zr(() => [
      (Na(!0), Ig(G5, null, j5(e.options, (w, v) => (Na(), jv(c, {
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
          Z5(K5(w[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var r6 = /* @__PURE__ */ kg(t6, [["render", n6], ["__scopeId", "data-v-eae820da"]]);
const o6 = Y5(ud(ud({}, ol), Ko), {
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
}), i6 = {
  "update:modelValue": (e) => !0
}, s6 = Eg({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: i6,
  props: o6,
  setup(e, o) {
    Jo(e), il(e);
    const r = J5(() => le("feather-select-input")), { validate: s } = jo(r, Zv(e, "modelValue"), e.label, e.schema, Zv(e, "error"));
    return ud({
      inputId: r,
      validate: s
    }, Zo(o.attrs));
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
      return le("feather-select-description");
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
    InputWrapper: rl,
    InputSubText: Go,
    FeatherMenu: S_,
    List: r6,
    FeatherIcon: Z
  }
});
function a6(e, o, r, s, a, u) {
  const c = Hr("FeatherIcon"), f = Hr("InputWrapper"), w = Hr("List"), v = Hr("FeatherMenu"), _ = Hr("InputSubText");
  return Na(), Ig("div", La(e.inherittedAttrs, { class: "feather-select-container" }), [
    Pi(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: zr(($) => [
        Pi(f, La({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, $.attrs, Kv($.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: zr(() => [
            X5(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: zr(() => [
            Pi(c, {
              class: Q5(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: zr(() => [
            e6("input", La(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Kv(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: zr(() => [
        Pi(w, {
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
    Pi(_, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var l6 = /* @__PURE__ */ kg(s6, [["render", a6], ["__scopeId", "data-v-ecb32d90"]]);
const u6 = window.Vue.openBlock, c6 = window.Vue.createElementBlock, xg = window.Vue.createElementVNode;
var d6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const f6 = {}, h6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, p6 = /* @__PURE__ */ xg("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), w6 = /* @__PURE__ */ xg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), v6 = [
  p6,
  w6
];
function m6(e, o) {
  return u6(), c6("svg", h6, v6);
}
var _6 = /* @__PURE__ */ d6(f6, [["render", m6]]);
const Ma = window.Vue.openBlock, cd = window.Vue.createElementBlock, Ag = window.Vue.createElementVNode, g6 = window.Vue.defineComponent, Pr = window.Vue.ref, $6 = window.Vue.provide, Jv = window.Vue.computed, y6 = window.Vue.onUnmounted, Xv = window.Vue.toRef, V6 = window.Vue.resolveComponent, b6 = window.Vue.Fragment, C6 = window.Vue.createBlock, S6 = window.Vue.Teleport, Qv = window.Vue.createVNode, E6 = window.Vue.Transition, I6 = window.Vue.withCtx, k6 = window.Vue.normalizeClass, x6 = window.Vue.normalizeStyle, A6 = window.Vue.toDisplayString, B6 = window.Vue.createCommentVNode, T6 = window.Vue.renderSlot, Mc = window.Vue.nextTick;
var Bg = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const D6 = {}, N6 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, L6 = /* @__PURE__ */ Ag("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), M6 = [
  L6
];
function O6(e, o) {
  return Ma(), cd("svg", N6, M6);
}
var P6 = /* @__PURE__ */ Bg(D6, [["render", O6]]), Je = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Je || {}), Un = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Un || {});
const R6 = (e, o, r, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + s && c.push(Je.top), a >= o.height + s && c.push(Je.bottom);
  const f = [];
  u >= o.width + s && f.push(Je.right), e.left >= o.width + s && f.push(Je.left);
  let w = [...f, ...c];
  return (r === Je.top || r === Je.bottom) && (w = [...c, ...f]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, F6 = (e, o, r, s, a = 28) => {
  if (e === Je.left || e === Je.right)
    return Un.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], w = u, v = c + o.width / 2, _ = r.width - a, $ = r.width / 2;
  return w >= $ && v >= $ && f.push(Un.center), v >= _ && f.push(Un.left), w >= _ && f.push(Un.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, U6 = {
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
}, W6 = g6({
  props: U6,
  setup(e) {
    const o = Pr(!1), r = Pr(!1), s = le("feather-tooltip-trigger"), a = le("feather-tooltip"), u = "data-feather-tooltip";
    $6("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      jr(c), o.value || (c = Gr(M, e.enterDelay));
    }, w = () => {
      jr(c), c = Gr(L, e.exitDelay);
    }, v = (ce) => {
      ce.keyCode === ee.ESCAPE && (ce.preventDefault(), L(!0));
    }, _ = Jv(() => ({
      [u]: s,
      "aria-describedby": a
    })), $ = {
      mouseenter: f,
      mouseleave: w,
      focus: f,
      blur: w,
      keydown: v
    }, y = Pr(document), k = C_(y, () => L(!0));
    y6(() => L(!0));
    const D = () => document.getElementById(a), M = () => {
      r.value = !1, o.value = !0, Mc(() => {
        const ce = D();
        he(ce), o.value = !1, Mc(() => {
          r.value = !0, o.value = !0, k.value = !0;
        });
      });
    }, L = (ce = !1) => {
      R.value = "", I.value = "", P.value = "", H.value = "", o.value = !1, ce && (r.value = !1), k.value = !1;
    }, S = Xv(e, "placement"), T = Xv(e, "pointerAlignment"), B = 8, O = 24, I = Pr(""), R = Pr(""), P = Pr(""), H = Pr(""), we = Jv(() => H.value ? "p-" + H.value : !1), he = (ce) => {
      const Se = document.querySelector(`[${u}=${s}]`);
      if (!Se) {
        console.log("trigger not found");
        return;
      }
      Mc(() => {
        const Ie = Se.getBoundingClientRect(), Ae = ce.getBoundingClientRect(), ve = R6(Ie, Ae, S.value, B), Ne = F6(ve, Ie, Ae, T.value, O);
        P.value = Ne.toString(), H.value = ve.toString();
        let Le = 0, qe = 0;
        if ((ve === Je.left || ve === Je.right) && (Le = Ie.top + Ie.height / 2 - Ae.height / 2, ve === Je.left && (qe = Ie.left - Ae.width - B), ve === Je.right && (qe = Ie.right)), ve === Je.top || ve === Je.bottom) {
          Le = Ie.top - Ae.height - B, ve === Je.bottom && (Le = Ie.bottom);
          const Hn = Ie.left + Ie.width / 2;
          switch (Ne) {
            case Un.center:
              qe = Hn - Ae.width / 2;
              break;
            case Un.left:
              qe = Hn - O;
              break;
            case Un.right:
              qe = Hn - Ae.width + O;
              break;
          }
        }
        I.value = Le.toString() + "px", R.value = qe.toString() + "px";
      });
    };
    return {
      attrs: _,
      listeners: $,
      show: o,
      animate: r,
      alignmentClass: P,
      placementClass: we,
      top: I,
      left: R,
      tooltipID: a
    };
  },
  components: {
    Pointer: P6
  }
}), q6 = ["id"];
function H6(e, o, r, s, a, u) {
  const c = V6("Pointer");
  return Ma(), cd(b6, null, [
    (Ma(), C6(S6, { to: "body" }, [
      Qv(E6, { css: e.animate }, {
        default: I6(() => [
          e.show ? (Ma(), cd("div", {
            key: 0,
            class: k6(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: x6({ left: e.left, top: e.top })
          }, [
            Ag("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, A6(e.title), 9, q6),
            Qv(c, { class: "tooltip-pointer" })
          ], 6)) : B6("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    T6(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var em = /* @__PURE__ */ Bg(W6, [["render", H6], ["__scopeId", "data-v-3da6b22e"]]);
const z6 = window.Vue.defineComponent, Oc = window.Vue.normalizeStyle, Pc = window.Vue.createElementVNode, Ri = window.Vue.unref, tm = window.Vue.toHandlers, nm = window.Vue.mergeProps, rm = window.Vue.withCtx, om = window.Vue.createVNode, Y6 = window.Vue.renderList, G6 = window.Vue.Fragment, Fi = window.Vue.openBlock, Ui = window.Vue.createElementBlock, im = window.Vue.normalizeClass, sm = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const j6 = { class: "row" }, Z6 = /* @__PURE__ */ z6({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = new Date().getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => (Fi(), Ui("div", j6, [
      Pc("div", {
        class: "line-gray",
        style: Oc({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      om(Ri(em), {
        title: Ri(Cn)(e.alarm.firstEventTime)
      }, {
        default: rm(({ attrs: f, on: w }) => [
          Pc("div", nm({ class: "circle" }, f, tm(w), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Fi(!0), Ui(G6, null, Y6(o.events, (f, w) => (Fi(), Ui("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[w + 1] ? (Fi(), Ui("div", {
          key: 0,
          class: im(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: Oc({
            width: s(f.createTime, o.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : sm("", !0),
        om(Ri(em), {
          title: Ri(Cn)(e.alarm.firstEventTime)
        }, {
          default: rm(({ attrs: v, on: _ }) => [
            o.events[w + 1] ? (Fi(), Ui("div", nm({ key: 0 }, v, tm(_), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : sm("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      Pc("div", {
        class: im(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: Oc({
          width: s(e.events[e.events.length - 1].createTime, Ri(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const K6 = /* @__PURE__ */ ue(Z6, [["__scopeId", "data-v-3341d12d"]]), J6 = window.Vue.openBlock, X6 = window.Vue.createElementBlock, Tg = window.Vue.createElementVNode;
var Q6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const e7 = {}, t7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, n7 = /* @__PURE__ */ Tg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), r7 = /* @__PURE__ */ Tg("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), o7 = [
  n7,
  r7
];
function i7(e, o) {
  return J6(), X6("svg", t7, o7);
}
var s7 = /* @__PURE__ */ Q6(e7, [["render", i7]]);
const a7 = window.Vue.defineComponent, dd = window.Vue.createElementVNode, l7 = window.Vue.renderList, am = window.Vue.Fragment, Rc = window.Vue.openBlock, Fc = window.Vue.createElementBlock, u7 = window.Vue.normalizeClass, c7 = window.Vue.unref, lm = window.Vue.toDisplayString, d7 = window.Vue.pushScopeId, f7 = window.Vue.popScopeId, h7 = (e) => (d7("data-v-2e087f7b"), e = e(), f7(), e), p7 = /* @__PURE__ */ h7(() => /* @__PURE__ */ dd("strong", null, "Events:", -1)), w7 = /* @__PURE__ */ a7({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (Rc(), Fc(am, null, [
      p7,
      (Rc(!0), Fc(am, null, l7(o.events, (a) => (Rc(), Fc("div", {
        class: "event-description",
        key: a.id
      }, [
        dd("div", {
          class: u7(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        dd("div", null, lm(c7(Cn)(a.createTime)) + " - " + lm(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const v7 = /* @__PURE__ */ ue(w7, [["__scopeId", "data-v-2e087f7b"]]), m7 = window.Vue.defineComponent, _7 = window.Vue.normalizeClass, Nt = window.Vue.createElementVNode, yo = window.Vue.toDisplayString, $t = window.Vue.unref, Vo = window.Vue.createVNode, Dg = window.Vue.createTextVNode, g7 = window.Vue.renderList, um = window.Vue.Fragment, Rn = window.Vue.openBlock, Rr = window.Vue.createElementBlock, cm = window.Vue.createBlock, Sa = window.Vue.createCommentVNode, $7 = window.Vue.normalizeStyle, y7 = window.Vue.pushScopeId, V7 = window.Vue.popScopeId, b7 = (e) => (y7("data-v-01717d0d"), e = e(), V7(), e), C7 = { class: "section detail" }, S7 = { class: "id" }, E7 = {
  key: 0,
  class: "section"
}, I7 = /* @__PURE__ */ b7(() => /* @__PURE__ */ Nt("div", { class: "id" }, "Alarms", -1)), k7 = { class: "action-btns" }, x7 = { class: "zoom" }, A7 = /* @__PURE__ */ Dg(" Zoom "), B7 = { class: "times" }, T7 = {
  key: 0,
  class: "timeline-container"
}, D7 = { class: "alarm-id" }, N7 = {
  key: 0,
  class: "panel"
}, ar = window.Vue.ref, L7 = window.Vue.watch, M7 = /* @__PURE__ */ m7({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var O, I;
    const o = e, r = pn(), s = ar(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = ar(a[0]), c = ar(o.width), f = ar(o.width), w = ar(new Date().getTime()), v = () => {
      var R, P;
      if (!o.situation.events) {
        const H = (P = (R = o.situation) == null ? void 0 : R.alarms) == null ? void 0 : P.map((we) => we.id);
        r.getEvents(o.situation.id, H);
      }
    };
    v();
    const _ = () => (w.value = new Date().getTime(), c.value / (Number(w.value) - Number(y.value))), $ = ar(o.situation.alarms), y = ar(
      ((I = $e.exports.minBy((O = o.situation) == null ? void 0 : O.alarms, "firstEventTime")) == null ? void 0 : I.firstEventTime) || new Date().getTime()
    ), k = ar(_());
    L7(o, () => {
      var R, P;
      y.value = ((P = $e.exports.minBy((R = o.situation) == null ? void 0 : R.alarms, "firstEventTime")) == null ? void 0 : P.firstEventTime) || new Date().getTime(), v(), c.value = f.value, k.value = _(), $.value = o.situation.alarms, u.value = a[0];
    });
    const D = (R) => {
      if ((R == null ? void 0 : R.id) === 1 && ($.value = o.situation.alarms), (R == null ? void 0 : R.id) === 2) {
        const P = $e.exports.groupBy($.value, "severity"), H = [
          ...P.CRITICAL || [],
          ...P.MAJOR || [],
          ...P.MINOR || [],
          ...P.WARNING || [],
          ...P.NORMAL || [],
          ...P.CLEARED || [],
          ...P.INDETERMINATE || []
        ];
        $.value = H.filter((we) => we);
      }
      if ((R == null ? void 0 : R.id) === 3) {
        const P = $e.exports.reverse(
          $e.exports.sortBy(
            o.situation.alarms,
            (H) => Number(H.lastEventTime) - Number(H.firstEventTime)
          )
        );
        $.value = P;
      }
    }, M = () => {
      c.value += 100, k.value = _();
    }, L = () => {
      c.value -= 100, k.value = _();
    }, S = () => {
      c.value = f.value, k.value = _();
    }, T = (R) => {
      s.value = R;
    }, B = () => {
      s.value = 0;
    };
    return (R, P) => {
      var H, we;
      return Rn(), Rr(um, null, [
        Nt("div", C7, [
          Nt("div", {
            class: _7(["severity-line", [`${(we = (H = o.situation) == null ? void 0 : H.severity) == null ? void 0 : we.toLowerCase()}-bg dark`]])
          }, null, 2),
          Nt("div", null, [
            Nt("div", S7, "Situation " + yo(o.situation.id), 1),
            Nt("div", null, " Duration: " + yo($t(el)(w.value, new Date(y.value))), 1)
          ])
        ]),
        $.value && $.value.length > 0 ? (Rn(), Rr("div", E7, [
          I7,
          Nt("div", k7, [
            Vo($t(l6), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                P[0] || (P[0] = (he) => u.value = he),
                D
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            Nt("div", x7, [
              A7,
              Nt("div", null, [
                Vo($t(Z), {
                  icon: $t(_6),
                  class: "zoom-icon",
                  onClick: M
                }, null, 8, ["icon"]),
                Vo($t(Z), {
                  icon: $t(F_),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                Vo($t(Z), {
                  icon: $t(s7),
                  class: "zoom-icon",
                  onClick: L
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Rn(), Rr("div", {
            key: 0,
            class: "alarms",
            style: $7({
              width: f.value + 50 + "px"
            })
          }, [
            Nt("div", B7, [
              Nt("div", null, yo($t(Cn)(y.value)), 1),
              Nt("div", null, yo($t(Cn)(w.value)), 1)
            ]),
            e.situation.events ? (Rn(), Rr("div", T7, [
              (Rn(!0), Rr(um, null, g7($.value, (he) => (Rn(), Rr("div", {
                class: "timeline",
                key: he.id
              }, [
                Nt("div", D7, [
                  Dg(yo(he.nodeLabel) + " - " + yo(he.id) + " ", 1),
                  s.value === he.id ? (Rn(), cm($t(Z), {
                    key: 0,
                    icon: $t(cl),
                    class: "zoom-icon expand",
                    onClick: B
                  }, null, 8, ["icon"])) : (Rn(), cm($t(Z), {
                    key: 1,
                    icon: $t(v_),
                    class: "zoom-icon expand",
                    onClick: () => T(he.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                Vo(K6, {
                  alarm: he,
                  proportion: k.value,
                  "min-start": y.value,
                  events: o.situation.events[he.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === he.id ? (Rn(), Rr("div", N7, [
                  Vo(v7, {
                    events: o.situation.events[he.id]
                  }, null, 8, ["events"])
                ])) : Sa("", !0)
              ]))), 128))
            ])) : Sa("", !0)
          ], 4)) : Sa("", !0)
        ])) : Sa("", !0)
      ], 64);
    };
  }
});
const O7 = /* @__PURE__ */ ue(M7, [["__scopeId", "data-v-01717d0d"]]), P7 = window.Vue.defineComponent, fn = window.Vue.createElementVNode, En = window.Vue.createTextVNode, bo = window.Vue.unref, Ea = window.Vue.withCtx, Co = window.Vue.createVNode, nt = window.Vue.openBlock, rt = window.Vue.createElementBlock, dm = window.Vue.createCommentVNode, R7 = window.Vue.resolveComponent, So = window.Vue.toDisplayString, fm = window.Vue.renderList, hm = window.Vue.Fragment, F7 = window.Vue.pushScopeId, U7 = window.Vue.popScopeId, ml = (e) => (F7("data-v-013dd0e4"), e = e(), U7(), e), W7 = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, q7 = { class: "header" }, H7 = /* @__PURE__ */ ml(() => /* @__PURE__ */ fn("h3", null, "AI Suggestions", -1)), z7 = /* @__PURE__ */ En(" Refresh "), Y7 = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, G7 = /* @__PURE__ */ ml(() => /* @__PURE__ */ fn("span", null, "Loading\u2026", -1)), j7 = {
  key: 1,
  class: "state-row",
  "data-test": "ai-absent"
}, Z7 = /* @__PURE__ */ En(" No AI suggestions are available for this situation. The Claude integration may be disabled, or the analysis has not run yet \u2014 check the "), K7 = /* @__PURE__ */ En("account settings"), J7 = /* @__PURE__ */ En(" to enable it. "), X7 = {
  key: 2,
  class: "state-row",
  "data-test": "ai-pending"
}, Q7 = {
  key: 3,
  class: "state-row failed",
  "data-test": "ai-failed"
}, eF = { class: "failed-msg" }, tF = /* @__PURE__ */ En(" The last Claude request failed: "), nF = /* @__PURE__ */ En(" Retry "), rF = {
  key: 4,
  class: "state-row",
  "data-test": "ai-error"
}, oF = /* @__PURE__ */ En(" Could not load suggestions. Please retry. "), iF = /* @__PURE__ */ En("Retry"), sF = {
  key: 5,
  "data-test": "ai-ready"
}, aF = {
  key: 0,
  class: "meta"
}, lF = /* @__PURE__ */ En(" Generated by "), uF = { class: "section" }, cF = /* @__PURE__ */ ml(() => /* @__PURE__ */ fn("h4", null, "Probable root causes", -1)), dF = {
  key: 0,
  "data-test": "ai-root-causes"
}, fF = {
  key: 1,
  class: "empty"
}, hF = { class: "section" }, pF = /* @__PURE__ */ ml(() => /* @__PURE__ */ fn("h4", null, "Possible resolutions", -1)), wF = {
  key: 0,
  "data-test": "ai-resolutions"
}, vF = {
  key: 1,
  class: "empty"
}, mF = window.Vue.computed, _F = window.Vue.onBeforeUnmount, gF = window.Vue.onMounted, pm = window.Vue.ref, $F = /* @__PURE__ */ P7({
  __name: "AISuggestionsTab",
  props: {
    situationId: null
  },
  setup(e) {
    const o = e, r = pm("loading"), s = pm(null), a = 5e3, u = 5 * 60 * 1e3;
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
      const k = await d_(o.situationId);
      if (k === !1) {
        r.value = "error";
        return;
      }
      if (k === null) {
        r.value = "absent", s.value = null;
        return;
      }
      s.value = k, r.value = k.status;
    }, $ = async () => {
      r.value = "loading", w(), await _(), v();
    };
    gF(async () => {
      await _(), v();
    }), _F(() => w());
    const y = mF(() => {
      var k;
      return (k = s.value) != null && k.requestedAt ? new Date(s.value.requestedAt).toLocaleString() : "";
    });
    return (k, D) => {
      var L;
      const M = R7("router-link");
      return nt(), rt("div", W7, [
        fn("div", q7, [
          H7,
          Co(bo(se), {
            secondary: "",
            "data-test": "ai-refresh",
            onClick: $
          }, {
            default: Ea(() => [
              z7
            ]),
            _: 1
          })
        ]),
        r.value === "loading" ? (nt(), rt("div", Y7, [
          Co(bo(ns)),
          G7
        ])) : r.value === "absent" ? (nt(), rt("div", j7, [
          Z7,
          Co(M, { to: "/account" }, {
            default: Ea(() => [
              K7
            ]),
            _: 1
          }),
          J7
        ])) : r.value === "pending" ? (nt(), rt("div", X7, [
          Co(bo(ns)),
          fn("span", null, " Analyzing alarms with Claude\u2026 requested at " + So(bo(y)) + ". ", 1)
        ])) : r.value === "failed" ? (nt(), rt("div", Q7, [
          fn("div", eF, [
            tF,
            fn("code", null, So(((L = s.value) == null ? void 0 : L.error) || "unknown error"), 1)
          ]),
          Co(bo(se), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: $
          }, {
            default: Ea(() => [
              nF
            ]),
            _: 1
          })
        ])) : r.value === "error" ? (nt(), rt("div", rF, [
          oF,
          Co(bo(se), {
            secondary: "",
            onClick: $
          }, {
            default: Ea(() => [
              iF
            ]),
            _: 1
          })
        ])) : r.value === "ready" && s.value ? (nt(), rt("div", sF, [
          s.value.completedAt ? (nt(), rt("div", aF, [
            lF,
            fn("strong", null, So(s.value.model), 1),
            En(" at " + So(new Date(s.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : dm("", !0),
          fn("div", uF, [
            cF,
            s.value.rootCauses.length ? (nt(), rt("ol", dF, [
              (nt(!0), rt(hm, null, fm(s.value.rootCauses, (S, T) => (nt(), rt("li", {
                key: `cause-${T}`
              }, So(S), 1))), 128))
            ])) : (nt(), rt("div", fF, "No root causes returned."))
          ]),
          fn("div", hF, [
            pF,
            s.value.resolutions.length ? (nt(), rt("ol", wF, [
              (nt(!0), rt(hm, null, fm(s.value.resolutions, (S, T) => (nt(), rt("li", {
                key: `res-${T}`
              }, So(S), 1))), 128))
            ])) : (nt(), rt("div", vF, "No resolutions returned."))
          ])
        ])) : dm("", !0)
      ]);
    };
  }
});
const yF = /* @__PURE__ */ ue($F, [["__scopeId", "data-v-013dd0e4"]]), VF = window.Vue.openBlock, bF = window.Vue.createElementBlock, CF = window.Vue.createElementVNode;
var SF = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const EF = {}, IF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, kF = /* @__PURE__ */ CF("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), xF = [
  kF
];
function AF(e, o) {
  return VF(), bF("svg", IF, xF);
}
var Mo = /* @__PURE__ */ SF(EF, [["render", AF]]);
const Ng = window.Vue.defineComponent, Uc = window.Vue.ref, BF = window.Vue.toRef, Wc = window.Vue.inject, wm = window.Vue.watch, TF = window.Vue.nextTick, vm = window.Vue.openBlock, mm = window.Vue.createElementBlock, qc = window.Vue.createElementVNode, DF = window.Vue.normalizeClass, _m = window.Vue.renderSlot, gm = window.Vue.createCommentVNode, Hc = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var NF = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const LF = {
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
}, MF = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, OF = Ng({
  emits: MF,
  props: LF,
  setup(e, o) {
    const r = Uc(), s = Uc(!1), a = Uc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = BF(e, "modelValue"), f = Wc("queueSnackbar", !1), w = Wc("unqueueSnackbar", !1), v = Wc("nextSnackbar", () => {
    }), _ = (M, L) => {
      let S, T, B = L;
      const O = () => {
        !S || (jr(S), S = 0, B -= Date.now() - T);
      }, I = () => {
        S || (T = Date.now(), S = Gr(M, B));
      };
      return I(), { pause: O, resume: I };
    }, $ = () => {
      s.value = !1, o.emit("closed"), v && v();
    }, y = (M) => {
      M.keyCode === ee.ESCAPE && (a.value = !1);
    }, k = () => {
      r.value.pause();
    }, D = () => {
      a.value && r.value.resume();
    };
    return wm(c, (M) => {
      M ? TF(() => {
        f === !1 ? a.value = M : f(u, a);
      }) : w === !1 ? a.value = M : w(u);
    }, { immediate: !0 }), wm(a, (M) => {
      M ? (s.value = !0, r.value = _(() => {
        a.value = !1;
      }, e.timeout)) : (o.emit("update:modelValue", !1), k());
    }), {
      hideTimeout: r,
      contentShow: s,
      internalValue: a,
      id: u,
      incomingValue: c,
      closed: $,
      keyPressed: y,
      stopTimer: k,
      resumeTimer: D
    };
  }
}), PF = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, RF = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, FF = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, UF = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function WF(e, o, r, s, a, u) {
  return e.modelValue || e.contentShow ? (vm(), mm("div", PF, [
    qc("div", {
      class: DF(["feather-snackbar", {
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
      qc("div", RF, [
        e.contentShow ? (vm(), mm("div", FF, [
          _m(e.$slots, "default", {}, void 0, !0)
        ])) : gm("", !0)
      ]),
      qc("div", UF, [
        _m(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : gm("", !0);
}
var _l = /* @__PURE__ */ NF(OF, [["render", WF], ["__scopeId", "data-v-5cf64a62"]]);
const qF = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
Ng({
  props: qF,
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
    return Hc("queueSnackbar", s), Hc("unqueueSnackbar", a), Hc("nextSnackbar", u), {
      curr: e,
      queue: o,
      showSnackbar: r,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const HF = window.Vue.defineComponent, xe = window.Vue.unref, ot = window.Vue.createVNode, rs = window.Vue.createElementVNode, yt = window.Vue.withCtx, Fr = window.Vue.openBlock, zc = window.Vue.createBlock, $m = window.Vue.createCommentVNode, as = window.Vue.createTextVNode, Ia = window.Vue.createElementBlock, ym = window.Vue.toDisplayString, zF = window.Vue.pushScopeId, YF = window.Vue.popScopeId, Pd = (e) => (zF("data-v-a5b2d880"), e = e(), YF(), e), GF = { id: "cont" }, jF = { class: "btns-navigation" }, ZF = /* @__PURE__ */ Pd(() => /* @__PURE__ */ rs("span", null, "Situation List", -1)), KF = /* @__PURE__ */ Pd(() => /* @__PURE__ */ rs("span", null, "Show Previous Situation ", -1)), JF = /* @__PURE__ */ Pd(() => /* @__PURE__ */ rs("span", null, "Show Next Situation", -1)), XF = { key: 1 }, QF = {
  key: 0,
  class: "detail"
}, e9 = /* @__PURE__ */ as("Details"), t9 = /* @__PURE__ */ as("Metrics"), n9 = /* @__PURE__ */ as("AI Suggestions"), r9 = {
  key: 1,
  class: "noSituation"
}, o9 = /* @__PURE__ */ as("dismiss"), Ur = window.Vue.ref, Vm = window.Vue.watch, i9 = window.Vue.onMounted, s9 = window.VueRouter.useRoute, a9 = /* @__PURE__ */ HF({
  __name: "SituationDetail",
  setup(e) {
    const o = _r(), r = s9(), s = parseInt(r.params.id), a = Ur(s), u = pn(), c = pl(), f = Ur(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const w = Ur(), v = Ur(), _ = Ur(!0), $ = Ur(
      u.filteredSituations.findIndex((L) => L === a.value)
    ), y = Ur(!1);
    Vm(
      () => u.situationDetail,
      () => {
        w.value = u.situationDetail, _.value = !1, u.getUnassignedAlarms();
      }
    ), i9(() => {
      var S;
      const L = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      v.value = L - 90;
    });
    const k = () => {
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
    return (L, S) => (Fr(), Ia("div", GF, [
      rs("div", jF, [
        ot(xe(se), {
          primary: "",
          onClick: S[0] || (S[0] = () => k())
        }, {
          default: yt(() => [
            ot(xe(Z), {
              icon: xe(Mo),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            ZF
          ]),
          _: 1
        }),
        rs("div", null, [
          ot(xe(se), {
            disabled: !xe(u).filteredSituations[$.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => D(-1))
          }, {
            default: yt(() => [
              ot(xe(Z), {
                icon: xe(Mo),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              KF
            ]),
            _: 1
          }, 8, ["disabled"]),
          ot(xe(se), {
            disabled: !xe(u).filteredSituations[$.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => D(1))
          }, {
            default: yt(() => [
              JF,
              ot(xe(Z), {
                icon: xe(Mo),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _.value ? (Fr(), zc(xe(ns), {
        key: 0,
        class: "spinner"
      })) : (Fr(), Ia("div", XF, [
        w.value ? (Fr(), Ia("div", QF, [
          ot(xe(EO), { "onUpdate:modelValue": M }, {
            tabs: yt(() => [
              ot(xe(vc), null, {
                default: yt(() => [
                  e9
                ]),
                _: 1
              }),
              ot(xe(vc), null, {
                default: yt(() => [
                  t9
                ]),
                _: 1
              }),
              ot(xe(vc), { "data-test": "ai-suggestions-tab" }, {
                default: yt(() => [
                  n9
                ]),
                _: 1
              })
            ]),
            default: yt(() => [
              ot(xe(mc), { class: "panel" }, {
                default: yt(() => [
                  ot(F5, { "situation-info": w.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              ot(xe(mc), { class: "panel" }, {
                default: yt(() => [
                  v.value && f.value == 1 ? (Fr(), zc(O7, {
                    key: 0,
                    situation: w.value,
                    width: v.value
                  }, null, 8, ["situation", "width"])) : $m("", !0)
                ]),
                _: 1
              }),
              ot(xe(mc), { class: "panel" }, {
                default: yt(() => [
                  f.value == 2 ? (Fr(), zc(yF, {
                    key: 0,
                    "situation-id": w.value.id
                  }, null, 8, ["situation-id"])) : $m("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (Fr(), Ia("div", r9, " Error. The situation " + ym(xe(s)) + " does not exist. ", 1))
      ])),
      ot(xe(_l), {
        modelValue: y.value,
        "onUpdate:modelValue": S[4] || (S[4] = (T) => y.value = T),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: yt(() => [
          ot(xe(se), {
            onClick: S[3] || (S[3] = (T) => y.value = !1),
            text: ""
          }, {
            default: yt(() => [
              o9
            ]),
            _: 1
          })
        ]),
        default: yt(() => [
          as(ym(xe(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const l9 = /* @__PURE__ */ ue(a9, [["__scopeId", "data-v-a5b2d880"]]), u9 = window.Vue.defineComponent, Ke = window.Vue.unref, jt = window.Vue.createVNode, ht = window.Vue.createElementVNode, Eo = window.Vue.withCtx, Io = window.Vue.openBlock, Wi = window.Vue.createElementBlock, c9 = window.Vue.createCommentVNode, d9 = window.Vue.toDisplayString, Rd = window.Vue.createTextVNode, f9 = window.Vue.normalizeClass, h9 = window.Vue.renderList, p9 = window.Vue.Fragment, w9 = window.Vue.createBlock, v9 = window.Vue.pushScopeId, m9 = window.Vue.popScopeId, ls = (e) => (v9("data-v-1a57a9f3"), e = e(), m9(), e), _9 = { class: "container" }, g9 = /* @__PURE__ */ ls(() => /* @__PURE__ */ ht("span", null, "Situation List", -1)), $9 = /* @__PURE__ */ ls(() => /* @__PURE__ */ ht("h2", null, "New Situation", -1)), y9 = { class: "form" }, V9 = { class: "fields" }, b9 = {
  key: 0,
  class: "errorList"
}, C9 = { class: "footer" }, S9 = /* @__PURE__ */ ls(() => /* @__PURE__ */ ht("span", null, "Clear", -1)), E9 = /* @__PURE__ */ ls(() => /* @__PURE__ */ ht("span", null, "Add Situation", -1)), I9 = { class: "alarm-column" }, k9 = { class: "header-alarms" }, x9 = /* @__PURE__ */ ls(() => /* @__PURE__ */ ht("h3", null, "Add Unassociated Alarms", -1)), A9 = /* @__PURE__ */ Rd(" Total Alarms Added: "), B9 = { class: "total" }, T9 = { class: "list" }, D9 = { class: "filters" }, N9 = {
  key: 0,
  class: "alarms"
}, L9 = /* @__PURE__ */ Rd(" Error on creating new situation :( "), M9 = /* @__PURE__ */ Rd("dismiss"), lr = window.Vue.ref, O9 = window.Vue.watch, P9 = /* @__PURE__ */ u9({
  __name: "AddSituation",
  setup(e) {
    const o = _r(), r = pn(), s = lr(), a = lr(""), u = lr(), c = lr(""), f = lr([]), w = lr(!1), v = lr(), _ = lr(r.unassignedAlarms);
    _.value.length || r.getUnassignedAlarms(), O9(
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
      w.value = !1, $e.exports.includes(f.value, S) ? $e.exports.remove(f.value, (T) => T === S) : f.value.push(S);
    }, k = () => {
      const S = "This field should not be empty";
      let T = !0;
      return s.value || (a.value = S, T = !1), u.value || (c.value = S, T = !1), f.value.length < 2 && (w.value = !0, T = !1), T;
    }, D = async () => {
      if (k()) {
        const S = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: s.value
        };
        await QI(S) ? o.push({
          name: "situations"
        }) : v.value = !0;
      }
    }, M = () => {
      s.value = "", u.value = "", f.value = [], _.value = r.unassignedAlarms;
    }, L = (S) => {
      _.value = S;
    };
    return (S, T) => (Io(), Wi("div", _9, [
      jt(Ke(se), {
        primary: "",
        onClick: T[0] || (T[0] = () => $()),
        class: "back-btn"
      }, {
        default: Eo(() => [
          jt(Ke(Z), {
            icon: Ke(Mo),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          g9
        ]),
        _: 1
      }),
      $9,
      ht("div", y9, [
        ht("div", V9, [
          jt(Ke(ad), {
            modelValue: s.value,
            "onUpdate:modelValue": T[1] || (T[1] = (B) => s.value = B),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          jt(Ke(ad), {
            modelValue: u.value,
            "onUpdate:modelValue": T[2] || (T[2] = (B) => u.value = B),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          w.value ? (Io(), Wi("div", b9, " You must add at least 2 alarms. ")) : c9("", !0),
          ht("div", C9, [
            jt(Ke(se), {
              class: "btn",
              onClick: M
            }, {
              default: Eo(() => [
                jt(Ke(Z), {
                  icon: Ke(zo),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                S9
              ]),
              _: 1
            }),
            jt(Ke(se), {
              class: "btn-add",
              onClick: D
            }, {
              default: Eo(() => [
                jt(Ke(Z), {
                  icon: Ke(hl),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                E9
              ]),
              _: 1
            })
          ])
        ]),
        ht("div", I9, [
          ht("div", k9, [
            x9,
            ht("div", null, [
              ht("div", {
                class: f9(["totalAlarms", { errorList: w.value }])
              }, [
                A9,
                ht("span", B9, d9(Ke(f).length), 1)
              ], 2)
            ])
          ]),
          ht("div", T9, [
            ht("div", D9, [
              jt(Qo, {
                list: Ke(r).unassignedAlarms,
                onFilteredList: L,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            _.value.length ? (Io(), Wi("div", N9, [
              (Io(!0), Wi(p9, null, h9(_.value, (B) => (Io(), Wi("div", {
                key: B.id,
                class: "alarm-card"
              }, [
                jt(Od, {
                  selected: Ke($e.exports.includes)(Ke(f), B.id),
                  alarm: B,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Io(), w9(ei, { key: 1 }))
          ])
        ])
      ]),
      jt(Ke(_l), {
        modelValue: v.value,
        "onUpdate:modelValue": T[4] || (T[4] = (B) => v.value = B),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: Eo(() => [
          jt(Ke(se), {
            onClick: T[3] || (T[3] = (B) => v.value = !1),
            text: ""
          }, {
            default: Eo(() => [
              M9
            ]),
            _: 1
          })
        ]),
        default: Eo(() => [
          L9
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const R9 = /* @__PURE__ */ ue(P9, [["__scopeId", "data-v-1a57a9f3"]]), F9 = window.Vue.defineComponent, U9 = window.Vue.createElementVNode, W9 = window.Vue.createTextVNode, q9 = window.Vue.unref, H9 = window.Vue.withCtx, z9 = window.Vue.createVNode, Y9 = window.Vue.Fragment, G9 = window.Vue.openBlock, j9 = window.Vue.createElementBlock, Z9 = window.Vue.pushScopeId, K9 = window.Vue.popScopeId, J9 = (e) => (Z9("data-v-bcb7dcc6"), e = e(), K9(), e), X9 = /* @__PURE__ */ J9(() => /* @__PURE__ */ U9("div", { class: "main" }, "Something bad is happening...", -1)), Q9 = /* @__PURE__ */ W9(" Reload "), eU = /* @__PURE__ */ F9({
  __name: "ErrorPage",
  setup(e) {
    const o = _r(), r = () => {
      o.push({ name: "situations" });
    };
    return (s, a) => (G9(), j9(Y9, null, [
      X9,
      z9(q9(se), {
        primary: "",
        onClick: r
      }, {
        default: H9(() => [
          Q9
        ]),
        _: 1
      })
    ], 64));
  }
});
const tU = /* @__PURE__ */ ue(eU, [["__scopeId", "data-v-bcb7dcc6"]]), nU = window.Vue.defineComponent, ft = window.Vue.unref, un = window.Vue.createVNode, fr = window.Vue.createElementVNode, qi = window.Vue.withCtx, Wr = window.Vue.openBlock, bm = window.Vue.createBlock, rU = window.Vue.renderList, oU = window.Vue.Fragment, Hi = window.Vue.createElementBlock, iU = window.Vue.toDisplayString, Lg = window.Vue.createTextVNode, sU = window.Vue.pushScopeId, aU = window.Vue.popScopeId, Fd = (e) => (sU("data-v-6078e4ad"), e = e(), aU(), e), lU = { class: "container" }, uU = { class: "nav-btns" }, cU = /* @__PURE__ */ Fd(() => /* @__PURE__ */ fr("span", null, "Situation List", -1)), dU = /* @__PURE__ */ Fd(() => /* @__PURE__ */ fr("h2", null, "List Unassociated Alarms", -1)), fU = { class: "content" }, hU = { class: "filters" }, pU = { class: "list" }, wU = { class: "action-btns" }, vU = /* @__PURE__ */ Fd(() => /* @__PURE__ */ fr("span", null, "Move", -1)), mU = { key: 1 }, _U = {
  key: 0,
  class: "alarms"
}, gU = /* @__PURE__ */ Lg("dismiss"), ur = window.Vue.ref, $U = window.Vue.watch, yU = window.Vue.markRaw, VU = /* @__PURE__ */ nU({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = yU({
      ArrowBack: Mo,
      ExitToApp: ld
    }), r = _r(), s = pn();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = ur([]), u = ur([]), c = ur(!1), f = ur(!1), w = ur(""), v = ur(!1), _ = ur(!1), $ = ur(!0);
    $U(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, $.value = !1;
      }
    );
    const y = (T) => {
      $e.exports.includes(u.value, T) ? $e.exports.remove(u.value, (B) => B === T) : u.value.push(T);
    }, k = () => {
      c.value ? u.value = a.value.map((T) => T.id) : u.value = [];
    }, D = async (T) => {
      await h_(T, u.value) ? s.getUnassignedAlarms() : (v.value = !0, _.value = !0, w.value = "Error on moving the alarms :("), f.value = !1;
    }, M = () => {
      r.push({
        name: "situations"
      });
    }, L = () => {
      u.value.length ? f.value = !0 : (v.value = !0, _.value = !1, w.value = "You need to choose at least one alarm!");
    }, S = (T) => {
      a.value = T;
    };
    return (T, B) => (Wr(), Hi("div", lU, [
      fr("div", uU, [
        un(ft(se), {
          primary: "",
          onClick: B[0] || (B[0] = () => M())
        }, {
          default: qi(() => [
            un(ft(Z), {
              icon: ft(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            cU
          ]),
          _: 1
        }),
        un(H_)
      ]),
      dU,
      fr("div", fU, [
        fr("div", hU, [
          un(Qo, {
            list: ft(s).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        fr("div", pU, [
          fr("div", wU, [
            un(ft(Wo), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                B[1] || (B[1] = (O) => c.value = O),
                k
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            un(ft(se), { onClick: L }, {
              default: qi(() => [
                un(ft(Z), {
                  icon: ft(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                vU
              ]),
              _: 1
            })
          ]),
          $.value ? (Wr(), bm(ft(ns), {
            key: 0,
            class: "spinner"
          })) : (Wr(), Hi("div", mU, [
            ft(a).length ? (Wr(), Hi("div", _U, [
              (Wr(!0), Hi(oU, null, rU(ft(a), (O) => (Wr(), Hi("div", {
                key: O.id,
                class: "card"
              }, [
                un(Od, {
                  selected: ft($e.exports.includes)(ft(u), O.id),
                  alarm: O,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Wr(), bm(ei, { key: 1 }))
          ]))
        ])
      ]),
      un(Cg, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: D,
        onDrawerClosed: B[2] || (B[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      un(ft(_l), {
        modelValue: v.value,
        "onUpdate:modelValue": B[4] || (B[4] = (O) => v.value = O),
        right: "",
        error: _.value,
        timeout: 6e3
      }, {
        button: qi(() => [
          un(ft(se), {
            onClick: B[3] || (B[3] = (O) => v.value = !1),
            text: ""
          }, {
            default: qi(() => [
              gU
            ]),
            _: 1
          })
        ]),
        default: qi(() => [
          Lg(iU(w.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const bU = /* @__PURE__ */ ue(VU, [["__scopeId", "data-v-6078e4ad"]]), CU = window.Vue.defineComponent, Yc = window.Vue.unref, SU = window.Vue.createVNode, EU = window.Vue.createElementVNode, IU = window.Vue.withCtx, kU = window.Vue.openBlock, xU = window.Vue.createBlock, AU = window.Vue.pushScopeId, BU = window.Vue.popScopeId, TU = (e) => (AU("data-v-17251e76"), e = e(), BU(), e), DU = /* @__PURE__ */ TU(() => /* @__PURE__ */ EU("span", null, "Situation List", -1)), NU = window.Vue.markRaw, LU = /* @__PURE__ */ CU({
  __name: "SituationListBtn",
  setup(e) {
    const o = _r(), r = NU({
      ArrowBack: Mo
    }), s = () => {
      o.push({
        name: "situations"
      });
    };
    return (a, u) => (kU(), xU(Yc(se), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: IU(() => [
        SU(Yc(Z), {
          icon: Yc(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        DU
      ]),
      _: 1
    }));
  }
});
const MU = /* @__PURE__ */ ue(LU, [["__scopeId", "data-v-17251e76"]]);
var OU = Object.defineProperty, PU = Object.defineProperties, RU = Object.getOwnPropertyDescriptors, Cm = Object.getOwnPropertySymbols, FU = Object.prototype.hasOwnProperty, UU = Object.prototype.propertyIsEnumerable, Sm = (e, o, r) => o in e ? OU(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Do = (e, o) => {
  for (var r in o || (o = {}))
    FU.call(o, r) && Sm(e, r, o[r]);
  if (Cm)
    for (var r of Cm(o))
      UU.call(o, r) && Sm(e, r, o[r]);
  return e;
}, WU = (e, o) => PU(e, RU(o));
const qU = window.Vue.defineComponent, Em = window.Vue.toRef, HU = window.Vue.computed, zU = window.Vue.ref, Im = window.Vue.resolveComponent, km = window.Vue.openBlock, xm = window.Vue.createElementBlock, Am = window.Vue.mergeProps, Bm = window.Vue.createVNode, YU = window.Vue.normalizeClass, ka = window.Vue.withCtx, Tm = window.Vue.renderSlot, GU = window.Vue.createElementVNode, jU = window.Vue.toHandlers, ZU = window.Vue.toDisplayString, KU = window.Vue.createCommentVNode, JU = Do(Do({
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
}, ol), Ko), XU = {
  "update:modelValue": (e) => !0
};
var QU = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const eW = qU({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: XU,
  props: JU,
  setup(e, o) {
    Jo(e), il(e);
    const r = Em(e, "id"), s = HU(() => r.value ? r.value : le("feather-input-label")), a = zU(), { validate: u } = jo(s, a, e.label, e.schema, Em(e, "error"));
    return Do({
      inputId: s,
      internalValue: a,
      validate: u
    }, Zo(o.attrs));
  },
  data() {
    return {
      focused: !1
    };
  },
  computed: {
    descriptionId() {
      return le("feather-input-description");
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
      const e = Do({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), WU(Do(Do({}, e), this.listeners), {
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
    InputSubText: Go,
    InputWrapper: rl
  }
}), tW = ["maxlength"], nW = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function rW(e, o, r, s, a, u) {
  const c = Im("InputWrapper"), f = Im("InputSubText");
  return km(), xm("div", Am(e.inherittedAttrs, { class: "feather-input-container" }), [
    Bm(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: YU(["feather-input-content", e.contentCls])
    }, {
      pre: ka(() => [
        Tm(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: ka(() => [
        Tm(e.$slots, "post", {}, void 0, !0)
      ]),
      default: ka(() => [
        GU("input", Am(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, jU(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, tW)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Bm(f, { id: e.descriptionId }, {
      right: ka(() => [
        e.maxlength ? (km(), xm("div", nW, ZU(e.charCount), 1)) : KU("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var ko = /* @__PURE__ */ QU(eW, [["render", rW], ["__scopeId", "data-v-bf37b0d6"]]);
const oW = window.Vue.openBlock, iW = window.Vue.createElementBlock, Ud = window.Vue.createElementVNode;
var sW = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const aW = {}, lW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, uW = /* @__PURE__ */ Ud("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), cW = /* @__PURE__ */ Ud("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), dW = /* @__PURE__ */ Ud("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), fW = [
  uW,
  cW,
  dW
];
function hW(e, o) {
  return oW(), iW("svg", lW, fW);
}
var pW = /* @__PURE__ */ sW(aW, [["render", hW]]);
const wW = window.Vue.openBlock, vW = window.Vue.createElementBlock, Mg = window.Vue.createElementVNode;
var mW = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const _W = {}, gW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $W = /* @__PURE__ */ Mg("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), yW = /* @__PURE__ */ Mg("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), VW = [
  $W,
  yW
];
function bW(e, o) {
  return wW(), vW("svg", gW, VW);
}
var CW = /* @__PURE__ */ mW(_W, [["render", bW]]);
const SW = window.Vue.defineComponent, ze = window.Vue.createVNode, W = window.Vue.createElementVNode, j = window.Vue.unref, at = window.Vue.createTextVNode, Zt = window.Vue.withCtx, cn = window.Vue.openBlock, cr = window.Vue.createElementBlock, gn = window.Vue.createCommentVNode, Gc = window.Vue.createBlock, Fe = window.Vue.toDisplayString, Dm = window.Vue.Fragment, EW = window.Vue.pushScopeId, IW = window.Vue.popScopeId, Oe = (e) => (EW("data-v-6150467b"), e = e(), IW(), e), kW = { class: "container" }, xW = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("h3", { "data-test": "page-title" }, "Correlation Engine Configuration Page", -1)), AW = { class: "section" }, BW = { class: "title" }, TW = /* @__PURE__ */ at(" Choose the correlation engine that ALEC will use (see "), DW = ["href"], NW = /* @__PURE__ */ at(" for more information): "), LW = /* @__PURE__ */ at("Clustering"), MW = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("div", { class: "hellinger" }, [
  /* @__PURE__ */ W("strong", null, "Hellinger distance")
], -1)), OW = /* @__PURE__ */ at(" LLM Based "), PW = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), RW = {
  class: "section",
  "data-test": "claude-section"
}, FW = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("div", { class: "title" }, "Claude Root Cause Analysis", -1)), UW = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("div", { class: "claude-help" }, " When a new situation is created, ALEC will ask Claude to suggest up to 3 probable root causes and 3 possible resolutions based on the clustered alarms. Suggestions appear on the situation detail page. The API key is stored on the OpenNMS server and applies to all users of this plugin. ", -1)), WW = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("strong", null, "Claude Enabled Root Cause Analysis", -1)), qW = {
  key: 0,
  class: "caption",
  "data-test": "claude-no-key-hint"
}, HW = { class: "claude-key-row" }, zW = /* @__PURE__ */ at(" Clear Key "), YW = {
  key: 1,
  class: "caption",
  "data-test": "claude-cleared-hint"
}, GW = {
  key: 2,
  class: "claude-usage",
  "data-test": "claude-usage"
}, jW = { class: "usage-summary" }, ZW = { class: "usage-label" }, KW = ["title"], JW = ["title"], XW = {
  key: 0,
  class: "usage-details",
  "data-test": "claude-usage-details"
}, QW = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("dt", null, "Input", -1)), eq = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("dt", null, "Output", -1)), tq = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("dt", null, "Cache read", -1)), nq = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("dt", null, "Cache create", -1)), rq = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("dt", null, "Calls", -1)), oq = { class: "muted" }, iq = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("dt", null, "Cache hit", -1)), sq = { class: "pricing-note" }, aq = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, lq = { class: "title-row" }, uq = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("div", { class: "title" }, "Correlation variables", -1)), cq = ["aria-expanded"], dq = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, fq = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("strong", null, "Alpha (\u03B1)", -1)), hq = /* @__PURE__ */ at(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), pq = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("strong", null, "Beta (\u03B2)", -1)), wq = /* @__PURE__ */ at(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), vq = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("code", null, "[0, 1]", -1)), mq = /* @__PURE__ */ at(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), _q = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("strong", null, "Epsilon (\u03B5)", -1)), gq = /* @__PURE__ */ at(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), $q = { "data-test": "help-hellinger-w" }, yq = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("strong", null, "Hellinger w", -1)), Vq = /* @__PURE__ */ at(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), bq = { "data-test": "help-hellinger-bias" }, Cq = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("strong", null, "Hellinger bias", -1)), Sq = /* @__PURE__ */ at(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), Eq = { class: "variables" }, Iq = { class: "action-row" }, kq = /* @__PURE__ */ at(" Close All Open Situations "), xq = /* @__PURE__ */ at(" Re-Evaluate All Open Alarms "), Aq = /* @__PURE__ */ Oe(() => /* @__PURE__ */ W("span", null, "Save Changes", -1)), Bq = /* @__PURE__ */ at("dismiss"), jc = window.Vue.computed, Tq = window.Vue.markRaw, Dq = window.Vue.onMounted, it = window.Vue.ref, Nq = /* @__PURE__ */ SW({
  __name: "AccountSettings",
  setup(e) {
    var Ne, Le, qe, Hn, gr, St, us, cs, ds, In, $r, fs, zn, Yn, hs;
    const o = (ae) => ae >= 1e6 ? (ae / 1e6).toFixed(1) + "M" : ae >= 1e3 ? (ae / 1e3).toFixed(1) + "K" : String(ae), r = (ae) => ae < 0.01 ? "~$0.00" : "~$" + ae.toFixed(2), s = Tq({
      MarkComplete: Ya,
      Help: pW,
      Restore: CW
    }), a = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, u = Uo(), c = it(((Ne = u.engineInfo) == null ? void 0 : Ne.engineName) || Ge.ENGINE_DBSCAN), f = it(
      u.engineInfo ? u.engineInfo.distanceMeasureName === Ge.HELLINGER_OPTION : !0
    ), w = it((qe = (Le = u.engineInfo) == null ? void 0 : Le.alpha) != null ? qe : a.alpha), v = it((gr = (Hn = u.engineInfo) == null ? void 0 : Hn.beta) != null ? gr : a.beta), _ = it((us = (St = u.engineInfo) == null ? void 0 : St.epsilon) != null ? us : a.epsilon), $ = it(
      (ds = (cs = u.engineInfo) == null ? void 0 : cs.hellingerW) != null ? ds : a.hellingerW
    ), y = it(
      ($r = (In = u.engineInfo) == null ? void 0 : In.hellingerBias) != null ? $r : a.hellingerBias
    ), k = jc(() => c.value === Ge.ENGINE_DBSCAN), D = jc(() => k.value && f.value), M = it((zn = (fs = u.claudeConfig) == null ? void 0 : fs.enabled) != null ? zn : !1), L = it(""), S = it((hs = (Yn = u.claudeConfig) == null ? void 0 : Yn.apiKeyPresent) != null ? hs : !1), T = it(!1), B = jc(
      () => (!S.value || T.value) && L.value.trim().length === 0
    ), O = () => {
      L.value = "", T.value = !0, S.value = !1, M.value = !1;
    }, I = it(!1), R = it(!1), P = it(!1), H = it(""), we = it(!1);
    Dq(async () => {
      if (u.claudeConfig === null) {
        const ae = await u.getClaudeConfig();
        ae && (M.value = ae.enabled, S.value = ae.apiKeyPresent);
      }
      await u.getClaudeUsage(30);
    });
    const he = () => {
      w.value = a.alpha, v.value = a.beta, _.value = a.epsilon, $.value = a.hellingerW, y.value = a.hellingerBias;
    }, ce = (ae, te) => {
      H.value = ae, P.value = te, R.value = !0;
    }, Se = () => {
      if (T.value)
        return { enabled: !1, clearApiKey: !0 };
      const ae = L.value.trim(), te = { enabled: M.value };
      return ae.length > 0 && (te.apiKey = ae), te;
    }, Ie = async () => {
      var wt, Gn, ps, Pt;
      const ae = {
        alpha: Number(w.value),
        beta: Number(v.value),
        epsilon: Number(_.value)
      };
      f.value && (ae.hellingerW = Number($.value), ae.hellingerBias = Number(y.value));
      const te = await u.setEngineInfo(
        c.value,
        f.value,
        ae
      ), me = await u.setClaudeConfig(Se());
      me && (L.value = "", T.value = !1, S.value = (Gn = (wt = u.claudeConfig) == null ? void 0 : wt.apiKeyPresent) != null ? Gn : !1, M.value = (Pt = (ps = u.claudeConfig) == null ? void 0 : ps.enabled) != null ? Pt : !1, u.getClaudeUsage(30)), te && me ? (u.getEngineInfo(), ce("The settings were saved!", !1)) : ce(
        te && !me ? "Engine settings saved, but Claude configuration could not be saved (an API key is required to enable the integration)." : "Error on saving the settings",
        !0
      );
    }, Ae = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const ae = await ek();
      ce(
        ae ? "All open situations were closed." : "Failed to close situations.",
        !ae
      );
    }, ve = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const ae = await tk();
      ce(
        ae ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !ae
      );
    };
    return (ae, te) => (cn(), cr(Dm, null, [
      ze(MU),
      W("div", kW, [
        xW,
        W("div", AW, [
          W("div", BW, [
            TW,
            W("a", {
              target: "_blank",
              href: j(Ge).URL_DOCUMENTATION
            }, "Correlation Engines documentation", 8, DW),
            NW
          ]),
          ze(j(R_), {
            vertical: "",
            modelValue: c.value,
            "onUpdate:modelValue": te[1] || (te[1] = (me) => c.value = me),
            label: "",
            hideLabel: ""
          }, {
            default: Zt(() => [
              ze(j(id), {
                class: "radio-item",
                value: j(Ge).ENGINE_DBSCAN
              }, {
                default: Zt(() => [
                  LW
                ]),
                _: 1
              }, 8, ["value"]),
              ze(j(Wo), {
                modelValue: f.value,
                "onUpdate:modelValue": te[0] || (te[0] = (me) => f.value = me),
                disabled: !j(k),
                class: "checkbox"
              }, {
                default: Zt(() => [
                  MW
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              ze(j(id), {
                class: "radio-item",
                value: j(Ge).ENGINE_LLM,
                disabled: "",
                "data-test": "engine-llm"
              }, {
                default: Zt(() => [
                  OW
                ]),
                _: 1
              }, 8, ["value"]),
              PW
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        W("div", RW, [
          FW,
          UW,
          ze(j(Wo), {
            modelValue: M.value,
            "onUpdate:modelValue": te[2] || (te[2] = (me) => M.value = me),
            disabled: j(B),
            class: "checkbox",
            "data-test": "claude-enabled"
          }, {
            default: Zt(() => [
              WW
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          j(B) ? (cn(), cr("div", qW, " Enter an API key to enable. ")) : gn("", !0),
          W("div", HW, [
            ze(j(ko), {
              modelValue: L.value,
              "onUpdate:modelValue": te[3] || (te[3] = (me) => L.value = me),
              type: "password",
              autocomplete: "new-password",
              label: S.value && !T.value ? "Replace API key (leave blank to keep stored key)" : "Anthropic API key",
              "data-test": "claude-api-key",
              class: "claude-key-input"
            }, null, 8, ["modelValue", "label"]),
            S.value && !T.value ? (cn(), Gc(j(se), {
              key: 0,
              secondary: "",
              "data-test": "claude-clear-key",
              onClick: O
            }, {
              default: Zt(() => [
                zW
              ]),
              _: 1
            })) : gn("", !0)
          ]),
          T.value ? (cn(), cr("div", YW, " Stored API key will be removed on save. ")) : gn("", !0),
          j(u).claudeUsage ? (cn(), cr("div", GW, [
            W("div", jW, [
              W("span", ZW, "Last " + Fe(j(u).claudeUsage.daysWindow) + " days:", 1),
              W("span", {
                class: "usage-tokens",
                title: `${j(u).claudeUsage.totalTokens.toLocaleString()} tokens`,
                "data-test": "claude-usage-tokens"
              }, Fe(o(j(u).claudeUsage.totalTokens)) + " tokens ", 9, KW),
              W("span", {
                class: "usage-cost",
                title: j(u).claudeUsage.pricingNote,
                "data-test": "claude-usage-cost"
              }, " (" + Fe(r(j(u).claudeUsage.estimatedCostUsd)) + ") ", 9, JW),
              W("button", {
                type: "button",
                class: "usage-toggle",
                onClick: te[4] || (te[4] = (me) => we.value = !we.value),
                "data-test": "claude-usage-toggle"
              }, Fe(we.value ? "hide details" : "show details"), 1)
            ]),
            we.value ? (cn(), cr("dl", XW, [
              W("div", null, [
                QW,
                W("dd", null, Fe(o(j(u).claudeUsage.inputTokens)), 1)
              ]),
              W("div", null, [
                eq,
                W("dd", null, Fe(o(j(u).claudeUsage.outputTokens)), 1)
              ]),
              W("div", null, [
                tq,
                W("dd", null, Fe(o(j(u).claudeUsage.cacheReadInputTokens)), 1)
              ]),
              W("div", null, [
                nq,
                W("dd", null, Fe(o(j(u).claudeUsage.cacheCreationInputTokens)), 1)
              ]),
              W("div", null, [
                rq,
                W("dd", null, [
                  at(Fe(j(u).claudeUsage.calls) + " ", 1),
                  W("span", oq, "(" + Fe(j(u).claudeUsage.successfulCalls) + " ok / " + Fe(j(u).claudeUsage.failedCalls) + " failed)", 1)
                ])
              ]),
              W("div", null, [
                iq,
                W("dd", null, Fe((j(u).claudeUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
              ]),
              W("div", sq, Fe(j(u).claudeUsage.pricingNote), 1)
            ])) : gn("", !0)
          ])) : gn("", !0)
        ]),
        j(k) ? (cn(), cr("div", aq, [
          W("div", lq, [
            uq,
            W("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": I.value,
              "aria-label": "Show help for correlation variables",
              "data-test": "variables-help",
              onClick: te[5] || (te[5] = (me) => I.value = !I.value)
            }, [
              ze(j(Z), {
                icon: j(s).Help
              }, null, 8, ["icon"])
            ], 8, cq),
            W("button", {
              type: "button",
              class: "icon-btn reset-icon",
              "aria-label": "Reset correlation variables to defaults",
              "data-test": "variables-reset",
              onClick: he
            }, [
              ze(j(Z), {
                icon: j(s).Restore
              }, null, 8, ["icon"])
            ])
          ]),
          I.value ? (cn(), cr("div", dq, [
            W("ul", null, [
              W("li", null, [
                fq,
                hq,
                W("em", null, "Default: " + Fe(a.alpha), 1)
              ]),
              W("li", null, [
                pq,
                wq,
                vq,
                mq,
                W("em", null, "Default: " + Fe(a.beta), 1)
              ]),
              W("li", null, [
                _q,
                gq,
                W("em", null, "Default: " + Fe(a.epsilon), 1)
              ]),
              j(D) ? (cn(), cr(Dm, { key: 0 }, [
                W("li", $q, [
                  yq,
                  Vq,
                  W("em", null, "Default: " + Fe(a.hellingerW), 1)
                ]),
                W("li", bq, [
                  Cq,
                  Sq,
                  W("em", null, "Default: " + Fe(a.hellingerBias), 1)
                ])
              ], 64)) : gn("", !0)
            ])
          ])) : gn("", !0),
          W("div", Eq, [
            ze(j(ko), {
              modelValue: w.value,
              "onUpdate:modelValue": te[6] || (te[6] = (me) => w.value = me),
              type: "number",
              label: "Alpha",
              "data-test": "variable-alpha"
            }, null, 8, ["modelValue"]),
            ze(j(ko), {
              modelValue: v.value,
              "onUpdate:modelValue": te[7] || (te[7] = (me) => v.value = me),
              type: "number",
              label: "Beta",
              "data-test": "variable-beta"
            }, null, 8, ["modelValue"]),
            ze(j(ko), {
              modelValue: _.value,
              "onUpdate:modelValue": te[8] || (te[8] = (me) => _.value = me),
              type: "number",
              label: "Epsilon",
              "data-test": "variable-epsilon"
            }, null, 8, ["modelValue"]),
            j(D) ? (cn(), Gc(j(ko), {
              key: 0,
              modelValue: $.value,
              "onUpdate:modelValue": te[9] || (te[9] = (me) => $.value = me),
              type: "number",
              label: "Hellinger w",
              "data-test": "variable-hellinger-w"
            }, null, 8, ["modelValue"])) : gn("", !0),
            j(D) ? (cn(), Gc(j(ko), {
              key: 1,
              modelValue: y.value,
              "onUpdate:modelValue": te[10] || (te[10] = (me) => y.value = me),
              type: "number",
              label: "Hellinger bias",
              "data-test": "variable-hellinger-bias"
            }, null, 8, ["modelValue"])) : gn("", !0)
          ])
        ])) : gn("", !0),
        W("div", Iq, [
          ze(j(se), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: Ae
          }, {
            default: Zt(() => [
              kq
            ]),
            _: 1
          }),
          ze(j(se), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: ve
          }, {
            default: Zt(() => [
              xq
            ]),
            _: 1
          }),
          ze(j(se), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: Ie
          }, {
            default: Zt(() => [
              ze(j(Z), {
                icon: j(s).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              Aq
            ]),
            _: 1
          })
        ]),
        ze(j(_l), {
          modelValue: R.value,
          "onUpdate:modelValue": te[12] || (te[12] = (me) => R.value = me),
          right: "",
          error: P.value,
          timeout: 6e3
        }, {
          button: Zt(() => [
            ze(j(se), {
              onClick: te[11] || (te[11] = (me) => R.value = !1),
              text: ""
            }, {
              default: Zt(() => [
                Bq
              ]),
              _: 1
            })
          ]),
          default: Zt(() => [
            at(Fe(H.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const Lq = /* @__PURE__ */ ue(Nq, [["__scopeId", "data-v-6150467b"]]), Mq = window.VueRouter.createRouter, Oq = window.VueRouter.createWebHistory, Pq = async () => {
  const e = Uo();
  e.userId || await e.getUserRole();
}, Og = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const o = window.VRouter || Pg;
      await Uo().getUserRole(), o.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => Pq(),
    component: X3
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: l9
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: R9
  },
  {
    path: "/error",
    name: "error",
    component: tU
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: bU
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      await Uo().getEngineInfo();
    },
    component: Lq
  }
], Zc = window.VRouter;
if (Zc) {
  const e = "Plugin-alecUiExtension", o = Zc.hasRoute(e) ? e : "Plugin";
  for (const r of Og) {
    const { path: s, name: a, component: u, beforeEnter: c } = r;
    Zc.addRoute(o, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const Pg = Mq({
  history: Oq(),
  routes: Og
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = TS;
