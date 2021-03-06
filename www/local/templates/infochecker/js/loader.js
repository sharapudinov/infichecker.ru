/*/Scripts/responsive/json3.min.js*/
/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
(function () {
    function N(p, r) {
        function q(a) {
            if (q[a] !== w) return q[a];
            var c;
            if ("bug-string-char-index" == a) c = "a" != "a"[0]; else if ("json" == a) c = q("json-stringify") && q("json-parse"); else {
                var e;
                if ("json-stringify" == a) {
                    c = r.stringify;
                    var b = "function" == typeof c && s;
                    if (b) {
                        (e = function () {
                            return 1
                        }).toJSON = e;
                        try {
                            b = "0" === c(0) && "0" === c(new t) && '""' == c(new A) && c(u) === w && c(w) === w && c() === w && "1" === c(e) && "[1]" == c([e]) && "[null]" == c([w]) && "null" == c(null) && "[null,null,null]" == c([w, u, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' ==
                                c({a: [e, !0, !1, null, "\x00\b\n\f\r\t"]}) && "1" === c(null, e) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new C(-864E13)) && '"+275760-09-13T00:00:00.000Z"' == c(new C(864E13)) && '"-000001-01-01T00:00:00.000Z"' == c(new C(-621987552E5)) && '"1969-12-31T23:59:59.999Z"' == c(new C(-1))
                        } catch (f) {
                            b = !1
                        }
                    }
                    c = b
                }
                if ("json-parse" == a) {
                    c = r.parse;
                    if ("function" == typeof c) try {
                        if (0 === c("0") && !c(!1)) {
                            e = c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var n = 5 == e.a.length && 1 === e.a[0];
                            if (n) {
                                try {
                                    n = !c('"\t"')
                                } catch (d) {
                                }
                                if (n) try {
                                    n =
                                        1 !== c("01")
                                } catch (g) {
                                }
                                if (n) try {
                                    n = 1 !== c("1.")
                                } catch (m) {
                                }
                            }
                        }
                    } catch (X) {
                        n = !1
                    }
                    c = n
                }
            }
            return q[a] = !!c
        }

        p || (p = k.Object());
        r || (r = k.Object());
        var t = p.Number || k.Number, A = p.String || k.String, H = p.Object || k.Object, C = p.Date || k.Date,
            G = p.SyntaxError || k.SyntaxError, K = p.TypeError || k.TypeError, L = p.Math || k.Math,
            I = p.JSON || k.JSON;
        "object" == typeof I && I && (r.stringify = I.stringify, r.parse = I.parse);
        var H = H.prototype, u = H.toString, v, B, w, s = new C(-0xc782b5b800cec);
        try {
            s = -109252 == s.getUTCFullYear() && 0 === s.getUTCMonth() && 1 === s.getUTCDate() &&
                10 == s.getUTCHours() && 37 == s.getUTCMinutes() && 6 == s.getUTCSeconds() && 708 == s.getUTCMilliseconds()
        } catch (Q) {
        }
        if (!q("json")) {
            var D = q("bug-string-char-index");
            if (!s) var x = L.floor, M = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], E = function (a, c) {
                return M[c] + 365 * (a - 1970) + x((a - 1969 + (c = +(1 < c))) / 4) - x((a - 1901 + c) / 100) + x((a - 1601 + c) / 400)
            };
            (v = H.hasOwnProperty) || (v = function (a) {
                var c = {}, e;
                (c.__proto__ = null, c.__proto__ = {toString: 1}, c).toString != u ? v = function (a) {
                    var c = this.__proto__;
                    a = a in (this.__proto__ = null, this);
                    this.__proto__ =
                        c;
                    return a
                } : (e = c.constructor, v = function (a) {
                    var c = (this.constructor || e).prototype;
                    return a in this && !(a in c && this[a] === c[a])
                });
                c = null;
                return v.call(this, a)
            });
            B = function (a, c) {
                var e = 0, b, f, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                f = new b;
                for (n in f) v.call(f, n) && e++;
                b = f = null;
                e ? B = 2 == e ? function (a, c) {
                    var e = {}, b = "[object Function]" == u.call(a), f;
                    for (f in a) b && "prototype" == f || v.call(e, f) || !(e[f] = 1) || !v.call(a, f) || c(f)
                } : function (a, c) {
                    var e = "[object Function]" == u.call(a), b, f;
                    for (b in a) e && "prototype" ==
                    b || !v.call(a, b) || (f = "constructor" === b) || c(b);
                    (f || v.call(a, b = "constructor")) && c(b)
                } : (f = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), B = function (a, c) {
                    var e = "[object Function]" == u.call(a), b,
                        h = !e && "function" != typeof a.constructor && F[typeof a.hasOwnProperty] && a.hasOwnProperty || v;
                    for (b in a) e && "prototype" == b || !h.call(a, b) || c(b);
                    for (e = f.length; b = f[--e]; h.call(a, b) && c(b)) ;
                });
                return B(a, c)
            };
            if (!q("json-stringify")) {
                var U = {
                    92: "\\\\", 34: '\\"', 8: "\\b",
                    12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"
                }, y = function (a, c) {
                    return ("000000" + (c || 0)).slice(-a)
                }, R = function (a) {
                    for (var c = '"', b = 0, h = a.length, f = !D || 10 < h, n = f && (D ? a.split("") : a); b < h; b++) {
                        var d = a.charCodeAt(b);
                        switch (d) {
                            case 8:
                            case 9:
                            case 10:
                            case 12:
                            case 13:
                            case 34:
                            case 92:
                                c += U[d];
                                break;
                            default:
                                if (32 > d) {
                                    c += "\\u00" + y(2, d.toString(16));
                                    break
                                }
                                c += f ? n[b] : a.charAt(b)
                        }
                    }
                    return c + '"'
                }, O = function (a, c, b, h, f, n, d) {
                    var g, m, k, l, p, r, s, t, q;
                    try {
                        g = c[a]
                    } catch (z) {
                    }
                    if ("object" == typeof g && g) if (m = u.call(g), "[object Date]" != m || v.call(g,
                            "toJSON")) "function" == typeof g.toJSON && ("[object Number]" != m && "[object String]" != m && "[object Array]" != m || v.call(g, "toJSON")) && (g = g.toJSON(a)); else if (g > -1 / 0 && g < 1 / 0) {
                        if (E) {
                            l = x(g / 864E5);
                            for (m = x(l / 365.2425) + 1970 - 1; E(m + 1, 0) <= l; m++) ;
                            for (k = x((l - E(m, 0)) / 30.42); E(m, k + 1) <= l; k++) ;
                            l = 1 + l - E(m, k);
                            p = (g % 864E5 + 864E5) % 864E5;
                            r = x(p / 36E5) % 24;
                            s = x(p / 6E4) % 60;
                            t = x(p / 1E3) % 60;
                            p %= 1E3
                        } else m = g.getUTCFullYear(), k = g.getUTCMonth(), l = g.getUTCDate(), r = g.getUTCHours(), s = g.getUTCMinutes(), t = g.getUTCSeconds(), p = g.getUTCMilliseconds();
                        g = (0 >= m || 1E4 <= m ? (0 > m ? "-" : "+") + y(6, 0 > m ? -m : m) : y(4, m)) + "-" + y(2, k + 1) + "-" + y(2, l) + "T" + y(2, r) + ":" + y(2, s) + ":" + y(2, t) + "." + y(3, p) + "Z"
                    } else g = null;
                    b && (g = b.call(c, a, g));
                    if (null === g) return "null";
                    m = u.call(g);
                    if ("[object Boolean]" == m) return "" + g;
                    if ("[object Number]" == m) return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                    if ("[object String]" == m) return R("" + g);
                    if ("object" == typeof g) {
                        for (a = d.length; a--;) if (d[a] === g) throw K();
                        d.push(g);
                        q = [];
                        c = n;
                        n += f;
                        if ("[object Array]" == m) {
                            k = 0;
                            for (a = g.length; k < a; k++) m = O(k, g, b, h, f, n, d), q.push(m === w ? "null" :
                                m);
                            a = q.length ? f ? "[\n" + n + q.join(",\n" + n) + "\n" + c + "]" : "[" + q.join(",") + "]" : "[]"
                        } else B(h || g, function (a) {
                            var c = O(a, g, b, h, f, n, d);
                            c !== w && q.push(R(a) + ":" + (f ? " " : "") + c)
                        }), a = q.length ? f ? "{\n" + n + q.join(",\n" + n) + "\n" + c + "}" : "{" + q.join(",") + "}" : "{}";
                        d.pop();
                        return a
                    }
                };
                r.stringify = function (a, c, b) {
                    var h, f, n, d;
                    if (F[typeof c] && c) if ("[object Function]" == (d = u.call(c))) f = c; else if ("[object Array]" == d) {
                        n = {};
                        for (var g = 0, k = c.length, l; g < k; l = c[g++], (d = u.call(l), "[object String]" == d || "[object Number]" == d) && (n[l] = 1)) ;
                    }
                    if (b) if ("[object Number]" ==
                        (d = u.call(b))) {
                        if (0 < (b -= b % 1)) for (h = "", 10 < b && (b = 10); h.length < b; h += " ") ;
                    } else "[object String]" == d && (h = 10 >= b.length ? b : b.slice(0, 10));
                    return O("", (l = {}, l[""] = a, l), f, n, h, "", [])
                }
            }
            if (!q("json-parse")) {
                var V = A.fromCharCode,
                    W = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, b, J,
                    l = function () {
                        b = J = null;
                        throw G();
                    }, z = function () {
                        for (var a = J, c = a.length, e, h, f, k, d; b < c;) switch (d = a.charCodeAt(b), d) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                b++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                return e =
                                    D ? a.charAt(b) : a[b], b++, e;
                            case 34:
                                e = "@";
                                for (b++; b < c;) if (d = a.charCodeAt(b), 32 > d) l(); else if (92 == d) switch (d = a.charCodeAt(++b), d) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        e += W[d];
                                        b++;
                                        break;
                                    case 117:
                                        h = ++b;
                                        for (f = b + 4; b < f; b++) d = a.charCodeAt(b), 48 <= d && 57 >= d || 97 <= d && 102 >= d || 65 <= d && 70 >= d || l();
                                        e += V("0x" + a.slice(h, b));
                                        break;
                                    default:
                                        l()
                                } else {
                                    if (34 == d) break;
                                    d = a.charCodeAt(b);
                                    for (h = b; 32 <= d && 92 != d && 34 != d;) d = a.charCodeAt(++b);
                                    e += a.slice(h, b)
                                }
                                if (34 == a.charCodeAt(b)) return b++, e;
                                l();
                            default:
                                h =
                                    b;
                                45 == d && (k = !0, d = a.charCodeAt(++b));
                                if (48 <= d && 57 >= d) {
                                    for (48 == d && (d = a.charCodeAt(b + 1), 48 <= d && 57 >= d) && l(); b < c && (d = a.charCodeAt(b), 48 <= d && 57 >= d); b++) ;
                                    if (46 == a.charCodeAt(b)) {
                                        for (f = ++b; f < c && (d = a.charCodeAt(f), 48 <= d && 57 >= d); f++) ;
                                        f == b && l();
                                        b = f
                                    }
                                    d = a.charCodeAt(b);
                                    if (101 == d || 69 == d) {
                                        d = a.charCodeAt(++b);
                                        43 != d && 45 != d || b++;
                                        for (f = b; f < c && (d = a.charCodeAt(f), 48 <= d && 57 >= d); f++) ;
                                        f == b && l();
                                        b = f
                                    }
                                    return +a.slice(h, b)
                                }
                                k && l();
                                if ("true" == a.slice(b, b + 4)) return b += 4, !0;
                                if ("false" == a.slice(b, b + 5)) return b += 5, !1;
                                if ("null" == a.slice(b,
                                        b + 4)) return b += 4, null;
                                l()
                        }
                        return "$"
                    }, P = function (a) {
                        var c, b;
                        "$" == a && l();
                        if ("string" == typeof a) {
                            if ("@" == (D ? a.charAt(0) : a[0])) return a.slice(1);
                            if ("[" == a) {
                                for (c = []; ; b || (b = !0)) {
                                    a = z();
                                    if ("]" == a) break;
                                    b && ("," == a ? (a = z(), "]" == a && l()) : l());
                                    "," == a && l();
                                    c.push(P(a))
                                }
                                return c
                            }
                            if ("{" == a) {
                                for (c = {}; ; b || (b = !0)) {
                                    a = z();
                                    if ("}" == a) break;
                                    b && ("," == a ? (a = z(), "}" == a && l()) : l());
                                    "," != a && "string" == typeof a && "@" == (D ? a.charAt(0) : a[0]) && ":" == z() || l();
                                    c[a.slice(1)] = P(z())
                                }
                                return c
                            }
                            l()
                        }
                        return a
                    }, T = function (a, b, e) {
                        e = S(a, b, e);
                        e ===
                        w ? delete a[b] : a[b] = e
                    }, S = function (a, b, e) {
                        var h = a[b], f;
                        if ("object" == typeof h && h) if ("[object Array]" == u.call(h)) for (f = h.length; f--;) T(h, f, e); else B(h, function (a) {
                            T(h, a, e)
                        });
                        return e.call(a, b, h)
                    };
                r.parse = function (a, c) {
                    var e, h;
                    b = 0;
                    J = "" + a;
                    e = P(z());
                    "$" != z() && l();
                    b = J = null;
                    return c && "[object Function]" == u.call(c) ? S((h = {}, h[""] = e, h), "", c) : e
                }
            }
        }
        r.runInContext = N;
        return r
    }

    var K = typeof define === "function" && define.amd, F = {"function": !0, object: !0},
        G = F[typeof exports] && exports && !exports.nodeType && exports, k = F[typeof window] &&
        window || this, t = G && F[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    !t || t.global !== t && t.window !== t && t.self !== t || (k = t);
    if (G && !K) N(k, G); else {
        var L = k.JSON, Q = k.JSON3, M = !1, A = N(k, k.JSON3 = {
            noConflict: function () {
                M || (M = !0, k.JSON = L, k.JSON3 = Q, L = Q = null);
                return A
            }
        });
        k.JSON = {parse: A.parse, stringify: A.stringify}
    }
    K && define(function () {
        return A
    })
}).call(this);
/*/Scripts/responsive/dollardom.min.js*/
/**
 * $dom library (v0.9.2b) copyright 2009, 2010, 2011 Keith Clark
 * Licensed under the MIT License.
 * http://www.keithclark.co.uk/
 *
 * Copyright 2011, 2012 Julien Wajsberg
 * Licensed under the MIT License
 * https://github.com/julienw/dollardom
 * @preserve
 */
