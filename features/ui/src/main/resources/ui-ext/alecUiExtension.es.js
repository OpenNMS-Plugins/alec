const Ve = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
}, US = {}, WS = window.Vue.resolveComponent, HS = window.Vue.createVNode, zS = window.Vue.openBlock, qS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const GS = { class: "main" };
function YS(e, n) {
  const r = WS("router-view");
  return zS(), qS("div", GS, [
    HS(r)
  ]);
}
const jS = /* @__PURE__ */ Ve(US, [["render", YS], ["__scopeId", "data-v-5d32d140"]]), KS = window.Vue.defineComponent, ZS = window.Vue.openBlock, JS = window.Vue.createBlock, XS = /* @__PURE__ */ KS({
  __name: "App",
  setup(e) {
    return (n, r) => (ZS(), JS(jS));
  }
});
var ba = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function QS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Eg = { exports: {} }, dp = { exports: {} }, Sg = function(n, r) {
  return function() {
    return n.apply(r, arguments);
  };
}, eI = Sg, fp = Object.prototype.toString, pp = function(e) {
  return function(n) {
    var r = fp.call(n);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Yo(e) {
  return e = e.toLowerCase(), function(r) {
    return pp(r) === e;
  };
}
function Qu(e) {
  return Array.isArray(e);
}
function Hf(e) {
  return typeof e > "u";
}
function tI(e) {
  return e !== null && !Hf(e) && e.constructor !== null && !Hf(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Ig = Yo("ArrayBuffer");
function nI(e) {
  var n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && Ig(e.buffer), n;
}
function rI(e) {
  return typeof e == "string";
}
function kg(e) {
  return typeof e == "number";
}
function hp(e) {
  return e !== null && typeof e == "object";
}
function Xa(e) {
  if (pp(e) !== "object")
    return !1;
  var n = Object.getPrototypeOf(e);
  return n === null || n === Object.prototype;
}
function oI(e) {
  if (!Xa(e))
    return !1;
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
var iI = Yo("Date"), sI = Yo("File"), aI = Yo("Blob"), lI = Yo("FileList");
function Fu(e) {
  return fp.call(e) === "[object Function]";
}
function uI(e) {
  return hp(e) && Fu(e.pipe);
}
function cI(e) {
  var n = "[object FormData]";
  if (!e)
    return !1;
  if (typeof FormData == "function" && e instanceof FormData)
    return !0;
  if (!hp(e))
    return !1;
  var r = Object.getPrototypeOf(e);
  return !r || r === Object.prototype || !Fu(e.append) ? !1 : fp.call(e) === n || Fu(e.toString) && e.toString() === n;
}
var dI = Yo("URLSearchParams");
function fI(e) {
  return e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
function pI() {
  var e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function mp(e, n) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Qu(e))
      for (var r = 0, s = e.length; r < s; r++)
        n.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && n.call(null, e[a], a, e);
}
function zf() {
  var e = /* @__PURE__ */ Object.create(null);
  function n(a, u) {
    var c;
    u === "__proto__" || u === "constructor" || u === "prototype" || (c = Object.prototype.hasOwnProperty.call(e, u) ? e[u] : void 0, Xa(c) && Xa(a) ? e[u] = zf(c, a) : Xa(a) ? e[u] = zf({}, a) : Qu(a) ? e[u] = a.slice() : e[u] = a);
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    mp(arguments[r], n);
  return e;
}
function hI(e, n, r) {
  return mp(n, function(a, u) {
    r && typeof a == "function" ? e[u] = eI(a, r) : e[u] = a;
  }), e;
}
function mI(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function wI(e, n, r, s) {
  e.prototype = Object.create(
    n.prototype,
    s
  ), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function vI(e, n, r, s) {
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
function _I(e, n, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= n.length;
  var s = e.indexOf(n, r);
  return s !== -1 && s === r;
}
function gI(e) {
  if (!e)
    return null;
  if (Qu(e))
    return e;
  var n = e.length;
  if (!kg(n))
    return null;
  for (var r = new Array(n); n-- > 0; )
    r[n] = e[n];
  return r;
}
var $I = function(e) {
  return function(n) {
    return e && n instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array));
function yI(e, n) {
  for (var r = e && e[Symbol.iterator], s = r.call(e), a; (a = s.next()) && !a.done; ) {
    var u = a.value;
    n.call(e, u[0], u[1]);
  }
}
function bI(e, n) {
  for (var r, s = []; (r = e.exec(n)) !== null; )
    s.push(r);
  return s;
}
var CI = Yo("HTMLFormElement"), VI = function(n) {
  return function(r, s) {
    return n.call(r, s);
  };
}(Object.prototype.hasOwnProperty), ft = {
  isArray: Qu,
  isArrayBuffer: Ig,
  isBuffer: tI,
  isFormData: cI,
  isArrayBufferView: nI,
  isString: rI,
  isNumber: kg,
  isObject: hp,
  isPlainObject: Xa,
  isEmptyObject: oI,
  isUndefined: Hf,
  isDate: iI,
  isFile: sI,
  isBlob: aI,
  isFunction: Fu,
  isStream: uI,
  isURLSearchParams: dI,
  isStandardBrowserEnv: pI,
  forEach: mp,
  merge: zf,
  extend: hI,
  trim: fI,
  stripBOM: mI,
  inherits: wI,
  toFlatObject: vI,
  kindOf: pp,
  kindOfTest: Yo,
  endsWith: _I,
  toArray: gI,
  isTypedArray: $I,
  isFileList: lI,
  forEachEntry: yI,
  matchAll: bI,
  isHTMLForm: CI,
  hasOwnProperty: VI
}, Ag = ["authorization", "proxy-authorization", "cookie", "set-cookie", "x-api-key", "password"], Ho = ft, EI = Ag, SI = "[REDACTED ****]";
function Tg(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return n.value = e, n;
}
function II(e) {
  var n = e && Ho.isArray(e.redact) && e.redact.length ? e.redact : null, r = n || EI, s = {};
  return Ho.forEach(r, function(u) {
    typeof u == "string" && (s[u.toLowerCase()] = !0);
  }), s;
}
function kI(e, n) {
  return typeof e == "string" && n[e.toLowerCase()];
}
var Km = "[Circular]";
function qf(e, n, r, s) {
  var a;
  return kI(r, n) ? SI : Ho.isArray(e) ? s.indexOf(e) !== -1 ? Km : (s.push(e), a = [], Ho.forEach(e, function(c, f) {
    a[f] = qf(c, n, f, s);
  }), s.pop(), a) : Ho.isPlainObject(e) ? s.indexOf(e) !== -1 ? Km : (s.push(e), a = {}, Ho.forEach(e, function(c, f) {
    a[f] = qf(c, n, f, s);
  }), s.pop(), a) : e;
}
function AI(e) {
  return e && qf(e, II(e), void 0, []);
}
function Ns(e, n, r, s, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
Ho.inherits(Ns, Error, {
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
      config: AI(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var xg = Ns.prototype, Lg = /* @__PURE__ */ Object.create(null);
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
  Lg[e] = Tg(e);
});
Object.defineProperties(Ns, Lg);
Object.defineProperty(xg, "isAxiosError", Tg(!0));
Ns.from = function(e, n, r, s, a, u) {
  var c = Object.create(xg);
  return Ho.toFlatObject(e, c, function(m) {
    return m !== Error.prototype;
  }), Ns.call(c, e.message, n, r, s, a), c.cause = e, c.name = e.name, u && Object.assign(c, u), c;
};
var Ui = Ns, Dg = { exports: {} }, TI = typeof self == "object" ? self.FormData : window.FormData;
(function(e) {
  e.exports = TI;
})(Dg);
var He = ft, Td = Ui, xI = Dg.exports;
function Gf(e) {
  return He.isPlainObject(e) || He.isArray(e);
}
function Og(e) {
  return He.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Zm(e, n, r) {
  return e ? e.concat(n).map(function(a, u) {
    return a = Og(a), !r && u ? "[" + a + "]" : a;
  }).join(r ? "." : "") : n;
}
function LI(e) {
  return He.isArray(e) && !e.some(Gf);
}
var DI = He.toFlatObject(He, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function OI(e) {
  return e && He.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator];
}
function NI(e, n, r) {
  if (!He.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new (xI || FormData)(), r = He.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(D, S) {
    return !He.isUndefined(S[D]);
  });
  var s = r.metaTokens, a = r.visitor || y, u = r.dots, c = r.indexes, f = r.Blob || typeof Blob < "u" && Blob, m = r.maxDepth === void 0 ? 100 : r.maxDepth, w = f && OI(n);
  if (!He.isFunction(a))
    throw new TypeError("visitor must be a function");
  function g(x) {
    if (x === null)
      return "";
    if (He.isDate(x))
      return x.toISOString();
    if (!w && He.isBlob(x))
      throw new Td("Blob is not supported. Use a Buffer instead.");
    return He.isArrayBuffer(x) || He.isTypedArray(x) ? w && typeof Blob == "function" ? new Blob([x]) : Buffer.from(x) : x;
  }
  function y(x, D, S) {
    var A = x;
    if (x && !S && typeof x == "object") {
      if (He.endsWith(D, "{}"))
        D = s ? D : D.slice(0, -2), x = JSON.stringify(x);
      else if (He.isArray(x) && LI(x) || He.isFileList(x) || He.endsWith(D, "[]") && (A = He.toArray(x)))
        return D = Og(D), A.forEach(function(R, F) {
          !(He.isUndefined(R) || R === null) && n.append(
            c === !0 ? Zm([D], F, u) : c === null ? D : D + "[]",
            g(R)
          );
        }), !1;
    }
    return Gf(x) ? !0 : (n.append(Zm(S, D, u), g(x)), !1);
  }
  var b = [], V = Object.assign(DI, {
    defaultVisitor: y,
    convertValue: g,
    isVisitable: Gf
  });
  function O(x, D, S) {
    if (!He.isUndefined(x)) {
      if (S = S || 0, S > m)
        throw new Td(
          "Maximum object depth of " + m + " exceeded (got " + S + " levels)",
          Td.ERR_FORM_DATA_DEPTH_EXCEEDED
        );
      if (b.indexOf(x) !== -1)
        throw Error("Circular reference detected in " + D.join("."));
      b.push(x), He.forEach(x, function(T, R) {
        var F = !(He.isUndefined(T) || T === null) && a.call(
          n,
          T,
          He.isString(R) ? R.trim() : R,
          D,
          V
        );
        F === !0 && O(T, D ? D.concat(R) : [R], S + 1);
      }), b.pop();
    }
  }
  if (!He.isObject(e))
    throw new TypeError("data must be an object");
  return O(e, null, 0), n;
}
var ec = NI, MI = ec;
function Jm(e) {
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
function Ng(e, n) {
  this._pairs = [], e && MI(e, this, n);
}
var Mg = Ng.prototype;
Mg.append = function(n, r) {
  this._pairs.push([n, r]);
};
Mg.toString = function(n) {
  var r = n ? function(s) {
    return n.call(this, s, Jm);
  } : Jm;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
var Rg = Ng, RI = ft, BI = Rg;
function PI(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Bg = function(n, r, s) {
  if (!r)
    return n;
  var a = n.indexOf("#");
  a !== -1 && (n = n.slice(0, a));
  var u = s && s.encode || PI, c = s && s.serialize, f;
  return c ? f = c(r, s) : f = RI.isURLSearchParams(r) ? r.toString() : new BI(r, s).toString(u), f && (n += (n.indexOf("?") === -1 ? "?" : "&") + f), n;
}, FI = ft;
function pl() {
  this.handlers = [];
}
pl.prototype.use = function(n, r, s) {
  return this.handlers.push({
    fulfilled: n,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
pl.prototype.eject = function(n) {
  this.handlers[n] && (this.handlers[n] = null);
};
pl.prototype.clear = function() {
  this.handlers && (this.handlers = []);
};
pl.prototype.forEach = function(n) {
  FI.forEach(this.handlers, function(s) {
    s !== null && n(s);
  });
};
var UI = pl, WI = ft, Pg = function(n, r) {
  WI.forEach(n, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (n[r] = a, delete n[u]);
  });
}, Fg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, tc = { exports: {} }, HI = Rg, zI = typeof URLSearchParams < "u" ? URLSearchParams : HI, qI = FormData, GI = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zI,
    FormData: qI,
    Blob
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
(function(e) {
  e.exports = GI;
})(tc);
var YI = ft, jI = ec, Xm = tc.exports, KI = function(n, r) {
  return jI(n, new Xm.classes.URLSearchParams(), Object.assign({
    visitor: function(s, a, u, c) {
      return Xm.isNode && YI.isBuffer(s) ? (this.append(a, s.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, r));
}, Po = ft;
function ZI(e) {
  return Po.matchAll(/\w+|\[(\w*)]/g, e).map(function(n) {
    return n[0] === "[]" ? "" : n[1] || n[0];
  });
}
function JI(e) {
  var n = {}, r = Object.keys(e), s, a = r.length, u;
  for (s = 0; s < a; s++)
    u = r[s], n[u] = e[u];
  return n;
}
function XI(e) {
  function n(s, a, u, c) {
    var f = s[c++];
    if (f === "__proto__")
      return !0;
    var m = Number.isFinite(+f), w = c >= s.length;
    if (f = !f && Po.isArray(u) ? u.length : f, w)
      return Po.hasOwnProperty(u, f) ? u[f] = [u[f], a] : u[f] = a, !m;
    (!u[f] || !Po.isObject(u[f])) && (u[f] = []);
    var g = n(s, a, u[f], c);
    return g && Po.isArray(u[f]) && (u[f] = JI(u[f])), !m;
  }
  if (Po.isFormData(e) && Po.isFunction(e.entries)) {
    var r = {};
    return Po.forEachEntry(e, function(s, a) {
      n(ZI(s), a, r, 0);
    }), r;
  }
  return null;
}
var Ug = XI, xd, Qm;
function QI() {
  if (Qm)
    return xd;
  Qm = 1;
  var e = Ui;
  return xd = function(r, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, xd;
}
var Ld, ew;
function ek() {
  if (ew)
    return Ld;
  ew = 1;
  var e = ft;
  return Ld = e.isStandardBrowserEnv() ? function() {
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
  }(), Ld;
}
var tk = function(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}, nk = function(n, r) {
  return r ? n.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : n;
}, rk = tk, ok = nk, Wg = function(n, r, s) {
  var a = !rk(r);
  return n && (a || s === !1) ? ok(n, r) : r;
}, Dd, tw;
function ik() {
  if (tw)
    return Dd;
  tw = 1;
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
  return Dd = function(s) {
    var a = {}, u, c, f;
    return s && e.forEach(s.split(`
`), function(w) {
      if (f = w.indexOf(":"), u = e.trim(w.slice(0, f)).toLowerCase(), c = e.trim(w.slice(f + 1)), u) {
        if (a[u] && n.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, Dd;
}
var Od, nw;
function sk() {
  if (nw)
    return Od;
  nw = 1;
  var e = ft;
  return Od = e.isStandardBrowserEnv() ? function() {
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
  }(), Od;
}
var Nd, rw;
function nc() {
  if (rw)
    return Nd;
  rw = 1;
  var e = Ui, n = ft;
  function r(s, a, u) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED, a, u), this.name = "CanceledError";
  }
  return n.inherits(r, e, {
    __CANCEL__: !0
  }), Nd = r, Nd;
}
var Md, ow;
function ak() {
  return ow || (ow = 1, Md = function(n) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
    return r && r[1] || "";
  }), Md;
}
var Rd, iw;
function sw() {
  if (iw)
    return Rd;
  iw = 1;
  var e = ft, n = QI(), r = ek(), s = Bg, a = Wg, u = ik(), c = sk(), f = Fg, m = Ui, w = nc(), g = ak(), y = tc.exports;
  return Rd = function(V) {
    return new Promise(function(x, D) {
      var S = V.data, A = V.headers, T = V.responseType, R = e.hasOwnProperty(V, "withXSRFToken") ? V.withXSRFToken : void 0, F;
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
            function(Re) {
              x(Re), W();
            },
            function(Re) {
              D(Re), W();
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
      }, e.isStandardBrowserEnv() && (e.isFunction(R) && (R = R(V)), R === !0 || R !== !1 && c(he))) {
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
  }, Rd;
}
var lt = ft, aw = Pg, lw = Ui, lk = Fg, uk = ec, ck = KI, uw = tc.exports, dk = Ug, fk = Ag, pk = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function cw(e, n) {
  !lt.isUndefined(e) && lt.isUndefined(e["Content-Type"]) && (e["Content-Type"] = n);
}
function hk() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = sw()), e;
}
function mk(e, n, r) {
  if (lt.isString(e))
    try {
      return (n || JSON.parse)(e), lt.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var rc = {
  transitional: lk,
  adapter: hk(),
  transformRequest: [function(n, r) {
    aw(r, "Accept"), aw(r, "Content-Type");
    var s = r && r["Content-Type"] || "", a = s.indexOf("application/json") > -1, u = lt.isObject(n);
    u && lt.isHTMLForm(n) && (n = new FormData(n));
    var c = lt.isFormData(n);
    if (c)
      return a ? JSON.stringify(dk(n)) : n;
    if (lt.isArrayBuffer(n) || lt.isBuffer(n) || lt.isStream(n) || lt.isFile(n) || lt.isBlob(n))
      return n;
    if (lt.isArrayBufferView(n))
      return n.buffer;
    if (lt.isURLSearchParams(n))
      return cw(r, "application/x-www-form-urlencoded;charset=utf-8"), n.toString();
    var f;
    if (u) {
      var m = lt.hasOwnProperty(this, "formSerializer") ? this.formSerializer : void 0, w = lt.hasOwnProperty(this, "env") ? this.env : void 0;
      if (s.indexOf("application/x-www-form-urlencoded") !== -1)
        return ck(n, m).toString();
      if ((f = lt.isFileList(n)) || s.indexOf("multipart/form-data") > -1) {
        var g = w && w.FormData;
        return uk(
          f ? { "files[]": n } : n,
          g && new g(),
          m
        );
      }
    }
    return u || a ? (cw(r, "application/json"), mk(n)) : n;
  }],
  transformResponse: [function(n) {
    var r = this.transitional || rc.transitional, s = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (n && lt.isString(n) && (s && !this.responseType || a)) {
      var u = r && r.silentJSONParsing, c = !u && a;
      try {
        return JSON.parse(n);
      } catch (f) {
        if (c)
          throw f.name === "SyntaxError" ? lw.from(f, lw.ERR_BAD_RESPONSE, this, null, this.response) : f;
      }
    }
    return n;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  redact: fk.slice(),
  env: {
    FormData: uw.classes.FormData,
    Blob: uw.classes.Blob
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
  rc.headers[n] = {};
});
lt.forEach(["post", "put", "patch"], function(n) {
  rc.headers[n] = lt.merge(pk);
});
var wp = rc, wk = ft, vk = wp, _k = function(n, r, s, a) {
  var u = this || vk;
  return wk.forEach(a, function(f) {
    n = f.call(u, n, r, s);
  }), n;
}, Bd, dw;
function Hg() {
  return dw || (dw = 1, Bd = function(n) {
    return !!(n && n.__CANCEL__);
  }), Bd;
}
var gk = ft, $k = /[^\x09\x20-\x7E\x80-\xFF]/g, yk = /^[\x09\x20]+|[\x09\x20]+$/g;
function zg(e) {
  return e === !1 || e == null ? e : gk.isArray(e) ? e.map(zg) : String(e).replace($k, "").replace(yk, "");
}
var bk = zg, Ca = ft, Pd = _k, Ck = Hg(), Vk = wp, Ek = nc(), fw = Pg, Sk = bk;
function Fd(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ek();
}
var Ik = function(n) {
  Fd(n), n.headers = n.headers || {}, n.data = Pd.call(
    n,
    n.data,
    n.headers,
    null,
    n.transformRequest
  ), fw(n.headers, "Accept"), fw(n.headers, "Content-Type");
  var r = Ca.hasOwnProperty(n.headers, "common") && n.headers.common ? n.headers.common : {}, s = n.method && Ca.hasOwnProperty(n.headers, n.method) && n.headers[n.method] ? n.headers[n.method] : {};
  n.headers = Ca.merge(r, s, n.headers), Ca.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(c) {
      delete n.headers[c];
    }
  ), Ca.forEach(n.headers, function(c, f) {
    n.headers[f] = Sk(c);
  });
  var a = n.adapter || Vk.adapter;
  return a(n).then(function(c) {
    return Fd(n), c.data = Pd.call(
      n,
      c.data,
      c.headers,
      c.status,
      n.transformResponse
    ), c;
  }, function(c) {
    return Ck(c) || (Fd(n), c && c.response && (c.response.data = Pd.call(
      n,
      c.response.data,
      c.response.headers,
      c.response.status,
      n.transformResponse
    ))), Promise.reject(c);
  });
}, yt = ft, qg = function(n, r) {
  r = r || {};
  var s = /* @__PURE__ */ Object.create(null);
  function a(b, V) {
    return yt.hasOwnProperty(b, V) ? b[V] : void 0;
  }
  function u(b, V) {
    return yt.hasOwnProperty(b, V);
  }
  function c(b, V) {
    return yt.isPlainObject(b) && yt.isPlainObject(V) ? yt.merge(b, V) : yt.isEmptyObject(V) ? yt.merge({}, b) : yt.isPlainObject(V) ? yt.merge({}, V) : yt.isArray(V) ? V.slice() : V;
  }
  function f(b) {
    if (u(r, b) && !yt.isUndefined(r[b]))
      return c(a(n, b), r[b]);
    if (u(n, b) && !yt.isUndefined(n[b]))
      return c(void 0, n[b]);
  }
  function m(b) {
    if (u(r, b) && !yt.isUndefined(r[b]))
      return c(void 0, r[b]);
  }
  function w(b) {
    if (u(r, b) && !yt.isUndefined(r[b]))
      return c(void 0, r[b]);
    if (u(n, b) && !yt.isUndefined(n[b]))
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
  return yt.forEach(Object.keys(n).concat(Object.keys(r)), function(V) {
    if (!(V === "__proto__" || V === "constructor" || V === "prototype")) {
      var O = yt.hasOwnProperty(y, V) ? y[V] : f, x = O(V);
      yt.isUndefined(x) && O !== g || (s[V] = x);
    }
  }), s;
}, Ud, pw;
function Gg() {
  return pw || (pw = 1, Ud = {
    version: "0.32.0"
  }), Ud;
}
var kk = Gg().version, Fo = Ui, vp = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, n) {
  vp[e] = function(s) {
    return typeof s === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
var hw = {};
vp.transitional = function(n, r, s) {
  function a(u, c) {
    return "[Axios v" + kk + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
  }
  return function(u, c, f) {
    if (n === !1)
      throw new Fo(
        a(c, " has been removed" + (r ? " in " + r : "")),
        Fo.ERR_DEPRECATED
      );
    return r && !hw[c] && (hw[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), n ? n(u, c, f) : !0;
  };
};
function Ak(e, n, r) {
  if (typeof e != "object")
    throw new Fo("options must be an object", Fo.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a], c = n[u];
    if (c) {
      var f = e[u], m = f === void 0 || c(f, u, e);
      if (m !== !0)
        throw new Fo("option " + u + " must be " + m, Fo.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Fo("Unknown option " + u, Fo.ERR_BAD_OPTION);
  }
}
var Tk = {
  assertOptions: Ak,
  validators: vp
}, _p = ft, xk = Bg, mw = UI, ww = Ik, oc = qg, Lk = Wg, Yf = Tk, Io = Yf.validators;
function Ms(e) {
  this.defaults = e, this.interceptors = {
    request: new mw(),
    response: new mw()
  };
}
Ms.prototype.request = function(n, r) {
  typeof n == "string" ? (r = r || {}, r.url = n) : r = n || {}, r = oc(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Yf.assertOptions(s, {
    silentJSONParsing: Io.transitional(Io.boolean),
    forcedJSONParsing: Io.transitional(Io.boolean),
    clarifyTimeoutError: Io.transitional(Io.boolean)
  }, !1);
  var a = r.paramsSerializer;
  a != null && (_p.isFunction(a) ? r.paramsSerializer = {
    serialize: a
  } : Yf.assertOptions(a, {
    encode: Io.function,
    serialize: Io.function
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
    var w = [ww, void 0];
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
    m = ww(g);
  } catch (V) {
    return Promise.reject(V);
  }
  for (; f.length; )
    m = m.then(f.shift(), f.shift());
  return m;
};
Ms.prototype.getUri = function(n) {
  n = oc(this.defaults, n);
  var r = Lk(n.baseURL, n.url, n.allowAbsoluteUrls);
  return xk(r, n.params, n.paramsSerializer);
};
_p.forEach(["delete", "get", "head", "options"], function(n) {
  Ms.prototype[n] = function(r, s) {
    return this.request(oc(s || {}, {
      method: n,
      url: r,
      data: (s || {}).data
    }));
  };
});
_p.forEach(["post", "put", "patch"], function(n) {
  function r(s) {
    return function(u, c, f) {
      return this.request(oc(f || {}, {
        method: n,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  Ms.prototype[n] = r(), Ms.prototype[n + "Form"] = r(!0);
});
var Dk = Ms, Wd, vw;
function Ok() {
  if (vw)
    return Wd;
  vw = 1;
  var e = nc();
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
  }, Wd = n, Wd;
}
var Hd, _w;
function Nk() {
  return _w || (_w = 1, Hd = function(n) {
    return function(s) {
      return n.apply(null, s);
    };
  }), Hd;
}
var zd, gw;
function Mk() {
  if (gw)
    return zd;
  gw = 1;
  var e = ft;
  return zd = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, zd;
}
var jf = ft, Rk = Sg, Du = Dk, Bk = qg, Pk = wp, Fk = Ug;
function Yg(e) {
  var n = new Du(e), r = Rk(Du.prototype.request, n);
  return jf.extend(r, Du.prototype, n), jf.extend(r, n), r.create = function(a) {
    return Yg(Bk(e, a));
  }, r;
}
var rn = Yg(Pk);
rn.Axios = Du;
rn.CanceledError = nc();
rn.CancelToken = Ok();
rn.isCancel = Hg();
rn.VERSION = Gg().version;
rn.toFormData = ec;
rn.AxiosError = Ui;
rn.Cancel = rn.CanceledError;
rn.all = function(n) {
  return Promise.all(n);
};
rn.spread = Nk();
rn.isAxiosError = Mk();
rn.formToJSON = function(e) {
  return Fk(jf.isHTMLForm(e) ? new FormData(e) : e);
};
dp.exports = rn;
dp.exports.default = rn;
(function(e) {
  e.exports = dp.exports;
})(Eg);
const jg = /* @__PURE__ */ QS(Eg.exports), no = jg.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), Ot = jg.create({
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
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", w = 500, g = "__lodash_placeholder__", y = 1, b = 2, V = 4, O = 1, x = 2, D = 1, S = 2, A = 4, T = 8, R = 16, F = 32, W = 64, L = 128, X = 256, Me = 512, he = 30, Te = "...", Qe = 800, et = 16, Pe = 1, de = 2, Fe = 3, Ge = 1 / 0, Re = 9007199254740991, on = 17976931348623157e292, xr = 0 / 0, $e = 4294967295, Xs = $e - 1, Qs = $e >>> 1, Hi = [
      ["ary", L],
      ["bind", D],
      ["bindKey", S],
      ["curry", T],
      ["curryRight", R],
      ["flip", Me],
      ["partial", F],
      ["partialRight", W],
      ["rearg", X]
    ], Ct = "[object Arguments]", Gt = "[object Array]", sn = "[object AsyncFunction]", gn = "[object Boolean]", an = "[object Date]", Jo = "[object DOMException]", xe = "[object Error]", Lr = "[object Function]", Be = "[object GeneratorFunction]", Nt = "[object Map]", be = "[object Number]", On = "[object Null]", Vt = "[object Object]", Mt = "[object Promise]", Xo = "[object Proxy]", Nn = "[object RegExp]", pt = "[object Set]", hr = "[object String]", ht = "[object Symbol]", Dr = "[object Undefined]", Yt = "[object WeakMap]", Qo = "[object WeakSet]", Xn = "[object ArrayBuffer]", $n = "[object DataView]", mr = "[object Float32Array]", yn = "[object Float64Array]", Qn = "[object Int8Array]", er = "[object Int16Array]", Or = "[object Int32Array]", Nr = "[object Uint8Array]", Mr = "[object Uint8ClampedArray]", wr = "[object Uint16Array]", vr = "[object Uint32Array]", tr = /\b__p \+= '';/g, jt = /\b(__p \+=) '' \+/g, ro = /(__e\(.*?\)|\b__t\)) \+\n'';/g, oo = /&(?:amp|lt|gt|quot|#39);/g, io = /[&<>"']/g, so = RegExp(oo.source), ei = RegExp(io.source), Rr = /<%-([\s\S]+?)%>/g, Br = /<%([\s\S]+?)%>/g, Rt = /<%=([\s\S]+?)%>/g, nr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ao = /^\w*$/, lo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, uo = /[\\^$.*+?()[\]{}|]/g, ti = RegExp(uo.source), _r = /^\s+/, ni = /\s/, co = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, zi = /\{\n\/\* \[wrapped with (.+)\] \*/, re = /,? & /, Z = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Le = /[()=,{}\[\]\/\s]/, Q = /\\(\\)?/g, ln = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ri = /\w*$/, oi = /^[-+]0x[0-9a-f]+$/i, fo = /^0b[01]+$/i, ii = /^\[object .+?Constructor\]$/, si = /^0o[0-7]+$/i, qi = /^(?:0|[1-9]\d*)$/, Gi = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Pr = /($^)/, Yi = /['\n\r\u2028\u2029\\]/g, Bt = "\\ud800-\\udfff", ai = "\\u0300-\\u036f", Mn = "\\ufe20-\\ufe2f", ji = "\\u20d0-\\u20ff", li = ai + Mn + ji, po = "\\u2700-\\u27bf", ho = "a-z\\xdf-\\xf6\\xf8-\\xff", Fr = "\\xac\\xb1\\xd7\\xf7", ea = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ki = "\\u2000-\\u206f", mo = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", wo = "A-Z\\xc0-\\xd6\\xd8-\\xde", Rn = "\\ufe0e\\ufe0f", $l = Fr + ea + Ki + mo, ta = "['\u2019]", yl = "[" + Bt + "]", na = "[" + $l + "]", Zi = "[" + li + "]", ra = "\\d+", Cc = "[" + po + "]", bl = "[" + ho + "]", oa = "[^" + Bt + $l + ra + po + ho + wo + "]", vo = "\\ud83c[\\udffb-\\udfff]", ia = "(?:" + Zi + "|" + vo + ")", q = "[^" + Bt + "]", v = "(?:\\ud83c[\\udde6-\\uddff]){2}", I = "[\\ud800-\\udbff][\\udc00-\\udfff]", H = "[" + wo + "]", j = "\\u200d", ae = "(?:" + bl + "|" + oa + ")", _e = "(?:" + H + "|" + oa + ")", rt = "(?:" + ta + "(?:d|ll|m|re|s|t|ve))?", Ze = "(?:" + ta + "(?:D|LL|M|RE|S|T|VE))?", Kt = ia + "?", un = "[" + Rn + "]?", sa = "(?:" + j + "(?:" + [q, v, I].join("|") + ")" + un + Kt + ")*", Et = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Y0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Up = un + Kt + sa, j0 = "(?:" + [Cc, v, I].join("|") + ")" + Up, K0 = "(?:" + [q + Zi + "?", Zi, v, I, yl].join("|") + ")", Z0 = RegExp(ta, "g"), J0 = RegExp(Zi, "g"), Vc = RegExp(vo + "(?=" + vo + ")|" + K0 + Up, "g"), X0 = RegExp([
      H + "?" + bl + "+" + rt + "(?=" + [na, H, "$"].join("|") + ")",
      _e + "+" + Ze + "(?=" + [na, H + ae, "$"].join("|") + ")",
      H + "?" + ae + "+" + rt,
      H + "+" + Ze,
      Y0,
      Et,
      ra,
      j0
    ].join("|"), "g"), Q0 = RegExp("[" + j + Bt + li + Rn + "]"), e$ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, t$ = [
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
    ], n$ = -1, qe = {};
    qe[mr] = qe[yn] = qe[Qn] = qe[er] = qe[Or] = qe[Nr] = qe[Mr] = qe[wr] = qe[vr] = !0, qe[Ct] = qe[Gt] = qe[Xn] = qe[gn] = qe[$n] = qe[an] = qe[xe] = qe[Lr] = qe[Nt] = qe[be] = qe[Vt] = qe[Nn] = qe[pt] = qe[hr] = qe[Yt] = !1;
    var We = {};
    We[Ct] = We[Gt] = We[Xn] = We[$n] = We[gn] = We[an] = We[mr] = We[yn] = We[Qn] = We[er] = We[Or] = We[Nt] = We[be] = We[Vt] = We[Nn] = We[pt] = We[hr] = We[ht] = We[Nr] = We[Mr] = We[wr] = We[vr] = !0, We[xe] = We[Lr] = We[Yt] = !1;
    var r$ = {
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
    }, o$ = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, i$ = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, s$ = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, a$ = parseFloat, l$ = parseInt, Wp = typeof ba == "object" && ba && ba.Object === Object && ba, u$ = typeof self == "object" && self && self.Object === Object && self, St = Wp || u$ || Function("return this")(), Ec = n && !n.nodeType && n, ui = Ec && !0 && e && !e.nodeType && e, Hp = ui && ui.exports === Ec, Sc = Hp && Wp.process, Bn = function() {
      try {
        var C = ui && ui.require && ui.require("util").types;
        return C || Sc && Sc.binding && Sc.binding("util");
      } catch {
      }
    }(), zp = Bn && Bn.isArrayBuffer, qp = Bn && Bn.isDate, Gp = Bn && Bn.isMap, Yp = Bn && Bn.isRegExp, jp = Bn && Bn.isSet, Kp = Bn && Bn.isTypedArray;
    function bn(C, N, k) {
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
    function c$(C, N, k, Y) {
      for (var ie = -1, Ee = C == null ? 0 : C.length; ++ie < Ee; ) {
        var mt = C[ie];
        N(Y, mt, k(mt), C);
      }
      return Y;
    }
    function Pn(C, N) {
      for (var k = -1, Y = C == null ? 0 : C.length; ++k < Y && N(C[k], k, C) !== !1; )
        ;
      return C;
    }
    function d$(C, N) {
      for (var k = C == null ? 0 : C.length; k-- && N(C[k], k, C) !== !1; )
        ;
      return C;
    }
    function Zp(C, N) {
      for (var k = -1, Y = C == null ? 0 : C.length; ++k < Y; )
        if (!N(C[k], k, C))
          return !1;
      return !0;
    }
    function _o(C, N) {
      for (var k = -1, Y = C == null ? 0 : C.length, ie = 0, Ee = []; ++k < Y; ) {
        var mt = C[k];
        N(mt, k, C) && (Ee[ie++] = mt);
      }
      return Ee;
    }
    function Cl(C, N) {
      var k = C == null ? 0 : C.length;
      return !!k && Ji(C, N, 0) > -1;
    }
    function Ic(C, N, k) {
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
    function go(C, N) {
      for (var k = -1, Y = N.length, ie = C.length; ++k < Y; )
        C[ie + k] = N[k];
      return C;
    }
    function kc(C, N, k, Y) {
      var ie = -1, Ee = C == null ? 0 : C.length;
      for (Y && Ee && (k = C[++ie]); ++ie < Ee; )
        k = N(k, C[ie], ie, C);
      return k;
    }
    function f$(C, N, k, Y) {
      var ie = C == null ? 0 : C.length;
      for (Y && ie && (k = C[--ie]); ie--; )
        k = N(k, C[ie], ie, C);
      return k;
    }
    function Ac(C, N) {
      for (var k = -1, Y = C == null ? 0 : C.length; ++k < Y; )
        if (N(C[k], k, C))
          return !0;
      return !1;
    }
    var p$ = Tc("length");
    function h$(C) {
      return C.split("");
    }
    function m$(C) {
      return C.match(Z) || [];
    }
    function Jp(C, N, k) {
      var Y;
      return k(C, function(ie, Ee, mt) {
        if (N(ie, Ee, mt))
          return Y = Ee, !1;
      }), Y;
    }
    function Vl(C, N, k, Y) {
      for (var ie = C.length, Ee = k + (Y ? 1 : -1); Y ? Ee-- : ++Ee < ie; )
        if (N(C[Ee], Ee, C))
          return Ee;
      return -1;
    }
    function Ji(C, N, k) {
      return N === N ? I$(C, N, k) : Vl(C, Xp, k);
    }
    function w$(C, N, k, Y) {
      for (var ie = k - 1, Ee = C.length; ++ie < Ee; )
        if (Y(C[ie], N))
          return ie;
      return -1;
    }
    function Xp(C) {
      return C !== C;
    }
    function Qp(C, N) {
      var k = C == null ? 0 : C.length;
      return k ? Lc(C, N) / k : xr;
    }
    function Tc(C) {
      return function(N) {
        return N == null ? r : N[C];
      };
    }
    function xc(C) {
      return function(N) {
        return C == null ? r : C[N];
      };
    }
    function eh(C, N, k, Y, ie) {
      return ie(C, function(Ee, mt, Ue) {
        k = Y ? (Y = !1, Ee) : N(k, Ee, mt, Ue);
      }), k;
    }
    function v$(C, N) {
      var k = C.length;
      for (C.sort(N); k--; )
        C[k] = C[k].value;
      return C;
    }
    function Lc(C, N) {
      for (var k, Y = -1, ie = C.length; ++Y < ie; ) {
        var Ee = N(C[Y]);
        Ee !== r && (k = k === r ? Ee : k + Ee);
      }
      return k;
    }
    function Dc(C, N) {
      for (var k = -1, Y = Array(C); ++k < C; )
        Y[k] = N(k);
      return Y;
    }
    function _$(C, N) {
      return Ye(N, function(k) {
        return [k, C[k]];
      });
    }
    function th(C) {
      return C && C.slice(0, ih(C) + 1).replace(_r, "");
    }
    function Cn(C) {
      return function(N) {
        return C(N);
      };
    }
    function Oc(C, N) {
      return Ye(N, function(k) {
        return C[k];
      });
    }
    function aa(C, N) {
      return C.has(N);
    }
    function nh(C, N) {
      for (var k = -1, Y = C.length; ++k < Y && Ji(N, C[k], 0) > -1; )
        ;
      return k;
    }
    function rh(C, N) {
      for (var k = C.length; k-- && Ji(N, C[k], 0) > -1; )
        ;
      return k;
    }
    function g$(C, N) {
      for (var k = C.length, Y = 0; k--; )
        C[k] === N && ++Y;
      return Y;
    }
    var $$ = xc(r$), y$ = xc(o$);
    function b$(C) {
      return "\\" + s$[C];
    }
    function C$(C, N) {
      return C == null ? r : C[N];
    }
    function Xi(C) {
      return Q0.test(C);
    }
    function V$(C) {
      return e$.test(C);
    }
    function E$(C) {
      for (var N, k = []; !(N = C.next()).done; )
        k.push(N.value);
      return k;
    }
    function Nc(C) {
      var N = -1, k = Array(C.size);
      return C.forEach(function(Y, ie) {
        k[++N] = [ie, Y];
      }), k;
    }
    function oh(C, N) {
      return function(k) {
        return C(N(k));
      };
    }
    function $o(C, N) {
      for (var k = -1, Y = C.length, ie = 0, Ee = []; ++k < Y; ) {
        var mt = C[k];
        (mt === N || mt === g) && (C[k] = g, Ee[ie++] = k);
      }
      return Ee;
    }
    function El(C) {
      var N = -1, k = Array(C.size);
      return C.forEach(function(Y) {
        k[++N] = Y;
      }), k;
    }
    function S$(C) {
      var N = -1, k = Array(C.size);
      return C.forEach(function(Y) {
        k[++N] = [Y, Y];
      }), k;
    }
    function I$(C, N, k) {
      for (var Y = k - 1, ie = C.length; ++Y < ie; )
        if (C[Y] === N)
          return Y;
      return -1;
    }
    function k$(C, N, k) {
      for (var Y = k + 1; Y--; )
        if (C[Y] === N)
          return Y;
      return Y;
    }
    function Qi(C) {
      return Xi(C) ? T$(C) : p$(C);
    }
    function rr(C) {
      return Xi(C) ? x$(C) : h$(C);
    }
    function ih(C) {
      for (var N = C.length; N-- && ni.test(C.charAt(N)); )
        ;
      return N;
    }
    var A$ = xc(i$);
    function T$(C) {
      for (var N = Vc.lastIndex = 0; Vc.test(C); )
        ++N;
      return N;
    }
    function x$(C) {
      return C.match(Vc) || [];
    }
    function L$(C) {
      return C.match(X0) || [];
    }
    var D$ = function C(N) {
      N = N == null ? St : es.defaults(St.Object(), N, es.pick(St, t$));
      var k = N.Array, Y = N.Date, ie = N.Error, Ee = N.Function, mt = N.Math, Ue = N.Object, Mc = N.RegExp, O$ = N.String, Fn = N.TypeError, Sl = k.prototype, N$ = Ee.prototype, ts = Ue.prototype, Il = N["__core-js_shared__"], kl = N$.toString, De = ts.hasOwnProperty, M$ = 0, sh = function() {
        var t = /[^.]+$/.exec(Il && Il.keys && Il.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Al = ts.toString, R$ = kl.call(Ue), B$ = St._, P$ = Mc(
        "^" + kl.call(De).replace(uo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Tl = Hp ? N.Buffer : r, yo = N.Symbol, xl = N.Uint8Array, ah = Tl ? Tl.allocUnsafe : r, Ll = oh(Ue.getPrototypeOf, Ue), lh = Ue.create, uh = ts.propertyIsEnumerable, Dl = Sl.splice, ch = yo ? yo.isConcatSpreadable : r, la = yo ? yo.iterator : r, ci = yo ? yo.toStringTag : r, Ol = function() {
        try {
          var t = mi(Ue, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), F$ = N.clearTimeout !== St.clearTimeout && N.clearTimeout, U$ = Y && Y.now !== St.Date.now && Y.now, W$ = N.setTimeout !== St.setTimeout && N.setTimeout, Nl = mt.ceil, Ml = mt.floor, Rc = Ue.getOwnPropertySymbols, H$ = Tl ? Tl.isBuffer : r, dh = N.isFinite, z$ = Sl.join, q$ = oh(Ue.keys, Ue), wt = mt.max, Pt = mt.min, G$ = Y.now, Y$ = N.parseInt, fh = mt.random, j$ = Sl.reverse, Bc = mi(N, "DataView"), ua = mi(N, "Map"), Pc = mi(N, "Promise"), ns = mi(N, "Set"), ca = mi(N, "WeakMap"), da = mi(Ue, "create"), Rl = ca && new ca(), rs = {}, K$ = wi(Bc), Z$ = wi(ua), J$ = wi(Pc), X$ = wi(ns), Q$ = wi(ca), Bl = yo ? yo.prototype : r, fa = Bl ? Bl.valueOf : r, ph = Bl ? Bl.toString : r;
      function p(t) {
        if (tt(t) && !se(t) && !(t instanceof we)) {
          if (t instanceof Un)
            return t;
          if (De.call(t, "__wrapped__"))
            return hm(t);
        }
        return new Un(t);
      }
      var os = function() {
        function t() {
        }
        return function(o) {
          if (!Je(o))
            return {};
          if (lh)
            return lh(o);
          t.prototype = o;
          var i = new t();
          return t.prototype = r, i;
        };
      }();
      function Pl() {
      }
      function Un(t, o) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r;
      }
      p.templateSettings = {
        escape: Rr,
        evaluate: Br,
        interpolate: Rt,
        variable: "",
        imports: {
          _: p
        }
      }, p.prototype = Pl.prototype, p.prototype.constructor = p, Un.prototype = os(Pl.prototype), Un.prototype.constructor = Un;
      function we(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = $e, this.__views__ = [];
      }
      function ey() {
        var t = new we(this.__wrapped__);
        return t.__actions__ = cn(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = cn(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = cn(this.__views__), t;
      }
      function ty() {
        if (this.__filtered__) {
          var t = new we(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function ny() {
        var t = this.__wrapped__.value(), o = this.__dir__, i = se(t), l = o < 0, d = i ? t.length : 0, h = hb(0, d, this.__views__), _ = h.start, $ = h.end, E = $ - _, B = l ? $ : _ - 1, P = this.__iteratees__, U = P.length, G = 0, K = Pt(E, this.__takeCount__);
        if (!i || !l && d == E && K == E)
          return Rh(t, this.__actions__);
        var te = [];
        e:
          for (; E-- && G < K; ) {
            B += o;
            for (var ue = -1, ne = t[B]; ++ue < U; ) {
              var me = P[ue], ge = me.iteratee, Sn = me.type, Xt = ge(ne);
              if (Sn == de)
                ne = Xt;
              else if (!Xt) {
                if (Sn == Pe)
                  continue e;
                break e;
              }
            }
            te[G++] = ne;
          }
        return te;
      }
      we.prototype = os(Pl.prototype), we.prototype.constructor = we;
      function di(t) {
        var o = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++o < i; ) {
          var l = t[o];
          this.set(l[0], l[1]);
        }
      }
      function ry() {
        this.__data__ = da ? da(null) : {}, this.size = 0;
      }
      function oy(t) {
        var o = this.has(t) && delete this.__data__[t];
        return this.size -= o ? 1 : 0, o;
      }
      function iy(t) {
        var o = this.__data__;
        if (da) {
          var i = o[t];
          return i === m ? r : i;
        }
        return De.call(o, t) ? o[t] : r;
      }
      function sy(t) {
        var o = this.__data__;
        return da ? o[t] !== r : De.call(o, t);
      }
      function ay(t, o) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = da && o === r ? m : o, this;
      }
      di.prototype.clear = ry, di.prototype.delete = oy, di.prototype.get = iy, di.prototype.has = sy, di.prototype.set = ay;
      function Ur(t) {
        var o = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++o < i; ) {
          var l = t[o];
          this.set(l[0], l[1]);
        }
      }
      function ly() {
        this.__data__ = [], this.size = 0;
      }
      function uy(t) {
        var o = this.__data__, i = Fl(o, t);
        if (i < 0)
          return !1;
        var l = o.length - 1;
        return i == l ? o.pop() : Dl.call(o, i, 1), --this.size, !0;
      }
      function cy(t) {
        var o = this.__data__, i = Fl(o, t);
        return i < 0 ? r : o[i][1];
      }
      function dy(t) {
        return Fl(this.__data__, t) > -1;
      }
      function fy(t, o) {
        var i = this.__data__, l = Fl(i, t);
        return l < 0 ? (++this.size, i.push([t, o])) : i[l][1] = o, this;
      }
      Ur.prototype.clear = ly, Ur.prototype.delete = uy, Ur.prototype.get = cy, Ur.prototype.has = dy, Ur.prototype.set = fy;
      function Wr(t) {
        var o = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++o < i; ) {
          var l = t[o];
          this.set(l[0], l[1]);
        }
      }
      function py() {
        this.size = 0, this.__data__ = {
          hash: new di(),
          map: new (ua || Ur)(),
          string: new di()
        };
      }
      function hy(t) {
        var o = Xl(this, t).delete(t);
        return this.size -= o ? 1 : 0, o;
      }
      function my(t) {
        return Xl(this, t).get(t);
      }
      function wy(t) {
        return Xl(this, t).has(t);
      }
      function vy(t, o) {
        var i = Xl(this, t), l = i.size;
        return i.set(t, o), this.size += i.size == l ? 0 : 1, this;
      }
      Wr.prototype.clear = py, Wr.prototype.delete = hy, Wr.prototype.get = my, Wr.prototype.has = wy, Wr.prototype.set = vy;
      function fi(t) {
        var o = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new Wr(); ++o < i; )
          this.add(t[o]);
      }
      function _y(t) {
        return this.__data__.set(t, m), this;
      }
      function gy(t) {
        return this.__data__.has(t);
      }
      fi.prototype.add = fi.prototype.push = _y, fi.prototype.has = gy;
      function or(t) {
        var o = this.__data__ = new Ur(t);
        this.size = o.size;
      }
      function $y() {
        this.__data__ = new Ur(), this.size = 0;
      }
      function yy(t) {
        var o = this.__data__, i = o.delete(t);
        return this.size = o.size, i;
      }
      function by(t) {
        return this.__data__.get(t);
      }
      function Cy(t) {
        return this.__data__.has(t);
      }
      function Vy(t, o) {
        var i = this.__data__;
        if (i instanceof Ur) {
          var l = i.__data__;
          if (!ua || l.length < a - 1)
            return l.push([t, o]), this.size = ++i.size, this;
          i = this.__data__ = new Wr(l);
        }
        return i.set(t, o), this.size = i.size, this;
      }
      or.prototype.clear = $y, or.prototype.delete = yy, or.prototype.get = by, or.prototype.has = Cy, or.prototype.set = Vy;
      function hh(t, o) {
        var i = se(t), l = !i && vi(t), d = !i && !l && So(t), h = !i && !l && !d && ls(t), _ = i || l || d || h, $ = _ ? Dc(t.length, O$) : [], E = $.length;
        for (var B in t)
          (o || De.call(t, B)) && !(_ && (B == "length" || d && (B == "offset" || B == "parent") || h && (B == "buffer" || B == "byteLength" || B == "byteOffset") || Gr(B, E))) && $.push(B);
        return $;
      }
      function mh(t) {
        var o = t.length;
        return o ? t[Zc(0, o - 1)] : r;
      }
      function Ey(t, o) {
        return Ql(cn(t), pi(o, 0, t.length));
      }
      function Sy(t) {
        return Ql(cn(t));
      }
      function Fc(t, o, i) {
        (i !== r && !ir(t[o], i) || i === r && !(o in t)) && Hr(t, o, i);
      }
      function pa(t, o, i) {
        var l = t[o];
        (!(De.call(t, o) && ir(l, i)) || i === r && !(o in t)) && Hr(t, o, i);
      }
      function Fl(t, o) {
        for (var i = t.length; i--; )
          if (ir(t[i][0], o))
            return i;
        return -1;
      }
      function Iy(t, o, i, l) {
        return bo(t, function(d, h, _) {
          o(l, d, i(d), _);
        }), l;
      }
      function wh(t, o) {
        return t && $r(o, $t(o), t);
      }
      function ky(t, o) {
        return t && $r(o, fn(o), t);
      }
      function Hr(t, o, i) {
        o == "__proto__" && Ol ? Ol(t, o, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[o] = i;
      }
      function Uc(t, o) {
        for (var i = -1, l = o.length, d = k(l), h = t == null; ++i < l; )
          d[i] = h ? r : yd(t, o[i]);
        return d;
      }
      function pi(t, o, i) {
        return t === t && (i !== r && (t = t <= i ? t : i), o !== r && (t = t >= o ? t : o)), t;
      }
      function Wn(t, o, i, l, d, h) {
        var _, $ = o & y, E = o & b, B = o & V;
        if (i && (_ = d ? i(t, l, d, h) : i(t)), _ !== r)
          return _;
        if (!Je(t))
          return t;
        var P = se(t);
        if (P) {
          if (_ = wb(t), !$)
            return cn(t, _);
        } else {
          var U = Ft(t), G = U == Lr || U == Be;
          if (So(t))
            return Fh(t, $);
          if (U == Vt || U == Ct || G && !d) {
            if (_ = E || G ? {} : im(t), !$)
              return E ? ib(t, ky(_, t)) : ob(t, wh(_, t));
          } else {
            if (!We[U])
              return d ? t : {};
            _ = vb(t, U, $);
          }
        }
        h || (h = new or());
        var K = h.get(t);
        if (K)
          return K;
        h.set(t, _), Om(t) ? t.forEach(function(ne) {
          _.add(Wn(ne, o, i, ne, t, h));
        }) : Lm(t) && t.forEach(function(ne, me) {
          _.set(me, Wn(ne, o, i, me, t, h));
        });
        var te = B ? E ? ad : sd : E ? fn : $t, ue = P ? r : te(t);
        return Pn(ue || t, function(ne, me) {
          ue && (me = ne, ne = t[me]), pa(_, me, Wn(ne, o, i, me, t, h));
        }), _;
      }
      function Ay(t) {
        var o = $t(t);
        return function(i) {
          return vh(i, t, o);
        };
      }
      function vh(t, o, i) {
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
      function _h(t, o, i) {
        if (typeof t != "function")
          throw new Fn(c);
        return $a(function() {
          t.apply(r, i);
        }, o);
      }
      function ha(t, o, i, l) {
        var d = -1, h = Cl, _ = !0, $ = t.length, E = [], B = o.length;
        if (!$)
          return E;
        i && (o = Ye(o, Cn(i))), l ? (h = Ic, _ = !1) : o.length >= a && (h = aa, _ = !1, o = new fi(o));
        e:
          for (; ++d < $; ) {
            var P = t[d], U = i == null ? P : i(P);
            if (P = l || P !== 0 ? P : 0, _ && U === U) {
              for (var G = B; G--; )
                if (o[G] === U)
                  continue e;
              E.push(P);
            } else
              h(o, U, l) || E.push(P);
          }
        return E;
      }
      var bo = qh(gr), gh = qh(Hc, !0);
      function Ty(t, o) {
        var i = !0;
        return bo(t, function(l, d, h) {
          return i = !!o(l, d, h), i;
        }), i;
      }
      function Ul(t, o, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var h = t[l], _ = o(h);
          if (_ != null && ($ === r ? _ === _ && !En(_) : i(_, $)))
            var $ = _, E = h;
        }
        return E;
      }
      function xy(t, o, i, l) {
        var d = t.length;
        for (i = le(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === r || l > d ? d : le(l), l < 0 && (l += d), l = i > l ? 0 : Mm(l); i < l; )
          t[i++] = o;
        return t;
      }
      function $h(t, o) {
        var i = [];
        return bo(t, function(l, d, h) {
          o(l, d, h) && i.push(l);
        }), i;
      }
      function It(t, o, i, l, d) {
        var h = -1, _ = t.length;
        for (i || (i = gb), d || (d = []); ++h < _; ) {
          var $ = t[h];
          o > 0 && i($) ? o > 1 ? It($, o - 1, i, l, d) : go(d, $) : l || (d[d.length] = $);
        }
        return d;
      }
      var Wc = Gh(), yh = Gh(!0);
      function gr(t, o) {
        return t && Wc(t, o, $t);
      }
      function Hc(t, o) {
        return t && yh(t, o, $t);
      }
      function Wl(t, o) {
        return _o(o, function(i) {
          return Yr(t[i]);
        });
      }
      function hi(t, o) {
        o = Vo(o, t);
        for (var i = 0, l = o.length; t != null && i < l; )
          t = t[yr(o[i++])];
        return i && i == l ? t : r;
      }
      function bh(t, o, i) {
        var l = o(t);
        return se(t) ? l : go(l, i(t));
      }
      function Zt(t) {
        return t == null ? t === r ? Dr : On : ci && ci in Ue(t) ? pb(t) : Sb(t);
      }
      function zc(t, o) {
        return t > o;
      }
      function Ly(t, o) {
        return t != null && De.call(t, o);
      }
      function Dy(t, o) {
        return t != null && o in Ue(t);
      }
      function Oy(t, o, i) {
        return t >= Pt(o, i) && t < wt(o, i);
      }
      function qc(t, o, i) {
        for (var l = i ? Ic : Cl, d = t[0].length, h = t.length, _ = h, $ = k(h), E = 1 / 0, B = []; _--; ) {
          var P = t[_];
          _ && o && (P = Ye(P, Cn(o))), E = Pt(P.length, E), $[_] = !i && (o || d >= 120 && P.length >= 120) ? new fi(_ && P) : r;
        }
        P = t[0];
        var U = -1, G = $[0];
        e:
          for (; ++U < d && B.length < E; ) {
            var K = P[U], te = o ? o(K) : K;
            if (K = i || K !== 0 ? K : 0, !(G ? aa(G, te) : l(B, te, i))) {
              for (_ = h; --_; ) {
                var ue = $[_];
                if (!(ue ? aa(ue, te) : l(t[_], te, i)))
                  continue e;
              }
              G && G.push(te), B.push(K);
            }
          }
        return B;
      }
      function Ny(t, o, i, l) {
        return gr(t, function(d, h, _) {
          o(l, i(d), h, _);
        }), l;
      }
      function ma(t, o, i) {
        o = Vo(o, t), t = um(t, o);
        var l = t == null ? t : t[yr(zn(o))];
        return l == null ? r : bn(l, t, i);
      }
      function Ch(t) {
        return tt(t) && Zt(t) == Ct;
      }
      function My(t) {
        return tt(t) && Zt(t) == Xn;
      }
      function Ry(t) {
        return tt(t) && Zt(t) == an;
      }
      function wa(t, o, i, l, d) {
        return t === o ? !0 : t == null || o == null || !tt(t) && !tt(o) ? t !== t && o !== o : By(t, o, i, l, wa, d);
      }
      function By(t, o, i, l, d, h) {
        var _ = se(t), $ = se(o), E = _ ? Gt : Ft(t), B = $ ? Gt : Ft(o);
        E = E == Ct ? Vt : E, B = B == Ct ? Vt : B;
        var P = E == Vt, U = B == Vt, G = E == B;
        if (G && So(t)) {
          if (!So(o))
            return !1;
          _ = !0, P = !1;
        }
        if (G && !P)
          return h || (h = new or()), _ || ls(t) ? nm(t, o, i, l, d, h) : db(t, o, E, i, l, d, h);
        if (!(i & O)) {
          var K = P && De.call(t, "__wrapped__"), te = U && De.call(o, "__wrapped__");
          if (K || te) {
            var ue = K ? t.value() : t, ne = te ? o.value() : o;
            return h || (h = new or()), d(ue, ne, i, l, h);
          }
        }
        return G ? (h || (h = new or()), fb(t, o, i, l, d, h)) : !1;
      }
      function Py(t) {
        return tt(t) && Ft(t) == Nt;
      }
      function Gc(t, o, i, l) {
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
          var E = $[0], B = t[E], P = $[1];
          if (_ && $[2]) {
            if (B === r && !(E in t))
              return !1;
          } else {
            var U = new or();
            if (l)
              var G = l(B, P, E, t, o, U);
            if (!(G === r ? wa(P, B, O | x, l, U) : G))
              return !1;
          }
        }
        return !0;
      }
      function Vh(t) {
        if (!Je(t) || yb(t))
          return !1;
        var o = Yr(t) ? P$ : ii;
        return o.test(wi(t));
      }
      function Fy(t) {
        return tt(t) && Zt(t) == Nn;
      }
      function Uy(t) {
        return tt(t) && Ft(t) == pt;
      }
      function Wy(t) {
        return tt(t) && iu(t.length) && !!qe[Zt(t)];
      }
      function Eh(t) {
        return typeof t == "function" ? t : t == null ? pn : typeof t == "object" ? se(t) ? kh(t[0], t[1]) : Ih(t) : Ym(t);
      }
      function Yc(t) {
        if (!ga(t))
          return q$(t);
        var o = [];
        for (var i in Ue(t))
          De.call(t, i) && i != "constructor" && o.push(i);
        return o;
      }
      function Hy(t) {
        if (!Je(t))
          return Eb(t);
        var o = ga(t), i = [];
        for (var l in t)
          l == "constructor" && (o || !De.call(t, l)) || i.push(l);
        return i;
      }
      function jc(t, o) {
        return t < o;
      }
      function Sh(t, o) {
        var i = -1, l = dn(t) ? k(t.length) : [];
        return bo(t, function(d, h, _) {
          l[++i] = o(d, h, _);
        }), l;
      }
      function Ih(t) {
        var o = ud(t);
        return o.length == 1 && o[0][2] ? am(o[0][0], o[0][1]) : function(i) {
          return i === t || Gc(i, t, o);
        };
      }
      function kh(t, o) {
        return dd(t) && sm(o) ? am(yr(t), o) : function(i) {
          var l = yd(i, t);
          return l === r && l === o ? bd(i, t) : wa(o, l, O | x);
        };
      }
      function Hl(t, o, i, l, d) {
        t !== o && Wc(o, function(h, _) {
          if (d || (d = new or()), Je(h))
            zy(t, o, _, i, Hl, l, d);
          else {
            var $ = l ? l(pd(t, _), h, _ + "", t, o, d) : r;
            $ === r && ($ = h), Fc(t, _, $);
          }
        }, fn);
      }
      function zy(t, o, i, l, d, h, _) {
        var $ = pd(t, i), E = pd(o, i), B = _.get(E);
        if (B) {
          Fc(t, i, B);
          return;
        }
        var P = h ? h($, E, i + "", t, o, _) : r, U = P === r;
        if (U) {
          var G = se(E), K = !G && So(E), te = !G && !K && ls(E);
          P = E, G || K || te ? se($) ? P = $ : ot($) ? P = cn($) : K ? (U = !1, P = Fh(E, !0)) : te ? (U = !1, P = Uh(E, !0)) : P = [] : ya(E) || vi(E) ? (P = $, vi($) ? P = Rm($) : (!Je($) || Yr($)) && (P = im(E))) : U = !1;
        }
        U && (_.set(E, P), d(P, E, l, h, _), _.delete(E)), Fc(t, i, P);
      }
      function Ah(t, o) {
        var i = t.length;
        if (!!i)
          return o += o < 0 ? i : 0, Gr(o, i) ? t[o] : r;
      }
      function Th(t, o, i) {
        o.length ? o = Ye(o, function(h) {
          return se(h) ? function(_) {
            return hi(_, h.length === 1 ? h[0] : h);
          } : h;
        }) : o = [pn];
        var l = -1;
        o = Ye(o, Cn(ee()));
        var d = Sh(t, function(h, _, $) {
          var E = Ye(o, function(B) {
            return B(h);
          });
          return { criteria: E, index: ++l, value: h };
        });
        return v$(d, function(h, _) {
          return rb(h, _, i);
        });
      }
      function qy(t, o) {
        return xh(t, o, function(i, l) {
          return bd(t, l);
        });
      }
      function xh(t, o, i) {
        for (var l = -1, d = o.length, h = {}; ++l < d; ) {
          var _ = o[l], $ = hi(t, _);
          i($, _) && va(h, Vo(_, t), $);
        }
        return h;
      }
      function Gy(t) {
        return function(o) {
          return hi(o, t);
        };
      }
      function Kc(t, o, i, l) {
        var d = l ? w$ : Ji, h = -1, _ = o.length, $ = t;
        for (t === o && (o = cn(o)), i && ($ = Ye(t, Cn(i))); ++h < _; )
          for (var E = 0, B = o[h], P = i ? i(B) : B; (E = d($, P, E, l)) > -1; )
            $ !== t && Dl.call($, E, 1), Dl.call(t, E, 1);
        return t;
      }
      function Lh(t, o) {
        for (var i = t ? o.length : 0, l = i - 1; i--; ) {
          var d = o[i];
          if (i == l || d !== h) {
            var h = d;
            Gr(d) ? Dl.call(t, d, 1) : Qc(t, d);
          }
        }
        return t;
      }
      function Zc(t, o) {
        return t + Ml(fh() * (o - t + 1));
      }
      function Yy(t, o, i, l) {
        for (var d = -1, h = wt(Nl((o - t) / (i || 1)), 0), _ = k(h); h--; )
          _[l ? h : ++d] = t, t += i;
        return _;
      }
      function Jc(t, o) {
        var i = "";
        if (!t || o < 1 || o > Re)
          return i;
        do
          o % 2 && (i += t), o = Ml(o / 2), o && (t += t);
        while (o);
        return i;
      }
      function fe(t, o) {
        return hd(lm(t, o, pn), t + "");
      }
      function jy(t) {
        return mh(us(t));
      }
      function Ky(t, o) {
        var i = us(t);
        return Ql(i, pi(o, 0, i.length));
      }
      function va(t, o, i, l) {
        if (!Je(t))
          return t;
        o = Vo(o, t);
        for (var d = -1, h = o.length, _ = h - 1, $ = t; $ != null && ++d < h; ) {
          var E = yr(o[d]), B = i;
          if (E === "__proto__" || E === "constructor" || E === "prototype")
            return t;
          if (d != _) {
            var P = $[E];
            B = l ? l(P, E, $) : r, B === r && (B = Je(P) ? P : Gr(o[d + 1]) ? [] : {});
          }
          pa($, E, B), $ = $[E];
        }
        return t;
      }
      var Dh = Rl ? function(t, o) {
        return Rl.set(t, o), t;
      } : pn, Zy = Ol ? function(t, o) {
        return Ol(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Vd(o),
          writable: !0
        });
      } : pn;
      function Jy(t) {
        return Ql(us(t));
      }
      function Hn(t, o, i) {
        var l = -1, d = t.length;
        o < 0 && (o = -o > d ? 0 : d + o), i = i > d ? d : i, i < 0 && (i += d), d = o > i ? 0 : i - o >>> 0, o >>>= 0;
        for (var h = k(d); ++l < d; )
          h[l] = t[l + o];
        return h;
      }
      function Xy(t, o) {
        var i;
        return bo(t, function(l, d, h) {
          return i = o(l, d, h), !i;
        }), !!i;
      }
      function zl(t, o, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof o == "number" && o === o && d <= Qs) {
          for (; l < d; ) {
            var h = l + d >>> 1, _ = t[h];
            _ !== null && !En(_) && (i ? _ <= o : _ < o) ? l = h + 1 : d = h;
          }
          return d;
        }
        return Xc(t, o, pn, i);
      }
      function Xc(t, o, i, l) {
        var d = 0, h = t == null ? 0 : t.length;
        if (h === 0)
          return 0;
        o = i(o);
        for (var _ = o !== o, $ = o === null, E = En(o), B = o === r; d < h; ) {
          var P = Ml((d + h) / 2), U = i(t[P]), G = U !== r, K = U === null, te = U === U, ue = En(U);
          if (_)
            var ne = l || te;
          else
            B ? ne = te && (l || G) : $ ? ne = te && G && (l || !K) : E ? ne = te && G && !K && (l || !ue) : K || ue ? ne = !1 : ne = l ? U <= o : U < o;
          ne ? d = P + 1 : h = P;
        }
        return Pt(h, Xs);
      }
      function Oh(t, o) {
        for (var i = -1, l = t.length, d = 0, h = []; ++i < l; ) {
          var _ = t[i], $ = o ? o(_) : _;
          if (!i || !ir($, E)) {
            var E = $;
            h[d++] = _ === 0 ? 0 : _;
          }
        }
        return h;
      }
      function Nh(t) {
        return typeof t == "number" ? t : En(t) ? xr : +t;
      }
      function Vn(t) {
        if (typeof t == "string")
          return t;
        if (se(t))
          return Ye(t, Vn) + "";
        if (En(t))
          return ph ? ph.call(t) : "";
        var o = t + "";
        return o == "0" && 1 / t == -Ge ? "-0" : o;
      }
      function Co(t, o, i) {
        var l = -1, d = Cl, h = t.length, _ = !0, $ = [], E = $;
        if (i)
          _ = !1, d = Ic;
        else if (h >= a) {
          var B = o ? null : ub(t);
          if (B)
            return El(B);
          _ = !1, d = aa, E = new fi();
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
      function Qc(t, o) {
        return o = Vo(o, t), t = um(t, o), t == null || delete t[yr(zn(o))];
      }
      function Mh(t, o, i, l) {
        return va(t, o, i(hi(t, o)), l);
      }
      function ql(t, o, i, l) {
        for (var d = t.length, h = l ? d : -1; (l ? h-- : ++h < d) && o(t[h], h, t); )
          ;
        return i ? Hn(t, l ? 0 : h, l ? h + 1 : d) : Hn(t, l ? h + 1 : 0, l ? d : h);
      }
      function Rh(t, o) {
        var i = t;
        return i instanceof we && (i = i.value()), kc(o, function(l, d) {
          return d.func.apply(d.thisArg, go([l], d.args));
        }, i);
      }
      function ed(t, o, i) {
        var l = t.length;
        if (l < 2)
          return l ? Co(t[0]) : [];
        for (var d = -1, h = k(l); ++d < l; )
          for (var _ = t[d], $ = -1; ++$ < l; )
            $ != d && (h[d] = ha(h[d] || _, t[$], o, i));
        return Co(It(h, 1), o, i);
      }
      function Bh(t, o, i) {
        for (var l = -1, d = t.length, h = o.length, _ = {}; ++l < d; ) {
          var $ = l < h ? o[l] : r;
          i(_, t[l], $);
        }
        return _;
      }
      function td(t) {
        return ot(t) ? t : [];
      }
      function nd(t) {
        return typeof t == "function" ? t : pn;
      }
      function Vo(t, o) {
        return se(t) ? t : dd(t, o) ? [t] : pm(Ie(t));
      }
      var Qy = fe;
      function Eo(t, o, i) {
        var l = t.length;
        return i = i === r ? l : i, !o && i >= l ? t : Hn(t, o, i);
      }
      var Ph = F$ || function(t) {
        return St.clearTimeout(t);
      };
      function Fh(t, o) {
        if (o)
          return t.slice();
        var i = t.length, l = ah ? ah(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function rd(t) {
        var o = new t.constructor(t.byteLength);
        return new xl(o).set(new xl(t)), o;
      }
      function eb(t, o) {
        var i = o ? rd(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function tb(t) {
        var o = new t.constructor(t.source, ri.exec(t));
        return o.lastIndex = t.lastIndex, o;
      }
      function nb(t) {
        return fa ? Ue(fa.call(t)) : {};
      }
      function Uh(t, o) {
        var i = o ? rd(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function Wh(t, o) {
        if (t !== o) {
          var i = t !== r, l = t === null, d = t === t, h = En(t), _ = o !== r, $ = o === null, E = o === o, B = En(o);
          if (!$ && !B && !h && t > o || h && _ && E && !$ && !B || l && _ && E || !i && E || !d)
            return 1;
          if (!l && !h && !B && t < o || B && i && d && !l && !h || $ && i && d || !_ && d || !E)
            return -1;
        }
        return 0;
      }
      function rb(t, o, i) {
        for (var l = -1, d = t.criteria, h = o.criteria, _ = d.length, $ = i.length; ++l < _; ) {
          var E = Wh(d[l], h[l]);
          if (E) {
            if (l >= $)
              return E;
            var B = i[l];
            return E * (B == "desc" ? -1 : 1);
          }
        }
        return t.index - o.index;
      }
      function Hh(t, o, i, l) {
        for (var d = -1, h = t.length, _ = i.length, $ = -1, E = o.length, B = wt(h - _, 0), P = k(E + B), U = !l; ++$ < E; )
          P[$] = o[$];
        for (; ++d < _; )
          (U || d < h) && (P[i[d]] = t[d]);
        for (; B--; )
          P[$++] = t[d++];
        return P;
      }
      function zh(t, o, i, l) {
        for (var d = -1, h = t.length, _ = -1, $ = i.length, E = -1, B = o.length, P = wt(h - $, 0), U = k(P + B), G = !l; ++d < P; )
          U[d] = t[d];
        for (var K = d; ++E < B; )
          U[K + E] = o[E];
        for (; ++_ < $; )
          (G || d < h) && (U[K + i[_]] = t[d++]);
        return U;
      }
      function cn(t, o) {
        var i = -1, l = t.length;
        for (o || (o = k(l)); ++i < l; )
          o[i] = t[i];
        return o;
      }
      function $r(t, o, i, l) {
        var d = !i;
        i || (i = {});
        for (var h = -1, _ = o.length; ++h < _; ) {
          var $ = o[h], E = l ? l(i[$], t[$], $, i, t) : r;
          E === r && (E = t[$]), d ? Hr(i, $, E) : pa(i, $, E);
        }
        return i;
      }
      function ob(t, o) {
        return $r(t, cd(t), o);
      }
      function ib(t, o) {
        return $r(t, rm(t), o);
      }
      function Gl(t, o) {
        return function(i, l) {
          var d = se(i) ? c$ : Iy, h = o ? o() : {};
          return d(i, t, ee(l, 2), h);
        };
      }
      function is(t) {
        return fe(function(o, i) {
          var l = -1, d = i.length, h = d > 1 ? i[d - 1] : r, _ = d > 2 ? i[2] : r;
          for (h = t.length > 3 && typeof h == "function" ? (d--, h) : r, _ && Jt(i[0], i[1], _) && (h = d < 3 ? r : h, d = 1), o = Ue(o); ++l < d; ) {
            var $ = i[l];
            $ && t(o, $, l, h);
          }
          return o;
        });
      }
      function qh(t, o) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!dn(i))
            return t(i, l);
          for (var d = i.length, h = o ? d : -1, _ = Ue(i); (o ? h-- : ++h < d) && l(_[h], h, _) !== !1; )
            ;
          return i;
        };
      }
      function Gh(t) {
        return function(o, i, l) {
          for (var d = -1, h = Ue(o), _ = l(o), $ = _.length; $--; ) {
            var E = _[t ? $ : ++d];
            if (i(h[E], E, h) === !1)
              break;
          }
          return o;
        };
      }
      function sb(t, o, i) {
        var l = o & D, d = _a(t);
        function h() {
          var _ = this && this !== St && this instanceof h ? d : t;
          return _.apply(l ? i : this, arguments);
        }
        return h;
      }
      function Yh(t) {
        return function(o) {
          o = Ie(o);
          var i = Xi(o) ? rr(o) : r, l = i ? i[0] : o.charAt(0), d = i ? Eo(i, 1).join("") : o.slice(1);
          return l[t]() + d;
        };
      }
      function ss(t) {
        return function(o) {
          return kc(qm(zm(o).replace(Z0, "")), t, "");
        };
      }
      function _a(t) {
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
          var i = os(t.prototype), l = t.apply(i, o);
          return Je(l) ? l : i;
        };
      }
      function ab(t, o, i) {
        var l = _a(t);
        function d() {
          for (var h = arguments.length, _ = k(h), $ = h, E = as(d); $--; )
            _[$] = arguments[$];
          var B = h < 3 && _[0] !== E && _[h - 1] !== E ? [] : $o(_, E);
          if (h -= B.length, h < i)
            return Xh(
              t,
              o,
              Yl,
              d.placeholder,
              r,
              _,
              B,
              r,
              r,
              i - h
            );
          var P = this && this !== St && this instanceof d ? l : t;
          return bn(P, this, _);
        }
        return d;
      }
      function jh(t) {
        return function(o, i, l) {
          var d = Ue(o);
          if (!dn(o)) {
            var h = ee(i, 3);
            o = $t(o), i = function($) {
              return h(d[$], $, d);
            };
          }
          var _ = t(o, i, l);
          return _ > -1 ? d[h ? o[_] : _] : r;
        };
      }
      function Kh(t) {
        return qr(function(o) {
          var i = o.length, l = i, d = Un.prototype.thru;
          for (t && o.reverse(); l--; ) {
            var h = o[l];
            if (typeof h != "function")
              throw new Fn(c);
            if (d && !_ && Jl(h) == "wrapper")
              var _ = new Un([], !0);
          }
          for (l = _ ? l : i; ++l < i; ) {
            h = o[l];
            var $ = Jl(h), E = $ == "wrapper" ? ld(h) : r;
            E && fd(E[0]) && E[1] == (L | T | F | X) && !E[4].length && E[9] == 1 ? _ = _[Jl(E[0])].apply(_, E[3]) : _ = h.length == 1 && fd(h) ? _[$]() : _.thru(h);
          }
          return function() {
            var B = arguments, P = B[0];
            if (_ && B.length == 1 && se(P))
              return _.plant(P).value();
            for (var U = 0, G = i ? o[U].apply(this, B) : P; ++U < i; )
              G = o[U].call(this, G);
            return G;
          };
        });
      }
      function Yl(t, o, i, l, d, h, _, $, E, B) {
        var P = o & L, U = o & D, G = o & S, K = o & (T | R), te = o & Me, ue = G ? r : _a(t);
        function ne() {
          for (var me = arguments.length, ge = k(me), Sn = me; Sn--; )
            ge[Sn] = arguments[Sn];
          if (K)
            var Xt = as(ne), In = g$(ge, Xt);
          if (l && (ge = Hh(ge, l, d, K)), h && (ge = zh(ge, h, _, K)), me -= In, K && me < B) {
            var it = $o(ge, Xt);
            return Xh(
              t,
              o,
              Yl,
              ne.placeholder,
              i,
              ge,
              it,
              $,
              E,
              B - me
            );
          }
          var sr = U ? i : this, Kr = G ? sr[t] : t;
          return me = ge.length, $ ? ge = Ib(ge, $) : te && me > 1 && ge.reverse(), P && E < me && (ge.length = E), this && this !== St && this instanceof ne && (Kr = ue || _a(Kr)), Kr.apply(sr, ge);
        }
        return ne;
      }
      function Zh(t, o) {
        return function(i, l) {
          return Ny(i, t, o(l), {});
        };
      }
      function jl(t, o) {
        return function(i, l) {
          var d;
          if (i === r && l === r)
            return o;
          if (i !== r && (d = i), l !== r) {
            if (d === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = Vn(i), l = Vn(l)) : (i = Nh(i), l = Nh(l)), d = t(i, l);
          }
          return d;
        };
      }
      function od(t) {
        return qr(function(o) {
          return o = Ye(o, Cn(ee())), fe(function(i) {
            var l = this;
            return t(o, function(d) {
              return bn(d, l, i);
            });
          });
        });
      }
      function Kl(t, o) {
        o = o === r ? " " : Vn(o);
        var i = o.length;
        if (i < 2)
          return i ? Jc(o, t) : o;
        var l = Jc(o, Nl(t / Qi(o)));
        return Xi(o) ? Eo(rr(l), 0, t).join("") : l.slice(0, t);
      }
      function lb(t, o, i, l) {
        var d = o & D, h = _a(t);
        function _() {
          for (var $ = -1, E = arguments.length, B = -1, P = l.length, U = k(P + E), G = this && this !== St && this instanceof _ ? h : t; ++B < P; )
            U[B] = l[B];
          for (; E--; )
            U[B++] = arguments[++$];
          return bn(G, d ? i : this, U);
        }
        return _;
      }
      function Jh(t) {
        return function(o, i, l) {
          return l && typeof l != "number" && Jt(o, i, l) && (i = l = r), o = jr(o), i === r ? (i = o, o = 0) : i = jr(i), l = l === r ? o < i ? 1 : -1 : jr(l), Yy(o, i, l, t);
        };
      }
      function Zl(t) {
        return function(o, i) {
          return typeof o == "string" && typeof i == "string" || (o = qn(o), i = qn(i)), t(o, i);
        };
      }
      function Xh(t, o, i, l, d, h, _, $, E, B) {
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
          B
        ], ne = i.apply(r, ue);
        return fd(t) && cm(ne, ue), ne.placeholder = l, dm(ne, t, o);
      }
      function id(t) {
        var o = mt[t];
        return function(i, l) {
          if (i = qn(i), l = l == null ? 0 : Pt(le(l), 292), l && dh(i)) {
            var d = (Ie(i) + "e").split("e"), h = o(d[0] + "e" + (+d[1] + l));
            return d = (Ie(h) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return o(i);
        };
      }
      var ub = ns && 1 / El(new ns([, -0]))[1] == Ge ? function(t) {
        return new ns(t);
      } : Id;
      function Qh(t) {
        return function(o) {
          var i = Ft(o);
          return i == Nt ? Nc(o) : i == pt ? S$(o) : _$(o, t(o));
        };
      }
      function zr(t, o, i, l, d, h, _, $) {
        var E = o & S;
        if (!E && typeof t != "function")
          throw new Fn(c);
        var B = l ? l.length : 0;
        if (B || (o &= ~(F | W), l = d = r), _ = _ === r ? _ : wt(le(_), 0), $ = $ === r ? $ : le($), B -= d ? d.length : 0, o & W) {
          var P = l, U = d;
          l = d = r;
        }
        var G = E ? r : ld(t), K = [
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
        if (G && Vb(K, G), t = K[0], o = K[1], i = K[2], l = K[3], d = K[4], $ = K[9] = K[9] === r ? E ? 0 : t.length : wt(K[9] - B, 0), !$ && o & (T | R) && (o &= ~(T | R)), !o || o == D)
          var te = sb(t, o, i);
        else
          o == T || o == R ? te = ab(t, o, $) : (o == F || o == (D | F)) && !d.length ? te = lb(t, o, i, l) : te = Yl.apply(r, K);
        var ue = G ? Dh : cm;
        return dm(ue(te, K), t, o);
      }
      function em(t, o, i, l) {
        return t === r || ir(t, ts[i]) && !De.call(l, i) ? o : t;
      }
      function tm(t, o, i, l, d, h) {
        return Je(t) && Je(o) && (h.set(o, t), Hl(t, o, r, tm, h), h.delete(o)), t;
      }
      function cb(t) {
        return ya(t) ? r : t;
      }
      function nm(t, o, i, l, d, h) {
        var _ = i & O, $ = t.length, E = o.length;
        if ($ != E && !(_ && E > $))
          return !1;
        var B = h.get(t), P = h.get(o);
        if (B && P)
          return B == o && P == t;
        var U = -1, G = !0, K = i & x ? new fi() : r;
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
            if (!Ac(o, function(me, ge) {
              if (!aa(K, ge) && (te === me || d(te, me, i, l, h)))
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
      function db(t, o, i, l, d, h, _) {
        switch (i) {
          case $n:
            if (t.byteLength != o.byteLength || t.byteOffset != o.byteOffset)
              return !1;
            t = t.buffer, o = o.buffer;
          case Xn:
            return !(t.byteLength != o.byteLength || !h(new xl(t), new xl(o)));
          case gn:
          case an:
          case be:
            return ir(+t, +o);
          case xe:
            return t.name == o.name && t.message == o.message;
          case Nn:
          case hr:
            return t == o + "";
          case Nt:
            var $ = Nc;
          case pt:
            var E = l & O;
            if ($ || ($ = El), t.size != o.size && !E)
              return !1;
            var B = _.get(t);
            if (B)
              return B == o;
            l |= x, _.set(t, o);
            var P = nm($(t), $(o), l, d, h, _);
            return _.delete(t), P;
          case ht:
            if (fa)
              return fa.call(t) == fa.call(o);
        }
        return !1;
      }
      function fb(t, o, i, l, d, h) {
        var _ = i & O, $ = sd(t), E = $.length, B = sd(o), P = B.length;
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
            var Sn = _ ? l(ge, me, G, o, t, h) : l(me, ge, G, t, o, h);
          if (!(Sn === r ? me === ge || d(me, ge, i, l, h) : Sn)) {
            ue = !1;
            break;
          }
          ne || (ne = G == "constructor");
        }
        if (ue && !ne) {
          var Xt = t.constructor, In = o.constructor;
          Xt != In && "constructor" in t && "constructor" in o && !(typeof Xt == "function" && Xt instanceof Xt && typeof In == "function" && In instanceof In) && (ue = !1);
        }
        return h.delete(t), h.delete(o), ue;
      }
      function qr(t) {
        return hd(lm(t, r, vm), t + "");
      }
      function sd(t) {
        return bh(t, $t, cd);
      }
      function ad(t) {
        return bh(t, fn, rm);
      }
      var ld = Rl ? function(t) {
        return Rl.get(t);
      } : Id;
      function Jl(t) {
        for (var o = t.name + "", i = rs[o], l = De.call(rs, o) ? i.length : 0; l--; ) {
          var d = i[l], h = d.func;
          if (h == null || h == t)
            return d.name;
        }
        return o;
      }
      function as(t) {
        var o = De.call(p, "placeholder") ? p : t;
        return o.placeholder;
      }
      function ee() {
        var t = p.iteratee || Ed;
        return t = t === Ed ? Eh : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Xl(t, o) {
        var i = t.__data__;
        return $b(o) ? i[typeof o == "string" ? "string" : "hash"] : i.map;
      }
      function ud(t) {
        for (var o = $t(t), i = o.length; i--; ) {
          var l = o[i], d = t[l];
          o[i] = [l, d, sm(d)];
        }
        return o;
      }
      function mi(t, o) {
        var i = C$(t, o);
        return Vh(i) ? i : r;
      }
      function pb(t) {
        var o = De.call(t, ci), i = t[ci];
        try {
          t[ci] = r;
          var l = !0;
        } catch {
        }
        var d = Al.call(t);
        return l && (o ? t[ci] = i : delete t[ci]), d;
      }
      var cd = Rc ? function(t) {
        return t == null ? [] : (t = Ue(t), _o(Rc(t), function(o) {
          return uh.call(t, o);
        }));
      } : kd, rm = Rc ? function(t) {
        for (var o = []; t; )
          go(o, cd(t)), t = Ll(t);
        return o;
      } : kd, Ft = Zt;
      (Bc && Ft(new Bc(new ArrayBuffer(1))) != $n || ua && Ft(new ua()) != Nt || Pc && Ft(Pc.resolve()) != Mt || ns && Ft(new ns()) != pt || ca && Ft(new ca()) != Yt) && (Ft = function(t) {
        var o = Zt(t), i = o == Vt ? t.constructor : r, l = i ? wi(i) : "";
        if (l)
          switch (l) {
            case K$:
              return $n;
            case Z$:
              return Nt;
            case J$:
              return Mt;
            case X$:
              return pt;
            case Q$:
              return Yt;
          }
        return o;
      });
      function hb(t, o, i) {
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
              o = Pt(o, t + _);
              break;
            case "takeRight":
              t = wt(t, o - _);
              break;
          }
        }
        return { start: t, end: o };
      }
      function mb(t) {
        var o = t.match(zi);
        return o ? o[1].split(re) : [];
      }
      function om(t, o, i) {
        o = Vo(o, t);
        for (var l = -1, d = o.length, h = !1; ++l < d; ) {
          var _ = yr(o[l]);
          if (!(h = t != null && i(t, _)))
            break;
          t = t[_];
        }
        return h || ++l != d ? h : (d = t == null ? 0 : t.length, !!d && iu(d) && Gr(_, d) && (se(t) || vi(t)));
      }
      function wb(t) {
        var o = t.length, i = new t.constructor(o);
        return o && typeof t[0] == "string" && De.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function im(t) {
        return typeof t.constructor == "function" && !ga(t) ? os(Ll(t)) : {};
      }
      function vb(t, o, i) {
        var l = t.constructor;
        switch (o) {
          case Xn:
            return rd(t);
          case gn:
          case an:
            return new l(+t);
          case $n:
            return eb(t, i);
          case mr:
          case yn:
          case Qn:
          case er:
          case Or:
          case Nr:
          case Mr:
          case wr:
          case vr:
            return Uh(t, i);
          case Nt:
            return new l();
          case be:
          case hr:
            return new l(t);
          case Nn:
            return tb(t);
          case pt:
            return new l();
          case ht:
            return nb(t);
        }
      }
      function _b(t, o) {
        var i = o.length;
        if (!i)
          return t;
        var l = i - 1;
        return o[l] = (i > 1 ? "& " : "") + o[l], o = o.join(i > 2 ? ", " : " "), t.replace(co, `{
/* [wrapped with ` + o + `] */
`);
      }
      function gb(t) {
        return se(t) || vi(t) || !!(ch && t && t[ch]);
      }
      function Gr(t, o) {
        var i = typeof t;
        return o = o == null ? Re : o, !!o && (i == "number" || i != "symbol" && qi.test(t)) && t > -1 && t % 1 == 0 && t < o;
      }
      function Jt(t, o, i) {
        if (!Je(i))
          return !1;
        var l = typeof o;
        return (l == "number" ? dn(i) && Gr(o, i.length) : l == "string" && o in i) ? ir(i[o], t) : !1;
      }
      function dd(t, o) {
        if (se(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || En(t) ? !0 : ao.test(t) || !nr.test(t) || o != null && t in Ue(o);
      }
      function $b(t) {
        var o = typeof t;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? t !== "__proto__" : t === null;
      }
      function fd(t) {
        var o = Jl(t), i = p[o];
        if (typeof i != "function" || !(o in we.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = ld(i);
        return !!l && t === l[0];
      }
      function yb(t) {
        return !!sh && sh in t;
      }
      var bb = Il ? Yr : Ad;
      function ga(t) {
        var o = t && t.constructor, i = typeof o == "function" && o.prototype || ts;
        return t === i;
      }
      function sm(t) {
        return t === t && !Je(t);
      }
      function am(t, o) {
        return function(i) {
          return i == null ? !1 : i[t] === o && (o !== r || t in Ue(i));
        };
      }
      function Cb(t) {
        var o = ru(t, function(l) {
          return i.size === w && i.clear(), l;
        }), i = o.cache;
        return o;
      }
      function Vb(t, o) {
        var i = t[1], l = o[1], d = i | l, h = d < (D | S | L), _ = l == L && i == T || l == L && i == X && t[7].length <= o[8] || l == (L | X) && o[7].length <= o[8] && i == T;
        if (!(h || _))
          return t;
        l & D && (t[2] = o[2], d |= i & D ? 0 : A);
        var $ = o[3];
        if ($) {
          var E = t[3];
          t[3] = E ? Hh(E, $, o[4]) : $, t[4] = E ? $o(t[3], g) : o[4];
        }
        return $ = o[5], $ && (E = t[5], t[5] = E ? zh(E, $, o[6]) : $, t[6] = E ? $o(t[5], g) : o[6]), $ = o[7], $ && (t[7] = $), l & L && (t[8] = t[8] == null ? o[8] : Pt(t[8], o[8])), t[9] == null && (t[9] = o[9]), t[0] = o[0], t[1] = d, t;
      }
      function Eb(t) {
        var o = [];
        if (t != null)
          for (var i in Ue(t))
            o.push(i);
        return o;
      }
      function Sb(t) {
        return Al.call(t);
      }
      function lm(t, o, i) {
        return o = wt(o === r ? t.length - 1 : o, 0), function() {
          for (var l = arguments, d = -1, h = wt(l.length - o, 0), _ = k(h); ++d < h; )
            _[d] = l[o + d];
          d = -1;
          for (var $ = k(o + 1); ++d < o; )
            $[d] = l[d];
          return $[o] = i(_), bn(t, this, $);
        };
      }
      function um(t, o) {
        return o.length < 2 ? t : hi(t, Hn(o, 0, -1));
      }
      function Ib(t, o) {
        for (var i = t.length, l = Pt(o.length, i), d = cn(t); l--; ) {
          var h = o[l];
          t[l] = Gr(h, i) ? d[h] : r;
        }
        return t;
      }
      function pd(t, o) {
        if (!(o === "constructor" && typeof t[o] == "function") && o != "__proto__")
          return t[o];
      }
      var cm = fm(Dh), $a = W$ || function(t, o) {
        return St.setTimeout(t, o);
      }, hd = fm(Zy);
      function dm(t, o, i) {
        var l = o + "";
        return hd(t, _b(l, kb(mb(l), i)));
      }
      function fm(t) {
        var o = 0, i = 0;
        return function() {
          var l = G$(), d = et - (l - i);
          if (i = l, d > 0) {
            if (++o >= Qe)
              return arguments[0];
          } else
            o = 0;
          return t.apply(r, arguments);
        };
      }
      function Ql(t, o) {
        var i = -1, l = t.length, d = l - 1;
        for (o = o === r ? l : o; ++i < o; ) {
          var h = Zc(i, d), _ = t[h];
          t[h] = t[i], t[i] = _;
        }
        return t.length = o, t;
      }
      var pm = Cb(function(t) {
        var o = [];
        return t.charCodeAt(0) === 46 && o.push(""), t.replace(lo, function(i, l, d, h) {
          o.push(d ? h.replace(Q, "$1") : l || i);
        }), o;
      });
      function yr(t) {
        if (typeof t == "string" || En(t))
          return t;
        var o = t + "";
        return o == "0" && 1 / t == -Ge ? "-0" : o;
      }
      function wi(t) {
        if (t != null) {
          try {
            return kl.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function kb(t, o) {
        return Pn(Hi, function(i) {
          var l = "_." + i[0];
          o & i[1] && !Cl(t, l) && t.push(l);
        }), t.sort();
      }
      function hm(t) {
        if (t instanceof we)
          return t.clone();
        var o = new Un(t.__wrapped__, t.__chain__);
        return o.__actions__ = cn(t.__actions__), o.__index__ = t.__index__, o.__values__ = t.__values__, o;
      }
      function Ab(t, o, i) {
        (i ? Jt(t, o, i) : o === r) ? o = 1 : o = wt(le(o), 0);
        var l = t == null ? 0 : t.length;
        if (!l || o < 1)
          return [];
        for (var d = 0, h = 0, _ = k(Nl(l / o)); d < l; )
          _[h++] = Hn(t, d, d += o);
        return _;
      }
      function Tb(t) {
        for (var o = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++o < i; ) {
          var h = t[o];
          h && (d[l++] = h);
        }
        return d;
      }
      function xb() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var o = k(t - 1), i = arguments[0], l = t; l--; )
          o[l - 1] = arguments[l];
        return go(se(i) ? cn(i) : [i], It(o, 1));
      }
      var Lb = fe(function(t, o) {
        return ot(t) ? ha(t, It(o, 1, ot, !0)) : [];
      }), Db = fe(function(t, o) {
        var i = zn(o);
        return ot(i) && (i = r), ot(t) ? ha(t, It(o, 1, ot, !0), ee(i, 2)) : [];
      }), Ob = fe(function(t, o) {
        var i = zn(o);
        return ot(i) && (i = r), ot(t) ? ha(t, It(o, 1, ot, !0), r, i) : [];
      });
      function Nb(t, o, i) {
        var l = t == null ? 0 : t.length;
        return l ? (o = i || o === r ? 1 : le(o), Hn(t, o < 0 ? 0 : o, l)) : [];
      }
      function Mb(t, o, i) {
        var l = t == null ? 0 : t.length;
        return l ? (o = i || o === r ? 1 : le(o), o = l - o, Hn(t, 0, o < 0 ? 0 : o)) : [];
      }
      function Rb(t, o) {
        return t && t.length ? ql(t, ee(o, 3), !0, !0) : [];
      }
      function Bb(t, o) {
        return t && t.length ? ql(t, ee(o, 3), !0) : [];
      }
      function Pb(t, o, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && Jt(t, o, i) && (i = 0, l = d), xy(t, o, i, l)) : [];
      }
      function mm(t, o, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : le(i);
        return d < 0 && (d = wt(l + d, 0)), Vl(t, ee(o, 3), d);
      }
      function wm(t, o, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== r && (d = le(i), d = i < 0 ? wt(l + d, 0) : Pt(d, l - 1)), Vl(t, ee(o, 3), d, !0);
      }
      function vm(t) {
        var o = t == null ? 0 : t.length;
        return o ? It(t, 1) : [];
      }
      function Fb(t) {
        var o = t == null ? 0 : t.length;
        return o ? It(t, Ge) : [];
      }
      function Ub(t, o) {
        var i = t == null ? 0 : t.length;
        return i ? (o = o === r ? 1 : le(o), It(t, o)) : [];
      }
      function Wb(t) {
        for (var o = -1, i = t == null ? 0 : t.length, l = {}; ++o < i; ) {
          var d = t[o];
          l[d[0]] = d[1];
        }
        return l;
      }
      function _m(t) {
        return t && t.length ? t[0] : r;
      }
      function Hb(t, o, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : le(i);
        return d < 0 && (d = wt(l + d, 0)), Ji(t, o, d);
      }
      function zb(t) {
        var o = t == null ? 0 : t.length;
        return o ? Hn(t, 0, -1) : [];
      }
      var qb = fe(function(t) {
        var o = Ye(t, td);
        return o.length && o[0] === t[0] ? qc(o) : [];
      }), Gb = fe(function(t) {
        var o = zn(t), i = Ye(t, td);
        return o === zn(i) ? o = r : i.pop(), i.length && i[0] === t[0] ? qc(i, ee(o, 2)) : [];
      }), Yb = fe(function(t) {
        var o = zn(t), i = Ye(t, td);
        return o = typeof o == "function" ? o : r, o && i.pop(), i.length && i[0] === t[0] ? qc(i, r, o) : [];
      });
      function jb(t, o) {
        return t == null ? "" : z$.call(t, o);
      }
      function zn(t) {
        var o = t == null ? 0 : t.length;
        return o ? t[o - 1] : r;
      }
      function Kb(t, o, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== r && (d = le(i), d = d < 0 ? wt(l + d, 0) : Pt(d, l - 1)), o === o ? k$(t, o, d) : Vl(t, Xp, d, !0);
      }
      function Zb(t, o) {
        return t && t.length ? Ah(t, le(o)) : r;
      }
      var Jb = fe(gm);
      function gm(t, o) {
        return t && t.length && o && o.length ? Kc(t, o) : t;
      }
      function Xb(t, o, i) {
        return t && t.length && o && o.length ? Kc(t, o, ee(i, 2)) : t;
      }
      function Qb(t, o, i) {
        return t && t.length && o && o.length ? Kc(t, o, r, i) : t;
      }
      var eC = qr(function(t, o) {
        var i = t == null ? 0 : t.length, l = Uc(t, o);
        return Lh(t, Ye(o, function(d) {
          return Gr(d, i) ? +d : d;
        }).sort(Wh)), l;
      });
      function tC(t, o) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, d = [], h = t.length;
        for (o = ee(o, 3); ++l < h; ) {
          var _ = t[l];
          o(_, l, t) && (i.push(_), d.push(l));
        }
        return Lh(t, d), i;
      }
      function md(t) {
        return t == null ? t : j$.call(t);
      }
      function nC(t, o, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && Jt(t, o, i) ? (o = 0, i = l) : (o = o == null ? 0 : le(o), i = i === r ? l : le(i)), Hn(t, o, i)) : [];
      }
      function rC(t, o) {
        return zl(t, o);
      }
      function oC(t, o, i) {
        return Xc(t, o, ee(i, 2));
      }
      function iC(t, o) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = zl(t, o);
          if (l < i && ir(t[l], o))
            return l;
        }
        return -1;
      }
      function sC(t, o) {
        return zl(t, o, !0);
      }
      function aC(t, o, i) {
        return Xc(t, o, ee(i, 2), !0);
      }
      function lC(t, o) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = zl(t, o, !0) - 1;
          if (ir(t[l], o))
            return l;
        }
        return -1;
      }
      function uC(t) {
        return t && t.length ? Oh(t) : [];
      }
      function cC(t, o) {
        return t && t.length ? Oh(t, ee(o, 2)) : [];
      }
      function dC(t) {
        var o = t == null ? 0 : t.length;
        return o ? Hn(t, 1, o) : [];
      }
      function fC(t, o, i) {
        return t && t.length ? (o = i || o === r ? 1 : le(o), Hn(t, 0, o < 0 ? 0 : o)) : [];
      }
      function pC(t, o, i) {
        var l = t == null ? 0 : t.length;
        return l ? (o = i || o === r ? 1 : le(o), o = l - o, Hn(t, o < 0 ? 0 : o, l)) : [];
      }
      function hC(t, o) {
        return t && t.length ? ql(t, ee(o, 3), !1, !0) : [];
      }
      function mC(t, o) {
        return t && t.length ? ql(t, ee(o, 3)) : [];
      }
      var wC = fe(function(t) {
        return Co(It(t, 1, ot, !0));
      }), vC = fe(function(t) {
        var o = zn(t);
        return ot(o) && (o = r), Co(It(t, 1, ot, !0), ee(o, 2));
      }), _C = fe(function(t) {
        var o = zn(t);
        return o = typeof o == "function" ? o : r, Co(It(t, 1, ot, !0), r, o);
      });
      function gC(t) {
        return t && t.length ? Co(t) : [];
      }
      function $C(t, o) {
        return t && t.length ? Co(t, ee(o, 2)) : [];
      }
      function yC(t, o) {
        return o = typeof o == "function" ? o : r, t && t.length ? Co(t, r, o) : [];
      }
      function wd(t) {
        if (!(t && t.length))
          return [];
        var o = 0;
        return t = _o(t, function(i) {
          if (ot(i))
            return o = wt(i.length, o), !0;
        }), Dc(o, function(i) {
          return Ye(t, Tc(i));
        });
      }
      function $m(t, o) {
        if (!(t && t.length))
          return [];
        var i = wd(t);
        return o == null ? i : Ye(i, function(l) {
          return bn(o, r, l);
        });
      }
      var bC = fe(function(t, o) {
        return ot(t) ? ha(t, o) : [];
      }), CC = fe(function(t) {
        return ed(_o(t, ot));
      }), VC = fe(function(t) {
        var o = zn(t);
        return ot(o) && (o = r), ed(_o(t, ot), ee(o, 2));
      }), EC = fe(function(t) {
        var o = zn(t);
        return o = typeof o == "function" ? o : r, ed(_o(t, ot), r, o);
      }), SC = fe(wd);
      function IC(t, o) {
        return Bh(t || [], o || [], pa);
      }
      function kC(t, o) {
        return Bh(t || [], o || [], va);
      }
      var AC = fe(function(t) {
        var o = t.length, i = o > 1 ? t[o - 1] : r;
        return i = typeof i == "function" ? (t.pop(), i) : r, $m(t, i);
      });
      function ym(t) {
        var o = p(t);
        return o.__chain__ = !0, o;
      }
      function TC(t, o) {
        return o(t), t;
      }
      function eu(t, o) {
        return o(t);
      }
      var xC = qr(function(t) {
        var o = t.length, i = o ? t[0] : 0, l = this.__wrapped__, d = function(h) {
          return Uc(h, t);
        };
        return o > 1 || this.__actions__.length || !(l instanceof we) || !Gr(i) ? this.thru(d) : (l = l.slice(i, +i + (o ? 1 : 0)), l.__actions__.push({
          func: eu,
          args: [d],
          thisArg: r
        }), new Un(l, this.__chain__).thru(function(h) {
          return o && !h.length && h.push(r), h;
        }));
      });
      function LC() {
        return ym(this);
      }
      function DC() {
        return new Un(this.value(), this.__chain__);
      }
      function OC() {
        this.__values__ === r && (this.__values__ = Nm(this.value()));
        var t = this.__index__ >= this.__values__.length, o = t ? r : this.__values__[this.__index__++];
        return { done: t, value: o };
      }
      function NC() {
        return this;
      }
      function MC(t) {
        for (var o, i = this; i instanceof Pl; ) {
          var l = hm(i);
          l.__index__ = 0, l.__values__ = r, o ? d.__wrapped__ = l : o = l;
          var d = l;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = t, o;
      }
      function RC() {
        var t = this.__wrapped__;
        if (t instanceof we) {
          var o = t;
          return this.__actions__.length && (o = new we(this)), o = o.reverse(), o.__actions__.push({
            func: eu,
            args: [md],
            thisArg: r
          }), new Un(o, this.__chain__);
        }
        return this.thru(md);
      }
      function BC() {
        return Rh(this.__wrapped__, this.__actions__);
      }
      var PC = Gl(function(t, o, i) {
        De.call(t, i) ? ++t[i] : Hr(t, i, 1);
      });
      function FC(t, o, i) {
        var l = se(t) ? Zp : Ty;
        return i && Jt(t, o, i) && (o = r), l(t, ee(o, 3));
      }
      function UC(t, o) {
        var i = se(t) ? _o : $h;
        return i(t, ee(o, 3));
      }
      var WC = jh(mm), HC = jh(wm);
      function zC(t, o) {
        return It(tu(t, o), 1);
      }
      function qC(t, o) {
        return It(tu(t, o), Ge);
      }
      function GC(t, o, i) {
        return i = i === r ? 1 : le(i), It(tu(t, o), i);
      }
      function bm(t, o) {
        var i = se(t) ? Pn : bo;
        return i(t, ee(o, 3));
      }
      function Cm(t, o) {
        var i = se(t) ? d$ : gh;
        return i(t, ee(o, 3));
      }
      var YC = Gl(function(t, o, i) {
        De.call(t, i) ? t[i].push(o) : Hr(t, i, [o]);
      });
      function jC(t, o, i, l) {
        t = dn(t) ? t : us(t), i = i && !l ? le(i) : 0;
        var d = t.length;
        return i < 0 && (i = wt(d + i, 0)), su(t) ? i <= d && t.indexOf(o, i) > -1 : !!d && Ji(t, o, i) > -1;
      }
      var KC = fe(function(t, o, i) {
        var l = -1, d = typeof o == "function", h = dn(t) ? k(t.length) : [];
        return bo(t, function(_) {
          h[++l] = d ? bn(o, _, i) : ma(_, o, i);
        }), h;
      }), ZC = Gl(function(t, o, i) {
        Hr(t, i, o);
      });
      function tu(t, o) {
        var i = se(t) ? Ye : Sh;
        return i(t, ee(o, 3));
      }
      function JC(t, o, i, l) {
        return t == null ? [] : (se(o) || (o = o == null ? [] : [o]), i = l ? r : i, se(i) || (i = i == null ? [] : [i]), Th(t, o, i));
      }
      var XC = Gl(function(t, o, i) {
        t[i ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function QC(t, o, i) {
        var l = se(t) ? kc : eh, d = arguments.length < 3;
        return l(t, ee(o, 4), i, d, bo);
      }
      function eV(t, o, i) {
        var l = se(t) ? f$ : eh, d = arguments.length < 3;
        return l(t, ee(o, 4), i, d, gh);
      }
      function tV(t, o) {
        var i = se(t) ? _o : $h;
        return i(t, ou(ee(o, 3)));
      }
      function nV(t) {
        var o = se(t) ? mh : jy;
        return o(t);
      }
      function rV(t, o, i) {
        (i ? Jt(t, o, i) : o === r) ? o = 1 : o = le(o);
        var l = se(t) ? Ey : Ky;
        return l(t, o);
      }
      function oV(t) {
        var o = se(t) ? Sy : Jy;
        return o(t);
      }
      function iV(t) {
        if (t == null)
          return 0;
        if (dn(t))
          return su(t) ? Qi(t) : t.length;
        var o = Ft(t);
        return o == Nt || o == pt ? t.size : Yc(t).length;
      }
      function sV(t, o, i) {
        var l = se(t) ? Ac : Xy;
        return i && Jt(t, o, i) && (o = r), l(t, ee(o, 3));
      }
      var aV = fe(function(t, o) {
        if (t == null)
          return [];
        var i = o.length;
        return i > 1 && Jt(t, o[0], o[1]) ? o = [] : i > 2 && Jt(o[0], o[1], o[2]) && (o = [o[0]]), Th(t, It(o, 1), []);
      }), nu = U$ || function() {
        return St.Date.now();
      };
      function lV(t, o) {
        if (typeof o != "function")
          throw new Fn(c);
        return t = le(t), function() {
          if (--t < 1)
            return o.apply(this, arguments);
        };
      }
      function Vm(t, o, i) {
        return o = i ? r : o, o = t && o == null ? t.length : o, zr(t, L, r, r, r, r, o);
      }
      function Em(t, o) {
        var i;
        if (typeof o != "function")
          throw new Fn(c);
        return t = le(t), function() {
          return --t > 0 && (i = o.apply(this, arguments)), t <= 1 && (o = r), i;
        };
      }
      var vd = fe(function(t, o, i) {
        var l = D;
        if (i.length) {
          var d = $o(i, as(vd));
          l |= F;
        }
        return zr(t, l, o, i, d);
      }), Sm = fe(function(t, o, i) {
        var l = D | S;
        if (i.length) {
          var d = $o(i, as(Sm));
          l |= F;
        }
        return zr(o, l, t, i, d);
      });
      function Im(t, o, i) {
        o = i ? r : o;
        var l = zr(t, T, r, r, r, r, r, o);
        return l.placeholder = Im.placeholder, l;
      }
      function km(t, o, i) {
        o = i ? r : o;
        var l = zr(t, R, r, r, r, r, r, o);
        return l.placeholder = km.placeholder, l;
      }
      function Am(t, o, i) {
        var l, d, h, _, $, E, B = 0, P = !1, U = !1, G = !0;
        if (typeof t != "function")
          throw new Fn(c);
        o = qn(o) || 0, Je(i) && (P = !!i.leading, U = "maxWait" in i, h = U ? wt(qn(i.maxWait) || 0, o) : h, G = "trailing" in i ? !!i.trailing : G);
        function K(it) {
          var sr = l, Kr = d;
          return l = d = r, B = it, _ = t.apply(Kr, sr), _;
        }
        function te(it) {
          return B = it, $ = $a(me, o), P ? K(it) : _;
        }
        function ue(it) {
          var sr = it - E, Kr = it - B, jm = o - sr;
          return U ? Pt(jm, h - Kr) : jm;
        }
        function ne(it) {
          var sr = it - E, Kr = it - B;
          return E === r || sr >= o || sr < 0 || U && Kr >= h;
        }
        function me() {
          var it = nu();
          if (ne(it))
            return ge(it);
          $ = $a(me, ue(it));
        }
        function ge(it) {
          return $ = r, G && l ? K(it) : (l = d = r, _);
        }
        function Sn() {
          $ !== r && Ph($), B = 0, l = E = d = $ = r;
        }
        function Xt() {
          return $ === r ? _ : ge(nu());
        }
        function In() {
          var it = nu(), sr = ne(it);
          if (l = arguments, d = this, E = it, sr) {
            if ($ === r)
              return te(E);
            if (U)
              return Ph($), $ = $a(me, o), K(E);
          }
          return $ === r && ($ = $a(me, o)), _;
        }
        return In.cancel = Sn, In.flush = Xt, In;
      }
      var uV = fe(function(t, o) {
        return _h(t, 1, o);
      }), cV = fe(function(t, o, i) {
        return _h(t, qn(o) || 0, i);
      });
      function dV(t) {
        return zr(t, Me);
      }
      function ru(t, o) {
        if (typeof t != "function" || o != null && typeof o != "function")
          throw new Fn(c);
        var i = function() {
          var l = arguments, d = o ? o.apply(this, l) : l[0], h = i.cache;
          if (h.has(d))
            return h.get(d);
          var _ = t.apply(this, l);
          return i.cache = h.set(d, _) || h, _;
        };
        return i.cache = new (ru.Cache || Wr)(), i;
      }
      ru.Cache = Wr;
      function ou(t) {
        if (typeof t != "function")
          throw new Fn(c);
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
      function fV(t) {
        return Em(2, t);
      }
      var pV = Qy(function(t, o) {
        o = o.length == 1 && se(o[0]) ? Ye(o[0], Cn(ee())) : Ye(It(o, 1), Cn(ee()));
        var i = o.length;
        return fe(function(l) {
          for (var d = -1, h = Pt(l.length, i); ++d < h; )
            l[d] = o[d].call(this, l[d]);
          return bn(t, this, l);
        });
      }), _d = fe(function(t, o) {
        var i = $o(o, as(_d));
        return zr(t, F, r, o, i);
      }), Tm = fe(function(t, o) {
        var i = $o(o, as(Tm));
        return zr(t, W, r, o, i);
      }), hV = qr(function(t, o) {
        return zr(t, X, r, r, r, o);
      });
      function mV(t, o) {
        if (typeof t != "function")
          throw new Fn(c);
        return o = o === r ? o : le(o), fe(t, o);
      }
      function wV(t, o) {
        if (typeof t != "function")
          throw new Fn(c);
        return o = o == null ? 0 : wt(le(o), 0), fe(function(i) {
          var l = i[o], d = Eo(i, 0, o);
          return l && go(d, l), bn(t, this, d);
        });
      }
      function vV(t, o, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new Fn(c);
        return Je(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), Am(t, o, {
          leading: l,
          maxWait: o,
          trailing: d
        });
      }
      function _V(t) {
        return Vm(t, 1);
      }
      function gV(t, o) {
        return _d(nd(o), t);
      }
      function $V() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return se(t) ? t : [t];
      }
      function yV(t) {
        return Wn(t, V);
      }
      function bV(t, o) {
        return o = typeof o == "function" ? o : r, Wn(t, V, o);
      }
      function CV(t) {
        return Wn(t, y | V);
      }
      function VV(t, o) {
        return o = typeof o == "function" ? o : r, Wn(t, y | V, o);
      }
      function EV(t, o) {
        return o == null || vh(t, o, $t(o));
      }
      function ir(t, o) {
        return t === o || t !== t && o !== o;
      }
      var SV = Zl(zc), IV = Zl(function(t, o) {
        return t >= o;
      }), vi = Ch(function() {
        return arguments;
      }()) ? Ch : function(t) {
        return tt(t) && De.call(t, "callee") && !uh.call(t, "callee");
      }, se = k.isArray, kV = zp ? Cn(zp) : My;
      function dn(t) {
        return t != null && iu(t.length) && !Yr(t);
      }
      function ot(t) {
        return tt(t) && dn(t);
      }
      function AV(t) {
        return t === !0 || t === !1 || tt(t) && Zt(t) == gn;
      }
      var So = H$ || Ad, TV = qp ? Cn(qp) : Ry;
      function xV(t) {
        return tt(t) && t.nodeType === 1 && !ya(t);
      }
      function LV(t) {
        if (t == null)
          return !0;
        if (dn(t) && (se(t) || typeof t == "string" || typeof t.splice == "function" || So(t) || ls(t) || vi(t)))
          return !t.length;
        var o = Ft(t);
        if (o == Nt || o == pt)
          return !t.size;
        if (ga(t))
          return !Yc(t).length;
        for (var i in t)
          if (De.call(t, i))
            return !1;
        return !0;
      }
      function DV(t, o) {
        return wa(t, o);
      }
      function OV(t, o, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(t, o) : r;
        return l === r ? wa(t, o, r, i) : !!l;
      }
      function gd(t) {
        if (!tt(t))
          return !1;
        var o = Zt(t);
        return o == xe || o == Jo || typeof t.message == "string" && typeof t.name == "string" && !ya(t);
      }
      function NV(t) {
        return typeof t == "number" && dh(t);
      }
      function Yr(t) {
        if (!Je(t))
          return !1;
        var o = Zt(t);
        return o == Lr || o == Be || o == sn || o == Xo;
      }
      function xm(t) {
        return typeof t == "number" && t == le(t);
      }
      function iu(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Re;
      }
      function Je(t) {
        var o = typeof t;
        return t != null && (o == "object" || o == "function");
      }
      function tt(t) {
        return t != null && typeof t == "object";
      }
      var Lm = Gp ? Cn(Gp) : Py;
      function MV(t, o) {
        return t === o || Gc(t, o, ud(o));
      }
      function RV(t, o, i) {
        return i = typeof i == "function" ? i : r, Gc(t, o, ud(o), i);
      }
      function BV(t) {
        return Dm(t) && t != +t;
      }
      function PV(t) {
        if (bb(t))
          throw new ie(u);
        return Vh(t);
      }
      function FV(t) {
        return t === null;
      }
      function UV(t) {
        return t == null;
      }
      function Dm(t) {
        return typeof t == "number" || tt(t) && Zt(t) == be;
      }
      function ya(t) {
        if (!tt(t) || Zt(t) != Vt)
          return !1;
        var o = Ll(t);
        if (o === null)
          return !0;
        var i = De.call(o, "constructor") && o.constructor;
        return typeof i == "function" && i instanceof i && kl.call(i) == R$;
      }
      var $d = Yp ? Cn(Yp) : Fy;
      function WV(t) {
        return xm(t) && t >= -Re && t <= Re;
      }
      var Om = jp ? Cn(jp) : Uy;
      function su(t) {
        return typeof t == "string" || !se(t) && tt(t) && Zt(t) == hr;
      }
      function En(t) {
        return typeof t == "symbol" || tt(t) && Zt(t) == ht;
      }
      var ls = Kp ? Cn(Kp) : Wy;
      function HV(t) {
        return t === r;
      }
      function zV(t) {
        return tt(t) && Ft(t) == Yt;
      }
      function qV(t) {
        return tt(t) && Zt(t) == Qo;
      }
      var GV = Zl(jc), YV = Zl(function(t, o) {
        return t <= o;
      });
      function Nm(t) {
        if (!t)
          return [];
        if (dn(t))
          return su(t) ? rr(t) : cn(t);
        if (la && t[la])
          return E$(t[la]());
        var o = Ft(t), i = o == Nt ? Nc : o == pt ? El : us;
        return i(t);
      }
      function jr(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = qn(t), t === Ge || t === -Ge) {
          var o = t < 0 ? -1 : 1;
          return o * on;
        }
        return t === t ? t : 0;
      }
      function le(t) {
        var o = jr(t), i = o % 1;
        return o === o ? i ? o - i : o : 0;
      }
      function Mm(t) {
        return t ? pi(le(t), 0, $e) : 0;
      }
      function qn(t) {
        if (typeof t == "number")
          return t;
        if (En(t))
          return xr;
        if (Je(t)) {
          var o = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Je(o) ? o + "" : o;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = th(t);
        var i = fo.test(t);
        return i || si.test(t) ? l$(t.slice(2), i ? 2 : 8) : oi.test(t) ? xr : +t;
      }
      function Rm(t) {
        return $r(t, fn(t));
      }
      function jV(t) {
        return t ? pi(le(t), -Re, Re) : t === 0 ? t : 0;
      }
      function Ie(t) {
        return t == null ? "" : Vn(t);
      }
      var KV = is(function(t, o) {
        if (ga(o) || dn(o)) {
          $r(o, $t(o), t);
          return;
        }
        for (var i in o)
          De.call(o, i) && pa(t, i, o[i]);
      }), Bm = is(function(t, o) {
        $r(o, fn(o), t);
      }), au = is(function(t, o, i, l) {
        $r(o, fn(o), t, l);
      }), ZV = is(function(t, o, i, l) {
        $r(o, $t(o), t, l);
      }), JV = qr(Uc);
      function XV(t, o) {
        var i = os(t);
        return o == null ? i : wh(i, o);
      }
      var QV = fe(function(t, o) {
        t = Ue(t);
        var i = -1, l = o.length, d = l > 2 ? o[2] : r;
        for (d && Jt(o[0], o[1], d) && (l = 1); ++i < l; )
          for (var h = o[i], _ = fn(h), $ = -1, E = _.length; ++$ < E; ) {
            var B = _[$], P = t[B];
            (P === r || ir(P, ts[B]) && !De.call(t, B)) && (t[B] = h[B]);
          }
        return t;
      }), eE = fe(function(t) {
        return t.push(r, tm), bn(Pm, r, t);
      });
      function tE(t, o) {
        return Jp(t, ee(o, 3), gr);
      }
      function nE(t, o) {
        return Jp(t, ee(o, 3), Hc);
      }
      function rE(t, o) {
        return t == null ? t : Wc(t, ee(o, 3), fn);
      }
      function oE(t, o) {
        return t == null ? t : yh(t, ee(o, 3), fn);
      }
      function iE(t, o) {
        return t && gr(t, ee(o, 3));
      }
      function sE(t, o) {
        return t && Hc(t, ee(o, 3));
      }
      function aE(t) {
        return t == null ? [] : Wl(t, $t(t));
      }
      function lE(t) {
        return t == null ? [] : Wl(t, fn(t));
      }
      function yd(t, o, i) {
        var l = t == null ? r : hi(t, o);
        return l === r ? i : l;
      }
      function uE(t, o) {
        return t != null && om(t, o, Ly);
      }
      function bd(t, o) {
        return t != null && om(t, o, Dy);
      }
      var cE = Zh(function(t, o, i) {
        o != null && typeof o.toString != "function" && (o = Al.call(o)), t[o] = i;
      }, Vd(pn)), dE = Zh(function(t, o, i) {
        o != null && typeof o.toString != "function" && (o = Al.call(o)), De.call(t, o) ? t[o].push(i) : t[o] = [i];
      }, ee), fE = fe(ma);
      function $t(t) {
        return dn(t) ? hh(t) : Yc(t);
      }
      function fn(t) {
        return dn(t) ? hh(t, !0) : Hy(t);
      }
      function pE(t, o) {
        var i = {};
        return o = ee(o, 3), gr(t, function(l, d, h) {
          Hr(i, o(l, d, h), l);
        }), i;
      }
      function hE(t, o) {
        var i = {};
        return o = ee(o, 3), gr(t, function(l, d, h) {
          Hr(i, d, o(l, d, h));
        }), i;
      }
      var mE = is(function(t, o, i) {
        Hl(t, o, i);
      }), Pm = is(function(t, o, i, l) {
        Hl(t, o, i, l);
      }), wE = qr(function(t, o) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        o = Ye(o, function(h) {
          return h = Vo(h, t), l || (l = h.length > 1), h;
        }), $r(t, ad(t), i), l && (i = Wn(i, y | b | V, cb));
        for (var d = o.length; d--; )
          Qc(i, o[d]);
        return i;
      });
      function vE(t, o) {
        return Fm(t, ou(ee(o)));
      }
      var _E = qr(function(t, o) {
        return t == null ? {} : qy(t, o);
      });
      function Fm(t, o) {
        if (t == null)
          return {};
        var i = Ye(ad(t), function(l) {
          return [l];
        });
        return o = ee(o), xh(t, i, function(l, d) {
          return o(l, d[0]);
        });
      }
      function gE(t, o, i) {
        o = Vo(o, t);
        var l = -1, d = o.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var h = t == null ? r : t[yr(o[l])];
          h === r && (l = d, h = i), t = Yr(h) ? h.call(t) : h;
        }
        return t;
      }
      function $E(t, o, i) {
        return t == null ? t : va(t, o, i);
      }
      function yE(t, o, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : va(t, o, i, l);
      }
      var Um = Qh($t), Wm = Qh(fn);
      function bE(t, o, i) {
        var l = se(t), d = l || So(t) || ls(t);
        if (o = ee(o, 4), i == null) {
          var h = t && t.constructor;
          d ? i = l ? new h() : [] : Je(t) ? i = Yr(h) ? os(Ll(t)) : {} : i = {};
        }
        return (d ? Pn : gr)(t, function(_, $, E) {
          return o(i, _, $, E);
        }), i;
      }
      function CE(t, o) {
        return t == null ? !0 : Qc(t, o);
      }
      function VE(t, o, i) {
        return t == null ? t : Mh(t, o, nd(i));
      }
      function EE(t, o, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Mh(t, o, nd(i), l);
      }
      function us(t) {
        return t == null ? [] : Oc(t, $t(t));
      }
      function SE(t) {
        return t == null ? [] : Oc(t, fn(t));
      }
      function IE(t, o, i) {
        return i === r && (i = o, o = r), i !== r && (i = qn(i), i = i === i ? i : 0), o !== r && (o = qn(o), o = o === o ? o : 0), pi(qn(t), o, i);
      }
      function kE(t, o, i) {
        return o = jr(o), i === r ? (i = o, o = 0) : i = jr(i), t = qn(t), Oy(t, o, i);
      }
      function AE(t, o, i) {
        if (i && typeof i != "boolean" && Jt(t, o, i) && (o = i = r), i === r && (typeof o == "boolean" ? (i = o, o = r) : typeof t == "boolean" && (i = t, t = r)), t === r && o === r ? (t = 0, o = 1) : (t = jr(t), o === r ? (o = t, t = 0) : o = jr(o)), t > o) {
          var l = t;
          t = o, o = l;
        }
        if (i || t % 1 || o % 1) {
          var d = fh();
          return Pt(t + d * (o - t + a$("1e-" + ((d + "").length - 1))), o);
        }
        return Zc(t, o);
      }
      var TE = ss(function(t, o, i) {
        return o = o.toLowerCase(), t + (i ? Hm(o) : o);
      });
      function Hm(t) {
        return Cd(Ie(t).toLowerCase());
      }
      function zm(t) {
        return t = Ie(t), t && t.replace(Gi, $$).replace(J0, "");
      }
      function xE(t, o, i) {
        t = Ie(t), o = Vn(o);
        var l = t.length;
        i = i === r ? l : pi(le(i), 0, l);
        var d = i;
        return i -= o.length, i >= 0 && t.slice(i, d) == o;
      }
      function LE(t) {
        return t = Ie(t), t && ei.test(t) ? t.replace(io, y$) : t;
      }
      function DE(t) {
        return t = Ie(t), t && ti.test(t) ? t.replace(uo, "\\$&") : t;
      }
      var OE = ss(function(t, o, i) {
        return t + (i ? "-" : "") + o.toLowerCase();
      }), NE = ss(function(t, o, i) {
        return t + (i ? " " : "") + o.toLowerCase();
      }), ME = Yh("toLowerCase");
      function RE(t, o, i) {
        t = Ie(t), o = le(o);
        var l = o ? Qi(t) : 0;
        if (!o || l >= o)
          return t;
        var d = (o - l) / 2;
        return Kl(Ml(d), i) + t + Kl(Nl(d), i);
      }
      function BE(t, o, i) {
        t = Ie(t), o = le(o);
        var l = o ? Qi(t) : 0;
        return o && l < o ? t + Kl(o - l, i) : t;
      }
      function PE(t, o, i) {
        t = Ie(t), o = le(o);
        var l = o ? Qi(t) : 0;
        return o && l < o ? Kl(o - l, i) + t : t;
      }
      function FE(t, o, i) {
        return i || o == null ? o = 0 : o && (o = +o), Y$(Ie(t).replace(_r, ""), o || 0);
      }
      function UE(t, o, i) {
        return (i ? Jt(t, o, i) : o === r) ? o = 1 : o = le(o), Jc(Ie(t), o);
      }
      function WE() {
        var t = arguments, o = Ie(t[0]);
        return t.length < 3 ? o : o.replace(t[1], t[2]);
      }
      var HE = ss(function(t, o, i) {
        return t + (i ? "_" : "") + o.toLowerCase();
      });
      function zE(t, o, i) {
        return i && typeof i != "number" && Jt(t, o, i) && (o = i = r), i = i === r ? $e : i >>> 0, i ? (t = Ie(t), t && (typeof o == "string" || o != null && !$d(o)) && (o = Vn(o), !o && Xi(t)) ? Eo(rr(t), 0, i) : t.split(o, i)) : [];
      }
      var qE = ss(function(t, o, i) {
        return t + (i ? " " : "") + Cd(o);
      });
      function GE(t, o, i) {
        return t = Ie(t), i = i == null ? 0 : pi(le(i), 0, t.length), o = Vn(o), t.slice(i, i + o.length) == o;
      }
      function YE(t, o, i) {
        var l = p.templateSettings;
        i && Jt(t, o, i) && (o = r), t = Ie(t), o = au({}, o, l, em);
        var d = au({}, o.imports, l.imports, em), h = $t(d), _ = Oc(d, h), $, E, B = 0, P = o.interpolate || Pr, U = "__p += '", G = Mc(
          (o.escape || Pr).source + "|" + P.source + "|" + (P === Rt ? ln : Pr).source + "|" + (o.evaluate || Pr).source + "|$",
          "g"
        ), K = "//# sourceURL=" + (De.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++n$ + "]") + `
`;
        t.replace(G, function(ne, me, ge, Sn, Xt, In) {
          return ge || (ge = Sn), U += t.slice(B, In).replace(Yi, b$), me && ($ = !0, U += `' +
__e(` + me + `) +
'`), Xt && (E = !0, U += `';
` + Xt + `;
__p += '`), ge && (U += `' +
((__t = (` + ge + `)) == null ? '' : __t) +
'`), B = In + ne.length, ne;
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
        U = (E ? U.replace(tr, "") : U).replace(jt, "$1").replace(ro, "$1;"), U = "function(" + (te || "obj") + `) {
` + (te ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + ($ ? ", __e = _.escape" : "") + (E ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + U + `return __p
}`;
        var ue = Gm(function() {
          return Ee(h, K + "return " + U).apply(r, _);
        });
        if (ue.source = U, gd(ue))
          throw ue;
        return ue;
      }
      function jE(t) {
        return Ie(t).toLowerCase();
      }
      function KE(t) {
        return Ie(t).toUpperCase();
      }
      function ZE(t, o, i) {
        if (t = Ie(t), t && (i || o === r))
          return th(t);
        if (!t || !(o = Vn(o)))
          return t;
        var l = rr(t), d = rr(o), h = nh(l, d), _ = rh(l, d) + 1;
        return Eo(l, h, _).join("");
      }
      function JE(t, o, i) {
        if (t = Ie(t), t && (i || o === r))
          return t.slice(0, ih(t) + 1);
        if (!t || !(o = Vn(o)))
          return t;
        var l = rr(t), d = rh(l, rr(o)) + 1;
        return Eo(l, 0, d).join("");
      }
      function XE(t, o, i) {
        if (t = Ie(t), t && (i || o === r))
          return t.replace(_r, "");
        if (!t || !(o = Vn(o)))
          return t;
        var l = rr(t), d = nh(l, rr(o));
        return Eo(l, d).join("");
      }
      function QE(t, o) {
        var i = he, l = Te;
        if (Je(o)) {
          var d = "separator" in o ? o.separator : d;
          i = "length" in o ? le(o.length) : i, l = "omission" in o ? Vn(o.omission) : l;
        }
        t = Ie(t);
        var h = t.length;
        if (Xi(t)) {
          var _ = rr(t);
          h = _.length;
        }
        if (i >= h)
          return t;
        var $ = i - Qi(l);
        if ($ < 1)
          return l;
        var E = _ ? Eo(_, 0, $).join("") : t.slice(0, $);
        if (d === r)
          return E + l;
        if (_ && ($ += E.length - $), $d(d)) {
          if (t.slice($).search(d)) {
            var B, P = E;
            for (d.global || (d = Mc(d.source, Ie(ri.exec(d)) + "g")), d.lastIndex = 0; B = d.exec(P); )
              var U = B.index;
            E = E.slice(0, U === r ? $ : U);
          }
        } else if (t.indexOf(Vn(d), $) != $) {
          var G = E.lastIndexOf(d);
          G > -1 && (E = E.slice(0, G));
        }
        return E + l;
      }
      function eS(t) {
        return t = Ie(t), t && so.test(t) ? t.replace(oo, A$) : t;
      }
      var tS = ss(function(t, o, i) {
        return t + (i ? " " : "") + o.toUpperCase();
      }), Cd = Yh("toUpperCase");
      function qm(t, o, i) {
        return t = Ie(t), o = i ? r : o, o === r ? V$(t) ? L$(t) : m$(t) : t.match(o) || [];
      }
      var Gm = fe(function(t, o) {
        try {
          return bn(t, r, o);
        } catch (i) {
          return gd(i) ? i : new ie(i);
        }
      }), nS = qr(function(t, o) {
        return Pn(o, function(i) {
          i = yr(i), Hr(t, i, vd(t[i], t));
        }), t;
      });
      function rS(t) {
        var o = t == null ? 0 : t.length, i = ee();
        return t = o ? Ye(t, function(l) {
          if (typeof l[1] != "function")
            throw new Fn(c);
          return [i(l[0]), l[1]];
        }) : [], fe(function(l) {
          for (var d = -1; ++d < o; ) {
            var h = t[d];
            if (bn(h[0], this, l))
              return bn(h[1], this, l);
          }
        });
      }
      function oS(t) {
        return Ay(Wn(t, y));
      }
      function Vd(t) {
        return function() {
          return t;
        };
      }
      function iS(t, o) {
        return t == null || t !== t ? o : t;
      }
      var sS = Kh(), aS = Kh(!0);
      function pn(t) {
        return t;
      }
      function Ed(t) {
        return Eh(typeof t == "function" ? t : Wn(t, y));
      }
      function lS(t) {
        return Ih(Wn(t, y));
      }
      function uS(t, o) {
        return kh(t, Wn(o, y));
      }
      var cS = fe(function(t, o) {
        return function(i) {
          return ma(i, t, o);
        };
      }), dS = fe(function(t, o) {
        return function(i) {
          return ma(t, i, o);
        };
      });
      function Sd(t, o, i) {
        var l = $t(o), d = Wl(o, l);
        i == null && !(Je(o) && (d.length || !l.length)) && (i = o, o = t, t = this, d = Wl(o, $t(o)));
        var h = !(Je(i) && "chain" in i) || !!i.chain, _ = Yr(t);
        return Pn(d, function($) {
          var E = o[$];
          t[$] = E, _ && (t.prototype[$] = function() {
            var B = this.__chain__;
            if (h || B) {
              var P = t(this.__wrapped__), U = P.__actions__ = cn(this.__actions__);
              return U.push({ func: E, args: arguments, thisArg: t }), P.__chain__ = B, P;
            }
            return E.apply(t, go([this.value()], arguments));
          });
        }), t;
      }
      function fS() {
        return St._ === this && (St._ = B$), this;
      }
      function Id() {
      }
      function pS(t) {
        return t = le(t), fe(function(o) {
          return Ah(o, t);
        });
      }
      var hS = od(Ye), mS = od(Zp), wS = od(Ac);
      function Ym(t) {
        return dd(t) ? Tc(yr(t)) : Gy(t);
      }
      function vS(t) {
        return function(o) {
          return t == null ? r : hi(t, o);
        };
      }
      var _S = Jh(), gS = Jh(!0);
      function kd() {
        return [];
      }
      function Ad() {
        return !1;
      }
      function $S() {
        return {};
      }
      function yS() {
        return "";
      }
      function bS() {
        return !0;
      }
      function CS(t, o) {
        if (t = le(t), t < 1 || t > Re)
          return [];
        var i = $e, l = Pt(t, $e);
        o = ee(o), t -= $e;
        for (var d = Dc(l, o); ++i < t; )
          o(i);
        return d;
      }
      function VS(t) {
        return se(t) ? Ye(t, yr) : En(t) ? [t] : cn(pm(Ie(t)));
      }
      function ES(t) {
        var o = ++M$;
        return Ie(t) + o;
      }
      var SS = jl(function(t, o) {
        return t + o;
      }, 0), IS = id("ceil"), kS = jl(function(t, o) {
        return t / o;
      }, 1), AS = id("floor");
      function TS(t) {
        return t && t.length ? Ul(t, pn, zc) : r;
      }
      function xS(t, o) {
        return t && t.length ? Ul(t, ee(o, 2), zc) : r;
      }
      function LS(t) {
        return Qp(t, pn);
      }
      function DS(t, o) {
        return Qp(t, ee(o, 2));
      }
      function OS(t) {
        return t && t.length ? Ul(t, pn, jc) : r;
      }
      function NS(t, o) {
        return t && t.length ? Ul(t, ee(o, 2), jc) : r;
      }
      var MS = jl(function(t, o) {
        return t * o;
      }, 1), RS = id("round"), BS = jl(function(t, o) {
        return t - o;
      }, 0);
      function PS(t) {
        return t && t.length ? Lc(t, pn) : 0;
      }
      function FS(t, o) {
        return t && t.length ? Lc(t, ee(o, 2)) : 0;
      }
      return p.after = lV, p.ary = Vm, p.assign = KV, p.assignIn = Bm, p.assignInWith = au, p.assignWith = ZV, p.at = JV, p.before = Em, p.bind = vd, p.bindAll = nS, p.bindKey = Sm, p.castArray = $V, p.chain = ym, p.chunk = Ab, p.compact = Tb, p.concat = xb, p.cond = rS, p.conforms = oS, p.constant = Vd, p.countBy = PC, p.create = XV, p.curry = Im, p.curryRight = km, p.debounce = Am, p.defaults = QV, p.defaultsDeep = eE, p.defer = uV, p.delay = cV, p.difference = Lb, p.differenceBy = Db, p.differenceWith = Ob, p.drop = Nb, p.dropRight = Mb, p.dropRightWhile = Rb, p.dropWhile = Bb, p.fill = Pb, p.filter = UC, p.flatMap = zC, p.flatMapDeep = qC, p.flatMapDepth = GC, p.flatten = vm, p.flattenDeep = Fb, p.flattenDepth = Ub, p.flip = dV, p.flow = sS, p.flowRight = aS, p.fromPairs = Wb, p.functions = aE, p.functionsIn = lE, p.groupBy = YC, p.initial = zb, p.intersection = qb, p.intersectionBy = Gb, p.intersectionWith = Yb, p.invert = cE, p.invertBy = dE, p.invokeMap = KC, p.iteratee = Ed, p.keyBy = ZC, p.keys = $t, p.keysIn = fn, p.map = tu, p.mapKeys = pE, p.mapValues = hE, p.matches = lS, p.matchesProperty = uS, p.memoize = ru, p.merge = mE, p.mergeWith = Pm, p.method = cS, p.methodOf = dS, p.mixin = Sd, p.negate = ou, p.nthArg = pS, p.omit = wE, p.omitBy = vE, p.once = fV, p.orderBy = JC, p.over = hS, p.overArgs = pV, p.overEvery = mS, p.overSome = wS, p.partial = _d, p.partialRight = Tm, p.partition = XC, p.pick = _E, p.pickBy = Fm, p.property = Ym, p.propertyOf = vS, p.pull = Jb, p.pullAll = gm, p.pullAllBy = Xb, p.pullAllWith = Qb, p.pullAt = eC, p.range = _S, p.rangeRight = gS, p.rearg = hV, p.reject = tV, p.remove = tC, p.rest = mV, p.reverse = md, p.sampleSize = rV, p.set = $E, p.setWith = yE, p.shuffle = oV, p.slice = nC, p.sortBy = aV, p.sortedUniq = uC, p.sortedUniqBy = cC, p.split = zE, p.spread = wV, p.tail = dC, p.take = fC, p.takeRight = pC, p.takeRightWhile = hC, p.takeWhile = mC, p.tap = TC, p.throttle = vV, p.thru = eu, p.toArray = Nm, p.toPairs = Um, p.toPairsIn = Wm, p.toPath = VS, p.toPlainObject = Rm, p.transform = bE, p.unary = _V, p.union = wC, p.unionBy = vC, p.unionWith = _C, p.uniq = gC, p.uniqBy = $C, p.uniqWith = yC, p.unset = CE, p.unzip = wd, p.unzipWith = $m, p.update = VE, p.updateWith = EE, p.values = us, p.valuesIn = SE, p.without = bC, p.words = qm, p.wrap = gV, p.xor = CC, p.xorBy = VC, p.xorWith = EC, p.zip = SC, p.zipObject = IC, p.zipObjectDeep = kC, p.zipWith = AC, p.entries = Um, p.entriesIn = Wm, p.extend = Bm, p.extendWith = au, Sd(p, p), p.add = SS, p.attempt = Gm, p.camelCase = TE, p.capitalize = Hm, p.ceil = IS, p.clamp = IE, p.clone = yV, p.cloneDeep = CV, p.cloneDeepWith = VV, p.cloneWith = bV, p.conformsTo = EV, p.deburr = zm, p.defaultTo = iS, p.divide = kS, p.endsWith = xE, p.eq = ir, p.escape = LE, p.escapeRegExp = DE, p.every = FC, p.find = WC, p.findIndex = mm, p.findKey = tE, p.findLast = HC, p.findLastIndex = wm, p.findLastKey = nE, p.floor = AS, p.forEach = bm, p.forEachRight = Cm, p.forIn = rE, p.forInRight = oE, p.forOwn = iE, p.forOwnRight = sE, p.get = yd, p.gt = SV, p.gte = IV, p.has = uE, p.hasIn = bd, p.head = _m, p.identity = pn, p.includes = jC, p.indexOf = Hb, p.inRange = kE, p.invoke = fE, p.isArguments = vi, p.isArray = se, p.isArrayBuffer = kV, p.isArrayLike = dn, p.isArrayLikeObject = ot, p.isBoolean = AV, p.isBuffer = So, p.isDate = TV, p.isElement = xV, p.isEmpty = LV, p.isEqual = DV, p.isEqualWith = OV, p.isError = gd, p.isFinite = NV, p.isFunction = Yr, p.isInteger = xm, p.isLength = iu, p.isMap = Lm, p.isMatch = MV, p.isMatchWith = RV, p.isNaN = BV, p.isNative = PV, p.isNil = UV, p.isNull = FV, p.isNumber = Dm, p.isObject = Je, p.isObjectLike = tt, p.isPlainObject = ya, p.isRegExp = $d, p.isSafeInteger = WV, p.isSet = Om, p.isString = su, p.isSymbol = En, p.isTypedArray = ls, p.isUndefined = HV, p.isWeakMap = zV, p.isWeakSet = qV, p.join = jb, p.kebabCase = OE, p.last = zn, p.lastIndexOf = Kb, p.lowerCase = NE, p.lowerFirst = ME, p.lt = GV, p.lte = YV, p.max = TS, p.maxBy = xS, p.mean = LS, p.meanBy = DS, p.min = OS, p.minBy = NS, p.stubArray = kd, p.stubFalse = Ad, p.stubObject = $S, p.stubString = yS, p.stubTrue = bS, p.multiply = MS, p.nth = Zb, p.noConflict = fS, p.noop = Id, p.now = nu, p.pad = RE, p.padEnd = BE, p.padStart = PE, p.parseInt = FE, p.random = AE, p.reduce = QC, p.reduceRight = eV, p.repeat = UE, p.replace = WE, p.result = gE, p.round = RS, p.runInContext = C, p.sample = nV, p.size = iV, p.snakeCase = HE, p.some = sV, p.sortedIndex = rC, p.sortedIndexBy = oC, p.sortedIndexOf = iC, p.sortedLastIndex = sC, p.sortedLastIndexBy = aC, p.sortedLastIndexOf = lC, p.startCase = qE, p.startsWith = GE, p.subtract = BS, p.sum = PS, p.sumBy = FS, p.template = YE, p.times = CS, p.toFinite = jr, p.toInteger = le, p.toLength = Mm, p.toLower = jE, p.toNumber = qn, p.toSafeInteger = jV, p.toString = Ie, p.toUpper = KE, p.trim = ZE, p.trimEnd = JE, p.trimStart = XE, p.truncate = QE, p.unescape = eS, p.uniqueId = ES, p.upperCase = tS, p.upperFirst = Cd, p.each = bm, p.eachRight = Cm, p.first = _m, Sd(p, function() {
        var t = {};
        return gr(p, function(o, i) {
          De.call(p.prototype, i) || (t[i] = o);
        }), t;
      }(), { chain: !1 }), p.VERSION = s, Pn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        p[t].placeholder = p;
      }), Pn(["drop", "take"], function(t, o) {
        we.prototype[t] = function(i) {
          i = i === r ? 1 : wt(le(i), 0);
          var l = this.__filtered__ && !o ? new we(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Pt(i, l.__takeCount__) : l.__views__.push({
            size: Pt(i, $e),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, we.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), Pn(["filter", "map", "takeWhile"], function(t, o) {
        var i = o + 1, l = i == Pe || i == Fe;
        we.prototype[t] = function(d) {
          var h = this.clone();
          return h.__iteratees__.push({
            iteratee: ee(d, 3),
            type: i
          }), h.__filtered__ = h.__filtered__ || l, h;
        };
      }), Pn(["head", "last"], function(t, o) {
        var i = "take" + (o ? "Right" : "");
        we.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), Pn(["initial", "tail"], function(t, o) {
        var i = "drop" + (o ? "" : "Right");
        we.prototype[t] = function() {
          return this.__filtered__ ? new we(this) : this[i](1);
        };
      }), we.prototype.compact = function() {
        return this.filter(pn);
      }, we.prototype.find = function(t) {
        return this.filter(t).head();
      }, we.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, we.prototype.invokeMap = fe(function(t, o) {
        return typeof t == "function" ? new we(this) : this.map(function(i) {
          return ma(i, t, o);
        });
      }), we.prototype.reject = function(t) {
        return this.filter(ou(ee(t)));
      }, we.prototype.slice = function(t, o) {
        t = le(t);
        var i = this;
        return i.__filtered__ && (t > 0 || o < 0) ? new we(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), o !== r && (o = le(o), i = o < 0 ? i.dropRight(-o) : i.take(o - t)), i);
      }, we.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, we.prototype.toArray = function() {
        return this.take($e);
      }, gr(we.prototype, function(t, o) {
        var i = /^(?:filter|find|map|reject)|While$/.test(o), l = /^(?:head|last)$/.test(o), d = p[l ? "take" + (o == "last" ? "Right" : "") : o], h = l || /^find/.test(o);
        !d || (p.prototype[o] = function() {
          var _ = this.__wrapped__, $ = l ? [1] : arguments, E = _ instanceof we, B = $[0], P = E || se(_), U = function(me) {
            var ge = d.apply(p, go([me], $));
            return l && G ? ge[0] : ge;
          };
          P && i && typeof B == "function" && B.length != 1 && (E = P = !1);
          var G = this.__chain__, K = !!this.__actions__.length, te = h && !G, ue = E && !K;
          if (!h && P) {
            _ = ue ? _ : new we(this);
            var ne = t.apply(_, $);
            return ne.__actions__.push({ func: eu, args: [U], thisArg: r }), new Un(ne, G);
          }
          return te && ue ? t.apply(this, $) : (ne = this.thru(U), te ? l ? ne.value()[0] : ne.value() : ne);
        });
      }), Pn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var o = Sl[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
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
      }), gr(we.prototype, function(t, o) {
        var i = p[o];
        if (i) {
          var l = i.name + "";
          De.call(rs, l) || (rs[l] = []), rs[l].push({ name: o, func: i });
        }
      }), rs[Yl(r, S).name] = [{
        name: "wrapper",
        func: r
      }], we.prototype.clone = ey, we.prototype.reverse = ty, we.prototype.value = ny, p.prototype.at = xC, p.prototype.chain = LC, p.prototype.commit = DC, p.prototype.next = OC, p.prototype.plant = MC, p.prototype.reverse = RC, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = BC, p.prototype.first = p.prototype.head, la && (p.prototype[la] = NC), p;
    }, es = D$();
    ui ? ((ui.exports = es)._ = es, Ec._ = es) : St._ = es;
  }).call(ba);
})(Ne, Ne.exports);
const Uk = "/alarms?_s=", ic = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, Wk = async (e, n) => {
  try {
    return (await Ot.put(
      `/alarms/${e}?ack=${n}`,
      {
        body: `alarm=${e}`
      },
      ic
    )).status === 204;
  } catch {
    return !1;
  }
}, Kg = async (e, n) => {
  try {
    return (await Ot.put(
      `/alarms/${e}?${n}=true`,
      {
        body: `alarm=${e}`
      },
      ic
    )).status === 204;
  } catch {
    return !1;
  }
}, Hk = async (e, n) => {
  try {
    const r = e.join(",alarm.id==");
    return (await no.put(
      `alarms?_s=alarm.id==${r}&${n}=true`,
      null,
      ic
    )).status == 204;
  } catch {
    return !1;
  }
}, zk = async () => {
  try {
    const e = `${Uk}isSituation==true&limit=0`, n = await no(e);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, qk = async (e) => {
  try {
    const n = e.join(",id=="), r = await no(`/alarms?_s=id==${n}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Zg = async (e) => {
  try {
    const n = await no(`/alarms/${e}`);
    return n.status === 200 ? n.data : null;
  } catch {
    return null;
  }
}, Gk = async (e) => {
  try {
    const n = await no(`/events?_s=alarm.id==${e}`);
    return n.status === 200 ? n.data.event : null;
  } catch {
    return null;
  }
}, Yk = async () => {
  try {
    const e = await no("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => Ne.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, jk = async (e, n, r) => {
  try {
    return (await no.put(
      `/alarms/${e}/${n}`,
      `body=${r}`,
      ic
    )).status == 204;
  } catch {
    return !1;
  }
}, Kk = async (e, n) => {
  try {
    return (await no.delete(`/alarms/${e}/${n}`)).status == 204;
  } catch {
    return !1;
  }
}, Zk = async () => {
  try {
    const e = await no.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, Jk = window.Pinia.defineStore, pr = Jk("situationsStore", {
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
      const e = await Yk();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await zk();
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
        const s = await Zg(e);
        if (s) {
          const a = (n = s.relatedAlarms) == null ? void 0 : n.map((f) => f.id), c = await qk(a);
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
          const a = await Gk(s);
          a && (r[s] = Ne.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await Zk();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), Xk = window.Vue.openBlock, Qk = window.Vue.createElementBlock, eA = window.Vue.createElementVNode;
var tA = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const nA = {}, rA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oA = /* @__PURE__ */ eA("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), iA = [
  oA
];
function sA(e, n) {
  return Xk(), Qk("svg", rA, iA);
}
var Rs = /* @__PURE__ */ tA(nA, [["render", sA]]);
var aA = Object.defineProperty, $w = Object.getOwnPropertySymbols, lA = Object.prototype.hasOwnProperty, uA = Object.prototype.propertyIsEnumerable, yw = (e, n, r) => n in e ? aA(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, bw = (e, n) => {
  for (var r in n || (n = {}))
    lA.call(n, r) && yw(e, r, n[r]);
  if ($w)
    for (var r of $w(n))
      uA.call(n, r) && yw(e, r, n[r]);
  return e;
};
const cA = window.Vue.defineComponent, dA = window.Vue.toRaw, qd = window.Vue.h;
var fA = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const pA = {
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
}, hA = cA({
  props: pA,
  render() {
    const e = this.$attrs, n = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    n["feather-icon"] = !0, this.flex && (n["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = dA(this.icon);
    return this.$slots.default ? qd("span", { class: "feather-icon-container" }, [
      qd(this.$slots.default()[0], bw({
        class: n
      }, r))
    ]) : qd(s, bw({
      class: n
    }, r));
  }
});
var J = /* @__PURE__ */ fA(hA, [["__scopeId", "data-v-52cbf270"]]);
const mA = window.Vue.openBlock, wA = window.Vue.createElementBlock, vA = window.Vue.createElementVNode;
var _A = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const gA = {}, $A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yA = /* @__PURE__ */ vA("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), bA = [
  yA
];
function CA(e, n) {
  return mA(), wA("svg", $A, bA);
}
var Jg = /* @__PURE__ */ _A(gA, [["render", CA]]);
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
function kr(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var n = Number(e);
  return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
}
function ze(e, n) {
  if (n.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + n.length + " present");
}
function gt(e) {
  ze(1, arguments);
  var n = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && n === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || n === "[object Number]" ? new Date(e) : ((typeof e == "string" || n === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function VA(e, n) {
  ze(2, arguments);
  var r = gt(e), s = kr(n);
  return isNaN(s) ? new Date(NaN) : (s && r.setDate(r.getDate() + s), r);
}
function EA(e, n) {
  ze(2, arguments);
  var r = gt(e).getTime(), s = kr(n);
  return new Date(r + s);
}
var SA = {};
function Ps() {
  return SA;
}
function Cw(e, n) {
  var r, s, a, u, c, f, m, w;
  ze(1, arguments);
  var g = Ps(), y = kr((r = (s = (a = (u = n == null ? void 0 : n.weekStartsOn) !== null && u !== void 0 ? u : n == null || (c = n.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : g.weekStartsOn) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (w = m.options) === null || w === void 0 ? void 0 : w.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var b = gt(e), V = b.getDay(), O = (V < y ? 7 : 0) + V - y;
  return b.setDate(b.getDate() - O), b.setHours(0, 0, 0, 0), b;
}
function Kf(e) {
  var n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return n.setUTCFullYear(e.getFullYear()), e.getTime() - n.getTime();
}
function Vw(e) {
  ze(1, arguments);
  var n = gt(e);
  return n.setHours(0, 0, 0, 0), n;
}
function IA(e, n) {
  ze(2, arguments);
  var r = gt(e), s = gt(n), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Xg(e, n) {
  ze(2, arguments);
  var r = Vw(e), s = Vw(n);
  return r.getTime() === s.getTime();
}
function kA(e) {
  return ze(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function AA(e) {
  if (ze(1, arguments), !kA(e) && typeof e != "number")
    return !1;
  var n = gt(e);
  return !isNaN(Number(n));
}
function TA(e, n) {
  ze(2, arguments);
  var r = kr(n);
  return EA(e, -r);
}
var xA = 864e5;
function LA(e) {
  ze(1, arguments);
  var n = gt(e), r = n.getTime();
  n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  var s = n.getTime(), a = r - s;
  return Math.floor(a / xA) + 1;
}
function Uu(e) {
  ze(1, arguments);
  var n = 1, r = gt(e), s = r.getUTCDay(), a = (s < n ? 7 : 0) + s - n;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function Qg(e) {
  ze(1, arguments);
  var n = gt(e), r = n.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Uu(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = Uu(u);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function DA(e) {
  ze(1, arguments);
  var n = Qg(e), r = new Date(0);
  r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = Uu(r);
  return s;
}
var OA = 6048e5;
function NA(e) {
  ze(1, arguments);
  var n = gt(e), r = Uu(n).getTime() - DA(n).getTime();
  return Math.round(r / OA) + 1;
}
function Wu(e, n) {
  var r, s, a, u, c, f, m, w;
  ze(1, arguments);
  var g = Ps(), y = kr((r = (s = (a = (u = n == null ? void 0 : n.weekStartsOn) !== null && u !== void 0 ? u : n == null || (c = n.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : g.weekStartsOn) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (w = m.options) === null || w === void 0 ? void 0 : w.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var b = gt(e), V = b.getUTCDay(), O = (V < y ? 7 : 0) + V - y;
  return b.setUTCDate(b.getUTCDate() - O), b.setUTCHours(0, 0, 0, 0), b;
}
function e1(e, n) {
  var r, s, a, u, c, f, m, w;
  ze(1, arguments);
  var g = gt(e), y = g.getUTCFullYear(), b = Ps(), V = kr((r = (s = (a = (u = n == null ? void 0 : n.firstWeekContainsDate) !== null && u !== void 0 ? u : n == null || (c = n.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : b.firstWeekContainsDate) !== null && s !== void 0 ? s : (m = b.locale) === null || m === void 0 || (w = m.options) === null || w === void 0 ? void 0 : w.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(V >= 1 && V <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var O = new Date(0);
  O.setUTCFullYear(y + 1, 0, V), O.setUTCHours(0, 0, 0, 0);
  var x = Wu(O, n), D = new Date(0);
  D.setUTCFullYear(y, 0, V), D.setUTCHours(0, 0, 0, 0);
  var S = Wu(D, n);
  return g.getTime() >= x.getTime() ? y + 1 : g.getTime() >= S.getTime() ? y : y - 1;
}
function MA(e, n) {
  var r, s, a, u, c, f, m, w;
  ze(1, arguments);
  var g = Ps(), y = kr((r = (s = (a = (u = n == null ? void 0 : n.firstWeekContainsDate) !== null && u !== void 0 ? u : n == null || (c = n.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : g.firstWeekContainsDate) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (w = m.options) === null || w === void 0 ? void 0 : w.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), b = e1(e, n), V = new Date(0);
  V.setUTCFullYear(b, 0, y), V.setUTCHours(0, 0, 0, 0);
  var O = Wu(V, n);
  return O;
}
var RA = 6048e5;
function BA(e, n) {
  ze(1, arguments);
  var r = gt(e), s = Wu(r, n).getTime() - MA(r, n).getTime();
  return Math.round(s / RA) + 1;
}
function Oe(e, n) {
  for (var r = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < n; )
    s = "0" + s;
  return r + s;
}
var PA = {
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
const ko = PA;
var cs = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, FA = {
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
    return ko.y(e, n);
  },
  Y: function(e, n, r, s) {
    var a = e1(e, s), u = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var c = u % 100;
      return Oe(c, 2);
    }
    return n === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : Oe(u, n.length);
  },
  R: function(e, n) {
    var r = Qg(e);
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
        return ko.M(e, n);
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
    var a = BA(e, s);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Oe(a, n.length);
  },
  I: function(e, n, r) {
    var s = NA(e);
    return n === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : Oe(s, n.length);
  },
  d: function(e, n, r) {
    return n === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : ko.d(e, n);
  },
  D: function(e, n, r) {
    var s = LA(e);
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
    switch (s === 12 ? a = cs.noon : s === 0 ? a = cs.midnight : a = s / 12 >= 1 ? "pm" : "am", n) {
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
    switch (s >= 17 ? a = cs.evening : s >= 12 ? a = cs.afternoon : s >= 4 ? a = cs.morning : a = cs.night, n) {
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
    return ko.h(e, n);
  },
  H: function(e, n, r) {
    return n === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : ko.H(e, n);
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
    }) : ko.m(e, n);
  },
  s: function(e, n, r) {
    return n === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : ko.s(e, n);
  },
  S: function(e, n) {
    return ko.S(e, n);
  },
  X: function(e, n, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (n) {
      case "X":
        return Sw(u);
      case "XXXX":
      case "XX":
        return Di(u);
      case "XXXXX":
      case "XXX":
      default:
        return Di(u, ":");
    }
  },
  x: function(e, n, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return Sw(u);
      case "xxxx":
      case "xx":
        return Di(u);
      case "xxxxx":
      case "xxx":
      default:
        return Di(u, ":");
    }
  },
  O: function(e, n, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ew(u, ":");
      case "OOOO":
      default:
        return "GMT" + Di(u, ":");
    }
  },
  z: function(e, n, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ew(u, ":");
      case "zzzz":
      default:
        return "GMT" + Di(u, ":");
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
function Ew(e, n) {
  var r = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var c = n || "";
  return r + String(a) + c + Oe(u, 2);
}
function Sw(e, n) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + Oe(Math.abs(e) / 60, 2);
  }
  return Di(e, n);
}
function Di(e, n) {
  var r = n || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = Oe(Math.floor(a / 60), 2), c = Oe(a % 60, 2);
  return s + u + r + c;
}
const UA = FA;
var Iw = function(e, n) {
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
}, t1 = function(e, n) {
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
}, WA = function(e, n) {
  var r = e.match(/(P+)(p+)?/) || [], s = r[1], a = r[2];
  if (!a)
    return Iw(e, n);
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
  return u.replace("{{date}}", Iw(s, n)).replace("{{time}}", t1(a, n));
}, HA = {
  p: t1,
  P: WA
};
const zA = HA;
var qA = ["D", "DD"], GA = ["YY", "YYYY"];
function YA(e) {
  return qA.indexOf(e) !== -1;
}
function jA(e) {
  return GA.indexOf(e) !== -1;
}
function kw(e, n, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(n, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(n, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(n, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(n, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var KA = {
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
}, ZA = function(e, n, r) {
  var s, a = KA[e];
  return typeof a == "string" ? s = a : n === 1 ? s = a.one : s = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const JA = ZA;
function Gd(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = n.width ? String(n.width) : e.defaultWidth, s = e.formats[r] || e.formats[e.defaultWidth];
    return s;
  };
}
var XA = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, QA = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, eT = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, tT = {
  date: Gd({
    formats: XA,
    defaultWidth: "full"
  }),
  time: Gd({
    formats: QA,
    defaultWidth: "full"
  }),
  dateTime: Gd({
    formats: eT,
    defaultWidth: "full"
  })
};
const nT = tT;
var rT = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, oT = function(e, n, r, s) {
  return rT[e];
};
const iT = oT;
function Va(e) {
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
var sT = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, aT = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, lT = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, uT = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, cT = {
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
}, dT = {
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
}, fT = function(e, n) {
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
}, pT = {
  ordinalNumber: fT,
  era: Va({
    values: sT,
    defaultWidth: "wide"
  }),
  quarter: Va({
    values: aT,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Va({
    values: lT,
    defaultWidth: "wide"
  }),
  day: Va({
    values: uT,
    defaultWidth: "wide"
  }),
  dayPeriod: Va({
    values: cT,
    defaultWidth: "wide",
    formattingValues: dT,
    defaultFormattingWidth: "wide"
  })
};
const hT = pT;
function Ea(e) {
  return function(n) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = n.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(f) ? wT(f, function(y) {
      return y.test(c);
    }) : mT(f, function(y) {
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
function mT(e, n) {
  for (var r in e)
    if (e.hasOwnProperty(r) && n(e[r]))
      return r;
}
function wT(e, n) {
  for (var r = 0; r < e.length; r++)
    if (n(e[r]))
      return r;
}
function vT(e) {
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
var _T = /^(\d+)(th|st|nd|rd)?/i, gT = /\d+/i, $T = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, yT = {
  any: [/^b/i, /^(a|c)/i]
}, bT = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, CT = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, VT = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ET = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, ST = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, IT = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, kT = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, AT = {
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
}, TT = {
  ordinalNumber: vT({
    matchPattern: _T,
    parsePattern: gT,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Ea({
    matchPatterns: $T,
    defaultMatchWidth: "wide",
    parsePatterns: yT,
    defaultParseWidth: "any"
  }),
  quarter: Ea({
    matchPatterns: bT,
    defaultMatchWidth: "wide",
    parsePatterns: CT,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Ea({
    matchPatterns: VT,
    defaultMatchWidth: "wide",
    parsePatterns: ET,
    defaultParseWidth: "any"
  }),
  day: Ea({
    matchPatterns: ST,
    defaultMatchWidth: "wide",
    parsePatterns: IT,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ea({
    matchPatterns: kT,
    defaultMatchWidth: "any",
    parsePatterns: AT,
    defaultParseWidth: "any"
  })
};
const xT = TT;
var LT = {
  code: "en-US",
  formatDistance: JA,
  formatLong: nT,
  formatRelative: iT,
  localize: hT,
  match: xT,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const n1 = LT;
var DT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, OT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, NT = /^'([^]*?)'?$/, MT = /''/g, RT = /[a-zA-Z]/;
function BT(e, n, r) {
  var s, a, u, c, f, m, w, g, y, b, V, O, x, D, S, A, T, R;
  ze(2, arguments);
  var F = String(n), W = Ps(), L = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : W.locale) !== null && s !== void 0 ? s : n1, X = kr((u = (c = (f = (m = r == null ? void 0 : r.firstWeekContainsDate) !== null && m !== void 0 ? m : r == null || (w = r.locale) === null || w === void 0 || (g = w.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && f !== void 0 ? f : W.firstWeekContainsDate) !== null && c !== void 0 ? c : (y = W.locale) === null || y === void 0 || (b = y.options) === null || b === void 0 ? void 0 : b.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(X >= 1 && X <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Me = kr((V = (O = (x = (D = r == null ? void 0 : r.weekStartsOn) !== null && D !== void 0 ? D : r == null || (S = r.locale) === null || S === void 0 || (A = S.options) === null || A === void 0 ? void 0 : A.weekStartsOn) !== null && x !== void 0 ? x : W.weekStartsOn) !== null && O !== void 0 ? O : (T = W.locale) === null || T === void 0 || (R = T.options) === null || R === void 0 ? void 0 : R.weekStartsOn) !== null && V !== void 0 ? V : 0);
  if (!(Me >= 0 && Me <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!L.localize)
    throw new RangeError("locale must contain localize property");
  if (!L.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var he = gt(e);
  if (!AA(he))
    throw new RangeError("Invalid time value");
  var Te = Kf(he), Qe = TA(he, Te), et = {
    firstWeekContainsDate: X,
    weekStartsOn: Me,
    locale: L,
    _originalDate: he
  }, Pe = F.match(OT).map(function(de) {
    var Fe = de[0];
    if (Fe === "p" || Fe === "P") {
      var Ge = zA[Fe];
      return Ge(de, L.formatLong);
    }
    return de;
  }).join("").match(DT).map(function(de) {
    if (de === "''")
      return "'";
    var Fe = de[0];
    if (Fe === "'")
      return PT(de);
    var Ge = UA[Fe];
    if (Ge)
      return !(r != null && r.useAdditionalWeekYearTokens) && jA(de) && kw(de, n, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && YA(de) && kw(de, n, String(e)), Ge(Qe, de, L.localize, et);
    if (Fe.match(RT))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Fe + "`");
    return de;
  }).join("");
  return Pe;
}
function PT(e) {
  var n = e.match(NT);
  return n ? n[1].replace(MT, "'") : e;
}
function r1(e, n) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
  return e;
}
function FT(e) {
  return r1({}, e);
}
var Aw = 1e3 * 60, Hu = 60 * 24, Tw = Hu * 30, xw = Hu * 365;
function sc(e, n, r) {
  var s, a, u;
  ze(2, arguments);
  var c = Ps(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : n1;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var m = IA(e, n);
  if (isNaN(m))
    throw new RangeError("Invalid time value");
  var w = r1(FT(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: m
  }), g, y;
  m > 0 ? (g = gt(n), y = gt(e)) : (g = gt(e), y = gt(n));
  var b = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), V;
  if (b === "floor")
    V = Math.floor;
  else if (b === "ceil")
    V = Math.ceil;
  else if (b === "round")
    V = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var O = y.getTime() - g.getTime(), x = O / Aw, D = Kf(y) - Kf(g), S = (O - D) / Aw, A = r == null ? void 0 : r.unit, T;
  if (A ? T = String(A) : x < 1 ? T = "second" : x < 60 ? T = "minute" : x < Hu ? T = "hour" : S < Tw ? T = "day" : S < xw ? T = "month" : T = "year", T === "second") {
    var R = V(O / 1e3);
    return f.formatDistance("xSeconds", R, w);
  } else if (T === "minute") {
    var F = V(x);
    return f.formatDistance("xMinutes", F, w);
  } else if (T === "hour") {
    var W = V(x / 60);
    return f.formatDistance("xHours", W, w);
  } else if (T === "day") {
    var L = V(S / Hu);
    return f.formatDistance("xDays", L, w);
  } else if (T === "month") {
    var X = V(S / Tw);
    return X === 12 && A !== "month" ? f.formatDistance("xYears", 1, w) : f.formatDistance("xMonths", X, w);
  } else if (T === "year") {
    var Me = V(S / xw);
    return f.formatDistance("xYears", Me, w);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function UT(e, n, r) {
  ze(2, arguments);
  var s = Cw(e, r), a = Cw(n, r);
  return s.getTime() === a.getTime();
}
function WT(e, n) {
  return ze(1, arguments), UT(e, Date.now(), n);
}
function HT(e) {
  return ze(1, arguments), Xg(e, Date.now());
}
function zT(e, n) {
  ze(2, arguments);
  var r = kr(n);
  return VA(e, -r);
}
function qT(e) {
  return ze(1, arguments), Xg(e, zT(Date.now(), 1));
}
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function Lw(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, s = Array(n); r < n; r++)
    s[r] = e[r];
  return s;
}
function GT(e) {
  if (Array.isArray(e))
    return e;
}
function YT(e, n) {
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
function jT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KT(e, n) {
  return GT(e) || YT(e, n) || ZT(e, n) || jT();
}
function ZT(e, n) {
  if (e) {
    if (typeof e == "string")
      return Lw(e, n);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Lw(e, n) : void 0;
  }
}
const o1 = Object.entries, Dw = Object.setPrototypeOf, JT = Object.isFrozen, XT = Object.getPrototypeOf, QT = Object.getOwnPropertyDescriptor;
let Lt = Object.freeze, Dt = Object.seal, Es = Object.create, i1 = typeof Reflect < "u" && Reflect, Zf = i1.apply, Jf = i1.construct;
Lt || (Lt = function(n) {
  return n;
});
Dt || (Dt = function(n) {
  return n;
});
Zf || (Zf = function(n, r) {
  for (var s = arguments.length, a = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++)
    a[u - 2] = arguments[u];
  return n.apply(r, a);
});
Jf || (Jf = function(n) {
  for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    s[a - 1] = arguments[a];
  return new n(...s);
});
const Sa = dt(Array.prototype.forEach), e2 = dt(Array.prototype.lastIndexOf), Ow = dt(Array.prototype.pop), ds = dt(Array.prototype.push), t2 = dt(Array.prototype.splice), Uo = Array.isArray, Ja = dt(String.prototype.toLowerCase), Yd = dt(String.prototype.toString), Nw = dt(String.prototype.match), Ia = dt(String.prototype.replace), Mw = dt(String.prototype.indexOf), n2 = dt(String.prototype.trim), r2 = dt(Number.prototype.toString), o2 = dt(Boolean.prototype.toString), Rw = typeof BigInt > "u" ? null : dt(BigInt.prototype.toString), Bw = typeof Symbol > "u" ? null : dt(Symbol.prototype.toString), bt = dt(Object.prototype.hasOwnProperty), ka = dt(Object.prototype.toString), At = dt(RegExp.prototype.test), _i = i2(TypeError);
function dt(e) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      s[a - 1] = arguments[a];
    return Zf(e, n, s);
  };
}
function i2(e) {
  return function() {
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return Jf(e, r);
  };
}
function ye(e, n) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ja;
  if (Dw && Dw(e, null), !Uo(n))
    return e;
  let s = n.length;
  for (; s--; ) {
    let a = n[s];
    if (typeof a == "string") {
      const u = r(a);
      u !== a && (JT(n) || (n[s] = u), a = u);
    }
    e[a] = !0;
  }
  return e;
}
function s2(e) {
  for (let n = 0; n < e.length; n++)
    bt(e, n) || (e[n] = null);
  return e;
}
function tn(e) {
  const n = Es(null);
  for (const s of o1(e)) {
    var r = KT(s, 2);
    const a = r[0], u = r[1];
    bt(e, a) && (Uo(u) ? n[a] = s2(u) : u && typeof u == "object" && u.constructor === Object ? n[a] = tn(u) : n[a] = u);
  }
  return n;
}
function a2(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return r2(e);
    case "boolean":
      return o2(e);
    case "bigint":
      return Rw ? Rw(e) : "0";
    case "symbol":
      return Bw ? Bw(e) : "Symbol()";
    case "undefined":
      return ka(e);
    case "function":
    case "object": {
      if (e === null)
        return ka(e);
      const n = e, r = Vr(n, "toString");
      if (typeof r == "function") {
        const s = r(n);
        return typeof s == "string" ? s : ka(s);
      }
      return ka(e);
    }
    default:
      return ka(e);
  }
}
function Vr(e, n) {
  for (; e !== null; ) {
    const s = QT(e, n);
    if (s) {
      if (s.get)
        return dt(s.get);
      if (typeof s.value == "function")
        return dt(s.value);
    }
    e = XT(e);
  }
  function r() {
    return null;
  }
  return r;
}
function l2(e) {
  try {
    return At(e, ""), !0;
  } catch {
    return !1;
  }
}
const Pw = Lt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), jd = Lt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Kd = Lt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), u2 = Lt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Zd = Lt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), c2 = Lt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Fw = Lt(["#text"]), Uw = Lt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Jd = Lt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ww = Lt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), lu = Lt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), d2 = Dt(/{{[\w\W]*|^[\w\W]*}}/g), f2 = Dt(/<%[\w\W]*|^[\w\W]*%>/g), p2 = Dt(/\${[\w\W]*/g), h2 = Dt(/^data-[\-\w.\u00B7-\uFFFF]+$/), m2 = Dt(/^aria-[\-\w]+$/), Hw = Dt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), w2 = Dt(/^(?:\w+script|data):/i), v2 = Dt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), _2 = Dt(/^html$/i), g2 = Dt(/^[a-z][.\w]*(-[.\w]+)+$/i), zw = Dt(/<[/\w!]/g), $2 = Dt(/<[/\w]/g), y2 = Dt(/<\/no(script|embed|frames)/i), b2 = Dt(/\/>/i), br = {
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
}, C2 = function() {
  return typeof window > "u" ? null : window;
}, V2 = function(n, r) {
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
}, qw = function() {
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
}, Ao = function(n, r, s, a) {
  return bt(n, r) && Uo(n[r]) ? ye(a.base ? tn(a.base) : {}, n[r], a.transform) : s;
};
function s1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : C2();
  const n = (q) => s1(q);
  if (n.version = "3.4.11", n.removed = [], !e || !e.document || e.document.nodeType !== br.document || !e.Element)
    return n.isSupported = !1, n;
  let r = e.document;
  const s = r, a = s.currentScript;
  e.DocumentFragment;
  const u = e.HTMLTemplateElement, c = e.Node, f = e.Element, m = e.NodeFilter, w = e.NamedNodeMap;
  w === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const g = e.DOMParser, y = e.trustedTypes, b = f.prototype, V = Vr(b, "cloneNode"), O = Vr(b, "remove"), x = Vr(b, "nextSibling"), D = Vr(b, "childNodes"), S = Vr(b, "parentNode"), A = Vr(b, "shadowRoot"), T = Vr(b, "attributes"), R = c && c.prototype ? Vr(c.prototype, "nodeType") : null, F = c && c.prototype ? Vr(c.prototype, "nodeName") : null;
  if (typeof u == "function") {
    const q = r.createElement("template");
    q.content && q.content.ownerDocument && (r = q.content.ownerDocument);
  }
  let W, L = "", X, Me = !1, he = 0;
  const Te = function() {
    if (he > 0)
      throw _i('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
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
    return Me || (X = V2(y, a), Me = !0), X;
  }, de = r, Fe = de.implementation, Ge = de.createNodeIterator, Re = de.createDocumentFragment, on = de.getElementsByTagName, xr = s.importNode;
  let $e = qw();
  n.isSupported = typeof o1 == "function" && typeof S == "function" && Fe && Fe.createHTMLDocument !== void 0;
  const Xs = d2, Qs = f2, Hi = p2, Ct = h2, Gt = m2, sn = w2, gn = v2, an = g2;
  let Jo = Hw, xe = null;
  const Lr = ye({}, [...Pw, ...jd, ...Kd, ...Zd, ...Fw]);
  let Be = null;
  const Nt = ye({}, [...Uw, ...Jd, ...Ww, ...lu]);
  let be = Object.seal(Es(null, {
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
  })), On = null, Vt = null;
  const Mt = Object.seal(Es(null, {
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
  let Xo = !0, Nn = !0, pt = !1, hr = !0, ht = !1, Dr = !0, Yt = !1, Qo = !1, Xn = null, $n = null, mr = !1, yn = !1, Qn = !1, er = !1, Or = !0, Nr = !1;
  const Mr = "user-content-";
  let wr = !0, vr = !1, tr = {}, jt = null;
  const ro = ye({}, [
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
  let oo = null;
  const io = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let so = null;
  const ei = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Rr = "http://www.w3.org/1998/Math/MathML", Br = "http://www.w3.org/2000/svg", Rt = "http://www.w3.org/1999/xhtml";
  let nr = Rt, ao = !1, lo = null;
  const uo = ye({}, [Rr, Br, Rt], Yd), ti = Lt(["mi", "mo", "mn", "ms", "mtext"]);
  let _r = ye({}, ti);
  const ni = Lt(["annotation-xml"]);
  let co = ye({}, ni);
  const zi = ye({}, ["title", "style", "font", "a", "script"]);
  let re = null;
  const Z = ["application/xhtml+xml", "text/html"], Le = "text/html";
  let Q = null, ln = null;
  const ri = r.createElement("form"), oi = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, fo = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ln && ln === v)
      return;
    (!v || typeof v != "object") && (v = {}), v = tn(v), re = Z.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? Le : v.PARSER_MEDIA_TYPE, Q = re === "application/xhtml+xml" ? Yd : Ja, xe = Ao(v, "ALLOWED_TAGS", Lr, {
      transform: Q
    }), Be = Ao(v, "ALLOWED_ATTR", Nt, {
      transform: Q
    }), lo = Ao(v, "ALLOWED_NAMESPACES", uo, {
      transform: Yd
    }), so = Ao(v, "ADD_URI_SAFE_ATTR", ei, {
      transform: Q,
      base: ei
    }), oo = Ao(v, "ADD_DATA_URI_TAGS", io, {
      transform: Q,
      base: io
    }), jt = Ao(v, "FORBID_CONTENTS", ro, {
      transform: Q
    }), On = Ao(v, "FORBID_TAGS", tn({}), {
      transform: Q
    }), Vt = Ao(v, "FORBID_ATTR", tn({}), {
      transform: Q
    }), tr = bt(v, "USE_PROFILES") ? v.USE_PROFILES && typeof v.USE_PROFILES == "object" ? tn(v.USE_PROFILES) : v.USE_PROFILES : !1, Xo = v.ALLOW_ARIA_ATTR !== !1, Nn = v.ALLOW_DATA_ATTR !== !1, pt = v.ALLOW_UNKNOWN_PROTOCOLS || !1, hr = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ht = v.SAFE_FOR_TEMPLATES || !1, Dr = v.SAFE_FOR_XML !== !1, Yt = v.WHOLE_DOCUMENT || !1, yn = v.RETURN_DOM || !1, Qn = v.RETURN_DOM_FRAGMENT || !1, er = v.RETURN_TRUSTED_TYPE || !1, mr = v.FORCE_BODY || !1, Or = v.SANITIZE_DOM !== !1, Nr = v.SANITIZE_NAMED_PROPS || !1, wr = v.KEEP_CONTENT !== !1, vr = v.IN_PLACE || !1, Jo = l2(v.ALLOWED_URI_REGEXP) ? v.ALLOWED_URI_REGEXP : Hw, nr = typeof v.NAMESPACE == "string" ? v.NAMESPACE : Rt, _r = bt(v, "MATHML_TEXT_INTEGRATION_POINTS") && v.MATHML_TEXT_INTEGRATION_POINTS && typeof v.MATHML_TEXT_INTEGRATION_POINTS == "object" ? tn(v.MATHML_TEXT_INTEGRATION_POINTS) : ye({}, ti), co = bt(v, "HTML_INTEGRATION_POINTS") && v.HTML_INTEGRATION_POINTS && typeof v.HTML_INTEGRATION_POINTS == "object" ? tn(v.HTML_INTEGRATION_POINTS) : ye({}, ni);
    const I = bt(v, "CUSTOM_ELEMENT_HANDLING") && v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING == "object" ? tn(v.CUSTOM_ELEMENT_HANDLING) : Es(null);
    if (be = Es(null), bt(I, "tagNameCheck") && oi(I.tagNameCheck) && (be.tagNameCheck = I.tagNameCheck), bt(I, "attributeNameCheck") && oi(I.attributeNameCheck) && (be.attributeNameCheck = I.attributeNameCheck), bt(I, "allowCustomizedBuiltInElements") && typeof I.allowCustomizedBuiltInElements == "boolean" && (be.allowCustomizedBuiltInElements = I.allowCustomizedBuiltInElements), Dt(be), ht && (Nn = !1), Qn && (yn = !0), tr && (xe = ye({}, Fw), Be = Es(null), tr.html === !0 && (ye(xe, Pw), ye(Be, Uw)), tr.svg === !0 && (ye(xe, jd), ye(Be, Jd), ye(Be, lu)), tr.svgFilters === !0 && (ye(xe, Kd), ye(Be, Jd), ye(Be, lu)), tr.mathMl === !0 && (ye(xe, Zd), ye(Be, Ww), ye(Be, lu))), Mt.tagCheck = null, Mt.attributeCheck = null, bt(v, "ADD_TAGS") && (typeof v.ADD_TAGS == "function" ? Mt.tagCheck = v.ADD_TAGS : Uo(v.ADD_TAGS) && (xe === Lr && (xe = tn(xe)), ye(xe, v.ADD_TAGS, Q))), bt(v, "ADD_ATTR") && (typeof v.ADD_ATTR == "function" ? Mt.attributeCheck = v.ADD_ATTR : Uo(v.ADD_ATTR) && (Be === Nt && (Be = tn(Be)), ye(Be, v.ADD_ATTR, Q))), bt(v, "ADD_URI_SAFE_ATTR") && Uo(v.ADD_URI_SAFE_ATTR) && ye(so, v.ADD_URI_SAFE_ATTR, Q), bt(v, "FORBID_CONTENTS") && Uo(v.FORBID_CONTENTS) && (jt === ro && (jt = tn(jt)), ye(jt, v.FORBID_CONTENTS, Q)), bt(v, "ADD_FORBID_CONTENTS") && Uo(v.ADD_FORBID_CONTENTS) && (jt === ro && (jt = tn(jt)), ye(jt, v.ADD_FORBID_CONTENTS, Q)), wr && (xe["#text"] = !0), Yt && ye(xe, ["html", "head", "body"]), xe.table && (ye(xe, ["tbody"]), delete On.tbody), v.TRUSTED_TYPES_POLICY) {
      if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw _i('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw _i('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const H = W;
      W = v.TRUSTED_TYPES_POLICY;
      try {
        L = Qe("");
      } catch (j) {
        throw W = H, j;
      }
    } else
      v.TRUSTED_TYPES_POLICY === null ? (W = void 0, L = "") : (W === void 0 && (W = Pe()), W && typeof L == "string" && (L = Qe("")));
    Lt && Lt(v), ln = v;
  }, ii = ye({}, [...jd, ...Kd, ...u2]), si = ye({}, [...Zd, ...c2]), qi = function(v, I, H) {
    return I.namespaceURI === Rt ? v === "svg" : I.namespaceURI === Rr ? v === "svg" && (H === "annotation-xml" || _r[H]) : Boolean(ii[v]);
  }, Gi = function(v, I, H) {
    return I.namespaceURI === Rt ? v === "math" : I.namespaceURI === Br ? v === "math" && co[H] : Boolean(si[v]);
  }, Pr = function(v, I, H) {
    return I.namespaceURI === Br && !co[H] || I.namespaceURI === Rr && !_r[H] ? !1 : !si[v] && (zi[v] || !ii[v]);
  }, Yi = function(v) {
    let I = S(v);
    (!I || !I.tagName) && (I = {
      namespaceURI: nr,
      tagName: "template"
    });
    const H = Ja(v.tagName), j = Ja(I.tagName);
    return lo[v.namespaceURI] ? v.namespaceURI === Br ? qi(H, I, j) : v.namespaceURI === Rr ? Gi(H, I, j) : v.namespaceURI === Rt ? Pr(H, I, j) : !!(re === "application/xhtml+xml" && lo[v.namespaceURI]) : !1;
  }, Bt = function(v) {
    ds(n.removed, {
      element: v
    });
    try {
      S(v).removeChild(v);
    } catch {
      if (O(v), !S(v))
        throw _i("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ai = function(v) {
    const I = D(v);
    if (I) {
      const j = [];
      Sa(I, (ae) => {
        ds(j, ae);
      }), Sa(j, (ae) => {
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
  }, Mn = function(v, I) {
    try {
      ds(n.removed, {
        attribute: I.getAttributeNode(v),
        from: I
      });
    } catch {
      ds(n.removed, {
        attribute: null,
        from: I
      });
    }
    if (I.removeAttribute(v), v === "is")
      if (yn || Qn)
        try {
          Bt(I);
        } catch {
        }
      else
        try {
          I.setAttribute(v, "");
        } catch {
        }
  }, ji = function(v) {
    const I = T(v);
    if (!!I)
      for (let H = I.length - 1; H >= 0; --H) {
        const j = I[H], ae = j && j.name;
        if (!(typeof ae != "string" || Be[Q(ae)]))
          try {
            v.removeAttribute(ae);
          } catch {
          }
      }
  }, li = function(v) {
    const I = [v];
    for (; I.length > 0; ) {
      const H = I.pop();
      (R ? R(H) : H.nodeType) === br.element && ji(H);
      const ae = D(H);
      if (ae)
        for (let _e = ae.length - 1; _e >= 0; --_e)
          I.push(ae[_e]);
    }
  }, po = function(v) {
    let I = null, H = null;
    if (mr)
      v = "<remove></remove>" + v;
    else {
      const _e = Nw(v, /^[\r\n\t ]+/);
      H = _e && _e[0];
    }
    re === "application/xhtml+xml" && nr === Rt && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const j = W ? Qe(v) : v;
    if (nr === Rt)
      try {
        I = new g().parseFromString(j, re);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = Fe.createDocument(nr, "template", null);
      try {
        I.documentElement.innerHTML = ao ? L : j;
      } catch {
      }
    }
    const ae = I.body || I.documentElement;
    return v && H && ae.insertBefore(r.createTextNode(H), ae.childNodes[0] || null), nr === Rt ? on.call(I, Yt ? "html" : "body")[0] : Yt ? I.documentElement : ae;
  }, ho = function(v) {
    return Ge.call(
      v.ownerDocument || v,
      v,
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null
    );
  }, Fr = function(v) {
    return v = Ia(v, Xs, " "), v = Ia(v, Qs, " "), v = Ia(v, Hi, " "), v;
  }, ea = function(v) {
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
      j.data = Fr(j.data), j = H.nextNode();
    const ae = (I = v.querySelectorAll) === null || I === void 0 ? void 0 : I.call(v, "template");
    ae && Sa(ae, (_e) => {
      mo(_e.content) && ea(_e.content);
    });
  }, Ki = function(v) {
    const I = F ? F(v) : null;
    return typeof I != "string" || Q(I) !== "form" ? !1 : typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || v.attributes !== T(v) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function" || v.nodeType !== R(v) || v.childNodes !== D(v);
  }, mo = function(v) {
    if (!R || typeof v != "object" || v === null)
      return !1;
    try {
      return R(v) === br.documentFragment;
    } catch {
      return !1;
    }
  }, wo = function(v) {
    if (!R || typeof v != "object" || v === null)
      return !1;
    try {
      return typeof R(v) == "number";
    } catch {
      return !1;
    }
  };
  function Rn(q, v, I) {
    q.length !== 0 && Sa(q, (H) => {
      H.call(n, v, I, ln);
    });
  }
  const $l = function(v, I) {
    return !!(Dr && v.hasChildNodes() && !wo(v.firstElementChild) && At(zw, v.textContent) && At(zw, v.innerHTML) || Dr && v.namespaceURI === Rt && I === "style" && wo(v.firstElementChild) || v.nodeType === br.processingInstruction || Dr && v.nodeType === br.comment && At($2, v.data));
  }, ta = function(v, I) {
    if (!On[I] && ra(I) && (be.tagNameCheck instanceof RegExp && At(be.tagNameCheck, I) || be.tagNameCheck instanceof Function && be.tagNameCheck(I)))
      return !1;
    if (wr && !jt[I]) {
      const H = S(v), j = D(v);
      if (j && H) {
        const ae = j.length;
        for (let _e = ae - 1; _e >= 0; --_e) {
          const rt = vr ? j[_e] : V(j[_e], !0);
          H.insertBefore(rt, x(v));
        }
      }
    }
    return Bt(v), !0;
  }, yl = function(v) {
    if (Rn($e.beforeSanitizeElements, v, null), Ki(v))
      return Bt(v), !0;
    const I = Q(F ? F(v) : v.nodeName);
    if (Rn($e.uponSanitizeElement, v, {
      tagName: I,
      allowedTags: xe
    }), $l(v, I))
      return Bt(v), !0;
    if (On[I] || !(Mt.tagCheck instanceof Function && Mt.tagCheck(I)) && !xe[I])
      return ta(v, I);
    if ((R ? R(v) : v.nodeType) === br.element && !Yi(v) || (I === "noscript" || I === "noembed" || I === "noframes") && At(y2, v.innerHTML))
      return Bt(v), !0;
    if (ht && v.nodeType === br.text) {
      const j = Fr(v.textContent);
      v.textContent !== j && (ds(n.removed, {
        element: v.cloneNode()
      }), v.textContent = j);
    }
    return Rn($e.afterSanitizeElements, v, null), !1;
  }, na = function(v, I, H) {
    if (Vt[I] || Or && (I === "id" || I === "name") && (H in r || H in ri))
      return !1;
    const j = Be[I] || Mt.attributeCheck instanceof Function && Mt.attributeCheck(I, v);
    if (!(Nn && At(Ct, I))) {
      if (!(Xo && At(Gt, I))) {
        if (j) {
          if (!so[I]) {
            if (!At(Jo, Ia(H, gn, ""))) {
              if (!((I === "src" || I === "xlink:href" || I === "href") && v !== "script" && Mw(H, "data:") === 0 && oo[v])) {
                if (!(pt && !At(sn, Ia(H, gn, "")))) {
                  if (H)
                    return !1;
                }
              }
            }
          }
        } else if (!(ra(v) && (be.tagNameCheck instanceof RegExp && At(be.tagNameCheck, v) || be.tagNameCheck instanceof Function && be.tagNameCheck(v)) && (be.attributeNameCheck instanceof RegExp && At(be.attributeNameCheck, I) || be.attributeNameCheck instanceof Function && be.attributeNameCheck(I, v)) || I === "is" && be.allowCustomizedBuiltInElements && (be.tagNameCheck instanceof RegExp && At(be.tagNameCheck, H) || be.tagNameCheck instanceof Function && be.tagNameCheck(H))))
          return !1;
      }
    }
    return !0;
  }, Zi = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ra = function(v) {
    return !Zi[Ja(v)] && At(an, v);
  }, Cc = function(v, I, H, j) {
    if (W && typeof y == "object" && typeof y.getAttributeType == "function" && !H)
      switch (y.getAttributeType(v, I)) {
        case "TrustedHTML":
          return Qe(j);
        case "TrustedScriptURL":
          return et(j);
      }
    return j;
  }, bl = function(v, I, H, j) {
    try {
      H ? v.setAttributeNS(H, I, j) : v.setAttribute(I, j), Ki(v) ? Bt(v) : Ow(n.removed);
    } catch {
      Mn(I, v);
    }
  }, oa = function(v) {
    Rn($e.beforeSanitizeAttributes, v, null);
    const I = v.attributes;
    if (!I || Ki(v))
      return;
    const H = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Be,
      forceKeepAttr: void 0
    };
    let j = I.length;
    const ae = Q(v.nodeName);
    for (; j--; ) {
      const _e = I[j], rt = _e.name, Ze = _e.namespaceURI, Kt = _e.value, un = Q(rt), sa = Kt;
      let Et = rt === "value" ? sa : n2(sa);
      if (H.attrName = un, H.attrValue = Et, H.keepAttr = !0, H.forceKeepAttr = void 0, Rn($e.uponSanitizeAttribute, v, H), Et = H.attrValue, Nr && (un === "id" || un === "name") && Mw(Et, Mr) !== 0 && (Mn(rt, v), Et = Mr + Et), Dr && At(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Et)) {
        Mn(rt, v);
        continue;
      }
      if (un === "attributename" && Nw(Et, "href")) {
        Mn(rt, v);
        continue;
      }
      if (!H.forceKeepAttr) {
        if (!H.keepAttr) {
          Mn(rt, v);
          continue;
        }
        if (!hr && At(b2, Et)) {
          Mn(rt, v);
          continue;
        }
        if (ht && (Et = Fr(Et)), !na(ae, un, Et)) {
          Mn(rt, v);
          continue;
        }
        Et = Cc(ae, un, Ze, Et), Et !== sa && bl(v, rt, Ze, Et);
      }
    }
    Rn($e.afterSanitizeAttributes, v, null);
  }, vo = function(v) {
    let I = null;
    const H = ho(v);
    for (Rn($e.beforeSanitizeShadowDOM, v, null); I = H.nextNode(); )
      if (Rn($e.uponSanitizeShadowNode, I, null), yl(I), oa(I), mo(I.content) && vo(I.content), (R ? R(I) : I.nodeType) === br.element) {
        const ae = A(I);
        mo(ae) && (ia(ae), vo(ae));
      }
    Rn($e.afterSanitizeShadowDOM, v, null);
  }, ia = function(v) {
    const I = [{
      node: v,
      shadow: null
    }];
    for (; I.length > 0; ) {
      const H = I.pop();
      if (H.shadow) {
        vo(H.shadow);
        continue;
      }
      const j = H.node, _e = (R ? R(j) : j.nodeType) === br.element, rt = D(j);
      if (rt)
        for (let Ze = rt.length - 1; Ze >= 0; --Ze)
          I.push({
            node: rt[Ze],
            shadow: null
          });
      if (_e) {
        const Ze = F ? F(j) : null;
        if (typeof Ze == "string" && Q(Ze) === "template") {
          const Kt = j.content;
          mo(Kt) && I.push({
            node: Kt,
            shadow: null
          });
        }
      }
      if (_e) {
        const Ze = A(j);
        mo(Ze) && I.push({
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
    if (ao = !q, ao && (q = "<!-->"), typeof q != "string" && !wo(q) && (q = a2(q), typeof q != "string"))
      throw _i("dirty is not a string, aborting");
    if (!n.isSupported)
      return q;
    Qo ? (xe = Xn, Be = $n) : fo(v), ($e.uponSanitizeElement.length > 0 || $e.uponSanitizeAttribute.length > 0) && (xe = tn(xe)), $e.uponSanitizeAttribute.length > 0 && (Be = tn(Be)), n.removed = [];
    const _e = vr && typeof q != "string" && wo(q);
    if (_e) {
      const Kt = F ? F(q) : q.nodeName;
      if (typeof Kt == "string") {
        const un = Q(Kt);
        if (!xe[un] || On[un])
          throw _i("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ki(q))
        throw _i("root node is clobbered and cannot be sanitized in-place");
      try {
        ia(q);
      } catch (un) {
        throw ai(q), un;
      }
    } else if (wo(q))
      I = po("<!---->"), H = I.ownerDocument.importNode(q, !0), H.nodeType === br.element && H.nodeName === "BODY" || H.nodeName === "HTML" ? I = H : I.appendChild(H), ia(H);
    else {
      if (!yn && !ht && !Yt && q.indexOf("<") === -1)
        return W && er ? Qe(q) : q;
      if (I = po(q), !I)
        return yn ? null : er ? L : "";
    }
    I && mr && Bt(I.firstChild);
    const rt = ho(_e ? q : I);
    try {
      for (; j = rt.nextNode(); )
        yl(j), oa(j), mo(j.content) && vo(j.content);
    } catch (Kt) {
      throw _e && ai(q), Kt;
    }
    if (_e)
      return Sa(n.removed, (Kt) => {
        Kt.element && li(Kt.element);
      }), ht && ea(q), q;
    if (yn) {
      if (ht && ea(I), Qn)
        for (ae = Re.call(I.ownerDocument); I.firstChild; )
          ae.appendChild(I.firstChild);
      else
        ae = I;
      return (Be.shadowroot || Be.shadowrootmode) && (ae = xr.call(s, ae, !0)), ae;
    }
    let Ze = Yt ? I.outerHTML : I.innerHTML;
    return Yt && xe["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && At(_2, I.ownerDocument.doctype.name) && (Ze = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + Ze), ht && (Ze = Fr(Ze)), W && er ? Qe(Ze) : Ze;
  }, n.setConfig = function() {
    let q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    fo(q), Qo = !0, Xn = xe, $n = Be;
  }, n.clearConfig = function() {
    ln = null, Qo = !1, Xn = null, $n = null, W = X, L = "";
  }, n.isValidAttribute = function(q, v, I) {
    ln || fo({});
    const H = Q(q), j = Q(v);
    return na(H, j, I);
  }, n.addHook = function(q, v) {
    typeof v == "function" && (!bt($e, q) || ds($e[q], v));
  }, n.removeHook = function(q, v) {
    if (!!bt($e, q)) {
      if (v !== void 0) {
        const I = e2($e[q], v);
        return I === -1 ? void 0 : t2($e[q], I, 1)[0];
      }
      return Ow($e[q]);
    }
  }, n.removeHooks = function(q) {
    !bt($e, q) || ($e[q] = []);
  }, n.removeAllHooks = function() {
    $e = qw();
  }, n;
}
var E2 = s1();
const Ar = (e) => {
  let n = "";
  if (e)
    try {
      n = BT(new Date(e), xt.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return n;
}, a1 = (e) => e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"), l1 = (e) => E2.sanitize(e), u1 = (e, n) => {
  const r = a1(e).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), s = r.length > n ? "..." : "";
  return r.substring(0, n) + s;
}, S2 = (e, n) => {
  let r = n;
  switch (e) {
    case 2:
      r = r.filter(
        (s) => HT(s.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (s) => qT(s.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (s) => WT(s.firstEventTime)
      );
      break;
  }
  return r;
}, ac = "/alec", c1 = "/alec/engine/configuration", d1 = "/alec/llm/configuration", I2 = "/alec/llm/validate", f1 = "/alec/llm/suggestions", k2 = "/alec/llm/usage", p1 = "/alec/situation", A2 = async () => {
  try {
    const e = await Ot.get(`${c1}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, T2 = async (e) => {
  try {
    return (await Ot.post(c1, e)).status === 200;
  } catch {
    return !1;
  }
}, x2 = async () => {
  try {
    const e = await Ot.get(d1);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, L2 = async (e) => {
  try {
    const n = await Ot.post(d1, e);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, D2 = async (e) => {
  try {
    const n = await Ot.post(I2, e);
    return n.status === 200 ? n.data : { ok: !1, message: `Unexpected response (HTTP ${n.status}).` };
  } catch {
    return { ok: !1, message: "Could not reach the server to validate." };
  }
}, h1 = async (e) => {
  try {
    const n = await Ot.get(`${f1}/${e}`);
    return n.status === 200 ? n.data : n.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, O2 = async (e) => {
  try {
    const n = await Ot.post(
      `${f1}/${e}/reanalyze`
    );
    return n.status === 202 || n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, N2 = async (e = 30) => {
  try {
    const n = await Ot.get(`${k2}?days=${e}`);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, m1 = async (e, n) => {
  try {
    const r = await Ot.post(`${ac}/situation/${n}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return n == xt.REJECTED.toLowerCase() && r.status === 200 && await Kg(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, Gw = async (e, n) => {
  try {
    return (await Ot.delete(`${ac}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: n
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, w1 = async (e, n) => {
  try {
    return (await Ot.put(`${ac}/situation/alarm/`, {
      situationId: e,
      alarmIdList: n
    })).status === 200;
  } catch {
    return !1;
  }
}, M2 = async (e) => {
  try {
    return (await Ot.post(p1, e)).status === 200;
  } catch {
    return !1;
  }
}, R2 = async () => {
  try {
    return (await Ot.post(`${p1}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, B2 = async () => {
  try {
    return (await Ot.post(`${ac}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, P2 = window.Vue.defineComponent, kn = window.Vue.unref, Xd = window.Vue.normalizeClass, Sr = window.Vue.createElementVNode, gi = window.Vue.toDisplayString, To = window.Vue.openBlock, xo = window.Vue.createElementBlock, Aa = window.Vue.createCommentVNode, Yw = window.Vue.createVNode, Xf = window.Vue.createTextVNode, F2 = window.Vue.renderList, U2 = window.Vue.Fragment, W2 = window.Vue.pushScopeId, H2 = window.Vue.popScopeId, gp = (e) => (W2("data-v-aab1b2b8"), e = e(), H2(), e), z2 = { class: "content" }, q2 = { class: "title-row" }, G2 = { class: "title" }, Y2 = ["title"], j2 = {
  key: 1,
  class: "accepted"
}, K2 = {
  key: 2,
  class: "rejected"
}, Z2 = /* @__PURE__ */ gp(() => /* @__PURE__ */ Sr("span", { class: "info-title" }, " Duration: ", -1)), J2 = { key: 0 }, X2 = /* @__PURE__ */ gp(() => /* @__PURE__ */ Sr("span", { class: "info-title" }, " First Event: ", -1)), Q2 = { class: "description" }, ex = /* @__PURE__ */ gp(() => /* @__PURE__ */ Sr("hr", null, null, -1)), tx = {
  key: 1,
  class: "count-info"
}, nx = /* @__PURE__ */ Xf(" Alarms: "), rx = { class: "info-title" }, ox = window.Vue.onMounted, ix = window.Vue.ref, sx = /* @__PURE__ */ P2({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: n }) {
    const r = e, s = xt.ACCEPTED, a = xt.REJECTED, u = new Date().getTime(), c = () => {
      var m;
      n("situation-selected", (m = r.situationInfo) == null ? void 0 : m.id);
    }, f = ix("none");
    return ox(async () => {
      var w;
      if (((w = r.situationInfo) == null ? void 0 : w.id) === void 0)
        return;
      const m = await h1(r.situationInfo.id);
      m && m.status && (f.value = m.status);
    }), (m, w) => {
      var g, y, b;
      return To(), xo("div", {
        onClick: c,
        class: Xd(["card", {
          rejected: r.situationInfo.status == kn(a)
        }])
      }, [
        Sr("div", {
          class: Xd(["severity-line", [`${(y = (g = r.situationInfo) == null ? void 0 : g.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
        }, null, 2),
        Sr("div", z2, [
          Sr("div", q2, [
            Sr("div", G2, "Situation " + gi((b = r.situationInfo) == null ? void 0 : b.id), 1),
            f.value !== "none" ? (To(), xo("span", {
              key: 0,
              class: Xd(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + gi(f.value === "pending" ? "\u2026" : ""), 11, Y2)) : Aa("", !0),
            r.situationInfo.status == kn(s) ? (To(), xo("div", j2, [
              Yw(kn(J), {
                icon: kn(Rs),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Aa("", !0),
            r.situationInfo.status == kn(a) ? (To(), xo("div", K2, [
              Yw(kn(J), {
                icon: kn(Jg),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Aa("", !0)
          ]),
          Sr("div", null, [
            Z2,
            Xf(" " + gi(kn(sc)(
              kn(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? Aa("", !0) : (To(), xo("div", J2, [
            X2,
            Xf(gi(kn(Ar)(r.situationInfo.firstEventTime)), 1)
          ])),
          Sr("div", Q2, gi(kn(u1)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          ex,
          r.situationInfo.relatedAlarms ? (To(), xo("div", tx, [
            nx,
            Sr("span", rx, gi(r.situationInfo.relatedAlarms.length), 1)
          ])) : Aa("", !0),
          (To(!0), xo(U2, null, F2(kn(Ne.exports.keys)(
            kn(Ne.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (V) => (To(), xo("div", {
            class: "info-title",
            key: V
          }, " - " + gi(V), 1))), 128))
        ])
      ], 2);
    };
  }
});
const v1 = /* @__PURE__ */ Ve(sx, [["__scopeId", "data-v-aab1b2b8"]]), ax = window.Vue.openBlock, lx = window.Vue.createElementBlock, ux = window.Vue.createElementVNode;
var cx = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const dx = {}, fx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, px = /* @__PURE__ */ ux("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), hx = [
  px
];
function mx(e, n) {
  return ax(), lx("svg", fx, hx);
}
var wx = /* @__PURE__ */ cx(dx, [["render", mx]]);
const vx = window.Vue.openBlock, _x = window.Vue.createElementBlock, _1 = window.Vue.createElementVNode;
var gx = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const $x = {}, yx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bx = /* @__PURE__ */ _1("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), Cx = /* @__PURE__ */ _1("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), Vx = [
  bx,
  Cx
];
function Ex(e, n) {
  return vx(), _x("svg", yx, Vx);
}
var Sx = /* @__PURE__ */ gx($x, [["render", Ex]]);
const Ix = window.Vue.openBlock, kx = window.Vue.createElementBlock, Ax = window.Vue.createElementVNode;
var Tx = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const xx = {}, Lx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Dx = /* @__PURE__ */ Ax("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), Ox = [
  Dx
];
function Nx(e, n) {
  return Ix(), kx("svg", Lx, Ox);
}
var Mx = /* @__PURE__ */ Tx(xx, [["render", Nx]]);
const Rx = window.Vue.openBlock, Bx = window.Vue.createElementBlock, Px = window.Vue.createElementVNode;
var Fx = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const Ux = {}, Wx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Hx = /* @__PURE__ */ Px("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), zx = [
  Hx
];
function qx(e, n) {
  return Rx(), Bx("svg", Wx, zx);
}
var g1 = /* @__PURE__ */ Fx(Ux, [["render", qx]]);
const Gx = window.Vue.defineComponent, Lo = window.Vue.unref, uu = window.Vue.normalizeClass, cu = window.Vue.createVNode, Yx = window.Vue.openBlock, jx = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Kx = { class: "paginator" }, Zx = /* @__PURE__ */ Gx({
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
    return (a, u) => (Yx(), jx("div", Kx, [
      cu(Lo(J), {
        icon: Lo(wx),
        "aria-hidden": "true",
        class: uu(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      cu(Lo(J), {
        icon: Lo(Mx),
        "aria-hidden": "true",
        class: uu(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      cu(Lo(J), {
        icon: Lo(g1),
        "aria-hidden": "true",
        class: uu(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      cu(Lo(J), {
        icon: Lo(Sx),
        "aria-hidden": "true",
        class: uu(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const Jx = /* @__PURE__ */ Ve(Zx, [["__scopeId", "data-v-54e14a59"]]);
const Ce = function(e) {
  e = e || "feather";
  const n = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), n].join("-");
}, Xx = window.Vue.computed, lc = (e, n) => {
  const r = {};
  return Object.keys(n).forEach((s) => {
    r[`${s}Label`] = Xx(() => e.value[s] ? e.value[s] : n[s]);
  }), r;
};
const Bi = function(e, n) {
  return window ? window.setTimeout(e, n) : setTimeout(e, n);
}, Pi = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var Qx = Object.defineProperty, eL = Object.defineProperties, tL = Object.getOwnPropertyDescriptors, jw = Object.getOwnPropertySymbols, nL = Object.prototype.hasOwnProperty, rL = Object.prototype.propertyIsEnumerable, Kw = (e, n, r) => n in e ? Qx(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Zw = (e, n) => {
  for (var r in n || (n = {}))
    nL.call(n, r) && Kw(e, r, n[r]);
  if (jw)
    for (var r of jw(n))
      rL.call(n, r) && Kw(e, r, n[r]);
  return e;
}, oL = (e, n) => eL(e, tL(n));
const iL = window.Vue.defineComponent, sL = window.Vue.h;
var aL = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const lL = {
  center: {
    type: Boolean,
    default: !1
  }
}, uL = iL({
  props: lL,
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
        this.styles = oL(Zw({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Pi(this.failsafe), this.failsafe = Bi(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return sL("div", {
        style: Zw({}, this.styles),
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
var Go = /* @__PURE__ */ aL(uL, [["__scopeId", "data-v-18e2a5db"]]);
const cL = window.Vue.openBlock, dL = window.Vue.createElementBlock, fL = window.Vue.createElementVNode;
var pL = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const hL = {}, mL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, wL = /* @__PURE__ */ fL("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), vL = [
  wL
];
function _L(e, n) {
  return cL(), dL("svg", mL, vL);
}
var Fs = /* @__PURE__ */ pL(hL, [["render", _L]]);
const Jw = window.Vue.computed, gL = (e, n, r) => {
  const s = Jw(() => n.value.filter((u) => !u.disabled)), a = Jw(() => e.value ? s.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(s.value[s.value.length - 1]) : r(s.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === s.value.length - 1 ? r(s.value[0]) : r(s.value[a.value + 1]));
    }
  };
};
const $L = window.Vue.openBlock, yL = window.Vue.createElementBlock, $p = window.Vue.createElementVNode;
var bL = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const CL = {}, VL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, EL = /* @__PURE__ */ $p("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), SL = /* @__PURE__ */ $p("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), IL = /* @__PURE__ */ $p("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), kL = [
  EL,
  SL,
  IL
];
function AL(e, n) {
  return $L(), yL("svg", VL, kL);
}
var TL = /* @__PURE__ */ bL(CL, [["render", AL]]), xL = Object.defineProperty, LL = Object.defineProperties, DL = Object.getOwnPropertyDescriptors, Xw = Object.getOwnPropertySymbols, OL = Object.prototype.hasOwnProperty, NL = Object.prototype.propertyIsEnumerable, Qw = (e, n, r) => n in e ? xL(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, $1 = (e, n) => {
  for (var r in n || (n = {}))
    OL.call(n, r) && Qw(e, r, n[r]);
  if (Xw)
    for (var r of Xw(n))
      NL.call(n, r) && Qw(e, r, n[r]);
  return e;
}, y1 = (e, n) => LL(e, DL(n));
const Us = window.Vue.defineComponent, ll = window.Vue.resolveComponent, Ir = window.Vue.openBlock, Is = window.Vue.createElementBlock, ML = window.Vue.createVNode, zu = window.Vue.createBlock, RL = window.Vue.withModifiers, Bs = window.Vue.inject, ul = window.Vue.computed, BL = window.Vue.normalizeClass, fs = window.Vue.createElementVNode, qu = window.Vue.toDisplayString, Ou = window.Vue.renderSlot, Qa = window.Vue.createCommentVNode, PL = window.Vue.withDirectives, FL = window.Vue.vShow, Qf = window.Vue.ref, ev = window.Vue.toRef, tv = window.Vue.nextTick, ep = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const yp = window.Vue.provide, nv = window.Vue.isRef, UL = window.Vue.onBeforeUnmount;
var hl = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const WL = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, HL = Us({
  props: WL,
  components: {
    FeatherIcon: J
  }
}), zL = ["title"];
function qL(e, n, r, s, a, u) {
  const c = ll("FeatherIcon");
  return Ir(), Is("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    ML(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, zL);
}
var GL = /* @__PURE__ */ hl(HL, [["render", qL], ["__scopeId", "data-v-4265058e"]]);
const YL = Us({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Fs;
    }
  },
  components: {
    ActionIcon: GL
  }
});
function jL(e, n, r, s, a, u) {
  const c = ll("ActionIcon");
  return Ir(), zu(c, {
    onClick: n[0] || (n[0] = RL((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var KL = /* @__PURE__ */ hl(YL, [["render", jL]]);
const ZL = Us({
  computed: {
    errorIcon() {
      return TL;
    }
  },
  components: {
    FeatherIcon: J
  }
});
function JL(e, n, r, s, a, u) {
  const c = ll("FeatherIcon");
  return Ir(), zu(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var XL = /* @__PURE__ */ hl(ZL, [["render", JL], ["__scopeId", "data-v-0b8faef3"]]);
const QL = {
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
}, eD = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, tD = Us({
  emits: eD,
  props: QL,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = Bs("wrapperOptions", {}), n = Bs("validationErrorMessage", !1), r = ul(() => e.error ? e.error : n && n.value ? n.value : !1);
    return y1($1({}, e), { error: r });
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
    ClearIcon: KL,
    ErrorIcon: XL
  }
}), nD = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, rD = ["for"], oD = { class: "prefix" }, iD = { class: "post" };
function sD(e, n, r, s, a, u) {
  const c = ll("ClearIcon"), f = ll("ErrorIcon");
  return Ir(), Is("div", {
    class: BL(["feather-input-wrapper-container", e.containerCls])
  }, [
    fs("fieldset", nD, [
      fs("legend", null, qu(e.label), 1)
    ]),
    fs("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, qu(e.label), 9, rD),
    fs("div", {
      class: "feather-input-wrapper",
      onClick: n[1] || (n[1] = (...m) => e.handleWrapperClick && e.handleWrapperClick(...m))
    }, [
      fs("div", oD, [
        Ou(e.$slots, "pre", {}, void 0, !0)
      ]),
      Ou(e.$slots, "default", {}, void 0, !0),
      fs("div", iD, [
        e.showClear && e.computedClearText ? (Ir(), zu(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: n[0] || (n[0] = (m) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Qa("", !0),
        e.error ? (Ir(), zu(f, { key: 1 })) : Qa("", !0),
        Ou(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var uc = /* @__PURE__ */ hl(tD, [["render", sD], ["__scopeId", "data-v-4db296db"]]);
const aD = Us({
  setup() {
    const e = Bs("subTextOptions", {}), n = Bs("validationErrorMessage", !1), r = ul(() => e.error ? e.error : n && n.value ? n.value : "");
    return y1($1({}, e), { error: r });
  }
}), lD = { class: "feather-input-sub-text" }, uD = {
  key: 0,
  class: "feather-input-spacer"
}, cD = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, dD = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function fD(e, n, r, s, a, u) {
  return PL((Ir(), Is("div", lD, [
    !e.hint && !e.error.length ? (Ir(), Is("div", uD, "\xA0")) : Qa("", !0),
    e.hint && !e.error.length ? (Ir(), Is("div", cD, qu(e.hint), 1)) : Qa("", !0),
    e.error.length > 0 ? (Ir(), Is("div", dD, qu(e.error), 1)) : Qa("", !0),
    Ou(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [FL, !e.inline || e.hint || e.error.length]
  ]);
}
var Ws = /* @__PURE__ */ hl(aD, [["render", fD], ["__scopeId", "data-v-8e0ac99e"]]);
const pD = {
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
Us({
  props: pD,
  setup(e) {
    const n = Bs("featherFormErrors", Qf([])), r = ev(e, "errorList"), s = ul(() => {
      var g;
      return (g = r.value) != null && g.length ? r.value : n.value;
    }), a = ev(e, "generalError"), u = (g) => {
      document.getElementById(g).focus();
    }, c = (g) => g.replace(/ \*$/, ""), f = Qf(), m = (g) => `${c(g.label)} - ${g.message}`, w = ul(() => (s.value.length && tv(() => f.value.focus()), e.headingText(s.value)));
    return ep(a, (g) => {
      g.length && tv(() => f.value.focus());
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
const Hs = (e, n, r, s, a) => {
  const u = Bs("featherForm", !1);
  if (s && u && e.value) {
    const c = Qf("");
    yp("validationErrorMessage", c);
    const f = () => {
      if (a && nv(a) && a.value)
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
    return a && nv(a) && ep(a, () => {
      u.runValidation();
    }), ep(e, (g, y) => {
      g && u && u.register(g, w), y && u && u.deregister(y);
    }, { immediate: !0 }), UL(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, zs = (e) => ({
  inherittedAttrs: ul(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), qs = {
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
}, Gs = (e) => {
  yp("subTextOptions", e);
}, cc = {
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
}, dc = (e) => {
  yp("wrapperOptions", e);
}, du = window.Vue.ref, hD = window.Vue.watch, mD = window.Vue.watchEffect, rv = window.Vue.computed, Qd = window.Vue.provide, b1 = (e, n, r, s, a) => {
  const u = du([]), c = du(), f = du(), m = du();
  mD(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((A) => A.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let A = u.value.filter((T) => !T.disabled);
      A = A.length ? A : u.value, f.value = A[0], f.value.first = !0;
    }
  }), hD(c, (S, A) => {
    A && (A.checked = !1), S && (S.checked = !0);
  });
  const w = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (n("update:modelValue", S.value), c.value = S, S.focus()));
  }, g = rv(() => c.value || f.value), y = gL(g, u, w), b = rv(() => Ce("feather-radio-group"));
  m.value = b.value;
  const { validate: V } = Hs(m, e, r, s, a);
  return Qd("register", (S) => {
    u.value = [...u.value, S], m.value === b.value && (m.value = S.id);
  }), Qd("select", w), Qd("blur", (S) => {
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
var wD = Object.defineProperty, vD = Object.defineProperties, _D = Object.getOwnPropertyDescriptors, ov = Object.getOwnPropertySymbols, gD = Object.prototype.hasOwnProperty, $D = Object.prototype.propertyIsEnumerable, iv = (e, n, r) => n in e ? wD(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, xs = (e, n) => {
  for (var r in n || (n = {}))
    gD.call(n, r) && iv(e, r, n[r]);
  if (ov)
    for (var r of ov(n))
      $D.call(n, r) && iv(e, r, n[r]);
  return e;
}, C1 = (e, n) => vD(e, _D(n));
const jo = window.Vue.defineComponent, el = window.Vue.inject, Gu = window.Vue.computed, tl = window.Vue.ref, Jn = window.Vue.resolveComponent, Ln = window.Vue.openBlock, ml = window.Vue.createElementBlock, V1 = window.Vue.normalizeClass, Tr = window.Vue.renderSlot, zo = window.Vue.createBlock, cl = window.Vue.createCommentVNode, Yu = window.Vue.createElementVNode, yD = window.Vue.withModifiers, fc = window.Vue.createVNode, E1 = window.Vue.toRef, tp = window.Vue.mergeProps, to = window.Vue.withCtx, bD = window.Vue.h, CD = window.Vue.provide;
var Ko = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const VD = {
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
}, ED = jo({
  props: VD,
  setup(e) {
    const n = el("isCondensed", null), r = Gu(() => n || e.condensed), s = tl(!1);
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
    FeatherRipple: Go
  }
}), SD = ["aria-disabled"];
function ID(e, n, r, s, a, u) {
  const c = Jn("FeatherRipple");
  return Ln(), ml("div", {
    class: V1(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: n[0] || (n[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: n[1] || (n[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    Tr(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (Ln(), zo(c, { key: 0 })) : cl("", !0)
  ], 42, SD);
}
var pc = /* @__PURE__ */ Ko(ED, [["render", ID], ["__scopeId", "data-v-44d413dc"]]);
const kD = {
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
}, AD = jo({
  emits: ["delete"],
  props: kD,
  setup(e, n) {
    return {
      handleDelete: () => {
        e.disabled || n.emit("delete");
      },
      icon: Fs
    };
  },
  components: {
    FeatherIcon: J
  }
}), TD = { class: "chip-delete" }, xD = ["aria-label", "aria-describedby"];
function LD(e, n, r, s, a, u) {
  const c = Jn("FeatherIcon");
  return Ln(), ml("span", TD, [
    Yu("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: n[0] || (n[0] = yD((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      fc(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, xD)
  ]);
}
var DD = /* @__PURE__ */ Ko(AD, [["render", LD], ["__scopeId", "data-v-4bae6cb4"]]);
const OD = jo({
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
}), ND = ["title"];
function MD(e, n, r, s, a, u) {
  return Ln(), ml("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    Tr(e.$slots, "default", {}, void 0, !0)
  ], 8, ND);
}
var hc = /* @__PURE__ */ Ko(OD, [["render", MD], ["__scopeId", "data-v-1a0445b2"]]);
const RD = {}, BD = {
  class: "chip-icon",
  role: "presentation"
};
function PD(e, n) {
  return Ln(), ml("span", BD, [
    Tr(e.$slots, "default", {}, void 0, !0)
  ]);
}
var mc = /* @__PURE__ */ Ko(RD, [["render", PD], ["__scopeId", "data-v-2230176f"]]);
const sv = {
  delete: "Remove"
}, FD = jo({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => sv
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, n) {
    const r = lc(E1(e, "labels"), sv), s = Gu(() => Ce("chip-text")), a = () => {
      e.disabled || n.emit("click");
    }, u = xs({}, n.attrs);
    return e.disabled && delete u.onClick, C1(xs({}, r), {
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
    Chip: pc,
    DeleteIcon: DD,
    Label: hc,
    PreIcon: mc
  }
}), UD = ["aria-disabled"];
function WD(e, n, r, s, a, u) {
  const c = Jn("PreIcon"), f = Jn("Label"), m = Jn("DeleteIcon"), w = Jn("Chip");
  return Ln(), zo(w, tp(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: to(() => [
      Yu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Yu("span", tp(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (Ln(), zo(c, { key: 0 }, {
            default: to(() => [
              Tr(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : cl("", !0),
          fc(f, { id: e.chipTextId }, {
            default: to(() => [
              Tr(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, UD),
      e.canDelete ? (Ln(), zo(m, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: n[0] || (n[0] = (g) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : cl("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var HD = /* @__PURE__ */ Ko(FD, [["render", WD], ["__scopeId", "data-v-48b2704a"]]);
const zD = jo({
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
    Chip: pc,
    Label: hc,
    PreIcon: mc
  }
}), qD = ["aria-disabled"];
function GD(e, n, r, s, a, u) {
  const c = Jn("PreIcon"), f = Jn("Label"), m = Jn("Chip");
  return Ln(), zo(m, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: to(() => [
      Yu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (Ln(), zo(c, { key: 0 }, {
          default: to(() => [
            Tr(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : cl("", !0),
        fc(f, null, {
          default: to(() => [
            Tr(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, qD)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var YD = /* @__PURE__ */ Ko(zD, [["render", GD], ["__scopeId", "data-v-3e0c4eba"]]);
const jD = jo({
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
    const n = tl(!1), r = tl(!1), s = Gu(() => Ce("chip-label-id")), a = Gu(() => n.value || r.value ? 0 : -1), u = tl(), c = () => {
      u.value.$el.focus();
    }, f = el("register", (b) => {
    }), m = el("blur", (b) => {
    }), w = el("select", (b) => {
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
    Chip: pc,
    Label: hc,
    PreIcon: mc
  }
});
function KD(e, n, r, s, a, u) {
  const c = Jn("PreIcon"), f = Jn("Label"), m = Jn("Chip");
  return Ln(), zo(m, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: V1(["focus hover", { selected: e.checked }]),
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
    default: to(() => [
      e.hasIcon ? (Ln(), zo(c, { key: 0 }, {
        default: to(() => [
          Tr(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : cl("", !0),
      fc(f, { id: e.labelId }, {
        default: to(() => [
          Tr(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var ZD = /* @__PURE__ */ Ko(jD, [["render", KD], ["__scopeId", "data-v-bbcc2f70"]]);
const JD = {
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
}, av = jo({
  props: JD,
  setup() {
    return { format: el("chipListFormat", "") };
  },
  render() {
    const e = (n) => bD(n, xs(xs({}, this.$props), this.$attrs), xs({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(HD) : this.format === "radio" ? e(ZD) : e(YD);
  }
}), XD = {
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
}, QD = jo({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: XD,
  setup(e, n) {
    const r = e.mode === "list" ? "grid" : e.mode;
    CD("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const c = E1(e, "modelValue");
      return C1(xs({
        attrs: {
          role: "radiogroup"
        }
      }, b1(c, n.emit, e.label, {}, tl(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), eO = ["aria-label"];
function tO(e, n, r, s, a, u) {
  return Ln(), ml("div", tp(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: n[0] || (n[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    Tr(e.$slots, "default", {}, void 0, !0)
  ], 16, eO);
}
var nO = /* @__PURE__ */ Ko(QD, [["render", tO], ["__scopeId", "data-v-1e06f41d"]]);
const rO = window.Vue.defineComponent, oO = window.Vue.normalizeClass, iO = window.Vue.openBlock, sO = window.Vue.createElementBlock, aO = window.Vue.createCommentVNode, lO = /* @__PURE__ */ rO({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const n = e;
    return (r, s) => n != null && n.severity ? (iO(), sO("span", {
      key: 0,
      class: oO(["circle", [`${n.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : aO("", !0);
  }
});
const uO = /* @__PURE__ */ Ve(lO, [["__scopeId", "data-v-e08880d6"]]), cO = window.Vue.defineComponent, Ta = window.Vue.unref, S1 = window.Vue.createTextVNode, ef = window.Vue.normalizeClass, tf = window.Vue.withCtx, dO = window.Vue.createVNode, fO = window.Vue.renderList, pO = window.Vue.Fragment, fu = window.Vue.openBlock, hO = window.Vue.createElementBlock, nf = window.Vue.createBlock, lv = window.Vue.createCommentVNode, mO = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const wO = /* @__PURE__ */ S1(" ALL "), uv = window.Vue.ref, vO = window.Vue.watch, _O = window.Vue.computed, gO = window.Vue.reactive, $O = /* @__PURE__ */ cO({
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
    const r = e, s = uv(!1), a = _O(() => Ne.exports.keys(Ne.exports.groupBy(r.alarms, r.property))), u = uv(
      (m = r.preSelected) != null && m.length ? r.preSelected : ["all"]
    ), c = gO({
      alarms: r.alarms
    }), f = (w) => {
      u.value = u.value.filter((g) => g !== "all"), u.value.includes(w) ? u.value = u.value.filter((g) => g !== w) : u.value.push(w), (w === "all" || u.value.length === 0) && (u.value = ["all"]), n("selected-option", u.value);
    };
    return vO(r, () => {
      var w;
      u.value = (w = r.preSelected) != null && w.length ? r.preSelected : ["all"], c.alarms = r.alarms, s.value = !1;
    }), (w, g) => Ta(a).length > 0 ? (fu(), nf(Ta(nO), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: ef({ vertical: r.isVertical })
    }, {
      default: tf(() => [
        dO(Ta(av), {
          class: ef({ clicked: u.value.includes("all") }),
          onClick: g[0] || (g[0] = (y) => f("all"))
        }, {
          default: tf(() => [
            wO
          ]),
          _: 1
        }, 8, ["class"]),
        (fu(!0), hO(pO, null, fO(Ta(a), (y) => (fu(), nf(Ta(av), {
          class: ef([
            { clicked: u.value.includes(y) },
            `${y == null ? void 0 : y.toLowerCase()}-bg`
          ]),
          key: y,
          onClick: (b) => f(y)
        }, {
          default: tf(() => [
            e.property == "severity" ? (fu(), nf(uO, {
              key: 0,
              severity: y
            }, null, 8, ["severity"])) : lv("", !0),
            S1(mO(y), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : lv("", !0);
  }
});
const yO = /* @__PURE__ */ Ve($O, [["__scopeId", "data-v-f000b5a0"]]);
const bO = window.Vue.watch, CO = window.Vue.onBeforeUnmount, VO = window.Vue.ref, EO = window.Vue.onMounted, SO = (e) => {
  const n = VO(!1);
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
  return EO(() => {
    const c = bO(n, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    CO(() => {
      c(), u();
    });
  }), n;
}, IO = window.Vue.watch, kO = window.Vue.onBeforeUnmount, AO = window.Vue.ref, TO = window.Vue.onMounted, xO = (e, n) => {
  const r = AO(!1), s = (c) => {
    c.target === window && n(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((w) => w && w.contains(c.target)) || n(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return TO(() => {
    const c = IO(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    kO(() => {
      c(), u();
    });
  }), r;
}, LO = window.Vue.watch, DO = window.Vue.onBeforeUnmount, OO = window.Vue.ref, I1 = (e, n) => {
  const r = OO(!1);
  let s = !1;
  const a = (m) => {
    n(m), s = !1;
  };
  function u(m) {
    s || (requestAnimationFrame(() => a(m)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = LO([e, r], ([m, w], g) => {
    g && g.length && g[0] && g[0].removeEventListener("scroll", u, !0), w && m ? m.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return DO(() => {
    f(), c();
  }), r;
}, NO = window.Vue.defineComponent, Zr = window.Vue.ref, cv = window.Vue.toRef, MO = window.Vue.onMounted, RO = window.Vue.watch, dv = window.Vue.computed, BO = window.Vue.nextTick, fv = window.Vue.openBlock, pv = window.Vue.createElementBlock, hv = window.Vue.renderSlot, PO = window.Vue.normalizeClass, FO = window.Vue.normalizeStyle, UO = window.Vue.createCommentVNode;
var WO = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const HO = {
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
}, zO = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, qO = NO({
  emits: zO,
  props: HO,
  setup(e, n) {
    const r = Zr(), s = Zr(), a = cv(e, "open"), u = cv(e, "noExpand"), c = Zr("auto"), f = Zr(), m = Zr(e.triggerId || Ce("feather-menu-trigger")), w = Zr(Ce("feather-menu-dropdown")), g = Zr(""), y = Zr("");
    MO(() => {
      f.value = window;
    });
    const b = Zr(!1), V = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), O = () => {
      if (!s.value)
        return;
      const F = r.value.getBoundingClientRect();
      b.value = !0, c.value = "auto", BO(() => {
        let { height: W, width: L } = s.value.getBoundingClientRect();
        const X = V(), Me = X.height, he = X.width;
        e.fill && L < F.width ? (c.value = F.width + "px", L = F.width) : c.value = L + "px";
        let Te = 0;
        Me - F.bottom < W && F.top >= W ? (Te = F.top - W, e.cover && (Te += F.height)) : (Te = F.bottom, e.cover && (Te -= F.height));
        let Qe = e.right ? F.right - L : F.left;
        !e.right && F.right >= L && he - F.left < L && (Qe = F.right - L), e.right && F.right <= L && he - F.left > L && (Qe = F.left), y.value = `${Qe}px`, g.value = `${Te}px`, b.value = !1;
      });
    }, D = xO(r, (F) => {
      n.emit("outside-click", F);
    }), S = SO(O), A = I1(f, O);
    RO([a, s], ([F, W]) => {
      F && W && O(), D.value = F, S.value = F, A.value = F;
    });
    const T = dv(() => {
      const F = {
        id: m.value,
        "aria-haspopup": "true"
      };
      return a.value && (F["aria-controls"] = w.value), u.value || (F["aria-expanded"] = a.value ? "true" : "false"), F;
    }), R = dv(() => ({
      click: (F) => {
        n.emit("trigger-click", F);
      }
    }));
    return {
      positionTop: g,
      positionLeft: y,
      triggerId: m,
      triggerAttrs: T,
      triggerListeners: R,
      menuId: w,
      menu: s,
      menuWidth: c,
      root: r,
      calculatePosition: O,
      calculating: b
    };
  }
}), GO = ["data-ref-id"], YO = ["data-ref-id", "id"];
function jO(e, n, r, s, a, u) {
  return fv(), pv("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    hv(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (fv(), pv("div", {
      key: 0,
      class: PO(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: FO({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      hv(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, YO)) : UO("", !0)
  ], 8, GO);
}
var k1 = /* @__PURE__ */ WO(qO, [["render", jO], ["__scopeId", "data-v-f75af406"]]), KO = {
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
const ZO = window.Vue.openBlock, JO = window.Vue.createElementBlock, XO = window.Vue.createElementVNode;
var QO = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const eN = {}, tN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, nN = /* @__PURE__ */ XO("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), rN = [
  nN
];
function oN(e, n) {
  return ZO(), JO("svg", tN, rN);
}
var iN = /* @__PURE__ */ QO(eN, [["render", oN]]);
const sN = window.Vue.openBlock, aN = window.Vue.createElementBlock, bp = window.Vue.createElementVNode;
var lN = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const uN = {}, cN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, dN = /* @__PURE__ */ bp("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), fN = /* @__PURE__ */ bp("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), pN = /* @__PURE__ */ bp("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), hN = [
  dN,
  fN,
  pN
];
function mN(e, n) {
  return sN(), aN("svg", cN, hN);
}
var wN = /* @__PURE__ */ lN(uN, [["render", mN]]);
const vN = window.Vue.openBlock, _N = window.Vue.createElementBlock, gN = window.Vue.createElementVNode;
var $N = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const yN = {}, bN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, CN = /* @__PURE__ */ gN("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), VN = [
  CN
];
function EN(e, n) {
  return vN(), _N("svg", bN, VN);
}
var wl = /* @__PURE__ */ $N(yN, [["render", EN]]);
const dl = function(e, n) {
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
const SN = window.Vue.defineComponent, IN = window.Vue.openBlock, kN = window.Vue.createElementBlock, AN = window.Vue.normalizeClass, TN = window.Vue.pushScopeId, xN = window.Vue.popScopeId, np = window.Vue.createElementVNode;
var LN = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const DN = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, ON = {
  click: (e) => !0
}, NN = SN({
  emits: ON,
  props: DN,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), A1 = (e) => (TN("data-v-07e020f5"), e = e(), xN(), e), MN = /* @__PURE__ */ A1(() => /* @__PURE__ */ np("div", { class: "track" }, null, -1)), RN = /* @__PURE__ */ A1(() => /* @__PURE__ */ np("div", { class: "switcher" }, [
  /* @__PURE__ */ np("div", { class: "switch-circle" })
], -1)), BN = [
  MN,
  RN
];
function PN(e, n, r, s, a, u) {
  return IN(), kN("div", {
    class: AN(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: n[0] || (n[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, BN, 2);
}
var FN = /* @__PURE__ */ LN(NN, [["render", PN], ["__scopeId", "data-v-07e020f5"]]), UN = Object.defineProperty, WN = Object.defineProperties, HN = Object.getOwnPropertyDescriptors, mv = Object.getOwnPropertySymbols, zN = Object.prototype.hasOwnProperty, qN = Object.prototype.propertyIsEnumerable, wv = (e, n, r) => n in e ? UN(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, vv = (e, n) => {
  for (var r in n || (n = {}))
    zN.call(n, r) && wv(e, r, n[r]);
  if (mv)
    for (var r of mv(n))
      qN.call(n, r) && wv(e, r, n[r]);
  return e;
}, _v = (e, n) => WN(e, HN(n));
const Cp = window.Vue.defineComponent, $i = window.Vue.h, GN = window.Vue.openBlock, YN = window.Vue.createElementBlock, jN = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var T1 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const KN = {
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
}, ZN = Cp({
  inheritAttrs: !1,
  props: KN,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = $i("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = $i("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = $i("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : $i(Go);
    if (this.asLi)
      return $i("li", _v(vv({}, this.$attrs), {
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
    const u = $i("a", _v(vv({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, s, a]);
    return $i("li", {}, [u]);
  }
});
var vl = /* @__PURE__ */ T1(ZN, [["__scopeId", "data-v-7c46b2b3"]]);
Cp({
  components: {
    FeatherListItem: vl
  }
});
const JN = {}, XN = { class: "feather-list" };
function QN(e, n) {
  return GN(), YN("ul", XN, [
    jN(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Vp = /* @__PURE__ */ T1(JN, [["render", QN], ["__scopeId", "data-v-941a1d50"]]);
const eM = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, tM = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
Cp({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: eM,
  props: tM,
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
  components: { SwitchRender: FN, FeatherListItem: vl }
});
var nM = Object.defineProperty, rM = Object.defineProperties, oM = Object.getOwnPropertyDescriptors, gv = Object.getOwnPropertySymbols, iM = Object.prototype.hasOwnProperty, sM = Object.prototype.propertyIsEnumerable, $v = (e, n, r) => n in e ? nM(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Dn = (e, n) => {
  for (var r in n || (n = {}))
    iM.call(n, r) && $v(e, r, n[r]);
  if (gv)
    for (var r of gv(n))
      sM.call(n, r) && $v(e, r, n[r]);
  return e;
}, aM = (e, n) => rM(e, oM(n));
const Ys = window.Vue.defineComponent, Se = window.Vue.openBlock, vt = window.Vue.createElementBlock, vn = window.Vue.createElementVNode, fr = window.Vue.toDisplayString, Zn = window.Vue.createCommentVNode, ct = window.Vue.resolveComponent, Kn = window.Vue.createBlock, zt = window.Vue.withCtx, Ls = window.Vue.Fragment, nl = window.Vue.renderList, _n = window.Vue.createVNode, Ep = window.Vue.withModifiers, Mi = window.Vue.normalizeClass, rp = window.Vue.renderSlot, x1 = window.Vue.createTextVNode, lM = window.Vue.pushScopeId, uM = window.Vue.popScopeId, L1 = window.Vue.reactive, D1 = window.Vue.nextTick, rf = window.Vue.markRaw, of = window.Vue.toRef, yv = window.Vue.computed, cM = window.Vue.toRefs, ps = window.Vue.ref, sf = window.Vue.mergeProps, bv = window.Vue.toHandlers, pu = window.Vue.withDirectives, hu = window.Vue.vShow;
var wc = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, Sp = {
  query: {
    type: String
  }
}, Wi = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const dM = Ys({
  mixins: [],
  props: Dn(Dn({
    text: {
      type: String,
      required: !0
    }
  }, wc), Sp),
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
}), fM = {
  key: 0,
  class: "highlight"
}, pM = { key: 1 };
function hM(e, n, r, s, a, u) {
  return Se(), vt("span", null, [
    vn("span", null, fr(e.beginning), 1),
    e.highlighted ? (Se(), vt("span", fM, fr(e.highlighted), 1)) : Zn("", !0),
    e.end ? (Se(), vt("span", pM, fr(e.end), 1)) : Zn("", !0)
  ]);
}
var O1 = /* @__PURE__ */ Wi(dM, [["render", hM], ["__scopeId", "data-v-8abe2492"]]);
const mM = Ys({
  emits: ["select", "deselect"],
  props: Dn(Dn({
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
  }, wc), Sp),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const n = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        dl(n, r.$el);
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
    FeatherList: Vp,
    FeatherListItem: vl,
    Highlighter: O1
  }
}), wM = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function vM(e, n, r, s, a, u) {
  const c = ct("Highlighter"), f = ct("FeatherListItem"), m = ct("FeatherList");
  return Se(), Kn(m, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: zt(() => [
      (Se(!0), vt(Ls, null, nl(e.items, (w, g) => (Se(), vt(Ls, {
        key: w[e.textProp]
      }, [
        _n(f, {
          "as-li": "",
          id: e.getId(g),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(w),
          highlighted: e.isActive(g),
          selected: e.isSelected(w),
          onClick: Ep((y) => e.select(w), ["stop"])
        }, {
          default: zt(() => [
            _n(c, {
              highlight: e.highlight,
              query: e.query,
              text: w[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            w._new ? (Se(), vt("span", wM, fr(e.newLabel), 1)) : Zn("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && w._new ? (Se(), vt("li", {
          role: "presentation",
          key: w[e.textProp] + "hr",
          class: "hr"
        })) : Zn("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var _M = /* @__PURE__ */ Wi(mM, [["render", vM], ["__scopeId", "data-v-f623434a"]]);
const gM = Ys({
  emits: ["select"],
  props: Dn(Dn({
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
  }, wc), Sp),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const n = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        dl(n, r);
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
    Highlighter: O1
  }
}), $M = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, yM = ["aria-multiselectable"], bM = { role: "row" }, CM = ["aria-selected", "onClick"], VM = ["id", "aria-selected"], EM = { key: 1 };
function SM(e, n, r, s, a, u) {
  const c = ct("Highlighter");
  return Se(), vt("div", $M, [
    vn("table", {
      class: Mi(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      vn("thead", null, [
        vn("tr", bM, [
          (Se(!0), vt(Ls, null, nl(e.config, (f) => (Se(), vt("th", {
            key: f.title
          }, fr(f.title), 1))), 128))
        ])
      ]),
      vn("tbody", null, [
        (Se(!0), vt(Ls, null, nl(e.items, (f, m) => (Se(), vt("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Mi({ focus: e.isActive(m), selected: e.isSelected(f) }),
          onClick: Ep((w) => e.select(f), ["stop"])
        }, [
          (Se(!0), vt(Ls, null, nl(e.config, (w, g) => (Se(), vt("td", {
            key: f[e.textProp] + w.prop,
            id: e.getId(m, g),
            "aria-selected": e.isSelected(f),
            class: Mi({ "focus-cell": e.isActiveCell(m, g) })
          }, [
            w.prop === e.textProp ? (Se(), Kn(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[w.prop]
            }, null, 8, ["highlight", "query", "text"])) : (Se(), vt("p", EM, fr(f[w.prop]), 1))
          ], 10, VM))), 128))
        ], 10, CM))), 128))
      ])
    ], 10, yM)
  ], 512);
}
var IM = /* @__PURE__ */ Wi(gM, [["render", SM], ["__scopeId", "data-v-58c88fd1"]]);
const kM = Ys({
  components: {
    FeatherList: Vp,
    FeatherListItem: vl
  }
});
function AM(e, n, r, s, a, u) {
  const c = ct("FeatherListItem"), f = ct("FeatherList");
  return Se(), Kn(f, { class: "result-list" }, {
    default: zt(() => [
      _n(c, { "as-li": "" }, {
        default: zt(() => [
          rp(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var TM = /* @__PURE__ */ Wi(kM, [["render", AM], ["__scopeId", "data-v-06b752c6"]]);
const xM = Ys({
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
    Cancel: Fs,
    BaseChip: pc,
    BaseChipLabel: hc,
    BaseChipPreIcon: mc
  }
});
function LM(e, n, r, s, a, u) {
  const c = ct("FeatherIcon"), f = ct("BaseChipPreIcon"), m = ct("BaseChipLabel"), w = ct("Cancel"), g = ct("BaseChip");
  return Se(), Kn(g, {
    class: Mi(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: zt(() => [
      e.showPreIcon ? (Se(), Kn(f, { key: 0 }, {
        default: zt(() => {
          var y, b;
          return [
            _n(c, {
              icon: (y = e.pre) == null ? void 0 : y.icon,
              title: (b = e.pre) == null ? void 0 : b.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Zn("", !0),
      _n(m, null, {
        default: zt(() => [
          x1(fr(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? Zn("", !0) : (Se(), vt("span", {
        key: 1,
        class: "chip-delete",
        onClick: n[0] || (n[0] = Ep((...y) => e.handleClick && e.handleClick(...y), ["stop"]))
      }, [
        _n(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: zt(() => [
            _n(w)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var DM = /* @__PURE__ */ Wi(xM, [["render", LM], ["__scopeId", "data-v-e0fc6ac0"]]);
const OM = {}, NM = (e) => (lM("data-v-aa720e06"), e = e(), uM(), e), MM = { class: "spinner-container" }, RM = /* @__PURE__ */ NM(() => /* @__PURE__ */ vn("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ vn("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), BM = [
  RM
];
function PM(e, n) {
  return Se(), vt("div", MM, BM);
}
var FM = /* @__PURE__ */ Wi(OM, [["render", PM], ["__scopeId", "data-v-aa720e06"]]), vc = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(vc || {});
const N1 = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, UM = Dn(Dn(Dn({
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
    validator: (e) => !!vc[e]
  },
  labels: {
    type: Object,
    default: () => N1
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, wc), qs), cc), WM = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, HM = (e, n, r, s) => {
  if (r.toLowerCase() === vc.multi) {
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
}, zM = () => {
  const e = L1({
    row: -1
  }), n = (u) => {
    D1(() => {
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
}, qM = (e) => {
  const n = L1({
    row: -1,
    col: -1
  }), r = (c, f) => {
    D1(() => {
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
}, GM = Ys({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: WM,
  props: UM,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== vc.multi;
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
      return rf(iN);
    },
    minCharIcon() {
      return rf(wN);
    },
    dropdownIcon() {
      return rf(wl);
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
        dl(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, n) {
        e && n && e.length > n.length && this.scrollContainer && this.$nextTick(() => {
          dl(this.inputRef, this.scrollContainer);
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
      r !== void 0 && (Pi(this.typingTimeout), this.typingTimeout = Bi(() => {
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
    const r = lc(of(e, "labels"), N1);
    Gs(e), dc(e);
    let s;
    e.gridConfig ? s = qM(e.gridConfig) : s = zM();
    const a = of(e, "id"), u = yv(() => a.value ? a.value : Ce("feather-autocomplete-input")), { validate: c } = Hs(u, of(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: m, textProp: w, allowNew: g, type: y, minChar: b } = cM(e), V = ps(!1), O = ps(!1), x = ps(!1), D = ps(""), S = ps([]), A = ps(), T = yv(() => A.value), R = () => {
      V.value && !O.value && (D.value && D.value.length >= b.value && n.emit("search", D.value), b.value <= 0 && n.emit("search", D.value || ""), S.value = [], s.reset());
    }, F = HM({
      selectionLimit: f,
      selectionLimitReached: O,
      modelValue: m,
      textProp: w,
      allowNew: g,
      forceCloseResults: x,
      query: D,
      internalResults: S,
      input: T,
      emitSearch: R
    }, s, y.value, n.emit);
    return aM(Dn(Dn({}, r), zs(n.attrs)), {
      query: D,
      internalResults: S,
      selectionLimitReached: O,
      forceCloseResults: x,
      hasFocus: V,
      strategy: F,
      emitSearch: R,
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
    InputWrapper: uc,
    InputSubText: Ws,
    AutocompleteResults: _M,
    AutocompleteResultsGrid: IM,
    Chip: DM,
    MenuMessage: TM,
    FeatherIcon: J,
    FeatherMenu: k1,
    Spinner: FM
  }
}), YM = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, jM = ["id"], KM = { "data-ref-id": "feather-autocomplete-no-results" }, ZM = { "data-ref-id": "feather-autocomplete-selection-limit" }, JM = { "data-ref-id": "feather-autocomplete-min-char" };
function XM(e, n, r, s, a, u) {
  const c = ct("FeatherIcon"), f = ct("Chip"), m = ct("InputWrapper"), w = ct("AutocompleteResults"), g = ct("AutocompleteResultsGrid"), y = ct("MenuMessage"), b = ct("Spinner"), V = ct("FeatherMenu"), O = ct("InputSubText");
  return Se(), vt("div", sf(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    _n(V, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Mi(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: zt(({ attrs: x, on: D }) => [
        _n(m, sf(Dn(Dn({}, x), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, bv(D), { ref: "scroll" }), {
          pre: zt(() => [
            rp(e.$slots, "pre", {}, () => [
              _n(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: zt(() => [
            _n(c, {
              icon: e.dropdownIcon,
              class: Mi(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: zt(() => [
            vn("div", {
              class: Mi(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              vn("div", YM, null, 512),
              vn("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, fr(e.selectedDescribedByText), 9, jM),
              (Se(!0), vt(Ls, null, nl(e.modelValueList, (S, A) => pu((Se(), Kn(f, {
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
                [hu, !e.singleSelect]
              ])), 128)),
              vn("textarea", sf(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, bv(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: zt(() => [
        e.gridConfig ? Zn("", !0) : pu((Se(), Kn(w, {
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
          [hu, e.showResults]
        ]),
        e.gridConfig ? pu((Se(), Kn(g, {
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
          [hu, e.showResults]
        ]) : Zn("", !0),
        e.showNoResults ? (Se(), Kn(y, { key: 2 }, {
          default: zt(() => [
            vn("span", KM, fr(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : Zn("", !0),
        e.showSelectionLimit ? (Se(), Kn(y, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: zt(() => [
            _n(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            vn("span", ZM, fr(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Zn("", !0),
        e.minChar ? pu((Se(), Kn(y, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: zt(() => [
            _n(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            vn("span", JM, [
              rp(e.$slots, "min-char", {}, () => [
                x1(fr(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [hu, e.showMinCharWarning]
        ]) : Zn("", !0),
        e.showLoading ? (Se(), Kn(b, { key: 5 })) : Zn("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    _n(O, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var QM = /* @__PURE__ */ Wi(GM, [["render", XM], ["__scopeId", "data-v-43a7e951"]]);
var eR = Object.defineProperty, tR = Object.defineProperties, nR = Object.getOwnPropertyDescriptors, Cv = Object.getOwnPropertySymbols, rR = Object.prototype.hasOwnProperty, oR = Object.prototype.propertyIsEnumerable, Vv = (e, n, r) => n in e ? eR(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Nu = (e, n) => {
  for (var r in n || (n = {}))
    rR.call(n, r) && Vv(e, r, n[r]);
  if (Cv)
    for (var r of Cv(n))
      oR.call(n, r) && Vv(e, r, n[r]);
  return e;
}, M1 = (e, n) => tR(e, nR(n));
const R1 = window.Vue.defineComponent, iR = window.Vue.ref, rl = window.Vue.computed, sR = window.Vue.reactive, Ev = window.Vue.watch, af = window.Vue.inject, B1 = window.Vue.resolveComponent, op = window.Vue.openBlock, P1 = window.Vue.createElementBlock, qo = window.Vue.createElementVNode, aR = window.Vue.createBlock, lR = window.Vue.createCommentVNode, F1 = window.Vue.renderSlot, uR = window.Vue.pushScopeId, cR = window.Vue.popScopeId, lf = window.Vue.toRef, Sv = window.Vue.mergeProps, dR = window.Vue.toDisplayString, fR = window.Vue.createVNode;
var U1 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const pR = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, hR = R1({
  props: pR,
  setup(e) {
    const n = iR(), r = () => {
      n.value.focus();
    }, s = rl(() => Ce("feather-radio-button")), a = sR({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = rl(() => Ce("radio-label-id")), c = rl(() => a.first || a.checked ? 0 : -1);
    Ev(() => e.disabled, (y) => {
      a.disabled = y;
    }, { immediate: !0 }), Ev(() => e.value, (y) => {
      a.value = y;
    }, { immediate: !0 });
    const f = af("register", (y) => {
    }), m = af("blur", (y) => {
    }), w = af("select", (y) => {
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
    FeatherRipple: Go
  }
}), mR = (e) => (uR("data-v-24790cf0"), e = e(), cR(), e), wR = { class: "layout-container" }, vR = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], _R = { class: "radio hover focus" }, gR = /* @__PURE__ */ mR(() => /* @__PURE__ */ qo("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ qo("svg", { class: "dot" }, [
    /* @__PURE__ */ qo("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), $R = ["id"];
function yR(e, n, r, s, a, u) {
  const c = B1("feather-ripple");
  return op(), P1("div", wR, [
    qo("div", {
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
      qo("div", _R, [
        gR,
        e.vm.disabled ? lR("", !0) : (op(), aR(c, {
          key: 0,
          center: ""
        }))
      ]),
      qo("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        F1(e.$slots, "default", {}, void 0, !0)
      ], 8, $R)
    ], 40, vR)
  ]);
}
var ip = /* @__PURE__ */ U1(hR, [["render", yR], ["__scopeId", "data-v-24790cf0"]]);
const bR = M1(Nu({}, qs), {
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
}), CR = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, VR = R1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: bR,
  emits: CR,
  setup(e, n) {
    Gs(e);
    const r = lf(e, "error"), s = lf(e, "modelValue"), a = rl(() => Ce("feather-input-description")), u = rl(() => {
      const c = M1(Nu({}, n.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return Nu(Nu({
      descriptionId: a,
      attrs: u
    }, b1(s, n.emit, e.label, e.schema, lf(e, "error"))), zs(n.attrs));
  },
  components: {
    InputSubText: Ws
  }
}), ER = ["for"], SR = ["id"];
function IR(e, n, r, s, a, u) {
  const c = B1("InputSubText");
  return op(), P1("div", Sv(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    qo("label", {
      for: e.groupId,
      class: "group-label"
    }, dR(e.label), 9, ER),
    qo("div", Sv(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: n[0] || (n[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      F1(e.$slots, "default", {}, void 0, !0)
    ], 16, SR),
    fR(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var W1 = /* @__PURE__ */ U1(VR, [["render", IR], ["__scopeId", "data-v-6775aeb9"]]);
const kR = window.Vue.defineComponent, AR = window.Vue.renderList, TR = window.Vue.Fragment, Iv = window.Vue.openBlock, xR = window.Vue.createElementBlock, LR = window.Vue.toDisplayString, DR = window.Vue.createTextVNode, kv = window.Vue.unref, Av = window.Vue.withCtx, OR = window.Vue.createVNode, NR = window.Vue.createBlock, MR = window.Vue.watch, RR = window.Vue.ref, BR = /* @__PURE__ */ kR({
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
    ], a = RR(r.preSelected || s[0].id);
    return MR(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (Iv(), NR(kv(W1), {
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
      default: Av(() => [
        (Iv(), xR(TR, null, AR(s, (f) => OR(kv(ip), {
          value: f.id,
          key: f.id
        }, {
          default: Av(() => [
            DR(LR(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const PR = /* @__PURE__ */ Ve(BR, [["__scopeId", "data-v-0363302c"]]);
var FR = Object.defineProperty, UR = Object.defineProperties, WR = Object.getOwnPropertyDescriptors, Tv = Object.getOwnPropertySymbols, HR = Object.prototype.hasOwnProperty, zR = Object.prototype.propertyIsEnumerable, xv = (e, n, r) => n in e ? FR(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, xa = (e, n) => {
  for (var r in n || (n = {}))
    HR.call(n, r) && xv(e, r, n[r]);
  if (Tv)
    for (var r of Tv(n))
      zR.call(n, r) && xv(e, r, n[r]);
  return e;
}, Lv = (e, n) => UR(e, WR(n));
const qR = window.Vue.defineComponent, GR = window.Vue.inject, La = window.Vue.h;
var YR = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const jR = {
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
}, KR = qR({
  inheritAttrs: !1,
  props: jR,
  setup() {
    return { hasTooltip: GR("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const m = ["btn", "hover", "focus", f];
      return this.icon && (m.push("btn-icon"), m.push("btn-icon-table")), this.onColor && m.push("on-color"), m;
    }, n = this.asAnchor ? "a" : "button", r = {}, s = xa({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = La(Go);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), La(n, Lv(xa(xa({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : La(Go, { center: !0 })
      ]);
    }
    const c = La("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return La(n, Lv(xa(xa({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var ve = /* @__PURE__ */ YR(KR, [["__scopeId", "data-v-702d1074"]]);
const ZR = window.Vue.openBlock, JR = window.Vue.createElementBlock, XR = window.Vue.createElementVNode;
var QR = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const eB = {}, tB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, nB = /* @__PURE__ */ XR("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), rB = [
  nB
];
function oB(e, n) {
  return ZR(), JR("svg", tB, rB);
}
var iB = /* @__PURE__ */ QR(eB, [["render", oB]]);
const sB = window.Vue.openBlock, aB = window.Vue.createElementBlock, lB = window.Vue.createElementVNode;
var uB = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const cB = {}, dB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fB = /* @__PURE__ */ lB("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), pB = [
  fB
];
function hB(e, n) {
  return sB(), aB("svg", dB, pB);
}
var mB = /* @__PURE__ */ uB(cB, [["render", hB]]);
const wB = window.Vue.openBlock, vB = window.Vue.createElementBlock, _B = window.Vue.createElementVNode;
var gB = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const $B = {}, yB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bB = /* @__PURE__ */ _B("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), CB = [
  bB
];
function VB(e, n) {
  return wB(), vB("svg", yB, CB);
}
var H1 = /* @__PURE__ */ gB($B, [["render", VB]]);
const EB = window.Vue.defineComponent, Cr = window.Vue.unref, yi = window.Vue.createVNode, Dv = window.Vue.toDisplayString, Qr = window.Vue.createElementVNode, z1 = window.Vue.createTextVNode, Ov = window.Vue.openBlock, Nv = window.Vue.createElementBlock, SB = window.Vue.createCommentVNode, IB = window.Vue.withCtx, kB = window.Vue.vShow, AB = window.Vue.normalizeClass, TB = window.Vue.withDirectives, xB = window.Vue.Fragment, LB = window.Vue.pushScopeId, DB = window.Vue.popScopeId, q1 = (e) => (LB("data-v-d75ae1ee"), e = e(), DB(), e), OB = /* @__PURE__ */ z1(" Filters "), NB = { class: "count" }, MB = { class: "results" }, RB = { class: "total" }, BB = /* @__PURE__ */ z1(" Reset "), PB = /* @__PURE__ */ q1(() => /* @__PURE__ */ Qr("div", { class: "title" }, "By Severities:", -1)), FB = /* @__PURE__ */ q1(() => /* @__PURE__ */ Qr("div", { class: "title" }, "By Start Date:", -1)), bi = window.Vue.ref, UB = window.Vue.reactive, WB = window.Vue.markRaw, Mv = window.Vue.watch, HB = /* @__PURE__ */ EB({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: n }) {
    const r = e, s = WB({
      FilterAlt: iB,
      ExpandLess: mB,
      ExpandMore: wl,
      Refresh: H1
    }), a = pr(), u = bi(r.isOpen), c = bi(["all"]), f = bi(1), m = bi(r.list), w = bi(!1), g = bi(0), y = bi(null), b = UB({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), V = () => {
      var W, L;
      r.saveFilters && a.filters && (a.filters.node && (b.nodeSelectedValue = a.filters.node), ((W = a.filters) == null ? void 0 : W.severities) && !((L = a.filters) != null && L.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, T());
    }, O = () => {
      b.nodes = a.nodes, b.results = a.nodes;
    };
    Mv(
      () => a.nodes,
      () => {
        O();
      }
    ), Mv(r, () => {
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
      )), f.value !== 1 && (g.value++, W = S2(
        f.value,
        W
      )), m.value = W, r.saveFilters && R(), n("filtered-list", W);
    }, R = () => {
      a.filters = {
        node: b.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, F = () => {
      u.value = !u.value;
    };
    return (W, L) => (Ov(), Nv(xB, null, [
      r.isOpen ? SB("", !0) : (Ov(), Nv("div", {
        key: 0,
        class: "btn-filter",
        onClick: F
      }, [
        Qr("div", null, [
          yi(Cr(J), {
            icon: Cr(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          OB,
          Qr("span", NB, Dv(g.value), 1)
        ]),
        yi(Cr(J), {
          icon: u.value ? Cr(s).ExpandLess : Cr(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      TB(Qr("div", {
        class: AB(["filters", { collapsed: !r.isOpen }])
      }, [
        Qr("div", MB, [
          Qr("div", RB, "Results: " + Dv(Cr(m).length), 1),
          yi(Cr(ve), {
            class: "btn-reset",
            onClick: A
          }, {
            default: IB(() => [
              yi(Cr(J), {
                icon: Cr(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              BB
            ]),
            _: 1
          })
        ]),
        Qr("div", null, [
          yi(Cr(QM), {
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
          PB,
          yi(yO, {
            alarms: r.list,
            onSelectedOption: x,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          Qr("div", null, [
            FB,
            yi(PR, {
              onFilterDateSelected: D,
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
const js = /* @__PURE__ */ Ve(HB, [["__scopeId", "data-v-d75ae1ee"]]), zB = window.Vue.openBlock, qB = window.Vue.createElementBlock, GB = window.Vue.createElementVNode;
var YB = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const jB = {}, KB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ZB = /* @__PURE__ */ GB("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), JB = [
  ZB
];
function XB(e, n) {
  return zB(), qB("svg", KB, JB);
}
var _c = /* @__PURE__ */ YB(jB, [["render", XB]]);
const QB = window.Vue.openBlock, eP = window.Vue.createElementBlock, G1 = window.Vue.createElementVNode;
var tP = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const nP = {}, rP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oP = /* @__PURE__ */ G1("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), iP = /* @__PURE__ */ G1("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), sP = [
  oP,
  iP
];
function aP(e, n) {
  return QB(), eP("svg", rP, sP);
}
var lP = /* @__PURE__ */ tP(nP, [["render", aP]]);
const uP = window.Vue.openBlock, cP = window.Vue.createElementBlock, dP = window.Vue.createElementVNode;
var fP = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const pP = {}, hP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, mP = /* @__PURE__ */ dP("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), wP = [
  mP
];
function vP(e, n) {
  return uP(), cP("svg", hP, wP);
}
var _P = /* @__PURE__ */ fP(pP, [["render", vP]]);
const Zo = () => window.VRouter || G0, Ci = "alec-", _t = {
  home: `${Ci}home`,
  situations: `${Ci}situations`,
  situationDetail: `${Ci}situationDetail`,
  addSituation: `${Ci}addSituation`,
  error: `${Ci}error`,
  viewUnassignedAlarms: `${Ci}viewUnassignedAlarms`,
  settings: `${Ci}settings`
};
const gP = window.Vue.openBlock, $P = window.Vue.createElementBlock, yP = window.Vue.pushScopeId, bP = window.Vue.popScopeId, Rv = window.Vue.createElementVNode;
var CP = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const VP = {}, EP = (e) => (yP("data-v-2263be39"), e = e(), bP(), e), SP = { class: "spinner-container" }, IP = /* @__PURE__ */ EP(() => /* @__PURE__ */ Rv("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ Rv("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), kP = [
  IP
];
function AP(e, n) {
  return gP(), $P("div", SP, kP);
}
var Ds = /* @__PURE__ */ CP(VP, [["render", AP], ["__scopeId", "data-v-2263be39"]]);
const TP = window.Vue.defineComponent, uf = window.Vue.unref, xP = window.Vue.createVNode, LP = window.Vue.createElementVNode, DP = window.Vue.withCtx, OP = window.Vue.openBlock, NP = window.Vue.createBlock, MP = window.Vue.pushScopeId, RP = window.Vue.popScopeId, BP = (e) => (MP("data-v-6d6d8faa"), e = e(), RP(), e), PP = /* @__PURE__ */ BP(() => /* @__PURE__ */ LP("span", null, "New Situation", -1)), FP = window.Vue.markRaw, UP = /* @__PURE__ */ TP({
  __name: "NewSituationBtn",
  setup(e) {
    const n = Zo(), r = FP({
      Add: _c
    }), s = () => {
      n.push({
        name: _t.addSituation
      });
    };
    return (a, u) => (OP(), NP(uf(ve), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: DP(() => [
        xP(uf(J), {
          icon: uf(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        PP
      ]),
      _: 1
    }));
  }
});
const Y1 = /* @__PURE__ */ Ve(UP, [["__scopeId", "data-v-6d6d8faa"]]), WP = "/whoami", HP = async () => {
  try {
    const e = await Ot.get(WP);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, zP = window.Pinia.defineStore, qP = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, Fi = zP("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null,
    llmConfig: null,
    llmUsage: null
  }),
  actions: {
    async getUserRole() {
      const e = await HP();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await A2();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, n, r) {
      const s = {
        ...qP,
        ...r,
        distanceMeasureName: n ? xt.HELLINGER_OPTION : xt.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return n || (s.hellingerW = null, s.hellingerBias = null), await T2(s) ? (this.engineInfo = s, !0) : !1;
    },
    async getLLMConfig() {
      const e = await x2();
      return e && (this.llmConfig = e), e;
    },
    async setLLMConfig(e) {
      const n = await L2(e);
      return n ? (this.llmConfig = n, !0) : !1;
    },
    async getLLMUsage(e = 30) {
      const n = await N2(e);
      return n && (this.llmUsage = n), n;
    }
  }
}), GP = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", YP = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", jP = window.Vue.defineComponent, hs = window.Vue.unref, ms = window.Vue.openBlock, ws = window.Vue.createElementBlock, KP = window.Vue.createCommentVNode, j1 = window.Vue.createTextVNode, Bv = window.Vue.Fragment, K1 = window.Vue.createElementVNode, ZP = window.Vue.pushScopeId, JP = window.Vue.popScopeId, XP = (e) => (ZP("data-v-7d676165"), e = e(), JP(), e), QP = ["src"], e3 = { class: "engine" }, t3 = /* @__PURE__ */ j1(" ENGINE "), n3 = {
  key: 0,
  class: "type"
}, r3 = {
  key: 1,
  class: "type"
}, o3 = /* @__PURE__ */ j1(" ENGINE "), i3 = /* @__PURE__ */ XP(() => /* @__PURE__ */ K1("div", {
  class: "type not-set",
  "data-test": "configuration-not-set"
}, "CONFIGURE", -1)), Pv = window.Vue.computed, s3 = /* @__PURE__ */ jP({
  __name: "ConfigurationInfo",
  setup(e) {
    const n = Zo(), r = Fi(), s = () => {
      n.push({
        name: _t.settings
      });
    }, a = Pv(() => {
      var c;
      return !!((c = r.engineInfo) != null && c.engineName);
    }), u = Pv(
      () => {
        var c;
        return ((c = r.engineInfo) == null ? void 0 : c.engineName) == xt.ENGINE_DBSCAN;
      }
    );
    return (c, f) => (ms(), ws("div", {
      class: "info-engine",
      onClick: s,
      "data-test": "configuration-info"
    }, [
      hs(a) ? (ms(), ws("img", {
        key: 0,
        src: hs(u) ? hs(YP) : hs(GP),
        class: "icon-type"
      }, null, 8, QP)) : KP("", !0),
      K1("div", e3, [
        hs(a) ? (ms(), ws(Bv, { key: 0 }, [
          t3,
          hs(u) ? (ms(), ws("div", n3, "CLUSTERING")) : (ms(), ws("div", r3, "DEEP LEARNING"))
        ], 64)) : (ms(), ws(Bv, { key: 1 }, [
          o3,
          i3
        ], 64))
      ])
    ]));
  }
});
const a3 = /* @__PURE__ */ Ve(s3, [["__scopeId", "data-v-7d676165"]]);
const l3 = {}, u3 = window.Vue.openBlock, c3 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const d3 = { class: "empty" };
function f3(e, n) {
  return u3(), c3("div", d3, "No results found.");
}
const Ks = /* @__PURE__ */ Ve(l3, [["render", f3], ["__scopeId", "data-v-2415ea97"]]), p3 = window.Vue.defineComponent, Er = window.Vue.createElementVNode, Da = window.Vue.unref, Vi = window.Vue.createVNode, h3 = window.Vue.withCtx, mu = window.Vue.toDisplayString, Jr = window.Vue.openBlock, Ei = window.Vue.createElementBlock, Fv = window.Vue.createCommentVNode, Uv = window.Vue.createBlock, m3 = window.Vue.renderList, w3 = window.Vue.Fragment, v3 = window.Vue.pushScopeId, _3 = window.Vue.popScopeId, Z1 = (e) => (v3("data-v-8a617929"), e = e(), _3(), e), g3 = { class: "list-main" }, $3 = { class: "header" }, y3 = /* @__PURE__ */ Z1(() => /* @__PURE__ */ Er("h2", null, "Situation List", -1)), b3 = { class: "link-btns" }, C3 = /* @__PURE__ */ Z1(() => /* @__PURE__ */ Er("span", null, "View Unassociated Alarms", -1)), V3 = { class: "content" }, E3 = { class: "left-filters" }, S3 = { class: "container" }, I3 = { class: "autocomplete" }, k3 = { key: 0 }, A3 = { key: 1 }, T3 = { key: 0 }, x3 = { class: "situation-list" }, L3 = {
  key: 0,
  class: "footer-pager"
}, D3 = window.Vue.reactive, wu = window.Vue.ref, O3 = window.Vue.watch, N3 = window.Vue.markRaw, M3 = /* @__PURE__ */ p3({
  __name: "SituationList",
  setup(e) {
    const n = N3({
      Add: _c,
      View: lP,
      Settings: _P
    }), r = Zo(), s = pr(), a = Fi();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = D3({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = wu(!0), m = wu(0), w = wu(1), g = wu(0), y = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    O3(
      () => s.situations,
      () => {
        f.value = !1, y(), x(s.situations);
      }
    );
    const b = (S) => {
      m.value = S, c.situations = c.allSituations[m.value];
    }, V = (S) => {
      r.push({
        name: _t.situationDetail,
        params: {
          id: S
        }
      });
    }, O = () => {
      r.push({
        name: _t.viewUnassignedAlarms
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
      return Jr(), Ei("div", g3, [
        Er("div", $3, [
          y3,
          Er("div", b3, [
            Vi(Da(ve), {
              class: "view-situation-btn",
              onClick: A[0] || (A[0] = () => O())
            }, {
              default: h3(() => [
                Vi(Da(J), {
                  icon: Da(n).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                C3
              ]),
              _: 1
            }),
            Vi(Y1),
            Vi(a3)
          ])
        ]),
        Er("div", V3, [
          Er("div", E3, [
            Vi(js, {
              list: Da(s).situations,
              onFilteredList: D,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          Er("div", S3, [
            Er("div", I3, [
              c.situations && c.situations.length ? (Jr(), Ei("div", k3, " Result: " + mu((T = c.situations) == null ? void 0 : T.length) + " of " + mu(g.value), 1)) : Fv("", !0)
            ]),
            f.value ? (Jr(), Uv(Da(Ds), {
              key: 0,
              class: "spinner"
            })) : (Jr(), Ei("div", A3, [
              c.situations && c.situations.length ? (Jr(), Ei("div", T3, [
                Er("div", x3, [
                  (Jr(!0), Ei(w3, null, m3(c.situations, (R) => (Jr(), Ei("div", {
                    class: "card",
                    key: R.id
                  }, [
                    Vi(v1, {
                      onClick: () => V(R.id),
                      "situation-info": R
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                g.value > u ? (Jr(), Ei("div", L3, [
                  Er("div", null, "Page: " + mu(m.value + 1) + " of " + mu(w.value), 1),
                  Vi(Jx, {
                    onGoToPage: b,
                    currentPage: m.value,
                    totalPages: w.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : Fv("", !0)
              ])) : (Jr(), Uv(Ks, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const R3 = /* @__PURE__ */ Ve(M3, [["__scopeId", "data-v-8a617929"]]);
const vu = window.Vue.ref, B3 = window.Vue.inject, P3 = window.Vue.computed, F3 = window.Vue.onMounted, J1 = {
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
}, X1 = (e) => {
  const n = vu(!1), r = vu(), s = vu(e.controls), a = vu(e.id), u = () => {
    r.value && r.value.focus();
  }, c = B3("registerTab");
  F3(() => {
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
  const f = P3(() => ({
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
}, Wv = window.Vue.ref, U3 = window.Vue.toRef, W3 = window.Vue.watch, Hv = window.Vue.provide, Q1 = {
  prop: "modelValue",
  event: "update:modelValue"
}, e0 = {
  "update:modelValue": (e) => !0
}, t0 = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, n0 = (e, n) => {
  const r = U3(e, "modelValue"), s = Wv(e.modelValue), a = Wv([]);
  W3(r, (O) => {
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
    let R = T !== -1 ? T : s.value;
    const F = [ce.RIGHT], W = [ce.LEFT], L = [ce.ENTER, ce.SPACE];
    e.vertical && (F.push(ce.DOWN), W.push(ce.UP)), F.indexOf(D) > -1 ? (R++, R >= A.length && (R = 0), S(O), f(a.value.indexOf(A[R]))) : W.indexOf(D) > -1 && (R--, R < 0 && (R = A.length - 1), S(O), f(a.value.indexOf(A[R]))), L.indexOf(D) > -1 && m(R);
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
  Hv("registerTab", (O) => {
    const x = O.index;
    x > -1 && (a.value[x] = { ...a.value[x], tab: O }, a.value = [...a.value], y());
  }), Hv("registerPanel", (O) => {
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
}, _u = window.Vue.ref, H3 = window.Vue.inject, z3 = window.Vue.computed, q3 = window.Vue.onMounted, r0 = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, o0 = (e) => {
  const n = _u(!1), r = _u(), s = _u(e.tab), a = _u(e.id), u = H3("registerPanel");
  q3(() => {
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
  const c = z3(() => ({
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
}, Ip = window.Vue.defineComponent, G3 = window.Vue.resolveComponent, kp = window.Vue.openBlock, Ap = window.Vue.createElementBlock, ol = window.Vue.createElementVNode, i0 = window.Vue.mergeProps, ju = window.Vue.renderSlot, Y3 = window.Vue.createVNode, j3 = window.Vue.normalizeStyle, K3 = window.Vue.toHandlers, Z3 = window.Vue.withDirectives, J3 = window.Vue.normalizeProps, X3 = window.Vue.guardReactiveProps, Q3 = window.Vue.vShow;
var Tp = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const e4 = J1, t4 = Ip({
  props: e4,
  setup(e) {
    return X1(e);
  },
  components: {
    FeatherRipple: Go
  }
}), n4 = { role: "presentation" }, r4 = { class: "tab-text" };
function o4(e, n, r, s, a, u) {
  const c = G3("FeatherRipple");
  return kp(), Ap("li", n4, [
    ol("button", i0(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      ol("span", r4, [
        ju(e.$slots, "default", {}, void 0, !0)
      ]),
      Y3(c)
    ], 16)
  ]);
}
var il = /* @__PURE__ */ Tp(t4, [["render", o4], ["__scopeId", "data-v-e6bb52b6"]]);
const i4 = t0, s4 = e0, a4 = Ip({
  model: Q1,
  emits: s4,
  props: i4,
  setup(e, n) {
    return n0(e, n);
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
}), l4 = { class: "feather-tab-container" }, u4 = { class: "tab-panels" };
function c4(e, n, r, s, a, u) {
  return kp(), Ap("div", l4, [
    ol("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: j3({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    ol("ul", i0(e.attrs, K3(e.listeners)), [
      ju(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    ol("div", u4, [
      ju(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var s0 = /* @__PURE__ */ Tp(a4, [["render", c4], ["__scopeId", "data-v-27adffb9"]]);
const d4 = r0, f4 = Ip({
  props: d4,
  setup(e) {
    return o0(e);
  }
});
function p4(e, n, r, s, a, u) {
  return Z3((kp(), Ap("div", J3(X3(e.attrs)), [
    ju(e.$slots, "default")
  ], 16)), [
    [Q3, e.selected]
  ]);
}
var sl = /* @__PURE__ */ Tp(f4, [["render", p4]]);
const h4 = window.Vue.defineComponent, m4 = window.Vue.toDisplayString, w4 = window.Vue.normalizeClass, v4 = window.Vue.openBlock, _4 = window.Vue.createElementBlock, g4 = window.Vue.createCommentVNode, $4 = /* @__PURE__ */ h4({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const n = e;
    return (r, s) => n != null && n.severity ? (v4(), _4("span", {
      key: 0,
      class: w4(["severity-status", [`${n.severity.toLowerCase()}-color`]])
    }, m4(n.severity), 3)) : g4("", !0);
  }
});
const a0 = /* @__PURE__ */ Ve($4, [["__scopeId", "data-v-83c2cdce"]]), y4 = window.Vue.defineComponent, zv = window.Vue.toDisplayString, qv = window.Vue.createElementVNode, b4 = window.Vue.openBlock, C4 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const V4 = { class: "box" }, E4 = { class: "label" }, S4 = { class: "date" }, I4 = /* @__PURE__ */ y4({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const n = e;
    return (r, s) => (b4(), C4("div", V4, [
      qv("div", E4, zv(n.label), 1),
      qv("div", S4, zv(n.info), 1)
    ]));
  }
});
const cf = /* @__PURE__ */ Ve(I4, [["__scopeId", "data-v-b4afa751"]]), k4 = window.Vue.defineComponent, A4 = window.Vue.unref, T4 = window.Vue.renderList, x4 = window.Vue.Fragment, df = window.Vue.openBlock, ff = window.Vue.createElementBlock, L4 = window.Vue.toDisplayString, D4 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const O4 = { class: "alarms-list" }, N4 = /* @__PURE__ */ k4({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const n = e;
    return (r, s) => (df(), ff("div", O4, [
      (df(!0), ff(x4, null, T4(A4(Ne.exports.groupBy)(n == null ? void 0 : n.alarms, "severity"), (a, u) => (df(), ff("div", {
        class: D4(["alarm-count", [`${u.toString().toLowerCase()}-color`, n.size]]),
        key: u
      }, L4(a.length), 3))), 128))
    ]));
  }
});
const M4 = /* @__PURE__ */ Ve(N4, [["__scopeId", "data-v-52d63440"]]), R4 = window.Vue.openBlock, B4 = window.Vue.createElementBlock, P4 = window.Vue.createElementVNode;
var F4 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const U4 = {}, W4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, H4 = /* @__PURE__ */ P4("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), z4 = [
  H4
];
function q4(e, n) {
  return R4(), B4("svg", W4, z4);
}
var G4 = /* @__PURE__ */ F4(U4, [["render", q4]]);
const Y4 = window.Vue.openBlock, j4 = window.Vue.createElementBlock, K4 = window.Vue.createStaticVNode;
var Z4 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const J4 = {}, X4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Q4 = /* @__PURE__ */ K4('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), e8 = [
  Q4
];
function t8(e, n) {
  return Y4(), j4("svg", X4, e8);
}
var Ku = /* @__PURE__ */ Z4(J4, [["render", t8]]);
const n8 = window.Vue.defineComponent, ar = window.Vue.unref, pf = window.Vue.createVNode, xp = window.Vue.createElementVNode, hf = window.Vue.withCtx, gu = window.Vue.openBlock, mf = window.Vue.createBlock, wf = window.Vue.createCommentVNode, r8 = window.Vue.normalizeClass, o8 = window.Vue.createElementBlock, i8 = window.Vue.pushScopeId, s8 = window.Vue.popScopeId, Lp = (e) => (i8("data-v-d9c6a479"), e = e(), s8(), e), a8 = /* @__PURE__ */ Lp(() => /* @__PURE__ */ xp("span", null, "Acknowledge", -1)), l8 = /* @__PURE__ */ Lp(() => /* @__PURE__ */ xp("span", null, "Escalate", -1)), u8 = /* @__PURE__ */ Lp(() => /* @__PURE__ */ xp("span", null, "Clear", -1)), c8 = /* @__PURE__ */ n8({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const n = e, r = pr(), s = async (u) => {
      await Wk(n.alarm.id, u) && r.getSituation(n.situationId), n.isSituation && await m1(
        n.situationId,
        xt.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await Kg(n.alarm.id, u) && r.getSituation(n.situationId);
    };
    return (u, c) => (gu(), o8("div", {
      class: r8(["action-btns-group", n.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? wf("", !0) : (gu(), mf(ar(ve), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: hf(() => [
          pf(ar(J), {
            icon: ar(Rs),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          a8
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (gu(), mf(ar(ve), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(ar(xt).ESCALATE))
      }, {
        default: hf(() => [
          pf(ar(J), {
            icon: ar(G4),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          l8
        ]),
        _: 1
      })) : wf("", !0),
      n.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (gu(), mf(ar(ve), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(ar(xt).CLEAR))
      }, {
        default: hf(() => [
          pf(ar(J), {
            icon: ar(Ku),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          u8
        ]),
        _: 1
      })) : wf("", !0)
    ], 2));
  }
});
const l0 = /* @__PURE__ */ Ve(c8, [["__scopeId", "data-v-d9c6a479"]]);
var d8 = Object.defineProperty, f8 = Object.defineProperties, p8 = Object.getOwnPropertyDescriptors, Gv = Object.getOwnPropertySymbols, h8 = Object.prototype.hasOwnProperty, m8 = Object.prototype.propertyIsEnumerable, Yv = (e, n, r) => n in e ? d8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, sp = (e, n) => {
  for (var r in n || (n = {}))
    h8.call(n, r) && Yv(e, r, n[r]);
  if (Gv)
    for (var r of Gv(n))
      m8.call(n, r) && Yv(e, r, n[r]);
  return e;
}, u0 = (e, n) => f8(e, p8(n));
const c0 = window.Vue.defineComponent, w8 = window.Vue.inject, v8 = window.Vue.resolveComponent, vf = window.Vue.openBlock, jv = window.Vue.createElementBlock, ks = window.Vue.createElementVNode, _8 = window.Vue.createBlock, Kv = window.Vue.createCommentVNode, g8 = window.Vue.renderSlot, $8 = window.Vue.pushScopeId, y8 = window.Vue.popScopeId, _f = window.Vue.toRef, $u = window.Vue.computed, b8 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var C8 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const V8 = {
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
}, E8 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, S8 = c0({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: E8,
  props: V8,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: w8("registerCheckbox", (n) => {
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
    FeatherRipple: Go
  }
}), I8 = (e) => ($8("data-v-a7af27e2"), e = e(), y8(), e), k8 = { class: "layout-container" }, A8 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], T8 = { class: "checkbox hover focus" }, x8 = /* @__PURE__ */ I8(() => /* @__PURE__ */ ks("div", { class: "box" }, [
  /* @__PURE__ */ ks("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ ks("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ ks("div", { class: "indeterminate" })
], -1)), L8 = ["id", "for"];
function D8(e, n, r, s, a, u) {
  const c = v8("feather-ripple");
  return vf(), jv("div", k8, [
    ks("div", {
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
      ks("div", T8, [
        x8,
        e.disabled ? Kv("", !0) : (vf(), _8(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Kv("", !0) : (vf(), jv("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        g8(e.$slots, "default", {}, void 0, !0)
      ], 8, L8))
    ], 40, A8)
  ]);
}
var Ri = /* @__PURE__ */ C8(S8, [["render", D8], ["__scopeId", "data-v-a7af27e2"]]);
const O8 = u0(sp({}, qs), {
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
c0({
  props: O8,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, n) {
    Gs(e);
    const r = _f(e, "error"), s = $u(() => Ce("feather-checkbox-group")), a = $u(() => Ce("feather-input-description")), u = $u(() => Ce("feather-input-label")), c = $u(() => {
      const g = JSON.parse(JSON.stringify(n.attrs));
      return g["aria-invalid"] || (g["aria-invalid"] = !!r.value), u0(sp({}, g), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = b8(s.value), { validate: m } = Hs(f, _f(e, "modelValue"), e.label, e.schema, _f(e, "error"));
    return sp({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: m,
      registerCheckbox: (g) => {
        g && f.value === s.value && (f.value = g);
      }
    }, zs(n.attrs));
  },
  components: {
    InputSubText: Ws
  }
});
const N8 = window.Vue.openBlock, M8 = window.Vue.createElementBlock, d0 = window.Vue.createElementVNode;
var R8 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const B8 = {}, P8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, F8 = /* @__PURE__ */ d0("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), U8 = /* @__PURE__ */ d0("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), W8 = [
  F8,
  U8
];
function H8(e, n) {
  return N8(), M8("svg", P8, W8);
}
var z8 = /* @__PURE__ */ R8(B8, [["render", H8]]);
var q8 = Object.defineProperty, G8 = Object.defineProperties, Y8 = Object.getOwnPropertyDescriptors, Zv = Object.getOwnPropertySymbols, j8 = Object.prototype.hasOwnProperty, K8 = Object.prototype.propertyIsEnumerable, Jv = (e, n, r) => n in e ? q8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, As = (e, n) => {
  for (var r in n || (n = {}))
    j8.call(n, r) && Jv(e, r, n[r]);
  if (Zv)
    for (var r of Zv(n))
      K8.call(n, r) && Jv(e, r, n[r]);
  return e;
}, f0 = (e, n) => G8(e, Y8(n));
const Z8 = window.Vue.defineComponent, gf = window.Vue.toRef, J8 = window.Vue.computed, Xv = window.Vue.resolveComponent, Qv = window.Vue.openBlock, e_ = window.Vue.createElementBlock, t_ = window.Vue.mergeProps, n_ = window.Vue.createVNode, X8 = window.Vue.normalizeClass, r_ = window.Vue.withCtx, Q8 = window.Vue.createElementVNode, eF = window.Vue.toDisplayString, tF = window.Vue.createCommentVNode;
var nF = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const rF = f0(As(As({}, cc), qs), {
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
}), oF = {
  "update:modelValue": (e) => !0
}, iF = Z8({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: oF,
  props: rF,
  setup(e, n) {
    Gs(e), dc(e);
    const r = gf(e, "id"), s = J8(() => r.value ? r.value : Ce("feather-textarea-label")), { validate: a } = Hs(s, gf(e, "modelValue"), e.label, e.schema, gf(e, "error"));
    return As({
      inputId: s,
      incomingId: r,
      validate: a
    }, zs(n.attrs));
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
      const e = As({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), f0(As(As({}, e), this.listeners), {
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
    InputSubText: Ws,
    InputWrapper: uc
  }
}), sF = ["maxlength"], aF = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function lF(e, n, r, s, a, u) {
  const c = Xv("InputWrapper"), f = Xv("InputSubText");
  return Qv(), e_("div", t_(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    n_(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: X8(["feather-textarea-content", e.contentCls])
    }, {
      default: r_(() => [
        Q8("textarea", t_(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, sF)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    n_(f, { id: e.descriptionId }, {
      right: r_(() => [
        e.maxlength ? (Qv(), e_("div", aF, eF(e.charCount), 1)) : tF("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Zu = /* @__PURE__ */ nF(iF, [["render", lF], ["__scopeId", "data-v-0648df5c"]]);
const uF = window.Pinia.defineStore, gc = uF("appStore", {
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
}), cF = window.Vue.defineComponent, o_ = window.Vue.toDisplayString, Oa = window.Vue.createElementVNode, Si = window.Vue.unref, vs = window.Vue.openBlock, i_ = window.Vue.createBlock, Na = window.Vue.createCommentVNode, s_ = window.Vue.createVNode, yu = window.Vue.createElementBlock, dF = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const fF = { class: "row" }, pF = { class: "label" }, hF = { class: "action-icons" }, mF = { class: "icon-btn" }, wF = {
  key: 0,
  class: "icon-btn"
}, vF = {
  key: 1,
  class: "icon-btn"
}, _F = {
  key: 0,
  class: "text"
}, gF = window.Vue.watch, a_ = window.Vue.ref, $F = /* @__PURE__ */ cF({
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
    const n = e, r = gc(), s = a_(!1), a = a_((m = n.memo) == null ? void 0 : m.body);
    gF(n, () => {
      var w;
      a.value = (w = n.memo) == null ? void 0 : w.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await Kk(n.id, n.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await jk(n.id, n.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (w, g) => (vs(), yu("div", {
      class: dF([n.boxType === "small" ? "box-small" : "box"])
    }, [
      Oa("div", fF, [
        Oa("div", pF, o_(e.label), 1),
        Oa("div", hF, [
          Oa("div", mF, [
            s.value ? Na("", !0) : (vs(), i_(Si(J), {
              key: 0,
              icon: Si(z8),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (vs(), yu("div", wF, [
            s_(Si(J), {
              icon: Si(Rs),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Na("", !0),
          a.value && a.value != "" || s.value ? (vs(), yu("div", vF, [
            s_(Si(J), {
              icon: Si(Fs),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : Na("", !0)
        ])
      ]),
      Oa("div", null, [
        !s.value && a.value != null ? (vs(), yu("div", _F, o_(a.value), 1)) : Na("", !0),
        s.value ? (vs(), i_(Si(Zu), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": g[0] || (g[0] = (y) => a.value = y),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Na("", !0)
      ])
    ], 2));
  }
});
const Ju = /* @__PURE__ */ Ve($F, [["__scopeId", "data-v-ee1264b5"]]), yF = window.Vue.defineComponent, Do = window.Vue.unref, _s = window.Vue.createVNode, Ma = window.Vue.toDisplayString, dr = window.Vue.createElementVNode, l_ = window.Vue.openBlock, u_ = window.Vue.createElementBlock, c_ = window.Vue.createCommentVNode, $f = window.Vue.createTextVNode, bF = window.Vue.pushScopeId, CF = window.Vue.popScopeId, Dp = (e) => (bF("data-v-b59dc239"), e = e(), CF(), e), VF = {
  key: 0,
  class: "card"
}, EF = { class: "row" }, SF = {
  key: 0,
  class: "ack"
}, IF = /* @__PURE__ */ Dp(() => /* @__PURE__ */ dr("strong", null, " Duration: ", -1)), kF = ["innerHTML"], AF = /* @__PURE__ */ Dp(() => /* @__PURE__ */ dr("strong", null, "First Event", -1)), TF = /* @__PURE__ */ Dp(() => /* @__PURE__ */ dr("strong", null, "Last Event", -1)), xF = { class: "section memo-boxes" }, d_ = window.Vue.ref, LF = window.Vue.watch, DF = /* @__PURE__ */ yF({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: n }) {
    const r = e, s = d_(!1), a = d_(r.alarm), u = new Date().getTime();
    LF(r, () => {
      a.value = r.alarm, s.value = r.selectAll, r.selectAll && n("alarm-selected", r.alarm.id);
    });
    const c = () => {
      n("alarm-selected", r.alarm.id);
    }, f = async (m) => {
      const w = await Zg(m);
      w && (a.value = w);
    };
    return (m, w) => {
      var g, y, b, V, O;
      return a.value ? (l_(), u_("div", VF, [
        dr("div", null, [
          dr("div", EF, [
            _s(Do(Ri), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                w[0] || (w[0] = (x) => s.value = x),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            dr("div", {
              class: "title",
              onClick: w[1] || (w[1] = () => {
                s.value = !s.value, c();
              })
            }, Ma(a.value.nodeLabel) + " - " + Ma(a.value.id), 1),
            _s(a0, {
              severity: (g = a.value) == null ? void 0 : g.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (l_(), u_("div", SF, [
              _s(Do(J), {
                icon: Do(Rs),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : c_("", !0)
          ]),
          dr("div", null, [
            IF,
            $f(" " + Ma(Do(sc)(Do(u), new Date(a.value.firstEventTime))), 1)
          ]),
          dr("div", {
            class: "description",
            innerHTML: Do(l1)(a.value.description || "")
          }, null, 8, kF),
          dr("div", null, [
            AF,
            $f(" - " + Ma(Do(Ar)(a.value.firstEventTime)), 1)
          ]),
          dr("div", null, [
            TF,
            $f(" - " + Ma(Do(Ar)(a.value.lastEventTime)), 1)
          ]),
          dr("div", xF, [
            _s(Ju, {
              id: (y = a.value) == null ? void 0 : y.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (b = a.value) == null ? void 0 : b.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            _s(Ju, {
              id: (V = a.value) == null ? void 0 : V.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (O = a.value) == null ? void 0 : O.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        _s(l0, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : c_("", !0);
    };
  }
});
const OF = /* @__PURE__ */ Ve(DF, [["__scopeId", "data-v-b59dc239"]]), NF = window.Vue.openBlock, MF = window.Vue.createElementBlock, p0 = window.Vue.createElementVNode;
var RF = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const BF = {}, PF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, FF = /* @__PURE__ */ p0("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), UF = /* @__PURE__ */ p0("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), WF = [
  FF,
  UF
];
function HF(e, n) {
  return NF(), MF("svg", PF, WF);
}
var ap = /* @__PURE__ */ RF(BF, [["render", HF]]);
const zF = window.Vue.watch, qF = window.Vue.ref, GF = window.Vue.onBeforeUnmount, h0 = (e) => {
  const n = qF(!1), r = (s) => {
    s.keyCode === ce.ESCAPE && (s.preventDefault(), n.value = !n.value);
  };
  return zF(e, (s) => {
    s ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), GF(() => {
    document.removeEventListener("keydown", r);
  }), n;
}, YF = window.Vue.watch, m0 = (e) => {
  let n;
  YF(e, (r) => {
    r ? n = document.activeElement : setTimeout(() => {
      n && n.focus && n.focus(), n = void 0;
    }, 0);
  });
}, w0 = window.Vue.watch, v0 = window.Vue.onBeforeUnmount, _0 = window.Vue.nextTick, jF = window.Vue.onMounted, g0 = (e) => {
  if (e === !1)
    return "hidden";
  const n = e.style.overflow;
  return e.style.overflow = "hidden", n;
}, Xu = (e, n) => {
  e !== void 0 && n !== !1 && (n.style.overflow = e);
}, $0 = (e) => {
  let n;
  const r = typeof document < "u" ? document.body : !1;
  v0(() => Xu(n, r)), jF(() => w0(e, (s) => {
    s ? _0(() => {
      n = g0(r);
    }) : Xu(n, r);
  }, { immediate: !0 }));
}, KF = (e, n) => {
  let r;
  v0(() => Xu(r, n.value ? n.value.offsetParent : !1)), w0([e, n], ([s, a]) => {
    s && a ? _0(() => {
      r = g0(a.offsetParent);
    }) : a && Xu(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var ZF = Object.defineProperty, f_ = Object.getOwnPropertySymbols, JF = Object.prototype.hasOwnProperty, XF = Object.prototype.propertyIsEnumerable, p_ = (e, n, r) => n in e ? ZF(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, QF = (e, n) => {
  for (var r in n || (n = {}))
    JF.call(n, r) && p_(e, r, n[r]);
  if (f_)
    for (var r of f_(n))
      XF.call(n, r) && p_(e, r, n[r]);
  return e;
};
const Op = window.Vue.defineComponent, al = window.Vue.ref, e5 = window.Vue.nextTick, y0 = window.Vue.openBlock, b0 = window.Vue.createElementBlock, Np = window.Vue.createElementVNode, t5 = window.Vue.renderSlot, n5 = window.Vue.resolveComponent, r5 = window.Vue.normalizeClass, o5 = window.Vue.withModifiers, i5 = window.Vue.createVNode, h_ = window.Vue.toRef, m_ = window.Vue.computed, w_ = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var C0 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const s5 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, a5 = Op({
  props: s5,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = al(), n = al(!1), r = (g, y) => {
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
      y && y.focus ? e5(() => {
        y.focus();
      }) : s(g);
    }, m = al();
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
}), l5 = /* @__PURE__ */ Np("div", { tabindex: "0" }, null, -1), u5 = {
  class: "focus-trap-content",
  ref: "content"
}, c5 = /* @__PURE__ */ Np("div", { tabindex: "0" }, null, -1);
function d5(e, n, r, s, a, u) {
  return y0(), b0("div", null, [
    l5,
    Np("div", u5, [
      t5(e.$slots, "default")
    ], 512),
    c5
  ]);
}
var V0 = /* @__PURE__ */ C0(a5, [["render", d5]]);
const f5 = Op({
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
    icon: () => Fs
  },
  components: {
    FeatherIcon: J
  }
}), p5 = ["aria-label"];
function h5(e, n, r, s, a, u) {
  const c = n5("FeatherIcon");
  return y0(), b0("a", {
    href: "#",
    class: r5(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: n[0] || (n[0] = o5((f) => e.$emit("close"), ["prevent"]))
  }, [
    i5(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, p5);
}
var E0 = /* @__PURE__ */ C0(f5, [["render", h5], ["__scopeId", "data-v-fc0f3f00"]]);
const S0 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, m5 = {
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
    default: () => S0,
    validator: (e) => !!e.title
  }
}, w5 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
Op({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: w5,
  props: m5,
  setup(e, n) {
    const r = lc(h_(e, "labels"), S0), s = h_(e, "modelValue"), a = al(), u = () => {
      n.emit("update:modelValue", !1);
    }, c = m_(() => !!n.slots.footer), f = m_(() => Ce("dialog-header"));
    e.relative ? KF(s, a) : $0(s), m0(s), w_(h0(s), () => {
      u();
    });
    const m = al(e.modelValue);
    return w_(m, (w) => {
      w ? n.emit("shown") : n.emit("hidden");
    }), QF({ close: u, hasFooter: c, headerId: f, element: a, shown: m }, r);
  },
  components: {
    FocusTrap: V0,
    DialogClose: E0
  }
});
var v5 = Object.defineProperty, v_ = Object.getOwnPropertySymbols, _5 = Object.prototype.hasOwnProperty, g5 = Object.prototype.propertyIsEnumerable, __ = (e, n, r) => n in e ? v5(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, $c = (e, n) => {
  for (var r in n || (n = {}))
    _5.call(n, r) && __(e, r, n[r]);
  if (v_)
    for (var r of v_(n))
      g5.call(n, r) && __(e, r, n[r]);
  return e;
};
const yc = window.Vue.defineComponent, g_ = window.Vue.toRef, $_ = window.Vue.watch, y_ = window.Vue.ref, b_ = window.Vue.resolveComponent, bu = window.Vue.openBlock, C_ = window.Vue.createBlock, $5 = window.Vue.Teleport, V_ = window.Vue.createElementBlock, yf = window.Vue.createVNode, E_ = window.Vue.Transition, bf = window.Vue.withCtx, S_ = window.Vue.createCommentVNode, y5 = window.Vue.withDirectives, b5 = window.Vue.normalizeStyle, C5 = window.Vue.normalizeClass, I_ = window.Vue.createElementVNode, V5 = window.Vue.renderSlot, E5 = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var S5 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const I0 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, I5 = {
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
    default: () => I0,
    validator: (e) => !!e.title
  }
}, k5 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, A5 = yc({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: k5,
  props: I5,
  setup(e, n) {
    const r = lc(g_(e, "labels"), I0), s = g_(e, "modelValue"), a = () => {
      n.emit("update:modelValue", !1);
    };
    $0(s), m0(s), $_(h0(s), () => {
      a();
    });
    const u = y_(), c = y_(!1);
    return $_(c, (f) => {
      f ? n.emit("shown") : n.emit("hidden");
    }), $c({ close: a, shown: c, isShown: s, element: u }, r);
  },
  components: {
    DialogClose: E0,
    FocusTrap: V0
  }
}), T5 = {
  key: 0,
  class: "drawer-container feather-styles"
}, x5 = {
  key: 0,
  class: "greyedOut"
}, L5 = ["aria-label"], D5 = { class: "slot" };
function O5(e, n, r, s, a, u) {
  const c = b_("dialog-close"), f = b_("focus-trap");
  return bu(), C_($5, { to: "body" }, [
    e.modelValue ? (bu(), V_("div", T5, [
      yf(E_, { name: "greyOutShim" }, {
        default: bf(() => [
          e.modelValue ? (bu(), V_("div", x5)) : S_("", !0)
        ]),
        _: 1
      }),
      yf(E_, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: n[0] || (n[0] = (m) => e.shown = !0),
        onAfterLeave: n[1] || (n[1] = (m) => e.shown = !1)
      }, {
        default: bf(() => [
          y5((bu(), C_(f, {
            enable: e.modelValue,
            style: b5({ width: e.width }),
            key: "sect",
            class: C5(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: bf(() => [
              I_("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                I_("div", D5, [
                  V5(e.$slots, "default", {}, void 0, !0)
                ]),
                yf(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, L5)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [E5, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : S_("", !0)
  ]);
}
var k0 = /* @__PURE__ */ S5(A5, [["render", O5], ["__scopeId", "data-v-0a36e1dc"]]);
const N5 = $c({
  label: {
    type: String,
    required: !0
  }
}, J1);
yc({
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = Bi(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      Pi(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return X1(e);
  },
  components: {
    FeatherRipple: Go
  }
});
const M5 = $c({}, t0), R5 = e0;
yc({
  emits: R5,
  model: Q1,
  props: M5,
  setup(e, n) {
    return n0(e, n);
  }
});
const B5 = $c({
  header: {
    type: String
  }
}, r0);
yc({
  name: "DrawerTabContent",
  props: B5,
  setup(e) {
    return o0(e);
  },
  directives: {
    MenuFocusLoop: KO
  }
});
const P5 = window.Vue.defineComponent, A0 = window.Vue.createElementVNode, k_ = window.Vue.createVNode, F5 = window.Vue.renderList, U5 = window.Vue.Fragment, Ra = window.Vue.openBlock, Cf = window.Vue.createElementBlock, A_ = window.Vue.createBlock, W5 = window.Vue.unref, H5 = window.Vue.withCtx, z5 = window.Vue.pushScopeId, q5 = window.Vue.popScopeId, G5 = (e) => (z5("data-v-37e146e7"), e = e(), q5(), e), Y5 = { class: "content" }, j5 = /* @__PURE__ */ G5(() => /* @__PURE__ */ A0("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), K5 = {
  key: 0,
  class: "situation-list"
}, Vf = window.Vue.ref, T_ = window.Vue.watch, Z5 = /* @__PURE__ */ P5({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: n }) {
    const r = e, s = pr(), a = Vf(r.visible), u = () => {
      let w = s.situations;
      r.situationId !== 0 && (w = s.situations.filter(
        (g) => g.id != r.situationId
      )), c.value = w, f.value = w;
    }, c = Vf(s.situations), f = Vf(s.situations);
    T_(r, () => {
      a.value = r.visible, u();
    }), T_(
      () => s.situations,
      () => {
        u();
      }
    );
    const m = (w) => {
      f.value = w;
    };
    return (w, g) => (Ra(), A_(W5(k0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        g[0] || (g[0] = (y) => a.value = y),
        g[1] || (g[1] = (y) => n("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: H5(() => [
        A0("div", Y5, [
          j5,
          k_(js, {
            list: c.value,
            isSituation: "",
            onFilteredList: m
          }, null, 8, ["list"]),
          f.value.length ? (Ra(), Cf("div", K5, [
            (Ra(!0), Cf(U5, null, F5(f.value, (y) => (Ra(), Cf("div", {
              class: "card",
              key: y.id
            }, [
              k_(v1, {
                onClick: (b) => n("situation-selected", y.id),
                "situation-info": y,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Ra(), A_(Ks, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const T0 = /* @__PURE__ */ Ve(Z5, [["__scopeId", "data-v-37e146e7"]]), J5 = window.Vue.defineComponent, x_ = window.Vue.normalizeClass, Ss = window.Vue.createElementVNode, Cu = window.Vue.unref, X5 = window.Vue.createVNode, Vu = window.Vue.toDisplayString, Q5 = window.Vue.createTextVNode, e6 = window.Vue.openBlock, t6 = window.Vue.createElementBlock, n6 = window.Vue.pushScopeId, r6 = window.Vue.popScopeId, o6 = (e) => (n6("data-v-f3d99277"), e = e(), r6(), e), i6 = { class: "alarmInfo" }, s6 = { class: "alarm-title" }, a6 = /* @__PURE__ */ o6(() => /* @__PURE__ */ Ss("strong", null, " Duration: ", -1)), l6 = { class: "description" }, u6 = /* @__PURE__ */ J5({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: n }) {
    const r = e, s = new Date().getTime();
    return (a, u) => (e6(), t6("div", {
      class: x_(["alarm", { selected: r.selected }])
    }, [
      Ss("div", i6, [
        Ss("div", {
          class: x_(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        X5(Cu(Ri), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => n("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        Ss("div", s6, Vu(e.alarm.nodeLabel) + " - " + Vu(e.alarm.id), 1)
      ]),
      Ss("div", null, [
        a6,
        Q5(" " + Vu(Cu(sc)(Cu(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      Ss("div", l6, Vu(Cu(u1)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const Mp = /* @__PURE__ */ Ve(u6, [["__scopeId", "data-v-f3d99277"]]), c6 = window.Vue.defineComponent, Mu = window.Vue.createElementVNode, gs = window.Vue.unref, d6 = window.Vue.toDisplayString, L_ = window.Vue.withCtx, Ef = window.Vue.createVNode, f6 = window.Vue.renderList, p6 = window.Vue.Fragment, Ba = window.Vue.openBlock, Sf = window.Vue.createElementBlock, D_ = window.Vue.createBlock, h6 = window.Vue.pushScopeId, m6 = window.Vue.popScopeId, w6 = (e) => (h6("data-v-35547098"), e = e(), m6(), e), v6 = { class: "content" }, _6 = { class: "header" }, g6 = /* @__PURE__ */ w6(() => /* @__PURE__ */ Mu("h4", null, "ADD ALARMS", -1)), $6 = {
  key: 0,
  class: "alarms-list"
}, Eu = window.Vue.ref, O_ = window.Vue.watch, y6 = /* @__PURE__ */ c6({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: n }) {
    const r = e, s = pr(), a = Eu(r.visible), u = Eu([]), c = Eu(["all"]), f = Eu(s.unassignedAlarms);
    O_(r, () => {
      a.value = r.visible, u.value = [], f.value = s.unassignedAlarms;
    }), O_(
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
    return (b, V) => (Ba(), D_(gs(k0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        V[0] || (V[0] = (O) => a.value = O),
        V[1] || (V[1] = (O) => n("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: L_(() => [
        Mu("div", v6, [
          Mu("div", _6, [
            g6,
            Ef(gs(ve), {
              class: "add-alarms-btn",
              onClick: w
            }, {
              default: L_(() => [
                Mu("span", null, "Add " + d6(gs(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          Ef(js, {
            list: gs(s).unassignedAlarms,
            onFilteredList: y
          }, null, 8, ["list"]),
          f.value.length ? (Ba(), Sf("div", $6, [
            (Ba(!0), Sf(p6, null, f6(f.value, (O) => (Ba(), Sf("div", {
              class: "card",
              key: O.id
            }, [
              Ef(Mp, {
                selected: gs(Ne.exports.includes)(gs(u), O.id),
                alarm: O,
                onSelectedAlarm: m
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (Ba(), D_(Ks, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const b6 = /* @__PURE__ */ Ve(y6, [["__scopeId", "data-v-35547098"]]), C6 = window.Vue.openBlock, V6 = window.Vue.createElementBlock, x0 = window.Vue.createElementVNode;
var E6 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const S6 = {}, I6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, k6 = /* @__PURE__ */ x0("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), A6 = /* @__PURE__ */ x0("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), T6 = [
  k6,
  A6
];
function x6(e, n) {
  return C6(), V6("svg", I6, T6);
}
var N_ = /* @__PURE__ */ E6(S6, [["render", x6]]);
const L6 = window.Vue.defineComponent, xn = window.Vue.createElementVNode, Ut = window.Vue.unref, Qt = window.Vue.createVNode, Pa = window.Vue.withCtx, D6 = window.Vue.renderList, M_ = window.Vue.Fragment, Fa = window.Vue.openBlock, Su = window.Vue.createElementBlock, O6 = window.Vue.createBlock, N6 = window.Vue.pushScopeId, M6 = window.Vue.popScopeId, Zs = (e) => (N6("data-v-76f75ba2"), e = e(), M6(), e), R6 = { class: "container" }, B6 = { class: "header" }, P6 = /* @__PURE__ */ Zs(() => /* @__PURE__ */ xn("div", { class: "title" }, "Alarms", -1)), F6 = /* @__PURE__ */ Zs(() => /* @__PURE__ */ xn("span", null, "Add Alarms", -1)), U6 = { class: "alarms-container" }, W6 = { class: "filters" }, H6 = { class: "list" }, z6 = { class: "row actions" }, q6 = /* @__PURE__ */ Zs(() => /* @__PURE__ */ xn("span", null, "Clear", -1)), G6 = /* @__PURE__ */ Zs(() => /* @__PURE__ */ xn("span", null, "Acknowledge", -1)), Y6 = /* @__PURE__ */ Zs(() => /* @__PURE__ */ xn("span", null, "Move", -1)), j6 = /* @__PURE__ */ Zs(() => /* @__PURE__ */ xn("span", null, "Remove", -1)), K6 = { class: "section" }, Z6 = {
  key: 0,
  class: "alarm-list"
}, Iu = window.Vue.ref, J6 = window.Vue.watch, X6 = window.Vue.reactive, Q6 = window.Vue.markRaw, eU = /* @__PURE__ */ L6({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const n = e, r = Q6({
      Add: _c,
      Delete: N_,
      MarkComplete: Ku,
      CheckCircle: Rs,
      ExitToApp: ap
    }), s = gc(), a = pr(), u = Iu(!1), c = Iu(["all"]), f = Iu(!1), m = Iu(!1), w = X6({
      selectedAlarms: [],
      alarms: n.alarms
    });
    J6(n, () => {
      c.value = ["all"], w.alarms = n.alarms, w.selectedAlarms = [], u.value = !1;
    });
    const g = (T) => {
      w.selectedAlarms.includes(T) ? Ne.exports.remove(w.selectedAlarms, (R) => R == T) : w.selectedAlarms.push(T);
    }, y = async (T) => {
      w.selectedAlarms.length ? (await Hk(w.selectedAlarms, T), a.getSituation(n.situationId), w.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, b = () => w.selectedAlarms.length === n.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : w.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), V = async () => {
      b() && (await Gw(
        n.situationId,
        w.selectedAlarms
      ) ? a.getSituation(n.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, O = async (T) => {
      b() && (await Gw(
        n.situationId,
        w.selectedAlarms
      ) ? await x(T, w.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, x = async (T, R) => {
      R.length ? await w1(T, R) ? a.getSituation(T) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, D = async (T) => {
      await x(n.situationId, T), m.value = !1;
    }, S = () => {
      w.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, A = (T) => {
      w.alarms = T;
    };
    return (T, R) => (Fa(), Su(M_, null, [
      xn("div", R6, [
        xn("div", B6, [
          P6,
          Qt(Ut(ve), {
            class: "add-alarms-btn",
            onClick: R[0] || (R[0] = (F) => m.value = !0)
          }, {
            default: Pa(() => [
              Qt(Ut(J), {
                icon: Ut(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              F6
            ]),
            _: 1
          })
        ]),
        xn("div", U6, [
          xn("div", W6, [
            Qt(js, {
              list: n.alarms,
              onFilteredList: A,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          xn("div", H6, [
            xn("div", z6, [
              Qt(Ut(Ri), {
                modelValue: u.value,
                "onUpdate:modelValue": R[1] || (R[1] = (F) => u.value = F),
                label: "selected"
              }, null, 8, ["modelValue"]),
              Qt(Ut(ve), {
                onClick: R[2] || (R[2] = () => y("clear"))
              }, {
                default: Pa(() => [
                  Qt(Ut(J), {
                    icon: Ut(Ku),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  q6
                ]),
                _: 1
              }),
              Qt(Ut(ve), {
                onClick: R[3] || (R[3] = () => y("ack"))
              }, {
                default: Pa(() => [
                  Qt(Ut(J), {
                    icon: Ut(Rs),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  G6
                ]),
                _: 1
              }),
              Qt(Ut(ve), { onClick: S }, {
                default: Pa(() => [
                  Qt(Ut(J), {
                    icon: Ut(ap),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  Y6
                ]),
                _: 1
              }),
              Qt(Ut(ve), { onClick: V }, {
                default: Pa(() => [
                  Qt(Ut(J), {
                    icon: Ut(N_),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  j6
                ]),
                _: 1
              })
            ]),
            xn("div", K6, [
              w.alarms.length > 0 ? (Fa(), Su("div", Z6, [
                (Fa(!0), Su(M_, null, D6(w.alarms, (F) => (Fa(), Su("div", {
                  key: F.id
                }, [
                  Qt(OF, {
                    alarm: F,
                    selectAll: u.value,
                    "situation-id": n.situationId,
                    onAlarmSelected: g
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (Fa(), O6(Ks, { key: 1 }))
            ])
          ])
        ])
      ]),
      Qt(T0, {
        situationId: n.situationId,
        visible: f.value,
        onSituationSelected: O,
        onDrawerClosed: R[4] || (R[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      Qt(b6, {
        visible: m.value,
        onAlarmsSelected: D,
        onDrawerAlarmsClosed: R[5] || (R[5] = () => m.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const tU = /* @__PURE__ */ Ve(eU, [["__scopeId", "data-v-76f75ba2"]]), nU = window.Vue.defineComponent, lr = window.Vue.createVNode, An = window.Vue.unref, If = window.Vue.normalizeClass, ku = window.Vue.toDisplayString, Ua = window.Vue.openBlock, Wa = window.Vue.createElementBlock, R_ = window.Vue.createCommentVNode, rU = window.Vue.withCtx, jn = window.Vue.createElementVNode, oU = window.Vue.Fragment, iU = window.Vue.pushScopeId, sU = window.Vue.popScopeId, aU = (e) => (iU("data-v-fafb3615"), e = e(), sU(), e), lU = { class: "section" }, uU = { class: "action-section" }, cU = { class: "btn-row" }, dU = { key: 0 }, fU = { key: 1 }, pU = {
  key: 0,
  class: "situation-detail"
}, hU = { class: "situation-info" }, mU = { class: "id" }, wU = ["innerHTML"], vU = /* @__PURE__ */ aU(() => /* @__PURE__ */ jn("p", null, null, -1)), _U = { class: "boxes" }, gU = { class: "parameters" }, $U = { class: "section memo-boxes" }, yU = { key: 0 }, bU = window.Vue.computed, B_ = window.Vue.ref, CU = window.Vue.watch, VU = /* @__PURE__ */ nU({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const n = e, r = gc(), s = pr(), a = xt.REJECTED, u = B_(n.situationInfo.status), c = B_(n.situationInfo);
    CU(n, () => {
      u.value = n.situationInfo.status || "", c.value = n.situationInfo;
    });
    const f = bU(
      () => {
        var w;
        return l1(a1(((w = c.value) == null ? void 0 : w.description) || ""));
      }
    ), m = async (w) => {
      var y;
      await m1(
        (y = n.situationInfo) == null ? void 0 : y.id,
        w.toLowerCase()
      ) ? (u.value = w, s.getSituation(n.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (w, g) => {
      var y, b, V, O, x, D, S, A, T, R, F, W;
      return Ua(), Wa(oU, null, [
        jn("div", lU, [
          jn("div", uU, [
            lr(l0, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": n.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            jn("div", cU, [
              lr(An(ve), {
                class: If(["btn", { rejected: u.value == An(a) }]),
                "data-test": "btn-reject",
                onClick: g[0] || (g[0] = (L) => m(An(a)))
              }, {
                default: rU(() => [
                  lr(An(J), {
                    icon: An(Jg),
                    "aria-hidden": "true",
                    class: If(["icon reject", { rejected: u.value == An(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == An(a) ? (Ua(), Wa("span", dU, ku(An(a)), 1)) : (Ua(), Wa("span", fU, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (Ua(), Wa("div", pU, [
            jn("div", {
              class: If(["severity-line", [`${(b = (y = c.value) == null ? void 0 : y.severity) == null ? void 0 : b.toLowerCase()}-bg dark`]])
            }, null, 2),
            jn("div", hU, [
              jn("div", mU, [
                jn("div", null, " Situation - " + ku((V = c.value) == null ? void 0 : V.id) + " - " + ku(c.value.alarms.length) + " alarm(s) affects " + ku(An(Ne.exports.size)(An(Ne.exports.groupBy)((O = c.value) == null ? void 0 : O.alarms, "nodeId"))) + " node(s) ", 1),
                lr(a0, {
                  severity: (x = c.value) == null ? void 0 : x.severity
                }, null, 8, ["severity"])
              ]),
              jn("span", {
                innerHTML: An(f),
                "data-test": "situation-description"
              }, null, 8, wU),
              vU,
              jn("div", _U, [
                lr(cf, {
                  label: "First Event",
                  info: An(Ar)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                lr(cf, {
                  label: "Last Event",
                  info: An(Ar)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                lr(cf, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            jn("div", gU, [
              lr(M4, {
                alarms: (D = c.value) == null ? void 0 : D.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : R_("", !0),
          jn("div", $U, [
            lr(Ju, {
              id: (S = c.value) == null ? void 0 : S.id,
              situationId: (A = c.value) == null ? void 0 : A.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (T = c.value) == null ? void 0 : T.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            lr(Ju, {
              id: (R = c.value) == null ? void 0 : R.id,
              situationId: (F = c.value) == null ? void 0 : F.id,
              label: "Journal Memo",
              type: "journal",
              memo: (W = c.value) == null ? void 0 : W.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (Ua(), Wa("div", yU, [
          lr(tU, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : R_("", !0)
      ], 64);
    };
  }
});
const EU = /* @__PURE__ */ Ve(VU, [["__scopeId", "data-v-fafb3615"]]);
var SU = Object.defineProperty, IU = Object.defineProperties, kU = Object.getOwnPropertyDescriptors, P_ = Object.getOwnPropertySymbols, AU = Object.prototype.hasOwnProperty, TU = Object.prototype.propertyIsEnumerable, F_ = (e, n, r) => n in e ? SU(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, lp = (e, n) => {
  for (var r in n || (n = {}))
    AU.call(n, r) && F_(e, r, n[r]);
  if (P_)
    for (var r of P_(n))
      TU.call(n, r) && F_(e, r, n[r]);
  return e;
}, xU = (e, n) => IU(e, kU(n));
const L0 = window.Vue.defineComponent, Oi = window.Vue.resolveComponent, Ru = window.Vue.openBlock, U_ = window.Vue.createBlock, Bu = window.Vue.mergeProps, Ni = window.Vue.withCtx, D0 = window.Vue.createElementBlock, LU = window.Vue.Fragment, DU = window.Vue.renderList, OU = window.Vue.createTextVNode, NU = window.Vue.toDisplayString, MU = window.Vue.computed, W_ = window.Vue.toRef, Ha = window.Vue.createVNode, H_ = window.Vue.toHandlers, RU = window.Vue.renderSlot, BU = window.Vue.normalizeClass, PU = window.Vue.createElementVNode;
var O0 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const FU = L0({
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
        dl(n, this.$refs.list.$el);
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
    FeatherList: Vp,
    FeatherListItem: vl
  }
});
function UU(e, n, r, s, a, u) {
  const c = Oi("FeatherListItem"), f = Oi("FeatherList");
  return Ru(), U_(f, Bu(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Ni(() => [
      (Ru(!0), D0(LU, null, DU(e.options, (m, w) => (Ru(), U_(c, {
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
        default: Ni(() => [
          OU(NU(m[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var WU = /* @__PURE__ */ O0(FU, [["render", UU], ["__scopeId", "data-v-eae820da"]]);
const HU = xU(lp(lp({}, cc), qs), {
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
}), zU = {
  "update:modelValue": (e) => !0
}, qU = L0({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: zU,
  props: HU,
  setup(e, n) {
    Gs(e), dc(e);
    const r = MU(() => Ce("feather-select-input")), { validate: s } = Hs(r, W_(e, "modelValue"), e.label, e.schema, W_(e, "error"));
    return lp({
      inputId: r,
      validate: s
    }, zs(n.attrs));
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
      Pi(this.delayTimeout), this.delayTimeout = Bi(() => {
        const e = this.options.filter((n) => n[this.textProp] && n[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: uc,
    InputSubText: Ws,
    FeatherMenu: k1,
    List: WU,
    FeatherIcon: J
  }
});
function GU(e, n, r, s, a, u) {
  const c = Oi("FeatherIcon"), f = Oi("InputWrapper"), m = Oi("List"), w = Oi("FeatherMenu"), g = Oi("InputSubText");
  return Ru(), D0("div", Bu(e.inherittedAttrs, { class: "feather-select-container" }), [
    Ha(w, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Ni((y) => [
        Ha(f, Bu({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, y.attrs, H_(y.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Ni(() => [
            RU(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Ni(() => [
            Ha(c, {
              class: BU(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Ni(() => [
            PU("input", Bu(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, H_(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Ni(() => [
        Ha(m, {
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
    Ha(g, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var YU = /* @__PURE__ */ O0(qU, [["render", GU], ["__scopeId", "data-v-ecb32d90"]]);
const jU = window.Vue.openBlock, KU = window.Vue.createElementBlock, N0 = window.Vue.createElementVNode;
var ZU = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const JU = {}, XU = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, QU = /* @__PURE__ */ N0("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), e7 = /* @__PURE__ */ N0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), t7 = [
  QU,
  e7
];
function n7(e, n) {
  return jU(), KU("svg", XU, t7);
}
var r7 = /* @__PURE__ */ ZU(JU, [["render", n7]]);
const Pu = window.Vue.openBlock, up = window.Vue.createElementBlock, M0 = window.Vue.createElementVNode, o7 = window.Vue.defineComponent, Ii = window.Vue.ref, i7 = window.Vue.provide, z_ = window.Vue.computed, s7 = window.Vue.onUnmounted, q_ = window.Vue.toRef, a7 = window.Vue.resolveComponent, l7 = window.Vue.Fragment, u7 = window.Vue.createBlock, c7 = window.Vue.Teleport, G_ = window.Vue.createVNode, d7 = window.Vue.Transition, f7 = window.Vue.withCtx, p7 = window.Vue.normalizeClass, h7 = window.Vue.normalizeStyle, m7 = window.Vue.toDisplayString, w7 = window.Vue.createCommentVNode, v7 = window.Vue.renderSlot, kf = window.Vue.nextTick;
var R0 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const _7 = {}, g7 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, $7 = /* @__PURE__ */ M0("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), y7 = [
  $7
];
function b7(e, n) {
  return Pu(), up("svg", g7, y7);
}
var C7 = /* @__PURE__ */ R0(_7, [["render", b7]]), Tt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Tt || {}), eo = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(eo || {});
const V7 = (e, n, r, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= n.height + s && c.push(Tt.top), a >= n.height + s && c.push(Tt.bottom);
  const f = [];
  u >= n.width + s && f.push(Tt.right), e.left >= n.width + s && f.push(Tt.left);
  let m = [...f, ...c];
  return (r === Tt.top || r === Tt.bottom) && (m = [...c, ...f]), m.indexOf(r) > -1 ? r : m.length ? m[0] : r;
}, E7 = (e, n, r, s, a = 28) => {
  if (e === Tt.left || e === Tt.right)
    return eo.center;
  const u = n.left + n.width / 2, c = window.innerWidth - n.right, f = [], m = u, w = c + n.width / 2, g = r.width - a, y = r.width / 2;
  return m >= y && w >= y && f.push(eo.center), w >= g && f.push(eo.left), m >= g && f.push(eo.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, S7 = {
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
    default: () => eo.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, I7 = o7({
  props: S7,
  setup(e) {
    const n = Ii(!1), r = Ii(!1), s = Ce("feather-tooltip-trigger"), a = Ce("feather-tooltip"), u = "data-feather-tooltip";
    i7("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      Pi(c), n.value || (c = Bi(x, e.enterDelay));
    }, m = () => {
      Pi(c), c = Bi(D, e.exitDelay);
    }, w = (Te) => {
      Te.keyCode === ce.ESCAPE && (Te.preventDefault(), D(!0));
    }, g = z_(() => ({
      [u]: s,
      "aria-describedby": a
    })), y = {
      mouseenter: f,
      mouseleave: m,
      focus: f,
      blur: m,
      keydown: w
    }, b = Ii(document), V = I1(b, () => D(!0));
    s7(() => D(!0));
    const O = () => document.getElementById(a), x = () => {
      r.value = !1, n.value = !0, kf(() => {
        const Te = O();
        he(Te), n.value = !1, kf(() => {
          r.value = !0, n.value = !0, V.value = !0;
        });
      });
    }, D = (Te = !1) => {
      W.value = "", F.value = "", L.value = "", X.value = "", n.value = !1, Te && (r.value = !1), V.value = !1;
    }, S = q_(e, "placement"), A = q_(e, "pointerAlignment"), T = 8, R = 24, F = Ii(""), W = Ii(""), L = Ii(""), X = Ii(""), Me = z_(() => X.value ? "p-" + X.value : !1), he = (Te) => {
      const Qe = document.querySelector(`[${u}=${s}]`);
      if (!Qe) {
        console.log("trigger not found");
        return;
      }
      kf(() => {
        const et = Qe.getBoundingClientRect(), Pe = Te.getBoundingClientRect(), de = V7(et, Pe, S.value, T), Fe = E7(de, et, Pe, A.value, R);
        L.value = Fe.toString(), X.value = de.toString();
        let Ge = 0, Re = 0;
        if ((de === Tt.left || de === Tt.right) && (Ge = et.top + et.height / 2 - Pe.height / 2, de === Tt.left && (Re = et.left - Pe.width - T), de === Tt.right && (Re = et.right)), de === Tt.top || de === Tt.bottom) {
          Ge = et.top - Pe.height - T, de === Tt.bottom && (Ge = et.bottom);
          const on = et.left + et.width / 2;
          switch (Fe) {
            case eo.center:
              Re = on - Pe.width / 2;
              break;
            case eo.left:
              Re = on - R;
              break;
            case eo.right:
              Re = on - Pe.width + R;
              break;
          }
        }
        F.value = Ge.toString() + "px", W.value = Re.toString() + "px";
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
    Pointer: C7
  }
}), k7 = ["id"];
function A7(e, n, r, s, a, u) {
  const c = a7("Pointer");
  return Pu(), up(l7, null, [
    (Pu(), u7(c7, { to: "body" }, [
      G_(d7, { css: e.animate }, {
        default: f7(() => [
          e.show ? (Pu(), up("div", {
            key: 0,
            class: p7(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: h7({ left: e.left, top: e.top })
          }, [
            M0("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, m7(e.title), 9, k7),
            G_(c, { class: "tooltip-pointer" })
          ], 6)) : w7("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    v7(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var Y_ = /* @__PURE__ */ R0(I7, [["render", A7], ["__scopeId", "data-v-3da6b22e"]]);
const T7 = window.Vue.defineComponent, Af = window.Vue.normalizeStyle, Tf = window.Vue.createElementVNode, za = window.Vue.unref, j_ = window.Vue.toHandlers, K_ = window.Vue.mergeProps, Z_ = window.Vue.withCtx, J_ = window.Vue.createVNode, x7 = window.Vue.renderList, L7 = window.Vue.Fragment, qa = window.Vue.openBlock, Ga = window.Vue.createElementBlock, X_ = window.Vue.normalizeClass, Q_ = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const D7 = { class: "row" }, O7 = /* @__PURE__ */ T7({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const n = e, r = new Date().getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * n.proportion : 0, a = (u) => u ? (Number(u) - Number(n.minStart)) * n.proportion : 0;
    return (u, c) => (qa(), Ga("div", D7, [
      Tf("div", {
        class: "line-gray",
        style: Af({
          width: a(n.events[0].createTime) + "px"
        })
      }, null, 4),
      J_(za(Y_), {
        title: za(Ar)(e.alarm.firstEventTime)
      }, {
        default: Z_(({ attrs: f, on: m }) => [
          Tf("div", K_({ class: "circle" }, f, j_(m), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (qa(!0), Ga(L7, null, x7(n.events, (f, m) => (qa(), Ga("div", {
        class: "event-trim",
        key: f.id
      }, [
        n.events[m + 1] ? (qa(), Ga("div", {
          key: 0,
          class: X_(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: Af({
            width: s(f.createTime, n.events[m + 1].createTime) + "px"
          })
        }, null, 6)) : Q_("", !0),
        J_(za(Y_), {
          title: za(Ar)(e.alarm.firstEventTime)
        }, {
          default: Z_(({ attrs: w, on: g }) => [
            n.events[m + 1] ? (qa(), Ga("div", K_({ key: 0 }, w, j_(g), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : Q_("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      Tf("div", {
        class: X_(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: Af({
          width: s(e.events[e.events.length - 1].createTime, za(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const N7 = /* @__PURE__ */ Ve(O7, [["__scopeId", "data-v-6c43a557"]]), M7 = window.Vue.openBlock, R7 = window.Vue.createElementBlock, B0 = window.Vue.createElementVNode;
var B7 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const P7 = {}, F7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, U7 = /* @__PURE__ */ B0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), W7 = /* @__PURE__ */ B0("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), H7 = [
  U7,
  W7
];
function z7(e, n) {
  return M7(), R7("svg", F7, H7);
}
var q7 = /* @__PURE__ */ B7(P7, [["render", z7]]);
const G7 = window.Vue.defineComponent, cp = window.Vue.createElementVNode, Y7 = window.Vue.renderList, eg = window.Vue.Fragment, xf = window.Vue.openBlock, Lf = window.Vue.createElementBlock, j7 = window.Vue.normalizeClass, K7 = window.Vue.unref, tg = window.Vue.toDisplayString, Z7 = window.Vue.pushScopeId, J7 = window.Vue.popScopeId, X7 = (e) => (Z7("data-v-2e087f7b"), e = e(), J7(), e), Q7 = /* @__PURE__ */ X7(() => /* @__PURE__ */ cp("strong", null, "Events:", -1)), e9 = /* @__PURE__ */ G7({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const n = e;
    return (r, s) => (xf(), Lf(eg, null, [
      Q7,
      (xf(!0), Lf(eg, null, Y7(n.events, (a) => (xf(), Lf("div", {
        class: "event-description",
        key: a.id
      }, [
        cp("div", {
          class: j7(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        cp("div", null, tg(K7(Ar)(a.createTime)) + " - " + tg(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const t9 = /* @__PURE__ */ Ve(e9, [["__scopeId", "data-v-2e087f7b"]]), n9 = window.Vue.defineComponent, r9 = window.Vue.normalizeClass, Tn = window.Vue.createElementVNode, $s = window.Vue.toDisplayString, hn = window.Vue.unref, ys = window.Vue.createVNode, P0 = window.Vue.createTextVNode, o9 = window.Vue.renderList, ng = window.Vue.Fragment, Xr = window.Vue.openBlock, ki = window.Vue.createElementBlock, rg = window.Vue.createBlock, Au = window.Vue.createCommentVNode, i9 = window.Vue.normalizeStyle, s9 = window.Vue.pushScopeId, a9 = window.Vue.popScopeId, l9 = (e) => (s9("data-v-57b5ddda"), e = e(), a9(), e), u9 = { class: "section detail" }, c9 = { class: "id" }, d9 = {
  key: 0,
  class: "section"
}, f9 = /* @__PURE__ */ l9(() => /* @__PURE__ */ Tn("div", { class: "id" }, "Alarms", -1)), p9 = { class: "action-btns" }, h9 = { class: "zoom" }, m9 = /* @__PURE__ */ P0(" Zoom "), w9 = { class: "times" }, v9 = {
  key: 0,
  class: "timeline-container"
}, _9 = { class: "alarm-id" }, g9 = {
  key: 0,
  class: "panel"
}, Oo = window.Vue.ref, $9 = window.Vue.watch, y9 = /* @__PURE__ */ n9({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var R, F;
    const n = e, r = pr(), s = Oo(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Oo(a[0]), c = Oo(n.width), f = Oo(n.width), m = Oo(new Date().getTime()), w = () => {
      var W, L;
      if (!n.situation.events) {
        const X = (L = (W = n.situation) == null ? void 0 : W.alarms) == null ? void 0 : L.map((Me) => Me.id);
        r.getEvents(n.situation.id, X);
      }
    };
    w();
    const g = () => (m.value = new Date().getTime(), c.value / (Number(m.value) - Number(b.value))), y = Oo(n.situation.alarms), b = Oo(
      ((F = Ne.exports.minBy((R = n.situation) == null ? void 0 : R.alarms, "firstEventTime")) == null ? void 0 : F.firstEventTime) || new Date().getTime()
    ), V = Oo(g());
    $9(n, () => {
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
      return Xr(), ki(ng, null, [
        Tn("div", u9, [
          Tn("div", {
            class: r9(["severity-line", [`${(Me = (X = n.situation) == null ? void 0 : X.severity) == null ? void 0 : Me.toLowerCase()}-bg dark`]])
          }, null, 2),
          Tn("div", null, [
            Tn("div", c9, "Situation " + $s(n.situation.id), 1),
            Tn("div", null, " Duration: " + $s(hn(sc)(m.value, new Date(b.value))), 1)
          ])
        ]),
        y.value && y.value.length > 0 ? (Xr(), ki("div", d9, [
          f9,
          Tn("div", p9, [
            ys(hn(YU), {
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
            Tn("div", h9, [
              m9,
              Tn("div", null, [
                ys(hn(J), {
                  icon: hn(r7),
                  class: "zoom-icon",
                  onClick: x
                }, null, 8, ["icon"]),
                ys(hn(J), {
                  icon: hn(H1),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                ys(hn(J), {
                  icon: hn(q7),
                  class: "zoom-icon",
                  onClick: D
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Xr(), ki("div", {
            key: 0,
            class: "alarms",
            style: i9({
              width: f.value + 50 + "px"
            })
          }, [
            Tn("div", w9, [
              Tn("div", null, $s(hn(Ar)(b.value)), 1),
              Tn("div", null, $s(hn(Ar)(m.value)), 1)
            ]),
            e.situation.events ? (Xr(), ki("div", v9, [
              (Xr(!0), ki(ng, null, o9(y.value, (he) => (Xr(), ki("div", {
                class: "timeline",
                key: he.id
              }, [
                Tn("div", _9, [
                  P0($s(he.nodeLabel) + " - " + $s(he.id) + " ", 1),
                  s.value === he.id ? (Xr(), rg(hn(J), {
                    key: 0,
                    icon: hn(wl),
                    class: "zoom-icon expand",
                    onClick: T
                  }, null, 8, ["icon"])) : (Xr(), rg(hn(J), {
                    key: 1,
                    icon: hn(g1),
                    class: "zoom-icon expand",
                    onClick: () => A(he.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                ys(N7, {
                  alarm: he,
                  proportion: V.value,
                  "min-start": b.value,
                  events: n.situation.events[he.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === he.id ? (Xr(), ki("div", g9, [
                  ys(t9, {
                    events: n.situation.events[he.id]
                  }, null, 8, ["events"])
                ])) : Au("", !0)
              ]))), 128))
            ])) : Au("", !0)
          ], 4)) : Au("", !0)
        ])) : Au("", !0)
      ], 64);
    };
  }
});
const b9 = /* @__PURE__ */ Ve(y9, [["__scopeId", "data-v-57b5ddda"]]), C9 = window.Vue.defineComponent, wn = window.Vue.createElementVNode, ur = window.Vue.unref, qt = window.Vue.createTextVNode, bs = window.Vue.withCtx, nt = window.Vue.openBlock, V9 = window.Vue.createBlock, Tu = window.Vue.createCommentVNode, No = window.Vue.createVNode, st = window.Vue.createElementBlock, E9 = window.Vue.resolveComponent, Ai = window.Vue.toDisplayString, og = window.Vue.renderList, ig = window.Vue.Fragment, S9 = window.Vue.pushScopeId, I9 = window.Vue.popScopeId, Js = (e) => (S9("data-v-8418d0e3"), e = e(), I9(), e), k9 = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, A9 = { class: "header" }, T9 = /* @__PURE__ */ Js(() => /* @__PURE__ */ wn("h3", null, "AI Suggestions", -1)), x9 = { class: "header-actions" }, L9 = /* @__PURE__ */ qt(" Re-evaluate "), D9 = /* @__PURE__ */ qt(" Refresh "), O9 = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, N9 = /* @__PURE__ */ Js(() => /* @__PURE__ */ wn("span", null, "Loading\u2026", -1)), M9 = {
  key: 1,
  class: "state-row",
  "data-test": "ai-reanalyzing"
}, R9 = /* @__PURE__ */ Js(() => /* @__PURE__ */ wn("span", null, "Requesting a fresh analysis\u2026", -1)), B9 = {
  key: 2,
  class: "state-row",
  "data-test": "ai-absent"
}, P9 = {
  key: 0,
  "data-test": "ai-absent-disabled"
}, F9 = /* @__PURE__ */ qt(" The LLM integration is currently disabled. Enable it on the "), U9 = /* @__PURE__ */ qt("configuration page"), W9 = /* @__PURE__ */ qt(" to start generating suggestions for new situations. "), H9 = {
  key: 1,
  "data-test": "ai-absent-no-key"
}, z9 = /* @__PURE__ */ qt(" No API key is configured. Add one on the "), q9 = /* @__PURE__ */ qt("configuration page"), G9 = /* @__PURE__ */ qt(" to enable AI suggestions. "), Y9 = {
  key: 2,
  "data-test": "ai-absent-not-yet-run"
}, j9 = /* @__PURE__ */ qt(" No analysis has run for this situation yet. New situations are analyzed automatically \u2014 click "), K9 = /* @__PURE__ */ Js(() => /* @__PURE__ */ wn("strong", null, "Re-evaluate", -1)), Z9 = /* @__PURE__ */ qt(" above to trigger one now. "), J9 = [
  j9,
  K9,
  Z9
], X9 = {
  key: 3,
  class: "reanalyze-error",
  "data-test": "ai-reanalyze-error"
}, Q9 = {
  key: 3,
  class: "state-row",
  "data-test": "ai-pending"
}, eW = {
  key: 4,
  class: "state-row failed",
  "data-test": "ai-failed"
}, tW = { class: "failed-msg" }, nW = /* @__PURE__ */ qt(" The last LLM request failed: "), rW = /* @__PURE__ */ qt(" Retry "), oW = {
  key: 5,
  class: "state-row",
  "data-test": "ai-error"
}, iW = /* @__PURE__ */ qt(" Could not load suggestions. Please retry. "), sW = /* @__PURE__ */ qt("Retry"), aW = {
  key: 6,
  "data-test": "ai-ready"
}, lW = {
  key: 0,
  class: "meta"
}, uW = /* @__PURE__ */ qt(" Generated by "), cW = { class: "section" }, dW = /* @__PURE__ */ Js(() => /* @__PURE__ */ wn("h4", null, "Probable root causes", -1)), fW = {
  key: 0,
  "data-test": "ai-root-causes"
}, pW = {
  key: 1,
  class: "empty"
}, hW = { class: "section" }, mW = /* @__PURE__ */ Js(() => /* @__PURE__ */ wn("h4", null, "Possible resolutions", -1)), wW = {
  key: 0,
  "data-test": "ai-resolutions"
}, vW = {
  key: 1,
  class: "empty"
}, Df = window.Vue.computed, _W = window.Vue.onBeforeUnmount, gW = window.Vue.onMounted, Of = window.Vue.ref, $W = /* @__PURE__ */ C9({
  __name: "AISuggestionsTab",
  props: {
    situationId: null
  },
  setup(e) {
    const n = e, r = Fi(), s = Of("loading"), a = Of(null), u = Of(null), c = 5e3, f = 5 * 60 * 1e3;
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
      const A = await h1(n.situationId);
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
      const A = await O2(n.situationId);
      if (A === !1) {
        s.value = "absent", u.value = "Could not start a new analysis. Make sure LLM is enabled on the configuration page and an API key is saved.", await r.getLLMConfig();
        return;
      }
      a.value = A, s.value = A.status, y();
    };
    gW(async () => {
      r.llmConfig === null && await r.getLLMConfig(), await b(), y();
    }), _W(() => g());
    const x = Df(() => {
      var A;
      return (A = a.value) != null && A.requestedAt ? new Date(a.value.requestedAt).toLocaleString() : "";
    }), D = Df(() => {
      const A = r.llmConfig;
      return !A || !A.enabled ? "disabled" : A.apiKeyPresent ? "not-yet-run" : "no-key";
    }), S = Df(
      () => {
        var A, T;
        return ((A = r.llmConfig) == null ? void 0 : A.enabled) === !0 && ((T = r.llmConfig) == null ? void 0 : T.apiKeyPresent) === !0;
      }
    );
    return (A, T) => {
      var F;
      const R = E9("router-link");
      return nt(), st("div", k9, [
        wn("div", A9, [
          T9,
          wn("div", x9, [
            ur(S) ? (nt(), V9(ur(ve), {
              key: 0,
              primary: "",
              "data-test": "ai-reanalyze",
              disabled: s.value === "reanalyzing" || s.value === "pending",
              onClick: O
            }, {
              default: bs(() => [
                L9
              ]),
              _: 1
            }, 8, ["disabled"])) : Tu("", !0),
            No(ur(ve), {
              secondary: "",
              "data-test": "ai-refresh",
              onClick: V
            }, {
              default: bs(() => [
                D9
              ]),
              _: 1
            })
          ])
        ]),
        s.value === "loading" ? (nt(), st("div", O9, [
          No(ur(Ds)),
          N9
        ])) : s.value === "reanalyzing" ? (nt(), st("div", M9, [
          No(ur(Ds)),
          R9
        ])) : s.value === "absent" ? (nt(), st("div", B9, [
          ur(D) === "disabled" ? (nt(), st("span", P9, [
            F9,
            No(R, { to: "/settings" }, {
              default: bs(() => [
                U9
              ]),
              _: 1
            }),
            W9
          ])) : ur(D) === "no-key" ? (nt(), st("span", H9, [
            z9,
            No(R, { to: "/settings" }, {
              default: bs(() => [
                q9
              ]),
              _: 1
            }),
            G9
          ])) : (nt(), st("span", Y9, J9)),
          u.value ? (nt(), st("div", X9, Ai(u.value), 1)) : Tu("", !0)
        ])) : s.value === "pending" ? (nt(), st("div", Q9, [
          No(ur(Ds)),
          wn("span", null, " Analyzing alarms with the LLM\u2026 requested at " + Ai(ur(x)) + ". ", 1)
        ])) : s.value === "failed" ? (nt(), st("div", eW, [
          wn("div", tW, [
            nW,
            wn("code", null, Ai(((F = a.value) == null ? void 0 : F.error) || "unknown error"), 1)
          ]),
          No(ur(ve), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: V
          }, {
            default: bs(() => [
              rW
            ]),
            _: 1
          })
        ])) : s.value === "error" ? (nt(), st("div", oW, [
          iW,
          No(ur(ve), {
            secondary: "",
            onClick: V
          }, {
            default: bs(() => [
              sW
            ]),
            _: 1
          })
        ])) : s.value === "ready" && a.value ? (nt(), st("div", aW, [
          a.value.completedAt ? (nt(), st("div", lW, [
            uW,
            wn("strong", null, Ai(a.value.model), 1),
            qt(" at " + Ai(new Date(a.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : Tu("", !0),
          wn("div", cW, [
            dW,
            a.value.rootCauses.length ? (nt(), st("ol", fW, [
              (nt(!0), st(ig, null, og(a.value.rootCauses, (W, L) => (nt(), st("li", {
                key: `cause-${L}`
              }, Ai(W), 1))), 128))
            ])) : (nt(), st("div", pW, "No root causes returned."))
          ]),
          wn("div", hW, [
            mW,
            a.value.resolutions.length ? (nt(), st("ol", wW, [
              (nt(!0), st(ig, null, og(a.value.resolutions, (W, L) => (nt(), st("li", {
                key: `res-${L}`
              }, Ai(W), 1))), 128))
            ])) : (nt(), st("div", vW, "No resolutions returned."))
          ])
        ])) : Tu("", !0)
      ]);
    };
  }
});
const yW = /* @__PURE__ */ Ve($W, [["__scopeId", "data-v-8418d0e3"]]), bW = window.Vue.openBlock, CW = window.Vue.createElementBlock, VW = window.Vue.createElementVNode;
var EW = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const SW = {}, IW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, kW = /* @__PURE__ */ VW("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), AW = [
  kW
];
function TW(e, n) {
  return bW(), CW("svg", IW, AW);
}
var Os = /* @__PURE__ */ EW(SW, [["render", TW]]);
const F0 = window.Vue.defineComponent, Nf = window.Vue.ref, xW = window.Vue.toRef, Mf = window.Vue.inject, sg = window.Vue.watch, LW = window.Vue.nextTick, ag = window.Vue.openBlock, lg = window.Vue.createElementBlock, Rf = window.Vue.createElementVNode, DW = window.Vue.normalizeClass, ug = window.Vue.renderSlot, cg = window.Vue.createCommentVNode, Bf = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var OW = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const NW = {
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
}, MW = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, RW = F0({
  emits: MW,
  props: NW,
  setup(e, n) {
    const r = Nf(), s = Nf(!1), a = Nf(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = xW(e, "modelValue"), f = Mf("queueSnackbar", !1), m = Mf("unqueueSnackbar", !1), w = Mf("nextSnackbar", () => {
    }), g = (x, D) => {
      let S, A, T = D;
      const R = () => {
        !S || (Pi(S), S = 0, T -= Date.now() - A);
      }, F = () => {
        S || (A = Date.now(), S = Bi(x, T));
      };
      return F(), { pause: R, resume: F };
    }, y = () => {
      s.value = !1, n.emit("closed"), w && w();
    }, b = (x) => {
      x.keyCode === ce.ESCAPE && (a.value = !1);
    }, V = () => {
      r.value.pause();
    }, O = () => {
      a.value && r.value.resume();
    };
    return sg(c, (x) => {
      x ? LW(() => {
        f === !1 ? a.value = x : f(u, a);
      }) : m === !1 ? a.value = x : m(u);
    }, { immediate: !0 }), sg(a, (x) => {
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
}), BW = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, PW = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, FW = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, UW = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function WW(e, n, r, s, a, u) {
  return e.modelValue || e.contentShow ? (ag(), lg("div", BW, [
    Rf("div", {
      class: DW(["feather-snackbar", {
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
      Rf("div", PW, [
        e.contentShow ? (ag(), lg("div", FW, [
          ug(e.$slots, "default", {}, void 0, !0)
        ])) : cg("", !0)
      ]),
      Rf("div", UW, [
        ug(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : cg("", !0);
}
var bc = /* @__PURE__ */ OW(RW, [["render", WW], ["__scopeId", "data-v-5cf64a62"]]);
const HW = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
F0({
  props: HW,
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
    return Bf("queueSnackbar", s), Bf("unqueueSnackbar", a), Bf("nextSnackbar", u), {
      curr: e,
      queue: n,
      showSnackbar: r,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const zW = window.Vue.defineComponent, Xe = window.Vue.unref, Wt = window.Vue.createVNode, fl = window.Vue.createElementVNode, mn = window.Vue.withCtx, Ti = window.Vue.openBlock, Pf = window.Vue.createBlock, dg = window.Vue.createCommentVNode, _l = window.Vue.createTextVNode, xu = window.Vue.createElementBlock, fg = window.Vue.toDisplayString, qW = window.Vue.pushScopeId, GW = window.Vue.popScopeId, Rp = (e) => (qW("data-v-28366268"), e = e(), GW(), e), YW = { id: "cont" }, jW = { class: "btns-navigation" }, KW = /* @__PURE__ */ Rp(() => /* @__PURE__ */ fl("span", null, "Situation List", -1)), ZW = /* @__PURE__ */ Rp(() => /* @__PURE__ */ fl("span", null, "Show Previous Situation ", -1)), JW = /* @__PURE__ */ Rp(() => /* @__PURE__ */ fl("span", null, "Show Next Situation", -1)), XW = { key: 1 }, QW = {
  key: 0,
  class: "detail"
}, eH = /* @__PURE__ */ _l("Details"), tH = /* @__PURE__ */ _l("Metrics"), nH = /* @__PURE__ */ _l("AI Suggestions"), rH = {
  key: 1,
  class: "noSituation"
}, oH = /* @__PURE__ */ _l("dismiss"), xi = window.Vue.ref, pg = window.Vue.watch, iH = window.Vue.onMounted, sH = window.VueRouter.useRoute, aH = /* @__PURE__ */ zW({
  __name: "SituationDetail",
  setup(e) {
    const n = Zo(), r = sH(), s = parseInt(r.params.id), a = xi(s), u = pr(), c = gc(), f = xi(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const m = xi(), w = xi(), g = xi(!0), y = xi(
      u.filteredSituations.findIndex((D) => D === a.value)
    ), b = xi(!1);
    pg(
      () => u.situationDetail,
      () => {
        m.value = u.situationDetail, g.value = !1, u.getUnassignedAlarms();
      }
    ), iH(() => {
      var S;
      const D = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      w.value = D - 90;
    });
    const V = () => {
      n.push({
        name: _t.situations
      });
    }, O = (D) => {
      const S = y.value, A = u.filteredSituations[S + D];
      n.push({
        name: _t.situationDetail,
        params: {
          id: A
        }
      });
    };
    pg(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), y.value = u.filteredSituations.findIndex((D) => D == a.value);
    }), c.$subscribe((D, S) => {
      b.value = S.showError;
    });
    const x = (D) => {
      f.value = D || 0;
    };
    return (D, S) => (Ti(), xu("div", YW, [
      fl("div", jW, [
        Wt(Xe(ve), {
          primary: "",
          onClick: S[0] || (S[0] = () => V())
        }, {
          default: mn(() => [
            Wt(Xe(J), {
              icon: Xe(Os),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            KW
          ]),
          _: 1
        }),
        fl("div", null, [
          Wt(Xe(ve), {
            disabled: !Xe(u).filteredSituations[y.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => O(-1))
          }, {
            default: mn(() => [
              Wt(Xe(J), {
                icon: Xe(Os),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              ZW
            ]),
            _: 1
          }, 8, ["disabled"]),
          Wt(Xe(ve), {
            disabled: !Xe(u).filteredSituations[y.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => O(1))
          }, {
            default: mn(() => [
              JW,
              Wt(Xe(J), {
                icon: Xe(Os),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      g.value ? (Ti(), Pf(Xe(Ds), {
        key: 0,
        class: "spinner"
      })) : (Ti(), xu("div", XW, [
        m.value ? (Ti(), xu("div", QW, [
          Wt(Xe(s0), { "onUpdate:modelValue": x }, {
            tabs: mn(() => [
              Wt(Xe(il), null, {
                default: mn(() => [
                  eH
                ]),
                _: 1
              }),
              Wt(Xe(il), null, {
                default: mn(() => [
                  tH
                ]),
                _: 1
              }),
              Wt(Xe(il), { "data-test": "ai-suggestions-tab" }, {
                default: mn(() => [
                  nH
                ]),
                _: 1
              })
            ]),
            default: mn(() => [
              Wt(Xe(sl), { class: "panel" }, {
                default: mn(() => [
                  Wt(EU, { "situation-info": m.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              Wt(Xe(sl), { class: "panel" }, {
                default: mn(() => [
                  w.value && f.value == 1 ? (Ti(), Pf(b9, {
                    key: 0,
                    situation: m.value,
                    width: w.value
                  }, null, 8, ["situation", "width"])) : dg("", !0)
                ]),
                _: 1
              }),
              Wt(Xe(sl), { class: "panel" }, {
                default: mn(() => [
                  f.value == 2 ? (Ti(), Pf(yW, {
                    key: m.value.id,
                    "situation-id": m.value.id
                  }, null, 8, ["situation-id"])) : dg("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (Ti(), xu("div", rH, " Error. The situation " + fg(Xe(s)) + " does not exist. ", 1))
      ])),
      Wt(Xe(bc), {
        modelValue: b.value,
        "onUpdate:modelValue": S[4] || (S[4] = (A) => b.value = A),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: mn(() => [
          Wt(Xe(ve), {
            onClick: S[3] || (S[3] = (A) => b.value = !1),
            text: ""
          }, {
            default: mn(() => [
              oH
            ]),
            _: 1
          })
        ]),
        default: mn(() => [
          _l(fg(Xe(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const lH = /* @__PURE__ */ Ve(aH, [["__scopeId", "data-v-28366268"]]), uH = window.Vue.defineComponent, kt = window.Vue.unref, Gn = window.Vue.createVNode, nn = window.Vue.createElementVNode, Cs = window.Vue.withCtx, Vs = window.Vue.openBlock, Ya = window.Vue.createElementBlock, cH = window.Vue.createCommentVNode, dH = window.Vue.toDisplayString, Bp = window.Vue.createTextVNode, fH = window.Vue.normalizeClass, pH = window.Vue.renderList, hH = window.Vue.Fragment, mH = window.Vue.createBlock, wH = window.Vue.pushScopeId, vH = window.Vue.popScopeId, gl = (e) => (wH("data-v-e9ff4c5b"), e = e(), vH(), e), _H = { class: "container" }, gH = /* @__PURE__ */ gl(() => /* @__PURE__ */ nn("span", null, "Situation List", -1)), $H = /* @__PURE__ */ gl(() => /* @__PURE__ */ nn("h2", null, "New Situation", -1)), yH = { class: "form" }, bH = { class: "fields" }, CH = {
  key: 0,
  class: "errorList"
}, VH = { class: "footer" }, EH = /* @__PURE__ */ gl(() => /* @__PURE__ */ nn("span", null, "Clear", -1)), SH = /* @__PURE__ */ gl(() => /* @__PURE__ */ nn("span", null, "Add Situation", -1)), IH = { class: "alarm-column" }, kH = { class: "header-alarms" }, AH = /* @__PURE__ */ gl(() => /* @__PURE__ */ nn("h3", null, "Add Unassociated Alarms", -1)), TH = /* @__PURE__ */ Bp(" Total Alarms Added: "), xH = { class: "total" }, LH = { class: "list" }, DH = { class: "filters" }, OH = {
  key: 0,
  class: "alarms"
}, NH = /* @__PURE__ */ Bp(" Error on creating new situation :( "), MH = /* @__PURE__ */ Bp("dismiss"), Mo = window.Vue.ref, RH = window.Vue.watch, BH = /* @__PURE__ */ uH({
  __name: "AddSituation",
  setup(e) {
    const n = Zo(), r = pr(), s = Mo(), a = Mo(""), u = Mo(), c = Mo(""), f = Mo([]), m = Mo(!1), w = Mo(), g = Mo(r.unassignedAlarms);
    g.value.length || r.getUnassignedAlarms(), RH(
      () => r.unassignedAlarms,
      () => {
        g.value = r.unassignedAlarms;
      }
    );
    const y = () => {
      n.push({
        name: _t.situations
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
        await M2(S) ? n.push({
          name: _t.situations
        }) : w.value = !0;
      }
    }, x = () => {
      s.value = "", u.value = "", f.value = [], g.value = r.unassignedAlarms;
    }, D = (S) => {
      g.value = S;
    };
    return (S, A) => (Vs(), Ya("div", _H, [
      Gn(kt(ve), {
        primary: "",
        onClick: A[0] || (A[0] = () => y()),
        class: "back-btn"
      }, {
        default: Cs(() => [
          Gn(kt(J), {
            icon: kt(Os),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          gH
        ]),
        _: 1
      }),
      $H,
      nn("div", yH, [
        nn("div", bH, [
          Gn(kt(Zu), {
            modelValue: s.value,
            "onUpdate:modelValue": A[1] || (A[1] = (T) => s.value = T),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          Gn(kt(Zu), {
            modelValue: u.value,
            "onUpdate:modelValue": A[2] || (A[2] = (T) => u.value = T),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          m.value ? (Vs(), Ya("div", CH, " You must add at least 2 alarms. ")) : cH("", !0),
          nn("div", VH, [
            Gn(kt(ve), {
              class: "btn",
              onClick: x
            }, {
              default: Cs(() => [
                Gn(kt(J), {
                  icon: kt(Fs),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                EH
              ]),
              _: 1
            }),
            Gn(kt(ve), {
              class: "btn-add",
              onClick: O
            }, {
              default: Cs(() => [
                Gn(kt(J), {
                  icon: kt(_c),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                SH
              ]),
              _: 1
            })
          ])
        ]),
        nn("div", IH, [
          nn("div", kH, [
            AH,
            nn("div", null, [
              nn("div", {
                class: fH(["totalAlarms", { errorList: m.value }])
              }, [
                TH,
                nn("span", xH, dH(kt(f).length), 1)
              ], 2)
            ])
          ]),
          nn("div", LH, [
            nn("div", DH, [
              Gn(js, {
                list: kt(r).unassignedAlarms,
                onFilteredList: D,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            g.value.length ? (Vs(), Ya("div", OH, [
              (Vs(!0), Ya(hH, null, pH(g.value, (T) => (Vs(), Ya("div", {
                key: T.id,
                class: "alarm-card"
              }, [
                Gn(Mp, {
                  selected: kt(Ne.exports.includes)(kt(f), T.id),
                  alarm: T,
                  onSelectedAlarm: b
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Vs(), mH(Ks, { key: 1 }))
          ])
        ])
      ]),
      Gn(kt(bc), {
        modelValue: w.value,
        "onUpdate:modelValue": A[4] || (A[4] = (T) => w.value = T),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: Cs(() => [
          Gn(kt(ve), {
            onClick: A[3] || (A[3] = (T) => w.value = !1),
            text: ""
          }, {
            default: Cs(() => [
              MH
            ]),
            _: 1
          })
        ]),
        default: Cs(() => [
          NH
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const PH = /* @__PURE__ */ Ve(BH, [["__scopeId", "data-v-e9ff4c5b"]]), FH = window.Vue.defineComponent, UH = window.Vue.createElementVNode, WH = window.Vue.createTextVNode, HH = window.Vue.unref, zH = window.Vue.withCtx, qH = window.Vue.createVNode, GH = window.Vue.Fragment, YH = window.Vue.openBlock, jH = window.Vue.createElementBlock, KH = window.Vue.pushScopeId, ZH = window.Vue.popScopeId, JH = (e) => (KH("data-v-7c52e38b"), e = e(), ZH(), e), XH = /* @__PURE__ */ JH(() => /* @__PURE__ */ UH("div", { class: "main" }, "Something bad is happening...", -1)), QH = /* @__PURE__ */ WH(" Reload "), ez = /* @__PURE__ */ FH({
  __name: "ErrorPage",
  setup(e) {
    const n = Zo(), r = () => {
      n.push({ name: _t.situations });
    };
    return (s, a) => (YH(), jH(GH, null, [
      XH,
      qH(HH(ve), {
        primary: "",
        onClick: r
      }, {
        default: zH(() => [
          QH
        ]),
        _: 1
      })
    ], 64));
  }
});
const tz = /* @__PURE__ */ Ve(ez, [["__scopeId", "data-v-7c52e38b"]]), nz = window.Vue.defineComponent, en = window.Vue.unref, cr = window.Vue.createVNode, Wo = window.Vue.createElementVNode, ja = window.Vue.withCtx, Li = window.Vue.openBlock, hg = window.Vue.createBlock, rz = window.Vue.renderList, oz = window.Vue.Fragment, Ka = window.Vue.createElementBlock, iz = window.Vue.toDisplayString, U0 = window.Vue.createTextVNode, sz = window.Vue.pushScopeId, az = window.Vue.popScopeId, Pp = (e) => (sz("data-v-543c4501"), e = e(), az(), e), lz = { class: "container" }, uz = { class: "nav-btns" }, cz = /* @__PURE__ */ Pp(() => /* @__PURE__ */ Wo("span", null, "Situation List", -1)), dz = /* @__PURE__ */ Pp(() => /* @__PURE__ */ Wo("h2", null, "List Unassociated Alarms", -1)), fz = { class: "content" }, pz = { class: "filters" }, hz = { class: "list" }, mz = { class: "action-btns" }, wz = /* @__PURE__ */ Pp(() => /* @__PURE__ */ Wo("span", null, "Move", -1)), vz = { key: 1 }, _z = {
  key: 0,
  class: "alarms"
}, gz = /* @__PURE__ */ U0("dismiss"), Ro = window.Vue.ref, $z = window.Vue.watch, yz = window.Vue.markRaw, bz = /* @__PURE__ */ nz({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const n = yz({
      ArrowBack: Os,
      ExitToApp: ap
    }), r = Zo(), s = pr();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = Ro([]), u = Ro([]), c = Ro(!1), f = Ro(!1), m = Ro(""), w = Ro(!1), g = Ro(!1), y = Ro(!0);
    $z(
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
      await w1(A, u.value) ? s.getUnassignedAlarms() : (w.value = !0, g.value = !0, m.value = "Error on moving the alarms :("), f.value = !1;
    }, x = () => {
      r.push({
        name: _t.situations
      });
    }, D = () => {
      u.value.length ? f.value = !0 : (w.value = !0, g.value = !1, m.value = "You need to choose at least one alarm!");
    }, S = (A) => {
      a.value = A;
    };
    return (A, T) => (Li(), Ka("div", lz, [
      Wo("div", uz, [
        cr(en(ve), {
          primary: "",
          onClick: T[0] || (T[0] = () => x())
        }, {
          default: ja(() => [
            cr(en(J), {
              icon: en(n).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            cz
          ]),
          _: 1
        }),
        cr(Y1)
      ]),
      dz,
      Wo("div", fz, [
        Wo("div", pz, [
          cr(js, {
            list: en(s).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        Wo("div", hz, [
          Wo("div", mz, [
            cr(en(Ri), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                T[1] || (T[1] = (R) => c.value = R),
                V
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            cr(en(ve), { onClick: D }, {
              default: ja(() => [
                cr(en(J), {
                  icon: en(n).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                wz
              ]),
              _: 1
            })
          ]),
          y.value ? (Li(), hg(en(Ds), {
            key: 0,
            class: "spinner"
          })) : (Li(), Ka("div", vz, [
            en(a).length ? (Li(), Ka("div", _z, [
              (Li(!0), Ka(oz, null, rz(en(a), (R) => (Li(), Ka("div", {
                key: R.id,
                class: "card"
              }, [
                cr(Mp, {
                  selected: en(Ne.exports.includes)(en(u), R.id),
                  alarm: R,
                  onSelectedAlarm: b
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Li(), hg(Ks, { key: 1 }))
          ]))
        ])
      ]),
      cr(T0, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: O,
        onDrawerClosed: T[2] || (T[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      cr(en(bc), {
        modelValue: w.value,
        "onUpdate:modelValue": T[4] || (T[4] = (R) => w.value = R),
        right: "",
        error: g.value,
        timeout: 6e3
      }, {
        button: ja(() => [
          cr(en(ve), {
            onClick: T[3] || (T[3] = (R) => w.value = !1),
            text: ""
          }, {
            default: ja(() => [
              gz
            ]),
            _: 1
          })
        ]),
        default: ja(() => [
          U0(iz(m.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const Cz = /* @__PURE__ */ Ve(bz, [["__scopeId", "data-v-543c4501"]]), Vz = window.Vue.defineComponent, Ff = window.Vue.unref, Ez = window.Vue.createVNode, Sz = window.Vue.createElementVNode, Iz = window.Vue.withCtx, kz = window.Vue.openBlock, Az = window.Vue.createBlock, Tz = window.Vue.pushScopeId, xz = window.Vue.popScopeId, Lz = (e) => (Tz("data-v-b6e7f46c"), e = e(), xz(), e), Dz = /* @__PURE__ */ Lz(() => /* @__PURE__ */ Sz("span", null, "Situation List", -1)), Oz = window.Vue.markRaw, Nz = /* @__PURE__ */ Vz({
  __name: "SituationListBtn",
  setup(e) {
    const n = Zo(), r = Oz({
      ArrowBack: Os
    }), s = () => {
      n.push({
        name: _t.situations
      });
    };
    return (a, u) => (kz(), Az(Ff(ve), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: Iz(() => [
        Ez(Ff(J), {
          icon: Ff(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        Dz
      ]),
      _: 1
    }));
  }
});
const Mz = /* @__PURE__ */ Ve(Nz, [["__scopeId", "data-v-b6e7f46c"]]);
var Rz = Object.defineProperty, Bz = Object.defineProperties, Pz = Object.getOwnPropertyDescriptors, mg = Object.getOwnPropertySymbols, Fz = Object.prototype.hasOwnProperty, Uz = Object.prototype.propertyIsEnumerable, wg = (e, n, r) => n in e ? Rz(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Ts = (e, n) => {
  for (var r in n || (n = {}))
    Fz.call(n, r) && wg(e, r, n[r]);
  if (mg)
    for (var r of mg(n))
      Uz.call(n, r) && wg(e, r, n[r]);
  return e;
}, Wz = (e, n) => Bz(e, Pz(n));
const Hz = window.Vue.defineComponent, vg = window.Vue.toRef, zz = window.Vue.computed, qz = window.Vue.ref, _g = window.Vue.resolveComponent, gg = window.Vue.openBlock, $g = window.Vue.createElementBlock, yg = window.Vue.mergeProps, bg = window.Vue.createVNode, Gz = window.Vue.normalizeClass, Lu = window.Vue.withCtx, Cg = window.Vue.renderSlot, Yz = window.Vue.createElementVNode, jz = window.Vue.toHandlers, Kz = window.Vue.toDisplayString, Zz = window.Vue.createCommentVNode, Jz = Ts(Ts({
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
}, cc), qs), Xz = {
  "update:modelValue": (e) => !0
};
var Qz = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const eq = Hz({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: Xz,
  props: Jz,
  setup(e, n) {
    Gs(e), dc(e);
    const r = vg(e, "id"), s = zz(() => r.value ? r.value : Ce("feather-input-label")), a = qz(), { validate: u } = Hs(s, a, e.label, e.schema, vg(e, "error"));
    return Ts({
      inputId: s,
      internalValue: a,
      validate: u
    }, zs(n.attrs));
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
      const e = Ts({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), Wz(Ts(Ts({}, e), this.listeners), {
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
    InputSubText: Ws,
    InputWrapper: uc
  }
}), tq = ["maxlength"], nq = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function rq(e, n, r, s, a, u) {
  const c = _g("InputWrapper"), f = _g("InputSubText");
  return gg(), $g("div", yg(e.inherittedAttrs, { class: "feather-input-container" }), [
    bg(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: Gz(["feather-input-content", e.contentCls])
    }, {
      pre: Lu(() => [
        Cg(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: Lu(() => [
        Cg(e.$slots, "post", {}, void 0, !0)
      ]),
      default: Lu(() => [
        Yz("input", yg(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, jz(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, tq)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    bg(f, { id: e.descriptionId }, {
      right: Lu(() => [
        e.maxlength ? (gg(), $g("div", nq, Kz(e.charCount), 1)) : Zz("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Bo = /* @__PURE__ */ Qz(eq, [["render", rq], ["__scopeId", "data-v-bf37b0d6"]]);
const oq = window.Vue.openBlock, iq = window.Vue.createElementBlock, Fp = window.Vue.createElementVNode;
var sq = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const aq = {}, lq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, uq = /* @__PURE__ */ Fp("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), cq = /* @__PURE__ */ Fp("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), dq = /* @__PURE__ */ Fp("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), fq = [
  uq,
  cq,
  dq
];
function pq(e, n) {
  return oq(), iq("svg", lq, fq);
}
var hq = /* @__PURE__ */ sq(aq, [["render", pq]]);
const mq = window.Vue.openBlock, wq = window.Vue.createElementBlock, W0 = window.Vue.createElementVNode;
var vq = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
};
const _q = {}, gq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $q = /* @__PURE__ */ W0("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), yq = /* @__PURE__ */ W0("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), bq = [
  $q,
  yq
];
function Cq(e, n) {
  return mq(), wq("svg", gq, bq);
}
var Vq = /* @__PURE__ */ vq(_q, [["render", Cq]]);
const H0 = [
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
], z0 = (e) => {
  const n = (e || "").toLowerCase();
  if (!!n)
    return H0.find((r) => r.matches.some((s) => n.includes(s)));
}, Eq = () => H0, Sq = (e) => {
  var n, r;
  return (r = (n = z0(e)) == null ? void 0 : n.models) != null ? r : [];
}, Iq = window.Vue.defineComponent, pe = window.Vue.createVNode, M = window.Vue.createElementVNode, oe = window.Vue.createTextVNode, z = window.Vue.unref, ut = window.Vue.withCtx, je = window.Vue.openBlock, at = window.Vue.createElementBlock, Ht = window.Vue.createCommentVNode, Ke = window.Vue.toDisplayString, Za = window.Vue.Fragment, Uf = window.Vue.createBlock, Vg = window.Vue.renderList, kq = window.Vue.normalizeClass, Aq = window.Vue.pushScopeId, Tq = window.Vue.popScopeId, Ae = (e) => (Aq("data-v-44b4fabb"), e = e(), Tq(), e), xq = { class: "container" }, Lq = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("h3", { "data-test": "page-title" }, "ALEC Configuration", -1)), Dq = /* @__PURE__ */ oe("Correlation Engine"), Oq = /* @__PURE__ */ oe("LLM Root Cause Analysis"), Nq = { class: "section" }, Mq = { class: "title-row" }, Rq = { class: "title" }, Bq = /* @__PURE__ */ oe(" Choose the correlation engine that ALEC will use (see "), Pq = ["href"], Fq = /* @__PURE__ */ oe(" for more information): "), Uq = ["aria-expanded"], Wq = {
  key: 0,
  class: "help-popover",
  "data-test": "engine-help-popover"
}, Hq = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("ul", null, [
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
], -1)), zq = [
  Hq
], qq = /* @__PURE__ */ oe("Clustering"), Gq = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("div", { class: "hellinger" }, [
  /* @__PURE__ */ M("strong", null, "Hellinger distance")
], -1)), Yq = /* @__PURE__ */ oe(" LLM Based "), jq = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), Kq = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, Zq = { class: "title-row" }, Jq = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("div", { class: "title" }, "Correlation variables", -1)), Xq = ["aria-expanded"], Qq = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, eG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("strong", null, "Alpha (\u03B1)", -1)), tG = /* @__PURE__ */ oe(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), nG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("strong", null, "Beta (\u03B2)", -1)), rG = /* @__PURE__ */ oe(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), oG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("code", null, "[0, 1]", -1)), iG = /* @__PURE__ */ oe(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), sG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("strong", null, "Epsilon (\u03B5)", -1)), aG = /* @__PURE__ */ oe(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), lG = { "data-test": "help-hellinger-w" }, uG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("strong", null, "Hellinger w", -1)), cG = /* @__PURE__ */ oe(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), dG = { "data-test": "help-hellinger-bias" }, fG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("strong", null, "Hellinger bias", -1)), pG = /* @__PURE__ */ oe(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), hG = { class: "variables" }, mG = {
  class: "section",
  "data-test": "llm-section"
}, wG = { class: "title-row" }, vG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("div", { class: "title" }, "LLM Root Cause Analysis", -1)), _G = ["aria-expanded"], gG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("div", { class: "llm-help" }, " ALEC can automatically or manually request root cause analysis and a suggested resolution strategy from a large language model (LLM). It works with any OpenAI-compatible, API-enabled LLM \u2014 commercial or locally hosted \u2014 and does not endorse any particular model. The endpoint, model and API key are stored on the OpenNMS server and apply to all users of this plugin. ", -1)), $G = {
  key: 0,
  class: "help-popover",
  "data-test": "llm-key-help-popover"
}, yG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("p", { class: "help-intro" }, [
  /* @__PURE__ */ oe(" ALEC sends each new situation to the model you configure and shows the suggested root causes and resolutions on the situation's "),
  /* @__PURE__ */ M("em", null, "AI Suggestions"),
  /* @__PURE__ */ oe(" tab. ")
], -1)), bG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("ul", null, [
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
], -1)), CG = [
  yG,
  bG
], VG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("strong", null, "LLM Enabled Root Cause Analysis", -1)), EG = /* @__PURE__ */ oe(" Automatically AI Evaluate new situations "), SG = {
  key: 1,
  class: "caption",
  "data-test": "llm-no-key-hint"
}, IG = { class: "llm-field-block" }, kG = { class: "llm-field-header" }, AG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("span", { class: "llm-field-label" }, "Endpoint (OpenAI-compatible base URL)", -1)), TG = { class: "llm-field-actions" }, xG = ["disabled"], LG = /* @__PURE__ */ oe(" Reset to default "), DG = ["disabled"], OG = /* @__PURE__ */ oe(" Set as default "), NG = { class: "llm-combo" }, MG = ["aria-expanded"], RG = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-base-url-menu"
}, BG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("li", { class: "llm-combo-hint" }, "Common providers \u2014 or type your own", -1)), PG = ["onClick"], FG = { class: "llm-combo-item-main" }, UG = { class: "llm-combo-item-sub" }, WG = { class: "llm-field-block" }, HG = { class: "llm-field-header" }, zG = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("span", { class: "llm-field-label" }, "Model", -1)), qG = { class: "llm-field-actions" }, GG = ["disabled"], YG = /* @__PURE__ */ oe(" Reset to default "), jG = ["disabled"], KG = /* @__PURE__ */ oe(" Set as default "), ZG = { class: "llm-combo" }, JG = ["aria-expanded"], XG = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-model-menu"
}, QG = { class: "llm-combo-hint" }, eY = ["onClick"], tY = { class: "llm-combo-item-main" }, nY = {
  key: 1,
  class: "llm-combo-hint"
}, rY = {
  class: "llm-prompt-block",
  "data-test": "llm-prompt-block"
}, oY = { class: "llm-prompt-header" }, iY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("span", { class: "llm-prompt-label" }, "System prompt", -1)), sY = ["disabled"], aY = /* @__PURE__ */ oe(" Reset to default "), lY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("div", { class: "llm-prompt-help" }, " Instructions sent to the model for every analysis. Customize it to add site-specific context (your topology, naming conventions, escalation policy, vendors in use). Leave it as the default, or clear it to fall back to the default. ", -1)), uY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("div", {
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
], -1)), cY = { class: "llm-key-row" }, dY = /* @__PURE__ */ oe(" Clear Key "), fY = { class: "llm-validate-row" }, pY = {
  key: 0,
  class: "caption",
  "data-test": "llm-validate-hint"
}, hY = {
  key: 2,
  class: "llm-key-saved",
  "data-test": "llm-key-saved"
}, mY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("span", null, " API key on file. The stored key is never sent back to the browser \u2014 leave the field blank to keep it, or paste a new one to replace it. ", -1)), wY = {
  key: 3,
  class: "caption",
  "data-test": "llm-cleared-hint"
}, vY = {
  key: 4,
  class: "llm-usage",
  "data-test": "llm-usage"
}, _Y = { class: "usage-summary" }, gY = { class: "usage-label" }, $Y = ["title"], yY = {
  key: 0,
  class: "usage-details",
  "data-test": "llm-usage-details"
}, bY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("dt", null, "Input", -1)), CY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("dt", null, "Output", -1)), VY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("dt", null, "Cache read", -1)), EY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("dt", null, "Cache create", -1)), SY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("dt", null, "Calls", -1)), IY = { class: "muted" }, kY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("dt", null, "Cache hit", -1)), AY = { class: "action-row" }, TY = /* @__PURE__ */ oe(" Close All Open Situations "), xY = /* @__PURE__ */ oe(" Re-Evaluate All Open Alarms "), LY = /* @__PURE__ */ Ae(() => /* @__PURE__ */ M("span", null, "Save Changes", -1)), DY = /* @__PURE__ */ oe("dismiss"), Yn = window.Vue.computed, OY = window.Vue.markRaw, NY = window.Vue.onMounted, MY = window.Vue.onUnmounted, ke = window.Vue.ref, RY = /* @__PURE__ */ Iq({
  __name: "AccountSettings",
  setup(e) {
    var $n, mr, yn, Qn, er, Or, Nr, Mr, wr, vr, tr, jt, ro, oo, io, so, ei, Rr, Br, Rt, nr, ao, lo, uo, ti, _r, ni, co, zi;
    const n = (re) => re >= 1e6 ? (re / 1e6).toFixed(1) + "M" : re >= 1e3 ? (re / 1e3).toFixed(1) + "K" : String(re), r = OY({
      MarkComplete: Ku,
      Help: hq,
      Restore: Vq,
      ExpandMore: wl
    }), s = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, a = Fi(), u = ke((($n = a.engineInfo) == null ? void 0 : $n.engineName) || xt.ENGINE_DBSCAN), c = ke(
      a.engineInfo ? a.engineInfo.distanceMeasureName === xt.HELLINGER_OPTION : !0
    ), f = ke((yn = (mr = a.engineInfo) == null ? void 0 : mr.alpha) != null ? yn : s.alpha), m = ke((er = (Qn = a.engineInfo) == null ? void 0 : Qn.beta) != null ? er : s.beta), w = ke((Nr = (Or = a.engineInfo) == null ? void 0 : Or.epsilon) != null ? Nr : s.epsilon), g = ke(
      (wr = (Mr = a.engineInfo) == null ? void 0 : Mr.hellingerW) != null ? wr : s.hellingerW
    ), y = ke(
      (tr = (vr = a.engineInfo) == null ? void 0 : vr.hellingerBias) != null ? tr : s.hellingerBias
    ), b = Yn(() => u.value === xt.ENGINE_DBSCAN), V = Yn(() => b.value && c.value), O = ke(a.llmConfig !== null), x = ke((ro = (jt = a.llmConfig) == null ? void 0 : jt.enabled) != null ? ro : !1), D = ke((io = (oo = a.llmConfig) == null ? void 0 : oo.autoEvaluate) != null ? io : !0), S = ke((ei = (so = a.llmConfig) == null ? void 0 : so.baseUrl) != null ? ei : ""), A = ke((Br = (Rr = a.llmConfig) == null ? void 0 : Rr.model) != null ? Br : ""), T = ke((nr = (Rt = a.llmConfig) == null ? void 0 : Rt.defaultBaseUrl) != null ? nr : ""), R = ke((lo = (ao = a.llmConfig) == null ? void 0 : ao.defaultModel) != null ? lo : ""), F = ke((ti = (uo = a.llmConfig) == null ? void 0 : uo.systemPrompt) != null ? ti : ""), W = ke((ni = (_r = a.llmConfig) == null ? void 0 : _r.defaultSystemPrompt) != null ? ni : ""), L = Yn(
      () => W.value.length > 0 && F.value.trim() !== W.value.trim()
    ), X = () => {
      F.value = W.value;
    }, Me = Yn(
      () => T.value.trim().length > 0 && S.value.trim() !== T.value.trim()
    ), he = Yn(
      () => R.value.trim().length > 0 && A.value.trim() !== R.value.trim()
    ), Te = Yn(
      () => S.value.trim().length > 0 && S.value.trim() !== T.value.trim()
    ), Qe = Yn(
      () => A.value.trim().length > 0 && A.value.trim() !== R.value.trim()
    ), et = () => {
      S.value = T.value;
    }, Pe = () => {
      A.value = R.value;
    }, de = () => {
      T.value = S.value.trim();
    }, Fe = () => {
      R.value = A.value.trim();
    }, Ge = Eq(), Re = ke(!1), on = ke(!1), xr = Yn(() => Sq(S.value)), $e = Yn(() => z0(S.value)), Xs = (re) => {
      S.value = re, Re.value = !1;
    }, Qs = (re) => {
      A.value = re, on.value = !1;
    }, Hi = (re) => {
      const Z = re.target;
      (!Z || !Z.closest(".llm-combo")) && (Re.value = !1, on.value = !1);
    }, Ct = ke(""), Gt = ke((zi = (co = a.llmConfig) == null ? void 0 : co.apiKeyPresent) != null ? zi : !1), sn = ke(!1), gn = ke(!1), an = ke(null), Jo = Yn(
      () => Ct.value.trim().length === 0 && (!Gt.value || sn.value)
    ), xe = async () => {
      an.value = null, gn.value = !0;
      try {
        const re = {
          enabled: x.value,
          autoEvaluate: D.value,
          baseUrl: S.value.trim(),
          model: A.value.trim()
        }, Z = Ct.value.trim();
        Z.length > 0 && (re.apiKey = Z), an.value = await D2(re);
      } finally {
        gn.value = !1;
      }
    }, Lr = Yn(
      () => (!Gt.value || sn.value) && Ct.value.trim().length === 0
    ), Be = Yn(
      () => Lr.value || S.value.trim().length === 0 || A.value.trim().length === 0
    ), Nt = () => {
      Ct.value = "", sn.value = !0, Gt.value = !1, x.value = !1;
    }, be = ke(!1), On = ke(!1), Vt = ke(!1), Mt = ke(!1), Xo = ke(!1), Nn = ke(""), pt = ke(!1);
    NY(async () => {
      if (document.addEventListener("mousedown", Hi), a.llmConfig === null) {
        const re = await a.getLLMConfig();
        re && (O.value = !0, x.value = re.enabled, D.value = re.autoEvaluate, S.value = re.baseUrl || "", A.value = re.model || "", T.value = re.defaultBaseUrl || "", R.value = re.defaultModel || "", W.value = re.defaultSystemPrompt || "", F.value = re.systemPrompt || re.defaultSystemPrompt || "", Gt.value = re.apiKeyPresent);
      }
      await a.getLLMUsage(30);
    }), MY(() => {
      document.removeEventListener("mousedown", Hi);
    });
    const hr = () => {
      f.value = s.alpha, m.value = s.beta, w.value = s.epsilon, g.value = s.hellingerW, y.value = s.hellingerBias;
    }, ht = (re, Z) => {
      Nn.value = re, Xo.value = Z, Mt.value = !0;
    }, Dr = () => {
      if (sn.value)
        return {
          enabled: !1,
          autoEvaluate: D.value,
          baseUrl: S.value.trim(),
          model: A.value.trim(),
          defaultBaseUrl: T.value.trim(),
          defaultModel: R.value.trim(),
          systemPrompt: F.value,
          clearApiKey: !0
        };
      const re = Ct.value.trim(), Z = {
        enabled: x.value,
        autoEvaluate: D.value,
        baseUrl: S.value.trim(),
        model: A.value.trim(),
        defaultBaseUrl: T.value.trim(),
        defaultModel: R.value.trim(),
        systemPrompt: F.value
      };
      return re.length > 0 && (Z.apiKey = re), Z;
    }, Yt = async () => {
      var ri, oi, fo, ii, si, qi, Gi, Pr, Yi, Bt, ai, Mn, ji, li, po, ho, Fr;
      const re = x.value && !sn.value, Z = /\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])/i.test(
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
      ), ln = O.value ? await a.setLLMConfig(Dr()) : !0;
      O.value && ln && (Ct.value = "", sn.value = !1, Gt.value = (oi = (ri = a.llmConfig) == null ? void 0 : ri.apiKeyPresent) != null ? oi : !1, x.value = (ii = (fo = a.llmConfig) == null ? void 0 : fo.enabled) != null ? ii : !1, D.value = (qi = (si = a.llmConfig) == null ? void 0 : si.autoEvaluate) != null ? qi : !0, S.value = (Pr = (Gi = a.llmConfig) == null ? void 0 : Gi.baseUrl) != null ? Pr : "", A.value = (Bt = (Yi = a.llmConfig) == null ? void 0 : Yi.model) != null ? Bt : "", T.value = (Mn = (ai = a.llmConfig) == null ? void 0 : ai.defaultBaseUrl) != null ? Mn : "", R.value = (li = (ji = a.llmConfig) == null ? void 0 : ji.defaultModel) != null ? li : "", (po = a.llmConfig) != null && po.defaultSystemPrompt && (W.value = a.llmConfig.defaultSystemPrompt), F.value = (Fr = (ho = a.llmConfig) == null ? void 0 : ho.systemPrompt) != null ? Fr : F.value, a.getLLMUsage(30)), Q && ln ? (a.getEngineInfo(), ht("The settings were saved!", !1)) : ht(
        Q && !ln ? "Engine settings saved, but the LLM configuration was rejected \u2014 enabling the integration requires an endpoint URL, a model and an API key." : "Error on saving the settings",
        !0
      );
    }, Qo = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const re = await R2();
      ht(
        re ? "All open situations were closed." : "Failed to close situations.",
        !re
      );
    }, Xn = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const re = await B2();
      ht(
        re ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !re
      );
    };
    return (re, Z) => (je(), at(Za, null, [
      pe(Mz),
      M("div", xq, [
        Lq,
        pe(z(s0), { "data-test": "config-tabs" }, {
          tabs: ut(() => [
            pe(z(il), { "data-test": "tab-engine" }, {
              default: ut(() => [
                Dq
              ]),
              _: 1
            }),
            pe(z(il), { "data-test": "tab-llm" }, {
              default: ut(() => [
                Oq
              ]),
              _: 1
            })
          ]),
          default: ut(() => [
            pe(z(sl), { class: "config-panel" }, {
              default: ut(() => [
                M("div", Nq, [
                  M("div", Mq, [
                    M("div", Rq, [
                      Bq,
                      M("a", {
                        target: "_blank",
                        href: z(xt).URL_DOCUMENTATION
                      }, "Correlation Engines documentation", 8, Pq),
                      Fq
                    ]),
                    M("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": On.value,
                      "aria-label": "About the correlation engines and Hellinger distance",
                      "data-test": "engine-help",
                      onClick: Z[0] || (Z[0] = (Le) => On.value = !On.value)
                    }, [
                      pe(z(J), {
                        icon: z(r).Help
                      }, null, 8, ["icon"])
                    ], 8, Uq)
                  ]),
                  On.value ? (je(), at("div", Wq, zq)) : Ht("", !0),
                  pe(z(W1), {
                    vertical: "",
                    modelValue: u.value,
                    "onUpdate:modelValue": Z[2] || (Z[2] = (Le) => u.value = Le),
                    label: "",
                    hideLabel: ""
                  }, {
                    default: ut(() => [
                      pe(z(ip), {
                        class: "radio-item",
                        value: z(xt).ENGINE_DBSCAN
                      }, {
                        default: ut(() => [
                          qq
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      pe(z(Ri), {
                        modelValue: c.value,
                        "onUpdate:modelValue": Z[1] || (Z[1] = (Le) => c.value = Le),
                        disabled: !z(b),
                        class: "checkbox"
                      }, {
                        default: ut(() => [
                          Gq
                        ]),
                        _: 1
                      }, 8, ["modelValue", "disabled"]),
                      pe(z(ip), {
                        class: "radio-item",
                        value: z(xt).ENGINE_LLM,
                        disabled: "",
                        "data-test": "engine-llm"
                      }, {
                        default: ut(() => [
                          Yq
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      jq
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                z(b) ? (je(), at("div", Kq, [
                  M("div", Zq, [
                    Jq,
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
                    ], 8, Xq),
                    M("button", {
                      type: "button",
                      class: "icon-btn reset-icon",
                      "aria-label": "Reset correlation variables to defaults",
                      "data-test": "variables-reset",
                      onClick: hr
                    }, [
                      pe(z(J), {
                        icon: z(r).Restore
                      }, null, 8, ["icon"])
                    ])
                  ]),
                  be.value ? (je(), at("div", Qq, [
                    M("ul", null, [
                      M("li", null, [
                        eG,
                        tG,
                        M("em", null, "Default: " + Ke(s.alpha), 1)
                      ]),
                      M("li", null, [
                        nG,
                        rG,
                        oG,
                        iG,
                        M("em", null, "Default: " + Ke(s.beta), 1)
                      ]),
                      M("li", null, [
                        sG,
                        aG,
                        M("em", null, "Default: " + Ke(s.epsilon), 1)
                      ]),
                      z(V) ? (je(), at(Za, { key: 0 }, [
                        M("li", lG, [
                          uG,
                          cG,
                          M("em", null, "Default: " + Ke(s.hellingerW), 1)
                        ]),
                        M("li", dG, [
                          fG,
                          pG,
                          M("em", null, "Default: " + Ke(s.hellingerBias), 1)
                        ])
                      ], 64)) : Ht("", !0)
                    ])
                  ])) : Ht("", !0),
                  M("div", hG, [
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
                    z(V) ? (je(), Uf(z(Bo), {
                      key: 0,
                      modelValue: g.value,
                      "onUpdate:modelValue": Z[7] || (Z[7] = (Le) => g.value = Le),
                      type: "number",
                      label: "Hellinger w",
                      "data-test": "variable-hellinger-w"
                    }, null, 8, ["modelValue"])) : Ht("", !0),
                    z(V) ? (je(), Uf(z(Bo), {
                      key: 1,
                      modelValue: y.value,
                      "onUpdate:modelValue": Z[8] || (Z[8] = (Le) => y.value = Le),
                      type: "number",
                      label: "Hellinger bias",
                      "data-test": "variable-hellinger-bias"
                    }, null, 8, ["modelValue"])) : Ht("", !0)
                  ])
                ])) : Ht("", !0)
              ]),
              _: 1
            }),
            pe(z(sl), { class: "config-panel" }, {
              default: ut(() => {
                var Le;
                return [
                  M("div", mG, [
                    M("div", wG, [
                      vG,
                      M("button", {
                        type: "button",
                        class: "icon-btn help-icon",
                        "aria-expanded": Vt.value,
                        "aria-label": "How to get an API key",
                        "data-test": "llm-key-help",
                        onClick: Z[9] || (Z[9] = (Q) => Vt.value = !Vt.value)
                      }, [
                        pe(z(J), {
                          icon: z(r).Help
                        }, null, 8, ["icon"])
                      ], 8, _G)
                    ]),
                    gG,
                    Vt.value ? (je(), at("div", $G, CG)) : Ht("", !0),
                    pe(z(Ri), {
                      modelValue: x.value,
                      "onUpdate:modelValue": Z[10] || (Z[10] = (Q) => x.value = Q),
                      disabled: z(Be) && !x.value,
                      class: "checkbox",
                      "data-test": "llm-enabled"
                    }, {
                      default: ut(() => [
                        VG
                      ]),
                      _: 1
                    }, 8, ["modelValue", "disabled"]),
                    pe(z(Ri), {
                      modelValue: D.value,
                      "onUpdate:modelValue": Z[11] || (Z[11] = (Q) => D.value = Q),
                      disabled: !x.value,
                      class: "checkbox sub-checkbox",
                      "data-test": "llm-auto-evaluate"
                    }, {
                      default: ut(() => [
                        EG
                      ]),
                      _: 1
                    }, 8, ["modelValue", "disabled"]),
                    z(Be) ? (je(), at("div", SG, " Enter an endpoint, model and API key to enable. ")) : Ht("", !0),
                    M("div", IG, [
                      M("div", kG, [
                        AG,
                        M("div", TG, [
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
                            LG
                          ], 8, xG),
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
                            OG
                          ], 8, DG)
                        ])
                      ]),
                      M("div", NG, [
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
                          "aria-expanded": Re.value,
                          "aria-label": "Show endpoint suggestions",
                          "data-test": "llm-base-url-suggest",
                          onClick: Z[13] || (Z[13] = (Q) => Re.value = !Re.value)
                        }, [
                          pe(z(J), {
                            icon: z(r).ExpandMore
                          }, null, 8, ["icon"])
                        ], 8, MG),
                        Re.value ? (je(), at("ul", RG, [
                          BG,
                          (je(!0), at(Za, null, Vg(z(Ge), (Q) => (je(), at("li", {
                            key: Q.baseUrl,
                            class: "llm-combo-item",
                            onClick: (ln) => Xs(Q.baseUrl)
                          }, [
                            M("span", FG, Ke(Q.name), 1),
                            M("span", UG, [
                              M("code", null, Ke(Q.baseUrl), 1),
                              oe(" \xB7 " + Ke(Q.keyHint), 1)
                            ])
                          ], 8, PG))), 128))
                        ])) : Ht("", !0)
                      ])
                    ]),
                    M("div", WG, [
                      M("div", HG, [
                        zG,
                        M("div", qG, [
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
                            YG
                          ], 8, GG),
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
                            KG
                          ], 8, jG)
                        ])
                      ]),
                      M("div", ZG, [
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
                          "aria-expanded": on.value,
                          "aria-label": "Show model suggestions",
                          "data-test": "llm-model-suggest",
                          onClick: Z[15] || (Z[15] = (Q) => on.value = !on.value)
                        }, [
                          pe(z(J), {
                            icon: z(r).ExpandMore
                          }, null, 8, ["icon"])
                        ], 8, JG),
                        on.value ? (je(), at("ul", XG, [
                          z(xr).length ? (je(), at(Za, { key: 0 }, [
                            M("li", QG, " Suggested for " + Ke((Le = z($e)) == null ? void 0 : Le.name) + " \u2014 or type your own ", 1),
                            (je(!0), at(Za, null, Vg(z(xr), (Q) => (je(), at("li", {
                              key: Q.id,
                              class: "llm-combo-item",
                              onClick: (ln) => Qs(Q.id)
                            }, [
                              M("span", tY, [
                                M("code", null, Ke(Q.id), 1)
                              ])
                            ], 8, eY))), 128))
                          ], 64)) : (je(), at("li", nY, " No preset models for this endpoint \u2014 type your model id. For a local server (LM Studio, Ollama) copy it from the server's loaded-model list. "))
                        ])) : Ht("", !0)
                      ])
                    ]),
                    M("div", rY, [
                      M("div", oY, [
                        iY,
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
                          aY
                        ], 8, sY)
                      ]),
                      lY,
                      pe(z(Zu), {
                        modelValue: F.value,
                        "onUpdate:modelValue": Z[16] || (Z[16] = (Q) => F.value = Q),
                        label: "System prompt",
                        hideLabel: "",
                        rows: "12",
                        "data-test": "llm-system-prompt",
                        class: "llm-prompt-textarea"
                      }, null, 8, ["modelValue"])
                    ]),
                    uY,
                    M("div", cY, [
                      pe(z(Bo), {
                        modelValue: Ct.value,
                        "onUpdate:modelValue": Z[17] || (Z[17] = (Q) => Ct.value = Q),
                        type: "password",
                        autocomplete: "new-password",
                        label: Gt.value && !sn.value ? "API key \u2014 saved (paste a new key to replace)" : "API key",
                        "data-test": "llm-api-key",
                        class: "llm-key-input"
                      }, null, 8, ["modelValue", "label"]),
                      Gt.value && !sn.value ? (je(), Uf(z(ve), {
                        key: 0,
                        secondary: "",
                        "data-test": "llm-clear-key",
                        onClick: Nt
                      }, {
                        default: ut(() => [
                          dY
                        ]),
                        _: 1
                      })) : Ht("", !0)
                    ]),
                    M("div", fY, [
                      pe(z(ve), {
                        secondary: "",
                        disabled: gn.value || z(Jo),
                        "data-test": "llm-validate-btn",
                        onClick: xe
                      }, {
                        default: ut(() => [
                          oe(Ke(gn.value ? "Validating\u2026" : "Validate key"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      z(Jo) ? (je(), at("span", pY, " Enter an API key to validate. ")) : an.value ? (je(), at("span", {
                        key: 1,
                        class: kq(["llm-validate-result", an.value.ok ? "is-ok" : "is-error"]),
                        "data-test": "llm-validate-result"
                      }, [
                        pe(z(J), {
                          icon: an.value.ok ? z(r).MarkComplete : z(r).Help,
                          class: "result-icon"
                        }, null, 8, ["icon"]),
                        oe(" " + Ke(an.value.message), 1)
                      ], 2)) : Ht("", !0)
                    ]),
                    Gt.value && !sn.value ? (je(), at("div", hY, [
                      pe(z(J), {
                        icon: z(r).MarkComplete,
                        class: "saved-icon"
                      }, null, 8, ["icon"]),
                      mY
                    ])) : Ht("", !0),
                    sn.value ? (je(), at("div", wY, " Stored API key will be removed on save. ")) : Ht("", !0),
                    z(a).llmUsage ? (je(), at("div", vY, [
                      M("div", _Y, [
                        M("span", gY, "Last " + Ke(z(a).llmUsage.daysWindow) + " days:", 1),
                        M("span", {
                          class: "usage-tokens",
                          title: `${z(a).llmUsage.totalTokens.toLocaleString()} tokens`,
                          "data-test": "llm-usage-tokens"
                        }, Ke(n(z(a).llmUsage.totalTokens)) + " tokens ", 9, $Y),
                        M("button", {
                          type: "button",
                          class: "usage-toggle",
                          onClick: Z[18] || (Z[18] = (Q) => pt.value = !pt.value),
                          "data-test": "llm-usage-toggle"
                        }, Ke(pt.value ? "hide details" : "show details"), 1)
                      ]),
                      pt.value ? (je(), at("dl", yY, [
                        M("div", null, [
                          bY,
                          M("dd", null, Ke(n(z(a).llmUsage.inputTokens)), 1)
                        ]),
                        M("div", null, [
                          CY,
                          M("dd", null, Ke(n(z(a).llmUsage.outputTokens)), 1)
                        ]),
                        M("div", null, [
                          VY,
                          M("dd", null, Ke(n(z(a).llmUsage.cacheReadInputTokens)), 1)
                        ]),
                        M("div", null, [
                          EY,
                          M("dd", null, Ke(n(z(a).llmUsage.cacheCreationInputTokens)), 1)
                        ]),
                        M("div", null, [
                          SY,
                          M("dd", null, [
                            oe(Ke(z(a).llmUsage.calls) + " ", 1),
                            M("span", IY, "(" + Ke(z(a).llmUsage.successfulCalls) + " ok / " + Ke(z(a).llmUsage.failedCalls) + " failed)", 1)
                          ])
                        ]),
                        M("div", null, [
                          kY,
                          M("dd", null, Ke((z(a).llmUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
                        ])
                      ])) : Ht("", !0)
                    ])) : Ht("", !0)
                  ])
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        }),
        M("div", AY, [
          pe(z(ve), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: Qo
          }, {
            default: ut(() => [
              TY
            ]),
            _: 1
          }),
          pe(z(ve), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: Xn
          }, {
            default: ut(() => [
              xY
            ]),
            _: 1
          }),
          pe(z(ve), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: Yt
          }, {
            default: ut(() => [
              pe(z(J), {
                icon: z(r).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              LY
            ]),
            _: 1
          })
        ]),
        pe(z(bc), {
          modelValue: Mt.value,
          "onUpdate:modelValue": Z[20] || (Z[20] = (Le) => Mt.value = Le),
          right: "",
          error: Xo.value,
          timeout: 6e3
        }, {
          button: ut(() => [
            pe(z(ve), {
              onClick: Z[19] || (Z[19] = (Le) => Mt.value = !1),
              text: ""
            }, {
              default: ut(() => [
                DY
              ]),
              _: 1
            })
          ]),
          default: ut(() => [
            oe(Ke(Nn.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const BY = /* @__PURE__ */ Ve(RY, [["__scopeId", "data-v-44b4fabb"]]), PY = window.VueRouter.createRouter, FY = window.VueRouter.createWebHistory, UY = async () => {
  const e = Fi();
  e.userId || await e.getUserRole();
}, q0 = [
  {
    path: "/",
    name: _t.home,
    beforeEnter: async (e) => {
      const n = window.VRouter || G0;
      await Fi().getUserRole(), n.push({ name: _t.situations, params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: _t.situations,
    beforeEnter: () => UY(),
    component: R3
  },
  {
    path: "/situations/:id",
    name: _t.situationDetail,
    component: lH
  },
  {
    path: "/situations/add",
    name: _t.addSituation,
    component: PH
  },
  {
    path: "/error",
    name: _t.error,
    component: tz
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: _t.viewUnassignedAlarms,
    component: Cz
  },
  {
    path: "/settings",
    name: _t.settings,
    beforeEnter: async () => {
      await Fi().getEngineInfo();
    },
    component: BY
  }
], Wf = window.VRouter;
if (Wf) {
  const e = "Plugin-alecUiExtension", n = Wf.hasRoute(e) ? e : "Plugin";
  for (const r of q0) {
    const { path: s, name: a, component: u, beforeEnter: c } = r;
    Wf.addRoute(n, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const G0 = PY({
  history: FY(),
  routes: q0
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = XS;
