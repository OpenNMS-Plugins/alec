const Le = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, zS = {}, GS = window.Vue.resolveComponent, YS = window.Vue.createVNode, jS = window.Vue.openBlock, KS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const ZS = { class: "main" };
function XS(e, o) {
  const r = GS("router-view");
  return jS(), KS("div", ZS, [
    YS(r)
  ]);
}
const JS = /* @__PURE__ */ Le(zS, [["render", XS], ["__scopeId", "data-v-5d32d140"]]), QS = window.Vue.defineComponent, ek = window.Vue.openBlock, tk = window.Vue.createBlock, nk = /* @__PURE__ */ QS({
  __name: "App",
  setup(e) {
    return (o, r) => (ek(), tk(JS));
  }
});
var Ml = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rk(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fl = { exports: {} }, fd, Gm;
function Ug() {
  return Gm || (Gm = 1, fd = function(o, r) {
    return function() {
      return o.apply(r, arguments);
    };
  }), fd;
}
var hd, Ym;
function gt() {
  if (Ym) return hd;
  Ym = 1;
  var e = Ug(), o = Object.prototype.toString, r = /* @__PURE__ */ (function(A) {
    return function(X) {
      var se = o.call(X);
      return A[se] || (A[se] = se.slice(8, -1).toLowerCase());
    };
  })(/* @__PURE__ */ Object.create(null));
  function s(A) {
    return A = A.toLowerCase(), function(se) {
      return r(se) === A;
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
    var X;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? X = ArrayBuffer.isView(A) : X = A && A.buffer && f(A.buffer), X;
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
    var X = Object.getPrototypeOf(A);
    return X === null || X === Object.prototype;
  }
  function b(A) {
    if (!y(A))
      return !1;
    for (var X in A)
      if (Object.prototype.hasOwnProperty.call(A, X))
        return !1;
    return !0;
  }
  var C = s("Date"), T = s("File"), O = s("Blob"), E = s("FileList");
  function I(A) {
    return o.call(A) === "[object Function]";
  }
  function R(A) {
    return g(A) && I(A.pipe);
  }
  function P(A) {
    var X = "[object FormData]";
    if (!A) return !1;
    if (typeof FormData == "function" && A instanceof FormData) return !0;
    if (!g(A)) return !1;
    var se = Object.getPrototypeOf(A);
    return !se || se === Object.prototype || !I(A.append) ? !1 : o.call(A) === X || I(A.toString) && A.toString() === X;
  }
  var q = s("URLSearchParams");
  function M(A) {
    return A.trim ? A.trim() : A.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }
  function N() {
    var A;
    return typeof navigator < "u" && ((A = navigator.product) === "ReactNative" || A === "NativeScript" || A === "NS") ? !1 : typeof window < "u" && typeof document < "u";
  }
  function j(A, X) {
    if (!(A === null || typeof A > "u"))
      if (typeof A != "object" && (A = [A]), a(A))
        for (var se = 0, Ye = A.length; se < Ye; se++)
          X.call(null, A[se], se, A);
      else
        for (var be in A)
          Object.prototype.hasOwnProperty.call(A, be) && X.call(null, A[be], be, A);
  }
  function J() {
    var A = /* @__PURE__ */ Object.create(null);
    function X(be, ge) {
      var We;
      ge === "__proto__" || ge === "constructor" || ge === "prototype" || (We = Object.prototype.hasOwnProperty.call(A, ge) ? A[ge] : void 0, y(We) && y(be) ? A[ge] = J(We, be) : y(be) ? A[ge] = J({}, be) : a(be) ? A[ge] = be.slice() : A[ge] = be);
    }
    for (var se = 0, Ye = arguments.length; se < Ye; se++)
      j(arguments[se], X);
    return A;
  }
  function ne(A, X, se) {
    return j(X, function(be, ge) {
      se && typeof be == "function" ? A[ge] = e(be, se) : A[ge] = be;
    }), A;
  }
  function re(A) {
    return A.charCodeAt(0) === 65279 && (A = A.slice(1)), A;
  }
  function Se(A, X, se, Ye) {
    A.prototype = Object.create(
      X.prototype,
      Ye
    ), A.prototype.constructor = A, se && Object.assign(A.prototype, se);
  }
  function Ae(A, X, se, Ye) {
    var be, ge, We, On = {};
    if (X = X || {}, A == null) return X;
    do {
      for (be = Object.getOwnPropertyNames(A), ge = be.length; ge-- > 0; )
        We = be[ge], (!Ye || Ye(We, A, X)) && !On[We] && (X[We] = A[We], On[We] = !0);
      A = se !== !1 && Object.getPrototypeOf(A);
    } while (A && (!se || se(A, X)) && A !== Object.prototype);
    return X;
  }
  function ye(A, X, se) {
    A = String(A), (se === void 0 || se > A.length) && (se = A.length), se -= X.length;
    var Ye = A.indexOf(X, se);
    return Ye !== -1 && Ye === se;
  }
  function Oe(A) {
    if (!A) return null;
    if (a(A)) return A;
    var X = A.length;
    if (!w(X)) return null;
    for (var se = new Array(X); X-- > 0; )
      se[X] = A[X];
    return se;
  }
  var ht = /* @__PURE__ */ (function(A) {
    return function(X) {
      return A && X instanceof A;
    };
  })(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array));
  function Yt(A, X) {
    for (var se = A && A[Symbol.iterator], Ye = se.call(A), be; (be = Ye.next()) && !be.done; ) {
      var ge = be.value;
      X.call(A, ge[0], ge[1]);
    }
  }
  function qe(A, X) {
    for (var se, Ye = []; (se = A.exec(X)) !== null; )
      Ye.push(se);
    return Ye;
  }
  var nt = s("HTMLFormElement"), Xr = /* @__PURE__ */ (function(X) {
    return function(se, Ye) {
      return X.call(se, Ye);
    };
  })(Object.prototype.hasOwnProperty);
  return hd = {
    isArray: a,
    isArrayBuffer: f,
    isBuffer: c,
    isFormData: P,
    isArrayBufferView: v,
    isString: p,
    isNumber: w,
    isObject: g,
    isPlainObject: y,
    isEmptyObject: b,
    isUndefined: u,
    isDate: C,
    isFile: T,
    isBlob: O,
    isFunction: I,
    isStream: R,
    isURLSearchParams: q,
    isStandardBrowserEnv: N,
    forEach: j,
    merge: J,
    extend: ne,
    trim: M,
    stripBOM: re,
    inherits: Se,
    toFlatObject: Ae,
    kindOf: r,
    kindOfTest: s,
    endsWith: ye,
    toArray: Oe,
    isTypedArray: ht,
    isFileList: E,
    forEachEntry: Yt,
    matchAll: qe,
    isHTMLForm: nt,
    hasOwnProperty: Xr
  }, hd;
}
var pd, jm;
function qg() {
  return jm || (jm = 1, pd = ["authorization", "proxy-authorization", "cookie", "set-cookie", "x-api-key", "password"]), pd;
}
var md, Km;
function Ei() {
  if (Km) return md;
  Km = 1;
  var e = gt(), o = qg(), r = "[REDACTED ****]";
  function s(y) {
    var b = /* @__PURE__ */ Object.create(null);
    return b.value = y, b;
  }
  function a(y) {
    var b = y && e.isArray(y.redact) && y.redact.length ? y.redact : null, C = b || o, T = {};
    return e.forEach(C, function(E) {
      typeof E == "string" && (T[E.toLowerCase()] = !0);
    }), T;
  }
  function u(y, b) {
    return typeof y == "string" && b[y.toLowerCase()];
  }
  var c = "[Circular]";
  function f(y, b, C, T) {
    var O;
    return u(C, b) ? r : e.isArray(y) ? T.indexOf(y) !== -1 ? c : (T.push(y), O = [], e.forEach(y, function(I, R) {
      O[R] = f(I, b, R, T);
    }), T.pop(), O) : e.isPlainObject(y) ? T.indexOf(y) !== -1 ? c : (T.push(y), O = {}, e.forEach(y, function(I, R) {
      O[R] = f(I, b, R, T);
    }), T.pop(), O) : y;
  }
  function v(y) {
    return y && f(y, a(y), void 0, []);
  }
  function p(y, b, C, T, O) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = y, this.name = "AxiosError", b && (this.code = b), C && (this.config = C), T && (this.request = T), O && (this.response = O);
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
  }), Object.defineProperties(p, g), Object.defineProperty(w, "isAxiosError", s(!0)), p.from = function(y, b, C, T, O, E) {
    var I = Object.create(w);
    return e.toFlatObject(y, I, function(P) {
      return P !== Error.prototype;
    }), p.call(I, y.message, b, C, T, O), I.cause = y, I.name = y.name, E && Object.assign(I, E), I;
  }, md = p, md;
}
var vd, Zm;
function ok() {
  return Zm || (Zm = 1, vd = typeof self == "object" ? self.FormData : window.FormData), vd;
}
var wd, Xm;
function ik() {
  return Xm || (Xm = 1, wd = ok()), wd;
}
var _d, Jm;
function Au() {
  if (Jm) return _d;
  Jm = 1;
  var e = gt(), o = Ei(), r = ik();
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
    }, !1, function(ne, re) {
      return !e.isUndefined(re[ne]);
    });
    var b = y.metaTokens, C = y.visitor || q, T = y.dots, O = y.indexes, E = y.Blob || typeof Blob < "u" && Blob, I = y.maxDepth === void 0 ? 100 : y.maxDepth, R = E && v(g);
    if (!e.isFunction(C))
      throw new TypeError("visitor must be a function");
    function P(J) {
      if (J === null) return "";
      if (e.isDate(J))
        return J.toISOString();
      if (!R && e.isBlob(J))
        throw new o("Blob is not supported. Use a Buffer instead.");
      return e.isArrayBuffer(J) || e.isTypedArray(J) ? R && typeof Blob == "function" ? new Blob([J]) : Buffer.from(J) : J;
    }
    function q(J, ne, re) {
      var Se = J;
      if (J && !re && typeof J == "object") {
        if (e.endsWith(ne, "{}"))
          ne = b ? ne : ne.slice(0, -2), J = JSON.stringify(J);
        else if (e.isArray(J) && c(J) || e.isFileList(J) || e.endsWith(ne, "[]") && (Se = e.toArray(J)))
          return ne = a(ne), Se.forEach(function(ye, Oe) {
            !(e.isUndefined(ye) || ye === null) && g.append(
              // eslint-disable-next-line no-nested-ternary
              O === !0 ? u([ne], Oe, T) : O === null ? ne : ne + "[]",
              P(ye)
            );
          }), !1;
      }
      return s(J) ? !0 : (g.append(u(re, ne, T), P(J)), !1);
    }
    var M = [], N = Object.assign(f, {
      defaultVisitor: q,
      convertValue: P,
      isVisitable: s
    });
    function j(J, ne, re) {
      if (!e.isUndefined(J)) {
        if (re = re || 0, re > I)
          throw new o(
            "Maximum object depth of " + I + " exceeded (got " + re + " levels)",
            o.ERR_FORM_DATA_DEPTH_EXCEEDED
          );
        if (M.indexOf(J) !== -1)
          throw Error("Circular reference detected in " + ne.join("."));
        M.push(J), e.forEach(J, function(Ae, ye) {
          var Oe = !(e.isUndefined(Ae) || Ae === null) && C.call(
            g,
            Ae,
            e.isString(ye) ? ye.trim() : ye,
            ne,
            N
          );
          Oe === !0 && j(Ae, ne ? ne.concat(ye) : [ye], re + 1);
        }), M.pop();
      }
    }
    if (!e.isObject(w))
      throw new TypeError("data must be an object");
    return j(w, null, 0), g;
  }
  return _d = p, _d;
}
var gd, Qm;
function Hg() {
  if (Qm) return gd;
  Qm = 1;
  var e = Au();
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
function Wg() {
  if (ev) return $d;
  ev = 1;
  var e = gt(), o = Hg();
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
function sk() {
  if (tv) return yd;
  tv = 1;
  var e = gt();
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
function zg() {
  if (nv) return bd;
  nv = 1;
  var e = gt();
  return bd = function(r, s) {
    e.forEach(r, function(u, c) {
      c !== s && c.toUpperCase() === s.toUpperCase() && (r[s] = u, delete r[c]);
    });
  }, bd;
}
var Vd, rv;
function Gg() {
  return rv || (rv = 1, Vd = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  }), Vd;
}
var Cd, ov;
function ak() {
  if (ov) return Cd;
  ov = 1;
  var e = Hg();
  return Cd = typeof URLSearchParams < "u" ? URLSearchParams : e, Cd;
}
var Ed, iv;
function lk() {
  return iv || (iv = 1, Ed = FormData), Ed;
}
var Sd, sv;
function uk() {
  return sv || (sv = 1, Sd = {
    isBrowser: !0,
    classes: {
      URLSearchParams: ak(),
      FormData: lk(),
      Blob
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  }), Sd;
}
var kd, av;
function hh() {
  return av || (av = 1, kd = uk()), kd;
}
var Td, lv;
function ck() {
  if (lv) return Td;
  lv = 1;
  var e = gt(), o = Au(), r = hh();
  return Td = function(a, u) {
    return o(a, new r.classes.URLSearchParams(), Object.assign({
      visitor: function(c, f, v, p) {
        return r.isNode && e.isBuffer(c) ? (this.append(f, c.toString("base64")), !1) : p.defaultVisitor.apply(this, arguments);
      }
    }, u));
  }, Td;
}
var Id, uv;
function Yg() {
  if (uv) return Id;
  uv = 1;
  var e = gt();
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
function dk() {
  if (cv) return Ad;
  cv = 1;
  var e = Ei();
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
function fk() {
  if (dv) return xd;
  dv = 1;
  var e = gt();
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
var Od, fv;
function hk() {
  return fv || (fv = 1, Od = function(o) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
  }), Od;
}
var Rd, hv;
function pk() {
  return hv || (hv = 1, Rd = function(o, r) {
    return r ? o.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : o;
  }), Rd;
}
var Ld, pv;
function jg() {
  if (pv) return Ld;
  pv = 1;
  var e = hk(), o = pk();
  return Ld = function(s, a, u) {
    var c = !e(a);
    return s && (c || u === !1) ? o(s, a) : a;
  }, Ld;
}
var Nd, mv;
function mk() {
  if (mv) return Nd;
  mv = 1;
  var e = gt(), o = [
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
function vk() {
  if (vv) return Bd;
  vv = 1;
  var e = gt();
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
function xu() {
  if (wv) return Pd;
  wv = 1;
  var e = Ei(), o = gt();
  function r(s, a, u) {
    e.call(this, s ?? "canceled", e.ERR_CANCELED, a, u), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), Pd = r, Pd;
}
var Dd, _v;
function wk() {
  return _v || (_v = 1, Dd = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Dd;
}
var Md, gv;
function $v() {
  if (gv) return Md;
  gv = 1;
  var e = gt(), o = dk(), r = fk(), s = Wg(), a = jg(), u = mk(), c = vk(), f = Gg(), v = Ei(), p = xu(), w = wk(), g = hh();
  return Md = function(b) {
    return new Promise(function(T, O) {
      var E = b.data, I = b.headers, R = b.responseType, P = e.hasOwnProperty(b, "withXSRFToken") ? b.withXSRFToken : void 0, q;
      function M() {
        b.cancelToken && b.cancelToken.unsubscribe(q), b.signal && b.signal.removeEventListener("abort", q);
      }
      e.isFormData(E) && e.isStandardBrowserEnv() && delete I["Content-Type"];
      var N = new XMLHttpRequest();
      if (b.auth) {
        var j = b.auth.username || "", J = b.auth.password ? unescape(encodeURIComponent(b.auth.password)) : "";
        I.Authorization = "Basic " + btoa(j + ":" + J);
      }
      var ne = a(
        b.baseURL,
        b.url,
        b.allowAbsoluteUrls
      );
      N.open(
        b.method.toUpperCase(),
        s(ne, b.params, b.paramsSerializer),
        !0
      ), N.timeout = b.timeout;
      function re() {
        if (N) {
          var ye = "getAllResponseHeaders" in N ? u(N.getAllResponseHeaders()) : null, Oe = !R || R === "text" || R === "json" ? N.responseText : N.response, ht = {
            data: Oe,
            status: N.status,
            statusText: N.statusText,
            headers: ye,
            config: b,
            request: N
          };
          o(
            function(qe) {
              T(qe), M();
            },
            function(qe) {
              O(qe), M();
            },
            ht
          ), N = null;
        }
      }
      if ("onloadend" in N ? N.onloadend = re : N.onreadystatechange = function() {
        !N || N.readyState !== 4 || N.status === 0 && !(N.responseURL && N.responseURL.indexOf("file:") === 0) || setTimeout(re);
      }, N.onabort = function() {
        N && (O(
          new v(
            "Request aborted",
            v.ECONNABORTED,
            b,
            N
          )
        ), N = null);
      }, N.onerror = function() {
        O(
          new v(
            "Network Error",
            v.ERR_NETWORK,
            b,
            N
          )
        ), N = null;
      }, N.ontimeout = function() {
        var Oe = b.timeout ? "timeout of " + b.timeout + "ms exceeded" : "timeout exceeded", ht = b.transitional || f;
        b.timeoutErrorMessage && (Oe = b.timeoutErrorMessage), O(
          new v(
            Oe,
            ht.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED,
            b,
            N
          )
        ), N = null;
      }, e.isStandardBrowserEnv() && (e.isFunction(P) && (P = P(b)), P === !0 || P !== !1 && c(ne))) {
        var Se = b.xsrfHeaderName && b.xsrfCookieName && r.read(b.xsrfCookieName);
        Se && (I[b.xsrfHeaderName] = Se);
      }
      "setRequestHeader" in N && e.forEach(I, function(Oe, ht) {
        typeof E > "u" && ht.toLowerCase() === "content-type" ? delete I[ht] : N.setRequestHeader(ht, Oe);
      }), e.isUndefined(b.withCredentials) || (N.withCredentials = !!b.withCredentials), R && R !== "json" && (N.responseType = b.responseType), typeof b.onDownloadProgress == "function" && N.addEventListener("progress", b.onDownloadProgress), typeof b.onUploadProgress == "function" && N.upload && N.upload.addEventListener("progress", b.onUploadProgress), (b.cancelToken || b.signal) && (q = function(ye) {
        N && (O(
          !ye || ye.type ? new p(null, b, N) : ye
        ), N.abort(), N = null);
      }, b.cancelToken && b.cancelToken.subscribe(q), b.signal && (b.signal.aborted ? q() : b.signal.addEventListener("abort", q))), !E && E !== !1 && E !== 0 && E !== "" && (E = null);
      var Ae = w(ne);
      if (Ae && g.protocols.indexOf(Ae) === -1) {
        O(
          new v(
            "Unsupported protocol " + Ae + ":",
            v.ERR_BAD_REQUEST,
            b
          )
        );
        return;
      }
      N.send(E);
    });
  }, Md;
}
var Fd, yv;
function ph() {
  if (yv) return Fd;
  yv = 1;
  var e = gt(), o = zg(), r = Ei(), s = Gg(), a = Au(), u = ck(), c = hh(), f = Yg(), v = qg(), p = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  function w(C, T) {
    !e.isUndefined(C) && e.isUndefined(C["Content-Type"]) && (C["Content-Type"] = T);
  }
  function g() {
    var C;
    return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (C = $v()), C;
  }
  function y(C, T, O) {
    if (e.isString(C))
      try {
        return (T || JSON.parse)(C), e.trim(C);
      } catch (E) {
        if (E.name !== "SyntaxError")
          throw E;
      }
    return (O || JSON.stringify)(C);
  }
  var b = {
    transitional: s,
    adapter: g(),
    transformRequest: [function(T, O) {
      o(O, "Accept"), o(O, "Content-Type");
      var E = O && O["Content-Type"] || "", I = E.indexOf("application/json") > -1, R = e.isObject(T);
      R && e.isHTMLForm(T) && (T = new FormData(T));
      var P = e.isFormData(T);
      if (P)
        return I ? JSON.stringify(f(T)) : T;
      if (e.isArrayBuffer(T) || e.isBuffer(T) || e.isStream(T) || e.isFile(T) || e.isBlob(T))
        return T;
      if (e.isArrayBufferView(T))
        return T.buffer;
      if (e.isURLSearchParams(T))
        return w(O, "application/x-www-form-urlencoded;charset=utf-8"), T.toString();
      var q;
      if (R) {
        var M = e.hasOwnProperty(this, "formSerializer") ? this.formSerializer : void 0, N = e.hasOwnProperty(this, "env") ? this.env : void 0;
        if (E.indexOf("application/x-www-form-urlencoded") !== -1)
          return u(T, M).toString();
        if ((q = e.isFileList(T)) || E.indexOf("multipart/form-data") > -1) {
          var j = N && N.FormData;
          return a(
            q ? { "files[]": T } : T,
            j && new j(),
            M
          );
        }
      }
      return R || I ? (w(O, "application/json"), y(T)) : T;
    }],
    transformResponse: [function(T) {
      var O = this.transitional || b.transitional, E = O && O.forcedJSONParsing, I = this.responseType === "json";
      if (T && e.isString(T) && (E && !this.responseType || I)) {
        var R = O && O.silentJSONParsing, P = !R && I;
        try {
          return JSON.parse(T);
        } catch (q) {
          if (P)
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
function _k() {
  if (bv) return Ud;
  bv = 1;
  var e = gt(), o = ph();
  return Ud = function(s, a, u, c) {
    var f = this || o;
    return e.forEach(c, function(p) {
      s = p.call(f, s, a, u);
    }), s;
  }, Ud;
}
var qd, Vv;
function Kg() {
  return Vv || (Vv = 1, qd = function(o) {
    return !!(o && o.__CANCEL__);
  }), qd;
}
var Hd, Cv;
function gk() {
  if (Cv) return Hd;
  Cv = 1;
  var e = gt(), o = /[^\x09\x20-\x7E\x80-\xFF]/g, r = /^[\x09\x20]+|[\x09\x20]+$/g;
  function s(a) {
    return a === !1 || a == null ? a : e.isArray(a) ? a.map(s) : String(a).replace(o, "").replace(r, "");
  }
  return Hd = s, Hd;
}
var Wd, Ev;
function $k() {
  if (Ev) return Wd;
  Ev = 1;
  var e = gt(), o = _k(), r = Kg(), s = ph(), a = xu(), u = zg(), c = gk();
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
function Zg() {
  if (Sv) return zd;
  Sv = 1;
  var e = gt();
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
        var T = e.hasOwnProperty(y, C) ? y[C] : v, O = T(C);
        e.isUndefined(O) && T !== g || (a[C] = O);
      }
    }), a;
  }, zd;
}
var Gd, kv;
function Xg() {
  return kv || (kv = 1, Gd = {
    version: "0.32.0"
  }), Gd;
}
var Yd, Tv;
function yk() {
  if (Tv) return Yd;
  Tv = 1;
  var e = Xg().version, o = Ei(), r = {};
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
function bk() {
  if (Iv) return jd;
  Iv = 1;
  var e = gt(), o = Wg(), r = sk(), s = $k(), a = Zg(), u = jg(), c = yk(), f = c.validators;
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
    this.interceptors.request.forEach(function(N) {
      typeof N.runWhen == "function" && N.runWhen(g) === !1 || (T = T && N.synchronous, C.unshift(N.fulfilled, N.rejected));
    });
    var O = [];
    this.interceptors.response.forEach(function(N) {
      O.push(N.fulfilled, N.rejected);
    });
    var E;
    if (!T) {
      var I = [s, void 0];
      for (Array.prototype.unshift.apply(I, C), I = I.concat(O), E = Promise.resolve(g); I.length; )
        E = E.then(I.shift(), I.shift());
      return E;
    }
    for (var R = g; C.length; ) {
      var P = C.shift(), q = C.shift();
      try {
        R = P(R);
      } catch (M) {
        q(M);
        break;
      }
    }
    try {
      E = s(R);
    } catch (M) {
      return Promise.reject(M);
    }
    for (; O.length; )
      E = E.then(O.shift(), O.shift());
    return E;
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
      return function(C, T, O) {
        return this.request(a(O || {}, {
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
function Vk() {
  if (Av) return Kd;
  Av = 1;
  var e = xu();
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
function Ck() {
  return xv || (xv = 1, Zd = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), Zd;
}
var Xd, Ov;
function Ek() {
  if (Ov) return Xd;
  Ov = 1;
  var e = gt();
  return Xd = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Xd;
}
var Rv;
function Sk() {
  if (Rv) return Fl.exports;
  Rv = 1;
  var e = gt(), o = Ug(), r = bk(), s = Zg(), a = ph(), u = Yg();
  function c(v) {
    var p = new r(v), w = o(r.prototype.request, p);
    return e.extend(w, r.prototype, p), e.extend(w, p), w.create = function(y) {
      return c(s(v, y));
    }, w;
  }
  var f = c(a);
  return f.Axios = r, f.CanceledError = xu(), f.CancelToken = Vk(), f.isCancel = Kg(), f.VERSION = Xg().version, f.toFormData = Au(), f.AxiosError = Ei(), f.Cancel = f.CanceledError, f.all = function(p) {
    return Promise.all(p);
  }, f.spread = Ck(), f.isAxiosError = Ek(), f.formToJSON = function(v) {
    return u(e.isHTMLForm(v) ? new FormData(v) : v);
  }, Fl.exports = f, Fl.exports.default = f, Fl.exports;
}
var Jd, Lv;
function kk() {
  return Lv || (Lv = 1, Jd = Sk()), Jd;
}
var Tk = kk();
const Jg = /* @__PURE__ */ rk(Tk), Zr = Jg.create({
  baseURL: "/opennms/api/v2",
  withCredentials: !0
}), Pt = Jg.create({
  baseURL: "/opennms/rest",
  withCredentials: !0
});
var Sa = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var Ik = Sa.exports, Nv;
function Ak() {
  return Nv || (Nv = 1, (function(e, o) {
    (function() {
      var r, s = "4.18.1", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", v = "Invalid `imports` option passed into `_.template`", p = "__lodash_hash_undefined__", w = 500, g = "__lodash_placeholder__", y = 1, b = 2, C = 4, T = 1, O = 2, E = 1, I = 2, R = 4, P = 8, q = 16, M = 32, N = 64, j = 128, J = 256, ne = 512, re = 30, Se = "...", Ae = 800, ye = 16, Oe = 1, ht = 2, Yt = 3, qe = 1 / 0, nt = 9007199254740991, Xr = 17976931348623157e292, A = NaN, X = 4294967295, se = X - 1, Ye = X >>> 1, be = [
        ["ary", j],
        ["bind", E],
        ["bindKey", I],
        ["curry", P],
        ["curryRight", q],
        ["flip", ne],
        ["partial", M],
        ["partialRight", N],
        ["rearg", J]
      ], ge = "[object Arguments]", We = "[object Array]", On = "[object AsyncFunction]", rn = "[object Boolean]", Zn = "[object Date]", je = "[object DOMException]", Tr = "[object Error]", Pe = "[object Function]", Po = "[object GeneratorFunction]", ve = "[object Map]", Dt = "[object Number]", Ir = "[object Null]", rt = "[object Object]", Jr = "[object Promise]", Qr = "[object Proxy]", mn = "[object RegExp]", Mt = "[object Set]", pt = "[object String]", Rn = "[object Symbol]", Xn = "[object Undefined]", Jn = "[object WeakMap]", Do = "[object WeakSet]", Ln = "[object ArrayBuffer]", vn = "[object DataView]", wn = "[object Float32Array]", Qn = "[object Float64Array]", er = "[object Int8Array]", Ar = "[object Int16Array]", xr = "[object Int32Array]", Or = "[object Uint8Array]", hr = "[object Uint8ClampedArray]", pr = "[object Uint16Array]", _n = "[object Uint32Array]", jt = /\b__p \+= '';/g, eo = /\b(__p \+=) '' \+/g, Mo = /(__e\(.*?\)|\b__t\)) \+\n'';/g, to = /&(?:amp|lt|gt|quot|#39);/g, le = /[&<>"']/g, Q = RegExp(to.source), Re = RegExp(le.source), ke = /<%-([\s\S]+?)%>/g, Et = /<%([\s\S]+?)%>/g, Nn = /<%=([\s\S]+?)%>/g, no = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ro = /^\w*$/, ki = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rr = /[\\^$.*+?()[\]{}|]/g, oo = RegExp(Rr.source), Lr = /^\s+/, io = /\s/, Ti = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Fo = /\{\n\/\* \[wrapped with (.+)\] \*/, Zu = /,? & /, Xu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Xe = /[()=,{}\[\]\/\s]/, so = /\\(\\)?/g, Ju = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Os = /\w*$/, Rs = /^[-+]0x[0-9a-f]+$/i, ja = /^0b[01]+$/i, Ka = /^\[object .+?Constructor\]$/, Qu = /^0o[0-7]+$/i, ec = /^(?:0|[1-9]\d*)$/, tc = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ii = /($^)/, mr = /['\n\r\u2028\u2029\\]/g, Uo = "\\ud800-\\udfff", Nr = "\\u0300-\\u036f", nc = "\\ufe20-\\ufe2f", rc = "\\u20d0-\\u20ff", Ls = Nr + nc + rc, Ns = "\\u2700-\\u27bf", qo = "a-z\\xdf-\\xf6\\xf8-\\xff", Bs = "\\xac\\xb1\\xd7\\xf7", Ai = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ao = "\\u2000-\\u206f", Ho = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Bn = "A-Z\\xc0-\\xd6\\xd8-\\xde", Za = "\\ufe0e\\ufe0f", Xa = Bs + Ai + ao + Ho, xi = "['’]", Ja = "[" + Uo + "]", Qa = "[" + Xa + "]", Wo = "[" + Ls + "]", el = "\\d+", oc = "[" + Ns + "]", Ps = "[" + qo + "]", zo = "[^" + Uo + Xa + el + Ns + qo + Bn + "]", Go = "\\ud83c[\\udffb-\\udfff]", G = "(?:" + Wo + "|" + Go + ")", _ = "[^" + Uo + "]", x = "(?:\\ud83c[\\udde6-\\uddff]){2}", z = "[\\ud800-\\udbff][\\udc00-\\udfff]", K = "[" + Bn + "]", fe = "\\u200d", Ve = "(?:" + Ps + "|" + zo + ")", mt = "(?:" + K + "|" + zo + ")", ot = "(?:" + xi + "(?:d|ll|m|re|s|t|ve))?", Kt = "(?:" + xi + "(?:D|LL|M|RE|S|T|VE))?", on = G + "?", Oi = "[" + Za + "]?", Tt = "(?:" + fe + "(?:" + [_, x, z].join("|") + ")" + Oi + on + ")*", X0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", J0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ph = Oi + on + Tt, Q0 = "(?:" + [oc, x, z].join("|") + ")" + Ph, e$ = "(?:" + [_ + Wo + "?", Wo, x, z, Ja].join("|") + ")", t$ = RegExp(xi, "g"), n$ = RegExp(Wo, "g"), ic = RegExp(Go + "(?=" + Go + ")|" + e$ + Ph, "g"), r$ = RegExp([
        K + "?" + Ps + "+" + ot + "(?=" + [Qa, K, "$"].join("|") + ")",
        mt + "+" + Kt + "(?=" + [Qa, K + Ve, "$"].join("|") + ")",
        K + "?" + Ve + "+" + ot,
        K + "+" + Kt,
        J0,
        X0,
        el,
        Q0
      ].join("|"), "g"), o$ = RegExp("[" + fe + Uo + Ls + Za + "]"), i$ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, s$ = [
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
      ], a$ = -1, Je = {};
      Je[wn] = Je[Qn] = Je[er] = Je[Ar] = Je[xr] = Je[Or] = Je[hr] = Je[pr] = Je[_n] = !0, Je[ge] = Je[We] = Je[Ln] = Je[rn] = Je[vn] = Je[Zn] = Je[Tr] = Je[Pe] = Je[ve] = Je[Dt] = Je[rt] = Je[mn] = Je[Mt] = Je[pt] = Je[Jn] = !1;
      var Ke = {};
      Ke[ge] = Ke[We] = Ke[Ln] = Ke[vn] = Ke[rn] = Ke[Zn] = Ke[wn] = Ke[Qn] = Ke[er] = Ke[Ar] = Ke[xr] = Ke[ve] = Ke[Dt] = Ke[rt] = Ke[mn] = Ke[Mt] = Ke[pt] = Ke[Rn] = Ke[Or] = Ke[hr] = Ke[pr] = Ke[_n] = !0, Ke[Tr] = Ke[Pe] = Ke[Jn] = !1;
      var l$ = {
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
      }, u$ = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, c$ = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, d$ = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, f$ = parseFloat, h$ = parseInt, Dh = typeof Ml == "object" && Ml && Ml.Object === Object && Ml, p$ = typeof self == "object" && self && self.Object === Object && self, It = Dh || p$ || Function("return this")(), sc = o && !o.nodeType && o, Yo = sc && !0 && e && !e.nodeType && e, Mh = Yo && Yo.exports === sc, ac = Mh && Dh.process, Pn = (function() {
        try {
          var S = Yo && Yo.require && Yo.require("util").types;
          return S || ac && ac.binding && ac.binding("util");
        } catch {
        }
      })(), Fh = Pn && Pn.isArrayBuffer, Uh = Pn && Pn.isDate, qh = Pn && Pn.isMap, Hh = Pn && Pn.isRegExp, Wh = Pn && Pn.isSet, zh = Pn && Pn.isTypedArray;
      function gn(S, B, L) {
        switch (L.length) {
          case 0:
            return S.call(B);
          case 1:
            return S.call(B, L[0]);
          case 2:
            return S.call(B, L[0], L[1]);
          case 3:
            return S.call(B, L[0], L[1], L[2]);
        }
        return S.apply(B, L);
      }
      function m$(S, B, L, Z) {
        for (var ue = -1, Ne = S == null ? 0 : S.length; ++ue < Ne; ) {
          var $t = S[ue];
          B(Z, $t, L($t), S);
        }
        return Z;
      }
      function $n(S, B) {
        for (var L = -1, Z = S == null ? 0 : S.length; ++L < Z && B(S[L], L, S) !== !1; )
          ;
        return S;
      }
      function v$(S, B) {
        for (var L = S == null ? 0 : S.length; L-- && B(S[L], L, S) !== !1; )
          ;
        return S;
      }
      function Gh(S, B) {
        for (var L = -1, Z = S == null ? 0 : S.length; ++L < Z; )
          if (!B(S[L], L, S))
            return !1;
        return !0;
      }
      function lo(S, B) {
        for (var L = -1, Z = S == null ? 0 : S.length, ue = 0, Ne = []; ++L < Z; ) {
          var $t = S[L];
          B($t, L, S) && (Ne[ue++] = $t);
        }
        return Ne;
      }
      function tl(S, B) {
        var L = S == null ? 0 : S.length;
        return !!L && Ri(S, B, 0) > -1;
      }
      function lc(S, B, L) {
        for (var Z = -1, ue = S == null ? 0 : S.length; ++Z < ue; )
          if (L(B, S[Z]))
            return !0;
        return !1;
      }
      function Qe(S, B) {
        for (var L = -1, Z = S == null ? 0 : S.length, ue = Array(Z); ++L < Z; )
          ue[L] = B(S[L], L, S);
        return ue;
      }
      function uo(S, B) {
        for (var L = -1, Z = B.length, ue = S.length; ++L < Z; )
          S[ue + L] = B[L];
        return S;
      }
      function uc(S, B, L, Z) {
        var ue = -1, Ne = S == null ? 0 : S.length;
        for (Z && Ne && (L = S[++ue]); ++ue < Ne; )
          L = B(L, S[ue], ue, S);
        return L;
      }
      function w$(S, B, L, Z) {
        var ue = S == null ? 0 : S.length;
        for (Z && ue && (L = S[--ue]); ue--; )
          L = B(L, S[ue], ue, S);
        return L;
      }
      function cc(S, B) {
        for (var L = -1, Z = S == null ? 0 : S.length; ++L < Z; )
          if (B(S[L], L, S))
            return !0;
        return !1;
      }
      var _$ = dc("length");
      function g$(S) {
        return S.split("");
      }
      function $$(S) {
        return S.match(Xu) || [];
      }
      function Yh(S, B, L) {
        var Z;
        return L(S, function(ue, Ne, $t) {
          if (B(ue, Ne, $t))
            return Z = Ne, !1;
        }), Z;
      }
      function nl(S, B, L, Z) {
        for (var ue = S.length, Ne = L + (Z ? 1 : -1); Z ? Ne-- : ++Ne < ue; )
          if (B(S[Ne], Ne, S))
            return Ne;
        return -1;
      }
      function Ri(S, B, L) {
        return B === B ? O$(S, B, L) : nl(S, jh, L);
      }
      function y$(S, B, L, Z) {
        for (var ue = L - 1, Ne = S.length; ++ue < Ne; )
          if (Z(S[ue], B))
            return ue;
        return -1;
      }
      function jh(S) {
        return S !== S;
      }
      function Kh(S, B) {
        var L = S == null ? 0 : S.length;
        return L ? hc(S, B) / L : A;
      }
      function dc(S) {
        return function(B) {
          return B == null ? r : B[S];
        };
      }
      function fc(S) {
        return function(B) {
          return S == null ? r : S[B];
        };
      }
      function Zh(S, B, L, Z, ue) {
        return ue(S, function(Ne, $t, ze) {
          L = Z ? (Z = !1, Ne) : B(L, Ne, $t, ze);
        }), L;
      }
      function b$(S, B) {
        var L = S.length;
        for (S.sort(B); L--; )
          S[L] = S[L].value;
        return S;
      }
      function hc(S, B) {
        for (var L, Z = -1, ue = S.length; ++Z < ue; ) {
          var Ne = B(S[Z]);
          Ne !== r && (L = L === r ? Ne : L + Ne);
        }
        return L;
      }
      function pc(S, B) {
        for (var L = -1, Z = Array(S); ++L < S; )
          Z[L] = B(L);
        return Z;
      }
      function V$(S, B) {
        return Qe(B, function(L) {
          return [L, S[L]];
        });
      }
      function Xh(S) {
        return S && S.slice(0, tp(S) + 1).replace(Lr, "");
      }
      function yn(S) {
        return function(B) {
          return S(B);
        };
      }
      function mc(S, B) {
        return Qe(B, function(L) {
          return S[L];
        });
      }
      function Ds(S, B) {
        return S.has(B);
      }
      function Jh(S, B) {
        for (var L = -1, Z = S.length; ++L < Z && Ri(B, S[L], 0) > -1; )
          ;
        return L;
      }
      function Qh(S, B) {
        for (var L = S.length; L-- && Ri(B, S[L], 0) > -1; )
          ;
        return L;
      }
      function C$(S, B) {
        for (var L = S.length, Z = 0; L--; )
          S[L] === B && ++Z;
        return Z;
      }
      var E$ = fc(l$), S$ = fc(u$);
      function k$(S) {
        return "\\" + d$[S];
      }
      function T$(S, B) {
        return S == null ? r : S[B];
      }
      function Li(S) {
        return o$.test(S);
      }
      function I$(S) {
        return i$.test(S);
      }
      function A$(S) {
        for (var B, L = []; !(B = S.next()).done; )
          L.push(B.value);
        return L;
      }
      function vc(S) {
        var B = -1, L = Array(S.size);
        return S.forEach(function(Z, ue) {
          L[++B] = [ue, Z];
        }), L;
      }
      function ep(S, B) {
        return function(L) {
          return S(B(L));
        };
      }
      function co(S, B) {
        for (var L = -1, Z = S.length, ue = 0, Ne = []; ++L < Z; ) {
          var $t = S[L];
          ($t === B || $t === g) && (S[L] = g, Ne[ue++] = L);
        }
        return Ne;
      }
      function rl(S) {
        var B = -1, L = Array(S.size);
        return S.forEach(function(Z) {
          L[++B] = Z;
        }), L;
      }
      function x$(S) {
        var B = -1, L = Array(S.size);
        return S.forEach(function(Z) {
          L[++B] = [Z, Z];
        }), L;
      }
      function O$(S, B, L) {
        for (var Z = L - 1, ue = S.length; ++Z < ue; )
          if (S[Z] === B)
            return Z;
        return -1;
      }
      function R$(S, B, L) {
        for (var Z = L + 1; Z--; )
          if (S[Z] === B)
            return Z;
        return Z;
      }
      function Ni(S) {
        return Li(S) ? N$(S) : _$(S);
      }
      function tr(S) {
        return Li(S) ? B$(S) : g$(S);
      }
      function tp(S) {
        for (var B = S.length; B-- && io.test(S.charAt(B)); )
          ;
        return B;
      }
      var L$ = fc(c$);
      function N$(S) {
        for (var B = ic.lastIndex = 0; ic.test(S); )
          ++B;
        return B;
      }
      function B$(S) {
        return S.match(ic) || [];
      }
      function P$(S) {
        return S.match(r$) || [];
      }
      var D$ = (function S(B) {
        B = B == null ? It : Bi.defaults(It.Object(), B, Bi.pick(It, s$));
        var L = B.Array, Z = B.Date, ue = B.Error, Ne = B.Function, $t = B.Math, ze = B.Object, wc = B.RegExp, M$ = B.String, Dn = B.TypeError, ol = L.prototype, F$ = Ne.prototype, Pi = ze.prototype, il = B["__core-js_shared__"], sl = F$.toString, De = Pi.hasOwnProperty, U$ = 0, np = (function() {
          var t = /[^.]+$/.exec(il && il.keys && il.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        })(), al = Pi.toString, q$ = sl.call(ze), H$ = It._, W$ = wc(
          "^" + sl.call(De).replace(Rr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), ll = Mh ? B.Buffer : r, fo = B.Symbol, ul = B.Uint8Array, rp = ll ? ll.allocUnsafe : r, cl = ep(ze.getPrototypeOf, ze), op = ze.create, ip = Pi.propertyIsEnumerable, dl = ol.splice, sp = fo ? fo.isConcatSpreadable : r, Ms = fo ? fo.iterator : r, jo = fo ? fo.toStringTag : r, fl = (function() {
          try {
            var t = Qo(ze, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        })(), z$ = B.clearTimeout !== It.clearTimeout && B.clearTimeout, G$ = Z && Z.now !== It.Date.now && Z.now, Y$ = B.setTimeout !== It.setTimeout && B.setTimeout, hl = $t.ceil, pl = $t.floor, _c = ze.getOwnPropertySymbols, j$ = ll ? ll.isBuffer : r, ap = B.isFinite, K$ = ol.join, Z$ = ep(ze.keys, ze), yt = $t.max, Ft = $t.min, X$ = Z.now, J$ = B.parseInt, lp = $t.random, Q$ = ol.reverse, gc = Qo(B, "DataView"), Fs = Qo(B, "Map"), $c = Qo(B, "Promise"), Di = Qo(B, "Set"), Us = Qo(B, "WeakMap"), qs = Qo(ze, "create"), ml = Us && new Us(), Mi = {}, ey = ei(gc), ty = ei(Fs), ny = ei($c), ry = ei(Di), oy = ei(Us), vl = fo ? fo.prototype : r, Hs = vl ? vl.valueOf : r, up = vl ? vl.toString : r;
        function h(t) {
          if (at(t) && !de(t) && !(t instanceof Ce)) {
            if (t instanceof Mn)
              return t;
            if (De.call(t, "__wrapped__"))
              return cm(t);
          }
          return new Mn(t);
        }
        var Fi = /* @__PURE__ */ (function() {
          function t() {
          }
          return function(n) {
            if (!it(n))
              return {};
            if (op)
              return op(n);
            t.prototype = n;
            var i = new t();
            return t.prototype = r, i;
          };
        })();
        function wl() {
        }
        function Mn(t, n) {
          this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
        }
        h.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: ke,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Et,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Nn,
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
        }, h.prototype = wl.prototype, h.prototype.constructor = h, Mn.prototype = Fi(wl.prototype), Mn.prototype.constructor = Mn;
        function Ce(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = X, this.__views__ = [];
        }
        function iy() {
          var t = new Ce(this.__wrapped__);
          return t.__actions__ = sn(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = sn(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = sn(this.__views__), t;
        }
        function sy() {
          if (this.__filtered__) {
            var t = new Ce(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function ay() {
          var t = this.__wrapped__.value(), n = this.__dir__, i = de(t), l = n < 0, d = i ? t.length : 0, m = gb(0, d, this.__views__), $ = m.start, V = m.end, k = V - $, F = l ? V : $ - 1, U = this.__iteratees__, H = U.length, Y = 0, ee = Ft(k, this.__takeCount__);
          if (!i || !l && d == k && ee == k)
            return Rp(t, this.__actions__);
          var ae = [];
          e:
            for (; k-- && Y < ee; ) {
              F += n;
              for (var pe = -1, oe = t[F]; ++pe < H; ) {
                var $e = U[pe], Te = $e.iteratee, Cn = $e.type, Jt = Te(oe);
                if (Cn == ht)
                  oe = Jt;
                else if (!Jt) {
                  if (Cn == Oe)
                    continue e;
                  break e;
                }
              }
              ae[Y++] = oe;
            }
          return ae;
        }
        Ce.prototype = Fi(wl.prototype), Ce.prototype.constructor = Ce;
        function Ko(t) {
          var n = -1, i = t == null ? 0 : t.length;
          for (this.clear(); ++n < i; ) {
            var l = t[n];
            this.set(l[0], l[1]);
          }
        }
        function ly() {
          this.__data__ = qs ? qs(null) : {}, this.size = 0;
        }
        function uy(t) {
          var n = this.has(t) && delete this.__data__[t];
          return this.size -= n ? 1 : 0, n;
        }
        function cy(t) {
          var n = this.__data__;
          if (qs) {
            var i = n[t];
            return i === p ? r : i;
          }
          return De.call(n, t) ? n[t] : r;
        }
        function dy(t) {
          var n = this.__data__;
          return qs ? n[t] !== r : De.call(n, t);
        }
        function fy(t, n) {
          var i = this.__data__;
          return this.size += this.has(t) ? 0 : 1, i[t] = qs && n === r ? p : n, this;
        }
        Ko.prototype.clear = ly, Ko.prototype.delete = uy, Ko.prototype.get = cy, Ko.prototype.has = dy, Ko.prototype.set = fy;
        function Br(t) {
          var n = -1, i = t == null ? 0 : t.length;
          for (this.clear(); ++n < i; ) {
            var l = t[n];
            this.set(l[0], l[1]);
          }
        }
        function hy() {
          this.__data__ = [], this.size = 0;
        }
        function py(t) {
          var n = this.__data__, i = _l(n, t);
          if (i < 0)
            return !1;
          var l = n.length - 1;
          return i == l ? n.pop() : dl.call(n, i, 1), --this.size, !0;
        }
        function my(t) {
          var n = this.__data__, i = _l(n, t);
          return i < 0 ? r : n[i][1];
        }
        function vy(t) {
          return _l(this.__data__, t) > -1;
        }
        function wy(t, n) {
          var i = this.__data__, l = _l(i, t);
          return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
        }
        Br.prototype.clear = hy, Br.prototype.delete = py, Br.prototype.get = my, Br.prototype.has = vy, Br.prototype.set = wy;
        function Pr(t) {
          var n = -1, i = t == null ? 0 : t.length;
          for (this.clear(); ++n < i; ) {
            var l = t[n];
            this.set(l[0], l[1]);
          }
        }
        function _y() {
          this.size = 0, this.__data__ = {
            hash: new Ko(),
            map: new (Fs || Br)(),
            string: new Ko()
          };
        }
        function gy(t) {
          var n = Al(this, t).delete(t);
          return this.size -= n ? 1 : 0, n;
        }
        function $y(t) {
          return Al(this, t).get(t);
        }
        function yy(t) {
          return Al(this, t).has(t);
        }
        function by(t, n) {
          var i = Al(this, t), l = i.size;
          return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
        }
        Pr.prototype.clear = _y, Pr.prototype.delete = gy, Pr.prototype.get = $y, Pr.prototype.has = yy, Pr.prototype.set = by;
        function Zo(t) {
          var n = -1, i = t == null ? 0 : t.length;
          for (this.__data__ = new Pr(); ++n < i; )
            this.add(t[n]);
        }
        function Vy(t) {
          return this.__data__.set(t, p), this;
        }
        function Cy(t) {
          return this.__data__.has(t);
        }
        Zo.prototype.add = Zo.prototype.push = Vy, Zo.prototype.has = Cy;
        function nr(t) {
          var n = this.__data__ = new Br(t);
          this.size = n.size;
        }
        function Ey() {
          this.__data__ = new Br(), this.size = 0;
        }
        function Sy(t) {
          var n = this.__data__, i = n.delete(t);
          return this.size = n.size, i;
        }
        function ky(t) {
          return this.__data__.get(t);
        }
        function Ty(t) {
          return this.__data__.has(t);
        }
        function Iy(t, n) {
          var i = this.__data__;
          if (i instanceof Br) {
            var l = i.__data__;
            if (!Fs || l.length < a - 1)
              return l.push([t, n]), this.size = ++i.size, this;
            i = this.__data__ = new Pr(l);
          }
          return i.set(t, n), this.size = i.size, this;
        }
        nr.prototype.clear = Ey, nr.prototype.delete = Sy, nr.prototype.get = ky, nr.prototype.has = Ty, nr.prototype.set = Iy;
        function cp(t, n) {
          var i = de(t), l = !i && ti(t), d = !i && !l && wo(t), m = !i && !l && !d && Wi(t), $ = i || l || d || m, V = $ ? pc(t.length, M$) : [], k = V.length;
          for (var F in t)
            (n || De.call(t, F)) && !($ && // Safari 9 has enumerable `arguments.length` in strict mode.
            (F == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            d && (F == "offset" || F == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            m && (F == "buffer" || F == "byteLength" || F == "byteOffset") || // Skip index properties.
            Fr(F, k))) && V.push(F);
          return V;
        }
        function dp(t) {
          var n = t.length;
          return n ? t[xc(0, n - 1)] : r;
        }
        function Ay(t, n) {
          return xl(sn(t), Xo(n, 0, t.length));
        }
        function xy(t) {
          return xl(sn(t));
        }
        function yc(t, n, i) {
          (i !== r && !or(t[n], i) || i === r && !(n in t)) && vr(t, n, i);
        }
        function Ws(t, n, i) {
          var l = t[n];
          (!(De.call(t, n) && or(l, i)) || i === r && !(n in t)) && vr(t, n, i);
        }
        function _l(t, n) {
          for (var i = t.length; i--; )
            if (or(t[i][0], n))
              return i;
          return -1;
        }
        function Oy(t, n, i, l) {
          return ho(t, function(d, m, $) {
            n(l, d, i(d), $);
          }), l;
        }
        function fp(t, n) {
          return t && _r(n, St(n), t);
        }
        function Ry(t, n) {
          return t && _r(n, ln(n), t);
        }
        function vr(t, n, i) {
          n == "__proto__" && fl ? fl(t, n, {
            configurable: !0,
            enumerable: !0,
            value: i,
            writable: !0
          }) : t[n] = i;
        }
        function bc(t, n) {
          for (var i = -1, l = n.length, d = L(l), m = t == null; ++i < l; )
            d[i] = m ? r : rd(t, n[i]);
          return d;
        }
        function Xo(t, n, i) {
          return t === t && (i !== r && (t = t <= i ? t : i), n !== r && (t = t >= n ? t : n)), t;
        }
        function Fn(t, n, i, l, d, m) {
          var $, V = n & y, k = n & b, F = n & C;
          if (i && ($ = d ? i(t, l, d, m) : i(t)), $ !== r)
            return $;
          if (!it(t))
            return t;
          var U = de(t);
          if (U) {
            if ($ = yb(t), !V)
              return sn(t, $);
          } else {
            var H = Ut(t), Y = H == Pe || H == Po;
            if (wo(t))
              return Bp(t, V);
            if (H == rt || H == ge || Y && !d) {
              if ($ = k || Y ? {} : tm(t), !V)
                return k ? cb(t, Ry($, t)) : ub(t, fp($, t));
            } else {
              if (!Ke[H])
                return d ? t : {};
              $ = bb(t, H, V);
            }
          }
          m || (m = new nr());
          var ee = m.get(t);
          if (ee)
            return ee;
          m.set(t, $), Am(t) ? t.forEach(function(oe) {
            $.add(Fn(oe, n, i, oe, t, m));
          }) : Tm(t) && t.forEach(function(oe, $e) {
            $.set($e, Fn(oe, n, i, $e, t, m));
          });
          var ae = F ? k ? qc : Uc : k ? ln : St, pe = U ? r : ae(t);
          return $n(pe || t, function(oe, $e) {
            pe && ($e = oe, oe = t[$e]), Ws($, $e, Fn(oe, n, i, $e, t, m));
          }), $;
        }
        function Ly(t) {
          var n = St(t);
          return function(i) {
            return hp(i, t, n);
          };
        }
        function hp(t, n, i) {
          var l = i.length;
          if (t == null)
            return !l;
          for (t = ze(t); l--; ) {
            var d = i[l], m = n[d], $ = t[d];
            if ($ === r && !(d in t) || !m($))
              return !1;
          }
          return !0;
        }
        function pp(t, n, i) {
          if (typeof t != "function")
            throw new Dn(c);
          return Xs(function() {
            t.apply(r, i);
          }, n);
        }
        function zs(t, n, i, l) {
          var d = -1, m = tl, $ = !0, V = t.length, k = [], F = n.length;
          if (!V)
            return k;
          i && (n = Qe(n, yn(i))), l ? (m = lc, $ = !1) : n.length >= a && (m = Ds, $ = !1, n = new Zo(n));
          e:
            for (; ++d < V; ) {
              var U = t[d], H = i == null ? U : i(U);
              if (U = l || U !== 0 ? U : 0, $ && H === H) {
                for (var Y = F; Y--; )
                  if (n[Y] === H)
                    continue e;
                k.push(U);
              } else m(n, H, l) || k.push(U);
            }
          return k;
        }
        var ho = Up(wr), mp = Up(Cc, !0);
        function Ny(t, n) {
          var i = !0;
          return ho(t, function(l, d, m) {
            return i = !!n(l, d, m), i;
          }), i;
        }
        function gl(t, n, i) {
          for (var l = -1, d = t.length; ++l < d; ) {
            var m = t[l], $ = n(m);
            if ($ != null && (V === r ? $ === $ && !Vn($) : i($, V)))
              var V = $, k = m;
          }
          return k;
        }
        function By(t, n, i, l) {
          var d = t.length;
          for (i = he(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === r || l > d ? d : he(l), l < 0 && (l += d), l = i > l ? 0 : Om(l); i < l; )
            t[i++] = n;
          return t;
        }
        function vp(t, n) {
          var i = [];
          return ho(t, function(l, d, m) {
            n(l, d, m) && i.push(l);
          }), i;
        }
        function At(t, n, i, l, d) {
          var m = -1, $ = t.length;
          for (i || (i = Cb), d || (d = []); ++m < $; ) {
            var V = t[m];
            n > 0 && i(V) ? n > 1 ? At(V, n - 1, i, l, d) : uo(d, V) : l || (d[d.length] = V);
          }
          return d;
        }
        var Vc = qp(), wp = qp(!0);
        function wr(t, n) {
          return t && Vc(t, n, St);
        }
        function Cc(t, n) {
          return t && wp(t, n, St);
        }
        function $l(t, n) {
          return lo(n, function(i) {
            return Ur(t[i]);
          });
        }
        function Jo(t, n) {
          n = mo(n, t);
          for (var i = 0, l = n.length; t != null && i < l; )
            t = t[rr(n[i++])];
          return i && i == l ? t : r;
        }
        function _p(t, n, i) {
          var l = n(t);
          return de(t) ? l : uo(l, i(t));
        }
        function Zt(t) {
          return t == null ? t === r ? Xn : Ir : jo && jo in ze(t) ? _b(t) : xb(t);
        }
        function Ec(t, n) {
          return t > n;
        }
        function Py(t, n) {
          return t != null && De.call(t, n);
        }
        function Dy(t, n) {
          return t != null && n in ze(t);
        }
        function My(t, n, i) {
          return t >= Ft(n, i) && t < yt(n, i);
        }
        function Sc(t, n, i) {
          for (var l = i ? lc : tl, d = t[0].length, m = t.length, $ = m, V = L(m), k = 1 / 0, F = []; $--; ) {
            var U = t[$];
            $ && n && (U = Qe(U, yn(n))), k = Ft(U.length, k), V[$] = !i && (n || d >= 120 && U.length >= 120) ? new Zo($ && U) : r;
          }
          U = t[0];
          var H = -1, Y = V[0];
          e:
            for (; ++H < d && F.length < k; ) {
              var ee = U[H], ae = n ? n(ee) : ee;
              if (ee = i || ee !== 0 ? ee : 0, !(Y ? Ds(Y, ae) : l(F, ae, i))) {
                for ($ = m; --$; ) {
                  var pe = V[$];
                  if (!(pe ? Ds(pe, ae) : l(t[$], ae, i)))
                    continue e;
                }
                Y && Y.push(ae), F.push(ee);
              }
            }
          return F;
        }
        function Fy(t, n, i, l) {
          return wr(t, function(d, m, $) {
            n(l, i(d), m, $);
          }), l;
        }
        function Gs(t, n, i) {
          n = mo(n, t), t = im(t, n);
          var l = t == null ? t : t[rr(qn(n))];
          return l == null ? r : gn(l, t, i);
        }
        function gp(t) {
          return at(t) && Zt(t) == ge;
        }
        function Uy(t) {
          return at(t) && Zt(t) == Ln;
        }
        function qy(t) {
          return at(t) && Zt(t) == Zn;
        }
        function Ys(t, n, i, l, d) {
          return t === n ? !0 : t == null || n == null || !at(t) && !at(n) ? t !== t && n !== n : Hy(t, n, i, l, Ys, d);
        }
        function Hy(t, n, i, l, d, m) {
          var $ = de(t), V = de(n), k = $ ? We : Ut(t), F = V ? We : Ut(n);
          k = k == ge ? rt : k, F = F == ge ? rt : F;
          var U = k == rt, H = F == rt, Y = k == F;
          if (Y && wo(t)) {
            if (!wo(n))
              return !1;
            $ = !0, U = !1;
          }
          if (Y && !U)
            return m || (m = new nr()), $ || Wi(t) ? Jp(t, n, i, l, d, m) : vb(t, n, k, i, l, d, m);
          if (!(i & T)) {
            var ee = U && De.call(t, "__wrapped__"), ae = H && De.call(n, "__wrapped__");
            if (ee || ae) {
              var pe = ee ? t.value() : t, oe = ae ? n.value() : n;
              return m || (m = new nr()), d(pe, oe, i, l, m);
            }
          }
          return Y ? (m || (m = new nr()), wb(t, n, i, l, d, m)) : !1;
        }
        function Wy(t) {
          return at(t) && Ut(t) == ve;
        }
        function kc(t, n, i, l) {
          var d = i.length, m = d, $ = !l;
          if (t == null)
            return !m;
          for (t = ze(t); d--; ) {
            var V = i[d];
            if ($ && V[2] ? V[1] !== t[V[0]] : !(V[0] in t))
              return !1;
          }
          for (; ++d < m; ) {
            V = i[d];
            var k = V[0], F = t[k], U = V[1];
            if ($ && V[2]) {
              if (F === r && !(k in t))
                return !1;
            } else {
              var H = new nr();
              if (l)
                var Y = l(F, U, k, t, n, H);
              if (!(Y === r ? Ys(U, F, T | O, l, H) : Y))
                return !1;
            }
          }
          return !0;
        }
        function $p(t) {
          if (!it(t) || Sb(t))
            return !1;
          var n = Ur(t) ? W$ : Ka;
          return n.test(ei(t));
        }
        function zy(t) {
          return at(t) && Zt(t) == mn;
        }
        function Gy(t) {
          return at(t) && Ut(t) == Mt;
        }
        function Yy(t) {
          return at(t) && Pl(t.length) && !!Je[Zt(t)];
        }
        function yp(t) {
          return typeof t == "function" ? t : t == null ? un : typeof t == "object" ? de(t) ? Cp(t[0], t[1]) : Vp(t) : Wm(t);
        }
        function Tc(t) {
          if (!Zs(t))
            return Z$(t);
          var n = [];
          for (var i in ze(t))
            De.call(t, i) && i != "constructor" && n.push(i);
          return n;
        }
        function jy(t) {
          if (!it(t))
            return Ab(t);
          var n = Zs(t), i = [];
          for (var l in t)
            l == "constructor" && (n || !De.call(t, l)) || i.push(l);
          return i;
        }
        function Ic(t, n) {
          return t < n;
        }
        function bp(t, n) {
          var i = -1, l = an(t) ? L(t.length) : [];
          return ho(t, function(d, m, $) {
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
          return Gc(t) && nm(n) ? rm(rr(t), n) : function(i) {
            var l = rd(i, t);
            return l === r && l === n ? od(i, t) : Ys(n, l, T | O);
          };
        }
        function yl(t, n, i, l, d) {
          t !== n && Vc(n, function(m, $) {
            if (d || (d = new nr()), it(m))
              Ky(t, n, $, i, yl, l, d);
            else {
              var V = l ? l(jc(t, $), m, $ + "", t, n, d) : r;
              V === r && (V = m), yc(t, $, V);
            }
          }, ln);
        }
        function Ky(t, n, i, l, d, m, $) {
          var V = jc(t, i), k = jc(n, i), F = $.get(k);
          if (F) {
            yc(t, i, F);
            return;
          }
          var U = m ? m(V, k, i + "", t, n, $) : r, H = U === r;
          if (H) {
            var Y = de(k), ee = !Y && wo(k), ae = !Y && !ee && Wi(k);
            U = k, Y || ee || ae ? de(V) ? U = V : ut(V) ? U = sn(V) : ee ? (H = !1, U = Bp(k, !0)) : ae ? (H = !1, U = Pp(k, !0)) : U = [] : Js(k) || ti(k) ? (U = V, ti(V) ? U = Rm(V) : (!it(V) || Ur(V)) && (U = tm(k))) : H = !1;
          }
          H && ($.set(k, U), d(U, k, l, m, $), $.delete(k)), yc(t, i, U);
        }
        function Ep(t, n) {
          var i = t.length;
          if (i)
            return n += n < 0 ? i : 0, Fr(n, i) ? t[n] : r;
        }
        function Sp(t, n, i) {
          n.length ? n = Qe(n, function(m) {
            return de(m) ? function($) {
              return Jo($, m.length === 1 ? m[0] : m);
            } : m;
          }) : n = [un];
          var l = -1;
          n = Qe(n, yn(ie()));
          var d = bp(t, function(m, $, V) {
            var k = Qe(n, function(F) {
              return F(m);
            });
            return { criteria: k, index: ++l, value: m };
          });
          return b$(d, function(m, $) {
            return lb(m, $, i);
          });
        }
        function Zy(t, n) {
          return kp(t, n, function(i, l) {
            return od(t, l);
          });
        }
        function kp(t, n, i) {
          for (var l = -1, d = n.length, m = {}; ++l < d; ) {
            var $ = n[l], V = Jo(t, $);
            i(V, $) && js(m, mo($, t), V);
          }
          return m;
        }
        function Xy(t) {
          return function(n) {
            return Jo(n, t);
          };
        }
        function Ac(t, n, i, l) {
          var d = l ? y$ : Ri, m = -1, $ = n.length, V = t;
          for (t === n && (n = sn(n)), i && (V = Qe(t, yn(i))); ++m < $; )
            for (var k = 0, F = n[m], U = i ? i(F) : F; (k = d(V, U, k, l)) > -1; )
              V !== t && dl.call(V, k, 1), dl.call(t, k, 1);
          return t;
        }
        function Tp(t, n) {
          for (var i = t ? n.length : 0, l = i - 1; i--; ) {
            var d = n[i];
            if (i == l || d !== m) {
              var m = d;
              Fr(d) ? dl.call(t, d, 1) : Lc(t, d);
            }
          }
          return t;
        }
        function xc(t, n) {
          return t + pl(lp() * (n - t + 1));
        }
        function Jy(t, n, i, l) {
          for (var d = -1, m = yt(hl((n - t) / (i || 1)), 0), $ = L(m); m--; )
            $[l ? m : ++d] = t, t += i;
          return $;
        }
        function Oc(t, n) {
          var i = "";
          if (!t || n < 1 || n > nt)
            return i;
          do
            n % 2 && (i += t), n = pl(n / 2), n && (t += t);
          while (n);
          return i;
        }
        function we(t, n) {
          return Kc(om(t, n, un), t + "");
        }
        function Qy(t) {
          return dp(zi(t));
        }
        function eb(t, n) {
          var i = zi(t);
          return xl(i, Xo(n, 0, i.length));
        }
        function js(t, n, i, l) {
          if (!it(t))
            return t;
          n = mo(n, t);
          for (var d = -1, m = n.length, $ = m - 1, V = t; V != null && ++d < m; ) {
            var k = rr(n[d]), F = i;
            if (k === "__proto__" || k === "constructor" || k === "prototype")
              return t;
            if (d != $) {
              var U = V[k];
              F = l ? l(U, k, V) : r, F === r && (F = it(U) ? U : Fr(n[d + 1]) ? [] : {});
            }
            Ws(V, k, F), V = V[k];
          }
          return t;
        }
        var Ip = ml ? function(t, n) {
          return ml.set(t, n), t;
        } : un, tb = fl ? function(t, n) {
          return fl(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: sd(n),
            writable: !0
          });
        } : un;
        function nb(t) {
          return xl(zi(t));
        }
        function Un(t, n, i) {
          var l = -1, d = t.length;
          n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
          for (var m = L(d); ++l < d; )
            m[l] = t[l + n];
          return m;
        }
        function rb(t, n) {
          var i;
          return ho(t, function(l, d, m) {
            return i = n(l, d, m), !i;
          }), !!i;
        }
        function bl(t, n, i) {
          var l = 0, d = t == null ? l : t.length;
          if (typeof n == "number" && n === n && d <= Ye) {
            for (; l < d; ) {
              var m = l + d >>> 1, $ = t[m];
              $ !== null && !Vn($) && (i ? $ <= n : $ < n) ? l = m + 1 : d = m;
            }
            return d;
          }
          return Rc(t, n, un, i);
        }
        function Rc(t, n, i, l) {
          var d = 0, m = t == null ? 0 : t.length;
          if (m === 0)
            return 0;
          n = i(n);
          for (var $ = n !== n, V = n === null, k = Vn(n), F = n === r; d < m; ) {
            var U = pl((d + m) / 2), H = i(t[U]), Y = H !== r, ee = H === null, ae = H === H, pe = Vn(H);
            if ($)
              var oe = l || ae;
            else F ? oe = ae && (l || Y) : V ? oe = ae && Y && (l || !ee) : k ? oe = ae && Y && !ee && (l || !pe) : ee || pe ? oe = !1 : oe = l ? H <= n : H < n;
            oe ? d = U + 1 : m = U;
          }
          return Ft(m, se);
        }
        function Ap(t, n) {
          for (var i = -1, l = t.length, d = 0, m = []; ++i < l; ) {
            var $ = t[i], V = n ? n($) : $;
            if (!i || !or(V, k)) {
              var k = V;
              m[d++] = $ === 0 ? 0 : $;
            }
          }
          return m;
        }
        function xp(t) {
          return typeof t == "number" ? t : Vn(t) ? A : +t;
        }
        function bn(t) {
          if (typeof t == "string")
            return t;
          if (de(t))
            return Qe(t, bn) + "";
          if (Vn(t))
            return up ? up.call(t) : "";
          var n = t + "";
          return n == "0" && 1 / t == -qe ? "-0" : n;
        }
        function po(t, n, i) {
          var l = -1, d = tl, m = t.length, $ = !0, V = [], k = V;
          if (i)
            $ = !1, d = lc;
          else if (m >= a) {
            var F = n ? null : pb(t);
            if (F)
              return rl(F);
            $ = !1, d = Ds, k = new Zo();
          } else
            k = n ? [] : V;
          e:
            for (; ++l < m; ) {
              var U = t[l], H = n ? n(U) : U;
              if (U = i || U !== 0 ? U : 0, $ && H === H) {
                for (var Y = k.length; Y--; )
                  if (k[Y] === H)
                    continue e;
                n && k.push(H), V.push(U);
              } else d(k, H, i) || (k !== V && k.push(H), V.push(U));
            }
          return V;
        }
        function Lc(t, n) {
          n = mo(n, t);
          var i = -1, l = n.length;
          if (!l)
            return !0;
          for (; ++i < l; ) {
            var d = rr(n[i]);
            if (d === "__proto__" && !De.call(t, "__proto__") || (d === "constructor" || d === "prototype") && i < l - 1)
              return !1;
          }
          var m = im(t, n);
          return m == null || delete m[rr(qn(n))];
        }
        function Op(t, n, i, l) {
          return js(t, n, i(Jo(t, n)), l);
        }
        function Vl(t, n, i, l) {
          for (var d = t.length, m = l ? d : -1; (l ? m-- : ++m < d) && n(t[m], m, t); )
            ;
          return i ? Un(t, l ? 0 : m, l ? m + 1 : d) : Un(t, l ? m + 1 : 0, l ? d : m);
        }
        function Rp(t, n) {
          var i = t;
          return i instanceof Ce && (i = i.value()), uc(n, function(l, d) {
            return d.func.apply(d.thisArg, uo([l], d.args));
          }, i);
        }
        function Nc(t, n, i) {
          var l = t.length;
          if (l < 2)
            return l ? po(t[0]) : [];
          for (var d = -1, m = L(l); ++d < l; )
            for (var $ = t[d], V = -1; ++V < l; )
              V != d && (m[d] = zs(m[d] || $, t[V], n, i));
          return po(At(m, 1), n, i);
        }
        function Lp(t, n, i) {
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
          return typeof t == "function" ? t : un;
        }
        function mo(t, n) {
          return de(t) ? t : Gc(t, n) ? [t] : um(Me(t));
        }
        var ob = we;
        function vo(t, n, i) {
          var l = t.length;
          return i = i === r ? l : i, !n && i >= l ? t : Un(t, n, i);
        }
        var Np = z$ || function(t) {
          return It.clearTimeout(t);
        };
        function Bp(t, n) {
          if (n)
            return t.slice();
          var i = t.length, l = rp ? rp(i) : new t.constructor(i);
          return t.copy(l), l;
        }
        function Dc(t) {
          var n = new t.constructor(t.byteLength);
          return new ul(n).set(new ul(t)), n;
        }
        function ib(t, n) {
          var i = n ? Dc(t.buffer) : t.buffer;
          return new t.constructor(i, t.byteOffset, t.byteLength);
        }
        function sb(t) {
          var n = new t.constructor(t.source, Os.exec(t));
          return n.lastIndex = t.lastIndex, n;
        }
        function ab(t) {
          return Hs ? ze(Hs.call(t)) : {};
        }
        function Pp(t, n) {
          var i = n ? Dc(t.buffer) : t.buffer;
          return new t.constructor(i, t.byteOffset, t.length);
        }
        function Dp(t, n) {
          if (t !== n) {
            var i = t !== r, l = t === null, d = t === t, m = Vn(t), $ = n !== r, V = n === null, k = n === n, F = Vn(n);
            if (!V && !F && !m && t > n || m && $ && k && !V && !F || l && $ && k || !i && k || !d)
              return 1;
            if (!l && !m && !F && t < n || F && i && d && !l && !m || V && i && d || !$ && d || !k)
              return -1;
          }
          return 0;
        }
        function lb(t, n, i) {
          for (var l = -1, d = t.criteria, m = n.criteria, $ = d.length, V = i.length; ++l < $; ) {
            var k = Dp(d[l], m[l]);
            if (k) {
              if (l >= V)
                return k;
              var F = i[l];
              return k * (F == "desc" ? -1 : 1);
            }
          }
          return t.index - n.index;
        }
        function Mp(t, n, i, l) {
          for (var d = -1, m = t.length, $ = i.length, V = -1, k = n.length, F = yt(m - $, 0), U = L(k + F), H = !l; ++V < k; )
            U[V] = n[V];
          for (; ++d < $; )
            (H || d < m) && (U[i[d]] = t[d]);
          for (; F--; )
            U[V++] = t[d++];
          return U;
        }
        function Fp(t, n, i, l) {
          for (var d = -1, m = t.length, $ = -1, V = i.length, k = -1, F = n.length, U = yt(m - V, 0), H = L(U + F), Y = !l; ++d < U; )
            H[d] = t[d];
          for (var ee = d; ++k < F; )
            H[ee + k] = n[k];
          for (; ++$ < V; )
            (Y || d < m) && (H[ee + i[$]] = t[d++]);
          return H;
        }
        function sn(t, n) {
          var i = -1, l = t.length;
          for (n || (n = L(l)); ++i < l; )
            n[i] = t[i];
          return n;
        }
        function _r(t, n, i, l) {
          var d = !i;
          i || (i = {});
          for (var m = -1, $ = n.length; ++m < $; ) {
            var V = n[m], k = l ? l(i[V], t[V], V, i, t) : r;
            k === r && (k = t[V]), d ? vr(i, V, k) : Ws(i, V, k);
          }
          return i;
        }
        function ub(t, n) {
          return _r(t, zc(t), n);
        }
        function cb(t, n) {
          return _r(t, Qp(t), n);
        }
        function Cl(t, n) {
          return function(i, l) {
            var d = de(i) ? m$ : Oy, m = n ? n() : {};
            return d(i, t, ie(l, 2), m);
          };
        }
        function Ui(t) {
          return we(function(n, i) {
            var l = -1, d = i.length, m = d > 1 ? i[d - 1] : r, $ = d > 2 ? i[2] : r;
            for (m = t.length > 3 && typeof m == "function" ? (d--, m) : r, $ && Xt(i[0], i[1], $) && (m = d < 3 ? r : m, d = 1), n = ze(n); ++l < d; ) {
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
            if (!an(i))
              return t(i, l);
            for (var d = i.length, m = n ? d : -1, $ = ze(i); (n ? m-- : ++m < d) && l($[m], m, $) !== !1; )
              ;
            return i;
          };
        }
        function qp(t) {
          return function(n, i, l) {
            for (var d = -1, m = ze(n), $ = l(n), V = $.length; V--; ) {
              var k = $[t ? V : ++d];
              if (i(m[k], k, m) === !1)
                break;
            }
            return n;
          };
        }
        function db(t, n, i) {
          var l = n & E, d = Ks(t);
          function m() {
            var $ = this && this !== It && this instanceof m ? d : t;
            return $.apply(l ? i : this, arguments);
          }
          return m;
        }
        function Hp(t) {
          return function(n) {
            n = Me(n);
            var i = Li(n) ? tr(n) : r, l = i ? i[0] : n.charAt(0), d = i ? vo(i, 1).join("") : n.slice(1);
            return l[t]() + d;
          };
        }
        function qi(t) {
          return function(n) {
            return uc(qm(Um(n).replace(t$, "")), t, "");
          };
        }
        function Ks(t) {
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
            var i = Fi(t.prototype), l = t.apply(i, n);
            return it(l) ? l : i;
          };
        }
        function fb(t, n, i) {
          var l = Ks(t);
          function d() {
            for (var m = arguments.length, $ = L(m), V = m, k = Hi(d); V--; )
              $[V] = arguments[V];
            var F = m < 3 && $[0] !== k && $[m - 1] !== k ? [] : co($, k);
            if (m -= F.length, m < i)
              return jp(
                t,
                n,
                El,
                d.placeholder,
                r,
                $,
                F,
                r,
                r,
                i - m
              );
            var U = this && this !== It && this instanceof d ? l : t;
            return gn(U, this, $);
          }
          return d;
        }
        function Wp(t) {
          return function(n, i, l) {
            var d = ze(n);
            if (!an(n)) {
              var m = ie(i, 3);
              n = St(n), i = function(V) {
                return m(d[V], V, d);
              };
            }
            var $ = t(n, i, l);
            return $ > -1 ? d[m ? n[$] : $] : r;
          };
        }
        function zp(t) {
          return Mr(function(n) {
            var i = n.length, l = i, d = Mn.prototype.thru;
            for (t && n.reverse(); l--; ) {
              var m = n[l];
              if (typeof m != "function")
                throw new Dn(c);
              if (d && !$ && Il(m) == "wrapper")
                var $ = new Mn([], !0);
            }
            for (l = $ ? l : i; ++l < i; ) {
              m = n[l];
              var V = Il(m), k = V == "wrapper" ? Hc(m) : r;
              k && Yc(k[0]) && k[1] == (j | P | M | J) && !k[4].length && k[9] == 1 ? $ = $[Il(k[0])].apply($, k[3]) : $ = m.length == 1 && Yc(m) ? $[V]() : $.thru(m);
            }
            return function() {
              var F = arguments, U = F[0];
              if ($ && F.length == 1 && de(U))
                return $.plant(U).value();
              for (var H = 0, Y = i ? n[H].apply(this, F) : U; ++H < i; )
                Y = n[H].call(this, Y);
              return Y;
            };
          });
        }
        function El(t, n, i, l, d, m, $, V, k, F) {
          var U = n & j, H = n & E, Y = n & I, ee = n & (P | q), ae = n & ne, pe = Y ? r : Ks(t);
          function oe() {
            for (var $e = arguments.length, Te = L($e), Cn = $e; Cn--; )
              Te[Cn] = arguments[Cn];
            if (ee)
              var Jt = Hi(oe), En = C$(Te, Jt);
            if (l && (Te = Mp(Te, l, d, ee)), m && (Te = Fp(Te, m, $, ee)), $e -= En, ee && $e < F) {
              var ct = co(Te, Jt);
              return jp(
                t,
                n,
                El,
                oe.placeholder,
                i,
                Te,
                ct,
                V,
                k,
                F - $e
              );
            }
            var ir = H ? i : this, Hr = Y ? ir[t] : t;
            return $e = Te.length, V ? Te = Ob(Te, V) : ae && $e > 1 && Te.reverse(), U && k < $e && (Te.length = k), this && this !== It && this instanceof oe && (Hr = pe || Ks(Hr)), Hr.apply(ir, Te);
          }
          return oe;
        }
        function Gp(t, n) {
          return function(i, l) {
            return Fy(i, t, n(l), {});
          };
        }
        function Sl(t, n) {
          return function(i, l) {
            var d;
            if (i === r && l === r)
              return n;
            if (i !== r && (d = i), l !== r) {
              if (d === r)
                return l;
              typeof i == "string" || typeof l == "string" ? (i = bn(i), l = bn(l)) : (i = xp(i), l = xp(l)), d = t(i, l);
            }
            return d;
          };
        }
        function Mc(t) {
          return Mr(function(n) {
            return n = Qe(n, yn(ie())), we(function(i) {
              var l = this;
              return t(n, function(d) {
                return gn(d, l, i);
              });
            });
          });
        }
        function kl(t, n) {
          n = n === r ? " " : bn(n);
          var i = n.length;
          if (i < 2)
            return i ? Oc(n, t) : n;
          var l = Oc(n, hl(t / Ni(n)));
          return Li(n) ? vo(tr(l), 0, t).join("") : l.slice(0, t);
        }
        function hb(t, n, i, l) {
          var d = n & E, m = Ks(t);
          function $() {
            for (var V = -1, k = arguments.length, F = -1, U = l.length, H = L(U + k), Y = this && this !== It && this instanceof $ ? m : t; ++F < U; )
              H[F] = l[F];
            for (; k--; )
              H[F++] = arguments[++V];
            return gn(Y, d ? i : this, H);
          }
          return $;
        }
        function Yp(t) {
          return function(n, i, l) {
            return l && typeof l != "number" && Xt(n, i, l) && (i = l = r), n = qr(n), i === r ? (i = n, n = 0) : i = qr(i), l = l === r ? n < i ? 1 : -1 : qr(l), Jy(n, i, l, t);
          };
        }
        function Tl(t) {
          return function(n, i) {
            return typeof n == "string" && typeof i == "string" || (n = Hn(n), i = Hn(i)), t(n, i);
          };
        }
        function jp(t, n, i, l, d, m, $, V, k, F) {
          var U = n & P, H = U ? $ : r, Y = U ? r : $, ee = U ? m : r, ae = U ? r : m;
          n |= U ? M : N, n &= ~(U ? N : M), n & R || (n &= -4);
          var pe = [
            t,
            n,
            d,
            ee,
            H,
            ae,
            Y,
            V,
            k,
            F
          ], oe = i.apply(r, pe);
          return Yc(t) && sm(oe, pe), oe.placeholder = l, am(oe, t, n);
        }
        function Fc(t) {
          var n = $t[t];
          return function(i, l) {
            if (i = Hn(i), l = l == null ? 0 : Ft(he(l), 292), l && ap(i)) {
              var d = (Me(i) + "e").split("e"), m = n(d[0] + "e" + (+d[1] + l));
              return d = (Me(m) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
            }
            return n(i);
          };
        }
        var pb = Di && 1 / rl(new Di([, -0]))[1] == qe ? function(t) {
          return new Di(t);
        } : ud;
        function Kp(t) {
          return function(n) {
            var i = Ut(n);
            return i == ve ? vc(n) : i == Mt ? x$(n) : V$(n, t(n));
          };
        }
        function Dr(t, n, i, l, d, m, $, V) {
          var k = n & I;
          if (!k && typeof t != "function")
            throw new Dn(c);
          var F = l ? l.length : 0;
          if (F || (n &= -97, l = d = r), $ = $ === r ? $ : yt(he($), 0), V = V === r ? V : he(V), F -= d ? d.length : 0, n & N) {
            var U = l, H = d;
            l = d = r;
          }
          var Y = k ? r : Hc(t), ee = [
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
          if (Y && Ib(ee, Y), t = ee[0], n = ee[1], i = ee[2], l = ee[3], d = ee[4], V = ee[9] = ee[9] === r ? k ? 0 : t.length : yt(ee[9] - F, 0), !V && n & (P | q) && (n &= -25), !n || n == E)
            var ae = db(t, n, i);
          else n == P || n == q ? ae = fb(t, n, V) : (n == M || n == (E | M)) && !d.length ? ae = hb(t, n, i, l) : ae = El.apply(r, ee);
          var pe = Y ? Ip : sm;
          return am(pe(ae, ee), t, n);
        }
        function Zp(t, n, i, l) {
          return t === r || or(t, Pi[i]) && !De.call(l, i) ? n : t;
        }
        function Xp(t, n, i, l, d, m) {
          return it(t) && it(n) && (m.set(n, t), yl(t, n, r, Xp, m), m.delete(n)), t;
        }
        function mb(t) {
          return Js(t) ? r : t;
        }
        function Jp(t, n, i, l, d, m) {
          var $ = i & T, V = t.length, k = n.length;
          if (V != k && !($ && k > V))
            return !1;
          var F = m.get(t), U = m.get(n);
          if (F && U)
            return F == n && U == t;
          var H = -1, Y = !0, ee = i & O ? new Zo() : r;
          for (m.set(t, n), m.set(n, t); ++H < V; ) {
            var ae = t[H], pe = n[H];
            if (l)
              var oe = $ ? l(pe, ae, H, n, t, m) : l(ae, pe, H, t, n, m);
            if (oe !== r) {
              if (oe)
                continue;
              Y = !1;
              break;
            }
            if (ee) {
              if (!cc(n, function($e, Te) {
                if (!Ds(ee, Te) && (ae === $e || d(ae, $e, i, l, m)))
                  return ee.push(Te);
              })) {
                Y = !1;
                break;
              }
            } else if (!(ae === pe || d(ae, pe, i, l, m))) {
              Y = !1;
              break;
            }
          }
          return m.delete(t), m.delete(n), Y;
        }
        function vb(t, n, i, l, d, m, $) {
          switch (i) {
            case vn:
              if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
                return !1;
              t = t.buffer, n = n.buffer;
            case Ln:
              return !(t.byteLength != n.byteLength || !m(new ul(t), new ul(n)));
            case rn:
            case Zn:
            case Dt:
              return or(+t, +n);
            case Tr:
              return t.name == n.name && t.message == n.message;
            case mn:
            case pt:
              return t == n + "";
            case ve:
              var V = vc;
            case Mt:
              var k = l & T;
              if (V || (V = rl), t.size != n.size && !k)
                return !1;
              var F = $.get(t);
              if (F)
                return F == n;
              l |= O, $.set(t, n);
              var U = Jp(V(t), V(n), l, d, m, $);
              return $.delete(t), U;
            case Rn:
              if (Hs)
                return Hs.call(t) == Hs.call(n);
          }
          return !1;
        }
        function wb(t, n, i, l, d, m) {
          var $ = i & T, V = Uc(t), k = V.length, F = Uc(n), U = F.length;
          if (k != U && !$)
            return !1;
          for (var H = k; H--; ) {
            var Y = V[H];
            if (!($ ? Y in n : De.call(n, Y)))
              return !1;
          }
          var ee = m.get(t), ae = m.get(n);
          if (ee && ae)
            return ee == n && ae == t;
          var pe = !0;
          m.set(t, n), m.set(n, t);
          for (var oe = $; ++H < k; ) {
            Y = V[H];
            var $e = t[Y], Te = n[Y];
            if (l)
              var Cn = $ ? l(Te, $e, Y, n, t, m) : l($e, Te, Y, t, n, m);
            if (!(Cn === r ? $e === Te || d($e, Te, i, l, m) : Cn)) {
              pe = !1;
              break;
            }
            oe || (oe = Y == "constructor");
          }
          if (pe && !oe) {
            var Jt = t.constructor, En = n.constructor;
            Jt != En && "constructor" in t && "constructor" in n && !(typeof Jt == "function" && Jt instanceof Jt && typeof En == "function" && En instanceof En) && (pe = !1);
          }
          return m.delete(t), m.delete(n), pe;
        }
        function Mr(t) {
          return Kc(om(t, r, hm), t + "");
        }
        function Uc(t) {
          return _p(t, St, zc);
        }
        function qc(t) {
          return _p(t, ln, Qp);
        }
        var Hc = ml ? function(t) {
          return ml.get(t);
        } : ud;
        function Il(t) {
          for (var n = t.name + "", i = Mi[n], l = De.call(Mi, n) ? i.length : 0; l--; ) {
            var d = i[l], m = d.func;
            if (m == null || m == t)
              return d.name;
          }
          return n;
        }
        function Hi(t) {
          var n = De.call(h, "placeholder") ? h : t;
          return n.placeholder;
        }
        function ie() {
          var t = h.iteratee || ad;
          return t = t === ad ? yp : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function Al(t, n) {
          var i = t.__data__;
          return Eb(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
        }
        function Wc(t) {
          for (var n = St(t), i = n.length; i--; ) {
            var l = n[i], d = t[l];
            n[i] = [l, d, nm(d)];
          }
          return n;
        }
        function Qo(t, n) {
          var i = T$(t, n);
          return $p(i) ? i : r;
        }
        function _b(t) {
          var n = De.call(t, jo), i = t[jo];
          try {
            t[jo] = r;
            var l = !0;
          } catch {
          }
          var d = al.call(t);
          return l && (n ? t[jo] = i : delete t[jo]), d;
        }
        var zc = _c ? function(t) {
          return t == null ? [] : (t = ze(t), lo(_c(t), function(n) {
            return ip.call(t, n);
          }));
        } : cd, Qp = _c ? function(t) {
          for (var n = []; t; )
            uo(n, zc(t)), t = cl(t);
          return n;
        } : cd, Ut = Zt;
        (gc && Ut(new gc(new ArrayBuffer(1))) != vn || Fs && Ut(new Fs()) != ve || $c && Ut($c.resolve()) != Jr || Di && Ut(new Di()) != Mt || Us && Ut(new Us()) != Jn) && (Ut = function(t) {
          var n = Zt(t), i = n == rt ? t.constructor : r, l = i ? ei(i) : "";
          if (l)
            switch (l) {
              case ey:
                return vn;
              case ty:
                return ve;
              case ny:
                return Jr;
              case ry:
                return Mt;
              case oy:
                return Jn;
            }
          return n;
        });
        function gb(t, n, i) {
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
                n = Ft(n, t + $);
                break;
              case "takeRight":
                t = yt(t, n - $);
                break;
            }
          }
          return { start: t, end: n };
        }
        function $b(t) {
          var n = t.match(Fo);
          return n ? n[1].split(Zu) : [];
        }
        function em(t, n, i) {
          n = mo(n, t);
          for (var l = -1, d = n.length, m = !1; ++l < d; ) {
            var $ = rr(n[l]);
            if (!(m = t != null && i(t, $)))
              break;
            t = t[$];
          }
          return m || ++l != d ? m : (d = t == null ? 0 : t.length, !!d && Pl(d) && Fr($, d) && (de(t) || ti(t)));
        }
        function yb(t) {
          var n = t.length, i = new t.constructor(n);
          return n && typeof t[0] == "string" && De.call(t, "index") && (i.index = t.index, i.input = t.input), i;
        }
        function tm(t) {
          return typeof t.constructor == "function" && !Zs(t) ? Fi(cl(t)) : {};
        }
        function bb(t, n, i) {
          var l = t.constructor;
          switch (n) {
            case Ln:
              return Dc(t);
            case rn:
            case Zn:
              return new l(+t);
            case vn:
              return ib(t, i);
            case wn:
            case Qn:
            case er:
            case Ar:
            case xr:
            case Or:
            case hr:
            case pr:
            case _n:
              return Pp(t, i);
            case ve:
              return new l();
            case Dt:
            case pt:
              return new l(t);
            case mn:
              return sb(t);
            case Mt:
              return new l();
            case Rn:
              return ab(t);
          }
        }
        function Vb(t, n) {
          var i = n.length;
          if (!i)
            return t;
          var l = i - 1;
          return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), t.replace(Ti, `{
/* [wrapped with ` + n + `] */
`);
        }
        function Cb(t) {
          return de(t) || ti(t) || !!(sp && t && t[sp]);
        }
        function Fr(t, n) {
          var i = typeof t;
          return n = n ?? nt, !!n && (i == "number" || i != "symbol" && ec.test(t)) && t > -1 && t % 1 == 0 && t < n;
        }
        function Xt(t, n, i) {
          if (!it(i))
            return !1;
          var l = typeof n;
          return (l == "number" ? an(i) && Fr(n, i.length) : l == "string" && n in i) ? or(i[n], t) : !1;
        }
        function Gc(t, n) {
          if (de(t))
            return !1;
          var i = typeof t;
          return i == "number" || i == "symbol" || i == "boolean" || t == null || Vn(t) ? !0 : ro.test(t) || !no.test(t) || n != null && t in ze(n);
        }
        function Eb(t) {
          var n = typeof t;
          return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
        }
        function Yc(t) {
          var n = Il(t), i = h[n];
          if (typeof i != "function" || !(n in Ce.prototype))
            return !1;
          if (t === i)
            return !0;
          var l = Hc(i);
          return !!l && t === l[0];
        }
        function Sb(t) {
          return !!np && np in t;
        }
        var kb = il ? Ur : dd;
        function Zs(t) {
          var n = t && t.constructor, i = typeof n == "function" && n.prototype || Pi;
          return t === i;
        }
        function nm(t) {
          return t === t && !it(t);
        }
        function rm(t, n) {
          return function(i) {
            return i == null ? !1 : i[t] === n && (n !== r || t in ze(i));
          };
        }
        function Tb(t) {
          var n = Nl(t, function(l) {
            return i.size === w && i.clear(), l;
          }), i = n.cache;
          return n;
        }
        function Ib(t, n) {
          var i = t[1], l = n[1], d = i | l, m = d < (E | I | j), $ = l == j && i == P || l == j && i == J && t[7].length <= n[8] || l == (j | J) && n[7].length <= n[8] && i == P;
          if (!(m || $))
            return t;
          l & E && (t[2] = n[2], d |= i & E ? 0 : R);
          var V = n[3];
          if (V) {
            var k = t[3];
            t[3] = k ? Mp(k, V, n[4]) : V, t[4] = k ? co(t[3], g) : n[4];
          }
          return V = n[5], V && (k = t[5], t[5] = k ? Fp(k, V, n[6]) : V, t[6] = k ? co(t[5], g) : n[6]), V = n[7], V && (t[7] = V), l & j && (t[8] = t[8] == null ? n[8] : Ft(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
        }
        function Ab(t) {
          var n = [];
          if (t != null)
            for (var i in ze(t))
              n.push(i);
          return n;
        }
        function xb(t) {
          return al.call(t);
        }
        function om(t, n, i) {
          return n = yt(n === r ? t.length - 1 : n, 0), function() {
            for (var l = arguments, d = -1, m = yt(l.length - n, 0), $ = L(m); ++d < m; )
              $[d] = l[n + d];
            d = -1;
            for (var V = L(n + 1); ++d < n; )
              V[d] = l[d];
            return V[n] = i($), gn(t, this, V);
          };
        }
        function im(t, n) {
          return n.length < 2 ? t : Jo(t, Un(n, 0, -1));
        }
        function Ob(t, n) {
          for (var i = t.length, l = Ft(n.length, i), d = sn(t); l--; ) {
            var m = n[l];
            t[l] = Fr(m, i) ? d[m] : r;
          }
          return t;
        }
        function jc(t, n) {
          if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
            return t[n];
        }
        var sm = lm(Ip), Xs = Y$ || function(t, n) {
          return It.setTimeout(t, n);
        }, Kc = lm(tb);
        function am(t, n, i) {
          var l = n + "";
          return Kc(t, Vb(l, Rb($b(l), i)));
        }
        function lm(t) {
          var n = 0, i = 0;
          return function() {
            var l = X$(), d = ye - (l - i);
            if (i = l, d > 0) {
              if (++n >= Ae)
                return arguments[0];
            } else
              n = 0;
            return t.apply(r, arguments);
          };
        }
        function xl(t, n) {
          var i = -1, l = t.length, d = l - 1;
          for (n = n === r ? l : n; ++i < n; ) {
            var m = xc(i, d), $ = t[m];
            t[m] = t[i], t[i] = $;
          }
          return t.length = n, t;
        }
        var um = Tb(function(t) {
          var n = [];
          return t.charCodeAt(0) === 46 && n.push(""), t.replace(ki, function(i, l, d, m) {
            n.push(d ? m.replace(so, "$1") : l || i);
          }), n;
        });
        function rr(t) {
          if (typeof t == "string" || Vn(t))
            return t;
          var n = t + "";
          return n == "0" && 1 / t == -qe ? "-0" : n;
        }
        function ei(t) {
          if (t != null) {
            try {
              return sl.call(t);
            } catch {
            }
            try {
              return t + "";
            } catch {
            }
          }
          return "";
        }
        function Rb(t, n) {
          return $n(be, function(i) {
            var l = "_." + i[0];
            n & i[1] && !tl(t, l) && t.push(l);
          }), t.sort();
        }
        function cm(t) {
          if (t instanceof Ce)
            return t.clone();
          var n = new Mn(t.__wrapped__, t.__chain__);
          return n.__actions__ = sn(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
        }
        function Lb(t, n, i) {
          (i ? Xt(t, n, i) : n === r) ? n = 1 : n = yt(he(n), 0);
          var l = t == null ? 0 : t.length;
          if (!l || n < 1)
            return [];
          for (var d = 0, m = 0, $ = L(hl(l / n)); d < l; )
            $[m++] = Un(t, d, d += n);
          return $;
        }
        function Nb(t) {
          for (var n = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++n < i; ) {
            var m = t[n];
            m && (d[l++] = m);
          }
          return d;
        }
        function Bb() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var n = L(t - 1), i = arguments[0], l = t; l--; )
            n[l - 1] = arguments[l];
          return uo(de(i) ? sn(i) : [i], At(n, 1));
        }
        var Pb = we(function(t, n) {
          return ut(t) ? zs(t, At(n, 1, ut, !0)) : [];
        }), Db = we(function(t, n) {
          var i = qn(n);
          return ut(i) && (i = r), ut(t) ? zs(t, At(n, 1, ut, !0), ie(i, 2)) : [];
        }), Mb = we(function(t, n) {
          var i = qn(n);
          return ut(i) && (i = r), ut(t) ? zs(t, At(n, 1, ut, !0), r, i) : [];
        });
        function Fb(t, n, i) {
          var l = t == null ? 0 : t.length;
          return l ? (n = i || n === r ? 1 : he(n), Un(t, n < 0 ? 0 : n, l)) : [];
        }
        function Ub(t, n, i) {
          var l = t == null ? 0 : t.length;
          return l ? (n = i || n === r ? 1 : he(n), n = l - n, Un(t, 0, n < 0 ? 0 : n)) : [];
        }
        function qb(t, n) {
          return t && t.length ? Vl(t, ie(n, 3), !0, !0) : [];
        }
        function Hb(t, n) {
          return t && t.length ? Vl(t, ie(n, 3), !0) : [];
        }
        function Wb(t, n, i, l) {
          var d = t == null ? 0 : t.length;
          return d ? (i && typeof i != "number" && Xt(t, n, i) && (i = 0, l = d), By(t, n, i, l)) : [];
        }
        function dm(t, n, i) {
          var l = t == null ? 0 : t.length;
          if (!l)
            return -1;
          var d = i == null ? 0 : he(i);
          return d < 0 && (d = yt(l + d, 0)), nl(t, ie(n, 3), d);
        }
        function fm(t, n, i) {
          var l = t == null ? 0 : t.length;
          if (!l)
            return -1;
          var d = l - 1;
          return i !== r && (d = he(i), d = i < 0 ? yt(l + d, 0) : Ft(d, l - 1)), nl(t, ie(n, 3), d, !0);
        }
        function hm(t) {
          var n = t == null ? 0 : t.length;
          return n ? At(t, 1) : [];
        }
        function zb(t) {
          var n = t == null ? 0 : t.length;
          return n ? At(t, qe) : [];
        }
        function Gb(t, n) {
          var i = t == null ? 0 : t.length;
          return i ? (n = n === r ? 1 : he(n), At(t, n)) : [];
        }
        function Yb(t) {
          for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
            var d = t[n];
            vr(l, d[0], d[1]);
          }
          return l;
        }
        function pm(t) {
          return t && t.length ? t[0] : r;
        }
        function jb(t, n, i) {
          var l = t == null ? 0 : t.length;
          if (!l)
            return -1;
          var d = i == null ? 0 : he(i);
          return d < 0 && (d = yt(l + d, 0)), Ri(t, n, d);
        }
        function Kb(t) {
          var n = t == null ? 0 : t.length;
          return n ? Un(t, 0, -1) : [];
        }
        var Zb = we(function(t) {
          var n = Qe(t, Bc);
          return n.length && n[0] === t[0] ? Sc(n) : [];
        }), Xb = we(function(t) {
          var n = qn(t), i = Qe(t, Bc);
          return n === qn(i) ? n = r : i.pop(), i.length && i[0] === t[0] ? Sc(i, ie(n, 2)) : [];
        }), Jb = we(function(t) {
          var n = qn(t), i = Qe(t, Bc);
          return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === t[0] ? Sc(i, r, n) : [];
        });
        function Qb(t, n) {
          return t == null ? "" : K$.call(t, n);
        }
        function qn(t) {
          var n = t == null ? 0 : t.length;
          return n ? t[n - 1] : r;
        }
        function eV(t, n, i) {
          var l = t == null ? 0 : t.length;
          if (!l)
            return -1;
          var d = l;
          return i !== r && (d = he(i), d = d < 0 ? yt(l + d, 0) : Ft(d, l - 1)), n === n ? R$(t, n, d) : nl(t, jh, d, !0);
        }
        function tV(t, n) {
          return t && t.length ? Ep(t, he(n)) : r;
        }
        var nV = we(mm);
        function mm(t, n) {
          return t && t.length && n && n.length ? Ac(t, n) : t;
        }
        function rV(t, n, i) {
          return t && t.length && n && n.length ? Ac(t, n, ie(i, 2)) : t;
        }
        function oV(t, n, i) {
          return t && t.length && n && n.length ? Ac(t, n, r, i) : t;
        }
        var iV = Mr(function(t, n) {
          var i = t == null ? 0 : t.length, l = bc(t, n);
          return Tp(t, Qe(n, function(d) {
            return Fr(d, i) ? +d : d;
          }).sort(Dp)), l;
        });
        function sV(t, n) {
          var i = [];
          if (!(t && t.length))
            return i;
          var l = -1, d = [], m = t.length;
          for (n = ie(n, 3); ++l < m; ) {
            var $ = t[l];
            n($, l, t) && (i.push($), d.push(l));
          }
          return Tp(t, d), i;
        }
        function Zc(t) {
          return t == null ? t : Q$.call(t);
        }
        function aV(t, n, i) {
          var l = t == null ? 0 : t.length;
          return l ? (i && typeof i != "number" && Xt(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : he(n), i = i === r ? l : he(i)), Un(t, n, i)) : [];
        }
        function lV(t, n) {
          return bl(t, n);
        }
        function uV(t, n, i) {
          return Rc(t, n, ie(i, 2));
        }
        function cV(t, n) {
          var i = t == null ? 0 : t.length;
          if (i) {
            var l = bl(t, n);
            if (l < i && or(t[l], n))
              return l;
          }
          return -1;
        }
        function dV(t, n) {
          return bl(t, n, !0);
        }
        function fV(t, n, i) {
          return Rc(t, n, ie(i, 2), !0);
        }
        function hV(t, n) {
          var i = t == null ? 0 : t.length;
          if (i) {
            var l = bl(t, n, !0) - 1;
            if (or(t[l], n))
              return l;
          }
          return -1;
        }
        function pV(t) {
          return t && t.length ? Ap(t) : [];
        }
        function mV(t, n) {
          return t && t.length ? Ap(t, ie(n, 2)) : [];
        }
        function vV(t) {
          var n = t == null ? 0 : t.length;
          return n ? Un(t, 1, n) : [];
        }
        function wV(t, n, i) {
          return t && t.length ? (n = i || n === r ? 1 : he(n), Un(t, 0, n < 0 ? 0 : n)) : [];
        }
        function _V(t, n, i) {
          var l = t == null ? 0 : t.length;
          return l ? (n = i || n === r ? 1 : he(n), n = l - n, Un(t, n < 0 ? 0 : n, l)) : [];
        }
        function gV(t, n) {
          return t && t.length ? Vl(t, ie(n, 3), !1, !0) : [];
        }
        function $V(t, n) {
          return t && t.length ? Vl(t, ie(n, 3)) : [];
        }
        var yV = we(function(t) {
          return po(At(t, 1, ut, !0));
        }), bV = we(function(t) {
          var n = qn(t);
          return ut(n) && (n = r), po(At(t, 1, ut, !0), ie(n, 2));
        }), VV = we(function(t) {
          var n = qn(t);
          return n = typeof n == "function" ? n : r, po(At(t, 1, ut, !0), r, n);
        });
        function CV(t) {
          return t && t.length ? po(t) : [];
        }
        function EV(t, n) {
          return t && t.length ? po(t, ie(n, 2)) : [];
        }
        function SV(t, n) {
          return n = typeof n == "function" ? n : r, t && t.length ? po(t, r, n) : [];
        }
        function Xc(t) {
          if (!(t && t.length))
            return [];
          var n = 0;
          return t = lo(t, function(i) {
            if (ut(i))
              return n = yt(i.length, n), !0;
          }), pc(n, function(i) {
            return Qe(t, dc(i));
          });
        }
        function vm(t, n) {
          if (!(t && t.length))
            return [];
          var i = Xc(t);
          return n == null ? i : Qe(i, function(l) {
            return gn(n, r, l);
          });
        }
        var kV = we(function(t, n) {
          return ut(t) ? zs(t, n) : [];
        }), TV = we(function(t) {
          return Nc(lo(t, ut));
        }), IV = we(function(t) {
          var n = qn(t);
          return ut(n) && (n = r), Nc(lo(t, ut), ie(n, 2));
        }), AV = we(function(t) {
          var n = qn(t);
          return n = typeof n == "function" ? n : r, Nc(lo(t, ut), r, n);
        }), xV = we(Xc);
        function OV(t, n) {
          return Lp(t || [], n || [], Ws);
        }
        function RV(t, n) {
          return Lp(t || [], n || [], js);
        }
        var LV = we(function(t) {
          var n = t.length, i = n > 1 ? t[n - 1] : r;
          return i = typeof i == "function" ? (t.pop(), i) : r, vm(t, i);
        });
        function wm(t) {
          var n = h(t);
          return n.__chain__ = !0, n;
        }
        function NV(t, n) {
          return n(t), t;
        }
        function Ol(t, n) {
          return n(t);
        }
        var BV = Mr(function(t) {
          var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(m) {
            return bc(m, t);
          };
          return n > 1 || this.__actions__.length || !(l instanceof Ce) || !Fr(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
            func: Ol,
            args: [d],
            thisArg: r
          }), new Mn(l, this.__chain__).thru(function(m) {
            return n && !m.length && m.push(r), m;
          }));
        });
        function PV() {
          return wm(this);
        }
        function DV() {
          return new Mn(this.value(), this.__chain__);
        }
        function MV() {
          this.__values__ === r && (this.__values__ = xm(this.value()));
          var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
          return { done: t, value: n };
        }
        function FV() {
          return this;
        }
        function UV(t) {
          for (var n, i = this; i instanceof wl; ) {
            var l = cm(i);
            l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
            var d = l;
            i = i.__wrapped__;
          }
          return d.__wrapped__ = t, n;
        }
        function qV() {
          var t = this.__wrapped__;
          if (t instanceof Ce) {
            var n = t;
            return this.__actions__.length && (n = new Ce(this)), n = n.reverse(), n.__actions__.push({
              func: Ol,
              args: [Zc],
              thisArg: r
            }), new Mn(n, this.__chain__);
          }
          return this.thru(Zc);
        }
        function HV() {
          return Rp(this.__wrapped__, this.__actions__);
        }
        var WV = Cl(function(t, n, i) {
          De.call(t, i) ? ++t[i] : vr(t, i, 1);
        });
        function zV(t, n, i) {
          var l = de(t) ? Gh : Ny;
          return i && Xt(t, n, i) && (n = r), l(t, ie(n, 3));
        }
        function GV(t, n) {
          var i = de(t) ? lo : vp;
          return i(t, ie(n, 3));
        }
        var YV = Wp(dm), jV = Wp(fm);
        function KV(t, n) {
          return At(Rl(t, n), 1);
        }
        function ZV(t, n) {
          return At(Rl(t, n), qe);
        }
        function XV(t, n, i) {
          return i = i === r ? 1 : he(i), At(Rl(t, n), i);
        }
        function _m(t, n) {
          var i = de(t) ? $n : ho;
          return i(t, ie(n, 3));
        }
        function gm(t, n) {
          var i = de(t) ? v$ : mp;
          return i(t, ie(n, 3));
        }
        var JV = Cl(function(t, n, i) {
          De.call(t, i) ? t[i].push(n) : vr(t, i, [n]);
        });
        function QV(t, n, i, l) {
          t = an(t) ? t : zi(t), i = i && !l ? he(i) : 0;
          var d = t.length;
          return i < 0 && (i = yt(d + i, 0)), Dl(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && Ri(t, n, i) > -1;
        }
        var eC = we(function(t, n, i) {
          var l = -1, d = typeof n == "function", m = an(t) ? L(t.length) : [];
          return ho(t, function($) {
            m[++l] = d ? gn(n, $, i) : Gs($, n, i);
          }), m;
        }), tC = Cl(function(t, n, i) {
          vr(t, i, n);
        });
        function Rl(t, n) {
          var i = de(t) ? Qe : bp;
          return i(t, ie(n, 3));
        }
        function nC(t, n, i, l) {
          return t == null ? [] : (de(n) || (n = n == null ? [] : [n]), i = l ? r : i, de(i) || (i = i == null ? [] : [i]), Sp(t, n, i));
        }
        var rC = Cl(function(t, n, i) {
          t[i ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function oC(t, n, i) {
          var l = de(t) ? uc : Zh, d = arguments.length < 3;
          return l(t, ie(n, 4), i, d, ho);
        }
        function iC(t, n, i) {
          var l = de(t) ? w$ : Zh, d = arguments.length < 3;
          return l(t, ie(n, 4), i, d, mp);
        }
        function sC(t, n) {
          var i = de(t) ? lo : vp;
          return i(t, Bl(ie(n, 3)));
        }
        function aC(t) {
          var n = de(t) ? dp : Qy;
          return n(t);
        }
        function lC(t, n, i) {
          (i ? Xt(t, n, i) : n === r) ? n = 1 : n = he(n);
          var l = de(t) ? Ay : eb;
          return l(t, n);
        }
        function uC(t) {
          var n = de(t) ? xy : nb;
          return n(t);
        }
        function cC(t) {
          if (t == null)
            return 0;
          if (an(t))
            return Dl(t) ? Ni(t) : t.length;
          var n = Ut(t);
          return n == ve || n == Mt ? t.size : Tc(t).length;
        }
        function dC(t, n, i) {
          var l = de(t) ? cc : rb;
          return i && Xt(t, n, i) && (n = r), l(t, ie(n, 3));
        }
        var fC = we(function(t, n) {
          if (t == null)
            return [];
          var i = n.length;
          return i > 1 && Xt(t, n[0], n[1]) ? n = [] : i > 2 && Xt(n[0], n[1], n[2]) && (n = [n[0]]), Sp(t, At(n, 1), []);
        }), Ll = G$ || function() {
          return It.Date.now();
        };
        function hC(t, n) {
          if (typeof n != "function")
            throw new Dn(c);
          return t = he(t), function() {
            if (--t < 1)
              return n.apply(this, arguments);
          };
        }
        function $m(t, n, i) {
          return n = i ? r : n, n = t && n == null ? t.length : n, Dr(t, j, r, r, r, r, n);
        }
        function ym(t, n) {
          var i;
          if (typeof n != "function")
            throw new Dn(c);
          return t = he(t), function() {
            return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = r), i;
          };
        }
        var Jc = we(function(t, n, i) {
          var l = E;
          if (i.length) {
            var d = co(i, Hi(Jc));
            l |= M;
          }
          return Dr(t, l, n, i, d);
        }), bm = we(function(t, n, i) {
          var l = E | I;
          if (i.length) {
            var d = co(i, Hi(bm));
            l |= M;
          }
          return Dr(n, l, t, i, d);
        });
        function Vm(t, n, i) {
          n = i ? r : n;
          var l = Dr(t, P, r, r, r, r, r, n);
          return l.placeholder = Vm.placeholder, l;
        }
        function Cm(t, n, i) {
          n = i ? r : n;
          var l = Dr(t, q, r, r, r, r, r, n);
          return l.placeholder = Cm.placeholder, l;
        }
        function Em(t, n, i) {
          var l, d, m, $, V, k, F = 0, U = !1, H = !1, Y = !0;
          if (typeof t != "function")
            throw new Dn(c);
          n = Hn(n) || 0, it(i) && (U = !!i.leading, H = "maxWait" in i, m = H ? yt(Hn(i.maxWait) || 0, n) : m, Y = "trailing" in i ? !!i.trailing : Y);
          function ee(ct) {
            var ir = l, Hr = d;
            return l = d = r, F = ct, $ = t.apply(Hr, ir), $;
          }
          function ae(ct) {
            return F = ct, V = Xs($e, n), U ? ee(ct) : $;
          }
          function pe(ct) {
            var ir = ct - k, Hr = ct - F, zm = n - ir;
            return H ? Ft(zm, m - Hr) : zm;
          }
          function oe(ct) {
            var ir = ct - k, Hr = ct - F;
            return k === r || ir >= n || ir < 0 || H && Hr >= m;
          }
          function $e() {
            var ct = Ll();
            if (oe(ct))
              return Te(ct);
            V = Xs($e, pe(ct));
          }
          function Te(ct) {
            return V = r, Y && l ? ee(ct) : (l = d = r, $);
          }
          function Cn() {
            V !== r && Np(V), F = 0, l = k = d = V = r;
          }
          function Jt() {
            return V === r ? $ : Te(Ll());
          }
          function En() {
            var ct = Ll(), ir = oe(ct);
            if (l = arguments, d = this, k = ct, ir) {
              if (V === r)
                return ae(k);
              if (H)
                return Np(V), V = Xs($e, n), ee(k);
            }
            return V === r && (V = Xs($e, n)), $;
          }
          return En.cancel = Cn, En.flush = Jt, En;
        }
        var pC = we(function(t, n) {
          return pp(t, 1, n);
        }), mC = we(function(t, n, i) {
          return pp(t, Hn(n) || 0, i);
        });
        function vC(t) {
          return Dr(t, ne);
        }
        function Nl(t, n) {
          if (typeof t != "function" || n != null && typeof n != "function")
            throw new Dn(c);
          var i = function() {
            var l = arguments, d = n ? n.apply(this, l) : l[0], m = i.cache;
            if (m.has(d))
              return m.get(d);
            var $ = t.apply(this, l);
            return i.cache = m.set(d, $) || m, $;
          };
          return i.cache = new (Nl.Cache || Pr)(), i;
        }
        Nl.Cache = Pr;
        function Bl(t) {
          if (typeof t != "function")
            throw new Dn(c);
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
        function wC(t) {
          return ym(2, t);
        }
        var _C = ob(function(t, n) {
          n = n.length == 1 && de(n[0]) ? Qe(n[0], yn(ie())) : Qe(At(n, 1), yn(ie()));
          var i = n.length;
          return we(function(l) {
            for (var d = -1, m = Ft(l.length, i); ++d < m; )
              l[d] = n[d].call(this, l[d]);
            return gn(t, this, l);
          });
        }), Qc = we(function(t, n) {
          var i = co(n, Hi(Qc));
          return Dr(t, M, r, n, i);
        }), Sm = we(function(t, n) {
          var i = co(n, Hi(Sm));
          return Dr(t, N, r, n, i);
        }), gC = Mr(function(t, n) {
          return Dr(t, J, r, r, r, n);
        });
        function $C(t, n) {
          if (typeof t != "function")
            throw new Dn(c);
          return n = n === r ? n : he(n), we(t, n);
        }
        function yC(t, n) {
          if (typeof t != "function")
            throw new Dn(c);
          return n = n == null ? 0 : yt(he(n), 0), we(function(i) {
            var l = i[n], d = vo(i, 0, n);
            return l && uo(d, l), gn(t, this, d);
          });
        }
        function bC(t, n, i) {
          var l = !0, d = !0;
          if (typeof t != "function")
            throw new Dn(c);
          return it(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), Em(t, n, {
            leading: l,
            maxWait: n,
            trailing: d
          });
        }
        function VC(t) {
          return $m(t, 1);
        }
        function CC(t, n) {
          return Qc(Pc(n), t);
        }
        function EC() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return de(t) ? t : [t];
        }
        function SC(t) {
          return Fn(t, C);
        }
        function kC(t, n) {
          return n = typeof n == "function" ? n : r, Fn(t, C, n);
        }
        function TC(t) {
          return Fn(t, y | C);
        }
        function IC(t, n) {
          return n = typeof n == "function" ? n : r, Fn(t, y | C, n);
        }
        function AC(t, n) {
          return n == null || hp(t, n, St(n));
        }
        function or(t, n) {
          return t === n || t !== t && n !== n;
        }
        var xC = Tl(Ec), OC = Tl(function(t, n) {
          return t >= n;
        }), ti = gp(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? gp : function(t) {
          return at(t) && De.call(t, "callee") && !ip.call(t, "callee");
        }, de = L.isArray, RC = Fh ? yn(Fh) : Uy;
        function an(t) {
          return t != null && Pl(t.length) && !Ur(t);
        }
        function ut(t) {
          return at(t) && an(t);
        }
        function LC(t) {
          return t === !0 || t === !1 || at(t) && Zt(t) == rn;
        }
        var wo = j$ || dd, NC = Uh ? yn(Uh) : qy;
        function BC(t) {
          return at(t) && t.nodeType === 1 && !Js(t);
        }
        function PC(t) {
          if (t == null)
            return !0;
          if (an(t) && (de(t) || typeof t == "string" || typeof t.splice == "function" || wo(t) || Wi(t) || ti(t)))
            return !t.length;
          var n = Ut(t);
          if (n == ve || n == Mt)
            return !t.size;
          if (Zs(t))
            return !Tc(t).length;
          for (var i in t)
            if (De.call(t, i))
              return !1;
          return !0;
        }
        function DC(t, n) {
          return Ys(t, n);
        }
        function MC(t, n, i) {
          i = typeof i == "function" ? i : r;
          var l = i ? i(t, n) : r;
          return l === r ? Ys(t, n, r, i) : !!l;
        }
        function ed(t) {
          if (!at(t))
            return !1;
          var n = Zt(t);
          return n == Tr || n == je || typeof t.message == "string" && typeof t.name == "string" && !Js(t);
        }
        function FC(t) {
          return typeof t == "number" && ap(t);
        }
        function Ur(t) {
          if (!it(t))
            return !1;
          var n = Zt(t);
          return n == Pe || n == Po || n == On || n == Qr;
        }
        function km(t) {
          return typeof t == "number" && t == he(t);
        }
        function Pl(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= nt;
        }
        function it(t) {
          var n = typeof t;
          return t != null && (n == "object" || n == "function");
        }
        function at(t) {
          return t != null && typeof t == "object";
        }
        var Tm = qh ? yn(qh) : Wy;
        function UC(t, n) {
          return t === n || kc(t, n, Wc(n));
        }
        function qC(t, n, i) {
          return i = typeof i == "function" ? i : r, kc(t, n, Wc(n), i);
        }
        function HC(t) {
          return Im(t) && t != +t;
        }
        function WC(t) {
          if (kb(t))
            throw new ue(u);
          return $p(t);
        }
        function zC(t) {
          return t === null;
        }
        function GC(t) {
          return t == null;
        }
        function Im(t) {
          return typeof t == "number" || at(t) && Zt(t) == Dt;
        }
        function Js(t) {
          if (!at(t) || Zt(t) != rt)
            return !1;
          var n = cl(t);
          if (n === null)
            return !0;
          var i = De.call(n, "constructor") && n.constructor;
          return typeof i == "function" && i instanceof i && sl.call(i) == q$;
        }
        var td = Hh ? yn(Hh) : zy;
        function YC(t) {
          return km(t) && t >= -nt && t <= nt;
        }
        var Am = Wh ? yn(Wh) : Gy;
        function Dl(t) {
          return typeof t == "string" || !de(t) && at(t) && Zt(t) == pt;
        }
        function Vn(t) {
          return typeof t == "symbol" || at(t) && Zt(t) == Rn;
        }
        var Wi = zh ? yn(zh) : Yy;
        function jC(t) {
          return t === r;
        }
        function KC(t) {
          return at(t) && Ut(t) == Jn;
        }
        function ZC(t) {
          return at(t) && Zt(t) == Do;
        }
        var XC = Tl(Ic), JC = Tl(function(t, n) {
          return t <= n;
        });
        function xm(t) {
          if (!t)
            return [];
          if (an(t))
            return Dl(t) ? tr(t) : sn(t);
          if (Ms && t[Ms])
            return A$(t[Ms]());
          var n = Ut(t), i = n == ve ? vc : n == Mt ? rl : zi;
          return i(t);
        }
        function qr(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = Hn(t), t === qe || t === -qe) {
            var n = t < 0 ? -1 : 1;
            return n * Xr;
          }
          return t === t ? t : 0;
        }
        function he(t) {
          var n = qr(t), i = n % 1;
          return n === n ? i ? n - i : n : 0;
        }
        function Om(t) {
          return t ? Xo(he(t), 0, X) : 0;
        }
        function Hn(t) {
          if (typeof t == "number")
            return t;
          if (Vn(t))
            return A;
          if (it(t)) {
            var n = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = it(n) ? n + "" : n;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = Xh(t);
          var i = ja.test(t);
          return i || Qu.test(t) ? h$(t.slice(2), i ? 2 : 8) : Rs.test(t) ? A : +t;
        }
        function Rm(t) {
          return _r(t, ln(t));
        }
        function QC(t) {
          return t ? Xo(he(t), -nt, nt) : t === 0 ? t : 0;
        }
        function Me(t) {
          return t == null ? "" : bn(t);
        }
        var eE = Ui(function(t, n) {
          if (Zs(n) || an(n)) {
            _r(n, St(n), t);
            return;
          }
          for (var i in n)
            De.call(n, i) && Ws(t, i, n[i]);
        }), Lm = Ui(function(t, n) {
          _r(n, ln(n), t);
        }), Nm = Ui(function(t, n, i, l) {
          _r(n, ln(n), t, l);
        }), nd = Ui(function(t, n, i, l) {
          _r(n, St(n), t, l);
        }), tE = Mr(bc);
        function nE(t, n) {
          var i = Fi(t);
          return n == null ? i : fp(i, n);
        }
        var rE = we(function(t, n) {
          t = ze(t);
          var i = -1, l = n.length, d = l > 2 ? n[2] : r;
          for (d && Xt(n[0], n[1], d) && (l = 1); ++i < l; )
            for (var m = n[i], $ = ln(m), V = -1, k = $.length; ++V < k; ) {
              var F = $[V], U = t[F];
              (U === r || or(U, Pi[F]) && !De.call(t, F)) && (t[F] = m[F]);
            }
          return t;
        }), oE = we(function(t) {
          return t.push(r, Xp), gn(Bm, r, t);
        });
        function iE(t, n) {
          return Yh(t, ie(n, 3), wr);
        }
        function sE(t, n) {
          return Yh(t, ie(n, 3), Cc);
        }
        function aE(t, n) {
          return t == null ? t : Vc(t, ie(n, 3), ln);
        }
        function lE(t, n) {
          return t == null ? t : wp(t, ie(n, 3), ln);
        }
        function uE(t, n) {
          return t && wr(t, ie(n, 3));
        }
        function cE(t, n) {
          return t && Cc(t, ie(n, 3));
        }
        function dE(t) {
          return t == null ? [] : $l(t, St(t));
        }
        function fE(t) {
          return t == null ? [] : $l(t, ln(t));
        }
        function rd(t, n, i) {
          var l = t == null ? r : Jo(t, n);
          return l === r ? i : l;
        }
        function hE(t, n) {
          return t != null && em(t, n, Py);
        }
        function od(t, n) {
          return t != null && em(t, n, Dy);
        }
        var pE = Gp(function(t, n, i) {
          n != null && typeof n.toString != "function" && (n = al.call(n)), t[n] = i;
        }, sd(un)), mE = Gp(function(t, n, i) {
          n != null && typeof n.toString != "function" && (n = al.call(n)), De.call(t, n) ? t[n].push(i) : t[n] = [i];
        }, ie), vE = we(Gs);
        function St(t) {
          return an(t) ? cp(t) : Tc(t);
        }
        function ln(t) {
          return an(t) ? cp(t, !0) : jy(t);
        }
        function wE(t, n) {
          var i = {};
          return n = ie(n, 3), wr(t, function(l, d, m) {
            vr(i, n(l, d, m), l);
          }), i;
        }
        function _E(t, n) {
          var i = {};
          return n = ie(n, 3), wr(t, function(l, d, m) {
            vr(i, d, n(l, d, m));
          }), i;
        }
        var gE = Ui(function(t, n, i) {
          yl(t, n, i);
        }), Bm = Ui(function(t, n, i, l) {
          yl(t, n, i, l);
        }), $E = Mr(function(t, n) {
          var i = {};
          if (t == null)
            return i;
          var l = !1;
          n = Qe(n, function(m) {
            return m = mo(m, t), l || (l = m.length > 1), m;
          }), _r(t, qc(t), i), l && (i = Fn(i, y | b | C, mb));
          for (var d = n.length; d--; )
            Lc(i, n[d]);
          return i;
        });
        function yE(t, n) {
          return Pm(t, Bl(ie(n)));
        }
        var bE = Mr(function(t, n) {
          return t == null ? {} : Zy(t, n);
        });
        function Pm(t, n) {
          if (t == null)
            return {};
          var i = Qe(qc(t), function(l) {
            return [l];
          });
          return n = ie(n), kp(t, i, function(l, d) {
            return n(l, d[0]);
          });
        }
        function VE(t, n, i) {
          n = mo(n, t);
          var l = -1, d = n.length;
          for (d || (d = 1, t = r); ++l < d; ) {
            var m = t == null ? r : t[rr(n[l])];
            m === r && (l = d, m = i), t = Ur(m) ? m.call(t) : m;
          }
          return t;
        }
        function CE(t, n, i) {
          return t == null ? t : js(t, n, i);
        }
        function EE(t, n, i, l) {
          return l = typeof l == "function" ? l : r, t == null ? t : js(t, n, i, l);
        }
        var Dm = Kp(St), Mm = Kp(ln);
        function SE(t, n, i) {
          var l = de(t), d = l || wo(t) || Wi(t);
          if (n = ie(n, 4), i == null) {
            var m = t && t.constructor;
            d ? i = l ? new m() : [] : it(t) ? i = Ur(m) ? Fi(cl(t)) : {} : i = {};
          }
          return (d ? $n : wr)(t, function($, V, k) {
            return n(i, $, V, k);
          }), i;
        }
        function kE(t, n) {
          return t == null ? !0 : Lc(t, n);
        }
        function TE(t, n, i) {
          return t == null ? t : Op(t, n, Pc(i));
        }
        function IE(t, n, i, l) {
          return l = typeof l == "function" ? l : r, t == null ? t : Op(t, n, Pc(i), l);
        }
        function zi(t) {
          return t == null ? [] : mc(t, St(t));
        }
        function AE(t) {
          return t == null ? [] : mc(t, ln(t));
        }
        function xE(t, n, i) {
          return i === r && (i = n, n = r), i !== r && (i = Hn(i), i = i === i ? i : 0), n !== r && (n = Hn(n), n = n === n ? n : 0), Xo(Hn(t), n, i);
        }
        function OE(t, n, i) {
          return n = qr(n), i === r ? (i = n, n = 0) : i = qr(i), t = Hn(t), My(t, n, i);
        }
        function RE(t, n, i) {
          if (i && typeof i != "boolean" && Xt(t, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof t == "boolean" && (i = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = qr(t), n === r ? (n = t, t = 0) : n = qr(n)), t > n) {
            var l = t;
            t = n, n = l;
          }
          if (i || t % 1 || n % 1) {
            var d = lp();
            return Ft(t + d * (n - t + f$("1e-" + ((d + "").length - 1))), n);
          }
          return xc(t, n);
        }
        var LE = qi(function(t, n, i) {
          return n = n.toLowerCase(), t + (i ? Fm(n) : n);
        });
        function Fm(t) {
          return id(Me(t).toLowerCase());
        }
        function Um(t) {
          return t = Me(t), t && t.replace(tc, E$).replace(n$, "");
        }
        function NE(t, n, i) {
          t = Me(t), n = bn(n);
          var l = t.length;
          i = i === r ? l : Xo(he(i), 0, l);
          var d = i;
          return i -= n.length, i >= 0 && t.slice(i, d) == n;
        }
        function BE(t) {
          return t = Me(t), t && Re.test(t) ? t.replace(le, S$) : t;
        }
        function PE(t) {
          return t = Me(t), t && oo.test(t) ? t.replace(Rr, "\\$&") : t;
        }
        var DE = qi(function(t, n, i) {
          return t + (i ? "-" : "") + n.toLowerCase();
        }), ME = qi(function(t, n, i) {
          return t + (i ? " " : "") + n.toLowerCase();
        }), FE = Hp("toLowerCase");
        function UE(t, n, i) {
          t = Me(t), n = he(n);
          var l = n ? Ni(t) : 0;
          if (!n || l >= n)
            return t;
          var d = (n - l) / 2;
          return kl(pl(d), i) + t + kl(hl(d), i);
        }
        function qE(t, n, i) {
          t = Me(t), n = he(n);
          var l = n ? Ni(t) : 0;
          return n && l < n ? t + kl(n - l, i) : t;
        }
        function HE(t, n, i) {
          t = Me(t), n = he(n);
          var l = n ? Ni(t) : 0;
          return n && l < n ? kl(n - l, i) + t : t;
        }
        function WE(t, n, i) {
          return i || n == null ? n = 0 : n && (n = +n), J$(Me(t).replace(Lr, ""), n || 0);
        }
        function zE(t, n, i) {
          return (i ? Xt(t, n, i) : n === r) ? n = 1 : n = he(n), Oc(Me(t), n);
        }
        function GE() {
          var t = arguments, n = Me(t[0]);
          return t.length < 3 ? n : n.replace(t[1], t[2]);
        }
        var YE = qi(function(t, n, i) {
          return t + (i ? "_" : "") + n.toLowerCase();
        });
        function jE(t, n, i) {
          return i && typeof i != "number" && Xt(t, n, i) && (n = i = r), i = i === r ? X : i >>> 0, i ? (t = Me(t), t && (typeof n == "string" || n != null && !td(n)) && (n = bn(n), !n && Li(t)) ? vo(tr(t), 0, i) : t.split(n, i)) : [];
        }
        var KE = qi(function(t, n, i) {
          return t + (i ? " " : "") + id(n);
        });
        function ZE(t, n, i) {
          return t = Me(t), i = i == null ? 0 : Xo(he(i), 0, t.length), n = bn(n), t.slice(i, i + n.length) == n;
        }
        function XE(t, n, i) {
          var l = h.templateSettings;
          i && Xt(t, n, i) && (n = r), t = Me(t), n = nd({}, n, l, Zp);
          var d = nd({}, n.imports, l.imports, Zp), m = St(d), $ = mc(d, m);
          $n(m, function(oe) {
            if (Xe.test(oe))
              throw new ue(v);
          });
          var V, k, F = 0, U = n.interpolate || Ii, H = "__p += '", Y = wc(
            (n.escape || Ii).source + "|" + U.source + "|" + (U === Nn ? Ju : Ii).source + "|" + (n.evaluate || Ii).source + "|$",
            "g"
          ), ee = "//# sourceURL=" + (De.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++a$ + "]") + `
`;
          t.replace(Y, function(oe, $e, Te, Cn, Jt, En) {
            return Te || (Te = Cn), H += t.slice(F, En).replace(mr, k$), $e && (V = !0, H += `' +
__e(` + $e + `) +
'`), Jt && (k = !0, H += `';
` + Jt + `;
__p += '`), Te && (H += `' +
((__t = (` + Te + `)) == null ? '' : __t) +
'`), F = En + oe.length, oe;
          }), H += `';
`;
          var ae = De.call(n, "variable") && n.variable;
          if (!ae)
            H = `with (obj) {
` + H + `
}
`;
          else if (Xe.test(ae))
            throw new ue(f);
          H = (k ? H.replace(jt, "") : H).replace(eo, "$1").replace(Mo, "$1;"), H = "function(" + (ae || "obj") + `) {
` + (ae ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (V ? ", __e = _.escape" : "") + (k ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + H + `return __p
}`;
          var pe = Hm(function() {
            return Ne(m, ee + "return " + H).apply(r, $);
          });
          if (pe.source = H, ed(pe))
            throw pe;
          return pe;
        }
        function JE(t) {
          return Me(t).toLowerCase();
        }
        function QE(t) {
          return Me(t).toUpperCase();
        }
        function eS(t, n, i) {
          if (t = Me(t), t && (i || n === r))
            return Xh(t);
          if (!t || !(n = bn(n)))
            return t;
          var l = tr(t), d = tr(n), m = Jh(l, d), $ = Qh(l, d) + 1;
          return vo(l, m, $).join("");
        }
        function tS(t, n, i) {
          if (t = Me(t), t && (i || n === r))
            return t.slice(0, tp(t) + 1);
          if (!t || !(n = bn(n)))
            return t;
          var l = tr(t), d = Qh(l, tr(n)) + 1;
          return vo(l, 0, d).join("");
        }
        function nS(t, n, i) {
          if (t = Me(t), t && (i || n === r))
            return t.replace(Lr, "");
          if (!t || !(n = bn(n)))
            return t;
          var l = tr(t), d = Jh(l, tr(n));
          return vo(l, d).join("");
        }
        function rS(t, n) {
          var i = re, l = Se;
          if (it(n)) {
            var d = "separator" in n ? n.separator : d;
            i = "length" in n ? he(n.length) : i, l = "omission" in n ? bn(n.omission) : l;
          }
          t = Me(t);
          var m = t.length;
          if (Li(t)) {
            var $ = tr(t);
            m = $.length;
          }
          if (i >= m)
            return t;
          var V = i - Ni(l);
          if (V < 1)
            return l;
          var k = $ ? vo($, 0, V).join("") : t.slice(0, V);
          if (d === r)
            return k + l;
          if ($ && (V += k.length - V), td(d)) {
            if (t.slice(V).search(d)) {
              var F, U = k;
              for (d.global || (d = wc(d.source, Me(Os.exec(d)) + "g")), d.lastIndex = 0; F = d.exec(U); )
                var H = F.index;
              k = k.slice(0, H === r ? V : H);
            }
          } else if (t.indexOf(bn(d), V) != V) {
            var Y = k.lastIndexOf(d);
            Y > -1 && (k = k.slice(0, Y));
          }
          return k + l;
        }
        function oS(t) {
          return t = Me(t), t && Q.test(t) ? t.replace(to, L$) : t;
        }
        var iS = qi(function(t, n, i) {
          return t + (i ? " " : "") + n.toUpperCase();
        }), id = Hp("toUpperCase");
        function qm(t, n, i) {
          return t = Me(t), n = i ? r : n, n === r ? I$(t) ? P$(t) : $$(t) : t.match(n) || [];
        }
        var Hm = we(function(t, n) {
          try {
            return gn(t, r, n);
          } catch (i) {
            return ed(i) ? i : new ue(i);
          }
        }), sS = Mr(function(t, n) {
          return $n(n, function(i) {
            i = rr(i), vr(t, i, Jc(t[i], t));
          }), t;
        });
        function aS(t) {
          var n = t == null ? 0 : t.length, i = ie();
          return t = n ? Qe(t, function(l) {
            if (typeof l[1] != "function")
              throw new Dn(c);
            return [i(l[0]), l[1]];
          }) : [], we(function(l) {
            for (var d = -1; ++d < n; ) {
              var m = t[d];
              if (gn(m[0], this, l))
                return gn(m[1], this, l);
            }
          });
        }
        function lS(t) {
          return Ly(Fn(t, y));
        }
        function sd(t) {
          return function() {
            return t;
          };
        }
        function uS(t, n) {
          return t == null || t !== t ? n : t;
        }
        var cS = zp(), dS = zp(!0);
        function un(t) {
          return t;
        }
        function ad(t) {
          return yp(typeof t == "function" ? t : Fn(t, y));
        }
        function fS(t) {
          return Vp(Fn(t, y));
        }
        function hS(t, n) {
          return Cp(t, Fn(n, y));
        }
        var pS = we(function(t, n) {
          return function(i) {
            return Gs(i, t, n);
          };
        }), mS = we(function(t, n) {
          return function(i) {
            return Gs(t, i, n);
          };
        });
        function ld(t, n, i) {
          var l = St(n), d = $l(n, l);
          i == null && !(it(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = $l(n, St(n)));
          var m = !(it(i) && "chain" in i) || !!i.chain, $ = Ur(t);
          return $n(d, function(V) {
            var k = n[V];
            t[V] = k, $ && (t.prototype[V] = function() {
              var F = this.__chain__;
              if (m || F) {
                var U = t(this.__wrapped__), H = U.__actions__ = sn(this.__actions__);
                return H.push({ func: k, args: arguments, thisArg: t }), U.__chain__ = F, U;
              }
              return k.apply(t, uo([this.value()], arguments));
            });
          }), t;
        }
        function vS() {
          return It._ === this && (It._ = H$), this;
        }
        function ud() {
        }
        function wS(t) {
          return t = he(t), we(function(n) {
            return Ep(n, t);
          });
        }
        var _S = Mc(Qe), gS = Mc(Gh), $S = Mc(cc);
        function Wm(t) {
          return Gc(t) ? dc(rr(t)) : Xy(t);
        }
        function yS(t) {
          return function(n) {
            return t == null ? r : Jo(t, n);
          };
        }
        var bS = Yp(), VS = Yp(!0);
        function cd() {
          return [];
        }
        function dd() {
          return !1;
        }
        function CS() {
          return {};
        }
        function ES() {
          return "";
        }
        function SS() {
          return !0;
        }
        function kS(t, n) {
          if (t = he(t), t < 1 || t > nt)
            return [];
          var i = X, l = Ft(t, X);
          n = ie(n), t -= X;
          for (var d = pc(l, n); ++i < t; )
            n(i);
          return d;
        }
        function TS(t) {
          return de(t) ? Qe(t, rr) : Vn(t) ? [t] : sn(um(Me(t)));
        }
        function IS(t) {
          var n = ++U$;
          return Me(t) + n;
        }
        var AS = Sl(function(t, n) {
          return t + n;
        }, 0), xS = Fc("ceil"), OS = Sl(function(t, n) {
          return t / n;
        }, 1), RS = Fc("floor");
        function LS(t) {
          return t && t.length ? gl(t, un, Ec) : r;
        }
        function NS(t, n) {
          return t && t.length ? gl(t, ie(n, 2), Ec) : r;
        }
        function BS(t) {
          return Kh(t, un);
        }
        function PS(t, n) {
          return Kh(t, ie(n, 2));
        }
        function DS(t) {
          return t && t.length ? gl(t, un, Ic) : r;
        }
        function MS(t, n) {
          return t && t.length ? gl(t, ie(n, 2), Ic) : r;
        }
        var FS = Sl(function(t, n) {
          return t * n;
        }, 1), US = Fc("round"), qS = Sl(function(t, n) {
          return t - n;
        }, 0);
        function HS(t) {
          return t && t.length ? hc(t, un) : 0;
        }
        function WS(t, n) {
          return t && t.length ? hc(t, ie(n, 2)) : 0;
        }
        return h.after = hC, h.ary = $m, h.assign = eE, h.assignIn = Lm, h.assignInWith = Nm, h.assignWith = nd, h.at = tE, h.before = ym, h.bind = Jc, h.bindAll = sS, h.bindKey = bm, h.castArray = EC, h.chain = wm, h.chunk = Lb, h.compact = Nb, h.concat = Bb, h.cond = aS, h.conforms = lS, h.constant = sd, h.countBy = WV, h.create = nE, h.curry = Vm, h.curryRight = Cm, h.debounce = Em, h.defaults = rE, h.defaultsDeep = oE, h.defer = pC, h.delay = mC, h.difference = Pb, h.differenceBy = Db, h.differenceWith = Mb, h.drop = Fb, h.dropRight = Ub, h.dropRightWhile = qb, h.dropWhile = Hb, h.fill = Wb, h.filter = GV, h.flatMap = KV, h.flatMapDeep = ZV, h.flatMapDepth = XV, h.flatten = hm, h.flattenDeep = zb, h.flattenDepth = Gb, h.flip = vC, h.flow = cS, h.flowRight = dS, h.fromPairs = Yb, h.functions = dE, h.functionsIn = fE, h.groupBy = JV, h.initial = Kb, h.intersection = Zb, h.intersectionBy = Xb, h.intersectionWith = Jb, h.invert = pE, h.invertBy = mE, h.invokeMap = eC, h.iteratee = ad, h.keyBy = tC, h.keys = St, h.keysIn = ln, h.map = Rl, h.mapKeys = wE, h.mapValues = _E, h.matches = fS, h.matchesProperty = hS, h.memoize = Nl, h.merge = gE, h.mergeWith = Bm, h.method = pS, h.methodOf = mS, h.mixin = ld, h.negate = Bl, h.nthArg = wS, h.omit = $E, h.omitBy = yE, h.once = wC, h.orderBy = nC, h.over = _S, h.overArgs = _C, h.overEvery = gS, h.overSome = $S, h.partial = Qc, h.partialRight = Sm, h.partition = rC, h.pick = bE, h.pickBy = Pm, h.property = Wm, h.propertyOf = yS, h.pull = nV, h.pullAll = mm, h.pullAllBy = rV, h.pullAllWith = oV, h.pullAt = iV, h.range = bS, h.rangeRight = VS, h.rearg = gC, h.reject = sC, h.remove = sV, h.rest = $C, h.reverse = Zc, h.sampleSize = lC, h.set = CE, h.setWith = EE, h.shuffle = uC, h.slice = aV, h.sortBy = fC, h.sortedUniq = pV, h.sortedUniqBy = mV, h.split = jE, h.spread = yC, h.tail = vV, h.take = wV, h.takeRight = _V, h.takeRightWhile = gV, h.takeWhile = $V, h.tap = NV, h.throttle = bC, h.thru = Ol, h.toArray = xm, h.toPairs = Dm, h.toPairsIn = Mm, h.toPath = TS, h.toPlainObject = Rm, h.transform = SE, h.unary = VC, h.union = yV, h.unionBy = bV, h.unionWith = VV, h.uniq = CV, h.uniqBy = EV, h.uniqWith = SV, h.unset = kE, h.unzip = Xc, h.unzipWith = vm, h.update = TE, h.updateWith = IE, h.values = zi, h.valuesIn = AE, h.without = kV, h.words = qm, h.wrap = CC, h.xor = TV, h.xorBy = IV, h.xorWith = AV, h.zip = xV, h.zipObject = OV, h.zipObjectDeep = RV, h.zipWith = LV, h.entries = Dm, h.entriesIn = Mm, h.extend = Lm, h.extendWith = Nm, ld(h, h), h.add = AS, h.attempt = Hm, h.camelCase = LE, h.capitalize = Fm, h.ceil = xS, h.clamp = xE, h.clone = SC, h.cloneDeep = TC, h.cloneDeepWith = IC, h.cloneWith = kC, h.conformsTo = AC, h.deburr = Um, h.defaultTo = uS, h.divide = OS, h.endsWith = NE, h.eq = or, h.escape = BE, h.escapeRegExp = PE, h.every = zV, h.find = YV, h.findIndex = dm, h.findKey = iE, h.findLast = jV, h.findLastIndex = fm, h.findLastKey = sE, h.floor = RS, h.forEach = _m, h.forEachRight = gm, h.forIn = aE, h.forInRight = lE, h.forOwn = uE, h.forOwnRight = cE, h.get = rd, h.gt = xC, h.gte = OC, h.has = hE, h.hasIn = od, h.head = pm, h.identity = un, h.includes = QV, h.indexOf = jb, h.inRange = OE, h.invoke = vE, h.isArguments = ti, h.isArray = de, h.isArrayBuffer = RC, h.isArrayLike = an, h.isArrayLikeObject = ut, h.isBoolean = LC, h.isBuffer = wo, h.isDate = NC, h.isElement = BC, h.isEmpty = PC, h.isEqual = DC, h.isEqualWith = MC, h.isError = ed, h.isFinite = FC, h.isFunction = Ur, h.isInteger = km, h.isLength = Pl, h.isMap = Tm, h.isMatch = UC, h.isMatchWith = qC, h.isNaN = HC, h.isNative = WC, h.isNil = GC, h.isNull = zC, h.isNumber = Im, h.isObject = it, h.isObjectLike = at, h.isPlainObject = Js, h.isRegExp = td, h.isSafeInteger = YC, h.isSet = Am, h.isString = Dl, h.isSymbol = Vn, h.isTypedArray = Wi, h.isUndefined = jC, h.isWeakMap = KC, h.isWeakSet = ZC, h.join = Qb, h.kebabCase = DE, h.last = qn, h.lastIndexOf = eV, h.lowerCase = ME, h.lowerFirst = FE, h.lt = XC, h.lte = JC, h.max = LS, h.maxBy = NS, h.mean = BS, h.meanBy = PS, h.min = DS, h.minBy = MS, h.stubArray = cd, h.stubFalse = dd, h.stubObject = CS, h.stubString = ES, h.stubTrue = SS, h.multiply = FS, h.nth = tV, h.noConflict = vS, h.noop = ud, h.now = Ll, h.pad = UE, h.padEnd = qE, h.padStart = HE, h.parseInt = WE, h.random = RE, h.reduce = oC, h.reduceRight = iC, h.repeat = zE, h.replace = GE, h.result = VE, h.round = US, h.runInContext = S, h.sample = aC, h.size = cC, h.snakeCase = YE, h.some = dC, h.sortedIndex = lV, h.sortedIndexBy = uV, h.sortedIndexOf = cV, h.sortedLastIndex = dV, h.sortedLastIndexBy = fV, h.sortedLastIndexOf = hV, h.startCase = KE, h.startsWith = ZE, h.subtract = qS, h.sum = HS, h.sumBy = WS, h.template = XE, h.times = kS, h.toFinite = qr, h.toInteger = he, h.toLength = Om, h.toLower = JE, h.toNumber = Hn, h.toSafeInteger = QC, h.toString = Me, h.toUpper = QE, h.trim = eS, h.trimEnd = tS, h.trimStart = nS, h.truncate = rS, h.unescape = oS, h.uniqueId = IS, h.upperCase = iS, h.upperFirst = id, h.each = _m, h.eachRight = gm, h.first = pm, ld(h, (function() {
          var t = {};
          return wr(h, function(n, i) {
            De.call(h.prototype, i) || (t[i] = n);
          }), t;
        })(), { chain: !1 }), h.VERSION = s, $n(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          h[t].placeholder = h;
        }), $n(["drop", "take"], function(t, n) {
          Ce.prototype[t] = function(i) {
            i = i === r ? 1 : yt(he(i), 0);
            var l = this.__filtered__ && !n ? new Ce(this) : this.clone();
            return l.__filtered__ ? l.__takeCount__ = Ft(i, l.__takeCount__) : l.__views__.push({
              size: Ft(i, X),
              type: t + (l.__dir__ < 0 ? "Right" : "")
            }), l;
          }, Ce.prototype[t + "Right"] = function(i) {
            return this.reverse()[t](i).reverse();
          };
        }), $n(["filter", "map", "takeWhile"], function(t, n) {
          var i = n + 1, l = i == Oe || i == Yt;
          Ce.prototype[t] = function(d) {
            var m = this.clone();
            return m.__iteratees__.push({
              iteratee: ie(d, 3),
              type: i
            }), m.__filtered__ = m.__filtered__ || l, m;
          };
        }), $n(["head", "last"], function(t, n) {
          var i = "take" + (n ? "Right" : "");
          Ce.prototype[t] = function() {
            return this[i](1).value()[0];
          };
        }), $n(["initial", "tail"], function(t, n) {
          var i = "drop" + (n ? "" : "Right");
          Ce.prototype[t] = function() {
            return this.__filtered__ ? new Ce(this) : this[i](1);
          };
        }), Ce.prototype.compact = function() {
          return this.filter(un);
        }, Ce.prototype.find = function(t) {
          return this.filter(t).head();
        }, Ce.prototype.findLast = function(t) {
          return this.reverse().find(t);
        }, Ce.prototype.invokeMap = we(function(t, n) {
          return typeof t == "function" ? new Ce(this) : this.map(function(i) {
            return Gs(i, t, n);
          });
        }), Ce.prototype.reject = function(t) {
          return this.filter(Bl(ie(t)));
        }, Ce.prototype.slice = function(t, n) {
          t = he(t);
          var i = this;
          return i.__filtered__ && (t > 0 || n < 0) ? new Ce(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== r && (n = he(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
        }, Ce.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, Ce.prototype.toArray = function() {
          return this.take(X);
        }, wr(Ce.prototype, function(t, n) {
          var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = h[l ? "take" + (n == "last" ? "Right" : "") : n], m = l || /^find/.test(n);
          d && (h.prototype[n] = function() {
            var $ = this.__wrapped__, V = l ? [1] : arguments, k = $ instanceof Ce, F = V[0], U = k || de($), H = function($e) {
              var Te = d.apply(h, uo([$e], V));
              return l && Y ? Te[0] : Te;
            };
            U && i && typeof F == "function" && F.length != 1 && (k = U = !1);
            var Y = this.__chain__, ee = !!this.__actions__.length, ae = m && !Y, pe = k && !ee;
            if (!m && U) {
              $ = pe ? $ : new Ce(this);
              var oe = t.apply($, V);
              return oe.__actions__.push({ func: Ol, args: [H], thisArg: r }), new Mn(oe, Y);
            }
            return ae && pe ? t.apply(this, V) : (oe = this.thru(H), ae ? l ? oe.value()[0] : oe.value() : oe);
          });
        }), $n(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var n = ol[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
          h.prototype[t] = function() {
            var d = arguments;
            if (l && !this.__chain__) {
              var m = this.value();
              return n.apply(de(m) ? m : [], d);
            }
            return this[i](function($) {
              return n.apply(de($) ? $ : [], d);
            });
          };
        }), wr(Ce.prototype, function(t, n) {
          var i = h[n];
          if (i) {
            var l = i.name + "";
            De.call(Mi, l) || (Mi[l] = []), Mi[l].push({ name: n, func: i });
          }
        }), Mi[El(r, I).name] = [{
          name: "wrapper",
          func: r
        }], Ce.prototype.clone = iy, Ce.prototype.reverse = sy, Ce.prototype.value = ay, h.prototype.at = BV, h.prototype.chain = PV, h.prototype.commit = DV, h.prototype.next = MV, h.prototype.plant = UV, h.prototype.reverse = qV, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = HV, h.prototype.first = h.prototype.head, Ms && (h.prototype[Ms] = FV), h;
      }), Bi = D$();
      Yo ? ((Yo.exports = Bi)._ = Bi, sc._ = Bi) : It._ = Bi;
    }).call(Ik);
  })(Sa, Sa.exports)), Sa.exports;
}
var Ge = Ak();
const xk = "/alarms?_s=", Ou = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, Ok = async (e, o) => {
  try {
    return (await Pt.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      Ou
    )).status === 204;
  } catch {
    return !1;
  }
}, Qg = async (e, o) => {
  try {
    return (await Pt.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      Ou
    )).status === 204;
  } catch {
    return !1;
  }
}, Rk = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await Zr.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      Ou
    )).status == 204;
  } catch {
    return !1;
  }
}, Lk = async () => {
  try {
    const e = `${xk}isSituation==true&limit=0`, o = await Zr(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, Nk = async (e) => {
  try {
    const o = e.join(",id=="), r = await Zr(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, e1 = async (e) => {
  try {
    const o = await Zr(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, Bk = async (e) => {
  try {
    const o = await Zr(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, Pk = async () => {
  try {
    const e = await Zr("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => Ge.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, Dk = async (e, o, r) => {
  try {
    return (await Zr.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      Ou
    )).status == 204;
  } catch {
    return !1;
  }
}, Mk = async (e, o) => {
  try {
    return (await Zr.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, Fk = async () => {
  try {
    const e = await Zr.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, Uk = window.Pinia.defineStore, fr = Uk("situationsStore", {
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
      const e = await Pk();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await Lk();
      if (e) {
        const o = e.alarm.map((u) => {
          var c;
          return u.status = (c = u.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, u;
        });
        this.filteredSituations = o.map((u) => u.id);
        const r = Ge.groupBy(o, "status"), a = [
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
        const s = await e1(e);
        if (s) {
          const a = (o = s.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await Nk(a);
          s.status = (r = s.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : r.value, s.alarms = Ge.sortBy(c, ["id"]), this.situationDetail = s;
        }
      }
    },
    async getEvents(e, o) {
      const r = {};
      await Promise.all(
        o.map(async (s) => {
          const a = await Bk(s);
          a && (r[s] = Ge.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await Fk();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), qk = window.Vue.openBlock, Hk = window.Vue.createElementBlock, Wk = window.Vue.createElementVNode;
var zk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Gk = {}, Yk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jk = /* @__PURE__ */ Wk("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), Kk = [
  jk
];
function Zk(e, o) {
  return qk(), Hk("svg", Yk, Kk);
}
var ws = /* @__PURE__ */ zk(Gk, [["render", Zk]]), Xk = Object.defineProperty, Bv = Object.getOwnPropertySymbols, Jk = Object.prototype.hasOwnProperty, Qk = Object.prototype.propertyIsEnumerable, Pv = (e, o, r) => o in e ? Xk(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Dv = (e, o) => {
  for (var r in o || (o = {}))
    Jk.call(o, r) && Pv(e, r, o[r]);
  if (Bv)
    for (var r of Bv(o))
      Qk.call(o, r) && Pv(e, r, o[r]);
  return e;
};
const e2 = window.Vue.defineComponent, t2 = window.Vue.toRaw, Qd = window.Vue.h;
var n2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const r2 = {
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
}, o2 = e2({
  props: r2,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = t2(this.icon);
    return this.$slots.default ? Qd("span", { class: "feather-icon-container" }, [
      Qd(this.$slots.default()[0], Dv({
        class: o
      }, r))
    ]) : Qd(s, Dv({
      class: o
    }, r));
  }
});
var te = /* @__PURE__ */ n2(o2, [["__scopeId", "data-v-52cbf270"]]);
const i2 = window.Vue.openBlock, s2 = window.Vue.createElementBlock, a2 = window.Vue.createElementVNode;
var l2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const u2 = {}, c2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, d2 = /* @__PURE__ */ a2("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), f2 = [
  d2
];
function h2(e, o) {
  return i2(), s2("svg", c2, f2);
}
var t1 = /* @__PURE__ */ l2(u2, [["render", h2]]);
const Lt = {
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
function Er(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var o = Number(e);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function Ze(e, o) {
  if (o.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function Ct(e) {
  Ze(1, arguments);
  var o = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && o === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || o === "[object Number]" ? new Date(e) : ((typeof e == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function p2(e, o) {
  Ze(2, arguments);
  var r = Ct(e), s = Er(o);
  return isNaN(s) ? /* @__PURE__ */ new Date(NaN) : (s && r.setDate(r.getDate() + s), r);
}
function m2(e, o) {
  Ze(2, arguments);
  var r = Ct(e).getTime(), s = Er(o);
  return new Date(r + s);
}
var v2 = {};
function gs() {
  return v2;
}
function Mv(e, o) {
  var r, s, a, u, c, f;
  Ze(1, arguments);
  var v = gs(), p = Er((r = (s = (a = (u = void 0) !== null && u !== void 0 ? u : void 0) !== null && a !== void 0 ? a : v.weekStartsOn) !== null && s !== void 0 ? s : (c = v.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var w = Ct(e), g = w.getDay(), y = (g < p ? 7 : 0) + g - p;
  return w.setDate(w.getDate() - y), w.setHours(0, 0, 0, 0), w;
}
function Xf(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function Fv(e) {
  Ze(1, arguments);
  var o = Ct(e);
  return o.setHours(0, 0, 0, 0), o;
}
function w2(e, o) {
  Ze(2, arguments);
  var r = Ct(e), s = Ct(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function n1(e, o) {
  Ze(2, arguments);
  var r = Fv(e), s = Fv(o);
  return r.getTime() === s.getTime();
}
function _2(e) {
  return Ze(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function g2(e) {
  if (Ze(1, arguments), !_2(e) && typeof e != "number")
    return !1;
  var o = Ct(e);
  return !isNaN(Number(o));
}
function $2(e, o) {
  Ze(2, arguments);
  var r = Er(o);
  return m2(e, -r);
}
var y2 = 864e5;
function b2(e) {
  Ze(1, arguments);
  var o = Ct(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / y2) + 1;
}
function _u(e) {
  Ze(1, arguments);
  var o = 1, r = Ct(e), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function r1(e) {
  Ze(1, arguments);
  var o = Ct(e), r = o.getUTCFullYear(), s = /* @__PURE__ */ new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = _u(s), u = /* @__PURE__ */ new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = _u(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function V2(e) {
  Ze(1, arguments);
  var o = r1(e), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = _u(r);
  return s;
}
var C2 = 6048e5;
function E2(e) {
  Ze(1, arguments);
  var o = Ct(e), r = _u(o).getTime() - V2(o).getTime();
  return Math.round(r / C2) + 1;
}
function gu(e, o) {
  var r, s, a, u, c, f, v, p;
  Ze(1, arguments);
  var w = gs(), g = Er((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : w.weekStartsOn) !== null && s !== void 0 ? s : (v = w.locale) === null || v === void 0 || (p = v.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(g >= 0 && g <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Ct(e), b = y.getUTCDay(), C = (b < g ? 7 : 0) + b - g;
  return y.setUTCDate(y.getUTCDate() - C), y.setUTCHours(0, 0, 0, 0), y;
}
function o1(e, o) {
  var r, s, a, u, c, f, v, p;
  Ze(1, arguments);
  var w = Ct(e), g = w.getUTCFullYear(), y = gs(), b = Er((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && s !== void 0 ? s : (v = y.locale) === null || v === void 0 || (p = v.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(b >= 1 && b <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var C = /* @__PURE__ */ new Date(0);
  C.setUTCFullYear(g + 1, 0, b), C.setUTCHours(0, 0, 0, 0);
  var T = gu(C, o), O = /* @__PURE__ */ new Date(0);
  O.setUTCFullYear(g, 0, b), O.setUTCHours(0, 0, 0, 0);
  var E = gu(O, o);
  return w.getTime() >= T.getTime() ? g + 1 : w.getTime() >= E.getTime() ? g : g - 1;
}
function S2(e, o) {
  var r, s, a, u, c, f, v, p;
  Ze(1, arguments);
  var w = gs(), g = Er((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : w.firstWeekContainsDate) !== null && s !== void 0 ? s : (v = w.locale) === null || v === void 0 || (p = v.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = o1(e, o), b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(y, 0, g), b.setUTCHours(0, 0, 0, 0);
  var C = gu(b, o);
  return C;
}
var k2 = 6048e5;
function T2(e, o) {
  Ze(1, arguments);
  var r = Ct(e), s = gu(r, o).getTime() - S2(r, o).getTime();
  return Math.round(s / k2) + 1;
}
function He(e, o) {
  for (var r = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var _o = {
  // Year
  y: function(e, o) {
    var r = e.getUTCFullYear(), s = r > 0 ? r : 1 - r;
    return He(o === "yy" ? s % 100 : s, o.length);
  },
  // Month
  M: function(e, o) {
    var r = e.getUTCMonth();
    return o === "M" ? String(r + 1) : He(r + 1, 2);
  },
  // Day of the month
  d: function(e, o) {
    return He(e.getUTCDate(), o.length);
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
    return He(e.getUTCHours() % 12 || 12, o.length);
  },
  // Hour [0-23]
  H: function(e, o) {
    return He(e.getUTCHours(), o.length);
  },
  // Minute
  m: function(e, o) {
    return He(e.getUTCMinutes(), o.length);
  },
  // Second
  s: function(e, o) {
    return He(e.getUTCSeconds(), o.length);
  },
  // Fraction of second
  S: function(e, o) {
    var r = o.length, s = e.getUTCMilliseconds(), a = Math.floor(s * Math.pow(10, r - 3));
    return He(a, o.length);
  }
}, Gi = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, I2 = {
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
    return _o.y(e, o);
  },
  // Local week-numbering year
  Y: function(e, o, r, s) {
    var a = o1(e, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return He(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : He(u, o.length);
  },
  // ISO week-numbering year
  R: function(e, o) {
    var r = r1(e);
    return He(r, o.length);
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
    return He(r, o.length);
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
        return He(s, 2);
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
        return He(s, 2);
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
        return _o.M(e, o);
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
        return He(s + 1, 2);
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
    var a = T2(e, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : He(a, o.length);
  },
  // ISO week of year
  I: function(e, o, r) {
    var s = E2(e);
    return o === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : He(s, o.length);
  },
  // Day of the month
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : _o.d(e, o);
  },
  // Day of year
  D: function(e, o, r) {
    var s = b2(e);
    return o === "Do" ? r.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : He(s, o.length);
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
        return He(u, 2);
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
        return He(u, o.length);
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
        return He(a, o.length);
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
    switch (s === 12 ? a = Gi.noon : s === 0 ? a = Gi.midnight : a = s / 12 >= 1 ? "pm" : "am", o) {
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
    switch (s >= 17 ? a = Gi.evening : s >= 12 ? a = Gi.afternoon : s >= 4 ? a = Gi.morning : a = Gi.night, o) {
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
    return _o.h(e, o);
  },
  // Hour [0-23]
  H: function(e, o, r) {
    return o === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : _o.H(e, o);
  },
  // Hour [0-11]
  K: function(e, o, r) {
    var s = e.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : He(s, o.length);
  },
  // Hour [1-24]
  k: function(e, o, r) {
    var s = e.getUTCHours();
    return s === 0 && (s = 24), o === "ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : He(s, o.length);
  },
  // Minute
  m: function(e, o, r) {
    return o === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : _o.m(e, o);
  },
  // Second
  s: function(e, o, r) {
    return o === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : _o.s(e, o);
  },
  // Fraction of second
  S: function(e, o) {
    return _o.S(e, o);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      // Hours and optional minutes
      case "X":
        return qv(u);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return wi(u);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return wi(u, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      // Hours and optional minutes
      case "x":
        return qv(u);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return wi(u);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return wi(u, ":");
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
        return "GMT" + Uv(u, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + wi(u, ":");
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
        return "GMT" + Uv(u, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + wi(u, ":");
    }
  },
  // Seconds timestamp
  t: function(e, o, r, s) {
    var a = s._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return He(u, o.length);
  },
  // Milliseconds timestamp
  T: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTime();
    return He(u, o.length);
  }
};
function Uv(e, o) {
  var r = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var c = o;
  return r + String(a) + c + He(u, 2);
}
function qv(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + He(Math.abs(e) / 60, 2);
  }
  return wi(e, o);
}
function wi(e, o) {
  var r = o || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = He(Math.floor(a / 60), 2), c = He(a % 60, 2);
  return s + u + r + c;
}
var Hv = function(e, o) {
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
}, i1 = function(e, o) {
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
}, A2 = function(e, o) {
  var r = e.match(/(P+)(p+)?/) || [], s = r[1], a = r[2];
  if (!a)
    return Hv(e, o);
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
  return u.replace("{{date}}", Hv(s, o)).replace("{{time}}", i1(a, o));
}, x2 = {
  p: i1,
  P: A2
}, O2 = ["D", "DD"], R2 = ["YY", "YYYY"];
function L2(e) {
  return O2.indexOf(e) !== -1;
}
function N2(e) {
  return R2.indexOf(e) !== -1;
}
function Wv(e, o, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var B2 = {
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
}, P2 = function(e, o, r) {
  var s, a = B2[e];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
function ef(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, s = e.formats[r] || e.formats[e.defaultWidth];
    return s;
  };
}
var D2 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, M2 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, F2 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, U2 = {
  date: ef({
    formats: D2,
    defaultWidth: "full"
  }),
  time: ef({
    formats: M2,
    defaultWidth: "full"
  }),
  dateTime: ef({
    formats: F2,
    defaultWidth: "full"
  })
}, q2 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, H2 = function(e, o, r, s) {
  return q2[e];
};
function Qs(e) {
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
var W2 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, z2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, G2 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Y2 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, j2 = {
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
}, K2 = {
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
}, Z2 = function(e, o) {
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
}, X2 = {
  ordinalNumber: Z2,
  era: Qs({
    values: W2,
    defaultWidth: "wide"
  }),
  quarter: Qs({
    values: z2,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Qs({
    values: G2,
    defaultWidth: "wide"
  }),
  day: Qs({
    values: Y2,
    defaultWidth: "wide"
  }),
  dayPeriod: Qs({
    values: j2,
    defaultWidth: "wide",
    formattingValues: K2,
    defaultFormattingWidth: "wide"
  })
};
function ea(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], v = Array.isArray(f) ? Q2(f, function(g) {
      return g.test(c);
    }) : J2(f, function(g) {
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
function J2(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function Q2(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function eT(e) {
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
var tT = /^(\d+)(th|st|nd|rd)?/i, nT = /\d+/i, rT = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, oT = {
  any: [/^b/i, /^(a|c)/i]
}, iT = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, sT = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, aT = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, lT = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, uT = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, cT = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, dT = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, fT = {
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
}, hT = {
  ordinalNumber: eT({
    matchPattern: tT,
    parsePattern: nT,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ea({
    matchPatterns: rT,
    defaultMatchWidth: "wide",
    parsePatterns: oT,
    defaultParseWidth: "any"
  }),
  quarter: ea({
    matchPatterns: iT,
    defaultMatchWidth: "wide",
    parsePatterns: sT,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: ea({
    matchPatterns: aT,
    defaultMatchWidth: "wide",
    parsePatterns: lT,
    defaultParseWidth: "any"
  }),
  day: ea({
    matchPatterns: uT,
    defaultMatchWidth: "wide",
    parsePatterns: cT,
    defaultParseWidth: "any"
  }),
  dayPeriod: ea({
    matchPatterns: dT,
    defaultMatchWidth: "any",
    parsePatterns: fT,
    defaultParseWidth: "any"
  })
}, s1 = {
  code: "en-US",
  formatDistance: P2,
  formatLong: U2,
  formatRelative: H2,
  localize: X2,
  match: hT,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, pT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, mT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, vT = /^'([^]*?)'?$/, wT = /''/g, _T = /[a-zA-Z]/;
function gT(e, o, r) {
  var s, a, u, c, f, v, p, w, g, y, b, C, T, O;
  Ze(2, arguments);
  var E = String(o), I = gs(), R = (s = (a = void 0) !== null && a !== void 0 ? a : I.locale) !== null && s !== void 0 ? s : s1, P = Er((u = (c = (f = (v = void 0) !== null && v !== void 0 ? v : void 0) !== null && f !== void 0 ? f : I.firstWeekContainsDate) !== null && c !== void 0 ? c : (p = I.locale) === null || p === void 0 || (w = p.options) === null || w === void 0 ? void 0 : w.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(P >= 1 && P <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var q = Er((g = (y = (b = (C = void 0) !== null && C !== void 0 ? C : void 0) !== null && b !== void 0 ? b : I.weekStartsOn) !== null && y !== void 0 ? y : (T = I.locale) === null || T === void 0 || (O = T.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && g !== void 0 ? g : 0);
  if (!(q >= 0 && q <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!R.localize)
    throw new RangeError("locale must contain localize property");
  if (!R.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var M = Ct(e);
  if (!g2(M))
    throw new RangeError("Invalid time value");
  var N = Xf(M), j = $2(M, N), J = {
    firstWeekContainsDate: P,
    weekStartsOn: q,
    locale: R,
    _originalDate: M
  }, ne = E.match(mT).map(function(re) {
    var Se = re[0];
    if (Se === "p" || Se === "P") {
      var Ae = x2[Se];
      return Ae(re, R.formatLong);
    }
    return re;
  }).join("").match(pT).map(function(re) {
    if (re === "''")
      return "'";
    var Se = re[0];
    if (Se === "'")
      return $T(re);
    var Ae = I2[Se];
    if (Ae)
      return N2(re) && Wv(re, o, String(e)), L2(re) && Wv(re, o, String(e)), Ae(j, re, R.localize, J);
    if (Se.match(_T))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Se + "`");
    return re;
  }).join("");
  return ne;
}
function $T(e) {
  var o = e.match(vT);
  return o ? o[1].replace(wT, "'") : e;
}
function a1(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function yT(e) {
  return a1({}, e);
}
var zv = 1e3 * 60, $u = 1440, Gv = $u * 30, Yv = $u * 365;
function Ru(e, o, r) {
  var s, a, u;
  Ze(2, arguments);
  var c = gs(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : s1;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var v = w2(e, o);
  if (isNaN(v))
    throw new RangeError("Invalid time value");
  var p = a1(yT(r), {
    addSuffix: !!(r != null && r.addSuffix),
    comparison: v
  }), w, g;
  v > 0 ? (w = Ct(o), g = Ct(e)) : (w = Ct(e), g = Ct(o));
  var y = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), b;
  if (y === "floor")
    b = Math.floor;
  else if (y === "ceil")
    b = Math.ceil;
  else if (y === "round")
    b = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var C = g.getTime() - w.getTime(), T = C / zv, O = Xf(g) - Xf(w), E = (C - O) / zv, I = r == null ? void 0 : r.unit, R;
  if (I ? R = String(I) : T < 1 ? R = "second" : T < 60 ? R = "minute" : T < $u ? R = "hour" : E < Gv ? R = "day" : E < Yv ? R = "month" : R = "year", R === "second") {
    var P = b(C / 1e3);
    return f.formatDistance("xSeconds", P, p);
  } else if (R === "minute") {
    var q = b(T);
    return f.formatDistance("xMinutes", q, p);
  } else if (R === "hour") {
    var M = b(T / 60);
    return f.formatDistance("xHours", M, p);
  } else if (R === "day") {
    var N = b(E / $u);
    return f.formatDistance("xDays", N, p);
  } else if (R === "month") {
    var j = b(E / Gv);
    return j === 12 && I !== "month" ? f.formatDistance("xYears", 1, p) : f.formatDistance("xMonths", j, p);
  } else if (R === "year") {
    var J = b(E / Yv);
    return f.formatDistance("xYears", J, p);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function bT(e, o, r) {
  Ze(2, arguments);
  var s = Mv(e, r), a = Mv(o, r);
  return s.getTime() === a.getTime();
}
function VT(e, o) {
  return Ze(1, arguments), bT(e, Date.now(), o);
}
function CT(e) {
  return Ze(1, arguments), n1(e, Date.now());
}
function ET(e, o) {
  Ze(2, arguments);
  var r = Er(o);
  return p2(e, -r);
}
function ST(e) {
  return Ze(1, arguments), n1(e, ET(Date.now(), 1));
}
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function jv(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, s = Array(o); r < o; r++) s[r] = e[r];
  return s;
}
function kT(e) {
  if (Array.isArray(e)) return e;
}
function TT(e, o) {
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
function IT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AT(e, o) {
  return kT(e) || TT(e, o) || xT(e, o) || IT();
}
function xT(e, o) {
  if (e) {
    if (typeof e == "string") return jv(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? jv(e, o) : void 0;
  }
}
const l1 = Object.entries, Kv = Object.setPrototypeOf, OT = Object.isFrozen, RT = Object.getPrototypeOf, LT = Object.getOwnPropertyDescriptor;
let Nt = Object.freeze, Bt = Object.seal, as = Object.create, u1 = typeof Reflect < "u" && Reflect, Jf = u1.apply, Qf = u1.construct;
Nt || (Nt = function(o) {
  return o;
});
Bt || (Bt = function(o) {
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
const ta = _t(Array.prototype.forEach), NT = _t(Array.prototype.lastIndexOf), Zv = _t(Array.prototype.pop), Yi = _t(Array.prototype.push), BT = _t(Array.prototype.splice), Io = Array.isArray, ka = _t(String.prototype.toLowerCase), tf = _t(String.prototype.toString), Xv = _t(String.prototype.match), na = _t(String.prototype.replace), Jv = _t(String.prototype.indexOf), PT = _t(String.prototype.trim), DT = _t(Number.prototype.toString), MT = _t(Boolean.prototype.toString), Qv = typeof BigInt > "u" ? null : _t(BigInt.prototype.toString), ew = typeof Symbol > "u" ? null : _t(Symbol.prototype.toString), kt = _t(Object.prototype.hasOwnProperty), ra = _t(Object.prototype.toString), Ot = _t(RegExp.prototype.test), ni = FT(TypeError);
function _t(e) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      s[a - 1] = arguments[a];
    return Jf(e, o, s);
  };
}
function FT(e) {
  return function() {
    for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++)
      r[s] = arguments[s];
    return Qf(e, r);
  };
}
function Ie(e, o) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ka;
  if (Kv && Kv(e, null), !Io(o))
    return e;
  let s = o.length;
  for (; s--; ) {
    let a = o[s];
    if (typeof a == "string") {
      const u = r(a);
      u !== a && (OT(o) || (o[s] = u), a = u);
    }
    e[a] = !0;
  }
  return e;
}
function UT(e) {
  for (let o = 0; o < e.length; o++)
    kt(e, o) || (e[o] = null);
  return e;
}
function tn(e) {
  const o = as(null);
  for (const s of l1(e)) {
    var r = AT(s, 2);
    const a = r[0], u = r[1];
    kt(e, a) && (Io(u) ? o[a] = UT(u) : u && typeof u == "object" && u.constructor === Object ? o[a] = tn(u) : o[a] = u);
  }
  return o;
}
function qT(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return DT(e);
    case "boolean":
      return MT(e);
    case "bigint":
      return Qv ? Qv(e) : "0";
    case "symbol":
      return ew ? ew(e) : "Symbol()";
    case "undefined":
      return ra(e);
    case "function":
    case "object": {
      if (e === null)
        return ra(e);
      const o = e, r = yr(o, "toString");
      if (typeof r == "function") {
        const s = r(o);
        return typeof s == "string" ? s : ra(s);
      }
      return ra(e);
    }
    default:
      return ra(e);
  }
}
function yr(e, o) {
  for (; e !== null; ) {
    const s = LT(e, o);
    if (s) {
      if (s.get)
        return _t(s.get);
      if (typeof s.value == "function")
        return _t(s.value);
    }
    e = RT(e);
  }
  function r() {
    return null;
  }
  return r;
}
function HT(e) {
  try {
    return Ot(e, ""), !0;
  } catch {
    return !1;
  }
}
const tw = Nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), nf = Nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), rf = Nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), WT = Nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), of = Nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), zT = Nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), nw = Nt(["#text"]), rw = Nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), sf = Nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ow = Nt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ul = Nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), GT = Bt(/{{[\w\W]*|^[\w\W]*}}/g), YT = Bt(/<%[\w\W]*|^[\w\W]*%>/g), jT = Bt(/\${[\w\W]*/g), KT = Bt(/^data-[\-\w.\u00B7-\uFFFF]+$/), ZT = Bt(/^aria-[\-\w]+$/), iw = Bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), XT = Bt(/^(?:\w+script|data):/i), JT = Bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), QT = Bt(/^html$/i), eI = Bt(/^[a-z][.\w]*(-[.\w]+)+$/i), sw = Bt(/<[/\w!]/g), tI = Bt(/<[/\w]/g), nI = Bt(/<\/no(script|embed|frames)/i), rI = Bt(/\/>/i), gr = {
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
}, oI = function() {
  return typeof window > "u" ? null : window;
}, iI = function(o, r) {
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
}, aw = function() {
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
}, go = function(o, r, s, a) {
  return kt(o, r) && Io(o[r]) ? Ie(a.base ? tn(a.base) : {}, o[r], a.transform) : s;
};
function c1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : oI();
  const o = (G) => c1(G);
  if (o.version = "3.4.11", o.removed = [], !e || !e.document || e.document.nodeType !== gr.document || !e.Element)
    return o.isSupported = !1, o;
  let r = e.document;
  const s = r, a = s.currentScript;
  e.DocumentFragment;
  const u = e.HTMLTemplateElement, c = e.Node, f = e.Element, v = e.NodeFilter, p = e.NamedNodeMap;
  p === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const w = e.DOMParser, g = e.trustedTypes, y = f.prototype, b = yr(y, "cloneNode"), C = yr(y, "remove"), T = yr(y, "nextSibling"), O = yr(y, "childNodes"), E = yr(y, "parentNode"), I = yr(y, "shadowRoot"), R = yr(y, "attributes"), P = c && c.prototype ? yr(c.prototype, "nodeType") : null, q = c && c.prototype ? yr(c.prototype, "nodeName") : null;
  if (typeof u == "function") {
    const G = r.createElement("template");
    G.content && G.content.ownerDocument && (r = G.content.ownerDocument);
  }
  let M, N = "", j, J = !1, ne = 0;
  const re = function() {
    if (ne > 0)
      throw ni('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Se = function(_) {
    re(), ne++;
    try {
      return M.createHTML(_);
    } finally {
      ne--;
    }
  }, Ae = function(_) {
    re(), ne++;
    try {
      return M.createScriptURL(_);
    } finally {
      ne--;
    }
  }, ye = function() {
    return J || (j = iI(g, a), J = !0), j;
  }, Oe = r, ht = Oe.implementation, Yt = Oe.createNodeIterator, qe = Oe.createDocumentFragment, nt = Oe.getElementsByTagName, Xr = s.importNode;
  let A = aw();
  o.isSupported = typeof l1 == "function" && typeof E == "function" && ht && ht.createHTMLDocument !== void 0;
  const X = GT, se = YT, Ye = jT, be = KT, ge = ZT, We = XT, On = JT, rn = eI;
  let Zn = iw, je = null;
  const Tr = Ie({}, [...tw, ...nf, ...rf, ...of, ...nw]);
  let Pe = null;
  const Po = Ie({}, [...rw, ...sf, ...ow, ...Ul]);
  let ve = Object.seal(as(null, {
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
  })), Dt = null, Ir = null;
  const rt = Object.seal(as(null, {
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
  let Jr = !0, Qr = !0, mn = !1, Mt = !0, pt = !1, Rn = !0, Xn = !1, Jn = !1, Do = null, Ln = null, vn = !1, wn = !1, Qn = !1, er = !1, Ar = !0, xr = !1;
  const Or = "user-content-";
  let hr = !0, pr = !1, _n = {}, jt = null;
  const eo = Ie({}, [
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
  let Mo = null;
  const to = Ie({}, ["audio", "video", "img", "source", "image", "track"]);
  let le = null;
  const Q = Ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Re = "http://www.w3.org/1998/Math/MathML", ke = "http://www.w3.org/2000/svg", Et = "http://www.w3.org/1999/xhtml";
  let Nn = Et, no = !1, ro = null;
  const ki = Ie({}, [Re, ke, Et], tf), Rr = Nt(["mi", "mo", "mn", "ms", "mtext"]);
  let oo = Ie({}, Rr);
  const Lr = Nt(["annotation-xml"]);
  let io = Ie({}, Lr);
  const Ti = Ie({}, ["title", "style", "font", "a", "script"]);
  let Fo = null;
  const Zu = ["application/xhtml+xml", "text/html"], Xu = "text/html";
  let Xe = null, so = null;
  const Ju = r.createElement("form"), Os = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, Rs = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (so && so === _)
      return;
    (!_ || typeof _ != "object") && (_ = {}), _ = tn(_), Fo = // eslint-disable-next-line unicorn/prefer-includes
    Zu.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? Xu : _.PARSER_MEDIA_TYPE, Xe = Fo === "application/xhtml+xml" ? tf : ka, je = go(_, "ALLOWED_TAGS", Tr, {
      transform: Xe
    }), Pe = go(_, "ALLOWED_ATTR", Po, {
      transform: Xe
    }), ro = go(_, "ALLOWED_NAMESPACES", ki, {
      transform: tf
    }), le = go(_, "ADD_URI_SAFE_ATTR", Q, {
      transform: Xe,
      base: Q
    }), Mo = go(_, "ADD_DATA_URI_TAGS", to, {
      transform: Xe,
      base: to
    }), jt = go(_, "FORBID_CONTENTS", eo, {
      transform: Xe
    }), Dt = go(_, "FORBID_TAGS", tn({}), {
      transform: Xe
    }), Ir = go(_, "FORBID_ATTR", tn({}), {
      transform: Xe
    }), _n = kt(_, "USE_PROFILES") ? _.USE_PROFILES && typeof _.USE_PROFILES == "object" ? tn(_.USE_PROFILES) : _.USE_PROFILES : !1, Jr = _.ALLOW_ARIA_ATTR !== !1, Qr = _.ALLOW_DATA_ATTR !== !1, mn = _.ALLOW_UNKNOWN_PROTOCOLS || !1, Mt = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, pt = _.SAFE_FOR_TEMPLATES || !1, Rn = _.SAFE_FOR_XML !== !1, Xn = _.WHOLE_DOCUMENT || !1, wn = _.RETURN_DOM || !1, Qn = _.RETURN_DOM_FRAGMENT || !1, er = _.RETURN_TRUSTED_TYPE || !1, vn = _.FORCE_BODY || !1, Ar = _.SANITIZE_DOM !== !1, xr = _.SANITIZE_NAMED_PROPS || !1, hr = _.KEEP_CONTENT !== !1, pr = _.IN_PLACE || !1, Zn = HT(_.ALLOWED_URI_REGEXP) ? _.ALLOWED_URI_REGEXP : iw, Nn = typeof _.NAMESPACE == "string" ? _.NAMESPACE : Et, oo = kt(_, "MATHML_TEXT_INTEGRATION_POINTS") && _.MATHML_TEXT_INTEGRATION_POINTS && typeof _.MATHML_TEXT_INTEGRATION_POINTS == "object" ? tn(_.MATHML_TEXT_INTEGRATION_POINTS) : Ie({}, Rr), io = kt(_, "HTML_INTEGRATION_POINTS") && _.HTML_INTEGRATION_POINTS && typeof _.HTML_INTEGRATION_POINTS == "object" ? tn(_.HTML_INTEGRATION_POINTS) : Ie({}, Lr);
    const x = kt(_, "CUSTOM_ELEMENT_HANDLING") && _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING == "object" ? tn(_.CUSTOM_ELEMENT_HANDLING) : as(null);
    if (ve = as(null), kt(x, "tagNameCheck") && Os(x.tagNameCheck) && (ve.tagNameCheck = x.tagNameCheck), kt(x, "attributeNameCheck") && Os(x.attributeNameCheck) && (ve.attributeNameCheck = x.attributeNameCheck), kt(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), Bt(ve), pt && (Qr = !1), Qn && (wn = !0), _n && (je = Ie({}, nw), Pe = as(null), _n.html === !0 && (Ie(je, tw), Ie(Pe, rw)), _n.svg === !0 && (Ie(je, nf), Ie(Pe, sf), Ie(Pe, Ul)), _n.svgFilters === !0 && (Ie(je, rf), Ie(Pe, sf), Ie(Pe, Ul)), _n.mathMl === !0 && (Ie(je, of), Ie(Pe, ow), Ie(Pe, Ul))), rt.tagCheck = null, rt.attributeCheck = null, kt(_, "ADD_TAGS") && (typeof _.ADD_TAGS == "function" ? rt.tagCheck = _.ADD_TAGS : Io(_.ADD_TAGS) && (je === Tr && (je = tn(je)), Ie(je, _.ADD_TAGS, Xe))), kt(_, "ADD_ATTR") && (typeof _.ADD_ATTR == "function" ? rt.attributeCheck = _.ADD_ATTR : Io(_.ADD_ATTR) && (Pe === Po && (Pe = tn(Pe)), Ie(Pe, _.ADD_ATTR, Xe))), kt(_, "ADD_URI_SAFE_ATTR") && Io(_.ADD_URI_SAFE_ATTR) && Ie(le, _.ADD_URI_SAFE_ATTR, Xe), kt(_, "FORBID_CONTENTS") && Io(_.FORBID_CONTENTS) && (jt === eo && (jt = tn(jt)), Ie(jt, _.FORBID_CONTENTS, Xe)), kt(_, "ADD_FORBID_CONTENTS") && Io(_.ADD_FORBID_CONTENTS) && (jt === eo && (jt = tn(jt)), Ie(jt, _.ADD_FORBID_CONTENTS, Xe)), hr && (je["#text"] = !0), Xn && Ie(je, ["html", "head", "body"]), je.table && (Ie(je, ["tbody"]), delete Dt.tbody), _.TRUSTED_TYPES_POLICY) {
      if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ni('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ni('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const z = M;
      M = _.TRUSTED_TYPES_POLICY;
      try {
        N = Se("");
      } catch (K) {
        throw M = z, K;
      }
    } else _.TRUSTED_TYPES_POLICY === null ? (M = void 0, N = "") : (M === void 0 && (M = ye()), M && typeof N == "string" && (N = Se("")));
    Nt && Nt(_), so = _;
  }, ja = Ie({}, [...nf, ...rf, ...WT]), Ka = Ie({}, [...of, ...zT]), Qu = function(_, x, z) {
    return x.namespaceURI === Et ? _ === "svg" : x.namespaceURI === Re ? _ === "svg" && (z === "annotation-xml" || oo[z]) : !!ja[_];
  }, ec = function(_, x, z) {
    return x.namespaceURI === Et ? _ === "math" : x.namespaceURI === ke ? _ === "math" && io[z] : !!Ka[_];
  }, tc = function(_, x, z) {
    return x.namespaceURI === ke && !io[z] || x.namespaceURI === Re && !oo[z] ? !1 : !Ka[_] && (Ti[_] || !ja[_]);
  }, Ii = function(_) {
    let x = E(_);
    (!x || !x.tagName) && (x = {
      namespaceURI: Nn,
      tagName: "template"
    });
    const z = ka(_.tagName), K = ka(x.tagName);
    return ro[_.namespaceURI] ? _.namespaceURI === ke ? Qu(z, x, K) : _.namespaceURI === Re ? ec(z, x, K) : _.namespaceURI === Et ? tc(z, x, K) : !!(Fo === "application/xhtml+xml" && ro[_.namespaceURI]) : !1;
  }, mr = function(_) {
    Yi(o.removed, {
      element: _
    });
    try {
      E(_).removeChild(_);
    } catch {
      if (C(_), !E(_))
        throw ni("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Uo = function(_) {
    const x = O(_);
    if (x) {
      const K = [];
      ta(x, (fe) => {
        Yi(K, fe);
      }), ta(K, (fe) => {
        try {
          C(fe);
        } catch {
        }
      });
    }
    const z = R(_);
    if (z)
      for (let K = z.length - 1; K >= 0; --K) {
        const fe = z[K], Ve = fe && fe.name;
        if (typeof Ve == "string")
          try {
            _.removeAttribute(Ve);
          } catch {
          }
      }
  }, Nr = function(_, x) {
    try {
      Yi(o.removed, {
        attribute: x.getAttributeNode(_),
        from: x
      });
    } catch {
      Yi(o.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(_), _ === "is")
      if (wn || Qn)
        try {
          mr(x);
        } catch {
        }
      else
        try {
          x.setAttribute(_, "");
        } catch {
        }
  }, nc = function(_) {
    const x = R(_);
    if (x)
      for (let z = x.length - 1; z >= 0; --z) {
        const K = x[z], fe = K && K.name;
        if (!(typeof fe != "string" || Pe[Xe(fe)]))
          try {
            _.removeAttribute(fe);
          } catch {
          }
      }
  }, rc = function(_) {
    const x = [_];
    for (; x.length > 0; ) {
      const z = x.pop();
      (P ? P(z) : z.nodeType) === gr.element && nc(z);
      const fe = O(z);
      if (fe)
        for (let Ve = fe.length - 1; Ve >= 0; --Ve)
          x.push(fe[Ve]);
    }
  }, Ls = function(_) {
    let x = null, z = null;
    if (vn)
      _ = "<remove></remove>" + _;
    else {
      const Ve = Xv(_, /^[\r\n\t ]+/);
      z = Ve && Ve[0];
    }
    Fo === "application/xhtml+xml" && Nn === Et && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const K = M ? Se(_) : _;
    if (Nn === Et)
      try {
        x = new w().parseFromString(K, Fo);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = ht.createDocument(Nn, "template", null);
      try {
        x.documentElement.innerHTML = no ? N : K;
      } catch {
      }
    }
    const fe = x.body || x.documentElement;
    return _ && z && fe.insertBefore(r.createTextNode(z), fe.childNodes[0] || null), Nn === Et ? nt.call(x, Xn ? "html" : "body")[0] : Xn ? x.documentElement : fe;
  }, Ns = function(_) {
    return Yt.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      v.SHOW_ELEMENT | v.SHOW_COMMENT | v.SHOW_TEXT | v.SHOW_PROCESSING_INSTRUCTION | v.SHOW_CDATA_SECTION,
      null
    );
  }, qo = function(_) {
    return _ = na(_, X, " "), _ = na(_, se, " "), _ = na(_, Ye, " "), _;
  }, Bs = function(_) {
    var x;
    _.normalize();
    const z = Yt.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      v.SHOW_TEXT | v.SHOW_COMMENT | v.SHOW_CDATA_SECTION | v.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let K = z.nextNode();
    for (; K; )
      K.data = qo(K.data), K = z.nextNode();
    const fe = (x = _.querySelectorAll) === null || x === void 0 ? void 0 : x.call(_, "template");
    fe && ta(fe, (Ve) => {
      ao(Ve.content) && Bs(Ve.content);
    });
  }, Ai = function(_) {
    const x = q ? q(_) : null;
    return typeof x != "string" || Xe(x) !== "form" ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    _.nodeType !== P(_) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    _.childNodes !== O(_);
  }, ao = function(_) {
    if (!P || typeof _ != "object" || _ === null)
      return !1;
    try {
      return P(_) === gr.documentFragment;
    } catch {
      return !1;
    }
  }, Ho = function(_) {
    if (!P || typeof _ != "object" || _ === null)
      return !1;
    try {
      return typeof P(_) == "number";
    } catch {
      return !1;
    }
  };
  function Bn(G, _, x) {
    G.length !== 0 && ta(G, (z) => {
      z.call(o, _, x, so);
    });
  }
  const Za = function(_, x) {
    return !!(Rn && _.hasChildNodes() && !Ho(_.firstElementChild) && Ot(sw, _.textContent) && Ot(sw, _.innerHTML) || Rn && _.namespaceURI === Et && x === "style" && Ho(_.firstElementChild) || _.nodeType === gr.processingInstruction || Rn && _.nodeType === gr.comment && Ot(tI, _.data));
  }, Xa = function(_, x) {
    if (!Dt[x] && Wo(x) && (ve.tagNameCheck instanceof RegExp && Ot(ve.tagNameCheck, x) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(x)))
      return !1;
    if (hr && !jt[x]) {
      const z = E(_), K = O(_);
      if (K && z) {
        const fe = K.length;
        for (let Ve = fe - 1; Ve >= 0; --Ve) {
          const mt = pr ? K[Ve] : b(K[Ve], !0);
          z.insertBefore(mt, T(_));
        }
      }
    }
    return mr(_), !0;
  }, xi = function(_) {
    if (Bn(A.beforeSanitizeElements, _, null), Ai(_))
      return mr(_), !0;
    const x = Xe(q ? q(_) : _.nodeName);
    if (Bn(A.uponSanitizeElement, _, {
      tagName: x,
      allowedTags: je
    }), Za(_, x))
      return mr(_), !0;
    if (Dt[x] || !(rt.tagCheck instanceof Function && rt.tagCheck(x)) && !je[x])
      return Xa(_, x);
    if ((P ? P(_) : _.nodeType) === gr.element && !Ii(_) || (x === "noscript" || x === "noembed" || x === "noframes") && Ot(nI, _.innerHTML))
      return mr(_), !0;
    if (pt && _.nodeType === gr.text) {
      const K = qo(_.textContent);
      _.textContent !== K && (Yi(o.removed, {
        element: _.cloneNode()
      }), _.textContent = K);
    }
    return Bn(A.afterSanitizeElements, _, null), !1;
  }, Ja = function(_, x, z) {
    if (Ir[x] || Ar && (x === "id" || x === "name") && (z in r || z in Ju))
      return !1;
    const K = Pe[x] || rt.attributeCheck instanceof Function && rt.attributeCheck(x, _);
    if (!(Qr && Ot(be, x))) {
      if (!(Jr && Ot(ge, x))) {
        if (K) {
          if (!le[x]) {
            if (!Ot(Zn, na(z, On, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && _ !== "script" && Jv(z, "data:") === 0 && Mo[_])) {
                if (!(mn && !Ot(We, na(z, On, "")))) {
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
          !(Wo(_) && (ve.tagNameCheck instanceof RegExp && Ot(ve.tagNameCheck, _) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(_)) && (ve.attributeNameCheck instanceof RegExp && Ot(ve.attributeNameCheck, x) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(x, _)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && Ot(ve.tagNameCheck, z) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(z)))
        ) return !1;
      }
    }
    return !0;
  }, Qa = Ie({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Wo = function(_) {
    return !Qa[ka(_)] && Ot(rn, _);
  }, el = function(_, x, z, K) {
    if (M && typeof g == "object" && typeof g.getAttributeType == "function" && !z)
      switch (g.getAttributeType(_, x)) {
        case "TrustedHTML":
          return Se(K);
        case "TrustedScriptURL":
          return Ae(K);
      }
    return K;
  }, oc = function(_, x, z, K) {
    try {
      z ? _.setAttributeNS(z, x, K) : _.setAttribute(x, K), Ai(_) ? mr(_) : Zv(o.removed);
    } catch {
      Nr(x, _);
    }
  }, Ps = function(_) {
    Bn(A.beforeSanitizeAttributes, _, null);
    const x = _.attributes;
    if (!x || Ai(_))
      return;
    const z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Pe,
      forceKeepAttr: void 0
    };
    let K = x.length;
    const fe = Xe(_.nodeName);
    for (; K--; ) {
      const Ve = x[K], mt = Ve.name, ot = Ve.namespaceURI, Kt = Ve.value, on = Xe(mt), Oi = Kt;
      let Tt = mt === "value" ? Oi : PT(Oi);
      if (z.attrName = on, z.attrValue = Tt, z.keepAttr = !0, z.forceKeepAttr = void 0, Bn(A.uponSanitizeAttribute, _, z), Tt = z.attrValue, xr && (on === "id" || on === "name") && Jv(Tt, Or) !== 0 && (Nr(mt, _), Tt = Or + Tt), Rn && Ot(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Tt)) {
        Nr(mt, _);
        continue;
      }
      if (on === "attributename" && Xv(Tt, "href")) {
        Nr(mt, _);
        continue;
      }
      if (!z.forceKeepAttr) {
        if (!z.keepAttr) {
          Nr(mt, _);
          continue;
        }
        if (!Mt && Ot(rI, Tt)) {
          Nr(mt, _);
          continue;
        }
        if (pt && (Tt = qo(Tt)), !Ja(fe, on, Tt)) {
          Nr(mt, _);
          continue;
        }
        Tt = el(fe, on, ot, Tt), Tt !== Oi && oc(_, mt, ot, Tt);
      }
    }
    Bn(A.afterSanitizeAttributes, _, null);
  }, zo = function(_) {
    let x = null;
    const z = Ns(_);
    for (Bn(A.beforeSanitizeShadowDOM, _, null); x = z.nextNode(); )
      if (Bn(A.uponSanitizeShadowNode, x, null), xi(x), Ps(x), ao(x.content) && zo(x.content), (P ? P(x) : x.nodeType) === gr.element) {
        const fe = I(x);
        ao(fe) && (Go(fe), zo(fe));
      }
    Bn(A.afterSanitizeShadowDOM, _, null);
  }, Go = function(_) {
    const x = [{
      node: _,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const z = x.pop();
      if (z.shadow) {
        zo(z.shadow);
        continue;
      }
      const K = z.node, Ve = (P ? P(K) : K.nodeType) === gr.element, mt = O(K);
      if (mt)
        for (let ot = mt.length - 1; ot >= 0; --ot)
          x.push({
            node: mt[ot],
            shadow: null
          });
      if (Ve) {
        const ot = q ? q(K) : null;
        if (typeof ot == "string" && Xe(ot) === "template") {
          const Kt = K.content;
          ao(Kt) && x.push({
            node: Kt,
            shadow: null
          });
        }
      }
      if (Ve) {
        const ot = I(K);
        ao(ot) && x.push({
          node: null,
          shadow: ot
        }, {
          node: ot,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(G) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, z = null, K = null, fe = null;
    if (no = !G, no && (G = "<!-->"), typeof G != "string" && !Ho(G) && (G = qT(G), typeof G != "string"))
      throw ni("dirty is not a string, aborting");
    if (!o.isSupported)
      return G;
    Jn ? (je = Do, Pe = Ln) : Rs(_), (A.uponSanitizeElement.length > 0 || A.uponSanitizeAttribute.length > 0) && (je = tn(je)), A.uponSanitizeAttribute.length > 0 && (Pe = tn(Pe)), o.removed = [];
    const Ve = pr && typeof G != "string" && Ho(G);
    if (Ve) {
      const Kt = q ? q(G) : G.nodeName;
      if (typeof Kt == "string") {
        const on = Xe(Kt);
        if (!je[on] || Dt[on])
          throw ni("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ai(G))
        throw ni("root node is clobbered and cannot be sanitized in-place");
      try {
        Go(G);
      } catch (on) {
        throw Uo(G), on;
      }
    } else if (Ho(G))
      x = Ls("<!---->"), z = x.ownerDocument.importNode(G, !0), z.nodeType === gr.element && z.nodeName === "BODY" || z.nodeName === "HTML" ? x = z : x.appendChild(z), Go(z);
    else {
      if (!wn && !pt && !Xn && // eslint-disable-next-line unicorn/prefer-includes
      G.indexOf("<") === -1)
        return M && er ? Se(G) : G;
      if (x = Ls(G), !x)
        return wn ? null : er ? N : "";
    }
    x && vn && mr(x.firstChild);
    const mt = Ns(Ve ? G : x);
    try {
      for (; K = mt.nextNode(); )
        xi(K), Ps(K), ao(K.content) && zo(K.content);
    } catch (Kt) {
      throw Ve && Uo(G), Kt;
    }
    if (Ve)
      return ta(o.removed, (Kt) => {
        Kt.element && rc(Kt.element);
      }), pt && Bs(G), G;
    if (wn) {
      if (pt && Bs(x), Qn)
        for (fe = qe.call(x.ownerDocument); x.firstChild; )
          fe.appendChild(x.firstChild);
      else
        fe = x;
      return (Pe.shadowroot || Pe.shadowrootmode) && (fe = Xr.call(s, fe, !0)), fe;
    }
    let ot = Xn ? x.outerHTML : x.innerHTML;
    return Xn && je["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Ot(QT, x.ownerDocument.doctype.name) && (ot = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + ot), pt && (ot = qo(ot)), M && er ? Se(ot) : ot;
  }, o.setConfig = function() {
    let G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Rs(G), Jn = !0, Do = je, Ln = Pe;
  }, o.clearConfig = function() {
    so = null, Jn = !1, Do = null, Ln = null, M = j, N = "";
  }, o.isValidAttribute = function(G, _, x) {
    so || Rs({});
    const z = Xe(G), K = Xe(_);
    return Ja(z, K, x);
  }, o.addHook = function(G, _) {
    typeof _ == "function" && kt(A, G) && Yi(A[G], _);
  }, o.removeHook = function(G, _) {
    if (kt(A, G)) {
      if (_ !== void 0) {
        const x = NT(A[G], _);
        return x === -1 ? void 0 : BT(A[G], x, 1)[0];
      }
      return Zv(A[G]);
    }
  }, o.removeHooks = function(G) {
    kt(A, G) && (A[G] = []);
  }, o.removeAllHooks = function() {
    A = aw();
  }, o;
}
var sI = c1();
const Sr = (e) => {
  let o = "";
  if (e)
    try {
      o = gT(new Date(e), Lt.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, d1 = (e) => e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"), f1 = (e) => sI.sanitize(e), h1 = (e, o) => {
  const r = d1(e).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), s = r.length > o ? "..." : "";
  return r.substring(0, o) + s;
}, aI = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (s) => CT(s.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (s) => ST(s.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (s) => VT(s.firstEventTime)
      );
      break;
  }
  return r;
}, Lu = "/alec", p1 = "/alec/engine/configuration", m1 = "/alec/llm/configuration", lI = "/alec/llm/validate", v1 = "/alec/llm/suggestions", uI = "/alec/llm/usage", w1 = "/alec/situation", cI = async () => {
  try {
    const e = await Pt.get(`${p1}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, dI = async (e) => {
  try {
    return (await Pt.post(p1, e)).status === 200;
  } catch {
    return !1;
  }
}, fI = async () => {
  try {
    const e = await Pt.get(m1);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, hI = async (e) => {
  try {
    const o = await Pt.post(m1, e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, pI = async (e) => {
  try {
    const o = await Pt.post(lI, e);
    return o.status === 200 ? o.data : { ok: !1, message: `Unexpected response (HTTP ${o.status}).` };
  } catch {
    return { ok: !1, message: "Could not reach the server to validate." };
  }
}, _1 = async (e) => {
  try {
    const o = await Pt.get(`${v1}/${e}`);
    return o.status === 200 ? o.data : o.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, mI = async (e) => {
  try {
    const o = await Pt.post(
      `${v1}/${e}/reanalyze`
    );
    return o.status === 202 || o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, vI = async (e = 30) => {
  try {
    const o = await Pt.get(`${uI}?days=${e}`);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, g1 = async (e, o) => {
  try {
    const r = await Pt.post(`${Lu}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return o == Lt.REJECTED.toLowerCase() && r.status === 200 && await Qg(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, lw = async (e, o) => {
  try {
    return (await Pt.delete(`${Lu}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, $1 = async (e, o) => {
  try {
    return (await Pt.put(`${Lu}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, wI = async (e) => {
  try {
    return (await Pt.post(w1, e)).status === 200;
  } catch {
    return !1;
  }
}, _I = async () => {
  try {
    return (await Pt.post(`${w1}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, gI = async () => {
  try {
    return (await Pt.post(`${Lu}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, $I = window.Vue.defineComponent, Sn = window.Vue.unref, af = window.Vue.normalizeClass, Vr = window.Vue.createElementVNode, ri = window.Vue.toDisplayString, $o = window.Vue.openBlock, yo = window.Vue.createElementBlock, oa = window.Vue.createCommentVNode, uw = window.Vue.createVNode, eh = window.Vue.createTextVNode, yI = window.Vue.renderList, bI = window.Vue.Fragment, VI = window.Vue.pushScopeId, CI = window.Vue.popScopeId, mh = (e) => (VI("data-v-aab1b2b8"), e = e(), CI(), e), EI = { class: "content" }, SI = { class: "title-row" }, kI = { class: "title" }, TI = ["title"], II = {
  key: 1,
  class: "accepted"
}, AI = {
  key: 2,
  class: "rejected"
}, xI = /* @__PURE__ */ mh(() => /* @__PURE__ */ Vr("span", { class: "info-title" }, " Duration: ", -1)), OI = { key: 0 }, RI = /* @__PURE__ */ mh(() => /* @__PURE__ */ Vr("span", { class: "info-title" }, " First Event: ", -1)), LI = { class: "description" }, NI = /* @__PURE__ */ mh(() => /* @__PURE__ */ Vr("hr", null, null, -1)), BI = {
  key: 1,
  class: "count-info"
}, PI = /* @__PURE__ */ eh(" Alarms: "), DI = { class: "info-title" }, MI = window.Vue.onMounted, FI = window.Vue.ref, UI = /* @__PURE__ */ $I({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, s = Lt.ACCEPTED, a = Lt.REJECTED, u = (/* @__PURE__ */ new Date()).getTime(), c = () => {
      var v;
      o("situation-selected", (v = r.situationInfo) == null ? void 0 : v.id);
    }, f = FI("none");
    return MI(async () => {
      var p;
      if (((p = r.situationInfo) == null ? void 0 : p.id) === void 0) return;
      const v = await _1(r.situationInfo.id);
      v && v.status && (f.value = v.status);
    }), (v, p) => {
      var w, g, y;
      return $o(), yo("div", {
        onClick: c,
        class: af(["card", {
          rejected: r.situationInfo.status == Sn(a)
        }])
      }, [
        Vr("div", {
          class: af(["severity-line", [`${(g = (w = r.situationInfo) == null ? void 0 : w.severity) == null ? void 0 : g.toLowerCase()}-bg dark`]])
        }, null, 2),
        Vr("div", EI, [
          Vr("div", SI, [
            Vr("div", kI, "Situation " + ri((y = r.situationInfo) == null ? void 0 : y.id), 1),
            f.value !== "none" ? ($o(), yo("span", {
              key: 0,
              class: af(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + ri(f.value === "pending" ? "…" : ""), 11, TI)) : oa("", !0),
            r.situationInfo.status == Sn(s) ? ($o(), yo("div", II, [
              uw(Sn(te), {
                icon: Sn(ws),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : oa("", !0),
            r.situationInfo.status == Sn(a) ? ($o(), yo("div", AI, [
              uw(Sn(te), {
                icon: Sn(t1),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : oa("", !0)
          ]),
          Vr("div", null, [
            xI,
            eh(" " + ri(Sn(Ru)(
              Sn(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? oa("", !0) : ($o(), yo("div", OI, [
            RI,
            eh(ri(Sn(Sr)(r.situationInfo.firstEventTime)), 1)
          ])),
          Vr("div", LI, ri(Sn(h1)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          NI,
          r.situationInfo.relatedAlarms ? ($o(), yo("div", BI, [
            PI,
            Vr("span", DI, ri(r.situationInfo.relatedAlarms.length), 1)
          ])) : oa("", !0),
          ($o(!0), yo(bI, null, yI(Sn(Ge.keys)(
            Sn(Ge.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (b) => ($o(), yo("div", {
            class: "info-title",
            key: b
          }, " - " + ri(b), 1))), 128))
        ])
      ], 2);
    };
  }
}), y1 = /* @__PURE__ */ Le(UI, [["__scopeId", "data-v-aab1b2b8"]]), qI = window.Vue.openBlock, HI = window.Vue.createElementBlock, WI = window.Vue.createElementVNode;
var zI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const GI = {}, YI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jI = /* @__PURE__ */ WI("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), KI = [
  jI
];
function ZI(e, o) {
  return qI(), HI("svg", YI, KI);
}
var XI = /* @__PURE__ */ zI(GI, [["render", ZI]]);
const JI = window.Vue.openBlock, QI = window.Vue.createElementBlock, b1 = window.Vue.createElementVNode;
var eA = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tA = {}, nA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, rA = /* @__PURE__ */ b1("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), oA = /* @__PURE__ */ b1("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), iA = [
  rA,
  oA
];
function sA(e, o) {
  return JI(), QI("svg", nA, iA);
}
var aA = /* @__PURE__ */ eA(tA, [["render", sA]]);
const lA = window.Vue.openBlock, uA = window.Vue.createElementBlock, cA = window.Vue.createElementVNode;
var dA = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fA = {}, hA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pA = /* @__PURE__ */ cA("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), mA = [
  pA
];
function vA(e, o) {
  return lA(), uA("svg", hA, mA);
}
var wA = /* @__PURE__ */ dA(fA, [["render", vA]]);
const _A = window.Vue.openBlock, gA = window.Vue.createElementBlock, $A = window.Vue.createElementVNode;
var yA = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const bA = {}, VA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, CA = /* @__PURE__ */ $A("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), EA = [
  CA
];
function SA(e, o) {
  return _A(), gA("svg", VA, EA);
}
var V1 = /* @__PURE__ */ yA(bA, [["render", SA]]);
const kA = window.Vue.defineComponent, bo = window.Vue.unref, ql = window.Vue.normalizeClass, Hl = window.Vue.createVNode, TA = window.Vue.openBlock, IA = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const AA = { class: "paginator" }, xA = /* @__PURE__ */ kA({
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
    return (a, u) => (TA(), IA("div", AA, [
      Hl(bo(te), {
        icon: bo(XI),
        "aria-hidden": "true",
        class: ql(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      Hl(bo(te), {
        icon: bo(wA),
        "aria-hidden": "true",
        class: ql(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Hl(bo(te), {
        icon: bo(V1),
        "aria-hidden": "true",
        class: ql(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Hl(bo(te), {
        icon: bo(aA),
        "aria-hidden": "true",
        class: ql(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
}), OA = /* @__PURE__ */ Le(xA, [["__scopeId", "data-v-54e14a59"]]), xe = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, RA = window.Vue.computed, Nu = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = RA(() => e.value[s] ? e.value[s] : o[s]);
  }), r;
}, bi = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, Vi = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var LA = Object.defineProperty, NA = Object.defineProperties, BA = Object.getOwnPropertyDescriptors, cw = Object.getOwnPropertySymbols, PA = Object.prototype.hasOwnProperty, DA = Object.prototype.propertyIsEnumerable, dw = (e, o, r) => o in e ? LA(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, fw = (e, o) => {
  for (var r in o || (o = {}))
    PA.call(o, r) && dw(e, r, o[r]);
  if (cw)
    for (var r of cw(o))
      DA.call(o, r) && dw(e, r, o[r]);
  return e;
}, MA = (e, o) => NA(e, BA(o));
const FA = window.Vue.defineComponent, UA = window.Vue.h;
var qA = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const HA = {
  center: {
    type: Boolean,
    default: !1
  }
}, WA = FA({
  props: HA,
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
        this.styles = MA(fw({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Vi(this.failsafe), this.failsafe = bi(() => {
            this.pressed = !1, this.active = !1;
          }, 500);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return UA("div", {
        style: fw({}, this.styles),
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
var Ro = /* @__PURE__ */ qA(WA, [["__scopeId", "data-v-18e2a5db"]]);
const zA = window.Vue.openBlock, GA = window.Vue.createElementBlock, YA = window.Vue.createElementVNode;
var jA = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const KA = {}, ZA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, XA = /* @__PURE__ */ YA("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), JA = [
  XA
];
function QA(e, o) {
  return zA(), GA("svg", ZA, JA);
}
var $s = /* @__PURE__ */ jA(KA, [["render", QA]]);
const hw = window.Vue.computed, ex = (e, o, r) => {
  const s = hw(() => o.value.filter((u) => !u.disabled)), a = hw(() => e.value ? s.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(s.value[s.value.length - 1]) : r(s.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === s.value.length - 1 ? r(s.value[0]) : r(s.value[a.value + 1]));
    }
  };
}, tx = window.Vue.openBlock, nx = window.Vue.createElementBlock, vh = window.Vue.createElementVNode;
var rx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ox = {}, ix = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, sx = /* @__PURE__ */ vh("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), ax = /* @__PURE__ */ vh("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), lx = /* @__PURE__ */ vh("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), ux = [
  sx,
  ax,
  lx
];
function cx(e, o) {
  return tx(), nx("svg", ix, ux);
}
var dx = /* @__PURE__ */ rx(ox, [["render", cx]]), fx = Object.defineProperty, hx = Object.defineProperties, px = Object.getOwnPropertyDescriptors, pw = Object.getOwnPropertySymbols, mx = Object.prototype.hasOwnProperty, vx = Object.prototype.propertyIsEnumerable, mw = (e, o, r) => o in e ? fx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, C1 = (e, o) => {
  for (var r in o || (o = {}))
    mx.call(o, r) && mw(e, r, o[r]);
  if (pw)
    for (var r of pw(o))
      vx.call(o, r) && mw(e, r, o[r]);
  return e;
}, E1 = (e, o) => hx(e, px(o));
const ys = window.Vue.defineComponent, Pa = window.Vue.resolveComponent, Cr = window.Vue.openBlock, us = window.Vue.createElementBlock, wx = window.Vue.createVNode, yu = window.Vue.createBlock, _x = window.Vue.withModifiers, _s = window.Vue.inject, Da = window.Vue.computed, gx = window.Vue.normalizeClass, ji = window.Vue.createElementVNode, bu = window.Vue.toDisplayString, fu = window.Vue.renderSlot, Ta = window.Vue.createCommentVNode, $x = window.Vue.withDirectives, yx = window.Vue.vShow, th = window.Vue.ref, vw = window.Vue.toRef, ww = window.Vue.nextTick, nh = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const wh = window.Vue.provide, _w = window.Vue.isRef, bx = window.Vue.onBeforeUnmount;
var qa = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Vx = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, Cx = ys({
  props: Vx,
  components: {
    FeatherIcon: te
  }
}), Ex = ["title"];
function Sx(e, o, r, s, a, u) {
  const c = Pa("FeatherIcon");
  return Cr(), us("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    wx(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, Ex);
}
var kx = /* @__PURE__ */ qa(Cx, [["render", Sx], ["__scopeId", "data-v-4265058e"]]);
const Tx = ys({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return $s;
    }
  },
  components: {
    ActionIcon: kx
  }
});
function Ix(e, o, r, s, a, u) {
  const c = Pa("ActionIcon");
  return Cr(), yu(c, {
    onClick: o[0] || (o[0] = _x((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var Ax = /* @__PURE__ */ qa(Tx, [["render", Ix]]);
const xx = ys({
  computed: {
    errorIcon() {
      return dx;
    }
  },
  components: {
    FeatherIcon: te
  }
});
function Ox(e, o, r, s, a, u) {
  const c = Pa("FeatherIcon");
  return Cr(), yu(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var Rx = /* @__PURE__ */ qa(xx, [["render", Ox], ["__scopeId", "data-v-0b8faef3"]]);
const Lx = {
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
}, Nx = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, Bx = ys({
  emits: Nx,
  props: Lx,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = _s("wrapperOptions", {}), o = _s("validationErrorMessage", !1), r = Da(() => e.error ? e.error : o && o.value ? o.value : !1);
    return E1(C1({}, e), { error: r });
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
    ClearIcon: Ax,
    ErrorIcon: Rx
  }
}), Px = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, Dx = ["for"], Mx = { class: "prefix" }, Fx = { class: "post" };
function Ux(e, o, r, s, a, u) {
  const c = Pa("ClearIcon"), f = Pa("ErrorIcon");
  return Cr(), us("div", {
    class: gx(["feather-input-wrapper-container", e.containerCls])
  }, [
    ji("fieldset", Px, [
      ji("legend", null, bu(e.label), 1)
    ]),
    ji("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, bu(e.label), 9, Dx),
    ji("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...v) => e.handleWrapperClick && e.handleWrapperClick(...v))
    }, [
      ji("div", Mx, [
        fu(e.$slots, "pre", {}, void 0, !0)
      ]),
      fu(e.$slots, "default", {}, void 0, !0),
      ji("div", Fx, [
        e.showClear && e.computedClearText ? (Cr(), yu(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (v) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Ta("", !0),
        e.error ? (Cr(), yu(f, { key: 1 })) : Ta("", !0),
        fu(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Bu = /* @__PURE__ */ qa(Bx, [["render", Ux], ["__scopeId", "data-v-4db296db"]]);
const qx = ys({
  setup() {
    const e = _s("subTextOptions", {}), o = _s("validationErrorMessage", !1), r = Da(() => e.error ? e.error : o && o.value ? o.value : "");
    return E1(C1({}, e), { error: r });
  }
}), Hx = { class: "feather-input-sub-text" }, Wx = {
  key: 0,
  class: "feather-input-spacer"
}, zx = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, Gx = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function Yx(e, o, r, s, a, u) {
  return $x((Cr(), us("div", Hx, [
    !e.hint && !e.error.length ? (Cr(), us("div", Wx, " ")) : Ta("", !0),
    e.hint && !e.error.length ? (Cr(), us("div", zx, bu(e.hint), 1)) : Ta("", !0),
    e.error.length > 0 ? (Cr(), us("div", Gx, bu(e.error), 1)) : Ta("", !0),
    fu(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [yx, !e.inline || e.hint || e.error.length]
  ]);
}
var bs = /* @__PURE__ */ qa(qx, [["render", Yx], ["__scopeId", "data-v-8e0ac99e"]]);
const jx = {
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
ys({
  props: jx,
  setup(e) {
    const o = _s("featherFormErrors", th([])), r = vw(e, "errorList"), s = Da(() => {
      var w;
      return (w = r.value) != null && w.length ? r.value : o.value;
    }), a = vw(e, "generalError"), u = (w) => {
      document.getElementById(w).focus();
    }, c = (w) => w.replace(/ \*$/, ""), f = th(), v = (w) => `${c(w.label)} - ${w.message}`, p = Da(() => (s.value.length && ww(() => f.value.focus()), e.headingText(s.value)));
    return nh(a, (w) => {
      w.length && ww(() => f.value.focus());
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
const Vs = (e, o, r, s, a) => {
  const u = _s("featherForm", !1);
  if (s && u && e.value) {
    const c = th("");
    wh("validationErrorMessage", c);
    const f = () => {
      if (a && _w(a) && a.value)
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
    return a && _w(a) && nh(a, () => {
      u.runValidation();
    }), nh(e, (w, g) => {
      w && u && u.register(w, p), g && u && u.deregister(g);
    }, { immediate: !0 }), bx(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Cs = (e) => ({
  inherittedAttrs: Da(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Es = {
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
  wh("subTextOptions", e);
}, Pu = {
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
}, Du = (e) => {
  wh("wrapperOptions", e);
}, Wl = window.Vue.ref, Kx = window.Vue.watch, Zx = window.Vue.watchEffect, gw = window.Vue.computed, lf = window.Vue.provide, S1 = (e, o, r, s, a) => {
  const u = Wl([]), c = Wl(), f = Wl(), v = Wl();
  Zx(() => {
    if (!u.value.length)
      return;
    const E = u.value.map((I) => I.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[E.indexOf(e.value)]), !c.value && u.value.length) {
      let I = u.value.filter((R) => !R.disabled);
      I = I.length ? I : u.value, f.value = I[0], f.value.first = !0;
    }
  }), Kx(c, (E, I) => {
    I && (I.checked = !1), E && (E.checked = !0);
  });
  const p = (E) => {
    E && E.disabled || (f.value && (f.value.first = !1), c.value !== E && (o("update:modelValue", E.value), c.value = E, E.focus()));
  }, w = gw(() => c.value || f.value), g = ex(w, u, p), y = gw(() => xe("feather-radio-group"));
  v.value = y.value;
  const { validate: b } = Vs(v, e, r, s, a);
  return lf("register", (E) => {
    u.value = [...u.value, E], v.value === y.value && (v.value = E.id);
  }), lf("select", p), lf("blur", (E) => {
    o("blur", E);
  }), {
    keydown: (E) => {
      switch (E.keyCode) {
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
var Xx = Object.defineProperty, Jx = Object.defineProperties, Qx = Object.getOwnPropertyDescriptors, $w = Object.getOwnPropertySymbols, eO = Object.prototype.hasOwnProperty, tO = Object.prototype.propertyIsEnumerable, yw = (e, o, r) => o in e ? Xx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, hs = (e, o) => {
  for (var r in o || (o = {}))
    eO.call(o, r) && yw(e, r, o[r]);
  if ($w)
    for (var r of $w(o))
      tO.call(o, r) && yw(e, r, o[r]);
  return e;
}, k1 = (e, o) => Jx(e, Qx(o));
const Lo = window.Vue.defineComponent, Ia = window.Vue.inject, Vu = window.Vue.computed, Aa = window.Vue.ref, Kn = window.Vue.resolveComponent, An = window.Vue.openBlock, Ha = window.Vue.createElementBlock, T1 = window.Vue.normalizeClass, kr = window.Vue.renderSlot, xo = window.Vue.createBlock, Ma = window.Vue.createCommentVNode, Cu = window.Vue.createElementVNode, nO = window.Vue.withModifiers, Mu = window.Vue.createVNode, I1 = window.Vue.toRef, rh = window.Vue.mergeProps, Kr = window.Vue.withCtx, rO = window.Vue.h, oO = window.Vue.provide;
var No = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const iO = {
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
}, sO = Lo({
  props: iO,
  setup(e) {
    const o = Ia("isCondensed", null), r = Vu(() => o || e.condensed), s = Aa(!1);
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
    FeatherRipple: Ro
  }
}), aO = ["aria-disabled"];
function lO(e, o, r, s, a, u) {
  const c = Kn("FeatherRipple");
  return An(), Ha("div", {
    class: T1(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    kr(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (An(), xo(c, { key: 0 })) : Ma("", !0)
  ], 42, aO);
}
var Fu = /* @__PURE__ */ No(sO, [["render", lO], ["__scopeId", "data-v-44d413dc"]]);
const uO = {
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
}, cO = Lo({
  emits: ["delete"],
  props: uO,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: $s
    };
  },
  components: {
    FeatherIcon: te
  }
}), dO = { class: "chip-delete" }, fO = ["aria-label", "aria-describedby"];
function hO(e, o, r, s, a, u) {
  const c = Kn("FeatherIcon");
  return An(), Ha("span", dO, [
    Cu("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = nO((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      Mu(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, fO)
  ]);
}
var pO = /* @__PURE__ */ No(cO, [["render", hO], ["__scopeId", "data-v-4bae6cb4"]]);
const mO = Lo({
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
}), vO = ["title"];
function wO(e, o, r, s, a, u) {
  return An(), Ha("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    kr(e.$slots, "default", {}, void 0, !0)
  ], 8, vO);
}
var Uu = /* @__PURE__ */ No(mO, [["render", wO], ["__scopeId", "data-v-1a0445b2"]]);
const _O = {}, gO = {
  class: "chip-icon",
  role: "presentation"
};
function $O(e, o) {
  return An(), Ha("span", gO, [
    kr(e.$slots, "default", {}, void 0, !0)
  ]);
}
var qu = /* @__PURE__ */ No(_O, [["render", $O], ["__scopeId", "data-v-2230176f"]]);
const bw = {
  delete: "Remove"
}, yO = Lo({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => bw
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, o) {
    const r = Nu(I1(e, "labels"), bw), s = Vu(() => xe("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = hs({}, o.attrs);
    return e.disabled && delete u.onClick, k1(hs({}, r), {
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
    Chip: Fu,
    DeleteIcon: pO,
    Label: Uu,
    PreIcon: qu
  }
}), bO = ["aria-disabled"];
function VO(e, o, r, s, a, u) {
  const c = Kn("PreIcon"), f = Kn("Label"), v = Kn("DeleteIcon"), p = Kn("Chip");
  return An(), xo(p, rh(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: Kr(() => [
      Cu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Cu("span", rh(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (An(), xo(c, { key: 0 }, {
            default: Kr(() => [
              kr(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Ma("", !0),
          Mu(f, { id: e.chipTextId }, {
            default: Kr(() => [
              kr(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, bO),
      e.canDelete ? (An(), xo(v, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (w) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Ma("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var CO = /* @__PURE__ */ No(yO, [["render", VO], ["__scopeId", "data-v-48b2704a"]]);
const EO = Lo({
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
    Chip: Fu,
    Label: Uu,
    PreIcon: qu
  }
}), SO = ["aria-disabled"];
function kO(e, o, r, s, a, u) {
  const c = Kn("PreIcon"), f = Kn("Label"), v = Kn("Chip");
  return An(), xo(v, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: Kr(() => [
      Cu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (An(), xo(c, { key: 0 }, {
          default: Kr(() => [
            kr(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Ma("", !0),
        Mu(f, null, {
          default: Kr(() => [
            kr(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, SO)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var TO = /* @__PURE__ */ No(EO, [["render", kO], ["__scopeId", "data-v-3e0c4eba"]]);
const IO = Lo({
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
    const o = Aa(!1), r = Aa(!1), s = Vu(() => xe("chip-label-id")), a = Vu(() => o.value || r.value ? 0 : -1), u = Aa(), c = () => {
      u.value.$el.focus();
    }, f = Ia("register", (y) => {
    }), v = Ia("blur", (y) => {
    }), p = Ia("select", (y) => {
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
    Chip: Fu,
    Label: Uu,
    PreIcon: qu
  }
});
function AO(e, o, r, s, a, u) {
  const c = Kn("PreIcon"), f = Kn("Label"), v = Kn("Chip");
  return An(), xo(v, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: T1(["focus hover", { selected: e.checked }]),
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
    default: Kr(() => [
      e.hasIcon ? (An(), xo(c, { key: 0 }, {
        default: Kr(() => [
          kr(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Ma("", !0),
      Mu(f, { id: e.labelId }, {
        default: Kr(() => [
          kr(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var xO = /* @__PURE__ */ No(IO, [["render", AO], ["__scopeId", "data-v-bbcc2f70"]]);
const OO = {
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
}, Vw = Lo({
  props: OO,
  setup() {
    return { format: Ia("chipListFormat", "") };
  },
  render() {
    const e = (o) => rO(o, hs(hs({}, this.$props), this.$attrs), hs({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(CO) : this.format === "radio" ? e(xO) : e(TO);
  }
}), RO = {
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
}, LO = Lo({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: RO,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    oO("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const c = I1(e, "modelValue");
      return k1(hs({
        attrs: {
          role: "radiogroup"
        }
      }, S1(c, o.emit, e.label, {}, Aa(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), NO = ["aria-label"];
function BO(e, o, r, s, a, u) {
  return An(), Ha("div", rh(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    kr(e.$slots, "default", {}, void 0, !0)
  ], 16, NO);
}
var PO = /* @__PURE__ */ No(LO, [["render", BO], ["__scopeId", "data-v-1e06f41d"]]);
const DO = window.Vue.defineComponent, MO = window.Vue.normalizeClass, FO = window.Vue.openBlock, UO = window.Vue.createElementBlock, qO = window.Vue.createCommentVNode, HO = /* @__PURE__ */ DO({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (FO(), UO("span", {
      key: 0,
      class: MO(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : qO("", !0);
  }
}), WO = /* @__PURE__ */ Le(HO, [["__scopeId", "data-v-e08880d6"]]), zO = window.Vue.defineComponent, ia = window.Vue.unref, A1 = window.Vue.createTextVNode, uf = window.Vue.normalizeClass, cf = window.Vue.withCtx, GO = window.Vue.createVNode, YO = window.Vue.renderList, jO = window.Vue.Fragment, zl = window.Vue.openBlock, KO = window.Vue.createElementBlock, df = window.Vue.createBlock, Cw = window.Vue.createCommentVNode, ZO = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const XO = /* @__PURE__ */ A1(" ALL "), Ew = window.Vue.ref, JO = window.Vue.watch, QO = window.Vue.computed, eR = window.Vue.reactive, tR = /* @__PURE__ */ zO({
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
    const r = e, s = Ew(!1), a = QO(() => Ge.keys(Ge.groupBy(r.alarms, r.property))), u = Ew(
      (v = r.preSelected) != null && v.length ? r.preSelected : ["all"]
    ), c = eR({
      alarms: r.alarms
    }), f = (p) => {
      u.value = u.value.filter((w) => w !== "all"), u.value.includes(p) ? u.value = u.value.filter((w) => w !== p) : u.value.push(p), (p === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return JO(r, () => {
      var p;
      u.value = (p = r.preSelected) != null && p.length ? r.preSelected : ["all"], c.alarms = r.alarms, s.value = !1;
    }), (p, w) => ia(a).length > 0 ? (zl(), df(ia(PO), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: uf({ vertical: r.isVertical })
    }, {
      default: cf(() => [
        GO(ia(Vw), {
          class: uf({ clicked: u.value.includes("all") }),
          onClick: w[0] || (w[0] = (g) => f("all"))
        }, {
          default: cf(() => [
            XO
          ]),
          _: 1
        }, 8, ["class"]),
        (zl(!0), KO(jO, null, YO(ia(a), (g) => (zl(), df(ia(Vw), {
          class: uf([
            { clicked: u.value.includes(g) },
            `${g == null ? void 0 : g.toLowerCase()}-bg`
          ]),
          key: g,
          onClick: (y) => f(g)
        }, {
          default: cf(() => [
            e.property == "severity" ? (zl(), df(WO, {
              key: 0,
              severity: g
            }, null, 8, ["severity"])) : Cw("", !0),
            A1(ZO(g), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : Cw("", !0);
  }
}), nR = /* @__PURE__ */ Le(tR, [["__scopeId", "data-v-f000b5a0"]]), rR = window.Vue.watch, oR = window.Vue.onBeforeUnmount, iR = window.Vue.ref, sR = window.Vue.onMounted, aR = (e) => {
  const o = iR(!1);
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
  return sR(() => {
    const c = rR(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    oR(() => {
      c(), u();
    });
  }), o;
}, lR = window.Vue.watch, uR = window.Vue.onBeforeUnmount, cR = window.Vue.ref, dR = window.Vue.onMounted, fR = (e, o) => {
  const r = cR(!1), s = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((p) => p && p.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return dR(() => {
    const c = lR(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    uR(() => {
      c(), u();
    });
  }), r;
}, hR = window.Vue.watch, pR = window.Vue.onBeforeUnmount, mR = window.Vue.ref, x1 = (e, o) => {
  const r = mR(!1);
  let s = !1;
  const a = (v) => {
    o(v), s = !1;
  };
  function u(v) {
    s || (requestAnimationFrame(() => a(v)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = hR([e, r], ([v, p], w) => {
    w && w.length && w[0] && w[0].removeEventListener("scroll", u, !0), p && v ? v.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return pR(() => {
    f(), c();
  }), r;
}, vR = window.Vue.defineComponent, Wr = window.Vue.ref, Sw = window.Vue.toRef, wR = window.Vue.onMounted, _R = window.Vue.watch, kw = window.Vue.computed, gR = window.Vue.nextTick, Tw = window.Vue.openBlock, Iw = window.Vue.createElementBlock, Aw = window.Vue.renderSlot, $R = window.Vue.normalizeClass, yR = window.Vue.normalizeStyle, bR = window.Vue.createCommentVNode;
var VR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const CR = {
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
}, ER = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, SR = vR({
  emits: ER,
  props: CR,
  setup(e, o) {
    const r = Wr(), s = Wr(), a = Sw(e, "open"), u = Sw(e, "noExpand"), c = Wr("auto"), f = Wr(), v = Wr(e.triggerId || xe("feather-menu-trigger")), p = Wr(xe("feather-menu-dropdown")), w = Wr(""), g = Wr("");
    wR(() => {
      f.value = window;
    });
    const y = Wr(!1), b = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), C = () => {
      if (!s.value)
        return;
      const q = r.value.getBoundingClientRect();
      y.value = !0, c.value = "auto", gR(() => {
        let { height: M, width: N } = s.value.getBoundingClientRect();
        const j = b(), J = j.height, ne = j.width;
        e.fill && N < q.width ? (c.value = q.width + "px", N = q.width) : c.value = N + "px";
        let re = 0;
        J - q.bottom < M && q.top >= M ? (re = q.top - M, e.cover && (re += q.height)) : (re = q.bottom, e.cover && (re -= q.height));
        let Se = e.right ? q.right - N : q.left;
        !e.right && q.right >= N && ne - q.left < N && (Se = q.right - N), e.right && q.right <= N && ne - q.left > N && (Se = q.left), g.value = `${Se}px`, w.value = `${re}px`, y.value = !1;
      });
    }, O = fR(r, (q) => {
      o.emit("outside-click", q);
    }), E = aR(C), I = x1(f, C);
    _R([a, s], ([q, M]) => {
      q && M && C(), O.value = q, E.value = q, I.value = q;
    });
    const R = kw(() => {
      const q = {
        id: v.value,
        "aria-haspopup": "true"
      };
      return a.value && (q["aria-controls"] = p.value), u.value || (q["aria-expanded"] = a.value ? "true" : "false"), q;
    }), P = kw(() => ({
      click: (q) => {
        o.emit("trigger-click", q);
      }
    }));
    return {
      positionTop: w,
      positionLeft: g,
      triggerId: v,
      triggerAttrs: R,
      triggerListeners: P,
      menuId: p,
      menu: s,
      menuWidth: c,
      root: r,
      calculatePosition: C,
      calculating: y
    };
  }
}), kR = ["data-ref-id"], TR = ["data-ref-id", "id"];
function IR(e, o, r, s, a, u) {
  return Tw(), Iw("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    Aw(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (Tw(), Iw("div", {
      key: 0,
      class: $R(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: yR({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      Aw(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, TR)) : bR("", !0)
  ], 8, kR);
}
var O1 = /* @__PURE__ */ VR(SR, [["render", IR], ["__scopeId", "data-v-f75af406"]]), AR = {
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
const xR = window.Vue.openBlock, OR = window.Vue.createElementBlock, RR = window.Vue.createElementVNode;
var LR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const NR = {}, BR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PR = /* @__PURE__ */ RR("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), DR = [
  PR
];
function MR(e, o) {
  return xR(), OR("svg", BR, DR);
}
var FR = /* @__PURE__ */ LR(NR, [["render", MR]]);
const UR = window.Vue.openBlock, qR = window.Vue.createElementBlock, _h = window.Vue.createElementVNode;
var HR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const WR = {}, zR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GR = /* @__PURE__ */ _h("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), YR = /* @__PURE__ */ _h("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), jR = /* @__PURE__ */ _h("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), KR = [
  GR,
  YR,
  jR
];
function ZR(e, o) {
  return UR(), qR("svg", zR, KR);
}
var XR = /* @__PURE__ */ HR(WR, [["render", ZR]]);
const JR = window.Vue.openBlock, QR = window.Vue.createElementBlock, eL = window.Vue.createElementVNode;
var tL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const nL = {}, rL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oL = /* @__PURE__ */ eL("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), iL = [
  oL
];
function sL(e, o) {
  return JR(), QR("svg", rL, iL);
}
var Wa = /* @__PURE__ */ tL(nL, [["render", sL]]);
const Fa = function(e, o) {
  if (!e || !o)
    return;
  let r = e.getBoundingClientRect().height;
  const s = getComputedStyle(e);
  r += parseInt(s.getPropertyValue("margin-top"), 10), r += parseInt(s.getPropertyValue("margin-bottom"), 10), o.scrollTop = e.offsetTop - o.getBoundingClientRect().height + r;
}, me = {
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
}, aL = window.Vue.defineComponent, lL = window.Vue.openBlock, uL = window.Vue.createElementBlock, cL = window.Vue.normalizeClass, dL = window.Vue.pushScopeId, fL = window.Vue.popScopeId, oh = window.Vue.createElementVNode;
var hL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const pL = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, mL = {
  click: (e) => !0
}, vL = aL({
  emits: mL,
  props: pL,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), R1 = (e) => (dL("data-v-07e020f5"), e = e(), fL(), e), wL = /* @__PURE__ */ R1(() => /* @__PURE__ */ oh("div", { class: "track" }, null, -1)), _L = /* @__PURE__ */ R1(() => /* @__PURE__ */ oh("div", { class: "switcher" }, [
  /* @__PURE__ */ oh("div", { class: "switch-circle" })
], -1)), gL = [
  wL,
  _L
];
function $L(e, o, r, s, a, u) {
  return lL(), uL("div", {
    class: cL(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, gL, 2);
}
var yL = /* @__PURE__ */ hL(vL, [["render", $L], ["__scopeId", "data-v-07e020f5"]]), bL = Object.defineProperty, VL = Object.defineProperties, CL = Object.getOwnPropertyDescriptors, xw = Object.getOwnPropertySymbols, EL = Object.prototype.hasOwnProperty, SL = Object.prototype.propertyIsEnumerable, Ow = (e, o, r) => o in e ? bL(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Rw = (e, o) => {
  for (var r in o || (o = {}))
    EL.call(o, r) && Ow(e, r, o[r]);
  if (xw)
    for (var r of xw(o))
      SL.call(o, r) && Ow(e, r, o[r]);
  return e;
}, Lw = (e, o) => VL(e, CL(o));
const gh = window.Vue.defineComponent, oi = window.Vue.h, kL = window.Vue.openBlock, TL = window.Vue.createElementBlock, IL = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var L1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const AL = {
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
}, xL = gh({
  inheritAttrs: !1,
  props: AL,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = oi("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = oi("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = oi("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : oi(Ro);
    if (this.asLi)
      return oi("li", Lw(Rw({}, this.$attrs), {
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
    const u = oi("a", Lw(Rw({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, s, a]);
    return oi("li", {}, [u]);
  }
});
var za = /* @__PURE__ */ L1(xL, [["__scopeId", "data-v-7c46b2b3"]]);
gh({
  components: {
    FeatherListItem: za
  }
});
const OL = {}, RL = { class: "feather-list" };
function LL(e, o) {
  return kL(), TL("ul", RL, [
    IL(e.$slots, "default", {}, void 0, !0)
  ]);
}
var $h = /* @__PURE__ */ L1(OL, [["render", LL], ["__scopeId", "data-v-941a1d50"]]);
const NL = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, BL = {
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
  emits: NL,
  props: BL,
  computed: {
    labelId() {
      return xe("switch-label");
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
      (e.keyCode === me.SPACE || e.keyCode === me.ENTER) && this.updateValue(), e.keyCode === me.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: yL, FeatherListItem: za }
});
var PL = Object.defineProperty, DL = Object.defineProperties, ML = Object.getOwnPropertyDescriptors, Nw = Object.getOwnPropertySymbols, FL = Object.prototype.hasOwnProperty, UL = Object.prototype.propertyIsEnumerable, Bw = (e, o, r) => o in e ? PL(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, xn = (e, o) => {
  for (var r in o || (o = {}))
    FL.call(o, r) && Bw(e, r, o[r]);
  if (Nw)
    for (var r of Nw(o))
      UL.call(o, r) && Bw(e, r, o[r]);
  return e;
}, qL = (e, o) => DL(e, ML(o));
const ks = window.Vue.defineComponent, Be = window.Vue.openBlock, bt = window.Vue.createElementBlock, hn = window.Vue.createElementVNode, dr = window.Vue.toDisplayString, jn = window.Vue.createCommentVNode, wt = window.Vue.resolveComponent, Yn = window.Vue.createBlock, zt = window.Vue.withCtx, ps = window.Vue.Fragment, xa = window.Vue.renderList, pn = window.Vue.createVNode, yh = window.Vue.withModifiers, $i = window.Vue.normalizeClass, ih = window.Vue.renderSlot, N1 = window.Vue.createTextVNode, HL = window.Vue.pushScopeId, WL = window.Vue.popScopeId, B1 = window.Vue.reactive, P1 = window.Vue.nextTick, ff = window.Vue.markRaw, hf = window.Vue.toRef, Pw = window.Vue.computed, zL = window.Vue.toRefs, Ki = window.Vue.ref, pf = window.Vue.mergeProps, Dw = window.Vue.toHandlers, Gl = window.Vue.withDirectives, Yl = window.Vue.vShow;
var Hu = {
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
}, Si = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const GL = ks({
  mixins: [],
  props: xn(xn({
    text: {
      type: String,
      required: !0
    }
  }, Hu), bh),
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
}), YL = {
  key: 0,
  class: "highlight"
}, jL = { key: 1 };
function KL(e, o, r, s, a, u) {
  return Be(), bt("span", null, [
    hn("span", null, dr(e.beginning), 1),
    e.highlighted ? (Be(), bt("span", YL, dr(e.highlighted), 1)) : jn("", !0),
    e.end ? (Be(), bt("span", jL, dr(e.end), 1)) : jn("", !0)
  ]);
}
var D1 = /* @__PURE__ */ Si(GL, [["render", KL], ["__scopeId", "data-v-8abe2492"]]);
const ZL = ks({
  emits: ["select", "deselect"],
  props: xn(xn({
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
  }, Hu), bh),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        Fa(o, r.$el);
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
    FeatherListItem: za,
    Highlighter: D1
  }
}), XL = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function JL(e, o, r, s, a, u) {
  const c = wt("Highlighter"), f = wt("FeatherListItem"), v = wt("FeatherList");
  return Be(), Yn(v, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: zt(() => [
      (Be(!0), bt(ps, null, xa(e.items, (p, w) => (Be(), bt(ps, {
        key: p[e.textProp]
      }, [
        pn(f, {
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
          default: zt(() => [
            pn(c, {
              highlight: e.highlight,
              query: e.query,
              text: p[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            p._new ? (Be(), bt("span", XL, dr(e.newLabel), 1)) : jn("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && p._new ? (Be(), bt("li", {
          role: "presentation",
          key: p[e.textProp] + "hr",
          class: "hr"
        })) : jn("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var QL = /* @__PURE__ */ Si(ZL, [["render", JL], ["__scopeId", "data-v-f623434a"]]);
const e3 = ks({
  emits: ["select"],
  props: xn(xn({
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
  }, Hu), bh),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        Fa(o, r);
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
    Highlighter: D1
  }
}), t3 = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, n3 = ["aria-multiselectable"], r3 = { role: "row" }, o3 = ["aria-selected", "onClick"], i3 = ["id", "aria-selected"], s3 = { key: 1 };
function a3(e, o, r, s, a, u) {
  const c = wt("Highlighter");
  return Be(), bt("div", t3, [
    hn("table", {
      class: $i(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      hn("thead", null, [
        hn("tr", r3, [
          (Be(!0), bt(ps, null, xa(e.config, (f) => (Be(), bt("th", {
            key: f.title
          }, dr(f.title), 1))), 128))
        ])
      ]),
      hn("tbody", null, [
        (Be(!0), bt(ps, null, xa(e.items, (f, v) => (Be(), bt("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: $i({ focus: e.isActive(v), selected: e.isSelected(f) }),
          onClick: yh((p) => e.select(f), ["stop"])
        }, [
          (Be(!0), bt(ps, null, xa(e.config, (p, w) => (Be(), bt("td", {
            key: f[e.textProp] + p.prop,
            id: e.getId(v, w),
            "aria-selected": e.isSelected(f),
            class: $i({ "focus-cell": e.isActiveCell(v, w) })
          }, [
            p.prop === e.textProp ? (Be(), Yn(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[p.prop]
            }, null, 8, ["highlight", "query", "text"])) : (Be(), bt("p", s3, dr(f[p.prop]), 1))
          ], 10, i3))), 128))
        ], 10, o3))), 128))
      ])
    ], 10, n3)
  ], 512);
}
var l3 = /* @__PURE__ */ Si(e3, [["render", a3], ["__scopeId", "data-v-58c88fd1"]]);
const u3 = ks({
  components: {
    FeatherList: $h,
    FeatherListItem: za
  }
});
function c3(e, o, r, s, a, u) {
  const c = wt("FeatherListItem"), f = wt("FeatherList");
  return Be(), Yn(f, { class: "result-list" }, {
    default: zt(() => [
      pn(c, { "as-li": "" }, {
        default: zt(() => [
          ih(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var d3 = /* @__PURE__ */ Si(u3, [["render", c3], ["__scopeId", "data-v-06b752c6"]]);
const f3 = ks({
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
    FeatherIcon: te,
    Cancel: $s,
    BaseChip: Fu,
    BaseChipLabel: Uu,
    BaseChipPreIcon: qu
  }
});
function h3(e, o, r, s, a, u) {
  const c = wt("FeatherIcon"), f = wt("BaseChipPreIcon"), v = wt("BaseChipLabel"), p = wt("Cancel"), w = wt("BaseChip");
  return Be(), Yn(w, {
    class: $i(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: zt(() => [
      e.showPreIcon ? (Be(), Yn(f, { key: 0 }, {
        default: zt(() => {
          var g, y;
          return [
            pn(c, {
              icon: (g = e.pre) == null ? void 0 : g.icon,
              title: (y = e.pre) == null ? void 0 : y.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : jn("", !0),
      pn(v, null, {
        default: zt(() => [
          N1(dr(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? jn("", !0) : (Be(), bt("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = yh((...g) => e.handleClick && e.handleClick(...g), ["stop"]))
      }, [
        pn(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: zt(() => [
            pn(p)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var p3 = /* @__PURE__ */ Si(f3, [["render", h3], ["__scopeId", "data-v-e0fc6ac0"]]);
const m3 = {}, v3 = (e) => (HL("data-v-aa720e06"), e = e(), WL(), e), w3 = { class: "spinner-container" }, _3 = /* @__PURE__ */ v3(() => /* @__PURE__ */ hn("svg", {
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
], -1)), g3 = [
  _3
];
function $3(e, o) {
  return Be(), bt("div", w3, g3);
}
var y3 = /* @__PURE__ */ Si(m3, [["render", $3], ["__scopeId", "data-v-aa720e06"]]), Wu = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(Wu || {});
const M1 = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, b3 = xn(xn(xn({
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
    validator: (e) => !!Wu[e]
  },
  labels: {
    type: Object,
    default: () => M1
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, Hu), Es), Pu), V3 = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, C3 = (e, o, r, s) => {
  if (r.toLowerCase() === Wu.multi) {
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
}, E3 = () => {
  const e = B1({
    row: -1
  }), o = (u) => {
    P1(() => {
      e.row = u;
    });
  }, r = (u, c) => {
    if (u.keyCode === me.DOWN) {
      if (u.preventDefault(), e.row === -1)
        s(), o(0);
      else if (e.row + 1 <= c.length - 1) {
        const f = e.row;
        s(), o(f + 1);
      }
      return !0;
    }
    if (u.keyCode === me.UP) {
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
}, S3 = (e) => {
  const o = B1({
    row: -1,
    col: -1
  }), r = (c, f) => {
    P1(() => {
      o.col = f, o.row = c;
    });
  }, s = (c, f) => {
    if (c.keyCode === me.DOWN) {
      if (c.preventDefault(), o.row === -1)
        a(), r(0, 0);
      else if (o.row + 1 <= f.length - 1) {
        const v = o.row, p = o.col;
        a(), r(v + 1, p);
      }
      return !0;
    }
    if (c.keyCode === me.UP) {
      if (c.preventDefault(), o.row === 0)
        a();
      else if (o.row > 0) {
        const v = o.row, p = o.col;
        a(), r(v - 1, p);
      }
      return !0;
    }
    if (c.keyCode === me.RIGHT && o.row !== -1) {
      if (c.preventDefault(), o.col + 1 <= e.length - 1) {
        const v = o.col, p = o.row;
        a(), r(p, v + 1);
      } else if (o.col <= e.length - 1 && o.row + 1 <= f.length - 1) {
        const v = o.row;
        a(), r(v + 1, 0);
      }
      return !0;
    }
    if (c.keyCode === me.LEFT && o.row !== -1) {
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
    if (c.keyCode === me.END && o.row !== -1) {
      c.preventDefault();
      const v = o.row;
      return a(), r(c.ctrlKey ? f.length - 1 : v, e.length - 1), !0;
    }
    if (c.keyCode === me.HOME && o.row !== -1) {
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
}, k3 = ks({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: V3,
  props: b3,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== Wu.multi;
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
      return xe("result-item");
    },
    minCharWarningId() {
      return xe("min-char-warning");
    },
    subTextId() {
      return xe("feather-autocomplete-description");
    },
    resultsId() {
      return xe("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return xe("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return ff(FR);
    },
    minCharIcon() {
      return ff(XR);
    },
    dropdownIcon() {
      return ff(Wa);
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
        Fa(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      this.inputRef && e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, o) {
        e && o && e.length > o.length && this.scrollContainer && this.$nextTick(() => {
          Fa(this.inputRef, this.scrollContainer);
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
      return this.activeChipId = xe("active-chip"), this.activeChipId;
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
      r !== void 0 && (Vi(this.typingTimeout), this.typingTimeout = bi(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === me.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === me.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const s = this.modelValue;
        this.removeFromValue(s[this.activeChipIndex]), o();
        return;
      }
      if (e.keyCode === me.ENTER && this.active.row > -1) {
        e.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((e.keyCode === me.ENTER || e.keyCode === me.SPACE || e.keyCode === me.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        e.preventDefault(), this.emitSearch();
        return;
      }
      if (e.keyCode === me.ESCAPE) {
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const s = this.modelValue;
        e.keyCode === me.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = s.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === me.RIGHT && (e.preventDefault(), this.activeChipIndex === s.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < s.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === me.DELETE || e.keyCode === me.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(s[this.activeChipIndex]), r(), o());
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
    const r = Nu(hf(e, "labels"), M1);
    Ss(e), Du(e);
    let s;
    e.gridConfig ? s = S3(e.gridConfig) : s = E3();
    const a = hf(e, "id"), u = Pw(() => a.value ? a.value : xe("feather-autocomplete-input")), { validate: c } = Vs(u, hf(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: v, textProp: p, allowNew: w, type: g, minChar: y } = zL(e), b = Ki(!1), C = Ki(!1), T = Ki(!1), O = Ki(""), E = Ki([]), I = Ki(), R = Pw(() => I.value), P = () => {
      b.value && !C.value && (O.value && O.value.length >= y.value && o.emit("search", O.value), y.value <= 0 && o.emit("search", O.value || ""), E.value = [], s.reset());
    }, q = C3({
      selectionLimit: f,
      selectionLimitReached: C,
      modelValue: v,
      textProp: p,
      allowNew: w,
      forceCloseResults: T,
      query: O,
      internalResults: E,
      input: R,
      emitSearch: P
    }, s, g.value, o.emit);
    return qL(xn(xn({}, r), Cs(o.attrs)), {
      query: O,
      internalResults: E,
      selectionLimitReached: C,
      forceCloseResults: T,
      hasFocus: b,
      strategy: q,
      emitSearch: P,
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
    InputWrapper: Bu,
    InputSubText: bs,
    AutocompleteResults: QL,
    AutocompleteResultsGrid: l3,
    Chip: p3,
    MenuMessage: d3,
    FeatherIcon: te,
    FeatherMenu: O1,
    Spinner: y3
  }
}), T3 = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, I3 = ["id"], A3 = { "data-ref-id": "feather-autocomplete-no-results" }, x3 = { "data-ref-id": "feather-autocomplete-selection-limit" }, O3 = { "data-ref-id": "feather-autocomplete-min-char" };
function R3(e, o, r, s, a, u) {
  const c = wt("FeatherIcon"), f = wt("Chip"), v = wt("InputWrapper"), p = wt("AutocompleteResults"), w = wt("AutocompleteResultsGrid"), g = wt("MenuMessage"), y = wt("Spinner"), b = wt("FeatherMenu"), C = wt("InputSubText");
  return Be(), bt("div", pf(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    pn(b, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: $i(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: zt(({ attrs: T, on: O }) => [
        pn(v, pf(xn(xn({}, T), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, Dw(O), { ref: "scroll" }), {
          pre: zt(() => [
            ih(e.$slots, "pre", {}, () => [
              pn(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: zt(() => [
            pn(c, {
              icon: e.dropdownIcon,
              class: $i(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: zt(() => [
            hn("div", {
              class: $i(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              hn("div", T3, null, 512),
              hn("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, dr(e.selectedDescribedByText), 9, I3),
              (Be(!0), bt(ps, null, xa(e.modelValueList, (E, I) => Gl((Be(), Yn(f, {
                key: E[e.textProp],
                role: "button",
                id: I === e.activeChipIndex ? e.activeChipId : null,
                focused: I === e.activeChipIndex,
                disabled: e.disabled,
                text: E[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(E),
                onDelete: (R) => e.removeFromValue(E)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [Yl, !e.singleSelect]
              ])), 128)),
              hn("textarea", pf(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Dw(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: zt(() => [
        e.gridConfig ? jn("", !0) : Gl((Be(), Yn(p, {
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
          [Yl, e.showResults]
        ]),
        e.gridConfig ? Gl((Be(), Yn(w, {
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
          [Yl, e.showResults]
        ]) : jn("", !0),
        e.showNoResults ? (Be(), Yn(g, { key: 2 }, {
          default: zt(() => [
            hn("span", A3, dr(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : jn("", !0),
        e.showSelectionLimit ? (Be(), Yn(g, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: zt(() => [
            pn(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            hn("span", x3, dr(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : jn("", !0),
        e.minChar ? Gl((Be(), Yn(g, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: zt(() => [
            pn(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            hn("span", O3, [
              ih(e.$slots, "min-char", {}, () => [
                N1(dr(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [Yl, e.showMinCharWarning]
        ]) : jn("", !0),
        e.showLoading ? (Be(), Yn(y, { key: 5 })) : jn("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    pn(C, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var L3 = /* @__PURE__ */ Si(k3, [["render", R3], ["__scopeId", "data-v-43a7e951"]]), N3 = Object.defineProperty, B3 = Object.defineProperties, P3 = Object.getOwnPropertyDescriptors, Mw = Object.getOwnPropertySymbols, D3 = Object.prototype.hasOwnProperty, M3 = Object.prototype.propertyIsEnumerable, Fw = (e, o, r) => o in e ? N3(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, hu = (e, o) => {
  for (var r in o || (o = {}))
    D3.call(o, r) && Fw(e, r, o[r]);
  if (Mw)
    for (var r of Mw(o))
      M3.call(o, r) && Fw(e, r, o[r]);
  return e;
}, F1 = (e, o) => B3(e, P3(o));
const U1 = window.Vue.defineComponent, F3 = window.Vue.ref, Oa = window.Vue.computed, U3 = window.Vue.reactive, Uw = window.Vue.watch, mf = window.Vue.inject, q1 = window.Vue.resolveComponent, sh = window.Vue.openBlock, H1 = window.Vue.createElementBlock, Oo = window.Vue.createElementVNode, q3 = window.Vue.createBlock, H3 = window.Vue.createCommentVNode, W1 = window.Vue.renderSlot, W3 = window.Vue.pushScopeId, z3 = window.Vue.popScopeId, vf = window.Vue.toRef, qw = window.Vue.mergeProps, G3 = window.Vue.toDisplayString, Y3 = window.Vue.createVNode;
var z1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const j3 = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, K3 = U1({
  props: j3,
  setup(e) {
    const o = F3(), r = () => {
      o.value.focus();
    }, s = Oa(() => xe("feather-radio-button")), a = U3({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = Oa(() => xe("radio-label-id")), c = Oa(() => a.first || a.checked ? 0 : -1);
    Uw(() => e.disabled, (g) => {
      a.disabled = g;
    }, { immediate: !0 }), Uw(() => e.value, (g) => {
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
    FeatherRipple: Ro
  }
}), Z3 = (e) => (W3("data-v-24790cf0"), e = e(), z3(), e), X3 = { class: "layout-container" }, J3 = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], Q3 = { class: "radio hover focus" }, eN = /* @__PURE__ */ Z3(() => /* @__PURE__ */ Oo("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ Oo("svg", { class: "dot" }, [
    /* @__PURE__ */ Oo("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), tN = ["id"];
function nN(e, o, r, s, a, u) {
  const c = q1("feather-ripple");
  return sh(), H1("div", X3, [
    Oo("div", {
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
      Oo("div", Q3, [
        eN,
        e.vm.disabled ? H3("", !0) : (sh(), q3(c, {
          key: 0,
          center: ""
        }))
      ]),
      Oo("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        W1(e.$slots, "default", {}, void 0, !0)
      ], 8, tN)
    ], 40, J3)
  ]);
}
var ah = /* @__PURE__ */ z1(K3, [["render", nN], ["__scopeId", "data-v-24790cf0"]]);
const rN = F1(hu({}, Es), {
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
}), oN = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, iN = U1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: rN,
  emits: oN,
  setup(e, o) {
    Ss(e);
    const r = vf(e, "error"), s = vf(e, "modelValue"), a = Oa(() => xe("feather-input-description")), u = Oa(() => {
      const c = F1(hu({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return hu(hu({
      descriptionId: a,
      attrs: u
    }, S1(s, o.emit, e.label, e.schema, vf(e, "error"))), Cs(o.attrs));
  },
  components: {
    InputSubText: bs
  }
}), sN = ["for"], aN = ["id"];
function lN(e, o, r, s, a, u) {
  const c = q1("InputSubText");
  return sh(), H1("div", qw(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    Oo("label", {
      for: e.groupId,
      class: "group-label"
    }, G3(e.label), 9, sN),
    Oo("div", qw(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      W1(e.$slots, "default", {}, void 0, !0)
    ], 16, aN),
    Y3(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var G1 = /* @__PURE__ */ z1(iN, [["render", lN], ["__scopeId", "data-v-6775aeb9"]]);
const uN = window.Vue.defineComponent, cN = window.Vue.renderList, dN = window.Vue.Fragment, Hw = window.Vue.openBlock, fN = window.Vue.createElementBlock, hN = window.Vue.toDisplayString, pN = window.Vue.createTextVNode, Ww = window.Vue.unref, zw = window.Vue.withCtx, mN = window.Vue.createVNode, vN = window.Vue.createBlock, wN = window.Vue.watch, _N = window.Vue.ref, gN = /* @__PURE__ */ uN({
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
    ], a = _N(r.preSelected || s[0].id);
    return wN(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (Hw(), vN(Ww(G1), {
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
      default: zw(() => [
        (Hw(), fN(dN, null, cN(s, (f) => mN(Ww(ah), {
          value: f.id,
          key: f.id
        }, {
          default: zw(() => [
            pN(hN(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), $N = /* @__PURE__ */ Le(gN, [["__scopeId", "data-v-0363302c"]]);
var yN = Object.defineProperty, bN = Object.defineProperties, VN = Object.getOwnPropertyDescriptors, Gw = Object.getOwnPropertySymbols, CN = Object.prototype.hasOwnProperty, EN = Object.prototype.propertyIsEnumerable, Yw = (e, o, r) => o in e ? yN(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, sa = (e, o) => {
  for (var r in o || (o = {}))
    CN.call(o, r) && Yw(e, r, o[r]);
  if (Gw)
    for (var r of Gw(o))
      EN.call(o, r) && Yw(e, r, o[r]);
  return e;
}, jw = (e, o) => bN(e, VN(o));
const SN = window.Vue.defineComponent, kN = window.Vue.inject, aa = window.Vue.h;
var TN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const IN = {
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
}, AN = SN({
  inheritAttrs: !1,
  props: IN,
  setup() {
    return { hasTooltip: kN("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const v = ["btn", "hover", "focus", f];
      return this.icon && (v.push("btn-icon"), v.push("btn-icon-table")), this.onColor && v.push("on-color"), v;
    }, o = this.asAnchor ? "a" : "button", r = {}, s = sa({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = aa(Ro);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), aa(o, jw(sa(sa({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : aa(Ro, { center: !0 })
      ]);
    }
    const c = aa("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return aa(o, jw(sa(sa({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var Ee = /* @__PURE__ */ TN(AN, [["__scopeId", "data-v-702d1074"]]);
const xN = window.Vue.openBlock, ON = window.Vue.createElementBlock, RN = window.Vue.createElementVNode;
var LN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const NN = {}, BN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PN = /* @__PURE__ */ RN("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), DN = [
  PN
];
function MN(e, o) {
  return xN(), ON("svg", BN, DN);
}
var FN = /* @__PURE__ */ LN(NN, [["render", MN]]);
const UN = window.Vue.openBlock, qN = window.Vue.createElementBlock, HN = window.Vue.createElementVNode;
var WN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const zN = {}, GN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, YN = /* @__PURE__ */ HN("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), jN = [
  YN
];
function KN(e, o) {
  return UN(), qN("svg", GN, jN);
}
var ZN = /* @__PURE__ */ WN(zN, [["render", KN]]);
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
}, rB = /* @__PURE__ */ QN("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), oB = [
  rB
];
function iB(e, o) {
  return XN(), JN("svg", nB, oB);
}
var Y1 = /* @__PURE__ */ eB(tB, [["render", iB]]);
const sB = window.Vue.defineComponent, $r = window.Vue.unref, ii = window.Vue.createVNode, Kw = window.Vue.toDisplayString, Yr = window.Vue.createElementVNode, j1 = window.Vue.createTextVNode, Zw = window.Vue.openBlock, Xw = window.Vue.createElementBlock, aB = window.Vue.createCommentVNode, lB = window.Vue.withCtx, uB = window.Vue.vShow, cB = window.Vue.normalizeClass, dB = window.Vue.withDirectives, fB = window.Vue.Fragment, hB = window.Vue.pushScopeId, pB = window.Vue.popScopeId, K1 = (e) => (hB("data-v-d75ae1ee"), e = e(), pB(), e), mB = /* @__PURE__ */ j1(" Filters "), vB = { class: "count" }, wB = { class: "results" }, _B = { class: "total" }, gB = /* @__PURE__ */ j1(" Reset "), $B = /* @__PURE__ */ K1(() => /* @__PURE__ */ Yr("div", { class: "title" }, "By Severities:", -1)), yB = /* @__PURE__ */ K1(() => /* @__PURE__ */ Yr("div", { class: "title" }, "By Start Date:", -1)), si = window.Vue.ref, bB = window.Vue.reactive, VB = window.Vue.markRaw, Jw = window.Vue.watch, CB = /* @__PURE__ */ sB({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: o }) {
    const r = e, s = VB({
      FilterAlt: FN,
      ExpandLess: ZN,
      ExpandMore: Wa,
      Refresh: Y1
    }), a = fr(), u = si(r.isOpen), c = si(["all"]), f = si(1), v = si(r.list), p = si(!1), w = si(0), g = si(null), y = bB({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), b = () => {
      var M, N;
      r.saveFilters && a.filters && (a.filters.node && (y.nodeSelectedValue = a.filters.node), (M = a.filters) != null && M.severities && !((N = a.filters) != null && N.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, R());
    }, C = () => {
      y.nodes = a.nodes, y.results = a.nodes;
    };
    Jw(
      () => a.nodes,
      () => {
        C();
      }
    ), Jw(r, () => {
      v.value = r.list, b();
    });
    const T = (M) => {
      c.value = M, R();
    }, O = (M) => {
      f.value = M, R();
    }, E = (M) => {
      if (!M)
        return y.nodeSelectedValue = void 0, [];
      p.value = !0, y.results = y.nodes.filter((N) => N.label.toLowerCase().indexOf(M) > -1).map((N) => ({
        _text: N.label,
        id: N.id
      })), p.value = !1;
    }, I = () => {
      c.value = ["all"], f.value = 1, y.nodeSelectedValue = void 0, w.value = 0, o("filtered-list", r.list), r.isOpen || (u.value = !1), r.saveFilters && (a.filters = null), v.value = r.list;
    }, R = () => {
      w.value = 0;
      let M = r.list;
      y.nodeSelectedValue && y.nodeSelectedValue._text && (w.value++, r.isSituation ? M = M.map((N) => {
        if (N.relatedAlarms.filter(
          (ne) => {
            var re;
            return ne.nodeLabel === ((re = y.nodeSelectedValue) == null ? void 0 : re._text);
          }
        ).length > 0)
          return N;
      }).filter((N) => N) : M = M.filter(
        (N) => {
          var j;
          return N.nodeLabel === ((j = y.nodeSelectedValue) == null ? void 0 : j._text);
        }
      )), c.value.includes("all") || (w.value++, M = M.filter(
        (N) => c.value.includes(N.severity)
      )), f.value !== 1 && (w.value++, M = aI(
        f.value,
        M
      )), v.value = M, r.saveFilters && P(), o("filtered-list", M);
    }, P = () => {
      a.filters = {
        node: y.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, q = () => {
      u.value = !u.value;
    };
    return (M, N) => (Zw(), Xw(fB, null, [
      r.isOpen ? aB("", !0) : (Zw(), Xw("div", {
        key: 0,
        class: "btn-filter",
        onClick: q
      }, [
        Yr("div", null, [
          ii($r(te), {
            icon: $r(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          mB,
          Yr("span", vB, Kw(w.value), 1)
        ]),
        ii($r(te), {
          icon: u.value ? $r(s).ExpandLess : $r(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      dB(Yr("div", {
        class: cB(["filters", { collapsed: !r.isOpen }])
      }, [
        Yr("div", wB, [
          Yr("div", _B, "Results: " + Kw($r(v).length), 1),
          ii($r(Ee), {
            class: "btn-reset",
            onClick: I
          }, {
            default: lB(() => [
              ii($r(te), {
                icon: $r(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              gB
            ]),
            _: 1
          })
        ]),
        Yr("div", null, [
          ii($r(L3), {
            ref_key: "autocomplete",
            ref: g,
            label: "Search by node",
            loading: p.value,
            modelValue: y.nodeSelectedValue,
            "onUpdate:modelValue": [
              N[0] || (N[0] = (j) => y.nodeSelectedValue = j),
              R
            ],
            results: y.results,
            type: "single",
            onSearch: E
          }, null, 8, ["loading", "modelValue", "results"]),
          $B,
          ii(nR, {
            alarms: r.list,
            onSelectedOption: T,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          Yr("div", null, [
            yB,
            ii($N, {
              onFilterDateSelected: O,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [uB, u.value]
      ])
    ], 64));
  }
}), Ts = /* @__PURE__ */ Le(CB, [["__scopeId", "data-v-d75ae1ee"]]), EB = window.Vue.openBlock, SB = window.Vue.createElementBlock, kB = window.Vue.createElementVNode;
var TB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const IB = {}, AB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, xB = /* @__PURE__ */ kB("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), OB = [
  xB
];
function RB(e, o) {
  return EB(), SB("svg", AB, OB);
}
var zu = /* @__PURE__ */ TB(IB, [["render", RB]]);
const LB = window.Vue.openBlock, NB = window.Vue.createElementBlock, Z1 = window.Vue.createElementVNode;
var BB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const PB = {}, DB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, MB = /* @__PURE__ */ Z1("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), FB = /* @__PURE__ */ Z1("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), UB = [
  MB,
  FB
];
function qB(e, o) {
  return LB(), NB("svg", DB, UB);
}
var HB = /* @__PURE__ */ BB(PB, [["render", qB]]);
const WB = window.Vue.openBlock, zB = window.Vue.createElementBlock, GB = window.Vue.createElementVNode;
var YB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const jB = {}, KB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ZB = /* @__PURE__ */ GB("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), XB = [
  ZB
];
function JB(e, o) {
  return WB(), zB("svg", KB, XB);
}
var QB = /* @__PURE__ */ YB(jB, [["render", JB]]);
const Bo = () => window.VRouter || VG, ai = "alec-", Vt = {
  home: `${ai}home`,
  situations: `${ai}situations`,
  situationDetail: `${ai}situationDetail`,
  addSituation: `${ai}addSituation`,
  error: `${ai}error`,
  viewUnassignedAlarms: `${ai}viewUnassignedAlarms`,
  settings: `${ai}settings`
}, eP = window.Vue.openBlock, tP = window.Vue.createElementBlock, nP = window.Vue.pushScopeId, rP = window.Vue.popScopeId, Qw = window.Vue.createElementVNode;
var oP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const iP = {}, sP = (e) => (nP("data-v-2263be39"), e = e(), rP(), e), aP = { class: "spinner-container" }, lP = /* @__PURE__ */ sP(() => /* @__PURE__ */ Qw("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ Qw("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), uP = [
  lP
];
function cP(e, o) {
  return eP(), tP("div", aP, uP);
}
var ms = /* @__PURE__ */ oP(iP, [["render", cP], ["__scopeId", "data-v-2263be39"]]);
const dP = window.Vue.defineComponent, wf = window.Vue.unref, fP = window.Vue.createVNode, hP = window.Vue.createElementVNode, pP = window.Vue.withCtx, mP = window.Vue.openBlock, vP = window.Vue.createBlock, wP = window.Vue.pushScopeId, _P = window.Vue.popScopeId, gP = (e) => (wP("data-v-6d6d8faa"), e = e(), _P(), e), $P = /* @__PURE__ */ gP(() => /* @__PURE__ */ hP("span", null, "New Situation", -1)), yP = window.Vue.markRaw, bP = /* @__PURE__ */ dP({
  __name: "NewSituationBtn",
  setup(e) {
    const o = Bo(), r = yP({
      Add: zu
    }), s = () => {
      o.push({
        name: Vt.addSituation
      });
    };
    return (a, u) => (mP(), vP(wf(Ee), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: pP(() => [
        fP(wf(te), {
          icon: wf(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        $P
      ]),
      _: 1
    }));
  }
}), X1 = /* @__PURE__ */ Le(bP, [["__scopeId", "data-v-6d6d8faa"]]), VP = "/whoami", CP = async () => {
  try {
    const e = await Pt.get(VP);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, EP = window.Pinia.defineStore, SP = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, Ci = EP("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null,
    llmConfig: null,
    llmUsage: null
  }),
  actions: {
    async getUserRole() {
      const e = await CP();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await cI();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o, r) {
      const s = {
        ...SP,
        ...r,
        distanceMeasureName: o ? Lt.HELLINGER_OPTION : Lt.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return o || (s.hellingerW = null, s.hellingerBias = null), await dI(s) ? (this.engineInfo = s, !0) : !1;
    },
    async getLLMConfig() {
      const e = await fI();
      return e && (this.llmConfig = e), e;
    },
    async setLLMConfig(e) {
      const o = await hI(e);
      return o ? (this.llmConfig = o, !0) : !1;
    },
    async getLLMUsage(e = 30) {
      const o = await vI(e);
      return o && (this.llmUsage = o), o;
    }
  }
}), kP = "data:image/svg+xml,%3csvg%20width='32px'%20height='32px'%20viewBox='0%200%2032%2032'%20id='icon'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20none;%20}%20%3c/style%3e%3c/defs%3e%3crect%20x='10'%20y='15'%20width='12'%20height='2'/%3e%3cpath%20d='M8.7,6.2852A2.9665,2.9665,0,0,0,9,5,3,3,0,1,0,6,8a2.96,2.96,0,0,0,1.2852-.3008L10,10.4141V13h2V9.5859ZM6,6A1,1,0,1,1,7,5,1.0009,1.0009,0,0,1,6,6Z'%20transform='translate(0%200)'/%3e%3cpath%20d='M19,5a3,3,0,1,0-4,2.8154V13h2V7.8159A2.9957,2.9957,0,0,0,19,5ZM16,6a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,16,6Z'%20transform='translate(0%200)'/%3e%3cpath%20d='M26,2a3.0033,3.0033,0,0,0-3,3,2.9665,2.9665,0,0,0,.3,1.2852L20,9.5859V13h2V10.4141l2.7148-2.7149A2.96,2.96,0,0,0,26,8a3,3,0,0,0,0-6Zm0,4a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,26,6Z'%20transform='translate(0%200)'/%3e%3cpath%20d='M12,19H10v2.5859L7.2854,24.3008A2.9609,2.9609,0,0,0,6,24a3,3,0,1,0,3,3,2.9665,2.9665,0,0,0-.3-1.2852L12,22.4141ZM6,28a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,6,28Z'%20transform='translate(0%200)'/%3e%3cpath%20d='M17,24.1841V19H15v5.1841a3,3,0,1,0,2,0ZM16,28a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,16,28Z'%20transform='translate(0%200)'/%3e%3cpath%20d='M26,24a2.9609,2.9609,0,0,0-1.2854.3008L22,21.5859V19H20v3.4141l3.3,3.3007A2.9665,2.9665,0,0,0,23,27a3,3,0,1,0,3-3Zm0,4a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,26,28Z'%20transform='translate(0%200)'/%3e%3crect%20id='_Transparent_Rectangle_'%20data-name='&lt;Transparent%20Rectangle&gt;'%20class='cls-1'%20width='32'%20height='32'/%3e%3c/svg%3e", TP = "data:image/svg+xml,%3csvg%20width='32px'%20height='32px'%20viewBox='0%200%2032%2032'%20id='icon'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20none;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20d='M16,7a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,16,7Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,16,3Z'/%3e%3cpath%20d='M11,30a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,11,30Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,11,26Z'/%3e%3cpath%20d='M7,11a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,7,11ZM7,7A1,1,0,1,0,8,8,1.001,1.001,0,0,0,7,7Z'/%3e%3cpath%20d='M21,30a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,21,30Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,21,26Z'/%3e%3cpath%20d='M25,11a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,25,11Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,25,7Z'/%3e%3cpath%20d='M4,21a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,4,21Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,4,17Z'/%3e%3cpath%20d='M28,21a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,28,21Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,28,17Z'/%3e%3cpath%20d='M16,22a6,6,0,1,1,6-6A6.0069,6.0069,0,0,1,16,22Zm0-10a4,4,0,1,0,4,4A4.0045,4.0045,0,0,0,16,12Z'/%3e%3crect%20id='_Transparent_Rectangle_'%20data-name='&lt;Transparent%20Rectangle&gt;'%20class='cls-1'%20width='32'%20height='32'/%3e%3c/svg%3e", IP = window.Vue.defineComponent, Zi = window.Vue.unref, Xi = window.Vue.openBlock, Ji = window.Vue.createElementBlock, AP = window.Vue.createCommentVNode, J1 = window.Vue.createTextVNode, e_ = window.Vue.Fragment, Q1 = window.Vue.createElementVNode, xP = window.Vue.pushScopeId, OP = window.Vue.popScopeId, RP = (e) => (xP("data-v-7d676165"), e = e(), OP(), e), LP = ["src"], NP = { class: "engine" }, BP = /* @__PURE__ */ J1(" ENGINE "), PP = {
  key: 0,
  class: "type"
}, DP = {
  key: 1,
  class: "type"
}, MP = /* @__PURE__ */ J1(" ENGINE "), FP = /* @__PURE__ */ RP(() => /* @__PURE__ */ Q1("div", {
  class: "type not-set",
  "data-test": "configuration-not-set"
}, "CONFIGURE", -1)), t_ = window.Vue.computed, UP = /* @__PURE__ */ IP({
  __name: "ConfigurationInfo",
  setup(e) {
    const o = Bo(), r = Ci(), s = () => {
      o.push({
        name: Vt.settings
      });
    }, a = t_(() => {
      var c;
      return !!((c = r.engineInfo) != null && c.engineName);
    }), u = t_(
      () => {
        var c;
        return ((c = r.engineInfo) == null ? void 0 : c.engineName) == Lt.ENGINE_DBSCAN;
      }
    );
    return (c, f) => (Xi(), Ji("div", {
      class: "info-engine",
      onClick: s,
      "data-test": "configuration-info"
    }, [
      Zi(a) ? (Xi(), Ji("img", {
        key: 0,
        src: Zi(u) ? Zi(TP) : Zi(kP),
        class: "icon-type"
      }, null, 8, LP)) : AP("", !0),
      Q1("div", NP, [
        Zi(a) ? (Xi(), Ji(e_, { key: 0 }, [
          BP,
          Zi(u) ? (Xi(), Ji("div", PP, "CLUSTERING")) : (Xi(), Ji("div", DP, "DEEP LEARNING"))
        ], 64)) : (Xi(), Ji(e_, { key: 1 }, [
          MP,
          FP
        ], 64))
      ])
    ]));
  }
}), qP = /* @__PURE__ */ Le(UP, [["__scopeId", "data-v-7d676165"]]), HP = {}, WP = window.Vue.openBlock, zP = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const GP = { class: "empty" };
function YP(e, o) {
  return WP(), zP("div", GP, "No results found.");
}
const Is = /* @__PURE__ */ Le(HP, [["render", YP], ["__scopeId", "data-v-2415ea97"]]), jP = window.Vue.defineComponent, br = window.Vue.createElementVNode, la = window.Vue.unref, li = window.Vue.createVNode, KP = window.Vue.withCtx, jl = window.Vue.toDisplayString, zr = window.Vue.openBlock, ui = window.Vue.createElementBlock, n_ = window.Vue.createCommentVNode, r_ = window.Vue.createBlock, ZP = window.Vue.renderList, XP = window.Vue.Fragment, JP = window.Vue.pushScopeId, QP = window.Vue.popScopeId, e0 = (e) => (JP("data-v-8a617929"), e = e(), QP(), e), eD = { class: "list-main" }, tD = { class: "header" }, nD = /* @__PURE__ */ e0(() => /* @__PURE__ */ br("h2", null, "Situation List", -1)), rD = { class: "link-btns" }, oD = /* @__PURE__ */ e0(() => /* @__PURE__ */ br("span", null, "View Unassociated Alarms", -1)), iD = { class: "content" }, sD = { class: "left-filters" }, aD = { class: "container" }, lD = { class: "autocomplete" }, uD = { key: 0 }, cD = { key: 1 }, dD = { key: 0 }, fD = { class: "situation-list" }, hD = {
  key: 0,
  class: "footer-pager"
}, pD = window.Vue.reactive, Kl = window.Vue.ref, mD = window.Vue.watch, vD = window.Vue.markRaw, wD = /* @__PURE__ */ jP({
  __name: "SituationList",
  setup(e) {
    const o = vD({
      Add: zu,
      View: HB,
      Settings: QB
    }), r = Bo(), s = fr(), a = Ci();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = pD({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = Kl(!0), v = Kl(0), p = Kl(1), w = Kl(0), g = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    mD(
      () => s.situations,
      () => {
        f.value = !1, g(), T(s.situations);
      }
    );
    const y = (E) => {
      v.value = E, c.situations = c.allSituations[v.value];
    }, b = (E) => {
      r.push({
        name: Vt.situationDetail,
        params: {
          id: E
        }
      });
    }, C = () => {
      r.push({
        name: Vt.viewUnassignedAlarms
      });
    }, T = (E) => {
      w.value = E.length, c.allSituations = Ge.chunk(E, u);
      const I = E.map((R) => R.id);
      s.filteredSituations = I, v.value = 0, c.situations = c.allSituations[0], p.value = c.allSituations.length;
    }, O = (E) => {
      E.length ? T(E) : c.situations = [];
    };
    return (E, I) => {
      var R;
      return zr(), ui("div", eD, [
        br("div", tD, [
          nD,
          br("div", rD, [
            li(la(Ee), {
              class: "view-situation-btn",
              onClick: I[0] || (I[0] = () => C())
            }, {
              default: KP(() => [
                li(la(te), {
                  icon: la(o).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                oD
              ]),
              _: 1
            }),
            li(X1),
            li(qP)
          ])
        ]),
        br("div", iD, [
          br("div", sD, [
            li(Ts, {
              list: la(s).situations,
              onFilteredList: O,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          br("div", aD, [
            br("div", lD, [
              c.situations && c.situations.length ? (zr(), ui("div", uD, " Result: " + jl((R = c.situations) == null ? void 0 : R.length) + " of " + jl(w.value), 1)) : n_("", !0)
            ]),
            f.value ? (zr(), r_(la(ms), {
              key: 0,
              class: "spinner"
            })) : (zr(), ui("div", cD, [
              c.situations && c.situations.length ? (zr(), ui("div", dD, [
                br("div", fD, [
                  (zr(!0), ui(XP, null, ZP(c.situations, (P) => (zr(), ui("div", {
                    class: "card",
                    key: P.id
                  }, [
                    li(y1, {
                      onClick: () => b(P.id),
                      "situation-info": P
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                w.value > u ? (zr(), ui("div", hD, [
                  br("div", null, "Page: " + jl(v.value + 1) + " of " + jl(p.value), 1),
                  li(OA, {
                    onGoToPage: y,
                    currentPage: v.value,
                    totalPages: p.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : n_("", !0)
              ])) : (zr(), r_(Is, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
}), _D = /* @__PURE__ */ Le(wD, [["__scopeId", "data-v-8a617929"]]), Zl = window.Vue.ref, gD = window.Vue.inject, $D = window.Vue.computed, yD = window.Vue.onMounted, t0 = {
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
}, n0 = (e) => {
  const o = Zl(!1), r = Zl(), s = Zl(e.controls), a = Zl(e.id), u = () => {
    r.value && r.value.focus();
  }, c = gD("registerTab");
  yD(() => {
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
  const f = $D(() => ({
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
}, o_ = window.Vue.ref, bD = window.Vue.toRef, VD = window.Vue.watch, i_ = window.Vue.provide, r0 = {
  prop: "modelValue",
  event: "update:modelValue"
}, o0 = {
  "update:modelValue": (e) => !0
}, i0 = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, s0 = (e, o) => {
  const r = bD(e, "modelValue"), s = o_(e.modelValue), a = o_([]);
  VD(r, (C) => {
    v(C);
  });
  const u = (C) => {
    C.preventDefault(), a.value.some((T, O) => T.tab && T.tab.el.contains(C.target) ? (f(O), v(O), !0) : !1);
  }, c = (C) => {
    if (((j) => j.shiftKey || j.ctrlKey || j.metaKey || j.altKey)(C))
      return;
    const O = C.keyCode, E = (j) => {
      j.stopPropagation(), j.preventDefault();
    }, I = a.value.filter((j) => j.tab && !j.tab.disabled), R = a.value.findIndex((j) => j.tab && j.tab.el.contains(document.activeElement));
    let P = R !== -1 ? R : s.value;
    const q = [me.RIGHT], M = [me.LEFT], N = [me.ENTER, me.SPACE];
    e.vertical && (q.push(me.DOWN), M.push(me.UP)), q.indexOf(O) > -1 ? (P++, P >= I.length && (P = 0), E(C), f(a.value.indexOf(I[P]))) : M.indexOf(O) > -1 && (P--, P < 0 && (P = I.length - 1), E(C), f(a.value.indexOf(I[P]))), N.indexOf(O) > -1 && v(P);
  }, f = (C) => {
    a.value.forEach(function(T, O) {
      C === O && T.tab && T.tab.focus();
    });
  }, v = (C) => {
    const T = a.value[C];
    !T || T.tab && T.tab.disabled || (a.value.forEach((O, E) => {
      O.tab && (O.tab.selected = C === E), O.panel && (O.panel.selected = C === E);
    }), s.value = C, o.emit("update:modelValue", C));
  };
  i_("registerTab", (C) => {
    const T = C.index;
    T > -1 && (a.value[T] = { ...a.value[T], tab: C }, a.value = [...a.value], g());
  }), i_("registerPanel", (C) => {
    const T = C.index;
    T > -1 && (a.value[T] = {
      ...a.value[T],
      panel: C
    }, a.value = [...a.value], g());
  });
  const g = () => {
    a.value.forEach(({ tab: C, panel: T }, O) => {
      if (T && C) {
        const E = C.id || xe("tab"), I = C.controls || xe("panel");
        C.controls = I, C.id = E, T.tab = E, T.id = I;
      }
      O === s.value && (T && (T.selected = !0), C && (C.selected = !0));
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
}, Xl = window.Vue.ref, CD = window.Vue.inject, ED = window.Vue.computed, SD = window.Vue.onMounted, a0 = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, l0 = (e) => {
  const o = Xl(!1), r = Xl(), s = Xl(e.tab), a = Xl(e.id), u = CD("registerPanel");
  SD(() => {
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
  const c = ED(() => ({
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
}, Vh = window.Vue.defineComponent, kD = window.Vue.resolveComponent, Ch = window.Vue.openBlock, Eh = window.Vue.createElementBlock, Ra = window.Vue.createElementVNode, u0 = window.Vue.mergeProps, Eu = window.Vue.renderSlot, TD = window.Vue.createVNode, ID = window.Vue.normalizeStyle, AD = window.Vue.toHandlers, xD = window.Vue.withDirectives, OD = window.Vue.normalizeProps, RD = window.Vue.guardReactiveProps, LD = window.Vue.vShow;
var Sh = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ND = t0, BD = Vh({
  props: ND,
  setup(e) {
    return n0(e);
  },
  components: {
    FeatherRipple: Ro
  }
}), PD = { role: "presentation" }, DD = { class: "tab-text" };
function MD(e, o, r, s, a, u) {
  const c = kD("FeatherRipple");
  return Ch(), Eh("li", PD, [
    Ra("button", u0(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      Ra("span", DD, [
        Eu(e.$slots, "default", {}, void 0, !0)
      ]),
      TD(c)
    ], 16)
  ]);
}
var La = /* @__PURE__ */ Sh(BD, [["render", MD], ["__scopeId", "data-v-e6bb52b6"]]);
const FD = i0, UD = o0, qD = Vh({
  model: r0,
  emits: UD,
  props: FD,
  setup(e, o) {
    return s0(e, o);
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
}), HD = { class: "feather-tab-container" }, WD = { class: "tab-panels" };
function zD(e, o, r, s, a, u) {
  return Ch(), Eh("div", HD, [
    Ra("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: ID({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    Ra("ul", u0(e.attrs, AD(e.listeners)), [
      Eu(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Ra("div", WD, [
      Eu(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var c0 = /* @__PURE__ */ Sh(qD, [["render", zD], ["__scopeId", "data-v-27adffb9"]]);
const GD = a0, YD = Vh({
  props: GD,
  setup(e) {
    return l0(e);
  }
});
function jD(e, o, r, s, a, u) {
  return xD((Ch(), Eh("div", OD(RD(e.attrs)), [
    Eu(e.$slots, "default")
  ], 16)), [
    [LD, e.selected]
  ]);
}
var Na = /* @__PURE__ */ Sh(YD, [["render", jD]]);
const KD = window.Vue.defineComponent, ZD = window.Vue.toDisplayString, XD = window.Vue.normalizeClass, JD = window.Vue.openBlock, QD = window.Vue.createElementBlock, eM = window.Vue.createCommentVNode, tM = /* @__PURE__ */ KD({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (JD(), QD("span", {
      key: 0,
      class: XD(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, ZD(o.severity), 3)) : eM("", !0);
  }
}), d0 = /* @__PURE__ */ Le(tM, [["__scopeId", "data-v-83c2cdce"]]), nM = window.Vue.defineComponent, s_ = window.Vue.toDisplayString, a_ = window.Vue.createElementVNode, rM = window.Vue.openBlock, oM = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const iM = { class: "box" }, sM = { class: "label" }, aM = { class: "date" }, lM = /* @__PURE__ */ nM({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (rM(), oM("div", iM, [
      a_("div", sM, s_(o.label), 1),
      a_("div", aM, s_(o.info), 1)
    ]));
  }
}), _f = /* @__PURE__ */ Le(lM, [["__scopeId", "data-v-b4afa751"]]), uM = window.Vue.defineComponent, cM = window.Vue.unref, dM = window.Vue.renderList, fM = window.Vue.Fragment, gf = window.Vue.openBlock, $f = window.Vue.createElementBlock, hM = window.Vue.toDisplayString, pM = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const mM = { class: "alarms-list" }, vM = /* @__PURE__ */ uM({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (gf(), $f("div", mM, [
      (gf(!0), $f(fM, null, dM(cM(Ge.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (gf(), $f("div", {
        class: pM(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, hM(a.length), 3))), 128))
    ]));
  }
}), wM = /* @__PURE__ */ Le(vM, [["__scopeId", "data-v-52d63440"]]), _M = window.Vue.openBlock, gM = window.Vue.createElementBlock, $M = window.Vue.createElementVNode;
var yM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const bM = {}, VM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, CM = /* @__PURE__ */ $M("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), EM = [
  CM
];
function SM(e, o) {
  return _M(), gM("svg", VM, EM);
}
var kM = /* @__PURE__ */ yM(bM, [["render", SM]]);
const TM = window.Vue.openBlock, IM = window.Vue.createElementBlock, AM = window.Vue.createStaticVNode;
var xM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const OM = {}, RM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, LM = /* @__PURE__ */ AM('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), NM = [
  LM
];
function BM(e, o) {
  return TM(), IM("svg", RM, NM);
}
var Su = /* @__PURE__ */ xM(OM, [["render", BM]]);
const PM = window.Vue.defineComponent, sr = window.Vue.unref, yf = window.Vue.createVNode, kh = window.Vue.createElementVNode, bf = window.Vue.withCtx, Jl = window.Vue.openBlock, Vf = window.Vue.createBlock, Cf = window.Vue.createCommentVNode, DM = window.Vue.normalizeClass, MM = window.Vue.createElementBlock, FM = window.Vue.pushScopeId, UM = window.Vue.popScopeId, Th = (e) => (FM("data-v-d9c6a479"), e = e(), UM(), e), qM = /* @__PURE__ */ Th(() => /* @__PURE__ */ kh("span", null, "Acknowledge", -1)), HM = /* @__PURE__ */ Th(() => /* @__PURE__ */ kh("span", null, "Escalate", -1)), WM = /* @__PURE__ */ Th(() => /* @__PURE__ */ kh("span", null, "Clear", -1)), zM = /* @__PURE__ */ PM({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const o = e, r = fr(), s = async (u) => {
      await Ok(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await g1(
        o.situationId,
        Lt.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await Qg(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (Jl(), MM("div", {
      class: DM(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? Cf("", !0) : (Jl(), Vf(sr(Ee), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: bf(() => [
          yf(sr(te), {
            icon: sr(ws),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          qM
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (Jl(), Vf(sr(Ee), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(sr(Lt).ESCALATE))
      }, {
        default: bf(() => [
          yf(sr(te), {
            icon: sr(kM),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          HM
        ]),
        _: 1
      })) : Cf("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (Jl(), Vf(sr(Ee), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(sr(Lt).CLEAR))
      }, {
        default: bf(() => [
          yf(sr(te), {
            icon: sr(Su),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          WM
        ]),
        _: 1
      })) : Cf("", !0)
    ], 2));
  }
}), f0 = /* @__PURE__ */ Le(zM, [["__scopeId", "data-v-d9c6a479"]]);
var GM = Object.defineProperty, YM = Object.defineProperties, jM = Object.getOwnPropertyDescriptors, l_ = Object.getOwnPropertySymbols, KM = Object.prototype.hasOwnProperty, ZM = Object.prototype.propertyIsEnumerable, u_ = (e, o, r) => o in e ? GM(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, lh = (e, o) => {
  for (var r in o || (o = {}))
    KM.call(o, r) && u_(e, r, o[r]);
  if (l_)
    for (var r of l_(o))
      ZM.call(o, r) && u_(e, r, o[r]);
  return e;
}, h0 = (e, o) => YM(e, jM(o));
const p0 = window.Vue.defineComponent, XM = window.Vue.inject, JM = window.Vue.resolveComponent, Ef = window.Vue.openBlock, c_ = window.Vue.createElementBlock, cs = window.Vue.createElementVNode, QM = window.Vue.createBlock, d_ = window.Vue.createCommentVNode, e4 = window.Vue.renderSlot, t4 = window.Vue.pushScopeId, n4 = window.Vue.popScopeId, Sf = window.Vue.toRef, Ql = window.Vue.computed, r4 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var o4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const i4 = {
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
}, s4 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, a4 = p0({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: s4,
  props: i4,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: XM("registerCheckbox", (o) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : xe("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : xe("checkbox-label");
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
      (e.keyCode === me.SPACE || e.keyCode === me.ENTER) && this.updateValue(), e.keyCode === me.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: Ro
  }
}), l4 = (e) => (t4("data-v-a7af27e2"), e = e(), n4(), e), u4 = { class: "layout-container" }, c4 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], d4 = { class: "checkbox hover focus" }, f4 = /* @__PURE__ */ l4(() => /* @__PURE__ */ cs("div", { class: "box" }, [
  /* @__PURE__ */ cs("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ cs("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ cs("div", { class: "indeterminate" })
], -1)), h4 = ["id", "for"];
function p4(e, o, r, s, a, u) {
  const c = JM("feather-ripple");
  return Ef(), c_("div", u4, [
    cs("div", {
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
      cs("div", d4, [
        f4,
        e.disabled ? d_("", !0) : (Ef(), QM(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? d_("", !0) : (Ef(), c_("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        e4(e.$slots, "default", {}, void 0, !0)
      ], 8, h4))
    ], 40, c4)
  ]);
}
var yi = /* @__PURE__ */ o4(a4, [["render", p4], ["__scopeId", "data-v-a7af27e2"]]);
const m4 = h0(lh({}, Es), {
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
p0({
  props: m4,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    Ss(e);
    const r = Sf(e, "error"), s = Ql(() => xe("feather-checkbox-group")), a = Ql(() => xe("feather-input-description")), u = Ql(() => xe("feather-input-label")), c = Ql(() => {
      const w = JSON.parse(JSON.stringify(o.attrs));
      return w["aria-invalid"] || (w["aria-invalid"] = !!r.value), h0(lh({}, w), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = r4(s.value), { validate: v } = Vs(f, Sf(e, "modelValue"), e.label, e.schema, Sf(e, "error"));
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
    }, Cs(o.attrs));
  },
  components: {
    InputSubText: bs
  }
});
const v4 = window.Vue.openBlock, w4 = window.Vue.createElementBlock, m0 = window.Vue.createElementVNode;
var _4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const g4 = {}, $4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, y4 = /* @__PURE__ */ m0("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), b4 = /* @__PURE__ */ m0("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), V4 = [
  y4,
  b4
];
function C4(e, o) {
  return v4(), w4("svg", $4, V4);
}
var E4 = /* @__PURE__ */ _4(g4, [["render", C4]]), S4 = Object.defineProperty, k4 = Object.defineProperties, T4 = Object.getOwnPropertyDescriptors, f_ = Object.getOwnPropertySymbols, I4 = Object.prototype.hasOwnProperty, A4 = Object.prototype.propertyIsEnumerable, h_ = (e, o, r) => o in e ? S4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ds = (e, o) => {
  for (var r in o || (o = {}))
    I4.call(o, r) && h_(e, r, o[r]);
  if (f_)
    for (var r of f_(o))
      A4.call(o, r) && h_(e, r, o[r]);
  return e;
}, v0 = (e, o) => k4(e, T4(o));
const x4 = window.Vue.defineComponent, kf = window.Vue.toRef, O4 = window.Vue.computed, p_ = window.Vue.resolveComponent, m_ = window.Vue.openBlock, v_ = window.Vue.createElementBlock, w_ = window.Vue.mergeProps, __ = window.Vue.createVNode, R4 = window.Vue.normalizeClass, g_ = window.Vue.withCtx, L4 = window.Vue.createElementVNode, N4 = window.Vue.toDisplayString, B4 = window.Vue.createCommentVNode;
var P4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const D4 = v0(ds(ds({}, Pu), Es), {
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
}), M4 = {
  "update:modelValue": (e) => !0
}, F4 = x4({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: M4,
  props: D4,
  setup(e, o) {
    Ss(e), Du(e);
    const r = kf(e, "id"), s = O4(() => r.value ? r.value : xe("feather-textarea-label")), { validate: a } = Vs(s, kf(e, "modelValue"), e.label, e.schema, kf(e, "error"));
    return ds({
      inputId: s,
      incomingId: r,
      validate: a
    }, Cs(o.attrs));
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
      return xe("feather-textarea-description");
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
      const e = ds({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), v0(ds(ds({}, e), this.listeners), {
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
    InputSubText: bs,
    InputWrapper: Bu
  }
}), U4 = ["maxlength"], q4 = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function H4(e, o, r, s, a, u) {
  const c = p_("InputWrapper"), f = p_("InputSubText");
  return m_(), v_("div", w_(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    __(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: R4(["feather-textarea-content", e.contentCls])
    }, {
      default: g_(() => [
        L4("textarea", w_(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, U4)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    __(f, { id: e.descriptionId }, {
      right: g_(() => [
        e.maxlength ? (m_(), v_("div", q4, N4(e.charCount), 1)) : B4("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var ku = /* @__PURE__ */ P4(F4, [["render", H4], ["__scopeId", "data-v-0648df5c"]]);
const W4 = window.Pinia.defineStore, Gu = W4("appStore", {
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
}), z4 = window.Vue.defineComponent, $_ = window.Vue.toDisplayString, ua = window.Vue.createElementVNode, ci = window.Vue.unref, Qi = window.Vue.openBlock, y_ = window.Vue.createBlock, ca = window.Vue.createCommentVNode, b_ = window.Vue.createVNode, eu = window.Vue.createElementBlock, G4 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Y4 = { class: "row" }, j4 = { class: "label" }, K4 = { class: "action-icons" }, Z4 = { class: "icon-btn" }, X4 = {
  key: 0,
  class: "icon-btn"
}, J4 = {
  key: 1,
  class: "icon-btn"
}, Q4 = {
  key: 0,
  class: "text"
}, e8 = window.Vue.watch, V_ = window.Vue.ref, t8 = /* @__PURE__ */ z4({
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
    const o = e, r = Gu(), s = V_(!1), a = V_((v = o.memo) == null ? void 0 : v.body);
    e8(o, () => {
      var p;
      a.value = (p = o.memo) == null ? void 0 : p.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await Mk(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await Dk(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (p, w) => (Qi(), eu("div", {
      class: G4([o.boxType === "small" ? "box-small" : "box"])
    }, [
      ua("div", Y4, [
        ua("div", j4, $_(e.label), 1),
        ua("div", K4, [
          ua("div", Z4, [
            s.value ? ca("", !0) : (Qi(), y_(ci(te), {
              key: 0,
              icon: ci(E4),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (Qi(), eu("div", X4, [
            b_(ci(te), {
              icon: ci(ws),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : ca("", !0),
          a.value && a.value != "" || s.value ? (Qi(), eu("div", J4, [
            b_(ci(te), {
              icon: ci($s),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : ca("", !0)
        ])
      ]),
      ua("div", null, [
        !s.value && a.value != null ? (Qi(), eu("div", Q4, $_(a.value), 1)) : ca("", !0),
        s.value ? (Qi(), y_(ci(ku), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": w[0] || (w[0] = (g) => a.value = g),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : ca("", !0)
      ])
    ], 2));
  }
}), Tu = /* @__PURE__ */ Le(t8, [["__scopeId", "data-v-ee1264b5"]]), n8 = window.Vue.defineComponent, Vo = window.Vue.unref, es = window.Vue.createVNode, da = window.Vue.toDisplayString, cr = window.Vue.createElementVNode, C_ = window.Vue.openBlock, E_ = window.Vue.createElementBlock, S_ = window.Vue.createCommentVNode, Tf = window.Vue.createTextVNode, r8 = window.Vue.pushScopeId, o8 = window.Vue.popScopeId, Ih = (e) => (r8("data-v-b59dc239"), e = e(), o8(), e), i8 = {
  key: 0,
  class: "card"
}, s8 = { class: "row" }, a8 = {
  key: 0,
  class: "ack"
}, l8 = /* @__PURE__ */ Ih(() => /* @__PURE__ */ cr("strong", null, " Duration: ", -1)), u8 = ["innerHTML"], c8 = /* @__PURE__ */ Ih(() => /* @__PURE__ */ cr("strong", null, "First Event", -1)), d8 = /* @__PURE__ */ Ih(() => /* @__PURE__ */ cr("strong", null, "Last Event", -1)), f8 = { class: "section memo-boxes" }, k_ = window.Vue.ref, h8 = window.Vue.watch, p8 = /* @__PURE__ */ n8({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, s = k_(!1), a = k_(r.alarm), u = (/* @__PURE__ */ new Date()).getTime();
    h8(r, () => {
      a.value = r.alarm, s.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (v) => {
      const p = await e1(v);
      p && (a.value = p);
    };
    return (v, p) => {
      var w, g, y, b, C;
      return a.value ? (C_(), E_("div", i8, [
        cr("div", null, [
          cr("div", s8, [
            es(Vo(yi), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                p[0] || (p[0] = (T) => s.value = T),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            cr("div", {
              class: "title",
              onClick: p[1] || (p[1] = () => {
                s.value = !s.value, c();
              })
            }, da(a.value.nodeLabel) + " - " + da(a.value.id), 1),
            es(d0, {
              severity: (w = a.value) == null ? void 0 : w.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (C_(), E_("div", a8, [
              es(Vo(te), {
                icon: Vo(ws),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : S_("", !0)
          ]),
          cr("div", null, [
            l8,
            Tf(" " + da(Vo(Ru)(Vo(u), new Date(a.value.firstEventTime))), 1)
          ]),
          cr("div", {
            class: "description",
            innerHTML: Vo(f1)(a.value.description || "")
          }, null, 8, u8),
          cr("div", null, [
            c8,
            Tf(" - " + da(Vo(Sr)(a.value.firstEventTime)), 1)
          ]),
          cr("div", null, [
            d8,
            Tf(" - " + da(Vo(Sr)(a.value.lastEventTime)), 1)
          ]),
          cr("div", f8, [
            es(Tu, {
              id: (g = a.value) == null ? void 0 : g.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (y = a.value) == null ? void 0 : y.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            es(Tu, {
              id: (b = a.value) == null ? void 0 : b.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (C = a.value) == null ? void 0 : C.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        es(f0, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : S_("", !0);
    };
  }
}), m8 = /* @__PURE__ */ Le(p8, [["__scopeId", "data-v-b59dc239"]]), v8 = window.Vue.openBlock, w8 = window.Vue.createElementBlock, w0 = window.Vue.createElementVNode;
var _8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const g8 = {}, $8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, y8 = /* @__PURE__ */ w0("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), b8 = /* @__PURE__ */ w0("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), V8 = [
  y8,
  b8
];
function C8(e, o) {
  return v8(), w8("svg", $8, V8);
}
var uh = /* @__PURE__ */ _8(g8, [["render", C8]]);
const E8 = window.Vue.watch, S8 = window.Vue.ref, k8 = window.Vue.onBeforeUnmount, _0 = (e) => {
  const o = S8(!1), r = (s) => {
    s.keyCode === me.ESCAPE && (s.preventDefault(), o.value = !o.value);
  };
  return E8(e, (s) => {
    s ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), k8(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, T8 = window.Vue.watch, g0 = (e) => {
  let o;
  T8(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, $0 = window.Vue.watch, y0 = window.Vue.onBeforeUnmount, b0 = window.Vue.nextTick, I8 = window.Vue.onMounted, V0 = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, Iu = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, C0 = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  y0(() => Iu(o, r)), I8(() => $0(e, (s) => {
    s ? b0(() => {
      o = V0(r);
    }) : Iu(o, r);
  }, { immediate: !0 }));
}, A8 = (e, o) => {
  let r;
  y0(() => Iu(r, o.value ? o.value.offsetParent : !1)), $0([e, o], ([s, a]) => {
    s && a ? b0(() => {
      r = V0(a.offsetParent);
    }) : a && Iu(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var x8 = Object.defineProperty, T_ = Object.getOwnPropertySymbols, O8 = Object.prototype.hasOwnProperty, R8 = Object.prototype.propertyIsEnumerable, I_ = (e, o, r) => o in e ? x8(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, L8 = (e, o) => {
  for (var r in o || (o = {}))
    O8.call(o, r) && I_(e, r, o[r]);
  if (T_)
    for (var r of T_(o))
      R8.call(o, r) && I_(e, r, o[r]);
  return e;
};
const Ah = window.Vue.defineComponent, Ba = window.Vue.ref, N8 = window.Vue.nextTick, E0 = window.Vue.openBlock, S0 = window.Vue.createElementBlock, xh = window.Vue.createElementVNode, B8 = window.Vue.renderSlot, P8 = window.Vue.resolveComponent, D8 = window.Vue.normalizeClass, M8 = window.Vue.withModifiers, F8 = window.Vue.createVNode, A_ = window.Vue.toRef, x_ = window.Vue.computed, O_ = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var k0 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const U8 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, q8 = Ah({
  props: U8,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = Ba(), o = Ba(!1), r = (w, g) => {
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
      g && g.focus ? N8(() => {
        g.focus();
      }) : s(w);
    }, v = Ba();
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
}), H8 = /* @__PURE__ */ xh("div", { tabindex: "0" }, null, -1), W8 = {
  class: "focus-trap-content",
  ref: "content"
}, z8 = /* @__PURE__ */ xh("div", { tabindex: "0" }, null, -1);
function G8(e, o, r, s, a, u) {
  return E0(), S0("div", null, [
    H8,
    xh("div", W8, [
      B8(e.$slots, "default")
    ], 512),
    z8
  ]);
}
var T0 = /* @__PURE__ */ k0(q8, [["render", G8]]);
const Y8 = Ah({
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
    icon: () => $s
  },
  components: {
    FeatherIcon: te
  }
}), j8 = ["aria-label"];
function K8(e, o, r, s, a, u) {
  const c = P8("FeatherIcon");
  return E0(), S0("a", {
    href: "#",
    class: D8(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = M8((f) => e.$emit("close"), ["prevent"]))
  }, [
    F8(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, j8);
}
var I0 = /* @__PURE__ */ k0(Y8, [["render", K8], ["__scopeId", "data-v-fc0f3f00"]]);
const A0 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, Z8 = {
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
    default: () => A0,
    validator: (e) => !!e.title
  }
}, X8 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
Ah({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: X8,
  props: Z8,
  setup(e, o) {
    const r = Nu(A_(e, "labels"), A0), s = A_(e, "modelValue"), a = Ba(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = x_(() => !!o.slots.footer), f = x_(() => xe("dialog-header"));
    e.relative ? A8(s, a) : C0(s), g0(s), O_(_0(s), () => {
      u();
    });
    const v = Ba(e.modelValue);
    return O_(v, (p) => {
      p ? o.emit("shown") : o.emit("hidden");
    }), L8({ close: u, hasFooter: c, headerId: f, element: a, shown: v }, r);
  },
  components: {
    FocusTrap: T0,
    DialogClose: I0
  }
});
var J8 = Object.defineProperty, R_ = Object.getOwnPropertySymbols, Q8 = Object.prototype.hasOwnProperty, eF = Object.prototype.propertyIsEnumerable, L_ = (e, o, r) => o in e ? J8(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Yu = (e, o) => {
  for (var r in o || (o = {}))
    Q8.call(o, r) && L_(e, r, o[r]);
  if (R_)
    for (var r of R_(o))
      eF.call(o, r) && L_(e, r, o[r]);
  return e;
};
const ju = window.Vue.defineComponent, N_ = window.Vue.toRef, B_ = window.Vue.watch, P_ = window.Vue.ref, D_ = window.Vue.resolveComponent, tu = window.Vue.openBlock, M_ = window.Vue.createBlock, tF = window.Vue.Teleport, F_ = window.Vue.createElementBlock, If = window.Vue.createVNode, U_ = window.Vue.Transition, Af = window.Vue.withCtx, q_ = window.Vue.createCommentVNode, nF = window.Vue.withDirectives, rF = window.Vue.normalizeStyle, oF = window.Vue.normalizeClass, H_ = window.Vue.createElementVNode, iF = window.Vue.renderSlot, sF = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var aF = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const x0 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, lF = {
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
    default: () => x0,
    validator: (e) => !!e.title
  }
}, uF = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, cF = ju({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: uF,
  props: lF,
  setup(e, o) {
    const r = Nu(N_(e, "labels"), x0), s = N_(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    C0(s), g0(s), B_(_0(s), () => {
      a();
    });
    const u = P_(), c = P_(!1);
    return B_(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), Yu({ close: a, shown: c, isShown: s, element: u }, r);
  },
  components: {
    DialogClose: I0,
    FocusTrap: T0
  }
}), dF = {
  key: 0,
  class: "drawer-container feather-styles"
}, fF = {
  key: 0,
  class: "greyedOut"
}, hF = ["aria-label"], pF = { class: "slot" };
function mF(e, o, r, s, a, u) {
  const c = D_("dialog-close"), f = D_("focus-trap");
  return tu(), M_(tF, { to: "body" }, [
    e.modelValue ? (tu(), F_("div", dF, [
      If(U_, { name: "greyOutShim" }, {
        default: Af(() => [
          e.modelValue ? (tu(), F_("div", fF)) : q_("", !0)
        ]),
        _: 1
      }),
      If(U_, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (v) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (v) => e.shown = !1)
      }, {
        default: Af(() => [
          nF((tu(), M_(f, {
            enable: e.modelValue,
            style: rF({ width: e.width }),
            key: "sect",
            class: oF(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: Af(() => [
              H_("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                H_("div", pF, [
                  iF(e.$slots, "default", {}, void 0, !0)
                ]),
                If(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, hF)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [sF, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : q_("", !0)
  ]);
}
var O0 = /* @__PURE__ */ aF(cF, [["render", mF], ["__scopeId", "data-v-0a36e1dc"]]);
const vF = Yu({
  label: {
    type: String,
    required: !0
  }
}, t0);
ju({
  name: "DrawerTab",
  props: vF,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = bi(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      Vi(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return n0(e);
  },
  components: {
    FeatherRipple: Ro
  }
});
const wF = Yu({}, i0), _F = o0;
ju({
  emits: _F,
  model: r0,
  props: wF,
  setup(e, o) {
    return s0(e, o);
  }
});
const gF = Yu({
  header: {
    type: String
  }
}, a0);
ju({
  name: "DrawerTabContent",
  props: gF,
  setup(e) {
    return l0(e);
  },
  directives: {
    MenuFocusLoop: AR
  }
});
const $F = window.Vue.defineComponent, R0 = window.Vue.createElementVNode, W_ = window.Vue.createVNode, yF = window.Vue.renderList, bF = window.Vue.Fragment, fa = window.Vue.openBlock, xf = window.Vue.createElementBlock, z_ = window.Vue.createBlock, VF = window.Vue.unref, CF = window.Vue.withCtx, EF = window.Vue.pushScopeId, SF = window.Vue.popScopeId, kF = (e) => (EF("data-v-37e146e7"), e = e(), SF(), e), TF = { class: "content" }, IF = /* @__PURE__ */ kF(() => /* @__PURE__ */ R0("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), AF = {
  key: 0,
  class: "situation-list"
}, Of = window.Vue.ref, G_ = window.Vue.watch, xF = /* @__PURE__ */ $F({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, s = fr(), a = Of(r.visible), u = () => {
      let p = s.situations;
      r.situationId !== 0 && (p = s.situations.filter(
        (w) => w.id != r.situationId
      )), c.value = p, f.value = p;
    }, c = Of(s.situations), f = Of(s.situations);
    G_(r, () => {
      a.value = r.visible, u();
    }), G_(
      () => s.situations,
      () => {
        u();
      }
    );
    const v = (p) => {
      f.value = p;
    };
    return (p, w) => (fa(), z_(VF(O0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        w[0] || (w[0] = (g) => a.value = g),
        w[1] || (w[1] = (g) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: CF(() => [
        R0("div", TF, [
          IF,
          W_(Ts, {
            list: c.value,
            isSituation: "",
            onFilteredList: v
          }, null, 8, ["list"]),
          f.value.length ? (fa(), xf("div", AF, [
            (fa(!0), xf(bF, null, yF(f.value, (g) => (fa(), xf("div", {
              class: "card",
              key: g.id
            }, [
              W_(y1, {
                onClick: (y) => o("situation-selected", g.id),
                "situation-info": g,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (fa(), z_(Is, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), L0 = /* @__PURE__ */ Le(xF, [["__scopeId", "data-v-37e146e7"]]), OF = window.Vue.defineComponent, Y_ = window.Vue.normalizeClass, ls = window.Vue.createElementVNode, nu = window.Vue.unref, RF = window.Vue.createVNode, ru = window.Vue.toDisplayString, LF = window.Vue.createTextVNode, NF = window.Vue.openBlock, BF = window.Vue.createElementBlock, PF = window.Vue.pushScopeId, DF = window.Vue.popScopeId, MF = (e) => (PF("data-v-f3d99277"), e = e(), DF(), e), FF = { class: "alarmInfo" }, UF = { class: "alarm-title" }, qF = /* @__PURE__ */ MF(() => /* @__PURE__ */ ls("strong", null, " Duration: ", -1)), HF = { class: "description" }, WF = /* @__PURE__ */ OF({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, s = (/* @__PURE__ */ new Date()).getTime();
    return (a, u) => (NF(), BF("div", {
      class: Y_(["alarm", { selected: r.selected }])
    }, [
      ls("div", FF, [
        ls("div", {
          class: Y_(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        RF(nu(yi), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        ls("div", UF, ru(e.alarm.nodeLabel) + " - " + ru(e.alarm.id), 1)
      ]),
      ls("div", null, [
        qF,
        LF(" " + ru(nu(Ru)(nu(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      ls("div", HF, ru(nu(h1)(e.alarm.description, 120)), 1)
    ], 2));
  }
}), Oh = /* @__PURE__ */ Le(WF, [["__scopeId", "data-v-f3d99277"]]), zF = window.Vue.defineComponent, pu = window.Vue.createElementVNode, ts = window.Vue.unref, GF = window.Vue.toDisplayString, j_ = window.Vue.withCtx, Rf = window.Vue.createVNode, YF = window.Vue.renderList, jF = window.Vue.Fragment, ha = window.Vue.openBlock, Lf = window.Vue.createElementBlock, K_ = window.Vue.createBlock, KF = window.Vue.pushScopeId, ZF = window.Vue.popScopeId, XF = (e) => (KF("data-v-35547098"), e = e(), ZF(), e), JF = { class: "content" }, QF = { class: "header" }, e6 = /* @__PURE__ */ XF(() => /* @__PURE__ */ pu("h4", null, "ADD ALARMS", -1)), t6 = {
  key: 0,
  class: "alarms-list"
}, ou = window.Vue.ref, Z_ = window.Vue.watch, n6 = /* @__PURE__ */ zF({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, s = fr(), a = ou(r.visible), u = ou([]), c = ou(["all"]), f = ou(s.unassignedAlarms);
    Z_(r, () => {
      a.value = r.visible, u.value = [], f.value = s.unassignedAlarms;
    }), Z_(
      () => s.unassignedAlarms,
      () => {
        w();
      }
    );
    const v = (y) => {
      Ge.includes(u.value, y) ? Ge.remove(u.value, (b) => b === y) : u.value.push(y);
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
    return (y, b) => (ha(), K_(ts(O0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        b[0] || (b[0] = (C) => a.value = C),
        b[1] || (b[1] = (C) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: j_(() => [
        pu("div", JF, [
          pu("div", QF, [
            e6,
            Rf(ts(Ee), {
              class: "add-alarms-btn",
              onClick: p
            }, {
              default: j_(() => [
                pu("span", null, "Add " + GF(ts(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          Rf(Ts, {
            list: ts(s).unassignedAlarms,
            onFilteredList: g
          }, null, 8, ["list"]),
          f.value.length ? (ha(), Lf("div", t6, [
            (ha(!0), Lf(jF, null, YF(f.value, (C) => (ha(), Lf("div", {
              class: "card",
              key: C.id
            }, [
              Rf(Oh, {
                selected: ts(Ge.includes)(ts(u), C.id),
                alarm: C,
                onSelectedAlarm: v
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (ha(), K_(Is, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), r6 = /* @__PURE__ */ Le(n6, [["__scopeId", "data-v-35547098"]]), o6 = window.Vue.openBlock, i6 = window.Vue.createElementBlock, N0 = window.Vue.createElementVNode;
var s6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const a6 = {}, l6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, u6 = /* @__PURE__ */ N0("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), c6 = /* @__PURE__ */ N0("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), d6 = [
  u6,
  c6
];
function f6(e, o) {
  return o6(), i6("svg", l6, d6);
}
var X_ = /* @__PURE__ */ s6(a6, [["render", f6]]);
const h6 = window.Vue.defineComponent, In = window.Vue.createElementVNode, qt = window.Vue.unref, Qt = window.Vue.createVNode, pa = window.Vue.withCtx, p6 = window.Vue.renderList, J_ = window.Vue.Fragment, ma = window.Vue.openBlock, iu = window.Vue.createElementBlock, m6 = window.Vue.createBlock, v6 = window.Vue.pushScopeId, w6 = window.Vue.popScopeId, As = (e) => (v6("data-v-76f75ba2"), e = e(), w6(), e), _6 = { class: "container" }, g6 = { class: "header" }, $6 = /* @__PURE__ */ As(() => /* @__PURE__ */ In("div", { class: "title" }, "Alarms", -1)), y6 = /* @__PURE__ */ As(() => /* @__PURE__ */ In("span", null, "Add Alarms", -1)), b6 = { class: "alarms-container" }, V6 = { class: "filters" }, C6 = { class: "list" }, E6 = { class: "row actions" }, S6 = /* @__PURE__ */ As(() => /* @__PURE__ */ In("span", null, "Clear", -1)), k6 = /* @__PURE__ */ As(() => /* @__PURE__ */ In("span", null, "Acknowledge", -1)), T6 = /* @__PURE__ */ As(() => /* @__PURE__ */ In("span", null, "Move", -1)), I6 = /* @__PURE__ */ As(() => /* @__PURE__ */ In("span", null, "Remove", -1)), A6 = { class: "section" }, x6 = {
  key: 0,
  class: "alarm-list"
}, su = window.Vue.ref, O6 = window.Vue.watch, R6 = window.Vue.reactive, L6 = window.Vue.markRaw, N6 = /* @__PURE__ */ h6({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = L6({
      Add: zu,
      Delete: X_,
      MarkComplete: Su,
      CheckCircle: ws,
      ExitToApp: uh
    }), s = Gu(), a = fr(), u = su(!1), c = su(["all"]), f = su(!1), v = su(!1), p = R6({
      selectedAlarms: [],
      alarms: o.alarms
    });
    O6(o, () => {
      c.value = ["all"], p.alarms = o.alarms, p.selectedAlarms = [], u.value = !1;
    });
    const w = (R) => {
      p.selectedAlarms.includes(R) ? Ge.remove(p.selectedAlarms, (P) => P == R) : p.selectedAlarms.push(R);
    }, g = async (R) => {
      p.selectedAlarms.length ? (await Rk(p.selectedAlarms, R), a.getSituation(o.situationId), p.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, y = () => p.selectedAlarms.length === o.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : p.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), b = async () => {
      y() && (await lw(
        o.situationId,
        p.selectedAlarms
      ) ? a.getSituation(o.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, C = async (R) => {
      y() && (await lw(
        o.situationId,
        p.selectedAlarms
      ) ? await T(R, p.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, T = async (R, P) => {
      P.length ? await $1(R, P) ? a.getSituation(R) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, O = async (R) => {
      await T(o.situationId, R), v.value = !1;
    }, E = () => {
      p.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, I = (R) => {
      p.alarms = R;
    };
    return (R, P) => (ma(), iu(J_, null, [
      In("div", _6, [
        In("div", g6, [
          $6,
          Qt(qt(Ee), {
            class: "add-alarms-btn",
            onClick: P[0] || (P[0] = (q) => v.value = !0)
          }, {
            default: pa(() => [
              Qt(qt(te), {
                icon: qt(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              y6
            ]),
            _: 1
          })
        ]),
        In("div", b6, [
          In("div", V6, [
            Qt(Ts, {
              list: o.alarms,
              onFilteredList: I,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          In("div", C6, [
            In("div", E6, [
              Qt(qt(yi), {
                modelValue: u.value,
                "onUpdate:modelValue": P[1] || (P[1] = (q) => u.value = q),
                label: "selected"
              }, null, 8, ["modelValue"]),
              Qt(qt(Ee), {
                onClick: P[2] || (P[2] = () => g("clear"))
              }, {
                default: pa(() => [
                  Qt(qt(te), {
                    icon: qt(Su),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  S6
                ]),
                _: 1
              }),
              Qt(qt(Ee), {
                onClick: P[3] || (P[3] = () => g("ack"))
              }, {
                default: pa(() => [
                  Qt(qt(te), {
                    icon: qt(ws),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  k6
                ]),
                _: 1
              }),
              Qt(qt(Ee), { onClick: E }, {
                default: pa(() => [
                  Qt(qt(te), {
                    icon: qt(uh),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  T6
                ]),
                _: 1
              }),
              Qt(qt(Ee), { onClick: b }, {
                default: pa(() => [
                  Qt(qt(te), {
                    icon: qt(X_),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  I6
                ]),
                _: 1
              })
            ]),
            In("div", A6, [
              p.alarms.length > 0 ? (ma(), iu("div", x6, [
                (ma(!0), iu(J_, null, p6(p.alarms, (q) => (ma(), iu("div", {
                  key: q.id
                }, [
                  Qt(m8, {
                    alarm: q,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: w
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (ma(), m6(Is, { key: 1 }))
            ])
          ])
        ])
      ]),
      Qt(L0, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: C,
        onDrawerClosed: P[4] || (P[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      Qt(r6, {
        visible: v.value,
        onAlarmsSelected: O,
        onDrawerAlarmsClosed: P[5] || (P[5] = () => v.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
}), B6 = /* @__PURE__ */ Le(N6, [["__scopeId", "data-v-76f75ba2"]]), P6 = window.Vue.defineComponent, ar = window.Vue.createVNode, kn = window.Vue.unref, Nf = window.Vue.normalizeClass, au = window.Vue.toDisplayString, va = window.Vue.openBlock, wa = window.Vue.createElementBlock, Q_ = window.Vue.createCommentVNode, D6 = window.Vue.withCtx, Gn = window.Vue.createElementVNode, M6 = window.Vue.Fragment, F6 = window.Vue.pushScopeId, U6 = window.Vue.popScopeId, q6 = (e) => (F6("data-v-fafb3615"), e = e(), U6(), e), H6 = { class: "section" }, W6 = { class: "action-section" }, z6 = { class: "btn-row" }, G6 = { key: 0 }, Y6 = { key: 1 }, j6 = {
  key: 0,
  class: "situation-detail"
}, K6 = { class: "situation-info" }, Z6 = { class: "id" }, X6 = ["innerHTML"], J6 = /* @__PURE__ */ q6(() => /* @__PURE__ */ Gn("p", null, null, -1)), Q6 = { class: "boxes" }, e5 = { class: "parameters" }, t5 = { class: "section memo-boxes" }, n5 = { key: 0 }, r5 = window.Vue.computed, eg = window.Vue.ref, o5 = window.Vue.watch, i5 = /* @__PURE__ */ P6({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = Gu(), s = fr(), a = Lt.REJECTED, u = eg(o.situationInfo.status), c = eg(o.situationInfo);
    o5(o, () => {
      u.value = o.situationInfo.status || "", c.value = o.situationInfo;
    });
    const f = r5(
      () => {
        var p;
        return f1(d1(((p = c.value) == null ? void 0 : p.description) || ""));
      }
    ), v = async (p) => {
      var g;
      await g1(
        (g = o.situationInfo) == null ? void 0 : g.id,
        p.toLowerCase()
      ) ? (u.value = p, s.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (p, w) => {
      var g, y, b, C, T, O, E, I, R, P, q, M;
      return va(), wa(M6, null, [
        Gn("div", H6, [
          Gn("div", W6, [
            ar(f0, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Gn("div", z6, [
              ar(kn(Ee), {
                class: Nf(["btn", { rejected: u.value == kn(a) }]),
                "data-test": "btn-reject",
                onClick: w[0] || (w[0] = (N) => v(kn(a)))
              }, {
                default: D6(() => [
                  ar(kn(te), {
                    icon: kn(t1),
                    "aria-hidden": "true",
                    class: Nf(["icon reject", { rejected: u.value == kn(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == kn(a) ? (va(), wa("span", G6, au(kn(a)), 1)) : (va(), wa("span", Y6, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (va(), wa("div", j6, [
            Gn("div", {
              class: Nf(["severity-line", [`${(y = (g = c.value) == null ? void 0 : g.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
            }, null, 2),
            Gn("div", K6, [
              Gn("div", Z6, [
                Gn("div", null, " Situation - " + au((b = c.value) == null ? void 0 : b.id) + " - " + au(c.value.alarms.length) + " alarm(s) affects " + au(kn(Ge.size)(kn(Ge.groupBy)((C = c.value) == null ? void 0 : C.alarms, "nodeId"))) + " node(s) ", 1),
                ar(d0, {
                  severity: (T = c.value) == null ? void 0 : T.severity
                }, null, 8, ["severity"])
              ]),
              Gn("span", {
                innerHTML: kn(f),
                "data-test": "situation-description"
              }, null, 8, X6),
              J6,
              Gn("div", Q6, [
                ar(_f, {
                  label: "First Event",
                  info: kn(Sr)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                ar(_f, {
                  label: "Last Event",
                  info: kn(Sr)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                ar(_f, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Gn("div", e5, [
              ar(wM, {
                alarms: (O = c.value) == null ? void 0 : O.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Q_("", !0),
          Gn("div", t5, [
            ar(Tu, {
              id: (E = c.value) == null ? void 0 : E.id,
              situationId: (I = c.value) == null ? void 0 : I.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (R = c.value) == null ? void 0 : R.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            ar(Tu, {
              id: (P = c.value) == null ? void 0 : P.id,
              situationId: (q = c.value) == null ? void 0 : q.id,
              label: "Journal Memo",
              type: "journal",
              memo: (M = c.value) == null ? void 0 : M.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (va(), wa("div", n5, [
          ar(B6, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Q_("", !0)
      ], 64);
    };
  }
}), s5 = /* @__PURE__ */ Le(i5, [["__scopeId", "data-v-fafb3615"]]);
var a5 = Object.defineProperty, l5 = Object.defineProperties, u5 = Object.getOwnPropertyDescriptors, tg = Object.getOwnPropertySymbols, c5 = Object.prototype.hasOwnProperty, d5 = Object.prototype.propertyIsEnumerable, ng = (e, o, r) => o in e ? a5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ch = (e, o) => {
  for (var r in o || (o = {}))
    c5.call(o, r) && ng(e, r, o[r]);
  if (tg)
    for (var r of tg(o))
      d5.call(o, r) && ng(e, r, o[r]);
  return e;
}, f5 = (e, o) => l5(e, u5(o));
const B0 = window.Vue.defineComponent, _i = window.Vue.resolveComponent, mu = window.Vue.openBlock, rg = window.Vue.createBlock, vu = window.Vue.mergeProps, gi = window.Vue.withCtx, P0 = window.Vue.createElementBlock, h5 = window.Vue.Fragment, p5 = window.Vue.renderList, m5 = window.Vue.createTextVNode, v5 = window.Vue.toDisplayString, w5 = window.Vue.computed, og = window.Vue.toRef, _a = window.Vue.createVNode, ig = window.Vue.toHandlers, _5 = window.Vue.renderSlot, g5 = window.Vue.normalizeClass, $5 = window.Vue.createElementVNode;
var D0 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const y5 = B0({
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
      return xe("feather-select-active");
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
        Fa(o, this.$refs.list.$el);
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
    FeatherListItem: za
  }
});
function b5(e, o, r, s, a, u) {
  const c = _i("FeatherListItem"), f = _i("FeatherList");
  return mu(), rg(f, vu(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: gi(() => [
      (mu(!0), P0(h5, null, p5(e.options, (v, p) => (mu(), rg(c, {
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
        default: gi(() => [
          m5(v5(v[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var V5 = /* @__PURE__ */ D0(y5, [["render", b5], ["__scopeId", "data-v-eae820da"]]);
const C5 = f5(ch(ch({}, Pu), Es), {
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
}), E5 = {
  "update:modelValue": (e) => !0
}, S5 = B0({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: E5,
  props: C5,
  setup(e, o) {
    Ss(e), Du(e);
    const r = w5(() => xe("feather-select-input")), { validate: s } = Vs(r, og(e, "modelValue"), e.label, e.schema, og(e, "error"));
    return ch({
      inputId: r,
      validate: s
    }, Cs(o.attrs));
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
      return xe("feather-select-description");
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
    icon: () => Wa
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
      if (e.keyCode === me.ENTER)
        e.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (e.keyCode === me.ESCAPE)
        this.closeMenu(), e.stopPropagation();
      else if (e.keyCode === me.DOWN)
        e.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (e.keyCode === me.UP)
        e.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (e.keyCode === me.HOME)
        e.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (e.keyCode === me.END)
        e.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const o = String.fromCharCode(e.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      Vi(this.delayTimeout), this.delayTimeout = bi(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Bu,
    InputSubText: bs,
    FeatherMenu: O1,
    List: V5,
    FeatherIcon: te
  }
});
function k5(e, o, r, s, a, u) {
  const c = _i("FeatherIcon"), f = _i("InputWrapper"), v = _i("List"), p = _i("FeatherMenu"), w = _i("InputSubText");
  return mu(), P0("div", vu(e.inherittedAttrs, { class: "feather-select-container" }), [
    _a(p, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: gi((g) => [
        _a(f, vu({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, g.attrs, ig(g.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: gi(() => [
            _5(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: gi(() => [
            _a(c, {
              class: g5(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: gi(() => [
            $5("input", vu(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, ig(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: gi(() => [
        _a(v, {
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
    _a(w, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var T5 = /* @__PURE__ */ D0(S5, [["render", k5], ["__scopeId", "data-v-ecb32d90"]]);
const I5 = window.Vue.openBlock, A5 = window.Vue.createElementBlock, M0 = window.Vue.createElementVNode;
var x5 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const O5 = {}, R5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, L5 = /* @__PURE__ */ M0("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), N5 = /* @__PURE__ */ M0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), B5 = [
  L5,
  N5
];
function P5(e, o) {
  return I5(), A5("svg", R5, B5);
}
var D5 = /* @__PURE__ */ x5(O5, [["render", P5]]);
const wu = window.Vue.openBlock, dh = window.Vue.createElementBlock, F0 = window.Vue.createElementVNode, M5 = window.Vue.defineComponent, di = window.Vue.ref, F5 = window.Vue.provide, sg = window.Vue.computed, U5 = window.Vue.onUnmounted, ag = window.Vue.toRef, q5 = window.Vue.resolveComponent, H5 = window.Vue.Fragment, W5 = window.Vue.createBlock, z5 = window.Vue.Teleport, lg = window.Vue.createVNode, G5 = window.Vue.Transition, Y5 = window.Vue.withCtx, j5 = window.Vue.normalizeClass, K5 = window.Vue.normalizeStyle, Z5 = window.Vue.toDisplayString, X5 = window.Vue.createCommentVNode, J5 = window.Vue.renderSlot, Bf = window.Vue.nextTick;
var U0 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Q5 = {}, eU = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, tU = /* @__PURE__ */ F0("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), nU = [
  tU
];
function rU(e, o) {
  return wu(), dh("svg", eU, nU);
}
var oU = /* @__PURE__ */ U0(Q5, [["render", rU]]), Rt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Rt || {}), jr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(jr || {});
const iU = (e, o, r, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + s && c.push(Rt.top), a >= o.height + s && c.push(Rt.bottom);
  const f = [];
  u >= o.width + s && f.push(Rt.right), e.left >= o.width + s && f.push(Rt.left);
  let v = [...f, ...c];
  return (r === Rt.top || r === Rt.bottom) && (v = [...c, ...f]), v.indexOf(r) > -1 ? r : v.length ? v[0] : r;
}, sU = (e, o, r, s, a = 28) => {
  if (e === Rt.left || e === Rt.right)
    return jr.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], v = u, p = c + o.width / 2, w = r.width - a, g = r.width / 2;
  return v >= g && p >= g && f.push(jr.center), p >= w && f.push(jr.left), v >= w && f.push(jr.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, aU = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Rt.top
  },
  pointerAlignment: {
    type: String,
    default: () => jr.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, lU = M5({
  props: aU,
  setup(e) {
    const o = di(!1), r = di(!1), s = xe("feather-tooltip-trigger"), a = xe("feather-tooltip"), u = "data-feather-tooltip";
    F5("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      Vi(c), o.value || (c = bi(T, e.enterDelay));
    }, v = () => {
      Vi(c), c = bi(O, e.exitDelay);
    }, p = (re) => {
      re.keyCode === me.ESCAPE && (re.preventDefault(), O(!0));
    }, w = sg(() => ({
      [u]: s,
      "aria-describedby": a
    })), g = {
      mouseenter: f,
      mouseleave: v,
      focus: f,
      blur: v,
      keydown: p
    }, y = di(document), b = x1(y, () => O(!0));
    U5(() => O(!0));
    const C = () => document.getElementById(a), T = () => {
      r.value = !1, o.value = !0, Bf(() => {
        const re = C();
        ne(re), o.value = !1, Bf(() => {
          r.value = !0, o.value = !0, b.value = !0;
        });
      });
    }, O = (re = !1) => {
      M.value = "", q.value = "", N.value = "", j.value = "", o.value = !1, re && (r.value = !1), b.value = !1;
    }, E = ag(e, "placement"), I = ag(e, "pointerAlignment"), R = 8, P = 24, q = di(""), M = di(""), N = di(""), j = di(""), J = sg(() => j.value ? "p-" + j.value : !1), ne = (re) => {
      const Se = document.querySelector(`[${u}=${s}]`);
      if (!Se) {
        console.log("trigger not found");
        return;
      }
      Bf(() => {
        const Ae = Se.getBoundingClientRect(), ye = re.getBoundingClientRect(), Oe = iU(Ae, ye, E.value, R), ht = sU(Oe, Ae, ye, I.value, P);
        N.value = ht.toString(), j.value = Oe.toString();
        let Yt = 0, qe = 0;
        if ((Oe === Rt.left || Oe === Rt.right) && (Yt = Ae.top + Ae.height / 2 - ye.height / 2, Oe === Rt.left && (qe = Ae.left - ye.width - R), Oe === Rt.right && (qe = Ae.right)), Oe === Rt.top || Oe === Rt.bottom) {
          Yt = Ae.top - ye.height - R, Oe === Rt.bottom && (Yt = Ae.bottom);
          const nt = Ae.left + Ae.width / 2;
          switch (ht) {
            case jr.center:
              qe = nt - ye.width / 2;
              break;
            case jr.left:
              qe = nt - P;
              break;
            case jr.right:
              qe = nt - ye.width + P;
              break;
          }
        }
        q.value = Yt.toString() + "px", M.value = qe.toString() + "px";
      });
    };
    return {
      attrs: w,
      listeners: g,
      show: o,
      animate: r,
      alignmentClass: N,
      placementClass: J,
      top: q,
      left: M,
      tooltipID: a
    };
  },
  components: {
    Pointer: oU
  }
}), uU = ["id"];
function cU(e, o, r, s, a, u) {
  const c = q5("Pointer");
  return wu(), dh(H5, null, [
    (wu(), W5(z5, { to: "body" }, [
      lg(G5, { css: e.animate }, {
        default: Y5(() => [
          e.show ? (wu(), dh("div", {
            key: 0,
            class: j5(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: K5({ left: e.left, top: e.top })
          }, [
            F0("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, Z5(e.title), 9, uU),
            lg(c, { class: "tooltip-pointer" })
          ], 6)) : X5("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    J5(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var ug = /* @__PURE__ */ U0(lU, [["render", cU], ["__scopeId", "data-v-3da6b22e"]]);
const dU = window.Vue.defineComponent, Pf = window.Vue.normalizeStyle, Df = window.Vue.createElementVNode, ga = window.Vue.unref, cg = window.Vue.toHandlers, dg = window.Vue.mergeProps, fg = window.Vue.withCtx, hg = window.Vue.createVNode, fU = window.Vue.renderList, hU = window.Vue.Fragment, $a = window.Vue.openBlock, ya = window.Vue.createElementBlock, pg = window.Vue.normalizeClass, mg = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const pU = { class: "row" }, mU = /* @__PURE__ */ dU({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = (/* @__PURE__ */ new Date()).getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => ($a(), ya("div", pU, [
      Df("div", {
        class: "line-gray",
        style: Pf({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      hg(ga(ug), {
        title: ga(Sr)(e.alarm.firstEventTime)
      }, {
        default: fg(({ attrs: f, on: v }) => [
          Df("div", dg({ class: "circle" }, f, cg(v), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      ($a(!0), ya(hU, null, fU(o.events, (f, v) => ($a(), ya("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[v + 1] ? ($a(), ya("div", {
          key: 0,
          class: pg(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: Pf({
            width: s(f.createTime, o.events[v + 1].createTime) + "px"
          })
        }, null, 6)) : mg("", !0),
        hg(ga(ug), {
          title: ga(Sr)(e.alarm.firstEventTime)
        }, {
          default: fg(({ attrs: p, on: w }) => [
            o.events[v + 1] ? ($a(), ya("div", dg({ key: 0 }, p, cg(w), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : mg("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      Df("div", {
        class: pg(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: Pf({
          width: s(e.events[e.events.length - 1].createTime, ga(r)) + "px"
        })
      }, null, 6)
    ]));
  }
}), vU = /* @__PURE__ */ Le(mU, [["__scopeId", "data-v-6c43a557"]]), wU = window.Vue.openBlock, _U = window.Vue.createElementBlock, q0 = window.Vue.createElementVNode;
var gU = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $U = {}, yU = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bU = /* @__PURE__ */ q0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), VU = /* @__PURE__ */ q0("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), CU = [
  bU,
  VU
];
function EU(e, o) {
  return wU(), _U("svg", yU, CU);
}
var SU = /* @__PURE__ */ gU($U, [["render", EU]]);
const kU = window.Vue.defineComponent, fh = window.Vue.createElementVNode, TU = window.Vue.renderList, vg = window.Vue.Fragment, Mf = window.Vue.openBlock, Ff = window.Vue.createElementBlock, IU = window.Vue.normalizeClass, AU = window.Vue.unref, wg = window.Vue.toDisplayString, xU = window.Vue.pushScopeId, OU = window.Vue.popScopeId, RU = (e) => (xU("data-v-2e087f7b"), e = e(), OU(), e), LU = /* @__PURE__ */ RU(() => /* @__PURE__ */ fh("strong", null, "Events:", -1)), NU = /* @__PURE__ */ kU({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (Mf(), Ff(vg, null, [
      LU,
      (Mf(!0), Ff(vg, null, TU(o.events, (a) => (Mf(), Ff("div", {
        class: "event-description",
        key: a.id
      }, [
        fh("div", {
          class: IU(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        fh("div", null, wg(AU(Sr)(a.createTime)) + " - " + wg(a.source), 1)
      ]))), 128))
    ], 64));
  }
}), BU = /* @__PURE__ */ Le(NU, [["__scopeId", "data-v-2e087f7b"]]), PU = window.Vue.defineComponent, DU = window.Vue.normalizeClass, Tn = window.Vue.createElementVNode, ns = window.Vue.toDisplayString, cn = window.Vue.unref, rs = window.Vue.createVNode, H0 = window.Vue.createTextVNode, MU = window.Vue.renderList, _g = window.Vue.Fragment, Gr = window.Vue.openBlock, fi = window.Vue.createElementBlock, gg = window.Vue.createBlock, lu = window.Vue.createCommentVNode, FU = window.Vue.normalizeStyle, UU = window.Vue.pushScopeId, qU = window.Vue.popScopeId, HU = (e) => (UU("data-v-57b5ddda"), e = e(), qU(), e), WU = { class: "section detail" }, zU = { class: "id" }, GU = {
  key: 0,
  class: "section"
}, YU = /* @__PURE__ */ HU(() => /* @__PURE__ */ Tn("div", { class: "id" }, "Alarms", -1)), jU = { class: "action-btns" }, KU = { class: "zoom" }, ZU = /* @__PURE__ */ H0(" Zoom "), XU = { class: "times" }, JU = {
  key: 0,
  class: "timeline-container"
}, QU = { class: "alarm-id" }, e7 = {
  key: 0,
  class: "panel"
}, Co = window.Vue.ref, t7 = window.Vue.watch, n7 = /* @__PURE__ */ PU({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var P, q;
    const o = e, r = fr(), s = Co(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Co(a[0]), c = Co(o.width), f = Co(o.width), v = Co((/* @__PURE__ */ new Date()).getTime()), p = () => {
      var M, N;
      if (!o.situation.events) {
        const j = (N = (M = o.situation) == null ? void 0 : M.alarms) == null ? void 0 : N.map((J) => J.id);
        r.getEvents(o.situation.id, j);
      }
    };
    p();
    const w = () => (v.value = (/* @__PURE__ */ new Date()).getTime(), c.value / (Number(v.value) - Number(y.value))), g = Co(o.situation.alarms), y = Co(
      ((q = Ge.minBy((P = o.situation) == null ? void 0 : P.alarms, "firstEventTime")) == null ? void 0 : q.firstEventTime) || (/* @__PURE__ */ new Date()).getTime()
    ), b = Co(w());
    t7(o, () => {
      var M, N;
      y.value = ((N = Ge.minBy((M = o.situation) == null ? void 0 : M.alarms, "firstEventTime")) == null ? void 0 : N.firstEventTime) || (/* @__PURE__ */ new Date()).getTime(), p(), c.value = f.value, b.value = w(), g.value = o.situation.alarms, u.value = a[0];
    });
    const C = (M) => {
      if ((M == null ? void 0 : M.id) === 1 && (g.value = o.situation.alarms), (M == null ? void 0 : M.id) === 2) {
        const N = Ge.groupBy(g.value, "severity"), j = [
          ...N.CRITICAL || [],
          ...N.MAJOR || [],
          ...N.MINOR || [],
          ...N.WARNING || [],
          ...N.NORMAL || [],
          ...N.CLEARED || [],
          ...N.INDETERMINATE || []
        ];
        g.value = j.filter((J) => J);
      }
      if ((M == null ? void 0 : M.id) === 3) {
        const N = Ge.reverse(
          Ge.sortBy(
            o.situation.alarms,
            (j) => Number(j.lastEventTime) - Number(j.firstEventTime)
          )
        );
        g.value = N;
      }
    }, T = () => {
      c.value += 100, b.value = w();
    }, O = () => {
      c.value -= 100, b.value = w();
    }, E = () => {
      c.value = f.value, b.value = w();
    }, I = (M) => {
      s.value = M;
    }, R = () => {
      s.value = 0;
    };
    return (M, N) => {
      var j, J;
      return Gr(), fi(_g, null, [
        Tn("div", WU, [
          Tn("div", {
            class: DU(["severity-line", [`${(J = (j = o.situation) == null ? void 0 : j.severity) == null ? void 0 : J.toLowerCase()}-bg dark`]])
          }, null, 2),
          Tn("div", null, [
            Tn("div", zU, "Situation " + ns(o.situation.id), 1),
            Tn("div", null, " Duration: " + ns(cn(Ru)(v.value, new Date(y.value))), 1)
          ])
        ]),
        g.value && g.value.length > 0 ? (Gr(), fi("div", GU, [
          YU,
          Tn("div", jU, [
            rs(cn(T5), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                N[0] || (N[0] = (ne) => u.value = ne),
                C
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            Tn("div", KU, [
              ZU,
              Tn("div", null, [
                rs(cn(te), {
                  icon: cn(D5),
                  class: "zoom-icon",
                  onClick: T
                }, null, 8, ["icon"]),
                rs(cn(te), {
                  icon: cn(Y1),
                  class: "zoom-icon",
                  onClick: E
                }, null, 8, ["icon"]),
                rs(cn(te), {
                  icon: cn(SU),
                  class: "zoom-icon",
                  onClick: O
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Gr(), fi("div", {
            key: 0,
            class: "alarms",
            style: FU({
              width: f.value + 50 + "px"
            })
          }, [
            Tn("div", XU, [
              Tn("div", null, ns(cn(Sr)(y.value)), 1),
              Tn("div", null, ns(cn(Sr)(v.value)), 1)
            ]),
            e.situation.events ? (Gr(), fi("div", JU, [
              (Gr(!0), fi(_g, null, MU(g.value, (ne) => (Gr(), fi("div", {
                class: "timeline",
                key: ne.id
              }, [
                Tn("div", QU, [
                  H0(ns(ne.nodeLabel) + " - " + ns(ne.id) + " ", 1),
                  s.value === ne.id ? (Gr(), gg(cn(te), {
                    key: 0,
                    icon: cn(Wa),
                    class: "zoom-icon expand",
                    onClick: R
                  }, null, 8, ["icon"])) : (Gr(), gg(cn(te), {
                    key: 1,
                    icon: cn(V1),
                    class: "zoom-icon expand",
                    onClick: () => I(ne.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                rs(vU, {
                  alarm: ne,
                  proportion: b.value,
                  "min-start": y.value,
                  events: o.situation.events[ne.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === ne.id ? (Gr(), fi("div", e7, [
                  rs(BU, {
                    events: o.situation.events[ne.id]
                  }, null, 8, ["events"])
                ])) : lu("", !0)
              ]))), 128))
            ])) : lu("", !0)
          ], 4)) : lu("", !0)
        ])) : lu("", !0)
      ], 64);
    };
  }
}), r7 = /* @__PURE__ */ Le(n7, [["__scopeId", "data-v-57b5ddda"]]), o7 = window.Vue.defineComponent, fn = window.Vue.createElementVNode, lr = window.Vue.unref, Gt = window.Vue.createTextVNode, os = window.Vue.withCtx, lt = window.Vue.openBlock, i7 = window.Vue.createBlock, uu = window.Vue.createCommentVNode, Eo = window.Vue.createVNode, dt = window.Vue.createElementBlock, s7 = window.Vue.resolveComponent, hi = window.Vue.toDisplayString, $g = window.Vue.renderList, yg = window.Vue.Fragment, a7 = window.Vue.pushScopeId, l7 = window.Vue.popScopeId, xs = (e) => (a7("data-v-8418d0e3"), e = e(), l7(), e), u7 = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, c7 = { class: "header" }, d7 = /* @__PURE__ */ xs(() => /* @__PURE__ */ fn("h3", null, "AI Suggestions", -1)), f7 = { class: "header-actions" }, h7 = /* @__PURE__ */ Gt(" Re-evaluate "), p7 = /* @__PURE__ */ Gt(" Refresh "), m7 = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, v7 = /* @__PURE__ */ xs(() => /* @__PURE__ */ fn("span", null, "Loading…", -1)), w7 = {
  key: 1,
  class: "state-row",
  "data-test": "ai-reanalyzing"
}, _7 = /* @__PURE__ */ xs(() => /* @__PURE__ */ fn("span", null, "Requesting a fresh analysis…", -1)), g7 = {
  key: 2,
  class: "state-row",
  "data-test": "ai-absent"
}, $7 = {
  key: 0,
  "data-test": "ai-absent-disabled"
}, y7 = /* @__PURE__ */ Gt(" The LLM integration is currently disabled. Enable it on the "), b7 = /* @__PURE__ */ Gt("configuration page"), V7 = /* @__PURE__ */ Gt(" to start generating suggestions for new situations. "), C7 = {
  key: 1,
  "data-test": "ai-absent-no-key"
}, E7 = /* @__PURE__ */ Gt(" No API key is configured. Add one on the "), S7 = /* @__PURE__ */ Gt("configuration page"), k7 = /* @__PURE__ */ Gt(" to enable AI suggestions. "), T7 = {
  key: 2,
  "data-test": "ai-absent-not-yet-run"
}, I7 = /* @__PURE__ */ Gt(" No analysis has run for this situation yet. New situations are analyzed automatically — click "), A7 = /* @__PURE__ */ xs(() => /* @__PURE__ */ fn("strong", null, "Re-evaluate", -1)), x7 = /* @__PURE__ */ Gt(" above to trigger one now. "), O7 = [
  I7,
  A7,
  x7
], R7 = {
  key: 3,
  class: "reanalyze-error",
  "data-test": "ai-reanalyze-error"
}, L7 = {
  key: 3,
  class: "state-row",
  "data-test": "ai-pending"
}, N7 = {
  key: 4,
  class: "state-row failed",
  "data-test": "ai-failed"
}, B7 = { class: "failed-msg" }, P7 = /* @__PURE__ */ Gt(" The last LLM request failed: "), D7 = /* @__PURE__ */ Gt(" Retry "), M7 = {
  key: 5,
  class: "state-row",
  "data-test": "ai-error"
}, F7 = /* @__PURE__ */ Gt(" Could not load suggestions. Please retry. "), U7 = /* @__PURE__ */ Gt("Retry"), q7 = {
  key: 6,
  "data-test": "ai-ready"
}, H7 = {
  key: 0,
  class: "meta"
}, W7 = /* @__PURE__ */ Gt(" Generated by "), z7 = { class: "section" }, G7 = /* @__PURE__ */ xs(() => /* @__PURE__ */ fn("h4", null, "Probable root causes", -1)), Y7 = {
  key: 0,
  "data-test": "ai-root-causes"
}, j7 = {
  key: 1,
  class: "empty"
}, K7 = { class: "section" }, Z7 = /* @__PURE__ */ xs(() => /* @__PURE__ */ fn("h4", null, "Possible resolutions", -1)), X7 = {
  key: 0,
  "data-test": "ai-resolutions"
}, J7 = {
  key: 1,
  class: "empty"
}, Uf = window.Vue.computed, Q7 = window.Vue.onBeforeUnmount, e9 = window.Vue.onMounted, qf = window.Vue.ref, t9 = /* @__PURE__ */ o7({
  __name: "AISuggestionsTab",
  props: {
    situationId: null
  },
  setup(e) {
    const o = e, r = Ci(), s = qf("loading"), a = qf(null), u = qf(null), c = 5e3, f = 300 * 1e3;
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
      const I = await _1(o.situationId);
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
      const I = await mI(o.situationId);
      if (I === !1) {
        s.value = "absent", u.value = "Could not start a new analysis. Make sure LLM is enabled on the configuration page and an API key is saved.", await r.getLLMConfig();
        return;
      }
      a.value = I, s.value = I.status, g();
    };
    e9(async () => {
      r.llmConfig === null && await r.getLLMConfig(), await y(), g();
    }), Q7(() => w());
    const T = Uf(() => {
      var I;
      return (I = a.value) != null && I.requestedAt ? new Date(a.value.requestedAt).toLocaleString() : "";
    }), O = Uf(() => {
      const I = r.llmConfig;
      return !I || !I.enabled ? "disabled" : I.apiKeyPresent ? "not-yet-run" : "no-key";
    }), E = Uf(
      () => {
        var I, R;
        return ((I = r.llmConfig) == null ? void 0 : I.enabled) === !0 && ((R = r.llmConfig) == null ? void 0 : R.apiKeyPresent) === !0;
      }
    );
    return (I, R) => {
      var q;
      const P = s7("router-link");
      return lt(), dt("div", u7, [
        fn("div", c7, [
          d7,
          fn("div", f7, [
            lr(E) ? (lt(), i7(lr(Ee), {
              key: 0,
              primary: "",
              "data-test": "ai-reanalyze",
              disabled: s.value === "reanalyzing" || s.value === "pending",
              onClick: C
            }, {
              default: os(() => [
                h7
              ]),
              _: 1
            }, 8, ["disabled"])) : uu("", !0),
            Eo(lr(Ee), {
              secondary: "",
              "data-test": "ai-refresh",
              onClick: b
            }, {
              default: os(() => [
                p7
              ]),
              _: 1
            })
          ])
        ]),
        s.value === "loading" ? (lt(), dt("div", m7, [
          Eo(lr(ms)),
          v7
        ])) : s.value === "reanalyzing" ? (lt(), dt("div", w7, [
          Eo(lr(ms)),
          _7
        ])) : s.value === "absent" ? (lt(), dt("div", g7, [
          lr(O) === "disabled" ? (lt(), dt("span", $7, [
            y7,
            Eo(P, { to: "/settings" }, {
              default: os(() => [
                b7
              ]),
              _: 1
            }),
            V7
          ])) : lr(O) === "no-key" ? (lt(), dt("span", C7, [
            E7,
            Eo(P, { to: "/settings" }, {
              default: os(() => [
                S7
              ]),
              _: 1
            }),
            k7
          ])) : (lt(), dt("span", T7, O7)),
          u.value ? (lt(), dt("div", R7, hi(u.value), 1)) : uu("", !0)
        ])) : s.value === "pending" ? (lt(), dt("div", L7, [
          Eo(lr(ms)),
          fn("span", null, " Analyzing alarms with the LLM… requested at " + hi(lr(T)) + ". ", 1)
        ])) : s.value === "failed" ? (lt(), dt("div", N7, [
          fn("div", B7, [
            P7,
            fn("code", null, hi(((q = a.value) == null ? void 0 : q.error) || "unknown error"), 1)
          ]),
          Eo(lr(Ee), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: b
          }, {
            default: os(() => [
              D7
            ]),
            _: 1
          })
        ])) : s.value === "error" ? (lt(), dt("div", M7, [
          F7,
          Eo(lr(Ee), {
            secondary: "",
            onClick: b
          }, {
            default: os(() => [
              U7
            ]),
            _: 1
          })
        ])) : s.value === "ready" && a.value ? (lt(), dt("div", q7, [
          a.value.completedAt ? (lt(), dt("div", H7, [
            W7,
            fn("strong", null, hi(a.value.model), 1),
            Gt(" at " + hi(new Date(a.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : uu("", !0),
          fn("div", z7, [
            G7,
            a.value.rootCauses.length ? (lt(), dt("ol", Y7, [
              (lt(!0), dt(yg, null, $g(a.value.rootCauses, (M, N) => (lt(), dt("li", {
                key: `cause-${N}`
              }, hi(M), 1))), 128))
            ])) : (lt(), dt("div", j7, "No root causes returned."))
          ]),
          fn("div", K7, [
            Z7,
            a.value.resolutions.length ? (lt(), dt("ol", X7, [
              (lt(!0), dt(yg, null, $g(a.value.resolutions, (M, N) => (lt(), dt("li", {
                key: `res-${N}`
              }, hi(M), 1))), 128))
            ])) : (lt(), dt("div", J7, "No resolutions returned."))
          ])
        ])) : uu("", !0)
      ]);
    };
  }
}), n9 = /* @__PURE__ */ Le(t9, [["__scopeId", "data-v-8418d0e3"]]), r9 = window.Vue.openBlock, o9 = window.Vue.createElementBlock, i9 = window.Vue.createElementVNode;
var s9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const a9 = {}, l9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, u9 = /* @__PURE__ */ i9("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), c9 = [
  u9
];
function d9(e, o) {
  return r9(), o9("svg", l9, c9);
}
var vs = /* @__PURE__ */ s9(a9, [["render", d9]]);
const W0 = window.Vue.defineComponent, Hf = window.Vue.ref, f9 = window.Vue.toRef, Wf = window.Vue.inject, bg = window.Vue.watch, h9 = window.Vue.nextTick, Vg = window.Vue.openBlock, Cg = window.Vue.createElementBlock, zf = window.Vue.createElementVNode, p9 = window.Vue.normalizeClass, Eg = window.Vue.renderSlot, Sg = window.Vue.createCommentVNode, Gf = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var m9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const v9 = {
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
}, w9 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, _9 = W0({
  emits: w9,
  props: v9,
  setup(e, o) {
    const r = Hf(), s = Hf(!1), a = Hf(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = f9(e, "modelValue"), f = Wf("queueSnackbar", !1), v = Wf("unqueueSnackbar", !1), p = Wf("nextSnackbar", () => {
    }), w = (T, O) => {
      let E, I, R = O;
      const P = () => {
        E && (Vi(E), E = 0, R -= Date.now() - I);
      }, q = () => {
        E || (I = Date.now(), E = bi(T, R));
      };
      return q(), { pause: P, resume: q };
    }, g = () => {
      s.value = !1, o.emit("closed"), p && p();
    }, y = (T) => {
      T.keyCode === me.ESCAPE && (a.value = !1);
    }, b = () => {
      r.value.pause();
    }, C = () => {
      a.value && r.value.resume();
    };
    return bg(c, (T) => {
      T ? h9(() => {
        f === !1 ? a.value = T : f(u, a);
      }) : v === !1 ? a.value = T : v(u);
    }, { immediate: !0 }), bg(a, (T) => {
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
}), g9 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, $9 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, y9 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, b9 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function V9(e, o, r, s, a, u) {
  return e.modelValue || e.contentShow ? (Vg(), Cg("div", g9, [
    zf("div", {
      class: p9(["feather-snackbar", {
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
      zf("div", $9, [
        e.contentShow ? (Vg(), Cg("div", y9, [
          Eg(e.$slots, "default", {}, void 0, !0)
        ])) : Sg("", !0)
      ]),
      zf("div", b9, [
        Eg(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : Sg("", !0);
}
var Ku = /* @__PURE__ */ m9(_9, [["render", V9], ["__scopeId", "data-v-5cf64a62"]]);
const C9 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
W0({
  props: C9,
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
const E9 = window.Vue.defineComponent, st = window.Vue.unref, Ht = window.Vue.createVNode, Ua = window.Vue.createElementVNode, dn = window.Vue.withCtx, pi = window.Vue.openBlock, Yf = window.Vue.createBlock, kg = window.Vue.createCommentVNode, Ga = window.Vue.createTextVNode, cu = window.Vue.createElementBlock, Tg = window.Vue.toDisplayString, S9 = window.Vue.pushScopeId, k9 = window.Vue.popScopeId, Rh = (e) => (S9("data-v-28366268"), e = e(), k9(), e), T9 = { id: "cont" }, I9 = { class: "btns-navigation" }, A9 = /* @__PURE__ */ Rh(() => /* @__PURE__ */ Ua("span", null, "Situation List", -1)), x9 = /* @__PURE__ */ Rh(() => /* @__PURE__ */ Ua("span", null, "Show Previous Situation ", -1)), O9 = /* @__PURE__ */ Rh(() => /* @__PURE__ */ Ua("span", null, "Show Next Situation", -1)), R9 = { key: 1 }, L9 = {
  key: 0,
  class: "detail"
}, N9 = /* @__PURE__ */ Ga("Details"), B9 = /* @__PURE__ */ Ga("Metrics"), P9 = /* @__PURE__ */ Ga("AI Suggestions"), D9 = {
  key: 1,
  class: "noSituation"
}, M9 = /* @__PURE__ */ Ga("dismiss"), mi = window.Vue.ref, Ig = window.Vue.watch, F9 = window.Vue.onMounted, U9 = window.VueRouter.useRoute, q9 = /* @__PURE__ */ E9({
  __name: "SituationDetail",
  setup(e) {
    const o = Bo(), r = U9(), s = parseInt(r.params.id), a = mi(s), u = fr(), c = Gu(), f = mi(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const v = mi(), p = mi(), w = mi(!0), g = mi(
      u.filteredSituations.findIndex((O) => O === a.value)
    ), y = mi(!1);
    Ig(
      () => u.situationDetail,
      () => {
        v.value = u.situationDetail, w.value = !1, u.getUnassignedAlarms();
      }
    ), F9(() => {
      var E;
      const O = ((E = document.getElementById("cont")) == null ? void 0 : E.getBoundingClientRect().width) || 1200;
      p.value = O - 90;
    });
    const b = () => {
      o.push({
        name: Vt.situations
      });
    }, C = (O) => {
      const E = g.value, I = u.filteredSituations[E + O];
      o.push({
        name: Vt.situationDetail,
        params: {
          id: I
        }
      });
    };
    Ig(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), g.value = u.filteredSituations.findIndex((O) => O == a.value);
    }), c.$subscribe((O, E) => {
      y.value = E.showError;
    });
    const T = (O) => {
      f.value = O || 0;
    };
    return (O, E) => (pi(), cu("div", T9, [
      Ua("div", I9, [
        Ht(st(Ee), {
          primary: "",
          onClick: E[0] || (E[0] = () => b())
        }, {
          default: dn(() => [
            Ht(st(te), {
              icon: st(vs),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            A9
          ]),
          _: 1
        }),
        Ua("div", null, [
          Ht(st(Ee), {
            disabled: !st(u).filteredSituations[g.value - 1],
            primary: "",
            onClick: E[1] || (E[1] = () => C(-1))
          }, {
            default: dn(() => [
              Ht(st(te), {
                icon: st(vs),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              x9
            ]),
            _: 1
          }, 8, ["disabled"]),
          Ht(st(Ee), {
            disabled: !st(u).filteredSituations[g.value + 1],
            primary: "",
            onClick: E[2] || (E[2] = () => C(1))
          }, {
            default: dn(() => [
              O9,
              Ht(st(te), {
                icon: st(vs),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      w.value ? (pi(), Yf(st(ms), {
        key: 0,
        class: "spinner"
      })) : (pi(), cu("div", R9, [
        v.value ? (pi(), cu("div", L9, [
          Ht(st(c0), { "onUpdate:modelValue": T }, {
            tabs: dn(() => [
              Ht(st(La), null, {
                default: dn(() => [
                  N9
                ]),
                _: 1
              }),
              Ht(st(La), null, {
                default: dn(() => [
                  B9
                ]),
                _: 1
              }),
              Ht(st(La), { "data-test": "ai-suggestions-tab" }, {
                default: dn(() => [
                  P9
                ]),
                _: 1
              })
            ]),
            default: dn(() => [
              Ht(st(Na), { class: "panel" }, {
                default: dn(() => [
                  Ht(s5, { "situation-info": v.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              Ht(st(Na), { class: "panel" }, {
                default: dn(() => [
                  p.value && f.value == 1 ? (pi(), Yf(r7, {
                    key: 0,
                    situation: v.value,
                    width: p.value
                  }, null, 8, ["situation", "width"])) : kg("", !0)
                ]),
                _: 1
              }),
              Ht(st(Na), { class: "panel" }, {
                default: dn(() => [
                  f.value == 2 ? (pi(), Yf(n9, {
                    key: v.value.id,
                    "situation-id": v.value.id
                  }, null, 8, ["situation-id"])) : kg("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (pi(), cu("div", D9, " Error. The situation " + Tg(st(s)) + " does not exist. ", 1))
      ])),
      Ht(st(Ku), {
        modelValue: y.value,
        "onUpdate:modelValue": E[4] || (E[4] = (I) => y.value = I),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: dn(() => [
          Ht(st(Ee), {
            onClick: E[3] || (E[3] = (I) => y.value = !1),
            text: ""
          }, {
            default: dn(() => [
              M9
            ]),
            _: 1
          })
        ]),
        default: dn(() => [
          Ga(Tg(st(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), H9 = /* @__PURE__ */ Le(q9, [["__scopeId", "data-v-28366268"]]), W9 = window.Vue.defineComponent, xt = window.Vue.unref, Wn = window.Vue.createVNode, nn = window.Vue.createElementVNode, is = window.Vue.withCtx, ss = window.Vue.openBlock, ba = window.Vue.createElementBlock, z9 = window.Vue.createCommentVNode, G9 = window.Vue.toDisplayString, Lh = window.Vue.createTextVNode, Y9 = window.Vue.normalizeClass, j9 = window.Vue.renderList, K9 = window.Vue.Fragment, Z9 = window.Vue.createBlock, X9 = window.Vue.pushScopeId, J9 = window.Vue.popScopeId, Ya = (e) => (X9("data-v-e9ff4c5b"), e = e(), J9(), e), Q9 = { class: "container" }, eq = /* @__PURE__ */ Ya(() => /* @__PURE__ */ nn("span", null, "Situation List", -1)), tq = /* @__PURE__ */ Ya(() => /* @__PURE__ */ nn("h2", null, "New Situation", -1)), nq = { class: "form" }, rq = { class: "fields" }, oq = {
  key: 0,
  class: "errorList"
}, iq = { class: "footer" }, sq = /* @__PURE__ */ Ya(() => /* @__PURE__ */ nn("span", null, "Clear", -1)), aq = /* @__PURE__ */ Ya(() => /* @__PURE__ */ nn("span", null, "Add Situation", -1)), lq = { class: "alarm-column" }, uq = { class: "header-alarms" }, cq = /* @__PURE__ */ Ya(() => /* @__PURE__ */ nn("h3", null, "Add Unassociated Alarms", -1)), dq = /* @__PURE__ */ Lh(" Total Alarms Added: "), fq = { class: "total" }, hq = { class: "list" }, pq = { class: "filters" }, mq = {
  key: 0,
  class: "alarms"
}, vq = /* @__PURE__ */ Lh(" Error on creating new situation :( "), wq = /* @__PURE__ */ Lh("dismiss"), So = window.Vue.ref, _q = window.Vue.watch, gq = /* @__PURE__ */ W9({
  __name: "AddSituation",
  setup(e) {
    const o = Bo(), r = fr(), s = So(), a = So(""), u = So(), c = So(""), f = So([]), v = So(!1), p = So(), w = So(r.unassignedAlarms);
    w.value.length || r.getUnassignedAlarms(), _q(
      () => r.unassignedAlarms,
      () => {
        w.value = r.unassignedAlarms;
      }
    );
    const g = () => {
      o.push({
        name: Vt.situations
      });
    }, y = (E) => {
      v.value = !1, Ge.includes(f.value, E) ? Ge.remove(f.value, (I) => I === E) : f.value.push(E);
    }, b = () => {
      const E = "This field should not be empty";
      let I = !0;
      return s.value || (a.value = E, I = !1), u.value || (c.value = E, I = !1), f.value.length < 2 && (v.value = !0, I = !1), I;
    }, C = async () => {
      if (b()) {
        const E = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: s.value
        };
        await wI(E) ? o.push({
          name: Vt.situations
        }) : p.value = !0;
      }
    }, T = () => {
      s.value = "", u.value = "", f.value = [], w.value = r.unassignedAlarms;
    }, O = (E) => {
      w.value = E;
    };
    return (E, I) => (ss(), ba("div", Q9, [
      Wn(xt(Ee), {
        primary: "",
        onClick: I[0] || (I[0] = () => g()),
        class: "back-btn"
      }, {
        default: is(() => [
          Wn(xt(te), {
            icon: xt(vs),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          eq
        ]),
        _: 1
      }),
      tq,
      nn("div", nq, [
        nn("div", rq, [
          Wn(xt(ku), {
            modelValue: s.value,
            "onUpdate:modelValue": I[1] || (I[1] = (R) => s.value = R),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          Wn(xt(ku), {
            modelValue: u.value,
            "onUpdate:modelValue": I[2] || (I[2] = (R) => u.value = R),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          v.value ? (ss(), ba("div", oq, " You must add at least 2 alarms. ")) : z9("", !0),
          nn("div", iq, [
            Wn(xt(Ee), {
              class: "btn",
              onClick: T
            }, {
              default: is(() => [
                Wn(xt(te), {
                  icon: xt($s),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                sq
              ]),
              _: 1
            }),
            Wn(xt(Ee), {
              class: "btn-add",
              onClick: C
            }, {
              default: is(() => [
                Wn(xt(te), {
                  icon: xt(zu),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                aq
              ]),
              _: 1
            })
          ])
        ]),
        nn("div", lq, [
          nn("div", uq, [
            cq,
            nn("div", null, [
              nn("div", {
                class: Y9(["totalAlarms", { errorList: v.value }])
              }, [
                dq,
                nn("span", fq, G9(xt(f).length), 1)
              ], 2)
            ])
          ]),
          nn("div", hq, [
            nn("div", pq, [
              Wn(Ts, {
                list: xt(r).unassignedAlarms,
                onFilteredList: O,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            w.value.length ? (ss(), ba("div", mq, [
              (ss(!0), ba(K9, null, j9(w.value, (R) => (ss(), ba("div", {
                key: R.id,
                class: "alarm-card"
              }, [
                Wn(Oh, {
                  selected: xt(Ge.includes)(xt(f), R.id),
                  alarm: R,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (ss(), Z9(Is, { key: 1 }))
          ])
        ])
      ]),
      Wn(xt(Ku), {
        modelValue: p.value,
        "onUpdate:modelValue": I[4] || (I[4] = (R) => p.value = R),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: is(() => [
          Wn(xt(Ee), {
            onClick: I[3] || (I[3] = (R) => p.value = !1),
            text: ""
          }, {
            default: is(() => [
              wq
            ]),
            _: 1
          })
        ]),
        default: is(() => [
          vq
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), $q = /* @__PURE__ */ Le(gq, [["__scopeId", "data-v-e9ff4c5b"]]), yq = window.Vue.defineComponent, bq = window.Vue.createElementVNode, Vq = window.Vue.createTextVNode, Cq = window.Vue.unref, Eq = window.Vue.withCtx, Sq = window.Vue.createVNode, kq = window.Vue.Fragment, Tq = window.Vue.openBlock, Iq = window.Vue.createElementBlock, Aq = window.Vue.pushScopeId, xq = window.Vue.popScopeId, Oq = (e) => (Aq("data-v-7c52e38b"), e = e(), xq(), e), Rq = /* @__PURE__ */ Oq(() => /* @__PURE__ */ bq("div", { class: "main" }, "Something bad is happening...", -1)), Lq = /* @__PURE__ */ Vq(" Reload "), Nq = /* @__PURE__ */ yq({
  __name: "ErrorPage",
  setup(e) {
    const o = Bo(), r = () => {
      o.push({ name: Vt.situations });
    };
    return (s, a) => (Tq(), Iq(kq, null, [
      Rq,
      Sq(Cq(Ee), {
        primary: "",
        onClick: r
      }, {
        default: Eq(() => [
          Lq
        ]),
        _: 1
      })
    ], 64));
  }
}), Bq = /* @__PURE__ */ Le(Nq, [["__scopeId", "data-v-7c52e38b"]]), Pq = window.Vue.defineComponent, en = window.Vue.unref, ur = window.Vue.createVNode, Ao = window.Vue.createElementVNode, Va = window.Vue.withCtx, vi = window.Vue.openBlock, Ag = window.Vue.createBlock, Dq = window.Vue.renderList, Mq = window.Vue.Fragment, Ca = window.Vue.createElementBlock, Fq = window.Vue.toDisplayString, z0 = window.Vue.createTextVNode, Uq = window.Vue.pushScopeId, qq = window.Vue.popScopeId, Nh = (e) => (Uq("data-v-543c4501"), e = e(), qq(), e), Hq = { class: "container" }, Wq = { class: "nav-btns" }, zq = /* @__PURE__ */ Nh(() => /* @__PURE__ */ Ao("span", null, "Situation List", -1)), Gq = /* @__PURE__ */ Nh(() => /* @__PURE__ */ Ao("h2", null, "List Unassociated Alarms", -1)), Yq = { class: "content" }, jq = { class: "filters" }, Kq = { class: "list" }, Zq = { class: "action-btns" }, Xq = /* @__PURE__ */ Nh(() => /* @__PURE__ */ Ao("span", null, "Move", -1)), Jq = { key: 1 }, Qq = {
  key: 0,
  class: "alarms"
}, eH = /* @__PURE__ */ z0("dismiss"), ko = window.Vue.ref, tH = window.Vue.watch, nH = window.Vue.markRaw, rH = /* @__PURE__ */ Pq({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = nH({
      ArrowBack: vs,
      ExitToApp: uh
    }), r = Bo(), s = fr();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = ko([]), u = ko([]), c = ko(!1), f = ko(!1), v = ko(""), p = ko(!1), w = ko(!1), g = ko(!0);
    tH(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, g.value = !1;
      }
    );
    const y = (I) => {
      Ge.includes(u.value, I) ? Ge.remove(u.value, (R) => R === I) : u.value.push(I);
    }, b = () => {
      c.value ? u.value = a.value.map((I) => I.id) : u.value = [];
    }, C = async (I) => {
      await $1(I, u.value) ? s.getUnassignedAlarms() : (p.value = !0, w.value = !0, v.value = "Error on moving the alarms :("), f.value = !1;
    }, T = () => {
      r.push({
        name: Vt.situations
      });
    }, O = () => {
      u.value.length ? f.value = !0 : (p.value = !0, w.value = !1, v.value = "You need to choose at least one alarm!");
    }, E = (I) => {
      a.value = I;
    };
    return (I, R) => (vi(), Ca("div", Hq, [
      Ao("div", Wq, [
        ur(en(Ee), {
          primary: "",
          onClick: R[0] || (R[0] = () => T())
        }, {
          default: Va(() => [
            ur(en(te), {
              icon: en(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            zq
          ]),
          _: 1
        }),
        ur(X1)
      ]),
      Gq,
      Ao("div", Yq, [
        Ao("div", jq, [
          ur(Ts, {
            list: en(s).unassignedAlarms,
            onFilteredList: E,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        Ao("div", Kq, [
          Ao("div", Zq, [
            ur(en(yi), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                R[1] || (R[1] = (P) => c.value = P),
                b
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            ur(en(Ee), { onClick: O }, {
              default: Va(() => [
                ur(en(te), {
                  icon: en(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                Xq
              ]),
              _: 1
            })
          ]),
          g.value ? (vi(), Ag(en(ms), {
            key: 0,
            class: "spinner"
          })) : (vi(), Ca("div", Jq, [
            en(a).length ? (vi(), Ca("div", Qq, [
              (vi(!0), Ca(Mq, null, Dq(en(a), (P) => (vi(), Ca("div", {
                key: P.id,
                class: "card"
              }, [
                ur(Oh, {
                  selected: en(Ge.includes)(en(u), P.id),
                  alarm: P,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (vi(), Ag(Is, { key: 1 }))
          ]))
        ])
      ]),
      ur(L0, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: C,
        onDrawerClosed: R[2] || (R[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      ur(en(Ku), {
        modelValue: p.value,
        "onUpdate:modelValue": R[4] || (R[4] = (P) => p.value = P),
        right: "",
        error: w.value,
        timeout: 6e3
      }, {
        button: Va(() => [
          ur(en(Ee), {
            onClick: R[3] || (R[3] = (P) => p.value = !1),
            text: ""
          }, {
            default: Va(() => [
              eH
            ]),
            _: 1
          })
        ]),
        default: Va(() => [
          z0(Fq(v.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
}), oH = /* @__PURE__ */ Le(rH, [["__scopeId", "data-v-543c4501"]]), iH = window.Vue.defineComponent, jf = window.Vue.unref, sH = window.Vue.createVNode, aH = window.Vue.createElementVNode, lH = window.Vue.withCtx, uH = window.Vue.openBlock, cH = window.Vue.createBlock, dH = window.Vue.pushScopeId, fH = window.Vue.popScopeId, hH = (e) => (dH("data-v-b6e7f46c"), e = e(), fH(), e), pH = /* @__PURE__ */ hH(() => /* @__PURE__ */ aH("span", null, "Situation List", -1)), mH = window.Vue.markRaw, vH = /* @__PURE__ */ iH({
  __name: "SituationListBtn",
  setup(e) {
    const o = Bo(), r = mH({
      ArrowBack: vs
    }), s = () => {
      o.push({
        name: Vt.situations
      });
    };
    return (a, u) => (uH(), cH(jf(Ee), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: lH(() => [
        sH(jf(te), {
          icon: jf(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        pH
      ]),
      _: 1
    }));
  }
}), wH = /* @__PURE__ */ Le(vH, [["__scopeId", "data-v-b6e7f46c"]]);
var _H = Object.defineProperty, gH = Object.defineProperties, $H = Object.getOwnPropertyDescriptors, xg = Object.getOwnPropertySymbols, yH = Object.prototype.hasOwnProperty, bH = Object.prototype.propertyIsEnumerable, Og = (e, o, r) => o in e ? _H(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, fs = (e, o) => {
  for (var r in o || (o = {}))
    yH.call(o, r) && Og(e, r, o[r]);
  if (xg)
    for (var r of xg(o))
      bH.call(o, r) && Og(e, r, o[r]);
  return e;
}, VH = (e, o) => gH(e, $H(o));
const CH = window.Vue.defineComponent, Rg = window.Vue.toRef, EH = window.Vue.computed, SH = window.Vue.ref, Lg = window.Vue.resolveComponent, Ng = window.Vue.openBlock, Bg = window.Vue.createElementBlock, Pg = window.Vue.mergeProps, Dg = window.Vue.createVNode, kH = window.Vue.normalizeClass, du = window.Vue.withCtx, Mg = window.Vue.renderSlot, TH = window.Vue.createElementVNode, IH = window.Vue.toHandlers, AH = window.Vue.toDisplayString, xH = window.Vue.createCommentVNode, OH = fs(fs({
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
}, Pu), Es), RH = {
  "update:modelValue": (e) => !0
};
var LH = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const NH = CH({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: RH,
  props: OH,
  setup(e, o) {
    Ss(e), Du(e);
    const r = Rg(e, "id"), s = EH(() => r.value ? r.value : xe("feather-input-label")), a = SH(), { validate: u } = Vs(s, a, e.label, e.schema, Rg(e, "error"));
    return fs({
      inputId: s,
      internalValue: a,
      validate: u
    }, Cs(o.attrs));
  },
  data() {
    return {
      focused: !1
    };
  },
  computed: {
    descriptionId() {
      return xe("feather-input-description");
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
      const e = fs({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), VH(fs(fs({}, e), this.listeners), {
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
    InputSubText: bs,
    InputWrapper: Bu
  }
}), BH = ["maxlength"], PH = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function DH(e, o, r, s, a, u) {
  const c = Lg("InputWrapper"), f = Lg("InputSubText");
  return Ng(), Bg("div", Pg(e.inherittedAttrs, { class: "feather-input-container" }), [
    Dg(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: kH(["feather-input-content", e.contentCls])
    }, {
      pre: du(() => [
        Mg(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: du(() => [
        Mg(e.$slots, "post", {}, void 0, !0)
      ]),
      default: du(() => [
        TH("input", Pg(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, IH(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, BH)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Dg(f, { id: e.descriptionId }, {
      right: du(() => [
        e.maxlength ? (Ng(), Bg("div", PH, AH(e.charCount), 1)) : xH("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var To = /* @__PURE__ */ LH(NH, [["render", DH], ["__scopeId", "data-v-bf37b0d6"]]);
const MH = window.Vue.openBlock, FH = window.Vue.createElementBlock, Bh = window.Vue.createElementVNode;
var UH = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const qH = {}, HH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WH = /* @__PURE__ */ Bh("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), zH = /* @__PURE__ */ Bh("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), GH = /* @__PURE__ */ Bh("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), YH = [
  WH,
  zH,
  GH
];
function jH(e, o) {
  return MH(), FH("svg", HH, YH);
}
var KH = /* @__PURE__ */ UH(qH, [["render", jH]]);
const ZH = window.Vue.openBlock, XH = window.Vue.createElementBlock, G0 = window.Vue.createElementVNode;
var JH = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QH = {}, eW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tW = /* @__PURE__ */ G0("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), nW = /* @__PURE__ */ G0("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), rW = [
  tW,
  nW
];
function oW(e, o) {
  return ZH(), XH("svg", eW, rW);
}
var iW = /* @__PURE__ */ JH(QH, [["render", oW]]);
const Y0 = [
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
], j0 = (e) => {
  const o = (e || "").toLowerCase();
  if (o)
    return Y0.find((r) => r.matches.some((s) => o.includes(s)));
}, sW = () => Y0, aW = (e) => {
  var o;
  return ((o = j0(e)) == null ? void 0 : o.models) ?? [];
}, lW = window.Vue.defineComponent, _e = window.Vue.createVNode, D = window.Vue.createElementVNode, ce = window.Vue.createTextVNode, W = window.Vue.unref, vt = window.Vue.withCtx, et = window.Vue.openBlock, ft = window.Vue.createElementBlock, Wt = window.Vue.createCommentVNode, tt = window.Vue.toDisplayString, Ea = window.Vue.Fragment, Kf = window.Vue.createBlock, Fg = window.Vue.renderList, uW = window.Vue.normalizeClass, cW = window.Vue.pushScopeId, dW = window.Vue.popScopeId, Ue = (e) => (cW("data-v-44b4fabb"), e = e(), dW(), e), fW = { class: "container" }, hW = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("h3", { "data-test": "page-title" }, "ALEC Configuration", -1)), pW = /* @__PURE__ */ ce("Correlation Engine"), mW = /* @__PURE__ */ ce("LLM Root Cause Analysis"), vW = { class: "section" }, wW = { class: "title-row" }, _W = { class: "title" }, gW = /* @__PURE__ */ ce(" Choose the correlation engine that ALEC will use (see "), $W = ["href"], yW = /* @__PURE__ */ ce(" for more information): "), bW = ["aria-expanded"], VW = {
  key: 0,
  class: "help-popover",
  "data-test": "engine-help-popover"
}, CW = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("ul", null, [
  /* @__PURE__ */ D("li", null, [
    /* @__PURE__ */ D("strong", null, "Clustering"),
    /* @__PURE__ */ ce(" — the default engine. It runs the DBSCAN algorithm over recent alarms and groups them into a situation when they are close in both time and network topology. Tune how aggressively it groups with the Correlation variables below. ")
  ]),
  /* @__PURE__ */ D("li", null, [
    /* @__PURE__ */ D("strong", null, "Hellinger distance"),
    /* @__PURE__ */ ce(" — an optional, more refined way for the Clustering engine to measure how far apart two alarms are. Rather than a plain time/topology distance, it compares the statistical distribution of each alarm's surroundings, which helps separate unrelated alarms that merely happen to occur close together. Enable it with the checkbox; it adds two extra tuning variables (Hellinger w and bias). Only the Clustering engine supports it. ")
  ]),
  /* @__PURE__ */ D("li", null, [
    /* @__PURE__ */ D("strong", null, "LLM Based"),
    /* @__PURE__ */ ce(" — a future engine that would let a large language model drive correlation itself (coming soon). This is separate from "),
    /* @__PURE__ */ D("em", null, "LLM Root Cause Analysis"),
    /* @__PURE__ */ ce(" on the other tab, which explains the situations the Clustering engine already builds. ")
  ])
], -1)), EW = [
  CW
], SW = /* @__PURE__ */ ce("Clustering"), kW = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("div", { class: "hellinger" }, [
  /* @__PURE__ */ D("strong", null, "Hellinger distance")
], -1)), TW = /* @__PURE__ */ ce(" LLM Based "), IW = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), AW = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, xW = { class: "title-row" }, OW = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("div", { class: "title" }, "Correlation variables", -1)), RW = ["aria-expanded"], LW = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, NW = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("strong", null, "Alpha (α)", -1)), BW = /* @__PURE__ */ ce(" — overall scaling of inter-alarm distance. Higher α → more conservative clustering (fewer clusters). "), PW = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("strong", null, "Beta (β)", -1)), DW = /* @__PURE__ */ ce(" — weight between time (β) and topology (1−β), in "), MW = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("code", null, "[0, 1]", -1)), FW = /* @__PURE__ */ ce(". Higher β emphasises time proximity; lower β emphasises topology. "), UW = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("strong", null, "Epsilon (ε)", -1)), qW = /* @__PURE__ */ ce(" — DBScan radius. Higher ε clusters more aggressively; lower ε produces smaller, tighter clusters. "), HW = { "data-test": "help-hellinger-w" }, WW = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("strong", null, "Hellinger w", -1)), zW = /* @__PURE__ */ ce(" — variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), GW = { "data-test": "help-hellinger-bias" }, YW = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("strong", null, "Hellinger bias", -1)), jW = /* @__PURE__ */ ce(" — additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), KW = { class: "variables" }, ZW = {
  class: "section",
  "data-test": "llm-section"
}, XW = { class: "title-row" }, JW = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("div", { class: "title" }, "LLM Root Cause Analysis", -1)), QW = ["aria-expanded"], ez = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("div", { class: "llm-help" }, " ALEC can automatically or manually request root cause analysis and a suggested resolution strategy from a large language model (LLM). It works with any OpenAI-compatible, API-enabled LLM — commercial or locally hosted — and does not endorse any particular model. The endpoint, model and API key are stored on the OpenNMS server and apply to all users of this plugin. ", -1)), tz = {
  key: 0,
  class: "help-popover",
  "data-test": "llm-key-help-popover"
}, nz = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("p", { class: "help-intro" }, [
  /* @__PURE__ */ ce(" ALEC sends each new situation to the model you configure and shows the suggested root causes and resolutions on the situation's "),
  /* @__PURE__ */ D("em", null, "AI Suggestions"),
  /* @__PURE__ */ ce(" tab. ")
], -1)), rz = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("ul", null, [
  /* @__PURE__ */ D("li", null, [
    /* @__PURE__ */ ce(" Works with any service that exposes an OpenAI-compatible "),
    /* @__PURE__ */ D("code", null, "/chat/completions"),
    /* @__PURE__ */ ce(" API — a hosted provider (OpenAI, Anthropic, OpenRouter, …) or a local server (LM Studio, Ollama, …). The Endpoint and Model "),
    /* @__PURE__ */ D("em", null, "▾"),
    /* @__PURE__ */ ce(" menus list common choices. ")
  ]),
  /* @__PURE__ */ D("li", null, [
    /* @__PURE__ */ ce(" The model must support "),
    /* @__PURE__ */ D("em", null, "tool/function calling"),
    /* @__PURE__ */ ce(". Use "),
    /* @__PURE__ */ D("em", null, "Validate key"),
    /* @__PURE__ */ ce(" to confirm the endpoint, model and key work before saving. ")
  ]),
  /* @__PURE__ */ D("li", null, " The API key is stored on the OpenNMS server and never shown again. Hosted providers bill per token; local models are free. ")
], -1)), oz = [
  nz,
  rz
], iz = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("strong", null, "LLM Enabled Root Cause Analysis", -1)), sz = /* @__PURE__ */ ce(" Automatically AI Evaluate new situations "), az = {
  key: 1,
  class: "caption",
  "data-test": "llm-no-key-hint"
}, lz = { class: "llm-field-block" }, uz = { class: "llm-field-header" }, cz = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("span", { class: "llm-field-label" }, "Endpoint (OpenAI-compatible base URL)", -1)), dz = { class: "llm-field-actions" }, fz = ["disabled"], hz = /* @__PURE__ */ ce(" Reset to default "), pz = ["disabled"], mz = /* @__PURE__ */ ce(" Set as default "), vz = { class: "llm-combo" }, wz = ["aria-expanded"], _z = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-base-url-menu"
}, gz = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("li", { class: "llm-combo-hint" }, "Common providers — or type your own", -1)), $z = ["onClick"], yz = { class: "llm-combo-item-main" }, bz = { class: "llm-combo-item-sub" }, Vz = { class: "llm-field-block" }, Cz = { class: "llm-field-header" }, Ez = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("span", { class: "llm-field-label" }, "Model", -1)), Sz = { class: "llm-field-actions" }, kz = ["disabled"], Tz = /* @__PURE__ */ ce(" Reset to default "), Iz = ["disabled"], Az = /* @__PURE__ */ ce(" Set as default "), xz = { class: "llm-combo" }, Oz = ["aria-expanded"], Rz = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-model-menu"
}, Lz = { class: "llm-combo-hint" }, Nz = ["onClick"], Bz = { class: "llm-combo-item-main" }, Pz = {
  key: 1,
  class: "llm-combo-hint"
}, Dz = {
  class: "llm-prompt-block",
  "data-test": "llm-prompt-block"
}, Mz = { class: "llm-prompt-header" }, Fz = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("span", { class: "llm-prompt-label" }, "System prompt", -1)), Uz = ["disabled"], qz = /* @__PURE__ */ ce(" Reset to default "), Hz = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("div", { class: "llm-prompt-help" }, " Instructions sent to the model for every analysis. Customize it to add site-specific context (your topology, naming conventions, escalation policy, vendors in use). Leave it as the default, or clear it to fall back to the default. ", -1)), Wz = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("div", {
  class: "llm-key-match-hint",
  "data-test": "llm-key-match-hint"
}, [
  /* @__PURE__ */ ce(" Your API key must come from the same provider as the Endpoint above — an Anthropic key ("),
  /* @__PURE__ */ D("code", null, "sk-ant-…"),
  /* @__PURE__ */ ce(") for "),
  /* @__PURE__ */ D("code", null, "api.anthropic.com"),
  /* @__PURE__ */ ce(" (the default), an OpenRouter key ("),
  /* @__PURE__ */ D("code", null, "sk-or-…"),
  /* @__PURE__ */ ce(") for "),
  /* @__PURE__ */ D("code", null, "openrouter.ai"),
  /* @__PURE__ */ ce(", or an OpenAI key for "),
  /* @__PURE__ */ D("code", null, "api.openai.com"),
  /* @__PURE__ */ ce(". ")
], -1)), zz = { class: "llm-key-row" }, Gz = /* @__PURE__ */ ce(" Clear Key "), Yz = { class: "llm-validate-row" }, jz = {
  key: 0,
  class: "caption",
  "data-test": "llm-validate-hint"
}, Kz = {
  key: 2,
  class: "llm-key-saved",
  "data-test": "llm-key-saved"
}, Zz = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("span", null, " API key on file. The stored key is never sent back to the browser — leave the field blank to keep it, or paste a new one to replace it. ", -1)), Xz = {
  key: 3,
  class: "caption",
  "data-test": "llm-cleared-hint"
}, Jz = {
  key: 4,
  class: "llm-usage",
  "data-test": "llm-usage"
}, Qz = { class: "usage-summary" }, eG = { class: "usage-label" }, tG = ["title"], nG = {
  key: 0,
  class: "usage-details",
  "data-test": "llm-usage-details"
}, rG = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("dt", null, "Input", -1)), oG = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("dt", null, "Output", -1)), iG = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("dt", null, "Cache read", -1)), sG = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("dt", null, "Cache create", -1)), aG = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("dt", null, "Calls", -1)), lG = { class: "muted" }, uG = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("dt", null, "Cache hit", -1)), cG = { class: "action-row" }, dG = /* @__PURE__ */ ce(" Close All Open Situations "), fG = /* @__PURE__ */ ce(" Re-Evaluate All Open Alarms "), hG = /* @__PURE__ */ Ue(() => /* @__PURE__ */ D("span", null, "Save Changes", -1)), pG = /* @__PURE__ */ ce("dismiss"), zn = window.Vue.computed, mG = window.Vue.markRaw, vG = window.Vue.onMounted, wG = window.Vue.onUnmounted, Fe = window.Vue.ref, _G = /* @__PURE__ */ lW({
  __name: "AccountSettings",
  setup(e) {
    var Ln, vn, wn, Qn, er, Ar, xr, Or, hr, pr, _n, jt, eo, Mo, to;
    const o = (le) => le >= 1e6 ? (le / 1e6).toFixed(1) + "M" : le >= 1e3 ? (le / 1e3).toFixed(1) + "K" : String(le), r = mG({
      MarkComplete: Su,
      Help: KH,
      Restore: iW,
      ExpandMore: Wa
    }), s = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, a = Ci(), u = Fe(((Ln = a.engineInfo) == null ? void 0 : Ln.engineName) || Lt.ENGINE_DBSCAN), c = Fe(
      a.engineInfo ? a.engineInfo.distanceMeasureName === Lt.HELLINGER_OPTION : !0
    ), f = Fe(((vn = a.engineInfo) == null ? void 0 : vn.alpha) ?? s.alpha), v = Fe(((wn = a.engineInfo) == null ? void 0 : wn.beta) ?? s.beta), p = Fe(((Qn = a.engineInfo) == null ? void 0 : Qn.epsilon) ?? s.epsilon), w = Fe(
      ((er = a.engineInfo) == null ? void 0 : er.hellingerW) ?? s.hellingerW
    ), g = Fe(
      ((Ar = a.engineInfo) == null ? void 0 : Ar.hellingerBias) ?? s.hellingerBias
    ), y = zn(() => u.value === Lt.ENGINE_DBSCAN), b = zn(() => y.value && c.value), C = Fe(a.llmConfig !== null), T = Fe(((xr = a.llmConfig) == null ? void 0 : xr.enabled) ?? !1), O = Fe(((Or = a.llmConfig) == null ? void 0 : Or.autoEvaluate) ?? !0), E = Fe(((hr = a.llmConfig) == null ? void 0 : hr.baseUrl) ?? ""), I = Fe(((pr = a.llmConfig) == null ? void 0 : pr.model) ?? ""), R = Fe(((_n = a.llmConfig) == null ? void 0 : _n.defaultBaseUrl) ?? ""), P = Fe(((jt = a.llmConfig) == null ? void 0 : jt.defaultModel) ?? ""), q = Fe(((eo = a.llmConfig) == null ? void 0 : eo.systemPrompt) ?? ""), M = Fe(((Mo = a.llmConfig) == null ? void 0 : Mo.defaultSystemPrompt) ?? ""), N = zn(
      () => M.value.length > 0 && q.value.trim() !== M.value.trim()
    ), j = () => {
      q.value = M.value;
    }, J = zn(
      () => R.value.trim().length > 0 && E.value.trim() !== R.value.trim()
    ), ne = zn(
      () => P.value.trim().length > 0 && I.value.trim() !== P.value.trim()
    ), re = zn(
      () => E.value.trim().length > 0 && E.value.trim() !== R.value.trim()
    ), Se = zn(
      () => I.value.trim().length > 0 && I.value.trim() !== P.value.trim()
    ), Ae = () => {
      E.value = R.value;
    }, ye = () => {
      I.value = P.value;
    }, Oe = () => {
      R.value = E.value.trim();
    }, ht = () => {
      P.value = I.value.trim();
    }, Yt = sW(), qe = Fe(!1), nt = Fe(!1), Xr = zn(() => aW(E.value)), A = zn(() => j0(E.value)), X = (le) => {
      E.value = le, qe.value = !1;
    }, se = (le) => {
      I.value = le, nt.value = !1;
    }, Ye = (le) => {
      const Q = le.target;
      (!Q || !Q.closest(".llm-combo")) && (qe.value = !1, nt.value = !1);
    }, be = Fe(""), ge = Fe(((to = a.llmConfig) == null ? void 0 : to.apiKeyPresent) ?? !1), We = Fe(!1), On = Fe(!1), rn = Fe(null), Zn = zn(
      () => be.value.trim().length === 0 && (!ge.value || We.value)
    ), je = async () => {
      rn.value = null, On.value = !0;
      try {
        const le = {
          enabled: T.value,
          autoEvaluate: O.value,
          baseUrl: E.value.trim(),
          model: I.value.trim()
        }, Q = be.value.trim();
        Q.length > 0 && (le.apiKey = Q), rn.value = await pI(le);
      } finally {
        On.value = !1;
      }
    }, Tr = zn(
      () => (!ge.value || We.value) && be.value.trim().length === 0
    ), Pe = zn(
      () => Tr.value || E.value.trim().length === 0 || I.value.trim().length === 0
    ), Po = () => {
      be.value = "", We.value = !0, ge.value = !1, T.value = !1;
    }, ve = Fe(!1), Dt = Fe(!1), Ir = Fe(!1), rt = Fe(!1), Jr = Fe(!1), Qr = Fe(""), mn = Fe(!1);
    vG(async () => {
      if (document.addEventListener("mousedown", Ye), a.llmConfig === null) {
        const le = await a.getLLMConfig();
        le && (C.value = !0, T.value = le.enabled, O.value = le.autoEvaluate, E.value = le.baseUrl || "", I.value = le.model || "", R.value = le.defaultBaseUrl || "", P.value = le.defaultModel || "", M.value = le.defaultSystemPrompt || "", q.value = le.systemPrompt || le.defaultSystemPrompt || "", ge.value = le.apiKeyPresent);
      }
      await a.getLLMUsage(30);
    }), wG(() => {
      document.removeEventListener("mousedown", Ye);
    });
    const Mt = () => {
      f.value = s.alpha, v.value = s.beta, p.value = s.epsilon, w.value = s.hellingerW, g.value = s.hellingerBias;
    }, pt = (le, Q) => {
      Qr.value = le, Jr.value = Q, rt.value = !0;
    }, Rn = () => {
      if (We.value)
        return {
          enabled: !1,
          autoEvaluate: O.value,
          baseUrl: E.value.trim(),
          model: I.value.trim(),
          defaultBaseUrl: R.value.trim(),
          defaultModel: P.value.trim(),
          systemPrompt: q.value,
          clearApiKey: !0
        };
      const le = be.value.trim(), Q = {
        enabled: T.value,
        autoEvaluate: O.value,
        baseUrl: E.value.trim(),
        model: I.value.trim(),
        defaultBaseUrl: R.value.trim(),
        defaultModel: P.value.trim(),
        systemPrompt: q.value
      };
      return le.length > 0 && (Q.apiKey = le), Q;
    }, Xn = async () => {
      var Nn, no, ro, ki, Rr, oo, Lr, io, Ti;
      const le = T.value && !We.value, Q = /\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])/i.test(
        E.value
      );
      if (le && !Q && !window.confirm(
        `LLM Root Cause Analysis is enabled.

ALEC will send each new situation to the configured LLM endpoint (${E.value.trim()}, model ${I.value.trim()}). This calls a third-party provider with your API key and may incur usage charges billed by that provider. You are responsible for any costs on the associated account.

Continue and save?`
      ))
        return;
      const Re = {
        alpha: Number(f.value),
        beta: Number(v.value),
        epsilon: Number(p.value)
      };
      c.value && (Re.hellingerW = Number(w.value), Re.hellingerBias = Number(g.value));
      const ke = await a.setEngineInfo(
        u.value,
        c.value,
        Re
      ), Et = C.value ? await a.setLLMConfig(Rn()) : !0;
      C.value && Et && (be.value = "", We.value = !1, ge.value = ((Nn = a.llmConfig) == null ? void 0 : Nn.apiKeyPresent) ?? !1, T.value = ((no = a.llmConfig) == null ? void 0 : no.enabled) ?? !1, O.value = ((ro = a.llmConfig) == null ? void 0 : ro.autoEvaluate) ?? !0, E.value = ((ki = a.llmConfig) == null ? void 0 : ki.baseUrl) ?? "", I.value = ((Rr = a.llmConfig) == null ? void 0 : Rr.model) ?? "", R.value = ((oo = a.llmConfig) == null ? void 0 : oo.defaultBaseUrl) ?? "", P.value = ((Lr = a.llmConfig) == null ? void 0 : Lr.defaultModel) ?? "", (io = a.llmConfig) != null && io.defaultSystemPrompt && (M.value = a.llmConfig.defaultSystemPrompt), q.value = ((Ti = a.llmConfig) == null ? void 0 : Ti.systemPrompt) ?? q.value, a.getLLMUsage(30)), ke && Et ? (a.getEngineInfo(), pt("The settings were saved!", !1)) : pt(
        ke && !Et ? "Engine settings saved, but the LLM configuration was rejected — enabling the integration requires an endpoint URL, a model and an API key." : "Error on saving the settings",
        !0
      );
    }, Jn = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const le = await _I();
      pt(
        le ? "All open situations were closed." : "Failed to close situations.",
        !le
      );
    }, Do = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const le = await gI();
      pt(
        le ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !le
      );
    };
    return (le, Q) => (et(), ft(Ea, null, [
      _e(wH),
      D("div", fW, [
        hW,
        _e(W(c0), { "data-test": "config-tabs" }, {
          tabs: vt(() => [
            _e(W(La), { "data-test": "tab-engine" }, {
              default: vt(() => [
                pW
              ]),
              _: 1
            }),
            _e(W(La), { "data-test": "tab-llm" }, {
              default: vt(() => [
                mW
              ]),
              _: 1
            })
          ]),
          default: vt(() => [
            _e(W(Na), { class: "config-panel" }, {
              default: vt(() => [
                D("div", vW, [
                  D("div", wW, [
                    D("div", _W, [
                      gW,
                      D("a", {
                        target: "_blank",
                        href: W(Lt).URL_DOCUMENTATION
                      }, "Correlation Engines documentation", 8, $W),
                      yW
                    ]),
                    D("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": Dt.value,
                      "aria-label": "About the correlation engines and Hellinger distance",
                      "data-test": "engine-help",
                      onClick: Q[0] || (Q[0] = (Re) => Dt.value = !Dt.value)
                    }, [
                      _e(W(te), {
                        icon: W(r).Help
                      }, null, 8, ["icon"])
                    ], 8, bW)
                  ]),
                  Dt.value ? (et(), ft("div", VW, EW)) : Wt("", !0),
                  _e(W(G1), {
                    vertical: "",
                    modelValue: u.value,
                    "onUpdate:modelValue": Q[2] || (Q[2] = (Re) => u.value = Re),
                    label: "",
                    hideLabel: ""
                  }, {
                    default: vt(() => [
                      _e(W(ah), {
                        class: "radio-item",
                        value: W(Lt).ENGINE_DBSCAN
                      }, {
                        default: vt(() => [
                          SW
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      _e(W(yi), {
                        modelValue: c.value,
                        "onUpdate:modelValue": Q[1] || (Q[1] = (Re) => c.value = Re),
                        disabled: !W(y),
                        class: "checkbox"
                      }, {
                        default: vt(() => [
                          kW
                        ]),
                        _: 1
                      }, 8, ["modelValue", "disabled"]),
                      _e(W(ah), {
                        class: "radio-item",
                        value: W(Lt).ENGINE_LLM,
                        disabled: "",
                        "data-test": "engine-llm"
                      }, {
                        default: vt(() => [
                          TW
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      IW
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                W(y) ? (et(), ft("div", AW, [
                  D("div", xW, [
                    OW,
                    D("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": ve.value,
                      "aria-label": "Show help for correlation variables",
                      "data-test": "variables-help",
                      onClick: Q[3] || (Q[3] = (Re) => ve.value = !ve.value)
                    }, [
                      _e(W(te), {
                        icon: W(r).Help
                      }, null, 8, ["icon"])
                    ], 8, RW),
                    D("button", {
                      type: "button",
                      class: "icon-btn reset-icon",
                      "aria-label": "Reset correlation variables to defaults",
                      "data-test": "variables-reset",
                      onClick: Mt
                    }, [
                      _e(W(te), {
                        icon: W(r).Restore
                      }, null, 8, ["icon"])
                    ])
                  ]),
                  ve.value ? (et(), ft("div", LW, [
                    D("ul", null, [
                      D("li", null, [
                        NW,
                        BW,
                        D("em", null, "Default: " + tt(s.alpha), 1)
                      ]),
                      D("li", null, [
                        PW,
                        DW,
                        MW,
                        FW,
                        D("em", null, "Default: " + tt(s.beta), 1)
                      ]),
                      D("li", null, [
                        UW,
                        qW,
                        D("em", null, "Default: " + tt(s.epsilon), 1)
                      ]),
                      W(b) ? (et(), ft(Ea, { key: 0 }, [
                        D("li", HW, [
                          WW,
                          zW,
                          D("em", null, "Default: " + tt(s.hellingerW), 1)
                        ]),
                        D("li", GW, [
                          YW,
                          jW,
                          D("em", null, "Default: " + tt(s.hellingerBias), 1)
                        ])
                      ], 64)) : Wt("", !0)
                    ])
                  ])) : Wt("", !0),
                  D("div", KW, [
                    _e(W(To), {
                      modelValue: f.value,
                      "onUpdate:modelValue": Q[4] || (Q[4] = (Re) => f.value = Re),
                      type: "number",
                      label: "Alpha",
                      "data-test": "variable-alpha"
                    }, null, 8, ["modelValue"]),
                    _e(W(To), {
                      modelValue: v.value,
                      "onUpdate:modelValue": Q[5] || (Q[5] = (Re) => v.value = Re),
                      type: "number",
                      label: "Beta",
                      "data-test": "variable-beta"
                    }, null, 8, ["modelValue"]),
                    _e(W(To), {
                      modelValue: p.value,
                      "onUpdate:modelValue": Q[6] || (Q[6] = (Re) => p.value = Re),
                      type: "number",
                      label: "Epsilon",
                      "data-test": "variable-epsilon"
                    }, null, 8, ["modelValue"]),
                    W(b) ? (et(), Kf(W(To), {
                      key: 0,
                      modelValue: w.value,
                      "onUpdate:modelValue": Q[7] || (Q[7] = (Re) => w.value = Re),
                      type: "number",
                      label: "Hellinger w",
                      "data-test": "variable-hellinger-w"
                    }, null, 8, ["modelValue"])) : Wt("", !0),
                    W(b) ? (et(), Kf(W(To), {
                      key: 1,
                      modelValue: g.value,
                      "onUpdate:modelValue": Q[8] || (Q[8] = (Re) => g.value = Re),
                      type: "number",
                      label: "Hellinger bias",
                      "data-test": "variable-hellinger-bias"
                    }, null, 8, ["modelValue"])) : Wt("", !0)
                  ])
                ])) : Wt("", !0)
              ]),
              _: 1
            }),
            _e(W(Na), { class: "config-panel" }, {
              default: vt(() => {
                var Re;
                return [
                  D("div", ZW, [
                    D("div", XW, [
                      JW,
                      D("button", {
                        type: "button",
                        class: "icon-btn help-icon",
                        "aria-expanded": Ir.value,
                        "aria-label": "How to get an API key",
                        "data-test": "llm-key-help",
                        onClick: Q[9] || (Q[9] = (ke) => Ir.value = !Ir.value)
                      }, [
                        _e(W(te), {
                          icon: W(r).Help
                        }, null, 8, ["icon"])
                      ], 8, QW)
                    ]),
                    ez,
                    Ir.value ? (et(), ft("div", tz, oz)) : Wt("", !0),
                    _e(W(yi), {
                      modelValue: T.value,
                      "onUpdate:modelValue": Q[10] || (Q[10] = (ke) => T.value = ke),
                      disabled: W(Pe) && !T.value,
                      class: "checkbox",
                      "data-test": "llm-enabled"
                    }, {
                      default: vt(() => [
                        iz
                      ]),
                      _: 1
                    }, 8, ["modelValue", "disabled"]),
                    _e(W(yi), {
                      modelValue: O.value,
                      "onUpdate:modelValue": Q[11] || (Q[11] = (ke) => O.value = ke),
                      disabled: !T.value,
                      class: "checkbox sub-checkbox",
                      "data-test": "llm-auto-evaluate"
                    }, {
                      default: vt(() => [
                        sz
                      ]),
                      _: 1
                    }, 8, ["modelValue", "disabled"]),
                    W(Pe) ? (et(), ft("div", az, " Enter an endpoint, model and API key to enable. ")) : Wt("", !0),
                    D("div", lz, [
                      D("div", uz, [
                        cz,
                        D("div", dz, [
                          D("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !W(J),
                            "data-test": "llm-base-url-reset",
                            onClick: Ae
                          }, [
                            _e(W(te), {
                              icon: W(r).Restore,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            hz
                          ], 8, fz),
                          D("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !W(re),
                            "data-test": "llm-base-url-set-default",
                            onClick: Oe
                          }, [
                            _e(W(te), {
                              icon: W(r).MarkComplete,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            mz
                          ], 8, pz)
                        ])
                      ]),
                      D("div", vz, [
                        _e(W(To), {
                          modelValue: E.value,
                          "onUpdate:modelValue": Q[12] || (Q[12] = (ke) => E.value = ke),
                          label: "Endpoint (OpenAI-compatible base URL)",
                          hideLabel: "",
                          "data-test": "llm-base-url",
                          class: "llm-combo-input"
                        }, null, 8, ["modelValue"]),
                        D("button", {
                          type: "button",
                          class: "llm-combo-toggle",
                          "aria-expanded": qe.value,
                          "aria-label": "Show endpoint suggestions",
                          "data-test": "llm-base-url-suggest",
                          onClick: Q[13] || (Q[13] = (ke) => qe.value = !qe.value)
                        }, [
                          _e(W(te), {
                            icon: W(r).ExpandMore
                          }, null, 8, ["icon"])
                        ], 8, wz),
                        qe.value ? (et(), ft("ul", _z, [
                          gz,
                          (et(!0), ft(Ea, null, Fg(W(Yt), (ke) => (et(), ft("li", {
                            key: ke.baseUrl,
                            class: "llm-combo-item",
                            onClick: (Et) => X(ke.baseUrl)
                          }, [
                            D("span", yz, tt(ke.name), 1),
                            D("span", bz, [
                              D("code", null, tt(ke.baseUrl), 1),
                              ce(" · " + tt(ke.keyHint), 1)
                            ])
                          ], 8, $z))), 128))
                        ])) : Wt("", !0)
                      ])
                    ]),
                    D("div", Vz, [
                      D("div", Cz, [
                        Ez,
                        D("div", Sz, [
                          D("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !W(ne),
                            "data-test": "llm-model-reset",
                            onClick: ye
                          }, [
                            _e(W(te), {
                              icon: W(r).Restore,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            Tz
                          ], 8, kz),
                          D("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !W(Se),
                            "data-test": "llm-model-set-default",
                            onClick: ht
                          }, [
                            _e(W(te), {
                              icon: W(r).MarkComplete,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            Az
                          ], 8, Iz)
                        ])
                      ]),
                      D("div", xz, [
                        _e(W(To), {
                          modelValue: I.value,
                          "onUpdate:modelValue": Q[14] || (Q[14] = (ke) => I.value = ke),
                          label: "Model",
                          hideLabel: "",
                          "data-test": "llm-model",
                          class: "llm-combo-input"
                        }, null, 8, ["modelValue"]),
                        D("button", {
                          type: "button",
                          class: "llm-combo-toggle",
                          "aria-expanded": nt.value,
                          "aria-label": "Show model suggestions",
                          "data-test": "llm-model-suggest",
                          onClick: Q[15] || (Q[15] = (ke) => nt.value = !nt.value)
                        }, [
                          _e(W(te), {
                            icon: W(r).ExpandMore
                          }, null, 8, ["icon"])
                        ], 8, Oz),
                        nt.value ? (et(), ft("ul", Rz, [
                          W(Xr).length ? (et(), ft(Ea, { key: 0 }, [
                            D("li", Lz, " Suggested for " + tt((Re = W(A)) == null ? void 0 : Re.name) + " — or type your own ", 1),
                            (et(!0), ft(Ea, null, Fg(W(Xr), (ke) => (et(), ft("li", {
                              key: ke.id,
                              class: "llm-combo-item",
                              onClick: (Et) => se(ke.id)
                            }, [
                              D("span", Bz, [
                                D("code", null, tt(ke.id), 1)
                              ])
                            ], 8, Nz))), 128))
                          ], 64)) : (et(), ft("li", Pz, " No preset models for this endpoint — type your model id. For a local server (LM Studio, Ollama) copy it from the server's loaded-model list. "))
                        ])) : Wt("", !0)
                      ])
                    ]),
                    D("div", Dz, [
                      D("div", Mz, [
                        Fz,
                        D("button", {
                          type: "button",
                          class: "llm-prompt-reset",
                          disabled: !W(N),
                          "data-test": "llm-prompt-reset",
                          onClick: j
                        }, [
                          _e(W(te), {
                            icon: W(r).Restore,
                            class: "reset-inline-icon"
                          }, null, 8, ["icon"]),
                          qz
                        ], 8, Uz)
                      ]),
                      Hz,
                      _e(W(ku), {
                        modelValue: q.value,
                        "onUpdate:modelValue": Q[16] || (Q[16] = (ke) => q.value = ke),
                        label: "System prompt",
                        hideLabel: "",
                        rows: "12",
                        "data-test": "llm-system-prompt",
                        class: "llm-prompt-textarea"
                      }, null, 8, ["modelValue"])
                    ]),
                    Wz,
                    D("div", zz, [
                      _e(W(To), {
                        modelValue: be.value,
                        "onUpdate:modelValue": Q[17] || (Q[17] = (ke) => be.value = ke),
                        type: "password",
                        autocomplete: "new-password",
                        label: ge.value && !We.value ? "API key — saved (paste a new key to replace)" : "API key",
                        "data-test": "llm-api-key",
                        class: "llm-key-input"
                      }, null, 8, ["modelValue", "label"]),
                      ge.value && !We.value ? (et(), Kf(W(Ee), {
                        key: 0,
                        secondary: "",
                        "data-test": "llm-clear-key",
                        onClick: Po
                      }, {
                        default: vt(() => [
                          Gz
                        ]),
                        _: 1
                      })) : Wt("", !0)
                    ]),
                    D("div", Yz, [
                      _e(W(Ee), {
                        secondary: "",
                        disabled: On.value || W(Zn),
                        "data-test": "llm-validate-btn",
                        onClick: je
                      }, {
                        default: vt(() => [
                          ce(tt(On.value ? "Validating…" : "Validate key"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      W(Zn) ? (et(), ft("span", jz, " Enter an API key to validate. ")) : rn.value ? (et(), ft("span", {
                        key: 1,
                        class: uW(["llm-validate-result", rn.value.ok ? "is-ok" : "is-error"]),
                        "data-test": "llm-validate-result"
                      }, [
                        _e(W(te), {
                          icon: rn.value.ok ? W(r).MarkComplete : W(r).Help,
                          class: "result-icon"
                        }, null, 8, ["icon"]),
                        ce(" " + tt(rn.value.message), 1)
                      ], 2)) : Wt("", !0)
                    ]),
                    ge.value && !We.value ? (et(), ft("div", Kz, [
                      _e(W(te), {
                        icon: W(r).MarkComplete,
                        class: "saved-icon"
                      }, null, 8, ["icon"]),
                      Zz
                    ])) : Wt("", !0),
                    We.value ? (et(), ft("div", Xz, " Stored API key will be removed on save. ")) : Wt("", !0),
                    W(a).llmUsage ? (et(), ft("div", Jz, [
                      D("div", Qz, [
                        D("span", eG, "Last " + tt(W(a).llmUsage.daysWindow) + " days:", 1),
                        D("span", {
                          class: "usage-tokens",
                          title: `${W(a).llmUsage.totalTokens.toLocaleString()} tokens`,
                          "data-test": "llm-usage-tokens"
                        }, tt(o(W(a).llmUsage.totalTokens)) + " tokens ", 9, tG),
                        D("button", {
                          type: "button",
                          class: "usage-toggle",
                          onClick: Q[18] || (Q[18] = (ke) => mn.value = !mn.value),
                          "data-test": "llm-usage-toggle"
                        }, tt(mn.value ? "hide details" : "show details"), 1)
                      ]),
                      mn.value ? (et(), ft("dl", nG, [
                        D("div", null, [
                          rG,
                          D("dd", null, tt(o(W(a).llmUsage.inputTokens)), 1)
                        ]),
                        D("div", null, [
                          oG,
                          D("dd", null, tt(o(W(a).llmUsage.outputTokens)), 1)
                        ]),
                        D("div", null, [
                          iG,
                          D("dd", null, tt(o(W(a).llmUsage.cacheReadInputTokens)), 1)
                        ]),
                        D("div", null, [
                          sG,
                          D("dd", null, tt(o(W(a).llmUsage.cacheCreationInputTokens)), 1)
                        ]),
                        D("div", null, [
                          aG,
                          D("dd", null, [
                            ce(tt(W(a).llmUsage.calls) + " ", 1),
                            D("span", lG, "(" + tt(W(a).llmUsage.successfulCalls) + " ok / " + tt(W(a).llmUsage.failedCalls) + " failed)", 1)
                          ])
                        ]),
                        D("div", null, [
                          uG,
                          D("dd", null, tt((W(a).llmUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
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
        D("div", cG, [
          _e(W(Ee), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: Jn
          }, {
            default: vt(() => [
              dG
            ]),
            _: 1
          }),
          _e(W(Ee), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: Do
          }, {
            default: vt(() => [
              fG
            ]),
            _: 1
          }),
          _e(W(Ee), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: Xn
          }, {
            default: vt(() => [
              _e(W(te), {
                icon: W(r).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              hG
            ]),
            _: 1
          })
        ]),
        _e(W(Ku), {
          modelValue: rt.value,
          "onUpdate:modelValue": Q[20] || (Q[20] = (Re) => rt.value = Re),
          right: "",
          error: Jr.value,
          timeout: 6e3
        }, {
          button: vt(() => [
            _e(W(Ee), {
              onClick: Q[19] || (Q[19] = (Re) => rt.value = !1),
              text: ""
            }, {
              default: vt(() => [
                pG
              ]),
              _: 1
            })
          ]),
          default: vt(() => [
            ce(tt(Qr.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
}), gG = /* @__PURE__ */ Le(_G, [["__scopeId", "data-v-44b4fabb"]]), $G = window.VueRouter.createRouter, yG = window.VueRouter.createWebHistory, bG = async () => {
  const e = Ci();
  e.userId || await e.getUserRole();
}, K0 = [
  {
    path: "/",
    name: Vt.home,
    beforeEnter: async (e) => {
      const o = window.VRouter || Z0;
      await Ci().getUserRole(), o.push({ name: Vt.situations, params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: Vt.situations,
    beforeEnter: () => bG(),
    component: _D
  },
  {
    path: "/situations/:id",
    name: Vt.situationDetail,
    component: H9
  },
  {
    path: "/situations/add",
    name: Vt.addSituation,
    component: $q
  },
  {
    path: "/error",
    name: Vt.error,
    component: Bq
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: Vt.viewUnassignedAlarms,
    component: oH
  },
  {
    path: "/settings",
    name: Vt.settings,
    beforeEnter: async () => {
      await Ci().getEngineInfo();
    },
    component: gG
  }
], Zf = window.VRouter;
if (Zf) {
  const e = "Plugin-alecUiExtension", o = Zf.hasRoute(e) ? e : "Plugin";
  for (const r of K0) {
    const { path: s, name: a, component: u, beforeEnter: c } = r;
    Zf.addRoute(o, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const Z0 = $G({
  history: yG(),
  routes: K0
}), VG = Z0;
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = nk;