!function (t) {
    function e(t, e, r) {
        var i = n(e), o = P[i];
        return o && o.set ? o.set(t, r) : t.style[i] = r
    }

    function n(t) {
        return O[t] || (O[t] = t.replace($, function (t, e) {
            return e.toUpperCase()
        }))
    }

    function r(t, n, r) {
        if (r === A) {
            if ("string" == typeof n) return R(t, n) || 0;
            for (var i in n) e(t, i, n[i])
        } else e(t, n, r)
    }

    function i(t) {
        var e, n = [];
        if ("string" == typeof t) for (; t && (e = t.match(I), "" !== e[0]);) n.push({
            rel: e[1],
            uTag: (e[2] || "").toUpperCase(),
            id: e[3],
            classes: e[4] ? e[4].split(".") : A
        }), t = t.substring(e[0].length);
        return n
    }

    function o(t, e) {
        for (; (t = t.parentNode) && t !== e;) ;
        return null !== t
    }

    function u(t, e) {
        function n(t, e) {
            var n,
                i = e.id ? (n = (t && t.ownerDocument || W).getElementById(e.id)) && o(n, t) ? [n] : [] : r(t.getElementsByTagName(e.uTag || "*"));
            if (n = i.length, n > 0 && (e.id || e.classes)) for (; n--;) a(i[n], e) || i.splice(n, 1);
            return i
        }

        function r(t) {
            try {
                return Array.prototype.slice.call(t)
            } catch (e) {
                for (var n = [], r = 0, i = t.length; i > r; r++) n.push(t[r]);
                return n
            }
        }

        function u(t) {
            for (var e = m.length; e--;) if (m[e] === t) return F;
            return H
        }

        var l, c, f, s, d, g, h, v, p, m = [], y = [t], E = i(e);
        for (E.length || (E = [{}]), l = 0, c = E.length; c > l; l++) {
            for (h = E[l], f = 0, s = y.length; s > f; f++) switch (v = y[f], h.rel) {
                case ">":
                    var b = v.childNodes;
                    for (d = 0, g = b.length; g > d; d++) a(b[d], h) && m.push(b[d]);
                    break;
                case "~":
                    for (; v = v.nextSibling;) if (a(v, h)) {
                        if (u(v)) break;
                        m.push(v)
                    }
                    break;
                case "+":
                    for (; (v = v.nextSibling) && 1 !== v.nodeType;) ;
                    v && a(v, h) && m.push(v);
                    break;
                default:
                    if (p = n(v, h), l > 0) for (d = 0, g = p.length; g > d; d++) u(p[d]) || m.push(p[d]); else m = m.concat(p)
            }
            if (!m.length) return [];
            y = m.splice(0, m.length)
        }
        return y
    }

    function a(t, e) {
        if (!e) return !0;
        var n = e.uTag, r = e.id, i = e.classes;
        return !(1 !== t.nodeType || n && n !== t.tagName || r && r !== t.id || i && !s(t, i))
    }

    function l(t, e, n) {
        for (n = i(n)[0]; t && !a(t, n) && (t = t[e]);) ;
        return t
    }

    function c(t, e) {
        return e = i(e)[0], t && a(t, e)
    }

    function f(t, e, n) {
        return l(t[e], e, n)
    }

    function s(t, e) {
        if ("" === t.className) return H;
        for (var n = 0; n < e.length; n++) if (!C(t, e[n])) return H;
        return F
    }

    function d() {
        function e() {
            if (!r) {
                r = !0, i && (i = t.clearTimeout(i));
                for (var e = 0, n = j.length; n > e; e++) j[e]()
            }
        }

        function n() {
            try {
                B.doScroll("left")
            } catch (r) {
                return void t.setTimeout(n, 20)
            }
            e()
        }

        var r, i;
        if (W.addEventListener) W.addEventListener("DOMContentLoaded", e, H), W.addEventListener("load", e, H); else if (W.attachEvent) {
            W.attachEvent("onload", e);
            var o = !1;
            try {
                o = null === t.frameElement
            } catch (u) {
            }
            o && B.doScroll && n()
        }
    }

    function g(t, e) {
        var n = i(t)[0], r = n.uTag;
        if (!r) return null;
        var o = (e || W).createElement(r), u = n.id, a = n.classes;
        return u && (o.id = u), a && (o.className = a.join(" ")), o
    }

    function h(e) {
        /loaded|complete|interactive/.test(W.readyState) ? t.setTimeout(e, 0) : j.push(e)
    }

    function v(t, e) {
        return u(e || B, t)
    }

    function p(t, e) {
        return f(t, "parentNode", e)
    }

    function m(t, e) {
        return f(t, "nextSibling", e)
    }

    function y(t, e) {
        return f(t, "previousSibling", e)
    }

    function E(t, e) {
        return t = t.parentNode.firstChild, l(t, "nextSibling", e)
    }

    function b(t, e) {
        return t = t.parentNode.lastChild, l(t, "previousSibling", e)
    }

    function C(t, e) {
        return (" " + t.className + " ").indexOf(" " + e + " ") > -1
    }

    function N(t, e) {
        C(t, e) || (t.className += " " + e)
    }

    function w(t, e) {
        C(t, e) && (t.className = t.className.replace(RegExp("(^|\\s)" + e + "(\\s|$)"), " ").replace(/\s$/, ""))
    }

    function S(t, e, n) {
        (n ? N : w)(t, e)
    }

    function T(t) {
        return W.createTextNode(t)
    }

    function x(t, e, n) {
        t.setAttribute(e, "" + n)
    }

    function L(t, e) {
        return t.getAttribute(e) || null
    }

    function D(t, e, n) {
        if ("object" != typeof e) return n === A ? L(t, e) : void x(t, e, n);
        for (var r in e) x(t, r, e[r])
    }

    function V(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function k(t, e) {
        e || (e = t, t = this);
        for (var n in e) t[n] = e[n]
    }

    var A, W = t.document, B = W.documentElement, F = !0, H = !1,
        I = /^\s*([>+~])?\s*([*\w-]+)?(?:#([\w-]+))?(?:\.([\w.-]+))?\s*/, $ = /-(\w)/g, j = [], q = [],
        O = {"float": "cssFloat" in B.style ? "cssFloat" : "styleFloat"}, P = {
            borderWidth: {
                get: function (t) {
                    return R(t, "border-left-width")
                }
            }, padding: {
                get: function (t) {
                    return R(t, "padding-left")
                }
            }, margin: {
                get: function (t) {
                    return R(t, "margin-left")
                }
            }
        };
    !("opacity" in B.style) && "filters" in B && (P.opacity = {
        set: function (t, e) {
            var n = t.filters.alpha;
            n ? n.opacity = 100 * e : t.style.filter += " Alpha(opacity=" + 100 * e + ")"
        }, get: function (t) {
            var e = t.filters.alpha;
            return e ? e.opacity / 100 : 1
        }
    }), "clientWidth" in B && (P.width = {
        get: function (t) {
            return t.style.width || t.clientWidth || t.offsetWidth
        }
    }), "clientHeight" in B && (P.height = {
        get: function (t) {
            return t.style.height || t.clientHeight || t.offsetHeight
        }
    });
    var U = t.addEventListener ? function (t, e, n) {
        t.addEventListener(e, n, !1)
    } : function (e, n, r) {
        var i = e.uniqueID + n + r;
        q[i] = function () {
            var n = t.event;
            return n.target = n.srcElement || W, n.currentTarget = e, n.preventDefault = function () {
                n.returnValue = !1
            }, n.stopPropagation = function () {
                n.cancelBubble = !0
            }, r.call(e, n)
        }, e.attachEvent("on" + n, q[i])
    }, M = t.removeEventListener ? function (t, e, n) {
        t.removeEventListener(e, n, !1)
    } : function (t, e, n) {
        var r = t.uniqueID + e + n;
        t.detachEvent("on" + e, q[r]), delete q[r]
    }, R = W.defaultView && W.defaultView.getComputedStyle ? function (t, e) {
        var r = n(e), i = P[r];
        return i && i.get ? i.get(t) : t.ownerDocument.defaultView.getComputedStyle(t, null).getPropertyValue(e)
    } : function (t, e) {
        var r = n(e), i = P[r];
        return i && i.get ? i.get(t) : t.currentStyle[r]
    }, z = {
        create: g,
        onready: h,
        addEvent: U,
        removeEvent: M,
        get: v,
        descendants: u,
        ancestor: p,
        next: m,
        previous: y,
        first: E,
        last: b,
        empty: V,
        is: c,
        text: T,
        attr: D,
        hasClass: C,
        addClass: N,
        removeClass: w,
        toggleClass: S,
        style: r,
        extend: k
    };
    t.$dom = z, d()
}(this);

/*/Scripts/responsive/loader/loader-utils.js*/
function handleResponse(n, t, i) {
    if (typeof t != "function") throw"ajax" + i + ": cbready must be a function!";
    n.onreadystatechange = function () {
        this.readyState === 4 && (this.status === 200 ? t(parseResponse(this)) : t(null))
    }
}

function parseResponse(n) {
    var t = n.getResponseHeader("Content-Type");
    if (t && /application\/json/.test(t)) try {
        return JSON.parse(n.responseText)
    } catch (i) {
        return n.responseText
    } else return n.responseText
}

function parseData(n) {
    function r(n, t, i) {
        function e(n, t) {
            return o + "=" + (t ? encodeURIComponent(n) : n)
        }

        var o = i ? n : encodeURIComponent(n), f = "", s, u;
        switch (typeof t) {
            case"boolean":
                f = e(t ? "1" : "0");
                break;
            case"undefined":
                f = e("0");
                break;
            case"number":
                f = e(t);
                break;
            case"string":
                f = e(t, !0);
                break;
            case"object":
                if (t) {
                    if (s = [], Array.isArray(t)) for (u = 0; u < t.length; u++) s.push(r(o + "%5B" + u + "%5D", t[u], !0)); else for (u in t) t.hasOwnProperty(u) && t.push(r(o + "%5B" + encodeURIComponent(u) + "%5D", t[u], !0));
                    f = t.join("&")
                } else f = e("0")
        }
        return f
    }

    var u, t, i;
    if (typeof FormData != "undefined" && n instanceof FormData) return n;
    u = 0;
    t = "";
    for (i in n) n.hasOwnProperty(i) && (u++ > 0 && (t += "&"), t += r(i, n[i]));
    return t
}

var renderExternalContent, RFE, MutationObserver, eventListenerSupported;
renderExternalContent = function (n, t) {
    var u = $dom.get(".external-content-placeholder")[0], i = document.createElement("iframe"), r = RFE.getURLParams(n),
        e, f;
    r.enablejsapi && r.enablejsapi != 0 || (n = n + (n.indexOf("?") > -1 ? "&" : "?") + "enablejsapi=1");
    RFE.isMobile.iPhone() && (!r.playsinline || r.playsinline == 0) && (n = n + "&playsinline=1");
    n.indexOf("youtube.com") > -1 && (r.rel && r.rel != 0 || (n = n + (n.indexOf("?") > -1 ? "&" : "?") + "rel=0"), i.setAttribute("id", "player" + Math.floor(Math.random() * 1e4)));
    i.setAttribute("src", n);
    i.style.width = "100%";
    i.style.height = r.type == "audio" ? "113px" : Math.round(u.offsetWidth * 9 / 16) + 3 + "px";
    i.setAttribute("frameborder", "0");
    i.setAttribute("scrolling", "no");
    i.style.overflow = "hidden";
    i.setAttribute("allowfullscreen", "allowfullscreen");
    e = t ? t : n;
    f = document.createElement("a");
    f.setAttribute("href", e);
    f.setAttribute("target", "_blank");
    f.innerHTML = e;
    u.appendChild(i);
    $dom.addClass(u, "external-content-rendered");
    $dom.removeClass(u, "external-content-placeholder");
    window.addEventListener("resize", function () {
        i.style.height = r.type == "audio" ? "113px" : Math.round(u.offsetWidth * 9 / 16) + 3 + "px"
    })
};
RFE = {};
window.onpopstate = function (n) {
    n.state && (location.href = location.href)
};
RFE.getResponsiveState = function () {
    return $dom.style($dom.get(".responsive-indicator > .visible-xs-block")[0], "display") === "block" ? "xs" : $dom.style($dom.get(".responsive-indicator > .visible-sm-block")[0], "display") === "block" ? "sm" : $dom.style($dom.get(".responsive-indicator > .visible-md-block")[0], "display") === "block" ? "md" : $dom.style($dom.get(".responsive-indicator > .visible-lg-block")[0], "display") === "block" ? "lg" : void 0
};
RFE.replaceURLNoReload = function (n) {
    history && history.pushState && history.pushState({}, "b", n)
};
RFE.getOffsetFromBody = function getOffset(n, t) {
    return t || (t = {x: 0, y: 0}), n && (t.x += n.offsetLeft, t.y += n.offsetTop, getOffset(n.offsetParent, t)), t
};
RFE.isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i) && !RFE.isMobile.Windows()
    }, BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    }, iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) && !RFE.isMobile.Windows()
    }, iPhone: function () {
        return navigator.userAgent.match(/iPhone/i) && !RFE.isMobile.Windows()
    }, iPad: function () {
        return navigator.userAgent.match(/iPad/i) && !RFE.isMobile.Windows()
    }, iPod: function () {
        return navigator.userAgent.match(/iPod/i) && !RFE.isMobile.Windows()
    }, Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    }, Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    }, any: function () {
        return RFE.isMobile.Android() || RFE.isMobile.BlackBerry() || RFE.isMobile.iOS() || RFE.isMobile.Opera() || RFE.isMobile.Windows()
    }
};
RFE.getStyle = function (n, t) {
    var i;
    return n.currentStyle ? i = n.currentStyle[t] : window.getComputedStyle && (i = document.defaultView.getComputedStyle(n, null).getPropertyValue(t)), i
};
RFE.getURL = function () {
    return document.location
};
RFE.getURLParams = function (n) {
    var i, t, f, e;
    if (n && n != "" && n !== undefined || (n = window.location.href), n.indexOf("?") > -1) {
        n = n.replace("?nocache=1", "");
        var o = n.substring(n.indexOf("?") + 1), r = {}, u = o.split("&");
        for (i = 0; i < u.length; i++) t = u[i], t.indexOf("=") > -1 && (f = t.substring(0, t.indexOf("=")), e = t.substring(t.indexOf("=") + 1), r[f] = e);
        return r
    }
    return {}
};
RFE.isRTL = function () {
    return document.getElementsByTagName("HTML")[0].getAttribute("dir") === "rtl"
};
RFE.getRTLScrollType = function () {
    var n = $dom.create("div"), t;
    return n.dir = "rtl", $dom.style(n, {
        "font-size": "14px",
        width: "1px",
        height: "1px",
        position: "absolute",
        top: "-1000px",
        overflow: "scroll"
    }), n.innerHTML = "A", document.body.appendChild(n), t = "reverse", n.scrollLeft > 0 ? t = "default" : (n.scrollLeft = 1, n.scrollLeft === 0 && (t = "negative")), n.parentNode.removeChild(n), t
};
RFE.attachEvent = function (n, t, i) {
    n.addEventListener ? n.addEventListener(t, i, !1) : n.attachEvent("on" + t, i)
};
RFE.preventDefault = function (n) {
    n = n || event;
    n.preventDefault ? n.preventDefault() : n.returnValue = !1;
    n.stopPropagation ? n.stopPropagation() : n.returnValue = !1
};
RFE.isResponseValid = function (n) {
    return n && (typeof n == "object" || n instanceof Array)
};
RFE.testMediaQuery = function () {
    var t, n;
    try {
        t = window.matchMedia("(min-width: 500px)")
    } catch (i) {
    }
    return (n = window.matchMedia || window.msMatchMedia, n) ? n(t) && n(t).matches || !1 : !1
};
RFE.indexOf = function (n, t, i) {
    i === undefined && (i = 0);
    i < 0 && (i += n.length);
    i < 0 && (i = 0);
    for (var r = n.length; i < r; i++) if (i in n && n[i] === t) return i;
    return -1
};
RFE.getElementsByAttribute = function (n, t, i) {
    var f, u, r;
    for ((typeof t == "string" || typeof t == "function") && (i = t, t = null), t || (t = document), f = [], u = t.getElementsByTagName("*"), r = 0; r < u.length; r++) if (u[r].hasAttribute(n)) {
        if (typeof i == "function") {
            if (!i(u[r].getAttribute(n), u[r])) continue
        } else if (typeof i != "undefined" && u[r].getAttribute(n) != i) continue;
        f.push(u[r])
    }
    return f
};
RFE.getFormElements = function (n) {
    for (var i, u = [], r = n.getElementsByTagName("*"), t = 0; t < r.length; t++) (i = r[t].tagName.toLowerCase(), i === "input" || i === "select" || i === "textarea") && u.push(r[t]);
    return u
};
Array.prototype.forEach || (Array.prototype.forEach = function (n, t) {
    if (!this) throw"forEach can't be called on null.";
    if (typeof n != "function") throw"callback for forEach have to be a function.";
    t = t || window;
    for (var i = 0; i < this.length; i++) this[i] && n.call(t, this[i], i, this)
});
window.loadScript = function (n, t) {
    if (typeof n != "string") throw"loadScript: src have to be a string.";
    var i = document.createElement("script");
    typeof t == "function" && (i.onload = t);
    document.head.appendChild(i);
    i.setAttribute("type", "text/javascript");
    i.setAttribute("src", n)
};
window.createHTML = function (n) {
    var i = document.createElement("DIV"), t;
    for (i.innerHTML = n, t = i.firstChild; t;) {
        if (t.nodeType === 1) return t;
        t = t.nextSibling
    }
    return null
};
HTMLElement.prototype.activateScripts = function () {
    for (var t, n, r, u = this.querySelectorAll("script"), i = 0; i < u.length; i++) t = document.createElement("script"), n = u[i], n.type && t.setAttribute("type", n.type), n.src ? t.setAttribute("src", n.src) : t.text = n.text, r = n.parentNode, r.insertBefore(t, n), r.removeChild(n)
};
HTMLFormElement.prototype.getActionData = function (n) {
    var e, r, u, t, i, f;
    if (n) return new FormData(this);
    for (e = this.querySelectorAll("input, select, textarea"), r = {}, u = 0; u < e.length; u++) if (t = e[u], i = null, t.name && !t.disabled) {
        switch (t.tagName.toLowerCase()) {
            case"input":
                switch (t.type) {
                    case"hidden":
                        i = r[t.name] ? r[t.name] : t.value;
                        break;
                    case"radio":
                    case"checkbox":
                        if (!t.checked) continue;
                    default:
                        i = t.value
                }
                break;
            case"select":
                if (f = t.options[t.selectedIndex], !f) continue;
                i = f.value || f.text;
                break;
            case"textarea":
                i = t.value
        }
        r[t.name] = i
    }
    return r
};
window.isInsideCms = function () {
    var n = document.getElementsByTagName("base");
    return n && n.length > 0
};
window.ajaxGet = function (n, t, i, r) {
    var e, f, u, o;
    if (i === undefined ? (i = t, t = null) : (e = parseData(t), e.length > 0 && (n += n.indexOf("?") >= 0 ? "&" : "?", n += e)), f = !0, i !== !0 && (f = !1), u = new XMLHttpRequest, u.open("GET", n.split("#")[0], !f), f || handleResponse(u, i, "Get"), typeof r == "object") for (o in r) u[o] = r[o];
    return isInsideCms() || u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), u.send(), f ? parseResponse(u) : u
};
window.ajaxPost = function (n, t, i, r, u) {
    var e = !0, f, s, o;
    if (i !== !0 && (e = !1), f = new XMLHttpRequest, typeof r == "function" && (s = r(f), s === !1)) return !1;
    if (f.open("POST", n.split("#")[0], !e), e || handleResponse(f, i, "Post"), typeof FormData == "undefined" || t instanceof FormData || f.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e || handleResponse(f, i, "Post"), isInsideCms() || f.setRequestHeader("X-Requested-With", "XMLHttpRequest"), typeof u == "object") for (o in u) f[o] = u[o];
    return f.send(parseData(t)), e ? parseResponse(f) : f
};
window.root = function (n) {
    return n = n || "", n.length > 0 && n.charAt(0) === "/" && (n = n.substr(1)), appBaseUrl + n
};
RFE.createCookie = function (n, t, i, r) {
    var u, f, e;
    i ? (u = new Date, u.setTime(u.getTime() + i * 864e5), f = "; expires=" + u.toGMTString()) : f = "";
    e = r ? "; domain=" + r : "";
    document.cookie = n + "=" + t + f + e + "; path=/"
};
RFE.readCookie = function (n) {
    for (var t, r = n + "=", u = document.cookie.split(";"), i = 0; i < u.length; i++) {
        for (t = u[i]; t.charAt(0) == " ";) t = t.substring(1, t.length);
        if (t.indexOf(r) == 0) return t.substring(r.length, t.length)
    }
    return null
};
RFE.eraseCookie = function (n, t) {
    RFE.createCookie(n, "", -1, t)
};
RFE.loadCSS = function (n) {
    var t = document.createElement("link"), i = appBaseUrl + "Content/responsive/" + n + ".css";
    t.setAttribute("rel", "stylesheet");
    t.setAttribute("href", i);
    document.body.appendChild(t)
};
RFE.loadFont = function (n, t, i) {
    var r = document.createElement("style"), u = appBaseUrl + "Content/responsive/fonts/" + t;
    i = typeof i == "undefined" ? "normal" : i;
    r.setAttribute("type", "text/css");
    r.innerHTML = '@font-face {font-family: "' + n + "\";src: url('" + u + ".woff2') format('woff2'), url('" + u + ".woff') format('woff');font-weight: " + i + ";font-style: normal;}";
    document.body.appendChild(r)
};
RFE.addCustomEventListener = function (n, t, i) {
    n.addEventListener ? n.addEventListener(t, i) : n.attachEvent("on" + t, function () {
        i.call(n)
    })
};
RFE.triggerCustomEvent = function (n, t, i) {
    var r, u = function () {
        try {
            return new CustomEvent("test"), !0
        } catch (n) {
            return !1
        }
    }();
    window.CustomEvent && u ? r = new CustomEvent(t, i) : (r = document.createEvent("CustomEvent"), r.initCustomEvent(t, !0, !0, i));
    n.dispatchEvent(r)
};
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
eventListenerSupported = window.addEventListener;
RFE.observeDOM = function (n, t) {
    if (MutationObserver) {
        var i = new MutationObserver(function (n) {
            (n[0].addedNodes.length || n[0].removedNodes.length) && t()
        });
        i.observe(n, {childList: !0, subtree: !0})
    } else eventListenerSupported && (n.addEventListener("DOMNodeInserted", t, !1), n.addEventListener("DOMNodeRemoved", t, !1))
};
RFE.parseQueryString = function (n) {
    for (var t, f, u = n.split("&"), i = {}, r = 0; r < u.length; r++) t = u[r].split("="), typeof i[t[0]] == "undefined" ? i[t[0]] = decodeURIComponent(t[1]) : typeof i[t[0]] == "string" ? (f = [i[t[0]], decodeURIComponent(t[1])], i[t[0]] = f) : i[t[0]].push(decodeURIComponent(t[1]));
    return i
};
RFE.hasClass = function (n, t) {
    return t.classList ? t.classList.contains(n) : new RegExp("(^| )" + n + "( |$)", "gi").test(t.className)
};
RFE.addClass = function (n, t) {
    var r = function (t) {
        t.classList ? t.classList.add(n) : t.className += " " + n
    };
    if (t instanceof NodeList) for (i = 0; i < t.length; ++i) r(t[i]); else r(t)
};
RFE.removeClass = function (n, t) {
    var r = function (t) {
        t.classList ? t.classList.remove(n) : t.className = t.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    };
    if (t instanceof NodeList) for (i = 0; i < t.length; ++i) r(t[i]); else r(t)
};
RFE.select = function (n, t) {
    return (t || document).querySelectorAll(n)
};
RFE.filter = function (n, t) {
    return Array.prototype.filter || (Array.prototype.filter = function (n) {
        for (var i, u = this.length >>> 0, r = [], f = arguments[1], t = 0; t < u; t++) t in this && (i = this[t], n.call(f, i, t, this) && r.push(i));
        return r
    }), n.filter(t)
};
RFE.isVisible = function (n) {
    if (n === undefined) return !1;
    var t = window.getComputedStyle(n);
    return t.display !== "none" && t.visibility !== "hidden"
};
RFE.offset = function (n) {
    var t = n.getBoundingClientRect();
    return {top: t.top + document.body.scrollTop, left: t.left + document.body.scrollLeft}
};
RFE.position = function (n) {
    return {left: n.offsetLeft, top: n.offsetTop}
};
RFE.outerWidth = function (n) {
    var i = n.offsetWidth, t = getComputedStyle(n);
    return i + (parseInt(t.marginLeft) + parseInt(t.marginRight))
};
RFE.show = function (n) {
    n && n.style && (n.style.display = "block")
};
RFE.hide = function (n) {
    n && n.style && (n.style.display = "none")
};
RFE.data = function (n, t, i) {
    if (n) if (i) n.dataset ? n.dataset[t] = i : n.setAttribute("data-" + t, i); else return n.dataset && n.dataset[t] ? n.dataset[t] : n.getAttribute("data-" + t); else return null
}
;
/*/Scripts/responsive/loader/loader-module.js*/
RFE.moduleRegister = [];
RFE.moduleByName = function (n) {
    for (var i, t = 0; t < RFE.moduleRegister.length; t++) if (i = RFE.moduleRegister[t], i.name === n) return i
};
RFE.Module = {
    getConstructor: function () {
        return function () {
            RFE.moduleRegister.push(this)
        }
    }, initModule: function (n) {
        if (typeof n.init == "function" && n.loadable) try {
            n.init("load", document.body)
        } catch (i) {
            if (console) {
                var t = {stack: "N/A"};
                Error.captureStackTrace && Error.captureStackTrace(t, this);
                console.error ? console.error("error while " + n.name + " processing", i.message, t.stack) : console.log("error while " + n.name + " processing", i.message, t.stack)
            }
        }
        return n
    }, extend: function (n) {
        var t = this.getConstructor();
        return t.prototype = n, this.initModule(new t)
    }, extendCustomParent: function (n, t) {
        var i = this.getConstructor(), r, u;
        if (i.prototype = t, r = RFE.moduleByName(n), !r) throw"Parent module not found";
        for (u in r) typeof i.prototype[u] == "undefined" && (i.prototype[u] = r[u]);
        return this.initModule(new i)
    }
};
RFE.getModuleByName = function (n) {
    for (var i, t = 0; t < RFE.moduleRegister.length; t++) if (i = RFE.moduleRegister[t], i.name === n) return i
}
;

