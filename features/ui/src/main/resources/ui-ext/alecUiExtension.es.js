var Yl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ZS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jl = { exports: {} }, fd, Gm;
function zg() {
  return Gm || (Gm = 1, fd = function(o, r) {
    return function() {
      return o.apply(r, arguments);
    };
  }), fd;
}
var hd, Ym;
function vt() {
  if (Ym) return hd;
  Ym = 1;
  var e = zg(), o = Object.prototype.toString, r = /* @__PURE__ */ (function(A) {
    return function(te) {
      var ue = o.call(te);
      return A[ue] || (A[ue] = ue.slice(8, -1).toLowerCase());
    };
  })(/* @__PURE__ */ Object.create(null));
  function s(A) {
    return A = A.toLowerCase(), function(ue) {
      return r(ue) === A;
    };
  }
  function a(A) {
    return Array.isArray(A);
  }
  function u(A) {
    return typeof A > "u";
  }
  function c(A) {
    return A !== null && !u(A) && A.constructor !== null && !u(A.constructor) && typeof A.constructor.isBuffer == "function" && A.constructor.isBuffer(A);
  }
  var f = s("ArrayBuffer");
  function v(A) {
    var te;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? te = ArrayBuffer.isView(A) : te = A && A.buffer && f(A.buffer), te;
  }
  function p(A) {
    return typeof A == "string";
  }
  function w(A) {
    return typeof A == "number";
  }
  function g(A) {
    return A !== null && typeof A == "object";
  }
  function y(A) {
    if (r(A) !== "object")
      return !1;
    var te = Object.getPrototypeOf(A);
    return te === null || te === Object.prototype;
  }
  function b(A) {
    if (!y(A))
      return !1;
    for (var te in A)
      if (Object.prototype.hasOwnProperty.call(A, te))
        return !1;
    return !0;
  }
  var C = s("Date"), T = s("File"), B = s("Blob"), k = s("FileList");
  function I(A) {
    return o.call(A) === "[object Function]";
  }
  function R(A) {
    return g(A) && I(A.pipe);
  }
  function D(A) {
    var te = "[object FormData]";
    if (!A) return !1;
    if (typeof FormData == "function" && A instanceof FormData) return !0;
    if (!g(A)) return !1;
    var ue = Object.getPrototypeOf(A);
    return !ue || ue === Object.prototype || !I(A.append) ? !1 : o.call(A) === te || I(A.toString) && A.toString() === te;
  }
  var q = s("URLSearchParams");
  function F(A) {
    return A.trim ? A.trim() : A.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }
  function O() {
    var A;
    return typeof navigator < "u" && ((A = navigator.product) === "ReactNative" || A === "NativeScript" || A === "NS") ? !1 : typeof window < "u" && typeof document < "u";
  }
  function j(A, te) {
    if (!(A === null || typeof A > "u"))
      if (typeof A != "object" && (A = [A]), a(A))
        for (var ue = 0, Ke = A.length; ue < Ke; ue++)
          te.call(null, A[ue], ue, A);
      else
        for (var Fe in A)
          Object.prototype.hasOwnProperty.call(A, Fe) && te.call(null, A[Fe], Fe, A);
  }
  function Y() {
    var A = /* @__PURE__ */ Object.create(null);
    function te(Fe, Pe) {
      var wt;
      Pe === "__proto__" || Pe === "constructor" || Pe === "prototype" || (wt = Object.prototype.hasOwnProperty.call(A, Pe) ? A[Pe] : void 0, y(wt) && y(Fe) ? A[Pe] = Y(wt, Fe) : y(Fe) ? A[Pe] = Y({}, Fe) : a(Fe) ? A[Pe] = Fe.slice() : A[Pe] = Fe);
    }
    for (var ue = 0, Ke = arguments.length; ue < Ke; ue++)
      j(arguments[ue], te);
    return A;
  }
  function X(A, te, ue) {
    return j(te, function(Fe, Pe) {
      ue && typeof Fe == "function" ? A[Pe] = e(Fe, ue) : A[Pe] = Fe;
    }), A;
  }
  function re(A) {
    return A.charCodeAt(0) === 65279 && (A = A.slice(1)), A;
  }
  function he(A, te, ue, Ke) {
    A.prototype = Object.create(
      te.prototype,
      Ke
    ), A.prototype.constructor = A, ue && Object.assign(A.prototype, ue);
  }
  function Ce(A, te, ue, Ke) {
    var Fe, Pe, wt, sn = {};
    if (te = te || {}, A == null) return te;
    do {
      for (Fe = Object.getOwnPropertyNames(A), Pe = Fe.length; Pe-- > 0; )
        wt = Fe[Pe], (!Ke || Ke(wt, A, te)) && !sn[wt] && (te[wt] = A[wt], sn[wt] = !0);
      A = ue !== !1 && Object.getPrototypeOf(A);
    } while (A && (!ue || ue(A, te)) && A !== Object.prototype);
    return te;
  }
  function we(A, te, ue) {
    A = String(A), (ue === void 0 || ue > A.length) && (ue = A.length), ue -= te.length;
    var Ke = A.indexOf(te, ue);
    return Ke !== -1 && Ke === ue;
  }
  function $e(A) {
    if (!A) return null;
    if (a(A)) return A;
    var te = A.length;
    if (!w(te)) return null;
    for (var ue = new Array(te); te-- > 0; )
      ue[te] = A[te];
    return ue;
  }
  var Je = /* @__PURE__ */ (function(A) {
    return function(te) {
      return A && te instanceof A;
    };
  })(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array));
  function zt(A, te) {
    for (var ue = A && A[Symbol.iterator], Ke = ue.call(A), Fe; (Fe = Ke.next()) && !Fe.done; ) {
      var Pe = Fe.value;
      te.call(A, Pe[0], Pe[1]);
    }
  }
  function Qe(A, te) {
    for (var ue, Ke = []; (ue = A.exec(te)) !== null; )
      Ke.push(ue);
    return Ke;
  }
  var Vt = s("HTMLFormElement"), Go = /* @__PURE__ */ (function(te) {
    return function(ue, Ke) {
      return te.call(ue, Ke);
    };
  })(Object.prototype.hasOwnProperty);
  return hd = {
    isArray: a,
    isArrayBuffer: f,
    isBuffer: c,
    isFormData: D,
    isArrayBufferView: v,
    isString: p,
    isNumber: w,
    isObject: g,
    isPlainObject: y,
    isEmptyObject: b,
    isUndefined: u,
    isDate: C,
    isFile: T,
    isBlob: B,
    isFunction: I,
    isStream: R,
    isURLSearchParams: q,
    isStandardBrowserEnv: O,
    forEach: j,
    merge: Y,
    extend: X,
    trim: F,
    stripBOM: re,
    inherits: he,
    toFlatObject: Ce,
    kindOf: r,
    kindOfTest: s,
    endsWith: we,
    toArray: $e,
    isTypedArray: Je,
    isFileList: k,
    forEachEntry: zt,
    matchAll: Qe,
    isHTMLForm: Vt,
    hasOwnProperty: Go
  }, hd;
}
var pd, jm;
function Gg() {
  return jm || (jm = 1, pd = ["authorization", "proxy-authorization", "cookie", "set-cookie", "x-api-key", "password"]), pd;
}
var md, Km;
function Oi() {
  if (Km) return md;
  Km = 1;
  var e = vt(), o = Gg(), r = "[REDACTED ****]";
  function s(y) {
    var b = /* @__PURE__ */ Object.create(null);
    return b.value = y, b;
  }
  function a(y) {
    var b = y && e.isArray(y.redact) && y.redact.length ? y.redact : null, C = b || o, T = {};
    return e.forEach(C, function(k) {
      typeof k == "string" && (T[k.toLowerCase()] = !0);
    }), T;
  }
  function u(y, b) {
    return typeof y == "string" && b[y.toLowerCase()];
  }
  var c = "[Circular]";
  function f(y, b, C, T) {
    var B;
    return u(C, b) ? r : e.isArray(y) ? T.indexOf(y) !== -1 ? c : (T.push(y), B = [], e.forEach(y, function(I, R) {
      B[R] = f(I, b, R, T);
    }), T.pop(), B) : e.isPlainObject(y) ? T.indexOf(y) !== -1 ? c : (T.push(y), B = {}, e.forEach(y, function(I, R) {
      B[R] = f(I, b, R, T);
    }), T.pop(), B) : y;
  }
  function v(y) {
    return y && f(y, a(y), void 0, []);
  }
  function p(y, b, C, T, B) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = y, this.name = "AxiosError", b && (this.code = b), C && (this.config = C), T && (this.request = T), B && (this.response = B);
  }
  e.inherits(p, Error, {
    toJSON: function() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: v(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var w = p.prototype, g = /* @__PURE__ */ Object.create(null);
  return [
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
    // eslint-disable-next-line func-names
  ].forEach(function(y) {
    g[y] = s(y);
  }), Object.defineProperties(p, g), Object.defineProperty(w, "isAxiosError", s(!0)), p.from = function(y, b, C, T, B, k) {
    var I = Object.create(w);
    return e.toFlatObject(y, I, function(D) {
      return D !== Error.prototype;
    }), p.call(I, y.message, b, C, T, B), I.cause = y, I.name = y.name, k && Object.assign(I, k), I;
  }, md = p, md;
}
var vd, Zm;
function XS() {
  return Zm || (Zm = 1, vd = typeof self == "object" ? self.FormData : window.FormData), vd;
}
var wd, Xm;
function JS() {
  return Xm || (Xm = 1, wd = XS()), wd;
}
var _d, Jm;
function Pu() {
  if (Jm) return _d;
  Jm = 1;
  var e = vt(), o = Oi(), r = JS();
  function s(w) {
    return e.isPlainObject(w) || e.isArray(w);
  }
  function a(w) {
    return e.endsWith(w, "[]") ? w.slice(0, -2) : w;
  }
  function u(w, g, y) {
    return w ? w.concat(g).map(function(C, T) {
      return C = a(C), !y && T ? "[" + C + "]" : C;
    }).join(y ? "." : "") : g;
  }
  function c(w) {
    return e.isArray(w) && !w.some(s);
  }
  var f = e.toFlatObject(e, {}, null, function(g) {
    return /^is[A-Z]/.test(g);
  });
  function v(w) {
    return w && e.isFunction(w.append) && w[Symbol.toStringTag] === "FormData" && w[Symbol.iterator];
  }
  function p(w, g, y) {
    if (!e.isObject(w))
      throw new TypeError("target must be an object");
    g = g || new (r || FormData)(), y = e.toFlatObject(y, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    }, !1, function(X, re) {
      return !e.isUndefined(re[X]);
    });
    var b = y.metaTokens, C = y.visitor || q, T = y.dots, B = y.indexes, k = y.Blob || typeof Blob < "u" && Blob, I = y.maxDepth === void 0 ? 100 : y.maxDepth, R = k && v(g);
    if (!e.isFunction(C))
      throw new TypeError("visitor must be a function");
    function D(Y) {
      if (Y === null) return "";
      if (e.isDate(Y))
        return Y.toISOString();
      if (!R && e.isBlob(Y))
        throw new o("Blob is not supported. Use a Buffer instead.");
      return e.isArrayBuffer(Y) || e.isTypedArray(Y) ? R && typeof Blob == "function" ? new Blob([Y]) : Buffer.from(Y) : Y;
    }
    function q(Y, X, re) {
      var he = Y;
      if (Y && !re && typeof Y == "object") {
        if (e.endsWith(X, "{}"))
          X = b ? X : X.slice(0, -2), Y = JSON.stringify(Y);
        else if (e.isArray(Y) && c(Y) || e.isFileList(Y) || e.endsWith(X, "[]") && (he = e.toArray(Y)))
          return X = a(X), he.forEach(function(we, $e) {
            !(e.isUndefined(we) || we === null) && g.append(
              // eslint-disable-next-line no-nested-ternary
              B === !0 ? u([X], $e, T) : B === null ? X : X + "[]",
              D(we)
            );
          }), !1;
      }
      return s(Y) ? !0 : (g.append(u(re, X, T), D(Y)), !1);
    }
    var F = [], O = Object.assign(f, {
      defaultVisitor: q,
      convertValue: D,
      isVisitable: s
    });
    function j(Y, X, re) {
      if (!e.isUndefined(Y)) {
        if (re = re || 0, re > I)
          throw new o(
            "Maximum object depth of " + I + " exceeded (got " + re + " levels)",
            o.ERR_FORM_DATA_DEPTH_EXCEEDED
          );
        if (F.indexOf(Y) !== -1)
          throw Error("Circular reference detected in " + X.join("."));
        F.push(Y), e.forEach(Y, function(Ce, we) {
          var $e = !(e.isUndefined(Ce) || Ce === null) && C.call(
            g,
            Ce,
            e.isString(we) ? we.trim() : we,
            X,
            O
          );
          $e === !0 && j(Ce, X ? X.concat(we) : [we], re + 1);
        }), F.pop();
      }
    }
    if (!e.isObject(w))
      throw new TypeError("data must be an object");
    return j(w, null, 0), g;
  }
  return _d = p, _d;
}
var gd, Qm;
function Yg() {
  if (Qm) return gd;
  Qm = 1;
  var e = Pu();
  function o(a) {
    var u = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+"
    };
    return encodeURIComponent(a).replace(
      /[!'\(\)~]|%20/g,
      function(f) {
        return u[f];
      }
    );
  }
  function r(a, u) {
    this._pairs = [], a && e(a, this, u);
  }
  var s = r.prototype;
  return s.append = function(u, c) {
    this._pairs.push([u, c]);
  }, s.toString = function(u) {
    var c = u ? function(f) {
      return u.call(this, f, o);
    } : o;
    return this._pairs.map(function(v) {
      return c(v[0]) + "=" + c(v[1]);
    }, "").join("&");
  }, gd = r, gd;
}
var $d, ev;
function jg() {
  if (ev) return $d;
  ev = 1;
  var e = vt(), o = Yg();
  function r(s) {
    return encodeURIComponent(s).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  return $d = function(a, u, c) {
    if (!u)
      return a;
    var f = a.indexOf("#");
    f !== -1 && (a = a.slice(0, f));
    var v = c && c.encode || r, p = c && c.serialize, w;
    return p ? w = p(u, c) : w = e.isURLSearchParams(u) ? u.toString() : new o(u, c).toString(v), w && (a += (a.indexOf("?") === -1 ? "?" : "&") + w), a;
  }, $d;
}
var yd, tv;
function QS() {
  if (tv) return yd;
  tv = 1;
  var e = vt();
  function o() {
    this.handlers = [];
  }
  return o.prototype.use = function(s, a, u) {
    return this.handlers.push({
      fulfilled: s,
      rejected: a,
      synchronous: u ? u.synchronous : !1,
      runWhen: u ? u.runWhen : null
    }), this.handlers.length - 1;
  }, o.prototype.eject = function(s) {
    this.handlers[s] && (this.handlers[s] = null);
  }, o.prototype.clear = function() {
    this.handlers && (this.handlers = []);
  }, o.prototype.forEach = function(s) {
    e.forEach(this.handlers, function(u) {
      u !== null && s(u);
    });
  }, yd = o, yd;
}
var bd, nv;
function Kg() {
  if (nv) return bd;
  nv = 1;
  var e = vt();
  return bd = function(r, s) {
    e.forEach(r, function(u, c) {
      c !== s && c.toUpperCase() === s.toUpperCase() && (r[s] = u, delete r[c]);
    });
  }, bd;
}
var Vd, rv;
function Zg() {
  return rv || (rv = 1, Vd = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  }), Vd;
}
var Cd, ov;
function ek() {
  if (ov) return Cd;
  ov = 1;
  var e = Yg();
  return Cd = typeof URLSearchParams < "u" ? URLSearchParams : e, Cd;
}
var Ed, iv;
function tk() {
  return iv || (iv = 1, Ed = FormData), Ed;
}
var Sd, sv;
function nk() {
  return sv || (sv = 1, Sd = {
    isBrowser: !0,
    classes: {
      URLSearchParams: ek(),
      FormData: tk(),
      Blob
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  }), Sd;
}
var kd, av;
function hh() {
  return av || (av = 1, kd = nk()), kd;
}
var Td, lv;
function rk() {
  if (lv) return Td;
  lv = 1;
  var e = vt(), o = Pu(), r = hh();
  return Td = function(a, u) {
    return o(a, new r.classes.URLSearchParams(), Object.assign({
      visitor: function(c, f, v, p) {
        return r.isNode && e.isBuffer(c) ? (this.append(f, c.toString("base64")), !1) : p.defaultVisitor.apply(this, arguments);
      }
    }, u));
  }, Td;
}
var Id, uv;
function Xg() {
  if (uv) return Id;
  uv = 1;
  var e = vt();
  function o(a) {
    return e.matchAll(/\w+|\[(\w*)]/g, a).map(function(u) {
      return u[0] === "[]" ? "" : u[1] || u[0];
    });
  }
  function r(a) {
    var u = {}, c = Object.keys(a), f, v = c.length, p;
    for (f = 0; f < v; f++)
      p = c[f], u[p] = a[p];
    return u;
  }
  function s(a) {
    function u(f, v, p, w) {
      var g = f[w++];
      if (g === "__proto__") return !0;
      var y = Number.isFinite(+g), b = w >= f.length;
      if (g = !g && e.isArray(p) ? p.length : g, b)
        return e.hasOwnProperty(p, g) ? p[g] = [p[g], v] : p[g] = v, !y;
      (!p[g] || !e.isObject(p[g])) && (p[g] = []);
      var C = u(f, v, p[g], w);
      return C && e.isArray(p[g]) && (p[g] = r(p[g])), !y;
    }
    if (e.isFormData(a) && e.isFunction(a.entries)) {
      var c = {};
      return e.forEachEntry(a, function(f, v) {
        u(o(f), v, c, 0);
      }), c;
    }
    return null;
  }
  return Id = s, Id;
}
var Ad, cv;
function ok() {
  if (cv) return Ad;
  cv = 1;
  var e = Oi();
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
var xd, dv;
function ik() {
  if (dv) return xd;
  dv = 1;
  var e = vt();
  return xd = e.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    /* @__PURE__ */ (function() {
      return {
        write: function(s, a, u, c, f, v) {
          var p = [];
          p.push(s + "=" + encodeURIComponent(a)), e.isNumber(u) && p.push("expires=" + new Date(u).toGMTString()), e.isString(c) && p.push("path=" + c), e.isString(f) && p.push("domain=" + f), v === !0 && p.push("secure"), document.cookie = p.join("; ");
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
    })()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    /* @__PURE__ */ (function() {
      return {
        write: function() {
        },
        read: function() {
          return null;
        },
        remove: function() {
        }
      };
    })()
  ), xd;
}
var Ld, fv;
function sk() {
  return fv || (fv = 1, Ld = function(o) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
  }), Ld;
}
var Od, hv;
function ak() {
  return hv || (hv = 1, Od = function(o, r) {
    return r ? o.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : o;
  }), Od;
}
var Rd, pv;
function Jg() {
  if (pv) return Rd;
  pv = 1;
  var e = sk(), o = ak();
  return Rd = function(s, a, u) {
    var c = !e(a);
    return s && (c || u === !1) ? o(s, a) : a;
  }, Rd;
}
var Nd, mv;
function lk() {
  if (mv) return Nd;
  mv = 1;
  var e = vt(), o = [
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
  return Nd = function(s) {
    var a = {}, u, c, f;
    return s && e.forEach(s.split(`
`), function(p) {
      if (f = p.indexOf(":"), u = e.trim(p.slice(0, f)).toLowerCase(), c = e.trim(p.slice(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, Nd;
}
var Bd, vv;
function uk() {
  if (vv) return Bd;
  vv = 1;
  var e = vt();
  return Bd = e.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    (function() {
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
        var v = e.isString(f) ? u(f) : f;
        return v.protocol === a.protocol && v.host === a.host;
      };
    })()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    /* @__PURE__ */ (function() {
      return function() {
        return !0;
      };
    })()
  ), Bd;
}
var Pd, wv;
function Du() {
  if (wv) return Pd;
  wv = 1;
  var e = Oi(), o = vt();
  function r(s, a, u) {
    e.call(this, s ?? "canceled", e.ERR_CANCELED, a, u), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), Pd = r, Pd;
}
var Dd, _v;
function ck() {
  return _v || (_v = 1, Dd = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Dd;
}
var Md, gv;
function $v() {
  if (gv) return Md;
  gv = 1;
  var e = vt(), o = ok(), r = ik(), s = jg(), a = Jg(), u = lk(), c = uk(), f = Zg(), v = Oi(), p = Du(), w = ck(), g = hh();
  return Md = function(b) {
    return new Promise(function(T, B) {
      var k = b.data, I = b.headers, R = b.responseType, D = e.hasOwnProperty(b, "withXSRFToken") ? b.withXSRFToken : void 0, q;
      function F() {
        b.cancelToken && b.cancelToken.unsubscribe(q), b.signal && b.signal.removeEventListener("abort", q);
      }
      e.isFormData(k) && e.isStandardBrowserEnv() && delete I["Content-Type"];
      var O = new XMLHttpRequest();
      if (b.auth) {
        var j = b.auth.username || "", Y = b.auth.password ? unescape(encodeURIComponent(b.auth.password)) : "";
        I.Authorization = "Basic " + btoa(j + ":" + Y);
      }
      var X = a(
        b.baseURL,
        b.url,
        b.allowAbsoluteUrls
      );
      O.open(
        b.method.toUpperCase(),
        s(X, b.params, b.paramsSerializer),
        !0
      ), O.timeout = b.timeout;
      function re() {
        if (O) {
          var we = "getAllResponseHeaders" in O ? u(O.getAllResponseHeaders()) : null, $e = !R || R === "text" || R === "json" ? O.responseText : O.response, Je = {
            data: $e,
            status: O.status,
            statusText: O.statusText,
            headers: we,
            config: b,
            request: O
          };
          o(
            function(Qe) {
              T(Qe), F();
            },
            function(Qe) {
              B(Qe), F();
            },
            Je
          ), O = null;
        }
      }
      if ("onloadend" in O ? O.onloadend = re : O.onreadystatechange = function() {
        !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(re);
      }, O.onabort = function() {
        O && (B(
          new v(
            "Request aborted",
            v.ECONNABORTED,
            b,
            O
          )
        ), O = null);
      }, O.onerror = function() {
        B(
          new v(
            "Network Error",
            v.ERR_NETWORK,
            b,
            O
          )
        ), O = null;
      }, O.ontimeout = function() {
        var $e = b.timeout ? "timeout of " + b.timeout + "ms exceeded" : "timeout exceeded", Je = b.transitional || f;
        b.timeoutErrorMessage && ($e = b.timeoutErrorMessage), B(
          new v(
            $e,
            Je.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED,
            b,
            O
          )
        ), O = null;
      }, e.isStandardBrowserEnv() && (e.isFunction(D) && (D = D(b)), D === !0 || D !== !1 && c(X))) {
        var he = b.xsrfHeaderName && b.xsrfCookieName && r.read(b.xsrfCookieName);
        he && (I[b.xsrfHeaderName] = he);
      }
      "setRequestHeader" in O && e.forEach(I, function($e, Je) {
        typeof k > "u" && Je.toLowerCase() === "content-type" ? delete I[Je] : O.setRequestHeader(Je, $e);
      }), e.isUndefined(b.withCredentials) || (O.withCredentials = !!b.withCredentials), R && R !== "json" && (O.responseType = b.responseType), typeof b.onDownloadProgress == "function" && O.addEventListener("progress", b.onDownloadProgress), typeof b.onUploadProgress == "function" && O.upload && O.upload.addEventListener("progress", b.onUploadProgress), (b.cancelToken || b.signal) && (q = function(we) {
        O && (B(
          !we || we.type ? new p(null, b, O) : we
        ), O.abort(), O = null);
      }, b.cancelToken && b.cancelToken.subscribe(q), b.signal && (b.signal.aborted ? q() : b.signal.addEventListener("abort", q))), !k && k !== !1 && k !== 0 && k !== "" && (k = null);
      var Ce = w(X);
      if (Ce && g.protocols.indexOf(Ce) === -1) {
        B(
          new v(
            "Unsupported protocol " + Ce + ":",
            v.ERR_BAD_REQUEST,
            b
          )
        );
        return;
      }
      O.send(k);
    });
  }, Md;
}
var Fd, yv;
function ph() {
  if (yv) return Fd;
  yv = 1;
  var e = vt(), o = Kg(), r = Oi(), s = Zg(), a = Pu(), u = rk(), c = hh(), f = Xg(), v = Gg(), p = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  function w(C, T) {
    !e.isUndefined(C) && e.isUndefined(C["Content-Type"]) && (C["Content-Type"] = T);
  }
  function g() {
    var C;
    return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (C = $v()), C;
  }
  function y(C, T, B) {
    if (e.isString(C))
      try {
        return (T || JSON.parse)(C), e.trim(C);
      } catch (k) {
        if (k.name !== "SyntaxError")
          throw k;
      }
    return (B || JSON.stringify)(C);
  }
  var b = {
    transitional: s,
    adapter: g(),
    transformRequest: [function(T, B) {
      o(B, "Accept"), o(B, "Content-Type");
      var k = B && B["Content-Type"] || "", I = k.indexOf("application/json") > -1, R = e.isObject(T);
      R && e.isHTMLForm(T) && (T = new FormData(T));
      var D = e.isFormData(T);
      if (D)
        return I ? JSON.stringify(f(T)) : T;
      if (e.isArrayBuffer(T) || e.isBuffer(T) || e.isStream(T) || e.isFile(T) || e.isBlob(T))
        return T;
      if (e.isArrayBufferView(T))
        return T.buffer;
      if (e.isURLSearchParams(T))
        return w(B, "application/x-www-form-urlencoded;charset=utf-8"), T.toString();
      var q;
      if (R) {
        var F = e.hasOwnProperty(this, "formSerializer") ? this.formSerializer : void 0, O = e.hasOwnProperty(this, "env") ? this.env : void 0;
        if (k.indexOf("application/x-www-form-urlencoded") !== -1)
          return u(T, F).toString();
        if ((q = e.isFileList(T)) || k.indexOf("multipart/form-data") > -1) {
          var j = O && O.FormData;
          return a(
            q ? { "files[]": T } : T,
            j && new j(),
            F
          );
        }
      }
      return R || I ? (w(B, "application/json"), y(T)) : T;
    }],
    transformResponse: [function(T) {
      var B = this.transitional || b.transitional, k = B && B.forcedJSONParsing, I = this.responseType === "json";
      if (T && e.isString(T) && (k && !this.responseType || I)) {
        var R = B && B.silentJSONParsing, D = !R && I;
        try {
          return JSON.parse(T);
        } catch (q) {
          if (D)
            throw q.name === "SyntaxError" ? r.from(q, r.ERR_BAD_RESPONSE, this, null, this.response) : q;
        }
      }
      return T;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    redact: v.slice(),
    env: {
      FormData: c.classes.FormData,
      Blob: c.classes.Blob
    },
    validateStatus: function(T) {
      return T >= 200 && T < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*"
      }
    }
  };
  return e.forEach(["delete", "get", "head"], function(T) {
    b.headers[T] = {};
  }), e.forEach(["post", "put", "patch"], function(T) {
    b.headers[T] = e.merge(p);
  }), Fd = b, Fd;
}
var Ud, bv;
function dk() {
  if (bv) return Ud;
  bv = 1;
  var e = vt(), o = ph();
  return Ud = function(s, a, u, c) {
    var f = this || o;
    return e.forEach(c, function(p) {
      s = p.call(f, s, a, u);
    }), s;
  }, Ud;
}
var qd, Vv;
function Qg() {
  return Vv || (Vv = 1, qd = function(o) {
    return !!(o && o.__CANCEL__);
  }), qd;
}
var Hd, Cv;
function fk() {
  if (Cv) return Hd;
  Cv = 1;
  var e = vt(), o = /[^\x09\x20-\x7E\x80-\xFF]/g, r = /^[\x09\x20]+|[\x09\x20]+$/g;
  function s(a) {
    return a === !1 || a == null ? a : e.isArray(a) ? a.map(s) : String(a).replace(o, "").replace(r, "");
  }
  return Hd = s, Hd;
}
var Wd, Ev;
function hk() {
  if (Ev) return Wd;
  Ev = 1;
  var e = vt(), o = dk(), r = Qg(), s = ph(), a = Du(), u = Kg(), c = fk();
  function f(v) {
    if (v.cancelToken && v.cancelToken.throwIfRequested(), v.signal && v.signal.aborted)
      throw new a();
  }
  return Wd = function(p) {
    f(p), p.headers = p.headers || {}, p.data = o.call(
      p,
      p.data,
      p.headers,
      null,
      p.transformRequest
    ), u(p.headers, "Accept"), u(p.headers, "Content-Type");
    var w = e.hasOwnProperty(p.headers, "common") && p.headers.common ? p.headers.common : {}, g = p.method && e.hasOwnProperty(p.headers, p.method) && p.headers[p.method] ? p.headers[p.method] : {};
    p.headers = e.merge(w, g, p.headers), e.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function(C) {
        delete p.headers[C];
      }
    ), e.forEach(p.headers, function(C, T) {
      p.headers[T] = c(C);
    });
    var y = p.adapter || s.adapter;
    return y(p).then(function(C) {
      return f(p), C.data = o.call(
        p,
        C.data,
        C.headers,
        C.status,
        p.transformResponse
      ), C;
    }, function(C) {
      return r(C) || (f(p), C && C.response && (C.response.data = o.call(
        p,
        C.response.data,
        C.response.headers,
        C.response.status,
        p.transformResponse
      ))), Promise.reject(C);
    });
  }, Wd;
}
var zd, Sv;
function e1() {
  if (Sv) return zd;
  Sv = 1;
  var e = vt();
  return zd = function(r, s) {
    s = s || {};
    var a = /* @__PURE__ */ Object.create(null);
    function u(b, C) {
      return e.hasOwnProperty(b, C) ? b[C] : void 0;
    }
    function c(b, C) {
      return e.hasOwnProperty(b, C);
    }
    function f(b, C) {
      return e.isPlainObject(b) && e.isPlainObject(C) ? e.merge(b, C) : e.isEmptyObject(C) ? e.merge({}, b) : e.isPlainObject(C) ? e.merge({}, C) : e.isArray(C) ? C.slice() : C;
    }
    function v(b) {
      if (c(s, b) && !e.isUndefined(s[b]))
        return f(u(r, b), s[b]);
      if (c(r, b) && !e.isUndefined(r[b]))
        return f(void 0, r[b]);
    }
    function p(b) {
      if (c(s, b) && !e.isUndefined(s[b]))
        return f(void 0, s[b]);
    }
    function w(b) {
      if (c(s, b) && !e.isUndefined(s[b]))
        return f(void 0, s[b]);
      if (c(r, b) && !e.isUndefined(r[b]))
        return f(void 0, r[b]);
    }
    function g(b) {
      if (c(s, b))
        return f(u(r, b), s[b]);
      if (c(r, b))
        return f(void 0, r[b]);
    }
    var y = {
      url: p,
      method: p,
      data: p,
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
    return e.forEach(Object.keys(r).concat(Object.keys(s)), function(C) {
      if (!(C === "__proto__" || C === "constructor" || C === "prototype")) {
        var T = e.hasOwnProperty(y, C) ? y[C] : v, B = T(C);
        e.isUndefined(B) && T !== g || (a[C] = B);
      }
    }), a;
  }, zd;
}
var Gd, kv;
function t1() {
  return kv || (kv = 1, Gd = {
    version: "0.32.0"
  }), Gd;
}
var Yd, Tv;
function pk() {
  if (Tv) return Yd;
  Tv = 1;
  var e = t1().version, o = Oi(), r = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(u, c) {
    r[u] = function(v) {
      return typeof v === u || "a" + (c < 1 ? "n " : " ") + u;
    };
  });
  var s = {};
  r.transitional = function(c, f, v) {
    function p(w, g) {
      return "[Axios v" + e + "] Transitional option '" + w + "'" + g + (v ? ". " + v : "");
    }
    return function(w, g, y) {
      if (c === !1)
        throw new o(
          p(g, " has been removed" + (f ? " in " + f : "")),
          o.ERR_DEPRECATED
        );
      return f && !s[g] && (s[g] = !0, console.warn(
        p(
          g,
          " has been deprecated since v" + f + " and will be removed in the near future"
        )
      )), c ? c(w, g, y) : !0;
    };
  };
  function a(u, c, f) {
    if (typeof u != "object")
      throw new o("options must be an object", o.ERR_BAD_OPTION_VALUE);
    for (var v = Object.keys(u), p = v.length; p-- > 0; ) {
      var w = v[p], g = c[w];
      if (g) {
        var y = u[w], b = y === void 0 || g(y, w, u);
        if (b !== !0)
          throw new o("option " + w + " must be " + b, o.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (f !== !0)
        throw new o("Unknown option " + w, o.ERR_BAD_OPTION);
    }
  }
  return Yd = {
    assertOptions: a,
    validators: r
  }, Yd;
}
var jd, Iv;
function mk() {
  if (Iv) return jd;
  Iv = 1;
  var e = vt(), o = jg(), r = QS(), s = hk(), a = e1(), u = Jg(), c = pk(), f = c.validators;
  function v(p) {
    this.defaults = p, this.interceptors = {
      request: new r(),
      response: new r()
    };
  }
  return v.prototype.request = function(w, g) {
    typeof w == "string" ? (g = g || {}, g.url = w) : g = w || {}, g = a(this.defaults, g), g.method ? g.method = g.method.toLowerCase() : this.defaults.method ? g.method = this.defaults.method.toLowerCase() : g.method = "get";
    var y = g.transitional;
    y !== void 0 && c.assertOptions(y, {
      silentJSONParsing: f.transitional(f.boolean),
      forcedJSONParsing: f.transitional(f.boolean),
      clarifyTimeoutError: f.transitional(f.boolean)
    }, !1);
    var b = g.paramsSerializer;
    b != null && (e.isFunction(b) ? g.paramsSerializer = {
      serialize: b
    } : c.assertOptions(b, {
      encode: f.function,
      serialize: f.function
    }, !0));
    var C = [], T = !0;
    this.interceptors.request.forEach(function(O) {
      typeof O.runWhen == "function" && O.runWhen(g) === !1 || (T = T && O.synchronous, C.unshift(O.fulfilled, O.rejected));
    });
    var B = [];
    this.interceptors.response.forEach(function(O) {
      B.push(O.fulfilled, O.rejected);
    });
    var k;
    if (!T) {
      var I = [s, void 0];
      for (Array.prototype.unshift.apply(I, C), I = I.concat(B), k = Promise.resolve(g); I.length; )
        k = k.then(I.shift(), I.shift());
      return k;
    }
    for (var R = g; C.length; ) {
      var D = C.shift(), q = C.shift();
      try {
        R = D(R);
      } catch (F) {
        q(F);
        break;
      }
    }
    try {
      k = s(R);
    } catch (F) {
      return Promise.reject(F);
    }
    for (; B.length; )
      k = k.then(B.shift(), B.shift());
    return k;
  }, v.prototype.getUri = function(w) {
    w = a(this.defaults, w);
    var g = u(w.baseURL, w.url, w.allowAbsoluteUrls);
    return o(g, w.params, w.paramsSerializer);
  }, e.forEach(["delete", "get", "head", "options"], function(w) {
    v.prototype[w] = function(g, y) {
      return this.request(a(y || {}, {
        method: w,
        url: g,
        data: (y || {}).data
      }));
    };
  }), e.forEach(["post", "put", "patch"], function(w) {
    function g(y) {
      return function(C, T, B) {
        return this.request(a(B || {}, {
          method: w,
          headers: y ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: C,
          data: T
        }));
      };
    }
    v.prototype[w] = g(), v.prototype[w + "Form"] = g(!0);
  }), jd = v, jd;
}
var Kd, Av;
function vk() {
  if (Av) return Kd;
  Av = 1;
  var e = Du();
  function o(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var s;
    this.promise = new Promise(function(c) {
      s = c;
    });
    var a = this;
    this.promise.then(function(u) {
      if (a._listeners) {
        for (var c = a._listeners.length; c-- > 0; )
          a._listeners[c](u);
        a._listeners = null;
      }
    }), this.promise.then = function(u) {
      var c, f = new Promise(function(v) {
        a.subscribe(v), c = v;
      }).then(u);
      return f.cancel = function() {
        a.unsubscribe(c);
      }, f;
    }, r(function(c, f, v) {
      a.reason || (a.reason = new e(c, f, v), s(a.reason));
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
    if (this._listeners) {
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
  }, Kd = o, Kd;
}
var Zd, xv;
function wk() {
  return xv || (xv = 1, Zd = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), Zd;
}
var Xd, Lv;
function _k() {
  if (Lv) return Xd;
  Lv = 1;
  var e = vt();
  return Xd = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Xd;
}
var Ov;
function gk() {
  if (Ov) return jl.exports;
  Ov = 1;
  var e = vt(), o = zg(), r = mk(), s = e1(), a = ph(), u = Xg();
  function c(v) {
    var p = new r(v), w = o(r.prototype.request, p);
    return e.extend(w, r.prototype, p), e.extend(w, p), w.create = function(y) {
      return c(s(v, y));
    }, w;
  }
  var f = c(a);
  return f.Axios = r, f.CanceledError = Du(), f.CancelToken = vk(), f.isCancel = Qg(), f.VERSION = t1().version, f.toFormData = Pu(), f.AxiosError = Oi(), f.Cancel = f.CanceledError, f.all = function(p) {
    return Promise.all(p);
  }, f.spread = wk(), f.isAxiosError = _k(), f.formToJSON = function(v) {
    return u(e.isHTMLForm(v) ? new FormData(v) : v);
  }, jl.exports = f, jl.exports.default = f, jl.exports;
}
var Jd, Rv;
function $k() {
  return Rv || (Rv = 1, Jd = gk()), Jd;
}
var yk = $k();
const n1 = /* @__PURE__ */ ZS(yk), ro = n1.create({
  baseURL: "/opennms/api/v2",
  withCredentials: !0
}), Tt = n1.create({
  baseURL: "/opennms/rest",
  withCredentials: !0
}), bk = "/whoami", Vk = async () => {
  try {
    const e = await Tt.get(bk);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, kt = {
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
var Pa = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var Ck = Pa.exports, Nv;
function Ek() {
  return Nv || (Nv = 1, (function(e, o) {
    (function() {
      var r, s = "4.18.1", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", v = "Invalid `imports` option passed into `_.template`", p = "__lodash_hash_undefined__", w = 500, g = "__lodash_placeholder__", y = 1, b = 2, C = 4, T = 1, B = 2, k = 1, I = 2, R = 4, D = 8, q = 16, F = 32, O = 64, j = 128, Y = 256, X = 512, re = 30, he = "...", Ce = 800, we = 16, $e = 1, Je = 2, zt = 3, Qe = 1 / 0, Vt = 9007199254740991, Go = 17976931348623157e292, A = NaN, te = 4294967295, ue = te - 1, Ke = te >>> 1, Fe = [
        ["ary", j],
        ["bind", k],
        ["bindKey", I],
        ["curry", D],
        ["curryRight", q],
        ["flip", X],
        ["partial", F],
        ["partialRight", O],
        ["rearg", Y]
      ], Pe = "[object Arguments]", wt = "[object Array]", sn = "[object AsyncFunction]", an = "[object Boolean]", nr = "[object Date]", Ge = "[object DOMException]", Or = "[object Error]", Ue = "[object Function]", oo = "[object GeneratorFunction]", pe = "[object Map]", ft = "[object Number]", Gt = "[object Null]", nt = "[object Object]", Dn = "[object Promise]", io = "[object Proxy]", vr = "[object RegExp]", Dt = "[object Set]", It = "[object String]", Mn = "[object Symbol]", ln = "[object Undefined]", un = "[object WeakMap]", wr = "[object WeakSet]", cn = "[object ArrayBuffer]", Yt = "[object DataView]", yn = "[object Float32Array]", rr = "[object Float64Array]", bn = "[object Int8Array]", so = "[object Int16Array]", Vn = "[object Int32Array]", ao = "[object Uint8Array]", Rr = "[object Uint8ClampedArray]", Nr = "[object Uint16Array]", Fn = "[object Uint32Array]", jt = /\b__p \+= '';/g, lo = /\b(__p \+=) '' \+/g, Yo = /(__e\(.*?\)|\b__t\)) \+\n'';/g, uo = /&(?:amp|lt|gt|quot|#39);/g, Br = /[&<>"']/g, jo = RegExp(uo.source), Pr = RegExp(Br.source), Dr = /<%-([\s\S]+?)%>/g, Kt = /<%([\s\S]+?)%>/g, Un = /<%=([\s\S]+?)%>/g, co = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fo = /^\w*$/, Ni = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Mr = /[\\^$.*+?()[\]{}|]/g, ho = RegExp(Mr.source), Fr = /^\s+/, po = /\s/, Bi = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, _r = /\{\n\/\* \[wrapped with (.+)\] \*/, se = /,? & /, K = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, J = /[()=,{}\[\]\/\s]/, Ae = /\\(\\)?/g, Ur = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, mo = /\w*$/, vo = /^[-+]0x[0-9a-f]+$/i, Ko = /^0b[01]+$/i, Zo = /^\[object .+?Constructor\]$/, Pi = /^0o[0-7]+$/i, Di = /^(?:0|[1-9]\d*)$/, Mi = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, qr = /($^)/, Cn = /['\n\r\u2028\u2029\\]/g, gr = "\\ud800-\\udfff", qn = "\\u0300-\\u036f", Fi = "\\ufe20-\\ufe2f", rc = "\\u20d0-\\u20ff", Gs = qn + Fi + rc, Ys = "\\u2700-\\u27bf", Xo = "a-z\\xdf-\\xf6\\xf8-\\xff", js = "\\xac\\xb1\\xd7\\xf7", Ui = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", wo = "\\u2000-\\u206f", Jo = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Hn = "A-Z\\xc0-\\xd6\\xd8-\\xde", ol = "\\ufe0e\\ufe0f", il = js + Ui + wo + Jo, qi = "['’]", sl = "[" + gr + "]", al = "[" + il + "]", Qo = "[" + Gs + "]", ll = "\\d+", oc = "[" + Ys + "]", Ks = "[" + Xo + "]", ei = "[^" + gr + il + ll + Ys + Xo + Hn + "]", ti = "\\ud83c[\\udffb-\\udfff]", G = "(?:" + Qo + "|" + ti + ")", _ = "[^" + gr + "]", x = "(?:\\ud83c[\\udde6-\\uddff]){2}", z = "[\\ud800-\\udbff][\\udc00-\\udfff]", Q = "[" + Hn + "]", ve = "\\u200d", Se = "(?:" + Ks + "|" + ei + ")", ht = "(?:" + Q + "|" + ei + ")", rt = "(?:" + qi + "(?:d|ll|m|re|s|t|ve))?", Zt = "(?:" + qi + "(?:D|LL|M|RE|S|T|VE))?", dn = G + "?", Hi = "[" + ol + "]?", At = "(?:" + ve + "(?:" + [_, x, z].join("|") + ")" + Hi + dn + ")*", n$ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", r$ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ph = Hi + dn + At, o$ = "(?:" + [oc, x, z].join("|") + ")" + Ph, i$ = "(?:" + [_ + Qo + "?", Qo, x, z, sl].join("|") + ")", s$ = RegExp(qi, "g"), a$ = RegExp(Qo, "g"), ic = RegExp(ti + "(?=" + ti + ")|" + i$ + Ph, "g"), l$ = RegExp([
        Q + "?" + Ks + "+" + rt + "(?=" + [al, Q, "$"].join("|") + ")",
        ht + "+" + Zt + "(?=" + [al, Q + Se, "$"].join("|") + ")",
        Q + "?" + Se + "+" + rt,
        Q + "+" + Zt,
        r$,
        n$,
        ll,
        o$
      ].join("|"), "g"), u$ = RegExp("[" + ve + gr + Gs + ol + "]"), c$ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, d$ = [
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
      ], f$ = -1, Ze = {};
      Ze[yn] = Ze[rr] = Ze[bn] = Ze[so] = Ze[Vn] = Ze[ao] = Ze[Rr] = Ze[Nr] = Ze[Fn] = !0, Ze[Pe] = Ze[wt] = Ze[cn] = Ze[an] = Ze[Yt] = Ze[nr] = Ze[Or] = Ze[Ue] = Ze[pe] = Ze[ft] = Ze[nt] = Ze[vr] = Ze[Dt] = Ze[It] = Ze[un] = !1;
      var Ye = {};
      Ye[Pe] = Ye[wt] = Ye[cn] = Ye[Yt] = Ye[an] = Ye[nr] = Ye[yn] = Ye[rr] = Ye[bn] = Ye[so] = Ye[Vn] = Ye[pe] = Ye[ft] = Ye[nt] = Ye[vr] = Ye[Dt] = Ye[It] = Ye[Mn] = Ye[ao] = Ye[Rr] = Ye[Nr] = Ye[Fn] = !0, Ye[Or] = Ye[Ue] = Ye[un] = !1;
      var h$ = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, p$ = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, m$ = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, v$ = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, w$ = parseFloat, _$ = parseInt, Dh = typeof Yl == "object" && Yl && Yl.Object === Object && Yl, g$ = typeof self == "object" && self && self.Object === Object && self, xt = Dh || g$ || Function("return this")(), sc = o && !o.nodeType && o, ni = sc && !0 && e && !e.nodeType && e, Mh = ni && ni.exports === sc, ac = Mh && Dh.process, Wn = (function() {
        try {
          var E = ni && ni.require && ni.require("util").types;
          return E || ac && ac.binding && ac.binding("util");
        } catch {
        }
      })(), Fh = Wn && Wn.isArrayBuffer, Uh = Wn && Wn.isDate, qh = Wn && Wn.isMap, Hh = Wn && Wn.isRegExp, Wh = Wn && Wn.isSet, zh = Wn && Wn.isTypedArray;
      function En(E, P, N) {
        switch (N.length) {
          case 0:
            return E.call(P);
          case 1:
            return E.call(P, N[0]);
          case 2:
            return E.call(P, N[0], N[1]);
          case 3:
            return E.call(P, N[0], N[1], N[2]);
        }
        return E.apply(P, N);
      }
      function $$(E, P, N, ee) {
        for (var fe = -1, Ne = E == null ? 0 : E.length; ++fe < Ne; ) {
          var _t = E[fe];
          P(ee, _t, N(_t), E);
        }
        return ee;
      }
      function Sn(E, P) {
        for (var N = -1, ee = E == null ? 0 : E.length; ++N < ee && P(E[N], N, E) !== !1; )
          ;
        return E;
      }
      function y$(E, P) {
        for (var N = E == null ? 0 : E.length; N-- && P(E[N], N, E) !== !1; )
          ;
        return E;
      }
      function Gh(E, P) {
        for (var N = -1, ee = E == null ? 0 : E.length; ++N < ee; )
          if (!P(E[N], N, E))
            return !1;
        return !0;
      }
      function _o(E, P) {
        for (var N = -1, ee = E == null ? 0 : E.length, fe = 0, Ne = []; ++N < ee; ) {
          var _t = E[N];
          P(_t, N, E) && (Ne[fe++] = _t);
        }
        return Ne;
      }
      function ul(E, P) {
        var N = E == null ? 0 : E.length;
        return !!N && Wi(E, P, 0) > -1;
      }
      function lc(E, P, N) {
        for (var ee = -1, fe = E == null ? 0 : E.length; ++ee < fe; )
          if (N(P, E[ee]))
            return !0;
        return !1;
      }
      function et(E, P) {
        for (var N = -1, ee = E == null ? 0 : E.length, fe = Array(ee); ++N < ee; )
          fe[N] = P(E[N], N, E);
        return fe;
      }
      function go(E, P) {
        for (var N = -1, ee = P.length, fe = E.length; ++N < ee; )
          E[fe + N] = P[N];
        return E;
      }
      function uc(E, P, N, ee) {
        var fe = -1, Ne = E == null ? 0 : E.length;
        for (ee && Ne && (N = E[++fe]); ++fe < Ne; )
          N = P(N, E[fe], fe, E);
        return N;
      }
      function b$(E, P, N, ee) {
        var fe = E == null ? 0 : E.length;
        for (ee && fe && (N = E[--fe]); fe--; )
          N = P(N, E[fe], fe, E);
        return N;
      }
      function cc(E, P) {
        for (var N = -1, ee = E == null ? 0 : E.length; ++N < ee; )
          if (P(E[N], N, E))
            return !0;
        return !1;
      }
      var V$ = dc("length");
      function C$(E) {
        return E.split("");
      }
      function E$(E) {
        return E.match(K) || [];
      }
      function Yh(E, P, N) {
        var ee;
        return N(E, function(fe, Ne, _t) {
          if (P(fe, Ne, _t))
            return ee = Ne, !1;
        }), ee;
      }
      function cl(E, P, N, ee) {
        for (var fe = E.length, Ne = N + (ee ? 1 : -1); ee ? Ne-- : ++Ne < fe; )
          if (P(E[Ne], Ne, E))
            return Ne;
        return -1;
      }
      function Wi(E, P, N) {
        return P === P ? P$(E, P, N) : cl(E, jh, N);
      }
      function S$(E, P, N, ee) {
        for (var fe = N - 1, Ne = E.length; ++fe < Ne; )
          if (ee(E[fe], P))
            return fe;
        return -1;
      }
      function jh(E) {
        return E !== E;
      }
      function Kh(E, P) {
        var N = E == null ? 0 : E.length;
        return N ? hc(E, P) / N : A;
      }
      function dc(E) {
        return function(P) {
          return P == null ? r : P[E];
        };
      }
      function fc(E) {
        return function(P) {
          return E == null ? r : E[P];
        };
      }
      function Zh(E, P, N, ee, fe) {
        return fe(E, function(Ne, _t, We) {
          N = ee ? (ee = !1, Ne) : P(N, Ne, _t, We);
        }), N;
      }
      function k$(E, P) {
        var N = E.length;
        for (E.sort(P); N--; )
          E[N] = E[N].value;
        return E;
      }
      function hc(E, P) {
        for (var N, ee = -1, fe = E.length; ++ee < fe; ) {
          var Ne = P(E[ee]);
          Ne !== r && (N = N === r ? Ne : N + Ne);
        }
        return N;
      }
      function pc(E, P) {
        for (var N = -1, ee = Array(E); ++N < E; )
          ee[N] = P(N);
        return ee;
      }
      function T$(E, P) {
        return et(P, function(N) {
          return [N, E[N]];
        });
      }
      function Xh(E) {
        return E && E.slice(0, tp(E) + 1).replace(Fr, "");
      }
      function kn(E) {
        return function(P) {
          return E(P);
        };
      }
      function mc(E, P) {
        return et(P, function(N) {
          return E[N];
        });
      }
      function Zs(E, P) {
        return E.has(P);
      }
      function Jh(E, P) {
        for (var N = -1, ee = E.length; ++N < ee && Wi(P, E[N], 0) > -1; )
          ;
        return N;
      }
      function Qh(E, P) {
        for (var N = E.length; N-- && Wi(P, E[N], 0) > -1; )
          ;
        return N;
      }
      function I$(E, P) {
        for (var N = E.length, ee = 0; N--; )
          E[N] === P && ++ee;
        return ee;
      }
      var A$ = fc(h$), x$ = fc(p$);
      function L$(E) {
        return "\\" + v$[E];
      }
      function O$(E, P) {
        return E == null ? r : E[P];
      }
      function zi(E) {
        return u$.test(E);
      }
      function R$(E) {
        return c$.test(E);
      }
      function N$(E) {
        for (var P, N = []; !(P = E.next()).done; )
          N.push(P.value);
        return N;
      }
      function vc(E) {
        var P = -1, N = Array(E.size);
        return E.forEach(function(ee, fe) {
          N[++P] = [fe, ee];
        }), N;
      }
      function ep(E, P) {
        return function(N) {
          return E(P(N));
        };
      }
      function $o(E, P) {
        for (var N = -1, ee = E.length, fe = 0, Ne = []; ++N < ee; ) {
          var _t = E[N];
          (_t === P || _t === g) && (E[N] = g, Ne[fe++] = N);
        }
        return Ne;
      }
      function dl(E) {
        var P = -1, N = Array(E.size);
        return E.forEach(function(ee) {
          N[++P] = ee;
        }), N;
      }
      function B$(E) {
        var P = -1, N = Array(E.size);
        return E.forEach(function(ee) {
          N[++P] = [ee, ee];
        }), N;
      }
      function P$(E, P, N) {
        for (var ee = N - 1, fe = E.length; ++ee < fe; )
          if (E[ee] === P)
            return ee;
        return -1;
      }
      function D$(E, P, N) {
        for (var ee = N + 1; ee--; )
          if (E[ee] === P)
            return ee;
        return ee;
      }
      function Gi(E) {
        return zi(E) ? F$(E) : V$(E);
      }
      function or(E) {
        return zi(E) ? U$(E) : C$(E);
      }
      function tp(E) {
        for (var P = E.length; P-- && po.test(E.charAt(P)); )
          ;
        return P;
      }
      var M$ = fc(m$);
      function F$(E) {
        for (var P = ic.lastIndex = 0; ic.test(E); )
          ++P;
        return P;
      }
      function U$(E) {
        return E.match(ic) || [];
      }
      function q$(E) {
        return E.match(l$) || [];
      }
      var H$ = (function E(P) {
        P = P == null ? xt : Yi.defaults(xt.Object(), P, Yi.pick(xt, d$));
        var N = P.Array, ee = P.Date, fe = P.Error, Ne = P.Function, _t = P.Math, We = P.Object, wc = P.RegExp, W$ = P.String, zn = P.TypeError, fl = N.prototype, z$ = Ne.prototype, ji = We.prototype, hl = P["__core-js_shared__"], pl = z$.toString, De = ji.hasOwnProperty, G$ = 0, np = (function() {
          var t = /[^.]+$/.exec(hl && hl.keys && hl.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        })(), ml = ji.toString, Y$ = pl.call(We), j$ = xt._, K$ = wc(
          "^" + pl.call(De).replace(Mr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), vl = Mh ? P.Buffer : r, yo = P.Symbol, wl = P.Uint8Array, rp = vl ? vl.allocUnsafe : r, _l = ep(We.getPrototypeOf, We), op = We.create, ip = ji.propertyIsEnumerable, gl = fl.splice, sp = yo ? yo.isConcatSpreadable : r, Xs = yo ? yo.iterator : r, ri = yo ? yo.toStringTag : r, $l = (function() {
          try {
            var t = li(We, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        })(), Z$ = P.clearTimeout !== xt.clearTimeout && P.clearTimeout, X$ = ee && ee.now !== xt.Date.now && ee.now, J$ = P.setTimeout !== xt.setTimeout && P.setTimeout, yl = _t.ceil, bl = _t.floor, _c = We.getOwnPropertySymbols, Q$ = vl ? vl.isBuffer : r, ap = P.isFinite, ey = fl.join, ty = ep(We.keys, We), gt = _t.max, Mt = _t.min, ny = ee.now, ry = P.parseInt, lp = _t.random, oy = fl.reverse, gc = li(P, "DataView"), Js = li(P, "Map"), $c = li(P, "Promise"), Ki = li(P, "Set"), Qs = li(P, "WeakMap"), ea = li(We, "create"), Vl = Qs && new Qs(), Zi = {}, iy = ui(gc), sy = ui(Js), ay = ui($c), ly = ui(Ki), uy = ui(Qs), Cl = yo ? yo.prototype : r, ta = Cl ? Cl.valueOf : r, up = Cl ? Cl.toString : r;
        function h(t) {
          if (st(t) && !me(t) && !(t instanceof ke)) {
            if (t instanceof Gn)
              return t;
            if (De.call(t, "__wrapped__"))
              return cm(t);
          }
          return new Gn(t);
        }
        var Xi = /* @__PURE__ */ (function() {
          function t() {
          }
          return function(n) {
            if (!ot(n))
              return {};
            if (op)
              return op(n);
            t.prototype = n;
            var i = new t();
            return t.prototype = r, i;
          };
        })();
        function El() {
        }
        function Gn(t, n) {
          this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
        }
        h.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: Dr,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Kt,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Un,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: h
          }
        }, h.prototype = El.prototype, h.prototype.constructor = h, Gn.prototype = Xi(El.prototype), Gn.prototype.constructor = Gn;
        function ke(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = te, this.__views__ = [];
        }
        function cy() {
          var t = new ke(this.__wrapped__);
          return t.__actions__ = fn(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = fn(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = fn(this.__views__), t;
        }
        function dy() {
          if (this.__filtered__) {
            var t = new ke(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function fy() {
          var t = this.__wrapped__.value(), n = this.__dir__, i = me(t), l = n < 0, d = i ? t.length : 0, m = Cb(0, d, this.__views__), $ = m.start, V = m.end, S = V - $, M = l ? V : $ - 1, U = this.__iteratees__, H = U.length, Z = 0, ie = Mt(S, this.__takeCount__);
          if (!i || !l && d == S && ie == S)
            return Op(t, this.__actions__);
          var ce = [];
          e:
            for (; S-- && Z < ie; ) {
              M += n;
              for (var ye = -1, ae = t[M]; ++ye < H; ) {
                var Ee = U[ye], xe = Ee.iteratee, An = Ee.type, Qt = xe(ae);
                if (An == Je)
                  ae = Qt;
                else if (!Qt) {
                  if (An == $e)
                    continue e;
                  break e;
                }
              }
              ce[Z++] = ae;
            }
          return ce;
        }
        ke.prototype = Xi(El.prototype), ke.prototype.constructor = ke;
        function oi(t) {
          var n = -1, i = t == null ? 0 : t.length;
          for (this.clear(); ++n < i; ) {
            var l = t[n];
            this.set(l[0], l[1]);
          }
        }
        function hy() {
          this.__data__ = ea ? ea(null) : {}, this.size = 0;
        }
        function py(t) {
          var n = this.has(t) && delete this.__data__[t];
          return this.size -= n ? 1 : 0, n;
        }
        function my(t) {
          var n = this.__data__;
          if (ea) {
            var i = n[t];
            return i === p ? r : i;
          }
          return De.call(n, t) ? n[t] : r;
        }
        function vy(t) {
          var n = this.__data__;
          return ea ? n[t] !== r : De.call(n, t);
        }
        function wy(t, n) {
          var i = this.__data__;
          return this.size += this.has(t) ? 0 : 1, i[t] = ea && n === r ? p : n, this;
        }
        oi.prototype.clear = hy, oi.prototype.delete = py, oi.prototype.get = my, oi.prototype.has = vy, oi.prototype.set = wy;
        function Hr(t) {
          var n = -1, i = t == null ? 0 : t.length;
          for (this.clear(); ++n < i; ) {
            var l = t[n];
            this.set(l[0], l[1]);
          }
        }
        function _y() {
          this.__data__ = [], this.size = 0;
        }
        function gy(t) {
          var n = this.__data__, i = Sl(n, t);
          if (i < 0)
            return !1;
          var l = n.length - 1;
          return i == l ? n.pop() : gl.call(n, i, 1), --this.size, !0;
        }
        function $y(t) {
          var n = this.__data__, i = Sl(n, t);
          return i < 0 ? r : n[i][1];
        }
        function yy(t) {
          return Sl(this.__data__, t) > -1;
        }
        function by(t, n) {
          var i = this.__data__, l = Sl(i, t);
          return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
        }
        Hr.prototype.clear = _y, Hr.prototype.delete = gy, Hr.prototype.get = $y, Hr.prototype.has = yy, Hr.prototype.set = by;
        function Wr(t) {
          var n = -1, i = t == null ? 0 : t.length;
          for (this.clear(); ++n < i; ) {
            var l = t[n];
            this.set(l[0], l[1]);
          }
        }
        function Vy() {
          this.size = 0, this.__data__ = {
            hash: new oi(),
            map: new (Js || Hr)(),
            string: new oi()
          };
        }
        function Cy(t) {
          var n = Dl(this, t).delete(t);
          return this.size -= n ? 1 : 0, n;
        }
        function Ey(t) {
          return Dl(this, t).get(t);
        }
        function Sy(t) {
          return Dl(this, t).has(t);
        }
        function ky(t, n) {
          var i = Dl(this, t), l = i.size;
          return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
        }
        Wr.prototype.clear = Vy, Wr.prototype.delete = Cy, Wr.prototype.get = Ey, Wr.prototype.has = Sy, Wr.prototype.set = ky;
        function ii(t) {
          var n = -1, i = t == null ? 0 : t.length;
          for (this.__data__ = new Wr(); ++n < i; )
            this.add(t[n]);
        }
        function Ty(t) {
          return this.__data__.set(t, p), this;
        }
        function Iy(t) {
          return this.__data__.has(t);
        }
        ii.prototype.add = ii.prototype.push = Ty, ii.prototype.has = Iy;
        function ir(t) {
          var n = this.__data__ = new Hr(t);
          this.size = n.size;
        }
        function Ay() {
          this.__data__ = new Hr(), this.size = 0;
        }
        function xy(t) {
          var n = this.__data__, i = n.delete(t);
          return this.size = n.size, i;
        }
        function Ly(t) {
          return this.__data__.get(t);
        }
        function Oy(t) {
          return this.__data__.has(t);
        }
        function Ry(t, n) {
          var i = this.__data__;
          if (i instanceof Hr) {
            var l = i.__data__;
            if (!Js || l.length < a - 1)
              return l.push([t, n]), this.size = ++i.size, this;
            i = this.__data__ = new Wr(l);
          }
          return i.set(t, n), this.size = i.size, this;
        }
        ir.prototype.clear = Ay, ir.prototype.delete = xy, ir.prototype.get = Ly, ir.prototype.has = Oy, ir.prototype.set = Ry;
        function cp(t, n) {
          var i = me(t), l = !i && ci(t), d = !i && !l && So(t), m = !i && !l && !d && ts(t), $ = i || l || d || m, V = $ ? pc(t.length, W$) : [], S = V.length;
          for (var M in t)
            (n || De.call(t, M)) && !($ && // Safari 9 has enumerable `arguments.length` in strict mode.
            (M == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            d && (M == "offset" || M == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            m && (M == "buffer" || M == "byteLength" || M == "byteOffset") || // Skip index properties.
            Yr(M, S))) && V.push(M);
          return V;
        }
        function dp(t) {
          var n = t.length;
          return n ? t[xc(0, n - 1)] : r;
        }
        function Ny(t, n) {
          return Ml(fn(t), si(n, 0, t.length));
        }
        function By(t) {
          return Ml(fn(t));
        }
        function yc(t, n, i) {
          (i !== r && !ar(t[n], i) || i === r && !(n in t)) && $r(t, n, i);
        }
        function na(t, n, i) {
          var l = t[n];
          (!(De.call(t, n) && ar(l, i)) || i === r && !(n in t)) && $r(t, n, i);
        }
        function Sl(t, n) {
          for (var i = t.length; i--; )
            if (ar(t[i][0], n))
              return i;
          return -1;
        }
        function Py(t, n, i, l) {
          return bo(t, function(d, m, $) {
            n(l, d, i(d), $);
          }), l;
        }
        function fp(t, n) {
          return t && br(n, Ct(n), t);
        }
        function Dy(t, n) {
          return t && br(n, pn(n), t);
        }
        function $r(t, n, i) {
          n == "__proto__" && $l ? $l(t, n, {
            configurable: !0,
            enumerable: !0,
            value: i,
            writable: !0
          }) : t[n] = i;
        }
        function bc(t, n) {
          for (var i = -1, l = n.length, d = N(l), m = t == null; ++i < l; )
            d[i] = m ? r : rd(t, n[i]);
          return d;
        }
        function si(t, n, i) {
          return t === t && (i !== r && (t = t <= i ? t : i), n !== r && (t = t >= n ? t : n)), t;
        }
        function Yn(t, n, i, l, d, m) {
          var $, V = n & y, S = n & b, M = n & C;
          if (i && ($ = d ? i(t, l, d, m) : i(t)), $ !== r)
            return $;
          if (!ot(t))
            return t;
          var U = me(t);
          if (U) {
            if ($ = Sb(t), !V)
              return fn(t, $);
          } else {
            var H = Ft(t), Z = H == Ue || H == oo;
            if (So(t))
              return Bp(t, V);
            if (H == nt || H == Pe || Z && !d) {
              if ($ = S || Z ? {} : tm(t), !V)
                return S ? mb(t, Dy($, t)) : pb(t, fp($, t));
            } else {
              if (!Ye[H])
                return d ? t : {};
              $ = kb(t, H, V);
            }
          }
          m || (m = new ir());
          var ie = m.get(t);
          if (ie)
            return ie;
          m.set(t, $), Am(t) ? t.forEach(function(ae) {
            $.add(Yn(ae, n, i, ae, t, m));
          }) : Tm(t) && t.forEach(function(ae, Ee) {
            $.set(Ee, Yn(ae, n, i, Ee, t, m));
          });
          var ce = M ? S ? qc : Uc : S ? pn : Ct, ye = U ? r : ce(t);
          return Sn(ye || t, function(ae, Ee) {
            ye && (Ee = ae, ae = t[Ee]), na($, Ee, Yn(ae, n, i, Ee, t, m));
          }), $;
        }
        function My(t) {
          var n = Ct(t);
          return function(i) {
            return hp(i, t, n);
          };
        }
        function hp(t, n, i) {
          var l = i.length;
          if (t == null)
            return !l;
          for (t = We(t); l--; ) {
            var d = i[l], m = n[d], $ = t[d];
            if ($ === r && !(d in t) || !m($))
              return !1;
          }
          return !0;
        }
        function pp(t, n, i) {
          if (typeof t != "function")
            throw new zn(c);
          return ua(function() {
            t.apply(r, i);
          }, n);
        }
        function ra(t, n, i, l) {
          var d = -1, m = ul, $ = !0, V = t.length, S = [], M = n.length;
          if (!V)
            return S;
          i && (n = et(n, kn(i))), l ? (m = lc, $ = !1) : n.length >= a && (m = Zs, $ = !1, n = new ii(n));
          e:
            for (; ++d < V; ) {
              var U = t[d], H = i == null ? U : i(U);
              if (U = l || U !== 0 ? U : 0, $ && H === H) {
                for (var Z = M; Z--; )
                  if (n[Z] === H)
                    continue e;
                S.push(U);
              } else m(n, H, l) || S.push(U);
            }
          return S;
        }
        var bo = Up(yr), mp = Up(Cc, !0);
        function Fy(t, n) {
          var i = !0;
          return bo(t, function(l, d, m) {
            return i = !!n(l, d, m), i;
          }), i;
        }
        function kl(t, n, i) {
          for (var l = -1, d = t.length; ++l < d; ) {
            var m = t[l], $ = n(m);
            if ($ != null && (V === r ? $ === $ && !In($) : i($, V)))
              var V = $, S = m;
          }
          return S;
        }
        function Uy(t, n, i, l) {
          var d = t.length;
          for (i = _e(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === r || l > d ? d : _e(l), l < 0 && (l += d), l = i > l ? 0 : Lm(l); i < l; )
            t[i++] = n;
          return t;
        }
        function vp(t, n) {
          var i = [];
          return bo(t, function(l, d, m) {
            n(l, d, m) && i.push(l);
          }), i;
        }
        function Lt(t, n, i, l, d) {
          var m = -1, $ = t.length;
          for (i || (i = Ib), d || (d = []); ++m < $; ) {
            var V = t[m];
            n > 0 && i(V) ? n > 1 ? Lt(V, n - 1, i, l, d) : go(d, V) : l || (d[d.length] = V);
          }
          return d;
        }
        var Vc = qp(), wp = qp(!0);
        function yr(t, n) {
          return t && Vc(t, n, Ct);
        }
        function Cc(t, n) {
          return t && wp(t, n, Ct);
        }
        function Tl(t, n) {
          return _o(n, function(i) {
            return jr(t[i]);
          });
        }
        function ai(t, n) {
          n = Co(n, t);
          for (var i = 0, l = n.length; t != null && i < l; )
            t = t[sr(n[i++])];
          return i && i == l ? t : r;
        }
        function _p(t, n, i) {
          var l = n(t);
          return me(t) ? l : go(l, i(t));
        }
        function Xt(t) {
          return t == null ? t === r ? ln : Gt : ri && ri in We(t) ? Vb(t) : Bb(t);
        }
        function Ec(t, n) {
          return t > n;
        }
        function qy(t, n) {
          return t != null && De.call(t, n);
        }
        function Hy(t, n) {
          return t != null && n in We(t);
        }
        function Wy(t, n, i) {
          return t >= Mt(n, i) && t < gt(n, i);
        }
        function Sc(t, n, i) {
          for (var l = i ? lc : ul, d = t[0].length, m = t.length, $ = m, V = N(m), S = 1 / 0, M = []; $--; ) {
            var U = t[$];
            $ && n && (U = et(U, kn(n))), S = Mt(U.length, S), V[$] = !i && (n || d >= 120 && U.length >= 120) ? new ii($ && U) : r;
          }
          U = t[0];
          var H = -1, Z = V[0];
          e:
            for (; ++H < d && M.length < S; ) {
              var ie = U[H], ce = n ? n(ie) : ie;
              if (ie = i || ie !== 0 ? ie : 0, !(Z ? Zs(Z, ce) : l(M, ce, i))) {
                for ($ = m; --$; ) {
                  var ye = V[$];
                  if (!(ye ? Zs(ye, ce) : l(t[$], ce, i)))
                    continue e;
                }
                Z && Z.push(ce), M.push(ie);
              }
            }
          return M;
        }
        function zy(t, n, i, l) {
          return yr(t, function(d, m, $) {
            n(l, i(d), m, $);
          }), l;
        }
        function oa(t, n, i) {
          n = Co(n, t), t = im(t, n);
          var l = t == null ? t : t[sr(Kn(n))];
          return l == null ? r : En(l, t, i);
        }
        function gp(t) {
          return st(t) && Xt(t) == Pe;
        }
        function Gy(t) {
          return st(t) && Xt(t) == cn;
        }
        function Yy(t) {
          return st(t) && Xt(t) == nr;
        }
        function ia(t, n, i, l, d) {
          return t === n ? !0 : t == null || n == null || !st(t) && !st(n) ? t !== t && n !== n : jy(t, n, i, l, ia, d);
        }
        function jy(t, n, i, l, d, m) {
          var $ = me(t), V = me(n), S = $ ? wt : Ft(t), M = V ? wt : Ft(n);
          S = S == Pe ? nt : S, M = M == Pe ? nt : M;
          var U = S == nt, H = M == nt, Z = S == M;
          if (Z && So(t)) {
            if (!So(n))
              return !1;
            $ = !0, U = !1;
          }
          if (Z && !U)
            return m || (m = new ir()), $ || ts(t) ? Jp(t, n, i, l, d, m) : yb(t, n, S, i, l, d, m);
          if (!(i & T)) {
            var ie = U && De.call(t, "__wrapped__"), ce = H && De.call(n, "__wrapped__");
            if (ie || ce) {
              var ye = ie ? t.value() : t, ae = ce ? n.value() : n;
              return m || (m = new ir()), d(ye, ae, i, l, m);
            }
          }
          return Z ? (m || (m = new ir()), bb(t, n, i, l, d, m)) : !1;
        }
        function Ky(t) {
          return st(t) && Ft(t) == pe;
        }
        function kc(t, n, i, l) {
          var d = i.length, m = d, $ = !l;
          if (t == null)
            return !m;
          for (t = We(t); d--; ) {
            var V = i[d];
            if ($ && V[2] ? V[1] !== t[V[0]] : !(V[0] in t))
              return !1;
          }
          for (; ++d < m; ) {
            V = i[d];
            var S = V[0], M = t[S], U = V[1];
            if ($ && V[2]) {
              if (M === r && !(S in t))
                return !1;
            } else {
              var H = new ir();
              if (l)
                var Z = l(M, U, S, t, n, H);
              if (!(Z === r ? ia(U, M, T | B, l, H) : Z))
                return !1;
            }
          }
          return !0;
        }
        function $p(t) {
          if (!ot(t) || xb(t))
            return !1;
          var n = jr(t) ? K$ : Zo;
          return n.test(ui(t));
        }
        function Zy(t) {
          return st(t) && Xt(t) == vr;
        }
        function Xy(t) {
          return st(t) && Ft(t) == Dt;
        }
        function Jy(t) {
          return st(t) && zl(t.length) && !!Ze[Xt(t)];
        }
        function yp(t) {
          return typeof t == "function" ? t : t == null ? mn : typeof t == "object" ? me(t) ? Cp(t[0], t[1]) : Vp(t) : Wm(t);
        }
        function Tc(t) {
          if (!la(t))
            return ty(t);
          var n = [];
          for (var i in We(t))
            De.call(t, i) && i != "constructor" && n.push(i);
          return n;
        }
        function Qy(t) {
          if (!ot(t))
            return Nb(t);
          var n = la(t), i = [];
          for (var l in t)
            l == "constructor" && (n || !De.call(t, l)) || i.push(l);
          return i;
        }
        function Ic(t, n) {
          return t < n;
        }
        function bp(t, n) {
          var i = -1, l = hn(t) ? N(t.length) : [];
          return bo(t, function(d, m, $) {
            l[++i] = n(d, m, $);
          }), l;
        }
        function Vp(t) {
          var n = Wc(t);
          return n.length == 1 && n[0][2] ? rm(n[0][0], n[0][1]) : function(i) {
            return i === t || kc(i, t, n);
          };
        }
        function Cp(t, n) {
          return Gc(t) && nm(n) ? rm(sr(t), n) : function(i) {
            var l = rd(i, t);
            return l === r && l === n ? od(i, t) : ia(n, l, T | B);
          };
        }
        function Il(t, n, i, l, d) {
          t !== n && Vc(n, function(m, $) {
            if (d || (d = new ir()), ot(m))
              eb(t, n, $, i, Il, l, d);
            else {
              var V = l ? l(jc(t, $), m, $ + "", t, n, d) : r;
              V === r && (V = m), yc(t, $, V);
            }
          }, pn);
        }
        function eb(t, n, i, l, d, m, $) {
          var V = jc(t, i), S = jc(n, i), M = $.get(S);
          if (M) {
            yc(t, i, M);
            return;
          }
          var U = m ? m(V, S, i + "", t, n, $) : r, H = U === r;
          if (H) {
            var Z = me(S), ie = !Z && So(S), ce = !Z && !ie && ts(S);
            U = S, Z || ie || ce ? me(V) ? U = V : ut(V) ? U = fn(V) : ie ? (H = !1, U = Bp(S, !0)) : ce ? (H = !1, U = Pp(S, !0)) : U = [] : ca(S) || ci(S) ? (U = V, ci(V) ? U = Om(V) : (!ot(V) || jr(V)) && (U = tm(S))) : H = !1;
          }
          H && ($.set(S, U), d(U, S, l, m, $), $.delete(S)), yc(t, i, U);
        }
        function Ep(t, n) {
          var i = t.length;
          if (i)
            return n += n < 0 ? i : 0, Yr(n, i) ? t[n] : r;
        }
        function Sp(t, n, i) {
          n.length ? n = et(n, function(m) {
            return me(m) ? function($) {
              return ai($, m.length === 1 ? m[0] : m);
            } : m;
          }) : n = [mn];
          var l = -1;
          n = et(n, kn(le()));
          var d = bp(t, function(m, $, V) {
            var S = et(n, function(M) {
              return M(m);
            });
            return { criteria: S, index: ++l, value: m };
          });
          return k$(d, function(m, $) {
            return hb(m, $, i);
          });
        }
        function tb(t, n) {
          return kp(t, n, function(i, l) {
            return od(t, l);
          });
        }
        function kp(t, n, i) {
          for (var l = -1, d = n.length, m = {}; ++l < d; ) {
            var $ = n[l], V = ai(t, $);
            i(V, $) && sa(m, Co($, t), V);
          }
          return m;
        }
        function nb(t) {
          return function(n) {
            return ai(n, t);
          };
        }
        function Ac(t, n, i, l) {
          var d = l ? S$ : Wi, m = -1, $ = n.length, V = t;
          for (t === n && (n = fn(n)), i && (V = et(t, kn(i))); ++m < $; )
            for (var S = 0, M = n[m], U = i ? i(M) : M; (S = d(V, U, S, l)) > -1; )
              V !== t && gl.call(V, S, 1), gl.call(t, S, 1);
          return t;
        }
        function Tp(t, n) {
          for (var i = t ? n.length : 0, l = i - 1; i--; ) {
            var d = n[i];
            if (i == l || d !== m) {
              var m = d;
              Yr(d) ? gl.call(t, d, 1) : Rc(t, d);
            }
          }
          return t;
        }
        function xc(t, n) {
          return t + bl(lp() * (n - t + 1));
        }
        function rb(t, n, i, l) {
          for (var d = -1, m = gt(yl((n - t) / (i || 1)), 0), $ = N(m); m--; )
            $[l ? m : ++d] = t, t += i;
          return $;
        }
        function Lc(t, n) {
          var i = "";
          if (!t || n < 1 || n > Vt)
            return i;
          do
            n % 2 && (i += t), n = bl(n / 2), n && (t += t);
          while (n);
          return i;
        }
        function Ve(t, n) {
          return Kc(om(t, n, mn), t + "");
        }
        function ob(t) {
          return dp(ns(t));
        }
        function ib(t, n) {
          var i = ns(t);
          return Ml(i, si(n, 0, i.length));
        }
        function sa(t, n, i, l) {
          if (!ot(t))
            return t;
          n = Co(n, t);
          for (var d = -1, m = n.length, $ = m - 1, V = t; V != null && ++d < m; ) {
            var S = sr(n[d]), M = i;
            if (S === "__proto__" || S === "constructor" || S === "prototype")
              return t;
            if (d != $) {
              var U = V[S];
              M = l ? l(U, S, V) : r, M === r && (M = ot(U) ? U : Yr(n[d + 1]) ? [] : {});
            }
            na(V, S, M), V = V[S];
          }
          return t;
        }
        var Ip = Vl ? function(t, n) {
          return Vl.set(t, n), t;
        } : mn, sb = $l ? function(t, n) {
          return $l(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: sd(n),
            writable: !0
          });
        } : mn;
        function ab(t) {
          return Ml(ns(t));
        }
        function jn(t, n, i) {
          var l = -1, d = t.length;
          n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
          for (var m = N(d); ++l < d; )
            m[l] = t[l + n];
          return m;
        }
        function lb(t, n) {
          var i;
          return bo(t, function(l, d, m) {
            return i = n(l, d, m), !i;
          }), !!i;
        }
        function Al(t, n, i) {
          var l = 0, d = t == null ? l : t.length;
          if (typeof n == "number" && n === n && d <= Ke) {
            for (; l < d; ) {
              var m = l + d >>> 1, $ = t[m];
              $ !== null && !In($) && (i ? $ <= n : $ < n) ? l = m + 1 : d = m;
            }
            return d;
          }
          return Oc(t, n, mn, i);
        }
        function Oc(t, n, i, l) {
          var d = 0, m = t == null ? 0 : t.length;
          if (m === 0)
            return 0;
          n = i(n);
          for (var $ = n !== n, V = n === null, S = In(n), M = n === r; d < m; ) {
            var U = bl((d + m) / 2), H = i(t[U]), Z = H !== r, ie = H === null, ce = H === H, ye = In(H);
            if ($)
              var ae = l || ce;
            else M ? ae = ce && (l || Z) : V ? ae = ce && Z && (l || !ie) : S ? ae = ce && Z && !ie && (l || !ye) : ie || ye ? ae = !1 : ae = l ? H <= n : H < n;
            ae ? d = U + 1 : m = U;
          }
          return Mt(m, ue);
        }
        function Ap(t, n) {
          for (var i = -1, l = t.length, d = 0, m = []; ++i < l; ) {
            var $ = t[i], V = n ? n($) : $;
            if (!i || !ar(V, S)) {
              var S = V;
              m[d++] = $ === 0 ? 0 : $;
            }
          }
          return m;
        }
        function xp(t) {
          return typeof t == "number" ? t : In(t) ? A : +t;
        }
        function Tn(t) {
          if (typeof t == "string")
            return t;
          if (me(t))
            return et(t, Tn) + "";
          if (In(t))
            return up ? up.call(t) : "";
          var n = t + "";
          return n == "0" && 1 / t == -Qe ? "-0" : n;
        }
        function Vo(t, n, i) {
          var l = -1, d = ul, m = t.length, $ = !0, V = [], S = V;
          if (i)
            $ = !1, d = lc;
          else if (m >= a) {
            var M = n ? null : gb(t);
            if (M)
              return dl(M);
            $ = !1, d = Zs, S = new ii();
          } else
            S = n ? [] : V;
          e:
            for (; ++l < m; ) {
              var U = t[l], H = n ? n(U) : U;
              if (U = i || U !== 0 ? U : 0, $ && H === H) {
                for (var Z = S.length; Z--; )
                  if (S[Z] === H)
                    continue e;
                n && S.push(H), V.push(U);
              } else d(S, H, i) || (S !== V && S.push(H), V.push(U));
            }
          return V;
        }
        function Rc(t, n) {
          n = Co(n, t);
          var i = -1, l = n.length;
          if (!l)
            return !0;
          for (; ++i < l; ) {
            var d = sr(n[i]);
            if (d === "__proto__" && !De.call(t, "__proto__") || (d === "constructor" || d === "prototype") && i < l - 1)
              return !1;
          }
          var m = im(t, n);
          return m == null || delete m[sr(Kn(n))];
        }
        function Lp(t, n, i, l) {
          return sa(t, n, i(ai(t, n)), l);
        }
        function xl(t, n, i, l) {
          for (var d = t.length, m = l ? d : -1; (l ? m-- : ++m < d) && n(t[m], m, t); )
            ;
          return i ? jn(t, l ? 0 : m, l ? m + 1 : d) : jn(t, l ? m + 1 : 0, l ? d : m);
        }
        function Op(t, n) {
          var i = t;
          return i instanceof ke && (i = i.value()), uc(n, function(l, d) {
            return d.func.apply(d.thisArg, go([l], d.args));
          }, i);
        }
        function Nc(t, n, i) {
          var l = t.length;
          if (l < 2)
            return l ? Vo(t[0]) : [];
          for (var d = -1, m = N(l); ++d < l; )
            for (var $ = t[d], V = -1; ++V < l; )
              V != d && (m[d] = ra(m[d] || $, t[V], n, i));
          return Vo(Lt(m, 1), n, i);
        }
        function Rp(t, n, i) {
          for (var l = -1, d = t.length, m = n.length, $ = {}; ++l < d; ) {
            var V = l < m ? n[l] : r;
            i($, t[l], V);
          }
          return $;
        }
        function Bc(t) {
          return ut(t) ? t : [];
        }
        function Pc(t) {
          return typeof t == "function" ? t : mn;
        }
        function Co(t, n) {
          return me(t) ? t : Gc(t, n) ? [t] : um(Me(t));
        }
        var ub = Ve;
        function Eo(t, n, i) {
          var l = t.length;
          return i = i === r ? l : i, !n && i >= l ? t : jn(t, n, i);
        }
        var Np = Z$ || function(t) {
          return xt.clearTimeout(t);
        };
        function Bp(t, n) {
          if (n)
            return t.slice();
          var i = t.length, l = rp ? rp(i) : new t.constructor(i);
          return t.copy(l), l;
        }
        function Dc(t) {
          var n = new t.constructor(t.byteLength);
          return new wl(n).set(new wl(t)), n;
        }
        function cb(t, n) {
          var i = n ? Dc(t.buffer) : t.buffer;
          return new t.constructor(i, t.byteOffset, t.byteLength);
        }
        function db(t) {
          var n = new t.constructor(t.source, mo.exec(t));
          return n.lastIndex = t.lastIndex, n;
        }
        function fb(t) {
          return ta ? We(ta.call(t)) : {};
        }
        function Pp(t, n) {
          var i = n ? Dc(t.buffer) : t.buffer;
          return new t.constructor(i, t.byteOffset, t.length);
        }
        function Dp(t, n) {
          if (t !== n) {
            var i = t !== r, l = t === null, d = t === t, m = In(t), $ = n !== r, V = n === null, S = n === n, M = In(n);
            if (!V && !M && !m && t > n || m && $ && S && !V && !M || l && $ && S || !i && S || !d)
              return 1;
            if (!l && !m && !M && t < n || M && i && d && !l && !m || V && i && d || !$ && d || !S)
              return -1;
          }
          return 0;
        }
        function hb(t, n, i) {
          for (var l = -1, d = t.criteria, m = n.criteria, $ = d.length, V = i.length; ++l < $; ) {
            var S = Dp(d[l], m[l]);
            if (S) {
              if (l >= V)
                return S;
              var M = i[l];
              return S * (M == "desc" ? -1 : 1);
            }
          }
          return t.index - n.index;
        }
        function Mp(t, n, i, l) {
          for (var d = -1, m = t.length, $ = i.length, V = -1, S = n.length, M = gt(m - $, 0), U = N(S + M), H = !l; ++V < S; )
            U[V] = n[V];
          for (; ++d < $; )
            (H || d < m) && (U[i[d]] = t[d]);
          for (; M--; )
            U[V++] = t[d++];
          return U;
        }
        function Fp(t, n, i, l) {
          for (var d = -1, m = t.length, $ = -1, V = i.length, S = -1, M = n.length, U = gt(m - V, 0), H = N(U + M), Z = !l; ++d < U; )
            H[d] = t[d];
          for (var ie = d; ++S < M; )
            H[ie + S] = n[S];
          for (; ++$ < V; )
            (Z || d < m) && (H[ie + i[$]] = t[d++]);
          return H;
        }
        function fn(t, n) {
          var i = -1, l = t.length;
          for (n || (n = N(l)); ++i < l; )
            n[i] = t[i];
          return n;
        }
        function br(t, n, i, l) {
          var d = !i;
          i || (i = {});
          for (var m = -1, $ = n.length; ++m < $; ) {
            var V = n[m], S = l ? l(i[V], t[V], V, i, t) : r;
            S === r && (S = t[V]), d ? $r(i, V, S) : na(i, V, S);
          }
          return i;
        }
        function pb(t, n) {
          return br(t, zc(t), n);
        }
        function mb(t, n) {
          return br(t, Qp(t), n);
        }
        function Ll(t, n) {
          return function(i, l) {
            var d = me(i) ? $$ : Py, m = n ? n() : {};
            return d(i, t, le(l, 2), m);
          };
        }
        function Ji(t) {
          return Ve(function(n, i) {
            var l = -1, d = i.length, m = d > 1 ? i[d - 1] : r, $ = d > 2 ? i[2] : r;
            for (m = t.length > 3 && typeof m == "function" ? (d--, m) : r, $ && Jt(i[0], i[1], $) && (m = d < 3 ? r : m, d = 1), n = We(n); ++l < d; ) {
              var V = i[l];
              V && t(n, V, l, m);
            }
            return n;
          });
        }
        function Up(t, n) {
          return function(i, l) {
            if (i == null)
              return i;
            if (!hn(i))
              return t(i, l);
            for (var d = i.length, m = n ? d : -1, $ = We(i); (n ? m-- : ++m < d) && l($[m], m, $) !== !1; )
              ;
            return i;
          };
        }
        function qp(t) {
          return function(n, i, l) {
            for (var d = -1, m = We(n), $ = l(n), V = $.length; V--; ) {
              var S = $[t ? V : ++d];
              if (i(m[S], S, m) === !1)
                break;
            }
            return n;
          };
        }
        function vb(t, n, i) {
          var l = n & k, d = aa(t);
          function m() {
            var $ = this && this !== xt && this instanceof m ? d : t;
            return $.apply(l ? i : this, arguments);
          }
          return m;
        }
        function Hp(t) {
          return function(n) {
            n = Me(n);
            var i = zi(n) ? or(n) : r, l = i ? i[0] : n.charAt(0), d = i ? Eo(i, 1).join("") : n.slice(1);
            return l[t]() + d;
          };
        }
        function Qi(t) {
          return function(n) {
            return uc(qm(Um(n).replace(s$, "")), t, "");
          };
        }
        function aa(t) {
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
            var i = Xi(t.prototype), l = t.apply(i, n);
            return ot(l) ? l : i;
          };
        }
        function wb(t, n, i) {
          var l = aa(t);
          function d() {
            for (var m = arguments.length, $ = N(m), V = m, S = es(d); V--; )
              $[V] = arguments[V];
            var M = m < 3 && $[0] !== S && $[m - 1] !== S ? [] : $o($, S);
            if (m -= M.length, m < i)
              return jp(
                t,
                n,
                Ol,
                d.placeholder,
                r,
                $,
                M,
                r,
                r,
                i - m
              );
            var U = this && this !== xt && this instanceof d ? l : t;
            return En(U, this, $);
          }
          return d;
        }
        function Wp(t) {
          return function(n, i, l) {
            var d = We(n);
            if (!hn(n)) {
              var m = le(i, 3);
              n = Ct(n), i = function(V) {
                return m(d[V], V, d);
              };
            }
            var $ = t(n, i, l);
            return $ > -1 ? d[m ? n[$] : $] : r;
          };
        }
        function zp(t) {
          return Gr(function(n) {
            var i = n.length, l = i, d = Gn.prototype.thru;
            for (t && n.reverse(); l--; ) {
              var m = n[l];
              if (typeof m != "function")
                throw new zn(c);
              if (d && !$ && Pl(m) == "wrapper")
                var $ = new Gn([], !0);
            }
            for (l = $ ? l : i; ++l < i; ) {
              m = n[l];
              var V = Pl(m), S = V == "wrapper" ? Hc(m) : r;
              S && Yc(S[0]) && S[1] == (j | D | F | Y) && !S[4].length && S[9] == 1 ? $ = $[Pl(S[0])].apply($, S[3]) : $ = m.length == 1 && Yc(m) ? $[V]() : $.thru(m);
            }
            return function() {
              var M = arguments, U = M[0];
              if ($ && M.length == 1 && me(U))
                return $.plant(U).value();
              for (var H = 0, Z = i ? n[H].apply(this, M) : U; ++H < i; )
                Z = n[H].call(this, Z);
              return Z;
            };
          });
        }
        function Ol(t, n, i, l, d, m, $, V, S, M) {
          var U = n & j, H = n & k, Z = n & I, ie = n & (D | q), ce = n & X, ye = Z ? r : aa(t);
          function ae() {
            for (var Ee = arguments.length, xe = N(Ee), An = Ee; An--; )
              xe[An] = arguments[An];
            if (ie)
              var Qt = es(ae), xn = I$(xe, Qt);
            if (l && (xe = Mp(xe, l, d, ie)), m && (xe = Fp(xe, m, $, ie)), Ee -= xn, ie && Ee < M) {
              var ct = $o(xe, Qt);
              return jp(
                t,
                n,
                Ol,
                ae.placeholder,
                i,
                xe,
                ct,
                V,
                S,
                M - Ee
              );
            }
            var lr = H ? i : this, Zr = Z ? lr[t] : t;
            return Ee = xe.length, V ? xe = Pb(xe, V) : ce && Ee > 1 && xe.reverse(), U && S < Ee && (xe.length = S), this && this !== xt && this instanceof ae && (Zr = ye || aa(Zr)), Zr.apply(lr, xe);
          }
          return ae;
        }
        function Gp(t, n) {
          return function(i, l) {
            return zy(i, t, n(l), {});
          };
        }
        function Rl(t, n) {
          return function(i, l) {
            var d;
            if (i === r && l === r)
              return n;
            if (i !== r && (d = i), l !== r) {
              if (d === r)
                return l;
              typeof i == "string" || typeof l == "string" ? (i = Tn(i), l = Tn(l)) : (i = xp(i), l = xp(l)), d = t(i, l);
            }
            return d;
          };
        }
        function Mc(t) {
          return Gr(function(n) {
            return n = et(n, kn(le())), Ve(function(i) {
              var l = this;
              return t(n, function(d) {
                return En(d, l, i);
              });
            });
          });
        }
        function Nl(t, n) {
          n = n === r ? " " : Tn(n);
          var i = n.length;
          if (i < 2)
            return i ? Lc(n, t) : n;
          var l = Lc(n, yl(t / Gi(n)));
          return zi(n) ? Eo(or(l), 0, t).join("") : l.slice(0, t);
        }
        function _b(t, n, i, l) {
          var d = n & k, m = aa(t);
          function $() {
            for (var V = -1, S = arguments.length, M = -1, U = l.length, H = N(U + S), Z = this && this !== xt && this instanceof $ ? m : t; ++M < U; )
              H[M] = l[M];
            for (; S--; )
              H[M++] = arguments[++V];
            return En(Z, d ? i : this, H);
          }
          return $;
        }
        function Yp(t) {
          return function(n, i, l) {
            return l && typeof l != "number" && Jt(n, i, l) && (i = l = r), n = Kr(n), i === r ? (i = n, n = 0) : i = Kr(i), l = l === r ? n < i ? 1 : -1 : Kr(l), rb(n, i, l, t);
          };
        }
        function Bl(t) {
          return function(n, i) {
            return typeof n == "string" && typeof i == "string" || (n = Zn(n), i = Zn(i)), t(n, i);
          };
        }
        function jp(t, n, i, l, d, m, $, V, S, M) {
          var U = n & D, H = U ? $ : r, Z = U ? r : $, ie = U ? m : r, ce = U ? r : m;
          n |= U ? F : O, n &= ~(U ? O : F), n & R || (n &= -4);
          var ye = [
            t,
            n,
            d,
            ie,
            H,
            ce,
            Z,
            V,
            S,
            M
          ], ae = i.apply(r, ye);
          return Yc(t) && sm(ae, ye), ae.placeholder = l, am(ae, t, n);
        }
        function Fc(t) {
          var n = _t[t];
          return function(i, l) {
            if (i = Zn(i), l = l == null ? 0 : Mt(_e(l), 292), l && ap(i)) {
              var d = (Me(i) + "e").split("e"), m = n(d[0] + "e" + (+d[1] + l));
              return d = (Me(m) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
            }
            return n(i);
          };
        }
        var gb = Ki && 1 / dl(new Ki([, -0]))[1] == Qe ? function(t) {
          return new Ki(t);
        } : ud;
        function Kp(t) {
          return function(n) {
            var i = Ft(n);
            return i == pe ? vc(n) : i == Dt ? B$(n) : T$(n, t(n));
          };
        }
        function zr(t, n, i, l, d, m, $, V) {
          var S = n & I;
          if (!S && typeof t != "function")
            throw new zn(c);
          var M = l ? l.length : 0;
          if (M || (n &= -97, l = d = r), $ = $ === r ? $ : gt(_e($), 0), V = V === r ? V : _e(V), M -= d ? d.length : 0, n & O) {
            var U = l, H = d;
            l = d = r;
          }
          var Z = S ? r : Hc(t), ie = [
            t,
            n,
            i,
            l,
            d,
            U,
            H,
            m,
            $,
            V
          ];
          if (Z && Rb(ie, Z), t = ie[0], n = ie[1], i = ie[2], l = ie[3], d = ie[4], V = ie[9] = ie[9] === r ? S ? 0 : t.length : gt(ie[9] - M, 0), !V && n & (D | q) && (n &= -25), !n || n == k)
            var ce = vb(t, n, i);
          else n == D || n == q ? ce = wb(t, n, V) : (n == F || n == (k | F)) && !d.length ? ce = _b(t, n, i, l) : ce = Ol.apply(r, ie);
          var ye = Z ? Ip : sm;
          return am(ye(ce, ie), t, n);
        }
        function Zp(t, n, i, l) {
          return t === r || ar(t, ji[i]) && !De.call(l, i) ? n : t;
        }
        function Xp(t, n, i, l, d, m) {
          return ot(t) && ot(n) && (m.set(n, t), Il(t, n, r, Xp, m), m.delete(n)), t;
        }
        function $b(t) {
          return ca(t) ? r : t;
        }
        function Jp(t, n, i, l, d, m) {
          var $ = i & T, V = t.length, S = n.length;
          if (V != S && !($ && S > V))
            return !1;
          var M = m.get(t), U = m.get(n);
          if (M && U)
            return M == n && U == t;
          var H = -1, Z = !0, ie = i & B ? new ii() : r;
          for (m.set(t, n), m.set(n, t); ++H < V; ) {
            var ce = t[H], ye = n[H];
            if (l)
              var ae = $ ? l(ye, ce, H, n, t, m) : l(ce, ye, H, t, n, m);
            if (ae !== r) {
              if (ae)
                continue;
              Z = !1;
              break;
            }
            if (ie) {
              if (!cc(n, function(Ee, xe) {
                if (!Zs(ie, xe) && (ce === Ee || d(ce, Ee, i, l, m)))
                  return ie.push(xe);
              })) {
                Z = !1;
                break;
              }
            } else if (!(ce === ye || d(ce, ye, i, l, m))) {
              Z = !1;
              break;
            }
          }
          return m.delete(t), m.delete(n), Z;
        }
        function yb(t, n, i, l, d, m, $) {
          switch (i) {
            case Yt:
              if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
                return !1;
              t = t.buffer, n = n.buffer;
            case cn:
              return !(t.byteLength != n.byteLength || !m(new wl(t), new wl(n)));
            case an:
            case nr:
            case ft:
              return ar(+t, +n);
            case Or:
              return t.name == n.name && t.message == n.message;
            case vr:
            case It:
              return t == n + "";
            case pe:
              var V = vc;
            case Dt:
              var S = l & T;
              if (V || (V = dl), t.size != n.size && !S)
                return !1;
              var M = $.get(t);
              if (M)
                return M == n;
              l |= B, $.set(t, n);
              var U = Jp(V(t), V(n), l, d, m, $);
              return $.delete(t), U;
            case Mn:
              if (ta)
                return ta.call(t) == ta.call(n);
          }
          return !1;
        }
        function bb(t, n, i, l, d, m) {
          var $ = i & T, V = Uc(t), S = V.length, M = Uc(n), U = M.length;
          if (S != U && !$)
            return !1;
          for (var H = S; H--; ) {
            var Z = V[H];
            if (!($ ? Z in n : De.call(n, Z)))
              return !1;
          }
          var ie = m.get(t), ce = m.get(n);
          if (ie && ce)
            return ie == n && ce == t;
          var ye = !0;
          m.set(t, n), m.set(n, t);
          for (var ae = $; ++H < S; ) {
            Z = V[H];
            var Ee = t[Z], xe = n[Z];
            if (l)
              var An = $ ? l(xe, Ee, Z, n, t, m) : l(Ee, xe, Z, t, n, m);
            if (!(An === r ? Ee === xe || d(Ee, xe, i, l, m) : An)) {
              ye = !1;
              break;
            }
            ae || (ae = Z == "constructor");
          }
          if (ye && !ae) {
            var Qt = t.constructor, xn = n.constructor;
            Qt != xn && "constructor" in t && "constructor" in n && !(typeof Qt == "function" && Qt instanceof Qt && typeof xn == "function" && xn instanceof xn) && (ye = !1);
          }
          return m.delete(t), m.delete(n), ye;
        }
        function Gr(t) {
          return Kc(om(t, r, hm), t + "");
        }
        function Uc(t) {
          return _p(t, Ct, zc);
        }
        function qc(t) {
          return _p(t, pn, Qp);
        }
        var Hc = Vl ? function(t) {
          return Vl.get(t);
        } : ud;
        function Pl(t) {
          for (var n = t.name + "", i = Zi[n], l = De.call(Zi, n) ? i.length : 0; l--; ) {
            var d = i[l], m = d.func;
            if (m == null || m == t)
              return d.name;
          }
          return n;
        }
        function es(t) {
          var n = De.call(h, "placeholder") ? h : t;
          return n.placeholder;
        }
        function le() {
          var t = h.iteratee || ad;
          return t = t === ad ? yp : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function Dl(t, n) {
          var i = t.__data__;
          return Ab(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
        }
        function Wc(t) {
          for (var n = Ct(t), i = n.length; i--; ) {
            var l = n[i], d = t[l];
            n[i] = [l, d, nm(d)];
          }
          return n;
        }
        function li(t, n) {
          var i = O$(t, n);
          return $p(i) ? i : r;
        }
        function Vb(t) {
          var n = De.call(t, ri), i = t[ri];
          try {
            t[ri] = r;
            var l = !0;
          } catch {
          }
          var d = ml.call(t);
          return l && (n ? t[ri] = i : delete t[ri]), d;
        }
        var zc = _c ? function(t) {
          return t == null ? [] : (t = We(t), _o(_c(t), function(n) {
            return ip.call(t, n);
          }));
        } : cd, Qp = _c ? function(t) {
          for (var n = []; t; )
            go(n, zc(t)), t = _l(t);
          return n;
        } : cd, Ft = Xt;
        (gc && Ft(new gc(new ArrayBuffer(1))) != Yt || Js && Ft(new Js()) != pe || $c && Ft($c.resolve()) != Dn || Ki && Ft(new Ki()) != Dt || Qs && Ft(new Qs()) != un) && (Ft = function(t) {
          var n = Xt(t), i = n == nt ? t.constructor : r, l = i ? ui(i) : "";
          if (l)
            switch (l) {
              case iy:
                return Yt;
              case sy:
                return pe;
              case ay:
                return Dn;
              case ly:
                return Dt;
              case uy:
                return un;
            }
          return n;
        });
        function Cb(t, n, i) {
          for (var l = -1, d = i.length; ++l < d; ) {
            var m = i[l], $ = m.size;
            switch (m.type) {
              case "drop":
                t += $;
                break;
              case "dropRight":
                n -= $;
                break;
              case "take":
                n = Mt(n, t + $);
                break;
              case "takeRight":
                t = gt(t, n - $);
                break;
            }
          }
          return { start: t, end: n };
        }
        function Eb(t) {
          var n = t.match(_r);
          return n ? n[1].split(se) : [];
        }
        function em(t, n, i) {
          n = Co(n, t);
          for (var l = -1, d = n.length, m = !1; ++l < d; ) {
            var $ = sr(n[l]);
            if (!(m = t != null && i(t, $)))
              break;
            t = t[$];
          }
          return m || ++l != d ? m : (d = t == null ? 0 : t.length, !!d && zl(d) && Yr($, d) && (me(t) || ci(t)));
        }
        function Sb(t) {
          var n = t.length, i = new t.constructor(n);
          return n && typeof t[0] == "string" && De.call(t, "index") && (i.index = t.index, i.input = t.input), i;
        }
        function tm(t) {
          return typeof t.constructor == "function" && !la(t) ? Xi(_l(t)) : {};
        }
        function kb(t, n, i) {
          var l = t.constructor;
          switch (n) {
            case cn:
              return Dc(t);
            case an:
            case nr:
              return new l(+t);
            case Yt:
              return cb(t, i);
            case yn:
            case rr:
            case bn:
            case so:
            case Vn:
            case ao:
            case Rr:
            case Nr:
            case Fn:
              return Pp(t, i);
            case pe:
              return new l();
            case ft:
            case It:
              return new l(t);
            case vr:
              return db(t);
            case Dt:
              return new l();
            case Mn:
              return fb(t);
          }
        }
        function Tb(t, n) {
          var i = n.length;
          if (!i)
            return t;
          var l = i - 1;
          return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), t.replace(Bi, `{
/* [wrapped with ` + n + `] */
`);
        }
        function Ib(t) {
          return me(t) || ci(t) || !!(sp && t && t[sp]);
        }
        function Yr(t, n) {
          var i = typeof t;
          return n = n ?? Vt, !!n && (i == "number" || i != "symbol" && Di.test(t)) && t > -1 && t % 1 == 0 && t < n;
        }
        function Jt(t, n, i) {
          if (!ot(i))
            return !1;
          var l = typeof n;
          return (l == "number" ? hn(i) && Yr(n, i.length) : l == "string" && n in i) ? ar(i[n], t) : !1;
        }
        function Gc(t, n) {
          if (me(t))
            return !1;
          var i = typeof t;
          return i == "number" || i == "symbol" || i == "boolean" || t == null || In(t) ? !0 : fo.test(t) || !co.test(t) || n != null && t in We(n);
        }
        function Ab(t) {
          var n = typeof t;
          return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
        }
        function Yc(t) {
          var n = Pl(t), i = h[n];
          if (typeof i != "function" || !(n in ke.prototype))
            return !1;
          if (t === i)
            return !0;
          var l = Hc(i);
          return !!l && t === l[0];
        }
        function xb(t) {
          return !!np && np in t;
        }
        var Lb = hl ? jr : dd;
        function la(t) {
          var n = t && t.constructor, i = typeof n == "function" && n.prototype || ji;
          return t === i;
        }
        function nm(t) {
          return t === t && !ot(t);
        }
        function rm(t, n) {
          return function(i) {
            return i == null ? !1 : i[t] === n && (n !== r || t in We(i));
          };
        }
        function Ob(t) {
          var n = Hl(t, function(l) {
            return i.size === w && i.clear(), l;
          }), i = n.cache;
          return n;
        }
        function Rb(t, n) {
          var i = t[1], l = n[1], d = i | l, m = d < (k | I | j), $ = l == j && i == D || l == j && i == Y && t[7].length <= n[8] || l == (j | Y) && n[7].length <= n[8] && i == D;
          if (!(m || $))
            return t;
          l & k && (t[2] = n[2], d |= i & k ? 0 : R);
          var V = n[3];
          if (V) {
            var S = t[3];
            t[3] = S ? Mp(S, V, n[4]) : V, t[4] = S ? $o(t[3], g) : n[4];
          }
          return V = n[5], V && (S = t[5], t[5] = S ? Fp(S, V, n[6]) : V, t[6] = S ? $o(t[5], g) : n[6]), V = n[7], V && (t[7] = V), l & j && (t[8] = t[8] == null ? n[8] : Mt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
        }
        function Nb(t) {
          var n = [];
          if (t != null)
            for (var i in We(t))
              n.push(i);
          return n;
        }
        function Bb(t) {
          return ml.call(t);
        }
        function om(t, n, i) {
          return n = gt(n === r ? t.length - 1 : n, 0), function() {
            for (var l = arguments, d = -1, m = gt(l.length - n, 0), $ = N(m); ++d < m; )
              $[d] = l[n + d];
            d = -1;
            for (var V = N(n + 1); ++d < n; )
              V[d] = l[d];
            return V[n] = i($), En(t, this, V);
          };
        }
        function im(t, n) {
          return n.length < 2 ? t : ai(t, jn(n, 0, -1));
        }
        function Pb(t, n) {
          for (var i = t.length, l = Mt(n.length, i), d = fn(t); l--; ) {
            var m = n[l];
            t[l] = Yr(m, i) ? d[m] : r;
          }
          return t;
        }
        function jc(t, n) {
          if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
            return t[n];
        }
        var sm = lm(Ip), ua = J$ || function(t, n) {
          return xt.setTimeout(t, n);
        }, Kc = lm(sb);
        function am(t, n, i) {
          var l = n + "";
          return Kc(t, Tb(l, Db(Eb(l), i)));
        }
        function lm(t) {
          var n = 0, i = 0;
          return function() {
            var l = ny(), d = we - (l - i);
            if (i = l, d > 0) {
              if (++n >= Ce)
                return arguments[0];
            } else
              n = 0;
            return t.apply(r, arguments);
          };
        }
        function Ml(t, n) {
          var i = -1, l = t.length, d = l - 1;
          for (n = n === r ? l : n; ++i < n; ) {
            var m = xc(i, d), $ = t[m];
            t[m] = t[i], t[i] = $;
          }
          return t.length = n, t;
        }
        var um = Ob(function(t) {
          var n = [];
          return t.charCodeAt(0) === 46 && n.push(""), t.replace(Ni, function(i, l, d, m) {
            n.push(d ? m.replace(Ae, "$1") : l || i);
          }), n;
        });
        function sr(t) {
          if (typeof t == "string" || In(t))
            return t;
          var n = t + "";
          return n == "0" && 1 / t == -Qe ? "-0" : n;
        }
        function ui(t) {
          if (t != null) {
            try {
              return pl.call(t);
            } catch {
            }
            try {
              return t + "";
            } catch {
            }
          }
          return "";
        }
        function Db(t, n) {
          return Sn(Fe, function(i) {
            var l = "_." + i[0];
            n & i[1] && !ul(t, l) && t.push(l);
          }), t.sort();
        }
        function cm(t) {
          if (t instanceof ke)
            return t.clone();
          var n = new Gn(t.__wrapped__, t.__chain__);
          return n.__actions__ = fn(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
        }
        function Mb(t, n, i) {
          (i ? Jt(t, n, i) : n === r) ? n = 1 : n = gt(_e(n), 0);
          var l = t == null ? 0 : t.length;
          if (!l || n < 1)
            return [];
          for (var d = 0, m = 0, $ = N(yl(l / n)); d < l; )
            $[m++] = jn(t, d, d += n);
          return $;
        }
        function Fb(t) {
          for (var n = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++n < i; ) {
            var m = t[n];
            m && (d[l++] = m);
          }
          return d;
        }
        function Ub() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var n = N(t - 1), i = arguments[0], l = t; l--; )
            n[l - 1] = arguments[l];
          return go(me(i) ? fn(i) : [i], Lt(n, 1));
        }
        var qb = Ve(function(t, n) {
          return ut(t) ? ra(t, Lt(n, 1, ut, !0)) : [];
        }), Hb = Ve(function(t, n) {
          var i = Kn(n);
          return ut(i) && (i = r), ut(t) ? ra(t, Lt(n, 1, ut, !0), le(i, 2)) : [];
        }), Wb = Ve(function(t, n) {
          var i = Kn(n);
          return ut(i) && (i = r), ut(t) ? ra(t, Lt(n, 1, ut, !0), r, i) : [];
        });
        function zb(t, n, i) {
          var l = t == null ? 0 : t.length;
          return l ? (n = i || n === r ? 1 : _e(n), jn(t, n < 0 ? 0 : n, l)) : [];
        }
        function Gb(t, n, i) {
          var l = t == null ? 0 : t.length;
          return l ? (n = i || n === r ? 1 : _e(n), n = l - n, jn(t, 0, n < 0 ? 0 : n)) : [];
        }
        function Yb(t, n) {
          return t && t.length ? xl(t, le(n, 3), !0, !0) : [];
        }
        function jb(t, n) {
          return t && t.length ? xl(t, le(n, 3), !0) : [];
        }
        function Kb(t, n, i, l) {
          var d = t == null ? 0 : t.length;
          return d ? (i && typeof i != "number" && Jt(t, n, i) && (i = 0, l = d), Uy(t, n, i, l)) : [];
        }
        function dm(t, n, i) {
          var l = t == null ? 0 : t.length;
          if (!l)
            return -1;
          var d = i == null ? 0 : _e(i);
          return d < 0 && (d = gt(l + d, 0)), cl(t, le(n, 3), d);
        }
        function fm(t, n, i) {
          var l = t == null ? 0 : t.length;
          if (!l)
            return -1;
          var d = l - 1;
          return i !== r && (d = _e(i), d = i < 0 ? gt(l + d, 0) : Mt(d, l - 1)), cl(t, le(n, 3), d, !0);
        }
        function hm(t) {
          var n = t == null ? 0 : t.length;
          return n ? Lt(t, 1) : [];
        }
        function Zb(t) {
          var n = t == null ? 0 : t.length;
          return n ? Lt(t, Qe) : [];
        }
        function Xb(t, n) {
          var i = t == null ? 0 : t.length;
          return i ? (n = n === r ? 1 : _e(n), Lt(t, n)) : [];
        }
        function Jb(t) {
          for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
            var d = t[n];
            $r(l, d[0], d[1]);
          }
          return l;
        }
        function pm(t) {
          return t && t.length ? t[0] : r;
        }
        function Qb(t, n, i) {
          var l = t == null ? 0 : t.length;
          if (!l)
            return -1;
          var d = i == null ? 0 : _e(i);
          return d < 0 && (d = gt(l + d, 0)), Wi(t, n, d);
        }
        function eV(t) {
          var n = t == null ? 0 : t.length;
          return n ? jn(t, 0, -1) : [];
        }
        var tV = Ve(function(t) {
          var n = et(t, Bc);
          return n.length && n[0] === t[0] ? Sc(n) : [];
        }), nV = Ve(function(t) {
          var n = Kn(t), i = et(t, Bc);
          return n === Kn(i) ? n = r : i.pop(), i.length && i[0] === t[0] ? Sc(i, le(n, 2)) : [];
        }), rV = Ve(function(t) {
          var n = Kn(t), i = et(t, Bc);
          return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === t[0] ? Sc(i, r, n) : [];
        });
        function oV(t, n) {
          return t == null ? "" : ey.call(t, n);
        }
        function Kn(t) {
          var n = t == null ? 0 : t.length;
          return n ? t[n - 1] : r;
        }
        function iV(t, n, i) {
          var l = t == null ? 0 : t.length;
          if (!l)
            return -1;
          var d = l;
          return i !== r && (d = _e(i), d = d < 0 ? gt(l + d, 0) : Mt(d, l - 1)), n === n ? D$(t, n, d) : cl(t, jh, d, !0);
        }
        function sV(t, n) {
          return t && t.length ? Ep(t, _e(n)) : r;
        }
        var aV = Ve(mm);
        function mm(t, n) {
          return t && t.length && n && n.length ? Ac(t, n) : t;
        }
        function lV(t, n, i) {
          return t && t.length && n && n.length ? Ac(t, n, le(i, 2)) : t;
        }
        function uV(t, n, i) {
          return t && t.length && n && n.length ? Ac(t, n, r, i) : t;
        }
        var cV = Gr(function(t, n) {
          var i = t == null ? 0 : t.length, l = bc(t, n);
          return Tp(t, et(n, function(d) {
            return Yr(d, i) ? +d : d;
          }).sort(Dp)), l;
        });
        function dV(t, n) {
          var i = [];
          if (!(t && t.length))
            return i;
          var l = -1, d = [], m = t.length;
          for (n = le(n, 3); ++l < m; ) {
            var $ = t[l];
            n($, l, t) && (i.push($), d.push(l));
          }
          return Tp(t, d), i;
        }
        function Zc(t) {
          return t == null ? t : oy.call(t);
        }
        function fV(t, n, i) {
          var l = t == null ? 0 : t.length;
          return l ? (i && typeof i != "number" && Jt(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : _e(n), i = i === r ? l : _e(i)), jn(t, n, i)) : [];
        }
        function hV(t, n) {
          return Al(t, n);
        }
        function pV(t, n, i) {
          return Oc(t, n, le(i, 2));
        }
        function mV(t, n) {
          var i = t == null ? 0 : t.length;
          if (i) {
            var l = Al(t, n);
            if (l < i && ar(t[l], n))
              return l;
          }
          return -1;
        }
        function vV(t, n) {
          return Al(t, n, !0);
        }
        function wV(t, n, i) {
          return Oc(t, n, le(i, 2), !0);
        }
        function _V(t, n) {
          var i = t == null ? 0 : t.length;
          if (i) {
            var l = Al(t, n, !0) - 1;
            if (ar(t[l], n))
              return l;
          }
          return -1;
        }
        function gV(t) {
          return t && t.length ? Ap(t) : [];
        }
        function $V(t, n) {
          return t && t.length ? Ap(t, le(n, 2)) : [];
        }
        function yV(t) {
          var n = t == null ? 0 : t.length;
          return n ? jn(t, 1, n) : [];
        }
        function bV(t, n, i) {
          return t && t.length ? (n = i || n === r ? 1 : _e(n), jn(t, 0, n < 0 ? 0 : n)) : [];
        }
        function VV(t, n, i) {
          var l = t == null ? 0 : t.length;
          return l ? (n = i || n === r ? 1 : _e(n), n = l - n, jn(t, n < 0 ? 0 : n, l)) : [];
        }
        function CV(t, n) {
          return t && t.length ? xl(t, le(n, 3), !1, !0) : [];
        }
        function EV(t, n) {
          return t && t.length ? xl(t, le(n, 3)) : [];
        }
        var SV = Ve(function(t) {
          return Vo(Lt(t, 1, ut, !0));
        }), kV = Ve(function(t) {
          var n = Kn(t);
          return ut(n) && (n = r), Vo(Lt(t, 1, ut, !0), le(n, 2));
        }), TV = Ve(function(t) {
          var n = Kn(t);
          return n = typeof n == "function" ? n : r, Vo(Lt(t, 1, ut, !0), r, n);
        });
        function IV(t) {
          return t && t.length ? Vo(t) : [];
        }
        function AV(t, n) {
          return t && t.length ? Vo(t, le(n, 2)) : [];
        }
        function xV(t, n) {
          return n = typeof n == "function" ? n : r, t && t.length ? Vo(t, r, n) : [];
        }
        function Xc(t) {
          if (!(t && t.length))
            return [];
          var n = 0;
          return t = _o(t, function(i) {
            if (ut(i))
              return n = gt(i.length, n), !0;
          }), pc(n, function(i) {
            return et(t, dc(i));
          });
        }
        function vm(t, n) {
          if (!(t && t.length))
            return [];
          var i = Xc(t);
          return n == null ? i : et(i, function(l) {
            return En(n, r, l);
          });
        }
        var LV = Ve(function(t, n) {
          return ut(t) ? ra(t, n) : [];
        }), OV = Ve(function(t) {
          return Nc(_o(t, ut));
        }), RV = Ve(function(t) {
          var n = Kn(t);
          return ut(n) && (n = r), Nc(_o(t, ut), le(n, 2));
        }), NV = Ve(function(t) {
          var n = Kn(t);
          return n = typeof n == "function" ? n : r, Nc(_o(t, ut), r, n);
        }), BV = Ve(Xc);
        function PV(t, n) {
          return Rp(t || [], n || [], na);
        }
        function DV(t, n) {
          return Rp(t || [], n || [], sa);
        }
        var MV = Ve(function(t) {
          var n = t.length, i = n > 1 ? t[n - 1] : r;
          return i = typeof i == "function" ? (t.pop(), i) : r, vm(t, i);
        });
        function wm(t) {
          var n = h(t);
          return n.__chain__ = !0, n;
        }
        function FV(t, n) {
          return n(t), t;
        }
        function Fl(t, n) {
          return n(t);
        }
        var UV = Gr(function(t) {
          var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(m) {
            return bc(m, t);
          };
          return n > 1 || this.__actions__.length || !(l instanceof ke) || !Yr(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
            func: Fl,
            args: [d],
            thisArg: r
          }), new Gn(l, this.__chain__).thru(function(m) {
            return n && !m.length && m.push(r), m;
          }));
        });
        function qV() {
          return wm(this);
        }
        function HV() {
          return new Gn(this.value(), this.__chain__);
        }
        function WV() {
          this.__values__ === r && (this.__values__ = xm(this.value()));
          var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
          return { done: t, value: n };
        }
        function zV() {
          return this;
        }
        function GV(t) {
          for (var n, i = this; i instanceof El; ) {
            var l = cm(i);
            l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
            var d = l;
            i = i.__wrapped__;
          }
          return d.__wrapped__ = t, n;
        }
        function YV() {
          var t = this.__wrapped__;
          if (t instanceof ke) {
            var n = t;
            return this.__actions__.length && (n = new ke(this)), n = n.reverse(), n.__actions__.push({
              func: Fl,
              args: [Zc],
              thisArg: r
            }), new Gn(n, this.__chain__);
          }
          return this.thru(Zc);
        }
        function jV() {
          return Op(this.__wrapped__, this.__actions__);
        }
        var KV = Ll(function(t, n, i) {
          De.call(t, i) ? ++t[i] : $r(t, i, 1);
        });
        function ZV(t, n, i) {
          var l = me(t) ? Gh : Fy;
          return i && Jt(t, n, i) && (n = r), l(t, le(n, 3));
        }
        function XV(t, n) {
          var i = me(t) ? _o : vp;
          return i(t, le(n, 3));
        }
        var JV = Wp(dm), QV = Wp(fm);
        function eC(t, n) {
          return Lt(Ul(t, n), 1);
        }
        function tC(t, n) {
          return Lt(Ul(t, n), Qe);
        }
        function nC(t, n, i) {
          return i = i === r ? 1 : _e(i), Lt(Ul(t, n), i);
        }
        function _m(t, n) {
          var i = me(t) ? Sn : bo;
          return i(t, le(n, 3));
        }
        function gm(t, n) {
          var i = me(t) ? y$ : mp;
          return i(t, le(n, 3));
        }
        var rC = Ll(function(t, n, i) {
          De.call(t, i) ? t[i].push(n) : $r(t, i, [n]);
        });
        function oC(t, n, i, l) {
          t = hn(t) ? t : ns(t), i = i && !l ? _e(i) : 0;
          var d = t.length;
          return i < 0 && (i = gt(d + i, 0)), Gl(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && Wi(t, n, i) > -1;
        }
        var iC = Ve(function(t, n, i) {
          var l = -1, d = typeof n == "function", m = hn(t) ? N(t.length) : [];
          return bo(t, function($) {
            m[++l] = d ? En(n, $, i) : oa($, n, i);
          }), m;
        }), sC = Ll(function(t, n, i) {
          $r(t, i, n);
        });
        function Ul(t, n) {
          var i = me(t) ? et : bp;
          return i(t, le(n, 3));
        }
        function aC(t, n, i, l) {
          return t == null ? [] : (me(n) || (n = n == null ? [] : [n]), i = l ? r : i, me(i) || (i = i == null ? [] : [i]), Sp(t, n, i));
        }
        var lC = Ll(function(t, n, i) {
          t[i ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function uC(t, n, i) {
          var l = me(t) ? uc : Zh, d = arguments.length < 3;
          return l(t, le(n, 4), i, d, bo);
        }
        function cC(t, n, i) {
          var l = me(t) ? b$ : Zh, d = arguments.length < 3;
          return l(t, le(n, 4), i, d, mp);
        }
        function dC(t, n) {
          var i = me(t) ? _o : vp;
          return i(t, Wl(le(n, 3)));
        }
        function fC(t) {
          var n = me(t) ? dp : ob;
          return n(t);
        }
        function hC(t, n, i) {
          (i ? Jt(t, n, i) : n === r) ? n = 1 : n = _e(n);
          var l = me(t) ? Ny : ib;
          return l(t, n);
        }
        function pC(t) {
          var n = me(t) ? By : ab;
          return n(t);
        }
        function mC(t) {
          if (t == null)
            return 0;
          if (hn(t))
            return Gl(t) ? Gi(t) : t.length;
          var n = Ft(t);
          return n == pe || n == Dt ? t.size : Tc(t).length;
        }
        function vC(t, n, i) {
          var l = me(t) ? cc : lb;
          return i && Jt(t, n, i) && (n = r), l(t, le(n, 3));
        }
        var wC = Ve(function(t, n) {
          if (t == null)
            return [];
          var i = n.length;
          return i > 1 && Jt(t, n[0], n[1]) ? n = [] : i > 2 && Jt(n[0], n[1], n[2]) && (n = [n[0]]), Sp(t, Lt(n, 1), []);
        }), ql = X$ || function() {
          return xt.Date.now();
        };
        function _C(t, n) {
          if (typeof n != "function")
            throw new zn(c);
          return t = _e(t), function() {
            if (--t < 1)
              return n.apply(this, arguments);
          };
        }
        function $m(t, n, i) {
          return n = i ? r : n, n = t && n == null ? t.length : n, zr(t, j, r, r, r, r, n);
        }
        function ym(t, n) {
          var i;
          if (typeof n != "function")
            throw new zn(c);
          return t = _e(t), function() {
            return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = r), i;
          };
        }
        var Jc = Ve(function(t, n, i) {
          var l = k;
          if (i.length) {
            var d = $o(i, es(Jc));
            l |= F;
          }
          return zr(t, l, n, i, d);
        }), bm = Ve(function(t, n, i) {
          var l = k | I;
          if (i.length) {
            var d = $o(i, es(bm));
            l |= F;
          }
          return zr(n, l, t, i, d);
        });
        function Vm(t, n, i) {
          n = i ? r : n;
          var l = zr(t, D, r, r, r, r, r, n);
          return l.placeholder = Vm.placeholder, l;
        }
        function Cm(t, n, i) {
          n = i ? r : n;
          var l = zr(t, q, r, r, r, r, r, n);
          return l.placeholder = Cm.placeholder, l;
        }
        function Em(t, n, i) {
          var l, d, m, $, V, S, M = 0, U = !1, H = !1, Z = !0;
          if (typeof t != "function")
            throw new zn(c);
          n = Zn(n) || 0, ot(i) && (U = !!i.leading, H = "maxWait" in i, m = H ? gt(Zn(i.maxWait) || 0, n) : m, Z = "trailing" in i ? !!i.trailing : Z);
          function ie(ct) {
            var lr = l, Zr = d;
            return l = d = r, M = ct, $ = t.apply(Zr, lr), $;
          }
          function ce(ct) {
            return M = ct, V = ua(Ee, n), U ? ie(ct) : $;
          }
          function ye(ct) {
            var lr = ct - S, Zr = ct - M, zm = n - lr;
            return H ? Mt(zm, m - Zr) : zm;
          }
          function ae(ct) {
            var lr = ct - S, Zr = ct - M;
            return S === r || lr >= n || lr < 0 || H && Zr >= m;
          }
          function Ee() {
            var ct = ql();
            if (ae(ct))
              return xe(ct);
            V = ua(Ee, ye(ct));
          }
          function xe(ct) {
            return V = r, Z && l ? ie(ct) : (l = d = r, $);
          }
          function An() {
            V !== r && Np(V), M = 0, l = S = d = V = r;
          }
          function Qt() {
            return V === r ? $ : xe(ql());
          }
          function xn() {
            var ct = ql(), lr = ae(ct);
            if (l = arguments, d = this, S = ct, lr) {
              if (V === r)
                return ce(S);
              if (H)
                return Np(V), V = ua(Ee, n), ie(S);
            }
            return V === r && (V = ua(Ee, n)), $;
          }
          return xn.cancel = An, xn.flush = Qt, xn;
        }
        var gC = Ve(function(t, n) {
          return pp(t, 1, n);
        }), $C = Ve(function(t, n, i) {
          return pp(t, Zn(n) || 0, i);
        });
        function yC(t) {
          return zr(t, X);
        }
        function Hl(t, n) {
          if (typeof t != "function" || n != null && typeof n != "function")
            throw new zn(c);
          var i = function() {
            var l = arguments, d = n ? n.apply(this, l) : l[0], m = i.cache;
            if (m.has(d))
              return m.get(d);
            var $ = t.apply(this, l);
            return i.cache = m.set(d, $) || m, $;
          };
          return i.cache = new (Hl.Cache || Wr)(), i;
        }
        Hl.Cache = Wr;
        function Wl(t) {
          if (typeof t != "function")
            throw new zn(c);
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
        function bC(t) {
          return ym(2, t);
        }
        var VC = ub(function(t, n) {
          n = n.length == 1 && me(n[0]) ? et(n[0], kn(le())) : et(Lt(n, 1), kn(le()));
          var i = n.length;
          return Ve(function(l) {
            for (var d = -1, m = Mt(l.length, i); ++d < m; )
              l[d] = n[d].call(this, l[d]);
            return En(t, this, l);
          });
        }), Qc = Ve(function(t, n) {
          var i = $o(n, es(Qc));
          return zr(t, F, r, n, i);
        }), Sm = Ve(function(t, n) {
          var i = $o(n, es(Sm));
          return zr(t, O, r, n, i);
        }), CC = Gr(function(t, n) {
          return zr(t, Y, r, r, r, n);
        });
        function EC(t, n) {
          if (typeof t != "function")
            throw new zn(c);
          return n = n === r ? n : _e(n), Ve(t, n);
        }
        function SC(t, n) {
          if (typeof t != "function")
            throw new zn(c);
          return n = n == null ? 0 : gt(_e(n), 0), Ve(function(i) {
            var l = i[n], d = Eo(i, 0, n);
            return l && go(d, l), En(t, this, d);
          });
        }
        function kC(t, n, i) {
          var l = !0, d = !0;
          if (typeof t != "function")
            throw new zn(c);
          return ot(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), Em(t, n, {
            leading: l,
            maxWait: n,
            trailing: d
          });
        }
        function TC(t) {
          return $m(t, 1);
        }
        function IC(t, n) {
          return Qc(Pc(n), t);
        }
        function AC() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return me(t) ? t : [t];
        }
        function xC(t) {
          return Yn(t, C);
        }
        function LC(t, n) {
          return n = typeof n == "function" ? n : r, Yn(t, C, n);
        }
        function OC(t) {
          return Yn(t, y | C);
        }
        function RC(t, n) {
          return n = typeof n == "function" ? n : r, Yn(t, y | C, n);
        }
        function NC(t, n) {
          return n == null || hp(t, n, Ct(n));
        }
        function ar(t, n) {
          return t === n || t !== t && n !== n;
        }
        var BC = Bl(Ec), PC = Bl(function(t, n) {
          return t >= n;
        }), ci = gp(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? gp : function(t) {
          return st(t) && De.call(t, "callee") && !ip.call(t, "callee");
        }, me = N.isArray, DC = Fh ? kn(Fh) : Gy;
        function hn(t) {
          return t != null && zl(t.length) && !jr(t);
        }
        function ut(t) {
          return st(t) && hn(t);
        }
        function MC(t) {
          return t === !0 || t === !1 || st(t) && Xt(t) == an;
        }
        var So = Q$ || dd, FC = Uh ? kn(Uh) : Yy;
        function UC(t) {
          return st(t) && t.nodeType === 1 && !ca(t);
        }
        function qC(t) {
          if (t == null)
            return !0;
          if (hn(t) && (me(t) || typeof t == "string" || typeof t.splice == "function" || So(t) || ts(t) || ci(t)))
            return !t.length;
          var n = Ft(t);
          if (n == pe || n == Dt)
            return !t.size;
          if (la(t))
            return !Tc(t).length;
          for (var i in t)
            if (De.call(t, i))
              return !1;
          return !0;
        }
        function HC(t, n) {
          return ia(t, n);
        }
        function WC(t, n, i) {
          i = typeof i == "function" ? i : r;
          var l = i ? i(t, n) : r;
          return l === r ? ia(t, n, r, i) : !!l;
        }
        function ed(t) {
          if (!st(t))
            return !1;
          var n = Xt(t);
          return n == Or || n == Ge || typeof t.message == "string" && typeof t.name == "string" && !ca(t);
        }
        function zC(t) {
          return typeof t == "number" && ap(t);
        }
        function jr(t) {
          if (!ot(t))
            return !1;
          var n = Xt(t);
          return n == Ue || n == oo || n == sn || n == io;
        }
        function km(t) {
          return typeof t == "number" && t == _e(t);
        }
        function zl(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Vt;
        }
        function ot(t) {
          var n = typeof t;
          return t != null && (n == "object" || n == "function");
        }
        function st(t) {
          return t != null && typeof t == "object";
        }
        var Tm = qh ? kn(qh) : Ky;
        function GC(t, n) {
          return t === n || kc(t, n, Wc(n));
        }
        function YC(t, n, i) {
          return i = typeof i == "function" ? i : r, kc(t, n, Wc(n), i);
        }
        function jC(t) {
          return Im(t) && t != +t;
        }
        function KC(t) {
          if (Lb(t))
            throw new fe(u);
          return $p(t);
        }
        function ZC(t) {
          return t === null;
        }
        function XC(t) {
          return t == null;
        }
        function Im(t) {
          return typeof t == "number" || st(t) && Xt(t) == ft;
        }
        function ca(t) {
          if (!st(t) || Xt(t) != nt)
            return !1;
          var n = _l(t);
          if (n === null)
            return !0;
          var i = De.call(n, "constructor") && n.constructor;
          return typeof i == "function" && i instanceof i && pl.call(i) == Y$;
        }
        var td = Hh ? kn(Hh) : Zy;
        function JC(t) {
          return km(t) && t >= -Vt && t <= Vt;
        }
        var Am = Wh ? kn(Wh) : Xy;
        function Gl(t) {
          return typeof t == "string" || !me(t) && st(t) && Xt(t) == It;
        }
        function In(t) {
          return typeof t == "symbol" || st(t) && Xt(t) == Mn;
        }
        var ts = zh ? kn(zh) : Jy;
        function QC(t) {
          return t === r;
        }
        function eE(t) {
          return st(t) && Ft(t) == un;
        }
        function tE(t) {
          return st(t) && Xt(t) == wr;
        }
        var nE = Bl(Ic), rE = Bl(function(t, n) {
          return t <= n;
        });
        function xm(t) {
          if (!t)
            return [];
          if (hn(t))
            return Gl(t) ? or(t) : fn(t);
          if (Xs && t[Xs])
            return N$(t[Xs]());
          var n = Ft(t), i = n == pe ? vc : n == Dt ? dl : ns;
          return i(t);
        }
        function Kr(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = Zn(t), t === Qe || t === -Qe) {
            var n = t < 0 ? -1 : 1;
            return n * Go;
          }
          return t === t ? t : 0;
        }
        function _e(t) {
          var n = Kr(t), i = n % 1;
          return n === n ? i ? n - i : n : 0;
        }
        function Lm(t) {
          return t ? si(_e(t), 0, te) : 0;
        }
        function Zn(t) {
          if (typeof t == "number")
            return t;
          if (In(t))
            return A;
          if (ot(t)) {
            var n = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = ot(n) ? n + "" : n;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = Xh(t);
          var i = Ko.test(t);
          return i || Pi.test(t) ? _$(t.slice(2), i ? 2 : 8) : vo.test(t) ? A : +t;
        }
        function Om(t) {
          return br(t, pn(t));
        }
        function oE(t) {
          return t ? si(_e(t), -Vt, Vt) : t === 0 ? t : 0;
        }
        function Me(t) {
          return t == null ? "" : Tn(t);
        }
        var iE = Ji(function(t, n) {
          if (la(n) || hn(n)) {
            br(n, Ct(n), t);
            return;
          }
          for (var i in n)
            De.call(n, i) && na(t, i, n[i]);
        }), Rm = Ji(function(t, n) {
          br(n, pn(n), t);
        }), Nm = Ji(function(t, n, i, l) {
          br(n, pn(n), t, l);
        }), nd = Ji(function(t, n, i, l) {
          br(n, Ct(n), t, l);
        }), sE = Gr(bc);
        function aE(t, n) {
          var i = Xi(t);
          return n == null ? i : fp(i, n);
        }
        var lE = Ve(function(t, n) {
          t = We(t);
          var i = -1, l = n.length, d = l > 2 ? n[2] : r;
          for (d && Jt(n[0], n[1], d) && (l = 1); ++i < l; )
            for (var m = n[i], $ = pn(m), V = -1, S = $.length; ++V < S; ) {
              var M = $[V], U = t[M];
              (U === r || ar(U, ji[M]) && !De.call(t, M)) && (t[M] = m[M]);
            }
          return t;
        }), uE = Ve(function(t) {
          return t.push(r, Xp), En(Bm, r, t);
        });
        function cE(t, n) {
          return Yh(t, le(n, 3), yr);
        }
        function dE(t, n) {
          return Yh(t, le(n, 3), Cc);
        }
        function fE(t, n) {
          return t == null ? t : Vc(t, le(n, 3), pn);
        }
        function hE(t, n) {
          return t == null ? t : wp(t, le(n, 3), pn);
        }
        function pE(t, n) {
          return t && yr(t, le(n, 3));
        }
        function mE(t, n) {
          return t && Cc(t, le(n, 3));
        }
        function vE(t) {
          return t == null ? [] : Tl(t, Ct(t));
        }
        function wE(t) {
          return t == null ? [] : Tl(t, pn(t));
        }
        function rd(t, n, i) {
          var l = t == null ? r : ai(t, n);
          return l === r ? i : l;
        }
        function _E(t, n) {
          return t != null && em(t, n, qy);
        }
        function od(t, n) {
          return t != null && em(t, n, Hy);
        }
        var gE = Gp(function(t, n, i) {
          n != null && typeof n.toString != "function" && (n = ml.call(n)), t[n] = i;
        }, sd(mn)), $E = Gp(function(t, n, i) {
          n != null && typeof n.toString != "function" && (n = ml.call(n)), De.call(t, n) ? t[n].push(i) : t[n] = [i];
        }, le), yE = Ve(oa);
        function Ct(t) {
          return hn(t) ? cp(t) : Tc(t);
        }
        function pn(t) {
          return hn(t) ? cp(t, !0) : Qy(t);
        }
        function bE(t, n) {
          var i = {};
          return n = le(n, 3), yr(t, function(l, d, m) {
            $r(i, n(l, d, m), l);
          }), i;
        }
        function VE(t, n) {
          var i = {};
          return n = le(n, 3), yr(t, function(l, d, m) {
            $r(i, d, n(l, d, m));
          }), i;
        }
        var CE = Ji(function(t, n, i) {
          Il(t, n, i);
        }), Bm = Ji(function(t, n, i, l) {
          Il(t, n, i, l);
        }), EE = Gr(function(t, n) {
          var i = {};
          if (t == null)
            return i;
          var l = !1;
          n = et(n, function(m) {
            return m = Co(m, t), l || (l = m.length > 1), m;
          }), br(t, qc(t), i), l && (i = Yn(i, y | b | C, $b));
          for (var d = n.length; d--; )
            Rc(i, n[d]);
          return i;
        });
        function SE(t, n) {
          return Pm(t, Wl(le(n)));
        }
        var kE = Gr(function(t, n) {
          return t == null ? {} : tb(t, n);
        });
        function Pm(t, n) {
          if (t == null)
            return {};
          var i = et(qc(t), function(l) {
            return [l];
          });
          return n = le(n), kp(t, i, function(l, d) {
            return n(l, d[0]);
          });
        }
        function TE(t, n, i) {
          n = Co(n, t);
          var l = -1, d = n.length;
          for (d || (d = 1, t = r); ++l < d; ) {
            var m = t == null ? r : t[sr(n[l])];
            m === r && (l = d, m = i), t = jr(m) ? m.call(t) : m;
          }
          return t;
        }
        function IE(t, n, i) {
          return t == null ? t : sa(t, n, i);
        }
        function AE(t, n, i, l) {
          return l = typeof l == "function" ? l : r, t == null ? t : sa(t, n, i, l);
        }
        var Dm = Kp(Ct), Mm = Kp(pn);
        function xE(t, n, i) {
          var l = me(t), d = l || So(t) || ts(t);
          if (n = le(n, 4), i == null) {
            var m = t && t.constructor;
            d ? i = l ? new m() : [] : ot(t) ? i = jr(m) ? Xi(_l(t)) : {} : i = {};
          }
          return (d ? Sn : yr)(t, function($, V, S) {
            return n(i, $, V, S);
          }), i;
        }
        function LE(t, n) {
          return t == null ? !0 : Rc(t, n);
        }
        function OE(t, n, i) {
          return t == null ? t : Lp(t, n, Pc(i));
        }
        function RE(t, n, i, l) {
          return l = typeof l == "function" ? l : r, t == null ? t : Lp(t, n, Pc(i), l);
        }
        function ns(t) {
          return t == null ? [] : mc(t, Ct(t));
        }
        function NE(t) {
          return t == null ? [] : mc(t, pn(t));
        }
        function BE(t, n, i) {
          return i === r && (i = n, n = r), i !== r && (i = Zn(i), i = i === i ? i : 0), n !== r && (n = Zn(n), n = n === n ? n : 0), si(Zn(t), n, i);
        }
        function PE(t, n, i) {
          return n = Kr(n), i === r ? (i = n, n = 0) : i = Kr(i), t = Zn(t), Wy(t, n, i);
        }
        function DE(t, n, i) {
          if (i && typeof i != "boolean" && Jt(t, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof t == "boolean" && (i = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Kr(t), n === r ? (n = t, t = 0) : n = Kr(n)), t > n) {
            var l = t;
            t = n, n = l;
          }
          if (i || t % 1 || n % 1) {
            var d = lp();
            return Mt(t + d * (n - t + w$("1e-" + ((d + "").length - 1))), n);
          }
          return xc(t, n);
        }
        var ME = Qi(function(t, n, i) {
          return n = n.toLowerCase(), t + (i ? Fm(n) : n);
        });
        function Fm(t) {
          return id(Me(t).toLowerCase());
        }
        function Um(t) {
          return t = Me(t), t && t.replace(Mi, A$).replace(a$, "");
        }
        function FE(t, n, i) {
          t = Me(t), n = Tn(n);
          var l = t.length;
          i = i === r ? l : si(_e(i), 0, l);
          var d = i;
          return i -= n.length, i >= 0 && t.slice(i, d) == n;
        }
        function UE(t) {
          return t = Me(t), t && Pr.test(t) ? t.replace(Br, x$) : t;
        }
        function qE(t) {
          return t = Me(t), t && ho.test(t) ? t.replace(Mr, "\\$&") : t;
        }
        var HE = Qi(function(t, n, i) {
          return t + (i ? "-" : "") + n.toLowerCase();
        }), WE = Qi(function(t, n, i) {
          return t + (i ? " " : "") + n.toLowerCase();
        }), zE = Hp("toLowerCase");
        function GE(t, n, i) {
          t = Me(t), n = _e(n);
          var l = n ? Gi(t) : 0;
          if (!n || l >= n)
            return t;
          var d = (n - l) / 2;
          return Nl(bl(d), i) + t + Nl(yl(d), i);
        }
        function YE(t, n, i) {
          t = Me(t), n = _e(n);
          var l = n ? Gi(t) : 0;
          return n && l < n ? t + Nl(n - l, i) : t;
        }
        function jE(t, n, i) {
          t = Me(t), n = _e(n);
          var l = n ? Gi(t) : 0;
          return n && l < n ? Nl(n - l, i) + t : t;
        }
        function KE(t, n, i) {
          return i || n == null ? n = 0 : n && (n = +n), ry(Me(t).replace(Fr, ""), n || 0);
        }
        function ZE(t, n, i) {
          return (i ? Jt(t, n, i) : n === r) ? n = 1 : n = _e(n), Lc(Me(t), n);
        }
        function XE() {
          var t = arguments, n = Me(t[0]);
          return t.length < 3 ? n : n.replace(t[1], t[2]);
        }
        var JE = Qi(function(t, n, i) {
          return t + (i ? "_" : "") + n.toLowerCase();
        });
        function QE(t, n, i) {
          return i && typeof i != "number" && Jt(t, n, i) && (n = i = r), i = i === r ? te : i >>> 0, i ? (t = Me(t), t && (typeof n == "string" || n != null && !td(n)) && (n = Tn(n), !n && zi(t)) ? Eo(or(t), 0, i) : t.split(n, i)) : [];
        }
        var eS = Qi(function(t, n, i) {
          return t + (i ? " " : "") + id(n);
        });
        function tS(t, n, i) {
          return t = Me(t), i = i == null ? 0 : si(_e(i), 0, t.length), n = Tn(n), t.slice(i, i + n.length) == n;
        }
        function nS(t, n, i) {
          var l = h.templateSettings;
          i && Jt(t, n, i) && (n = r), t = Me(t), n = nd({}, n, l, Zp);
          var d = nd({}, n.imports, l.imports, Zp), m = Ct(d), $ = mc(d, m);
          Sn(m, function(ae) {
            if (J.test(ae))
              throw new fe(v);
          });
          var V, S, M = 0, U = n.interpolate || qr, H = "__p += '", Z = wc(
            (n.escape || qr).source + "|" + U.source + "|" + (U === Un ? Ur : qr).source + "|" + (n.evaluate || qr).source + "|$",
            "g"
          ), ie = "//# sourceURL=" + (De.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++f$ + "]") + `
`;
          t.replace(Z, function(ae, Ee, xe, An, Qt, xn) {
            return xe || (xe = An), H += t.slice(M, xn).replace(Cn, L$), Ee && (V = !0, H += `' +
__e(` + Ee + `) +
'`), Qt && (S = !0, H += `';
` + Qt + `;
__p += '`), xe && (H += `' +
((__t = (` + xe + `)) == null ? '' : __t) +
'`), M = xn + ae.length, ae;
          }), H += `';
`;
          var ce = De.call(n, "variable") && n.variable;
          if (!ce)
            H = `with (obj) {
` + H + `
}
`;
          else if (J.test(ce))
            throw new fe(f);
          H = (S ? H.replace(jt, "") : H).replace(lo, "$1").replace(Yo, "$1;"), H = "function(" + (ce || "obj") + `) {
` + (ce ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (V ? ", __e = _.escape" : "") + (S ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + H + `return __p
}`;
          var ye = Hm(function() {
            return Ne(m, ie + "return " + H).apply(r, $);
          });
          if (ye.source = H, ed(ye))
            throw ye;
          return ye;
        }
        function rS(t) {
          return Me(t).toLowerCase();
        }
        function oS(t) {
          return Me(t).toUpperCase();
        }
        function iS(t, n, i) {
          if (t = Me(t), t && (i || n === r))
            return Xh(t);
          if (!t || !(n = Tn(n)))
            return t;
          var l = or(t), d = or(n), m = Jh(l, d), $ = Qh(l, d) + 1;
          return Eo(l, m, $).join("");
        }
        function sS(t, n, i) {
          if (t = Me(t), t && (i || n === r))
            return t.slice(0, tp(t) + 1);
          if (!t || !(n = Tn(n)))
            return t;
          var l = or(t), d = Qh(l, or(n)) + 1;
          return Eo(l, 0, d).join("");
        }
        function aS(t, n, i) {
          if (t = Me(t), t && (i || n === r))
            return t.replace(Fr, "");
          if (!t || !(n = Tn(n)))
            return t;
          var l = or(t), d = Jh(l, or(n));
          return Eo(l, d).join("");
        }
        function lS(t, n) {
          var i = re, l = he;
          if (ot(n)) {
            var d = "separator" in n ? n.separator : d;
            i = "length" in n ? _e(n.length) : i, l = "omission" in n ? Tn(n.omission) : l;
          }
          t = Me(t);
          var m = t.length;
          if (zi(t)) {
            var $ = or(t);
            m = $.length;
          }
          if (i >= m)
            return t;
          var V = i - Gi(l);
          if (V < 1)
            return l;
          var S = $ ? Eo($, 0, V).join("") : t.slice(0, V);
          if (d === r)
            return S + l;
          if ($ && (V += S.length - V), td(d)) {
            if (t.slice(V).search(d)) {
              var M, U = S;
              for (d.global || (d = wc(d.source, Me(mo.exec(d)) + "g")), d.lastIndex = 0; M = d.exec(U); )
                var H = M.index;
              S = S.slice(0, H === r ? V : H);
            }
          } else if (t.indexOf(Tn(d), V) != V) {
            var Z = S.lastIndexOf(d);
            Z > -1 && (S = S.slice(0, Z));
          }
          return S + l;
        }
        function uS(t) {
          return t = Me(t), t && jo.test(t) ? t.replace(uo, M$) : t;
        }
        var cS = Qi(function(t, n, i) {
          return t + (i ? " " : "") + n.toUpperCase();
        }), id = Hp("toUpperCase");
        function qm(t, n, i) {
          return t = Me(t), n = i ? r : n, n === r ? R$(t) ? q$(t) : E$(t) : t.match(n) || [];
        }
        var Hm = Ve(function(t, n) {
          try {
            return En(t, r, n);
          } catch (i) {
            return ed(i) ? i : new fe(i);
          }
        }), dS = Gr(function(t, n) {
          return Sn(n, function(i) {
            i = sr(i), $r(t, i, Jc(t[i], t));
          }), t;
        });
        function fS(t) {
          var n = t == null ? 0 : t.length, i = le();
          return t = n ? et(t, function(l) {
            if (typeof l[1] != "function")
              throw new zn(c);
            return [i(l[0]), l[1]];
          }) : [], Ve(function(l) {
            for (var d = -1; ++d < n; ) {
              var m = t[d];
              if (En(m[0], this, l))
                return En(m[1], this, l);
            }
          });
        }
        function hS(t) {
          return My(Yn(t, y));
        }
        function sd(t) {
          return function() {
            return t;
          };
        }
        function pS(t, n) {
          return t == null || t !== t ? n : t;
        }
        var mS = zp(), vS = zp(!0);
        function mn(t) {
          return t;
        }
        function ad(t) {
          return yp(typeof t == "function" ? t : Yn(t, y));
        }
        function wS(t) {
          return Vp(Yn(t, y));
        }
        function _S(t, n) {
          return Cp(t, Yn(n, y));
        }
        var gS = Ve(function(t, n) {
          return function(i) {
            return oa(i, t, n);
          };
        }), $S = Ve(function(t, n) {
          return function(i) {
            return oa(t, i, n);
          };
        });
        function ld(t, n, i) {
          var l = Ct(n), d = Tl(n, l);
          i == null && !(ot(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = Tl(n, Ct(n)));
          var m = !(ot(i) && "chain" in i) || !!i.chain, $ = jr(t);
          return Sn(d, function(V) {
            var S = n[V];
            t[V] = S, $ && (t.prototype[V] = function() {
              var M = this.__chain__;
              if (m || M) {
                var U = t(this.__wrapped__), H = U.__actions__ = fn(this.__actions__);
                return H.push({ func: S, args: arguments, thisArg: t }), U.__chain__ = M, U;
              }
              return S.apply(t, go([this.value()], arguments));
            });
          }), t;
        }
        function yS() {
          return xt._ === this && (xt._ = j$), this;
        }
        function ud() {
        }
        function bS(t) {
          return t = _e(t), Ve(function(n) {
            return Ep(n, t);
          });
        }
        var VS = Mc(et), CS = Mc(Gh), ES = Mc(cc);
        function Wm(t) {
          return Gc(t) ? dc(sr(t)) : nb(t);
        }
        function SS(t) {
          return function(n) {
            return t == null ? r : ai(t, n);
          };
        }
        var kS = Yp(), TS = Yp(!0);
        function cd() {
          return [];
        }
        function dd() {
          return !1;
        }
        function IS() {
          return {};
        }
        function AS() {
          return "";
        }
        function xS() {
          return !0;
        }
        function LS(t, n) {
          if (t = _e(t), t < 1 || t > Vt)
            return [];
          var i = te, l = Mt(t, te);
          n = le(n), t -= te;
          for (var d = pc(l, n); ++i < t; )
            n(i);
          return d;
        }
        function OS(t) {
          return me(t) ? et(t, sr) : In(t) ? [t] : fn(um(Me(t)));
        }
        function RS(t) {
          var n = ++G$;
          return Me(t) + n;
        }
        var NS = Rl(function(t, n) {
          return t + n;
        }, 0), BS = Fc("ceil"), PS = Rl(function(t, n) {
          return t / n;
        }, 1), DS = Fc("floor");
        function MS(t) {
          return t && t.length ? kl(t, mn, Ec) : r;
        }
        function FS(t, n) {
          return t && t.length ? kl(t, le(n, 2), Ec) : r;
        }
        function US(t) {
          return Kh(t, mn);
        }
        function qS(t, n) {
          return Kh(t, le(n, 2));
        }
        function HS(t) {
          return t && t.length ? kl(t, mn, Ic) : r;
        }
        function WS(t, n) {
          return t && t.length ? kl(t, le(n, 2), Ic) : r;
        }
        var zS = Rl(function(t, n) {
          return t * n;
        }, 1), GS = Fc("round"), YS = Rl(function(t, n) {
          return t - n;
        }, 0);
        function jS(t) {
          return t && t.length ? hc(t, mn) : 0;
        }
        function KS(t, n) {
          return t && t.length ? hc(t, le(n, 2)) : 0;
        }
        return h.after = _C, h.ary = $m, h.assign = iE, h.assignIn = Rm, h.assignInWith = Nm, h.assignWith = nd, h.at = sE, h.before = ym, h.bind = Jc, h.bindAll = dS, h.bindKey = bm, h.castArray = AC, h.chain = wm, h.chunk = Mb, h.compact = Fb, h.concat = Ub, h.cond = fS, h.conforms = hS, h.constant = sd, h.countBy = KV, h.create = aE, h.curry = Vm, h.curryRight = Cm, h.debounce = Em, h.defaults = lE, h.defaultsDeep = uE, h.defer = gC, h.delay = $C, h.difference = qb, h.differenceBy = Hb, h.differenceWith = Wb, h.drop = zb, h.dropRight = Gb, h.dropRightWhile = Yb, h.dropWhile = jb, h.fill = Kb, h.filter = XV, h.flatMap = eC, h.flatMapDeep = tC, h.flatMapDepth = nC, h.flatten = hm, h.flattenDeep = Zb, h.flattenDepth = Xb, h.flip = yC, h.flow = mS, h.flowRight = vS, h.fromPairs = Jb, h.functions = vE, h.functionsIn = wE, h.groupBy = rC, h.initial = eV, h.intersection = tV, h.intersectionBy = nV, h.intersectionWith = rV, h.invert = gE, h.invertBy = $E, h.invokeMap = iC, h.iteratee = ad, h.keyBy = sC, h.keys = Ct, h.keysIn = pn, h.map = Ul, h.mapKeys = bE, h.mapValues = VE, h.matches = wS, h.matchesProperty = _S, h.memoize = Hl, h.merge = CE, h.mergeWith = Bm, h.method = gS, h.methodOf = $S, h.mixin = ld, h.negate = Wl, h.nthArg = bS, h.omit = EE, h.omitBy = SE, h.once = bC, h.orderBy = aC, h.over = VS, h.overArgs = VC, h.overEvery = CS, h.overSome = ES, h.partial = Qc, h.partialRight = Sm, h.partition = lC, h.pick = kE, h.pickBy = Pm, h.property = Wm, h.propertyOf = SS, h.pull = aV, h.pullAll = mm, h.pullAllBy = lV, h.pullAllWith = uV, h.pullAt = cV, h.range = kS, h.rangeRight = TS, h.rearg = CC, h.reject = dC, h.remove = dV, h.rest = EC, h.reverse = Zc, h.sampleSize = hC, h.set = IE, h.setWith = AE, h.shuffle = pC, h.slice = fV, h.sortBy = wC, h.sortedUniq = gV, h.sortedUniqBy = $V, h.split = QE, h.spread = SC, h.tail = yV, h.take = bV, h.takeRight = VV, h.takeRightWhile = CV, h.takeWhile = EV, h.tap = FV, h.throttle = kC, h.thru = Fl, h.toArray = xm, h.toPairs = Dm, h.toPairsIn = Mm, h.toPath = OS, h.toPlainObject = Om, h.transform = xE, h.unary = TC, h.union = SV, h.unionBy = kV, h.unionWith = TV, h.uniq = IV, h.uniqBy = AV, h.uniqWith = xV, h.unset = LE, h.unzip = Xc, h.unzipWith = vm, h.update = OE, h.updateWith = RE, h.values = ns, h.valuesIn = NE, h.without = LV, h.words = qm, h.wrap = IC, h.xor = OV, h.xorBy = RV, h.xorWith = NV, h.zip = BV, h.zipObject = PV, h.zipObjectDeep = DV, h.zipWith = MV, h.entries = Dm, h.entriesIn = Mm, h.extend = Rm, h.extendWith = Nm, ld(h, h), h.add = NS, h.attempt = Hm, h.camelCase = ME, h.capitalize = Fm, h.ceil = BS, h.clamp = BE, h.clone = xC, h.cloneDeep = OC, h.cloneDeepWith = RC, h.cloneWith = LC, h.conformsTo = NC, h.deburr = Um, h.defaultTo = pS, h.divide = PS, h.endsWith = FE, h.eq = ar, h.escape = UE, h.escapeRegExp = qE, h.every = ZV, h.find = JV, h.findIndex = dm, h.findKey = cE, h.findLast = QV, h.findLastIndex = fm, h.findLastKey = dE, h.floor = DS, h.forEach = _m, h.forEachRight = gm, h.forIn = fE, h.forInRight = hE, h.forOwn = pE, h.forOwnRight = mE, h.get = rd, h.gt = BC, h.gte = PC, h.has = _E, h.hasIn = od, h.head = pm, h.identity = mn, h.includes = oC, h.indexOf = Qb, h.inRange = PE, h.invoke = yE, h.isArguments = ci, h.isArray = me, h.isArrayBuffer = DC, h.isArrayLike = hn, h.isArrayLikeObject = ut, h.isBoolean = MC, h.isBuffer = So, h.isDate = FC, h.isElement = UC, h.isEmpty = qC, h.isEqual = HC, h.isEqualWith = WC, h.isError = ed, h.isFinite = zC, h.isFunction = jr, h.isInteger = km, h.isLength = zl, h.isMap = Tm, h.isMatch = GC, h.isMatchWith = YC, h.isNaN = jC, h.isNative = KC, h.isNil = XC, h.isNull = ZC, h.isNumber = Im, h.isObject = ot, h.isObjectLike = st, h.isPlainObject = ca, h.isRegExp = td, h.isSafeInteger = JC, h.isSet = Am, h.isString = Gl, h.isSymbol = In, h.isTypedArray = ts, h.isUndefined = QC, h.isWeakMap = eE, h.isWeakSet = tE, h.join = oV, h.kebabCase = HE, h.last = Kn, h.lastIndexOf = iV, h.lowerCase = WE, h.lowerFirst = zE, h.lt = nE, h.lte = rE, h.max = MS, h.maxBy = FS, h.mean = US, h.meanBy = qS, h.min = HS, h.minBy = WS, h.stubArray = cd, h.stubFalse = dd, h.stubObject = IS, h.stubString = AS, h.stubTrue = xS, h.multiply = zS, h.nth = sV, h.noConflict = yS, h.noop = ud, h.now = ql, h.pad = GE, h.padEnd = YE, h.padStart = jE, h.parseInt = KE, h.random = DE, h.reduce = uC, h.reduceRight = cC, h.repeat = ZE, h.replace = XE, h.result = TE, h.round = GS, h.runInContext = E, h.sample = fC, h.size = mC, h.snakeCase = JE, h.some = vC, h.sortedIndex = hV, h.sortedIndexBy = pV, h.sortedIndexOf = mV, h.sortedLastIndex = vV, h.sortedLastIndexBy = wV, h.sortedLastIndexOf = _V, h.startCase = eS, h.startsWith = tS, h.subtract = YS, h.sum = jS, h.sumBy = KS, h.template = nS, h.times = LS, h.toFinite = Kr, h.toInteger = _e, h.toLength = Lm, h.toLower = rS, h.toNumber = Zn, h.toSafeInteger = oE, h.toString = Me, h.toUpper = oS, h.trim = iS, h.trimEnd = sS, h.trimStart = aS, h.truncate = lS, h.unescape = uS, h.uniqueId = RS, h.upperCase = cS, h.upperFirst = id, h.each = _m, h.eachRight = gm, h.first = pm, ld(h, (function() {
          var t = {};
          return yr(h, function(n, i) {
            De.call(h.prototype, i) || (t[i] = n);
          }), t;
        })(), { chain: !1 }), h.VERSION = s, Sn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          h[t].placeholder = h;
        }), Sn(["drop", "take"], function(t, n) {
          ke.prototype[t] = function(i) {
            i = i === r ? 1 : gt(_e(i), 0);
            var l = this.__filtered__ && !n ? new ke(this) : this.clone();
            return l.__filtered__ ? l.__takeCount__ = Mt(i, l.__takeCount__) : l.__views__.push({
              size: Mt(i, te),
              type: t + (l.__dir__ < 0 ? "Right" : "")
            }), l;
          }, ke.prototype[t + "Right"] = function(i) {
            return this.reverse()[t](i).reverse();
          };
        }), Sn(["filter", "map", "takeWhile"], function(t, n) {
          var i = n + 1, l = i == $e || i == zt;
          ke.prototype[t] = function(d) {
            var m = this.clone();
            return m.__iteratees__.push({
              iteratee: le(d, 3),
              type: i
            }), m.__filtered__ = m.__filtered__ || l, m;
          };
        }), Sn(["head", "last"], function(t, n) {
          var i = "take" + (n ? "Right" : "");
          ke.prototype[t] = function() {
            return this[i](1).value()[0];
          };
        }), Sn(["initial", "tail"], function(t, n) {
          var i = "drop" + (n ? "" : "Right");
          ke.prototype[t] = function() {
            return this.__filtered__ ? new ke(this) : this[i](1);
          };
        }), ke.prototype.compact = function() {
          return this.filter(mn);
        }, ke.prototype.find = function(t) {
          return this.filter(t).head();
        }, ke.prototype.findLast = function(t) {
          return this.reverse().find(t);
        }, ke.prototype.invokeMap = Ve(function(t, n) {
          return typeof t == "function" ? new ke(this) : this.map(function(i) {
            return oa(i, t, n);
          });
        }), ke.prototype.reject = function(t) {
          return this.filter(Wl(le(t)));
        }, ke.prototype.slice = function(t, n) {
          t = _e(t);
          var i = this;
          return i.__filtered__ && (t > 0 || n < 0) ? new ke(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== r && (n = _e(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
        }, ke.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, ke.prototype.toArray = function() {
          return this.take(te);
        }, yr(ke.prototype, function(t, n) {
          var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = h[l ? "take" + (n == "last" ? "Right" : "") : n], m = l || /^find/.test(n);
          d && (h.prototype[n] = function() {
            var $ = this.__wrapped__, V = l ? [1] : arguments, S = $ instanceof ke, M = V[0], U = S || me($), H = function(Ee) {
              var xe = d.apply(h, go([Ee], V));
              return l && Z ? xe[0] : xe;
            };
            U && i && typeof M == "function" && M.length != 1 && (S = U = !1);
            var Z = this.__chain__, ie = !!this.__actions__.length, ce = m && !Z, ye = S && !ie;
            if (!m && U) {
              $ = ye ? $ : new ke(this);
              var ae = t.apply($, V);
              return ae.__actions__.push({ func: Fl, args: [H], thisArg: r }), new Gn(ae, Z);
            }
            return ce && ye ? t.apply(this, V) : (ae = this.thru(H), ce ? l ? ae.value()[0] : ae.value() : ae);
          });
        }), Sn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var n = fl[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
          h.prototype[t] = function() {
            var d = arguments;
            if (l && !this.__chain__) {
              var m = this.value();
              return n.apply(me(m) ? m : [], d);
            }
            return this[i](function($) {
              return n.apply(me($) ? $ : [], d);
            });
          };
        }), yr(ke.prototype, function(t, n) {
          var i = h[n];
          if (i) {
            var l = i.name + "";
            De.call(Zi, l) || (Zi[l] = []), Zi[l].push({ name: n, func: i });
          }
        }), Zi[Ol(r, I).name] = [{
          name: "wrapper",
          func: r
        }], ke.prototype.clone = cy, ke.prototype.reverse = dy, ke.prototype.value = fy, h.prototype.at = UV, h.prototype.chain = qV, h.prototype.commit = HV, h.prototype.next = WV, h.prototype.plant = GV, h.prototype.reverse = YV, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = jV, h.prototype.first = h.prototype.head, Xs && (h.prototype[Xs] = zV), h;
      }), Yi = H$();
      ni ? ((ni.exports = Yi)._ = Yi, sc._ = Yi) : xt._ = Yi;
    }).call(Ck);
  })(Pa, Pa.exports)), Pa.exports;
}
var ze = Ek();
const Sk = "/alarms?_s=", Mu = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, kk = async (e, o) => {
  try {
    return (await Tt.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      Mu
    )).status === 204;
  } catch {
    return !1;
  }
}, r1 = async (e, o) => {
  try {
    return (await Tt.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      Mu
    )).status === 204;
  } catch {
    return !1;
  }
}, Tk = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await ro.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      Mu
    )).status == 204;
  } catch {
    return !1;
  }
}, Ik = async () => {
  try {
    const e = `${Sk}isSituation==true&limit=0`, o = await ro(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, Ak = async (e) => {
  try {
    const o = e.join(",id=="), r = await ro(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, o1 = async (e) => {
  try {
    const o = await ro(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, xk = async (e) => {
  try {
    const o = await ro(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, Lk = async () => {
  try {
    const e = await ro("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => ze.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, Ok = async (e, o, r) => {
  try {
    return (await ro.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      Mu
    )).status == 204;
  } catch {
    return !1;
  }
}, Rk = async (e, o) => {
  try {
    return (await ro.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, Nk = async () => {
  try {
    const e = await ro.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, Fu = "/alec", i1 = "/alec/engine/configuration", s1 = "/alec/llm/configuration", Bk = "/alec/llm/validate", a1 = "/alec/llm/suggestions", Pk = "/alec/llm/usage", Dk = "/alec/llm/budget", l1 = "/alec/situation", Mk = async () => {
  try {
    const e = await Tt.get(`${i1}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, Fk = async (e) => {
  try {
    return (await Tt.post(i1, e)).status === 200;
  } catch {
    return !1;
  }
}, Uk = async () => {
  try {
    const e = await Tt.get(s1);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, qk = async (e) => {
  try {
    const o = await Tt.post(s1, e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, Hk = async (e) => {
  try {
    const o = await Tt.post(Bk, e);
    return o.status === 200 ? o.data : { ok: !1, message: `Unexpected response (HTTP ${o.status}).` };
  } catch {
    return { ok: !1, message: "Could not reach the server to validate." };
  }
}, u1 = async (e) => {
  try {
    const o = await Tt.get(`${a1}/${e}`);
    return o.status === 200 ? o.data : o.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, Wk = async (e) => {
  try {
    const o = await Tt.post(
      `${a1}/${e}/reanalyze`
    );
    return o.status === 202 || o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, zk = async (e = 30) => {
  try {
    const o = await Tt.get(`${Pk}?days=${e}`);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, Gk = async () => {
  try {
    const e = await Tt.get(Dk);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, c1 = async (e, o) => {
  try {
    const r = await Tt.post(`${Fu}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return o == kt.REJECTED.toLowerCase() && r.status === 200 && await r1(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, Bv = async (e, o) => {
  try {
    return (await Tt.delete(`${Fu}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, d1 = async (e, o) => {
  try {
    return (await Tt.put(`${Fu}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, Yk = async (e) => {
  try {
    return (await Tt.post(l1, e)).status === 200;
  } catch {
    return !1;
  }
}, jk = async () => {
  try {
    return (await Tt.post(`${l1}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, Kk = async () => {
  try {
    return (await Tt.post(`${Fu}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, Zk = window.Pinia.defineStore, Xk = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, Uo = Zk("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null,
    llmConfig: null,
    llmUsage: null,
    llmBudget: null
  }),
  actions: {
    async getUserRole() {
      const e = await Vk();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await Mk();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o, r) {
      const s = {
        ...Xk,
        ...r,
        distanceMeasureName: o ? kt.HELLINGER_OPTION : kt.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return o || (s.hellingerW = null, s.hellingerBias = null), await Fk(s) ? (this.engineInfo = s, !0) : !1;
    },
    async getLLMConfig() {
      const e = await Uk();
      return e && (this.llmConfig = e), e;
    },
    async setLLMConfig(e) {
      const o = await qk(e);
      return o ? (this.llmConfig = o, !0) : !1;
    },
    async getLLMUsage(e = 30) {
      const o = await zk(e);
      return o && (this.llmUsage = o), o;
    },
    async getLLMBudget() {
      const e = await Gk();
      return e && (this.llmBudget = e), e;
    }
  }
}), Jk = window.Vue.defineComponent, Pv = window.Vue.unref, Qk = window.Vue.createElementVNode, e2 = window.Vue.toDisplayString, t2 = window.Vue.createTextVNode, Dv = window.Vue.openBlock, Mv = window.Vue.createElementBlock, n2 = window.Vue.createCommentVNode, r2 = window.Vue.resolveComponent, o2 = window.Vue.createVNode, i2 = window.Vue.pushScopeId, s2 = window.Vue.popScopeId, a2 = (e) => (i2("data-v-ecf6f9f2"), e = e(), s2(), e), l2 = { class: "main" }, u2 = {
  key: 0,
  class: "llm-budget-banner",
  "data-test": "llm-budget-banner",
  role: "alert"
}, c2 = /* @__PURE__ */ a2(() => /* @__PURE__ */ Qk("strong", null, "LLM requests paused.", -1)), d2 = window.Vue.onMounted, f2 = window.Vue.onUnmounted, Fv = window.Vue.computed, h2 = /* @__PURE__ */ Jk({
  __name: "MainContainer",
  setup(e) {
    const o = Uo(), r = 300 * 1e3;
    let s;
    const a = Fv(() => {
      var c;
      return ((c = o.llmBudget) == null ? void 0 : c.blocked) === !0;
    }), u = Fv(() => {
      var c;
      return ((c = o.llmBudget) == null ? void 0 : c.reason) || "";
    });
    return d2(() => {
      o.getLLMBudget(), s = setInterval(() => o.getLLMBudget(), r);
    }), f2(() => {
      s && clearInterval(s);
    }), (c, f) => {
      const v = r2("router-view");
      return Dv(), Mv("div", l2, [
        Pv(a) ? (Dv(), Mv("div", u2, [
          c2,
          t2(" " + e2(Pv(u)) + " Raise the limit on the LLM Setup tab of the ALEC configuration to resume. ", 1)
        ])) : n2("", !0),
        o2(v)
      ]);
    };
  }
}), Re = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, p2 = /* @__PURE__ */ Re(h2, [["__scopeId", "data-v-ecf6f9f2"]]), m2 = window.Vue.defineComponent, v2 = window.Vue.openBlock, w2 = window.Vue.createBlock, _2 = /* @__PURE__ */ m2({
  __name: "App",
  setup(e) {
    return (o, r) => (v2(), w2(p2));
  }
}), g2 = window.Pinia.defineStore, mr = g2("situationsStore", {
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
      const e = await Lk();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await Ik();
      if (e) {
        const o = e.alarm.map((u) => {
          var c;
          return u.status = (c = u.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, u;
        });
        this.filteredSituations = o.map((u) => u.id);
        const r = ze.groupBy(o, "status"), a = [
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
        const s = await o1(e);
        if (s) {
          const a = (o = s.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await Ak(a);
          s.status = (r = s.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : r.value, s.alarms = ze.sortBy(c, ["id"]), this.situationDetail = s;
        }
      }
    },
    async getEvents(e, o) {
      const r = {};
      await Promise.all(
        o.map(async (s) => {
          const a = await xk(s);
          a && (r[s] = ze.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await Nk();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), $2 = window.Vue.openBlock, y2 = window.Vue.createElementBlock, b2 = window.Vue.createElementVNode;
var V2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const C2 = {}, E2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, S2 = /* @__PURE__ */ b2("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), k2 = [
  S2
];
function T2(e, o) {
  return $2(), y2("svg", E2, k2);
}
var xs = /* @__PURE__ */ V2(C2, [["render", T2]]), I2 = Object.defineProperty, Uv = Object.getOwnPropertySymbols, A2 = Object.prototype.hasOwnProperty, x2 = Object.prototype.propertyIsEnumerable, qv = (e, o, r) => o in e ? I2(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Hv = (e, o) => {
  for (var r in o || (o = {}))
    A2.call(o, r) && qv(e, r, o[r]);
  if (Uv)
    for (var r of Uv(o))
      x2.call(o, r) && qv(e, r, o[r]);
  return e;
};
const L2 = window.Vue.defineComponent, O2 = window.Vue.toRaw, Qd = window.Vue.h;
var R2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const N2 = {
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
}, B2 = L2({
  props: N2,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = O2(this.icon);
    return this.$slots.default ? Qd("span", { class: "feather-icon-container" }, [
      Qd(this.$slots.default()[0], Hv({
        class: o
      }, r))
    ]) : Qd(s, Hv({
      class: o
    }, r));
  }
});
var oe = /* @__PURE__ */ R2(B2, [["__scopeId", "data-v-52cbf270"]]);
const P2 = window.Vue.openBlock, D2 = window.Vue.createElementBlock, M2 = window.Vue.createElementVNode;
var F2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const U2 = {}, q2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, H2 = /* @__PURE__ */ M2("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), W2 = [
  H2
];
function z2(e, o) {
  return P2(), D2("svg", q2, W2);
}
var f1 = /* @__PURE__ */ F2(U2, [["render", z2]]);
function Ar(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var o = Number(e);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function je(e, o) {
  if (o.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function bt(e) {
  je(1, arguments);
  var o = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && o === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || o === "[object Number]" ? new Date(e) : ((typeof e == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function G2(e, o) {
  je(2, arguments);
  var r = bt(e), s = Ar(o);
  return isNaN(s) ? /* @__PURE__ */ new Date(NaN) : (s && r.setDate(r.getDate() + s), r);
}
function Y2(e, o) {
  je(2, arguments);
  var r = bt(e).getTime(), s = Ar(o);
  return new Date(r + s);
}
var j2 = {};
function Os() {
  return j2;
}
function Wv(e, o) {
  var r, s, a, u, c, f;
  je(1, arguments);
  var v = Os(), p = Ar((r = (s = (a = (u = void 0) !== null && u !== void 0 ? u : void 0) !== null && a !== void 0 ? a : v.weekStartsOn) !== null && s !== void 0 ? s : (c = v.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var w = bt(e), g = w.getDay(), y = (g < p ? 7 : 0) + g - p;
  return w.setDate(w.getDate() - y), w.setHours(0, 0, 0, 0), w;
}
function Xf(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function zv(e) {
  je(1, arguments);
  var o = bt(e);
  return o.setHours(0, 0, 0, 0), o;
}
function K2(e, o) {
  je(2, arguments);
  var r = bt(e), s = bt(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function h1(e, o) {
  je(2, arguments);
  var r = zv(e), s = zv(o);
  return r.getTime() === s.getTime();
}
function Z2(e) {
  return je(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function X2(e) {
  if (je(1, arguments), !Z2(e) && typeof e != "number")
    return !1;
  var o = bt(e);
  return !isNaN(Number(o));
}
function J2(e, o) {
  je(2, arguments);
  var r = Ar(o);
  return Y2(e, -r);
}
var Q2 = 864e5;
function eT(e) {
  je(1, arguments);
  var o = bt(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / Q2) + 1;
}
function Su(e) {
  je(1, arguments);
  var o = 1, r = bt(e), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function p1(e) {
  je(1, arguments);
  var o = bt(e), r = o.getUTCFullYear(), s = /* @__PURE__ */ new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Su(s), u = /* @__PURE__ */ new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = Su(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function tT(e) {
  je(1, arguments);
  var o = p1(e), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = Su(r);
  return s;
}
var nT = 6048e5;
function rT(e) {
  je(1, arguments);
  var o = bt(e), r = Su(o).getTime() - tT(o).getTime();
  return Math.round(r / nT) + 1;
}
function ku(e, o) {
  var r, s, a, u, c, f, v, p;
  je(1, arguments);
  var w = Os(), g = Ar((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : w.weekStartsOn) !== null && s !== void 0 ? s : (v = w.locale) === null || v === void 0 || (p = v.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(g >= 0 && g <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = bt(e), b = y.getUTCDay(), C = (b < g ? 7 : 0) + b - g;
  return y.setUTCDate(y.getUTCDate() - C), y.setUTCHours(0, 0, 0, 0), y;
}
function m1(e, o) {
  var r, s, a, u, c, f, v, p;
  je(1, arguments);
  var w = bt(e), g = w.getUTCFullYear(), y = Os(), b = Ar((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && s !== void 0 ? s : (v = y.locale) === null || v === void 0 || (p = v.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(b >= 1 && b <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var C = /* @__PURE__ */ new Date(0);
  C.setUTCFullYear(g + 1, 0, b), C.setUTCHours(0, 0, 0, 0);
  var T = ku(C, o), B = /* @__PURE__ */ new Date(0);
  B.setUTCFullYear(g, 0, b), B.setUTCHours(0, 0, 0, 0);
  var k = ku(B, o);
  return w.getTime() >= T.getTime() ? g + 1 : w.getTime() >= k.getTime() ? g : g - 1;
}
function oT(e, o) {
  var r, s, a, u, c, f, v, p;
  je(1, arguments);
  var w = Os(), g = Ar((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : w.firstWeekContainsDate) !== null && s !== void 0 ? s : (v = w.locale) === null || v === void 0 || (p = v.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = m1(e, o), b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(y, 0, g), b.setUTCHours(0, 0, 0, 0);
  var C = ku(b, o);
  return C;
}
var iT = 6048e5;
function sT(e, o) {
  je(1, arguments);
  var r = bt(e), s = ku(r, o).getTime() - oT(r, o).getTime();
  return Math.round(s / iT) + 1;
}
function qe(e, o) {
  for (var r = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var ko = {
  // Year
  y: function(e, o) {
    var r = e.getUTCFullYear(), s = r > 0 ? r : 1 - r;
    return qe(o === "yy" ? s % 100 : s, o.length);
  },
  // Month
  M: function(e, o) {
    var r = e.getUTCMonth();
    return o === "M" ? String(r + 1) : qe(r + 1, 2);
  },
  // Day of the month
  d: function(e, o) {
    return qe(e.getUTCDate(), o.length);
  },
  // AM or PM
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
  // Hour [1-12]
  h: function(e, o) {
    return qe(e.getUTCHours() % 12 || 12, o.length);
  },
  // Hour [0-23]
  H: function(e, o) {
    return qe(e.getUTCHours(), o.length);
  },
  // Minute
  m: function(e, o) {
    return qe(e.getUTCMinutes(), o.length);
  },
  // Second
  s: function(e, o) {
    return qe(e.getUTCSeconds(), o.length);
  },
  // Fraction of second
  S: function(e, o) {
    var r = o.length, s = e.getUTCMilliseconds(), a = Math.floor(s * Math.pow(10, r - 3));
    return qe(a, o.length);
  }
}, rs = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, aT = {
  // Era
  G: function(e, o, r) {
    var s = e.getUTCFullYear() > 0 ? 1 : 0;
    switch (o) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return r.era(s, {
          width: "abbreviated"
        });
      // A, B
      case "GGGGG":
        return r.era(s, {
          width: "narrow"
        });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return r.era(s, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(e, o, r) {
    if (o === "yo") {
      var s = e.getUTCFullYear(), a = s > 0 ? s : 1 - s;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return ko.y(e, o);
  },
  // Local week-numbering year
  Y: function(e, o, r, s) {
    var a = m1(e, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return qe(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : qe(u, o.length);
  },
  // ISO week-numbering year
  R: function(e, o) {
    var r = p1(e);
    return qe(r, o.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, o) {
    var r = e.getUTCFullYear();
    return qe(r, o.length);
  },
  // Quarter
  Q: function(e, o, r) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      // 1, 2, 3, 4
      case "Q":
        return String(s);
      // 01, 02, 03, 04
      case "QQ":
        return qe(s, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return r.ordinalNumber(s, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return r.quarter(s, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return r.quarter(s, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return r.quarter(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, o, r) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      // 1, 2, 3, 4
      case "q":
        return String(s);
      // 01, 02, 03, 04
      case "qq":
        return qe(s, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return r.ordinalNumber(s, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return r.quarter(s, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return r.quarter(s, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return r.quarter(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, o, r) {
    var s = e.getUTCMonth();
    switch (o) {
      case "M":
      case "MM":
        return ko.M(e, o);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return r.ordinalNumber(s + 1, {
          unit: "month"
        });
      // Jan, Feb, ..., Dec
      case "MMM":
        return r.month(s, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return r.month(s, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return r.month(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(e, o, r) {
    var s = e.getUTCMonth();
    switch (o) {
      // 1, 2, ..., 12
      case "L":
        return String(s + 1);
      // 01, 02, ..., 12
      case "LL":
        return qe(s + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return r.ordinalNumber(s + 1, {
          unit: "month"
        });
      // Jan, Feb, ..., Dec
      case "LLL":
        return r.month(s, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return r.month(s, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return r.month(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(e, o, r, s) {
    var a = sT(e, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : qe(a, o.length);
  },
  // ISO week of year
  I: function(e, o, r) {
    var s = rT(e);
    return o === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : qe(s, o.length);
  },
  // Day of the month
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : ko.d(e, o);
  },
  // Day of year
  D: function(e, o, r) {
    var s = eT(e);
    return o === "Do" ? r.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : qe(s, o.length);
  },
  // Day of week
  E: function(e, o, r) {
    var s = e.getUTCDay();
    switch (o) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return r.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return r.day(s, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return r.day(s, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return r.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, o, r, s) {
    var a = e.getUTCDay(), u = (a - s.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(u);
      // Padded numerical value
      case "ee":
        return qe(u, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return r.ordinalNumber(u, {
          unit: "day"
        });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, o, r, s) {
    var a = e.getUTCDay(), u = (a - s.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      // Numerical value (same as in `e`)
      case "c":
        return String(u);
      // Padded numerical value
      case "cc":
        return qe(u, o.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return r.ordinalNumber(u, {
          unit: "day"
        });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, o, r) {
    var s = e.getUTCDay(), a = s === 0 ? 7 : s;
    switch (o) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return qe(a, o.length);
      // 2nd
      case "io":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      // Tue
      case "iii":
        return r.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return r.day(s, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return r.day(s, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return r.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
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
  // AM, PM, midnight, noon
  b: function(e, o, r) {
    var s = e.getUTCHours(), a;
    switch (s === 12 ? a = rs.noon : s === 0 ? a = rs.midnight : a = s / 12 >= 1 ? "pm" : "am", o) {
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
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, o, r) {
    var s = e.getUTCHours(), a;
    switch (s >= 17 ? a = rs.evening : s >= 12 ? a = rs.afternoon : s >= 4 ? a = rs.morning : a = rs.night, o) {
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
  // Hour [1-12]
  h: function(e, o, r) {
    if (o === "ho") {
      var s = e.getUTCHours() % 12;
      return s === 0 && (s = 12), r.ordinalNumber(s, {
        unit: "hour"
      });
    }
    return ko.h(e, o);
  },
  // Hour [0-23]
  H: function(e, o, r) {
    return o === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : ko.H(e, o);
  },
  // Hour [0-11]
  K: function(e, o, r) {
    var s = e.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : qe(s, o.length);
  },
  // Hour [1-24]
  k: function(e, o, r) {
    var s = e.getUTCHours();
    return s === 0 && (s = 24), o === "ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : qe(s, o.length);
  },
  // Minute
  m: function(e, o, r) {
    return o === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : ko.m(e, o);
  },
  // Second
  s: function(e, o, r) {
    return o === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : ko.s(e, o);
  },
  // Fraction of second
  S: function(e, o) {
    return ko.S(e, o);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      // Hours and optional minutes
      case "X":
        return Yv(u);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Si(u);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Si(u, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      // Hours and optional minutes
      case "x":
        return Yv(u);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Si(u);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Si(u, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Gv(u, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Si(u, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Gv(u, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Si(u, ":");
    }
  },
  // Seconds timestamp
  t: function(e, o, r, s) {
    var a = s._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return qe(u, o.length);
  },
  // Milliseconds timestamp
  T: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTime();
    return qe(u, o.length);
  }
};
function Gv(e, o) {
  var r = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var c = o;
  return r + String(a) + c + qe(u, 2);
}
function Yv(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + qe(Math.abs(e) / 60, 2);
  }
  return Si(e, o);
}
function Si(e, o) {
  var r = o || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = qe(Math.floor(a / 60), 2), c = qe(a % 60, 2);
  return s + u + r + c;
}
var jv = function(e, o) {
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
}, v1 = function(e, o) {
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
}, lT = function(e, o) {
  var r = e.match(/(P+)(p+)?/) || [], s = r[1], a = r[2];
  if (!a)
    return jv(e, o);
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
  return u.replace("{{date}}", jv(s, o)).replace("{{time}}", v1(a, o));
}, uT = {
  p: v1,
  P: lT
}, cT = ["D", "DD"], dT = ["YY", "YYYY"];
function fT(e) {
  return cT.indexOf(e) !== -1;
}
function hT(e) {
  return dT.indexOf(e) !== -1;
}
function Kv(e, o, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var pT = {
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
}, mT = function(e, o, r) {
  var s, a = pT[e];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
function ef(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, s = e.formats[r] || e.formats[e.defaultWidth];
    return s;
  };
}
var vT = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, wT = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, _T = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, gT = {
  date: ef({
    formats: vT,
    defaultWidth: "full"
  }),
  time: ef({
    formats: wT,
    defaultWidth: "full"
  }),
  dateTime: ef({
    formats: _T,
    defaultWidth: "full"
  })
}, $T = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, yT = function(e, o, r, s) {
  return $T[e];
};
function da(e) {
  return function(o, r) {
    var s = r != null && r.context ? String(r.context) : "standalone", a;
    if (s === "formatting" && e.formattingValues) {
      var u = e.defaultFormattingWidth || e.defaultWidth, c = r != null && r.width ? String(r.width) : u;
      a = e.formattingValues[c] || e.formattingValues[u];
    } else {
      var f = e.defaultWidth, v = r != null && r.width ? String(r.width) : e.defaultWidth;
      a = e.values[v] || e.values[f];
    }
    var p = e.argumentCallback ? e.argumentCallback(o) : o;
    return a[p];
  };
}
var bT = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, VT = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, CT = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, ET = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, ST = {
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
}, kT = {
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
}, TT = function(e, o) {
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
}, IT = {
  ordinalNumber: TT,
  era: da({
    values: bT,
    defaultWidth: "wide"
  }),
  quarter: da({
    values: VT,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: da({
    values: CT,
    defaultWidth: "wide"
  }),
  day: da({
    values: ET,
    defaultWidth: "wide"
  }),
  dayPeriod: da({
    values: ST,
    defaultWidth: "wide",
    formattingValues: kT,
    defaultFormattingWidth: "wide"
  })
};
function fa(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], v = Array.isArray(f) ? xT(f, function(g) {
      return g.test(c);
    }) : AT(f, function(g) {
      return g.test(c);
    }), p;
    p = e.valueCallback ? e.valueCallback(v) : v, p = r.valueCallback ? r.valueCallback(p) : p;
    var w = o.slice(c.length);
    return {
      value: p,
      rest: w
    };
  };
}
function AT(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function xT(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function LT(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = o.match(e.matchPattern);
    if (!s) return null;
    var a = s[0], u = o.match(e.parsePattern);
    if (!u) return null;
    var c = e.valueCallback ? e.valueCallback(u[0]) : u[0];
    c = r.valueCallback ? r.valueCallback(c) : c;
    var f = o.slice(a.length);
    return {
      value: c,
      rest: f
    };
  };
}
var OT = /^(\d+)(th|st|nd|rd)?/i, RT = /\d+/i, NT = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, BT = {
  any: [/^b/i, /^(a|c)/i]
}, PT = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, DT = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, MT = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, FT = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, UT = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, qT = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, HT = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, WT = {
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
}, zT = {
  ordinalNumber: LT({
    matchPattern: OT,
    parsePattern: RT,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: fa({
    matchPatterns: NT,
    defaultMatchWidth: "wide",
    parsePatterns: BT,
    defaultParseWidth: "any"
  }),
  quarter: fa({
    matchPatterns: PT,
    defaultMatchWidth: "wide",
    parsePatterns: DT,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: fa({
    matchPatterns: MT,
    defaultMatchWidth: "wide",
    parsePatterns: FT,
    defaultParseWidth: "any"
  }),
  day: fa({
    matchPatterns: UT,
    defaultMatchWidth: "wide",
    parsePatterns: qT,
    defaultParseWidth: "any"
  }),
  dayPeriod: fa({
    matchPatterns: HT,
    defaultMatchWidth: "any",
    parsePatterns: WT,
    defaultParseWidth: "any"
  })
}, w1 = {
  code: "en-US",
  formatDistance: mT,
  formatLong: gT,
  formatRelative: yT,
  localize: IT,
  match: zT,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, GT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, YT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, jT = /^'([^]*?)'?$/, KT = /''/g, ZT = /[a-zA-Z]/;
function XT(e, o, r) {
  var s, a, u, c, f, v, p, w, g, y, b, C, T, B;
  je(2, arguments);
  var k = String(o), I = Os(), R = (s = (a = void 0) !== null && a !== void 0 ? a : I.locale) !== null && s !== void 0 ? s : w1, D = Ar((u = (c = (f = (v = void 0) !== null && v !== void 0 ? v : void 0) !== null && f !== void 0 ? f : I.firstWeekContainsDate) !== null && c !== void 0 ? c : (p = I.locale) === null || p === void 0 || (w = p.options) === null || w === void 0 ? void 0 : w.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(D >= 1 && D <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var q = Ar((g = (y = (b = (C = void 0) !== null && C !== void 0 ? C : void 0) !== null && b !== void 0 ? b : I.weekStartsOn) !== null && y !== void 0 ? y : (T = I.locale) === null || T === void 0 || (B = T.options) === null || B === void 0 ? void 0 : B.weekStartsOn) !== null && g !== void 0 ? g : 0);
  if (!(q >= 0 && q <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!R.localize)
    throw new RangeError("locale must contain localize property");
  if (!R.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var F = bt(e);
  if (!X2(F))
    throw new RangeError("Invalid time value");
  var O = Xf(F), j = J2(F, O), Y = {
    firstWeekContainsDate: D,
    weekStartsOn: q,
    locale: R,
    _originalDate: F
  }, X = k.match(YT).map(function(re) {
    var he = re[0];
    if (he === "p" || he === "P") {
      var Ce = uT[he];
      return Ce(re, R.formatLong);
    }
    return re;
  }).join("").match(GT).map(function(re) {
    if (re === "''")
      return "'";
    var he = re[0];
    if (he === "'")
      return JT(re);
    var Ce = aT[he];
    if (Ce)
      return hT(re) && Kv(re, o, String(e)), fT(re) && Kv(re, o, String(e)), Ce(j, re, R.localize, Y);
    if (he.match(ZT))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + he + "`");
    return re;
  }).join("");
  return X;
}
function JT(e) {
  var o = e.match(jT);
  return o ? o[1].replace(KT, "'") : e;
}
function _1(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function QT(e) {
  return _1({}, e);
}
var Zv = 1e3 * 60, Tu = 1440, Xv = Tu * 30, Jv = Tu * 365;
function Uu(e, o, r) {
  var s, a, u;
  je(2, arguments);
  var c = Os(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : w1;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var v = K2(e, o);
  if (isNaN(v))
    throw new RangeError("Invalid time value");
  var p = _1(QT(r), {
    addSuffix: !!(r != null && r.addSuffix),
    comparison: v
  }), w, g;
  v > 0 ? (w = bt(o), g = bt(e)) : (w = bt(e), g = bt(o));
  var y = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), b;
  if (y === "floor")
    b = Math.floor;
  else if (y === "ceil")
    b = Math.ceil;
  else if (y === "round")
    b = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var C = g.getTime() - w.getTime(), T = C / Zv, B = Xf(g) - Xf(w), k = (C - B) / Zv, I = r == null ? void 0 : r.unit, R;
  if (I ? R = String(I) : T < 1 ? R = "second" : T < 60 ? R = "minute" : T < Tu ? R = "hour" : k < Xv ? R = "day" : k < Jv ? R = "month" : R = "year", R === "second") {
    var D = b(C / 1e3);
    return f.formatDistance("xSeconds", D, p);
  } else if (R === "minute") {
    var q = b(T);
    return f.formatDistance("xMinutes", q, p);
  } else if (R === "hour") {
    var F = b(T / 60);
    return f.formatDistance("xHours", F, p);
  } else if (R === "day") {
    var O = b(k / Tu);
    return f.formatDistance("xDays", O, p);
  } else if (R === "month") {
    var j = b(k / Xv);
    return j === 12 && I !== "month" ? f.formatDistance("xYears", 1, p) : f.formatDistance("xMonths", j, p);
  } else if (R === "year") {
    var Y = b(k / Jv);
    return f.formatDistance("xYears", Y, p);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function eI(e, o, r) {
  je(2, arguments);
  var s = Wv(e, r), a = Wv(o, r);
  return s.getTime() === a.getTime();
}
function tI(e, o) {
  return je(1, arguments), eI(e, Date.now(), o);
}
function nI(e) {
  return je(1, arguments), h1(e, Date.now());
}
function rI(e, o) {
  je(2, arguments);
  var r = Ar(o);
  return G2(e, -r);
}
function oI(e) {
  return je(1, arguments), h1(e, rI(Date.now(), 1));
}
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function Qv(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, s = Array(o); r < o; r++) s[r] = e[r];
  return s;
}
function iI(e) {
  if (Array.isArray(e)) return e;
}
function sI(e, o) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var s, a, u, c, f = [], v = !0, p = !1;
    try {
      if (u = (r = r.call(e)).next, o !== 0) for (; !(v = (s = u.call(r)).done) && (f.push(s.value), f.length !== o); v = !0) ;
    } catch (w) {
      p = !0, a = w;
    } finally {
      try {
        if (!v && r.return != null && (c = r.return(), Object(c) !== c)) return;
      } finally {
        if (p) throw a;
      }
    }
    return f;
  }
}
function aI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lI(e, o) {
  return iI(e) || sI(e, o) || uI(e, o) || aI();
}
function uI(e, o) {
  if (e) {
    if (typeof e == "string") return Qv(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Qv(e, o) : void 0;
  }
}
const g1 = Object.entries, ew = Object.setPrototypeOf, cI = Object.isFrozen, dI = Object.getPrototypeOf, fI = Object.getOwnPropertyDescriptor;
let Bt = Object.freeze, Pt = Object.seal, gs = Object.create, $1 = typeof Reflect < "u" && Reflect, Jf = $1.apply, Qf = $1.construct;
Bt || (Bt = function(o) {
  return o;
});
Pt || (Pt = function(o) {
  return o;
});
Jf || (Jf = function(o, r) {
  for (var s = arguments.length, a = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++)
    a[u - 2] = arguments[u];
  return o.apply(r, a);
});
Qf || (Qf = function(o) {
  for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    s[a - 1] = arguments[a];
  return new o(...s);
});
const ha = mt(Array.prototype.forEach), hI = mt(Array.prototype.lastIndexOf), tw = mt(Array.prototype.pop), os = mt(Array.prototype.push), pI = mt(Array.prototype.splice), Po = Array.isArray, Da = mt(String.prototype.toLowerCase), tf = mt(String.prototype.toString), nw = mt(String.prototype.match), pa = mt(String.prototype.replace), rw = mt(String.prototype.indexOf), mI = mt(String.prototype.trim), vI = mt(Number.prototype.toString), wI = mt(Boolean.prototype.toString), ow = typeof BigInt > "u" ? null : mt(BigInt.prototype.toString), iw = typeof Symbol > "u" ? null : mt(Symbol.prototype.toString), St = mt(Object.prototype.hasOwnProperty), ma = mt(Object.prototype.toString), Rt = mt(RegExp.prototype.test), di = _I(TypeError);
function mt(e) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      s[a - 1] = arguments[a];
    return Jf(e, o, s);
  };
}
function _I(e) {
  return function() {
    for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++)
      r[s] = arguments[s];
    return Qf(e, r);
  };
}
function Le(e, o) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Da;
  if (ew && ew(e, null), !Po(o))
    return e;
  let s = o.length;
  for (; s--; ) {
    let a = o[s];
    if (typeof a == "string") {
      const u = r(a);
      u !== a && (cI(o) || (o[s] = u), a = u);
    }
    e[a] = !0;
  }
  return e;
}
function gI(e) {
  for (let o = 0; o < e.length; o++)
    St(e, o) || (e[o] = null);
  return e;
}
function rn(e) {
  const o = gs(null);
  for (const s of g1(e)) {
    var r = lI(s, 2);
    const a = r[0], u = r[1];
    St(e, a) && (Po(u) ? o[a] = gI(u) : u && typeof u == "object" && u.constructor === Object ? o[a] = rn(u) : o[a] = u);
  }
  return o;
}
function $I(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return vI(e);
    case "boolean":
      return wI(e);
    case "bigint":
      return ow ? ow(e) : "0";
    case "symbol":
      return iw ? iw(e) : "Symbol()";
    case "undefined":
      return ma(e);
    case "function":
    case "object": {
      if (e === null)
        return ma(e);
      const o = e, r = Sr(o, "toString");
      if (typeof r == "function") {
        const s = r(o);
        return typeof s == "string" ? s : ma(s);
      }
      return ma(e);
    }
    default:
      return ma(e);
  }
}
function Sr(e, o) {
  for (; e !== null; ) {
    const s = fI(e, o);
    if (s) {
      if (s.get)
        return mt(s.get);
      if (typeof s.value == "function")
        return mt(s.value);
    }
    e = dI(e);
  }
  function r() {
    return null;
  }
  return r;
}
function yI(e) {
  try {
    return Rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const sw = Bt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), nf = Bt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), rf = Bt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), bI = Bt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), of = Bt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), VI = Bt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), aw = Bt(["#text"]), lw = Bt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), sf = Bt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), uw = Bt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Kl = Bt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), CI = Pt(/{{[\w\W]*|^[\w\W]*}}/g), EI = Pt(/<%[\w\W]*|^[\w\W]*%>/g), SI = Pt(/\${[\w\W]*/g), kI = Pt(/^data-[\-\w.\u00B7-\uFFFF]+$/), TI = Pt(/^aria-[\-\w]+$/), cw = Pt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), II = Pt(/^(?:\w+script|data):/i), AI = Pt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), xI = Pt(/^html$/i), LI = Pt(/^[a-z][.\w]*(-[.\w]+)+$/i), dw = Pt(/<[/\w!]/g), OI = Pt(/<[/\w]/g), RI = Pt(/<\/no(script|embed|frames)/i), NI = Pt(/\/>/i), Vr = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, BI = function() {
  return typeof window > "u" ? null : window;
}, PI = function(o, r) {
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
}, fw = function() {
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
}, To = function(o, r, s, a) {
  return St(o, r) && Po(o[r]) ? Le(a.base ? rn(a.base) : {}, o[r], a.transform) : s;
};
function y1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : BI();
  const o = (G) => y1(G);
  if (o.version = "3.4.11", o.removed = [], !e || !e.document || e.document.nodeType !== Vr.document || !e.Element)
    return o.isSupported = !1, o;
  let r = e.document;
  const s = r, a = s.currentScript;
  e.DocumentFragment;
  const u = e.HTMLTemplateElement, c = e.Node, f = e.Element, v = e.NodeFilter, p = e.NamedNodeMap;
  p === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const w = e.DOMParser, g = e.trustedTypes, y = f.prototype, b = Sr(y, "cloneNode"), C = Sr(y, "remove"), T = Sr(y, "nextSibling"), B = Sr(y, "childNodes"), k = Sr(y, "parentNode"), I = Sr(y, "shadowRoot"), R = Sr(y, "attributes"), D = c && c.prototype ? Sr(c.prototype, "nodeType") : null, q = c && c.prototype ? Sr(c.prototype, "nodeName") : null;
  if (typeof u == "function") {
    const G = r.createElement("template");
    G.content && G.content.ownerDocument && (r = G.content.ownerDocument);
  }
  let F, O = "", j, Y = !1, X = 0;
  const re = function() {
    if (X > 0)
      throw di('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, he = function(_) {
    re(), X++;
    try {
      return F.createHTML(_);
    } finally {
      X--;
    }
  }, Ce = function(_) {
    re(), X++;
    try {
      return F.createScriptURL(_);
    } finally {
      X--;
    }
  }, we = function() {
    return Y || (j = PI(g, a), Y = !0), j;
  }, $e = r, Je = $e.implementation, zt = $e.createNodeIterator, Qe = $e.createDocumentFragment, Vt = $e.getElementsByTagName, Go = s.importNode;
  let A = fw();
  o.isSupported = typeof g1 == "function" && typeof k == "function" && Je && Je.createHTMLDocument !== void 0;
  const te = CI, ue = EI, Ke = SI, Fe = kI, Pe = TI, wt = II, sn = AI, an = LI;
  let nr = cw, Ge = null;
  const Or = Le({}, [...sw, ...nf, ...rf, ...of, ...aw]);
  let Ue = null;
  const oo = Le({}, [...lw, ...sf, ...uw, ...Kl]);
  let pe = Object.seal(gs(null, {
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
  })), ft = null, Gt = null;
  const nt = Object.seal(gs(null, {
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
  let Dn = !0, io = !0, vr = !1, Dt = !0, It = !1, Mn = !0, ln = !1, un = !1, wr = null, cn = null, Yt = !1, yn = !1, rr = !1, bn = !1, so = !0, Vn = !1;
  const ao = "user-content-";
  let Rr = !0, Nr = !1, Fn = {}, jt = null;
  const lo = Le({}, [
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
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let Yo = null;
  const uo = Le({}, ["audio", "video", "img", "source", "image", "track"]);
  let Br = null;
  const jo = Le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Pr = "http://www.w3.org/1998/Math/MathML", Dr = "http://www.w3.org/2000/svg", Kt = "http://www.w3.org/1999/xhtml";
  let Un = Kt, co = !1, fo = null;
  const Ni = Le({}, [Pr, Dr, Kt], tf), Mr = Bt(["mi", "mo", "mn", "ms", "mtext"]);
  let ho = Le({}, Mr);
  const Fr = Bt(["annotation-xml"]);
  let po = Le({}, Fr);
  const Bi = Le({}, ["title", "style", "font", "a", "script"]);
  let _r = null;
  const se = ["application/xhtml+xml", "text/html"], K = "text/html";
  let J = null, Ae = null;
  const Ur = r.createElement("form"), mo = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, vo = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ae && Ae === _)
      return;
    (!_ || typeof _ != "object") && (_ = {}), _ = rn(_), _r = // eslint-disable-next-line unicorn/prefer-includes
    se.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? K : _.PARSER_MEDIA_TYPE, J = _r === "application/xhtml+xml" ? tf : Da, Ge = To(_, "ALLOWED_TAGS", Or, {
      transform: J
    }), Ue = To(_, "ALLOWED_ATTR", oo, {
      transform: J
    }), fo = To(_, "ALLOWED_NAMESPACES", Ni, {
      transform: tf
    }), Br = To(_, "ADD_URI_SAFE_ATTR", jo, {
      transform: J,
      base: jo
    }), Yo = To(_, "ADD_DATA_URI_TAGS", uo, {
      transform: J,
      base: uo
    }), jt = To(_, "FORBID_CONTENTS", lo, {
      transform: J
    }), ft = To(_, "FORBID_TAGS", rn({}), {
      transform: J
    }), Gt = To(_, "FORBID_ATTR", rn({}), {
      transform: J
    }), Fn = St(_, "USE_PROFILES") ? _.USE_PROFILES && typeof _.USE_PROFILES == "object" ? rn(_.USE_PROFILES) : _.USE_PROFILES : !1, Dn = _.ALLOW_ARIA_ATTR !== !1, io = _.ALLOW_DATA_ATTR !== !1, vr = _.ALLOW_UNKNOWN_PROTOCOLS || !1, Dt = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, It = _.SAFE_FOR_TEMPLATES || !1, Mn = _.SAFE_FOR_XML !== !1, ln = _.WHOLE_DOCUMENT || !1, yn = _.RETURN_DOM || !1, rr = _.RETURN_DOM_FRAGMENT || !1, bn = _.RETURN_TRUSTED_TYPE || !1, Yt = _.FORCE_BODY || !1, so = _.SANITIZE_DOM !== !1, Vn = _.SANITIZE_NAMED_PROPS || !1, Rr = _.KEEP_CONTENT !== !1, Nr = _.IN_PLACE || !1, nr = yI(_.ALLOWED_URI_REGEXP) ? _.ALLOWED_URI_REGEXP : cw, Un = typeof _.NAMESPACE == "string" ? _.NAMESPACE : Kt, ho = St(_, "MATHML_TEXT_INTEGRATION_POINTS") && _.MATHML_TEXT_INTEGRATION_POINTS && typeof _.MATHML_TEXT_INTEGRATION_POINTS == "object" ? rn(_.MATHML_TEXT_INTEGRATION_POINTS) : Le({}, Mr), po = St(_, "HTML_INTEGRATION_POINTS") && _.HTML_INTEGRATION_POINTS && typeof _.HTML_INTEGRATION_POINTS == "object" ? rn(_.HTML_INTEGRATION_POINTS) : Le({}, Fr);
    const x = St(_, "CUSTOM_ELEMENT_HANDLING") && _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING == "object" ? rn(_.CUSTOM_ELEMENT_HANDLING) : gs(null);
    if (pe = gs(null), St(x, "tagNameCheck") && mo(x.tagNameCheck) && (pe.tagNameCheck = x.tagNameCheck), St(x, "attributeNameCheck") && mo(x.attributeNameCheck) && (pe.attributeNameCheck = x.attributeNameCheck), St(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (pe.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), Pt(pe), It && (io = !1), rr && (yn = !0), Fn && (Ge = Le({}, aw), Ue = gs(null), Fn.html === !0 && (Le(Ge, sw), Le(Ue, lw)), Fn.svg === !0 && (Le(Ge, nf), Le(Ue, sf), Le(Ue, Kl)), Fn.svgFilters === !0 && (Le(Ge, rf), Le(Ue, sf), Le(Ue, Kl)), Fn.mathMl === !0 && (Le(Ge, of), Le(Ue, uw), Le(Ue, Kl))), nt.tagCheck = null, nt.attributeCheck = null, St(_, "ADD_TAGS") && (typeof _.ADD_TAGS == "function" ? nt.tagCheck = _.ADD_TAGS : Po(_.ADD_TAGS) && (Ge === Or && (Ge = rn(Ge)), Le(Ge, _.ADD_TAGS, J))), St(_, "ADD_ATTR") && (typeof _.ADD_ATTR == "function" ? nt.attributeCheck = _.ADD_ATTR : Po(_.ADD_ATTR) && (Ue === oo && (Ue = rn(Ue)), Le(Ue, _.ADD_ATTR, J))), St(_, "ADD_URI_SAFE_ATTR") && Po(_.ADD_URI_SAFE_ATTR) && Le(Br, _.ADD_URI_SAFE_ATTR, J), St(_, "FORBID_CONTENTS") && Po(_.FORBID_CONTENTS) && (jt === lo && (jt = rn(jt)), Le(jt, _.FORBID_CONTENTS, J)), St(_, "ADD_FORBID_CONTENTS") && Po(_.ADD_FORBID_CONTENTS) && (jt === lo && (jt = rn(jt)), Le(jt, _.ADD_FORBID_CONTENTS, J)), Rr && (Ge["#text"] = !0), ln && Le(Ge, ["html", "head", "body"]), Ge.table && (Le(Ge, ["tbody"]), delete ft.tbody), _.TRUSTED_TYPES_POLICY) {
      if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw di('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw di('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const z = F;
      F = _.TRUSTED_TYPES_POLICY;
      try {
        O = he("");
      } catch (Q) {
        throw F = z, Q;
      }
    } else _.TRUSTED_TYPES_POLICY === null ? (F = void 0, O = "") : (F === void 0 && (F = we()), F && typeof O == "string" && (O = he("")));
    Bt && Bt(_), Ae = _;
  }, Ko = Le({}, [...nf, ...rf, ...bI]), Zo = Le({}, [...of, ...VI]), Pi = function(_, x, z) {
    return x.namespaceURI === Kt ? _ === "svg" : x.namespaceURI === Pr ? _ === "svg" && (z === "annotation-xml" || ho[z]) : !!Ko[_];
  }, Di = function(_, x, z) {
    return x.namespaceURI === Kt ? _ === "math" : x.namespaceURI === Dr ? _ === "math" && po[z] : !!Zo[_];
  }, Mi = function(_, x, z) {
    return x.namespaceURI === Dr && !po[z] || x.namespaceURI === Pr && !ho[z] ? !1 : !Zo[_] && (Bi[_] || !Ko[_]);
  }, qr = function(_) {
    let x = k(_);
    (!x || !x.tagName) && (x = {
      namespaceURI: Un,
      tagName: "template"
    });
    const z = Da(_.tagName), Q = Da(x.tagName);
    return fo[_.namespaceURI] ? _.namespaceURI === Dr ? Pi(z, x, Q) : _.namespaceURI === Pr ? Di(z, x, Q) : _.namespaceURI === Kt ? Mi(z, x, Q) : !!(_r === "application/xhtml+xml" && fo[_.namespaceURI]) : !1;
  }, Cn = function(_) {
    os(o.removed, {
      element: _
    });
    try {
      k(_).removeChild(_);
    } catch {
      if (C(_), !k(_))
        throw di("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, gr = function(_) {
    const x = B(_);
    if (x) {
      const Q = [];
      ha(x, (ve) => {
        os(Q, ve);
      }), ha(Q, (ve) => {
        try {
          C(ve);
        } catch {
        }
      });
    }
    const z = R(_);
    if (z)
      for (let Q = z.length - 1; Q >= 0; --Q) {
        const ve = z[Q], Se = ve && ve.name;
        if (typeof Se == "string")
          try {
            _.removeAttribute(Se);
          } catch {
          }
      }
  }, qn = function(_, x) {
    try {
      os(o.removed, {
        attribute: x.getAttributeNode(_),
        from: x
      });
    } catch {
      os(o.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(_), _ === "is")
      if (yn || rr)
        try {
          Cn(x);
        } catch {
        }
      else
        try {
          x.setAttribute(_, "");
        } catch {
        }
  }, Fi = function(_) {
    const x = R(_);
    if (x)
      for (let z = x.length - 1; z >= 0; --z) {
        const Q = x[z], ve = Q && Q.name;
        if (!(typeof ve != "string" || Ue[J(ve)]))
          try {
            _.removeAttribute(ve);
          } catch {
          }
      }
  }, rc = function(_) {
    const x = [_];
    for (; x.length > 0; ) {
      const z = x.pop();
      (D ? D(z) : z.nodeType) === Vr.element && Fi(z);
      const ve = B(z);
      if (ve)
        for (let Se = ve.length - 1; Se >= 0; --Se)
          x.push(ve[Se]);
    }
  }, Gs = function(_) {
    let x = null, z = null;
    if (Yt)
      _ = "<remove></remove>" + _;
    else {
      const Se = nw(_, /^[\r\n\t ]+/);
      z = Se && Se[0];
    }
    _r === "application/xhtml+xml" && Un === Kt && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const Q = F ? he(_) : _;
    if (Un === Kt)
      try {
        x = new w().parseFromString(Q, _r);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = Je.createDocument(Un, "template", null);
      try {
        x.documentElement.innerHTML = co ? O : Q;
      } catch {
      }
    }
    const ve = x.body || x.documentElement;
    return _ && z && ve.insertBefore(r.createTextNode(z), ve.childNodes[0] || null), Un === Kt ? Vt.call(x, ln ? "html" : "body")[0] : ln ? x.documentElement : ve;
  }, Ys = function(_) {
    return zt.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      v.SHOW_ELEMENT | v.SHOW_COMMENT | v.SHOW_TEXT | v.SHOW_PROCESSING_INSTRUCTION | v.SHOW_CDATA_SECTION,
      null
    );
  }, Xo = function(_) {
    return _ = pa(_, te, " "), _ = pa(_, ue, " "), _ = pa(_, Ke, " "), _;
  }, js = function(_) {
    var x;
    _.normalize();
    const z = zt.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      v.SHOW_TEXT | v.SHOW_COMMENT | v.SHOW_CDATA_SECTION | v.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Q = z.nextNode();
    for (; Q; )
      Q.data = Xo(Q.data), Q = z.nextNode();
    const ve = (x = _.querySelectorAll) === null || x === void 0 ? void 0 : x.call(_, "template");
    ve && ha(ve, (Se) => {
      wo(Se.content) && js(Se.content);
    });
  }, Ui = function(_) {
    const x = q ? q(_) : null;
    return typeof x != "string" || J(x) !== "form" ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    _.attributes !== R(_) || typeof _.removeAttribute != "function" || typeof _.setAttribute != "function" || typeof _.namespaceURI != "string" || typeof _.insertBefore != "function" || typeof _.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    _.nodeType !== D(_) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    _.childNodes !== B(_);
  }, wo = function(_) {
    if (!D || typeof _ != "object" || _ === null)
      return !1;
    try {
      return D(_) === Vr.documentFragment;
    } catch {
      return !1;
    }
  }, Jo = function(_) {
    if (!D || typeof _ != "object" || _ === null)
      return !1;
    try {
      return typeof D(_) == "number";
    } catch {
      return !1;
    }
  };
  function Hn(G, _, x) {
    G.length !== 0 && ha(G, (z) => {
      z.call(o, _, x, Ae);
    });
  }
  const ol = function(_, x) {
    return !!(Mn && _.hasChildNodes() && !Jo(_.firstElementChild) && Rt(dw, _.textContent) && Rt(dw, _.innerHTML) || Mn && _.namespaceURI === Kt && x === "style" && Jo(_.firstElementChild) || _.nodeType === Vr.processingInstruction || Mn && _.nodeType === Vr.comment && Rt(OI, _.data));
  }, il = function(_, x) {
    if (!ft[x] && Qo(x) && (pe.tagNameCheck instanceof RegExp && Rt(pe.tagNameCheck, x) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(x)))
      return !1;
    if (Rr && !jt[x]) {
      const z = k(_), Q = B(_);
      if (Q && z) {
        const ve = Q.length;
        for (let Se = ve - 1; Se >= 0; --Se) {
          const ht = Nr ? Q[Se] : b(Q[Se], !0);
          z.insertBefore(ht, T(_));
        }
      }
    }
    return Cn(_), !0;
  }, qi = function(_) {
    if (Hn(A.beforeSanitizeElements, _, null), Ui(_))
      return Cn(_), !0;
    const x = J(q ? q(_) : _.nodeName);
    if (Hn(A.uponSanitizeElement, _, {
      tagName: x,
      allowedTags: Ge
    }), ol(_, x))
      return Cn(_), !0;
    if (ft[x] || !(nt.tagCheck instanceof Function && nt.tagCheck(x)) && !Ge[x])
      return il(_, x);
    if ((D ? D(_) : _.nodeType) === Vr.element && !qr(_) || (x === "noscript" || x === "noembed" || x === "noframes") && Rt(RI, _.innerHTML))
      return Cn(_), !0;
    if (It && _.nodeType === Vr.text) {
      const Q = Xo(_.textContent);
      _.textContent !== Q && (os(o.removed, {
        element: _.cloneNode()
      }), _.textContent = Q);
    }
    return Hn(A.afterSanitizeElements, _, null), !1;
  }, sl = function(_, x, z) {
    if (Gt[x] || so && (x === "id" || x === "name") && (z in r || z in Ur))
      return !1;
    const Q = Ue[x] || nt.attributeCheck instanceof Function && nt.attributeCheck(x, _);
    if (!(io && Rt(Fe, x))) {
      if (!(Dn && Rt(Pe, x))) {
        if (Q) {
          if (!Br[x]) {
            if (!Rt(nr, pa(z, sn, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && _ !== "script" && rw(z, "data:") === 0 && Yo[_])) {
                if (!(vr && !Rt(wt, pa(z, sn, "")))) {
                  if (z)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Qo(_) && (pe.tagNameCheck instanceof RegExp && Rt(pe.tagNameCheck, _) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(_)) && (pe.attributeNameCheck instanceof RegExp && Rt(pe.attributeNameCheck, x) || pe.attributeNameCheck instanceof Function && pe.attributeNameCheck(x, _)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && pe.allowCustomizedBuiltInElements && (pe.tagNameCheck instanceof RegExp && Rt(pe.tagNameCheck, z) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(z)))
        ) return !1;
      }
    }
    return !0;
  }, al = Le({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Qo = function(_) {
    return !al[Da(_)] && Rt(an, _);
  }, ll = function(_, x, z, Q) {
    if (F && typeof g == "object" && typeof g.getAttributeType == "function" && !z)
      switch (g.getAttributeType(_, x)) {
        case "TrustedHTML":
          return he(Q);
        case "TrustedScriptURL":
          return Ce(Q);
      }
    return Q;
  }, oc = function(_, x, z, Q) {
    try {
      z ? _.setAttributeNS(z, x, Q) : _.setAttribute(x, Q), Ui(_) ? Cn(_) : tw(o.removed);
    } catch {
      qn(x, _);
    }
  }, Ks = function(_) {
    Hn(A.beforeSanitizeAttributes, _, null);
    const x = _.attributes;
    if (!x || Ui(_))
      return;
    const z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Ue,
      forceKeepAttr: void 0
    };
    let Q = x.length;
    const ve = J(_.nodeName);
    for (; Q--; ) {
      const Se = x[Q], ht = Se.name, rt = Se.namespaceURI, Zt = Se.value, dn = J(ht), Hi = Zt;
      let At = ht === "value" ? Hi : mI(Hi);
      if (z.attrName = dn, z.attrValue = At, z.keepAttr = !0, z.forceKeepAttr = void 0, Hn(A.uponSanitizeAttribute, _, z), At = z.attrValue, Vn && (dn === "id" || dn === "name") && rw(At, ao) !== 0 && (qn(ht, _), At = ao + At), Mn && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, At)) {
        qn(ht, _);
        continue;
      }
      if (dn === "attributename" && nw(At, "href")) {
        qn(ht, _);
        continue;
      }
      if (!z.forceKeepAttr) {
        if (!z.keepAttr) {
          qn(ht, _);
          continue;
        }
        if (!Dt && Rt(NI, At)) {
          qn(ht, _);
          continue;
        }
        if (It && (At = Xo(At)), !sl(ve, dn, At)) {
          qn(ht, _);
          continue;
        }
        At = ll(ve, dn, rt, At), At !== Hi && oc(_, ht, rt, At);
      }
    }
    Hn(A.afterSanitizeAttributes, _, null);
  }, ei = function(_) {
    let x = null;
    const z = Ys(_);
    for (Hn(A.beforeSanitizeShadowDOM, _, null); x = z.nextNode(); )
      if (Hn(A.uponSanitizeShadowNode, x, null), qi(x), Ks(x), wo(x.content) && ei(x.content), (D ? D(x) : x.nodeType) === Vr.element) {
        const ve = I(x);
        wo(ve) && (ti(ve), ei(ve));
      }
    Hn(A.afterSanitizeShadowDOM, _, null);
  }, ti = function(_) {
    const x = [{
      node: _,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const z = x.pop();
      if (z.shadow) {
        ei(z.shadow);
        continue;
      }
      const Q = z.node, Se = (D ? D(Q) : Q.nodeType) === Vr.element, ht = B(Q);
      if (ht)
        for (let rt = ht.length - 1; rt >= 0; --rt)
          x.push({
            node: ht[rt],
            shadow: null
          });
      if (Se) {
        const rt = q ? q(Q) : null;
        if (typeof rt == "string" && J(rt) === "template") {
          const Zt = Q.content;
          wo(Zt) && x.push({
            node: Zt,
            shadow: null
          });
        }
      }
      if (Se) {
        const rt = I(Q);
        wo(rt) && x.push({
          node: null,
          shadow: rt
        }, {
          node: rt,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(G) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, z = null, Q = null, ve = null;
    if (co = !G, co && (G = "<!-->"), typeof G != "string" && !Jo(G) && (G = $I(G), typeof G != "string"))
      throw di("dirty is not a string, aborting");
    if (!o.isSupported)
      return G;
    un ? (Ge = wr, Ue = cn) : vo(_), (A.uponSanitizeElement.length > 0 || A.uponSanitizeAttribute.length > 0) && (Ge = rn(Ge)), A.uponSanitizeAttribute.length > 0 && (Ue = rn(Ue)), o.removed = [];
    const Se = Nr && typeof G != "string" && Jo(G);
    if (Se) {
      const Zt = q ? q(G) : G.nodeName;
      if (typeof Zt == "string") {
        const dn = J(Zt);
        if (!Ge[dn] || ft[dn])
          throw di("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ui(G))
        throw di("root node is clobbered and cannot be sanitized in-place");
      try {
        ti(G);
      } catch (dn) {
        throw gr(G), dn;
      }
    } else if (Jo(G))
      x = Gs("<!---->"), z = x.ownerDocument.importNode(G, !0), z.nodeType === Vr.element && z.nodeName === "BODY" || z.nodeName === "HTML" ? x = z : x.appendChild(z), ti(z);
    else {
      if (!yn && !It && !ln && // eslint-disable-next-line unicorn/prefer-includes
      G.indexOf("<") === -1)
        return F && bn ? he(G) : G;
      if (x = Gs(G), !x)
        return yn ? null : bn ? O : "";
    }
    x && Yt && Cn(x.firstChild);
    const ht = Ys(Se ? G : x);
    try {
      for (; Q = ht.nextNode(); )
        qi(Q), Ks(Q), wo(Q.content) && ei(Q.content);
    } catch (Zt) {
      throw Se && gr(G), Zt;
    }
    if (Se)
      return ha(o.removed, (Zt) => {
        Zt.element && rc(Zt.element);
      }), It && js(G), G;
    if (yn) {
      if (It && js(x), rr)
        for (ve = Qe.call(x.ownerDocument); x.firstChild; )
          ve.appendChild(x.firstChild);
      else
        ve = x;
      return (Ue.shadowroot || Ue.shadowrootmode) && (ve = Go.call(s, ve, !0)), ve;
    }
    let rt = ln ? x.outerHTML : x.innerHTML;
    return ln && Ge["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Rt(xI, x.ownerDocument.doctype.name) && (rt = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + rt), It && (rt = Xo(rt)), F && bn ? he(rt) : rt;
  }, o.setConfig = function() {
    let G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    vo(G), un = !0, wr = Ge, cn = Ue;
  }, o.clearConfig = function() {
    Ae = null, un = !1, wr = null, cn = null, F = j, O = "";
  }, o.isValidAttribute = function(G, _, x) {
    Ae || vo({});
    const z = J(G), Q = J(_);
    return sl(z, Q, x);
  }, o.addHook = function(G, _) {
    typeof _ == "function" && St(A, G) && os(A[G], _);
  }, o.removeHook = function(G, _) {
    if (St(A, G)) {
      if (_ !== void 0) {
        const x = hI(A[G], _);
        return x === -1 ? void 0 : pI(A[G], x, 1)[0];
      }
      return tw(A[G]);
    }
  }, o.removeHooks = function(G) {
    St(A, G) && (A[G] = []);
  }, o.removeAllHooks = function() {
    A = fw();
  }, o;
}
var DI = y1();
const xr = (e) => {
  let o = "";
  if (e)
    try {
      o = XT(new Date(e), kt.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, b1 = (e) => e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"), V1 = (e) => DI.sanitize(e), C1 = (e, o) => {
  const r = b1(e).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), s = r.length > o ? "..." : "";
  return r.substring(0, o) + s;
}, MI = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (s) => nI(s.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (s) => oI(s.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (s) => tI(s.firstEventTime)
      );
      break;
  }
  return r;
}, FI = window.Vue.defineComponent, Ln = window.Vue.unref, af = window.Vue.normalizeClass, Tr = window.Vue.createElementVNode, fi = window.Vue.toDisplayString, Io = window.Vue.openBlock, Ao = window.Vue.createElementBlock, va = window.Vue.createCommentVNode, hw = window.Vue.createVNode, eh = window.Vue.createTextVNode, UI = window.Vue.renderList, qI = window.Vue.Fragment, HI = window.Vue.pushScopeId, WI = window.Vue.popScopeId, mh = (e) => (HI("data-v-aab1b2b8"), e = e(), WI(), e), zI = { class: "content" }, GI = { class: "title-row" }, YI = { class: "title" }, jI = ["title"], KI = {
  key: 1,
  class: "accepted"
}, ZI = {
  key: 2,
  class: "rejected"
}, XI = /* @__PURE__ */ mh(() => /* @__PURE__ */ Tr("span", { class: "info-title" }, " Duration: ", -1)), JI = { key: 0 }, QI = /* @__PURE__ */ mh(() => /* @__PURE__ */ Tr("span", { class: "info-title" }, " First Event: ", -1)), eA = { class: "description" }, tA = /* @__PURE__ */ mh(() => /* @__PURE__ */ Tr("hr", null, null, -1)), nA = {
  key: 1,
  class: "count-info"
}, rA = /* @__PURE__ */ eh(" Alarms: "), oA = { class: "info-title" }, iA = window.Vue.onMounted, sA = window.Vue.ref, aA = /* @__PURE__ */ FI({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, s = kt.ACCEPTED, a = kt.REJECTED, u = (/* @__PURE__ */ new Date()).getTime(), c = () => {
      var v;
      o("situation-selected", (v = r.situationInfo) == null ? void 0 : v.id);
    }, f = sA("none");
    return iA(async () => {
      var p;
      if (((p = r.situationInfo) == null ? void 0 : p.id) === void 0) return;
      const v = await u1(r.situationInfo.id);
      v && v.status && (f.value = v.status);
    }), (v, p) => {
      var w, g, y;
      return Io(), Ao("div", {
        onClick: c,
        class: af(["card", {
          rejected: r.situationInfo.status == Ln(a)
        }])
      }, [
        Tr("div", {
          class: af(["severity-line", [`${(g = (w = r.situationInfo) == null ? void 0 : w.severity) == null ? void 0 : g.toLowerCase()}-bg dark`]])
        }, null, 2),
        Tr("div", zI, [
          Tr("div", GI, [
            Tr("div", YI, "Situation " + fi((y = r.situationInfo) == null ? void 0 : y.id), 1),
            f.value !== "none" ? (Io(), Ao("span", {
              key: 0,
              class: af(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + fi(f.value === "pending" ? "…" : ""), 11, jI)) : va("", !0),
            r.situationInfo.status == Ln(s) ? (Io(), Ao("div", KI, [
              hw(Ln(oe), {
                icon: Ln(xs),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : va("", !0),
            r.situationInfo.status == Ln(a) ? (Io(), Ao("div", ZI, [
              hw(Ln(oe), {
                icon: Ln(f1),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : va("", !0)
          ]),
          Tr("div", null, [
            XI,
            eh(" " + fi(Ln(Uu)(
              Ln(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? va("", !0) : (Io(), Ao("div", JI, [
            QI,
            eh(fi(Ln(xr)(r.situationInfo.firstEventTime)), 1)
          ])),
          Tr("div", eA, fi(Ln(C1)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          tA,
          r.situationInfo.relatedAlarms ? (Io(), Ao("div", nA, [
            rA,
            Tr("span", oA, fi(r.situationInfo.relatedAlarms.length), 1)
          ])) : va("", !0),
          (Io(!0), Ao(qI, null, UI(Ln(ze.keys)(
            Ln(ze.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (b) => (Io(), Ao("div", {
            class: "info-title",
            key: b
          }, " - " + fi(b), 1))), 128))
        ])
      ], 2);
    };
  }
}), E1 = /* @__PURE__ */ Re(aA, [["__scopeId", "data-v-aab1b2b8"]]), lA = window.Vue.openBlock, uA = window.Vue.createElementBlock, cA = window.Vue.createElementVNode;
var dA = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fA = {}, hA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pA = /* @__PURE__ */ cA("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), mA = [
  pA
];
function vA(e, o) {
  return lA(), uA("svg", hA, mA);
}
var wA = /* @__PURE__ */ dA(fA, [["render", vA]]);
const _A = window.Vue.openBlock, gA = window.Vue.createElementBlock, S1 = window.Vue.createElementVNode;
var $A = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const yA = {}, bA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, VA = /* @__PURE__ */ S1("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), CA = /* @__PURE__ */ S1("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), EA = [
  VA,
  CA
];
function SA(e, o) {
  return _A(), gA("svg", bA, EA);
}
var kA = /* @__PURE__ */ $A(yA, [["render", SA]]);
const TA = window.Vue.openBlock, IA = window.Vue.createElementBlock, AA = window.Vue.createElementVNode;
var xA = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const LA = {}, OA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, RA = /* @__PURE__ */ AA("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), NA = [
  RA
];
function BA(e, o) {
  return TA(), IA("svg", OA, NA);
}
var PA = /* @__PURE__ */ xA(LA, [["render", BA]]);
const DA = window.Vue.openBlock, MA = window.Vue.createElementBlock, FA = window.Vue.createElementVNode;
var UA = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const qA = {}, HA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WA = /* @__PURE__ */ FA("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), zA = [
  WA
];
function GA(e, o) {
  return DA(), MA("svg", HA, zA);
}
var k1 = /* @__PURE__ */ UA(qA, [["render", GA]]);
const YA = window.Vue.defineComponent, xo = window.Vue.unref, Zl = window.Vue.normalizeClass, Xl = window.Vue.createVNode, jA = window.Vue.openBlock, KA = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const ZA = { class: "paginator" }, XA = /* @__PURE__ */ YA({
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
    return (a, u) => (jA(), KA("div", ZA, [
      Xl(xo(oe), {
        icon: xo(wA),
        "aria-hidden": "true",
        class: Zl(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      Xl(xo(oe), {
        icon: xo(PA),
        "aria-hidden": "true",
        class: Zl(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Xl(xo(oe), {
        icon: xo(k1),
        "aria-hidden": "true",
        class: Zl(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Xl(xo(oe), {
        icon: xo(kA),
        "aria-hidden": "true",
        class: Zl(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
}), JA = /* @__PURE__ */ Re(XA, [["__scopeId", "data-v-54e14a59"]]), Oe = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, QA = window.Vue.computed, qu = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = QA(() => e.value[s] ? e.value[s] : o[s]);
  }), r;
}, xi = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, Li = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var ex = Object.defineProperty, tx = Object.defineProperties, nx = Object.getOwnPropertyDescriptors, pw = Object.getOwnPropertySymbols, rx = Object.prototype.hasOwnProperty, ox = Object.prototype.propertyIsEnumerable, mw = (e, o, r) => o in e ? ex(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, vw = (e, o) => {
  for (var r in o || (o = {}))
    rx.call(o, r) && mw(e, r, o[r]);
  if (pw)
    for (var r of pw(o))
      ox.call(o, r) && mw(e, r, o[r]);
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
        this.styles = ix(vw({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Li(this.failsafe), this.failsafe = xi(() => {
            this.pressed = !1, this.active = !1;
          }, 500);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return ax("div", {
        style: vw({}, this.styles),
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
var qo = /* @__PURE__ */ lx(cx, [["__scopeId", "data-v-18e2a5db"]]);
const dx = window.Vue.openBlock, fx = window.Vue.createElementBlock, hx = window.Vue.createElementVNode;
var px = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const mx = {}, vx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, wx = /* @__PURE__ */ hx("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), _x = [
  wx
];
function gx(e, o) {
  return dx(), fx("svg", vx, _x);
}
var Rs = /* @__PURE__ */ px(mx, [["render", gx]]);
const ww = window.Vue.computed, $x = (e, o, r) => {
  const s = ww(() => o.value.filter((u) => !u.disabled)), a = ww(() => e.value ? s.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(s.value[s.value.length - 1]) : r(s.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === s.value.length - 1 ? r(s.value[0]) : r(s.value[a.value + 1]));
    }
  };
}, yx = window.Vue.openBlock, bx = window.Vue.createElementBlock, vh = window.Vue.createElementVNode;
var Vx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Cx = {}, Ex = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Sx = /* @__PURE__ */ vh("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), kx = /* @__PURE__ */ vh("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Tx = /* @__PURE__ */ vh("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), Ix = [
  Sx,
  kx,
  Tx
];
function Ax(e, o) {
  return yx(), bx("svg", Ex, Ix);
}
var xx = /* @__PURE__ */ Vx(Cx, [["render", Ax]]), Lx = Object.defineProperty, Ox = Object.defineProperties, Rx = Object.getOwnPropertyDescriptors, _w = Object.getOwnPropertySymbols, Nx = Object.prototype.hasOwnProperty, Bx = Object.prototype.propertyIsEnumerable, gw = (e, o, r) => o in e ? Lx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, T1 = (e, o) => {
  for (var r in o || (o = {}))
    Nx.call(o, r) && gw(e, r, o[r]);
  if (_w)
    for (var r of _w(o))
      Bx.call(o, r) && gw(e, r, o[r]);
  return e;
}, I1 = (e, o) => Ox(e, Rx(o));
const Ns = window.Vue.defineComponent, Ga = window.Vue.resolveComponent, Ir = window.Vue.openBlock, ys = window.Vue.createElementBlock, Px = window.Vue.createVNode, Iu = window.Vue.createBlock, Dx = window.Vue.withModifiers, Ls = window.Vue.inject, Ya = window.Vue.computed, Mx = window.Vue.normalizeClass, is = window.Vue.createElementVNode, Au = window.Vue.toDisplayString, $u = window.Vue.renderSlot, Ma = window.Vue.createCommentVNode, Fx = window.Vue.withDirectives, Ux = window.Vue.vShow, th = window.Vue.ref, $w = window.Vue.toRef, yw = window.Vue.nextTick, nh = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const wh = window.Vue.provide, bw = window.Vue.isRef, qx = window.Vue.onBeforeUnmount;
var Ja = (e, o) => {
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
}, Wx = Ns({
  props: Hx,
  components: {
    FeatherIcon: oe
  }
}), zx = ["title"];
function Gx(e, o, r, s, a, u) {
  const c = Ga("FeatherIcon");
  return Ir(), ys("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    Px(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, zx);
}
var Yx = /* @__PURE__ */ Ja(Wx, [["render", Gx], ["__scopeId", "data-v-4265058e"]]);
const jx = Ns({
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
    ActionIcon: Yx
  }
});
function Kx(e, o, r, s, a, u) {
  const c = Ga("ActionIcon");
  return Ir(), Iu(c, {
    onClick: o[0] || (o[0] = Dx((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var Zx = /* @__PURE__ */ Ja(jx, [["render", Kx]]);
const Xx = Ns({
  computed: {
    errorIcon() {
      return xx;
    }
  },
  components: {
    FeatherIcon: oe
  }
});
function Jx(e, o, r, s, a, u) {
  const c = Ga("FeatherIcon");
  return Ir(), Iu(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var Qx = /* @__PURE__ */ Ja(Xx, [["render", Jx], ["__scopeId", "data-v-0b8faef3"]]);
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
}, nL = Ns({
  emits: tL,
  props: eL,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = Ls("wrapperOptions", {}), o = Ls("validationErrorMessage", !1), r = Ya(() => e.error ? e.error : o && o.value ? o.value : !1);
    return I1(T1({}, e), { error: r });
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
    ClearIcon: Zx,
    ErrorIcon: Qx
  }
}), rL = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, oL = ["for"], iL = { class: "prefix" }, sL = { class: "post" };
function aL(e, o, r, s, a, u) {
  const c = Ga("ClearIcon"), f = Ga("ErrorIcon");
  return Ir(), ys("div", {
    class: Mx(["feather-input-wrapper-container", e.containerCls])
  }, [
    is("fieldset", rL, [
      is("legend", null, Au(e.label), 1)
    ]),
    is("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Au(e.label), 9, oL),
    is("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...v) => e.handleWrapperClick && e.handleWrapperClick(...v))
    }, [
      is("div", iL, [
        $u(e.$slots, "pre", {}, void 0, !0)
      ]),
      $u(e.$slots, "default", {}, void 0, !0),
      is("div", sL, [
        e.showClear && e.computedClearText ? (Ir(), Iu(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (v) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Ma("", !0),
        e.error ? (Ir(), Iu(f, { key: 1 })) : Ma("", !0),
        $u(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Hu = /* @__PURE__ */ Ja(nL, [["render", aL], ["__scopeId", "data-v-4db296db"]]);
const lL = Ns({
  setup() {
    const e = Ls("subTextOptions", {}), o = Ls("validationErrorMessage", !1), r = Ya(() => e.error ? e.error : o && o.value ? o.value : "");
    return I1(T1({}, e), { error: r });
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
function hL(e, o, r, s, a, u) {
  return Fx((Ir(), ys("div", uL, [
    !e.hint && !e.error.length ? (Ir(), ys("div", cL, " ")) : Ma("", !0),
    e.hint && !e.error.length ? (Ir(), ys("div", dL, Au(e.hint), 1)) : Ma("", !0),
    e.error.length > 0 ? (Ir(), ys("div", fL, Au(e.error), 1)) : Ma("", !0),
    $u(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [Ux, !e.inline || e.hint || e.error.length]
  ]);
}
var Bs = /* @__PURE__ */ Ja(lL, [["render", hL], ["__scopeId", "data-v-8e0ac99e"]]);
const pL = {
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
Ns({
  props: pL,
  setup(e) {
    const o = Ls("featherFormErrors", th([])), r = $w(e, "errorList"), s = Ya(() => {
      var w;
      return (w = r.value) != null && w.length ? r.value : o.value;
    }), a = $w(e, "generalError"), u = (w) => {
      document.getElementById(w).focus();
    }, c = (w) => w.replace(/ \*$/, ""), f = th(), v = (w) => `${c(w.label)} - ${w.message}`, p = Ya(() => (s.value.length && yw(() => f.value.focus()), e.headingText(s.value)));
    return nh(a, (w) => {
      w.length && yw(() => f.value.focus());
    }), {
      errors: s,
      errorsHeading: p,
      heading: f,
      focusElement: u,
      mainError: a,
      getFullMessage: v
    };
  }
});
const Ps = (e, o, r, s, a) => {
  const u = Ls("featherForm", !1);
  if (s && u && e.value) {
    const c = th("");
    wh("validationErrorMessage", c);
    const f = () => {
      if (a && bw(a) && a.value)
        return c.value = a.value, {
          success: !1,
          message: a.value,
          inputId: e.value,
          label: r
        };
      try {
        return s.validateSync(o.value), c.value = "", { success: !0 };
      } catch (w) {
        const g = w;
        return c.value = g.errors[0], {
          success: !1,
          message: g.errors[0],
          inputId: e.value,
          label: r
        };
      }
    }, p = {
      clear: () => {
        c.value = "";
      },
      validate: f
    };
    return a && bw(a) && nh(a, () => {
      u.runValidation();
    }), nh(e, (w, g) => {
      w && u && u.register(w, p), g && u && u.deregister(g);
    }, { immediate: !0 }), qx(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Ds = (e) => ({
  inherittedAttrs: Ya(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Ms = {
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
}, Fs = (e) => {
  wh("subTextOptions", e);
}, Wu = {
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
}, zu = (e) => {
  wh("wrapperOptions", e);
}, Jl = window.Vue.ref, mL = window.Vue.watch, vL = window.Vue.watchEffect, Vw = window.Vue.computed, lf = window.Vue.provide, A1 = (e, o, r, s, a) => {
  const u = Jl([]), c = Jl(), f = Jl(), v = Jl();
  vL(() => {
    if (!u.value.length)
      return;
    const k = u.value.map((I) => I.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[k.indexOf(e.value)]), !c.value && u.value.length) {
      let I = u.value.filter((R) => !R.disabled);
      I = I.length ? I : u.value, f.value = I[0], f.value.first = !0;
    }
  }), mL(c, (k, I) => {
    I && (I.checked = !1), k && (k.checked = !0);
  });
  const p = (k) => {
    k && k.disabled || (f.value && (f.value.first = !1), c.value !== k && (o("update:modelValue", k.value), c.value = k, k.focus()));
  }, w = Vw(() => c.value || f.value), g = $x(w, u, p), y = Vw(() => Oe("feather-radio-group"));
  v.value = y.value;
  const { validate: b } = Ps(v, e, r, s, a);
  return lf("register", (k) => {
    u.value = [...u.value, k], v.value === y.value && (v.value = k.id);
  }), lf("select", p), lf("blur", (k) => {
    o("blur", k);
  }), {
    keydown: (k) => {
      switch (k.keyCode) {
        case 13:
        case 32:
          c.value ? p(c.value) : f.value && p(f.value);
          break;
        //next
        case 40:
        case 39:
          g.selectNext();
          break;
        //previous
        case 37:
        case 38:
          g.selectPrevious();
          break;
      }
    },
    ...g,
    focus: () => {
      c.value && c.value.focus();
    },
    validate: b,
    firstElementId: v,
    groupId: y
  };
};
var wL = Object.defineProperty, _L = Object.defineProperties, gL = Object.getOwnPropertyDescriptors, Cw = Object.getOwnPropertySymbols, $L = Object.prototype.hasOwnProperty, yL = Object.prototype.propertyIsEnumerable, Ew = (e, o, r) => o in e ? wL(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Es = (e, o) => {
  for (var r in o || (o = {}))
    $L.call(o, r) && Ew(e, r, o[r]);
  if (Cw)
    for (var r of Cw(o))
      yL.call(o, r) && Ew(e, r, o[r]);
  return e;
}, x1 = (e, o) => _L(e, gL(o));
const Ho = window.Vue.defineComponent, Fa = window.Vue.inject, xu = window.Vue.computed, Ua = window.Vue.ref, tr = window.Vue.resolveComponent, Bn = window.Vue.openBlock, Qa = window.Vue.createElementBlock, L1 = window.Vue.normalizeClass, Lr = window.Vue.renderSlot, Mo = window.Vue.createBlock, ja = window.Vue.createCommentVNode, Lu = window.Vue.createElementVNode, bL = window.Vue.withModifiers, Gu = window.Vue.createVNode, O1 = window.Vue.toRef, rh = window.Vue.mergeProps, no = window.Vue.withCtx, VL = window.Vue.h, CL = window.Vue.provide;
var Wo = (e, o) => {
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
}, SL = Ho({
  props: EL,
  setup(e) {
    const o = Fa("isCondensed", null), r = xu(() => o || e.condensed), s = Ua(!1);
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
}), kL = ["aria-disabled"];
function TL(e, o, r, s, a, u) {
  const c = tr("FeatherRipple");
  return Bn(), Qa("div", {
    class: L1(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    Lr(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (Bn(), Mo(c, { key: 0 })) : ja("", !0)
  ], 42, kL);
}
var Yu = /* @__PURE__ */ Wo(SL, [["render", TL], ["__scopeId", "data-v-44d413dc"]]);
const IL = {
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
}, AL = Ho({
  emits: ["delete"],
  props: IL,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: Rs
    };
  },
  components: {
    FeatherIcon: oe
  }
}), xL = { class: "chip-delete" }, LL = ["aria-label", "aria-describedby"];
function OL(e, o, r, s, a, u) {
  const c = tr("FeatherIcon");
  return Bn(), Qa("span", xL, [
    Lu("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = bL((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      Gu(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, LL)
  ]);
}
var RL = /* @__PURE__ */ Wo(AL, [["render", OL], ["__scopeId", "data-v-4bae6cb4"]]);
const NL = Ho({
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
}), BL = ["title"];
function PL(e, o, r, s, a, u) {
  return Bn(), Qa("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    Lr(e.$slots, "default", {}, void 0, !0)
  ], 8, BL);
}
var ju = /* @__PURE__ */ Wo(NL, [["render", PL], ["__scopeId", "data-v-1a0445b2"]]);
const DL = {}, ML = {
  class: "chip-icon",
  role: "presentation"
};
function FL(e, o) {
  return Bn(), Qa("span", ML, [
    Lr(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Ku = /* @__PURE__ */ Wo(DL, [["render", FL], ["__scopeId", "data-v-2230176f"]]);
const Sw = {
  delete: "Remove"
}, UL = Ho({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Sw
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, o) {
    const r = qu(O1(e, "labels"), Sw), s = xu(() => Oe("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = Es({}, o.attrs);
    return e.disabled && delete u.onClick, x1(Es({}, r), {
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
    Chip: Yu,
    DeleteIcon: RL,
    Label: ju,
    PreIcon: Ku
  }
}), qL = ["aria-disabled"];
function HL(e, o, r, s, a, u) {
  const c = tr("PreIcon"), f = tr("Label"), v = tr("DeleteIcon"), p = tr("Chip");
  return Bn(), Mo(p, rh(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: no(() => [
      Lu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Lu("span", rh(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (Bn(), Mo(c, { key: 0 }, {
            default: no(() => [
              Lr(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : ja("", !0),
          Gu(f, { id: e.chipTextId }, {
            default: no(() => [
              Lr(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, qL),
      e.canDelete ? (Bn(), Mo(v, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (w) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : ja("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var WL = /* @__PURE__ */ Wo(UL, [["render", HL], ["__scopeId", "data-v-48b2704a"]]);
const zL = Ho({
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
    Chip: Yu,
    Label: ju,
    PreIcon: Ku
  }
}), GL = ["aria-disabled"];
function YL(e, o, r, s, a, u) {
  const c = tr("PreIcon"), f = tr("Label"), v = tr("Chip");
  return Bn(), Mo(v, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: no(() => [
      Lu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (Bn(), Mo(c, { key: 0 }, {
          default: no(() => [
            Lr(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : ja("", !0),
        Gu(f, null, {
          default: no(() => [
            Lr(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, GL)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var jL = /* @__PURE__ */ Wo(zL, [["render", YL], ["__scopeId", "data-v-3e0c4eba"]]);
const KL = Ho({
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
    const o = Ua(!1), r = Ua(!1), s = xu(() => Oe("chip-label-id")), a = xu(() => o.value || r.value ? 0 : -1), u = Ua(), c = () => {
      u.value.$el.focus();
    }, f = Fa("register", (y) => {
    }), v = Fa("blur", (y) => {
    }), p = Fa("select", (y) => {
    }), w = {
      first: o,
      focus: c,
      disabled: e.disabled,
      value: e.value,
      checked: r
    };
    return f(w), {
      labelId: s,
      tabindex: a,
      first: o,
      blur: v,
      click: () => {
        p(w);
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
    Chip: Yu,
    Label: ju,
    PreIcon: Ku
  }
});
function ZL(e, o, r, s, a, u) {
  const c = tr("PreIcon"), f = tr("Label"), v = tr("Chip");
  return Bn(), Mo(v, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: L1(["focus hover", { selected: e.checked }]),
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
    default: no(() => [
      e.hasIcon ? (Bn(), Mo(c, { key: 0 }, {
        default: no(() => [
          Lr(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : ja("", !0),
      Gu(f, { id: e.labelId }, {
        default: no(() => [
          Lr(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var XL = /* @__PURE__ */ Wo(KL, [["render", ZL], ["__scopeId", "data-v-bbcc2f70"]]);
const JL = {
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
}, kw = Ho({
  props: JL,
  setup() {
    return { format: Fa("chipListFormat", "") };
  },
  render() {
    const e = (o) => VL(o, Es(Es({}, this.$props), this.$attrs), Es({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(WL) : this.format === "radio" ? e(XL) : e(jL);
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
}, eO = Ho({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: QL,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    CL("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const c = O1(e, "modelValue");
      return x1(Es({
        attrs: {
          role: "radiogroup"
        }
      }, A1(c, o.emit, e.label, {}, Ua(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), tO = ["aria-label"];
function nO(e, o, r, s, a, u) {
  return Bn(), Qa("div", rh(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    Lr(e.$slots, "default", {}, void 0, !0)
  ], 16, tO);
}
var rO = /* @__PURE__ */ Wo(eO, [["render", nO], ["__scopeId", "data-v-1e06f41d"]]);
const oO = window.Vue.defineComponent, iO = window.Vue.normalizeClass, sO = window.Vue.openBlock, aO = window.Vue.createElementBlock, lO = window.Vue.createCommentVNode, uO = /* @__PURE__ */ oO({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (sO(), aO("span", {
      key: 0,
      class: iO(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : lO("", !0);
  }
}), cO = /* @__PURE__ */ Re(uO, [["__scopeId", "data-v-e08880d6"]]), dO = window.Vue.defineComponent, wa = window.Vue.unref, R1 = window.Vue.createTextVNode, uf = window.Vue.normalizeClass, cf = window.Vue.withCtx, fO = window.Vue.createVNode, hO = window.Vue.renderList, pO = window.Vue.Fragment, Ql = window.Vue.openBlock, mO = window.Vue.createElementBlock, df = window.Vue.createBlock, Tw = window.Vue.createCommentVNode, vO = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const wO = /* @__PURE__ */ R1(" ALL "), Iw = window.Vue.ref, _O = window.Vue.watch, gO = window.Vue.computed, $O = window.Vue.reactive, yO = /* @__PURE__ */ dO({
  __name: "ChipListByProperty",
  props: {
    alarms: null,
    property: null,
    preSelected: null,
    isVertical: { type: Boolean }
  },
  emits: ["selected-option"],
  setup(e, { emit: o }) {
    var v;
    const r = e, s = Iw(!1), a = gO(() => ze.keys(ze.groupBy(r.alarms, r.property))), u = Iw(
      (v = r.preSelected) != null && v.length ? r.preSelected : ["all"]
    ), c = $O({
      alarms: r.alarms
    }), f = (p) => {
      u.value = u.value.filter((w) => w !== "all"), u.value.includes(p) ? u.value = u.value.filter((w) => w !== p) : u.value.push(p), (p === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return _O(r, () => {
      var p;
      u.value = (p = r.preSelected) != null && p.length ? r.preSelected : ["all"], c.alarms = r.alarms, s.value = !1;
    }), (p, w) => wa(a).length > 0 ? (Ql(), df(wa(rO), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: uf({ vertical: r.isVertical })
    }, {
      default: cf(() => [
        fO(wa(kw), {
          class: uf({ clicked: u.value.includes("all") }),
          onClick: w[0] || (w[0] = (g) => f("all"))
        }, {
          default: cf(() => [
            wO
          ]),
          _: 1
        }, 8, ["class"]),
        (Ql(!0), mO(pO, null, hO(wa(a), (g) => (Ql(), df(wa(kw), {
          class: uf([
            { clicked: u.value.includes(g) },
            `${g == null ? void 0 : g.toLowerCase()}-bg`
          ]),
          key: g,
          onClick: (y) => f(g)
        }, {
          default: cf(() => [
            e.property == "severity" ? (Ql(), df(cO, {
              key: 0,
              severity: g
            }, null, 8, ["severity"])) : Tw("", !0),
            R1(vO(g), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : Tw("", !0);
  }
}), bO = /* @__PURE__ */ Re(yO, [["__scopeId", "data-v-f000b5a0"]]), VO = window.Vue.watch, CO = window.Vue.onBeforeUnmount, EO = window.Vue.ref, SO = window.Vue.onMounted, kO = (e) => {
  const o = EO(!1);
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
  return SO(() => {
    const c = VO(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    CO(() => {
      c(), u();
    });
  }), o;
}, TO = window.Vue.watch, IO = window.Vue.onBeforeUnmount, AO = window.Vue.ref, xO = window.Vue.onMounted, LO = (e, o) => {
  const r = AO(!1), s = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((p) => p && p.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return xO(() => {
    const c = TO(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    IO(() => {
      c(), u();
    });
  }), r;
}, OO = window.Vue.watch, RO = window.Vue.onBeforeUnmount, NO = window.Vue.ref, N1 = (e, o) => {
  const r = NO(!1);
  let s = !1;
  const a = (v) => {
    o(v), s = !1;
  };
  function u(v) {
    s || (requestAnimationFrame(() => a(v)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = OO([e, r], ([v, p], w) => {
    w && w.length && w[0] && w[0].removeEventListener("scroll", u, !0), p && v ? v.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return RO(() => {
    f(), c();
  }), r;
}, BO = window.Vue.defineComponent, Xr = window.Vue.ref, Aw = window.Vue.toRef, PO = window.Vue.onMounted, DO = window.Vue.watch, xw = window.Vue.computed, MO = window.Vue.nextTick, Lw = window.Vue.openBlock, Ow = window.Vue.createElementBlock, Rw = window.Vue.renderSlot, FO = window.Vue.normalizeClass, UO = window.Vue.normalizeStyle, qO = window.Vue.createCommentVNode;
var HO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const WO = {
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
}, GO = BO({
  emits: zO,
  props: WO,
  setup(e, o) {
    const r = Xr(), s = Xr(), a = Aw(e, "open"), u = Aw(e, "noExpand"), c = Xr("auto"), f = Xr(), v = Xr(e.triggerId || Oe("feather-menu-trigger")), p = Xr(Oe("feather-menu-dropdown")), w = Xr(""), g = Xr("");
    PO(() => {
      f.value = window;
    });
    const y = Xr(!1), b = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), C = () => {
      if (!s.value)
        return;
      const q = r.value.getBoundingClientRect();
      y.value = !0, c.value = "auto", MO(() => {
        let { height: F, width: O } = s.value.getBoundingClientRect();
        const j = b(), Y = j.height, X = j.width;
        e.fill && O < q.width ? (c.value = q.width + "px", O = q.width) : c.value = O + "px";
        let re = 0;
        Y - q.bottom < F && q.top >= F ? (re = q.top - F, e.cover && (re += q.height)) : (re = q.bottom, e.cover && (re -= q.height));
        let he = e.right ? q.right - O : q.left;
        !e.right && q.right >= O && X - q.left < O && (he = q.right - O), e.right && q.right <= O && X - q.left > O && (he = q.left), g.value = `${he}px`, w.value = `${re}px`, y.value = !1;
      });
    }, B = LO(r, (q) => {
      o.emit("outside-click", q);
    }), k = kO(C), I = N1(f, C);
    DO([a, s], ([q, F]) => {
      q && F && C(), B.value = q, k.value = q, I.value = q;
    });
    const R = xw(() => {
      const q = {
        id: v.value,
        "aria-haspopup": "true"
      };
      return a.value && (q["aria-controls"] = p.value), u.value || (q["aria-expanded"] = a.value ? "true" : "false"), q;
    }), D = xw(() => ({
      click: (q) => {
        o.emit("trigger-click", q);
      }
    }));
    return {
      positionTop: w,
      positionLeft: g,
      triggerId: v,
      triggerAttrs: R,
      triggerListeners: D,
      menuId: p,
      menu: s,
      menuWidth: c,
      root: r,
      calculatePosition: C,
      calculating: y
    };
  }
}), YO = ["data-ref-id"], jO = ["data-ref-id", "id"];
function KO(e, o, r, s, a, u) {
  return Lw(), Ow("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    Rw(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (Lw(), Ow("div", {
      key: 0,
      class: FO(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: UO({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      Rw(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, jO)) : qO("", !0)
  ], 8, YO);
}
var B1 = /* @__PURE__ */ HO(GO, [["render", KO], ["__scopeId", "data-v-f75af406"]]), ZO = {
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
const XO = window.Vue.openBlock, JO = window.Vue.createElementBlock, QO = window.Vue.createElementVNode;
var eR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tR = {}, nR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, rR = /* @__PURE__ */ QO("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), oR = [
  rR
];
function iR(e, o) {
  return XO(), JO("svg", nR, oR);
}
var sR = /* @__PURE__ */ eR(tR, [["render", iR]]);
const aR = window.Vue.openBlock, lR = window.Vue.createElementBlock, _h = window.Vue.createElementVNode;
var uR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const cR = {}, dR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fR = /* @__PURE__ */ _h("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), hR = /* @__PURE__ */ _h("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), pR = /* @__PURE__ */ _h("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), mR = [
  fR,
  hR,
  pR
];
function vR(e, o) {
  return aR(), lR("svg", dR, mR);
}
var wR = /* @__PURE__ */ uR(cR, [["render", vR]]);
const _R = window.Vue.openBlock, gR = window.Vue.createElementBlock, $R = window.Vue.createElementVNode;
var yR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const bR = {}, VR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, CR = /* @__PURE__ */ $R("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), ER = [
  CR
];
function SR(e, o) {
  return _R(), gR("svg", VR, ER);
}
var el = /* @__PURE__ */ yR(bR, [["render", SR]]);
const Ka = function(e, o) {
  if (!e || !o)
    return;
  let r = e.getBoundingClientRect().height;
  const s = getComputedStyle(e);
  r += parseInt(s.getPropertyValue("margin-top"), 10), r += parseInt(s.getPropertyValue("margin-bottom"), 10), o.scrollTop = e.offsetTop - o.getBoundingClientRect().height + r;
}, be = {
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
}, kR = window.Vue.defineComponent, TR = window.Vue.openBlock, IR = window.Vue.createElementBlock, AR = window.Vue.normalizeClass, xR = window.Vue.pushScopeId, LR = window.Vue.popScopeId, oh = window.Vue.createElementVNode;
var OR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const RR = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, NR = {
  click: (e) => !0
}, BR = kR({
  emits: NR,
  props: RR,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), P1 = (e) => (xR("data-v-07e020f5"), e = e(), LR(), e), PR = /* @__PURE__ */ P1(() => /* @__PURE__ */ oh("div", { class: "track" }, null, -1)), DR = /* @__PURE__ */ P1(() => /* @__PURE__ */ oh("div", { class: "switcher" }, [
  /* @__PURE__ */ oh("div", { class: "switch-circle" })
], -1)), MR = [
  PR,
  DR
];
function FR(e, o, r, s, a, u) {
  return TR(), IR("div", {
    class: AR(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, MR, 2);
}
var UR = /* @__PURE__ */ OR(BR, [["render", FR], ["__scopeId", "data-v-07e020f5"]]), qR = Object.defineProperty, HR = Object.defineProperties, WR = Object.getOwnPropertyDescriptors, Nw = Object.getOwnPropertySymbols, zR = Object.prototype.hasOwnProperty, GR = Object.prototype.propertyIsEnumerable, Bw = (e, o, r) => o in e ? qR(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Pw = (e, o) => {
  for (var r in o || (o = {}))
    zR.call(o, r) && Bw(e, r, o[r]);
  if (Nw)
    for (var r of Nw(o))
      GR.call(o, r) && Bw(e, r, o[r]);
  return e;
}, Dw = (e, o) => HR(e, WR(o));
const gh = window.Vue.defineComponent, hi = window.Vue.h, YR = window.Vue.openBlock, jR = window.Vue.createElementBlock, KR = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var D1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ZR = {
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
}, XR = gh({
  inheritAttrs: !1,
  props: ZR,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = hi("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = hi("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = hi("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : hi(qo);
    if (this.asLi)
      return hi("li", Dw(Pw({}, this.$attrs), {
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
    const u = hi("a", Dw(Pw({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, s, a]);
    return hi("li", {}, [u]);
  }
});
var tl = /* @__PURE__ */ D1(XR, [["__scopeId", "data-v-7c46b2b3"]]);
gh({
  components: {
    FeatherListItem: tl
  }
});
const JR = {}, QR = { class: "feather-list" };
function e3(e, o) {
  return YR(), jR("ul", QR, [
    KR(e.$slots, "default", {}, void 0, !0)
  ]);
}
var $h = /* @__PURE__ */ D1(JR, [["render", e3], ["__scopeId", "data-v-941a1d50"]]);
const t3 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, n3 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
gh({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: t3,
  props: n3,
  computed: {
    labelId() {
      return Oe("switch-label");
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
      (e.keyCode === be.SPACE || e.keyCode === be.ENTER) && this.updateValue(), e.keyCode === be.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: UR, FeatherListItem: tl }
});
var r3 = Object.defineProperty, o3 = Object.defineProperties, i3 = Object.getOwnPropertyDescriptors, Mw = Object.getOwnPropertySymbols, s3 = Object.prototype.hasOwnProperty, a3 = Object.prototype.propertyIsEnumerable, Fw = (e, o, r) => o in e ? r3(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Pn = (e, o) => {
  for (var r in o || (o = {}))
    s3.call(o, r) && Fw(e, r, o[r]);
  if (Mw)
    for (var r of Mw(o))
      a3.call(o, r) && Fw(e, r, o[r]);
  return e;
}, l3 = (e, o) => o3(e, i3(o));
const Us = window.Vue.defineComponent, Be = window.Vue.openBlock, $t = window.Vue.createElementBlock, gn = window.Vue.createElementVNode, pr = window.Vue.toDisplayString, er = window.Vue.createCommentVNode, pt = window.Vue.resolveComponent, Qn = window.Vue.createBlock, Ht = window.Vue.withCtx, Ss = window.Vue.Fragment, qa = window.Vue.renderList, $n = window.Vue.createVNode, yh = window.Vue.withModifiers, Ii = window.Vue.normalizeClass, ih = window.Vue.renderSlot, M1 = window.Vue.createTextVNode, u3 = window.Vue.pushScopeId, c3 = window.Vue.popScopeId, F1 = window.Vue.reactive, U1 = window.Vue.nextTick, ff = window.Vue.markRaw, hf = window.Vue.toRef, Uw = window.Vue.computed, d3 = window.Vue.toRefs, ss = window.Vue.ref, pf = window.Vue.mergeProps, qw = window.Vue.toHandlers, eu = window.Vue.withDirectives, tu = window.Vue.vShow;
var Zu = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, bh = {
  query: {
    type: String
  }
}, Ri = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const f3 = Us({
  mixins: [],
  props: Pn(Pn({
    text: {
      type: String,
      required: !0
    }
  }, Zu), bh),
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
}), h3 = {
  key: 0,
  class: "highlight"
}, p3 = { key: 1 };
function m3(e, o, r, s, a, u) {
  return Be(), $t("span", null, [
    gn("span", null, pr(e.beginning), 1),
    e.highlighted ? (Be(), $t("span", h3, pr(e.highlighted), 1)) : er("", !0),
    e.end ? (Be(), $t("span", p3, pr(e.end), 1)) : er("", !0)
  ]);
}
var q1 = /* @__PURE__ */ Ri(f3, [["render", m3], ["__scopeId", "data-v-8abe2492"]]);
const v3 = Us({
  emits: ["select", "deselect"],
  props: Pn(Pn({
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
  }, Zu), bh),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        Ka(o, r.$el);
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
    FeatherList: $h,
    FeatherListItem: tl,
    Highlighter: q1
  }
}), w3 = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function _3(e, o, r, s, a, u) {
  const c = pt("Highlighter"), f = pt("FeatherListItem"), v = pt("FeatherList");
  return Be(), Qn(v, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: Ht(() => [
      (Be(!0), $t(Ss, null, qa(e.items, (p, w) => (Be(), $t(Ss, {
        key: p[e.textProp]
      }, [
        $n(f, {
          "as-li": "",
          id: e.getId(w),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(p),
          highlighted: e.isActive(w),
          selected: e.isSelected(p),
          onClick: yh((g) => e.select(p), ["stop"])
        }, {
          default: Ht(() => [
            $n(c, {
              highlight: e.highlight,
              query: e.query,
              text: p[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            p._new ? (Be(), $t("span", w3, pr(e.newLabel), 1)) : er("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && p._new ? (Be(), $t("li", {
          role: "presentation",
          key: p[e.textProp] + "hr",
          class: "hr"
        })) : er("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var g3 = /* @__PURE__ */ Ri(v3, [["render", _3], ["__scopeId", "data-v-f623434a"]]);
const $3 = Us({
  emits: ["select"],
  props: Pn(Pn({
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
  }, Zu), bh),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        Ka(o, r);
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
    Highlighter: q1
  }
}), y3 = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, b3 = ["aria-multiselectable"], V3 = { role: "row" }, C3 = ["aria-selected", "onClick"], E3 = ["id", "aria-selected"], S3 = { key: 1 };
function k3(e, o, r, s, a, u) {
  const c = pt("Highlighter");
  return Be(), $t("div", y3, [
    gn("table", {
      class: Ii(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      gn("thead", null, [
        gn("tr", V3, [
          (Be(!0), $t(Ss, null, qa(e.config, (f) => (Be(), $t("th", {
            key: f.title
          }, pr(f.title), 1))), 128))
        ])
      ]),
      gn("tbody", null, [
        (Be(!0), $t(Ss, null, qa(e.items, (f, v) => (Be(), $t("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Ii({ focus: e.isActive(v), selected: e.isSelected(f) }),
          onClick: yh((p) => e.select(f), ["stop"])
        }, [
          (Be(!0), $t(Ss, null, qa(e.config, (p, w) => (Be(), $t("td", {
            key: f[e.textProp] + p.prop,
            id: e.getId(v, w),
            "aria-selected": e.isSelected(f),
            class: Ii({ "focus-cell": e.isActiveCell(v, w) })
          }, [
            p.prop === e.textProp ? (Be(), Qn(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[p.prop]
            }, null, 8, ["highlight", "query", "text"])) : (Be(), $t("p", S3, pr(f[p.prop]), 1))
          ], 10, E3))), 128))
        ], 10, C3))), 128))
      ])
    ], 10, b3)
  ], 512);
}
var T3 = /* @__PURE__ */ Ri($3, [["render", k3], ["__scopeId", "data-v-58c88fd1"]]);
const I3 = Us({
  components: {
    FeatherList: $h,
    FeatherListItem: tl
  }
});
function A3(e, o, r, s, a, u) {
  const c = pt("FeatherListItem"), f = pt("FeatherList");
  return Be(), Qn(f, { class: "result-list" }, {
    default: Ht(() => [
      $n(c, { "as-li": "" }, {
        default: Ht(() => [
          ih(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var x3 = /* @__PURE__ */ Ri(I3, [["render", A3], ["__scopeId", "data-v-06b752c6"]]);
const L3 = Us({
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
    FeatherIcon: oe,
    Cancel: Rs,
    BaseChip: Yu,
    BaseChipLabel: ju,
    BaseChipPreIcon: Ku
  }
});
function O3(e, o, r, s, a, u) {
  const c = pt("FeatherIcon"), f = pt("BaseChipPreIcon"), v = pt("BaseChipLabel"), p = pt("Cancel"), w = pt("BaseChip");
  return Be(), Qn(w, {
    class: Ii(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: Ht(() => [
      e.showPreIcon ? (Be(), Qn(f, { key: 0 }, {
        default: Ht(() => {
          var g, y;
          return [
            $n(c, {
              icon: (g = e.pre) == null ? void 0 : g.icon,
              title: (y = e.pre) == null ? void 0 : y.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : er("", !0),
      $n(v, null, {
        default: Ht(() => [
          M1(pr(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? er("", !0) : (Be(), $t("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = yh((...g) => e.handleClick && e.handleClick(...g), ["stop"]))
      }, [
        $n(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: Ht(() => [
            $n(p)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var R3 = /* @__PURE__ */ Ri(L3, [["render", O3], ["__scopeId", "data-v-e0fc6ac0"]]);
const N3 = {}, B3 = (e) => (u3("data-v-aa720e06"), e = e(), c3(), e), P3 = { class: "spinner-container" }, D3 = /* @__PURE__ */ B3(() => /* @__PURE__ */ gn("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ gn("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), M3 = [
  D3
];
function F3(e, o) {
  return Be(), $t("div", P3, M3);
}
var U3 = /* @__PURE__ */ Ri(N3, [["render", F3], ["__scopeId", "data-v-aa720e06"]]), Xu = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(Xu || {});
const H1 = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, q3 = Pn(Pn(Pn({
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
    validator: (e) => !!Xu[e]
  },
  labels: {
    type: Object,
    default: () => H1
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, Zu), Ms), Wu), H3 = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, W3 = (e, o, r, s) => {
  if (r.toLowerCase() === Xu.multi) {
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
        if (u.value && u.value.filter((p) => p[e.textProp.value] === f[e.textProp.value]).length)
          return;
        const v = u.value ? [...u.value, f] : [f];
        s("update:modelValue", v), c(v);
      },
      removeItem(f) {
        const v = u.value.findIndex((p) => {
          if (f[e.textProp.value] === p[e.textProp.value])
            return !0;
        });
        debugger;
        if (v > -1) {
          const p = u.value.slice(0);
          p.splice(v, 1), s("update:modelValue", p), c(p), e.input.value.focus();
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
}, z3 = () => {
  const e = F1({
    row: -1
  }), o = (u) => {
    U1(() => {
      e.row = u;
    });
  }, r = (u, c) => {
    if (u.keyCode === be.DOWN) {
      if (u.preventDefault(), e.row === -1)
        s(), o(0);
      else if (e.row + 1 <= c.length - 1) {
        const f = e.row;
        s(), o(f + 1);
      }
      return !0;
    }
    if (u.keyCode === be.UP) {
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
}, G3 = (e) => {
  const o = F1({
    row: -1,
    col: -1
  }), r = (c, f) => {
    U1(() => {
      o.col = f, o.row = c;
    });
  }, s = (c, f) => {
    if (c.keyCode === be.DOWN) {
      if (c.preventDefault(), o.row === -1)
        a(), r(0, 0);
      else if (o.row + 1 <= f.length - 1) {
        const v = o.row, p = o.col;
        a(), r(v + 1, p);
      }
      return !0;
    }
    if (c.keyCode === be.UP) {
      if (c.preventDefault(), o.row === 0)
        a();
      else if (o.row > 0) {
        const v = o.row, p = o.col;
        a(), r(v - 1, p);
      }
      return !0;
    }
    if (c.keyCode === be.RIGHT && o.row !== -1) {
      if (c.preventDefault(), o.col + 1 <= e.length - 1) {
        const v = o.col, p = o.row;
        a(), r(p, v + 1);
      } else if (o.col <= e.length - 1 && o.row + 1 <= f.length - 1) {
        const v = o.row;
        a(), r(v + 1, 0);
      }
      return !0;
    }
    if (c.keyCode === be.LEFT && o.row !== -1) {
      if (c.preventDefault(), o.col === 0 && o.row === 0)
        return !0;
      if (o.col === 0 && o.row > 0) {
        const v = o.row;
        a(), r(v - 1, e.length - 1);
      } else if (o.col > 0) {
        const v = o.col, p = o.row;
        a(), r(p, v - 1);
      }
      return !0;
    }
    if (c.keyCode === be.END && o.row !== -1) {
      c.preventDefault();
      const v = o.row;
      return a(), r(c.ctrlKey ? f.length - 1 : v, e.length - 1), !0;
    }
    if (c.keyCode === be.HOME && o.row !== -1) {
      c.preventDefault();
      const v = o.row;
      return a(), r(c.ctrlKey ? 0 : v, 0), !0;
    }
    return !1;
  }, a = () => {
    o.row = -1, o.col = -1;
  };
  return { reset: a, handleKeyPress: s, active: o, first: () => {
    a(), r(0, 0);
  } };
}, Y3 = Us({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: H3,
  props: q3,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== Xu.multi;
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
      return Oe("result-item");
    },
    minCharWarningId() {
      return Oe("min-char-warning");
    },
    subTextId() {
      return Oe("feather-autocomplete-description");
    },
    resultsId() {
      return Oe("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return Oe("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return ff(sR);
    },
    minCharIcon() {
      return ff(wR);
    },
    dropdownIcon() {
      return ff(el);
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
        Ka(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      this.inputRef && e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, o) {
        e && o && e.length > o.length && this.scrollContainer && this.$nextTick(() => {
          Ka(this.inputRef, this.scrollContainer);
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
      return this.activeChipId = Oe("active-chip"), this.activeChipId;
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
      r !== void 0 && (Li(this.typingTimeout), this.typingTimeout = xi(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === be.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === be.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const s = this.modelValue;
        this.removeFromValue(s[this.activeChipIndex]), o();
        return;
      }
      if (e.keyCode === be.ENTER && this.active.row > -1) {
        e.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((e.keyCode === be.ENTER || e.keyCode === be.SPACE || e.keyCode === be.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        e.preventDefault(), this.emitSearch();
        return;
      }
      if (e.keyCode === be.ESCAPE) {
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const s = this.modelValue;
        e.keyCode === be.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = s.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === be.RIGHT && (e.preventDefault(), this.activeChipIndex === s.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < s.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === be.DELETE || e.keyCode === be.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(s[this.activeChipIndex]), r(), o());
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
      e && (e.style.height = "1.625rem", e.style.flexBasis = "40px", e.style.whiteSpace = "nowrap", this.$nextTick(() => {
        const o = e.getBoundingClientRect().width, r = e.parentElement;
        e.scrollWidth <= e.clientWidth && r && o < r.getBoundingClientRect().width ? e.style.whiteSpace = "nowrap" : (e.style.whiteSpace = "normal", e.style.flexBasis = "100%"), this.$nextTick(() => {
          e.style.height = `${e.scrollHeight}px`;
        });
      }));
    }
  },
  setup(e, o) {
    const r = qu(hf(e, "labels"), H1);
    Fs(e), zu(e);
    let s;
    e.gridConfig ? s = G3(e.gridConfig) : s = z3();
    const a = hf(e, "id"), u = Uw(() => a.value ? a.value : Oe("feather-autocomplete-input")), { validate: c } = Ps(u, hf(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: v, textProp: p, allowNew: w, type: g, minChar: y } = d3(e), b = ss(!1), C = ss(!1), T = ss(!1), B = ss(""), k = ss([]), I = ss(), R = Uw(() => I.value), D = () => {
      b.value && !C.value && (B.value && B.value.length >= y.value && o.emit("search", B.value), y.value <= 0 && o.emit("search", B.value || ""), k.value = [], s.reset());
    }, q = W3({
      selectionLimit: f,
      selectionLimitReached: C,
      modelValue: v,
      textProp: p,
      allowNew: w,
      forceCloseResults: T,
      query: B,
      internalResults: k,
      input: R,
      emitSearch: D
    }, s, g.value, o.emit);
    return l3(Pn(Pn({}, r), Ds(o.attrs)), {
      query: B,
      internalResults: k,
      selectionLimitReached: C,
      forceCloseResults: T,
      hasFocus: b,
      strategy: q,
      emitSearch: D,
      active: s.active,
      handleResultNavigation: s.handleKeyPress,
      resetResultIndex: s.reset,
      selectFirst: s.first,
      inputId: u,
      input: I,
      incomingId: a,
      inputRef: R,
      validate: c
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: Hu,
    InputSubText: Bs,
    AutocompleteResults: g3,
    AutocompleteResultsGrid: T3,
    Chip: R3,
    MenuMessage: x3,
    FeatherIcon: oe,
    FeatherMenu: B1,
    Spinner: U3
  }
}), j3 = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, K3 = ["id"], Z3 = { "data-ref-id": "feather-autocomplete-no-results" }, X3 = { "data-ref-id": "feather-autocomplete-selection-limit" }, J3 = { "data-ref-id": "feather-autocomplete-min-char" };
function Q3(e, o, r, s, a, u) {
  const c = pt("FeatherIcon"), f = pt("Chip"), v = pt("InputWrapper"), p = pt("AutocompleteResults"), w = pt("AutocompleteResultsGrid"), g = pt("MenuMessage"), y = pt("Spinner"), b = pt("FeatherMenu"), C = pt("InputSubText");
  return Be(), $t("div", pf(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    $n(b, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Ii(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Ht(({ attrs: T, on: B }) => [
        $n(v, pf(Pn(Pn({}, T), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, qw(B), { ref: "scroll" }), {
          pre: Ht(() => [
            ih(e.$slots, "pre", {}, () => [
              $n(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Ht(() => [
            $n(c, {
              icon: e.dropdownIcon,
              class: Ii(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Ht(() => [
            gn("div", {
              class: Ii(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              gn("div", j3, null, 512),
              gn("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, pr(e.selectedDescribedByText), 9, K3),
              (Be(!0), $t(Ss, null, qa(e.modelValueList, (k, I) => eu((Be(), Qn(f, {
                key: k[e.textProp],
                role: "button",
                id: I === e.activeChipIndex ? e.activeChipId : null,
                focused: I === e.activeChipIndex,
                disabled: e.disabled,
                text: k[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(k),
                onDelete: (R) => e.removeFromValue(k)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [tu, !e.singleSelect]
              ])), 128)),
              gn("textarea", pf(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, qw(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Ht(() => [
        e.gridConfig ? er("", !0) : eu((Be(), Qn(p, {
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
          [tu, e.showResults]
        ]),
        e.gridConfig ? eu((Be(), Qn(w, {
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
          [tu, e.showResults]
        ]) : er("", !0),
        e.showNoResults ? (Be(), Qn(g, { key: 2 }, {
          default: Ht(() => [
            gn("span", Z3, pr(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : er("", !0),
        e.showSelectionLimit ? (Be(), Qn(g, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Ht(() => [
            $n(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            gn("span", X3, pr(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : er("", !0),
        e.minChar ? eu((Be(), Qn(g, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: Ht(() => [
            $n(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            gn("span", J3, [
              ih(e.$slots, "min-char", {}, () => [
                M1(pr(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [tu, e.showMinCharWarning]
        ]) : er("", !0),
        e.showLoading ? (Be(), Qn(y, { key: 5 })) : er("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    $n(C, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var eN = /* @__PURE__ */ Ri(Y3, [["render", Q3], ["__scopeId", "data-v-43a7e951"]]), tN = Object.defineProperty, nN = Object.defineProperties, rN = Object.getOwnPropertyDescriptors, Hw = Object.getOwnPropertySymbols, oN = Object.prototype.hasOwnProperty, iN = Object.prototype.propertyIsEnumerable, Ww = (e, o, r) => o in e ? tN(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, yu = (e, o) => {
  for (var r in o || (o = {}))
    oN.call(o, r) && Ww(e, r, o[r]);
  if (Hw)
    for (var r of Hw(o))
      iN.call(o, r) && Ww(e, r, o[r]);
  return e;
}, W1 = (e, o) => nN(e, rN(o));
const z1 = window.Vue.defineComponent, sN = window.Vue.ref, Ha = window.Vue.computed, aN = window.Vue.reactive, zw = window.Vue.watch, mf = window.Vue.inject, G1 = window.Vue.resolveComponent, sh = window.Vue.openBlock, Y1 = window.Vue.createElementBlock, Fo = window.Vue.createElementVNode, lN = window.Vue.createBlock, uN = window.Vue.createCommentVNode, j1 = window.Vue.renderSlot, cN = window.Vue.pushScopeId, dN = window.Vue.popScopeId, vf = window.Vue.toRef, Gw = window.Vue.mergeProps, fN = window.Vue.toDisplayString, hN = window.Vue.createVNode;
var K1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const pN = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, mN = z1({
  props: pN,
  setup(e) {
    const o = sN(), r = () => {
      o.value.focus();
    }, s = Ha(() => Oe("feather-radio-button")), a = aN({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = Ha(() => Oe("radio-label-id")), c = Ha(() => a.first || a.checked ? 0 : -1);
    zw(() => e.disabled, (g) => {
      a.disabled = g;
    }, { immediate: !0 }), zw(() => e.value, (g) => {
      a.value = g;
    }, { immediate: !0 });
    const f = mf("register", (g) => {
    }), v = mf("blur", (g) => {
    }), p = mf("select", (g) => {
    });
    return f(a), {
      labelId: u,
      tabindex: c,
      vm: a,
      blur: v,
      click: () => {
        p(a);
      },
      input: o,
      id: s
    };
  },
  components: {
    FeatherRipple: qo
  }
}), vN = (e) => (cN("data-v-24790cf0"), e = e(), dN(), e), wN = { class: "layout-container" }, _N = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], gN = { class: "radio hover focus" }, $N = /* @__PURE__ */ vN(() => /* @__PURE__ */ Fo("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ Fo("svg", { class: "dot" }, [
    /* @__PURE__ */ Fo("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), yN = ["id"];
function bN(e, o, r, s, a, u) {
  const c = G1("feather-ripple");
  return sh(), Y1("div", wN, [
    Fo("div", {
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
      Fo("div", gN, [
        $N,
        e.vm.disabled ? uN("", !0) : (sh(), lN(c, {
          key: 0,
          center: ""
        }))
      ]),
      Fo("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        j1(e.$slots, "default", {}, void 0, !0)
      ], 8, yN)
    ], 40, _N)
  ]);
}
var ah = /* @__PURE__ */ K1(mN, [["render", bN], ["__scopeId", "data-v-24790cf0"]]);
const VN = W1(yu({}, Ms), {
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
}), CN = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, EN = z1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: VN,
  emits: CN,
  setup(e, o) {
    Fs(e);
    const r = vf(e, "error"), s = vf(e, "modelValue"), a = Ha(() => Oe("feather-input-description")), u = Ha(() => {
      const c = W1(yu({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return yu(yu({
      descriptionId: a,
      attrs: u
    }, A1(s, o.emit, e.label, e.schema, vf(e, "error"))), Ds(o.attrs));
  },
  components: {
    InputSubText: Bs
  }
}), SN = ["for"], kN = ["id"];
function TN(e, o, r, s, a, u) {
  const c = G1("InputSubText");
  return sh(), Y1("div", Gw(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    Fo("label", {
      for: e.groupId,
      class: "group-label"
    }, fN(e.label), 9, SN),
    Fo("div", Gw(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      j1(e.$slots, "default", {}, void 0, !0)
    ], 16, kN),
    hN(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Z1 = /* @__PURE__ */ K1(EN, [["render", TN], ["__scopeId", "data-v-6775aeb9"]]);
const IN = window.Vue.defineComponent, AN = window.Vue.renderList, xN = window.Vue.Fragment, Yw = window.Vue.openBlock, LN = window.Vue.createElementBlock, ON = window.Vue.toDisplayString, RN = window.Vue.createTextVNode, jw = window.Vue.unref, Kw = window.Vue.withCtx, NN = window.Vue.createVNode, BN = window.Vue.createBlock, PN = window.Vue.watch, DN = window.Vue.ref, MN = /* @__PURE__ */ IN({
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
    ], a = DN(r.preSelected || s[0].id);
    return PN(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (Yw(), BN(jw(Z1), {
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
      default: Kw(() => [
        (Yw(), LN(xN, null, AN(s, (f) => NN(jw(ah), {
          value: f.id,
          key: f.id
        }, {
          default: Kw(() => [
            RN(ON(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), FN = /* @__PURE__ */ Re(MN, [["__scopeId", "data-v-0363302c"]]);
var UN = Object.defineProperty, qN = Object.defineProperties, HN = Object.getOwnPropertyDescriptors, Zw = Object.getOwnPropertySymbols, WN = Object.prototype.hasOwnProperty, zN = Object.prototype.propertyIsEnumerable, Xw = (e, o, r) => o in e ? UN(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, _a = (e, o) => {
  for (var r in o || (o = {}))
    WN.call(o, r) && Xw(e, r, o[r]);
  if (Zw)
    for (var r of Zw(o))
      zN.call(o, r) && Xw(e, r, o[r]);
  return e;
}, Jw = (e, o) => qN(e, HN(o));
const GN = window.Vue.defineComponent, YN = window.Vue.inject, ga = window.Vue.h;
var jN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const KN = {
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
}, ZN = GN({
  inheritAttrs: !1,
  props: KN,
  setup() {
    return { hasTooltip: YN("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const v = ["btn", "hover", "focus", f];
      return this.icon && (v.push("btn-icon"), v.push("btn-icon-table")), this.onColor && v.push("on-color"), v;
    }, o = this.asAnchor ? "a" : "button", r = {}, s = _a({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = ga(qo);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), ga(o, Jw(_a(_a({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : ga(qo, { center: !0 })
      ]);
    }
    const c = ga("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return ga(o, Jw(_a(_a({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var Ie = /* @__PURE__ */ jN(ZN, [["__scopeId", "data-v-702d1074"]]);
const XN = window.Vue.openBlock, JN = window.Vue.createElementBlock, QN = window.Vue.createElementVNode;
var eB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tB = {}, nB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, rB = /* @__PURE__ */ QN("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), oB = [
  rB
];
function iB(e, o) {
  return XN(), JN("svg", nB, oB);
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
}, hB = /* @__PURE__ */ uB("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), pB = [
  hB
];
function mB(e, o) {
  return aB(), lB("svg", fB, pB);
}
var vB = /* @__PURE__ */ cB(dB, [["render", mB]]);
const wB = window.Vue.openBlock, _B = window.Vue.createElementBlock, gB = window.Vue.createElementVNode;
var $B = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const yB = {}, bB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, VB = /* @__PURE__ */ gB("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), CB = [
  VB
];
function EB(e, o) {
  return wB(), _B("svg", bB, CB);
}
var X1 = /* @__PURE__ */ $B(yB, [["render", EB]]);
const SB = window.Vue.defineComponent, Cr = window.Vue.unref, pi = window.Vue.createVNode, Qw = window.Vue.toDisplayString, eo = window.Vue.createElementVNode, J1 = window.Vue.createTextVNode, e_ = window.Vue.openBlock, t_ = window.Vue.createElementBlock, kB = window.Vue.createCommentVNode, TB = window.Vue.withCtx, IB = window.Vue.vShow, AB = window.Vue.normalizeClass, xB = window.Vue.withDirectives, LB = window.Vue.Fragment, OB = window.Vue.pushScopeId, RB = window.Vue.popScopeId, Q1 = (e) => (OB("data-v-d75ae1ee"), e = e(), RB(), e), NB = /* @__PURE__ */ J1(" Filters "), BB = { class: "count" }, PB = { class: "results" }, DB = { class: "total" }, MB = /* @__PURE__ */ J1(" Reset "), FB = /* @__PURE__ */ Q1(() => /* @__PURE__ */ eo("div", { class: "title" }, "By Severities:", -1)), UB = /* @__PURE__ */ Q1(() => /* @__PURE__ */ eo("div", { class: "title" }, "By Start Date:", -1)), mi = window.Vue.ref, qB = window.Vue.reactive, HB = window.Vue.markRaw, n_ = window.Vue.watch, WB = /* @__PURE__ */ SB({
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
      ExpandLess: vB,
      ExpandMore: el,
      Refresh: X1
    }), a = mr(), u = mi(r.isOpen), c = mi(["all"]), f = mi(1), v = mi(r.list), p = mi(!1), w = mi(0), g = mi(null), y = qB({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), b = () => {
      var F, O;
      r.saveFilters && a.filters && (a.filters.node && (y.nodeSelectedValue = a.filters.node), (F = a.filters) != null && F.severities && !((O = a.filters) != null && O.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, R());
    }, C = () => {
      y.nodes = a.nodes, y.results = a.nodes;
    };
    n_(
      () => a.nodes,
      () => {
        C();
      }
    ), n_(r, () => {
      v.value = r.list, b();
    });
    const T = (F) => {
      c.value = F, R();
    }, B = (F) => {
      f.value = F, R();
    }, k = (F) => {
      if (!F)
        return y.nodeSelectedValue = void 0, [];
      p.value = !0, y.results = y.nodes.filter((O) => O.label.toLowerCase().indexOf(F) > -1).map((O) => ({
        _text: O.label,
        id: O.id
      })), p.value = !1;
    }, I = () => {
      c.value = ["all"], f.value = 1, y.nodeSelectedValue = void 0, w.value = 0, o("filtered-list", r.list), r.isOpen || (u.value = !1), r.saveFilters && (a.filters = null), v.value = r.list;
    }, R = () => {
      w.value = 0;
      let F = r.list;
      y.nodeSelectedValue && y.nodeSelectedValue._text && (w.value++, r.isSituation ? F = F.map((O) => {
        if (O.relatedAlarms.filter(
          (X) => {
            var re;
            return X.nodeLabel === ((re = y.nodeSelectedValue) == null ? void 0 : re._text);
          }
        ).length > 0)
          return O;
      }).filter((O) => O) : F = F.filter(
        (O) => {
          var j;
          return O.nodeLabel === ((j = y.nodeSelectedValue) == null ? void 0 : j._text);
        }
      )), c.value.includes("all") || (w.value++, F = F.filter(
        (O) => c.value.includes(O.severity)
      )), f.value !== 1 && (w.value++, F = MI(
        f.value,
        F
      )), v.value = F, r.saveFilters && D(), o("filtered-list", F);
    }, D = () => {
      a.filters = {
        node: y.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, q = () => {
      u.value = !u.value;
    };
    return (F, O) => (e_(), t_(LB, null, [
      r.isOpen ? kB("", !0) : (e_(), t_("div", {
        key: 0,
        class: "btn-filter",
        onClick: q
      }, [
        eo("div", null, [
          pi(Cr(oe), {
            icon: Cr(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          NB,
          eo("span", BB, Qw(w.value), 1)
        ]),
        pi(Cr(oe), {
          icon: u.value ? Cr(s).ExpandLess : Cr(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      xB(eo("div", {
        class: AB(["filters", { collapsed: !r.isOpen }])
      }, [
        eo("div", PB, [
          eo("div", DB, "Results: " + Qw(Cr(v).length), 1),
          pi(Cr(Ie), {
            class: "btn-reset",
            onClick: I
          }, {
            default: TB(() => [
              pi(Cr(oe), {
                icon: Cr(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              MB
            ]),
            _: 1
          })
        ]),
        eo("div", null, [
          pi(Cr(eN), {
            ref_key: "autocomplete",
            ref: g,
            label: "Search by node",
            loading: p.value,
            modelValue: y.nodeSelectedValue,
            "onUpdate:modelValue": [
              O[0] || (O[0] = (j) => y.nodeSelectedValue = j),
              R
            ],
            results: y.results,
            type: "single",
            onSearch: k
          }, null, 8, ["loading", "modelValue", "results"]),
          FB,
          pi(bO, {
            alarms: r.list,
            onSelectedOption: T,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          eo("div", null, [
            UB,
            pi(FN, {
              onFilterDateSelected: B,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [IB, u.value]
      ])
    ], 64));
  }
}), qs = /* @__PURE__ */ Re(WB, [["__scopeId", "data-v-d75ae1ee"]]), zB = window.Vue.openBlock, GB = window.Vue.createElementBlock, YB = window.Vue.createElementVNode;
var jB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const KB = {}, ZB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, XB = /* @__PURE__ */ YB("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), JB = [
  XB
];
function QB(e, o) {
  return zB(), GB("svg", ZB, JB);
}
var Ju = /* @__PURE__ */ jB(KB, [["render", QB]]);
const eP = window.Vue.openBlock, tP = window.Vue.createElementBlock, e0 = window.Vue.createElementVNode;
var nP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const rP = {}, oP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, iP = /* @__PURE__ */ e0("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), sP = /* @__PURE__ */ e0("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), aP = [
  iP,
  sP
];
function lP(e, o) {
  return eP(), tP("svg", oP, aP);
}
var uP = /* @__PURE__ */ nP(rP, [["render", lP]]);
const cP = window.Vue.openBlock, dP = window.Vue.createElementBlock, fP = window.Vue.createElementVNode;
var hP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const pP = {}, mP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, vP = /* @__PURE__ */ fP("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), wP = [
  vP
];
function _P(e, o) {
  return cP(), dP("svg", mP, wP);
}
var gP = /* @__PURE__ */ hP(pP, [["render", _P]]);
const zo = () => window.VRouter || vY, vi = "alec-", yt = {
  home: `${vi}home`,
  situations: `${vi}situations`,
  situationDetail: `${vi}situationDetail`,
  addSituation: `${vi}addSituation`,
  error: `${vi}error`,
  viewUnassignedAlarms: `${vi}viewUnassignedAlarms`,
  settings: `${vi}settings`
}, $P = window.Vue.openBlock, yP = window.Vue.createElementBlock, bP = window.Vue.pushScopeId, VP = window.Vue.popScopeId, r_ = window.Vue.createElementVNode;
var CP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const EP = {}, SP = (e) => (bP("data-v-2263be39"), e = e(), VP(), e), kP = { class: "spinner-container" }, TP = /* @__PURE__ */ SP(() => /* @__PURE__ */ r_("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ r_("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), IP = [
  TP
];
function AP(e, o) {
  return $P(), yP("div", kP, IP);
}
var ks = /* @__PURE__ */ CP(EP, [["render", AP], ["__scopeId", "data-v-2263be39"]]);
const xP = window.Vue.defineComponent, wf = window.Vue.unref, LP = window.Vue.createVNode, OP = window.Vue.createElementVNode, RP = window.Vue.withCtx, NP = window.Vue.openBlock, BP = window.Vue.createBlock, PP = window.Vue.pushScopeId, DP = window.Vue.popScopeId, MP = (e) => (PP("data-v-6d6d8faa"), e = e(), DP(), e), FP = /* @__PURE__ */ MP(() => /* @__PURE__ */ OP("span", null, "New Situation", -1)), UP = window.Vue.markRaw, qP = /* @__PURE__ */ xP({
  __name: "NewSituationBtn",
  setup(e) {
    const o = zo(), r = UP({
      Add: Ju
    }), s = () => {
      o.push({
        name: yt.addSituation
      });
    };
    return (a, u) => (NP(), BP(wf(Ie), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: RP(() => [
        LP(wf(oe), {
          icon: wf(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        FP
      ]),
      _: 1
    }));
  }
}), t0 = /* @__PURE__ */ Re(qP, [["__scopeId", "data-v-6d6d8faa"]]), HP = "data:image/svg+xml,%3csvg%20width='32px'%20height='32px'%20viewBox='0%200%2032%2032'%20id='icon'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20none;%20}%20%3c/style%3e%3c/defs%3e%3crect%20x='10'%20y='15'%20width='12'%20height='2'/%3e%3cpath%20d='M8.7,6.2852A2.9665,2.9665,0,0,0,9,5,3,3,0,1,0,6,8a2.96,2.96,0,0,0,1.2852-.3008L10,10.4141V13h2V9.5859ZM6,6A1,1,0,1,1,7,5,1.0009,1.0009,0,0,1,6,6Z'%20transform='translate(0%200)'/%3e%3cpath%20d='M19,5a3,3,0,1,0-4,2.8154V13h2V7.8159A2.9957,2.9957,0,0,0,19,5ZM16,6a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,16,6Z'%20transform='translate(0%200)'/%3e%3cpath%20d='M26,2a3.0033,3.0033,0,0,0-3,3,2.9665,2.9665,0,0,0,.3,1.2852L20,9.5859V13h2V10.4141l2.7148-2.7149A2.96,2.96,0,0,0,26,8a3,3,0,0,0,0-6Zm0,4a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,26,6Z'%20transform='translate(0%200)'/%3e%3cpath%20d='M12,19H10v2.5859L7.2854,24.3008A2.9609,2.9609,0,0,0,6,24a3,3,0,1,0,3,3,2.9665,2.9665,0,0,0-.3-1.2852L12,22.4141ZM6,28a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,6,28Z'%20transform='translate(0%200)'/%3e%3cpath%20d='M17,24.1841V19H15v5.1841a3,3,0,1,0,2,0ZM16,28a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,16,28Z'%20transform='translate(0%200)'/%3e%3cpath%20d='M26,24a2.9609,2.9609,0,0,0-1.2854.3008L22,21.5859V19H20v3.4141l3.3,3.3007A2.9665,2.9665,0,0,0,23,27a3,3,0,1,0,3-3Zm0,4a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,26,28Z'%20transform='translate(0%200)'/%3e%3crect%20id='_Transparent_Rectangle_'%20data-name='&lt;Transparent%20Rectangle&gt;'%20class='cls-1'%20width='32'%20height='32'/%3e%3c/svg%3e", WP = "data:image/svg+xml,%3csvg%20width='32px'%20height='32px'%20viewBox='0%200%2032%2032'%20id='icon'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20none;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20d='M16,7a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,16,7Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,16,3Z'/%3e%3cpath%20d='M11,30a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,11,30Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,11,26Z'/%3e%3cpath%20d='M7,11a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,7,11ZM7,7A1,1,0,1,0,8,8,1.001,1.001,0,0,0,7,7Z'/%3e%3cpath%20d='M21,30a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,21,30Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,21,26Z'/%3e%3cpath%20d='M25,11a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,25,11Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,25,7Z'/%3e%3cpath%20d='M4,21a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,4,21Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,4,17Z'/%3e%3cpath%20d='M28,21a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,28,21Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,28,17Z'/%3e%3cpath%20d='M16,22a6,6,0,1,1,6-6A6.0069,6.0069,0,0,1,16,22Zm0-10a4,4,0,1,0,4,4A4.0045,4.0045,0,0,0,16,12Z'/%3e%3crect%20id='_Transparent_Rectangle_'%20data-name='&lt;Transparent%20Rectangle&gt;'%20class='cls-1'%20width='32'%20height='32'/%3e%3c/svg%3e", zP = window.Vue.defineComponent, as = window.Vue.unref, ls = window.Vue.openBlock, us = window.Vue.createElementBlock, GP = window.Vue.createCommentVNode, n0 = window.Vue.createTextVNode, o_ = window.Vue.Fragment, r0 = window.Vue.createElementVNode, YP = window.Vue.pushScopeId, jP = window.Vue.popScopeId, KP = (e) => (YP("data-v-7d676165"), e = e(), jP(), e), ZP = ["src"], XP = { class: "engine" }, JP = /* @__PURE__ */ n0(" ENGINE "), QP = {
  key: 0,
  class: "type"
}, eD = {
  key: 1,
  class: "type"
}, tD = /* @__PURE__ */ n0(" ENGINE "), nD = /* @__PURE__ */ KP(() => /* @__PURE__ */ r0("div", {
  class: "type not-set",
  "data-test": "configuration-not-set"
}, "CONFIGURE", -1)), i_ = window.Vue.computed, rD = /* @__PURE__ */ zP({
  __name: "ConfigurationInfo",
  setup(e) {
    const o = zo(), r = Uo(), s = () => {
      o.push({
        name: yt.settings
      });
    }, a = i_(() => {
      var c;
      return !!((c = r.engineInfo) != null && c.engineName);
    }), u = i_(
      () => {
        var c;
        return ((c = r.engineInfo) == null ? void 0 : c.engineName) == kt.ENGINE_DBSCAN;
      }
    );
    return (c, f) => (ls(), us("div", {
      class: "info-engine",
      onClick: s,
      "data-test": "configuration-info"
    }, [
      as(a) ? (ls(), us("img", {
        key: 0,
        src: as(u) ? as(WP) : as(HP),
        class: "icon-type"
      }, null, 8, ZP)) : GP("", !0),
      r0("div", XP, [
        as(a) ? (ls(), us(o_, { key: 0 }, [
          JP,
          as(u) ? (ls(), us("div", QP, "CLUSTERING")) : (ls(), us("div", eD, "DEEP LEARNING"))
        ], 64)) : (ls(), us(o_, { key: 1 }, [
          tD,
          nD
        ], 64))
      ])
    ]));
  }
}), oD = /* @__PURE__ */ Re(rD, [["__scopeId", "data-v-7d676165"]]), iD = {}, sD = window.Vue.openBlock, aD = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const lD = { class: "empty" };
function uD(e, o) {
  return sD(), aD("div", lD, "No results found.");
}
const Hs = /* @__PURE__ */ Re(iD, [["render", uD], ["__scopeId", "data-v-2415ea97"]]), cD = window.Vue.defineComponent, kr = window.Vue.createElementVNode, $a = window.Vue.unref, wi = window.Vue.createVNode, dD = window.Vue.withCtx, nu = window.Vue.toDisplayString, Jr = window.Vue.openBlock, _i = window.Vue.createElementBlock, s_ = window.Vue.createCommentVNode, a_ = window.Vue.createBlock, fD = window.Vue.renderList, hD = window.Vue.Fragment, pD = window.Vue.pushScopeId, mD = window.Vue.popScopeId, o0 = (e) => (pD("data-v-8a617929"), e = e(), mD(), e), vD = { class: "list-main" }, wD = { class: "header" }, _D = /* @__PURE__ */ o0(() => /* @__PURE__ */ kr("h2", null, "Situation List", -1)), gD = { class: "link-btns" }, $D = /* @__PURE__ */ o0(() => /* @__PURE__ */ kr("span", null, "View Unassociated Alarms", -1)), yD = { class: "content" }, bD = { class: "left-filters" }, VD = { class: "container" }, CD = { class: "autocomplete" }, ED = { key: 0 }, SD = { key: 1 }, kD = { key: 0 }, TD = { class: "situation-list" }, ID = {
  key: 0,
  class: "footer-pager"
}, AD = window.Vue.reactive, ru = window.Vue.ref, xD = window.Vue.watch, LD = window.Vue.markRaw, OD = /* @__PURE__ */ cD({
  __name: "SituationList",
  setup(e) {
    const o = LD({
      Add: Ju,
      View: uP,
      Settings: gP
    }), r = zo(), s = mr(), a = Uo();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = AD({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = ru(!0), v = ru(0), p = ru(1), w = ru(0), g = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    xD(
      () => s.situations,
      () => {
        f.value = !1, g(), T(s.situations);
      }
    );
    const y = (k) => {
      v.value = k, c.situations = c.allSituations[v.value];
    }, b = (k) => {
      r.push({
        name: yt.situationDetail,
        params: {
          id: k
        }
      });
    }, C = () => {
      r.push({
        name: yt.viewUnassignedAlarms
      });
    }, T = (k) => {
      w.value = k.length, c.allSituations = ze.chunk(k, u);
      const I = k.map((R) => R.id);
      s.filteredSituations = I, v.value = 0, c.situations = c.allSituations[0], p.value = c.allSituations.length;
    }, B = (k) => {
      k.length ? T(k) : c.situations = [];
    };
    return (k, I) => {
      var R;
      return Jr(), _i("div", vD, [
        kr("div", wD, [
          _D,
          kr("div", gD, [
            wi($a(Ie), {
              class: "view-situation-btn",
              onClick: I[0] || (I[0] = () => C())
            }, {
              default: dD(() => [
                wi($a(oe), {
                  icon: $a(o).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                $D
              ]),
              _: 1
            }),
            wi(t0),
            wi(oD)
          ])
        ]),
        kr("div", yD, [
          kr("div", bD, [
            wi(qs, {
              list: $a(s).situations,
              onFilteredList: B,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          kr("div", VD, [
            kr("div", CD, [
              c.situations && c.situations.length ? (Jr(), _i("div", ED, " Result: " + nu((R = c.situations) == null ? void 0 : R.length) + " of " + nu(w.value), 1)) : s_("", !0)
            ]),
            f.value ? (Jr(), a_($a(ks), {
              key: 0,
              class: "spinner"
            })) : (Jr(), _i("div", SD, [
              c.situations && c.situations.length ? (Jr(), _i("div", kD, [
                kr("div", TD, [
                  (Jr(!0), _i(hD, null, fD(c.situations, (D) => (Jr(), _i("div", {
                    class: "card",
                    key: D.id
                  }, [
                    wi(E1, {
                      onClick: () => b(D.id),
                      "situation-info": D
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                w.value > u ? (Jr(), _i("div", ID, [
                  kr("div", null, "Page: " + nu(v.value + 1) + " of " + nu(p.value), 1),
                  wi(JA, {
                    onGoToPage: y,
                    currentPage: v.value,
                    totalPages: p.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : s_("", !0)
              ])) : (Jr(), a_(Hs, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
}), RD = /* @__PURE__ */ Re(OD, [["__scopeId", "data-v-8a617929"]]), ou = window.Vue.ref, ND = window.Vue.inject, BD = window.Vue.computed, PD = window.Vue.onMounted, i0 = {
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
}, s0 = (e) => {
  const o = ou(!1), r = ou(), s = ou(e.controls), a = ou(e.id), u = () => {
    r.value && r.value.focus();
  }, c = ND("registerTab");
  PD(() => {
    if (r.value && c) {
      const v = r.value.parentElement, p = v && v.parentElement ? v.parentElement : void 0, w = Array.from(p ? p.children : []).filter((y) => y.querySelectorAll("[role=tab]").length), g = v ? w.indexOf(v) : -1;
      c({
        el: r.value,
        focus: u,
        disabled: e.disabled,
        selected: o,
        id: a,
        controls: s,
        index: g
      });
    }
  });
  const f = BD(() => ({
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
}, l_ = window.Vue.ref, DD = window.Vue.toRef, MD = window.Vue.watch, u_ = window.Vue.provide, a0 = {
  prop: "modelValue",
  event: "update:modelValue"
}, l0 = {
  "update:modelValue": (e) => !0
}, u0 = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, c0 = (e, o) => {
  const r = DD(e, "modelValue"), s = l_(e.modelValue), a = l_([]);
  MD(r, (C) => {
    v(C);
  });
  const u = (C) => {
    C.preventDefault(), a.value.some((T, B) => T.tab && T.tab.el.contains(C.target) ? (f(B), v(B), !0) : !1);
  }, c = (C) => {
    if (((j) => j.shiftKey || j.ctrlKey || j.metaKey || j.altKey)(C))
      return;
    const B = C.keyCode, k = (j) => {
      j.stopPropagation(), j.preventDefault();
    }, I = a.value.filter((j) => j.tab && !j.tab.disabled), R = a.value.findIndex((j) => j.tab && j.tab.el.contains(document.activeElement));
    let D = R !== -1 ? R : s.value;
    const q = [be.RIGHT], F = [be.LEFT], O = [be.ENTER, be.SPACE];
    e.vertical && (q.push(be.DOWN), F.push(be.UP)), q.indexOf(B) > -1 ? (D++, D >= I.length && (D = 0), k(C), f(a.value.indexOf(I[D]))) : F.indexOf(B) > -1 && (D--, D < 0 && (D = I.length - 1), k(C), f(a.value.indexOf(I[D]))), O.indexOf(B) > -1 && v(D);
  }, f = (C) => {
    a.value.forEach(function(T, B) {
      C === B && T.tab && T.tab.focus();
    });
  }, v = (C) => {
    const T = a.value[C];
    !T || T.tab && T.tab.disabled || (a.value.forEach((B, k) => {
      B.tab && (B.tab.selected = C === k), B.panel && (B.panel.selected = C === k);
    }), s.value = C, o.emit("update:modelValue", C));
  };
  u_("registerTab", (C) => {
    const T = C.index;
    T > -1 && (a.value[T] = { ...a.value[T], tab: C }, a.value = [...a.value], g());
  }), u_("registerPanel", (C) => {
    const T = C.index;
    T > -1 && (a.value[T] = {
      ...a.value[T],
      panel: C
    }, a.value = [...a.value], g());
  });
  const g = () => {
    a.value.forEach(({ tab: C, panel: T }, B) => {
      if (T && C) {
        const k = C.id || Oe("tab"), I = C.controls || Oe("panel");
        C.controls = I, C.id = k, T.tab = k, T.id = I;
      }
      B === s.value && (T && (T.selected = !0), C && (C.selected = !0));
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
    //feather tab container watches this
  };
}, iu = window.Vue.ref, FD = window.Vue.inject, UD = window.Vue.computed, qD = window.Vue.onMounted, d0 = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, f0 = (e) => {
  const o = iu(!1), r = iu(), s = iu(e.tab), a = iu(e.id), u = FD("registerPanel");
  qD(() => {
    if (u) {
      const f = r.value, v = f && f.parentElement ? f.parentElement : void 0, p = f ? Array.from(v ? v.children : []).indexOf(f) : -1;
      u({
        selected: o,
        id: a,
        tab: s,
        el: r.value,
        index: p
      });
    }
  });
  const c = UD(() => ({
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
}, Vh = window.Vue.defineComponent, HD = window.Vue.resolveComponent, Ch = window.Vue.openBlock, Eh = window.Vue.createElementBlock, Wa = window.Vue.createElementVNode, h0 = window.Vue.mergeProps, Ou = window.Vue.renderSlot, WD = window.Vue.createVNode, zD = window.Vue.normalizeStyle, GD = window.Vue.toHandlers, YD = window.Vue.withDirectives, jD = window.Vue.normalizeProps, KD = window.Vue.guardReactiveProps, ZD = window.Vue.vShow;
var Sh = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const XD = i0, JD = Vh({
  props: XD,
  setup(e) {
    return s0(e);
  },
  components: {
    FeatherRipple: qo
  }
}), QD = { role: "presentation" }, eM = { class: "tab-text" };
function tM(e, o, r, s, a, u) {
  const c = HD("FeatherRipple");
  return Ch(), Eh("li", QD, [
    Wa("button", h0(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      Wa("span", eM, [
        Ou(e.$slots, "default", {}, void 0, !0)
      ]),
      WD(c)
    ], 16)
  ]);
}
var Ts = /* @__PURE__ */ Sh(JD, [["render", tM], ["__scopeId", "data-v-e6bb52b6"]]);
const nM = u0, rM = l0, oM = Vh({
  model: a0,
  emits: rM,
  props: nM,
  setup(e, o) {
    return c0(e, o);
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
}), iM = { class: "feather-tab-container" }, sM = { class: "tab-panels" };
function aM(e, o, r, s, a, u) {
  return Ch(), Eh("div", iM, [
    Wa("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: zD({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    Wa("ul", h0(e.attrs, GD(e.listeners)), [
      Ou(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Wa("div", sM, [
      Ou(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var p0 = /* @__PURE__ */ Sh(oM, [["render", aM], ["__scopeId", "data-v-27adffb9"]]);
const lM = d0, uM = Vh({
  props: lM,
  setup(e) {
    return f0(e);
  }
});
function cM(e, o, r, s, a, u) {
  return YD((Ch(), Eh("div", jD(KD(e.attrs)), [
    Ou(e.$slots, "default")
  ], 16)), [
    [ZD, e.selected]
  ]);
}
var Is = /* @__PURE__ */ Sh(uM, [["render", cM]]);
const dM = window.Vue.defineComponent, fM = window.Vue.toDisplayString, hM = window.Vue.normalizeClass, pM = window.Vue.openBlock, mM = window.Vue.createElementBlock, vM = window.Vue.createCommentVNode, wM = /* @__PURE__ */ dM({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (pM(), mM("span", {
      key: 0,
      class: hM(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, fM(o.severity), 3)) : vM("", !0);
  }
}), m0 = /* @__PURE__ */ Re(wM, [["__scopeId", "data-v-83c2cdce"]]), _M = window.Vue.defineComponent, c_ = window.Vue.toDisplayString, d_ = window.Vue.createElementVNode, gM = window.Vue.openBlock, $M = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const yM = { class: "box" }, bM = { class: "label" }, VM = { class: "date" }, CM = /* @__PURE__ */ _M({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (gM(), $M("div", yM, [
      d_("div", bM, c_(o.label), 1),
      d_("div", VM, c_(o.info), 1)
    ]));
  }
}), _f = /* @__PURE__ */ Re(CM, [["__scopeId", "data-v-b4afa751"]]), EM = window.Vue.defineComponent, SM = window.Vue.unref, kM = window.Vue.renderList, TM = window.Vue.Fragment, gf = window.Vue.openBlock, $f = window.Vue.createElementBlock, IM = window.Vue.toDisplayString, AM = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const xM = { class: "alarms-list" }, LM = /* @__PURE__ */ EM({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (gf(), $f("div", xM, [
      (gf(!0), $f(TM, null, kM(SM(ze.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (gf(), $f("div", {
        class: AM(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, IM(a.length), 3))), 128))
    ]));
  }
}), OM = /* @__PURE__ */ Re(LM, [["__scopeId", "data-v-52d63440"]]), RM = window.Vue.openBlock, NM = window.Vue.createElementBlock, BM = window.Vue.createElementVNode;
var PM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const DM = {}, MM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, FM = /* @__PURE__ */ BM("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), UM = [
  FM
];
function qM(e, o) {
  return RM(), NM("svg", MM, UM);
}
var HM = /* @__PURE__ */ PM(DM, [["render", qM]]);
const WM = window.Vue.openBlock, zM = window.Vue.createElementBlock, GM = window.Vue.createStaticVNode;
var YM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const jM = {}, KM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ZM = /* @__PURE__ */ GM('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), XM = [
  ZM
];
function JM(e, o) {
  return WM(), zM("svg", KM, XM);
}
var Ru = /* @__PURE__ */ YM(jM, [["render", JM]]);
const QM = window.Vue.defineComponent, ur = window.Vue.unref, yf = window.Vue.createVNode, kh = window.Vue.createElementVNode, bf = window.Vue.withCtx, su = window.Vue.openBlock, Vf = window.Vue.createBlock, Cf = window.Vue.createCommentVNode, e4 = window.Vue.normalizeClass, t4 = window.Vue.createElementBlock, n4 = window.Vue.pushScopeId, r4 = window.Vue.popScopeId, Th = (e) => (n4("data-v-d9c6a479"), e = e(), r4(), e), o4 = /* @__PURE__ */ Th(() => /* @__PURE__ */ kh("span", null, "Acknowledge", -1)), i4 = /* @__PURE__ */ Th(() => /* @__PURE__ */ kh("span", null, "Escalate", -1)), s4 = /* @__PURE__ */ Th(() => /* @__PURE__ */ kh("span", null, "Clear", -1)), a4 = /* @__PURE__ */ QM({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const o = e, r = mr(), s = async (u) => {
      await kk(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await c1(
        o.situationId,
        kt.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await r1(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (su(), t4("div", {
      class: e4(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? Cf("", !0) : (su(), Vf(ur(Ie), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: bf(() => [
          yf(ur(oe), {
            icon: ur(xs),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          o4
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (su(), Vf(ur(Ie), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(ur(kt).ESCALATE))
      }, {
        default: bf(() => [
          yf(ur(oe), {
            icon: ur(HM),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          i4
        ]),
        _: 1
      })) : Cf("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (su(), Vf(ur(Ie), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(ur(kt).CLEAR))
      }, {
        default: bf(() => [
          yf(ur(oe), {
            icon: ur(Ru),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          s4
        ]),
        _: 1
      })) : Cf("", !0)
    ], 2));
  }
}), v0 = /* @__PURE__ */ Re(a4, [["__scopeId", "data-v-d9c6a479"]]);
var l4 = Object.defineProperty, u4 = Object.defineProperties, c4 = Object.getOwnPropertyDescriptors, f_ = Object.getOwnPropertySymbols, d4 = Object.prototype.hasOwnProperty, f4 = Object.prototype.propertyIsEnumerable, h_ = (e, o, r) => o in e ? l4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, lh = (e, o) => {
  for (var r in o || (o = {}))
    d4.call(o, r) && h_(e, r, o[r]);
  if (f_)
    for (var r of f_(o))
      f4.call(o, r) && h_(e, r, o[r]);
  return e;
}, w0 = (e, o) => u4(e, c4(o));
const _0 = window.Vue.defineComponent, h4 = window.Vue.inject, p4 = window.Vue.resolveComponent, Ef = window.Vue.openBlock, p_ = window.Vue.createElementBlock, bs = window.Vue.createElementVNode, m4 = window.Vue.createBlock, m_ = window.Vue.createCommentVNode, v4 = window.Vue.renderSlot, w4 = window.Vue.pushScopeId, _4 = window.Vue.popScopeId, Sf = window.Vue.toRef, au = window.Vue.computed, g4 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var $4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const y4 = {
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
}, b4 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, V4 = _0({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: b4,
  props: y4,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: h4("registerCheckbox", (o) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : Oe("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : Oe("checkbox-label");
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
      (e.keyCode === be.SPACE || e.keyCode === be.ENTER) && this.updateValue(), e.keyCode === be.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: qo
  }
}), C4 = (e) => (w4("data-v-a7af27e2"), e = e(), _4(), e), E4 = { class: "layout-container" }, S4 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], k4 = { class: "checkbox hover focus" }, T4 = /* @__PURE__ */ C4(() => /* @__PURE__ */ bs("div", { class: "box" }, [
  /* @__PURE__ */ bs("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ bs("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ bs("div", { class: "indeterminate" })
], -1)), I4 = ["id", "for"];
function A4(e, o, r, s, a, u) {
  const c = p4("feather-ripple");
  return Ef(), p_("div", E4, [
    bs("div", {
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
      bs("div", k4, [
        T4,
        e.disabled ? m_("", !0) : (Ef(), m4(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? m_("", !0) : (Ef(), p_("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        v4(e.$slots, "default", {}, void 0, !0)
      ], 8, I4))
    ], 40, S4)
  ]);
}
var Ai = /* @__PURE__ */ $4(V4, [["render", A4], ["__scopeId", "data-v-a7af27e2"]]);
const x4 = w0(lh({}, Ms), {
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
_0({
  props: x4,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    Fs(e);
    const r = Sf(e, "error"), s = au(() => Oe("feather-checkbox-group")), a = au(() => Oe("feather-input-description")), u = au(() => Oe("feather-input-label")), c = au(() => {
      const w = JSON.parse(JSON.stringify(o.attrs));
      return w["aria-invalid"] || (w["aria-invalid"] = !!r.value), w0(lh({}, w), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = g4(s.value), { validate: v } = Ps(f, Sf(e, "modelValue"), e.label, e.schema, Sf(e, "error"));
    return lh({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: v,
      registerCheckbox: (w) => {
        w && f.value === s.value && (f.value = w);
      }
    }, Ds(o.attrs));
  },
  components: {
    InputSubText: Bs
  }
});
const L4 = window.Vue.openBlock, O4 = window.Vue.createElementBlock, g0 = window.Vue.createElementVNode;
var R4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const N4 = {}, B4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, P4 = /* @__PURE__ */ g0("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), D4 = /* @__PURE__ */ g0("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), M4 = [
  P4,
  D4
];
function F4(e, o) {
  return L4(), O4("svg", B4, M4);
}
var U4 = /* @__PURE__ */ R4(N4, [["render", F4]]), q4 = Object.defineProperty, H4 = Object.defineProperties, W4 = Object.getOwnPropertyDescriptors, v_ = Object.getOwnPropertySymbols, z4 = Object.prototype.hasOwnProperty, G4 = Object.prototype.propertyIsEnumerable, w_ = (e, o, r) => o in e ? q4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Vs = (e, o) => {
  for (var r in o || (o = {}))
    z4.call(o, r) && w_(e, r, o[r]);
  if (v_)
    for (var r of v_(o))
      G4.call(o, r) && w_(e, r, o[r]);
  return e;
}, $0 = (e, o) => H4(e, W4(o));
const Y4 = window.Vue.defineComponent, kf = window.Vue.toRef, j4 = window.Vue.computed, __ = window.Vue.resolveComponent, g_ = window.Vue.openBlock, $_ = window.Vue.createElementBlock, y_ = window.Vue.mergeProps, b_ = window.Vue.createVNode, K4 = window.Vue.normalizeClass, V_ = window.Vue.withCtx, Z4 = window.Vue.createElementVNode, X4 = window.Vue.toDisplayString, J4 = window.Vue.createCommentVNode;
var Q4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const e8 = $0(Vs(Vs({}, Wu), Ms), {
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
}), t8 = {
  "update:modelValue": (e) => !0
}, n8 = Y4({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: t8,
  props: e8,
  setup(e, o) {
    Fs(e), zu(e);
    const r = kf(e, "id"), s = j4(() => r.value ? r.value : Oe("feather-textarea-label")), { validate: a } = Ps(s, kf(e, "modelValue"), e.label, e.schema, kf(e, "error"));
    return Vs({
      inputId: s,
      incomingId: r,
      validate: a
    }, Ds(o.attrs));
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
      return Oe("feather-textarea-description");
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
      const e = Vs({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), $0(Vs(Vs({}, e), this.listeners), {
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
      e && (e.style.height = "12px", e.style.flexBasis = "40px", e.style.whiteSpace = "nowrap", this.$nextTick(() => {
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
    InputSubText: Bs,
    InputWrapper: Hu
  }
}), r8 = ["maxlength"], o8 = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function i8(e, o, r, s, a, u) {
  const c = __("InputWrapper"), f = __("InputSubText");
  return g_(), $_("div", y_(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    b_(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: K4(["feather-textarea-content", e.contentCls])
    }, {
      default: V_(() => [
        Z4("textarea", y_(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, r8)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    b_(f, { id: e.descriptionId }, {
      right: V_(() => [
        e.maxlength ? (g_(), $_("div", o8, X4(e.charCount), 1)) : J4("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Za = /* @__PURE__ */ Q4(n8, [["render", i8], ["__scopeId", "data-v-0648df5c"]]);
const s8 = window.Pinia.defineStore, Qu = s8("appStore", {
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
}), a8 = window.Vue.defineComponent, C_ = window.Vue.toDisplayString, ya = window.Vue.createElementVNode, gi = window.Vue.unref, cs = window.Vue.openBlock, E_ = window.Vue.createBlock, ba = window.Vue.createCommentVNode, S_ = window.Vue.createVNode, lu = window.Vue.createElementBlock, l8 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const u8 = { class: "row" }, c8 = { class: "label" }, d8 = { class: "action-icons" }, f8 = { class: "icon-btn" }, h8 = {
  key: 0,
  class: "icon-btn"
}, p8 = {
  key: 1,
  class: "icon-btn"
}, m8 = {
  key: 0,
  class: "text"
}, v8 = window.Vue.watch, k_ = window.Vue.ref, w8 = /* @__PURE__ */ a8({
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
    var v;
    const o = e, r = Qu(), s = k_(!1), a = k_((v = o.memo) == null ? void 0 : v.body);
    v8(o, () => {
      var p;
      a.value = (p = o.memo) == null ? void 0 : p.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await Rk(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await Ok(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (p, w) => (cs(), lu("div", {
      class: l8([o.boxType === "small" ? "box-small" : "box"])
    }, [
      ya("div", u8, [
        ya("div", c8, C_(e.label), 1),
        ya("div", d8, [
          ya("div", f8, [
            s.value ? ba("", !0) : (cs(), E_(gi(oe), {
              key: 0,
              icon: gi(U4),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (cs(), lu("div", h8, [
            S_(gi(oe), {
              icon: gi(xs),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : ba("", !0),
          a.value && a.value != "" || s.value ? (cs(), lu("div", p8, [
            S_(gi(oe), {
              icon: gi(Rs),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : ba("", !0)
        ])
      ]),
      ya("div", null, [
        !s.value && a.value != null ? (cs(), lu("div", m8, C_(a.value), 1)) : ba("", !0),
        s.value ? (cs(), E_(gi(Za), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": w[0] || (w[0] = (g) => a.value = g),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : ba("", !0)
      ])
    ], 2));
  }
}), Nu = /* @__PURE__ */ Re(w8, [["__scopeId", "data-v-ee1264b5"]]), _8 = window.Vue.defineComponent, Lo = window.Vue.unref, ds = window.Vue.createVNode, Va = window.Vue.toDisplayString, hr = window.Vue.createElementVNode, T_ = window.Vue.openBlock, I_ = window.Vue.createElementBlock, A_ = window.Vue.createCommentVNode, Tf = window.Vue.createTextVNode, g8 = window.Vue.pushScopeId, $8 = window.Vue.popScopeId, Ih = (e) => (g8("data-v-b59dc239"), e = e(), $8(), e), y8 = {
  key: 0,
  class: "card"
}, b8 = { class: "row" }, V8 = {
  key: 0,
  class: "ack"
}, C8 = /* @__PURE__ */ Ih(() => /* @__PURE__ */ hr("strong", null, " Duration: ", -1)), E8 = ["innerHTML"], S8 = /* @__PURE__ */ Ih(() => /* @__PURE__ */ hr("strong", null, "First Event", -1)), k8 = /* @__PURE__ */ Ih(() => /* @__PURE__ */ hr("strong", null, "Last Event", -1)), T8 = { class: "section memo-boxes" }, x_ = window.Vue.ref, I8 = window.Vue.watch, A8 = /* @__PURE__ */ _8({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, s = x_(!1), a = x_(r.alarm), u = (/* @__PURE__ */ new Date()).getTime();
    I8(r, () => {
      a.value = r.alarm, s.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (v) => {
      const p = await o1(v);
      p && (a.value = p);
    };
    return (v, p) => {
      var w, g, y, b, C;
      return a.value ? (T_(), I_("div", y8, [
        hr("div", null, [
          hr("div", b8, [
            ds(Lo(Ai), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                p[0] || (p[0] = (T) => s.value = T),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            hr("div", {
              class: "title",
              onClick: p[1] || (p[1] = () => {
                s.value = !s.value, c();
              })
            }, Va(a.value.nodeLabel) + " - " + Va(a.value.id), 1),
            ds(m0, {
              severity: (w = a.value) == null ? void 0 : w.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (T_(), I_("div", V8, [
              ds(Lo(oe), {
                icon: Lo(xs),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : A_("", !0)
          ]),
          hr("div", null, [
            C8,
            Tf(" " + Va(Lo(Uu)(Lo(u), new Date(a.value.firstEventTime))), 1)
          ]),
          hr("div", {
            class: "description",
            innerHTML: Lo(V1)(a.value.description || "")
          }, null, 8, E8),
          hr("div", null, [
            S8,
            Tf(" - " + Va(Lo(xr)(a.value.firstEventTime)), 1)
          ]),
          hr("div", null, [
            k8,
            Tf(" - " + Va(Lo(xr)(a.value.lastEventTime)), 1)
          ]),
          hr("div", T8, [
            ds(Nu, {
              id: (g = a.value) == null ? void 0 : g.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (y = a.value) == null ? void 0 : y.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            ds(Nu, {
              id: (b = a.value) == null ? void 0 : b.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (C = a.value) == null ? void 0 : C.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        ds(v0, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : A_("", !0);
    };
  }
}), x8 = /* @__PURE__ */ Re(A8, [["__scopeId", "data-v-b59dc239"]]), L8 = window.Vue.openBlock, O8 = window.Vue.createElementBlock, y0 = window.Vue.createElementVNode;
var R8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const N8 = {}, B8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, P8 = /* @__PURE__ */ y0("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), D8 = /* @__PURE__ */ y0("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), M8 = [
  P8,
  D8
];
function F8(e, o) {
  return L8(), O8("svg", B8, M8);
}
var uh = /* @__PURE__ */ R8(N8, [["render", F8]]);
const U8 = window.Vue.watch, q8 = window.Vue.ref, H8 = window.Vue.onBeforeUnmount, b0 = (e) => {
  const o = q8(!1), r = (s) => {
    s.keyCode === be.ESCAPE && (s.preventDefault(), o.value = !o.value);
  };
  return U8(e, (s) => {
    s ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), H8(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, W8 = window.Vue.watch, V0 = (e) => {
  let o;
  W8(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, C0 = window.Vue.watch, E0 = window.Vue.onBeforeUnmount, S0 = window.Vue.nextTick, z8 = window.Vue.onMounted, k0 = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, Bu = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, T0 = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  E0(() => Bu(o, r)), z8(() => C0(e, (s) => {
    s ? S0(() => {
      o = k0(r);
    }) : Bu(o, r);
  }, { immediate: !0 }));
}, G8 = (e, o) => {
  let r;
  E0(() => Bu(r, o.value ? o.value.offsetParent : !1)), C0([e, o], ([s, a]) => {
    s && a ? S0(() => {
      r = k0(a.offsetParent);
    }) : a && Bu(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var Y8 = Object.defineProperty, L_ = Object.getOwnPropertySymbols, j8 = Object.prototype.hasOwnProperty, K8 = Object.prototype.propertyIsEnumerable, O_ = (e, o, r) => o in e ? Y8(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Z8 = (e, o) => {
  for (var r in o || (o = {}))
    j8.call(o, r) && O_(e, r, o[r]);
  if (L_)
    for (var r of L_(o))
      K8.call(o, r) && O_(e, r, o[r]);
  return e;
};
const Ah = window.Vue.defineComponent, za = window.Vue.ref, X8 = window.Vue.nextTick, I0 = window.Vue.openBlock, A0 = window.Vue.createElementBlock, xh = window.Vue.createElementVNode, J8 = window.Vue.renderSlot, Q8 = window.Vue.resolveComponent, e6 = window.Vue.normalizeClass, t6 = window.Vue.withModifiers, n6 = window.Vue.createVNode, R_ = window.Vue.toRef, N_ = window.Vue.computed, B_ = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var x0 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const r6 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, o6 = Ah({
  props: r6,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = za(), o = za(!1), r = (w, g) => {
      let y = w.compareDocumentPosition(g);
      if (y === 2)
        return "before";
      if (y === 4)
        return "after";
      if (y === 10 || y === 12)
        return "parent";
    }, s = (w) => {
      for (var g = 0; g < w.childNodes.length; g++) {
        var y = w.childNodes[g];
        if (u(y) || s(y))
          return !0;
      }
      return !1;
    }, a = (w) => {
      for (var g = w.childNodes.length - 1; g >= 0; g--) {
        var y = w.childNodes[g];
        if (u(y) || a(y))
          return !0;
      }
      return !1;
    }, u = (w) => c(w) ? (o.value = !0, w.focus && w.focus(), o.value = !1, document.activeElement === w) : !1, c = (w) => {
      if (w.tabIndex > 0 || w.tabIndex === 0 && w.getAttribute("tabIndex") !== null)
        return !0;
      const g = w;
      if (g.disabled || g.tabIndex === -1)
        return !1;
      switch (w.nodeName) {
        case "A":
          const y = w;
          return !!y.href && y.rel !== "ignore";
        case "INPUT":
          const b = w;
          return b.type !== "hidden" && b.type !== "file";
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
        case "IFRAME":
          return !0;
        default:
          return !1;
      }
    }, f = (w) => {
      const g = w.querySelector("[first-focus]");
      g && g.focus ? X8(() => {
        g.focus();
      }) : s(w);
    }, v = za();
    return {
      trapFocus: () => {
        o.value || setTimeout(() => {
          var w = document.activeElement;
          if (e.value.contains(w)) {
            v.value = w;
            return;
          } else {
            switch (r(e.value, w)) {
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
            v.value = document.activeElement;
          }
        }, 0);
      },
      content: e,
      ignoreUtilFocusChanges: o,
      attemptToFocusFirst: f,
      focusLastDescendant: a,
      focusFirstDescendant: s,
      isFocusable: c,
      lastFocus: v
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
}), i6 = /* @__PURE__ */ xh("div", { tabindex: "0" }, null, -1), s6 = {
  class: "focus-trap-content",
  ref: "content"
}, a6 = /* @__PURE__ */ xh("div", { tabindex: "0" }, null, -1);
function l6(e, o, r, s, a, u) {
  return I0(), A0("div", null, [
    i6,
    xh("div", s6, [
      J8(e.$slots, "default")
    ], 512),
    a6
  ]);
}
var L0 = /* @__PURE__ */ x0(o6, [["render", l6]]);
const u6 = Ah({
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
    FeatherIcon: oe
  }
}), c6 = ["aria-label"];
function d6(e, o, r, s, a, u) {
  const c = Q8("FeatherIcon");
  return I0(), A0("a", {
    href: "#",
    class: e6(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = t6((f) => e.$emit("close"), ["prevent"]))
  }, [
    n6(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, c6);
}
var O0 = /* @__PURE__ */ x0(u6, [["render", d6], ["__scopeId", "data-v-fc0f3f00"]]);
const R0 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, f6 = {
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
    default: () => R0,
    validator: (e) => !!e.title
  }
}, h6 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
Ah({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: h6,
  props: f6,
  setup(e, o) {
    const r = qu(R_(e, "labels"), R0), s = R_(e, "modelValue"), a = za(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = N_(() => !!o.slots.footer), f = N_(() => Oe("dialog-header"));
    e.relative ? G8(s, a) : T0(s), V0(s), B_(b0(s), () => {
      u();
    });
    const v = za(e.modelValue);
    return B_(v, (p) => {
      p ? o.emit("shown") : o.emit("hidden");
    }), Z8({ close: u, hasFooter: c, headerId: f, element: a, shown: v }, r);
  },
  components: {
    FocusTrap: L0,
    DialogClose: O0
  }
});
var p6 = Object.defineProperty, P_ = Object.getOwnPropertySymbols, m6 = Object.prototype.hasOwnProperty, v6 = Object.prototype.propertyIsEnumerable, D_ = (e, o, r) => o in e ? p6(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ec = (e, o) => {
  for (var r in o || (o = {}))
    m6.call(o, r) && D_(e, r, o[r]);
  if (P_)
    for (var r of P_(o))
      v6.call(o, r) && D_(e, r, o[r]);
  return e;
};
const tc = window.Vue.defineComponent, M_ = window.Vue.toRef, F_ = window.Vue.watch, U_ = window.Vue.ref, q_ = window.Vue.resolveComponent, uu = window.Vue.openBlock, H_ = window.Vue.createBlock, w6 = window.Vue.Teleport, W_ = window.Vue.createElementBlock, If = window.Vue.createVNode, z_ = window.Vue.Transition, Af = window.Vue.withCtx, G_ = window.Vue.createCommentVNode, _6 = window.Vue.withDirectives, g6 = window.Vue.normalizeStyle, $6 = window.Vue.normalizeClass, Y_ = window.Vue.createElementVNode, y6 = window.Vue.renderSlot, b6 = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var V6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const N0 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, C6 = {
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
    default: () => N0,
    validator: (e) => !!e.title
  }
}, E6 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, S6 = tc({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: E6,
  props: C6,
  setup(e, o) {
    const r = qu(M_(e, "labels"), N0), s = M_(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    T0(s), V0(s), F_(b0(s), () => {
      a();
    });
    const u = U_(), c = U_(!1);
    return F_(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), ec({ close: a, shown: c, isShown: s, element: u }, r);
  },
  components: {
    DialogClose: O0,
    FocusTrap: L0
  }
}), k6 = {
  key: 0,
  class: "drawer-container feather-styles"
}, T6 = {
  key: 0,
  class: "greyedOut"
}, I6 = ["aria-label"], A6 = { class: "slot" };
function x6(e, o, r, s, a, u) {
  const c = q_("dialog-close"), f = q_("focus-trap");
  return uu(), H_(w6, { to: "body" }, [
    e.modelValue ? (uu(), W_("div", k6, [
      If(z_, { name: "greyOutShim" }, {
        default: Af(() => [
          e.modelValue ? (uu(), W_("div", T6)) : G_("", !0)
        ]),
        _: 1
      }),
      If(z_, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (v) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (v) => e.shown = !1)
      }, {
        default: Af(() => [
          _6((uu(), H_(f, {
            enable: e.modelValue,
            style: g6({ width: e.width }),
            key: "sect",
            class: $6(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: Af(() => [
              Y_("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                Y_("div", A6, [
                  y6(e.$slots, "default", {}, void 0, !0)
                ]),
                If(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, I6)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [b6, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : G_("", !0)
  ]);
}
var B0 = /* @__PURE__ */ V6(S6, [["render", x6], ["__scopeId", "data-v-0a36e1dc"]]);
const L6 = ec({
  label: {
    type: String,
    required: !0
  }
}, i0);
tc({
  name: "DrawerTab",
  props: L6,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = xi(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      Li(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return s0(e);
  },
  components: {
    FeatherRipple: qo
  }
});
const O6 = ec({}, u0), R6 = l0;
tc({
  emits: R6,
  model: a0,
  props: O6,
  setup(e, o) {
    return c0(e, o);
  }
});
const N6 = ec({
  header: {
    type: String
  }
}, d0);
tc({
  name: "DrawerTabContent",
  props: N6,
  setup(e) {
    return f0(e);
  },
  directives: {
    MenuFocusLoop: ZO
  }
});
const B6 = window.Vue.defineComponent, P0 = window.Vue.createElementVNode, j_ = window.Vue.createVNode, P6 = window.Vue.renderList, D6 = window.Vue.Fragment, Ca = window.Vue.openBlock, xf = window.Vue.createElementBlock, K_ = window.Vue.createBlock, M6 = window.Vue.unref, F6 = window.Vue.withCtx, U6 = window.Vue.pushScopeId, q6 = window.Vue.popScopeId, H6 = (e) => (U6("data-v-37e146e7"), e = e(), q6(), e), W6 = { class: "content" }, z6 = /* @__PURE__ */ H6(() => /* @__PURE__ */ P0("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), G6 = {
  key: 0,
  class: "situation-list"
}, Lf = window.Vue.ref, Z_ = window.Vue.watch, Y6 = /* @__PURE__ */ B6({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, s = mr(), a = Lf(r.visible), u = () => {
      let p = s.situations;
      r.situationId !== 0 && (p = s.situations.filter(
        (w) => w.id != r.situationId
      )), c.value = p, f.value = p;
    }, c = Lf(s.situations), f = Lf(s.situations);
    Z_(r, () => {
      a.value = r.visible, u();
    }), Z_(
      () => s.situations,
      () => {
        u();
      }
    );
    const v = (p) => {
      f.value = p;
    };
    return (p, w) => (Ca(), K_(M6(B0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        w[0] || (w[0] = (g) => a.value = g),
        w[1] || (w[1] = (g) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: F6(() => [
        P0("div", W6, [
          z6,
          j_(qs, {
            list: c.value,
            isSituation: "",
            onFilteredList: v
          }, null, 8, ["list"]),
          f.value.length ? (Ca(), xf("div", G6, [
            (Ca(!0), xf(D6, null, P6(f.value, (g) => (Ca(), xf("div", {
              class: "card",
              key: g.id
            }, [
              j_(E1, {
                onClick: (y) => o("situation-selected", g.id),
                "situation-info": g,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Ca(), K_(Hs, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), D0 = /* @__PURE__ */ Re(Y6, [["__scopeId", "data-v-37e146e7"]]), j6 = window.Vue.defineComponent, X_ = window.Vue.normalizeClass, $s = window.Vue.createElementVNode, cu = window.Vue.unref, K6 = window.Vue.createVNode, du = window.Vue.toDisplayString, Z6 = window.Vue.createTextVNode, X6 = window.Vue.openBlock, J6 = window.Vue.createElementBlock, Q6 = window.Vue.pushScopeId, eF = window.Vue.popScopeId, tF = (e) => (Q6("data-v-f3d99277"), e = e(), eF(), e), nF = { class: "alarmInfo" }, rF = { class: "alarm-title" }, oF = /* @__PURE__ */ tF(() => /* @__PURE__ */ $s("strong", null, " Duration: ", -1)), iF = { class: "description" }, sF = /* @__PURE__ */ j6({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, s = (/* @__PURE__ */ new Date()).getTime();
    return (a, u) => (X6(), J6("div", {
      class: X_(["alarm", { selected: r.selected }])
    }, [
      $s("div", nF, [
        $s("div", {
          class: X_(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        K6(cu(Ai), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        $s("div", rF, du(e.alarm.nodeLabel) + " - " + du(e.alarm.id), 1)
      ]),
      $s("div", null, [
        oF,
        Z6(" " + du(cu(Uu)(cu(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      $s("div", iF, du(cu(C1)(e.alarm.description, 120)), 1)
    ], 2));
  }
}), Lh = /* @__PURE__ */ Re(sF, [["__scopeId", "data-v-f3d99277"]]), aF = window.Vue.defineComponent, bu = window.Vue.createElementVNode, fs = window.Vue.unref, lF = window.Vue.toDisplayString, J_ = window.Vue.withCtx, Of = window.Vue.createVNode, uF = window.Vue.renderList, cF = window.Vue.Fragment, Ea = window.Vue.openBlock, Rf = window.Vue.createElementBlock, Q_ = window.Vue.createBlock, dF = window.Vue.pushScopeId, fF = window.Vue.popScopeId, hF = (e) => (dF("data-v-35547098"), e = e(), fF(), e), pF = { class: "content" }, mF = { class: "header" }, vF = /* @__PURE__ */ hF(() => /* @__PURE__ */ bu("h4", null, "ADD ALARMS", -1)), wF = {
  key: 0,
  class: "alarms-list"
}, fu = window.Vue.ref, eg = window.Vue.watch, _F = /* @__PURE__ */ aF({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, s = mr(), a = fu(r.visible), u = fu([]), c = fu(["all"]), f = fu(s.unassignedAlarms);
    eg(r, () => {
      a.value = r.visible, u.value = [], f.value = s.unassignedAlarms;
    }), eg(
      () => s.unassignedAlarms,
      () => {
        w();
      }
    );
    const v = (y) => {
      ze.includes(u.value, y) ? ze.remove(u.value, (b) => b === y) : u.value.push(y);
    }, p = () => {
      o("alarms-selected", u.value);
    }, w = () => {
      let y = s.unassignedAlarms;
      c.value.includes("all") || (y = y.filter(
        (b) => c.value.includes(b.severity)
      )), f.value = y;
    }, g = (y) => {
      f.value = y;
    };
    return (y, b) => (Ea(), Q_(fs(B0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        b[0] || (b[0] = (C) => a.value = C),
        b[1] || (b[1] = (C) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: J_(() => [
        bu("div", pF, [
          bu("div", mF, [
            vF,
            Of(fs(Ie), {
              class: "add-alarms-btn",
              onClick: p
            }, {
              default: J_(() => [
                bu("span", null, "Add " + lF(fs(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          Of(qs, {
            list: fs(s).unassignedAlarms,
            onFilteredList: g
          }, null, 8, ["list"]),
          f.value.length ? (Ea(), Rf("div", wF, [
            (Ea(!0), Rf(cF, null, uF(f.value, (C) => (Ea(), Rf("div", {
              class: "card",
              key: C.id
            }, [
              Of(Lh, {
                selected: fs(ze.includes)(fs(u), C.id),
                alarm: C,
                onSelectedAlarm: v
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (Ea(), Q_(Hs, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), gF = /* @__PURE__ */ Re(_F, [["__scopeId", "data-v-35547098"]]), $F = window.Vue.openBlock, yF = window.Vue.createElementBlock, M0 = window.Vue.createElementVNode;
var bF = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const VF = {}, CF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, EF = /* @__PURE__ */ M0("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), SF = /* @__PURE__ */ M0("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), kF = [
  EF,
  SF
];
function TF(e, o) {
  return $F(), yF("svg", CF, kF);
}
var tg = /* @__PURE__ */ bF(VF, [["render", TF]]);
const IF = window.Vue.defineComponent, Nn = window.Vue.createElementVNode, Ut = window.Vue.unref, en = window.Vue.createVNode, Sa = window.Vue.withCtx, AF = window.Vue.renderList, ng = window.Vue.Fragment, ka = window.Vue.openBlock, hu = window.Vue.createElementBlock, xF = window.Vue.createBlock, LF = window.Vue.pushScopeId, OF = window.Vue.popScopeId, Ws = (e) => (LF("data-v-76f75ba2"), e = e(), OF(), e), RF = { class: "container" }, NF = { class: "header" }, BF = /* @__PURE__ */ Ws(() => /* @__PURE__ */ Nn("div", { class: "title" }, "Alarms", -1)), PF = /* @__PURE__ */ Ws(() => /* @__PURE__ */ Nn("span", null, "Add Alarms", -1)), DF = { class: "alarms-container" }, MF = { class: "filters" }, FF = { class: "list" }, UF = { class: "row actions" }, qF = /* @__PURE__ */ Ws(() => /* @__PURE__ */ Nn("span", null, "Clear", -1)), HF = /* @__PURE__ */ Ws(() => /* @__PURE__ */ Nn("span", null, "Acknowledge", -1)), WF = /* @__PURE__ */ Ws(() => /* @__PURE__ */ Nn("span", null, "Move", -1)), zF = /* @__PURE__ */ Ws(() => /* @__PURE__ */ Nn("span", null, "Remove", -1)), GF = { class: "section" }, YF = {
  key: 0,
  class: "alarm-list"
}, pu = window.Vue.ref, jF = window.Vue.watch, KF = window.Vue.reactive, ZF = window.Vue.markRaw, XF = /* @__PURE__ */ IF({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = ZF({
      Add: Ju,
      Delete: tg,
      MarkComplete: Ru,
      CheckCircle: xs,
      ExitToApp: uh
    }), s = Qu(), a = mr(), u = pu(!1), c = pu(["all"]), f = pu(!1), v = pu(!1), p = KF({
      selectedAlarms: [],
      alarms: o.alarms
    });
    jF(o, () => {
      c.value = ["all"], p.alarms = o.alarms, p.selectedAlarms = [], u.value = !1;
    });
    const w = (R) => {
      p.selectedAlarms.includes(R) ? ze.remove(p.selectedAlarms, (D) => D == R) : p.selectedAlarms.push(R);
    }, g = async (R) => {
      p.selectedAlarms.length ? (await Tk(p.selectedAlarms, R), a.getSituation(o.situationId), p.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, y = () => p.selectedAlarms.length === o.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : p.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), b = async () => {
      y() && (await Bv(
        o.situationId,
        p.selectedAlarms
      ) ? a.getSituation(o.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, C = async (R) => {
      y() && (await Bv(
        o.situationId,
        p.selectedAlarms
      ) ? await T(R, p.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, T = async (R, D) => {
      D.length ? await d1(R, D) ? a.getSituation(R) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, B = async (R) => {
      await T(o.situationId, R), v.value = !1;
    }, k = () => {
      p.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, I = (R) => {
      p.alarms = R;
    };
    return (R, D) => (ka(), hu(ng, null, [
      Nn("div", RF, [
        Nn("div", NF, [
          BF,
          en(Ut(Ie), {
            class: "add-alarms-btn",
            onClick: D[0] || (D[0] = (q) => v.value = !0)
          }, {
            default: Sa(() => [
              en(Ut(oe), {
                icon: Ut(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              PF
            ]),
            _: 1
          })
        ]),
        Nn("div", DF, [
          Nn("div", MF, [
            en(qs, {
              list: o.alarms,
              onFilteredList: I,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Nn("div", FF, [
            Nn("div", UF, [
              en(Ut(Ai), {
                modelValue: u.value,
                "onUpdate:modelValue": D[1] || (D[1] = (q) => u.value = q),
                label: "selected"
              }, null, 8, ["modelValue"]),
              en(Ut(Ie), {
                onClick: D[2] || (D[2] = () => g("clear"))
              }, {
                default: Sa(() => [
                  en(Ut(oe), {
                    icon: Ut(Ru),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  qF
                ]),
                _: 1
              }),
              en(Ut(Ie), {
                onClick: D[3] || (D[3] = () => g("ack"))
              }, {
                default: Sa(() => [
                  en(Ut(oe), {
                    icon: Ut(xs),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  HF
                ]),
                _: 1
              }),
              en(Ut(Ie), { onClick: k }, {
                default: Sa(() => [
                  en(Ut(oe), {
                    icon: Ut(uh),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  WF
                ]),
                _: 1
              }),
              en(Ut(Ie), { onClick: b }, {
                default: Sa(() => [
                  en(Ut(oe), {
                    icon: Ut(tg),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  zF
                ]),
                _: 1
              })
            ]),
            Nn("div", GF, [
              p.alarms.length > 0 ? (ka(), hu("div", YF, [
                (ka(!0), hu(ng, null, AF(p.alarms, (q) => (ka(), hu("div", {
                  key: q.id
                }, [
                  en(x8, {
                    alarm: q,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: w
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (ka(), xF(Hs, { key: 1 }))
            ])
          ])
        ])
      ]),
      en(D0, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: C,
        onDrawerClosed: D[4] || (D[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      en(gF, {
        visible: v.value,
        onAlarmsSelected: B,
        onDrawerAlarmsClosed: D[5] || (D[5] = () => v.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
}), JF = /* @__PURE__ */ Re(XF, [["__scopeId", "data-v-76f75ba2"]]), QF = window.Vue.defineComponent, cr = window.Vue.createVNode, On = window.Vue.unref, Nf = window.Vue.normalizeClass, mu = window.Vue.toDisplayString, Ta = window.Vue.openBlock, Ia = window.Vue.createElementBlock, rg = window.Vue.createCommentVNode, e5 = window.Vue.withCtx, Jn = window.Vue.createElementVNode, t5 = window.Vue.Fragment, n5 = window.Vue.pushScopeId, r5 = window.Vue.popScopeId, o5 = (e) => (n5("data-v-fafb3615"), e = e(), r5(), e), i5 = { class: "section" }, s5 = { class: "action-section" }, a5 = { class: "btn-row" }, l5 = { key: 0 }, u5 = { key: 1 }, c5 = {
  key: 0,
  class: "situation-detail"
}, d5 = { class: "situation-info" }, f5 = { class: "id" }, h5 = ["innerHTML"], p5 = /* @__PURE__ */ o5(() => /* @__PURE__ */ Jn("p", null, null, -1)), m5 = { class: "boxes" }, v5 = { class: "parameters" }, w5 = { class: "section memo-boxes" }, _5 = { key: 0 }, g5 = window.Vue.computed, og = window.Vue.ref, $5 = window.Vue.watch, y5 = /* @__PURE__ */ QF({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = Qu(), s = mr(), a = kt.REJECTED, u = og(o.situationInfo.status), c = og(o.situationInfo);
    $5(o, () => {
      u.value = o.situationInfo.status || "", c.value = o.situationInfo;
    });
    const f = g5(
      () => {
        var p;
        return V1(b1(((p = c.value) == null ? void 0 : p.description) || ""));
      }
    ), v = async (p) => {
      var g;
      await c1(
        (g = o.situationInfo) == null ? void 0 : g.id,
        p.toLowerCase()
      ) ? (u.value = p, s.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (p, w) => {
      var g, y, b, C, T, B, k, I, R, D, q, F;
      return Ta(), Ia(t5, null, [
        Jn("div", i5, [
          Jn("div", s5, [
            cr(v0, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Jn("div", a5, [
              cr(On(Ie), {
                class: Nf(["btn", { rejected: u.value == On(a) }]),
                "data-test": "btn-reject",
                onClick: w[0] || (w[0] = (O) => v(On(a)))
              }, {
                default: e5(() => [
                  cr(On(oe), {
                    icon: On(f1),
                    "aria-hidden": "true",
                    class: Nf(["icon reject", { rejected: u.value == On(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == On(a) ? (Ta(), Ia("span", l5, mu(On(a)), 1)) : (Ta(), Ia("span", u5, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (Ta(), Ia("div", c5, [
            Jn("div", {
              class: Nf(["severity-line", [`${(y = (g = c.value) == null ? void 0 : g.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
            }, null, 2),
            Jn("div", d5, [
              Jn("div", f5, [
                Jn("div", null, " Situation - " + mu((b = c.value) == null ? void 0 : b.id) + " - " + mu(c.value.alarms.length) + " alarm(s) affects " + mu(On(ze.size)(On(ze.groupBy)((C = c.value) == null ? void 0 : C.alarms, "nodeId"))) + " node(s) ", 1),
                cr(m0, {
                  severity: (T = c.value) == null ? void 0 : T.severity
                }, null, 8, ["severity"])
              ]),
              Jn("span", {
                innerHTML: On(f),
                "data-test": "situation-description"
              }, null, 8, h5),
              p5,
              Jn("div", m5, [
                cr(_f, {
                  label: "First Event",
                  info: On(xr)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                cr(_f, {
                  label: "Last Event",
                  info: On(xr)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                cr(_f, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Jn("div", v5, [
              cr(OM, {
                alarms: (B = c.value) == null ? void 0 : B.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : rg("", !0),
          Jn("div", w5, [
            cr(Nu, {
              id: (k = c.value) == null ? void 0 : k.id,
              situationId: (I = c.value) == null ? void 0 : I.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (R = c.value) == null ? void 0 : R.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            cr(Nu, {
              id: (D = c.value) == null ? void 0 : D.id,
              situationId: (q = c.value) == null ? void 0 : q.id,
              label: "Journal Memo",
              type: "journal",
              memo: (F = c.value) == null ? void 0 : F.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (Ta(), Ia("div", _5, [
          cr(JF, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : rg("", !0)
      ], 64);
    };
  }
}), b5 = /* @__PURE__ */ Re(y5, [["__scopeId", "data-v-fafb3615"]]);
var V5 = Object.defineProperty, C5 = Object.defineProperties, E5 = Object.getOwnPropertyDescriptors, ig = Object.getOwnPropertySymbols, S5 = Object.prototype.hasOwnProperty, k5 = Object.prototype.propertyIsEnumerable, sg = (e, o, r) => o in e ? V5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ch = (e, o) => {
  for (var r in o || (o = {}))
    S5.call(o, r) && sg(e, r, o[r]);
  if (ig)
    for (var r of ig(o))
      k5.call(o, r) && sg(e, r, o[r]);
  return e;
}, T5 = (e, o) => C5(e, E5(o));
const F0 = window.Vue.defineComponent, ki = window.Vue.resolveComponent, Vu = window.Vue.openBlock, ag = window.Vue.createBlock, Cu = window.Vue.mergeProps, Ti = window.Vue.withCtx, U0 = window.Vue.createElementBlock, I5 = window.Vue.Fragment, A5 = window.Vue.renderList, x5 = window.Vue.createTextVNode, L5 = window.Vue.toDisplayString, O5 = window.Vue.computed, lg = window.Vue.toRef, Aa = window.Vue.createVNode, ug = window.Vue.toHandlers, R5 = window.Vue.renderSlot, N5 = window.Vue.normalizeClass, B5 = window.Vue.createElementVNode;
var q0 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const P5 = F0({
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
      return Oe("feather-select-active");
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
        Ka(o, this.$refs.list.$el);
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
    FeatherList: $h,
    FeatherListItem: tl
  }
});
function D5(e, o, r, s, a, u) {
  const c = ki("FeatherListItem"), f = ki("FeatherList");
  return Vu(), ag(f, Cu(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Ti(() => [
      (Vu(!0), U0(I5, null, A5(e.options, (v, p) => (Vu(), ag(c, {
        key: v[e.textProp],
        "as-li": "",
        id: e.getId(p),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": e.isSelected(p),
        selected: e.isSelected(p),
        onClick: (w) => e.select(v)
      }, {
        default: Ti(() => [
          x5(L5(v[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var M5 = /* @__PURE__ */ q0(P5, [["render", D5], ["__scopeId", "data-v-eae820da"]]);
const F5 = T5(ch(ch({}, Wu), Ms), {
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
}), U5 = {
  "update:modelValue": (e) => !0
}, q5 = F0({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: U5,
  props: F5,
  setup(e, o) {
    Fs(e), zu(e);
    const r = O5(() => Oe("feather-select-input")), { validate: s } = Ps(r, lg(e, "modelValue"), e.label, e.schema, lg(e, "error"));
    return ch({
      inputId: r,
      validate: s
    }, Ds(o.attrs));
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
      return Oe("feather-select-description");
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
    icon: () => el
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
      if (e.keyCode === be.ENTER)
        e.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (e.keyCode === be.ESCAPE)
        this.closeMenu(), e.stopPropagation();
      else if (e.keyCode === be.DOWN)
        e.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (e.keyCode === be.UP)
        e.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (e.keyCode === be.HOME)
        e.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (e.keyCode === be.END)
        e.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const o = String.fromCharCode(e.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      Li(this.delayTimeout), this.delayTimeout = xi(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Hu,
    InputSubText: Bs,
    FeatherMenu: B1,
    List: M5,
    FeatherIcon: oe
  }
});
function H5(e, o, r, s, a, u) {
  const c = ki("FeatherIcon"), f = ki("InputWrapper"), v = ki("List"), p = ki("FeatherMenu"), w = ki("InputSubText");
  return Vu(), U0("div", Cu(e.inherittedAttrs, { class: "feather-select-container" }), [
    Aa(p, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Ti((g) => [
        Aa(f, Cu({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, g.attrs, ug(g.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Ti(() => [
            R5(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Ti(() => [
            Aa(c, {
              class: N5(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Ti(() => [
            B5("input", Cu(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, ug(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Ti(() => [
        Aa(v, {
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
    Aa(w, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var H0 = /* @__PURE__ */ q0(q5, [["render", H5], ["__scopeId", "data-v-ecb32d90"]]);
const W5 = window.Vue.openBlock, z5 = window.Vue.createElementBlock, W0 = window.Vue.createElementVNode;
var G5 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Y5 = {}, j5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, K5 = /* @__PURE__ */ W0("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), Z5 = /* @__PURE__ */ W0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), X5 = [
  K5,
  Z5
];
function J5(e, o) {
  return W5(), z5("svg", j5, X5);
}
var Q5 = /* @__PURE__ */ G5(Y5, [["render", J5]]);
const Eu = window.Vue.openBlock, dh = window.Vue.createElementBlock, z0 = window.Vue.createElementVNode, eU = window.Vue.defineComponent, $i = window.Vue.ref, tU = window.Vue.provide, cg = window.Vue.computed, nU = window.Vue.onUnmounted, dg = window.Vue.toRef, rU = window.Vue.resolveComponent, oU = window.Vue.Fragment, iU = window.Vue.createBlock, sU = window.Vue.Teleport, fg = window.Vue.createVNode, aU = window.Vue.Transition, lU = window.Vue.withCtx, uU = window.Vue.normalizeClass, cU = window.Vue.normalizeStyle, dU = window.Vue.toDisplayString, fU = window.Vue.createCommentVNode, hU = window.Vue.renderSlot, Bf = window.Vue.nextTick;
var G0 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const pU = {}, mU = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, vU = /* @__PURE__ */ z0("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), wU = [
  vU
];
function _U(e, o) {
  return Eu(), dh("svg", mU, wU);
}
var gU = /* @__PURE__ */ G0(pU, [["render", _U]]), Nt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Nt || {}), to = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(to || {});
const $U = (e, o, r, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + s && c.push(Nt.top), a >= o.height + s && c.push(Nt.bottom);
  const f = [];
  u >= o.width + s && f.push(Nt.right), e.left >= o.width + s && f.push(Nt.left);
  let v = [...f, ...c];
  return (r === Nt.top || r === Nt.bottom) && (v = [...c, ...f]), v.indexOf(r) > -1 ? r : v.length ? v[0] : r;
}, yU = (e, o, r, s, a = 28) => {
  if (e === Nt.left || e === Nt.right)
    return to.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], v = u, p = c + o.width / 2, w = r.width - a, g = r.width / 2;
  return v >= g && p >= g && f.push(to.center), p >= w && f.push(to.left), v >= w && f.push(to.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, bU = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Nt.top
  },
  pointerAlignment: {
    type: String,
    default: () => to.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, VU = eU({
  props: bU,
  setup(e) {
    const o = $i(!1), r = $i(!1), s = Oe("feather-tooltip-trigger"), a = Oe("feather-tooltip"), u = "data-feather-tooltip";
    tU("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      Li(c), o.value || (c = xi(T, e.enterDelay));
    }, v = () => {
      Li(c), c = xi(B, e.exitDelay);
    }, p = (re) => {
      re.keyCode === be.ESCAPE && (re.preventDefault(), B(!0));
    }, w = cg(() => ({
      [u]: s,
      "aria-describedby": a
    })), g = {
      mouseenter: f,
      mouseleave: v,
      focus: f,
      blur: v,
      keydown: p
    }, y = $i(document), b = N1(y, () => B(!0));
    nU(() => B(!0));
    const C = () => document.getElementById(a), T = () => {
      r.value = !1, o.value = !0, Bf(() => {
        const re = C();
        X(re), o.value = !1, Bf(() => {
          r.value = !0, o.value = !0, b.value = !0;
        });
      });
    }, B = (re = !1) => {
      F.value = "", q.value = "", O.value = "", j.value = "", o.value = !1, re && (r.value = !1), b.value = !1;
    }, k = dg(e, "placement"), I = dg(e, "pointerAlignment"), R = 8, D = 24, q = $i(""), F = $i(""), O = $i(""), j = $i(""), Y = cg(() => j.value ? "p-" + j.value : !1), X = (re) => {
      const he = document.querySelector(`[${u}=${s}]`);
      if (!he) {
        console.log("trigger not found");
        return;
      }
      Bf(() => {
        const Ce = he.getBoundingClientRect(), we = re.getBoundingClientRect(), $e = $U(Ce, we, k.value, R), Je = yU($e, Ce, we, I.value, D);
        O.value = Je.toString(), j.value = $e.toString();
        let zt = 0, Qe = 0;
        if (($e === Nt.left || $e === Nt.right) && (zt = Ce.top + Ce.height / 2 - we.height / 2, $e === Nt.left && (Qe = Ce.left - we.width - R), $e === Nt.right && (Qe = Ce.right)), $e === Nt.top || $e === Nt.bottom) {
          zt = Ce.top - we.height - R, $e === Nt.bottom && (zt = Ce.bottom);
          const Vt = Ce.left + Ce.width / 2;
          switch (Je) {
            case to.center:
              Qe = Vt - we.width / 2;
              break;
            case to.left:
              Qe = Vt - D;
              break;
            case to.right:
              Qe = Vt - we.width + D;
              break;
          }
        }
        q.value = zt.toString() + "px", F.value = Qe.toString() + "px";
      });
    };
    return {
      attrs: w,
      listeners: g,
      show: o,
      animate: r,
      alignmentClass: O,
      placementClass: Y,
      top: q,
      left: F,
      tooltipID: a
    };
  },
  components: {
    Pointer: gU
  }
}), CU = ["id"];
function EU(e, o, r, s, a, u) {
  const c = rU("Pointer");
  return Eu(), dh(oU, null, [
    (Eu(), iU(sU, { to: "body" }, [
      fg(aU, { css: e.animate }, {
        default: lU(() => [
          e.show ? (Eu(), dh("div", {
            key: 0,
            class: uU(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: cU({ left: e.left, top: e.top })
          }, [
            z0("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, dU(e.title), 9, CU),
            fg(c, { class: "tooltip-pointer" })
          ], 6)) : fU("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    hU(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var hg = /* @__PURE__ */ G0(VU, [["render", EU], ["__scopeId", "data-v-3da6b22e"]]);
const SU = window.Vue.defineComponent, Pf = window.Vue.normalizeStyle, Df = window.Vue.createElementVNode, xa = window.Vue.unref, pg = window.Vue.toHandlers, mg = window.Vue.mergeProps, vg = window.Vue.withCtx, wg = window.Vue.createVNode, kU = window.Vue.renderList, TU = window.Vue.Fragment, La = window.Vue.openBlock, Oa = window.Vue.createElementBlock, _g = window.Vue.normalizeClass, gg = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const IU = { class: "row" }, AU = /* @__PURE__ */ SU({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = (/* @__PURE__ */ new Date()).getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => (La(), Oa("div", IU, [
      Df("div", {
        class: "line-gray",
        style: Pf({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      wg(xa(hg), {
        title: xa(xr)(e.alarm.firstEventTime)
      }, {
        default: vg(({ attrs: f, on: v }) => [
          Df("div", mg({ class: "circle" }, f, pg(v), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (La(!0), Oa(TU, null, kU(o.events, (f, v) => (La(), Oa("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[v + 1] ? (La(), Oa("div", {
          key: 0,
          class: _g(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: Pf({
            width: s(f.createTime, o.events[v + 1].createTime) + "px"
          })
        }, null, 6)) : gg("", !0),
        wg(xa(hg), {
          title: xa(xr)(e.alarm.firstEventTime)
        }, {
          default: vg(({ attrs: p, on: w }) => [
            o.events[v + 1] ? (La(), Oa("div", mg({ key: 0 }, p, pg(w), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : gg("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      Df("div", {
        class: _g(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: Pf({
          width: s(e.events[e.events.length - 1].createTime, xa(r)) + "px"
        })
      }, null, 6)
    ]));
  }
}), xU = /* @__PURE__ */ Re(AU, [["__scopeId", "data-v-6c43a557"]]), LU = window.Vue.openBlock, OU = window.Vue.createElementBlock, Y0 = window.Vue.createElementVNode;
var RU = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const NU = {}, BU = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PU = /* @__PURE__ */ Y0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), DU = /* @__PURE__ */ Y0("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), MU = [
  PU,
  DU
];
function FU(e, o) {
  return LU(), OU("svg", BU, MU);
}
var UU = /* @__PURE__ */ RU(NU, [["render", FU]]);
const qU = window.Vue.defineComponent, fh = window.Vue.createElementVNode, HU = window.Vue.renderList, $g = window.Vue.Fragment, Mf = window.Vue.openBlock, Ff = window.Vue.createElementBlock, WU = window.Vue.normalizeClass, zU = window.Vue.unref, yg = window.Vue.toDisplayString, GU = window.Vue.pushScopeId, YU = window.Vue.popScopeId, jU = (e) => (GU("data-v-2e087f7b"), e = e(), YU(), e), KU = /* @__PURE__ */ jU(() => /* @__PURE__ */ fh("strong", null, "Events:", -1)), ZU = /* @__PURE__ */ qU({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (Mf(), Ff($g, null, [
      KU,
      (Mf(!0), Ff($g, null, HU(o.events, (a) => (Mf(), Ff("div", {
        class: "event-description",
        key: a.id
      }, [
        fh("div", {
          class: WU(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        fh("div", null, yg(zU(xr)(a.createTime)) + " - " + yg(a.source), 1)
      ]))), 128))
    ], 64));
  }
}), XU = /* @__PURE__ */ Re(ZU, [["__scopeId", "data-v-2e087f7b"]]), JU = window.Vue.defineComponent, QU = window.Vue.normalizeClass, Rn = window.Vue.createElementVNode, hs = window.Vue.toDisplayString, vn = window.Vue.unref, ps = window.Vue.createVNode, j0 = window.Vue.createTextVNode, e7 = window.Vue.renderList, bg = window.Vue.Fragment, Qr = window.Vue.openBlock, yi = window.Vue.createElementBlock, Vg = window.Vue.createBlock, vu = window.Vue.createCommentVNode, t7 = window.Vue.normalizeStyle, n7 = window.Vue.pushScopeId, r7 = window.Vue.popScopeId, o7 = (e) => (n7("data-v-57b5ddda"), e = e(), r7(), e), i7 = { class: "section detail" }, s7 = { class: "id" }, a7 = {
  key: 0,
  class: "section"
}, l7 = /* @__PURE__ */ o7(() => /* @__PURE__ */ Rn("div", { class: "id" }, "Alarms", -1)), u7 = { class: "action-btns" }, c7 = { class: "zoom" }, d7 = /* @__PURE__ */ j0(" Zoom "), f7 = { class: "times" }, h7 = {
  key: 0,
  class: "timeline-container"
}, p7 = { class: "alarm-id" }, m7 = {
  key: 0,
  class: "panel"
}, Oo = window.Vue.ref, v7 = window.Vue.watch, w7 = /* @__PURE__ */ JU({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var D, q;
    const o = e, r = mr(), s = Oo(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Oo(a[0]), c = Oo(o.width), f = Oo(o.width), v = Oo((/* @__PURE__ */ new Date()).getTime()), p = () => {
      var F, O;
      if (!o.situation.events) {
        const j = (O = (F = o.situation) == null ? void 0 : F.alarms) == null ? void 0 : O.map((Y) => Y.id);
        r.getEvents(o.situation.id, j);
      }
    };
    p();
    const w = () => (v.value = (/* @__PURE__ */ new Date()).getTime(), c.value / (Number(v.value) - Number(y.value))), g = Oo(o.situation.alarms), y = Oo(
      ((q = ze.minBy((D = o.situation) == null ? void 0 : D.alarms, "firstEventTime")) == null ? void 0 : q.firstEventTime) || (/* @__PURE__ */ new Date()).getTime()
    ), b = Oo(w());
    v7(o, () => {
      var F, O;
      y.value = ((O = ze.minBy((F = o.situation) == null ? void 0 : F.alarms, "firstEventTime")) == null ? void 0 : O.firstEventTime) || (/* @__PURE__ */ new Date()).getTime(), p(), c.value = f.value, b.value = w(), g.value = o.situation.alarms, u.value = a[0];
    });
    const C = (F) => {
      if ((F == null ? void 0 : F.id) === 1 && (g.value = o.situation.alarms), (F == null ? void 0 : F.id) === 2) {
        const O = ze.groupBy(g.value, "severity"), j = [
          ...O.CRITICAL || [],
          ...O.MAJOR || [],
          ...O.MINOR || [],
          ...O.WARNING || [],
          ...O.NORMAL || [],
          ...O.CLEARED || [],
          ...O.INDETERMINATE || []
        ];
        g.value = j.filter((Y) => Y);
      }
      if ((F == null ? void 0 : F.id) === 3) {
        const O = ze.reverse(
          ze.sortBy(
            o.situation.alarms,
            (j) => Number(j.lastEventTime) - Number(j.firstEventTime)
          )
        );
        g.value = O;
      }
    }, T = () => {
      c.value += 100, b.value = w();
    }, B = () => {
      c.value -= 100, b.value = w();
    }, k = () => {
      c.value = f.value, b.value = w();
    }, I = (F) => {
      s.value = F;
    }, R = () => {
      s.value = 0;
    };
    return (F, O) => {
      var j, Y;
      return Qr(), yi(bg, null, [
        Rn("div", i7, [
          Rn("div", {
            class: QU(["severity-line", [`${(Y = (j = o.situation) == null ? void 0 : j.severity) == null ? void 0 : Y.toLowerCase()}-bg dark`]])
          }, null, 2),
          Rn("div", null, [
            Rn("div", s7, "Situation " + hs(o.situation.id), 1),
            Rn("div", null, " Duration: " + hs(vn(Uu)(v.value, new Date(y.value))), 1)
          ])
        ]),
        g.value && g.value.length > 0 ? (Qr(), yi("div", a7, [
          l7,
          Rn("div", u7, [
            ps(vn(H0), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                O[0] || (O[0] = (X) => u.value = X),
                C
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            Rn("div", c7, [
              d7,
              Rn("div", null, [
                ps(vn(oe), {
                  icon: vn(Q5),
                  class: "zoom-icon",
                  onClick: T
                }, null, 8, ["icon"]),
                ps(vn(oe), {
                  icon: vn(X1),
                  class: "zoom-icon",
                  onClick: k
                }, null, 8, ["icon"]),
                ps(vn(oe), {
                  icon: vn(UU),
                  class: "zoom-icon",
                  onClick: B
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Qr(), yi("div", {
            key: 0,
            class: "alarms",
            style: t7({
              width: f.value + 50 + "px"
            })
          }, [
            Rn("div", f7, [
              Rn("div", null, hs(vn(xr)(y.value)), 1),
              Rn("div", null, hs(vn(xr)(v.value)), 1)
            ]),
            e.situation.events ? (Qr(), yi("div", h7, [
              (Qr(!0), yi(bg, null, e7(g.value, (X) => (Qr(), yi("div", {
                class: "timeline",
                key: X.id
              }, [
                Rn("div", p7, [
                  j0(hs(X.nodeLabel) + " - " + hs(X.id) + " ", 1),
                  s.value === X.id ? (Qr(), Vg(vn(oe), {
                    key: 0,
                    icon: vn(el),
                    class: "zoom-icon expand",
                    onClick: R
                  }, null, 8, ["icon"])) : (Qr(), Vg(vn(oe), {
                    key: 1,
                    icon: vn(k1),
                    class: "zoom-icon expand",
                    onClick: () => I(X.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                ps(xU, {
                  alarm: X,
                  proportion: b.value,
                  "min-start": y.value,
                  events: o.situation.events[X.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === X.id ? (Qr(), yi("div", m7, [
                  ps(XU, {
                    events: o.situation.events[X.id]
                  }, null, 8, ["events"])
                ])) : vu("", !0)
              ]))), 128))
            ])) : vu("", !0)
          ], 4)) : vu("", !0)
        ])) : vu("", !0)
      ], 64);
    };
  }
}), _7 = /* @__PURE__ */ Re(w7, [["__scopeId", "data-v-57b5ddda"]]), g7 = window.Vue.defineComponent, _n = window.Vue.createElementVNode, dr = window.Vue.unref, Wt = window.Vue.createTextVNode, ms = window.Vue.withCtx, at = window.Vue.openBlock, $7 = window.Vue.createBlock, wu = window.Vue.createCommentVNode, Ro = window.Vue.createVNode, dt = window.Vue.createElementBlock, y7 = window.Vue.resolveComponent, bi = window.Vue.toDisplayString, Cg = window.Vue.renderList, Eg = window.Vue.Fragment, b7 = window.Vue.pushScopeId, V7 = window.Vue.popScopeId, zs = (e) => (b7("data-v-8418d0e3"), e = e(), V7(), e), C7 = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, E7 = { class: "header" }, S7 = /* @__PURE__ */ zs(() => /* @__PURE__ */ _n("h3", null, "AI Suggestions", -1)), k7 = { class: "header-actions" }, T7 = /* @__PURE__ */ Wt(" Re-evaluate "), I7 = /* @__PURE__ */ Wt(" Refresh "), A7 = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, x7 = /* @__PURE__ */ zs(() => /* @__PURE__ */ _n("span", null, "Loading…", -1)), L7 = {
  key: 1,
  class: "state-row",
  "data-test": "ai-reanalyzing"
}, O7 = /* @__PURE__ */ zs(() => /* @__PURE__ */ _n("span", null, "Requesting a fresh analysis…", -1)), R7 = {
  key: 2,
  class: "state-row",
  "data-test": "ai-absent"
}, N7 = {
  key: 0,
  "data-test": "ai-absent-disabled"
}, B7 = /* @__PURE__ */ Wt(" The LLM integration is currently disabled. Enable it on the "), P7 = /* @__PURE__ */ Wt("configuration page"), D7 = /* @__PURE__ */ Wt(" to start generating suggestions for new situations. "), M7 = {
  key: 1,
  "data-test": "ai-absent-no-key"
}, F7 = /* @__PURE__ */ Wt(" No API key is configured. Add one on the "), U7 = /* @__PURE__ */ Wt("configuration page"), q7 = /* @__PURE__ */ Wt(" to enable AI suggestions. "), H7 = {
  key: 2,
  "data-test": "ai-absent-not-yet-run"
}, W7 = /* @__PURE__ */ Wt(" No analysis has run for this situation yet. New situations are analyzed automatically — click "), z7 = /* @__PURE__ */ zs(() => /* @__PURE__ */ _n("strong", null, "Re-evaluate", -1)), G7 = /* @__PURE__ */ Wt(" above to trigger one now. "), Y7 = [
  W7,
  z7,
  G7
], j7 = {
  key: 3,
  class: "reanalyze-error",
  "data-test": "ai-reanalyze-error"
}, K7 = {
  key: 3,
  class: "state-row",
  "data-test": "ai-pending"
}, Z7 = {
  key: 4,
  class: "state-row failed",
  "data-test": "ai-failed"
}, X7 = { class: "failed-msg" }, J7 = /* @__PURE__ */ Wt(" The last LLM request failed: "), Q7 = /* @__PURE__ */ Wt(" Retry "), e9 = {
  key: 5,
  class: "state-row",
  "data-test": "ai-error"
}, t9 = /* @__PURE__ */ Wt(" Could not load suggestions. Please retry. "), n9 = /* @__PURE__ */ Wt("Retry"), r9 = {
  key: 6,
  "data-test": "ai-ready"
}, o9 = {
  key: 0,
  class: "meta"
}, i9 = /* @__PURE__ */ Wt(" Generated by "), s9 = { class: "section" }, a9 = /* @__PURE__ */ zs(() => /* @__PURE__ */ _n("h4", null, "Probable root causes", -1)), l9 = {
  key: 0,
  "data-test": "ai-root-causes"
}, u9 = {
  key: 1,
  class: "empty"
}, c9 = { class: "section" }, d9 = /* @__PURE__ */ zs(() => /* @__PURE__ */ _n("h4", null, "Possible resolutions", -1)), f9 = {
  key: 0,
  "data-test": "ai-resolutions"
}, h9 = {
  key: 1,
  class: "empty"
}, Uf = window.Vue.computed, p9 = window.Vue.onBeforeUnmount, m9 = window.Vue.onMounted, qf = window.Vue.ref, v9 = /* @__PURE__ */ g7({
  __name: "AISuggestionsTab",
  props: {
    situationId: null
  },
  setup(e) {
    const o = e, r = Uo(), s = qf("loading"), a = qf(null), u = qf(null), c = 5e3, f = 300 * 1e3;
    let v = null, p = 0;
    const w = () => {
      v !== null && (clearInterval(v), v = null);
    }, g = () => {
      s.value === "pending" && v === null && (p = Date.now(), v = setInterval(async () => {
        if (Date.now() - p > f) {
          w();
          return;
        }
        await y(), s.value !== "pending" && w();
      }, c));
    }, y = async () => {
      const I = await u1(o.situationId);
      if (I === !1) {
        s.value = "error";
        return;
      }
      if (I === null) {
        s.value = "absent", a.value = null;
        return;
      }
      a.value = I, s.value = I.status;
    }, b = async () => {
      s.value = "loading", w(), await y(), g();
    }, C = async () => {
      u.value = null, s.value = "reanalyzing", w();
      const I = await Wk(o.situationId);
      if (I === !1) {
        s.value = "absent", u.value = "Could not start a new analysis. Make sure LLM is enabled on the configuration page and an API key is saved.", await r.getLLMConfig();
        return;
      }
      a.value = I, s.value = I.status, g();
    };
    m9(async () => {
      r.llmConfig === null && await r.getLLMConfig(), await y(), g();
    }), p9(() => w());
    const T = Uf(() => {
      var I;
      return (I = a.value) != null && I.requestedAt ? new Date(a.value.requestedAt).toLocaleString() : "";
    }), B = Uf(() => {
      const I = r.llmConfig;
      return !I || !I.enabled ? "disabled" : I.apiKeyPresent ? "not-yet-run" : "no-key";
    }), k = Uf(
      () => {
        var I, R;
        return ((I = r.llmConfig) == null ? void 0 : I.enabled) === !0 && ((R = r.llmConfig) == null ? void 0 : R.apiKeyPresent) === !0;
      }
    );
    return (I, R) => {
      var q;
      const D = y7("router-link");
      return at(), dt("div", C7, [
        _n("div", E7, [
          S7,
          _n("div", k7, [
            dr(k) ? (at(), $7(dr(Ie), {
              key: 0,
              primary: "",
              "data-test": "ai-reanalyze",
              disabled: s.value === "reanalyzing" || s.value === "pending",
              onClick: C
            }, {
              default: ms(() => [
                T7
              ]),
              _: 1
            }, 8, ["disabled"])) : wu("", !0),
            Ro(dr(Ie), {
              secondary: "",
              "data-test": "ai-refresh",
              onClick: b
            }, {
              default: ms(() => [
                I7
              ]),
              _: 1
            })
          ])
        ]),
        s.value === "loading" ? (at(), dt("div", A7, [
          Ro(dr(ks)),
          x7
        ])) : s.value === "reanalyzing" ? (at(), dt("div", L7, [
          Ro(dr(ks)),
          O7
        ])) : s.value === "absent" ? (at(), dt("div", R7, [
          dr(B) === "disabled" ? (at(), dt("span", N7, [
            B7,
            Ro(D, { to: "/settings" }, {
              default: ms(() => [
                P7
              ]),
              _: 1
            }),
            D7
          ])) : dr(B) === "no-key" ? (at(), dt("span", M7, [
            F7,
            Ro(D, { to: "/settings" }, {
              default: ms(() => [
                U7
              ]),
              _: 1
            }),
            q7
          ])) : (at(), dt("span", H7, Y7)),
          u.value ? (at(), dt("div", j7, bi(u.value), 1)) : wu("", !0)
        ])) : s.value === "pending" ? (at(), dt("div", K7, [
          Ro(dr(ks)),
          _n("span", null, " Analyzing alarms with the LLM… requested at " + bi(dr(T)) + ". ", 1)
        ])) : s.value === "failed" ? (at(), dt("div", Z7, [
          _n("div", X7, [
            J7,
            _n("code", null, bi(((q = a.value) == null ? void 0 : q.error) || "unknown error"), 1)
          ]),
          Ro(dr(Ie), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: b
          }, {
            default: ms(() => [
              Q7
            ]),
            _: 1
          })
        ])) : s.value === "error" ? (at(), dt("div", e9, [
          t9,
          Ro(dr(Ie), {
            secondary: "",
            onClick: b
          }, {
            default: ms(() => [
              n9
            ]),
            _: 1
          })
        ])) : s.value === "ready" && a.value ? (at(), dt("div", r9, [
          a.value.completedAt ? (at(), dt("div", o9, [
            i9,
            _n("strong", null, bi(a.value.model), 1),
            Wt(" at " + bi(new Date(a.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : wu("", !0),
          _n("div", s9, [
            a9,
            a.value.rootCauses.length ? (at(), dt("ol", l9, [
              (at(!0), dt(Eg, null, Cg(a.value.rootCauses, (F, O) => (at(), dt("li", {
                key: `cause-${O}`
              }, bi(F), 1))), 128))
            ])) : (at(), dt("div", u9, "No root causes returned."))
          ]),
          _n("div", c9, [
            d9,
            a.value.resolutions.length ? (at(), dt("ol", f9, [
              (at(!0), dt(Eg, null, Cg(a.value.resolutions, (F, O) => (at(), dt("li", {
                key: `res-${O}`
              }, bi(F), 1))), 128))
            ])) : (at(), dt("div", h9, "No resolutions returned."))
          ])
        ])) : wu("", !0)
      ]);
    };
  }
}), w9 = /* @__PURE__ */ Re(v9, [["__scopeId", "data-v-8418d0e3"]]), _9 = window.Vue.openBlock, g9 = window.Vue.createElementBlock, $9 = window.Vue.createElementVNode;
var y9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const b9 = {}, V9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, C9 = /* @__PURE__ */ $9("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), E9 = [
  C9
];
function S9(e, o) {
  return _9(), g9("svg", V9, E9);
}
var As = /* @__PURE__ */ y9(b9, [["render", S9]]);
const K0 = window.Vue.defineComponent, Hf = window.Vue.ref, k9 = window.Vue.toRef, Wf = window.Vue.inject, Sg = window.Vue.watch, T9 = window.Vue.nextTick, kg = window.Vue.openBlock, Tg = window.Vue.createElementBlock, zf = window.Vue.createElementVNode, I9 = window.Vue.normalizeClass, Ig = window.Vue.renderSlot, Ag = window.Vue.createCommentVNode, Gf = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var A9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const x9 = {
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
}, L9 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, O9 = K0({
  emits: L9,
  props: x9,
  setup(e, o) {
    const r = Hf(), s = Hf(!1), a = Hf(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = k9(e, "modelValue"), f = Wf("queueSnackbar", !1), v = Wf("unqueueSnackbar", !1), p = Wf("nextSnackbar", () => {
    }), w = (T, B) => {
      let k, I, R = B;
      const D = () => {
        k && (Li(k), k = 0, R -= Date.now() - I);
      }, q = () => {
        k || (I = Date.now(), k = xi(T, R));
      };
      return q(), { pause: D, resume: q };
    }, g = () => {
      s.value = !1, o.emit("closed"), p && p();
    }, y = (T) => {
      T.keyCode === be.ESCAPE && (a.value = !1);
    }, b = () => {
      r.value.pause();
    }, C = () => {
      a.value && r.value.resume();
    };
    return Sg(c, (T) => {
      T ? T9(() => {
        f === !1 ? a.value = T : f(u, a);
      }) : v === !1 ? a.value = T : v(u);
    }, { immediate: !0 }), Sg(a, (T) => {
      T ? (s.value = !0, r.value = w(() => {
        a.value = !1;
      }, e.timeout)) : (o.emit("update:modelValue", !1), b());
    }), {
      hideTimeout: r,
      contentShow: s,
      internalValue: a,
      id: u,
      incomingValue: c,
      closed: g,
      keyPressed: y,
      stopTimer: b,
      resumeTimer: C
    };
  }
}), R9 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, N9 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, B9 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, P9 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function D9(e, o, r, s, a, u) {
  return e.modelValue || e.contentShow ? (kg(), Tg("div", R9, [
    zf("div", {
      class: I9(["feather-snackbar", {
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
      zf("div", N9, [
        e.contentShow ? (kg(), Tg("div", B9, [
          Ig(e.$slots, "default", {}, void 0, !0)
        ])) : Ag("", !0)
      ]),
      zf("div", P9, [
        Ig(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : Ag("", !0);
}
var nc = /* @__PURE__ */ A9(O9, [["render", D9], ["__scopeId", "data-v-5cf64a62"]]);
const M9 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
K0({
  props: M9,
  setup() {
    let e, o = [];
    const r = () => {
      e && (e.val.value = !0);
    }, s = (c, f) => {
      const v = { id: c, val: f };
      e ? o.push(v) : (e = v, r());
    }, a = (c) => {
      (e == null ? void 0 : e.id) === c ? e.val.value = !1 : o = o.filter((f) => f.id != c);
    }, u = () => {
      o.length ? (e = o.shift(), r()) : e = void 0;
    };
    return Gf("queueSnackbar", s), Gf("unqueueSnackbar", a), Gf("nextSnackbar", u), {
      curr: e,
      queue: o,
      showSnackbar: r,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const F9 = window.Vue.defineComponent, it = window.Vue.unref, qt = window.Vue.createVNode, Xa = window.Vue.createElementVNode, wn = window.Vue.withCtx, Vi = window.Vue.openBlock, Yf = window.Vue.createBlock, xg = window.Vue.createCommentVNode, nl = window.Vue.createTextVNode, _u = window.Vue.createElementBlock, Lg = window.Vue.toDisplayString, U9 = window.Vue.pushScopeId, q9 = window.Vue.popScopeId, Oh = (e) => (U9("data-v-28366268"), e = e(), q9(), e), H9 = { id: "cont" }, W9 = { class: "btns-navigation" }, z9 = /* @__PURE__ */ Oh(() => /* @__PURE__ */ Xa("span", null, "Situation List", -1)), G9 = /* @__PURE__ */ Oh(() => /* @__PURE__ */ Xa("span", null, "Show Previous Situation ", -1)), Y9 = /* @__PURE__ */ Oh(() => /* @__PURE__ */ Xa("span", null, "Show Next Situation", -1)), j9 = { key: 1 }, K9 = {
  key: 0,
  class: "detail"
}, Z9 = /* @__PURE__ */ nl("Details"), X9 = /* @__PURE__ */ nl("Metrics"), J9 = /* @__PURE__ */ nl("AI Suggestions"), Q9 = {
  key: 1,
  class: "noSituation"
}, eq = /* @__PURE__ */ nl("dismiss"), Ci = window.Vue.ref, Og = window.Vue.watch, tq = window.Vue.onMounted, nq = window.VueRouter.useRoute, rq = /* @__PURE__ */ F9({
  __name: "SituationDetail",
  setup(e) {
    const o = zo(), r = nq(), s = parseInt(r.params.id), a = Ci(s), u = mr(), c = Qu(), f = Ci(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const v = Ci(), p = Ci(), w = Ci(!0), g = Ci(
      u.filteredSituations.findIndex((B) => B === a.value)
    ), y = Ci(!1);
    Og(
      () => u.situationDetail,
      () => {
        v.value = u.situationDetail, w.value = !1, u.getUnassignedAlarms();
      }
    ), tq(() => {
      var k;
      const B = ((k = document.getElementById("cont")) == null ? void 0 : k.getBoundingClientRect().width) || 1200;
      p.value = B - 90;
    });
    const b = () => {
      o.push({
        name: yt.situations
      });
    }, C = (B) => {
      const k = g.value, I = u.filteredSituations[k + B];
      o.push({
        name: yt.situationDetail,
        params: {
          id: I
        }
      });
    };
    Og(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), g.value = u.filteredSituations.findIndex((B) => B == a.value);
    }), c.$subscribe((B, k) => {
      y.value = k.showError;
    });
    const T = (B) => {
      f.value = B || 0;
    };
    return (B, k) => (Vi(), _u("div", H9, [
      Xa("div", W9, [
        qt(it(Ie), {
          primary: "",
          onClick: k[0] || (k[0] = () => b())
        }, {
          default: wn(() => [
            qt(it(oe), {
              icon: it(As),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            z9
          ]),
          _: 1
        }),
        Xa("div", null, [
          qt(it(Ie), {
            disabled: !it(u).filteredSituations[g.value - 1],
            primary: "",
            onClick: k[1] || (k[1] = () => C(-1))
          }, {
            default: wn(() => [
              qt(it(oe), {
                icon: it(As),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              G9
            ]),
            _: 1
          }, 8, ["disabled"]),
          qt(it(Ie), {
            disabled: !it(u).filteredSituations[g.value + 1],
            primary: "",
            onClick: k[2] || (k[2] = () => C(1))
          }, {
            default: wn(() => [
              Y9,
              qt(it(oe), {
                icon: it(As),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      w.value ? (Vi(), Yf(it(ks), {
        key: 0,
        class: "spinner"
      })) : (Vi(), _u("div", j9, [
        v.value ? (Vi(), _u("div", K9, [
          qt(it(p0), { "onUpdate:modelValue": T }, {
            tabs: wn(() => [
              qt(it(Ts), null, {
                default: wn(() => [
                  Z9
                ]),
                _: 1
              }),
              qt(it(Ts), null, {
                default: wn(() => [
                  X9
                ]),
                _: 1
              }),
              qt(it(Ts), { "data-test": "ai-suggestions-tab" }, {
                default: wn(() => [
                  J9
                ]),
                _: 1
              })
            ]),
            default: wn(() => [
              qt(it(Is), { class: "panel" }, {
                default: wn(() => [
                  qt(b5, { "situation-info": v.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              qt(it(Is), { class: "panel" }, {
                default: wn(() => [
                  p.value && f.value == 1 ? (Vi(), Yf(_7, {
                    key: 0,
                    situation: v.value,
                    width: p.value
                  }, null, 8, ["situation", "width"])) : xg("", !0)
                ]),
                _: 1
              }),
              qt(it(Is), { class: "panel" }, {
                default: wn(() => [
                  f.value == 2 ? (Vi(), Yf(w9, {
                    key: v.value.id,
                    "situation-id": v.value.id
                  }, null, 8, ["situation-id"])) : xg("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (Vi(), _u("div", Q9, " Error. The situation " + Lg(it(s)) + " does not exist. ", 1))
      ])),
      qt(it(nc), {
        modelValue: y.value,
        "onUpdate:modelValue": k[4] || (k[4] = (I) => y.value = I),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: wn(() => [
          qt(it(Ie), {
            onClick: k[3] || (k[3] = (I) => y.value = !1),
            text: ""
          }, {
            default: wn(() => [
              eq
            ]),
            _: 1
          })
        ]),
        default: wn(() => [
          nl(Lg(it(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), oq = /* @__PURE__ */ Re(rq, [["__scopeId", "data-v-28366268"]]), iq = window.Vue.defineComponent, Ot = window.Vue.unref, Xn = window.Vue.createVNode, on = window.Vue.createElementVNode, vs = window.Vue.withCtx, ws = window.Vue.openBlock, Ra = window.Vue.createElementBlock, sq = window.Vue.createCommentVNode, aq = window.Vue.toDisplayString, Rh = window.Vue.createTextVNode, lq = window.Vue.normalizeClass, uq = window.Vue.renderList, cq = window.Vue.Fragment, dq = window.Vue.createBlock, fq = window.Vue.pushScopeId, hq = window.Vue.popScopeId, rl = (e) => (fq("data-v-e9ff4c5b"), e = e(), hq(), e), pq = { class: "container" }, mq = /* @__PURE__ */ rl(() => /* @__PURE__ */ on("span", null, "Situation List", -1)), vq = /* @__PURE__ */ rl(() => /* @__PURE__ */ on("h2", null, "New Situation", -1)), wq = { class: "form" }, _q = { class: "fields" }, gq = {
  key: 0,
  class: "errorList"
}, $q = { class: "footer" }, yq = /* @__PURE__ */ rl(() => /* @__PURE__ */ on("span", null, "Clear", -1)), bq = /* @__PURE__ */ rl(() => /* @__PURE__ */ on("span", null, "Add Situation", -1)), Vq = { class: "alarm-column" }, Cq = { class: "header-alarms" }, Eq = /* @__PURE__ */ rl(() => /* @__PURE__ */ on("h3", null, "Add Unassociated Alarms", -1)), Sq = /* @__PURE__ */ Rh(" Total Alarms Added: "), kq = { class: "total" }, Tq = { class: "list" }, Iq = { class: "filters" }, Aq = {
  key: 0,
  class: "alarms"
}, xq = /* @__PURE__ */ Rh(" Error on creating new situation :( "), Lq = /* @__PURE__ */ Rh("dismiss"), No = window.Vue.ref, Oq = window.Vue.watch, Rq = /* @__PURE__ */ iq({
  __name: "AddSituation",
  setup(e) {
    const o = zo(), r = mr(), s = No(), a = No(""), u = No(), c = No(""), f = No([]), v = No(!1), p = No(), w = No(r.unassignedAlarms);
    w.value.length || r.getUnassignedAlarms(), Oq(
      () => r.unassignedAlarms,
      () => {
        w.value = r.unassignedAlarms;
      }
    );
    const g = () => {
      o.push({
        name: yt.situations
      });
    }, y = (k) => {
      v.value = !1, ze.includes(f.value, k) ? ze.remove(f.value, (I) => I === k) : f.value.push(k);
    }, b = () => {
      const k = "This field should not be empty";
      let I = !0;
      return s.value || (a.value = k, I = !1), u.value || (c.value = k, I = !1), f.value.length < 2 && (v.value = !0, I = !1), I;
    }, C = async () => {
      if (b()) {
        const k = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: s.value
        };
        await Yk(k) ? o.push({
          name: yt.situations
        }) : p.value = !0;
      }
    }, T = () => {
      s.value = "", u.value = "", f.value = [], w.value = r.unassignedAlarms;
    }, B = (k) => {
      w.value = k;
    };
    return (k, I) => (ws(), Ra("div", pq, [
      Xn(Ot(Ie), {
        primary: "",
        onClick: I[0] || (I[0] = () => g()),
        class: "back-btn"
      }, {
        default: vs(() => [
          Xn(Ot(oe), {
            icon: Ot(As),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          mq
        ]),
        _: 1
      }),
      vq,
      on("div", wq, [
        on("div", _q, [
          Xn(Ot(Za), {
            modelValue: s.value,
            "onUpdate:modelValue": I[1] || (I[1] = (R) => s.value = R),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          Xn(Ot(Za), {
            modelValue: u.value,
            "onUpdate:modelValue": I[2] || (I[2] = (R) => u.value = R),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          v.value ? (ws(), Ra("div", gq, " You must add at least 2 alarms. ")) : sq("", !0),
          on("div", $q, [
            Xn(Ot(Ie), {
              class: "btn",
              onClick: T
            }, {
              default: vs(() => [
                Xn(Ot(oe), {
                  icon: Ot(Rs),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                yq
              ]),
              _: 1
            }),
            Xn(Ot(Ie), {
              class: "btn-add",
              onClick: C
            }, {
              default: vs(() => [
                Xn(Ot(oe), {
                  icon: Ot(Ju),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                bq
              ]),
              _: 1
            })
          ])
        ]),
        on("div", Vq, [
          on("div", Cq, [
            Eq,
            on("div", null, [
              on("div", {
                class: lq(["totalAlarms", { errorList: v.value }])
              }, [
                Sq,
                on("span", kq, aq(Ot(f).length), 1)
              ], 2)
            ])
          ]),
          on("div", Tq, [
            on("div", Iq, [
              Xn(qs, {
                list: Ot(r).unassignedAlarms,
                onFilteredList: B,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            w.value.length ? (ws(), Ra("div", Aq, [
              (ws(!0), Ra(cq, null, uq(w.value, (R) => (ws(), Ra("div", {
                key: R.id,
                class: "alarm-card"
              }, [
                Xn(Lh, {
                  selected: Ot(ze.includes)(Ot(f), R.id),
                  alarm: R,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (ws(), dq(Hs, { key: 1 }))
          ])
        ])
      ]),
      Xn(Ot(nc), {
        modelValue: p.value,
        "onUpdate:modelValue": I[4] || (I[4] = (R) => p.value = R),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: vs(() => [
          Xn(Ot(Ie), {
            onClick: I[3] || (I[3] = (R) => p.value = !1),
            text: ""
          }, {
            default: vs(() => [
              Lq
            ]),
            _: 1
          })
        ]),
        default: vs(() => [
          xq
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), Nq = /* @__PURE__ */ Re(Rq, [["__scopeId", "data-v-e9ff4c5b"]]), Bq = window.Vue.defineComponent, Pq = window.Vue.createElementVNode, Dq = window.Vue.createTextVNode, Mq = window.Vue.unref, Fq = window.Vue.withCtx, Uq = window.Vue.createVNode, qq = window.Vue.Fragment, Hq = window.Vue.openBlock, Wq = window.Vue.createElementBlock, zq = window.Vue.pushScopeId, Gq = window.Vue.popScopeId, Yq = (e) => (zq("data-v-7c52e38b"), e = e(), Gq(), e), jq = /* @__PURE__ */ Yq(() => /* @__PURE__ */ Pq("div", { class: "main" }, "Something bad is happening...", -1)), Kq = /* @__PURE__ */ Dq(" Reload "), Zq = /* @__PURE__ */ Bq({
  __name: "ErrorPage",
  setup(e) {
    const o = zo(), r = () => {
      o.push({ name: yt.situations });
    };
    return (s, a) => (Hq(), Wq(qq, null, [
      jq,
      Uq(Mq(Ie), {
        primary: "",
        onClick: r
      }, {
        default: Fq(() => [
          Kq
        ]),
        _: 1
      })
    ], 64));
  }
}), Xq = /* @__PURE__ */ Re(Zq, [["__scopeId", "data-v-7c52e38b"]]), Jq = window.Vue.defineComponent, tn = window.Vue.unref, fr = window.Vue.createVNode, Do = window.Vue.createElementVNode, Na = window.Vue.withCtx, Ei = window.Vue.openBlock, Rg = window.Vue.createBlock, Qq = window.Vue.renderList, eH = window.Vue.Fragment, Ba = window.Vue.createElementBlock, tH = window.Vue.toDisplayString, Z0 = window.Vue.createTextVNode, nH = window.Vue.pushScopeId, rH = window.Vue.popScopeId, Nh = (e) => (nH("data-v-543c4501"), e = e(), rH(), e), oH = { class: "container" }, iH = { class: "nav-btns" }, sH = /* @__PURE__ */ Nh(() => /* @__PURE__ */ Do("span", null, "Situation List", -1)), aH = /* @__PURE__ */ Nh(() => /* @__PURE__ */ Do("h2", null, "List Unassociated Alarms", -1)), lH = { class: "content" }, uH = { class: "filters" }, cH = { class: "list" }, dH = { class: "action-btns" }, fH = /* @__PURE__ */ Nh(() => /* @__PURE__ */ Do("span", null, "Move", -1)), hH = { key: 1 }, pH = {
  key: 0,
  class: "alarms"
}, mH = /* @__PURE__ */ Z0("dismiss"), Bo = window.Vue.ref, vH = window.Vue.watch, wH = window.Vue.markRaw, _H = /* @__PURE__ */ Jq({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = wH({
      ArrowBack: As,
      ExitToApp: uh
    }), r = zo(), s = mr();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = Bo([]), u = Bo([]), c = Bo(!1), f = Bo(!1), v = Bo(""), p = Bo(!1), w = Bo(!1), g = Bo(!0);
    vH(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, g.value = !1;
      }
    );
    const y = (I) => {
      ze.includes(u.value, I) ? ze.remove(u.value, (R) => R === I) : u.value.push(I);
    }, b = () => {
      c.value ? u.value = a.value.map((I) => I.id) : u.value = [];
    }, C = async (I) => {
      await d1(I, u.value) ? s.getUnassignedAlarms() : (p.value = !0, w.value = !0, v.value = "Error on moving the alarms :("), f.value = !1;
    }, T = () => {
      r.push({
        name: yt.situations
      });
    }, B = () => {
      u.value.length ? f.value = !0 : (p.value = !0, w.value = !1, v.value = "You need to choose at least one alarm!");
    }, k = (I) => {
      a.value = I;
    };
    return (I, R) => (Ei(), Ba("div", oH, [
      Do("div", iH, [
        fr(tn(Ie), {
          primary: "",
          onClick: R[0] || (R[0] = () => T())
        }, {
          default: Na(() => [
            fr(tn(oe), {
              icon: tn(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            sH
          ]),
          _: 1
        }),
        fr(t0)
      ]),
      aH,
      Do("div", lH, [
        Do("div", uH, [
          fr(qs, {
            list: tn(s).unassignedAlarms,
            onFilteredList: k,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        Do("div", cH, [
          Do("div", dH, [
            fr(tn(Ai), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                R[1] || (R[1] = (D) => c.value = D),
                b
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            fr(tn(Ie), { onClick: B }, {
              default: Na(() => [
                fr(tn(oe), {
                  icon: tn(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                fH
              ]),
              _: 1
            })
          ]),
          g.value ? (Ei(), Rg(tn(ks), {
            key: 0,
            class: "spinner"
          })) : (Ei(), Ba("div", hH, [
            tn(a).length ? (Ei(), Ba("div", pH, [
              (Ei(!0), Ba(eH, null, Qq(tn(a), (D) => (Ei(), Ba("div", {
                key: D.id,
                class: "card"
              }, [
                fr(Lh, {
                  selected: tn(ze.includes)(tn(u), D.id),
                  alarm: D,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Ei(), Rg(Hs, { key: 1 }))
          ]))
        ])
      ]),
      fr(D0, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: C,
        onDrawerClosed: R[2] || (R[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      fr(tn(nc), {
        modelValue: p.value,
        "onUpdate:modelValue": R[4] || (R[4] = (D) => p.value = D),
        right: "",
        error: w.value,
        timeout: 6e3
      }, {
        button: Na(() => [
          fr(tn(Ie), {
            onClick: R[3] || (R[3] = (D) => p.value = !1),
            text: ""
          }, {
            default: Na(() => [
              mH
            ]),
            _: 1
          })
        ]),
        default: Na(() => [
          Z0(tH(v.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
}), gH = /* @__PURE__ */ Re(_H, [["__scopeId", "data-v-543c4501"]]), $H = window.Vue.defineComponent, jf = window.Vue.unref, yH = window.Vue.createVNode, bH = window.Vue.createElementVNode, VH = window.Vue.withCtx, CH = window.Vue.openBlock, EH = window.Vue.createBlock, SH = window.Vue.pushScopeId, kH = window.Vue.popScopeId, TH = (e) => (SH("data-v-b6e7f46c"), e = e(), kH(), e), IH = /* @__PURE__ */ TH(() => /* @__PURE__ */ bH("span", null, "Situation List", -1)), AH = window.Vue.markRaw, xH = /* @__PURE__ */ $H({
  __name: "SituationListBtn",
  setup(e) {
    const o = zo(), r = AH({
      ArrowBack: As
    }), s = () => {
      o.push({
        name: yt.situations
      });
    };
    return (a, u) => (CH(), EH(jf(Ie), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: VH(() => [
        yH(jf(oe), {
          icon: jf(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        IH
      ]),
      _: 1
    }));
  }
}), LH = /* @__PURE__ */ Re(xH, [["__scopeId", "data-v-b6e7f46c"]]);
var OH = Object.defineProperty, RH = Object.defineProperties, NH = Object.getOwnPropertyDescriptors, Ng = Object.getOwnPropertySymbols, BH = Object.prototype.hasOwnProperty, PH = Object.prototype.propertyIsEnumerable, Bg = (e, o, r) => o in e ? OH(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Cs = (e, o) => {
  for (var r in o || (o = {}))
    BH.call(o, r) && Bg(e, r, o[r]);
  if (Ng)
    for (var r of Ng(o))
      PH.call(o, r) && Bg(e, r, o[r]);
  return e;
}, DH = (e, o) => RH(e, NH(o));
const MH = window.Vue.defineComponent, Pg = window.Vue.toRef, FH = window.Vue.computed, UH = window.Vue.ref, Dg = window.Vue.resolveComponent, Mg = window.Vue.openBlock, Fg = window.Vue.createElementBlock, Ug = window.Vue.mergeProps, qg = window.Vue.createVNode, qH = window.Vue.normalizeClass, gu = window.Vue.withCtx, Hg = window.Vue.renderSlot, HH = window.Vue.createElementVNode, WH = window.Vue.toHandlers, zH = window.Vue.toDisplayString, GH = window.Vue.createCommentVNode, YH = Cs(Cs({
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
}, Wu), Ms), jH = {
  "update:modelValue": (e) => !0
};
var KH = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ZH = MH({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: jH,
  props: YH,
  setup(e, o) {
    Fs(e), zu(e);
    const r = Pg(e, "id"), s = FH(() => r.value ? r.value : Oe("feather-input-label")), a = UH(), { validate: u } = Ps(s, a, e.label, e.schema, Pg(e, "error"));
    return Cs({
      inputId: s,
      internalValue: a,
      validate: u
    }, Ds(o.attrs));
  },
  data() {
    return {
      focused: !1
    };
  },
  computed: {
    descriptionId() {
      return Oe("feather-input-description");
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
      const e = Cs({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), DH(Cs(Cs({}, e), this.listeners), {
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
    InputSubText: Bs,
    InputWrapper: Hu
  }
}), XH = ["maxlength"], JH = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function QH(e, o, r, s, a, u) {
  const c = Dg("InputWrapper"), f = Dg("InputSubText");
  return Mg(), Fg("div", Ug(e.inherittedAttrs, { class: "feather-input-container" }), [
    qg(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: qH(["feather-input-content", e.contentCls])
    }, {
      pre: gu(() => [
        Hg(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: gu(() => [
        Hg(e.$slots, "post", {}, void 0, !0)
      ]),
      default: gu(() => [
        HH("input", Ug(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, WH(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, XH)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    qg(f, { id: e.descriptionId }, {
      right: gu(() => [
        e.maxlength ? (Mg(), Fg("div", JH, zH(e.charCount), 1)) : GH("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Er = /* @__PURE__ */ KH(ZH, [["render", QH], ["__scopeId", "data-v-bf37b0d6"]]);
const eW = window.Vue.openBlock, tW = window.Vue.createElementBlock, Bh = window.Vue.createElementVNode;
var nW = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const rW = {}, oW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, iW = /* @__PURE__ */ Bh("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), sW = /* @__PURE__ */ Bh("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), aW = /* @__PURE__ */ Bh("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), lW = [
  iW,
  sW,
  aW
];
function uW(e, o) {
  return eW(), tW("svg", oW, lW);
}
var cW = /* @__PURE__ */ nW(rW, [["render", uW]]);
const dW = window.Vue.openBlock, fW = window.Vue.createElementBlock, X0 = window.Vue.createElementVNode;
var hW = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const pW = {}, mW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, vW = /* @__PURE__ */ X0("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), wW = /* @__PURE__ */ X0("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), _W = [
  vW,
  wW
];
function gW(e, o) {
  return dW(), fW("svg", mW, _W);
}
var $W = /* @__PURE__ */ hW(pW, [["render", gW]]);
const J0 = [
  {
    name: "Anthropic (Claude)",
    baseUrl: "https://api.anthropic.com/v1/",
    matches: ["api.anthropic.com"],
    keyHint: "sk-ant-… key",
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
    keyHint: "sk-… key",
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
    keyHint: "sk-or-… key",
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
], Q0 = (e) => {
  const o = (e || "").toLowerCase();
  if (o)
    return J0.find((r) => r.matches.some((s) => o.includes(s)));
}, yW = () => J0, bW = (e) => {
  var o;
  return ((o = Q0(e)) == null ? void 0 : o.models) ?? [];
}, VW = window.Vue.defineComponent, de = window.Vue.createVNode, L = window.Vue.createElementVNode, ne = window.Vue.createTextVNode, W = window.Vue.unref, lt = window.Vue.withCtx, He = window.Vue.openBlock, Xe = window.Vue.createElementBlock, Et = window.Vue.createCommentVNode, _s = window.Vue.Fragment, tt = window.Vue.toDisplayString, Kf = window.Vue.createBlock, Wg = window.Vue.renderList, CW = window.Vue.normalizeClass, EW = window.Vue.pushScopeId, SW = window.Vue.popScopeId, ge = (e) => (EW("data-v-01e00fb5"), e = e(), SW(), e), kW = { class: "container" }, TW = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("h3", { "data-test": "page-title" }, "ALEC Configuration", -1)), IW = /* @__PURE__ */ ne("Correlation Engine"), AW = /* @__PURE__ */ ne("LLM Root Cause Analysis"), xW = /* @__PURE__ */ ne("LLM Setup"), LW = { class: "section" }, OW = { class: "title-row" }, RW = { class: "title" }, NW = /* @__PURE__ */ ne(" Choose the correlation engine that ALEC will use (see "), BW = ["href"], PW = /* @__PURE__ */ ne(" for more information): "), DW = ["aria-expanded"], MW = {
  key: 0,
  class: "help-popover",
  "data-test": "engine-help-popover"
}, FW = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("ul", null, [
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ L("strong", null, "Clustering"),
    /* @__PURE__ */ ne(" — the default engine. It runs the DBSCAN algorithm over recent alarms and groups them into a situation when they are close in both time and network topology. Tune how aggressively it groups with the Correlation variables below. ")
  ]),
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ L("strong", null, "Hellinger distance"),
    /* @__PURE__ */ ne(" — an optional, more refined way for the Clustering engine to measure how far apart two alarms are. Rather than a plain time/topology distance, it compares the statistical distribution of each alarm's surroundings, which helps separate unrelated alarms that merely happen to occur close together. Enable it with the checkbox; it adds two extra tuning variables (Hellinger w and bias). Only the Clustering engine supports it. ")
  ]),
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ L("strong", null, "LLM Based (Experimental)"),
    /* @__PURE__ */ ne(" — instead of DBSCAN, a large language model groups active alarms into situations using the topology and alarm data. Requires a configured LLM (LLM Setup tab) and replaces the Correlation variables with a re-clustering frequency and an editable prompt. Separate from "),
    /* @__PURE__ */ L("em", null, "LLM Root Cause Analysis"),
    /* @__PURE__ */ ne(" on the other tab, which explains situations an engine already built. Only one engine runs at a time. ")
  ])
], -1)), UW = [
  FW
], qW = /* @__PURE__ */ ne("Clustering"), HW = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("div", { class: "hellinger" }, [
  /* @__PURE__ */ L("strong", null, "Hellinger distance")
], -1)), WW = /* @__PURE__ */ ne(" LLM Based (Experimental) "), zW = {
  key: 0,
  class: "section",
  "data-test": "llm-cluster-section"
}, GW = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("div", { class: "title" }, "LLM-based clustering", -1)), YW = {
  key: 0,
  class: "caption",
  "data-test": "llm-cluster-no-setup"
}, jW = /* @__PURE__ */ ne(" No valid LLM is configured. Set the endpoint, model and API key on the "), KW = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("strong", null, "LLM Setup", -1)), ZW = /* @__PURE__ */ ne(" tab first, then choose LLM Based here. "), XW = [
  jW,
  KW,
  ZW
], JW = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("div", { class: "llm-help" }, " Instead of DBSCAN, ALEC asks the configured LLM to group active alarms into situations using the network topology and the alarms themselves. Only the topology graph and alarms are sent. Existing situations are not modified. ", -1)), QW = { class: "llm-field-block" }, ez = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("div", { class: "llm-prompt-help" }, " Each cycle sends the current alarms + topology to the LLM. More frequent means fresher situations but more token usage (counts against your LLM Setup budget). ", -1)), tz = {
  class: "llm-prompt-block",
  "data-test": "llm-cluster-prompt-block"
}, nz = { class: "llm-prompt-header" }, rz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("span", { class: "llm-prompt-label" }, "Clustering prompt", -1)), oz = ["disabled"], iz = /* @__PURE__ */ ne(" Reset to default "), sz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("div", { class: "llm-prompt-help" }, " Instructions sent to the model for clustering. Customize it to add site-specific context, or clear it to fall back to the default. ", -1)), az = {
  key: 1,
  class: "section",
  "data-test": "variables-section"
}, lz = { class: "title-row" }, uz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("div", { class: "title" }, "Correlation variables", -1)), cz = ["aria-expanded"], dz = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, fz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("strong", null, "Alpha (α)", -1)), hz = /* @__PURE__ */ ne(" — overall scaling of inter-alarm distance. Higher α → more conservative clustering (fewer clusters). "), pz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("strong", null, "Beta (β)", -1)), mz = /* @__PURE__ */ ne(" — weight between time (β) and topology (1−β), in "), vz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("code", null, "[0, 1]", -1)), wz = /* @__PURE__ */ ne(". Higher β emphasises time proximity; lower β emphasises topology. "), _z = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("strong", null, "Epsilon (ε)", -1)), gz = /* @__PURE__ */ ne(" — DBScan radius. Higher ε clusters more aggressively; lower ε produces smaller, tighter clusters. "), $z = { "data-test": "help-hellinger-w" }, yz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("strong", null, "Hellinger w", -1)), bz = /* @__PURE__ */ ne(" — variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), Vz = { "data-test": "help-hellinger-bias" }, Cz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("strong", null, "Hellinger bias", -1)), Ez = /* @__PURE__ */ ne(" — additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), Sz = { class: "variables" }, kz = {
  class: "section",
  "data-test": "llm-section"
}, Tz = { class: "title-row" }, Iz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("div", { class: "title" }, "LLM Root Cause Analysis", -1)), Az = ["aria-expanded"], xz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("div", { class: "llm-help" }, [
  /* @__PURE__ */ ne(" ALEC can automatically or manually request root cause analysis and a suggested resolution strategy from a large language model (LLM), shown on each situation's "),
  /* @__PURE__ */ L("em", null, "AI Suggestions"),
  /* @__PURE__ */ ne(" tab. It uses the LLM configured on the "),
  /* @__PURE__ */ L("em", null, "LLM Setup"),
  /* @__PURE__ */ ne(" tab. ")
], -1)), Lz = {
  key: 0,
  class: "help-popover",
  "data-test": "llm-key-help-popover"
}, Oz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("p", { class: "help-intro" }, [
  /* @__PURE__ */ ne(" When enabled, ALEC sends each new situation's alarms to the configured LLM and shows up to three probable root causes and resolutions on the situation's "),
  /* @__PURE__ */ L("em", null, "AI Suggestions"),
  /* @__PURE__ */ ne(" tab. ")
], -1)), Rz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("ul", null, [
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ L("em", null, "Automatically AI Evaluate new situations"),
    /* @__PURE__ */ ne(": when on, every new situation is analyzed as it is created; when off, analysis runs only when you click "),
    /* @__PURE__ */ L("em", null, "Re-evaluate"),
    /* @__PURE__ */ ne(" on a situation's AI Suggestions tab. ")
  ]),
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ ne(" Customize the "),
    /* @__PURE__ */ L("em", null, "System prompt"),
    /* @__PURE__ */ ne(" below to add site-specific context (topology, naming conventions, escalation policy). ")
  ]),
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ ne(" Requires a configured LLM — set the endpoint, model and API key on the "),
    /* @__PURE__ */ L("em", null, "LLM Setup"),
    /* @__PURE__ */ ne(" tab first. ")
  ])
], -1)), Nz = [
  Oz,
  Rz
], Bz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("strong", null, "LLM Enabled Root Cause Analysis", -1)), Pz = /* @__PURE__ */ ne(" Automatically AI Evaluate new situations "), Dz = {
  key: 1,
  class: "caption",
  "data-test": "llm-no-key-hint"
}, Mz = /* @__PURE__ */ ne(" No valid LLM is configured. Go to the "), Fz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("strong", null, "LLM Setup", -1)), Uz = /* @__PURE__ */ ne(" tab and set an endpoint, model and API key first. "), qz = [
  Mz,
  Fz,
  Uz
], Hz = {
  class: "llm-prompt-block",
  "data-test": "llm-prompt-block"
}, Wz = { class: "llm-prompt-header" }, zz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("span", { class: "llm-prompt-label" }, "System prompt", -1)), Gz = ["disabled"], Yz = /* @__PURE__ */ ne(" Reset to default "), jz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("div", { class: "llm-prompt-help" }, " Instructions sent to the model for every analysis. Customize it to add site-specific context (your topology, naming conventions, escalation policy, vendors in use). Leave it as the default, or clear it to fall back to the default. ", -1)), Kz = {
  class: "section",
  "data-test": "llm-setup-section"
}, Zz = { class: "title-row" }, Xz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("div", { class: "title" }, "LLM Setup", -1)), Jz = ["aria-expanded"], Qz = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("div", { class: "llm-help" }, " Configure the LLM connection shared by ALEC's LLM features (root cause analysis and, later, LLM-based clustering). ALEC works with any OpenAI-compatible, API-enabled LLM — commercial or locally hosted — and does not endorse any particular model. The endpoint, model and API key are stored on the OpenNMS server and apply to all users of this plugin. ", -1)), eG = {
  key: 0,
  class: "help-popover",
  "data-test": "llm-setup-help-popover"
}, tG = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("ul", null, [
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ ne(" Point ALEC at any service exposing an OpenAI-compatible "),
    /* @__PURE__ */ L("code", null, "/chat/completions"),
    /* @__PURE__ */ ne(" API — a hosted provider (OpenAI, Anthropic, OpenRouter, …) or a local server (LM Studio, Ollama, …). The Endpoint and Model "),
    /* @__PURE__ */ L("em", null, "▾"),
    /* @__PURE__ */ ne(" menus list common choices, but you can type any value. ")
  ]),
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ ne(" The model must support "),
    /* @__PURE__ */ L("em", null, "tool/function calling"),
    /* @__PURE__ */ ne(". Click "),
    /* @__PURE__ */ L("em", null, "Validate key"),
    /* @__PURE__ */ ne(" to confirm the endpoint, model and key work before saving. ")
  ]),
  /* @__PURE__ */ L("li", null, " The API key is stored on the OpenNMS server and never shown again. "),
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ ne(" Set an optional "),
    /* @__PURE__ */ L("em", null, "Daily"),
    /* @__PURE__ */ ne(" or "),
    /* @__PURE__ */ L("em", null, "Monthly token limit"),
    /* @__PURE__ */ ne(" to cap spend — when usage reaches a limit ALEC stops sending LLM requests until the period resets. 0 means no limit. ")
  ])
], -1)), nG = [
  tG
], rG = { class: "llm-field-block" }, oG = { class: "llm-field-header" }, iG = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("span", { class: "llm-field-label" }, "Endpoint (OpenAI-compatible base URL)", -1)), sG = { class: "llm-field-actions" }, aG = ["disabled"], lG = /* @__PURE__ */ ne(" Reset to default "), uG = ["disabled"], cG = /* @__PURE__ */ ne(" Set as default "), dG = { class: "llm-combo" }, fG = ["aria-expanded"], hG = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-base-url-menu"
}, pG = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("li", { class: "llm-combo-hint" }, "Common providers — or type your own", -1)), mG = ["onClick"], vG = { class: "llm-combo-item-main" }, wG = { class: "llm-combo-item-sub" }, _G = { class: "llm-field-block" }, gG = { class: "llm-field-header" }, $G = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("span", { class: "llm-field-label" }, "Model", -1)), yG = { class: "llm-field-actions" }, bG = ["disabled"], VG = /* @__PURE__ */ ne(" Reset to default "), CG = ["disabled"], EG = /* @__PURE__ */ ne(" Set as default "), SG = { class: "llm-combo" }, kG = ["aria-expanded"], TG = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-model-menu"
}, IG = { class: "llm-combo-hint" }, AG = ["onClick"], xG = { class: "llm-combo-item-main" }, LG = {
  key: 1,
  class: "llm-combo-hint"
}, OG = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("div", {
  class: "llm-key-match-hint",
  "data-test": "llm-key-match-hint"
}, [
  /* @__PURE__ */ ne(" Your API key must come from the same provider as the Endpoint above — an Anthropic key ("),
  /* @__PURE__ */ L("code", null, "sk-ant-…"),
  /* @__PURE__ */ ne(") for "),
  /* @__PURE__ */ L("code", null, "api.anthropic.com"),
  /* @__PURE__ */ ne(" (the default), an OpenRouter key ("),
  /* @__PURE__ */ L("code", null, "sk-or-…"),
  /* @__PURE__ */ ne(") for "),
  /* @__PURE__ */ L("code", null, "openrouter.ai"),
  /* @__PURE__ */ ne(", or an OpenAI key for "),
  /* @__PURE__ */ L("code", null, "api.openai.com"),
  /* @__PURE__ */ ne(". ")
], -1)), RG = { class: "llm-key-row" }, NG = /* @__PURE__ */ ne(" Clear Key "), BG = { class: "llm-validate-row" }, PG = {
  key: 0,
  class: "caption",
  "data-test": "llm-validate-hint"
}, DG = {
  key: 1,
  class: "llm-key-saved",
  "data-test": "llm-key-saved"
}, MG = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("span", null, " API key on file. The stored key is never sent back to the browser — leave the field blank to keep it, or paste a new one to replace it. ", -1)), FG = {
  key: 2,
  class: "caption",
  "data-test": "llm-cleared-hint"
}, UG = {
  class: "llm-field-block llm-limits",
  "data-test": "llm-token-limits"
}, qG = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("span", { class: "llm-field-label" }, "Token budget (0 = no limit)", -1)), HG = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("div", { class: "llm-prompt-help" }, " Caps total LLM tokens ALEC may consume. When a limit is reached, ALEC stops sending LLM requests until the day/month resets and warns on the main page. ", -1)), WG = { class: "variables" }, zG = {
  key: 3,
  class: "llm-usage",
  "data-test": "llm-usage"
}, GG = { class: "usage-summary" }, YG = { class: "usage-label" }, jG = ["title"], KG = {
  key: 0,
  class: "usage-details",
  "data-test": "llm-usage-details"
}, ZG = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("dt", null, "Input", -1)), XG = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("dt", null, "Output", -1)), JG = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("dt", null, "Cache read", -1)), QG = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("dt", null, "Cache create", -1)), eY = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("dt", null, "Calls", -1)), tY = { class: "muted" }, nY = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("dt", null, "Cache hit", -1)), rY = { class: "action-row" }, oY = /* @__PURE__ */ ne(" Close All Open Situations "), iY = /* @__PURE__ */ ne(" Re-Evaluate All Open Alarms "), sY = /* @__PURE__ */ ge(() => /* @__PURE__ */ L("span", null, "Save Changes", -1)), aY = /* @__PURE__ */ ne("dismiss"), nn = window.Vue.computed, lY = window.Vue.markRaw, uY = window.Vue.onMounted, cY = window.Vue.onUnmounted, Te = window.Vue.ref, dY = /* @__PURE__ */ VW({
  __name: "AccountSettings",
  setup(e) {
    var jt, lo, Yo, uo, Br, jo, Pr, Dr, Kt, Un, co, fo, Ni, Mr, ho, Fr, po, Bi, _r;
    const o = (se) => se >= 1e6 ? (se / 1e6).toFixed(1) + "M" : se >= 1e3 ? (se / 1e3).toFixed(1) + "K" : String(se), r = lY({
      MarkComplete: Ru,
      Help: cW,
      Restore: $W,
      ExpandMore: el
    }), s = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, a = Uo(), u = Te(((jt = a.engineInfo) == null ? void 0 : jt.engineName) || kt.ENGINE_DBSCAN), c = Te(
      a.engineInfo ? a.engineInfo.distanceMeasureName === kt.HELLINGER_OPTION : !0
    ), f = Te(((lo = a.engineInfo) == null ? void 0 : lo.alpha) ?? s.alpha), v = Te(((Yo = a.engineInfo) == null ? void 0 : Yo.beta) ?? s.beta), p = Te(((uo = a.engineInfo) == null ? void 0 : uo.epsilon) ?? s.epsilon), w = Te(
      ((Br = a.engineInfo) == null ? void 0 : Br.hellingerW) ?? s.hellingerW
    ), g = Te(
      ((jo = a.engineInfo) == null ? void 0 : jo.hellingerBias) ?? s.hellingerBias
    ), y = nn(() => u.value === kt.ENGINE_DBSCAN), b = nn(() => y.value && c.value), C = nn(() => u.value === kt.ENGINE_LLM), T = nn(
      () => {
        var se, K, J;
        return !!((se = a.llmConfig) != null && se.baseUrl) && !!((K = a.llmConfig) != null && K.model) && !!((J = a.llmConfig) != null && J.apiKeyPresent);
      }
    ), B = [
      { label: "Every minute", value: 6e4 },
      { label: "Every 5 minutes", value: 3e5 },
      { label: "Every 15 minutes", value: 9e5 },
      { label: "Every 30 minutes", value: 18e5 },
      { label: "Every hour", value: 36e5 }
    ], k = Te(
      B.find(
        (se) => {
          var K;
          return se.value === (((K = a.engineInfo) == null ? void 0 : K.clusterFrequencyMs) ?? 3e5);
        }
      ) ?? B[1]
    ), I = Te(((Pr = a.llmConfig) == null ? void 0 : Pr.defaultClusterPrompt) ?? ""), R = Te(
      ((Dr = a.engineInfo) == null ? void 0 : Dr.clusterPrompt) || I.value
    ), D = nn(
      () => !!I.value && R.value.trim() !== I.value.trim()
    ), q = () => {
      R.value = I.value;
    }, F = Te(a.llmConfig !== null), O = Te(((Kt = a.llmConfig) == null ? void 0 : Kt.enabled) ?? !1), j = Te(((Un = a.llmConfig) == null ? void 0 : Un.autoEvaluate) ?? !0), Y = Te(((co = a.llmConfig) == null ? void 0 : co.baseUrl) ?? ""), X = Te(((fo = a.llmConfig) == null ? void 0 : fo.model) ?? ""), re = Te(((Ni = a.llmConfig) == null ? void 0 : Ni.defaultBaseUrl) ?? ""), he = Te(((Mr = a.llmConfig) == null ? void 0 : Mr.defaultModel) ?? ""), Ce = Te(((ho = a.llmConfig) == null ? void 0 : ho.dailyTokenLimit) ?? 0), we = Te(((Fr = a.llmConfig) == null ? void 0 : Fr.monthlyTokenLimit) ?? 0), $e = Te(((po = a.llmConfig) == null ? void 0 : po.systemPrompt) ?? ""), Je = Te(((Bi = a.llmConfig) == null ? void 0 : Bi.defaultSystemPrompt) ?? ""), zt = nn(
      () => Je.value.length > 0 && $e.value.trim() !== Je.value.trim()
    ), Qe = () => {
      $e.value = Je.value;
    }, Vt = nn(
      () => re.value.trim().length > 0 && Y.value.trim() !== re.value.trim()
    ), Go = nn(
      () => he.value.trim().length > 0 && X.value.trim() !== he.value.trim()
    ), A = nn(
      () => Y.value.trim().length > 0 && Y.value.trim() !== re.value.trim()
    ), te = nn(
      () => X.value.trim().length > 0 && X.value.trim() !== he.value.trim()
    ), ue = () => {
      Y.value = re.value;
    }, Ke = () => {
      X.value = he.value;
    }, Fe = () => {
      re.value = Y.value.trim();
    }, Pe = () => {
      he.value = X.value.trim();
    }, wt = yW(), sn = Te(!1), an = Te(!1), nr = nn(() => bW(Y.value)), Ge = nn(() => Q0(Y.value)), Or = (se) => {
      Y.value = se, sn.value = !1;
    }, Ue = (se) => {
      X.value = se, an.value = !1;
    }, oo = (se) => {
      const K = se.target;
      (!K || !K.closest(".llm-combo")) && (sn.value = !1, an.value = !1);
    }, pe = Te(""), ft = Te(((_r = a.llmConfig) == null ? void 0 : _r.apiKeyPresent) ?? !1), Gt = Te(!1), nt = Te(!1), Dn = Te(null), io = nn(
      () => pe.value.trim().length === 0 && (!ft.value || Gt.value)
    ), vr = async () => {
      Dn.value = null, nt.value = !0;
      try {
        const se = {
          enabled: O.value,
          autoEvaluate: j.value,
          baseUrl: Y.value.trim(),
          model: X.value.trim()
        }, K = pe.value.trim();
        K.length > 0 && (se.apiKey = K), Dn.value = await Hk(se);
      } finally {
        nt.value = !1;
      }
    }, Dt = nn(
      () => (!ft.value || Gt.value) && pe.value.trim().length === 0
    ), It = nn(
      () => Dt.value || Y.value.trim().length === 0 || X.value.trim().length === 0
    ), Mn = () => {
      pe.value = "", Gt.value = !0, ft.value = !1, O.value = !1;
    }, ln = Te(!1), un = Te(!1), wr = Te(!1), cn = Te(!1), Yt = Te(!1), yn = Te(!1), rr = Te(""), bn = Te(!1);
    uY(async () => {
      if (document.addEventListener("mousedown", oo), a.llmConfig === null) {
        const se = await a.getLLMConfig();
        se && (F.value = !0, O.value = se.enabled, j.value = se.autoEvaluate, Y.value = se.baseUrl || "", X.value = se.model || "", re.value = se.defaultBaseUrl || "", he.value = se.defaultModel || "", Ce.value = se.dailyTokenLimit ?? 0, we.value = se.monthlyTokenLimit ?? 0, Je.value = se.defaultSystemPrompt || "", $e.value = se.systemPrompt || se.defaultSystemPrompt || "", I.value = se.defaultClusterPrompt || "", R.value || (R.value = I.value), ft.value = se.apiKeyPresent);
      }
      await a.getLLMUsage(30);
    }), cY(() => {
      document.removeEventListener("mousedown", oo);
    });
    const so = () => {
      f.value = s.alpha, v.value = s.beta, p.value = s.epsilon, w.value = s.hellingerW, g.value = s.hellingerBias;
    }, Vn = (se, K) => {
      rr.value = se, yn.value = K, Yt.value = !0;
    }, ao = () => {
      if (Gt.value)
        return {
          enabled: !1,
          autoEvaluate: j.value,
          baseUrl: Y.value.trim(),
          model: X.value.trim(),
          defaultBaseUrl: re.value.trim(),
          defaultModel: he.value.trim(),
          systemPrompt: $e.value,
          dailyTokenLimit: Math.max(0, Number(Ce.value) || 0),
          monthlyTokenLimit: Math.max(0, Number(we.value) || 0),
          clearApiKey: !0
        };
      const se = pe.value.trim(), K = {
        enabled: O.value,
        autoEvaluate: j.value,
        baseUrl: Y.value.trim(),
        model: X.value.trim(),
        defaultBaseUrl: re.value.trim(),
        defaultModel: he.value.trim(),
        systemPrompt: $e.value,
        dailyTokenLimit: Math.max(0, Number(Ce.value) || 0),
        monthlyTokenLimit: Math.max(0, Number(we.value) || 0)
      };
      return se.length > 0 && (K.apiKey = se), K;
    }, Rr = async () => {
      var mo, vo, Ko, Zo, Pi, Di, Mi, qr, Cn, gr, qn, Fi;
      if (C.value && !T.value) {
        Vn(
          "LLM-based clustering needs a configured LLM. Set the endpoint, model and API key on the LLM Setup tab first.",
          !0
        );
        return;
      }
      const se = O.value && !Gt.value, K = /\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])/i.test(
        Y.value
      );
      if (se && !K && !window.confirm(
        `LLM Root Cause Analysis is enabled.

ALEC will send each new situation to the configured LLM endpoint (${Y.value.trim()}, model ${X.value.trim()}). This calls a third-party provider with your API key and may incur usage charges billed by that provider. You are responsible for any costs on the associated account.

Continue and save?`
      ))
        return;
      const J = {
        alpha: Number(f.value),
        beta: Number(v.value),
        epsilon: Number(p.value)
      };
      c.value && (J.hellingerW = Number(w.value), J.hellingerBias = Number(g.value)), C.value && (J.clusterFrequencyMs = Number(
        ((mo = k.value) == null ? void 0 : mo.value) ?? 3e5
      ), J.clusterPrompt = R.value);
      const Ae = await a.setEngineInfo(
        u.value,
        c.value,
        J
      ), Ur = F.value ? await a.setLLMConfig(ao()) : !0;
      F.value && Ur && (pe.value = "", Gt.value = !1, ft.value = ((vo = a.llmConfig) == null ? void 0 : vo.apiKeyPresent) ?? !1, O.value = ((Ko = a.llmConfig) == null ? void 0 : Ko.enabled) ?? !1, j.value = ((Zo = a.llmConfig) == null ? void 0 : Zo.autoEvaluate) ?? !0, Y.value = ((Pi = a.llmConfig) == null ? void 0 : Pi.baseUrl) ?? "", X.value = ((Di = a.llmConfig) == null ? void 0 : Di.model) ?? "", re.value = ((Mi = a.llmConfig) == null ? void 0 : Mi.defaultBaseUrl) ?? "", he.value = ((qr = a.llmConfig) == null ? void 0 : qr.defaultModel) ?? "", Ce.value = ((Cn = a.llmConfig) == null ? void 0 : Cn.dailyTokenLimit) ?? 0, we.value = ((gr = a.llmConfig) == null ? void 0 : gr.monthlyTokenLimit) ?? 0, (qn = a.llmConfig) != null && qn.defaultSystemPrompt && (Je.value = a.llmConfig.defaultSystemPrompt), $e.value = ((Fi = a.llmConfig) == null ? void 0 : Fi.systemPrompt) ?? $e.value, a.getLLMUsage(30)), Ae && Ur ? (a.getEngineInfo(), Vn("The settings were saved!", !1)) : Vn(
        Ae && !Ur ? "Engine settings saved, but the LLM configuration was rejected — enabling the integration requires an endpoint URL, a model and an API key." : "Error on saving the settings",
        !0
      );
    }, Nr = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const se = await jk();
      Vn(
        se ? "All open situations were closed." : "Failed to close situations.",
        !se
      );
    }, Fn = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const se = await Kk();
      Vn(
        se ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !se
      );
    };
    return (se, K) => (He(), Xe(_s, null, [
      de(LH),
      L("div", kW, [
        TW,
        de(W(p0), { "data-test": "config-tabs" }, {
          tabs: lt(() => [
            de(W(Ts), { "data-test": "tab-engine" }, {
              default: lt(() => [
                IW
              ]),
              _: 1
            }),
            de(W(Ts), { "data-test": "tab-llm" }, {
              default: lt(() => [
                AW
              ]),
              _: 1
            }),
            de(W(Ts), { "data-test": "tab-llm-setup" }, {
              default: lt(() => [
                xW
              ]),
              _: 1
            })
          ]),
          default: lt(() => [
            de(W(Is), { class: "config-panel" }, {
              default: lt(() => [
                L("div", LW, [
                  L("div", OW, [
                    L("div", RW, [
                      NW,
                      L("a", {
                        target: "_blank",
                        href: W(kt).URL_DOCUMENTATION
                      }, "Correlation Engines documentation", 8, BW),
                      PW
                    ]),
                    L("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": un.value,
                      "aria-label": "About the correlation engines and Hellinger distance",
                      "data-test": "engine-help",
                      onClick: K[0] || (K[0] = (J) => un.value = !un.value)
                    }, [
                      de(W(oe), {
                        icon: W(r).Help
                      }, null, 8, ["icon"])
                    ], 8, DW)
                  ]),
                  un.value ? (He(), Xe("div", MW, UW)) : Et("", !0),
                  de(W(Z1), {
                    vertical: "",
                    modelValue: u.value,
                    "onUpdate:modelValue": K[2] || (K[2] = (J) => u.value = J),
                    label: "",
                    hideLabel: ""
                  }, {
                    default: lt(() => [
                      de(W(ah), {
                        class: "radio-item",
                        value: W(kt).ENGINE_DBSCAN
                      }, {
                        default: lt(() => [
                          qW
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      de(W(Ai), {
                        modelValue: c.value,
                        "onUpdate:modelValue": K[1] || (K[1] = (J) => c.value = J),
                        disabled: !W(y),
                        class: "checkbox"
                      }, {
                        default: lt(() => [
                          HW
                        ]),
                        _: 1
                      }, 8, ["modelValue", "disabled"]),
                      de(W(ah), {
                        class: "radio-item",
                        value: W(kt).ENGINE_LLM,
                        "data-test": "engine-llm"
                      }, {
                        default: lt(() => [
                          WW
                        ]),
                        _: 1
                      }, 8, ["value"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                W(C) ? (He(), Xe("div", zW, [
                  GW,
                  W(T) ? (He(), Xe(_s, { key: 1 }, [
                    JW,
                    L("div", QW, [
                      de(W(H0), {
                        label: "How often to re-cluster",
                        options: B,
                        modelValue: k.value,
                        "onUpdate:modelValue": K[3] || (K[3] = (J) => k.value = J),
                        "text-prop": "label",
                        class: "llm-frequency-select",
                        "data-test": "llm-cluster-frequency"
                      }, null, 8, ["modelValue"]),
                      ez
                    ]),
                    L("div", tz, [
                      L("div", nz, [
                        rz,
                        L("button", {
                          type: "button",
                          class: "llm-prompt-reset",
                          disabled: !W(D),
                          "data-test": "llm-cluster-prompt-reset",
                          onClick: q
                        }, [
                          de(W(oe), {
                            icon: W(r).Restore,
                            class: "reset-inline-icon"
                          }, null, 8, ["icon"]),
                          iz
                        ], 8, oz)
                      ]),
                      sz,
                      de(W(Za), {
                        modelValue: R.value,
                        "onUpdate:modelValue": K[4] || (K[4] = (J) => R.value = J),
                        label: "Clustering prompt",
                        hideLabel: "",
                        rows: "10",
                        "data-test": "llm-cluster-prompt",
                        class: "llm-prompt-textarea"
                      }, null, 8, ["modelValue"])
                    ])
                  ], 64)) : (He(), Xe("div", YW, XW))
                ])) : Et("", !0),
                W(y) ? (He(), Xe("div", az, [
                  L("div", lz, [
                    uz,
                    L("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": ln.value,
                      "aria-label": "Show help for correlation variables",
                      "data-test": "variables-help",
                      onClick: K[5] || (K[5] = (J) => ln.value = !ln.value)
                    }, [
                      de(W(oe), {
                        icon: W(r).Help
                      }, null, 8, ["icon"])
                    ], 8, cz),
                    L("button", {
                      type: "button",
                      class: "icon-btn reset-icon",
                      "aria-label": "Reset correlation variables to defaults",
                      "data-test": "variables-reset",
                      onClick: so
                    }, [
                      de(W(oe), {
                        icon: W(r).Restore
                      }, null, 8, ["icon"])
                    ])
                  ]),
                  ln.value ? (He(), Xe("div", dz, [
                    L("ul", null, [
                      L("li", null, [
                        fz,
                        hz,
                        L("em", null, "Default: " + tt(s.alpha), 1)
                      ]),
                      L("li", null, [
                        pz,
                        mz,
                        vz,
                        wz,
                        L("em", null, "Default: " + tt(s.beta), 1)
                      ]),
                      L("li", null, [
                        _z,
                        gz,
                        L("em", null, "Default: " + tt(s.epsilon), 1)
                      ]),
                      W(b) ? (He(), Xe(_s, { key: 0 }, [
                        L("li", $z, [
                          yz,
                          bz,
                          L("em", null, "Default: " + tt(s.hellingerW), 1)
                        ]),
                        L("li", Vz, [
                          Cz,
                          Ez,
                          L("em", null, "Default: " + tt(s.hellingerBias), 1)
                        ])
                      ], 64)) : Et("", !0)
                    ])
                  ])) : Et("", !0),
                  L("div", Sz, [
                    de(W(Er), {
                      modelValue: f.value,
                      "onUpdate:modelValue": K[6] || (K[6] = (J) => f.value = J),
                      type: "number",
                      label: "Alpha",
                      "data-test": "variable-alpha"
                    }, null, 8, ["modelValue"]),
                    de(W(Er), {
                      modelValue: v.value,
                      "onUpdate:modelValue": K[7] || (K[7] = (J) => v.value = J),
                      type: "number",
                      label: "Beta",
                      "data-test": "variable-beta"
                    }, null, 8, ["modelValue"]),
                    de(W(Er), {
                      modelValue: p.value,
                      "onUpdate:modelValue": K[8] || (K[8] = (J) => p.value = J),
                      type: "number",
                      label: "Epsilon",
                      "data-test": "variable-epsilon"
                    }, null, 8, ["modelValue"]),
                    W(b) ? (He(), Kf(W(Er), {
                      key: 0,
                      modelValue: w.value,
                      "onUpdate:modelValue": K[9] || (K[9] = (J) => w.value = J),
                      type: "number",
                      label: "Hellinger w",
                      "data-test": "variable-hellinger-w"
                    }, null, 8, ["modelValue"])) : Et("", !0),
                    W(b) ? (He(), Kf(W(Er), {
                      key: 1,
                      modelValue: g.value,
                      "onUpdate:modelValue": K[10] || (K[10] = (J) => g.value = J),
                      type: "number",
                      label: "Hellinger bias",
                      "data-test": "variable-hellinger-bias"
                    }, null, 8, ["modelValue"])) : Et("", !0)
                  ])
                ])) : Et("", !0)
              ]),
              _: 1
            }),
            de(W(Is), { class: "config-panel" }, {
              default: lt(() => [
                L("div", kz, [
                  L("div", Tz, [
                    Iz,
                    L("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": wr.value,
                      "aria-label": "How to get an API key",
                      "data-test": "llm-key-help",
                      onClick: K[11] || (K[11] = (J) => wr.value = !wr.value)
                    }, [
                      de(W(oe), {
                        icon: W(r).Help
                      }, null, 8, ["icon"])
                    ], 8, Az)
                  ]),
                  xz,
                  wr.value ? (He(), Xe("div", Lz, Nz)) : Et("", !0),
                  de(W(Ai), {
                    modelValue: O.value,
                    "onUpdate:modelValue": K[12] || (K[12] = (J) => O.value = J),
                    disabled: W(It) && !O.value,
                    class: "checkbox",
                    "data-test": "llm-enabled"
                  }, {
                    default: lt(() => [
                      Bz
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"]),
                  de(W(Ai), {
                    modelValue: j.value,
                    "onUpdate:modelValue": K[13] || (K[13] = (J) => j.value = J),
                    disabled: !O.value,
                    class: "checkbox sub-checkbox",
                    "data-test": "llm-auto-evaluate"
                  }, {
                    default: lt(() => [
                      Pz
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"]),
                  W(It) ? (He(), Xe("div", Dz, qz)) : Et("", !0),
                  L("div", Hz, [
                    L("div", Wz, [
                      zz,
                      L("button", {
                        type: "button",
                        class: "llm-prompt-reset",
                        disabled: !W(zt),
                        "data-test": "llm-prompt-reset",
                        onClick: Qe
                      }, [
                        de(W(oe), {
                          icon: W(r).Restore,
                          class: "reset-inline-icon"
                        }, null, 8, ["icon"]),
                        Yz
                      ], 8, Gz)
                    ]),
                    jz,
                    de(W(Za), {
                      modelValue: $e.value,
                      "onUpdate:modelValue": K[14] || (K[14] = (J) => $e.value = J),
                      label: "System prompt",
                      hideLabel: "",
                      rows: "12",
                      "data-test": "llm-system-prompt",
                      class: "llm-prompt-textarea"
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ]),
              _: 1
            }),
            de(W(Is), { class: "config-panel" }, {
              default: lt(() => {
                var J;
                return [
                  L("div", Kz, [
                    L("div", Zz, [
                      Xz,
                      L("button", {
                        type: "button",
                        class: "icon-btn help-icon",
                        "aria-expanded": cn.value,
                        "aria-label": "About the shared LLM connection",
                        "data-test": "llm-setup-help",
                        onClick: K[15] || (K[15] = (Ae) => cn.value = !cn.value)
                      }, [
                        de(W(oe), {
                          icon: W(r).Help
                        }, null, 8, ["icon"])
                      ], 8, Jz)
                    ]),
                    Qz,
                    cn.value ? (He(), Xe("div", eG, nG)) : Et("", !0),
                    L("div", rG, [
                      L("div", oG, [
                        iG,
                        L("div", sG, [
                          L("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !W(Vt),
                            "data-test": "llm-base-url-reset",
                            onClick: ue
                          }, [
                            de(W(oe), {
                              icon: W(r).Restore,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            lG
                          ], 8, aG),
                          L("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !W(A),
                            "data-test": "llm-base-url-set-default",
                            onClick: Fe
                          }, [
                            de(W(oe), {
                              icon: W(r).MarkComplete,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            cG
                          ], 8, uG)
                        ])
                      ]),
                      L("div", dG, [
                        de(W(Er), {
                          modelValue: Y.value,
                          "onUpdate:modelValue": K[16] || (K[16] = (Ae) => Y.value = Ae),
                          label: "Endpoint (OpenAI-compatible base URL)",
                          hideLabel: "",
                          "data-test": "llm-base-url",
                          class: "llm-combo-input"
                        }, null, 8, ["modelValue"]),
                        L("button", {
                          type: "button",
                          class: "llm-combo-toggle",
                          "aria-expanded": sn.value,
                          "aria-label": "Show endpoint suggestions",
                          "data-test": "llm-base-url-suggest",
                          onClick: K[17] || (K[17] = (Ae) => sn.value = !sn.value)
                        }, [
                          de(W(oe), {
                            icon: W(r).ExpandMore
                          }, null, 8, ["icon"])
                        ], 8, fG),
                        sn.value ? (He(), Xe("ul", hG, [
                          pG,
                          (He(!0), Xe(_s, null, Wg(W(wt), (Ae) => (He(), Xe("li", {
                            key: Ae.baseUrl,
                            class: "llm-combo-item",
                            onClick: (Ur) => Or(Ae.baseUrl)
                          }, [
                            L("span", vG, tt(Ae.name), 1),
                            L("span", wG, [
                              L("code", null, tt(Ae.baseUrl), 1),
                              ne(" · " + tt(Ae.keyHint), 1)
                            ])
                          ], 8, mG))), 128))
                        ])) : Et("", !0)
                      ])
                    ]),
                    L("div", _G, [
                      L("div", gG, [
                        $G,
                        L("div", yG, [
                          L("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !W(Go),
                            "data-test": "llm-model-reset",
                            onClick: Ke
                          }, [
                            de(W(oe), {
                              icon: W(r).Restore,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            VG
                          ], 8, bG),
                          L("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !W(te),
                            "data-test": "llm-model-set-default",
                            onClick: Pe
                          }, [
                            de(W(oe), {
                              icon: W(r).MarkComplete,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            EG
                          ], 8, CG)
                        ])
                      ]),
                      L("div", SG, [
                        de(W(Er), {
                          modelValue: X.value,
                          "onUpdate:modelValue": K[18] || (K[18] = (Ae) => X.value = Ae),
                          label: "Model",
                          hideLabel: "",
                          "data-test": "llm-model",
                          class: "llm-combo-input"
                        }, null, 8, ["modelValue"]),
                        L("button", {
                          type: "button",
                          class: "llm-combo-toggle",
                          "aria-expanded": an.value,
                          "aria-label": "Show model suggestions",
                          "data-test": "llm-model-suggest",
                          onClick: K[19] || (K[19] = (Ae) => an.value = !an.value)
                        }, [
                          de(W(oe), {
                            icon: W(r).ExpandMore
                          }, null, 8, ["icon"])
                        ], 8, kG),
                        an.value ? (He(), Xe("ul", TG, [
                          W(nr).length ? (He(), Xe(_s, { key: 0 }, [
                            L("li", IG, " Suggested for " + tt((J = W(Ge)) == null ? void 0 : J.name) + " — or type your own ", 1),
                            (He(!0), Xe(_s, null, Wg(W(nr), (Ae) => (He(), Xe("li", {
                              key: Ae.id,
                              class: "llm-combo-item",
                              onClick: (Ur) => Ue(Ae.id)
                            }, [
                              L("span", xG, [
                                L("code", null, tt(Ae.id), 1)
                              ])
                            ], 8, AG))), 128))
                          ], 64)) : (He(), Xe("li", LG, " No preset models for this endpoint — type your model id. For a local server (LM Studio, Ollama) copy it from the server's loaded-model list. "))
                        ])) : Et("", !0)
                      ])
                    ]),
                    OG,
                    L("div", RG, [
                      de(W(Er), {
                        modelValue: pe.value,
                        "onUpdate:modelValue": K[20] || (K[20] = (Ae) => pe.value = Ae),
                        type: "password",
                        autocomplete: "new-password",
                        label: ft.value && !Gt.value ? "API key — saved (paste a new key to replace)" : "API key",
                        "data-test": "llm-api-key",
                        class: "llm-key-input"
                      }, null, 8, ["modelValue", "label"]),
                      ft.value && !Gt.value ? (He(), Kf(W(Ie), {
                        key: 0,
                        secondary: "",
                        "data-test": "llm-clear-key",
                        onClick: Mn
                      }, {
                        default: lt(() => [
                          NG
                        ]),
                        _: 1
                      })) : Et("", !0)
                    ]),
                    L("div", BG, [
                      de(W(Ie), {
                        secondary: "",
                        disabled: nt.value || W(io),
                        "data-test": "llm-validate-btn",
                        onClick: vr
                      }, {
                        default: lt(() => [
                          ne(tt(nt.value ? "Validating…" : "Validate key"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      W(io) ? (He(), Xe("span", PG, " Enter an API key to validate. ")) : Dn.value ? (He(), Xe("span", {
                        key: 1,
                        class: CW(["llm-validate-result", Dn.value.ok ? "is-ok" : "is-error"]),
                        "data-test": "llm-validate-result"
                      }, [
                        de(W(oe), {
                          icon: Dn.value.ok ? W(r).MarkComplete : W(r).Help,
                          class: "result-icon"
                        }, null, 8, ["icon"]),
                        ne(" " + tt(Dn.value.message), 1)
                      ], 2)) : Et("", !0)
                    ]),
                    ft.value && !Gt.value ? (He(), Xe("div", DG, [
                      de(W(oe), {
                        icon: W(r).MarkComplete,
                        class: "saved-icon"
                      }, null, 8, ["icon"]),
                      MG
                    ])) : Et("", !0),
                    Gt.value ? (He(), Xe("div", FG, " Stored API key will be removed on save. ")) : Et("", !0),
                    L("div", UG, [
                      qG,
                      HG,
                      L("div", WG, [
                        de(W(Er), {
                          modelValue: Ce.value,
                          "onUpdate:modelValue": K[21] || (K[21] = (Ae) => Ce.value = Ae),
                          type: "number",
                          label: "Daily token limit",
                          "data-test": "llm-daily-limit"
                        }, null, 8, ["modelValue"]),
                        de(W(Er), {
                          modelValue: we.value,
                          "onUpdate:modelValue": K[22] || (K[22] = (Ae) => we.value = Ae),
                          type: "number",
                          label: "Monthly token limit",
                          "data-test": "llm-monthly-limit"
                        }, null, 8, ["modelValue"])
                      ])
                    ]),
                    W(a).llmUsage ? (He(), Xe("div", zG, [
                      L("div", GG, [
                        L("span", YG, "Last " + tt(W(a).llmUsage.daysWindow) + " days:", 1),
                        L("span", {
                          class: "usage-tokens",
                          title: `${W(a).llmUsage.totalTokens.toLocaleString()} tokens`,
                          "data-test": "llm-usage-tokens"
                        }, tt(o(W(a).llmUsage.totalTokens)) + " tokens ", 9, jG),
                        L("button", {
                          type: "button",
                          class: "usage-toggle",
                          onClick: K[23] || (K[23] = (Ae) => bn.value = !bn.value),
                          "data-test": "llm-usage-toggle"
                        }, tt(bn.value ? "hide details" : "show details"), 1)
                      ]),
                      bn.value ? (He(), Xe("dl", KG, [
                        L("div", null, [
                          ZG,
                          L("dd", null, tt(o(W(a).llmUsage.inputTokens)), 1)
                        ]),
                        L("div", null, [
                          XG,
                          L("dd", null, tt(o(W(a).llmUsage.outputTokens)), 1)
                        ]),
                        L("div", null, [
                          JG,
                          L("dd", null, tt(o(W(a).llmUsage.cacheReadInputTokens)), 1)
                        ]),
                        L("div", null, [
                          QG,
                          L("dd", null, tt(o(W(a).llmUsage.cacheCreationInputTokens)), 1)
                        ]),
                        L("div", null, [
                          eY,
                          L("dd", null, [
                            ne(tt(W(a).llmUsage.calls) + " ", 1),
                            L("span", tY, "(" + tt(W(a).llmUsage.successfulCalls) + " ok / " + tt(W(a).llmUsage.failedCalls) + " failed)", 1)
                          ])
                        ]),
                        L("div", null, [
                          nY,
                          L("dd", null, tt((W(a).llmUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
                        ])
                      ])) : Et("", !0)
                    ])) : Et("", !0)
                  ])
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        }),
        L("div", rY, [
          de(W(Ie), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: Nr
          }, {
            default: lt(() => [
              oY
            ]),
            _: 1
          }),
          de(W(Ie), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: Fn
          }, {
            default: lt(() => [
              iY
            ]),
            _: 1
          }),
          de(W(Ie), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: Rr
          }, {
            default: lt(() => [
              de(W(oe), {
                icon: W(r).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              sY
            ]),
            _: 1
          })
        ]),
        de(W(nc), {
          modelValue: Yt.value,
          "onUpdate:modelValue": K[25] || (K[25] = (J) => Yt.value = J),
          right: "",
          error: yn.value,
          timeout: 6e3
        }, {
          button: lt(() => [
            de(W(Ie), {
              onClick: K[24] || (K[24] = (J) => Yt.value = !1),
              text: ""
            }, {
              default: lt(() => [
                aY
              ]),
              _: 1
            })
          ]),
          default: lt(() => [
            ne(tt(rr.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
}), fY = /* @__PURE__ */ Re(dY, [["__scopeId", "data-v-01e00fb5"]]), hY = window.VueRouter.createRouter, pY = window.VueRouter.createWebHistory, mY = async () => {
  const e = Uo();
  e.userId || await e.getUserRole();
}, e$ = [
  {
    path: "/",
    name: yt.home,
    beforeEnter: async (e) => {
      const o = window.VRouter || t$;
      await Uo().getUserRole(), o.push({ name: yt.situations, params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: yt.situations,
    beforeEnter: () => mY(),
    component: RD
  },
  {
    path: "/situations/:id",
    name: yt.situationDetail,
    component: oq
  },
  {
    path: "/situations/add",
    name: yt.addSituation,
    component: Nq
  },
  {
    path: "/error",
    name: yt.error,
    component: Xq
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: yt.viewUnassignedAlarms,
    component: gH
  },
  {
    path: "/settings",
    name: yt.settings,
    beforeEnter: async () => {
      await Uo().getEngineInfo();
    },
    component: fY
  }
], Zf = window.VRouter;
if (Zf) {
  const e = "Plugin-alecUiExtension", o = Zf.hasRoute(e) ? e : "Plugin";
  for (const r of e$) {
    const { path: s, name: a, component: u, beforeEnter: c } = r;
    Zf.addRoute(o, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const t$ = hY({
  history: pY(),
  routes: e$
}), vY = t$;
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = _2;
