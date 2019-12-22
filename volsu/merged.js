/*! For license information please see assets/merged.js.LICENSE */ ! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 145)
}([function(e, t, n) {
    var i, r;
    ! function(t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function(n, a) {
        "use strict";

        function o(e, t) {
            t = t || oe;
            var n = t.createElement("script");
            n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
        }

        function s(e) {
            var t = !!e && "length" in e && e.length,
                n = ye.type(e);
            return "function" !== n && !ye.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }



        function l(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function c(e, t, n) {
            return ye.isFunction(t) ? ye.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            }) : t.nodeType ? ye.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? ye.grep(e, function(e) {
                return de.call(t, e) > -1 !== n
            }) : Ae.test(t) ? ye.filter(t, e, n) : (t = ye.filter(t, e), ye.grep(e, function(e) {
                return de.call(t, e) > -1 !== n && 1 === e.nodeType
            }))
        }

        function u(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function d(e) {
            var t = {};
            return ye.each(e.match(Pe) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function f(e) {
            return e
        }

        function p(e) {
            throw e
        }

        function h(e, t, n, i) {
            var r;
            try {
                e && ye.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && ye.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        function g() {
            oe.removeEventListener("DOMContentLoaded", g), n.removeEventListener("load", g), ye.ready()
        }

        function m() {
            this.expando = ye.expando + m.uid++
        }

        function v(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : We.test(e) ? JSON.parse(e) : e)
        }

        function y(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace($e, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = v(n)
                    } catch (e) {}
                    je.set(e, t, n)
                } else n = void 0;
            return n
        }

        function b(e, t, n, i) {
            var r, a = 1,
                o = 20,
                s = i ? function() {
                    return i.cur()
                } : function() {
                    return ye.css(e, t, "")
                },
                l = s(),
                c = n && n[3] || (ye.cssNumber[t] ? "" : "px"),
                u = (ye.cssNumber[t] || "px" !== c && +l) && Be.exec(ye.css(e, t));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do {
                    a = a || ".5", u /= a, ye.style(e, t, u + c)
                } while (a !== (a = s() / l) && 1 !== a && --o)
            }
            return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
        }

        function w(e) {
            var t, n = e.ownerDocument,
                i = e.nodeName,
                r = Ye[i];
            return r || (t = n.body.appendChild(n.createElement(i)), r = ye.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ye[i] = r, r)
        }

        function E(e, t) {
            for (var n, i, r = [], a = 0, o = e.length; a < o; a++) i = e[a], i.style && (n = i.style.display, t ? ("none" === n && (r[a] = Re.get(i, "display") || null, r[a] || (i.style.display = "")), "" === i.style.display && Ge(i) && (r[a] = w(i))) : "none" !== n && (r[a] = "none", Re.set(i, "display", n)));
            for (a = 0; a < o; a++) null != r[a] && (e[a].style.display = r[a]);
            return e
        }

        function T(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && l(e, t) ? ye.merge([e], n) : n
        }

        function _(e, t) {
            for (var n = 0, i = e.length; n < i; n++) Re.set(e[n], "globalEval", !t || Re.get(t[n], "globalEval"))
        }

        function x(e, t, n, i, r) {
            for (var a, o, s, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                if ((a = e[p]) || 0 === a)
                    if ("object" === ye.type(a)) ye.merge(f, a.nodeType ? [a] : a);
                    else if (Je.test(a)) {
                for (o = o || d.appendChild(t.createElement("div")), s = (Xe.exec(a) || ["", ""])[1].toLowerCase(), l = Qe[s] || Qe._default, o.innerHTML = l[1] + ye.htmlPrefilter(a) + l[2], u = l[0]; u--;) o = o.lastChild;
                ye.merge(f, o.childNodes), o = d.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(a));
            for (d.textContent = "", p = 0; a = f[p++];)
                if (i && ye.inArray(a, i) > -1) r && r.push(a);
                else if (c = ye.contains(a.ownerDocument, a), o = T(d.appendChild(a), "script"), c && _(o), n)
                for (u = 0; a = o[u++];) Ke.test(a.type || "") && n.push(a);
            return d
        }

        function C() {
            return !0
        }

        function S() {
            return !1
        }

        function D() {
            try {
                return oe.activeElement
            } catch (e) {}
        }

        function A(e, t, n, i, r, a) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (s in t) A(e, s, n, i, t[s], a);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = S;
            else if (!r) return e;
            return 1 === a && (o = r, r = function(e) {
                return ye().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = ye.guid++)), e.each(function() {
                ye.event.add(this, t, r, i, n)
            })
        }

        function I(e, t) {
            return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") ? ye(">tbody", e)[0] || e : e
        }

        function k(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function O(e) {
            var t = ot.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function N(e, t) {
            var n, i, r, a, o, s, l, c;
            if (1 === t.nodeType) {
                if (Re.hasData(e) && (a = Re.access(e), o = Re.set(t, a), c = a.events)) {
                    delete o.handle, o.events = {};
                    for (r in c)
                        for (n = 0, i = c[r].length; n < i; n++) ye.event.add(t, r, c[r][n])
                }
                je.hasData(e) && (s = je.access(e), l = ye.extend({}, s), je.set(t, l))
            }
        }

        function P(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ue.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function L(e, t, n, i) {
            t = ce.apply([], t);
            var r, a, s, l, c, u, d = 0,
                f = e.length,
                p = f - 1,
                h = t[0],
                g = ye.isFunction(h);
            if (g || f > 1 && "string" == typeof h && !ve.checkClone && at.test(h)) return e.each(function(r) {
                var a = e.eq(r);
                g && (t[0] = h.call(this, r, a.html())), L(a, t, n, i)
            });
            if (f && (r = x(t, e[0].ownerDocument, !1, e, i), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
                for (s = ye.map(T(r, "script"), k), l = s.length; d < f; d++) c = r, d !== p && (c = ye.clone(c, !0, !0), l && ye.merge(s, T(c, "script"))), n.call(e[d], c, d);
                if (l)
                    for (u = s[s.length - 1].ownerDocument, ye.map(s, O), d = 0; d < l; d++) c = s[d], Ke.test(c.type || "") && !Re.access(c, "globalEval") && ye.contains(u, c) && (c.src ? ye._evalUrl && ye._evalUrl(c.src) : o(c.textContent.replace(st, ""), u))
            }
            return e
        }

        function M(e, t, n) {
            for (var i, r = t ? ye.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || ye.cleanData(T(i)), i.parentNode && (n && ye.contains(i.ownerDocument, i) && _(T(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function H(e, t, n) {
            var i, r, a, o, s = e.style;
            return n = n || ut(e), n && (o = n.getPropertyValue(t) || n[t], "" !== o || ye.contains(e.ownerDocument, e) || (o = ye.style(e, t)), !ve.pixelMarginRight() && ct.test(o) && lt.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a)), void 0 !== o ? o + "" : o
        }

        function z(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function R(e) {
            if (e in mt) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--;)
                if ((e = gt[n] + t) in mt) return e
        }

        function j(e) {
            var t = ye.cssProps[e];
            return t || (t = ye.cssProps[e] = R(e) || e), t
        }

        function W(e, t, n) {
            var i = Be.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function $(e, t, n, i, r) {
            var a, o = 0;
            for (a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; a < 4; a += 2) "margin" === n && (o += ye.css(e, n + Ve[a], !0, r)), i ? ("content" === n && (o -= ye.css(e, "padding" + Ve[a], !0, r)), "margin" !== n && (o -= ye.css(e, "border" + Ve[a] + "Width", !0, r))) : (o += ye.css(e, "padding" + Ve[a], !0, r), "padding" !== n && (o += ye.css(e, "border" + Ve[a] + "Width", !0, r)));
            return o
        }

        function F(e, t, n) {
            var i, r = ut(e),
                a = H(e, t, r),
                o = "border-box" === ye.css(e, "boxSizing", !1, r);
            return ct.test(a) ? a : (i = o && (ve.boxSizingReliable() || a === e.style[t]), "auto" === a && (a = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = parseFloat(a) || 0) + $(e, t, n || (o ? "border" : "content"), i, r) + "px")
        }

        function B(e, t, n, i, r) {
            return new B.prototype.init(e, t, n, i, r)
        }

        function V() {
            yt && (!1 === oe.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(V) : n.setTimeout(V, ye.fx.interval), ye.fx.tick())
        }

        function G() {
            return n.setTimeout(function() {
                vt = void 0
            }), vt = ye.now()
        }

        function q(e, t) {
            var n, i = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Ve[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function Y(e, t, n) {
            for (var i, r = (K.tweeners[t] || []).concat(K.tweeners["*"]), a = 0, o = r.length; a < o; a++)
                if (i = r[a].call(n, t, e)) return i
        }

        function U(e, t, n) {
            var i, r, a, o, s, l, c, u, d = "width" in t || "height" in t,
                f = this,
                p = {},
                h = e.style,
                g = e.nodeType && Ge(e),
                m = Re.get(e, "fxshow");
            n.queue || (o = ye._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() {
                o.unqueued || s()
            }), o.unqueued++, f.always(function() {
                f.always(function() {
                    o.unqueued--, ye.queue(e, "fx").length || o.empty.fire()
                })
            }));
            for (i in t)
                if (r = t[i], bt.test(r)) {
                    if (delete t[i], a = a || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    p[i] = m && m[i] || ye.style(e, i)
                }
            if ((l = !ye.isEmptyObject(t)) || !ye.isEmptyObject(p)) {
                d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = m && m.display, null == c && (c = Re.get(e, "display")), u = ye.css(e, "display"), "none" === u && (c ? u = c : (E([e], !0), c = e.style.display || c, u = ye.css(e, "display"), E([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === ye.css(e, "float") && (l || (f.done(function() {
                    h.display = c
                }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), l = !1;
                for (i in p) l || (m ? "hidden" in m && (g = m.hidden) : m = Re.access(e, "fxshow", {
                    display: c
                }), a && (m.hidden = !g), g && E([e], !0), f.done(function() {
                    g || E([e]), Re.remove(e, "fxshow");
                    for (i in p) ye.style(e, i, p[i])
                })), l = Y(g ? m[i] : 0, i, f), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
            }
        }

        function X(e, t) {
            var n, i, r, a, o;
            for (n in e)
                if (i = ye.camelCase(n), r = t[i], a = e[n], Array.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (o = ye.cssHooks[i]) && "expand" in o) {
                    a = o.expand(a), delete e[i];
                    for (n in a) n in e || (e[n] = a[n], t[n] = r)
                } else t[i] = r
        }

        function K(e, t, n) {
            var i, r, a = 0,
                o = K.prefilters.length,
                s = ye.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = vt || G(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, a = 1 - i, o = 0, l = c.tweens.length; o < l; o++) c.tweens[o].run(a);
                    return s.notifyWith(e, [c, a, n]), a < 1 && l ? n : (l || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: ye.extend({}, t),
                    opts: ye.extend(!0, {
                        specialEasing: {},
                        easing: ye.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: vt || G(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = ye.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) c.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (X(u, c.opts.specialEasing); a < o; a++)
                if (i = K.prefilters[a].call(c, e, u, c.opts)) return ye.isFunction(i.stop) && (ye._queueHooks(c.elem, c.opts.queue).stop = ye.proxy(i.stop, i)), i;
            return ye.map(u, Y, c), ye.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), ye.fx.timer(ye.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        function Q(e) {
            return (e.match(Pe) || []).join(" ")
        }

        function J(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function Z(e, t, n, i) {
            var r;
            if (Array.isArray(t)) ye.each(t, function(t, r) {
                n || kt.test(e) ? i(e, r) : Z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== ye.type(t)) i(e, t);
            else
                for (r in t) Z(e + "[" + r + "]", t[r], n, i)
        }

        function ee(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    a = t.toLowerCase().match(Pe) || [];
                if (ye.isFunction(n))
                    for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function te(e, t, n, i) {
            function r(s) {
                var l;
                return a[s] = !0, ye.each(e[s] || [], function(e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || o || a[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
                }), l
            }
            var a = {},
                o = e === Ft;
            return r(t.dataTypes[0]) || !a["*"] && r("*")
        }

        function ne(e, t) {
            var n, i, r = ye.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && ye.extend(!0, e, i), e
        }

        function ie(e, t, n) {
            for (var i, r, a, o, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (r in s)
                    if (s[r] && s[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) a = l[0];
            else {
                for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                        a = r;
                        break
                    }
                    o || (o = r)
                }
                a = a || o
            }
            if (a) return a !== l[0] && l.unshift(a), n[a]
        }

        function re(e, t, n, i) {
            var r, a, o, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
            for (a = u.shift(); a;)
                if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
                    if ("*" === a) a = l;
                    else if ("*" !== l && l !== a) {
                if (!(o = c[l + " " + a] || c["* " + a]))
                    for (r in c)
                        if (s = r.split(" "), s[1] === a && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
                            !0 === o ? o = c[r] : !0 !== c[r] && (a = s[0], u.unshift(s[1]));
                            break
                        }
                if (!0 !== o)
                    if (o && e.throws) t = o(t);
                    else try {
                        t = o(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: o ? e : "No conversion from " + l + " to " + a
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }
        var ae = [],
            oe = n.document,
            se = Object.getPrototypeOf,
            le = ae.slice,
            ce = ae.concat,
            ue = ae.push,
            de = ae.indexOf,
            fe = {},
            pe = fe.toString,
            he = fe.hasOwnProperty,
            ge = he.toString,
            me = ge.call(Object),
            ve = {},
            ye = function(e, t) {
                return new ye.fn.init(e, t)
            },
            be = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            we = /^-ms-/,
            Ee = /-([a-z])/g,
            Te = function(e, t) {
                return t.toUpperCase()
            };
        ye.fn = ye.prototype = {
            jquery: "3.2.1",
            constructor: ye,
            length: 0,
            toArray: function() {
                return le.call(this)
            },
            get: function(e) {
                return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = ye.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return ye.each(this, e)
            },
            map: function(e) {
                return this.pushStack(ye.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(le.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ue,
            sort: ae.sort,
            splice: ae.splice
        }, ye.extend = ye.fn.extend = function() {
            var e, t, n, i, r, a, o = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof o && (c = o, o = arguments[s] || {}, s++), "object" == typeof o || ye.isFunction(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = o[t], i = e[t], o !== i && (c && i && (ye.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, a = n && Array.isArray(n) ? n : []) : a = n && ye.isPlainObject(n) ? n : {}, o[t] = ye.extend(c, a, i)) : void 0 !== i && (o[t] = i));
            return o
        }, ye.extend({
            expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === ye.type(e)
            },
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = ye.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== pe.call(e)) && (!(t = se(e)) || "function" == typeof(n = he.call(t, "constructor") && t.constructor) && ge.call(n) === me)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? fe[pe.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                o(e)
            },
            camelCase: function(e) {
                return e.replace(we, "ms-").replace(Ee, Te)
            },
            each: function(e, t) {
                var n, i = 0;
                if (s(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(be, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (s(Object(e)) ? ye.merge(n, "string" == typeof e ? [e] : e) : ue.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : de.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i = [], r = 0, a = e.length, o = !n; r < a; r++) !t(e[r], r) !== o && i.push(e[r]);
                return i
            },
            map: function(e, t, n) {
                var i, r, a = 0,
                    o = [];
                if (s(e))
                    for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && o.push(r);
                else
                    for (a in e) null != (r = t(e[a], a, n)) && o.push(r);
                return ce.apply([], o)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                if ("string" == typeof t && (n = e[t], t = e, e = n), ye.isFunction(e)) return i = le.call(arguments, 2), r = function() {
                    return e.apply(t || this, i.concat(le.call(arguments)))
                }, r.guid = e.guid = e.guid || ye.guid++, r
            },
            now: Date.now,
            support: ve
        }), "function" == typeof Symbol && (ye.fn[Symbol.iterator] = ae[Symbol.iterator]), ye.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            fe["[object " + t + "]"] = t.toLowerCase()
        });
        var _e = function(e) {
            function t(e, t, n, i) {
                var r, a, o, s, l, u, f, p = t && t.ownerDocument,
                    h = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                if (!i && ((t ? t.ownerDocument || t : j) !== O && k(t), t = t || O, P)) {
                    if (11 !== h && (l = ge.exec(e)))
                        if (r = l[1]) {
                            if (9 === h) {
                                if (!(o = t.getElementById(r))) return n;
                                if (o.id === r) return n.push(o), n
                            } else if (p && (o = p.getElementById(r)) && z(t, o) && o.id === r) return n.push(o), n
                        } else {
                            if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                        }
                    if (w.qsa && !V[e + " "] && (!L || !L.test(e))) {
                        if (1 !== h) p = t, f = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(be, we) : t.setAttribute("id", s = R), u = x(e), a = u.length; a--;) u[a] = "#" + s + " " + d(u[a]);
                            f = u.join(","), p = me.test(e) && c(t.parentNode) || t
                        }
                        if (f) try {
                            return K.apply(n, p.querySelectorAll(f)), n
                        } catch (e) {} finally {
                            s === R && t.removeAttribute("id")
                        }
                    }
                }
                return S(e.replace(ae, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > E.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[R] = !0, e
            }

            function r(e) {
                var t = O.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function a(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) E.attrHandle[n[i]] = t
            }

            function o(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function l(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, a = e([], n.length, t), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function c(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            function u() {}

            function d(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir,
                    r = t.next,
                    a = r || i,
                    o = n && "parentNode" === a,
                    s = $++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, r);
                    return !1
                } : function(t, n, l) {
                    var c, u, d, f = [W, s];
                    if (l) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, n, l)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o)
                                if (d = t[R] || (t[R] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                                else {
                                    if ((c = u[a]) && c[0] === W && c[1] === s) return f[2] = c[2];
                                    if (u[a] = f, f[2] = e(t, n, l)) return !0
                                } return !1
                }
            }

            function p(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function h(e, n, i) {
                for (var r = 0, a = n.length; r < a; r++) t(e, n[r], i);
                return i
            }

            function g(e, t, n, i, r) {
                for (var a, o = [], s = 0, l = e.length, c = null != t; s < l; s++)(a = e[s]) && (n && !n(a, i, r) || (o.push(a), c && t.push(s)));
                return o
            }

            function m(e, t, n, r, a, o) {
                return r && !r[R] && (r = m(r)), a && !a[R] && (a = m(a, o)), i(function(i, o, s, l) {
                    var c, u, d, f = [],
                        p = [],
                        m = o.length,
                        v = i || h(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? v : g(v, f, e, s, l),
                        b = n ? a || (i ? e : m || r) ? [] : o : y;
                    if (n && n(y, b, s, l), r)
                        for (c = g(b, p), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                    if (i) {
                        if (a || e) {
                            if (a) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                a(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = a ? J(i, d) : f[u]) > -1 && (i[c] = !(o[c] = d))
                        }
                    } else b = g(b === o ? b.splice(m, b.length) : b), a ? a(null, o, b, l) : K.apply(o, b)
                })
            }

            function v(e) {
                for (var t, n, i, r = e.length, a = E.relative[e[0].type], o = a || E.relative[" "], s = a ? 1 : 0, l = f(function(e) {
                        return e === t
                    }, o, !0), c = f(function(e) {
                        return J(t, e) > -1
                    }, o, !0), u = [function(e, n, i) {
                        var r = !a && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                        return t = null, r
                    }]; s < r; s++)
                    if (n = E.relative[e[s].type]) u = [f(p(u), n)];
                    else {
                        if (n = E.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                            for (i = ++s; i < r && !E.relative[e[i].type]; i++);
                            return m(s > 1 && p(u), s > 1 && d(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(ae, "$1"), n, s < i && v(e.slice(s, i)), i < r && v(e = e.slice(i)), i < r && d(e))
                        }
                        u.push(n)
                    }
                return p(u)
            }

            function y(e, n) {
                var r = n.length > 0,
                    a = e.length > 0,
                    o = function(i, o, s, l, c) {
                        var u, d, f, p = 0,
                            h = "0",
                            m = i && [],
                            v = [],
                            y = D,
                            b = i || a && E.find.TAG("*", c),
                            w = W += null == y ? 1 : Math.random() || .1,
                            T = b.length;
                        for (c && (D = o === O || o || c); h !== T && null != (u = b[h]); h++) {
                            if (a && u) {
                                for (d = 0, o || u.ownerDocument === O || (k(u), s = !P); f = e[d++];)
                                    if (f(u, o || O, s)) {
                                        l.push(u);
                                        break
                                    }
                                c && (W = w)
                            }
                            r && ((u = !f && u) && p--, i && m.push(u))
                        }
                        if (p += h, r && h !== p) {
                            for (d = 0; f = n[d++];) f(m, v, o, s);
                            if (i) {
                                if (p > 0)
                                    for (; h--;) m[h] || v[h] || (v[h] = U.call(l));
                                v = g(v)
                            }
                            K.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && (W = w, D = y), m
                    };
                return r ? i(o) : o
            }
            var b, w, E, T, _, x, C, S, D, A, I, k, O, N, P, L, M, H, z, R = "sizzle" + 1 * new Date,
                j = e.document,
                W = 0,
                $ = 0,
                F = n(),
                B = n(),
                V = n(),
                G = function(e, t) {
                    return e === t && (I = !0), 0
                },
                q = {}.hasOwnProperty,
                Y = [],
                U = Y.pop,
                X = Y.push,
                K = Y.push,
                Q = Y.slice,
                J = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ee = "[\\x20\\t\\r\\n\\f]",
                te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                re = new RegExp(ee + "+", "g"),
                ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                oe = new RegExp("^" + ee + "*," + ee + "*"),
                se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                ce = new RegExp(ie),
                ue = new RegExp("^" + te + "$"),
                de = {
                    ID: new RegExp("^#(" + te + ")"),
                    CLASS: new RegExp("^\\.(" + te + ")"),
                    TAG: new RegExp("^(" + te + "|[*])"),
                    ATTR: new RegExp("^" + ne),
                    PSEUDO: new RegExp("^" + ie),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Z + ")$", "i"),
                    needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                },
                fe = /^(?:input|select|textarea|button)$/i,
                pe = /^h\d$/i,
                he = /^[^{]+\{\s*\[native \w/,
                ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                me = /[+~]/,
                ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                ye = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                we = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                Ee = function() {
                    k()
                },
                Te = f(function(e) {
                    return !0 === e.disabled && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                K.apply(Y = Q.call(j.childNodes), j.childNodes), Y[j.childNodes.length].nodeType
            } catch (e) {
                K = {
                    apply: Y.length ? function(e, t) {
                        X.apply(e, Q.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, _ = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, k = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : j;
                return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, N = O.documentElement, P = !_(O), j !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)), w.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = r(function(e) {
                    return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = he.test(O.getElementsByClassName), w.getById = r(function(e) {
                    return N.appendChild(e).id = R, !O.getElementsByName || !O.getElementsByName(R).length
                }), w.getById ? (E.filter.ID = function(e) {
                    var t = e.replace(ve, ye);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, E.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && P) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (E.filter.ID = function(e) {
                    var t = e.replace(ve, ye);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, E.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && P) {
                        var n, i, r, a = t.getElementById(e);
                        if (a) {
                            if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                            for (r = t.getElementsByName(e), i = 0; a = r[i++];)
                                if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
                        }
                        return []
                    }
                }), E.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return a
                }, E.find.CLASS = w.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && P) return t.getElementsByClassName(e)
                }, M = [], L = [], (w.qsa = he.test(O.querySelectorAll)) && (r(function(e) {
                    N.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + R + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || L.push(".#.+[+~]")
                }), r(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = O.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), N.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
                })), (w.matchesSelector = he.test(H = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(e) {
                    w.disconnectedMatch = H.call(e, "*"), H.call(e, "[s!='']:x"), M.push("!=", ie)
                }), L = L.length && new RegExp(L.join("|")), M = M.length && new RegExp(M.join("|")), t = he.test(N.compareDocumentPosition), z = t || he.test(N.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, G = t ? function(e, t) {
                    if (e === t) return I = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === j && z(j, e) ? -1 : t === O || t.ownerDocument === j && z(j, t) ? 1 : A ? J(A, e) - J(A, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return I = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if (!r || !a) return e === O ? -1 : t === O ? 1 : r ? -1 : a ? 1 : A ? J(A, e) - J(A, t) : 0;
                    if (r === a) return o(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; s[i] === l[i];) i++;
                    return i ? o(s[i], l[i]) : s[i] === j ? -1 : l[i] === j ? 1 : 0
                }, O) : O
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== O && k(e), n = n.replace(le, "='$1']"), w.matchesSelector && P && !V[n + " "] && (!M || !M.test(n)) && (!L || !L.test(n))) try {
                    var i = H.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return t(n, O, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== O && k(e), z(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== O && k(e);
                var n = E.attrHandle[t.toLowerCase()],
                    i = n && q.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                return void 0 !== i ? i : w.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.escape = function(e) {
                return (e + "").replace(be, we)
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (I = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(G), I) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return A = null, e
            }, T = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += T(t);
                return n
            }, E = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = x(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ve, ye).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = F[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var a = t.attr(r, e);
                            return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var a = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, f, p, h, g = a !== o ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (m) {
                                if (a) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [o ? m.firstChild : m.lastChild], o && y) {
                                    for (f = m, d = f[R] || (f[R] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === W && c[1], b = p && c[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++b && f === t) {
                                            u[e] = [W, p, b];
                                            break
                                        }
                                } else if (y && (f = t, d = f[R] || (f[R] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === W && c[1], b = p), !1 === b)
                                    for (;
                                        (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[R] || (f[R] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [W, b]), f !== t)););
                                return (b -= r) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, a = E.pseudos[e] || E.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return a[R] ? a(n) : a.length > 1 ? (r = [e, e, "", n], E.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = a(e, n), o = r.length; o--;) i = J(e, r[o]), e[i] = !(t[i] = r[o])
                        }) : function(e) {
                            return a(e, 0, r)
                        }) : a
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = C(e.replace(ae, "$1"));
                        return r[R] ? i(function(e, t, n, i) {
                            for (var a, o = r(e, null, i, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                        }) : function(e, i, a) {
                            return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(ve, ye),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === N
                    },
                    focus: function(e) {
                        return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: s(!1),
                    disabled: s(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !E.pseudos.empty(e)
                    },
                    header: function(e) {
                        return pe.test(e.nodeName)
                    },
                    input: function(e) {
                        return fe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, E.pseudos.nth = E.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) E.pseudos[b] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) E.pseudos[b] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(b);
            return u.prototype = E.filters = E.pseudos, E.setFilters = new u, x = t.tokenize = function(e, n) {
                var i, r, a, o, s, l, c, u = B[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, l = [], c = E.preFilter; s;) {
                    i && !(r = oe.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(a = [])), i = !1, (r = se.exec(s)) && (i = r.shift(), a.push({
                        value: i,
                        type: r[0].replace(ae, " ")
                    }), s = s.slice(i.length));
                    for (o in E.filter) !(r = de[o].exec(s)) || c[o] && !(r = c[o](r)) || (i = r.shift(), a.push({
                        value: i,
                        type: o,
                        matches: r
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : B(e, l).slice(0)
            }, C = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    a = V[e + " "];
                if (!a) {
                    for (t || (t = x(e)), n = t.length; n--;) a = v(t[n]), a[R] ? i.push(a) : r.push(a);
                    a = V(e, y(r, i)), a.selector = e
                }
                return a
            }, S = t.select = function(e, t, n, i) {
                var r, a, o, s, l, u = "function" == typeof e && e,
                    f = !i && x(e = u.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (a = f[0] = f[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && 9 === t.nodeType && P && E.relative[a[1].type]) {
                        if (!(t = (E.find.ID(o.matches[0].replace(ve, ye), t) || [])[0])) return n;
                        u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                    }
                    for (r = de.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r], !E.relative[s = o.type]);)
                        if ((l = E.find[s]) && (i = l(o.matches[0].replace(ve, ye), me.test(a[0].type) && c(t.parentNode) || t))) {
                            if (a.splice(r, 1), !(e = i.length && d(a))) return K.apply(n, i), n;
                            break
                        }
                }
                return (u || C(e, f))(i, t, !P, n, !t || me.test(e) && c(t.parentNode) || t), n
            }, w.sortStable = R.split("").sort(G).join("") === R, w.detectDuplicates = !!I, k(), w.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(O.createElement("fieldset"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || a("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || a("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || a(Z, function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(n);
        ye.find = _e, ye.expr = _e.selectors, ye.expr[":"] = ye.expr.pseudos, ye.uniqueSort = ye.unique = _e.uniqueSort, ye.text = _e.getText, ye.isXMLDoc = _e.isXML, ye.contains = _e.contains, ye.escapeSelector = _e.escape;
        var xe = function(e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && ye(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            Ce = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            Se = ye.expr.match.needsContext,
            De = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Ae = /^.[^:#\[\.,]*$/;
        ye.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ye.find.matchesSelector(i, e) ? [i] : [] : ye.find.matches(e, ye.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, ye.fn.extend({
            find: function(e) {
                var t, n, i = this.length,
                    r = this;
                if ("string" != typeof e) return this.pushStack(ye(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (ye.contains(r[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) ye.find(e, r[t], n);
                return i > 1 ? ye.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(c(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(c(this, e || [], !0))
            },
            is: function(e) {
                return !!c(this, "string" == typeof e && Se.test(e) ? ye(e) : e || [], !1).length
            }
        });
        var Ie, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (ye.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || Ie, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof ye ? t[0] : t, ye.merge(this, ye.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : oe, !0)), De.test(i[1]) && ye.isPlainObject(t))
                        for (i in t) ye.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return r = oe.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : ye.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ye) : ye.makeArray(e, this)
        }).prototype = ye.fn, Ie = ye(oe);
        var Oe = /^(?:parents|prev(?:Until|All))/,
            Ne = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ye.fn.extend({
            has: function(e) {
                var t = ye(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (ye.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0,
                    r = this.length,
                    a = [],
                    o = "string" != typeof e && ye(e);
                if (!Se.test(e))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ye.find.matchesSelector(n, e))) {
                                a.push(n);
                                break
                            }
                return this.pushStack(a.length > 1 ? ye.uniqueSort(a) : a)
            },
            index: function(e) {
                return e ? "string" == typeof e ? de.call(ye(e), this[0]) : de.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(ye.uniqueSort(ye.merge(this.get(), ye(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ye.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return xe(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return xe(e, "parentNode", n)
            },
            next: function(e) {
                return u(e, "nextSibling")
            },
            prev: function(e) {
                return u(e, "previousSibling")
            },
            nextAll: function(e) {
                return xe(e, "nextSibling")
            },
            prevAll: function(e) {
                return xe(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return xe(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return xe(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Ce((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Ce(e.firstChild)
            },
            contents: function(e) {
                return l(e, "iframe") ? e.contentDocument : (l(e, "template") && (e = e.content || e), ye.merge([], e.childNodes))
            }
        }, function(e, t) {
            ye.fn[e] = function(n, i) {
                var r = ye.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ye.filter(i, r)), this.length > 1 && (Ne[e] || ye.uniqueSort(r), Oe.test(e) && r.reverse()), this.pushStack(r)
            }
        });
        var Pe = /[^\x20\t\r\n\f]+/g;
        ye.Callbacks = function(e) {
            e = "string" == typeof e ? d(e) : ye.extend({}, e);
            var t, n, i, r, a = [],
                o = [],
                s = -1,
                l = function() {
                    for (r = r || e.once, i = t = !0; o.length; s = -1)
                        for (n = o.shift(); ++s < a.length;) !1 === a[s].apply(n[0], n[1]) && e.stopOnFalse && (s = a.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
                },
                c = {
                    add: function() {
                        return a && (n && !t && (s = a.length - 1, o.push(n)), function t(n) {
                            ye.each(n, function(n, i) {
                                ye.isFunction(i) ? e.unique && c.has(i) || a.push(i) : i && i.length && "string" !== ye.type(i) && t(i)
                            })
                        }(arguments), n && !t && l()), this
                    },
                    remove: function() {
                        return ye.each(arguments, function(e, t) {
                            for (var n;
                                (n = ye.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function(e) {
                        return e ? ye.inArray(e, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return r = o = [], a = n = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return r = o = [], n || t || (a = n = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(e, n) {
                        return r || (n = n || [], n = [e, n.slice ? n.slice() : n], o.push(n), t || l()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, ye.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", ye.Callbacks("memory"), ye.Callbacks("memory"), 2],
                        ["resolve", "done", ye.Callbacks("once memory"), ye.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", ye.Callbacks("once memory"), ye.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    r = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return r.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return ye.Deferred(function(n) {
                                ye.each(t, function(t, i) {
                                    var r = ye.isFunction(e[i[4]]) && e[i[4]];
                                    a[i[1]](function() {
                                        var e = r && r.apply(this, arguments);
                                        e && ye.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(e, i, r) {
                            function a(e, t, i, r) {
                                return function() {
                                    var s = this,
                                        l = arguments,
                                        c = function() {
                                            var n, c;
                                            if (!(e < o)) {
                                                if ((n = i.apply(s, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                c = n && ("object" == typeof n || "function" == typeof n) && n.then, ye.isFunction(c) ? r ? c.call(n, a(o, t, f, r), a(o, t, p, r)) : (o++, c.call(n, a(o, t, f, r), a(o, t, p, r), a(o, t, f, t.notifyWith))) : (i !== f && (s = void 0, l = [n]), (r || t.resolveWith)(s, l))
                                            }
                                        },
                                        u = r ? c : function() {
                                            try {
                                                c()
                                            } catch (n) {
                                                ye.Deferred.exceptionHook && ye.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= o && (i !== p && (s = void 0, l = [n]), t.rejectWith(s, l))
                                            }
                                        };
                                    e ? u() : (ye.Deferred.getStackHook && (u.stackTrace = ye.Deferred.getStackHook()), n.setTimeout(u))
                                }
                            }
                            var o = 0;
                            return ye.Deferred(function(n) {
                                t[0][3].add(a(0, n, ye.isFunction(r) ? r : f, n.notifyWith)), t[1][3].add(a(0, n, ye.isFunction(e) ? e : f)), t[2][3].add(a(0, n, ye.isFunction(i) ? i : p))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ye.extend(e, r) : r
                        }
                    },
                    a = {};
                return ye.each(t, function(e, n) {
                    var o = n[2],
                        s = n[5];
                    r[n[1]] = o.add, s && o.add(function() {
                        i = s
                    }, t[3 - e][2].disable, t[0][2].lock), o.add(n[3].fire), a[n[0]] = function() {
                        return a[n[0] + "With"](this === a ? void 0 : this, arguments), this
                    }, a[n[0] + "With"] = o.fireWith
                }), r.promise(a), e && e.call(a, a), a
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    r = le.call(arguments),
                    a = ye.Deferred(),
                    o = function(e) {
                        return function(n) {
                            i[e] = this, r[e] = arguments.length > 1 ? le.call(arguments) : n, --t || a.resolveWith(i, r)
                        }
                    };
                if (t <= 1 && (h(e, a.done(o(n)).resolve, a.reject, !t), "pending" === a.state() || ye.isFunction(r[n] && r[n].then))) return a.then();
                for (; n--;) h(r[n], o(n), a.reject);
                return a.promise()
            }
        });
        var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        ye.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && Le.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, ye.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        };
        var Me = ye.Deferred();
        ye.fn.ready = function(e) {
            return Me.then(e).catch(function(e) {
                ye.readyException(e)
            }), this
        }, ye.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --ye.readyWait : ye.isReady) || (ye.isReady = !0, !0 !== e && --ye.readyWait > 0 || Me.resolveWith(oe, [ye]))
            }
        }), ye.ready.then = Me.then, "complete" === oe.readyState || "loading" !== oe.readyState && !oe.documentElement.doScroll ? n.setTimeout(ye.ready) : (oe.addEventListener("DOMContentLoaded", g), n.addEventListener("load", g));
        var He = function(e, t, n, i, r, a, o) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === ye.type(n)) {
                    r = !0;
                    for (s in n) He(e, t, s, n[s], !0, a, o)
                } else if (void 0 !== i && (r = !0, ye.isFunction(i) || (o = !0), c && (o ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(ye(e), n)
                    })), t))
                    for (; s < l; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : a
            },
            ze = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        m.uid = 1, m.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, ze(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, r = this.cache(e);
                if ("string" == typeof t) r[ye.camelCase(t)] = n;
                else
                    for (i in t) r[ye.camelCase(i)] = t[i];
                return r
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ye.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        Array.isArray(t) ? t = t.map(ye.camelCase) : (t = ye.camelCase(t), t = t in i ? [t] : t.match(Pe) || []), n = t.length;
                        for (; n--;) delete i[t[n]]
                    }(void 0 === t || ye.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !ye.isEmptyObject(t)
            }
        };
        var Re = new m,
            je = new m,
            We = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            $e = /[A-Z]/g;
        ye.extend({
            hasData: function(e) {
                return je.hasData(e) || Re.hasData(e)
            },
            data: function(e, t, n) {
                return je.access(e, t, n)
            },
            removeData: function(e, t) {
                je.remove(e, t)
            },
            _data: function(e, t, n) {
                return Re.access(e, t, n)
            },
            _removeData: function(e, t) {
                Re.remove(e, t)
            }
        }), ye.fn.extend({
            data: function(e, t) {
                var n, i, r, a = this[0],
                    o = a && a.attributes;
                if (void 0 === e) {
                    if (this.length && (r = je.get(a), 1 === a.nodeType && !Re.get(a, "hasDataAttrs"))) {
                        for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = ye.camelCase(i.slice(5)), y(a, i, r[i])));
                        Re.set(a, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    je.set(this, e)
                }) : He(this, function(t) {
                    var n;
                    if (a && void 0 === t) {
                        if (void 0 !== (n = je.get(a, e))) return n;
                        if (void 0 !== (n = y(a, e))) return n
                    } else this.each(function() {
                        je.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    je.remove(this, e)
                })
            }
        }), ye.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = Re.get(e, t), n && (!i || Array.isArray(n) ? i = Re.access(e, t, ye.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ye.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    a = ye._queueHooks(e, t),
                    o = function() {
                        ye.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, o, a)), !i && a && a.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Re.get(e, n) || Re.access(e, n, {
                    empty: ye.Callbacks("once memory").add(function() {
                        Re.remove(e, [t + "queue", n])
                    })
                })
            }
        }), ye.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ye.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = ye.queue(this, e, t);
                    ye._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ye.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ye.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = ye.Deferred(),
                    a = this,
                    o = this.length,
                    s = function() {
                        --i || r.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = Re.get(a[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Be = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
            Ve = ["Top", "Right", "Bottom", "Left"],
            Ge = function(e, t) {
                return e = t || e, "none" === e.style.display || "" === e.style.display && ye.contains(e.ownerDocument, e) && "none" === ye.css(e, "display")
            },
            qe = function(e, t, n, i) {
                var r, a, o = {};
                for (a in t) o[a] = e.style[a], e.style[a] = t[a];
                r = n.apply(e, i || []);
                for (a in t) e.style[a] = o[a];
                return r
            },
            Ye = {};
        ye.fn.extend({
            show: function() {
                return E(this, !0)
            },
            hide: function() {
                return E(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Ge(this) ? ye(this).show() : ye(this).hide()
                })
            }
        });
        var Ue = /^(?:checkbox|radio)$/i,
            Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Ke = /^$|\/(?:java|ecma)script/i,
            Qe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td;
        var Je = /<|&#?\w+;/;
        ! function() {
            var e = oe.createDocumentFragment(),
                t = e.appendChild(oe.createElement("div")),
                n = oe.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ve.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ve.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Ze = oe.documentElement,
            et = /^key/,
            tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            nt = /^([^.]*)(?:\.(.+)|)/;
        ye.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var a, o, s, l, c, u, d, f, p, h, g, m = Re.get(e);
                if (m)
                    for (n.handler && (a = n, n = a.handler, r = a.selector), r && ye.find.matchesSelector(Ze, r), n.guid || (n.guid = ye.guid++), (l = m.events) || (l = m.events = {}), (o = m.handle) || (o = m.handle = function(t) {
                            return void 0 !== ye && ye.event.triggered !== t.type ? ye.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(Pe) || [""], c = t.length; c--;) s = nt.exec(t[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (d = ye.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = ye.event.special[p] || {}, u = ye.extend({
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ye.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, a), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, o) || e.addEventListener && e.addEventListener(p, o)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), ye.event.global[p] = !0)
            },
            remove: function(e, t, n, i, r) {
                var a, o, s, l, c, u, d, f, p, h, g, m = Re.hasData(e) && Re.get(e);
                if (m && (l = m.events)) {
                    for (t = (t || "").match(Pe) || [""], c = t.length; c--;)
                        if (s = nt.exec(t[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (d = ye.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = f.length; a--;) u = f[a], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(a, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                            o && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || ye.removeEvent(e, p, m.handle), delete l[p])
                        } else
                            for (p in l) ye.event.remove(e, p + t[c], n, i, !0);
                    ye.isEmptyObject(l) && Re.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, r, a, o, s = ye.event.fix(e),
                    l = new Array(arguments.length),
                    c = (Re.get(this, "events") || {})[s.type] || [],
                    u = ye.event.special[s.type] || {};
                for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                    for (o = ye.event.handlers.call(this, s, c), t = 0;
                        (r = o[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = r.elem, n = 0;
                            (a = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(a.namespace) || (s.handleObj = a, s.data = a.data, void 0 !== (i = ((ye.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, a, o, s = [],
                    l = t.delegateCount,
                    c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (a = [], o = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === o[r] && (o[r] = i.needsContext ? ye(r, this).index(c) > -1 : ye.find(r, this, null, [c]).length), o[r] && a.push(i);
                            a.length && s.push({
                                elem: c,
                                handlers: a
                            })
                        }
                return c = this, l < t.length && s.push({
                    elem: c,
                    handlers: t.slice(l)
                }), s
            },
            addProp: function(e, t) {
                Object.defineProperty(ye.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: ye.isFunction(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[ye.expando] ? e : new ye.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== D() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === D() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && l(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return l(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, ye.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, ye.Event = function(e, t) {
            if (!(this instanceof ye.Event)) return new ye.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? C : S, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ye.extend(this, t), this.timeStamp = e && e.timeStamp || ye.now(), this[ye.expando] = !0
        }, ye.Event.prototype = {
            constructor: ye.Event,
            isDefaultPrevented: S,
            isPropagationStopped: S,
            isImmediatePropagationStopped: S,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = C, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = C, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = C, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ye.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && et.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && tt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, ye.event.addProp), ye.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            ye.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        a = e.handleObj;
                    return r && (r === i || ye.contains(i, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ye.fn.extend({
            on: function(e, t, n, i) {
                return A(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return A(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ye(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = S), this.each(function() {
                    ye.event.remove(this, e, n, t)
                })
            }
        });
        var it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            rt = /<script|<style|<link/i,
            at = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ot = /^true\/(.*)/,
            st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ye.extend({
            htmlPrefilter: function(e) {
                return e.replace(it, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, a, o, s = e.cloneNode(!0),
                    l = ye.contains(e.ownerDocument, e);
                if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ye.isXMLDoc(e)))
                    for (o = T(s), a = T(e), i = 0, r = a.length; i < r; i++) P(a[i], o[i]);
                if (t)
                    if (n)
                        for (a = a || T(e), o = o || T(s), i = 0, r = a.length; i < r; i++) N(a[i], o[i]);
                    else N(e, s);
                return o = T(s, "script"), o.length > 0 && _(o, !l && T(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, i, r = ye.event.special, a = 0; void 0 !== (n = e[a]); a++)
                    if (ze(n)) {
                        if (t = n[Re.expando]) {
                            if (t.events)
                                for (i in t.events) r[i] ? ye.event.remove(n, i) : ye.removeEvent(n, i, t.handle);
                            n[Re.expando] = void 0
                        }
                        n[je.expando] && (n[je.expando] = void 0)
                    }
            }
        }), ye.fn.extend({
            detach: function(e) {
                return M(this, e, !0)
            },
            remove: function(e) {
                return M(this, e)
            },
            text: function(e) {
                return He(this, function(e) {
                    return void 0 === e ? ye.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return L(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        I(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return L(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = I(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return L(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return L(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ye.cleanData(T(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return ye.clone(this, e, t)
                })
            },
            html: function(e) {
                return He(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !rt.test(e) && !Qe[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = ye.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (ye.cleanData(T(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return L(this, arguments, function(t) {
                    var n = this.parentNode;
                    ye.inArray(this, e) < 0 && (ye.cleanData(T(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), ye.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            ye.fn[e] = function(e) {
                for (var n, i = [], r = ye(e), a = r.length - 1, o = 0; o <= a; o++) n = o === a ? this : this.clone(!0), ye(r[o])[t](n), ue.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var lt = /^margin/,
            ct = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
            ut = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            };
        ! function() {
            function e() {
                if (s) {
                    s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ze.appendChild(o);
                    var e = n.getComputedStyle(s);
                    t = "1%" !== e.top, a = "2px" === e.marginLeft, i = "4px" === e.width, s.style.marginRight = "50%", r = "4px" === e.marginRight, Ze.removeChild(o), s = null
                }
            }
            var t, i, r, a, o = oe.createElement("div"),
                s = oe.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ve.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), ye.extend(ve, {
                pixelPosition: function() {
                    return e(), t
                },
                boxSizingReliable: function() {
                    return e(), i
                },
                pixelMarginRight: function() {
                    return e(), r
                },
                reliableMarginLeft: function() {
                    return e(), a
                }
            }))
        }();
        var dt = /^(none|table(?!-c[ea]).+)/,
            ft = /^--/,
            pt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ht = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            gt = ["Webkit", "Moz", "ms"],
            mt = oe.createElement("div").style;
        ye.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = H(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, a, o, s = ye.camelCase(t),
                        l = ft.test(t),
                        c = e.style;
                    if (l || (t = j(s)), o = ye.cssHooks[t] || ye.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : c[t];
                    a = typeof n, "string" === a && (r = Be.exec(n)) && r[1] && (n = b(e, t, r), a = "number"), null != n && n === n && ("number" === a && (n += r && r[3] || (ye.cssNumber[s] ? "" : "px")), ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, i) {
                var r, a, o, s = ye.camelCase(t);
                return ft.test(t) || (t = j(s)), o = ye.cssHooks[t] || ye.cssHooks[s], o && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = H(e, t, i)), "normal" === r && t in ht && (r = ht[t]), "" === n || n ? (a = parseFloat(r), !0 === n || isFinite(a) ? a || 0 : r) : r
            }
        }), ye.each(["height", "width"], function(e, t) {
            ye.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return !dt.test(ye.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, i) : qe(e, pt, function() {
                        return F(e, t, i)
                    })
                },
                set: function(e, n, i) {
                    var r, a = i && ut(e),
                        o = i && $(e, t, i, "border-box" === ye.css(e, "boxSizing", !1, a), a);
                    return o && (r = Be.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = ye.css(e, t)), W(e, n, o)
                }
            }
        }), ye.cssHooks.marginLeft = z(ve.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(H(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), ye.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ye.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Ve[i] + t] = a[i] || a[i - 2] || a[0];
                    return r
                }
            }, lt.test(e) || (ye.cssHooks[e + t].set = W)
        }), ye.fn.extend({
            css: function(e, t) {
                return He(this, function(e, t, n) {
                    var i, r, a = {},
                        o = 0;
                    if (Array.isArray(t)) {
                        for (i = ut(e), r = t.length; o < r; o++) a[t[o]] = ye.css(e, t[o], !1, i);
                        return a
                    }
                    return void 0 !== n ? ye.style(e, t, n) : ye.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), ye.Tween = B, B.prototype = {
            constructor: B,
            init: function(e, t, n, i, r, a) {
                this.elem = e, this.prop = n, this.easing = r || ye.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (ye.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = B.propHooks[this.prop];
                return e && e.get ? e.get(this) : B.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = B.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ye.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
            }
        }, B.prototype.init.prototype = B.prototype, B.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ye.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    ye.fx.step[e.prop] ? ye.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ye.cssProps[e.prop]] && !ye.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ye.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ye.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, ye.fx = B.prototype.init, ye.fx.step = {};
        var vt, yt, bt = /^(?:toggle|show|hide)$/,
            wt = /queueHooks$/;
        ye.Animation = ye.extend(K, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return b(n.elem, e, Be.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    ye.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Pe);
                    for (var n, i = 0, r = e.length; i < r; i++) n = e[i], K.tweeners[n] = K.tweeners[n] || [], K.tweeners[n].unshift(t)
                },
                prefilters: [U],
                prefilter: function(e, t) {
                    t ? K.prefilters.unshift(e) : K.prefilters.push(e)
                }
            }), ye.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? ye.extend({}, e) : {
                    complete: n || !n && t || ye.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ye.isFunction(t) && t
                };
                return ye.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ye.fx.speeds ? i.duration = ye.fx.speeds[i.duration] : i.duration = ye.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    ye.isFunction(i.old) && i.old.call(this), i.queue && ye.dequeue(this, i.queue)
                }, i
            }, ye.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Ge).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = ye.isEmptyObject(e),
                        a = ye.speed(t, n, i),
                        o = function() {
                            var t = K(this, ye.extend({}, e), a);
                            (r || Re.get(this, "finish")) && t.stop(!0)
                        };
                    return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            a = ye.timers,
                            o = Re.get(this);
                        if (r) o[r] && o[r].stop && i(o[r]);
                        else
                            for (r in o) o[r] && o[r].stop && wt.test(r) && i(o[r]);
                        for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                        !t && n || ye.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = Re.get(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            a = ye.timers,
                            o = i ? i.length : 0;
                        for (n.finish = !0, ye.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                        for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), ye.each(["toggle", "show", "hide"], function(e, t) {
                var n = ye.fn[t];
                ye.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, r)
                }
            }), ye.each({
                slideDown: q("show"),
                slideUp: q("hide"),
                slideToggle: q("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                ye.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), ye.timers = [], ye.fx.tick = function() {
                var e, t = 0,
                    n = ye.timers;
                for (vt = ye.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || ye.fx.stop(), vt = void 0
            }, ye.fx.timer = function(e) {
                ye.timers.push(e), ye.fx.start()
            }, ye.fx.interval = 13, ye.fx.start = function() {
                yt || (yt = !0, V())
            }, ye.fx.stop = function() {
                yt = null
            }, ye.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ye.fn.delay = function(e, t) {
                return e = ye.fx ? ye.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, i) {
                    var r = n.setTimeout(t, e);
                    i.stop = function() {
                        n.clearTimeout(r)
                    }
                })
            },
            function() {
                var e = oe.createElement("input"),
                    t = oe.createElement("select"),
                    n = t.appendChild(oe.createElement("option"));
                e.type = "checkbox", ve.checkOn = "" !== e.value, ve.optSelected = n.selected, e = oe.createElement("input"), e.value = "t", e.type = "radio", ve.radioValue = "t" === e.value
            }();
        var Et, Tt = ye.expr.attrHandle;
        ye.fn.extend({
            attr: function(e, t) {
                return He(this, ye.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ye.removeAttr(this, e)
                })
            }
        }), ye.extend({
            attr: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? ye.prop(e, t, n) : (1 === a && ye.isXMLDoc(e) || (r = ye.attrHooks[t.toLowerCase()] || (ye.expr.match.bool.test(t) ? Et : void 0)), void 0 !== n ? null === n ? void ye.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ye.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ve.radioValue && "radio" === t && l(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0,
                    r = t && t.match(Pe);
                if (r && 1 === e.nodeType)
                    for (; n = r[i++];) e.removeAttribute(n)
            }
        }), Et = {
            set: function(e, t, n) {
                return !1 === t ? ye.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, ye.each(ye.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = Tt[t] || ye.find.attr;
            Tt[t] = function(e, t, i) {
                var r, a, o = t.toLowerCase();
                return i || (a = Tt[o], Tt[o] = r, r = null != n(e, t, i) ? o : null, Tt[o] = a), r
            }
        });
        var _t = /^(?:input|select|textarea|button)$/i,
            xt = /^(?:a|area)$/i;
        ye.fn.extend({
            prop: function(e, t) {
                return He(this, ye.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[ye.propFix[e] || e]
                })
            }
        }), ye.extend({
            prop: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return 1 === a && ye.isXMLDoc(e) || (t = ye.propFix[t] || t, r = ye.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ye.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : _t.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), ve.optSelected || (ye.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), ye.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ye.propFix[this.toLowerCase()] = this
        }), ye.fn.extend({
            addClass: function(e) {
                var t, n, i, r, a, o, s, l = 0;
                if (ye.isFunction(e)) return this.each(function(t) {
                    ye(this).addClass(e.call(this, t, J(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(Pe) || []; n = this[l++];)
                        if (r = J(n), i = 1 === n.nodeType && " " + Q(r) + " ") {
                            for (o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            s = Q(i), r !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, a, o, s, l = 0;
                if (ye.isFunction(e)) return this.each(function(t) {
                    ye(this).removeClass(e.call(this, t, J(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(Pe) || []; n = this[l++];)
                        if (r = J(n), i = 1 === n.nodeType && " " + Q(r) + " ") {
                            for (o = 0; a = t[o++];)
                                for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                            s = Q(i), r !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ye.isFunction(e) ? this.each(function(n) {
                    ye(this).toggleClass(e.call(this, n, J(this), t), t)
                }) : this.each(function() {
                    var t, i, r, a;
                    if ("string" === n)
                        for (i = 0, r = ye(this), a = e.match(Pe) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = J(this), t && Re.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Re.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + Q(J(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var Ct = /\r/g;
        ye.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0]; {
                    if (arguments.length) return i = ye.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, ye(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = ye.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = ye.valHooks[this.type] || ye.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return (t = ye.valHooks[r.type] || ye.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n)
                }
            }
        }), ye.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ye.find.attr(e, "value");
                        return null != t ? t : Q(ye.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, r = e.options,
                            a = e.selectedIndex,
                            o = "select-one" === e.type,
                            s = o ? null : [],
                            c = o ? a + 1 : r.length;
                        for (i = a < 0 ? c : o ? a : 0; i < c; i++)
                            if (n = r[i], (n.selected || i === a) && !n.disabled && (!n.parentNode.disabled || !l(n.parentNode, "optgroup"))) {
                                if (t = ye(n).val(), o) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, a = ye.makeArray(t), o = r.length; o--;) i = r[o], (i.selected = ye.inArray(ye.valHooks.option.get(i), a) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), a
                    }
                }
            }
        }), ye.each(["radio", "checkbox"], function() {
            ye.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = ye.inArray(ye(e).val(), t) > -1
                }
            }, ve.checkOn || (ye.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var St = /^(?:focusinfocus|focusoutblur)$/;
        ye.extend(ye.event, {
            trigger: function(e, t, i, r) {
                var a, o, s, l, c, u, d, f = [i || oe],
                    p = he.call(e, "type") ? e.type : e,
                    h = he.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = s = i = i || oe, 3 !== i.nodeType && 8 !== i.nodeType && !St.test(p + ye.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[ye.expando] ? e : new ye.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : ye.makeArray(t, [e]), d = ye.event.special[p] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, t))) {
                    if (!r && !d.noBubble && !ye.isWindow(i)) {
                        for (l = d.delegateType || p, St.test(l + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
                        s === (i.ownerDocument || oe) && f.push(s.defaultView || s.parentWindow || n)
                    }
                    for (a = 0;
                        (o = f[a++]) && !e.isPropagationStopped();) e.type = a > 1 ? l : d.bindType || p, u = (Re.get(o, "events") || {})[e.type] && Re.get(o, "handle"), u && u.apply(o, t), (u = c && o[c]) && u.apply && ze(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
                    return e.type = p, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), t) || !ze(i) || c && ye.isFunction(i[p]) && !ye.isWindow(i) && (s = i[c], s && (i[c] = null), ye.event.triggered = p, i[p](), ye.event.triggered = void 0, s && (i[c] = s)), e.result
                }
            },
            simulate: function(e, t, n) {
                var i = ye.extend(new ye.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                ye.event.trigger(i, null, t)
            }
        }), ye.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    ye.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return ye.event.trigger(e, t, n, !0)
            }
        }), ye.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            ye.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ye.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), ve.focusin = "onfocusin" in n, ve.focusin || ye.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                ye.event.simulate(t, e.target, ye.event.fix(e))
            };
            ye.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = Re.access(i, t);
                    r || i.addEventListener(e, n, !0), Re.access(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = Re.access(i, t) - 1;
                    r ? Re.access(i, t, r) : (i.removeEventListener(e, n, !0), Re.remove(i, t))
                }
            }
        });
        var Dt = n.location,
            At = ye.now(),
            It = /\?/;
        ye.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || ye.error("Invalid XML: " + e), t
        };
        var kt = /\[\]$/,
            Ot = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            Pt = /^(?:input|select|textarea|keygen)/i;
        ye.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    var n = ye.isFunction(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(e) || e.jquery && !ye.isPlainObject(e)) ye.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) Z(n, e[n], t, r);
            return i.join("&")
        }, ye.fn.extend({
            serialize: function() {
                return ye.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ye.prop(this, "elements");
                    return e ? ye.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ye(this).is(":disabled") && Pt.test(this.nodeName) && !Nt.test(e) && (this.checked || !Ue.test(e))
                }).map(function(e, t) {
                    var n = ye(this).val();
                    return null == n ? null : Array.isArray(n) ? ye.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ot, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ot, "\r\n")
                    }
                }).get()
            }
        });
        var Lt = /%20/g,
            Mt = /#.*$/,
            Ht = /([?&])_=[^&]*/,
            zt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            jt = /^(?:GET|HEAD)$/,
            Wt = /^\/\//,
            $t = {},
            Ft = {},
            Bt = "*/".concat("*"),
            Vt = oe.createElement("a");
        Vt.href = Dt.href, ye.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Dt.href,
                type: "GET",
                isLocal: Rt.test(Dt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Bt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": ye.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? ne(ne(e, ye.ajaxSettings), t) : ne(ye.ajaxSettings, e)
            },
            ajaxPrefilter: ee($t),
            ajaxTransport: ee(Ft),
            ajax: function(e, t) {
                function i(e, t, i, s) {
                    var c, f, p, w, E, T = t;
                    u || (u = !0, l && n.clearTimeout(l), r = void 0, o = s || "", _.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (w = ie(h, _, i)), w = re(h, w, _, c), c ? (h.ifModified && (E = _.getResponseHeader("Last-Modified"), E && (ye.lastModified[a] = E), (E = _.getResponseHeader("etag")) && (ye.etag[a] = E)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, f = w.data, p = w.error, c = !p)) : (p = T, !e && T || (T = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || T) + "", c ? v.resolveWith(g, [f, T, _]) : v.rejectWith(g, [_, T, p]), _.statusCode(b), b = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [_, h, c ? f : p]), y.fireWith(g, [_, T]), d && (m.trigger("ajaxComplete", [_, h]), --ye.active || ye.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, a, o, s, l, c, u, d, f, p, h = ye.ajaxSetup({}, t),
                    g = h.context || h,
                    m = h.context && (g.nodeType || g.jquery) ? ye(g) : ye.event,
                    v = ye.Deferred(),
                    y = ye.Callbacks("once memory"),
                    b = h.statusCode || {},
                    w = {},
                    E = {},
                    T = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (u) {
                                if (!s)
                                    for (s = {}; t = zt.exec(o);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return u ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, w[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == u && (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (u) _.always(e[_.status]);
                                else
                                    for (t in e) b[t] = [b[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || T;
                            return r && r.abort(t), i(0, t), this
                        }
                    };
                if (v.promise(_), h.url = ((e || h.url || Dt.href) + "").replace(Wt, Dt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Pe) || [""], null == h.crossDomain) {
                    c = oe.createElement("a");
                    try {
                        c.href = h.url, c.href = c.href, h.crossDomain = Vt.protocol + "//" + Vt.host != c.protocol + "//" + c.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = ye.param(h.data, h.traditional)), te($t, h, t, _), u) return _;
                d = ye.event && h.global, d && 0 == ye.active++ && ye.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !jt.test(h.type), a = h.url.replace(Mt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Lt, "+")) : (p = h.url.slice(a.length), h.data && (a += (It.test(a) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (a = a.replace(Ht, "$1"), p = (It.test(a) ? "&" : "?") + "_=" + At++ + p), h.url = a + p), h.ifModified && (ye.lastModified[a] && _.setRequestHeader("If-Modified-Since", ye.lastModified[a]), ye.etag[a] && _.setRequestHeader("If-None-Match", ye.etag[a])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && _.setRequestHeader("Content-Type", h.contentType), _.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]);
                for (f in h.headers) _.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, _, h) || u)) return _.abort();
                if (T = "abort", y.add(h.complete), _.done(h.success), _.fail(h.error), r = te(Ft, h, t, _)) {
                    if (_.readyState = 1, d && m.trigger("ajaxSend", [_, h]), u) return _;
                    h.async && h.timeout > 0 && (l = n.setTimeout(function() {
                        _.abort("timeout")
                    }, h.timeout));
                    try {
                        u = !1, r.send(w, i)
                    } catch (e) {
                        if (u) throw e;
                        i(-1, e)
                    }
                } else i(-1, "No Transport");
                return _
            },
            getJSON: function(e, t, n) {
                return ye.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return ye.get(e, void 0, t, "script")
            }
        }), ye.each(["get", "post"], function(e, t) {
            ye[t] = function(e, n, i, r) {
                return ye.isFunction(n) && (r = r || i, i = n, n = void 0), ye.ajax(ye.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, ye.isPlainObject(e) && e))
            }
        }), ye._evalUrl = function(e) {
            return ye.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, ye.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (ye.isFunction(e) && (e = e.call(this[0])), t = ye(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return ye.isFunction(e) ? this.each(function(t) {
                    ye(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ye(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ye.isFunction(e);
                return this.each(function(n) {
                    ye(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    ye(this).replaceWith(this.childNodes)
                }), this
            }
        }), ye.expr.pseudos.hidden = function(e) {
            return !ye.expr.pseudos.visible(e)
        }, ye.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, ye.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Gt = {
                0: 200,
                1223: 204
            },
            qt = ye.ajaxSettings.xhr();
        ve.cors = !!qt && "withCredentials" in qt, ve.ajax = qt = !!qt, ye.ajaxTransport(function(e) {
            var t, i;
            if (ve.cors || qt && !e.crossDomain) return {
                send: function(r, a) {
                    var o, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) s[o] = e.xhrFields[o];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) s.setRequestHeader(o, r[o]);
                    t = function(e) {
                        return function() {
                            t && (t = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Gt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), i = s.onerror = t("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                        4 === s.readyState && n.setTimeout(function() {
                            t && i()
                        })
                    }, t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), ye.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), ye.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return ye.globalEval(e), e
                }
            }
        }), ye.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), ye.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, r) {
                        t = ye("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), oe.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Yt = [],
            Ut = /(=)\?(?=&|$)|\?\?/;
        ye.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Yt.pop() || ye.expando + "_" + At++;
                return this[e] = !0, e
            }
        }), ye.ajaxPrefilter("json jsonp", function(e, t, i) {
            var r, a, o, s = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = ye.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (It.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return o || ye.error(r + " was not called"), o[0]
            }, e.dataTypes[0] = "json", a = n[r], n[r] = function() {
                o = arguments
            }, i.always(function() {
                void 0 === a ? ye(n).removeProp(r) : n[r] = a, e[r] && (e.jsonpCallback = t.jsonpCallback, Yt.push(r)), o && ye.isFunction(a) && a(o[0]), o = a = void 0
            }), "script"
        }), ve.createHTMLDocument = function() {
            var e = oe.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), ye.parseHTML = function(e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var i, r, a;
            return t || (ve.createHTMLDocument ? (t = oe.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = oe.location.href, t.head.appendChild(i)) : t = oe), r = De.exec(e), a = !n && [], r ? [t.createElement(r[1])] : (r = x([e], t, a), a && a.length && ye(a).remove(), ye.merge([], r.childNodes))
        }, ye.fn.load = function(e, t, n) {
            var i, r, a, o = this,
                s = e.indexOf(" ");
            return s > -1 && (i = Q(e.slice(s)), e = e.slice(0, s)), ye.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && ye.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                a = arguments, o.html(i ? ye("<div>").append(ye.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                o.each(function() {
                    n.apply(this, a || [e.responseText, t, e])
                })
            }), this
        }, ye.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ye.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ye.expr.pseudos.animated = function(e) {
            return ye.grep(ye.timers, function(t) {
                return e === t.elem
            }).length
        }, ye.offset = {
            setOffset: function(e, t, n) {
                var i, r, a, o, s, l, c, u = ye.css(e, "position"),
                    d = ye(e),
                    f = {};
                "static" === u && (e.style.position = "relative"), s = d.offset(), a = ye.css(e, "top"), l = ye.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (a + l).indexOf("auto") > -1, c ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), ye.isFunction(t) && (t = t.call(e, n, ye.extend({}, s))), null != t.top && (f.top = t.top - s.top + o), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
            }
        }, ye.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    ye.offset.setOffset(this, e, t)
                });
                var t, n, i, r, a = this[0];
                if (a) return a.getClientRects().length ? (i = a.getBoundingClientRect(), t = a.ownerDocument, n = t.documentElement, r = t.defaultView, {
                    top: i.top + r.pageYOffset - n.clientTop,
                    left: i.left + r.pageXOffset - n.clientLeft
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === ye.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), l(e[0], "html") || (i = e.offset()), i = {
                        top: i.top + ye.css(e[0], "borderTopWidth", !0),
                        left: i.left + ye.css(e[0], "borderLeftWidth", !0)
                    }), {
                        top: t.top - i.top - ye.css(n, "marginTop", !0),
                        left: t.left - i.left - ye.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === ye.css(e, "position");) e = e.offsetParent;
                    return e || Ze
                })
            }
        }), ye.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            ye.fn[e] = function(i) {
                return He(this, function(e, i, r) {
                    var a;
                    if (ye.isWindow(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === r) return a ? a[t] : e[i];
                    a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : e[i] = r
                }, e, i, arguments.length)
            }
        }), ye.each(["top", "left"], function(e, t) {
            ye.cssHooks[t] = z(ve.pixelPosition, function(e, n) {
                if (n) return n = H(e, t), ct.test(n) ? ye(e).position()[t] + "px" : n
            })
        }), ye.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            ye.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                ye.fn[i] = function(r, a) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === a ? "margin" : "border");
                    return He(this, function(t, n, r) {
                        var a;
                        return ye.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? ye.css(t, n, s) : ye.style(t, n, r, s)
                    }, t, o ? r : void 0, o)
                }
            })
        }), ye.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), ye.holdReady = function(e) {
            e ? ye.readyWait++ : ye.ready(!0)
        }, ye.isArray = Array.isArray, ye.parseJSON = JSON.parse, ye.nodeName = l, i = [], void 0 !== (r = function() {
            return ye
        }.apply(t, i)) && (e.exports = r);
        var Xt = n.jQuery,
            Kt = n.$;
        return ye.noConflict = function(e) {
            return n.$ === ye && (n.$ = Kt), e && n.jQuery === ye && (n.jQuery = Xt), ye
        }, a || (n.jQuery = n.$ = ye), ye
    })
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    if (n(147), navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var i = document.createElement("style");
        i.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.head.appendChild(i)
    }
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    (function(e) {
        e(document).ready(function() {
            function t() {
                //alert("Get data from the server")
            }

            function n() {
                var t = e(".header__menu .btn_transparent"),
                    n = e(".links-replace"),
                    i = e(".navigation-wrapper_style_full-length");
                if (!t.hasClass("btn_close")) {
                    var r = e(window).width() > 991 ? t.parents(".header__controls").outerHeight(!0) : t.parents(".header__menu").outerHeight(!0);
                    i.length > 0 && (r += i.outerHeight(!0));
                    var a = e(".page__browsehappy");
                    a.is(":visible") && (r += a.outerHeight(!0))
                }
                t.toggleClass("btn_close"), n.css({
                    opacity: 0
                }).toggleClass("links-replace_top"), t.hasClass("btn_close") && n.css({
                    top: r + "px"
                }), n.css({
                    opacity: 1
                })
            }

            function i() {
                var t = e(".navigation-wrapper"),
                    n = t.find(".btn_transparent"),
                    i = t.find(".navigation__list").parents(".navigation");
                n.toggleClass("btn_close"), i.toggleClass("navigation_collapse")
            }

            function r() {
                var t = e(".sidebar-menu__header-wrapper"),
                    n = t.find(".btn.btn_transparent"),
                    i = e(".sidebar-menu__menu-content");
                n.toggleClass("btn_close"), t.toggleClass("sidebar-menu__header-wrapper_open"), i.toggleClass("sidebar-menu__menu-content_collapse")
            }
            e(".header__menu").on("click", ".btn.btn_transparent", function() {
                n()
            }), e(".navigation__header").on("click", ".btn.btn_transparent", function() {
                i()
            }), e(".sidebar-menu__header-wrapper").on("click", ".btn.btn_transparent", function() {
                r()
            }), e(".footer").on("click", ".btn_feedback", function() {
                e(".modal_feedback").modal("show")
            }), 
                e(".tags__subscribe").on("click", ".btn_subscribe", function(t) {
                0 === e(".tags__subscribe").find(".input_mail-subscribe").val().length && t.preventDefault()
            }),
             e(".btn_calendar").on("click", ".calendar__day_number", function() {
                var t = "calendar__day_selected",
                    n = e(this).parents(".calendar"),
                    i = e(this).parents(".btn_calendar").find(".btn__text"),
                    r = n.find(".calendar__numbers"),
                    a = n.find(".calendar__month"),
                    o = n.find(".calendar__year");
                r.find(".calendar__day_selected").toggleClass(t), e(this).toggleClass(t);
                var s = e(this).parents(".calendar-from").length > 0 ? "С" : "ПО";
                i.text(s + " " + e(this).data("day") + "." + a.data("month") + "." + o.data("year")), n.removeClass("calendar_show")
            }).on("click", function(t) {
                var n = e(this).find(".calendar");
                e(t.target).parents(".calendar").length > 0 || e(t.target).hasClass("calendar") || (n.hasClass("calendar_show") ? e(".calendar").removeClass("calendar_show") : (e(".calendar").removeClass("calendar_show"), n.toggleClass("calendar_show")))
            }), e("body").on("click", function(t) {
                if (!e(t.target).hasClass("btn_transparent") && 0 === e(t.target).parents(".navigation").length) {
                    0 === e(".navigation-wrapper").find(".navigation_collapse").length && i()
                }
                if (!e(t.target).hasClass("btn_transparent") && 0 === e(t.target).parents(".sidebar-menu").length) {
                    0 === e(".sidebar-menu__menu-content_collapse").length && r()
                }
                0 === e(t.target).parents(".header__menu").length && 0 == e(t.target).parents(".links-replace").length && e(".links-replace").hasClass("links-replace_top") && n(), 0 !== e(t.target).parents(".share").length || e(t.target).hasClass("share") || e(t.target).hasClass("btn_share") || e(".share").addClass("share_hide"), 0 !== e(t.target).parents(".btn_calendar").length || e(t.target).hasClass("btn_calendar") || e(t.target).hasClass("calendar") || e(".calendar").removeClass("calendar_show")
            }).on("click", ".btn_sort", function() {
                var t = e(this).data("sort"); - 1 === location.search.indexOf(t) && (window.location.href = location.protocol + "//" + location.host + location.pathname + "?sort=" + t)
            }).on("click", ".btn_more", function() {
                t()
            }).on("click", ".btn_send", function(t) {
                //t.preventDefault();
                //var n = e(".modal_feedback form").serialize();
                //alert(n)
            }).on("click", ".btn_share", function() {
                e(".share").toggleClass("share_hide")
            })
        })
    }).call(t, n(0))
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    (function(e) {
        e(document).ready(function() {
            function t(e) {
                if(e == false || e == 'Поиск...'){
//$('.input_search').addClass('input_hidden');
                }else{
  location.href = "/search/?q="+e+"&s=Поиск";
            }
            }
            e(".settings").on("click", ".icon-search", function() {
                var n = e(this).parents(".settings__search"),
                    i = n.find(".input_search"),
                    r = i.css("z-index"),
                    a = i.val();
                r < 0 ? (i.show().removeClass("input_hidden"), n.addClass("search_show")) : t(a)
            }), e(".input_search").keypress(function(n) {
                13 == n.which && t(e(this).val())
            }), e("body").on("click", function(t) {
                var n = e(".settings__search"),
                    i = n.find(".input_search");
                !t.target.classList.contains("icon-search") && !t.target.classList.contains("input_search") && i.css("z-index") > 0 && (n.removeClass("search_show"), i.addClass("input_hidden"))
            })
        })
    }).call(t, n(0))
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    (function(e) {
        e(document).ready(function() {
            e(".sub-navigation").on("click", ".sub-navigation__item", function(t) {
                var n = "sub-navigation__item_selected";
                // e(this).hasClass(n) ? t.preventDefault() : (e(".sub-navigation__item_selected").removeClass(n), e(this).addClass(n))
            })
        })
    }).call(t, n(0))
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    (function(e) {
        e(document).ready(function() {
            e(".link_toggle-tags").on("click", function(t) {
                t.preventDefault(), e(".tags").toggleClass("tags_show"), e(this).text(e(".tags_show").is(":visible") ? e(this).data("hide") : e(this).data("show"))
            })
        })
    }).call(t, n(0))
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    (function(e, t) {
        ! function(e) {
            e.fn.grayScale = function(t) {
                function n(e, t, n) {
                    var i = document.createElement("canvas"),
                        r = i.getContext("2d"),
                        a = new Image;
                    a.src = e, i.width = t, i.height = n, r.drawImage(a, 0, 0);
                    for (var o = r.getImageData(0, 0, i.width, i.height), s = 0; s < o.height; s++)
                        for (var l = 0; l < o.width; l++) {
                            var c = 4 * s * o.width + 4 * l,
                                u = (o.data[c] + o.data[c + 1] + o.data[c + 2]) / 3;
                            o.data[c] = u, o.data[c + 1] = u, o.data[c + 2] = u
                        }
                    return r.putImageData(o, 0, 0, 0, 0, o.width, o.height), i.toDataURL()
                }
                return this.each(function() {
                    var i = e(this);
                    if ("IMG" == this.nodeName)
                        if (!1 === t) {
                            var r = i.attr("data-src");
                            r && (this.src = i.attr("data-src"), i.removeAttr("data-src"))
                        } else i.attr("data-src") || (i.attr("data-src", this.src), this.src = n(e(this).attr("src"), e(this).width(), e(this).height()))
                })
            }
        }(e), t(document).ready(function() {
            var e = "";
            t(".slider-banners__img").delay(1e3).grayScale().hover(function() {
                e = t(this).attr("src"), t(this).attr("src", t(this).data("src"))
            }, function() {
                t(this).attr("src", e)
            })
        })
    }).call(t, n(0), n(0))
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            var t = n(176),
                i = n.n(t);
            // new i.a(".slider_main", {
            //     slidesPerView: 1,
            //     slidesPerGroup: 1,
            //     spaceBetween: 40,
            //     loop: !0,
            //     loopFillGroupWithBlank: !0,
            //     autoplay: {
            //         delay: 3e3,
            //         disableOnInteraction: !1
            //     },
            //     setWrapperSize: !0,
            //     wrapperClass: "slider__wrapper",
            //     slideClass: "slider__slide",
            //     navigation: {
            //         nextEl: ".slider__arrow_arrow_right",
            //         prevEl: ".slider__arrow_arrow_left"
            //     },
            //     pagination: {
            //         el: ".slider__pagination",
            //         bulletClass: "slider__bullet",
            //         bulletActiveClass: "slider__bullet_selected",
            //         clickable: !0
            //     },
            //     on: {
            //         slideChange: function() {
            //             var t = "link_slide-view",
            //                 n = e(".main-slider__images-wrapper"),
            //                 i = this.realIndex,
            //                 r = "";
            //             n.find(".link_slide-view").toggleClass(t), n.find(".img").filter(function() {
            //                 r = e(this).parents(".link"), r.data("slide") == i && r.toggleClass(t)
            //             })
            //         }
            //     }
            // }), 
            new i.a(".slider-banners", {
                slidesPerView: 6,
                slidesPerGroup: 1,
                spaceBetween: 18,
                width: 968,
                loop: !0,
                loopFillGroupWithBlank: !0,
                autoplay: {
                    delay: 4e3,
                    disableOnInteraction: !1
                },
                wrapperClass: "slider-banners__wrapper",
                slideClass: "slider-banners__slide",
                navigation: {
                    nextEl: ".icon-arr_right",
                    prevEl: ".icon-arr_left"
                },
                breakpoints: {
                    575: {
                        slidesPerView: 1,
                        width: 290
                    },
                    767: {
                        slidesPerView: 2,
                        width: 335
                    },
                    991: {
                        slidesPerView: 3,
                        width: 500
                    },
                    1199: {
                        slidesPerView: 5,
                        width: 760
                    }
                }
            }), new i.a(".slider-blocks", {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 28,
                loop: !0,
                loopFillGroupWithBlank: !0,
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: !1
                },
                wrapperClass: "slider-blocks__wrapper",
                slideClass: "slider-blocks__slide",
                pagination: {
                    el: ".slider-blocks__pagination",
                    bulletClass: "slider__bullet",
                    bulletActiveClass: "slider__bullet_selected",
                    clickable: !0
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 70
                    }
                }
            }), new i.a(".slider-socials", {
                slidesPerView: 5,
                slidesPerGroup: 1,
                width: 970,
                loop: !0,
                loopFillGroupWithBlank: !0,
                autoplay: {
                    delay: 3e3,
                    disableOnInteraction: !1
                },
                wrapperClass: "slider-socials__wrapper",
                slideClass: "slider-socials__slide",
                navigation: {
                    nextEl: ".icon-arr_right",
                    prevEl: ".icon-arr_left"
                },
                breakpoints: {
                    575: {
                        slidesPerView: 1,
                        width: 290
                    },
                    767: {
                        slidesPerView: 2,
                        width: 380
                    },
                    991: {
                        slidesPerView: 3,
                        width: 560
                    },
                    1199: {
                        slidesPerView: 4,
                        width: 800
                    }
                }
            }), new i.a(".slider_gallery", {
                observer: !0,
                slidesPerView: 5,
                slidesPerGroup: 1,
                spaceBetween: 29,
                width: 945,
                loop: !0,
                loopFillGroupWithBlank: !0,
                wrapperClass: "photogallery__box_grid",
                slideClass: "photogallery__slide",
                navigation: {
                    nextEl: ".icon-arr_right",
                    prevEl: ".icon-arr_left"
                },
                breakpoints: {
                    575: {
                        slidesPerView: 1,
                        width: 165
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 29,
                        width: 360
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 29,
                        width: 555
                    },
                    1199: {
                        slidesPerView: 4,
                        spaceBetween: 29,
                        width: 747
                    }
                },
                on: {
                    init: function() {
                        // var t = e(this.wrapperEl).data("slides");
                        // e(this.wrapperEl).wrap('<div class="photogallery__box-wrapper"></div>'), "575" === this.currentBreakpoint && (e(".photogallery__slide .link").unwrap(), e(this.wrapperEl).find(".link").wrap('<div class="photogallery__slide"></div>'), this.update());
                        // var n = e(".photogallery__current").first();
                        // e(".photogallery__img-wrapper img").attr("src", n.data("img")), e(".photogallery__descr").text(n.data("descr")), e(".photogallery__cnt-num_cur").text("1"), e(".photogallery__cnt-num_all").text(t)
                    }
                }
            })
        }.call(t, n(0))
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    (function(e) {
        e(document).ready(function() {
            function t(e) {
                var t = e.find(".dropdown__list"),
                    n = t.outerHeight(!0);
                t.css({
                    top: -n + "px"
                }), e.toggleClass("dropdown_open")
            }

            function n(e) {
                e.toggleClass("dropdown_open")
            }
            e("body").on("click", function(i) {
                e(".dropdown__list:hidden").length < 1 ? n(e(".dropdown_feedback")) : i.target.classList.contains("dropdown_feedback") && t(e(".dropdown_feedback"))
            })
        })
    }).call(t, n(0))
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    (function(e) {
        e(document).ready(function() {
            e("body").on("click", ".card", function(t) {
                if (e(this).data("toggle")) {
                    var n = e(this).data("type"),
                        i = e(".modal_media");
                    i.find(".modal__body").css({
                        display: "none"
                    }), i.find(".modal__body_" + n).css({
                        display: "block"
                    }), i.modal("show")
                } else {
                    var r = e(t.target);
                    if (r.hasClass("mark")) {
                        t.preventDefault();
                        var a = e(".tags"),
                            o = r.data("tag");
                        a.hasClass("tags_show") || e(".link_toggle-tags").click(), e("html, body").animate({
                            scrollTop: e(".events-page__content").offset().top
                        }, 350), e(".tags__item").each(function() {
                            if (e(this).data("tag") === o) return e(this).find(".link").click(), !1
                        })
                    }
                }
            })
        })
    }).call(t, n(0))
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    n(146), n(177), n(184), n(187), e.exports = n(272)
}, function(e, t, n) {
    n(1), n(2), n(3), n(4), n(5), n(6), n(7), n(8), n(9), n(10), n(11), n(104), n(12), n(13), n(14), n(15), n(16), n(17), n(18), n(19), n(20), n(21), n(22), n(105), n(23), n(24), n(25), n(26), n(27), n(28), n(29), n(30), n(31), n(32), n(33), n(34), n(35), n(36), n(37), n(38), n(39), n(40), n(41), n(42), n(43), n(106), n(107), n(108), n(109), n(110), n(111), n(112), n(113), n(114), n(115), n(116), n(117), n(118), n(44), n(45), n(119), n(46), n(47), n(48), n(49), n(120), n(123), n(124), n(139), n(150), n(140), n(151), n(152), n(153), n(154), n(155), n(156), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(165), n(166), n(167), n(168), n(169), n(170), n(171), n(172), n(173), n(50), n(174), n(51), n(141), n(125), n(126), n(127), n(128), n(142), n(129), n(130), n(175), n(121), n(122), n(131), n(132), n(133), n(134), n(135), n(136), n(137), n(138), n(52), n(53), n(54), n(55), n(56), n(57), n(58), n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(66), n(67), n(68), n(69), n(70), n(71), n(72), n(73), n(74), n(75), n(76), n(77), n(78), n(79), n(80), n(81), n(82), n(83), n(84), n(85), n(86), n(87), n(88), n(89), n(90), n(91), n(92), n(93), n(94), n(95), n(96), n(97), n(98), n(99), n(100), n(101), n(102), n(103)
}, function(e, t, n) {
    (function(e, t) {
        ! function(e, t, n) {
            "use strict";

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function r(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }

            function a(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }
            t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
            var o = function() {
                    function e(e) {
                        return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
                    }

                    function n() {
                        return {
                            bindType: a.end,
                            delegateType: a.end,
                            handle: function(e) {
                                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                            }
                        }
                    }

                    function i() {
                        if (window.QUnit) return !1;
                        var e = document.createElement("bootstrap");
                        for (var t in o)
                            if (void 0 !== e.style[t]) return {
                                end: o[t]
                            };
                        return !1
                    }

                    function r(e) {
                        var n = this,
                            i = !1;
                        return t(this).one(s.TRANSITION_END, function() {
                            i = !0
                        }), setTimeout(function() {
                            i || s.triggerTransitionEnd(n)
                        }, e), this
                    }
                    var a = !1,
                        o = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        },
                        s = {
                            TRANSITION_END: "bsTransitionEnd",
                            getUID: function(e) {
                                do {
                                    e += ~~(1e6 * Math.random())
                                } while (document.getElementById(e));
                                return e
                            },
                            getSelectorFromElement: function(e) {
                                var n = e.getAttribute("data-target");
                                n && "#" !== n || (n = e.getAttribute("href") || "");
                                try {
                                    return t(document).find(n).length > 0 ? n : null
                                } catch (e) {
                                    return null
                                }
                            },
                            reflow: function(e) {
                                return e.offsetHeight
                            },
                            triggerTransitionEnd: function(e) {
                                t(e).trigger(a.end)
                            },
                            supportsTransitionEnd: function() {
                                return Boolean(a)
                            },
                            isElement: function(e) {
                                return (e[0] || e).nodeType
                            },
                            typeCheckConfig: function(t, n, i) {
                                for (var r in i)
                                    if (Object.prototype.hasOwnProperty.call(i, r)) {
                                        var a = i[r],
                                            o = n[r],
                                            l = o && s.isElement(o) ? "element" : e(o);
                                        if (!new RegExp(a).test(l)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + a + '".')
                                    }
                            }
                        };
                    return function() {
                        a = i(), t.fn.emulateTransitionEnd = r, s.supportsTransitionEnd() && (t.event.special[s.TRANSITION_END] = n())
                    }(), s
                }(),
                s = r,
                l = a,
                c = function() {
                    var e = "alert",
                        n = t.fn[e],
                        i = {
                            DISMISS: '[data-dismiss="alert"]'
                        },
                        r = {
                            CLOSE: "close.bs.alert",
                            CLOSED: "closed.bs.alert",
                            CLICK_DATA_API: "click.bs.alert.data-api"
                        },
                        a = {
                            ALERT: "alert",
                            FADE: "fade",
                            SHOW: "show"
                        },
                        l = function() {
                            function e(e) {
                                this._element = e
                            }
                            var n = e.prototype;
                            return n.close = function(e) {
                                e = e || this._element;
                                var t = this._getRootElement(e);
                                this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                            }, n.dispose = function() {
                                t.removeData(this._element, "bs.alert"), this._element = null
                            }, n._getRootElement = function(e) {
                                var n = o.getSelectorFromElement(e),
                                    i = !1;
                                return n && (i = t(n)[0]), i || (i = t(e).closest("." + a.ALERT)[0]), i
                            }, n._triggerCloseEvent = function(e) {
                                var n = t.Event(r.CLOSE);
                                return t(e).trigger(n), n
                            }, n._removeElement = function(e) {
                                var n = this;
                                if (t(e).removeClass(a.SHOW), !o.supportsTransitionEnd() || !t(e).hasClass(a.FADE)) return void this._destroyElement(e);
                                t(e).one(o.TRANSITION_END, function(t) {
                                    return n._destroyElement(e, t)
                                }).emulateTransitionEnd(150)
                            }, n._destroyElement = function(e) {
                                t(e).detach().trigger(r.CLOSED).remove()
                            }, e._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var i = t(this),
                                        r = i.data("bs.alert");
                                    r || (r = new e(this), i.data("bs.alert", r)), "close" === n && r[n](this)
                                })
                            }, e._handleDismiss = function(e) {
                                return function(t) {
                                    t && t.preventDefault(), e.close(this)
                                }
                            }, s(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-beta.2"
                                }
                            }]), e
                        }();
                    return t(document).on(r.CLICK_DATA_API, i.DISMISS, l._handleDismiss(new l)), t.fn[e] = l._jQueryInterface, t.fn[e].Constructor = l, t.fn[e].noConflict = function() {
                        return t.fn[e] = n, l._jQueryInterface
                    }, l
                }(),
                u = function() {
                    var e = "button",
                        n = t.fn[e],
                        i = {
                            ACTIVE: "active",
                            BUTTON: "btn",
                            FOCUS: "focus"
                        },
                        r = {
                            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                            DATA_TOGGLE: '[data-toggle="buttons"]',
                            INPUT: "input",
                            ACTIVE: ".active",
                            BUTTON: ".btn"
                        },
                        a = {
                            CLICK_DATA_API: "click.bs.button.data-api",
                            FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
                        },
                        o = function() {
                            function e(e) {
                                this._element = e
                            }
                            var n = e.prototype;
                            return n.toggle = function() {
                                var e = !0,
                                    n = !0,
                                    a = t(this._element).closest(r.DATA_TOGGLE)[0];
                                if (a) {
                                    var o = t(this._element).find(r.INPUT)[0];
                                    if (o) {
                                        if ("radio" === o.type)
                                            if (o.checked && t(this._element).hasClass(i.ACTIVE)) e = !1;
                                            else {
                                                var s = t(a).find(r.ACTIVE)[0];
                                                s && t(s).removeClass(i.ACTIVE)
                                            }
                                        if (e) {
                                            if (o.hasAttribute("disabled") || a.hasAttribute("disabled") || o.classList.contains("disabled") || a.classList.contains("disabled")) return;
                                            o.checked = !t(this._element).hasClass(i.ACTIVE), t(o).trigger("change")
                                        }
                                        o.focus(), n = !1
                                    }
                                }
                                n && this._element.setAttribute("aria-pressed", !t(this._element).hasClass(i.ACTIVE)), e && t(this._element).toggleClass(i.ACTIVE)
                            }, n.dispose = function() {
                                t.removeData(this._element, "bs.button"), this._element = null
                            }, e._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var i = t(this).data("bs.button");
                                    i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
                                })
                            }, s(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-beta.2"
                                }
                            }]), e
                        }();
                    return t(document).on(a.CLICK_DATA_API, r.DATA_TOGGLE_CARROT, function(e) {
                        e.preventDefault();
                        var n = e.target;
                        t(n).hasClass(i.BUTTON) || (n = t(n).closest(r.BUTTON)), o._jQueryInterface.call(t(n), "toggle")
                    }).on(a.FOCUS_BLUR_DATA_API, r.DATA_TOGGLE_CARROT, function(e) {
                        var n = t(e.target).closest(r.BUTTON)[0];
                        t(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(e.type))
                    }), t.fn[e] = o._jQueryInterface, t.fn[e].Constructor = o, t.fn[e].noConflict = function() {
                        return t.fn[e] = n, o._jQueryInterface
                    }, o
                }(),
                d = function() {
                    var e = "carousel",
                        n = "bs.carousel",
                        i = "." + n,
                        r = t.fn[e],
                        a = {
                            interval: 5e3,
                            keyboard: !0,
                            slide: !1,
                            pause: "hover",
                            wrap: !0
                        },
                        l = {
                            interval: "(number|boolean)",
                            keyboard: "boolean",
                            slide: "(boolean|string)",
                            pause: "(string|boolean)",
                            wrap: "boolean"
                        },
                        c = {
                            NEXT: "next",
                            PREV: "prev",
                            LEFT: "left",
                            RIGHT: "right"
                        },
                        u = {
                            SLIDE: "slide" + i,
                            SLID: "slid" + i,
                            KEYDOWN: "keydown" + i,
                            MOUSEENTER: "mouseenter" + i,
                            MOUSELEAVE: "mouseleave" + i,
                            TOUCHEND: "touchend" + i,
                            LOAD_DATA_API: "load.bs.carousel.data-api",
                            CLICK_DATA_API: "click.bs.carousel.data-api"
                        },
                        d = {
                            CAROUSEL: "carousel",
                            ACTIVE: "active",
                            SLIDE: "slide",
                            RIGHT: "carousel-item-right",
                            LEFT: "carousel-item-left",
                            NEXT: "carousel-item-next",
                            PREV: "carousel-item-prev",
                            ITEM: "carousel-item"
                        },
                        f = {
                            ACTIVE: ".active",
                            ACTIVE_ITEM: ".active.carousel-item",
                            ITEM: ".carousel-item",
                            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                            INDICATORS: ".carousel-indicators",
                            DATA_SLIDE: "[data-slide], [data-slide-to]",
                            DATA_RIDE: '[data-ride="carousel"]'
                        },
                        p = function() {
                            function r(e, n) {
                                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(f.INDICATORS)[0], this._addEventListeners()
                            }
                            var p = r.prototype;
                            return p.next = function() {
                                this._isSliding || this._slide(c.NEXT)
                            }, p.nextWhenVisible = function() {
                                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                            }, p.prev = function() {
                                this._isSliding || this._slide(c.PREV)
                            }, p.pause = function(e) {
                                e || (this._isPaused = !0), t(this._element).find(f.NEXT_PREV)[0] && o.supportsTransitionEnd() && (o.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                            }, p.cycle = function(e) {
                                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                            }, p.to = function(e) {
                                var n = this;
                                this._activeElement = t(this._element).find(f.ACTIVE_ITEM)[0];
                                var i = this._getItemIndex(this._activeElement);
                                if (!(e > this._items.length - 1 || e < 0)) {
                                    if (this._isSliding) return void t(this._element).one(u.SLID, function() {
                                        return n.to(e)
                                    });
                                    if (i === e) return this.pause(), void this.cycle();
                                    var r = e > i ? c.NEXT : c.PREV;
                                    this._slide(r, this._items[e])
                                }
                            }, p.dispose = function() {
                                t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                            }, p._getConfig = function(n) {
                                return n = t.extend({}, a, n), o.typeCheckConfig(e, n, l), n
                            }, p._addEventListeners = function() {
                                var e = this;
                                this._config.keyboard && t(this._element).on(u.KEYDOWN, function(t) {
                                    return e._keydown(t)
                                }), "hover" === this._config.pause && (t(this._element).on(u.MOUSEENTER, function(t) {
                                    return e.pause(t)
                                }).on(u.MOUSELEAVE, function(t) {
                                    return e.cycle(t)
                                }), "ontouchstart" in document.documentElement && t(this._element).on(u.TOUCHEND, function() {
                                    e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                        return e.cycle(t)
                                    }, 500 + e._config.interval)
                                }))
                            }, p._keydown = function(e) {
                                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                                    case 37:
                                        e.preventDefault(), this.prev();
                                        break;
                                    case 39:
                                        e.preventDefault(), this.next();
                                        break;
                                    default:
                                        return
                                }
                            }, p._getItemIndex = function(e) {
                                return this._items = t.makeArray(t(e).parent().find(f.ITEM)), this._items.indexOf(e)
                            }, p._getItemByDirection = function(e, t) {
                                var n = e === c.NEXT,
                                    i = e === c.PREV,
                                    r = this._getItemIndex(t),
                                    a = this._items.length - 1;
                                if ((i && 0 === r || n && r === a) && !this._config.wrap) return t;
                                var o = e === c.PREV ? -1 : 1,
                                    s = (r + o) % this._items.length;
                                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                            }, p._triggerSlideEvent = function(e, n) {
                                var i = this._getItemIndex(e),
                                    r = this._getItemIndex(t(this._element).find(f.ACTIVE_ITEM)[0]),
                                    a = t.Event(u.SLIDE, {
                                        relatedTarget: e,
                                        direction: n,
                                        from: r,
                                        to: i
                                    });
                                return t(this._element).trigger(a), a
                            }, p._setActiveIndicatorElement = function(e) {
                                if (this._indicatorsElement) {
                                    t(this._indicatorsElement).find(f.ACTIVE).removeClass(d.ACTIVE);
                                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                                    n && t(n).addClass(d.ACTIVE)
                                }
                            }, p._slide = function(e, n) {
                                var i, r, a, s = this,
                                    l = t(this._element).find(f.ACTIVE_ITEM)[0],
                                    p = this._getItemIndex(l),
                                    h = n || l && this._getItemByDirection(e, l),
                                    g = this._getItemIndex(h),
                                    m = Boolean(this._interval);
                                if (e === c.NEXT ? (i = d.LEFT, r = d.NEXT, a = c.LEFT) : (i = d.RIGHT, r = d.PREV, a = c.RIGHT), h && t(h).hasClass(d.ACTIVE)) return void(this._isSliding = !1);
                                if (!this._triggerSlideEvent(h, a).isDefaultPrevented() && l && h) {
                                    this._isSliding = !0, m && this.pause(), this._setActiveIndicatorElement(h);
                                    var v = t.Event(u.SLID, {
                                        relatedTarget: h,
                                        direction: a,
                                        from: p,
                                        to: g
                                    });
                                    o.supportsTransitionEnd() && t(this._element).hasClass(d.SLIDE) ? (t(h).addClass(r), o.reflow(h), t(l).addClass(i), t(h).addClass(i), t(l).one(o.TRANSITION_END, function() {
                                        t(h).removeClass(i + " " + r).addClass(d.ACTIVE), t(l).removeClass(d.ACTIVE + " " + r + " " + i), s._isSliding = !1, setTimeout(function() {
                                            return t(s._element).trigger(v)
                                        }, 0)
                                    }).emulateTransitionEnd(600)) : (t(l).removeClass(d.ACTIVE), t(h).addClass(d.ACTIVE), this._isSliding = !1, t(this._element).trigger(v)), m && this.cycle()
                                }
                            }, r._jQueryInterface = function(e) {
                                return this.each(function() {
                                    var i = t(this).data(n),
                                        o = t.extend({}, a, t(this).data());
                                    "object" == typeof e && t.extend(o, e);
                                    var s = "string" == typeof e ? e : o.slide;
                                    if (i || (i = new r(this, o), t(this).data(n, i)), "number" == typeof e) i.to(e);
                                    else if ("string" == typeof s) {
                                        if (void 0 === i[s]) throw new Error('No method named "' + s + '"');
                                        i[s]()
                                    } else o.interval && (i.pause(), i.cycle())
                                })
                            }, r._dataApiClickHandler = function(e) {
                                var i = o.getSelectorFromElement(this);
                                if (i) {
                                    var a = t(i)[0];
                                    if (a && t(a).hasClass(d.CAROUSEL)) {
                                        var s = t.extend({}, t(a).data(), t(this).data()),
                                            l = this.getAttribute("data-slide-to");
                                        l && (s.interval = !1), r._jQueryInterface.call(t(a), s), l && t(a).data(n).to(l), e.preventDefault()
                                    }
                                }
                            }, s(r, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-beta.2"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return a
                                }
                            }]), r
                        }();
                    return t(document).on(u.CLICK_DATA_API, f.DATA_SLIDE, p._dataApiClickHandler), t(window).on(u.LOAD_DATA_API, function() {
                        t(f.DATA_RIDE).each(function() {
                            var e = t(this);
                            p._jQueryInterface.call(e, e.data())
                        })
                    }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function() {
                        return t.fn[e] = r, p._jQueryInterface
                    }, p
                }(),
                f = function() {
                    var e = "collapse",
                        n = "bs.collapse",
                        i = t.fn[e],
                        r = {
                            toggle: !0,
                            parent: ""
                        },
                        a = {
                            toggle: "boolean",
                            parent: "(string|element)"
                        },
                        l = {
                            SHOW: "show.bs.collapse",
                            SHOWN: "shown.bs.collapse",
                            HIDE: "hide.bs.collapse",
                            HIDDEN: "hidden.bs.collapse",
                            CLICK_DATA_API: "click.bs.collapse.data-api"
                        },
                        c = {
                            SHOW: "show",
                            COLLAPSE: "collapse",
                            COLLAPSING: "collapsing",
                            COLLAPSED: "collapsed"
                        },
                        u = {
                            WIDTH: "width",
                            HEIGHT: "height"
                        },
                        d = {
                            ACTIVES: ".show, .collapsing",
                            DATA_TOGGLE: '[data-toggle="collapse"]'
                        },
                        f = function() {
                            function i(e, n) {
                                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                                for (var i = t(d.DATA_TOGGLE), r = 0; r < i.length; r++) {
                                    var a = i[r],
                                        s = o.getSelectorFromElement(a);
                                    null !== s && t(s).filter(e).length > 0 && this._triggerArray.push(a)
                                }
                                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                            }
                            var f = i.prototype;
                            return f.toggle = function() {
                                t(this._element).hasClass(c.SHOW) ? this.hide() : this.show()
                            }, f.show = function() {
                                var e = this;
                                if (!this._isTransitioning && !t(this._element).hasClass(c.SHOW)) {
                                    var r, a;
                                    if (this._parent && (r = t.makeArray(t(this._parent).children().children(d.ACTIVES)), r.length || (r = null)), !(r && (a = t(r).data(n)) && a._isTransitioning)) {
                                        var s = t.Event(l.SHOW);
                                        if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
                                            r && (i._jQueryInterface.call(t(r), "hide"), a || t(r).data(n, null));
                                            var u = this._getDimension();
                                            t(this._element).removeClass(c.COLLAPSE).addClass(c.COLLAPSING), this._element.style[u] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(c.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                            var f = function() {
                                                t(e._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).addClass(c.SHOW), e._element.style[u] = "", e.setTransitioning(!1), t(e._element).trigger(l.SHOWN)
                                            };
                                            if (!o.supportsTransitionEnd()) return void f();
                                            var p = u[0].toUpperCase() + u.slice(1),
                                                h = "scroll" + p;
                                            t(this._element).one(o.TRANSITION_END, f).emulateTransitionEnd(600), this._element.style[u] = this._element[h] + "px"
                                        }
                                    }
                                }
                            }, f.hide = function() {
                                var e = this;
                                if (!this._isTransitioning && t(this._element).hasClass(c.SHOW)) {
                                    var n = t.Event(l.HIDE);
                                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                                        var i = this._getDimension();
                                        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", o.reflow(this._element), t(this._element).addClass(c.COLLAPSING).removeClass(c.COLLAPSE).removeClass(c.SHOW), this._triggerArray.length)
                                            for (var r = 0; r < this._triggerArray.length; r++) {
                                                var a = this._triggerArray[r],
                                                    s = o.getSelectorFromElement(a);
                                                if (null !== s) {
                                                    var u = t(s);
                                                    u.hasClass(c.SHOW) || t(a).addClass(c.COLLAPSED).attr("aria-expanded", !1)
                                                }
                                            }
                                        this.setTransitioning(!0);
                                        var d = function() {
                                            e.setTransitioning(!1), t(e._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).trigger(l.HIDDEN)
                                        };
                                        if (this._element.style[i] = "", !o.supportsTransitionEnd()) return void d();
                                        t(this._element).one(o.TRANSITION_END, d).emulateTransitionEnd(600)
                                    }
                                }
                            }, f.setTransitioning = function(e) {
                                this._isTransitioning = e
                            }, f.dispose = function() {
                                t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                            }, f._getConfig = function(n) {
                                return n = t.extend({}, r, n), n.toggle = Boolean(n.toggle), o.typeCheckConfig(e, n, a), n
                            }, f._getDimension = function() {
                                return t(this._element).hasClass(u.WIDTH) ? u.WIDTH : u.HEIGHT
                            }, f._getParent = function() {
                                var e = this,
                                    n = null;
                                o.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                                return t(n).find(r).each(function(t, n) {
                                    e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                                }), n
                            }, f._addAriaAndCollapsedClass = function(e, n) {
                                if (e) {
                                    var i = t(e).hasClass(c.SHOW);
                                    n.length && t(n).toggleClass(c.COLLAPSED, !i).attr("aria-expanded", i)
                                }
                            }, i._getTargetFromElement = function(e) {
                                var n = o.getSelectorFromElement(e);
                                return n ? t(n)[0] : null
                            }, i._jQueryInterface = function(e) {
                                return this.each(function() {
                                    var a = t(this),
                                        o = a.data(n),
                                        s = t.extend({}, r, a.data(), "object" == typeof e && e);
                                    if (!o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || (o = new i(this, s), a.data(n, o)), "string" == typeof e) {
                                        if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                                        o[e]()
                                    }
                                })
                            }, s(i, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-beta.2"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return r
                                }
                            }]), i
                        }();
                    return t(document).on(l.CLICK_DATA_API, d.DATA_TOGGLE, function(e) {
                        "A" === e.currentTarget.tagName && e.preventDefault();
                        var i = t(this),
                            r = o.getSelectorFromElement(this);
                        t(r).each(function() {
                            var e = t(this),
                                r = e.data(n),
                                a = r ? "toggle" : i.data();
                            f._jQueryInterface.call(e, a)
                        })
                    }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function() {
                        return t.fn[e] = i, f._jQueryInterface
                    }, f
                }(),
                p = function() {
                    if (void 0 === n) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                    var e = "dropdown",
                        i = "bs.dropdown",
                        r = "." + i,
                        a = t.fn[e],
                        l = new RegExp("38|40|27"),
                        c = {
                            HIDE: "hide" + r,
                            HIDDEN: "hidden" + r,
                            SHOW: "show" + r,
                            SHOWN: "shown" + r,
                            CLICK: "click" + r,
                            CLICK_DATA_API: "click.bs.dropdown.data-api",
                            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                            KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
                        },
                        u = {
                            DISABLED: "disabled",
                            SHOW: "show",
                            DROPUP: "dropup",
                            MENURIGHT: "dropdown-menu-right",
                            MENULEFT: "dropdown-menu-left"
                        },
                        d = {
                            DATA_TOGGLE: '[data-toggle="dropdown"]',
                            FORM_CHILD: ".dropdown form",
                            MENU: ".dropdown-menu",
                            NAVBAR_NAV: ".navbar-nav",
                            VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)"
                        },
                        f = {
                            TOP: "top-start",
                            TOPEND: "top-end",
                            BOTTOM: "bottom-start",
                            BOTTOMEND: "bottom-end"
                        },
                        p = {
                            offset: 0,
                            flip: !0
                        },
                        h = {
                            offset: "(number|string|function)",
                            flip: "boolean"
                        },
                        g = function() {
                            function a(e, t) {
                                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                            }
                            var g = a.prototype;
                            return g.toggle = function() {
                                if (!this._element.disabled && !t(this._element).hasClass(u.DISABLED)) {
                                    var e = a._getParentFromElement(this._element),
                                        i = t(this._menu).hasClass(u.SHOW);
                                    if (a._clearMenus(), !i) {
                                        var r = {
                                                relatedTarget: this._element
                                            },
                                            o = t.Event(c.SHOW, r);
                                        if (t(e).trigger(o), !o.isDefaultPrevented()) {
                                            var s = this._element;
                                            t(e).hasClass(u.DROPUP) && (t(this._menu).hasClass(u.MENULEFT) || t(this._menu).hasClass(u.MENURIGHT)) && (s = e), this._popper = new n(s, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !t(e).closest(d.NAVBAR_NAV).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(u.SHOW), t(e).toggleClass(u.SHOW).trigger(t.Event(c.SHOWN, r))
                                        }
                                    }
                                }
                            }, g.dispose = function() {
                                t.removeData(this._element, i), t(this._element).off(r), this._element = null, this._menu = null, null !== this._popper && this._popper.destroy(), this._popper = null
                            }, g.update = function() {
                                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                            }, g._addEventListeners = function() {
                                var e = this;
                                t(this._element).on(c.CLICK, function(t) {
                                    t.preventDefault(), t.stopPropagation(), e.toggle()
                                })
                            }, g._getConfig = function(n) {
                                return n = t.extend({}, this.constructor.Default, t(this._element).data(), n), o.typeCheckConfig(e, n, this.constructor.DefaultType), n
                            }, g._getMenuElement = function() {
                                if (!this._menu) {
                                    var e = a._getParentFromElement(this._element);
                                    this._menu = t(e).find(d.MENU)[0]
                                }
                                return this._menu
                            }, g._getPlacement = function() {
                                var e = t(this._element).parent(),
                                    n = f.BOTTOM;
                                return e.hasClass(u.DROPUP) ? (n = f.TOP, t(this._menu).hasClass(u.MENURIGHT) && (n = f.TOPEND)) : t(this._menu).hasClass(u.MENURIGHT) && (n = f.BOTTOMEND), n
                            }, g._detectNavbar = function() {
                                return t(this._element).closest(".navbar").length > 0
                            }, g._getPopperConfig = function() {
                                var e = this,
                                    n = {};
                                "function" == typeof this._config.offset ? n.fn = function(n) {
                                    return n.offsets = t.extend({}, n.offsets, e._config.offset(n.offsets) || {}), n
                                } : n.offset = this._config.offset;
                                var i = {
                                    placement: this._getPlacement(),
                                    modifiers: {
                                        offset: n,
                                        flip: {
                                            enabled: this._config.flip
                                        }
                                    }
                                };
                                return this._inNavbar && (i.modifiers.applyStyle = {
                                    enabled: !this._inNavbar
                                }), i
                            }, a._jQueryInterface = function(e) {
                                return this.each(function() {
                                    var n = t(this).data(i),
                                        r = "object" == typeof e ? e : null;
                                    if (n || (n = new a(this, r), t(this).data(i, n)), "string" == typeof e) {
                                        if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                                        n[e]()
                                    }
                                })
                            }, a._clearMenus = function(e) {
                                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                                    for (var n = t.makeArray(t(d.DATA_TOGGLE)), r = 0; r < n.length; r++) {
                                        var o = a._getParentFromElement(n[r]),
                                            s = t(n[r]).data(i),
                                            l = {
                                                relatedTarget: n[r]
                                            };
                                        if (s) {
                                            var f = s._menu;
                                            if (t(o).hasClass(u.SHOW) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(o, e.target))) {
                                                var p = t.Event(c.HIDE, l);
                                                t(o).trigger(p), p.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[r].setAttribute("aria-expanded", "false"), t(f).removeClass(u.SHOW), t(o).removeClass(u.SHOW).trigger(t.Event(c.HIDDEN, l)))
                                            }
                                        }
                                    }
                            }, a._getParentFromElement = function(e) {
                                var n, i = o.getSelectorFromElement(e);
                                return i && (n = t(i)[0]), n || e.parentNode
                            }, a._dataApiKeydownHandler = function(e) {
                                if (!(!l.test(e.which) || /button/i.test(e.target.tagName) && 32 === e.which || /input|textarea/i.test(e.target.tagName) || (e.preventDefault(), e.stopPropagation(), this.disabled || t(this).hasClass(u.DISABLED)))) {
                                    var n = a._getParentFromElement(this),
                                        i = t(n).hasClass(u.SHOW);
                                    if (!i && (27 !== e.which || 32 !== e.which) || i && (27 === e.which || 32 === e.which)) {
                                        if (27 === e.which) {
                                            var r = t(n).find(d.DATA_TOGGLE)[0];
                                            t(r).trigger("focus")
                                        }
                                        return void t(this).trigger("click")
                                    }
                                    var o = t(n).find(d.VISIBLE_ITEMS).get();
                                    if (o.length) {
                                        var s = o.indexOf(e.target);
                                        38 === e.which && s > 0 && s--, 40 === e.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                                    }
                                }
                            }, s(a, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-beta.2"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return p
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return h
                                }
                            }]), a
                        }();
                    return t(document).on(c.KEYDOWN_DATA_API, d.DATA_TOGGLE, g._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, d.MENU, g._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, g._clearMenus).on(c.CLICK_DATA_API, d.DATA_TOGGLE, function(e) {
                        e.preventDefault(), e.stopPropagation(), g._jQueryInterface.call(t(this), "toggle")
                    }).on(c.CLICK_DATA_API, d.FORM_CHILD, function(e) {
                        e.stopPropagation()
                    }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
                        return t.fn[e] = a, g._jQueryInterface
                    }, g
                }(),
                h = function() {
                    var e = "modal",
                        n = ".bs.modal",
                        i = t.fn[e],
                        r = {
                            backdrop: !0,
                            keyboard: !0,
                            focus: !0,
                            show: !0
                        },
                        a = {
                            backdrop: "(boolean|string)",
                            keyboard: "boolean",
                            focus: "boolean",
                            show: "boolean"
                        },
                        l = {
                            HIDE: "hide.bs.modal",
                            HIDDEN: "hidden.bs.modal",
                            SHOW: "show.bs.modal",
                            SHOWN: "shown.bs.modal",
                            FOCUSIN: "focusin.bs.modal",
                            RESIZE: "resize.bs.modal",
                            CLICK_DISMISS: "click.dismiss.bs.modal",
                            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                            CLICK_DATA_API: "click.bs.modal.data-api"
                        },
                        c = {
                            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                            BACKDROP: "modal-backdrop",
                            OPEN: "modal-open",
                            FADE: "fade",
                            SHOW: "show"
                        },
                        u = {
                            DIALOG: ".modal-dialog",
                            DATA_TOGGLE: '[data-toggle="modal"]',
                            DATA_DISMISS: '[data-dismiss="modal"]',
                            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                            STICKY_CONTENT: ".sticky-top",
                            NAVBAR_TOGGLER: ".navbar-toggler"
                        },
                        d = function() {
                            function i(e, n) {
                                this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(u.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                            }
                            var d = i.prototype;
                            return d.toggle = function(e) {
                                return this._isShown ? this.hide() : this.show(e)
                            }, d.show = function(e) {
                                var n = this;
                                if (!this._isTransitioning && !this._isShown) {
                                    o.supportsTransitionEnd() && t(this._element).hasClass(c.FADE) && (this._isTransitioning = !0);
                                    var i = t.Event(l.SHOW, {
                                        relatedTarget: e
                                    });
                                    t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(c.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(l.CLICK_DISMISS, u.DATA_DISMISS, function(e) {
                                        return n.hide(e)
                                    }), t(this._dialog).on(l.MOUSEDOWN_DISMISS, function() {
                                        t(n._element).one(l.MOUSEUP_DISMISS, function(e) {
                                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                        })
                                    }), this._showBackdrop(function() {
                                        return n._showElement(e)
                                    }))
                                }
                            }, d.hide = function(e) {
                                var n = this;
                                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                                    var i = t.Event(l.HIDE);
                                    if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                        this._isShown = !1;
                                        var r = o.supportsTransitionEnd() && t(this._element).hasClass(c.FADE);
                                        r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(l.FOCUSIN), t(this._element).removeClass(c.SHOW), t(this._element).off(l.CLICK_DISMISS), t(this._dialog).off(l.MOUSEDOWN_DISMISS), r ? t(this._element).one(o.TRANSITION_END, function(e) {
                                            return n._hideModal(e)
                                        }).emulateTransitionEnd(300) : this._hideModal()
                                    }
                                }
                            }, d.dispose = function() {
                                t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                            }, d.handleUpdate = function() {
                                this._adjustDialog()
                            }, d._getConfig = function(n) {
                                return n = t.extend({}, r, n), o.typeCheckConfig(e, n, a), n
                            }, d._showElement = function(e) {
                                var n = this,
                                    i = o.supportsTransitionEnd() && t(this._element).hasClass(c.FADE);
                                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && o.reflow(this._element), t(this._element).addClass(c.SHOW), this._config.focus && this._enforceFocus();
                                var r = t.Event(l.SHOWN, {
                                        relatedTarget: e
                                    }),
                                    a = function() {
                                        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
                                    };
                                i ? t(this._dialog).one(o.TRANSITION_END, a).emulateTransitionEnd(300) : a()
                            }, d._enforceFocus = function() {
                                var e = this;
                                t(document).off(l.FOCUSIN).on(l.FOCUSIN, function(n) {
                                    document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus()
                                })
                            }, d._setEscapeEvent = function() {
                                var e = this;
                                this._isShown && this._config.keyboard ? t(this._element).on(l.KEYDOWN_DISMISS, function(t) {
                                    27 === t.which && (t.preventDefault(), e.hide())
                                }) : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS)
                            }, d._setResizeEvent = function() {
                                var e = this;
                                this._isShown ? t(window).on(l.RESIZE, function(t) {
                                    return e.handleUpdate(t)
                                }) : t(window).off(l.RESIZE)
                            }, d._hideModal = function() {
                                var e = this;
                                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                                    t(document.body).removeClass(c.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(l.HIDDEN)
                                })
                            }, d._removeBackdrop = function() {
                                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                            }, d._showBackdrop = function(e) {
                                var n = this,
                                    i = t(this._element).hasClass(c.FADE) ? c.FADE : "";
                                if (this._isShown && this._config.backdrop) {
                                    var r = o.supportsTransitionEnd() && i;
                                    if (this._backdrop = document.createElement("div"), this._backdrop.className = c.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(l.CLICK_DISMISS, function(e) {
                                            if (n._ignoreBackdropClick) return void(n._ignoreBackdropClick = !1);
                                            e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                        }), r && o.reflow(this._backdrop), t(this._backdrop).addClass(c.SHOW), !e) return;
                                    if (!r) return void e();
                                    t(this._backdrop).one(o.TRANSITION_END, e).emulateTransitionEnd(150)
                                } else if (!this._isShown && this._backdrop) {
                                    t(this._backdrop).removeClass(c.SHOW);
                                    var a = function() {
                                        n._removeBackdrop(), e && e()
                                    };
                                    o.supportsTransitionEnd() && t(this._element).hasClass(c.FADE) ? t(this._backdrop).one(o.TRANSITION_END, a).emulateTransitionEnd(150) : a()
                                } else e && e()
                            }, d._adjustDialog = function() {
                                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                            }, d._resetAdjustments = function() {
                                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                            }, d._checkScrollbar = function() {
                                var e = document.body.getBoundingClientRect();
                                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                            }, d._setScrollbar = function() {
                                var e = this;
                                if (this._isBodyOverflowing) {
                                    t(u.FIXED_CONTENT).each(function(n, i) {
                                        var r = t(i)[0].style.paddingRight,
                                            a = t(i).css("padding-right");
                                        t(i).data("padding-right", r).css("padding-right", parseFloat(a) + e._scrollbarWidth + "px")
                                    }), t(u.STICKY_CONTENT).each(function(n, i) {
                                        var r = t(i)[0].style.marginRight,
                                            a = t(i).css("margin-right");
                                        t(i).data("margin-right", r).css("margin-right", parseFloat(a) - e._scrollbarWidth + "px")
                                    }), t(u.NAVBAR_TOGGLER).each(function(n, i) {
                                        var r = t(i)[0].style.marginRight,
                                            a = t(i).css("margin-right");
                                        t(i).data("margin-right", r).css("margin-right", parseFloat(a) + e._scrollbarWidth + "px")
                                    });
                                    var n = document.body.style.paddingRight,
                                        i = t("body").css("padding-right");
                                    t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                                }
                            }, d._resetScrollbar = function() {
                                t(u.FIXED_CONTENT).each(function(e, n) {
                                    var i = t(n).data("padding-right");
                                    void 0 !== i && t(n).css("padding-right", i).removeData("padding-right")
                                }), t(u.STICKY_CONTENT + ", " + u.NAVBAR_TOGGLER).each(function(e, n) {
                                    var i = t(n).data("margin-right");
                                    void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                                });
                                var e = t("body").data("padding-right");
                                void 0 !== e && t("body").css("padding-right", e).removeData("padding-right")
                            }, d._getScrollbarWidth = function() {
                                var e = document.createElement("div");
                                e.className = c.SCROLLBAR_MEASURER, document.body.appendChild(e);
                                var t = e.getBoundingClientRect().width - e.clientWidth;
                                return document.body.removeChild(e), t
                            }, i._jQueryInterface = function(e, n) {
                                return this.each(function() {
                                    var r = t(this).data("bs.modal"),
                                        a = t.extend({}, i.Default, t(this).data(), "object" == typeof e && e);
                                    if (r || (r = new i(this, a), t(this).data("bs.modal", r)), "string" == typeof e) {
                                        if (void 0 === r[e]) throw new Error('No method named "' + e + '"');
                                        r[e](n)
                                    } else a.show && r.show(n)
                                })
                            }, s(i, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-beta.2"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return r
                                }
                            }]), i
                        }();
                    return t(document).on(l.CLICK_DATA_API, u.DATA_TOGGLE, function(e) {
                        var n, i = this,
                            r = o.getSelectorFromElement(this);
                        r && (n = t(r)[0]);
                        var a = t(n).data("bs.modal") ? "toggle" : t.extend({}, t(n).data(), t(this).data());
                        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                        var s = t(n).one(l.SHOW, function(e) {
                            e.isDefaultPrevented() || s.one(l.HIDDEN, function() {
                                t(i).is(":visible") && i.focus()
                            })
                        });
                        d._jQueryInterface.call(t(n), a, this)
                    }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function() {
                        return t.fn[e] = i, d._jQueryInterface
                    }, d
                }(),
                g = function() {
                    if (void 0 === n) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                    var e = "tooltip",
                        i = ".bs.tooltip",
                        r = t.fn[e],
                        a = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                        l = {
                            animation: "boolean",
                            template: "string",
                            title: "(string|element|function)",
                            trigger: "string",
                            delay: "(number|object)",
                            html: "boolean",
                            selector: "(string|boolean)",
                            placement: "(string|function)",
                            offset: "(number|string)",
                            container: "(string|element|boolean)",
                            fallbackPlacement: "(string|array)"
                        },
                        c = {
                            AUTO: "auto",
                            TOP: "top",
                            RIGHT: "right",
                            BOTTOM: "bottom",
                            LEFT: "left"
                        },
                        u = {
                            animation: !0,
                            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                            trigger: "hover focus",
                            title: "",
                            delay: 0,
                            html: !1,
                            selector: !1,
                            placement: "top",
                            offset: 0,
                            container: !1,
                            fallbackPlacement: "flip"
                        },
                        d = {
                            SHOW: "show",
                            OUT: "out"
                        },
                        f = {
                            HIDE: "hide" + i,
                            HIDDEN: "hidden" + i,
                            SHOW: "show" + i,
                            SHOWN: "shown" + i,
                            INSERTED: "inserted" + i,
                            CLICK: "click" + i,
                            FOCUSIN: "focusin" + i,
                            FOCUSOUT: "focusout" + i,
                            MOUSEENTER: "mouseenter" + i,
                            MOUSELEAVE: "mouseleave" + i
                        },
                        p = {
                            FADE: "fade",
                            SHOW: "show"
                        },
                        h = {
                            TOOLTIP: ".tooltip",
                            TOOLTIP_INNER: ".tooltip-inner",
                            ARROW: ".arrow"
                        },
                        g = {
                            HOVER: "hover",
                            FOCUS: "focus",
                            CLICK: "click",
                            MANUAL: "manual"
                        },
                        m = function() {
                            function r(e, t) {
                                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                            }
                            var m = r.prototype;
                            return m.enable = function() {
                                this._isEnabled = !0
                            }, m.disable = function() {
                                this._isEnabled = !1
                            }, m.toggleEnabled = function() {
                                this._isEnabled = !this._isEnabled
                            }, m.toggle = function(e) {
                                if (this._isEnabled)
                                    if (e) {
                                        var n = this.constructor.DATA_KEY,
                                            i = t(e.currentTarget).data(n);
                                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                                    } else {
                                        if (t(this.getTipElement()).hasClass(p.SHOW)) return void this._leave(null, this);
                                        this._enter(null, this)
                                    }
                            }, m.dispose = function() {
                                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                            }, m.show = function() {
                                var e = this;
                                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                                var i = t.Event(this.constructor.Event.SHOW);
                                if (this.isWithContent() && this._isEnabled) {
                                    t(this.element).trigger(i);
                                    var a = t.contains(this.element.ownerDocument.documentElement, this.element);
                                    if (i.isDefaultPrevented() || !a) return;
                                    var s = this.getTipElement(),
                                        l = o.getUID(this.constructor.NAME);
                                    s.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && t(s).addClass(p.FADE);
                                    var c = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                                        u = this._getAttachment(c);
                                    this.addAttachmentClass(u);
                                    var f = !1 === this.config.container ? document.body : t(this.config.container);
                                    t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(f), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, {
                                        placement: u,
                                        modifiers: {
                                            offset: {
                                                offset: this.config.offset
                                            },
                                            flip: {
                                                behavior: this.config.fallbackPlacement
                                            },
                                            arrow: {
                                                element: h.ARROW
                                            }
                                        },
                                        onCreate: function(t) {
                                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                        },
                                        onUpdate: function(t) {
                                            e._handlePopperPlacementChange(t)
                                        }
                                    }), t(s).addClass(p.SHOW), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                                    var g = function() {
                                        e.config.animation && e._fixTransition();
                                        var n = e._hoverState;
                                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d.OUT && e._leave(null, e)
                                    };
                                    o.supportsTransitionEnd() && t(this.tip).hasClass(p.FADE) ? t(this.tip).one(o.TRANSITION_END, g).emulateTransitionEnd(r._TRANSITION_DURATION) : g()
                                }
                            }, m.hide = function(e) {
                                var n = this,
                                    i = this.getTipElement(),
                                    r = t.Event(this.constructor.Event.HIDE),
                                    a = function() {
                                        n._hoverState !== d.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                                    };
                                t(this.element).trigger(r), r.isDefaultPrevented() || (t(i).removeClass(p.SHOW), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[g.CLICK] = !1, this._activeTrigger[g.FOCUS] = !1, this._activeTrigger[g.HOVER] = !1, o.supportsTransitionEnd() && t(this.tip).hasClass(p.FADE) ? t(i).one(o.TRANSITION_END, a).emulateTransitionEnd(150) : a(), this._hoverState = "")
                            }, m.update = function() {
                                null !== this._popper && this._popper.scheduleUpdate()
                            }, m.isWithContent = function() {
                                return Boolean(this.getTitle())
                            }, m.addAttachmentClass = function(e) {
                                t(this.getTipElement()).addClass("bs-tooltip-" + e)
                            }, m.getTipElement = function() {
                                return this.tip = this.tip || t(this.config.template)[0], this.tip
                            }, m.setContent = function() {
                                var e = t(this.getTipElement());
                                this.setElementContent(e.find(h.TOOLTIP_INNER), this.getTitle()), e.removeClass(p.FADE + " " + p.SHOW)
                            }, m.setElementContent = function(e, n) {
                                var i = this.config.html;
                                "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
                            }, m.getTitle = function() {
                                var e = this.element.getAttribute("data-original-title");
                                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                            }, m._getAttachment = function(e) {
                                return c[e.toUpperCase()]
                            }, m._setListeners = function() {
                                var e = this;
                                this.config.trigger.split(" ").forEach(function(n) {
                                    if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                                        return e.toggle(t)
                                    });
                                    else if (n !== g.MANUAL) {
                                        var i = n === g.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                            r = n === g.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                        t(e.element).on(i, e.config.selector, function(t) {
                                            return e._enter(t)
                                        }).on(r, e.config.selector, function(t) {
                                            return e._leave(t)
                                        })
                                    }
                                    t(e.element).closest(".modal").on("hide.bs.modal", function() {
                                        return e.hide()
                                    })
                                }), this.config.selector ? this.config = t.extend({}, this.config, {
                                    trigger: "manual",
                                    selector: ""
                                }) : this._fixTitle()
                            }, m._fixTitle = function() {
                                var e = typeof this.element.getAttribute("data-original-title");
                                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                            }, m._enter = function(e, n) {
                                var i = this.constructor.DATA_KEY;
                                return n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? g.FOCUS : g.HOVER] = !0), t(n.getTipElement()).hasClass(p.SHOW) || n._hoverState === d.SHOW ? void(n._hoverState = d.SHOW) : (clearTimeout(n._timeout), n._hoverState = d.SHOW, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function() {
                                    n._hoverState === d.SHOW && n.show()
                                }, n.config.delay.show)) : void n.show())
                            }, m._leave = function(e, n) {
                                var i = this.constructor.DATA_KEY;
                                if (n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? g.FOCUS : g.HOVER] = !1), !n._isWithActiveTrigger()) {
                                    if (clearTimeout(n._timeout), n._hoverState = d.OUT, !n.config.delay || !n.config.delay.hide) return void n.hide();
                                    n._timeout = setTimeout(function() {
                                        n._hoverState === d.OUT && n.hide()
                                    }, n.config.delay.hide)
                                }
                            }, m._isWithActiveTrigger = function() {
                                for (var e in this._activeTrigger)
                                    if (this._activeTrigger[e]) return !0;
                                return !1
                            }, m._getConfig = function(n) {
                                return n = t.extend({}, this.constructor.Default, t(this.element).data(), n), "number" == typeof n.delay && (n.delay = {
                                    show: n.delay,
                                    hide: n.delay
                                }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), o.typeCheckConfig(e, n, this.constructor.DefaultType), n
                            }, m._getDelegateConfig = function() {
                                var e = {};
                                if (this.config)
                                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                                return e
                            }, m._cleanTipClass = function() {
                                var e = t(this.getTipElement()),
                                    n = e.attr("class").match(a);
                                null !== n && n.length > 0 && e.removeClass(n.join(""))
                            }, m._handlePopperPlacementChange = function(e) {
                                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                            }, m._fixTransition = function() {
                                var e = this.getTipElement(),
                                    n = this.config.animation;
                                null === e.getAttribute("x-placement") && (t(e).removeClass(p.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                            }, r._jQueryInterface = function(e) {
                                return this.each(function() {
                                    var n = t(this).data("bs.tooltip"),
                                        i = "object" == typeof e && e;
                                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new r(this, i), t(this).data("bs.tooltip", n)), "string" == typeof e)) {
                                        if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                                        n[e]()
                                    }
                                })
                            }, s(r, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-beta.2"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return u
                                }
                            }, {
                                key: "NAME",
                                get: function() {
                                    return e
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function() {
                                    return "bs.tooltip"
                                }
                            }, {
                                key: "Event",
                                get: function() {
                                    return f
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function() {
                                    return i
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return l
                                }
                            }]), r
                        }();
                    return t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
                        return t.fn[e] = r, m._jQueryInterface
                    }, m
                }(),
                m = function() {
                    var e = "popover",
                        n = ".bs.popover",
                        i = t.fn[e],
                        r = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                        a = t.extend({}, g.Default, {
                            placement: "right",
                            trigger: "click",
                            content: "",
                            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                        }),
                        o = t.extend({}, g.DefaultType, {
                            content: "(string|element|function)"
                        }),
                        c = {
                            FADE: "fade",
                            SHOW: "show"
                        },
                        u = {
                            TITLE: ".popover-header",
                            CONTENT: ".popover-body"
                        },
                        d = {
                            HIDE: "hide" + n,
                            HIDDEN: "hidden" + n,
                            SHOW: "show" + n,
                            SHOWN: "shown" + n,
                            INSERTED: "inserted" + n,
                            CLICK: "click" + n,
                            FOCUSIN: "focusin" + n,
                            FOCUSOUT: "focusout" + n,
                            MOUSEENTER: "mouseenter" + n,
                            MOUSELEAVE: "mouseleave" + n
                        },
                        f = function(i) {
                            function f() {
                                return i.apply(this, arguments) || this
                            }
                            l(f, i);
                            var p = f.prototype;
                            return p.isWithContent = function() {
                                return this.getTitle() || this._getContent()
                            }, p.addAttachmentClass = function(e) {
                                t(this.getTipElement()).addClass("bs-popover-" + e)
                            }, p.getTipElement = function() {
                                return this.tip = this.tip || t(this.config.template)[0], this.tip
                            }, p.setContent = function() {
                                var e = t(this.getTipElement());
                                this.setElementContent(e.find(u.TITLE), this.getTitle()), this.setElementContent(e.find(u.CONTENT), this._getContent()), e.removeClass(c.FADE + " " + c.SHOW)
                            }, p._getContent = function() {
                                return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                            }, p._cleanTipClass = function() {
                                var e = t(this.getTipElement()),
                                    n = e.attr("class").match(r);
                                null !== n && n.length > 0 && e.removeClass(n.join(""))
                            }, f._jQueryInterface = function(e) {
                                return this.each(function() {
                                    var n = t(this).data("bs.popover"),
                                        i = "object" == typeof e ? e : null;
                                    if ((n || !/destroy|hide/.test(e)) && (n || (n = new f(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
                                        if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                                        n[e]()
                                    }
                                })
                            }, s(f, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-beta.2"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return a
                                }
                            }, {
                                key: "NAME",
                                get: function() {
                                    return e
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function() {
                                    return "bs.popover"
                                }
                            }, {
                                key: "Event",
                                get: function() {
                                    return d
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function() {
                                    return n
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return o
                                }
                            }]), f
                        }(g);
                    return t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function() {
                        return t.fn[e] = i, f._jQueryInterface
                    }, f
                }(),
                v = function() {
                    var e = "scrollspy",
                        n = t.fn[e],
                        i = {
                            offset: 10,
                            method: "auto",
                            target: ""
                        },
                        r = {
                            offset: "number",
                            method: "string",
                            target: "(string|element)"
                        },
                        a = {
                            ACTIVATE: "activate.bs.scrollspy",
                            SCROLL: "scroll.bs.scrollspy",
                            LOAD_DATA_API: "load.bs.scrollspy.data-api"
                        },
                        l = {
                            DROPDOWN_ITEM: "dropdown-item",
                            DROPDOWN_MENU: "dropdown-menu",
                            ACTIVE: "active"
                        },
                        c = {
                            DATA_SPY: '[data-spy="scroll"]',
                            ACTIVE: ".active",
                            NAV_LIST_GROUP: ".nav, .list-group",
                            NAV_LINKS: ".nav-link",
                            NAV_ITEMS: ".nav-item",
                            LIST_ITEMS: ".list-group-item",
                            DROPDOWN: ".dropdown",
                            DROPDOWN_ITEMS: ".dropdown-item",
                            DROPDOWN_TOGGLE: ".dropdown-toggle"
                        },
                        u = {
                            OFFSET: "offset",
                            POSITION: "position"
                        },
                        d = function() {
                            function n(e, n) {
                                var i = this;
                                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + c.NAV_LINKS + "," + this._config.target + " " + c.LIST_ITEMS + "," + this._config.target + " " + c.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(a.SCROLL, function(e) {
                                    return i._process(e)
                                }), this.refresh(), this._process()
                            }
                            var d = n.prototype;
                            return d.refresh = function() {
                                var e = this,
                                    n = this._scrollElement !== this._scrollElement.window ? u.POSITION : u.OFFSET,
                                    i = "auto" === this._config.method ? n : this._config.method,
                                    r = i === u.POSITION ? this._getScrollTop() : 0;
                                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function(e) {
                                    var n, a = o.getSelectorFromElement(e);
                                    if (a && (n = t(a)[0]), n) {
                                        var s = n.getBoundingClientRect();
                                        if (s.width || s.height) return [t(n)[i]().top + r, a]
                                    }
                                    return null
                                }).filter(function(e) {
                                    return e
                                }).sort(function(e, t) {
                                    return e[0] - t[0]
                                }).forEach(function(t) {
                                    e._offsets.push(t[0]), e._targets.push(t[1])
                                })
                            }, d.dispose = function() {
                                t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                            }, d._getConfig = function(n) {
                                if (n = t.extend({}, i, n), "string" != typeof n.target) {
                                    var a = t(n.target).attr("id");
                                    a || (a = o.getUID(e), t(n.target).attr("id", a)), n.target = "#" + a
                                }
                                return o.typeCheckConfig(e, n, r), n
                            }, d._getScrollTop = function() {
                                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                            }, d._getScrollHeight = function() {
                                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                            }, d._getOffsetHeight = function() {
                                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                            }, d._process = function() {
                                var e = this._getScrollTop() + this._config.offset,
                                    t = this._getScrollHeight(),
                                    n = this._config.offset + t - this._getOffsetHeight();
                                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                                    var i = this._targets[this._targets.length - 1];
                                    return void(this._activeTarget !== i && this._activate(i))
                                }
                                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                                for (var r = this._offsets.length; r--;) {
                                    this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                                }
                            }, d._activate = function(e) {
                                this._activeTarget = e, this._clear();
                                var n = this._selector.split(",");
                                n = n.map(function(t) {
                                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                                });
                                var i = t(n.join(","));
                                i.hasClass(l.DROPDOWN_ITEM) ? (i.closest(c.DROPDOWN).find(c.DROPDOWN_TOGGLE).addClass(l.ACTIVE), i.addClass(l.ACTIVE)) : (i.addClass(l.ACTIVE), i.parents(c.NAV_LIST_GROUP).prev(c.NAV_LINKS + ", " + c.LIST_ITEMS).addClass(l.ACTIVE), i.parents(c.NAV_LIST_GROUP).prev(c.NAV_ITEMS).children(c.NAV_LINKS).addClass(l.ACTIVE)), t(this._scrollElement).trigger(a.ACTIVATE, {
                                    relatedTarget: e
                                })
                            }, d._clear = function() {
                                t(this._selector).filter(c.ACTIVE).removeClass(l.ACTIVE)
                            }, n._jQueryInterface = function(e) {
                                return this.each(function() {
                                    var i = t(this).data("bs.scrollspy"),
                                        r = "object" == typeof e && e;
                                    if (i || (i = new n(this, r), t(this).data("bs.scrollspy", i)), "string" == typeof e) {
                                        if (void 0 === i[e]) throw new Error('No method named "' + e + '"');
                                        i[e]()
                                    }
                                })
                            }, s(n, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-beta.2"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return i
                                }
                            }]), n
                        }();
                    return t(window).on(a.LOAD_DATA_API, function() {
                        for (var e = t.makeArray(t(c.DATA_SPY)), n = e.length; n--;) {
                            var i = t(e[n]);
                            d._jQueryInterface.call(i, i.data())
                        }
                    }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function() {
                        return t.fn[e] = n, d._jQueryInterface
                    }, d
                }(),
                y = function() {
                    var e = t.fn.tab,
                        n = {
                            HIDE: "hide.bs.tab",
                            HIDDEN: "hidden.bs.tab",
                            SHOW: "show.bs.tab",
                            SHOWN: "shown.bs.tab",
                            CLICK_DATA_API: "click.bs.tab.data-api"
                        },
                        i = {
                            DROPDOWN_MENU: "dropdown-menu",
                            ACTIVE: "active",
                            DISABLED: "disabled",
                            FADE: "fade",
                            SHOW: "show"
                        },
                        r = {
                            DROPDOWN: ".dropdown",
                            NAV_LIST_GROUP: ".nav, .list-group",
                            ACTIVE: ".active",
                            ACTIVE_UL: "> li > .active",
                            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                            DROPDOWN_TOGGLE: ".dropdown-toggle",
                            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                        },
                        a = function() {
                            function e(e) {
                                this._element = e
                            }
                            var a = e.prototype;
                            return a.show = function() {
                                var e = this;
                                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(i.ACTIVE) || t(this._element).hasClass(i.DISABLED))) {
                                    var a, s, l = t(this._element).closest(r.NAV_LIST_GROUP)[0],
                                        c = o.getSelectorFromElement(this._element);
                                    if (l) {
                                        var u = "UL" === l.nodeName ? r.ACTIVE_UL : r.ACTIVE;
                                        s = t.makeArray(t(l).find(u)), s = s[s.length - 1]
                                    }
                                    var d = t.Event(n.HIDE, {
                                            relatedTarget: this._element
                                        }),
                                        f = t.Event(n.SHOW, {
                                            relatedTarget: s
                                        });
                                    if (s && t(s).trigger(d), t(this._element).trigger(f), !f.isDefaultPrevented() && !d.isDefaultPrevented()) {
                                        c && (a = t(c)[0]), this._activate(this._element, l);
                                        var p = function() {
                                            var i = t.Event(n.HIDDEN, {
                                                    relatedTarget: e._element
                                                }),
                                                r = t.Event(n.SHOWN, {
                                                    relatedTarget: s
                                                });
                                            t(s).trigger(i), t(e._element).trigger(r)
                                        };
                                        a ? this._activate(a, a.parentNode, p) : p()
                                    }
                                }
                            }, a.dispose = function() {
                                t.removeData(this._element, "bs.tab"), this._element = null
                            }, a._activate = function(e, n, a) {
                                var s, l = this;
                                s = "UL" === n.nodeName ? t(n).find(r.ACTIVE_UL) : t(n).children(r.ACTIVE);
                                var c = s[0],
                                    u = a && o.supportsTransitionEnd() && c && t(c).hasClass(i.FADE),
                                    d = function() {
                                        return l._transitionComplete(e, c, u, a)
                                    };
                                c && u ? t(c).one(o.TRANSITION_END, d).emulateTransitionEnd(150) : d(), c && t(c).removeClass(i.SHOW)
                            }, a._transitionComplete = function(e, n, a, s) {
                                if (n) {
                                    t(n).removeClass(i.ACTIVE);
                                    var l = t(n.parentNode).find(r.DROPDOWN_ACTIVE_CHILD)[0];
                                    l && t(l).removeClass(i.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                                }
                                if (t(e).addClass(i.ACTIVE), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), a ? (o.reflow(e), t(e).addClass(i.SHOW)) : t(e).removeClass(i.FADE), e.parentNode && t(e.parentNode).hasClass(i.DROPDOWN_MENU)) {
                                    var c = t(e).closest(r.DROPDOWN)[0];
                                    c && t(c).find(r.DROPDOWN_TOGGLE).addClass(i.ACTIVE), e.setAttribute("aria-expanded", !0)
                                }
                                s && s()
                            }, e._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var i = t(this),
                                        r = i.data("bs.tab");
                                    if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof n) {
                                        if (void 0 === r[n]) throw new Error('No method named "' + n + '"');
                                        r[n]()
                                    }
                                })
                            }, s(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-beta.2"
                                }
                            }]), e
                        }();
                    return t(document).on(n.CLICK_DATA_API, r.DATA_TOGGLE, function(e) {
                        e.preventDefault(), a._jQueryInterface.call(t(this), "show")
                    }), t.fn.tab = a._jQueryInterface, t.fn.tab.Constructor = a, t.fn.tab.noConflict = function() {
                        return t.fn.tab = e, a._jQueryInterface
                    }, a
                }();
            (function() {
                if (void 0 === t) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = t.fn.jquery.split(" ")[0].split(".");
                if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            })(), e.Util = o, e.Alert = c, e.Button = u, e.Carousel = d, e.Collapse = f, e.Dropdown = p, e.Modal = h, e.Popover = m, e.Scrollspy = v, e.Tab = y, e.Tooltip = g
        }({}, e, t)
    }).call(t, n(0), n(148).default)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            function n(e) {
                var t = !1;
                return function() {
                    t || (t = !0, window.Promise.resolve().then(function() {
                        t = !1, e()
                    }))
                }
            }

            function i(e) {
                var t = !1;
                return function() {
                    t || (t = !0, setTimeout(function() {
                        t = !1, e()
                    }, ce))
                }
            }

            function r(e) {
                var t = {};
                return e && "[object Function]" === t.toString.call(e)
            }

            function a(e, t) {
                if (1 !== e.nodeType) return [];
                var n = getComputedStyle(e, null);
                return t ? n[t] : n
            }

            function o(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }

            function s(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                    case "HTML":
                    case "BODY":
                        return e.ownerDocument.body;
                    case "#document":
                        return e.body
                }
                var t = a(e),
                    n = t.overflow,
                    i = t.overflowX;
                return /(auto|scroll)/.test(n + t.overflowY + i) ? e : s(o(e))
            }

            function l(e) {
                var t = e && e.offsetParent,
                    n = t && t.nodeName;
                return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === a(t, "position") ? l(t) : t : e ? e.ownerDocument.documentElement : document.documentElement
            }

            function c(e) {
                var t = e.nodeName;
                return "BODY" !== t && ("HTML" === t || l(e.firstElementChild) === e)
            }

            function u(e) {
                return null !== e.parentNode ? u(e.parentNode) : e
            }

            function d(e, t) {
                if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                    i = n ? e : t,
                    r = n ? t : e,
                    a = document.createRange();
                a.setStart(i, 0), a.setEnd(r, 0);
                var o = a.commonAncestorContainer;
                if (e !== o && t !== o || i.contains(r)) return c(o) ? o : l(o);
                var s = u(e);
                return s.host ? d(s.host, t) : d(e, u(t).host)
            }

            function f(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    n = "top" === t ? "scrollTop" : "scrollLeft",
                    i = e.nodeName;
                if ("BODY" === i || "HTML" === i) {
                    var r = e.ownerDocument.documentElement;
                    return (e.ownerDocument.scrollingElement || r)[n]
                }
                return e[n]
            }

            function p(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = f(t, "top"),
                    r = f(t, "left"),
                    a = n ? -1 : 1;
                return e.top += i * a, e.bottom += i * a, e.left += r * a, e.right += r * a, e
            }

            function h(e, t) {
                var n = "x" === t ? "Left" : "Top",
                    i = "Left" === n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
            }

            function g(e, t, n, i) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], he() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
            }

            function m() {
                var e = document.body,
                    t = document.documentElement,
                    n = he() && getComputedStyle(t);
                return {
                    height: g("Height", e, t, n),
                    width: g("Width", e, t, n)
                }
            }

            function v(e) {
                return ye({}, e, {
                    right: e.left + e.width,
                    bottom: e.top + e.height
                })
            }

            function y(e) {
                var t = {};
                if (he()) try {
                    t = e.getBoundingClientRect();
                    var n = f(e, "top"),
                        i = f(e, "left");
                    t.top += n, t.left += i, t.bottom += n, t.right += i
                } catch (e) {} else t = e.getBoundingClientRect();
                var r = {
                        left: t.left,
                        top: t.top,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    },
                    o = "HTML" === e.nodeName ? m() : {},
                    s = o.width || e.clientWidth || r.right - r.left,
                    l = o.height || e.clientHeight || r.bottom - r.top,
                    c = e.offsetWidth - s,
                    u = e.offsetHeight - l;
                if (c || u) {
                    var d = a(e);
                    c -= h(d, "x"), u -= h(d, "y"), r.width -= c, r.height -= u
                }
                return v(r)
            }

            function b(e, t) {
                var n = he(),
                    i = "HTML" === t.nodeName,
                    r = y(e),
                    o = y(t),
                    l = s(e),
                    c = a(t),
                    u = parseFloat(c.borderTopWidth, 10),
                    d = parseFloat(c.borderLeftWidth, 10),
                    f = v({
                        top: r.top - o.top - u,
                        left: r.left - o.left - d,
                        width: r.width,
                        height: r.height
                    });
                if (f.marginTop = 0, f.marginLeft = 0, !n && i) {
                    var h = parseFloat(c.marginTop, 10),
                        g = parseFloat(c.marginLeft, 10);
                    f.top -= u - h, f.bottom -= u - h, f.left -= d - g, f.right -= d - g, f.marginTop = h, f.marginLeft = g
                }
                return (n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (f = p(f, t)), f
            }

            function w(e) {
                var t = e.ownerDocument.documentElement,
                    n = b(e, t),
                    i = Math.max(t.clientWidth, window.innerWidth || 0),
                    r = Math.max(t.clientHeight, window.innerHeight || 0),
                    a = f(t),
                    o = f(t, "left");
                return v({
                    top: a - n.top + n.marginTop,
                    left: o - n.left + n.marginLeft,
                    width: i,
                    height: r
                })
            }

            function E(e) {
                var t = e.nodeName;
                return "BODY" !== t && "HTML" !== t && ("fixed" === a(e, "position") || E(o(e)))
            }

            function T(e, t, n, i) {
                var r = {
                        top: 0,
                        left: 0
                    },
                    a = d(e, t);
                if ("viewport" === i) r = w(a);
                else {
                    var l = void 0;
                    "scrollParent" === i ? (l = s(o(t)), "BODY" === l.nodeName && (l = e.ownerDocument.documentElement)) : l = "window" === i ? e.ownerDocument.documentElement : i;
                    var c = b(l, a);
                    if ("HTML" !== l.nodeName || E(a)) r = c;
                    else {
                        var u = m(),
                            f = u.height,
                            p = u.width;
                        r.top += c.top - c.marginTop, r.bottom = f + c.top, r.left += c.left - c.marginLeft, r.right = p + c.left
                    }
                }
                return r.left += n, r.top += n, r.right -= n, r.bottom -= n, r
            }

            function _(e) {
                return e.width * e.height
            }

            function x(e, t, n, i, r) {
                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto")) return e;
                var o = T(n, i, a, r),
                    s = {
                        top: {
                            width: o.width,
                            height: t.top - o.top
                        },
                        right: {
                            width: o.right - t.right,
                            height: o.height
                        },
                        bottom: {
                            width: o.width,
                            height: o.bottom - t.bottom
                        },
                        left: {
                            width: t.left - o.left,
                            height: o.height
                        }
                    },
                    l = Object.keys(s).map(function(e) {
                        return ye({
                            key: e
                        }, s[e], {
                            area: _(s[e])
                        })
                    }).sort(function(e, t) {
                        return t.area - e.area
                    }),
                    c = l.filter(function(e) {
                        var t = e.width,
                            i = e.height;
                        return t >= n.clientWidth && i >= n.clientHeight
                    }),
                    u = c.length > 0 ? c[0].key : l[0].key,
                    d = e.split("-")[1];
                return u + (d ? "-" + d : "")
            }

            function C(e, t, n) {
                return b(n, d(t, n))
            }

            function S(e) {
                var t = getComputedStyle(e),
                    n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                    i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
                return {
                    width: e.offsetWidth + i,
                    height: e.offsetHeight + n
                }
            }

            function D(e) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return t[e]
                })
            }

            function A(e, t, n) {
                n = n.split("-")[0];
                var i = S(e),
                    r = {
                        width: i.width,
                        height: i.height
                    },
                    a = -1 !== ["right", "left"].indexOf(n),
                    o = a ? "top" : "left",
                    s = a ? "left" : "top",
                    l = a ? "height" : "width",
                    c = a ? "width" : "height";
                return r[o] = t[o] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[c] : t[D(s)], r
            }

            function I(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }

            function k(e, t, n) {
                if (Array.prototype.findIndex) return e.findIndex(function(e) {
                    return e[t] === n
                });
                var i = I(e, function(e) {
                    return e[t] === n
                });
                return e.indexOf(i)
            }

            function O(e, t, n) {
                return (void 0 === n ? e : e.slice(0, k(e, "name", n))).forEach(function(e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = e.function || e.fn;
                    e.enabled && r(n) && (t.offsets.popper = v(t.offsets.popper), t.offsets.reference = v(t.offsets.reference), t = n(t, e))
                }), t
            }

            function N() {
                if (!this.state.isDestroyed) {
                    var e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    e.offsets.reference = C(this.state, this.popper, this.reference), e.placement = x(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = A(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = O(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                }
            }

            function P(e, t) {
                return e.some(function(e) {
                    var n = e.name;
                    return e.enabled && n === t
                })
            }

            function L(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
                    var r = t[i],
                        a = r ? "" + r + n : e;
                    if (void 0 !== document.body.style[a]) return a
                }
                return null
            }

            function M() {
                return this.state.isDestroyed = !0, P(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[L("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
            }

            function H(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }

            function z(e, t, n, i) {
                var r = "BODY" === e.nodeName,
                    a = r ? e.ownerDocument.defaultView : e;
                a.addEventListener(t, n, {
                    passive: !0
                }), r || z(s(a.parentNode), t, n, i), i.push(a)
            }

            function R(e, t, n, i) {
                n.updateBound = i, H(e).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var r = s(e);
                return z(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
            }

            function j() {
                this.state.eventsEnabled || (this.state = R(this.reference, this.options, this.state, this.scheduleUpdate))
            }

            function W(e, t) {
                return H(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                    e.removeEventListener("scroll", t.updateBound)
                }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
            }

            function $() {
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = W(this.reference, this.state))
            }

            function F(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }

            function B(e, t) {
                Object.keys(t).forEach(function(n) {
                    var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && F(t[n]) && (i = "px"), e.style[n] = t[n] + i
                })
            }

            function V(e, t) {
                Object.keys(t).forEach(function(n) {
                    !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
                })
            }

            function G(e) {
                return B(e.instance.popper, e.styles), V(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && B(e.arrowElement, e.arrowStyles), e
            }

            function q(e, t, n, i, r) {
                var a = C(r, t, e),
                    o = x(n.placement, a, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                return t.setAttribute("x-placement", o), B(t, {
                    position: "absolute"
                }), n
            }

            function Y(e, t) {
                var n = t.x,
                    i = t.y,
                    r = e.offsets.popper,
                    a = I(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                var o = void 0 !== a ? a : t.gpuAcceleration,
                    s = l(e.instance.popper),
                    c = y(s),
                    u = {
                        position: r.position
                    },
                    d = {
                        left: Math.floor(r.left),
                        top: Math.floor(r.top),
                        bottom: Math.floor(r.bottom),
                        right: Math.floor(r.right)
                    },
                    f = "bottom" === n ? "top" : "bottom",
                    p = "right" === i ? "left" : "right",
                    h = L("transform"),
                    g = void 0,
                    m = void 0;
                if (m = "bottom" === f ? -c.height + d.bottom : d.top, g = "right" === p ? -c.width + d.right : d.left, o && h) u[h] = "translate3d(" + g + "px, " + m + "px, 0)", u[f] = 0, u[p] = 0, u.willChange = "transform";
                else {
                    var v = "bottom" === f ? -1 : 1,
                        b = "right" === p ? -1 : 1;
                    u[f] = m * v, u[p] = g * b, u.willChange = f + ", " + p
                }
                var w = {
                    "x-placement": e.placement
                };
                return e.attributes = ye({}, w, e.attributes), e.styles = ye({}, u, e.styles), e.arrowStyles = ye({}, e.offsets.arrow, e.arrowStyles), e
            }

            function U(e, t, n) {
                var i = I(e, function(e) {
                        return e.name === t
                    }),
                    r = !!i && e.some(function(e) {
                        return e.name === n && e.enabled && e.order < i.order
                    });
                if (!r) {
                    var a = "`" + t + "`",
                        o = "`" + n + "`";
                    console.warn(o + " modifier is required by " + a + " modifier in order to work, be sure to include it before " + a + "!")
                }
                return r
            }

            function X(e, t) {
                var n;
                if (!U(e.instance.modifiers, "arrow", "keepTogether")) return e;
                var i = t.element;
                if ("string" == typeof i) {
                    if (!(i = e.instance.popper.querySelector(i))) return e
                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                var r = e.placement.split("-")[0],
                    o = e.offsets,
                    s = o.popper,
                    l = o.reference,
                    c = -1 !== ["left", "right"].indexOf(r),
                    u = c ? "height" : "width",
                    d = c ? "Top" : "Left",
                    f = d.toLowerCase(),
                    p = c ? "left" : "top",
                    h = c ? "bottom" : "right",
                    g = S(i)[u];
                l[h] - g < s[f] && (e.offsets.popper[f] -= s[f] - (l[h] - g)), l[f] + g > s[h] && (e.offsets.popper[f] += l[f] + g - s[h]), e.offsets.popper = v(e.offsets.popper);
                var m = l[f] + l[u] / 2 - g / 2,
                    y = a(e.instance.popper),
                    b = parseFloat(y["margin" + d], 10),
                    w = parseFloat(y["border" + d + "Width"], 10),
                    E = m - e.offsets.popper[f] - b - w;
                return E = Math.max(Math.min(s[u] - g, E), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ve(n, f, Math.round(E)), ve(n, p, ""), n), e
            }

            function K(e) {
                return "end" === e ? "start" : "start" === e ? "end" : e
            }

            function Q(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = we.indexOf(e),
                    i = we.slice(n + 1).concat(we.slice(0, n));
                return t ? i.reverse() : i
            }

            function J(e, t) {
                if (P(e.instance.modifiers, "inner")) return e;
                if (e.flipped && e.placement === e.originalPlacement) return e;
                var n = T(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                    i = e.placement.split("-")[0],
                    r = D(i),
                    a = e.placement.split("-")[1] || "",
                    o = [];
                switch (t.behavior) {
                    case Ee.FLIP:
                        o = [i, r];
                        break;
                    case Ee.CLOCKWISE:
                        o = Q(i);
                        break;
                    case Ee.COUNTERCLOCKWISE:
                        o = Q(i, !0);
                        break;
                    default:
                        o = t.behavior
                }
                return o.forEach(function(s, l) {
                    if (i !== s || o.length === l + 1) return e;
                    i = e.placement.split("-")[0], r = D(i);
                    var c = e.offsets.popper,
                        u = e.offsets.reference,
                        d = Math.floor,
                        f = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                        p = d(c.left) < d(n.left),
                        h = d(c.right) > d(n.right),
                        g = d(c.top) < d(n.top),
                        m = d(c.bottom) > d(n.bottom),
                        v = "left" === i && p || "right" === i && h || "top" === i && g || "bottom" === i && m,
                        y = -1 !== ["top", "bottom"].indexOf(i),
                        b = !!t.flipVariations && (y && "start" === a && p || y && "end" === a && h || !y && "start" === a && g || !y && "end" === a && m);
                    (f || v || b) && (e.flipped = !0, (f || v) && (i = o[l + 1]), b && (a = K(a)), e.placement = i + (a ? "-" + a : ""), e.offsets.popper = ye({}, e.offsets.popper, A(e.instance.popper, e.offsets.reference, e.placement)), e = O(e.instance.modifiers, e, "flip"))
                }), e
            }

            function Z(e) {
                var t = e.offsets,
                    n = t.popper,
                    i = t.reference,
                    r = e.placement.split("-")[0],
                    a = Math.floor,
                    o = -1 !== ["top", "bottom"].indexOf(r),
                    s = o ? "right" : "bottom",
                    l = o ? "left" : "top",
                    c = o ? "width" : "height";
                return n[s] < a(i[l]) && (e.offsets.popper[l] = a(i[l]) - n[c]), n[l] > a(i[s]) && (e.offsets.popper[l] = a(i[s])), e
            }

            function ee(e, t, n, i) {
                var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                    a = +r[1],
                    o = r[2];
                if (!a) return e;
                if (0 === o.indexOf("%")) {
                    var s = void 0;
                    switch (o) {
                        case "%p":
                            s = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            s = i
                    }
                    return v(s)[t] / 100 * a
                }
                if ("vh" === o || "vw" === o) {
                    return ("vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * a
                }
                return a
            }

            function te(e, t, n, i) {
                var r = [0, 0],
                    a = -1 !== ["right", "left"].indexOf(i),
                    o = e.split(/(\+|\-)/).map(function(e) {
                        return e.trim()
                    }),
                    s = o.indexOf(I(o, function(e) {
                        return -1 !== e.search(/,|\s/)
                    }));
                o[s] && -1 === o[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    c = -1 !== s ? [o.slice(0, s).concat([o[s].split(l)[0]]), [o[s].split(l)[1]].concat(o.slice(s + 1))] : [o];
                return c = c.map(function(e, i) {
                    var r = (1 === i ? !a : a) ? "height" : "width",
                        o = !1;
                    return e.reduce(function(e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, o = !0, e) : o ? (e[e.length - 1] += t, o = !1, e) : e.concat(t)
                    }, []).map(function(e) {
                        return ee(e, r, t, n)
                    })
                }), c.forEach(function(e, t) {
                    e.forEach(function(n, i) {
                        F(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                    })
                }), r
            }

            function ne(e, t) {
                var n = t.offset,
                    i = e.placement,
                    r = e.offsets,
                    a = r.popper,
                    o = r.reference,
                    s = i.split("-")[0],
                    l = void 0;
                return l = F(+n) ? [+n, 0] : te(n, a, o, s), "left" === s ? (a.top += l[0], a.left -= l[1]) : "right" === s ? (a.top += l[0], a.left += l[1]) : "top" === s ? (a.left += l[0], a.top -= l[1]) : "bottom" === s && (a.left += l[0], a.top += l[1]), e.popper = a, e
            }

            function ie(e, t) {
                var n = t.boundariesElement || l(e.instance.popper);
                e.instance.reference === n && (n = l(n));
                var i = T(e.instance.popper, e.instance.reference, t.padding, n);
                t.boundaries = i;
                var r = t.priority,
                    a = e.offsets.popper,
                    o = {
                        primary: function(e) {
                            var n = a[e];
                            return a[e] < i[e] && !t.escapeWithReference && (n = Math.max(a[e], i[e])), ve({}, e, n)
                        },
                        secondary: function(e) {
                            var n = "right" === e ? "left" : "top",
                                r = a[n];
                            return a[e] > i[e] && !t.escapeWithReference && (r = Math.min(a[n], i[e] - ("right" === e ? a.width : a.height))), ve({}, n, r)
                        }
                    };
                return r.forEach(function(e) {
                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                    a = ye({}, a, o[t](e))
                }), e.offsets.popper = a, e
            }

            function re(e) {
                var t = e.placement,
                    n = t.split("-")[0],
                    i = t.split("-")[1];
                if (i) {
                    var r = e.offsets,
                        a = r.reference,
                        o = r.popper,
                        s = -1 !== ["bottom", "top"].indexOf(n),
                        l = s ? "left" : "top",
                        c = s ? "width" : "height",
                        u = {
                            start: ve({}, l, a[l]),
                            end: ve({}, l, a[l] + a[c] - o[c])
                        };
                    e.offsets.popper = ye({}, o, u[i])
                }
                return e
            }

            function ae(e) {
                if (!U(e.instance.modifiers, "hide", "preventOverflow")) return e;
                var t = e.offsets.reference,
                    n = I(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                    if (!0 === e.hide) return e;
                    e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                } else {
                    if (!1 === e.hide) return e;
                    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                }
                return e
            }

            function oe(e) {
                var t = e.placement,
                    n = t.split("-")[0],
                    i = e.offsets,
                    r = i.popper,
                    a = i.reference,
                    o = -1 !== ["left", "right"].indexOf(n),
                    s = -1 === ["top", "left"].indexOf(n);
                return r[o ? "left" : "top"] = a[n] - (s ? r[o ? "width" : "height"] : 0), e.placement = D(t), e.offsets.popper = v(r), e
            }
            for (var se = "undefined" != typeof window && "undefined" != typeof document, le = ["Edge", "Trident", "Firefox"], ce = 0, ue = 0; ue < le.length; ue += 1)
                if (se && navigator.userAgent.indexOf(le[ue]) >= 0) {
                    ce = 1;
                    break
                }
            var de = se && window.Promise,
                fe = de ? n : i,
                pe = void 0,
                he = function() {
                    return void 0 === pe && (pe = -1 !== navigator.appVersion.indexOf("MSIE 10")), pe
                },
                ge = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                me = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                ve = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                },
                ye = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                be = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                we = be.slice(3),
                Ee = {
                    FLIP: "flip",
                    CLOCKWISE: "clockwise",
                    COUNTERCLOCKWISE: "counterclockwise"
                },
                Te = {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: re
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: ne,
                        offset: 0
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: ie,
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent"
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: Z
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: X,
                        element: "[x-arrow]"
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: J,
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport"
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: oe
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: ae
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: Y,
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right"
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: G,
                        onLoad: q,
                        gpuAcceleration: void 0
                    }
                },
                _e = {
                    placement: "bottom",
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function() {},
                    onUpdate: function() {},
                    modifiers: Te
                },
                xe = function() {
                    function e(t, n) {
                        var i = this,
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        ge(this, e), this.scheduleUpdate = function() {
                            return requestAnimationFrame(i.update)
                        }, this.update = fe(this.update.bind(this)), this.options = ye({}, e.Defaults, a), this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(ye({}, e.Defaults.modifiers, a.modifiers)).forEach(function(t) {
                            i.options.modifiers[t] = ye({}, e.Defaults.modifiers[t] || {}, a.modifiers ? a.modifiers[t] : {})
                        }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                            return ye({
                                name: e
                            }, i.options.modifiers[e])
                        }).sort(function(e, t) {
                            return e.order - t.order
                        }), this.modifiers.forEach(function(e) {
                            e.enabled && r(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                        }), this.update();
                        var o = this.options.eventsEnabled;
                        o && this.enableEventListeners(), this.state.eventsEnabled = o
                    }
                    return me(e, [{
                        key: "update",
                        value: function() {
                            return N.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            return M.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function() {
                            return j.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function() {
                            return $.call(this)
                        }
                    }]), e
                }();
            xe.Utils = ("undefined" != typeof window ? window : e).PopperUtils, xe.placements = be, xe.Defaults = _e, t.default = xe
        }.call(t, n(149))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    (function(e) {
        e(document).ready(function() {
            function t(t) {
                e(".main__grid .mark").filter(function() {
                    e(this).data("tag") === t && e(this).toggleClass("mark_selected")
                })
            }
            e(".tags").on("click", ".link, .icon-close", function(n) {
                n.preventDefault(), e(this).parents(".tags__item").toggleClass("tags__item_selected"), t(e(this).parents(".tags__item").data("tag"))
            })
        })
    }).call(t, n(0))
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    ! function(t, n) {
        e.exports = n()
    }(0, function() {
        "use strict";

        function e(e, t) {
            var n = [],
                i = 0;
            if (e && !t && e instanceof B) return e;
            if (e)
                if ("string" == typeof e) {
                    var r, a, o = e.trim();
                    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                        var s = "div";
                        for (0 === o.indexOf("<li") && (s = "ul"), 0 === o.indexOf("<tr") && (s = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (s = "tr"), 0 === o.indexOf("<tbody") && (s = "table"), 0 === o.indexOf("<option") && (s = "select"), a = document.createElement(s), a.innerHTML = o, i = 0; i < a.childNodes.length; i += 1) n.push(a.childNodes[i])
                    } else
                        for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])], i = 0; i < r.length; i += 1) r[i] && n.push(r[i])
                } else if (e.nodeType || e === window || e === document) n.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (i = 0; i < e.length; i += 1) n.push(e[i]);
            return new B(n)
        }

        function t(e) {
            for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }

        function n(e) {
            var t = this;
            if (void 0 === e) return this;
            for (var n = e.split(" "), i = 0; i < n.length; i += 1)
                for (var r = 0; r < this.length; r += 1) void 0 !== t[r].classList && t[r].classList.add(n[i]);
            return this
        }

        function i(e) {
            for (var t = this, n = e.split(" "), i = 0; i < n.length; i += 1)
                for (var r = 0; r < this.length; r += 1) void 0 !== t[r].classList && t[r].classList.remove(n[i]);
            return this
        }

        function r(e) {
            return !!this[0] && this[0].classList.contains(e)
        }

        function a(e) {
            for (var t = this, n = e.split(" "), i = 0; i < n.length; i += 1)
                for (var r = 0; r < this.length; r += 1) void 0 !== t[r].classList && t[r].classList.toggle(n[i]);
            return this
        }

        function o(e, t) {
            var n = arguments,
                i = this;
            if (1 !== arguments.length || "string" != typeof e) {
                for (var r = 0; r < this.length; r += 1)
                    if (2 === n.length) i[r].setAttribute(e, t);
                    else
                        for (var a in e) i[r][a] = e[a], i[r].setAttribute(a, e[a]);
                return this
            }
            if (this[0]) return this[0].getAttribute(e)
        }

        function s(e) {
            for (var t = this, n = 0; n < this.length; n += 1) t[n].removeAttribute(e);
            return this
        }

        function l(e, t) {
            var n, i = this;
            if (void 0 !== t) {
                for (var r = 0; r < this.length; r += 1) n = i[r], n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
                return this
            }
            if (n = this[0]) {
                if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e];
                var a = n.getAttribute("data-" + e);
                if (a) return a
            } else;
        }

        function c(e) {
            for (var t = this, n = 0; n < this.length; n += 1) {
                var i = t[n].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        }

        function u(e) {
            var t = this;
            "string" != typeof e && (e += "ms");
            for (var n = 0; n < this.length; n += 1) {
                var i = t[n].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        }

        function d() {
            function t(t) {
                var n = t.target;
                if (n) {
                    var i = t.target.dom7EventData || [];
                    if (i.unshift(t), e(n).is(s)) l.apply(n, i);
                    else
                        for (var r = e(n).parents(), a = 0; a < r.length; a += 1) e(r[a]).is(s) && l.apply(r[a], i)
                }
            }

            function n(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.unshift(e), l.apply(this, t)
            }
            for (var i = this, r = [], a = arguments.length; a--;) r[a] = arguments[a];
            var o = r[0],
                s = r[1],
                l = r[2],
                c = r[3];
            if ("function" == typeof r[1]) {
                var u;
                u = r, o = u[0], l = u[1], c = u[2], s = void 0
            }
            c || (c = !1);
            for (var d, f = o.split(" "), p = 0; p < this.length; p += 1) {
                var h = i[p];
                if (s)
                    for (d = 0; d < f.length; d += 1) h.dom7LiveListeners || (h.dom7LiveListeners = []), h.dom7LiveListeners.push({
                        type: o,
                        listener: l,
                        proxyListener: t
                    }), h.addEventListener(f[d], t, c);
                else
                    for (d = 0; d < f.length; d += 1) h.dom7Listeners || (h.dom7Listeners = []), h.dom7Listeners.push({
                        type: o,
                        listener: l,
                        proxyListener: n
                    }), h.addEventListener(f[d], n, c)
            }
            return this
        }

        function f() {
            for (var e = this, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            var i = t[0],
                r = t[1],
                a = t[2],
                o = t[3];
            if ("function" == typeof t[1]) {
                var s;
                s = t, i = s[0], a = s[1], o = s[2], r = void 0
            }
            o || (o = !1);
            for (var l = i.split(" "), c = 0; c < l.length; c += 1)
                for (var u = 0; u < this.length; u += 1) {
                    var d = e[u];
                    if (r) {
                        if (d.dom7LiveListeners)
                            for (var f = 0; f < d.dom7LiveListeners.length; f += 1) a ? d.dom7LiveListeners[f].listener === a && d.removeEventListener(l[c], d.dom7LiveListeners[f].proxyListener, o) : d.dom7LiveListeners[f].type === l[c] && d.removeEventListener(l[c], d.dom7LiveListeners[f].proxyListener, o)
                    } else if (d.dom7Listeners)
                        for (var p = 0; p < d.dom7Listeners.length; p += 1) a ? d.dom7Listeners[p].listener === a && d.removeEventListener(l[c], d.dom7Listeners[p].proxyListener, o) : d.dom7Listeners[p].type === l[c] && d.removeEventListener(l[c], d.dom7Listeners[p].proxyListener, o)
                }
            return this
        }

        function p() {
            for (var e = this, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            for (var i = t[0].split(" "), r = t[1], a = 0; a < i.length; a += 1)
                for (var o = 0; o < this.length; o += 1) {
                    var s = void 0;
                    try {
                        s = new window.CustomEvent(i[a], {
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        s = document.createEvent("Event"), s.initEvent(i[a], !0, !0), s.detail = r
                    }
                    e[o].dom7EventData = t.filter(function(e, t) {
                        return t > 0
                    }), e[o].dispatchEvent(s), e[o].dom7EventData = [], delete e[o].dom7EventData
                }
            return this
        }

        function h(e) {
            function t(a) {
                if (a.target === this)
                    for (e.call(this, a), n = 0; n < i.length; n += 1) r.off(i[n], t)
            }
            var n, i = ["webkitTransitionEnd", "transitionend"],
                r = this;
            if (e)
                for (n = 0; n < i.length; n += 1) r.on(i[n], t);
            return this
        }

        function g(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }

        function m(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }

        function v() {
            if (this.length > 0) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    n = document.body,
                    i = e.clientTop || n.clientTop || 0,
                    r = e.clientLeft || n.clientLeft || 0,
                    a = e === window ? window.scrollY : e.scrollTop,
                    o = e === window ? window.scrollX : e.scrollLeft;
                return {
                    top: t.top + a - i,
                    left: t.left + o - r
                }
            }
            return null
        }

        function y() {
            return this[0] ? window.getComputedStyle(this[0], null) : {}
        }

        function b(e, t) {
            var n, i = this;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (n = 0; n < this.length; n += 1)
                        for (var r in e) i[n].style[r] = e[r];
                    return this
                }
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (n = 0; n < this.length; n += 1) i[n].style[e] = t;
                return this
            }
            return this
        }

        function w(e) {
            var t = this;
            if (!e) return this;
            for (var n = 0; n < this.length; n += 1)
                if (!1 === e.call(t[n], n, t[n])) return t;
            return this
        }

        function E(e) {
            var t = this;
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var n = 0; n < this.length; n += 1) t[n].innerHTML = e;
            return this
        }

        function T(e) {
            var t = this;
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var n = 0; n < this.length; n += 1) t[n].textContent = e;
            return this
        }

        function _(t) {
            var n, i, r = this[0];
            if (!r || void 0 === t) return !1;
            if ("string" == typeof t) {
                if (r.matches) return r.matches(t);
                if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
                if (r.msMatchesSelector) return r.msMatchesSelector(t);
                for (n = e(t), i = 0; i < n.length; i += 1)
                    if (n[i] === r) return !0;
                return !1
            }
            if (t === document) return r === document;
            if (t === window) return r === window;
            if (t.nodeType || t instanceof B) {
                for (n = t.nodeType ? [t] : t, i = 0; i < n.length; i += 1)
                    if (n[i] === r) return !0;
                return !1
            }
            return !1
        }

        function x() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }

        function C(e) {
            if (void 0 === e) return this;
            var t, n = this.length;
            return e > n - 1 ? new B([]) : e < 0 ? (t = n + e, new B(t < 0 ? [] : [this[t]])) : new B([this[e]])
        }

        function S() {
            for (var e = this, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            for (var i, r = 0; r < t.length; r += 1) {
                i = t[r];
                for (var a = 0; a < this.length; a += 1)
                    if ("string" == typeof i) {
                        var o = document.createElement("div");
                        for (o.innerHTML = i; o.firstChild;) e[a].appendChild(o.firstChild)
                    } else if (i instanceof B)
                    for (var s = 0; s < i.length; s += 1) e[a].appendChild(i[s]);
                else e[a].appendChild(i)
            }
            return this
        }

        function D(e) {
            var t, n, i = this;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var r = document.createElement("div");
                    for (r.innerHTML = e, n = r.childNodes.length - 1; n >= 0; n -= 1) i[t].insertBefore(r.childNodes[n], i[t].childNodes[0])
                } else if (e instanceof B)
                for (n = 0; n < e.length; n += 1) i[t].insertBefore(e[n], i[t].childNodes[0]);
            else i[t].insertBefore(e, i[t].childNodes[0]);
            return this
        }

        function A(t) {
            return new B(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
        }

        function I(t) {
            var n = [],
                i = this[0];
            if (!i) return new B([]);
            for (; i.nextElementSibling;) {
                var r = i.nextElementSibling;
                t ? e(r).is(t) && n.push(r) : n.push(r), i = r
            }
            return new B(n)
        }

        function k(t) {
            if (this.length > 0) {
                var n = this[0];
                return new B(t ? n.previousElementSibling && e(n.previousElementSibling).is(t) ? [n.previousElementSibling] : [] : n.previousElementSibling ? [n.previousElementSibling] : [])
            }
            return new B([])
        }

        function O(t) {
            var n = [],
                i = this[0];
            if (!i) return new B([]);
            for (; i.previousElementSibling;) {
                var r = i.previousElementSibling;
                t ? e(r).is(t) && n.push(r) : n.push(r), i = r
            }
            return new B(n)
        }

        function N(n) {
            for (var i = this, r = [], a = 0; a < this.length; a += 1) null !== i[a].parentNode && (n ? e(i[a].parentNode).is(n) && r.push(i[a].parentNode) : r.push(i[a].parentNode));
            return e(t(r))
        }

        function P(n) {
            for (var i = this, r = [], a = 0; a < this.length; a += 1)
                for (var o = i[a].parentNode; o;) n ? e(o).is(n) && r.push(o) : r.push(o), o = o.parentNode;
            return e(t(r))
        }

        function L(e) {
            var t = this;
            return void 0 === e ? new B([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }

        function M(e) {
            for (var t = this, n = [], i = 0; i < this.length; i += 1)
                for (var r = t[i].querySelectorAll(e), a = 0; a < r.length; a += 1) n.push(r[a]);
            return new B(n)
        }

        function H(n) {
            for (var i = this, r = [], a = 0; a < this.length; a += 1)
                for (var o = i[a].childNodes, s = 0; s < o.length; s += 1) n ? 1 === o[s].nodeType && e(o[s]).is(n) && r.push(o[s]) : 1 === o[s].nodeType && r.push(o[s]);
            return new B(t(r))
        }

        function z() {
            for (var e = this, t = 0; t < this.length; t += 1) e[t].parentNode && e[t].parentNode.removeChild(e[t]);
            return this
        }

        function R() {
            for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
            var i, r, a = this;
            for (i = 0; i < t.length; i += 1) {
                var o = e(t[i]);
                for (r = 0; r < o.length; r += 1) a[a.length] = o[r], a.length += 1
            }
            return a
        }

        function j() {
            var e = this,
                t = e.params,
                n = e.touchEvents,
                i = e.el,
                r = e.wrapperEl;
            e.onTouchStart = ze.bind(e), e.onTouchMove = Re.bind(e), e.onTouchEnd = je.bind(e), e.onClick = $e.bind(e);
            var a = "container" === t.touchEventsTarget ? i : r,
                o = !!t.nested;
            if (K.pointerEvents || K.prefixedPointerEvents) a.addEventListener(n.start, e.onTouchStart, !1), (K.touch ? a : X).addEventListener(n.move, e.onTouchMove, o), (K.touch ? a : X).addEventListener(n.end, e.onTouchEnd, !1);
            else {
                if (K.touch) {
                    var s = !("touchstart" !== n.start || !K.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    a.addEventListener(n.start, e.onTouchStart, s), a.addEventListener(n.move, e.onTouchMove, K.passiveListener ? {
                        passive: !1,
                        capture: o
                    } : o), a.addEventListener(n.end, e.onTouchEnd, s)
                }(t.simulateTouch && !He.ios && !He.android || t.simulateTouch && !K.touch && He.ios) && (a.addEventListener("mousedown", e.onTouchStart, !1), X.addEventListener("mousemove", e.onTouchMove, o), X.addEventListener("mouseup", e.onTouchEnd, !1))
            }(t.preventClicks || t.preventClicksPropagation) && a.addEventListener("click", e.onClick, !0), e.on("resize observerUpdate", We)
        }

        function W() {
            var e = this,
                t = e.params,
                n = e.touchEvents,
                i = e.el,
                r = e.wrapperEl,
                a = "container" === t.touchEventsTarget ? i : r,
                o = !!t.nested;
            if (K.pointerEvents || K.prefixedPointerEvents) a.removeEventListener(n.start, e.onTouchStart, !1), (K.touch ? a : X).removeEventListener(n.move, e.onTouchMove, o), (K.touch ? a : X).removeEventListener(n.end, e.onTouchEnd, !1);
            else {
                if (K.touch) {
                    var s = !("onTouchStart" !== n.start || !K.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    a.removeEventListener(n.start, e.onTouchStart, s), a.removeEventListener(n.move, e.onTouchMove, o), a.removeEventListener(n.end, e.onTouchEnd, s)
                }(t.simulateTouch && !He.ios && !He.android || t.simulateTouch && !K.touch && He.ios) && (a.removeEventListener("mousedown", e.onTouchStart, !1), X.removeEventListener("mousemove", e.onTouchMove, o), X.removeEventListener("mouseup", e.onTouchEnd, !1))
            }(t.preventClicks || t.preventClicksPropagation) && a.removeEventListener("click", e.onClick, !0), e.off("resize observerUpdate", We)
        }

        function $() {
            var e = this,
                t = e.isLocked;
            e.isLocked = 1 === e.snapGrid.length, e.allowTouchMove = !e.isLocked, t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
        }

        function F() {
            var e = "onwheel" in X;
            if (!e) {
                var t = X.createElement("div");
                t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
            }
            return !e && X.implementation && X.implementation.hasFeature && !0 !== X.implementation.hasFeature("", "") && (e = X.implementation.hasFeature("Events.wheel", "3.0")), e
        }
        var B = function(e) {
            for (var t = this, n = 0; n < e.length; n += 1) t[n] = e[n];
            return t.length = e.length, this
        };
        e.fn = B.prototype, e.Class = B, e.Dom7 = B;
        var V = ("resize scroll".split(" "), {
            addClass: n,
            removeClass: i,
            hasClass: r,
            toggleClass: a,
            attr: o,
            removeAttr: s,
            data: l,
            transform: c,
            transition: u,
            on: d,
            off: f,
            trigger: p,
            transitionEnd: h,
            outerWidth: g,
            outerHeight: m,
            offset: v,
            css: b,
            each: w,
            html: E,
            text: T,
            is: _,
            index: x,
            eq: C,
            append: S,
            prepend: D,
            next: A,
            nextAll: I,
            prev: k,
            prevAll: O,
            parent: N,
            parents: P,
            closest: L,
            find: M,
            children: H,
            remove: z,
            add: R,
            styles: y
        });
        Object.keys(V).forEach(function(t) {
            e.fn[t] = V[t]
        });
        var G;
        G = "undefined" == typeof window ? {
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {}
            },
            Image: function() {},
            Date: function() {},
            screen: {}
        } : window;
        var q, Y = G,
            U = {
                deleteProps: function(e) {
                    var t = e;
                    Object.keys(t).forEach(function(e) {
                        try {
                            t[e] = null
                        } catch (e) {}
                        try {
                            delete t[e]
                        } catch (e) {}
                    })
                },
                nextTick: function(e, t) {
                    return void 0 === t && (t = 0), setTimeout(e, t)
                },
                now: function() {
                    return Date.now()
                },
                getTranslate: function(e, t) {
                    void 0 === t && (t = "x");
                    var n, i, r, a = Y.getComputedStyle(e, null);
                    return Y.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function(e) {
                        return e.replace(",", ".")
                    }).join(", ")), r = new Y.WebKitCSSMatrix("none" === i ? "" : i)) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = r.toString().split(",")), "x" === t && (i = Y.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = Y.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
                },
                parseUrlQuery: function(e) {
                    var t, n, i, r, a = {},
                        o = e || Y.location.href;
                    if ("string" == typeof o && o.length)
                        for (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "", n = o.split("&").filter(function(e) {
                                return "" !== e
                            }), r = n.length, t = 0; t < r; t += 1) i = n[t].replace(/#\S+/g, "").split("="), a[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
                    return a
                },
                isObject: function(e) {
                    return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
                },
                extend: function() {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
                        var r = e[i];
                        if (void 0 !== r && null !== r)
                            for (var a = Object.keys(Object(r)), o = 0, s = a.length; o < s; o += 1) {
                                var l = a[o],
                                    c = Object.getOwnPropertyDescriptor(r, l);
                                void 0 !== c && c.enumerable && (U.isObject(n[l]) && U.isObject(r[l]) ? U.extend(n[l], r[l]) : !U.isObject(n[l]) && U.isObject(r[l]) ? (n[l] = {}, U.extend(n[l], r[l])) : n[l] = r[l])
                            }
                    }
                    return n
                }
            };
        q = "undefined" == typeof document ? {
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return {}
            },
            querySelectorAll: function() {
                return []
            },
            createElement: function() {
                return {
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document;
        var X = q,
            K = function() {
                var e = X.createElement("div");
                return {
                    touch: Y.Modernizr && !0 === Y.Modernizr.touch || function() {
                        return !!("ontouchstart" in Y || Y.DocumentTouch && X instanceof Y.DocumentTouch)
                    }(),
                    pointerEvents: !(!Y.navigator.pointerEnabled && !Y.PointerEvent),
                    prefixedPointerEvents: !!Y.navigator.msPointerEnabled,
                    transition: function() {
                        var t = e.style;
                        return "transition" in t || "webkitTransition" in t || "MozTransition" in t
                    }(),
                    transforms3d: Y.Modernizr && !0 === Y.Modernizr.csstransforms3d || function() {
                        var t = e.style;
                        return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
                    }(),
                    flexbox: function() {
                        for (var t = e.style, n = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < n.length; i += 1)
                            if (n[i] in t) return !0;
                        return !1
                    }(),
                    observer: function() {
                        return "MutationObserver" in Y || "WebkitMutationObserver" in Y
                    }(),
                    passiveListener: function() {
                        var e = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get: function() {
                                    e = !0
                                }
                            });
                            Y.addEventListener("testPassiveListener", null, t)
                        } catch (e) {}
                        return e
                    }(),
                    gestures: function() {
                        return "ongesturestart" in Y
                    }()
                }
            }(),
            Q = function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                    t.on(e, t.params.on[e])
                })
            },
            J = {
                components: {
                    configurable: !0
                }
            };
        Q.prototype.on = function(e, t) {
            var n = this;
            return "function" != typeof t ? n : (e.split(" ").forEach(function(e) {
                n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e].push(t)
            }), n)
        }, Q.prototype.once = function(e, t) {
            function n() {
                for (var r = [], a = arguments.length; a--;) r[a] = arguments[a];
                t.apply(i, r), i.off(e, n)
            }
            var i = this;
            return "function" != typeof t ? i : i.on(e, n)
        }, Q.prototype.off = function(e, t) {
            var n = this;
            return e.split(" ").forEach(function(e) {
                void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e].forEach(function(i, r) {
                    i === t && n.eventsListeners[e].splice(r, 1)
                })
            }), n
        }, Q.prototype.emit = function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = this;
            if (!n.eventsListeners) return n;
            var i, r, a;
            return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], r = e.slice(1, e.length), a = n) : (i = e[0].events, r = e[0].data, a = e[0].context || n), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
                if (n.eventsListeners[e]) {
                    var t = [];
                    n.eventsListeners[e].forEach(function(e) {
                        t.push(e)
                    }), t.forEach(function(e) {
                        e.apply(a, r)
                    })
                }
            }), n
        }, Q.prototype.useModulesParams = function(e) {
            var t = this;
            t.modules && Object.keys(t.modules).forEach(function(n) {
                var i = t.modules[n];
                i.params && U.extend(e, i.params)
            })
        }, Q.prototype.useModules = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules && Object.keys(t.modules).forEach(function(n) {
                var i = t.modules[n],
                    r = e[n] || {};
                i.instance && Object.keys(i.instance).forEach(function(e) {
                    var n = i.instance[e];
                    t[e] = "function" == typeof n ? n.bind(t) : n
                }), i.on && t.on && Object.keys(i.on).forEach(function(e) {
                    t.on(e, i.on[e])
                }), i.create && i.create.bind(t)(r)
            })
        }, J.components.set = function(e) {
            var t = this;
            t.use && t.use(e)
        }, Q.installModule = function(e) {
            for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
            var i = this;
            i.prototype.modules || (i.prototype.modules = {});
            var r = e.name || Object.keys(i.prototype.modules).length + "_" + U.now();
            return i.prototype.modules[r] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
                i.prototype[t] = e.proto[t]
            }), e.static && Object.keys(e.static).forEach(function(t) {
                i[t] = e.static[t]
            }), e.install && e.install.apply(i, t), i
        }, Q.use = function(e) {
            for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
            var i = this;
            return Array.isArray(e) ? (e.forEach(function(e) {
                return i.installModule(e)
            }), i) : i.installModule.apply(i, [e].concat(t))
        }, Object.defineProperties(Q, J);
        var Z = function() {
                var e, t, n = this,
                    i = n.$el;
                e = void 0 !== n.params.width ? n.params.width : i[0].clientWidth, t = void 0 !== n.params.height ? n.params.height : i[0].clientHeight, 0 === e && n.isHorizontal() || 0 === t && n.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), U.extend(n, {
                    width: e,
                    height: t,
                    size: n.isHorizontal() ? e : t
                }))
            },
            ee = function() {
                var e = this,
                    t = e.params,
                    n = e.$wrapperEl,
                    i = e.size,
                    r = e.rtl,
                    a = e.wrongRTL,
                    o = n.children("." + e.params.slideClass),
                    s = e.virtual && t.virtual.enabled,
                    l = s ? e.virtual.slides.length : o.length,
                    c = [],
                    u = [],
                    d = [],
                    f = t.slidesOffsetBefore;
                "function" == typeof f && (f = t.slidesOffsetBefore.call(e));
                var p = t.slidesOffsetAfter;
                "function" == typeof p && (p = t.slidesOffsetAfter.call(e));
                var h = l,
                    g = e.snapGrid.length,
                    m = e.snapGrid.length,
                    v = t.spaceBetween,
                    y = -f,
                    b = 0,
                    w = 0;
                if (void 0 !== i) {
                    "string" == typeof v && v.indexOf("%") >= 0 && (v = parseFloat(v.replace("%", "")) / 100 * i), e.virtualSize = -v, r ? o.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : o.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var E;
                    t.slidesPerColumn > 1 && (E = Math.floor(l / t.slidesPerColumn) === l / e.params.slidesPerColumn ? l : Math.ceil(l / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (E = Math.max(E, t.slidesPerView * t.slidesPerColumn)));
                    for (var T, _ = t.slidesPerColumn, x = E / _, C = x - (t.slidesPerColumn * x - l), S = 0; S < l; S += 1) {
                        T = 0;
                        var D = o.eq(S);
                        if (t.slidesPerColumn > 1) {
                            var A = void 0,
                                I = void 0,
                                k = void 0;
                            "column" === t.slidesPerColumnFill ? (I = Math.floor(S / _), k = S - I * _, (I > C || I === C && k === _ - 1) && (k += 1) >= _ && (k = 0, I += 1), A = I + k * E / _, D.css({
                                "-webkit-box-ordinal-group": A,
                                "-moz-box-ordinal-group": A,
                                "-ms-flex-order": A,
                                "-webkit-order": A,
                                order: A
                            })) : (k = Math.floor(S / x), I = S - k * x), D.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== k && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", I).attr("data-swiper-row", k)
                        }
                        "none" !== D.css("display") && ("auto" === t.slidesPerView ? (T = e.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0), t.roundLengths && (T = Math.floor(T))) : (T = (i - (t.slidesPerView - 1) * v) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), o[S] && (e.isHorizontal() ? o[S].style.width = T + "px" : o[S].style.height = T + "px")), o[S] && (o[S].swiperSlideSize = T), d.push(T), t.centeredSlides ? (y = y + T / 2 + b / 2 + v, 0 === b && 0 !== S && (y = y - i / 2 - v), 0 === S && (y = y - i / 2 - v), Math.abs(y) < .001 && (y = 0), w % t.slidesPerGroup == 0 && c.push(y), u.push(y)) : (w % t.slidesPerGroup == 0 && c.push(y), u.push(y), y = y + T + v), e.virtualSize += T + v, b = T, w += 1)
                    }
                    e.virtualSize = Math.max(e.virtualSize, i) + p;
                    var O;
                    if (r && a && ("slide" === t.effect || "coverflow" === t.effect) && n.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }), K.flexbox && !t.setWrapperSize || (e.isHorizontal() ? n.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }) : n.css({
                            height: e.virtualSize + t.spaceBetween + "px"
                        })), t.slidesPerColumn > 1 && (e.virtualSize = (T + t.spaceBetween) * E, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? n.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }) : n.css({
                            height: e.virtualSize + t.spaceBetween + "px"
                        }), t.centeredSlides)) {
                        O = [];
                        for (var N = 0; N < c.length; N += 1) c[N] < e.virtualSize + c[0] && O.push(c[N]);
                        c = O
                    }
                    if (!t.centeredSlides) {
                        O = [];
                        for (var P = 0; P < c.length; P += 1) c[P] <= e.virtualSize - i && O.push(c[P]);
                        c = O, Math.floor(e.virtualSize - i) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - i)
                    }
                    0 === c.length && (c = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? r ? o.css({
                        marginLeft: v + "px"
                    }) : o.css({
                        marginRight: v + "px"
                    }) : o.css({
                        marginBottom: v + "px"
                    })), U.extend(e, {
                        slides: o,
                        snapGrid: c,
                        slidesGrid: u,
                        slidesSizesGrid: d
                    }), l !== h && e.emit("slidesLengthChange"), c.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), u.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
                }
            },
            te = function() {
                var e, t = this,
                    n = [],
                    i = 0;
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
                        var r = t.activeIndex + e;
                        if (r > t.slides.length) break;
                        n.push(t.slides.eq(r)[0])
                    } else n.push(t.slides.eq(t.activeIndex)[0]);
                for (e = 0; e < n.length; e += 1)
                    if (void 0 !== n[e]) {
                        var a = n[e].offsetHeight;
                        i = a > i ? a : i
                    }
                i && t.$wrapperEl.css("height", i + "px")
            },
            ne = function() {
                for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
            },
            ie = function(e) {
                void 0 === e && (e = this.translate || 0);
                var t = this,
                    n = t.params,
                    i = t.slides,
                    r = t.rtl;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                    var a = -e;
                    r && (a = e), i.removeClass(n.slideVisibleClass);
                    for (var o = 0; o < i.length; o += 1) {
                        var s = i[o],
                            l = (a + (n.centeredSlides ? t.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + n.spaceBetween);
                        if (n.watchSlidesVisibility) {
                            var c = -(a - s.swiperSlideOffset),
                                u = c + t.slidesSizesGrid[o];
                            (c >= 0 && c < t.size || u > 0 && u <= t.size || c <= 0 && u >= t.size) && i.eq(o).addClass(n.slideVisibleClass)
                        }
                        s.progress = r ? -l : l
                    }
                }
            },
            re = function(e) {
                void 0 === e && (e = this.translate || 0);
                var t = this,
                    n = t.params,
                    i = t.maxTranslate() - t.minTranslate(),
                    r = t.progress,
                    a = t.isBeginning,
                    o = t.isEnd,
                    s = a,
                    l = o;
                0 === i ? (r = 0, a = !0, o = !0) : (r = (e - t.minTranslate()) / i, a = r <= 0, o = r >= 1), U.extend(t, {
                    progress: r,
                    isBeginning: a,
                    isEnd: o
                }), (n.watchSlidesProgress || n.watchSlidesVisibility) && t.updateSlidesProgress(e), a && !s && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (s && !a || l && !o) && t.emit("fromEdge"), t.emit("progress", r)
            },
            ae = function() {
                var e = this,
                    t = e.slides,
                    n = e.params,
                    i = e.$wrapperEl,
                    r = e.activeIndex,
                    a = e.realIndex,
                    o = e.virtual && n.virtual.enabled;
                t.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass);
                var s;
                s = o ? e.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r), s.addClass(n.slideActiveClass), n.loop && (s.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass));
                var l = s.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
                var c = s.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                n.loop && 0 === c.length && (c = t.eq(-1), c.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
            },
            oe = function(e) {
                var t, n = this,
                    i = n.rtl ? n.translate : -n.translate,
                    r = n.slidesGrid,
                    a = n.snapGrid,
                    o = n.params,
                    s = n.activeIndex,
                    l = n.realIndex,
                    c = n.snapIndex,
                    u = e;
                if (void 0 === u) {
                    for (var d = 0; d < r.length; d += 1) void 0 !== r[d + 1] ? i >= r[d] && i < r[d + 1] - (r[d + 1] - r[d]) / 2 ? u = d : i >= r[d] && i < r[d + 1] && (u = d + 1) : i >= r[d] && (u = d);
                    o.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                }
                if (t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(u / o.slidesPerGroup), t >= a.length && (t = a.length - 1), u === s) return void(t !== c && (n.snapIndex = t, n.emit("snapIndexChange")));
                var f = parseInt(n.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                U.extend(n, {
                    snapIndex: t,
                    realIndex: f,
                    previousIndex: s,
                    activeIndex: u
                }), n.emit("activeIndexChange"), n.emit("snapIndexChange"), l !== f && n.emit("realIndexChange"), n.emit("slideChange")
            },
            se = function(t) {
                var n = this,
                    i = n.params,
                    r = e(t.target).closest("." + i.slideClass)[0],
                    a = !1;
                if (r)
                    for (var o = 0; o < n.slides.length; o += 1) n.slides[o] === r && (a = !0);
                if (!r || !a) return n.clickedSlide = void 0, void(n.clickedIndex = void 0);
                n.clickedSlide = r, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(e(r).attr("data-swiper-slide-index"), 10) : n.clickedIndex = e(r).index(), i.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
            },
            le = {
                updateSize: Z,
                updateSlides: ee,
                updateAutoHeight: te,
                updateSlidesOffset: ne,
                updateSlidesProgress: ie,
                updateProgress: re,
                updateSlidesClasses: ae,
                updateActiveIndex: oe,
                updateClickedSlide: se
            },
            ce = function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this,
                    n = t.params,
                    i = t.rtl,
                    r = t.translate,
                    a = t.$wrapperEl;
                if (n.virtualTranslate) return i ? -r : r;
                var o = U.getTranslate(a[0], e);
                return i && (o = -o), o || 0
            },
            ue = function(e, t) {
                var n = this,
                    i = n.rtl,
                    r = n.params,
                    a = n.$wrapperEl,
                    o = n.progress,
                    s = 0,
                    l = 0;
                n.isHorizontal() ? s = i ? -e : e : l = e, r.roundLengths && (s = Math.floor(s), l = Math.floor(l)), r.virtualTranslate || (K.transforms3d ? a.transform("translate3d(" + s + "px, " + l + "px, 0px)") : a.transform("translate(" + s + "px, " + l + "px)")), n.translate = n.isHorizontal() ? s : l;
                var c, u = n.maxTranslate() - n.minTranslate();
                c = 0 === u ? 0 : (e - n.minTranslate()) / u, c !== o && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
            },
            de = function() {
                return -this.snapGrid[0]
            },
            fe = function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            pe = {
                getTranslate: ce,
                setTranslate: ue,
                minTranslate: de,
                maxTranslate: fe
            },
            he = function(e, t) {
                var n = this;
                n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
            },
            ge = function(e) {
                void 0 === e && (e = !0);
                var t = this,
                    n = t.activeIndex,
                    i = t.params,
                    r = t.previousIndex;
                i.autoHeight && t.updateAutoHeight(), t.emit("transitionStart"), e && n !== r && (t.emit("slideChangeTransitionStart"), n > r ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"))
            },
            me = function(e) {
                void 0 === e && (e = !0);
                var t = this,
                    n = t.activeIndex,
                    i = t.previousIndex;
                t.animating = !1, t.setTransition(0), t.emit("transitionEnd"), e && n !== i && (t.emit("slideChangeTransitionEnd"), n > i ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"))
            },
            ve = {
                setTransition: he,
                transitionStart: ge,
                transitionEnd: me
            },
            ye = function(e, t, n, i) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
                var r = this,
                    a = e;
                a < 0 && (a = 0);
                var o = r.params,
                    s = r.snapGrid,
                    l = r.slidesGrid,
                    c = r.previousIndex,
                    u = r.activeIndex,
                    d = r.rtl,
                    f = r.$wrapperEl,
                    p = Math.floor(a / o.slidesPerGroup);
                p >= s.length && (p = s.length - 1), (u || o.initialSlide || 0) === (c || 0) && n && r.emit("beforeSlideChangeStart");
                var h = -s[p];
                if (r.updateProgress(h), o.normalizeSlideIndex)
                    for (var g = 0; g < l.length; g += 1) - Math.floor(100 * h) >= Math.floor(100 * l[g]) && (a = g);
                if (r.initialized) {
                    if (!r.allowSlideNext && h < r.translate && h < r.minTranslate()) return !1;
                    if (!r.allowSlidePrev && h > r.translate && h > r.maxTranslate() && (u || 0) !== a) return !1
                }
                return d && -h === r.translate || !d && h === r.translate ? (r.updateActiveIndex(a), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(h), !1) : (0 !== t && K.transition ? (r.setTransition(t), r.setTranslate(h), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n), r.animating || (r.animating = !0, f.transitionEnd(function() {
                    r && !r.destroyed && r.transitionEnd(n)
                }))) : (r.setTransition(0), r.setTranslate(h), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n), r.transitionEnd(n)), !0)
            },
            be = function(e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this,
                    r = i.params,
                    a = i.animating;
                return r.loop ? !a && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n)) : i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n)
            },
            we = function(e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this,
                    r = i.params,
                    a = i.animating;
                return r.loop ? !a && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex - 1, e, t, n)) : i.slideTo(i.activeIndex - 1, e, t, n)
            },
            Ee = function(e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this;
                return i.slideTo(i.activeIndex, e, t, n)
            },
            Te = function() {
                var t, n = this,
                    i = n.params,
                    r = n.$wrapperEl,
                    a = "auto" === i.slidesPerView ? n.slidesPerViewDynamic() : i.slidesPerView,
                    o = n.clickedIndex;
                if (i.loop) {
                    if (n.animating) return;
                    t = parseInt(e(n.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < n.loopedSlides - a / 2 || o > n.slides.length - n.loopedSlides + a / 2 ? (n.loopFix(), o = r.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), U.nextTick(function() {
                        n.slideTo(o)
                    })) : n.slideTo(o) : o > n.slides.length - a ? (n.loopFix(), o = r.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), U.nextTick(function() {
                        n.slideTo(o)
                    })) : n.slideTo(o)
                } else n.slideTo(o)
            },
            _e = {
                slideTo: ye,
                slideNext: be,
                slidePrev: we,
                slideReset: Ee,
                slideToClickedSlide: Te
            },
            xe = function() {
                var t = this,
                    n = t.params,
                    i = t.$wrapperEl;
                i.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
                var r = i.children("." + n.slideClass);
                if (n.loopFillGroupWithBlank) {
                    var a = n.slidesPerGroup - r.length % n.slidesPerGroup;
                    if (a !== n.slidesPerGroup) {
                        for (var o = 0; o < a; o += 1) {
                            var s = e(X.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                            i.append(s)
                        }
                        r = i.children("." + n.slideClass)
                    }
                }
                "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length), t.loopedSlides = parseInt(n.loopedSlides || n.slidesPerView, 10), t.loopedSlides += n.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
                var l = [],
                    c = [];
                r.each(function(n, i) {
                    var a = e(i);
                    n < t.loopedSlides && c.push(i), n < r.length && n >= r.length - t.loopedSlides && l.push(i), a.attr("data-swiper-slide-index", n)
                });
                for (var u = 0; u < c.length; u += 1) i.append(e(c[u].cloneNode(!0)).addClass(n.slideDuplicateClass));
                for (var d = l.length - 1; d >= 0; d -= 1) i.prepend(e(l[d].cloneNode(!0)).addClass(n.slideDuplicateClass))
            },
            Ce = function() {
                var e, t = this,
                    n = t.params,
                    i = t.activeIndex,
                    r = t.slides,
                    a = t.loopedSlides,
                    o = t.allowSlidePrev,
                    s = t.allowSlideNext;
                t.allowSlidePrev = !0, t.allowSlideNext = !0, i < a ? (e = r.length - 3 * a + i, e += a, t.slideTo(e, 0, !1, !0)) : ("auto" === n.slidesPerView && i >= 2 * a || i > r.length - 2 * n.slidesPerView) && (e = -r.length + i + a, e += a, t.slideTo(e, 0, !1, !0)), t.allowSlidePrev = o, t.allowSlideNext = s
            },
            Se = function() {
                var e = this,
                    t = e.$wrapperEl,
                    n = e.params,
                    i = e.slides;
                t.children("." + n.slideClass + "." + n.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
            },
            De = {
                loopCreate: xe,
                loopFix: Ce,
                loopDestroy: Se
            },
            Ae = function(e) {
                var t = this;
                if (!K.touch && t.params.simulateTouch) {
                    var n = t.el;
                    n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab"
                }
            },
            Ie = function() {
                var e = this;
                K.touch || (e.el.style.cursor = "")
            },
            ke = {
                setGrabCursor: Ae,
                unsetGrabCursor: Ie
            },
            Oe = function(e) {
                var t = this,
                    n = t.$wrapperEl,
                    i = t.params;
                if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var r = 0; r < e.length; r += 1) e[r] && n.append(e[r]);
                else n.append(e);
                i.loop && t.loopCreate(), i.observer && K.observer || t.update()
            },
            Ne = function(e) {
                var t = this,
                    n = t.params,
                    i = t.$wrapperEl,
                    r = t.activeIndex;
                n.loop && t.loopDestroy();
                var a = r + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) e[o] && i.prepend(e[o]);
                    a = r + e.length
                } else i.prepend(e);
                n.loop && t.loopCreate(), n.observer && K.observer || t.update(), t.slideTo(a, 0, !1)
            },
            Pe = function(e) {
                var t = this,
                    n = t.params,
                    i = t.$wrapperEl,
                    r = t.activeIndex;
                n.loop && (t.loopDestroy(), t.slides = i.children("." + n.slideClass));
                var a, o = r;
                if ("object" == typeof e && "length" in e) {
                    for (var s = 0; s < e.length; s += 1) a = e[s], t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1);
                    o = Math.max(o, 0)
                } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1), o = Math.max(o, 0);
                n.loop && t.loopCreate(), n.observer && K.observer || t.update(), n.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
            },
            Le = function() {
                for (var e = this, t = [], n = 0; n < e.slides.length; n += 1) t.push(n);
                e.removeSlide(t)
            },
            Me = {
                appendSlide: Oe,
                prependSlide: Ne,
                removeSlide: Pe,
                removeAllSlides: Le
            },
            He = function() {
                var e = Y.navigator.userAgent,
                    t = {
                        ios: !1,
                        android: !1,
                        androidChrome: !1,
                        desktop: !1,
                        windows: !1,
                        iphone: !1,
                        ipod: !1,
                        ipad: !1,
                        cordova: Y.cordova || Y.phonegap,
                        phonegap: Y.cordova || Y.phonegap
                    },
                    n = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                    i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    r = e.match(/(iPad).*OS\s([\d_]+)/),
                    a = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    o = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (n && (t.os = "windows", t.osVersion = n[2], t.windows = !0), i && !n && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || o || a) && (t.os = "ios", t.ios = !0), o && !a && (t.osVersion = o[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), a && (t.osVersion = a[3] ? a[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (o || r || a) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                    var s = t.osVersion.split("."),
                        l = X.querySelector('meta[name="viewport"]');
                    t.minimalUi = !t.webView && (a || o) && (1 * s[0] == 7 ? 1 * s[1] >= 1 : 1 * s[0] > 7) && l && l.getAttribute("content").indexOf("minimal-ui") >= 0
                }
                return t.pixelRatio = Y.devicePixelRatio || 1, t
            }(),
            ze = function(t) {
                var n = this,
                    i = n.touchEventsData,
                    r = n.params,
                    a = n.touches,
                    o = t;
                if (o.originalEvent && (o = o.originalEvent), i.isTouchEvent = "touchstart" === o.type, (i.isTouchEvent || !("which" in o) || 3 !== o.which) && (!i.isTouched || !i.isMoved)) {
                    if (r.noSwiping && e(o.target).closest("." + r.noSwipingClass)[0]) return void(n.allowClick = !0);
                    if (!r.swipeHandler || e(o).closest(r.swipeHandler)[0]) {
                        a.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, a.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                        var s = a.currentX,
                            l = a.currentY;
                        if (!(He.ios && !He.cordova && r.iOSEdgeSwipeDetection && s <= r.iOSEdgeSwipeThreshold && s >= window.screen.width - r.iOSEdgeSwipeThreshold)) {
                            if (U.extend(i, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), a.startX = s, a.startY = l, i.touchStartTime = U.now(), n.allowClick = !0, n.updateSize(), n.swipeDirection = void 0, r.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== o.type) {
                                var c = !0;
                                e(o.target).is(i.formElements) && (c = !1), X.activeElement && e(X.activeElement).is(i.formElements) && X.activeElement.blur(), c && n.allowTouchMove && o.preventDefault()
                            }
                            n.emit("touchStart", o)
                        }
                    }
                }
            },
            Re = function(t) {
                var n = this,
                    i = n.touchEventsData,
                    r = n.params,
                    a = n.touches,
                    o = n.rtl,
                    s = t;
                if (s.originalEvent && (s = s.originalEvent), !i.isTouchEvent || "mousemove" !== s.type) {
                    var l = "touchmove" === s.type ? s.targetTouches[0].pageX : s.pageX,
                        c = "touchmove" === s.type ? s.targetTouches[0].pageY : s.pageY;
                    if (s.preventedByNestedSwiper) return a.startX = l, void(a.startY = c);
                    if (!n.allowTouchMove) return n.allowClick = !1, void(i.isTouched && (U.extend(a, {
                        startX: l,
                        startY: c,
                        currentX: l,
                        currentY: c
                    }), i.touchStartTime = U.now()));
                    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                        if (n.isVertical()) {
                            if (c < a.startY && n.translate <= n.maxTranslate() || c > a.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                        } else if (l < a.startX && n.translate <= n.maxTranslate() || l > a.startX && n.translate >= n.minTranslate()) return;
                    if (i.isTouchEvent && X.activeElement && s.target === X.activeElement && e(s.target).is(i.formElements)) return i.isMoved = !0, void(n.allowClick = !1);
                    if (i.allowTouchCallbacks && n.emit("touchMove", s), !(s.targetTouches && s.targetTouches.length > 1)) {
                        a.currentX = l, a.currentY = c;
                        var u = a.currentX - a.startX,
                            d = a.currentY - a.startY;
                        if (void 0 === i.isScrolling) {
                            var f;
                            n.isHorizontal() && a.currentY === a.startY || n.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : u * u + d * d >= 25 && (f = 180 * Math.atan2(Math.abs(d), Math.abs(u)) / Math.PI, i.isScrolling = n.isHorizontal() ? f > r.touchAngle : 90 - f > r.touchAngle)
                        }
                        if (i.isScrolling && n.emit("touchMoveOpposite", s), "undefined" == typeof startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isTouched) {
                            if (i.isScrolling) return void(i.isTouched = !1);
                            if (i.startMoving) {
                                n.allowClick = !1, s.preventDefault(), r.touchMoveStopPropagation && !r.nested && s.stopPropagation(), i.isMoved || (r.loop && n.loopFix(), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", s)), n.emit("sliderMove", s), i.isMoved = !0;
                                var p = n.isHorizontal() ? u : d;
                                a.diff = p, p *= r.touchRatio, o && (p = -p), n.swipeDirection = p > 0 ? "prev" : "next", i.currentTranslate = p + i.startTranslate;
                                var h = !0,
                                    g = r.resistanceRatio;
                                if (r.touchReleaseOnEdges && (g = 0), p > 0 && i.currentTranslate > n.minTranslate() ? (h = !1, r.resistance && (i.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + i.startTranslate + p, g))) : p < 0 && i.currentTranslate < n.maxTranslate() && (h = !1, r.resistance && (i.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - i.startTranslate - p, g))), h && (s.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), r.threshold > 0) {
                                    if (!(Math.abs(p) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void(a.diff = n.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                                }
                                r.followFinger && ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (n.updateActiveIndex(), n.updateSlidesClasses()), r.freeMode && (0 === i.velocities.length && i.velocities.push({
                                    position: a[n.isHorizontal() ? "startX" : "startY"],
                                    time: i.touchStartTime
                                }), i.velocities.push({
                                    position: a[n.isHorizontal() ? "currentX" : "currentY"],
                                    time: U.now()
                                })), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
                            }
                        }
                    }
                }
            },
            je = function(e) {
                var t = this,
                    n = t.touchEventsData,
                    i = t.params,
                    r = t.touches,
                    a = t.rtl,
                    o = t.$wrapperEl,
                    s = t.slidesGrid,
                    l = t.snapGrid,
                    c = e;
                if (c.originalEvent && (c = c.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", c), n.allowTouchCallbacks = !1, n.isTouched) {
                    i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var u = U.now(),
                        d = u - n.touchStartTime;
                    if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), d < 300 && u - n.lastClickTime > 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), n.clickTimeout = U.nextTick(function() {
                            t && !t.destroyed && t.emit("click", c)
                        }, 300)), d < 300 && u - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), t.emit("doubleTap", c))), n.lastClickTime = U.now(), U.nextTick(function() {
                            t.destroyed || (t.allowClick = !0)
                        }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, void(n.isMoved = !1);
                    n.isTouched = !1, n.isMoved = !1;
                    var f;
                    if (f = i.followFinger ? a ? t.translate : -t.translate : -n.currentTranslate, i.freeMode) {
                        if (f < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                        if (f > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                        if (i.freeModeMomentum) {
                            if (n.velocities.length > 1) {
                                var p = n.velocities.pop(),
                                    h = n.velocities.pop(),
                                    g = p.position - h.position,
                                    m = p.time - h.time;
                                t.velocity = g / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || U.now() - p.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= i.freeModeMomentumVelocityRatio, n.velocities.length = 0;
                            var v = 1e3 * i.freeModeMomentumRatio,
                                y = t.velocity * v,
                                b = t.translate + y;
                            a && (b = -b);
                            var w, E = !1,
                                T = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                            if (b < t.maxTranslate()) i.freeModeMomentumBounce ? (b + t.maxTranslate() < -T && (b = t.maxTranslate() - T), w = t.maxTranslate(), E = !0, n.allowMomentumBounce = !0) : b = t.maxTranslate();
                            else if (b > t.minTranslate()) i.freeModeMomentumBounce ? (b - t.minTranslate() > T && (b = t.minTranslate() + T), w = t.minTranslate(), E = !0, n.allowMomentumBounce = !0) : b = t.minTranslate();
                            else if (i.freeModeSticky) {
                                for (var _, x = 0; x < l.length; x += 1)
                                    if (l[x] > -b) {
                                        _ = x;
                                        break
                                    }
                                b = Math.abs(l[_] - b) < Math.abs(l[_ - 1] - b) || "next" === t.swipeDirection ? l[_] : l[_ - 1], b = -b
                            }
                            if (0 !== t.velocity) v = a ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity);
                            else if (i.freeModeSticky) return void t.slideReset();
                            i.freeModeMomentumBounce && E ? (t.updateProgress(w), t.setTransition(v), t.setTranslate(b), t.transitionStart(), t.animating = !0, o.transitionEnd(function() {
                                t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(w), o.transitionEnd(function() {
                                    t && !t.destroyed && t.transitionEnd()
                                }))
                            })) : t.velocity ? (t.updateProgress(b), t.setTransition(v), t.setTranslate(b), t.transitionStart(), t.animating || (t.animating = !0, o.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses()
                        }
                        return void((!i.freeModeMomentum || d >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()))
                    }
                    for (var C = 0, S = t.slidesSizesGrid[0], D = 0; D < s.length; D += i.slidesPerGroup) void 0 !== s[D + i.slidesPerGroup] ? f >= s[D] && f < s[D + i.slidesPerGroup] && (C = D, S = s[D + i.slidesPerGroup] - s[D]) : f >= s[D] && (C = D, S = s[s.length - 1] - s[s.length - 2]);
                    var A = (f - s[C]) / S;
                    if (d > i.longSwipesMs) {
                        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (A >= i.longSwipesRatio ? t.slideTo(C + i.slidesPerGroup) : t.slideTo(C)), "prev" === t.swipeDirection && (A > 1 - i.longSwipesRatio ? t.slideTo(C + i.slidesPerGroup) : t.slideTo(C))
                    } else {
                        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(C + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(C)
                    }
                }
            },
            We = function() {
                var e = this,
                    t = e.params,
                    n = e.el;
                if (!n || 0 !== n.offsetWidth) {
                    t.breakpoints && e.setBreakpoint();
                    var i = e.allowSlideNext,
                        r = e.allowSlidePrev;
                    if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                        var a = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
                    } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                    e.allowSlidePrev = r, e.allowSlideNext = i
                }
            },
            $e = function(e) {
                var t = this;
                t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            },
            Fe = {
                attachEvents: j,
                detachEvents: W
            },
            Be = function() {
                var e = this,
                    t = e.activeIndex,
                    n = e.loopedSlides;
                void 0 === n && (n = 0);
                var i = e.params,
                    r = i.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var a = e.getBreakpoint(r);
                    if (a && e.currentBreakpoint !== a) {
                        var o = a in r ? r[a] : e.originalParams,
                            s = i.loop && o.slidesPerView !== i.slidesPerView;
                        U.extend(e.params, o), U.extend(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), e.currentBreakpoint = a, s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
                    }
                }
            },
            Ve = function(e) {
                if (e) {
                    var t = !1,
                        n = [];
                    Object.keys(e).forEach(function(e) {
                        n.push(e)
                    }), n.sort(function(e, t) {
                        return parseInt(e, 10) - parseInt(t, 10)
                    });
                    for (var i = 0; i < n.length; i += 1) {
                        var r = n[i];
                        r >= Y.innerWidth && !t && (t = r)
                    }
                    return t || "max"
                }
            },
            Ge = {
                setBreakpoint: Be,
                getBreakpoint: Ve
            },
            qe = function() {
                var e = this,
                    t = e.classNames,
                    n = e.params,
                    i = e.rtl,
                    r = e.$el,
                    a = [];
                a.push(n.direction), n.freeMode && a.push("free-mode"), K.flexbox || a.push("no-flexbox"), n.autoHeight && a.push("autoheight"), i && a.push("rtl"), n.slidesPerColumn > 1 && a.push("multirow"), He.android && a.push("android"), He.ios && a.push("ios"), (K.pointerEvents || K.prefixedPointerEvents) && a.push("wp8-" + n.direction), a.forEach(function(e) {
                    t.push(n.containerModifierClass + e)
                }), r.addClass(t.join(" "))
            },
            Ye = function() {
                var e = this,
                    t = e.$el,
                    n = e.classNames;
                t.removeClass(n.join(" "))
            },
            Ue = {
                addClasses: qe,
                removeClasses: Ye
            },
            Xe = function(e, t, n, i, r, a) {
                function o() {
                    a && a()
                }
                var s;
                e.complete && r ? o() : t ? (s = new Y.Image, s.onload = o, s.onerror = o, i && (s.sizes = i), n && (s.srcset = n), t && (s.src = t)) : o()
            },
            Ke = function() {
                function e() {
                    void 0 !== t && null !== t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
                }
                var t = this;
                t.imagesToLoad = t.$el.find("img");
                for (var n = 0; n < t.imagesToLoad.length; n += 1) {
                    var i = t.imagesToLoad[n];
                    t.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, e)
                }
            },
            Qe = {
                loadImage: Xe,
                preloadImages: Ke
            },
            Je = {
                checkOverflow: $
            },
            Ze = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            },
            et = {
                update: le,
                translate: pe,
                transition: ve,
                slide: _e,
                loop: De,
                grabCursor: ke,
                manipulation: Me,
                events: Fe,
                breakpoints: Ge,
                checkOverflow: Je,
                classes: Ue,
                images: Qe
            },
            tt = {},
            nt = function(t) {
                function n() {
                    for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
                    var a, o;
                    if (1 === i.length && i[0].constructor && i[0].constructor === Object) o = i[0];
                    else {
                        var s;
                        s = i, a = s[0], o = s[1]
                    }
                    o || (o = {}), o = U.extend({}, o), a && !o.el && (o.el = a), t.call(this, o), Object.keys(et).forEach(function(e) {
                        Object.keys(et[e]).forEach(function(t) {
                            n.prototype[t] || (n.prototype[t] = et[e][t])
                        })
                    });
                    var l = this;
                    void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
                        var t = l.modules[e];
                        if (t.params) {
                            var n = Object.keys(t.params)[0],
                                i = t.params[n];
                            if ("object" != typeof i) return;
                            if (!(n in o && "enabled" in i)) return;
                            !0 === o[n] && (o[n] = {
                                enabled: !0
                            }), "object" != typeof o[n] || "enabled" in o[n] || (o[n].enabled = !0), o[n] || (o[n] = {
                                enabled: !1
                            })
                        }
                    });
                    var c = U.extend({}, Ze);
                    l.useModulesParams(c), l.params = U.extend({}, c, tt, o), l.originalParams = U.extend({}, l.params), l.passedParams = U.extend({}, o);
                    var u = e(l.params.el);
                    if (a = u[0]) {
                        if (u.length > 1) {
                            var d = [];
                            return u.each(function(e, t) {
                                var i = U.extend({}, o, {
                                    el: t
                                });
                                d.push(new n(i))
                            }), d
                        }
                        a.swiper = l, u.data("swiper", l);
                        var f = u.children("." + l.params.wrapperClass);
                        return U.extend(l, {
                            $el: u,
                            el: a,
                            $wrapperEl: f,
                            wrapperEl: f[0],
                            classNames: [],
                            slides: e(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === l.params.direction
                            },
                            isVertical: function() {
                                return "vertical" === l.params.direction
                            },
                            rtl: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === u.css("direction")),
                            wrongRTL: "-webkit-box" === f.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: l.params.allowSlideNext,
                            allowSlidePrev: l.params.allowSlidePrev,
                            touchEvents: function() {
                                var e = ["touchstart", "touchmove", "touchend"],
                                    t = ["mousedown", "mousemove", "mouseup"];
                                return K.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : K.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), {
                                    start: K.touch || !l.params.simulateTouch ? e[0] : t[0],
                                    move: K.touch || !l.params.simulateTouch ? e[1] : t[1],
                                    end: K.touch || !l.params.simulateTouch ? e[2] : t[2]
                                }
                            }(),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: U.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: l.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), l.useModules(), l.params.init && l.init(), l
                    }
                }
                t && (n.__proto__ = t), n.prototype = Object.create(t && t.prototype), n.prototype.constructor = n;
                var i = {
                    extendedDefaults: {
                        configurable: !0
                    },
                    defaults: {
                        configurable: !0
                    },
                    Class: {
                        configurable: !0
                    },
                    $: {
                        configurable: !0
                    }
                };
                return n.prototype.slidesPerViewDynamic = function() {
                    var e = this,
                        t = e.params,
                        n = e.slides,
                        i = e.slidesGrid,
                        r = e.size,
                        a = e.activeIndex,
                        o = 1;
                    if (t.centeredSlides) {
                        for (var s, l = n[a].swiperSlideSize, c = a + 1; c < n.length; c += 1) n[c] && !s && (l += n[c].swiperSlideSize, o += 1, l > r && (s = !0));
                        for (var u = a - 1; u >= 0; u -= 1) n[u] && !s && (l += n[u].swiperSlideSize, o += 1, l > r && (s = !0))
                    } else
                        for (var d = a + 1; d < n.length; d += 1) i[d] - i[a] < r && (o += 1);
                    return o
                }, n.prototype.update = function() {
                    function e() {
                        var e = t.rtl ? -1 * t.translate : t.translate,
                            n = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    var t = this;
                    if (t && !t.destroyed) {
                        t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
                        t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), t.emit("update")
                    }
                }, n.prototype.init = function() {
                    var e = this;
                    e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
                }, n.prototype.destroy = function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var n = this,
                        i = n.params,
                        r = n.$el,
                        a = n.$wrapperEl,
                        o = n.slides;
                    n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), o && o.length && o.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(function(e) {
                        n.off(e)
                    }), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), U.deleteProps(n)), n.destroyed = !0
                }, n.extendDefaults = function(e) {
                    U.extend(tt, e)
                }, i.extendedDefaults.get = function() {
                    return tt
                }, i.defaults.get = function() {
                    return Ze
                }, i.Class.get = function() {
                    return t
                }, i.$.get = function() {
                    return e
                }, Object.defineProperties(n, i), n
            }(Q),
            it = {
                name: "device",
                proto: {
                    device: He
                },
                static: {
                    device: He
                }
            },
            rt = {
                name: "support",
                proto: {
                    support: K
                },
                static: {
                    support: K
                }
            },
            at = function() {
                return {
                    isSafari: function() {
                        var e = Y.navigator.userAgent.toLowerCase();
                        return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                    }(),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(Y.navigator.userAgent)
                }
            }(),
            ot = {
                name: "browser",
                proto: {
                    browser: at
                },
                static: {
                    browser: at
                }
            },
            st = {
                name: "resize",
                create: function() {
                    var e = this;
                    U.extend(e, {
                        resize: {
                            resizeHandler: function() {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                            },
                            orientationChangeHandler: function() {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        Y.addEventListener("resize", e.resize.resizeHandler), Y.addEventListener("orientationchange", e.resize.orientationChangeHandler)
                    },
                    destroy: function() {
                        var e = this;
                        Y.removeEventListener("resize", e.resize.resizeHandler), Y.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
                    }
                }
            },
            lt = {
                func: Y.MutationObserver || Y.WebkitMutationObserver,
                attach: function(e, t) {
                    void 0 === t && (t = {});
                    var n = this,
                        i = lt.func,
                        r = new i(function(e) {
                            e.forEach(function(e) {
                                n.emit("observerUpdate", e)
                            })
                        });
                    r.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }), n.observer.observers.push(r)
                },
                init: function() {
                    var e = this;
                    if (K.observer && e.params.observer) {
                        if (e.params.observeParents)
                            for (var t = e.$el.parents(), n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
                        e.observer.attach(e.$el[0], {
                            childList: !1
                        }), e.observer.attach(e.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy: function() {
                    var e = this;
                    e.observer.observers.forEach(function(e) {
                        e.disconnect()
                    }), e.observer.observers = []
                }
            },
            ct = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        observer: {
                            init: lt.init.bind(e),
                            attach: lt.attach.bind(e),
                            destroy: lt.destroy.bind(e),
                            observers: []
                        }
                    })
                },
                on: {
                    init: function() {
                        this.observer.init()
                    },
                    destroy: function() {
                        this.observer.destroy()
                    }
                }
            },
            ut = {
                update: function(e) {
                    function t() {
                        n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.lazy && n.params.lazy.enabled && n.lazy.load()
                    }
                    var n = this,
                        i = n.params,
                        r = i.slidesPerView,
                        a = i.slidesPerGroup,
                        o = i.centeredSlides,
                        s = n.virtual,
                        l = s.from,
                        c = s.to,
                        u = s.slides,
                        d = s.slidesGrid,
                        f = s.renderSlide,
                        p = s.offset;
                    n.updateActiveIndex();
                    var h, g = n.activeIndex || 0;
                    h = n.rtl && n.isHorizontal() ? "right" : n.isHorizontal() ? "left" : "top";
                    var m, v;
                    o ? (m = Math.floor(r / 2) + a, v = Math.floor(r / 2) + a) : (m = r + (a - 1), v = a);
                    var y = Math.max((g || 0) - v, 0),
                        b = Math.min((g || 0) + m, u.length - 1),
                        w = (n.slidesGrid[y] || 0) - (n.slidesGrid[0] || 0);
                    if (U.extend(n.virtual, {
                            from: y,
                            to: b,
                            offset: w,
                            slidesGrid: n.slidesGrid
                        }), l === y && c === b && !e) return n.slidesGrid !== d && w !== p && n.slides.css(h, w + "px"), void n.updateProgress();
                    if (n.params.virtual.renderExternal) return n.params.virtual.renderExternal.call(n, {
                        offset: w,
                        from: y,
                        to: b,
                        slides: function() {
                            for (var e = [], t = y; t <= b; t += 1) e.push(u[t]);
                            return e
                        }()
                    }), void t();
                    var E = [],
                        T = [];
                    if (e) n.$wrapperEl.find("." + n.params.slideClass).remove();
                    else
                        for (var _ = l; _ <= c; _ += 1)(_ < y || _ > b) && n.$wrapperEl.find("." + n.params.slideClass + '[data-swiper-slide-index="' + _ + '"]').remove();
                    for (var x = 0; x < u.length; x += 1) x >= y && x <= b && (void 0 === c || e ? T.push(x) : (x > c && T.push(x), x < l && E.push(x)));
                    T.forEach(function(e) {
                        n.$wrapperEl.append(f(u[e], e))
                    }), E.sort(function(e, t) {
                        return e < t
                    }).forEach(function(e) {
                        n.$wrapperEl.prepend(f(u[e], e))
                    }), n.$wrapperEl.children(".swiper-slide").css(h, w + "px"), t()
                },
                renderSlide: function(t, n) {
                    var i = this,
                        r = i.params.virtual;
                    if (r.cache && i.virtual.cache[n]) return i.virtual.cache[n];
                    var a = e(r.renderSlide ? r.renderSlide.call(i, t, n) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + n + '">' + t + "</div>");
                    return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", n), r.cache && (i.virtual.cache[n] = a), a
                },
                appendSlide: function(e) {
                    var t = this;
                    t.virtual.slides.push(e), t.virtual.update(!0)
                },
                prependSlide: function(e) {
                    var t = this;
                    if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
                        var n = t.virtual.cache,
                            i = {};
                        Object.keys(n).forEach(function(e) {
                            i[e + 1] = n[e]
                        }), t.virtual.cache = i
                    }
                    t.virtual.update(!0), t.slideNext(0)
                }
            },
            dt = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        virtual: {
                            update: ut.update.bind(e),
                            appendSlide: ut.appendSlide.bind(e),
                            prependSlide: ut.prependSlide.bind(e),
                            renderSlide: ut.renderSlide.bind(e),
                            slides: e.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if (e.params.virtual.enabled) {
                            e.classNames.push(e.params.containerModifierClass + "virtual");
                            var t = {
                                watchSlidesProgress: !0
                            };
                            U.extend(e.params, t), U.extend(e.originalParams, t), e.virtual.update()
                        }
                    },
                    setTranslate: function() {
                        var e = this;
                        e.params.virtual.enabled && e.virtual.update()
                    }
                }
            },
            ft = {
                handle: function(e) {
                    var t = this,
                        n = e;
                    n.originalEvent && (n = n.originalEvent);
                    var i = n.keyCode || n.charCode;
                    if (!t.allowSlideNext && (t.isHorizontal() && 39 === i || t.isVertical() && 40 === i)) return !1;
                    if (!t.allowSlidePrev && (t.isHorizontal() && 37 === i || t.isVertical() && 38 === i)) return !1;
                    if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || X.activeElement && X.activeElement.nodeName && ("input" === X.activeElement.nodeName.toLowerCase() || "textarea" === X.activeElement.nodeName.toLowerCase()))) {
                        if (t.params.keyboard.onlyInViewport && (37 === i || 39 === i || 38 === i || 40 === i)) {
                            var r = !1;
                            if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                            var a = {
                                    left: Y.pageXOffset,
                                    top: Y.pageYOffset
                                },
                                o = Y.innerWidth,
                                s = Y.innerHeight,
                                l = t.$el.offset();
                            t.rtl && (l.left -= t.$el[0].scrollLeft);
                            for (var c = [
                                    [l.left, l.top],
                                    [l.left + t.width, l.top],
                                    [l.left, l.top + t.height],
                                    [l.left + t.width, l.top + t.height]
                                ], u = 0; u < c.length; u += 1) {
                                var d = c[u];
                                d[0] >= a.left && d[0] <= a.left + o && d[1] >= a.top && d[1] <= a.top + s && (r = !0)
                            }
                            if (!r) return
                        }
                        t.isHorizontal() ? (37 !== i && 39 !== i || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (39 === i && !t.rtl || 37 === i && t.rtl) && t.slideNext(), (37 === i && !t.rtl || 39 === i && t.rtl) && t.slidePrev()) : (38 !== i && 40 !== i || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), 40 === i && t.slideNext(), 38 === i && t.slidePrev()), t.emit("keyPress", i)
                    }
                },
                enable: function() {
                    var t = this;
                    t.keyboard.enabled || (e(X).on("keydown", t.keyboard.handle), t.keyboard.enabled = !0)
                },
                disable: function() {
                    var t = this;
                    t.keyboard.enabled && (e(X).off("keydown", t.keyboard.handle), t.keyboard.enabled = !1)
                }
            },
            pt = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        keyboard: {
                            enabled: !1,
                            enable: ft.enable.bind(e),
                            disable: ft.disable.bind(e),
                            handle: ft.handle.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.keyboard.enabled && e.keyboard.enable()
                    },
                    destroy: function() {
                        var e = this;
                        e.keyboard.enabled && e.keyboard.disable()
                    }
                }
            },
            ht = {
                lastScrollTime: U.now(),
                event: function() {
                    return Y.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : F() ? "wheel" : "mousewheel"
                }(),
                normalize: function(e) {
                    var t = 0,
                        n = 0,
                        i = 0,
                        r = 0;
                    return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, r = 10 * n, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: n,
                        pixelX: i,
                        pixelY: r
                    }
                },
                handle: function(e) {
                    var t = e,
                        n = this,
                        i = n.params.mousewheel;
                    t.originalEvent && (t = t.originalEvent);
                    var r = 0,
                        a = n.rtl ? -1 : 1,
                        o = ht.normalize(t);
                    if (i.forceToAxis)
                        if (n.isHorizontal()) {
                            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                            r = o.pixelX * a
                        } else {
                            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                            r = o.pixelY
                        }
                    else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * a : -o.pixelY;
                    if (0 === r) return !0;
                    if (i.invert && (r = -r), n.params.freeMode) {
                        var s = n.getTranslate() + r * i.sensitivity,
                            l = n.isBeginning,
                            c = n.isEnd;
                        if (s >= n.minTranslate() && (s = n.minTranslate()), s <= n.maxTranslate() && (s = n.maxTranslate()), n.setTransition(0), n.setTranslate(s), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!l && n.isBeginning || !c && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = U.nextTick(function() {
                                n.slideReset()
                            }, 300)), n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.stopAutoplay(), 0 === s || s === n.maxTranslate()) return !0
                    } else {
                        if (U.now() - n.mousewheel.lastScrollTime > 60)
                            if (r < 0)
                                if (n.isEnd && !n.params.loop || n.animating) {
                                    if (i.releaseOnEdges) return !0
                                } else n.slideNext(), n.emit("scroll", t);
                        else if (n.isBeginning && !n.params.loop || n.animating) {
                            if (i.releaseOnEdges) return !0
                        } else n.slidePrev(), n.emit("scroll", t);
                        n.mousewheel.lastScrollTime = (new Y.Date).getTime()
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                },
                enable: function() {
                    var t = this;
                    if (!ht.event) return !1;
                    if (t.mousewheel.enabled) return !1;
                    var n = t.$el;
                    return "container" !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)), n.on(ht.event, t.mousewheel.handle), t.mousewheel.enabled = !0, !0
                },
                disable: function() {
                    var t = this;
                    if (!ht.event) return !1;
                    if (!t.mousewheel.enabled) return !1;
                    var n = t.$el;
                    return "container" !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)), n.off(ht.event, t.mousewheel.handle), t.mousewheel.enabled = !1, !0
                }
            },
            gt = {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        mousewheel: {
                            enabled: !1,
                            enable: ht.enable.bind(e),
                            disable: ht.disable.bind(e),
                            handle: ht.handle.bind(e),
                            lastScrollTime: U.now()
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.mousewheel.enabled && e.mousewheel.enable()
                    },
                    destroy: function() {
                        var e = this;
                        e.mousewheel.enabled && e.mousewheel.disable()
                    }
                }
            },
            mt = {
                update: function() {
                    var e = this,
                        t = e.params.navigation;
                    if (!e.params.loop) {
                        var n = e.navigation,
                            i = n.$nextEl,
                            r = n.$prevEl;
                        r && r.length > 0 && (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                    }
                },
                init: function() {
                    var t = this,
                        n = t.params.navigation;
                    if (n.nextEl || n.prevEl) {
                        var i, r;
                        n.nextEl && (i = e(n.nextEl), t.params.uniqueNavElements && "string" == typeof n.nextEl && i.length > 1 && 1 === t.$el.find(n.nextEl).length && (i = t.$el.find(n.nextEl))), n.prevEl && (r = e(n.prevEl), t.params.uniqueNavElements && "string" == typeof n.prevEl && r.length > 1 && 1 === t.$el.find(n.prevEl).length && (r = t.$el.find(n.prevEl))), i && i.length > 0 && i.on("click", function(e) {
                            e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
                        }), r && r.length > 0 && r.on("click", function(e) {
                            e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
                        }), U.extend(t.navigation, {
                            $nextEl: i,
                            nextEl: i && i[0],
                            $prevEl: r,
                            prevEl: r && r[0]
                        })
                    }
                },
                destroy: function() {
                    var e = this,
                        t = e.navigation,
                        n = t.$nextEl,
                        i = t.$prevEl;
                    n && n.length && (n.off("click"), n.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(e.params.navigation.disabledClass))
                }
            },
            vt = {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        navigation: {
                            init: mt.init.bind(e),
                            update: mt.update.bind(e),
                            destroy: mt.destroy.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.navigation.init(), e.navigation.update()
                    },
                    toEdge: function() {
                        this.navigation.update()
                    },
                    fromEdge: function() {
                        this.navigation.update()
                    },
                    destroy: function() {
                        this.navigation.destroy()
                    },
                    click: function(t) {
                        var n = this,
                            i = n.navigation,
                            r = i.$nextEl,
                            a = i.$prevEl;
                        !n.params.navigation.hideOnClick || e(t.target).is(a) || e(t.target).is(r) || (r && r.toggleClass(n.params.navigation.hiddenClass), a && a.toggleClass(n.params.navigation.hiddenClass))
                    }
                }
            },
            yt = {
                update: function() {
                    var t = this,
                        n = t.rtl,
                        i = t.params.pagination;
                    if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                        var r, a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                            o = t.pagination.$el,
                            s = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                        if (t.params.loop ? (r = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), r > a - 1 - 2 * t.loopedSlides && (r -= a - 2 * t.loopedSlides), r > s - 1 && (r -= s), r < 0 && "bullets" !== t.params.paginationType && (r = s + r)) : r = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                            var l = t.pagination.bullets;
                            if (i.dynamicBullets && (t.pagination.bulletSize = l.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), o.css(t.isHorizontal() ? "width" : "height", 5 * t.pagination.bulletSize + "px")), l.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"), o.length > 1) l.each(function(t, n) {
                                var a = e(n);
                                a.index() === r && (a.addClass(i.bulletActiveClass), i.dynamicBullets && (a.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), a.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")))
                            });
                            else {
                                var c = l.eq(r);
                                c.addClass(i.bulletActiveClass), i.dynamicBullets && (c.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), c.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                            }
                            if (i.dynamicBullets) {
                                var u = Math.min(l.length, 5),
                                    d = (t.pagination.bulletSize * u - t.pagination.bulletSize) / 2 - r * t.pagination.bulletSize,
                                    f = n ? "right" : "left";
                                l.css(t.isHorizontal() ? f : "top", d + "px")
                            }
                        }
                        if ("fraction" === i.type && (o.find("." + i.currentClass).text(r + 1), o.find("." + i.totalClass).text(s)), "progressbar" === i.type) {
                            var p = (r + 1) / s,
                                h = p,
                                g = 1;
                            t.isHorizontal() || (g = p, h = 1), o.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + h + ") scaleY(" + g + ")").transition(t.params.speed)
                        }
                        "custom" === i.type && i.renderCustom ? (o.html(i.renderCustom(t, r + 1, s)), t.emit("paginationRender", t, o[0])) : t.emit("paginationUpdate", t, o[0]), o[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](i.lockClass)
                    }
                },
                render: function() {
                    var e = this,
                        t = e.params.pagination;
                    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                            i = e.pagination.$el,
                            r = "";
                        if ("bullets" === t.type) {
                            for (var a = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, o = 0; o < a; o += 1) t.renderBullet ? r += t.renderBullet.call(e, o, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                            i.html(r), e.pagination.bullets = i.find("." + t.bulletClass)
                        }
                        "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                    }
                },
                init: function() {
                    var t = this,
                        n = t.params.pagination;
                    if (n.el) {
                        var i = e(n.el);
                        0 !== i.length && (t.params.uniqueNavElements && "string" == typeof n.el && i.length > 1 && 1 === t.$el.find(n.el).length && (i = t.$el.find(n.el)), "bullets" === n.type && n.clickable && i.addClass(n.clickableClass), i.addClass(n.modifierClass + n.type), "bullets" === n.type && n.dynamicBullets && i.addClass("" + n.modifierClass + n.type + "-dynamic"), n.clickable && i.on("click", "." + n.bulletClass, function(n) {
                            n.preventDefault();
                            var i = e(this).index() * t.params.slidesPerGroup;
                            t.params.loop && (i += t.loopedSlides), t.slideTo(i)
                        }), U.extend(t.pagination, {
                            $el: i,
                            el: i[0]
                        }))
                    }
                },
                destroy: function() {
                    var e = this,
                        t = e.params.pagination;
                    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var n = e.pagination.$el;
                        n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", "." + t.bulletClass)
                    }
                }
            },
            bt = {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        type: "bullets",
                        dynamicBullets: !1,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        pagination: {
                            init: yt.init.bind(e),
                            render: yt.render.bind(e),
                            update: yt.update.bind(e),
                            destroy: yt.destroy.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.pagination.init(), e.pagination.render(), e.pagination.update()
                    },
                    activeIndexChange: function() {
                        var e = this;
                        e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
                    },
                    snapIndexChange: function() {
                        var e = this;
                        e.params.loop || e.pagination.update()
                    },
                    slidesLengthChange: function() {
                        var e = this;
                        e.params.loop && (e.pagination.render(), e.pagination.update())
                    },
                    snapGridLengthChange: function() {
                        var e = this;
                        e.params.loop || (e.pagination.render(), e.pagination.update())
                    },
                    destroy: function() {
                        this.pagination.destroy()
                    },
                    click: function(t) {
                        var n = this;
                        n.params.pagination.el && n.params.pagination.hideOnClick && n.pagination.$el.length > 0 && !e(t.target).hasClass(n.params.pagination.bulletClass) && n.pagination.$el.toggleClass(n.params.pagination.hiddenClass)
                    }
                }
            },
            wt = {
                setTranslate: function() {
                    var e = this;
                    if (e.params.scrollbar.el && e.scrollbar.el) {
                        var t = e.scrollbar,
                            n = e.rtl,
                            i = e.progress,
                            r = t.dragSize,
                            a = t.trackSize,
                            o = t.$dragEl,
                            s = t.$el,
                            l = e.params.scrollbar,
                            c = r,
                            u = (a - r) * i;
                        n && e.isHorizontal() ? (u = -u, u > 0 ? (c = r - u, u = 0) : -u + r > a && (c = a + u)) : u < 0 ? (c = r + u, u = 0) : u + r > a && (c = a - u), e.isHorizontal() ? (K.transforms3d ? o.transform("translate3d(" + u + "px, 0, 0)") : o.transform("translateX(" + u + "px)"), o[0].style.width = c + "px") : (K.transforms3d ? o.transform("translate3d(0px, " + u + "px, 0)") : o.transform("translateY(" + u + "px)"), o[0].style.height = c + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), s[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
                            s[0].style.opacity = 0, s.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    var t = this;
                    t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
                },
                updateSize: function() {
                    var e = this;
                    if (e.params.scrollbar.el && e.scrollbar.el) {
                        var t = e.scrollbar,
                            n = t.$dragEl,
                            i = t.$el;
                        n[0].style.width = "", n[0].style.height = "";
                        var r, a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                            o = e.size / e.virtualSize,
                            s = o * (a / e.size);
                        r = "auto" === e.params.scrollbar.dragSize ? a * o : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = r + "px" : n[0].style.height = r + "px", i[0].style.display = o >= 1 ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), U.extend(t, {
                            trackSize: a,
                            divider: o,
                            moveDivider: s,
                            dragSize: r
                        }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                    }
                },
                setDragPosition: function(e) {
                    var t, n = this,
                        i = n.scrollbar,
                        r = i.$el,
                        a = i.dragSize,
                        o = i.trackSize;
                    t = n.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                    var s;
                    s = (t - r.offset()[n.isHorizontal() ? "left" : "top"] - a / 2) / (o - a), s = Math.max(Math.min(s, 1), 0), n.rtl && (s = 1 - s);
                    var l = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * s;
                    n.updateProgress(l), n.setTranslate(l), n.updateActiveIndex(), n.updateSlidesClasses()
                },
                onDragStart: function(e) {
                    var t = this,
                        n = t.params.scrollbar,
                        i = t.scrollbar,
                        r = t.$wrapperEl,
                        a = i.$el,
                        o = i.$dragEl;
                    t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), r.transition(100), o.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), a.transition(0), n.hide && a.css("opacity", 1), t.emit("scrollbarDragStart", e)
                },
                onDragMove: function(e) {
                    var t = this,
                        n = t.scrollbar,
                        i = t.$wrapperEl,
                        r = n.$el,
                        a = n.$dragEl;
                    t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, n.setDragPosition(e), i.transition(0), r.transition(0), a.transition(0), t.emit("scrollbarDragMove", e))
                },
                onDragEnd: function(e) {
                    var t = this,
                        n = t.params.scrollbar,
                        i = t.scrollbar,
                        r = i.$el;
                    t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = U.nextTick(function() {
                        r.css("opacity", 0), r.transition(400)
                    }, 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideReset())
                },
                enableDraggable: function() {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var n = t.scrollbar,
                            i = n.$el,
                            r = K.touch ? i[0] : document;
                        i.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart), e(r).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove), e(r).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd)
                    }
                },
                disableDraggable: function() {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var n = t.scrollbar,
                            i = n.$el,
                            r = K.touch ? i[0] : document;
                        i.off(t.scrollbar.dragEvents.start), e(r).off(t.scrollbar.dragEvents.move), e(r).off(t.scrollbar.dragEvents.end)
                    }
                },
                init: function() {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var n = t.scrollbar,
                            i = t.$el,
                            r = t.touchEvents,
                            a = t.params.scrollbar,
                            o = e(a.el);
                        t.params.uniqueNavElements && "string" == typeof a.el && o.length > 1 && 1 === i.find(a.el).length && (o = i.find(a.el));
                        var s = o.find(".swiper-scrollbar-drag");
                        0 === s.length && (s = e('<div class="swiper-scrollbar-drag"></div>'), o.append(s)), t.scrollbar.dragEvents = function() {
                            return !1 !== t.params.simulateTouch || K.touch ? r : {
                                start: "mousedown",
                                move: "mousemove",
                                end: "mouseup"
                            }
                        }(), U.extend(n, {
                            $el: o,
                            el: o[0],
                            $dragEl: s,
                            dragEl: s[0]
                        }), a.draggable && n.enableDraggable()
                    }
                },
                destroy: function() {
                    this.scrollbar.disableDraggable()
                }
            },
            Et = {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock"
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        scrollbar: {
                            init: wt.init.bind(e),
                            destroy: wt.destroy.bind(e),
                            updateSize: wt.updateSize.bind(e),
                            setTranslate: wt.setTranslate.bind(e),
                            setTransition: wt.setTransition.bind(e),
                            enableDraggable: wt.enableDraggable.bind(e),
                            disableDraggable: wt.disableDraggable.bind(e),
                            setDragPosition: wt.setDragPosition.bind(e),
                            onDragStart: wt.onDragStart.bind(e),
                            onDragMove: wt.onDragMove.bind(e),
                            onDragEnd: wt.onDragEnd.bind(e),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                    },
                    update: function() {
                        this.scrollbar.updateSize()
                    },
                    resize: function() {
                        this.scrollbar.updateSize()
                    },
                    observerUpdate: function() {
                        this.scrollbar.updateSize()
                    },
                    setTranslate: function() {
                        this.scrollbar.setTranslate()
                    },
                    setTransition: function(e) {
                        this.scrollbar.setTransition(e)
                    },
                    destroy: function() {
                        this.scrollbar.destroy()
                    }
                }
            },
            Tt = {
                setTransform: function(t, n) {
                    var i = this,
                        r = i.rtl,
                        a = e(t),
                        o = r ? -1 : 1,
                        s = a.attr("data-swiper-parallax") || "0",
                        l = a.attr("data-swiper-parallax-x"),
                        c = a.attr("data-swiper-parallax-y"),
                        u = a.attr("data-swiper-parallax-scale"),
                        d = a.attr("data-swiper-parallax-opacity");
                    if (l || c ? (l = l || "0", c = c || "0") : i.isHorizontal() ? (l = s, c = "0") : (c = s, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * n * o + "%" : l * n * o + "px", c = c.indexOf("%") >= 0 ? parseInt(c, 10) * n + "%" : c * n + "px", void 0 !== d && null !== d) {
                        var f = d - (d - 1) * (1 - Math.abs(n));
                        a[0].style.opacity = f
                    }
                    if (void 0 === u || null === u) a.transform("translate3d(" + l + ", " + c + ", 0px)");
                    else {
                        var p = u - (u - 1) * (1 - Math.abs(n));
                        a.transform("translate3d(" + l + ", " + c + ", 0px) scale(" + p + ")")
                    }
                },
                setTranslate: function() {
                    var t = this,
                        n = t.$el,
                        i = t.slides,
                        r = t.progress,
                        a = t.snapGrid;
                    n.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, n) {
                        t.parallax.setTransform(n, r)
                    }), i.each(function(n, i) {
                        var o = i.progress;
                        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (o += Math.ceil(n / 2) - r * (a.length - 1)), o = Math.min(Math.max(o, -1), 1), e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, n) {
                            t.parallax.setTransform(n, o)
                        })
                    })
                },
                setTransition: function(t) {
                    void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(n, i) {
                        var r = e(i),
                            a = parseInt(r.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (a = 0), r.transition(a)
                    })
                }
            },
            _t = {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        parallax: {
                            setTransform: Tt.setTransform.bind(e),
                            setTranslate: Tt.setTranslate.bind(e),
                            setTransition: Tt.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        this.params.watchSlidesProgress = !0
                    },
                    init: function() {
                        var e = this;
                        e.params.parallax && e.parallax.setTranslate()
                    },
                    setTranslate: function() {
                        var e = this;
                        e.params.parallax && e.parallax.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        t.params.parallax && t.parallax.setTransition(e)
                    }
                }
            },
            xt = {
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX,
                        n = e.targetTouches[0].pageY,
                        i = e.targetTouches[1].pageX,
                        r = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2))
                },
                onGestureStart: function(t) {
                    var n = this,
                        i = n.params.zoom,
                        r = n.zoom,
                        a = r.gesture;
                    if (r.fakeGestureTouched = !1, r.fakeGestureMoved = !1, !K.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                        r.fakeGestureTouched = !0, a.scaleStart = xt.getDistanceBetweenTouches(t)
                    }
                    if (!(a.$slideEl && a.$slideEl.length || (a.$slideEl = e(this), 0 === a.$slideEl.length && (a.$slideEl = n.slides.eq(n.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length))) return void(a.$imageEl = void 0);
                    a.$imageEl.transition(0), n.zoom.isScaling = !0
                },
                onGestureChange: function(e) {
                    var t = this,
                        n = t.params.zoom,
                        i = t.zoom,
                        r = i.gesture;
                    if (!K.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        i.fakeGestureMoved = !0, r.scaleMove = xt.getDistanceBetweenTouches(e)
                    }
                    r.$imageEl && 0 !== r.$imageEl.length && (K.gestures ? t.zoom.scale = e.scale * i.currentScale : i.scale = r.scaleMove / r.scaleStart * i.currentScale, i.scale > r.maxRatio && (i.scale = r.maxRatio - 1 + Math.pow(i.scale - r.maxRatio + 1, .5)), i.scale < n.minRatio && (i.scale = n.minRatio + 1 - Math.pow(n.minRatio - i.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var t = this,
                        n = t.params.zoom,
                        i = t.zoom,
                        r = i.gesture;
                    if (!K.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !He.android) return;
                        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                    }
                    r.$imageEl && 0 !== r.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, r.maxRatio), n.minRatio), r.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (r.$slideEl = void 0))
                },
                onTouchStart: function(e) {
                    var t = this,
                        n = t.zoom,
                        i = n.gesture,
                        r = n.image;
                    i.$imageEl && 0 !== i.$imageEl.length && (r.isTouched || (He.android && e.preventDefault(), r.isTouched = !0, r.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                },
                onTouchMove: function(e) {
                    var t = this,
                        n = t.zoom,
                        i = n.gesture,
                        r = n.image,
                        a = n.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, r.isTouched && i.$slideEl)) {
                        r.isMoved || (r.width = i.$imageEl[0].offsetWidth, r.height = i.$imageEl[0].offsetHeight, r.startX = U.getTranslate(i.$imageWrapEl[0], "x") || 0, r.startY = U.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (r.startX = -r.startX), t.rtl && (r.startY = -r.startY));
                        var o = r.width * n.scale,
                            s = r.height * n.scale;
                        if (!(o < i.slideWidth && s < i.slideHeight)) {
                            if (r.minX = Math.min(i.slideWidth / 2 - o / 2, 0), r.maxX = -r.minX, r.minY = Math.min(i.slideHeight / 2 - s / 2, 0), r.maxY = -r.minY, r.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !r.isMoved && !n.isScaling) {
                                if (t.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)) return void(r.isTouched = !1);
                                if (!t.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)) return void(r.isTouched = !1)
                            }
                            e.preventDefault(), e.stopPropagation(), r.isMoved = !0, r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX, r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY, r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, .8)), r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, .8)), r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, .8)), r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = r.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = r.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (r.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (r.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(r.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(r.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = r.touchesCurrent.x, a.prevPositionY = r.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function() {
                    var e = this,
                        t = e.zoom,
                        n = t.gesture,
                        i = t.image,
                        r = t.velocity;
                    if (n.$imageEl && 0 !== n.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                        i.isTouched = !1, i.isMoved = !1;
                        var a = 300,
                            o = 300,
                            s = r.x * a,
                            l = i.currentX + s,
                            c = r.y * o,
                            u = i.currentY + c;
                        0 !== r.x && (a = Math.abs((l - i.currentX) / r.x)), 0 !== r.y && (o = Math.abs((u - i.currentY) / r.y));
                        var d = Math.max(a, o);
                        i.currentX = l, i.currentY = u;
                        var f = i.width * t.scale,
                            p = i.height * t.scale;
                        i.minX = Math.min(n.slideWidth / 2 - f / 2, 0), i.maxX = -i.minX, i.minY = Math.min(n.slideHeight / 2 - p / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), n.$imageWrapEl.transition(d).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function() {
                    var e = this,
                        t = e.zoom,
                        n = t.gesture;
                    n.$slideEl && e.previousIndex !== e.activeIndex && (n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl.transform("translate3d(0,0,0)"), n.$slideEl = void 0, n.$imageEl = void 0, n.$imageWrapEl = void 0, t.scale = 1, t.currentScale = 1)
                },
                toggle: function(e) {
                    var t = this,
                        n = t.zoom;
                    n.scale && 1 !== n.scale ? n.out() : n.in(e)
                },
                in: function(t) {
                    var n = this,
                        i = n.zoom,
                        r = n.params.zoom,
                        a = i.gesture,
                        o = i.image;
                    if (a.$slideEl || (a.$slideEl = n.clickedSlide ? e(n.clickedSlide) : n.slides.eq(n.activeIndex), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + r.containerClass)), a.$imageEl && 0 !== a.$imageEl.length) {
                        a.$slideEl.addClass("" + r.zoomedSlideClass);
                        var s, l, c, u, d, f, p, h, g, m, v, y, b, w, E, T, _, x;
                        void 0 === o.touchesStart.x && t ? (s = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (s = o.touchesStart.x, l = o.touchesStart.y), i.scale = a.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, i.currentScale = a.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, t ? (_ = a.$slideEl[0].offsetWidth, x = a.$slideEl[0].offsetHeight, c = a.$slideEl.offset().left, u = a.$slideEl.offset().top, d = c + _ / 2 - s, f = u + x / 2 - l, g = a.$imageEl[0].offsetWidth, m = a.$imageEl[0].offsetHeight, v = g * i.scale, y = m * i.scale, b = Math.min(_ / 2 - v / 2, 0), w = Math.min(x / 2 - y / 2, 0), E = -b, T = -w, p = d * i.scale, h = f * i.scale, p < b && (p = b), p > E && (p = E), h < w && (h = w), h > T && (h = T)) : (p = 0, h = 0), a.$imageWrapEl.transition(300).transform("translate3d(" + p + "px, " + h + "px,0)"), a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")")
                    }
                },
                out: function() {
                    var t = this,
                        n = t.zoom,
                        i = t.params.zoom,
                        r = n.gesture;
                    r.$slideEl || (r.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)), r.$imageEl && 0 !== r.$imageEl.length && (n.scale = 1, n.currentScale = 1, r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), r.$slideEl.removeClass("" + i.zoomedSlideClass), r.$slideEl = void 0)
                },
                enable: function() {
                    var t = this,
                        n = t.zoom;
                    if (!n.enabled) {
                        n.enabled = !0;
                        var i = t.slides,
                            r = !("touchstart" !== t.touchEvents.start || !K.passiveListener || !t.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        K.gestures ? (i.on("gesturestart", n.onGestureStart, r), i.on("gesturechange", n.onGestureChange, r), i.on("gestureend", n.onGestureEnd, r)) : "touchstart" === t.touchEvents.start && (i.on(t.touchEvents.start, n.onGestureStart, r), i.on(t.touchEvents.move, n.onGestureChange, r), i.on(t.touchEvents.end, n.onGestureEnd, r)), t.slides.each(function(i, r) {
                            var a = e(r);
                            a.find("." + t.params.zoom.containerClass).length > 0 && a.on(t.touchEvents.move, n.onTouchMove)
                        })
                    }
                },
                disable: function() {
                    var t = this,
                        n = t.zoom;
                    if (n.enabled) {
                        t.zoom.enabled = !1;
                        var i = t.slides,
                            r = !("touchstart" !== t.touchEvents.start || !K.passiveListener || !t.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        K.gestures ? (i.off("gesturestart", n.onGestureStart, r), i.off("gesturechange", n.onGestureChange, r), i.off("gestureend", n.onGestureEnd, r)) : "touchstart" === t.touchEvents.start && (i.off(t.touchEvents.start, n.onGestureStart, r), i.off(t.touchEvents.move, n.onGestureChange, r), i.off(t.touchEvents.end, n.onGestureEnd, r)), t.slides.each(function(i, r) {
                            var a = e(r);
                            a.find("." + t.params.zoom.containerClass).length > 0 && a.off(t.touchEvents.move, n.onTouchMove)
                        })
                    }
                }
            },
            Ct = {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create: function() {
                    var e = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            }
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(n) {
                        t[n] = xt[n].bind(e)
                    }), U.extend(e, {
                        zoom: t
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.zoom.enabled && e.zoom.enable()
                    },
                    destroy: function() {
                        this.zoom.disable()
                    },
                    touchStart: function(e) {
                        var t = this;
                        t.zoom.enabled && t.zoom.onTouchStart(e)
                    },
                    touchEnd: function(e) {
                        var t = this;
                        t.zoom.enabled && t.zoom.onTouchEnd(e)
                    },
                    doubleTap: function(e) {
                        var t = this;
                        t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                    },
                    transitionEnd: function() {
                        var e = this;
                        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                    }
                }
            },
            St = {
                loadInSlide: function(t, n) {
                    void 0 === n && (n = !0);
                    var i = this,
                        r = i.params.lazy;
                    if (void 0 !== t && 0 !== i.slides.length) {
                        var a = i.virtual && i.params.virtual.enabled,
                            o = a ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                            s = o.find("." + r.elementClass + ":not(." + r.loadedClass + "):not(." + r.loadingClass + ")");
                        !o.hasClass(r.elementClass) || o.hasClass(r.loadedClass) || o.hasClass(r.loadingClass) || (s = s.add(o[0])), 0 !== s.length && s.each(function(t, a) {
                            var s = e(a);
                            s.addClass(r.loadingClass);
                            var l = s.attr("data-background"),
                                c = s.attr("data-src"),
                                u = s.attr("data-srcset"),
                                d = s.attr("data-sizes");
                            i.loadImage(s[0], c || l, u, d, !1, function() {
                                if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                    if (l ? (s.css("background-image", 'url("' + l + '")'), s.removeAttr("data-background")) : (u && (s.attr("srcset", u), s.removeAttr("data-srcset")), d && (s.attr("sizes", d), s.removeAttr("data-sizes")), c && (s.attr("src", c), s.removeAttr("data-src"))), s.addClass(r.loadedClass).removeClass(r.loadingClass), o.find("." + r.preloaderClass).remove(), i.params.loop && n) {
                                        var e = o.attr("data-swiper-slide-index");
                                        if (o.hasClass(i.params.slideDuplicateClass)) {
                                            var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                            i.lazy.loadInSlide(t.index(), !1)
                                        } else {
                                            var a = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            i.lazy.loadInSlide(a.index(), !1)
                                        }
                                    }
                                    i.emit("lazyImageReady", o[0], s[0])
                                }
                            }), i.emit("lazyImageLoad", o[0], s[0])
                        })
                    }
                },
                load: function() {
                    function t(e) {
                        if (l) {
                            if (r.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                        } else if (o[e]) return !0;
                        return !1
                    }

                    function n(t) {
                        return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
                    }
                    var i = this,
                        r = i.$wrapperEl,
                        a = i.params,
                        o = i.slides,
                        s = i.activeIndex,
                        l = i.virtual && a.virtual.enabled,
                        c = a.lazy,
                        u = a.slidesPerView;
                    if ("auto" === u && (u = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) r.children("." + a.slideVisibleClass).each(function(t, n) {
                        var r = l ? e(n).attr("data-swiper-slide-index") : e(n).index();
                        i.lazy.loadInSlide(r)
                    });
                    else if (u > 1)
                        for (var d = s; d < s + u; d += 1) t(d) && i.lazy.loadInSlide(d);
                    else i.lazy.loadInSlide(s);
                    if (c.loadPrevNext)
                        if (u > 1 || c.loadPrevNextAmount && c.loadPrevNextAmount > 1) {
                            for (var f = c.loadPrevNextAmount, p = u, h = Math.min(s + p + Math.max(f, p), o.length), g = Math.max(s - Math.max(p, f), 0), m = s + u; m < h; m += 1) t(m) && i.lazy.loadInSlide(m);
                            for (var v = g; v < s; v += 1) t(v) && i.lazy.loadInSlide(v)
                        } else {
                            var y = r.children("." + a.slideNextClass);
                            y.length > 0 && i.lazy.loadInSlide(n(y));
                            var b = r.children("." + a.slidePrevClass);
                            b.length > 0 && i.lazy.loadInSlide(n(b))
                        }
                }
            },
            Dt = {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: St.load.bind(e),
                            loadInSlide: St.loadInSlide.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                    },
                    init: function() {
                        var e = this;
                        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                    },
                    scroll: function() {
                        var e = this;
                        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                    },
                    resize: function() {
                        var e = this;
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    scrollbarDragMove: function() {
                        var e = this;
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    transitionStart: function() {
                        var e = this;
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                    },
                    transitionEnd: function() {
                        var e = this;
                        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                    }
                }
            },
            At = {
                LinearSpline: function(e, t) {
                    var n = function() {
                        var e, t, n;
                        return function(i, r) {
                            for (t = -1, e = i.length; e - t > 1;) n = e + t >> 1, i[n] <= r ? t = n : e = n;
                            return e
                        }
                    }();
                    this.x = e, this.y = t, this.lastIndex = e.length - 1;
                    var i, r;
                    return this.interpolate = function(e) {
                        return e ? (r = n(this.x, e), i = r - 1, (e - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0
                    }, this
                },
                getInterpolateFunction: function(e) {
                    var t = this;
                    t.controller.spline || (t.controller.spline = t.params.loop ? new At.LinearSpline(t.slidesGrid, e.slidesGrid) : new At.LinearSpline(t.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, t) {
                    function n(e) {
                        var t = e.rtl && "horizontal" === e.params.direction ? -a.translate : a.translate;
                        "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), r = -a.controller.spline.interpolate(-t)), r && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), r = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setTranslate(r, a), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    var i, r, a = this,
                        o = a.controller.control;
                    if (Array.isArray(o))
                        for (var s = 0; s < o.length; s += 1) o[s] !== t && o[s] instanceof nt && n(o[s]);
                    else o instanceof nt && t !== o && n(o)
                },
                setTransition: function(e, t) {
                    function n(t) {
                        t.setTransition(e, r), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() {
                            a && (t.params.loop && "slide" === r.params.controller.by && t.loopFix(), t.transitionEnd())
                        }))
                    }
                    var i, r = this,
                        a = r.controller.control;
                    if (Array.isArray(a))
                        for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof nt && n(a[i]);
                    else a instanceof nt && t !== a && n(a)
                }
            },
            It = {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        controller: {
                            control: e.params.controller.control,
                            getInterpolateFunction: At.getInterpolateFunction.bind(e),
                            setTranslate: At.setTranslate.bind(e),
                            setTransition: At.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    update: function() {
                        var e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    resize: function() {
                        var e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    observerUpdate: function() {
                        var e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    setTranslate: function(e, t) {
                        var n = this;
                        n.controller.control && n.controller.setTranslate(e, t)
                    },
                    setTransition: function(e, t) {
                        var n = this;
                        n.controller.control && n.controller.setTransition(e, t)
                    }
                }
            },
            kt = {
                makeElFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addElRole: function(e, t) {
                    return e.attr("role", t), e
                },
                addElLabel: function(e, t) {
                    return e.attr("aria-label", t), e
                },
                disableEl: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enableEl: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(t) {
                    var n = this,
                        i = n.params.a11y;
                    if (13 === t.keyCode) {
                        var r = e(t.target);
                        n.navigation && n.navigation.$nextEl && r.is(n.navigation.$nextEl) && (n.isEnd && !n.params.loop || n.slideNext(), n.isEnd ? n.a11y.notify(i.lastSlideMessage) : n.a11y.notify(i.nextSlideMessage)), n.navigation && n.navigation.$prevEl && r.is(n.navigation.$prevEl) && (n.isBeginning && !n.params.loop || n.slidePrev(), n.isBeginning ? n.a11y.notify(i.firstSlideMessage) : n.a11y.notify(i.prevSlideMessage)), n.pagination && r.is("." + n.params.pagination.bulletClass) && r[0].click()
                    }
                },
                notify: function(e) {
                    var t = this,
                        n = t.a11y.liveRegion;
                    0 !== n.length && (n.html(""), n.html(e))
                },
                updateNavigation: function() {
                    var e = this;
                    if (!e.params.loop) {
                        var t = e.navigation,
                            n = t.$nextEl,
                            i = t.$prevEl;
                        i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), n && n.length > 0 && (e.isEnd ? e.a11y.disableEl(n) : e.a11y.enableEl(n))
                    }
                },
                updatePagination: function() {
                    var t = this,
                        n = t.params.a11y;
                    t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(i, r) {
                        var a = e(r);
                        t.a11y.makeElFocusable(a), t.a11y.addElRole(a, "button"), t.a11y.addElLabel(a, n.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                    })
                },
                init: function() {
                    var e = this;
                    e.$el.append(e.a11y.liveRegion);
                    var t, n, i = e.params.a11y;
                    e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, i.prevSlideMessage), n.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
                },
                destroy: function() {
                    var e = this;
                    e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
                    var t, n;
                    e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), n && n.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
                }
            },
            Ot = {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !1,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create: function() {
                    var t = this;
                    U.extend(t, {
                        a11y: {
                            liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                        }
                    }), Object.keys(kt).forEach(function(e) {
                        t.a11y[e] = kt[e].bind(t)
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                    },
                    toEdge: function() {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.updateNavigation()
                    },
                    fromEdge: function() {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.updateNavigation()
                    },
                    paginationUpdate: function() {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.updatePagination()
                    },
                    destroy: function() {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.destroy()
                    }
                }
            },
            Nt = {
                init: function() {
                    var e = this;
                    if (e.params.history) {
                        if (!Y.history || !Y.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                        var t = e.history;
                        t.initialized = !0, t.paths = Nt.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || Y.addEventListener("popstate", e.history.setHistoryPopState))
                    }
                },
                destroy: function() {
                    var e = this;
                    e.params.history.replaceState || Y.removeEventListener("popstate", e.history.setHistoryPopState)
                },
                setHistoryPopState: function() {
                    var e = this;
                    e.history.paths = Nt.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = Y.location.pathname.slice(1).split("/").filter(function(e) {
                            return "" !== e
                        }),
                        t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    }
                },
                setHistory: function(e, t) {
                    var n = this;
                    if (n.history.initialized && n.params.history.enabled) {
                        var i = n.slides.eq(t),
                            r = Nt.slugify(i.attr("data-history"));
                        Y.location.pathname.includes(e) || (r = e + "/" + r);
                        var a = Y.history.state;
                        a && a.value === r || (n.params.history.replaceState ? Y.history.replaceState({
                            value: r
                        }, null, r) : Y.history.pushState({
                            value: r
                        }, null, r))
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, t, n) {
                    var i = this;
                    if (t)
                        for (var r = 0, a = i.slides.length; r < a; r += 1) {
                            var o = i.slides.eq(r),
                                s = Nt.slugify(o.attr("data-history"));
                            if (s === t && !o.hasClass(i.params.slideDuplicateClass)) {
                                var l = o.index();
                                i.slideTo(l, e, n)
                            }
                        } else i.slideTo(0, e, n)
                }
            },
            Pt = {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        history: {
                            init: Nt.init.bind(e),
                            setHistory: Nt.setHistory.bind(e),
                            setHistoryPopState: Nt.setHistoryPopState.bind(e),
                            scrollToSlide: Nt.scrollToSlide.bind(e),
                            destroy: Nt.destroy.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.history.enabled && e.history.init()
                    },
                    destroy: function() {
                        var e = this;
                        e.params.history.enabled && e.history.destroy()
                    },
                    transitionEnd: function() {
                        var e = this;
                        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                    }
                }
            },
            Lt = {
                onHashCange: function() {
                    var e = this,
                        t = X.location.hash.replace("#", "");
                    t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index())
                },
                setHash: function() {
                    var e = this;
                    if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                        if (e.params.hashNavigation.replaceState && Y.history && Y.history.replaceState) Y.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                        else {
                            var t = e.slides.eq(e.activeIndex),
                                n = t.attr("data-hash") || t.attr("data-history");
                            X.location.hash = n || ""
                        }
                },
                init: function() {
                    var t = this;
                    if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
                        t.hashNavigation.initialized = !0;
                        var n = X.location.hash.replace("#", "");
                        if (n)
                            for (var i = 0, r = t.slides.length; i < r; i += 1) {
                                var a = t.slides.eq(i),
                                    o = a.attr("data-hash") || a.attr("data-history");
                                if (o === n && !a.hasClass(t.params.slideDuplicateClass)) {
                                    var s = a.index();
                                    t.slideTo(s, 0, t.params.runCallbacksOnInit, !0)
                                }
                            }
                        t.params.hashNavigation.watchState && e(Y).on("hashchange", t.hashNavigation.onHashCange)
                    }
                },
                destroy: function() {
                    var t = this;
                    t.params.hashNavigation.watchState && e(Y).off("hashchange", t.hashNavigation.onHashCange)
                }
            },
            Mt = {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        hashNavigation: {
                            initialized: !1,
                            init: Lt.init.bind(e),
                            destroy: Lt.destroy.bind(e),
                            setHash: Lt.setHash.bind(e),
                            onHashCange: Lt.onHashCange.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.init()
                    },
                    destroy: function() {
                        var e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                    },
                    transitionEnd: function() {
                        var e = this;
                        e.hashNavigation.initialized && e.hashNavigation.setHash()
                    }
                }
            },
            Ht = {
                run: function() {
                    var e = this,
                        t = e.slides.eq(e.activeIndex),
                        n = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = U.nextTick(function() {
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                    }, n)
                },
                start: function() {
                    var e = this;
                    return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
                },
                stop: function() {
                    var e = this;
                    return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
                },
                pause: function(e) {
                    var t = this;
                    t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function() {
                        t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                    }) : (t.autoplay.paused = !1, t.autoplay.run())))
                }
            },
            zt = {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: Ht.run.bind(e),
                            start: Ht.start.bind(e),
                            stop: Ht.stop.bind(e),
                            pause: Ht.pause.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.autoplay.enabled && e.autoplay.start()
                    },
                    beforeTransitionStart: function(e, t) {
                        var n = this;
                        n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(e) : n.autoplay.stop())
                    },
                    sliderFirstMove: function() {
                        var e = this;
                        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                    },
                    destroy: function() {
                        var e = this;
                        e.autoplay.running && e.autoplay.stop()
                    }
                }
            },
            Rt = {
                setTranslate: function() {
                    for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
                        var i = e.slides.eq(n),
                            r = i[0].swiperSlideOffset,
                            a = -r;
                        e.params.virtualTranslate || (a -= e.translate);
                        var o = 0;
                        e.isHorizontal() || (o = a, a = 0);
                        var s = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                        i.css({
                            opacity: s
                        }).transform("translate3d(" + a + "px, " + o + "px, 0px)")
                    }
                },
                setTransition: function(e) {
                    var t = this,
                        n = t.slides,
                        i = t.$wrapperEl;
                    if (n.transition(e), t.params.virtualTranslate && 0 !== e) {
                        var r = !1;
                        n.transitionEnd(function() {
                            if (!r && t && !t.destroyed) {
                                r = !0, t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) i.trigger(e[n])
                            }
                        })
                    }
                }
            },
            jt = {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        fadeEffect: {
                            setTranslate: Rt.setTranslate.bind(e),
                            setTransition: Rt.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("fade" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "fade");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            U.extend(e.params, t), U.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        var e = this;
                        "fade" === e.params.effect && e.fadeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        "fade" === t.params.effect && t.fadeEffect.setTransition(e)
                    }
                }
            },
            Wt = {
                setTranslate: function() {
                    var t, n = this,
                        i = n.$el,
                        r = n.$wrapperEl,
                        a = n.slides,
                        o = n.width,
                        s = n.height,
                        l = n.rtl,
                        c = n.size,
                        u = n.params.cubeEffect,
                        d = n.isHorizontal(),
                        f = n.virtual && n.params.virtual.enabled,
                        p = 0;
                    u.shadow && (d ? (t = r.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), r.append(t)), t.css({
                        height: o + "px"
                    })) : (t = i.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), i.append(t))));
                    for (var h = 0; h < a.length; h += 1) {
                        var g = a.eq(h),
                            m = h;
                        f && (m = parseInt(g.attr("data-swiper-slide-index"), 10));
                        var v = 90 * m,
                            y = Math.floor(v / 360);
                        l && (v = -v, y = Math.floor(-v / 360));
                        var b = Math.max(Math.min(g[0].progress, 1), -1),
                            w = 0,
                            E = 0,
                            T = 0;
                        m % 4 == 0 ? (w = 4 * -y * c, T = 0) : (m - 1) % 4 == 0 ? (w = 0, T = 4 * -y * c) : (m - 2) % 4 == 0 ? (w = c + 4 * y * c, T = c) : (m - 3) % 4 == 0 && (w = -c, T = 3 * c + 4 * c * y), l && (w = -w), d || (E = w, w = 0);
                        var _ = "rotateX(" + (d ? 0 : -v) + "deg) rotateY(" + (d ? v : 0) + "deg) translate3d(" + w + "px, " + E + "px, " + T + "px)";
                        if (b <= 1 && b > -1 && (p = 90 * m + 90 * b, l && (p = 90 * -m - 90 * b)), g.transform(_), u.slideShadows) {
                            var x = d ? g.find(".swiper-slide-shadow-left") : g.find(".swiper-slide-shadow-top"),
                                C = d ? g.find(".swiper-slide-shadow-right") : g.find(".swiper-slide-shadow-bottom");
                            0 === x.length && (x = e('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>'), g.append(x)), 0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>'), g.append(C)), x.length && (x[0].style.opacity = Math.max(-b, 0)), C.length && (C[0].style.opacity = Math.max(b, 0))
                        }
                    }
                    if (r.css({
                            "-webkit-transform-origin": "50% 50% -" + c / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + c / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + c / 2 + "px",
                            "transform-origin": "50% 50% -" + c / 2 + "px"
                        }), u.shadow)
                        if (d) t.transform("translate3d(0px, " + (o / 2 + u.shadowOffset) + "px, " + -o / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");
                        else {
                            var S = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90),
                                D = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2),
                                A = u.shadowScale,
                                I = u.shadowScale / D,
                                k = u.shadowOffset;
                            t.transform("scale3d(" + A + ", 1, " + I + ") translate3d(0px, " + (s / 2 + k) + "px, " + -s / 2 / I + "px) rotateX(-90deg)")
                        }
                    var O = at.isSafari || at.isUiWebView ? -c / 2 : 0;
                    r.transform("translate3d(0px,0," + O + "px) rotateX(" + (n.isHorizontal() ? 0 : p) + "deg) rotateY(" + (n.isHorizontal() ? -p : 0) + "deg)")
                },
                setTransition: function(e) {
                    var t = this,
                        n = t.$el;
                    t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e)
                }
            },
            $t = {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        cubeEffect: {
                            setTranslate: Wt.setTranslate.bind(e),
                            setTransition: Wt.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("cube" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0
                            };
                            U.extend(e.params, t), U.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        var e = this;
                        "cube" === e.params.effect && e.cubeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        "cube" === t.params.effect && t.cubeEffect.setTransition(e)
                    }
                }
            },
            Ft = {
                setTranslate: function() {
                    for (var t = this, n = t.slides, i = 0; i < n.length; i += 1) {
                        var r = n.eq(i),
                            a = r[0].progress;
                        t.params.flipEffect.limitRotation && (a = Math.max(Math.min(r[0].progress, 1), -1));
                        var o = r[0].swiperSlideOffset,
                            s = -180 * a,
                            l = s,
                            c = 0,
                            u = -o,
                            d = 0;
                        if (t.isHorizontal() ? t.rtl && (l = -l) : (d = u, u = 0, c = -l, l = 0), r[0].style.zIndex = -Math.abs(Math.round(a)) + n.length, t.params.flipEffect.slideShadows) {
                            var f = t.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                p = t.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                            0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), r.append(f)), 0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(p)), f.length && (f[0].style.opacity = Math.max(-a, 0)), p.length && (p[0].style.opacity = Math.max(a, 0))
                        }
                        r.transform("translate3d(" + u + "px, " + d + "px, 0px) rotateX(" + c + "deg) rotateY(" + l + "deg)")
                    }
                },
                setTransition: function(e) {
                    var t = this,
                        n = t.slides,
                        i = t.activeIndex,
                        r = t.$wrapperEl;
                    if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                        var a = !1;
                        n.eq(i).transitionEnd(function() {
                            if (!a && t && !t.destroyed) {
                                a = !0, t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) r.trigger(e[n])
                            }
                        })
                    }
                }
            },
            Bt = {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        flipEffect: {
                            setTranslate: Ft.setTranslate.bind(e),
                            setTransition: Ft.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("flip" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            U.extend(e.params, t), U.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        var e = this;
                        "flip" === e.params.effect && e.flipEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        "flip" === t.params.effect && t.flipEffect.setTransition(e)
                    }
                }
            },
            Vt = {
                setTranslate: function() {
                    for (var t = this, n = t.width, i = t.height, r = t.slides, a = t.$wrapperEl, o = t.slidesSizesGrid, s = t.params.coverflowEffect, l = t.isHorizontal(), c = t.translate, u = l ? n / 2 - c : i / 2 - c, d = l ? s.rotate : -s.rotate, f = s.depth, p = 0, h = r.length; p < h; p += 1) {
                        var g = r.eq(p),
                            m = o[p],
                            v = g[0].swiperSlideOffset,
                            y = (u - v - m / 2) / m * s.modifier,
                            b = l ? d * y : 0,
                            w = l ? 0 : d * y,
                            E = -f * Math.abs(y),
                            T = l ? 0 : s.stretch * y,
                            _ = l ? s.stretch * y : 0;
                        Math.abs(_) < .001 && (_ = 0), Math.abs(T) < .001 && (T = 0), Math.abs(E) < .001 && (E = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                        var x = "translate3d(" + _ + "px," + T + "px," + E + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                        if (g.transform(x), g[0].style.zIndex = 1 - Math.abs(Math.round(y)), s.slideShadows) {
                            var C = l ? g.find(".swiper-slide-shadow-left") : g.find(".swiper-slide-shadow-top"),
                                S = l ? g.find(".swiper-slide-shadow-right") : g.find(".swiper-slide-shadow-bottom");
                            0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), g.append(C)), 0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), g.append(S)), C.length && (C[0].style.opacity = y > 0 ? y : 0), S.length && (S[0].style.opacity = -y > 0 ? -y : 0)
                        }
                    }
                    if (K.pointerEvents || K.prefixedPointerEvents) {
                        a[0].style.perspectiveOrigin = u + "px 50%"
                    }
                },
                setTransition: function(e) {
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }
            },
            Gt = {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create: function() {
                    var e = this;
                    U.extend(e, {
                        coverflowEffect: {
                            setTranslate: Vt.setTranslate.bind(e),
                            setTransition: Vt.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate: function() {
                        var e = this;
                        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
                    }
                }
            },
            qt = [it, rt, ot, st, ct, dt, pt, gt, vt, bt, Et, _t, Ct, Dt, It, Ot, Pt, Mt, zt, jt, $t, Bt, Gt];
        return void 0 === nt.use && (nt.use = nt.Class.use, nt.installModule = nt.Class.installModule), nt.use(qt), nt
    })
}, function(e, t, n) {
    n(1), n(2), n(3), n(4), n(5), n(6), n(7), n(8), n(9), n(10), n(11), n(104), n(12), n(13), n(14), n(15), n(16), n(17), n(18), n(19), n(20), n(21), n(22), n(105), n(23), n(24), n(25), n(26), n(27), n(28), n(29), n(30), n(31), n(32), n(33), n(34), n(35), n(36), n(37), n(38), n(39), n(40), n(41), n(42), n(43), n(106), n(107), n(108), n(109), n(110), n(111), n(112), n(113), n(114), n(115), n(116), n(117), n(118), n(44), n(45), n(119), n(46), n(47), n(48), n(49), n(120), n(123), n(124), n(178), n(179), n(180), n(181), n(182), n(125), n(126), n(183), n(127), n(128), n(129), n(130), n(143), n(144), n(51), n(131), n(132), n(133), n(134), n(135), n(136), n(137), n(138), n(52), n(53), n(54), n(55), n(56), n(57), n(58), n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(66), n(67), n(68), n(69), n(70), n(71), n(72), n(73), n(74), n(75), n(76), n(77), n(78), n(79), n(80), n(81), n(82), n(83), n(84), n(85), n(86), n(87), n(88), n(89), n(90), n(91), n(92), n(93), n(94), n(95), n(96), n(50), n(97), n(98), n(99), n(100), n(101), n(102), n(103)
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    n(1), n(2), n(3), n(4), n(5), n(6), n(7), n(8), n(9), n(10), n(11), n(104), n(12), n(13), n(14), n(15), n(16), n(17), n(18), n(19), n(20), n(21), n(22), n(105), n(23), n(24), n(25), n(26), n(27), n(28), n(29), n(30), n(31), n(32), n(33), n(34), n(35), n(36), n(37), n(38), n(39), n(40), n(41), n(42), n(43), n(106), n(107), n(108), n(109), n(110), n(111), n(112), n(113), n(114), n(115), n(116), n(117), n(118), n(44), n(45), n(119), n(46), n(47), n(48), n(49), n(120), n(185), n(121), n(122), n(186), n(52), n(53), n(54), n(55), n(56), n(57), n(58), n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(66), n(67), n(68), n(69), n(70), n(71), n(72), n(73), n(74), n(75), n(76), n(77), n(78), n(79), n(80), n(81), n(82), n(51), n(83), n(84), n(85), n(86), n(87), n(88), n(89), n(90), n(91), n(92), n(93), n(94), n(95), n(96), n(50), n(97), n(98), n(99), n(100), n(101), n(102), n(103)
}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    n(1), n(2), n(3), n(4), n(5), n(6), n(7), n(8), n(9), n(10), n(11), n(23), n(24), n(15), n(16), n(17), n(18), n(25), n(26), n(27), n(28), n(29), n(30), n(31), n(32), n(33), n(34), n(35), n(36), n(37), n(38), n(39), n(40), n(41), n(42), n(43), n(188), n(189), n(190), n(44), n(45), n(47), n(48), n(54), n(55), n(56), n(57), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(61), n(198), n(199), n(12), n(13), n(14), n(19), n(20), n(21), n(22), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(121), n(122), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(59), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(46), n(49), n(270), n(271), n(52), n(53), n(58), n(60), n(62), n(63), n(64), n(65), n(66), n(67), n(68), n(69), n(70), n(71), n(72), n(73), n(74), n(75), n(76), n(77), n(78), n(79), n(80), n(81), n(82), n(51), n(83), n(84), n(85), n(86), n(87), n(88), n(89), n(90), n(91), n(92), n(93), n(94), n(95), n(96), n(50), n(97), n(98), n(99), n(100), n(101), n(102), n(103)
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    (function(e) {
        e(document).ready(function() {
            function t(e) {
                var t = e.find(".news__descr-wrapper");
                e.removeClass("news__item_show"), t.hasClass(n) && t.removeClass(n), t.hasClass(i) && t.removeClass(i)
            }
            var n = "news__descr-wrapper_right",
                i = "news__descr-wrapper_center",
                r = !1;
            e('[data-toggle="popover"]').popover(), e(".news").on("click", ".filter__control", function() {
                    // var t = e(this),
                    //     n = e(".news .block-header .mark"),
                    //     i = (t.data("filter"), t.parents(".filter"), ""),
                    //     r = (e(".news__item"), e(".filter__control").length);
                    // switch (t.toggleClass("filter__control_selected"), e(".filter__control_selected").length) {
                    //     case 0:
                    //     case r:
                    //         i = "Все новости";
                    //         break;
                    //     case 1:
                    //         i = e(".filter__control_selected").text();
                    //         break;
                    //     default:
                    //         i = "Фильтр"
                    // }
                    // n.text(i)
                }), e(".news__item_little").on("mouseenter", function() {
                    var t = e(this),
                        a = t.find(".news__descr-wrapper"),
                        o = a.outerHeight(!0) + 8,
                        s = a.outerWidth(!0),
                        l = t.position().left,
                        c = t.outerWidth(!0),
                        u = t.find(".news__photo-wrapper").outerWidth(),
                        d = (c - u) / 2;
                    t.parents(".news__content").outerWidth() - (l + d) < s && (l + d + u < s ? a.addClass(i) : a.hasClass(n) || a.addClass(n)), setTimeout(function() {
                        (t.is(":hover") || r) && (a.css({
                            top: -o + "px"
                        }), t.addClass("news__item_show"))
                    }, 100)
                }).on("mouseleave", function() {
                    var n = e(this);
                    setTimeout(function() {
                        n.is(":hover") || t(n)
                    }, 200)
                }), e(".news__photo-wrapper").on("touchstart", function(n) {
                    var i = e(".news__content").find(".news__descr-wrapper");
                    n.preventDefault(), e(".news__item_show").removeClass("news__item_show"), t(i), r = !0, e(this).mouseenter()
                }), e("body").on("touchstart", function(t) {
                    e(t.target).hasClass("news__photo-wrapper") || e(".news__item_little").mouseleave()
                }),
                function() {
                    var t = e(".news__content > .news__item-box").slice(0, 4),
                        n = e(".news__top-news > .news__item-box"),
                        i = "",
                        r = "",
                        a = "";
                    n.filter(function(n) {
                        a = e(t[n]), i = a.find(".news__photo").attr("src"), r = a.find("p.news__descr").text(), e(this).find("pattern image").attr("xlink:href", i), e(this).find(".news__descr").text(r)
                    })
                }()
        })
    }).call(t, n(0))
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    n(1), n(2), n(3), n(4), n(5), n(6), n(7), n(8), n(9), n(10), n(11), n(104), n(12), n(13), n(14), n(15), n(16), n(17), n(18), n(19), n(20), n(21), n(22), n(105), n(23), n(24), n(25), n(26), n(27), n(28), n(29), n(30), n(31), n(32), n(33), n(34), n(35), n(36), n(37), n(38), n(39), n(40), n(41), n(42), n(43), n(106), n(107), n(108), n(109), n(110), n(111), n(112), n(113), n(114), n(115), n(116), n(117), n(118), n(44), n(45), n(119), n(46), n(47), n(48), n(49), n(120), n(123), n(124), n(139), n(140), n(141), n(273), n(125), n(126), n(127), n(143), n(274), n(128), n(142), n(129), n(130), n(144), n(51), n(131), n(132), n(133), n(134), n(135), n(136), n(137), n(138), n(52), n(53), n(54), n(55), n(56), n(57), n(58), n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(66), n(67), n(68), n(69), n(70), n(71), n(72), n(73), n(74), n(75), n(76), n(77), n(78), n(79), n(80), n(81), n(82), n(83), n(84), n(85), n(86), n(87), n(88), n(89), n(90), n(91), n(92), n(93), n(94), n(95), n(96), n(50), n(97), n(98), n(99), n(100), n(101), n(102), n(103), n(275), n(121), n(122), n(276), n(277), n(278), n(279), n(280), n(281), n(282), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(296), n(297), n(298), n(299)
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    (function(e) {
        e(document).ready(function() {
            // function t() {
            //     e(".photogallery").find(r).removeClass(i)
            // }

            // function n(t) {
            //     var n = e(".photogallery");
            //     n.find(".photogallery__img-wrapper img").attr("src", t.img), n.find(".photogallery__descr").text(t.descr), n.find(".photogallery__cnt-num_cur").text(t.slide)
            // }
            // var i = "photogallery__current",
            //     r = "." + i;
            // e(".photogallery").on("click", function(r) {
            //     // var a = r.target;
            //     // e(this);
            //     // if (e(a).hasClass("img")) {
            //     //     r.preventDefault();
            //     //     var o = e(a).parents(".link");
            //     //     n({
            //     //         img: o.data("img"),
            //     //         descr: o.data("descr"),
            //     //         slide: o.data("slide")
            //     //     }), t(), o.addClass(i)
            //     // }
            // }), e(".photogallery__wrapper_view").on("click", function(a) {
            //     // var o = a.target,
            //     //     s = e(o).hasClass("icon-arr_right");
            //     // if (s || e(o).hasClass("icon-arr_left")) {
            //     //     var l = e(r),
            //     //         c = parseInt(l.data("slide")),
            //     //         u = e(".photogallery__box_grid").data("slides"),
            //     //         d = 0;
            //     //     t(), d = c === u ? s ? 1 : c - 1 : 1 !== c || s ? s ? c + 1 : c - 1 : u;
            //     //     var f = e('.photogallery__box_grid .link[data-slide="' + d + '"]');
            //     //     n(f.data()), f.addClass(i)
            //     // }
            // })
        })
    }).call(t, n(0))
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    (function(e) {
        e(document).ready(function() {
            e(".share").on("click", ".link", function(t) {
                return t.preventDefault(), window.open(this.href, this.title, "width=600,height=400,toolbar=0,status=0"), e(".share").toggleClass("share_hide"), !1
            })
        })
    }).call(t, n(0))
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}]);

var slider = new Swiper('.slider_main .swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 40,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    setWrapperSize: true,
    wrapperClass: 'slider__wrapper',
    slideClass: 'slider__slide',
    navigation: {
        nextEl: '.slider__arrow_arrow_right',
        prevEl: '.slider__arrow_arrow_left',
    },
    pagination: {
        el: '.slider__pagination',
        bulletClass: 'slider__bullet',
        bulletActiveClass: 'slider__bullet_selected',
        clickable: true,
    },
    on: {
        slideChange: function () {
            var view = 'link_slide-view',
                dotView = '.' + view,
                wrapper = $('.main-slider__images-wrapper'),
                index = this.realIndex,
                link = '';

            wrapper.find(dotView).toggleClass(view);
            wrapper.find('.img').filter(function() {
                link = $(this).parents('.link');

                if(link.data('slide') == index) {
                    link.toggleClass(view);
                }
            });
        },
    },
});



//# sourceMappingURL=merged.js.map