/*/Scripts/responsive/loader/loader-ajax.js*/
function loadResourcesPruduction(n, t) {
    for (var i = root("res?dependencies="), r = 0; r < n.length; r++) r > 0 && (i += ","), i += n[r];
    !window.cacheBuster || (i += "&cb=" + window.cacheBuster);
    window.ajaxGet(i, function (n) {
        t(n)
    })
}

function loadResourcesDevelopment(n, t) {
    var r = {}, u = 0, f = 0;
    for (var i in n) n.hasOwnProperty(i) && u++;
    for (i in n) n.hasOwnProperty(i) && function (i) {
        var e = n[i], o = window.ajaxGet("../../js/modules/" + e + ".js", function () {
            r[e] = o.status === 200 ? o.responseText : null;
            u <= ++f && t(r)
        })
    }(i)
}

var loadResources = typeof rfe_devlopment_enviroment == "boolean" && rfe_devlopment_enviroment ? loadResourcesDevelopment : loadResourcesPruduction
;

/*/Scripts/responsive/loader/loader-debug.js*/
function replace() {
    var i = window.location.hash.substring(1), n = i.split(",");
    for (var t in n) (n[t] === "debug" || n[t] === "replace") && delete n[t];
    return n
}

function debug() {
    var i = "", r, n, t;
    for (r in caps) i += "<span>" + caps[r] + "<\/span>";
    n = "<div id='debug'>";
    n += "<table>";
    n += "<tr>";
    n += "<th>Caps:<\/th><td>" + i + "<\/td>";
    n += "<\/tr>";
    n += "<tr>";
    n += "<th>Mode:<\/th><td><span class='desktop'>desktop<\/span><span class='tablet'>tablet<\/span><span class='mobile'>mobile<\/span><\/td>";
    n += "<\/tr>";
    n += "<\/table>";
    n += "<\/div>";
    t = document.createElement("div");
    t.innerHTML = n;
    document.body.appendChild(t)
}
;

