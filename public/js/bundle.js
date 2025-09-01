/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.6.0",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(j).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
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
        code: !0,
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
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(Ne, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Me = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ie = new RegExp(ne.join("|"), "i");
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Pe.test(a) &&
          Ie.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Be = ["Webkit", "Moz", "ms"],
    $e = E.createElement("div").style,
    _e = {};
  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return (
      t ||
      (e in $e
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
              while (n--) if ((e = Be[n] + t) in $e) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = { position: "absolute", visibility: "hidden", display: "block" },
    Ge = { letterSpacing: "0", fontWeight: "400" };
  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Je(e, t, n) {
    var r = Re(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = We(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Qe(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Xe.test(t) || (t = ze(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        "normal" === i && t in Ge && (i = Ge[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Me(e, Ve, function () {
                  return Je(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Qe(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Ye(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Ye);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Re(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = Ke).prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Ke.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Ke.prototype),
    ((Ke.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Ke.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = Ke.prototype.init),
    (S.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(ot)
        : C.setTimeout(ot, S.fx.interval),
      S.fx.tick());
  }
  function at() {
    return (
      C.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (
      var r,
        i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = Ze || at(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ut, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(lt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (lt.tweeners[n] = lt.tweeners[n] || []),
          lt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = lt(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(st(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (Ze = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (S.fx.stop = function () {
      et = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (tt = E.createElement("input")),
    (nt = E.createElement("select").appendChild(E.createElement("option"))),
    (tt.type = "checkbox"),
    (y.checkOn = "" !== tt.value),
    (y.optSelected = nt.selected),
    ((tt = E.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (y.radioValue = "t" === tt.value);
  var ct,
    ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ft[t] || S.find.attr;
      ft[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = ft[o]),
            (ft[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (ft[o] = i)),
          r
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(" ");
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function vt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, gt(this)));
          });
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, gt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, gt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = vt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(yt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : ht(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !mt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, xt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, xt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var bt = C.location,
    wt = { guid: Date.now() },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        S.error(
          "Invalid XML: " +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : e)
        ),
      t
    );
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || Ct.test(n)
          ? i(n, t)
          : At(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) At(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) At(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              kt.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, "\r\n") };
                })
              : { name: t.name, value: n.replace(Et, "\r\n") };
          })
          .get();
      },
    });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = "*/".concat("*"),
    Mt = E.createElement("a");
  function It(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Mt.href = bt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = qt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || bt.href) + "").replace(
            Ht,
            bt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Wt(Ot, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Lt.test(v.type)),
        (f = v.url.replace(jt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Nt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Tt.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Dt, "$1")),
              (o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Wt(Pt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              S.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    $t = S.ajaxSettings.xhr();
  (y.cors = !!$t && "withCredentials" in $t),
    (y.ajax = $t = !!$t),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || ($t && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Bt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Ut.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ut.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Ut, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((_t = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === _t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
        if (t)
          return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Xt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Vt = C.jQuery,
    Gt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e());
})(this, function () {
  "use strict";
  const t = "transitionend",
    e = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return e;
    },
    i = (t) => {
      const i = e(t);
      return i && document.querySelector(i) ? i : null;
    },
    n = (t) => {
      const i = e(t);
      return i ? document.querySelector(i) : null;
    },
    s = (e) => {
      e.dispatchEvent(new Event(t));
    },
    o = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    r = (t) =>
      o(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    a = (t, e, i) => {
      Object.keys(i).forEach((n) => {
        const s = i[n],
          r = e[n],
          a =
            r && o(r)
              ? "element"
              : null == (l = r)
              ? `${l}`
              : {}.toString
                  .call(l)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var l;
        if (!new RegExp(s).test(a))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`
          );
      });
    },
    l = (t) =>
      !(!o(t) || 0 === t.getClientRects().length) &&
      "visible" === getComputedStyle(t).getPropertyValue("visibility"),
    c = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    h = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? h(t.parentNode)
        : null;
    },
    d = () => {},
    u = (t) => {
      t.offsetHeight;
    },
    f = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    p = [],
    m = () => "rtl" === document.documentElement.dir,
    g = (t) => {
      var e;
      (e = () => {
        const e = f();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (p.length ||
              document.addEventListener("DOMContentLoaded", () => {
                p.forEach((t) => t());
              }),
            p.push(e))
          : e();
    },
    _ = (t) => {
      "function" == typeof t && t();
    },
    b = (e, i, n = !0) => {
      if (!n) return void _(e);
      const o =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(i) + 5;
      let r = !1;
      const a = ({ target: n }) => {
        n === i && ((r = !0), i.removeEventListener(t, a), _(e));
      };
      i.addEventListener(t, a),
        setTimeout(() => {
          r || s(i);
        }, o);
    },
    v = (t, e, i, n) => {
      let s = t.indexOf(e);
      if (-1 === s) return t[!i && n ? t.length - 1 : 0];
      const o = t.length;
      return (
        (s += i ? 1 : -1),
        n && (s = (s + o) % o),
        t[Math.max(0, Math.min(s, o - 1))]
      );
    },
    y = /[^.]*(?=\..*)\.|.*/,
    w = /\..*/,
    E = /::\d+$/,
    A = {};
  let T = 1;
  const O = { mouseenter: "mouseover", mouseleave: "mouseout" },
    C = /^(mouseenter|mouseleave)/i,
    k = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function L(t, e) {
    return (e && `${e}::${T++}`) || t.uidEvent || T++;
  }
  function x(t) {
    const e = L(t);
    return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
  }
  function D(t, e, i = null) {
    const n = Object.keys(t);
    for (let s = 0, o = n.length; s < o; s++) {
      const o = t[n[s]];
      if (o.originalHandler === e && o.delegationSelector === i) return o;
    }
    return null;
  }
  function S(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e;
    let o = P(t);
    return k.has(o) || (o = t), [n, s, o];
  }
  function N(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    if ((i || ((i = n), (n = null)), C.test(e))) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      n ? (n = t(n)) : (i = t(i));
    }
    const [o, r, a] = S(e, i, n),
      l = x(t),
      c = l[a] || (l[a] = {}),
      h = D(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = L(r, e.replace(y, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (let a = o.length; a--; )
                  if (o[a] === r)
                    return (
                      (s.delegateTarget = r),
                      n.oneOff && j.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
              return null;
            };
          })(t, i, n)
        : (function (t, e) {
            return function i(n) {
              return (
                (n.delegateTarget = t),
                i.oneOff && j.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, i);
    (u.delegationSelector = o ? i : null),
      (u.originalHandler = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function I(t, e, i, n, s) {
    const o = D(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function P(t) {
    return (t = t.replace(w, "")), O[t] || t;
  }
  const j = {
      on(t, e, i, n) {
        N(t, e, i, n, !1);
      },
      one(t, e, i, n) {
        N(t, e, i, n, !0);
      },
      off(t, e, i, n) {
        if ("string" != typeof e || !t) return;
        const [s, o, r] = S(e, i, n),
          a = r !== e,
          l = x(t),
          c = e.startsWith(".");
        if (void 0 !== o) {
          if (!l || !l[r]) return;
          return void I(t, l, r, o, s ? i : null);
        }
        c &&
          Object.keys(l).forEach((i) => {
            !(function (t, e, i, n) {
              const s = e[i] || {};
              Object.keys(s).forEach((o) => {
                if (o.includes(n)) {
                  const n = s[o];
                  I(t, e, i, n.originalHandler, n.delegationSelector);
                }
              });
            })(t, l, i, e.slice(1));
          });
        const h = l[r] || {};
        Object.keys(h).forEach((i) => {
          const n = i.replace(E, "");
          if (!a || e.includes(n)) {
            const e = h[i];
            I(t, l, r, e.originalHandler, e.delegationSelector);
          }
        });
      },
      trigger(t, e, i) {
        if ("string" != typeof e || !t) return null;
        const n = f(),
          s = P(e),
          o = e !== s,
          r = k.has(s);
        let a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
        return (
          o &&
            n &&
            ((a = n.Event(e, i)),
            n(t).trigger(a),
            (l = !a.isPropagationStopped()),
            (c = !a.isImmediatePropagationStopped()),
            (h = a.isDefaultPrevented())),
          r
            ? ((d = document.createEvent("HTMLEvents")), d.initEvent(s, l, !0))
            : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((t) => {
              Object.defineProperty(d, t, { get: () => i[t] });
            }),
          h && d.preventDefault(),
          c && t.dispatchEvent(d),
          d.defaultPrevented && void 0 !== a && a.preventDefault(),
          d
        );
      },
    },
    M = new Map(),
    H = {
      set(t, e, i) {
        M.has(t) || M.set(t, new Map());
        const n = M.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (t, e) => (M.has(t) && M.get(t).get(e)) || null,
      remove(t, e) {
        if (!M.has(t)) return;
        const i = M.get(t);
        i.delete(e), 0 === i.size && M.delete(t);
      },
    };
  class B {
    constructor(t) {
      (t = r(t)) &&
        ((this._element = t),
        H.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      H.remove(this._element, this.constructor.DATA_KEY),
        j.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    _queueCallback(t, e, i = !0) {
      b(t, e, i);
    }
    static getInstance(t) {
      return H.get(r(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  const R = (t, e = "hide") => {
    const i = `click.dismiss${t.EVENT_KEY}`,
      s = t.NAME;
    j.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
      if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), c(this)))
        return;
      const o = n(this) || this.closest(`.${s}`);
      t.getOrCreateInstance(o)[e]();
    });
  };
  class W extends B {
    static get NAME() {
      return "alert";
    }
    close() {
      if (j.trigger(this._element, "close.bs.alert").defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(),
        j.trigger(this._element, "closed.bs.alert"),
        this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = W.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  R(W, "close"), g(W);
  const $ = '[data-bs-toggle="button"]';
  class z extends B {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = z.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  function q(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function F(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  j.on(document, "click.bs.button.data-api", $, (t) => {
    t.preventDefault();
    const e = t.target.closest($);
    z.getOrCreateInstance(e).toggle();
  }),
    g(z);
  const U = {
      setDataAttribute(t, e, i) {
        t.setAttribute(`data-bs-${F(e)}`, i);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute(`data-bs-${F(e)}`);
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith("bs"))
            .forEach((i) => {
              let n = i.replace(/^bs/, "");
              (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
                (e[n] = q(t.dataset[i]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => q(t.getAttribute(`data-bs-${F(e)}`)),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + window.pageYOffset,
          left: e.left + window.pageXOffset,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    V = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode;
        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
          n.matches(e) && i.push(n), (n = n.parentNode);
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(", ");
        return this.find(e, t).filter((t) => !c(t) && l(t));
      },
    },
    K = "carousel",
    X = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    Y = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    Q = "next",
    G = "prev",
    Z = "left",
    J = "right",
    tt = { ArrowLeft: J, ArrowRight: Z },
    et = "slid.bs.carousel",
    it = "active",
    nt = ".active.carousel-item";
  class st extends B {
    constructor(t, e) {
      super(t),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(e)),
        (this._indicatorsElement = V.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return X;
    }
    static get NAME() {
      return K;
    }
    next() {
      this._slide(Q);
    }
    nextWhenVisible() {
      !document.hidden && l(this._element) && this.next();
    }
    prev() {
      this._slide(G);
    }
    pause(t) {
      t || (this._isPaused = !0),
        V.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (s(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(t) {
      this._activeElement = V.findOne(nt, this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding)
        return void j.one(this._element, et, () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const i = t > e ? Q : G;
      this._slide(i, this._items[t]);
    }
    _getConfig(t) {
      return (
        (t = {
          ...X,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        a(K, t, Y),
        t
      );
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? J : Z);
    }
    _addEventListeners() {
      this._config.keyboard &&
        j.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (j.on(this._element, "mouseenter.bs.carousel", (t) => this.pause(t)),
          j.on(this._element, "mouseleave.bs.carousel", (t) => this.cycle(t))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t = (t) =>
          this._pointerEvent &&
          ("pen" === t.pointerType || "touch" === t.pointerType),
        e = (e) => {
          t(e)
            ? (this.touchStartX = e.clientX)
            : this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
        },
        i = (t) => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        n = (e) => {
          t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (t) => this.cycle(t),
                500 + this._config.interval
              )));
        };
      V.find(".carousel-item img", this._element).forEach((t) => {
        j.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
      }),
        this._pointerEvent
          ? (j.on(this._element, "pointerdown.bs.carousel", (t) => e(t)),
            j.on(this._element, "pointerup.bs.carousel", (t) => n(t)),
            this._element.classList.add("pointer-event"))
          : (j.on(this._element, "touchstart.bs.carousel", (t) => e(t)),
            j.on(this._element, "touchmove.bs.carousel", (t) => i(t)),
            j.on(this._element, "touchend.bs.carousel", (t) => n(t)));
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = tt[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(t) {
      return (
        (this._items =
          t && t.parentNode ? V.find(".carousel-item", t.parentNode) : []),
        this._items.indexOf(t)
      );
    }
    _getItemByOrder(t, e) {
      const i = t === Q;
      return v(this._items, e, i, this._config.wrap);
    }
    _triggerSlideEvent(t, e) {
      const i = this._getItemIndex(t),
        n = this._getItemIndex(V.findOne(nt, this._element));
      return j.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: n,
        to: i,
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = V.findOne(".active", this._indicatorsElement);
        e.classList.remove(it), e.removeAttribute("aria-current");
        const i = V.find("[data-bs-target]", this._indicatorsElement);
        for (let e = 0; e < i.length; e++)
          if (
            Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(t)
          ) {
            i[e].classList.add(it), i[e].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const t = this._activeElement || V.findOne(nt, this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = e))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(t, e) {
      const i = this._directionToOrder(t),
        n = V.findOne(nt, this._element),
        s = this._getItemIndex(n),
        o = e || this._getItemByOrder(i, n),
        r = this._getItemIndex(o),
        a = Boolean(this._interval),
        l = i === Q,
        c = l ? "carousel-item-start" : "carousel-item-end",
        h = l ? "carousel-item-next" : "carousel-item-prev",
        d = this._orderToDirection(i);
      if (o && o.classList.contains(it)) return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(o, d).defaultPrevented) return;
      if (!n || !o) return;
      (this._isSliding = !0),
        a && this.pause(),
        this._setActiveIndicatorElement(o),
        (this._activeElement = o);
      const f = () => {
        j.trigger(this._element, et, {
          relatedTarget: o,
          direction: d,
          from: s,
          to: r,
        });
      };
      if (this._element.classList.contains("slide")) {
        o.classList.add(h), u(o), n.classList.add(c), o.classList.add(c);
        const t = () => {
          o.classList.remove(c, h),
            o.classList.add(it),
            n.classList.remove(it, h, c),
            (this._isSliding = !1),
            setTimeout(f, 0);
        };
        this._queueCallback(t, n, !0);
      } else n.classList.remove(it), o.classList.add(it), (this._isSliding = !1), f();
      a && this.cycle();
    }
    _directionToOrder(t) {
      return [J, Z].includes(t)
        ? m()
          ? t === Z
            ? G
            : Q
          : t === Z
          ? Q
          : G
        : t;
    }
    _orderToDirection(t) {
      return [Q, G].includes(t)
        ? m()
          ? t === G
            ? Z
            : J
          : t === G
          ? J
          : Z
        : t;
    }
    static carouselInterface(t, e) {
      const i = st.getOrCreateInstance(t, e);
      let { _config: n } = i;
      "object" == typeof e && (n = { ...n, ...e });
      const s = "string" == typeof e ? e : n.slide;
      if ("number" == typeof e) i.to(e);
      else if ("string" == typeof s) {
        if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
        i[s]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        st.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = n(this);
      if (!e || !e.classList.contains("carousel")) return;
      const i = { ...U.getDataAttributes(e), ...U.getDataAttributes(this) },
        s = this.getAttribute("data-bs-slide-to");
      s && (i.interval = !1),
        st.carouselInterface(e, i),
        s && st.getInstance(e).to(s),
        t.preventDefault();
    }
  }
  j.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    st.dataApiClickHandler
  ),
    j.on(window, "load.bs.carousel.data-api", () => {
      const t = V.find('[data-bs-ride="carousel"]');
      for (let e = 0, i = t.length; e < i; e++)
        st.carouselInterface(t[e], st.getInstance(t[e]));
    }),
    g(st);
  const ot = "collapse",
    rt = { toggle: !0, parent: null },
    at = { toggle: "boolean", parent: "(null|element)" },
    lt = "show",
    ct = "collapse",
    ht = "collapsing",
    dt = "collapsed",
    ut = ":scope .collapse .collapse",
    ft = '[data-bs-toggle="collapse"]';
  class pt extends B {
    constructor(t, e) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(e)),
        (this._triggerArray = []);
      const n = V.find(ft);
      for (let t = 0, e = n.length; t < e; t++) {
        const e = n[t],
          s = i(e),
          o = V.find(s).filter((t) => t === this._element);
        null !== s &&
          o.length &&
          ((this._selector = s), this._triggerArray.push(e));
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return rt;
    }
    static get NAME() {
      return ot;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t,
        e = [];
      if (this._config.parent) {
        const t = V.find(ut, this._config.parent);
        e = V.find(
          ".collapse.show, .collapse.collapsing",
          this._config.parent
        ).filter((e) => !t.includes(e));
      }
      const i = V.findOne(this._selector);
      if (e.length) {
        const n = e.find((t) => i !== t);
        if (((t = n ? pt.getInstance(n) : null), t && t._isTransitioning))
          return;
      }
      if (j.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      e.forEach((e) => {
        i !== e && pt.getOrCreateInstance(e, { toggle: !1 }).hide(),
          t || H.set(e, "bs.collapse", null);
      });
      const n = this._getDimension();
      this._element.classList.remove(ct),
        this._element.classList.add(ht),
        (this._element.style[n] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(ht),
            this._element.classList.add(ct, lt),
            (this._element.style[n] = ""),
            j.trigger(this._element, "shown.bs.collapse");
        },
        this._element,
        !0
      ),
        (this._element.style[n] = `${this._element[s]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (j.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        u(this._element),
        this._element.classList.add(ht),
        this._element.classList.remove(ct, lt);
      const e = this._triggerArray.length;
      for (let t = 0; t < e; t++) {
        const e = this._triggerArray[t],
          i = n(e);
        i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(ht),
              this._element.classList.add(ct),
              j.trigger(this._element, "hidden.bs.collapse");
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(lt);
    }
    _getConfig(t) {
      return (
        ((t = { ...rt, ...U.getDataAttributes(this._element), ...t }).toggle =
          Boolean(t.toggle)),
        (t.parent = r(t.parent)),
        a(ot, t, at),
        t
      );
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = V.find(ut, this._config.parent);
      V.find(ft, this._config.parent)
        .filter((e) => !t.includes(e))
        .forEach((t) => {
          const e = n(t);
          e && this._addAriaAndCollapsedClass([t], this._isShown(e));
        });
    }
    _addAriaAndCollapsedClass(t, e) {
      t.length &&
        t.forEach((t) => {
          e ? t.classList.remove(dt) : t.classList.add(dt),
            t.setAttribute("aria-expanded", e);
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = {};
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
        const i = pt.getOrCreateInstance(this, e);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t]();
        }
      });
    }
  }
  j.on(document, "click.bs.collapse.data-api", ft, function (t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    const e = i(this);
    V.find(e).forEach((t) => {
      pt.getOrCreateInstance(t, { toggle: !1 }).toggle();
    });
  }),
    g(pt);
  var mt = "top",
    gt = "bottom",
    _t = "right",
    bt = "left",
    vt = "auto",
    yt = [mt, gt, _t, bt],
    wt = "start",
    Et = "end",
    At = "clippingParents",
    Tt = "viewport",
    Ot = "popper",
    Ct = "reference",
    kt = yt.reduce(function (t, e) {
      return t.concat([e + "-" + wt, e + "-" + Et]);
    }, []),
    Lt = [].concat(yt, [vt]).reduce(function (t, e) {
      return t.concat([e, e + "-" + wt, e + "-" + Et]);
    }, []),
    xt = "beforeRead",
    Dt = "read",
    St = "afterRead",
    Nt = "beforeMain",
    It = "main",
    Pt = "afterMain",
    jt = "beforeWrite",
    Mt = "write",
    Ht = "afterWrite",
    Bt = [xt, Dt, St, Nt, It, Pt, jt, Mt, Ht];
  function Rt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function Wt(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function $t(t) {
    return t instanceof Wt(t).Element || t instanceof Element;
  }
  function zt(t) {
    return t instanceof Wt(t).HTMLElement || t instanceof HTMLElement;
  }
  function qt(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof Wt(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const Ft = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        zt(s) &&
          Rt(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            zt(n) &&
              Rt(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function Ut(t) {
    return t.split("-")[0];
  }
  function Vt(t, e) {
    var i = t.getBoundingClientRect();
    return {
      width: i.width / 1,
      height: i.height / 1,
      top: i.top / 1,
      right: i.right / 1,
      bottom: i.bottom / 1,
      left: i.left / 1,
      x: i.left / 1,
      y: i.top / 1,
    };
  }
  function Kt(t) {
    var e = Vt(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function Xt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && qt(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function Yt(t) {
    return Wt(t).getComputedStyle(t);
  }
  function Qt(t) {
    return ["table", "td", "th"].indexOf(Rt(t)) >= 0;
  }
  function Gt(t) {
    return (
      ($t(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement;
  }
  function Zt(t) {
    return "html" === Rt(t)
      ? t
      : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || Gt(t);
  }
  function Jt(t) {
    return zt(t) && "fixed" !== Yt(t).position ? t.offsetParent : null;
  }
  function te(t) {
    for (var e = Wt(t), i = Jt(t); i && Qt(i) && "static" === Yt(i).position; )
      i = Jt(i);
    return i &&
      ("html" === Rt(i) || ("body" === Rt(i) && "static" === Yt(i).position))
      ? e
      : i ||
          (function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              zt(t) &&
              "fixed" === Yt(t).position
            )
              return null;
            for (
              var i = Zt(t);
              zt(i) && ["html", "body"].indexOf(Rt(i)) < 0;

            ) {
              var n = Yt(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function ee(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  var ie = Math.max,
    ne = Math.min,
    se = Math.round;
  function oe(t, e, i) {
    return ie(t, ne(e, i));
  }
  function re(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function ae(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  const le = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = Ut(i.placement),
        l = ee(a),
        c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var h = (function (t, e) {
            return re(
              "number" !=
                typeof (t =
                  "function" == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : ae(t, yt)
            );
          })(s.padding, i),
          d = Kt(o),
          u = "y" === l ? mt : bt,
          f = "y" === l ? gt : _t,
          p =
            i.rects.reference[c] +
            i.rects.reference[l] -
            r[l] -
            i.rects.popper[c],
          m = r[l] - i.rects.reference[l],
          g = te(o),
          _ = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
          b = p / 2 - m / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          E = oe(v, w, y),
          A = l;
        i.modifiersData[n] = (((e = {})[A] = E), (e.centerOffset = E - w), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
        ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
        Xt(e.elements.popper, n) &&
        (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function ce(t) {
    return t.split("-")[1];
  }
  var he = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function de(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d =
        !0 === h
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: se(se(e * n) / n) || 0, y: se(se(i * n) / n) || 0 };
            })(r)
          : "function" == typeof h
          ? h(r)
          : r,
      u = d.x,
      f = void 0 === u ? 0 : u,
      p = d.y,
      m = void 0 === p ? 0 : p,
      g = r.hasOwnProperty("x"),
      _ = r.hasOwnProperty("y"),
      b = bt,
      v = mt,
      y = window;
    if (c) {
      var w = te(i),
        E = "clientHeight",
        A = "clientWidth";
      w === Wt(i) &&
        "static" !== Yt((w = Gt(i))).position &&
        "absolute" === a &&
        ((E = "scrollHeight"), (A = "scrollWidth")),
        (w = w),
        (s !== mt && ((s !== bt && s !== _t) || o !== Et)) ||
          ((v = gt), (m -= w[E] - n.height), (m *= l ? 1 : -1)),
        (s !== bt && ((s !== mt && s !== gt) || o !== Et)) ||
          ((b = _t), (f -= w[A] - n.width), (f *= l ? 1 : -1));
    }
    var T,
      O = Object.assign({ position: a }, c && he);
    return l
      ? Object.assign(
          {},
          O,
          (((T = {})[v] = _ ? "0" : ""),
          (T[b] = g ? "0" : ""),
          (T.transform =
            (y.devicePixelRatio || 1) <= 1
              ? "translate(" + f + "px, " + m + "px)"
              : "translate3d(" + f + "px, " + m + "px, 0)"),
          T)
        )
      : Object.assign(
          {},
          O,
          (((e = {})[v] = _ ? m + "px" : ""),
          (e[b] = g ? f + "px" : ""),
          (e.transform = ""),
          e)
        );
  }
  const ue = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: Ut(e.placement),
          variation: ce(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          de(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            de(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }));
    },
    data: {},
  };
  var fe = { passive: !0 };
  const pe = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = Wt(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener("scroll", i.update, fe);
          }),
        a && l.addEventListener("resize", i.update, fe),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", i.update, fe);
            }),
            a && l.removeEventListener("resize", i.update, fe);
        }
      );
    },
    data: {},
  };
  var me = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function ge(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return me[t];
    });
  }
  var _e = { start: "end", end: "start" };
  function be(t) {
    return t.replace(/start|end/g, function (t) {
      return _e[t];
    });
  }
  function ve(t) {
    var e = Wt(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function ye(t) {
    return Vt(Gt(t)).left + ve(t).scrollLeft;
  }
  function we(t) {
    var e = Yt(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function Ee(t) {
    return ["html", "body", "#document"].indexOf(Rt(t)) >= 0
      ? t.ownerDocument.body
      : zt(t) && we(t)
      ? t
      : Ee(Zt(t));
  }
  function Ae(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Ee(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = Wt(n),
      r = s ? [o].concat(o.visualViewport || [], we(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Ae(Zt(r)));
  }
  function Te(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function Oe(t, e) {
    return e === Tt
      ? Te(
          (function (t) {
            var e = Wt(t),
              i = Gt(t),
              n = e.visualViewport,
              s = i.clientWidth,
              o = i.clientHeight,
              r = 0,
              a = 0;
            return (
              n &&
                ((s = n.width),
                (o = n.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((r = n.offsetLeft), (a = n.offsetTop))),
              { width: s, height: o, x: r + ye(t), y: a }
            );
          })(t)
        )
      : zt(e)
      ? (function (t) {
          var e = Vt(t);
          return (
            (e.top = e.top + t.clientTop),
            (e.left = e.left + t.clientLeft),
            (e.bottom = e.top + t.clientHeight),
            (e.right = e.left + t.clientWidth),
            (e.width = t.clientWidth),
            (e.height = t.clientHeight),
            (e.x = e.left),
            (e.y = e.top),
            e
          );
        })(e)
      : Te(
          (function (t) {
            var e,
              i = Gt(t),
              n = ve(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = ie(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = ie(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + ye(t),
              l = -n.scrollTop;
            return (
              "rtl" === Yt(s || i).direction &&
                (a += ie(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            );
          })(Gt(t))
        );
  }
  function Ce(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? Ut(s) : null,
      r = s ? ce(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case mt:
        e = { x: a, y: i.y - n.height };
        break;
      case gt:
        e = { x: a, y: i.y + i.height };
        break;
      case _t:
        e = { x: i.x + i.width, y: l };
        break;
      case bt:
        e = { x: i.x - n.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var c = o ? ee(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case wt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case Et:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function ke(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.boundary,
      r = void 0 === o ? At : o,
      a = i.rootBoundary,
      l = void 0 === a ? Tt : a,
      c = i.elementContext,
      h = void 0 === c ? Ot : c,
      d = i.altBoundary,
      u = void 0 !== d && d,
      f = i.padding,
      p = void 0 === f ? 0 : f,
      m = re("number" != typeof p ? p : ae(p, yt)),
      g = h === Ot ? Ct : Ot,
      _ = t.rects.popper,
      b = t.elements[u ? g : h],
      v = (function (t, e, i) {
        var n =
            "clippingParents" === e
              ? (function (t) {
                  var e = Ae(Zt(t)),
                    i =
                      ["absolute", "fixed"].indexOf(Yt(t).position) >= 0 &&
                      zt(t)
                        ? te(t)
                        : t;
                  return $t(i)
                    ? e.filter(function (t) {
                        return $t(t) && Xt(t, i) && "body" !== Rt(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          s = [].concat(n, [i]),
          o = s[0],
          r = s.reduce(function (e, i) {
            var n = Oe(t, i);
            return (
              (e.top = ie(n.top, e.top)),
              (e.right = ne(n.right, e.right)),
              (e.bottom = ne(n.bottom, e.bottom)),
              (e.left = ie(n.left, e.left)),
              e
            );
          }, Oe(t, o));
        return (
          (r.width = r.right - r.left),
          (r.height = r.bottom - r.top),
          (r.x = r.left),
          (r.y = r.top),
          r
        );
      })($t(b) ? b : b.contextElement || Gt(t.elements.popper), r, l),
      y = Vt(t.elements.reference),
      w = Ce({ reference: y, element: _, strategy: "absolute", placement: s }),
      E = Te(Object.assign({}, _, w)),
      A = h === Ot ? E : y,
      T = {
        top: v.top - A.top + m.top,
        bottom: A.bottom - v.bottom + m.bottom,
        left: v.left - A.left + m.left,
        right: A.right - v.right + m.right,
      },
      O = t.modifiersData.offset;
    if (h === Ot && O) {
      var C = O[s];
      Object.keys(T).forEach(function (t) {
        var e = [_t, gt].indexOf(t) >= 0 ? 1 : -1,
          i = [mt, gt].indexOf(t) >= 0 ? "y" : "x";
        T[t] += C[i] * e;
      });
    }
    return T;
  }
  function Le(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? Lt : l,
      h = ce(n),
      d = h
        ? a
          ? kt
          : kt.filter(function (t) {
              return ce(t) === h;
            })
        : yt,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return (
        (e[i] = ke(t, {
          placement: i,
          boundary: s,
          rootBoundary: o,
          padding: r,
        })[Ut(i)]),
        e
      );
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  const xe = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (
          var s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 === r || r,
            l = i.fallbackPlacements,
            c = i.padding,
            h = i.boundary,
            d = i.rootBoundary,
            u = i.altBoundary,
            f = i.flipVariations,
            p = void 0 === f || f,
            m = i.allowedAutoPlacements,
            g = e.options.placement,
            _ = Ut(g),
            b =
              l ||
              (_ !== g && p
                ? (function (t) {
                    if (Ut(t) === vt) return [];
                    var e = ge(t);
                    return [be(t), e, be(e)];
                  })(g)
                : [ge(g)]),
            v = [g].concat(b).reduce(function (t, i) {
              return t.concat(
                Ut(i) === vt
                  ? Le(e, {
                      placement: i,
                      boundary: h,
                      rootBoundary: d,
                      padding: c,
                      flipVariations: p,
                      allowedAutoPlacements: m,
                    })
                  : i
              );
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            E = new Map(),
            A = !0,
            T = v[0],
            O = 0;
          O < v.length;
          O++
        ) {
          var C = v[O],
            k = Ut(C),
            L = ce(C) === wt,
            x = [mt, gt].indexOf(k) >= 0,
            D = x ? "width" : "height",
            S = ke(e, {
              placement: C,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c,
            }),
            N = x ? (L ? _t : bt) : L ? gt : mt;
          y[D] > w[D] && (N = ge(N));
          var I = ge(N),
            P = [];
          if (
            (o && P.push(S[k] <= 0),
            a && P.push(S[N] <= 0, S[I] <= 0),
            P.every(function (t) {
              return t;
            }))
          ) {
            (T = C), (A = !1);
            break;
          }
          E.set(C, P);
        }
        if (A)
          for (
            var j = function (t) {
                var e = v.find(function (e) {
                  var i = E.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (T = e), "break";
              },
              M = p ? 3 : 1;
            M > 0 && "break" !== j(M);
            M--
          );
        e.placement !== T &&
          ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function De(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function Se(t) {
    return [mt, _t, gt, bt].some(function (e) {
      return t[e] >= 0;
    });
  }
  const Ne = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = ke(e, { elementContext: "reference" }),
          a = ke(e, { altBoundary: !0 }),
          l = De(r, n),
          c = De(a, s, o),
          h = Se(l),
          d = Se(c);
        (e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: d,
        }),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": h,
            "data-popper-escaped": d,
          }));
      },
    },
    Ie = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = Lt.reduce(function (t, i) {
            return (
              (t[i] = (function (t, e, i) {
                var n = Ut(t),
                  s = [bt, mt].indexOf(n) >= 0 ? -1 : 1,
                  o =
                    "function" == typeof i
                      ? i(Object.assign({}, e, { placement: t }))
                      : i,
                  r = o[0],
                  a = o[1];
                return (
                  (r = r || 0),
                  (a = (a || 0) * s),
                  [bt, _t].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
                );
              })(i, e.rects, o)),
              t
            );
          }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
        null != e.modifiersData.popperOffsets &&
          ((e.modifiersData.popperOffsets.x += l),
          (e.modifiersData.popperOffsets.y += c)),
          (e.modifiersData[n] = r);
      },
    },
    Pe = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = Ce({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement,
        });
      },
      data: {},
    },
    je = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = ke(e, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h,
          }),
          _ = Ut(e.placement),
          b = ce(e.placement),
          v = !b,
          y = ee(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          A = e.rects.reference,
          T = e.rects.popper,
          O =
            "function" == typeof m
              ? m(Object.assign({}, e.rects, { placement: e.placement }))
              : m,
          C = { x: 0, y: 0 };
        if (E) {
          if (o || a) {
            var k = "y" === y ? mt : bt,
              L = "y" === y ? gt : _t,
              x = "y" === y ? "height" : "width",
              D = E[y],
              S = E[y] + g[k],
              N = E[y] - g[L],
              I = f ? -T[x] / 2 : 0,
              P = b === wt ? A[x] : T[x],
              j = b === wt ? -T[x] : -A[x],
              M = e.elements.arrow,
              H = f && M ? Kt(M) : { width: 0, height: 0 },
              B = e.modifiersData["arrow#persistent"]
                ? e.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              R = B[k],
              W = B[L],
              $ = oe(0, A[x], H[x]),
              z = v ? A[x] / 2 - I - $ - R - O : P - $ - R - O,
              q = v ? -A[x] / 2 + I + $ + W + O : j + $ + W + O,
              F = e.elements.arrow && te(e.elements.arrow),
              U = F ? ("y" === y ? F.clientTop || 0 : F.clientLeft || 0) : 0,
              V = e.modifiersData.offset
                ? e.modifiersData.offset[e.placement][y]
                : 0,
              K = E[y] + z - V - U,
              X = E[y] + q - V;
            if (o) {
              var Y = oe(f ? ne(S, K) : S, D, f ? ie(N, X) : N);
              (E[y] = Y), (C[y] = Y - D);
            }
            if (a) {
              var Q = "x" === y ? mt : bt,
                G = "x" === y ? gt : _t,
                Z = E[w],
                J = Z + g[Q],
                tt = Z - g[G],
                et = oe(f ? ne(J, K) : J, Z, f ? ie(tt, X) : tt);
              (E[w] = et), (C[w] = et - Z);
            }
          }
          e.modifiersData[n] = C;
        }
      },
      requiresIfExists: ["offset"],
    };
  function Me(t, e, i) {
    void 0 === i && (i = !1);
    var n = zt(e);
    zt(e) &&
      (function (t) {
        var e = t.getBoundingClientRect();
        e.width, t.offsetWidth, e.height, t.offsetHeight;
      })(e);
    var s,
      o,
      r = Gt(e),
      a = Vt(t),
      l = { scrollLeft: 0, scrollTop: 0 },
      c = { x: 0, y: 0 };
    return (
      (n || (!n && !i)) &&
        (("body" !== Rt(e) || we(r)) &&
          (l =
            (s = e) !== Wt(s) && zt(s)
              ? { scrollLeft: (o = s).scrollLeft, scrollTop: o.scrollTop }
              : ve(s)),
        zt(e)
          ? (((c = Vt(e)).x += e.clientLeft), (c.y += e.clientTop))
          : r && (c.x = ye(r))),
      {
        x: a.left + l.scrollLeft - c.x,
        y: a.top + l.scrollTop - c.y,
        width: a.width,
        height: a.height,
      }
    );
  }
  function He(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!i.has(t)) {
              var n = e.get(t);
              n && s(n);
            }
          }),
        n.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) || s(t);
      }),
      n
    );
  }
  var Be = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Re() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function We(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? Be : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Be, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(),
              (a.options = Object.assign({}, o, a.options, s)),
              (a.scrollParents = {
                reference: $t(t)
                  ? Ae(t)
                  : t.contextElement
                  ? Ae(t.contextElement)
                  : [],
                popper: Ae(e),
              });
            var r,
              c,
              u = (function (t) {
                var e = He(t);
                return Bt.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((r = [].concat(n, a.options.modifiers)),
                (c = r.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (a.orderedModifiers = u.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n });
                  l.push(o || function () {});
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (Re(e, i)) {
                (a.rects = {
                  reference: Me(e, te(i), "fixed" === a.options.strategy),
                  popper: Kt(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!Re(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var $e = We(),
    ze = We({ defaultModifiers: [pe, Pe, ue, Ft] }),
    qe = We({ defaultModifiers: [pe, Pe, ue, Ft, Ie, xe, je, le, Ne] });
  const Fe = Object.freeze({
      __proto__: null,
      popperGenerator: We,
      detectOverflow: ke,
      createPopperBase: $e,
      createPopper: qe,
      createPopperLite: ze,
      top: mt,
      bottom: gt,
      right: _t,
      left: bt,
      auto: vt,
      basePlacements: yt,
      start: wt,
      end: Et,
      clippingParents: At,
      viewport: Tt,
      popper: Ot,
      reference: Ct,
      variationPlacements: kt,
      placements: Lt,
      beforeRead: xt,
      read: Dt,
      afterRead: St,
      beforeMain: Nt,
      main: It,
      afterMain: Pt,
      beforeWrite: jt,
      write: Mt,
      afterWrite: Ht,
      modifierPhases: Bt,
      applyStyles: Ft,
      arrow: le,
      computeStyles: ue,
      eventListeners: pe,
      flip: xe,
      hide: Ne,
      offset: Ie,
      popperOffsets: Pe,
      preventOverflow: je,
    }),
    Ue = "dropdown",
    Ve = "Escape",
    Ke = "Space",
    Xe = "ArrowUp",
    Ye = "ArrowDown",
    Qe = new RegExp("ArrowUp|ArrowDown|Escape"),
    Ge = "click.bs.dropdown.data-api",
    Ze = "keydown.bs.dropdown.data-api",
    Je = "show",
    ti = '[data-bs-toggle="dropdown"]',
    ei = ".dropdown-menu",
    ii = m() ? "top-end" : "top-start",
    ni = m() ? "top-start" : "top-end",
    si = m() ? "bottom-end" : "bottom-start",
    oi = m() ? "bottom-start" : "bottom-end",
    ri = m() ? "left-start" : "right-start",
    ai = m() ? "right-start" : "left-start",
    li = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    ci = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class hi extends B {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return li;
    }
    static get DefaultType() {
      return ci;
    }
    static get NAME() {
      return Ue;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }

    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      j.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => j.off(t, "mouseover", d)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove(Je),
        this._element.classList.remove(Je),
        this._element.setAttribute("aria-expanded", "false"),
        U.removeDataAttribute(this._menu, "popper"),
        j.trigger(this._element, "hidden.bs.dropdown", t));
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...U.getDataAttributes(this._element),
          ...t,
        }),
        a(Ue, t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !o(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          `${Ue.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper(t) {
      if (void 0 === Fe)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let e = this._element;
      "parent" === this._config.reference
        ? (e = t)
        : o(this._config.reference)
        ? (e = r(this._config.reference))
        : "object" == typeof this._config.reference &&
          (e = this._config.reference);
      const i = this._getPopperConfig(),
        n = i.modifiers.find(
          (t) => "applyStyles" === t.name && !1 === t.enabled
        );
      (this._popper = qe(e, this._menu, i)),
        n && U.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(t = this._element) {
      return t.classList.contains(Je);
    }
    _getMenuElement() {
      return V.next(this._element, ei)[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return ri;
      if (t.classList.contains("dropstart")) return ai;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? ni : ii) : e ? oi : si;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = V.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      ).filter(l);
      i.length && v(i, e, t === Ye, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = hi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)))
        return;
      const e = V.find(ti);
      for (let i = 0, n = e.length; i < n; i++) {
        const n = hi.getInstance(e[i]);
        if (!n || !1 === n._config.autoClose) continue;
        if (!n._isShown()) continue;
        const s = { relatedTarget: n._element };
        if (t) {
          const e = t.composedPath(),
            i = e.includes(n._menu);
          if (
            e.includes(n._element) ||
            ("inside" === n._config.autoClose && !i) ||
            ("outside" === n._config.autoClose && i)
          )
            continue;
          if (
            n._menu.contains(t.target) &&
            (("keyup" === t.type && "Tab" === t.key) ||
              /input|select|option|textarea|form/i.test(t.target.tagName))
          )
            continue;
          "click" === t.type && (s.clickEvent = t);
        }
        n._completeHide(s);
      }
    }
    static getParentFromElement(t) {
      return n(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? t.key === Ke ||
            (t.key !== Ve &&
              ((t.key !== Ye && t.key !== Xe) || t.target.closest(ei)))
          : !Qe.test(t.key)
      )
        return;
      const e = this.classList.contains(Je);
      if (!e && t.key === Ve) return;
      if ((t.preventDefault(), t.stopPropagation(), c(this))) return;
      const i = this.matches(ti) ? this : V.prev(this, ti)[0],
        n = hi.getOrCreateInstance(i);
      if (t.key !== Ve)
        return t.key === Xe || t.key === Ye
          ? (e || n.show(), void n._selectMenuItem(t))
          : void ((e && t.key !== Ke) || hi.clearMenus());
      n.hide();
    }
  }
  j.on(document, Ze, ti, hi.dataApiKeydownHandler),
    j.on(document, Ze, ei, hi.dataApiKeydownHandler),
    j.on(document, Ge, hi.clearMenus),
    j.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus),
    j.on(document, Ge, ti, function (t) {
      t.preventDefault(), hi.getOrCreateInstance(this).toggle();
    }),
    g(hi);
  const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    ui = ".sticky-top";
  class fi {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
        this._setElementAttributes(di, "paddingRight", (e) => e + t),
        this._setElementAttributes(ui, "marginRight", (e) => e - t);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t)[e];
        t.style[e] = `${i(Number.parseFloat(s))}px`;
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(di, "paddingRight"),
        this._resetElementAttributes(ui, "marginRight");
    }
    _saveInitialAttribute(t, e) {
      const i = t.style[e];
      i && U.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = U.getDataAttribute(t, e);
        void 0 === i
          ? t.style.removeProperty(e)
          : (U.removeDataAttribute(t, e), (t.style[e] = i));
      });
    }
    _applyManipulationCallback(t, e) {
      o(t) ? e(t) : V.find(t, this._element).forEach(e);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const pi = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    mi = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    },
    gi = "show",
    _i = "mousedown.bs.backdrop";
  class bi {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(t) {
      this._config.isVisible
        ? (this._append(),
          this._config.isAnimated && u(this._getElement()),
          this._getElement().classList.add(gi),
          this._emulateAnimation(() => {
            _(t);
          }))
        : _(t);
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(gi),
          this._emulateAnimation(() => {
            this.dispose(), _(t);
          }))
        : _(t);
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _getConfig(t) {
      return (
        ((t = { ...pi, ...("object" == typeof t ? t : {}) }).rootElement = r(
          t.rootElement
        )),
        a("backdrop", t, mi),
        t
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.append(this._getElement()),
        j.on(this._getElement(), _i, () => {
          _(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (j.off(this._element, _i),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(t) {
      b(t, this._getElement(), this._config.isAnimated);
    }
  }
  const vi = { trapElement: null, autofocus: !0 },
    yi = { trapElement: "element", autofocus: "boolean" },
    wi = ".bs.focustrap",
    Ei = "backward";
  class Ai {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    activate() {
      const { trapElement: t, autofocus: e } = this._config;
      this._isActive ||
        (e && t.focus(),
        j.off(document, wi),
        j.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),
        j.on(document, "keydown.tab.bs.focustrap", (t) =>
          this._handleKeydown(t)
        ),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), j.off(document, wi));
    }
    _handleFocusin(t) {
      const { target: e } = t,
        { trapElement: i } = this._config;
      if (e === document || e === i || i.contains(e)) return;
      const n = V.focusableChildren(i);
      0 === n.length
        ? i.focus()
        : this._lastTabNavDirection === Ei
        ? n[n.length - 1].focus()
        : n[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? Ei : "forward");
    }
    _getConfig(t) {
      return (
        (t = { ...vi, ...("object" == typeof t ? t : {}) }),
        a("focustrap", t, yi),
        t
      );
    }
  }
  const Ti = "modal",
    Oi = "Escape",
    Ci = { backdrop: !0, keyboard: !0, focus: !0 },
    ki = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    },
    Li = "hidden.bs.modal",
    xi = "show.bs.modal",
    Di = "resize.bs.modal",
    Si = "click.dismiss.bs.modal",
    Ni = "keydown.dismiss.bs.modal",
    Ii = "mousedown.dismiss.bs.modal",
    Pi = "modal-open",
    ji = "show",
    Mi = "modal-static";
  class Hi extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._dialog = V.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new fi());
    }
    static get Default() {
      return Ci;
    }
    static get NAME() {
      return Ti;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        j.trigger(this._element, xi, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(Pi),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        j.on(this._dialog, Ii, () => {
          j.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
            t.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      if (j.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;
      const t = this._isAnimated();
      t && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove(ji),
        j.off(this._element, Si),
        j.off(this._dialog, Ii),
        this._queueCallback(() => this._hideModal(), this._element, t);
    }
    dispose() {
      [window, this._dialog].forEach((t) => j.off(t, ".bs.modal")),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new bi({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new Ai({ trapElement: this._element });
    }
    _getConfig(t) {
      return (
        (t = {
          ...Ci,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        a(Ti, t, ki),
        t
      );
    }
    _showElement(t) {
      const e = this._isAnimated(),
        i = V.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        i && (i.scrollTop = 0),
        e && u(this._element),
        this._element.classList.add(ji),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              j.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
          },
          this._dialog,
          e
        );
    }
    _setEscapeEvent() {
      this._isShown
        ? j.on(this._element, Ni, (t) => {
            this._config.keyboard && t.key === Oi
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                t.key !== Oi ||
                this._triggerBackdropTransition();
          })
        : j.off(this._element, Ni);
    }
    _setResizeEvent() {
      this._isShown
        ? j.on(window, Di, () => this._adjustDialog())
        : j.off(window, Di);
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(Pi),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            j.trigger(this._element, Li);
        });
    }
    _showBackdrop(t) {
      j.on(this._element, Si, (t) => {
        this._ignoreBackdropClick
          ? (this._ignoreBackdropClick = !1)
          : t.target === t.currentTarget &&
            (!0 === this._config.backdrop
              ? this.hide()
              : "static" === this._config.backdrop &&
                this._triggerBackdropTransition());
      }),
        this._backdrop.show(t);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (j.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const { classList: t, scrollHeight: e, style: i } = this._element,
        n = e > document.documentElement.clientHeight;
      (!n && "hidden" === i.overflowY) ||
        t.contains(Mi) ||
        (n || (i.overflowY = "hidden"),
        t.add(Mi),
        this._queueCallback(() => {
          t.remove(Mi),
            n ||
              this._queueCallback(() => {
                i.overflowY = "";
              }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      ((!i && t && !m()) || (i && !t && m())) &&
        (this._element.style.paddingLeft = `${e}px`),
        ((i && !t && !m()) || (!i && t && m())) &&
          (this._element.style.paddingRight = `${e}px`);
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = Hi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  j.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = n(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        j.one(e, xi, (t) => {
          t.defaultPrevented ||
            j.one(e, Li, () => {
              l(this) && this.focus();
            });
        });
      const i = V.findOne(".modal.show");
      i && Hi.getInstance(i).hide(), Hi.getOrCreateInstance(e).toggle(this);
    }
  ),
    R(Hi),
    g(Hi);
  const Bi = "offcanvas",
    Ri = { backdrop: !0, keyboard: !0, scroll: !1 },
    Wi = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
    $i = "show",
    zi = ".offcanvas.show",
    qi = "hidden.bs.offcanvas";
  class Fi extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get NAME() {
      return Bi;
    }
    static get Default() {
      return Ri;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        j.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll || new fi().hide(),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add($i),
        this._queueCallback(
          () => {
            this._config.scroll || this._focustrap.activate(),
              j.trigger(this._element, "shown.bs.offcanvas", {
                relatedTarget: t,
              });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        (j.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
          (this._focustrap.deactivate(),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.remove($i),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._element.style.visibility = "hidden"),
                this._config.scroll || new fi().reset(),
                j.trigger(this._element, qi);
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...Ri,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        a(Bi, t, Wi),
        t
      );
    }
    _initializeBackDrop() {
      return new bi({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _initializeFocusTrap() {
      return new Ai({ trapElement: this._element });
    }
    _addEventListeners() {
      j.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
        this._config.keyboard && "Escape" === t.key && this.hide();
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Fi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  j.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = n(this);
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this)))
        return;
      j.one(e, qi, () => {
        l(this) && this.focus();
      });
      const i = V.findOne(zi);
      i && i !== e && Fi.getInstance(i).hide(),
        Fi.getOrCreateInstance(e).toggle(this);
    }
  ),
    j.on(window, "load.bs.offcanvas.data-api", () =>
      V.find(zi).forEach((t) => Fi.getOrCreateInstance(t).show())
    ),
    R(Fi),
    g(Fi);
  const Ui = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Ki =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Xi = (t, e) => {
      const i = t.nodeName.toLowerCase();
      if (e.includes(i))
        return (
          !Ui.has(i) || Boolean(Vi.test(t.nodeValue) || Ki.test(t.nodeValue))
        );
      const n = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0;
      return !1;
    };
  function Yi(t, e, i) {
    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);
    const n = new window.DOMParser().parseFromString(t, "text/html"),
      s = [].concat(...n.body.querySelectorAll("*"));
    for (let t = 0, i = s.length; t < i; t++) {
      const i = s[t],
        n = i.nodeName.toLowerCase();
      if (!Object.keys(e).includes(n)) {
        i.remove();
        continue;
      }
      const o = [].concat(...i.attributes),
        r = [].concat(e["*"] || [], e[n] || []);
      o.forEach((t) => {
        Xi(t, r) || i.removeAttribute(t.nodeName);
      });
    }
    return n.body.innerHTML;
  }
  const Qi = "tooltip",
    Gi = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Zi = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    Ji = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: m() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: m() ? "right" : "left",
    },
    tn = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    en = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    nn = "fade",
    sn = "show",
    on = "show",
    rn = "out",
    an = ".tooltip-inner",
    ln = ".modal",
    cn = "hide.bs.modal",
    hn = "hover",
    dn = "focus";
  class un extends B {
    constructor(t, e) {
      if (void 0 === Fe)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return tn;
    }
    static get NAME() {
      return Qi;
    }
    static get Event() {
      return en;
    }
    static get DefaultType() {
      return Zi;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains(sn))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        j.off(this._element.closest(ln), cn, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = j.trigger(this._element, this.constructor.Event.SHOW),
        e = h(this._element),
        i =
          null === e
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : e.contains(this._element);
      if (t.defaultPrevented || !i) return;
      "tooltip" === this.constructor.NAME &&
        this.tip &&
        this.getTitle() !== this.tip.querySelector(an).innerHTML &&
        (this._disposePopper(), this.tip.remove(), (this.tip = null));
      const n = this.getTipElement(),
        s = ((t) => {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));
          return t;
        })(this.constructor.NAME);
      n.setAttribute("id", s),
        this._element.setAttribute("aria-describedby", s),
        this._config.animation && n.classList.add(nn);
      const o =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, n, this._element)
            : this._config.placement,
        r = this._getAttachment(o);
      this._addAttachmentClass(r);
      const { container: a } = this._config;
      H.set(n, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (a.append(n),
          j.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = qe(this._element, n, this._getPopperConfig(r))),
        n.classList.add(sn);
      const l = this._resolvePossibleFunction(this._config.customClass);
      l && n.classList.add(...l.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            j.on(t, "mouseover", d);
          });
      const c = this.tip.classList.contains(nn);
      this._queueCallback(
        () => {
          const t = this._hoverState;
          (this._hoverState = null),
            j.trigger(this._element, this.constructor.Event.SHOWN),
            t === rn && this._leave(null, this);
        },
        this.tip,
        c
      );
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (
        j.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      t.classList.remove(sn),
        "ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => j.off(t, "mouseover", d)),
        (this._activeTrigger.click = !1),
        (this._activeTrigger.focus = !1),
        (this._activeTrigger.hover = !1);
      const e = this.tip.classList.contains(nn);
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            (this._hoverState !== on && t.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            j.trigger(this._element, this.constructor.Event.HIDDEN),
            this._disposePopper());
        },
        this.tip,
        e
      ),
        (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      t.innerHTML = this._config.template;
      const e = t.children[0];
      return (
        this.setContent(e), e.classList.remove(nn, sn), (this.tip = e), this.tip
      );
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), an);
    }
    _sanitizeAndSetContent(t, e, i) {
      const n = V.findOne(i, t);
      e || !n ? this.setElementContent(n, e) : n.remove();
    }
    setElementContent(t, e) {
      if (null !== t)
        return o(e)
          ? ((e = r(e)),
            void (this._config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.append(e))
              : (t.textContent = e.textContent)))
          : void (this._config.html
              ? (this._config.sanitize &&
                  (e = Yi(e, this._config.allowList, this._config.sanitizeFn)),
                (t.innerHTML = e))
              : (t.textContent = e));
    }
    getTitle() {
      const t =
        this._element.getAttribute("data-bs-original-title") ||
        this._config.title;
      return this._resolvePossibleFunction(t);
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      return (
        e ||
        this.constructor.getOrCreateInstance(
          t.delegateTarget,
          this._getDelegateConfig()
        )
      );
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (t) => this._handlePopperPlacementChange(t),
          },
        ],
        onFirstUpdate: (t) => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        },
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
      );
    }
    _getAttachment(t) {
      return Ji[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((t) => {
        if ("click" === t)
          j.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (t) => this.toggle(t)
          );
        else if ("manual" !== t) {
          const e =
              t === hn
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            i =
              t === hn
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          j.on(this._element, e, this._config.selector, (t) => this._enter(t)),
            j.on(this._element, i, this._config.selector, (t) =>
              this._leave(t)
            );
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        j.on(this._element.closest(ln), cn, this._hideModalHandler),
        this._config.selector
          ? (this._config = {
              ...this._config,
              trigger: "manual",
              selector: "",
            })
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (this._element.setAttribute("data-bs-original-title", t || ""),
        !t ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger["focusin" === t.type ? dn : hn] = !0),
        e.getTipElement().classList.contains(sn) || e._hoverState === on
          ? (e._hoverState = on)
          : (clearTimeout(e._timeout),
            (e._hoverState = on),
            e._config.delay && e._config.delay.show
              ? (e._timeout = setTimeout(() => {
                  e._hoverState === on && e.show();
                }, e._config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? dn : hn] =
            e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() ||
          (clearTimeout(e._timeout),
          (e._hoverState = rn),
          e._config.delay && e._config.delay.hide
            ? (e._timeout = setTimeout(() => {
                e._hoverState === rn && e.hide();
              }, e._config.delay.hide))
            : e.hide());
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = U.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          Gi.has(t) && delete e[t];
        }),
        ((t = {
          ...this.constructor.Default,
          ...e,
          ...("object" == typeof t && t ? t : {}),
        }).container = !1 === t.container ? document.body : r(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        a(Qi, t, this.constructor.DefaultType),
        t.sanitize && (t.template = Yi(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
        i = t.getAttribute("class").match(e);
      null !== i &&
        i.length > 0 &&
        i.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    _getBasicClassPrefix() {
      return "bs-tooltip";
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = un.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  g(un);
  const fn = {
      ...un.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    pn = { ...un.DefaultType, content: "(string|element|function)" },
    mn = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    };
  class gn extends un {
    static get Default() {
      return fn;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return mn;
    }
    static get DefaultType() {
      return pn;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
        this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
      return "bs-popover";
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = gn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  g(gn);
  const _n = "scrollspy",
    bn = { offset: 10, method: "auto", target: "" },
    vn = { offset: "number", method: "string", target: "(string|element)" },
    yn = "active",
    wn = ".nav-link, .list-group-item, .dropdown-item",
    En = "position";
  class An extends B {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        j.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return bn;
    }
    static get NAME() {
      return _n;
    }
    refresh() {
      const t =
          this._scrollElement === this._scrollElement.window ? "offset" : En,
        e = "auto" === this._config.method ? t : this._config.method,
        n = e === En ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        V.find(wn, this._config.target)
          .map((t) => {
            const s = i(t),
              o = s ? V.findOne(s) : null;
            if (o) {
              const t = o.getBoundingClientRect();
              if (t.width || t.height) return [U[e](o).top + n, s];
            }
            return null;
          })
          .filter((t) => t)
          .sort((t, e) => t[0] - e[0])
          .forEach((t) => {
            this._offsets.push(t[0]), this._targets.push(t[1]);
          });
    }
    dispose() {
      j.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
    }
    _getConfig(t) {
      return (
        ((t = {
          ...bn,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }).target = r(t.target) || document.documentElement),
        a(_n, t, vn),
        t
      );
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        i = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; )
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
      }
    }
    _activate(t) {
      (this._activeTarget = t), this._clear();
      const e = wn
          .split(",")
          .map((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
        i = V.findOne(e.join(","), this._config.target);
      i.classList.add(yn),
        i.classList.contains("dropdown-item")
          ? V.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(
              yn
            )
          : V.parents(i, ".nav, .list-group").forEach((t) => {
              V.prev(t, ".nav-link, .list-group-item").forEach((t) =>
                t.classList.add(yn)
              ),
                V.prev(t, ".nav-item").forEach((t) => {
                  V.children(t, ".nav-link").forEach((t) =>
                    t.classList.add(yn)
                  );
                });
            }),
        j.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t,
        });
    }
    _clear() {
      V.find(wn, this._config.target)
        .filter((t) => t.classList.contains(yn))
        .forEach((t) => t.classList.remove(yn));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = An.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  j.on(window, "load.bs.scrollspy.data-api", () => {
    V.find('[data-bs-spy="scroll"]').forEach((t) => new An(t));
  }),
    g(An);
  const Tn = "active",
    On = "fade",
    Cn = "show",
    kn = ".active",
    Ln = ":scope > li > .active";
  class xn extends B {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(Tn)
      )
        return;
      let t;
      const e = n(this._element),
        i = this._element.closest(".nav, .list-group");
      if (i) {
        const e = "UL" === i.nodeName || "OL" === i.nodeName ? Ln : kn;
        (t = V.find(e, i)), (t = t[t.length - 1]);
      }
      const s = t
        ? j.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
        : null;
      if (
        j.trigger(this._element, "show.bs.tab", { relatedTarget: t })
          .defaultPrevented ||
        (null !== s && s.defaultPrevented)
      )
        return;
      this._activate(this._element, i);
      const o = () => {
        j.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }),
          j.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
      };
      e ? this._activate(e, e.parentNode, o) : o();
    }
    _activate(t, e, i) {
      const n = (
          !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
            ? V.children(e, kn)
            : V.find(Ln, e)
        )[0],
        s = i && n && n.classList.contains(On),
        o = () => this._transitionComplete(t, n, i);
      n && s ? (n.classList.remove(Cn), this._queueCallback(o, t, !0)) : o();
    }
    _transitionComplete(t, e, i) {
      if (e) {
        e.classList.remove(Tn);
        const t = V.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove(Tn),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !1);
      }
      t.classList.add(Tn),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        u(t),
        t.classList.contains(On) && t.classList.add(Cn);
      let n = t.parentNode;
      if (
        (n && "LI" === n.nodeName && (n = n.parentNode),
        n && n.classList.contains("dropdown-menu"))
      ) {
        const e = t.closest(".dropdown");
        e && V.find(".dropdown-toggle", e).forEach((t) => t.classList.add(Tn)),
          t.setAttribute("aria-expanded", !0);
      }
      i && i();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = xn.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  j.on(
    document,
    "click.bs.tab.data-api",
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (t) {
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        c(this) || xn.getOrCreateInstance(this).show();
    }
  ),
    g(xn);
  const Dn = "toast",
    Sn = "hide",
    Nn = "show",
    In = "showing",
    Pn = { animation: "boolean", autohide: "boolean", delay: "number" },
    jn = { animation: !0, autohide: !0, delay: 5e3 };
  class Mn extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return Pn;
    }
    static get Default() {
      return jn;
    }
    static get NAME() {
      return Dn;
    }
    show() {
      j.trigger(this._element, "show.bs.toast").defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove(Sn),
        u(this._element),
        this._element.classList.add(Nn),
        this._element.classList.add(In),
        this._queueCallback(
          () => {
            this._element.classList.remove(In),
              j.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this._element.classList.contains(Nn) &&
        (j.trigger(this._element, "hide.bs.toast").defaultPrevented ||
          (this._element.classList.add(In),
          this._queueCallback(
            () => {
              this._element.classList.add(Sn),
                this._element.classList.remove(In),
                this._element.classList.remove(Nn),
                j.trigger(this._element, "hidden.bs.toast");
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains(Nn) &&
          this._element.classList.remove(Nn),
        super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...jn,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }),
        a(Dn, t, this.constructor.DefaultType),
        t
      );
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      j.on(this._element, "mouseover.bs.toast", (t) =>
        this._onInteraction(t, !0)
      ),
        j.on(this._element, "mouseout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        ),
        j.on(this._element, "focusin.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        j.on(this._element, "focusout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Mn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    R(Mn),
    g(Mn),
    {
      Alert: W,
      Button: z,
      Carousel: st,
      Collapse: pt,
      Dropdown: hi,
      Modal: Hi,
      Offcanvas: Fi,
      Popover: gn,
      ScrollSpy: An,
      Tab: xn,
      Toast: Mn,
      Tooltip: un,
    }
  );
});
//# sourceMappingURL=bootstrap.bundle.min.js.map

/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
!(function (n) {
  "function" == typeof define && define.amd
    ? define(["jquery"], n)
    : "object" == typeof module && module.exports
    ? (module.exports = function (e, t) {
        return (
          void 0 === t &&
            (t =
              "undefined" != typeof window
                ? require("jquery")
                : require("jquery")(e)),
          n(t),
          t
        );
      })
    : n(jQuery);
})(function (t) {
  var e,
    n,
    p,
    o,
    r,
    h,
    f,
    g,
    m,
    v,
    y,
    s,
    i,
    _,
    a,
    a =
      (t && t.fn && t.fn.select2 && t.fn.select2.amd && (u = t.fn.select2.amd),
      (u && u.requirejs) ||
        (u ? (n = u) : (u = {}),
        (g = {}),
        (m = {}),
        (v = {}),
        (y = {}),
        (s = Object.prototype.hasOwnProperty),
        (i = [].slice),
        (_ = /\.js$/),
        (h = function (e, t) {
          var n,
            s,
            i = c(e),
            o = i[0],
            t = t[1];
          return (
            (e = i[1]),
            o && (n = x((o = l(o, t)))),
            o
              ? (e =
                  n && n.normalize
                    ? n.normalize(
                        e,
                        ((s = t),
                        function (e) {
                          return l(e, s);
                        })
                      )
                    : l(e, t))
              : ((o = (i = c((e = l(e, t))))[0]), (e = i[1]), o && (n = x(o))),
            { f: o ? o + "!" + e : e, n: e, pr: o, p: n }
          );
        }),
        (f = {
          require: function (e) {
            return w(e);
          },
          exports: function (e) {
            var t = g[e];
            return void 0 !== t ? t : (g[e] = {});
          },
          module: function (e) {
            return {
              id: e,
              uri: "",
              exports: g[e],
              config:
                ((t = e),
                function () {
                  return (v && v.config && v.config[t]) || {};
                }),
            };
            var t;
          },
        }),
        (o = function (e, t, n, s) {
          var i,
            o,
            r,
            a,
            l,
            c = [],
            u = typeof n,
            d = A((s = s || e));
          if ("undefined" == u || "function" == u) {
            for (
              t = !t.length && n.length ? ["require", "exports", "module"] : t,
                a = 0;
              a < t.length;
              a += 1
            )
              if ("require" === (o = (r = h(t[a], d)).f)) c[a] = f.require(e);
              else if ("exports" === o) (c[a] = f.exports(e)), (l = !0);
              else if ("module" === o) i = c[a] = f.module(e);
              else if (b(g, o) || b(m, o) || b(y, o)) c[a] = x(o);
              else {
                if (!r.p) throw new Error(e + " missing " + o);
                r.p.load(
                  r.n,
                  w(s, !0),
                  (function (t) {
                    return function (e) {
                      g[t] = e;
                    };
                  })(o),
                  {}
                ),
                  (c[a] = g[o]);
              }
            (u = n ? n.apply(g[e], c) : void 0),
              e &&
                (i && i.exports !== p && i.exports !== g[e]
                  ? (g[e] = i.exports)
                  : (u === p && l) || (g[e] = u));
          } else e && (g[e] = n);
        }),
        (e =
          n =
          r =
            function (e, t, n, s, i) {
              if ("string" == typeof e) return f[e] ? f[e](t) : x(h(e, A(t)).f);
              if (!e.splice) {
                if (((v = e).deps && r(v.deps, v.callback), !t)) return;
                t.splice ? ((e = t), (t = n), (n = null)) : (e = p);
              }
              return (
                (t = t || function () {}),
                "function" == typeof n && ((n = s), (s = i)),
                s
                  ? o(p, e, t, n)
                  : setTimeout(function () {
                      o(p, e, t, n);
                    }, 4),
                r
              );
            }),
        (r.config = function (e) {
          return r(e);
        }),
        (e._defined = g),
        ((a = function (e, t, n) {
          if ("string" != typeof e)
            throw new Error(
              "See almond README: incorrect module build, no module name"
            );
          t.splice || ((n = t), (t = [])),
            b(g, e) || b(m, e) || (m[e] = [e, t, n]);
        }).amd = { jQuery: !0 }),
        (u.requirejs = e),
        (u.require = n),
        (u.define = a)),
      u.define("almond", function () {}),
      u.define("jquery", [], function () {
        var e = t || $;
        return (
          null == e &&
            console &&
            console.error &&
            console.error(
              "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
            ),
          e
        );
      }),
      u.define("select2/utils", ["jquery"], function (o) {
        var s = {};
        function c(e) {
          var t,
            n = e.prototype,
            s = [];
          for (t in n)
            "function" == typeof n[t] && "constructor" !== t && s.push(t);
          return s;
        }
        (s.Extend = function (e, t) {
          var n,
            s = {}.hasOwnProperty;
          function i() {
            this.constructor = e;
          }
          for (n in t) s.call(t, n) && (e[n] = t[n]);
          return (
            (i.prototype = t.prototype),
            (e.prototype = new i()),
            (e.__super__ = t.prototype),
            e
          );
        }),
          (s.Decorate = function (s, i) {
            var e = c(i),
              t = c(s);
            function o() {
              var e = Array.prototype.unshift,
                t = i.prototype.constructor.length,
                n = s.prototype.constructor;
              0 < t &&
                (e.call(arguments, s.prototype.constructor),
                (n = i.prototype.constructor)),
                n.apply(this, arguments);
            }
            (i.displayName = s.displayName),
              (o.prototype = new (function () {
                this.constructor = o;
              })());
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              o.prototype[r] = s.prototype[r];
            }
            for (var a = 0; a < e.length; a++) {
              var l = e[a];
              o.prototype[l] = (function (e) {
                var t = function () {};
                e in o.prototype && (t = o.prototype[e]);
                var n = i.prototype[e];
                return function () {
                  return (
                    Array.prototype.unshift.call(arguments, t),
                    n.apply(this, arguments)
                  );
                };
              })(l);
            }
            return o;
          });
        function e() {
          this.listeners = {};
        }
        (e.prototype.on = function (e, t) {
          (this.listeners = this.listeners || {}),
            e in this.listeners
              ? this.listeners[e].push(t)
              : (this.listeners[e] = [t]);
        }),
          (e.prototype.trigger = function (e) {
            var t = Array.prototype.slice,
              n = t.call(arguments, 1);
            (this.listeners = this.listeners || {}),
              null == n && (n = []),
              0 === n.length && n.push({}),
              (n[0]._type = e) in this.listeners &&
                this.invoke(this.listeners[e], t.call(arguments, 1)),
              "*" in this.listeners &&
                this.invoke(this.listeners["*"], arguments);
          }),
          (e.prototype.invoke = function (e, t) {
            for (var n = 0, s = e.length; n < s; n++) e[n].apply(this, t);
          }),
          (s.Observable = e),
          (s.generateChars = function (e) {
            for (var t = "", n = 0; n < e; n++)
              t += Math.floor(36 * Math.random()).toString(36);
            return t;
          }),
          (s.bind = function (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }),
          (s._convertData = function (e) {
            for (var t in e) {
              var n = t.split("-"),
                s = e;
              if (1 !== n.length) {
                for (var i = 0; i < n.length; i++) {
                  var o = n[i];
                  (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in s ||
                    (s[o] = {}),
                    i == n.length - 1 && (s[o] = e[t]),
                    (s = s[o]);
                }
                delete e[t];
              }
            }
            return e;
          }),
          (s.hasScroll = function (e, t) {
            var n = o(t),
              s = t.style.overflowX,
              i = t.style.overflowY;
            return (
              (s !== i || ("hidden" !== i && "visible" !== i)) &&
              ("scroll" === s ||
                "scroll" === i ||
                n.innerHeight() < t.scrollHeight ||
                n.innerWidth() < t.scrollWidth)
            );
          }),
          (s.escapeMarkup = function (e) {
            var t = {
              "\\": "&#92;",
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
              "/": "&#47;",
            };
            return "string" != typeof e
              ? e
              : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                  return t[e];
                });
          }),
          (s.__cache = {});
        var n = 0;
        return (
          (s.GetUniqueElementId = function (e) {
            var t = e.getAttribute("data-select2-id");
            return (
              null != t ||
                ((t = e.id
                  ? "select2-data-" + e.id
                  : "select2-data-" +
                    (++n).toString() +
                    "-" +
                    s.generateChars(4)),
                e.setAttribute("data-select2-id", t)),
              t
            );
          }),
          (s.StoreData = function (e, t, n) {
            e = s.GetUniqueElementId(e);
            s.__cache[e] || (s.__cache[e] = {}), (s.__cache[e][t] = n);
          }),
          (s.GetData = function (e, t) {
            var n = s.GetUniqueElementId(e);
            return t
              ? s.__cache[n] && null != s.__cache[n][t]
                ? s.__cache[n][t]
                : o(e).data(t)
              : s.__cache[n];
          }),
          (s.RemoveData = function (e) {
            var t = s.GetUniqueElementId(e);
            null != s.__cache[t] && delete s.__cache[t],
              e.removeAttribute("data-select2-id");
          }),
          (s.copyNonInternalCssClasses = function (e, t) {
            var n = (n = e.getAttribute("class").trim().split(/\s+/)).filter(
                function (e) {
                  return 0 === e.indexOf("select2-");
                }
              ),
              t = (t = t.getAttribute("class").trim().split(/\s+/)).filter(
                function (e) {
                  return 0 !== e.indexOf("select2-");
                }
              ),
              t = n.concat(t);
            e.setAttribute("class", t.join(" "));
          }),
          s
        );
      }),
      u.define("select2/results", ["jquery", "./utils"], function (d, p) {
        function s(e, t, n) {
          (this.$element = e),
            (this.data = n),
            (this.options = t),
            s.__super__.constructor.call(this);
        }
        return (
          p.Extend(s, p.Observable),
          (s.prototype.render = function () {
            var e = d(
              '<ul class="select2-results__options" role="listbox"></ul>'
            );
            return (
              this.options.get("multiple") &&
                e.attr("aria-multiselectable", "true"),
              (this.$results = e)
            );
          }),
          (s.prototype.clear = function () {
            this.$results.empty();
          }),
          (s.prototype.displayMessage = function (e) {
            var t = this.options.get("escapeMarkup");
            this.clear(), this.hideLoading();
            var n = d(
                '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
              ),
              s = this.options.get("translations").get(e.message);
            n.append(t(s(e.args))),
              (n[0].className += " select2-results__message"),
              this.$results.append(n);
          }),
          (s.prototype.hideMessages = function () {
            this.$results.find(".select2-results__message").remove();
          }),
          (s.prototype.append = function (e) {
            this.hideLoading();
            var t = [];
            if (null != e.results && 0 !== e.results.length) {
              e.results = this.sort(e.results);
              for (var n = 0; n < e.results.length; n++) {
                var s = e.results[n],
                  s = this.option(s);
                t.push(s);
              }
              this.$results.append(t);
            } else
              0 === this.$results.children().length &&
                this.trigger("results:message", { message: "noResults" });
          }),
          (s.prototype.position = function (e, t) {
            t.find(".select2-results").append(e);
          }),
          (s.prototype.sort = function (e) {
            return this.options.get("sorter")(e);
          }),
          (s.prototype.highlightFirstItem = function () {
            var e = this.$results.find(".select2-results__option--selectable"),
              t = e.filter(".select2-results__option--selected");
            (0 < t.length ? t : e).first().trigger("mouseenter"),
              this.ensureHighlightVisible();
          }),
          (s.prototype.setClasses = function () {
            var t = this;
            this.data.current(function (e) {
              var s = e.map(function (e) {
                return e.id.toString();
              });
              t.$results
                .find(".select2-results__option--selectable")
                .each(function () {
                  var e = d(this),
                    t = p.GetData(this, "data"),
                    n = "" + t.id;
                  (null != t.element && t.element.selected) ||
                  (null == t.element && -1 < s.indexOf(n))
                    ? (this.classList.add("select2-results__option--selected"),
                      e.attr("aria-selected", "true"))
                    : (this.classList.remove(
                        "select2-results__option--selected"
                      ),
                      e.attr("aria-selected", "false"));
                });
            });
          }),
          (s.prototype.showLoading = function (e) {
            this.hideLoading();
            (e = {
              disabled: !0,
              loading: !0,
              text: this.options.get("translations").get("searching")(e),
            }),
              (e = this.option(e));
            (e.className += " loading-results"), this.$results.prepend(e);
          }),
          (s.prototype.hideLoading = function () {
            this.$results.find(".loading-results").remove();
          }),
          (s.prototype.option = function (e) {
            var t = document.createElement("li");
            t.classList.add("select2-results__option"),
              t.classList.add("select2-results__option--selectable");
            var n,
              s = { role: "option" },
              i =
                window.Element.prototype.matches ||
                window.Element.prototype.msMatchesSelector ||
                window.Element.prototype.webkitMatchesSelector;
            for (n in (((null != e.element && i.call(e.element, ":disabled")) ||
              (null == e.element && e.disabled)) &&
              ((s["aria-disabled"] = "true"),
              t.classList.remove("select2-results__option--selectable"),
              t.classList.add("select2-results__option--disabled")),
            null == e.id &&
              t.classList.remove("select2-results__option--selectable"),
            null != e._resultId && (t.id = e._resultId),
            e.title && (t.title = e.title),
            e.children &&
              ((s.role = "group"),
              (s["aria-label"] = e.text),
              t.classList.remove("select2-results__option--selectable"),
              t.classList.add("select2-results__option--group")),
            s)) {
              var o = s[n];
              t.setAttribute(n, o);
            }
            if (e.children) {
              var r = d(t),
                a = document.createElement("strong");
              (a.className = "select2-results__group"), this.template(e, a);
              for (var l = [], c = 0; c < e.children.length; c++) {
                var u = e.children[c],
                  u = this.option(u);
                l.push(u);
              }
              i = d("<ul></ul>", {
                class:
                  "select2-results__options select2-results__options--nested",
                role: "none",
              });
              i.append(l), r.append(a), r.append(i);
            } else this.template(e, t);
            return p.StoreData(t, "data", e), t;
          }),
          (s.prototype.bind = function (t, e) {
            var i = this,
              n = t.id + "-results";
            this.$results.attr("id", n),
              t.on("results:all", function (e) {
                i.clear(),
                  i.append(e.data),
                  t.isOpen() && (i.setClasses(), i.highlightFirstItem());
              }),
              t.on("results:append", function (e) {
                i.append(e.data), t.isOpen() && i.setClasses();
              }),
              t.on("query", function (e) {
                i.hideMessages(), i.showLoading(e);
              }),
              t.on("select", function () {
                t.isOpen() &&
                  (i.setClasses(),
                  i.options.get("scrollAfterSelect") && i.highlightFirstItem());
              }),
              t.on("unselect", function () {
                t.isOpen() &&
                  (i.setClasses(),
                  i.options.get("scrollAfterSelect") && i.highlightFirstItem());
              }),
              t.on("open", function () {
                i.$results.attr("aria-expanded", "true"),
                  i.$results.attr("aria-hidden", "false"),
                  i.setClasses(),
                  i.ensureHighlightVisible();
              }),
              t.on("close", function () {
                i.$results.attr("aria-expanded", "false"),
                  i.$results.attr("aria-hidden", "true"),
                  i.$results.removeAttr("aria-activedescendant");
              }),
              t.on("results:toggle", function () {
                var e = i.getHighlightedResults();
                0 !== e.length && e.trigger("mouseup");
              }),
              t.on("results:select", function () {
                var e,
                  t = i.getHighlightedResults();
                0 !== t.length &&
                  ((e = p.GetData(t[0], "data")),
                  t.hasClass("select2-results__option--selected")
                    ? i.trigger("close", {})
                    : i.trigger("select", { data: e }));
              }),
              t.on("results:previous", function () {
                var e,
                  t = i.getHighlightedResults(),
                  n = i.$results.find(".select2-results__option--selectable"),
                  s = n.index(t);
                s <= 0 ||
                  ((e = s - 1),
                  0 === t.length && (e = 0),
                  (s = n.eq(e)).trigger("mouseenter"),
                  (t = i.$results.offset().top),
                  (n = s.offset().top),
                  (s = i.$results.scrollTop() + (n - t)),
                  0 === e
                    ? i.$results.scrollTop(0)
                    : n - t < 0 && i.$results.scrollTop(s));
              }),
              t.on("results:next", function () {
                var e,
                  t = i.getHighlightedResults(),
                  n = i.$results.find(".select2-results__option--selectable"),
                  s = n.index(t) + 1;
                s >= n.length ||
                  ((e = n.eq(s)).trigger("mouseenter"),
                  (t = i.$results.offset().top + i.$results.outerHeight(!1)),
                  (n = e.offset().top + e.outerHeight(!1)),
                  (e = i.$results.scrollTop() + n - t),
                  0 === s
                    ? i.$results.scrollTop(0)
                    : t < n && i.$results.scrollTop(e));
              }),
              t.on("results:focus", function (e) {
                e.element[0].classList.add(
                  "select2-results__option--highlighted"
                ),
                  e.element[0].setAttribute("aria-selected", "true");
              }),
              t.on("results:message", function (e) {
                i.displayMessage(e);
              }),
              d.fn.mousewheel &&
                this.$results.on("mousewheel", function (e) {
                  var t = i.$results.scrollTop(),
                    n = i.$results.get(0).scrollHeight - t + e.deltaY,
                    t = 0 < e.deltaY && t - e.deltaY <= 0,
                    n = e.deltaY < 0 && n <= i.$results.height();
                  t
                    ? (i.$results.scrollTop(0),
                      e.preventDefault(),
                      e.stopPropagation())
                    : n &&
                      (i.$results.scrollTop(
                        i.$results.get(0).scrollHeight - i.$results.height()
                      ),
                      e.preventDefault(),
                      e.stopPropagation());
                }),
              this.$results.on(
                "mouseup",
                ".select2-results__option--selectable",
                function (e) {
                  var t = d(this),
                    n = p.GetData(this, "data");
                  t.hasClass("select2-results__option--selected")
                    ? i.options.get("multiple")
                      ? i.trigger("unselect", { originalEvent: e, data: n })
                      : i.trigger("close", {})
                    : i.trigger("select", { originalEvent: e, data: n });
                }
              ),
              this.$results.on(
                "mouseenter",
                ".select2-results__option--selectable",
                function (e) {
                  var t = p.GetData(this, "data");
                  i
                    .getHighlightedResults()
                    .removeClass("select2-results__option--highlighted")
                    .attr("aria-selected", "false"),
                    i.trigger("results:focus", { data: t, element: d(this) });
                }
              );
          }),
          (s.prototype.getHighlightedResults = function () {
            return this.$results.find(".select2-results__option--highlighted");
          }),
          (s.prototype.destroy = function () {
            this.$results.remove();
          }),
          (s.prototype.ensureHighlightVisible = function () {
            var e,
              t,
              n,
              s,
              i = this.getHighlightedResults();
            0 !== i.length &&
              ((e = this.$results
                .find(".select2-results__option--selectable")
                .index(i)),
              (s = this.$results.offset().top),
              (t = i.offset().top),
              (n = this.$results.scrollTop() + (t - s)),
              (s = t - s),
              (n -= 2 * i.outerHeight(!1)),
              e <= 2
                ? this.$results.scrollTop(0)
                : (s > this.$results.outerHeight() || s < 0) &&
                  this.$results.scrollTop(n));
          }),
          (s.prototype.template = function (e, t) {
            var n = this.options.get("templateResult"),
              s = this.options.get("escapeMarkup"),
              e = n(e, t);
            null == e
              ? (t.style.display = "none")
              : "string" == typeof e
              ? (t.innerHTML = s(e))
              : d(t).append(e);
          }),
          s
        );
      }),
      u.define("select2/keys", [], function () {
        return {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46,
        };
      }),
      u.define(
        "select2/selection/base",
        ["jquery", "../utils", "../keys"],
        function (n, s, i) {
          function o(e, t) {
            (this.$element = e),
              (this.options = t),
              o.__super__.constructor.call(this);
          }
          return (
            s.Extend(o, s.Observable),
            (o.prototype.render = function () {
              var e = n(
                '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
              );
              return (
                (this._tabindex = 0),
                null != s.GetData(this.$element[0], "old-tabindex")
                  ? (this._tabindex = s.GetData(
                      this.$element[0],
                      "old-tabindex"
                    ))
                  : null != this.$element.attr("tabindex") &&
                    (this._tabindex = this.$element.attr("tabindex")),
                e.attr("title", this.$element.attr("title")),
                e.attr("tabindex", this._tabindex),
                e.attr("aria-disabled", "false"),
                (this.$selection = e)
              );
            }),
            (o.prototype.bind = function (e, t) {
              var n = this,
                s = e.id + "-results";
              (this.container = e),
                this.$selection.on("focus", function (e) {
                  n.trigger("focus", e);
                }),
                this.$selection.on("blur", function (e) {
                  n._handleBlur(e);
                }),
                this.$selection.on("keydown", function (e) {
                  n.trigger("keypress", e),
                    e.which === i.SPACE && e.preventDefault();
                }),
                e.on("results:focus", function (e) {
                  n.$selection.attr("aria-activedescendant", e.data._resultId);
                }),
                e.on("selection:update", function (e) {
                  n.update(e.data);
                }),
                e.on("open", function () {
                  n.$selection.attr("aria-expanded", "true"),
                    n.$selection.attr("aria-owns", s),
                    n._attachCloseHandler(e);
                }),
                e.on("close", function () {
                  n.$selection.attr("aria-expanded", "false"),
                    n.$selection.removeAttr("aria-activedescendant"),
                    n.$selection.removeAttr("aria-owns"),
                    n.$selection.trigger("focus"),
                    n._detachCloseHandler(e);
                }),
                e.on("enable", function () {
                  n.$selection.attr("tabindex", n._tabindex),
                    n.$selection.attr("aria-disabled", "false");
                }),
                e.on("disable", function () {
                  n.$selection.attr("tabindex", "-1"),
                    n.$selection.attr("aria-disabled", "true");
                });
            }),
            (o.prototype._handleBlur = function (e) {
              var t = this;
              window.setTimeout(function () {
                document.activeElement == t.$selection[0] ||
                  n.contains(t.$selection[0], document.activeElement) ||
                  t.trigger("blur", e);
              }, 1);
            }),
            (o.prototype._attachCloseHandler = function (e) {
              n(document.body).on("mousedown.select2." + e.id, function (e) {
                var t = n(e.target).closest(".select2");
                n(".select2.select2-container--open").each(function () {
                  this != t[0] && s.GetData(this, "element").select2("close");
                });
              });
            }),
            (o.prototype._detachCloseHandler = function (e) {
              n(document.body).off("mousedown.select2." + e.id);
            }),
            (o.prototype.position = function (e, t) {
              t.find(".selection").append(e);
            }),
            (o.prototype.destroy = function () {
              this._detachCloseHandler(this.container);
            }),
            (o.prototype.update = function (e) {
              throw new Error(
                "The `update` method must be defined in child classes."
              );
            }),
            (o.prototype.isEnabled = function () {
              return !this.isDisabled();
            }),
            (o.prototype.isDisabled = function () {
              return this.options.get("disabled");
            }),
            o
          );
        }
      ),
      u.define(
        "select2/selection/single",
        ["jquery", "./base", "../utils", "../keys"],
        function (e, t, n, s) {
          function i() {
            i.__super__.constructor.apply(this, arguments);
          }
          return (
            n.Extend(i, t),
            (i.prototype.render = function () {
              var e = i.__super__.render.call(this);
              return (
                e[0].classList.add("select2-selection--single"),
                e.html(
                  '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                ),
                e
              );
            }),
            (i.prototype.bind = function (t, e) {
              var n = this;
              i.__super__.bind.apply(this, arguments);
              var s = t.id + "-container";
              this.$selection
                .find(".select2-selection__rendered")
                .attr("id", s)
                .attr("role", "textbox")
                .attr("aria-readonly", "true"),
                this.$selection.attr("aria-labelledby", s),
                this.$selection.attr("aria-controls", s),
                this.$selection.on("mousedown", function (e) {
                  1 === e.which && n.trigger("toggle", { originalEvent: e });
                }),
                this.$selection.on("focus", function (e) {}),
                this.$selection.on("blur", function (e) {}),
                t.on("focus", function (e) {
                  t.isOpen() || n.$selection.trigger("focus");
                });
            }),
            (i.prototype.clear = function () {
              var e = this.$selection.find(".select2-selection__rendered");
              e.empty(), e.removeAttr("title");
            }),
            (i.prototype.display = function (e, t) {
              var n = this.options.get("templateSelection");
              return this.options.get("escapeMarkup")(n(e, t));
            }),
            (i.prototype.selectionContainer = function () {
              return e("<span></span>");
            }),
            (i.prototype.update = function (e) {
              var t, n;
              0 !== e.length
                ? ((n = e[0]),
                  (t = this.$selection.find(".select2-selection__rendered")),
                  (e = this.display(n, t)),
                  t.empty().append(e),
                  (n = n.title || n.text)
                    ? t.attr("title", n)
                    : t.removeAttr("title"))
                : this.clear();
            }),
            i
          );
        }
      ),
      u.define(
        "select2/selection/multiple",
        ["jquery", "./base", "../utils"],
        function (i, e, c) {
          function o(e, t) {
            o.__super__.constructor.apply(this, arguments);
          }
          return (
            c.Extend(o, e),
            (o.prototype.render = function () {
              var e = o.__super__.render.call(this);
              return (
                e[0].classList.add("select2-selection--multiple"),
                e.html('<ul class="select2-selection__rendered"></ul>'),
                e
              );
            }),
            (o.prototype.bind = function (e, t) {
              var n = this;
              o.__super__.bind.apply(this, arguments);
              var s = e.id + "-container";
              this.$selection
                .find(".select2-selection__rendered")
                .attr("id", s),
                this.$selection.on("click", function (e) {
                  n.trigger("toggle", { originalEvent: e });
                }),
                this.$selection.on(
                  "click",
                  ".select2-selection__choice__remove",
                  function (e) {
                    var t;
                    n.isDisabled() ||
                      ((t = i(this).parent()),
                      (t = c.GetData(t[0], "data")),
                      n.trigger("unselect", { originalEvent: e, data: t }));
                  }
                ),
                this.$selection.on(
                  "keydown",
                  ".select2-selection__choice__remove",
                  function (e) {
                    n.isDisabled() || e.stopPropagation();
                  }
                );
            }),
            (o.prototype.clear = function () {
              var e = this.$selection.find(".select2-selection__rendered");
              e.empty(), e.removeAttr("title");
            }),
            (o.prototype.display = function (e, t) {
              var n = this.options.get("templateSelection");
              return this.options.get("escapeMarkup")(n(e, t));
            }),
            (o.prototype.selectionContainer = function () {
              return i(
                '<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>'
              );
            }),
            (o.prototype.update = function (e) {
              if ((this.clear(), 0 !== e.length)) {
                for (
                  var t = [],
                    n =
                      this.$selection
                        .find(".select2-selection__rendered")
                        .attr("id") + "-choice-",
                    s = 0;
                  s < e.length;
                  s++
                ) {
                  var i = e[s],
                    o = this.selectionContainer(),
                    r = this.display(i, o),
                    a = n + c.generateChars(4) + "-";
                  i.id ? (a += i.id) : (a += c.generateChars(4)),
                    o
                      .find(".select2-selection__choice__display")
                      .append(r)
                      .attr("id", a);
                  var l = i.title || i.text;
                  l && o.attr("title", l);
                  (r = this.options.get("translations").get("removeItem")),
                    (l = o.find(".select2-selection__choice__remove"));
                  l.attr("title", r()),
                    l.attr("aria-label", r()),
                    l.attr("aria-describedby", a),
                    c.StoreData(o[0], "data", i),
                    t.push(o);
                }
                this.$selection.find(".select2-selection__rendered").append(t);
              }
            }),
            o
          );
        }
      ),
      u.define("select2/selection/placeholder", [], function () {
        function e(e, t, n) {
          (this.placeholder = this.normalizePlaceholder(n.get("placeholder"))),
            e.call(this, t, n);
        }
        return (
          (e.prototype.normalizePlaceholder = function (e, t) {
            return "string" == typeof t && (t = { id: "", text: t }), t;
          }),
          (e.prototype.createPlaceholder = function (e, t) {
            var n = this.selectionContainer();
            n.html(this.display(t)),
              n[0].classList.add("select2-selection__placeholder"),
              n[0].classList.remove("select2-selection__choice");
            t = t.title || t.text || n.text();
            return (
              this.$selection
                .find(".select2-selection__rendered")
                .attr("title", t),
              n
            );
          }),
          (e.prototype.update = function (e, t) {
            var n = 1 == t.length && t[0].id != this.placeholder.id;
            if (1 < t.length || n) return e.call(this, t);
            this.clear();
            t = this.createPlaceholder(this.placeholder);
            this.$selection.find(".select2-selection__rendered").append(t);
          }),
          e
        );
      }),
      u.define(
        "select2/selection/allowClear",
        ["jquery", "../keys", "../utils"],
        function (i, s, a) {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var s = this;
              e.call(this, t, n),
                null == this.placeholder &&
                  this.options.get("debug") &&
                  window.console &&
                  console.error &&
                  console.error(
                    "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                  ),
                this.$selection.on(
                  "mousedown",
                  ".select2-selection__clear",
                  function (e) {
                    s._handleClear(e);
                  }
                ),
                t.on("keypress", function (e) {
                  s._handleKeyboardClear(e, t);
                });
            }),
            (e.prototype._handleClear = function (e, t) {
              if (!this.isDisabled()) {
                var n = this.$selection.find(".select2-selection__clear");
                if (0 !== n.length) {
                  t.stopPropagation();
                  var s = a.GetData(n[0], "data"),
                    i = this.$element.val();
                  this.$element.val(this.placeholder.id);
                  var o = { data: s };
                  if ((this.trigger("clear", o), o.prevented))
                    this.$element.val(i);
                  else {
                    for (var r = 0; r < s.length; r++)
                      if (
                        ((o = { data: s[r] }),
                        this.trigger("unselect", o),
                        o.prevented)
                      )
                        return void this.$element.val(i);
                    this.$element.trigger("input").trigger("change"),
                      this.trigger("toggle", {});
                  }
                }
              }
            }),
            (e.prototype._handleKeyboardClear = function (e, t, n) {
              n.isOpen() ||
                (t.which != s.DELETE && t.which != s.BACKSPACE) ||
                this._handleClear(t);
            }),
            (e.prototype.update = function (e, t) {
              var n, s;
              e.call(this, t),
                this.$selection.find(".select2-selection__clear").remove(),
                this.$selection[0].classList.remove(
                  "select2-selection--clearable"
                ),
                0 <
                  this.$selection.find(".select2-selection__placeholder")
                    .length ||
                  0 === t.length ||
                  ((n = this.$selection
                    .find(".select2-selection__rendered")
                    .attr("id")),
                  (s = this.options.get("translations").get("removeAllItems")),
                  (e = i(
                    '<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>'
                  )).attr("title", s()),
                  e.attr("aria-label", s()),
                  e.attr("aria-describedby", n),
                  a.StoreData(e[0], "data", t),
                  this.$selection.prepend(e),
                  this.$selection[0].classList.add(
                    "select2-selection--clearable"
                  ));
            }),
            e
          );
        }
      ),
      u.define(
        "select2/selection/search",
        ["jquery", "../utils", "../keys"],
        function (s, a, l) {
          function e(e, t, n) {
            e.call(this, t, n);
          }
          return (
            (e.prototype.render = function (e) {
              var t = this.options.get("translations").get("search"),
                n = s(
                  '<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>'
                );
              (this.$searchContainer = n),
                (this.$search = n.find("textarea")),
                this.$search.prop(
                  "autocomplete",
                  this.options.get("autocomplete")
                ),
                this.$search.attr("aria-label", t());
              e = e.call(this);
              return (
                this._transferTabIndex(), e.append(this.$searchContainer), e
              );
            }),
            (e.prototype.bind = function (e, t, n) {
              var s = this,
                i = t.id + "-results",
                o = t.id + "-container";
              e.call(this, t, n),
                s.$search.attr("aria-describedby", o),
                t.on("open", function () {
                  s.$search.attr("aria-controls", i),
                    s.$search.trigger("focus");
                }),
                t.on("close", function () {
                  s.$search.val(""),
                    s.resizeSearch(),
                    s.$search.removeAttr("aria-controls"),
                    s.$search.removeAttr("aria-activedescendant"),
                    s.$search.trigger("focus");
                }),
                t.on("enable", function () {
                  s.$search.prop("disabled", !1), s._transferTabIndex();
                }),
                t.on("disable", function () {
                  s.$search.prop("disabled", !0);
                }),
                t.on("focus", function (e) {
                  s.$search.trigger("focus");
                }),
                t.on("results:focus", function (e) {
                  e.data._resultId
                    ? s.$search.attr("aria-activedescendant", e.data._resultId)
                    : s.$search.removeAttr("aria-activedescendant");
                }),
                this.$selection.on(
                  "focusin",
                  ".select2-search--inline",
                  function (e) {
                    s.trigger("focus", e);
                  }
                ),
                this.$selection.on(
                  "focusout",
                  ".select2-search--inline",
                  function (e) {
                    s._handleBlur(e);
                  }
                ),
                this.$selection.on(
                  "keydown",
                  ".select2-search--inline",
                  function (e) {
                    var t;
                    e.stopPropagation(),
                      s.trigger("keypress", e),
                      (s._keyUpPrevented = e.isDefaultPrevented()),
                      e.which !== l.BACKSPACE ||
                        "" !== s.$search.val() ||
                        (0 <
                          (t = s.$selection
                            .find(".select2-selection__choice")
                            .last()).length &&
                          ((t = a.GetData(t[0], "data")),
                          s.searchRemoveChoice(t),
                          e.preventDefault()));
                  }
                ),
                this.$selection.on(
                  "click",
                  ".select2-search--inline",
                  function (e) {
                    s.$search.val() && e.stopPropagation();
                  }
                );
              var t = document.documentMode,
                r = t && t <= 11;
              this.$selection.on(
                "input.searchcheck",
                ".select2-search--inline",
                function (e) {
                  r
                    ? s.$selection.off("input.search input.searchcheck")
                    : s.$selection.off("keyup.search");
                }
              ),
                this.$selection.on(
                  "keyup.search input.search",
                  ".select2-search--inline",
                  function (e) {
                    var t;
                    r && "input" === e.type
                      ? s.$selection.off("input.search input.searchcheck")
                      : (t = e.which) != l.SHIFT &&
                        t != l.CTRL &&
                        t != l.ALT &&
                        t != l.TAB &&
                        s.handleSearch(e);
                  }
                );
            }),
            (e.prototype._transferTabIndex = function (e) {
              this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                this.$selection.attr("tabindex", "-1");
            }),
            (e.prototype.createPlaceholder = function (e, t) {
              this.$search.attr("placeholder", t.text);
            }),
            (e.prototype.update = function (e, t) {
              var n = this.$search[0] == document.activeElement;
              this.$search.attr("placeholder", ""),
                e.call(this, t),
                this.resizeSearch(),
                n && this.$search.trigger("focus");
            }),
            (e.prototype.handleSearch = function () {
              var e;
              this.resizeSearch(),
                this._keyUpPrevented ||
                  ((e = this.$search.val()),
                  this.trigger("query", { term: e })),
                (this._keyUpPrevented = !1);
            }),
            (e.prototype.searchRemoveChoice = function (e, t) {
              this.trigger("unselect", { data: t }),
                this.$search.val(t.text),
                this.handleSearch();
            }),
            (e.prototype.resizeSearch = function () {
              this.$search.css("width", "25px");
              var e = "100%";
              "" === this.$search.attr("placeholder") &&
                (e = 0.75 * (this.$search.val().length + 1) + "em"),
                this.$search.css("width", e);
            }),
            e
          );
        }
      ),
      u.define("select2/selection/selectionCss", ["../utils"], function (n) {
        function e() {}
        return (
          (e.prototype.render = function (e) {
            var t = e.call(this),
              e = this.options.get("selectionCssClass") || "";
            return (
              -1 !== e.indexOf(":all:") &&
                ((e = e.replace(":all:", "")),
                n.copyNonInternalCssClasses(t[0], this.$element[0])),
              t.addClass(e),
              t
            );
          }),
          e
        );
      }),
      u.define("select2/selection/eventRelay", ["jquery"], function (r) {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this,
              i = [
                "open",
                "opening",
                "close",
                "closing",
                "select",
                "selecting",
                "unselect",
                "unselecting",
                "clear",
                "clearing",
              ],
              o = [
                "opening",
                "closing",
                "selecting",
                "unselecting",
                "clearing",
              ];
            e.call(this, t, n),
              t.on("*", function (e, t) {
                var n;
                -1 !== i.indexOf(e) &&
                  ((t = t || {}),
                  (n = r.Event("select2:" + e, { params: t })),
                  s.$element.trigger(n),
                  -1 !== o.indexOf(e) &&
                    (t.prevented = n.isDefaultPrevented()));
              });
          }),
          e
        );
      }),
      u.define("select2/translation", ["jquery", "require"], function (t, n) {
        function s(e) {
          this.dict = e || {};
        }
        return (
          (s.prototype.all = function () {
            return this.dict;
          }),
          (s.prototype.get = function (e) {
            return this.dict[e];
          }),
          (s.prototype.extend = function (e) {
            this.dict = t.extend({}, e.all(), this.dict);
          }),
          (s._cache = {}),
          (s.loadPath = function (e) {
            var t;
            return (
              e in s._cache || ((t = n(e)), (s._cache[e] = t)),
              new s(s._cache[e])
            );
          }),
          s
        );
      }),
      u.define("select2/diacritics", [], function () {
        return {
          "Ⓐ": "A",
          Ａ: "A",
          À: "A",
          Á: "A",
          Â: "A",
          Ầ: "A",
          Ấ: "A",
          Ẫ: "A",
          Ẩ: "A",
          Ã: "A",
          Ā: "A",
          Ă: "A",
          Ằ: "A",
          Ắ: "A",
          Ẵ: "A",
          Ẳ: "A",
          Ȧ: "A",
          Ǡ: "A",
          Ä: "A",
          Ǟ: "A",
          Ả: "A",
          Å: "A",
          Ǻ: "A",
          Ǎ: "A",
          Ȁ: "A",
          Ȃ: "A",
          Ạ: "A",
          Ậ: "A",
          Ặ: "A",
          Ḁ: "A",
          Ą: "A",
          Ⱥ: "A",
          Ɐ: "A",
          Ꜳ: "AA",
          Æ: "AE",
          Ǽ: "AE",
          Ǣ: "AE",
          Ꜵ: "AO",
          Ꜷ: "AU",
          Ꜹ: "AV",
          Ꜻ: "AV",
          Ꜽ: "AY",
          "Ⓑ": "B",
          Ｂ: "B",
          Ḃ: "B",
          Ḅ: "B",
          Ḇ: "B",
          Ƀ: "B",
          Ƃ: "B",
          Ɓ: "B",
          "Ⓒ": "C",
          Ｃ: "C",
          Ć: "C",
          Ĉ: "C",
          Ċ: "C",
          Č: "C",
          Ç: "C",
          Ḉ: "C",
          Ƈ: "C",
          Ȼ: "C",
          Ꜿ: "C",
          "Ⓓ": "D",
          Ｄ: "D",
          Ḋ: "D",
          Ď: "D",
          Ḍ: "D",
          Ḑ: "D",
          Ḓ: "D",
          Ḏ: "D",
          Đ: "D",
          Ƌ: "D",
          Ɗ: "D",
          Ɖ: "D",
          Ꝺ: "D",
          Ǳ: "DZ",
          Ǆ: "DZ",
          ǲ: "Dz",
          ǅ: "Dz",
          "Ⓔ": "E",
          Ｅ: "E",
          È: "E",
          É: "E",
          Ê: "E",
          Ề: "E",
          Ế: "E",
          Ễ: "E",
          Ể: "E",
          Ẽ: "E",
          Ē: "E",
          Ḕ: "E",
          Ḗ: "E",
          Ĕ: "E",
          Ė: "E",
          Ë: "E",
          Ẻ: "E",
          Ě: "E",
          Ȅ: "E",
          Ȇ: "E",
          Ẹ: "E",
          Ệ: "E",
          Ȩ: "E",
          Ḝ: "E",
          Ę: "E",
          Ḙ: "E",
          Ḛ: "E",
          Ɛ: "E",
          Ǝ: "E",
          "Ⓕ": "F",
          Ｆ: "F",
          Ḟ: "F",
          Ƒ: "F",
          Ꝼ: "F",
          "Ⓖ": "G",
          Ｇ: "G",
          Ǵ: "G",
          Ĝ: "G",
          Ḡ: "G",
          Ğ: "G",
          Ġ: "G",
          Ǧ: "G",
          Ģ: "G",
          Ǥ: "G",
          Ɠ: "G",
          Ꞡ: "G",
          Ᵹ: "G",
          Ꝿ: "G",
          "Ⓗ": "H",
          Ｈ: "H",
          Ĥ: "H",
          Ḣ: "H",
          Ḧ: "H",
          Ȟ: "H",
          Ḥ: "H",
          Ḩ: "H",
          Ḫ: "H",
          Ħ: "H",
          Ⱨ: "H",
          Ⱶ: "H",
          Ɥ: "H",
          "Ⓘ": "I",
          Ｉ: "I",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ĩ: "I",
          Ī: "I",
          Ĭ: "I",
          İ: "I",
          Ï: "I",
          Ḯ: "I",
          Ỉ: "I",
          Ǐ: "I",
          Ȉ: "I",
          Ȋ: "I",
          Ị: "I",
          Į: "I",
          Ḭ: "I",
          Ɨ: "I",
          "Ⓙ": "J",
          Ｊ: "J",
          Ĵ: "J",
          Ɉ: "J",
          "Ⓚ": "K",
          Ｋ: "K",
          Ḱ: "K",
          Ǩ: "K",
          Ḳ: "K",
          Ķ: "K",
          Ḵ: "K",
          Ƙ: "K",
          Ⱪ: "K",
          Ꝁ: "K",
          Ꝃ: "K",
          Ꝅ: "K",
          Ꞣ: "K",
          "Ⓛ": "L",
          Ｌ: "L",
          Ŀ: "L",
          Ĺ: "L",
          Ľ: "L",
          Ḷ: "L",
          Ḹ: "L",
          Ļ: "L",
          Ḽ: "L",
          Ḻ: "L",
          Ł: "L",
          Ƚ: "L",
          Ɫ: "L",
          Ⱡ: "L",
          Ꝉ: "L",
          Ꝇ: "L",
          Ꞁ: "L",
          Ǉ: "LJ",
          ǈ: "Lj",
          "Ⓜ": "M",
          Ｍ: "M",
          Ḿ: "M",
          Ṁ: "M",
          Ṃ: "M",
          Ɱ: "M",
          Ɯ: "M",
          "Ⓝ": "N",
          Ｎ: "N",
          Ǹ: "N",
          Ń: "N",
          Ñ: "N",
          Ṅ: "N",
          Ň: "N",
          Ṇ: "N",
          Ņ: "N",
          Ṋ: "N",
          Ṉ: "N",
          Ƞ: "N",
          Ɲ: "N",
          Ꞑ: "N",
          Ꞥ: "N",
          Ǌ: "NJ",
          ǋ: "Nj",
          "Ⓞ": "O",
          Ｏ: "O",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Ồ: "O",
          Ố: "O",
          Ỗ: "O",
          Ổ: "O",
          Õ: "O",
          Ṍ: "O",
          Ȭ: "O",
          Ṏ: "O",
          Ō: "O",
          Ṑ: "O",
          Ṓ: "O",
          Ŏ: "O",
          Ȯ: "O",
          Ȱ: "O",
          Ö: "O",
          Ȫ: "O",
          Ỏ: "O",
          Ő: "O",
          Ǒ: "O",
          Ȍ: "O",
          Ȏ: "O",
          Ơ: "O",
          Ờ: "O",
          Ớ: "O",
          Ỡ: "O",
          Ở: "O",
          Ợ: "O",
          Ọ: "O",
          Ộ: "O",
          Ǫ: "O",
          Ǭ: "O",
          Ø: "O",
          Ǿ: "O",
          Ɔ: "O",
          Ɵ: "O",
          Ꝋ: "O",
          Ꝍ: "O",
          Œ: "OE",
          Ƣ: "OI",
          Ꝏ: "OO",
          Ȣ: "OU",
          "Ⓟ": "P",
          Ｐ: "P",
          Ṕ: "P",
          Ṗ: "P",
          Ƥ: "P",
          Ᵽ: "P",
          Ꝑ: "P",
          Ꝓ: "P",
          Ꝕ: "P",
          "Ⓠ": "Q",
          Ｑ: "Q",
          Ꝗ: "Q",
          Ꝙ: "Q",
          Ɋ: "Q",
          "Ⓡ": "R",
          Ｒ: "R",
          Ŕ: "R",
          Ṙ: "R",
          Ř: "R",
          Ȑ: "R",
          Ȓ: "R",
          Ṛ: "R",
          Ṝ: "R",
          Ŗ: "R",
          Ṟ: "R",
          Ɍ: "R",
          Ɽ: "R",
          Ꝛ: "R",
          Ꞧ: "R",
          Ꞃ: "R",
          "Ⓢ": "S",
          Ｓ: "S",
          ẞ: "S",
          Ś: "S",
          Ṥ: "S",
          Ŝ: "S",
          Ṡ: "S",
          Š: "S",
          Ṧ: "S",
          Ṣ: "S",
          Ṩ: "S",
          Ș: "S",
          Ş: "S",
          Ȿ: "S",
          Ꞩ: "S",
          Ꞅ: "S",
          "Ⓣ": "T",
          Ｔ: "T",
          Ṫ: "T",
          Ť: "T",
          Ṭ: "T",
          Ț: "T",
          Ţ: "T",
          Ṱ: "T",
          Ṯ: "T",
          Ŧ: "T",
          Ƭ: "T",
          Ʈ: "T",
          Ⱦ: "T",
          Ꞇ: "T",
          Ꜩ: "TZ",
          "Ⓤ": "U",
          Ｕ: "U",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ũ: "U",
          Ṹ: "U",
          Ū: "U",
          Ṻ: "U",
          Ŭ: "U",
          Ü: "U",
          Ǜ: "U",
          Ǘ: "U",
          Ǖ: "U",
          Ǚ: "U",
          Ủ: "U",
          Ů: "U",
          Ű: "U",
          Ǔ: "U",
          Ȕ: "U",
          Ȗ: "U",
          Ư: "U",
          Ừ: "U",
          Ứ: "U",
          Ữ: "U",
          Ử: "U",
          Ự: "U",
          Ụ: "U",
          Ṳ: "U",
          Ų: "U",
          Ṷ: "U",
          Ṵ: "U",
          Ʉ: "U",
          "Ⓥ": "V",
          Ｖ: "V",
          Ṽ: "V",
          Ṿ: "V",
          Ʋ: "V",
          Ꝟ: "V",
          Ʌ: "V",
          Ꝡ: "VY",
          "Ⓦ": "W",
          Ｗ: "W",
          Ẁ: "W",
          Ẃ: "W",
          Ŵ: "W",
          Ẇ: "W",
          Ẅ: "W",
          Ẉ: "W",
          Ⱳ: "W",
          "Ⓧ": "X",
          Ｘ: "X",
          Ẋ: "X",
          Ẍ: "X",
          "Ⓨ": "Y",
          Ｙ: "Y",
          Ỳ: "Y",
          Ý: "Y",
          Ŷ: "Y",
          Ỹ: "Y",
          Ȳ: "Y",
          Ẏ: "Y",
          Ÿ: "Y",
          Ỷ: "Y",
          Ỵ: "Y",
          Ƴ: "Y",
          Ɏ: "Y",
          Ỿ: "Y",
          "Ⓩ": "Z",
          Ｚ: "Z",
          Ź: "Z",
          Ẑ: "Z",
          Ż: "Z",
          Ž: "Z",
          Ẓ: "Z",
          Ẕ: "Z",
          Ƶ: "Z",
          Ȥ: "Z",
          Ɀ: "Z",
          Ⱬ: "Z",
          Ꝣ: "Z",
          "ⓐ": "a",
          ａ: "a",
          ẚ: "a",
          à: "a",
          á: "a",
          â: "a",
          ầ: "a",
          ấ: "a",
          ẫ: "a",
          ẩ: "a",
          ã: "a",
          ā: "a",
          ă: "a",
          ằ: "a",
          ắ: "a",
          ẵ: "a",
          ẳ: "a",
          ȧ: "a",
          ǡ: "a",
          ä: "a",
          ǟ: "a",
          ả: "a",
          å: "a",
          ǻ: "a",
          ǎ: "a",
          ȁ: "a",
          ȃ: "a",
          ạ: "a",
          ậ: "a",
          ặ: "a",
          ḁ: "a",
          ą: "a",
          ⱥ: "a",
          ɐ: "a",
          ꜳ: "aa",
          æ: "ae",
          ǽ: "ae",
          ǣ: "ae",
          ꜵ: "ao",
          ꜷ: "au",
          ꜹ: "av",
          ꜻ: "av",
          ꜽ: "ay",
          "ⓑ": "b",
          ｂ: "b",
          ḃ: "b",
          ḅ: "b",
          ḇ: "b",
          ƀ: "b",
          ƃ: "b",
          ɓ: "b",
          "ⓒ": "c",
          ｃ: "c",
          ć: "c",
          ĉ: "c",
          ċ: "c",
          č: "c",
          ç: "c",
          ḉ: "c",
          ƈ: "c",
          ȼ: "c",
          ꜿ: "c",
          ↄ: "c",
          "ⓓ": "d",
          ｄ: "d",
          ḋ: "d",
          ď: "d",
          ḍ: "d",
          ḑ: "d",
          ḓ: "d",
          ḏ: "d",
          đ: "d",
          ƌ: "d",
          ɖ: "d",
          ɗ: "d",
          ꝺ: "d",
          ǳ: "dz",
          ǆ: "dz",
          "ⓔ": "e",
          ｅ: "e",
          è: "e",
          é: "e",
          ê: "e",
          ề: "e",
          ế: "e",
          ễ: "e",
          ể: "e",
          ẽ: "e",
          ē: "e",
          ḕ: "e",
          ḗ: "e",
          ĕ: "e",
          ė: "e",
          ë: "e",
          ẻ: "e",
          ě: "e",
          ȅ: "e",
          ȇ: "e",
          ẹ: "e",
          ệ: "e",
          ȩ: "e",
          ḝ: "e",
          ę: "e",
          ḙ: "e",
          ḛ: "e",
          ɇ: "e",
          ɛ: "e",
          ǝ: "e",
          "ⓕ": "f",
          ｆ: "f",
          ḟ: "f",
          ƒ: "f",
          ꝼ: "f",
          "ⓖ": "g",
          ｇ: "g",
          ǵ: "g",
          ĝ: "g",
          ḡ: "g",
          ğ: "g",
          ġ: "g",
          ǧ: "g",
          ģ: "g",
          ǥ: "g",
          ɠ: "g",
          ꞡ: "g",
          ᵹ: "g",
          ꝿ: "g",
          "ⓗ": "h",
          ｈ: "h",
          ĥ: "h",
          ḣ: "h",
          ḧ: "h",
          ȟ: "h",
          ḥ: "h",
          ḩ: "h",
          ḫ: "h",
          ẖ: "h",
          ħ: "h",
          ⱨ: "h",
          ⱶ: "h",
          ɥ: "h",
          ƕ: "hv",
          "ⓘ": "i",
          ｉ: "i",
          ì: "i",
          í: "i",
          î: "i",
          ĩ: "i",
          ī: "i",
          ĭ: "i",
          ï: "i",
          ḯ: "i",
          ỉ: "i",
          ǐ: "i",
          ȉ: "i",
          ȋ: "i",
          ị: "i",
          į: "i",
          ḭ: "i",
          ɨ: "i",
          ı: "i",
          "ⓙ": "j",
          ｊ: "j",
          ĵ: "j",
          ǰ: "j",
          ɉ: "j",
          "ⓚ": "k",
          ｋ: "k",
          ḱ: "k",
          ǩ: "k",
          ḳ: "k",
          ķ: "k",
          ḵ: "k",
          ƙ: "k",
          ⱪ: "k",
          ꝁ: "k",
          ꝃ: "k",
          ꝅ: "k",
          ꞣ: "k",
          "ⓛ": "l",
          ｌ: "l",
          ŀ: "l",
          ĺ: "l",
          ľ: "l",
          ḷ: "l",
          ḹ: "l",
          ļ: "l",
          ḽ: "l",
          ḻ: "l",
          ſ: "l",
          ł: "l",
          ƚ: "l",
          ɫ: "l",
          ⱡ: "l",
          ꝉ: "l",
          ꞁ: "l",
          ꝇ: "l",
          ǉ: "lj",
          "ⓜ": "m",
          ｍ: "m",
          ḿ: "m",
          ṁ: "m",
          ṃ: "m",
          ɱ: "m",
          ɯ: "m",
          "ⓝ": "n",
          ｎ: "n",
          ǹ: "n",
          ń: "n",
          ñ: "n",
          ṅ: "n",
          ň: "n",
          ṇ: "n",
          ņ: "n",
          ṋ: "n",
          ṉ: "n",
          ƞ: "n",
          ɲ: "n",
          ŉ: "n",
          ꞑ: "n",
          ꞥ: "n",
          ǌ: "nj",
          "ⓞ": "o",
          ｏ: "o",
          ò: "o",
          ó: "o",
          ô: "o",
          ồ: "o",
          ố: "o",
          ỗ: "o",
          ổ: "o",
          õ: "o",
          ṍ: "o",
          ȭ: "o",
          ṏ: "o",
          ō: "o",
          ṑ: "o",
          ṓ: "o",
          ŏ: "o",
          ȯ: "o",
          ȱ: "o",
          ö: "o",
          ȫ: "o",
          ỏ: "o",
          ő: "o",
          ǒ: "o",
          ȍ: "o",
          ȏ: "o",
          ơ: "o",
          ờ: "o",
          ớ: "o",
          ỡ: "o",
          ở: "o",
          ợ: "o",
          ọ: "o",
          ộ: "o",
          ǫ: "o",
          ǭ: "o",
          ø: "o",
          ǿ: "o",
          ɔ: "o",
          ꝋ: "o",
          ꝍ: "o",
          ɵ: "o",
          œ: "oe",
          ƣ: "oi",
          ȣ: "ou",
          ꝏ: "oo",
          "ⓟ": "p",
          ｐ: "p",
          ṕ: "p",
          ṗ: "p",
          ƥ: "p",
          ᵽ: "p",
          ꝑ: "p",
          ꝓ: "p",
          ꝕ: "p",
          "ⓠ": "q",
          ｑ: "q",
          ɋ: "q",
          ꝗ: "q",
          ꝙ: "q",
          "ⓡ": "r",
          ｒ: "r",
          ŕ: "r",
          ṙ: "r",
          ř: "r",
          ȑ: "r",
          ȓ: "r",
          ṛ: "r",
          ṝ: "r",
          ŗ: "r",
          ṟ: "r",
          ɍ: "r",
          ɽ: "r",
          ꝛ: "r",
          ꞧ: "r",
          ꞃ: "r",
          "ⓢ": "s",
          ｓ: "s",
          ß: "s",
          ś: "s",
          ṥ: "s",
          ŝ: "s",
          ṡ: "s",
          š: "s",
          ṧ: "s",
          ṣ: "s",
          ṩ: "s",
          ș: "s",
          ş: "s",
          ȿ: "s",
          ꞩ: "s",
          ꞅ: "s",
          ẛ: "s",
          "ⓣ": "t",
          ｔ: "t",
          ṫ: "t",
          ẗ: "t",
          ť: "t",
          ṭ: "t",
          ț: "t",
          ţ: "t",
          ṱ: "t",
          ṯ: "t",
          ŧ: "t",
          ƭ: "t",
          ʈ: "t",
          ⱦ: "t",
          ꞇ: "t",
          ꜩ: "tz",
          "ⓤ": "u",
          ｕ: "u",
          ù: "u",
          ú: "u",
          û: "u",
          ũ: "u",
          ṹ: "u",
          ū: "u",
          ṻ: "u",
          ŭ: "u",
          ü: "u",
          ǜ: "u",
          ǘ: "u",
          ǖ: "u",
          ǚ: "u",
          ủ: "u",
          ů: "u",
          ű: "u",
          ǔ: "u",
          ȕ: "u",
          ȗ: "u",
          ư: "u",
          ừ: "u",
          ứ: "u",
          ữ: "u",
          ử: "u",
          ự: "u",
          ụ: "u",
          ṳ: "u",
          ų: "u",
          ṷ: "u",
          ṵ: "u",
          ʉ: "u",
          "ⓥ": "v",
          ｖ: "v",
          ṽ: "v",
          ṿ: "v",
          ʋ: "v",
          ꝟ: "v",
          ʌ: "v",
          ꝡ: "vy",
          "ⓦ": "w",
          ｗ: "w",
          ẁ: "w",
          ẃ: "w",
          ŵ: "w",
          ẇ: "w",
          ẅ: "w",
          ẘ: "w",
          ẉ: "w",
          ⱳ: "w",
          "ⓧ": "x",
          ｘ: "x",
          ẋ: "x",
          ẍ: "x",
          "ⓨ": "y",
          ｙ: "y",
          ỳ: "y",
          ý: "y",
          ŷ: "y",
          ỹ: "y",
          ȳ: "y",
          ẏ: "y",
          ÿ: "y",
          ỷ: "y",
          ẙ: "y",
          ỵ: "y",
          ƴ: "y",
          ɏ: "y",
          ỿ: "y",
          "ⓩ": "z",
          ｚ: "z",
          ź: "z",
          ẑ: "z",
          ż: "z",
          ž: "z",
          ẓ: "z",
          ẕ: "z",
          ƶ: "z",
          ȥ: "z",
          ɀ: "z",
          ⱬ: "z",
          ꝣ: "z",
          Ά: "Α",
          Έ: "Ε",
          Ή: "Η",
          Ί: "Ι",
          Ϊ: "Ι",
          Ό: "Ο",
          Ύ: "Υ",
          Ϋ: "Υ",
          Ώ: "Ω",
          ά: "α",
          έ: "ε",
          ή: "η",
          ί: "ι",
          ϊ: "ι",
          ΐ: "ι",
          ό: "ο",
          ύ: "υ",
          ϋ: "υ",
          ΰ: "υ",
          ώ: "ω",
          ς: "σ",
          "’": "'",
        };
      }),
      u.define("select2/data/base", ["../utils"], function (n) {
        function s(e, t) {
          s.__super__.constructor.call(this);
        }
        return (
          n.Extend(s, n.Observable),
          (s.prototype.current = function (e) {
            throw new Error(
              "The `current` method must be defined in child classes."
            );
          }),
          (s.prototype.query = function (e, t) {
            throw new Error(
              "The `query` method must be defined in child classes."
            );
          }),
          (s.prototype.bind = function (e, t) {}),
          (s.prototype.destroy = function () {}),
          (s.prototype.generateResultId = function (e, t) {
            e = e.id + "-result-";
            return (
              (e += n.generateChars(4)),
              null != t.id
                ? (e += "-" + t.id.toString())
                : (e += "-" + n.generateChars(4)),
              e
            );
          }),
          s
        );
      }),
      u.define(
        "select2/data/select",
        ["./base", "../utils", "jquery"],
        function (e, a, l) {
          function n(e, t) {
            (this.$element = e),
              (this.options = t),
              n.__super__.constructor.call(this);
          }
          return (
            a.Extend(n, e),
            (n.prototype.current = function (e) {
              var t = this;
              e(
                Array.prototype.map.call(
                  this.$element[0].querySelectorAll(":checked"),
                  function (e) {
                    return t.item(l(e));
                  }
                )
              );
            }),
            (n.prototype.select = function (i) {
              var e,
                o = this;
              if (
                ((i.selected = !0),
                null != i.element &&
                  "option" === i.element.tagName.toLowerCase())
              )
                return (
                  (i.element.selected = !0),
                  void this.$element.trigger("input").trigger("change")
                );
              this.$element.prop("multiple")
                ? this.current(function (e) {
                    var t = [];
                    (i = [i]).push.apply(i, e);
                    for (var n = 0; n < i.length; n++) {
                      var s = i[n].id;
                      -1 === t.indexOf(s) && t.push(s);
                    }
                    o.$element.val(t),
                      o.$element.trigger("input").trigger("change");
                  })
                : ((e = i.id),
                  this.$element.val(e),
                  this.$element.trigger("input").trigger("change"));
            }),
            (n.prototype.unselect = function (i) {
              var o = this;
              if (this.$element.prop("multiple")) {
                if (
                  ((i.selected = !1),
                  null != i.element &&
                    "option" === i.element.tagName.toLowerCase())
                )
                  return (
                    (i.element.selected = !1),
                    void this.$element.trigger("input").trigger("change")
                  );
                this.current(function (e) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var s = e[n].id;
                    s !== i.id && -1 === t.indexOf(s) && t.push(s);
                  }
                  o.$element.val(t),
                    o.$element.trigger("input").trigger("change");
                });
              }
            }),
            (n.prototype.bind = function (e, t) {
              var n = this;
              (this.container = e).on("select", function (e) {
                n.select(e.data);
              }),
                e.on("unselect", function (e) {
                  n.unselect(e.data);
                });
            }),
            (n.prototype.destroy = function () {
              this.$element.find("*").each(function () {
                a.RemoveData(this);
              });
            }),
            (n.prototype.query = function (t, e) {
              var n = [],
                s = this;
              this.$element.children().each(function () {
                var e;
                ("option" !== this.tagName.toLowerCase() &&
                  "optgroup" !== this.tagName.toLowerCase()) ||
                  ((e = l(this)),
                  (e = s.item(e)),
                  null !== (e = s.matches(t, e)) && n.push(e));
              }),
                e({ results: n });
            }),
            (n.prototype.addOptions = function (e) {
              this.$element.append(e);
            }),
            (n.prototype.option = function (e) {
              var t;
              e.children
                ? ((t = document.createElement("optgroup")).label = e.text)
                : void 0 !== (t = document.createElement("option")).textContent
                ? (t.textContent = e.text)
                : (t.innerText = e.text),
                void 0 !== e.id && (t.value = e.id),
                e.disabled && (t.disabled = !0),
                e.selected && (t.selected = !0),
                e.title && (t.title = e.title);
              e = this._normalizeItem(e);
              return (e.element = t), a.StoreData(t, "data", e), l(t);
            }),
            (n.prototype.item = function (e) {
              var t = {};
              if (null != (t = a.GetData(e[0], "data"))) return t;
              var n = e[0];
              if ("option" === n.tagName.toLowerCase())
                t = {
                  id: e.val(),
                  text: e.text(),
                  disabled: e.prop("disabled"),
                  selected: e.prop("selected"),
                  title: e.prop("title"),
                };
              else if ("optgroup" === n.tagName.toLowerCase()) {
                t = {
                  text: e.prop("label"),
                  children: [],
                  title: e.prop("title"),
                };
                for (
                  var s = e.children("option"), i = [], o = 0;
                  o < s.length;
                  o++
                ) {
                  var r = l(s[o]),
                    r = this.item(r);
                  i.push(r);
                }
                t.children = i;
              }
              return (
                ((t = this._normalizeItem(t)).element = e[0]),
                a.StoreData(e[0], "data", t),
                t
              );
            }),
            (n.prototype._normalizeItem = function (e) {
              e !== Object(e) && (e = { id: e, text: e });
              return (
                null != (e = l.extend({}, { text: "" }, e)).id &&
                  (e.id = e.id.toString()),
                null != e.text && (e.text = e.text.toString()),
                null == e._resultId &&
                  e.id &&
                  null != this.container &&
                  (e._resultId = this.generateResultId(this.container, e)),
                l.extend({}, { selected: !1, disabled: !1 }, e)
              );
            }),
            (n.prototype.matches = function (e, t) {
              return this.options.get("matcher")(e, t);
            }),
            n
          );
        }
      ),
      u.define(
        "select2/data/array",
        ["./select", "../utils", "jquery"],
        function (e, t, c) {
          function s(e, t) {
            (this._dataToConvert = t.get("data") || []),
              s.__super__.constructor.call(this, e, t);
          }
          return (
            t.Extend(s, e),
            (s.prototype.bind = function (e, t) {
              s.__super__.bind.call(this, e, t),
                this.addOptions(this.convertToOptions(this._dataToConvert));
            }),
            (s.prototype.select = function (n) {
              var e = this.$element.find("option").filter(function (e, t) {
                return t.value == n.id.toString();
              });
              0 === e.length && ((e = this.option(n)), this.addOptions(e)),
                s.__super__.select.call(this, n);
            }),
            (s.prototype.convertToOptions = function (e) {
              var t = this,
                n = this.$element.find("option"),
                s = n
                  .map(function () {
                    return t.item(c(this)).id;
                  })
                  .get(),
                i = [];
              for (var o = 0; o < e.length; o++) {
                var r,
                  a,
                  l = this._normalizeItem(e[o]);
                0 <= s.indexOf(l.id)
                  ? ((r = n.filter(
                      (function (e) {
                        return function () {
                          return c(this).val() == e.id;
                        };
                      })(l)
                    )),
                    (a = this.item(r)),
                    (a = c.extend(!0, {}, l, a)),
                    (a = this.option(a)),
                    r.replaceWith(a))
                  : ((a = this.option(l)),
                    l.children &&
                      ((l = this.convertToOptions(l.children)), a.append(l)),
                    i.push(a));
              }
              return i;
            }),
            s
          );
        }
      ),
      u.define(
        "select2/data/ajax",
        ["./array", "../utils", "jquery"],
        function (e, t, o) {
          function n(e, t) {
            (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
              null != this.ajaxOptions.processResults &&
                (this.processResults = this.ajaxOptions.processResults),
              n.__super__.constructor.call(this, e, t);
          }
          return (
            t.Extend(n, e),
            (n.prototype._applyDefaults = function (e) {
              var t = {
                data: function (e) {
                  return o.extend({}, e, { q: e.term });
                },
                transport: function (e, t, n) {
                  e = o.ajax(e);
                  return e.then(t), e.fail(n), e;
                },
              };
              return o.extend({}, t, e, !0);
            }),
            (n.prototype.processResults = function (e) {
              return e;
            }),
            (n.prototype.query = function (t, n) {
              var s = this;
              null != this._request &&
                ("function" == typeof this._request.abort &&
                  this._request.abort(),
                (this._request = null));
              var i = o.extend({ type: "GET" }, this.ajaxOptions);
              function e() {
                var e = i.transport(
                  i,
                  function (e) {
                    e = s.processResults(e, t);
                    s.options.get("debug") &&
                      window.console &&
                      console.error &&
                      ((e && e.results && Array.isArray(e.results)) ||
                        console.error(
                          "Select2: The AJAX results did not return an array in the `results` key of the response."
                        )),
                      n(e);
                  },
                  function () {
                    ("status" in e && (0 === e.status || "0" === e.status)) ||
                      s.trigger("results:message", { message: "errorLoading" });
                  }
                );
                s._request = e;
              }
              "function" == typeof i.url &&
                (i.url = i.url.call(this.$element, t)),
                "function" == typeof i.data &&
                  (i.data = i.data.call(this.$element, t)),
                this.ajaxOptions.delay && null != t.term
                  ? (this._queryTimeout &&
                      window.clearTimeout(this._queryTimeout),
                    (this._queryTimeout = window.setTimeout(
                      e,
                      this.ajaxOptions.delay
                    )))
                  : e();
            }),
            n
          );
        }
      ),
      u.define("select2/data/tags", ["jquery"], function (t) {
        function e(e, t, n) {
          var s = n.get("tags"),
            i = n.get("createTag");
          void 0 !== i && (this.createTag = i);
          i = n.get("insertTag");
          if (
            (void 0 !== i && (this.insertTag = i),
            e.call(this, t, n),
            Array.isArray(s))
          )
            for (var o = 0; o < s.length; o++) {
              var r = s[o],
                r = this._normalizeItem(r),
                r = this.option(r);
              this.$element.append(r);
            }
        }
        return (
          (e.prototype.query = function (e, c, u) {
            var d = this;
            this._removeOldTags(),
              null != c.term && null == c.page
                ? e.call(this, c, function e(t, n) {
                    for (var s = t.results, i = 0; i < s.length; i++) {
                      var o = s[i],
                        r =
                          null != o.children && !e({ results: o.children }, !0);
                      if (
                        (o.text || "").toUpperCase() ===
                          (c.term || "").toUpperCase() ||
                        r
                      )
                        return !n && ((t.data = s), void u(t));
                    }
                    if (n) return !0;
                    var a,
                      l = d.createTag(c);
                    null != l &&
                      ((a = d.option(l)).attr("data-select2-tag", "true"),
                      d.addOptions([a]),
                      d.insertTag(s, l)),
                      (t.results = s),
                      u(t);
                  })
                : e.call(this, c, u);
          }),
          (e.prototype.createTag = function (e, t) {
            if (null == t.term) return null;
            t = t.term.trim();
            return "" === t ? null : { id: t, text: t };
          }),
          (e.prototype.insertTag = function (e, t, n) {
            t.unshift(n);
          }),
          (e.prototype._removeOldTags = function (e) {
            this.$element.find("option[data-select2-tag]").each(function () {
              this.selected || t(this).remove();
            });
          }),
          e
        );
      }),
      u.define("select2/data/tokenizer", ["jquery"], function (c) {
        function e(e, t, n) {
          var s = n.get("tokenizer");
          void 0 !== s && (this.tokenizer = s), e.call(this, t, n);
        }
        return (
          (e.prototype.bind = function (e, t, n) {
            e.call(this, t, n),
              (this.$search =
                t.dropdown.$search ||
                t.selection.$search ||
                n.find(".select2-search__field"));
          }),
          (e.prototype.query = function (e, t, n) {
            var s = this;
            t.term = t.term || "";
            var i = this.tokenizer(t, this.options, function (e) {
              var t,
                n = s._normalizeItem(e);
              s.$element.find("option").filter(function () {
                return c(this).val() === n.id;
              }).length ||
                ((t = s.option(n)).attr("data-select2-tag", !0),
                s._removeOldTags(),
                s.addOptions([t])),
                (t = n),
                s.trigger("select", { data: t });
            });
            i.term !== t.term &&
              (this.$search.length &&
                (this.$search.val(i.term), this.$search.trigger("focus")),
              (t.term = i.term)),
              e.call(this, t, n);
          }),
          (e.prototype.tokenizer = function (e, t, n, s) {
            for (
              var i = n.get("tokenSeparators") || [],
                o = t.term,
                r = 0,
                a =
                  this.createTag ||
                  function (e) {
                    return { id: e.term, text: e.term };
                  };
              r < o.length;

            ) {
              var l = o[r];
              -1 !== i.indexOf(l)
                ? ((l = o.substr(0, r)),
                  null != (l = a(c.extend({}, t, { term: l })))
                    ? (s(l), (o = o.substr(r + 1) || ""), (r = 0))
                    : r++)
                : r++;
            }
            return { term: o };
          }),
          e
        );
      }),
      u.define("select2/data/minimumInputLength", [], function () {
        function e(e, t, n) {
          (this.minimumInputLength = n.get("minimumInputLength")),
            e.call(this, t, n);
        }
        return (
          (e.prototype.query = function (e, t, n) {
            (t.term = t.term || ""),
              t.term.length < this.minimumInputLength
                ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                      minimum: this.minimumInputLength,
                      input: t.term,
                      params: t,
                    },
                  })
                : e.call(this, t, n);
          }),
          e
        );
      }),
      u.define("select2/data/maximumInputLength", [], function () {
        function e(e, t, n) {
          (this.maximumInputLength = n.get("maximumInputLength")),
            e.call(this, t, n);
        }
        return (
          (e.prototype.query = function (e, t, n) {
            (t.term = t.term || ""),
              0 < this.maximumInputLength &&
              t.term.length > this.maximumInputLength
                ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                      maximum: this.maximumInputLength,
                      input: t.term,
                      params: t,
                    },
                  })
                : e.call(this, t, n);
          }),
          e
        );
      }),
      u.define("select2/data/maximumSelectionLength", [], function () {
        function e(e, t, n) {
          (this.maximumSelectionLength = n.get("maximumSelectionLength")),
            e.call(this, t, n);
        }
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            e.call(this, t, n),
              t.on("select", function () {
                s._checkIfMaximumSelected();
              });
          }),
          (e.prototype.query = function (e, t, n) {
            var s = this;
            this._checkIfMaximumSelected(function () {
              e.call(s, t, n);
            });
          }),
          (e.prototype._checkIfMaximumSelected = function (e, t) {
            var n = this;
            this.current(function (e) {
              e = null != e ? e.length : 0;
              0 < n.maximumSelectionLength && e >= n.maximumSelectionLength
                ? n.trigger("results:message", {
                    message: "maximumSelected",
                    args: { maximum: n.maximumSelectionLength },
                  })
                : t && t();
            });
          }),
          e
        );
      }),
      u.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
        function n(e, t) {
          (this.$element = e),
            (this.options = t),
            n.__super__.constructor.call(this);
        }
        return (
          e.Extend(n, e.Observable),
          (n.prototype.render = function () {
            var e = t(
              '<span class="select2-dropdown"><span class="select2-results"></span></span>'
            );
            return e.attr("dir", this.options.get("dir")), (this.$dropdown = e);
          }),
          (n.prototype.bind = function () {}),
          (n.prototype.position = function (e, t) {}),
          (n.prototype.destroy = function () {
            this.$dropdown.remove();
          }),
          n
        );
      }),
      u.define("select2/dropdown/search", ["jquery"], function (o) {
        function e() {}
        return (
          (e.prototype.render = function (e) {
            var t = e.call(this),
              n = this.options.get("translations").get("search"),
              e = o(
                '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
              );
            return (
              (this.$searchContainer = e),
              (this.$search = e.find("input")),
              this.$search.prop(
                "autocomplete",
                this.options.get("autocomplete")
              ),
              this.$search.attr("aria-label", n()),
              t.prepend(e),
              t
            );
          }),
          (e.prototype.bind = function (e, t, n) {
            var s = this,
              i = t.id + "-results";
            e.call(this, t, n),
              this.$search.on("keydown", function (e) {
                s.trigger("keypress", e),
                  (s._keyUpPrevented = e.isDefaultPrevented());
              }),
              this.$search.on("input", function (e) {
                o(this).off("keyup");
              }),
              this.$search.on("keyup input", function (e) {
                s.handleSearch(e);
              }),
              t.on("open", function () {
                s.$search.attr("tabindex", 0),
                  s.$search.attr("aria-controls", i),
                  s.$search.trigger("focus"),
                  window.setTimeout(function () {
                    s.$search.trigger("focus");
                  }, 0);
              }),
              t.on("close", function () {
                s.$search.attr("tabindex", -1),
                  s.$search.removeAttr("aria-controls"),
                  s.$search.removeAttr("aria-activedescendant"),
                  s.$search.val(""),
                  s.$search.trigger("blur");
              }),
              t.on("focus", function () {
                t.isOpen() || s.$search.trigger("focus");
              }),
              t.on("results:all", function (e) {
                (null != e.query.term && "" !== e.query.term) ||
                  (s.showSearch(e)
                    ? s.$searchContainer[0].classList.remove(
                        "select2-search--hide"
                      )
                    : s.$searchContainer[0].classList.add(
                        "select2-search--hide"
                      ));
              }),
              t.on("results:focus", function (e) {
                e.data._resultId
                  ? s.$search.attr("aria-activedescendant", e.data._resultId)
                  : s.$search.removeAttr("aria-activedescendant");
              });
          }),
          (e.prototype.handleSearch = function (e) {
            var t;
            this._keyUpPrevented ||
              ((t = this.$search.val()), this.trigger("query", { term: t })),
              (this._keyUpPrevented = !1);
          }),
          (e.prototype.showSearch = function (e, t) {
            return !0;
          }),
          e
        );
      }),
      u.define("select2/dropdown/hidePlaceholder", [], function () {
        function e(e, t, n, s) {
          (this.placeholder = this.normalizePlaceholder(n.get("placeholder"))),
            e.call(this, t, n, s);
        }
        return (
          (e.prototype.append = function (e, t) {
            (t.results = this.removePlaceholder(t.results)), e.call(this, t);
          }),
          (e.prototype.normalizePlaceholder = function (e, t) {
            return "string" == typeof t && (t = { id: "", text: t }), t;
          }),
          (e.prototype.removePlaceholder = function (e, t) {
            for (var n = t.slice(0), s = t.length - 1; 0 <= s; s--) {
              var i = t[s];
              this.placeholder.id === i.id && n.splice(s, 1);
            }
            return n;
          }),
          e
        );
      }),
      u.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
        function e(e, t, n, s) {
          (this.lastParams = {}),
            e.call(this, t, n, s),
            (this.$loadingMore = this.createLoadingMore()),
            (this.loading = !1);
        }
        return (
          (e.prototype.append = function (e, t) {
            this.$loadingMore.remove(),
              (this.loading = !1),
              e.call(this, t),
              this.showLoadingMore(t) &&
                (this.$results.append(this.$loadingMore),
                this.loadMoreIfNeeded());
          }),
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            e.call(this, t, n),
              t.on("query", function (e) {
                (s.lastParams = e), (s.loading = !0);
              }),
              t.on("query:append", function (e) {
                (s.lastParams = e), (s.loading = !0);
              }),
              this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
          }),
          (e.prototype.loadMoreIfNeeded = function () {
            var e = n.contains(document.documentElement, this.$loadingMore[0]);
            !this.loading &&
              e &&
              ((e = this.$results.offset().top + this.$results.outerHeight(!1)),
              this.$loadingMore.offset().top +
                this.$loadingMore.outerHeight(!1) <=
                e + 50 && this.loadMore());
          }),
          (e.prototype.loadMore = function () {
            this.loading = !0;
            var e = n.extend({}, { page: 1 }, this.lastParams);
            e.page++, this.trigger("query:append", e);
          }),
          (e.prototype.showLoadingMore = function (e, t) {
            return t.pagination && t.pagination.more;
          }),
          (e.prototype.createLoadingMore = function () {
            var e = n(
                '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
              ),
              t = this.options.get("translations").get("loadingMore");
            return e.html(t(this.lastParams)), e;
          }),
          e
        );
      }),
      u.define(
        "select2/dropdown/attachBody",
        ["jquery", "../utils"],
        function (u, r) {
          function e(e, t, n) {
            (this.$dropdownParent = u(
              n.get("dropdownParent") || document.body
            )),
              e.call(this, t, n);
          }
          return (
            (e.prototype.bind = function (e, t, n) {
              var s = this;
              e.call(this, t, n),
                t.on("open", function () {
                  s._showDropdown(),
                    s._attachPositioningHandler(t),
                    s._bindContainerResultHandlers(t);
                }),
                t.on("close", function () {
                  s._hideDropdown(), s._detachPositioningHandler(t);
                }),
                this.$dropdownContainer.on("mousedown", function (e) {
                  e.stopPropagation();
                });
            }),
            (e.prototype.destroy = function (e) {
              e.call(this), this.$dropdownContainer.remove();
            }),
            (e.prototype.position = function (e, t, n) {
              t.attr("class", n.attr("class")),
                t[0].classList.remove("select2"),
                t[0].classList.add("select2-container--open"),
                t.css({ position: "absolute", top: -999999 }),
                (this.$container = n);
            }),
            (e.prototype.render = function (e) {
              var t = u("<span></span>"),
                e = e.call(this);
              return t.append(e), (this.$dropdownContainer = t);
            }),
            (e.prototype._hideDropdown = function (e) {
              this.$dropdownContainer.detach();
            }),
            (e.prototype._bindContainerResultHandlers = function (e, t) {
              var n;
              this._containerResultsHandlersBound ||
                ((n = this),
                t.on("results:all", function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                t.on("results:append", function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                t.on("results:message", function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                t.on("select", function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                t.on("unselect", function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                (this._containerResultsHandlersBound = !0));
            }),
            (e.prototype._attachPositioningHandler = function (e, t) {
              var n = this,
                s = "scroll.select2." + t.id,
                i = "resize.select2." + t.id,
                o = "orientationchange.select2." + t.id,
                t = this.$container.parents().filter(r.hasScroll);
              t.each(function () {
                r.StoreData(this, "select2-scroll-position", {
                  x: u(this).scrollLeft(),
                  y: u(this).scrollTop(),
                });
              }),
                t.on(s, function (e) {
                  var t = r.GetData(this, "select2-scroll-position");
                  u(this).scrollTop(t.y);
                }),
                u(window).on(s + " " + i + " " + o, function (e) {
                  n._positionDropdown(), n._resizeDropdown();
                });
            }),
            (e.prototype._detachPositioningHandler = function (e, t) {
              var n = "scroll.select2." + t.id,
                s = "resize.select2." + t.id,
                t = "orientationchange.select2." + t.id;
              this.$container.parents().filter(r.hasScroll).off(n),
                u(window).off(n + " " + s + " " + t);
            }),
            (e.prototype._positionDropdown = function () {
              var e = u(window),
                t = this.$dropdown[0].classList.contains(
                  "select2-dropdown--above"
                ),
                n = this.$dropdown[0].classList.contains(
                  "select2-dropdown--below"
                ),
                s = null,
                i = this.$container.offset();
              i.bottom = i.top + this.$container.outerHeight(!1);
              var o = { height: this.$container.outerHeight(!1) };
              (o.top = i.top), (o.bottom = i.top + o.height);
              var r = this.$dropdown.outerHeight(!1),
                a = e.scrollTop(),
                l = e.scrollTop() + e.height(),
                c = a < i.top - r,
                e = l > i.bottom + r,
                a = { left: i.left, top: o.bottom },
                l = this.$dropdownParent;
              "static" === l.css("position") && (l = l.offsetParent());
              i = { top: 0, left: 0 };
              (u.contains(document.body, l[0]) || l[0].isConnected) &&
                (i = l.offset()),
                (a.top -= i.top),
                (a.left -= i.left),
                t || n || (s = "below"),
                e || !c || t ? !c && e && t && (s = "below") : (s = "above"),
                ("above" == s || (t && "below" !== s)) &&
                  (a.top = o.top - i.top - r),
                null != s &&
                  (this.$dropdown[0].classList.remove(
                    "select2-dropdown--below"
                  ),
                  this.$dropdown[0].classList.remove("select2-dropdown--above"),
                  this.$dropdown[0].classList.add("select2-dropdown--" + s),
                  this.$container[0].classList.remove(
                    "select2-container--below"
                  ),
                  this.$container[0].classList.remove(
                    "select2-container--above"
                  ),
                  this.$container[0].classList.add("select2-container--" + s)),
                this.$dropdownContainer.css(a);
            }),
            (e.prototype._resizeDropdown = function () {
              var e = { width: this.$container.outerWidth(!1) + "px" };
              this.options.get("dropdownAutoWidth") &&
                ((e.minWidth = e.width),
                (e.position = "relative"),
                (e.width = "auto")),
                this.$dropdown.css(e);
            }),
            (e.prototype._showDropdown = function (e) {
              this.$dropdownContainer.appendTo(this.$dropdownParent),
                this._positionDropdown(),
                this._resizeDropdown();
            }),
            e
          );
        }
      ),
      u.define("select2/dropdown/minimumResultsForSearch", [], function () {
        function e(e, t, n, s) {
          (this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
            this.minimumResultsForSearch < 0 &&
              (this.minimumResultsForSearch = 1 / 0),
            e.call(this, t, n, s);
        }
        return (
          (e.prototype.showSearch = function (e, t) {
            return (
              !(
                (function e(t) {
                  for (var n = 0, s = 0; s < t.length; s++) {
                    var i = t[s];
                    i.children ? (n += e(i.children)) : n++;
                  }
                  return n;
                })(t.data.results) < this.minimumResultsForSearch
              ) && e.call(this, t)
            );
          }),
          e
        );
      }),
      u.define("select2/dropdown/selectOnClose", ["../utils"], function (s) {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            e.call(this, t, n),
              t.on("close", function (e) {
                s._handleSelectOnClose(e);
              });
          }),
          (e.prototype._handleSelectOnClose = function (e, t) {
            if (t && null != t.originalSelect2Event) {
              var n = t.originalSelect2Event;
              if ("select" === n._type || "unselect" === n._type) return;
            }
            n = this.getHighlightedResults();
            n.length < 1 ||
              (null != (n = s.GetData(n[0], "data")).element &&
                n.element.selected) ||
              (null == n.element && n.selected) ||
              this.trigger("select", { data: n });
          }),
          e
        );
      }),
      u.define("select2/dropdown/closeOnSelect", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            e.call(this, t, n),
              t.on("select", function (e) {
                s._selectTriggered(e);
              }),
              t.on("unselect", function (e) {
                s._selectTriggered(e);
              });
          }),
          (e.prototype._selectTriggered = function (e, t) {
            var n = t.originalEvent;
            (n && (n.ctrlKey || n.metaKey)) ||
              this.trigger("close", {
                originalEvent: n,
                originalSelect2Event: t,
              });
          }),
          e
        );
      }),
      u.define("select2/dropdown/dropdownCss", ["../utils"], function (n) {
        function e() {}
        return (
          (e.prototype.render = function (e) {
            var t = e.call(this),
              e = this.options.get("dropdownCssClass") || "";
            return (
              -1 !== e.indexOf(":all:") &&
                ((e = e.replace(":all:", "")),
                n.copyNonInternalCssClasses(t[0], this.$element[0])),
              t.addClass(e),
              t
            );
          }),
          e
        );
      }),
      u.define(
        "select2/dropdown/tagsSearchHighlight",
        ["../utils"],
        function (s) {
          function e() {}
          return (
            (e.prototype.highlightFirstItem = function (e) {
              var t = this.$results.find(
                ".select2-results__option--selectable:not(.select2-results__option--selected)"
              );
              if (0 < t.length) {
                var n = t.first(),
                  t = s.GetData(n[0], "data").element;
                if (
                  t &&
                  t.getAttribute &&
                  "true" === t.getAttribute("data-select2-tag")
                )
                  return void n.trigger("mouseenter");
              }
              e.call(this);
            }),
            e
          );
        }
      ),
      u.define("select2/i18n/en", [], function () {
        return {
          errorLoading: function () {
            return "The results could not be loaded.";
          },
          inputTooLong: function (e) {
            var t = e.input.length - e.maximum,
              e = "Please delete " + t + " character";
            return 1 != t && (e += "s"), e;
          },
          inputTooShort: function (e) {
            return (
              "Please enter " +
              (e.minimum - e.input.length) +
              " or more characters"
            );
          },
          loadingMore: function () {
            return "Loading more results…";
          },
          maximumSelected: function (e) {
            var t = "You can only select " + e.maximum + " item";
            return 1 != e.maximum && (t += "s"), t;
          },
          noResults: function () {
            return "No results found";
          },
          searching: function () {
            return "Searching…";
          },
          removeAllItems: function () {
            return "Remove all items";
          },
          removeItem: function () {
            return "Remove item";
          },
          search: function () {
            return "Search";
          },
        };
      }),
      u.define(
        "select2/defaults",
        [
          "jquery",
          "./results",
          "./selection/single",
          "./selection/multiple",
          "./selection/placeholder",
          "./selection/allowClear",
          "./selection/search",
          "./selection/selectionCss",
          "./selection/eventRelay",
          "./utils",
          "./translation",
          "./diacritics",
          "./data/select",
          "./data/array",
          "./data/ajax",
          "./data/tags",
          "./data/tokenizer",
          "./data/minimumInputLength",
          "./data/maximumInputLength",
          "./data/maximumSelectionLength",
          "./dropdown",
          "./dropdown/search",
          "./dropdown/hidePlaceholder",
          "./dropdown/infiniteScroll",
          "./dropdown/attachBody",
          "./dropdown/minimumResultsForSearch",
          "./dropdown/selectOnClose",
          "./dropdown/closeOnSelect",
          "./dropdown/dropdownCss",
          "./dropdown/tagsSearchHighlight",
          "./i18n/en",
        ],
        function (
          l,
          o,
          r,
          a,
          c,
          u,
          d,
          p,
          h,
          f,
          g,
          t,
          m,
          v,
          y,
          _,
          b,
          w,
          $,
          x,
          A,
          D,
          S,
          O,
          L,
          E,
          C,
          T,
          q,
          I,
          e
        ) {
          function n() {
            this.reset();
          }
          return (
            (n.prototype.apply = function (e) {
              var t;
              null == (e = l.extend(!0, {}, this.defaults, e)).dataAdapter &&
                (null != e.ajax
                  ? (e.dataAdapter = y)
                  : null != e.data
                  ? (e.dataAdapter = v)
                  : (e.dataAdapter = m),
                0 < e.minimumInputLength &&
                  (e.dataAdapter = f.Decorate(e.dataAdapter, w)),
                0 < e.maximumInputLength &&
                  (e.dataAdapter = f.Decorate(e.dataAdapter, $)),
                0 < e.maximumSelectionLength &&
                  (e.dataAdapter = f.Decorate(e.dataAdapter, x)),
                e.tags && (e.dataAdapter = f.Decorate(e.dataAdapter, _)),
                (null == e.tokenSeparators && null == e.tokenizer) ||
                  (e.dataAdapter = f.Decorate(e.dataAdapter, b))),
                null == e.resultsAdapter &&
                  ((e.resultsAdapter = o),
                  null != e.ajax &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, O)),
                  null != e.placeholder &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, S)),
                  e.selectOnClose &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, C)),
                  e.tags &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, I))),
                null == e.dropdownAdapter &&
                  (e.multiple
                    ? (e.dropdownAdapter = A)
                    : ((t = f.Decorate(A, D)), (e.dropdownAdapter = t)),
                  0 !== e.minimumResultsForSearch &&
                    (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, E)),
                  e.closeOnSelect &&
                    (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, T)),
                  null != e.dropdownCssClass &&
                    (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, q)),
                  (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, L))),
                null == e.selectionAdapter &&
                  (e.multiple
                    ? (e.selectionAdapter = a)
                    : (e.selectionAdapter = r),
                  null != e.placeholder &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, c)),
                  e.allowClear &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, u)),
                  e.multiple &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, d)),
                  null != e.selectionCssClass &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, p)),
                  (e.selectionAdapter = f.Decorate(e.selectionAdapter, h))),
                (e.language = this._resolveLanguage(e.language)),
                e.language.push("en");
              for (var n = [], s = 0; s < e.language.length; s++) {
                var i = e.language[s];
                -1 === n.indexOf(i) && n.push(i);
              }
              return (
                (e.language = n),
                (e.translations = this._processTranslations(
                  e.language,
                  e.debug
                )),
                e
              );
            }),
            (n.prototype.reset = function () {
              function a(e) {
                return e.replace(/[^\u0000-\u007E]/g, function (e) {
                  return t[e] || e;
                });
              }
              this.defaults = {
                amdLanguageBase: "./i18n/",
                autocomplete: "off",
                closeOnSelect: !0,
                debug: !1,
                dropdownAutoWidth: !1,
                escapeMarkup: f.escapeMarkup,
                language: {},
                matcher: function e(t, n) {
                  if (null == t.term || "" === t.term.trim()) return n;
                  if (n.children && 0 < n.children.length) {
                    for (
                      var s = l.extend(!0, {}, n), i = n.children.length - 1;
                      0 <= i;
                      i--
                    )
                      null == e(t, n.children[i]) && s.children.splice(i, 1);
                    return 0 < s.children.length ? s : e(t, s);
                  }
                  var o = a(n.text).toUpperCase(),
                    r = a(t.term).toUpperCase();
                  return -1 < o.indexOf(r) ? n : null;
                },
                minimumInputLength: 0,
                maximumInputLength: 0,
                maximumSelectionLength: 0,
                minimumResultsForSearch: 0,
                selectOnClose: !1,
                scrollAfterSelect: !1,
                sorter: function (e) {
                  return e;
                },
                templateResult: function (e) {
                  return e.text;
                },
                templateSelection: function (e) {
                  return e.text;
                },
                theme: "default",
                width: "resolve",
              };
            }),
            (n.prototype.applyFromElement = function (e, t) {
              var n = e.language,
                s = this.defaults.language,
                i = t.prop("lang"),
                t = t.closest("[lang]").prop("lang"),
                t = Array.prototype.concat.call(
                  this._resolveLanguage(i),
                  this._resolveLanguage(n),
                  this._resolveLanguage(s),
                  this._resolveLanguage(t)
                );
              return (e.language = t), e;
            }),
            (n.prototype._resolveLanguage = function (e) {
              if (!e) return [];
              if (l.isEmptyObject(e)) return [];
              if (l.isPlainObject(e)) return [e];
              for (
                var t, n = Array.isArray(e) ? e : [e], s = [], i = 0;
                i < n.length;
                i++
              )
                s.push(n[i]),
                  "string" == typeof n[i] &&
                    0 < n[i].indexOf("-") &&
                    ((t = n[i].split("-")[0]), s.push(t));
              return s;
            }),
            (n.prototype._processTranslations = function (e, t) {
              for (var n = new g(), s = 0; s < e.length; s++) {
                var i = new g(),
                  o = e[s];
                if ("string" == typeof o)
                  try {
                    i = g.loadPath(o);
                  } catch (e) {
                    try {
                      (o = this.defaults.amdLanguageBase + o),
                        (i = g.loadPath(o));
                    } catch (e) {
                      t &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          'Select2: The language file for "' +
                            o +
                            '" could not be automatically loaded. A fallback will be used instead.'
                        );
                    }
                  }
                else i = l.isPlainObject(o) ? new g(o) : o;
                n.extend(i);
              }
              return n;
            }),
            (n.prototype.set = function (e, t) {
              var n = {};
              n[l.camelCase(e)] = t;
              n = f._convertData(n);
              l.extend(!0, this.defaults, n);
            }),
            new n()
          );
        }
      ),
      u.define(
        "select2/options",
        ["jquery", "./defaults", "./utils"],
        function (c, n, u) {
          function e(e, t) {
            (this.options = e),
              null != t && this.fromElement(t),
              null != t && (this.options = n.applyFromElement(this.options, t)),
              (this.options = n.apply(this.options));
          }
          return (
            (e.prototype.fromElement = function (e) {
              var t = ["select2"];
              null == this.options.multiple &&
                (this.options.multiple = e.prop("multiple")),
                null == this.options.disabled &&
                  (this.options.disabled = e.prop("disabled")),
                null == this.options.autocomplete &&
                  e.prop("autocomplete") &&
                  (this.options.autocomplete = e.prop("autocomplete")),
                null == this.options.dir &&
                  (e.prop("dir")
                    ? (this.options.dir = e.prop("dir"))
                    : e.closest("[dir]").prop("dir")
                    ? (this.options.dir = e.closest("[dir]").prop("dir"))
                    : (this.options.dir = "ltr")),
                e.prop("disabled", this.options.disabled),
                e.prop("multiple", this.options.multiple),
                u.GetData(e[0], "select2Tags") &&
                  (this.options.debug &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                    ),
                  u.StoreData(e[0], "data", u.GetData(e[0], "select2Tags")),
                  u.StoreData(e[0], "tags", !0)),
                u.GetData(e[0], "ajaxUrl") &&
                  (this.options.debug &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                    ),
                  e.attr("ajax--url", u.GetData(e[0], "ajaxUrl")),
                  u.StoreData(e[0], "ajax-Url", u.GetData(e[0], "ajaxUrl")));
              var n = {};
              function s(e, t) {
                return t.toUpperCase();
              }
              for (var i = 0; i < e[0].attributes.length; i++) {
                var o = e[0].attributes[i].name,
                  r = "data-";
                o.substr(0, r.length) == r &&
                  ((o = o.substring(r.length)),
                  (r = u.GetData(e[0], o)),
                  (n[o.replace(/-([a-z])/g, s)] = r));
              }
              c.fn.jquery &&
                "1." == c.fn.jquery.substr(0, 2) &&
                e[0].dataset &&
                (n = c.extend(!0, {}, e[0].dataset, n));
              var a,
                l = c.extend(!0, {}, u.GetData(e[0]), n);
              for (a in (l = u._convertData(l)))
                -1 < t.indexOf(a) ||
                  (c.isPlainObject(this.options[a])
                    ? c.extend(this.options[a], l[a])
                    : (this.options[a] = l[a]));
              return this;
            }),
            (e.prototype.get = function (e) {
              return this.options[e];
            }),
            (e.prototype.set = function (e, t) {
              this.options[e] = t;
            }),
            e
          );
        }
      ),
      u.define(
        "select2/core",
        ["jquery", "./options", "./utils", "./keys"],
        function (t, i, o, s) {
          var r = function (e, t) {
            null != o.GetData(e[0], "select2") &&
              o.GetData(e[0], "select2").destroy(),
              (this.$element = e),
              (this.id = this._generateId(e)),
              (t = t || {}),
              (this.options = new i(t, e)),
              r.__super__.constructor.call(this);
            var n = e.attr("tabindex") || 0;
            o.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1");
            t = this.options.get("dataAdapter");
            this.dataAdapter = new t(e, this.options);
            n = this.render();
            this._placeContainer(n);
            t = this.options.get("selectionAdapter");
            (this.selection = new t(e, this.options)),
              (this.$selection = this.selection.render()),
              this.selection.position(this.$selection, n);
            t = this.options.get("dropdownAdapter");
            (this.dropdown = new t(e, this.options)),
              (this.$dropdown = this.dropdown.render()),
              this.dropdown.position(this.$dropdown, n);
            n = this.options.get("resultsAdapter");
            (this.results = new n(e, this.options, this.dataAdapter)),
              (this.$results = this.results.render()),
              this.results.position(this.$results, this.$dropdown);
            var s = this;
            this._bindAdapters(),
              this._registerDomEvents(),
              this._registerDataEvents(),
              this._registerSelectionEvents(),
              this._registerDropdownEvents(),
              this._registerResultsEvents(),
              this._registerEvents(),
              this.dataAdapter.current(function (e) {
                s.trigger("selection:update", { data: e });
              }),
              e[0].classList.add("select2-hidden-accessible"),
              e.attr("aria-hidden", "true"),
              this._syncAttributes(),
              o.StoreData(e[0], "select2", this),
              e.data("select2", this);
          };
          return (
            o.Extend(r, o.Observable),
            (r.prototype._generateId = function (e) {
              return (
                "select2-" +
                (null != e.attr("id")
                  ? e.attr("id")
                  : null != e.attr("name")
                  ? e.attr("name") + "-" + o.generateChars(2)
                  : o.generateChars(4)
                ).replace(/(:|\.|\[|\]|,)/g, "")
              );
            }),
            (r.prototype._placeContainer = function (e) {
              e.insertAfter(this.$element);
              var t = this._resolveWidth(
                this.$element,
                this.options.get("width")
              );
              null != t && e.css("width", t);
            }),
            (r.prototype._resolveWidth = function (e, t) {
              var n =
                /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
              if ("resolve" == t) {
                var s = this._resolveWidth(e, "style");
                return null != s ? s : this._resolveWidth(e, "element");
              }
              if ("element" == t) {
                s = e.outerWidth(!1);
                return s <= 0 ? "auto" : s + "px";
              }
              if ("style" != t)
                return "computedstyle" != t
                  ? t
                  : window.getComputedStyle(e[0]).width;
              e = e.attr("style");
              if ("string" != typeof e) return null;
              for (var i = e.split(";"), o = 0, r = i.length; o < r; o += 1) {
                var a = i[o].replace(/\s/g, "").match(n);
                if (null !== a && 1 <= a.length) return a[1];
              }
              return null;
            }),
            (r.prototype._bindAdapters = function () {
              this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container);
            }),
            (r.prototype._registerDomEvents = function () {
              var t = this;
              this.$element.on("change.select2", function () {
                t.dataAdapter.current(function (e) {
                  t.trigger("selection:update", { data: e });
                });
              }),
                this.$element.on("focus.select2", function (e) {
                  t.trigger("focus", e);
                }),
                (this._syncA = o.bind(this._syncAttributes, this)),
                (this._syncS = o.bind(this._syncSubtree, this)),
                (this._observer = new window.MutationObserver(function (e) {
                  t._syncA(), t._syncS(e);
                })),
                this._observer.observe(this.$element[0], {
                  attributes: !0,
                  childList: !0,
                  subtree: !1,
                });
            }),
            (r.prototype._registerDataEvents = function () {
              var n = this;
              this.dataAdapter.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (r.prototype._registerSelectionEvents = function () {
              var n = this,
                s = ["toggle", "focus"];
              this.selection.on("toggle", function () {
                n.toggleDropdown();
              }),
                this.selection.on("focus", function (e) {
                  n.focus(e);
                }),
                this.selection.on("*", function (e, t) {
                  -1 === s.indexOf(e) && n.trigger(e, t);
                });
            }),
            (r.prototype._registerDropdownEvents = function () {
              var n = this;
              this.dropdown.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (r.prototype._registerResultsEvents = function () {
              var n = this;
              this.results.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (r.prototype._registerEvents = function () {
              var n = this;
              this.on("open", function () {
                n.$container[0].classList.add("select2-container--open");
              }),
                this.on("close", function () {
                  n.$container[0].classList.remove("select2-container--open");
                }),
                this.on("enable", function () {
                  n.$container[0].classList.remove(
                    "select2-container--disabled"
                  );
                }),
                this.on("disable", function () {
                  n.$container[0].classList.add("select2-container--disabled");
                }),
                this.on("blur", function () {
                  n.$container[0].classList.remove("select2-container--focus");
                }),
                this.on("query", function (t) {
                  n.isOpen() || n.trigger("open", {}),
                    this.dataAdapter.query(t, function (e) {
                      n.trigger("results:all", { data: e, query: t });
                    });
                }),
                this.on("query:append", function (t) {
                  this.dataAdapter.query(t, function (e) {
                    n.trigger("results:append", { data: e, query: t });
                  });
                }),
                this.on("keypress", function (e) {
                  var t = e.which;
                  n.isOpen()
                    ? t === s.ESC || (t === s.UP && e.altKey)
                      ? (n.close(e), e.preventDefault())
                      : t === s.ENTER || t === s.TAB
                      ? (n.trigger("results:select", {}), e.preventDefault())
                      : t === s.SPACE && e.ctrlKey
                      ? (n.trigger("results:toggle", {}), e.preventDefault())
                      : t === s.UP
                      ? (n.trigger("results:previous", {}), e.preventDefault())
                      : t === s.DOWN &&
                        (n.trigger("results:next", {}), e.preventDefault())
                    : (t === s.ENTER ||
                        t === s.SPACE ||
                        (t === s.DOWN && e.altKey)) &&
                      (n.open(), e.preventDefault());
                });
            }),
            (r.prototype._syncAttributes = function () {
              this.options.set("disabled", this.$element.prop("disabled")),
                this.isDisabled()
                  ? (this.isOpen() && this.close(), this.trigger("disable", {}))
                  : this.trigger("enable", {});
            }),
            (r.prototype._isChangeMutation = function (e) {
              var t = this;
              if (e.addedNodes && 0 < e.addedNodes.length) {
                for (var n = 0; n < e.addedNodes.length; n++)
                  if (e.addedNodes[n].selected) return !0;
              } else {
                if (e.removedNodes && 0 < e.removedNodes.length) return !0;
                if (Array.isArray(e))
                  return e.some(function (e) {
                    return t._isChangeMutation(e);
                  });
              }
              return !1;
            }),
            (r.prototype._syncSubtree = function (e) {
              var e = this._isChangeMutation(e),
                t = this;
              e &&
                this.dataAdapter.current(function (e) {
                  t.trigger("selection:update", { data: e });
                });
            }),
            (r.prototype.trigger = function (e, t) {
              var n = r.__super__.trigger,
                s = {
                  open: "opening",
                  close: "closing",
                  select: "selecting",
                  unselect: "unselecting",
                  clear: "clearing",
                };
              if ((void 0 === t && (t = {}), e in s)) {
                var i = s[e],
                  s = { prevented: !1, name: e, args: t };
                if ((n.call(this, i, s), s.prevented))
                  return void (t.prevented = !0);
              }
              n.call(this, e, t);
            }),
            (r.prototype.toggleDropdown = function () {
              this.isDisabled() || (this.isOpen() ? this.close() : this.open());
            }),
            (r.prototype.open = function () {
              this.isOpen() || this.isDisabled() || this.trigger("query", {});
            }),
            (r.prototype.close = function (e) {
              this.isOpen() && this.trigger("close", { originalEvent: e });
            }),
            (r.prototype.isEnabled = function () {
              return !this.isDisabled();
            }),
            (r.prototype.isDisabled = function () {
              return this.options.get("disabled");
            }),
            (r.prototype.isOpen = function () {
              return this.$container[0].classList.contains(
                "select2-container--open"
              );
            }),
            (r.prototype.hasFocus = function () {
              return this.$container[0].classList.contains(
                "select2-container--focus"
              );
            }),
            (r.prototype.focus = function (e) {
              this.hasFocus() ||
                (this.$container[0].classList.add("select2-container--focus"),
                this.trigger("focus", {}));
            }),
            (r.prototype.enable = function (e) {
              this.options.get("debug") &&
                window.console &&
                console.warn &&
                console.warn(
                  'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                ),
                (null != e && 0 !== e.length) || (e = [!0]);
              e = !e[0];
              this.$element.prop("disabled", e);
            }),
            (r.prototype.data = function () {
              this.options.get("debug") &&
                0 < arguments.length &&
                window.console &&
                console.warn &&
                console.warn(
                  'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                );
              var t = [];
              return (
                this.dataAdapter.current(function (e) {
                  t = e;
                }),
                t
              );
            }),
            (r.prototype.val = function (e) {
              if (
                (this.options.get("debug") &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                  ),
                null == e || 0 === e.length)
              )
                return this.$element.val();
              e = e[0];
              Array.isArray(e) &&
                (e = e.map(function (e) {
                  return e.toString();
                })),
                this.$element.val(e).trigger("input").trigger("change");
            }),
            (r.prototype.destroy = function () {
              o.RemoveData(this.$container[0]),
                this.$container.remove(),
                this._observer.disconnect(),
                (this._observer = null),
                (this._syncA = null),
                (this._syncS = null),
                this.$element.off(".select2"),
                this.$element.attr(
                  "tabindex",
                  o.GetData(this.$element[0], "old-tabindex")
                ),
                this.$element[0].classList.remove("select2-hidden-accessible"),
                this.$element.attr("aria-hidden", "false"),
                o.RemoveData(this.$element[0]),
                this.$element.removeData("select2"),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                (this.dataAdapter = null),
                (this.selection = null),
                (this.dropdown = null),
                (this.results = null);
            }),
            (r.prototype.render = function () {
              var e = t(
                '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
              );
              return (
                e.attr("dir", this.options.get("dir")),
                (this.$container = e),
                this.$container[0].classList.add(
                  "select2-container--" + this.options.get("theme")
                ),
                o.StoreData(e[0], "element", this.$element),
                e
              );
            }),
            r
          );
        }
      ),
      u.define("select2/dropdown/attachContainer", [], function () {
        function e(e, t, n) {
          e.call(this, t, n);
        }
        return (
          (e.prototype.position = function (e, t, n) {
            n.find(".dropdown-wrapper").append(t),
              t[0].classList.add("select2-dropdown--below"),
              n[0].classList.add("select2-container--below");
          }),
          e
        );
      }),
      u.define("select2/dropdown/stopPropagation", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            e.call(this, t, n);
            this.$dropdown.on(
              [
                "blur",
                "change",
                "click",
                "dblclick",
                "focus",
                "focusin",
                "focusout",
                "input",
                "keydown",
                "keyup",
                "keypress",
                "mousedown",
                "mouseenter",
                "mouseleave",
                "mousemove",
                "mouseover",
                "mouseup",
                "search",
                "touchend",
                "touchstart",
              ].join(" "),
              function (e) {
                e.stopPropagation();
              }
            );
          }),
          e
        );
      }),
      u.define("select2/selection/stopPropagation", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            e.call(this, t, n);
            this.$selection.on(
              [
                "blur",
                "change",
                "click",
                "dblclick",
                "focus",
                "focusin",
                "focusout",
                "input",
                "keydown",
                "keyup",
                "keypress",
                "mousedown",
                "mouseenter",
                "mouseleave",
                "mousemove",
                "mouseover",
                "mouseup",
                "search",
                "touchend",
                "touchstart",
              ].join(" "),
              function (e) {
                e.stopPropagation();
              }
            );
          }),
          e
        );
      }),
      (a = function (u) {
        var d,
          p,
          e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
          t =
            "onwheel" in document || 9 <= document.documentMode
              ? ["wheel"]
              : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
          h = Array.prototype.slice;
        if (u.event.fixHooks)
          for (var n = e.length; n; )
            u.event.fixHooks[e[--n]] = u.event.mouseHooks;
        var f = (u.event.special.mousewheel = {
          version: "3.1.12",
          setup: function () {
            if (this.addEventListener)
              for (var e = t.length; e; ) this.addEventListener(t[--e], s, !1);
            else this.onmousewheel = s;
            u.data(this, "mousewheel-line-height", f.getLineHeight(this)),
              u.data(this, "mousewheel-page-height", f.getPageHeight(this));
          },
          teardown: function () {
            if (this.removeEventListener)
              for (var e = t.length; e; )
                this.removeEventListener(t[--e], s, !1);
            else this.onmousewheel = null;
            u.removeData(this, "mousewheel-line-height"),
              u.removeData(this, "mousewheel-page-height");
          },
          getLineHeight: function (e) {
            var t = u(e),
              e = t["offsetParent" in u.fn ? "offsetParent" : "parent"]();
            return (
              e.length || (e = u("body")),
              parseInt(e.css("fontSize"), 10) ||
                parseInt(t.css("fontSize"), 10) ||
                16
            );
          },
          getPageHeight: function (e) {
            return u(e).height();
          },
          settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
        });
        function s(e) {
          var t,
            n = e || window.event,
            s = h.call(arguments, 1),
            i = 0,
            o = 0,
            r = 0,
            a = 0,
            l = 0,
            c = 0;
          if (
            ((e = u.event.fix(n)),
            (e.type = "mousewheel"),
            "detail" in n && (r = -1 * n.detail),
            "wheelDelta" in n && (r = n.wheelDelta),
            "wheelDeltaY" in n && (r = n.wheelDeltaY),
            "wheelDeltaX" in n && (o = -1 * n.wheelDeltaX),
            "axis" in n &&
              n.axis === n.HORIZONTAL_AXIS &&
              ((o = -1 * r), (r = 0)),
            (i = 0 === r ? o : r),
            "deltaY" in n && (i = r = -1 * n.deltaY),
            "deltaX" in n && ((o = n.deltaX), 0 === r && (i = -1 * o)),
            0 !== r || 0 !== o)
          )
            return (
              1 === n.deltaMode
                ? ((i *= t = u.data(this, "mousewheel-line-height")),
                  (r *= t),
                  (o *= t))
                : 2 === n.deltaMode &&
                  ((i *= t = u.data(this, "mousewheel-page-height")),
                  (r *= t),
                  (o *= t)),
              (a = Math.max(Math.abs(r), Math.abs(o))),
              (!p || a < p) && m(n, (p = a)) && (p /= 40),
              m(n, a) && ((i /= 40), (o /= 40), (r /= 40)),
              (i = Math[1 <= i ? "floor" : "ceil"](i / p)),
              (o = Math[1 <= o ? "floor" : "ceil"](o / p)),
              (r = Math[1 <= r ? "floor" : "ceil"](r / p)),
              f.settings.normalizeOffset &&
                this.getBoundingClientRect &&
                ((a = this.getBoundingClientRect()),
                (l = e.clientX - a.left),
                (c = e.clientY - a.top)),
              (e.deltaX = o),
              (e.deltaY = r),
              (e.deltaFactor = p),
              (e.offsetX = l),
              (e.offsetY = c),
              (e.deltaMode = 0),
              s.unshift(e, i, o, r),
              d && clearTimeout(d),
              (d = setTimeout(g, 200)),
              (u.event.dispatch || u.event.handle).apply(this, s)
            );
        }
        function g() {
          p = null;
        }
        function m(e, t) {
          return (
            f.settings.adjustOldDeltas &&
            "mousewheel" === e.type &&
            t % 120 == 0
          );
        }
        u.fn.extend({
          mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
          },
          unmousewheel: function (e) {
            return this.unbind("mousewheel", e);
          },
        });
      }),
      "function" == typeof u.define && u.define.amd
        ? u.define("jquery-mousewheel", ["jquery"], a)
        : "object" == typeof exports
        ? (module.exports = a)
        : a(t),
      u.define(
        "jquery.select2",
        [
          "jquery",
          "jquery-mousewheel",
          "./select2/core",
          "./select2/defaults",
          "./select2/utils",
        ],
        function (i, e, o, t, r) {
          var a;
          return (
            null == i.fn.select2 &&
              ((a = ["open", "close", "destroy"]),
              (i.fn.select2 = function (t) {
                if ("object" == typeof (t = t || {}))
                  return (
                    this.each(function () {
                      var e = i.extend(!0, {}, t);
                      new o(i(this), e);
                    }),
                    this
                  );
                if ("string" != typeof t)
                  throw new Error("Invalid arguments for Select2: " + t);
                var n,
                  s = Array.prototype.slice.call(arguments, 1);
                return (
                  this.each(function () {
                    var e = r.GetData(this, "select2");
                    null == e &&
                      window.console &&
                      console.error &&
                      console.error(
                        "The select2('" +
                          t +
                          "') method was called on an element that is not using Select2."
                      ),
                      (n = e[t].apply(e, s));
                  }),
                  -1 < a.indexOf(t) ? this : n
                );
              })),
            null == i.fn.select2.defaults && (i.fn.select2.defaults = t),
            o
          );
        }
      ),
      { define: u.define, require: u.require });
  function b(e, t) {
    return s.call(e, t);
  }
  function l(e, t) {
    var n,
      s,
      i,
      o,
      r,
      a,
      l,
      c,
      u,
      d,
      p = t && t.split("/"),
      h = v.map,
      f = (h && h["*"]) || {};
    if (e) {
      for (
        t = (e = e.split("/")).length - 1,
          v.nodeIdCompat && _.test(e[t]) && (e[t] = e[t].replace(_, "")),
          "." === e[0].charAt(0) &&
            p &&
            (e = p.slice(0, p.length - 1).concat(e)),
          c = 0;
        c < e.length;
        c++
      )
        "." === (d = e[c])
          ? (e.splice(c, 1), --c)
          : ".." === d &&
            (0 === c ||
              (1 === c && ".." === e[2]) ||
              ".." === e[c - 1] ||
              (0 < c && (e.splice(c - 1, 2), (c -= 2))));
      e = e.join("/");
    }
    if ((p || f) && h) {
      for (c = (n = e.split("/")).length; 0 < c; --c) {
        if (((s = n.slice(0, c).join("/")), p))
          for (u = p.length; 0 < u; --u)
            if (((i = h[p.slice(0, u).join("/")]), (i = i && i[s]))) {
              (o = i), (r = c);
              break;
            }
        if (o) break;
        !a && f && f[s] && ((a = f[s]), (l = c));
      }
      !o && a && ((o = a), (r = l)),
        o && (n.splice(0, r, o), (e = n.join("/")));
    }
    return e;
  }
  function w(t, n) {
    return function () {
      var e = i.call(arguments, 0);
      return (
        "string" != typeof e[0] && 1 === e.length && e.push(null),
        r.apply(p, e.concat([t, n]))
      );
    };
  }
  function x(e) {
    var t;
    if (
      (b(m, e) && ((t = m[e]), delete m[e], (y[e] = !0), o.apply(p, t)),
      !b(g, e) && !b(y, e))
    )
      throw new Error("No " + e);
    return g[e];
  }
  function c(e) {
    var t,
      n = e ? e.indexOf("!") : -1;
    return (
      -1 < n && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
      [t, e]
    );
  }
  function A(e) {
    return e ? c(e) : [];
  }
  var u = a.require("jquery.select2");
  return (t.fn.select2.amd = a), u;
});

//NioApp
var NioApp = (function (n, l) {
  "use strict";
  var t = l(window),
    s = l("body"),
    a = "nio-theme",
    e = "lite-dash";
  function d(t, a) {
    return (
      Object.keys(a).forEach(function (e) {
        t[e] = a[e];
      }),
      t
    );
  }
  return (
    (l.fn.exists = function () {
      return 0 < this.length;
    }),
    (l.fn.csskey = function (e, t) {
      for (
        var a = t ? t + "-" : "", o = e ? e.split(" ") : "", s = 0;
        s < o.length;
        s++
      )
        o[s] = a + o[s];
      return o.toString().replace(",", " ");
    }),
    (n.BS = {}),
    (n.TGL = {}),
    (n.Ani = {}),
    (n.Addons = {}),
    (n.Slider = {}),
    (n.Picker = {}),
    (n.Win = { height: t.height(), width: t.outerWidth() }),
    (n.Break = {
      mb: 420,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1540,
      any: 1 / 0,
    }),
    (n.Host = {
      name: window.location.hostname,
      locat: e.slice(-4) + e.slice(0, 4),
    }),
    (n.isDark = !(!s.hasClass("dark-mode") && "dark" !== s.data("theme"))),
    (n.State = {
      isRTL: !(!s.hasClass("has-rtl") && "rtl" !== s.attr("dir")),
      isTouch: "ontouchstart" in document.documentElement,
      isMobile: !!navigator.userAgent.match(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i
      ),
      asMobile: n.Win.width < n.Break.md,
      asServe: n.Host.name.split(".").indexOf(n.Host.locat),
    }),
    (n.hexRGB = function (e, t) {
      t = t || 1;
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))
        return (
          (e = [
            ((e =
              "0x" +
              (e =
                3 === (e = e.substring(1).split("")).length
                  ? [e[0], e[0], e[1], e[1], e[2], e[2]]
                  : e).join("")) >>
              16) &
              255,
            (e >> 8) & 255,
            255 & e,
          ].join(",")),
          1 <= t ? "rgba(" + e + ")" : "rgba(" + e + "," + t + ")"
        );
      throw new Error("bad hex");
    }),
    (n.StateUpdate = function () {
      (n.Win = { height: t.height(), width: t.outerWidth() }),
        (n.State.asMobile = n.Win.width < n.Break.md);
    }),
    (n.ClassInit = function () {
      function e() {
        !0 === n.State.asMobile
          ? s.addClass("as-mobile")
          : s.removeClass("as-mobile");
      }
      !0 === n.State.isTouch ? s.addClass("has-touch") : s.addClass("no-touch"),
        e(),
        !0 === n.State.isRTL && s.addClass("has-rtl"),
        s.addClass("nk-" + a),
        t.on("resize", e);
    }),
    (n.ColorBG = function () {
      function e(e, t) {
        var e = l(e),
          t = t || "bg",
          a = e.data(t);
        "" !== a &&
          ("bg-color" === t
            ? e.css("background-color", a)
            : "bg-image" === t
            ? e.css("background-image", 'url("' + a + '")')
            : e.css("background", a));
      }
      l("[data-bg]").each(function () {
        e(this, "bg");
      }),
        l("[data-bg-color]").each(function () {
          e(this, "bg-color");
        }),
        l("[data-bg-image]").each(function () {
          e(this, "bg-image");
        });
    }),
    (n.ColorTXT = function () {
      l("[data-color]").each(function () {
        var e, t;
        (t = "color"),
          (e = l((e = this))),
          "" !== (t = e.data(t || "color")) && e.css("color", t);
      });
    }),
    (n.BreakClass = function (e, t, a) {
      var o = e || ".header-menu",
        s = t || n.Break.md,
        e = { timeOut: 1e3, classAdd: "mobile-menu" },
        i = a ? d(e, a) : e,
        t = i.ignore || !1;
      if (t && l(o).hasClass(t)) return !1;
      n.Win.width < s
        ? setTimeout(function () {
            n.Win.width < s && l(o).addClass(i.classAdd);
          }, i.timeOut)
        : l(o).removeClass(i.classAdd);
    }),
    (n.Passcode = function (e, t) {
      var a = { showClass: "is-shown", hideClass: "is-hidden" },
        o = t ? d(a, t) : a;
      l(e).exists() &&
        l(e).on("click", function (e) {
          var t = l(this),
            a = t.data("target"),
            a = l("#" + a);
          e.preventDefault(),
            a.hasClass(o.showClass)
              ? (t.add(a).addClass(o.hideClass).removeClass(o.showClass),
                a.attr("type", "password"))
              : (t.add(a).addClass(o.showClass).removeClass(o.hideClass),
                a.attr("type", "text"));
        });
    }),
    (n.LinkOff = function (e) {
      l(e).on("click", function (e) {
        e.preventDefault();
      });
    }),
    (n.SetHW = function (e, t) {
      (t = "height" == t || "h" == t ? "height" : "width"),
        (e = e || "[data-" + t + "]");
      l(e).exists() &&
        l(e).each(function () {
          l(this).css(t, l(this).data(t));
        });
    }),
    (n.AddInBody = function (e, t) {
      var a = { prefix: "nk-", class: "", has: "has" },
        t = t ? d(a, t) : a,
        a = e.replace(".", "").replace(t.prefix, ""),
        e = a;
      (t.prefix = !1 !== t.prefix ? t.prefix : ""),
        (t.has = "" !== t.has ? t.has + "-" : ""),
        (e = "" !== t.class ? t.class : t.has + e),
        l("." + t.prefix + a).exists() && !s.hasClass(e) && s.addClass(e);
    }),
    (n.Toggle = {
      trigger: function (e, t) {
        var a = {
            self: e,
            active: "active",
            content: "expanded",
            data: "content",
            olay: "toggle-overlay",
            speed: 400,
          },
          t = t ? d(a, t) : a,
          a = l("[data-target=" + e + "]"),
          e = l("[data-" + t.data + "=" + e + "]"),
          o = e.data("toggle-body");
        e.data("toggle-overlay") && (t.overlay = t.olay),
          o && (t.body = "toggle-shown"),
          e.hasClass(t.content)
            ? (a.removeClass(t.active),
              (1 == t.toggle ? e.slideUp(t.speed) : e).removeClass(t.content))
            : (a.addClass(t.active),
              (1 == t.toggle ? e.slideDown(t.speed) : e).addClass(t.content)),
          t.body && s.toggleClass(t.body),
          t.overlay && this.overlay(e, t.overlay, t);
      },
      removed: function (e, t) {
        var a = {
            self: e,
            active: "active",
            content: "expanded",
            body: "",
            data: "content",
            olay: "toggle-overlay",
          },
          t = t ? d(a, t) : a,
          a = l("[data-target=" + e + "]"),
          e = l("[data-" + t.data + "=" + e + "]"),
          o = e.data("toggle-body");
        e.data("toggle-overlay") && (t.overlay = t.olay),
          o && (t.body = "toggle-shown"),
          (a.hasClass(t.active) || e.hasClass(t.content)) &&
            (a.removeClass(t.active),
            e.removeClass(t.content),
            !0 === t.toggle && e.slideUp(t.speed)),
          t.body && s.hasClass(t.body) && s.removeClass(t.body),
          t.close &&
            (!0 === t.close.profile && this.closeProfile(e),
            !0 === t.close.menu && this.closeMenu(e)),
          t.overlay && this.overlayRemove(t.overlay);
      },
      overlay: function (e, t, a) {
        var o;
        !0 === a.break &&
          ((o = l(e).data("toggle-screen")), (a.break = n.Break[o])),
          l(e).hasClass(a.content) && n.Win.width < a.break
            ? l(e).after(
                '<div class="' + t + '" data-target="' + a.self + '"></div>'
              )
            : this.overlayRemove(t);
      },
      overlayRemove: function (e) {
        l("." + e)
          .fadeOut(300)
          .remove();
      },
      dropMenu: function (e, t) {
        var a = {
            active: "active",
            self: "link-toggle",
            child: "menu-sub",
            speed: 400,
          },
          t = t ? d(a, t) : a,
          a = l(e).parent(),
          e = a.children("." + t.child);
        (t.speed =
          5 < e.children().length
            ? t.speed + 20 * e.children().length
            : t.speed),
          e
            .slideToggle(t.speed)
            .find("." + t.child)
            .slideUp(t.speed),
          a
            .toggleClass(t.active)
            .siblings()
            .removeClass(t.active)
            .find("." + t.child)
            .slideUp(t.speed);
      },
      closeProfile: function (e) {
        var t = l(e).find(".nk-profile-toggle.active"),
          e = l(e).find(".nk-profile-content.expanded");
        t.exists() &&
          (t.removeClass("active"), e.slideUp().removeClass("expanded"));
      },
      closeMenu: function (e) {
        e = l(e).find(".nk-menu-item.active");
        e.exists() && e.removeClass("active").find(".nk-menu-sub").slideUp();
      },
    }),
    (n.BS.tooltip = function (e, t) {
      var a = { boundary: "window", trigger: "hover" },
        o = t ? d(a, t) : a;
      l(e).exists() &&
        [].slice
          .call(document.querySelectorAll(e || '[data-bs-toggle="tooltip"]'))
          .map(function (e) {
            return new bootstrap.Tooltip(e, o);
          });
    }),
    (n.BS.menutip = function (e) {
      n.BS.tooltip(e, { boundary: "window", placement: "right" });
    }),
    (n.BS.popover = function (e) {
      [].slice
        .call(document.querySelectorAll(e || '[data-bs-toggle="popover"]'))
        .map(function (e) {
          return new bootstrap.Popover(e);
        });
    }),
    (n.BS.progress = function (e) {
      l(e).exists() &&
        l(e).each(function () {
          l(this).css("width", l(this).data("progress") + "%");
        });
    }),
    (n.BS.modalfix = function (e) {
      e = e || ".modal";
      l(e).exists() &&
        "function" == typeof l.fn.modal &&
        l(e).on("shown.bs.modal", function () {
          s.hasClass("modal-open") || s.addClass("modal-open");
        });
    }),
    (n.BS.fileinput = function (e) {
      l(e).exists() &&
        l(e).each(function () {
          var t = l(this).next().text(),
            a = [];
          l(this).on("change", function () {
            for (var e = 0; e < this.files.length; e++)
              a[e] = this.files[e].name;
            (t = a ? a.join(", ") : t), l(this).next().html(t);
          });
        });
    }),
    (n.Picker.date = function (e, t) {
      l(e).exists() &&
        "function" == typeof l.fn.datepicker &&
        l(e).each(function () {
          var e = l(this).data("date-format"),
            e = {
              format: "" !== e ? e : "mm/dd/yyyy",
              maxViewMode: 2,
              clearBtn: !0,
              autoclose: !0,
              todayHighlight: !0,
              rtl: n.State.isRTL,
            },
            e = t ? d(e, t) : e;
          l(this)
            .datepicker(e)
            .on("changeDate", function (e) {
              0 !== e.dates.length
                ? l(this).parent().addClass("focused")
                : l(this).parent().removeClass("focused");
            });
        });
    }),
    (n.Picker.dob = function (e, t) {
      var a = { startView: 2, todayHighlight: !1 },
        t = t ? d(a, t) : a;
      n.Picker.date(e, t);
    }),
    (n.Picker.time = function (e, a) {
      l(e).exists() &&
        "function" == typeof l.fn.timepicker &&
        l(e).each(function () {
          l(this).parent().addClass("has-timepicker");
          var e = l(this).data("time-format"),
            t = l(this).data("time-interval"),
            e = {
              timeFormat: "" !== e ? e : "HH:mm",
              interval: "" !== t ? t : 15,
              change: function (e) {
                !1 !== e
                  ? l(this).parent().addClass("focused")
                  : l(this).parent().removeClass("focused");
              },
            },
            t = a ? d(e, a) : e;
          l(this).timepicker(t);
        });
    }),
    (n.Select2 = function (e, a) {
      l(e).exists() &&
        "function" == typeof l.fn.select2 &&
        l(e).each(function () {
          var e = l(this),
            t = {
              placeholder: e.data("placeholder"),
              clear: e.data("clear"),
              search: e.data("search"),
              width: e.data("width"),
              theme: e.data("theme"),
              ui: e.data("ui"),
            },
            e =
              ((t.ui = t.ui ? " " + e.csskey(t.ui, "select2") : ""),
              {
                theme: t.theme ? t.theme + " " + t.ui : "default" + t.ui,
                allowClear: t.clear || !1,
                placeholder: t.placeholder || "",
                dropdownAutoWidth: !(!t.width || "auto" !== t.width),
                minimumResultsForSearch: t.search && "on" === t.search ? 1 : -1,
                dir: n.State.isRTL ? "rtl" : "ltr",
              }),
            t = a ? d(e, a) : e;
          l(this).select2(t);
        });
    }),
    (n.coreInit = function () {
      n.coms.onResize.push(n.StateUpdate), n.coms.docReady.push(n.ClassInit);
    }),
    n.coreInit(),
    n
  );
})(
  (NioApp = (function (e, t, a) {
    "use strict";
    var o = {
        AppInfo: { name: "NioApp", version: "1.0.8", author: "Softnio" },
        Package: { name: "DashLite", version: "2.3" },
      },
      s = {
        docReady: [],
        docReadyDefer: [],
        winLoad: [],
        winLoadDefer: [],
        onResize: [],
        onResizeDefer: [],
      };
    function i(t) {
      (t = void 0 === t ? e : t),
        s.docReady.concat(s.docReadyDefer).forEach(function (e) {
          null != e && e(t);
        });
    }
    function n(t) {
      (t = "object" == typeof t ? e : t),
        s.winLoad.concat(s.winLoadDefer).forEach(function (e) {
          null != e && e(t);
        });
    }
    function l(t) {
      (t = "object" == typeof t ? e : t),
        s.onResize.concat(s.onResizeDefer).forEach(function (e) {
          null != e && e(t);
        });
    }
    return (
      e(a).ready(i),
      e(t).on("load", n),
      e(t).on("resize", l),
      (o.coms = s),
      (o.docReady = i),
      (o.winLoad = n),
      (o.onResize = l),
      o
    );
  })(jQuery, window, document)),
  jQuery
);

//SweetAlert
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).Sweetalert2 = t());
})(this, function () {
  "use strict";
  const t = "SweetAlert2:",
    y = (e) => e.charAt(0).toUpperCase() + e.slice(1),
    i = (e) => Array.prototype.slice.call(e),
    a = (e) => {
      console.warn(
        "".concat(t, " ").concat("object" == typeof e ? e.join(" ") : e)
      );
    },
    v = (e) => {
      console.error("".concat(t, " ").concat(e));
    },
    n = [],
    o = (e, t) => {
      (e = '"'
        .concat(
          e,
          '" is deprecated and will be removed in the next major release. Please use "'
        )
        .concat(t, '" instead.')),
        n.includes(e) || (n.push(e), a(e));
    },
    w = (e) => ("function" == typeof e ? e() : e),
    C = (e) => e && "function" == typeof e.toPromise,
    k = (e) => (C(e) ? e.toPromise() : Promise.resolve(e)),
    A = (e) => e && Promise.resolve(e) === e,
    r = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: !1,
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show",
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide",
      },
      customClass: {},
      target: "body",
      color: void 0,
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showDenyButton: !1,
      showCancelButton: !1,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusDeny: !1,
      focusCancel: !1,
      returnFocus: !0,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: !1,
      showLoaderOnDeny: !1,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: !1,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: !1,
      validationMessage: void 0,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: !0,
    },
    s = [
      "allowEscapeKey",
      "allowOutsideClick",
      "background",
      "buttonsStyling",
      "cancelButtonAriaLabel",
      "cancelButtonColor",
      "cancelButtonText",
      "closeButtonAriaLabel",
      "closeButtonHtml",
      "color",
      "confirmButtonAriaLabel",
      "confirmButtonColor",
      "confirmButtonText",
      "currentProgressStep",
      "customClass",
      "denyButtonAriaLabel",
      "denyButtonColor",
      "denyButtonText",
      "didClose",
      "didDestroy",
      "footer",
      "hideClass",
      "html",
      "icon",
      "iconColor",
      "iconHtml",
      "imageAlt",
      "imageHeight",
      "imageUrl",
      "imageWidth",
      "preConfirm",
      "preDeny",
      "progressSteps",
      "returnFocus",
      "reverseButtons",
      "showCancelButton",
      "showCloseButton",
      "showConfirmButton",
      "showDenyButton",
      "text",
      "title",
      "titleText",
      "willClose",
    ],
    c = {},
    P = [
      "allowOutsideClick",
      "allowEnterKey",
      "backdrop",
      "focusConfirm",
      "focusDeny",
      "focusCancel",
      "returnFocus",
      "heightAuto",
      "keydownListenerCapture",
    ],
    B = (e) => Object.prototype.hasOwnProperty.call(r, e),
    x = (e) => -1 !== s.indexOf(e),
    E = (e) => c[e],
    T = (e) => {
      !e.backdrop &&
        e.allowOutsideClick &&
        a(
          '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
        );
      for (const n in e)
        (t = n),
          B(t) || a('Unknown parameter "'.concat(t, '"')),
          e.toast &&
            ((t = n),
            P.includes(t) &&
              a('The parameter "'.concat(t, '" is incompatible with toasts'))),
          (t = n),
          E(t) && o(t, E(t));
      var t;
    };
  var e = (e) => {
    const t = {};
    for (const n in e) t[e[n]] = "swal2-" + e[n];
    return t;
  };
  const p = e([
      "container",
      "shown",
      "height-auto",
      "iosfix",
      "popup",
      "modal",
      "no-backdrop",
      "no-transition",
      "toast",
      "toast-shown",
      "show",
      "hide",
      "close",
      "title",
      "html-container",
      "actions",
      "confirm",
      "deny",
      "cancel",
      "default-outline",
      "footer",
      "icon",
      "icon-content",
      "image",
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "label",
      "textarea",
      "inputerror",
      "input-label",
      "validation-message",
      "progress-steps",
      "active-progress-step",
      "progress-step",
      "progress-step-line",
      "loader",
      "loading",
      "styled",
      "top",
      "top-start",
      "top-end",
      "top-left",
      "top-right",
      "center",
      "center-start",
      "center-end",
      "center-left",
      "center-right",
      "bottom",
      "bottom-start",
      "bottom-end",
      "bottom-left",
      "bottom-right",
      "grow-row",
      "grow-column",
      "grow-fullscreen",
      "rtl",
      "timer-progress-bar",
      "timer-progress-bar-container",
      "scrollbar-measure",
      "icon-success",
      "icon-warning",
      "icon-info",
      "icon-question",
      "icon-error",
    ]),
    S = e(["success", "warning", "info", "question", "error"]),
    m = () => document.body.querySelector(".".concat(p.container)),
    L = (e) => {
      const t = m();
      return t ? t.querySelector(e) : null;
    },
    O = (e) => L(".".concat(e)),
    g = () => O(p.popup),
    j = () => O(p.icon),
    M = () => O(p.title),
    D = () => O(p["html-container"]),
    I = () => O(p.image),
    H = () => O(p["progress-steps"]),
    q = () => O(p["validation-message"]),
    V = () => L(".".concat(p.actions, " .").concat(p.confirm)),
    N = () => L(".".concat(p.actions, " .").concat(p.deny));
  const R = () => L(".".concat(p.loader)),
    F = () => L(".".concat(p.actions, " .").concat(p.cancel)),
    U = () => O(p.actions),
    W = () => O(p.footer),
    z = () => O(p["timer-progress-bar"]),
    _ = () => O(p.close),
    K = () => {
      const e = i(
        g().querySelectorAll(
          '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
        )
      ).sort((e, t) => {
        (e = parseInt(e.getAttribute("tabindex"))),
          (t = parseInt(t.getAttribute("tabindex")));
        return t < e ? 1 : e < t ? -1 : 0;
      });
      var t = i(
        g().querySelectorAll(
          '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
        )
      ).filter((e) => "-1" !== e.getAttribute("tabindex"));
      return ((t) => {
        const n = [];
        for (let e = 0; e < t.length; e++)
          -1 === n.indexOf(t[e]) && n.push(t[e]);
        return n;
      })(e.concat(t)).filter((e) => ce(e));
    },
    Y = () =>
      !$(document.body, p["toast-shown"]) &&
      !$(document.body, p["no-backdrop"]),
    Z = () => g() && $(g(), p.toast);
  function J(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
    const n = z();
    ce(n) &&
      (t && ((n.style.transition = "none"), (n.style.width = "100%")),
      setTimeout(() => {
        (n.style.transition = "width ".concat(e / 1e3, "s linear")),
          (n.style.width = "0%");
      }, 10));
  }
  const X = { previousBodyPadding: null },
    l = (t, e) => {
      if (((t.textContent = ""), e)) {
        const n = new DOMParser(),
          o = n.parseFromString(e, "text/html");
        i(o.querySelector("head").childNodes).forEach((e) => {
          t.appendChild(e);
        }),
          i(o.querySelector("body").childNodes).forEach((e) => {
            t.appendChild(e);
          });
      }
    },
    $ = (t, e) => {
      if (!e) return !1;
      var n = e.split(/\s+/);
      for (let e = 0; e < n.length; e++)
        if (!t.classList.contains(n[e])) return !1;
      return !0;
    },
    G = (t, n) => {
      i(t.classList).forEach((e) => {
        Object.values(p).includes(e) ||
          Object.values(S).includes(e) ||
          Object.values(n.showClass).includes(e) ||
          t.classList.remove(e);
      });
    },
    Q = (e, t, n) => {
      if ((G(e, t), t.customClass && t.customClass[n])) {
        if ("string" != typeof t.customClass[n] && !t.customClass[n].forEach)
          return a(
            "Invalid type of customClass."
              .concat(n, '! Expected string or iterable object, got "')
              .concat(typeof t.customClass[n], '"')
          );
        u(e, t.customClass[n]);
      }
    },
    ee = (e, t) => {
      if (!t) return null;
      switch (t) {
        case "select":
        case "textarea":
        case "file":
          return e.querySelector(".".concat(p.popup, " > .").concat(p[t]));
        case "checkbox":
          return e.querySelector(
            ".".concat(p.popup, " > .").concat(p.checkbox, " input")
          );
        case "radio":
          return (
            e.querySelector(
              ".".concat(p.popup, " > .").concat(p.radio, " input:checked")
            ) ||
            e.querySelector(
              ".".concat(p.popup, " > .").concat(p.radio, " input:first-child")
            )
          );
        case "range":
          return e.querySelector(
            ".".concat(p.popup, " > .").concat(p.range, " input")
          );
        default:
          return e.querySelector(".".concat(p.popup, " > .").concat(p.input));
      }
    },
    te = (e) => {
      var t;
      e.focus(),
        "file" !== e.type && ((t = e.value), (e.value = ""), (e.value = t));
    },
    ne = (e, t, n) => {
      e &&
        t &&
        (t = "string" == typeof t ? t.split(/\s+/).filter(Boolean) : t).forEach(
          (t) => {
            Array.isArray(e)
              ? e.forEach((e) => {
                  n ? e.classList.add(t) : e.classList.remove(t);
                })
              : n
              ? e.classList.add(t)
              : e.classList.remove(t);
          }
        );
    },
    u = (e, t) => {
      ne(e, t, !0);
    },
    oe = (e, t) => {
      ne(e, t, !1);
    },
    ie = (e, t) => {
      var n = i(e.childNodes);
      for (let e = 0; e < n.length; e++) if ($(n[e], t)) return n[e];
    },
    ae = (e, t, n) => {
      (n = n === "".concat(parseInt(n)) ? parseInt(n) : n) || 0 === parseInt(n)
        ? (e.style[t] = "number" == typeof n ? "".concat(n, "px") : n)
        : e.style.removeProperty(t);
    },
    d = function (e) {
      e.style.display =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "flex";
    },
    h = (e) => {
      e.style.display = "none";
    },
    re = (e, t, n, o) => {
      const i = e.querySelector(t);
      i && (i.style[n] = o);
    },
    se = (e, t, n) => {
      t ? d(e, n) : h(e);
    },
    ce = (e) =>
      !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
    le = () => !ce(V()) && !ce(N()) && !ce(F()),
    ue = (e) => !!(e.scrollHeight > e.clientHeight),
    de = (e) => {
      const t = window.getComputedStyle(e);
      var e = parseFloat(t.getPropertyValue("animation-duration") || "0"),
        n = parseFloat(t.getPropertyValue("transition-duration") || "0");
      return 0 < e || 0 < n;
    },
    pe = () => "undefined" == typeof window || "undefined" == typeof document,
    me = 100,
    f = {},
    ge = () => {
      f.previousActiveElement && f.previousActiveElement.focus
        ? (f.previousActiveElement.focus(), (f.previousActiveElement = null))
        : document.body && document.body.focus();
    },
    he = (o) =>
      new Promise((e) => {
        if (!o) return e();
        var t = window.scrollX,
          n = window.scrollY;
        (f.restoreFocusTimeout = setTimeout(() => {
          ge(), e();
        }, me)),
          window.scrollTo(t, n);
      }),
    fe = '\n <div aria-labelledby="'
      .concat(p.title, '" aria-describedby="')
      .concat(p["html-container"], '" class="')
      .concat(p.popup, '" tabindex="-1">\n   <button type="button" class="')
      .concat(p.close, '"></button>\n   <ul class="')
      .concat(p["progress-steps"], '"></ul>\n   <div class="')
      .concat(p.icon, '"></div>\n   <img class="')
      .concat(p.image, '" />\n   <h2 class="')
      .concat(p.title, '" id="')
      .concat(p.title, '"></h2>\n   <div class="')
      .concat(p["html-container"], '" id="')
      .concat(p["html-container"], '"></div>\n   <input class="')
      .concat(p.input, '" />\n   <input type="file" class="')
      .concat(p.file, '" />\n   <div class="')
      .concat(
        p.range,
        '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="'
      )
      .concat(p.select, '"></select>\n   <div class="')
      .concat(p.radio, '"></div>\n   <label for="')
      .concat(p.checkbox, '" class="')
      .concat(
        p.checkbox,
        '">\n     <input type="checkbox" />\n     <span class="'
      )
      .concat(p.label, '"></span>\n   </label>\n   <textarea class="')
      .concat(p.textarea, '"></textarea>\n   <div class="')
      .concat(p["validation-message"], '" id="')
      .concat(p["validation-message"], '"></div>\n   <div class="')
      .concat(p.actions, '">\n     <div class="')
      .concat(p.loader, '"></div>\n     <button type="button" class="')
      .concat(p.confirm, '"></button>\n     <button type="button" class="')
      .concat(p.deny, '"></button>\n     <button type="button" class="')
      .concat(p.cancel, '"></button>\n   </div>\n   <div class="')
      .concat(p.footer, '"></div>\n   <div class="')
      .concat(p["timer-progress-bar-container"], '">\n     <div class="')
      .concat(p["timer-progress-bar"], '"></div>\n   </div>\n </div>\n')
      .replace(/(^|\n)\s*/g, ""),
    be = () => {
      const e = m();
      return (
        !!e &&
        (e.remove(),
        oe(
          [document.documentElement, document.body],
          [p["no-backdrop"], p["toast-shown"], p["has-column"]]
        ),
        !0)
      );
    },
    ye = () => {
      f.currentInstance.resetValidationMessage();
    },
    ve = () => {
      const e = g(),
        t = ie(e, p.input),
        n = ie(e, p.file),
        o = e.querySelector(".".concat(p.range, " input")),
        i = e.querySelector(".".concat(p.range, " output")),
        a = ie(e, p.select),
        r = e.querySelector(".".concat(p.checkbox, " input")),
        s = ie(e, p.textarea);
      (t.oninput = ye),
        (n.onchange = ye),
        (a.onchange = ye),
        (r.onchange = ye),
        (s.oninput = ye),
        (o.oninput = () => {
          ye(), (i.value = o.value);
        }),
        (o.onchange = () => {
          ye(), (o.nextSibling.value = o.value);
        });
    },
    we = (e) => ("string" == typeof e ? document.querySelector(e) : e),
    Ce = (e) => {
      const t = g();
      t.setAttribute("role", e.toast ? "alert" : "dialog"),
        t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
        e.toast || t.setAttribute("aria-modal", "true");
    },
    ke = (e) => {
      "rtl" === window.getComputedStyle(e).direction && u(m(), p.rtl);
    },
    Ae = (e, t) => {
      if (e instanceof HTMLElement) t.appendChild(e);
      else if ("object" == typeof e) {
        var n = e,
          o = t;
        if (n.jquery) Pe(o, n);
        else l(o, n.toString());
      } else e && l(t, e);
    },
    Pe = (t, n) => {
      if (((t.textContent = ""), 0 in n))
        for (let e = 0; e in n; e++) t.appendChild(n[e].cloneNode(!0));
      else t.appendChild(n.cloneNode(!0));
    },
    Be = (() => {
      if (pe()) return !1;
      var e = document.createElement("div"),
        t = {
          WebkitAnimation: "webkitAnimationEnd",
          animation: "animationend",
        };
      for (const n in t)
        if (Object.prototype.hasOwnProperty.call(t, n) && void 0 !== e.style[n])
          return t[n];
      return !1;
    })(),
    xe = (e, t) => {
      var n,
        o,
        i,
        a,
        r,
        s = U(),
        c = R();
      (t.showConfirmButton || t.showDenyButton || t.showCancelButton ? d : h)(
        s
      ),
        Q(s, t, "actions"),
        (s = s),
        (n = c),
        (o = t),
        (i = V()),
        (a = N()),
        (r = F()),
        Ee(i, "confirm", o),
        Ee(a, "deny", o),
        Ee(r, "cancel", o),
        (function (e, t, n, o) {
          if (!o.buttonsStyling) return oe([e, t, n], p.styled);
          u([e, t, n], p.styled),
            o.confirmButtonColor &&
              ((e.style.backgroundColor = o.confirmButtonColor),
              u(e, p["default-outline"]));
          o.denyButtonColor &&
            ((t.style.backgroundColor = o.denyButtonColor),
            u(t, p["default-outline"]));
          o.cancelButtonColor &&
            ((n.style.backgroundColor = o.cancelButtonColor),
            u(n, p["default-outline"]));
        })(i, a, r, o),
        o.reverseButtons &&
          (o.toast
            ? (s.insertBefore(r, i), s.insertBefore(a, i))
            : (s.insertBefore(r, n),
              s.insertBefore(a, n),
              s.insertBefore(i, n))),
        l(c, t.loaderHtml),
        Q(c, t, "loader");
    };
  function Ee(e, t, n) {
    se(e, n["show".concat(y(t), "Button")], "inline-block"),
      l(e, n["".concat(t, "ButtonText")]),
      e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]),
      (e.className = p[t]),
      Q(e, n, "".concat(t, "Button")),
      u(e, n["".concat(t, "ButtonClass")]);
  }
  const Te = (e, t) => {
    var n,
      o,
      i = m();
    i &&
      ((o = i),
      "string" == typeof (n = t.backdrop)
        ? (o.style.background = n)
        : n || u([document.documentElement, document.body], p["no-backdrop"]),
      (o = i),
      (n = t.position) in p
        ? u(o, p[n])
        : (a('The "position" parameter is not valid, defaulting to "center"'),
          u(o, p.center)),
      (n = i),
      !(o = t.grow) ||
        "string" != typeof o ||
        ((o = "grow-".concat(o)) in p && u(n, p[o])),
      Q(i, t, "container"));
  };
  var b = {
    awaitingPromise: new WeakMap(),
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap(),
  };
  const Se = [
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "textarea",
    ],
    Le = (e, r) => {
      const s = g();
      var t,
        e = b.innerParams.get(e);
      const c = !e || r.input !== e.input;
      Se.forEach((e) => {
        var t = p[e];
        const n = ie(s, t);
        {
          var o = r.inputAttributes;
          const i = ee(g(), e);
          if (i) {
            Oe(i);
            for (const a in o) i.setAttribute(a, o[a]);
          }
        }
        (n.className = t), c && h(n);
      }),
        r.input &&
          (c &&
            ((e) => {
              if (!Ie[e.input])
                return v(
                  'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
                    e.input,
                    '"'
                  )
                );
              const t = De(e.input),
                n = Ie[e.input](t, e);
              d(n),
                setTimeout(() => {
                  te(n);
                });
            })(r),
          (e = r),
          (t = De(e.input)),
          e.customClass && u(t, e.customClass.input));
    },
    Oe = (t) => {
      for (let e = 0; e < t.attributes.length; e++) {
        var n = t.attributes[e].name;
        ["type", "value", "style"].includes(n) || t.removeAttribute(n);
      }
    },
    je = (e, t) => {
      (e.placeholder && !t.inputPlaceholder) ||
        (e.placeholder = t.inputPlaceholder);
    },
    Me = (e, t, n) => {
      if (n.inputLabel) {
        e.id = p.input;
        const i = document.createElement("label");
        var o = p["input-label"];
        i.setAttribute("for", e.id),
          (i.className = o),
          u(i, n.customClass.inputLabel),
          (i.innerText = n.inputLabel),
          t.insertAdjacentElement("beforebegin", i);
      }
    },
    De = (e) => {
      e = p[e] || p.input;
      return ie(g(), e);
    },
    Ie = {},
    He =
      ((Ie.text =
        Ie.email =
        Ie.password =
        Ie.number =
        Ie.tel =
        Ie.url =
          (e, t) => (
            "string" == typeof t.inputValue || "number" == typeof t.inputValue
              ? (e.value = t.inputValue)
              : A(t.inputValue) ||
                a(
                  'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                    typeof t.inputValue,
                    '"'
                  )
                ),
            Me(e, e, t),
            je(e, t),
            (e.type = t.input),
            e
          )),
      (Ie.file = (e, t) => (Me(e, e, t), je(e, t), e)),
      (Ie.range = (e, t) => {
        const n = e.querySelector("input"),
          o = e.querySelector("output");
        return (
          (n.value = t.inputValue),
          (n.type = t.input),
          (o.value = t.inputValue),
          Me(n, e, t),
          e
        );
      }),
      (Ie.select = (e, t) => {
        if (((e.textContent = ""), t.inputPlaceholder)) {
          const n = document.createElement("option");
          l(n, t.inputPlaceholder),
            (n.value = ""),
            (n.disabled = !0),
            (n.selected = !0),
            e.appendChild(n);
        }
        return Me(e, e, t), e;
      }),
      (Ie.radio = (e) => ((e.textContent = ""), e)),
      (Ie.checkbox = (e, t) => {
        const n = ee(g(), "checkbox");
        (n.value = "1"),
          (n.id = p.checkbox),
          (n.checked = Boolean(t.inputValue));
        var o = e.querySelector("span");
        return l(o, t.inputPlaceholder), e;
      }),
      (Ie.textarea = (n, e) => {
        (n.value = e.inputValue), je(n, e), Me(n, n, e);
        return (
          setTimeout(() => {
            if ("MutationObserver" in window) {
              const t = parseInt(window.getComputedStyle(g()).width);
              new MutationObserver(() => {
                var e =
                  n.offsetWidth +
                  ((e = n),
                  parseInt(window.getComputedStyle(e).marginLeft) +
                    parseInt(window.getComputedStyle(e).marginRight));
                e > t
                  ? (g().style.width = "".concat(e, "px"))
                  : (g().style.width = null);
              }).observe(n, { attributes: !0, attributeFilter: ["style"] });
            }
          }),
          n
        );
      }),
      (e, t) => {
        const n = D();
        Q(n, t, "htmlContainer"),
          t.html
            ? (Ae(t.html, n), d(n, "block"))
            : t.text
            ? ((n.textContent = t.text), d(n, "block"))
            : h(n),
          Le(e, t);
      }),
    qe = (e, t) => {
      var n = W();
      se(n, t.footer), t.footer && Ae(t.footer, n), Q(n, t, "footer");
    },
    Ve = (e, t) => {
      const n = _();
      l(n, t.closeButtonHtml),
        Q(n, t, "closeButton"),
        se(n, t.showCloseButton),
        n.setAttribute("aria-label", t.closeButtonAriaLabel);
    },
    Ne = (e, t) => {
      var e = b.innerParams.get(e),
        n = j();
      return e && t.icon === e.icon
        ? (ze(n, t), void Re(n, t))
        : t.icon || t.iconHtml
        ? t.icon && -1 === Object.keys(S).indexOf(t.icon)
          ? (v(
              'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                t.icon,
                '"'
              )
            ),
            h(n))
          : (d(n), ze(n, t), Re(n, t), void u(n, t.showClass.icon))
        : h(n);
    },
    Re = (e, t) => {
      for (const n in S) t.icon !== n && oe(e, S[n]);
      u(e, S[t.icon]), _e(e, t), Fe(), Q(e, t, "icon");
    },
    Fe = () => {
      const e = g();
      var t = window.getComputedStyle(e).getPropertyValue("background-color");
      const n = e.querySelectorAll(
        "[class^=swal2-success-circular-line], .swal2-success-fix"
      );
      for (let e = 0; e < n.length; e++) n[e].style.backgroundColor = t;
    },
    Ue =
      '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',
    We =
      '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',
    ze = (e, t) => {
      var n;
      (e.textContent = ""),
        t.iconHtml
          ? l(e, Ke(t.iconHtml))
          : "success" === t.icon
          ? l(e, Ue)
          : "error" === t.icon
          ? l(e, We)
          : ((n = { question: "?", warning: "!", info: "i" }),
            l(e, Ke(n[t.icon])));
    },
    _e = (e, t) => {
      if (t.iconColor) {
        (e.style.color = t.iconColor), (e.style.borderColor = t.iconColor);
        for (const n of [
          ".swal2-success-line-tip",
          ".swal2-success-line-long",
          ".swal2-x-mark-line-left",
          ".swal2-x-mark-line-right",
        ])
          re(e, n, "backgroundColor", t.iconColor);
        re(e, ".swal2-success-ring", "borderColor", t.iconColor);
      }
    },
    Ke = (e) =>
      '<div class="'.concat(p["icon-content"], '">').concat(e, "</div>"),
    Ye = (e, t) => {
      const n = I();
      if (!t.imageUrl) return h(n);
      d(n, ""),
        n.setAttribute("src", t.imageUrl),
        n.setAttribute("alt", t.imageAlt),
        ae(n, "width", t.imageWidth),
        ae(n, "height", t.imageHeight),
        (n.className = p.image),
        Q(n, t, "image");
    },
    Ze = (e, o) => {
      const i = H();
      if (!o.progressSteps || 0 === o.progressSteps.length) return h(i);
      d(i),
        (i.textContent = ""),
        o.currentProgressStep >= o.progressSteps.length &&
          a(
            "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
          ),
        o.progressSteps.forEach((e, t) => {
          (e = e),
            (n = document.createElement("li")),
            u(n, p["progress-step"]),
            l(n, e);
          var n,
            e = n;
          i.appendChild(e),
            t === o.currentProgressStep && u(e, p["active-progress-step"]),
            t !== o.progressSteps.length - 1 &&
              ((n = ((e) => {
                const t = document.createElement("li");
                return (
                  u(t, p["progress-step-line"]),
                  e.progressStepsDistance &&
                    (t.style.width = e.progressStepsDistance),
                  t
                );
              })(o)),
              i.appendChild(n));
        });
    },
    Je = (e, t) => {
      const n = M();
      se(n, t.title || t.titleText, "block"),
        t.title && Ae(t.title, n),
        t.titleText && (n.innerText = t.titleText),
        Q(n, t, "title");
    },
    Xe = (e, t) => {
      var n = m();
      const o = g();
      t.toast
        ? (ae(n, "width", t.width),
          (o.style.width = "100%"),
          o.insertBefore(R(), j()))
        : ae(o, "width", t.width),
        ae(o, "padding", t.padding),
        t.color && (o.style.color = t.color),
        t.background && (o.style.background = t.background),
        h(q());
      n = o;
      ((n.className = ""
        .concat(p.popup, " ")
        .concat(ce(n) ? t.showClass.popup : "")),
      t.toast)
        ? (u([document.documentElement, document.body], p["toast-shown"]),
          u(n, p.toast))
        : u(n, p.modal);
      Q(n, t, "popup"), "string" == typeof t.customClass && u(n, t.customClass);
      t.icon && u(n, p["icon-".concat(t.icon)]);
    },
    $e = (e, t) => {
      Xe(e, t),
        Te(e, t),
        Ze(e, t),
        Ne(e, t),
        Ye(e, t),
        Je(e, t),
        Ve(e, t),
        He(e, t),
        xe(e, t),
        qe(e, t),
        "function" == typeof t.didRender && t.didRender(g());
    },
    Ge = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer",
    }),
    Qe = () => {
      const e = i(document.body.children);
      e.forEach((e) => {
        e === m() ||
          e.contains(m()) ||
          (e.hasAttribute("aria-hidden") &&
            e.setAttribute(
              "data-previous-aria-hidden",
              e.getAttribute("aria-hidden")
            ),
          e.setAttribute("aria-hidden", "true"));
      });
    },
    et = () => {
      const e = i(document.body.children);
      e.forEach((e) => {
        e.hasAttribute("data-previous-aria-hidden")
          ? (e.setAttribute(
              "aria-hidden",
              e.getAttribute("data-previous-aria-hidden")
            ),
            e.removeAttribute("data-previous-aria-hidden"))
          : e.removeAttribute("aria-hidden");
      });
    },
    tt = ["swal-title", "swal-html", "swal-footer"],
    nt = (e) => {
      const n = {};
      return (
        i(e.querySelectorAll("swal-param")).forEach((e) => {
          lt(e, ["name", "value"]);
          var t = e.getAttribute("name"),
            e = e.getAttribute("value");
          "boolean" == typeof r[t] && "false" === e && (n[t] = !1),
            "object" == typeof r[t] && (n[t] = JSON.parse(e));
        }),
        n
      );
    },
    ot = (e) => {
      const n = {};
      return (
        i(e.querySelectorAll("swal-button")).forEach((e) => {
          lt(e, ["type", "color", "aria-label"]);
          var t = e.getAttribute("type");
          (n["".concat(t, "ButtonText")] = e.innerHTML),
            (n["show".concat(y(t), "Button")] = !0),
            e.hasAttribute("color") &&
              (n["".concat(t, "ButtonColor")] = e.getAttribute("color")),
            e.hasAttribute("aria-label") &&
              (n["".concat(t, "ButtonAriaLabel")] =
                e.getAttribute("aria-label"));
        }),
        n
      );
    },
    it = (e) => {
      const t = {},
        n = e.querySelector("swal-image");
      return (
        n &&
          (lt(n, ["src", "width", "height", "alt"]),
          n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")),
          n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")),
          n.hasAttribute("height") &&
            (t.imageHeight = n.getAttribute("height")),
          n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))),
        t
      );
    },
    at = (e) => {
      const t = {},
        n = e.querySelector("swal-icon");
      return (
        n &&
          (lt(n, ["type", "color"]),
          n.hasAttribute("type") && (t.icon = n.getAttribute("type")),
          n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")),
          (t.iconHtml = n.innerHTML)),
        t
      );
    },
    rt = (e) => {
      const n = {},
        t = e.querySelector("swal-input");
      t &&
        (lt(t, ["type", "label", "placeholder", "value"]),
        (n.input = t.getAttribute("type") || "text"),
        t.hasAttribute("label") && (n.inputLabel = t.getAttribute("label")),
        t.hasAttribute("placeholder") &&
          (n.inputPlaceholder = t.getAttribute("placeholder")),
        t.hasAttribute("value") && (n.inputValue = t.getAttribute("value")));
      e = e.querySelectorAll("swal-input-option");
      return (
        e.length &&
          ((n.inputOptions = {}),
          i(e).forEach((e) => {
            lt(e, ["value"]);
            var t = e.getAttribute("value"),
              e = e.innerHTML;
            n.inputOptions[t] = e;
          })),
        n
      );
    },
    st = (e, t) => {
      const n = {};
      for (const o in t) {
        const i = t[o],
          a = e.querySelector(i);
        a && (lt(a, []), (n[i.replace(/^swal-/, "")] = a.innerHTML.trim()));
      }
      return n;
    },
    ct = (e) => {
      const t = tt.concat([
        "swal-param",
        "swal-button",
        "swal-image",
        "swal-icon",
        "swal-input",
        "swal-input-option",
      ]);
      i(e.children).forEach((e) => {
        e = e.tagName.toLowerCase();
        -1 === t.indexOf(e) && a("Unrecognized element <".concat(e, ">"));
      });
    },
    lt = (t, n) => {
      i(t.attributes).forEach((e) => {
        -1 === n.indexOf(e.name) &&
          a([
            'Unrecognized attribute "'
              .concat(e.name, '" on <')
              .concat(t.tagName.toLowerCase(), ">."),
            "".concat(
              n.length
                ? "Allowed attributes are: ".concat(n.join(", "))
                : "To set the value, use HTML within the element."
            ),
          ]);
      });
    };
  var ut = {
    email: (e, t) =>
      /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)
        ? Promise.resolve()
        : Promise.resolve(t || "Invalid email address"),
    url: (e, t) =>
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
        e
      )
        ? Promise.resolve()
        : Promise.resolve(t || "Invalid URL"),
  };
  function dt(e) {
    (t = e).inputValidator ||
      Object.keys(ut).forEach((e) => {
        t.input === e && (t.inputValidator = ut[e]);
      }),
      e.showLoaderOnConfirm &&
        !e.preConfirm &&
        a(
          "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
        ),
      ((n = e).target &&
        ("string" != typeof n.target || document.querySelector(n.target)) &&
        ("string" == typeof n.target || n.target.appendChild)) ||
        (a('Target parameter is not valid, defaulting to "body"'),
        (n.target = "body")),
      "string" == typeof e.title &&
        (e.title = e.title.split("\n").join("<br />"));
    var t,
      n = e,
      e = be();
    if (pe()) v("SweetAlert2 requires document to initialize");
    else {
      const o = document.createElement("div"),
        i =
          ((o.className = p.container),
          e && u(o, p["no-transition"]),
          l(o, fe),
          we(n.target));
      i.appendChild(o), Ce(n), ke(i), ve();
    }
  }
  class pt {
    constructor(e, t) {
      (this.callback = e),
        (this.remaining = t),
        (this.running = !1),
        this.start();
    }
    start() {
      return (
        this.running ||
          ((this.running = !0),
          (this.started = new Date()),
          (this.id = setTimeout(this.callback, this.remaining))),
        this.remaining
      );
    }
    stop() {
      return (
        this.running &&
          ((this.running = !1),
          clearTimeout(this.id),
          (this.remaining -= new Date().getTime() - this.started.getTime())),
        this.remaining
      );
    }
    increase(e) {
      var t = this.running;
      return (
        t && this.stop(),
        (this.remaining += e),
        t && this.start(),
        this.remaining
      );
    }
    getTimerLeft() {
      return this.running && (this.stop(), this.start()), this.remaining;
    }
    isRunning() {
      return this.running;
    }
  }
  const mt = () => {
      null === X.previousBodyPadding &&
        document.body.scrollHeight > window.innerHeight &&
        ((X.previousBodyPadding = parseInt(
          window
            .getComputedStyle(document.body)
            .getPropertyValue("padding-right")
        )),
        (document.body.style.paddingRight = "".concat(
          X.previousBodyPadding +
            (() => {
              const e = document.createElement("div");
              (e.className = p["scrollbar-measure"]),
                document.body.appendChild(e);
              var t = e.getBoundingClientRect().width - e.clientWidth;
              return document.body.removeChild(e), t;
            })(),
          "px"
        )));
    },
    gt = () => {
      null !== X.previousBodyPadding &&
        ((document.body.style.paddingRight = "".concat(
          X.previousBodyPadding,
          "px"
        )),
        (X.previousBodyPadding = null));
    },
    ht = () => {
      var e =
        (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
        ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints);
      if (e && !$(document.body, p.iosfix)) {
        var t,
          e = document.body.scrollTop;
        (document.body.style.top = "".concat(-1 * e, "px")),
          u(document.body, p.iosfix);
        {
          const n = m();
          let t;
          (n.ontouchstart = (e) => {
            t = ft(e);
          }),
            (n.ontouchmove = (e) => {
              t && (e.preventDefault(), e.stopPropagation());
            });
        }
        {
          const o = navigator.userAgent,
            i = !!o.match(/iPad/i) || !!o.match(/iPhone/i),
            a = !!o.match(/WebKit/i),
            r = i && a && !o.match(/CriOS/i);
          r &&
            ((t = 44),
            g().scrollHeight > window.innerHeight - 44 &&
              (m().style.paddingBottom = "".concat(44, "px")));
        }
      }
    },
    ft = (e) => {
      var t,
        n = e.target,
        o = m();
      return (
        !(
          ((t = e).touches &&
            t.touches.length &&
            "stylus" === t.touches[0].touchType) ||
          ((t = e).touches && 1 < t.touches.length)
        ) &&
        (n === o ||
          !(
            ue(o) ||
            "INPUT" === n.tagName ||
            "TEXTAREA" === n.tagName ||
            (ue(D()) && D().contains(n))
          ))
      );
    },
    bt = () => {
      var e;
      $(document.body, p.iosfix) &&
        ((e = parseInt(document.body.style.top, 10)),
        oe(document.body, p.iosfix),
        (document.body.style.top = ""),
        (document.body.scrollTop = -1 * e));
    },
    yt = 10,
    vt = (e) => {
      const t = g();
      if (e.target === t) {
        const n = m();
        t.removeEventListener(Be, vt), (n.style.overflowY = "auto");
      }
    },
    wt = (e, t) => {
      Be && de(t)
        ? ((e.style.overflowY = "hidden"), t.addEventListener(Be, vt))
        : (e.style.overflowY = "auto");
    },
    Ct = (e, t, n) => {
      ht(),
        t && "hidden" !== n && mt(),
        setTimeout(() => {
          e.scrollTop = 0;
        });
    },
    kt = (e, t, n) => {
      u(e, n.showClass.backdrop),
        t.style.setProperty("opacity", "0", "important"),
        d(t, "grid"),
        setTimeout(() => {
          u(t, n.showClass.popup), t.style.removeProperty("opacity");
        }, yt),
        u([document.documentElement, document.body], p.shown),
        n.heightAuto &&
          n.backdrop &&
          !n.toast &&
          u([document.documentElement, document.body], p["height-auto"]);
    },
    At = (e) => {
      let t = g();
      t || new vn(), (t = g());
      var n = R();
      if (Z()) h(j());
      else {
        var o = t;
        const i = U(),
          a = R();
        !e && ce(V()) && (e = V());
        d(i),
          e && (h(e), a.setAttribute("data-button-to-replace", e.className));
        a.parentNode.insertBefore(a, e), u([o, i], p.loading);
      }
      d(n),
        t.setAttribute("data-loading", !0),
        t.setAttribute("aria-busy", !0),
        t.focus();
    },
    Pt = (t, n) => {
      const o = g(),
        i = (e) => xt[n.input](o, Et(e), n);
      C(n.inputOptions) || A(n.inputOptions)
        ? (At(V()),
          k(n.inputOptions).then((e) => {
            t.hideLoading(), i(e);
          }))
        : "object" == typeof n.inputOptions
        ? i(n.inputOptions)
        : v(
            "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
              typeof n.inputOptions
            )
          );
    },
    Bt = (t, n) => {
      const o = t.getInput();
      h(o),
        k(n.inputValue)
          .then((e) => {
            (o.value =
              "number" === n.input ? parseFloat(e) || 0 : "".concat(e)),
              d(o),
              o.focus(),
              t.hideLoading();
          })
          .catch((e) => {
            v("Error in inputValue promise: ".concat(e)),
              (o.value = ""),
              d(o),
              o.focus(),
              t.hideLoading();
          });
    },
    xt = {
      select: (e, t, i) => {
        const a = ie(e, p.select),
          r = (e, t, n) => {
            const o = document.createElement("option");
            (o.value = n),
              l(o, t),
              (o.selected = Tt(n, i.inputValue)),
              e.appendChild(o);
          };
        t.forEach((e) => {
          var t = e[0];
          const n = e[1];
          if (Array.isArray(n)) {
            const o = document.createElement("optgroup");
            (o.label = t),
              (o.disabled = !1),
              a.appendChild(o),
              n.forEach((e) => r(o, e[1], e[0]));
          } else r(a, n, t);
        }),
          a.focus();
      },
      radio: (e, t, a) => {
        const r = ie(e, p.radio),
          n =
            (t.forEach((e) => {
              var t = e[0],
                e = e[1];
              const n = document.createElement("input"),
                o = document.createElement("label"),
                i =
                  ((n.type = "radio"),
                  (n.name = p.radio),
                  (n.value = t),
                  Tt(t, a.inputValue) && (n.checked = !0),
                  document.createElement("span"));
              l(i, e),
                (i.className = p.label),
                o.appendChild(n),
                o.appendChild(i),
                r.appendChild(o);
            }),
            r.querySelectorAll("input"));
        n.length && n[0].focus();
      },
    },
    Et = (n) => {
      const o = [];
      return (
        "undefined" != typeof Map && n instanceof Map
          ? n.forEach((e, t) => {
              let n = e;
              "object" == typeof n && (n = Et(n)), o.push([t, n]);
            })
          : Object.keys(n).forEach((e) => {
              let t = n[e];
              "object" == typeof t && (t = Et(t)), o.push([e, t]);
            }),
        o
      );
    },
    Tt = (e, t) => t && t.toString() === e.toString(),
    St = (e, t) => {
      var n = b.innerParams.get(e);
      if (!n.input)
        return v(
          'The "input" parameter is needed to be set when using returnInputValueOn'.concat(
            y(t)
          )
        );
      var o = ((e, t) => {
        const n = e.getInput();
        if (!n) return null;
        switch (t.input) {
          case "checkbox":
            return n.checked ? 1 : 0;
          case "radio":
            return (o = n).checked ? o.value : null;
          case "file":
            return (o = n).files.length
              ? null !== o.getAttribute("multiple")
                ? o.files
                : o.files[0]
              : null;
          default:
            return t.inputAutoTrim ? n.value.trim() : n.value;
        }
        var o;
      })(e, n);
      if (n.inputValidator) {
        var i = e;
        var a = o;
        var r = t;
        const s = b.innerParams.get(i),
          c =
            (i.disableInput(),
            Promise.resolve().then(() =>
              k(s.inputValidator(a, s.validationMessage))
            ));
        c.then((e) => {
          i.enableButtons(),
            i.enableInput(),
            e ? i.showValidationMessage(e) : ("deny" === r ? Lt : Mt)(i, a);
        });
      } else
        e.getInput().checkValidity()
          ? ("deny" === t ? Lt : Mt)(e, o)
          : (e.enableButtons(), e.showValidationMessage(n.validationMessage));
    },
    Lt = (t, n) => {
      const e = b.innerParams.get(t || void 0);
      if ((e.showLoaderOnDeny && At(N()), e.preDeny)) {
        b.awaitingPromise.set(t || void 0, !0);
        const o = Promise.resolve().then(() =>
          k(e.preDeny(n, e.validationMessage))
        );
        o.then((e) => {
          !1 === e
            ? t.hideLoading()
            : t.closePopup({ isDenied: !0, value: void 0 === e ? n : e });
        }).catch((e) => jt(t || void 0, e));
      } else t.closePopup({ isDenied: !0, value: n });
    },
    Ot = (e, t) => {
      e.closePopup({ isConfirmed: !0, value: t });
    },
    jt = (e, t) => {
      e.rejectPromise(t);
    },
    Mt = (t, n) => {
      const e = b.innerParams.get(t || void 0);
      if ((e.showLoaderOnConfirm && At(), e.preConfirm)) {
        t.resetValidationMessage(), b.awaitingPromise.set(t || void 0, !0);
        const o = Promise.resolve().then(() =>
          k(e.preConfirm(n, e.validationMessage))
        );
        o.then((e) => {
          ce(q()) || !1 === e ? t.hideLoading() : Ot(t, void 0 === e ? n : e);
        }).catch((e) => jt(t || void 0, e));
      } else Ot(t, n);
    },
    Dt = (n, e, o) => {
      e.popup.onclick = () => {
        var e,
          t = b.innerParams.get(n);
        (t &&
          ((e = t).showConfirmButton ||
            e.showDenyButton ||
            e.showCancelButton ||
            e.showCloseButton ||
            t.timer ||
            t.input)) ||
          o(Ge.close);
      };
    };
  let It = !1;
  const Ht = (t) => {
      t.popup.onmousedown = () => {
        t.container.onmouseup = function (e) {
          (t.container.onmouseup = void 0),
            e.target === t.container && (It = !0);
        };
      };
    },
    qt = (t) => {
      t.container.onmousedown = () => {
        t.popup.onmouseup = function (e) {
          (t.popup.onmouseup = void 0),
            (e.target !== t.popup && !t.popup.contains(e.target)) || (It = !0);
        };
      };
    },
    Vt = (n, o, i) => {
      o.container.onclick = (e) => {
        var t = b.innerParams.get(n);
        It
          ? (It = !1)
          : e.target === o.container &&
            w(t.allowOutsideClick) &&
            i(Ge.backdrop);
      };
    };
  const Nt = () => V() && V().click();
  const Rt = (e, t, n) => {
      const o = K();
      if (o.length)
        return (
          (t += n) === o.length ? (t = 0) : -1 === t && (t = o.length - 1),
          o[t].focus()
        );
      g().focus();
    },
    Ft = ["ArrowRight", "ArrowDown"],
    Ut = ["ArrowLeft", "ArrowUp"],
    Wt = (e, n, o) => {
      var i = b.innerParams.get(e);
      if (i)
        if (
          (i.stopKeydownPropagation && n.stopPropagation(), "Enter" === n.key)
        )
          (e = e),
            (a = n),
            (t = i),
            w(t.allowEnterKey) &&
              !a.isComposing &&
              a.target &&
              e.getInput() &&
              a.target.outerHTML === e.getInput().outerHTML &&
              (["textarea", "file"].includes(t.input) ||
                (Nt(), a.preventDefault()));
        else if ("Tab" !== n.key) {
          if ([...Ft, ...Ut].includes(n.key)) {
            e = n.key;
            const s = V(),
              c = N(),
              d = F();
            if ([s, c, d].includes(document.activeElement)) {
              var t = Ft.includes(e)
                ? "nextElementSibling"
                : "previousElementSibling";
              const l = document.activeElement[t];
              l instanceof HTMLElement && l.focus();
            }
          } else if ("Escape" === n.key) {
            var a = n,
              e = i;
            if (w(e.allowEscapeKey)) {
              a.preventDefault();
              o(Ge.esc);
            }
          }
        } else {
          e = n;
          o = i;
          var u = e.target,
            r = K();
          let t = -1;
          for (let e = 0; e < r.length; e++)
            if (u === r[e]) {
              t = e;
              break;
            }
          e.shiftKey ? Rt(o, t, -1) : Rt(o, t, 1);
          e.stopPropagation(), e.preventDefault();
        }
    },
    zt = (e) => "object" == typeof e && e.jquery,
    _t = (e) => e instanceof Element || zt(e);
  const Kt = () => {
      if (f.timeout) {
        {
          const n = z();
          var e = parseInt(window.getComputedStyle(n).width),
            t =
              (n.style.removeProperty("transition"),
              (n.style.width = "100%"),
              parseInt(window.getComputedStyle(n).width)),
            e = (e / t) * 100;
          n.style.removeProperty("transition"),
            (n.style.width = "".concat(e, "%"));
        }
        return f.timeout.stop();
      }
    },
    Yt = () => {
      var e;
      if (f.timeout) return (e = f.timeout.start()), J(e), e;
    };
  let Zt = !1;
  const Jt = {};
  const Xt = (t) => {
    for (let e = t.target; e && e !== document; e = e.parentNode)
      for (const o in Jt) {
        var n = e.getAttribute(o);
        if (n) return void Jt[o].fire({ template: n });
      }
  };
  e = Object.freeze({
    isValidParameter: B,
    isUpdatableParameter: x,
    isDeprecatedParameter: E,
    argsToParams: (n) => {
      const o = {};
      return (
        "object" != typeof n[0] || _t(n[0])
          ? ["title", "html", "icon"].forEach((e, t) => {
              t = n[t];
              "string" == typeof t || _t(t)
                ? (o[e] = t)
                : void 0 !== t &&
                  v(
                    "Unexpected type of "
                      .concat(e, '! Expected "string" or "Element", got ')
                      .concat(typeof t)
                  );
            })
          : Object.assign(o, n[0]),
        o
      );
    },
    isVisible: () => ce(g()),
    clickConfirm: Nt,
    clickDeny: () => N() && N().click(),
    clickCancel: () => F() && F().click(),
    getContainer: m,
    getPopup: g,
    getTitle: M,
    getHtmlContainer: D,
    getImage: I,
    getIcon: j,
    getInputLabel: () => O(p["input-label"]),
    getCloseButton: _,
    getActions: U,
    getConfirmButton: V,
    getDenyButton: N,
    getCancelButton: F,
    getLoader: R,
    getFooter: W,
    getTimerProgressBar: z,
    getFocusableElements: K,
    getValidationMessage: q,
    isLoading: () => g().hasAttribute("data-loading"),
    fire: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return new this(...t);
    },
    mixin: function (n) {
      class e extends this {
        _main(e, t) {
          return super._main(e, Object.assign({}, n, t));
        }
      }
      return e;
    },
    showLoading: At,
    enableLoading: At,
    getTimerLeft: () => f.timeout && f.timeout.getTimerLeft(),
    stopTimer: Kt,
    resumeTimer: Yt,
    toggleTimer: () => {
      var e = f.timeout;
      return e && (e.running ? Kt : Yt)();
    },
    increaseTimer: (e) => {
      if (f.timeout) return (e = f.timeout.increase(e)), J(e, !0), e;
    },
    isTimerRunning: () => f.timeout && f.timeout.isRunning(),
    bindClickHandler: function () {
      var e =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : "data-swal-template";
      (Jt[e] = this),
        Zt || (document.body.addEventListener("click", Xt), (Zt = !0));
    },
  });
  function $t() {
    var e,
      t = b.innerParams.get(this);
    if (t) {
      const n = b.domCache.get(this);
      h(n.loader),
        Z()
          ? t.icon && d(j())
          : ((t = n),
            (e = t.popup.getElementsByClassName(
              t.loader.getAttribute("data-button-to-replace")
            )).length
              ? d(e[0], "inline-block")
              : le() && h(t.actions)),
        oe([n.popup, n.actions], p.loading),
        n.popup.removeAttribute("aria-busy"),
        n.popup.removeAttribute("data-loading"),
        (n.confirmButton.disabled = !1),
        (n.denyButton.disabled = !1),
        (n.cancelButton.disabled = !1);
    }
  }
  var Gt = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap(),
  };
  function Qt(e, t, n, o) {
    Z()
      ? on(e, o)
      : (he(n).then(() => on(e, o)),
        f.keydownTarget.removeEventListener("keydown", f.keydownHandler, {
          capture: f.keydownListenerCapture,
        }),
        (f.keydownHandlerAdded = !1)),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        ? (t.setAttribute("style", "display:none !important"),
          t.removeAttribute("class"),
          (t.innerHTML = ""))
        : t.remove(),
      Y() && (gt(), bt(), et()),
      oe(
        [document.documentElement, document.body],
        [p.shown, p["height-auto"], p["no-backdrop"], p["toast-shown"]]
      );
  }
  function en(e) {
    e =
      void 0 !== (n = e)
        ? Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, n)
        : { isConfirmed: !1, isDenied: !1, isDismissed: !0 };
    const t = Gt.swalPromiseResolve.get(this);
    var n = ((e) => {
      const t = g();
      if (!t) return false;
      const n = b.innerParams.get(e);
      if (!n || $(t, n.hideClass.popup)) return false;
      oe(t, n.showClass.popup), u(t, n.hideClass.popup);
      const o = m();
      return (
        oe(o, n.showClass.backdrop),
        u(o, n.hideClass.backdrop),
        nn(e, t, n),
        true
      );
    })(this);
    this.isAwaitingPromise() ? e.isDismissed || (tn(this), t(e)) : n && t(e);
  }
  const tn = (e) => {
      e.isAwaitingPromise() &&
        (b.awaitingPromise.delete(e), b.innerParams.get(e) || e._destroy());
    },
    nn = (e, t, n) => {
      var o,
        i,
        a,
        r = m(),
        s = Be && de(t);
      "function" == typeof n.willClose && n.willClose(t),
        s
          ? ((s = e),
            (o = t),
            (t = r),
            (i = n.returnFocus),
            (a = n.didClose),
            (f.swalCloseEventFinishedCallback = Qt.bind(null, s, t, i, a)),
            o.addEventListener(Be, function (e) {
              e.target === o &&
                (f.swalCloseEventFinishedCallback(),
                delete f.swalCloseEventFinishedCallback);
            }))
          : Qt(e, r, n.returnFocus, n.didClose);
    },
    on = (e, t) => {
      setTimeout(() => {
        "function" == typeof t && t.bind(e.params)(), e._destroy();
      });
    };
  function an(e, t, n) {
    const o = b.domCache.get(e);
    t.forEach((e) => {
      o[e].disabled = n;
    });
  }
  function rn(e, t) {
    if (!e) return !1;
    if ("radio" === e.type) {
      const n = e.parentNode.parentNode,
        o = n.querySelectorAll("input");
      for (let e = 0; e < o.length; e++) o[e].disabled = t;
    } else e.disabled = t;
  }
  const sn = (e) => {
      e.isAwaitingPromise()
        ? (cn(b, e), b.awaitingPromise.set(e, !0))
        : (cn(Gt, e), cn(b, e));
    },
    cn = (e, t) => {
      for (const n in e) e[n].delete(t);
    };
  var ln = Object.freeze({
    hideLoading: $t,
    disableLoading: $t,
    getInput: function (e) {
      var t = b.innerParams.get(e || this);
      return (e = b.domCache.get(e || this)) ? ee(e.popup, t.input) : null;
    },
    close: en,
    isAwaitingPromise: function () {
      return !!b.awaitingPromise.get(this);
    },
    rejectPromise: function (e) {
      const t = Gt.swalPromiseReject.get(this);
      tn(this), t && t(e);
    },
    closePopup: en,
    closeModal: en,
    closeToast: en,
    enableButtons: function () {
      an(this, ["confirmButton", "denyButton", "cancelButton"], !1);
    },
    disableButtons: function () {
      an(this, ["confirmButton", "denyButton", "cancelButton"], !0);
    },
    enableInput: function () {
      return rn(this.getInput(), !1);
    },
    disableInput: function () {
      return rn(this.getInput(), !0);
    },
    showValidationMessage: function (e) {
      const t = b.domCache.get(this);
      var n = b.innerParams.get(this);
      l(t.validationMessage, e),
        (t.validationMessage.className = p["validation-message"]),
        n.customClass &&
          n.customClass.validationMessage &&
          u(t.validationMessage, n.customClass.validationMessage),
        d(t.validationMessage);
      const o = this.getInput();
      o &&
        (o.setAttribute("aria-invalid", !0),
        o.setAttribute("aria-describedby", p["validation-message"]),
        te(o),
        u(o, p.inputerror));
    },
    resetValidationMessage: function () {
      var e = b.domCache.get(this);
      e.validationMessage && h(e.validationMessage);
      const t = this.getInput();
      t &&
        (t.removeAttribute("aria-invalid"),
        t.removeAttribute("aria-describedby"),
        oe(t, p.inputerror));
    },
    getProgressSteps: function () {
      return b.domCache.get(this).progressSteps;
    },
    update: function (e) {
      var t = g(),
        n = b.innerParams.get(this);
      if (!t || $(t, n.hideClass.popup))
        return a(
          "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
        );
      (t = ((t) => {
        const n = {};
        return (
          Object.keys(t).forEach((e) => {
            if (x(e)) n[e] = t[e];
            else
              a(
                'Invalid parameter to update: "'.concat(
                  e,
                  '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'
                )
              );
          }),
          n
        );
      })(e)),
        (n = Object.assign({}, n, t)),
        $e(this, n),
        b.innerParams.set(this, n),
        Object.defineProperties(this, {
          params: {
            value: Object.assign({}, this.params, e),
            writable: !1,
            enumerable: !0,
          },
        });
    },
    _destroy: function () {
      var e = b.domCache.get(this);
      const t = b.innerParams.get(this);
      t
        ? (e.popup &&
            f.swalCloseEventFinishedCallback &&
            (f.swalCloseEventFinishedCallback(),
            delete f.swalCloseEventFinishedCallback),
          f.deferDisposalTimer &&
            (clearTimeout(f.deferDisposalTimer), delete f.deferDisposalTimer),
          "function" == typeof t.didDestroy && t.didDestroy(),
          (e = this),
          sn(e),
          delete e.params,
          delete f.keydownHandler,
          delete f.keydownTarget,
          delete f.currentInstance)
        : sn(this);
    },
  });
  let un;
  class dn {
    constructor() {
      if ("undefined" != typeof window) {
        un = this;
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var o = Object.freeze(this.constructor.argsToParams(t)),
          o =
            (Object.defineProperties(this, {
              params: {
                value: o,
                writable: !1,
                enumerable: !0,
                configurable: !0,
              },
            }),
            this._main(this.params));
        b.promise.set(this, o);
      }
    }
    _main(e) {
      var t =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        e =
          (T(Object.assign({}, t, e)),
          f.currentInstance && (f.currentInstance._destroy(), Y() && et()),
          (f.currentInstance = this),
          mn(e, t)),
        t =
          (dt(e),
          Object.freeze(e),
          f.timeout && (f.timeout.stop(), delete f.timeout),
          clearTimeout(f.restoreFocusTimeout),
          gn(this));
      return $e(this, e), b.innerParams.set(this, e), pn(this, t, e);
    }
    then(e) {
      const t = b.promise.get(this);
      return t.then(e);
    }
    finally(e) {
      const t = b.promise.get(this);
      return t.finally(e);
    }
  }
  const pn = (l, u, d) =>
      new Promise((e, t) => {
        const n = (e) => {
          l.closePopup({ isDismissed: !0, dismiss: e });
        };
        var o, i, a;
        Gt.swalPromiseResolve.set(l, e),
          Gt.swalPromiseReject.set(l, t),
          (u.confirmButton.onclick = () => {
            var e = l,
              t = b.innerParams.get(e);
            e.disableButtons(), t.input ? St(e, "confirm") : Mt(e, !0);
          }),
          (u.denyButton.onclick = () => {
            var e = l,
              t = b.innerParams.get(e);
            e.disableButtons(),
              t.returnInputValueOnDeny ? St(e, "deny") : Lt(e, !1);
          }),
          (u.cancelButton.onclick = () => {
            var e = l,
              t = n;
            e.disableButtons(), t(Ge.cancel);
          }),
          (u.closeButton.onclick = () => n(Ge.close)),
          (e = l),
          (t = u),
          (a = n),
          b.innerParams.get(e).toast
            ? Dt(e, t, a)
            : (Ht(t), qt(t), Vt(e, t, a)),
          (o = l),
          (e = f),
          (t = d),
          (i = n),
          e.keydownTarget &&
            e.keydownHandlerAdded &&
            (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
              capture: e.keydownListenerCapture,
            }),
            (e.keydownHandlerAdded = !1)),
          t.toast ||
            ((e.keydownHandler = (e) => Wt(o, e, i)),
            (e.keydownTarget = t.keydownListenerCapture ? window : g()),
            (e.keydownListenerCapture = t.keydownListenerCapture),
            e.keydownTarget.addEventListener("keydown", e.keydownHandler, {
              capture: e.keydownListenerCapture,
            }),
            (e.keydownHandlerAdded = !0)),
          (a = l),
          "select" === (t = d).input || "radio" === t.input
            ? Pt(a, t)
            : ["text", "email", "number", "tel", "textarea"].includes(
                t.input
              ) &&
              (C(t.inputValue) || A(t.inputValue)) &&
              (At(V()), Bt(a, t));
        {
          var r = d;
          const s = m(),
            c = g();
          "function" == typeof r.willOpen && r.willOpen(c),
            (e = window.getComputedStyle(document.body).overflowY),
            kt(s, c, r),
            setTimeout(() => {
              wt(s, c);
            }, yt),
            Y() && (Ct(s, r.scrollbarPadding, e), Qe()),
            Z() ||
              f.previousActiveElement ||
              (f.previousActiveElement = document.activeElement),
            "function" == typeof r.didOpen && setTimeout(() => r.didOpen(c)),
            oe(s, p["no-transition"]);
        }
        hn(f, d, n),
          fn(u, d),
          setTimeout(() => {
            u.container.scrollTop = 0;
          });
      }),
    mn = (e, t) => {
      var n = ((e) => {
        e =
          "string" == typeof e.template
            ? document.querySelector(e.template)
            : e.template;
        if (!e) return {};
        (e = e.content),
          ct(e),
          (e = Object.assign(nt(e), ot(e), it(e), at(e), rt(e), st(e, tt)));
        return e;
      })(e);
      const o = Object.assign({}, r, t, n, e);
      return (
        (o.showClass = Object.assign({}, r.showClass, o.showClass)),
        (o.hideClass = Object.assign({}, r.hideClass, o.hideClass)),
        o
      );
    },
    gn = (e) => {
      var t = {
        popup: g(),
        container: m(),
        actions: U(),
        confirmButton: V(),
        denyButton: N(),
        cancelButton: F(),
        loader: R(),
        closeButton: _(),
        validationMessage: q(),
        progressSteps: H(),
      };
      return b.domCache.set(e, t), t;
    },
    hn = (e, t, n) => {
      var o = z();
      h(o),
        t.timer &&
          ((e.timeout = new pt(() => {
            n("timer"), delete e.timeout;
          }, t.timer)),
          t.timerProgressBar &&
            (d(o),
            Q(o, t, "timerProgressBar"),
            setTimeout(() => {
              e.timeout && e.timeout.running && J(t.timer);
            })));
    },
    fn = (e, t) => {
      if (!t.toast)
        return w(t.allowEnterKey) ? void (bn(e, t) || Rt(t, -1, 1)) : yn();
    },
    bn = (e, t) =>
      t.focusDeny && ce(e.denyButton)
        ? (e.denyButton.focus(), !0)
        : t.focusCancel && ce(e.cancelButton)
        ? (e.cancelButton.focus(), !0)
        : !(!t.focusConfirm || !ce(e.confirmButton)) &&
          (e.confirmButton.focus(), !0),
    yn = () => {
      document.activeElement instanceof HTMLElement &&
        "function" == typeof document.activeElement.blur &&
        document.activeElement.blur();
    },
    vn =
      (Object.assign(dn.prototype, ln),
      Object.assign(dn, e),
      Object.keys(ln).forEach((e) => {
        dn[e] = function () {
          if (un) return un[e](...arguments);
        };
      }),
      (dn.DismissReason = Ge),
      (dn.version = "11.4.0"),
      dn);
  return (vn.default = vn), vn;
}),
  void 0 !== this &&
    this.Sweetalert2 &&
    (this.swal =
      this.sweetAlert =
      this.Swal =
      this.SweetAlert =
        this.Sweetalert2);
"undefined" != typeof document &&
  (function (e, t) {
    var n = e.createElement("style");
    if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet))
      n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else
      try {
        n.innerHTML = t;
      } catch (e) {
        n.innerText = t;
      }
  })(
    document,
    '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}'
  );

//Datatable

("use strict");
var DataTable = function (t, e) {
  for (var i in ((this.options = {}),
  (this.table = t),
  (this.currentPage = 0),
  (this.currentStart = 0),
  (this.filterIndex = []),
  DataTable.defaultOptions))
    DataTable.defaultOptions.hasOwnProperty(i) &&
      (e.hasOwnProperty(i)
        ? (this.options[i] = e[i])
        : (this.options[i] = DataTable.defaultOptions[i]));
  e.hasOwnProperty("data") && (this.options.data = e.data),
    this.options.nbColumns < 0 &&
      (this.options.nbColumns = this.table.tHead.rows[0].cells.length),
    (this.pagingDivs = document.querySelectorAll(
      this.options.pagingDivSelector
    ));
  for (var s = 0; s < this.pagingDivs.length; ++s) {
    var a = this.pagingDivs[s];
    this.addClass(a, "pagination-datatables"),
      this.addClass(a, this.options.pagingDivClass);
    var n = document.createElement("ul");
    this.addClass(n, this.options.pagingListClass), a.appendChild(n);
  }
  (this.pagingLists = document.querySelectorAll(
    this.options.pagingDivSelector + " ul"
  )),
    (this.counterDivs = document.querySelectorAll(
      this.options.counterDivSelector
    )),
    (this.loadingDiv = document.querySelector(this.options.loadingDivSelector));
  this.table.tHead ||
    ((this.table.tHead = document.createElement("thead")),
    this.table.appendChild(this.table.rows[0])),
    this.options.forceStrings && (this.options.dataTypes = !1);
  this.table.tHead.rows[0].cells;
  if (
    (this.table.tBodies[0] ||
      (this.table.tBodies[0] = document.createElement("tbody")),
    this.options.data instanceof Array)
  )
    this.data = this.options.data;
  else if (this.options.data instanceof Object) {
    var r = DataTable.defaultAjaxOptions;
    for (var i in this.options.data) r[i] = this.options.data[i];
    this.options.data = r;
    if (
      (void 0 !== this.table.dataset.size &&
        (this.options.data.size = parseInt(this.table.dataset.size, 10)),
      (this.data = []),
      void 0 !== this.options.data.size)
    )
      if (
        ((this.loadingDiv.innerHTML =
          '<div class="progress datatable-load-bar"><div class="progress-bar progress-bar-striped active" style="width: 0%;"></div></div>'),
        this.options.data.allInOne)
      )
        this.getAjaxDataAsync(!0);
      else
        for (
          s = 0;
          s < this.options.data.size;
          s += this.options.pageSize * this.options.pagingNumberOfPages
        )
          this.getAjaxDataAsync(s);
    else
      (this.loadingDiv.innerHTML =
        '<div class="progress datatable-load-bar"><div class="progress-bar progress-bar-striped active" style="width: 0%;"></div></div>'),
        this.getAjaxDataAsync(0, !0);
  } else if (this.table.tBodies[0].rows.length > 0) {
    this.data = [];
    var o = this.table.tBodies[0].rows,
      l = o[0].cells.length;
    for (s = 0; s < o.length; ++s) this.data.push([]);
    for (var h = 0; h < l; ++h) {
      var d = function (t) {
        return t;
      };
      if (this.options.dataTypes instanceof Array)
        switch (this.options.dataTypes[h]) {
          case "int":
            d = parseInt;
            break;
          case "float":
          case "double":
            d = parseFloat;
            break;
          case "date":
          case "datetime":
            d = function (t) {
              return new Date(t);
            };
            break;
          case !1:
          case !0:
          case "string":
          case "str":
            d = function (t) {
              return t;
            };
            break;
          default:
            d = this.options.dataTypes[h];
        }
      for (s = 0; s < o.length; ++s)
        this.data[s].push(d(o[s].cells[h].innerHTML.trim()));
    }
    if (!0 === this.options.dataTypes)
      for (var c = 0; c < this.data[0].length; ++c) {
        var p = !0;
        for (s = 0; s < this.data.length; ++s)
          "" === this.data[s][c] ||
            this.data[s][c] - parseFloat(this.data[s][c]) + 1 >= 0 ||
            (p = !1);
        if (p)
          for (s = 0; s < this.data.length; ++s)
            "" !== this.data[s][c] &&
              (this.data[s][c] = parseFloat(this.data[s][c]));
      }
  }
  this.createSort(), this.createFilter(), this.triggerSort(), this.filter();
};
(DataTable.prototype = {
  constructor: DataTable,
  addClass: function (t, e) {
    "string" == typeof e && (e = e.split(" ")),
      e.forEach(function (e) {
        e && t.classList.add(e);
      });
  },
  removeNode: function (t) {
    t && t.parentNode.removeChild(t);
  },
  setRefreshTimeout: function () {
    var t;
    this.options.data.refresh &&
      (clearTimeout(this.refreshTimeOut),
      (this.refreshTimeOut = setTimeout(
        ((t = this),
        function () {
          t.getAjaxDataAsync(0, !0);
        }),
        this.options.data.refresh
      )));
  },
  hideLoadingDivs: function () {
    this.removeNode(this.loadingDiv);
  },
  updateLoadingDivs: function () {
    this.data.length >= this.options.data.size
      ? (this.setRefreshTimeout(), this.hideLoadingDivs())
      : (this.loadingDiv.querySelector(
          "div.progress .progress-bar"
        ).style.width =
          parseInt((100 * this.data.length) / this.options.data.size, 10) +
          "%");
  },
  getAjaxDataAsync: function (t, e) {
    void 0 === e && (e = !1),
      e &&
        void 0 === this.syncData &&
        (this.syncData = { data: [], toAdd: [], toUpdate: {}, toDelete: [] });
    var i,
      s,
      a,
      n = new XMLHttpRequest();
    (n.timeout = this.options.data.timeout),
      (n.onreadystatechange =
        ((i = this),
        (s = t),
        (a = e),
        function () {
          if (4 == this.readyState)
            switch (this.status) {
              case 200:
                if (a)
                  if (this.response.length > 0)
                    (i.syncData.data = i.syncData.data.concat(this.response)),
                      i.getAjaxDataAsync(
                        s + i.options.pageSize * i.options.pagingNumberOfPages,
                        !0
                      );
                  else {
                    var t = i.syncData;
                    for (var e in (delete i.syncData,
                    (i.data = t.data),
                    i.addRows(t.toAdd),
                    t.toDelete.forEach(function (t) {
                      t instanceof Function ? i.deleteAll(t) : i.deleteRow(t);
                    }),
                    t.toUpdate))
                      i.updateRow(e, t.toUpdate[e]);
                    i.sort(!0), i.setRefreshTimeout();
                  }
                else
                  (i.data = i.data.concat(this.response)),
                    i.updateLoadingDivs(),
                    i.sort(!0);
                break;
              case 404:
              case 500:
                console.log("ERROR: " + this.status + " - " + this.statusText),
                  console.log(n);
                break;
              default:
                i.getAjaxDataAsync(s, a);
            }
        }));
    var r = this.options.data.url,
      o = this.options.pageSize * this.options.pagingNumberOfPages,
      l = new FormData();
    !0 !== t &&
      ("GET" == this.options.data.type.toUpperCase()
        ? (r += "?start=" + t + "&limit=" + o)
        : (l.append("offset", t), l.append("limit", o))),
      n.open(this.options.data.type, r, !0),
      (n.responseType = "json"),
      n.send(l);
  },
  getLastPageNumber: function () {
    return parseInt(
      Math.ceil(this.filterIndex.length / this.options.pageSize),
      10
    );
  },
  createPagingLink: function (t, e, i) {
    var s = document.createElement("a");
    return (
      this.options.pagingLinkClass &&
        s.classList.add(this.options.pagingLinkClass),
      this.options.pagingLinkHref && (s.href = this.options.pagingLinkHref),
      !1 !== this.options.pagingLinkDisabledTabIndex &&
        i &&
        (s.tabIndex = this.options.pagingLinkDisabledTabIndex),
      (s.dataset.page = e),
      (s.innerHTML = t),
      s
    );
  },
  updatePaging: function () {
    var t,
      e,
      i = this.options.pagingNumberOfPages,
      s = this,
      a = parseInt(this.currentStart / this.options.pageSize, 10) + 1,
      n = this.getLastPageNumber(),
      r = this.filterIndex.length ? this.currentStart + 1 : 0,
      o =
        this.currentStart + this.options.pageSize > this.filterIndex.length
          ? this.filterIndex.length
          : this.currentStart + this.options.pageSize;
    a < i / 2
      ? (t = 1)
      : a >= n - i / 2
      ? (t = n - i + 1) < 1 && (t = 1)
      : (t = parseInt(a - i / 2 + 1, 10)),
      (e = t + i < n + 1 ? t + i - 1 : n);
    for (var l = 0; l < this.pagingLists.length; ++l) {
      var h = [];
      if (s.options.firstPage)
        (p = document.createElement("li")).appendChild(
          s.createPagingLink(s.options.firstPage, "first", 1 === a)
        ),
          1 === a && p.classList.add("active"),
          h.push(p);
      if (s.options.prevPage)
        (p = document.createElement("li")).appendChild(
          s.createPagingLink(s.options.prevPage, "prev", 1 === a)
        ),
          1 === a && p.classList.add("active"),
          h.push(p);
      if (s.options.pagingPages) {
        var d = this.options.pagingPages.call(this.table, t, e, a, r, o);
        d instanceof Array ? (h = h.concat(d)) : h.push(d);
      } else
        for (var c = t; c <= e; c++) {
          var p;
          (p = document.createElement("li")).appendChild(
            s.createPagingLink(c, c, a === c)
          ),
            c === a && p.classList.add("active"),
            h.push(p);
        }
      if (s.options.nextPage)
        (p = document.createElement("li")).appendChild(
          s.createPagingLink(s.options.nextPage, "next", a === n || 0 === n)
        ),
          (a !== n && 0 !== n) || p.classList.add("active"),
          h.push(p);
      if (s.options.lastPage)
        (p = document.createElement("li")).appendChild(
          s.createPagingLink(s.options.lastPage, "last", a === n || 0 === n)
        ),
          (a !== n && 0 !== n) || p.classList.add("active"),
          h.push(p);
      (this.pagingLists[l].innerHTML = ""),
        h.forEach(function (t) {
          s.options.pagingItemClass &&
            t.classList.add(s.options.pagingItemClass),
            t.childNodes.length > 0 &&
              t.childNodes[0].addEventListener(
                "click",
                function (t) {
                  if (
                    (t.preventDefault(),
                    !this.parentNode.classList.contains("active") &&
                      void 0 !== this.dataset.page)
                  )
                    switch (this.dataset.page) {
                      case "first":
                        s.loadPage(1);
                        break;
                      case "prev":
                        s.loadPage(a - 1);
                        break;
                      case "next":
                        s.loadPage(a + 1);
                        break;
                      case "last":
                        s.loadPage(n);
                        break;
                      default:
                        s.loadPage(parseInt(parseInt(this.dataset.page), 10));
                    }
                },
                !1
              ),
            this.pagingLists[l].appendChild(t);
        }, this);
    }
  },
  updateCounter: function () {
    for (
      var t = this.filterIndex.length
          ? parseInt(this.currentStart / this.options.pageSize, 10) + 1
          : 0,
        e = parseInt(
          Math.ceil(this.filterIndex.length / this.options.pageSize),
          10
        ),
        i = this.filterIndex.length ? this.currentStart + 1 : 0,
        s =
          this.currentStart + this.options.pageSize > this.filterIndex.length
            ? this.filterIndex.length
            : this.currentStart + this.options.pageSize,
        a = 0;
      a < this.counterDivs.length;
      ++a
    )
      this.counterDivs[a].innerHTML = this.options.counterText.call(
        this.table,
        t,
        e,
        i,
        s,
        this.filterIndex.length,
        this.data.length
      );
  },
  getSortFunction: function () {
    if (!1 === this.options.sort) return !1;
    if (this.options.sort instanceof Function) return this.options.sort;
    if (0 === this.data.length || !(this.options.sortKey in this.data[0]))
      return !1;
    var t,
      e = this.options.sortKey,
      i = "asc" === this.options.sortDir;
    return this.options.sort[e] instanceof Function
      ? ((t = this.options.sort[e]),
        function (s, a) {
          var n = s[e],
            r = a[e];
          return i ? t(n, r) : -t(n, r);
        })
      : function (t, s) {
          var a = t[e],
            n = s[e];
          return a > n ? (i ? 1 : -1) : a < n ? (i ? -1 : 1) : 0;
        };
  },
  destroyFilter: function () {
    this.removeNode(this.table.querySelector(".datatable-filter-line"));
  },
  changePlaceHolder: function () {
    for (
      var t = this.options.filterText ? this.options.filterText : "",
        e = this.table.querySelectorAll(
          '.datatable-filter-line input[type="text"]'
        ),
        i = 0;
      i < e.length;
      ++i
    )
      e[i].placeholder = t;
  },
  createTextFilter: function (t) {
    var e = this.options.filters[t],
      i = e instanceof HTMLInputElement ? e : document.createElement("input");
    (i.type = "text"),
      this.options.filterText && (i.placeholder = this.options.filterText),
      this.addClass(i, "datatable-filter datatable-input-text"),
      (i.dataset.filter = t),
      (this.filterVals[t] = "");
    var s,
      a,
      n =
        ((s = 0),
        function (t, e) {
          clearTimeout(s), (s = setTimeout(t, e));
        });
    (i.onkeyup =
      ((a = this),
      function () {
        var t = this.value.toUpperCase(),
          e = this.dataset.filter;
        n(function () {
          (a.filterVals[e] = t), a.filter();
        }, 300);
      })),
      (i.onkeydown = i.onkeyup);
    var r = "regexp" === e || i.dataset.regexp;
    return (
      e instanceof Function
        ? this.addFilter(t, e)
        : r
        ? this.addFilter(t, function (t, e) {
            return new RegExp(e).test(String(t));
          })
        : this.addFilter(t, function (t, e) {
            return -1 !== String(t).toUpperCase().indexOf(e);
          }),
      this.addClass(i, this.options.filterInputClass),
      i
    );
  },
  _isIn: function (t, e) {
    for (var i = !1, s = 0; s < e.length && !i; ++s) i = e[s] == t;
    return i;
  },
  _index: function (t, e) {
    if (null == e) return -1;
    for (var i = -1, s = 0; s < e.length && -1 == i; ++s) e[s] === t && (i = s);
    return i;
  },
  _keys: function (t) {
    if (null != t) {
      var e = [];
      for (var i in t) t.hasOwnProperty(i) && e.push(i);
      return e;
    }
  },
  createSelectFilter: function (t) {
    var e = this.options.filters[t],
      i = {},
      s = [],
      a = !1,
      n = !0,
      r = this.options.filterEmptySelect,
      o = !1;
    if (
      (e instanceof HTMLSelectElement
        ? (o = e)
        : e instanceof Object && "element" in e && e.element && (o = e.element),
      e instanceof HTMLSelectElement || "select" === e)
    )
      i = this.getFilterOptions(t);
    else if (
      ((a = "multiple" in e && !0 === e.multiple),
      (n = "empty" in e && e.empty),
      (r =
        "empty" in e && "string" == typeof e.empty
          ? e.empty
          : this.options.filterEmptySelect),
      "values" in e)
    ) {
      if (
        ((i = "auto" === e.values ? this.getFilterOptions(t) : e.values),
        "default" in e)
      )
        s = e.default;
      else if (a)
        for (var l in ((s = []), i))
          i[l] instanceof Object ? (s = s.concat(this._keys(i[l]))) : s.push(l);
      else s = [];
      s instanceof Array || (s = [s]);
    } else (i = e), (s = a ? this._keys(i) : []);
    var h = o || document.createElement("select");
    (a && (h.multiple = !0),
    e.default && (h.dataset.default = e.default),
    this.addClass(h, "datatable-filter datatable-select"),
    (h.dataset.filter = t),
    n) &&
      (((u = document.createElement("option")).dataset.empty = !0),
      (u.value = ""),
      (u.innerHTML = r),
      h.appendChild(u));
    var d = [];
    for (var c in i)
      if (i[c] instanceof Object) {
        var p = document.createElement("optgroup");
        for (var f in ((p.label = c), i[c])) {
          if (i[c].hasOwnProperty(f))
            d.push(f),
              ((u = document.createElement("option")).value = f),
              (u.selected = this._isIn(f, s)),
              (u.innerHTML = i[c][f]),
              p.appendChild(u);
        }
        h.appendChild(p);
      } else {
        var u;
        d.push(c),
          ((u = document.createElement("option")).value = c),
          (u.selected = this._isIn(c, s)),
          (u.innerHTML = i[c]),
          h.appendChild(u);
      }
    var g,
      v,
      m,
      y,
      b,
      S,
      D = h.value;
    if (a) {
      D = [];
      for (var L = 0; L < h.options.length; ++L)
        h.options[L].selected && D.push(h.options[L].value);
    }
    return (
      (this.filterVals[t] = a ? D : n && !D ? d : [D]),
      (h.onchange =
        ((g = d),
        (v = a),
        (m = n),
        (y = this),
        function () {
          var t = this.value;
          if (v) {
            t = [];
            for (var e = 0; e < this.options.length; ++e)
              this.options[e].selected && t.push(this.options[e].value);
          }
          var i = this.dataset.filter;
          (y.filterVals[i] = v ? t : m && !t ? g : [t]), y.filter();
        })),
      e instanceof Object && e.fn instanceof Function
        ? (this.addFilter(t, e.fn), (h.dataset.filterType = "function"))
        : (this.addFilter(
            t,
            ((b = d),
            (S = this),
            function (t, e) {
              return !!e && ((e == b && !t) || S._isIn(t, e));
            })
          ),
          (h.dataset.filterType = "default")),
      this.addClass(h, this.options.filterSelectClass),
      h
    );
  },
  createFilter: function () {
    if (
      ((this.filters = []),
      (this.filterTags = []),
      (this.filterVals = []),
      "*" === this.options.filters)
    ) {
      var t = this.table.tHead.rows[0].cells.length;
      for (this.options.filters = []; t--; ) this.options.filters.push(!0);
    }
    if (this.options.filters) {
      var e = document.createElement("tr");
      for (var i in (e.classList.add("datatable-filter-line"),
      this.options.filters))
        if (this.options.filters.hasOwnProperty(i)) {
          var s = document.createElement("td");
          if (!1 !== this.options.filters[i]) {
            var a = this.options.filters[i],
              n =
                !0 === a ||
                "regexp" === a ||
                "input" === a ||
                a instanceof Function ||
                a instanceof HTMLInputElement
                  ? this.createTextFilter(i)
                  : this.createSelectFilter(i);
            (this.filterTags[i] = n),
              document.body.contains(n) ||
                (s.classList.add("datatable-filter-cell"), s.appendChild(n));
          }
          (this.options.filters[i] instanceof Object &&
            this.options.filters[i].noColumn) ||
            e.appendChild(s);
        }
      e.querySelectorAll("td.datatable-filter-cell").length > 0 &&
        this.table.tHead.appendChild(e);
    }
  },
  filter: function (t) {
    void 0 === t && (t = !1);
    var e = this.currentStart;
    (this.currentStart = 0), (this.filterIndex = []);
    for (var i = 0; i < this.data.length; i++)
      this.checkFilter(this.data[i]) && this.filterIndex.push(i);
    if (t) {
      for (
        this.currentStart = e;
        this.currentStart >= this.filterIndex.length;

      )
        this.currentStart -= this.options.pageSize;
      this.currentStart < 0 && (this.currentStart = 0);
    }
    if (this.options.filterSelectOptions && this.filterIndex.length > 0) {
      for (var s = [], a = 0; a < this.data[0].length; ++a) s.push({});
      for (i = 0; i < this.filterIndex.length; ++i) {
        var n = this.data[this.filterIndex[i]];
        for (a = 0; a < n.length; ++a) s[a][n[a]] = !0;
      }
      for (var r = 0; r < s.length; ++r) {
        var o = this._keys(s[r]);
        if (
          this.filterTags[r] &&
          this.filterTags[r] instanceof HTMLSelectElement &&
          "default" == this.filterTags[r].dataset.filterType
        ) {
          var l = this.filterTags[r].childNodes;
          for (i = 0; i < l.length; ++i)
            l[i].dataset.empty ||
              (l[i].style.display = this._isIn(l[i].value, o)
                ? "block"
                : "none");
        }
      }
    }
    this.refresh();
  },
  resetFilters: function () {
    var t = this;
    this.filterTags.forEach(function (e) {
      var i = e.dataset.filter;
      if (e instanceof HTMLInputElement) (e.value = ""), (t.filterVals[i] = "");
      else if (e.multiple) {
        for (var s = [], a = 0; a < e.childNodes.length; ++a)
          (e.childNodes[a].selected = !0), s.push(e.childNodes[a].value);
        t.filterVals[i] = s;
      } else if (
        e.dataset.default &&
        e.querySelector('option[value="' + e.dataset.default + '"]').length > 0
      ) {
        for (a = 0; a < e.childNodes.length; ++a)
          e.childNodes[a].selected = e.childNodes[a].value == e.dataset.default;
        t.filterVals[i] = [e.dataset.default];
      } else if (e.childNodes.length > 0) {
        e.childNodes[0].selected = !0;
        for (a = 1; a < e.childNodes.length; ++a) e.childNodes[a].selected = !1;
        if (e.childNodes[0].dataset.empty) {
          for (s = [], a = 1; a < e.childNodes.length; ++a)
            s.push(e.childNodes[a].value);
          t.filterVals[i] = s;
        } else t.filterVals[i] = [e.childNodes[0].value];
      }
    }),
      this.filter();
  },
  stripTags: function (t) {
    var e = document.createElement("div");
    return (e.innerHTML = t), e.textContent || e.innerText;
  },
  checkFilter: function (t) {
    var e = !0;
    for (var i in this.filters) {
      var s = "_" === i[0] ? t : t[i];
      if (
        ("string" == typeof s && (s = this.stripTags(s)),
        !this.filters[i](s, this.filterVals[i]))
      ) {
        e = !1;
        break;
      }
    }
    return e;
  },
  addFilter: function (t, e) {
    this.filters[t] = e;
  },
  getFilterOptions: function (t) {
    var e = {},
      i = [];
    for (var s in this.data) "" !== this.data[s][t] && i.push(this.data[s][t]);
    for (var a in (i.sort(), i))
      if (i.hasOwnProperty(a)) {
        var n = this.stripTags(i[a]);
        e[n] = n;
      }
    return e;
  },
  destroySort: function () {
    $("thead th")
      .removeClass("sorting sorting-asc sorting-desc")
      .unbind("click.datatable")
      .removeData("sort");
  },
  createSort: function () {
    var t = this;
    if (!(this.options.sort instanceof Function))
      for (
        var e = 0, i = this.table.tHead.rows[0].cells, s = 0;
        s < i.length;
        ++s
      ) {
        if (i[s].dataset.sort) t.options.sort = !0;
        else if ("*" === t.options.sort) i[s].dataset.sort = e;
        else {
          var a;
          t.options.sort instanceof Array
            ? (a = e)
            : t.options.sort instanceof Object &&
              (a = t._keys(t.options.sort)[e]),
            void 0 !== a && t.options.sort[a] && (i[s].dataset.sort = a);
        }
        void 0 !== i[s].dataset.sort && i[s].classList.add("sorting"),
          e++,
          i[s].addEventListener(
            "click",
            function () {
              if (this.dataset.sort) {
                if (this.classList.contains("sorting-asc"))
                  (t.options.sortDir = "desc"),
                    this.classList.remove("sorting-asc"),
                    this.classList.add("sorting-desc");
                else if (this.classList.contains("sorting-desc"))
                  (t.options.sortDir = "asc"),
                    this.classList.remove("sorting-desc"),
                    this.classList.add("sorting-asc");
                else {
                  for (var e = this.parentNode.cells, i = 0; i < e.length; i++)
                    e[i].classList.remove("sorting-desc"),
                      e[i].classList.remove("sorting-asc");
                  (t.options.sortDir = "asc"),
                    (t.options.sortKey = this.dataset.sort),
                    this.classList.add("sorting-asc");
                }
                t.sort(), t.refresh();
              }
            },
            !1
          );
      }
  },
  triggerSort: function () {
    if (this.options.sort instanceof Function) this.sort(), this.refresh();
    else if (!1 !== this.options.sortKey) {
      for (var t, e = this.table.tHead.rows[0].cells, i = 0; i < e.length; i++)
        e[i].classList.remove("sorting-desc"),
          e[i].classList.remove("sorting-asc"),
          e[i].dataset.sort === this.options.sortKey && (t = e[i]);
      void 0 !== t &&
        (t.classList.add("sorting-" + this.options.sortDir),
        this.sort(),
        this.refresh());
    }
  },
  sort: function (t) {
    var e = this.getSortFunction();
    !1 !== e && this.data.sort(e), this.filter(t);
  },
  identify: function (t, e) {
    return (
      !1 !== this.options.identify &&
      (this.options.identify instanceof Function
        ? this.options.identify(t, e)
        : e[this.options.identify] == t)
    );
  },
  indexOf: function (t) {
    for (var e = -1, i = 0; i < this.data.length && -1 === e; i++)
      this.identify(t, this.data[i]) && (e = i);
    return e;
  },
  row: function (t) {
    return !0 === this.options.identify
      ? this.data[t]
      : this.data[this.indexOf(t)];
  },
  all: function (t) {
    if (void 0 === t || !0 === t) return this.data;
    for (var e = [], i = 0; i < this.data.length; ++i)
      t(this.data[i]) && e.push(this.data[i]);
    return e;
  },
  addRow: function (t) {
    this.data.push(t),
      void 0 !== this.syncData && this.syncData.toAdd.push(t),
      this.sort(),
      this.filter(),
      (this.currentStart =
        parseInt(
          this._index(this._index(t, this.data), this.filterIndex) /
            this.options.pageSize,
          10
        ) * this.options.pageSize),
      this.refresh();
  },
  addRows: function (t) {
    (this.data = this.data.concat(t)),
      void 0 !== this.syncData &&
        (this.syncData.toAdd = this.syncData.toAdd.concat(t)),
      this.sort(),
      this.filter(),
      (this.currentStart =
        parseInt(
          this._index(this._index(t, this.data), this.filterIndex) /
            this.options.pageSize,
          10
        ) * this.options.pageSize),
      this.refresh();
  },
  deleteRow: function (t) {
    var e = this.currentStart,
      i = this.indexOf(t);
    -1 !== i
      ? (this.data.splice(i, 1),
        void 0 !== this.syncData && this.syncData.toDelete.push(t),
        this.filter(),
        e < this.filterIndex.length
          ? (this.currentStart = e)
          : ((this.currentStart = e - this.options.pageSize),
            this.currentStart < 0 && (this.currentStart = 0)),
        this.refresh())
      : console.log("No data found with id: " + t);
  },
  deleteAll: function (t) {
    var e = this.currentStart,
      i = [];
    void 0 !== this.syncData && this.syncData.toDelete.push(t);
    for (var s = 0; s < this.data.length; ++s)
      t(this.data[s]) || i.push(this.data[s]);
    (this.data = i),
      this.filter(),
      e < this.filterIndex.length
        ? (this.currentStart = e)
        : ((this.currentStart = e - this.options.pageSize),
          this.currentStart < 0 && (this.currentStart = 0)),
      this.refresh();
  },
  updateRow: function (t, e) {
    var i = this.indexOf(t);
    if (
      (void 0 !== this.syncData && (this.syncData.toUpdate[t] = e), -1 !== i)
    ) {
      for (var s in (t in e && delete e[t], this.data[i]))
        s in e && (this.data[i][s] = e[s]);
      this.sort(),
        this.filter(),
        (this.currentStart =
          parseInt(
            this._index(this.indexOf(t), this.filterIndex) /
              this.options.pageSize,
            10
          ) * this.options.pageSize),
        this.refresh();
    }
  },
  loadPage: function (t) {
    var e = this.currentStart / this.options.pageSize;
    t < 1
      ? (t = 1)
      : t > this.getLastPageNumber() && (t = this.getLastPageNumber()),
      (this.currentStart = (t - 1) * this.options.pageSize),
      this.refresh(),
      this.options.onChange.call(this.table, e + 1, t);
  },
  getCurrentPage: function () {
    return this.currentStart / this.options.pageSize + 1;
  },
  refresh: function () {
    if (
      (this.options.beforeRefresh.call(this.table),
      this.updatePaging(),
      this.updateCounter(),
      (this.table.tBodies[0].innerHTML = ""),
      this.currentStart >= this.currentDataLength)
    )
      this.table.tBodies[0].innerHTML =
        '<tr><td colspan="' +
        this.options.nbColumns +
        '"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></tr>';
    else {
      for (
        var t = 0;
        t < this.options.pageSize &&
        t + this.currentStart < this.filterIndex.length;
        t++
      ) {
        var e = this.filterIndex[this.currentStart + t],
          i = this.data[e];
        this.table.tBodies[0].appendChild(
          this.options.lineFormat.call(this.table, e, i)
        );
      }
      this.options.afterRefresh.call(this.table);
    }
  },
  setOption: function (t, e) {
    t in this.options &&
      ((this.options[t] = e),
      "sort" === t &&
        (this.destroySort(), this.createSort(), this.triggerSort()),
      ("sortKey" !== t && "sortDir" !== t) || this.sort(),
      "filters" === t && (this.destroyFilter(), this.createFilter()),
      "filterText" === t && this.changePlaceHolder(),
      this.filter());
  },
  setOptions: function (t) {
    for (var e in t) e in this.options && (this.options[e] = t[e]);
    "sort" in t
      ? (this.destroySort(), this.createSort(), this.triggerSort())
      : ("sortKey" in t || "sortDir" in t) && this.sort(),
      "filters" in t && (this.destroyFilter(), this.createFilter()),
      "filterText" in t && this.changePlaceHolder(),
      this.filter();
  },
  destroy: function () {
    void 0 !== this.refreshTimeOut && clearTimeout(this.refreshTimeOut),
      this.destroySort();
    for (var t = 0; t < this.pagingDivs.length; ++t)
      this.pagingDivs[t].classList.remove("pagination-datatable"),
        this.pagingDivs[t].classList.remove(this.options.pagingDivClass),
        (this.pagingDivs[t].innerHTML = "");
    this.destroyFilter(),
      this.table.classList.remove(this.options.tableClass),
      this.removeNode(this.table.tBodies[0]),
      this.table.appendChild(document.createElement("tbody"));
    for (t = 0; t < this.data.length; t++) {
      var e = this.filterIndex[this.currentStart + t],
        i = this.data[e];
      this.table.tBodies[0].appendChild(
        this.options.lineFormat.call(this.table, e, i)
      );
    }
  },
}),
  (DataTable.defaultOptions = {
    forceStrings: !1,
    tableClass: "datatable",
    pagingDivSelector: ".paging",
    pagingDivClass: "text-center",
    pagingListClass: "pagination",
    pagingItemClass: "",
    pagingLinkClass: "",
    pagingLinkHref: "",
    pagingLinkDisabledTabIndex: !1,
    counterDivSelector: ".counter",
    loadingDivSelector: ".loading",
    sort: !1,
    sortKey: !1,
    sortDir: "asc",
    nbColumns: -1,
    pageSize: 20,
    pagingNumberOfPages: 9,
    identify: !1,
    onChange: function (t, e) {},
    counterText: function (t, e, i, s, a, n) {
      var r =
        "Page " +
        t +
        " on " +
        e +
        ". Showing " +
        i +
        " to " +
        s +
        " of " +
        a +
        " entries";
      return (
        a != n && (r += " (filtered from " + n + " total entries)"), (r += ".")
      );
    },
    firstPage: "&lt;&lt;",
    prevPage: "&lt;",
    pagingPages: !1,
    nextPage: "&gt;",
    lastPage: "&gt;&gt;",
    dataTypes: !0,
    filters: {},
    filterText: "Search... ",
    filterEmptySelect: "",
    filterSelectOptions: !1,
    filterInputClass: "form-control",
    filterSelectClass: "form-control",
    beforeRefresh: function () {},
    afterRefresh: function () {},
    lineFormat: function (t, e) {
      var i = document.createElement("tr");
      for (var s in ((i.dataset.id = t), e))
        e.hasOwnProperty(s) && (i.innerHTML += "<td>" + e[s] + "</td>");
      return i;
    },
  }),
  (DataTable.defaultAjaxOptions = {
    url: null,
    size: null,
    refresh: !1,
    allInOne: !1,
    timeout: 2e3,
  });

/*!
 * Chart.js v2.9.3
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = t || self).Chart = e());
})(this, function () {
  "use strict";
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;
  function t() {
    throw new Error(
      "Dynamic requires are not currently supported by rollup-plugin-commonjs"
    );
  }
  function e(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var n = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50],
    },
    i = e(function (t) {
      var e = {};
      for (var i in n) n.hasOwnProperty(i) && (e[n[i]] = i);
      var a = (t.exports = {
        rgb: { channels: 3, labels: "rgb" },
        hsl: { channels: 3, labels: "hsl" },
        hsv: { channels: 3, labels: "hsv" },
        hwb: { channels: 3, labels: "hwb" },
        cmyk: { channels: 4, labels: "cmyk" },
        xyz: { channels: 3, labels: "xyz" },
        lab: { channels: 3, labels: "lab" },
        lch: { channels: 3, labels: "lch" },
        hex: { channels: 1, labels: ["hex"] },
        keyword: { channels: 1, labels: ["keyword"] },
        ansi16: { channels: 1, labels: ["ansi16"] },
        ansi256: { channels: 1, labels: ["ansi256"] },
        hcg: { channels: 3, labels: ["h", "c", "g"] },
        apple: { channels: 3, labels: ["r16", "g16", "b16"] },
        gray: { channels: 1, labels: ["gray"] },
      });
      for (var r in a)
        if (a.hasOwnProperty(r)) {
          if (!("channels" in a[r]))
            throw new Error("missing channels property: " + r);
          if (!("labels" in a[r]))
            throw new Error("missing channel labels property: " + r);
          if (a[r].labels.length !== a[r].channels)
            throw new Error("channel and label counts mismatch: " + r);
          var o = a[r].channels,
            s = a[r].labels;
          delete a[r].channels,
            delete a[r].labels,
            Object.defineProperty(a[r], "channels", { value: o }),
            Object.defineProperty(a[r], "labels", { value: s });
        }
      (a.rgb.hsl = function (t) {
        var e,
          n,
          i = t[0] / 255,
          a = t[1] / 255,
          r = t[2] / 255,
          o = Math.min(i, a, r),
          s = Math.max(i, a, r),
          l = s - o;
        return (
          s === o
            ? (e = 0)
            : i === s
            ? (e = (a - r) / l)
            : a === s
            ? (e = 2 + (r - i) / l)
            : r === s && (e = 4 + (i - a) / l),
          (e = Math.min(60 * e, 360)) < 0 && (e += 360),
          (n = (o + s) / 2),
          [
            e,
            100 * (s === o ? 0 : n <= 0.5 ? l / (s + o) : l / (2 - s - o)),
            100 * n,
          ]
        );
      }),
        (a.rgb.hsv = function (t) {
          var e,
            n,
            i,
            a,
            r,
            o = t[0] / 255,
            s = t[1] / 255,
            l = t[2] / 255,
            u = Math.max(o, s, l),
            d = u - Math.min(o, s, l),
            h = function (t) {
              return (u - t) / 6 / d + 0.5;
            };
          return (
            0 === d
              ? (a = r = 0)
              : ((r = d / u),
                (e = h(o)),
                (n = h(s)),
                (i = h(l)),
                o === u
                  ? (a = i - n)
                  : s === u
                  ? (a = 1 / 3 + e - i)
                  : l === u && (a = 2 / 3 + n - e),
                a < 0 ? (a += 1) : a > 1 && (a -= 1)),
            [360 * a, 100 * r, 100 * u]
          );
        }),
        (a.rgb.hwb = function (t) {
          var e = t[0],
            n = t[1],
            i = t[2];
          return [
            a.rgb.hsl(t)[0],
            100 * ((1 / 255) * Math.min(e, Math.min(n, i))),
            100 * (i = 1 - (1 / 255) * Math.max(e, Math.max(n, i))),
          ];
        }),
        (a.rgb.cmyk = function (t) {
          var e,
            n = t[0] / 255,
            i = t[1] / 255,
            a = t[2] / 255;
          return [
            100 *
              ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - a))) / (1 - e) || 0),
            100 * ((1 - i - e) / (1 - e) || 0),
            100 * ((1 - a - e) / (1 - e) || 0),
            100 * e,
          ];
        }),
        (a.rgb.keyword = function (t) {
          var i = e[t];
          if (i) return i;
          var a,
            r,
            o,
            s = 1 / 0;
          for (var l in n)
            if (n.hasOwnProperty(l)) {
              var u = n[l],
                d =
                  ((r = t),
                  (o = u),
                  Math.pow(r[0] - o[0], 2) +
                    Math.pow(r[1] - o[1], 2) +
                    Math.pow(r[2] - o[2], 2));
              d < s && ((s = d), (a = l));
            }
          return a;
        }),
        (a.keyword.rgb = function (t) {
          return n[t];
        }),
        (a.rgb.xyz = function (t) {
          var e = t[0] / 255,
            n = t[1] / 255,
            i = t[2] / 255;
          return [
            100 *
              (0.4124 *
                (e =
                  e > 0.04045
                    ? Math.pow((e + 0.055) / 1.055, 2.4)
                    : e / 12.92) +
                0.3576 *
                  (n =
                    n > 0.04045
                      ? Math.pow((n + 0.055) / 1.055, 2.4)
                      : n / 12.92) +
                0.1805 *
                  (i =
                    i > 0.04045
                      ? Math.pow((i + 0.055) / 1.055, 2.4)
                      : i / 12.92)),
            100 * (0.2126 * e + 0.7152 * n + 0.0722 * i),
            100 * (0.0193 * e + 0.1192 * n + 0.9505 * i),
          ];
        }),
        (a.rgb.lab = function (t) {
          var e = a.rgb.xyz(t),
            n = e[0],
            i = e[1],
            r = e[2];
          return (
            (i /= 100),
            (r /= 108.883),
            (n =
              (n /= 95.047) > 0.008856
                ? Math.pow(n, 1 / 3)
                : 7.787 * n + 16 / 116),
            [
              116 *
                (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) -
                16,
              500 * (n - i),
              200 *
                (i -
                  (r =
                    r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116)),
            ]
          );
        }),
        (a.hsl.rgb = function (t) {
          var e,
            n,
            i,
            a,
            r,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;
          if (0 === s) return [(r = 255 * l), r, r];
          (e = 2 * l - (n = l < 0.5 ? l * (1 + s) : l + s - l * s)),
            (a = [0, 0, 0]);
          for (var u = 0; u < 3; u++)
            (i = o + (1 / 3) * -(u - 1)) < 0 && i++,
              i > 1 && i--,
              (r =
                6 * i < 1
                  ? e + 6 * (n - e) * i
                  : 2 * i < 1
                  ? n
                  : 3 * i < 2
                  ? e + (n - e) * (2 / 3 - i) * 6
                  : e),
              (a[u] = 255 * r);
          return a;
        }),
        (a.hsl.hsv = function (t) {
          var e = t[0],
            n = t[1] / 100,
            i = t[2] / 100,
            a = n,
            r = Math.max(i, 0.01);
          return (
            (n *= (i *= 2) <= 1 ? i : 2 - i),
            (a *= r <= 1 ? r : 2 - r),
            [
              e,
              100 * (0 === i ? (2 * a) / (r + a) : (2 * n) / (i + n)),
              100 * ((i + n) / 2),
            ]
          );
        }),
        (a.hsv.rgb = function (t) {
          var e = t[0] / 60,
            n = t[1] / 100,
            i = t[2] / 100,
            a = Math.floor(e) % 6,
            r = e - Math.floor(e),
            o = 255 * i * (1 - n),
            s = 255 * i * (1 - n * r),
            l = 255 * i * (1 - n * (1 - r));
          switch (((i *= 255), a)) {
            case 0:
              return [i, l, o];
            case 1:
              return [s, i, o];
            case 2:
              return [o, i, l];
            case 3:
              return [o, s, i];
            case 4:
              return [l, o, i];
            case 5:
              return [i, o, s];
          }
        }),
        (a.hsv.hsl = function (t) {
          var e,
            n,
            i,
            a = t[0],
            r = t[1] / 100,
            o = t[2] / 100,
            s = Math.max(o, 0.01);
          return (
            (i = (2 - r) * o),
            (n = r * s),
            [
              a,
              100 * (n = (n /= (e = (2 - r) * s) <= 1 ? e : 2 - e) || 0),
              100 * (i /= 2),
            ]
          );
        }),
        (a.hwb.rgb = function (t) {
          var e,
            n,
            i,
            a,
            r,
            o,
            s,
            l = t[0] / 360,
            u = t[1] / 100,
            d = t[2] / 100,
            h = u + d;
          switch (
            (h > 1 && ((u /= h), (d /= h)),
            (i = 6 * l - (e = Math.floor(6 * l))),
            0 != (1 & e) && (i = 1 - i),
            (a = u + i * ((n = 1 - d) - u)),
            e)
          ) {
            default:
            case 6:
            case 0:
              (r = n), (o = a), (s = u);
              break;
            case 1:
              (r = a), (o = n), (s = u);
              break;
            case 2:
              (r = u), (o = n), (s = a);
              break;
            case 3:
              (r = u), (o = a), (s = n);
              break;
            case 4:
              (r = a), (o = u), (s = n);
              break;
            case 5:
              (r = n), (o = u), (s = a);
          }
          return [255 * r, 255 * o, 255 * s];
        }),
        (a.cmyk.rgb = function (t) {
          var e = t[0] / 100,
            n = t[1] / 100,
            i = t[2] / 100,
            a = t[3] / 100;
          return [
            255 * (1 - Math.min(1, e * (1 - a) + a)),
            255 * (1 - Math.min(1, n * (1 - a) + a)),
            255 * (1 - Math.min(1, i * (1 - a) + a)),
          ];
        }),
        (a.xyz.rgb = function (t) {
          var e,
            n,
            i,
            a = t[0] / 100,
            r = t[1] / 100,
            o = t[2] / 100;
          return (
            (n = -0.9689 * a + 1.8758 * r + 0.0415 * o),
            (i = 0.0557 * a + -0.204 * r + 1.057 * o),
            (e =
              (e = 3.2406 * a + -1.5372 * r + -0.4986 * o) > 0.0031308
                ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
                : 12.92 * e),
            (n =
              n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n),
            (i =
              i > 0.0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055 : 12.92 * i),
            [
              255 * (e = Math.min(Math.max(0, e), 1)),
              255 * (n = Math.min(Math.max(0, n), 1)),
              255 * (i = Math.min(Math.max(0, i), 1)),
            ]
          );
        }),
        (a.xyz.lab = function (t) {
          var e = t[0],
            n = t[1],
            i = t[2];
          return (
            (n /= 100),
            (i /= 108.883),
            (e =
              (e /= 95.047) > 0.008856
                ? Math.pow(e, 1 / 3)
                : 7.787 * e + 16 / 116),
            [
              116 *
                (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) -
                16,
              500 * (e - n),
              200 *
                (n -
                  (i =
                    i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116)),
            ]
          );
        }),
        (a.lab.xyz = function (t) {
          var e,
            n,
            i,
            a = t[0];
          (e = t[1] / 500 + (n = (a + 16) / 116)), (i = n - t[2] / 200);
          var r = Math.pow(n, 3),
            o = Math.pow(e, 3),
            s = Math.pow(i, 3);
          return (
            (n = r > 0.008856 ? r : (n - 16 / 116) / 7.787),
            (e = o > 0.008856 ? o : (e - 16 / 116) / 7.787),
            (i = s > 0.008856 ? s : (i - 16 / 116) / 7.787),
            [(e *= 95.047), (n *= 100), (i *= 108.883)]
          );
        }),
        (a.lab.lch = function (t) {
          var e,
            n = t[0],
            i = t[1],
            a = t[2];
          return (
            (e = (360 * Math.atan2(a, i)) / 2 / Math.PI) < 0 && (e += 360),
            [n, Math.sqrt(i * i + a * a), e]
          );
        }),
        (a.lch.lab = function (t) {
          var e,
            n = t[0],
            i = t[1];
          return (
            (e = (t[2] / 360) * 2 * Math.PI),
            [n, i * Math.cos(e), i * Math.sin(e)]
          );
        }),
        (a.rgb.ansi16 = function (t) {
          var e = t[0],
            n = t[1],
            i = t[2],
            r = 1 in arguments ? arguments[1] : a.rgb.hsv(t)[2];
          if (0 === (r = Math.round(r / 50))) return 30;
          var o =
            30 +
            ((Math.round(i / 255) << 2) |
              (Math.round(n / 255) << 1) |
              Math.round(e / 255));
          return 2 === r && (o += 60), o;
        }),
        (a.hsv.ansi16 = function (t) {
          return a.rgb.ansi16(a.hsv.rgb(t), t[2]);
        }),
        (a.rgb.ansi256 = function (t) {
          var e = t[0],
            n = t[1],
            i = t[2];
          return e === n && n === i
            ? e < 8
              ? 16
              : e > 248
              ? 231
              : Math.round(((e - 8) / 247) * 24) + 232
            : 16 +
                36 * Math.round((e / 255) * 5) +
                6 * Math.round((n / 255) * 5) +
                Math.round((i / 255) * 5);
        }),
        (a.ansi16.rgb = function (t) {
          var e = t % 10;
          if (0 === e || 7 === e)
            return t > 50 && (e += 3.5), [(e = (e / 10.5) * 255), e, e];
          var n = 0.5 * (1 + ~~(t > 50));
          return [
            (1 & e) * n * 255,
            ((e >> 1) & 1) * n * 255,
            ((e >> 2) & 1) * n * 255,
          ];
        }),
        (a.ansi256.rgb = function (t) {
          if (t >= 232) {
            var e = 10 * (t - 232) + 8;
            return [e, e, e];
          }
          var n;
          return (
            (t -= 16),
            [
              (Math.floor(t / 36) / 5) * 255,
              (Math.floor((n = t % 36) / 6) / 5) * 255,
              ((n % 6) / 5) * 255,
            ]
          );
        }),
        (a.rgb.hex = function (t) {
          var e = (
            ((255 & Math.round(t[0])) << 16) +
            ((255 & Math.round(t[1])) << 8) +
            (255 & Math.round(t[2]))
          )
            .toString(16)
            .toUpperCase();
          return "000000".substring(e.length) + e;
        }),
        (a.hex.rgb = function (t) {
          var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!e) return [0, 0, 0];
          var n = e[0];
          3 === e[0].length &&
            (n = n
              .split("")
              .map(function (t) {
                return t + t;
              })
              .join(""));
          var i = parseInt(n, 16);
          return [(i >> 16) & 255, (i >> 8) & 255, 255 & i];
        }),
        (a.rgb.hcg = function (t) {
          var e,
            n = t[0] / 255,
            i = t[1] / 255,
            a = t[2] / 255,
            r = Math.max(Math.max(n, i), a),
            o = Math.min(Math.min(n, i), a),
            s = r - o;
          return (
            (e =
              s <= 0
                ? 0
                : r === n
                ? ((i - a) / s) % 6
                : r === i
                ? 2 + (a - n) / s
                : 4 + (n - i) / s + 4),
            (e /= 6),
            [360 * (e %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]
          );
        }),
        (a.hsl.hcg = function (t) {
          var e = t[1] / 100,
            n = t[2] / 100,
            i = 1,
            a = 0;
          return (
            (i = n < 0.5 ? 2 * e * n : 2 * e * (1 - n)) < 1 &&
              (a = (n - 0.5 * i) / (1 - i)),
            [t[0], 100 * i, 100 * a]
          );
        }),
        (a.hsv.hcg = function (t) {
          var e = t[1] / 100,
            n = t[2] / 100,
            i = e * n,
            a = 0;
          return i < 1 && (a = (n - i) / (1 - i)), [t[0], 100 * i, 100 * a];
        }),
        (a.hcg.rgb = function (t) {
          var e = t[0] / 360,
            n = t[1] / 100,
            i = t[2] / 100;
          if (0 === n) return [255 * i, 255 * i, 255 * i];
          var a,
            r = [0, 0, 0],
            o = (e % 1) * 6,
            s = o % 1,
            l = 1 - s;
          switch (Math.floor(o)) {
            case 0:
              (r[0] = 1), (r[1] = s), (r[2] = 0);
              break;
            case 1:
              (r[0] = l), (r[1] = 1), (r[2] = 0);
              break;
            case 2:
              (r[0] = 0), (r[1] = 1), (r[2] = s);
              break;
            case 3:
              (r[0] = 0), (r[1] = l), (r[2] = 1);
              break;
            case 4:
              (r[0] = s), (r[1] = 0), (r[2] = 1);
              break;
            default:
              (r[0] = 1), (r[1] = 0), (r[2] = l);
          }
          return (
            (a = (1 - n) * i),
            [255 * (n * r[0] + a), 255 * (n * r[1] + a), 255 * (n * r[2] + a)]
          );
        }),
        (a.hcg.hsv = function (t) {
          var e = t[1] / 100,
            n = e + (t[2] / 100) * (1 - e),
            i = 0;
          return n > 0 && (i = e / n), [t[0], 100 * i, 100 * n];
        }),
        (a.hcg.hsl = function (t) {
          var e = t[1] / 100,
            n = (t[2] / 100) * (1 - e) + 0.5 * e,
            i = 0;
          return (
            n > 0 && n < 0.5
              ? (i = e / (2 * n))
              : n >= 0.5 && n < 1 && (i = e / (2 * (1 - n))),
            [t[0], 100 * i, 100 * n]
          );
        }),
        (a.hcg.hwb = function (t) {
          var e = t[1] / 100,
            n = e + (t[2] / 100) * (1 - e);
          return [t[0], 100 * (n - e), 100 * (1 - n)];
        }),
        (a.hwb.hcg = function (t) {
          var e = t[1] / 100,
            n = 1 - t[2] / 100,
            i = n - e,
            a = 0;
          return i < 1 && (a = (n - i) / (1 - i)), [t[0], 100 * i, 100 * a];
        }),
        (a.apple.rgb = function (t) {
          return [
            (t[0] / 65535) * 255,
            (t[1] / 65535) * 255,
            (t[2] / 65535) * 255,
          ];
        }),
        (a.rgb.apple = function (t) {
          return [
            (t[0] / 255) * 65535,
            (t[1] / 255) * 65535,
            (t[2] / 255) * 65535,
          ];
        }),
        (a.gray.rgb = function (t) {
          return [(t[0] / 100) * 255, (t[0] / 100) * 255, (t[0] / 100) * 255];
        }),
        (a.gray.hsl = a.gray.hsv =
          function (t) {
            return [0, 0, t[0]];
          }),
        (a.gray.hwb = function (t) {
          return [0, 100, t[0]];
        }),
        (a.gray.cmyk = function (t) {
          return [0, 0, 0, t[0]];
        }),
        (a.gray.lab = function (t) {
          return [t[0], 0, 0];
        }),
        (a.gray.hex = function (t) {
          var e = 255 & Math.round((t[0] / 100) * 255),
            n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
          return "000000".substring(n.length) + n;
        }),
        (a.rgb.gray = function (t) {
          return [((t[0] + t[1] + t[2]) / 3 / 255) * 100];
        });
    });
  i.rgb,
    i.hsl,
    i.hsv,
    i.hwb,
    i.cmyk,
    i.xyz,
    i.lab,
    i.lch,
    i.hex,
    i.keyword,
    i.ansi16,
    i.ansi256,
    i.hcg,
    i.apple,
    i.gray;
  function a(t) {
    var e = (function () {
        for (var t = {}, e = Object.keys(i), n = e.length, a = 0; a < n; a++)
          t[e[a]] = { distance: -1, parent: null };
        return t;
      })(),
      n = [t];
    for (e[t].distance = 0; n.length; )
      for (
        var a = n.pop(), r = Object.keys(i[a]), o = r.length, s = 0;
        s < o;
        s++
      ) {
        var l = r[s],
          u = e[l];
        -1 === u.distance &&
          ((u.distance = e[a].distance + 1), (u.parent = a), n.unshift(l));
      }
    return e;
  }
  function r(t, e) {
    return function (n) {
      return e(t(n));
    };
  }
  function o(t, e) {
    for (
      var n = [e[t].parent, t], a = i[e[t].parent][t], o = e[t].parent;
      e[o].parent;

    )
      n.unshift(e[o].parent), (a = r(i[e[o].parent][o], a)), (o = e[o].parent);
    return (a.conversion = n), a;
  }
  var s = {};
  Object.keys(i).forEach(function (t) {
    (s[t] = {}),
      Object.defineProperty(s[t], "channels", { value: i[t].channels }),
      Object.defineProperty(s[t], "labels", { value: i[t].labels });
    var e = (function (t) {
      for (
        var e = a(t), n = {}, i = Object.keys(e), r = i.length, s = 0;
        s < r;
        s++
      ) {
        var l = i[s];
        null !== e[l].parent && (n[l] = o(l, e));
      }
      return n;
    })(t);
    Object.keys(e).forEach(function (n) {
      var i = e[n];
      (s[t][n] = (function (t) {
        var e = function (e) {
          if (null == e) return e;
          arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
          var n = t(e);
          if ("object" == typeof n)
            for (var i = n.length, a = 0; a < i; a++) n[a] = Math.round(n[a]);
          return n;
        };
        return "conversion" in t && (e.conversion = t.conversion), e;
      })(i)),
        (s[t][n].raw = (function (t) {
          var e = function (e) {
            return null == e
              ? e
              : (arguments.length > 1 &&
                  (e = Array.prototype.slice.call(arguments)),
                t(e));
          };
          return "conversion" in t && (e.conversion = t.conversion), e;
        })(i));
    });
  });
  var l = s,
    u = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50],
    },
    d = {
      getRgba: h,
      getHsla: c,
      getRgb: function (t) {
        var e = h(t);
        return e && e.slice(0, 3);
      },
      getHsl: function (t) {
        var e = c(t);
        return e && e.slice(0, 3);
      },
      getHwb: f,
      getAlpha: function (t) {
        var e = h(t);
        if (e) return e[3];
        if ((e = c(t))) return e[3];
        if ((e = f(t))) return e[3];
      },
      hexString: function (t, e) {
        e = void 0 !== e && 3 === t.length ? e : t[3];
        return (
          "#" +
          b(t[0]) +
          b(t[1]) +
          b(t[2]) +
          (e >= 0 && e < 1 ? b(Math.round(255 * e)) : "")
        );
      },
      rgbString: function (t, e) {
        if (e < 1 || (t[3] && t[3] < 1)) return g(t, e);
        return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      },
      rgbaString: g,
      percentString: function (t, e) {
        if (e < 1 || (t[3] && t[3] < 1)) return m(t, e);
        var n = Math.round((t[0] / 255) * 100),
          i = Math.round((t[1] / 255) * 100),
          a = Math.round((t[2] / 255) * 100);
        return "rgb(" + n + "%, " + i + "%, " + a + "%)";
      },
      percentaString: m,
      hslString: function (t, e) {
        if (e < 1 || (t[3] && t[3] < 1)) return p(t, e);
        return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
      },
      hslaString: p,
      hwbString: function (t, e) {
        void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
        return (
          "hwb(" +
          t[0] +
          ", " +
          t[1] +
          "%, " +
          t[2] +
          "%" +
          (void 0 !== e && 1 !== e ? ", " + e : "") +
          ")"
        );
      },
      keyword: function (t) {
        return y[t.slice(0, 3)];
      },
    };
  function h(t) {
    if (t) {
      var e = [0, 0, 0],
        n = 1,
        i = t.match(/^#([a-fA-F0-9]{3,4})$/i),
        a = "";
      if (i) {
        a = (i = i[1])[3];
        for (var r = 0; r < e.length; r++) e[r] = parseInt(i[r] + i[r], 16);
        a && (n = Math.round((parseInt(a + a, 16) / 255) * 100) / 100);
      } else if ((i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i))) {
        (a = i[2]), (i = i[1]);
        for (r = 0; r < e.length; r++)
          e[r] = parseInt(i.slice(2 * r, 2 * r + 2), 16);
        a && (n = Math.round((parseInt(a, 16) / 255) * 100) / 100);
      } else if (
        (i = t.match(
          /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
        ))
      ) {
        for (r = 0; r < e.length; r++) e[r] = parseInt(i[r + 1]);
        n = parseFloat(i[4]);
      } else if (
        (i = t.match(
          /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
        ))
      ) {
        for (r = 0; r < e.length; r++)
          e[r] = Math.round(2.55 * parseFloat(i[r + 1]));
        n = parseFloat(i[4]);
      } else if ((i = t.match(/(\w+)/))) {
        if ("transparent" == i[1]) return [0, 0, 0, 0];
        if (!(e = u[i[1]])) return;
      }
      for (r = 0; r < e.length; r++) e[r] = v(e[r], 0, 255);
      return (n = n || 0 == n ? v(n, 0, 1) : 1), (e[3] = n), e;
    }
  }
  function c(t) {
    if (t) {
      var e = t.match(
        /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
      );
      if (e) {
        var n = parseFloat(e[4]);
        return [
          v(parseInt(e[1]), 0, 360),
          v(parseFloat(e[2]), 0, 100),
          v(parseFloat(e[3]), 0, 100),
          v(isNaN(n) ? 1 : n, 0, 1),
        ];
      }
    }
  }
  function f(t) {
    if (t) {
      var e = t.match(
        /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
      );
      if (e) {
        var n = parseFloat(e[4]);
        return [
          v(parseInt(e[1]), 0, 360),
          v(parseFloat(e[2]), 0, 100),
          v(parseFloat(e[3]), 0, 100),
          v(isNaN(n) ? 1 : n, 0, 1),
        ];
      }
    }
  }
  function g(t, e) {
    return (
      void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
      "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
    );
  }
  function m(t, e) {
    return (
      "rgba(" +
      Math.round((t[0] / 255) * 100) +
      "%, " +
      Math.round((t[1] / 255) * 100) +
      "%, " +
      Math.round((t[2] / 255) * 100) +
      "%, " +
      (e || t[3] || 1) +
      ")"
    );
  }
  function p(t, e) {
    return (
      void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
      "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
    );
  }
  function v(t, e, n) {
    return Math.min(Math.max(e, t), n);
  }
  function b(t) {
    var e = t.toString(16).toUpperCase();
    return e.length < 2 ? "0" + e : e;
  }
  var y = {};
  for (var x in u) y[u[x]] = x;
  var _ = function (t) {
    return t instanceof _
      ? t
      : this instanceof _
      ? ((this.valid = !1),
        (this.values = {
          rgb: [0, 0, 0],
          hsl: [0, 0, 0],
          hsv: [0, 0, 0],
          hwb: [0, 0, 0],
          cmyk: [0, 0, 0, 0],
          alpha: 1,
        }),
        void ("string" == typeof t
          ? (e = d.getRgba(t))
            ? this.setValues("rgb", e)
            : (e = d.getHsla(t))
            ? this.setValues("hsl", e)
            : (e = d.getHwb(t)) && this.setValues("hwb", e)
          : "object" == typeof t &&
            (void 0 !== (e = t).r || void 0 !== e.red
              ? this.setValues("rgb", e)
              : void 0 !== e.l || void 0 !== e.lightness
              ? this.setValues("hsl", e)
              : void 0 !== e.v || void 0 !== e.value
              ? this.setValues("hsv", e)
              : void 0 !== e.w || void 0 !== e.whiteness
              ? this.setValues("hwb", e)
              : (void 0 === e.c && void 0 === e.cyan) ||
                this.setValues("cmyk", e))))
      : new _(t);
    var e;
  };
  (_.prototype = {
    isValid: function () {
      return this.valid;
    },
    rgb: function () {
      return this.setSpace("rgb", arguments);
    },
    hsl: function () {
      return this.setSpace("hsl", arguments);
    },
    hsv: function () {
      return this.setSpace("hsv", arguments);
    },
    hwb: function () {
      return this.setSpace("hwb", arguments);
    },
    cmyk: function () {
      return this.setSpace("cmyk", arguments);
    },
    rgbArray: function () {
      return this.values.rgb;
    },
    hslArray: function () {
      return this.values.hsl;
    },
    hsvArray: function () {
      return this.values.hsv;
    },
    hwbArray: function () {
      var t = this.values;
      return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
    },
    cmykArray: function () {
      return this.values.cmyk;
    },
    rgbaArray: function () {
      var t = this.values;
      return t.rgb.concat([t.alpha]);
    },
    hslaArray: function () {
      var t = this.values;
      return t.hsl.concat([t.alpha]);
    },
    alpha: function (t) {
      return void 0 === t
        ? this.values.alpha
        : (this.setValues("alpha", t), this);
    },
    red: function (t) {
      return this.setChannel("rgb", 0, t);
    },
    green: function (t) {
      return this.setChannel("rgb", 1, t);
    },
    blue: function (t) {
      return this.setChannel("rgb", 2, t);
    },
    hue: function (t) {
      return (
        t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
      );
    },
    saturation: function (t) {
      return this.setChannel("hsl", 1, t);
    },
    lightness: function (t) {
      return this.setChannel("hsl", 2, t);
    },
    saturationv: function (t) {
      return this.setChannel("hsv", 1, t);
    },
    whiteness: function (t) {
      return this.setChannel("hwb", 1, t);
    },
    blackness: function (t) {
      return this.setChannel("hwb", 2, t);
    },
    value: function (t) {
      return this.setChannel("hsv", 2, t);
    },
    cyan: function (t) {
      return this.setChannel("cmyk", 0, t);
    },
    magenta: function (t) {
      return this.setChannel("cmyk", 1, t);
    },
    yellow: function (t) {
      return this.setChannel("cmyk", 2, t);
    },
    black: function (t) {
      return this.setChannel("cmyk", 3, t);
    },
    hexString: function () {
      return d.hexString(this.values.rgb);
    },
    rgbString: function () {
      return d.rgbString(this.values.rgb, this.values.alpha);
    },
    rgbaString: function () {
      return d.rgbaString(this.values.rgb, this.values.alpha);
    },
    percentString: function () {
      return d.percentString(this.values.rgb, this.values.alpha);
    },
    hslString: function () {
      return d.hslString(this.values.hsl, this.values.alpha);
    },
    hslaString: function () {
      return d.hslaString(this.values.hsl, this.values.alpha);
    },
    hwbString: function () {
      return d.hwbString(this.values.hwb, this.values.alpha);
    },
    keyword: function () {
      return d.keyword(this.values.rgb, this.values.alpha);
    },
    rgbNumber: function () {
      var t = this.values.rgb;
      return (t[0] << 16) | (t[1] << 8) | t[2];
    },
    luminosity: function () {
      for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
        var i = t[n] / 255;
        e[n] = i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
      }
      return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
    },
    contrast: function (t) {
      var e = this.luminosity(),
        n = t.luminosity();
      return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05);
    },
    level: function (t) {
      var e = this.contrast(t);
      return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
    },
    dark: function () {
      var t = this.values.rgb;
      return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
    },
    light: function () {
      return !this.dark();
    },
    negate: function () {
      for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
      return this.setValues("rgb", t), this;
    },
    lighten: function (t) {
      var e = this.values.hsl;
      return (e[2] += e[2] * t), this.setValues("hsl", e), this;
    },
    darken: function (t) {
      var e = this.values.hsl;
      return (e[2] -= e[2] * t), this.setValues("hsl", e), this;
    },
    saturate: function (t) {
      var e = this.values.hsl;
      return (e[1] += e[1] * t), this.setValues("hsl", e), this;
    },
    desaturate: function (t) {
      var e = this.values.hsl;
      return (e[1] -= e[1] * t), this.setValues("hsl", e), this;
    },
    whiten: function (t) {
      var e = this.values.hwb;
      return (e[1] += e[1] * t), this.setValues("hwb", e), this;
    },
    blacken: function (t) {
      var e = this.values.hwb;
      return (e[2] += e[2] * t), this.setValues("hwb", e), this;
    },
    greyscale: function () {
      var t = this.values.rgb,
        e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
      return this.setValues("rgb", [e, e, e]), this;
    },
    clearer: function (t) {
      var e = this.values.alpha;
      return this.setValues("alpha", e - e * t), this;
    },
    opaquer: function (t) {
      var e = this.values.alpha;
      return this.setValues("alpha", e + e * t), this;
    },
    rotate: function (t) {
      var e = this.values.hsl,
        n = (e[0] + t) % 360;
      return (e[0] = n < 0 ? 360 + n : n), this.setValues("hsl", e), this;
    },
    mix: function (t, e) {
      var n = t,
        i = void 0 === e ? 0.5 : e,
        a = 2 * i - 1,
        r = this.alpha() - n.alpha(),
        o = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
        s = 1 - o;
      return this.rgb(
        o * this.red() + s * n.red(),
        o * this.green() + s * n.green(),
        o * this.blue() + s * n.blue()
      ).alpha(this.alpha() * i + n.alpha() * (1 - i));
    },
    toJSON: function () {
      return this.rgb();
    },
    clone: function () {
      var t,
        e,
        n = new _(),
        i = this.values,
        a = n.values;
      for (var r in i)
        i.hasOwnProperty(r) &&
          ((t = i[r]),
          "[object Array]" === (e = {}.toString.call(t))
            ? (a[r] = t.slice(0))
            : "[object Number]" === e
            ? (a[r] = t)
            : console.error("unexpected color value:", t));
      return n;
    },
  }),
    (_.prototype.spaces = {
      rgb: ["red", "green", "blue"],
      hsl: ["hue", "saturation", "lightness"],
      hsv: ["hue", "saturation", "value"],
      hwb: ["hue", "whiteness", "blackness"],
      cmyk: ["cyan", "magenta", "yellow", "black"],
    }),
    (_.prototype.maxes = {
      rgb: [255, 255, 255],
      hsl: [360, 100, 100],
      hsv: [360, 100, 100],
      hwb: [360, 100, 100],
      cmyk: [100, 100, 100, 100],
    }),
    (_.prototype.getValues = function (t) {
      for (var e = this.values, n = {}, i = 0; i < t.length; i++)
        n[t.charAt(i)] = e[t][i];
      return 1 !== e.alpha && (n.a = e.alpha), n;
    }),
    (_.prototype.setValues = function (t, e) {
      var n,
        i,
        a = this.values,
        r = this.spaces,
        o = this.maxes,
        s = 1;
      if (((this.valid = !0), "alpha" === t)) s = e;
      else if (e.length) (a[t] = e.slice(0, t.length)), (s = e[t.length]);
      else if (void 0 !== e[t.charAt(0)]) {
        for (n = 0; n < t.length; n++) a[t][n] = e[t.charAt(n)];
        s = e.a;
      } else if (void 0 !== e[r[t][0]]) {
        var u = r[t];
        for (n = 0; n < t.length; n++) a[t][n] = e[u[n]];
        s = e.alpha;
      }
      if (
        ((a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s))),
        "alpha" === t)
      )
        return !1;
      for (n = 0; n < t.length; n++)
        (i = Math.max(0, Math.min(o[t][n], a[t][n]))),
          (a[t][n] = Math.round(i));
      for (var d in r) d !== t && (a[d] = l[t][d](a[t]));
      return !0;
    }),
    (_.prototype.setSpace = function (t, e) {
      var n = e[0];
      return void 0 === n
        ? this.getValues(t)
        : ("number" == typeof n && (n = Array.prototype.slice.call(e)),
          this.setValues(t, n),
          this);
    }),
    (_.prototype.setChannel = function (t, e, n) {
      var i = this.values[t];
      return void 0 === n
        ? i[e]
        : n === i[e]
        ? this
        : ((i[e] = n), this.setValues(t, i), this);
    }),
    "undefined" != typeof window && (window.Color = _);
  var w,
    k = _,
    M = {
      noop: function () {},
      uid:
        ((w = 0),
        function () {
          return w++;
        }),
      isNullOrUndef: function (t) {
        return null == t;
      },
      isArray: function (t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        var e = Object.prototype.toString.call(t);
        return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
      },
      isObject: function (t) {
        return (
          null !== t && "[object Object]" === Object.prototype.toString.call(t)
        );
      },
      isFinite: function (t) {
        return ("number" == typeof t || t instanceof Number) && isFinite(t);
      },
      valueOrDefault: function (t, e) {
        return void 0 === t ? e : t;
      },
      valueAtIndexOrDefault: function (t, e, n) {
        return M.valueOrDefault(M.isArray(t) ? t[e] : t, n);
      },
      callback: function (t, e, n) {
        if (t && "function" == typeof t.call) return t.apply(n, e);
      },
      each: function (t, e, n, i) {
        var a, r, o;
        if (M.isArray(t))
          if (((r = t.length), i))
            for (a = r - 1; a >= 0; a--) e.call(n, t[a], a);
          else for (a = 0; a < r; a++) e.call(n, t[a], a);
        else if (M.isObject(t))
          for (r = (o = Object.keys(t)).length, a = 0; a < r; a++)
            e.call(n, t[o[a]], o[a]);
      },
      arrayEquals: function (t, e) {
        var n, i, a, r;
        if (!t || !e || t.length !== e.length) return !1;
        for (n = 0, i = t.length; n < i; ++n)
          if (
            ((a = t[n]), (r = e[n]), a instanceof Array && r instanceof Array)
          ) {
            if (!M.arrayEquals(a, r)) return !1;
          } else if (a !== r) return !1;
        return !0;
      },
      clone: function (t) {
        if (M.isArray(t)) return t.map(M.clone);
        if (M.isObject(t)) {
          for (var e = {}, n = Object.keys(t), i = n.length, a = 0; a < i; ++a)
            e[n[a]] = M.clone(t[n[a]]);
          return e;
        }
        return t;
      },
      _merger: function (t, e, n, i) {
        var a = e[t],
          r = n[t];
        M.isObject(a) && M.isObject(r) ? M.merge(a, r, i) : (e[t] = M.clone(r));
      },
      _mergerIf: function (t, e, n) {
        var i = e[t],
          a = n[t];
        M.isObject(i) && M.isObject(a)
          ? M.mergeIf(i, a)
          : e.hasOwnProperty(t) || (e[t] = M.clone(a));
      },
      merge: function (t, e, n) {
        var i,
          a,
          r,
          o,
          s,
          l = M.isArray(e) ? e : [e],
          u = l.length;
        if (!M.isObject(t)) return t;
        for (i = (n = n || {}).merger || M._merger, a = 0; a < u; ++a)
          if (((e = l[a]), M.isObject(e)))
            for (s = 0, o = (r = Object.keys(e)).length; s < o; ++s)
              i(r[s], t, e, n);
        return t;
      },
      mergeIf: function (t, e) {
        return M.merge(t, e, { merger: M._mergerIf });
      },
      extend:
        Object.assign ||
        function (t) {
          return M.merge(t, [].slice.call(arguments, 1), {
            merger: function (t, e, n) {
              e[t] = n[t];
            },
          });
        },
      inherits: function (t) {
        var e = this,
          n =
            t && t.hasOwnProperty("constructor")
              ? t.constructor
              : function () {
                  return e.apply(this, arguments);
                },
          i = function () {
            this.constructor = n;
          };
        return (
          (i.prototype = e.prototype),
          (n.prototype = new i()),
          (n.extend = M.inherits),
          t && M.extend(n.prototype, t),
          (n.__super__ = e.prototype),
          n
        );
      },
      _deprecated: function (t, e, n, i) {
        void 0 !== e &&
          console.warn(
            t + ': "' + n + '" is deprecated. Please use "' + i + '" instead'
          );
      },
    },
    S = M;
  (M.callCallback = M.callback),
    (M.indexOf = function (t, e, n) {
      return Array.prototype.indexOf.call(t, e, n);
    }),
    (M.getValueOrDefault = M.valueOrDefault),
    (M.getValueAtIndexOrDefault = M.valueAtIndexOrDefault);
  var D = {
      linear: function (t) {
        return t;
      },
      easeInQuad: function (t) {
        return t * t;
      },
      easeOutQuad: function (t) {
        return -t * (t - 2);
      },
      easeInOutQuad: function (t) {
        return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
      },
      easeInCubic: function (t) {
        return t * t * t;
      },
      easeOutCubic: function (t) {
        return (t -= 1) * t * t + 1;
      },
      easeInOutCubic: function (t) {
        return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
      },
      easeInQuart: function (t) {
        return t * t * t * t;
      },
      easeOutQuart: function (t) {
        return -((t -= 1) * t * t * t - 1);
      },
      easeInOutQuart: function (t) {
        return (t /= 0.5) < 1
          ? 0.5 * t * t * t * t
          : -0.5 * ((t -= 2) * t * t * t - 2);
      },
      easeInQuint: function (t) {
        return t * t * t * t * t;
      },
      easeOutQuint: function (t) {
        return (t -= 1) * t * t * t * t + 1;
      },
      easeInOutQuint: function (t) {
        return (t /= 0.5) < 1
          ? 0.5 * t * t * t * t * t
          : 0.5 * ((t -= 2) * t * t * t * t + 2);
      },
      easeInSine: function (t) {
        return 1 - Math.cos(t * (Math.PI / 2));
      },
      easeOutSine: function (t) {
        return Math.sin(t * (Math.PI / 2));
      },
      easeInOutSine: function (t) {
        return -0.5 * (Math.cos(Math.PI * t) - 1);
      },
      easeInExpo: function (t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
      },
      easeOutExpo: function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      },
      easeInOutExpo: function (t) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (t /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (t - 1))
          : 0.5 * (2 - Math.pow(2, -10 * --t));
      },
      easeInCirc: function (t) {
        return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
      },
      easeOutCirc: function (t) {
        return Math.sqrt(1 - (t -= 1) * t);
      },
      easeInOutCirc: function (t) {
        return (t /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - t * t) - 1)
          : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      },
      easeInElastic: function (t) {
        var e = 1.70158,
          n = 0,
          i = 1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (e = n / 4))
              : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            -i *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin(((t - e) * (2 * Math.PI)) / n));
      },
      easeOutElastic: function (t) {
        var e = 1.70158,
          n = 0,
          i = 1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (e = n / 4))
              : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            i * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / n) +
              1);
      },
      easeInOutElastic: function (t) {
        var e = 1.70158,
          n = 0,
          i = 1;
        return 0 === t
          ? 0
          : 2 == (t /= 0.5)
          ? 1
          : (n || (n = 0.45),
            i < 1
              ? ((i = 1), (e = n / 4))
              : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            t < 1
              ? i *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t - e) * (2 * Math.PI)) / n) *
                -0.5
              : i *
                  Math.pow(2, -10 * (t -= 1)) *
                  Math.sin(((t - e) * (2 * Math.PI)) / n) *
                  0.5 +
                1);
      },
      easeInBack: function (t) {
        var e = 1.70158;
        return t * t * ((e + 1) * t - e);
      },
      easeOutBack: function (t) {
        var e = 1.70158;
        return (t -= 1) * t * ((e + 1) * t + e) + 1;
      },
      easeInOutBack: function (t) {
        var e = 1.70158;
        return (t /= 0.5) < 1
          ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      },
      easeInBounce: function (t) {
        return 1 - D.easeOutBounce(1 - t);
      },
      easeOutBounce: function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      },
      easeInOutBounce: function (t) {
        return t < 0.5
          ? 0.5 * D.easeInBounce(2 * t)
          : 0.5 * D.easeOutBounce(2 * t - 1) + 0.5;
      },
    },
    C = { effects: D };
  S.easingEffects = D;
  var P = Math.PI,
    T = P / 180,
    O = 2 * P,
    A = P / 2,
    F = P / 4,
    I = (2 * P) / 3,
    L = {
      clear: function (t) {
        t.ctx.clearRect(0, 0, t.width, t.height);
      },
      roundedRect: function (t, e, n, i, a, r) {
        if (r) {
          var o = Math.min(r, a / 2, i / 2),
            s = e + o,
            l = n + o,
            u = e + i - o,
            d = n + a - o;
          t.moveTo(e, l),
            s < u && l < d
              ? (t.arc(s, l, o, -P, -A),
                t.arc(u, l, o, -A, 0),
                t.arc(u, d, o, 0, A),
                t.arc(s, d, o, A, P))
              : s < u
              ? (t.moveTo(s, n),
                t.arc(u, l, o, -A, A),
                t.arc(s, l, o, A, P + A))
              : l < d
              ? (t.arc(s, l, o, -P, 0), t.arc(s, d, o, 0, P))
              : t.arc(s, l, o, -P, P),
            t.closePath(),
            t.moveTo(e, n);
        } else t.rect(e, n, i, a);
      },
      drawPoint: function (t, e, n, i, a, r) {
        var o,
          s,
          l,
          u,
          d,
          h = (r || 0) * T;
        if (
          e &&
          "object" == typeof e &&
          ("[object HTMLImageElement]" === (o = e.toString()) ||
            "[object HTMLCanvasElement]" === o)
        )
          return (
            t.save(),
            t.translate(i, a),
            t.rotate(h),
            t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height),
            void t.restore()
          );
        if (!(isNaN(n) || n <= 0)) {
          switch ((t.beginPath(), e)) {
            default:
              t.arc(i, a, n, 0, O), t.closePath();
              break;
            case "triangle":
              t.moveTo(i + Math.sin(h) * n, a - Math.cos(h) * n),
                (h += I),
                t.lineTo(i + Math.sin(h) * n, a - Math.cos(h) * n),
                (h += I),
                t.lineTo(i + Math.sin(h) * n, a - Math.cos(h) * n),
                t.closePath();
              break;
            case "rectRounded":
              (u = n - (d = 0.516 * n)),
                (s = Math.cos(h + F) * u),
                (l = Math.sin(h + F) * u),
                t.arc(i - s, a - l, d, h - P, h - A),
                t.arc(i + l, a - s, d, h - A, h),
                t.arc(i + s, a + l, d, h, h + A),
                t.arc(i - l, a + s, d, h + A, h + P),
                t.closePath();
              break;
            case "rect":
              if (!r) {
                (u = Math.SQRT1_2 * n), t.rect(i - u, a - u, 2 * u, 2 * u);
                break;
              }
              h += F;
            case "rectRot":
              (s = Math.cos(h) * n),
                (l = Math.sin(h) * n),
                t.moveTo(i - s, a - l),
                t.lineTo(i + l, a - s),
                t.lineTo(i + s, a + l),
                t.lineTo(i - l, a + s),
                t.closePath();
              break;
            case "crossRot":
              h += F;
            case "cross":
              (s = Math.cos(h) * n),
                (l = Math.sin(h) * n),
                t.moveTo(i - s, a - l),
                t.lineTo(i + s, a + l),
                t.moveTo(i + l, a - s),
                t.lineTo(i - l, a + s);
              break;
            case "star":
              (s = Math.cos(h) * n),
                (l = Math.sin(h) * n),
                t.moveTo(i - s, a - l),
                t.lineTo(i + s, a + l),
                t.moveTo(i + l, a - s),
                t.lineTo(i - l, a + s),
                (h += F),
                (s = Math.cos(h) * n),
                (l = Math.sin(h) * n),
                t.moveTo(i - s, a - l),
                t.lineTo(i + s, a + l),
                t.moveTo(i + l, a - s),
                t.lineTo(i - l, a + s);
              break;
            case "line":
              (s = Math.cos(h) * n),
                (l = Math.sin(h) * n),
                t.moveTo(i - s, a - l),
                t.lineTo(i + s, a + l);
              break;
            case "dash":
              t.moveTo(i, a),
                t.lineTo(i + Math.cos(h) * n, a + Math.sin(h) * n);
          }
          t.fill(), t.stroke();
        }
      },
      _isPointInArea: function (t, e) {
        return (
          t.x > e.left - 1e-6 &&
          t.x < e.right + 1e-6 &&
          t.y > e.top - 1e-6 &&
          t.y < e.bottom + 1e-6
        );
      },
      clipArea: function (t, e) {
        t.save(),
          t.beginPath(),
          t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
          t.clip();
      },
      unclipArea: function (t) {
        t.restore();
      },
      lineTo: function (t, e, n, i) {
        var a = n.steppedLine;
        if (a) {
          if ("middle" === a) {
            var r = (e.x + n.x) / 2;
            t.lineTo(r, i ? n.y : e.y), t.lineTo(r, i ? e.y : n.y);
          } else
            ("after" === a && !i) || ("after" !== a && i)
              ? t.lineTo(e.x, n.y)
              : t.lineTo(n.x, e.y);
          t.lineTo(n.x, n.y);
        } else
          n.tension
            ? t.bezierCurveTo(
                i ? e.controlPointPreviousX : e.controlPointNextX,
                i ? e.controlPointPreviousY : e.controlPointNextY,
                i ? n.controlPointNextX : n.controlPointPreviousX,
                i ? n.controlPointNextY : n.controlPointPreviousY,
                n.x,
                n.y
              )
            : t.lineTo(n.x, n.y);
      },
    },
    R = L;
  (S.clear = L.clear),
    (S.drawRoundedRectangle = function (t) {
      t.beginPath(), L.roundedRect.apply(L, arguments);
    });
  var N = {
    _set: function (t, e) {
      return S.merge(this[t] || (this[t] = {}), e);
    },
  };
  N._set("global", {
    defaultColor: "rgba(0,0,0,0.1)",
    defaultFontColor: "#666",
    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    defaultFontSize: 12,
    defaultFontStyle: "normal",
    defaultLineHeight: 1.2,
    showLines: !0,
  });
  var W = N,
    Y = S.valueOrDefault;
  var z = {
      toLineHeight: function (t, e) {
        var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
        if (!n || "normal" === n[1]) return 1.2 * e;
        switch (((t = +n[2]), n[3])) {
          case "px":
            return t;
          case "%":
            t /= 100;
        }
        return e * t;
      },
      toPadding: function (t) {
        var e, n, i, a;
        return (
          S.isObject(t)
            ? ((e = +t.top || 0),
              (n = +t.right || 0),
              (i = +t.bottom || 0),
              (a = +t.left || 0))
            : (e = n = i = a = +t || 0),
          { top: e, right: n, bottom: i, left: a, height: e + i, width: a + n }
        );
      },
      _parseFont: function (t) {
        var e = W.global,
          n = Y(t.fontSize, e.defaultFontSize),
          i = {
            family: Y(t.fontFamily, e.defaultFontFamily),
            lineHeight: S.options.toLineHeight(
              Y(t.lineHeight, e.defaultLineHeight),
              n
            ),
            size: n,
            style: Y(t.fontStyle, e.defaultFontStyle),
            weight: null,
            string: "",
          };
        return (
          (i.string = (function (t) {
            return !t || S.isNullOrUndef(t.size) || S.isNullOrUndef(t.family)
              ? null
              : (t.style ? t.style + " " : "") +
                  (t.weight ? t.weight + " " : "") +
                  t.size +
                  "px " +
                  t.family;
          })(i)),
          i
        );
      },
      resolve: function (t, e, n, i) {
        var a,
          r,
          o,
          s = !0;
        for (a = 0, r = t.length; a < r; ++a)
          if (
            void 0 !== (o = t[a]) &&
            (void 0 !== e && "function" == typeof o && ((o = o(e)), (s = !1)),
            void 0 !== n && S.isArray(o) && ((o = o[n]), (s = !1)),
            void 0 !== o)
          )
            return i && !s && (i.cacheable = !1), o;
      },
    },
    E = {
      _factorize: function (t) {
        var e,
          n = [],
          i = Math.sqrt(t);
        for (e = 1; e < i; e++) t % e == 0 && (n.push(e), n.push(t / e));
        return (
          i === (0 | i) && n.push(i),
          n
            .sort(function (t, e) {
              return t - e;
            })
            .pop(),
          n
        );
      },
      log10:
        Math.log10 ||
        function (t) {
          var e = Math.log(t) * Math.LOG10E,
            n = Math.round(e);
          return t === Math.pow(10, n) ? n : e;
        },
    },
    V = E;
  S.log10 = E.log10;
  var H = S,
    B = C,
    j = R,
    U = z,
    G = V,
    q = {
      getRtlAdapter: function (t, e, n) {
        return t
          ? (function (t, e) {
              return {
                x: function (n) {
                  return t + t + e - n;
                },
                setWidth: function (t) {
                  e = t;
                },
                textAlign: function (t) {
                  return "center" === t ? t : "right" === t ? "left" : "right";
                },
                xPlus: function (t, e) {
                  return t - e;
                },
                leftForLtr: function (t, e) {
                  return t - e;
                },
              };
            })(e, n)
          : {
              x: function (t) {
                return t;
              },
              setWidth: function (t) {},
              textAlign: function (t) {
                return t;
              },
              xPlus: function (t, e) {
                return t + e;
              },
              leftForLtr: function (t, e) {
                return t;
              },
            };
      },
      overrideTextDirection: function (t, e) {
        var n, i;
        ("ltr" !== e && "rtl" !== e) ||
          ((i = [
            (n = t.canvas.style).getPropertyValue("direction"),
            n.getPropertyPriority("direction"),
          ]),
          n.setProperty("direction", e, "important"),
          (t.prevTextDirection = i));
      },
      restoreTextDirection: function (t) {
        var e = t.prevTextDirection;
        void 0 !== e &&
          (delete t.prevTextDirection,
          t.canvas.style.setProperty("direction", e[0], e[1]));
      },
    };
  (H.easing = B), (H.canvas = j), (H.options = U), (H.math = G), (H.rtl = q);
  var Z = function (t) {
    H.extend(this, t), this.initialize.apply(this, arguments);
  };
  H.extend(Z.prototype, {
    _type: void 0,
    initialize: function () {
      this.hidden = !1;
    },
    pivot: function () {
      var t = this;
      return t._view || (t._view = H.extend({}, t._model)), (t._start = {}), t;
    },
    transition: function (t) {
      var e = this,
        n = e._model,
        i = e._start,
        a = e._view;
      return n && 1 !== t
        ? (a || (a = e._view = {}),
          i || (i = e._start = {}),
          (function (t, e, n, i) {
            var a,
              r,
              o,
              s,
              l,
              u,
              d,
              h,
              c,
              f = Object.keys(n);
            for (a = 0, r = f.length; a < r; ++a)
              if (
                ((u = n[(o = f[a])]),
                e.hasOwnProperty(o) || (e[o] = u),
                (s = e[o]) !== u && "_" !== o[0])
              ) {
                if (
                  (t.hasOwnProperty(o) || (t[o] = s),
                  (d = typeof u) === typeof (l = t[o]))
                )
                  if ("string" === d) {
                    if ((h = k(l)).valid && (c = k(u)).valid) {
                      e[o] = c.mix(h, i).rgbString();
                      continue;
                    }
                  } else if (H.isFinite(l) && H.isFinite(u)) {
                    e[o] = l + (u - l) * i;
                    continue;
                  }
                e[o] = u;
              }
          })(i, a, n, t),
          e)
        : ((e._view = H.extend({}, n)), (e._start = null), e);
    },
    tooltipPosition: function () {
      return { x: this._model.x, y: this._model.y };
    },
    hasValue: function () {
      return H.isNumber(this._model.x) && H.isNumber(this._model.y);
    },
  }),
    (Z.extend = H.inherits);
  var $ = Z,
    X = $.extend({
      chart: null,
      currentStep: 0,
      numSteps: 60,
      easing: "",
      render: null,
      onAnimationProgress: null,
      onAnimationComplete: null,
    }),
    K = X;
  Object.defineProperty(X.prototype, "animationObject", {
    get: function () {
      return this;
    },
  }),
    Object.defineProperty(X.prototype, "chartInstance", {
      get: function () {
        return this.chart;
      },
      set: function (t) {
        this.chart = t;
      },
    }),
    W._set("global", {
      animation: {
        duration: 1e3,
        easing: "easeOutQuart",
        onProgress: H.noop,
        onComplete: H.noop,
      },
    });
  var J = {
      animations: [],
      request: null,
      addAnimation: function (t, e, n, i) {
        var a,
          r,
          o = this.animations;
        for (
          e.chart = t,
            e.startTime = Date.now(),
            e.duration = n,
            i || (t.animating = !0),
            a = 0,
            r = o.length;
          a < r;
          ++a
        )
          if (o[a].chart === t) return void (o[a] = e);
        o.push(e), 1 === o.length && this.requestAnimationFrame();
      },
      cancelAnimation: function (t) {
        var e = H.findIndex(this.animations, function (e) {
          return e.chart === t;
        });
        -1 !== e && (this.animations.splice(e, 1), (t.animating = !1));
      },
      requestAnimationFrame: function () {
        var t = this;
        null === t.request &&
          (t.request = H.requestAnimFrame.call(window, function () {
            (t.request = null), t.startDigest();
          }));
      },
      startDigest: function () {
        this.advance(),
          this.animations.length > 0 && this.requestAnimationFrame();
      },
      advance: function () {
        for (var t, e, n, i, a = this.animations, r = 0; r < a.length; )
          (e = (t = a[r]).chart),
            (n = t.numSteps),
            (i = Math.floor(((Date.now() - t.startTime) / t.duration) * n) + 1),
            (t.currentStep = Math.min(i, n)),
            H.callback(t.render, [e, t], e),
            H.callback(t.onAnimationProgress, [t], e),
            t.currentStep >= n
              ? (H.callback(t.onAnimationComplete, [t], e),
                (e.animating = !1),
                a.splice(r, 1))
              : ++r;
      },
    },
    Q = H.options.resolve,
    tt = ["push", "pop", "shift", "splice", "unshift"];
  function et(t, e) {
    var n = t._chartjs;
    if (n) {
      var i = n.listeners,
        a = i.indexOf(e);
      -1 !== a && i.splice(a, 1),
        i.length > 0 ||
          (tt.forEach(function (e) {
            delete t[e];
          }),
          delete t._chartjs);
    }
  }
  var nt = function (t, e) {
    this.initialize(t, e);
  };
  H.extend(nt.prototype, {
    datasetElementType: null,
    dataElementType: null,
    _datasetElementOptions: [
      "backgroundColor",
      "borderCapStyle",
      "borderColor",
      "borderDash",
      "borderDashOffset",
      "borderJoinStyle",
      "borderWidth",
    ],
    _dataElementOptions: [
      "backgroundColor",
      "borderColor",
      "borderWidth",
      "pointStyle",
    ],
    initialize: function (t, e) {
      var n = this;
      (n.chart = t),
        (n.index = e),
        n.linkScales(),
        n.addElements(),
        (n._type = n.getMeta().type);
    },
    updateIndex: function (t) {
      this.index = t;
    },
    linkScales: function () {
      var t = this.getMeta(),
        e = this.chart,
        n = e.scales,
        i = this.getDataset(),
        a = e.options.scales;
      (null !== t.xAxisID && t.xAxisID in n && !i.xAxisID) ||
        (t.xAxisID = i.xAxisID || a.xAxes[0].id),
        (null !== t.yAxisID && t.yAxisID in n && !i.yAxisID) ||
          (t.yAxisID = i.yAxisID || a.yAxes[0].id);
    },
    getDataset: function () {
      return this.chart.data.datasets[this.index];
    },
    getMeta: function () {
      return this.chart.getDatasetMeta(this.index);
    },
    getScaleForId: function (t) {
      return this.chart.scales[t];
    },
    _getValueScaleId: function () {
      return this.getMeta().yAxisID;
    },
    _getIndexScaleId: function () {
      return this.getMeta().xAxisID;
    },
    _getValueScale: function () {
      return this.getScaleForId(this._getValueScaleId());
    },
    _getIndexScale: function () {
      return this.getScaleForId(this._getIndexScaleId());
    },
    reset: function () {
      this._update(!0);
    },
    destroy: function () {
      this._data && et(this._data, this);
    },
    createMetaDataset: function () {
      var t = this.datasetElementType;
      return t && new t({ _chart: this.chart, _datasetIndex: this.index });
    },
    createMetaData: function (t) {
      var e = this.dataElementType;
      return (
        e && new e({ _chart: this.chart, _datasetIndex: this.index, _index: t })
      );
    },
    addElements: function () {
      var t,
        e,
        n = this.getMeta(),
        i = this.getDataset().data || [],
        a = n.data;
      for (t = 0, e = i.length; t < e; ++t)
        a[t] = a[t] || this.createMetaData(t);
      n.dataset = n.dataset || this.createMetaDataset();
    },
    addElementAndReset: function (t) {
      var e = this.createMetaData(t);
      this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
    },
    buildOrUpdateElements: function () {
      var t,
        e,
        n = this,
        i = n.getDataset(),
        a = i.data || (i.data = []);
      n._data !== a &&
        (n._data && et(n._data, n),
        a &&
          Object.isExtensible(a) &&
          ((e = n),
          (t = a)._chartjs
            ? t._chartjs.listeners.push(e)
            : (Object.defineProperty(t, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: { listeners: [e] },
              }),
              tt.forEach(function (e) {
                var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                  i = t[e];
                Object.defineProperty(t, e, {
                  configurable: !0,
                  enumerable: !1,
                  value: function () {
                    var e = Array.prototype.slice.call(arguments),
                      a = i.apply(this, e);
                    return (
                      H.each(t._chartjs.listeners, function (t) {
                        "function" == typeof t[n] && t[n].apply(t, e);
                      }),
                      a
                    );
                  },
                });
              }))),
        (n._data = a)),
        n.resyncElements();
    },
    _configure: function () {
      this._config = H.merge(
        {},
        [this.chart.options.datasets[this._type], this.getDataset()],
        {
          merger: function (t, e, n) {
            "_meta" !== t && "data" !== t && H._merger(t, e, n);
          },
        }
      );
    },
    _update: function (t) {
      this._configure(), (this._cachedDataOpts = null), this.update(t);
    },
    update: H.noop,
    transition: function (t) {
      for (
        var e = this.getMeta(), n = e.data || [], i = n.length, a = 0;
        a < i;
        ++a
      )
        n[a].transition(t);
      e.dataset && e.dataset.transition(t);
    },
    draw: function () {
      var t = this.getMeta(),
        e = t.data || [],
        n = e.length,
        i = 0;
      for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw();
    },
    getStyle: function (t) {
      var e,
        n = this.getMeta(),
        i = n.dataset;
      return (
        this._configure(),
        i && void 0 === t
          ? (e = this._resolveDatasetElementOptions(i || {}))
          : ((t = t || 0),
            (e = this._resolveDataElementOptions(n.data[t] || {}, t))),
        (!1 !== e.fill && null !== e.fill) ||
          (e.backgroundColor = e.borderColor),
        e
      );
    },
    _resolveDatasetElementOptions: function (t, e) {
      var n,
        i,
        a,
        r,
        o = this,
        s = o.chart,
        l = o._config,
        u = t.custom || {},
        d = s.options.elements[o.datasetElementType.prototype._type] || {},
        h = o._datasetElementOptions,
        c = {},
        f = {
          chart: s,
          dataset: o.getDataset(),
          datasetIndex: o.index,
          hover: e,
        };
      for (n = 0, i = h.length; n < i; ++n)
        (a = h[n]),
          (r = e ? "hover" + a.charAt(0).toUpperCase() + a.slice(1) : a),
          (c[a] = Q([u[r], l[r], d[r]], f));
      return c;
    },
    _resolveDataElementOptions: function (t, e) {
      var n = this,
        i = t && t.custom,
        a = n._cachedDataOpts;
      if (a && !i) return a;
      var r,
        o,
        s,
        l,
        u = n.chart,
        d = n._config,
        h = u.options.elements[n.dataElementType.prototype._type] || {},
        c = n._dataElementOptions,
        f = {},
        g = {
          chart: u,
          dataIndex: e,
          dataset: n.getDataset(),
          datasetIndex: n.index,
        },
        m = { cacheable: !i };
      if (((i = i || {}), H.isArray(c)))
        for (o = 0, s = c.length; o < s; ++o)
          f[(l = c[o])] = Q([i[l], d[l], h[l]], g, e, m);
      else
        for (o = 0, s = (r = Object.keys(c)).length; o < s; ++o)
          f[(l = r[o])] = Q([i[l], d[c[l]], d[l], h[l]], g, e, m);
      return m.cacheable && (n._cachedDataOpts = Object.freeze(f)), f;
    },
    removeHoverStyle: function (t) {
      H.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
    },
    setHoverStyle: function (t) {
      var e = this.chart.data.datasets[t._datasetIndex],
        n = t._index,
        i = t.custom || {},
        a = t._model,
        r = H.getHoverColor;
      (t.$previousStyle = {
        backgroundColor: a.backgroundColor,
        borderColor: a.borderColor,
        borderWidth: a.borderWidth,
      }),
        (a.backgroundColor = Q(
          [
            i.hoverBackgroundColor,
            e.hoverBackgroundColor,
            r(a.backgroundColor),
          ],
          void 0,
          n
        )),
        (a.borderColor = Q(
          [i.hoverBorderColor, e.hoverBorderColor, r(a.borderColor)],
          void 0,
          n
        )),
        (a.borderWidth = Q(
          [i.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth],
          void 0,
          n
        ));
    },
    _removeDatasetHoverStyle: function () {
      var t = this.getMeta().dataset;
      t && this.removeHoverStyle(t);
    },
    _setDatasetHoverStyle: function () {
      var t,
        e,
        n,
        i,
        a,
        r,
        o = this.getMeta().dataset,
        s = {};
      if (o) {
        for (
          r = o._model,
            a = this._resolveDatasetElementOptions(o, !0),
            t = 0,
            e = (i = Object.keys(a)).length;
          t < e;
          ++t
        )
          (s[(n = i[t])] = r[n]), (r[n] = a[n]);
        o.$previousStyle = s;
      }
    },
    resyncElements: function () {
      var t = this.getMeta(),
        e = this.getDataset().data,
        n = t.data.length,
        i = e.length;
      i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n);
    },
    insertElements: function (t, e) {
      for (var n = 0; n < e; ++n) this.addElementAndReset(t + n);
    },
    onDataPush: function () {
      var t = arguments.length;
      this.insertElements(this.getDataset().data.length - t, t);
    },
    onDataPop: function () {
      this.getMeta().data.pop();
    },
    onDataShift: function () {
      this.getMeta().data.shift();
    },
    onDataSplice: function (t, e) {
      this.getMeta().data.splice(t, e),
        this.insertElements(t, arguments.length - 2);
    },
    onDataUnshift: function () {
      this.insertElements(0, arguments.length);
    },
  }),
    (nt.extend = H.inherits);
  var it = nt,
    at = 2 * Math.PI;
  function rt(t, e) {
    var n = e.startAngle,
      i = e.endAngle,
      a = e.pixelMargin,
      r = a / e.outerRadius,
      o = e.x,
      s = e.y;
    t.beginPath(),
      t.arc(o, s, e.outerRadius, n - r, i + r),
      e.innerRadius > a
        ? ((r = a / e.innerRadius),
          t.arc(o, s, e.innerRadius - a, i + r, n - r, !0))
        : t.arc(o, s, a, i + Math.PI / 2, n - Math.PI / 2),
      t.closePath(),
      t.clip();
  }
  function ot(t, e, n) {
    var i = "inner" === e.borderAlign;
    i
      ? ((t.lineWidth = 2 * e.borderWidth), (t.lineJoin = "round"))
      : ((t.lineWidth = e.borderWidth), (t.lineJoin = "bevel")),
      n.fullCircles &&
        (function (t, e, n, i) {
          var a,
            r = n.endAngle;
          for (
            i &&
              ((n.endAngle = n.startAngle + at),
              rt(t, n),
              (n.endAngle = r),
              n.endAngle === n.startAngle &&
                n.fullCircles &&
                ((n.endAngle += at), n.fullCircles--)),
              t.beginPath(),
              t.arc(
                n.x,
                n.y,
                n.innerRadius,
                n.startAngle + at,
                n.startAngle,
                !0
              ),
              a = 0;
            a < n.fullCircles;
            ++a
          )
            t.stroke();
          for (
            t.beginPath(),
              t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + at),
              a = 0;
            a < n.fullCircles;
            ++a
          )
            t.stroke();
        })(t, e, n, i),
      i && rt(t, n),
      t.beginPath(),
      t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle),
      t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0),
      t.closePath(),
      t.stroke();
  }
  W._set("global", {
    elements: {
      arc: {
        backgroundColor: W.global.defaultColor,
        borderColor: "#fff",
        borderWidth: 2,
        borderAlign: "center",
      },
    },
  });
  var st = $.extend({
      _type: "arc",
      inLabelRange: function (t) {
        var e = this._view;
        return (
          !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
        );
      },
      inRange: function (t, e) {
        var n = this._view;
        if (n) {
          for (
            var i = H.getAngleFromPoint(n, { x: t, y: e }),
              a = i.angle,
              r = i.distance,
              o = n.startAngle,
              s = n.endAngle;
            s < o;

          )
            s += at;
          for (; a > s; ) a -= at;
          for (; a < o; ) a += at;
          var l = a >= o && a <= s,
            u = r >= n.innerRadius && r <= n.outerRadius;
          return l && u;
        }
        return !1;
      },
      getCenterPoint: function () {
        var t = this._view,
          e = (t.startAngle + t.endAngle) / 2,
          n = (t.innerRadius + t.outerRadius) / 2;
        return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
      },
      getArea: function () {
        var t = this._view;
        return (
          Math.PI *
          ((t.endAngle - t.startAngle) / (2 * Math.PI)) *
          (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
        );
      },
      tooltipPosition: function () {
        var t = this._view,
          e = t.startAngle + (t.endAngle - t.startAngle) / 2,
          n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
        return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
      },
      draw: function () {
        var t,
          e = this._chart.ctx,
          n = this._view,
          i = "inner" === n.borderAlign ? 0.33 : 0,
          a = {
            x: n.x,
            y: n.y,
            innerRadius: n.innerRadius,
            outerRadius: Math.max(n.outerRadius - i, 0),
            pixelMargin: i,
            startAngle: n.startAngle,
            endAngle: n.endAngle,
            fullCircles: Math.floor(n.circumference / at),
          };
        if (
          (e.save(),
          (e.fillStyle = n.backgroundColor),
          (e.strokeStyle = n.borderColor),
          a.fullCircles)
        ) {
          for (
            a.endAngle = a.startAngle + at,
              e.beginPath(),
              e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle),
              e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0),
              e.closePath(),
              t = 0;
            t < a.fullCircles;
            ++t
          )
            e.fill();
          a.endAngle = a.startAngle + (n.circumference % at);
        }
        e.beginPath(),
          e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle),
          e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0),
          e.closePath(),
          e.fill(),
          n.borderWidth && ot(e, n, a),
          e.restore();
      },
    }),
    lt = H.valueOrDefault,
    ut = W.global.defaultColor;
  W._set("global", {
    elements: {
      line: {
        tension: 0.4,
        backgroundColor: ut,
        borderWidth: 3,
        borderColor: ut,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        capBezierPoints: !0,
        fill: !0,
      },
    },
  });
  var dt = $.extend({
      _type: "line",
      draw: function () {
        var t,
          e,
          n,
          i = this,
          a = i._view,
          r = i._chart.ctx,
          o = a.spanGaps,
          s = i._children.slice(),
          l = W.global,
          u = l.elements.line,
          d = -1,
          h = i._loop;
        if (s.length) {
          if (i._loop) {
            for (t = 0; t < s.length; ++t)
              if (
                ((e = H.previousItem(s, t)), !s[t]._view.skip && e._view.skip)
              ) {
                (s = s.slice(t).concat(s.slice(0, t))), (h = o);
                break;
              }
            h && s.push(s[0]);
          }
          for (
            r.save(),
              r.lineCap = a.borderCapStyle || u.borderCapStyle,
              r.setLineDash && r.setLineDash(a.borderDash || u.borderDash),
              r.lineDashOffset = lt(a.borderDashOffset, u.borderDashOffset),
              r.lineJoin = a.borderJoinStyle || u.borderJoinStyle,
              r.lineWidth = lt(a.borderWidth, u.borderWidth),
              r.strokeStyle = a.borderColor || l.defaultColor,
              r.beginPath(),
              (n = s[0]._view).skip || (r.moveTo(n.x, n.y), (d = 0)),
              t = 1;
            t < s.length;
            ++t
          )
            (n = s[t]._view),
              (e = -1 === d ? H.previousItem(s, t) : s[d]),
              n.skip ||
                ((d !== t - 1 && !o) || -1 === d
                  ? r.moveTo(n.x, n.y)
                  : H.canvas.lineTo(r, e._view, n),
                (d = t));
          h && r.closePath(), r.stroke(), r.restore();
        }
      },
    }),
    ht = H.valueOrDefault,
    ct = W.global.defaultColor;
  function ft(t) {
    var e = this._view;
    return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
  }
  W._set("global", {
    elements: {
      point: {
        radius: 3,
        pointStyle: "circle",
        backgroundColor: ct,
        borderColor: ct,
        borderWidth: 1,
        hitRadius: 1,
        hoverRadius: 4,
        hoverBorderWidth: 1,
      },
    },
  });
  var gt = $.extend({
      _type: "point",
      inRange: function (t, e) {
        var n = this._view;
        return (
          !!n &&
          Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) <
            Math.pow(n.hitRadius + n.radius, 2)
        );
      },
      inLabelRange: ft,
      inXRange: ft,
      inYRange: function (t) {
        var e = this._view;
        return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
      },
      getCenterPoint: function () {
        var t = this._view;
        return { x: t.x, y: t.y };
      },
      getArea: function () {
        return Math.PI * Math.pow(this._view.radius, 2);
      },
      tooltipPosition: function () {
        var t = this._view;
        return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
      },
      draw: function (t) {
        var e = this._view,
          n = this._chart.ctx,
          i = e.pointStyle,
          a = e.rotation,
          r = e.radius,
          o = e.x,
          s = e.y,
          l = W.global,
          u = l.defaultColor;
        e.skip ||
          ((void 0 === t || H.canvas._isPointInArea(e, t)) &&
            ((n.strokeStyle = e.borderColor || u),
            (n.lineWidth = ht(e.borderWidth, l.elements.point.borderWidth)),
            (n.fillStyle = e.backgroundColor || u),
            H.canvas.drawPoint(n, i, r, o, s, a)));
      },
    }),
    mt = W.global.defaultColor;
  function pt(t) {
    return t && void 0 !== t.width;
  }
  function vt(t) {
    var e, n, i, a, r;
    return (
      pt(t)
        ? ((r = t.width / 2),
          (e = t.x - r),
          (n = t.x + r),
          (i = Math.min(t.y, t.base)),
          (a = Math.max(t.y, t.base)))
        : ((r = t.height / 2),
          (e = Math.min(t.x, t.base)),
          (n = Math.max(t.x, t.base)),
          (i = t.y - r),
          (a = t.y + r)),
      { left: e, top: i, right: n, bottom: a }
    );
  }
  function bt(t, e, n) {
    return t === e ? n : t === n ? e : t;
  }
  function yt(t, e, n) {
    var i,
      a,
      r,
      o,
      s = t.borderWidth,
      l = (function (t) {
        var e = t.borderSkipped,
          n = {};
        return e
          ? (t.horizontal
              ? t.base > t.x && (e = bt(e, "left", "right"))
              : t.base < t.y && (e = bt(e, "bottom", "top")),
            (n[e] = !0),
            n)
          : n;
      })(t);
    return (
      H.isObject(s)
        ? ((i = +s.top || 0),
          (a = +s.right || 0),
          (r = +s.bottom || 0),
          (o = +s.left || 0))
        : (i = a = r = o = +s || 0),
      {
        t: l.top || i < 0 ? 0 : i > n ? n : i,
        r: l.right || a < 0 ? 0 : a > e ? e : a,
        b: l.bottom || r < 0 ? 0 : r > n ? n : r,
        l: l.left || o < 0 ? 0 : o > e ? e : o,
      }
    );
  }
  function xt(t, e, n) {
    var i = null === e,
      a = null === n,
      r = !(!t || (i && a)) && vt(t);
    return (
      r &&
      (i || (e >= r.left && e <= r.right)) &&
      (a || (n >= r.top && n <= r.bottom))
    );
  }
  W._set("global", {
    elements: {
      rectangle: {
        backgroundColor: mt,
        borderColor: mt,
        borderSkipped: "bottom",
        borderWidth: 0,
      },
    },
  });
  var _t = $.extend({
      _type: "rectangle",
      draw: function () {
        var t = this._chart.ctx,
          e = this._view,
          n = (function (t) {
            var e = vt(t),
              n = e.right - e.left,
              i = e.bottom - e.top,
              a = yt(t, n / 2, i / 2);
            return {
              outer: { x: e.left, y: e.top, w: n, h: i },
              inner: {
                x: e.left + a.l,
                y: e.top + a.t,
                w: n - a.l - a.r,
                h: i - a.t - a.b,
              },
            };
          })(e),
          i = n.outer,
          a = n.inner;
        (t.fillStyle = e.backgroundColor),
          t.fillRect(i.x, i.y, i.w, i.h),
          (i.w === a.w && i.h === a.h) ||
            (t.save(),
            t.beginPath(),
            t.rect(i.x, i.y, i.w, i.h),
            t.clip(),
            (t.fillStyle = e.borderColor),
            t.rect(a.x, a.y, a.w, a.h),
            t.fill("evenodd"),
            t.restore());
      },
      height: function () {
        var t = this._view;
        return t.base - t.y;
      },
      inRange: function (t, e) {
        return xt(this._view, t, e);
      },
      inLabelRange: function (t, e) {
        var n = this._view;
        return pt(n) ? xt(n, t, null) : xt(n, null, e);
      },
      inXRange: function (t) {
        return xt(this._view, t, null);
      },
      inYRange: function (t) {
        return xt(this._view, null, t);
      },
      getCenterPoint: function () {
        var t,
          e,
          n = this._view;
        return (
          pt(n)
            ? ((t = n.x), (e = (n.y + n.base) / 2))
            : ((t = (n.x + n.base) / 2), (e = n.y)),
          { x: t, y: e }
        );
      },
      getArea: function () {
        var t = this._view;
        return pt(t)
          ? t.width * Math.abs(t.y - t.base)
          : t.height * Math.abs(t.x - t.base);
      },
      tooltipPosition: function () {
        var t = this._view;
        return { x: t.x, y: t.y };
      },
    }),
    wt = {},
    kt = st,
    Mt = dt,
    St = gt,
    Dt = _t;
  (wt.Arc = kt), (wt.Line = Mt), (wt.Point = St), (wt.Rectangle = Dt);
  var Ct = H._deprecated,
    Pt = H.valueOrDefault;
  function Tt(t, e, n) {
    var i,
      a,
      r = n.barThickness,
      o = e.stackCount,
      s = e.pixels[t],
      l = H.isNullOrUndef(r)
        ? (function (t, e) {
            var n,
              i,
              a,
              r,
              o = t._length;
            for (a = 1, r = e.length; a < r; ++a)
              o = Math.min(o, Math.abs(e[a] - e[a - 1]));
            for (a = 0, r = t.getTicks().length; a < r; ++a)
              (i = t.getPixelForTick(a)),
                (o = a > 0 ? Math.min(o, Math.abs(i - n)) : o),
                (n = i);
            return o;
          })(e.scale, e.pixels)
        : -1;
    return (
      H.isNullOrUndef(r)
        ? ((i = l * n.categoryPercentage), (a = n.barPercentage))
        : ((i = r * o), (a = 1)),
      { chunk: i / o, ratio: a, start: s - i / 2 }
    );
  }
  W._set("bar", {
    hover: { mode: "label" },
    scales: {
      xAxes: [
        { type: "category", offset: !0, gridLines: { offsetGridLines: !0 } },
      ],
      yAxes: [{ type: "linear" }],
    },
  }),
    W._set("global", {
      datasets: { bar: { categoryPercentage: 0.8, barPercentage: 0.9 } },
    });
  var Ot = it.extend({
      dataElementType: wt.Rectangle,
      _dataElementOptions: [
        "backgroundColor",
        "borderColor",
        "borderSkipped",
        "borderWidth",
        "barPercentage",
        "barThickness",
        "categoryPercentage",
        "maxBarThickness",
        "minBarLength",
      ],
      initialize: function () {
        var t,
          e,
          n = this;
        it.prototype.initialize.apply(n, arguments),
          ((t = n.getMeta()).stack = n.getDataset().stack),
          (t.bar = !0),
          (e = n._getIndexScale().options),
          Ct(
            "bar chart",
            e.barPercentage,
            "scales.[x/y]Axes.barPercentage",
            "dataset.barPercentage"
          ),
          Ct(
            "bar chart",
            e.barThickness,
            "scales.[x/y]Axes.barThickness",
            "dataset.barThickness"
          ),
          Ct(
            "bar chart",
            e.categoryPercentage,
            "scales.[x/y]Axes.categoryPercentage",
            "dataset.categoryPercentage"
          ),
          Ct(
            "bar chart",
            n._getValueScale().options.minBarLength,
            "scales.[x/y]Axes.minBarLength",
            "dataset.minBarLength"
          ),
          Ct(
            "bar chart",
            e.maxBarThickness,
            "scales.[x/y]Axes.maxBarThickness",
            "dataset.maxBarThickness"
          );
      },
      update: function (t) {
        var e,
          n,
          i = this.getMeta().data;
        for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e)
          this.updateElement(i[e], e, t);
      },
      updateElement: function (t, e, n) {
        var i = this,
          a = i.getMeta(),
          r = i.getDataset(),
          o = i._resolveDataElementOptions(t, e);
        (t._xScale = i.getScaleForId(a.xAxisID)),
          (t._yScale = i.getScaleForId(a.yAxisID)),
          (t._datasetIndex = i.index),
          (t._index = e),
          (t._model = {
            backgroundColor: o.backgroundColor,
            borderColor: o.borderColor,
            borderSkipped: o.borderSkipped,
            borderWidth: o.borderWidth,
            datasetLabel: r.label,
            label: i.chart.data.labels[e],
          }),
          H.isArray(r.data[e]) && (t._model.borderSkipped = null),
          i._updateElementGeometry(t, e, n, o),
          t.pivot();
      },
      _updateElementGeometry: function (t, e, n, i) {
        var a = this,
          r = t._model,
          o = a._getValueScale(),
          s = o.getBasePixel(),
          l = o.isHorizontal(),
          u = a._ruler || a.getRuler(),
          d = a.calculateBarValuePixels(a.index, e, i),
          h = a.calculateBarIndexPixels(a.index, e, u, i);
        (r.horizontal = l),
          (r.base = n ? s : d.base),
          (r.x = l ? (n ? s : d.head) : h.center),
          (r.y = l ? h.center : n ? s : d.head),
          (r.height = l ? h.size : void 0),
          (r.width = l ? void 0 : h.size);
      },
      _getStacks: function (t) {
        var e,
          n,
          i = this._getIndexScale(),
          a = i._getMatchingVisibleMetas(this._type),
          r = i.options.stacked,
          o = a.length,
          s = [];
        for (
          e = 0;
          e < o &&
          ((n = a[e]),
          (!1 === r ||
            -1 === s.indexOf(n.stack) ||
            (void 0 === r && void 0 === n.stack)) &&
            s.push(n.stack),
          n.index !== t);
          ++e
        );
        return s;
      },
      getStackCount: function () {
        return this._getStacks().length;
      },
      getStackIndex: function (t, e) {
        var n = this._getStacks(t),
          i = void 0 !== e ? n.indexOf(e) : -1;
        return -1 === i ? n.length - 1 : i;
      },
      getRuler: function () {
        var t,
          e,
          n = this._getIndexScale(),
          i = [];
        for (t = 0, e = this.getMeta().data.length; t < e; ++t)
          i.push(n.getPixelForValue(null, t, this.index));
        return {
          pixels: i,
          start: n._startPixel,
          end: n._endPixel,
          stackCount: this.getStackCount(),
          scale: n,
        };
      },
      calculateBarValuePixels: function (t, e, n) {
        var i,
          a,
          r,
          o,
          s,
          l,
          u,
          d = this.chart,
          h = this._getValueScale(),
          c = h.isHorizontal(),
          f = d.data.datasets,
          g = h._getMatchingVisibleMetas(this._type),
          m = h._parseValue(f[t].data[e]),
          p = n.minBarLength,
          v = h.options.stacked,
          b = this.getMeta().stack,
          y = void 0 === m.start ? 0 : m.max >= 0 && m.min >= 0 ? m.min : m.max,
          x =
            void 0 === m.start
              ? m.end
              : m.max >= 0 && m.min >= 0
              ? m.max - m.min
              : m.min - m.max,
          _ = g.length;
        if (v || (void 0 === v && void 0 !== b))
          for (i = 0; i < _ && (a = g[i]).index !== t; ++i)
            a.stack === b &&
              ((r =
                void 0 === (u = h._parseValue(f[a.index].data[e])).start
                  ? u.end
                  : u.min >= 0 && u.max >= 0
                  ? u.max
                  : u.min),
              ((m.min < 0 && r < 0) || (m.max >= 0 && r > 0)) && (y += r));
        return (
          (o = h.getPixelForValue(y)),
          (l = (s = h.getPixelForValue(y + x)) - o),
          void 0 !== p &&
            Math.abs(l) < p &&
            ((l = p), (s = (x >= 0 && !c) || (x < 0 && c) ? o - p : o + p)),
          { size: l, base: o, head: s, center: s + l / 2 }
        );
      },
      calculateBarIndexPixels: function (t, e, n, i) {
        var a =
            "flex" === i.barThickness
              ? (function (t, e, n) {
                  var i,
                    a = e.pixels,
                    r = a[t],
                    o = t > 0 ? a[t - 1] : null,
                    s = t < a.length - 1 ? a[t + 1] : null,
                    l = n.categoryPercentage;
                  return (
                    null === o &&
                      (o = r - (null === s ? e.end - e.start : s - r)),
                    null === s && (s = r + r - o),
                    (i = r - ((r - Math.min(o, s)) / 2) * l),
                    {
                      chunk: ((Math.abs(s - o) / 2) * l) / e.stackCount,
                      ratio: n.barPercentage,
                      start: i,
                    }
                  );
                })(e, n, i)
              : Tt(e, n, i),
          r = this.getStackIndex(t, this.getMeta().stack),
          o = a.start + a.chunk * r + a.chunk / 2,
          s = Math.min(Pt(i.maxBarThickness, 1 / 0), a.chunk * a.ratio);
        return { base: o - s / 2, head: o + s / 2, center: o, size: s };
      },
      draw: function () {
        var t = this.chart,
          e = this._getValueScale(),
          n = this.getMeta().data,
          i = this.getDataset(),
          a = n.length,
          r = 0;
        for (H.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) {
          var o = e._parseValue(i.data[r]);
          isNaN(o.min) || isNaN(o.max) || n[r].draw();
        }
        H.canvas.unclipArea(t.ctx);
      },
      _resolveDataElementOptions: function () {
        var t = this,
          e = H.extend(
            {},
            it.prototype._resolveDataElementOptions.apply(t, arguments)
          ),
          n = t._getIndexScale().options,
          i = t._getValueScale().options;
        return (
          (e.barPercentage = Pt(n.barPercentage, e.barPercentage)),
          (e.barThickness = Pt(n.barThickness, e.barThickness)),
          (e.categoryPercentage = Pt(
            n.categoryPercentage,
            e.categoryPercentage
          )),
          (e.maxBarThickness = Pt(n.maxBarThickness, e.maxBarThickness)),
          (e.minBarLength = Pt(i.minBarLength, e.minBarLength)),
          e
        );
      },
    }),
    At = H.valueOrDefault,
    Ft = H.options.resolve;
  W._set("bubble", {
    hover: { mode: "single" },
    scales: {
      xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
      yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }],
    },
    tooltips: {
      callbacks: {
        title: function () {
          return "";
        },
        label: function (t, e) {
          var n = e.datasets[t.datasetIndex].label || "",
            i = e.datasets[t.datasetIndex].data[t.index];
          return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")";
        },
      },
    },
  });
  var It = it.extend({
      dataElementType: wt.Point,
      _dataElementOptions: [
        "backgroundColor",
        "borderColor",
        "borderWidth",
        "hoverBackgroundColor",
        "hoverBorderColor",
        "hoverBorderWidth",
        "hoverRadius",
        "hitRadius",
        "pointStyle",
        "rotation",
      ],
      update: function (t) {
        var e = this,
          n = e.getMeta().data;
        H.each(n, function (n, i) {
          e.updateElement(n, i, t);
        });
      },
      updateElement: function (t, e, n) {
        var i = this,
          a = i.getMeta(),
          r = t.custom || {},
          o = i.getScaleForId(a.xAxisID),
          s = i.getScaleForId(a.yAxisID),
          l = i._resolveDataElementOptions(t, e),
          u = i.getDataset().data[e],
          d = i.index,
          h = n
            ? o.getPixelForDecimal(0.5)
            : o.getPixelForValue("object" == typeof u ? u : NaN, e, d),
          c = n ? s.getBasePixel() : s.getPixelForValue(u, e, d);
        (t._xScale = o),
          (t._yScale = s),
          (t._options = l),
          (t._datasetIndex = d),
          (t._index = e),
          (t._model = {
            backgroundColor: l.backgroundColor,
            borderColor: l.borderColor,
            borderWidth: l.borderWidth,
            hitRadius: l.hitRadius,
            pointStyle: l.pointStyle,
            rotation: l.rotation,
            radius: n ? 0 : l.radius,
            skip: r.skip || isNaN(h) || isNaN(c),
            x: h,
            y: c,
          }),
          t.pivot();
      },
      setHoverStyle: function (t) {
        var e = t._model,
          n = t._options,
          i = H.getHoverColor;
        (t.$previousStyle = {
          backgroundColor: e.backgroundColor,
          borderColor: e.borderColor,
          borderWidth: e.borderWidth,
          radius: e.radius,
        }),
          (e.backgroundColor = At(
            n.hoverBackgroundColor,
            i(n.backgroundColor)
          )),
          (e.borderColor = At(n.hoverBorderColor, i(n.borderColor))),
          (e.borderWidth = At(n.hoverBorderWidth, n.borderWidth)),
          (e.radius = n.radius + n.hoverRadius);
      },
      _resolveDataElementOptions: function (t, e) {
        var n = this,
          i = n.chart,
          a = n.getDataset(),
          r = t.custom || {},
          o = a.data[e] || {},
          s = it.prototype._resolveDataElementOptions.apply(n, arguments),
          l = { chart: i, dataIndex: e, dataset: a, datasetIndex: n.index };
        return (
          n._cachedDataOpts === s && (s = H.extend({}, s)),
          (s.radius = Ft(
            [r.radius, o.r, n._config.radius, i.options.elements.point.radius],
            l,
            e
          )),
          s
        );
      },
    }),
    Lt = H.valueOrDefault,
    Rt = Math.PI,
    Nt = 2 * Rt,
    Wt = Rt / 2;
  W._set("doughnut", {
    animation: { animateRotate: !0, animateScale: !1 },
    hover: { mode: "single" },
    legendCallback: function (t) {
      var e,
        n,
        i,
        a = document.createElement("ul"),
        r = t.data,
        o = r.datasets,
        s = r.labels;
      if ((a.setAttribute("class", t.id + "-legend"), o.length))
        for (e = 0, n = o[0].data.length; e < n; ++e)
          ((i = a.appendChild(document.createElement("li"))).appendChild(
            document.createElement("span")
          ).style.backgroundColor = o[0].backgroundColor[e]),
            s[e] && i.appendChild(document.createTextNode(s[e]));
      return a.outerHTML;
    },
    legend: {
      labels: {
        generateLabels: function (t) {
          var e = t.data;
          return e.labels.length && e.datasets.length
            ? e.labels.map(function (n, i) {
                var a = t.getDatasetMeta(0),
                  r = a.controller.getStyle(i);
                return {
                  text: n,
                  fillStyle: r.backgroundColor,
                  strokeStyle: r.borderColor,
                  lineWidth: r.borderWidth,
                  hidden: isNaN(e.datasets[0].data[i]) || a.data[i].hidden,
                  index: i,
                };
              })
            : [];
        },
      },
      onClick: function (t, e) {
        var n,
          i,
          a,
          r = e.index,
          o = this.chart;
        for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)
          (a = o.getDatasetMeta(n)).data[r] &&
            (a.data[r].hidden = !a.data[r].hidden);
        o.update();
      },
    },
    cutoutPercentage: 50,
    rotation: -Wt,
    circumference: Nt,
    tooltips: {
      callbacks: {
        title: function () {
          return "";
        },
        label: function (t, e) {
          var n = e.labels[t.index],
            i = ": " + e.datasets[t.datasetIndex].data[t.index];
          return H.isArray(n) ? ((n = n.slice())[0] += i) : (n += i), n;
        },
      },
    },
  });
  var Yt = it.extend({
    dataElementType: wt.Arc,
    linkScales: H.noop,
    _dataElementOptions: [
      "backgroundColor",
      "borderColor",
      "borderWidth",
      "borderAlign",
      "hoverBackgroundColor",
      "hoverBorderColor",
      "hoverBorderWidth",
    ],
    getRingIndex: function (t) {
      for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
      return e;
    },
    update: function (t) {
      var e,
        n,
        i,
        a,
        r = this,
        o = r.chart,
        s = o.chartArea,
        l = o.options,
        u = 1,
        d = 1,
        h = 0,
        c = 0,
        f = r.getMeta(),
        g = f.data,
        m = l.cutoutPercentage / 100 || 0,
        p = l.circumference,
        v = r._getRingWeight(r.index);
      if (p < Nt) {
        var b = l.rotation % Nt,
          y = (b += b >= Rt ? -Nt : b < -Rt ? Nt : 0) + p,
          x = Math.cos(b),
          _ = Math.sin(b),
          w = Math.cos(y),
          k = Math.sin(y),
          M = (b <= 0 && y >= 0) || y >= Nt,
          S = (b <= Wt && y >= Wt) || y >= Nt + Wt,
          D = (b <= -Wt && y >= -Wt) || y >= Rt + Wt,
          C = b === -Rt || y >= Rt ? -1 : Math.min(x, x * m, w, w * m),
          P = D ? -1 : Math.min(_, _ * m, k, k * m),
          T = M ? 1 : Math.max(x, x * m, w, w * m),
          O = S ? 1 : Math.max(_, _ * m, k, k * m);
        (u = (T - C) / 2),
          (d = (O - P) / 2),
          (h = -(T + C) / 2),
          (c = -(O + P) / 2);
      }
      for (i = 0, a = g.length; i < a; ++i)
        g[i]._options = r._resolveDataElementOptions(g[i], i);
      for (
        o.borderWidth = r.getMaxBorderWidth(),
          e = (s.right - s.left - o.borderWidth) / u,
          n = (s.bottom - s.top - o.borderWidth) / d,
          o.outerRadius = Math.max(Math.min(e, n) / 2, 0),
          o.innerRadius = Math.max(o.outerRadius * m, 0),
          o.radiusLength =
            (o.outerRadius - o.innerRadius) /
            (r._getVisibleDatasetWeightTotal() || 1),
          o.offsetX = h * o.outerRadius,
          o.offsetY = c * o.outerRadius,
          f.total = r.calculateTotal(),
          r.outerRadius =
            o.outerRadius - o.radiusLength * r._getRingWeightOffset(r.index),
          r.innerRadius = Math.max(r.outerRadius - o.radiusLength * v, 0),
          i = 0,
          a = g.length;
        i < a;
        ++i
      )
        r.updateElement(g[i], i, t);
    },
    updateElement: function (t, e, n) {
      var i = this,
        a = i.chart,
        r = a.chartArea,
        o = a.options,
        s = o.animation,
        l = (r.left + r.right) / 2,
        u = (r.top + r.bottom) / 2,
        d = o.rotation,
        h = o.rotation,
        c = i.getDataset(),
        f =
          n && s.animateRotate
            ? 0
            : t.hidden
            ? 0
            : i.calculateCircumference(c.data[e]) * (o.circumference / Nt),
        g = n && s.animateScale ? 0 : i.innerRadius,
        m = n && s.animateScale ? 0 : i.outerRadius,
        p = t._options || {};
      H.extend(t, {
        _datasetIndex: i.index,
        _index: e,
        _model: {
          backgroundColor: p.backgroundColor,
          borderColor: p.borderColor,
          borderWidth: p.borderWidth,
          borderAlign: p.borderAlign,
          x: l + a.offsetX,
          y: u + a.offsetY,
          startAngle: d,
          endAngle: h,
          circumference: f,
          outerRadius: m,
          innerRadius: g,
          label: H.valueAtIndexOrDefault(c.label, e, a.data.labels[e]),
        },
      });
      var v = t._model;
      (n && s.animateRotate) ||
        ((v.startAngle =
          0 === e ? o.rotation : i.getMeta().data[e - 1]._model.endAngle),
        (v.endAngle = v.startAngle + v.circumference)),
        t.pivot();
    },
    calculateTotal: function () {
      var t,
        e = this.getDataset(),
        n = this.getMeta(),
        i = 0;
      return (
        H.each(n.data, function (n, a) {
          (t = e.data[a]), isNaN(t) || n.hidden || (i += Math.abs(t));
        }),
        i
      );
    },
    calculateCircumference: function (t) {
      var e = this.getMeta().total;
      return e > 0 && !isNaN(t) ? Nt * (Math.abs(t) / e) : 0;
    },
    getMaxBorderWidth: function (t) {
      var e,
        n,
        i,
        a,
        r,
        o,
        s,
        l,
        u = 0,
        d = this.chart;
      if (!t)
        for (e = 0, n = d.data.datasets.length; e < n; ++e)
          if (d.isDatasetVisible(e)) {
            (t = (i = d.getDatasetMeta(e)).data),
              e !== this.index && (r = i.controller);
            break;
          }
      if (!t) return 0;
      for (e = 0, n = t.length; e < n; ++e)
        (a = t[e]),
          r
            ? (r._configure(), (o = r._resolveDataElementOptions(a, e)))
            : (o = a._options),
          "inner" !== o.borderAlign &&
            ((s = o.borderWidth),
            (u = (l = o.hoverBorderWidth) > (u = s > u ? s : u) ? l : u));
      return u;
    },
    setHoverStyle: function (t) {
      var e = t._model,
        n = t._options,
        i = H.getHoverColor;
      (t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
      }),
        (e.backgroundColor = Lt(n.hoverBackgroundColor, i(n.backgroundColor))),
        (e.borderColor = Lt(n.hoverBorderColor, i(n.borderColor))),
        (e.borderWidth = Lt(n.hoverBorderWidth, n.borderWidth));
    },
    _getRingWeightOffset: function (t) {
      for (var e = 0, n = 0; n < t; ++n)
        this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
      return e;
    },
    _getRingWeight: function (t) {
      return Math.max(Lt(this.chart.data.datasets[t].weight, 1), 0);
    },
    _getVisibleDatasetWeightTotal: function () {
      return this._getRingWeightOffset(this.chart.data.datasets.length);
    },
  });
  W._set("horizontalBar", {
    hover: { mode: "index", axis: "y" },
    scales: {
      xAxes: [{ type: "linear", position: "bottom" }],
      yAxes: [
        {
          type: "category",
          position: "left",
          offset: !0,
          gridLines: { offsetGridLines: !0 },
        },
      ],
    },
    elements: { rectangle: { borderSkipped: "left" } },
    tooltips: { mode: "index", axis: "y" },
  }),
    W._set("global", {
      datasets: {
        horizontalBar: { categoryPercentage: 0.8, barPercentage: 0.9 },
      },
    });
  var zt = Ot.extend({
      _getValueScaleId: function () {
        return this.getMeta().xAxisID;
      },
      _getIndexScaleId: function () {
        return this.getMeta().yAxisID;
      },
    }),
    Et = H.valueOrDefault,
    Vt = H.options.resolve,
    Ht = H.canvas._isPointInArea;
  function Bt(t, e) {
    var n = (t && t.options.ticks) || {},
      i = n.reverse,
      a = void 0 === n.min ? e : 0,
      r = void 0 === n.max ? e : 0;
    return { start: i ? r : a, end: i ? a : r };
  }
  function jt(t, e, n) {
    var i = n / 2,
      a = Bt(t, i),
      r = Bt(e, i);
    return { top: r.end, right: a.end, bottom: r.start, left: a.start };
  }
  function Ut(t) {
    var e, n, i, a;
    return (
      H.isObject(t)
        ? ((e = t.top), (n = t.right), (i = t.bottom), (a = t.left))
        : (e = n = i = a = t),
      { top: e, right: n, bottom: i, left: a }
    );
  }
  W._set("line", {
    showLines: !0,
    spanGaps: !1,
    hover: { mode: "label" },
    scales: {
      xAxes: [{ type: "category", id: "x-axis-0" }],
      yAxes: [{ type: "linear", id: "y-axis-0" }],
    },
  });
  var Gt = it.extend({
      datasetElementType: wt.Line,
      dataElementType: wt.Point,
      _datasetElementOptions: [
        "backgroundColor",
        "borderCapStyle",
        "borderColor",
        "borderDash",
        "borderDashOffset",
        "borderJoinStyle",
        "borderWidth",
        "cubicInterpolationMode",
        "fill",
      ],
      _dataElementOptions: {
        backgroundColor: "pointBackgroundColor",
        borderColor: "pointBorderColor",
        borderWidth: "pointBorderWidth",
        hitRadius: "pointHitRadius",
        hoverBackgroundColor: "pointHoverBackgroundColor",
        hoverBorderColor: "pointHoverBorderColor",
        hoverBorderWidth: "pointHoverBorderWidth",
        hoverRadius: "pointHoverRadius",
        pointStyle: "pointStyle",
        radius: "pointRadius",
        rotation: "pointRotation",
      },
      update: function (t) {
        var e,
          n,
          i = this,
          a = i.getMeta(),
          r = a.dataset,
          o = a.data || [],
          s = i.chart.options,
          l = i._config,
          u = (i._showLine = Et(l.showLine, s.showLines));
        for (
          i._xScale = i.getScaleForId(a.xAxisID),
            i._yScale = i.getScaleForId(a.yAxisID),
            u &&
              (void 0 !== l.tension &&
                void 0 === l.lineTension &&
                (l.lineTension = l.tension),
              (r._scale = i._yScale),
              (r._datasetIndex = i.index),
              (r._children = o),
              (r._model = i._resolveDatasetElementOptions(r)),
              r.pivot()),
            e = 0,
            n = o.length;
          e < n;
          ++e
        )
          i.updateElement(o[e], e, t);
        for (
          u && 0 !== r._model.tension && i.updateBezierControlPoints(),
            e = 0,
            n = o.length;
          e < n;
          ++e
        )
          o[e].pivot();
      },
      updateElement: function (t, e, n) {
        var i,
          a,
          r = this,
          o = r.getMeta(),
          s = t.custom || {},
          l = r.getDataset(),
          u = r.index,
          d = l.data[e],
          h = r._xScale,
          c = r._yScale,
          f = o.dataset._model,
          g = r._resolveDataElementOptions(t, e);
        (i = h.getPixelForValue("object" == typeof d ? d : NaN, e, u)),
          (a = n ? c.getBasePixel() : r.calculatePointY(d, e, u)),
          (t._xScale = h),
          (t._yScale = c),
          (t._options = g),
          (t._datasetIndex = u),
          (t._index = e),
          (t._model = {
            x: i,
            y: a,
            skip: s.skip || isNaN(i) || isNaN(a),
            radius: g.radius,
            pointStyle: g.pointStyle,
            rotation: g.rotation,
            backgroundColor: g.backgroundColor,
            borderColor: g.borderColor,
            borderWidth: g.borderWidth,
            tension: Et(s.tension, f ? f.tension : 0),
            steppedLine: !!f && f.steppedLine,
            hitRadius: g.hitRadius,
          });
      },
      _resolveDatasetElementOptions: function (t) {
        var e = this,
          n = e._config,
          i = t.custom || {},
          a = e.chart.options,
          r = a.elements.line,
          o = it.prototype._resolveDatasetElementOptions.apply(e, arguments);
        return (
          (o.spanGaps = Et(n.spanGaps, a.spanGaps)),
          (o.tension = Et(n.lineTension, r.tension)),
          (o.steppedLine = Vt([i.steppedLine, n.steppedLine, r.stepped])),
          (o.clip = Ut(Et(n.clip, jt(e._xScale, e._yScale, o.borderWidth)))),
          o
        );
      },
      calculatePointY: function (t, e, n) {
        var i,
          a,
          r,
          o,
          s,
          l,
          u,
          d = this.chart,
          h = this._yScale,
          c = 0,
          f = 0;
        if (h.options.stacked) {
          for (
            s = +h.getRightValue(t),
              u = (l = d._getSortedVisibleDatasetMetas()).length,
              i = 0;
            i < u && (r = l[i]).index !== n;
            ++i
          )
            (a = d.data.datasets[r.index]),
              "line" === r.type &&
                r.yAxisID === h.id &&
                ((o = +h.getRightValue(a.data[e])) < 0
                  ? (f += o || 0)
                  : (c += o || 0));
          return s < 0 ? h.getPixelForValue(f + s) : h.getPixelForValue(c + s);
        }
        return h.getPixelForValue(t);
      },
      updateBezierControlPoints: function () {
        var t,
          e,
          n,
          i,
          a = this.chart,
          r = this.getMeta(),
          o = r.dataset._model,
          s = a.chartArea,
          l = r.data || [];
        function u(t, e, n) {
          return Math.max(Math.min(t, n), e);
        }
        if (
          (o.spanGaps &&
            (l = l.filter(function (t) {
              return !t._model.skip;
            })),
          "monotone" === o.cubicInterpolationMode)
        )
          H.splineCurveMonotone(l);
        else
          for (t = 0, e = l.length; t < e; ++t)
            (n = l[t]._model),
              (i = H.splineCurve(
                H.previousItem(l, t)._model,
                n,
                H.nextItem(l, t)._model,
                o.tension
              )),
              (n.controlPointPreviousX = i.previous.x),
              (n.controlPointPreviousY = i.previous.y),
              (n.controlPointNextX = i.next.x),
              (n.controlPointNextY = i.next.y);
        if (a.options.elements.line.capBezierPoints)
          for (t = 0, e = l.length; t < e; ++t)
            (n = l[t]._model),
              Ht(n, s) &&
                (t > 0 &&
                  Ht(l[t - 1]._model, s) &&
                  ((n.controlPointPreviousX = u(
                    n.controlPointPreviousX,
                    s.left,
                    s.right
                  )),
                  (n.controlPointPreviousY = u(
                    n.controlPointPreviousY,
                    s.top,
                    s.bottom
                  ))),
                t < l.length - 1 &&
                  Ht(l[t + 1]._model, s) &&
                  ((n.controlPointNextX = u(
                    n.controlPointNextX,
                    s.left,
                    s.right
                  )),
                  (n.controlPointNextY = u(
                    n.controlPointNextY,
                    s.top,
                    s.bottom
                  ))));
      },
      draw: function () {
        var t,
          e = this.chart,
          n = this.getMeta(),
          i = n.data || [],
          a = e.chartArea,
          r = e.canvas,
          o = 0,
          s = i.length;
        for (
          this._showLine &&
          ((t = n.dataset._model.clip),
          H.canvas.clipArea(e.ctx, {
            left: !1 === t.left ? 0 : a.left - t.left,
            right: !1 === t.right ? r.width : a.right + t.right,
            top: !1 === t.top ? 0 : a.top - t.top,
            bottom: !1 === t.bottom ? r.height : a.bottom + t.bottom,
          }),
          n.dataset.draw(),
          H.canvas.unclipArea(e.ctx));
          o < s;
          ++o
        )
          i[o].draw(a);
      },
      setHoverStyle: function (t) {
        var e = t._model,
          n = t._options,
          i = H.getHoverColor;
        (t.$previousStyle = {
          backgroundColor: e.backgroundColor,
          borderColor: e.borderColor,
          borderWidth: e.borderWidth,
          radius: e.radius,
        }),
          (e.backgroundColor = Et(
            n.hoverBackgroundColor,
            i(n.backgroundColor)
          )),
          (e.borderColor = Et(n.hoverBorderColor, i(n.borderColor))),
          (e.borderWidth = Et(n.hoverBorderWidth, n.borderWidth)),
          (e.radius = Et(n.hoverRadius, n.radius));
      },
    }),
    qt = H.options.resolve;
  W._set("polarArea", {
    scale: {
      type: "radialLinear",
      angleLines: { display: !1 },
      gridLines: { circular: !0 },
      pointLabels: { display: !1 },
      ticks: { beginAtZero: !0 },
    },
    animation: { animateRotate: !0, animateScale: !0 },
    startAngle: -0.5 * Math.PI,
    legendCallback: function (t) {
      var e,
        n,
        i,
        a = document.createElement("ul"),
        r = t.data,
        o = r.datasets,
        s = r.labels;
      if ((a.setAttribute("class", t.id + "-legend"), o.length))
        for (e = 0, n = o[0].data.length; e < n; ++e)
          ((i = a.appendChild(document.createElement("li"))).appendChild(
            document.createElement("span")
          ).style.backgroundColor = o[0].backgroundColor[e]),
            s[e] && i.appendChild(document.createTextNode(s[e]));
      return a.outerHTML;
    },
    legend: {
      labels: {
        generateLabels: function (t) {
          var e = t.data;
          return e.labels.length && e.datasets.length
            ? e.labels.map(function (n, i) {
                var a = t.getDatasetMeta(0),
                  r = a.controller.getStyle(i);
                return {
                  text: n,
                  fillStyle: r.backgroundColor,
                  strokeStyle: r.borderColor,
                  lineWidth: r.borderWidth,
                  hidden: isNaN(e.datasets[0].data[i]) || a.data[i].hidden,
                  index: i,
                };
              })
            : [];
        },
      },
      onClick: function (t, e) {
        var n,
          i,
          a,
          r = e.index,
          o = this.chart;
        for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)
          (a = o.getDatasetMeta(n)).data[r].hidden = !a.data[r].hidden;
        o.update();
      },
    },
    tooltips: {
      callbacks: {
        title: function () {
          return "";
        },
        label: function (t, e) {
          return e.labels[t.index] + ": " + t.yLabel;
        },
      },
    },
  });
  var Zt = it.extend({
    dataElementType: wt.Arc,
    linkScales: H.noop,
    _dataElementOptions: [
      "backgroundColor",
      "borderColor",
      "borderWidth",
      "borderAlign",
      "hoverBackgroundColor",
      "hoverBorderColor",
      "hoverBorderWidth",
    ],
    _getIndexScaleId: function () {
      return this.chart.scale.id;
    },
    _getValueScaleId: function () {
      return this.chart.scale.id;
    },
    update: function (t) {
      var e,
        n,
        i,
        a = this,
        r = a.getDataset(),
        o = a.getMeta(),
        s = a.chart.options.startAngle || 0,
        l = (a._starts = []),
        u = (a._angles = []),
        d = o.data;
      for (
        a._updateRadius(),
          o.count = a.countVisibleElements(),
          e = 0,
          n = r.data.length;
        e < n;
        e++
      )
        (l[e] = s), (i = a._computeAngle(e)), (u[e] = i), (s += i);
      for (e = 0, n = d.length; e < n; ++e)
        (d[e]._options = a._resolveDataElementOptions(d[e], e)),
          a.updateElement(d[e], e, t);
    },
    _updateRadius: function () {
      var t = this,
        e = t.chart,
        n = e.chartArea,
        i = e.options,
        a = Math.min(n.right - n.left, n.bottom - n.top);
      (e.outerRadius = Math.max(a / 2, 0)),
        (e.innerRadius = Math.max(
          i.cutoutPercentage ? (e.outerRadius / 100) * i.cutoutPercentage : 1,
          0
        )),
        (e.radiusLength =
          (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount()),
        (t.outerRadius = e.outerRadius - e.radiusLength * t.index),
        (t.innerRadius = t.outerRadius - e.radiusLength);
    },
    updateElement: function (t, e, n) {
      var i = this,
        a = i.chart,
        r = i.getDataset(),
        o = a.options,
        s = o.animation,
        l = a.scale,
        u = a.data.labels,
        d = l.xCenter,
        h = l.yCenter,
        c = o.startAngle,
        f = t.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
        g = i._starts[e],
        m = g + (t.hidden ? 0 : i._angles[e]),
        p = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
        v = t._options || {};
      H.extend(t, {
        _datasetIndex: i.index,
        _index: e,
        _scale: l,
        _model: {
          backgroundColor: v.backgroundColor,
          borderColor: v.borderColor,
          borderWidth: v.borderWidth,
          borderAlign: v.borderAlign,
          x: d,
          y: h,
          innerRadius: 0,
          outerRadius: n ? p : f,
          startAngle: n && s.animateRotate ? c : g,
          endAngle: n && s.animateRotate ? c : m,
          label: H.valueAtIndexOrDefault(u, e, u[e]),
        },
      }),
        t.pivot();
    },
    countVisibleElements: function () {
      var t = this.getDataset(),
        e = this.getMeta(),
        n = 0;
      return (
        H.each(e.data, function (e, i) {
          isNaN(t.data[i]) || e.hidden || n++;
        }),
        n
      );
    },
    setHoverStyle: function (t) {
      var e = t._model,
        n = t._options,
        i = H.getHoverColor,
        a = H.valueOrDefault;
      (t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
      }),
        (e.backgroundColor = a(n.hoverBackgroundColor, i(n.backgroundColor))),
        (e.borderColor = a(n.hoverBorderColor, i(n.borderColor))),
        (e.borderWidth = a(n.hoverBorderWidth, n.borderWidth));
    },
    _computeAngle: function (t) {
      var e = this,
        n = this.getMeta().count,
        i = e.getDataset(),
        a = e.getMeta();
      if (isNaN(i.data[t]) || a.data[t].hidden) return 0;
      var r = {
        chart: e.chart,
        dataIndex: t,
        dataset: i,
        datasetIndex: e.index,
      };
      return qt([e.chart.options.elements.arc.angle, (2 * Math.PI) / n], r, t);
    },
  });
  W._set("pie", H.clone(W.doughnut)), W._set("pie", { cutoutPercentage: 0 });
  var $t = Yt,
    Xt = H.valueOrDefault;
  W._set("radar", {
    spanGaps: !1,
    scale: { type: "radialLinear" },
    elements: { line: { fill: "start", tension: 0 } },
  });
  var Kt = it.extend({
    datasetElementType: wt.Line,
    dataElementType: wt.Point,
    linkScales: H.noop,
    _datasetElementOptions: [
      "backgroundColor",
      "borderWidth",
      "borderColor",
      "borderCapStyle",
      "borderDash",
      "borderDashOffset",
      "borderJoinStyle",
      "fill",
    ],
    _dataElementOptions: {
      backgroundColor: "pointBackgroundColor",
      borderColor: "pointBorderColor",
      borderWidth: "pointBorderWidth",
      hitRadius: "pointHitRadius",
      hoverBackgroundColor: "pointHoverBackgroundColor",
      hoverBorderColor: "pointHoverBorderColor",
      hoverBorderWidth: "pointHoverBorderWidth",
      hoverRadius: "pointHoverRadius",
      pointStyle: "pointStyle",
      radius: "pointRadius",
      rotation: "pointRotation",
    },
    _getIndexScaleId: function () {
      return this.chart.scale.id;
    },
    _getValueScaleId: function () {
      return this.chart.scale.id;
    },
    update: function (t) {
      var e,
        n,
        i = this,
        a = i.getMeta(),
        r = a.dataset,
        o = a.data || [],
        s = i.chart.scale,
        l = i._config;
      for (
        void 0 !== l.tension &&
          void 0 === l.lineTension &&
          (l.lineTension = l.tension),
          r._scale = s,
          r._datasetIndex = i.index,
          r._children = o,
          r._loop = !0,
          r._model = i._resolveDatasetElementOptions(r),
          r.pivot(),
          e = 0,
          n = o.length;
        e < n;
        ++e
      )
        i.updateElement(o[e], e, t);
      for (i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e)
        o[e].pivot();
    },
    updateElement: function (t, e, n) {
      var i = this,
        a = t.custom || {},
        r = i.getDataset(),
        o = i.chart.scale,
        s = o.getPointPositionForValue(e, r.data[e]),
        l = i._resolveDataElementOptions(t, e),
        u = i.getMeta().dataset._model,
        d = n ? o.xCenter : s.x,
        h = n ? o.yCenter : s.y;
      (t._scale = o),
        (t._options = l),
        (t._datasetIndex = i.index),
        (t._index = e),
        (t._model = {
          x: d,
          y: h,
          skip: a.skip || isNaN(d) || isNaN(h),
          radius: l.radius,
          pointStyle: l.pointStyle,
          rotation: l.rotation,
          backgroundColor: l.backgroundColor,
          borderColor: l.borderColor,
          borderWidth: l.borderWidth,
          tension: Xt(a.tension, u ? u.tension : 0),
          hitRadius: l.hitRadius,
        });
    },
    _resolveDatasetElementOptions: function () {
      var t = this,
        e = t._config,
        n = t.chart.options,
        i = it.prototype._resolveDatasetElementOptions.apply(t, arguments);
      return (
        (i.spanGaps = Xt(e.spanGaps, n.spanGaps)),
        (i.tension = Xt(e.lineTension, n.elements.line.tension)),
        i
      );
    },
    updateBezierControlPoints: function () {
      var t,
        e,
        n,
        i,
        a = this.getMeta(),
        r = this.chart.chartArea,
        o = a.data || [];
      function s(t, e, n) {
        return Math.max(Math.min(t, n), e);
      }
      for (
        a.dataset._model.spanGaps &&
          (o = o.filter(function (t) {
            return !t._model.skip;
          })),
          t = 0,
          e = o.length;
        t < e;
        ++t
      )
        (n = o[t]._model),
          (i = H.splineCurve(
            H.previousItem(o, t, !0)._model,
            n,
            H.nextItem(o, t, !0)._model,
            n.tension
          )),
          (n.controlPointPreviousX = s(i.previous.x, r.left, r.right)),
          (n.controlPointPreviousY = s(i.previous.y, r.top, r.bottom)),
          (n.controlPointNextX = s(i.next.x, r.left, r.right)),
          (n.controlPointNextY = s(i.next.y, r.top, r.bottom));
    },
    setHoverStyle: function (t) {
      var e = t._model,
        n = t._options,
        i = H.getHoverColor;
      (t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
        radius: e.radius,
      }),
        (e.backgroundColor = Xt(n.hoverBackgroundColor, i(n.backgroundColor))),
        (e.borderColor = Xt(n.hoverBorderColor, i(n.borderColor))),
        (e.borderWidth = Xt(n.hoverBorderWidth, n.borderWidth)),
        (e.radius = Xt(n.hoverRadius, n.radius));
    },
  });
  W._set("scatter", {
    hover: { mode: "single" },
    scales: {
      xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }],
      yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }],
    },
    tooltips: {
      callbacks: {
        title: function () {
          return "";
        },
        label: function (t) {
          return "(" + t.xLabel + ", " + t.yLabel + ")";
        },
      },
    },
  }),
    W._set("global", { datasets: { scatter: { showLine: !1 } } });
  var Jt = {
    bar: Ot,
    bubble: It,
    doughnut: Yt,
    horizontalBar: zt,
    line: Gt,
    polarArea: Zt,
    pie: $t,
    radar: Kt,
    scatter: Gt,
  };
  function Qt(t, e) {
    return t.native ? { x: t.x, y: t.y } : H.getRelativePosition(t, e);
  }
  function te(t, e) {
    var n,
      i,
      a,
      r,
      o,
      s,
      l = t._getSortedVisibleDatasetMetas();
    for (i = 0, r = l.length; i < r; ++i)
      for (a = 0, o = (n = l[i].data).length; a < o; ++a)
        (s = n[a])._view.skip || e(s);
  }
  function ee(t, e) {
    var n = [];
    return (
      te(t, function (t) {
        t.inRange(e.x, e.y) && n.push(t);
      }),
      n
    );
  }
  function ne(t, e, n, i) {
    var a = Number.POSITIVE_INFINITY,
      r = [];
    return (
      te(t, function (t) {
        if (!n || t.inRange(e.x, e.y)) {
          var o = t.getCenterPoint(),
            s = i(e, o);
          s < a ? ((r = [t]), (a = s)) : s === a && r.push(t);
        }
      }),
      r
    );
  }
  function ie(t) {
    var e = -1 !== t.indexOf("x"),
      n = -1 !== t.indexOf("y");
    return function (t, i) {
      var a = e ? Math.abs(t.x - i.x) : 0,
        r = n ? Math.abs(t.y - i.y) : 0;
      return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
    };
  }
  function ae(t, e, n) {
    var i = Qt(e, t);
    n.axis = n.axis || "x";
    var a = ie(n.axis),
      r = n.intersect ? ee(t, i) : ne(t, i, !1, a),
      o = [];
    return r.length
      ? (t._getSortedVisibleDatasetMetas().forEach(function (t) {
          var e = t.data[r[0]._index];
          e && !e._view.skip && o.push(e);
        }),
        o)
      : [];
  }
  var re = {
      modes: {
        single: function (t, e) {
          var n = Qt(e, t),
            i = [];
          return (
            te(t, function (t) {
              if (t.inRange(n.x, n.y)) return i.push(t), i;
            }),
            i.slice(0, 1)
          );
        },
        label: ae,
        index: ae,
        dataset: function (t, e, n) {
          var i = Qt(e, t);
          n.axis = n.axis || "xy";
          var a = ie(n.axis),
            r = n.intersect ? ee(t, i) : ne(t, i, !1, a);
          return (
            r.length > 0 && (r = t.getDatasetMeta(r[0]._datasetIndex).data), r
          );
        },
        "x-axis": function (t, e) {
          return ae(t, e, { intersect: !1 });
        },
        point: function (t, e) {
          return ee(t, Qt(e, t));
        },
        nearest: function (t, e, n) {
          var i = Qt(e, t);
          n.axis = n.axis || "xy";
          var a = ie(n.axis);
          return ne(t, i, n.intersect, a);
        },
        x: function (t, e, n) {
          var i = Qt(e, t),
            a = [],
            r = !1;
          return (
            te(t, function (t) {
              t.inXRange(i.x) && a.push(t), t.inRange(i.x, i.y) && (r = !0);
            }),
            n.intersect && !r && (a = []),
            a
          );
        },
        y: function (t, e, n) {
          var i = Qt(e, t),
            a = [],
            r = !1;
          return (
            te(t, function (t) {
              t.inYRange(i.y) && a.push(t), t.inRange(i.x, i.y) && (r = !0);
            }),
            n.intersect && !r && (a = []),
            a
          );
        },
      },
    },
    oe = H.extend;
  function se(t, e) {
    return H.where(t, function (t) {
      return t.pos === e;
    });
  }
  function le(t, e) {
    return t.sort(function (t, n) {
      var i = e ? n : t,
        a = e ? t : n;
      return i.weight === a.weight ? i.index - a.index : i.weight - a.weight;
    });
  }
  function ue(t, e, n, i) {
    return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
  }
  function de(t, e, n) {
    var i,
      a,
      r = n.box,
      o = t.maxPadding;
    if (
      (n.size && (t[n.pos] -= n.size),
      (n.size = n.horizontal ? r.height : r.width),
      (t[n.pos] += n.size),
      r.getPadding)
    ) {
      var s = r.getPadding();
      (o.top = Math.max(o.top, s.top)),
        (o.left = Math.max(o.left, s.left)),
        (o.bottom = Math.max(o.bottom, s.bottom)),
        (o.right = Math.max(o.right, s.right));
    }
    if (
      ((i = e.outerWidth - ue(o, t, "left", "right")),
      (a = e.outerHeight - ue(o, t, "top", "bottom")),
      i !== t.w || a !== t.h)
    )
      return (t.w = i), (t.h = a), n.horizontal ? i !== t.w : a !== t.h;
  }
  function he(t, e) {
    var n = e.maxPadding;
    function i(t) {
      var i = { left: 0, top: 0, right: 0, bottom: 0 };
      return (
        t.forEach(function (t) {
          i[t] = Math.max(e[t], n[t]);
        }),
        i
      );
    }
    return i(t ? ["left", "right"] : ["top", "bottom"]);
  }
  function ce(t, e, n) {
    var i,
      a,
      r,
      o,
      s,
      l,
      u = [];
    for (i = 0, a = t.length; i < a; ++i)
      (o = (r = t[i]).box).update(
        r.width || e.w,
        r.height || e.h,
        he(r.horizontal, e)
      ),
        de(e, n, r) && ((l = !0), u.length && (s = !0)),
        o.fullWidth || u.push(r);
    return (s && ce(u, e, n)) || l;
  }
  function fe(t, e, n) {
    var i,
      a,
      r,
      o,
      s = n.padding,
      l = e.x,
      u = e.y;
    for (i = 0, a = t.length; i < a; ++i)
      (o = (r = t[i]).box),
        r.horizontal
          ? ((o.left = o.fullWidth ? s.left : e.left),
            (o.right = o.fullWidth ? n.outerWidth - s.right : e.left + e.w),
            (o.top = u),
            (o.bottom = u + o.height),
            (o.width = o.right - o.left),
            (u = o.bottom))
          : ((o.left = l),
            (o.right = l + o.width),
            (o.top = e.top),
            (o.bottom = e.top + e.h),
            (o.height = o.bottom - o.top),
            (l = o.right));
    (e.x = l), (e.y = u);
  }
  W._set("global", {
    layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
  });
  var ge,
    me = {
      defaults: {},
      addBox: function (t, e) {
        t.boxes || (t.boxes = []),
          (e.fullWidth = e.fullWidth || !1),
          (e.position = e.position || "top"),
          (e.weight = e.weight || 0),
          (e._layers =
            e._layers ||
            function () {
              return [
                {
                  z: 0,
                  draw: function () {
                    e.draw.apply(e, arguments);
                  },
                },
              ];
            }),
          t.boxes.push(e);
      },
      removeBox: function (t, e) {
        var n = t.boxes ? t.boxes.indexOf(e) : -1;
        -1 !== n && t.boxes.splice(n, 1);
      },
      configure: function (t, e, n) {
        for (
          var i, a = ["fullWidth", "position", "weight"], r = a.length, o = 0;
          o < r;
          ++o
        )
          (i = a[o]), n.hasOwnProperty(i) && (e[i] = n[i]);
      },
      update: function (t, e, n) {
        if (t) {
          var i = t.options.layout || {},
            a = H.options.toPadding(i.padding),
            r = e - a.width,
            o = n - a.height,
            s = (function (t) {
              var e = (function (t) {
                  var e,
                    n,
                    i,
                    a = [];
                  for (e = 0, n = (t || []).length; e < n; ++e)
                    (i = t[e]),
                      a.push({
                        index: e,
                        box: i,
                        pos: i.position,
                        horizontal: i.isHorizontal(),
                        weight: i.weight,
                      });
                  return a;
                })(t),
                n = le(se(e, "left"), !0),
                i = le(se(e, "right")),
                a = le(se(e, "top"), !0),
                r = le(se(e, "bottom"));
              return {
                leftAndTop: n.concat(a),
                rightAndBottom: i.concat(r),
                chartArea: se(e, "chartArea"),
                vertical: n.concat(i),
                horizontal: a.concat(r),
              };
            })(t.boxes),
            l = s.vertical,
            u = s.horizontal,
            d = Object.freeze({
              outerWidth: e,
              outerHeight: n,
              padding: a,
              availableWidth: r,
              vBoxMaxWidth: r / 2 / l.length,
              hBoxMaxHeight: o / 2,
            }),
            h = oe(
              { maxPadding: oe({}, a), w: r, h: o, x: a.left, y: a.top },
              a
            );
          !(function (t, e) {
            var n, i, a;
            for (n = 0, i = t.length; n < i; ++n)
              ((a = t[n]).width = a.horizontal
                ? a.box.fullWidth && e.availableWidth
                : e.vBoxMaxWidth),
                (a.height = a.horizontal && e.hBoxMaxHeight);
          })(l.concat(u), d),
            ce(l, h, d),
            ce(u, h, d) && ce(l, h, d),
            (function (t) {
              var e = t.maxPadding;
              function n(n) {
                var i = Math.max(e[n] - t[n], 0);
                return (t[n] += i), i;
              }
              (t.y += n("top")), (t.x += n("left")), n("right"), n("bottom");
            })(h),
            fe(s.leftAndTop, h, d),
            (h.x += h.w),
            (h.y += h.h),
            fe(s.rightAndBottom, h, d),
            (t.chartArea = {
              left: h.left,
              top: h.top,
              right: h.left + h.w,
              bottom: h.top + h.h,
            }),
            H.each(s.chartArea, function (e) {
              var n = e.box;
              oe(n, t.chartArea), n.update(h.w, h.h);
            });
        }
      },
    },
    pe =
      ((ge = Object.freeze({
        __proto__: null,
        default:
          "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}",
      })) &&
        ge.default) ||
      ge,
    ve = "$chartjs",
    be = "chartjs-size-monitor",
    ye = "chartjs-render-monitor",
    xe = "chartjs-render-animation",
    _e = ["animationstart", "webkitAnimationStart"],
    we = {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
      pointerenter: "mouseenter",
      pointerdown: "mousedown",
      pointermove: "mousemove",
      pointerup: "mouseup",
      pointerleave: "mouseout",
      pointerout: "mouseout",
    };
  function ke(t, e) {
    var n = H.getStyle(t, e),
      i = n && n.match(/^(\d+)(\.\d+)?px$/);
    return i ? Number(i[1]) : void 0;
  }
  var Me = !!(function () {
    var t = !1;
    try {
      var e = Object.defineProperty({}, "passive", {
        get: function () {
          t = !0;
        },
      });
      window.addEventListener("e", null, e);
    } catch (t) {}
    return t;
  })() && { passive: !0 };
  function Se(t, e, n) {
    t.addEventListener(e, n, Me);
  }
  function De(t, e, n) {
    t.removeEventListener(e, n, Me);
  }
  function Ce(t, e, n, i, a) {
    return {
      type: t,
      chart: e,
      native: a || null,
      x: void 0 !== n ? n : null,
      y: void 0 !== i ? i : null,
    };
  }
  function Pe(t) {
    var e = document.createElement("div");
    return (e.className = t || ""), e;
  }
  function Te(t, e, n) {
    var i,
      a,
      r,
      o,
      s = t[ve] || (t[ve] = {}),
      l = (s.resizer = (function (t) {
        var e = Pe(be),
          n = Pe(be + "-expand"),
          i = Pe(be + "-shrink");
        n.appendChild(Pe()),
          i.appendChild(Pe()),
          e.appendChild(n),
          e.appendChild(i),
          (e._reset = function () {
            (n.scrollLeft = 1e6),
              (n.scrollTop = 1e6),
              (i.scrollLeft = 1e6),
              (i.scrollTop = 1e6);
          });
        var a = function () {
          e._reset(), t();
        };
        return (
          Se(n, "scroll", a.bind(n, "expand")),
          Se(i, "scroll", a.bind(i, "shrink")),
          e
        );
      })(
        ((i = function () {
          if (s.resizer) {
            var i = n.options.maintainAspectRatio && t.parentNode,
              a = i ? i.clientWidth : 0;
            e(Ce("resize", n)),
              i && i.clientWidth < a && n.canvas && e(Ce("resize", n));
          }
        }),
        (r = !1),
        (o = []),
        function () {
          (o = Array.prototype.slice.call(arguments)),
            (a = a || this),
            r ||
              ((r = !0),
              H.requestAnimFrame.call(window, function () {
                (r = !1), i.apply(a, o);
              }));
        })
      ));
    !(function (t, e) {
      var n = t[ve] || (t[ve] = {}),
        i = (n.renderProxy = function (t) {
          t.animationName === xe && e();
        });
      H.each(_e, function (e) {
        Se(t, e, i);
      }),
        (n.reflow = !!t.offsetParent),
        t.classList.add(ye);
    })(t, function () {
      if (s.resizer) {
        var e = t.parentNode;
        e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset();
      }
    });
  }
  function Oe(t) {
    var e = t[ve] || {},
      n = e.resizer;
    delete e.resizer,
      (function (t) {
        var e = t[ve] || {},
          n = e.renderProxy;
        n &&
          (H.each(_e, function (e) {
            De(t, e, n);
          }),
          delete e.renderProxy),
          t.classList.remove(ye);
      })(t),
      n && n.parentNode && n.parentNode.removeChild(n);
  }
  var Ae = {
    disableCSSInjection: !1,
    _enabled: "undefined" != typeof window && "undefined" != typeof document,
    _ensureLoaded: function (t) {
      if (!this.disableCSSInjection) {
        var e = t.getRootNode ? t.getRootNode() : document;
        !(function (t, e) {
          var n = t[ve] || (t[ve] = {});
          if (!n.containsStyles) {
            (n.containsStyles = !0), (e = "/* Chart.js */\n" + e);
            var i = document.createElement("style");
            i.setAttribute("type", "text/css"),
              i.appendChild(document.createTextNode(e)),
              t.appendChild(i);
          }
        })(e.host ? e : document.head, pe);
      }
    },
    acquireContext: function (t, e) {
      "string" == typeof t
        ? (t = document.getElementById(t))
        : t.length && (t = t[0]),
        t && t.canvas && (t = t.canvas);
      var n = t && t.getContext && t.getContext("2d");
      return n && n.canvas === t
        ? (this._ensureLoaded(t),
          (function (t, e) {
            var n = t.style,
              i = t.getAttribute("height"),
              a = t.getAttribute("width");
            if (
              ((t[ve] = {
                initial: {
                  height: i,
                  width: a,
                  style: {
                    display: n.display,
                    height: n.height,
                    width: n.width,
                  },
                },
              }),
              (n.display = n.display || "block"),
              null === a || "" === a)
            ) {
              var r = ke(t, "width");
              void 0 !== r && (t.width = r);
            }
            if (null === i || "" === i)
              if ("" === t.style.height)
                t.height = t.width / (e.options.aspectRatio || 2);
              else {
                var o = ke(t, "height");
                void 0 !== r && (t.height = o);
              }
          })(t, e),
          n)
        : null;
    },
    releaseContext: function (t) {
      var e = t.canvas;
      if (e[ve]) {
        var n = e[ve].initial;
        ["height", "width"].forEach(function (t) {
          var i = n[t];
          H.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i);
        }),
          H.each(n.style || {}, function (t, n) {
            e.style[n] = t;
          }),
          (e.width = e.width),
          delete e[ve];
      }
    },
    addEventListener: function (t, e, n) {
      var i = t.canvas;
      if ("resize" !== e) {
        var a = n[ve] || (n[ve] = {});
        Se(
          i,
          e,
          ((a.proxies || (a.proxies = {}))[t.id + "_" + e] = function (e) {
            n(
              (function (t, e) {
                var n = we[t.type] || t.type,
                  i = H.getRelativePosition(t, e);
                return Ce(n, e, i.x, i.y, t);
              })(e, t)
            );
          })
        );
      } else Te(i, n, t);
    },
    removeEventListener: function (t, e, n) {
      var i = t.canvas;
      if ("resize" !== e) {
        var a = ((n[ve] || {}).proxies || {})[t.id + "_" + e];
        a && De(i, e, a);
      } else Oe(i);
    },
  };
  (H.addEvent = Se), (H.removeEvent = De);
  var Fe = Ae._enabled
      ? Ae
      : {
          acquireContext: function (t) {
            return (
              t && t.canvas && (t = t.canvas), (t && t.getContext("2d")) || null
            );
          },
        },
    Ie = H.extend(
      {
        initialize: function () {},
        acquireContext: function () {},
        releaseContext: function () {},
        addEventListener: function () {},
        removeEventListener: function () {},
      },
      Fe
    );
  W._set("global", { plugins: {} });
  var Le = {
      _plugins: [],
      _cacheId: 0,
      register: function (t) {
        var e = this._plugins;
        [].concat(t).forEach(function (t) {
          -1 === e.indexOf(t) && e.push(t);
        }),
          this._cacheId++;
      },
      unregister: function (t) {
        var e = this._plugins;
        [].concat(t).forEach(function (t) {
          var n = e.indexOf(t);
          -1 !== n && e.splice(n, 1);
        }),
          this._cacheId++;
      },
      clear: function () {
        (this._plugins = []), this._cacheId++;
      },
      count: function () {
        return this._plugins.length;
      },
      getAll: function () {
        return this._plugins;
      },
      notify: function (t, e, n) {
        var i,
          a,
          r,
          o,
          s,
          l = this.descriptors(t),
          u = l.length;
        for (i = 0; i < u; ++i)
          if (
            "function" == typeof (s = (r = (a = l[i]).plugin)[e]) &&
            ((o = [t].concat(n || [])).push(a.options), !1 === s.apply(r, o))
          )
            return !1;
        return !0;
      },
      descriptors: function (t) {
        var e = t.$plugins || (t.$plugins = {});
        if (e.id === this._cacheId) return e.descriptors;
        var n = [],
          i = [],
          a = (t && t.config) || {},
          r = (a.options && a.options.plugins) || {};
        return (
          this._plugins.concat(a.plugins || []).forEach(function (t) {
            if (-1 === n.indexOf(t)) {
              var e = t.id,
                a = r[e];
              !1 !== a &&
                (!0 === a && (a = H.clone(W.global.plugins[e])),
                n.push(t),
                i.push({ plugin: t, options: a || {} }));
            }
          }),
          (e.descriptors = i),
          (e.id = this._cacheId),
          i
        );
      },
      _invalidate: function (t) {
        delete t.$plugins;
      },
    },
    Re = {
      constructors: {},
      defaults: {},
      registerScaleType: function (t, e, n) {
        (this.constructors[t] = e), (this.defaults[t] = H.clone(n));
      },
      getScaleConstructor: function (t) {
        return this.constructors.hasOwnProperty(t)
          ? this.constructors[t]
          : void 0;
      },
      getScaleDefaults: function (t) {
        return this.defaults.hasOwnProperty(t)
          ? H.merge({}, [W.scale, this.defaults[t]])
          : {};
      },
      updateScaleDefaults: function (t, e) {
        this.defaults.hasOwnProperty(t) &&
          (this.defaults[t] = H.extend(this.defaults[t], e));
      },
      addScalesToLayout: function (t) {
        H.each(t.scales, function (e) {
          (e.fullWidth = e.options.fullWidth),
            (e.position = e.options.position),
            (e.weight = e.options.weight),
            me.addBox(t, e);
        });
      },
    },
    Ne = H.valueOrDefault,
    We = H.rtl.getRtlAdapter;
  W._set("global", {
    tooltips: {
      enabled: !0,
      custom: null,
      mode: "nearest",
      position: "average",
      intersect: !0,
      backgroundColor: "rgba(0,0,0,0.8)",
      titleFontStyle: "bold",
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleFontColor: "#fff",
      titleAlign: "left",
      bodySpacing: 2,
      bodyFontColor: "#fff",
      bodyAlign: "left",
      footerFontStyle: "bold",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFontColor: "#fff",
      footerAlign: "left",
      yPadding: 6,
      xPadding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      multiKeyBackground: "#fff",
      displayColors: !0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      callbacks: {
        beforeTitle: H.noop,
        title: function (t, e) {
          var n = "",
            i = e.labels,
            a = i ? i.length : 0;
          if (t.length > 0) {
            var r = t[0];
            r.label
              ? (n = r.label)
              : r.xLabel
              ? (n = r.xLabel)
              : a > 0 && r.index < a && (n = i[r.index]);
          }
          return n;
        },
        afterTitle: H.noop,
        beforeBody: H.noop,
        beforeLabel: H.noop,
        label: function (t, e) {
          var n = e.datasets[t.datasetIndex].label || "";
          return (
            n && (n += ": "),
            H.isNullOrUndef(t.value) ? (n += t.yLabel) : (n += t.value),
            n
          );
        },
        labelColor: function (t, e) {
          var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
          return {
            borderColor: n.borderColor,
            backgroundColor: n.backgroundColor,
          };
        },
        labelTextColor: function () {
          return this._options.bodyFontColor;
        },
        afterLabel: H.noop,
        afterBody: H.noop,
        beforeFooter: H.noop,
        footer: H.noop,
        afterFooter: H.noop,
      },
    },
  });
  var Ye = {
    average: function (t) {
      if (!t.length) return !1;
      var e,
        n,
        i = 0,
        a = 0,
        r = 0;
      for (e = 0, n = t.length; e < n; ++e) {
        var o = t[e];
        if (o && o.hasValue()) {
          var s = o.tooltipPosition();
          (i += s.x), (a += s.y), ++r;
        }
      }
      return { x: i / r, y: a / r };
    },
    nearest: function (t, e) {
      var n,
        i,
        a,
        r = e.x,
        o = e.y,
        s = Number.POSITIVE_INFINITY;
      for (n = 0, i = t.length; n < i; ++n) {
        var l = t[n];
        if (l && l.hasValue()) {
          var u = l.getCenterPoint(),
            d = H.distanceBetweenPoints(e, u);
          d < s && ((s = d), (a = l));
        }
      }
      if (a) {
        var h = a.tooltipPosition();
        (r = h.x), (o = h.y);
      }
      return { x: r, y: o };
    },
  };
  function ze(t, e) {
    return (
      e && (H.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    );
  }
  function Ee(t) {
    return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1
      ? t.split("\n")
      : t;
  }
  function Ve(t) {
    var e = W.global;
    return {
      xPadding: t.xPadding,
      yPadding: t.yPadding,
      xAlign: t.xAlign,
      yAlign: t.yAlign,
      rtl: t.rtl,
      textDirection: t.textDirection,
      bodyFontColor: t.bodyFontColor,
      _bodyFontFamily: Ne(t.bodyFontFamily, e.defaultFontFamily),
      _bodyFontStyle: Ne(t.bodyFontStyle, e.defaultFontStyle),
      _bodyAlign: t.bodyAlign,
      bodyFontSize: Ne(t.bodyFontSize, e.defaultFontSize),
      bodySpacing: t.bodySpacing,
      titleFontColor: t.titleFontColor,
      _titleFontFamily: Ne(t.titleFontFamily, e.defaultFontFamily),
      _titleFontStyle: Ne(t.titleFontStyle, e.defaultFontStyle),
      titleFontSize: Ne(t.titleFontSize, e.defaultFontSize),
      _titleAlign: t.titleAlign,
      titleSpacing: t.titleSpacing,
      titleMarginBottom: t.titleMarginBottom,
      footerFontColor: t.footerFontColor,
      _footerFontFamily: Ne(t.footerFontFamily, e.defaultFontFamily),
      _footerFontStyle: Ne(t.footerFontStyle, e.defaultFontStyle),
      footerFontSize: Ne(t.footerFontSize, e.defaultFontSize),
      _footerAlign: t.footerAlign,
      footerSpacing: t.footerSpacing,
      footerMarginTop: t.footerMarginTop,
      caretSize: t.caretSize,
      cornerRadius: t.cornerRadius,
      backgroundColor: t.backgroundColor,
      opacity: 0,
      legendColorBackground: t.multiKeyBackground,
      displayColors: t.displayColors,
      borderColor: t.borderColor,
      borderWidth: t.borderWidth,
    };
  }
  function He(t, e) {
    return "center" === e
      ? t.x + t.width / 2
      : "right" === e
      ? t.x + t.width - t.xPadding
      : t.x + t.xPadding;
  }
  function Be(t) {
    return ze([], Ee(t));
  }
  var je = $.extend({
      initialize: function () {
        (this._model = Ve(this._options)), (this._lastActive = []);
      },
      getTitle: function () {
        var t = this,
          e = t._options,
          n = e.callbacks,
          i = n.beforeTitle.apply(t, arguments),
          a = n.title.apply(t, arguments),
          r = n.afterTitle.apply(t, arguments),
          o = [];
        return (o = ze(o, Ee(i))), (o = ze(o, Ee(a))), (o = ze(o, Ee(r)));
      },
      getBeforeBody: function () {
        return Be(this._options.callbacks.beforeBody.apply(this, arguments));
      },
      getBody: function (t, e) {
        var n = this,
          i = n._options.callbacks,
          a = [];
        return (
          H.each(t, function (t) {
            var r = { before: [], lines: [], after: [] };
            ze(r.before, Ee(i.beforeLabel.call(n, t, e))),
              ze(r.lines, i.label.call(n, t, e)),
              ze(r.after, Ee(i.afterLabel.call(n, t, e))),
              a.push(r);
          }),
          a
        );
      },
      getAfterBody: function () {
        return Be(this._options.callbacks.afterBody.apply(this, arguments));
      },
      getFooter: function () {
        var t = this,
          e = t._options.callbacks,
          n = e.beforeFooter.apply(t, arguments),
          i = e.footer.apply(t, arguments),
          a = e.afterFooter.apply(t, arguments),
          r = [];
        return (r = ze(r, Ee(n))), (r = ze(r, Ee(i))), (r = ze(r, Ee(a)));
      },
      update: function (t) {
        var e,
          n,
          i,
          a,
          r,
          o,
          s,
          l,
          u,
          d,
          h = this,
          c = h._options,
          f = h._model,
          g = (h._model = Ve(c)),
          m = h._active,
          p = h._data,
          v = { xAlign: f.xAlign, yAlign: f.yAlign },
          b = { x: f.x, y: f.y },
          y = { width: f.width, height: f.height },
          x = { x: f.caretX, y: f.caretY };
        if (m.length) {
          g.opacity = 1;
          var _ = [],
            w = [];
          x = Ye[c.position].call(h, m, h._eventPosition);
          var k = [];
          for (e = 0, n = m.length; e < n; ++e)
            k.push(
              ((i = m[e]),
              (a = void 0),
              (r = void 0),
              (o = void 0),
              (s = void 0),
              (l = void 0),
              (u = void 0),
              (d = void 0),
              (a = i._xScale),
              (r = i._yScale || i._scale),
              (o = i._index),
              (s = i._datasetIndex),
              (l = i._chart.getDatasetMeta(s).controller),
              (u = l._getIndexScale()),
              (d = l._getValueScale()),
              {
                xLabel: a ? a.getLabelForIndex(o, s) : "",
                yLabel: r ? r.getLabelForIndex(o, s) : "",
                label: u ? "" + u.getLabelForIndex(o, s) : "",
                value: d ? "" + d.getLabelForIndex(o, s) : "",
                index: o,
                datasetIndex: s,
                x: i._model.x,
                y: i._model.y,
              })
            );
          c.filter &&
            (k = k.filter(function (t) {
              return c.filter(t, p);
            })),
            c.itemSort &&
              (k = k.sort(function (t, e) {
                return c.itemSort(t, e, p);
              })),
            H.each(k, function (t) {
              _.push(c.callbacks.labelColor.call(h, t, h._chart)),
                w.push(c.callbacks.labelTextColor.call(h, t, h._chart));
            }),
            (g.title = h.getTitle(k, p)),
            (g.beforeBody = h.getBeforeBody(k, p)),
            (g.body = h.getBody(k, p)),
            (g.afterBody = h.getAfterBody(k, p)),
            (g.footer = h.getFooter(k, p)),
            (g.x = x.x),
            (g.y = x.y),
            (g.caretPadding = c.caretPadding),
            (g.labelColors = _),
            (g.labelTextColors = w),
            (g.dataPoints = k),
            (y = (function (t, e) {
              var n = t._chart.ctx,
                i = 2 * e.yPadding,
                a = 0,
                r = e.body,
                o = r.reduce(function (t, e) {
                  return t + e.before.length + e.lines.length + e.after.length;
                }, 0);
              o += e.beforeBody.length + e.afterBody.length;
              var s = e.title.length,
                l = e.footer.length,
                u = e.titleFontSize,
                d = e.bodyFontSize,
                h = e.footerFontSize;
              (i += s * u),
                (i += s ? (s - 1) * e.titleSpacing : 0),
                (i += s ? e.titleMarginBottom : 0),
                (i += o * d),
                (i += o ? (o - 1) * e.bodySpacing : 0),
                (i += l ? e.footerMarginTop : 0),
                (i += l * h),
                (i += l ? (l - 1) * e.footerSpacing : 0);
              var c = 0,
                f = function (t) {
                  a = Math.max(a, n.measureText(t).width + c);
                };
              return (
                (n.font = H.fontString(
                  u,
                  e._titleFontStyle,
                  e._titleFontFamily
                )),
                H.each(e.title, f),
                (n.font = H.fontString(d, e._bodyFontStyle, e._bodyFontFamily)),
                H.each(e.beforeBody.concat(e.afterBody), f),
                (c = e.displayColors ? d + 2 : 0),
                H.each(r, function (t) {
                  H.each(t.before, f), H.each(t.lines, f), H.each(t.after, f);
                }),
                (c = 0),
                (n.font = H.fontString(
                  h,
                  e._footerFontStyle,
                  e._footerFontFamily
                )),
                H.each(e.footer, f),
                { width: (a += 2 * e.xPadding), height: i }
              );
            })(this, g)),
            (b = (function (t, e, n, i) {
              var a = t.x,
                r = t.y,
                o = t.caretSize,
                s = t.caretPadding,
                l = t.cornerRadius,
                u = n.xAlign,
                d = n.yAlign,
                h = o + s,
                c = l + s;
              return (
                "right" === u
                  ? (a -= e.width)
                  : "center" === u &&
                    ((a -= e.width / 2) + e.width > i.width &&
                      (a = i.width - e.width),
                    a < 0 && (a = 0)),
                "top" === d
                  ? (r += h)
                  : (r -= "bottom" === d ? e.height + h : e.height / 2),
                "center" === d
                  ? "left" === u
                    ? (a += h)
                    : "right" === u && (a -= h)
                  : "left" === u
                  ? (a -= c)
                  : "right" === u && (a += c),
                { x: a, y: r }
              );
            })(
              g,
              y,
              (v = (function (t, e) {
                var n,
                  i,
                  a,
                  r,
                  o,
                  s = t._model,
                  l = t._chart,
                  u = t._chart.chartArea,
                  d = "center",
                  h = "center";
                s.y < e.height
                  ? (h = "top")
                  : s.y > l.height - e.height && (h = "bottom");
                var c = (u.left + u.right) / 2,
                  f = (u.top + u.bottom) / 2;
                "center" === h
                  ? ((n = function (t) {
                      return t <= c;
                    }),
                    (i = function (t) {
                      return t > c;
                    }))
                  : ((n = function (t) {
                      return t <= e.width / 2;
                    }),
                    (i = function (t) {
                      return t >= l.width - e.width / 2;
                    })),
                  (a = function (t) {
                    return t + e.width + s.caretSize + s.caretPadding > l.width;
                  }),
                  (r = function (t) {
                    return t - e.width - s.caretSize - s.caretPadding < 0;
                  }),
                  (o = function (t) {
                    return t <= f ? "top" : "bottom";
                  }),
                  n(s.x)
                    ? ((d = "left"), a(s.x) && ((d = "center"), (h = o(s.y))))
                    : i(s.x) &&
                      ((d = "right"), r(s.x) && ((d = "center"), (h = o(s.y))));
                var g = t._options;
                return {
                  xAlign: g.xAlign ? g.xAlign : d,
                  yAlign: g.yAlign ? g.yAlign : h,
                };
              })(this, y)),
              h._chart
            ));
        } else g.opacity = 0;
        return (
          (g.xAlign = v.xAlign),
          (g.yAlign = v.yAlign),
          (g.x = b.x),
          (g.y = b.y),
          (g.width = y.width),
          (g.height = y.height),
          (g.caretX = x.x),
          (g.caretY = x.y),
          (h._model = g),
          t && c.custom && c.custom.call(h, g),
          h
        );
      },
      drawCaret: function (t, e) {
        var n = this._chart.ctx,
          i = this._view,
          a = this.getCaretPosition(t, e, i);
        n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3);
      },
      getCaretPosition: function (t, e, n) {
        var i,
          a,
          r,
          o,
          s,
          l,
          u = n.caretSize,
          d = n.cornerRadius,
          h = n.xAlign,
          c = n.yAlign,
          f = t.x,
          g = t.y,
          m = e.width,
          p = e.height;
        if ("center" === c)
          (s = g + p / 2),
            "left" === h
              ? ((a = (i = f) - u), (r = i), (o = s + u), (l = s - u))
              : ((a = (i = f + m) + u), (r = i), (o = s - u), (l = s + u));
        else if (
          ("left" === h
            ? ((i = (a = f + d + u) - u), (r = a + u))
            : "right" === h
            ? ((i = (a = f + m - d - u) - u), (r = a + u))
            : ((i = (a = n.caretX) - u), (r = a + u)),
          "top" === c)
        )
          (s = (o = g) - u), (l = o);
        else {
          (s = (o = g + p) + u), (l = o);
          var v = r;
          (r = i), (i = v);
        }
        return { x1: i, x2: a, x3: r, y1: o, y2: s, y3: l };
      },
      drawTitle: function (t, e, n) {
        var i,
          a,
          r,
          o = e.title,
          s = o.length;
        if (s) {
          var l = We(e.rtl, e.x, e.width);
          for (
            t.x = He(e, e._titleAlign),
              n.textAlign = l.textAlign(e._titleAlign),
              n.textBaseline = "middle",
              i = e.titleFontSize,
              a = e.titleSpacing,
              n.fillStyle = e.titleFontColor,
              n.font = H.fontString(i, e._titleFontStyle, e._titleFontFamily),
              r = 0;
            r < s;
            ++r
          )
            n.fillText(o[r], l.x(t.x), t.y + i / 2),
              (t.y += i + a),
              r + 1 === s && (t.y += e.titleMarginBottom - a);
        }
      },
      drawBody: function (t, e, n) {
        var i,
          a,
          r,
          o,
          s,
          l,
          u,
          d,
          h = e.bodyFontSize,
          c = e.bodySpacing,
          f = e._bodyAlign,
          g = e.body,
          m = e.displayColors,
          p = 0,
          v = m ? He(e, "left") : 0,
          b = We(e.rtl, e.x, e.width),
          y = function (e) {
            n.fillText(e, b.x(t.x + p), t.y + h / 2), (t.y += h + c);
          },
          x = b.textAlign(f);
        for (
          n.textAlign = f,
            n.textBaseline = "middle",
            n.font = H.fontString(h, e._bodyFontStyle, e._bodyFontFamily),
            t.x = He(e, x),
            n.fillStyle = e.bodyFontColor,
            H.each(e.beforeBody, y),
            p = m && "right" !== x ? ("center" === f ? h / 2 + 1 : h + 2) : 0,
            s = 0,
            u = g.length;
          s < u;
          ++s
        ) {
          for (
            i = g[s],
              a = e.labelTextColors[s],
              r = e.labelColors[s],
              n.fillStyle = a,
              H.each(i.before, y),
              l = 0,
              d = (o = i.lines).length;
            l < d;
            ++l
          ) {
            if (m) {
              var _ = b.x(v);
              (n.fillStyle = e.legendColorBackground),
                n.fillRect(b.leftForLtr(_, h), t.y, h, h),
                (n.lineWidth = 1),
                (n.strokeStyle = r.borderColor),
                n.strokeRect(b.leftForLtr(_, h), t.y, h, h),
                (n.fillStyle = r.backgroundColor),
                n.fillRect(
                  b.leftForLtr(b.xPlus(_, 1), h - 2),
                  t.y + 1,
                  h - 2,
                  h - 2
                ),
                (n.fillStyle = a);
            }
            y(o[l]);
          }
          H.each(i.after, y);
        }
        (p = 0), H.each(e.afterBody, y), (t.y -= c);
      },
      drawFooter: function (t, e, n) {
        var i,
          a,
          r = e.footer,
          o = r.length;
        if (o) {
          var s = We(e.rtl, e.x, e.width);
          for (
            t.x = He(e, e._footerAlign),
              t.y += e.footerMarginTop,
              n.textAlign = s.textAlign(e._footerAlign),
              n.textBaseline = "middle",
              i = e.footerFontSize,
              n.fillStyle = e.footerFontColor,
              n.font = H.fontString(i, e._footerFontStyle, e._footerFontFamily),
              a = 0;
            a < o;
            ++a
          )
            n.fillText(r[a], s.x(t.x), t.y + i / 2),
              (t.y += i + e.footerSpacing);
        }
      },
      drawBackground: function (t, e, n, i) {
        (n.fillStyle = e.backgroundColor),
          (n.strokeStyle = e.borderColor),
          (n.lineWidth = e.borderWidth);
        var a = e.xAlign,
          r = e.yAlign,
          o = t.x,
          s = t.y,
          l = i.width,
          u = i.height,
          d = e.cornerRadius;
        n.beginPath(),
          n.moveTo(o + d, s),
          "top" === r && this.drawCaret(t, i),
          n.lineTo(o + l - d, s),
          n.quadraticCurveTo(o + l, s, o + l, s + d),
          "center" === r && "right" === a && this.drawCaret(t, i),
          n.lineTo(o + l, s + u - d),
          n.quadraticCurveTo(o + l, s + u, o + l - d, s + u),
          "bottom" === r && this.drawCaret(t, i),
          n.lineTo(o + d, s + u),
          n.quadraticCurveTo(o, s + u, o, s + u - d),
          "center" === r && "left" === a && this.drawCaret(t, i),
          n.lineTo(o, s + d),
          n.quadraticCurveTo(o, s, o + d, s),
          n.closePath(),
          n.fill(),
          e.borderWidth > 0 && n.stroke();
      },
      draw: function () {
        var t = this._chart.ctx,
          e = this._view;
        if (0 !== e.opacity) {
          var n = { width: e.width, height: e.height },
            i = { x: e.x, y: e.y },
            a = Math.abs(e.opacity < 0.001) ? 0 : e.opacity,
            r =
              e.title.length ||
              e.beforeBody.length ||
              e.body.length ||
              e.afterBody.length ||
              e.footer.length;
          this._options.enabled &&
            r &&
            (t.save(),
            (t.globalAlpha = a),
            this.drawBackground(i, e, t, n),
            (i.y += e.yPadding),
            H.rtl.overrideTextDirection(t, e.textDirection),
            this.drawTitle(i, e, t),
            this.drawBody(i, e, t),
            this.drawFooter(i, e, t),
            H.rtl.restoreTextDirection(t, e.textDirection),
            t.restore());
        }
      },
      handleEvent: function (t) {
        var e,
          n = this,
          i = n._options;
        return (
          (n._lastActive = n._lastActive || []),
          "mouseout" === t.type
            ? (n._active = [])
            : ((n._active = n._chart.getElementsAtEventForMode(t, i.mode, i)),
              i.reverse && n._active.reverse()),
          (e = !H.arrayEquals(n._active, n._lastActive)) &&
            ((n._lastActive = n._active),
            (i.enabled || i.custom) &&
              ((n._eventPosition = { x: t.x, y: t.y }),
              n.update(!0),
              n.pivot())),
          e
        );
      },
    }),
    Ue = Ye,
    Ge = je;
  Ge.positioners = Ue;
  var qe = H.valueOrDefault;
  function Ze() {
    return H.merge({}, [].slice.call(arguments), {
      merger: function (t, e, n, i) {
        if ("xAxes" === t || "yAxes" === t) {
          var a,
            r,
            o,
            s = n[t].length;
          for (e[t] || (e[t] = []), a = 0; a < s; ++a)
            (o = n[t][a]),
              (r = qe(o.type, "xAxes" === t ? "category" : "linear")),
              a >= e[t].length && e[t].push({}),
              !e[t][a].type || (o.type && o.type !== e[t][a].type)
                ? H.merge(e[t][a], [Re.getScaleDefaults(r), o])
                : H.merge(e[t][a], o);
        } else H._merger(t, e, n, i);
      },
    });
  }
  function $e() {
    return H.merge({}, [].slice.call(arguments), {
      merger: function (t, e, n, i) {
        var a = e[t] || {},
          r = n[t];
        "scales" === t
          ? (e[t] = Ze(a, r))
          : "scale" === t
          ? (e[t] = H.merge(a, [Re.getScaleDefaults(r.type), r]))
          : H._merger(t, e, n, i);
      },
    });
  }
  function Xe(t) {
    var e = t.options;
    H.each(t.scales, function (e) {
      me.removeBox(t, e);
    }),
      (e = $e(W.global, W[t.config.type], e)),
      (t.options = t.config.options = e),
      t.ensureScalesHaveIDs(),
      t.buildOrUpdateScales(),
      (t.tooltip._options = e.tooltips),
      t.tooltip.initialize();
  }
  function Ke(t, e, n) {
    var i,
      a = function (t) {
        return t.id === i;
      };
    do {
      i = e + n++;
    } while (H.findIndex(t, a) >= 0);
    return i;
  }
  function Je(t) {
    return "top" === t || "bottom" === t;
  }
  function Qe(t, e) {
    return function (n, i) {
      return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
    };
  }
  W._set("global", {
    elements: {},
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    hover: {
      onHover: null,
      mode: "nearest",
      intersect: !0,
      animationDuration: 400,
    },
    onClick: null,
    maintainAspectRatio: !0,
    responsive: !0,
    responsiveAnimationDuration: 0,
  });
  var tn = function (t, e) {
    return this.construct(t, e), this;
  };
  H.extend(tn.prototype, {
    construct: function (t, e) {
      var n = this;
      e = (function (t) {
        var e = ((t = t || {}).data = t.data || {});
        return (
          (e.datasets = e.datasets || []),
          (e.labels = e.labels || []),
          (t.options = $e(W.global, W[t.type], t.options || {})),
          t
        );
      })(e);
      var i = Ie.acquireContext(t, e),
        a = i && i.canvas,
        r = a && a.height,
        o = a && a.width;
      (n.id = H.uid()),
        (n.ctx = i),
        (n.canvas = a),
        (n.config = e),
        (n.width = o),
        (n.height = r),
        (n.aspectRatio = r ? o / r : null),
        (n.options = e.options),
        (n._bufferedRender = !1),
        (n._layers = []),
        (n.chart = n),
        (n.controller = n),
        (tn.instances[n.id] = n),
        Object.defineProperty(n, "data", {
          get: function () {
            return n.config.data;
          },
          set: function (t) {
            n.config.data = t;
          },
        }),
        i && a
          ? (n.initialize(), n.update())
          : console.error(
              "Failed to create chart: can't acquire context from the given item"
            );
    },
    initialize: function () {
      var t = this;
      return (
        Le.notify(t, "beforeInit"),
        H.retinaScale(t, t.options.devicePixelRatio),
        t.bindEvents(),
        t.options.responsive && t.resize(!0),
        t.initToolTip(),
        Le.notify(t, "afterInit"),
        t
      );
    },
    clear: function () {
      return H.canvas.clear(this), this;
    },
    stop: function () {
      return J.cancelAnimation(this), this;
    },
    resize: function (t) {
      var e = this,
        n = e.options,
        i = e.canvas,
        a = (n.maintainAspectRatio && e.aspectRatio) || null,
        r = Math.max(0, Math.floor(H.getMaximumWidth(i))),
        o = Math.max(0, Math.floor(a ? r / a : H.getMaximumHeight(i)));
      if (
        (e.width !== r || e.height !== o) &&
        ((i.width = e.width = r),
        (i.height = e.height = o),
        (i.style.width = r + "px"),
        (i.style.height = o + "px"),
        H.retinaScale(e, n.devicePixelRatio),
        !t)
      ) {
        var s = { width: r, height: o };
        Le.notify(e, "resize", [s]),
          n.onResize && n.onResize(e, s),
          e.stop(),
          e.update({ duration: n.responsiveAnimationDuration });
      }
    },
    ensureScalesHaveIDs: function () {
      var t = this.options,
        e = t.scales || {},
        n = t.scale;
      H.each(e.xAxes, function (t, n) {
        t.id || (t.id = Ke(e.xAxes, "x-axis-", n));
      }),
        H.each(e.yAxes, function (t, n) {
          t.id || (t.id = Ke(e.yAxes, "y-axis-", n));
        }),
        n && (n.id = n.id || "scale");
    },
    buildOrUpdateScales: function () {
      var t = this,
        e = t.options,
        n = t.scales || {},
        i = [],
        a = Object.keys(n).reduce(function (t, e) {
          return (t[e] = !1), t;
        }, {});
      e.scales &&
        (i = i.concat(
          (e.scales.xAxes || []).map(function (t) {
            return { options: t, dtype: "category", dposition: "bottom" };
          }),
          (e.scales.yAxes || []).map(function (t) {
            return { options: t, dtype: "linear", dposition: "left" };
          })
        )),
        e.scale &&
          i.push({
            options: e.scale,
            dtype: "radialLinear",
            isDefault: !0,
            dposition: "chartArea",
          }),
        H.each(i, function (e) {
          var i = e.options,
            r = i.id,
            o = qe(i.type, e.dtype);
          Je(i.position) !== Je(e.dposition) && (i.position = e.dposition),
            (a[r] = !0);
          var s = null;
          if (r in n && n[r].type === o)
            ((s = n[r]).options = i), (s.ctx = t.ctx), (s.chart = t);
          else {
            var l = Re.getScaleConstructor(o);
            if (!l) return;
            (s = new l({ id: r, type: o, options: i, ctx: t.ctx, chart: t })),
              (n[s.id] = s);
          }
          s.mergeTicksOptions(), e.isDefault && (t.scale = s);
        }),
        H.each(a, function (t, e) {
          t || delete n[e];
        }),
        (t.scales = n),
        Re.addScalesToLayout(this);
    },
    buildOrUpdateControllers: function () {
      var t,
        e,
        n = this,
        i = [],
        a = n.data.datasets;
      for (t = 0, e = a.length; t < e; t++) {
        var r = a[t],
          o = n.getDatasetMeta(t),
          s = r.type || n.config.type;
        if (
          (o.type &&
            o.type !== s &&
            (n.destroyDatasetMeta(t), (o = n.getDatasetMeta(t))),
          (o.type = s),
          (o.order = r.order || 0),
          (o.index = t),
          o.controller)
        )
          o.controller.updateIndex(t), o.controller.linkScales();
        else {
          var l = Jt[o.type];
          if (void 0 === l)
            throw new Error('"' + o.type + '" is not a chart type.');
          (o.controller = new l(n, t)), i.push(o.controller);
        }
      }
      return i;
    },
    resetElements: function () {
      var t = this;
      H.each(
        t.data.datasets,
        function (e, n) {
          t.getDatasetMeta(n).controller.reset();
        },
        t
      );
    },
    reset: function () {
      this.resetElements(), this.tooltip.initialize();
    },
    update: function (t) {
      var e,
        n,
        i = this;
      if (
        ((t && "object" == typeof t) ||
          (t = { duration: t, lazy: arguments[1] }),
        Xe(i),
        Le._invalidate(i),
        !1 !== Le.notify(i, "beforeUpdate"))
      ) {
        i.tooltip._data = i.data;
        var a = i.buildOrUpdateControllers();
        for (e = 0, n = i.data.datasets.length; e < n; e++)
          i.getDatasetMeta(e).controller.buildOrUpdateElements();
        i.updateLayout(),
          i.options.animation &&
            i.options.animation.duration &&
            H.each(a, function (t) {
              t.reset();
            }),
          i.updateDatasets(),
          i.tooltip.initialize(),
          (i.lastActive = []),
          Le.notify(i, "afterUpdate"),
          i._layers.sort(Qe("z", "_idx")),
          i._bufferedRender
            ? (i._bufferedRequest = {
                duration: t.duration,
                easing: t.easing,
                lazy: t.lazy,
              })
            : i.render(t);
      }
    },
    updateLayout: function () {
      var t = this;
      !1 !== Le.notify(t, "beforeLayout") &&
        (me.update(this, this.width, this.height),
        (t._layers = []),
        H.each(
          t.boxes,
          function (e) {
            e._configure && e._configure(),
              t._layers.push.apply(t._layers, e._layers());
          },
          t
        ),
        t._layers.forEach(function (t, e) {
          t._idx = e;
        }),
        Le.notify(t, "afterScaleUpdate"),
        Le.notify(t, "afterLayout"));
    },
    updateDatasets: function () {
      if (!1 !== Le.notify(this, "beforeDatasetsUpdate")) {
        for (var t = 0, e = this.data.datasets.length; t < e; ++t)
          this.updateDataset(t);
        Le.notify(this, "afterDatasetsUpdate");
      }
    },
    updateDataset: function (t) {
      var e = this.getDatasetMeta(t),
        n = { meta: e, index: t };
      !1 !== Le.notify(this, "beforeDatasetUpdate", [n]) &&
        (e.controller._update(), Le.notify(this, "afterDatasetUpdate", [n]));
    },
    render: function (t) {
      var e = this;
      (t && "object" == typeof t) || (t = { duration: t, lazy: arguments[1] });
      var n = e.options.animation,
        i = qe(t.duration, n && n.duration),
        a = t.lazy;
      if (!1 !== Le.notify(e, "beforeRender")) {
        var r = function (t) {
          Le.notify(e, "afterRender"), H.callback(n && n.onComplete, [t], e);
        };
        if (n && i) {
          var o = new K({
            numSteps: i / 16.66,
            easing: t.easing || n.easing,
            render: function (t, e) {
              var n = H.easing.effects[e.easing],
                i = e.currentStep,
                a = i / e.numSteps;
              t.draw(n(a), a, i);
            },
            onAnimationProgress: n.onProgress,
            onAnimationComplete: r,
          });
          J.addAnimation(e, o, i, a);
        } else e.draw(), r(new K({ numSteps: 0, chart: e }));
        return e;
      }
    },
    draw: function (t) {
      var e,
        n,
        i = this;
      if (
        (i.clear(),
        H.isNullOrUndef(t) && (t = 1),
        i.transition(t),
        !(i.width <= 0 || i.height <= 0) &&
          !1 !== Le.notify(i, "beforeDraw", [t]))
      ) {
        for (n = i._layers, e = 0; e < n.length && n[e].z <= 0; ++e)
          n[e].draw(i.chartArea);
        for (i.drawDatasets(t); e < n.length; ++e) n[e].draw(i.chartArea);
        i._drawTooltip(t), Le.notify(i, "afterDraw", [t]);
      }
    },
    transition: function (t) {
      for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e)
        this.isDatasetVisible(e) &&
          this.getDatasetMeta(e).controller.transition(t);
      this.tooltip.transition(t);
    },
    _getSortedDatasetMetas: function (t) {
      var e,
        n,
        i = [];
      for (e = 0, n = (this.data.datasets || []).length; e < n; ++e)
        (t && !this.isDatasetVisible(e)) || i.push(this.getDatasetMeta(e));
      return i.sort(Qe("order", "index")), i;
    },
    _getSortedVisibleDatasetMetas: function () {
      return this._getSortedDatasetMetas(!0);
    },
    drawDatasets: function (t) {
      var e, n;
      if (!1 !== Le.notify(this, "beforeDatasetsDraw", [t])) {
        for (
          n = (e = this._getSortedVisibleDatasetMetas()).length - 1;
          n >= 0;
          --n
        )
          this.drawDataset(e[n], t);
        Le.notify(this, "afterDatasetsDraw", [t]);
      }
    },
    drawDataset: function (t, e) {
      var n = { meta: t, index: t.index, easingValue: e };
      !1 !== Le.notify(this, "beforeDatasetDraw", [n]) &&
        (t.controller.draw(e), Le.notify(this, "afterDatasetDraw", [n]));
    },
    _drawTooltip: function (t) {
      var e = this.tooltip,
        n = { tooltip: e, easingValue: t };
      !1 !== Le.notify(this, "beforeTooltipDraw", [n]) &&
        (e.draw(), Le.notify(this, "afterTooltipDraw", [n]));
    },
    getElementAtEvent: function (t) {
      return re.modes.single(this, t);
    },
    getElementsAtEvent: function (t) {
      return re.modes.label(this, t, { intersect: !0 });
    },
    getElementsAtXAxis: function (t) {
      return re.modes["x-axis"](this, t, { intersect: !0 });
    },
    getElementsAtEventForMode: function (t, e, n) {
      var i = re.modes[e];
      return "function" == typeof i ? i(this, t, n) : [];
    },
    getDatasetAtEvent: function (t) {
      return re.modes.dataset(this, t, { intersect: !0 });
    },
    getDatasetMeta: function (t) {
      var e = this.data.datasets[t];
      e._meta || (e._meta = {});
      var n = e._meta[this.id];
      return (
        n ||
          (n = e._meta[this.id] =
            {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null,
              order: e.order || 0,
              index: t,
            }),
        n
      );
    },
    getVisibleDatasetCount: function () {
      for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e)
        this.isDatasetVisible(e) && t++;
      return t;
    },
    isDatasetVisible: function (t) {
      var e = this.getDatasetMeta(t);
      return "boolean" == typeof e.hidden
        ? !e.hidden
        : !this.data.datasets[t].hidden;
    },
    generateLegend: function () {
      return this.options.legendCallback(this);
    },
    destroyDatasetMeta: function (t) {
      var e = this.id,
        n = this.data.datasets[t],
        i = n._meta && n._meta[e];
      i && (i.controller.destroy(), delete n._meta[e]);
    },
    destroy: function () {
      var t,
        e,
        n = this,
        i = n.canvas;
      for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t)
        n.destroyDatasetMeta(t);
      i &&
        (n.unbindEvents(),
        H.canvas.clear(n),
        Ie.releaseContext(n.ctx),
        (n.canvas = null),
        (n.ctx = null)),
        Le.notify(n, "destroy"),
        delete tn.instances[n.id];
    },
    toBase64Image: function () {
      return this.canvas.toDataURL.apply(this.canvas, arguments);
    },
    initToolTip: function () {
      var t = this;
      t.tooltip = new Ge(
        {
          _chart: t,
          _chartInstance: t,
          _data: t.data,
          _options: t.options.tooltips,
        },
        t
      );
    },
    bindEvents: function () {
      var t = this,
        e = (t._listeners = {}),
        n = function () {
          t.eventHandler.apply(t, arguments);
        };
      H.each(t.options.events, function (i) {
        Ie.addEventListener(t, i, n), (e[i] = n);
      }),
        t.options.responsive &&
          ((n = function () {
            t.resize();
          }),
          Ie.addEventListener(t, "resize", n),
          (e.resize = n));
    },
    unbindEvents: function () {
      var t = this,
        e = t._listeners;
      e &&
        (delete t._listeners,
        H.each(e, function (e, n) {
          Ie.removeEventListener(t, n, e);
        }));
    },
    updateHoverStyle: function (t, e, n) {
      var i,
        a,
        r,
        o = n ? "set" : "remove";
      for (a = 0, r = t.length; a < r; ++a)
        (i = t[a]) &&
          this.getDatasetMeta(i._datasetIndex).controller[o + "HoverStyle"](i);
      "dataset" === e &&
        this.getDatasetMeta(t[0]._datasetIndex).controller[
          "_" + o + "DatasetHoverStyle"
        ]();
    },
    eventHandler: function (t) {
      var e = this,
        n = e.tooltip;
      if (!1 !== Le.notify(e, "beforeEvent", [t])) {
        (e._bufferedRender = !0), (e._bufferedRequest = null);
        var i = e.handleEvent(t);
        n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)),
          Le.notify(e, "afterEvent", [t]);
        var a = e._bufferedRequest;
        return (
          a
            ? e.render(a)
            : i &&
              !e.animating &&
              (e.stop(),
              e.render({
                duration: e.options.hover.animationDuration,
                lazy: !0,
              })),
          (e._bufferedRender = !1),
          (e._bufferedRequest = null),
          e
        );
      }
    },
    handleEvent: function (t) {
      var e,
        n = this,
        i = n.options || {},
        a = i.hover;
      return (
        (n.lastActive = n.lastActive || []),
        "mouseout" === t.type
          ? (n.active = [])
          : (n.active = n.getElementsAtEventForMode(t, a.mode, a)),
        H.callback(i.onHover || i.hover.onHover, [t.native, n.active], n),
        ("mouseup" !== t.type && "click" !== t.type) ||
          (i.onClick && i.onClick.call(n, t.native, n.active)),
        n.lastActive.length && n.updateHoverStyle(n.lastActive, a.mode, !1),
        n.active.length && a.mode && n.updateHoverStyle(n.active, a.mode, !0),
        (e = !H.arrayEquals(n.active, n.lastActive)),
        (n.lastActive = n.active),
        e
      );
    },
  }),
    (tn.instances = {});
  var en = tn;
  (tn.Controller = tn),
    (tn.types = {}),
    (H.configMerge = $e),
    (H.scaleMerge = Ze);
  function nn() {
    throw new Error(
      "This method is not implemented: either no adapter can be found or an incomplete integration was provided."
    );
  }
  function an(t) {
    this.options = t || {};
  }
  H.extend(an.prototype, {
    formats: nn,
    parse: nn,
    format: nn,
    add: nn,
    diff: nn,
    startOf: nn,
    endOf: nn,
    _create: function (t) {
      return t;
    },
  }),
    (an.override = function (t) {
      H.extend(an.prototype, t);
    });
  var rn = { _date: an },
    on = {
      formatters: {
        values: function (t) {
          return H.isArray(t) ? t : "" + t;
        },
        linear: function (t, e, n) {
          var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
          Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
          var a = H.log10(Math.abs(i)),
            r = "";
          if (0 !== t)
            if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
              var o = H.log10(Math.abs(t)),
                s = Math.floor(o) - Math.floor(a);
              (s = Math.max(Math.min(s, 20), 0)), (r = t.toExponential(s));
            } else {
              var l = -1 * Math.floor(a);
              (l = Math.max(Math.min(l, 20), 0)), (r = t.toFixed(l));
            }
          else r = "0";
          return r;
        },
        logarithmic: function (t, e, n) {
          var i = t / Math.pow(10, Math.floor(H.log10(t)));
          return 0 === t
            ? "0"
            : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1
            ? t.toExponential()
            : "";
        },
      },
    },
    sn = H.isArray,
    ln = H.isNullOrUndef,
    un = H.valueOrDefault,
    dn = H.valueAtIndexOrDefault;
  function hn(t, e, n) {
    var i,
      a = t.getTicks().length,
      r = Math.min(e, a - 1),
      o = t.getPixelForTick(r),
      s = t._startPixel,
      l = t._endPixel;
    if (
      !(
        n &&
        ((i =
          1 === a
            ? Math.max(o - s, l - o)
            : 0 === e
            ? (t.getPixelForTick(1) - o) / 2
            : (o - t.getPixelForTick(r - 1)) / 2),
        (o += r < e ? i : -i) < s - 1e-6 || o > l + 1e-6)
      )
    )
      return o;
  }
  function cn(t, e, n, i) {
    var a,
      r,
      o,
      s,
      l,
      u,
      d,
      h,
      c,
      f,
      g,
      m,
      p,
      v = n.length,
      b = [],
      y = [],
      x = [];
    for (a = 0; a < v; ++a) {
      if (
        ((s = n[a].label),
        (l = n[a].major ? e.major : e.minor),
        (t.font = u = l.string),
        (d = i[u] = i[u] || { data: {}, gc: [] }),
        (h = l.lineHeight),
        (c = f = 0),
        ln(s) || sn(s))
      ) {
        if (sn(s))
          for (r = 0, o = s.length; r < o; ++r)
            (g = s[r]),
              ln(g) ||
                sn(g) ||
                ((c = H.measureText(t, d.data, d.gc, c, g)), (f += h));
      } else (c = H.measureText(t, d.data, d.gc, c, s)), (f = h);
      b.push(c), y.push(f), x.push(h / 2);
    }
    function _(t) {
      return { width: b[t] || 0, height: y[t] || 0, offset: x[t] || 0 };
    }
    return (
      (function (t, e) {
        H.each(t, function (t) {
          var n,
            i = t.gc,
            a = i.length / 2;
          if (a > e) {
            for (n = 0; n < a; ++n) delete t.data[i[n]];
            i.splice(0, a);
          }
        });
      })(i, v),
      (m = b.indexOf(Math.max.apply(null, b))),
      (p = y.indexOf(Math.max.apply(null, y))),
      { first: _(0), last: _(v - 1), widest: _(m), highest: _(p) }
    );
  }
  function fn(t) {
    return t.drawTicks ? t.tickMarkLength : 0;
  }
  function gn(t) {
    var e, n;
    return t.display
      ? ((e = H.options._parseFont(t)),
        (n = H.options.toPadding(t.padding)),
        e.lineHeight + n.height)
      : 0;
  }
  function mn(t, e) {
    return H.extend(
      H.options._parseFont({
        fontFamily: un(e.fontFamily, t.fontFamily),
        fontSize: un(e.fontSize, t.fontSize),
        fontStyle: un(e.fontStyle, t.fontStyle),
        lineHeight: un(e.lineHeight, t.lineHeight),
      }),
      {
        color: H.options.resolve([
          e.fontColor,
          t.fontColor,
          W.global.defaultFontColor,
        ]),
      }
    );
  }
  function pn(t) {
    var e = mn(t, t.minor);
    return { minor: e, major: t.major.enabled ? mn(t, t.major) : e };
  }
  function vn(t) {
    var e,
      n,
      i,
      a = [];
    for (n = 0, i = t.length; n < i; ++n)
      void 0 !== (e = t[n])._index && a.push(e);
    return a;
  }
  function bn(t, e, n, i) {
    var a,
      r,
      o,
      s,
      l = un(n, 0),
      u = Math.min(un(i, t.length), t.length),
      d = 0;
    for (
      e = Math.ceil(e), i && (e = (a = i - n) / Math.floor(a / e)), s = l;
      s < 0;

    )
      d++, (s = Math.round(l + d * e));
    for (r = Math.max(l, 0); r < u; r++)
      (o = t[r]),
        r === s
          ? ((o._index = r), d++, (s = Math.round(l + d * e)))
          : delete o.label;
  }
  W._set("scale", {
    display: !0,
    position: "left",
    offset: !1,
    gridLines: {
      display: !0,
      color: "rgba(0,0,0,0.1)",
      lineWidth: 1,
      drawBorder: !0,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickMarkLength: 10,
      zeroLineWidth: 1,
      zeroLineColor: "rgba(0,0,0,0.25)",
      zeroLineBorderDash: [],
      zeroLineBorderDashOffset: 0,
      offsetGridLines: !1,
      borderDash: [],
      borderDashOffset: 0,
    },
    scaleLabel: {
      display: !1,
      labelString: "",
      padding: { top: 4, bottom: 4 },
    },
    ticks: {
      beginAtZero: !1,
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      padding: 0,
      reverse: !1,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 0,
      labelOffset: 0,
      callback: on.formatters.values,
      minor: {},
      major: {},
    },
  });
  var yn = $.extend({
    zeroLineIndex: 0,
    getPadding: function () {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0,
      };
    },
    getTicks: function () {
      return this._ticks;
    },
    _getLabels: function () {
      var t = this.chart.data;
      return (
        this.options.labels ||
        (this.isHorizontal() ? t.xLabels : t.yLabels) ||
        t.labels ||
        []
      );
    },
    mergeTicksOptions: function () {},
    beforeUpdate: function () {
      H.callback(this.options.beforeUpdate, [this]);
    },
    update: function (t, e, n) {
      var i,
        a,
        r,
        o,
        s,
        l = this,
        u = l.options.ticks,
        d = u.sampleSize;
      if (
        (l.beforeUpdate(),
        (l.maxWidth = t),
        (l.maxHeight = e),
        (l.margins = H.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
        (l._ticks = null),
        (l.ticks = null),
        (l._labelSizes = null),
        (l._maxLabelLines = 0),
        (l.longestLabelWidth = 0),
        (l.longestTextCache = l.longestTextCache || {}),
        (l._gridLineItems = null),
        (l._labelItems = null),
        l.beforeSetDimensions(),
        l.setDimensions(),
        l.afterSetDimensions(),
        l.beforeDataLimits(),
        l.determineDataLimits(),
        l.afterDataLimits(),
        l.beforeBuildTicks(),
        (o = l.buildTicks() || []),
        (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks)
      )
        for (o = [], i = 0, a = l.ticks.length; i < a; ++i)
          o.push({ value: l.ticks[i], major: !1 });
      return (
        (l._ticks = o),
        (s = d < o.length),
        (r = l._convertTicksToLabels(
          s
            ? (function (t, e) {
                for (
                  var n = [], i = t.length / e, a = 0, r = t.length;
                  a < r;
                  a += i
                )
                  n.push(t[Math.floor(a)]);
                return n;
              })(o, d)
            : o
        )),
        l._configure(),
        l.beforeCalculateTickRotation(),
        l.calculateTickRotation(),
        l.afterCalculateTickRotation(),
        l.beforeFit(),
        l.fit(),
        l.afterFit(),
        (l._ticksToDraw =
          u.display && (u.autoSkip || "auto" === u.source)
            ? l._autoSkip(o)
            : o),
        s && (r = l._convertTicksToLabels(l._ticksToDraw)),
        (l.ticks = r),
        l.afterUpdate(),
        l.minSize
      );
    },
    _configure: function () {
      var t,
        e,
        n = this,
        i = n.options.ticks.reverse;
      n.isHorizontal()
        ? ((t = n.left), (e = n.right))
        : ((t = n.top), (e = n.bottom), (i = !i)),
        (n._startPixel = t),
        (n._endPixel = e),
        (n._reversePixels = i),
        (n._length = e - t);
    },
    afterUpdate: function () {
      H.callback(this.options.afterUpdate, [this]);
    },
    beforeSetDimensions: function () {
      H.callback(this.options.beforeSetDimensions, [this]);
    },
    setDimensions: function () {
      var t = this;
      t.isHorizontal()
        ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
        : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
        (t.paddingLeft = 0),
        (t.paddingTop = 0),
        (t.paddingRight = 0),
        (t.paddingBottom = 0);
    },
    afterSetDimensions: function () {
      H.callback(this.options.afterSetDimensions, [this]);
    },
    beforeDataLimits: function () {
      H.callback(this.options.beforeDataLimits, [this]);
    },
    determineDataLimits: H.noop,
    afterDataLimits: function () {
      H.callback(this.options.afterDataLimits, [this]);
    },
    beforeBuildTicks: function () {
      H.callback(this.options.beforeBuildTicks, [this]);
    },
    buildTicks: H.noop,
    afterBuildTicks: function (t) {
      var e = this;
      return sn(t) && t.length
        ? H.callback(e.options.afterBuildTicks, [e, t])
        : ((e.ticks =
            H.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks),
          t);
    },
    beforeTickToLabelConversion: function () {
      H.callback(this.options.beforeTickToLabelConversion, [this]);
    },
    convertTicksToLabels: function () {
      var t = this.options.ticks;
      this.ticks = this.ticks.map(t.userCallback || t.callback, this);
    },
    afterTickToLabelConversion: function () {
      H.callback(this.options.afterTickToLabelConversion, [this]);
    },
    beforeCalculateTickRotation: function () {
      H.callback(this.options.beforeCalculateTickRotation, [this]);
    },
    calculateTickRotation: function () {
      var t,
        e,
        n,
        i,
        a,
        r,
        o,
        s = this,
        l = s.options,
        u = l.ticks,
        d = s.getTicks().length,
        h = u.minRotation || 0,
        c = u.maxRotation,
        f = h;
      !s._isVisible() || !u.display || h >= c || d <= 1 || !s.isHorizontal()
        ? (s.labelRotation = h)
        : ((e = (t = s._getLabelSizes()).widest.width),
          (n = t.highest.height - t.highest.offset),
          (i = Math.min(s.maxWidth, s.chart.width - e)),
          e + 6 > (a = l.offset ? s.maxWidth / d : i / (d - 1)) &&
            ((a = i / (d - (l.offset ? 0.5 : 1))),
            (r = s.maxHeight - fn(l.gridLines) - u.padding - gn(l.scaleLabel)),
            (o = Math.sqrt(e * e + n * n)),
            (f = H.toDegrees(
              Math.min(
                Math.asin(Math.min((t.highest.height + 6) / a, 1)),
                Math.asin(Math.min(r / o, 1)) - Math.asin(n / o)
              )
            )),
            (f = Math.max(h, Math.min(c, f)))),
          (s.labelRotation = f));
    },
    afterCalculateTickRotation: function () {
      H.callback(this.options.afterCalculateTickRotation, [this]);
    },
    beforeFit: function () {
      H.callback(this.options.beforeFit, [this]);
    },
    fit: function () {
      var t = this,
        e = (t.minSize = { width: 0, height: 0 }),
        n = t.chart,
        i = t.options,
        a = i.ticks,
        r = i.scaleLabel,
        o = i.gridLines,
        s = t._isVisible(),
        l = "bottom" === i.position,
        u = t.isHorizontal();
      if (
        (u ? (e.width = t.maxWidth) : s && (e.width = fn(o) + gn(r)),
        u ? s && (e.height = fn(o) + gn(r)) : (e.height = t.maxHeight),
        a.display && s)
      ) {
        var d = pn(a),
          h = t._getLabelSizes(),
          c = h.first,
          f = h.last,
          g = h.widest,
          m = h.highest,
          p = 0.4 * d.minor.lineHeight,
          v = a.padding;
        if (u) {
          var b = 0 !== t.labelRotation,
            y = H.toRadians(t.labelRotation),
            x = Math.cos(y),
            _ = Math.sin(y),
            w = _ * g.width + x * (m.height - (b ? m.offset : 0)) + (b ? 0 : p);
          e.height = Math.min(t.maxHeight, e.height + w + v);
          var k,
            M,
            S = t.getPixelForTick(0) - t.left,
            D = t.right - t.getPixelForTick(t.getTicks().length - 1);
          b
            ? ((k = l ? x * c.width + _ * c.offset : _ * (c.height - c.offset)),
              (M = l ? _ * (f.height - f.offset) : x * f.width + _ * f.offset))
            : ((k = c.width / 2), (M = f.width / 2)),
            (t.paddingLeft =
              Math.max(((k - S) * t.width) / (t.width - S), 0) + 3),
            (t.paddingRight =
              Math.max(((M - D) * t.width) / (t.width - D), 0) + 3);
        } else {
          var C = a.mirror ? 0 : g.width + v + p;
          (e.width = Math.min(t.maxWidth, e.width + C)),
            (t.paddingTop = c.height / 2),
            (t.paddingBottom = f.height / 2);
        }
      }
      t.handleMargins(),
        u
          ? ((t.width = t._length = n.width - t.margins.left - t.margins.right),
            (t.height = e.height))
          : ((t.width = e.width),
            (t.height = t._length =
              n.height - t.margins.top - t.margins.bottom));
    },
    handleMargins: function () {
      var t = this;
      t.margins &&
        ((t.margins.left = Math.max(t.paddingLeft, t.margins.left)),
        (t.margins.top = Math.max(t.paddingTop, t.margins.top)),
        (t.margins.right = Math.max(t.paddingRight, t.margins.right)),
        (t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom)));
    },
    afterFit: function () {
      H.callback(this.options.afterFit, [this]);
    },
    isHorizontal: function () {
      var t = this.options.position;
      return "top" === t || "bottom" === t;
    },
    isFullWidth: function () {
      return this.options.fullWidth;
    },
    getRightValue: function (t) {
      if (ln(t)) return NaN;
      if (("number" == typeof t || t instanceof Number) && !isFinite(t))
        return NaN;
      if (t)
        if (this.isHorizontal()) {
          if (void 0 !== t.x) return this.getRightValue(t.x);
        } else if (void 0 !== t.y) return this.getRightValue(t.y);
      return t;
    },
    _convertTicksToLabels: function (t) {
      var e,
        n,
        i,
        a = this;
      for (
        a.ticks = t.map(function (t) {
          return t.value;
        }),
          a.beforeTickToLabelConversion(),
          e = a.convertTicksToLabels(t) || a.ticks,
          a.afterTickToLabelConversion(),
          n = 0,
          i = t.length;
        n < i;
        ++n
      )
        t[n].label = e[n];
      return e;
    },
    _getLabelSizes: function () {
      var t = this,
        e = t._labelSizes;
      return (
        e ||
          ((t._labelSizes = e =
            cn(t.ctx, pn(t.options.ticks), t.getTicks(), t.longestTextCache)),
          (t.longestLabelWidth = e.widest.width)),
        e
      );
    },
    _parseValue: function (t) {
      var e, n, i, a;
      return (
        sn(t)
          ? ((e = +this.getRightValue(t[0])),
            (n = +this.getRightValue(t[1])),
            (i = Math.min(e, n)),
            (a = Math.max(e, n)))
          : ((e = void 0), (n = t = +this.getRightValue(t)), (i = t), (a = t)),
        { min: i, max: a, start: e, end: n }
      );
    },
    _getScaleLabel: function (t) {
      var e = this._parseValue(t);
      return void 0 !== e.start
        ? "[" + e.start + ", " + e.end + "]"
        : +this.getRightValue(t);
    },
    getLabelForIndex: H.noop,
    getPixelForValue: H.noop,
    getValueForPixel: H.noop,
    getPixelForTick: function (t) {
      var e = this.options.offset,
        n = this._ticks.length,
        i = 1 / Math.max(n - (e ? 0 : 1), 1);
      return t < 0 || t > n - 1
        ? null
        : this.getPixelForDecimal(t * i + (e ? i / 2 : 0));
    },
    getPixelForDecimal: function (t) {
      return (
        this._reversePixels && (t = 1 - t), this._startPixel + t * this._length
      );
    },
    getDecimalForPixel: function (t) {
      var e = (t - this._startPixel) / this._length;
      return this._reversePixels ? 1 - e : e;
    },
    getBasePixel: function () {
      return this.getPixelForValue(this.getBaseValue());
    },
    getBaseValue: function () {
      var t = this.min,
        e = this.max;
      return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
    },
    _autoSkip: function (t) {
      var e,
        n,
        i,
        a,
        r = this.options.ticks,
        o = this._length,
        s = r.maxTicksLimit || o / this._tickSize() + 1,
        l = r.major.enabled
          ? (function (t) {
              var e,
                n,
                i = [];
              for (e = 0, n = t.length; e < n; e++) t[e].major && i.push(e);
              return i;
            })(t)
          : [],
        u = l.length,
        d = l[0],
        h = l[u - 1];
      if (u > s)
        return (
          (function (t, e, n) {
            var i,
              a,
              r = 0,
              o = e[0];
            for (n = Math.ceil(n), i = 0; i < t.length; i++)
              (a = t[i]),
                i === o ? ((a._index = i), (o = e[++r * n])) : delete a.label;
          })(t, l, u / s),
          vn(t)
        );
      if (
        ((i = (function (t, e, n, i) {
          var a,
            r,
            o,
            s,
            l = (function (t) {
              var e,
                n,
                i = t.length;
              if (i < 2) return !1;
              for (n = t[0], e = 1; e < i; ++e)
                if (t[e] - t[e - 1] !== n) return !1;
              return n;
            })(t),
            u = (e.length - 1) / i;
          if (!l) return Math.max(u, 1);
          for (o = 0, s = (a = H.math._factorize(l)).length - 1; o < s; o++)
            if ((r = a[o]) > u) return r;
          return Math.max(u, 1);
        })(l, t, 0, s)),
        u > 0)
      ) {
        for (e = 0, n = u - 1; e < n; e++) bn(t, i, l[e], l[e + 1]);
        return (
          (a = u > 1 ? (h - d) / (u - 1) : null),
          bn(t, i, H.isNullOrUndef(a) ? 0 : d - a, d),
          bn(t, i, h, H.isNullOrUndef(a) ? t.length : h + a),
          vn(t)
        );
      }
      return bn(t, i), vn(t);
    },
    _tickSize: function () {
      var t = this.options.ticks,
        e = H.toRadians(this.labelRotation),
        n = Math.abs(Math.cos(e)),
        i = Math.abs(Math.sin(e)),
        a = this._getLabelSizes(),
        r = t.autoSkipPadding || 0,
        o = a ? a.widest.width + r : 0,
        s = a ? a.highest.height + r : 0;
      return this.isHorizontal()
        ? s * n > o * i
          ? o / n
          : s / i
        : s * i < o * n
        ? s / n
        : o / i;
    },
    _isVisible: function () {
      var t,
        e,
        n,
        i = this.chart,
        a = this.options.display;
      if ("auto" !== a) return !!a;
      for (t = 0, e = i.data.datasets.length; t < e; ++t)
        if (
          i.isDatasetVisible(t) &&
          ((n = i.getDatasetMeta(t)).xAxisID === this.id ||
            n.yAxisID === this.id)
        )
          return !0;
      return !1;
    },
    _computeGridLineItems: function (t) {
      var e,
        n,
        i,
        a,
        r,
        o,
        s,
        l,
        u,
        d,
        h,
        c,
        f,
        g,
        m,
        p,
        v,
        b = this,
        y = b.chart,
        x = b.options,
        _ = x.gridLines,
        w = x.position,
        k = _.offsetGridLines,
        M = b.isHorizontal(),
        S = b._ticksToDraw,
        D = S.length + (k ? 1 : 0),
        C = fn(_),
        P = [],
        T = _.drawBorder ? dn(_.lineWidth, 0, 0) : 0,
        O = T / 2,
        A = H._alignPixel,
        F = function (t) {
          return A(y, t, T);
        };
      for (
        "top" === w
          ? ((e = F(b.bottom)),
            (s = b.bottom - C),
            (u = e - O),
            (h = F(t.top) + O),
            (f = t.bottom))
          : "bottom" === w
          ? ((e = F(b.top)),
            (h = t.top),
            (f = F(t.bottom) - O),
            (s = e + O),
            (u = b.top + C))
          : "left" === w
          ? ((e = F(b.right)),
            (o = b.right - C),
            (l = e - O),
            (d = F(t.left) + O),
            (c = t.right))
          : ((e = F(b.left)),
            (d = t.left),
            (c = F(t.right) - O),
            (o = e + O),
            (l = b.left + C)),
          n = 0;
        n < D;
        ++n
      )
        (i = S[n] || {}),
          (ln(i.label) && n < S.length) ||
            (n === b.zeroLineIndex && x.offset === k
              ? ((g = _.zeroLineWidth),
                (m = _.zeroLineColor),
                (p = _.zeroLineBorderDash || []),
                (v = _.zeroLineBorderDashOffset || 0))
              : ((g = dn(_.lineWidth, n, 1)),
                (m = dn(_.color, n, "rgba(0,0,0,0.1)")),
                (p = _.borderDash || []),
                (v = _.borderDashOffset || 0)),
            void 0 !== (a = hn(b, i._index || n, k)) &&
              ((r = A(y, a, g)),
              M ? (o = l = d = c = r) : (s = u = h = f = r),
              P.push({
                tx1: o,
                ty1: s,
                tx2: l,
                ty2: u,
                x1: d,
                y1: h,
                x2: c,
                y2: f,
                width: g,
                color: m,
                borderDash: p,
                borderDashOffset: v,
              })));
      return (P.ticksLength = D), (P.borderValue = e), P;
    },
    _computeLabelItems: function () {
      var t,
        e,
        n,
        i,
        a,
        r,
        o,
        s,
        l,
        u,
        d,
        h,
        c = this,
        f = c.options,
        g = f.ticks,
        m = f.position,
        p = g.mirror,
        v = c.isHorizontal(),
        b = c._ticksToDraw,
        y = pn(g),
        x = g.padding,
        _ = fn(f.gridLines),
        w = -H.toRadians(c.labelRotation),
        k = [];
      for (
        "top" === m
          ? ((r = c.bottom - _ - x), (o = w ? "left" : "center"))
          : "bottom" === m
          ? ((r = c.top + _ + x), (o = w ? "right" : "center"))
          : "left" === m
          ? ((a = c.right - (p ? 0 : _) - x), (o = p ? "left" : "right"))
          : ((a = c.left + (p ? 0 : _) + x), (o = p ? "right" : "left")),
          t = 0,
          e = b.length;
        t < e;
        ++t
      )
        (i = (n = b[t]).label),
          ln(i) ||
            ((s = c.getPixelForTick(n._index || t) + g.labelOffset),
            (u = (l = n.major ? y.major : y.minor).lineHeight),
            (d = sn(i) ? i.length : 1),
            v
              ? ((a = s),
                (h = "top" === m ? ((w ? 1 : 0.5) - d) * u : (w ? 0 : 0.5) * u))
              : ((r = s), (h = ((1 - d) * u) / 2)),
            k.push({
              x: a,
              y: r,
              rotation: w,
              label: i,
              font: l,
              textOffset: h,
              textAlign: o,
            }));
      return k;
    },
    _drawGrid: function (t) {
      var e = this,
        n = e.options.gridLines;
      if (n.display) {
        var i,
          a,
          r,
          o,
          s,
          l = e.ctx,
          u = e.chart,
          d = H._alignPixel,
          h = n.drawBorder ? dn(n.lineWidth, 0, 0) : 0,
          c =
            e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
        for (r = 0, o = c.length; r < o; ++r)
          (i = (s = c[r]).width),
            (a = s.color),
            i &&
              a &&
              (l.save(),
              (l.lineWidth = i),
              (l.strokeStyle = a),
              l.setLineDash &&
                (l.setLineDash(s.borderDash),
                (l.lineDashOffset = s.borderDashOffset)),
              l.beginPath(),
              n.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)),
              n.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)),
              l.stroke(),
              l.restore());
        if (h) {
          var f,
            g,
            m,
            p,
            v = h,
            b = dn(n.lineWidth, c.ticksLength - 1, 1),
            y = c.borderValue;
          e.isHorizontal()
            ? ((f = d(u, e.left, v) - v / 2),
              (g = d(u, e.right, b) + b / 2),
              (m = p = y))
            : ((m = d(u, e.top, v) - v / 2),
              (p = d(u, e.bottom, b) + b / 2),
              (f = g = y)),
            (l.lineWidth = h),
            (l.strokeStyle = dn(n.color, 0)),
            l.beginPath(),
            l.moveTo(f, m),
            l.lineTo(g, p),
            l.stroke();
        }
      }
    },
    _drawLabels: function () {
      var t = this;
      if (t.options.ticks.display) {
        var e,
          n,
          i,
          a,
          r,
          o,
          s,
          l,
          u = t.ctx,
          d = t._labelItems || (t._labelItems = t._computeLabelItems());
        for (e = 0, i = d.length; e < i; ++e) {
          if (
            ((o = (r = d[e]).font),
            u.save(),
            u.translate(r.x, r.y),
            u.rotate(r.rotation),
            (u.font = o.string),
            (u.fillStyle = o.color),
            (u.textBaseline = "middle"),
            (u.textAlign = r.textAlign),
            (s = r.label),
            (l = r.textOffset),
            sn(s))
          )
            for (n = 0, a = s.length; n < a; ++n)
              u.fillText("" + s[n], 0, l), (l += o.lineHeight);
          else u.fillText(s, 0, l);
          u.restore();
        }
      }
    },
    _drawTitle: function () {
      var t = this,
        e = t.ctx,
        n = t.options,
        i = n.scaleLabel;
      if (i.display) {
        var a,
          r,
          o = un(i.fontColor, W.global.defaultFontColor),
          s = H.options._parseFont(i),
          l = H.options.toPadding(i.padding),
          u = s.lineHeight / 2,
          d = n.position,
          h = 0;
        if (t.isHorizontal())
          (a = t.left + t.width / 2),
            (r = "bottom" === d ? t.bottom - u - l.bottom : t.top + u + l.top);
        else {
          var c = "left" === d;
          (a = c ? t.left + u + l.top : t.right - u - l.top),
            (r = t.top + t.height / 2),
            (h = c ? -0.5 * Math.PI : 0.5 * Math.PI);
        }
        e.save(),
          e.translate(a, r),
          e.rotate(h),
          (e.textAlign = "center"),
          (e.textBaseline = "middle"),
          (e.fillStyle = o),
          (e.font = s.string),
          e.fillText(i.labelString, 0, 0),
          e.restore();
      }
    },
    draw: function (t) {
      this._isVisible() &&
        (this._drawGrid(t), this._drawTitle(), this._drawLabels());
    },
    _layers: function () {
      var t = this,
        e = t.options,
        n = (e.ticks && e.ticks.z) || 0,
        i = (e.gridLines && e.gridLines.z) || 0;
      return t._isVisible() && n !== i && t.draw === t._draw
        ? [
            {
              z: i,
              draw: function () {
                t._drawGrid.apply(t, arguments),
                  t._drawTitle.apply(t, arguments);
              },
            },
            {
              z: n,
              draw: function () {
                t._drawLabels.apply(t, arguments);
              },
            },
          ]
        : [
            {
              z: n,
              draw: function () {
                t.draw.apply(t, arguments);
              },
            },
          ];
    },
    _getMatchingVisibleMetas: function (t) {
      var e = this,
        n = e.isHorizontal();
      return e.chart._getSortedVisibleDatasetMetas().filter(function (i) {
        return (
          (!t || i.type === t) && (n ? i.xAxisID === e.id : i.yAxisID === e.id)
        );
      });
    },
  });
  yn.prototype._draw = yn.prototype.draw;
  var xn = yn,
    _n = H.isNullOrUndef,
    wn = xn.extend({
      determineDataLimits: function () {
        var t,
          e = this,
          n = e._getLabels(),
          i = e.options.ticks,
          a = i.min,
          r = i.max,
          o = 0,
          s = n.length - 1;
        void 0 !== a && (t = n.indexOf(a)) >= 0 && (o = t),
          void 0 !== r && (t = n.indexOf(r)) >= 0 && (s = t),
          (e.minIndex = o),
          (e.maxIndex = s),
          (e.min = n[o]),
          (e.max = n[s]);
      },
      buildTicks: function () {
        var t = this._getLabels(),
          e = this.minIndex,
          n = this.maxIndex;
        this.ticks = 0 === e && n === t.length - 1 ? t : t.slice(e, n + 1);
      },
      getLabelForIndex: function (t, e) {
        var n = this.chart;
        return n.getDatasetMeta(e).controller._getValueScaleId() === this.id
          ? this.getRightValue(n.data.datasets[e].data[t])
          : this._getLabels()[t];
      },
      _configure: function () {
        var t = this,
          e = t.options.offset,
          n = t.ticks;
        xn.prototype._configure.call(t),
          t.isHorizontal() || (t._reversePixels = !t._reversePixels),
          n &&
            ((t._startValue = t.minIndex - (e ? 0.5 : 0)),
            (t._valueRange = Math.max(n.length - (e ? 0 : 1), 1)));
      },
      getPixelForValue: function (t, e, n) {
        var i,
          a,
          r,
          o = this;
        return (
          _n(e) || _n(n) || (t = o.chart.data.datasets[n].data[e]),
          _n(t) || (i = o.isHorizontal() ? t.x : t.y),
          (void 0 !== i || (void 0 !== t && isNaN(e))) &&
            ((a = o._getLabels()),
            (t = H.valueOrDefault(i, t)),
            (e = -1 !== (r = a.indexOf(t)) ? r : e),
            isNaN(e) && (e = t)),
          o.getPixelForDecimal((e - o._startValue) / o._valueRange)
        );
      },
      getPixelForTick: function (t) {
        var e = this.ticks;
        return t < 0 || t > e.length - 1
          ? null
          : this.getPixelForValue(e[t], t + this.minIndex);
      },
      getValueForPixel: function (t) {
        var e = Math.round(
          this._startValue + this.getDecimalForPixel(t) * this._valueRange
        );
        return Math.min(Math.max(e, 0), this.ticks.length - 1);
      },
      getBasePixel: function () {
        return this.bottom;
      },
    }),
    kn = { position: "bottom" };
  wn._defaults = kn;
  var Mn = H.noop,
    Sn = H.isNullOrUndef;
  var Dn = xn.extend({
      getRightValue: function (t) {
        return "string" == typeof t
          ? +t
          : xn.prototype.getRightValue.call(this, t);
      },
      handleTickRangeOptions: function () {
        var t = this,
          e = t.options.ticks;
        if (e.beginAtZero) {
          var n = H.sign(t.min),
            i = H.sign(t.max);
          n < 0 && i < 0 ? (t.max = 0) : n > 0 && i > 0 && (t.min = 0);
        }
        var a = void 0 !== e.min || void 0 !== e.suggestedMin,
          r = void 0 !== e.max || void 0 !== e.suggestedMax;
        void 0 !== e.min
          ? (t.min = e.min)
          : void 0 !== e.suggestedMin &&
            (null === t.min
              ? (t.min = e.suggestedMin)
              : (t.min = Math.min(t.min, e.suggestedMin))),
          void 0 !== e.max
            ? (t.max = e.max)
            : void 0 !== e.suggestedMax &&
              (null === t.max
                ? (t.max = e.suggestedMax)
                : (t.max = Math.max(t.max, e.suggestedMax))),
          a !== r &&
            t.min >= t.max &&
            (a ? (t.max = t.min + 1) : (t.min = t.max - 1)),
          t.min === t.max && (t.max++, e.beginAtZero || t.min--);
      },
      getTickLimit: function () {
        var t,
          e = this.options.ticks,
          n = e.stepSize,
          i = e.maxTicksLimit;
        return (
          n
            ? (t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1)
            : ((t = this._computeTickLimit()), (i = i || 11)),
          i && (t = Math.min(i, t)),
          t
        );
      },
      _computeTickLimit: function () {
        return Number.POSITIVE_INFINITY;
      },
      handleDirectionalChanges: Mn,
      buildTicks: function () {
        var t = this,
          e = t.options.ticks,
          n = t.getTickLimit(),
          i = {
            maxTicks: (n = Math.max(2, n)),
            min: e.min,
            max: e.max,
            precision: e.precision,
            stepSize: H.valueOrDefault(e.fixedStepSize, e.stepSize),
          },
          a = (t.ticks = (function (t, e) {
            var n,
              i,
              a,
              r,
              o = [],
              s = t.stepSize,
              l = s || 1,
              u = t.maxTicks - 1,
              d = t.min,
              h = t.max,
              c = t.precision,
              f = e.min,
              g = e.max,
              m = H.niceNum((g - f) / u / l) * l;
            if (m < 1e-14 && Sn(d) && Sn(h)) return [f, g];
            (r = Math.ceil(g / m) - Math.floor(f / m)) > u &&
              (m = H.niceNum((r * m) / u / l) * l),
              s || Sn(c)
                ? (n = Math.pow(10, H._decimalPlaces(m)))
                : ((n = Math.pow(10, c)), (m = Math.ceil(m * n) / n)),
              (i = Math.floor(f / m) * m),
              (a = Math.ceil(g / m) * m),
              s &&
                (!Sn(d) && H.almostWhole(d / m, m / 1e3) && (i = d),
                !Sn(h) && H.almostWhole(h / m, m / 1e3) && (a = h)),
              (r = (a - i) / m),
              (r = H.almostEquals(r, Math.round(r), m / 1e3)
                ? Math.round(r)
                : Math.ceil(r)),
              (i = Math.round(i * n) / n),
              (a = Math.round(a * n) / n),
              o.push(Sn(d) ? i : d);
            for (var p = 1; p < r; ++p) o.push(Math.round((i + p * m) * n) / n);
            return o.push(Sn(h) ? a : h), o;
          })(i, t));
        t.handleDirectionalChanges(),
          (t.max = H.max(a)),
          (t.min = H.min(a)),
          e.reverse
            ? (a.reverse(), (t.start = t.max), (t.end = t.min))
            : ((t.start = t.min), (t.end = t.max));
      },
      convertTicksToLabels: function () {
        var t = this;
        (t.ticksAsNumbers = t.ticks.slice()),
          (t.zeroLineIndex = t.ticks.indexOf(0)),
          xn.prototype.convertTicksToLabels.call(t);
      },
      _configure: function () {
        var t,
          e = this,
          n = e.getTicks(),
          i = e.min,
          a = e.max;
        xn.prototype._configure.call(e),
          e.options.offset &&
            n.length &&
            ((i -= t = (a - i) / Math.max(n.length - 1, 1) / 2), (a += t)),
          (e._startValue = i),
          (e._endValue = a),
          (e._valueRange = a - i);
      },
    }),
    Cn = { position: "left", ticks: { callback: on.formatters.linear } };
  function Pn(t, e, n, i) {
    var a,
      r,
      o = t.options,
      s = (function (t, e, n) {
        var i = [
          n.type,
          void 0 === e && void 0 === n.stack ? n.index : "",
          n.stack,
        ].join(".");
        return void 0 === t[i] && (t[i] = { pos: [], neg: [] }), t[i];
      })(e, o.stacked, n),
      l = s.pos,
      u = s.neg,
      d = i.length;
    for (a = 0; a < d; ++a)
      (r = t._parseValue(i[a])),
        isNaN(r.min) ||
          isNaN(r.max) ||
          n.data[a].hidden ||
          ((l[a] = l[a] || 0),
          (u[a] = u[a] || 0),
          o.relativePoints
            ? (l[a] = 100)
            : r.min < 0 || r.max < 0
            ? (u[a] += r.min)
            : (l[a] += r.max));
  }
  function Tn(t, e, n) {
    var i,
      a,
      r = n.length;
    for (i = 0; i < r; ++i)
      (a = t._parseValue(n[i])),
        isNaN(a.min) ||
          isNaN(a.max) ||
          e.data[i].hidden ||
          ((t.min = Math.min(t.min, a.min)), (t.max = Math.max(t.max, a.max)));
  }
  var On = Dn.extend({
      determineDataLimits: function () {
        var t,
          e,
          n,
          i,
          a = this,
          r = a.options,
          o = a.chart.data.datasets,
          s = a._getMatchingVisibleMetas(),
          l = r.stacked,
          u = {},
          d = s.length;
        if (
          ((a.min = Number.POSITIVE_INFINITY),
          (a.max = Number.NEGATIVE_INFINITY),
          void 0 === l)
        )
          for (t = 0; !l && t < d; ++t) l = void 0 !== (e = s[t]).stack;
        for (t = 0; t < d; ++t)
          (n = o[(e = s[t]).index].data), l ? Pn(a, u, e, n) : Tn(a, e, n);
        H.each(u, function (t) {
          (i = t.pos.concat(t.neg)),
            (a.min = Math.min(a.min, H.min(i))),
            (a.max = Math.max(a.max, H.max(i)));
        }),
          (a.min = H.isFinite(a.min) && !isNaN(a.min) ? a.min : 0),
          (a.max = H.isFinite(a.max) && !isNaN(a.max) ? a.max : 1),
          a.handleTickRangeOptions();
      },
      _computeTickLimit: function () {
        var t;
        return this.isHorizontal()
          ? Math.ceil(this.width / 40)
          : ((t = H.options._parseFont(this.options.ticks)),
            Math.ceil(this.height / t.lineHeight));
      },
      handleDirectionalChanges: function () {
        this.isHorizontal() || this.ticks.reverse();
      },
      getLabelForIndex: function (t, e) {
        return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
      },
      getPixelForValue: function (t) {
        return this.getPixelForDecimal(
          (+this.getRightValue(t) - this._startValue) / this._valueRange
        );
      },
      getValueForPixel: function (t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
      },
      getPixelForTick: function (t) {
        var e = this.ticksAsNumbers;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t]);
      },
    }),
    An = Cn;
  On._defaults = An;
  var Fn = H.valueOrDefault,
    In = H.math.log10;
  var Ln = { position: "left", ticks: { callback: on.formatters.logarithmic } };
  function Rn(t, e) {
    return H.isFinite(t) && t >= 0 ? t : e;
  }
  var Nn = xn.extend({
      determineDataLimits: function () {
        var t,
          e,
          n,
          i,
          a,
          r,
          o = this,
          s = o.options,
          l = o.chart,
          u = l.data.datasets,
          d = o.isHorizontal();
        function h(t) {
          return d ? t.xAxisID === o.id : t.yAxisID === o.id;
        }
        (o.min = Number.POSITIVE_INFINITY),
          (o.max = Number.NEGATIVE_INFINITY),
          (o.minNotZero = Number.POSITIVE_INFINITY);
        var c = s.stacked;
        if (void 0 === c)
          for (t = 0; t < u.length; t++)
            if (
              ((e = l.getDatasetMeta(t)),
              l.isDatasetVisible(t) && h(e) && void 0 !== e.stack)
            ) {
              c = !0;
              break;
            }
        if (s.stacked || c) {
          var f = {};
          for (t = 0; t < u.length; t++) {
            var g = [
              (e = l.getDatasetMeta(t)).type,
              void 0 === s.stacked && void 0 === e.stack ? t : "",
              e.stack,
            ].join(".");
            if (l.isDatasetVisible(t) && h(e))
              for (
                void 0 === f[g] && (f[g] = []),
                  a = 0,
                  r = (i = u[t].data).length;
                a < r;
                a++
              ) {
                var m = f[g];
                (n = o._parseValue(i[a])),
                  isNaN(n.min) ||
                    isNaN(n.max) ||
                    e.data[a].hidden ||
                    n.min < 0 ||
                    n.max < 0 ||
                    ((m[a] = m[a] || 0), (m[a] += n.max));
              }
          }
          H.each(f, function (t) {
            if (t.length > 0) {
              var e = H.min(t),
                n = H.max(t);
              (o.min = Math.min(o.min, e)), (o.max = Math.max(o.max, n));
            }
          });
        } else
          for (t = 0; t < u.length; t++)
            if (((e = l.getDatasetMeta(t)), l.isDatasetVisible(t) && h(e)))
              for (a = 0, r = (i = u[t].data).length; a < r; a++)
                (n = o._parseValue(i[a])),
                  isNaN(n.min) ||
                    isNaN(n.max) ||
                    e.data[a].hidden ||
                    n.min < 0 ||
                    n.max < 0 ||
                    ((o.min = Math.min(n.min, o.min)),
                    (o.max = Math.max(n.max, o.max)),
                    0 !== n.min &&
                      (o.minNotZero = Math.min(n.min, o.minNotZero)));
        (o.min = H.isFinite(o.min) ? o.min : null),
          (o.max = H.isFinite(o.max) ? o.max : null),
          (o.minNotZero = H.isFinite(o.minNotZero) ? o.minNotZero : null),
          this.handleTickRangeOptions();
      },
      handleTickRangeOptions: function () {
        var t = this,
          e = t.options.ticks;
        (t.min = Rn(e.min, t.min)),
          (t.max = Rn(e.max, t.max)),
          t.min === t.max &&
            (0 !== t.min && null !== t.min
              ? ((t.min = Math.pow(10, Math.floor(In(t.min)) - 1)),
                (t.max = Math.pow(10, Math.floor(In(t.max)) + 1)))
              : ((t.min = 1), (t.max = 10))),
          null === t.min && (t.min = Math.pow(10, Math.floor(In(t.max)) - 1)),
          null === t.max &&
            (t.max =
              0 !== t.min ? Math.pow(10, Math.floor(In(t.min)) + 1) : 10),
          null === t.minNotZero &&
            (t.min > 0
              ? (t.minNotZero = t.min)
              : t.max < 1
              ? (t.minNotZero = Math.pow(10, Math.floor(In(t.max))))
              : (t.minNotZero = 1));
      },
      buildTicks: function () {
        var t = this,
          e = t.options.ticks,
          n = !t.isHorizontal(),
          i = { min: Rn(e.min), max: Rn(e.max) },
          a = (t.ticks = (function (t, e) {
            var n,
              i,
              a = [],
              r = Fn(t.min, Math.pow(10, Math.floor(In(e.min)))),
              o = Math.floor(In(e.max)),
              s = Math.ceil(e.max / Math.pow(10, o));
            0 === r
              ? ((n = Math.floor(In(e.minNotZero))),
                (i = Math.floor(e.minNotZero / Math.pow(10, n))),
                a.push(r),
                (r = i * Math.pow(10, n)))
              : ((n = Math.floor(In(r))),
                (i = Math.floor(r / Math.pow(10, n))));
            var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
            do {
              a.push(r),
                10 === ++i && ((i = 1), (l = ++n >= 0 ? 1 : l)),
                (r = Math.round(i * Math.pow(10, n) * l) / l);
            } while (n < o || (n === o && i < s));
            var u = Fn(t.max, r);
            return a.push(u), a;
          })(i, t));
        (t.max = H.max(a)),
          (t.min = H.min(a)),
          e.reverse
            ? ((n = !n), (t.start = t.max), (t.end = t.min))
            : ((t.start = t.min), (t.end = t.max)),
          n && a.reverse();
      },
      convertTicksToLabels: function () {
        (this.tickValues = this.ticks.slice()),
          xn.prototype.convertTicksToLabels.call(this);
      },
      getLabelForIndex: function (t, e) {
        return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
      },
      getPixelForTick: function (t) {
        var e = this.tickValues;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t]);
      },
      _getFirstTickValue: function (t) {
        var e = Math.floor(In(t));
        return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
      },
      _configure: function () {
        var t = this,
          e = t.min,
          n = 0;
        xn.prototype._configure.call(t),
          0 === e &&
            ((e = t._getFirstTickValue(t.minNotZero)),
            (n =
              Fn(t.options.ticks.fontSize, W.global.defaultFontSize) /
              t._length)),
          (t._startValue = In(e)),
          (t._valueOffset = n),
          (t._valueRange = (In(t.max) - In(e)) / (1 - n));
      },
      getPixelForValue: function (t) {
        var e = this,
          n = 0;
        return (
          (t = +e.getRightValue(t)) > e.min &&
            t > 0 &&
            (n = (In(t) - e._startValue) / e._valueRange + e._valueOffset),
          e.getPixelForDecimal(n)
        );
      },
      getValueForPixel: function (t) {
        var e = this,
          n = e.getDecimalForPixel(t);
        return 0 === n && 0 === e.min
          ? 0
          : Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange);
      },
    }),
    Wn = Ln;
  Nn._defaults = Wn;
  var Yn = H.valueOrDefault,
    zn = H.valueAtIndexOrDefault,
    En = H.options.resolve,
    Vn = {
      display: !0,
      animate: !0,
      position: "chartArea",
      angleLines: {
        display: !0,
        color: "rgba(0,0,0,0.1)",
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0,
      },
      gridLines: { circular: !1 },
      ticks: {
        showLabelBackdrop: !0,
        backdropColor: "rgba(255,255,255,0.75)",
        backdropPaddingY: 2,
        backdropPaddingX: 2,
        callback: on.formatters.linear,
      },
      pointLabels: {
        display: !0,
        fontSize: 10,
        callback: function (t) {
          return t;
        },
      },
    };
  function Hn(t) {
    var e = t.ticks;
    return e.display && t.display
      ? Yn(e.fontSize, W.global.defaultFontSize) + 2 * e.backdropPaddingY
      : 0;
  }
  function Bn(t, e, n, i, a) {
    return t === i || t === a
      ? { start: e - n / 2, end: e + n / 2 }
      : t < i || t > a
      ? { start: e - n, end: e }
      : { start: e, end: e + n };
  }
  function jn(t) {
    return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
  }
  function Un(t, e, n, i) {
    var a,
      r,
      o = n.y + i / 2;
    if (H.isArray(e))
      for (a = 0, r = e.length; a < r; ++a) t.fillText(e[a], n.x, o), (o += i);
    else t.fillText(e, n.x, o);
  }
  function Gn(t, e, n) {
    90 === t || 270 === t
      ? (n.y -= e.h / 2)
      : (t > 270 || t < 90) && (n.y -= e.h);
  }
  function qn(t) {
    return H.isNumber(t) ? t : 0;
  }
  var Zn = Dn.extend({
      setDimensions: function () {
        var t = this;
        (t.width = t.maxWidth),
          (t.height = t.maxHeight),
          (t.paddingTop = Hn(t.options) / 2),
          (t.xCenter = Math.floor(t.width / 2)),
          (t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
          (t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2);
      },
      determineDataLimits: function () {
        var t = this,
          e = t.chart,
          n = Number.POSITIVE_INFINITY,
          i = Number.NEGATIVE_INFINITY;
        H.each(e.data.datasets, function (a, r) {
          if (e.isDatasetVisible(r)) {
            var o = e.getDatasetMeta(r);
            H.each(a.data, function (e, a) {
              var r = +t.getRightValue(e);
              isNaN(r) ||
                o.data[a].hidden ||
                ((n = Math.min(r, n)), (i = Math.max(r, i)));
            });
          }
        }),
          (t.min = n === Number.POSITIVE_INFINITY ? 0 : n),
          (t.max = i === Number.NEGATIVE_INFINITY ? 0 : i),
          t.handleTickRangeOptions();
      },
      _computeTickLimit: function () {
        return Math.ceil(this.drawingArea / Hn(this.options));
      },
      convertTicksToLabels: function () {
        var t = this;
        Dn.prototype.convertTicksToLabels.call(t),
          (t.pointLabels = t.chart.data.labels.map(function () {
            var e = H.callback(t.options.pointLabels.callback, arguments, t);
            return e || 0 === e ? e : "";
          }));
      },
      getLabelForIndex: function (t, e) {
        return +this.getRightValue(this.chart.data.datasets[e].data[t]);
      },
      fit: function () {
        var t = this.options;
        t.display && t.pointLabels.display
          ? (function (t) {
              var e,
                n,
                i,
                a = H.options._parseFont(t.options.pointLabels),
                r = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
                o = {};
              (t.ctx.font = a.string), (t._pointLabelSizes = []);
              var s,
                l,
                u,
                d = t.chart.data.labels.length;
              for (e = 0; e < d; e++) {
                (i = t.getPointPosition(e, t.drawingArea + 5)),
                  (s = t.ctx),
                  (l = a.lineHeight),
                  (u = t.pointLabels[e]),
                  (n = H.isArray(u)
                    ? { w: H.longestText(s, s.font, u), h: u.length * l }
                    : { w: s.measureText(u).width, h: l }),
                  (t._pointLabelSizes[e] = n);
                var h = t.getIndexAngle(e),
                  c = H.toDegrees(h) % 360,
                  f = Bn(c, i.x, n.w, 0, 180),
                  g = Bn(c, i.y, n.h, 90, 270);
                f.start < r.l && ((r.l = f.start), (o.l = h)),
                  f.end > r.r && ((r.r = f.end), (o.r = h)),
                  g.start < r.t && ((r.t = g.start), (o.t = h)),
                  g.end > r.b && ((r.b = g.end), (o.b = h));
              }
              t.setReductions(t.drawingArea, r, o);
            })(this)
          : this.setCenterPoint(0, 0, 0, 0);
      },
      setReductions: function (t, e, n) {
        var i = this,
          a = e.l / Math.sin(n.l),
          r = Math.max(e.r - i.width, 0) / Math.sin(n.r),
          o = -e.t / Math.cos(n.t),
          s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);
        (a = qn(a)),
          (r = qn(r)),
          (o = qn(o)),
          (s = qn(s)),
          (i.drawingArea = Math.min(
            Math.floor(t - (a + r) / 2),
            Math.floor(t - (o + s) / 2)
          )),
          i.setCenterPoint(a, r, o, s);
      },
      setCenterPoint: function (t, e, n, i) {
        var a = this,
          r = a.width - e - a.drawingArea,
          o = t + a.drawingArea,
          s = n + a.drawingArea,
          l = a.height - a.paddingTop - i - a.drawingArea;
        (a.xCenter = Math.floor((o + r) / 2 + a.left)),
          (a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop));
      },
      getIndexAngle: function (t) {
        var e = this.chart,
          n =
            (t * (360 / e.data.labels.length) +
              ((e.options || {}).startAngle || 0)) %
            360;
        return ((n < 0 ? n + 360 : n) * Math.PI * 2) / 360;
      },
      getDistanceFromCenterForValue: function (t) {
        var e = this;
        if (H.isNullOrUndef(t)) return NaN;
        var n = e.drawingArea / (e.max - e.min);
        return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n;
      },
      getPointPosition: function (t, e) {
        var n = this.getIndexAngle(t) - Math.PI / 2;
        return {
          x: Math.cos(n) * e + this.xCenter,
          y: Math.sin(n) * e + this.yCenter,
        };
      },
      getPointPositionForValue: function (t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
      },
      getBasePosition: function (t) {
        var e = this.min,
          n = this.max;
        return this.getPointPositionForValue(
          t || 0,
          this.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0
        );
      },
      _drawGrid: function () {
        var t,
          e,
          n,
          i = this,
          a = i.ctx,
          r = i.options,
          o = r.gridLines,
          s = r.angleLines,
          l = Yn(s.lineWidth, o.lineWidth),
          u = Yn(s.color, o.color);
        if (
          (r.pointLabels.display &&
            (function (t) {
              var e = t.ctx,
                n = t.options,
                i = n.pointLabels,
                a = Hn(n),
                r = t.getDistanceFromCenterForValue(
                  n.ticks.reverse ? t.min : t.max
                ),
                o = H.options._parseFont(i);
              e.save(), (e.font = o.string), (e.textBaseline = "middle");
              for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
                var l = 0 === s ? a / 2 : 0,
                  u = t.getPointPosition(s, r + l + 5),
                  d = zn(i.fontColor, s, W.global.defaultFontColor);
                e.fillStyle = d;
                var h = t.getIndexAngle(s),
                  c = H.toDegrees(h);
                (e.textAlign = jn(c)),
                  Gn(c, t._pointLabelSizes[s], u),
                  Un(e, t.pointLabels[s], u, o.lineHeight);
              }
              e.restore();
            })(i),
          o.display &&
            H.each(i.ticks, function (t, n) {
              0 !== n &&
                ((e = i.getDistanceFromCenterForValue(i.ticksAsNumbers[n])),
                (function (t, e, n, i) {
                  var a,
                    r = t.ctx,
                    o = e.circular,
                    s = t.chart.data.labels.length,
                    l = zn(e.color, i - 1),
                    u = zn(e.lineWidth, i - 1);
                  if ((o || s) && l && u) {
                    if (
                      (r.save(),
                      (r.strokeStyle = l),
                      (r.lineWidth = u),
                      r.setLineDash &&
                        (r.setLineDash(e.borderDash || []),
                        (r.lineDashOffset = e.borderDashOffset || 0)),
                      r.beginPath(),
                      o)
                    )
                      r.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                    else {
                      (a = t.getPointPosition(0, n)), r.moveTo(a.x, a.y);
                      for (var d = 1; d < s; d++)
                        (a = t.getPointPosition(d, n)), r.lineTo(a.x, a.y);
                    }
                    r.closePath(), r.stroke(), r.restore();
                  }
                })(i, o, e, n));
            }),
          s.display && l && u)
        ) {
          for (
            a.save(),
              a.lineWidth = l,
              a.strokeStyle = u,
              a.setLineDash &&
                (a.setLineDash(En([s.borderDash, o.borderDash, []])),
                (a.lineDashOffset = En([
                  s.borderDashOffset,
                  o.borderDashOffset,
                  0,
                ]))),
              t = i.chart.data.labels.length - 1;
            t >= 0;
            t--
          )
            (e = i.getDistanceFromCenterForValue(
              r.ticks.reverse ? i.min : i.max
            )),
              (n = i.getPointPosition(t, e)),
              a.beginPath(),
              a.moveTo(i.xCenter, i.yCenter),
              a.lineTo(n.x, n.y),
              a.stroke();
          a.restore();
        }
      },
      _drawLabels: function () {
        var t = this,
          e = t.ctx,
          n = t.options.ticks;
        if (n.display) {
          var i,
            a,
            r = t.getIndexAngle(0),
            o = H.options._parseFont(n),
            s = Yn(n.fontColor, W.global.defaultFontColor);
          e.save(),
            (e.font = o.string),
            e.translate(t.xCenter, t.yCenter),
            e.rotate(r),
            (e.textAlign = "center"),
            (e.textBaseline = "middle"),
            H.each(t.ticks, function (r, l) {
              (0 !== l || n.reverse) &&
                ((i = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l])),
                n.showLabelBackdrop &&
                  ((a = e.measureText(r).width),
                  (e.fillStyle = n.backdropColor),
                  e.fillRect(
                    -a / 2 - n.backdropPaddingX,
                    -i - o.size / 2 - n.backdropPaddingY,
                    a + 2 * n.backdropPaddingX,
                    o.size + 2 * n.backdropPaddingY
                  )),
                (e.fillStyle = s),
                e.fillText(r, 0, -i));
            }),
            e.restore();
        }
      },
      _drawTitle: H.noop,
    }),
    $n = Vn;
  Zn._defaults = $n;
  var Xn = H._deprecated,
    Kn = H.options.resolve,
    Jn = H.valueOrDefault,
    Qn = Number.MIN_SAFE_INTEGER || -9007199254740991,
    ti = Number.MAX_SAFE_INTEGER || 9007199254740991,
    ei = {
      millisecond: { common: !0, size: 1, steps: 1e3 },
      second: { common: !0, size: 1e3, steps: 60 },
      minute: { common: !0, size: 6e4, steps: 60 },
      hour: { common: !0, size: 36e5, steps: 24 },
      day: { common: !0, size: 864e5, steps: 30 },
      week: { common: !1, size: 6048e5, steps: 4 },
      month: { common: !0, size: 2628e6, steps: 12 },
      quarter: { common: !1, size: 7884e6, steps: 4 },
      year: { common: !0, size: 3154e7 },
    },
    ni = Object.keys(ei);
  function ii(t, e) {
    return t - e;
  }
  function ai(t) {
    return H.valueOrDefault(t.time.min, t.ticks.min);
  }
  function ri(t) {
    return H.valueOrDefault(t.time.max, t.ticks.max);
  }
  function oi(t, e, n, i) {
    var a = (function (t, e, n) {
        for (var i, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s; ) {
          if (((a = t[(i = (o + s) >> 1) - 1] || null), (r = t[i]), !a))
            return { lo: null, hi: r };
          if (r[e] < n) o = i + 1;
          else {
            if (!(a[e] > n)) return { lo: a, hi: r };
            s = i - 1;
          }
        }
        return { lo: r, hi: null };
      })(t, e, n),
      r = a.lo ? (a.hi ? a.lo : t[t.length - 2]) : t[0],
      o = a.lo ? (a.hi ? a.hi : t[t.length - 1]) : t[1],
      s = o[e] - r[e],
      l = s ? (n - r[e]) / s : 0,
      u = (o[i] - r[i]) * l;
    return r[i] + u;
  }
  function si(t, e) {
    var n = t._adapter,
      i = t.options.time,
      a = i.parser,
      r = a || i.format,
      o = e;
    return (
      "function" == typeof a && (o = a(o)),
      H.isFinite(o) || (o = "string" == typeof r ? n.parse(o, r) : n.parse(o)),
      null !== o
        ? +o
        : (a ||
            "function" != typeof r ||
            ((o = r(e)), H.isFinite(o) || (o = n.parse(o))),
          o)
    );
  }
  function li(t, e) {
    if (H.isNullOrUndef(e)) return null;
    var n = t.options.time,
      i = si(t, t.getRightValue(e));
    return null === i
      ? i
      : (n.round && (i = +t._adapter.startOf(i, n.round)), i);
  }
  function ui(t, e, n, i) {
    var a,
      r,
      o,
      s = ni.length;
    for (a = ni.indexOf(t); a < s - 1; ++a)
      if (
        ((o = (r = ei[ni[a]]).steps ? r.steps : ti),
        r.common && Math.ceil((n - e) / (o * r.size)) <= i)
      )
        return ni[a];
    return ni[s - 1];
  }
  function di(t, e, n) {
    var i,
      a,
      r = [],
      o = {},
      s = e.length;
    for (i = 0; i < s; ++i)
      (o[(a = e[i])] = i), r.push({ value: a, major: !1 });
    return 0 !== s && n
      ? (function (t, e, n, i) {
          var a,
            r,
            o = t._adapter,
            s = +o.startOf(e[0].value, i),
            l = e[e.length - 1].value;
          for (a = s; a <= l; a = +o.add(a, 1, i))
            (r = n[a]) >= 0 && (e[r].major = !0);
          return e;
        })(t, r, o, n)
      : r;
  }
  var hi = xn.extend({
      initialize: function () {
        this.mergeTicksOptions(), xn.prototype.initialize.call(this);
      },
      update: function () {
        var t = this,
          e = t.options,
          n = e.time || (e.time = {}),
          i = (t._adapter = new rn._date(e.adapters.date));
        return (
          Xn("time scale", n.format, "time.format", "time.parser"),
          Xn("time scale", n.min, "time.min", "ticks.min"),
          Xn("time scale", n.max, "time.max", "ticks.max"),
          H.mergeIf(n.displayFormats, i.formats()),
          xn.prototype.update.apply(t, arguments)
        );
      },
      getRightValue: function (t) {
        return (
          t && void 0 !== t.t && (t = t.t),
          xn.prototype.getRightValue.call(this, t)
        );
      },
      determineDataLimits: function () {
        var t,
          e,
          n,
          i,
          a,
          r,
          o,
          s = this,
          l = s.chart,
          u = s._adapter,
          d = s.options,
          h = d.time.unit || "day",
          c = ti,
          f = Qn,
          g = [],
          m = [],
          p = [],
          v = s._getLabels();
        for (t = 0, n = v.length; t < n; ++t) p.push(li(s, v[t]));
        for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
          if (l.isDatasetVisible(t))
            if (((a = l.data.datasets[t].data), H.isObject(a[0])))
              for (m[t] = [], e = 0, i = a.length; e < i; ++e)
                (r = li(s, a[e])), g.push(r), (m[t][e] = r);
            else (m[t] = p.slice(0)), o || ((g = g.concat(p)), (o = !0));
          else m[t] = [];
        p.length &&
          ((c = Math.min(c, p[0])), (f = Math.max(f, p[p.length - 1]))),
          g.length &&
            ((g =
              n > 1
                ? (function (t) {
                    var e,
                      n,
                      i,
                      a = {},
                      r = [];
                    for (e = 0, n = t.length; e < n; ++e)
                      a[(i = t[e])] || ((a[i] = !0), r.push(i));
                    return r;
                  })(g).sort(ii)
                : g.sort(ii)),
            (c = Math.min(c, g[0])),
            (f = Math.max(f, g[g.length - 1]))),
          (c = li(s, ai(d)) || c),
          (f = li(s, ri(d)) || f),
          (c = c === ti ? +u.startOf(Date.now(), h) : c),
          (f = f === Qn ? +u.endOf(Date.now(), h) + 1 : f),
          (s.min = Math.min(c, f)),
          (s.max = Math.max(c + 1, f)),
          (s._table = []),
          (s._timestamps = { data: g, datasets: m, labels: p });
      },
      buildTicks: function () {
        var t,
          e,
          n,
          i = this,
          a = i.min,
          r = i.max,
          o = i.options,
          s = o.ticks,
          l = o.time,
          u = i._timestamps,
          d = [],
          h = i.getLabelCapacity(a),
          c = s.source,
          f = o.distribution;
        for (
          u =
            "data" === c || ("auto" === c && "series" === f)
              ? u.data
              : "labels" === c
              ? u.labels
              : (function (t, e, n, i) {
                  var a,
                    r = t._adapter,
                    o = t.options,
                    s = o.time,
                    l = s.unit || ui(s.minUnit, e, n, i),
                    u = Kn([s.stepSize, s.unitStepSize, 1]),
                    d = "week" === l && s.isoWeekday,
                    h = e,
                    c = [];
                  if (
                    (d && (h = +r.startOf(h, "isoWeek", d)),
                    (h = +r.startOf(h, d ? "day" : l)),
                    r.diff(n, e, l) > 1e5 * u)
                  )
                    throw (
                      e +
                      " and " +
                      n +
                      " are too far apart with stepSize of " +
                      u +
                      " " +
                      l
                    );
                  for (a = h; a < n; a = +r.add(a, u, l)) c.push(a);
                  return (a !== n && "ticks" !== o.bounds) || c.push(a), c;
                })(i, a, r, h),
            "ticks" === o.bounds &&
              u.length &&
              ((a = u[0]), (r = u[u.length - 1])),
            a = li(i, ai(o)) || a,
            r = li(i, ri(o)) || r,
            t = 0,
            e = u.length;
          t < e;
          ++t
        )
          (n = u[t]) >= a && n <= r && d.push(n);
        return (
          (i.min = a),
          (i.max = r),
          (i._unit =
            l.unit ||
            (s.autoSkip
              ? ui(l.minUnit, i.min, i.max, h)
              : (function (t, e, n, i, a) {
                  var r, o;
                  for (r = ni.length - 1; r >= ni.indexOf(n); r--)
                    if (
                      ((o = ni[r]),
                      ei[o].common && t._adapter.diff(a, i, o) >= e - 1)
                    )
                      return o;
                  return ni[n ? ni.indexOf(n) : 0];
                })(i, d.length, l.minUnit, i.min, i.max))),
          (i._majorUnit =
            s.major.enabled && "year" !== i._unit
              ? (function (t) {
                  for (var e = ni.indexOf(t) + 1, n = ni.length; e < n; ++e)
                    if (ei[ni[e]].common) return ni[e];
                })(i._unit)
              : void 0),
          (i._table = (function (t, e, n, i) {
            if ("linear" === i || !t.length)
              return [
                { time: e, pos: 0 },
                { time: n, pos: 1 },
              ];
            var a,
              r,
              o,
              s,
              l,
              u = [],
              d = [e];
            for (a = 0, r = t.length; a < r; ++a)
              (s = t[a]) > e && s < n && d.push(s);
            for (d.push(n), a = 0, r = d.length; a < r; ++a)
              (l = d[a + 1]),
                (o = d[a - 1]),
                (s = d[a]),
                (void 0 !== o &&
                  void 0 !== l &&
                  Math.round((l + o) / 2) === s) ||
                  u.push({ time: s, pos: a / (r - 1) });
            return u;
          })(i._timestamps.data, a, r, f)),
          (i._offsets = (function (t, e, n, i, a) {
            var r,
              o,
              s = 0,
              l = 0;
            return (
              a.offset &&
                e.length &&
                ((r = oi(t, "time", e[0], "pos")),
                (s =
                  1 === e.length
                    ? 1 - r
                    : (oi(t, "time", e[1], "pos") - r) / 2),
                (o = oi(t, "time", e[e.length - 1], "pos")),
                (l =
                  1 === e.length
                    ? o
                    : (o - oi(t, "time", e[e.length - 2], "pos")) / 2)),
              { start: s, end: l, factor: 1 / (s + 1 + l) }
            );
          })(i._table, d, 0, 0, o)),
          s.reverse && d.reverse(),
          di(i, d, i._majorUnit)
        );
      },
      getLabelForIndex: function (t, e) {
        var n = this,
          i = n._adapter,
          a = n.chart.data,
          r = n.options.time,
          o = a.labels && t < a.labels.length ? a.labels[t] : "",
          s = a.datasets[e].data[t];
        return (
          H.isObject(s) && (o = n.getRightValue(s)),
          r.tooltipFormat
            ? i.format(si(n, o), r.tooltipFormat)
            : "string" == typeof o
            ? o
            : i.format(si(n, o), r.displayFormats.datetime)
        );
      },
      tickFormatFunction: function (t, e, n, i) {
        var a = this._adapter,
          r = this.options,
          o = r.time.displayFormats,
          s = o[this._unit],
          l = this._majorUnit,
          u = o[l],
          d = n[e],
          h = r.ticks,
          c = l && u && d && d.major,
          f = a.format(t, i || (c ? u : s)),
          g = c ? h.major : h.minor,
          m = Kn([g.callback, g.userCallback, h.callback, h.userCallback]);
        return m ? m(f, e, n) : f;
      },
      convertTicksToLabels: function (t) {
        var e,
          n,
          i = [];
        for (e = 0, n = t.length; e < n; ++e)
          i.push(this.tickFormatFunction(t[e].value, e, t));
        return i;
      },
      getPixelForOffset: function (t) {
        var e = this._offsets,
          n = oi(this._table, "time", t, "pos");
        return this.getPixelForDecimal((e.start + n) * e.factor);
      },
      getPixelForValue: function (t, e, n) {
        var i = null;
        if (
          (void 0 !== e &&
            void 0 !== n &&
            (i = this._timestamps.datasets[n][e]),
          null === i && (i = li(this, t)),
          null !== i)
        )
          return this.getPixelForOffset(i);
      },
      getPixelForTick: function (t) {
        var e = this.getTicks();
        return t >= 0 && t < e.length
          ? this.getPixelForOffset(e[t].value)
          : null;
      },
      getValueForPixel: function (t) {
        var e = this._offsets,
          n = this.getDecimalForPixel(t) / e.factor - e.end,
          i = oi(this._table, "pos", n, "time");
        return this._adapter._create(i);
      },
      _getLabelSize: function (t) {
        var e = this.options.ticks,
          n = this.ctx.measureText(t).width,
          i = H.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation),
          a = Math.cos(i),
          r = Math.sin(i),
          o = Jn(e.fontSize, W.global.defaultFontSize);
        return { w: n * a + o * r, h: n * r + o * a };
      },
      getLabelWidth: function (t) {
        return this._getLabelSize(t).w;
      },
      getLabelCapacity: function (t) {
        var e = this,
          n = e.options.time,
          i = n.displayFormats,
          a = i[n.unit] || i.millisecond,
          r = e.tickFormatFunction(t, 0, di(e, [t], e._majorUnit), a),
          o = e._getLabelSize(r),
          s = Math.floor(e.isHorizontal() ? e.width / o.w : e.height / o.h);
        return e.options.offset && s--, s > 0 ? s : 1;
      },
    }),
    ci = {
      position: "bottom",
      distribution: "linear",
      bounds: "data",
      adapters: {},
      time: {
        parser: !1,
        unit: !1,
        round: !1,
        displayFormat: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {},
      },
      ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } },
    };
  hi._defaults = ci;
  var fi = {
      category: wn,
      linear: On,
      logarithmic: Nn,
      radialLinear: Zn,
      time: hi,
    },
    gi = e(function (e, n) {
      e.exports = (function () {
        var n, i;
        function a() {
          return n.apply(null, arguments);
        }
        function r(t) {
          return (
            t instanceof Array ||
            "[object Array]" === Object.prototype.toString.call(t)
          );
        }
        function o(t) {
          return (
            null != t && "[object Object]" === Object.prototype.toString.call(t)
          );
        }
        function s(t) {
          return void 0 === t;
        }
        function l(t) {
          return (
            "number" == typeof t ||
            "[object Number]" === Object.prototype.toString.call(t)
          );
        }
        function u(t) {
          return (
            t instanceof Date ||
            "[object Date]" === Object.prototype.toString.call(t)
          );
        }
        function d(t, e) {
          var n,
            i = [];
          for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
          return i;
        }
        function h(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        function c(t, e) {
          for (var n in e) h(e, n) && (t[n] = e[n]);
          return (
            h(e, "toString") && (t.toString = e.toString),
            h(e, "valueOf") && (t.valueOf = e.valueOf),
            t
          );
        }
        function f(t, e, n, i) {
          return Ie(t, e, n, i, !0).utc();
        }
        function g(t) {
          return (
            null == t._pf &&
              (t._pf = {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1,
              }),
            t._pf
          );
        }
        function m(t) {
          if (null == t._isValid) {
            var e = g(t),
              n = i.call(e.parsedDateParts, function (t) {
                return null != t;
              }),
              a =
                !isNaN(t._d.getTime()) &&
                e.overflow < 0 &&
                !e.empty &&
                !e.invalidMonth &&
                !e.invalidWeekday &&
                !e.weekdayMismatch &&
                !e.nullInput &&
                !e.invalidFormat &&
                !e.userInvalidated &&
                (!e.meridiem || (e.meridiem && n));
            if (
              (t._strict &&
                (a =
                  a &&
                  0 === e.charsLeftOver &&
                  0 === e.unusedTokens.length &&
                  void 0 === e.bigHour),
              null != Object.isFrozen && Object.isFrozen(t))
            )
              return a;
            t._isValid = a;
          }
          return t._isValid;
        }
        function p(t) {
          var e = f(NaN);
          return null != t ? c(g(e), t) : (g(e).userInvalidated = !0), e;
        }
        i = Array.prototype.some
          ? Array.prototype.some
          : function (t) {
              for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
                if (i in e && t.call(this, e[i], i, e)) return !0;
              return !1;
            };
        var v = (a.momentProperties = []);
        function b(t, e) {
          var n, i, a;
          if (
            (s(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
            s(e._i) || (t._i = e._i),
            s(e._f) || (t._f = e._f),
            s(e._l) || (t._l = e._l),
            s(e._strict) || (t._strict = e._strict),
            s(e._tzm) || (t._tzm = e._tzm),
            s(e._isUTC) || (t._isUTC = e._isUTC),
            s(e._offset) || (t._offset = e._offset),
            s(e._pf) || (t._pf = g(e)),
            s(e._locale) || (t._locale = e._locale),
            v.length > 0)
          )
            for (n = 0; n < v.length; n++) s((a = e[(i = v[n])])) || (t[i] = a);
          return t;
        }
        var y = !1;
        function x(t) {
          b(this, t),
            (this._d = new Date(null != t._d ? t._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            !1 === y && ((y = !0), a.updateOffset(this), (y = !1));
        }
        function _(t) {
          return t instanceof x || (null != t && null != t._isAMomentObject);
        }
        function w(t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        }
        function k(t) {
          var e = +t,
            n = 0;
          return 0 !== e && isFinite(e) && (n = w(e)), n;
        }
        function M(t, e, n) {
          var i,
            a = Math.min(t.length, e.length),
            r = Math.abs(t.length - e.length),
            o = 0;
          for (i = 0; i < a; i++)
            ((n && t[i] !== e[i]) || (!n && k(t[i]) !== k(e[i]))) && o++;
          return o + r;
        }
        function S(t) {
          !1 === a.suppressDeprecationWarnings &&
            "undefined" != typeof console &&
            console.warn &&
            console.warn("Deprecation warning: " + t);
        }
        function D(t, e) {
          var n = !0;
          return c(function () {
            if (
              (null != a.deprecationHandler && a.deprecationHandler(null, t), n)
            ) {
              for (var i, r = [], o = 0; o < arguments.length; o++) {
                if (((i = ""), "object" == typeof arguments[o])) {
                  for (var s in ((i += "\n[" + o + "] "), arguments[0]))
                    i += s + ": " + arguments[0][s] + ", ";
                  i = i.slice(0, -2);
                } else i = arguments[o];
                r.push(i);
              }
              S(
                t +
                  "\nArguments: " +
                  Array.prototype.slice.call(r).join("") +
                  "\n" +
                  new Error().stack
              ),
                (n = !1);
            }
            return e.apply(this, arguments);
          }, e);
        }
        var C,
          P = {};
        function T(t, e) {
          null != a.deprecationHandler && a.deprecationHandler(t, e),
            P[t] || (S(e), (P[t] = !0));
        }
        function O(t) {
          return (
            t instanceof Function ||
            "[object Function]" === Object.prototype.toString.call(t)
          );
        }
        function A(t, e) {
          var n,
            i = c({}, t);
          for (n in e)
            h(e, n) &&
              (o(t[n]) && o(e[n])
                ? ((i[n] = {}), c(i[n], t[n]), c(i[n], e[n]))
                : null != e[n]
                ? (i[n] = e[n])
                : delete i[n]);
          for (n in t) h(t, n) && !h(e, n) && o(t[n]) && (i[n] = c({}, i[n]));
          return i;
        }
        function F(t) {
          null != t && this.set(t);
        }
        (a.suppressDeprecationWarnings = !1),
          (a.deprecationHandler = null),
          (C = Object.keys
            ? Object.keys
            : function (t) {
                var e,
                  n = [];
                for (e in t) h(t, e) && n.push(e);
                return n;
              });
        var I = {};
        function L(t, e) {
          var n = t.toLowerCase();
          I[n] = I[n + "s"] = I[e] = t;
        }
        function R(t) {
          return "string" == typeof t ? I[t] || I[t.toLowerCase()] : void 0;
        }
        function N(t) {
          var e,
            n,
            i = {};
          for (n in t) h(t, n) && (e = R(n)) && (i[e] = t[n]);
          return i;
        }
        var W = {};
        function Y(t, e) {
          W[t] = e;
        }
        function z(t, e, n) {
          var i = "" + Math.abs(t),
            a = e - i.length;
          return (
            (t >= 0 ? (n ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, a)).toString().substr(1) +
            i
          );
        }
        var E =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          V = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          H = {},
          B = {};
        function j(t, e, n, i) {
          var a = i;
          "string" == typeof i &&
            (a = function () {
              return this[i]();
            }),
            t && (B[t] = a),
            e &&
              (B[e[0]] = function () {
                return z(a.apply(this, arguments), e[1], e[2]);
              }),
            n &&
              (B[n] = function () {
                return this.localeData().ordinal(a.apply(this, arguments), t);
              });
        }
        function U(t, e) {
          return t.isValid()
            ? ((e = G(e, t.localeData())),
              (H[e] =
                H[e] ||
                (function (t) {
                  var e,
                    n,
                    i,
                    a = t.match(E);
                  for (e = 0, n = a.length; e < n; e++)
                    B[a[e]]
                      ? (a[e] = B[a[e]])
                      : (a[e] = (i = a[e]).match(/\[[\s\S]/)
                          ? i.replace(/^\[|\]$/g, "")
                          : i.replace(/\\/g, ""));
                  return function (e) {
                    var i,
                      r = "";
                    for (i = 0; i < n; i++)
                      r += O(a[i]) ? a[i].call(e, t) : a[i];
                    return r;
                  };
                })(e)),
              H[e](t))
            : t.localeData().invalidDate();
        }
        function G(t, e) {
          var n = 5;
          function i(t) {
            return e.longDateFormat(t) || t;
          }
          for (V.lastIndex = 0; n >= 0 && V.test(t); )
            (t = t.replace(V, i)), (V.lastIndex = 0), (n -= 1);
          return t;
        }
        var q = /\d/,
          Z = /\d\d/,
          $ = /\d{3}/,
          X = /\d{4}/,
          K = /[+-]?\d{6}/,
          J = /\d\d?/,
          Q = /\d\d\d\d?/,
          tt = /\d\d\d\d\d\d?/,
          et = /\d{1,3}/,
          nt = /\d{1,4}/,
          it = /[+-]?\d{1,6}/,
          at = /\d+/,
          rt = /[+-]?\d+/,
          ot = /Z|[+-]\d\d:?\d\d/gi,
          st = /Z|[+-]\d\d(?::?\d\d)?/gi,
          lt =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          ut = {};
        function dt(t, e, n) {
          ut[t] = O(e)
            ? e
            : function (t, i) {
                return t && n ? n : e;
              };
        }
        function ht(t, e) {
          return h(ut, t)
            ? ut[t](e._strict, e._locale)
            : new RegExp(
                ct(
                  t
                    .replace("\\", "")
                    .replace(
                      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                      function (t, e, n, i, a) {
                        return e || n || i || a;
                      }
                    )
                )
              );
        }
        function ct(t) {
          return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        var ft = {};
        function gt(t, e) {
          var n,
            i = e;
          for (
            "string" == typeof t && (t = [t]),
              l(e) &&
                (i = function (t, n) {
                  n[e] = k(t);
                }),
              n = 0;
            n < t.length;
            n++
          )
            ft[t[n]] = i;
        }
        function mt(t, e) {
          gt(t, function (t, n, i, a) {
            (i._w = i._w || {}), e(t, i._w, i, a);
          });
        }
        function pt(t, e, n) {
          null != e && h(ft, t) && ft[t](e, n._a, n, t);
        }
        var vt = 0,
          bt = 1,
          yt = 2,
          xt = 3,
          _t = 4,
          wt = 5,
          kt = 6,
          Mt = 7,
          St = 8;
        function Dt(t) {
          return Ct(t) ? 366 : 365;
        }
        function Ct(t) {
          return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
        }
        j("Y", 0, 0, function () {
          var t = this.year();
          return t <= 9999 ? "" + t : "+" + t;
        }),
          j(0, ["YY", 2], 0, function () {
            return this.year() % 100;
          }),
          j(0, ["YYYY", 4], 0, "year"),
          j(0, ["YYYYY", 5], 0, "year"),
          j(0, ["YYYYYY", 6, !0], 0, "year"),
          L("year", "y"),
          Y("year", 1),
          dt("Y", rt),
          dt("YY", J, Z),
          dt("YYYY", nt, X),
          dt("YYYYY", it, K),
          dt("YYYYYY", it, K),
          gt(["YYYYY", "YYYYYY"], vt),
          gt("YYYY", function (t, e) {
            e[vt] = 2 === t.length ? a.parseTwoDigitYear(t) : k(t);
          }),
          gt("YY", function (t, e) {
            e[vt] = a.parseTwoDigitYear(t);
          }),
          gt("Y", function (t, e) {
            e[vt] = parseInt(t, 10);
          }),
          (a.parseTwoDigitYear = function (t) {
            return k(t) + (k(t) > 68 ? 1900 : 2e3);
          });
        var Pt,
          Tt = Ot("FullYear", !0);
        function Ot(t, e) {
          return function (n) {
            return null != n
              ? (Ft(this, t, n), a.updateOffset(this, e), this)
              : At(this, t);
          };
        }
        function At(t, e) {
          return t.isValid()
            ? t._d["get" + (t._isUTC ? "UTC" : "") + e]()
            : NaN;
        }
        function Ft(t, e, n) {
          t.isValid() &&
            !isNaN(n) &&
            ("FullYear" === e &&
            Ct(t.year()) &&
            1 === t.month() &&
            29 === t.date()
              ? t._d["set" + (t._isUTC ? "UTC" : "") + e](
                  n,
                  t.month(),
                  It(n, t.month())
                )
              : t._d["set" + (t._isUTC ? "UTC" : "") + e](n));
        }
        function It(t, e) {
          if (isNaN(t) || isNaN(e)) return NaN;
          var n = (function (t, e) {
            return ((t % e) + e) % e;
          })(e, 12);
          return (
            (t += (e - n) / 12),
            1 === n ? (Ct(t) ? 29 : 28) : 31 - ((n % 7) % 2)
          );
        }
        (Pt = Array.prototype.indexOf
          ? Array.prototype.indexOf
          : function (t) {
              var e;
              for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
              return -1;
            }),
          j("M", ["MM", 2], "Mo", function () {
            return this.month() + 1;
          }),
          j("MMM", 0, 0, function (t) {
            return this.localeData().monthsShort(this, t);
          }),
          j("MMMM", 0, 0, function (t) {
            return this.localeData().months(this, t);
          }),
          L("month", "M"),
          Y("month", 8),
          dt("M", J),
          dt("MM", J, Z),
          dt("MMM", function (t, e) {
            return e.monthsShortRegex(t);
          }),
          dt("MMMM", function (t, e) {
            return e.monthsRegex(t);
          }),
          gt(["M", "MM"], function (t, e) {
            e[bt] = k(t) - 1;
          }),
          gt(["MMM", "MMMM"], function (t, e, n, i) {
            var a = n._locale.monthsParse(t, i, n._strict);
            null != a ? (e[bt] = a) : (g(n).invalidMonth = t);
          });
        var Lt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          Rt =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          Nt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
        function Wt(t, e, n) {
          var i,
            a,
            r,
            o = t.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                i = 0;
              i < 12;
              ++i
            )
              (r = f([2e3, i])),
                (this._shortMonthsParse[i] = this.monthsShort(
                  r,
                  ""
                ).toLocaleLowerCase()),
                (this._longMonthsParse[i] = this.months(
                  r,
                  ""
                ).toLocaleLowerCase());
          return n
            ? "MMM" === e
              ? -1 !== (a = Pt.call(this._shortMonthsParse, o))
                ? a
                : null
              : -1 !== (a = Pt.call(this._longMonthsParse, o))
              ? a
              : null
            : "MMM" === e
            ? -1 !== (a = Pt.call(this._shortMonthsParse, o))
              ? a
              : -1 !== (a = Pt.call(this._longMonthsParse, o))
              ? a
              : null
            : -1 !== (a = Pt.call(this._longMonthsParse, o))
            ? a
            : -1 !== (a = Pt.call(this._shortMonthsParse, o))
            ? a
            : null;
        }
        function Yt(t, e) {
          var n;
          if (!t.isValid()) return t;
          if ("string" == typeof e)
            if (/^\d+$/.test(e)) e = k(e);
            else if (!l((e = t.localeData().monthsParse(e)))) return t;
          return (
            (n = Math.min(t.date(), It(t.year(), e))),
            t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n),
            t
          );
        }
        function zt(t) {
          return null != t
            ? (Yt(this, t), a.updateOffset(this, !0), this)
            : At(this, "Month");
        }
        var Et = lt,
          Vt = lt;
        function Ht() {
          function t(t, e) {
            return e.length - t.length;
          }
          var e,
            n,
            i = [],
            a = [],
            r = [];
          for (e = 0; e < 12; e++)
            (n = f([2e3, e])),
              i.push(this.monthsShort(n, "")),
              a.push(this.months(n, "")),
              r.push(this.months(n, "")),
              r.push(this.monthsShort(n, ""));
          for (i.sort(t), a.sort(t), r.sort(t), e = 0; e < 12; e++)
            (i[e] = ct(i[e])), (a[e] = ct(a[e]));
          for (e = 0; e < 24; e++) r[e] = ct(r[e]);
          (this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i")),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
              "^(" + a.join("|") + ")",
              "i"
            )),
            (this._monthsShortStrictRegex = new RegExp(
              "^(" + i.join("|") + ")",
              "i"
            ));
        }
        function Bt(t, e, n, i, a, r, o) {
          var s;
          return (
            t < 100 && t >= 0
              ? ((s = new Date(t + 400, e, n, i, a, r, o)),
                isFinite(s.getFullYear()) && s.setFullYear(t))
              : (s = new Date(t, e, n, i, a, r, o)),
            s
          );
        }
        function jt(t) {
          var e;
          if (t < 100 && t >= 0) {
            var n = Array.prototype.slice.call(arguments);
            (n[0] = t + 400),
              (e = new Date(Date.UTC.apply(null, n))),
              isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t);
          } else e = new Date(Date.UTC.apply(null, arguments));
          return e;
        }
        function Ut(t, e, n) {
          var i = 7 + e - n;
          return (-(7 + jt(t, 0, i).getUTCDay() - e) % 7) + i - 1;
        }
        function Gt(t, e, n, i, a) {
          var r,
            o,
            s = 1 + 7 * (e - 1) + ((7 + n - i) % 7) + Ut(t, i, a);
          return (
            s <= 0
              ? (o = Dt((r = t - 1)) + s)
              : s > Dt(t)
              ? ((r = t + 1), (o = s - Dt(t)))
              : ((r = t), (o = s)),
            { year: r, dayOfYear: o }
          );
        }
        function qt(t, e, n) {
          var i,
            a,
            r = Ut(t.year(), e, n),
            o = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
          return (
            o < 1
              ? (i = o + Zt((a = t.year() - 1), e, n))
              : o > Zt(t.year(), e, n)
              ? ((i = o - Zt(t.year(), e, n)), (a = t.year() + 1))
              : ((a = t.year()), (i = o)),
            { week: i, year: a }
          );
        }
        function Zt(t, e, n) {
          var i = Ut(t, e, n),
            a = Ut(t + 1, e, n);
          return (Dt(t) - i + a) / 7;
        }
        function $t(t, e) {
          return t.slice(e, 7).concat(t.slice(0, e));
        }
        j("w", ["ww", 2], "wo", "week"),
          j("W", ["WW", 2], "Wo", "isoWeek"),
          L("week", "w"),
          L("isoWeek", "W"),
          Y("week", 5),
          Y("isoWeek", 5),
          dt("w", J),
          dt("ww", J, Z),
          dt("W", J),
          dt("WW", J, Z),
          mt(["w", "ww", "W", "WW"], function (t, e, n, i) {
            e[i.substr(0, 1)] = k(t);
          }),
          j("d", 0, "do", "day"),
          j("dd", 0, 0, function (t) {
            return this.localeData().weekdaysMin(this, t);
          }),
          j("ddd", 0, 0, function (t) {
            return this.localeData().weekdaysShort(this, t);
          }),
          j("dddd", 0, 0, function (t) {
            return this.localeData().weekdays(this, t);
          }),
          j("e", 0, 0, "weekday"),
          j("E", 0, 0, "isoWeekday"),
          L("day", "d"),
          L("weekday", "e"),
          L("isoWeekday", "E"),
          Y("day", 11),
          Y("weekday", 11),
          Y("isoWeekday", 11),
          dt("d", J),
          dt("e", J),
          dt("E", J),
          dt("dd", function (t, e) {
            return e.weekdaysMinRegex(t);
          }),
          dt("ddd", function (t, e) {
            return e.weekdaysShortRegex(t);
          }),
          dt("dddd", function (t, e) {
            return e.weekdaysRegex(t);
          }),
          mt(["dd", "ddd", "dddd"], function (t, e, n, i) {
            var a = n._locale.weekdaysParse(t, i, n._strict);
            null != a ? (e.d = a) : (g(n).invalidWeekday = t);
          }),
          mt(["d", "e", "E"], function (t, e, n, i) {
            e[i] = k(t);
          });
        var Xt =
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          Kt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          Jt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        function Qt(t, e, n) {
          var i,
            a,
            r,
            o = t.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                i = 0;
              i < 7;
              ++i
            )
              (r = f([2e3, 1]).day(i)),
                (this._minWeekdaysParse[i] = this.weekdaysMin(
                  r,
                  ""
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[i] = this.weekdaysShort(
                  r,
                  ""
                ).toLocaleLowerCase()),
                (this._weekdaysParse[i] = this.weekdays(
                  r,
                  ""
                ).toLocaleLowerCase());
          return n
            ? "dddd" === e
              ? -1 !== (a = Pt.call(this._weekdaysParse, o))
                ? a
                : null
              : "ddd" === e
              ? -1 !== (a = Pt.call(this._shortWeekdaysParse, o))
                ? a
                : null
              : -1 !== (a = Pt.call(this._minWeekdaysParse, o))
              ? a
              : null
            : "dddd" === e
            ? -1 !== (a = Pt.call(this._weekdaysParse, o))
              ? a
              : -1 !== (a = Pt.call(this._shortWeekdaysParse, o))
              ? a
              : -1 !== (a = Pt.call(this._minWeekdaysParse, o))
              ? a
              : null
            : "ddd" === e
            ? -1 !== (a = Pt.call(this._shortWeekdaysParse, o))
              ? a
              : -1 !== (a = Pt.call(this._weekdaysParse, o))
              ? a
              : -1 !== (a = Pt.call(this._minWeekdaysParse, o))
              ? a
              : null
            : -1 !== (a = Pt.call(this._minWeekdaysParse, o))
            ? a
            : -1 !== (a = Pt.call(this._weekdaysParse, o))
            ? a
            : -1 !== (a = Pt.call(this._shortWeekdaysParse, o))
            ? a
            : null;
        }
        var te = lt,
          ee = lt,
          ne = lt;
        function ie() {
          function t(t, e) {
            return e.length - t.length;
          }
          var e,
            n,
            i,
            a,
            r,
            o = [],
            s = [],
            l = [],
            u = [];
          for (e = 0; e < 7; e++)
            (n = f([2e3, 1]).day(e)),
              (i = this.weekdaysMin(n, "")),
              (a = this.weekdaysShort(n, "")),
              (r = this.weekdays(n, "")),
              o.push(i),
              s.push(a),
              l.push(r),
              u.push(i),
              u.push(a),
              u.push(r);
          for (o.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++)
            (s[e] = ct(s[e])), (l[e] = ct(l[e])), (u[e] = ct(u[e]));
          (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
              "^(" + l.join("|") + ")",
              "i"
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
              "^(" + s.join("|") + ")",
              "i"
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
              "^(" + o.join("|") + ")",
              "i"
            ));
        }
        function ae() {
          return this.hours() % 12 || 12;
        }
        function re(t, e) {
          j(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e);
          });
        }
        function oe(t, e) {
          return e._meridiemParse;
        }
        j("H", ["HH", 2], 0, "hour"),
          j("h", ["hh", 2], 0, ae),
          j("k", ["kk", 2], 0, function () {
            return this.hours() || 24;
          }),
          j("hmm", 0, 0, function () {
            return "" + ae.apply(this) + z(this.minutes(), 2);
          }),
          j("hmmss", 0, 0, function () {
            return (
              "" + ae.apply(this) + z(this.minutes(), 2) + z(this.seconds(), 2)
            );
          }),
          j("Hmm", 0, 0, function () {
            return "" + this.hours() + z(this.minutes(), 2);
          }),
          j("Hmmss", 0, 0, function () {
            return (
              "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2)
            );
          }),
          re("a", !0),
          re("A", !1),
          L("hour", "h"),
          Y("hour", 13),
          dt("a", oe),
          dt("A", oe),
          dt("H", J),
          dt("h", J),
          dt("k", J),
          dt("HH", J, Z),
          dt("hh", J, Z),
          dt("kk", J, Z),
          dt("hmm", Q),
          dt("hmmss", tt),
          dt("Hmm", Q),
          dt("Hmmss", tt),
          gt(["H", "HH"], xt),
          gt(["k", "kk"], function (t, e, n) {
            var i = k(t);
            e[xt] = 24 === i ? 0 : i;
          }),
          gt(["a", "A"], function (t, e, n) {
            (n._isPm = n._locale.isPM(t)), (n._meridiem = t);
          }),
          gt(["h", "hh"], function (t, e, n) {
            (e[xt] = k(t)), (g(n).bigHour = !0);
          }),
          gt("hmm", function (t, e, n) {
            var i = t.length - 2;
            (e[xt] = k(t.substr(0, i))),
              (e[_t] = k(t.substr(i))),
              (g(n).bigHour = !0);
          }),
          gt("hmmss", function (t, e, n) {
            var i = t.length - 4,
              a = t.length - 2;
            (e[xt] = k(t.substr(0, i))),
              (e[_t] = k(t.substr(i, 2))),
              (e[wt] = k(t.substr(a))),
              (g(n).bigHour = !0);
          }),
          gt("Hmm", function (t, e, n) {
            var i = t.length - 2;
            (e[xt] = k(t.substr(0, i))), (e[_t] = k(t.substr(i)));
          }),
          gt("Hmmss", function (t, e, n) {
            var i = t.length - 4,
              a = t.length - 2;
            (e[xt] = k(t.substr(0, i))),
              (e[_t] = k(t.substr(i, 2))),
              (e[wt] = k(t.substr(a)));
          });
        var se,
          le = Ot("Hours", !0),
          ue = {
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            longDateFormat: {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A",
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            months: Rt,
            monthsShort: Nt,
            week: { dow: 0, doy: 6 },
            weekdays: Xt,
            weekdaysMin: Jt,
            weekdaysShort: Kt,
            meridiemParse: /[ap]\.?m?\.?/i,
          },
          de = {},
          he = {};
        function ce(t) {
          return t ? t.toLowerCase().replace("_", "-") : t;
        }
        function fe(n) {
          var i = null;
          if (!de[n] && e && e.exports)
            try {
              (i = se._abbr), t(), ge(i);
            } catch (t) {}
          return de[n];
        }
        function ge(t, e) {
          var n;
          return (
            t &&
              ((n = s(e) ? pe(t) : me(t, e))
                ? (se = n)
                : "undefined" != typeof console &&
                  console.warn &&
                  console.warn(
                    "Locale " + t + " not found. Did you forget to load it?"
                  )),
            se._abbr
          );
        }
        function me(t, e) {
          if (null !== e) {
            var n,
              i = ue;
            if (((e.abbr = t), null != de[t]))
              T(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
              ),
                (i = de[t]._config);
            else if (null != e.parentLocale)
              if (null != de[e.parentLocale]) i = de[e.parentLocale]._config;
              else {
                if (null == (n = fe(e.parentLocale)))
                  return (
                    he[e.parentLocale] || (he[e.parentLocale] = []),
                    he[e.parentLocale].push({ name: t, config: e }),
                    null
                  );
                i = n._config;
              }
            return (
              (de[t] = new F(A(i, e))),
              he[t] &&
                he[t].forEach(function (t) {
                  me(t.name, t.config);
                }),
              ge(t),
              de[t]
            );
          }
          return delete de[t], null;
        }
        function pe(t) {
          var e;
          if ((t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t))
            return se;
          if (!r(t)) {
            if ((e = fe(t))) return e;
            t = [t];
          }
          return (function (t) {
            for (var e, n, i, a, r = 0; r < t.length; ) {
              for (
                e = (a = ce(t[r]).split("-")).length,
                  n = (n = ce(t[r + 1])) ? n.split("-") : null;
                e > 0;

              ) {
                if ((i = fe(a.slice(0, e).join("-")))) return i;
                if (n && n.length >= e && M(a, n, !0) >= e - 1) break;
                e--;
              }
              r++;
            }
            return se;
          })(t);
        }
        function ve(t) {
          var e,
            n = t._a;
          return (
            n &&
              -2 === g(t).overflow &&
              ((e =
                n[bt] < 0 || n[bt] > 11
                  ? bt
                  : n[yt] < 1 || n[yt] > It(n[vt], n[bt])
                  ? yt
                  : n[xt] < 0 ||
                    n[xt] > 24 ||
                    (24 === n[xt] &&
                      (0 !== n[_t] || 0 !== n[wt] || 0 !== n[kt]))
                  ? xt
                  : n[_t] < 0 || n[_t] > 59
                  ? _t
                  : n[wt] < 0 || n[wt] > 59
                  ? wt
                  : n[kt] < 0 || n[kt] > 999
                  ? kt
                  : -1),
              g(t)._overflowDayOfYear && (e < vt || e > yt) && (e = yt),
              g(t)._overflowWeeks && -1 === e && (e = Mt),
              g(t)._overflowWeekday && -1 === e && (e = St),
              (g(t).overflow = e)),
            t
          );
        }
        function be(t, e, n) {
          return null != t ? t : null != e ? e : n;
        }
        function ye(t) {
          var e,
            n,
            i,
            r,
            o,
            s = [];
          if (!t._d) {
            for (
              i = (function (t) {
                var e = new Date(a.now());
                return t._useUTC
                  ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]
                  : [e.getFullYear(), e.getMonth(), e.getDate()];
              })(t),
                t._w &&
                  null == t._a[yt] &&
                  null == t._a[bt] &&
                  (function (t) {
                    var e, n, i, a, r, o, s, l;
                    if (null != (e = t._w).GG || null != e.W || null != e.E)
                      (r = 1),
                        (o = 4),
                        (n = be(e.GG, t._a[vt], qt(Le(), 1, 4).year)),
                        (i = be(e.W, 1)),
                        ((a = be(e.E, 1)) < 1 || a > 7) && (l = !0);
                    else {
                      (r = t._locale._week.dow), (o = t._locale._week.doy);
                      var u = qt(Le(), r, o);
                      (n = be(e.gg, t._a[vt], u.year)),
                        (i = be(e.w, u.week)),
                        null != e.d
                          ? ((a = e.d) < 0 || a > 6) && (l = !0)
                          : null != e.e
                          ? ((a = e.e + r), (e.e < 0 || e.e > 6) && (l = !0))
                          : (a = r);
                    }
                    i < 1 || i > Zt(n, r, o)
                      ? (g(t)._overflowWeeks = !0)
                      : null != l
                      ? (g(t)._overflowWeekday = !0)
                      : ((s = Gt(n, i, a, r, o)),
                        (t._a[vt] = s.year),
                        (t._dayOfYear = s.dayOfYear));
                  })(t),
                null != t._dayOfYear &&
                  ((o = be(t._a[vt], i[vt])),
                  (t._dayOfYear > Dt(o) || 0 === t._dayOfYear) &&
                    (g(t)._overflowDayOfYear = !0),
                  (n = jt(o, 0, t._dayOfYear)),
                  (t._a[bt] = n.getUTCMonth()),
                  (t._a[yt] = n.getUTCDate())),
                e = 0;
              e < 3 && null == t._a[e];
              ++e
            )
              t._a[e] = s[e] = i[e];
            for (; e < 7; e++)
              t._a[e] = s[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
            24 === t._a[xt] &&
              0 === t._a[_t] &&
              0 === t._a[wt] &&
              0 === t._a[kt] &&
              ((t._nextDay = !0), (t._a[xt] = 0)),
              (t._d = (t._useUTC ? jt : Bt).apply(null, s)),
              (r = t._useUTC ? t._d.getUTCDay() : t._d.getDay()),
              null != t._tzm &&
                t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
              t._nextDay && (t._a[xt] = 24),
              t._w &&
                void 0 !== t._w.d &&
                t._w.d !== r &&
                (g(t).weekdayMismatch = !0);
          }
        }
        var xe =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          _e =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          we = /Z|[+-]\d\d(?::?\d\d)?/,
          ke = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
          ],
          Me = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
          ],
          Se = /^\/?Date\((\-?\d+)/i;
        function De(t) {
          var e,
            n,
            i,
            a,
            r,
            o,
            s = t._i,
            l = xe.exec(s) || _e.exec(s);
          if (l) {
            for (g(t).iso = !0, e = 0, n = ke.length; e < n; e++)
              if (ke[e][1].exec(l[1])) {
                (a = ke[e][0]), (i = !1 !== ke[e][2]);
                break;
              }
            if (null == a) return void (t._isValid = !1);
            if (l[3]) {
              for (e = 0, n = Me.length; e < n; e++)
                if (Me[e][1].exec(l[3])) {
                  r = (l[2] || " ") + Me[e][0];
                  break;
                }
              if (null == r) return void (t._isValid = !1);
            }
            if (!i && null != r) return void (t._isValid = !1);
            if (l[4]) {
              if (!we.exec(l[4])) return void (t._isValid = !1);
              o = "Z";
            }
            (t._f = a + (r || "") + (o || "")), Ae(t);
          } else t._isValid = !1;
        }
        var Ce =
          /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
        function Pe(t) {
          var e = parseInt(t, 10);
          return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
        }
        var Te = {
          UT: 0,
          GMT: 0,
          EDT: -240,
          EST: -300,
          CDT: -300,
          CST: -360,
          MDT: -360,
          MST: -420,
          PDT: -420,
          PST: -480,
        };
        function Oe(t) {
          var e,
            n,
            i,
            a,
            r,
            o,
            s,
            l = Ce.exec(
              t._i
                .replace(/\([^)]*\)|[\n\t]/g, " ")
                .replace(/(\s\s+)/g, " ")
                .replace(/^\s\s*/, "")
                .replace(/\s\s*$/, "")
            );
          if (l) {
            var u =
              ((e = l[4]),
              (n = l[3]),
              (i = l[2]),
              (a = l[5]),
              (r = l[6]),
              (o = l[7]),
              (s = [
                Pe(e),
                Nt.indexOf(n),
                parseInt(i, 10),
                parseInt(a, 10),
                parseInt(r, 10),
              ]),
              o && s.push(parseInt(o, 10)),
              s);
            if (
              !(function (t, e, n) {
                return (
                  !t ||
                  Kt.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() ||
                  ((g(n).weekdayMismatch = !0), (n._isValid = !1), !1)
                );
              })(l[1], u, t)
            )
              return;
            (t._a = u),
              (t._tzm = (function (t, e, n) {
                if (t) return Te[t];
                if (e) return 0;
                var i = parseInt(n, 10),
                  a = i % 100;
                return ((i - a) / 100) * 60 + a;
              })(l[8], l[9], l[10])),
              (t._d = jt.apply(null, t._a)),
              t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
              (g(t).rfc2822 = !0);
          } else t._isValid = !1;
        }
        function Ae(t) {
          if (t._f !== a.ISO_8601)
            if (t._f !== a.RFC_2822) {
              (t._a = []), (g(t).empty = !0);
              var e,
                n,
                i,
                r,
                o,
                s = "" + t._i,
                l = s.length,
                u = 0;
              for (
                i = G(t._f, t._locale).match(E) || [], e = 0;
                e < i.length;
                e++
              )
                (r = i[e]),
                  (n = (s.match(ht(r, t)) || [])[0]) &&
                    ((o = s.substr(0, s.indexOf(n))).length > 0 &&
                      g(t).unusedInput.push(o),
                    (s = s.slice(s.indexOf(n) + n.length)),
                    (u += n.length)),
                  B[r]
                    ? (n ? (g(t).empty = !1) : g(t).unusedTokens.push(r),
                      pt(r, n, t))
                    : t._strict && !n && g(t).unusedTokens.push(r);
              (g(t).charsLeftOver = l - u),
                s.length > 0 && g(t).unusedInput.push(s),
                t._a[xt] <= 12 &&
                  !0 === g(t).bigHour &&
                  t._a[xt] > 0 &&
                  (g(t).bigHour = void 0),
                (g(t).parsedDateParts = t._a.slice(0)),
                (g(t).meridiem = t._meridiem),
                (t._a[xt] = (function (t, e, n) {
                  var i;
                  return null == n
                    ? e
                    : null != t.meridiemHour
                    ? t.meridiemHour(e, n)
                    : null != t.isPM
                    ? ((i = t.isPM(n)) && e < 12 && (e += 12),
                      i || 12 !== e || (e = 0),
                      e)
                    : e;
                })(t._locale, t._a[xt], t._meridiem)),
                ye(t),
                ve(t);
            } else Oe(t);
          else De(t);
        }
        function Fe(t) {
          var e = t._i,
            n = t._f;
          return (
            (t._locale = t._locale || pe(t._l)),
            null === e || (void 0 === n && "" === e)
              ? p({ nullInput: !0 })
              : ("string" == typeof e && (t._i = e = t._locale.preparse(e)),
                _(e)
                  ? new x(ve(e))
                  : (u(e)
                      ? (t._d = e)
                      : r(n)
                      ? (function (t) {
                          var e, n, i, a, r;
                          if (0 === t._f.length)
                            return (
                              (g(t).invalidFormat = !0),
                              void (t._d = new Date(NaN))
                            );
                          for (a = 0; a < t._f.length; a++)
                            (r = 0),
                              (e = b({}, t)),
                              null != t._useUTC && (e._useUTC = t._useUTC),
                              (e._f = t._f[a]),
                              Ae(e),
                              m(e) &&
                                ((r += g(e).charsLeftOver),
                                (r += 10 * g(e).unusedTokens.length),
                                (g(e).score = r),
                                (null == i || r < i) && ((i = r), (n = e)));
                          c(t, n || e);
                        })(t)
                      : n
                      ? Ae(t)
                      : (function (t) {
                          var e = t._i;
                          s(e)
                            ? (t._d = new Date(a.now()))
                            : u(e)
                            ? (t._d = new Date(e.valueOf()))
                            : "string" == typeof e
                            ? (function (t) {
                                var e = Se.exec(t._i);
                                null === e
                                  ? (De(t),
                                    !1 === t._isValid &&
                                      (delete t._isValid,
                                      Oe(t),
                                      !1 === t._isValid &&
                                        (delete t._isValid,
                                        a.createFromInputFallback(t))))
                                  : (t._d = new Date(+e[1]));
                              })(t)
                            : r(e)
                            ? ((t._a = d(e.slice(0), function (t) {
                                return parseInt(t, 10);
                              })),
                              ye(t))
                            : o(e)
                            ? (function (t) {
                                if (!t._d) {
                                  var e = N(t._i);
                                  (t._a = d(
                                    [
                                      e.year,
                                      e.month,
                                      e.day || e.date,
                                      e.hour,
                                      e.minute,
                                      e.second,
                                      e.millisecond,
                                    ],
                                    function (t) {
                                      return t && parseInt(t, 10);
                                    }
                                  )),
                                    ye(t);
                                }
                              })(t)
                            : l(e)
                            ? (t._d = new Date(e))
                            : a.createFromInputFallback(t);
                        })(t),
                    m(t) || (t._d = null),
                    t))
          );
        }
        function Ie(t, e, n, i, a) {
          var s,
            l = {};
          return (
            (!0 !== n && !1 !== n) || ((i = n), (n = void 0)),
            ((o(t) &&
              (function (t) {
                if (Object.getOwnPropertyNames)
                  return 0 === Object.getOwnPropertyNames(t).length;
                var e;
                for (e in t) if (t.hasOwnProperty(e)) return !1;
                return !0;
              })(t)) ||
              (r(t) && 0 === t.length)) &&
              (t = void 0),
            (l._isAMomentObject = !0),
            (l._useUTC = l._isUTC = a),
            (l._l = n),
            (l._i = t),
            (l._f = e),
            (l._strict = i),
            (s = new x(ve(Fe(l))))._nextDay &&
              (s.add(1, "d"), (s._nextDay = void 0)),
            s
          );
        }
        function Le(t, e, n, i) {
          return Ie(t, e, n, i, !1);
        }
        (a.createFromInputFallback = D(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function (t) {
            t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
          }
        )),
          (a.ISO_8601 = function () {}),
          (a.RFC_2822 = function () {});
        var Re = D(
            "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var t = Le.apply(null, arguments);
              return this.isValid() && t.isValid()
                ? t < this
                  ? this
                  : t
                : p();
            }
          ),
          Ne = D(
            "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var t = Le.apply(null, arguments);
              return this.isValid() && t.isValid()
                ? t > this
                  ? this
                  : t
                : p();
            }
          );
        function We(t, e) {
          var n, i;
          if ((1 === e.length && r(e[0]) && (e = e[0]), !e.length)) return Le();
          for (n = e[0], i = 1; i < e.length; ++i)
            (e[i].isValid() && !e[i][t](n)) || (n = e[i]);
          return n;
        }
        var Ye = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond",
        ];
        function ze(t) {
          var e = N(t),
            n = e.year || 0,
            i = e.quarter || 0,
            a = e.month || 0,
            r = e.week || e.isoWeek || 0,
            o = e.day || 0,
            s = e.hour || 0,
            l = e.minute || 0,
            u = e.second || 0,
            d = e.millisecond || 0;
          (this._isValid = (function (t) {
            for (var e in t)
              if (-1 === Pt.call(Ye, e) || (null != t[e] && isNaN(t[e])))
                return !1;
            for (var n = !1, i = 0; i < Ye.length; ++i)
              if (t[Ye[i]]) {
                if (n) return !1;
                parseFloat(t[Ye[i]]) !== k(t[Ye[i]]) && (n = !0);
              }
            return !0;
          })(e)),
            (this._milliseconds = +d + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60),
            (this._days = +o + 7 * r),
            (this._months = +a + 3 * i + 12 * n),
            (this._data = {}),
            (this._locale = pe()),
            this._bubble();
        }
        function Ee(t) {
          return t instanceof ze;
        }
        function Ve(t) {
          return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
        }
        function He(t, e) {
          j(t, 0, 0, function () {
            var t = this.utcOffset(),
              n = "+";
            return (
              t < 0 && ((t = -t), (n = "-")),
              n + z(~~(t / 60), 2) + e + z(~~t % 60, 2)
            );
          });
        }
        He("Z", ":"),
          He("ZZ", ""),
          dt("Z", st),
          dt("ZZ", st),
          gt(["Z", "ZZ"], function (t, e, n) {
            (n._useUTC = !0), (n._tzm = je(st, t));
          });
        var Be = /([\+\-]|\d\d)/gi;
        function je(t, e) {
          var n = (e || "").match(t);
          if (null === n) return null;
          var i = ((n[n.length - 1] || []) + "").match(Be) || ["-", 0, 0],
            a = 60 * i[1] + k(i[2]);
          return 0 === a ? 0 : "+" === i[0] ? a : -a;
        }
        function Ue(t, e) {
          var n, i;
          return e._isUTC
            ? ((n = e.clone()),
              (i =
                (_(t) || u(t) ? t.valueOf() : Le(t).valueOf()) - n.valueOf()),
              n._d.setTime(n._d.valueOf() + i),
              a.updateOffset(n, !1),
              n)
            : Le(t).local();
        }
        function Ge(t) {
          return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
        }
        function qe() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }
        a.updateOffset = function () {};
        var Ze = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
          $e =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function Xe(t, e) {
          var n,
            i,
            a,
            r,
            o,
            s,
            u = t,
            d = null;
          return (
            Ee(t)
              ? (u = { ms: t._milliseconds, d: t._days, M: t._months })
              : l(t)
              ? ((u = {}), e ? (u[e] = t) : (u.milliseconds = t))
              : (d = Ze.exec(t))
              ? ((n = "-" === d[1] ? -1 : 1),
                (u = {
                  y: 0,
                  d: k(d[yt]) * n,
                  h: k(d[xt]) * n,
                  m: k(d[_t]) * n,
                  s: k(d[wt]) * n,
                  ms: k(Ve(1e3 * d[kt])) * n,
                }))
              : (d = $e.exec(t))
              ? ((n = "-" === d[1] ? -1 : 1),
                (u = {
                  y: Ke(d[2], n),
                  M: Ke(d[3], n),
                  w: Ke(d[4], n),
                  d: Ke(d[5], n),
                  h: Ke(d[6], n),
                  m: Ke(d[7], n),
                  s: Ke(d[8], n),
                }))
              : null == u
              ? (u = {})
              : "object" == typeof u &&
                ("from" in u || "to" in u) &&
                ((r = Le(u.from)),
                (o = Le(u.to)),
                (a =
                  r.isValid() && o.isValid()
                    ? ((o = Ue(o, r)),
                      r.isBefore(o)
                        ? (s = Je(r, o))
                        : (((s = Je(o, r)).milliseconds = -s.milliseconds),
                          (s.months = -s.months)),
                      s)
                    : { milliseconds: 0, months: 0 }),
                ((u = {}).ms = a.milliseconds),
                (u.M = a.months)),
            (i = new ze(u)),
            Ee(t) && h(t, "_locale") && (i._locale = t._locale),
            i
          );
        }
        function Ke(t, e) {
          var n = t && parseFloat(t.replace(",", "."));
          return (isNaN(n) ? 0 : n) * e;
        }
        function Je(t, e) {
          var n = {};
          return (
            (n.months = e.month() - t.month() + 12 * (e.year() - t.year())),
            t.clone().add(n.months, "M").isAfter(e) && --n.months,
            (n.milliseconds = +e - +t.clone().add(n.months, "M")),
            n
          );
        }
        function Qe(t, e) {
          return function (n, i) {
            var a;
            return (
              null === i ||
                isNaN(+i) ||
                (T(
                  e,
                  "moment()." +
                    e +
                    "(period, number) is deprecated. Please use moment()." +
                    e +
                    "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                ),
                (a = n),
                (n = i),
                (i = a)),
              tn(this, Xe((n = "string" == typeof n ? +n : n), i), t),
              this
            );
          };
        }
        function tn(t, e, n, i) {
          var r = e._milliseconds,
            o = Ve(e._days),
            s = Ve(e._months);
          t.isValid() &&
            ((i = null == i || i),
            s && Yt(t, At(t, "Month") + s * n),
            o && Ft(t, "Date", At(t, "Date") + o * n),
            r && t._d.setTime(t._d.valueOf() + r * n),
            i && a.updateOffset(t, o || s));
        }
        (Xe.fn = ze.prototype),
          (Xe.invalid = function () {
            return Xe(NaN);
          });
        var en = Qe(1, "add"),
          nn = Qe(-1, "subtract");
        function an(t, e) {
          var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            i = t.clone().add(n, "months");
          return (
            -(
              n +
              (e - i < 0
                ? (e - i) / (i - t.clone().add(n - 1, "months"))
                : (e - i) / (t.clone().add(n + 1, "months") - i))
            ) || 0
          );
        }
        function rn(t) {
          var e;
          return void 0 === t
            ? this._locale._abbr
            : (null != (e = pe(t)) && (this._locale = e), this);
        }
        (a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
          (a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
        var on = D(
          "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
          function (t) {
            return void 0 === t ? this.localeData() : this.locale(t);
          }
        );
        function sn() {
          return this._locale;
        }
        var ln = 1e3,
          un = 60 * ln,
          dn = 60 * un,
          hn = 3506328 * dn;
        function cn(t, e) {
          return ((t % e) + e) % e;
        }
        function fn(t, e, n) {
          return t < 100 && t >= 0
            ? new Date(t + 400, e, n) - hn
            : new Date(t, e, n).valueOf();
        }
        function gn(t, e, n) {
          return t < 100 && t >= 0
            ? Date.UTC(t + 400, e, n) - hn
            : Date.UTC(t, e, n);
        }
        function mn(t, e) {
          j(0, [t, t.length], 0, e);
        }
        function pn(t, e, n, i, a) {
          var r;
          return null == t
            ? qt(this, i, a).year
            : (e > (r = Zt(t, i, a)) && (e = r), vn.call(this, t, e, n, i, a));
        }
        function vn(t, e, n, i, a) {
          var r = Gt(t, e, n, i, a),
            o = jt(r.year, 0, r.dayOfYear);
          return (
            this.year(o.getUTCFullYear()),
            this.month(o.getUTCMonth()),
            this.date(o.getUTCDate()),
            this
          );
        }
        j(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100;
        }),
          j(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
          }),
          mn("gggg", "weekYear"),
          mn("ggggg", "weekYear"),
          mn("GGGG", "isoWeekYear"),
          mn("GGGGG", "isoWeekYear"),
          L("weekYear", "gg"),
          L("isoWeekYear", "GG"),
          Y("weekYear", 1),
          Y("isoWeekYear", 1),
          dt("G", rt),
          dt("g", rt),
          dt("GG", J, Z),
          dt("gg", J, Z),
          dt("GGGG", nt, X),
          dt("gggg", nt, X),
          dt("GGGGG", it, K),
          dt("ggggg", it, K),
          mt(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
            e[i.substr(0, 2)] = k(t);
          }),
          mt(["gg", "GG"], function (t, e, n, i) {
            e[i] = a.parseTwoDigitYear(t);
          }),
          j("Q", 0, "Qo", "quarter"),
          L("quarter", "Q"),
          Y("quarter", 7),
          dt("Q", q),
          gt("Q", function (t, e) {
            e[bt] = 3 * (k(t) - 1);
          }),
          j("D", ["DD", 2], "Do", "date"),
          L("date", "D"),
          Y("date", 9),
          dt("D", J),
          dt("DD", J, Z),
          dt("Do", function (t, e) {
            return t
              ? e._dayOfMonthOrdinalParse || e._ordinalParse
              : e._dayOfMonthOrdinalParseLenient;
          }),
          gt(["D", "DD"], yt),
          gt("Do", function (t, e) {
            e[yt] = k(t.match(J)[0]);
          });
        var bn = Ot("Date", !0);
        j("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
          L("dayOfYear", "DDD"),
          Y("dayOfYear", 4),
          dt("DDD", et),
          dt("DDDD", $),
          gt(["DDD", "DDDD"], function (t, e, n) {
            n._dayOfYear = k(t);
          }),
          j("m", ["mm", 2], 0, "minute"),
          L("minute", "m"),
          Y("minute", 14),
          dt("m", J),
          dt("mm", J, Z),
          gt(["m", "mm"], _t);
        var yn = Ot("Minutes", !1);
        j("s", ["ss", 2], 0, "second"),
          L("second", "s"),
          Y("second", 15),
          dt("s", J),
          dt("ss", J, Z),
          gt(["s", "ss"], wt);
        var xn,
          _n = Ot("Seconds", !1);
        for (
          j("S", 0, 0, function () {
            return ~~(this.millisecond() / 100);
          }),
            j(0, ["SS", 2], 0, function () {
              return ~~(this.millisecond() / 10);
            }),
            j(0, ["SSS", 3], 0, "millisecond"),
            j(0, ["SSSS", 4], 0, function () {
              return 10 * this.millisecond();
            }),
            j(0, ["SSSSS", 5], 0, function () {
              return 100 * this.millisecond();
            }),
            j(0, ["SSSSSS", 6], 0, function () {
              return 1e3 * this.millisecond();
            }),
            j(0, ["SSSSSSS", 7], 0, function () {
              return 1e4 * this.millisecond();
            }),
            j(0, ["SSSSSSSS", 8], 0, function () {
              return 1e5 * this.millisecond();
            }),
            j(0, ["SSSSSSSSS", 9], 0, function () {
              return 1e6 * this.millisecond();
            }),
            L("millisecond", "ms"),
            Y("millisecond", 16),
            dt("S", et, q),
            dt("SS", et, Z),
            dt("SSS", et, $),
            xn = "SSSS";
          xn.length <= 9;
          xn += "S"
        )
          dt(xn, at);
        function wn(t, e) {
          e[kt] = k(1e3 * ("0." + t));
        }
        for (xn = "S"; xn.length <= 9; xn += "S") gt(xn, wn);
        var kn = Ot("Milliseconds", !1);
        j("z", 0, 0, "zoneAbbr"), j("zz", 0, 0, "zoneName");
        var Mn = x.prototype;
        function Sn(t) {
          return t;
        }
        (Mn.add = en),
          (Mn.calendar = function (t, e) {
            var n = t || Le(),
              i = Ue(n, this).startOf("day"),
              r = a.calendarFormat(this, i) || "sameElse",
              o = e && (O(e[r]) ? e[r].call(this, n) : e[r]);
            return this.format(o || this.localeData().calendar(r, this, Le(n)));
          }),
          (Mn.clone = function () {
            return new x(this);
          }),
          (Mn.diff = function (t, e, n) {
            var i, a, r;
            if (!this.isValid()) return NaN;
            if (!(i = Ue(t, this)).isValid()) return NaN;
            switch (
              ((a = 6e4 * (i.utcOffset() - this.utcOffset())), (e = R(e)))
            ) {
              case "year":
                r = an(this, i) / 12;
                break;
              case "month":
                r = an(this, i);
                break;
              case "quarter":
                r = an(this, i) / 3;
                break;
              case "second":
                r = (this - i) / 1e3;
                break;
              case "minute":
                r = (this - i) / 6e4;
                break;
              case "hour":
                r = (this - i) / 36e5;
                break;
              case "day":
                r = (this - i - a) / 864e5;
                break;
              case "week":
                r = (this - i - a) / 6048e5;
                break;
              default:
                r = this - i;
            }
            return n ? r : w(r);
          }),
          (Mn.endOf = function (t) {
            var e;
            if (void 0 === (t = R(t)) || "millisecond" === t || !this.isValid())
              return this;
            var n = this._isUTC ? gn : fn;
            switch (t) {
              case "year":
                e = n(this.year() + 1, 0, 1) - 1;
                break;
              case "quarter":
                e =
                  n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                break;
              case "month":
                e = n(this.year(), this.month() + 1, 1) - 1;
                break;
              case "week":
                e =
                  n(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                  ) - 1;
                break;
              case "isoWeek":
                e =
                  n(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                  ) - 1;
                break;
              case "day":
              case "date":
                e = n(this.year(), this.month(), this.date() + 1) - 1;
                break;
              case "hour":
                (e = this._d.valueOf()),
                  (e +=
                    dn -
                    cn(e + (this._isUTC ? 0 : this.utcOffset() * un), dn) -
                    1);
                break;
              case "minute":
                (e = this._d.valueOf()), (e += un - cn(e, un) - 1);
                break;
              case "second":
                (e = this._d.valueOf()), (e += ln - cn(e, ln) - 1);
            }
            return this._d.setTime(e), a.updateOffset(this, !0), this;
          }),
          (Mn.format = function (t) {
            t || (t = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
            var e = U(this, t);
            return this.localeData().postformat(e);
          }),
          (Mn.from = function (t, e) {
            return this.isValid() && ((_(t) && t.isValid()) || Le(t).isValid())
              ? Xe({ to: this, from: t }).locale(this.locale()).humanize(!e)
              : this.localeData().invalidDate();
          }),
          (Mn.fromNow = function (t) {
            return this.from(Le(), t);
          }),
          (Mn.to = function (t, e) {
            return this.isValid() && ((_(t) && t.isValid()) || Le(t).isValid())
              ? Xe({ from: this, to: t }).locale(this.locale()).humanize(!e)
              : this.localeData().invalidDate();
          }),
          (Mn.toNow = function (t) {
            return this.to(Le(), t);
          }),
          (Mn.get = function (t) {
            return O(this[(t = R(t))]) ? this[t]() : this;
          }),
          (Mn.invalidAt = function () {
            return g(this).overflow;
          }),
          (Mn.isAfter = function (t, e) {
            var n = _(t) ? t : Le(t);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (e = R(e) || "millisecond")
                ? this.valueOf() > n.valueOf()
                : n.valueOf() < this.clone().startOf(e).valueOf())
            );
          }),
          (Mn.isBefore = function (t, e) {
            var n = _(t) ? t : Le(t);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (e = R(e) || "millisecond")
                ? this.valueOf() < n.valueOf()
                : this.clone().endOf(e).valueOf() < n.valueOf())
            );
          }),
          (Mn.isBetween = function (t, e, n, i) {
            var a = _(t) ? t : Le(t),
              r = _(e) ? e : Le(e);
            return (
              !!(this.isValid() && a.isValid() && r.isValid()) &&
              ("(" === (i = i || "()")[0]
                ? this.isAfter(a, n)
                : !this.isBefore(a, n)) &&
              (")" === i[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
            );
          }),
          (Mn.isSame = function (t, e) {
            var n,
              i = _(t) ? t : Le(t);
            return (
              !(!this.isValid() || !i.isValid()) &&
              ("millisecond" === (e = R(e) || "millisecond")
                ? this.valueOf() === i.valueOf()
                : ((n = i.valueOf()),
                  this.clone().startOf(e).valueOf() <= n &&
                    n <= this.clone().endOf(e).valueOf()))
            );
          }),
          (Mn.isSameOrAfter = function (t, e) {
            return this.isSame(t, e) || this.isAfter(t, e);
          }),
          (Mn.isSameOrBefore = function (t, e) {
            return this.isSame(t, e) || this.isBefore(t, e);
          }),
          (Mn.isValid = function () {
            return m(this);
          }),
          (Mn.lang = on),
          (Mn.locale = rn),
          (Mn.localeData = sn),
          (Mn.max = Ne),
          (Mn.min = Re),
          (Mn.parsingFlags = function () {
            return c({}, g(this));
          }),
          (Mn.set = function (t, e) {
            if ("object" == typeof t)
              for (
                var n = (function (t) {
                    var e = [];
                    for (var n in t) e.push({ unit: n, priority: W[n] });
                    return (
                      e.sort(function (t, e) {
                        return t.priority - e.priority;
                      }),
                      e
                    );
                  })((t = N(t))),
                  i = 0;
                i < n.length;
                i++
              )
                this[n[i].unit](t[n[i].unit]);
            else if (O(this[(t = R(t))])) return this[t](e);
            return this;
          }),
          (Mn.startOf = function (t) {
            var e;
            if (void 0 === (t = R(t)) || "millisecond" === t || !this.isValid())
              return this;
            var n = this._isUTC ? gn : fn;
            switch (t) {
              case "year":
                e = n(this.year(), 0, 1);
                break;
              case "quarter":
                e = n(this.year(), this.month() - (this.month() % 3), 1);
                break;
              case "month":
                e = n(this.year(), this.month(), 1);
                break;
              case "week":
                e = n(this.year(), this.month(), this.date() - this.weekday());
                break;
              case "isoWeek":
                e = n(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1)
                );
                break;
              case "day":
              case "date":
                e = n(this.year(), this.month(), this.date());
                break;
              case "hour":
                (e = this._d.valueOf()),
                  (e -= cn(e + (this._isUTC ? 0 : this.utcOffset() * un), dn));
                break;
              case "minute":
                (e = this._d.valueOf()), (e -= cn(e, un));
                break;
              case "second":
                (e = this._d.valueOf()), (e -= cn(e, ln));
            }
            return this._d.setTime(e), a.updateOffset(this, !0), this;
          }),
          (Mn.subtract = nn),
          (Mn.toArray = function () {
            var t = this;
            return [
              t.year(),
              t.month(),
              t.date(),
              t.hour(),
              t.minute(),
              t.second(),
              t.millisecond(),
            ];
          }),
          (Mn.toObject = function () {
            var t = this;
            return {
              years: t.year(),
              months: t.month(),
              date: t.date(),
              hours: t.hours(),
              minutes: t.minutes(),
              seconds: t.seconds(),
              milliseconds: t.milliseconds(),
            };
          }),
          (Mn.toDate = function () {
            return new Date(this.valueOf());
          }),
          (Mn.toISOString = function (t) {
            if (!this.isValid()) return null;
            var e = !0 !== t,
              n = e ? this.clone().utc() : this;
            return n.year() < 0 || n.year() > 9999
              ? U(
                  n,
                  e
                    ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                )
              : O(Date.prototype.toISOString)
              ? e
                ? this.toDate().toISOString()
                : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                    .toISOString()
                    .replace("Z", U(n, "Z"))
              : U(
                  n,
                  e
                    ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                );
          }),
          (Mn.inspect = function () {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var t = "moment",
              e = "";
            this.isLocal() ||
              ((t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
              (e = "Z"));
            var n = "[" + t + '("]',
              i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
              a = e + '[")]';
            return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + a);
          }),
          (Mn.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (Mn.toString = function () {
            return this.clone()
              .locale("en")
              .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
          }),
          (Mn.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (Mn.valueOf = function () {
            return this._d.valueOf() - 6e4 * (this._offset || 0);
          }),
          (Mn.creationData = function () {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
            };
          }),
          (Mn.year = Tt),
          (Mn.isLeapYear = function () {
            return Ct(this.year());
          }),
          (Mn.weekYear = function (t) {
            return pn.call(
              this,
              t,
              this.week(),
              this.weekday(),
              this.localeData()._week.dow,
              this.localeData()._week.doy
            );
          }),
          (Mn.isoWeekYear = function (t) {
            return pn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
          }),
          (Mn.quarter = Mn.quarters =
            function (t) {
              return null == t
                ? Math.ceil((this.month() + 1) / 3)
                : this.month(3 * (t - 1) + (this.month() % 3));
            }),
          (Mn.month = zt),
          (Mn.daysInMonth = function () {
            return It(this.year(), this.month());
          }),
          (Mn.week = Mn.weeks =
            function (t) {
              var e = this.localeData().week(this);
              return null == t ? e : this.add(7 * (t - e), "d");
            }),
          (Mn.isoWeek = Mn.isoWeeks =
            function (t) {
              var e = qt(this, 1, 4).week;
              return null == t ? e : this.add(7 * (t - e), "d");
            }),
          (Mn.weeksInYear = function () {
            var t = this.localeData()._week;
            return Zt(this.year(), t.dow, t.doy);
          }),
          (Mn.isoWeeksInYear = function () {
            return Zt(this.year(), 1, 4);
          }),
          (Mn.date = bn),
          (Mn.day = Mn.days =
            function (t) {
              if (!this.isValid()) return null != t ? this : NaN;
              var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
              return null != t
                ? ((t = (function (t, e) {
                    return "string" != typeof t
                      ? t
                      : isNaN(t)
                      ? "number" == typeof (t = e.weekdaysParse(t))
                        ? t
                        : null
                      : parseInt(t, 10);
                  })(t, this.localeData())),
                  this.add(t - e, "d"))
                : e;
            }),
          (Mn.weekday = function (t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d");
          }),
          (Mn.isoWeekday = function (t) {
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
              var e = (function (t, e) {
                return "string" == typeof t
                  ? e.weekdaysParse(t) % 7 || 7
                  : isNaN(t)
                  ? null
                  : t;
              })(t, this.localeData());
              return this.day(this.day() % 7 ? e : e - 7);
            }
            return this.day() || 7;
          }),
          (Mn.dayOfYear = function (t) {
            var e =
              Math.round(
                (this.clone().startOf("day") - this.clone().startOf("year")) /
                  864e5
              ) + 1;
            return null == t ? e : this.add(t - e, "d");
          }),
          (Mn.hour = Mn.hours = le),
          (Mn.minute = Mn.minutes = yn),
          (Mn.second = Mn.seconds = _n),
          (Mn.millisecond = Mn.milliseconds = kn),
          (Mn.utcOffset = function (t, e, n) {
            var i,
              r = this._offset || 0;
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
              if ("string" == typeof t) {
                if (null === (t = je(st, t))) return this;
              } else Math.abs(t) < 16 && !n && (t *= 60);
              return (
                !this._isUTC && e && (i = Ge(this)),
                (this._offset = t),
                (this._isUTC = !0),
                null != i && this.add(i, "m"),
                r !== t &&
                  (!e || this._changeInProgress
                    ? tn(this, Xe(t - r, "m"), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0),
                      a.updateOffset(this, !0),
                      (this._changeInProgress = null))),
                this
              );
            }
            return this._isUTC ? r : Ge(this);
          }),
          (Mn.utc = function (t) {
            return this.utcOffset(0, t);
          }),
          (Mn.local = function (t) {
            return (
              this._isUTC &&
                (this.utcOffset(0, t),
                (this._isUTC = !1),
                t && this.subtract(Ge(this), "m")),
              this
            );
          }),
          (Mn.parseZone = function () {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
              var t = je(ot, this._i);
              null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
            }
            return this;
          }),
          (Mn.hasAlignedHourOffset = function (t) {
            return (
              !!this.isValid() &&
              ((t = t ? Le(t).utcOffset() : 0),
              (this.utcOffset() - t) % 60 == 0)
            );
          }),
          (Mn.isDST = function () {
            return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
            );
          }),
          (Mn.isLocal = function () {
            return !!this.isValid() && !this._isUTC;
          }),
          (Mn.isUtcOffset = function () {
            return !!this.isValid() && this._isUTC;
          }),
          (Mn.isUtc = qe),
          (Mn.isUTC = qe),
          (Mn.zoneAbbr = function () {
            return this._isUTC ? "UTC" : "";
          }),
          (Mn.zoneName = function () {
            return this._isUTC ? "Coordinated Universal Time" : "";
          }),
          (Mn.dates = D("dates accessor is deprecated. Use date instead.", bn)),
          (Mn.months = D(
            "months accessor is deprecated. Use month instead",
            zt
          )),
          (Mn.years = D("years accessor is deprecated. Use year instead", Tt)),
          (Mn.zone = D(
            "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
            function (t, e) {
              return null != t
                ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this)
                : -this.utcOffset();
            }
          )),
          (Mn.isDSTShifted = D(
            "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
            function () {
              if (!s(this._isDSTShifted)) return this._isDSTShifted;
              var t = {};
              if ((b(t, this), (t = Fe(t))._a)) {
                var e = t._isUTC ? f(t._a) : Le(t._a);
                this._isDSTShifted = this.isValid() && M(t._a, e.toArray()) > 0;
              } else this._isDSTShifted = !1;
              return this._isDSTShifted;
            }
          ));
        var Dn = F.prototype;
        function Cn(t, e, n, i) {
          var a = pe(),
            r = f().set(i, e);
          return a[n](r, t);
        }
        function Pn(t, e, n) {
          if ((l(t) && ((e = t), (t = void 0)), (t = t || ""), null != e))
            return Cn(t, e, n, "month");
          var i,
            a = [];
          for (i = 0; i < 12; i++) a[i] = Cn(t, i, n, "month");
          return a;
        }
        function Tn(t, e, n, i) {
          "boolean" == typeof t
            ? (l(e) && ((n = e), (e = void 0)), (e = e || ""))
            : ((n = e = t),
              (t = !1),
              l(e) && ((n = e), (e = void 0)),
              (e = e || ""));
          var a,
            r = pe(),
            o = t ? r._week.dow : 0;
          if (null != n) return Cn(e, (n + o) % 7, i, "day");
          var s = [];
          for (a = 0; a < 7; a++) s[a] = Cn(e, (a + o) % 7, i, "day");
          return s;
        }
        (Dn.calendar = function (t, e, n) {
          var i = this._calendar[t] || this._calendar.sameElse;
          return O(i) ? i.call(e, n) : i;
        }),
          (Dn.longDateFormat = function (t) {
            var e = this._longDateFormat[t],
              n = this._longDateFormat[t.toUpperCase()];
            return e || !n
              ? e
              : ((this._longDateFormat[t] = n.replace(
                  /MMMM|MM|DD|dddd/g,
                  function (t) {
                    return t.slice(1);
                  }
                )),
                this._longDateFormat[t]);
          }),
          (Dn.invalidDate = function () {
            return this._invalidDate;
          }),
          (Dn.ordinal = function (t) {
            return this._ordinal.replace("%d", t);
          }),
          (Dn.preparse = Sn),
          (Dn.postformat = Sn),
          (Dn.relativeTime = function (t, e, n, i) {
            var a = this._relativeTime[n];
            return O(a) ? a(t, e, n, i) : a.replace(/%d/i, t);
          }),
          (Dn.pastFuture = function (t, e) {
            var n = this._relativeTime[t > 0 ? "future" : "past"];
            return O(n) ? n(e) : n.replace(/%s/i, e);
          }),
          (Dn.set = function (t) {
            var e, n;
            for (n in t) O((e = t[n])) ? (this[n] = e) : (this["_" + n] = e);
            (this._config = t),
              (this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source ||
                  this._ordinalParse.source) +
                  "|" +
                  /\d{1,2}/.source
              ));
          }),
          (Dn.months = function (t, e) {
            return t
              ? r(this._months)
                ? this._months[t.month()]
                : this._months[
                    (this._months.isFormat || Lt).test(e)
                      ? "format"
                      : "standalone"
                  ][t.month()]
              : r(this._months)
              ? this._months
              : this._months.standalone;
          }),
          (Dn.monthsShort = function (t, e) {
            return t
              ? r(this._monthsShort)
                ? this._monthsShort[t.month()]
                : this._monthsShort[Lt.test(e) ? "format" : "standalone"][
                    t.month()
                  ]
              : r(this._monthsShort)
              ? this._monthsShort
              : this._monthsShort.standalone;
          }),
          (Dn.monthsParse = function (t, e, n) {
            var i, a, r;
            if (this._monthsParseExact) return Wt.call(this, t, e, n);
            for (
              this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = [])),
                i = 0;
              i < 12;
              i++
            ) {
              if (
                ((a = f([2e3, i])),
                n &&
                  !this._longMonthsParse[i] &&
                  ((this._longMonthsParse[i] = new RegExp(
                    "^" + this.months(a, "").replace(".", "") + "$",
                    "i"
                  )),
                  (this._shortMonthsParse[i] = new RegExp(
                    "^" + this.monthsShort(a, "").replace(".", "") + "$",
                    "i"
                  ))),
                n ||
                  this._monthsParse[i] ||
                  ((r =
                    "^" + this.months(a, "") + "|^" + this.monthsShort(a, "")),
                  (this._monthsParse[i] = new RegExp(r.replace(".", ""), "i"))),
                n && "MMMM" === e && this._longMonthsParse[i].test(t))
              )
                return i;
              if (n && "MMM" === e && this._shortMonthsParse[i].test(t))
                return i;
              if (!n && this._monthsParse[i].test(t)) return i;
            }
          }),
          (Dn.monthsRegex = function (t) {
            return this._monthsParseExact
              ? (h(this, "_monthsRegex") || Ht.call(this),
                t ? this._monthsStrictRegex : this._monthsRegex)
              : (h(this, "_monthsRegex") || (this._monthsRegex = Vt),
                this._monthsStrictRegex && t
                  ? this._monthsStrictRegex
                  : this._monthsRegex);
          }),
          (Dn.monthsShortRegex = function (t) {
            return this._monthsParseExact
              ? (h(this, "_monthsRegex") || Ht.call(this),
                t ? this._monthsShortStrictRegex : this._monthsShortRegex)
              : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Et),
                this._monthsShortStrictRegex && t
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex);
          }),
          (Dn.week = function (t) {
            return qt(t, this._week.dow, this._week.doy).week;
          }),
          (Dn.firstDayOfYear = function () {
            return this._week.doy;
          }),
          (Dn.firstDayOfWeek = function () {
            return this._week.dow;
          }),
          (Dn.weekdays = function (t, e) {
            var n = r(this._weekdays)
              ? this._weekdays
              : this._weekdays[
                  t && !0 !== t && this._weekdays.isFormat.test(e)
                    ? "format"
                    : "standalone"
                ];
            return !0 === t ? $t(n, this._week.dow) : t ? n[t.day()] : n;
          }),
          (Dn.weekdaysMin = function (t) {
            return !0 === t
              ? $t(this._weekdaysMin, this._week.dow)
              : t
              ? this._weekdaysMin[t.day()]
              : this._weekdaysMin;
          }),
          (Dn.weekdaysShort = function (t) {
            return !0 === t
              ? $t(this._weekdaysShort, this._week.dow)
              : t
              ? this._weekdaysShort[t.day()]
              : this._weekdaysShort;
          }),
          (Dn.weekdaysParse = function (t, e, n) {
            var i, a, r;
            if (this._weekdaysParseExact) return Qt.call(this, t, e, n);
            for (
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                i = 0;
              i < 7;
              i++
            ) {
              if (
                ((a = f([2e3, 1]).day(i)),
                n &&
                  !this._fullWeekdaysParse[i] &&
                  ((this._fullWeekdaysParse[i] = new RegExp(
                    "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._shortWeekdaysParse[i] = new RegExp(
                    "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._minWeekdaysParse[i] = new RegExp(
                    "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
                    "i"
                  ))),
                this._weekdaysParse[i] ||
                  ((r =
                    "^" +
                    this.weekdays(a, "") +
                    "|^" +
                    this.weekdaysShort(a, "") +
                    "|^" +
                    this.weekdaysMin(a, "")),
                  (this._weekdaysParse[i] = new RegExp(
                    r.replace(".", ""),
                    "i"
                  ))),
                n && "dddd" === e && this._fullWeekdaysParse[i].test(t))
              )
                return i;
              if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t))
                return i;
              if (n && "dd" === e && this._minWeekdaysParse[i].test(t))
                return i;
              if (!n && this._weekdaysParse[i].test(t)) return i;
            }
          }),
          (Dn.weekdaysRegex = function (t) {
            return this._weekdaysParseExact
              ? (h(this, "_weekdaysRegex") || ie.call(this),
                t ? this._weekdaysStrictRegex : this._weekdaysRegex)
              : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = te),
                this._weekdaysStrictRegex && t
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex);
          }),
          (Dn.weekdaysShortRegex = function (t) {
            return this._weekdaysParseExact
              ? (h(this, "_weekdaysRegex") || ie.call(this),
                t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
              : (h(this, "_weekdaysShortRegex") ||
                  (this._weekdaysShortRegex = ee),
                this._weekdaysShortStrictRegex && t
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex);
          }),
          (Dn.weekdaysMinRegex = function (t) {
            return this._weekdaysParseExact
              ? (h(this, "_weekdaysRegex") || ie.call(this),
                t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
              : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ne),
                this._weekdaysMinStrictRegex && t
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex);
          }),
          (Dn.isPM = function (t) {
            return "p" === (t + "").toLowerCase().charAt(0);
          }),
          (Dn.meridiem = function (t, e, n) {
            return t > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
          }),
          ge("en", {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (t) {
              var e = t % 10;
              return (
                t +
                (1 === k((t % 100) / 10)
                  ? "th"
                  : 1 === e
                  ? "st"
                  : 2 === e
                  ? "nd"
                  : 3 === e
                  ? "rd"
                  : "th")
              );
            },
          }),
          (a.lang = D(
            "moment.lang is deprecated. Use moment.locale instead.",
            ge
          )),
          (a.langData = D(
            "moment.langData is deprecated. Use moment.localeData instead.",
            pe
          ));
        var On = Math.abs;
        function An(t, e, n, i) {
          var a = Xe(e, n);
          return (
            (t._milliseconds += i * a._milliseconds),
            (t._days += i * a._days),
            (t._months += i * a._months),
            t._bubble()
          );
        }
        function Fn(t) {
          return t < 0 ? Math.floor(t) : Math.ceil(t);
        }
        function In(t) {
          return (4800 * t) / 146097;
        }
        function Ln(t) {
          return (146097 * t) / 4800;
        }
        function Rn(t) {
          return function () {
            return this.as(t);
          };
        }
        var Nn = Rn("ms"),
          Wn = Rn("s"),
          Yn = Rn("m"),
          zn = Rn("h"),
          En = Rn("d"),
          Vn = Rn("w"),
          Hn = Rn("M"),
          Bn = Rn("Q"),
          jn = Rn("y");
        function Un(t) {
          return function () {
            return this.isValid() ? this._data[t] : NaN;
          };
        }
        var Gn = Un("milliseconds"),
          qn = Un("seconds"),
          Zn = Un("minutes"),
          $n = Un("hours"),
          Xn = Un("days"),
          Kn = Un("months"),
          Jn = Un("years"),
          Qn = Math.round,
          ti = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };
        function ei(t, e, n, i, a) {
          return a.relativeTime(e || 1, !!n, t, i);
        }
        var ni = Math.abs;
        function ii(t) {
          return (t > 0) - (t < 0) || +t;
        }
        function ai() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var t,
            e,
            n = ni(this._milliseconds) / 1e3,
            i = ni(this._days),
            a = ni(this._months);
          (t = w(n / 60)), (e = w(t / 60)), (n %= 60), (t %= 60);
          var r = w(a / 12),
            o = (a %= 12),
            s = i,
            l = e,
            u = t,
            d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
            h = this.asSeconds();
          if (!h) return "P0D";
          var c = h < 0 ? "-" : "",
            f = ii(this._months) !== ii(h) ? "-" : "",
            g = ii(this._days) !== ii(h) ? "-" : "",
            m = ii(this._milliseconds) !== ii(h) ? "-" : "";
          return (
            c +
            "P" +
            (r ? f + r + "Y" : "") +
            (o ? f + o + "M" : "") +
            (s ? g + s + "D" : "") +
            (l || u || d ? "T" : "") +
            (l ? m + l + "H" : "") +
            (u ? m + u + "M" : "") +
            (d ? m + d + "S" : "")
          );
        }
        var ri = ze.prototype;
        return (
          (ri.isValid = function () {
            return this._isValid;
          }),
          (ri.abs = function () {
            var t = this._data;
            return (
              (this._milliseconds = On(this._milliseconds)),
              (this._days = On(this._days)),
              (this._months = On(this._months)),
              (t.milliseconds = On(t.milliseconds)),
              (t.seconds = On(t.seconds)),
              (t.minutes = On(t.minutes)),
              (t.hours = On(t.hours)),
              (t.months = On(t.months)),
              (t.years = On(t.years)),
              this
            );
          }),
          (ri.add = function (t, e) {
            return An(this, t, e, 1);
          }),
          (ri.subtract = function (t, e) {
            return An(this, t, e, -1);
          }),
          (ri.as = function (t) {
            if (!this.isValid()) return NaN;
            var e,
              n,
              i = this._milliseconds;
            if ("month" === (t = R(t)) || "quarter" === t || "year" === t)
              switch (
                ((e = this._days + i / 864e5), (n = this._months + In(e)), t)
              ) {
                case "month":
                  return n;
                case "quarter":
                  return n / 3;
                case "year":
                  return n / 12;
              }
            else
              switch (((e = this._days + Math.round(Ln(this._months))), t)) {
                case "week":
                  return e / 7 + i / 6048e5;
                case "day":
                  return e + i / 864e5;
                case "hour":
                  return 24 * e + i / 36e5;
                case "minute":
                  return 1440 * e + i / 6e4;
                case "second":
                  return 86400 * e + i / 1e3;
                case "millisecond":
                  return Math.floor(864e5 * e) + i;
                default:
                  throw new Error("Unknown unit " + t);
              }
          }),
          (ri.asMilliseconds = Nn),
          (ri.asSeconds = Wn),
          (ri.asMinutes = Yn),
          (ri.asHours = zn),
          (ri.asDays = En),
          (ri.asWeeks = Vn),
          (ri.asMonths = Hn),
          (ri.asQuarters = Bn),
          (ri.asYears = jn),
          (ri.valueOf = function () {
            return this.isValid()
              ? this._milliseconds +
                  864e5 * this._days +
                  (this._months % 12) * 2592e6 +
                  31536e6 * k(this._months / 12)
              : NaN;
          }),
          (ri._bubble = function () {
            var t,
              e,
              n,
              i,
              a,
              r = this._milliseconds,
              o = this._days,
              s = this._months,
              l = this._data;
            return (
              (r >= 0 && o >= 0 && s >= 0) ||
                (r <= 0 && o <= 0 && s <= 0) ||
                ((r += 864e5 * Fn(Ln(s) + o)), (o = 0), (s = 0)),
              (l.milliseconds = r % 1e3),
              (t = w(r / 1e3)),
              (l.seconds = t % 60),
              (e = w(t / 60)),
              (l.minutes = e % 60),
              (n = w(e / 60)),
              (l.hours = n % 24),
              (o += w(n / 24)),
              (a = w(In(o))),
              (s += a),
              (o -= Fn(Ln(a))),
              (i = w(s / 12)),
              (s %= 12),
              (l.days = o),
              (l.months = s),
              (l.years = i),
              this
            );
          }),
          (ri.clone = function () {
            return Xe(this);
          }),
          (ri.get = function (t) {
            return (t = R(t)), this.isValid() ? this[t + "s"]() : NaN;
          }),
          (ri.milliseconds = Gn),
          (ri.seconds = qn),
          (ri.minutes = Zn),
          (ri.hours = $n),
          (ri.days = Xn),
          (ri.weeks = function () {
            return w(this.days() / 7);
          }),
          (ri.months = Kn),
          (ri.years = Jn),
          (ri.humanize = function (t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e = this.localeData(),
              n = (function (t, e, n) {
                var i = Xe(t).abs(),
                  a = Qn(i.as("s")),
                  r = Qn(i.as("m")),
                  o = Qn(i.as("h")),
                  s = Qn(i.as("d")),
                  l = Qn(i.as("M")),
                  u = Qn(i.as("y")),
                  d = (a <= ti.ss && ["s", a]) ||
                    (a < ti.s && ["ss", a]) ||
                    (r <= 1 && ["m"]) ||
                    (r < ti.m && ["mm", r]) ||
                    (o <= 1 && ["h"]) ||
                    (o < ti.h && ["hh", o]) ||
                    (s <= 1 && ["d"]) ||
                    (s < ti.d && ["dd", s]) ||
                    (l <= 1 && ["M"]) ||
                    (l < ti.M && ["MM", l]) ||
                    (u <= 1 && ["y"]) || ["yy", u];
                return (
                  (d[2] = e), (d[3] = +t > 0), (d[4] = n), ei.apply(null, d)
                );
              })(this, !t, e);
            return t && (n = e.pastFuture(+this, n)), e.postformat(n);
          }),
          (ri.toISOString = ai),
          (ri.toString = ai),
          (ri.toJSON = ai),
          (ri.locale = rn),
          (ri.localeData = sn),
          (ri.toIsoString = D(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            ai
          )),
          (ri.lang = on),
          j("X", 0, 0, "unix"),
          j("x", 0, 0, "valueOf"),
          dt("x", rt),
          dt("X", /[+-]?\d+(\.\d{1,3})?/),
          gt("X", function (t, e, n) {
            n._d = new Date(1e3 * parseFloat(t, 10));
          }),
          gt("x", function (t, e, n) {
            n._d = new Date(k(t));
          }),
          (a.version = "2.24.0"),
          (n = Le),
          (a.fn = Mn),
          (a.min = function () {
            return We("isBefore", [].slice.call(arguments, 0));
          }),
          (a.max = function () {
            return We("isAfter", [].slice.call(arguments, 0));
          }),
          (a.now = function () {
            return Date.now ? Date.now() : +new Date();
          }),
          (a.utc = f),
          (a.unix = function (t) {
            return Le(1e3 * t);
          }),
          (a.months = function (t, e) {
            return Pn(t, e, "months");
          }),
          (a.isDate = u),
          (a.locale = ge),
          (a.invalid = p),
          (a.duration = Xe),
          (a.isMoment = _),
          (a.weekdays = function (t, e, n) {
            return Tn(t, e, n, "weekdays");
          }),
          (a.parseZone = function () {
            return Le.apply(null, arguments).parseZone();
          }),
          (a.localeData = pe),
          (a.isDuration = Ee),
          (a.monthsShort = function (t, e) {
            return Pn(t, e, "monthsShort");
          }),
          (a.weekdaysMin = function (t, e, n) {
            return Tn(t, e, n, "weekdaysMin");
          }),
          (a.defineLocale = me),
          (a.updateLocale = function (t, e) {
            if (null != e) {
              var n,
                i,
                a = ue;
              null != (i = fe(t)) && (a = i._config),
                (e = A(a, e)),
                ((n = new F(e)).parentLocale = de[t]),
                (de[t] = n),
                ge(t);
            } else
              null != de[t] &&
                (null != de[t].parentLocale
                  ? (de[t] = de[t].parentLocale)
                  : null != de[t] && delete de[t]);
            return de[t];
          }),
          (a.locales = function () {
            return C(de);
          }),
          (a.weekdaysShort = function (t, e, n) {
            return Tn(t, e, n, "weekdaysShort");
          }),
          (a.normalizeUnits = R),
          (a.relativeTimeRounding = function (t) {
            return void 0 === t ? Qn : "function" == typeof t && ((Qn = t), !0);
          }),
          (a.relativeTimeThreshold = function (t, e) {
            return (
              void 0 !== ti[t] &&
              (void 0 === e
                ? ti[t]
                : ((ti[t] = e), "s" === t && (ti.ss = e - 1), !0))
            );
          }),
          (a.calendarFormat = function (t, e) {
            var n = t.diff(e, "days", !0);
            return n < -6
              ? "sameElse"
              : n < -1
              ? "lastWeek"
              : n < 0
              ? "lastDay"
              : n < 1
              ? "sameDay"
              : n < 2
              ? "nextDay"
              : n < 7
              ? "nextWeek"
              : "sameElse";
          }),
          (a.prototype = Mn),
          (a.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM",
          }),
          a
        );
      })();
    }),
    mi = {
      datetime: "MMM D, YYYY, h:mm:ss a",
      millisecond: "h:mm:ss.SSS a",
      second: "h:mm:ss a",
      minute: "h:mm a",
      hour: "hA",
      day: "MMM D",
      week: "ll",
      month: "MMM YYYY",
      quarter: "[Q]Q - YYYY",
      year: "YYYY",
    };
  rn._date.override(
    "function" == typeof gi
      ? {
          _id: "moment",
          formats: function () {
            return mi;
          },
          parse: function (t, e) {
            return (
              "string" == typeof t && "string" == typeof e
                ? (t = gi(t, e))
                : t instanceof gi || (t = gi(t)),
              t.isValid() ? t.valueOf() : null
            );
          },
          format: function (t, e) {
            return gi(t).format(e);
          },
          add: function (t, e, n) {
            return gi(t).add(e, n).valueOf();
          },
          diff: function (t, e, n) {
            return gi(t).diff(gi(e), n);
          },
          startOf: function (t, e, n) {
            return (
              (t = gi(t)),
              "isoWeek" === e
                ? t.isoWeekday(n).valueOf()
                : t.startOf(e).valueOf()
            );
          },
          endOf: function (t, e) {
            return gi(t).endOf(e).valueOf();
          },
          _create: function (t) {
            return gi(t);
          },
        }
      : {}
  ),
    W._set("global", { plugins: { filler: { propagate: !0 } } });
  var pi = {
    dataset: function (t) {
      var e = t.fill,
        n = t.chart,
        i = n.getDatasetMeta(e),
        a = (i && n.isDatasetVisible(e) && i.dataset._children) || [],
        r = a.length || 0;
      return r
        ? function (t, e) {
            return (e < r && a[e]._view) || null;
          }
        : null;
    },
    boundary: function (t) {
      var e = t.boundary,
        n = e ? e.x : null,
        i = e ? e.y : null;
      return H.isArray(e)
        ? function (t, n) {
            return e[n];
          }
        : function (t) {
            return { x: null === n ? t.x : n, y: null === i ? t.y : i };
          };
    },
  };
  function vi(t, e, n) {
    var i,
      a = t._model || {},
      r = a.fill;
    if ((void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r))
      return !1;
    if (!0 === r) return "origin";
    if (((i = parseFloat(r, 10)), isFinite(i) && Math.floor(i) === i))
      return (
        ("-" !== r[0] && "+" !== r[0]) || (i = e + i),
        !(i === e || i < 0 || i >= n) && i
      );
    switch (r) {
      case "bottom":
        return "start";
      case "top":
        return "end";
      case "zero":
        return "origin";
      case "origin":
      case "start":
      case "end":
        return r;
      default:
        return !1;
    }
  }
  function bi(t) {
    return (t.el._scale || {}).getPointPositionForValue
      ? (function (t) {
          var e,
            n,
            i,
            a,
            r,
            o = t.el._scale,
            s = o.options,
            l = o.chart.data.labels.length,
            u = t.fill,
            d = [];
          if (!l) return null;
          for (
            e = s.ticks.reverse ? o.max : o.min,
              n = s.ticks.reverse ? o.min : o.max,
              i = o.getPointPositionForValue(0, e),
              a = 0;
            a < l;
            ++a
          )
            (r =
              "start" === u || "end" === u
                ? o.getPointPositionForValue(a, "start" === u ? e : n)
                : o.getBasePosition(a)),
              s.gridLines.circular &&
                ((r.cx = i.x),
                (r.cy = i.y),
                (r.angle = o.getIndexAngle(a) - Math.PI / 2)),
              d.push(r);
          return d;
        })(t)
      : (function (t) {
          var e,
            n = t.el._model || {},
            i = t.el._scale || {},
            a = t.fill,
            r = null;
          if (isFinite(a)) return null;
          if (
            ("start" === a
              ? (r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom)
              : "end" === a
              ? (r = void 0 === n.scaleTop ? i.top : n.scaleTop)
              : void 0 !== n.scaleZero
              ? (r = n.scaleZero)
              : i.getBasePixel && (r = i.getBasePixel()),
            null != r)
          ) {
            if (void 0 !== r.x && void 0 !== r.y) return r;
            if (H.isFinite(r))
              return { x: (e = i.isHorizontal()) ? r : null, y: e ? null : r };
          }
          return null;
        })(t);
  }
  function yi(t, e, n) {
    var i,
      a = t[e].fill,
      r = [e];
    if (!n) return a;
    for (; !1 !== a && -1 === r.indexOf(a); ) {
      if (!isFinite(a)) return a;
      if (!(i = t[a])) return !1;
      if (i.visible) return a;
      r.push(a), (a = i.fill);
    }
    return !1;
  }
  function xi(t) {
    var e = t.fill,
      n = "dataset";
    return !1 === e ? null : (isFinite(e) || (n = "boundary"), pi[n](t));
  }
  function _i(t) {
    return t && !t.skip;
  }
  function wi(t, e, n, i, a) {
    var r, o, s, l;
    if (i && a) {
      for (t.moveTo(e[0].x, e[0].y), r = 1; r < i; ++r)
        H.canvas.lineTo(t, e[r - 1], e[r]);
      if (void 0 === n[0].angle)
        for (t.lineTo(n[a - 1].x, n[a - 1].y), r = a - 1; r > 0; --r)
          H.canvas.lineTo(t, n[r], n[r - 1], !0);
      else
        for (
          o = n[0].cx,
            s = n[0].cy,
            l = Math.sqrt(Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)),
            r = a - 1;
          r > 0;
          --r
        )
          t.arc(o, s, l, n[r].angle, n[r - 1].angle, !0);
    }
  }
  function ki(t, e, n, i, a, r) {
    var o,
      s,
      l,
      u,
      d,
      h,
      c,
      f,
      g = e.length,
      m = i.spanGaps,
      p = [],
      v = [],
      b = 0,
      y = 0;
    for (t.beginPath(), o = 0, s = g; o < s; ++o)
      (d = n((u = e[(l = o % g)]._view), l, i)),
        (h = _i(u)),
        (c = _i(d)),
        r && void 0 === f && h && (s = g + (f = o + 1)),
        h && c
          ? ((b = p.push(u)), (y = v.push(d)))
          : b &&
            y &&
            (m
              ? (h && p.push(u), c && v.push(d))
              : (wi(t, p, v, b, y), (b = y = 0), (p = []), (v = [])));
    wi(t, p, v, b, y), t.closePath(), (t.fillStyle = a), t.fill();
  }
  var Mi = {
      id: "filler",
      afterDatasetsUpdate: function (t, e) {
        var n,
          i,
          a,
          r,
          o = (t.data.datasets || []).length,
          s = e.propagate,
          l = [];
        for (i = 0; i < o; ++i)
          (r = null),
            (a = (n = t.getDatasetMeta(i)).dataset) &&
              a._model &&
              a instanceof wt.Line &&
              (r = {
                visible: t.isDatasetVisible(i),
                fill: vi(a, i, o),
                chart: t,
                el: a,
              }),
            (n.$filler = r),
            l.push(r);
        for (i = 0; i < o; ++i)
          (r = l[i]) &&
            ((r.fill = yi(l, i, s)), (r.boundary = bi(r)), (r.mapper = xi(r)));
      },
      beforeDatasetsDraw: function (t) {
        var e,
          n,
          i,
          a,
          r,
          o,
          s,
          l = t._getSortedVisibleDatasetMetas(),
          u = t.ctx;
        for (n = l.length - 1; n >= 0; --n)
          (e = l[n].$filler) &&
            e.visible &&
            ((a = (i = e.el)._view),
            (r = i._children || []),
            (o = e.mapper),
            (s = a.backgroundColor || W.global.defaultColor),
            o &&
              s &&
              r.length &&
              (H.canvas.clipArea(u, t.chartArea),
              ki(u, r, o, a, s, i._loop),
              H.canvas.unclipArea(u)));
      },
    },
    Si = H.rtl.getRtlAdapter,
    Di = H.noop,
    Ci = H.valueOrDefault;
  function Pi(t, e) {
    return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
  }
  W._set("global", {
    legend: {
      display: !0,
      position: "top",
      align: "center",
      fullWidth: !0,
      reverse: !1,
      weight: 1e3,
      onClick: function (t, e) {
        var n = e.datasetIndex,
          i = this.chart,
          a = i.getDatasetMeta(n);
        (a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null),
          i.update();
      },
      onHover: null,
      onLeave: null,
      labels: {
        boxWidth: 40,
        padding: 10,
        generateLabels: function (t) {
          var e = t.data.datasets,
            n = t.options.legend || {},
            i = n.labels && n.labels.usePointStyle;
          return t._getSortedDatasetMetas().map(function (n) {
            var a = n.controller.getStyle(i ? 0 : void 0);
            return {
              text: e[n.index].label,
              fillStyle: a.backgroundColor,
              hidden: !t.isDatasetVisible(n.index),
              lineCap: a.borderCapStyle,
              lineDash: a.borderDash,
              lineDashOffset: a.borderDashOffset,
              lineJoin: a.borderJoinStyle,
              lineWidth: a.borderWidth,
              strokeStyle: a.borderColor,
              pointStyle: a.pointStyle,
              rotation: a.rotation,
              datasetIndex: n.index,
            };
          }, this);
        },
      },
    },
    legendCallback: function (t) {
      var e,
        n,
        i,
        a = document.createElement("ul"),
        r = t.data.datasets;
      for (
        a.setAttribute("class", t.id + "-legend"), e = 0, n = r.length;
        e < n;
        e++
      )
        ((i = a.appendChild(document.createElement("li"))).appendChild(
          document.createElement("span")
        ).style.backgroundColor = r[e].backgroundColor),
          r[e].label && i.appendChild(document.createTextNode(r[e].label));
      return a.outerHTML;
    },
  });
  var Ti = $.extend({
    initialize: function (t) {
      H.extend(this, t),
        (this.legendHitBoxes = []),
        (this._hoveredItem = null),
        (this.doughnutMode = !1);
    },
    beforeUpdate: Di,
    update: function (t, e, n) {
      var i = this;
      return (
        i.beforeUpdate(),
        (i.maxWidth = t),
        (i.maxHeight = e),
        (i.margins = n),
        i.beforeSetDimensions(),
        i.setDimensions(),
        i.afterSetDimensions(),
        i.beforeBuildLabels(),
        i.buildLabels(),
        i.afterBuildLabels(),
        i.beforeFit(),
        i.fit(),
        i.afterFit(),
        i.afterUpdate(),
        i.minSize
      );
    },
    afterUpdate: Di,
    beforeSetDimensions: Di,
    setDimensions: function () {
      var t = this;
      t.isHorizontal()
        ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
        : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
        (t.paddingLeft = 0),
        (t.paddingTop = 0),
        (t.paddingRight = 0),
        (t.paddingBottom = 0),
        (t.minSize = { width: 0, height: 0 });
    },
    afterSetDimensions: Di,
    beforeBuildLabels: Di,
    buildLabels: function () {
      var t = this,
        e = t.options.labels || {},
        n = H.callback(e.generateLabels, [t.chart], t) || [];
      e.filter &&
        (n = n.filter(function (n) {
          return e.filter(n, t.chart.data);
        })),
        t.options.reverse && n.reverse(),
        (t.legendItems = n);
    },
    afterBuildLabels: Di,
    beforeFit: Di,
    fit: function () {
      var t = this,
        e = t.options,
        n = e.labels,
        i = e.display,
        a = t.ctx,
        r = H.options._parseFont(n),
        o = r.size,
        s = (t.legendHitBoxes = []),
        l = t.minSize,
        u = t.isHorizontal();
      if (
        (u
          ? ((l.width = t.maxWidth), (l.height = i ? 10 : 0))
          : ((l.width = i ? 10 : 0), (l.height = t.maxHeight)),
        i)
      ) {
        if (((a.font = r.string), u)) {
          var d = (t.lineWidths = [0]),
            h = 0;
          (a.textAlign = "left"),
            (a.textBaseline = "middle"),
            H.each(t.legendItems, function (t, e) {
              var i = Pi(n, o) + o / 2 + a.measureText(t.text).width;
              (0 === e || d[d.length - 1] + i + 2 * n.padding > l.width) &&
                ((h += o + n.padding), (d[d.length - (e > 0 ? 0 : 1)] = 0)),
                (s[e] = { left: 0, top: 0, width: i, height: o }),
                (d[d.length - 1] += i + n.padding);
            }),
            (l.height += h);
        } else {
          var c = n.padding,
            f = (t.columnWidths = []),
            g = (t.columnHeights = []),
            m = n.padding,
            p = 0,
            v = 0;
          H.each(t.legendItems, function (t, e) {
            var i = Pi(n, o) + o / 2 + a.measureText(t.text).width;
            e > 0 &&
              v + o + 2 * c > l.height &&
              ((m += p + n.padding), f.push(p), g.push(v), (p = 0), (v = 0)),
              (p = Math.max(p, i)),
              (v += o + c),
              (s[e] = { left: 0, top: 0, width: i, height: o });
          }),
            (m += p),
            f.push(p),
            g.push(v),
            (l.width += m);
        }
        (t.width = l.width), (t.height = l.height);
      } else t.width = l.width = t.height = l.height = 0;
    },
    afterFit: Di,
    isHorizontal: function () {
      return (
        "top" === this.options.position || "bottom" === this.options.position
      );
    },
    draw: function () {
      var t = this,
        e = t.options,
        n = e.labels,
        i = W.global,
        a = i.defaultColor,
        r = i.elements.line,
        o = t.height,
        s = t.columnHeights,
        l = t.width,
        u = t.lineWidths;
      if (e.display) {
        var d,
          h = Si(e.rtl, t.left, t.minSize.width),
          c = t.ctx,
          f = Ci(n.fontColor, i.defaultFontColor),
          g = H.options._parseFont(n),
          m = g.size;
        (c.textAlign = h.textAlign("left")),
          (c.textBaseline = "middle"),
          (c.lineWidth = 0.5),
          (c.strokeStyle = f),
          (c.fillStyle = f),
          (c.font = g.string);
        var p = Pi(n, m),
          v = t.legendHitBoxes,
          b = function (t, i) {
            switch (e.align) {
              case "start":
                return n.padding;
              case "end":
                return t - i;
              default:
                return (t - i + n.padding) / 2;
            }
          },
          y = t.isHorizontal();
        (d = y
          ? { x: t.left + b(l, u[0]), y: t.top + n.padding, line: 0 }
          : { x: t.left + n.padding, y: t.top + b(o, s[0]), line: 0 }),
          H.rtl.overrideTextDirection(t.ctx, e.textDirection);
        var x = m + n.padding;
        H.each(t.legendItems, function (e, i) {
          var f = c.measureText(e.text).width,
            g = p + m / 2 + f,
            _ = d.x,
            w = d.y;
          h.setWidth(t.minSize.width),
            y
              ? i > 0 &&
                _ + g + n.padding > t.left + t.minSize.width &&
                ((w = d.y += x), d.line++, (_ = d.x = t.left + b(l, u[d.line])))
              : i > 0 &&
                w + x > t.top + t.minSize.height &&
                ((_ = d.x = _ + t.columnWidths[d.line] + n.padding),
                d.line++,
                (w = d.y = t.top + b(o, s[d.line])));
          var k = h.x(_);
          !(function (t, e, i) {
            if (!(isNaN(p) || p <= 0)) {
              c.save();
              var o = Ci(i.lineWidth, r.borderWidth);
              if (
                ((c.fillStyle = Ci(i.fillStyle, a)),
                (c.lineCap = Ci(i.lineCap, r.borderCapStyle)),
                (c.lineDashOffset = Ci(i.lineDashOffset, r.borderDashOffset)),
                (c.lineJoin = Ci(i.lineJoin, r.borderJoinStyle)),
                (c.lineWidth = o),
                (c.strokeStyle = Ci(i.strokeStyle, a)),
                c.setLineDash && c.setLineDash(Ci(i.lineDash, r.borderDash)),
                n && n.usePointStyle)
              ) {
                var s = (p * Math.SQRT2) / 2,
                  l = h.xPlus(t, p / 2),
                  u = e + m / 2;
                H.canvas.drawPoint(c, i.pointStyle, s, l, u, i.rotation);
              } else
                c.fillRect(h.leftForLtr(t, p), e, p, m),
                  0 !== o && c.strokeRect(h.leftForLtr(t, p), e, p, m);
              c.restore();
            }
          })(k, w, e),
            (v[i].left = h.leftForLtr(k, v[i].width)),
            (v[i].top = w),
            (function (t, e, n, i) {
              var a = m / 2,
                r = h.xPlus(t, p + a),
                o = e + a;
              c.fillText(n.text, r, o),
                n.hidden &&
                  (c.beginPath(),
                  (c.lineWidth = 2),
                  c.moveTo(r, o),
                  c.lineTo(h.xPlus(r, i), o),
                  c.stroke());
            })(k, w, e, f),
            y ? (d.x += g + n.padding) : (d.y += x);
        }),
          H.rtl.restoreTextDirection(t.ctx, e.textDirection);
      }
    },
    _getLegendItemAt: function (t, e) {
      var n,
        i,
        a,
        r = this;
      if (t >= r.left && t <= r.right && e >= r.top && e <= r.bottom)
        for (a = r.legendHitBoxes, n = 0; n < a.length; ++n)
          if (
            t >= (i = a[n]).left &&
            t <= i.left + i.width &&
            e >= i.top &&
            e <= i.top + i.height
          )
            return r.legendItems[n];
      return null;
    },
    handleEvent: function (t) {
      var e,
        n = this,
        i = n.options,
        a = "mouseup" === t.type ? "click" : t.type;
      if ("mousemove" === a) {
        if (!i.onHover && !i.onLeave) return;
      } else {
        if ("click" !== a) return;
        if (!i.onClick) return;
      }
      (e = n._getLegendItemAt(t.x, t.y)),
        "click" === a
          ? e && i.onClick && i.onClick.call(n, t.native, e)
          : (i.onLeave &&
              e !== n._hoveredItem &&
              (n._hoveredItem && i.onLeave.call(n, t.native, n._hoveredItem),
              (n._hoveredItem = e)),
            i.onHover && e && i.onHover.call(n, t.native, e));
    },
  });
  function Oi(t, e) {
    var n = new Ti({ ctx: t.ctx, options: e, chart: t });
    me.configure(t, n, e), me.addBox(t, n), (t.legend = n);
  }
  var Ai = {
      id: "legend",
      _element: Ti,
      beforeInit: function (t) {
        var e = t.options.legend;
        e && Oi(t, e);
      },
      beforeUpdate: function (t) {
        var e = t.options.legend,
          n = t.legend;
        e
          ? (H.mergeIf(e, W.global.legend),
            n ? (me.configure(t, n, e), (n.options = e)) : Oi(t, e))
          : n && (me.removeBox(t, n), delete t.legend);
      },
      afterEvent: function (t, e) {
        var n = t.legend;
        n && n.handleEvent(e);
      },
    },
    Fi = H.noop;
  W._set("global", {
    title: {
      display: !1,
      fontStyle: "bold",
      fullWidth: !0,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3,
    },
  });
  var Ii = $.extend({
    initialize: function (t) {
      H.extend(this, t), (this.legendHitBoxes = []);
    },
    beforeUpdate: Fi,
    update: function (t, e, n) {
      var i = this;
      return (
        i.beforeUpdate(),
        (i.maxWidth = t),
        (i.maxHeight = e),
        (i.margins = n),
        i.beforeSetDimensions(),
        i.setDimensions(),
        i.afterSetDimensions(),
        i.beforeBuildLabels(),
        i.buildLabels(),
        i.afterBuildLabels(),
        i.beforeFit(),
        i.fit(),
        i.afterFit(),
        i.afterUpdate(),
        i.minSize
      );
    },
    afterUpdate: Fi,
    beforeSetDimensions: Fi,
    setDimensions: function () {
      var t = this;
      t.isHorizontal()
        ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
        : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
        (t.paddingLeft = 0),
        (t.paddingTop = 0),
        (t.paddingRight = 0),
        (t.paddingBottom = 0),
        (t.minSize = { width: 0, height: 0 });
    },
    afterSetDimensions: Fi,
    beforeBuildLabels: Fi,
    buildLabels: Fi,
    afterBuildLabels: Fi,
    beforeFit: Fi,
    fit: function () {
      var t,
        e = this,
        n = e.options,
        i = (e.minSize = {}),
        a = e.isHorizontal();
      n.display
        ? ((t =
            (H.isArray(n.text) ? n.text.length : 1) *
              H.options._parseFont(n).lineHeight +
            2 * n.padding),
          (e.width = i.width = a ? e.maxWidth : t),
          (e.height = i.height = a ? t : e.maxHeight))
        : (e.width = i.width = e.height = i.height = 0);
    },
    afterFit: Fi,
    isHorizontal: function () {
      var t = this.options.position;
      return "top" === t || "bottom" === t;
    },
    draw: function () {
      var t = this,
        e = t.ctx,
        n = t.options;
      if (n.display) {
        var i,
          a,
          r,
          o = H.options._parseFont(n),
          s = o.lineHeight,
          l = s / 2 + n.padding,
          u = 0,
          d = t.top,
          h = t.left,
          c = t.bottom,
          f = t.right;
        (e.fillStyle = H.valueOrDefault(
          n.fontColor,
          W.global.defaultFontColor
        )),
          (e.font = o.string),
          t.isHorizontal()
            ? ((a = h + (f - h) / 2), (r = d + l), (i = f - h))
            : ((a = "left" === n.position ? h + l : f - l),
              (r = d + (c - d) / 2),
              (i = c - d),
              (u = Math.PI * ("left" === n.position ? -0.5 : 0.5))),
          e.save(),
          e.translate(a, r),
          e.rotate(u),
          (e.textAlign = "center"),
          (e.textBaseline = "middle");
        var g = n.text;
        if (H.isArray(g))
          for (var m = 0, p = 0; p < g.length; ++p)
            e.fillText(g[p], 0, m, i), (m += s);
        else e.fillText(g, 0, 0, i);
        e.restore();
      }
    },
  });
  function Li(t, e) {
    var n = new Ii({ ctx: t.ctx, options: e, chart: t });
    me.configure(t, n, e), me.addBox(t, n), (t.titleBlock = n);
  }
  var Ri = {},
    Ni = Mi,
    Wi = Ai,
    Yi = {
      id: "title",
      _element: Ii,
      beforeInit: function (t) {
        var e = t.options.title;
        e && Li(t, e);
      },
      beforeUpdate: function (t) {
        var e = t.options.title,
          n = t.titleBlock;
        e
          ? (H.mergeIf(e, W.global.title),
            n ? (me.configure(t, n, e), (n.options = e)) : Li(t, e))
          : n && (me.removeBox(t, n), delete t.titleBlock);
      },
    };
  for (var zi in ((Ri.filler = Ni),
  (Ri.legend = Wi),
  (Ri.title = Yi),
  (en.helpers = H),
  (function () {
    function t(t, e, n) {
      var i;
      return (
        "string" == typeof t
          ? ((i = parseInt(t, 10)),
            -1 !== t.indexOf("%") && (i = (i / 100) * e.parentNode[n]))
          : (i = t),
        i
      );
    }
    function e(t) {
      return null != t && "none" !== t;
    }
    function n(n, i, a) {
      var r = document.defaultView,
        o = H._getParentNode(n),
        s = r.getComputedStyle(n)[i],
        l = r.getComputedStyle(o)[i],
        u = e(s),
        d = e(l),
        h = Number.POSITIVE_INFINITY;
      return u || d ? Math.min(u ? t(s, n, a) : h, d ? t(l, o, a) : h) : "none";
    }
    (H.where = function (t, e) {
      if (H.isArray(t) && Array.prototype.filter) return t.filter(e);
      var n = [];
      return (
        H.each(t, function (t) {
          e(t) && n.push(t);
        }),
        n
      );
    }),
      (H.findIndex = Array.prototype.findIndex
        ? function (t, e, n) {
            return t.findIndex(e, n);
          }
        : function (t, e, n) {
            n = void 0 === n ? t : n;
            for (var i = 0, a = t.length; i < a; ++i)
              if (e.call(n, t[i], i, t)) return i;
            return -1;
          }),
      (H.findNextWhere = function (t, e, n) {
        H.isNullOrUndef(n) && (n = -1);
        for (var i = n + 1; i < t.length; i++) {
          var a = t[i];
          if (e(a)) return a;
        }
      }),
      (H.findPreviousWhere = function (t, e, n) {
        H.isNullOrUndef(n) && (n = t.length);
        for (var i = n - 1; i >= 0; i--) {
          var a = t[i];
          if (e(a)) return a;
        }
      }),
      (H.isNumber = function (t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      }),
      (H.almostEquals = function (t, e, n) {
        return Math.abs(t - e) < n;
      }),
      (H.almostWhole = function (t, e) {
        var n = Math.round(t);
        return n - e <= t && n + e >= t;
      }),
      (H.max = function (t) {
        return t.reduce(function (t, e) {
          return isNaN(e) ? t : Math.max(t, e);
        }, Number.NEGATIVE_INFINITY);
      }),
      (H.min = function (t) {
        return t.reduce(function (t, e) {
          return isNaN(e) ? t : Math.min(t, e);
        }, Number.POSITIVE_INFINITY);
      }),
      (H.sign = Math.sign
        ? function (t) {
            return Math.sign(t);
          }
        : function (t) {
            return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
          }),
      (H.toRadians = function (t) {
        return t * (Math.PI / 180);
      }),
      (H.toDegrees = function (t) {
        return t * (180 / Math.PI);
      }),
      (H._decimalPlaces = function (t) {
        if (H.isFinite(t)) {
          for (var e = 1, n = 0; Math.round(t * e) / e !== t; ) (e *= 10), n++;
          return n;
        }
      }),
      (H.getAngleFromPoint = function (t, e) {
        var n = e.x - t.x,
          i = e.y - t.y,
          a = Math.sqrt(n * n + i * i),
          r = Math.atan2(i, n);
        return (
          r < -0.5 * Math.PI && (r += 2 * Math.PI), { angle: r, distance: a }
        );
      }),
      (H.distanceBetweenPoints = function (t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }),
      (H.aliasPixel = function (t) {
        return t % 2 == 0 ? 0 : 0.5;
      }),
      (H._alignPixel = function (t, e, n) {
        var i = t.currentDevicePixelRatio,
          a = n / 2;
        return Math.round((e - a) * i) / i + a;
      }),
      (H.splineCurve = function (t, e, n, i) {
        var a = t.skip ? e : t,
          r = e,
          o = n.skip ? e : n,
          s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
          l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
          u = s / (s + l),
          d = l / (s + l),
          h = i * (u = isNaN(u) ? 0 : u),
          c = i * (d = isNaN(d) ? 0 : d);
        return {
          previous: { x: r.x - h * (o.x - a.x), y: r.y - h * (o.y - a.y) },
          next: { x: r.x + c * (o.x - a.x), y: r.y + c * (o.y - a.y) },
        };
      }),
      (H.EPSILON = Number.EPSILON || 1e-14),
      (H.splineCurveMonotone = function (t) {
        var e,
          n,
          i,
          a,
          r,
          o,
          s,
          l,
          u,
          d = (t || []).map(function (t) {
            return { model: t._model, deltaK: 0, mK: 0 };
          }),
          h = d.length;
        for (e = 0; e < h; ++e)
          if (!(i = d[e]).model.skip) {
            if (
              ((n = e > 0 ? d[e - 1] : null),
              (a = e < h - 1 ? d[e + 1] : null) && !a.model.skip)
            ) {
              var c = a.model.x - i.model.x;
              i.deltaK = 0 !== c ? (a.model.y - i.model.y) / c : 0;
            }
            !n || n.model.skip
              ? (i.mK = i.deltaK)
              : !a || a.model.skip
              ? (i.mK = n.deltaK)
              : this.sign(n.deltaK) !== this.sign(i.deltaK)
              ? (i.mK = 0)
              : (i.mK = (n.deltaK + i.deltaK) / 2);
          }
        for (e = 0; e < h - 1; ++e)
          (i = d[e]),
            (a = d[e + 1]),
            i.model.skip ||
              a.model.skip ||
              (H.almostEquals(i.deltaK, 0, this.EPSILON)
                ? (i.mK = a.mK = 0)
                : ((r = i.mK / i.deltaK),
                  (o = a.mK / i.deltaK),
                  (l = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 ||
                    ((s = 3 / Math.sqrt(l)),
                    (i.mK = r * s * i.deltaK),
                    (a.mK = o * s * i.deltaK))));
        for (e = 0; e < h; ++e)
          (i = d[e]).model.skip ||
            ((n = e > 0 ? d[e - 1] : null),
            (a = e < h - 1 ? d[e + 1] : null),
            n &&
              !n.model.skip &&
              ((u = (i.model.x - n.model.x) / 3),
              (i.model.controlPointPreviousX = i.model.x - u),
              (i.model.controlPointPreviousY = i.model.y - u * i.mK)),
            a &&
              !a.model.skip &&
              ((u = (a.model.x - i.model.x) / 3),
              (i.model.controlPointNextX = i.model.x + u),
              (i.model.controlPointNextY = i.model.y + u * i.mK)));
      }),
      (H.nextItem = function (t, e, n) {
        return n
          ? e >= t.length - 1
            ? t[0]
            : t[e + 1]
          : e >= t.length - 1
          ? t[t.length - 1]
          : t[e + 1];
      }),
      (H.previousItem = function (t, e, n) {
        return n
          ? e <= 0
            ? t[t.length - 1]
            : t[e - 1]
          : e <= 0
          ? t[0]
          : t[e - 1];
      }),
      (H.niceNum = function (t, e) {
        var n = Math.floor(H.log10(t)),
          i = t / Math.pow(10, n);
        return (
          (e
            ? i < 1.5
              ? 1
              : i < 3
              ? 2
              : i < 7
              ? 5
              : 10
            : i <= 1
            ? 1
            : i <= 2
            ? 2
            : i <= 5
            ? 5
            : 10) * Math.pow(10, n)
        );
      }),
      (H.requestAnimFrame =
        "undefined" == typeof window
          ? function (t) {
              t();
            }
          : window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (t) {
              return window.setTimeout(t, 1e3 / 60);
            }),
      (H.getRelativePosition = function (t, e) {
        var n,
          i,
          a = t.originalEvent || t,
          r = t.target || t.srcElement,
          o = r.getBoundingClientRect(),
          s = a.touches;
        s && s.length > 0
          ? ((n = s[0].clientX), (i = s[0].clientY))
          : ((n = a.clientX), (i = a.clientY));
        var l = parseFloat(H.getStyle(r, "padding-left")),
          u = parseFloat(H.getStyle(r, "padding-top")),
          d = parseFloat(H.getStyle(r, "padding-right")),
          h = parseFloat(H.getStyle(r, "padding-bottom")),
          c = o.right - o.left - l - d,
          f = o.bottom - o.top - u - h;
        return {
          x: (n = Math.round(
            (((n - o.left - l) / c) * r.width) / e.currentDevicePixelRatio
          )),
          y: (i = Math.round(
            (((i - o.top - u) / f) * r.height) / e.currentDevicePixelRatio
          )),
        };
      }),
      (H.getConstraintWidth = function (t) {
        return n(t, "max-width", "clientWidth");
      }),
      (H.getConstraintHeight = function (t) {
        return n(t, "max-height", "clientHeight");
      }),
      (H._calculatePadding = function (t, e, n) {
        return (e = H.getStyle(t, e)).indexOf("%") > -1
          ? (n * parseInt(e, 10)) / 100
          : parseInt(e, 10);
      }),
      (H._getParentNode = function (t) {
        var e = t.parentNode;
        return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
      }),
      (H.getMaximumWidth = function (t) {
        var e = H._getParentNode(t);
        if (!e) return t.clientWidth;
        var n = e.clientWidth,
          i =
            n -
            H._calculatePadding(e, "padding-left", n) -
            H._calculatePadding(e, "padding-right", n),
          a = H.getConstraintWidth(t);
        return isNaN(a) ? i : Math.min(i, a);
      }),
      (H.getMaximumHeight = function (t) {
        var e = H._getParentNode(t);
        if (!e) return t.clientHeight;
        var n = e.clientHeight,
          i =
            n -
            H._calculatePadding(e, "padding-top", n) -
            H._calculatePadding(e, "padding-bottom", n),
          a = H.getConstraintHeight(t);
        return isNaN(a) ? i : Math.min(i, a);
      }),
      (H.getStyle = function (t, e) {
        return t.currentStyle
          ? t.currentStyle[e]
          : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
      }),
      (H.retinaScale = function (t, e) {
        var n = (t.currentDevicePixelRatio =
          e || ("undefined" != typeof window && window.devicePixelRatio) || 1);
        if (1 !== n) {
          var i = t.canvas,
            a = t.height,
            r = t.width;
          (i.height = a * n),
            (i.width = r * n),
            t.ctx.scale(n, n),
            i.style.height ||
              i.style.width ||
              ((i.style.height = a + "px"), (i.style.width = r + "px"));
        }
      }),
      (H.fontString = function (t, e, n) {
        return e + " " + t + "px " + n;
      }),
      (H.longestText = function (t, e, n, i) {
        var a = ((i = i || {}).data = i.data || {}),
          r = (i.garbageCollect = i.garbageCollect || []);
        i.font !== e &&
          ((a = i.data = {}), (r = i.garbageCollect = []), (i.font = e)),
          (t.font = e);
        var o,
          s,
          l,
          u,
          d,
          h = 0,
          c = n.length;
        for (o = 0; o < c; o++)
          if (null != (u = n[o]) && !0 !== H.isArray(u))
            h = H.measureText(t, a, r, h, u);
          else if (H.isArray(u))
            for (s = 0, l = u.length; s < l; s++)
              null == (d = u[s]) ||
                H.isArray(d) ||
                (h = H.measureText(t, a, r, h, d));
        var f = r.length / 2;
        if (f > n.length) {
          for (o = 0; o < f; o++) delete a[r[o]];
          r.splice(0, f);
        }
        return h;
      }),
      (H.measureText = function (t, e, n, i, a) {
        var r = e[a];
        return (
          r || ((r = e[a] = t.measureText(a).width), n.push(a)),
          r > i && (i = r),
          i
        );
      }),
      (H.numberOfLabelLines = function (t) {
        var e = 1;
        return (
          H.each(t, function (t) {
            H.isArray(t) && t.length > e && (e = t.length);
          }),
          e
        );
      }),
      (H.color = k
        ? function (t) {
            return (
              t instanceof CanvasGradient && (t = W.global.defaultColor), k(t)
            );
          }
        : function (t) {
            return console.error("Color.js not found!"), t;
          }),
      (H.getHoverColor = function (t) {
        return t instanceof CanvasPattern || t instanceof CanvasGradient
          ? t
          : H.color(t).saturate(0.5).darken(0.1).rgbString();
      });
  })(),
  (en._adapters = rn),
  (en.Animation = K),
  (en.animationService = J),
  (en.controllers = Jt),
  (en.DatasetController = it),
  (en.defaults = W),
  (en.Element = $),
  (en.elements = wt),
  (en.Interaction = re),
  (en.layouts = me),
  (en.platform = Ie),
  (en.plugins = Le),
  (en.Scale = xn),
  (en.scaleService = Re),
  (en.Ticks = on),
  (en.Tooltip = Ge),
  en.helpers.each(fi, function (t, e) {
    en.scaleService.registerScaleType(e, t, t._defaults);
  }),
  Ri))
    Ri.hasOwnProperty(zi) && en.plugins.register(Ri[zi]);
  en.platform.initialize();
  var Ei = en;
  return (
    "undefined" != typeof window && (window.Chart = en),
    (en.Chart = en),
    (en.Legend = Ri.legend._element),
    (en.Title = Ri.title._element),
    (en.pluginService = en.plugins),
    (en.PluginBase = en.Element.extend({})),
    (en.canvasHelpers = en.helpers.canvas),
    (en.layoutService = en.layouts),
    (en.LinearScaleBase = Dn),
    en.helpers.each(
      ["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"],
      function (t) {
        en[t] = function (e, n) {
          return new en(
            e,
            en.helpers.merge(n || {}, {
              type: t.charAt(0).toLowerCase() + t.slice(1),
            })
          );
        };
      }
    ),
    Ei
  );
});
