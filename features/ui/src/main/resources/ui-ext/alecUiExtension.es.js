const Ve = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
}, PS = {}, FS = window.Vue.resolveComponent, US = window.Vue.createVNode, WS = window.Vue.openBlock, HS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const zS = { class: "main" };
function qS(e, n) {
  const r = FS("router-view");
  return WS(), HS("div", zS, [
    US(r)
  ]);
}
const GS = /* @__PURE__ */ Ve(PS, [["render", qS], ["__scopeId", "data-v-5d32d140"]]), YS = window.Vue.defineComponent, jS = window.Vue.openBlock, KS = window.Vue.createBlock, ZS = /* @__PURE__ */ YS({
  __name: "App",
  setup(e) {
    return (n, r) => (jS(), KS(GS));
  }
});
var $a = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function JS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Cg = { exports: {} }, up = { exports: {} }, Vg = function(n, r) {
  return function() {
    return n.apply(r, arguments);
  };
}, XS = Vg, cp = Object.prototype.toString, dp = function(e) {
  return function(n) {
    var r = cp.call(n);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Go(e) {
  return e = e.toLowerCase(), function(r) {
    return dp(r) === e;
  };
}
function Ju(e) {
  return Array.isArray(e);
}
function Uf(e) {
  return typeof e > "u";
}
function QS(e) {
  return e !== null && !Uf(e) && e.constructor !== null && !Uf(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Eg = Go("ArrayBuffer");
function eI(e) {
  var n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && Eg(e.buffer), n;
}
function tI(e) {
  return typeof e == "string";
}
function Sg(e) {
  return typeof e == "number";
}
function fp(e) {
  return e !== null && typeof e == "object";
}
function Za(e) {
  if (dp(e) !== "object")
    return !1;
  var n = Object.getPrototypeOf(e);
  return n === null || n === Object.prototype;
}
function nI(e) {
  if (!Za(e))
    return !1;
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
var rI = Go("Date"), oI = Go("File"), iI = Go("Blob"), sI = Go("FileList");
function Ru(e) {
  return cp.call(e) === "[object Function]";
}
function aI(e) {
  return fp(e) && Ru(e.pipe);
}
function lI(e) {
  var n = "[object FormData]";
  if (!e)
    return !1;
  if (typeof FormData == "function" && e instanceof FormData)
    return !0;
  if (!fp(e))
    return !1;
  var r = Object.getPrototypeOf(e);
  return !r || r === Object.prototype || !Ru(e.append) ? !1 : cp.call(e) === n || Ru(e.toString) && e.toString() === n;
}
var uI = Go("URLSearchParams");
function cI(e) {
  return e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
function dI() {
  var e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function pp(e, n) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Ju(e))
      for (var r = 0, s = e.length; r < s; r++)
        n.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && n.call(null, e[a], a, e);
}
function Wf() {
  var e = /* @__PURE__ */ Object.create(null);
  function n(a, u) {
    var c;
    u === "__proto__" || u === "constructor" || u === "prototype" || (c = Object.prototype.hasOwnProperty.call(e, u) ? e[u] : void 0, Za(c) && Za(a) ? e[u] = Wf(c, a) : Za(a) ? e[u] = Wf({}, a) : Ju(a) ? e[u] = a.slice() : e[u] = a);
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    pp(arguments[r], n);
  return e;
}
function fI(e, n, r) {
  return pp(n, function(a, u) {
    r && typeof a == "function" ? e[u] = XS(a, r) : e[u] = a;
  }), e;
}
function pI(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function hI(e, n, r, s) {
  e.prototype = Object.create(
    n.prototype,
    s
  ), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function mI(e, n, r, s) {
  var a, u, c, f = {};
  if (n = n || {}, e == null)
    return n;
  do {
    for (a = Object.getOwnPropertyNames(e), u = a.length; u-- > 0; )
      c = a[u], (!s || s(c, e, n)) && !f[c] && (n[c] = e[c], f[c] = !0);
    e = r !== !1 && Object.getPrototypeOf(e);
  } while (e && (!r || r(e, n)) && e !== Object.prototype);
  return n;
}
function wI(e, n, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= n.length;
  var s = e.indexOf(n, r);
  return s !== -1 && s === r;
}
function vI(e) {
  if (!e)
    return null;
  if (Ju(e))
    return e;
  var n = e.length;
  if (!Sg(n))
    return null;
  for (var r = new Array(n); n-- > 0; )
    r[n] = e[n];
  return r;
}
var _I = function(e) {
  return function(n) {
    return e && n instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array));
function gI(e, n) {
  for (var r = e && e[Symbol.iterator], s = r.call(e), a; (a = s.next()) && !a.done; ) {
    var u = a.value;
    n.call(e, u[0], u[1]);
  }
}
function $I(e, n) {
  for (var r, s = []; (r = e.exec(n)) !== null; )
    s.push(r);
  return s;
}
var yI = Go("HTMLFormElement"), bI = function(n) {
  return function(r, s) {
    return n.call(r, s);
  };
}(Object.prototype.hasOwnProperty), ft = {
  isArray: Ju,
  isArrayBuffer: Eg,
  isBuffer: QS,
  isFormData: lI,
  isArrayBufferView: eI,
  isString: tI,
  isNumber: Sg,
  isObject: fp,
  isPlainObject: Za,
  isEmptyObject: nI,
  isUndefined: Uf,
  isDate: rI,
  isFile: oI,
  isBlob: iI,
  isFunction: Ru,
  isStream: aI,
  isURLSearchParams: uI,
  isStandardBrowserEnv: dI,
  forEach: pp,
  merge: Wf,
  extend: fI,
  trim: cI,
  stripBOM: pI,
  inherits: hI,
  toFlatObject: mI,
  kindOf: dp,
  kindOfTest: Go,
  endsWith: wI,
  toArray: vI,
  isTypedArray: _I,
  isFileList: sI,
  forEachEntry: gI,
  matchAll: $I,
  isHTMLForm: yI,
  hasOwnProperty: bI
}, Ig = ["authorization", "proxy-authorization", "cookie", "set-cookie", "x-api-key", "password"], Wo = ft, CI = Ig, VI = "[REDACTED ****]";
function kg(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return n.value = e, n;
}
function EI(e) {
  var n = e && Wo.isArray(e.redact) && e.redact.length ? e.redact : null, r = n || CI, s = {};
  return Wo.forEach(r, function(u) {
    typeof u == "string" && (s[u.toLowerCase()] = !0);
  }), s;
}
function SI(e, n) {
  return typeof e == "string" && n[e.toLowerCase()];
}
var Ym = "[Circular]";
function Hf(e, n, r, s) {
  var a;
  return SI(r, n) ? VI : Wo.isArray(e) ? s.indexOf(e) !== -1 ? Ym : (s.push(e), a = [], Wo.forEach(e, function(c, f) {
    a[f] = Hf(c, n, f, s);
  }), s.pop(), a) : Wo.isPlainObject(e) ? s.indexOf(e) !== -1 ? Ym : (s.push(e), a = {}, Wo.forEach(e, function(c, f) {
    a[f] = Hf(c, n, f, s);
  }), s.pop(), a) : e;
}
function II(e) {
  return e && Hf(e, EI(e), void 0, []);
}
function Ds(e, n, r, s, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
Wo.inherits(Ds, Error, {
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
      config: II(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var Ag = Ds.prototype, Tg = /* @__PURE__ */ Object.create(null);
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
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
  "ERR_FORM_DATA_DEPTH_EXCEEDED"
].forEach(function(e) {
  Tg[e] = kg(e);
});
Object.defineProperties(Ds, Tg);
Object.defineProperty(Ag, "isAxiosError", kg(!0));
Ds.from = function(e, n, r, s, a, u) {
  var c = Object.create(Ag);
  return Wo.toFlatObject(e, c, function(m) {
    return m !== Error.prototype;
  }), Ds.call(c, e.message, n, r, s, a), c.cause = e, c.name = e.name, u && Object.assign(c, u), c;
};
var Pi = Ds, xg = { exports: {} }, kI = typeof self == "object" ? self.FormData : window.FormData;
(function(e) {
  e.exports = kI;
})(xg);
var He = ft, kd = Pi, AI = xg.exports;
function zf(e) {
  return He.isPlainObject(e) || He.isArray(e);
}
function Lg(e) {
  return He.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function jm(e, n, r) {
  return e ? e.concat(n).map(function(a, u) {
    return a = Lg(a), !r && u ? "[" + a + "]" : a;
  }).join(r ? "." : "") : n;
}
function TI(e) {
  return He.isArray(e) && !e.some(zf);
}
var xI = He.toFlatObject(He, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function LI(e) {
  return e && He.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator];
}
function DI(e, n, r) {
  if (!He.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new (AI || FormData)(), r = He.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(D, S) {
    return !He.isUndefined(S[D]);
  });
  var s = r.metaTokens, a = r.visitor || y, u = r.dots, c = r.indexes, f = r.Blob || typeof Blob < "u" && Blob, m = r.maxDepth === void 0 ? 100 : r.maxDepth, w = f && LI(n);
  if (!He.isFunction(a))
    throw new TypeError("visitor must be a function");
  function g(x) {
    if (x === null)
      return "";
    if (He.isDate(x))
      return x.toISOString();
    if (!w && He.isBlob(x))
      throw new kd("Blob is not supported. Use a Buffer instead.");
    return He.isArrayBuffer(x) || He.isTypedArray(x) ? w && typeof Blob == "function" ? new Blob([x]) : Buffer.from(x) : x;
  }
  function y(x, D, S) {
    var A = x;
    if (x && !S && typeof x == "object") {
      if (He.endsWith(D, "{}"))
        D = s ? D : D.slice(0, -2), x = JSON.stringify(x);
      else if (He.isArray(x) && TI(x) || He.isFileList(x) || He.endsWith(D, "[]") && (A = He.toArray(x)))
        return D = Lg(D), A.forEach(function(B, F) {
          !(He.isUndefined(B) || B === null) && n.append(
            c === !0 ? jm([D], F, u) : c === null ? D : D + "[]",
            g(B)
          );
        }), !1;
    }
    return zf(x) ? !0 : (n.append(jm(S, D, u), g(x)), !1);
  }
  var b = [], V = Object.assign(xI, {
    defaultVisitor: y,
    convertValue: g,
    isVisitable: zf
  });
  function O(x, D, S) {
    if (!He.isUndefined(x)) {
      if (S = S || 0, S > m)
        throw new kd(
          "Maximum object depth of " + m + " exceeded (got " + S + " levels)",
          kd.ERR_FORM_DATA_DEPTH_EXCEEDED
        );
      if (b.indexOf(x) !== -1)
        throw Error("Circular reference detected in " + D.join("."));
      b.push(x), He.forEach(x, function(T, B) {
        var F = !(He.isUndefined(T) || T === null) && a.call(
          n,
          T,
          He.isString(B) ? B.trim() : B,
          D,
          V
        );
        F === !0 && O(T, D ? D.concat(B) : [B], S + 1);
      }), b.pop();
    }
  }
  if (!He.isObject(e))
    throw new TypeError("data must be an object");
  return O(e, null, 0), n;
}
var Xu = DI, OI = Xu;
function Km(e) {
  var n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(
    /[!'\(\)~]|%20/g,
    function(s) {
      return n[s];
    }
  );
}
function Dg(e, n) {
  this._pairs = [], e && OI(e, this, n);
}
var Og = Dg.prototype;
Og.append = function(n, r) {
  this._pairs.push([n, r]);
};
Og.toString = function(n) {
  var r = n ? function(s) {
    return n.call(this, s, Km);
  } : Km;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
var Ng = Dg, NI = ft, MI = Ng;
function BI(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Mg = function(n, r, s) {
  if (!r)
    return n;
  var a = n.indexOf("#");
  a !== -1 && (n = n.slice(0, a));
  var u = s && s.encode || BI, c = s && s.serialize, f;
  return c ? f = c(r, s) : f = NI.isURLSearchParams(r) ? r.toString() : new MI(r, s).toString(u), f && (n += (n.indexOf("?") === -1 ? "?" : "&") + f), n;
}, RI = ft;
function dl() {
  this.handlers = [];
}
dl.prototype.use = function(n, r, s) {
  return this.handlers.push({
    fulfilled: n,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
dl.prototype.eject = function(n) {
  this.handlers[n] && (this.handlers[n] = null);
};
dl.prototype.clear = function() {
  this.handlers && (this.handlers = []);
};
dl.prototype.forEach = function(n) {
  RI.forEach(this.handlers, function(s) {
    s !== null && n(s);
  });
};
var PI = dl, FI = ft, Bg = function(n, r) {
  FI.forEach(n, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (n[r] = a, delete n[u]);
  });
}, Rg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Qu = { exports: {} }, UI = Ng, WI = typeof URLSearchParams < "u" ? URLSearchParams : UI, HI = FormData, zI = {
  isBrowser: !0,
  classes: {
    URLSearchParams: WI,
    FormData: HI,
    Blob
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
(function(e) {
  e.exports = zI;
})(Qu);
var qI = ft, GI = Xu, Zm = Qu.exports, YI = function(n, r) {
  return GI(n, new Zm.classes.URLSearchParams(), Object.assign({
    visitor: function(s, a, u, c) {
      return Zm.isNode && qI.isBuffer(s) ? (this.append(a, s.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, r));
}, Ro = ft;
function jI(e) {
  return Ro.matchAll(/\w+|\[(\w*)]/g, e).map(function(n) {
    return n[0] === "[]" ? "" : n[1] || n[0];
  });
}
function KI(e) {
  var n = {}, r = Object.keys(e), s, a = r.length, u;
  for (s = 0; s < a; s++)
    u = r[s], n[u] = e[u];
  return n;
}
function ZI(e) {
  function n(s, a, u, c) {
    var f = s[c++];
    if (f === "__proto__")
      return !0;
    var m = Number.isFinite(+f), w = c >= s.length;
    if (f = !f && Ro.isArray(u) ? u.length : f, w)
      return Ro.hasOwnProperty(u, f) ? u[f] = [u[f], a] : u[f] = a, !m;
    (!u[f] || !Ro.isObject(u[f])) && (u[f] = []);
    var g = n(s, a, u[f], c);
    return g && Ro.isArray(u[f]) && (u[f] = KI(u[f])), !m;
  }
  if (Ro.isFormData(e) && Ro.isFunction(e.entries)) {
    var r = {};
    return Ro.forEachEntry(e, function(s, a) {
      n(jI(s), a, r, 0);
    }), r;
  }
  return null;
}
var Pg = ZI, Ad, Jm;
function JI() {
  if (Jm)
    return Ad;
  Jm = 1;
  var e = Pi;
  return Ad = function(r, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, Ad;
}
var Td, Xm;
function XI() {
  if (Xm)
    return Td;
  Xm = 1;
  var e = ft;
  return Td = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(s, a, u, c, f, m) {
        var w = [];
        w.push(s + "=" + encodeURIComponent(a)), e.isNumber(u) && w.push("expires=" + new Date(u).toGMTString()), e.isString(c) && w.push("path=" + c), e.isString(f) && w.push("domain=" + f), m === !0 && w.push("secure"), document.cookie = w.join("; ");
      },
      read: function(s) {
        for (var a = s + "=", u = document.cookie.split(";"), c, f = 0; f < u.length; f++) {
          for (c = u[f]; c.charAt(0) === " "; )
            c = c.substring(1);
          if (c.indexOf(a) === 0)
            return decodeURIComponent(c.substring(a.length));
        }
        return null;
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
  }(), Td;
}
var QI = function(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}, ek = function(n, r) {
  return r ? n.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : n;
}, tk = QI, nk = ek, Fg = function(n, r, s) {
  var a = !tk(r);
  return n && (a || s === !1) ? nk(n, r) : r;
}, xd, Qm;
function rk() {
  if (Qm)
    return xd;
  Qm = 1;
  var e = ft, n = [
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
  return xd = function(s) {
    var a = {}, u, c, f;
    return s && e.forEach(s.split(`
`), function(w) {
      if (f = w.indexOf(":"), u = e.trim(w.slice(0, f)).toLowerCase(), c = e.trim(w.slice(f + 1)), u) {
        if (a[u] && n.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, xd;
}
var Ld, ew;
function ok() {
  if (ew)
    return Ld;
  ew = 1;
  var e = ft;
  return Ld = e.isStandardBrowserEnv() ? function() {
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
  }(), Ld;
}
var Dd, tw;
function ec() {
  if (tw)
    return Dd;
  tw = 1;
  var e = Pi, n = ft;
  function r(s, a, u) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED, a, u), this.name = "CanceledError";
  }
  return n.inherits(r, e, {
    __CANCEL__: !0
  }), Dd = r, Dd;
}
var Od, nw;
function ik() {
  return nw || (nw = 1, Od = function(n) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
    return r && r[1] || "";
  }), Od;
}
var Nd, rw;
function ow() {
  if (rw)
    return Nd;
  rw = 1;
  var e = ft, n = JI(), r = XI(), s = Mg, a = Fg, u = rk(), c = ok(), f = Rg, m = Pi, w = ec(), g = ik(), y = Qu.exports;
  return Nd = function(V) {
    return new Promise(function(x, D) {
      var S = V.data, A = V.headers, T = V.responseType, B = e.hasOwnProperty(V, "withXSRFToken") ? V.withXSRFToken : void 0, F;
      function W() {
        V.cancelToken && V.cancelToken.unsubscribe(F), V.signal && V.signal.removeEventListener("abort", F);
      }
      e.isFormData(S) && e.isStandardBrowserEnv() && delete A["Content-Type"];
      var L = new XMLHttpRequest();
      if (V.auth) {
        var X = V.auth.username || "", Me = V.auth.password ? unescape(encodeURIComponent(V.auth.password)) : "";
        A.Authorization = "Basic " + btoa(X + ":" + Me);
      }
      var he = a(
        V.baseURL,
        V.url,
        V.allowAbsoluteUrls
      );
      L.open(
        V.method.toUpperCase(),
        s(he, V.params, V.paramsSerializer),
        !0
      ), L.timeout = V.timeout;
      function Te() {
        if (!!L) {
          var Pe = "getAllResponseHeaders" in L ? u(L.getAllResponseHeaders()) : null, de = !T || T === "text" || T === "json" ? L.responseText : L.response, Fe = {
            data: de,
            status: L.status,
            statusText: L.statusText,
            headers: Pe,
            config: V,
            request: L
          };
          n(
            function(Be) {
              x(Be), W();
            },
            function(Be) {
              D(Be), W();
            },
            Fe
          ), L = null;
        }
      }
      if ("onloadend" in L ? L.onloadend = Te : L.onreadystatechange = function() {
        !L || L.readyState !== 4 || L.status === 0 && !(L.responseURL && L.responseURL.indexOf("file:") === 0) || setTimeout(Te);
      }, L.onabort = function() {
        !L || (D(
          new m(
            "Request aborted",
            m.ECONNABORTED,
            V,
            L
          )
        ), L = null);
      }, L.onerror = function() {
        D(
          new m(
            "Network Error",
            m.ERR_NETWORK,
            V,
            L
          )
        ), L = null;
      }, L.ontimeout = function() {
        var de = V.timeout ? "timeout of " + V.timeout + "ms exceeded" : "timeout exceeded", Fe = V.transitional || f;
        V.timeoutErrorMessage && (de = V.timeoutErrorMessage), D(
          new m(
            de,
            Fe.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
            V,
            L
          )
        ), L = null;
      }, e.isStandardBrowserEnv() && (e.isFunction(B) && (B = B(V)), B === !0 || B !== !1 && c(he))) {
        var Qe = V.xsrfHeaderName && V.xsrfCookieName && r.read(V.xsrfCookieName);
        Qe && (A[V.xsrfHeaderName] = Qe);
      }
      "setRequestHeader" in L && e.forEach(A, function(de, Fe) {
        typeof S > "u" && Fe.toLowerCase() === "content-type" ? delete A[Fe] : L.setRequestHeader(Fe, de);
      }), e.isUndefined(V.withCredentials) || (L.withCredentials = !!V.withCredentials), T && T !== "json" && (L.responseType = V.responseType), typeof V.onDownloadProgress == "function" && L.addEventListener("progress", V.onDownloadProgress), typeof V.onUploadProgress == "function" && L.upload && L.upload.addEventListener("progress", V.onUploadProgress), (V.cancelToken || V.signal) && (F = function(Pe) {
        !L || (D(
          !Pe || Pe.type ? new w(null, V, L) : Pe
        ), L.abort(), L = null);
      }, V.cancelToken && V.cancelToken.subscribe(F), V.signal && (V.signal.aborted ? F() : V.signal.addEventListener("abort", F))), !S && S !== !1 && S !== 0 && S !== "" && (S = null);
      var et = g(he);
      if (et && y.protocols.indexOf(et) === -1) {
        D(
          new m(
            "Unsupported protocol " + et + ":",
            m.ERR_BAD_REQUEST,
            V
          )
        );
        return;
      }
      L.send(S);
    });
  }, Nd;
}
var lt = ft, iw = Bg, sw = Pi, sk = Rg, ak = Xu, lk = YI, aw = Qu.exports, uk = Pg, ck = Ig, dk = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function lw(e, n) {
  !lt.isUndefined(e) && lt.isUndefined(e["Content-Type"]) && (e["Content-Type"] = n);
}
function fk() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = ow()), e;
}
function pk(e, n, r) {
  if (lt.isString(e))
    try {
      return (n || JSON.parse)(e), lt.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var tc = {
  transitional: sk,
  adapter: fk(),
  transformRequest: [function(n, r) {
    iw(r, "Accept"), iw(r, "Content-Type");
    var s = r && r["Content-Type"] || "", a = s.indexOf("application/json") > -1, u = lt.isObject(n);
    u && lt.isHTMLForm(n) && (n = new FormData(n));
    var c = lt.isFormData(n);
    if (c)
      return a ? JSON.stringify(uk(n)) : n;
    if (lt.isArrayBuffer(n) || lt.isBuffer(n) || lt.isStream(n) || lt.isFile(n) || lt.isBlob(n))
      return n;
    if (lt.isArrayBufferView(n))
      return n.buffer;
    if (lt.isURLSearchParams(n))
      return lw(r, "application/x-www-form-urlencoded;charset=utf-8"), n.toString();
    var f;
    if (u) {
      var m = lt.hasOwnProperty(this, "formSerializer") ? this.formSerializer : void 0, w = lt.hasOwnProperty(this, "env") ? this.env : void 0;
      if (s.indexOf("application/x-www-form-urlencoded") !== -1)
        return lk(n, m).toString();
      if ((f = lt.isFileList(n)) || s.indexOf("multipart/form-data") > -1) {
        var g = w && w.FormData;
        return ak(
          f ? { "files[]": n } : n,
          g && new g(),
          m
        );
      }
    }
    return u || a ? (lw(r, "application/json"), pk(n)) : n;
  }],
  transformResponse: [function(n) {
    var r = this.transitional || tc.transitional, s = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (n && lt.isString(n) && (s && !this.responseType || a)) {
      var u = r && r.silentJSONParsing, c = !u && a;
      try {
        return JSON.parse(n);
      } catch (f) {
        if (c)
          throw f.name === "SyntaxError" ? sw.from(f, sw.ERR_BAD_RESPONSE, this, null, this.response) : f;
      }
    }
    return n;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  redact: ck.slice(),
  env: {
    FormData: aw.classes.FormData,
    Blob: aw.classes.Blob
  },
  validateStatus: function(n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
lt.forEach(["delete", "get", "head"], function(n) {
  tc.headers[n] = {};
});
lt.forEach(["post", "put", "patch"], function(n) {
  tc.headers[n] = lt.merge(dk);
});
var hp = tc, hk = ft, mk = hp, wk = function(n, r, s, a) {
  var u = this || mk;
  return hk.forEach(a, function(f) {
    n = f.call(u, n, r, s);
  }), n;
}, Md, uw;
function Ug() {
  return uw || (uw = 1, Md = function(n) {
    return !!(n && n.__CANCEL__);
  }), Md;
}
var vk = ft, _k = /[^\x09\x20-\x7E\x80-\xFF]/g, gk = /^[\x09\x20]+|[\x09\x20]+$/g;
function Wg(e) {
  return e === !1 || e == null ? e : vk.isArray(e) ? e.map(Wg) : String(e).replace(_k, "").replace(gk, "");
}
var $k = Wg, ya = ft, Bd = wk, yk = Ug(), bk = hp, Ck = ec(), cw = Bg, Vk = $k;
function Rd(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ck();
}
var Ek = function(n) {
  Rd(n), n.headers = n.headers || {}, n.data = Bd.call(
    n,
    n.data,
    n.headers,
    null,
    n.transformRequest
  ), cw(n.headers, "Accept"), cw(n.headers, "Content-Type");
  var r = ya.hasOwnProperty(n.headers, "common") && n.headers.common ? n.headers.common : {}, s = n.method && ya.hasOwnProperty(n.headers, n.method) && n.headers[n.method] ? n.headers[n.method] : {};
  n.headers = ya.merge(r, s, n.headers), ya.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(c) {
      delete n.headers[c];
    }
  ), ya.forEach(n.headers, function(c, f) {
    n.headers[f] = Vk(c);
  });
  var a = n.adapter || bk.adapter;
  return a(n).then(function(c) {
    return Rd(n), c.data = Bd.call(
      n,
      c.data,
      c.headers,
      c.status,
      n.transformResponse
    ), c;
  }, function(c) {
    return yk(c) || (Rd(n), c && c.response && (c.response.data = Bd.call(
      n,
      c.response.data,
      c.response.headers,
      c.response.status,
      n.transformResponse
    ))), Promise.reject(c);
  });
}, $t = ft, Hg = function(n, r) {
  r = r || {};
  var s = /* @__PURE__ */ Object.create(null);
  function a(b, V) {
    return $t.hasOwnProperty(b, V) ? b[V] : void 0;
  }
  function u(b, V) {
    return $t.hasOwnProperty(b, V);
  }
  function c(b, V) {
    return $t.isPlainObject(b) && $t.isPlainObject(V) ? $t.merge(b, V) : $t.isEmptyObject(V) ? $t.merge({}, b) : $t.isPlainObject(V) ? $t.merge({}, V) : $t.isArray(V) ? V.slice() : V;
  }
  function f(b) {
    if (u(r, b) && !$t.isUndefined(r[b]))
      return c(a(n, b), r[b]);
    if (u(n, b) && !$t.isUndefined(n[b]))
      return c(void 0, n[b]);
  }
  function m(b) {
    if (u(r, b) && !$t.isUndefined(r[b]))
      return c(void 0, r[b]);
  }
  function w(b) {
    if (u(r, b) && !$t.isUndefined(r[b]))
      return c(void 0, r[b]);
    if (u(n, b) && !$t.isUndefined(n[b]))
      return c(void 0, n[b]);
  }
  function g(b) {
    if (u(r, b))
      return c(a(n, b), r[b]);
    if (u(n, b))
      return c(void 0, n[b]);
  }
  var y = {
    url: m,
    method: m,
    data: m,
    baseURL: w,
    transformRequest: w,
    transformResponse: w,
    paramsSerializer: w,
    timeout: w,
    timeoutMessage: w,
    withCredentials: w,
    withXSRFToken: w,
    adapter: w,
    responseType: w,
    xsrfCookieName: w,
    xsrfHeaderName: w,
    onUploadProgress: w,
    onDownloadProgress: w,
    decompress: w,
    maxContentLength: w,
    maxBodyLength: w,
    beforeRedirect: w,
    transport: w,
    httpAgent: w,
    httpsAgent: w,
    cancelToken: w,
    socketPath: w,
    allowedSocketPaths: w,
    responseEncoding: w,
    validateStatus: g
  };
  return $t.forEach(Object.keys(n).concat(Object.keys(r)), function(V) {
    if (!(V === "__proto__" || V === "constructor" || V === "prototype")) {
      var O = $t.hasOwnProperty(y, V) ? y[V] : f, x = O(V);
      $t.isUndefined(x) && O !== g || (s[V] = x);
    }
  }), s;
}, Pd, dw;
function zg() {
  return dw || (dw = 1, Pd = {
    version: "0.32.0"
  }), Pd;
}
var Sk = zg().version, Po = Pi, mp = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, n) {
  mp[e] = function(s) {
    return typeof s === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
var fw = {};
mp.transitional = function(n, r, s) {
  function a(u, c) {
    return "[Axios v" + Sk + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
  }
  return function(u, c, f) {
    if (n === !1)
      throw new Po(
        a(c, " has been removed" + (r ? " in " + r : "")),
        Po.ERR_DEPRECATED
      );
    return r && !fw[c] && (fw[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), n ? n(u, c, f) : !0;
  };
};
function Ik(e, n, r) {
  if (typeof e != "object")
    throw new Po("options must be an object", Po.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a], c = n[u];
    if (c) {
      var f = e[u], m = f === void 0 || c(f, u, e);
      if (m !== !0)
        throw new Po("option " + u + " must be " + m, Po.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Po("Unknown option " + u, Po.ERR_BAD_OPTION);
  }
}
var kk = {
  assertOptions: Ik,
  validators: mp
}, wp = ft, Ak = Mg, pw = PI, hw = Ek, nc = Hg, Tk = Fg, qf = kk, So = qf.validators;
function Os(e) {
  this.defaults = e, this.interceptors = {
    request: new pw(),
    response: new pw()
  };
}
Os.prototype.request = function(n, r) {
  typeof n == "string" ? (r = r || {}, r.url = n) : r = n || {}, r = nc(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && qf.assertOptions(s, {
    silentJSONParsing: So.transitional(So.boolean),
    forcedJSONParsing: So.transitional(So.boolean),
    clarifyTimeoutError: So.transitional(So.boolean)
  }, !1);
  var a = r.paramsSerializer;
  a != null && (wp.isFunction(a) ? r.paramsSerializer = {
    serialize: a
  } : qf.assertOptions(a, {
    encode: So.function,
    serialize: So.function
  }, !0));
  var u = [], c = !0;
  this.interceptors.request.forEach(function(O) {
    typeof O.runWhen == "function" && O.runWhen(r) === !1 || (c = c && O.synchronous, u.unshift(O.fulfilled, O.rejected));
  });
  var f = [];
  this.interceptors.response.forEach(function(O) {
    f.push(O.fulfilled, O.rejected);
  });
  var m;
  if (!c) {
    var w = [hw, void 0];
    for (Array.prototype.unshift.apply(w, u), w = w.concat(f), m = Promise.resolve(r); w.length; )
      m = m.then(w.shift(), w.shift());
    return m;
  }
  for (var g = r; u.length; ) {
    var y = u.shift(), b = u.shift();
    try {
      g = y(g);
    } catch (V) {
      b(V);
      break;
    }
  }
  try {
    m = hw(g);
  } catch (V) {
    return Promise.reject(V);
  }
  for (; f.length; )
    m = m.then(f.shift(), f.shift());
  return m;
};
Os.prototype.getUri = function(n) {
  n = nc(this.defaults, n);
  var r = Tk(n.baseURL, n.url, n.allowAbsoluteUrls);
  return Ak(r, n.params, n.paramsSerializer);
};
wp.forEach(["delete", "get", "head", "options"], function(n) {
  Os.prototype[n] = function(r, s) {
    return this.request(nc(s || {}, {
      method: n,
      url: r,
      data: (s || {}).data
    }));
  };
});
wp.forEach(["post", "put", "patch"], function(n) {
  function r(s) {
    return function(u, c, f) {
      return this.request(nc(f || {}, {
        method: n,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  Os.prototype[n] = r(), Os.prototype[n + "Form"] = r(!0);
});
var xk = Os, Fd, mw;
function Lk() {
  if (mw)
    return Fd;
  mw = 1;
  var e = ec();
  function n(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var s;
    this.promise = new Promise(function(c) {
      s = c;
    });
    var a = this;
    this.promise.then(function(u) {
      if (!!a._listeners) {
        for (var c = a._listeners.length; c-- > 0; )
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
    }, r(function(c, f, m) {
      a.reason || (a.reason = new e(c, f, m), s(a.reason));
    });
  }
  return n.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, n.prototype.subscribe = function(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : this._listeners = [s];
  }, n.prototype.unsubscribe = function(s) {
    if (!!this._listeners) {
      var a = this._listeners.indexOf(s);
      a !== -1 && this._listeners.splice(a, 1);
    }
  }, n.source = function() {
    var s, a = new n(function(c) {
      s = c;
    });
    return {
      token: a,
      cancel: s
    };
  }, Fd = n, Fd;
}
var Ud, ww;
function Dk() {
  return ww || (ww = 1, Ud = function(n) {
    return function(s) {
      return n.apply(null, s);
    };
  }), Ud;
}
var Wd, vw;
function Ok() {
  if (vw)
    return Wd;
  vw = 1;
  var e = ft;
  return Wd = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Wd;
}
var Gf = ft, Nk = Vg, xu = xk, Mk = Hg, Bk = hp, Rk = Pg;
function qg(e) {
  var n = new xu(e), r = Nk(xu.prototype.request, n);
  return Gf.extend(r, xu.prototype, n), Gf.extend(r, n), r.create = function(a) {
    return qg(Mk(e, a));
  }, r;
}
var nn = qg(Bk);
nn.Axios = xu;
nn.CanceledError = ec();
nn.CancelToken = Lk();
nn.isCancel = Ug();
nn.VERSION = zg().version;
nn.toFormData = Xu;
nn.AxiosError = Pi;
nn.Cancel = nn.CanceledError;
nn.all = function(n) {
  return Promise.all(n);
};
nn.spread = Dk();
nn.isAxiosError = Ok();
nn.formToJSON = function(e) {
  return Rk(Gf.isHTMLForm(e) ? new FormData(e) : e);
};
up.exports = nn;
up.exports.default = nn;
(function(e) {
  e.exports = up.exports;
})(Cg);
const Gg = /* @__PURE__ */ JS(Cg.exports), to = Gg.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), Dt = Gg.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var Ne = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(e, n) {
  (function() {
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", w = 500, g = "__lodash_placeholder__", y = 1, b = 2, V = 4, O = 1, x = 2, D = 1, S = 2, A = 4, T = 8, B = 16, F = 32, W = 64, L = 128, X = 256, Me = 512, he = 30, Te = "...", Qe = 800, et = 16, Pe = 1, de = 2, Fe = 3, Ge = 1 / 0, Be = 9007199254740991, rn = 17976931348623157e292, Tr = 0 / 0, $e = 4294967295, Zs = $e - 1, Js = $e >>> 1, Ui = [
      ["ary", L],
      ["bind", D],
      ["bindKey", S],
      ["curry", T],
      ["curryRight", B],
      ["flip", Me],
      ["partial", F],
      ["partialRight", W],
      ["rearg", X]
    ], bt = "[object Arguments]", qt = "[object Array]", on = "[object AsyncFunction]", _n = "[object Boolean]", sn = "[object Date]", Zo = "[object DOMException]", xe = "[object Error]", xr = "[object Function]", Re = "[object GeneratorFunction]", Ot = "[object Map]", be = "[object Number]", Dn = "[object Null]", Ct = "[object Object]", Nt = "[object Promise]", Jo = "[object Proxy]", On = "[object RegExp]", pt = "[object Set]", pr = "[object String]", ht = "[object Symbol]", Lr = "[object Undefined]", Gt = "[object WeakMap]", Xo = "[object WeakSet]", Jn = "[object ArrayBuffer]", gn = "[object DataView]", hr = "[object Float32Array]", $n = "[object Float64Array]", Xn = "[object Int8Array]", Qn = "[object Int16Array]", Dr = "[object Int32Array]", Or = "[object Uint8Array]", Nr = "[object Uint8ClampedArray]", mr = "[object Uint16Array]", wr = "[object Uint32Array]", er = /\b__p \+= '';/g, Yt = /\b(__p \+=) '' \+/g, no = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ro = /&(?:amp|lt|gt|quot|#39);/g, oo = /[&<>"']/g, io = RegExp(ro.source), Qo = RegExp(oo.source), Mr = /<%-([\s\S]+?)%>/g, Br = /<%([\s\S]+?)%>/g, Mt = /<%=([\s\S]+?)%>/g, tr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, so = /^\w*$/, ao = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, lo = /[\\^$.*+?()[\]{}|]/g, ei = RegExp(lo.source), vr = /^\s+/, ti = /\s/, uo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Wi = /\{\n\/\* \[wrapped with (.+)\] \*/, re = /,? & /, Z = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Le = /[()=,{}\[\]\/\s]/, Q = /\\(\\)?/g, an = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ni = /\w*$/, ri = /^[-+]0x[0-9a-f]+$/i, co = /^0b[01]+$/i, oi = /^\[object .+?Constructor\]$/, ii = /^0o[0-7]+$/i, Hi = /^(?:0|[1-9]\d*)$/, zi = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Rr = /($^)/, qi = /['\n\r\u2028\u2029\\]/g, Bt = "\\ud800-\\udfff", si = "\\u0300-\\u036f", Nn = "\\ufe20-\\ufe2f", Gi = "\\u20d0-\\u20ff", ai = si + Nn + Gi, fo = "\\u2700-\\u27bf", po = "a-z\\xdf-\\xf6\\xf8-\\xff", Pr = "\\xac\\xb1\\xd7\\xf7", Xs = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Yi = "\\u2000-\\u206f", ho = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", mo = "A-Z\\xc0-\\xd6\\xd8-\\xde", Mn = "\\ufe0e\\ufe0f", _l = Pr + Xs + Yi + ho, Qs = "['\u2019]", gl = "[" + Bt + "]", ea = "[" + _l + "]", ji = "[" + ai + "]", ta = "\\d+", yc = "[" + fo + "]", $l = "[" + po + "]", na = "[^" + Bt + _l + ta + fo + po + mo + "]", wo = "\\ud83c[\\udffb-\\udfff]", ra = "(?:" + ji + "|" + wo + ")", q = "[^" + Bt + "]", v = "(?:\\ud83c[\\udde6-\\uddff]){2}", I = "[\\ud800-\\udbff][\\udc00-\\udfff]", H = "[" + mo + "]", j = "\\u200d", ae = "(?:" + $l + "|" + na + ")", _e = "(?:" + H + "|" + na + ")", rt = "(?:" + Qs + "(?:d|ll|m|re|s|t|ve))?", Ze = "(?:" + Qs + "(?:D|LL|M|RE|S|T|VE))?", jt = ra + "?", ln = "[" + Mn + "]?", oa = "(?:" + j + "(?:" + [q, v, I].join("|") + ")" + ln + jt + ")*", Vt = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", q0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Pp = ln + jt + oa, G0 = "(?:" + [yc, v, I].join("|") + ")" + Pp, Y0 = "(?:" + [q + ji + "?", ji, v, I, gl].join("|") + ")", j0 = RegExp(Qs, "g"), K0 = RegExp(ji, "g"), bc = RegExp(wo + "(?=" + wo + ")|" + Y0 + Pp, "g"), Z0 = RegExp([
      H + "?" + $l + "+" + rt + "(?=" + [ea, H, "$"].join("|") + ")",
      _e + "+" + Ze + "(?=" + [ea, H + ae, "$"].join("|") + ")",
      H + "?" + ae + "+" + rt,
      H + "+" + Ze,
      q0,
      Vt,
      ta,
      G0
    ].join("|"), "g"), J0 = RegExp("[" + j + Bt + ai + Mn + "]"), X0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Q0 = [
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
    ], e$ = -1, qe = {};
    qe[hr] = qe[$n] = qe[Xn] = qe[Qn] = qe[Dr] = qe[Or] = qe[Nr] = qe[mr] = qe[wr] = !0, qe[bt] = qe[qt] = qe[Jn] = qe[_n] = qe[gn] = qe[sn] = qe[xe] = qe[xr] = qe[Ot] = qe[be] = qe[Ct] = qe[On] = qe[pt] = qe[pr] = qe[Gt] = !1;
    var We = {};
    We[bt] = We[qt] = We[Jn] = We[gn] = We[_n] = We[sn] = We[hr] = We[$n] = We[Xn] = We[Qn] = We[Dr] = We[Ot] = We[be] = We[Ct] = We[On] = We[pt] = We[pr] = We[ht] = We[Or] = We[Nr] = We[mr] = We[wr] = !0, We[xe] = We[xr] = We[Gt] = !1;
    var t$ = {
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
    }, n$ = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, r$ = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, o$ = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, i$ = parseFloat, s$ = parseInt, Fp = typeof $a == "object" && $a && $a.Object === Object && $a, a$ = typeof self == "object" && self && self.Object === Object && self, Et = Fp || a$ || Function("return this")(), Cc = n && !n.nodeType && n, li = Cc && !0 && e && !e.nodeType && e, Up = li && li.exports === Cc, Vc = Up && Fp.process, Bn = function() {
      try {
        var C = li && li.require && li.require("util").types;
        return C || Vc && Vc.binding && Vc.binding("util");
      } catch {
      }
    }(), Wp = Bn && Bn.isArrayBuffer, Hp = Bn && Bn.isDate, zp = Bn && Bn.isMap, qp = Bn && Bn.isRegExp, Gp = Bn && Bn.isSet, Yp = Bn && Bn.isTypedArray;
    function yn(C, N, k) {
      switch (k.length) {
        case 0:
          return C.call(N);
        case 1:
          return C.call(N, k[0]);
        case 2:
          return C.call(N, k[0], k[1]);
        case 3:
          return C.call(N, k[0], k[1], k[2]);
      }
      return C.apply(N, k);
    }
    function l$(C, N, k, Y) {
      for (var ie = -1, Ee = C == null ? 0 : C.length; ++ie < Ee; ) {
        var mt = C[ie];
        N(Y, mt, k(mt), C);
      }
      return Y;
    }
    function Rn(C, N) {
      for (var k = -1, Y = C == null ? 0 : C.length; ++k < Y && N(C[k], k, C) !== !1; )
        ;
      return C;
    }
    function u$(C, N) {
      for (var k = C == null ? 0 : C.length; k-- && N(C[k], k, C) !== !1; )
        ;
      return C;
    }
    function jp(C, N) {
      for (var k = -1, Y = C == null ? 0 : C.length; ++k < Y; )
        if (!N(C[k], k, C))
          return !1;
      return !0;
    }
    function vo(C, N) {
      for (var k = -1, Y = C == null ? 0 : C.length, ie = 0, Ee = []; ++k < Y; ) {
        var mt = C[k];
        N(mt, k, C) && (Ee[ie++] = mt);
      }
      return Ee;
    }
    function yl(C, N) {
      var k = C == null ? 0 : C.length;
      return !!k && Ki(C, N, 0) > -1;
    }
    function Ec(C, N, k) {
      for (var Y = -1, ie = C == null ? 0 : C.length; ++Y < ie; )
        if (k(N, C[Y]))
          return !0;
      return !1;
    }
    function Ye(C, N) {
      for (var k = -1, Y = C == null ? 0 : C.length, ie = Array(Y); ++k < Y; )
        ie[k] = N(C[k], k, C);
      return ie;
    }
    function _o(C, N) {
      for (var k = -1, Y = N.length, ie = C.length; ++k < Y; )
        C[ie + k] = N[k];
      return C;
    }
    function Sc(C, N, k, Y) {
      var ie = -1, Ee = C == null ? 0 : C.length;
      for (Y && Ee && (k = C[++ie]); ++ie < Ee; )
        k = N(k, C[ie], ie, C);
      return k;
    }
    function c$(C, N, k, Y) {
      var ie = C == null ? 0 : C.length;
      for (Y && ie && (k = C[--ie]); ie--; )
        k = N(k, C[ie], ie, C);
      return k;
    }
    function Ic(C, N) {
      for (var k = -1, Y = C == null ? 0 : C.length; ++k < Y; )
        if (N(C[k], k, C))
          return !0;
      return !1;
    }
    var d$ = kc("length");
    function f$(C) {
      return C.split("");
    }
    function p$(C) {
      return C.match(Z) || [];
    }
    function Kp(C, N, k) {
      var Y;
      return k(C, function(ie, Ee, mt) {
        if (N(ie, Ee, mt))
          return Y = Ee, !1;
      }), Y;
    }
    function bl(C, N, k, Y) {
      for (var ie = C.length, Ee = k + (Y ? 1 : -1); Y ? Ee-- : ++Ee < ie; )
        if (N(C[Ee], Ee, C))
          return Ee;
      return -1;
    }
    function Ki(C, N, k) {
      return N === N ? E$(C, N, k) : bl(C, Zp, k);
    }
    function h$(C, N, k, Y) {
      for (var ie = k - 1, Ee = C.length; ++ie < Ee; )
        if (Y(C[ie], N))
          return ie;
      return -1;
    }
    function Zp(C) {
      return C !== C;
    }
    function Jp(C, N) {
      var k = C == null ? 0 : C.length;
      return k ? Tc(C, N) / k : Tr;
    }
    function kc(C) {
      return function(N) {
        return N == null ? r : N[C];
      };
    }
    function Ac(C) {
      return function(N) {
        return C == null ? r : C[N];
      };
    }
    function Xp(C, N, k, Y, ie) {
      return ie(C, function(Ee, mt, Ue) {
        k = Y ? (Y = !1, Ee) : N(k, Ee, mt, Ue);
      }), k;
    }
    function m$(C, N) {
      var k = C.length;
      for (C.sort(N); k--; )
        C[k] = C[k].value;
      return C;
    }
    function Tc(C, N) {
      for (var k, Y = -1, ie = C.length; ++Y < ie; ) {
        var Ee = N(C[Y]);
        Ee !== r && (k = k === r ? Ee : k + Ee);
      }
      return k;
    }
    function xc(C, N) {
      for (var k = -1, Y = Array(C); ++k < C; )
        Y[k] = N(k);
      return Y;
    }
    function w$(C, N) {
      return Ye(N, function(k) {
        return [k, C[k]];
      });
    }
    function Qp(C) {
      return C && C.slice(0, rh(C) + 1).replace(vr, "");
    }
    function bn(C) {
      return function(N) {
        return C(N);
      };
    }
    function Lc(C, N) {
      return Ye(N, function(k) {
        return C[k];
      });
    }
    function ia(C, N) {
      return C.has(N);
    }
    function eh(C, N) {
      for (var k = -1, Y = C.length; ++k < Y && Ki(N, C[k], 0) > -1; )
        ;
      return k;
    }
    function th(C, N) {
      for (var k = C.length; k-- && Ki(N, C[k], 0) > -1; )
        ;
      return k;
    }
    function v$(C, N) {
      for (var k = C.length, Y = 0; k--; )
        C[k] === N && ++Y;
      return Y;
    }
    var _$ = Ac(t$), g$ = Ac(n$);
    function $$(C) {
      return "\\" + o$[C];
    }
    function y$(C, N) {
      return C == null ? r : C[N];
    }
    function Zi(C) {
      return J0.test(C);
    }
    function b$(C) {
      return X0.test(C);
    }
    function C$(C) {
      for (var N, k = []; !(N = C.next()).done; )
        k.push(N.value);
      return k;
    }
    function Dc(C) {
      var N = -1, k = Array(C.size);
      return C.forEach(function(Y, ie) {
        k[++N] = [ie, Y];
      }), k;
    }
    function nh(C, N) {
      return function(k) {
        return C(N(k));
      };
    }
    function go(C, N) {
      for (var k = -1, Y = C.length, ie = 0, Ee = []; ++k < Y; ) {
        var mt = C[k];
        (mt === N || mt === g) && (C[k] = g, Ee[ie++] = k);
      }
      return Ee;
    }
    function Cl(C) {
      var N = -1, k = Array(C.size);
      return C.forEach(function(Y) {
        k[++N] = Y;
      }), k;
    }
    function V$(C) {
      var N = -1, k = Array(C.size);
      return C.forEach(function(Y) {
        k[++N] = [Y, Y];
      }), k;
    }
    function E$(C, N, k) {
      for (var Y = k - 1, ie = C.length; ++Y < ie; )
        if (C[Y] === N)
          return Y;
      return -1;
    }
    function S$(C, N, k) {
      for (var Y = k + 1; Y--; )
        if (C[Y] === N)
          return Y;
      return Y;
    }
    function Ji(C) {
      return Zi(C) ? k$(C) : d$(C);
    }
    function nr(C) {
      return Zi(C) ? A$(C) : f$(C);
    }
    function rh(C) {
      for (var N = C.length; N-- && ti.test(C.charAt(N)); )
        ;
      return N;
    }
    var I$ = Ac(r$);
    function k$(C) {
      for (var N = bc.lastIndex = 0; bc.test(C); )
        ++N;
      return N;
    }
    function A$(C) {
      return C.match(bc) || [];
    }
    function T$(C) {
      return C.match(Z0) || [];
    }
    var x$ = function C(N) {
      N = N == null ? Et : Xi.defaults(Et.Object(), N, Xi.pick(Et, Q0));
      var k = N.Array, Y = N.Date, ie = N.Error, Ee = N.Function, mt = N.Math, Ue = N.Object, Oc = N.RegExp, L$ = N.String, Pn = N.TypeError, Vl = k.prototype, D$ = Ee.prototype, Qi = Ue.prototype, El = N["__core-js_shared__"], Sl = D$.toString, De = Qi.hasOwnProperty, O$ = 0, oh = function() {
        var t = /[^.]+$/.exec(El && El.keys && El.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Il = Qi.toString, N$ = Sl.call(Ue), M$ = Et._, B$ = Oc(
        "^" + Sl.call(De).replace(lo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), kl = Up ? N.Buffer : r, $o = N.Symbol, Al = N.Uint8Array, ih = kl ? kl.allocUnsafe : r, Tl = nh(Ue.getPrototypeOf, Ue), sh = Ue.create, ah = Qi.propertyIsEnumerable, xl = Vl.splice, lh = $o ? $o.isConcatSpreadable : r, sa = $o ? $o.iterator : r, ui = $o ? $o.toStringTag : r, Ll = function() {
        try {
          var t = hi(Ue, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), R$ = N.clearTimeout !== Et.clearTimeout && N.clearTimeout, P$ = Y && Y.now !== Et.Date.now && Y.now, F$ = N.setTimeout !== Et.setTimeout && N.setTimeout, Dl = mt.ceil, Ol = mt.floor, Nc = Ue.getOwnPropertySymbols, U$ = kl ? kl.isBuffer : r, uh = N.isFinite, W$ = Vl.join, H$ = nh(Ue.keys, Ue), wt = mt.max, Rt = mt.min, z$ = Y.now, q$ = N.parseInt, ch = mt.random, G$ = Vl.reverse, Mc = hi(N, "DataView"), aa = hi(N, "Map"), Bc = hi(N, "Promise"), es = hi(N, "Set"), la = hi(N, "WeakMap"), ua = hi(Ue, "create"), Nl = la && new la(), ts = {}, Y$ = mi(Mc), j$ = mi(aa), K$ = mi(Bc), Z$ = mi(es), J$ = mi(la), Ml = $o ? $o.prototype : r, ca = Ml ? Ml.valueOf : r, dh = Ml ? Ml.toString : r;
      function p(t) {
        if (tt(t) && !se(t) && !(t instanceof we)) {
          if (t instanceof Fn)
            return t;
          if (De.call(t, "__wrapped__"))
            return fm(t);
        }
        return new Fn(t);
      }
      var ns = function() {
        function t() {
        }
        return function(o) {
          if (!Je(o))
            return {};
          if (sh)
            return sh(o);
          t.prototype = o;
          var i = new t();
          return t.prototype = r, i;
        };
      }();
      function Bl() {
      }
      function Fn(t, o) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r;
      }
      p.templateSettings = {
        escape: Mr,
        evaluate: Br,
        interpolate: Mt,
        variable: "",
        imports: {
          _: p
        }
      }, p.prototype = Bl.prototype, p.prototype.constructor = p, Fn.prototype = ns(Bl.prototype), Fn.prototype.constructor = Fn;
      function we(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = $e, this.__views__ = [];
      }
      function X$() {
        var t = new we(this.__wrapped__);
        return t.__actions__ = un(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = un(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = un(this.__views__), t;
      }
      function Q$() {
        if (this.__filtered__) {
          var t = new we(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function ey() {
        var t = this.__wrapped__.value(), o = this.__dir__, i = se(t), l = o < 0, d = i ? t.length : 0, h = fb(0, d, this.__views__), _ = h.start, $ = h.end, E = $ - _, R = l ? $ : _ - 1, P = this.__iteratees__, U = P.length, G = 0, K = Rt(E, this.__takeCount__);
        if (!i || !l && d == E && K == E)
          return Nh(t, this.__actions__);
        var te = [];
        e:
          for (; E-- && G < K; ) {
            R += o;
            for (var ue = -1, ne = t[R]; ++ue < U; ) {
              var me = P[ue], ge = me.iteratee, En = me.type, Jt = ge(ne);
              if (En == de)
                ne = Jt;
              else if (!Jt) {
                if (En == Pe)
                  continue e;
                break e;
              }
            }
            te[G++] = ne;
          }
        return te;
      }
      we.prototype = ns(Bl.prototype), we.prototype.constructor = we;
      function ci(t) {
        var o = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++o < i; ) {
          var l = t[o];
          this.set(l[0], l[1]);
        }
      }
      function ty() {
        this.__data__ = ua ? ua(null) : {}, this.size = 0;
      }
      function ny(t) {
        var o = this.has(t) && delete this.__data__[t];
        return this.size -= o ? 1 : 0, o;
      }
      function ry(t) {
        var o = this.__data__;
        if (ua) {
          var i = o[t];
          return i === m ? r : i;
        }
        return De.call(o, t) ? o[t] : r;
      }
      function oy(t) {
        var o = this.__data__;
        return ua ? o[t] !== r : De.call(o, t);
      }
      function iy(t, o) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = ua && o === r ? m : o, this;
      }
      ci.prototype.clear = ty, ci.prototype.delete = ny, ci.prototype.get = ry, ci.prototype.has = oy, ci.prototype.set = iy;
      function Fr(t) {
        var o = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++o < i; ) {
          var l = t[o];
          this.set(l[0], l[1]);
        }
      }
      function sy() {
        this.__data__ = [], this.size = 0;
      }
      function ay(t) {
        var o = this.__data__, i = Rl(o, t);
        if (i < 0)
          return !1;
        var l = o.length - 1;
        return i == l ? o.pop() : xl.call(o, i, 1), --this.size, !0;
      }
      function ly(t) {
        var o = this.__data__, i = Rl(o, t);
        return i < 0 ? r : o[i][1];
      }
      function uy(t) {
        return Rl(this.__data__, t) > -1;
      }
      function cy(t, o) {
        var i = this.__data__, l = Rl(i, t);
        return l < 0 ? (++this.size, i.push([t, o])) : i[l][1] = o, this;
      }
      Fr.prototype.clear = sy, Fr.prototype.delete = ay, Fr.prototype.get = ly, Fr.prototype.has = uy, Fr.prototype.set = cy;
      function Ur(t) {
        var o = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++o < i; ) {
          var l = t[o];
          this.set(l[0], l[1]);
        }
      }
      function dy() {
        this.size = 0, this.__data__ = {
          hash: new ci(),
          map: new (aa || Fr)(),
          string: new ci()
        };
      }
      function fy(t) {
        var o = Zl(this, t).delete(t);
        return this.size -= o ? 1 : 0, o;
      }
      function py(t) {
        return Zl(this, t).get(t);
      }
      function hy(t) {
        return Zl(this, t).has(t);
      }
      function my(t, o) {
        var i = Zl(this, t), l = i.size;
        return i.set(t, o), this.size += i.size == l ? 0 : 1, this;
      }
      Ur.prototype.clear = dy, Ur.prototype.delete = fy, Ur.prototype.get = py, Ur.prototype.has = hy, Ur.prototype.set = my;
      function di(t) {
        var o = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new Ur(); ++o < i; )
          this.add(t[o]);
      }
      function wy(t) {
        return this.__data__.set(t, m), this;
      }
      function vy(t) {
        return this.__data__.has(t);
      }
      di.prototype.add = di.prototype.push = wy, di.prototype.has = vy;
      function rr(t) {
        var o = this.__data__ = new Fr(t);
        this.size = o.size;
      }
      function _y() {
        this.__data__ = new Fr(), this.size = 0;
      }
      function gy(t) {
        var o = this.__data__, i = o.delete(t);
        return this.size = o.size, i;
      }
      function $y(t) {
        return this.__data__.get(t);
      }
      function yy(t) {
        return this.__data__.has(t);
      }
      function by(t, o) {
        var i = this.__data__;
        if (i instanceof Fr) {
          var l = i.__data__;
          if (!aa || l.length < a - 1)
            return l.push([t, o]), this.size = ++i.size, this;
          i = this.__data__ = new Ur(l);
        }
        return i.set(t, o), this.size = i.size, this;
      }
      rr.prototype.clear = _y, rr.prototype.delete = gy, rr.prototype.get = $y, rr.prototype.has = yy, rr.prototype.set = by;
      function fh(t, o) {
        var i = se(t), l = !i && wi(t), d = !i && !l && Eo(t), h = !i && !l && !d && ss(t), _ = i || l || d || h, $ = _ ? xc(t.length, L$) : [], E = $.length;
        for (var R in t)
          (o || De.call(t, R)) && !(_ && (R == "length" || d && (R == "offset" || R == "parent") || h && (R == "buffer" || R == "byteLength" || R == "byteOffset") || qr(R, E))) && $.push(R);
        return $;
      }
      function ph(t) {
        var o = t.length;
        return o ? t[jc(0, o - 1)] : r;
      }
      function Cy(t, o) {
        return Jl(un(t), fi(o, 0, t.length));
      }
      function Vy(t) {
        return Jl(un(t));
      }
      function Rc(t, o, i) {
        (i !== r && !or(t[o], i) || i === r && !(o in t)) && Wr(t, o, i);
      }
      function da(t, o, i) {
        var l = t[o];
        (!(De.call(t, o) && or(l, i)) || i === r && !(o in t)) && Wr(t, o, i);
      }
      function Rl(t, o) {
        for (var i = t.length; i--; )
          if (or(t[i][0], o))
            return i;
        return -1;
      }
      function Ey(t, o, i, l) {
        return yo(t, function(d, h, _) {
          o(l, d, i(d), _);
        }), l;
      }
      function hh(t, o) {
        return t && gr(o, gt(o), t);
      }
      function Sy(t, o) {
        return t && gr(o, dn(o), t);
      }
      function Wr(t, o, i) {
        o == "__proto__" && Ll ? Ll(t, o, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[o] = i;
      }
      function Pc(t, o) {
        for (var i = -1, l = o.length, d = k(l), h = t == null; ++i < l; )
          d[i] = h ? r : gd(t, o[i]);
        return d;
      }
      function fi(t, o, i) {
        return t === t && (i !== r && (t = t <= i ? t : i), o !== r && (t = t >= o ? t : o)), t;
      }
      function Un(t, o, i, l, d, h) {
        var _, $ = o & y, E = o & b, R = o & V;
        if (i && (_ = d ? i(t, l, d, h) : i(t)), _ !== r)
          return _;
        if (!Je(t))
          return t;
        var P = se(t);
        if (P) {
          if (_ = hb(t), !$)
            return un(t, _);
        } else {
          var U = Pt(t), G = U == xr || U == Re;
          if (Eo(t))
            return Rh(t, $);
          if (U == Ct || U == bt || G && !d) {
            if (_ = E || G ? {} : rm(t), !$)
              return E ? rb(t, Sy(_, t)) : nb(t, hh(_, t));
          } else {
            if (!We[U])
              return d ? t : {};
            _ = mb(t, U, $);
          }
        }
        h || (h = new rr());
        var K = h.get(t);
        if (K)
          return K;
        h.set(t, _), Lm(t) ? t.forEach(function(ne) {
          _.add(Un(ne, o, i, ne, t, h));
        }) : Tm(t) && t.forEach(function(ne, me) {
          _.set(me, Un(ne, o, i, me, t, h));
        });
        var te = R ? E ? id : od : E ? dn : gt, ue = P ? r : te(t);
        return Rn(ue || t, function(ne, me) {
          ue && (me = ne, ne = t[me]), da(_, me, Un(ne, o, i, me, t, h));
        }), _;
      }
      function Iy(t) {
        var o = gt(t);
        return function(i) {
          return mh(i, t, o);
        };
      }
      function mh(t, o, i) {
        var l = i.length;
        if (t == null)
          return !l;
        for (t = Ue(t); l--; ) {
          var d = i[l], h = o[d], _ = t[d];
          if (_ === r && !(d in t) || !h(_))
            return !1;
        }
        return !0;
      }
      function wh(t, o, i) {
        if (typeof t != "function")
          throw new Pn(c);
        return _a(function() {
          t.apply(r, i);
        }, o);
      }
      function fa(t, o, i, l) {
        var d = -1, h = yl, _ = !0, $ = t.length, E = [], R = o.length;
        if (!$)
          return E;
        i && (o = Ye(o, bn(i))), l ? (h = Ec, _ = !1) : o.length >= a && (h = ia, _ = !1, o = new di(o));
        e:
          for (; ++d < $; ) {
            var P = t[d], U = i == null ? P : i(P);
            if (P = l || P !== 0 ? P : 0, _ && U === U) {
              for (var G = R; G--; )
                if (o[G] === U)
                  continue e;
              E.push(P);
            } else
              h(o, U, l) || E.push(P);
          }
        return E;
      }
      var yo = Hh(_r), vh = Hh(Uc, !0);
      function ky(t, o) {
        var i = !0;
        return yo(t, function(l, d, h) {
          return i = !!o(l, d, h), i;
        }), i;
      }
      function Pl(t, o, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var h = t[l], _ = o(h);
          if (_ != null && ($ === r ? _ === _ && !Vn(_) : i(_, $)))
            var $ = _, E = h;
        }
        return E;
      }
      function Ay(t, o, i, l) {
        var d = t.length;
        for (i = le(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === r || l > d ? d : le(l), l < 0 && (l += d), l = i > l ? 0 : Om(l); i < l; )
          t[i++] = o;
        return t;
      }
      function _h(t, o) {
        var i = [];
        return yo(t, function(l, d, h) {
          o(l, d, h) && i.push(l);
        }), i;
      }
      function St(t, o, i, l, d) {
        var h = -1, _ = t.length;
        for (i || (i = vb), d || (d = []); ++h < _; ) {
          var $ = t[h];
          o > 0 && i($) ? o > 1 ? St($, o - 1, i, l, d) : _o(d, $) : l || (d[d.length] = $);
        }
        return d;
      }
      var Fc = zh(), gh = zh(!0);
      function _r(t, o) {
        return t && Fc(t, o, gt);
      }
      function Uc(t, o) {
        return t && gh(t, o, gt);
      }
      function Fl(t, o) {
        return vo(o, function(i) {
          return Gr(t[i]);
        });
      }
      function pi(t, o) {
        o = Co(o, t);
        for (var i = 0, l = o.length; t != null && i < l; )
          t = t[$r(o[i++])];
        return i && i == l ? t : r;
      }
      function $h(t, o, i) {
        var l = o(t);
        return se(t) ? l : _o(l, i(t));
      }
      function Kt(t) {
        return t == null ? t === r ? Lr : Dn : ui && ui in Ue(t) ? db(t) : Vb(t);
      }
      function Wc(t, o) {
        return t > o;
      }
      function Ty(t, o) {
        return t != null && De.call(t, o);
      }
      function xy(t, o) {
        return t != null && o in Ue(t);
      }
      function Ly(t, o, i) {
        return t >= Rt(o, i) && t < wt(o, i);
      }
      function Hc(t, o, i) {
        for (var l = i ? Ec : yl, d = t[0].length, h = t.length, _ = h, $ = k(h), E = 1 / 0, R = []; _--; ) {
          var P = t[_];
          _ && o && (P = Ye(P, bn(o))), E = Rt(P.length, E), $[_] = !i && (o || d >= 120 && P.length >= 120) ? new di(_ && P) : r;
        }
        P = t[0];
        var U = -1, G = $[0];
        e:
          for (; ++U < d && R.length < E; ) {
            var K = P[U], te = o ? o(K) : K;
            if (K = i || K !== 0 ? K : 0, !(G ? ia(G, te) : l(R, te, i))) {
              for (_ = h; --_; ) {
                var ue = $[_];
                if (!(ue ? ia(ue, te) : l(t[_], te, i)))
                  continue e;
              }
              G && G.push(te), R.push(K);
            }
          }
        return R;
      }
      function Dy(t, o, i, l) {
        return _r(t, function(d, h, _) {
          o(l, i(d), h, _);
        }), l;
      }
      function pa(t, o, i) {
        o = Co(o, t), t = am(t, o);
        var l = t == null ? t : t[$r(Hn(o))];
        return l == null ? r : yn(l, t, i);
      }
      function yh(t) {
        return tt(t) && Kt(t) == bt;
      }
      function Oy(t) {
        return tt(t) && Kt(t) == Jn;
      }
      function Ny(t) {
        return tt(t) && Kt(t) == sn;
      }
      function ha(t, o, i, l, d) {
        return t === o ? !0 : t == null || o == null || !tt(t) && !tt(o) ? t !== t && o !== o : My(t, o, i, l, ha, d);
      }
      function My(t, o, i, l, d, h) {
        var _ = se(t), $ = se(o), E = _ ? qt : Pt(t), R = $ ? qt : Pt(o);
        E = E == bt ? Ct : E, R = R == bt ? Ct : R;
        var P = E == Ct, U = R == Ct, G = E == R;
        if (G && Eo(t)) {
          if (!Eo(o))
            return !1;
          _ = !0, P = !1;
        }
        if (G && !P)
          return h || (h = new rr()), _ || ss(t) ? em(t, o, i, l, d, h) : ub(t, o, E, i, l, d, h);
        if (!(i & O)) {
          var K = P && De.call(t, "__wrapped__"), te = U && De.call(o, "__wrapped__");
          if (K || te) {
            var ue = K ? t.value() : t, ne = te ? o.value() : o;
            return h || (h = new rr()), d(ue, ne, i, l, h);
          }
        }
        return G ? (h || (h = new rr()), cb(t, o, i, l, d, h)) : !1;
      }
      function By(t) {
        return tt(t) && Pt(t) == Ot;
      }
      function zc(t, o, i, l) {
        var d = i.length, h = d, _ = !l;
        if (t == null)
          return !h;
        for (t = Ue(t); d--; ) {
          var $ = i[d];
          if (_ && $[2] ? $[1] !== t[$[0]] : !($[0] in t))
            return !1;
        }
        for (; ++d < h; ) {
          $ = i[d];
          var E = $[0], R = t[E], P = $[1];
          if (_ && $[2]) {
            if (R === r && !(E in t))
              return !1;
          } else {
            var U = new rr();
            if (l)
              var G = l(R, P, E, t, o, U);
            if (!(G === r ? ha(P, R, O | x, l, U) : G))
              return !1;
          }
        }
        return !0;
      }
      function bh(t) {
        if (!Je(t) || gb(t))
          return !1;
        var o = Gr(t) ? B$ : oi;
        return o.test(mi(t));
      }
      function Ry(t) {
        return tt(t) && Kt(t) == On;
      }
      function Py(t) {
        return tt(t) && Pt(t) == pt;
      }
      function Fy(t) {
        return tt(t) && ru(t.length) && !!qe[Kt(t)];
      }
      function Ch(t) {
        return typeof t == "function" ? t : t == null ? fn : typeof t == "object" ? se(t) ? Sh(t[0], t[1]) : Eh(t) : qm(t);
      }
      function qc(t) {
        if (!va(t))
          return H$(t);
        var o = [];
        for (var i in Ue(t))
          De.call(t, i) && i != "constructor" && o.push(i);
        return o;
      }
      function Uy(t) {
        if (!Je(t))
          return Cb(t);
        var o = va(t), i = [];
        for (var l in t)
          l == "constructor" && (o || !De.call(t, l)) || i.push(l);
        return i;
      }
      function Gc(t, o) {
        return t < o;
      }
      function Vh(t, o) {
        var i = -1, l = cn(t) ? k(t.length) : [];
        return yo(t, function(d, h, _) {
          l[++i] = o(d, h, _);
        }), l;
      }
      function Eh(t) {
        var o = ad(t);
        return o.length == 1 && o[0][2] ? im(o[0][0], o[0][1]) : function(i) {
          return i === t || zc(i, t, o);
        };
      }
      function Sh(t, o) {
        return ud(t) && om(o) ? im($r(t), o) : function(i) {
          var l = gd(i, t);
          return l === r && l === o ? $d(i, t) : ha(o, l, O | x);
        };
      }
      function Ul(t, o, i, l, d) {
        t !== o && Fc(o, function(h, _) {
          if (d || (d = new rr()), Je(h))
            Wy(t, o, _, i, Ul, l, d);
          else {
            var $ = l ? l(dd(t, _), h, _ + "", t, o, d) : r;
            $ === r && ($ = h), Rc(t, _, $);
          }
        }, dn);
      }
      function Wy(t, o, i, l, d, h, _) {
        var $ = dd(t, i), E = dd(o, i), R = _.get(E);
        if (R) {
          Rc(t, i, R);
          return;
        }
        var P = h ? h($, E, i + "", t, o, _) : r, U = P === r;
        if (U) {
          var G = se(E), K = !G && Eo(E), te = !G && !K && ss(E);
          P = E, G || K || te ? se($) ? P = $ : ot($) ? P = un($) : K ? (U = !1, P = Rh(E, !0)) : te ? (U = !1, P = Ph(E, !0)) : P = [] : ga(E) || wi(E) ? (P = $, wi($) ? P = Nm($) : (!Je($) || Gr($)) && (P = rm(E))) : U = !1;
        }
        U && (_.set(E, P), d(P, E, l, h, _), _.delete(E)), Rc(t, i, P);
      }
      function Ih(t, o) {
        var i = t.length;
        if (!!i)
          return o += o < 0 ? i : 0, qr(o, i) ? t[o] : r;
      }
      function kh(t, o, i) {
        o.length ? o = Ye(o, function(h) {
          return se(h) ? function(_) {
            return pi(_, h.length === 1 ? h[0] : h);
          } : h;
        }) : o = [fn];
        var l = -1;
        o = Ye(o, bn(ee()));
        var d = Vh(t, function(h, _, $) {
          var E = Ye(o, function(R) {
            return R(h);
          });
          return { criteria: E, index: ++l, value: h };
        });
        return m$(d, function(h, _) {
          return tb(h, _, i);
        });
      }
      function Hy(t, o) {
        return Ah(t, o, function(i, l) {
          return $d(t, l);
        });
      }
      function Ah(t, o, i) {
        for (var l = -1, d = o.length, h = {}; ++l < d; ) {
          var _ = o[l], $ = pi(t, _);
          i($, _) && ma(h, Co(_, t), $);
        }
        return h;
      }
      function zy(t) {
        return function(o) {
          return pi(o, t);
        };
      }
      function Yc(t, o, i, l) {
        var d = l ? h$ : Ki, h = -1, _ = o.length, $ = t;
        for (t === o && (o = un(o)), i && ($ = Ye(t, bn(i))); ++h < _; )
          for (var E = 0, R = o[h], P = i ? i(R) : R; (E = d($, P, E, l)) > -1; )
            $ !== t && xl.call($, E, 1), xl.call(t, E, 1);
        return t;
      }
      function Th(t, o) {
        for (var i = t ? o.length : 0, l = i - 1; i--; ) {
          var d = o[i];
          if (i == l || d !== h) {
            var h = d;
            qr(d) ? xl.call(t, d, 1) : Jc(t, d);
          }
        }
        return t;
      }
      function jc(t, o) {
        return t + Ol(ch() * (o - t + 1));
      }
      function qy(t, o, i, l) {
        for (var d = -1, h = wt(Dl((o - t) / (i || 1)), 0), _ = k(h); h--; )
          _[l ? h : ++d] = t, t += i;
        return _;
      }
      function Kc(t, o) {
        var i = "";
        if (!t || o < 1 || o > Be)
          return i;
        do
          o % 2 && (i += t), o = Ol(o / 2), o && (t += t);
        while (o);
        return i;
      }
      function fe(t, o) {
        return fd(sm(t, o, fn), t + "");
      }
      function Gy(t) {
        return ph(as(t));
      }
      function Yy(t, o) {
        var i = as(t);
        return Jl(i, fi(o, 0, i.length));
      }
      function ma(t, o, i, l) {
        if (!Je(t))
          return t;
        o = Co(o, t);
        for (var d = -1, h = o.length, _ = h - 1, $ = t; $ != null && ++d < h; ) {
          var E = $r(o[d]), R = i;
          if (E === "__proto__" || E === "constructor" || E === "prototype")
            return t;
          if (d != _) {
            var P = $[E];
            R = l ? l(P, E, $) : r, R === r && (R = Je(P) ? P : qr(o[d + 1]) ? [] : {});
          }
          da($, E, R), $ = $[E];
        }
        return t;
      }
      var xh = Nl ? function(t, o) {
        return Nl.set(t, o), t;
      } : fn, jy = Ll ? function(t, o) {
        return Ll(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: bd(o),
          writable: !0
        });
      } : fn;
      function Ky(t) {
        return Jl(as(t));
      }
      function Wn(t, o, i) {
        var l = -1, d = t.length;
        o < 0 && (o = -o > d ? 0 : d + o), i = i > d ? d : i, i < 0 && (i += d), d = o > i ? 0 : i - o >>> 0, o >>>= 0;
        for (var h = k(d); ++l < d; )
          h[l] = t[l + o];
        return h;
      }
      function Zy(t, o) {
        var i;
        return yo(t, function(l, d, h) {
          return i = o(l, d, h), !i;
        }), !!i;
      }
      function Wl(t, o, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof o == "number" && o === o && d <= Js) {
          for (; l < d; ) {
            var h = l + d >>> 1, _ = t[h];
            _ !== null && !Vn(_) && (i ? _ <= o : _ < o) ? l = h + 1 : d = h;
          }
          return d;
        }
        return Zc(t, o, fn, i);
      }
      function Zc(t, o, i, l) {
        var d = 0, h = t == null ? 0 : t.length;
        if (h === 0)
          return 0;
        o = i(o);
        for (var _ = o !== o, $ = o === null, E = Vn(o), R = o === r; d < h; ) {
          var P = Ol((d + h) / 2), U = i(t[P]), G = U !== r, K = U === null, te = U === U, ue = Vn(U);
          if (_)
            var ne = l || te;
          else
            R ? ne = te && (l || G) : $ ? ne = te && G && (l || !K) : E ? ne = te && G && !K && (l || !ue) : K || ue ? ne = !1 : ne = l ? U <= o : U < o;
          ne ? d = P + 1 : h = P;
        }
        return Rt(h, Zs);
      }
      function Lh(t, o) {
        for (var i = -1, l = t.length, d = 0, h = []; ++i < l; ) {
          var _ = t[i], $ = o ? o(_) : _;
          if (!i || !or($, E)) {
            var E = $;
            h[d++] = _ === 0 ? 0 : _;
          }
        }
        return h;
      }
      function Dh(t) {
        return typeof t == "number" ? t : Vn(t) ? Tr : +t;
      }
      function Cn(t) {
        if (typeof t == "string")
          return t;
        if (se(t))
          return Ye(t, Cn) + "";
        if (Vn(t))
          return dh ? dh.call(t) : "";
        var o = t + "";
        return o == "0" && 1 / t == -Ge ? "-0" : o;
      }
      function bo(t, o, i) {
        var l = -1, d = yl, h = t.length, _ = !0, $ = [], E = $;
        if (i)
          _ = !1, d = Ec;
        else if (h >= a) {
          var R = o ? null : ab(t);
          if (R)
            return Cl(R);
          _ = !1, d = ia, E = new di();
        } else
          E = o ? [] : $;
        e:
          for (; ++l < h; ) {
            var P = t[l], U = o ? o(P) : P;
            if (P = i || P !== 0 ? P : 0, _ && U === U) {
              for (var G = E.length; G--; )
                if (E[G] === U)
                  continue e;
              o && E.push(U), $.push(P);
            } else
              d(E, U, i) || (E !== $ && E.push(U), $.push(P));
          }
        return $;
      }
      function Jc(t, o) {
        return o = Co(o, t), t = am(t, o), t == null || delete t[$r(Hn(o))];
      }
      function Oh(t, o, i, l) {
        return ma(t, o, i(pi(t, o)), l);
      }
      function Hl(t, o, i, l) {
        for (var d = t.length, h = l ? d : -1; (l ? h-- : ++h < d) && o(t[h], h, t); )
          ;
        return i ? Wn(t, l ? 0 : h, l ? h + 1 : d) : Wn(t, l ? h + 1 : 0, l ? d : h);
      }
      function Nh(t, o) {
        var i = t;
        return i instanceof we && (i = i.value()), Sc(o, function(l, d) {
          return d.func.apply(d.thisArg, _o([l], d.args));
        }, i);
      }
      function Xc(t, o, i) {
        var l = t.length;
        if (l < 2)
          return l ? bo(t[0]) : [];
        for (var d = -1, h = k(l); ++d < l; )
          for (var _ = t[d], $ = -1; ++$ < l; )
            $ != d && (h[d] = fa(h[d] || _, t[$], o, i));
        return bo(St(h, 1), o, i);
      }
      function Mh(t, o, i) {
        for (var l = -1, d = t.length, h = o.length, _ = {}; ++l < d; ) {
          var $ = l < h ? o[l] : r;
          i(_, t[l], $);
        }
        return _;
      }
      function Qc(t) {
        return ot(t) ? t : [];
      }
      function ed(t) {
        return typeof t == "function" ? t : fn;
      }
      function Co(t, o) {
        return se(t) ? t : ud(t, o) ? [t] : dm(Ie(t));
      }
      var Jy = fe;
      function Vo(t, o, i) {
        var l = t.length;
        return i = i === r ? l : i, !o && i >= l ? t : Wn(t, o, i);
      }
      var Bh = R$ || function(t) {
        return Et.clearTimeout(t);
      };
      function Rh(t, o) {
        if (o)
          return t.slice();
        var i = t.length, l = ih ? ih(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function td(t) {
        var o = new t.constructor(t.byteLength);
        return new Al(o).set(new Al(t)), o;
      }
      function Xy(t, o) {
        var i = o ? td(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function Qy(t) {
        var o = new t.constructor(t.source, ni.exec(t));
        return o.lastIndex = t.lastIndex, o;
      }
      function eb(t) {
        return ca ? Ue(ca.call(t)) : {};
      }
      function Ph(t, o) {
        var i = o ? td(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function Fh(t, o) {
        if (t !== o) {
          var i = t !== r, l = t === null, d = t === t, h = Vn(t), _ = o !== r, $ = o === null, E = o === o, R = Vn(o);
          if (!$ && !R && !h && t > o || h && _ && E && !$ && !R || l && _ && E || !i && E || !d)
            return 1;
          if (!l && !h && !R && t < o || R && i && d && !l && !h || $ && i && d || !_ && d || !E)
            return -1;
        }
        return 0;
      }
      function tb(t, o, i) {
        for (var l = -1, d = t.criteria, h = o.criteria, _ = d.length, $ = i.length; ++l < _; ) {
          var E = Fh(d[l], h[l]);
          if (E) {
            if (l >= $)
              return E;
            var R = i[l];
            return E * (R == "desc" ? -1 : 1);
          }
        }
        return t.index - o.index;
      }
      function Uh(t, o, i, l) {
        for (var d = -1, h = t.length, _ = i.length, $ = -1, E = o.length, R = wt(h - _, 0), P = k(E + R), U = !l; ++$ < E; )
          P[$] = o[$];
        for (; ++d < _; )
          (U || d < h) && (P[i[d]] = t[d]);
        for (; R--; )
          P[$++] = t[d++];
        return P;
      }
      function Wh(t, o, i, l) {
        for (var d = -1, h = t.length, _ = -1, $ = i.length, E = -1, R = o.length, P = wt(h - $, 0), U = k(P + R), G = !l; ++d < P; )
          U[d] = t[d];
        for (var K = d; ++E < R; )
          U[K + E] = o[E];
        for (; ++_ < $; )
          (G || d < h) && (U[K + i[_]] = t[d++]);
        return U;
      }
      function un(t, o) {
        var i = -1, l = t.length;
        for (o || (o = k(l)); ++i < l; )
          o[i] = t[i];
        return o;
      }
      function gr(t, o, i, l) {
        var d = !i;
        i || (i = {});
        for (var h = -1, _ = o.length; ++h < _; ) {
          var $ = o[h], E = l ? l(i[$], t[$], $, i, t) : r;
          E === r && (E = t[$]), d ? Wr(i, $, E) : da(i, $, E);
        }
        return i;
      }
      function nb(t, o) {
        return gr(t, ld(t), o);
      }
      function rb(t, o) {
        return gr(t, tm(t), o);
      }
      function zl(t, o) {
        return function(i, l) {
          var d = se(i) ? l$ : Ey, h = o ? o() : {};
          return d(i, t, ee(l, 2), h);
        };
      }
      function rs(t) {
        return fe(function(o, i) {
          var l = -1, d = i.length, h = d > 1 ? i[d - 1] : r, _ = d > 2 ? i[2] : r;
          for (h = t.length > 3 && typeof h == "function" ? (d--, h) : r, _ && Zt(i[0], i[1], _) && (h = d < 3 ? r : h, d = 1), o = Ue(o); ++l < d; ) {
            var $ = i[l];
            $ && t(o, $, l, h);
          }
          return o;
        });
      }
      function Hh(t, o) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!cn(i))
            return t(i, l);
          for (var d = i.length, h = o ? d : -1, _ = Ue(i); (o ? h-- : ++h < d) && l(_[h], h, _) !== !1; )
            ;
          return i;
        };
      }
      function zh(t) {
        return function(o, i, l) {
          for (var d = -1, h = Ue(o), _ = l(o), $ = _.length; $--; ) {
            var E = _[t ? $ : ++d];
            if (i(h[E], E, h) === !1)
              break;
          }
          return o;
        };
      }
      function ob(t, o, i) {
        var l = o & D, d = wa(t);
        function h() {
          var _ = this && this !== Et && this instanceof h ? d : t;
          return _.apply(l ? i : this, arguments);
        }
        return h;
      }
      function qh(t) {
        return function(o) {
          o = Ie(o);
          var i = Zi(o) ? nr(o) : r, l = i ? i[0] : o.charAt(0), d = i ? Vo(i, 1).join("") : o.slice(1);
          return l[t]() + d;
        };
      }
      function os(t) {
        return function(o) {
          return Sc(Hm(Wm(o).replace(j0, "")), t, "");
        };
      }
      function wa(t) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new t();
            case 1:
              return new t(o[0]);
            case 2:
              return new t(o[0], o[1]);
            case 3:
              return new t(o[0], o[1], o[2]);
            case 4:
              return new t(o[0], o[1], o[2], o[3]);
            case 5:
              return new t(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new t(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new t(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var i = ns(t.prototype), l = t.apply(i, o);
          return Je(l) ? l : i;
        };
      }
      function ib(t, o, i) {
        var l = wa(t);
        function d() {
          for (var h = arguments.length, _ = k(h), $ = h, E = is(d); $--; )
            _[$] = arguments[$];
          var R = h < 3 && _[0] !== E && _[h - 1] !== E ? [] : go(_, E);
          if (h -= R.length, h < i)
            return Zh(
              t,
              o,
              ql,
              d.placeholder,
              r,
              _,
              R,
              r,
              r,
              i - h
            );
          var P = this && this !== Et && this instanceof d ? l : t;
          return yn(P, this, _);
        }
        return d;
      }
      function Gh(t) {
        return function(o, i, l) {
          var d = Ue(o);
          if (!cn(o)) {
            var h = ee(i, 3);
            o = gt(o), i = function($) {
              return h(d[$], $, d);
            };
          }
          var _ = t(o, i, l);
          return _ > -1 ? d[h ? o[_] : _] : r;
        };
      }
      function Yh(t) {
        return zr(function(o) {
          var i = o.length, l = i, d = Fn.prototype.thru;
          for (t && o.reverse(); l--; ) {
            var h = o[l];
            if (typeof h != "function")
              throw new Pn(c);
            if (d && !_ && Kl(h) == "wrapper")
              var _ = new Fn([], !0);
          }
          for (l = _ ? l : i; ++l < i; ) {
            h = o[l];
            var $ = Kl(h), E = $ == "wrapper" ? sd(h) : r;
            E && cd(E[0]) && E[1] == (L | T | F | X) && !E[4].length && E[9] == 1 ? _ = _[Kl(E[0])].apply(_, E[3]) : _ = h.length == 1 && cd(h) ? _[$]() : _.thru(h);
          }
          return function() {
            var R = arguments, P = R[0];
            if (_ && R.length == 1 && se(P))
              return _.plant(P).value();
            for (var U = 0, G = i ? o[U].apply(this, R) : P; ++U < i; )
              G = o[U].call(this, G);
            return G;
          };
        });
      }
      function ql(t, o, i, l, d, h, _, $, E, R) {
        var P = o & L, U = o & D, G = o & S, K = o & (T | B), te = o & Me, ue = G ? r : wa(t);
        function ne() {
          for (var me = arguments.length, ge = k(me), En = me; En--; )
            ge[En] = arguments[En];
          if (K)
            var Jt = is(ne), Sn = v$(ge, Jt);
          if (l && (ge = Uh(ge, l, d, K)), h && (ge = Wh(ge, h, _, K)), me -= Sn, K && me < R) {
            var it = go(ge, Jt);
            return Zh(
              t,
              o,
              ql,
              ne.placeholder,
              i,
              ge,
              it,
              $,
              E,
              R - me
            );
          }
          var ir = U ? i : this, jr = G ? ir[t] : t;
          return me = ge.length, $ ? ge = Eb(ge, $) : te && me > 1 && ge.reverse(), P && E < me && (ge.length = E), this && this !== Et && this instanceof ne && (jr = ue || wa(jr)), jr.apply(ir, ge);
        }
        return ne;
      }
      function jh(t, o) {
        return function(i, l) {
          return Dy(i, t, o(l), {});
        };
      }
      function Gl(t, o) {
        return function(i, l) {
          var d;
          if (i === r && l === r)
            return o;
          if (i !== r && (d = i), l !== r) {
            if (d === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = Cn(i), l = Cn(l)) : (i = Dh(i), l = Dh(l)), d = t(i, l);
          }
          return d;
        };
      }
      function nd(t) {
        return zr(function(o) {
          return o = Ye(o, bn(ee())), fe(function(i) {
            var l = this;
            return t(o, function(d) {
              return yn(d, l, i);
            });
          });
        });
      }
      function Yl(t, o) {
        o = o === r ? " " : Cn(o);
        var i = o.length;
        if (i < 2)
          return i ? Kc(o, t) : o;
        var l = Kc(o, Dl(t / Ji(o)));
        return Zi(o) ? Vo(nr(l), 0, t).join("") : l.slice(0, t);
      }
      function sb(t, o, i, l) {
        var d = o & D, h = wa(t);
        function _() {
          for (var $ = -1, E = arguments.length, R = -1, P = l.length, U = k(P + E), G = this && this !== Et && this instanceof _ ? h : t; ++R < P; )
            U[R] = l[R];
          for (; E--; )
            U[R++] = arguments[++$];
          return yn(G, d ? i : this, U);
        }
        return _;
      }
      function Kh(t) {
        return function(o, i, l) {
          return l && typeof l != "number" && Zt(o, i, l) && (i = l = r), o = Yr(o), i === r ? (i = o, o = 0) : i = Yr(i), l = l === r ? o < i ? 1 : -1 : Yr(l), qy(o, i, l, t);
        };
      }
      function jl(t) {
        return function(o, i) {
          return typeof o == "string" && typeof i == "string" || (o = zn(o), i = zn(i)), t(o, i);
        };
      }
      function Zh(t, o, i, l, d, h, _, $, E, R) {
        var P = o & T, U = P ? _ : r, G = P ? r : _, K = P ? h : r, te = P ? r : h;
        o |= P ? F : W, o &= ~(P ? W : F), o & A || (o &= ~(D | S));
        var ue = [
          t,
          o,
          d,
          K,
          U,
          te,
          G,
          $,
          E,
          R
        ], ne = i.apply(r, ue);
        return cd(t) && lm(ne, ue), ne.placeholder = l, um(ne, t, o);
      }
      function rd(t) {
        var o = mt[t];
        return function(i, l) {
          if (i = zn(i), l = l == null ? 0 : Rt(le(l), 292), l && uh(i)) {
            var d = (Ie(i) + "e").split("e"), h = o(d[0] + "e" + (+d[1] + l));
            return d = (Ie(h) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return o(i);
        };
      }
      var ab = es && 1 / Cl(new es([, -0]))[1] == Ge ? function(t) {
        return new es(t);
      } : Ed;
      function Jh(t) {
        return function(o) {
          var i = Pt(o);
          return i == Ot ? Dc(o) : i == pt ? V$(o) : w$(o, t(o));
        };
      }
      function Hr(t, o, i, l, d, h, _, $) {
        var E = o & S;
        if (!E && typeof t != "function")
          throw new Pn(c);
        var R = l ? l.length : 0;
        if (R || (o &= ~(F | W), l = d = r), _ = _ === r ? _ : wt(le(_), 0), $ = $ === r ? $ : le($), R -= d ? d.length : 0, o & W) {
          var P = l, U = d;
          l = d = r;
        }
        var G = E ? r : sd(t), K = [
          t,
          o,
          i,
          l,
          d,
          P,
          U,
          h,
          _,
          $
        ];
        if (G && bb(K, G), t = K[0], o = K[1], i = K[2], l = K[3], d = K[4], $ = K[9] = K[9] === r ? E ? 0 : t.length : wt(K[9] - R, 0), !$ && o & (T | B) && (o &= ~(T | B)), !o || o == D)
          var te = ob(t, o, i);
        else
          o == T || o == B ? te = ib(t, o, $) : (o == F || o == (D | F)) && !d.length ? te = sb(t, o, i, l) : te = ql.apply(r, K);
        var ue = G ? xh : lm;
        return um(ue(te, K), t, o);
      }
      function Xh(t, o, i, l) {
        return t === r || or(t, Qi[i]) && !De.call(l, i) ? o : t;
      }
      function Qh(t, o, i, l, d, h) {
        return Je(t) && Je(o) && (h.set(o, t), Ul(t, o, r, Qh, h), h.delete(o)), t;
      }
      function lb(t) {
        return ga(t) ? r : t;
      }
      function em(t, o, i, l, d, h) {
        var _ = i & O, $ = t.length, E = o.length;
        if ($ != E && !(_ && E > $))
          return !1;
        var R = h.get(t), P = h.get(o);
        if (R && P)
          return R == o && P == t;
        var U = -1, G = !0, K = i & x ? new di() : r;
        for (h.set(t, o), h.set(o, t); ++U < $; ) {
          var te = t[U], ue = o[U];
          if (l)
            var ne = _ ? l(ue, te, U, o, t, h) : l(te, ue, U, t, o, h);
          if (ne !== r) {
            if (ne)
              continue;
            G = !1;
            break;
          }
          if (K) {
            if (!Ic(o, function(me, ge) {
              if (!ia(K, ge) && (te === me || d(te, me, i, l, h)))
                return K.push(ge);
            })) {
              G = !1;
              break;
            }
          } else if (!(te === ue || d(te, ue, i, l, h))) {
            G = !1;
            break;
          }
        }
        return h.delete(t), h.delete(o), G;
      }
      function ub(t, o, i, l, d, h, _) {
        switch (i) {
          case gn:
            if (t.byteLength != o.byteLength || t.byteOffset != o.byteOffset)
              return !1;
            t = t.buffer, o = o.buffer;
          case Jn:
            return !(t.byteLength != o.byteLength || !h(new Al(t), new Al(o)));
          case _n:
          case sn:
          case be:
            return or(+t, +o);
          case xe:
            return t.name == o.name && t.message == o.message;
          case On:
          case pr:
            return t == o + "";
          case Ot:
            var $ = Dc;
          case pt:
            var E = l & O;
            if ($ || ($ = Cl), t.size != o.size && !E)
              return !1;
            var R = _.get(t);
            if (R)
              return R == o;
            l |= x, _.set(t, o);
            var P = em($(t), $(o), l, d, h, _);
            return _.delete(t), P;
          case ht:
            if (ca)
              return ca.call(t) == ca.call(o);
        }
        return !1;
      }
      function cb(t, o, i, l, d, h) {
        var _ = i & O, $ = od(t), E = $.length, R = od(o), P = R.length;
        if (E != P && !_)
          return !1;
        for (var U = E; U--; ) {
          var G = $[U];
          if (!(_ ? G in o : De.call(o, G)))
            return !1;
        }
        var K = h.get(t), te = h.get(o);
        if (K && te)
          return K == o && te == t;
        var ue = !0;
        h.set(t, o), h.set(o, t);
        for (var ne = _; ++U < E; ) {
          G = $[U];
          var me = t[G], ge = o[G];
          if (l)
            var En = _ ? l(ge, me, G, o, t, h) : l(me, ge, G, t, o, h);
          if (!(En === r ? me === ge || d(me, ge, i, l, h) : En)) {
            ue = !1;
            break;
          }
          ne || (ne = G == "constructor");
        }
        if (ue && !ne) {
          var Jt = t.constructor, Sn = o.constructor;
          Jt != Sn && "constructor" in t && "constructor" in o && !(typeof Jt == "function" && Jt instanceof Jt && typeof Sn == "function" && Sn instanceof Sn) && (ue = !1);
        }
        return h.delete(t), h.delete(o), ue;
      }
      function zr(t) {
        return fd(sm(t, r, mm), t + "");
      }
      function od(t) {
        return $h(t, gt, ld);
      }
      function id(t) {
        return $h(t, dn, tm);
      }
      var sd = Nl ? function(t) {
        return Nl.get(t);
      } : Ed;
      function Kl(t) {
        for (var o = t.name + "", i = ts[o], l = De.call(ts, o) ? i.length : 0; l--; ) {
          var d = i[l], h = d.func;
          if (h == null || h == t)
            return d.name;
        }
        return o;
      }
      function is(t) {
        var o = De.call(p, "placeholder") ? p : t;
        return o.placeholder;
      }
      function ee() {
        var t = p.iteratee || Cd;
        return t = t === Cd ? Ch : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Zl(t, o) {
        var i = t.__data__;
        return _b(o) ? i[typeof o == "string" ? "string" : "hash"] : i.map;
      }
      function ad(t) {
        for (var o = gt(t), i = o.length; i--; ) {
          var l = o[i], d = t[l];
          o[i] = [l, d, om(d)];
        }
        return o;
      }
      function hi(t, o) {
        var i = y$(t, o);
        return bh(i) ? i : r;
      }
      function db(t) {
        var o = De.call(t, ui), i = t[ui];
        try {
          t[ui] = r;
          var l = !0;
        } catch {
        }
        var d = Il.call(t);
        return l && (o ? t[ui] = i : delete t[ui]), d;
      }
      var ld = Nc ? function(t) {
        return t == null ? [] : (t = Ue(t), vo(Nc(t), function(o) {
          return ah.call(t, o);
        }));
      } : Sd, tm = Nc ? function(t) {
        for (var o = []; t; )
          _o(o, ld(t)), t = Tl(t);
        return o;
      } : Sd, Pt = Kt;
      (Mc && Pt(new Mc(new ArrayBuffer(1))) != gn || aa && Pt(new aa()) != Ot || Bc && Pt(Bc.resolve()) != Nt || es && Pt(new es()) != pt || la && Pt(new la()) != Gt) && (Pt = function(t) {
        var o = Kt(t), i = o == Ct ? t.constructor : r, l = i ? mi(i) : "";
        if (l)
          switch (l) {
            case Y$:
              return gn;
            case j$:
              return Ot;
            case K$:
              return Nt;
            case Z$:
              return pt;
            case J$:
              return Gt;
          }
        return o;
      });
      function fb(t, o, i) {
        for (var l = -1, d = i.length; ++l < d; ) {
          var h = i[l], _ = h.size;
          switch (h.type) {
            case "drop":
              t += _;
              break;
            case "dropRight":
              o -= _;
              break;
            case "take":
              o = Rt(o, t + _);
              break;
            case "takeRight":
              t = wt(t, o - _);
              break;
          }
        }
        return { start: t, end: o };
      }
      function pb(t) {
        var o = t.match(Wi);
        return o ? o[1].split(re) : [];
      }
      function nm(t, o, i) {
        o = Co(o, t);
        for (var l = -1, d = o.length, h = !1; ++l < d; ) {
          var _ = $r(o[l]);
          if (!(h = t != null && i(t, _)))
            break;
          t = t[_];
        }
        return h || ++l != d ? h : (d = t == null ? 0 : t.length, !!d && ru(d) && qr(_, d) && (se(t) || wi(t)));
      }
      function hb(t) {
        var o = t.length, i = new t.constructor(o);
        return o && typeof t[0] == "string" && De.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function rm(t) {
        return typeof t.constructor == "function" && !va(t) ? ns(Tl(t)) : {};
      }
      function mb(t, o, i) {
        var l = t.constructor;
        switch (o) {
          case Jn:
            return td(t);
          case _n:
          case sn:
            return new l(+t);
          case gn:
            return Xy(t, i);
          case hr:
          case $n:
          case Xn:
          case Qn:
          case Dr:
          case Or:
          case Nr:
          case mr:
          case wr:
            return Ph(t, i);
          case Ot:
            return new l();
          case be:
          case pr:
            return new l(t);
          case On:
            return Qy(t);
          case pt:
            return new l();
          case ht:
            return eb(t);
        }
      }
      function wb(t, o) {
        var i = o.length;
        if (!i)
          return t;
        var l = i - 1;
        return o[l] = (i > 1 ? "& " : "") + o[l], o = o.join(i > 2 ? ", " : " "), t.replace(uo, `{
/* [wrapped with ` + o + `] */
`);
      }
      function vb(t) {
        return se(t) || wi(t) || !!(lh && t && t[lh]);
      }
      function qr(t, o) {
        var i = typeof t;
        return o = o == null ? Be : o, !!o && (i == "number" || i != "symbol" && Hi.test(t)) && t > -1 && t % 1 == 0 && t < o;
      }
      function Zt(t, o, i) {
        if (!Je(i))
          return !1;
        var l = typeof o;
        return (l == "number" ? cn(i) && qr(o, i.length) : l == "string" && o in i) ? or(i[o], t) : !1;
      }
      function ud(t, o) {
        if (se(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || Vn(t) ? !0 : so.test(t) || !tr.test(t) || o != null && t in Ue(o);
      }
      function _b(t) {
        var o = typeof t;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? t !== "__proto__" : t === null;
      }
      function cd(t) {
        var o = Kl(t), i = p[o];
        if (typeof i != "function" || !(o in we.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = sd(i);
        return !!l && t === l[0];
      }
      function gb(t) {
        return !!oh && oh in t;
      }
      var $b = El ? Gr : Id;
      function va(t) {
        var o = t && t.constructor, i = typeof o == "function" && o.prototype || Qi;
        return t === i;
      }
      function om(t) {
        return t === t && !Je(t);
      }
      function im(t, o) {
        return function(i) {
          return i == null ? !1 : i[t] === o && (o !== r || t in Ue(i));
        };
      }
      function yb(t) {
        var o = tu(t, function(l) {
          return i.size === w && i.clear(), l;
        }), i = o.cache;
        return o;
      }
      function bb(t, o) {
        var i = t[1], l = o[1], d = i | l, h = d < (D | S | L), _ = l == L && i == T || l == L && i == X && t[7].length <= o[8] || l == (L | X) && o[7].length <= o[8] && i == T;
        if (!(h || _))
          return t;
        l & D && (t[2] = o[2], d |= i & D ? 0 : A);
        var $ = o[3];
        if ($) {
          var E = t[3];
          t[3] = E ? Uh(E, $, o[4]) : $, t[4] = E ? go(t[3], g) : o[4];
        }
        return $ = o[5], $ && (E = t[5], t[5] = E ? Wh(E, $, o[6]) : $, t[6] = E ? go(t[5], g) : o[6]), $ = o[7], $ && (t[7] = $), l & L && (t[8] = t[8] == null ? o[8] : Rt(t[8], o[8])), t[9] == null && (t[9] = o[9]), t[0] = o[0], t[1] = d, t;
      }
      function Cb(t) {
        var o = [];
        if (t != null)
          for (var i in Ue(t))
            o.push(i);
        return o;
      }
      function Vb(t) {
        return Il.call(t);
      }
      function sm(t, o, i) {
        return o = wt(o === r ? t.length - 1 : o, 0), function() {
          for (var l = arguments, d = -1, h = wt(l.length - o, 0), _ = k(h); ++d < h; )
            _[d] = l[o + d];
          d = -1;
          for (var $ = k(o + 1); ++d < o; )
            $[d] = l[d];
          return $[o] = i(_), yn(t, this, $);
        };
      }
      function am(t, o) {
        return o.length < 2 ? t : pi(t, Wn(o, 0, -1));
      }
      function Eb(t, o) {
        for (var i = t.length, l = Rt(o.length, i), d = un(t); l--; ) {
          var h = o[l];
          t[l] = qr(h, i) ? d[h] : r;
        }
        return t;
      }
      function dd(t, o) {
        if (!(o === "constructor" && typeof t[o] == "function") && o != "__proto__")
          return t[o];
      }
      var lm = cm(xh), _a = F$ || function(t, o) {
        return Et.setTimeout(t, o);
      }, fd = cm(jy);
      function um(t, o, i) {
        var l = o + "";
        return fd(t, wb(l, Sb(pb(l), i)));
      }
      function cm(t) {
        var o = 0, i = 0;
        return function() {
          var l = z$(), d = et - (l - i);
          if (i = l, d > 0) {
            if (++o >= Qe)
              return arguments[0];
          } else
            o = 0;
          return t.apply(r, arguments);
        };
      }
      function Jl(t, o) {
        var i = -1, l = t.length, d = l - 1;
        for (o = o === r ? l : o; ++i < o; ) {
          var h = jc(i, d), _ = t[h];
          t[h] = t[i], t[i] = _;
        }
        return t.length = o, t;
      }
      var dm = yb(function(t) {
        var o = [];
        return t.charCodeAt(0) === 46 && o.push(""), t.replace(ao, function(i, l, d, h) {
          o.push(d ? h.replace(Q, "$1") : l || i);
        }), o;
      });
      function $r(t) {
        if (typeof t == "string" || Vn(t))
          return t;
        var o = t + "";
        return o == "0" && 1 / t == -Ge ? "-0" : o;
      }
      function mi(t) {
        if (t != null) {
          try {
            return Sl.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function Sb(t, o) {
        return Rn(Ui, function(i) {
          var l = "_." + i[0];
          o & i[1] && !yl(t, l) && t.push(l);
        }), t.sort();
      }
      function fm(t) {
        if (t instanceof we)
          return t.clone();
        var o = new Fn(t.__wrapped__, t.__chain__);
        return o.__actions__ = un(t.__actions__), o.__index__ = t.__index__, o.__values__ = t.__values__, o;
      }
      function Ib(t, o, i) {
        (i ? Zt(t, o, i) : o === r) ? o = 1 : o = wt(le(o), 0);
        var l = t == null ? 0 : t.length;
        if (!l || o < 1)
          return [];
        for (var d = 0, h = 0, _ = k(Dl(l / o)); d < l; )
          _[h++] = Wn(t, d, d += o);
        return _;
      }
      function kb(t) {
        for (var o = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++o < i; ) {
          var h = t[o];
          h && (d[l++] = h);
        }
        return d;
      }
      function Ab() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var o = k(t - 1), i = arguments[0], l = t; l--; )
          o[l - 1] = arguments[l];
        return _o(se(i) ? un(i) : [i], St(o, 1));
      }
      var Tb = fe(function(t, o) {
        return ot(t) ? fa(t, St(o, 1, ot, !0)) : [];
      }), xb = fe(function(t, o) {
        var i = Hn(o);
        return ot(i) && (i = r), ot(t) ? fa(t, St(o, 1, ot, !0), ee(i, 2)) : [];
      }), Lb = fe(function(t, o) {
        var i = Hn(o);
        return ot(i) && (i = r), ot(t) ? fa(t, St(o, 1, ot, !0), r, i) : [];
      });
      function Db(t, o, i) {
        var l = t == null ? 0 : t.length;
        return l ? (o = i || o === r ? 1 : le(o), Wn(t, o < 0 ? 0 : o, l)) : [];
      }
      function Ob(t, o, i) {
        var l = t == null ? 0 : t.length;
        return l ? (o = i || o === r ? 1 : le(o), o = l - o, Wn(t, 0, o < 0 ? 0 : o)) : [];
      }
      function Nb(t, o) {
        return t && t.length ? Hl(t, ee(o, 3), !0, !0) : [];
      }
      function Mb(t, o) {
        return t && t.length ? Hl(t, ee(o, 3), !0) : [];
      }
      function Bb(t, o, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && Zt(t, o, i) && (i = 0, l = d), Ay(t, o, i, l)) : [];
      }
      function pm(t, o, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : le(i);
        return d < 0 && (d = wt(l + d, 0)), bl(t, ee(o, 3), d);
      }
      function hm(t, o, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== r && (d = le(i), d = i < 0 ? wt(l + d, 0) : Rt(d, l - 1)), bl(t, ee(o, 3), d, !0);
      }
      function mm(t) {
        var o = t == null ? 0 : t.length;
        return o ? St(t, 1) : [];
      }
      function Rb(t) {
        var o = t == null ? 0 : t.length;
        return o ? St(t, Ge) : [];
      }
      function Pb(t, o) {
        var i = t == null ? 0 : t.length;
        return i ? (o = o === r ? 1 : le(o), St(t, o)) : [];
      }
      function Fb(t) {
        for (var o = -1, i = t == null ? 0 : t.length, l = {}; ++o < i; ) {
          var d = t[o];
          l[d[0]] = d[1];
        }
        return l;
      }
      function wm(t) {
        return t && t.length ? t[0] : r;
      }
      function Ub(t, o, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : le(i);
        return d < 0 && (d = wt(l + d, 0)), Ki(t, o, d);
      }
      function Wb(t) {
        var o = t == null ? 0 : t.length;
        return o ? Wn(t, 0, -1) : [];
      }
      var Hb = fe(function(t) {
        var o = Ye(t, Qc);
        return o.length && o[0] === t[0] ? Hc(o) : [];
      }), zb = fe(function(t) {
        var o = Hn(t), i = Ye(t, Qc);
        return o === Hn(i) ? o = r : i.pop(), i.length && i[0] === t[0] ? Hc(i, ee(o, 2)) : [];
      }), qb = fe(function(t) {
        var o = Hn(t), i = Ye(t, Qc);
        return o = typeof o == "function" ? o : r, o && i.pop(), i.length && i[0] === t[0] ? Hc(i, r, o) : [];
      });
      function Gb(t, o) {
        return t == null ? "" : W$.call(t, o);
      }
      function Hn(t) {
        var o = t == null ? 0 : t.length;
        return o ? t[o - 1] : r;
      }
      function Yb(t, o, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== r && (d = le(i), d = d < 0 ? wt(l + d, 0) : Rt(d, l - 1)), o === o ? S$(t, o, d) : bl(t, Zp, d, !0);
      }
      function jb(t, o) {
        return t && t.length ? Ih(t, le(o)) : r;
      }
      var Kb = fe(vm);
      function vm(t, o) {
        return t && t.length && o && o.length ? Yc(t, o) : t;
      }
      function Zb(t, o, i) {
        return t && t.length && o && o.length ? Yc(t, o, ee(i, 2)) : t;
      }
      function Jb(t, o, i) {
        return t && t.length && o && o.length ? Yc(t, o, r, i) : t;
      }
      var Xb = zr(function(t, o) {
        var i = t == null ? 0 : t.length, l = Pc(t, o);
        return Th(t, Ye(o, function(d) {
          return qr(d, i) ? +d : d;
        }).sort(Fh)), l;
      });
      function Qb(t, o) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, d = [], h = t.length;
        for (o = ee(o, 3); ++l < h; ) {
          var _ = t[l];
          o(_, l, t) && (i.push(_), d.push(l));
        }
        return Th(t, d), i;
      }
      function pd(t) {
        return t == null ? t : G$.call(t);
      }
      function eC(t, o, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && Zt(t, o, i) ? (o = 0, i = l) : (o = o == null ? 0 : le(o), i = i === r ? l : le(i)), Wn(t, o, i)) : [];
      }
      function tC(t, o) {
        return Wl(t, o);
      }
      function nC(t, o, i) {
        return Zc(t, o, ee(i, 2));
      }
      function rC(t, o) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Wl(t, o);
          if (l < i && or(t[l], o))
            return l;
        }
        return -1;
      }
      function oC(t, o) {
        return Wl(t, o, !0);
      }
      function iC(t, o, i) {
        return Zc(t, o, ee(i, 2), !0);
      }
      function sC(t, o) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Wl(t, o, !0) - 1;
          if (or(t[l], o))
            return l;
        }
        return -1;
      }
      function aC(t) {
        return t && t.length ? Lh(t) : [];
      }
      function lC(t, o) {
        return t && t.length ? Lh(t, ee(o, 2)) : [];
      }
      function uC(t) {
        var o = t == null ? 0 : t.length;
        return o ? Wn(t, 1, o) : [];
      }
      function cC(t, o, i) {
        return t && t.length ? (o = i || o === r ? 1 : le(o), Wn(t, 0, o < 0 ? 0 : o)) : [];
      }
      function dC(t, o, i) {
        var l = t == null ? 0 : t.length;
        return l ? (o = i || o === r ? 1 : le(o), o = l - o, Wn(t, o < 0 ? 0 : o, l)) : [];
      }
      function fC(t, o) {
        return t && t.length ? Hl(t, ee(o, 3), !1, !0) : [];
      }
      function pC(t, o) {
        return t && t.length ? Hl(t, ee(o, 3)) : [];
      }
      var hC = fe(function(t) {
        return bo(St(t, 1, ot, !0));
      }), mC = fe(function(t) {
        var o = Hn(t);
        return ot(o) && (o = r), bo(St(t, 1, ot, !0), ee(o, 2));
      }), wC = fe(function(t) {
        var o = Hn(t);
        return o = typeof o == "function" ? o : r, bo(St(t, 1, ot, !0), r, o);
      });
      function vC(t) {
        return t && t.length ? bo(t) : [];
      }
      function _C(t, o) {
        return t && t.length ? bo(t, ee(o, 2)) : [];
      }
      function gC(t, o) {
        return o = typeof o == "function" ? o : r, t && t.length ? bo(t, r, o) : [];
      }
      function hd(t) {
        if (!(t && t.length))
          return [];
        var o = 0;
        return t = vo(t, function(i) {
          if (ot(i))
            return o = wt(i.length, o), !0;
        }), xc(o, function(i) {
          return Ye(t, kc(i));
        });
      }
      function _m(t, o) {
        if (!(t && t.length))
          return [];
        var i = hd(t);
        return o == null ? i : Ye(i, function(l) {
          return yn(o, r, l);
        });
      }
      var $C = fe(function(t, o) {
        return ot(t) ? fa(t, o) : [];
      }), yC = fe(function(t) {
        return Xc(vo(t, ot));
      }), bC = fe(function(t) {
        var o = Hn(t);
        return ot(o) && (o = r), Xc(vo(t, ot), ee(o, 2));
      }), CC = fe(function(t) {
        var o = Hn(t);
        return o = typeof o == "function" ? o : r, Xc(vo(t, ot), r, o);
      }), VC = fe(hd);
      function EC(t, o) {
        return Mh(t || [], o || [], da);
      }
      function SC(t, o) {
        return Mh(t || [], o || [], ma);
      }
      var IC = fe(function(t) {
        var o = t.length, i = o > 1 ? t[o - 1] : r;
        return i = typeof i == "function" ? (t.pop(), i) : r, _m(t, i);
      });
      function gm(t) {
        var o = p(t);
        return o.__chain__ = !0, o;
      }
      function kC(t, o) {
        return o(t), t;
      }
      function Xl(t, o) {
        return o(t);
      }
      var AC = zr(function(t) {
        var o = t.length, i = o ? t[0] : 0, l = this.__wrapped__, d = function(h) {
          return Pc(h, t);
        };
        return o > 1 || this.__actions__.length || !(l instanceof we) || !qr(i) ? this.thru(d) : (l = l.slice(i, +i + (o ? 1 : 0)), l.__actions__.push({
          func: Xl,
          args: [d],
          thisArg: r
        }), new Fn(l, this.__chain__).thru(function(h) {
          return o && !h.length && h.push(r), h;
        }));
      });
      function TC() {
        return gm(this);
      }
      function xC() {
        return new Fn(this.value(), this.__chain__);
      }
      function LC() {
        this.__values__ === r && (this.__values__ = Dm(this.value()));
        var t = this.__index__ >= this.__values__.length, o = t ? r : this.__values__[this.__index__++];
        return { done: t, value: o };
      }
      function DC() {
        return this;
      }
      function OC(t) {
        for (var o, i = this; i instanceof Bl; ) {
          var l = fm(i);
          l.__index__ = 0, l.__values__ = r, o ? d.__wrapped__ = l : o = l;
          var d = l;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = t, o;
      }
      function NC() {
        var t = this.__wrapped__;
        if (t instanceof we) {
          var o = t;
          return this.__actions__.length && (o = new we(this)), o = o.reverse(), o.__actions__.push({
            func: Xl,
            args: [pd],
            thisArg: r
          }), new Fn(o, this.__chain__);
        }
        return this.thru(pd);
      }
      function MC() {
        return Nh(this.__wrapped__, this.__actions__);
      }
      var BC = zl(function(t, o, i) {
        De.call(t, i) ? ++t[i] : Wr(t, i, 1);
      });
      function RC(t, o, i) {
        var l = se(t) ? jp : ky;
        return i && Zt(t, o, i) && (o = r), l(t, ee(o, 3));
      }
      function PC(t, o) {
        var i = se(t) ? vo : _h;
        return i(t, ee(o, 3));
      }
      var FC = Gh(pm), UC = Gh(hm);
      function WC(t, o) {
        return St(Ql(t, o), 1);
      }
      function HC(t, o) {
        return St(Ql(t, o), Ge);
      }
      function zC(t, o, i) {
        return i = i === r ? 1 : le(i), St(Ql(t, o), i);
      }
      function $m(t, o) {
        var i = se(t) ? Rn : yo;
        return i(t, ee(o, 3));
      }
      function ym(t, o) {
        var i = se(t) ? u$ : vh;
        return i(t, ee(o, 3));
      }
      var qC = zl(function(t, o, i) {
        De.call(t, i) ? t[i].push(o) : Wr(t, i, [o]);
      });
      function GC(t, o, i, l) {
        t = cn(t) ? t : as(t), i = i && !l ? le(i) : 0;
        var d = t.length;
        return i < 0 && (i = wt(d + i, 0)), ou(t) ? i <= d && t.indexOf(o, i) > -1 : !!d && Ki(t, o, i) > -1;
      }
      var YC = fe(function(t, o, i) {
        var l = -1, d = typeof o == "function", h = cn(t) ? k(t.length) : [];
        return yo(t, function(_) {
          h[++l] = d ? yn(o, _, i) : pa(_, o, i);
        }), h;
      }), jC = zl(function(t, o, i) {
        Wr(t, i, o);
      });
      function Ql(t, o) {
        var i = se(t) ? Ye : Vh;
        return i(t, ee(o, 3));
      }
      function KC(t, o, i, l) {
        return t == null ? [] : (se(o) || (o = o == null ? [] : [o]), i = l ? r : i, se(i) || (i = i == null ? [] : [i]), kh(t, o, i));
      }
      var ZC = zl(function(t, o, i) {
        t[i ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function JC(t, o, i) {
        var l = se(t) ? Sc : Xp, d = arguments.length < 3;
        return l(t, ee(o, 4), i, d, yo);
      }
      function XC(t, o, i) {
        var l = se(t) ? c$ : Xp, d = arguments.length < 3;
        return l(t, ee(o, 4), i, d, vh);
      }
      function QC(t, o) {
        var i = se(t) ? vo : _h;
        return i(t, nu(ee(o, 3)));
      }
      function eV(t) {
        var o = se(t) ? ph : Gy;
        return o(t);
      }
      function tV(t, o, i) {
        (i ? Zt(t, o, i) : o === r) ? o = 1 : o = le(o);
        var l = se(t) ? Cy : Yy;
        return l(t, o);
      }
      function nV(t) {
        var o = se(t) ? Vy : Ky;
        return o(t);
      }
      function rV(t) {
        if (t == null)
          return 0;
        if (cn(t))
          return ou(t) ? Ji(t) : t.length;
        var o = Pt(t);
        return o == Ot || o == pt ? t.size : qc(t).length;
      }
      function oV(t, o, i) {
        var l = se(t) ? Ic : Zy;
        return i && Zt(t, o, i) && (o = r), l(t, ee(o, 3));
      }
      var iV = fe(function(t, o) {
        if (t == null)
          return [];
        var i = o.length;
        return i > 1 && Zt(t, o[0], o[1]) ? o = [] : i > 2 && Zt(o[0], o[1], o[2]) && (o = [o[0]]), kh(t, St(o, 1), []);
      }), eu = P$ || function() {
        return Et.Date.now();
      };
      function sV(t, o) {
        if (typeof o != "function")
          throw new Pn(c);
        return t = le(t), function() {
          if (--t < 1)
            return o.apply(this, arguments);
        };
      }
      function bm(t, o, i) {
        return o = i ? r : o, o = t && o == null ? t.length : o, Hr(t, L, r, r, r, r, o);
      }
      function Cm(t, o) {
        var i;
        if (typeof o != "function")
          throw new Pn(c);
        return t = le(t), function() {
          return --t > 0 && (i = o.apply(this, arguments)), t <= 1 && (o = r), i;
        };
      }
      var md = fe(function(t, o, i) {
        var l = D;
        if (i.length) {
          var d = go(i, is(md));
          l |= F;
        }
        return Hr(t, l, o, i, d);
      }), Vm = fe(function(t, o, i) {
        var l = D | S;
        if (i.length) {
          var d = go(i, is(Vm));
          l |= F;
        }
        return Hr(o, l, t, i, d);
      });
      function Em(t, o, i) {
        o = i ? r : o;
        var l = Hr(t, T, r, r, r, r, r, o);
        return l.placeholder = Em.placeholder, l;
      }
      function Sm(t, o, i) {
        o = i ? r : o;
        var l = Hr(t, B, r, r, r, r, r, o);
        return l.placeholder = Sm.placeholder, l;
      }
      function Im(t, o, i) {
        var l, d, h, _, $, E, R = 0, P = !1, U = !1, G = !0;
        if (typeof t != "function")
          throw new Pn(c);
        o = zn(o) || 0, Je(i) && (P = !!i.leading, U = "maxWait" in i, h = U ? wt(zn(i.maxWait) || 0, o) : h, G = "trailing" in i ? !!i.trailing : G);
        function K(it) {
          var ir = l, jr = d;
          return l = d = r, R = it, _ = t.apply(jr, ir), _;
        }
        function te(it) {
          return R = it, $ = _a(me, o), P ? K(it) : _;
        }
        function ue(it) {
          var ir = it - E, jr = it - R, Gm = o - ir;
          return U ? Rt(Gm, h - jr) : Gm;
        }
        function ne(it) {
          var ir = it - E, jr = it - R;
          return E === r || ir >= o || ir < 0 || U && jr >= h;
        }
        function me() {
          var it = eu();
          if (ne(it))
            return ge(it);
          $ = _a(me, ue(it));
        }
        function ge(it) {
          return $ = r, G && l ? K(it) : (l = d = r, _);
        }
        function En() {
          $ !== r && Bh($), R = 0, l = E = d = $ = r;
        }
        function Jt() {
          return $ === r ? _ : ge(eu());
        }
        function Sn() {
          var it = eu(), ir = ne(it);
          if (l = arguments, d = this, E = it, ir) {
            if ($ === r)
              return te(E);
            if (U)
              return Bh($), $ = _a(me, o), K(E);
          }
          return $ === r && ($ = _a(me, o)), _;
        }
        return Sn.cancel = En, Sn.flush = Jt, Sn;
      }
      var aV = fe(function(t, o) {
        return wh(t, 1, o);
      }), lV = fe(function(t, o, i) {
        return wh(t, zn(o) || 0, i);
      });
      function uV(t) {
        return Hr(t, Me);
      }
      function tu(t, o) {
        if (typeof t != "function" || o != null && typeof o != "function")
          throw new Pn(c);
        var i = function() {
          var l = arguments, d = o ? o.apply(this, l) : l[0], h = i.cache;
          if (h.has(d))
            return h.get(d);
          var _ = t.apply(this, l);
          return i.cache = h.set(d, _) || h, _;
        };
        return i.cache = new (tu.Cache || Ur)(), i;
      }
      tu.Cache = Ur;
      function nu(t) {
        if (typeof t != "function")
          throw new Pn(c);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, o[0]);
            case 2:
              return !t.call(this, o[0], o[1]);
            case 3:
              return !t.call(this, o[0], o[1], o[2]);
          }
          return !t.apply(this, o);
        };
      }
      function cV(t) {
        return Cm(2, t);
      }
      var dV = Jy(function(t, o) {
        o = o.length == 1 && se(o[0]) ? Ye(o[0], bn(ee())) : Ye(St(o, 1), bn(ee()));
        var i = o.length;
        return fe(function(l) {
          for (var d = -1, h = Rt(l.length, i); ++d < h; )
            l[d] = o[d].call(this, l[d]);
          return yn(t, this, l);
        });
      }), wd = fe(function(t, o) {
        var i = go(o, is(wd));
        return Hr(t, F, r, o, i);
      }), km = fe(function(t, o) {
        var i = go(o, is(km));
        return Hr(t, W, r, o, i);
      }), fV = zr(function(t, o) {
        return Hr(t, X, r, r, r, o);
      });
      function pV(t, o) {
        if (typeof t != "function")
          throw new Pn(c);
        return o = o === r ? o : le(o), fe(t, o);
      }
      function hV(t, o) {
        if (typeof t != "function")
          throw new Pn(c);
        return o = o == null ? 0 : wt(le(o), 0), fe(function(i) {
          var l = i[o], d = Vo(i, 0, o);
          return l && _o(d, l), yn(t, this, d);
        });
      }
      function mV(t, o, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new Pn(c);
        return Je(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), Im(t, o, {
          leading: l,
          maxWait: o,
          trailing: d
        });
      }
      function wV(t) {
        return bm(t, 1);
      }
      function vV(t, o) {
        return wd(ed(o), t);
      }
      function _V() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return se(t) ? t : [t];
      }
      function gV(t) {
        return Un(t, V);
      }
      function $V(t, o) {
        return o = typeof o == "function" ? o : r, Un(t, V, o);
      }
      function yV(t) {
        return Un(t, y | V);
      }
      function bV(t, o) {
        return o = typeof o == "function" ? o : r, Un(t, y | V, o);
      }
      function CV(t, o) {
        return o == null || mh(t, o, gt(o));
      }
      function or(t, o) {
        return t === o || t !== t && o !== o;
      }
      var VV = jl(Wc), EV = jl(function(t, o) {
        return t >= o;
      }), wi = yh(function() {
        return arguments;
      }()) ? yh : function(t) {
        return tt(t) && De.call(t, "callee") && !ah.call(t, "callee");
      }, se = k.isArray, SV = Wp ? bn(Wp) : Oy;
      function cn(t) {
        return t != null && ru(t.length) && !Gr(t);
      }
      function ot(t) {
        return tt(t) && cn(t);
      }
      function IV(t) {
        return t === !0 || t === !1 || tt(t) && Kt(t) == _n;
      }
      var Eo = U$ || Id, kV = Hp ? bn(Hp) : Ny;
      function AV(t) {
        return tt(t) && t.nodeType === 1 && !ga(t);
      }
      function TV(t) {
        if (t == null)
          return !0;
        if (cn(t) && (se(t) || typeof t == "string" || typeof t.splice == "function" || Eo(t) || ss(t) || wi(t)))
          return !t.length;
        var o = Pt(t);
        if (o == Ot || o == pt)
          return !t.size;
        if (va(t))
          return !qc(t).length;
        for (var i in t)
          if (De.call(t, i))
            return !1;
        return !0;
      }
      function xV(t, o) {
        return ha(t, o);
      }
      function LV(t, o, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(t, o) : r;
        return l === r ? ha(t, o, r, i) : !!l;
      }
      function vd(t) {
        if (!tt(t))
          return !1;
        var o = Kt(t);
        return o == xe || o == Zo || typeof t.message == "string" && typeof t.name == "string" && !ga(t);
      }
      function DV(t) {
        return typeof t == "number" && uh(t);
      }
      function Gr(t) {
        if (!Je(t))
          return !1;
        var o = Kt(t);
        return o == xr || o == Re || o == on || o == Jo;
      }
      function Am(t) {
        return typeof t == "number" && t == le(t);
      }
      function ru(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Be;
      }
      function Je(t) {
        var o = typeof t;
        return t != null && (o == "object" || o == "function");
      }
      function tt(t) {
        return t != null && typeof t == "object";
      }
      var Tm = zp ? bn(zp) : By;
      function OV(t, o) {
        return t === o || zc(t, o, ad(o));
      }
      function NV(t, o, i) {
        return i = typeof i == "function" ? i : r, zc(t, o, ad(o), i);
      }
      function MV(t) {
        return xm(t) && t != +t;
      }
      function BV(t) {
        if ($b(t))
          throw new ie(u);
        return bh(t);
      }
      function RV(t) {
        return t === null;
      }
      function PV(t) {
        return t == null;
      }
      function xm(t) {
        return typeof t == "number" || tt(t) && Kt(t) == be;
      }
      function ga(t) {
        if (!tt(t) || Kt(t) != Ct)
          return !1;
        var o = Tl(t);
        if (o === null)
          return !0;
        var i = De.call(o, "constructor") && o.constructor;
        return typeof i == "function" && i instanceof i && Sl.call(i) == N$;
      }
      var _d = qp ? bn(qp) : Ry;
      function FV(t) {
        return Am(t) && t >= -Be && t <= Be;
      }
      var Lm = Gp ? bn(Gp) : Py;
      function ou(t) {
        return typeof t == "string" || !se(t) && tt(t) && Kt(t) == pr;
      }
      function Vn(t) {
        return typeof t == "symbol" || tt(t) && Kt(t) == ht;
      }
      var ss = Yp ? bn(Yp) : Fy;
      function UV(t) {
        return t === r;
      }
      function WV(t) {
        return tt(t) && Pt(t) == Gt;
      }
      function HV(t) {
        return tt(t) && Kt(t) == Xo;
      }
      var zV = jl(Gc), qV = jl(function(t, o) {
        return t <= o;
      });
      function Dm(t) {
        if (!t)
          return [];
        if (cn(t))
          return ou(t) ? nr(t) : un(t);
        if (sa && t[sa])
          return C$(t[sa]());
        var o = Pt(t), i = o == Ot ? Dc : o == pt ? Cl : as;
        return i(t);
      }
      function Yr(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = zn(t), t === Ge || t === -Ge) {
          var o = t < 0 ? -1 : 1;
          return o * rn;
        }
        return t === t ? t : 0;
      }
      function le(t) {
        var o = Yr(t), i = o % 1;
        return o === o ? i ? o - i : o : 0;
      }
      function Om(t) {
        return t ? fi(le(t), 0, $e) : 0;
      }
      function zn(t) {
        if (typeof t == "number")
          return t;
        if (Vn(t))
          return Tr;
        if (Je(t)) {
          var o = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Je(o) ? o + "" : o;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Qp(t);
        var i = co.test(t);
        return i || ii.test(t) ? s$(t.slice(2), i ? 2 : 8) : ri.test(t) ? Tr : +t;
      }
      function Nm(t) {
        return gr(t, dn(t));
      }
      function GV(t) {
        return t ? fi(le(t), -Be, Be) : t === 0 ? t : 0;
      }
      function Ie(t) {
        return t == null ? "" : Cn(t);
      }
      var YV = rs(function(t, o) {
        if (va(o) || cn(o)) {
          gr(o, gt(o), t);
          return;
        }
        for (var i in o)
          De.call(o, i) && da(t, i, o[i]);
      }), Mm = rs(function(t, o) {
        gr(o, dn(o), t);
      }), iu = rs(function(t, o, i, l) {
        gr(o, dn(o), t, l);
      }), jV = rs(function(t, o, i, l) {
        gr(o, gt(o), t, l);
      }), KV = zr(Pc);
      function ZV(t, o) {
        var i = ns(t);
        return o == null ? i : hh(i, o);
      }
      var JV = fe(function(t, o) {
        t = Ue(t);
        var i = -1, l = o.length, d = l > 2 ? o[2] : r;
        for (d && Zt(o[0], o[1], d) && (l = 1); ++i < l; )
          for (var h = o[i], _ = dn(h), $ = -1, E = _.length; ++$ < E; ) {
            var R = _[$], P = t[R];
            (P === r || or(P, Qi[R]) && !De.call(t, R)) && (t[R] = h[R]);
          }
        return t;
      }), XV = fe(function(t) {
        return t.push(r, Qh), yn(Bm, r, t);
      });
      function QV(t, o) {
        return Kp(t, ee(o, 3), _r);
      }
      function eE(t, o) {
        return Kp(t, ee(o, 3), Uc);
      }
      function tE(t, o) {
        return t == null ? t : Fc(t, ee(o, 3), dn);
      }
      function nE(t, o) {
        return t == null ? t : gh(t, ee(o, 3), dn);
      }
      function rE(t, o) {
        return t && _r(t, ee(o, 3));
      }
      function oE(t, o) {
        return t && Uc(t, ee(o, 3));
      }
      function iE(t) {
        return t == null ? [] : Fl(t, gt(t));
      }
      function sE(t) {
        return t == null ? [] : Fl(t, dn(t));
      }
      function gd(t, o, i) {
        var l = t == null ? r : pi(t, o);
        return l === r ? i : l;
      }
      function aE(t, o) {
        return t != null && nm(t, o, Ty);
      }
      function $d(t, o) {
        return t != null && nm(t, o, xy);
      }
      var lE = jh(function(t, o, i) {
        o != null && typeof o.toString != "function" && (o = Il.call(o)), t[o] = i;
      }, bd(fn)), uE = jh(function(t, o, i) {
        o != null && typeof o.toString != "function" && (o = Il.call(o)), De.call(t, o) ? t[o].push(i) : t[o] = [i];
      }, ee), cE = fe(pa);
      function gt(t) {
        return cn(t) ? fh(t) : qc(t);
      }
      function dn(t) {
        return cn(t) ? fh(t, !0) : Uy(t);
      }
      function dE(t, o) {
        var i = {};
        return o = ee(o, 3), _r(t, function(l, d, h) {
          Wr(i, o(l, d, h), l);
        }), i;
      }
      function fE(t, o) {
        var i = {};
        return o = ee(o, 3), _r(t, function(l, d, h) {
          Wr(i, d, o(l, d, h));
        }), i;
      }
      var pE = rs(function(t, o, i) {
        Ul(t, o, i);
      }), Bm = rs(function(t, o, i, l) {
        Ul(t, o, i, l);
      }), hE = zr(function(t, o) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        o = Ye(o, function(h) {
          return h = Co(h, t), l || (l = h.length > 1), h;
        }), gr(t, id(t), i), l && (i = Un(i, y | b | V, lb));
        for (var d = o.length; d--; )
          Jc(i, o[d]);
        return i;
      });
      function mE(t, o) {
        return Rm(t, nu(ee(o)));
      }
      var wE = zr(function(t, o) {
        return t == null ? {} : Hy(t, o);
      });
      function Rm(t, o) {
        if (t == null)
          return {};
        var i = Ye(id(t), function(l) {
          return [l];
        });
        return o = ee(o), Ah(t, i, function(l, d) {
          return o(l, d[0]);
        });
      }
      function vE(t, o, i) {
        o = Co(o, t);
        var l = -1, d = o.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var h = t == null ? r : t[$r(o[l])];
          h === r && (l = d, h = i), t = Gr(h) ? h.call(t) : h;
        }
        return t;
      }
      function _E(t, o, i) {
        return t == null ? t : ma(t, o, i);
      }
      function gE(t, o, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : ma(t, o, i, l);
      }
      var Pm = Jh(gt), Fm = Jh(dn);
      function $E(t, o, i) {
        var l = se(t), d = l || Eo(t) || ss(t);
        if (o = ee(o, 4), i == null) {
          var h = t && t.constructor;
          d ? i = l ? new h() : [] : Je(t) ? i = Gr(h) ? ns(Tl(t)) : {} : i = {};
        }
        return (d ? Rn : _r)(t, function(_, $, E) {
          return o(i, _, $, E);
        }), i;
      }
      function yE(t, o) {
        return t == null ? !0 : Jc(t, o);
      }
      function bE(t, o, i) {
        return t == null ? t : Oh(t, o, ed(i));
      }
      function CE(t, o, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Oh(t, o, ed(i), l);
      }
      function as(t) {
        return t == null ? [] : Lc(t, gt(t));
      }
      function VE(t) {
        return t == null ? [] : Lc(t, dn(t));
      }
      function EE(t, o, i) {
        return i === r && (i = o, o = r), i !== r && (i = zn(i), i = i === i ? i : 0), o !== r && (o = zn(o), o = o === o ? o : 0), fi(zn(t), o, i);
      }
      function SE(t, o, i) {
        return o = Yr(o), i === r ? (i = o, o = 0) : i = Yr(i), t = zn(t), Ly(t, o, i);
      }
      function IE(t, o, i) {
        if (i && typeof i != "boolean" && Zt(t, o, i) && (o = i = r), i === r && (typeof o == "boolean" ? (i = o, o = r) : typeof t == "boolean" && (i = t, t = r)), t === r && o === r ? (t = 0, o = 1) : (t = Yr(t), o === r ? (o = t, t = 0) : o = Yr(o)), t > o) {
          var l = t;
          t = o, o = l;
        }
        if (i || t % 1 || o % 1) {
          var d = ch();
          return Rt(t + d * (o - t + i$("1e-" + ((d + "").length - 1))), o);
        }
        return jc(t, o);
      }
      var kE = os(function(t, o, i) {
        return o = o.toLowerCase(), t + (i ? Um(o) : o);
      });
      function Um(t) {
        return yd(Ie(t).toLowerCase());
      }
      function Wm(t) {
        return t = Ie(t), t && t.replace(zi, _$).replace(K0, "");
      }
      function AE(t, o, i) {
        t = Ie(t), o = Cn(o);
        var l = t.length;
        i = i === r ? l : fi(le(i), 0, l);
        var d = i;
        return i -= o.length, i >= 0 && t.slice(i, d) == o;
      }
      function TE(t) {
        return t = Ie(t), t && Qo.test(t) ? t.replace(oo, g$) : t;
      }
      function xE(t) {
        return t = Ie(t), t && ei.test(t) ? t.replace(lo, "\\$&") : t;
      }
      var LE = os(function(t, o, i) {
        return t + (i ? "-" : "") + o.toLowerCase();
      }), DE = os(function(t, o, i) {
        return t + (i ? " " : "") + o.toLowerCase();
      }), OE = qh("toLowerCase");
      function NE(t, o, i) {
        t = Ie(t), o = le(o);
        var l = o ? Ji(t) : 0;
        if (!o || l >= o)
          return t;
        var d = (o - l) / 2;
        return Yl(Ol(d), i) + t + Yl(Dl(d), i);
      }
      function ME(t, o, i) {
        t = Ie(t), o = le(o);
        var l = o ? Ji(t) : 0;
        return o && l < o ? t + Yl(o - l, i) : t;
      }
      function BE(t, o, i) {
        t = Ie(t), o = le(o);
        var l = o ? Ji(t) : 0;
        return o && l < o ? Yl(o - l, i) + t : t;
      }
      function RE(t, o, i) {
        return i || o == null ? o = 0 : o && (o = +o), q$(Ie(t).replace(vr, ""), o || 0);
      }
      function PE(t, o, i) {
        return (i ? Zt(t, o, i) : o === r) ? o = 1 : o = le(o), Kc(Ie(t), o);
      }
      function FE() {
        var t = arguments, o = Ie(t[0]);
        return t.length < 3 ? o : o.replace(t[1], t[2]);
      }
      var UE = os(function(t, o, i) {
        return t + (i ? "_" : "") + o.toLowerCase();
      });
      function WE(t, o, i) {
        return i && typeof i != "number" && Zt(t, o, i) && (o = i = r), i = i === r ? $e : i >>> 0, i ? (t = Ie(t), t && (typeof o == "string" || o != null && !_d(o)) && (o = Cn(o), !o && Zi(t)) ? Vo(nr(t), 0, i) : t.split(o, i)) : [];
      }
      var HE = os(function(t, o, i) {
        return t + (i ? " " : "") + yd(o);
      });
      function zE(t, o, i) {
        return t = Ie(t), i = i == null ? 0 : fi(le(i), 0, t.length), o = Cn(o), t.slice(i, i + o.length) == o;
      }
      function qE(t, o, i) {
        var l = p.templateSettings;
        i && Zt(t, o, i) && (o = r), t = Ie(t), o = iu({}, o, l, Xh);
        var d = iu({}, o.imports, l.imports, Xh), h = gt(d), _ = Lc(d, h), $, E, R = 0, P = o.interpolate || Rr, U = "__p += '", G = Oc(
          (o.escape || Rr).source + "|" + P.source + "|" + (P === Mt ? an : Rr).source + "|" + (o.evaluate || Rr).source + "|$",
          "g"
        ), K = "//# sourceURL=" + (De.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++e$ + "]") + `
`;
        t.replace(G, function(ne, me, ge, En, Jt, Sn) {
          return ge || (ge = En), U += t.slice(R, Sn).replace(qi, $$), me && ($ = !0, U += `' +
__e(` + me + `) +
'`), Jt && (E = !0, U += `';
` + Jt + `;
__p += '`), ge && (U += `' +
((__t = (` + ge + `)) == null ? '' : __t) +
'`), R = Sn + ne.length, ne;
        }), U += `';
`;
        var te = De.call(o, "variable") && o.variable;
        if (!te)
          U = `with (obj) {
` + U + `
}
`;
        else if (Le.test(te))
          throw new ie(f);
        U = (E ? U.replace(er, "") : U).replace(Yt, "$1").replace(no, "$1;"), U = "function(" + (te || "obj") + `) {
` + (te ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + ($ ? ", __e = _.escape" : "") + (E ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + U + `return __p
}`;
        var ue = zm(function() {
          return Ee(h, K + "return " + U).apply(r, _);
        });
        if (ue.source = U, vd(ue))
          throw ue;
        return ue;
      }
      function GE(t) {
        return Ie(t).toLowerCase();
      }
      function YE(t) {
        return Ie(t).toUpperCase();
      }
      function jE(t, o, i) {
        if (t = Ie(t), t && (i || o === r))
          return Qp(t);
        if (!t || !(o = Cn(o)))
          return t;
        var l = nr(t), d = nr(o), h = eh(l, d), _ = th(l, d) + 1;
        return Vo(l, h, _).join("");
      }
      function KE(t, o, i) {
        if (t = Ie(t), t && (i || o === r))
          return t.slice(0, rh(t) + 1);
        if (!t || !(o = Cn(o)))
          return t;
        var l = nr(t), d = th(l, nr(o)) + 1;
        return Vo(l, 0, d).join("");
      }
      function ZE(t, o, i) {
        if (t = Ie(t), t && (i || o === r))
          return t.replace(vr, "");
        if (!t || !(o = Cn(o)))
          return t;
        var l = nr(t), d = eh(l, nr(o));
        return Vo(l, d).join("");
      }
      function JE(t, o) {
        var i = he, l = Te;
        if (Je(o)) {
          var d = "separator" in o ? o.separator : d;
          i = "length" in o ? le(o.length) : i, l = "omission" in o ? Cn(o.omission) : l;
        }
        t = Ie(t);
        var h = t.length;
        if (Zi(t)) {
          var _ = nr(t);
          h = _.length;
        }
        if (i >= h)
          return t;
        var $ = i - Ji(l);
        if ($ < 1)
          return l;
        var E = _ ? Vo(_, 0, $).join("") : t.slice(0, $);
        if (d === r)
          return E + l;
        if (_ && ($ += E.length - $), _d(d)) {
          if (t.slice($).search(d)) {
            var R, P = E;
            for (d.global || (d = Oc(d.source, Ie(ni.exec(d)) + "g")), d.lastIndex = 0; R = d.exec(P); )
              var U = R.index;
            E = E.slice(0, U === r ? $ : U);
          }
        } else if (t.indexOf(Cn(d), $) != $) {
          var G = E.lastIndexOf(d);
          G > -1 && (E = E.slice(0, G));
        }
        return E + l;
      }
      function XE(t) {
        return t = Ie(t), t && io.test(t) ? t.replace(ro, I$) : t;
      }
      var QE = os(function(t, o, i) {
        return t + (i ? " " : "") + o.toUpperCase();
      }), yd = qh("toUpperCase");
      function Hm(t, o, i) {
        return t = Ie(t), o = i ? r : o, o === r ? b$(t) ? T$(t) : p$(t) : t.match(o) || [];
      }
      var zm = fe(function(t, o) {
        try {
          return yn(t, r, o);
        } catch (i) {
          return vd(i) ? i : new ie(i);
        }
      }), eS = zr(function(t, o) {
        return Rn(o, function(i) {
          i = $r(i), Wr(t, i, md(t[i], t));
        }), t;
      });
      function tS(t) {
        var o = t == null ? 0 : t.length, i = ee();
        return t = o ? Ye(t, function(l) {
          if (typeof l[1] != "function")
            throw new Pn(c);
          return [i(l[0]), l[1]];
        }) : [], fe(function(l) {
          for (var d = -1; ++d < o; ) {
            var h = t[d];
            if (yn(h[0], this, l))
              return yn(h[1], this, l);
          }
        });
      }
      function nS(t) {
        return Iy(Un(t, y));
      }
      function bd(t) {
        return function() {
          return t;
        };
      }
      function rS(t, o) {
        return t == null || t !== t ? o : t;
      }
      var oS = Yh(), iS = Yh(!0);
      function fn(t) {
        return t;
      }
      function Cd(t) {
        return Ch(typeof t == "function" ? t : Un(t, y));
      }
      function sS(t) {
        return Eh(Un(t, y));
      }
      function aS(t, o) {
        return Sh(t, Un(o, y));
      }
      var lS = fe(function(t, o) {
        return function(i) {
          return pa(i, t, o);
        };
      }), uS = fe(function(t, o) {
        return function(i) {
          return pa(t, i, o);
        };
      });
      function Vd(t, o, i) {
        var l = gt(o), d = Fl(o, l);
        i == null && !(Je(o) && (d.length || !l.length)) && (i = o, o = t, t = this, d = Fl(o, gt(o)));
        var h = !(Je(i) && "chain" in i) || !!i.chain, _ = Gr(t);
        return Rn(d, function($) {
          var E = o[$];
          t[$] = E, _ && (t.prototype[$] = function() {
            var R = this.__chain__;
            if (h || R) {
              var P = t(this.__wrapped__), U = P.__actions__ = un(this.__actions__);
              return U.push({ func: E, args: arguments, thisArg: t }), P.__chain__ = R, P;
            }
            return E.apply(t, _o([this.value()], arguments));
          });
        }), t;
      }
      function cS() {
        return Et._ === this && (Et._ = M$), this;
      }
      function Ed() {
      }
      function dS(t) {
        return t = le(t), fe(function(o) {
          return Ih(o, t);
        });
      }
      var fS = nd(Ye), pS = nd(jp), hS = nd(Ic);
      function qm(t) {
        return ud(t) ? kc($r(t)) : zy(t);
      }
      function mS(t) {
        return function(o) {
          return t == null ? r : pi(t, o);
        };
      }
      var wS = Kh(), vS = Kh(!0);
      function Sd() {
        return [];
      }
      function Id() {
        return !1;
      }
      function _S() {
        return {};
      }
      function gS() {
        return "";
      }
      function $S() {
        return !0;
      }
      function yS(t, o) {
        if (t = le(t), t < 1 || t > Be)
          return [];
        var i = $e, l = Rt(t, $e);
        o = ee(o), t -= $e;
        for (var d = xc(l, o); ++i < t; )
          o(i);
        return d;
      }
      function bS(t) {
        return se(t) ? Ye(t, $r) : Vn(t) ? [t] : un(dm(Ie(t)));
      }
      function CS(t) {
        var o = ++O$;
        return Ie(t) + o;
      }
      var VS = Gl(function(t, o) {
        return t + o;
      }, 0), ES = rd("ceil"), SS = Gl(function(t, o) {
        return t / o;
      }, 1), IS = rd("floor");
      function kS(t) {
        return t && t.length ? Pl(t, fn, Wc) : r;
      }
      function AS(t, o) {
        return t && t.length ? Pl(t, ee(o, 2), Wc) : r;
      }
      function TS(t) {
        return Jp(t, fn);
      }
      function xS(t, o) {
        return Jp(t, ee(o, 2));
      }
      function LS(t) {
        return t && t.length ? Pl(t, fn, Gc) : r;
      }
      function DS(t, o) {
        return t && t.length ? Pl(t, ee(o, 2), Gc) : r;
      }
      var OS = Gl(function(t, o) {
        return t * o;
      }, 1), NS = rd("round"), MS = Gl(function(t, o) {
        return t - o;
      }, 0);
      function BS(t) {
        return t && t.length ? Tc(t, fn) : 0;
      }
      function RS(t, o) {
        return t && t.length ? Tc(t, ee(o, 2)) : 0;
      }
      return p.after = sV, p.ary = bm, p.assign = YV, p.assignIn = Mm, p.assignInWith = iu, p.assignWith = jV, p.at = KV, p.before = Cm, p.bind = md, p.bindAll = eS, p.bindKey = Vm, p.castArray = _V, p.chain = gm, p.chunk = Ib, p.compact = kb, p.concat = Ab, p.cond = tS, p.conforms = nS, p.constant = bd, p.countBy = BC, p.create = ZV, p.curry = Em, p.curryRight = Sm, p.debounce = Im, p.defaults = JV, p.defaultsDeep = XV, p.defer = aV, p.delay = lV, p.difference = Tb, p.differenceBy = xb, p.differenceWith = Lb, p.drop = Db, p.dropRight = Ob, p.dropRightWhile = Nb, p.dropWhile = Mb, p.fill = Bb, p.filter = PC, p.flatMap = WC, p.flatMapDeep = HC, p.flatMapDepth = zC, p.flatten = mm, p.flattenDeep = Rb, p.flattenDepth = Pb, p.flip = uV, p.flow = oS, p.flowRight = iS, p.fromPairs = Fb, p.functions = iE, p.functionsIn = sE, p.groupBy = qC, p.initial = Wb, p.intersection = Hb, p.intersectionBy = zb, p.intersectionWith = qb, p.invert = lE, p.invertBy = uE, p.invokeMap = YC, p.iteratee = Cd, p.keyBy = jC, p.keys = gt, p.keysIn = dn, p.map = Ql, p.mapKeys = dE, p.mapValues = fE, p.matches = sS, p.matchesProperty = aS, p.memoize = tu, p.merge = pE, p.mergeWith = Bm, p.method = lS, p.methodOf = uS, p.mixin = Vd, p.negate = nu, p.nthArg = dS, p.omit = hE, p.omitBy = mE, p.once = cV, p.orderBy = KC, p.over = fS, p.overArgs = dV, p.overEvery = pS, p.overSome = hS, p.partial = wd, p.partialRight = km, p.partition = ZC, p.pick = wE, p.pickBy = Rm, p.property = qm, p.propertyOf = mS, p.pull = Kb, p.pullAll = vm, p.pullAllBy = Zb, p.pullAllWith = Jb, p.pullAt = Xb, p.range = wS, p.rangeRight = vS, p.rearg = fV, p.reject = QC, p.remove = Qb, p.rest = pV, p.reverse = pd, p.sampleSize = tV, p.set = _E, p.setWith = gE, p.shuffle = nV, p.slice = eC, p.sortBy = iV, p.sortedUniq = aC, p.sortedUniqBy = lC, p.split = WE, p.spread = hV, p.tail = uC, p.take = cC, p.takeRight = dC, p.takeRightWhile = fC, p.takeWhile = pC, p.tap = kC, p.throttle = mV, p.thru = Xl, p.toArray = Dm, p.toPairs = Pm, p.toPairsIn = Fm, p.toPath = bS, p.toPlainObject = Nm, p.transform = $E, p.unary = wV, p.union = hC, p.unionBy = mC, p.unionWith = wC, p.uniq = vC, p.uniqBy = _C, p.uniqWith = gC, p.unset = yE, p.unzip = hd, p.unzipWith = _m, p.update = bE, p.updateWith = CE, p.values = as, p.valuesIn = VE, p.without = $C, p.words = Hm, p.wrap = vV, p.xor = yC, p.xorBy = bC, p.xorWith = CC, p.zip = VC, p.zipObject = EC, p.zipObjectDeep = SC, p.zipWith = IC, p.entries = Pm, p.entriesIn = Fm, p.extend = Mm, p.extendWith = iu, Vd(p, p), p.add = VS, p.attempt = zm, p.camelCase = kE, p.capitalize = Um, p.ceil = ES, p.clamp = EE, p.clone = gV, p.cloneDeep = yV, p.cloneDeepWith = bV, p.cloneWith = $V, p.conformsTo = CV, p.deburr = Wm, p.defaultTo = rS, p.divide = SS, p.endsWith = AE, p.eq = or, p.escape = TE, p.escapeRegExp = xE, p.every = RC, p.find = FC, p.findIndex = pm, p.findKey = QV, p.findLast = UC, p.findLastIndex = hm, p.findLastKey = eE, p.floor = IS, p.forEach = $m, p.forEachRight = ym, p.forIn = tE, p.forInRight = nE, p.forOwn = rE, p.forOwnRight = oE, p.get = gd, p.gt = VV, p.gte = EV, p.has = aE, p.hasIn = $d, p.head = wm, p.identity = fn, p.includes = GC, p.indexOf = Ub, p.inRange = SE, p.invoke = cE, p.isArguments = wi, p.isArray = se, p.isArrayBuffer = SV, p.isArrayLike = cn, p.isArrayLikeObject = ot, p.isBoolean = IV, p.isBuffer = Eo, p.isDate = kV, p.isElement = AV, p.isEmpty = TV, p.isEqual = xV, p.isEqualWith = LV, p.isError = vd, p.isFinite = DV, p.isFunction = Gr, p.isInteger = Am, p.isLength = ru, p.isMap = Tm, p.isMatch = OV, p.isMatchWith = NV, p.isNaN = MV, p.isNative = BV, p.isNil = PV, p.isNull = RV, p.isNumber = xm, p.isObject = Je, p.isObjectLike = tt, p.isPlainObject = ga, p.isRegExp = _d, p.isSafeInteger = FV, p.isSet = Lm, p.isString = ou, p.isSymbol = Vn, p.isTypedArray = ss, p.isUndefined = UV, p.isWeakMap = WV, p.isWeakSet = HV, p.join = Gb, p.kebabCase = LE, p.last = Hn, p.lastIndexOf = Yb, p.lowerCase = DE, p.lowerFirst = OE, p.lt = zV, p.lte = qV, p.max = kS, p.maxBy = AS, p.mean = TS, p.meanBy = xS, p.min = LS, p.minBy = DS, p.stubArray = Sd, p.stubFalse = Id, p.stubObject = _S, p.stubString = gS, p.stubTrue = $S, p.multiply = OS, p.nth = jb, p.noConflict = cS, p.noop = Ed, p.now = eu, p.pad = NE, p.padEnd = ME, p.padStart = BE, p.parseInt = RE, p.random = IE, p.reduce = JC, p.reduceRight = XC, p.repeat = PE, p.replace = FE, p.result = vE, p.round = NS, p.runInContext = C, p.sample = eV, p.size = rV, p.snakeCase = UE, p.some = oV, p.sortedIndex = tC, p.sortedIndexBy = nC, p.sortedIndexOf = rC, p.sortedLastIndex = oC, p.sortedLastIndexBy = iC, p.sortedLastIndexOf = sC, p.startCase = HE, p.startsWith = zE, p.subtract = MS, p.sum = BS, p.sumBy = RS, p.template = qE, p.times = yS, p.toFinite = Yr, p.toInteger = le, p.toLength = Om, p.toLower = GE, p.toNumber = zn, p.toSafeInteger = GV, p.toString = Ie, p.toUpper = YE, p.trim = jE, p.trimEnd = KE, p.trimStart = ZE, p.truncate = JE, p.unescape = XE, p.uniqueId = CS, p.upperCase = QE, p.upperFirst = yd, p.each = $m, p.eachRight = ym, p.first = wm, Vd(p, function() {
        var t = {};
        return _r(p, function(o, i) {
          De.call(p.prototype, i) || (t[i] = o);
        }), t;
      }(), { chain: !1 }), p.VERSION = s, Rn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        p[t].placeholder = p;
      }), Rn(["drop", "take"], function(t, o) {
        we.prototype[t] = function(i) {
          i = i === r ? 1 : wt(le(i), 0);
          var l = this.__filtered__ && !o ? new we(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Rt(i, l.__takeCount__) : l.__views__.push({
            size: Rt(i, $e),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, we.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), Rn(["filter", "map", "takeWhile"], function(t, o) {
        var i = o + 1, l = i == Pe || i == Fe;
        we.prototype[t] = function(d) {
          var h = this.clone();
          return h.__iteratees__.push({
            iteratee: ee(d, 3),
            type: i
          }), h.__filtered__ = h.__filtered__ || l, h;
        };
      }), Rn(["head", "last"], function(t, o) {
        var i = "take" + (o ? "Right" : "");
        we.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), Rn(["initial", "tail"], function(t, o) {
        var i = "drop" + (o ? "" : "Right");
        we.prototype[t] = function() {
          return this.__filtered__ ? new we(this) : this[i](1);
        };
      }), we.prototype.compact = function() {
        return this.filter(fn);
      }, we.prototype.find = function(t) {
        return this.filter(t).head();
      }, we.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, we.prototype.invokeMap = fe(function(t, o) {
        return typeof t == "function" ? new we(this) : this.map(function(i) {
          return pa(i, t, o);
        });
      }), we.prototype.reject = function(t) {
        return this.filter(nu(ee(t)));
      }, we.prototype.slice = function(t, o) {
        t = le(t);
        var i = this;
        return i.__filtered__ && (t > 0 || o < 0) ? new we(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), o !== r && (o = le(o), i = o < 0 ? i.dropRight(-o) : i.take(o - t)), i);
      }, we.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, we.prototype.toArray = function() {
        return this.take($e);
      }, _r(we.prototype, function(t, o) {
        var i = /^(?:filter|find|map|reject)|While$/.test(o), l = /^(?:head|last)$/.test(o), d = p[l ? "take" + (o == "last" ? "Right" : "") : o], h = l || /^find/.test(o);
        !d || (p.prototype[o] = function() {
          var _ = this.__wrapped__, $ = l ? [1] : arguments, E = _ instanceof we, R = $[0], P = E || se(_), U = function(me) {
            var ge = d.apply(p, _o([me], $));
            return l && G ? ge[0] : ge;
          };
          P && i && typeof R == "function" && R.length != 1 && (E = P = !1);
          var G = this.__chain__, K = !!this.__actions__.length, te = h && !G, ue = E && !K;
          if (!h && P) {
            _ = ue ? _ : new we(this);
            var ne = t.apply(_, $);
            return ne.__actions__.push({ func: Xl, args: [U], thisArg: r }), new Fn(ne, G);
          }
          return te && ue ? t.apply(this, $) : (ne = this.thru(U), te ? l ? ne.value()[0] : ne.value() : ne);
        });
      }), Rn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var o = Vl[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        p.prototype[t] = function() {
          var d = arguments;
          if (l && !this.__chain__) {
            var h = this.value();
            return o.apply(se(h) ? h : [], d);
          }
          return this[i](function(_) {
            return o.apply(se(_) ? _ : [], d);
          });
        };
      }), _r(we.prototype, function(t, o) {
        var i = p[o];
        if (i) {
          var l = i.name + "";
          De.call(ts, l) || (ts[l] = []), ts[l].push({ name: o, func: i });
        }
      }), ts[ql(r, S).name] = [{
        name: "wrapper",
        func: r
      }], we.prototype.clone = X$, we.prototype.reverse = Q$, we.prototype.value = ey, p.prototype.at = AC, p.prototype.chain = TC, p.prototype.commit = xC, p.prototype.next = LC, p.prototype.plant = OC, p.prototype.reverse = NC, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = MC, p.prototype.first = p.prototype.head, sa && (p.prototype[sa] = DC), p;
    }, Xi = x$();
    li ? ((li.exports = Xi)._ = Xi, Cc._ = Xi) : Et._ = Xi;
  }).call($a);
})(Ne, Ne.exports);
const Pk = "/alarms?_s=", rc = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, Fk = async (e, n) => {
  try {
    return (await Dt.put(
      `/alarms/${e}?ack=${n}`,
      {
        body: `alarm=${e}`
      },
      rc
    )).status === 204;
  } catch {
    return !1;
  }
}, Yg = async (e, n) => {
  try {
    return (await Dt.put(
      `/alarms/${e}?${n}=true`,
      {
        body: `alarm=${e}`
      },
      rc
    )).status === 204;
  } catch {
    return !1;
  }
}, Uk = async (e, n) => {
  try {
    const r = e.join(",alarm.id==");
    return (await to.put(
      `alarms?_s=alarm.id==${r}&${n}=true`,
      null,
      rc
    )).status == 204;
  } catch {
    return !1;
  }
}, Wk = async () => {
  try {
    const e = `${Pk}isSituation==true&limit=0`, n = await to(e);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, Hk = async (e) => {
  try {
    const n = e.join(",id=="), r = await to(`/alarms?_s=id==${n}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, jg = async (e) => {
  try {
    const n = await to(`/alarms/${e}`);
    return n.status === 200 ? n.data : null;
  } catch {
    return null;
  }
}, zk = async (e) => {
  try {
    const n = await to(`/events?_s=alarm.id==${e}`);
    return n.status === 200 ? n.data.event : null;
  } catch {
    return null;
  }
}, qk = async () => {
  try {
    const e = await to("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => Ne.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, Gk = async (e, n, r) => {
  try {
    return (await to.put(
      `/alarms/${e}/${n}`,
      `body=${r}`,
      rc
    )).status == 204;
  } catch {
    return !1;
  }
}, Yk = async (e, n) => {
  try {
    return (await to.delete(`/alarms/${e}/${n}`)).status == 204;
  } catch {
    return !1;
  }
}, jk = async () => {
  try {
    const e = await to.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, Kk = window.Pinia.defineStore, fr = Kk("situationsStore", {
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
      const e = await qk();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await Wk();
      if (e) {
        const n = e.alarm.map((u) => {
          var c;
          return u.status = (c = u.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, u;
        });
        this.filteredSituations = n.map((u) => u.id);
        const r = Ne.exports.groupBy(n, "status"), a = [
          ...n.filter(
            (u) => u.status !== "REJECTED" && u.status !== "ACCEPTED"
          ),
          ...r.ACCEPTED || []
        ];
        this.situations = a;
      } else
        this.situations = [];
    },
    async getSituation(e) {
      var n, r;
      if (e) {
        const s = await jg(e);
        if (s) {
          const a = (n = s.relatedAlarms) == null ? void 0 : n.map((f) => f.id), c = await Hk(a);
          s.status = (r = s.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : r.value, s.alarms = Ne.exports.sortBy(c, ["id"]), this.situationDetail = s;
        }
      }
    },
    async getEvents(e, n) {
      const r = {};
      await Promise.all(
        n.map(async (s) => {
          const a = await zk(s);
          a && (r[s] = Ne.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await jk();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), Zk = window.Vue.openBlock, Jk = window.Vue.createElementBlock, Xk = window.Vue.createElementVNode;
var Qk = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const eA = {}, tA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, nA = /* @__PURE__ */ Xk("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), rA = [
  nA
];
function oA(e, n) {
  return Zk(), Jk("svg", tA, rA);
}
var Ns = /* @__PURE__ */ Qk(eA, [["render", oA]]);
var iA = Object.defineProperty, _w = Object.getOwnPropertySymbols, sA = Object.prototype.hasOwnProperty, aA = Object.prototype.propertyIsEnumerable, gw = (e, n, r) => n in e ? iA(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, $w = (e, n) => {
  for (var r in n || (n = {}))
    sA.call(n, r) && gw(e, r, n[r]);
  if (_w)
    for (var r of _w(n))
      aA.call(n, r) && gw(e, r, n[r]);
  return e;
};
const lA = window.Vue.defineComponent, uA = window.Vue.toRaw, Hd = window.Vue.h;
var cA = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const dA = {
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
}, fA = lA({
  props: dA,
  render() {
    const e = this.$attrs, n = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    n["feather-icon"] = !0, this.flex && (n["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = uA(this.icon);
    return this.$slots.default ? Hd("span", { class: "feather-icon-container" }, [
      Hd(this.$slots.default()[0], $w({
        class: n
      }, r))
    ]) : Hd(s, $w({
      class: n
    }, r));
  }
});
var J = /* @__PURE__ */ cA(fA, [["__scopeId", "data-v-52cbf270"]]);
const pA = window.Vue.openBlock, hA = window.Vue.createElementBlock, mA = window.Vue.createElementVNode;
var wA = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const vA = {}, _A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, gA = /* @__PURE__ */ mA("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), $A = [
  gA
];
function yA(e, n) {
  return pA(), hA("svg", _A, $A);
}
var Kg = /* @__PURE__ */ wA(vA, [["render", yA]]);
const Tt = {
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
function Ir(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var n = Number(e);
  return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
}
function ze(e, n) {
  if (n.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + n.length + " present");
}
function _t(e) {
  ze(1, arguments);
  var n = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && n === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || n === "[object Number]" ? new Date(e) : ((typeof e == "string" || n === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function bA(e, n) {
  ze(2, arguments);
  var r = _t(e), s = Ir(n);
  return isNaN(s) ? new Date(NaN) : (s && r.setDate(r.getDate() + s), r);
}
function CA(e, n) {
  ze(2, arguments);
  var r = _t(e).getTime(), s = Ir(n);
  return new Date(r + s);
}
var VA = {};
function Bs() {
  return VA;
}
function yw(e, n) {
  var r, s, a, u, c, f, m, w;
  ze(1, arguments);
  var g = Bs(), y = Ir((r = (s = (a = (u = n == null ? void 0 : n.weekStartsOn) !== null && u !== void 0 ? u : n == null || (c = n.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : g.weekStartsOn) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (w = m.options) === null || w === void 0 ? void 0 : w.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var b = _t(e), V = b.getDay(), O = (V < y ? 7 : 0) + V - y;
  return b.setDate(b.getDate() - O), b.setHours(0, 0, 0, 0), b;
}
function Yf(e) {
  var n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return n.setUTCFullYear(e.getFullYear()), e.getTime() - n.getTime();
}
function bw(e) {
  ze(1, arguments);
  var n = _t(e);
  return n.setHours(0, 0, 0, 0), n;
}
function EA(e, n) {
  ze(2, arguments);
  var r = _t(e), s = _t(n), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Zg(e, n) {
  ze(2, arguments);
  var r = bw(e), s = bw(n);
  return r.getTime() === s.getTime();
}
function SA(e) {
  return ze(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function IA(e) {
  if (ze(1, arguments), !SA(e) && typeof e != "number")
    return !1;
  var n = _t(e);
  return !isNaN(Number(n));
}
function kA(e, n) {
  ze(2, arguments);
  var r = Ir(n);
  return CA(e, -r);
}
var AA = 864e5;
function TA(e) {
  ze(1, arguments);
  var n = _t(e), r = n.getTime();
  n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  var s = n.getTime(), a = r - s;
  return Math.floor(a / AA) + 1;
}
function Pu(e) {
  ze(1, arguments);
  var n = 1, r = _t(e), s = r.getUTCDay(), a = (s < n ? 7 : 0) + s - n;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function Jg(e) {
  ze(1, arguments);
  var n = _t(e), r = n.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Pu(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = Pu(u);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function xA(e) {
  ze(1, arguments);
  var n = Jg(e), r = new Date(0);
  r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = Pu(r);
  return s;
}
var LA = 6048e5;
function DA(e) {
  ze(1, arguments);
  var n = _t(e), r = Pu(n).getTime() - xA(n).getTime();
  return Math.round(r / LA) + 1;
}
function Fu(e, n) {
  var r, s, a, u, c, f, m, w;
  ze(1, arguments);
  var g = Bs(), y = Ir((r = (s = (a = (u = n == null ? void 0 : n.weekStartsOn) !== null && u !== void 0 ? u : n == null || (c = n.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : g.weekStartsOn) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (w = m.options) === null || w === void 0 ? void 0 : w.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var b = _t(e), V = b.getUTCDay(), O = (V < y ? 7 : 0) + V - y;
  return b.setUTCDate(b.getUTCDate() - O), b.setUTCHours(0, 0, 0, 0), b;
}
function Xg(e, n) {
  var r, s, a, u, c, f, m, w;
  ze(1, arguments);
  var g = _t(e), y = g.getUTCFullYear(), b = Bs(), V = Ir((r = (s = (a = (u = n == null ? void 0 : n.firstWeekContainsDate) !== null && u !== void 0 ? u : n == null || (c = n.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : b.firstWeekContainsDate) !== null && s !== void 0 ? s : (m = b.locale) === null || m === void 0 || (w = m.options) === null || w === void 0 ? void 0 : w.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(V >= 1 && V <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var O = new Date(0);
  O.setUTCFullYear(y + 1, 0, V), O.setUTCHours(0, 0, 0, 0);
  var x = Fu(O, n), D = new Date(0);
  D.setUTCFullYear(y, 0, V), D.setUTCHours(0, 0, 0, 0);
  var S = Fu(D, n);
  return g.getTime() >= x.getTime() ? y + 1 : g.getTime() >= S.getTime() ? y : y - 1;
}
function OA(e, n) {
  var r, s, a, u, c, f, m, w;
  ze(1, arguments);
  var g = Bs(), y = Ir((r = (s = (a = (u = n == null ? void 0 : n.firstWeekContainsDate) !== null && u !== void 0 ? u : n == null || (c = n.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : g.firstWeekContainsDate) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (w = m.options) === null || w === void 0 ? void 0 : w.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), b = Xg(e, n), V = new Date(0);
  V.setUTCFullYear(b, 0, y), V.setUTCHours(0, 0, 0, 0);
  var O = Fu(V, n);
  return O;
}
var NA = 6048e5;
function MA(e, n) {
  ze(1, arguments);
  var r = _t(e), s = Fu(r, n).getTime() - OA(r, n).getTime();
  return Math.round(s / NA) + 1;
}
function Oe(e, n) {
  for (var r = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < n; )
    s = "0" + s;
  return r + s;
}
var BA = {
  y: function(e, n) {
    var r = e.getUTCFullYear(), s = r > 0 ? r : 1 - r;
    return Oe(n === "yy" ? s % 100 : s, n.length);
  },
  M: function(e, n) {
    var r = e.getUTCMonth();
    return n === "M" ? String(r + 1) : Oe(r + 1, 2);
  },
  d: function(e, n) {
    return Oe(e.getUTCDate(), n.length);
  },
  a: function(e, n) {
    var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
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
  h: function(e, n) {
    return Oe(e.getUTCHours() % 12 || 12, n.length);
  },
  H: function(e, n) {
    return Oe(e.getUTCHours(), n.length);
  },
  m: function(e, n) {
    return Oe(e.getUTCMinutes(), n.length);
  },
  s: function(e, n) {
    return Oe(e.getUTCSeconds(), n.length);
  },
  S: function(e, n) {
    var r = n.length, s = e.getUTCMilliseconds(), a = Math.floor(s * Math.pow(10, r - 3));
    return Oe(a, n.length);
  }
};
const Io = BA;
var ls = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, RA = {
  G: function(e, n, r) {
    var s = e.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
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
  y: function(e, n, r) {
    if (n === "yo") {
      var s = e.getUTCFullYear(), a = s > 0 ? s : 1 - s;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return Io.y(e, n);
  },
  Y: function(e, n, r, s) {
    var a = Xg(e, s), u = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var c = u % 100;
      return Oe(c, 2);
    }
    return n === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : Oe(u, n.length);
  },
  R: function(e, n) {
    var r = Jg(e);
    return Oe(r, n.length);
  },
  u: function(e, n) {
    var r = e.getUTCFullYear();
    return Oe(r, n.length);
  },
  Q: function(e, n, r) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (n) {
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
  q: function(e, n, r) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (n) {
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
  M: function(e, n, r) {
    var s = e.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return Io.M(e, n);
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
  L: function(e, n, r) {
    var s = e.getUTCMonth();
    switch (n) {
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
  w: function(e, n, r, s) {
    var a = MA(e, s);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Oe(a, n.length);
  },
  I: function(e, n, r) {
    var s = DA(e);
    return n === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : Oe(s, n.length);
  },
  d: function(e, n, r) {
    return n === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : Io.d(e, n);
  },
  D: function(e, n, r) {
    var s = TA(e);
    return n === "Do" ? r.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : Oe(s, n.length);
  },
  E: function(e, n, r) {
    var s = e.getUTCDay();
    switch (n) {
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
  e: function(e, n, r, s) {
    var a = e.getUTCDay(), u = (a - s.weekStartsOn + 8) % 7 || 7;
    switch (n) {
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
  c: function(e, n, r, s) {
    var a = e.getUTCDay(), u = (a - s.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(u);
      case "cc":
        return Oe(u, n.length);
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
  i: function(e, n, r) {
    var s = e.getUTCDay(), a = s === 0 ? 7 : s;
    switch (n) {
      case "i":
        return String(a);
      case "ii":
        return Oe(a, n.length);
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
  a: function(e, n, r) {
    var s = e.getUTCHours(), a = s / 12 >= 1 ? "pm" : "am";
    switch (n) {
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
  b: function(e, n, r) {
    var s = e.getUTCHours(), a;
    switch (s === 12 ? a = ls.noon : s === 0 ? a = ls.midnight : a = s / 12 >= 1 ? "pm" : "am", n) {
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
  B: function(e, n, r) {
    var s = e.getUTCHours(), a;
    switch (s >= 17 ? a = ls.evening : s >= 12 ? a = ls.afternoon : s >= 4 ? a = ls.morning : a = ls.night, n) {
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
  h: function(e, n, r) {
    if (n === "ho") {
      var s = e.getUTCHours() % 12;
      return s === 0 && (s = 12), r.ordinalNumber(s, {
        unit: "hour"
      });
    }
    return Io.h(e, n);
  },
  H: function(e, n, r) {
    return n === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : Io.H(e, n);
  },
  K: function(e, n, r) {
    var s = e.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : Oe(s, n.length);
  },
  k: function(e, n, r) {
    var s = e.getUTCHours();
    return s === 0 && (s = 24), n === "ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : Oe(s, n.length);
  },
  m: function(e, n, r) {
    return n === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : Io.m(e, n);
  },
  s: function(e, n, r) {
    return n === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : Io.s(e, n);
  },
  S: function(e, n) {
    return Io.S(e, n);
  },
  X: function(e, n, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (n) {
      case "X":
        return Vw(u);
      case "XXXX":
      case "XX":
        return xi(u);
      case "XXXXX":
      case "XXX":
      default:
        return xi(u, ":");
    }
  },
  x: function(e, n, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return Vw(u);
      case "xxxx":
      case "xx":
        return xi(u);
      case "xxxxx":
      case "xxx":
      default:
        return xi(u, ":");
    }
  },
  O: function(e, n, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Cw(u, ":");
      case "OOOO":
      default:
        return "GMT" + xi(u, ":");
    }
  },
  z: function(e, n, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Cw(u, ":");
      case "zzzz":
      default:
        return "GMT" + xi(u, ":");
    }
  },
  t: function(e, n, r, s) {
    var a = s._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return Oe(u, n.length);
  },
  T: function(e, n, r, s) {
    var a = s._originalDate || e, u = a.getTime();
    return Oe(u, n.length);
  }
};
function Cw(e, n) {
  var r = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var c = n || "";
  return r + String(a) + c + Oe(u, 2);
}
function Vw(e, n) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + Oe(Math.abs(e) / 60, 2);
  }
  return xi(e, n);
}
function xi(e, n) {
  var r = n || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = Oe(Math.floor(a / 60), 2), c = Oe(a % 60, 2);
  return s + u + r + c;
}
const PA = RA;
var Ew = function(e, n) {
  switch (e) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, Qg = function(e, n) {
  switch (e) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, FA = function(e, n) {
  var r = e.match(/(P+)(p+)?/) || [], s = r[1], a = r[2];
  if (!a)
    return Ew(e, n);
  var u;
  switch (s) {
    case "P":
      u = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      u = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      u = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      u = n.dateTime({
        width: "full"
      });
      break;
  }
  return u.replace("{{date}}", Ew(s, n)).replace("{{time}}", Qg(a, n));
}, UA = {
  p: Qg,
  P: FA
};
const WA = UA;
var HA = ["D", "DD"], zA = ["YY", "YYYY"];
function qA(e) {
  return HA.indexOf(e) !== -1;
}
function GA(e) {
  return zA.indexOf(e) !== -1;
}
function Sw(e, n, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(n, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(n, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(n, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(n, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var YA = {
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
}, jA = function(e, n, r) {
  var s, a = YA[e];
  return typeof a == "string" ? s = a : n === 1 ? s = a.one : s = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const KA = jA;
function zd(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = n.width ? String(n.width) : e.defaultWidth, s = e.formats[r] || e.formats[e.defaultWidth];
    return s;
  };
}
var ZA = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, JA = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, XA = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, QA = {
  date: zd({
    formats: ZA,
    defaultWidth: "full"
  }),
  time: zd({
    formats: JA,
    defaultWidth: "full"
  }),
  dateTime: zd({
    formats: XA,
    defaultWidth: "full"
  })
};
const eT = QA;
var tT = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, nT = function(e, n, r, s) {
  return tT[e];
};
const rT = nT;
function ba(e) {
  return function(n, r) {
    var s = r != null && r.context ? String(r.context) : "standalone", a;
    if (s === "formatting" && e.formattingValues) {
      var u = e.defaultFormattingWidth || e.defaultWidth, c = r != null && r.width ? String(r.width) : u;
      a = e.formattingValues[c] || e.formattingValues[u];
    } else {
      var f = e.defaultWidth, m = r != null && r.width ? String(r.width) : e.defaultWidth;
      a = e.values[m] || e.values[f];
    }
    var w = e.argumentCallback ? e.argumentCallback(n) : n;
    return a[w];
  };
}
var oT = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, iT = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, sT = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, aT = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, lT = {
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
}, uT = {
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
}, cT = function(e, n) {
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
}, dT = {
  ordinalNumber: cT,
  era: ba({
    values: oT,
    defaultWidth: "wide"
  }),
  quarter: ba({
    values: iT,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: ba({
    values: sT,
    defaultWidth: "wide"
  }),
  day: ba({
    values: aT,
    defaultWidth: "wide"
  }),
  dayPeriod: ba({
    values: lT,
    defaultWidth: "wide",
    formattingValues: uT,
    defaultFormattingWidth: "wide"
  })
};
const fT = dT;
function Ca(e) {
  return function(n) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = n.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(f) ? hT(f, function(y) {
      return y.test(c);
    }) : pT(f, function(y) {
      return y.test(c);
    }), w;
    w = e.valueCallback ? e.valueCallback(m) : m, w = r.valueCallback ? r.valueCallback(w) : w;
    var g = n.slice(c.length);
    return {
      value: w,
      rest: g
    };
  };
}
function pT(e, n) {
  for (var r in e)
    if (e.hasOwnProperty(r) && n(e[r]))
      return r;
}
function hT(e, n) {
  for (var r = 0; r < e.length; r++)
    if (n(e[r]))
      return r;
}
function mT(e) {
  return function(n) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = n.match(e.matchPattern);
    if (!s)
      return null;
    var a = s[0], u = n.match(e.parsePattern);
    if (!u)
      return null;
    var c = e.valueCallback ? e.valueCallback(u[0]) : u[0];
    c = r.valueCallback ? r.valueCallback(c) : c;
    var f = n.slice(a.length);
    return {
      value: c,
      rest: f
    };
  };
}
var wT = /^(\d+)(th|st|nd|rd)?/i, vT = /\d+/i, _T = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, gT = {
  any: [/^b/i, /^(a|c)/i]
}, $T = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, yT = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, bT = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, CT = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, VT = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ET = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ST = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, IT = {
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
}, kT = {
  ordinalNumber: mT({
    matchPattern: wT,
    parsePattern: vT,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Ca({
    matchPatterns: _T,
    defaultMatchWidth: "wide",
    parsePatterns: gT,
    defaultParseWidth: "any"
  }),
  quarter: Ca({
    matchPatterns: $T,
    defaultMatchWidth: "wide",
    parsePatterns: yT,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Ca({
    matchPatterns: bT,
    defaultMatchWidth: "wide",
    parsePatterns: CT,
    defaultParseWidth: "any"
  }),
  day: Ca({
    matchPatterns: VT,
    defaultMatchWidth: "wide",
    parsePatterns: ET,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ca({
    matchPatterns: ST,
    defaultMatchWidth: "any",
    parsePatterns: IT,
    defaultParseWidth: "any"
  })
};
const AT = kT;
var TT = {
  code: "en-US",
  formatDistance: KA,
  formatLong: eT,
  formatRelative: rT,
  localize: fT,
  match: AT,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const e1 = TT;
var xT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, LT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, DT = /^'([^]*?)'?$/, OT = /''/g, NT = /[a-zA-Z]/;
function MT(e, n, r) {
  var s, a, u, c, f, m, w, g, y, b, V, O, x, D, S, A, T, B;
  ze(2, arguments);
  var F = String(n), W = Bs(), L = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : W.locale) !== null && s !== void 0 ? s : e1, X = Ir((u = (c = (f = (m = r == null ? void 0 : r.firstWeekContainsDate) !== null && m !== void 0 ? m : r == null || (w = r.locale) === null || w === void 0 || (g = w.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && f !== void 0 ? f : W.firstWeekContainsDate) !== null && c !== void 0 ? c : (y = W.locale) === null || y === void 0 || (b = y.options) === null || b === void 0 ? void 0 : b.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(X >= 1 && X <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Me = Ir((V = (O = (x = (D = r == null ? void 0 : r.weekStartsOn) !== null && D !== void 0 ? D : r == null || (S = r.locale) === null || S === void 0 || (A = S.options) === null || A === void 0 ? void 0 : A.weekStartsOn) !== null && x !== void 0 ? x : W.weekStartsOn) !== null && O !== void 0 ? O : (T = W.locale) === null || T === void 0 || (B = T.options) === null || B === void 0 ? void 0 : B.weekStartsOn) !== null && V !== void 0 ? V : 0);
  if (!(Me >= 0 && Me <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!L.localize)
    throw new RangeError("locale must contain localize property");
  if (!L.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var he = _t(e);
  if (!IA(he))
    throw new RangeError("Invalid time value");
  var Te = Yf(he), Qe = kA(he, Te), et = {
    firstWeekContainsDate: X,
    weekStartsOn: Me,
    locale: L,
    _originalDate: he
  }, Pe = F.match(LT).map(function(de) {
    var Fe = de[0];
    if (Fe === "p" || Fe === "P") {
      var Ge = WA[Fe];
      return Ge(de, L.formatLong);
    }
    return de;
  }).join("").match(xT).map(function(de) {
    if (de === "''")
      return "'";
    var Fe = de[0];
    if (Fe === "'")
      return BT(de);
    var Ge = PA[Fe];
    if (Ge)
      return !(r != null && r.useAdditionalWeekYearTokens) && GA(de) && Sw(de, n, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && qA(de) && Sw(de, n, String(e)), Ge(Qe, de, L.localize, et);
    if (Fe.match(NT))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Fe + "`");
    return de;
  }).join("");
  return Pe;
}
function BT(e) {
  var n = e.match(DT);
  return n ? n[1].replace(OT, "'") : e;
}
function t1(e, n) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
  return e;
}
function RT(e) {
  return t1({}, e);
}
var Iw = 1e3 * 60, Uu = 60 * 24, kw = Uu * 30, Aw = Uu * 365;
function oc(e, n, r) {
  var s, a, u;
  ze(2, arguments);
  var c = Bs(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : e1;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var m = EA(e, n);
  if (isNaN(m))
    throw new RangeError("Invalid time value");
  var w = t1(RT(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: m
  }), g, y;
  m > 0 ? (g = _t(n), y = _t(e)) : (g = _t(e), y = _t(n));
  var b = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), V;
  if (b === "floor")
    V = Math.floor;
  else if (b === "ceil")
    V = Math.ceil;
  else if (b === "round")
    V = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var O = y.getTime() - g.getTime(), x = O / Iw, D = Yf(y) - Yf(g), S = (O - D) / Iw, A = r == null ? void 0 : r.unit, T;
  if (A ? T = String(A) : x < 1 ? T = "second" : x < 60 ? T = "minute" : x < Uu ? T = "hour" : S < kw ? T = "day" : S < Aw ? T = "month" : T = "year", T === "second") {
    var B = V(O / 1e3);
    return f.formatDistance("xSeconds", B, w);
  } else if (T === "minute") {
    var F = V(x);
    return f.formatDistance("xMinutes", F, w);
  } else if (T === "hour") {
    var W = V(x / 60);
    return f.formatDistance("xHours", W, w);
  } else if (T === "day") {
    var L = V(S / Uu);
    return f.formatDistance("xDays", L, w);
  } else if (T === "month") {
    var X = V(S / kw);
    return X === 12 && A !== "month" ? f.formatDistance("xYears", 1, w) : f.formatDistance("xMonths", X, w);
  } else if (T === "year") {
    var Me = V(S / Aw);
    return f.formatDistance("xYears", Me, w);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function PT(e, n, r) {
  ze(2, arguments);
  var s = yw(e, r), a = yw(n, r);
  return s.getTime() === a.getTime();
}
function FT(e, n) {
  return ze(1, arguments), PT(e, Date.now(), n);
}
function UT(e) {
  return ze(1, arguments), Zg(e, Date.now());
}
function WT(e, n) {
  ze(2, arguments);
  var r = Ir(n);
  return bA(e, -r);
}
function HT(e) {
  return ze(1, arguments), Zg(e, WT(Date.now(), 1));
}
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function Tw(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, s = Array(n); r < n; r++)
    s[r] = e[r];
  return s;
}
function zT(e) {
  if (Array.isArray(e))
    return e;
}
function qT(e, n) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var s, a, u, c, f = [], m = !0, w = !1;
    try {
      if (u = (r = r.call(e)).next, n !== 0)
        for (; !(m = (s = u.call(r)).done) && (f.push(s.value), f.length !== n); m = !0)
          ;
    } catch (g) {
      w = !0, a = g;
    } finally {
      try {
        if (!m && r.return != null && (c = r.return(), Object(c) !== c))
          return;
      } finally {
        if (w)
          throw a;
      }
    }
    return f;
  }
}
function GT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YT(e, n) {
  return zT(e) || qT(e, n) || jT(e, n) || GT();
}
function jT(e, n) {
  if (e) {
    if (typeof e == "string")
      return Tw(e, n);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Tw(e, n) : void 0;
  }
}
const n1 = Object.entries, xw = Object.setPrototypeOf, KT = Object.isFrozen, ZT = Object.getPrototypeOf, JT = Object.getOwnPropertyDescriptor;
let xt = Object.freeze, Lt = Object.seal, Cs = Object.create, r1 = typeof Reflect < "u" && Reflect, jf = r1.apply, Kf = r1.construct;
xt || (xt = function(n) {
  return n;
});
Lt || (Lt = function(n) {
  return n;
});
jf || (jf = function(n, r) {
  for (var s = arguments.length, a = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++)
    a[u - 2] = arguments[u];
  return n.apply(r, a);
});
Kf || (Kf = function(n) {
  for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    s[a - 1] = arguments[a];
  return new n(...s);
});
const Va = dt(Array.prototype.forEach), XT = dt(Array.prototype.lastIndexOf), Lw = dt(Array.prototype.pop), us = dt(Array.prototype.push), QT = dt(Array.prototype.splice), Fo = Array.isArray, Ka = dt(String.prototype.toLowerCase), qd = dt(String.prototype.toString), Dw = dt(String.prototype.match), Ea = dt(String.prototype.replace), Ow = dt(String.prototype.indexOf), e2 = dt(String.prototype.trim), t2 = dt(Number.prototype.toString), n2 = dt(Boolean.prototype.toString), Nw = typeof BigInt > "u" ? null : dt(BigInt.prototype.toString), Mw = typeof Symbol > "u" ? null : dt(Symbol.prototype.toString), yt = dt(Object.prototype.hasOwnProperty), Sa = dt(Object.prototype.toString), kt = dt(RegExp.prototype.test), vi = r2(TypeError);
function dt(e) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      s[a - 1] = arguments[a];
    return jf(e, n, s);
  };
}
function r2(e) {
  return function() {
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return Kf(e, r);
  };
}
function ye(e, n) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ka;
  if (xw && xw(e, null), !Fo(n))
    return e;
  let s = n.length;
  for (; s--; ) {
    let a = n[s];
    if (typeof a == "string") {
      const u = r(a);
      u !== a && (KT(n) || (n[s] = u), a = u);
    }
    e[a] = !0;
  }
  return e;
}
function o2(e) {
  for (let n = 0; n < e.length; n++)
    yt(e, n) || (e[n] = null);
  return e;
}
function en(e) {
  const n = Cs(null);
  for (const s of n1(e)) {
    var r = YT(s, 2);
    const a = r[0], u = r[1];
    yt(e, a) && (Fo(u) ? n[a] = o2(u) : u && typeof u == "object" && u.constructor === Object ? n[a] = en(u) : n[a] = u);
  }
  return n;
}
function i2(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return t2(e);
    case "boolean":
      return n2(e);
    case "bigint":
      return Nw ? Nw(e) : "0";
    case "symbol":
      return Mw ? Mw(e) : "Symbol()";
    case "undefined":
      return Sa(e);
    case "function":
    case "object": {
      if (e === null)
        return Sa(e);
      const n = e, r = Cr(n, "toString");
      if (typeof r == "function") {
        const s = r(n);
        return typeof s == "string" ? s : Sa(s);
      }
      return Sa(e);
    }
    default:
      return Sa(e);
  }
}
function Cr(e, n) {
  for (; e !== null; ) {
    const s = JT(e, n);
    if (s) {
      if (s.get)
        return dt(s.get);
      if (typeof s.value == "function")
        return dt(s.value);
    }
    e = ZT(e);
  }
  function r() {
    return null;
  }
  return r;
}
function s2(e) {
  try {
    return kt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Bw = xt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Gd = xt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Yd = xt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), a2 = xt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), jd = xt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), l2 = xt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rw = xt(["#text"]), Pw = xt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Kd = xt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Fw = xt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), su = xt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), u2 = Lt(/{{[\w\W]*|^[\w\W]*}}/g), c2 = Lt(/<%[\w\W]*|^[\w\W]*%>/g), d2 = Lt(/\${[\w\W]*/g), f2 = Lt(/^data-[\-\w.\u00B7-\uFFFF]+$/), p2 = Lt(/^aria-[\-\w]+$/), Uw = Lt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), h2 = Lt(/^(?:\w+script|data):/i), m2 = Lt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), w2 = Lt(/^html$/i), v2 = Lt(/^[a-z][.\w]*(-[.\w]+)+$/i), Ww = Lt(/<[/\w!]/g), _2 = Lt(/<[/\w]/g), g2 = Lt(/<\/no(script|embed|frames)/i), $2 = Lt(/\/>/i), yr = {
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
}, y2 = function() {
  return typeof window > "u" ? null : window;
}, b2 = function(n, r) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let s = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (s = r.getAttribute(a));
  const u = "dompurify" + (s ? "#" + s : "");
  try {
    return n.createPolicy(u, {
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
}, Hw = function() {
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
}, ko = function(n, r, s, a) {
  return yt(n, r) && Fo(n[r]) ? ye(a.base ? en(a.base) : {}, n[r], a.transform) : s;
};
function o1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y2();
  const n = (q) => o1(q);
  if (n.version = "3.4.11", n.removed = [], !e || !e.document || e.document.nodeType !== yr.document || !e.Element)
    return n.isSupported = !1, n;
  let r = e.document;
  const s = r, a = s.currentScript;
  e.DocumentFragment;
  const u = e.HTMLTemplateElement, c = e.Node, f = e.Element, m = e.NodeFilter, w = e.NamedNodeMap;
  w === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const g = e.DOMParser, y = e.trustedTypes, b = f.prototype, V = Cr(b, "cloneNode"), O = Cr(b, "remove"), x = Cr(b, "nextSibling"), D = Cr(b, "childNodes"), S = Cr(b, "parentNode"), A = Cr(b, "shadowRoot"), T = Cr(b, "attributes"), B = c && c.prototype ? Cr(c.prototype, "nodeType") : null, F = c && c.prototype ? Cr(c.prototype, "nodeName") : null;
  if (typeof u == "function") {
    const q = r.createElement("template");
    q.content && q.content.ownerDocument && (r = q.content.ownerDocument);
  }
  let W, L = "", X, Me = !1, he = 0;
  const Te = function() {
    if (he > 0)
      throw vi('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Qe = function(v) {
    Te(), he++;
    try {
      return W.createHTML(v);
    } finally {
      he--;
    }
  }, et = function(v) {
    Te(), he++;
    try {
      return W.createScriptURL(v);
    } finally {
      he--;
    }
  }, Pe = function() {
    return Me || (X = b2(y, a), Me = !0), X;
  }, de = r, Fe = de.implementation, Ge = de.createNodeIterator, Be = de.createDocumentFragment, rn = de.getElementsByTagName, Tr = s.importNode;
  let $e = Hw();
  n.isSupported = typeof n1 == "function" && typeof S == "function" && Fe && Fe.createHTMLDocument !== void 0;
  const Zs = u2, Js = c2, Ui = d2, bt = f2, qt = p2, on = h2, _n = m2, sn = v2;
  let Zo = Uw, xe = null;
  const xr = ye({}, [...Bw, ...Gd, ...Yd, ...jd, ...Rw]);
  let Re = null;
  const Ot = ye({}, [...Pw, ...Kd, ...Fw, ...su]);
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
  })), Dn = null, Ct = null;
  const Nt = Object.seal(Cs(null, {
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
  let Jo = !0, On = !0, pt = !1, pr = !0, ht = !1, Lr = !0, Gt = !1, Xo = !1, Jn = null, gn = null, hr = !1, $n = !1, Xn = !1, Qn = !1, Dr = !0, Or = !1;
  const Nr = "user-content-";
  let mr = !0, wr = !1, er = {}, Yt = null;
  const no = ye({}, [
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
  let ro = null;
  const oo = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let io = null;
  const Qo = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Mr = "http://www.w3.org/1998/Math/MathML", Br = "http://www.w3.org/2000/svg", Mt = "http://www.w3.org/1999/xhtml";
  let tr = Mt, so = !1, ao = null;
  const lo = ye({}, [Mr, Br, Mt], qd), ei = xt(["mi", "mo", "mn", "ms", "mtext"]);
  let vr = ye({}, ei);
  const ti = xt(["annotation-xml"]);
  let uo = ye({}, ti);
  const Wi = ye({}, ["title", "style", "font", "a", "script"]);
  let re = null;
  const Z = ["application/xhtml+xml", "text/html"], Le = "text/html";
  let Q = null, an = null;
  const ni = r.createElement("form"), ri = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, co = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (an && an === v)
      return;
    (!v || typeof v != "object") && (v = {}), v = en(v), re = Z.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? Le : v.PARSER_MEDIA_TYPE, Q = re === "application/xhtml+xml" ? qd : Ka, xe = ko(v, "ALLOWED_TAGS", xr, {
      transform: Q
    }), Re = ko(v, "ALLOWED_ATTR", Ot, {
      transform: Q
    }), ao = ko(v, "ALLOWED_NAMESPACES", lo, {
      transform: qd
    }), io = ko(v, "ADD_URI_SAFE_ATTR", Qo, {
      transform: Q,
      base: Qo
    }), ro = ko(v, "ADD_DATA_URI_TAGS", oo, {
      transform: Q,
      base: oo
    }), Yt = ko(v, "FORBID_CONTENTS", no, {
      transform: Q
    }), Dn = ko(v, "FORBID_TAGS", en({}), {
      transform: Q
    }), Ct = ko(v, "FORBID_ATTR", en({}), {
      transform: Q
    }), er = yt(v, "USE_PROFILES") ? v.USE_PROFILES && typeof v.USE_PROFILES == "object" ? en(v.USE_PROFILES) : v.USE_PROFILES : !1, Jo = v.ALLOW_ARIA_ATTR !== !1, On = v.ALLOW_DATA_ATTR !== !1, pt = v.ALLOW_UNKNOWN_PROTOCOLS || !1, pr = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ht = v.SAFE_FOR_TEMPLATES || !1, Lr = v.SAFE_FOR_XML !== !1, Gt = v.WHOLE_DOCUMENT || !1, $n = v.RETURN_DOM || !1, Xn = v.RETURN_DOM_FRAGMENT || !1, Qn = v.RETURN_TRUSTED_TYPE || !1, hr = v.FORCE_BODY || !1, Dr = v.SANITIZE_DOM !== !1, Or = v.SANITIZE_NAMED_PROPS || !1, mr = v.KEEP_CONTENT !== !1, wr = v.IN_PLACE || !1, Zo = s2(v.ALLOWED_URI_REGEXP) ? v.ALLOWED_URI_REGEXP : Uw, tr = typeof v.NAMESPACE == "string" ? v.NAMESPACE : Mt, vr = yt(v, "MATHML_TEXT_INTEGRATION_POINTS") && v.MATHML_TEXT_INTEGRATION_POINTS && typeof v.MATHML_TEXT_INTEGRATION_POINTS == "object" ? en(v.MATHML_TEXT_INTEGRATION_POINTS) : ye({}, ei), uo = yt(v, "HTML_INTEGRATION_POINTS") && v.HTML_INTEGRATION_POINTS && typeof v.HTML_INTEGRATION_POINTS == "object" ? en(v.HTML_INTEGRATION_POINTS) : ye({}, ti);
    const I = yt(v, "CUSTOM_ELEMENT_HANDLING") && v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING == "object" ? en(v.CUSTOM_ELEMENT_HANDLING) : Cs(null);
    if (be = Cs(null), yt(I, "tagNameCheck") && ri(I.tagNameCheck) && (be.tagNameCheck = I.tagNameCheck), yt(I, "attributeNameCheck") && ri(I.attributeNameCheck) && (be.attributeNameCheck = I.attributeNameCheck), yt(I, "allowCustomizedBuiltInElements") && typeof I.allowCustomizedBuiltInElements == "boolean" && (be.allowCustomizedBuiltInElements = I.allowCustomizedBuiltInElements), Lt(be), ht && (On = !1), Xn && ($n = !0), er && (xe = ye({}, Rw), Re = Cs(null), er.html === !0 && (ye(xe, Bw), ye(Re, Pw)), er.svg === !0 && (ye(xe, Gd), ye(Re, Kd), ye(Re, su)), er.svgFilters === !0 && (ye(xe, Yd), ye(Re, Kd), ye(Re, su)), er.mathMl === !0 && (ye(xe, jd), ye(Re, Fw), ye(Re, su))), Nt.tagCheck = null, Nt.attributeCheck = null, yt(v, "ADD_TAGS") && (typeof v.ADD_TAGS == "function" ? Nt.tagCheck = v.ADD_TAGS : Fo(v.ADD_TAGS) && (xe === xr && (xe = en(xe)), ye(xe, v.ADD_TAGS, Q))), yt(v, "ADD_ATTR") && (typeof v.ADD_ATTR == "function" ? Nt.attributeCheck = v.ADD_ATTR : Fo(v.ADD_ATTR) && (Re === Ot && (Re = en(Re)), ye(Re, v.ADD_ATTR, Q))), yt(v, "ADD_URI_SAFE_ATTR") && Fo(v.ADD_URI_SAFE_ATTR) && ye(io, v.ADD_URI_SAFE_ATTR, Q), yt(v, "FORBID_CONTENTS") && Fo(v.FORBID_CONTENTS) && (Yt === no && (Yt = en(Yt)), ye(Yt, v.FORBID_CONTENTS, Q)), yt(v, "ADD_FORBID_CONTENTS") && Fo(v.ADD_FORBID_CONTENTS) && (Yt === no && (Yt = en(Yt)), ye(Yt, v.ADD_FORBID_CONTENTS, Q)), mr && (xe["#text"] = !0), Gt && ye(xe, ["html", "head", "body"]), xe.table && (ye(xe, ["tbody"]), delete Dn.tbody), v.TRUSTED_TYPES_POLICY) {
      if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw vi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw vi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const H = W;
      W = v.TRUSTED_TYPES_POLICY;
      try {
        L = Qe("");
      } catch (j) {
        throw W = H, j;
      }
    } else
      v.TRUSTED_TYPES_POLICY === null ? (W = void 0, L = "") : (W === void 0 && (W = Pe()), W && typeof L == "string" && (L = Qe("")));
    xt && xt(v), an = v;
  }, oi = ye({}, [...Gd, ...Yd, ...a2]), ii = ye({}, [...jd, ...l2]), Hi = function(v, I, H) {
    return I.namespaceURI === Mt ? v === "svg" : I.namespaceURI === Mr ? v === "svg" && (H === "annotation-xml" || vr[H]) : Boolean(oi[v]);
  }, zi = function(v, I, H) {
    return I.namespaceURI === Mt ? v === "math" : I.namespaceURI === Br ? v === "math" && uo[H] : Boolean(ii[v]);
  }, Rr = function(v, I, H) {
    return I.namespaceURI === Br && !uo[H] || I.namespaceURI === Mr && !vr[H] ? !1 : !ii[v] && (Wi[v] || !oi[v]);
  }, qi = function(v) {
    let I = S(v);
    (!I || !I.tagName) && (I = {
      namespaceURI: tr,
      tagName: "template"
    });
    const H = Ka(v.tagName), j = Ka(I.tagName);
    return ao[v.namespaceURI] ? v.namespaceURI === Br ? Hi(H, I, j) : v.namespaceURI === Mr ? zi(H, I, j) : v.namespaceURI === Mt ? Rr(H, I, j) : !!(re === "application/xhtml+xml" && ao[v.namespaceURI]) : !1;
  }, Bt = function(v) {
    us(n.removed, {
      element: v
    });
    try {
      S(v).removeChild(v);
    } catch {
      if (O(v), !S(v))
        throw vi("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, si = function(v) {
    const I = D(v);
    if (I) {
      const j = [];
      Va(I, (ae) => {
        us(j, ae);
      }), Va(j, (ae) => {
        try {
          O(ae);
        } catch {
        }
      });
    }
    const H = T(v);
    if (H)
      for (let j = H.length - 1; j >= 0; --j) {
        const ae = H[j], _e = ae && ae.name;
        if (typeof _e == "string")
          try {
            v.removeAttribute(_e);
          } catch {
          }
      }
  }, Nn = function(v, I) {
    try {
      us(n.removed, {
        attribute: I.getAttributeNode(v),
        from: I
      });
    } catch {
      us(n.removed, {
        attribute: null,
        from: I
      });
    }
    if (I.removeAttribute(v), v === "is")
      if ($n || Xn)
        try {
          Bt(I);
        } catch {
        }
      else
        try {
          I.setAttribute(v, "");
        } catch {
        }
  }, Gi = function(v) {
    const I = T(v);
    if (!!I)
      for (let H = I.length - 1; H >= 0; --H) {
        const j = I[H], ae = j && j.name;
        if (!(typeof ae != "string" || Re[Q(ae)]))
          try {
            v.removeAttribute(ae);
          } catch {
          }
      }
  }, ai = function(v) {
    const I = [v];
    for (; I.length > 0; ) {
      const H = I.pop();
      (B ? B(H) : H.nodeType) === yr.element && Gi(H);
      const ae = D(H);
      if (ae)
        for (let _e = ae.length - 1; _e >= 0; --_e)
          I.push(ae[_e]);
    }
  }, fo = function(v) {
    let I = null, H = null;
    if (hr)
      v = "<remove></remove>" + v;
    else {
      const _e = Dw(v, /^[\r\n\t ]+/);
      H = _e && _e[0];
    }
    re === "application/xhtml+xml" && tr === Mt && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const j = W ? Qe(v) : v;
    if (tr === Mt)
      try {
        I = new g().parseFromString(j, re);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = Fe.createDocument(tr, "template", null);
      try {
        I.documentElement.innerHTML = so ? L : j;
      } catch {
      }
    }
    const ae = I.body || I.documentElement;
    return v && H && ae.insertBefore(r.createTextNode(H), ae.childNodes[0] || null), tr === Mt ? rn.call(I, Gt ? "html" : "body")[0] : Gt ? I.documentElement : ae;
  }, po = function(v) {
    return Ge.call(
      v.ownerDocument || v,
      v,
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null
    );
  }, Pr = function(v) {
    return v = Ea(v, Zs, " "), v = Ea(v, Js, " "), v = Ea(v, Ui, " "), v;
  }, Xs = function(v) {
    var I;
    v.normalize();
    const H = Ge.call(
      v.ownerDocument || v,
      v,
      m.SHOW_TEXT | m.SHOW_COMMENT | m.SHOW_CDATA_SECTION | m.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let j = H.nextNode();
    for (; j; )
      j.data = Pr(j.data), j = H.nextNode();
    const ae = (I = v.querySelectorAll) === null || I === void 0 ? void 0 : I.call(v, "template");
    ae && Va(ae, (_e) => {
      ho(_e.content) && Xs(_e.content);
    });
  }, Yi = function(v) {
    const I = F ? F(v) : null;
    return typeof I != "string" || Q(I) !== "form" ? !1 : typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || v.attributes !== T(v) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function" || v.nodeType !== B(v) || v.childNodes !== D(v);
  }, ho = function(v) {
    if (!B || typeof v != "object" || v === null)
      return !1;
    try {
      return B(v) === yr.documentFragment;
    } catch {
      return !1;
    }
  }, mo = function(v) {
    if (!B || typeof v != "object" || v === null)
      return !1;
    try {
      return typeof B(v) == "number";
    } catch {
      return !1;
    }
  };
  function Mn(q, v, I) {
    q.length !== 0 && Va(q, (H) => {
      H.call(n, v, I, an);
    });
  }
  const _l = function(v, I) {
    return !!(Lr && v.hasChildNodes() && !mo(v.firstElementChild) && kt(Ww, v.textContent) && kt(Ww, v.innerHTML) || Lr && v.namespaceURI === Mt && I === "style" && mo(v.firstElementChild) || v.nodeType === yr.processingInstruction || Lr && v.nodeType === yr.comment && kt(_2, v.data));
  }, Qs = function(v, I) {
    if (!Dn[I] && ta(I) && (be.tagNameCheck instanceof RegExp && kt(be.tagNameCheck, I) || be.tagNameCheck instanceof Function && be.tagNameCheck(I)))
      return !1;
    if (mr && !Yt[I]) {
      const H = S(v), j = D(v);
      if (j && H) {
        const ae = j.length;
        for (let _e = ae - 1; _e >= 0; --_e) {
          const rt = wr ? j[_e] : V(j[_e], !0);
          H.insertBefore(rt, x(v));
        }
      }
    }
    return Bt(v), !0;
  }, gl = function(v) {
    if (Mn($e.beforeSanitizeElements, v, null), Yi(v))
      return Bt(v), !0;
    const I = Q(F ? F(v) : v.nodeName);
    if (Mn($e.uponSanitizeElement, v, {
      tagName: I,
      allowedTags: xe
    }), _l(v, I))
      return Bt(v), !0;
    if (Dn[I] || !(Nt.tagCheck instanceof Function && Nt.tagCheck(I)) && !xe[I])
      return Qs(v, I);
    if ((B ? B(v) : v.nodeType) === yr.element && !qi(v) || (I === "noscript" || I === "noembed" || I === "noframes") && kt(g2, v.innerHTML))
      return Bt(v), !0;
    if (ht && v.nodeType === yr.text) {
      const j = Pr(v.textContent);
      v.textContent !== j && (us(n.removed, {
        element: v.cloneNode()
      }), v.textContent = j);
    }
    return Mn($e.afterSanitizeElements, v, null), !1;
  }, ea = function(v, I, H) {
    if (Ct[I] || Dr && (I === "id" || I === "name") && (H in r || H in ni))
      return !1;
    const j = Re[I] || Nt.attributeCheck instanceof Function && Nt.attributeCheck(I, v);
    if (!(On && kt(bt, I))) {
      if (!(Jo && kt(qt, I))) {
        if (j) {
          if (!io[I]) {
            if (!kt(Zo, Ea(H, _n, ""))) {
              if (!((I === "src" || I === "xlink:href" || I === "href") && v !== "script" && Ow(H, "data:") === 0 && ro[v])) {
                if (!(pt && !kt(on, Ea(H, _n, "")))) {
                  if (H)
                    return !1;
                }
              }
            }
          }
        } else if (!(ta(v) && (be.tagNameCheck instanceof RegExp && kt(be.tagNameCheck, v) || be.tagNameCheck instanceof Function && be.tagNameCheck(v)) && (be.attributeNameCheck instanceof RegExp && kt(be.attributeNameCheck, I) || be.attributeNameCheck instanceof Function && be.attributeNameCheck(I, v)) || I === "is" && be.allowCustomizedBuiltInElements && (be.tagNameCheck instanceof RegExp && kt(be.tagNameCheck, H) || be.tagNameCheck instanceof Function && be.tagNameCheck(H))))
          return !1;
      }
    }
    return !0;
  }, ji = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ta = function(v) {
    return !ji[Ka(v)] && kt(sn, v);
  }, yc = function(v, I, H, j) {
    if (W && typeof y == "object" && typeof y.getAttributeType == "function" && !H)
      switch (y.getAttributeType(v, I)) {
        case "TrustedHTML":
          return Qe(j);
        case "TrustedScriptURL":
          return et(j);
      }
    return j;
  }, $l = function(v, I, H, j) {
    try {
      H ? v.setAttributeNS(H, I, j) : v.setAttribute(I, j), Yi(v) ? Bt(v) : Lw(n.removed);
    } catch {
      Nn(I, v);
    }
  }, na = function(v) {
    Mn($e.beforeSanitizeAttributes, v, null);
    const I = v.attributes;
    if (!I || Yi(v))
      return;
    const H = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Re,
      forceKeepAttr: void 0
    };
    let j = I.length;
    const ae = Q(v.nodeName);
    for (; j--; ) {
      const _e = I[j], rt = _e.name, Ze = _e.namespaceURI, jt = _e.value, ln = Q(rt), oa = jt;
      let Vt = rt === "value" ? oa : e2(oa);
      if (H.attrName = ln, H.attrValue = Vt, H.keepAttr = !0, H.forceKeepAttr = void 0, Mn($e.uponSanitizeAttribute, v, H), Vt = H.attrValue, Or && (ln === "id" || ln === "name") && Ow(Vt, Nr) !== 0 && (Nn(rt, v), Vt = Nr + Vt), Lr && kt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Vt)) {
        Nn(rt, v);
        continue;
      }
      if (ln === "attributename" && Dw(Vt, "href")) {
        Nn(rt, v);
        continue;
      }
      if (!H.forceKeepAttr) {
        if (!H.keepAttr) {
          Nn(rt, v);
          continue;
        }
        if (!pr && kt($2, Vt)) {
          Nn(rt, v);
          continue;
        }
        if (ht && (Vt = Pr(Vt)), !ea(ae, ln, Vt)) {
          Nn(rt, v);
          continue;
        }
        Vt = yc(ae, ln, Ze, Vt), Vt !== oa && $l(v, rt, Ze, Vt);
      }
    }
    Mn($e.afterSanitizeAttributes, v, null);
  }, wo = function(v) {
    let I = null;
    const H = po(v);
    for (Mn($e.beforeSanitizeShadowDOM, v, null); I = H.nextNode(); )
      if (Mn($e.uponSanitizeShadowNode, I, null), gl(I), na(I), ho(I.content) && wo(I.content), (B ? B(I) : I.nodeType) === yr.element) {
        const ae = A(I);
        ho(ae) && (ra(ae), wo(ae));
      }
    Mn($e.afterSanitizeShadowDOM, v, null);
  }, ra = function(v) {
    const I = [{
      node: v,
      shadow: null
    }];
    for (; I.length > 0; ) {
      const H = I.pop();
      if (H.shadow) {
        wo(H.shadow);
        continue;
      }
      const j = H.node, _e = (B ? B(j) : j.nodeType) === yr.element, rt = D(j);
      if (rt)
        for (let Ze = rt.length - 1; Ze >= 0; --Ze)
          I.push({
            node: rt[Ze],
            shadow: null
          });
      if (_e) {
        const Ze = F ? F(j) : null;
        if (typeof Ze == "string" && Q(Ze) === "template") {
          const jt = j.content;
          ho(jt) && I.push({
            node: jt,
            shadow: null
          });
        }
      }
      if (_e) {
        const Ze = A(j);
        ho(Ze) && I.push({
          node: null,
          shadow: Ze
        }, {
          node: Ze,
          shadow: null
        });
      }
    }
  };
  return n.sanitize = function(q) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, H = null, j = null, ae = null;
    if (so = !q, so && (q = "<!-->"), typeof q != "string" && !mo(q) && (q = i2(q), typeof q != "string"))
      throw vi("dirty is not a string, aborting");
    if (!n.isSupported)
      return q;
    Xo ? (xe = Jn, Re = gn) : co(v), ($e.uponSanitizeElement.length > 0 || $e.uponSanitizeAttribute.length > 0) && (xe = en(xe)), $e.uponSanitizeAttribute.length > 0 && (Re = en(Re)), n.removed = [];
    const _e = wr && typeof q != "string" && mo(q);
    if (_e) {
      const jt = F ? F(q) : q.nodeName;
      if (typeof jt == "string") {
        const ln = Q(jt);
        if (!xe[ln] || Dn[ln])
          throw vi("root node is forbidden and cannot be sanitized in-place");
      }
      if (Yi(q))
        throw vi("root node is clobbered and cannot be sanitized in-place");
      try {
        ra(q);
      } catch (ln) {
        throw si(q), ln;
      }
    } else if (mo(q))
      I = fo("<!---->"), H = I.ownerDocument.importNode(q, !0), H.nodeType === yr.element && H.nodeName === "BODY" || H.nodeName === "HTML" ? I = H : I.appendChild(H), ra(H);
    else {
      if (!$n && !ht && !Gt && q.indexOf("<") === -1)
        return W && Qn ? Qe(q) : q;
      if (I = fo(q), !I)
        return $n ? null : Qn ? L : "";
    }
    I && hr && Bt(I.firstChild);
    const rt = po(_e ? q : I);
    try {
      for (; j = rt.nextNode(); )
        gl(j), na(j), ho(j.content) && wo(j.content);
    } catch (jt) {
      throw _e && si(q), jt;
    }
    if (_e)
      return Va(n.removed, (jt) => {
        jt.element && ai(jt.element);
      }), ht && Xs(q), q;
    if ($n) {
      if (ht && Xs(I), Xn)
        for (ae = Be.call(I.ownerDocument); I.firstChild; )
          ae.appendChild(I.firstChild);
      else
        ae = I;
      return (Re.shadowroot || Re.shadowrootmode) && (ae = Tr.call(s, ae, !0)), ae;
    }
    let Ze = Gt ? I.outerHTML : I.innerHTML;
    return Gt && xe["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && kt(w2, I.ownerDocument.doctype.name) && (Ze = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + Ze), ht && (Ze = Pr(Ze)), W && Qn ? Qe(Ze) : Ze;
  }, n.setConfig = function() {
    let q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    co(q), Xo = !0, Jn = xe, gn = Re;
  }, n.clearConfig = function() {
    an = null, Xo = !1, Jn = null, gn = null, W = X, L = "";
  }, n.isValidAttribute = function(q, v, I) {
    an || co({});
    const H = Q(q), j = Q(v);
    return ea(H, j, I);
  }, n.addHook = function(q, v) {
    typeof v == "function" && (!yt($e, q) || us($e[q], v));
  }, n.removeHook = function(q, v) {
    if (!!yt($e, q)) {
      if (v !== void 0) {
        const I = XT($e[q], v);
        return I === -1 ? void 0 : QT($e[q], I, 1)[0];
      }
      return Lw($e[q]);
    }
  }, n.removeHooks = function(q) {
    !yt($e, q) || ($e[q] = []);
  }, n.removeAllHooks = function() {
    $e = Hw();
  }, n;
}
var C2 = o1();
const kr = (e) => {
  let n = "";
  if (e)
    try {
      n = MT(new Date(e), Tt.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return n;
}, i1 = (e) => e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"), s1 = (e) => C2.sanitize(e), a1 = (e, n) => {
  const r = i1(e).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), s = r.length > n ? "..." : "";
  return r.substring(0, n) + s;
}, V2 = (e, n) => {
  let r = n;
  switch (e) {
    case 2:
      r = r.filter(
        (s) => UT(s.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (s) => HT(s.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (s) => FT(s.firstEventTime)
      );
      break;
  }
  return r;
}, ic = "/alec", l1 = "/alec/engine/configuration", u1 = "/alec/llm/configuration", E2 = "/alec/llm/validate", c1 = "/alec/llm/suggestions", S2 = "/alec/llm/usage", d1 = "/alec/situation", I2 = async () => {
  try {
    const e = await Dt.get(`${l1}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, k2 = async (e) => {
  try {
    return (await Dt.post(l1, e)).status === 200;
  } catch {
    return !1;
  }
}, A2 = async () => {
  try {
    const e = await Dt.get(u1);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, T2 = async (e) => {
  try {
    const n = await Dt.post(u1, e);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, x2 = async (e) => {
  try {
    const n = await Dt.post(E2, e);
    return n.status === 200 ? n.data : { ok: !1, message: `Unexpected response (HTTP ${n.status}).` };
  } catch {
    return { ok: !1, message: "Could not reach the server to validate." };
  }
}, f1 = async (e) => {
  try {
    const n = await Dt.get(`${c1}/${e}`);
    return n.status === 200 ? n.data : n.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, L2 = async (e) => {
  try {
    const n = await Dt.post(
      `${c1}/${e}/reanalyze`
    );
    return n.status === 202 || n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, D2 = async (e = 30) => {
  try {
    const n = await Dt.get(`${S2}?days=${e}`);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, p1 = async (e, n) => {
  try {
    const r = await Dt.post(`${ic}/situation/${n}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return n == Tt.REJECTED.toLowerCase() && r.status === 200 && await Yg(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, zw = async (e, n) => {
  try {
    return (await Dt.delete(`${ic}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: n
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, h1 = async (e, n) => {
  try {
    return (await Dt.put(`${ic}/situation/alarm/`, {
      situationId: e,
      alarmIdList: n
    })).status === 200;
  } catch {
    return !1;
  }
}, O2 = async (e) => {
  try {
    return (await Dt.post(d1, e)).status === 200;
  } catch {
    return !1;
  }
}, N2 = async () => {
  try {
    return (await Dt.post(`${d1}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, M2 = async () => {
  try {
    return (await Dt.post(`${ic}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, B2 = window.Vue.defineComponent, In = window.Vue.unref, Zd = window.Vue.normalizeClass, Er = window.Vue.createElementVNode, _i = window.Vue.toDisplayString, Ao = window.Vue.openBlock, To = window.Vue.createElementBlock, Ia = window.Vue.createCommentVNode, qw = window.Vue.createVNode, Zf = window.Vue.createTextVNode, R2 = window.Vue.renderList, P2 = window.Vue.Fragment, F2 = window.Vue.pushScopeId, U2 = window.Vue.popScopeId, vp = (e) => (F2("data-v-aab1b2b8"), e = e(), U2(), e), W2 = { class: "content" }, H2 = { class: "title-row" }, z2 = { class: "title" }, q2 = ["title"], G2 = {
  key: 1,
  class: "accepted"
}, Y2 = {
  key: 2,
  class: "rejected"
}, j2 = /* @__PURE__ */ vp(() => /* @__PURE__ */ Er("span", { class: "info-title" }, " Duration: ", -1)), K2 = { key: 0 }, Z2 = /* @__PURE__ */ vp(() => /* @__PURE__ */ Er("span", { class: "info-title" }, " First Event: ", -1)), J2 = { class: "description" }, X2 = /* @__PURE__ */ vp(() => /* @__PURE__ */ Er("hr", null, null, -1)), Q2 = {
  key: 1,
  class: "count-info"
}, ex = /* @__PURE__ */ Zf(" Alarms: "), tx = { class: "info-title" }, nx = window.Vue.onMounted, rx = window.Vue.ref, ox = /* @__PURE__ */ B2({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: n }) {
    const r = e, s = Tt.ACCEPTED, a = Tt.REJECTED, u = new Date().getTime(), c = () => {
      var m;
      n("situation-selected", (m = r.situationInfo) == null ? void 0 : m.id);
    }, f = rx("none");
    return nx(async () => {
      var w;
      if (((w = r.situationInfo) == null ? void 0 : w.id) === void 0)
        return;
      const m = await f1(r.situationInfo.id);
      m && m.status && (f.value = m.status);
    }), (m, w) => {
      var g, y, b;
      return Ao(), To("div", {
        onClick: c,
        class: Zd(["card", {
          rejected: r.situationInfo.status == In(a)
        }])
      }, [
        Er("div", {
          class: Zd(["severity-line", [`${(y = (g = r.situationInfo) == null ? void 0 : g.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
        }, null, 2),
        Er("div", W2, [
          Er("div", H2, [
            Er("div", z2, "Situation " + _i((b = r.situationInfo) == null ? void 0 : b.id), 1),
            f.value !== "none" ? (Ao(), To("span", {
              key: 0,
              class: Zd(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + _i(f.value === "pending" ? "\u2026" : ""), 11, q2)) : Ia("", !0),
            r.situationInfo.status == In(s) ? (Ao(), To("div", G2, [
              qw(In(J), {
                icon: In(Ns),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Ia("", !0),
            r.situationInfo.status == In(a) ? (Ao(), To("div", Y2, [
              qw(In(J), {
                icon: In(Kg),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Ia("", !0)
          ]),
          Er("div", null, [
            j2,
            Zf(" " + _i(In(oc)(
              In(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? Ia("", !0) : (Ao(), To("div", K2, [
            Z2,
            Zf(_i(In(kr)(r.situationInfo.firstEventTime)), 1)
          ])),
          Er("div", J2, _i(In(a1)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          X2,
          r.situationInfo.relatedAlarms ? (Ao(), To("div", Q2, [
            ex,
            Er("span", tx, _i(r.situationInfo.relatedAlarms.length), 1)
          ])) : Ia("", !0),
          (Ao(!0), To(P2, null, R2(In(Ne.exports.keys)(
            In(Ne.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (V) => (Ao(), To("div", {
            class: "info-title",
            key: V
          }, " - " + _i(V), 1))), 128))
        ])
      ], 2);
    };
  }
});
const m1 = /* @__PURE__ */ Ve(ox, [["__scopeId", "data-v-aab1b2b8"]]), ix = window.Vue.openBlock, sx = window.Vue.createElementBlock, ax = window.Vue.createElementVNode;
var lx = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const ux = {}, cx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, dx = /* @__PURE__ */ ax("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), fx = [
  dx
];
function px(e, n) {
  return ix(), sx("svg", cx, fx);
}
var hx = /* @__PURE__ */ lx(ux, [["render", px]]);
const mx = window.Vue.openBlock, wx = window.Vue.createElementBlock, w1 = window.Vue.createElementVNode;
var vx = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const _x = {}, gx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $x = /* @__PURE__ */ w1("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), yx = /* @__PURE__ */ w1("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), bx = [
  $x,
  yx
];
function Cx(e, n) {
  return mx(), wx("svg", gx, bx);
}
var Vx = /* @__PURE__ */ vx(_x, [["render", Cx]]);
const Ex = window.Vue.openBlock, Sx = window.Vue.createElementBlock, Ix = window.Vue.createElementVNode;
var kx = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const Ax = {}, Tx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, xx = /* @__PURE__ */ Ix("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), Lx = [
  xx
];
function Dx(e, n) {
  return Ex(), Sx("svg", Tx, Lx);
}
var Ox = /* @__PURE__ */ kx(Ax, [["render", Dx]]);
const Nx = window.Vue.openBlock, Mx = window.Vue.createElementBlock, Bx = window.Vue.createElementVNode;
var Rx = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const Px = {}, Fx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Ux = /* @__PURE__ */ Bx("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), Wx = [
  Ux
];
function Hx(e, n) {
  return Nx(), Mx("svg", Fx, Wx);
}
var v1 = /* @__PURE__ */ Rx(Px, [["render", Hx]]);
const zx = window.Vue.defineComponent, xo = window.Vue.unref, au = window.Vue.normalizeClass, lu = window.Vue.createVNode, qx = window.Vue.openBlock, Gx = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Yx = { class: "paginator" }, jx = /* @__PURE__ */ zx({
  __name: "SimplePagination",
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(e, { emit: n }) {
    const r = e, s = (a) => {
      a >= 0 && a <= r.totalPages - 1 && n("go-to-page", a);
    };
    return (a, u) => (qx(), Gx("div", Yx, [
      lu(xo(J), {
        icon: xo(hx),
        "aria-hidden": "true",
        class: au(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      lu(xo(J), {
        icon: xo(Ox),
        "aria-hidden": "true",
        class: au(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      lu(xo(J), {
        icon: xo(v1),
        "aria-hidden": "true",
        class: au(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      lu(xo(J), {
        icon: xo(Vx),
        "aria-hidden": "true",
        class: au(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const Kx = /* @__PURE__ */ Ve(jx, [["__scopeId", "data-v-54e14a59"]]);
const Ce = function(e) {
  e = e || "feather";
  const n = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), n].join("-");
}, Zx = window.Vue.computed, sc = (e, n) => {
  const r = {};
  return Object.keys(n).forEach((s) => {
    r[`${s}Label`] = Zx(() => e.value[s] ? e.value[s] : n[s]);
  }), r;
};
const Mi = function(e, n) {
  return window ? window.setTimeout(e, n) : setTimeout(e, n);
}, Bi = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var Jx = Object.defineProperty, Xx = Object.defineProperties, Qx = Object.getOwnPropertyDescriptors, Gw = Object.getOwnPropertySymbols, eL = Object.prototype.hasOwnProperty, tL = Object.prototype.propertyIsEnumerable, Yw = (e, n, r) => n in e ? Jx(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, jw = (e, n) => {
  for (var r in n || (n = {}))
    eL.call(n, r) && Yw(e, r, n[r]);
  if (Gw)
    for (var r of Gw(n))
      tL.call(n, r) && Yw(e, r, n[r]);
  return e;
}, nL = (e, n) => Xx(e, Qx(n));
const rL = window.Vue.defineComponent, oL = window.Vue.h;
var iL = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const sL = {
  center: {
    type: Boolean,
    default: !1
  }
}, aL = rL({
  props: sL,
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
        const { clientWidth: n, clientHeight: r } = this.parent, s = Math.round(Math.max(n, r));
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
        this.styles = nL(jw({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Bi(this.failsafe), this.failsafe = Mi(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return oL("div", {
        style: jw({}, this.styles),
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
var qo = /* @__PURE__ */ iL(aL, [["__scopeId", "data-v-18e2a5db"]]);
const lL = window.Vue.openBlock, uL = window.Vue.createElementBlock, cL = window.Vue.createElementVNode;
var dL = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const fL = {}, pL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hL = /* @__PURE__ */ cL("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), mL = [
  hL
];
function wL(e, n) {
  return lL(), uL("svg", pL, mL);
}
var Rs = /* @__PURE__ */ dL(fL, [["render", wL]]);
const Kw = window.Vue.computed, vL = (e, n, r) => {
  const s = Kw(() => n.value.filter((u) => !u.disabled)), a = Kw(() => e.value ? s.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(s.value[s.value.length - 1]) : r(s.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === s.value.length - 1 ? r(s.value[0]) : r(s.value[a.value + 1]));
    }
  };
};
const _L = window.Vue.openBlock, gL = window.Vue.createElementBlock, _p = window.Vue.createElementVNode;
var $L = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const yL = {}, bL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, CL = /* @__PURE__ */ _p("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), VL = /* @__PURE__ */ _p("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), EL = /* @__PURE__ */ _p("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), SL = [
  CL,
  VL,
  EL
];
function IL(e, n) {
  return _L(), gL("svg", bL, SL);
}
var kL = /* @__PURE__ */ $L(yL, [["render", IL]]), AL = Object.defineProperty, TL = Object.defineProperties, xL = Object.getOwnPropertyDescriptors, Zw = Object.getOwnPropertySymbols, LL = Object.prototype.hasOwnProperty, DL = Object.prototype.propertyIsEnumerable, Jw = (e, n, r) => n in e ? AL(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, _1 = (e, n) => {
  for (var r in n || (n = {}))
    LL.call(n, r) && Jw(e, r, n[r]);
  if (Zw)
    for (var r of Zw(n))
      DL.call(n, r) && Jw(e, r, n[r]);
  return e;
}, g1 = (e, n) => TL(e, xL(n));
const Ps = window.Vue.defineComponent, sl = window.Vue.resolveComponent, Sr = window.Vue.openBlock, Es = window.Vue.createElementBlock, OL = window.Vue.createVNode, Wu = window.Vue.createBlock, NL = window.Vue.withModifiers, Ms = window.Vue.inject, al = window.Vue.computed, ML = window.Vue.normalizeClass, cs = window.Vue.createElementVNode, Hu = window.Vue.toDisplayString, Lu = window.Vue.renderSlot, Ja = window.Vue.createCommentVNode, BL = window.Vue.withDirectives, RL = window.Vue.vShow, Jf = window.Vue.ref, Xw = window.Vue.toRef, Qw = window.Vue.nextTick, Xf = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const gp = window.Vue.provide, ev = window.Vue.isRef, PL = window.Vue.onBeforeUnmount;
var fl = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const FL = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, UL = Ps({
  props: FL,
  components: {
    FeatherIcon: J
  }
}), WL = ["title"];
function HL(e, n, r, s, a, u) {
  const c = sl("FeatherIcon");
  return Sr(), Es("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    OL(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, WL);
}
var zL = /* @__PURE__ */ fl(UL, [["render", HL], ["__scopeId", "data-v-4265058e"]]);
const qL = Ps({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Rs;
    }
  },
  components: {
    ActionIcon: zL
  }
});
function GL(e, n, r, s, a, u) {
  const c = sl("ActionIcon");
  return Sr(), Wu(c, {
    onClick: n[0] || (n[0] = NL((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var YL = /* @__PURE__ */ fl(qL, [["render", GL]]);
const jL = Ps({
  computed: {
    errorIcon() {
      return kL;
    }
  },
  components: {
    FeatherIcon: J
  }
});
function KL(e, n, r, s, a, u) {
  const c = sl("FeatherIcon");
  return Sr(), Wu(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var ZL = /* @__PURE__ */ fl(jL, [["render", KL], ["__scopeId", "data-v-0b8faef3"]]);
const JL = {
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
}, XL = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, QL = Ps({
  emits: XL,
  props: JL,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = Ms("wrapperOptions", {}), n = Ms("validationErrorMessage", !1), r = al(() => e.error ? e.error : n && n.value ? n.value : !1);
    return g1(_1({}, e), { error: r });
  },
  computed: {
    computedClearText() {
      return this.clearText ? this.clearText : this.clear ? this.clear : "";
    },
    inputId() {
      return this.for;
    },
    hasPre() {
      return this.$slots.pre && this.$slots.pre().findIndex((n) => n.children && n.children.length !== 0) !== -1;
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
      const n = { childList: !0, subtree: !0 }, r = () => {
        const s = this.$el.querySelector(".prefix");
        this.prefixWidth = s ? s.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(e, n), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: YL,
    ErrorIcon: ZL
  }
}), eD = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, tD = ["for"], nD = { class: "prefix" }, rD = { class: "post" };
function oD(e, n, r, s, a, u) {
  const c = sl("ClearIcon"), f = sl("ErrorIcon");
  return Sr(), Es("div", {
    class: ML(["feather-input-wrapper-container", e.containerCls])
  }, [
    cs("fieldset", eD, [
      cs("legend", null, Hu(e.label), 1)
    ]),
    cs("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Hu(e.label), 9, tD),
    cs("div", {
      class: "feather-input-wrapper",
      onClick: n[1] || (n[1] = (...m) => e.handleWrapperClick && e.handleWrapperClick(...m))
    }, [
      cs("div", nD, [
        Lu(e.$slots, "pre", {}, void 0, !0)
      ]),
      Lu(e.$slots, "default", {}, void 0, !0),
      cs("div", rD, [
        e.showClear && e.computedClearText ? (Sr(), Wu(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: n[0] || (n[0] = (m) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Ja("", !0),
        e.error ? (Sr(), Wu(f, { key: 1 })) : Ja("", !0),
        Lu(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var ac = /* @__PURE__ */ fl(QL, [["render", oD], ["__scopeId", "data-v-4db296db"]]);
const iD = Ps({
  setup() {
    const e = Ms("subTextOptions", {}), n = Ms("validationErrorMessage", !1), r = al(() => e.error ? e.error : n && n.value ? n.value : "");
    return g1(_1({}, e), { error: r });
  }
}), sD = { class: "feather-input-sub-text" }, aD = {
  key: 0,
  class: "feather-input-spacer"
}, lD = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, uD = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function cD(e, n, r, s, a, u) {
  return BL((Sr(), Es("div", sD, [
    !e.hint && !e.error.length ? (Sr(), Es("div", aD, "\xA0")) : Ja("", !0),
    e.hint && !e.error.length ? (Sr(), Es("div", lD, Hu(e.hint), 1)) : Ja("", !0),
    e.error.length > 0 ? (Sr(), Es("div", uD, Hu(e.error), 1)) : Ja("", !0),
    Lu(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [RL, !e.inline || e.hint || e.error.length]
  ]);
}
var Fs = /* @__PURE__ */ fl(iD, [["render", cD], ["__scopeId", "data-v-8e0ac99e"]]);
const dD = {
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
Ps({
  props: dD,
  setup(e) {
    const n = Ms("featherFormErrors", Jf([])), r = Xw(e, "errorList"), s = al(() => {
      var g;
      return (g = r.value) != null && g.length ? r.value : n.value;
    }), a = Xw(e, "generalError"), u = (g) => {
      document.getElementById(g).focus();
    }, c = (g) => g.replace(/ \*$/, ""), f = Jf(), m = (g) => `${c(g.label)} - ${g.message}`, w = al(() => (s.value.length && Qw(() => f.value.focus()), e.headingText(s.value)));
    return Xf(a, (g) => {
      g.length && Qw(() => f.value.focus());
    }), {
      errors: s,
      errorsHeading: w,
      heading: f,
      focusElement: u,
      mainError: a,
      getFullMessage: m
    };
  }
});
const Us = (e, n, r, s, a) => {
  const u = Ms("featherForm", !1);
  if (s && u && e.value) {
    const c = Jf("");
    gp("validationErrorMessage", c);
    const f = () => {
      if (a && ev(a) && a.value)
        return c.value = a.value, {
          success: !1,
          message: a.value,
          inputId: e.value,
          label: r
        };
      try {
        return s.validateSync(n.value), c.value = "", { success: !0 };
      } catch (g) {
        const y = g;
        return c.value = y.errors[0], {
          success: !1,
          message: y.errors[0],
          inputId: e.value,
          label: r
        };
      }
    }, w = {
      clear: () => {
        c.value = "";
      },
      validate: f
    };
    return a && ev(a) && Xf(a, () => {
      u.runValidation();
    }), Xf(e, (g, y) => {
      g && u && u.register(g, w), y && u && u.deregister(y);
    }, { immediate: !0 }), PL(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Ws = (e) => ({
  inherittedAttrs: al(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Hs = {
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
}, zs = (e) => {
  gp("subTextOptions", e);
}, lc = {
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
}, uc = (e) => {
  gp("wrapperOptions", e);
}, uu = window.Vue.ref, fD = window.Vue.watch, pD = window.Vue.watchEffect, tv = window.Vue.computed, Jd = window.Vue.provide, $1 = (e, n, r, s, a) => {
  const u = uu([]), c = uu(), f = uu(), m = uu();
  pD(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((A) => A.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let A = u.value.filter((T) => !T.disabled);
      A = A.length ? A : u.value, f.value = A[0], f.value.first = !0;
    }
  }), fD(c, (S, A) => {
    A && (A.checked = !1), S && (S.checked = !0);
  });
  const w = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (n("update:modelValue", S.value), c.value = S, S.focus()));
  }, g = tv(() => c.value || f.value), y = vL(g, u, w), b = tv(() => Ce("feather-radio-group"));
  m.value = b.value;
  const { validate: V } = Us(m, e, r, s, a);
  return Jd("register", (S) => {
    u.value = [...u.value, S], m.value === b.value && (m.value = S.id);
  }), Jd("select", w), Jd("blur", (S) => {
    n("blur", S);
  }), {
    keydown: (S) => {
      switch (S.keyCode) {
        case 13:
        case 32:
          c.value ? w(c.value) : f.value && w(f.value);
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
    validate: V,
    firstElementId: m,
    groupId: b
  };
};
var hD = Object.defineProperty, mD = Object.defineProperties, wD = Object.getOwnPropertyDescriptors, nv = Object.getOwnPropertySymbols, vD = Object.prototype.hasOwnProperty, _D = Object.prototype.propertyIsEnumerable, rv = (e, n, r) => n in e ? hD(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, As = (e, n) => {
  for (var r in n || (n = {}))
    vD.call(n, r) && rv(e, r, n[r]);
  if (nv)
    for (var r of nv(n))
      _D.call(n, r) && rv(e, r, n[r]);
  return e;
}, y1 = (e, n) => mD(e, wD(n));
const Yo = window.Vue.defineComponent, Xa = window.Vue.inject, zu = window.Vue.computed, Qa = window.Vue.ref, Zn = window.Vue.resolveComponent, xn = window.Vue.openBlock, pl = window.Vue.createElementBlock, b1 = window.Vue.normalizeClass, Ar = window.Vue.renderSlot, Ho = window.Vue.createBlock, ll = window.Vue.createCommentVNode, qu = window.Vue.createElementVNode, gD = window.Vue.withModifiers, cc = window.Vue.createVNode, C1 = window.Vue.toRef, Qf = window.Vue.mergeProps, eo = window.Vue.withCtx, $D = window.Vue.h, yD = window.Vue.provide;
var jo = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const bD = {
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
}, CD = Yo({
  props: bD,
  setup(e) {
    const n = Xa("isCondensed", null), r = zu(() => n || e.condensed), s = Qa(!1);
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
    FeatherRipple: qo
  }
}), VD = ["aria-disabled"];
function ED(e, n, r, s, a, u) {
  const c = Zn("FeatherRipple");
  return xn(), pl("div", {
    class: b1(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: n[0] || (n[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: n[1] || (n[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    Ar(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (xn(), Ho(c, { key: 0 })) : ll("", !0)
  ], 42, VD);
}
var dc = /* @__PURE__ */ jo(CD, [["render", ED], ["__scopeId", "data-v-44d413dc"]]);
const SD = {
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
}, ID = Yo({
  emits: ["delete"],
  props: SD,
  setup(e, n) {
    return {
      handleDelete: () => {
        e.disabled || n.emit("delete");
      },
      icon: Rs
    };
  },
  components: {
    FeatherIcon: J
  }
}), kD = { class: "chip-delete" }, AD = ["aria-label", "aria-describedby"];
function TD(e, n, r, s, a, u) {
  const c = Zn("FeatherIcon");
  return xn(), pl("span", kD, [
    qu("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: n[0] || (n[0] = gD((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      cc(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, AD)
  ]);
}
var xD = /* @__PURE__ */ jo(ID, [["render", TD], ["__scopeId", "data-v-4bae6cb4"]]);
const LD = Yo({
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
}), DD = ["title"];
function OD(e, n, r, s, a, u) {
  return xn(), pl("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    Ar(e.$slots, "default", {}, void 0, !0)
  ], 8, DD);
}
var fc = /* @__PURE__ */ jo(LD, [["render", OD], ["__scopeId", "data-v-1a0445b2"]]);
const ND = {}, MD = {
  class: "chip-icon",
  role: "presentation"
};
function BD(e, n) {
  return xn(), pl("span", MD, [
    Ar(e.$slots, "default", {}, void 0, !0)
  ]);
}
var pc = /* @__PURE__ */ jo(ND, [["render", BD], ["__scopeId", "data-v-2230176f"]]);
const ov = {
  delete: "Remove"
}, RD = Yo({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => ov
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, n) {
    const r = sc(C1(e, "labels"), ov), s = zu(() => Ce("chip-text")), a = () => {
      e.disabled || n.emit("click");
    }, u = As({}, n.attrs);
    return e.disabled && delete u.onClick, y1(As({}, r), {
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
      return this.$slots.icon && this.$slots.icon().findIndex((n) => n.children && n.children.length !== 0 || typeof n.type == "object") !== -1;
    }
  },
  components: {
    Chip: dc,
    DeleteIcon: xD,
    Label: fc,
    PreIcon: pc
  }
}), PD = ["aria-disabled"];
function FD(e, n, r, s, a, u) {
  const c = Zn("PreIcon"), f = Zn("Label"), m = Zn("DeleteIcon"), w = Zn("Chip");
  return xn(), Ho(w, Qf(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: eo(() => [
      qu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        qu("span", Qf(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (xn(), Ho(c, { key: 0 }, {
            default: eo(() => [
              Ar(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : ll("", !0),
          cc(f, { id: e.chipTextId }, {
            default: eo(() => [
              Ar(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, PD),
      e.canDelete ? (xn(), Ho(m, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: n[0] || (n[0] = (g) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : ll("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var UD = /* @__PURE__ */ jo(RD, [["render", FD], ["__scopeId", "data-v-48b2704a"]]);
const WD = Yo({
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
      return this.$slots.icon && this.$slots.icon().findIndex((n) => n.children && n.children.length !== 0 || typeof n.type == "object") !== -1;
    }
  },
  components: {
    Chip: dc,
    Label: fc,
    PreIcon: pc
  }
}), HD = ["aria-disabled"];
function zD(e, n, r, s, a, u) {
  const c = Zn("PreIcon"), f = Zn("Label"), m = Zn("Chip");
  return xn(), Ho(m, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: eo(() => [
      qu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (xn(), Ho(c, { key: 0 }, {
          default: eo(() => [
            Ar(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : ll("", !0),
        cc(f, null, {
          default: eo(() => [
            Ar(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, HD)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var qD = /* @__PURE__ */ jo(WD, [["render", zD], ["__scopeId", "data-v-3e0c4eba"]]);
const GD = Yo({
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
    const n = Qa(!1), r = Qa(!1), s = zu(() => Ce("chip-label-id")), a = zu(() => n.value || r.value ? 0 : -1), u = Qa(), c = () => {
      u.value.$el.focus();
    }, f = Xa("register", (b) => {
    }), m = Xa("blur", (b) => {
    }), w = Xa("select", (b) => {
    }), g = {
      first: n,
      focus: c,
      disabled: e.disabled,
      value: e.value,
      checked: r
    };
    return f(g), {
      labelId: s,
      tabindex: a,
      first: n,
      blur: m,
      click: () => {
        w(g);
      },
      input: u,
      checked: r
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((n) => n.children && n.children.length !== 0 || typeof n.type == "object") !== -1;
    }
  },
  components: {
    Chip: dc,
    Label: fc,
    PreIcon: pc
  }
});
function YD(e, n, r, s, a, u) {
  const c = Zn("PreIcon"), f = Zn("Label"), m = Zn("Chip");
  return xn(), Ho(m, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: b1(["focus hover", { selected: e.checked }]),
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
    default: eo(() => [
      e.hasIcon ? (xn(), Ho(c, { key: 0 }, {
        default: eo(() => [
          Ar(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : ll("", !0),
      cc(f, { id: e.labelId }, {
        default: eo(() => [
          Ar(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var jD = /* @__PURE__ */ jo(GD, [["render", YD], ["__scopeId", "data-v-bbcc2f70"]]);
const KD = {
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
}, iv = Yo({
  props: KD,
  setup() {
    return { format: Xa("chipListFormat", "") };
  },
  render() {
    const e = (n) => $D(n, As(As({}, this.$props), this.$attrs), As({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(UD) : this.format === "radio" ? e(jD) : e(qD);
  }
}), ZD = {
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
}, JD = Yo({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: ZD,
  setup(e, n) {
    const r = e.mode === "list" ? "grid" : e.mode;
    yD("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const c = C1(e, "modelValue");
      return y1(As({
        attrs: {
          role: "radiogroup"
        }
      }, $1(c, n.emit, e.label, {}, Qa(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), XD = ["aria-label"];
function QD(e, n, r, s, a, u) {
  return xn(), pl("div", Qf(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: n[0] || (n[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    Ar(e.$slots, "default", {}, void 0, !0)
  ], 16, XD);
}
var eO = /* @__PURE__ */ jo(JD, [["render", QD], ["__scopeId", "data-v-1e06f41d"]]);
const tO = window.Vue.defineComponent, nO = window.Vue.normalizeClass, rO = window.Vue.openBlock, oO = window.Vue.createElementBlock, iO = window.Vue.createCommentVNode, sO = /* @__PURE__ */ tO({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const n = e;
    return (r, s) => n != null && n.severity ? (rO(), oO("span", {
      key: 0,
      class: nO(["circle", [`${n.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : iO("", !0);
  }
});
const aO = /* @__PURE__ */ Ve(sO, [["__scopeId", "data-v-e08880d6"]]), lO = window.Vue.defineComponent, ka = window.Vue.unref, V1 = window.Vue.createTextVNode, Xd = window.Vue.normalizeClass, Qd = window.Vue.withCtx, uO = window.Vue.createVNode, cO = window.Vue.renderList, dO = window.Vue.Fragment, cu = window.Vue.openBlock, fO = window.Vue.createElementBlock, ef = window.Vue.createBlock, sv = window.Vue.createCommentVNode, pO = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const hO = /* @__PURE__ */ V1(" ALL "), av = window.Vue.ref, mO = window.Vue.watch, wO = window.Vue.computed, vO = window.Vue.reactive, _O = /* @__PURE__ */ lO({
  __name: "ChipListByProperty",
  props: {
    alarms: null,
    property: null,
    preSelected: null,
    isVertical: { type: Boolean }
  },
  emits: ["selected-option"],
  setup(e, { emit: n }) {
    var m;
    const r = e, s = av(!1), a = wO(() => Ne.exports.keys(Ne.exports.groupBy(r.alarms, r.property))), u = av(
      (m = r.preSelected) != null && m.length ? r.preSelected : ["all"]
    ), c = vO({
      alarms: r.alarms
    }), f = (w) => {
      u.value = u.value.filter((g) => g !== "all"), u.value.includes(w) ? u.value = u.value.filter((g) => g !== w) : u.value.push(w), (w === "all" || u.value.length === 0) && (u.value = ["all"]), n("selected-option", u.value);
    };
    return mO(r, () => {
      var w;
      u.value = (w = r.preSelected) != null && w.length ? r.preSelected : ["all"], c.alarms = r.alarms, s.value = !1;
    }), (w, g) => ka(a).length > 0 ? (cu(), ef(ka(eO), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: Xd({ vertical: r.isVertical })
    }, {
      default: Qd(() => [
        uO(ka(iv), {
          class: Xd({ clicked: u.value.includes("all") }),
          onClick: g[0] || (g[0] = (y) => f("all"))
        }, {
          default: Qd(() => [
            hO
          ]),
          _: 1
        }, 8, ["class"]),
        (cu(!0), fO(dO, null, cO(ka(a), (y) => (cu(), ef(ka(iv), {
          class: Xd([
            { clicked: u.value.includes(y) },
            `${y == null ? void 0 : y.toLowerCase()}-bg`
          ]),
          key: y,
          onClick: (b) => f(y)
        }, {
          default: Qd(() => [
            e.property == "severity" ? (cu(), ef(aO, {
              key: 0,
              severity: y
            }, null, 8, ["severity"])) : sv("", !0),
            V1(pO(y), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : sv("", !0);
  }
});
const gO = /* @__PURE__ */ Ve(_O, [["__scopeId", "data-v-f000b5a0"]]);
const $O = window.Vue.watch, yO = window.Vue.onBeforeUnmount, bO = window.Vue.ref, CO = window.Vue.onMounted, VO = (e) => {
  const n = bO(!1);
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
  return CO(() => {
    const c = $O(n, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    yO(() => {
      c(), u();
    });
  }), n;
}, EO = window.Vue.watch, SO = window.Vue.onBeforeUnmount, IO = window.Vue.ref, kO = window.Vue.onMounted, AO = (e, n) => {
  const r = IO(!1), s = (c) => {
    c.target === window && n(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((w) => w && w.contains(c.target)) || n(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return kO(() => {
    const c = EO(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    SO(() => {
      c(), u();
    });
  }), r;
}, TO = window.Vue.watch, xO = window.Vue.onBeforeUnmount, LO = window.Vue.ref, E1 = (e, n) => {
  const r = LO(!1);
  let s = !1;
  const a = (m) => {
    n(m), s = !1;
  };
  function u(m) {
    s || (requestAnimationFrame(() => a(m)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = TO([e, r], ([m, w], g) => {
    g && g.length && g[0] && g[0].removeEventListener("scroll", u, !0), w && m ? m.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return xO(() => {
    f(), c();
  }), r;
}, DO = window.Vue.defineComponent, Kr = window.Vue.ref, lv = window.Vue.toRef, OO = window.Vue.onMounted, NO = window.Vue.watch, uv = window.Vue.computed, MO = window.Vue.nextTick, cv = window.Vue.openBlock, dv = window.Vue.createElementBlock, fv = window.Vue.renderSlot, BO = window.Vue.normalizeClass, RO = window.Vue.normalizeStyle, PO = window.Vue.createCommentVNode;
var FO = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const UO = {
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
}, WO = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, HO = DO({
  emits: WO,
  props: UO,
  setup(e, n) {
    const r = Kr(), s = Kr(), a = lv(e, "open"), u = lv(e, "noExpand"), c = Kr("auto"), f = Kr(), m = Kr(e.triggerId || Ce("feather-menu-trigger")), w = Kr(Ce("feather-menu-dropdown")), g = Kr(""), y = Kr("");
    OO(() => {
      f.value = window;
    });
    const b = Kr(!1), V = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), O = () => {
      if (!s.value)
        return;
      const F = r.value.getBoundingClientRect();
      b.value = !0, c.value = "auto", MO(() => {
        let { height: W, width: L } = s.value.getBoundingClientRect();
        const X = V(), Me = X.height, he = X.width;
        e.fill && L < F.width ? (c.value = F.width + "px", L = F.width) : c.value = L + "px";
        let Te = 0;
        Me - F.bottom < W && F.top >= W ? (Te = F.top - W, e.cover && (Te += F.height)) : (Te = F.bottom, e.cover && (Te -= F.height));
        let Qe = e.right ? F.right - L : F.left;
        !e.right && F.right >= L && he - F.left < L && (Qe = F.right - L), e.right && F.right <= L && he - F.left > L && (Qe = F.left), y.value = `${Qe}px`, g.value = `${Te}px`, b.value = !1;
      });
    }, D = AO(r, (F) => {
      n.emit("outside-click", F);
    }), S = VO(O), A = E1(f, O);
    NO([a, s], ([F, W]) => {
      F && W && O(), D.value = F, S.value = F, A.value = F;
    });
    const T = uv(() => {
      const F = {
        id: m.value,
        "aria-haspopup": "true"
      };
      return a.value && (F["aria-controls"] = w.value), u.value || (F["aria-expanded"] = a.value ? "true" : "false"), F;
    }), B = uv(() => ({
      click: (F) => {
        n.emit("trigger-click", F);
      }
    }));
    return {
      positionTop: g,
      positionLeft: y,
      triggerId: m,
      triggerAttrs: T,
      triggerListeners: B,
      menuId: w,
      menu: s,
      menuWidth: c,
      root: r,
      calculatePosition: O,
      calculating: b
    };
  }
}), zO = ["data-ref-id"], qO = ["data-ref-id", "id"];
function GO(e, n, r, s, a, u) {
  return cv(), dv("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    fv(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (cv(), dv("div", {
      key: 0,
      class: BO(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: RO({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      fv(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, qO)) : PO("", !0)
  ], 8, zO);
}
var S1 = /* @__PURE__ */ FO(HO, [["render", GO], ["__scopeId", "data-v-f75af406"]]), YO = {
  mounted(e, n) {
    e.addEventListener("keydown", n.dir.contentKeyPressed);
  },
  unmounted(e, n) {
    e.removeEventListener("keydown", n.dir.contentKeyPressed);
  },
  contentKeyPressed(e) {
    const n = e.currentTarget.querySelectorAll("li a");
    let r = [].indexOf.call(n, e.target);
    if (!(r < 0)) {
      switch (e.keyCode) {
        case 40:
          r++, r === n.length && (r = 0);
          break;
        case 38:
          r--, r === -1 && (r = n.length - 1);
          break;
        default:
          return;
      }
      e.preventDefault(), n[r].focus();
    }
  }
};
const jO = window.Vue.openBlock, KO = window.Vue.createElementBlock, ZO = window.Vue.createElementVNode;
var JO = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const XO = {}, QO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, eN = /* @__PURE__ */ ZO("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), tN = [
  eN
];
function nN(e, n) {
  return jO(), KO("svg", QO, tN);
}
var rN = /* @__PURE__ */ JO(XO, [["render", nN]]);
const oN = window.Vue.openBlock, iN = window.Vue.createElementBlock, $p = window.Vue.createElementVNode;
var sN = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const aN = {}, lN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, uN = /* @__PURE__ */ $p("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), cN = /* @__PURE__ */ $p("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), dN = /* @__PURE__ */ $p("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), fN = [
  uN,
  cN,
  dN
];
function pN(e, n) {
  return oN(), iN("svg", lN, fN);
}
var hN = /* @__PURE__ */ sN(aN, [["render", pN]]);
const mN = window.Vue.openBlock, wN = window.Vue.createElementBlock, vN = window.Vue.createElementVNode;
var _N = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const gN = {}, $N = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yN = /* @__PURE__ */ vN("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), bN = [
  yN
];
function CN(e, n) {
  return mN(), wN("svg", $N, bN);
}
var hl = /* @__PURE__ */ _N(gN, [["render", CN]]);
const ul = function(e, n) {
  if (!e || !n)
    return;
  let r = e.getBoundingClientRect().height;
  const s = getComputedStyle(e);
  r += parseInt(s.getPropertyValue("margin-top"), 10), r += parseInt(s.getPropertyValue("margin-bottom"), 10), n.scrollTop = e.offsetTop - n.getBoundingClientRect().height + r;
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
const VN = window.Vue.defineComponent, EN = window.Vue.openBlock, SN = window.Vue.createElementBlock, IN = window.Vue.normalizeClass, kN = window.Vue.pushScopeId, AN = window.Vue.popScopeId, ep = window.Vue.createElementVNode;
var TN = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const xN = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, LN = {
  click: (e) => !0
}, DN = VN({
  emits: LN,
  props: xN,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), I1 = (e) => (kN("data-v-07e020f5"), e = e(), AN(), e), ON = /* @__PURE__ */ I1(() => /* @__PURE__ */ ep("div", { class: "track" }, null, -1)), NN = /* @__PURE__ */ I1(() => /* @__PURE__ */ ep("div", { class: "switcher" }, [
  /* @__PURE__ */ ep("div", { class: "switch-circle" })
], -1)), MN = [
  ON,
  NN
];
function BN(e, n, r, s, a, u) {
  return EN(), SN("div", {
    class: IN(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: n[0] || (n[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, MN, 2);
}
var RN = /* @__PURE__ */ TN(DN, [["render", BN], ["__scopeId", "data-v-07e020f5"]]), PN = Object.defineProperty, FN = Object.defineProperties, UN = Object.getOwnPropertyDescriptors, pv = Object.getOwnPropertySymbols, WN = Object.prototype.hasOwnProperty, HN = Object.prototype.propertyIsEnumerable, hv = (e, n, r) => n in e ? PN(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, mv = (e, n) => {
  for (var r in n || (n = {}))
    WN.call(n, r) && hv(e, r, n[r]);
  if (pv)
    for (var r of pv(n))
      HN.call(n, r) && hv(e, r, n[r]);
  return e;
}, wv = (e, n) => FN(e, UN(n));
const yp = window.Vue.defineComponent, gi = window.Vue.h, zN = window.Vue.openBlock, qN = window.Vue.createElementBlock, GN = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var k1 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const YN = {
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
}, jN = yp({
  inheritAttrs: !1,
  props: YN,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = gi("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = gi("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = gi("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : gi(qo);
    if (this.asLi)
      return gi("li", wv(mv({}, this.$attrs), {
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
    const u = gi("a", wv(mv({}, this.$attrs), {
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
var ml = /* @__PURE__ */ k1(jN, [["__scopeId", "data-v-7c46b2b3"]]);
yp({
  components: {
    FeatherListItem: ml
  }
});
const KN = {}, ZN = { class: "feather-list" };
function JN(e, n) {
  return zN(), qN("ul", ZN, [
    GN(e.$slots, "default", {}, void 0, !0)
  ]);
}
var bp = /* @__PURE__ */ k1(KN, [["render", JN], ["__scopeId", "data-v-941a1d50"]]);
const XN = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, QN = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
yp({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: XN,
  props: QN,
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
  components: { SwitchRender: RN, FeatherListItem: ml }
});
var eM = Object.defineProperty, tM = Object.defineProperties, nM = Object.getOwnPropertyDescriptors, vv = Object.getOwnPropertySymbols, rM = Object.prototype.hasOwnProperty, oM = Object.prototype.propertyIsEnumerable, _v = (e, n, r) => n in e ? eM(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Ln = (e, n) => {
  for (var r in n || (n = {}))
    rM.call(n, r) && _v(e, r, n[r]);
  if (vv)
    for (var r of vv(n))
      oM.call(n, r) && _v(e, r, n[r]);
  return e;
}, iM = (e, n) => tM(e, nM(n));
const qs = window.Vue.defineComponent, Se = window.Vue.openBlock, vt = window.Vue.createElementBlock, wn = window.Vue.createElementVNode, dr = window.Vue.toDisplayString, Kn = window.Vue.createCommentVNode, ct = window.Vue.resolveComponent, jn = window.Vue.createBlock, Ht = window.Vue.withCtx, Ts = window.Vue.Fragment, el = window.Vue.renderList, vn = window.Vue.createVNode, Cp = window.Vue.withModifiers, Oi = window.Vue.normalizeClass, tp = window.Vue.renderSlot, A1 = window.Vue.createTextVNode, sM = window.Vue.pushScopeId, aM = window.Vue.popScopeId, T1 = window.Vue.reactive, x1 = window.Vue.nextTick, tf = window.Vue.markRaw, nf = window.Vue.toRef, gv = window.Vue.computed, lM = window.Vue.toRefs, ds = window.Vue.ref, rf = window.Vue.mergeProps, $v = window.Vue.toHandlers, du = window.Vue.withDirectives, fu = window.Vue.vShow;
var hc = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, Vp = {
  query: {
    type: String
  }
}, Fi = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const uM = qs({
  mixins: [],
  props: Ln(Ln({
    text: {
      type: String,
      required: !0
    }
  }, hc), Vp),
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
}), cM = {
  key: 0,
  class: "highlight"
}, dM = { key: 1 };
function fM(e, n, r, s, a, u) {
  return Se(), vt("span", null, [
    wn("span", null, dr(e.beginning), 1),
    e.highlighted ? (Se(), vt("span", cM, dr(e.highlighted), 1)) : Kn("", !0),
    e.end ? (Se(), vt("span", dM, dr(e.end), 1)) : Kn("", !0)
  ]);
}
var L1 = /* @__PURE__ */ Fi(uM, [["render", fM], ["__scopeId", "data-v-8abe2492"]]);
const pM = qs({
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
  }, hc), Vp),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const n = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        ul(n, r.$el);
      });
    }
  },
  methods: {
    isSelected(e) {
      const n = this.value;
      return n && n.length ? n.some((s) => s[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
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
    FeatherList: bp,
    FeatherListItem: ml,
    Highlighter: L1
  }
}), hM = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function mM(e, n, r, s, a, u) {
  const c = ct("Highlighter"), f = ct("FeatherListItem"), m = ct("FeatherList");
  return Se(), jn(m, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: Ht(() => [
      (Se(!0), vt(Ts, null, el(e.items, (w, g) => (Se(), vt(Ts, {
        key: w[e.textProp]
      }, [
        vn(f, {
          "as-li": "",
          id: e.getId(g),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(w),
          highlighted: e.isActive(g),
          selected: e.isSelected(w),
          onClick: Cp((y) => e.select(w), ["stop"])
        }, {
          default: Ht(() => [
            vn(c, {
              highlight: e.highlight,
              query: e.query,
              text: w[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            w._new ? (Se(), vt("span", hM, dr(e.newLabel), 1)) : Kn("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && w._new ? (Se(), vt("li", {
          role: "presentation",
          key: w[e.textProp] + "hr",
          class: "hr"
        })) : Kn("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var wM = /* @__PURE__ */ Fi(pM, [["render", mM], ["__scopeId", "data-v-f623434a"]]);
const vM = qs({
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
  }, hc), Vp),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const n = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        ul(n, r);
      });
    }
  },
  computed: {
    cls() {
      return this.config.map((e, n) => e.align && e.align.toLowerCase() === "right" ? `tr${n + 1}` : e.align && e.align.toLowerCase() === "center" ? `tc${n + 1}` : `tl${n + 1}`);
    }
  },
  methods: {
    isSelected(e) {
      const n = this.value;
      return this.value && this.value.length ? n.some((s) => s[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
    },
    isActive(e) {
      return this.activeRow === e;
    },
    isActiveCell(e, n) {
      return this.activeRow === e && this.activeCol === n;
    },
    getId(e, n) {
      return e === this.activeRow && this.activeCol === n ? this.activeId : "";
    },
    select(e) {
      this.$emit("select", e);
    }
  },
  components: {
    Highlighter: L1
  }
}), _M = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, gM = ["aria-multiselectable"], $M = { role: "row" }, yM = ["aria-selected", "onClick"], bM = ["id", "aria-selected"], CM = { key: 1 };
function VM(e, n, r, s, a, u) {
  const c = ct("Highlighter");
  return Se(), vt("div", _M, [
    wn("table", {
      class: Oi(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      wn("thead", null, [
        wn("tr", $M, [
          (Se(!0), vt(Ts, null, el(e.config, (f) => (Se(), vt("th", {
            key: f.title
          }, dr(f.title), 1))), 128))
        ])
      ]),
      wn("tbody", null, [
        (Se(!0), vt(Ts, null, el(e.items, (f, m) => (Se(), vt("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Oi({ focus: e.isActive(m), selected: e.isSelected(f) }),
          onClick: Cp((w) => e.select(f), ["stop"])
        }, [
          (Se(!0), vt(Ts, null, el(e.config, (w, g) => (Se(), vt("td", {
            key: f[e.textProp] + w.prop,
            id: e.getId(m, g),
            "aria-selected": e.isSelected(f),
            class: Oi({ "focus-cell": e.isActiveCell(m, g) })
          }, [
            w.prop === e.textProp ? (Se(), jn(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[w.prop]
            }, null, 8, ["highlight", "query", "text"])) : (Se(), vt("p", CM, dr(f[w.prop]), 1))
          ], 10, bM))), 128))
        ], 10, yM))), 128))
      ])
    ], 10, gM)
  ], 512);
}
var EM = /* @__PURE__ */ Fi(vM, [["render", VM], ["__scopeId", "data-v-58c88fd1"]]);
const SM = qs({
  components: {
    FeatherList: bp,
    FeatherListItem: ml
  }
});
function IM(e, n, r, s, a, u) {
  const c = ct("FeatherListItem"), f = ct("FeatherList");
  return Se(), jn(f, { class: "result-list" }, {
    default: Ht(() => [
      vn(c, { "as-li": "" }, {
        default: Ht(() => [
          tp(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var kM = /* @__PURE__ */ Fi(SM, [["render", IM], ["__scopeId", "data-v-06b752c6"]]);
const AM = qs({
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
    FeatherIcon: J,
    Cancel: Rs,
    BaseChip: dc,
    BaseChipLabel: fc,
    BaseChipPreIcon: pc
  }
});
function TM(e, n, r, s, a, u) {
  const c = ct("FeatherIcon"), f = ct("BaseChipPreIcon"), m = ct("BaseChipLabel"), w = ct("Cancel"), g = ct("BaseChip");
  return Se(), jn(g, {
    class: Oi(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: Ht(() => [
      e.showPreIcon ? (Se(), jn(f, { key: 0 }, {
        default: Ht(() => {
          var y, b;
          return [
            vn(c, {
              icon: (y = e.pre) == null ? void 0 : y.icon,
              title: (b = e.pre) == null ? void 0 : b.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Kn("", !0),
      vn(m, null, {
        default: Ht(() => [
          A1(dr(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? Kn("", !0) : (Se(), vt("span", {
        key: 1,
        class: "chip-delete",
        onClick: n[0] || (n[0] = Cp((...y) => e.handleClick && e.handleClick(...y), ["stop"]))
      }, [
        vn(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: Ht(() => [
            vn(w)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var xM = /* @__PURE__ */ Fi(AM, [["render", TM], ["__scopeId", "data-v-e0fc6ac0"]]);
const LM = {}, DM = (e) => (sM("data-v-aa720e06"), e = e(), aM(), e), OM = { class: "spinner-container" }, NM = /* @__PURE__ */ DM(() => /* @__PURE__ */ wn("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ wn("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), MM = [
  NM
];
function BM(e, n) {
  return Se(), vt("div", OM, MM);
}
var RM = /* @__PURE__ */ Fi(LM, [["render", BM], ["__scopeId", "data-v-aa720e06"]]), mc = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(mc || {});
const D1 = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, PM = Ln(Ln(Ln({
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
    default: (e, n, r) => e[r.textProp].toString().toLowerCase() === n.toLowerCase()
  },
  type: {
    type: String,
    required: !0,
    validator: (e) => !!mc[e]
  },
  labels: {
    type: Object,
    default: () => D1
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, hc), Hs), lc), FM = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, UM = (e, n, r, s) => {
  if (r.toLowerCase() === mc.multi) {
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
        if (u.value && u.value.filter((w) => w[e.textProp.value] === f[e.textProp.value]).length)
          return;
        const m = u.value ? [...u.value, f] : [f];
        s("update:modelValue", m), c(m);
      },
      removeItem(f) {
        const m = u.value.findIndex((w) => {
          if (f[e.textProp.value] === w[e.textProp.value])
            return !0;
        });
        debugger;
        if (m > -1) {
          const w = u.value.slice(0);
          w.splice(m, 1), s("update:modelValue", w), c(w), e.input.value.focus();
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
      n.active.row = -1, e.forceCloseResults.value = !0, u && u._new && e.allowNew ? s("new", u._new) : s("update:modelValue", u);
    },
    removeItem() {
    },
    clickedItem() {
      e.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (n.active.row > -1) {
        const u = e.internalResults.value[n.active.row];
        u && u._new && e.allowNew ? s("new", u._new) : s("update:modelValue", u);
      }
    }
  };
}, WM = () => {
  const e = T1({
    row: -1
  }), n = (u) => {
    x1(() => {
      e.row = u;
    });
  }, r = (u, c) => {
    if (u.keyCode === ce.DOWN) {
      if (u.preventDefault(), e.row === -1)
        s(), n(0);
      else if (e.row + 1 <= c.length - 1) {
        const f = e.row;
        s(), n(f + 1);
      }
      return !0;
    }
    if (u.keyCode === ce.UP) {
      if (u.preventDefault(), e.row === 0)
        s();
      else if (e.row > 0) {
        const f = e.row;
        s(), n(f - 1);
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
}, HM = (e) => {
  const n = T1({
    row: -1,
    col: -1
  }), r = (c, f) => {
    x1(() => {
      n.col = f, n.row = c;
    });
  }, s = (c, f) => {
    if (c.keyCode === ce.DOWN) {
      if (c.preventDefault(), n.row === -1)
        a(), r(0, 0);
      else if (n.row + 1 <= f.length - 1) {
        const m = n.row, w = n.col;
        a(), r(m + 1, w);
      }
      return !0;
    }
    if (c.keyCode === ce.UP) {
      if (c.preventDefault(), n.row === 0)
        a();
      else if (n.row > 0) {
        const m = n.row, w = n.col;
        a(), r(m - 1, w);
      }
      return !0;
    }
    if (c.keyCode === ce.RIGHT && n.row !== -1) {
      if (c.preventDefault(), n.col + 1 <= e.length - 1) {
        const m = n.col, w = n.row;
        a(), r(w, m + 1);
      } else if (n.col <= e.length - 1 && n.row + 1 <= f.length - 1) {
        const m = n.row;
        a(), r(m + 1, 0);
      }
      return !0;
    }
    if (c.keyCode === ce.LEFT && n.row !== -1) {
      if (c.preventDefault(), n.col === 0 && n.row === 0)
        return !0;
      if (n.col === 0 && n.row > 0) {
        const m = n.row;
        a(), r(m - 1, e.length - 1);
      } else if (n.col > 0) {
        const m = n.col, w = n.row;
        a(), r(w, m - 1);
      }
      return !0;
    }
    if (c.keyCode === ce.END && n.row !== -1) {
      c.preventDefault();
      const m = n.row;
      return a(), r(c.ctrlKey ? f.length - 1 : m, e.length - 1), !0;
    }
    if (c.keyCode === ce.HOME && n.row !== -1) {
      c.preventDefault();
      const m = n.row;
      return a(), r(c.ctrlKey ? 0 : m, 0), !0;
    }
    return !1;
  }, a = () => {
    n.row = -1, n.col = -1;
  };
  return { reset: a, handleKeyPress: s, active: n, first: () => {
    a(), r(0, 0);
  } };
}, zM = qs({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: FM,
  props: PM,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== mc.multi;
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
      return tf(rN);
    },
    minCharIcon() {
      return tf(hN);
    },
    dropdownIcon() {
      return tf(hl);
    },
    inputAttrs() {
      const e = [this.selectedDescriptionId, this.subTextId].filter(Boolean);
      let n = "";
      return this.activeChipIndex > -1 && (n = this.activeChipId), this.active.row > -1 && this.showResults && (n = this.resultItemId), this.minChar && e.push(this.minCharWarningId), {
        id: this.inputId,
        "aria-describedby": e.join(" "),
        "aria-busy": this.loading,
        "aria-activedescendant": n,
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
      return this.modelValue && this.modelValue.length ? this.modelValue.map((n) => n[this.textProp]).join(", ") : "";
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
        ul(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, n) {
        e && n && e.length > n.length && this.scrollContainer && this.$nextTick(() => {
          ul(this.inputRef, this.scrollContainer);
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
      const n = this.$refs.menu;
      e && n.calculatePosition && n.calculatePosition();
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
      const n = this.$refs.alert;
      n.textContent = e, setTimeout(() => {
        n.textContent = "";
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
      r !== void 0 && (Bi(this.typingTimeout), this.typingTimeout = Mi(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const n = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === ce.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        n(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === ce.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const s = this.modelValue;
        this.removeFromValue(s[this.activeChipIndex]), n();
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
        this.forceCloseResults = !0, r(), n();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const s = this.modelValue;
        e.keyCode === ce.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = s.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === ce.RIGHT && (e.preventDefault(), this.activeChipIndex === s.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < s.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === ce.DELETE || e.keyCode === ce.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(s[this.activeChipIndex]), r(), n());
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
        const n = e.getBoundingClientRect().width, r = e.parentElement;
        e.scrollWidth <= e.clientWidth && r && n < r.getBoundingClientRect().width ? e.style.whiteSpace = "nowrap" : (e.style.whiteSpace = "normal", e.style.flexBasis = "100%"), this.$nextTick(() => {
          e.style.height = `${e.scrollHeight}px`;
        });
      }));
    }
  },
  setup(e, n) {
    const r = sc(nf(e, "labels"), D1);
    zs(e), uc(e);
    let s;
    e.gridConfig ? s = HM(e.gridConfig) : s = WM();
    const a = nf(e, "id"), u = gv(() => a.value ? a.value : Ce("feather-autocomplete-input")), { validate: c } = Us(u, nf(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: m, textProp: w, allowNew: g, type: y, minChar: b } = lM(e), V = ds(!1), O = ds(!1), x = ds(!1), D = ds(""), S = ds([]), A = ds(), T = gv(() => A.value), B = () => {
      V.value && !O.value && (D.value && D.value.length >= b.value && n.emit("search", D.value), b.value <= 0 && n.emit("search", D.value || ""), S.value = [], s.reset());
    }, F = UM({
      selectionLimit: f,
      selectionLimitReached: O,
      modelValue: m,
      textProp: w,
      allowNew: g,
      forceCloseResults: x,
      query: D,
      internalResults: S,
      input: T,
      emitSearch: B
    }, s, y.value, n.emit);
    return iM(Ln(Ln({}, r), Ws(n.attrs)), {
      query: D,
      internalResults: S,
      selectionLimitReached: O,
      forceCloseResults: x,
      hasFocus: V,
      strategy: F,
      emitSearch: B,
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
    InputWrapper: ac,
    InputSubText: Fs,
    AutocompleteResults: wM,
    AutocompleteResultsGrid: EM,
    Chip: xM,
    MenuMessage: kM,
    FeatherIcon: J,
    FeatherMenu: S1,
    Spinner: RM
  }
}), qM = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, GM = ["id"], YM = { "data-ref-id": "feather-autocomplete-no-results" }, jM = { "data-ref-id": "feather-autocomplete-selection-limit" }, KM = { "data-ref-id": "feather-autocomplete-min-char" };
function ZM(e, n, r, s, a, u) {
  const c = ct("FeatherIcon"), f = ct("Chip"), m = ct("InputWrapper"), w = ct("AutocompleteResults"), g = ct("AutocompleteResultsGrid"), y = ct("MenuMessage"), b = ct("Spinner"), V = ct("FeatherMenu"), O = ct("InputSubText");
  return Se(), vt("div", rf(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    vn(V, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Oi(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Ht(({ attrs: x, on: D }) => [
        vn(m, rf(Ln(Ln({}, x), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, $v(D), { ref: "scroll" }), {
          pre: Ht(() => [
            tp(e.$slots, "pre", {}, () => [
              vn(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Ht(() => [
            vn(c, {
              icon: e.dropdownIcon,
              class: Oi(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Ht(() => [
            wn("div", {
              class: Oi(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              wn("div", qM, null, 512),
              wn("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, dr(e.selectedDescribedByText), 9, GM),
              (Se(!0), vt(Ts, null, el(e.modelValueList, (S, A) => du((Se(), jn(f, {
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
                [fu, !e.singleSelect]
              ])), 128)),
              wn("textarea", rf(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, $v(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Ht(() => [
        e.gridConfig ? Kn("", !0) : du((Se(), jn(w, {
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
          [fu, e.showResults]
        ]),
        e.gridConfig ? du((Se(), jn(g, {
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
          [fu, e.showResults]
        ]) : Kn("", !0),
        e.showNoResults ? (Se(), jn(y, { key: 2 }, {
          default: Ht(() => [
            wn("span", YM, dr(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : Kn("", !0),
        e.showSelectionLimit ? (Se(), jn(y, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Ht(() => [
            vn(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            wn("span", jM, dr(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Kn("", !0),
        e.minChar ? du((Se(), jn(y, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: Ht(() => [
            vn(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            wn("span", KM, [
              tp(e.$slots, "min-char", {}, () => [
                A1(dr(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [fu, e.showMinCharWarning]
        ]) : Kn("", !0),
        e.showLoading ? (Se(), jn(b, { key: 5 })) : Kn("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    vn(O, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var JM = /* @__PURE__ */ Fi(zM, [["render", ZM], ["__scopeId", "data-v-43a7e951"]]);
var XM = Object.defineProperty, QM = Object.defineProperties, eB = Object.getOwnPropertyDescriptors, yv = Object.getOwnPropertySymbols, tB = Object.prototype.hasOwnProperty, nB = Object.prototype.propertyIsEnumerable, bv = (e, n, r) => n in e ? XM(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Du = (e, n) => {
  for (var r in n || (n = {}))
    tB.call(n, r) && bv(e, r, n[r]);
  if (yv)
    for (var r of yv(n))
      nB.call(n, r) && bv(e, r, n[r]);
  return e;
}, O1 = (e, n) => QM(e, eB(n));
const N1 = window.Vue.defineComponent, rB = window.Vue.ref, tl = window.Vue.computed, oB = window.Vue.reactive, Cv = window.Vue.watch, of = window.Vue.inject, M1 = window.Vue.resolveComponent, np = window.Vue.openBlock, B1 = window.Vue.createElementBlock, zo = window.Vue.createElementVNode, iB = window.Vue.createBlock, sB = window.Vue.createCommentVNode, R1 = window.Vue.renderSlot, aB = window.Vue.pushScopeId, lB = window.Vue.popScopeId, sf = window.Vue.toRef, Vv = window.Vue.mergeProps, uB = window.Vue.toDisplayString, cB = window.Vue.createVNode;
var P1 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const dB = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, fB = N1({
  props: dB,
  setup(e) {
    const n = rB(), r = () => {
      n.value.focus();
    }, s = tl(() => Ce("feather-radio-button")), a = oB({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = tl(() => Ce("radio-label-id")), c = tl(() => a.first || a.checked ? 0 : -1);
    Cv(() => e.disabled, (y) => {
      a.disabled = y;
    }, { immediate: !0 }), Cv(() => e.value, (y) => {
      a.value = y;
    }, { immediate: !0 });
    const f = of("register", (y) => {
    }), m = of("blur", (y) => {
    }), w = of("select", (y) => {
    });
    return f(a), {
      labelId: u,
      tabindex: c,
      vm: a,
      blur: m,
      click: () => {
        w(a);
      },
      input: n,
      id: s
    };
  },
  components: {
    FeatherRipple: qo
  }
}), pB = (e) => (aB("data-v-24790cf0"), e = e(), lB(), e), hB = { class: "layout-container" }, mB = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], wB = { class: "radio hover focus" }, vB = /* @__PURE__ */ pB(() => /* @__PURE__ */ zo("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ zo("svg", { class: "dot" }, [
    /* @__PURE__ */ zo("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), _B = ["id"];
function gB(e, n, r, s, a, u) {
  const c = M1("feather-ripple");
  return np(), B1("div", hB, [
    zo("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: e.id,
      "aria-checked": e.vm.checked ? "true" : "false",
      "aria-disabled": e.vm.disabled ? "true" : "false",
      "aria-labelledby": e.labelId,
      tabindex: e.tabindex,
      onClick: n[0] || (n[0] = (...f) => e.click && e.click(...f)),
      onBlur: n[1] || (n[1] = (...f) => e.blur && e.blur(...f)),
      "data-ref-id": "feather-radio"
    }, [
      zo("div", wB, [
        vB,
        e.vm.disabled ? sB("", !0) : (np(), iB(c, {
          key: 0,
          center: ""
        }))
      ]),
      zo("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        R1(e.$slots, "default", {}, void 0, !0)
      ], 8, _B)
    ], 40, mB)
  ]);
}
var rp = /* @__PURE__ */ P1(fB, [["render", gB], ["__scopeId", "data-v-24790cf0"]]);
const $B = O1(Du({}, Hs), {
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
}), yB = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, bB = N1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: $B,
  emits: yB,
  setup(e, n) {
    zs(e);
    const r = sf(e, "error"), s = sf(e, "modelValue"), a = tl(() => Ce("feather-input-description")), u = tl(() => {
      const c = O1(Du({}, n.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return Du(Du({
      descriptionId: a,
      attrs: u
    }, $1(s, n.emit, e.label, e.schema, sf(e, "error"))), Ws(n.attrs));
  },
  components: {
    InputSubText: Fs
  }
}), CB = ["for"], VB = ["id"];
function EB(e, n, r, s, a, u) {
  const c = M1("InputSubText");
  return np(), B1("div", Vv(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    zo("label", {
      for: e.groupId,
      class: "group-label"
    }, uB(e.label), 9, CB),
    zo("div", Vv(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: n[0] || (n[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      R1(e.$slots, "default", {}, void 0, !0)
    ], 16, VB),
    cB(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var F1 = /* @__PURE__ */ P1(bB, [["render", EB], ["__scopeId", "data-v-6775aeb9"]]);
const SB = window.Vue.defineComponent, IB = window.Vue.renderList, kB = window.Vue.Fragment, Ev = window.Vue.openBlock, AB = window.Vue.createElementBlock, TB = window.Vue.toDisplayString, xB = window.Vue.createTextVNode, Sv = window.Vue.unref, Iv = window.Vue.withCtx, LB = window.Vue.createVNode, DB = window.Vue.createBlock, OB = window.Vue.watch, NB = window.Vue.ref, MB = /* @__PURE__ */ SB({
  __name: "FilterByDate",
  props: {
    preSelected: null
  },
  emits: ["filter-date-selected"],
  setup(e, { emit: n }) {
    const r = e, s = [
      { id: 1, name: "No filter" },
      { id: 2, name: "Today" },
      { id: 3, name: "Yesterday" },
      { id: 4, name: "This week" }
    ], a = NB(r.preSelected || s[0].id);
    return OB(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (Ev(), DB(Sv(F1), {
      label: "",
      modelValue: a.value,
      "onUpdate:modelValue": [
        c[0] || (c[0] = (f) => a.value = f),
        c[1] || (c[1] = (f) => n("filter-date-selected", a.value))
      ],
      vertical: "",
      hodeLabel: "",
      class: "radio-dates"
    }, {
      default: Iv(() => [
        (Ev(), AB(kB, null, IB(s, (f) => LB(Sv(rp), {
          value: f.id,
          key: f.id
        }, {
          default: Iv(() => [
            xB(TB(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const BB = /* @__PURE__ */ Ve(MB, [["__scopeId", "data-v-0363302c"]]);
var RB = Object.defineProperty, PB = Object.defineProperties, FB = Object.getOwnPropertyDescriptors, kv = Object.getOwnPropertySymbols, UB = Object.prototype.hasOwnProperty, WB = Object.prototype.propertyIsEnumerable, Av = (e, n, r) => n in e ? RB(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Aa = (e, n) => {
  for (var r in n || (n = {}))
    UB.call(n, r) && Av(e, r, n[r]);
  if (kv)
    for (var r of kv(n))
      WB.call(n, r) && Av(e, r, n[r]);
  return e;
}, Tv = (e, n) => PB(e, FB(n));
const HB = window.Vue.defineComponent, zB = window.Vue.inject, Ta = window.Vue.h;
var qB = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const GB = {
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
}, YB = HB({
  inheritAttrs: !1,
  props: GB,
  setup() {
    return { hasTooltip: zB("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const m = ["btn", "hover", "focus", f];
      return this.icon && (m.push("btn-icon"), m.push("btn-icon-table")), this.onColor && m.push("on-color"), m;
    }, n = this.asAnchor ? "a" : "button", r = {}, s = Aa({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = Ta(qo);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), Ta(n, Tv(Aa(Aa({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Ta(qo, { center: !0 })
      ]);
    }
    const c = Ta("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Ta(n, Tv(Aa(Aa({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var ve = /* @__PURE__ */ qB(YB, [["__scopeId", "data-v-702d1074"]]);
const jB = window.Vue.openBlock, KB = window.Vue.createElementBlock, ZB = window.Vue.createElementVNode;
var JB = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const XB = {}, QB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, eR = /* @__PURE__ */ ZB("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), tR = [
  eR
];
function nR(e, n) {
  return jB(), KB("svg", QB, tR);
}
var rR = /* @__PURE__ */ JB(XB, [["render", nR]]);
const oR = window.Vue.openBlock, iR = window.Vue.createElementBlock, sR = window.Vue.createElementVNode;
var aR = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const lR = {}, uR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, cR = /* @__PURE__ */ sR("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), dR = [
  cR
];
function fR(e, n) {
  return oR(), iR("svg", uR, dR);
}
var pR = /* @__PURE__ */ aR(lR, [["render", fR]]);
const hR = window.Vue.openBlock, mR = window.Vue.createElementBlock, wR = window.Vue.createElementVNode;
var vR = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const _R = {}, gR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $R = /* @__PURE__ */ wR("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), yR = [
  $R
];
function bR(e, n) {
  return hR(), mR("svg", gR, yR);
}
var U1 = /* @__PURE__ */ vR(_R, [["render", bR]]);
const CR = window.Vue.defineComponent, br = window.Vue.unref, $i = window.Vue.createVNode, xv = window.Vue.toDisplayString, Xr = window.Vue.createElementVNode, W1 = window.Vue.createTextVNode, Lv = window.Vue.openBlock, Dv = window.Vue.createElementBlock, VR = window.Vue.createCommentVNode, ER = window.Vue.withCtx, SR = window.Vue.vShow, IR = window.Vue.normalizeClass, kR = window.Vue.withDirectives, AR = window.Vue.Fragment, TR = window.Vue.pushScopeId, xR = window.Vue.popScopeId, H1 = (e) => (TR("data-v-d75ae1ee"), e = e(), xR(), e), LR = /* @__PURE__ */ W1(" Filters "), DR = { class: "count" }, OR = { class: "results" }, NR = { class: "total" }, MR = /* @__PURE__ */ W1(" Reset "), BR = /* @__PURE__ */ H1(() => /* @__PURE__ */ Xr("div", { class: "title" }, "By Severities:", -1)), RR = /* @__PURE__ */ H1(() => /* @__PURE__ */ Xr("div", { class: "title" }, "By Start Date:", -1)), yi = window.Vue.ref, PR = window.Vue.reactive, FR = window.Vue.markRaw, Ov = window.Vue.watch, UR = /* @__PURE__ */ CR({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: n }) {
    const r = e, s = FR({
      FilterAlt: rR,
      ExpandLess: pR,
      ExpandMore: hl,
      Refresh: U1
    }), a = fr(), u = yi(r.isOpen), c = yi(["all"]), f = yi(1), m = yi(r.list), w = yi(!1), g = yi(0), y = yi(null), b = PR({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), V = () => {
      var W, L;
      r.saveFilters && a.filters && (a.filters.node && (b.nodeSelectedValue = a.filters.node), ((W = a.filters) == null ? void 0 : W.severities) && !((L = a.filters) != null && L.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, T());
    }, O = () => {
      b.nodes = a.nodes, b.results = a.nodes;
    };
    Ov(
      () => a.nodes,
      () => {
        O();
      }
    ), Ov(r, () => {
      m.value = r.list, V();
    });
    const x = (W) => {
      c.value = W, T();
    }, D = (W) => {
      f.value = W, T();
    }, S = (W) => {
      if (!W)
        return b.nodeSelectedValue = void 0, [];
      w.value = !0, b.results = b.nodes.filter((L) => L.label.toLowerCase().indexOf(W) > -1).map((L) => ({
        _text: L.label,
        id: L.id
      })), w.value = !1;
    }, A = () => {
      c.value = ["all"], f.value = 1, b.nodeSelectedValue = void 0, g.value = 0, n("filtered-list", r.list), r.isOpen || (u.value = !1), r.saveFilters && (a.filters = null), m.value = r.list;
    }, T = () => {
      g.value = 0;
      let W = r.list;
      b.nodeSelectedValue && b.nodeSelectedValue._text && (g.value++, r.isSituation ? W = W.map((L) => {
        if (L.relatedAlarms.filter(
          (he) => {
            var Te;
            return he.nodeLabel === ((Te = b.nodeSelectedValue) == null ? void 0 : Te._text);
          }
        ).length > 0)
          return L;
      }).filter((L) => L) : W = W.filter(
        (L) => {
          var X;
          return L.nodeLabel === ((X = b.nodeSelectedValue) == null ? void 0 : X._text);
        }
      )), c.value.includes("all") || (g.value++, W = W.filter(
        (L) => c.value.includes(L.severity)
      )), f.value !== 1 && (g.value++, W = V2(
        f.value,
        W
      )), m.value = W, r.saveFilters && B(), n("filtered-list", W);
    }, B = () => {
      a.filters = {
        node: b.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, F = () => {
      u.value = !u.value;
    };
    return (W, L) => (Lv(), Dv(AR, null, [
      r.isOpen ? VR("", !0) : (Lv(), Dv("div", {
        key: 0,
        class: "btn-filter",
        onClick: F
      }, [
        Xr("div", null, [
          $i(br(J), {
            icon: br(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          LR,
          Xr("span", DR, xv(g.value), 1)
        ]),
        $i(br(J), {
          icon: u.value ? br(s).ExpandLess : br(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      kR(Xr("div", {
        class: IR(["filters", { collapsed: !r.isOpen }])
      }, [
        Xr("div", OR, [
          Xr("div", NR, "Results: " + xv(br(m).length), 1),
          $i(br(ve), {
            class: "btn-reset",
            onClick: A
          }, {
            default: ER(() => [
              $i(br(J), {
                icon: br(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              MR
            ]),
            _: 1
          })
        ]),
        Xr("div", null, [
          $i(br(JM), {
            ref_key: "autocomplete",
            ref: y,
            label: "Search by node",
            loading: w.value,
            modelValue: b.nodeSelectedValue,
            "onUpdate:modelValue": [
              L[0] || (L[0] = (X) => b.nodeSelectedValue = X),
              T
            ],
            results: b.results,
            type: "single",
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"]),
          BR,
          $i(gO, {
            alarms: r.list,
            onSelectedOption: x,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          Xr("div", null, [
            RR,
            $i(BB, {
              onFilterDateSelected: D,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [SR, u.value]
      ])
    ], 64));
  }
});
const Gs = /* @__PURE__ */ Ve(UR, [["__scopeId", "data-v-d75ae1ee"]]), WR = window.Vue.openBlock, HR = window.Vue.createElementBlock, zR = window.Vue.createElementVNode;
var qR = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const GR = {}, YR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jR = /* @__PURE__ */ zR("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), KR = [
  jR
];
function ZR(e, n) {
  return WR(), HR("svg", YR, KR);
}
var wc = /* @__PURE__ */ qR(GR, [["render", ZR]]);
const JR = window.Vue.openBlock, XR = window.Vue.createElementBlock, z1 = window.Vue.createElementVNode;
var QR = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const eP = {}, tP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, nP = /* @__PURE__ */ z1("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), rP = /* @__PURE__ */ z1("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), oP = [
  nP,
  rP
];
function iP(e, n) {
  return JR(), XR("svg", tP, oP);
}
var sP = /* @__PURE__ */ QR(eP, [["render", iP]]);
const aP = window.Vue.openBlock, lP = window.Vue.createElementBlock, uP = window.Vue.createElementVNode;
var cP = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const dP = {}, fP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pP = /* @__PURE__ */ uP("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), hP = [
  pP
];
function mP(e, n) {
  return aP(), lP("svg", fP, hP);
}
var wP = /* @__PURE__ */ cP(dP, [["render", mP]]);
const Ko = () => window.VRouter || z0;
const vP = window.Vue.openBlock, _P = window.Vue.createElementBlock, gP = window.Vue.pushScopeId, $P = window.Vue.popScopeId, Nv = window.Vue.createElementVNode;
var yP = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const bP = {}, CP = (e) => (gP("data-v-2263be39"), e = e(), $P(), e), VP = { class: "spinner-container" }, EP = /* @__PURE__ */ CP(() => /* @__PURE__ */ Nv("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ Nv("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), SP = [
  EP
];
function IP(e, n) {
  return vP(), _P("div", VP, SP);
}
var xs = /* @__PURE__ */ yP(bP, [["render", IP], ["__scopeId", "data-v-2263be39"]]);
const kP = window.Vue.defineComponent, af = window.Vue.unref, AP = window.Vue.createVNode, TP = window.Vue.createElementVNode, xP = window.Vue.withCtx, LP = window.Vue.openBlock, DP = window.Vue.createBlock, OP = window.Vue.pushScopeId, NP = window.Vue.popScopeId, MP = (e) => (OP("data-v-ca5ca6e3"), e = e(), NP(), e), BP = /* @__PURE__ */ MP(() => /* @__PURE__ */ TP("span", null, "New Situation", -1)), RP = window.Vue.markRaw, PP = /* @__PURE__ */ kP({
  __name: "NewSituationBtn",
  setup(e) {
    const n = Ko(), r = RP({
      Add: wc
    }), s = () => {
      n.push({
        name: "addSituation"
      });
    };
    return (a, u) => (LP(), DP(af(ve), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: xP(() => [
        AP(af(J), {
          icon: af(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        BP
      ]),
      _: 1
    }));
  }
});
const q1 = /* @__PURE__ */ Ve(PP, [["__scopeId", "data-v-ca5ca6e3"]]), FP = "/whoami", UP = async () => {
  try {
    const e = await Dt.get(FP);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, WP = window.Pinia.defineStore, HP = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, Ri = WP("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null,
    llmConfig: null,
    llmUsage: null
  }),
  actions: {
    async getUserRole() {
      const e = await UP();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await I2();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, n, r) {
      const s = {
        ...HP,
        ...r,
        distanceMeasureName: n ? Tt.HELLINGER_OPTION : Tt.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return n || (s.hellingerW = null, s.hellingerBias = null), await k2(s) ? (this.engineInfo = s, !0) : !1;
    },
    async getLLMConfig() {
      const e = await A2();
      return e && (this.llmConfig = e), e;
    },
    async setLLMConfig(e) {
      const n = await T2(e);
      return n ? (this.llmConfig = n, !0) : !1;
    },
    async getLLMUsage(e = 30) {
      const n = await D2(e);
      return n && (this.llmUsage = n), n;
    }
  }
}), zP = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", qP = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", GP = window.Vue.defineComponent, fs = window.Vue.unref, ps = window.Vue.openBlock, hs = window.Vue.createElementBlock, YP = window.Vue.createCommentVNode, G1 = window.Vue.createTextVNode, Mv = window.Vue.Fragment, Y1 = window.Vue.createElementVNode, jP = window.Vue.pushScopeId, KP = window.Vue.popScopeId, ZP = (e) => (jP("data-v-ad139137"), e = e(), KP(), e), JP = ["src"], XP = { class: "engine" }, QP = /* @__PURE__ */ G1(" ENGINE "), e3 = {
  key: 0,
  class: "type"
}, t3 = {
  key: 1,
  class: "type"
}, n3 = /* @__PURE__ */ G1(" ENGINE "), r3 = /* @__PURE__ */ ZP(() => /* @__PURE__ */ Y1("div", {
  class: "type not-set",
  "data-test": "configuration-not-set"
}, "CONFIGURE", -1)), Bv = window.Vue.computed, o3 = /* @__PURE__ */ GP({
  __name: "ConfigurationInfo",
  setup(e) {
    const n = Ko(), r = Ri(), s = () => {
      n.push({
        name: "settings"
      });
    }, a = Bv(() => {
      var c;
      return !!((c = r.engineInfo) != null && c.engineName);
    }), u = Bv(
      () => {
        var c;
        return ((c = r.engineInfo) == null ? void 0 : c.engineName) == Tt.ENGINE_DBSCAN;
      }
    );
    return (c, f) => (ps(), hs("div", {
      class: "info-engine",
      onClick: s,
      "data-test": "configuration-info"
    }, [
      fs(a) ? (ps(), hs("img", {
        key: 0,
        src: fs(u) ? fs(qP) : fs(zP),
        class: "icon-type"
      }, null, 8, JP)) : YP("", !0),
      Y1("div", XP, [
        fs(a) ? (ps(), hs(Mv, { key: 0 }, [
          QP,
          fs(u) ? (ps(), hs("div", e3, "CLUSTERING")) : (ps(), hs("div", t3, "DEEP LEARNING"))
        ], 64)) : (ps(), hs(Mv, { key: 1 }, [
          n3,
          r3
        ], 64))
      ])
    ]));
  }
});
const i3 = /* @__PURE__ */ Ve(o3, [["__scopeId", "data-v-ad139137"]]);
const s3 = {}, a3 = window.Vue.openBlock, l3 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const u3 = { class: "empty" };
function c3(e, n) {
  return a3(), l3("div", u3, "No results found.");
}
const Ys = /* @__PURE__ */ Ve(s3, [["render", c3], ["__scopeId", "data-v-2415ea97"]]), d3 = window.Vue.defineComponent, Vr = window.Vue.createElementVNode, xa = window.Vue.unref, bi = window.Vue.createVNode, f3 = window.Vue.withCtx, pu = window.Vue.toDisplayString, Zr = window.Vue.openBlock, Ci = window.Vue.createElementBlock, Rv = window.Vue.createCommentVNode, Pv = window.Vue.createBlock, p3 = window.Vue.renderList, h3 = window.Vue.Fragment, m3 = window.Vue.pushScopeId, w3 = window.Vue.popScopeId, j1 = (e) => (m3("data-v-c35fbcc6"), e = e(), w3(), e), v3 = { class: "list-main" }, _3 = { class: "header" }, g3 = /* @__PURE__ */ j1(() => /* @__PURE__ */ Vr("h2", null, "Situation List", -1)), $3 = { class: "link-btns" }, y3 = /* @__PURE__ */ j1(() => /* @__PURE__ */ Vr("span", null, "View Unassociated Alarms", -1)), b3 = { class: "content" }, C3 = { class: "left-filters" }, V3 = { class: "container" }, E3 = { class: "autocomplete" }, S3 = { key: 0 }, I3 = { key: 1 }, k3 = { key: 0 }, A3 = { class: "situation-list" }, T3 = {
  key: 0,
  class: "footer-pager"
}, x3 = window.Vue.reactive, hu = window.Vue.ref, L3 = window.Vue.watch, D3 = window.Vue.markRaw, O3 = /* @__PURE__ */ d3({
  __name: "SituationList",
  setup(e) {
    const n = D3({
      Add: wc,
      View: sP,
      Settings: wP
    }), r = Ko(), s = fr(), a = Ri();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = x3({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = hu(!0), m = hu(0), w = hu(1), g = hu(0), y = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    L3(
      () => s.situations,
      () => {
        f.value = !1, y(), x(s.situations);
      }
    );
    const b = (S) => {
      m.value = S, c.situations = c.allSituations[m.value];
    }, V = (S) => {
      r.push({
        name: "situationDetail",
        params: {
          id: S
        }
      });
    }, O = () => {
      r.push({
        name: "viewUnassignedAlarms"
      });
    }, x = (S) => {
      g.value = S.length, c.allSituations = Ne.exports.chunk(S, u);
      const A = S.map((T) => T.id);
      s.filteredSituations = A, m.value = 0, c.situations = c.allSituations[0], w.value = c.allSituations.length;
    }, D = (S) => {
      S.length ? x(S) : c.situations = [];
    };
    return (S, A) => {
      var T;
      return Zr(), Ci("div", v3, [
        Vr("div", _3, [
          g3,
          Vr("div", $3, [
            bi(xa(ve), {
              class: "view-situation-btn",
              onClick: A[0] || (A[0] = () => O())
            }, {
              default: f3(() => [
                bi(xa(J), {
                  icon: xa(n).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                y3
              ]),
              _: 1
            }),
            bi(q1),
            bi(i3)
          ])
        ]),
        Vr("div", b3, [
          Vr("div", C3, [
            bi(Gs, {
              list: xa(s).situations,
              onFilteredList: D,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          Vr("div", V3, [
            Vr("div", E3, [
              c.situations && c.situations.length ? (Zr(), Ci("div", S3, " Result: " + pu((T = c.situations) == null ? void 0 : T.length) + " of " + pu(g.value), 1)) : Rv("", !0)
            ]),
            f.value ? (Zr(), Pv(xa(xs), {
              key: 0,
              class: "spinner"
            })) : (Zr(), Ci("div", I3, [
              c.situations && c.situations.length ? (Zr(), Ci("div", k3, [
                Vr("div", A3, [
                  (Zr(!0), Ci(h3, null, p3(c.situations, (B) => (Zr(), Ci("div", {
                    class: "card",
                    key: B.id
                  }, [
                    bi(m1, {
                      onClick: () => V(B.id),
                      "situation-info": B
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                g.value > u ? (Zr(), Ci("div", T3, [
                  Vr("div", null, "Page: " + pu(m.value + 1) + " of " + pu(w.value), 1),
                  bi(Kx, {
                    onGoToPage: b,
                    currentPage: m.value,
                    totalPages: w.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : Rv("", !0)
              ])) : (Zr(), Pv(Ys, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const N3 = /* @__PURE__ */ Ve(O3, [["__scopeId", "data-v-c35fbcc6"]]);
const mu = window.Vue.ref, M3 = window.Vue.inject, B3 = window.Vue.computed, R3 = window.Vue.onMounted, K1 = {
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
}, Z1 = (e) => {
  const n = mu(!1), r = mu(), s = mu(e.controls), a = mu(e.id), u = () => {
    r.value && r.value.focus();
  }, c = M3("registerTab");
  R3(() => {
    if (r.value && c) {
      const m = r.value.parentElement, w = m && m.parentElement ? m.parentElement : void 0, g = Array.from(w ? w.children : []).filter((b) => b.querySelectorAll("[role=tab]").length), y = m ? g.indexOf(m) : -1;
      c({
        el: r.value,
        focus: u,
        disabled: e.disabled,
        selected: n,
        id: a,
        controls: s,
        index: y
      });
    }
  });
  const f = B3(() => ({
    role: "tab",
    ref: "tab",
    tabindex: n.value ? 0 : -1,
    id: a.value,
    "aria-selected": n.value,
    "aria-controls": s.value,
    "aria-disabled": e.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: n,
    attrs: f,
    tab: r
  };
}, Fv = window.Vue.ref, P3 = window.Vue.toRef, F3 = window.Vue.watch, Uv = window.Vue.provide, J1 = {
  prop: "modelValue",
  event: "update:modelValue"
}, X1 = {
  "update:modelValue": (e) => !0
}, Q1 = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, e0 = (e, n) => {
  const r = P3(e, "modelValue"), s = Fv(e.modelValue), a = Fv([]);
  F3(r, (O) => {
    m(O);
  });
  const u = (O) => {
    O.preventDefault(), a.value.some((x, D) => x.tab && x.tab.el.contains(O.target) ? (f(D), m(D), !0) : !1);
  }, c = (O) => {
    if (((X) => X.shiftKey || X.ctrlKey || X.metaKey || X.altKey)(O))
      return;
    const D = O.keyCode, S = (X) => {
      X.stopPropagation(), X.preventDefault();
    }, A = a.value.filter((X) => X.tab && !X.tab.disabled), T = a.value.findIndex((X) => X.tab && X.tab.el.contains(document.activeElement));
    let B = T !== -1 ? T : s.value;
    const F = [ce.RIGHT], W = [ce.LEFT], L = [ce.ENTER, ce.SPACE];
    e.vertical && (F.push(ce.DOWN), W.push(ce.UP)), F.indexOf(D) > -1 ? (B++, B >= A.length && (B = 0), S(O), f(a.value.indexOf(A[B]))) : W.indexOf(D) > -1 && (B--, B < 0 && (B = A.length - 1), S(O), f(a.value.indexOf(A[B]))), L.indexOf(D) > -1 && m(B);
  }, f = (O) => {
    a.value.forEach(function(x, D) {
      O === D && x.tab && x.tab.focus();
    });
  }, m = (O) => {
    const x = a.value[O];
    !x || x.tab && x.tab.disabled || (a.value.forEach((D, S) => {
      D.tab && (D.tab.selected = O === S), D.panel && (D.panel.selected = O === S);
    }), s.value = O, n.emit("update:modelValue", O));
  };
  Uv("registerTab", (O) => {
    const x = O.index;
    x > -1 && (a.value[x] = { ...a.value[x], tab: O }, a.value = [...a.value], y());
  }), Uv("registerPanel", (O) => {
    const x = O.index;
    x > -1 && (a.value[x] = {
      ...a.value[x],
      panel: O
    }, a.value = [...a.value], y());
  });
  const y = () => {
    a.value.forEach(({ tab: O, panel: x }, D) => {
      if (x && O) {
        const S = O.id || Ce("tab"), A = O.controls || Ce("panel");
        O.controls = A, O.id = S, x.tab = S, x.id = A;
      }
      D === s.value && (x && (x.selected = !0), O && (O.selected = !0));
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
}, wu = window.Vue.ref, U3 = window.Vue.inject, W3 = window.Vue.computed, H3 = window.Vue.onMounted, t0 = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, n0 = (e) => {
  const n = wu(!1), r = wu(), s = wu(e.tab), a = wu(e.id), u = U3("registerPanel");
  H3(() => {
    if (u) {
      const f = r.value, m = f && f.parentElement ? f.parentElement : void 0, w = f ? Array.from(m ? m.children : []).indexOf(f) : -1;
      u({
        selected: n,
        id: a,
        tab: s,
        el: r.value,
        index: w
      });
    }
  });
  const c = W3(() => ({
    role: "tabpanel",
    id: a.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": n.value,
    "aria-labelledby": s.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: n,
    attrs: c,
    panel: r
  };
}, Ep = window.Vue.defineComponent, z3 = window.Vue.resolveComponent, Sp = window.Vue.openBlock, Ip = window.Vue.createElementBlock, nl = window.Vue.createElementVNode, r0 = window.Vue.mergeProps, Gu = window.Vue.renderSlot, q3 = window.Vue.createVNode, G3 = window.Vue.normalizeStyle, Y3 = window.Vue.toHandlers, j3 = window.Vue.withDirectives, K3 = window.Vue.normalizeProps, Z3 = window.Vue.guardReactiveProps, J3 = window.Vue.vShow;
var kp = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const X3 = K1, Q3 = Ep({
  props: X3,
  setup(e) {
    return Z1(e);
  },
  components: {
    FeatherRipple: qo
  }
}), e4 = { role: "presentation" }, t4 = { class: "tab-text" };
function n4(e, n, r, s, a, u) {
  const c = z3("FeatherRipple");
  return Sp(), Ip("li", e4, [
    nl("button", r0(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      nl("span", t4, [
        Gu(e.$slots, "default", {}, void 0, !0)
      ]),
      q3(c)
    ], 16)
  ]);
}
var rl = /* @__PURE__ */ kp(Q3, [["render", n4], ["__scopeId", "data-v-e6bb52b6"]]);
const r4 = Q1, o4 = X1, i4 = Ep({
  model: J1,
  emits: o4,
  props: r4,
  setup(e, n) {
    return e0(e, n);
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
        e && e.length && this.ro && e.forEach((n) => {
          n.tab && this.ro.observe(n.tab.el);
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
        const e = this.$el.getBoundingClientRect(), n = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = n.left - e.left, s = n.height - 2;
        this.width = `${n.width}px`, this.transform = `translateX(${r}px) translateY(${s}px)`;
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
}), s4 = { class: "feather-tab-container" }, a4 = { class: "tab-panels" };
function l4(e, n, r, s, a, u) {
  return Sp(), Ip("div", s4, [
    nl("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: G3({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    nl("ul", r0(e.attrs, Y3(e.listeners)), [
      Gu(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    nl("div", a4, [
      Gu(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var o0 = /* @__PURE__ */ kp(i4, [["render", l4], ["__scopeId", "data-v-27adffb9"]]);
const u4 = t0, c4 = Ep({
  props: u4,
  setup(e) {
    return n0(e);
  }
});
function d4(e, n, r, s, a, u) {
  return j3((Sp(), Ip("div", K3(Z3(e.attrs)), [
    Gu(e.$slots, "default")
  ], 16)), [
    [J3, e.selected]
  ]);
}
var ol = /* @__PURE__ */ kp(c4, [["render", d4]]);
const f4 = window.Vue.defineComponent, p4 = window.Vue.toDisplayString, h4 = window.Vue.normalizeClass, m4 = window.Vue.openBlock, w4 = window.Vue.createElementBlock, v4 = window.Vue.createCommentVNode, _4 = /* @__PURE__ */ f4({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const n = e;
    return (r, s) => n != null && n.severity ? (m4(), w4("span", {
      key: 0,
      class: h4(["severity-status", [`${n.severity.toLowerCase()}-color`]])
    }, p4(n.severity), 3)) : v4("", !0);
  }
});
const i0 = /* @__PURE__ */ Ve(_4, [["__scopeId", "data-v-83c2cdce"]]), g4 = window.Vue.defineComponent, Wv = window.Vue.toDisplayString, Hv = window.Vue.createElementVNode, $4 = window.Vue.openBlock, y4 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const b4 = { class: "box" }, C4 = { class: "label" }, V4 = { class: "date" }, E4 = /* @__PURE__ */ g4({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const n = e;
    return (r, s) => ($4(), y4("div", b4, [
      Hv("div", C4, Wv(n.label), 1),
      Hv("div", V4, Wv(n.info), 1)
    ]));
  }
});
const lf = /* @__PURE__ */ Ve(E4, [["__scopeId", "data-v-b4afa751"]]), S4 = window.Vue.defineComponent, I4 = window.Vue.unref, k4 = window.Vue.renderList, A4 = window.Vue.Fragment, uf = window.Vue.openBlock, cf = window.Vue.createElementBlock, T4 = window.Vue.toDisplayString, x4 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const L4 = { class: "alarms-list" }, D4 = /* @__PURE__ */ S4({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const n = e;
    return (r, s) => (uf(), cf("div", L4, [
      (uf(!0), cf(A4, null, k4(I4(Ne.exports.groupBy)(n == null ? void 0 : n.alarms, "severity"), (a, u) => (uf(), cf("div", {
        class: x4(["alarm-count", [`${u.toString().toLowerCase()}-color`, n.size]]),
        key: u
      }, T4(a.length), 3))), 128))
    ]));
  }
});
const O4 = /* @__PURE__ */ Ve(D4, [["__scopeId", "data-v-52d63440"]]), N4 = window.Vue.openBlock, M4 = window.Vue.createElementBlock, B4 = window.Vue.createElementVNode;
var R4 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const P4 = {}, F4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, U4 = /* @__PURE__ */ B4("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), W4 = [
  U4
];
function H4(e, n) {
  return N4(), M4("svg", F4, W4);
}
var z4 = /* @__PURE__ */ R4(P4, [["render", H4]]);
const q4 = window.Vue.openBlock, G4 = window.Vue.createElementBlock, Y4 = window.Vue.createStaticVNode;
var j4 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const K4 = {}, Z4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, J4 = /* @__PURE__ */ Y4('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), X4 = [
  J4
];
function Q4(e, n) {
  return q4(), G4("svg", Z4, X4);
}
var Yu = /* @__PURE__ */ j4(K4, [["render", Q4]]);
const e8 = window.Vue.defineComponent, sr = window.Vue.unref, df = window.Vue.createVNode, Ap = window.Vue.createElementVNode, ff = window.Vue.withCtx, vu = window.Vue.openBlock, pf = window.Vue.createBlock, hf = window.Vue.createCommentVNode, t8 = window.Vue.normalizeClass, n8 = window.Vue.createElementBlock, r8 = window.Vue.pushScopeId, o8 = window.Vue.popScopeId, Tp = (e) => (r8("data-v-d9c6a479"), e = e(), o8(), e), i8 = /* @__PURE__ */ Tp(() => /* @__PURE__ */ Ap("span", null, "Acknowledge", -1)), s8 = /* @__PURE__ */ Tp(() => /* @__PURE__ */ Ap("span", null, "Escalate", -1)), a8 = /* @__PURE__ */ Tp(() => /* @__PURE__ */ Ap("span", null, "Clear", -1)), l8 = /* @__PURE__ */ e8({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const n = e, r = fr(), s = async (u) => {
      await Fk(n.alarm.id, u) && r.getSituation(n.situationId), n.isSituation && await p1(
        n.situationId,
        Tt.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await Yg(n.alarm.id, u) && r.getSituation(n.situationId);
    };
    return (u, c) => (vu(), n8("div", {
      class: t8(["action-btns-group", n.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? hf("", !0) : (vu(), pf(sr(ve), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: ff(() => [
          df(sr(J), {
            icon: sr(Ns),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          i8
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (vu(), pf(sr(ve), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(sr(Tt).ESCALATE))
      }, {
        default: ff(() => [
          df(sr(J), {
            icon: sr(z4),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          s8
        ]),
        _: 1
      })) : hf("", !0),
      n.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (vu(), pf(sr(ve), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(sr(Tt).CLEAR))
      }, {
        default: ff(() => [
          df(sr(J), {
            icon: sr(Yu),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          a8
        ]),
        _: 1
      })) : hf("", !0)
    ], 2));
  }
});
const s0 = /* @__PURE__ */ Ve(l8, [["__scopeId", "data-v-d9c6a479"]]);
var u8 = Object.defineProperty, c8 = Object.defineProperties, d8 = Object.getOwnPropertyDescriptors, zv = Object.getOwnPropertySymbols, f8 = Object.prototype.hasOwnProperty, p8 = Object.prototype.propertyIsEnumerable, qv = (e, n, r) => n in e ? u8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, op = (e, n) => {
  for (var r in n || (n = {}))
    f8.call(n, r) && qv(e, r, n[r]);
  if (zv)
    for (var r of zv(n))
      p8.call(n, r) && qv(e, r, n[r]);
  return e;
}, a0 = (e, n) => c8(e, d8(n));
const l0 = window.Vue.defineComponent, h8 = window.Vue.inject, m8 = window.Vue.resolveComponent, mf = window.Vue.openBlock, Gv = window.Vue.createElementBlock, Ss = window.Vue.createElementVNode, w8 = window.Vue.createBlock, Yv = window.Vue.createCommentVNode, v8 = window.Vue.renderSlot, _8 = window.Vue.pushScopeId, g8 = window.Vue.popScopeId, wf = window.Vue.toRef, _u = window.Vue.computed, $8 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var y8 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const b8 = {
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
}, C8 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, V8 = l0({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: C8,
  props: b8,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: h8("registerCheckbox", (n) => {
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
    FeatherRipple: qo
  }
}), E8 = (e) => (_8("data-v-a7af27e2"), e = e(), g8(), e), S8 = { class: "layout-container" }, I8 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], k8 = { class: "checkbox hover focus" }, A8 = /* @__PURE__ */ E8(() => /* @__PURE__ */ Ss("div", { class: "box" }, [
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
], -1)), T8 = ["id", "for"];
function x8(e, n, r, s, a, u) {
  const c = m8("feather-ripple");
  return mf(), Gv("div", S8, [
    Ss("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: n[0] || (n[0] = (...f) => e.click && e.click(...f)),
      onKeydown: n[1] || (n[1] = (...f) => e.keydown && e.keydown(...f)),
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
      Ss("div", k8, [
        A8,
        e.disabled ? Yv("", !0) : (mf(), w8(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Yv("", !0) : (mf(), Gv("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        v8(e.$slots, "default", {}, void 0, !0)
      ], 8, T8))
    ], 40, I8)
  ]);
}
var Ni = /* @__PURE__ */ y8(V8, [["render", x8], ["__scopeId", "data-v-a7af27e2"]]);
const L8 = a0(op({}, Hs), {
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
l0({
  props: L8,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, n) {
    zs(e);
    const r = wf(e, "error"), s = _u(() => Ce("feather-checkbox-group")), a = _u(() => Ce("feather-input-description")), u = _u(() => Ce("feather-input-label")), c = _u(() => {
      const g = JSON.parse(JSON.stringify(n.attrs));
      return g["aria-invalid"] || (g["aria-invalid"] = !!r.value), a0(op({}, g), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = $8(s.value), { validate: m } = Us(f, wf(e, "modelValue"), e.label, e.schema, wf(e, "error"));
    return op({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: m,
      registerCheckbox: (g) => {
        g && f.value === s.value && (f.value = g);
      }
    }, Ws(n.attrs));
  },
  components: {
    InputSubText: Fs
  }
});
const D8 = window.Vue.openBlock, O8 = window.Vue.createElementBlock, u0 = window.Vue.createElementVNode;
var N8 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const M8 = {}, B8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, R8 = /* @__PURE__ */ u0("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), P8 = /* @__PURE__ */ u0("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), F8 = [
  R8,
  P8
];
function U8(e, n) {
  return D8(), O8("svg", B8, F8);
}
var W8 = /* @__PURE__ */ N8(M8, [["render", U8]]);
var H8 = Object.defineProperty, z8 = Object.defineProperties, q8 = Object.getOwnPropertyDescriptors, jv = Object.getOwnPropertySymbols, G8 = Object.prototype.hasOwnProperty, Y8 = Object.prototype.propertyIsEnumerable, Kv = (e, n, r) => n in e ? H8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Is = (e, n) => {
  for (var r in n || (n = {}))
    G8.call(n, r) && Kv(e, r, n[r]);
  if (jv)
    for (var r of jv(n))
      Y8.call(n, r) && Kv(e, r, n[r]);
  return e;
}, c0 = (e, n) => z8(e, q8(n));
const j8 = window.Vue.defineComponent, vf = window.Vue.toRef, K8 = window.Vue.computed, Zv = window.Vue.resolveComponent, Jv = window.Vue.openBlock, Xv = window.Vue.createElementBlock, Qv = window.Vue.mergeProps, e_ = window.Vue.createVNode, Z8 = window.Vue.normalizeClass, t_ = window.Vue.withCtx, J8 = window.Vue.createElementVNode, X8 = window.Vue.toDisplayString, Q8 = window.Vue.createCommentVNode;
var eF = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const tF = c0(Is(Is({}, lc), Hs), {
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
}), nF = {
  "update:modelValue": (e) => !0
}, rF = j8({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: nF,
  props: tF,
  setup(e, n) {
    zs(e), uc(e);
    const r = vf(e, "id"), s = K8(() => r.value ? r.value : Ce("feather-textarea-label")), { validate: a } = Us(s, vf(e, "modelValue"), e.label, e.schema, vf(e, "error"));
    return Is({
      inputId: s,
      incomingId: r,
      validate: a
    }, Ws(n.attrs));
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
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), c0(Is(Is({}, e), this.listeners), {
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
        const n = e.getBoundingClientRect().width;
        e.scrollWidth <= e.clientWidth && n < e.parentElement.getBoundingClientRect().width ? e.style.whiteSpace = "nowrap" : (e.style.whiteSpace = "normal", e.style.flexBasis = "100%"), this.$nextTick(() => {
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
    InputSubText: Fs,
    InputWrapper: ac
  }
}), oF = ["maxlength"], iF = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function sF(e, n, r, s, a, u) {
  const c = Zv("InputWrapper"), f = Zv("InputSubText");
  return Jv(), Xv("div", Qv(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    e_(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: Z8(["feather-textarea-content", e.contentCls])
    }, {
      default: t_(() => [
        J8("textarea", Qv(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, oF)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    e_(f, { id: e.descriptionId }, {
      right: t_(() => [
        e.maxlength ? (Jv(), Xv("div", iF, X8(e.charCount), 1)) : Q8("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var ju = /* @__PURE__ */ eF(rF, [["render", sF], ["__scopeId", "data-v-0648df5c"]]);
const aF = window.Pinia.defineStore, vc = aF("appStore", {
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
}), lF = window.Vue.defineComponent, n_ = window.Vue.toDisplayString, La = window.Vue.createElementVNode, Vi = window.Vue.unref, ms = window.Vue.openBlock, r_ = window.Vue.createBlock, Da = window.Vue.createCommentVNode, o_ = window.Vue.createVNode, gu = window.Vue.createElementBlock, uF = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const cF = { class: "row" }, dF = { class: "label" }, fF = { class: "action-icons" }, pF = { class: "icon-btn" }, hF = {
  key: 0,
  class: "icon-btn"
}, mF = {
  key: 1,
  class: "icon-btn"
}, wF = {
  key: 0,
  class: "text"
}, vF = window.Vue.watch, i_ = window.Vue.ref, _F = /* @__PURE__ */ lF({
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
    const n = e, r = vc(), s = i_(!1), a = i_((m = n.memo) == null ? void 0 : m.body);
    vF(n, () => {
      var w;
      a.value = (w = n.memo) == null ? void 0 : w.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await Yk(n.id, n.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await Gk(n.id, n.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (w, g) => (ms(), gu("div", {
      class: uF([n.boxType === "small" ? "box-small" : "box"])
    }, [
      La("div", cF, [
        La("div", dF, n_(e.label), 1),
        La("div", fF, [
          La("div", pF, [
            s.value ? Da("", !0) : (ms(), r_(Vi(J), {
              key: 0,
              icon: Vi(W8),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (ms(), gu("div", hF, [
            o_(Vi(J), {
              icon: Vi(Ns),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Da("", !0),
          a.value && a.value != "" || s.value ? (ms(), gu("div", mF, [
            o_(Vi(J), {
              icon: Vi(Rs),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : Da("", !0)
        ])
      ]),
      La("div", null, [
        !s.value && a.value != null ? (ms(), gu("div", wF, n_(a.value), 1)) : Da("", !0),
        s.value ? (ms(), r_(Vi(ju), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": g[0] || (g[0] = (y) => a.value = y),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Da("", !0)
      ])
    ], 2));
  }
});
const Ku = /* @__PURE__ */ Ve(_F, [["__scopeId", "data-v-ee1264b5"]]), gF = window.Vue.defineComponent, Lo = window.Vue.unref, ws = window.Vue.createVNode, Oa = window.Vue.toDisplayString, cr = window.Vue.createElementVNode, s_ = window.Vue.openBlock, a_ = window.Vue.createElementBlock, l_ = window.Vue.createCommentVNode, _f = window.Vue.createTextVNode, $F = window.Vue.pushScopeId, yF = window.Vue.popScopeId, xp = (e) => ($F("data-v-b59dc239"), e = e(), yF(), e), bF = {
  key: 0,
  class: "card"
}, CF = { class: "row" }, VF = {
  key: 0,
  class: "ack"
}, EF = /* @__PURE__ */ xp(() => /* @__PURE__ */ cr("strong", null, " Duration: ", -1)), SF = ["innerHTML"], IF = /* @__PURE__ */ xp(() => /* @__PURE__ */ cr("strong", null, "First Event", -1)), kF = /* @__PURE__ */ xp(() => /* @__PURE__ */ cr("strong", null, "Last Event", -1)), AF = { class: "section memo-boxes" }, u_ = window.Vue.ref, TF = window.Vue.watch, xF = /* @__PURE__ */ gF({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: n }) {
    const r = e, s = u_(!1), a = u_(r.alarm), u = new Date().getTime();
    TF(r, () => {
      a.value = r.alarm, s.value = r.selectAll, r.selectAll && n("alarm-selected", r.alarm.id);
    });
    const c = () => {
      n("alarm-selected", r.alarm.id);
    }, f = async (m) => {
      const w = await jg(m);
      w && (a.value = w);
    };
    return (m, w) => {
      var g, y, b, V, O;
      return a.value ? (s_(), a_("div", bF, [
        cr("div", null, [
          cr("div", CF, [
            ws(Lo(Ni), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                w[0] || (w[0] = (x) => s.value = x),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            cr("div", {
              class: "title",
              onClick: w[1] || (w[1] = () => {
                s.value = !s.value, c();
              })
            }, Oa(a.value.nodeLabel) + " - " + Oa(a.value.id), 1),
            ws(i0, {
              severity: (g = a.value) == null ? void 0 : g.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (s_(), a_("div", VF, [
              ws(Lo(J), {
                icon: Lo(Ns),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : l_("", !0)
          ]),
          cr("div", null, [
            EF,
            _f(" " + Oa(Lo(oc)(Lo(u), new Date(a.value.firstEventTime))), 1)
          ]),
          cr("div", {
            class: "description",
            innerHTML: Lo(s1)(a.value.description || "")
          }, null, 8, SF),
          cr("div", null, [
            IF,
            _f(" - " + Oa(Lo(kr)(a.value.firstEventTime)), 1)
          ]),
          cr("div", null, [
            kF,
            _f(" - " + Oa(Lo(kr)(a.value.lastEventTime)), 1)
          ]),
          cr("div", AF, [
            ws(Ku, {
              id: (y = a.value) == null ? void 0 : y.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (b = a.value) == null ? void 0 : b.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            ws(Ku, {
              id: (V = a.value) == null ? void 0 : V.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (O = a.value) == null ? void 0 : O.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        ws(s0, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : l_("", !0);
    };
  }
});
const LF = /* @__PURE__ */ Ve(xF, [["__scopeId", "data-v-b59dc239"]]), DF = window.Vue.openBlock, OF = window.Vue.createElementBlock, d0 = window.Vue.createElementVNode;
var NF = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const MF = {}, BF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, RF = /* @__PURE__ */ d0("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), PF = /* @__PURE__ */ d0("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), FF = [
  RF,
  PF
];
function UF(e, n) {
  return DF(), OF("svg", BF, FF);
}
var ip = /* @__PURE__ */ NF(MF, [["render", UF]]);
const WF = window.Vue.watch, HF = window.Vue.ref, zF = window.Vue.onBeforeUnmount, f0 = (e) => {
  const n = HF(!1), r = (s) => {
    s.keyCode === ce.ESCAPE && (s.preventDefault(), n.value = !n.value);
  };
  return WF(e, (s) => {
    s ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), zF(() => {
    document.removeEventListener("keydown", r);
  }), n;
}, qF = window.Vue.watch, p0 = (e) => {
  let n;
  qF(e, (r) => {
    r ? n = document.activeElement : setTimeout(() => {
      n && n.focus && n.focus(), n = void 0;
    }, 0);
  });
}, h0 = window.Vue.watch, m0 = window.Vue.onBeforeUnmount, w0 = window.Vue.nextTick, GF = window.Vue.onMounted, v0 = (e) => {
  if (e === !1)
    return "hidden";
  const n = e.style.overflow;
  return e.style.overflow = "hidden", n;
}, Zu = (e, n) => {
  e !== void 0 && n !== !1 && (n.style.overflow = e);
}, _0 = (e) => {
  let n;
  const r = typeof document < "u" ? document.body : !1;
  m0(() => Zu(n, r)), GF(() => h0(e, (s) => {
    s ? w0(() => {
      n = v0(r);
    }) : Zu(n, r);
  }, { immediate: !0 }));
}, YF = (e, n) => {
  let r;
  m0(() => Zu(r, n.value ? n.value.offsetParent : !1)), h0([e, n], ([s, a]) => {
    s && a ? w0(() => {
      r = v0(a.offsetParent);
    }) : a && Zu(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var jF = Object.defineProperty, c_ = Object.getOwnPropertySymbols, KF = Object.prototype.hasOwnProperty, ZF = Object.prototype.propertyIsEnumerable, d_ = (e, n, r) => n in e ? jF(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, JF = (e, n) => {
  for (var r in n || (n = {}))
    KF.call(n, r) && d_(e, r, n[r]);
  if (c_)
    for (var r of c_(n))
      ZF.call(n, r) && d_(e, r, n[r]);
  return e;
};
const Lp = window.Vue.defineComponent, il = window.Vue.ref, XF = window.Vue.nextTick, g0 = window.Vue.openBlock, $0 = window.Vue.createElementBlock, Dp = window.Vue.createElementVNode, QF = window.Vue.renderSlot, e5 = window.Vue.resolveComponent, t5 = window.Vue.normalizeClass, n5 = window.Vue.withModifiers, r5 = window.Vue.createVNode, f_ = window.Vue.toRef, p_ = window.Vue.computed, h_ = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var y0 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const o5 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, i5 = Lp({
  props: o5,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = il(), n = il(!1), r = (g, y) => {
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
    }, u = (g) => c(g) ? (n.value = !0, g.focus && g.focus(), n.value = !1, document.activeElement === g) : !1, c = (g) => {
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
          const V = g;
          return V.type !== "hidden" && V.type !== "file";
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
      y && y.focus ? XF(() => {
        y.focus();
      }) : s(g);
    }, m = il();
    return {
      trapFocus: () => {
        n.value || setTimeout(() => {
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
      ignoreUtilFocusChanges: n,
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
}), s5 = /* @__PURE__ */ Dp("div", { tabindex: "0" }, null, -1), a5 = {
  class: "focus-trap-content",
  ref: "content"
}, l5 = /* @__PURE__ */ Dp("div", { tabindex: "0" }, null, -1);
function u5(e, n, r, s, a, u) {
  return g0(), $0("div", null, [
    s5,
    Dp("div", a5, [
      QF(e.$slots, "default")
    ], 512),
    l5
  ]);
}
var b0 = /* @__PURE__ */ y0(i5, [["render", u5]]);
const c5 = Lp({
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
    icon: () => Rs
  },
  components: {
    FeatherIcon: J
  }
}), d5 = ["aria-label"];
function f5(e, n, r, s, a, u) {
  const c = e5("FeatherIcon");
  return g0(), $0("a", {
    href: "#",
    class: t5(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: n[0] || (n[0] = n5((f) => e.$emit("close"), ["prevent"]))
  }, [
    r5(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, d5);
}
var C0 = /* @__PURE__ */ y0(c5, [["render", f5], ["__scopeId", "data-v-fc0f3f00"]]);
const V0 = {
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
    default: () => V0,
    validator: (e) => !!e.title
  }
}, h5 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
Lp({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: h5,
  props: p5,
  setup(e, n) {
    const r = sc(f_(e, "labels"), V0), s = f_(e, "modelValue"), a = il(), u = () => {
      n.emit("update:modelValue", !1);
    }, c = p_(() => !!n.slots.footer), f = p_(() => Ce("dialog-header"));
    e.relative ? YF(s, a) : _0(s), p0(s), h_(f0(s), () => {
      u();
    });
    const m = il(e.modelValue);
    return h_(m, (w) => {
      w ? n.emit("shown") : n.emit("hidden");
    }), JF({ close: u, hasFooter: c, headerId: f, element: a, shown: m }, r);
  },
  components: {
    FocusTrap: b0,
    DialogClose: C0
  }
});
var m5 = Object.defineProperty, m_ = Object.getOwnPropertySymbols, w5 = Object.prototype.hasOwnProperty, v5 = Object.prototype.propertyIsEnumerable, w_ = (e, n, r) => n in e ? m5(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, _c = (e, n) => {
  for (var r in n || (n = {}))
    w5.call(n, r) && w_(e, r, n[r]);
  if (m_)
    for (var r of m_(n))
      v5.call(n, r) && w_(e, r, n[r]);
  return e;
};
const gc = window.Vue.defineComponent, v_ = window.Vue.toRef, __ = window.Vue.watch, g_ = window.Vue.ref, $_ = window.Vue.resolveComponent, $u = window.Vue.openBlock, y_ = window.Vue.createBlock, _5 = window.Vue.Teleport, b_ = window.Vue.createElementBlock, gf = window.Vue.createVNode, C_ = window.Vue.Transition, $f = window.Vue.withCtx, V_ = window.Vue.createCommentVNode, g5 = window.Vue.withDirectives, $5 = window.Vue.normalizeStyle, y5 = window.Vue.normalizeClass, E_ = window.Vue.createElementVNode, b5 = window.Vue.renderSlot, C5 = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var V5 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const E0 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, E5 = {
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
    default: () => E0,
    validator: (e) => !!e.title
  }
}, S5 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, I5 = gc({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: S5,
  props: E5,
  setup(e, n) {
    const r = sc(v_(e, "labels"), E0), s = v_(e, "modelValue"), a = () => {
      n.emit("update:modelValue", !1);
    };
    _0(s), p0(s), __(f0(s), () => {
      a();
    });
    const u = g_(), c = g_(!1);
    return __(c, (f) => {
      f ? n.emit("shown") : n.emit("hidden");
    }), _c({ close: a, shown: c, isShown: s, element: u }, r);
  },
  components: {
    DialogClose: C0,
    FocusTrap: b0
  }
}), k5 = {
  key: 0,
  class: "drawer-container feather-styles"
}, A5 = {
  key: 0,
  class: "greyedOut"
}, T5 = ["aria-label"], x5 = { class: "slot" };
function L5(e, n, r, s, a, u) {
  const c = $_("dialog-close"), f = $_("focus-trap");
  return $u(), y_(_5, { to: "body" }, [
    e.modelValue ? ($u(), b_("div", k5, [
      gf(C_, { name: "greyOutShim" }, {
        default: $f(() => [
          e.modelValue ? ($u(), b_("div", A5)) : V_("", !0)
        ]),
        _: 1
      }),
      gf(C_, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: n[0] || (n[0] = (m) => e.shown = !0),
        onAfterLeave: n[1] || (n[1] = (m) => e.shown = !1)
      }, {
        default: $f(() => [
          g5(($u(), y_(f, {
            enable: e.modelValue,
            style: $5({ width: e.width }),
            key: "sect",
            class: y5(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: $f(() => [
              E_("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                E_("div", x5, [
                  b5(e.$slots, "default", {}, void 0, !0)
                ]),
                gf(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, T5)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [C5, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : V_("", !0)
  ]);
}
var S0 = /* @__PURE__ */ V5(I5, [["render", L5], ["__scopeId", "data-v-0a36e1dc"]]);
const D5 = _c({
  label: {
    type: String,
    required: !0
  }
}, K1);
gc({
  name: "DrawerTab",
  props: D5,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = Mi(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      Bi(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return Z1(e);
  },
  components: {
    FeatherRipple: qo
  }
});
const O5 = _c({}, Q1), N5 = X1;
gc({
  emits: N5,
  model: J1,
  props: O5,
  setup(e, n) {
    return e0(e, n);
  }
});
const M5 = _c({
  header: {
    type: String
  }
}, t0);
gc({
  name: "DrawerTabContent",
  props: M5,
  setup(e) {
    return n0(e);
  },
  directives: {
    MenuFocusLoop: YO
  }
});
const B5 = window.Vue.defineComponent, I0 = window.Vue.createElementVNode, S_ = window.Vue.createVNode, R5 = window.Vue.renderList, P5 = window.Vue.Fragment, Na = window.Vue.openBlock, yf = window.Vue.createElementBlock, I_ = window.Vue.createBlock, F5 = window.Vue.unref, U5 = window.Vue.withCtx, W5 = window.Vue.pushScopeId, H5 = window.Vue.popScopeId, z5 = (e) => (W5("data-v-37e146e7"), e = e(), H5(), e), q5 = { class: "content" }, G5 = /* @__PURE__ */ z5(() => /* @__PURE__ */ I0("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), Y5 = {
  key: 0,
  class: "situation-list"
}, bf = window.Vue.ref, k_ = window.Vue.watch, j5 = /* @__PURE__ */ B5({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: n }) {
    const r = e, s = fr(), a = bf(r.visible), u = () => {
      let w = s.situations;
      r.situationId !== 0 && (w = s.situations.filter(
        (g) => g.id != r.situationId
      )), c.value = w, f.value = w;
    }, c = bf(s.situations), f = bf(s.situations);
    k_(r, () => {
      a.value = r.visible, u();
    }), k_(
      () => s.situations,
      () => {
        u();
      }
    );
    const m = (w) => {
      f.value = w;
    };
    return (w, g) => (Na(), I_(F5(S0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        g[0] || (g[0] = (y) => a.value = y),
        g[1] || (g[1] = (y) => n("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: U5(() => [
        I0("div", q5, [
          G5,
          S_(Gs, {
            list: c.value,
            isSituation: "",
            onFilteredList: m
          }, null, 8, ["list"]),
          f.value.length ? (Na(), yf("div", Y5, [
            (Na(!0), yf(P5, null, R5(f.value, (y) => (Na(), yf("div", {
              class: "card",
              key: y.id
            }, [
              S_(m1, {
                onClick: (b) => n("situation-selected", y.id),
                "situation-info": y,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Na(), I_(Ys, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const k0 = /* @__PURE__ */ Ve(j5, [["__scopeId", "data-v-37e146e7"]]), K5 = window.Vue.defineComponent, A_ = window.Vue.normalizeClass, Vs = window.Vue.createElementVNode, yu = window.Vue.unref, Z5 = window.Vue.createVNode, bu = window.Vue.toDisplayString, J5 = window.Vue.createTextVNode, X5 = window.Vue.openBlock, Q5 = window.Vue.createElementBlock, e6 = window.Vue.pushScopeId, t6 = window.Vue.popScopeId, n6 = (e) => (e6("data-v-f3d99277"), e = e(), t6(), e), r6 = { class: "alarmInfo" }, o6 = { class: "alarm-title" }, i6 = /* @__PURE__ */ n6(() => /* @__PURE__ */ Vs("strong", null, " Duration: ", -1)), s6 = { class: "description" }, a6 = /* @__PURE__ */ K5({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: n }) {
    const r = e, s = new Date().getTime();
    return (a, u) => (X5(), Q5("div", {
      class: A_(["alarm", { selected: r.selected }])
    }, [
      Vs("div", r6, [
        Vs("div", {
          class: A_(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        Z5(yu(Ni), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => n("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        Vs("div", o6, bu(e.alarm.nodeLabel) + " - " + bu(e.alarm.id), 1)
      ]),
      Vs("div", null, [
        i6,
        J5(" " + bu(yu(oc)(yu(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      Vs("div", s6, bu(yu(a1)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const Op = /* @__PURE__ */ Ve(a6, [["__scopeId", "data-v-f3d99277"]]), l6 = window.Vue.defineComponent, Ou = window.Vue.createElementVNode, vs = window.Vue.unref, u6 = window.Vue.toDisplayString, T_ = window.Vue.withCtx, Cf = window.Vue.createVNode, c6 = window.Vue.renderList, d6 = window.Vue.Fragment, Ma = window.Vue.openBlock, Vf = window.Vue.createElementBlock, x_ = window.Vue.createBlock, f6 = window.Vue.pushScopeId, p6 = window.Vue.popScopeId, h6 = (e) => (f6("data-v-35547098"), e = e(), p6(), e), m6 = { class: "content" }, w6 = { class: "header" }, v6 = /* @__PURE__ */ h6(() => /* @__PURE__ */ Ou("h4", null, "ADD ALARMS", -1)), _6 = {
  key: 0,
  class: "alarms-list"
}, Cu = window.Vue.ref, L_ = window.Vue.watch, g6 = /* @__PURE__ */ l6({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: n }) {
    const r = e, s = fr(), a = Cu(r.visible), u = Cu([]), c = Cu(["all"]), f = Cu(s.unassignedAlarms);
    L_(r, () => {
      a.value = r.visible, u.value = [], f.value = s.unassignedAlarms;
    }), L_(
      () => s.unassignedAlarms,
      () => {
        g();
      }
    );
    const m = (b) => {
      Ne.exports.includes(u.value, b) ? Ne.exports.remove(u.value, (V) => V === b) : u.value.push(b);
    }, w = () => {
      n("alarms-selected", u.value);
    }, g = () => {
      let b = s.unassignedAlarms;
      c.value.includes("all") || (b = b.filter(
        (V) => c.value.includes(V.severity)
      )), f.value = b;
    }, y = (b) => {
      f.value = b;
    };
    return (b, V) => (Ma(), x_(vs(S0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        V[0] || (V[0] = (O) => a.value = O),
        V[1] || (V[1] = (O) => n("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: T_(() => [
        Ou("div", m6, [
          Ou("div", w6, [
            v6,
            Cf(vs(ve), {
              class: "add-alarms-btn",
              onClick: w
            }, {
              default: T_(() => [
                Ou("span", null, "Add " + u6(vs(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          Cf(Gs, {
            list: vs(s).unassignedAlarms,
            onFilteredList: y
          }, null, 8, ["list"]),
          f.value.length ? (Ma(), Vf("div", _6, [
            (Ma(!0), Vf(d6, null, c6(f.value, (O) => (Ma(), Vf("div", {
              class: "card",
              key: O.id
            }, [
              Cf(Op, {
                selected: vs(Ne.exports.includes)(vs(u), O.id),
                alarm: O,
                onSelectedAlarm: m
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (Ma(), x_(Ys, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const $6 = /* @__PURE__ */ Ve(g6, [["__scopeId", "data-v-35547098"]]), y6 = window.Vue.openBlock, b6 = window.Vue.createElementBlock, A0 = window.Vue.createElementVNode;
var C6 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const V6 = {}, E6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, S6 = /* @__PURE__ */ A0("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), I6 = /* @__PURE__ */ A0("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), k6 = [
  S6,
  I6
];
function A6(e, n) {
  return y6(), b6("svg", E6, k6);
}
var D_ = /* @__PURE__ */ C6(V6, [["render", A6]]);
const T6 = window.Vue.defineComponent, Tn = window.Vue.createElementVNode, Ft = window.Vue.unref, Xt = window.Vue.createVNode, Ba = window.Vue.withCtx, x6 = window.Vue.renderList, O_ = window.Vue.Fragment, Ra = window.Vue.openBlock, Vu = window.Vue.createElementBlock, L6 = window.Vue.createBlock, D6 = window.Vue.pushScopeId, O6 = window.Vue.popScopeId, js = (e) => (D6("data-v-76f75ba2"), e = e(), O6(), e), N6 = { class: "container" }, M6 = { class: "header" }, B6 = /* @__PURE__ */ js(() => /* @__PURE__ */ Tn("div", { class: "title" }, "Alarms", -1)), R6 = /* @__PURE__ */ js(() => /* @__PURE__ */ Tn("span", null, "Add Alarms", -1)), P6 = { class: "alarms-container" }, F6 = { class: "filters" }, U6 = { class: "list" }, W6 = { class: "row actions" }, H6 = /* @__PURE__ */ js(() => /* @__PURE__ */ Tn("span", null, "Clear", -1)), z6 = /* @__PURE__ */ js(() => /* @__PURE__ */ Tn("span", null, "Acknowledge", -1)), q6 = /* @__PURE__ */ js(() => /* @__PURE__ */ Tn("span", null, "Move", -1)), G6 = /* @__PURE__ */ js(() => /* @__PURE__ */ Tn("span", null, "Remove", -1)), Y6 = { class: "section" }, j6 = {
  key: 0,
  class: "alarm-list"
}, Eu = window.Vue.ref, K6 = window.Vue.watch, Z6 = window.Vue.reactive, J6 = window.Vue.markRaw, X6 = /* @__PURE__ */ T6({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const n = e, r = J6({
      Add: wc,
      Delete: D_,
      MarkComplete: Yu,
      CheckCircle: Ns,
      ExitToApp: ip
    }), s = vc(), a = fr(), u = Eu(!1), c = Eu(["all"]), f = Eu(!1), m = Eu(!1), w = Z6({
      selectedAlarms: [],
      alarms: n.alarms
    });
    K6(n, () => {
      c.value = ["all"], w.alarms = n.alarms, w.selectedAlarms = [], u.value = !1;
    });
    const g = (T) => {
      w.selectedAlarms.includes(T) ? Ne.exports.remove(w.selectedAlarms, (B) => B == T) : w.selectedAlarms.push(T);
    }, y = async (T) => {
      w.selectedAlarms.length ? (await Uk(w.selectedAlarms, T), a.getSituation(n.situationId), w.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, b = () => w.selectedAlarms.length === n.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : w.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), V = async () => {
      b() && (await zw(
        n.situationId,
        w.selectedAlarms
      ) ? a.getSituation(n.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, O = async (T) => {
      b() && (await zw(
        n.situationId,
        w.selectedAlarms
      ) ? await x(T, w.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, x = async (T, B) => {
      B.length ? await h1(T, B) ? a.getSituation(T) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, D = async (T) => {
      await x(n.situationId, T), m.value = !1;
    }, S = () => {
      w.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, A = (T) => {
      w.alarms = T;
    };
    return (T, B) => (Ra(), Vu(O_, null, [
      Tn("div", N6, [
        Tn("div", M6, [
          B6,
          Xt(Ft(ve), {
            class: "add-alarms-btn",
            onClick: B[0] || (B[0] = (F) => m.value = !0)
          }, {
            default: Ba(() => [
              Xt(Ft(J), {
                icon: Ft(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              R6
            ]),
            _: 1
          })
        ]),
        Tn("div", P6, [
          Tn("div", F6, [
            Xt(Gs, {
              list: n.alarms,
              onFilteredList: A,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Tn("div", U6, [
            Tn("div", W6, [
              Xt(Ft(Ni), {
                modelValue: u.value,
                "onUpdate:modelValue": B[1] || (B[1] = (F) => u.value = F),
                label: "selected"
              }, null, 8, ["modelValue"]),
              Xt(Ft(ve), {
                onClick: B[2] || (B[2] = () => y("clear"))
              }, {
                default: Ba(() => [
                  Xt(Ft(J), {
                    icon: Ft(Yu),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  H6
                ]),
                _: 1
              }),
              Xt(Ft(ve), {
                onClick: B[3] || (B[3] = () => y("ack"))
              }, {
                default: Ba(() => [
                  Xt(Ft(J), {
                    icon: Ft(Ns),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  z6
                ]),
                _: 1
              }),
              Xt(Ft(ve), { onClick: S }, {
                default: Ba(() => [
                  Xt(Ft(J), {
                    icon: Ft(ip),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  q6
                ]),
                _: 1
              }),
              Xt(Ft(ve), { onClick: V }, {
                default: Ba(() => [
                  Xt(Ft(J), {
                    icon: Ft(D_),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  G6
                ]),
                _: 1
              })
            ]),
            Tn("div", Y6, [
              w.alarms.length > 0 ? (Ra(), Vu("div", j6, [
                (Ra(!0), Vu(O_, null, x6(w.alarms, (F) => (Ra(), Vu("div", {
                  key: F.id
                }, [
                  Xt(LF, {
                    alarm: F,
                    selectAll: u.value,
                    "situation-id": n.situationId,
                    onAlarmSelected: g
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (Ra(), L6(Ys, { key: 1 }))
            ])
          ])
        ])
      ]),
      Xt(k0, {
        situationId: n.situationId,
        visible: f.value,
        onSituationSelected: O,
        onDrawerClosed: B[4] || (B[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      Xt($6, {
        visible: m.value,
        onAlarmsSelected: D,
        onDrawerAlarmsClosed: B[5] || (B[5] = () => m.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const Q6 = /* @__PURE__ */ Ve(X6, [["__scopeId", "data-v-76f75ba2"]]), eU = window.Vue.defineComponent, ar = window.Vue.createVNode, kn = window.Vue.unref, Ef = window.Vue.normalizeClass, Su = window.Vue.toDisplayString, Pa = window.Vue.openBlock, Fa = window.Vue.createElementBlock, N_ = window.Vue.createCommentVNode, tU = window.Vue.withCtx, Yn = window.Vue.createElementVNode, nU = window.Vue.Fragment, rU = window.Vue.pushScopeId, oU = window.Vue.popScopeId, iU = (e) => (rU("data-v-fafb3615"), e = e(), oU(), e), sU = { class: "section" }, aU = { class: "action-section" }, lU = { class: "btn-row" }, uU = { key: 0 }, cU = { key: 1 }, dU = {
  key: 0,
  class: "situation-detail"
}, fU = { class: "situation-info" }, pU = { class: "id" }, hU = ["innerHTML"], mU = /* @__PURE__ */ iU(() => /* @__PURE__ */ Yn("p", null, null, -1)), wU = { class: "boxes" }, vU = { class: "parameters" }, _U = { class: "section memo-boxes" }, gU = { key: 0 }, $U = window.Vue.computed, M_ = window.Vue.ref, yU = window.Vue.watch, bU = /* @__PURE__ */ eU({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const n = e, r = vc(), s = fr(), a = Tt.REJECTED, u = M_(n.situationInfo.status), c = M_(n.situationInfo);
    yU(n, () => {
      u.value = n.situationInfo.status || "", c.value = n.situationInfo;
    });
    const f = $U(
      () => {
        var w;
        return s1(i1(((w = c.value) == null ? void 0 : w.description) || ""));
      }
    ), m = async (w) => {
      var y;
      await p1(
        (y = n.situationInfo) == null ? void 0 : y.id,
        w.toLowerCase()
      ) ? (u.value = w, s.getSituation(n.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (w, g) => {
      var y, b, V, O, x, D, S, A, T, B, F, W;
      return Pa(), Fa(nU, null, [
        Yn("div", sU, [
          Yn("div", aU, [
            ar(s0, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": n.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Yn("div", lU, [
              ar(kn(ve), {
                class: Ef(["btn", { rejected: u.value == kn(a) }]),
                "data-test": "btn-reject",
                onClick: g[0] || (g[0] = (L) => m(kn(a)))
              }, {
                default: tU(() => [
                  ar(kn(J), {
                    icon: kn(Kg),
                    "aria-hidden": "true",
                    class: Ef(["icon reject", { rejected: u.value == kn(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == kn(a) ? (Pa(), Fa("span", uU, Su(kn(a)), 1)) : (Pa(), Fa("span", cU, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (Pa(), Fa("div", dU, [
            Yn("div", {
              class: Ef(["severity-line", [`${(b = (y = c.value) == null ? void 0 : y.severity) == null ? void 0 : b.toLowerCase()}-bg dark`]])
            }, null, 2),
            Yn("div", fU, [
              Yn("div", pU, [
                Yn("div", null, " Situation - " + Su((V = c.value) == null ? void 0 : V.id) + " - " + Su(c.value.alarms.length) + " alarm(s) affects " + Su(kn(Ne.exports.size)(kn(Ne.exports.groupBy)((O = c.value) == null ? void 0 : O.alarms, "nodeId"))) + " node(s) ", 1),
                ar(i0, {
                  severity: (x = c.value) == null ? void 0 : x.severity
                }, null, 8, ["severity"])
              ]),
              Yn("span", {
                innerHTML: kn(f),
                "data-test": "situation-description"
              }, null, 8, hU),
              mU,
              Yn("div", wU, [
                ar(lf, {
                  label: "First Event",
                  info: kn(kr)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                ar(lf, {
                  label: "Last Event",
                  info: kn(kr)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                ar(lf, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Yn("div", vU, [
              ar(O4, {
                alarms: (D = c.value) == null ? void 0 : D.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : N_("", !0),
          Yn("div", _U, [
            ar(Ku, {
              id: (S = c.value) == null ? void 0 : S.id,
              situationId: (A = c.value) == null ? void 0 : A.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (T = c.value) == null ? void 0 : T.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            ar(Ku, {
              id: (B = c.value) == null ? void 0 : B.id,
              situationId: (F = c.value) == null ? void 0 : F.id,
              label: "Journal Memo",
              type: "journal",
              memo: (W = c.value) == null ? void 0 : W.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (Pa(), Fa("div", gU, [
          ar(Q6, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : N_("", !0)
      ], 64);
    };
  }
});
const CU = /* @__PURE__ */ Ve(bU, [["__scopeId", "data-v-fafb3615"]]);
var VU = Object.defineProperty, EU = Object.defineProperties, SU = Object.getOwnPropertyDescriptors, B_ = Object.getOwnPropertySymbols, IU = Object.prototype.hasOwnProperty, kU = Object.prototype.propertyIsEnumerable, R_ = (e, n, r) => n in e ? VU(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, sp = (e, n) => {
  for (var r in n || (n = {}))
    IU.call(n, r) && R_(e, r, n[r]);
  if (B_)
    for (var r of B_(n))
      kU.call(n, r) && R_(e, r, n[r]);
  return e;
}, AU = (e, n) => EU(e, SU(n));
const T0 = window.Vue.defineComponent, Li = window.Vue.resolveComponent, Nu = window.Vue.openBlock, P_ = window.Vue.createBlock, Mu = window.Vue.mergeProps, Di = window.Vue.withCtx, x0 = window.Vue.createElementBlock, TU = window.Vue.Fragment, xU = window.Vue.renderList, LU = window.Vue.createTextVNode, DU = window.Vue.toDisplayString, OU = window.Vue.computed, F_ = window.Vue.toRef, Ua = window.Vue.createVNode, U_ = window.Vue.toHandlers, NU = window.Vue.renderSlot, MU = window.Vue.normalizeClass, BU = window.Vue.createElementVNode;
var L0 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const RU = T0({
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
        const n = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e];
        ul(n, this.$refs.list.$el);
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
    FeatherList: bp,
    FeatherListItem: ml
  }
});
function PU(e, n, r, s, a, u) {
  const c = Li("FeatherListItem"), f = Li("FeatherList");
  return Nu(), P_(f, Mu(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Di(() => [
      (Nu(!0), x0(TU, null, xU(e.options, (m, w) => (Nu(), P_(c, {
        key: m[e.textProp],
        "as-li": "",
        id: e.getId(w),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": e.isSelected(w),
        selected: e.isSelected(w),
        onClick: (g) => e.select(m)
      }, {
        default: Di(() => [
          LU(DU(m[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var FU = /* @__PURE__ */ L0(RU, [["render", PU], ["__scopeId", "data-v-eae820da"]]);
const UU = AU(sp(sp({}, lc), Hs), {
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
}), WU = {
  "update:modelValue": (e) => !0
}, HU = T0({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: WU,
  props: UU,
  setup(e, n) {
    zs(e), uc(e);
    const r = OU(() => Ce("feather-select-input")), { validate: s } = Us(r, F_(e, "modelValue"), e.label, e.schema, F_(e, "error"));
    return sp({
      inputId: r,
      validate: s
    }, Ws(n.attrs));
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
        const e = this.internalValue, n = this.options.filter((r) => r[this.textProp] === e[this.textProp]);
        if (n && n.length)
          return this.options.indexOf(n[0]);
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
        const n = String.fromCharCode(e.keyCode);
        this.charsSoFar += n, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      Bi(this.delayTimeout), this.delayTimeout = Mi(() => {
        const e = this.options.filter((n) => n[this.textProp] && n[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: ac,
    InputSubText: Fs,
    FeatherMenu: S1,
    List: FU,
    FeatherIcon: J
  }
});
function zU(e, n, r, s, a, u) {
  const c = Li("FeatherIcon"), f = Li("InputWrapper"), m = Li("List"), w = Li("FeatherMenu"), g = Li("InputSubText");
  return Nu(), x0("div", Mu(e.inherittedAttrs, { class: "feather-select-container" }), [
    Ua(w, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Di((y) => [
        Ua(f, Mu({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, y.attrs, U_(y.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Di(() => [
            NU(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Di(() => [
            Ua(c, {
              class: MU(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Di(() => [
            BU("input", Mu(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, U_(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Di(() => [
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
var qU = /* @__PURE__ */ L0(HU, [["render", zU], ["__scopeId", "data-v-ecb32d90"]]);
const GU = window.Vue.openBlock, YU = window.Vue.createElementBlock, D0 = window.Vue.createElementVNode;
var jU = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const KU = {}, ZU = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, JU = /* @__PURE__ */ D0("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), XU = /* @__PURE__ */ D0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), QU = [
  JU,
  XU
];
function e7(e, n) {
  return GU(), YU("svg", ZU, QU);
}
var t7 = /* @__PURE__ */ jU(KU, [["render", e7]]);
const Bu = window.Vue.openBlock, ap = window.Vue.createElementBlock, O0 = window.Vue.createElementVNode, n7 = window.Vue.defineComponent, Ei = window.Vue.ref, r7 = window.Vue.provide, W_ = window.Vue.computed, o7 = window.Vue.onUnmounted, H_ = window.Vue.toRef, i7 = window.Vue.resolveComponent, s7 = window.Vue.Fragment, a7 = window.Vue.createBlock, l7 = window.Vue.Teleport, z_ = window.Vue.createVNode, u7 = window.Vue.Transition, c7 = window.Vue.withCtx, d7 = window.Vue.normalizeClass, f7 = window.Vue.normalizeStyle, p7 = window.Vue.toDisplayString, h7 = window.Vue.createCommentVNode, m7 = window.Vue.renderSlot, Sf = window.Vue.nextTick;
var N0 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const w7 = {}, v7 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, _7 = /* @__PURE__ */ O0("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), g7 = [
  _7
];
function $7(e, n) {
  return Bu(), ap("svg", v7, g7);
}
var y7 = /* @__PURE__ */ N0(w7, [["render", $7]]), At = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(At || {}), Qr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Qr || {});
const b7 = (e, n, r, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= n.height + s && c.push(At.top), a >= n.height + s && c.push(At.bottom);
  const f = [];
  u >= n.width + s && f.push(At.right), e.left >= n.width + s && f.push(At.left);
  let m = [...f, ...c];
  return (r === At.top || r === At.bottom) && (m = [...c, ...f]), m.indexOf(r) > -1 ? r : m.length ? m[0] : r;
}, C7 = (e, n, r, s, a = 28) => {
  if (e === At.left || e === At.right)
    return Qr.center;
  const u = n.left + n.width / 2, c = window.innerWidth - n.right, f = [], m = u, w = c + n.width / 2, g = r.width - a, y = r.width / 2;
  return m >= y && w >= y && f.push(Qr.center), w >= g && f.push(Qr.left), m >= g && f.push(Qr.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, V7 = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => At.top
  },
  pointerAlignment: {
    type: String,
    default: () => Qr.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, E7 = n7({
  props: V7,
  setup(e) {
    const n = Ei(!1), r = Ei(!1), s = Ce("feather-tooltip-trigger"), a = Ce("feather-tooltip"), u = "data-feather-tooltip";
    r7("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      Bi(c), n.value || (c = Mi(x, e.enterDelay));
    }, m = () => {
      Bi(c), c = Mi(D, e.exitDelay);
    }, w = (Te) => {
      Te.keyCode === ce.ESCAPE && (Te.preventDefault(), D(!0));
    }, g = W_(() => ({
      [u]: s,
      "aria-describedby": a
    })), y = {
      mouseenter: f,
      mouseleave: m,
      focus: f,
      blur: m,
      keydown: w
    }, b = Ei(document), V = E1(b, () => D(!0));
    o7(() => D(!0));
    const O = () => document.getElementById(a), x = () => {
      r.value = !1, n.value = !0, Sf(() => {
        const Te = O();
        he(Te), n.value = !1, Sf(() => {
          r.value = !0, n.value = !0, V.value = !0;
        });
      });
    }, D = (Te = !1) => {
      W.value = "", F.value = "", L.value = "", X.value = "", n.value = !1, Te && (r.value = !1), V.value = !1;
    }, S = H_(e, "placement"), A = H_(e, "pointerAlignment"), T = 8, B = 24, F = Ei(""), W = Ei(""), L = Ei(""), X = Ei(""), Me = W_(() => X.value ? "p-" + X.value : !1), he = (Te) => {
      const Qe = document.querySelector(`[${u}=${s}]`);
      if (!Qe) {
        console.log("trigger not found");
        return;
      }
      Sf(() => {
        const et = Qe.getBoundingClientRect(), Pe = Te.getBoundingClientRect(), de = b7(et, Pe, S.value, T), Fe = C7(de, et, Pe, A.value, B);
        L.value = Fe.toString(), X.value = de.toString();
        let Ge = 0, Be = 0;
        if ((de === At.left || de === At.right) && (Ge = et.top + et.height / 2 - Pe.height / 2, de === At.left && (Be = et.left - Pe.width - T), de === At.right && (Be = et.right)), de === At.top || de === At.bottom) {
          Ge = et.top - Pe.height - T, de === At.bottom && (Ge = et.bottom);
          const rn = et.left + et.width / 2;
          switch (Fe) {
            case Qr.center:
              Be = rn - Pe.width / 2;
              break;
            case Qr.left:
              Be = rn - B;
              break;
            case Qr.right:
              Be = rn - Pe.width + B;
              break;
          }
        }
        F.value = Ge.toString() + "px", W.value = Be.toString() + "px";
      });
    };
    return {
      attrs: g,
      listeners: y,
      show: n,
      animate: r,
      alignmentClass: L,
      placementClass: Me,
      top: F,
      left: W,
      tooltipID: a
    };
  },
  components: {
    Pointer: y7
  }
}), S7 = ["id"];
function I7(e, n, r, s, a, u) {
  const c = i7("Pointer");
  return Bu(), ap(s7, null, [
    (Bu(), a7(l7, { to: "body" }, [
      z_(u7, { css: e.animate }, {
        default: c7(() => [
          e.show ? (Bu(), ap("div", {
            key: 0,
            class: d7(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: f7({ left: e.left, top: e.top })
          }, [
            O0("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, p7(e.title), 9, S7),
            z_(c, { class: "tooltip-pointer" })
          ], 6)) : h7("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    m7(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var q_ = /* @__PURE__ */ N0(E7, [["render", I7], ["__scopeId", "data-v-3da6b22e"]]);
const k7 = window.Vue.defineComponent, If = window.Vue.normalizeStyle, kf = window.Vue.createElementVNode, Wa = window.Vue.unref, G_ = window.Vue.toHandlers, Y_ = window.Vue.mergeProps, j_ = window.Vue.withCtx, K_ = window.Vue.createVNode, A7 = window.Vue.renderList, T7 = window.Vue.Fragment, Ha = window.Vue.openBlock, za = window.Vue.createElementBlock, Z_ = window.Vue.normalizeClass, J_ = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const x7 = { class: "row" }, L7 = /* @__PURE__ */ k7({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const n = e, r = new Date().getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * n.proportion : 0, a = (u) => u ? (Number(u) - Number(n.minStart)) * n.proportion : 0;
    return (u, c) => (Ha(), za("div", x7, [
      kf("div", {
        class: "line-gray",
        style: If({
          width: a(n.events[0].createTime) + "px"
        })
      }, null, 4),
      K_(Wa(q_), {
        title: Wa(kr)(e.alarm.firstEventTime)
      }, {
        default: j_(({ attrs: f, on: m }) => [
          kf("div", Y_({ class: "circle" }, f, G_(m), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Ha(!0), za(T7, null, A7(n.events, (f, m) => (Ha(), za("div", {
        class: "event-trim",
        key: f.id
      }, [
        n.events[m + 1] ? (Ha(), za("div", {
          key: 0,
          class: Z_(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: If({
            width: s(f.createTime, n.events[m + 1].createTime) + "px"
          })
        }, null, 6)) : J_("", !0),
        K_(Wa(q_), {
          title: Wa(kr)(e.alarm.firstEventTime)
        }, {
          default: j_(({ attrs: w, on: g }) => [
            n.events[m + 1] ? (Ha(), za("div", Y_({ key: 0 }, w, G_(g), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : J_("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      kf("div", {
        class: Z_(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: If({
          width: s(e.events[e.events.length - 1].createTime, Wa(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const D7 = /* @__PURE__ */ Ve(L7, [["__scopeId", "data-v-6c43a557"]]), O7 = window.Vue.openBlock, N7 = window.Vue.createElementBlock, M0 = window.Vue.createElementVNode;
var M7 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const B7 = {}, R7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, P7 = /* @__PURE__ */ M0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), F7 = /* @__PURE__ */ M0("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), U7 = [
  P7,
  F7
];
function W7(e, n) {
  return O7(), N7("svg", R7, U7);
}
var H7 = /* @__PURE__ */ M7(B7, [["render", W7]]);
const z7 = window.Vue.defineComponent, lp = window.Vue.createElementVNode, q7 = window.Vue.renderList, X_ = window.Vue.Fragment, Af = window.Vue.openBlock, Tf = window.Vue.createElementBlock, G7 = window.Vue.normalizeClass, Y7 = window.Vue.unref, Q_ = window.Vue.toDisplayString, j7 = window.Vue.pushScopeId, K7 = window.Vue.popScopeId, Z7 = (e) => (j7("data-v-2e087f7b"), e = e(), K7(), e), J7 = /* @__PURE__ */ Z7(() => /* @__PURE__ */ lp("strong", null, "Events:", -1)), X7 = /* @__PURE__ */ z7({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const n = e;
    return (r, s) => (Af(), Tf(X_, null, [
      J7,
      (Af(!0), Tf(X_, null, q7(n.events, (a) => (Af(), Tf("div", {
        class: "event-description",
        key: a.id
      }, [
        lp("div", {
          class: G7(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        lp("div", null, Q_(Y7(kr)(a.createTime)) + " - " + Q_(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const Q7 = /* @__PURE__ */ Ve(X7, [["__scopeId", "data-v-2e087f7b"]]), e9 = window.Vue.defineComponent, t9 = window.Vue.normalizeClass, An = window.Vue.createElementVNode, _s = window.Vue.toDisplayString, pn = window.Vue.unref, gs = window.Vue.createVNode, B0 = window.Vue.createTextVNode, n9 = window.Vue.renderList, eg = window.Vue.Fragment, Jr = window.Vue.openBlock, Si = window.Vue.createElementBlock, tg = window.Vue.createBlock, Iu = window.Vue.createCommentVNode, r9 = window.Vue.normalizeStyle, o9 = window.Vue.pushScopeId, i9 = window.Vue.popScopeId, s9 = (e) => (o9("data-v-57b5ddda"), e = e(), i9(), e), a9 = { class: "section detail" }, l9 = { class: "id" }, u9 = {
  key: 0,
  class: "section"
}, c9 = /* @__PURE__ */ s9(() => /* @__PURE__ */ An("div", { class: "id" }, "Alarms", -1)), d9 = { class: "action-btns" }, f9 = { class: "zoom" }, p9 = /* @__PURE__ */ B0(" Zoom "), h9 = { class: "times" }, m9 = {
  key: 0,
  class: "timeline-container"
}, w9 = { class: "alarm-id" }, v9 = {
  key: 0,
  class: "panel"
}, Do = window.Vue.ref, _9 = window.Vue.watch, g9 = /* @__PURE__ */ e9({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var B, F;
    const n = e, r = fr(), s = Do(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Do(a[0]), c = Do(n.width), f = Do(n.width), m = Do(new Date().getTime()), w = () => {
      var W, L;
      if (!n.situation.events) {
        const X = (L = (W = n.situation) == null ? void 0 : W.alarms) == null ? void 0 : L.map((Me) => Me.id);
        r.getEvents(n.situation.id, X);
      }
    };
    w();
    const g = () => (m.value = new Date().getTime(), c.value / (Number(m.value) - Number(b.value))), y = Do(n.situation.alarms), b = Do(
      ((F = Ne.exports.minBy((B = n.situation) == null ? void 0 : B.alarms, "firstEventTime")) == null ? void 0 : F.firstEventTime) || new Date().getTime()
    ), V = Do(g());
    _9(n, () => {
      var W, L;
      b.value = ((L = Ne.exports.minBy((W = n.situation) == null ? void 0 : W.alarms, "firstEventTime")) == null ? void 0 : L.firstEventTime) || new Date().getTime(), w(), c.value = f.value, V.value = g(), y.value = n.situation.alarms, u.value = a[0];
    });
    const O = (W) => {
      if ((W == null ? void 0 : W.id) === 1 && (y.value = n.situation.alarms), (W == null ? void 0 : W.id) === 2) {
        const L = Ne.exports.groupBy(y.value, "severity"), X = [
          ...L.CRITICAL || [],
          ...L.MAJOR || [],
          ...L.MINOR || [],
          ...L.WARNING || [],
          ...L.NORMAL || [],
          ...L.CLEARED || [],
          ...L.INDETERMINATE || []
        ];
        y.value = X.filter((Me) => Me);
      }
      if ((W == null ? void 0 : W.id) === 3) {
        const L = Ne.exports.reverse(
          Ne.exports.sortBy(
            n.situation.alarms,
            (X) => Number(X.lastEventTime) - Number(X.firstEventTime)
          )
        );
        y.value = L;
      }
    }, x = () => {
      c.value += 100, V.value = g();
    }, D = () => {
      c.value -= 100, V.value = g();
    }, S = () => {
      c.value = f.value, V.value = g();
    }, A = (W) => {
      s.value = W;
    }, T = () => {
      s.value = 0;
    };
    return (W, L) => {
      var X, Me;
      return Jr(), Si(eg, null, [
        An("div", a9, [
          An("div", {
            class: t9(["severity-line", [`${(Me = (X = n.situation) == null ? void 0 : X.severity) == null ? void 0 : Me.toLowerCase()}-bg dark`]])
          }, null, 2),
          An("div", null, [
            An("div", l9, "Situation " + _s(n.situation.id), 1),
            An("div", null, " Duration: " + _s(pn(oc)(m.value, new Date(b.value))), 1)
          ])
        ]),
        y.value && y.value.length > 0 ? (Jr(), Si("div", u9, [
          c9,
          An("div", d9, [
            gs(pn(qU), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                L[0] || (L[0] = (he) => u.value = he),
                O
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            An("div", f9, [
              p9,
              An("div", null, [
                gs(pn(J), {
                  icon: pn(t7),
                  class: "zoom-icon",
                  onClick: x
                }, null, 8, ["icon"]),
                gs(pn(J), {
                  icon: pn(U1),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                gs(pn(J), {
                  icon: pn(H7),
                  class: "zoom-icon",
                  onClick: D
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Jr(), Si("div", {
            key: 0,
            class: "alarms",
            style: r9({
              width: f.value + 50 + "px"
            })
          }, [
            An("div", h9, [
              An("div", null, _s(pn(kr)(b.value)), 1),
              An("div", null, _s(pn(kr)(m.value)), 1)
            ]),
            e.situation.events ? (Jr(), Si("div", m9, [
              (Jr(!0), Si(eg, null, n9(y.value, (he) => (Jr(), Si("div", {
                class: "timeline",
                key: he.id
              }, [
                An("div", w9, [
                  B0(_s(he.nodeLabel) + " - " + _s(he.id) + " ", 1),
                  s.value === he.id ? (Jr(), tg(pn(J), {
                    key: 0,
                    icon: pn(hl),
                    class: "zoom-icon expand",
                    onClick: T
                  }, null, 8, ["icon"])) : (Jr(), tg(pn(J), {
                    key: 1,
                    icon: pn(v1),
                    class: "zoom-icon expand",
                    onClick: () => A(he.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                gs(D7, {
                  alarm: he,
                  proportion: V.value,
                  "min-start": b.value,
                  events: n.situation.events[he.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === he.id ? (Jr(), Si("div", v9, [
                  gs(Q7, {
                    events: n.situation.events[he.id]
                  }, null, 8, ["events"])
                ])) : Iu("", !0)
              ]))), 128))
            ])) : Iu("", !0)
          ], 4)) : Iu("", !0)
        ])) : Iu("", !0)
      ], 64);
    };
  }
});
const $9 = /* @__PURE__ */ Ve(g9, [["__scopeId", "data-v-57b5ddda"]]), y9 = window.Vue.defineComponent, mn = window.Vue.createElementVNode, lr = window.Vue.unref, zt = window.Vue.createTextVNode, $s = window.Vue.withCtx, nt = window.Vue.openBlock, b9 = window.Vue.createBlock, ku = window.Vue.createCommentVNode, Oo = window.Vue.createVNode, st = window.Vue.createElementBlock, C9 = window.Vue.resolveComponent, Ii = window.Vue.toDisplayString, ng = window.Vue.renderList, rg = window.Vue.Fragment, V9 = window.Vue.pushScopeId, E9 = window.Vue.popScopeId, Ks = (e) => (V9("data-v-8418d0e3"), e = e(), E9(), e), S9 = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, I9 = { class: "header" }, k9 = /* @__PURE__ */ Ks(() => /* @__PURE__ */ mn("h3", null, "AI Suggestions", -1)), A9 = { class: "header-actions" }, T9 = /* @__PURE__ */ zt(" Re-evaluate "), x9 = /* @__PURE__ */ zt(" Refresh "), L9 = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, D9 = /* @__PURE__ */ Ks(() => /* @__PURE__ */ mn("span", null, "Loading\u2026", -1)), O9 = {
  key: 1,
  class: "state-row",
  "data-test": "ai-reanalyzing"
}, N9 = /* @__PURE__ */ Ks(() => /* @__PURE__ */ mn("span", null, "Requesting a fresh analysis\u2026", -1)), M9 = {
  key: 2,
  class: "state-row",
  "data-test": "ai-absent"
}, B9 = {
  key: 0,
  "data-test": "ai-absent-disabled"
}, R9 = /* @__PURE__ */ zt(" The LLM integration is currently disabled. Enable it on the "), P9 = /* @__PURE__ */ zt("configuration page"), F9 = /* @__PURE__ */ zt(" to start generating suggestions for new situations. "), U9 = {
  key: 1,
  "data-test": "ai-absent-no-key"
}, W9 = /* @__PURE__ */ zt(" No API key is configured. Add one on the "), H9 = /* @__PURE__ */ zt("configuration page"), z9 = /* @__PURE__ */ zt(" to enable AI suggestions. "), q9 = {
  key: 2,
  "data-test": "ai-absent-not-yet-run"
}, G9 = /* @__PURE__ */ zt(" No analysis has run for this situation yet. New situations are analyzed automatically \u2014 click "), Y9 = /* @__PURE__ */ Ks(() => /* @__PURE__ */ mn("strong", null, "Re-evaluate", -1)), j9 = /* @__PURE__ */ zt(" above to trigger one now. "), K9 = [
  G9,
  Y9,
  j9
], Z9 = {
  key: 3,
  class: "reanalyze-error",
  "data-test": "ai-reanalyze-error"
}, J9 = {
  key: 3,
  class: "state-row",
  "data-test": "ai-pending"
}, X9 = {
  key: 4,
  class: "state-row failed",
  "data-test": "ai-failed"
}, Q9 = { class: "failed-msg" }, eW = /* @__PURE__ */ zt(" The last LLM request failed: "), tW = /* @__PURE__ */ zt(" Retry "), nW = {
  key: 5,
  class: "state-row",
  "data-test": "ai-error"
}, rW = /* @__PURE__ */ zt(" Could not load suggestions. Please retry. "), oW = /* @__PURE__ */ zt("Retry"), iW = {
  key: 6,
  "data-test": "ai-ready"
}, sW = {
  key: 0,
  class: "meta"
}, aW = /* @__PURE__ */ zt(" Generated by "), lW = { class: "section" }, uW = /* @__PURE__ */ Ks(() => /* @__PURE__ */ mn("h4", null, "Probable root causes", -1)), cW = {
  key: 0,
  "data-test": "ai-root-causes"
}, dW = {
  key: 1,
  class: "empty"
}, fW = { class: "section" }, pW = /* @__PURE__ */ Ks(() => /* @__PURE__ */ mn("h4", null, "Possible resolutions", -1)), hW = {
  key: 0,
  "data-test": "ai-resolutions"
}, mW = {
  key: 1,
  class: "empty"
}, xf = window.Vue.computed, wW = window.Vue.onBeforeUnmount, vW = window.Vue.onMounted, Lf = window.Vue.ref, _W = /* @__PURE__ */ y9({
  __name: "AISuggestionsTab",
  props: {
    situationId: null
  },
  setup(e) {
    const n = e, r = Ri(), s = Lf("loading"), a = Lf(null), u = Lf(null), c = 5e3, f = 5 * 60 * 1e3;
    let m = null, w = 0;
    const g = () => {
      m !== null && (clearInterval(m), m = null);
    }, y = () => {
      s.value === "pending" && m === null && (w = Date.now(), m = setInterval(async () => {
        if (Date.now() - w > f) {
          g();
          return;
        }
        await b(), s.value !== "pending" && g();
      }, c));
    }, b = async () => {
      const A = await f1(n.situationId);
      if (A === !1) {
        s.value = "error";
        return;
      }
      if (A === null) {
        s.value = "absent", a.value = null;
        return;
      }
      a.value = A, s.value = A.status;
    }, V = async () => {
      s.value = "loading", g(), await b(), y();
    }, O = async () => {
      u.value = null, s.value = "reanalyzing", g();
      const A = await L2(n.situationId);
      if (A === !1) {
        s.value = "absent", u.value = "Could not start a new analysis. Make sure LLM is enabled on the configuration page and an API key is saved.", await r.getLLMConfig();
        return;
      }
      a.value = A, s.value = A.status, y();
    };
    vW(async () => {
      r.llmConfig === null && await r.getLLMConfig(), await b(), y();
    }), wW(() => g());
    const x = xf(() => {
      var A;
      return (A = a.value) != null && A.requestedAt ? new Date(a.value.requestedAt).toLocaleString() : "";
    }), D = xf(() => {
      const A = r.llmConfig;
      return !A || !A.enabled ? "disabled" : A.apiKeyPresent ? "not-yet-run" : "no-key";
    }), S = xf(
      () => {
        var A, T;
        return ((A = r.llmConfig) == null ? void 0 : A.enabled) === !0 && ((T = r.llmConfig) == null ? void 0 : T.apiKeyPresent) === !0;
      }
    );
    return (A, T) => {
      var F;
      const B = C9("router-link");
      return nt(), st("div", S9, [
        mn("div", I9, [
          k9,
          mn("div", A9, [
            lr(S) ? (nt(), b9(lr(ve), {
              key: 0,
              primary: "",
              "data-test": "ai-reanalyze",
              disabled: s.value === "reanalyzing" || s.value === "pending",
              onClick: O
            }, {
              default: $s(() => [
                T9
              ]),
              _: 1
            }, 8, ["disabled"])) : ku("", !0),
            Oo(lr(ve), {
              secondary: "",
              "data-test": "ai-refresh",
              onClick: V
            }, {
              default: $s(() => [
                x9
              ]),
              _: 1
            })
          ])
        ]),
        s.value === "loading" ? (nt(), st("div", L9, [
          Oo(lr(xs)),
          D9
        ])) : s.value === "reanalyzing" ? (nt(), st("div", O9, [
          Oo(lr(xs)),
          N9
        ])) : s.value === "absent" ? (nt(), st("div", M9, [
          lr(D) === "disabled" ? (nt(), st("span", B9, [
            R9,
            Oo(B, { to: "/settings" }, {
              default: $s(() => [
                P9
              ]),
              _: 1
            }),
            F9
          ])) : lr(D) === "no-key" ? (nt(), st("span", U9, [
            W9,
            Oo(B, { to: "/settings" }, {
              default: $s(() => [
                H9
              ]),
              _: 1
            }),
            z9
          ])) : (nt(), st("span", q9, K9)),
          u.value ? (nt(), st("div", Z9, Ii(u.value), 1)) : ku("", !0)
        ])) : s.value === "pending" ? (nt(), st("div", J9, [
          Oo(lr(xs)),
          mn("span", null, " Analyzing alarms with the LLM\u2026 requested at " + Ii(lr(x)) + ". ", 1)
        ])) : s.value === "failed" ? (nt(), st("div", X9, [
          mn("div", Q9, [
            eW,
            mn("code", null, Ii(((F = a.value) == null ? void 0 : F.error) || "unknown error"), 1)
          ]),
          Oo(lr(ve), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: V
          }, {
            default: $s(() => [
              tW
            ]),
            _: 1
          })
        ])) : s.value === "error" ? (nt(), st("div", nW, [
          rW,
          Oo(lr(ve), {
            secondary: "",
            onClick: V
          }, {
            default: $s(() => [
              oW
            ]),
            _: 1
          })
        ])) : s.value === "ready" && a.value ? (nt(), st("div", iW, [
          a.value.completedAt ? (nt(), st("div", sW, [
            aW,
            mn("strong", null, Ii(a.value.model), 1),
            zt(" at " + Ii(new Date(a.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : ku("", !0),
          mn("div", lW, [
            uW,
            a.value.rootCauses.length ? (nt(), st("ol", cW, [
              (nt(!0), st(rg, null, ng(a.value.rootCauses, (W, L) => (nt(), st("li", {
                key: `cause-${L}`
              }, Ii(W), 1))), 128))
            ])) : (nt(), st("div", dW, "No root causes returned."))
          ]),
          mn("div", fW, [
            pW,
            a.value.resolutions.length ? (nt(), st("ol", hW, [
              (nt(!0), st(rg, null, ng(a.value.resolutions, (W, L) => (nt(), st("li", {
                key: `res-${L}`
              }, Ii(W), 1))), 128))
            ])) : (nt(), st("div", mW, "No resolutions returned."))
          ])
        ])) : ku("", !0)
      ]);
    };
  }
});
const gW = /* @__PURE__ */ Ve(_W, [["__scopeId", "data-v-8418d0e3"]]), $W = window.Vue.openBlock, yW = window.Vue.createElementBlock, bW = window.Vue.createElementVNode;
var CW = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const VW = {}, EW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, SW = /* @__PURE__ */ bW("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), IW = [
  SW
];
function kW(e, n) {
  return $W(), yW("svg", EW, IW);
}
var Ls = /* @__PURE__ */ CW(VW, [["render", kW]]);
const R0 = window.Vue.defineComponent, Df = window.Vue.ref, AW = window.Vue.toRef, Of = window.Vue.inject, og = window.Vue.watch, TW = window.Vue.nextTick, ig = window.Vue.openBlock, sg = window.Vue.createElementBlock, Nf = window.Vue.createElementVNode, xW = window.Vue.normalizeClass, ag = window.Vue.renderSlot, lg = window.Vue.createCommentVNode, Mf = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var LW = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const DW = {
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
}, OW = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, NW = R0({
  emits: OW,
  props: DW,
  setup(e, n) {
    const r = Df(), s = Df(!1), a = Df(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = AW(e, "modelValue"), f = Of("queueSnackbar", !1), m = Of("unqueueSnackbar", !1), w = Of("nextSnackbar", () => {
    }), g = (x, D) => {
      let S, A, T = D;
      const B = () => {
        !S || (Bi(S), S = 0, T -= Date.now() - A);
      }, F = () => {
        S || (A = Date.now(), S = Mi(x, T));
      };
      return F(), { pause: B, resume: F };
    }, y = () => {
      s.value = !1, n.emit("closed"), w && w();
    }, b = (x) => {
      x.keyCode === ce.ESCAPE && (a.value = !1);
    }, V = () => {
      r.value.pause();
    }, O = () => {
      a.value && r.value.resume();
    };
    return og(c, (x) => {
      x ? TW(() => {
        f === !1 ? a.value = x : f(u, a);
      }) : m === !1 ? a.value = x : m(u);
    }, { immediate: !0 }), og(a, (x) => {
      x ? (s.value = !0, r.value = g(() => {
        a.value = !1;
      }, e.timeout)) : (n.emit("update:modelValue", !1), V());
    }), {
      hideTimeout: r,
      contentShow: s,
      internalValue: a,
      id: u,
      incomingValue: c,
      closed: y,
      keyPressed: b,
      stopTimer: V,
      resumeTimer: O
    };
  }
}), MW = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, BW = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, RW = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, PW = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function FW(e, n, r, s, a, u) {
  return e.modelValue || e.contentShow ? (ig(), sg("div", MW, [
    Nf("div", {
      class: xW(["feather-snackbar", {
        "fade-in": e.internalValue,
        "fade-out": e.contentShow && !e.internalValue,
        center: e.center,
        error: e.error
      }]),
      "data-ref-id": "feather-snackbar",
      onAnimationend: n[0] || (n[0] = (...c) => e.closed && e.closed(...c)),
      onKeydown: n[1] || (n[1] = (...c) => e.keyPressed && e.keyPressed(...c)),
      onMouseover: n[2] || (n[2] = (...c) => e.stopTimer && e.stopTimer(...c)),
      onMouseleave: n[3] || (n[3] = (...c) => e.resumeTimer && e.resumeTimer(...c)),
      onFocusin: n[4] || (n[4] = (...c) => e.stopTimer && e.stopTimer(...c)),
      onFocusout: n[5] || (n[5] = (...c) => e.resumeTimer && e.resumeTimer(...c))
    }, [
      Nf("div", BW, [
        e.contentShow ? (ig(), sg("div", RW, [
          ag(e.$slots, "default", {}, void 0, !0)
        ])) : lg("", !0)
      ]),
      Nf("div", PW, [
        ag(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : lg("", !0);
}
var $c = /* @__PURE__ */ LW(NW, [["render", FW], ["__scopeId", "data-v-5cf64a62"]]);
const UW = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
R0({
  props: UW,
  setup() {
    let e, n = [];
    const r = () => {
      e && (e.val.value = !0);
    }, s = (c, f) => {
      const m = { id: c, val: f };
      e ? n.push(m) : (e = m, r());
    }, a = (c) => {
      (e == null ? void 0 : e.id) === c ? e.val.value = !1 : n = n.filter((f) => f.id != c);
    }, u = () => {
      n.length ? (e = n.shift(), r()) : e = void 0;
    };
    return Mf("queueSnackbar", s), Mf("unqueueSnackbar", a), Mf("nextSnackbar", u), {
      curr: e,
      queue: n,
      showSnackbar: r,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const WW = window.Vue.defineComponent, Xe = window.Vue.unref, Ut = window.Vue.createVNode, cl = window.Vue.createElementVNode, hn = window.Vue.withCtx, ki = window.Vue.openBlock, Bf = window.Vue.createBlock, ug = window.Vue.createCommentVNode, wl = window.Vue.createTextVNode, Au = window.Vue.createElementBlock, cg = window.Vue.toDisplayString, HW = window.Vue.pushScopeId, zW = window.Vue.popScopeId, Np = (e) => (HW("data-v-a30cdd9d"), e = e(), zW(), e), qW = { id: "cont" }, GW = { class: "btns-navigation" }, YW = /* @__PURE__ */ Np(() => /* @__PURE__ */ cl("span", null, "Situation List", -1)), jW = /* @__PURE__ */ Np(() => /* @__PURE__ */ cl("span", null, "Show Previous Situation ", -1)), KW = /* @__PURE__ */ Np(() => /* @__PURE__ */ cl("span", null, "Show Next Situation", -1)), ZW = { key: 1 }, JW = {
  key: 0,
  class: "detail"
}, XW = /* @__PURE__ */ wl("Details"), QW = /* @__PURE__ */ wl("Metrics"), eH = /* @__PURE__ */ wl("AI Suggestions"), tH = {
  key: 1,
  class: "noSituation"
}, nH = /* @__PURE__ */ wl("dismiss"), Ai = window.Vue.ref, dg = window.Vue.watch, rH = window.Vue.onMounted, oH = window.VueRouter.useRoute, iH = /* @__PURE__ */ WW({
  __name: "SituationDetail",
  setup(e) {
    const n = Ko(), r = oH(), s = parseInt(r.params.id), a = Ai(s), u = fr(), c = vc(), f = Ai(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const m = Ai(), w = Ai(), g = Ai(!0), y = Ai(
      u.filteredSituations.findIndex((D) => D === a.value)
    ), b = Ai(!1);
    dg(
      () => u.situationDetail,
      () => {
        m.value = u.situationDetail, g.value = !1, u.getUnassignedAlarms();
      }
    ), rH(() => {
      var S;
      const D = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      w.value = D - 90;
    });
    const V = () => {
      n.push({
        name: "situations"
      });
    }, O = (D) => {
      const S = y.value, A = u.filteredSituations[S + D];
      n.push({
        name: "situationDetail",
        params: {
          id: A
        }
      });
    };
    dg(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), y.value = u.filteredSituations.findIndex((D) => D == a.value);
    }), c.$subscribe((D, S) => {
      b.value = S.showError;
    });
    const x = (D) => {
      f.value = D || 0;
    };
    return (D, S) => (ki(), Au("div", qW, [
      cl("div", GW, [
        Ut(Xe(ve), {
          primary: "",
          onClick: S[0] || (S[0] = () => V())
        }, {
          default: hn(() => [
            Ut(Xe(J), {
              icon: Xe(Ls),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            YW
          ]),
          _: 1
        }),
        cl("div", null, [
          Ut(Xe(ve), {
            disabled: !Xe(u).filteredSituations[y.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => O(-1))
          }, {
            default: hn(() => [
              Ut(Xe(J), {
                icon: Xe(Ls),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              jW
            ]),
            _: 1
          }, 8, ["disabled"]),
          Ut(Xe(ve), {
            disabled: !Xe(u).filteredSituations[y.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => O(1))
          }, {
            default: hn(() => [
              KW,
              Ut(Xe(J), {
                icon: Xe(Ls),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      g.value ? (ki(), Bf(Xe(xs), {
        key: 0,
        class: "spinner"
      })) : (ki(), Au("div", ZW, [
        m.value ? (ki(), Au("div", JW, [
          Ut(Xe(o0), { "onUpdate:modelValue": x }, {
            tabs: hn(() => [
              Ut(Xe(rl), null, {
                default: hn(() => [
                  XW
                ]),
                _: 1
              }),
              Ut(Xe(rl), null, {
                default: hn(() => [
                  QW
                ]),
                _: 1
              }),
              Ut(Xe(rl), { "data-test": "ai-suggestions-tab" }, {
                default: hn(() => [
                  eH
                ]),
                _: 1
              })
            ]),
            default: hn(() => [
              Ut(Xe(ol), { class: "panel" }, {
                default: hn(() => [
                  Ut(CU, { "situation-info": m.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              Ut(Xe(ol), { class: "panel" }, {
                default: hn(() => [
                  w.value && f.value == 1 ? (ki(), Bf($9, {
                    key: 0,
                    situation: m.value,
                    width: w.value
                  }, null, 8, ["situation", "width"])) : ug("", !0)
                ]),
                _: 1
              }),
              Ut(Xe(ol), { class: "panel" }, {
                default: hn(() => [
                  f.value == 2 ? (ki(), Bf(gW, {
                    key: m.value.id,
                    "situation-id": m.value.id
                  }, null, 8, ["situation-id"])) : ug("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (ki(), Au("div", tH, " Error. The situation " + cg(Xe(s)) + " does not exist. ", 1))
      ])),
      Ut(Xe($c), {
        modelValue: b.value,
        "onUpdate:modelValue": S[4] || (S[4] = (A) => b.value = A),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: hn(() => [
          Ut(Xe(ve), {
            onClick: S[3] || (S[3] = (A) => b.value = !1),
            text: ""
          }, {
            default: hn(() => [
              nH
            ]),
            _: 1
          })
        ]),
        default: hn(() => [
          wl(cg(Xe(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const sH = /* @__PURE__ */ Ve(iH, [["__scopeId", "data-v-a30cdd9d"]]), aH = window.Vue.defineComponent, It = window.Vue.unref, qn = window.Vue.createVNode, tn = window.Vue.createElementVNode, ys = window.Vue.withCtx, bs = window.Vue.openBlock, qa = window.Vue.createElementBlock, lH = window.Vue.createCommentVNode, uH = window.Vue.toDisplayString, Mp = window.Vue.createTextVNode, cH = window.Vue.normalizeClass, dH = window.Vue.renderList, fH = window.Vue.Fragment, pH = window.Vue.createBlock, hH = window.Vue.pushScopeId, mH = window.Vue.popScopeId, vl = (e) => (hH("data-v-00de2cfc"), e = e(), mH(), e), wH = { class: "container" }, vH = /* @__PURE__ */ vl(() => /* @__PURE__ */ tn("span", null, "Situation List", -1)), _H = /* @__PURE__ */ vl(() => /* @__PURE__ */ tn("h2", null, "New Situation", -1)), gH = { class: "form" }, $H = { class: "fields" }, yH = {
  key: 0,
  class: "errorList"
}, bH = { class: "footer" }, CH = /* @__PURE__ */ vl(() => /* @__PURE__ */ tn("span", null, "Clear", -1)), VH = /* @__PURE__ */ vl(() => /* @__PURE__ */ tn("span", null, "Add Situation", -1)), EH = { class: "alarm-column" }, SH = { class: "header-alarms" }, IH = /* @__PURE__ */ vl(() => /* @__PURE__ */ tn("h3", null, "Add Unassociated Alarms", -1)), kH = /* @__PURE__ */ Mp(" Total Alarms Added: "), AH = { class: "total" }, TH = { class: "list" }, xH = { class: "filters" }, LH = {
  key: 0,
  class: "alarms"
}, DH = /* @__PURE__ */ Mp(" Error on creating new situation :( "), OH = /* @__PURE__ */ Mp("dismiss"), No = window.Vue.ref, NH = window.Vue.watch, MH = /* @__PURE__ */ aH({
  __name: "AddSituation",
  setup(e) {
    const n = Ko(), r = fr(), s = No(), a = No(""), u = No(), c = No(""), f = No([]), m = No(!1), w = No(), g = No(r.unassignedAlarms);
    g.value.length || r.getUnassignedAlarms(), NH(
      () => r.unassignedAlarms,
      () => {
        g.value = r.unassignedAlarms;
      }
    );
    const y = () => {
      n.push({
        name: "situations"
      });
    }, b = (S) => {
      m.value = !1, Ne.exports.includes(f.value, S) ? Ne.exports.remove(f.value, (A) => A === S) : f.value.push(S);
    }, V = () => {
      const S = "This field should not be empty";
      let A = !0;
      return s.value || (a.value = S, A = !1), u.value || (c.value = S, A = !1), f.value.length < 2 && (m.value = !0, A = !1), A;
    }, O = async () => {
      if (V()) {
        const S = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: s.value
        };
        await O2(S) ? n.push({
          name: "situations"
        }) : w.value = !0;
      }
    }, x = () => {
      s.value = "", u.value = "", f.value = [], g.value = r.unassignedAlarms;
    }, D = (S) => {
      g.value = S;
    };
    return (S, A) => (bs(), qa("div", wH, [
      qn(It(ve), {
        primary: "",
        onClick: A[0] || (A[0] = () => y()),
        class: "back-btn"
      }, {
        default: ys(() => [
          qn(It(J), {
            icon: It(Ls),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          vH
        ]),
        _: 1
      }),
      _H,
      tn("div", gH, [
        tn("div", $H, [
          qn(It(ju), {
            modelValue: s.value,
            "onUpdate:modelValue": A[1] || (A[1] = (T) => s.value = T),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          qn(It(ju), {
            modelValue: u.value,
            "onUpdate:modelValue": A[2] || (A[2] = (T) => u.value = T),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          m.value ? (bs(), qa("div", yH, " You must add at least 2 alarms. ")) : lH("", !0),
          tn("div", bH, [
            qn(It(ve), {
              class: "btn",
              onClick: x
            }, {
              default: ys(() => [
                qn(It(J), {
                  icon: It(Rs),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                CH
              ]),
              _: 1
            }),
            qn(It(ve), {
              class: "btn-add",
              onClick: O
            }, {
              default: ys(() => [
                qn(It(J), {
                  icon: It(wc),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                VH
              ]),
              _: 1
            })
          ])
        ]),
        tn("div", EH, [
          tn("div", SH, [
            IH,
            tn("div", null, [
              tn("div", {
                class: cH(["totalAlarms", { errorList: m.value }])
              }, [
                kH,
                tn("span", AH, uH(It(f).length), 1)
              ], 2)
            ])
          ]),
          tn("div", TH, [
            tn("div", xH, [
              qn(Gs, {
                list: It(r).unassignedAlarms,
                onFilteredList: D,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            g.value.length ? (bs(), qa("div", LH, [
              (bs(!0), qa(fH, null, dH(g.value, (T) => (bs(), qa("div", {
                key: T.id,
                class: "alarm-card"
              }, [
                qn(Op, {
                  selected: It(Ne.exports.includes)(It(f), T.id),
                  alarm: T,
                  onSelectedAlarm: b
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (bs(), pH(Ys, { key: 1 }))
          ])
        ])
      ]),
      qn(It($c), {
        modelValue: w.value,
        "onUpdate:modelValue": A[4] || (A[4] = (T) => w.value = T),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: ys(() => [
          qn(It(ve), {
            onClick: A[3] || (A[3] = (T) => w.value = !1),
            text: ""
          }, {
            default: ys(() => [
              OH
            ]),
            _: 1
          })
        ]),
        default: ys(() => [
          DH
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const BH = /* @__PURE__ */ Ve(MH, [["__scopeId", "data-v-00de2cfc"]]), RH = window.Vue.defineComponent, PH = window.Vue.createElementVNode, FH = window.Vue.createTextVNode, UH = window.Vue.unref, WH = window.Vue.withCtx, HH = window.Vue.createVNode, zH = window.Vue.Fragment, qH = window.Vue.openBlock, GH = window.Vue.createElementBlock, YH = window.Vue.pushScopeId, jH = window.Vue.popScopeId, KH = (e) => (YH("data-v-bcb7dcc6"), e = e(), jH(), e), ZH = /* @__PURE__ */ KH(() => /* @__PURE__ */ PH("div", { class: "main" }, "Something bad is happening...", -1)), JH = /* @__PURE__ */ FH(" Reload "), XH = /* @__PURE__ */ RH({
  __name: "ErrorPage",
  setup(e) {
    const n = Ko(), r = () => {
      n.push({ name: "situations" });
    };
    return (s, a) => (qH(), GH(zH, null, [
      ZH,
      HH(UH(ve), {
        primary: "",
        onClick: r
      }, {
        default: WH(() => [
          JH
        ]),
        _: 1
      })
    ], 64));
  }
});
const QH = /* @__PURE__ */ Ve(XH, [["__scopeId", "data-v-bcb7dcc6"]]), ez = window.Vue.defineComponent, Qt = window.Vue.unref, ur = window.Vue.createVNode, Uo = window.Vue.createElementVNode, Ga = window.Vue.withCtx, Ti = window.Vue.openBlock, fg = window.Vue.createBlock, tz = window.Vue.renderList, nz = window.Vue.Fragment, Ya = window.Vue.createElementBlock, rz = window.Vue.toDisplayString, P0 = window.Vue.createTextVNode, oz = window.Vue.pushScopeId, iz = window.Vue.popScopeId, Bp = (e) => (oz("data-v-fbf68b2e"), e = e(), iz(), e), sz = { class: "container" }, az = { class: "nav-btns" }, lz = /* @__PURE__ */ Bp(() => /* @__PURE__ */ Uo("span", null, "Situation List", -1)), uz = /* @__PURE__ */ Bp(() => /* @__PURE__ */ Uo("h2", null, "List Unassociated Alarms", -1)), cz = { class: "content" }, dz = { class: "filters" }, fz = { class: "list" }, pz = { class: "action-btns" }, hz = /* @__PURE__ */ Bp(() => /* @__PURE__ */ Uo("span", null, "Move", -1)), mz = { key: 1 }, wz = {
  key: 0,
  class: "alarms"
}, vz = /* @__PURE__ */ P0("dismiss"), Mo = window.Vue.ref, _z = window.Vue.watch, gz = window.Vue.markRaw, $z = /* @__PURE__ */ ez({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const n = gz({
      ArrowBack: Ls,
      ExitToApp: ip
    }), r = Ko(), s = fr();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = Mo([]), u = Mo([]), c = Mo(!1), f = Mo(!1), m = Mo(""), w = Mo(!1), g = Mo(!1), y = Mo(!0);
    _z(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, y.value = !1;
      }
    );
    const b = (A) => {
      Ne.exports.includes(u.value, A) ? Ne.exports.remove(u.value, (T) => T === A) : u.value.push(A);
    }, V = () => {
      c.value ? u.value = a.value.map((A) => A.id) : u.value = [];
    }, O = async (A) => {
      await h1(A, u.value) ? s.getUnassignedAlarms() : (w.value = !0, g.value = !0, m.value = "Error on moving the alarms :("), f.value = !1;
    }, x = () => {
      r.push({
        name: "situations"
      });
    }, D = () => {
      u.value.length ? f.value = !0 : (w.value = !0, g.value = !1, m.value = "You need to choose at least one alarm!");
    }, S = (A) => {
      a.value = A;
    };
    return (A, T) => (Ti(), Ya("div", sz, [
      Uo("div", az, [
        ur(Qt(ve), {
          primary: "",
          onClick: T[0] || (T[0] = () => x())
        }, {
          default: Ga(() => [
            ur(Qt(J), {
              icon: Qt(n).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            lz
          ]),
          _: 1
        }),
        ur(q1)
      ]),
      uz,
      Uo("div", cz, [
        Uo("div", dz, [
          ur(Gs, {
            list: Qt(s).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        Uo("div", fz, [
          Uo("div", pz, [
            ur(Qt(Ni), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                T[1] || (T[1] = (B) => c.value = B),
                V
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            ur(Qt(ve), { onClick: D }, {
              default: Ga(() => [
                ur(Qt(J), {
                  icon: Qt(n).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                hz
              ]),
              _: 1
            })
          ]),
          y.value ? (Ti(), fg(Qt(xs), {
            key: 0,
            class: "spinner"
          })) : (Ti(), Ya("div", mz, [
            Qt(a).length ? (Ti(), Ya("div", wz, [
              (Ti(!0), Ya(nz, null, tz(Qt(a), (B) => (Ti(), Ya("div", {
                key: B.id,
                class: "card"
              }, [
                ur(Op, {
                  selected: Qt(Ne.exports.includes)(Qt(u), B.id),
                  alarm: B,
                  onSelectedAlarm: b
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Ti(), fg(Ys, { key: 1 }))
          ]))
        ])
      ]),
      ur(k0, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: O,
        onDrawerClosed: T[2] || (T[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      ur(Qt($c), {
        modelValue: w.value,
        "onUpdate:modelValue": T[4] || (T[4] = (B) => w.value = B),
        right: "",
        error: g.value,
        timeout: 6e3
      }, {
        button: Ga(() => [
          ur(Qt(ve), {
            onClick: T[3] || (T[3] = (B) => w.value = !1),
            text: ""
          }, {
            default: Ga(() => [
              vz
            ]),
            _: 1
          })
        ]),
        default: Ga(() => [
          P0(rz(m.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const yz = /* @__PURE__ */ Ve($z, [["__scopeId", "data-v-fbf68b2e"]]), bz = window.Vue.defineComponent, Rf = window.Vue.unref, Cz = window.Vue.createVNode, Vz = window.Vue.createElementVNode, Ez = window.Vue.withCtx, Sz = window.Vue.openBlock, Iz = window.Vue.createBlock, kz = window.Vue.pushScopeId, Az = window.Vue.popScopeId, Tz = (e) => (kz("data-v-17251e76"), e = e(), Az(), e), xz = /* @__PURE__ */ Tz(() => /* @__PURE__ */ Vz("span", null, "Situation List", -1)), Lz = window.Vue.markRaw, Dz = /* @__PURE__ */ bz({
  __name: "SituationListBtn",
  setup(e) {
    const n = Ko(), r = Lz({
      ArrowBack: Ls
    }), s = () => {
      n.push({
        name: "situations"
      });
    };
    return (a, u) => (Sz(), Iz(Rf(ve), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: Ez(() => [
        Cz(Rf(J), {
          icon: Rf(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        xz
      ]),
      _: 1
    }));
  }
});
const Oz = /* @__PURE__ */ Ve(Dz, [["__scopeId", "data-v-17251e76"]]);
var Nz = Object.defineProperty, Mz = Object.defineProperties, Bz = Object.getOwnPropertyDescriptors, pg = Object.getOwnPropertySymbols, Rz = Object.prototype.hasOwnProperty, Pz = Object.prototype.propertyIsEnumerable, hg = (e, n, r) => n in e ? Nz(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, ks = (e, n) => {
  for (var r in n || (n = {}))
    Rz.call(n, r) && hg(e, r, n[r]);
  if (pg)
    for (var r of pg(n))
      Pz.call(n, r) && hg(e, r, n[r]);
  return e;
}, Fz = (e, n) => Mz(e, Bz(n));
const Uz = window.Vue.defineComponent, mg = window.Vue.toRef, Wz = window.Vue.computed, Hz = window.Vue.ref, wg = window.Vue.resolveComponent, vg = window.Vue.openBlock, _g = window.Vue.createElementBlock, gg = window.Vue.mergeProps, $g = window.Vue.createVNode, zz = window.Vue.normalizeClass, Tu = window.Vue.withCtx, yg = window.Vue.renderSlot, qz = window.Vue.createElementVNode, Gz = window.Vue.toHandlers, Yz = window.Vue.toDisplayString, jz = window.Vue.createCommentVNode, Kz = ks(ks({
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
}, lc), Hs), Zz = {
  "update:modelValue": (e) => !0
};
var Jz = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const Xz = Uz({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: Zz,
  props: Kz,
  setup(e, n) {
    zs(e), uc(e);
    const r = mg(e, "id"), s = Wz(() => r.value ? r.value : Ce("feather-input-label")), a = Hz(), { validate: u } = Us(s, a, e.label, e.schema, mg(e, "error"));
    return ks({
      inputId: s,
      internalValue: a,
      validate: u
    }, Ws(n.attrs));
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
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), Fz(ks(ks({}, e), this.listeners), {
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
    InputSubText: Fs,
    InputWrapper: ac
  }
}), Qz = ["maxlength"], eq = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function tq(e, n, r, s, a, u) {
  const c = wg("InputWrapper"), f = wg("InputSubText");
  return vg(), _g("div", gg(e.inherittedAttrs, { class: "feather-input-container" }), [
    $g(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: zz(["feather-input-content", e.contentCls])
    }, {
      pre: Tu(() => [
        yg(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: Tu(() => [
        yg(e.$slots, "post", {}, void 0, !0)
      ]),
      default: Tu(() => [
        qz("input", gg(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, Gz(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, Qz)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    $g(f, { id: e.descriptionId }, {
      right: Tu(() => [
        e.maxlength ? (vg(), _g("div", eq, Yz(e.charCount), 1)) : jz("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Bo = /* @__PURE__ */ Jz(Xz, [["render", tq], ["__scopeId", "data-v-bf37b0d6"]]);
const nq = window.Vue.openBlock, rq = window.Vue.createElementBlock, Rp = window.Vue.createElementVNode;
var oq = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const iq = {}, sq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, aq = /* @__PURE__ */ Rp("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), lq = /* @__PURE__ */ Rp("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), uq = /* @__PURE__ */ Rp("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), cq = [
  aq,
  lq,
  uq
];
function dq(e, n) {
  return nq(), rq("svg", sq, cq);
}
var fq = /* @__PURE__ */ oq(iq, [["render", dq]]);
const pq = window.Vue.openBlock, hq = window.Vue.createElementBlock, F0 = window.Vue.createElementVNode;
var mq = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const wq = {}, vq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _q = /* @__PURE__ */ F0("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), gq = /* @__PURE__ */ F0("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), $q = [
  _q,
  gq
];
function yq(e, n) {
  return pq(), hq("svg", vq, $q);
}
var bq = /* @__PURE__ */ mq(wq, [["render", yq]]);
const U0 = [
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
], W0 = (e) => {
  const n = (e || "").toLowerCase();
  if (!!n)
    return U0.find((r) => r.matches.some((s) => n.includes(s)));
}, Cq = () => U0, Vq = (e) => {
  var n, r;
  return (r = (n = W0(e)) == null ? void 0 : n.models) != null ? r : [];
}, Eq = window.Vue.defineComponent, pe = window.Vue.createVNode, M = window.Vue.createElementVNode, oe = window.Vue.createTextVNode, z = window.Vue.unref, ut = window.Vue.withCtx, je = window.Vue.openBlock, at = window.Vue.createElementBlock, Wt = window.Vue.createCommentVNode, Ke = window.Vue.toDisplayString, ja = window.Vue.Fragment, Pf = window.Vue.createBlock, bg = window.Vue.renderList, Sq = window.Vue.normalizeClass, Iq = window.Vue.pushScopeId, kq = window.Vue.popScopeId, Ae = (e) => (Iq("data-v-44b4fabb"), e = e(), kq(), e), Aq = { class: "container" }, Tq = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("h3", { "data-test": "page-title" }, "ALEC Configuration", -1)), xq = /* @__PURE__ */ oe("Correlation Engine"), Lq = /* @__PURE__ */ oe("LLM Root Cause Analysis"), Dq = { class: "section" }, Oq = { class: "title-row" }, Nq = { class: "title" }, Mq = /* @__PURE__ */ oe(" Choose the correlation engine that ALEC will use (see "), Bq = ["href"], Rq = /* @__PURE__ */ oe(" for more information): "), Pq = ["aria-expanded"], Fq = {
  key: 0,
  class: "help-popover",
  "data-test": "engine-help-popover"
}, Uq = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("ul", null, [
  /* @__PURE__ */ M("li", null, [
    /* @__PURE__ */ M("strong", null, "Clustering"),
    /* @__PURE__ */ oe(" \u2014 the default engine. It runs the DBSCAN algorithm over recent alarms and groups them into a situation when they are close in both time and network topology. Tune how aggressively it groups with the Correlation variables below. ")
  ]),
  /* @__PURE__ */ M("li", null, [
    /* @__PURE__ */ M("strong", null, "Hellinger distance"),
    /* @__PURE__ */ oe(" \u2014 an optional, more refined way for the Clustering engine to measure how far apart two alarms are. Rather than a plain time/topology distance, it compares the statistical distribution of each alarm's surroundings, which helps separate unrelated alarms that merely happen to occur close together. Enable it with the checkbox; it adds two extra tuning variables (Hellinger w and bias). Only the Clustering engine supports it. ")
  ]),
  /* @__PURE__ */ M("li", null, [
    /* @__PURE__ */ M("strong", null, "LLM Based"),
    /* @__PURE__ */ oe(" \u2014 a future engine that would let a large language model drive correlation itself (coming soon). This is separate from "),
    /* @__PURE__ */ M("em", null, "LLM Root Cause Analysis"),
    /* @__PURE__ */ oe(" on the other tab, which explains the situations the Clustering engine already builds. ")
  ])
], -1)), Wq = [
  Uq
], Hq = /* @__PURE__ */ oe("Clustering"), zq = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("div", { class: "hellinger" }, [
  /* @__PURE__ */ M("strong", null, "Hellinger distance")
], -1)), qq = /* @__PURE__ */ oe(" LLM Based "), Gq = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), Yq = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, jq = { class: "title-row" }, Kq = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("div", { class: "title" }, "Correlation variables", -1)), Zq = ["aria-expanded"], Jq = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, Xq = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("strong", null, "Alpha (\u03B1)", -1)), Qq = /* @__PURE__ */ oe(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), eG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("strong", null, "Beta (\u03B2)", -1)), tG = /* @__PURE__ */ oe(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), nG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("code", null, "[0, 1]", -1)), rG = /* @__PURE__ */ oe(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), oG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("strong", null, "Epsilon (\u03B5)", -1)), iG = /* @__PURE__ */ oe(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), sG = { "data-test": "help-hellinger-w" }, aG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("strong", null, "Hellinger w", -1)), lG = /* @__PURE__ */ oe(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), uG = { "data-test": "help-hellinger-bias" }, cG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("strong", null, "Hellinger bias", -1)), dG = /* @__PURE__ */ oe(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), fG = { class: "variables" }, pG = {
  class: "section",
  "data-test": "llm-section"
}, hG = { class: "title-row" }, mG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("div", { class: "title" }, "LLM Root Cause Analysis", -1)), wG = ["aria-expanded"], vG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("div", { class: "llm-help" }, " ALEC can automatically or manually request root cause analysis and a suggested resolution strategy from a large language model (LLM). It works with any OpenAI-compatible, API-enabled LLM \u2014 commercial or locally hosted \u2014 and does not endorse any particular model. The endpoint, model and API key are stored on the OpenNMS server and apply to all users of this plugin. ", -1)), _G = {
  key: 0,
  class: "help-popover",
  "data-test": "llm-key-help-popover"
}, gG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("p", { class: "help-intro" }, [
  /* @__PURE__ */ oe(" ALEC sends each new situation to the model you configure and shows the suggested root causes and resolutions on the situation's "),
  /* @__PURE__ */ M("em", null, "AI Suggestions"),
  /* @__PURE__ */ oe(" tab. ")
], -1)), $G = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("ul", null, [
  /* @__PURE__ */ M("li", null, [
    /* @__PURE__ */ oe(" Works with any service that exposes an OpenAI-compatible "),
    /* @__PURE__ */ M("code", null, "/chat/completions"),
    /* @__PURE__ */ oe(" API \u2014 a hosted provider (OpenAI, Anthropic, OpenRouter, \u2026) or a local server (LM Studio, Ollama, \u2026). The Endpoint and Model "),
    /* @__PURE__ */ M("em", null, "\u25BE"),
    /* @__PURE__ */ oe(" menus list common choices. ")
  ]),
  /* @__PURE__ */ M("li", null, [
    /* @__PURE__ */ oe(" The model must support "),
    /* @__PURE__ */ M("em", null, "tool/function calling"),
    /* @__PURE__ */ oe(". Use "),
    /* @__PURE__ */ M("em", null, "Validate key"),
    /* @__PURE__ */ oe(" to confirm the endpoint, model and key work before saving. ")
  ]),
  /* @__PURE__ */ M("li", null, " The API key is stored on the OpenNMS server and never shown again. Hosted providers bill per token; local models are free. ")
], -1)), yG = [
  gG,
  $G
], bG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("strong", null, "LLM Enabled Root Cause Analysis", -1)), CG = /* @__PURE__ */ oe(" Automatically AI Evaluate new situations "), VG = {
  key: 1,
  class: "caption",
  "data-test": "llm-no-key-hint"
}, EG = { class: "llm-field-block" }, SG = { class: "llm-field-header" }, IG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("span", { class: "llm-field-label" }, "Endpoint (OpenAI-compatible base URL)", -1)), kG = { class: "llm-field-actions" }, AG = ["disabled"], TG = /* @__PURE__ */ oe(" Reset to default "), xG = ["disabled"], LG = /* @__PURE__ */ oe(" Set as default "), DG = { class: "llm-combo" }, OG = ["aria-expanded"], NG = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-base-url-menu"
}, MG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("li", { class: "llm-combo-hint" }, "Common providers \u2014 or type your own", -1)), BG = ["onClick"], RG = { class: "llm-combo-item-main" }, PG = { class: "llm-combo-item-sub" }, FG = { class: "llm-field-block" }, UG = { class: "llm-field-header" }, WG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("span", { class: "llm-field-label" }, "Model", -1)), HG = { class: "llm-field-actions" }, zG = ["disabled"], qG = /* @__PURE__ */ oe(" Reset to default "), GG = ["disabled"], YG = /* @__PURE__ */ oe(" Set as default "), jG = { class: "llm-combo" }, KG = ["aria-expanded"], ZG = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-model-menu"
}, JG = { class: "llm-combo-hint" }, XG = ["onClick"], QG = { class: "llm-combo-item-main" }, eY = {
  key: 1,
  class: "llm-combo-hint"
}, tY = {
  class: "llm-prompt-block",
  "data-test": "llm-prompt-block"
}, nY = { class: "llm-prompt-header" }, rY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("span", { class: "llm-prompt-label" }, "System prompt", -1)), oY = ["disabled"], iY = /* @__PURE__ */ oe(" Reset to default "), sY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("div", { class: "llm-prompt-help" }, " Instructions sent to the model for every analysis. Customize it to add site-specific context (your topology, naming conventions, escalation policy, vendors in use). Leave it as the default, or clear it to fall back to the default. ", -1)), aY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("div", {
  class: "llm-key-match-hint",
  "data-test": "llm-key-match-hint"
}, [
  /* @__PURE__ */ oe(" Your API key must come from the same provider as the Endpoint above \u2014 an Anthropic key ("),
  /* @__PURE__ */ M("code", null, "sk-ant-\u2026"),
  /* @__PURE__ */ oe(") for "),
  /* @__PURE__ */ M("code", null, "api.anthropic.com"),
  /* @__PURE__ */ oe(" (the default), an OpenRouter key ("),
  /* @__PURE__ */ M("code", null, "sk-or-\u2026"),
  /* @__PURE__ */ oe(") for "),
  /* @__PURE__ */ M("code", null, "openrouter.ai"),
  /* @__PURE__ */ oe(", or an OpenAI key for "),
  /* @__PURE__ */ M("code", null, "api.openai.com"),
  /* @__PURE__ */ oe(". ")
], -1)), lY = { class: "llm-key-row" }, uY = /* @__PURE__ */ oe(" Clear Key "), cY = { class: "llm-validate-row" }, dY = {
  key: 0,
  class: "caption",
  "data-test": "llm-validate-hint"
}, fY = {
  key: 2,
  class: "llm-key-saved",
  "data-test": "llm-key-saved"
}, pY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("span", null, " API key on file. The stored key is never sent back to the browser \u2014 leave the field blank to keep it, or paste a new one to replace it. ", -1)), hY = {
  key: 3,
  class: "caption",
  "data-test": "llm-cleared-hint"
}, mY = {
  key: 4,
  class: "llm-usage",
  "data-test": "llm-usage"
}, wY = { class: "usage-summary" }, vY = { class: "usage-label" }, _Y = ["title"], gY = {
  key: 0,
  class: "usage-details",
  "data-test": "llm-usage-details"
}, $Y = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("dt", null, "Input", -1)), yY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("dt", null, "Output", -1)), bY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("dt", null, "Cache read", -1)), CY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("dt", null, "Cache create", -1)), VY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("dt", null, "Calls", -1)), EY = { class: "muted" }, SY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("dt", null, "Cache hit", -1)), IY = { class: "action-row" }, kY = /* @__PURE__ */ oe(" Close All Open Situations "), AY = /* @__PURE__ */ oe(" Re-Evaluate All Open Alarms "), TY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("span", null, "Save Changes", -1)), xY = /* @__PURE__ */ oe("dismiss"), Gn = window.Vue.computed, LY = window.Vue.markRaw, DY = window.Vue.onMounted, OY = window.Vue.onUnmounted, ke = window.Vue.ref, NY = /* @__PURE__ */ Eq({
  __name: "AccountSettings",
  setup(e) {
    var gn, hr, $n, Xn, Qn, Dr, Or, Nr, mr, wr, er, Yt, no, ro, oo, io, Qo, Mr, Br, Mt, tr, so, ao, lo, ei, vr, ti, uo, Wi;
    const n = (re) => re >= 1e6 ? (re / 1e6).toFixed(1) + "M" : re >= 1e3 ? (re / 1e3).toFixed(1) + "K" : String(re), r = LY({
      MarkComplete: Yu,
      Help: fq,
      Restore: bq,
      ExpandMore: hl
    }), s = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, a = Ri(), u = ke(((gn = a.engineInfo) == null ? void 0 : gn.engineName) || Tt.ENGINE_DBSCAN), c = ke(
      a.engineInfo ? a.engineInfo.distanceMeasureName === Tt.HELLINGER_OPTION : !0
    ), f = ke(($n = (hr = a.engineInfo) == null ? void 0 : hr.alpha) != null ? $n : s.alpha), m = ke((Qn = (Xn = a.engineInfo) == null ? void 0 : Xn.beta) != null ? Qn : s.beta), w = ke((Or = (Dr = a.engineInfo) == null ? void 0 : Dr.epsilon) != null ? Or : s.epsilon), g = ke(
      (mr = (Nr = a.engineInfo) == null ? void 0 : Nr.hellingerW) != null ? mr : s.hellingerW
    ), y = ke(
      (er = (wr = a.engineInfo) == null ? void 0 : wr.hellingerBias) != null ? er : s.hellingerBias
    ), b = Gn(() => u.value === Tt.ENGINE_DBSCAN), V = Gn(() => b.value && c.value), O = ke(a.llmConfig !== null), x = ke((no = (Yt = a.llmConfig) == null ? void 0 : Yt.enabled) != null ? no : !1), D = ke((oo = (ro = a.llmConfig) == null ? void 0 : ro.autoEvaluate) != null ? oo : !0), S = ke((Qo = (io = a.llmConfig) == null ? void 0 : io.baseUrl) != null ? Qo : ""), A = ke((Br = (Mr = a.llmConfig) == null ? void 0 : Mr.model) != null ? Br : ""), T = ke((tr = (Mt = a.llmConfig) == null ? void 0 : Mt.defaultBaseUrl) != null ? tr : ""), B = ke((ao = (so = a.llmConfig) == null ? void 0 : so.defaultModel) != null ? ao : ""), F = ke((ei = (lo = a.llmConfig) == null ? void 0 : lo.systemPrompt) != null ? ei : ""), W = ke((ti = (vr = a.llmConfig) == null ? void 0 : vr.defaultSystemPrompt) != null ? ti : ""), L = Gn(
      () => W.value.length > 0 && F.value.trim() !== W.value.trim()
    ), X = () => {
      F.value = W.value;
    }, Me = Gn(
      () => T.value.trim().length > 0 && S.value.trim() !== T.value.trim()
    ), he = Gn(
      () => B.value.trim().length > 0 && A.value.trim() !== B.value.trim()
    ), Te = Gn(
      () => S.value.trim().length > 0 && S.value.trim() !== T.value.trim()
    ), Qe = Gn(
      () => A.value.trim().length > 0 && A.value.trim() !== B.value.trim()
    ), et = () => {
      S.value = T.value;
    }, Pe = () => {
      A.value = B.value;
    }, de = () => {
      T.value = S.value.trim();
    }, Fe = () => {
      B.value = A.value.trim();
    }, Ge = Cq(), Be = ke(!1), rn = ke(!1), Tr = Gn(() => Vq(S.value)), $e = Gn(() => W0(S.value)), Zs = (re) => {
      S.value = re, Be.value = !1;
    }, Js = (re) => {
      A.value = re, rn.value = !1;
    }, Ui = (re) => {
      const Z = re.target;
      (!Z || !Z.closest(".llm-combo")) && (Be.value = !1, rn.value = !1);
    }, bt = ke(""), qt = ke((Wi = (uo = a.llmConfig) == null ? void 0 : uo.apiKeyPresent) != null ? Wi : !1), on = ke(!1), _n = ke(!1), sn = ke(null), Zo = Gn(
      () => bt.value.trim().length === 0 && (!qt.value || on.value)
    ), xe = async () => {
      sn.value = null, _n.value = !0;
      try {
        const re = {
          enabled: x.value,
          autoEvaluate: D.value,
          baseUrl: S.value.trim(),
          model: A.value.trim()
        }, Z = bt.value.trim();
        Z.length > 0 && (re.apiKey = Z), sn.value = await x2(re);
      } finally {
        _n.value = !1;
      }
    }, xr = Gn(
      () => (!qt.value || on.value) && bt.value.trim().length === 0
    ), Re = Gn(
      () => xr.value || S.value.trim().length === 0 || A.value.trim().length === 0
    ), Ot = () => {
      bt.value = "", on.value = !0, qt.value = !1, x.value = !1;
    }, be = ke(!1), Dn = ke(!1), Ct = ke(!1), Nt = ke(!1), Jo = ke(!1), On = ke(""), pt = ke(!1);
    DY(async () => {
      if (document.addEventListener("mousedown", Ui), a.llmConfig === null) {
        const re = await a.getLLMConfig();
        re && (O.value = !0, x.value = re.enabled, D.value = re.autoEvaluate, S.value = re.baseUrl || "", A.value = re.model || "", T.value = re.defaultBaseUrl || "", B.value = re.defaultModel || "", W.value = re.defaultSystemPrompt || "", F.value = re.systemPrompt || re.defaultSystemPrompt || "", qt.value = re.apiKeyPresent);
      }
      await a.getLLMUsage(30);
    }), OY(() => {
      document.removeEventListener("mousedown", Ui);
    });
    const pr = () => {
      f.value = s.alpha, m.value = s.beta, w.value = s.epsilon, g.value = s.hellingerW, y.value = s.hellingerBias;
    }, ht = (re, Z) => {
      On.value = re, Jo.value = Z, Nt.value = !0;
    }, Lr = () => {
      if (on.value)
        return {
          enabled: !1,
          autoEvaluate: D.value,
          baseUrl: S.value.trim(),
          model: A.value.trim(),
          defaultBaseUrl: T.value.trim(),
          defaultModel: B.value.trim(),
          systemPrompt: F.value,
          clearApiKey: !0
        };
      const re = bt.value.trim(), Z = {
        enabled: x.value,
        autoEvaluate: D.value,
        baseUrl: S.value.trim(),
        model: A.value.trim(),
        defaultBaseUrl: T.value.trim(),
        defaultModel: B.value.trim(),
        systemPrompt: F.value
      };
      return re.length > 0 && (Z.apiKey = re), Z;
    }, Gt = async () => {
      var ni, ri, co, oi, ii, Hi, zi, Rr, qi, Bt, si, Nn, Gi, ai, fo, po, Pr;
      const re = x.value && !on.value, Z = /\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])/i.test(
        S.value
      );
      if (re && !Z && !window.confirm(
        `LLM Root Cause Analysis is enabled.

ALEC will send each new situation to the configured LLM endpoint (${S.value.trim()}, model ${A.value.trim()}). This calls a third-party provider with your API key and may incur usage charges billed by that provider. You are responsible for any costs on the associated account.

Continue and save?`
      ))
        return;
      const Le = {
        alpha: Number(f.value),
        beta: Number(m.value),
        epsilon: Number(w.value)
      };
      c.value && (Le.hellingerW = Number(g.value), Le.hellingerBias = Number(y.value));
      const Q = await a.setEngineInfo(
        u.value,
        c.value,
        Le
      ), an = O.value ? await a.setLLMConfig(Lr()) : !0;
      O.value && an && (bt.value = "", on.value = !1, qt.value = (ri = (ni = a.llmConfig) == null ? void 0 : ni.apiKeyPresent) != null ? ri : !1, x.value = (oi = (co = a.llmConfig) == null ? void 0 : co.enabled) != null ? oi : !1, D.value = (Hi = (ii = a.llmConfig) == null ? void 0 : ii.autoEvaluate) != null ? Hi : !0, S.value = (Rr = (zi = a.llmConfig) == null ? void 0 : zi.baseUrl) != null ? Rr : "", A.value = (Bt = (qi = a.llmConfig) == null ? void 0 : qi.model) != null ? Bt : "", T.value = (Nn = (si = a.llmConfig) == null ? void 0 : si.defaultBaseUrl) != null ? Nn : "", B.value = (ai = (Gi = a.llmConfig) == null ? void 0 : Gi.defaultModel) != null ? ai : "", (fo = a.llmConfig) != null && fo.defaultSystemPrompt && (W.value = a.llmConfig.defaultSystemPrompt), F.value = (Pr = (po = a.llmConfig) == null ? void 0 : po.systemPrompt) != null ? Pr : F.value, a.getLLMUsage(30)), Q && an ? (a.getEngineInfo(), ht("The settings were saved!", !1)) : ht(
        Q && !an ? "Engine settings saved, but the LLM configuration was rejected \u2014 enabling the integration requires an endpoint URL, a model and an API key." : "Error on saving the settings",
        !0
      );
    }, Xo = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const re = await N2();
      ht(
        re ? "All open situations were closed." : "Failed to close situations.",
        !re
      );
    }, Jn = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const re = await M2();
      ht(
        re ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !re
      );
    };
    return (re, Z) => (je(), at(ja, null, [
      pe(Oz),
      M("div", Aq, [
        Tq,
        pe(z(o0), { "data-test": "config-tabs" }, {
          tabs: ut(() => [
            pe(z(rl), { "data-test": "tab-engine" }, {
              default: ut(() => [
                xq
              ]),
              _: 1
            }),
            pe(z(rl), { "data-test": "tab-llm" }, {
              default: ut(() => [
                Lq
              ]),
              _: 1
            })
          ]),
          default: ut(() => [
            pe(z(ol), { class: "config-panel" }, {
              default: ut(() => [
                M("div", Dq, [
                  M("div", Oq, [
                    M("div", Nq, [
                      Mq,
                      M("a", {
                        target: "_blank",
                        href: z(Tt).URL_DOCUMENTATION
                      }, "Correlation Engines documentation", 8, Bq),
                      Rq
                    ]),
                    M("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": Dn.value,
                      "aria-label": "About the correlation engines and Hellinger distance",
                      "data-test": "engine-help",
                      onClick: Z[0] || (Z[0] = (Le) => Dn.value = !Dn.value)
                    }, [
                      pe(z(J), {
                        icon: z(r).Help
                      }, null, 8, ["icon"])
                    ], 8, Pq)
                  ]),
                  Dn.value ? (je(), at("div", Fq, Wq)) : Wt("", !0),
                  pe(z(F1), {
                    vertical: "",
                    modelValue: u.value,
                    "onUpdate:modelValue": Z[2] || (Z[2] = (Le) => u.value = Le),
                    label: "",
                    hideLabel: ""
                  }, {
                    default: ut(() => [
                      pe(z(rp), {
                        class: "radio-item",
                        value: z(Tt).ENGINE_DBSCAN
                      }, {
                        default: ut(() => [
                          Hq
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      pe(z(Ni), {
                        modelValue: c.value,
                        "onUpdate:modelValue": Z[1] || (Z[1] = (Le) => c.value = Le),
                        disabled: !z(b),
                        class: "checkbox"
                      }, {
                        default: ut(() => [
                          zq
                        ]),
                        _: 1
                      }, 8, ["modelValue", "disabled"]),
                      pe(z(rp), {
                        class: "radio-item",
                        value: z(Tt).ENGINE_LLM,
                        disabled: "",
                        "data-test": "engine-llm"
                      }, {
                        default: ut(() => [
                          qq
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      Gq
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                z(b) ? (je(), at("div", Yq, [
                  M("div", jq, [
                    Kq,
                    M("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": be.value,
                      "aria-label": "Show help for correlation variables",
                      "data-test": "variables-help",
                      onClick: Z[3] || (Z[3] = (Le) => be.value = !be.value)
                    }, [
                      pe(z(J), {
                        icon: z(r).Help
                      }, null, 8, ["icon"])
                    ], 8, Zq),
                    M("button", {
                      type: "button",
                      class: "icon-btn reset-icon",
                      "aria-label": "Reset correlation variables to defaults",
                      "data-test": "variables-reset",
                      onClick: pr
                    }, [
                      pe(z(J), {
                        icon: z(r).Restore
                      }, null, 8, ["icon"])
                    ])
                  ]),
                  be.value ? (je(), at("div", Jq, [
                    M("ul", null, [
                      M("li", null, [
                        Xq,
                        Qq,
                        M("em", null, "Default: " + Ke(s.alpha), 1)
                      ]),
                      M("li", null, [
                        eG,
                        tG,
                        nG,
                        rG,
                        M("em", null, "Default: " + Ke(s.beta), 1)
                      ]),
                      M("li", null, [
                        oG,
                        iG,
                        M("em", null, "Default: " + Ke(s.epsilon), 1)
                      ]),
                      z(V) ? (je(), at(ja, { key: 0 }, [
                        M("li", sG, [
                          aG,
                          lG,
                          M("em", null, "Default: " + Ke(s.hellingerW), 1)
                        ]),
                        M("li", uG, [
                          cG,
                          dG,
                          M("em", null, "Default: " + Ke(s.hellingerBias), 1)
                        ])
                      ], 64)) : Wt("", !0)
                    ])
                  ])) : Wt("", !0),
                  M("div", fG, [
                    pe(z(Bo), {
                      modelValue: f.value,
                      "onUpdate:modelValue": Z[4] || (Z[4] = (Le) => f.value = Le),
                      type: "number",
                      label: "Alpha",
                      "data-test": "variable-alpha"
                    }, null, 8, ["modelValue"]),
                    pe(z(Bo), {
                      modelValue: m.value,
                      "onUpdate:modelValue": Z[5] || (Z[5] = (Le) => m.value = Le),
                      type: "number",
                      label: "Beta",
                      "data-test": "variable-beta"
                    }, null, 8, ["modelValue"]),
                    pe(z(Bo), {
                      modelValue: w.value,
                      "onUpdate:modelValue": Z[6] || (Z[6] = (Le) => w.value = Le),
                      type: "number",
                      label: "Epsilon",
                      "data-test": "variable-epsilon"
                    }, null, 8, ["modelValue"]),
                    z(V) ? (je(), Pf(z(Bo), {
                      key: 0,
                      modelValue: g.value,
                      "onUpdate:modelValue": Z[7] || (Z[7] = (Le) => g.value = Le),
                      type: "number",
                      label: "Hellinger w",
                      "data-test": "variable-hellinger-w"
                    }, null, 8, ["modelValue"])) : Wt("", !0),
                    z(V) ? (je(), Pf(z(Bo), {
                      key: 1,
                      modelValue: y.value,
                      "onUpdate:modelValue": Z[8] || (Z[8] = (Le) => y.value = Le),
                      type: "number",
                      label: "Hellinger bias",
                      "data-test": "variable-hellinger-bias"
                    }, null, 8, ["modelValue"])) : Wt("", !0)
                  ])
                ])) : Wt("", !0)
              ]),
              _: 1
            }),
            pe(z(ol), { class: "config-panel" }, {
              default: ut(() => {
                var Le;
                return [
                  M("div", pG, [
                    M("div", hG, [
                      mG,
                      M("button", {
                        type: "button",
                        class: "icon-btn help-icon",
                        "aria-expanded": Ct.value,
                        "aria-label": "How to get an API key",
                        "data-test": "llm-key-help",
                        onClick: Z[9] || (Z[9] = (Q) => Ct.value = !Ct.value)
                      }, [
                        pe(z(J), {
                          icon: z(r).Help
                        }, null, 8, ["icon"])
                      ], 8, wG)
                    ]),
                    vG,
                    Ct.value ? (je(), at("div", _G, yG)) : Wt("", !0),
                    pe(z(Ni), {
                      modelValue: x.value,
                      "onUpdate:modelValue": Z[10] || (Z[10] = (Q) => x.value = Q),
                      disabled: z(Re) && !x.value,
                      class: "checkbox",
                      "data-test": "llm-enabled"
                    }, {
                      default: ut(() => [
                        bG
                      ]),
                      _: 1
                    }, 8, ["modelValue", "disabled"]),
                    pe(z(Ni), {
                      modelValue: D.value,
                      "onUpdate:modelValue": Z[11] || (Z[11] = (Q) => D.value = Q),
                      disabled: !x.value,
                      class: "checkbox sub-checkbox",
                      "data-test": "llm-auto-evaluate"
                    }, {
                      default: ut(() => [
                        CG
                      ]),
                      _: 1
                    }, 8, ["modelValue", "disabled"]),
                    z(Re) ? (je(), at("div", VG, " Enter an endpoint, model and API key to enable. ")) : Wt("", !0),
                    M("div", EG, [
                      M("div", SG, [
                        IG,
                        M("div", kG, [
                          M("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !z(Me),
                            "data-test": "llm-base-url-reset",
                            onClick: et
                          }, [
                            pe(z(J), {
                              icon: z(r).Restore,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            TG
                          ], 8, AG),
                          M("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !z(Te),
                            "data-test": "llm-base-url-set-default",
                            onClick: de
                          }, [
                            pe(z(J), {
                              icon: z(r).MarkComplete,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            LG
                          ], 8, xG)
                        ])
                      ]),
                      M("div", DG, [
                        pe(z(Bo), {
                          modelValue: S.value,
                          "onUpdate:modelValue": Z[12] || (Z[12] = (Q) => S.value = Q),
                          label: "Endpoint (OpenAI-compatible base URL)",
                          hideLabel: "",
                          "data-test": "llm-base-url",
                          class: "llm-combo-input"
                        }, null, 8, ["modelValue"]),
                        M("button", {
                          type: "button",
                          class: "llm-combo-toggle",
                          "aria-expanded": Be.value,
                          "aria-label": "Show endpoint suggestions",
                          "data-test": "llm-base-url-suggest",
                          onClick: Z[13] || (Z[13] = (Q) => Be.value = !Be.value)
                        }, [
                          pe(z(J), {
                            icon: z(r).ExpandMore
                          }, null, 8, ["icon"])
                        ], 8, OG),
                        Be.value ? (je(), at("ul", NG, [
                          MG,
                          (je(!0), at(ja, null, bg(z(Ge), (Q) => (je(), at("li", {
                            key: Q.baseUrl,
                            class: "llm-combo-item",
                            onClick: (an) => Zs(Q.baseUrl)
                          }, [
                            M("span", RG, Ke(Q.name), 1),
                            M("span", PG, [
                              M("code", null, Ke(Q.baseUrl), 1),
                              oe(" \xB7 " + Ke(Q.keyHint), 1)
                            ])
                          ], 8, BG))), 128))
                        ])) : Wt("", !0)
                      ])
                    ]),
                    M("div", FG, [
                      M("div", UG, [
                        WG,
                        M("div", HG, [
                          M("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !z(he),
                            "data-test": "llm-model-reset",
                            onClick: Pe
                          }, [
                            pe(z(J), {
                              icon: z(r).Restore,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            qG
                          ], 8, zG),
                          M("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !z(Qe),
                            "data-test": "llm-model-set-default",
                            onClick: Fe
                          }, [
                            pe(z(J), {
                              icon: z(r).MarkComplete,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            YG
                          ], 8, GG)
                        ])
                      ]),
                      M("div", jG, [
                        pe(z(Bo), {
                          modelValue: A.value,
                          "onUpdate:modelValue": Z[14] || (Z[14] = (Q) => A.value = Q),
                          label: "Model",
                          hideLabel: "",
                          "data-test": "llm-model",
                          class: "llm-combo-input"
                        }, null, 8, ["modelValue"]),
                        M("button", {
                          type: "button",
                          class: "llm-combo-toggle",
                          "aria-expanded": rn.value,
                          "aria-label": "Show model suggestions",
                          "data-test": "llm-model-suggest",
                          onClick: Z[15] || (Z[15] = (Q) => rn.value = !rn.value)
                        }, [
                          pe(z(J), {
                            icon: z(r).ExpandMore
                          }, null, 8, ["icon"])
                        ], 8, KG),
                        rn.value ? (je(), at("ul", ZG, [
                          z(Tr).length ? (je(), at(ja, { key: 0 }, [
                            M("li", JG, " Suggested for " + Ke((Le = z($e)) == null ? void 0 : Le.name) + " \u2014 or type your own ", 1),
                            (je(!0), at(ja, null, bg(z(Tr), (Q) => (je(), at("li", {
                              key: Q.id,
                              class: "llm-combo-item",
                              onClick: (an) => Js(Q.id)
                            }, [
                              M("span", QG, [
                                M("code", null, Ke(Q.id), 1)
                              ])
                            ], 8, XG))), 128))
                          ], 64)) : (je(), at("li", eY, " No preset models for this endpoint \u2014 type your model id. For a local server (LM Studio, Ollama) copy it from the server's loaded-model list. "))
                        ])) : Wt("", !0)
                      ])
                    ]),
                    M("div", tY, [
                      M("div", nY, [
                        rY,
                        M("button", {
                          type: "button",
                          class: "llm-prompt-reset",
                          disabled: !z(L),
                          "data-test": "llm-prompt-reset",
                          onClick: X
                        }, [
                          pe(z(J), {
                            icon: z(r).Restore,
                            class: "reset-inline-icon"
                          }, null, 8, ["icon"]),
                          iY
                        ], 8, oY)
                      ]),
                      sY,
                      pe(z(ju), {
                        modelValue: F.value,
                        "onUpdate:modelValue": Z[16] || (Z[16] = (Q) => F.value = Q),
                        label: "System prompt",
                        hideLabel: "",
                        rows: "12",
                        "data-test": "llm-system-prompt",
                        class: "llm-prompt-textarea"
                      }, null, 8, ["modelValue"])
                    ]),
                    aY,
                    M("div", lY, [
                      pe(z(Bo), {
                        modelValue: bt.value,
                        "onUpdate:modelValue": Z[17] || (Z[17] = (Q) => bt.value = Q),
                        type: "password",
                        autocomplete: "new-password",
                        label: qt.value && !on.value ? "API key \u2014 saved (paste a new key to replace)" : "API key",
                        "data-test": "llm-api-key",
                        class: "llm-key-input"
                      }, null, 8, ["modelValue", "label"]),
                      qt.value && !on.value ? (je(), Pf(z(ve), {
                        key: 0,
                        secondary: "",
                        "data-test": "llm-clear-key",
                        onClick: Ot
                      }, {
                        default: ut(() => [
                          uY
                        ]),
                        _: 1
                      })) : Wt("", !0)
                    ]),
                    M("div", cY, [
                      pe(z(ve), {
                        secondary: "",
                        disabled: _n.value || z(Zo),
                        "data-test": "llm-validate-btn",
                        onClick: xe
                      }, {
                        default: ut(() => [
                          oe(Ke(_n.value ? "Validating\u2026" : "Validate key"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      z(Zo) ? (je(), at("span", dY, " Enter an API key to validate. ")) : sn.value ? (je(), at("span", {
                        key: 1,
                        class: Sq(["llm-validate-result", sn.value.ok ? "is-ok" : "is-error"]),
                        "data-test": "llm-validate-result"
                      }, [
                        pe(z(J), {
                          icon: sn.value.ok ? z(r).MarkComplete : z(r).Help,
                          class: "result-icon"
                        }, null, 8, ["icon"]),
                        oe(" " + Ke(sn.value.message), 1)
                      ], 2)) : Wt("", !0)
                    ]),
                    qt.value && !on.value ? (je(), at("div", fY, [
                      pe(z(J), {
                        icon: z(r).MarkComplete,
                        class: "saved-icon"
                      }, null, 8, ["icon"]),
                      pY
                    ])) : Wt("", !0),
                    on.value ? (je(), at("div", hY, " Stored API key will be removed on save. ")) : Wt("", !0),
                    z(a).llmUsage ? (je(), at("div", mY, [
                      M("div", wY, [
                        M("span", vY, "Last " + Ke(z(a).llmUsage.daysWindow) + " days:", 1),
                        M("span", {
                          class: "usage-tokens",
                          title: `${z(a).llmUsage.totalTokens.toLocaleString()} tokens`,
                          "data-test": "llm-usage-tokens"
                        }, Ke(n(z(a).llmUsage.totalTokens)) + " tokens ", 9, _Y),
                        M("button", {
                          type: "button",
                          class: "usage-toggle",
                          onClick: Z[18] || (Z[18] = (Q) => pt.value = !pt.value),
                          "data-test": "llm-usage-toggle"
                        }, Ke(pt.value ? "hide details" : "show details"), 1)
                      ]),
                      pt.value ? (je(), at("dl", gY, [
                        M("div", null, [
                          $Y,
                          M("dd", null, Ke(n(z(a).llmUsage.inputTokens)), 1)
                        ]),
                        M("div", null, [
                          yY,
                          M("dd", null, Ke(n(z(a).llmUsage.outputTokens)), 1)
                        ]),
                        M("div", null, [
                          bY,
                          M("dd", null, Ke(n(z(a).llmUsage.cacheReadInputTokens)), 1)
                        ]),
                        M("div", null, [
                          CY,
                          M("dd", null, Ke(n(z(a).llmUsage.cacheCreationInputTokens)), 1)
                        ]),
                        M("div", null, [
                          VY,
                          M("dd", null, [
                            oe(Ke(z(a).llmUsage.calls) + " ", 1),
                            M("span", EY, "(" + Ke(z(a).llmUsage.successfulCalls) + " ok / " + Ke(z(a).llmUsage.failedCalls) + " failed)", 1)
                          ])
                        ]),
                        M("div", null, [
                          SY,
                          M("dd", null, Ke((z(a).llmUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
                        ])
                      ])) : Wt("", !0)
                    ])) : Wt("", !0)
                  ])
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        }),
        M("div", IY, [
          pe(z(ve), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: Xo
          }, {
            default: ut(() => [
              kY
            ]),
            _: 1
          }),
          pe(z(ve), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: Jn
          }, {
            default: ut(() => [
              AY
            ]),
            _: 1
          }),
          pe(z(ve), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: Gt
          }, {
            default: ut(() => [
              pe(z(J), {
                icon: z(r).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              TY
            ]),
            _: 1
          })
        ]),
        pe(z($c), {
          modelValue: Nt.value,
          "onUpdate:modelValue": Z[20] || (Z[20] = (Le) => Nt.value = Le),
          right: "",
          error: Jo.value,
          timeout: 6e3
        }, {
          button: ut(() => [
            pe(z(ve), {
              onClick: Z[19] || (Z[19] = (Le) => Nt.value = !1),
              text: ""
            }, {
              default: ut(() => [
                xY
              ]),
              _: 1
            })
          ]),
          default: ut(() => [
            oe(Ke(On.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const MY = /* @__PURE__ */ Ve(NY, [["__scopeId", "data-v-44b4fabb"]]), BY = window.VueRouter.createRouter, RY = window.VueRouter.createWebHistory, PY = async () => {
  const e = Ri();
  e.userId || await e.getUserRole();
}, H0 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const n = window.VRouter || z0;
      await Ri().getUserRole(), n.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => PY(),
    component: N3
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: sH
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: BH
  },
  {
    path: "/error",
    name: "error",
    component: QH
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: yz
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      await Ri().getEngineInfo();
    },
    component: MY
  }
], Ff = window.VRouter;
if (Ff) {
  const e = "Plugin-alecUiExtension", n = Ff.hasRoute(e) ? e : "Plugin";
  for (const r of H0) {
    const { path: s, name: a, component: u, beforeEnter: c } = r;
    Ff.addRoute(n, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const z0 = BY({
  history: RY(),
  routes: H0
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = ZS;