/*/Scripts/responsive/loader/loader-detect.js*/
function provideTests(n) {
    var i, t;
    if (typeof n == "object" && n instanceof Array && n.lenght > 0) {
        for (i in n) if (t = n[i], typeof rule == "string") {
            if (indexOf(caps, t) > -1) return !1
        } else if (typeof rule == "function" && !rule()) return !1;
        return !0
    }
    return typeof n == "string" ? indexOf(caps, t) > -1 : typeof n == "function" ? n() : !1
}
;

/*/Scripts/responsive/loader/loader-exe.js*/
function exe(n) {
    for (var i, t, f, r = [], u = 0; u < n.length; u++) t = n[u], (!t.test || provideTests(t.test)) && r.push(t);
    i = [];
    for (u in r) if (t = r[u], typeof t.dep == "object" && t.dep instanceof Array) for (f = 0; f < t.dep.length; f++) RFE.indexOf(i, t.dep[f]) === -1 && i.push(t.dep[f]); else typeof t.dep == "string" && i.push(t.dep);
    i.length > 0 && loadResources(i, function (n) {
        var u, e, t, f, i;
        if (!n) throw new Error("Load of resources failed");
        u = function (t) {
            return initInclude(n[t], t)
        };
        for (e in r) if (t = r[e], typeof t.dep == "object" && t.dep instanceof Array) {
            for (f = [], i = 0; i < t.dep.length; i++) f.push(u(t.dep[i]));
            t.yep && t.yep.apply(this, f)
        } else t.yep && t.yep(u(taskDep))
    })
}
;

/*/Scripts/responsive/loader/loader-wraps.js*/
function initInclude(n, t) {
    if (!n) throw"Undefined Module " + t;
    if (/MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10) eval("//# sourceURL=" + t + ".js\n\n" + n); else {
        var i = $dom.create("script");
        i.type = "text/javascript";
        i.innerHTML = "//# sourceURL=" + t + ".js\n\n" + n;
        document.body.appendChild(i)
    }
}
;

/*/Scripts/responsive/loader/loader-loading-status.js*/
function showLoadingStatus() {
    var n = $dom.get("#loading-status")[0];
    n || (n = $dom.create("div#loading-status"), document.body.appendChild(n));
    $dom.toggleClass(n, "shown", !0)
}

function hideLoadingStatus() {
    var n = $dom.get("#loading-status")[0];
    n && $dom.toggleClass(n, "shown", !1)
}
;
/*/Scripts/responsive/app-code.js*/
window.onload = function () {
    exe([{
        test: function () {
            return !!$dom.get(".hdr .actions").length
        }, dep: ["header"]
    }, {
        test: function () {
            return !(typeof Promise != "undefined" && Promise.toString().indexOf("[native code]") !== -1)
        }, dep: ["polyfill/promise"]
    }, {dep: ["facebook-api"]}, {dep: ["collapsible"]}, {
        test: function () {
            return !!$dom.get(".hdr-nav-frag").length
        }, dep: ["navigation-utils", "navigation-mobile"]
    }, {dep: ["image-enhancer"]}, {
        test: function () {
            return !!$dom.get(".c-lightbox").length
        }, dep: ["image-expander"]
    }, {dep: ["smooth-scroll"]}, {dep: ["google-translate"]}, {
        test: function () {
            return !0
        }, dep: ["content-sharing"]
    }, {
        test: function () {
            return !!$dom.get(".share--sticky .sharing").length
        }, dep: ["sticky-sharing"]
    }, {
        test: function () {
            return $dom.get(".share--content").length
        }, dep: ["share-counter"]
    }, {dep: ["load-more", "content-tabs"]}, {dep: ["slider-nav-tabs"]}, {dep: ["most-popular"]}, {dep: ["slider-gallery-common", "slider-gallery"]}, {dep: ["simple-captcha"]}, {
        test: function () {
            return !!$dom.get(".contact-us").length
        }, dep: ["validation", "contact-us"]
    }, {
        test: function () {
            return !!document.getElementById("comments")
        }, dep: ["validation", "comments"]
    }, {
        test: function () {
            return !!$dom.get(".category-menu").length
        }, dep: ["category-menu"]
    }, {dep: ["analyticstag-event"]}, {
        test: function () {
            return !0
        }, dep: ["flexible-iframe"]
    }, {
        test: function () {
            return !!$dom.get(".show-single-line").length
        }, dep: ["show-single-line"]
    }, {
        test: function () {
            return !!$dom.get(".wsw .backgrounder").length
        }, dep: ["article-backgrounder"]
    }, {
        test: function () {
            var n = /[\&\?](previewId|design)=/.test(window.location.href), t = window.self !== window.top;
            return !!$dom.get(".breaking-news").length && !n && !t
        }, dep: ["highlights", "highlights-breaking-news"]
    }, {dep: ["slider"]}, {dep: ["footer-navigation"]}, {
        test: function () {
            return !!$dom.get(".poll").length
        }, dep: ["validation", "poll"]
    }, {
        test: function () {
            return !!$dom.get(".subscribe").length
        }, dep: ["validation", "subscribe"]
    }, {
        test: function () {
            return !!$dom.get("#quizId").length
        }, dep: ["validation", "quiz"]
    }, {
        test: function () {
            return !!$dom.get(".back-to-top-link").length
        }, dep: ["back-to-top"]
    }, {
        test: function () {
            return !!$dom.get(".js-login-box").length
        }, dep: ["validation", "login"]
    }, {
        test: function () {
            return !!$dom.get(".pg-login-special").length
        }, dep: ["randomize-bg"]
    }, {
        test: function () {
            return !!$dom.get(".js-register-form").length
        }, dep: ["validation", "register"]
    }, {
        test: function () {
            return !!$dom.get(".js-password-recover-form").length
        }, dep: ["validation", "password-recover"]
    }, {
        test: function () {
            return !!$dom.get(".js-password-reset-form").length
        }, dep: ["validation", "password-reset"]
    }, {
        test: function () {
            return !!$dom.get(".btn-popout-player").length
        }, dep: ["popup-opener"]
    }, {dep: ["whatsapp-share-button"]}, {
        test: function () {
            return !!$dom.get(".html5Player").length || !!$dom.get(".quiz").length || !!$dom.get(".pg-liveblog").length
        }, dep: ["flashPlayer", "html5Player-mpd", "html5Player"]
    }, {
        test: function () {
            return !!$dom.get('[data-api="youtube"]').length
        }, dep: ["youtube-iframe", "sticky-player-youtube"]
    }, {
        test: function () {
            return !!$dom.get('[data-api="pangea-video"]').length
        }, dep: ["sticky-player-pangea-video"]
    }, {
        test: function () {
            return !!$dom.get(".playlist").length
        }, dep: ["playlist"]
    }, {
        test: function () {
            return !!$dom.get('[data-api="facebook"]').length
        }, dep: ["facebook-video-snippet", "sticky-player-facebook"]
    }, {
        test: function () {
            return !!$dom.get("[data-sp_api]").length
        }, dep: ["sticky-player"]
    }, {
        test: function () {
            return !!$dom.get(".js-ugc-box").length
        }, dep: ["validation", "ugc"]
    }, {dep: ["copy-to-clipboard"]}, {
        test: function () {
            return $dom.get(".slide-in-wg").length
        }, dep: ["slide-in-widget"]
    }, {
        test: function () {
            return $dom.get(".cal-wrap").length
        }, dep: ["calendar"]
    }, {
        test: function () {
            return $dom.get(".comments-wg").length
        }, dep: ["latest-comments"]
    }, {
        test: function () {
            var n = typeof bar_data != "undefined" && typeof bar_data.cookieName != "undefined" && RFE.readCookie(bar_data.cookieName),
                t = /[\&\?](previewId|design)=/.test(window.location.href),
                i = typeof bar_data != "undefined" && bar_data.isEmbedded && bar_data.isEmbedded !== "0" || window.self !== window.top;
            return n && !t && !i
        }, dep: ["editorial-bar"]
    }, {
        test: function () {
            return window.location.href.indexOf("sectionlayoutbuilder=1") > -1
        },
        dep: ["polyfill/mobile-drag-drop", "polyfill/mobile-drag-drop-scroll-behaviour", "context-menu", "drag-and-drop", "section/common", "section/layout-builder"]
    }, {
        test: function () {
            return window.location.href.indexOf("sectionedit=1") > -1
        },
        dep: ["polyfill/mobile-drag-drop", "polyfill/mobile-drag-drop-scroll-behaviour", "context-menu", "drag-and-drop", "section/common", "section/editor"]
    }, {
        test: function () {
            return !!$dom.get(".entry--shared").length
        }, dep: ["scroll-to-anchor"]
    }, {dep: ["lt"]},])
};
var jsModulesAfterAjax = function () {
    exe([{
        test: function () {
            return !!$dom.get(".html5Player").length
        }, dep: ["flashPlayer", "html5Player"]
    }, {
        test: function () {
            return !!$dom.get(".btn-popout-player").length
        }, dep: ["popup-opener"]
    }, {
        test: function () {
            return !0
        }, dep: ["content-sharing"]
    }])
}
