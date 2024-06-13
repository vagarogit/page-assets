var Q3 = Object.defineProperty;
var X3 = (e, t, n) =>
  t in e
    ? Q3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Sr = (e, t, n) => (X3(e, typeof t != "symbol" ? t + "" : t, n), n);
function J3(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var zo =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Zu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Y2 = { exports: {} },
  La = {},
  Q2 = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var To = Symbol.for("react.element"),
  em = Symbol.for("react.portal"),
  tm = Symbol.for("react.fragment"),
  nm = Symbol.for("react.strict_mode"),
  rm = Symbol.for("react.profiler"),
  im = Symbol.for("react.provider"),
  om = Symbol.for("react.context"),
  sm = Symbol.for("react.forward_ref"),
  am = Symbol.for("react.suspense"),
  lm = Symbol.for("react.memo"),
  cm = Symbol.for("react.lazy"),
  Gd = Symbol.iterator;
function um(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gd && e[Gd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X2 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  J2 = Object.assign,
  eh = {};
function ci(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = eh),
    (this.updater = n || X2);
}
ci.prototype.isReactComponent = {};
ci.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ci.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function th() {}
th.prototype = ci.prototype;
function Ku(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = eh),
    (this.updater = n || X2);
}
var Gu = (Ku.prototype = new th());
Gu.constructor = Ku;
J2(Gu, ci.prototype);
Gu.isPureReactComponent = !0;
var qd = Array.isArray,
  nh = Object.prototype.hasOwnProperty,
  qu = { current: null },
  rh = { key: !0, ref: !0, __self: !0, __source: !0 };
function ih(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      nh.call(t, r) && !rh.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: To,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: qu.current,
  };
}
function dm(e, t) {
  return {
    $$typeof: To,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Yu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === To;
}
function fm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Yd = /\/+/g;
function sl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? fm("" + e.key)
    : t.toString(36);
}
function ws(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case To:
          case em:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + sl(s, 0) : r),
      qd(i)
        ? ((n = ""),
          e != null && (n = e.replace(Yd, "$&/") + "/"),
          ws(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Yu(i) &&
            (i = dm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Yd, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), qd(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + sl(o, a);
      s += ws(o, t, n, l, i);
    }
  else if (((l = um(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + sl(o, a++)), (s += ws(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Uo(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ws(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function hm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var He = { current: null },
  Cs = { transition: null },
  pm = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: Cs,
    ReactCurrentOwner: qu,
  };
function oh() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = {
  map: Uo,
  forEach: function (e, t, n) {
    Uo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Uo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Uo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Yu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
U.Component = ci;
U.Fragment = tm;
U.Profiler = rm;
U.PureComponent = Ku;
U.StrictMode = nm;
U.Suspense = am;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pm;
U.act = oh;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = J2({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = qu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      nh.call(t, l) &&
        !rh.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: To, type: e.type, key: i, ref: o, props: r, _owner: s };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: om,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: im, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = ih;
U.createFactory = function (e) {
  var t = ih.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: sm, render: e };
};
U.isValidElement = Yu;
U.lazy = function (e) {
  return { $$typeof: cm, _payload: { _status: -1, _result: e }, _init: hm };
};
U.memo = function (e, t) {
  return { $$typeof: lm, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = Cs.transition;
  Cs.transition = {};
  try {
    e();
  } finally {
    Cs.transition = t;
  }
};
U.unstable_act = oh;
U.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
U.useContext = function (e) {
  return He.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
U.useId = function () {
  return He.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return He.current.useRef(e);
};
U.useState = function (e) {
  return He.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return He.current.useTransition();
};
U.version = "18.3.1";
Q2.exports = U;
var p = Q2.exports;
const ie = Zu(p),
  mm = J3({ __proto__: null, default: ie }, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gm = p,
  vm = Symbol.for("react.element"),
  ym = Symbol.for("react.fragment"),
  xm = Object.prototype.hasOwnProperty,
  wm = gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cm = { key: !0, ref: !0, __self: !0, __source: !0 };
function sh(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) xm.call(t, r) && !Cm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: vm,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: wm.current,
  };
}
La.Fragment = ym;
La.jsx = sh;
La.jsxs = sh;
Y2.exports = La;
var u = Y2.exports,
  fc = {},
  ah = { exports: {} },
  ot = {},
  lh = { exports: {} },
  ch = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, D) {
    var F = j.length;
    j.push(D);
    e: for (; 0 < F; ) {
      var K = (F - 1) >>> 1,
        J = j[K];
      if (0 < i(J, D)) (j[K] = D), (j[F] = J), (F = K);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var D = j[0],
      F = j.pop();
    if (F !== D) {
      j[0] = F;
      e: for (var K = 0, J = j.length, at = J >>> 1; K < at; ) {
        var lt = 2 * (K + 1) - 1,
          qe = j[lt],
          Te = lt + 1,
          jt = j[Te];
        if (0 > i(qe, F))
          Te < J && 0 > i(jt, qe)
            ? ((j[K] = jt), (j[Te] = F), (K = Te))
            : ((j[K] = qe), (j[lt] = F), (K = lt));
        else if (Te < J && 0 > i(jt, F)) (j[K] = jt), (j[Te] = F), (K = Te);
        else break e;
      }
    }
    return D;
  }
  function i(j, D) {
    var F = j.sortIndex - D.sortIndex;
    return F !== 0 ? F : j.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    c = [],
    d = 1,
    f = null,
    h = 3,
    g = !1,
    w = !1,
    v = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(j) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) r(c);
      else if (D.startTime <= j)
        r(c), (D.sortIndex = D.expirationTime), t(l, D);
      else break;
      D = n(c);
    }
  }
  function C(j) {
    if (((v = !1), x(j), !w))
      if (n(l) !== null) (w = !0), Z(E);
      else {
        var D = n(c);
        D !== null && H(C, D.startTime - j);
      }
  }
  function E(j, D) {
    (w = !1), v && ((v = !1), m(S), (S = -1)), (g = !0);
    var F = h;
    try {
      for (
        x(D), f = n(l);
        f !== null && (!(f.expirationTime > D) || (j && !I()));

      ) {
        var K = f.callback;
        if (typeof K == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var J = K(f.expirationTime <= D);
          (D = e.unstable_now()),
            typeof J == "function" ? (f.callback = J) : f === n(l) && r(l),
            x(D);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var at = !0;
      else {
        var lt = n(c);
        lt !== null && H(C, lt.startTime - D), (at = !1);
      }
      return at;
    } finally {
      (f = null), (h = F), (g = !1);
    }
  }
  var T = !1,
    N = null,
    S = -1,
    P = 5,
    b = -1;
  function I() {
    return !(e.unstable_now() - b < P);
  }
  function V() {
    if (N !== null) {
      var j = e.unstable_now();
      b = j;
      var D = !0;
      try {
        D = N(!0, j);
      } finally {
        D ? z() : ((T = !1), (N = null));
      }
    } else T = !1;
  }
  var z;
  if (typeof y == "function")
    z = function () {
      y(V);
    };
  else if (typeof MessageChannel < "u") {
    var _ = new MessageChannel(),
      B = _.port2;
    (_.port1.onmessage = V),
      (z = function () {
        B.postMessage(null);
      });
  } else
    z = function () {
      k(V, 0);
    };
  function Z(j) {
    (N = j), T || ((T = !0), z());
  }
  function H(j, D) {
    S = k(function () {
      j(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), Z(E));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (j) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = h;
      }
      var F = h;
      h = D;
      try {
        return j();
      } finally {
        h = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, D) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var F = h;
      h = j;
      try {
        return D();
      } finally {
        h = F;
      }
    }),
    (e.unstable_scheduleCallback = function (j, D, F) {
      var K = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? K + F : K))
          : (F = K),
        j)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = F + J),
        (j = {
          id: d++,
          callback: D,
          priorityLevel: j,
          startTime: F,
          expirationTime: J,
          sortIndex: -1,
        }),
        F > K
          ? ((j.sortIndex = F),
            t(c, j),
            n(l) === null &&
              j === n(c) &&
              (v ? (m(S), (S = -1)) : (v = !0), H(C, F - K)))
          : ((j.sortIndex = J), t(l, j), w || g || ((w = !0), Z(E))),
        j
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (j) {
      var D = h;
      return function () {
        var F = h;
        h = D;
        try {
          return j.apply(this, arguments);
        } finally {
          h = F;
        }
      };
    });
})(ch);
lh.exports = ch;
var km = lh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Em = p,
  rt = km;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var uh = new Set(),
  qi = {};
function xr(e, t) {
  Jr(e, t), Jr(e + "Capture", t);
}
function Jr(e, t) {
  for (qi[e] = t, e = 0; e < t.length; e++) uh.add(t[e]);
}
var Jt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  hc = Object.prototype.hasOwnProperty,
  Sm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qd = {},
  Xd = {};
function Tm(e) {
  return hc.call(Xd, e)
    ? !0
    : hc.call(Qd, e)
    ? !1
    : Sm.test(e)
    ? (Xd[e] = !0)
    : ((Qd[e] = !0), !1);
}
function Nm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Lm(e, t, n, r) {
  if (t === null || typeof t > "u" || Nm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Be(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Me[e] = new Be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Me[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Me[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Me[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Me[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Me[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Me[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Me[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Me[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qu = /[\-:]([a-z])/g;
function Xu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qu, Xu);
    Me[t] = new Be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qu, Xu);
    Me[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Qu, Xu);
  Me[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Me[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Me.xlinkHref = new Be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Me[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ju(e, t, n, r) {
  var i = Me.hasOwnProperty(t) ? Me[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Lm(t, n, i, r) && (n = null),
    r || i === null
      ? Tm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var cn = Em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Wo = Symbol.for("react.element"),
  Pr = Symbol.for("react.portal"),
  Mr = Symbol.for("react.fragment"),
  e1 = Symbol.for("react.strict_mode"),
  pc = Symbol.for("react.profiler"),
  dh = Symbol.for("react.provider"),
  fh = Symbol.for("react.context"),
  t1 = Symbol.for("react.forward_ref"),
  mc = Symbol.for("react.suspense"),
  gc = Symbol.for("react.suspense_list"),
  n1 = Symbol.for("react.memo"),
  gn = Symbol.for("react.lazy"),
  hh = Symbol.for("react.offscreen"),
  Jd = Symbol.iterator;
function vi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Jd && e[Jd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fe = Object.assign,
  al;
function bi(e) {
  if (al === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      al = (t && t[1]) || "";
    }
  return (
    `
` +
    al +
    e
  );
}
var ll = !1;
function cl(e, t) {
  if (!e || ll) return "";
  ll = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (ll = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? bi(e) : "";
}
function bm(e) {
  switch (e.tag) {
    case 5:
      return bi(e.type);
    case 16:
      return bi("Lazy");
    case 13:
      return bi("Suspense");
    case 19:
      return bi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = cl(e.type, !1)), e;
    case 11:
      return (e = cl(e.type.render, !1)), e;
    case 1:
      return (e = cl(e.type, !0)), e;
    default:
      return "";
  }
}
function vc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mr:
      return "Fragment";
    case Pr:
      return "Portal";
    case pc:
      return "Profiler";
    case e1:
      return "StrictMode";
    case mc:
      return "Suspense";
    case gc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fh:
        return (e.displayName || "Context") + ".Consumer";
      case dh:
        return (e._context.displayName || "Context") + ".Provider";
      case t1:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case n1:
        return (
          (t = e.displayName || null), t !== null ? t : vc(e.type) || "Memo"
        );
      case gn:
        (t = e._payload), (e = e._init);
        try {
          return vc(e(t));
        } catch {}
    }
  return null;
}
function Pm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return vc(t);
    case 8:
      return t === e1 ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Dn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ph(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Mm(e) {
  var t = ph(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Zo(e) {
  e._valueTracker || (e._valueTracker = Mm(e));
}
function mh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ph(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Hs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function yc(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ef(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Dn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function gh(e, t) {
  (t = t.checked), t != null && Ju(e, "checked", t, !1);
}
function xc(e, t) {
  gh(e, t);
  var n = Dn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? wc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && wc(e, t.type, Dn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function tf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function wc(e, t, n) {
  (t !== "number" || Hs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pi = Array.isArray;
function Wr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Dn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Cc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function nf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (Pi(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Dn(n) };
}
function vh(e, t) {
  var n = Dn(t.value),
    r = Dn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function rf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function yh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? yh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ko,
  xh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ko = Ko || document.createElement("div"),
          Ko.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ko.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Di = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Di).forEach(function (e) {
  jm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Di[t] = Di[e]);
  });
});
function wh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Di.hasOwnProperty(e) && Di[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ch(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = wh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Rm = fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ec(e, t) {
  if (t) {
    if (Rm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function Sc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Tc = null;
function r1(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Nc = null,
  Zr = null,
  Kr = null;
function of(e) {
  if ((e = bo(e))) {
    if (typeof Nc != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = Ra(t)), Nc(e.stateNode, e.type, t));
  }
}
function kh(e) {
  Zr ? (Kr ? Kr.push(e) : (Kr = [e])) : (Zr = e);
}
function Eh() {
  if (Zr) {
    var e = Zr,
      t = Kr;
    if (((Kr = Zr = null), of(e), t)) for (e = 0; e < t.length; e++) of(t[e]);
  }
}
function Sh(e, t) {
  return e(t);
}
function Th() {}
var ul = !1;
function Nh(e, t, n) {
  if (ul) return e(t, n);
  ul = !0;
  try {
    return Sh(e, t, n);
  } finally {
    (ul = !1), (Zr !== null || Kr !== null) && (Th(), Eh());
  }
}
function Qi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ra(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var Lc = !1;
if (Jt)
  try {
    var yi = {};
    Object.defineProperty(yi, "passive", {
      get: function () {
        Lc = !0;
      },
    }),
      window.addEventListener("test", yi, yi),
      window.removeEventListener("test", yi, yi);
  } catch {
    Lc = !1;
  }
function Am(e, t, n, r, i, o, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var $i = !1,
  Bs = null,
  zs = !1,
  bc = null,
  Im = {
    onError: function (e) {
      ($i = !0), (Bs = e);
    },
  };
function Dm(e, t, n, r, i, o, s, a, l) {
  ($i = !1), (Bs = null), Am.apply(Im, arguments);
}
function $m(e, t, n, r, i, o, s, a, l) {
  if ((Dm.apply(this, arguments), $i)) {
    if ($i) {
      var c = Bs;
      ($i = !1), (Bs = null);
    } else throw Error(M(198));
    zs || ((zs = !0), (bc = c));
  }
}
function wr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Lh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function sf(e) {
  if (wr(e) !== e) throw Error(M(188));
}
function Om(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = wr(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return sf(i), e;
        if (o === r) return sf(i), t;
        o = o.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function bh(e) {
  return (e = Om(e)), e !== null ? Ph(e) : null;
}
function Ph(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ph(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mh = rt.unstable_scheduleCallback,
  af = rt.unstable_cancelCallback,
  Vm = rt.unstable_shouldYield,
  _m = rt.unstable_requestPaint,
  me = rt.unstable_now,
  Fm = rt.unstable_getCurrentPriorityLevel,
  i1 = rt.unstable_ImmediatePriority,
  jh = rt.unstable_UserBlockingPriority,
  Us = rt.unstable_NormalPriority,
  Hm = rt.unstable_LowPriority,
  Rh = rt.unstable_IdlePriority,
  ba = null,
  Ot = null;
function Bm(e) {
  if (Ot && typeof Ot.onCommitFiberRoot == "function")
    try {
      Ot.onCommitFiberRoot(ba, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Nt = Math.clz32 ? Math.clz32 : Wm,
  zm = Math.log,
  Um = Math.LN2;
function Wm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((zm(e) / Um) | 0)) | 0;
}
var Go = 64,
  qo = 4194304;
function Mi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ws(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Mi(a)) : ((o &= s), o !== 0 && (r = Mi(o)));
  } else (s = n & ~i), s !== 0 ? (r = Mi(s)) : o !== 0 && (r = Mi(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Nt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Zm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Km(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Nt(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = Zm(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Pc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ah() {
  var e = Go;
  return (Go <<= 1), !(Go & 4194240) && (Go = 64), e;
}
function dl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function No(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Nt(t)),
    (e[t] = n);
}
function Gm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Nt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function o1(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Nt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var X = 0;
function Ih(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Dh,
  s1,
  $h,
  Oh,
  Vh,
  Mc = !1,
  Yo = [],
  Tn = null,
  Nn = null,
  Ln = null,
  Xi = new Map(),
  Ji = new Map(),
  wn = [],
  qm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function lf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tn = null;
      break;
    case "dragenter":
    case "dragleave":
      Nn = null;
      break;
    case "mouseover":
    case "mouseout":
      Ln = null;
      break;
    case "pointerover":
    case "pointerout":
      Xi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ji.delete(t.pointerId);
  }
}
function xi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = bo(t)), t !== null && s1(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Ym(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Tn = xi(Tn, e, t, n, r, i)), !0;
    case "dragenter":
      return (Nn = xi(Nn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ln = xi(Ln, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Xi.set(o, xi(Xi.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Ji.set(o, xi(Ji.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function _h(e) {
  var t = tr(e.target);
  if (t !== null) {
    var n = wr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Lh(n)), t !== null)) {
          (e.blockedOn = t),
            Vh(e.priority, function () {
              $h(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ks(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = jc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Tc = r), n.target.dispatchEvent(r), (Tc = null);
    } else return (t = bo(n)), t !== null && s1(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function cf(e, t, n) {
  ks(e) && n.delete(t);
}
function Qm() {
  (Mc = !1),
    Tn !== null && ks(Tn) && (Tn = null),
    Nn !== null && ks(Nn) && (Nn = null),
    Ln !== null && ks(Ln) && (Ln = null),
    Xi.forEach(cf),
    Ji.forEach(cf);
}
function wi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Mc ||
      ((Mc = !0),
      rt.unstable_scheduleCallback(rt.unstable_NormalPriority, Qm)));
}
function eo(e) {
  function t(i) {
    return wi(i, e);
  }
  if (0 < Yo.length) {
    wi(Yo[0], e);
    for (var n = 1; n < Yo.length; n++) {
      var r = Yo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Tn !== null && wi(Tn, e),
      Nn !== null && wi(Nn, e),
      Ln !== null && wi(Ln, e),
      Xi.forEach(t),
      Ji.forEach(t),
      n = 0;
    n < wn.length;
    n++
  )
    (r = wn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wn.length && ((n = wn[0]), n.blockedOn === null); )
    _h(n), n.blockedOn === null && wn.shift();
}
var Gr = cn.ReactCurrentBatchConfig,
  Zs = !0;
function Xm(e, t, n, r) {
  var i = X,
    o = Gr.transition;
  Gr.transition = null;
  try {
    (X = 1), a1(e, t, n, r);
  } finally {
    (X = i), (Gr.transition = o);
  }
}
function Jm(e, t, n, r) {
  var i = X,
    o = Gr.transition;
  Gr.transition = null;
  try {
    (X = 4), a1(e, t, n, r);
  } finally {
    (X = i), (Gr.transition = o);
  }
}
function a1(e, t, n, r) {
  if (Zs) {
    var i = jc(e, t, n, r);
    if (i === null) Cl(e, t, r, Ks, n), lf(e, r);
    else if (Ym(i, e, t, n, r)) r.stopPropagation();
    else if ((lf(e, r), t & 4 && -1 < qm.indexOf(e))) {
      for (; i !== null; ) {
        var o = bo(i);
        if (
          (o !== null && Dh(o),
          (o = jc(e, t, n, r)),
          o === null && Cl(e, t, r, Ks, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Cl(e, t, r, null, n);
  }
}
var Ks = null;
function jc(e, t, n, r) {
  if (((Ks = null), (e = r1(r)), (e = tr(e)), e !== null))
    if (((t = wr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Lh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ks = e), null;
}
function Fh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Fm()) {
        case i1:
          return 1;
        case jh:
          return 4;
        case Us:
        case Hm:
          return 16;
        case Rh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kn = null,
  l1 = null,
  Es = null;
function Hh() {
  if (Es) return Es;
  var e,
    t = l1,
    n = t.length,
    r,
    i = "value" in kn ? kn.value : kn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Es = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ss(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Qo() {
  return !0;
}
function uf() {
  return !1;
}
function st(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Qo
        : uf),
      (this.isPropagationStopped = uf),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Qo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Qo));
      },
      persist: function () {},
      isPersistent: Qo,
    }),
    t
  );
}
var ui = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  c1 = st(ui),
  Lo = fe({}, ui, { view: 0, detail: 0 }),
  e8 = st(Lo),
  fl,
  hl,
  Ci,
  Pa = fe({}, Lo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: u1,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ci &&
            (Ci && e.type === "mousemove"
              ? ((fl = e.screenX - Ci.screenX), (hl = e.screenY - Ci.screenY))
              : (hl = fl = 0),
            (Ci = e)),
          fl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : hl;
    },
  }),
  df = st(Pa),
  t8 = fe({}, Pa, { dataTransfer: 0 }),
  n8 = st(t8),
  r8 = fe({}, Lo, { relatedTarget: 0 }),
  pl = st(r8),
  i8 = fe({}, ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  o8 = st(i8),
  s8 = fe({}, ui, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  a8 = st(s8),
  l8 = fe({}, ui, { data: 0 }),
  ff = st(l8),
  c8 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  u8 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  d8 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function f8(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = d8[e]) ? !!t[e] : !1;
}
function u1() {
  return f8;
}
var h8 = fe({}, Lo, {
    key: function (e) {
      if (e.key) {
        var t = c8[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ss(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? u8[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: u1,
    charCode: function (e) {
      return e.type === "keypress" ? Ss(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ss(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  p8 = st(h8),
  m8 = fe({}, Pa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  hf = st(m8),
  g8 = fe({}, Lo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: u1,
  }),
  v8 = st(g8),
  y8 = fe({}, ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  x8 = st(y8),
  w8 = fe({}, Pa, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  C8 = st(w8),
  k8 = [9, 13, 27, 32],
  d1 = Jt && "CompositionEvent" in window,
  Oi = null;
Jt && "documentMode" in document && (Oi = document.documentMode);
var E8 = Jt && "TextEvent" in window && !Oi,
  Bh = Jt && (!d1 || (Oi && 8 < Oi && 11 >= Oi)),
  pf = " ",
  mf = !1;
function zh(e, t) {
  switch (e) {
    case "keyup":
      return k8.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Uh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var jr = !1;
function S8(e, t) {
  switch (e) {
    case "compositionend":
      return Uh(t);
    case "keypress":
      return t.which !== 32 ? null : ((mf = !0), pf);
    case "textInput":
      return (e = t.data), e === pf && mf ? null : e;
    default:
      return null;
  }
}
function T8(e, t) {
  if (jr)
    return e === "compositionend" || (!d1 && zh(e, t))
      ? ((e = Hh()), (Es = l1 = kn = null), (jr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Bh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var N8 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function gf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!N8[e.type] : t === "textarea";
}
function Wh(e, t, n, r) {
  kh(r),
    (t = Gs(t, "onChange")),
    0 < t.length &&
      ((n = new c1("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vi = null,
  to = null;
function L8(e) {
  n5(e, 0);
}
function Ma(e) {
  var t = Ir(e);
  if (mh(t)) return e;
}
function b8(e, t) {
  if (e === "change") return t;
}
var Zh = !1;
if (Jt) {
  var ml;
  if (Jt) {
    var gl = "oninput" in document;
    if (!gl) {
      var vf = document.createElement("div");
      vf.setAttribute("oninput", "return;"),
        (gl = typeof vf.oninput == "function");
    }
    ml = gl;
  } else ml = !1;
  Zh = ml && (!document.documentMode || 9 < document.documentMode);
}
function yf() {
  Vi && (Vi.detachEvent("onpropertychange", Kh), (to = Vi = null));
}
function Kh(e) {
  if (e.propertyName === "value" && Ma(to)) {
    var t = [];
    Wh(t, to, e, r1(e)), Nh(L8, t);
  }
}
function P8(e, t, n) {
  e === "focusin"
    ? (yf(), (Vi = t), (to = n), Vi.attachEvent("onpropertychange", Kh))
    : e === "focusout" && yf();
}
function M8(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ma(to);
}
function j8(e, t) {
  if (e === "click") return Ma(t);
}
function R8(e, t) {
  if (e === "input" || e === "change") return Ma(t);
}
function A8(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var bt = typeof Object.is == "function" ? Object.is : A8;
function no(e, t) {
  if (bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!hc.call(t, i) || !bt(e[i], t[i])) return !1;
  }
  return !0;
}
function xf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function wf(e, t) {
  var n = xf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = xf(n);
  }
}
function Gh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Gh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function qh() {
  for (var e = window, t = Hs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hs(e.document);
  }
  return t;
}
function f1(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function I8(e) {
  var t = qh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && f1(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = wf(n, o));
        var s = wf(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var D8 = Jt && "documentMode" in document && 11 >= document.documentMode,
  Rr = null,
  Rc = null,
  _i = null,
  Ac = !1;
function Cf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ac ||
    Rr == null ||
    Rr !== Hs(r) ||
    ((r = Rr),
    "selectionStart" in r && f1(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (_i && no(_i, r)) ||
      ((_i = r),
      (r = Gs(Rc, "onSelect")),
      0 < r.length &&
        ((t = new c1("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Rr))));
}
function Xo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ar = {
    animationend: Xo("Animation", "AnimationEnd"),
    animationiteration: Xo("Animation", "AnimationIteration"),
    animationstart: Xo("Animation", "AnimationStart"),
    transitionend: Xo("Transition", "TransitionEnd"),
  },
  vl = {},
  Yh = {};
Jt &&
  ((Yh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ar.animationend.animation,
    delete Ar.animationiteration.animation,
    delete Ar.animationstart.animation),
  "TransitionEvent" in window || delete Ar.transitionend.transition);
function ja(e) {
  if (vl[e]) return vl[e];
  if (!Ar[e]) return e;
  var t = Ar[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yh) return (vl[e] = t[n]);
  return e;
}
var Qh = ja("animationend"),
  Xh = ja("animationiteration"),
  Jh = ja("animationstart"),
  e5 = ja("transitionend"),
  t5 = new Map(),
  kf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Bn(e, t) {
  t5.set(e, t), xr(t, [e]);
}
for (var yl = 0; yl < kf.length; yl++) {
  var xl = kf[yl],
    $8 = xl.toLowerCase(),
    O8 = xl[0].toUpperCase() + xl.slice(1);
  Bn($8, "on" + O8);
}
Bn(Qh, "onAnimationEnd");
Bn(Xh, "onAnimationIteration");
Bn(Jh, "onAnimationStart");
Bn("dblclick", "onDoubleClick");
Bn("focusin", "onFocus");
Bn("focusout", "onBlur");
Bn(e5, "onTransitionEnd");
Jr("onMouseEnter", ["mouseout", "mouseover"]);
Jr("onMouseLeave", ["mouseout", "mouseover"]);
Jr("onPointerEnter", ["pointerout", "pointerover"]);
Jr("onPointerLeave", ["pointerout", "pointerover"]);
xr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
xr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
xr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
xr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
xr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ji =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  V8 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));
function Ef(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $m(r, t, void 0, e), (e.currentTarget = null);
}
function n5(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          Ef(i, a, c), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Ef(i, a, c), (o = l);
        }
    }
  }
  if (zs) throw ((e = bc), (zs = !1), (bc = null), e);
}
function se(e, t) {
  var n = t[Vc];
  n === void 0 && (n = t[Vc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (r5(t, e, 2, !1), n.add(r));
}
function wl(e, t, n) {
  var r = 0;
  t && (r |= 4), r5(n, e, r, t);
}
var Jo = "_reactListening" + Math.random().toString(36).slice(2);
function ro(e) {
  if (!e[Jo]) {
    (e[Jo] = !0),
      uh.forEach(function (n) {
        n !== "selectionchange" && (V8.has(n) || wl(n, !1, e), wl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Jo] || ((t[Jo] = !0), wl("selectionchange", !1, t));
  }
}
function r5(e, t, n, r) {
  switch (Fh(t)) {
    case 1:
      var i = Xm;
      break;
    case 4:
      i = Jm;
      break;
    default:
      i = a1;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Lc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Cl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = tr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Nh(function () {
    var c = o,
      d = r1(n),
      f = [];
    e: {
      var h = t5.get(e);
      if (h !== void 0) {
        var g = c1,
          w = e;
        switch (e) {
          case "keypress":
            if (Ss(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = p8;
            break;
          case "focusin":
            (w = "focus"), (g = pl);
            break;
          case "focusout":
            (w = "blur"), (g = pl);
            break;
          case "beforeblur":
          case "afterblur":
            g = pl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = df;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = n8;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = v8;
            break;
          case Qh:
          case Xh:
          case Jh:
            g = o8;
            break;
          case e5:
            g = x8;
            break;
          case "scroll":
            g = e8;
            break;
          case "wheel":
            g = C8;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = a8;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = hf;
        }
        var v = (t & 4) !== 0,
          k = !v && e === "scroll",
          m = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var y = c, x; y !== null; ) {
          x = y;
          var C = x.stateNode;
          if (
            (x.tag === 5 &&
              C !== null &&
              ((x = C),
              m !== null && ((C = Qi(y, m)), C != null && v.push(io(y, C, x)))),
            k)
          )
            break;
          y = y.return;
        }
        0 < v.length &&
          ((h = new g(h, w, null, n, d)), f.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Tc &&
            (w = n.relatedTarget || n.fromElement) &&
            (tr(w) || w[en]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = c),
              (w = w ? tr(w) : null),
              w !== null &&
                ((k = wr(w)), w !== k || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((v = df),
            (C = "onMouseLeave"),
            (m = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = hf),
              (C = "onPointerLeave"),
              (m = "onPointerEnter"),
              (y = "pointer")),
            (k = g == null ? h : Ir(g)),
            (x = w == null ? h : Ir(w)),
            (h = new v(C, y + "leave", g, n, d)),
            (h.target = k),
            (h.relatedTarget = x),
            (C = null),
            tr(d) === c &&
              ((v = new v(m, y + "enter", w, n, d)),
              (v.target = x),
              (v.relatedTarget = k),
              (C = v)),
            (k = C),
            g && w)
          )
            t: {
              for (v = g, m = w, y = 0, x = v; x; x = Tr(x)) y++;
              for (x = 0, C = m; C; C = Tr(C)) x++;
              for (; 0 < y - x; ) (v = Tr(v)), y--;
              for (; 0 < x - y; ) (m = Tr(m)), x--;
              for (; y--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = Tr(v)), (m = Tr(m));
              }
              v = null;
            }
          else v = null;
          g !== null && Sf(f, h, g, v, !1),
            w !== null && k !== null && Sf(f, k, w, v, !0);
        }
      }
      e: {
        if (
          ((h = c ? Ir(c) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var E = b8;
        else if (gf(h))
          if (Zh) E = R8;
          else {
            E = M8;
            var T = P8;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (E = j8);
        if (E && (E = E(e, c))) {
          Wh(f, E, n, d);
          break e;
        }
        T && T(e, h, c),
          e === "focusout" &&
            (T = h._wrapperState) &&
            T.controlled &&
            h.type === "number" &&
            wc(h, "number", h.value);
      }
      switch (((T = c ? Ir(c) : window), e)) {
        case "focusin":
          (gf(T) || T.contentEditable === "true") &&
            ((Rr = T), (Rc = c), (_i = null));
          break;
        case "focusout":
          _i = Rc = Rr = null;
          break;
        case "mousedown":
          Ac = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ac = !1), Cf(f, n, d);
          break;
        case "selectionchange":
          if (D8) break;
        case "keydown":
        case "keyup":
          Cf(f, n, d);
      }
      var N;
      if (d1)
        e: {
          switch (e) {
            case "compositionstart":
              var S = "onCompositionStart";
              break e;
            case "compositionend":
              S = "onCompositionEnd";
              break e;
            case "compositionupdate":
              S = "onCompositionUpdate";
              break e;
          }
          S = void 0;
        }
      else
        jr
          ? zh(e, n) && (S = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");
      S &&
        (Bh &&
          n.locale !== "ko" &&
          (jr || S !== "onCompositionStart"
            ? S === "onCompositionEnd" && jr && (N = Hh())
            : ((kn = d),
              (l1 = "value" in kn ? kn.value : kn.textContent),
              (jr = !0))),
        (T = Gs(c, S)),
        0 < T.length &&
          ((S = new ff(S, e, null, n, d)),
          f.push({ event: S, listeners: T }),
          N ? (S.data = N) : ((N = Uh(n)), N !== null && (S.data = N)))),
        (N = E8 ? S8(e, n) : T8(e, n)) &&
          ((c = Gs(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new ff("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = N)));
    }
    n5(f, t);
  });
}
function io(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Qi(e, n)),
      o != null && r.unshift(io(e, o, i)),
      (o = Qi(e, t)),
      o != null && r.push(io(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Tr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Sf(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = Qi(n, o)), l != null && s.unshift(io(n, l, a)))
        : i || ((l = Qi(n, o)), l != null && s.push(io(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var _8 = /\r\n?/g,
  F8 = /\u0000|\uFFFD/g;
function Tf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      _8,
      `
`
    )
    .replace(F8, "");
}
function es(e, t, n) {
  if (((t = Tf(t)), Tf(e) !== t && n)) throw Error(M(425));
}
function qs() {}
var Ic = null,
  Dc = null;
function $c(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Oc = typeof setTimeout == "function" ? setTimeout : void 0,
  H8 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Nf = typeof Promise == "function" ? Promise : void 0,
  B8 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Nf < "u"
      ? function (e) {
          return Nf.resolve(null).then(e).catch(z8);
        }
      : Oc;
function z8(e) {
  setTimeout(function () {
    throw e;
  });
}
function kl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), eo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  eo(t);
}
function bn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Lf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var di = Math.random().toString(36).slice(2),
  It = "__reactFiber$" + di,
  oo = "__reactProps$" + di,
  en = "__reactContainer$" + di,
  Vc = "__reactEvents$" + di,
  U8 = "__reactListeners$" + di,
  W8 = "__reactHandles$" + di;
function tr(e) {
  var t = e[It];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[en] || n[It])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Lf(e); e !== null; ) {
          if ((n = e[It])) return n;
          e = Lf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function bo(e) {
  return (
    (e = e[It] || e[en]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ir(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function Ra(e) {
  return e[oo] || null;
}
var _c = [],
  Dr = -1;
function zn(e) {
  return { current: e };
}
function ae(e) {
  0 > Dr || ((e.current = _c[Dr]), (_c[Dr] = null), Dr--);
}
function oe(e, t) {
  Dr++, (_c[Dr] = e.current), (e.current = t);
}
var $n = {},
  Ve = zn($n),
  Ze = zn(!1),
  dr = $n;
function ei(e, t) {
  var n = e.type.contextTypes;
  if (!n) return $n;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ke(e) {
  return (e = e.childContextTypes), e != null;
}
function Ys() {
  ae(Ze), ae(Ve);
}
function bf(e, t, n) {
  if (Ve.current !== $n) throw Error(M(168));
  oe(Ve, t), oe(Ze, n);
}
function i5(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(M(108, Pm(e) || "Unknown", i));
  return fe({}, n, r);
}
function Qs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $n),
    (dr = Ve.current),
    oe(Ve, e),
    oe(Ze, Ze.current),
    !0
  );
}
function Pf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((e = i5(e, t, dr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Ze),
      ae(Ve),
      oe(Ve, e))
    : ae(Ze),
    oe(Ze, n);
}
var Ut = null,
  Aa = !1,
  El = !1;
function o5(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
function Z8(e) {
  (Aa = !0), o5(e);
}
function Un() {
  if (!El && Ut !== null) {
    El = !0;
    var e = 0,
      t = X;
    try {
      var n = Ut;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ut = null), (Aa = !1);
    } catch (i) {
      throw (Ut !== null && (Ut = Ut.slice(e + 1)), Mh(i1, Un), i);
    } finally {
      (X = t), (El = !1);
    }
  }
  return null;
}
var $r = [],
  Or = 0,
  Xs = null,
  Js = 0,
  ft = [],
  ht = 0,
  fr = null,
  Zt = 1,
  Kt = "";
function qn(e, t) {
  ($r[Or++] = Js), ($r[Or++] = Xs), (Xs = e), (Js = t);
}
function s5(e, t, n) {
  (ft[ht++] = Zt), (ft[ht++] = Kt), (ft[ht++] = fr), (fr = e);
  var r = Zt;
  e = Kt;
  var i = 32 - Nt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Nt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Zt = (1 << (32 - Nt(t) + i)) | (n << i) | r),
      (Kt = o + e);
  } else (Zt = (1 << o) | (n << i) | r), (Kt = e);
}
function h1(e) {
  e.return !== null && (qn(e, 1), s5(e, 1, 0));
}
function p1(e) {
  for (; e === Xs; )
    (Xs = $r[--Or]), ($r[Or] = null), (Js = $r[--Or]), ($r[Or] = null);
  for (; e === fr; )
    (fr = ft[--ht]),
      (ft[ht] = null),
      (Kt = ft[--ht]),
      (ft[ht] = null),
      (Zt = ft[--ht]),
      (ft[ht] = null);
}
var tt = null,
  et = null,
  le = !1,
  Tt = null;
function a5(e, t) {
  var n = mt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Mf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (tt = e), (et = bn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (tt = e), (et = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = fr !== null ? { id: Zt, overflow: Kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = mt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (tt = e),
            (et = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Fc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Hc(e) {
  if (le) {
    var t = et;
    if (t) {
      var n = t;
      if (!Mf(e, t)) {
        if (Fc(e)) throw Error(M(418));
        t = bn(n.nextSibling);
        var r = tt;
        t && Mf(e, t)
          ? a5(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (tt = e));
      }
    } else {
      if (Fc(e)) throw Error(M(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (tt = e);
    }
  }
}
function jf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  tt = e;
}
function ts(e) {
  if (e !== tt) return !1;
  if (!le) return jf(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$c(e.type, e.memoizedProps))),
    t && (t = et))
  ) {
    if (Fc(e)) throw (l5(), Error(M(418)));
    for (; t; ) a5(e, t), (t = bn(t.nextSibling));
  }
  if ((jf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              et = bn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      et = null;
    }
  } else et = tt ? bn(e.stateNode.nextSibling) : null;
  return !0;
}
function l5() {
  for (var e = et; e; ) e = bn(e.nextSibling);
}
function ti() {
  (et = tt = null), (le = !1);
}
function m1(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
var K8 = cn.ReactCurrentBatchConfig;
function ki(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function ns(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Rf(e) {
  var t = e._init;
  return t(e._payload);
}
function c5(e) {
  function t(m, y) {
    if (e) {
      var x = m.deletions;
      x === null ? ((m.deletions = [y]), (m.flags |= 16)) : x.push(y);
    }
  }
  function n(m, y) {
    if (!e) return null;
    for (; y !== null; ) t(m, y), (y = y.sibling);
    return null;
  }
  function r(m, y) {
    for (m = new Map(); y !== null; )
      y.key !== null ? m.set(y.key, y) : m.set(y.index, y), (y = y.sibling);
    return m;
  }
  function i(m, y) {
    return (m = Rn(m, y)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, y, x) {
    return (
      (m.index = x),
      e
        ? ((x = m.alternate),
          x !== null
            ? ((x = x.index), x < y ? ((m.flags |= 2), y) : x)
            : ((m.flags |= 2), y))
        : ((m.flags |= 1048576), y)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, y, x, C) {
    return y === null || y.tag !== 6
      ? ((y = Ml(x, m.mode, C)), (y.return = m), y)
      : ((y = i(y, x)), (y.return = m), y);
  }
  function l(m, y, x, C) {
    var E = x.type;
    return E === Mr
      ? d(m, y, x.props.children, C, x.key)
      : y !== null &&
        (y.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === gn &&
            Rf(E) === y.type))
      ? ((C = i(y, x.props)), (C.ref = ki(m, y, x)), (C.return = m), C)
      : ((C = js(x.type, x.key, x.props, null, m.mode, C)),
        (C.ref = ki(m, y, x)),
        (C.return = m),
        C);
  }
  function c(m, y, x, C) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== x.containerInfo ||
      y.stateNode.implementation !== x.implementation
      ? ((y = jl(x, m.mode, C)), (y.return = m), y)
      : ((y = i(y, x.children || [])), (y.return = m), y);
  }
  function d(m, y, x, C, E) {
    return y === null || y.tag !== 7
      ? ((y = lr(x, m.mode, C, E)), (y.return = m), y)
      : ((y = i(y, x)), (y.return = m), y);
  }
  function f(m, y, x) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (y = Ml("" + y, m.mode, x)), (y.return = m), y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Wo:
          return (
            (x = js(y.type, y.key, y.props, null, m.mode, x)),
            (x.ref = ki(m, null, y)),
            (x.return = m),
            x
          );
        case Pr:
          return (y = jl(y, m.mode, x)), (y.return = m), y;
        case gn:
          var C = y._init;
          return f(m, C(y._payload), x);
      }
      if (Pi(y) || vi(y))
        return (y = lr(y, m.mode, x, null)), (y.return = m), y;
      ns(m, y);
    }
    return null;
  }
  function h(m, y, x, C) {
    var E = y !== null ? y.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return E !== null ? null : a(m, y, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Wo:
          return x.key === E ? l(m, y, x, C) : null;
        case Pr:
          return x.key === E ? c(m, y, x, C) : null;
        case gn:
          return (E = x._init), h(m, y, E(x._payload), C);
      }
      if (Pi(x) || vi(x)) return E !== null ? null : d(m, y, x, C, null);
      ns(m, x);
    }
    return null;
  }
  function g(m, y, x, C, E) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (m = m.get(x) || null), a(y, m, "" + C, E);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Wo:
          return (m = m.get(C.key === null ? x : C.key) || null), l(y, m, C, E);
        case Pr:
          return (m = m.get(C.key === null ? x : C.key) || null), c(y, m, C, E);
        case gn:
          var T = C._init;
          return g(m, y, x, T(C._payload), E);
      }
      if (Pi(C) || vi(C)) return (m = m.get(x) || null), d(y, m, C, E, null);
      ns(y, C);
    }
    return null;
  }
  function w(m, y, x, C) {
    for (
      var E = null, T = null, N = y, S = (y = 0), P = null;
      N !== null && S < x.length;
      S++
    ) {
      N.index > S ? ((P = N), (N = null)) : (P = N.sibling);
      var b = h(m, N, x[S], C);
      if (b === null) {
        N === null && (N = P);
        break;
      }
      e && N && b.alternate === null && t(m, N),
        (y = o(b, y, S)),
        T === null ? (E = b) : (T.sibling = b),
        (T = b),
        (N = P);
    }
    if (S === x.length) return n(m, N), le && qn(m, S), E;
    if (N === null) {
      for (; S < x.length; S++)
        (N = f(m, x[S], C)),
          N !== null &&
            ((y = o(N, y, S)), T === null ? (E = N) : (T.sibling = N), (T = N));
      return le && qn(m, S), E;
    }
    for (N = r(m, N); S < x.length; S++)
      (P = g(N, m, S, x[S], C)),
        P !== null &&
          (e && P.alternate !== null && N.delete(P.key === null ? S : P.key),
          (y = o(P, y, S)),
          T === null ? (E = P) : (T.sibling = P),
          (T = P));
    return (
      e &&
        N.forEach(function (I) {
          return t(m, I);
        }),
      le && qn(m, S),
      E
    );
  }
  function v(m, y, x, C) {
    var E = vi(x);
    if (typeof E != "function") throw Error(M(150));
    if (((x = E.call(x)), x == null)) throw Error(M(151));
    for (
      var T = (E = null), N = y, S = (y = 0), P = null, b = x.next();
      N !== null && !b.done;
      S++, b = x.next()
    ) {
      N.index > S ? ((P = N), (N = null)) : (P = N.sibling);
      var I = h(m, N, b.value, C);
      if (I === null) {
        N === null && (N = P);
        break;
      }
      e && N && I.alternate === null && t(m, N),
        (y = o(I, y, S)),
        T === null ? (E = I) : (T.sibling = I),
        (T = I),
        (N = P);
    }
    if (b.done) return n(m, N), le && qn(m, S), E;
    if (N === null) {
      for (; !b.done; S++, b = x.next())
        (b = f(m, b.value, C)),
          b !== null &&
            ((y = o(b, y, S)), T === null ? (E = b) : (T.sibling = b), (T = b));
      return le && qn(m, S), E;
    }
    for (N = r(m, N); !b.done; S++, b = x.next())
      (b = g(N, m, S, b.value, C)),
        b !== null &&
          (e && b.alternate !== null && N.delete(b.key === null ? S : b.key),
          (y = o(b, y, S)),
          T === null ? (E = b) : (T.sibling = b),
          (T = b));
    return (
      e &&
        N.forEach(function (V) {
          return t(m, V);
        }),
      le && qn(m, S),
      E
    );
  }
  function k(m, y, x, C) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Mr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case Wo:
          e: {
            for (var E = x.key, T = y; T !== null; ) {
              if (T.key === E) {
                if (((E = x.type), E === Mr)) {
                  if (T.tag === 7) {
                    n(m, T.sibling),
                      (y = i(T, x.props.children)),
                      (y.return = m),
                      (m = y);
                    break e;
                  }
                } else if (
                  T.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === gn &&
                    Rf(E) === T.type)
                ) {
                  n(m, T.sibling),
                    (y = i(T, x.props)),
                    (y.ref = ki(m, T, x)),
                    (y.return = m),
                    (m = y);
                  break e;
                }
                n(m, T);
                break;
              } else t(m, T);
              T = T.sibling;
            }
            x.type === Mr
              ? ((y = lr(x.props.children, m.mode, C, x.key)),
                (y.return = m),
                (m = y))
              : ((C = js(x.type, x.key, x.props, null, m.mode, C)),
                (C.ref = ki(m, y, x)),
                (C.return = m),
                (m = C));
          }
          return s(m);
        case Pr:
          e: {
            for (T = x.key; y !== null; ) {
              if (y.key === T)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === x.containerInfo &&
                  y.stateNode.implementation === x.implementation
                ) {
                  n(m, y.sibling),
                    (y = i(y, x.children || [])),
                    (y.return = m),
                    (m = y);
                  break e;
                } else {
                  n(m, y);
                  break;
                }
              else t(m, y);
              y = y.sibling;
            }
            (y = jl(x, m.mode, C)), (y.return = m), (m = y);
          }
          return s(m);
        case gn:
          return (T = x._init), k(m, y, T(x._payload), C);
      }
      if (Pi(x)) return w(m, y, x, C);
      if (vi(x)) return v(m, y, x, C);
      ns(m, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        y !== null && y.tag === 6
          ? (n(m, y.sibling), (y = i(y, x)), (y.return = m), (m = y))
          : (n(m, y), (y = Ml(x, m.mode, C)), (y.return = m), (m = y)),
        s(m))
      : n(m, y);
  }
  return k;
}
var ni = c5(!0),
  u5 = c5(!1),
  ea = zn(null),
  ta = null,
  Vr = null,
  g1 = null;
function v1() {
  g1 = Vr = ta = null;
}
function y1(e) {
  var t = ea.current;
  ae(ea), (e._currentValue = t);
}
function Bc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function qr(e, t) {
  (ta = e),
    (g1 = Vr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (We = !0), (e.firstContext = null));
}
function vt(e) {
  var t = e._currentValue;
  if (g1 !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vr === null)) {
      if (ta === null) throw Error(M(308));
      (Vr = e), (ta.dependencies = { lanes: 0, firstContext: e });
    } else Vr = Vr.next = e;
  return t;
}
var nr = null;
function x1(e) {
  nr === null ? (nr = [e]) : nr.push(e);
}
function d5(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), x1(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    tn(e, r)
  );
}
function tn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var vn = !1;
function w1(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function f5(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function qt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Pn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      tn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), x1(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    tn(e, n)
  );
}
function Ts(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), o1(e, n);
  }
}
function Af(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function na(e, t, n, r) {
  var i = e.updateQueue;
  vn = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), s === null ? (o = c) : (s.next = c), (s = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== s &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (d = c = l = null), (a = o);
    do {
      var h = a.lane,
        g = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            v = a;
          switch (((h = t), (g = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == "function")) {
                f = w.call(g, f, h);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = v.payload),
                (h = typeof w == "function" ? w.call(g, f, h) : w),
                h == null)
              )
                break e;
              f = fe({}, f, h);
              break e;
            case 2:
              vn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = g), (l = f)) : (d = d.next = g),
          (s |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (pr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function If(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(M(191, i));
        i.call(r);
      }
    }
}
var Po = {},
  Vt = zn(Po),
  so = zn(Po),
  ao = zn(Po);
function rr(e) {
  if (e === Po) throw Error(M(174));
  return e;
}
function C1(e, t) {
  switch ((oe(ao, t), oe(so, e), oe(Vt, Po), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : kc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = kc(t, e));
  }
  ae(Vt), oe(Vt, t);
}
function ri() {
  ae(Vt), ae(so), ae(ao);
}
function h5(e) {
  rr(ao.current);
  var t = rr(Vt.current),
    n = kc(t, e.type);
  t !== n && (oe(so, e), oe(Vt, n));
}
function k1(e) {
  so.current === e && (ae(Vt), ae(so));
}
var ce = zn(0);
function ra(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Sl = [];
function E1() {
  for (var e = 0; e < Sl.length; e++)
    Sl[e]._workInProgressVersionPrimary = null;
  Sl.length = 0;
}
var Ns = cn.ReactCurrentDispatcher,
  Tl = cn.ReactCurrentBatchConfig,
  hr = 0,
  de = null,
  xe = null,
  ke = null,
  ia = !1,
  Fi = !1,
  lo = 0,
  G8 = 0;
function Re() {
  throw Error(M(321));
}
function S1(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!bt(e[n], t[n])) return !1;
  return !0;
}
function T1(e, t, n, r, i, o) {
  if (
    ((hr = o),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ns.current = e === null || e.memoizedState === null ? X8 : J8),
    (e = n(r, i)),
    Fi)
  ) {
    o = 0;
    do {
      if (((Fi = !1), (lo = 0), 25 <= o)) throw Error(M(301));
      (o += 1),
        (ke = xe = null),
        (t.updateQueue = null),
        (Ns.current = e7),
        (e = n(r, i));
    } while (Fi);
  }
  if (
    ((Ns.current = oa),
    (t = xe !== null && xe.next !== null),
    (hr = 0),
    (ke = xe = de = null),
    (ia = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function N1() {
  var e = lo !== 0;
  return (lo = 0), e;
}
function At() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (de.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function yt() {
  if (xe === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = ke === null ? de.memoizedState : ke.next;
  if (t !== null) (ke = t), (xe = e);
  else {
    if (e === null) throw Error(M(310));
    (xe = e),
      (e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null,
      }),
      ke === null ? (de.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function co(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Nl(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = xe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      c = o;
    do {
      var d = c.lane;
      if ((hr & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (de.lanes |= d),
          (pr |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    l === null ? (s = r) : (l.next = a),
      bt(r, t.memoizedState) || (We = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (de.lanes |= o), (pr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ll(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    bt(o, t.memoizedState) || (We = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function p5() {}
function m5(e, t) {
  var n = de,
    r = yt(),
    i = t(),
    o = !bt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (We = !0)),
    (r = r.queue),
    L1(y5.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      uo(9, v5.bind(null, n, r, i, t), void 0, null),
      Se === null)
    )
      throw Error(M(349));
    hr & 30 || g5(n, t, i);
  }
  return i;
}
function g5(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function v5(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), x5(t) && w5(e);
}
function y5(e, t, n) {
  return n(function () {
    x5(t) && w5(e);
  });
}
function x5(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bt(e, n);
  } catch {
    return !0;
  }
}
function w5(e) {
  var t = tn(e, 1);
  t !== null && Lt(t, e, 1, -1);
}
function Df(e) {
  var t = At();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: co,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Q8.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function uo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function C5() {
  return yt().memoizedState;
}
function Ls(e, t, n, r) {
  var i = At();
  (de.flags |= e),
    (i.memoizedState = uo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ia(e, t, n, r) {
  var i = yt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (xe !== null) {
    var s = xe.memoizedState;
    if (((o = s.destroy), r !== null && S1(r, s.deps))) {
      i.memoizedState = uo(t, n, o, r);
      return;
    }
  }
  (de.flags |= e), (i.memoizedState = uo(1 | t, n, o, r));
}
function $f(e, t) {
  return Ls(8390656, 8, e, t);
}
function L1(e, t) {
  return Ia(2048, 8, e, t);
}
function k5(e, t) {
  return Ia(4, 2, e, t);
}
function E5(e, t) {
  return Ia(4, 4, e, t);
}
function S5(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function T5(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ia(4, 4, S5.bind(null, t, e), n)
  );
}
function b1() {}
function N5(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && S1(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function L5(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && S1(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function b5(e, t, n) {
  return hr & 21
    ? (bt(n, t) || ((n = Ah()), (de.lanes |= n), (pr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = n));
}
function q8(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Tl.transition;
  Tl.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (Tl.transition = r);
  }
}
function P5() {
  return yt().memoizedState;
}
function Y8(e, t, n) {
  var r = jn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    M5(e))
  )
    j5(t, n);
  else if (((n = d5(e, t, n, r)), n !== null)) {
    var i = Fe();
    Lt(n, e, r, i), R5(n, t, r);
  }
}
function Q8(e, t, n) {
  var r = jn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (M5(e)) j5(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), bt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), x1(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = d5(e, t, i, r)),
      n !== null && ((i = Fe()), Lt(n, e, r, i), R5(n, t, r));
  }
}
function M5(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function j5(e, t) {
  Fi = ia = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function R5(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), o1(e, n);
  }
}
var oa = {
    readContext: vt,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1,
  },
  X8 = {
    readContext: vt,
    useCallback: function (e, t) {
      return (At().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: vt,
    useEffect: $f,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ls(4194308, 4, S5.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ls(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ls(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = At();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = At();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Y8.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = At();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Df,
    useDebugValue: b1,
    useDeferredValue: function (e) {
      return (At().memoizedState = e);
    },
    useTransition: function () {
      var e = Df(!1),
        t = e[0];
      return (e = q8.bind(null, e[1])), (At().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        i = At();
      if (le) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), Se === null)) throw Error(M(349));
        hr & 30 || g5(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        $f(y5.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        uo(9, v5.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = At(),
        t = Se.identifierPrefix;
      if (le) {
        var n = Kt,
          r = Zt;
        (n = (r & ~(1 << (32 - Nt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = lo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = G8++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  J8 = {
    readContext: vt,
    useCallback: N5,
    useContext: vt,
    useEffect: L1,
    useImperativeHandle: T5,
    useInsertionEffect: k5,
    useLayoutEffect: E5,
    useMemo: L5,
    useReducer: Nl,
    useRef: C5,
    useState: function () {
      return Nl(co);
    },
    useDebugValue: b1,
    useDeferredValue: function (e) {
      var t = yt();
      return b5(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Nl(co)[0],
        t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: p5,
    useSyncExternalStore: m5,
    useId: P5,
    unstable_isNewReconciler: !1,
  },
  e7 = {
    readContext: vt,
    useCallback: N5,
    useContext: vt,
    useEffect: L1,
    useImperativeHandle: T5,
    useInsertionEffect: k5,
    useLayoutEffect: E5,
    useMemo: L5,
    useReducer: Ll,
    useRef: C5,
    useState: function () {
      return Ll(co);
    },
    useDebugValue: b1,
    useDeferredValue: function (e) {
      var t = yt();
      return xe === null ? (t.memoizedState = e) : b5(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ll(co)[0],
        t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: p5,
    useSyncExternalStore: m5,
    useId: P5,
    unstable_isNewReconciler: !1,
  };
function Et(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function zc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Da = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? wr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      i = jn(e),
      o = qt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Pn(e, o, i)),
      t !== null && (Lt(t, e, i, r), Ts(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      i = jn(e),
      o = qt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Pn(e, o, i)),
      t !== null && (Lt(t, e, i, r), Ts(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Fe(),
      r = jn(e),
      i = qt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Pn(e, i, r)),
      t !== null && (Lt(t, e, r, n), Ts(t, e, r));
  },
};
function Of(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !no(n, r) || !no(i, o)
      : !0
  );
}
function A5(e, t, n) {
  var r = !1,
    i = $n,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = vt(o))
      : ((i = Ke(t) ? dr : Ve.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? ei(e, i) : $n)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Da),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Vf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Da.enqueueReplaceState(t, t.state, null);
}
function Uc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), w1(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = vt(o))
    : ((o = Ke(t) ? dr : Ve.current), (i.context = ei(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (zc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Da.enqueueReplaceState(i, i.state, null),
      na(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ii(e, t) {
  try {
    var n = "",
      r = t;
    do (n += bm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var t7 = typeof WeakMap == "function" ? WeakMap : Map;
function I5(e, t, n) {
  (n = qt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      aa || ((aa = !0), (tu = r)), Wc(e, t);
    }),
    n
  );
}
function D5(e, t, n) {
  (n = qt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Wc(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Wc(e, t),
          typeof r != "function" &&
            (Mn === null ? (Mn = new Set([this])) : Mn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function _f(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new t7();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = m7.bind(null, e, t, n)), t.then(e, e));
}
function Ff(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Hf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qt(-1, 1)), (t.tag = 2), Pn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var n7 = cn.ReactCurrentOwner,
  We = !1;
function _e(e, t, n, r) {
  t.child = e === null ? u5(t, null, n, r) : ni(t, e.child, n, r);
}
function Bf(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    qr(t, i),
    (r = T1(e, t, n, r, o, i)),
    (n = N1()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        nn(e, t, i))
      : (le && n && h1(t), (t.flags |= 1), _e(e, t, r, i), t.child)
  );
}
function zf(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !$1(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), $5(e, t, o, r, i))
      : ((e = js(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : no), n(s, r) && e.ref === t.ref)
    )
      return nn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Rn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function $5(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (no(o, r) && e.ref === t.ref)
      if (((We = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (We = !0);
      else return (t.lanes = e.lanes), nn(e, t, i);
  }
  return Zc(e, t, n, r, i);
}
function O5(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(Fr, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(Fr, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        oe(Fr, Qe),
        (Qe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(Fr, Qe),
      (Qe |= r);
  return _e(e, t, i, n), t.child;
}
function V5(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zc(e, t, n, r, i) {
  var o = Ke(n) ? dr : Ve.current;
  return (
    (o = ei(t, o)),
    qr(t, i),
    (n = T1(e, t, n, r, o, i)),
    (r = N1()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        nn(e, t, i))
      : (le && r && h1(t), (t.flags |= 1), _e(e, t, n, i), t.child)
  );
}
function Uf(e, t, n, r, i) {
  if (Ke(n)) {
    var o = !0;
    Qs(t);
  } else o = !1;
  if ((qr(t, i), t.stateNode === null))
    bs(e, t), A5(t, n, r), Uc(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = vt(c))
      : ((c = Ke(n) ? dr : Ve.current), (c = ei(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && Vf(t, s, r, c)),
      (vn = !1);
    var h = t.memoizedState;
    (s.state = h),
      na(t, r, s, i),
      (l = t.memoizedState),
      a !== r || h !== l || Ze.current || vn
        ? (typeof d == "function" && (zc(t, n, d, r), (l = t.memoizedState)),
          (a = vn || Of(t, n, a, r, h, l, c))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      f5(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Et(t.type, a)),
      (s.props = c),
      (f = t.pendingProps),
      (h = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = vt(l))
        : ((l = Ke(n) ? dr : Ve.current), (l = ei(t, l)));
    var g = n.getDerivedStateFromProps;
    (d =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || h !== l) && Vf(t, s, r, l)),
      (vn = !1),
      (h = t.memoizedState),
      (s.state = h),
      na(t, r, s, i);
    var w = t.memoizedState;
    a !== f || h !== w || Ze.current || vn
      ? (typeof g == "function" && (zc(t, n, g, r), (w = t.memoizedState)),
        (c = vn || Of(t, n, c, r, h, w, l) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, w, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Kc(e, t, n, r, o, i);
}
function Kc(e, t, n, r, i, o) {
  V5(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Pf(t, n, !1), nn(e, t, o);
  (r = t.stateNode), (n7.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = ni(t, e.child, null, o)), (t.child = ni(t, null, a, o)))
      : _e(e, t, a, o),
    (t.memoizedState = r.state),
    i && Pf(t, n, !0),
    t.child
  );
}
function _5(e) {
  var t = e.stateNode;
  t.pendingContext
    ? bf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && bf(e, t.context, !1),
    C1(e, t.containerInfo);
}
function Wf(e, t, n, r, i) {
  return ti(), m1(i), (t.flags |= 256), _e(e, t, n, r), t.child;
}
var Gc = { dehydrated: null, treeContext: null, retryLane: 0 };
function qc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function F5(e, t, n) {
  var r = t.pendingProps,
    i = ce.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    oe(ce, i & 1),
    e === null)
  )
    return (
      Hc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Va(s, r, 0, null)),
              (e = lr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = qc(n)),
              (t.memoizedState = Gc),
              e)
            : P1(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return r7(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Rn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Rn(a, o)) : ((o = lr(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? qc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Gc),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Rn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function P1(e, t) {
  return (
    (t = Va({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function rs(e, t, n, r) {
  return (
    r !== null && m1(r),
    ni(t, e.child, null, n),
    (e = P1(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function r7(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = bl(Error(M(422)))), rs(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Va({ mode: "visible", children: r.children }, i, 0, null)),
        (o = lr(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && ni(t, e.child, null, s),
        (t.child.memoizedState = qc(s)),
        (t.memoizedState = Gc),
        o);
  if (!(t.mode & 1)) return rs(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(M(419))), (r = bl(o, r, void 0)), rs(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), We || a)) {
    if (((r = Se), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), tn(e, i), Lt(r, e, i, -1));
    }
    return D1(), (r = bl(Error(M(421)))), rs(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = g7.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (et = bn(i.nextSibling)),
      (tt = t),
      (le = !0),
      (Tt = null),
      e !== null &&
        ((ft[ht++] = Zt),
        (ft[ht++] = Kt),
        (ft[ht++] = fr),
        (Zt = e.id),
        (Kt = e.overflow),
        (fr = t)),
      (t = P1(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bc(e.return, t, n);
}
function Pl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function H5(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((_e(e, t, r.children, n), (r = ce.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zf(e, n, t);
        else if (e.tag === 19) Zf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((oe(ce, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ra(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Pl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ra(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Pl(t, !0, n, null, o);
        break;
      case "together":
        Pl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function bs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Rn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function i7(e, t, n) {
  switch (t.tag) {
    case 3:
      _5(t), ti();
      break;
    case 5:
      h5(t);
      break;
    case 1:
      Ke(t.type) && Qs(t);
      break;
    case 4:
      C1(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      oe(ea, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? F5(e, t, n)
          : (oe(ce, ce.current & 1),
            (e = nn(e, t, n)),
            e !== null ? e.sibling : null);
      oe(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return H5(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        oe(ce, ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), O5(e, t, n);
  }
  return nn(e, t, n);
}
var B5, Yc, z5, U5;
B5 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Yc = function () {};
z5 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), rr(Vt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = yc(e, i)), (r = yc(e, r)), (o = []);
        break;
      case "select":
        (i = fe({}, i, { value: void 0 })),
          (r = fe({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Cc(e, i)), (r = Cc(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = qs);
    }
    Ec(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (qi.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (qi.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && se("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(c, l));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
U5 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ei(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function o7(e, t, n) {
  var r = t.pendingProps;
  switch ((p1(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ae(t), null;
    case 1:
      return Ke(t.type) && Ys(), Ae(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ri(),
        ae(Ze),
        ae(Ve),
        E1(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ts(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Tt !== null && (iu(Tt), (Tt = null)))),
        Yc(e, t),
        Ae(t),
        null
      );
    case 5:
      k1(t);
      var i = rr(ao.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        z5(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return Ae(t), null;
        }
        if (((e = rr(Vt.current)), ts(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[It] = t), (r[oo] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ji.length; i++) se(ji[i], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              ef(r, o), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              nf(r, o), se("invalid", r);
          }
          Ec(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      es(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      es(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : qi.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              Zo(r), tf(r, o, !0);
              break;
            case "textarea":
              Zo(r), rf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = qs);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = yh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[It] = t),
            (e[oo] = r),
            B5(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Sc(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ji.length; i++) se(ji[i], e);
                i = r;
                break;
              case "source":
                se("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (i = r);
                break;
              case "details":
                se("toggle", e), (i = r);
                break;
              case "input":
                ef(e, r), (i = yc(e, r)), se("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = fe({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                nf(e, r), (i = Cc(e, r)), se("invalid", e);
                break;
              default:
                i = r;
            }
            Ec(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Ch(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && xh(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Yi(e, l)
                    : typeof l == "number" && Yi(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (qi.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && se("scroll", e)
                      : l != null && Ju(e, o, l, s));
              }
            switch (n) {
              case "input":
                Zo(e), tf(e, r, !1);
                break;
              case "textarea":
                Zo(e), rf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Dn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Wr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Wr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = qs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ae(t), null;
    case 6:
      if (e && t.stateNode != null) U5(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = rr(ao.current)), rr(Vt.current), ts(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[It] = t),
            (o = r.nodeValue !== n) && ((e = tt), e !== null))
          )
            switch (e.tag) {
              case 3:
                es(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  es(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[It] = t),
            (t.stateNode = r);
      }
      return Ae(t), null;
    case 13:
      if (
        (ae(ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && et !== null && t.mode & 1 && !(t.flags & 128))
          l5(), ti(), (t.flags |= 98560), (o = !1);
        else if (((o = ts(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(M(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(M(317));
            o[It] = t;
          } else
            ti(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ae(t), (o = !1);
        } else Tt !== null && (iu(Tt), (Tt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? we === 0 && (we = 3) : D1())),
          t.updateQueue !== null && (t.flags |= 4),
          Ae(t),
          null);
    case 4:
      return (
        ri(), Yc(e, t), e === null && ro(t.stateNode.containerInfo), Ae(t), null
      );
    case 10:
      return y1(t.type._context), Ae(t), null;
    case 17:
      return Ke(t.type) && Ys(), Ae(t), null;
    case 19:
      if ((ae(ce), (o = t.memoizedState), o === null)) return Ae(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Ei(o, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ra(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Ei(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return oe(ce, (ce.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            me() > oi &&
            ((t.flags |= 128), (r = !0), Ei(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ra(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ei(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !le)
            )
              return Ae(t), null;
          } else
            2 * me() - o.renderingStartTime > oi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ei(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = me()),
          (t.sibling = null),
          (n = ce.current),
          oe(ce, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ae(t), null);
    case 22:
    case 23:
      return (
        I1(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function s7(e, t) {
  switch ((p1(t), t.tag)) {
    case 1:
      return (
        Ke(t.type) && Ys(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ri(),
        ae(Ze),
        ae(Ve),
        E1(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return k1(t), null;
    case 13:
      if (
        (ae(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        ti();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ae(ce), null;
    case 4:
      return ri(), null;
    case 10:
      return y1(t.type._context), null;
    case 22:
    case 23:
      return I1(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var is = !1,
  De = !1,
  a7 = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function _r(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        he(e, t, r);
      }
    else n.current = null;
}
function Qc(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var Kf = !1;
function l7(e, t) {
  if (((Ic = Zs), (e = qh()), f1(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (h = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++c === i && (a = s),
                h === o && ++d === r && (l = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Dc = { focusedElem: e, selectionRange: n }, Zs = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var v = w.memoizedProps,
                    k = w.memoizedState,
                    m = t.stateNode,
                    y = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Et(t.type, v),
                      k
                    );
                  m.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (C) {
          he(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (w = Kf), (Kf = !1), w;
}
function Hi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Qc(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function $a(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Xc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function W5(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), W5(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[It], delete t[oo], delete t[Vc], delete t[U8], delete t[W8])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Z5(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Gf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Z5(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Jc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = qs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jc(e, t, n), e = e.sibling; e !== null; ) Jc(e, t, n), (e = e.sibling);
}
function eu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (eu(e, t, n), e = e.sibling; e !== null; ) eu(e, t, n), (e = e.sibling);
}
var Le = null,
  St = !1;
function hn(e, t, n) {
  for (n = n.child; n !== null; ) K5(e, t, n), (n = n.sibling);
}
function K5(e, t, n) {
  if (Ot && typeof Ot.onCommitFiberUnmount == "function")
    try {
      Ot.onCommitFiberUnmount(ba, n);
    } catch {}
  switch (n.tag) {
    case 5:
      De || _r(n, t);
    case 6:
      var r = Le,
        i = St;
      (Le = null),
        hn(e, t, n),
        (Le = r),
        (St = i),
        Le !== null &&
          (St
            ? ((e = Le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Le.removeChild(n.stateNode));
      break;
    case 18:
      Le !== null &&
        (St
          ? ((e = Le),
            (n = n.stateNode),
            e.nodeType === 8
              ? kl(e.parentNode, n)
              : e.nodeType === 1 && kl(e, n),
            eo(e))
          : kl(Le, n.stateNode));
      break;
    case 4:
      (r = Le),
        (i = St),
        (Le = n.stateNode.containerInfo),
        (St = !0),
        hn(e, t, n),
        (Le = r),
        (St = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !De &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Qc(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      hn(e, t, n);
      break;
    case 1:
      if (
        !De &&
        (_r(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          he(n, t, a);
        }
      hn(e, t, n);
      break;
    case 21:
      hn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((De = (r = De) || n.memoizedState !== null), hn(e, t, n), (De = r))
        : hn(e, t, n);
      break;
    default:
      hn(e, t, n);
  }
}
function qf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new a7()),
      t.forEach(function (r) {
        var i = v7.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Le = a.stateNode), (St = !1);
              break e;
            case 3:
              (Le = a.stateNode.containerInfo), (St = !0);
              break e;
            case 4:
              (Le = a.stateNode.containerInfo), (St = !0);
              break e;
          }
          a = a.return;
        }
        if (Le === null) throw Error(M(160));
        K5(o, s, i), (Le = null), (St = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        he(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) G5(t, e), (t = t.sibling);
}
function G5(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ct(t, e), Rt(e), r & 4)) {
        try {
          Hi(3, e, e.return), $a(3, e);
        } catch (v) {
          he(e, e.return, v);
        }
        try {
          Hi(5, e, e.return);
        } catch (v) {
          he(e, e.return, v);
        }
      }
      break;
    case 1:
      Ct(t, e), Rt(e), r & 512 && n !== null && _r(n, n.return);
      break;
    case 5:
      if (
        (Ct(t, e),
        Rt(e),
        r & 512 && n !== null && _r(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Yi(i, "");
        } catch (v) {
          he(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && gh(i, o),
              Sc(a, s);
            var c = Sc(a, o);
            for (s = 0; s < l.length; s += 2) {
              var d = l[s],
                f = l[s + 1];
              d === "style"
                ? Ch(i, f)
                : d === "dangerouslySetInnerHTML"
                ? xh(i, f)
                : d === "children"
                ? Yi(i, f)
                : Ju(i, d, f, c);
            }
            switch (a) {
              case "input":
                xc(i, o);
                break;
              case "textarea":
                vh(i, o);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Wr(i, !!o.multiple, g, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Wr(i, !!o.multiple, o.defaultValue, !0)
                      : Wr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[oo] = o;
          } catch (v) {
            he(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ct(t, e), Rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          he(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Ct(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          eo(t.containerInfo);
        } catch (v) {
          he(e, e.return, v);
        }
      break;
    case 4:
      Ct(t, e), Rt(e);
      break;
    case 13:
      Ct(t, e),
        Rt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (R1 = me())),
        r & 4 && qf(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((De = (c = De) || d), Ct(t, e), (De = c)) : Ct(t, e),
        Rt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (R = e, d = e.child; d !== null; ) {
            for (f = R = d; R !== null; ) {
              switch (((h = R), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hi(4, h, h.return);
                  break;
                case 1:
                  _r(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (v) {
                      he(r, n, v);
                    }
                  }
                  break;
                case 5:
                  _r(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Qf(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (R = g)) : Qf(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = wh("display", s)));
              } catch (v) {
                he(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (v) {
                he(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ct(t, e), Rt(e), r & 4 && qf(e);
      break;
    case 21:
      break;
    default:
      Ct(t, e), Rt(e);
  }
}
function Rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Z5(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Yi(i, ""), (r.flags &= -33));
          var o = Gf(e);
          eu(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Gf(e);
          Jc(e, a, s);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      he(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function c7(e, t, n) {
  (R = e), q5(e);
}
function q5(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || is;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || De;
        a = is;
        var c = De;
        if (((is = s), (De = l) && !c))
          for (R = i; R !== null; )
            (s = R),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Xf(i)
                : l !== null
                ? ((l.return = s), (R = l))
                : Xf(i);
        for (; o !== null; ) (R = o), q5(o), (o = o.sibling);
        (R = i), (is = a), (De = c);
      }
      Yf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (R = o)) : Yf(e);
  }
}
function Yf(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              De || $a(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !De)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && If(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                If(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && eo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        De || (t.flags & 512 && Xc(t));
      } catch (h) {
        he(t, t.return, h);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Qf(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Xf(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            $a(4, t);
          } catch (l) {
            he(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              he(t, i, l);
            }
          }
          var o = t.return;
          try {
            Xc(t);
          } catch (l) {
            he(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Xc(t);
          } catch (l) {
            he(t, s, l);
          }
      }
    } catch (l) {
      he(t, t.return, l);
    }
    if (t === e) {
      R = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (R = a);
      break;
    }
    R = t.return;
  }
}
var u7 = Math.ceil,
  sa = cn.ReactCurrentDispatcher,
  M1 = cn.ReactCurrentOwner,
  gt = cn.ReactCurrentBatchConfig,
  G = 0,
  Se = null,
  ve = null,
  Pe = 0,
  Qe = 0,
  Fr = zn(0),
  we = 0,
  fo = null,
  pr = 0,
  Oa = 0,
  j1 = 0,
  Bi = null,
  ze = null,
  R1 = 0,
  oi = 1 / 0,
  zt = null,
  aa = !1,
  tu = null,
  Mn = null,
  os = !1,
  En = null,
  la = 0,
  zi = 0,
  nu = null,
  Ps = -1,
  Ms = 0;
function Fe() {
  return G & 6 ? me() : Ps !== -1 ? Ps : (Ps = me());
}
function jn(e) {
  return e.mode & 1
    ? G & 2 && Pe !== 0
      ? Pe & -Pe
      : K8.transition !== null
      ? (Ms === 0 && (Ms = Ah()), Ms)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fh(e.type))),
        e)
    : 1;
}
function Lt(e, t, n, r) {
  if (50 < zi) throw ((zi = 0), (nu = null), Error(M(185)));
  No(e, n, r),
    (!(G & 2) || e !== Se) &&
      (e === Se && (!(G & 2) && (Oa |= n), we === 4 && Cn(e, Pe)),
      Ge(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((oi = me() + 500), Aa && Un()));
}
function Ge(e, t) {
  var n = e.callbackNode;
  Km(e, t);
  var r = Ws(e, e === Se ? Pe : 0);
  if (r === 0)
    n !== null && af(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && af(n), t === 1))
      e.tag === 0 ? Z8(Jf.bind(null, e)) : o5(Jf.bind(null, e)),
        B8(function () {
          !(G & 6) && Un();
        }),
        (n = null);
    else {
      switch (Ih(r)) {
        case 1:
          n = i1;
          break;
        case 4:
          n = jh;
          break;
        case 16:
          n = Us;
          break;
        case 536870912:
          n = Rh;
          break;
        default:
          n = Us;
      }
      n = rp(n, Y5.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Y5(e, t) {
  if (((Ps = -1), (Ms = 0), G & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (Yr() && e.callbackNode !== n) return null;
  var r = Ws(e, e === Se ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ca(e, r);
  else {
    t = r;
    var i = G;
    G |= 2;
    var o = X5();
    (Se !== e || Pe !== t) && ((zt = null), (oi = me() + 500), ar(e, t));
    do
      try {
        h7();
        break;
      } catch (a) {
        Q5(e, a);
      }
    while (!0);
    v1(),
      (sa.current = o),
      (G = i),
      ve !== null ? (t = 0) : ((Se = null), (Pe = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Pc(e)), i !== 0 && ((r = i), (t = ru(e, i)))), t === 1)
    )
      throw ((n = fo), ar(e, 0), Cn(e, r), Ge(e, me()), n);
    if (t === 6) Cn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !d7(i) &&
          ((t = ca(e, r)),
          t === 2 && ((o = Pc(e)), o !== 0 && ((r = o), (t = ru(e, o)))),
          t === 1))
      )
        throw ((n = fo), ar(e, 0), Cn(e, r), Ge(e, me()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          Yn(e, ze, zt);
          break;
        case 3:
          if (
            (Cn(e, r), (r & 130023424) === r && ((t = R1 + 500 - me()), 10 < t))
          ) {
            if (Ws(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Fe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Oc(Yn.bind(null, e, ze, zt), t);
            break;
          }
          Yn(e, ze, zt);
          break;
        case 4:
          if ((Cn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Nt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * u7(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Oc(Yn.bind(null, e, ze, zt), r);
            break;
          }
          Yn(e, ze, zt);
          break;
        case 5:
          Yn(e, ze, zt);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return Ge(e, me()), e.callbackNode === n ? Y5.bind(null, e) : null;
}
function ru(e, t) {
  var n = Bi;
  return (
    e.current.memoizedState.isDehydrated && (ar(e, t).flags |= 256),
    (e = ca(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && iu(t)),
    e
  );
}
function iu(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function d7(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!bt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Cn(e, t) {
  for (
    t &= ~j1,
      t &= ~Oa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Nt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Jf(e) {
  if (G & 6) throw Error(M(327));
  Yr();
  var t = Ws(e, 0);
  if (!(t & 1)) return Ge(e, me()), null;
  var n = ca(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pc(e);
    r !== 0 && ((t = r), (n = ru(e, r)));
  }
  if (n === 1) throw ((n = fo), ar(e, 0), Cn(e, t), Ge(e, me()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Yn(e, ze, zt),
    Ge(e, me()),
    null
  );
}
function A1(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((oi = me() + 500), Aa && Un());
  }
}
function mr(e) {
  En !== null && En.tag === 0 && !(G & 6) && Yr();
  var t = G;
  G |= 1;
  var n = gt.transition,
    r = X;
  try {
    if (((gt.transition = null), (X = 1), e)) return e();
  } finally {
    (X = r), (gt.transition = n), (G = t), !(G & 6) && Un();
  }
}
function I1() {
  (Qe = Fr.current), ae(Fr);
}
function ar(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), H8(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((p1(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ys();
          break;
        case 3:
          ri(), ae(Ze), ae(Ve), E1();
          break;
        case 5:
          k1(r);
          break;
        case 4:
          ri();
          break;
        case 13:
          ae(ce);
          break;
        case 19:
          ae(ce);
          break;
        case 10:
          y1(r.type._context);
          break;
        case 22:
        case 23:
          I1();
      }
      n = n.return;
    }
  if (
    ((Se = e),
    (ve = e = Rn(e.current, null)),
    (Pe = Qe = t),
    (we = 0),
    (fo = null),
    (j1 = Oa = pr = 0),
    (ze = Bi = null),
    nr !== null)
  ) {
    for (t = 0; t < nr.length; t++)
      if (((n = nr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    nr = null;
  }
  return e;
}
function Q5(e, t) {
  do {
    var n = ve;
    try {
      if ((v1(), (Ns.current = oa), ia)) {
        for (var r = de.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ia = !1;
      }
      if (
        ((hr = 0),
        (ke = xe = de = null),
        (Fi = !1),
        (lo = 0),
        (M1.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (fo = t), (ve = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Pe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = Ff(s);
          if (g !== null) {
            (g.flags &= -257),
              Hf(g, s, a, o, t),
              g.mode & 1 && _f(o, c, t),
              (t = g),
              (l = c);
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              _f(o, c, t), D1();
              break e;
            }
            l = Error(M(426));
          }
        } else if (le && a.mode & 1) {
          var k = Ff(s);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Hf(k, s, a, o, t),
              m1(ii(l, a));
            break e;
          }
        }
        (o = l = ii(l, a)),
          we !== 4 && (we = 2),
          Bi === null ? (Bi = [o]) : Bi.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = I5(o, l, t);
              Af(o, m);
              break e;
            case 1:
              a = l;
              var y = o.type,
                x = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (Mn === null || !Mn.has(x))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var C = D5(o, a, t);
                Af(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ep(n);
    } catch (E) {
      (t = E), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function X5() {
  var e = sa.current;
  return (sa.current = oa), e === null ? oa : e;
}
function D1() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    Se === null || (!(pr & 268435455) && !(Oa & 268435455)) || Cn(Se, Pe);
}
function ca(e, t) {
  var n = G;
  G |= 2;
  var r = X5();
  (Se !== e || Pe !== t) && ((zt = null), ar(e, t));
  do
    try {
      f7();
      break;
    } catch (i) {
      Q5(e, i);
    }
  while (!0);
  if ((v1(), (G = n), (sa.current = r), ve !== null)) throw Error(M(261));
  return (Se = null), (Pe = 0), we;
}
function f7() {
  for (; ve !== null; ) J5(ve);
}
function h7() {
  for (; ve !== null && !Vm(); ) J5(ve);
}
function J5(e) {
  var t = np(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? ep(e) : (ve = t),
    (M1.current = null);
}
function ep(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = s7(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (ve = null);
        return;
      }
    } else if (((n = o7(n, t, Qe)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function Yn(e, t, n) {
  var r = X,
    i = gt.transition;
  try {
    (gt.transition = null), (X = 1), p7(e, t, n, r);
  } finally {
    (gt.transition = i), (X = r);
  }
  return null;
}
function p7(e, t, n, r) {
  do Yr();
  while (En !== null);
  if (G & 6) throw Error(M(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Gm(e, o),
    e === Se && ((ve = Se = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      os ||
      ((os = !0),
      rp(Us, function () {
        return Yr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = gt.transition), (gt.transition = null);
    var s = X;
    X = 1;
    var a = G;
    (G |= 4),
      (M1.current = null),
      l7(e, n),
      G5(n, e),
      I8(Dc),
      (Zs = !!Ic),
      (Dc = Ic = null),
      (e.current = n),
      c7(n),
      _m(),
      (G = a),
      (X = s),
      (gt.transition = o);
  } else e.current = n;
  if (
    (os && ((os = !1), (En = e), (la = i)),
    (o = e.pendingLanes),
    o === 0 && (Mn = null),
    Bm(n.stateNode),
    Ge(e, me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (aa) throw ((aa = !1), (e = tu), (tu = null), e);
  return (
    la & 1 && e.tag !== 0 && Yr(),
    (o = e.pendingLanes),
    o & 1 ? (e === nu ? zi++ : ((zi = 0), (nu = e))) : (zi = 0),
    Un(),
    null
  );
}
function Yr() {
  if (En !== null) {
    var e = Ih(la),
      t = gt.transition,
      n = X;
    try {
      if (((gt.transition = null), (X = 16 > e ? 16 : e), En === null))
        var r = !1;
      else {
        if (((e = En), (En = null), (la = 0), G & 6)) throw Error(M(331));
        var i = G;
        for (G |= 4, R = e.current; R !== null; ) {
          var o = R,
            s = o.child;
          if (R.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (R = c; R !== null; ) {
                  var d = R;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hi(8, d, o);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (R = f);
                  else
                    for (; R !== null; ) {
                      d = R;
                      var h = d.sibling,
                        g = d.return;
                      if ((W5(d), d === c)) {
                        R = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (R = h);
                        break;
                      }
                      R = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var k = v.sibling;
                    (v.sibling = null), (v = k);
                  } while (v !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (R = s);
          else
            e: for (; R !== null; ) {
              if (((o = R), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hi(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (R = m);
                break e;
              }
              R = o.return;
            }
        }
        var y = e.current;
        for (R = y; R !== null; ) {
          s = R;
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) (x.return = s), (R = x);
          else
            e: for (s = y; R !== null; ) {
              if (((a = R), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $a(9, a);
                  }
                } catch (E) {
                  he(a, a.return, E);
                }
              if (a === s) {
                R = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (R = C);
                break e;
              }
              R = a.return;
            }
        }
        if (
          ((G = i), Un(), Ot && typeof Ot.onPostCommitFiberRoot == "function")
        )
          try {
            Ot.onPostCommitFiberRoot(ba, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (gt.transition = t);
    }
  }
  return !1;
}
function e0(e, t, n) {
  (t = ii(n, t)),
    (t = I5(e, t, 1)),
    (e = Pn(e, t, 1)),
    (t = Fe()),
    e !== null && (No(e, 1, t), Ge(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) e0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        e0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Mn === null || !Mn.has(r)))
        ) {
          (e = ii(n, e)),
            (e = D5(t, e, 1)),
            (t = Pn(t, e, 1)),
            (e = Fe()),
            t !== null && (No(t, 1, e), Ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function m7(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Se === e &&
      (Pe & n) === n &&
      (we === 4 || (we === 3 && (Pe & 130023424) === Pe && 500 > me() - R1)
        ? ar(e, 0)
        : (j1 |= n)),
    Ge(e, t);
}
function tp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = qo), (qo <<= 1), !(qo & 130023424) && (qo = 4194304))
      : (t = 1));
  var n = Fe();
  (e = tn(e, t)), e !== null && (No(e, t, n), Ge(e, n));
}
function g7(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), tp(e, n);
}
function v7(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), tp(e, n);
}
var np;
np = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ze.current) We = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (We = !1), i7(e, t, n);
      We = !!(e.flags & 131072);
    }
  else (We = !1), le && t.flags & 1048576 && s5(t, Js, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      bs(e, t), (e = t.pendingProps);
      var i = ei(t, Ve.current);
      qr(t, n), (i = T1(null, t, r, e, i, n));
      var o = N1();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ke(r) ? ((o = !0), Qs(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            w1(t),
            (i.updater = Da),
            (t.stateNode = i),
            (i._reactInternals = t),
            Uc(t, r, e, n),
            (t = Kc(null, t, r, !0, o, n)))
          : ((t.tag = 0), le && o && h1(t), _e(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (bs(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = x7(r)),
          (e = Et(r, e)),
          i)
        ) {
          case 0:
            t = Zc(null, t, r, e, n);
            break e;
          case 1:
            t = Uf(null, t, r, e, n);
            break e;
          case 11:
            t = Bf(null, t, r, e, n);
            break e;
          case 14:
            t = zf(null, t, r, Et(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Et(r, i)),
        Zc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Et(r, i)),
        Uf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((_5(t), e === null)) throw Error(M(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          f5(e, t),
          na(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = ii(Error(M(423)), t)), (t = Wf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ii(Error(M(424)), t)), (t = Wf(e, t, r, n, i));
            break e;
          } else
            for (
              et = bn(t.stateNode.containerInfo.firstChild),
                tt = t,
                le = !0,
                Tt = null,
                n = u5(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ti(), r === i)) {
            t = nn(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        h5(t),
        e === null && Hc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        $c(r, i) ? (s = null) : o !== null && $c(r, o) && (t.flags |= 32),
        V5(e, t),
        _e(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Hc(t), null;
    case 13:
      return F5(e, t, n);
    case 4:
      return (
        C1(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ni(t, null, r, n)) : _e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Et(r, i)),
        Bf(e, t, r, i, n)
      );
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          oe(ea, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (bt(o.value, s)) {
            if (o.children === i.children && !Ze.current) {
              t = nn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = qt(-1, n & -n)), (l.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (c.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Bc(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(M(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Bc(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        _e(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        qr(t, n),
        (i = vt(i)),
        (r = r(i)),
        (t.flags |= 1),
        _e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Et(r, t.pendingProps)),
        (i = Et(r.type, i)),
        zf(e, t, r, i, n)
      );
    case 15:
      return $5(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Et(r, i)),
        bs(e, t),
        (t.tag = 1),
        Ke(r) ? ((e = !0), Qs(t)) : (e = !1),
        qr(t, n),
        A5(t, r, i),
        Uc(t, r, i, n),
        Kc(null, t, r, !0, e, n)
      );
    case 19:
      return H5(e, t, n);
    case 22:
      return O5(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function rp(e, t) {
  return Mh(e, t);
}
function y7(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function mt(e, t, n, r) {
  return new y7(e, t, n, r);
}
function $1(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function x7(e) {
  if (typeof e == "function") return $1(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === t1)) return 11;
    if (e === n1) return 14;
  }
  return 2;
}
function Rn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = mt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function js(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) $1(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Mr:
        return lr(n.children, i, o, t);
      case e1:
        (s = 8), (i |= 8);
        break;
      case pc:
        return (
          (e = mt(12, n, t, i | 2)), (e.elementType = pc), (e.lanes = o), e
        );
      case mc:
        return (e = mt(13, n, t, i)), (e.elementType = mc), (e.lanes = o), e;
      case gc:
        return (e = mt(19, n, t, i)), (e.elementType = gc), (e.lanes = o), e;
      case hh:
        return Va(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case dh:
              s = 10;
              break e;
            case fh:
              s = 9;
              break e;
            case t1:
              s = 11;
              break e;
            case n1:
              s = 14;
              break e;
            case gn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = mt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function lr(e, t, n, r) {
  return (e = mt(7, e, r, t)), (e.lanes = n), e;
}
function Va(e, t, n, r) {
  return (
    (e = mt(22, e, r, t)),
    (e.elementType = hh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ml(e, t, n) {
  return (e = mt(6, e, null, t)), (e.lanes = n), e;
}
function jl(e, t, n) {
  return (
    (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function w7(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = dl(0)),
    (this.expirationTimes = dl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = dl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function O1(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new w7(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = mt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    w1(o),
    e
  );
}
function C7(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ip(e) {
  if (!e) return $n;
  e = e._reactInternals;
  e: {
    if (wr(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ke(n)) return i5(e, n, t);
  }
  return t;
}
function op(e, t, n, r, i, o, s, a, l) {
  return (
    (e = O1(n, r, !0, e, i, o, s, a, l)),
    (e.context = ip(null)),
    (n = e.current),
    (r = Fe()),
    (i = jn(n)),
    (o = qt(r, i)),
    (o.callback = t ?? null),
    Pn(n, o, i),
    (e.current.lanes = i),
    No(e, i, r),
    Ge(e, r),
    e
  );
}
function _a(e, t, n, r) {
  var i = t.current,
    o = Fe(),
    s = jn(i);
  return (
    (n = ip(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Pn(i, t, s)),
    e !== null && (Lt(e, i, s, o), Ts(e, i, s)),
    s
  );
}
function ua(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function t0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function V1(e, t) {
  t0(e, t), (e = e.alternate) && t0(e, t);
}
function k7() {
  return null;
}
var sp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _1(e) {
  this._internalRoot = e;
}
Fa.prototype.render = _1.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  _a(e, t, null, null);
};
Fa.prototype.unmount = _1.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mr(function () {
      _a(null, e, null, null);
    }),
      (t[en] = null);
  }
};
function Fa(e) {
  this._internalRoot = e;
}
Fa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Oh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wn.length && t !== 0 && t < wn[n].priority; n++);
    wn.splice(n, 0, e), n === 0 && _h(e);
  }
};
function F1(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ha(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function n0() {}
function E7(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = ua(s);
        o.call(c);
      };
    }
    var s = op(t, r, e, 0, null, !1, !1, "", n0);
    return (
      (e._reactRootContainer = s),
      (e[en] = s.current),
      ro(e.nodeType === 8 ? e.parentNode : e),
      mr(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = ua(l);
      a.call(c);
    };
  }
  var l = O1(e, 0, !1, null, null, !1, !1, "", n0);
  return (
    (e._reactRootContainer = l),
    (e[en] = l.current),
    ro(e.nodeType === 8 ? e.parentNode : e),
    mr(function () {
      _a(t, l, n, r);
    }),
    l
  );
}
function Ba(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = ua(s);
        a.call(l);
      };
    }
    _a(t, s, e, i);
  } else s = E7(n, t, e, i, r);
  return ua(s);
}
Dh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mi(t.pendingLanes);
        n !== 0 &&
          (o1(t, n | 1), Ge(t, me()), !(G & 6) && ((oi = me() + 500), Un()));
      }
      break;
    case 13:
      mr(function () {
        var r = tn(e, 1);
        if (r !== null) {
          var i = Fe();
          Lt(r, e, 1, i);
        }
      }),
        V1(e, 1);
  }
};
s1 = function (e) {
  if (e.tag === 13) {
    var t = tn(e, 134217728);
    if (t !== null) {
      var n = Fe();
      Lt(t, e, 134217728, n);
    }
    V1(e, 134217728);
  }
};
$h = function (e) {
  if (e.tag === 13) {
    var t = jn(e),
      n = tn(e, t);
    if (n !== null) {
      var r = Fe();
      Lt(n, e, t, r);
    }
    V1(e, t);
  }
};
Oh = function () {
  return X;
};
Vh = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
Nc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((xc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ra(r);
            if (!i) throw Error(M(90));
            mh(r), xc(r, i);
          }
        }
      }
      break;
    case "textarea":
      vh(e, n);
      break;
    case "select":
      (t = n.value), t != null && Wr(e, !!n.multiple, t, !1);
  }
};
Sh = A1;
Th = mr;
var S7 = { usingClientEntryPoint: !1, Events: [bo, Ir, Ra, kh, Eh, A1] },
  Si = {
    findFiberByHostInstance: tr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  T7 = {
    bundleType: Si.bundleType,
    version: Si.version,
    rendererPackageName: Si.rendererPackageName,
    rendererConfig: Si.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: cn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = bh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Si.findFiberByHostInstance || k7,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ss.isDisabled && ss.supportsFiber)
    try {
      (ba = ss.inject(T7)), (Ot = ss);
    } catch {}
}
ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = S7;
ot.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!F1(t)) throw Error(M(200));
  return C7(e, t, null, n);
};
ot.createRoot = function (e, t) {
  if (!F1(e)) throw Error(M(299));
  var n = !1,
    r = "",
    i = sp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = O1(e, 1, !1, null, null, n, !1, r, i)),
    (e[en] = t.current),
    ro(e.nodeType === 8 ? e.parentNode : e),
    new _1(t)
  );
};
ot.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return (e = bh(t)), (e = e === null ? null : e.stateNode), e;
};
ot.flushSync = function (e) {
  return mr(e);
};
ot.hydrate = function (e, t, n) {
  if (!Ha(t)) throw Error(M(200));
  return Ba(null, e, t, !0, n);
};
ot.hydrateRoot = function (e, t, n) {
  if (!F1(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = sp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = op(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[en] = t.current),
    ro(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Fa(t);
};
ot.render = function (e, t, n) {
  if (!Ha(t)) throw Error(M(200));
  return Ba(null, e, t, !1, n);
};
ot.unmountComponentAtNode = function (e) {
  if (!Ha(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (mr(function () {
        Ba(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[en] = null);
        });
      }),
      !0)
    : !1;
};
ot.unstable_batchedUpdates = A1;
ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ha(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Ba(e, t, n, !1, r);
};
ot.version = "18.3.1-next-f1338f8080-20240426";
function ap() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ap);
    } catch (e) {
      console.error(e);
    }
}
ap(), (ah.exports = ot);
var Mo = ah.exports;
const lp = Zu(Mo);
var r0 = Mo;
(fc.createRoot = r0.createRoot), (fc.hydrateRoot = r0.hydrateRoot);
function cp() {
  return u.jsx(u.Fragment, {
    children: u.jsx("svg", {
      className: "fill-primary dark:fill-white",
      width: "108",
      height: "28",
      children: u.jsx("path", {
        d: "M6.543 20.456h1.74c.726 0 1.19-.321 1.451-.963l4.96-12.43c.348-.846-.029-1.43-.928-1.43h-1.421c-.696 0-1.16.321-1.393 1.022l-3.539 9.687-3.539-9.687c-.232-.7-.696-1.022-1.42-1.022H1.06c-.929 0-1.277.584-.929 1.43l4.96 12.43c.262.642.755.963 1.451.963ZM23.004 20.777c1.944 0 3.742-.73 4.99-2.539v.992c0 .788.435 1.226 1.218 1.226h1.276c.783 0 1.247-.438 1.247-1.226V6.888c0-.788-.464-1.255-1.247-1.255h-1.276c-.783 0-1.218.467-1.218 1.255v.963c-1.248-1.81-3.046-2.538-4.99-2.538-4.264 0-7.194 3.413-7.194 7.732 0 4.318 2.93 7.732 7.194 7.732Zm.725-3.122c-2.64 0-4.177-2.072-4.177-4.61 0-2.51 1.538-4.61 4.177-4.61 2.582 0 4.294 1.954 4.323 4.61-.03 2.655-1.741 4.61-4.323 4.61ZM41.503 27.313c4.264 0 7.977-2.189 7.977-7.528V6.888c0-.788-.435-1.255-1.218-1.255h-1.247c-.783 0-1.219.409-1.219 1.168v1.05c-1.218-1.81-3.045-2.538-4.989-2.538-4.264 0-7.165 3.5-7.165 7.732 0 4.26 2.9 7.732 7.165 7.732 1.944 0 3.8-.73 5.018-2.539v1.518c0 3.034-1.856 4.522-4.525 4.522a7.653 7.653 0 0 1-3.916-1.05c-.696-.409-1.247-.292-1.653.437l-.29.526c-.349.7-.233 1.313.435 1.692 1.45.846 3.22 1.43 5.627 1.43Zm.03-9.63c-2.64 0-4.178-2.1-4.178-4.638 0-2.51 1.538-4.64 4.177-4.64 2.582 0 4.293 1.984 4.322 4.64-.029 2.655-1.74 4.639-4.322 4.639ZM58.804 20.777c1.944 0 3.742-.73 4.99-2.539v.992c0 .788.434 1.226 1.218 1.226h1.276c.783 0 1.248-.438 1.248-1.226V6.888c0-.788-.465-1.255-1.248-1.255h-1.276c-.784 0-1.219.467-1.219 1.255v.963c-1.247-1.81-3.045-2.538-4.989-2.538-4.264 0-7.194 3.413-7.194 7.732 0 4.318 2.93 7.732 7.194 7.732Zm.725-3.122c-2.64 0-4.177-2.072-4.177-4.61 0-2.51 1.538-4.61 4.177-4.61 2.582 0 4.293 1.954 4.322 4.61-.029 2.655-1.74 4.61-4.322 4.61ZM72.304 20.456h1.277c.783 0 1.247-.438 1.247-1.226v-4.639c0-4.843 2.089-5.69 3.481-5.69.232 0 .493.03.754.088.551.087.9-.234.9-.992V6.538c0-.584-.116-1.109-.755-1.167a4.334 4.334 0 0 0-.58-.059c-1.508 0-3.394 1.08-3.887 3.619V6.888c0-.788-.435-1.255-1.218-1.255h-1.219c-.783 0-1.218.467-1.218 1.255V19.23c0 .788.435 1.226 1.218 1.226ZM87.675 20.777c4.496 0 7.977-3.443 7.977-7.732 0-4.231-3.48-7.732-7.977-7.732-4.496 0-7.948 3.472-7.948 7.732 0 4.289 3.452 7.732 7.948 7.732Zm0-3.152c-2.437 0-4.351-2.013-4.351-4.551 0-2.568 1.914-4.61 4.351-4.61 2.437 0 4.351 2.042 4.351 4.61 0 2.538-1.914 4.551-4.351 4.551Z",
      }),
    }),
  });
}
const N7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 10 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M2.83331 5C2.55206 5 2.33331 4.78125 2.33331 4.5C2.33331 3.125 3.42706 2 4.83331 2C5.08331 2 5.33331 2.25 5.33331 2.5C5.33331 2.78125 5.08331 3 4.83331 3C3.98956 3 3.33331 3.6875 3.33331 4.5C3.33331 4.78125 3.08331 5 2.83331 5ZM9.33331 4.5C9.33331 6.84375 7.58331 8.75 5.33331 9V15.5C5.33331 15.7812 5.08331 16 4.83331 16C4.55206 16 4.33331 15.7812 4.33331 15.5V9C2.08331 8.75 0.333313 6.84375 0.333313 4.5C0.333313 2.03125 2.33331 0 4.83331 0C7.30206 0 9.33331 2.03125 9.33331 4.5ZM4.83331 8C6.73956 8 8.33331 6.4375 8.33331 4.5C8.33331 2.59375 6.73956 1 4.83331 1C2.89581 1 1.33331 2.59375 1.33331 4.5C1.33331 6.4375 2.89581 8 4.83331 8Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  L7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 27 27",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M17.1676 4.93756L20.0117 3.83985L21.0595 1.04566C21.1094 0.796175 21.3589 0.646486 21.6084 0.646486C21.808 0.646486 22.0575 0.796175 22.1074 1.04566L23.2051 3.83985L25.9993 4.93756C26.2487 4.98746 26.3984 5.23694 26.3984 5.43652C26.3984 5.68601 26.2487 5.93549 25.9993 5.98538L23.2051 7.0332L22.1074 9.87729C22.0575 10.0769 21.808 10.2266 21.6084 10.2266C21.3589 10.2266 21.1094 10.0769 21.0595 9.87729L20.0117 7.0332L17.1676 5.98538C16.9182 5.93549 16.8184 5.68601 16.8184 5.43652C16.8184 5.23694 16.9182 4.98746 17.1676 4.93756ZM13.6749 10.027L19.3631 12.6216C19.6624 12.7713 19.862 13.0706 19.862 13.37C19.862 13.6694 19.6624 13.9688 19.3631 14.1185L13.6749 16.7131L11.0803 22.4012C10.9306 22.7006 10.6312 22.9002 10.3318 22.9002C10.0325 22.9002 9.73309 22.7006 9.6333 22.4012L6.9888 16.7131L1.30063 14.1185C1.00125 13.9688 0.851563 13.6694 0.851563 13.37C0.851563 13.0706 1.00125 12.7713 1.30063 12.6216L6.9888 10.027L9.6333 4.33881C9.73309 4.03943 10.0325 3.83985 10.3318 3.83985C10.6312 3.83985 10.9306 4.03943 11.0803 4.33881L13.6749 10.027ZM21.0595 17.0125C21.1094 16.763 21.3589 16.6133 21.6084 16.6133C21.808 16.6133 22.0575 16.763 22.1074 17.0125L23.2051 19.8066L25.9993 20.9044C26.2487 20.9543 26.3984 21.2037 26.3984 21.4033C26.3984 21.6528 26.2487 21.9023 25.9993 21.9522L23.2051 23L22.1074 25.8441C22.0575 26.0437 21.808 26.1934 21.6084 26.1934C21.3589 26.1934 21.1094 26.0437 21.0595 25.8441L20.0117 23L17.1676 21.9522C16.9182 21.9023 16.8184 21.6528 16.8184 21.4033C16.8184 21.2037 16.9182 20.9543 17.1676 20.9044L20.0117 19.8066L21.0595 17.0125Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  b7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 14 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M8.91663 3.5C9.85413 3.5 10.6666 2.71875 10.6666 1.75C10.6666 0.8125 9.85413 0 8.91663 0C7.94788 0 7.16663 0.8125 7.16663 1.75C7.16663 2.71875 7.94788 3.5 8.91663 3.5ZM8.91663 1C9.32288 1 9.66663 1.34375 9.66663 1.75C9.66663 2.1875 9.32288 2.5 8.91663 2.5C8.47913 2.5 8.16663 2.1875 8.16663 1.75C8.16663 1.34375 8.47913 1 8.91663 1ZM4.38538 10.5625C4.13538 10.4375 3.82288 10.5312 3.69788 10.7812L3.35413 11.5H0.666626C0.385376 11.5 0.166626 11.75 0.166626 12C0.166626 12.2812 0.385376 12.5 0.666626 12.5H3.66663C3.85413 12.5 4.01038 12.4062 4.10413 12.25L4.60413 11.25C4.72913 11 4.63538 10.6875 4.38538 10.5625ZM12.6666 7.5H10.7604C10.5729 7.5 10.4166 7.40625 10.3229 7.25L9.69788 5.96875C9.26038 5.125 8.54163 4.40625 7.69788 3.96875C7.10413 3.6875 6.41663 3.5 5.72913 3.5H4.47913C4.16663 3.5 3.85413 3.625 3.57288 3.8125L1.85413 5.125C1.63538 5.28125 1.57288 5.59375 1.76038 5.8125C1.91663 6.03125 2.22913 6.09375 2.44788 5.90625L4.19788 4.625C4.26038 4.5625 4.38538 4.5 4.47913 4.5H5.72913C5.85413 4.5 5.94788 4.53125 6.07288 4.5625L4.97913 6.75C4.41663 7.84375 4.76038 9.21875 5.79163 9.90625L9.07288 12.2188L8.16663 15.375C8.10413 15.6562 8.26038 15.9062 8.51038 16C8.57288 16 8.60413 16 8.66663 16C8.85413 16 9.07288 15.875 9.13538 15.6562L10.1354 12.1562C10.1979 11.9375 10.1041 11.7188 9.94788 11.5938L6.35413 9.09375C5.76038 8.6875 5.54163 7.84375 5.85413 7.1875L7.07288 4.8125C7.13538 4.84375 7.19788 4.84375 7.26038 4.875C7.91663 5.21875 8.44788 5.75 8.79163 6.40625L9.41663 7.6875C9.69788 8.1875 10.1979 8.5 10.7604 8.5H12.6666C12.9166 8.5 13.1666 8.28125 13.1666 8C13.1666 7.75 12.9166 7.5 12.6666 7.5Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  P7 = ({ size: e = 24, color: t = "currentColor" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M5 12h14m0 0l-6-6m6 6l-6 6",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  M7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsxs("svg", {
      width: e,
      height: e,
      viewBox: "0 0 8 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u.jsx("g", {
          clipPath: "url(#clip0_40_957)",
          children: u.jsx("path", {
            d: "M7.53716 12.7029H6.6743V11.8643L6.68573 11.8529L6.6743 11.8414V8.30857L6.68573 8.29714L6.6743 8.28572V4.95857L6.68573 4.94714L6.6743 4.93571V3.29571H7.53716C7.7743 3.29571 7.96573 3.10429 7.96573 2.86714C7.96573 2.63 7.7743 2.43857 7.53716 2.43857H5.42002C5.55287 2.20143 5.62859 1.93 5.62859 1.63857C5.62859 0.731429 4.89287 -0.00285721 3.98716 -0.00285721C3.08144 -0.00285721 2.34573 0.732857 2.34573 1.63857C2.34573 1.92857 2.42144 2.20143 2.5543 2.43857H0.462873C0.22573 2.43857 0.0343018 2.63 0.0343018 2.86714C0.0343018 3.10429 0.22573 3.29571 0.462873 3.29571H1.29002V11.02L1.27859 11.0314L1.29002 11.0429V12.7H0.462873C0.22573 12.7 0.0343018 12.8914 0.0343018 13.1286C0.0343018 13.3657 0.22573 13.5571 0.462873 13.5571H2.55287C2.42144 13.7943 2.3443 14.0657 2.3443 14.3557C2.3443 15.2629 3.08002 15.9971 3.98573 15.9971C4.89144 15.9971 5.62716 15.2614 5.62716 14.3557C5.62716 14.0657 5.55144 13.7929 5.41859 13.5571H7.53573C7.77287 13.5571 7.9643 13.3657 7.9643 13.1286C7.9643 12.8914 7.77287 12.7 7.53573 12.7L7.53716 12.7029ZM3.98573 0.857143C4.41859 0.857143 4.77002 1.20857 4.77002 1.64143C4.77002 2.07429 4.41859 2.42571 3.98573 2.42571C3.55287 2.42571 3.20144 2.07429 3.20144 1.64143C3.20144 1.20857 3.55287 0.857143 3.98573 0.857143ZM3.98573 15.1429C3.55287 15.1429 3.20144 14.7914 3.20144 14.3586C3.20144 13.9257 3.55287 13.5743 3.98573 13.5743C4.41859 13.5743 4.77002 13.9257 4.77002 14.3586C4.77002 14.7914 4.41859 15.1429 3.98573 15.1429ZM2.14716 4.97143L5.81716 8.64143V10.9829L2.14716 7.31429V4.97286V4.97143ZM2.14716 3.76V3.71143H4.23573L5.81716 5.29286V7.43L2.14716 3.76ZM5.44859 3.71143H5.81859V4.08143L5.44859 3.71143ZM2.14716 11.9014L2.94716 12.7014H2.14716V11.9014ZM4.16002 12.7014L2.14716 10.6886V8.52429L5.81716 12.1943V12.7H4.16002V12.7014Z",
            stroke: t,
            strokeWidth: ".1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        }),
        u.jsx("defs", {
          children: u.jsx("clipPath", {
            id: "clip0_40_957",
            children: u.jsx("rect", {
              width: "7.93143",
              height: "16",
              fill: "white",
              transform: "translate(0.0343018)",
            }),
          }),
        }),
      ],
    }),
  j7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 24 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: n,
      children: u.jsx("path", {
        d: "M22.3125 0H4.1875C3.64062 0 3.25 0.429688 3.25 0.9375V1.25H1.6875C1.14062 1.25 0.75 1.67969 0.75 2.1875V13.125C0.75 14.1797 1.57031 15 2.625 15H22.3125C22.8203 15 23.25 14.6094 23.25 14.0625V0.9375C23.25 0.429688 22.8203 0 22.3125 0ZM2 13.125V2.5H3.25V13.125C3.25 13.4766 2.9375 13.75 2.625 13.75C2.27344 13.75 2 13.4766 2 13.125ZM22 13.75H4.38281C4.42188 13.5938 4.5 13.3203 4.5 13.1641V13.125V1.25H22V13.75ZM6.21875 10H12.7812C13.0156 10 13.25 9.80469 13.25 9.53125V2.96875C13.25 2.73438 13.0156 2.5 12.7812 2.5H6.21875C5.94531 2.5 5.75 2.73438 5.75 2.96875V9.53125C5.75 9.80469 5.94531 10 6.21875 10ZM7 3.75H12V8.75H7V3.75ZM5.75 12.0312C5.75 12.3047 5.94531 12.5 6.21875 12.5H12.7812C13.0156 12.5 13.25 12.3047 13.25 12.0312V11.7188C13.25 11.4844 13.0156 11.25 12.7812 11.25H6.21875C5.94531 11.25 5.75 11.4844 5.75 11.7188V12.0312ZM14.5 12.0312C14.5 12.3047 14.6953 12.5 14.9688 12.5H20.2812C20.5156 12.5 20.75 12.3047 20.75 12.0312V11.7188C20.75 11.4844 20.5156 11.25 20.2812 11.25H14.9688C14.6953 11.25 14.5 11.4844 14.5 11.7188V12.0312ZM14.5 9.53125C14.5 9.80469 14.6953 10 14.9688 10H20.2812C20.5156 10 20.75 9.80469 20.75 9.53125V9.21875C20.75 8.98438 20.5156 8.75 20.2812 8.75H14.9688C14.6953 8.75 14.5 8.98438 14.5 9.21875V9.53125ZM14.5 4.53125C14.5 4.80469 14.6953 5 14.9688 5H20.2812C20.5156 5 20.75 4.80469 20.75 4.53125V4.21875C20.75 3.98438 20.5156 3.75 20.2812 3.75H14.9688C14.6953 3.75 14.5 3.98438 14.5 4.21875V4.53125ZM14.5 7.03125C14.5 7.30469 14.6953 7.5 14.9688 7.5H20.2812C20.5156 7.5 20.75 7.30469 20.75 7.03125V6.71875C20.75 6.48438 20.5156 6.25 20.2812 6.25H14.9688C14.6953 6.25 14.5 6.48438 14.5 6.71875V7.03125Z",
        fill: t,
      }),
    }),
  R7 = ({ size: e = 22, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 512 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M304 24c0 13.3 10.7 24 24 24H430.1L207 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l223-223V184c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H328c-13.3 0-24 10.7-24 24zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V440c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z",
      }),
    }),
  A7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 16 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M7.96875 3.78125L8.28125 3.3125C8.4375 3 8.84375 2.90625 9.125 3.0625C9.4375 3.25 9.5625 3.625 9.375 3.9375L6.625 8.6875H8.625C9.25 8.6875 9.625 9.4375 9.34375 9.9375H3.53125C3.1875 9.9375 2.90625 9.65625 2.90625 9.3125C2.90625 8.96875 3.1875 8.6875 3.53125 8.6875H5.15625L7.25 5.0625L6.59375 3.9375C6.4375 3.625 6.53125 3.25 6.84375 3.0625C7.125 2.90625 7.53125 3 7.71875 3.3125L7.96875 3.78125ZM5.53125 10.5938L4.90625 11.6562C4.75 11.9688 4.34375 12.0625 4.03125 11.9062C3.71875 11.7188 3.625 11.3438 3.8125 11.0312L4.25 10.25C4.78125 10.0938 5.1875 10.2188 5.53125 10.5938ZM10.8125 8.6875H12.4688C12.8125 8.6875 13.0938 8.96875 13.0938 9.3125C13.0938 9.65625 12.8125 9.9375 12.4688 9.9375H11.5312L12.1562 11.0312C12.3438 11.3438 12.2188 11.7188 11.9375 11.9062C11.625 12.0625 11.2188 11.9688 11.0625 11.6562C10 9.84375 9.21875 8.5 8.6875 7.59375C8.15625 6.65625 8.53125 5.75 8.9375 5.4375C9.34375 6.15625 9.96875 7.21875 10.8125 8.6875ZM8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM14.75 8C14.75 11.7188 11.7188 14.75 8 14.75C4.28125 14.75 1.25 11.75 1.25 8C1.25 4.3125 4.25 1.25 8 1.25C11.6875 1.25 14.75 4.28125 14.75 8Z",
        stroke: t,
        strokeWidth: ".1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  I7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 19 14",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M14 7C14 9.21875 12.1875 11 10 11C7.78125 11 6 9.21875 6 7C6 4.8125 7.78125 3 10 3C12.1875 3 14 4.8125 14 7ZM10 4C8.3125 4 7 5.34375 7 7C7 8.65625 8.3125 10 10 10C11.6562 10 13 8.65625 13 7C13 5.34375 11.6562 4 10 4ZM16 2.53125C17.4688 3.875 18.4375 5.5 18.9062 6.625C19 6.875 19 7.15625 18.9062 7.40625C18.4375 8.5 17.4688 10.125 16 11.5C14.5312 12.875 12.5 14 10 14C7.46875 14 5.4375 12.875 3.96875 11.5C2.5 10.125 1.53125 8.5 1.0625 7.40625C0.96875 7.15625 0.96875 6.875 1.0625 6.625C1.53125 5.5 2.5 3.875 3.96875 2.53125C5.4375 1.15625 7.46875 0 10 0C12.5 0 14.5312 1.15625 16 2.53125ZM2 7C2.40625 8 3.3125 9.5 4.65625 10.75C6 12 7.78125 13 10 13C12.1875 13 13.9688 12 15.3125 10.75C16.6562 9.5 17.5625 8 18 7C17.5625 6 16.6562 4.5 15.3125 3.25C13.9688 2 12.1875 1 10 1C7.78125 1 6 2 4.65625 3.25C3.3125 4.5 2.40625 6 2 7Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  D7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 18 21",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M7.75 4.67969C7.75 4.44531 7.51562 4.21094 7.28125 4.21094H5.71875C5.44531 4.21094 5.25 4.44531 5.25 4.67969V6.24219C5.25 6.51562 5.44531 6.71094 5.71875 6.71094H7.28125C7.51562 6.71094 7.75 6.51562 7.75 6.24219V4.67969ZM12.2812 4.21094H10.7188C10.4453 4.21094 10.25 4.44531 10.25 4.67969V6.24219C10.25 6.51562 10.4453 6.71094 10.7188 6.71094H12.2812C12.5156 6.71094 12.75 6.51562 12.75 6.24219V4.67969C12.75 4.44531 12.5156 4.21094 12.2812 4.21094ZM7.28125 7.96094H5.71875C5.44531 7.96094 5.25 8.19531 5.25 8.42969V9.99219C5.25 10.2656 5.44531 10.4609 5.71875 10.4609H7.28125C7.51562 10.4609 7.75 10.2656 7.75 9.99219V8.42969C7.75 8.19531 7.51562 7.96094 7.28125 7.96094ZM12.2812 7.96094H10.7188C10.4453 7.96094 10.25 8.19531 10.25 8.42969V9.99219C10.25 10.2656 10.4453 10.4609 10.7188 10.4609H12.2812C12.5156 10.4609 12.75 10.2656 12.75 9.99219V8.42969C12.75 8.19531 12.5156 7.96094 12.2812 7.96094ZM7.28125 11.7109H5.71875C5.44531 11.7109 5.25 11.9453 5.25 12.1797V13.7422C5.25 14.0156 5.44531 14.2109 5.71875 14.2109H7.28125C7.51562 14.2109 7.75 14.0156 7.75 13.7422V12.1797C7.75 11.9453 7.51562 11.7109 7.28125 11.7109ZM12.2812 11.7109H10.7188C10.4453 11.7109 10.25 11.9453 10.25 12.1797V13.7422C10.25 14.0156 10.4453 14.2109 10.7188 14.2109H12.2812C12.5156 14.2109 12.75 14.0156 12.75 13.7422V12.1797C12.75 11.9453 12.5156 11.7109 12.2812 11.7109ZM17.75 19.7188C17.75 19.4844 17.5156 19.25 17.2812 19.25H16.5V1.4375C16.5 0.929688 16.0703 0.5 15.5625 0.5H2.4375C1.89062 0.5 1.5 0.929688 1.5 1.4375V19.25H0.71875C0.445312 19.25 0.25 19.4844 0.25 19.7188V20.5H17.75V19.7188ZM15.25 19.25H10.25V15.9297C10.25 15.6953 10.0156 15.4609 9.78125 15.4609H8.21875C7.94531 15.4609 7.75 15.6953 7.75 15.9297V19.25H2.75V1.75H15.25V19.25Z",
      }),
    }),
  $7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 448 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M112 0c8.8 0 16 7.2 16 16V64H320V16c0-8.8 7.2-16 16-16s16 7.2 16 16V64h32c35.3 0 64 28.7 64 64v32 32V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 160 128C0 92.7 28.7 64 64 64H96V16c0-8.8 7.2-16 16-16zM416 192H312v72H416V192zm0 104H312v80H416V296zm0 112H312v72h72c17.7 0 32-14.3 32-32V408zM280 376V296H168v80H280zM168 408v72H280V408H168zm-32-32V296H32v80H136zM32 408v40c0 17.7 14.3 32 32 32h72V408H32zm0-144H136V192H32v72zm136 0H280V192H168v72zM384 96H64c-17.7 0-32 14.3-32 32v32H416V128c0-17.7-14.3-32-32-32z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  O7 = ({ size: e = 24, color: t = "currentColor" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M5 12l5 5L19 7",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  V7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 19 10",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M17.0833 5C17.9896 4.46875 18.3333 3.625 18.3333 2.59375C18.3333 1.1875 17.1146 0 15.6771 0C14.5208 0 13.5208 0.71875 13.1458 1.78125C12.9271 2.5 12.9271 2.5 12.5833 2.5H6.08331C5.70831 2.5 5.70831 2.5 5.48956 1.78125C5.11456 0.71875 4.11456 0 2.95831 0C1.48956 0 0.333313 1.1875 0.333313 2.59375C0.333313 3.625 0.645813 4.46875 1.55206 5C0.645813 5.5625 0.333313 6.40625 0.333313 7.40625C0.333313 8.84375 1.48956 10 2.95831 10C4.11456 10 5.11456 9.3125 5.48956 8.25C5.70831 7.53125 5.70831 7.5 6.08331 7.5H12.5833C12.9271 7.5 12.9271 7.53125 13.1458 8.25C13.5208 9.3125 14.5208 10 15.6771 10C17.1146 10 18.3333 8.84375 18.3333 7.40625C18.3333 6.40625 17.9896 5.5625 17.0833 5ZM15.6771 9C14.9583 9 14.3333 8.59375 14.1146 7.90625C13.8333 7.09375 13.5833 6.5 12.5833 6.5H6.08331C5.05206 6.5 4.80206 7.09375 4.55206 7.90625C4.30206 8.5625 3.67706 9 2.95831 9C2.05206 9 1.33331 8.3125 1.33331 7.40625C1.33331 6.6875 1.52081 6.125 2.23956 5.78125C2.52081 5.65625 2.70831 5.34375 2.70831 5C2.70831 4.6875 2.52081 4.375 2.23956 4.25C1.52081 3.90625 1.33331 3.34375 1.33331 2.59375C1.33331 1.71875 2.05206 1 2.95831 1C3.67706 1 4.30206 1.4375 4.55206 2.09375C4.80206 2.9375 5.05206 3.5 6.08331 3.5H12.5833C13.5833 3.5 13.8333 2.9375 14.1146 2.09375C14.3333 1.4375 14.9583 1 15.6771 1C16.5833 1 17.3333 1.71875 17.3333 2.59375C17.3333 3.34375 17.1146 3.90625 16.4271 4.25C16.1146 4.375 15.9271 4.6875 15.9271 5C15.9271 5.34375 16.1146 5.625 16.4271 5.78125C17.1146 6.125 17.3333 6.6875 17.3333 7.40625C17.3333 8.3125 16.5833 9 15.6771 9Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  _7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 20 15",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M18.125 0H1.875C0.820312 0 0 0.859375 0 1.875V13.125C0 14.1797 0.820312 15 1.875 15H18.125C19.1406 15 20 14.1797 20 13.125V1.875C20 0.859375 19.1406 0 18.125 0ZM1.875 1.25H18.125C18.4375 1.25 18.75 1.5625 18.75 1.875V3.51562C17.8906 4.21875 16.6406 5.23438 12.8516 8.24219C12.1875 8.78906 10.8984 10.0391 10 10C9.0625 10.0391 7.77344 8.78906 7.10938 8.24219C3.32031 5.23438 2.07031 4.21875 1.25 3.51562V1.875C1.25 1.5625 1.52344 1.25 1.875 1.25ZM18.125 13.75H1.875C1.52344 13.75 1.25 13.4766 1.25 13.125V5.11719C2.10938 5.85938 3.51562 6.99219 6.32812 9.21875C7.14844 9.88281 8.55469 11.2891 10 11.25C11.4062 11.2891 12.8125 9.88281 13.6328 9.21875C16.4453 6.99219 17.8516 5.85938 18.75 5.11719V13.125C18.75 13.4766 18.4375 13.75 18.125 13.75Z",
        fill: t,
      }),
    }),
  F7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 14 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M7.16663 10C7.16663 10.2812 6.91663 10.5 6.63538 10.5C6.38538 10.5 6.13538 10.2812 6.13538 10V6.5C6.13538 6.25 6.38538 6 6.63538 6C6.91663 6 7.16663 6.25 7.16663 6.5V10ZM3.63538 0.5C3.63538 0.25 3.88538 0 4.13538 0H9.16663C9.41663 0 9.66663 0.25 9.66663 0.5C9.66663 0.78125 9.41663 1 9.16663 1H7.16663V3.03125C8.69788 3.15625 10.0729 3.8125 11.1354 4.8125L12.2916 3.65625C12.4791 3.46875 12.8229 3.46875 13.0104 3.65625C13.1979 3.84375 13.1979 4.1875 13.0104 4.375L11.8229 5.5625C12.6666 6.65625 13.1666 8.03125 13.1666 9.5C13.1666 13.0938 10.2291 16 6.66663 16C3.07288 16 0.166626 13.0938 0.166626 9.5C0.166626 6.09375 2.79163 3.28125 6.16663 3.03125V1H4.16663C3.88538 1 3.66663 0.78125 3.66663 0.5H3.63538ZM6.63538 15C9.69788 15 12.1666 12.5625 12.1666 9.5C12.1666 6.46875 9.69788 4 6.63538 4C3.60413 4 1.13538 6.46875 1.13538 9.5C1.13538 12.5625 3.60413 15 6.63538 15Z",
        stroke: t,
        strokeWidth: ".25",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  H7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 16 14",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M1 11.5C1 12.3438 1.65625 13 2.5 13H15.5C15.75 13 16 13.25 16 13.5C16 13.7812 15.75 14 15.5 14H2.5C1.09375 14 0 12.9062 0 11.5V0.5C0 0.25 0.21875 0 0.5 0C0.75 0 1 0.25 1 0.5V11.5ZM10.3438 8.375C10.1562 8.5625 9.8125 8.5625 9.625 8.375L6.96875 5.71875L3.84375 8.875C3.65625 9.0625 3.3125 9.0625 3.125 8.875C2.9375 8.6875 2.9375 8.34375 3.125 8.15625L6.625 4.65625C6.8125 4.46875 7.15625 4.46875 7.34375 4.65625L10 7.3125L14.125 3.15625C14.3125 2.96875 14.6562 2.96875 14.8438 3.15625C15.0312 3.34375 15.0312 3.6875 14.8438 3.875L10.3438 8.375Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  B7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 21 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M11.1666 1.75C11.1666 0.8125 11.9479 0 12.9166 0C13.8541 0 14.6666 0.8125 14.6666 1.75C14.6666 2.71875 13.8541 3.5 12.9166 3.5C11.9479 3.5 11.1666 2.71875 11.1666 1.75ZM12.9166 2.5C13.3229 2.5 13.6666 2.1875 13.6666 1.75C13.6666 1.34375 13.3229 1 12.9166 1C12.4791 1 12.1666 1.34375 12.1666 1.75C12.1666 2.1875 12.4791 2.5 12.9166 2.5ZM8.66663 12C8.66663 14.2188 6.85413 16 4.66663 16C2.44788 16 0.666626 14.2188 0.666626 12C0.666626 9.8125 2.44788 8 4.66663 8C6.85413 8 8.66663 9.8125 8.66663 12ZM4.66663 15C6.32288 15 7.66663 13.6562 7.66663 12C7.66663 10.3438 6.32288 9 4.66663 9C2.97913 9 1.66663 10.3438 1.66663 12C1.66663 13.6562 2.97913 15 4.66663 15ZM20.6666 12C20.6666 14.2188 18.8541 16 16.6666 16C14.4479 16 12.6666 14.2188 12.6666 12C12.6666 9.8125 14.4479 8 16.6666 8C18.8541 8 20.6666 9.8125 20.6666 12ZM16.6666 15C18.3229 15 19.6666 13.6562 19.6666 12C19.6666 10.3438 18.3229 9 16.6666 9C14.9791 9 13.6666 10.3438 13.6666 12C13.6666 13.6562 14.9791 15 16.6666 15ZM8.47913 6.8125C8.22913 7 8.22913 7.40625 8.51038 7.59375L11.4479 9.59375C11.5729 9.6875 11.6666 9.84375 11.6666 10V13C11.6666 13.2812 11.4166 13.5 11.1666 13.5C10.8854 13.5 10.6666 13.2812 10.6666 13V10.2812L7.94788 8.40625C7.13538 7.84375 7.07288 6.6875 7.82288 6.03125L9.66663 4.46875C10.2291 3.96875 11.0729 3.96875 11.6354 4.46875L13.3541 6H15.6666C15.9166 6 16.1666 6.25 16.1666 6.5C16.1666 6.78125 15.9166 7 15.6666 7H13.1666C13.0416 7 12.9166 6.96875 12.8229 6.875L10.9791 5.21875C10.7916 5.0625 10.5104 5.0625 10.3229 5.21875L8.47913 6.8125Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  z7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 512 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M106.4 191.5c7.5-7.8 15.6-14.9 24.2-21.4L38.5 32l103.4 0 61.6 102.7c10.9-2.8 22.2-4.8 33.8-5.9l-68-113.3C163.5 5.9 153.1 0 141.9 0H24.6C11 0 0 11 0 24.6c0 4.8 1.4 9.6 4.1 13.6L106.4 191.5zm168.3-62.7c11.6 1 22.9 3 33.8 5.9L370.1 32l103.4 0L381.5 170.1c8.6 6.5 16.7 13.7 24.2 21.4L507.9 38.2c2.7-4 4.1-8.8 4.1-13.6C512 11 501 0 487.4 0H370.1c-11.2 0-21.7 5.9-27.4 15.5l-68 113.3zM256 192a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 320a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm38.8-229.5l-17.3-35.1c-8.8-17.8-34.2-17.8-43 0l-17.3 35.1-38.7 5.6c-19.7 2.9-27.5 27.1-13.3 40.9l28 27.3L186.5 395c-3.4 19.6 17.2 34.6 34.8 25.3L256 402.1l34.6 18.2c17.6 9.3 38.2-5.7 34.8-25.3l-6.6-38.6 28-27.3c14.2-13.9 6.4-38.1-13.3-40.9l-38.7-5.6zM244 300.5l12-24.3 12 24.3c3.5 7.1 10.3 12 18.1 13.1l26.8 3.9-19.4 18.9c-5.7 5.5-8.2 13.5-6.9 21.2l4.6 26.7-24-12.6c-7-3.7-15.3-3.7-22.3 0l-24 12.6 4.6-26.7c1.3-7.8-1.2-15.7-6.9-21.2l-19.4-18.9 26.8-3.9c7.8-1.1 14.6-6 18.1-13.1z",
        stroke: t,
        strokeWidth: ".25",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  U7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsxs("svg", {
      width: e,
      height: e,
      viewBox: "0 0 74 79",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u.jsx("path", {
          d: "M2.792,37.319l-1.417,-8.042c4.375,-16.416 18.667,-28.125 35.542,-29.208c1.041,-0.083 2.041,-0.083 3.041,-0.042c8.709,0.125 17.25,3.209 24.084,8.667c0.333,0.208 0.666,0.458 1,0.708l0.291,0.209c1.042,0.916 1.834,1.666 2.584,2.458l0.416,0.5c0.334,0.375 0.625,0.75 0.875,1.208c0.959,1.75 1.542,3.584 1.667,5.459c0.208,3.458 -0.917,6.791 -3.208,9.375c-2.292,2.583 -5.417,4.125 -8.875,4.375c-2.75,0.166 -5.459,-0.542 -7.834,-2.125c-1.166,-0.792 -2.5,-2.167 -3.041,-2.75c-2.709,-2.042 -5.959,-3 -9.375,-2.792c-6.125,0.375 -11.25,4.708 -12.75,10.75l-5.834,-1.042c0,-1.916 -0.458,-3.375 -1.375,-4.583c-2.333,-3.042 -6.75,-3.625 -9.791,-1.292c-0.75,0.584 -1.375,1.334 -1.875,2.292l-4.084,5.875l-0.041,0Zm10.208,-15.583c3.875,-0 7.708,1.75 10.25,5.041c0.083,0.125 0.208,0.25 0.292,0.375c3.416,-4.5 8.708,-7.458 14.625,-7.833c4.833,-0.333 9.708,1.167 13.583,4.208l0.417,0.375c0.625,0.709 1.541,1.625 1.916,1.875c1.375,0.917 2.834,1.292 4.334,1.209c1.875,-0.125 3.583,-0.959 4.791,-2.375c1.25,-1.417 1.834,-3.209 1.709,-5.042c-0.084,-1 -0.375,-1.958 -0.875,-2.917c-0.375,-0.416 -0.5,-0.583 -0.625,-0.75c-0.417,-0.416 -1.084,-1.041 -1.75,-1.666l-0.25,-0.167c-0,0 -0.209,-0.208 -0.375,-0.25l-0.542,-0.333c-5.833,-4.75 -13.167,-7.417 -20.625,-7.5l-2.583,-0c-11.042,0.708 -20.792,6.791 -26.375,15.916c0.708,-0.125 1.375,-0.166 2.083,-0.166Z",
        }),
        u.jsx("path", {
          d: "M39.417,78.652c-11.834,0 -23.542,-5.291 -31.334,-15.375c-4.5,-5.833 -7.25,-12.833 -7.916,-20.208l-0,-0.292c-0.125,-0.958 -0.125,-1.958 -0.167,-2.958l-0,-0.875c-0,-0.875 0.042,-1.75 0.125,-2.625c0.208,-2.417 0.583,-4.792 1.208,-7.042l0.25,-0.625c0.875,-1.708 2.084,-3.166 3.542,-4.291c5.667,-4.334 13.833,-3.292 18.167,2.375c1.75,2.25 2.666,5 2.625,7.916c-0,0.292 -0,0.625 -0.084,0.959l-0.083,0.375c-0.167,0.625 -0.292,1.25 -0.375,1.916l-0.083,0.542l-0,2.125c0.083,0.333 0.166,0.667 0.208,1.042l0.083,0.333c1.334,7.042 7.625,11.958 14.709,11.542c3.458,-0.209 6.666,-1.709 9.125,-4.209c0.5,-0.791 1.125,-1.541 1.916,-2.291c2.209,-2.125 5.084,-3.417 8.042,-3.584c7,-0.458 13.167,4.917 13.625,12c0.125,2.042 -0.25,4.084 -1.125,6.042l-0.292,0.5c-2.291,3.25 -5.041,6.125 -8.208,8.583c-7.167,5.5 -15.583,8.167 -24,8.167l0.042,-0.042Zm-32.417,-47.5c-0.458,1.792 -0.75,3.667 -0.917,5.625c-0.041,0.75 -0.083,1.459 -0.125,2.209l0,0.75c0,0.833 0.042,1.666 0.125,2.5l0,0.333c0.625,6.167 2.917,12.083 6.75,17.042c11.25,14.625 32.25,17.375 46.875,6.125c2.625,-2 4.875,-4.375 6.792,-7.042c0.417,-1 0.583,-1.958 0.5,-2.958c-0.25,-3.75 -3.458,-6.625 -7.25,-6.375c-2,0.125 -3.417,1.125 -4.292,1.916c-0.5,0.5 -0.875,0.917 -1.125,1.375l-0.375,0.5c-3.5,3.709 -8.25,5.917 -13.291,6.25c-10.125,0.667 -19.125,-6.416 -21,-16.416l-0,-0.292c-0.167,-0.583 -0.292,-1.125 -0.334,-1.708c-0.041,-0.584 -0.041,-0.167 -0.041,-0.375l-0,-1.459c-0,-0.458 -0.042,-0.916 -0,-1.416l0.125,-0.709c0.083,-0.875 0.291,-1.708 0.416,-2.333l0,-0.125c0,-1.583 -0.5,-3.042 -1.416,-4.25c-2.334,-3.042 -6.709,-3.625 -9.75,-1.292c-0.667,0.5 -1.25,1.209 -1.709,2l0.042,0.125Z",
        }),
        u.jsx("circle", { cx: "12.375", cy: "36.402", r: "3.25" }),
      ],
    }),
  W7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 512 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M320 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 10.8c0 48.1-27.6 91.3-70 111.9c-1.8 .4-3.6 1.1-5.2 2.2c-.2 .1-.4 .3-.6 .4c-3 1.3-6.1 2.4-9.3 3.5C139.1 166.1 96 225.9 96 293.2V368c0 8.8 7.2 16 16 16s16-7.2 16-16l0-74.8c0-21.7 5.6-42.5 15.8-60.6L322.6 504.8c4.9 7.4 14.8 9.4 22.2 4.6s9.4-14.8 4.6-22.2L252.7 340.1l57.5-44.7 67-6.7 74.6 89.5c5.7 6.8 15.7 7.7 22.5 2s7.7-15.7 2-22.5l-74.6-89.5c-6.8-8.2-17.2-12.4-27.8-11.4l-61.9 6.2L244.8 160.5c46-27.9 75.2-78.2 75.2-133.7L320 16zM282.5 276.4l-47.4 36.9L165.4 207.2c-.4-.6-.8-1.1-1.3-1.7c13.4-13.5 30-24.1 48.9-30.4c.8-.3 1.7-.6 2.5-.9l66.9 102.1zM96 88a24 24 0 1 1 48 0A24 24 0 1 1 96 88zm80 0A56 56 0 1 0 64 88a56 56 0 1 0 112 0z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  Z7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsxs("svg", {
      width: e,
      height: e,
      viewBox: "0 0 48 48",
      xmlns: "http://www.w3.org/2000/svg",
      fill: t,
      className: n,
      style: { fillRule: "evenodd", clipRule: "evenodd", strokeMiterlimit: 10 },
      children: [
        u.jsx("g", {
          transform: "matrix(2.58847,0,0,2.58847,0.56342,-12.1607)",
          children: u.jsx("path", {
            d: "M16.11,6.538L1.796,6.538C1.193,6.538 0.705,7.026 0.705,7.629L0.705,15.922C0.705,16.525 1.193,17.013 1.796,17.013L9.389,17.013C10.178,16.613 11.067,16.403 11.991,16.44C12.768,16.47 13.509,16.674 14.175,17.013L16.11,17.013C16.713,17.013 17.201,16.525 17.201,15.922L17.201,7.629C17.201,7.026 16.713,6.538 16.11,6.538ZM11.991,14.939C10.901,14.939 9.937,14.399 9.354,13.571C8.983,13.046 8.765,12.405 8.765,11.713C8.765,9.932 10.209,8.488 11.991,8.488C13.772,8.488 15.216,9.932 15.216,11.713C15.216,12.405 14.998,13.046 14.628,13.571C14.044,14.399 13.081,14.939 11.991,14.939ZM9.389,17.013C9.004,17.209 8.643,17.449 8.314,17.729L8.314,17.013L9.389,17.013Z",
            stroke: t,
            strokeWidth: "0.7",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: { fill: "none", fillRule: "nonzero" },
          }),
        }),
        u.jsx("g", {
          transform: "matrix(2.58847,0,0,2.58847,0.56342,-12.1607)",
          children: u.jsx("path", {
            d: "M15.216,11.713C15.216,12.405 14.998,13.046 14.628,13.571C14.044,14.399 13.081,14.939 11.991,14.939C10.9,14.939 9.937,14.399 9.354,13.571C8.983,13.046 8.765,12.405 8.765,11.713C8.765,9.932 10.209,8.488 11.991,8.488C13.772,8.488 15.216,9.932 15.216,11.713ZM17.201,13.571L14.628,13.571M9.354,13.571L0.232,13.571M17.195,21.935C13.58,21.918 9.966,21.901 6.351,21.884L6.351,21.873C6.36,21.267 6.467,20.685 6.655,20.143C6.986,19.192 7.568,18.361 8.314,17.729C8.643,17.449 9.004,17.208 9.389,17.013C10.178,16.613 11.067,16.403 11.991,16.44C12.768,16.47 13.509,16.674 14.175,17.013C15.948,17.917 17.192,19.785 17.195,21.935Z",
            stroke: t,
            strokeWidth: "0.7",
            style: { fill: "none", fillRule: "nonzero" },
          }),
        }),
      ],
    }),
  K7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 384 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M32 32V480h96V400 368h32 64 32v32 80h96V32H32zM160 480h64V400H160v80zm-32 32H32 0V480 32 0H32 352h32V32 480v32H352 256 224 160 128zM64 96H80h64 16v16 64 16H144 80 64V176 112 96zm32 32v32h32V128H96zM240 96h64 16v16 64 16H304 240 224V176 112 96h16zm16 64h32V128H256v32zM64 224H80h64 16v16 64 16H144 80 64V304 240 224zm32 32v32h32V256H96zm144-32h64 16v16 64 16H304 240 224V304 240 224h16zm16 64h32V256H256v32z",
      }),
    }),
  G7 = ({ size: e = 28, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 640 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M55.2 1.7c-7.9-4-17.5-.7-21.5 7.2s-.7 17.5 7.2 21.5l64 32c7.9 4 17.5 .7 21.5-7.2s.7-17.5-7.2-21.5l-64-32zm544 28.6c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2l-64 32c-7.9 4-11.1 13.6-7.2 21.5s13.6 11.1 21.5 7.2l64-32zM16 160c-8.8 0-16 7.2-16 16s7.2 16 16 16H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H16zm544 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H560zM119.2 318.3c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2l-64 32c-7.9 4-11.1 13.6-7.2 21.5s13.6 11.1 21.5 7.2l64-32zm416-28.6c-7.9-4-17.5-.7-21.5 7.2s-.7 17.5 7.2 21.5l64 32c7.9 4 17.5 .7 21.5-7.2s.7-17.5-7.2-21.5l-64-32zM464 176c0 30.6-9.5 58.8-25.7 82.1c-4.1 5.9-8.7 12.3-13.6 19c-12.7 17.5-27.1 37.2-38 57.1c-8.9 16.2-13.7 33.3-16.2 49.9H403c2.2-12 5.9-23.7 11.8-34.5c9.9-18 22.2-34.9 34.5-51.8l0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C496 78.8 417.2 0 320 0S144 78.8 144 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0 0 0 0 0c12.3 16.8 24.6 33.7 34.5 51.8c5.9 10.8 9.6 22.5 11.8 34.5h32.4c-2.5-16.6-7.3-33.7-16.2-49.9c-10.9-20-25.3-39.7-38-57.1l0 0c-4.9-6.7-9.5-13-13.6-19C185.5 234.8 176 206.6 176 176c0-79.5 64.5-144 144-144s144 64.5 144 144zm-224 0c0-44.2 35.8-80 80-80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-61.9 0-112 50.1-112 112c0 8.8 7.2 16 16 16s16-7.2 16-16zm80 304c-20.9 0-38.7-13.4-45.3-32h90.5c-6.6 18.6-24.4 32-45.3 32zm-80-53.3V432c0 44.2 35.8 80 80 80s80-35.8 80-80v-5.3c0-5.9-4.8-10.7-10.7-10.7H250.7c-5.9 0-10.7 4.8-10.7 10.7z",
      }),
    }),
  q7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 12 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M3.5 4H8.5C8.75 4 9 3.78125 9 3.5C9 3.25 8.75 3 8.5 3H7.71875C7.875 2.71875 8 2.375 8 2C8 0.90625 7.09375 0 6 0C4.875 0 4 0.90625 4 2C4 2.375 4.09375 2.71875 4.25 3H3.5C3.21875 3 3 3.25 3 3.5C3 3.78125 3.21875 4 3.5 4ZM6 1C6.53125 1 7 1.46875 7 2C7 2.5625 6.53125 3 6 3C5.4375 3 5 2.5625 5 2C5 1.46875 5.4375 1 6 1ZM10 2C9.71875 2 9.5 2.25 9.5 2.5C9.5 2.78125 9.71875 3 10 3C10.5312 3 11 3.46875 11 4V14C11 14.5625 10.5312 15 10 15H2C1.4375 15 1 14.5625 1 14V4C1 3.46875 1.4375 3 2 3C2.25 3 2.5 2.78125 2.5 2.5C2.5 2.25 2.25 2 2 2C0.875 2 0 2.90625 0 4V14C0 15.125 0.875 16 2 16H10C11.0938 16 12 15.125 12 14V4C12 2.90625 11.0938 2 10 2Z",
        stroke: t,
        strokeWidth: ".25",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  Y7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 640 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M208 64c8.8 0 16 7.2 16 16V256 432c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V368 144 80c0-8.8 7.2-16 16-16h32zM128 413.3V432c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V272H384V432c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V413.3c5 1.8 10.4 2.7 16 2.7h32c26.5 0 48-21.5 48-48V272h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H608V144c0-26.5-21.5-48-48-48H528c-5.6 0-11 1-16 2.7V80c0-26.5-21.5-48-48-48H432c-26.5 0-48 21.5-48 48V240H256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48V98.7C123 97 117.6 96 112 96H80c-26.5 0-48 21.5-48 48v96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H32v96c0 26.5 21.5 48 48 48h32c5.6 0 11-1 16-2.7zM512 144c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16V256 368c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V144zM480 368v64c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V256 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64V368zM128 144V368c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V256 144c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z",
        stroke: t,
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  Q7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      version: "1.0",
      width: e,
      height: e,
      viewBox: "0 0 67.074666 95.391427",
      preserveAspectRatio: "xMidYMid meet",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsxs("g", {
        transform: "translate(-1.925334,97.000000) scale(0.100000,-0.100000)",
        stroke: t,
        children: [
          u.jsx("path", {
            d: `M431 935 c-58 -66 -129 -229 -157 -359 -19 -84 -37 -525 -23 -542 26
-32 84 -19 99 22 8 19 6 34 -7 62 -15 31 -18 64 -17 207 1 146 4 186 26 280
33 141 82 273 119 325 26 36 27 40 10 40 -10 0 -33 -16 -50 -35z`,
          }),
          u.jsx("path", {
            d: `M139 698 c-39 -43 -85 -139 -104 -219 -21 -92 -21 -351 1 -373 19
-20 28 -20 43 -2 8 10 9 38 1 108 -21 183 27 417 99 482 20 18 20 36 0 36 -6
0 -24 -15 -40 -32z`,
          }),
          u.jsx("path", {
            d: `M631 698 c-43 -46 -89 -145 -106 -225 -15 -67 -20 -307 -9 -350 7
-25 27 -35 50 -26 13 5 14 16 8 67 -25 204 19 458 92 527 13 12 24 26 24 31 0
19 -31 6 -59 -24z`,
          }),
        ],
      }),
    }),
  X7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 20 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M19.5 0C19.2188 0 19 0.25 19 0.5V5H1V0.5C1 0.25 0.75 0 0.5 0C0.21875 0 0 0.25 0 0.5V15.5C0 15.7812 0.21875 16 0.5 16C0.75 16 1 15.7812 1 15.5V14H19V15.5C19 15.7812 19.2188 16 19.5 16C19.75 16 20 15.7812 20 15.5V0.5C20 0.25 19.75 0 19.5 0ZM19 13H1V6H19V13ZM12 4H14C14.5312 4 15 3.5625 15 3V1C15 0.46875 14.5312 0 14 0H12C11.4375 0 11 0.46875 11 1V3C11 3.5625 11.4375 4 12 4ZM12 1H14V3H12V1ZM9 12H11C11.5312 12 12 11.5625 12 11V9C12 8.46875 11.5312 8 11 8H9C8.4375 8 8 8.46875 8 9V11C8 11.5625 8.4375 12 9 12ZM9 9H11V11H9V9ZM4 12H6C6.53125 12 7 11.5625 7 11V9C7 8.46875 6.53125 8 6 8H4C3.4375 8 3 8.46875 3 9V11C3 11.5625 3.4375 12 4 12ZM4 9H6V11H4V9Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  J7 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 384 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M352 480H32V32H192V176v16h16H352V480zM224 37.3L346.7 160H224V37.3zM232 0H32 0V32 480v32H32 352h32V480 152L232 0zM64 64V96H80h64 16V64H144 80 64zm0 64v32H80h64 16V128H144 80 64zM208 234.7H176v16 6.5c-6.3 .9-12.2 2.5-17.7 4.7c-13.6 5.5-26.2 15.9-29.4 32.1c-1.8 9.1-.8 17.9 3.4 25.7c4 7.5 10.2 12.7 16.3 16.4c11 6.6 25.6 10.5 37.4 13.7l2 .5c13.8 3.7 24.1 6.7 30.7 11c3 1.9 4.1 3.5 4.6 4.5c.4 .8 1 2.4 .3 6c-.6 3.1-2.8 6.5-9.8 9.2c-7.3 2.8-18.3 3.9-31.9 2c-6.5-1-17.9-4.4-27.4-7.3l0 0 0 0 0 0 0 0c-2.1-.6-4.2-1.3-6.1-1.8l-15.3-4.5-9.1 30.7 15.3 4.5c1.3 .4 2.9 .9 4.7 1.4l0 0 0 0 0 0 0 0c8.8 2.7 22.6 6.9 31.9 8.4v6.8 16h32v-16-6.2c6.1-.8 11.9-2.2 17.3-4.2c14.2-5.4 26.5-16.1 29.8-33c1.8-9.3 1-18.1-2.9-26.1c-3.8-7.8-9.8-13.3-16-17.3c-11.5-7.4-27-11.6-39.2-14.9l-.5-.1c-13.9-3.7-24.4-6.6-31.2-10.7c-3.1-1.9-4.2-3.3-4.6-4.1c-.2-.4-.8-1.6-.2-4.5c.3-1.8 2.2-5.5 9.9-8.6c7.5-3 18.7-4.5 31.8-2.7c4.4 .6 18.2 3 22.3 4l15.6 3.7 7.4-31.1-15.6-3.7c-5-1.2-17.7-3.4-23.7-4.3v-6.8-16z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  e4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsxs("svg", {
      width: e,
      height: e,
      viewBox: "0 -4 26 20",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u.jsx("g", {
          filter: "url(#filter0_d_40_1437)",
          children: u.jsx("path", {
            d: "M21.4375 1.125C21.125 0.96875 20.7188 0.96875 20.4062 1.1875L17.1875 3.4375C16.9688 3.59375 16.9062 3.90625 17.0625 4.15625C17.2188 4.375 17.5312 4.40625 17.7812 4.25L21 2V10L17.7812 7.75C17.5312 7.59375 17.2188 7.65625 17.0625 7.875C16.9062 8.125 16.9688 8.4375 17.1875 8.59375L20.4062 10.8438C20.5938 10.9688 20.7812 11 21 11C21.1562 11 21.3125 10.9688 21.4375 10.9062C21.7812 10.7188 22 10.375 22 10V2C22 1.625 21.7812 1.3125 21.4375 1.125ZM14 0H6C4.875 0 4 0.90625 4 2V10C4 11.125 4.875 12 6 12H14C15.0938 12 16 11.125 16 10V2C16 0.90625 15.0938 0 14 0ZM15 10C15 10.5625 14.5312 11 14 11H6C5.4375 11 5 10.5625 5 10V2C5 1.46875 5.4375 1 6 1H14C14.5312 1 15 1.46875 15 2V10Z",
            stroke: t,
            strokeWidth: ".5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        }),
        u.jsx("defs", {
          children: u.jsxs("filter", {
            id: "filter0_d_40_1437",
            x: "0",
            y: "0",
            width: "26",
            height: "20",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              u.jsx("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              u.jsx("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
                result: "hardAlpha",
              }),
              u.jsx("feOffset", { dy: "4" }),
              u.jsx("feGaussianBlur", { stdDeviation: "2" }),
              u.jsx("feComposite", { in2: "hardAlpha", operator: "out" }),
              u.jsx("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
              }),
              u.jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix" }),
              u.jsx("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                result: "shape",
              }),
            ],
          }),
        }),
      ],
    }),
  t4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: n,
      viewBox: "0 0 24 24",
      stroke: t,
      children: u.jsx("path", {
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
      }),
    }),
  n4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 512 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z",
      }),
    }),
  r4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 576 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M268.2 126.4C244.8 107.9 221.7 96 200 96c-7.8 0-22.7 3.4-42.7 12.1c-19.2 8.4-40.4 20.4-60.1 34.6C77.4 157 60.3 172.7 48.5 188C36.2 203.8 32 216 32 224c0 15.5 6.2 33.6 17.8 53.5C61.1 297.1 76 315.8 90 332c38 44 94 84 166 84h64c72 0 128-40 166-84c13.6-15.7 28.5-34.7 40-54.6c11.7-20.4 18-38.6 18-53.4c0-8-4.2-20.2-16.5-36c-11.9-15.3-29-31-48.7-45.3c-19.6-14.2-40.8-26.2-60.1-34.6C398.7 99.4 383.8 96 376 96c-21.7 0-44.8 11.9-68.2 30.4c-11.6 9.2-28.1 9.2-39.7 0zM510.2 352.9C468.8 400.9 404.7 448 320 448H256c-84.7 0-148.8-47.1-190.2-95.1C36.9 319.5 0 271 0 224C0 151.5 142.5 64 200 64c32.7 0 63 17.5 88 37.3C313 81.5 343.3 64 376 64c57.5 0 200 87.5 200 160c0 45.8-37.5 96.2-65.8 128.9zm-153.9-136c-11.6 3.6-44 13.1-68.3 13.1s-56.7-9.5-68.3-13.1c-2-.6-3.8-.9-5.4-.9c-38.1 .4-66.1 5.6-84.1 11.1c-4.7 1.4-8.5 2.9-11.7 4.2c.4 .4 .9 .9 1.3 1.3c7.5 7.4 19 16.9 34.3 26.4c30.5 18.8 75.6 37 133.9 37s103.4-18.2 133.9-37c15.3-9.4 26.8-19 34.3-26.4c.5-.5 .9-.9 1.3-1.3c-3.2-1.3-7.1-2.8-11.7-4.2c-18-5.5-46-10.7-84.1-11.1c-1.6 0-3.4 .2-5.4 .9zm5.7-32.9c40.7 .5 71.7 5.9 93.1 12.5c10.6 3.3 19.2 6.9 25.5 10.6c3.1 1.8 6.2 3.9 8.7 6.4c1.7 1.7 6.7 6.8 6.7 14.5c0 3.1-.9 5.5-1.3 6.6c-.5 1.3-1.1 2.5-1.6 3.4c-1 1.8-2.3 3.6-3.6 5.4c-2.7 3.5-6.4 7.7-11 12.2c-9.2 9-22.6 20-39.9 30.7C404 307.6 353.2 328 288 328s-116-20.4-150.7-41.8c-17.3-10.7-30.7-21.7-39.9-30.7c-4.6-4.5-8.3-8.6-11-12.1c-1.3-1.7-2.6-3.6-3.6-5.4c-.5-.9-1.1-2-1.6-3.4c-.4-1.1-1.3-3.5-1.3-6.6c0-7.8 5-12.9 6.7-14.5c2.5-2.5 5.6-4.6 8.7-6.4c6.3-3.7 14.9-7.3 25.5-10.6c21.4-6.6 52.4-12 93.1-12.5c5.4-.1 10.5 .8 15.3 2.3c12 3.8 40 11.7 58.8 11.7s46.7-7.9 58.8-11.7c4.7-1.5 9.9-2.4 15.3-2.3z",
        stroke: t,
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  i4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 16 12",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M0 2C0 0.90625 0.875 0 2 0H14C15.0938 0 16 0.90625 16 2V10C16 11.125 15.0938 12 14 12H2C0.875 12 0 11.125 0 10V2ZM1 2V3.25L7.09375 7.75C7.625 8.125 8.34375 8.125 8.875 7.75L15 3.25V2C15 1.46875 14.5312 1 14 1H1.96875C1.4375 1 0.96875 1.46875 0.96875 2H1ZM1 4.5V10C1 10.5625 1.4375 11 2 11H14C14.5312 11 15 10.5625 15 10V4.5L9.46875 8.5625C8.59375 9.1875 7.375 9.1875 6.5 8.5625L1 4.5Z",
        stroke: t,
        strokeWidth: ".25",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  o4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 18 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M17.4375 10.4375C17.125 10.1562 16.75 10.0312 16.3438 10.0312C15.9375 10.0312 15.5625 10.1562 15.25 10.4062L13.3438 11.9375C13.2812 12 13.1875 12 13.125 12H11.8125C11.9688 11.7188 12.0312 11.375 11.9688 11C11.8438 10.125 11.0312 9.5 10.1562 9.5H5.65625C5 9.5 4.40625 9.71875 3.84375 10.125L2.65625 11H0.5C0.21875 11 0 11.25 0 11.5C0 11.7812 0.21875 12 0.46875 12H2.96875L4.40625 10.875C4.78125 10.625 5.1875 10.5 5.625 10.5H10.2188C10.625 10.5 10.9688 10.8125 10.9688 11.25C10.9688 11.6562 10.625 12 10.2188 12H7.46875C7.1875 12 6.96875 12.2188 6.96875 12.5C6.96875 12.75 7.1875 13 7.46875 13H13.0938C13.375 13 13.6875 12.875 13.9062 12.6875L15.8438 11.1562C15.9688 11.0625 16.1562 11 16.3125 11C16.4688 11 16.625 11.0625 16.7188 11.1562C17.0625 11.4375 17.0312 11.9375 16.7188 12.1875L13.5625 14.6875C13.3125 14.875 13.0312 15 12.7188 15H0.5C0.21875 15 0 15.2188 0 15.5C0 15.75 0.21875 16 0.46875 16H12.7188C13.25 16 13.75 15.8438 14.1875 15.5L17.3438 12.9688C17.7188 12.6875 17.9375 12.2188 17.9375 11.7188C18 11.25 17.7812 10.7812 17.4375 10.4375ZM8.59375 5.96875C8.375 5.9375 8.1875 5.90625 7.40625 5.625C7.125 5.53125 6.84375 5.6875 6.75 5.9375C6.6875 6.1875 6.8125 6.46875 7.0625 6.5625C8 6.875 8.21875 6.9375 8.46875 6.96875V7.5C8.46875 7.78125 8.71875 8 9 8C9.25 8 9.46875 7.78125 9.46875 7.5V7C10.4062 6.875 11.0625 6.375 11.2188 5.625C11.4688 4.15625 10.0625 3.78125 9.125 3.53125L8.875 3.46875C7.8125 3.15625 7.6875 2.96875 7.75 2.59375C7.84375 2.0625 8.625 1.9375 9.34375 2.0625C9.5625 2.09375 9.8125 2.15625 10.1562 2.25C10.4062 2.34375 10.6875 2.1875 10.7812 1.9375C10.875 1.6875 10.7188 1.40625 10.4688 1.3125C10.0625 1.1875 9.75 1.09375 9.5 1.0625V0.5C9.5 0.25 9.25 0 9 0C8.71875 0 8.46875 0.25 8.46875 0.5V1.03125C7.5625 1.15625 6.90625 1.65625 6.75 2.40625C6.5 3.84375 7.9375 4.25 8.625 4.4375L8.84375 4.5C10.0312 4.8125 10.3125 5 10.2188 5.4375C10.125 5.96875 9.34375 6.09375 8.59375 5.96875Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  s4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 640 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M72 64c39.8 0 72 32.2 72 72V264.8c12.1-10.5 28-16.8 45.3-16.8c18.4 0 36 7.3 49 20.3l61.4 61.4c7.7 7.7 14.5 16.2 20.4 25.3c5.8-9.1 12.6-17.5 20.4-25.3l61.4-61.4c13-13 30.6-20.3 49-20.3c17.3 0 33.1 6.3 45.3 16.8V136c0-39.8 32.2-72 72-72s72 32.2 72 72V352.2c0 31.8-12.6 62.3-35.1 84.9L537 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l67.9-67.9c13.5-13.5 21.1-31.8 21.1-50.9V136c0-13.3-10.7-24-24-24s-24 10.7-24 24V281.9c0 25.6-10.2 50.2-28.3 68.4l-15.9 15.9c0 0 0 0 0 0L473 393c0 0 0 0 0 0l-16 16c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l16-16c0 0 0 0 0 0l26.7-26.7c4-4 6.2-9.4 6.2-15c0-11.7-9.5-21.3-21.3-21.3c-5.6 0-11 2.2-15 6.2l-61.4 61.4C354.9 383 344 409.4 344 436.8V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V436.8c0-27.4-10.9-53.8-30.3-73.2l-61.4-61.4c-4-4-9.4-6.2-15-6.2c-11.7 0-21.3 9.5-21.3 21.3c0 5.6 2.2 11 6.2 15L201 359l0 0 16 16c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-16-16 0 0-26.7-26.7 0 0-15.9-15.9C106.2 332.1 96 307.5 96 281.9V136c0-13.3-10.7-24-24-24s-24 10.7-24 24V352.2c0 19.1 7.6 37.4 21.1 50.9L137 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L35.1 437.1C12.6 414.6 0 384.1 0 352.2V136C0 96.2 32.2 64 72 64z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  a4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 448 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm48 288a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm32-45.3V336l1.2 0h93.6c5.8 0 11.5 .3 17.2 1v33.3c-23.1 6.9-40 28.3-40 53.7v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c-8.8 0-16 7.2-16 16s7.2 16 16 16h16c8.8 0 16-7.2 16-16V424c0-25.4-16.9-46.8-40-53.7V344.5c55.6 20 95.5 73 96 135.5H32c.5-68.2 48.2-125.3 112-140.2v30.9c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3zm1.2-66.7C79.3 304 0 383.3 0 481.2c0 17 13.8 30.8 30.8 30.8H417.2c17 0 30.8-13.8 30.8-30.8C448 383.3 368.7 304 270.8 304H177.2z",
        stroke: t,
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  l4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 12 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M10 0H2C0.875 0 0 0.90625 0 2V14C0 15.125 0.875 16 2 16H10C11.0938 16 12 15.125 12 14V2C12 0.90625 11.0938 0 10 0ZM11 14C11 14.5625 10.5312 15 10 15H2C1.4375 15 1 14.5625 1 14V2C1 1.46875 1.4375 1 2 1H10C10.5312 1 11 1.46875 11 2V14ZM6 9C7.09375 9 8 8.125 8 7C8 5.90625 7.09375 5 6 5C4.875 5 4 5.90625 4 7C4 8.125 4.875 9 6 9ZM6 6C6.53125 6 7 6.46875 7 7C7 7.5625 6.53125 8 6 8C5.4375 8 5 7.5625 5 7C5 6.46875 5.4375 6 6 6ZM7 10H5C3.59375 10 2.5 11.125 2.5 12.5C2.5 12.7812 2.71875 13 3 13C3.25 13 3.5 12.7812 3.5 12.5C3.5 11.6875 4.15625 11 5 11H7C7.8125 11 8.5 11.6875 8.5 12.5C8.5 12.7812 8.71875 13 9 13C9.25 13 9.5 12.7812 9.5 12.5C9.5 11.125 8.375 10 7 10ZM4.5 3H7.5C7.75 3 8 2.78125 8 2.5C8 2.25 7.75 2 7.5 2H4.5C4.21875 2 4 2.25 4 2.5C4 2.78125 4.21875 3 4.5 3Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  c4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 20 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M18 4H14V5H18C18.5312 5 19 5.46875 19 6V12C19 12.5625 18.5312 13 18 13H16V14.5625L13.25 13H10C9.4375 13 9 12.5625 9 12V11H8V12C8 13.125 8.875 14 9.96875 14H13L16.375 15.9375C16.4688 16 16.5312 16 16.625 16C16.8125 16 17 15.875 17 15.625V14H18C19.0938 14 20 13.125 20 12.0312V6C20 4.90625 19.0938 4 18 4ZM13 8V2C13 0.90625 12.0938 0 11 0H2C0.875 0 0 0.90625 0 2V8C0 9.125 0.875 10 2 10L3 10.0312V11.625C3 11.875 3.15625 12 3.375 12C3.4375 12 3.5 12 3.59375 11.9375L7 10H11C12.0938 10 13 9.125 13 8ZM6.71875 9L4 10.5625V9H2C1.4375 9 1 8.5625 1 8V2C1 1.46875 1.4375 1 2 1H11C11.5312 1 12 1.46875 12 2V8C12 8.5625 11.5312 9 11 9H6.71875Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  u4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 10 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M8 0H2C0.875 0 0 0.90625 0 2V14C0 15.125 0.875 16 2 16H8C9.09375 16 10 15.125 10 14V2C10 0.90625 9.09375 0 8 0ZM9 14C9 14.5625 8.53125 15 8 15H2C1.4375 15 1 14.5625 1 14V2C1 1.46875 1.4375 1 2 1H8C8.53125 1 9 1.46875 9 2V14ZM6 12.5H4C3.71875 12.5 3.5 12.75 3.5 13C3.5 13.2812 3.71875 13.5 4 13.5H6C6.25 13.5 6.5 13.2812 6.5 13C6.5 12.75 6.25 12.5 6 12.5Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  d4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 512 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 120v23c13.5 1 26.6 4.6 39.6 8.3c1.5 .4 3.1 .9 4.6 1.3c8.5 2.4 13.5 11.2 11.2 19.7s-11.2 13.5-19.7 11.2c-2.4-.7-4.8-1.4-7.2-2.1c-7.5-2.2-15.2-4.4-22.9-5.5c-19.1-2.8-36.6-.4-49.3 5.1c-12.9 5.6-18.6 13.1-19.8 19.5c-1.8 9.8 2.1 16.5 10.2 21.7c10.6 6.8 26.5 11.3 45.8 16.8l.3 .1c17.7 5 38.9 11.1 54.3 21.7c19 13 27.8 33.8 23.6 56.5c-4 21.6-18.9 36-37.8 43.6c-9.9 4-21.1 6.3-33.1 6.9l0 24.2c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-25.9c-8.1-1.3-21.8-5.2-32.4-8.4c-6.9-2.1-13.8-4.3-20.7-6.5c-8.4-2.8-12.9-11.8-10.2-20.2s11.8-12.9 20.2-10.2c6.6 2.2 13.2 4.3 19.9 6.3c11.2 3.4 22.7 6.6 28.1 7.4c19.8 2.9 36.5 1.3 48-3.4c11.2-4.5 16.8-11.3 18.3-19.7c1.9-10.5-1.5-18.4-10.2-24.4c-12-8.2-26.8-12.3-40.9-16.2c-2.3-.6-4.7-1.3-6.9-1.9c-17.1-4.8-37-10.5-51.7-19.9c-8.1-5.2-15.7-12.1-20.5-21.7c-4.9-9.8-6.2-20.8-4-32.8c3.8-20.7 20-35.1 38.6-43.1c7.4-3.2 15.6-5.6 24.3-7.1V120c0-8.8 7.2-16 16-16s16 7.2 16 16z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  f4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsxs("svg", {
      width: e,
      height: e,
      viewBox: "0 0 14 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u.jsx("g", {
          clipPath: "url(#clip0_40_949)",
          children: u.jsx("path", {
            d: "M0.993103 16C0.999777 13.1951 1.02147 10.3919 1.00812 7.58703C0.999777 5.86339 1.58879 4.45844 2.97537 3.38888C3.19229 3.22202 3.33245 2.85494 3.36248 2.5646C3.55103 0.669099 4.2485 0.00500498 6.12565 0.00166783C6.79141 0.00166783 7.45885 -0.00333791 8.12461 0.00166783C9.62299 0.0133479 10.4206 0.654082 10.5524 2.15247C10.6175 2.88831 10.9178 3.32715 11.4534 3.78267C12.5513 4.72041 12.9868 5.98686 12.9885 7.4185C12.9902 10.2784 13.0019 13.1384 13.0085 15.9983H11.6737C11.6787 13.0283 11.697 10.0565 11.682 7.08645C11.677 6.24549 11.4017 5.48795 10.5123 4.73209C10.5123 6.22213 10.5874 7.49359 10.494 8.75169C10.3605 10.5521 8.80706 11.9387 7.0417 11.9637C5.25632 11.9904 3.66283 10.5821 3.50098 8.75169C3.4092 7.70383 3.44925 6.64428 3.42255 5.58974C3.41755 5.36949 3.38084 5.1509 3.35748 4.93232C3.24068 4.91063 3.12221 4.8906 3.00541 4.86891C2.77348 5.60809 2.35967 6.34227 2.34131 7.08645C2.26957 10.0549 2.31962 13.0266 2.3263 15.9983H0.993103V16ZM4.66064 5.32443C4.66064 6.35228 4.61726 7.38179 4.67232 8.4063C4.74073 9.70779 5.77024 10.6706 6.99331 10.6739C8.21805 10.6772 9.29095 9.71613 9.32098 8.41798C9.36937 6.36563 9.31431 4.30994 9.28928 2.25425C9.28093 1.56346 8.89382 1.27146 8.21304 1.28814C7.43549 1.30816 6.65793 1.28647 5.88037 1.29482C4.94597 1.30483 4.71904 1.52842 4.70068 2.49286",
            stroke: t,
            strokeWidth: ".15",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        }),
        u.jsx("defs", {
          children: u.jsx("clipPath", {
            id: "clip0_40_949",
            children: u.jsx("rect", {
              width: "12.0138",
              height: "16",
              fill: "white",
              transform: "translate(0.993103)",
            }),
          }),
        }),
      ],
    }),
  h4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 20 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M18 4H14V5H18C18.5312 5 19 5.46875 19 6V12C19 12.5625 18.5312 13 18 13H16V14.5625L13.25 13H10C9.4375 13 9 12.5625 9 12V11H8V12C8 13.125 8.875 14 9.96875 14H13L16.375 15.9375C16.4688 16 16.5312 16 16.625 16C16.8125 16 17 15.875 17 15.625V14H18C19.0938 14 20 13.125 20 12.0312V6C20 4.90625 19.0938 4 18 4ZM13 8V2C13 0.90625 12.0938 0 11 0H2C0.875 0 0 0.90625 0 2V8C0 9.125 0.875 10 2 10L3 10.0312V11.625C3 11.875 3.15625 12 3.375 12C3.4375 12 3.5 12 3.59375 11.9375L7 10H11C12.0938 10 13 9.125 13 8ZM6.71875 9L4 10.5625V9H2C1.4375 9 1 8.5625 1 8V2C1 1.46875 1.4375 1 2 1H11C11.5312 1 12 1.46875 12 2V8C12 8.5625 11.5312 9 11 9H6.71875Z",
      }),
    }),
  p4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsxs("svg", {
      width: e,
      height: e,
      viewBox: "0 0 448 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        " ",
        u.jsx("path", {
          d: "M228.6 96H224V91.4C224 58.6 250.6 32 283.4 32H288v4.6C288 69.4 261.4 96 228.6 96zm-18.3 32h18.3c50.5 0 91.4-40.9 91.4-91.4V18.3C320 8.2 311.8 0 301.7 0H283.4C232.9 0 192 40.9 192 91.4v18.3c0 10.1 8.2 18.3 18.3 18.3zM32 288c0-33.8 8-67.7 22.8-92c14.2-23.5 33-36 57.2-36c21 0 48.7 8.4 71.1 17.1c26.2 10.2 55.6 10.2 81.9 0C287.3 168.4 315 160 336 160c24.3 0 43 12.5 57.2 36C408 220.3 416 254.2 416 288c0 57.5-18 106.6-43.6 140.8C346.4 463.5 315 480 288 480c-13.2 0-32-2.7-45.3-5c-12.3-2.2-25-2.2-37.3 0c-13.3 2.3-32.1 5-45.3 5c-27 0-58.4-16.5-84.4-51.2C50 394.6 32 345.5 32 288zM160 512c16.2 0 37.4-3.2 50.8-5.5c8.7-1.5 17.6-1.5 26.3 0c13.5 2.4 34.6 5.5 50.8 5.5c80 0 160-96 160-224c0-76.3-35.7-160-112-160c-27.3 0-59.7 10.3-82.7 19.3c-18.8 7.3-39.9 7.3-58.7 0C171.7 138.3 139.3 128 112 128C35.7 128 0 211.7 0 288C0 416 80 512 160 512z",
          stroke: t,
          strokeWidth: ".5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  m4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 448 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M112 0c8.8 0 16 7.2 16 16V64H320V16c0-8.8 7.2-16 16-16s16 7.2 16 16V64h32c35.3 0 64 28.7 64 64v32 32V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 160 128C0 92.7 28.7 64 64 64H96V16c0-8.8 7.2-16 16-16zM416 192H32V448c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V192zM384 96H64c-17.7 0-32 14.3-32 32v32H416V128c0-17.7-14.3-32-32-32zM320 336c0 8.8-7.2 16-16 16H240v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V352H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V256c0-8.8 7.2-16 16-16s16 7.2 16 16v64h64c8.8 0 16 7.2 16 16z",
      }),
    }),
  g4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 20 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M14.4688 6.46875C14.3125 6.375 14.1875 6.25 14.0625 6.09375C13.9375 6.25 13.8125 6.375 13.6562 6.46875C13.1875 6.8125 12.625 7 12.0312 7C11.4062 7 10.8438 6.8125 10.4062 6.46875C10.25 6.375 10.0938 6.25 9.96875 6.09375C9.84375 6.25 9.71875 6.375 9.5625 6.46875C9.125 6.8125 8.5625 7 7.9375 7C7.34375 7 6.78125 6.8125 6.3125 6.46875C6.15625 6.375 6.03125 6.25 5.90625 6.09375C5.78125 6.25 5.65625 6.375 5.5 6.46875C5.03125 6.8125 4.46875 7 3.875 7C3.75 7 3.625 7 3.5 7C1.75 6.75 0.9375 4.71875 1.875 3.25L3.65625 0.4375C3.8125 0.15625 4.09375 0 4.40625 0H15.5625C15.875 0 16.1562 0.15625 16.3125 0.4375L18.0938 3.25C19.0312 4.71875 18.2188 6.75 16.4688 7C16.3438 7 16.2188 7 16.0938 7C15.4688 7 14.9062 6.8125 14.4688 6.46875ZM15.5 1H4.46875L2.71875 3.78125C2.125 4.71875 2.71875 5.875 3.625 6C3.71875 6 3.78125 6 3.875 6C4.375 6 4.84375 5.78125 5.15625 5.4375C5.34375 5.21875 5.625 5.09375 5.90625 5.09375C6.1875 5.09375 6.46875 5.21875 6.65625 5.4375C6.96875 5.78125 7.4375 6 7.9375 6C8.46875 6 8.90625 5.78125 9.25 5.4375C9.4375 5.21875 9.6875 5.09375 9.96875 5.09375C10.25 5.09375 10.5312 5.21875 10.7188 5.4375C11.0312 5.78125 11.5 6 12.0312 6C12.5312 6 13 5.78125 13.3125 5.4375C13.5 5.21875 13.7812 5.09375 14.0625 5.09375C14.3438 5.09375 14.5938 5.21875 14.7812 5.4375C15.125 5.78125 15.5625 6 16.0938 6C16.1875 6 16.25 6 16.3438 6C17.25 5.875 17.8438 4.71875 17.25 3.78125L15.5 1ZM4 8.5V11H16V8.5C16 8.25 16.2188 8 16.5 8C16.75 8 17 8.25 17 8.5V14C17 15.125 16.0938 16 15 16H5C3.875 16 3 15.125 3 14V8.5C3 8.25 3.21875 8 3.5 8C3.75 8 4 8.25 4 8.5ZM4 14C4 14.5625 4.4375 15 5 15H15C15.5312 15 16 14.5625 16 14V12H4V14Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  v4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 18 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M16 0H2C0.875 0 0 0.90625 0 2V11C0 12.125 0.875 13 2 13H6.65625L6.0625 15H4.5C4.21875 15 4 15.25 4 15.5C4 15.7812 4.21875 16 4.5 16H13.5C13.75 16 14 15.7812 14 15.5C14 15.25 13.75 15 13.5 15H11.9062L11.3125 13H16C17.0938 13 18 12.125 18 11V2C18 0.90625 17.0938 0 16 0ZM7.09375 15L7.71875 13H10.25L10.875 15H7.09375ZM17 11C17 11.5625 16.5312 12 16 12H2C1.4375 12 1 11.5625 1 11V9H17V11ZM17 8H1V2C1 1.46875 1.4375 1 2 1H16C16.5312 1 17 1.46875 17 2V8Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  y4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 16 14",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M7.5 3C8.3125 3 9 3.6875 9 4.5V6.5C9 7.34375 8.3125 8 7.5 8H4.5C3.65625 8 3 7.34375 3 6.5V4.5C3 3.6875 3.65625 3 4.5 3H7.5ZM4 6.5C4 6.78125 4.21875 7 4.5 7H7.5C7.75 7 8 6.78125 8 6.5V4.5C8 4.25 7.75 4 7.5 4H4.5C4.21875 4 4 4.25 4 4.5V6.5ZM10 6.5C10 6.25 10.2188 6 10.5 6H11.5C12.3125 6 13 6.6875 13 7.5V9.5C13 10.3438 12.3125 11 11.5 11H8.5C7.65625 11 7 10.3438 7 9.5C7 9.25 7.21875 9 7.5 9C7.75 9 8 9.25 8 9.5C8 9.78125 8.21875 10 8.5 10H11.5C11.75 10 12 9.78125 12 9.5V7.5C12 7.25 11.75 7 11.5 7H10.5C10.2188 7 10 6.78125 10 6.5ZM1 2.9375C0.40625 2.71875 0 2.15625 0 1.5C0 0.6875 0.65625 0 1.5 0C2.125 0 2.6875 0.4375 2.90625 1H13.0625C13.2812 0.4375 13.8438 0 14.5 0C15.3125 0 16 0.6875 16 1.5C16 2.15625 15.5625 2.71875 15 2.9375V11.0938C15.5625 11.3125 16 11.875 16 12.5C16 13.3438 15.3125 14 14.5 14C13.8438 14 13.2812 13.5938 13.0625 13H2.90625C2.6875 13.5938 2.125 14 1.5 14C0.65625 14 0 13.3438 0 12.5C0 11.875 0.40625 11.3125 1 11.0938V2.9375ZM2 2.9375V11.0938C2.40625 11.25 2.75 11.5938 2.90625 12H13.0625C13.2188 11.5938 13.5625 11.25 14 11.0938V2.9375C13.5625 2.78125 13.2188 2.4375 13.0625 2H2.90625C2.75 2.4375 2.40625 2.78125 2 2.9375ZM14 12.5C14 12.7812 14.2188 13 14.5 13C14.75 13 15 12.7812 15 12.5C15 12.25 14.75 12 14.5 12C14.2188 12 14 12.25 14 12.5ZM2 12.5C2 12.25 1.75 12 1.5 12C1.21875 12 1 12.25 1 12.5C1 12.7812 1.21875 13 1.5 13C1.75 13 2 12.7812 2 12.5ZM14 1.5C14 1.78125 14.2188 2 14.5 2C14.75 2 15 1.78125 15 1.5C15 1.25 14.75 1 14.5 1C14.2188 1 14 1.25 14 1.5ZM2 1.5C2 1.25 1.75 1 1.5 1C1.21875 1 1 1.25 1 1.5C1 1.78125 1.21875 2 1.5 2C1.75 2 2 1.78125 2 1.5Z",
        stroke: t,
        strokeWidth: ".25",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  x4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 22 14",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M8.22913 5C7.10413 5 6.19788 5.90625 6.19788 7C6.19788 8.125 7.10413 9.03125 8.22913 9.03125C9.32288 9 10.2291 8.125 10.2291 7C10.2291 5.90625 9.32288 5 8.22913 5ZM8.22913 8C7.66663 8 7.19788 7.5625 7.19788 7C7.19788 6.46875 7.66663 6.03125 8.22913 6.03125C8.76038 6.03125 9.22913 6.46875 9.22913 7C9.22913 7.5625 8.76038 8 8.22913 8ZM16.1666 5.4375L15.2916 5.9375C15.1979 6 15.1041 5.96875 15.0104 5.90625L14.1979 5.28125C14.1354 5.21875 14.1041 5.09375 14.1354 5L14.4479 4.09375C14.5104 3.875 14.4479 3.65625 14.2916 3.53125C12.1666 1.84375 10.9166 0.53125 8.19788 0.53125C7.16663 0.53125 6.13538 0.75 5.19788 1.25C4.82288 0.78125 4.26038 0.5 3.66663 0.5C2.57288 0.5 1.66663 1.40625 1.66663 2.53125C1.66663 3.125 1.91663 3.6875 2.38538 4.0625C1.10413 6.5 1.51038 9.5625 3.57288 11.625C4.85413 12.875 6.54163 13.5 8.22913 13.5C9.88538 13.5 11.5729 12.875 12.8541 11.625C13.1666 11.3125 13.4479 10.9688 13.6979 10.625L18.4166 13.2812C18.6666 13.4062 18.9166 13.375 19.0729 13.1562L21.5416 9.90625C21.7291 9.6875 21.6666 9.375 21.4791 9.21875L16.7291 5.46875C16.5729 5.34375 16.3541 5.3125 16.1666 5.4375ZM2.66663 2.5C2.66663 1.96875 3.10413 1.5 3.66663 1.5C3.91663 1.5 4.16663 1.59375 4.35413 1.78125C4.07288 1.96875 3.82288 2.1875 3.57288 2.40625C3.32288 2.65625 3.13538 2.90625 2.91663 3.1875C2.76038 3 2.66663 2.78125 2.66663 2.5ZM18.6666 12.0312C18.6041 12.125 18.4479 12.1562 18.3541 12.0938L13.3541 9.28125C12.9479 9.90625 11.5729 12.5 8.22913 12.5312C3.29163 12.5312 0.791626 6.59375 4.29163 3.125C6.85413 0.59375 10.0104 1.65625 11.1666 2.375C11.4791 2.5625 13.3854 4.09375 13.3854 4.09375L13.0104 5.1875C12.9479 5.375 13.0104 5.59375 13.1666 5.71875L14.7916 7.03125C14.9479 7.15625 15.1666 7.15625 15.3541 7.0625L16.3854 6.46875L20.2604 9.53125C20.3541 9.625 20.3854 9.78125 20.2916 9.875L18.6666 12.0312Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  w4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 576 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M322.9 349.5c8.2 6 13.1 15.6 13.1 25.8V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V261.9l-.1 0L307.6 208c-.3 0-.7 0-1 0H160 136 96V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V375.3c0-10.2 4.9-19.8 13.1-25.8s18.9-7.8 28.6-4.6c14.5 4.6 30.1 7.2 46.3 7.2s31.7-2.5 46.3-7.2c9.7-3.1 20.4-1.4 28.6 4.6zm82.9-130.7c2.6-15.4 15.9-26.7 31.6-26.7H480c35.3 0 64-28.7 64-64V112c0-8.8-7.2-16-16-16H496c-8.5 0-16.6-3.4-22.6-9.4L455.4 68.7c-3-3-7.1-4.7-11.3-4.7H400c-10.1 0-19.6-4.7-25.6-12.8L362.5 35.4 338.2 181.3c-.4 2.3-1 4.4-1.8 6.5l67.9 39.6 1.4-8.6zM45.6 159.3C54.5 169.7 67.6 176 82 176H96h40 24H306.7L331.9 24.8C334.2 10.5 346.6 0 361.2 0c9.3 0 18.1 4.4 23.8 11.9L400 32h44.1c12.7 0 24.9 5.1 33.9 14.1L496 64h32c26.5 0 48 21.5 48 48v16c0 53-43 96-96 96H437.3L432 256V456c0 30.9-25.1 56-56 56H360c-30.9 0-56-25.1-56-56V408.7 375.3c-10.3 3.3-21 5.7-32 7.1c-7.9 1-15.9 1.6-24 1.6s-16.1-.5-24-1.6c-11-1.4-21.7-3.8-32-7.1v33.3V456c0 30.9-25.1 56-56 56H120c-30.9 0-56-25.1-56-56V208c0-.7 0-1.4 .1-2c-.7-.2-1.4-.3-2.1-.5c-27.9-7.2-50.3-29.1-57.6-58.1L.5 131.9c-2.1-8.6 3.1-17.3 11.6-19.4s17.3 3.1 19.4 11.6l3.9 15.5c.3 1.4 .8 2.7 1.2 4.1c2 5.8 5.1 11.1 9 15.6zM432 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32z",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  C4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 448 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M112 0c8.8 0 16 7.2 16 16V64H320V16c0-8.8 7.2-16 16-16s16 7.2 16 16V64h32c35.3 0 64 28.7 64 64v32 32V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 160 128C0 92.7 28.7 64 64 64H96V16c0-8.8 7.2-16 16-16zM416 192H32V448c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V192zM384 96H64c-17.7 0-32 14.3-32 32v32H416V128c0-17.7-14.3-32-32-32zM320 336c0 8.8-7.2 16-16 16H240v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V352H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V256c0-8.8 7.2-16 16-16s16 7.2 16 16v64h64c8.8 0 16 7.2 16 16z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  k4 = ({ size: e = 28, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 512 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 120v23c13.5 1 26.6 4.6 39.6 8.3c1.5 .4 3.1 .9 4.6 1.3c8.5 2.4 13.5 11.2 11.2 19.7s-11.2 13.5-19.7 11.2c-2.4-.7-4.8-1.4-7.2-2.1c-7.5-2.2-15.2-4.4-22.9-5.5c-19.1-2.8-36.6-.4-49.3 5.1c-12.9 5.6-18.6 13.1-19.8 19.5c-1.8 9.8 2.1 16.5 10.2 21.7c10.6 6.8 26.5 11.3 45.8 16.8l.3 .1c17.7 5 38.9 11.1 54.3 21.7c19 13 27.8 33.8 23.6 56.5c-4 21.6-18.9 36-37.8 43.6c-9.9 4-21.1 6.3-33.1 6.9l0 24.2c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-25.9c-8.1-1.3-21.8-5.2-32.4-8.4c-6.9-2.1-13.8-4.3-20.7-6.5c-8.4-2.8-12.9-11.8-10.2-20.2s11.8-12.9 20.2-10.2c6.6 2.2 13.2 4.3 19.9 6.3c11.2 3.4 22.7 6.6 28.1 7.4c19.8 2.9 36.5 1.3 48-3.4c11.2-4.5 16.8-11.3 18.3-19.7c1.9-10.5-1.5-18.4-10.2-24.4c-12-8.2-26.8-12.3-40.9-16.2c-2.3-.6-4.7-1.3-6.9-1.9c-17.1-4.8-37-10.5-51.7-19.9c-8.1-5.2-15.7-12.1-20.5-21.7c-4.9-9.8-6.2-20.8-4-32.8c3.8-20.7 20-35.1 38.6-43.1c7.4-3.2 15.6-5.6 24.3-7.1V120c0-8.8 7.2-16 16-16s16 7.2 16 16z",
      }),
    }),
  E4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 448 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm48 288a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm32-45.3V336l1.2 0h93.6c5.8 0 11.5 .3 17.2 1v33.3c-23.1 6.9-40 28.3-40 53.7v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c-8.8 0-16 7.2-16 16s7.2 16 16 16h16c8.8 0 16-7.2 16-16V424c0-25.4-16.9-46.8-40-53.7V344.5c55.6 20 95.5 73 96 135.5H32c.5-68.2 48.2-125.3 112-140.2v30.9c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3zm1.2-66.7C79.3 304 0 383.3 0 481.2c0 17 13.8 30.8 30.8 30.8H417.2c17 0 30.8-13.8 30.8-30.8C448 383.3 368.7 304 270.8 304H177.2z",
        stroke: t,
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  S4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 512 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M32 132V48c0-8.8-7.2-16-16-16S0 39.2 0 48V176c0 8.8 7.2 16 16 16H144c8.8 0 16-7.2 16-16s-7.2-16-16-16H53.6C89.5 84.3 166.7 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-73.3 0-138.3-35.2-179.2-89.6c-5.3-7.1-15.3-8.5-22.4-3.2s-8.5 15.3-3.2 22.4C97.9 471.8 172.2 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C159.6 0 75.7 53.3 32 132zm224-4c-8.8 0-16 7.2-16 16V256c0 4.2 1.7 8.3 4.7 11.3l80 80c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L272 249.4V144c0-8.8-7.2-16-16-16z",
        stroke: t,
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  T4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 20 16",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M9.96875 10C11.7812 10 13.2188 8.5625 13.2188 6.75C13.2188 4.96875 11.75 3.5 9.96875 3.5C8.1875 3.5 6.75 4.96875 6.75 6.75C6.71875 8.5625 8.1875 10 9.96875 10ZM9.96875 4.5C11.2188 4.5 12.2188 5.53125 12.2188 6.75C12.2188 8 11.2188 9 9.96875 9C8.75 9 7.71875 8 7.71875 6.75C7.71875 5.53125 8.75 4.5 9.96875 4.5ZM11.5312 11H8.4375C5.96875 11 4 12.875 4 15.1875C4 15.6562 4.375 16 4.875 16H15.0938C15.5938 16 16 15.6562 16 15.1875C16 12.875 14 11 11.5312 11ZM5 15C5.09375 13.3438 6.59375 12 8.40625 12H11.5312C13.375 12 14.875 13.3438 14.9688 15H5ZM16 5C17.375 5 18.5 3.90625 18.5 2.5C18.5 1.125 17.375 0 16 0C14.5938 0 13.5 1.125 13.5 2.5C13.5 3.90625 14.5938 5 16 5ZM16 1C16.8125 1 17.5 1.6875 17.5 2.5C17.5 3.34375 16.8125 4 16 4C15.1562 4 14.5 3.34375 14.5 2.5C14.5 1.6875 15.1562 1 16 1ZM4 5C5.375 5 6.5 3.90625 6.5 2.5C6.5 1.125 5.375 0 4 0C2.59375 0 1.5 1.125 1.5 2.5C1.5 3.90625 2.59375 5 4 5ZM4 1C4.8125 1 5.5 1.6875 5.5 2.5C5.5 3.34375 4.8125 4 4 4C3.15625 4 2.5 3.34375 2.5 2.5C2.5 1.6875 3.15625 1 4 1ZM17.5312 6H15.5C15.125 6 14.7812 6.09375 14.4688 6.25C14.2188 6.375 14.125 6.65625 14.2188 6.90625C14.3438 7.15625 14.6562 7.28125 14.9062 7.15625C15.0938 7.0625 15.2812 7 15.5 7H17.5312C18.3125 7 19 7.71875 19 8.59375V9C19 9.28125 19.2188 9.5 19.5 9.5C19.75 9.5 20 9.28125 20 9V8.59375C20 7.1875 18.875 6 17.5312 6ZM5.0625 7.15625C5.3125 7.28125 5.625 7.15625 5.75 6.90625C5.84375 6.65625 5.75 6.375 5.5 6.25C5.1875 6.09375 4.84375 6 4.5 6H2.4375C1.09375 6 0 7.1875 0 8.59375V9C0 9.28125 0.21875 9.5 0.5 9.5C0.75 9.5 1 9.28125 1 9V8.59375C1 7.71875 1.65625 7 2.4375 7H4.5C4.6875 7 4.875 7.0625 5.0625 7.15625Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  up = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      fill: "none",
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m8.25 4.5 7.5 7.5-7.5 7.5",
        strokeWidth: "1.5",
        stroke: t,
      }),
    }),
  N4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 512 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M508.2 442.4c5.7-6.7 4.9-16.8-1.8-22.6l-152-129.3c-6.7-5.7-16.8-4.9-22.6 1.8s-4.9 16.8 1.8 22.6l152 129.3c6.7 5.7 16.8 4.9 22.6-1.8zM287 235.1l-78.5-66.1c9.9-16.7 15.5-36.2 15.5-56.9C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c29.5 0 56.4-11.4 76.4-30.1L262.2 256l-73.8 62.1c-20-18.7-46.9-30.1-76.4-30.1C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-20.8-5.7-40.3-15.5-56.9L506.3 92.2c6.8-5.7 7.6-15.8 1.9-22.5s-15.8-7.6-22.5-1.9L287 235.1zM112 192a80 80 0 1 1 0-160 80 80 0 1 1 0 160zm0 128a80 80 0 1 1 0 160 80 80 0 1 1 0-160z",
        stroke: t,
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  L4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 19 15",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M18.0833 5C17.3646 5 15.2083 5.15625 13.1146 6.34375C12.5208 3.78125 11.2396 1.53125 9.58331 0.125C9.52081 0.03125 9.42706 0 9.33331 0C9.20831 0 9.11456 0.03125 9.05206 0.125C7.42706 1.53125 6.11456 3.78125 5.52081 6.34375C3.42706 5.15625 1.27081 5.03125 0.552063 5C0.427063 5 0.333313 5.125 0.333313 5.25C0.333313 6.09375 0.552063 9.21875 3.08331 11.5C4.92706 13.25 7.17706 13.8438 8.61456 14C8.61456 14.0312 10.0208 14.0312 10.0208 14C11.4583 13.8438 13.7396 13.25 15.5521 11.5C18.0833 9.1875 18.3021 6.125 18.3333 5.25C18.3333 5.125 18.2083 5 18.0833 5ZM3.77081 10.75C2.02081 9.1875 1.52081 7.25 1.36456 6.0625C2.64581 6.1875 4.83331 6.65625 6.58331 8.34375C7.36456 9.0625 7.95831 9.90625 8.39581 10.9688C8.64581 11.5938 8.83331 12.25 8.83331 13.0312C7.48956 12.9688 5.23956 12.1875 3.77081 10.75ZM7.23956 7.59375C6.98956 7.34375 6.70831 7.125 6.42706 6.90625C6.89581 4.6875 7.92706 2.59375 9.33331 1.21875C10.7083 2.59375 11.7396 4.6875 12.2083 6.9375C11.9271 7.125 11.6458 7.34375 11.3958 7.625C10.3646 8.53125 9.73956 9.59375 9.33331 10.5625C8.92706 9.59375 8.27081 8.53125 7.23956 7.59375ZM14.8333 10.7812C13.4583 12.125 11.2083 12.9688 9.83331 13.0312C9.83331 12.25 9.98956 11.5938 10.2396 10.9688C10.6771 9.90625 11.2708 9.0625 12.0833 8.3125C13.8021 6.65625 15.9896 6.1875 17.2708 6.0625C17.1146 7.25 16.5833 9.21875 14.8333 10.7812Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  b4 = ({ size: e = 28, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 640 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M55.2 1.7c-7.9-4-17.5-.7-21.5 7.2s-.7 17.5 7.2 21.5l64 32c7.9 4 17.5 .7 21.5-7.2s.7-17.5-7.2-21.5l-64-32zm544 28.6c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2l-64 32c-7.9 4-11.1 13.6-7.2 21.5s13.6 11.1 21.5 7.2l64-32zM16 160c-8.8 0-16 7.2-16 16s7.2 16 16 16H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H16zm544 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H560zM119.2 318.3c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2l-64 32c-7.9 4-11.1 13.6-7.2 21.5s13.6 11.1 21.5 7.2l64-32zm416-28.6c-7.9-4-17.5-.7-21.5 7.2s-.7 17.5 7.2 21.5l64 32c7.9 4 17.5 .7 21.5-7.2s.7-17.5-7.2-21.5l-64-32zM464 176c0 30.6-9.5 58.8-25.7 82.1c-4.1 5.9-8.7 12.3-13.6 19c-12.7 17.5-27.1 37.2-38 57.1c-8.9 16.2-13.7 33.3-16.2 49.9H403c2.2-12 5.9-23.7 11.8-34.5c9.9-18 22.2-34.9 34.5-51.8l0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C496 78.8 417.2 0 320 0S144 78.8 144 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0 0 0 0 0c12.3 16.8 24.6 33.7 34.5 51.8c5.9 10.8 9.6 22.5 11.8 34.5h32.4c-2.5-16.6-7.3-33.7-16.2-49.9c-10.9-20-25.3-39.7-38-57.1l0 0c-4.9-6.7-9.5-13-13.6-19C185.5 234.8 176 206.6 176 176c0-79.5 64.5-144 144-144s144 64.5 144 144zm-224 0c0-44.2 35.8-80 80-80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-61.9 0-112 50.1-112 112c0 8.8 7.2 16 16 16s16-7.2 16-16zm80 304c-20.9 0-38.7-13.4-45.3-32h90.5c-6.6 18.6-24.4 32-45.3 32zm-80-53.3V432c0 44.2 35.8 80 80 80s80-35.8 80-80v-5.3c0-5.9-4.8-10.7-10.7-10.7H250.7c-5.9 0-10.7 4.8-10.7 10.7z",
      }),
    }),
  P4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 576 512",
      children: u.jsx("path", {
        d: "M156 32c44.6 0 89.7 8.6 132 22.6C330.3 40.6 375.4 32 420 32c55.4 0 107.2 14.6 128.9 21.6C565.7 59 576 74.5 576 91.1V402.5c0 26.9-25.1 44.8-49 40.6c-18.5-3.2-51.3-7.2-99-7.2c-58.9 0-97.8 24.3-111.2 34.1c-7.5 5.5-17.2 9.6-28.2 9.9c-.2 0-.5 0-.7 0c-.1 0-.1 0-.2 0c-.1 0-.2 0-.3 0c-10.2 0-19.6-3.4-27-8.4C245.5 461.5 202 436 148 436c-45.2 0-80.1 4.4-100 7.7c-24 4-48-14.1-48-40.2V91.1C0 74.5 10.3 59 27.1 53.6C48.8 46.6 100.6 32 156 32zM304 440c20.3-13.5 63.1-36 124-36c49.5 0 84.1 4.2 104.4 7.6c2.5 .4 5.7-.3 8.2-2.3c2.2-1.8 3.4-4 3.4-6.8V91.1c0-3.5-2.1-6.1-4.9-7C518.6 77.5 470.5 64 420 64c-38.6 0-78.1 7.1-116 19V440zM272 83c-37.9-12-77.4-19-116-19C105.5 64 57.4 77.5 36.9 84c-2.8 .9-4.9 3.6-4.9 7V403.5c0 2.7 1.1 4.9 3.1 6.5c2.2 1.8 5.1 2.5 7.6 2.1c21.3-3.6 58-8.2 105.3-8.2c56.8 0 102.8 23.7 124 36.9V83z",
      }),
    }),
  M4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 512 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M371.1 13.1c-1-5.3-4.6-9.8-9.6-11.9s-10.7-1.5-15.2 1.6L256 65.1 165.7 2.8c-4.5-3.1-10.2-3.7-15.2-1.6s-8.6 6.6-9.6 11.9L121 121 13.1 140.8c-5.3 1-9.8 4.6-11.9 9.6s-1.5 10.7 1.6 15.2L65.1 256 2.8 346.3c-3.1 4.5-3.7 10.2-1.6 15.2s6.6 8.6 11.9 9.6L121 391l19.8 107.9c1 5.3 4.6 9.8 9.6 11.9s10.7 1.5 15.2-1.6L256 446.9l90.3 62.3c4.5 3.1 10.2 3.7 15.2 1.6s8.6-6.6 9.6-11.9L391 391l107.9-19.8c5.3-1 9.8-4.6 11.9-9.6s1.5-10.7-1.6-15.2L446.9 256l62.3-90.3c3.1-4.5 3.7-10.2 1.6-15.2s-6.6-8.6-11.9-9.6L391 121 371.1 13.1zM265.1 97.7l79.1-54.5 17.4 94.5c1.2 6.5 6.3 11.6 12.8 12.8l94.5 17.4-54.5 79.1c-3.8 5.5-3.8 12.7 0 18.2l54.5 79.1-94.5 17.4c-6.5 1.2-11.6 6.3-12.8 12.8l-17.4 94.5-79.1-54.5c-5.5-3.8-12.7-3.8-18.2 0l-79.1 54.5-17.4-94.5c-1.2-6.5-6.3-11.6-12.8-12.8L43.2 344.1l54.5-79.1c3.8-5.5 3.8-12.7 0-18.2L43.2 167.8l94.5-17.4c6.5-1.2 11.6-6.3 12.8-12.8l17.4-94.5 79.1 54.5c5.5 3.8 12.7 3.8 18.2 0zM256 384a128 128 0 1 0 0-256 128 128 0 1 0 0 256zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  j4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 448 512",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M306.8 6.3C311.4 2.2 317.3 0 323.4 0c17.2 0 29.2 17.1 23.4 33.3L278.7 224H389c14.9 0 27 12.1 27 27c0 7.8-3.3 15.1-9.1 20.3L141.1 505.8c-4.5 4-10.4 6.2-16.5 6.2c-17.2 0-29.2-17.1-23.5-33.3L169.3 288H57.8C43.6 288 32 276.4 32 262.2c0-7.4 3.2-14.4 8.7-19.3L306.8 6.3zm.5 42.4L74.1 256H192c5.2 0 10.1 2.5 13.1 6.8s3.7 9.7 2 14.6L140.6 463.6 375.8 256H256c-5.2 0-10.1-2.5-13.1-6.8s-3.7-9.7-2-14.6l66.4-186z",
        stroke: t,
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  R4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 20 18",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M17.125 1.15625C17.3125 0.96875 17.6562 0.96875 17.8438 1.15625L19.8438 3.15625C19.9375 3.25 20 3.375 20 3.5C20 3.65625 19.9375 3.78125 19.8438 3.875L17.8438 5.875C17.6562 6.0625 17.3125 6.0625 17.125 5.875C16.9375 5.6875 16.9375 5.34375 17.125 5.15625L18.2812 4H5C5 5.65625 3.65625 7 2 7V10.9062L1 11.9062V5C1 3.90625 1.875 3 3 3H11.9688H12H18.2812L17.125 1.875C16.9375 1.6875 16.9375 1.34375 17.125 1.15625ZM4 4H3C2.4375 4 2 4.46875 2 5V6C3.09375 6 4 5.125 4 4ZM2.84375 16.1562C3.03125 16.3438 3.03125 16.6875 2.84375 16.875C2.65625 17.0625 2.3125 17.0625 2.125 16.875L0.125 14.875C0.03125 14.7812 0 14.6562 0 14.5C0 14.375 0.03125 14.25 0.125 14.1562L2.125 12.1562C2.3125 11.9688 2.65625 11.9688 2.84375 12.1562C3.03125 12.3438 3.03125 12.6875 2.84375 12.875L1.6875 14H8H15C15 12.3438 16.3125 11 18 11V7.125L19 6.125V13C19 14.125 18.0938 15 17 15H1.6875L2.84375 16.1562ZM16 14H17C17.5312 14 18 13.5625 18 13V12C16.875 12 16 12.9062 16 14ZM13 9C13 10.6562 11.6562 12 10 12C8.3125 12 7 10.6562 7 9C7 7.34375 8.3125 6 10 6C11.6562 6 13 7.34375 13 9ZM10 7C8.875 7 8 7.90625 8 9C8 10.125 8.875 11 10 11C11.0938 11 12 10.125 12 9C12 7.90625 11.0938 7 10 7Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  A4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 20 18",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M17.125 1.15625C17.3125 0.96875 17.6562 0.96875 17.8438 1.15625L19.8438 3.15625C19.9375 3.25 20 3.375 20 3.5C20 3.65625 19.9375 3.78125 19.8438 3.875L17.8438 5.875C17.6562 6.0625 17.3125 6.0625 17.125 5.875C16.9375 5.6875 16.9375 5.34375 17.125 5.15625L18.2812 4H5C5 5.65625 3.65625 7 2 7V10.9062L1 11.9062V5C1 3.90625 1.875 3 3 3H11.9688H12H18.2812L17.125 1.875C16.9375 1.6875 16.9375 1.34375 17.125 1.15625ZM4 4H3C2.4375 4 2 4.46875 2 5V6C3.09375 6 4 5.125 4 4ZM2.84375 16.1562C3.03125 16.3438 3.03125 16.6875 2.84375 16.875C2.65625 17.0625 2.3125 17.0625 2.125 16.875L0.125 14.875C0.03125 14.7812 0 14.6562 0 14.5C0 14.375 0.03125 14.25 0.125 14.1562L2.125 12.1562C2.3125 11.9688 2.65625 11.9688 2.84375 12.1562C3.03125 12.3438 3.03125 12.6875 2.84375 12.875L1.6875 14H8H15C15 12.3438 16.3125 11 18 11V7.125L19 6.125V13C19 14.125 18.0938 15 17 15H1.6875L2.84375 16.1562ZM16 14H17C17.5312 14 18 13.5625 18 13V12C16.875 12 16 12.9062 16 14ZM13 9C13 10.6562 11.6562 12 10 12C8.3125 12 7 10.6562 7 9C7 7.34375 8.3125 6 10 6C11.6562 6 13 7.34375 13 9ZM10 7C8.875 7 8 7.90625 8 9C8 10.125 8.875 11 10 11C11.0938 11 12 10.125 12 9C12 7.90625 11.0938 7 10 7Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  I4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 21 17",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M20.6666 15.5C20.6666 15.2812 20.5104 15.0938 20.2916 15.0312L12.9791 12.875C11.8854 12.5625 11.1666 11.5625 11.1666 10.4688V7.75C11.1666 7.34375 11.4791 7.03125 11.9166 7.03125C12.3229 7.03125 12.6666 7.34375 12.6666 7.75V9.46875C12.6666 9.71875 12.8854 9.9375 13.1354 9.9375C13.4166 10 13.6666 9.78125 13.6666 9.5V7.125C13.6666 6.625 13.5104 6.09375 13.2604 5.65625L11.2604 2.125C11.0416 1.78125 11.1666 1.3125 11.5416 1.125C11.8854 0.90625 12.3541 1.03125 12.5416 1.375L15.2604 6.09375C15.5104 6.5625 15.6666 7.09375 15.6666 7.625V9.6875C15.6666 10.125 15.9479 10.5312 16.3541 10.6562L20.0104 11.875C20.3229 11.9688 20.6666 11.7188 20.6666 11.375C20.6666 11.1562 20.5104 10.9688 20.2916 10.9062L16.6666 9.6875V7.625C16.6666 6.90625 16.4791 6.21875 16.1354 5.625L13.4166 0.90625C13.1041 0.34375 12.5416 0 11.9166 0C11.4479 0 10.9791 0.1875 10.6666 0.53125C10.3229 0.1875 9.85413 0 9.41663 0C8.76038 0 8.19788 0.34375 7.88538 0.90625L5.16663 5.625C4.82288 6.21875 4.66663 6.90625 4.66663 7.625V9.6875L1.01038 10.9062C0.791626 10.9688 0.666626 11.1562 0.666626 11.375C0.666626 11.7188 0.979126 11.9688 1.29163 11.875L4.94788 10.6562C5.35413 10.5312 5.66663 10.125 5.66663 9.6875V7.625C5.66663 7.09375 5.79163 6.5625 6.04163 6.125L8.76038 1.40625C8.97913 1 9.44788 0.90625 9.76038 1.125C10.1354 1.34375 10.2604 1.8125 10.0416 2.15625L8.04163 5.65625C7.79163 6.09375 7.66663 6.625 7.66663 7.125V9.53125C7.66663 9.78125 7.88538 10 8.13538 10C8.38538 10 8.66663 9.78125 8.66663 9.5V7.75C8.66663 7.3125 8.97913 7 9.41663 7C9.82288 7 10.1666 7.34375 10.1666 7.75V10.4375C10.1666 11.5625 9.41663 12.5312 8.32288 12.8125L1.01038 15.0312C0.791626 15.0938 0.666626 15.2812 0.666626 15.5C0.666626 15.8125 0.979126 16.0625 1.29163 15.9688L8.60413 13.7812C9.47913 13.5625 10.1979 13 10.6666 12.25C11.1041 12.9688 11.8229 13.5625 12.6979 13.8125L20.0104 16C20.3229 16.0938 20.6666 15.8438 20.6666 15.5ZM10.6666 6.59375C10.3854 6.28125 10.0104 6.0625 9.57288 6.0625C9.35413 6.03125 9.16663 6.03125 8.94788 6.09375L10.6666 3.09375L12.3541 6.03125C12.1354 6 11.9479 5.96875 11.7291 6C11.2916 6.0625 10.9166 6.28125 10.6666 6.59375Z",
        stroke: t,
        strokeWidth: ".1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  D4 = ({ size: e = 24, color: t = "currentColor", className: n = "" }) =>
    u.jsxs("svg", {
      width: e,
      height: e,
      viewBox: "0 0 20 14",
      fill: t,
      className: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u.jsx("path", {
          d: "M10.9116 1.03201C10.4058 0.101782 9.23588 -0.292644 8.29102 0.238912C7.3156 0.787433 7.05298 1.98909 7.55876 2.91931C8.08121 3.88064 9.26506 4.227 10.1794 3.71241C11.0936 3.19781 11.4341 1.99333 10.9116 1.03201ZM9.64023 2.71998C9.21365 2.96031 8.7704 2.8048 8.53419 2.37079C8.31464 1.96788 8.43414 1.45471 8.83015 1.23275C9.22616 1.00939 9.71665 1.17903 9.93619 1.58194C10.1724 2.01595 10.0057 2.51499 9.64023 2.71998Z",
          stroke: t,
          strokeWidth: ".5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        u.jsx("path", {
          d: "M3.64732 8.68302L7.36562 6.59072L5.99002 11.4553C5.9525 11.6787 6.00947 11.9303 6.20261 12.0646C6.36518 12.2159 6.59862 12.206 6.81121 12.0858L11.1701 9.63303L12.5193 12.1141C12.6707 12.3926 13.0028 12.4901 13.246 12.353C13.4891 12.2159 13.585 11.878 13.4336 11.5995L11.8315 8.65333C11.68 8.37483 11.3479 8.27728 11.1048 8.41441L7.43093 10.4417L8.8232 5.60819C8.86072 5.38482 8.80375 5.13318 8.61061 4.99888C8.44804 4.84761 8.19793 4.82641 8.01591 4.92961L3.13877 7.67363C2.86504 7.82772 2.78583 8.1967 2.92062 8.4441C3.07207 8.7226 3.40416 8.82015 3.64732 8.68302Z",
          stroke: t,
          strokeWidth: ".5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        u.jsx("path", {
          d: "M0.166631 13.4373C0.170799 13.7498 0.420909 14.0014 0.729378 14L18.6122 13.9703C18.9235 13.983 19.1833 13.7243 19.1666 13.3907C19.1791 13.074 18.9082 12.8408 18.6275 12.845L0.727988 12.8577C0.415351 12.8577 0.162463 13.1178 0.166631 13.4373Z",
          stroke: t,
          strokeWidth: ".5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  $4 = ({ size: e = 24, color: t = "currentColor" }) =>
    u.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 19 14",
      fill: t,
      style: { color: t },
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        d: "M14 7C14 9.21875 12.1875 11 10 11C7.78125 11 6 9.21875 6 7C6 4.8125 7.78125 3 10 3C12.1875 3 14 4.8125 14 7ZM10 4C8.3125 4 7 5.34375 7 7C7 8.65625 8.3125 10 10 10C11.6562 10 13 8.65625 13 7C13 5.34375 11.6562 4 10 4ZM16 2.53125C17.4688 3.875 18.4375 5.5 18.9062 6.625C19 6.875 19 7.15625 18.9062 7.40625C18.4375 8.5 17.4688 10.125 16 11.5C14.5312 12.875 12.5 14 10 14C7.46875 14 5.4375 12.875 3.96875 11.5C2.5 10.125 1.53125 8.5 1.0625 7.40625C0.96875 7.15625 0.96875 6.875 1.0625 6.625C1.53125 5.5 2.5 3.875 3.96875 2.53125C5.4375 1.15625 7.46875 0 10 0C12.5 0 14.5312 1.15625 16 2.53125ZM2 7C2.40625 8 3.3125 9.5 4.65625 10.75C6 12 7.78125 13 10 13C12.1875 13 13.9688 12 15.3125 10.75C16.6562 9.5 17.5625 8 18 7C17.5625 6 16.6562 4.5 15.3125 3.25C13.9688 2 12.1875 1 10 1C7.78125 1 6 2 4.65625 3.25C3.3125 4.5 2.40625 6 2 7Z",
        stroke: t,
        strokeWidth: ".5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  jo = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Accupuncture: N7,
        Ai: L7,
        AllFitness: b7,
        Arrow: P7,
        Barber: M7,
        Beauty: $4,
        Blog: j7,
        BookService: R7,
        BrandedApp: A7,
        BrowLash: I7,
        BusinessTypes: D7,
        Calendar: $7,
        Check: O7,
        Chiropractor: V7,
        Coaching: z7,
        Connect: U7,
        ContactUs: _7,
        CrossTraining: F7,
        CustomerTracking: H7,
        Cycling: B7,
        Dance: W7,
        DesignServices: Z7,
        Enterprise: K7,
        Features: G7,
        Forms: q7,
        Gym: Y7,
        HairRemoval: Q7,
        Inventory: X7,
        Invoices: J7,
        LiveStream: e4,
        Login: t4,
        MagnifyingGlass: n4,
        Makeup: r4,
        Marketing: i4,
        Marketplace: o4,
        Massage: s4,
        MedSpa: a4,
        Memberships: l4,
        MentalHealth: c4,
        MobileApps: u4,
        MySite: d4,
        NailSalon: f4,
        Notifications: h4,
        Nutritionists: p4,
        OnlineBooking: m4,
        OnlineStore: g4,
        Paydesk: v4,
        Payments: y4,
        Payroll: C4,
        PersonalTraining: x4,
        PetGrooming: w4,
        PhysicalTherapy: E4,
        Pilates: D4,
        Pricing: k4,
        RentAndFees: S4,
        Reports: T4,
        RightChevronIcon: up,
        Salon: N4,
        Spa: L4,
        Support: b4,
        SupportNew: P4,
        Tanning: M4,
        Tattoo: j4,
        VagaroCapital: R4,
        VagaroPayLater: A4,
        Yoga: I4,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ro = {
    acupunctureicon: "Accupuncture",
    aiicon: "Ai",
    allfitnessicon: "AllFitness",
    arrowicon: "Arrow",
    barbericon: "Barber",
    blogicon: "Blog",
    bookserviceicon: "BookService",
    brandedappicon: "BrandedApp",
    browlashicon: "BrowLash",
    businesstypesicon: "BusinessTypes",
    calendaricon: "Calendar",
    checkicon: "Check",
    chiropractoricon: "Chiropractor",
    contactusicon: "ContactUs",
    vagaroconnecticon: "Connect",
    supporticon: "Support",
    crosstrainingicon: "CrossTraining",
    customertrackingicon: "CustomerTracking",
    cyclingicon: "Cycling",
    coachingicon: "Coaching",
    danceicon: "Dance",
    designservicesicon: "DesignServices",
    enterpriseicon: "Enterprise",
    featuresicon: "Features",
    formsicon: "Forms",
    gymicon: "Gym",
    hairremovalicon: "HairRemoval",
    inventoryicon: "Inventory",
    invoicesicon: "Invoices",
    livestreamicon: "LiveStream",
    login: "Login",
    magnifyingglass: "MagnifyingGlass",
    makeupicon: "Makeup",
    marketingicon: "Marketing",
    marketplaceicon: "Marketplace",
    massageicon: "Massage",
    medspaicon: "MedSpa",
    membershipsicon: "Memberships",
    mentalhealthicon: "MentalHealth",
    mobileappsicon: "MobileApps",
    websitebuildericon: "MySite",
    nailicon: "NailSalon",
    notificationsicon: "Notifications",
    nutritionisticon: "Nutritionists",
    onlinebookingicon: "OnlineBooking",
    onlinestoreicon: "OnlineStore",
    paydeskicon: "Paydesk",
    paymentsicon: "Payments",
    personaltrainericon: "PersonalTraining",
    "pet-grooming": "PetGrooming",
    payrollicon: "Payroll",
    physicaltherapyicon: "PhysicalTherapy",
    pricingicon: "Pricing",
    rentandfeesicon: "RentAndFees",
    reportsicon: "Reports",
    salonicon: "Salon",
    spaicon: "Spa",
    tanningicon: "Tanning",
    tattooicon: "Tattoo",
    vagarocapitalicon: "VagaroCapital",
    vagaropaylatericon: "VagaroPayLater",
    yogaicon: "Yoga",
    pilatesicon: "Pilates",
    beautyicon: "Beauty",
  };
var dp = { exports: {} },
  fp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var si = p;
function O4(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var V4 = typeof Object.is == "function" ? Object.is : O4,
  _4 = si.useState,
  F4 = si.useEffect,
  H4 = si.useLayoutEffect,
  B4 = si.useDebugValue;
function z4(e, t) {
  var n = t(),
    r = _4({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    H4(
      function () {
        (i.value = n), (i.getSnapshot = t), Rl(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    F4(
      function () {
        return (
          Rl(i) && o({ inst: i }),
          e(function () {
            Rl(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    B4(n),
    n
  );
}
function Rl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !V4(e, n);
  } catch {
    return !0;
  }
}
function U4(e, t) {
  return t();
}
var W4 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? U4
    : z4;
fp.useSyncExternalStore =
  si.useSyncExternalStore !== void 0 ? si.useSyncExternalStore : W4;
dp.exports = fp;
var Z4 = dp.exports;
const Sn = () => {},
  Ue = Sn(),
  Al = Object,
  q = (e) => e === Ue,
  Dt = (e) => typeof e == "function",
  On = (e, t) => ({ ...e, ...t }),
  K4 = (e) => Dt(e.then),
  as = new WeakMap();
let G4 = 0;
const ho = (e) => {
    const t = typeof e,
      n = e && e.constructor,
      r = n == Date;
    let i, o;
    if (Al(e) === e && !r && n != RegExp) {
      if (((i = as.get(e)), i)) return i;
      if (((i = ++G4 + "~"), as.set(e, i), n == Array)) {
        for (i = "@", o = 0; o < e.length; o++) i += ho(e[o]) + ",";
        as.set(e, i);
      }
      if (n == Al) {
        i = "#";
        const s = Al.keys(e).sort();
        for (; !q((o = s.pop())); ) q(e[o]) || (i += o + ":" + ho(e[o]) + ",");
        as.set(e, i);
      }
    } else
      i = r
        ? e.toJSON()
        : t == "symbol"
        ? e.toString()
        : t == "string"
        ? JSON.stringify(e)
        : "" + e;
    return i;
  },
  Wt = new WeakMap(),
  Il = {},
  ls = {},
  H1 = "undefined",
  za = typeof window != H1,
  ou = typeof document != H1,
  q4 = () => za && typeof window.requestAnimationFrame != H1,
  hp = (e, t) => {
    const n = Wt.get(e);
    return [
      () => (!q(t) && e.get(t)) || Il,
      (r) => {
        if (!q(t)) {
          const i = e.get(t);
          t in ls || (ls[t] = i), n[5](t, On(i, r), i || Il);
        }
      },
      n[6],
      () => (!q(t) && t in ls ? ls[t] : (!q(t) && e.get(t)) || Il),
    ];
  };
let su = !0;
const Y4 = () => su,
  [au, lu] =
    za && window.addEventListener
      ? [
          window.addEventListener.bind(window),
          window.removeEventListener.bind(window),
        ]
      : [Sn, Sn],
  Q4 = () => {
    const e = ou && document.visibilityState;
    return q(e) || e !== "hidden";
  },
  X4 = (e) => (
    ou && document.addEventListener("visibilitychange", e),
    au("focus", e),
    () => {
      ou && document.removeEventListener("visibilitychange", e), lu("focus", e);
    }
  ),
  J4 = (e) => {
    const t = () => {
        (su = !0), e();
      },
      n = () => {
        su = !1;
      };
    return (
      au("online", t),
      au("offline", n),
      () => {
        lu("online", t), lu("offline", n);
      }
    );
  },
  eg = { isOnline: Y4, isVisible: Q4 },
  tg = { initFocus: X4, initReconnect: J4 },
  i0 = !ie.useId,
  po = !za || "Deno" in window,
  ng = (e) => (q4() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
  Dl = po ? p.useEffect : p.useLayoutEffect,
  $l = typeof navigator < "u" && navigator.connection,
  o0 =
    !po && $l && (["slow-2g", "2g"].includes($l.effectiveType) || $l.saveData),
  B1 = (e) => {
    if (Dt(e))
      try {
        e = e();
      } catch {
        e = "";
      }
    const t = e;
    return (
      (e =
        typeof e == "string"
          ? e
          : (Array.isArray(e) ? e.length : e)
          ? ho(e)
          : ""),
      [e, t]
    );
  };
let rg = 0;
const cu = () => ++rg,
  pp = 0,
  mp = 1,
  gp = 2,
  ig = 3;
var Ti = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: ig,
  FOCUS_EVENT: pp,
  MUTATE_EVENT: gp,
  RECONNECT_EVENT: mp,
};
async function vp(...e) {
  const [t, n, r, i] = e,
    o = On(
      { populateCache: !0, throwOnError: !0 },
      typeof i == "boolean" ? { revalidate: i } : i || {}
    );
  let s = o.populateCache;
  const a = o.rollbackOnError;
  let l = o.optimisticData;
  const c = (h) => (typeof a == "function" ? a(h) : a !== !1),
    d = o.throwOnError;
  if (Dt(n)) {
    const h = n,
      g = [],
      w = t.keys();
    for (const v of w) !/^\$(inf|sub)\$/.test(v) && h(t.get(v)._k) && g.push(v);
    return Promise.all(g.map(f));
  }
  return f(n);
  async function f(h) {
    const [g] = B1(h);
    if (!g) return;
    const [w, v] = hp(t, g),
      [k, m, y, x] = Wt.get(t),
      C = () => {
        const z = k[g];
        return (Dt(o.revalidate)
          ? o.revalidate(w().data, h)
          : o.revalidate !== !1) && (delete y[g], delete x[g], z && z[0])
          ? z[0](gp).then(() => w().data)
          : w().data;
      };
    if (e.length < 3) return C();
    let E = r,
      T;
    const N = cu();
    m[g] = [N, 0];
    const S = !q(l),
      P = w(),
      b = P.data,
      I = P._c,
      V = q(I) ? b : I;
    if ((S && ((l = Dt(l) ? l(V, b) : l), v({ data: l, _c: V })), Dt(E)))
      try {
        E = E(V);
      } catch (z) {
        T = z;
      }
    if (E && K4(E))
      if (
        ((E = await E.catch((z) => {
          T = z;
        })),
        N !== m[g][0])
      ) {
        if (T) throw T;
        return E;
      } else T && S && c(T) && ((s = !0), v({ data: V, _c: Ue }));
    if (s && !T)
      if (Dt(s)) {
        const z = s(E, V);
        v({ data: z, error: Ue, _c: Ue });
      } else v({ data: E, error: Ue, _c: Ue });
    if (
      ((m[g][1] = cu()),
      Promise.resolve(C()).then(() => {
        v({ _c: Ue });
      }),
      T)
    ) {
      if (d) throw T;
      return;
    }
    return E;
  }
}
const s0 = (e, t) => {
    for (const n in e) e[n][0] && e[n][0](t);
  },
  og = (e, t) => {
    if (!Wt.has(e)) {
      const n = On(tg, t),
        r = {},
        i = vp.bind(Ue, e);
      let o = Sn;
      const s = {},
        a = (d, f) => {
          const h = s[d] || [];
          return (s[d] = h), h.push(f), () => h.splice(h.indexOf(f), 1);
        },
        l = (d, f, h) => {
          e.set(d, f);
          const g = s[d];
          if (g) for (const w of g) w(f, h);
        },
        c = () => {
          if (!Wt.has(e) && (Wt.set(e, [r, {}, {}, {}, i, l, a]), !po)) {
            const d = n.initFocus(setTimeout.bind(Ue, s0.bind(Ue, r, pp))),
              f = n.initReconnect(setTimeout.bind(Ue, s0.bind(Ue, r, mp)));
            o = () => {
              d && d(), f && f(), Wt.delete(e);
            };
          }
        };
      return c(), [e, i, c, o];
    }
    return [e, Wt.get(e)[4]];
  },
  sg = (e, t, n, r, i) => {
    const o = n.errorRetryCount,
      s = i.retryCount,
      a =
        ~~((Math.random() + 0.5) * (1 << (s < 8 ? s : 8))) *
        n.errorRetryInterval;
    (!q(o) && s > o) || setTimeout(r, a, i);
  },
  ag = (e, t) => ho(e) == ho(t),
  [yp, lg] = og(new Map()),
  cg = On(
    {
      onLoadingSlow: Sn,
      onSuccess: Sn,
      onError: Sn,
      onErrorRetry: sg,
      onDiscarded: Sn,
      revalidateOnFocus: !0,
      revalidateOnReconnect: !0,
      revalidateIfStale: !0,
      shouldRetryOnError: !0,
      errorRetryInterval: o0 ? 1e4 : 5e3,
      focusThrottleInterval: 5 * 1e3,
      dedupingInterval: 2 * 1e3,
      loadingTimeout: o0 ? 5e3 : 3e3,
      compare: ag,
      isPaused: () => !1,
      cache: yp,
      mutate: lg,
      fallback: {},
    },
    eg
  ),
  ug = (e, t) => {
    const n = On(e, t);
    if (t) {
      const { use: r, fallback: i } = e,
        { use: o, fallback: s } = t;
      r && o && (n.use = r.concat(o)), i && s && (n.fallback = On(i, s));
    }
    return n;
  },
  dg = p.createContext({}),
  fg = "$inf$",
  xp = za && window.__SWR_DEVTOOLS_USE__,
  hg = xp ? window.__SWR_DEVTOOLS_USE__ : [],
  pg = () => {
    xp && (window.__SWR_DEVTOOLS_REACT__ = ie);
  },
  mg = (e) =>
    Dt(e[1])
      ? [e[0], e[1], e[2] || {}]
      : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}],
  gg = () => On(cg, p.useContext(dg)),
  vg = (e) => (t, n, r) =>
    e(
      t,
      n &&
        ((...o) => {
          const [s] = B1(t),
            [, , , a] = Wt.get(yp);
          if (s.startsWith(fg)) return n(...o);
          const l = a[s];
          return q(l) ? n(...o) : (delete a[s], l);
        }),
      r
    ),
  yg = hg.concat(vg),
  xg = (e) =>
    function (...n) {
      const r = gg(),
        [i, o, s] = mg(n),
        a = ug(r, s);
      let l = e;
      const { use: c } = a,
        d = (c || []).concat(yg);
      for (let f = d.length; f--; ) l = d[f](l);
      return l(i, o || a.fetcher || null, a);
    },
  wg = (e, t, n) => {
    const r = t[e] || (t[e] = []);
    return (
      r.push(n),
      () => {
        const i = r.indexOf(n);
        i >= 0 && ((r[i] = r[r.length - 1]), r.pop());
      }
    );
  };
pg();
const a0 =
    ie.use ||
    ((e) => {
      if (e.status === "pending") throw e;
      if (e.status === "fulfilled") return e.value;
      throw e.status === "rejected"
        ? e.reason
        : ((e.status = "pending"),
          e.then(
            (t) => {
              (e.status = "fulfilled"), (e.value = t);
            },
            (t) => {
              (e.status = "rejected"), (e.reason = t);
            }
          ),
          e);
    }),
  Ol = { dedupe: !0 },
  Cg = (e, t, n) => {
    const {
        cache: r,
        compare: i,
        suspense: o,
        fallbackData: s,
        revalidateOnMount: a,
        revalidateIfStale: l,
        refreshInterval: c,
        refreshWhenHidden: d,
        refreshWhenOffline: f,
        keepPreviousData: h,
      } = n,
      [g, w, v, k] = Wt.get(r),
      [m, y] = B1(e),
      x = p.useRef(!1),
      C = p.useRef(!1),
      E = p.useRef(m),
      T = p.useRef(t),
      N = p.useRef(n),
      S = () => N.current,
      P = () => S().isVisible() && S().isOnline(),
      [b, I, V, z] = hp(r, m),
      _ = p.useRef({}).current,
      B = q(s) ? n.fallback[m] : s,
      Z = (ee, te) => {
        for (const Ce in _) {
          const ne = Ce;
          if (ne === "data") {
            if (!i(ee[ne], te[ne]) && (!q(ee[ne]) || !i(qe, te[ne]))) return !1;
          } else if (te[ne] !== ee[ne]) return !1;
        }
        return !0;
      },
      H = p.useMemo(() => {
        const ee =
            !m || !t
              ? !1
              : q(a)
              ? S().isPaused() || o
                ? !1
                : q(l)
                ? !0
                : l
              : a,
          te = (Ne) => {
            const wt = On(Ne);
            return (
              delete wt._k, ee ? { isValidating: !0, isLoading: !0, ...wt } : wt
            );
          },
          Ce = b(),
          ne = z(),
          Ye = te(Ce),
          fn = Ce === ne ? Ye : te(ne);
        let ye = Ye;
        return [
          () => {
            const Ne = te(b());
            return Z(Ne, ye)
              ? ((ye.data = Ne.data),
                (ye.isLoading = Ne.isLoading),
                (ye.isValidating = Ne.isValidating),
                (ye.error = Ne.error),
                ye)
              : ((ye = Ne), Ne);
          },
          () => fn,
        ];
      }, [r, m]),
      j = Z4.useSyncExternalStore(
        p.useCallback(
          (ee) =>
            V(m, (te, Ce) => {
              Z(Ce, te) || ee();
            }),
          [r, m]
        ),
        H[0],
        H[1]
      ),
      D = !x.current,
      F = g[m] && g[m].length > 0,
      K = j.data,
      J = q(K) ? B : K,
      at = j.error,
      lt = p.useRef(J),
      qe = h ? (q(K) ? lt.current : K) : J,
      Te =
        F && !q(at)
          ? !1
          : D && !q(a)
          ? a
          : S().isPaused()
          ? !1
          : o
          ? q(J)
            ? !1
            : l
          : q(J) || l,
      jt = !!(m && t && D && Te),
      rl = q(j.isValidating) ? jt : j.isValidating,
      Er = q(j.isLoading) ? jt : j.isLoading,
      Zn = p.useCallback(
        async (ee) => {
          const te = T.current;
          if (!m || !te || C.current || S().isPaused()) return !1;
          let Ce,
            ne,
            Ye = !0;
          const fn = ee || {},
            ye = !v[m] || !fn.dedupe,
            Ne = () =>
              i0 ? !C.current && m === E.current && x.current : m === E.current,
            wt = { isValidating: !1, isLoading: !1 },
            Kn = () => {
              I(wt);
            },
            Zd = () => {
              const ct = v[m];
              ct && ct[1] === ne && delete v[m];
            },
            Kd = { isValidating: !0 };
          q(b().data) && (Kd.isLoading = !0);
          try {
            if (
              (ye &&
                (I(Kd),
                n.loadingTimeout &&
                  q(b().data) &&
                  setTimeout(() => {
                    Ye && Ne() && S().onLoadingSlow(m, n);
                  }, n.loadingTimeout),
                (v[m] = [te(y), cu()])),
              ([Ce, ne] = v[m]),
              (Ce = await Ce),
              ye && setTimeout(Zd, n.dedupingInterval),
              !v[m] || v[m][1] !== ne)
            )
              return ye && Ne() && S().onDiscarded(m), !1;
            wt.error = Ue;
            const ct = w[m];
            if (!q(ct) && (ne <= ct[0] || ne <= ct[1] || ct[1] === 0))
              return Kn(), ye && Ne() && S().onDiscarded(m), !1;
            const Bt = b().data;
            (wt.data = i(Bt, Ce) ? Bt : Ce),
              ye && Ne() && S().onSuccess(Ce, m, n);
          } catch (ct) {
            Zd();
            const Bt = S(),
              { shouldRetryOnError: il } = Bt;
            Bt.isPaused() ||
              ((wt.error = ct),
              ye &&
                Ne() &&
                (Bt.onError(ct, m, Bt),
                (il === !0 || (Dt(il) && il(ct))) &&
                  (!S().revalidateOnFocus ||
                    !S().revalidateOnReconnect ||
                    P()) &&
                  Bt.onErrorRetry(
                    ct,
                    m,
                    Bt,
                    (Y3) => {
                      const ol = g[m];
                      ol && ol[0] && ol[0](Ti.ERROR_REVALIDATE_EVENT, Y3);
                    },
                    { retryCount: (fn.retryCount || 0) + 1, dedupe: !0 }
                  )));
          }
          return (Ye = !1), Kn(), !0;
        },
        [m, r]
      ),
      Bo = p.useCallback((...ee) => vp(r, E.current, ...ee), []);
    if (
      (Dl(() => {
        (T.current = t), (N.current = n), q(K) || (lt.current = K);
      }),
      Dl(() => {
        if (!m) return;
        const ee = Zn.bind(Ue, Ol);
        let te = 0;
        const ne = wg(m, g, (Ye, fn = {}) => {
          if (Ye == Ti.FOCUS_EVENT) {
            const ye = Date.now();
            S().revalidateOnFocus &&
              ye > te &&
              P() &&
              ((te = ye + S().focusThrottleInterval), ee());
          } else if (Ye == Ti.RECONNECT_EVENT)
            S().revalidateOnReconnect && P() && ee();
          else {
            if (Ye == Ti.MUTATE_EVENT) return Zn();
            if (Ye == Ti.ERROR_REVALIDATE_EVENT) return Zn(fn);
          }
        });
        return (
          (C.current = !1),
          (E.current = m),
          (x.current = !0),
          I({ _k: y }),
          Te && (q(J) || po ? ee() : ng(ee)),
          () => {
            (C.current = !0), ne();
          }
        );
      }, [m]),
      Dl(() => {
        let ee;
        function te() {
          const ne = Dt(c) ? c(b().data) : c;
          ne && ee !== -1 && (ee = setTimeout(Ce, ne));
        }
        function Ce() {
          !b().error && (d || S().isVisible()) && (f || S().isOnline())
            ? Zn(Ol).then(te)
            : te();
        }
        return (
          te(),
          () => {
            ee && (clearTimeout(ee), (ee = -1));
          }
        );
      }, [c, d, f, m]),
      p.useDebugValue(qe),
      o && q(J) && m)
    ) {
      if (!i0 && po)
        throw new Error(
          "Fallback data is required when using suspense in SSR."
        );
      (T.current = t), (N.current = n), (C.current = !1);
      const ee = k[m];
      if (!q(ee)) {
        const te = Bo(ee);
        a0(te);
      }
      if (q(at)) {
        const te = Zn(Ol);
        q(qe) || ((te.status = "fulfilled"), (te.value = !0)), a0(te);
      } else throw at;
    }
    return {
      mutate: Bo,
      get data() {
        return (_.data = !0), qe;
      },
      get error() {
        return (_.error = !0), at;
      },
      get isValidating() {
        return (_.isValidating = !0), rl;
      },
      get isLoading() {
        return (_.isLoading = !0), Er;
      },
    };
  },
  un = xg(Cg),
  kg = async (e) =>
    (
      await (
        await fetch(
          "https://api-us-west-2.hygraph.com/v2/cld3gw4bb0hr001ue9afzcunb/master",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ query: e }),
          }
        )
      ).json()
    ).data.navigationMenu,
  Vl = () =>
    u.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      className: "h-5 w-5",
      children: u.jsx("path", {
        fillRule: "evenodd",
        d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
        clipRule: "evenodd",
      }),
    }),
  _l = () =>
    u.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      className: "h-5 w-5",
      children: u.jsx("path", {
        fillRule: "evenodd",
        d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
        clipRule: "evenodd",
      }),
    });
function Fl({ item: e, className: t }) {
  const n = (r, i = "") => {
    const o = Ro[r],
      s = jo[o];
    return s ? u.jsx(s, { className: i }) : null;
  };
  return u.jsx(
    "a",
    {
      href: `https://www.vagaro.com/pro/${e.link}`,
      children: u.jsx("div", {
        className: `group ${t}`,
        children: u.jsx("div", {
          className: "flex h-20 w-full items-center group-hover:cursor-pointer",
          children: u.jsxs("div", {
            className:
              "menu-item flex h-[64px] w-full flex-row items-center gap-4 rounded-full group-hover:bg-graywave dark:group-hover:bg-inkDark/60",
            children: [
              u.jsx("div", {
                className:
                  "-ml-2 flex h-16 w-16 items-center justify-center  rounded-full border-2 border-white/0  bg-navIconPink group-hover:bg-white dark:bg-inkDark group-hover:border-inkLight dark:group-hover:border-inkLight  dark:group-hover:bg-menuItemDarkBg",
                children: n(
                  e.svgName,
                  "text-charcoal dark:text-white dark:group-hover:text-white"
                ),
              }),
              u.jsx("span", {
                className:
                  "text-lg font-semibold text-charcoal dark:text-white",
                children: e.name,
              }),
            ],
          }),
        }),
      }),
    },
    e.id
  );
}
function Eg({ onCloseBusinessTypes: e }) {
  const [t, n] = p.useState(!1),
    [r, i] = p.useState(!1),
    [o, s] = p.useState(!1),
    { data: a, error: l } = un(
      `
  {
    navigationMenu(where: {id: "clezyiora1akc0an0g68whmx0"}) {
      beautyItems {
        id
        name
        link
        svgName
        iconImage {
          id
          url
        }
      }
      wellnessItems {
        id
        name
        link
        svgName
        iconImage {
          id
          url
        }
      }
      fitnessItems {
        id
        name
        link
        svgName
        iconImage {
          id
          url
        }
      }
      featureItems {
        id
        name
        description
        link
        svgName
        iconImage {
          id
          url
        }
      }
    }
  }`,
      kg
    );
  if (l)
    return u.jsx("div", {
      className: "text-black",
      children: "Failed to load",
    });
  if (!a)
    return u.jsx("div", { className: "text-white", children: "Loading..." });
  const c = (d, f) => (f ? d : d.slice(0, 4));
  return u.jsx(u.Fragment, {
    children: u.jsx("div", {
      className: "z-10 h-full w-full bg-white dark:bg-menuBgDark mb-24",
      children:
        a &&
        u.jsx(u.Fragment, {
          children: u.jsx("div", {
            className: "flex flex-col bg-white dark:bg-menuBgDark",
            children: u.jsx("div", {
              className: "",
              children: u.jsxs("div", {
                className: "flex flex-col gap-6",
                children: [
                  u.jsxs("div", {
                    className: "div",
                    children: [
                      u.jsx("div", {
                        className: "py-2 px-4",
                        children: u.jsxs("button", {
                          onClick: e,
                          className:
                            "bg-grey-light hover:bg-grey inline-flex items-center rounded px-2 py-2 font-semibold text-primary dark:text-white",
                          children: [
                            u.jsx("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              strokeWidth: "2",
                              stroke: "currentColor",
                              className: "mr-1 h-3 w-3",
                              children: u.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18",
                              }),
                            }),
                            u.jsx("span", { children: "Back" }),
                          ],
                        }),
                      }),
                      u.jsxs("div", {
                        className:
                          "mb-3 flex w-full items-center justify-between border-y-2 border-charcoal px-8 py-4 text-2xl font-semibold dark:border-white",
                        children: [
                          u.jsx("h2", {
                            className: "text-charcoal dark:text-white",
                            children: "Beauty",
                          }),
                          a.beautyItems.length > 4 &&
                            u.jsxs("button", {
                              className:
                                "flex cursor-pointer items-center text-lg text-charcoal dark:text-white",
                              onClick: () => n(!t),
                              children: [
                                u.jsx("span", {
                                  className: "mr-2",
                                  children: t ? "View Less" : "View All",
                                }),
                                t ? u.jsx(Vl, {}) : u.jsx(_l, {}),
                              ],
                            }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "flex flex-col gap-2 px-8 pt-2 pb-6",
                        children: c(a.beautyItems, t).map((d) =>
                          u.jsx(Fl, { item: d }, d.id)
                        ),
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    className: "div",
                    children: u.jsxs("ul", {
                      className: "",
                      children: [
                        u.jsxs("div", {
                          className:
                            "mb-3 flex w-full items-center justify-between border-y-2 border-charcoal px-8 py-4 text-2xl font-semibold dark:border-white ",
                          children: [
                            u.jsx("h2", {
                              className: "text-charcoal dark:text-white",
                              children: "Wellness",
                            }),
                            a.wellnessItems.length > 4 &&
                              u.jsxs("button", {
                                className:
                                  "flex cursor-pointer items-center text-lg text-charcoal dark:text-white",
                                onClick: () => i(!r),
                                children: [
                                  u.jsx("span", {
                                    className: "mr-2",
                                    children: r ? "View Less" : "View All",
                                  }),
                                  r ? u.jsx(Vl, {}) : u.jsx(_l, {}),
                                ],
                              }),
                          ],
                        }),
                        u.jsx("div", {
                          className: "flex flex-col gap-2 px-8 pt-2 pb-6",
                          children: c(a.wellnessItems, r).map((d) =>
                            u.jsx(Fl, { item: d }, d.id)
                          ),
                        }),
                      ],
                    }),
                  }),
                  u.jsx("div", {
                    className: "div",
                    children: u.jsxs("ul", {
                      className: "",
                      children: [
                        u.jsxs("div", {
                          className:
                            "mb-3 flex w-full items-center justify-between border-y-2 border-charcoal px-8 py-4 text-2xl font-semibold dark:border-white ",
                          children: [
                            u.jsx("h2", {
                              className: "text-charcoal dark:text-white",
                              children: "Fitness",
                            }),
                            a.fitnessItems.length > 4 &&
                              u.jsxs("button", {
                                className:
                                  "flex cursor-pointer items-center text-lg text-charcoal dark:text-white",
                                onClick: () => s(!o),
                                children: [
                                  u.jsx("span", {
                                    className: "mr-2",
                                    children: o ? "View Less" : "View All",
                                  }),
                                  o ? u.jsx(Vl, {}) : u.jsx(_l, {}),
                                ],
                              }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex flex-col gap-2 px-8 pt-2 pb-6",
                          children: [
                            " ",
                            c(a.fitnessItems, o).map((d) =>
                              u.jsx(Fl, { item: d }, d.id)
                            ),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
    }),
  });
}
const Sg = async (e) => {
    const t = await fetch(
      "https://api-us-west-2.hygraph.com/v2/cld3gw4bb0hr001ue9afzcunb/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: e }),
      }
    );
    if (!t.ok)
      throw (
        (console.error("Network response was not ok"),
        console.error(t.statusText),
        new Error("Network response was not ok"))
      );
    return await t.json();
  },
  Tg = () =>
    u.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      className: "h-5 w-5",
      children: u.jsx("path", {
        fillRule: "evenodd",
        d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
        clipRule: "evenodd",
      }),
    }),
  Ng = () =>
    u.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      className: "h-5 w-5",
      children: u.jsx("path", {
        fillRule: "evenodd",
        d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
        clipRule: "evenodd",
      }),
    });
function Lg({ item: e, className: t }) {
  const n = (r, i = "") => {
    const o = Ro[r],
      s = jo[o];
    return s ? u.jsx(s, { className: i }) : null;
  };
  return u.jsx(
    "div",
    {
      className: `${t}`,
      children: u.jsx("div", {
        className: "",
        children: u.jsx("div", {
          className:
            "flex flex-row items-center group-hover:bg-inkLight/70  dark:group-hover:bg-menuItemDarkHover h-24 w-full rounded-full",
          children: u.jsxs("div", {
            className: "flex gap-5 px-4 items-center",
            children: [
              u.jsx("div", {
                className:
                  "flex items-center justify-center min-w-14 min-h-14 w-14 h-14 border-2 border-white/0 bg-navIconPink group-hover:bg-white dark:bg-inkDark dark:group-hover:border-white  dark:group-hover:bg-menuBgDark rounded-full",
                children: n(
                  e.svgName,
                  "text-charcoal dark:text-white dark:group-hover:text-white h-8 w-8"
                ),
              }),
              u.jsxs("div", {
                className: "flex flex-col",
                children: [
                  u.jsx("span", {
                    className:
                      "text-lg font-semibold text-charcoal dark:text-white",
                    children: e.name,
                  }),
                  u.jsx("span", {
                    className:
                      "text-sm font-semibold text-charcoal dark:text-white",
                    children: e.description,
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    },
    e.id
  );
}
function bg({ onCloseFeaturedItemsNavMobile: e }) {
  var d, f;
  const [t, n] = p.useState({}),
    { data: r, error: i } = un(
      `
    query MyNavQuery {
      navigationMenu(where: { id: "clezyiora1akc0an0g68whmx0" }) {
        featureItems {
          id
          name
          flagAsNew
          flagAsBeta
          link
          svgName
          iconImage {
            id
            url
          }
          description
          featureMenuItemType
        }
      }
    }
  `,
      Sg
    );
  if (i) return u.jsx("div", { children: "Error loading data" });
  if (!r) return u.jsx("div", { children: "Loading..." });
  const s = (
      ((f = (d = r.data) == null ? void 0 : d.navigationMenu) == null
        ? void 0
        : f.featureItems) || []
    ).filter((h) => h.featureMenuItemType !== null),
    a = [
      { heading: "Client Experience", type: "ClientExperience" },
      { heading: "Run Your Business", type: "RunYourBusiness" },
      { heading: "Payments", type: "Payments" },
      { heading: "Marketing & Branding", type: "MarketingBranding" },
    ],
    l = {};
  s.forEach((h) => {
    (l[h.featureMenuItemType] = l[h.featureMenuItemType] || []),
      l[h.featureMenuItemType].push(h);
  });
  const c = (h) => {
    n((g) => ({ ...g, [h]: !g[h] }));
  };
  return u.jsx("div", {
    className: "z-50 h-full w-full mb-20",
    children: u.jsxs("div", {
      className: "mx-auto",
      children: [
        u.jsx("div", {
          className: "bg-white px-8 py-2 dark:bg-charcoal",
          children: u.jsxs("button", {
            onClick: e,
            className:
              "inline-flex items-center px-2 py-2 font-semibold text-primary dark:text-white",
            children: [
              u.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "2",
                stroke: "currentColor",
                className: "mr-1 h-3 w-3 ",
                children: u.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18",
                }),
              }),
              u.jsx("span", {
                className: "text-primary dark:text-white",
                children: "Back",
              }),
            ],
          }),
        }),
        a.map((h, g) => {
          const w = l[h.type] || [],
            v = !!t[h.type];
          return u.jsxs(
            "div",
            {
              children: [
                u.jsxs("div", {
                  className:
                    "flex w-full items-center justify-between border-y-2 border-charcoal bg-white px-8 py-4 dark:border-white dark:bg-charcoal",
                  children: [
                    u.jsx("div", {
                      className:
                        "pl-3 text-2xl font-semibold text-gray-900 dark:text-white",
                      children: h.heading,
                    }),
                    w.length > 4 &&
                      u.jsxs("button", {
                        className:
                          "flex cursor-pointer items-center font-semibold text-base text-charcoal dark:text-white",
                        onClick: () => c(h.type),
                        children: [
                          u.jsx("span", {
                            className: "mr-2 text-lg",
                            children: v ? "View Less" : "View All",
                          }),
                          v ? u.jsx(Tg, {}) : u.jsx(Ng, {}),
                        ],
                      }),
                  ],
                }),
                u.jsx("div", {
                  className:
                    "mx-auto flex h-full flex-col bg-white py-4 dark:bg-charcoal w-full px-4 ",
                  children: u.jsx("div", {
                    className: "",
                    children: w
                      .slice(0, v ? void 0 : 4)
                      .map((k) =>
                        u.jsx(
                          "a",
                          {
                            href: "https://www.vagaro.com/pro/" + k.link,
                            children: u.jsx("div", {
                              className: "group ",
                              children: u.jsx(Lg, { item: k }, k.id),
                            }),
                          },
                          k.id
                        )
                      ),
                  }),
                }),
              ],
            },
            g
          );
        }),
      ],
    }),
  });
}
const rn = ({ href: e, children: t, ...n }) =>
    u.jsx("a", { href: e, ...n, children: t }),
  z1 = () => {
    const [e, t] = p.useState(""),
      [n, r] = p.useState("");
    p.useEffect(() => {
      i();
    }, []);
    const i = () => {
        if (typeof StatusPage < "u") {
          var s = new StatusPage.page({ page: "fjfpnmdkhkfn" });
          s.summary({
            success: (a) => {
              t(a.status.description), r(a.status.indicator);
            },
            error: (a) => {
              console.error("Error fetching status:", a),
                t("Error loading status!");
            },
          });
        } else
          console.error("StatusPage is not loaded!"),
            t("StatusPage not available!");
      },
      o = () => {
        switch (n) {
          case "none":
            return "bg-[#2ecc71]";
          case "critical":
            return "bg-[#e74c3c]";
          case "major":
            return "bg-[#e67e22]";
          case "minor":
            return "bg-[#f1c40f]";
          default:
            return "";
        }
      };
    return u.jsx(u.Fragment, {
      children: u.jsxs("div", {
        className:
          "group relative flex items-center rounded-lg  hover:bg-graywave dark:hover:bg-inkDark mt-1 lg:mt-0",
        children: [
          u.jsx("div", {
            className:
              "mt-1 md:mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-full",
            children: u.jsx("span", {
              className: `nav-color-dot inline-block h-5 w-5 rounded-full ${o()}`,
            }),
          }),
          u.jsx("div", {
            children: u.jsxs("a", {
              href: "https://status.vagaro.com",
              className:
                "font-semibold text-gray-900 dark:text-white text-base",
              children: [e, u.jsx("span", { className: "absolute inset-0" })],
            }),
          }),
        ],
      }),
    });
  },
  Pg = async (e) =>
    (
      await (
        await fetch(
          "https://api-us-west-2.hygraph.com/v2/cld3gw4bb0hr001ue9afzcunb/master",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ query: e }),
          }
        )
      ).json()
    ).data.navigationMenu;
function Mg({ item: e, className: t }) {
  const { externalLink: n, link: r, id: i, name: o } = e,
    s = r ? `/pro${r.startsWith("/") ? "" : "/"}${r}` : n;
  return (
    console.log(s),
    u.jsx(u.Fragment, {
      children: r
        ? u.jsx(rn, {
            href: s,
            children: u.jsx(
              "div",
              {
                className: `group ${t}`,
                children: u.jsx("div", {
                  className:
                    "h-16 flex items-center w-full group-hover:cursor-pointer",
                  children: u.jsx("div", {
                    className:
                      "flex flex-row items-center gap-4 group-hover:bg-graywave dark:group-hover:bg-menuItemDarkHover rounded-lg w-full h-[50px] px-2",
                    children: u.jsx("span", {
                      className:
                        "text-charcoal dark:text-white text-base font-semibold",
                      children: o,
                    }),
                  }),
                }),
              },
              i
            ),
          })
        : u.jsx("a", {
            href: n,
            className: `group ${t}`,
            children: u.jsx(
              "div",
              {
                className:
                  "h-16 flex items-center w-full group-hover:cursor-pointer",
                children: u.jsx("div", {
                  className:
                    "flex flex-row items-center gap-4 group-hover:bg-graywave dark:group-hover:bg-menuItemDarkHover rounded-lg w-full h-[50px] px-2",
                  children: u.jsx("span", {
                    className:
                      "text-charcoal dark:text-white text-base font-semibold",
                    children: o,
                  }),
                }),
              },
              i
            ),
          }),
    })
  );
}
function jg({ onCloseSupportItemsNavMobile: e }) {
  const [t, n] = p.useState(!0),
    { data: r, error: i } = un(
      `
    {
      navigationMenu(where: {id: "clwf5eift1g5107lkal4vbfi9"}) {
        supportItems {
          id
          name
          description
          link
          externalLink
          svgName
          iconImage {
            id
            url
          }
        }
      }
    }
  `,
      Pg
    );
  if (i)
    return u.jsx("div", {
      className: "text-black",
      children: "Failed to load",
    });
  if (!r)
    return u.jsx("div", { className: "text-white", children: "Loading..." });
  const o = (s, a) => (a ? s : s.slice(0, 8));
  return u.jsx(u.Fragment, {
    children: u.jsx("div", {
      className: "z-10 mb-24 h-full w-full bg-white dark:bg-menuBgDark",
      children:
        r &&
        u.jsx(u.Fragment, {
          children: u.jsx("div", {
            className: "flex flex-col bg-white dark:bg-menuBgDark",
            children: u.jsx("div", {
              className: "",
              children: u.jsx("div", {
                className: "flex flex-col gap-6",
                children: u.jsxs("div", {
                  className: "div",
                  children: [
                    u.jsx("div", {
                      className: "px-4 py-2",
                      children: u.jsxs("button", {
                        onClick: e,
                        className:
                          "bg-grey-light hover:bg-grey inline-flex items-center rounded px-2 py-2 font-semibold text-primary dark:text-white",
                        children: [
                          u.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "2",
                            stroke: "currentColor",
                            className: "mr-1 h-3 w-3",
                            children: u.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18",
                            }),
                          }),
                          u.jsx("span", { children: "Back" }),
                        ],
                      }),
                    }),
                    u.jsx("div", {
                      className:
                        "mb-3 flex w-full items-center justify-between border-y-2 border-charcoal px-8 py-4 text-2xl font-semibold dark:border-white",
                      children: u.jsx("h2", {
                        className: "text-charcoal dark:text-white",
                        children: "Support",
                      }),
                    }),
                    u.jsx("div", {
                      className: "",
                      children: u.jsx("div", {
                        className:
                          "z-50 flex h-screen w-full flex-col bg-white dark:bg-menuBgDark",
                        children: u.jsxs("div", {
                          className:
                            "px-4 flex flex-col bg-white dark:bg-menuBgDark",
                          children: [
                            u.jsx("div", {
                              className: "flex flex-col",
                              children: o(r.supportItems, t).map((s) =>
                                u.jsx(Mg, { item: s, className: "" }, s.id)
                              ),
                            }),
                            u.jsx(z1, {}),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        }),
    }),
  });
}
const Rg = async (e) =>
  (
    await (
      await fetch(
        "https://api-us-west-2.hygraph.com/v2/cld3gw4bb0hr001ue9afzcunb/master",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ query: e }),
        }
      )
    ).json()
  ).data.navigationMenu;
function Ag({ item: e, className: t }) {
  const { externalLink: n, link: r, id: i, name: o } = e,
    s = r ? `/pro${r.startsWith("/") ? "" : "/"}${r}` : n;
  return (
    console.log(s),
    u.jsx(u.Fragment, {
      children: r
        ? u.jsx(rn, {
            href: s,
            children: u.jsx(
              "div",
              {
                className: `group ${t}`,
                children: u.jsx("div", {
                  className:
                    "h-16 flex items-center w-full group-hover:cursor-pointer",
                  children: u.jsx("div", {
                    className:
                      "flex flex-row items-center gap-4 group-hover:bg-graywave dark:group-hover:bg-menuItemDarkHover rounded-lg w-full h-[50px] px-2",
                    children: u.jsx("span", {
                      className:
                        "text-charcoal dark:text-white text-base font-semibold",
                      children: o,
                    }),
                  }),
                }),
              },
              i
            ),
          })
        : u.jsx("a", {
            href: n,
            className: `group ${t}`,
            children: u.jsx(
              "div",
              {
                className:
                  "h-16 flex items-center w-full group-hover:cursor-pointer",
                children: u.jsx("div", {
                  className:
                    "flex flex-row items-center gap-4 group-hover:bg-graywave dark:group-hover:bg-menuItemDarkHover rounded-lg w-full h-[50px] px-2",
                  children: u.jsx("span", {
                    className:
                      "text-charcoal dark:text-white text-base font-semibold",
                    children: o,
                  }),
                }),
              },
              i
            ),
          }),
    })
  );
}
function Ig({ onCloseLocaleItemsNavMobile: e }) {
  const [t, n] = p.useState(!0),
    { data: r, error: i } = un(
      `
    {
      navigationMenu(where: {id: "clwf5eift1g5107lkal4vbfi9"}) {
        supportItems {
          id
          name
          description
          link
          externalLink
          svgName
          iconImage {
            id
            url
          }
        }
      }
    }
  `,
      Rg
    );
  if (i)
    return u.jsx("div", {
      className: "text-black",
      children: "Failed to load",
    });
  if (!r)
    return u.jsx("div", { className: "text-white", children: "Loading..." });
  const o = (s, a) => (a ? s : s.slice(0, 8));
  return u.jsx(u.Fragment, {
    children: u.jsx("div", {
      className: "z-10 mb-24 h-full w-full bg-white dark:bg-menuBgDark",
      children:
        r &&
        u.jsx(u.Fragment, {
          children: u.jsx("div", {
            className: "flex flex-col bg-white dark:bg-menuBgDark",
            children: u.jsx("div", {
              className: "",
              children: u.jsx("div", {
                className: "flex flex-col gap-6",
                children: u.jsxs("div", {
                  className: "div",
                  children: [
                    u.jsx("div", {
                      className: "px-4 py-2",
                      children: u.jsxs("button", {
                        onClick: e,
                        className:
                          "bg-grey-light hover:bg-grey inline-flex items-center rounded px-2 py-2 font-semibold text-primary dark:text-white",
                        children: [
                          u.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "2",
                            stroke: "currentColor",
                            className: "mr-1 h-3 w-3",
                            children: u.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18",
                            }),
                          }),
                          u.jsx("span", { children: "Back" }),
                        ],
                      }),
                    }),
                    u.jsx("div", {
                      className:
                        "mb-3 flex w-full items-center justify-between border-y-2 border-charcoal px-8 py-4 text-2xl font-semibold dark:border-white",
                      children: u.jsx("h2", {
                        className: "text-charcoal dark:text-white",
                        children: "Locations",
                      }),
                    }),
                    u.jsx("div", {
                      className: "",
                      children: u.jsx("div", {
                        className:
                          "z-50 flex h-screen w-full flex-col bg-white dark:bg-menuBgDark",
                        children: u.jsxs("div", {
                          className:
                            "px-4 flex flex-col bg-white dark:bg-menuBgDark",
                          children: [
                            u.jsx("div", {
                              className: "flex flex-col",
                              children: o(r.supportItems, t).map((s) =>
                                u.jsx(Ag, { item: s, className: "" }, s.id)
                              ),
                            }),
                            u.jsx(z1, {}),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        }),
    }),
  });
}
function Dg() {
  return u.jsx("div", {
    className:
      "flex cursor-auto lg:hidden lg:w-16 lg:flex-1 mx-auto w-full justify-center",
    children: u.jsx("a", {
      href: "https://www.vagaro.com/pro/pricing",
      className:
        "signup inline-flex h-[40px] w-[146px] items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-primary px-2 py-4 text-base font-semibold text-white shadow-sm hover:bg-primaryDark z-50",
      id: "dynamic-cta",
      children: "Sign up",
    }),
  });
}
const U1 = p.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Ua = p.createContext({}),
  Wa = p.createContext(null),
  W1 = typeof document < "u",
  Z1 = W1 ? p.useLayoutEffect : p.useEffect,
  wp = p.createContext({ strict: !1 }),
  K1 = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  $g = "framerAppearId",
  Cp = "data-" + K1($g),
  Og = { skipAnimations: !1, useManualTiming: !1 };
class l0 {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function Vg(e) {
  let t = new l0(),
    n = new l0(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, c = !1, d = !1) => {
        const f = d && i,
          h = f ? t : n;
        return c && s.add(l), h.add(l) && f && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), s.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let c = 0; c < r; c++) {
            const d = t.order[c];
            s.has(d) && (a.schedule(d), e()), d(l);
          }
        (i = !1), o && ((o = !1), a.process(l));
      },
    };
  return a;
}
const cs = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  _g = 40;
function kp(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = cs.reduce((f, h) => ((f[h] = Vg(() => (n = !0))), f), {}),
    s = (f) => {
      o[f].process(i);
    },
    a = () => {
      const f = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, _g), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        cs.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(a);
    };
  return {
    schedule: cs.reduce((f, h) => {
      const g = o[h];
      return (f[h] = (w, v = !1, k = !1) => (n || l(), g.schedule(w, v, k))), f;
    }, {}),
    cancel: (f) => cs.forEach((h) => o[h].cancel(f)),
    state: i,
    steps: o,
  };
}
const { schedule: G1, cancel: MT } = kp(queueMicrotask, !1);
function Fg(e, t, n, r) {
  const { visualElement: i } = p.useContext(Ua),
    o = p.useContext(wp),
    s = p.useContext(Wa),
    a = p.useContext(U1).reducedMotion,
    l = p.useRef();
  (r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const c = l.current;
  p.useInsertionEffect(() => {
    c && c.update(n, s);
  });
  const d = p.useRef(!!(n[Cp] && !window.HandoffComplete));
  return (
    Z1(() => {
      c &&
        (G1.render(c.render),
        d.current && c.animationState && c.animationState.animateChanges());
    }),
    p.useEffect(() => {
      c &&
        (c.updateFeatures(),
        !d.current && c.animationState && c.animationState.animateChanges(),
        d.current && ((d.current = !1), (window.HandoffComplete = !0)));
    }),
    c
  );
}
function Hr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Hg(e, t, n) {
  return p.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Hr(n) && (n.current = r));
    },
    [t]
  );
}
function mo(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Za(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const q1 = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Y1 = ["initial", ...q1];
function Ka(e) {
  return Za(e.animate) || Y1.some((t) => mo(e[t]));
}
function Ep(e) {
  return !!(Ka(e) || e.variants);
}
function Bg(e, t) {
  if (Ka(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || mo(n) ? n : void 0,
      animate: mo(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function zg(e) {
  const { initial: t, animate: n } = Bg(e, p.useContext(Ua));
  return p.useMemo(() => ({ initial: t, animate: n }), [c0(t), c0(n)]);
}
function c0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const u0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  go = {};
for (const e in u0) go[e] = { isEnabled: (t) => u0[e].some((n) => !!t[n]) };
function Ug(e) {
  for (const t in e) go[t] = { ...go[t], ...e[t] };
}
const Q1 = p.createContext({}),
  Sp = p.createContext({}),
  Wg = Symbol.for("motionComponentSymbol");
function Zg({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Ug(e);
  function o(a, l) {
    let c;
    const d = { ...p.useContext(U1), ...a, layoutId: Kg(a) },
      { isStatic: f } = d,
      h = zg(a),
      g = r(a, f);
    if (!f && W1) {
      h.visualElement = Fg(i, g, d, t);
      const w = p.useContext(Sp),
        v = p.useContext(wp).strict;
      h.visualElement && (c = h.visualElement.loadFeatures(d, v, e, w));
    }
    return u.jsxs(Ua.Provider, {
      value: h,
      children: [
        c && h.visualElement
          ? u.jsx(c, { visualElement: h.visualElement, ...d })
          : null,
        n(i, a, Hg(g, h.visualElement, l), g, f, h.visualElement),
      ],
    });
  }
  const s = p.forwardRef(o);
  return (s[Wg] = i), s;
}
function Kg({ layoutId: e }) {
  const t = p.useContext(Q1).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Gg(e) {
  function t(r, i = {}) {
    return Zg(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const qg = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function X1(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(qg.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const da = {};
function Yg(e) {
  Object.assign(da, e);
}
const Ao = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Cr = new Set(Ao);
function Tp(e, { layout: t, layoutId: n }) {
  return (
    Cr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!da[e] || e === "opacity"))
  );
}
const $e = (e) => !!(e && e.getVelocity),
  Qg = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Xg = Ao.length;
function Jg(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < Xg; s++) {
    const a = Ao[s];
    if (e[a] !== void 0) {
      const l = Qg[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const Np = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Lp = Np("--"),
  ev = Np("var(--"),
  J1 = (e) => (ev(e) ? tv.test(e.split("/*")[0].trim()) : !1),
  tv =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  nv = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Vn = (e, t, n) => (n > t ? t : n < e ? e : n),
  fi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ui = { ...fi, transform: (e) => Vn(0, 1, e) },
  us = { ...fi, default: 1 },
  Wi = (e) => Math.round(e * 1e5) / 1e5,
  ed = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  rv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  iv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Io(e) {
  return typeof e == "string";
}
const Do = (e) => ({
    test: (t) => Io(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  mn = Do("deg"),
  _t = Do("%"),
  O = Do("px"),
  ov = Do("vh"),
  sv = Do("vw"),
  d0 = {
    ..._t,
    parse: (e) => _t.parse(e) / 100,
    transform: (e) => _t.transform(e * 100),
  },
  f0 = { ...fi, transform: Math.round },
  bp = {
    borderWidth: O,
    borderTopWidth: O,
    borderRightWidth: O,
    borderBottomWidth: O,
    borderLeftWidth: O,
    borderRadius: O,
    radius: O,
    borderTopLeftRadius: O,
    borderTopRightRadius: O,
    borderBottomRightRadius: O,
    borderBottomLeftRadius: O,
    width: O,
    maxWidth: O,
    height: O,
    maxHeight: O,
    size: O,
    top: O,
    right: O,
    bottom: O,
    left: O,
    padding: O,
    paddingTop: O,
    paddingRight: O,
    paddingBottom: O,
    paddingLeft: O,
    margin: O,
    marginTop: O,
    marginRight: O,
    marginBottom: O,
    marginLeft: O,
    rotate: mn,
    rotateX: mn,
    rotateY: mn,
    rotateZ: mn,
    scale: us,
    scaleX: us,
    scaleY: us,
    scaleZ: us,
    skew: mn,
    skewX: mn,
    skewY: mn,
    distance: O,
    translateX: O,
    translateY: O,
    translateZ: O,
    x: O,
    y: O,
    z: O,
    perspective: O,
    transformPerspective: O,
    opacity: Ui,
    originX: d0,
    originY: d0,
    originZ: O,
    zIndex: f0,
    backgroundPositionX: O,
    backgroundPositionY: O,
    fillOpacity: Ui,
    strokeOpacity: Ui,
    numOctaves: f0,
  };
function td(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: a } = e;
  let l = !1,
    c = !1,
    d = !0;
  for (const f in t) {
    const h = t[f];
    if (Lp(f)) {
      o[f] = h;
      continue;
    }
    const g = bp[f],
      w = nv(h, g);
    if (Cr.has(f)) {
      if (((l = !0), (s[f] = w), !d)) continue;
      h !== (g.default || 0) && (d = !1);
    } else f.startsWith("origin") ? ((c = !0), (a[f] = w)) : (i[f] = w);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = Jg(e.transform, n, d, r))
        : i.transform && (i.transform = "none")),
    c)
  ) {
    const { originX: f = "50%", originY: h = "50%", originZ: g = 0 } = a;
    i.transformOrigin = `${f} ${h} ${g}`;
  }
}
const nd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Pp(e, t, n) {
  for (const r in t) !$e(t[r]) && !Tp(r, n) && (e[r] = t[r]);
}
function av({ transformTemplate: e }, t, n) {
  return p.useMemo(() => {
    const r = nd();
    return (
      td(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function lv(e, t, n) {
  const r = e.style || {},
    i = {};
  return Pp(i, r, e), Object.assign(i, av(e, t, n)), i;
}
function cv(e, t, n) {
  const r = {},
    i = lv(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const uv = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function fa(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    uv.has(e)
  );
}
let Mp = (e) => !fa(e);
function dv(e) {
  e && (Mp = (t) => (t.startsWith("on") ? !fa(t) : e(t)));
}
try {
  dv(require("@emotion/is-prop-valid").default);
} catch {}
function fv(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Mp(i) ||
        (n === !0 && fa(i)) ||
        (!t && !fa(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function h0(e, t, n) {
  return typeof e == "string" ? e : O.transform(t + n * e);
}
function hv(e, t, n) {
  const r = h0(t, e.x, e.width),
    i = h0(n, e.y, e.height);
  return `${r} ${i}`;
}
const pv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  mv = { offset: "strokeDashoffset", array: "strokeDasharray" };
function gv(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? pv : mv;
  e[o.offset] = O.transform(-r);
  const s = O.transform(t),
    a = O.transform(n);
  e[o.array] = `${s} ${a}`;
}
function rd(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  d,
  f,
  h
) {
  if ((td(e, c, d, h), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: g, style: w, dimensions: v } = e;
  g.transform && (v && (w.transform = g.transform), delete g.transform),
    v &&
      (i !== void 0 || o !== void 0 || w.transform) &&
      (w.transformOrigin = hv(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (g.x = t),
    n !== void 0 && (g.y = n),
    r !== void 0 && (g.scale = r),
    s !== void 0 && gv(g, s, a, l, !1);
}
const jp = () => ({ ...nd(), attrs: {} }),
  id = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function vv(e, t, n, r) {
  const i = p.useMemo(() => {
    const o = jp();
    return (
      rd(o, t, { enableHardwareAcceleration: !1 }, id(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Pp(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function yv(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (X1(n) ? vv : cv)(r, o, s, n),
      c = fv(r, typeof n == "string", e),
      d = n !== p.Fragment ? { ...c, ...l, ref: i } : {},
      { children: f } = r,
      h = p.useMemo(() => ($e(f) ? f.get() : f), [f]);
    return p.createElement(n, { ...d, children: h });
  };
}
function Rp(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Ap = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Ip(e, t, n, r) {
  Rp(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Ap.has(i) ? i : K1(i), t.attrs[i]);
}
function od(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    ($e(i[s]) ||
      (t.style && $e(t.style[s])) ||
      Tp(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return o;
}
function Dp(e, t, n) {
  const r = od(e, t, n);
  for (const i in e)
    if ($e(e[i]) || $e(t[i])) {
      const o =
        Ao.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
function p0(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function sd(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = p0(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = p0(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function $p(e) {
  const t = p.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const uu = (e) => Array.isArray(e),
  xv = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  wv = (e) => (uu(e) ? e[e.length - 1] || 0 : e);
function Rs(e) {
  const t = $e(e) ? e.get() : e;
  return xv(t) ? t.toValue() : t;
}
function Cv(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: kv(r, i, o, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const Op = (e) => (t, n) => {
  const r = p.useContext(Ua),
    i = p.useContext(Wa),
    o = () => Cv(e, t, r, i);
  return n ? o() : $p(o);
};
function kv(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const h in o) i[h] = Rs(o[h]);
  let { initial: s, animate: a } = e;
  const l = Ka(e),
    c = Ep(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || s === !1;
  const f = d ? a : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Za(f) &&
      (Array.isArray(f) ? f : [f]).forEach((g) => {
        const w = sd(e, g);
        if (!w) return;
        const { transitionEnd: v, transition: k, ...m } = w;
        for (const y in m) {
          let x = m[y];
          if (Array.isArray(x)) {
            const C = d ? x.length - 1 : 0;
            x = x[C];
          }
          x !== null && (i[y] = x);
        }
        for (const y in v) i[y] = v[y];
      }),
    i
  );
}
const Oe = (e) => e,
  {
    schedule: Q,
    cancel: on,
    state: be,
    steps: Hl,
  } = kp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Oe, !0),
  Ev = {
    useVisualState: Op({
      scrapeMotionValuesFromProps: Dp,
      createRenderState: jp,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Q.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Q.render(() => {
            rd(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              id(t.tagName),
              e.transformTemplate
            ),
              Ip(t, n);
          });
      },
    }),
  },
  Sv = {
    useVisualState: Op({
      scrapeMotionValuesFromProps: od,
      createRenderState: nd,
    }),
  };
function Tv(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(X1(e) ? Ev : Sv),
    preloadedFeatures: n,
    useRender: yv(t),
    createVisualElement: r,
    Component: e,
  };
}
function Gt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Vp = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Ga(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const Nv = (e) => (t) => Vp(t) && e(t, Ga(t));
function Yt(e, t, n, r) {
  return Gt(e, t, Nv(n), r);
}
const Lv = (e, t) => (n) => t(e(n)),
  Qt = (...e) => e.reduce(Lv);
function _p(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const m0 = _p("dragHorizontal"),
  g0 = _p("dragVertical");
function Fp(e) {
  let t = !1;
  if (e === "y") t = g0();
  else if (e === "x") t = m0();
  else {
    const n = m0(),
      r = g0();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Hp() {
  const e = Fp(!0);
  return e ? (e(), !1) : !0;
}
class Wn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function v0(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || Hp()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && Q.postRender(() => l(o, s));
    };
  return Yt(e.current, n, i, { passive: !e.getProps()[r] });
}
class bv extends Wn {
  mount() {
    this.unmount = Qt(v0(this.node, !0), v0(this.node, !1));
  }
  unmount() {}
}
class Pv extends Wn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Qt(
      Gt(this.node.current, "focus", () => this.onFocus()),
      Gt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Bp = (e, t) => (t ? (e === t ? !0 : Bp(e, t.parentElement)) : !1);
function Bl(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ga(n));
}
class Mv extends Wn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Oe),
      (this.removeEndListeners = Oe),
      (this.removeAccessibleListeners = Oe),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = Yt(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: c,
                  onTapCancel: d,
                  globalTapTarget: f,
                } = this.node.getProps(),
                h = !f && !Bp(this.node.current, a.target) ? d : c;
              h && Q.update(() => h(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = Yt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Qt(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Bl("up", (l, c) => {
                  const { onTap: d } = this.node.getProps();
                  d && Q.postRender(() => d(l, c));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Gt(this.node.current, "keyup", s)),
              Bl("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Gt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Bl("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = Gt(this.node.current, "blur", r);
        this.removeAccessibleListeners = Qt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && Q.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Hp()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && Q.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Yt(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Gt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Qt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const du = new WeakMap(),
  zl = new WeakMap(),
  jv = (e) => {
    const t = du.get(e.target);
    t && t(e);
  },
  Rv = (e) => {
    e.forEach(jv);
  };
function Av({ root: e, ...t }) {
  const n = e || document;
  zl.has(n) || zl.set(n, {});
  const r = zl.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Rv, { root: e, ...t })), r[i];
}
function Iv(e, t, n) {
  const r = Av(t);
  return (
    du.set(e, n),
    r.observe(e),
    () => {
      du.delete(e), r.unobserve(e);
    }
  );
}
const Dv = { some: 0, all: 1 };
class $v extends Wn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Dv[i],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), o && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          h = c ? d : f;
        h && h(l);
      };
    return Iv(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Ov(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Ov({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Vv = {
  inView: { Feature: $v },
  tap: { Feature: Mv },
  focus: { Feature: Pv },
  hover: { Feature: bv },
};
function zp(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function qa(e, t, n) {
  const r = e.getProps();
  return sd(r, t, n !== void 0 ? n : r.custom, e);
}
const An = (e) => e * 1e3,
  Xt = (e) => e / 1e3,
  _v = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Fv = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Hv = { type: "keyframes", duration: 0.8 },
  Bv = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  zv = (e, { keyframes: t }) =>
    t.length > 2
      ? Hv
      : Cr.has(e)
      ? e.startsWith("scale")
        ? Fv(t[1])
        : _v
      : Bv;
function Uv({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...d
}) {
  return !!Object.keys(d).length;
}
function ad(e, t) {
  return e[t] || e.default || e;
}
const Wv = (e) => e !== null;
function Ya(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Wv),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
let As;
function Zv() {
  As = void 0;
}
const In = {
    now: () => (
      As === void 0 &&
        In.set(
          be.isProcessing || Og.useManualTiming
            ? be.timestamp
            : performance.now()
        ),
      As
    ),
    set: (e) => {
      (As = e), queueMicrotask(Zv);
    },
  },
  Up = (e) => /^0[^.\s]+$/u.test(e);
function Kv(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Up(e)
    : !0;
}
let fu = Oe;
const Wp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Gv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function qv(e) {
  const t = Gv.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Zp(e, t, n = 1) {
  const [r, i] = qv(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Wp(s) ? parseFloat(s) : s;
  }
  return J1(i) ? Zp(i, t, n + 1) : i;
}
const Yv = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  y0 = (e) => e === fi || e === O,
  x0 = (e, t) => parseFloat(e.split(", ")[t]),
  w0 =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return x0(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? x0(o[1], e) : 0;
      }
    },
  Qv = new Set(["x", "y", "z"]),
  Xv = Ao.filter((e) => !Qv.has(e));
function Jv(e) {
  const t = [];
  return (
    Xv.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const ai = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: w0(4, 13),
  y: w0(5, 14),
};
ai.translateX = ai.x;
ai.translateY = ai.y;
const Kp = (e) => (t) => t.test(e),
  ey = { test: (e) => e === "auto", parse: (e) => e },
  Gp = [fi, O, _t, mn, sv, ov, ey],
  C0 = (e) => Gp.find(Kp(e)),
  cr = new Set();
let hu = !1,
  pu = !1;
function qp() {
  if (pu) {
    const e = Array.from(cr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = Jv(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (pu = !1), (hu = !1), cr.forEach((e) => e.complete()), cr.clear();
}
function Yp() {
  cr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (pu = !0);
  });
}
function ty() {
  Yp(), qp();
}
class ld {
  constructor(t, n, r, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (cr.add(this), hu || ((hu = !0), Q.read(Yp), Q.resolveKeyframes(qp)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      cr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), cr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const cd = (e, t) => (n) =>
    !!(
      (Io(n) && iv.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Qp = (e, t, n) => (r) => {
    if (!Io(r)) return r;
    const [i, o, s, a] = r.match(ed);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  ny = (e) => Vn(0, 255, e),
  Ul = { ...fi, transform: (e) => Math.round(ny(e)) },
  ir = {
    test: cd("rgb", "red"),
    parse: Qp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ul.transform(e) +
      ", " +
      Ul.transform(t) +
      ", " +
      Ul.transform(n) +
      ", " +
      Wi(Ui.transform(r)) +
      ")",
  };
function ry(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const mu = { test: cd("#"), parse: ry, transform: ir.transform },
  Br = {
    test: cd("hsl", "hue"),
    parse: Qp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      _t.transform(Wi(t)) +
      ", " +
      _t.transform(Wi(n)) +
      ", " +
      Wi(Ui.transform(r)) +
      ")",
  },
  Ie = {
    test: (e) => ir.test(e) || mu.test(e) || Br.test(e),
    parse: (e) =>
      ir.test(e) ? ir.parse(e) : Br.test(e) ? Br.parse(e) : mu.parse(e),
    transform: (e) =>
      Io(e) ? e : e.hasOwnProperty("red") ? ir.transform(e) : Br.transform(e),
  };
function iy(e) {
  var t, n;
  return (
    isNaN(e) &&
    Io(e) &&
    (((t = e.match(ed)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(rv)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Xp = "number",
  Jp = "color",
  oy = "var",
  sy = "var(",
  k0 = "${}",
  ay =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function vo(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      ay,
      (l) => (
        Ie.test(l)
          ? (r.color.push(o), i.push(Jp), n.push(Ie.parse(l)))
          : l.startsWith(sy)
          ? (r.var.push(o), i.push(oy), n.push(l))
          : (r.number.push(o), i.push(Xp), n.push(parseFloat(l))),
        ++o,
        k0
      )
    )
    .split(k0);
  return { values: n, split: a, indexes: r, types: i };
}
function e6(e) {
  return vo(e).values;
}
function t6(e) {
  const { split: t, types: n } = vo(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === Xp
          ? (o += Wi(i[s]))
          : a === Jp
          ? (o += Ie.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const ly = (e) => (typeof e == "number" ? 0 : e);
function cy(e) {
  const t = e6(e);
  return t6(e)(t.map(ly));
}
const _n = {
    test: iy,
    parse: e6,
    createTransformer: t6,
    getAnimatableNone: cy,
  },
  uy = new Set(["brightness", "contrast", "saturate", "opacity"]);
function dy(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(ed) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = uy.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const fy = /\b([a-z-]*)\(.*?\)/gu,
  gu = {
    ..._n,
    getAnimatableNone: (e) => {
      const t = e.match(fy);
      return t ? t.map(dy).join(" ") : e;
    },
  },
  hy = {
    ...bp,
    color: Ie,
    backgroundColor: Ie,
    outlineColor: Ie,
    fill: Ie,
    stroke: Ie,
    borderColor: Ie,
    borderTopColor: Ie,
    borderRightColor: Ie,
    borderBottomColor: Ie,
    borderLeftColor: Ie,
    filter: gu,
    WebkitFilter: gu,
  },
  ud = (e) => hy[e];
function n6(e, t) {
  let n = ud(e);
  return (
    n !== gu && (n = _n), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const py = new Set(["auto", "none", "0"]);
function my(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !py.has(o) && vo(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = n6(n, i);
}
class r6 extends ld {
  constructor(t, n, r, i) {
    super(t, n, r, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && ((c = c.trim()), J1(c))) {
        const d = Zp(c, n.current);
        d !== void 0 && (t[l] = d),
          l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !Yv.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = C0(i),
      a = C0(o);
    if (s !== a)
      if (y0(s) && y0(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) Kv(t[i]) && r.push(i);
    r.length && my(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ai[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      a = i[s];
    (i[s] = ai[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, c]) => {
          n.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function i6(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const E0 = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (_n.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function gy(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function vy(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = E0(i, t),
    a = E0(o, t);
  return !s || !a ? !1 : gy(e) || (n === "spring" && r);
}
class o6 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && ty(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: c,
    } = this.options;
    if (!c && !vy(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        l == null || l(Ya(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...d }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function s6(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const yy = 5;
function a6(e, t, n) {
  const r = Math.max(t - yy, 0);
  return s6(n - e(r), t - r);
}
const Wl = 0.001,
  xy = 0.01,
  wy = 10,
  Cy = 0.05,
  ky = 1;
function Ey({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t;
  (s = Vn(Cy, ky, s)),
    (e = Vn(xy, wy, Xt(e))),
    s < 1
      ? ((i = (c) => {
          const d = c * s,
            f = d * e,
            h = d - n,
            g = vu(c, s),
            w = Math.exp(-f);
          return Wl - (h / g) * w;
        }),
        (o = (c) => {
          const f = c * s * e,
            h = f * n + n,
            g = Math.pow(s, 2) * Math.pow(c, 2) * e,
            w = Math.exp(-f),
            v = vu(Math.pow(c, 2), s);
          return ((-i(c) + Wl > 0 ? -1 : 1) * ((h - g) * w)) / v;
        }))
      : ((i = (c) => {
          const d = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -Wl + d * f;
        }),
        (o = (c) => {
          const d = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return d * f;
        }));
  const a = 5 / e,
    l = Ty(i, o, a);
  if (((e = An(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
  }
}
const Sy = 12;
function Ty(e, t, n) {
  let r = n;
  for (let i = 1; i < Sy; i++) r = r - e(r) / t(r);
  return r;
}
function vu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Ny = ["duration", "bounce"],
  Ly = ["stiffness", "damping", "mass"];
function S0(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function by(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!S0(e, Ly) && S0(e, Ny)) {
    const n = Ey(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function l6({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: h,
    } = by({ ...r, velocity: -Xt(r.velocity || 0) }),
    g = f || 0,
    w = l / (2 * Math.sqrt(a * c)),
    v = o - i,
    k = Xt(Math.sqrt(a / c)),
    m = Math.abs(v) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let y;
  if (w < 1) {
    const x = vu(k, w);
    y = (C) => {
      const E = Math.exp(-w * k * C);
      return (
        o - E * (((g + w * k * v) / x) * Math.sin(x * C) + v * Math.cos(x * C))
      );
    };
  } else if (w === 1) y = (x) => o - Math.exp(-k * x) * (v + (g + k * v) * x);
  else {
    const x = k * Math.sqrt(w * w - 1);
    y = (C) => {
      const E = Math.exp(-w * k * C),
        T = Math.min(x * C, 300);
      return (
        o - (E * ((g + w * k * v) * Math.sinh(T) + x * v * Math.cosh(T))) / x
      );
    };
  }
  return {
    calculatedDuration: (h && d) || null,
    next: (x) => {
      const C = y(x);
      if (h) s.done = x >= d;
      else {
        let E = g;
        x !== 0 && (w < 1 ? (E = a6(y, x, C)) : (E = 0));
        const T = Math.abs(E) <= n,
          N = Math.abs(o - C) <= t;
        s.done = T && N;
      }
      return (s.value = s.done ? o : C), s;
    },
  };
}
function T0({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: d,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    g = (S) => (a !== void 0 && S < a) || (l !== void 0 && S > l),
    w = (S) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - S) < Math.abs(l - S)
        ? a
        : l;
  let v = n * t;
  const k = f + v,
    m = s === void 0 ? k : s(k);
  m !== k && (v = m - f);
  const y = (S) => -v * Math.exp(-S / r),
    x = (S) => m + y(S),
    C = (S) => {
      const P = y(S),
        b = x(S);
      (h.done = Math.abs(P) <= c), (h.value = h.done ? m : b);
    };
  let E, T;
  const N = (S) => {
    g(h.value) &&
      ((E = S),
      (T = l6({
        keyframes: [h.value, w(h.value)],
        velocity: a6(x, S, h.value),
        damping: i,
        stiffness: o,
        restDelta: c,
        restSpeed: d,
      })));
  };
  return (
    N(0),
    {
      calculatedDuration: null,
      next: (S) => {
        let P = !1;
        return (
          !T && E === void 0 && ((P = !0), C(S), N(S)),
          E !== void 0 && S >= E ? T.next(S - E) : (!P && C(S), h)
        );
      },
    }
  );
}
const c6 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Py = 1e-7,
  My = 12;
function jy(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = c6(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > Py && ++a < My);
  return s;
}
function $o(e, t, n, r) {
  if (e === t && n === r) return Oe;
  const i = (o) => jy(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : c6(i(o), t, r));
}
const Ry = $o(0.42, 0, 1, 1),
  Ay = $o(0, 0, 0.58, 1),
  u6 = $o(0.42, 0, 0.58, 1),
  Iy = (e) => Array.isArray(e) && typeof e[0] != "number",
  d6 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  f6 = (e) => (t) => 1 - e(1 - t),
  dd = (e) => 1 - Math.sin(Math.acos(e)),
  h6 = f6(dd),
  Dy = d6(dd),
  p6 = $o(0.33, 1.53, 0.69, 0.99),
  fd = f6(p6),
  $y = d6(fd),
  Oy = (e) =>
    (e *= 2) < 1 ? 0.5 * fd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  N0 = {
    linear: Oe,
    easeIn: Ry,
    easeInOut: u6,
    easeOut: Ay,
    circIn: dd,
    circInOut: Dy,
    circOut: h6,
    backIn: fd,
    backInOut: $y,
    backOut: p6,
    anticipate: Oy,
  },
  L0 = (e) => {
    if (Array.isArray(e)) {
      fu(e.length === 4);
      const [t, n, r, i] = e;
      return $o(t, n, r, i);
    } else if (typeof e == "string") return fu(N0[e] !== void 0), N0[e];
    return e;
  },
  yo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  ue = (e, t, n) => e + (t - e) * n;
function Zl(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Vy({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Zl(l, a, e + 1 / 3)), (o = Zl(l, a, e)), (s = Zl(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function ha(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Kl = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  _y = [mu, ir, Br],
  Fy = (e) => _y.find((t) => t.test(e));
function b0(e) {
  const t = Fy(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Br && (n = Vy(n)), n;
}
const P0 = (e, t) => {
    const n = b0(e),
      r = b0(t);
    if (!n || !r) return ha(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = Kl(n.red, r.red, o)),
      (i.green = Kl(n.green, r.green, o)),
      (i.blue = Kl(n.blue, r.blue, o)),
      (i.alpha = ue(n.alpha, r.alpha, o)),
      ir.transform(i)
    );
  },
  yu = new Set(["none", "hidden"]);
function Hy(e, t) {
  return yu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function By(e, t) {
  return (n) => ue(e, t, n);
}
function hd(e) {
  return typeof e == "number"
    ? By
    : typeof e == "string"
    ? J1(e)
      ? ha
      : Ie.test(e)
      ? P0
      : Wy
    : Array.isArray(e)
    ? m6
    : typeof e == "object"
    ? Ie.test(e)
      ? P0
      : zy
    : ha;
}
function m6(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => hd(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function zy(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = hd(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function Uy(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
const Wy = (e, t) => {
  const n = _n.createTransformer(t),
    r = vo(e),
    i = vo(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (yu.has(e) && !i.values.length) || (yu.has(t) && !r.values.length)
      ? Hy(e, t)
      : Qt(m6(Uy(r, i), i.values), n)
    : ha(e, t);
};
function g6(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? ue(e, t, n)
    : hd(e)(e, t);
}
function Zy(e, t, n) {
  const r = [],
    i = n || g6,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Oe : t;
      a = Qt(l, a);
    }
    r.push(a);
  }
  return r;
}
function Ky(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((fu(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = Zy(t, r, i),
    a = s.length,
    l = (c) => {
      let d = 0;
      if (a > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = yo(e[d], e[d + 1], c);
      return s[d](f);
    };
  return n ? (c) => l(Vn(e[0], e[o - 1], c)) : l;
}
function Gy(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = yo(0, t, r);
    e.push(ue(n, 1, i));
  }
}
function qy(e) {
  const t = [0];
  return Gy(t, e.length - 1), t;
}
function Yy(e, t) {
  return e.map((n) => n * t);
}
function Qy(e, t) {
  return e.map(() => t || u6).splice(0, e.length - 1);
}
function pa({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Iy(r) ? r.map(L0) : L0(r),
    o = { done: !1, value: t[0] },
    s = Yy(n && n.length === t.length ? n : qy(t), e),
    a = Ky(s, t, { ease: Array.isArray(i) ? i : Qy(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const M0 = 2e4;
function Xy(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < M0; ) (t += n), (r = e.next(t));
  return t >= M0 ? 1 / 0 : t;
}
const Jy = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Q.update(t, !0),
      stop: () => on(t),
      now: () => (be.isProcessing ? be.timestamp : In.now()),
    };
  },
  e9 = { decay: T0, inertia: T0, tween: pa, keyframes: pa, spring: l6 },
  t9 = (e) => e / 100;
class pd extends o6 {
  constructor({ KeyframeResolver: t = ld, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: r, motionValue: i, keyframes: o } = this.options,
      s = (a, l) => this.onKeyframesResolved(a, l);
    r && i && i.owner
      ? (this.resolver = i.owner.resolveKeyframes(o, s, r, i))
      : (this.resolver = new t(o, s, r, i)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      a = e9[n] || pa;
    let l, c;
    a !== pa &&
      typeof t[0] != "number" &&
      ((l = Qt(t9, g6(t[0], t[1]))), (t = [0, 100]));
    const d = a({ ...this.options, keyframes: t });
    o === "mirror" &&
      (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      d.calculatedDuration === null && (d.calculatedDuration = Xy(d));
    const { calculatedDuration: f } = d,
      h = f + i,
      g = h * (r + 1) - i;
    return {
      generator: d,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: h,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: S } = this.options;
      return { done: !0, value: S[S.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: c,
      totalDuration: d,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: h,
      repeat: g,
      repeatType: w,
      repeatDelay: v,
      onUpdate: k,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - d / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      y = this.speed >= 0 ? m < 0 : m > d;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = d);
    let x = this.currentTime,
      C = o;
    if (g) {
      const S = Math.min(this.currentTime, d) / f;
      let P = Math.floor(S),
        b = S % 1;
      !b && S >= 1 && (b = 1),
        b === 1 && P--,
        (P = Math.min(P, g + 1)),
        !!(P % 2) &&
          (w === "reverse"
            ? ((b = 1 - b), v && (b -= v / f))
            : w === "mirror" && (C = s)),
        (x = Vn(0, 1, b) * f);
    }
    const E = y ? { done: !1, value: l[0] } : C.next(x);
    a && (E.value = a(E.value));
    let { done: T } = E;
    !y &&
      c !== null &&
      (T = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const N =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && T));
    return (
      N && i !== void 0 && (E.value = Ya(l, this.options, i)),
      k && k(E.value),
      N && this.finish(),
      E
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Xt(t.calculatedDuration) : 0;
  }
  get time() {
    return Xt(this.currentTime);
  }
  set time(t) {
    (t = An(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Xt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = Jy, onPlay: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = r),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const v6 = (e) => Array.isArray(e) && typeof e[0] == "number";
function y6(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in md) ||
    v6(e) ||
    (Array.isArray(e) && e.every(y6))
  );
}
const Ri = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  md = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ri([0, 0.65, 0.55, 1]),
    circOut: Ri([0.55, 0, 1, 0.45]),
    backIn: Ri([0.31, 0.01, 0.66, -0.59]),
    backOut: Ri([0.33, 1.53, 0.69, 0.99]),
  };
function n9(e) {
  return x6(e) || md.easeOut;
}
function x6(e) {
  if (e) return v6(e) ? Ri(e) : Array.isArray(e) ? e.map(n9) : md[e];
}
function r9(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = x6(a);
  return (
    Array.isArray(d) && (c.easing = d),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const i9 = i6(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  o9 = new Set(["opacity", "clipPath", "filter", "transform"]),
  ma = 10,
  s9 = 2e4;
function a9(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !y6(e.ease);
}
function l9(e, t) {
  const n = new pd({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < s9; ) (r = n.sample(o)), i.push(r.value), (o += ma);
  return { times: void 0, keyframes: i, duration: o - ma, ease: "linear" };
}
class j0 extends o6 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: i } = this.options;
    (this.resolver = new r6(i, (o, s) => this.onKeyframesResolved(o, s), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: o,
      ease: s,
      type: a,
      motionValue: l,
      name: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (a9(this.options)) {
      const { onComplete: f, onUpdate: h, motionValue: g, ...w } = this.options,
        v = l9(t, w);
      (t = v.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = v.duration),
        (o = v.times),
        (s = v.ease),
        (a = "keyframes");
    }
    const d = r9(l.owner.current, c, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: s,
    });
    return (
      (d.startTime = In.now()),
      this.pendingTimeline
        ? ((d.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options;
            l.set(Ya(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: d, duration: i, times: o, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Xt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Xt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = An(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Oe;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return Oe;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: a,
    } = t;
    if (!(n.playState === "idle" || n.playState === "finished")) {
      if (this.time) {
        const {
            motionValue: l,
            onUpdate: c,
            onComplete: d,
            ...f
          } = this.options,
          h = new pd({
            ...f,
            keyframes: r,
            duration: i,
            type: o,
            ease: s,
            times: a,
            isGenerator: !0,
          }),
          g = An(this.time);
        l.setWithVelocity(h.sample(g - ma).value, h.sample(g).value, ma);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: a,
    } = t;
    return (
      i9() &&
      r &&
      o9.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
function c9(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t,
      s = (i === null ? 0 : i.value) / 100;
    n !== s && e(s), (n = s);
  };
  return Q.update(r, !0), () => on(r);
}
const u9 = i6(() => window.ScrollTimeline !== void 0);
class d9 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (u9() && r.attachTimeline) r.attachTimeline(t);
      else
        return (
          r.pause(),
          c9((i) => {
            r.time = r.duration * i;
          }, t)
        );
    });
    return () => {
      n.forEach((r, i) => {
        r && r(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const gd =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const a = ad(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - An(l);
    let d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (h) => {
        t.set(h), a.onUpdate && a.onUpdate(h);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    Uv(a) || (d = { ...d, ...zv(e, d) }),
      d.duration && (d.duration = An(d.duration)),
      d.repeatDelay && (d.repeatDelay = An(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        ((d.duration = 0), d.delay === 0 && (f = !0)),
      f && !o && t.get() !== void 0)
    ) {
      const h = Ya(d.keyframes, a);
      if (h !== void 0)
        return (
          Q.update(() => {
            d.onUpdate(h), d.onComplete();
          }),
          new d9([])
        );
    }
    return !o && j0.supports(d) ? new j0(d) : new pd(d);
  };
function ga(e) {
  return !!($e(e) && e.add);
}
function vd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function yd(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class xd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return vd(this.subscriptions, t), () => yd(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const R0 = 30,
  f9 = (e) => !isNaN(parseFloat(e));
class h9 {
  constructor(t, n = {}) {
    (this.version = "11.2.10"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = In.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = In.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = f9(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new xd());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Q.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = In.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > R0
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, R0);
    return s6(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function xo(e, t) {
  return new h9(e, t);
}
function p9(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, xo(n));
}
function m9(e, t) {
  const n = qa(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = wv(o[s]);
    p9(e, s, a);
  }
}
function w6(e) {
  return e.getProps()[Cp];
}
function g9({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function C6(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  const c = e.getValue("willChange");
  r && (s = r);
  const d = [],
    f = i && e.animationState && e.animationState.getState()[i];
  for (const h in l) {
    const g = e.getValue(
        h,
        (o = e.latestValues[h]) !== null && o !== void 0 ? o : null
      ),
      w = l[h];
    if (w === void 0 || (f && g9(f, h))) continue;
    const v = { delay: n, elapsed: 0, ...ad(s || {}, h) };
    let k = !1;
    if (window.HandoffAppearAnimations) {
      const y = w6(e);
      if (y) {
        const x = window.HandoffAppearAnimations(y, h, g, Q);
        x !== null && ((v.elapsed = x), (k = !0));
      }
    }
    g.start(
      gd(h, g, w, e.shouldReduceMotion && Cr.has(h) ? { type: !1 } : v, e, k)
    );
    const m = g.animation;
    m && (ga(c) && (c.add(h), m.then(() => c.remove(h))), d.push(m));
  }
  return (
    a &&
      Promise.all(d).then(() => {
        Q.update(() => {
          a && m9(e, a);
        });
      }),
    d
  );
}
function xu(e, t, n = {}) {
  var r;
  const i = qa(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(C6(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: f,
              staggerDirection: h,
            } = o;
            return v9(e, t, d + c, f, h, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [c, d] = l === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => d());
  } else return Promise.all([s(), a(n.delay)]);
}
function v9(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(y9)
      .forEach((c, d) => {
        c.notify("AnimationStart", t),
          s.push(
            xu(c, t, { ...o, delay: n + l(d) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function y9(e, t) {
  return e.sortNodePosition(t);
}
function x9(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => xu(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = xu(e, t, n);
  else {
    const i = typeof t == "function" ? qa(e, t, n.custom) : t;
    r = Promise.all(C6(e, i, n));
  }
  return r.then(() => {
    Q.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const w9 = [...q1].reverse(),
  C9 = q1.length;
function k9(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => x9(e, n, r)));
}
function E9(e) {
  let t = k9(e);
  const n = T9();
  let r = !0;
  const i = (l) => (c, d) => {
    var f;
    const h = qa(
      e,
      d,
      l === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    );
    if (h) {
      const { transition: g, transitionEnd: w, ...v } = h;
      c = { ...c, ...v, ...w };
    }
    return c;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      h = new Set();
    let g = {},
      w = 1 / 0;
    for (let k = 0; k < C9; k++) {
      const m = w9[k],
        y = n[m],
        x = c[m] !== void 0 ? c[m] : d[m],
        C = mo(x),
        E = m === l ? y.isActive : null;
      E === !1 && (w = k);
      let T = x === d[m] && x !== c[m] && C;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (y.protectedKeys = { ...g }),
        (!y.isActive && E === null) ||
          (!x && !y.prevProp) ||
          Za(x) ||
          typeof x == "boolean")
      )
        continue;
      let S =
          S9(y.prevProp, x) ||
          (m === l && y.isActive && !T && C) ||
          (k > w && C),
        P = !1;
      const b = Array.isArray(x) ? x : [x];
      let I = b.reduce(i(m), {});
      E === !1 && (I = {});
      const { prevResolvedValues: V = {} } = y,
        z = { ...V, ...I },
        _ = (B) => {
          (S = !0),
            h.has(B) && ((P = !0), h.delete(B)),
            (y.needsAnimating[B] = !0);
          const Z = e.getValue(B);
          Z && (Z.liveStyle = !1);
        };
      for (const B in z) {
        const Z = I[B],
          H = V[B];
        if (g.hasOwnProperty(B)) continue;
        let j = !1;
        uu(Z) && uu(H) ? (j = !zp(Z, H)) : (j = Z !== H),
          j
            ? Z != null
              ? _(B)
              : h.add(B)
            : Z !== void 0 && h.has(B)
            ? _(B)
            : (y.protectedKeys[B] = !0);
      }
      (y.prevProp = x),
        (y.prevResolvedValues = I),
        y.isActive && (g = { ...g, ...I }),
        r && e.blockInitialAnimation && (S = !1),
        S &&
          (!T || P) &&
          f.push(...b.map((B) => ({ animation: B, options: { type: m } })));
    }
    if (h.size) {
      const k = {};
      h.forEach((m) => {
        const y = e.getBaseTarget(m),
          x = e.getValue(m);
        x && (x.liveStyle = !0), (k[m] = y ?? null);
      }),
        f.push({ animation: k });
    }
    let v = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    );
  }
  function a(l, c) {
    var d;
    if (n[l].isActive === c) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var g;
        return (g = h.animationState) === null || g === void 0
          ? void 0
          : g.setActive(l, c);
      }),
      (n[l].isActive = c);
    const f = s(l);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function S9(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !zp(t, e) : !1;
}
function Gn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function T9() {
  return {
    animate: Gn(!0),
    whileInView: Gn(),
    whileHover: Gn(),
    whileTap: Gn(),
    whileDrag: Gn(),
    whileFocus: Gn(),
    exit: Gn(),
  };
}
class N9 extends Wn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = E9(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Za(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let L9 = 0;
class b9 extends Wn {
  constructor() {
    super(...arguments), (this.id = L9++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const P9 = { animation: { Feature: N9 }, exit: { Feature: b9 } },
  A0 = (e, t) => Math.abs(e - t);
function M9(e, t) {
  const n = A0(e.x, t.x),
    r = A0(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class k6 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = ql(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          g = M9(f.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !g) return;
        const { point: w } = f,
          { timestamp: v } = be;
        this.history.push({ ...w, timestamp: v });
        const { onStart: k, onMove: m } = this.handlers;
        h ||
          (k && k(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, h) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Gl(h, this.transformPagePoint)),
          Q.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: g, onSessionEnd: w, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = ql(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Gl(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(f, k), w && w(f, k);
      }),
      !Vp(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = Ga(t),
      a = Gl(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = be;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: d } = n;
    d && d(t, ql(a, this.history)),
      (this.removeListeners = Qt(
        Yt(this.contextWindow, "pointermove", this.handlePointerMove),
        Yt(this.contextWindow, "pointerup", this.handlePointerUp),
        Yt(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), on(this.updatePoint);
  }
}
function Gl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function I0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ql({ point: e }, t) {
  return {
    point: e,
    delta: I0(e, E6(t)),
    offset: I0(e, j9(t)),
    velocity: R9(t, 0.1),
  };
}
function j9(e) {
  return e[0];
}
function E6(e) {
  return e[e.length - 1];
}
function R9(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = E6(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > An(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = Xt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function it(e) {
  return e.max - e.min;
}
function wu(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function D0(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ue(t.min, t.max, e.origin)),
    (e.scale = it(n) / it(t)),
    (wu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ue(n.min, n.max, e.origin) - e.originPoint),
    (wu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Zi(e, t, n, r) {
  D0(e.x, t.x, n.x, r ? r.originX : void 0),
    D0(e.y, t.y, n.y, r ? r.originY : void 0);
}
function $0(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + it(t));
}
function A9(e, t, n) {
  $0(e.x, t.x, n.x), $0(e.y, t.y, n.y);
}
function O0(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + it(t));
}
function Ki(e, t, n) {
  O0(e.x, t.x, n.x), O0(e.y, t.y, n.y);
}
function I9(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ue(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ue(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function V0(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function D9(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: V0(e.x, n, i), y: V0(e.y, t, r) };
}
function _0(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function $9(e, t) {
  return { x: _0(e.x, t.x), y: _0(e.y, t.y) };
}
function O9(e, t) {
  let n = 0.5;
  const r = it(e),
    i = it(t);
  return (
    i > r
      ? (n = yo(t.min, t.max - r, e.min))
      : r > i && (n = yo(e.min, e.max - i, t.min)),
    Vn(0, 1, n)
  );
}
function V9(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Cu = 0.35;
function _9(e = Cu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Cu),
    { x: F0(e, "left", "right"), y: F0(e, "top", "bottom") }
  );
}
function F0(e, t, n) {
  return { min: H0(e, t), max: H0(e, n) };
}
function H0(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const B0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  zr = () => ({ x: B0(), y: B0() }),
  z0 = () => ({ min: 0, max: 0 }),
  pe = () => ({ x: z0(), y: z0() });
function dt(e) {
  return [e("x"), e("y")];
}
function S6({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function F9({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function H9(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Yl(e) {
  return e === void 0 || e === 1;
}
function ku({ scale: e, scaleX: t, scaleY: n }) {
  return !Yl(e) || !Yl(t) || !Yl(n);
}
function Qn(e) {
  return (
    ku(e) ||
    T6(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function T6(e) {
  return U0(e.x) || U0(e.y);
}
function U0(e) {
  return e && e !== "0%";
}
function va(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function W0(e, t, n, r, i) {
  return i !== void 0 && (e = va(e, i, r)), va(e, n, r) + t;
}
function Eu(e, t = 0, n = 1, r, i) {
  (e.min = W0(e.min, t, n, r, i)), (e.max = W0(e.max, t, n, r, i));
}
function N6(e, { x: t, y: n }) {
  Eu(e.x, t.translate, t.scale, t.originPoint),
    Eu(e.y, n.translate, n.scale, n.originPoint);
}
function B9(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Ur(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), N6(e, s)),
      r && Qn(o.latestValues) && Ur(e, o.latestValues));
  }
  (t.x = Z0(t.x)), (t.y = Z0(t.y));
}
function Z0(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function yn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function K0(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = ue(e.min, e.max, o);
  Eu(e, t[n], t[r], s, t.scale);
}
const z9 = ["x", "scaleX", "originX"],
  U9 = ["y", "scaleY", "originY"];
function Ur(e, t) {
  K0(e.x, t, z9), K0(e.y, t, U9);
}
function L6(e, t) {
  return S6(H9(e.getBoundingClientRect(), t));
}
function W9(e, t, n) {
  const r = L6(e, n),
    { scroll: i } = t;
  return i && (yn(r.x, i.offset.x), yn(r.y, i.offset.y)), r;
}
const b6 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Z9 = new WeakMap();
class K9 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = pe()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ga(d, "page").point);
      },
      o = (d, f) => {
        const { drag: h, dragPropagation: g, onDragStart: w } = this.getProps();
        if (
          h &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Fp(h)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          dt((k) => {
            let m = this.getAxisMotionValue(k).get() || 0;
            if (_t.test(m)) {
              const { projection: y } = this.visualElement;
              if (y && y.layout) {
                const x = y.layout.layoutBox[k];
                x && (m = it(x) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[k] = m;
          }),
          w && Q.postRender(() => w(d, f));
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      s = (d, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: g,
          onDirectionLock: w,
          onDrag: v,
        } = this.getProps();
        if (!h && !this.openGlobalLock) return;
        const { offset: k } = f;
        if (g && this.currentDirection === null) {
          (this.currentDirection = G9(k)),
            this.currentDirection !== null && w && w(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, k),
          this.updateAxis("y", f.point, k),
          this.visualElement.render(),
          v && v(d, f);
      },
      a = (d, f) => this.stop(d, f),
      l = () =>
        dt((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new k6(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: b6(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && Q.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !ds(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = I9(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && Hr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = D9(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = _9(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        dt((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = V9(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Hr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = W9(r, i.root, this.visualElement.getTransformPagePoint());
    let s = $9(i.layout.layoutBox, o);
    if (n) {
      const a = n(F9(s));
      (this.hasMutatedConstraints = !!a), a && (s = S6(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = dt((d) => {
        if (!ds(d, n, this.currentDirection)) return;
        let f = (l && l[d]) || {};
        s && (f = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          w = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: h,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(d, w);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(gd(t, r, 0, n, this.visualElement));
  }
  stopAnimation() {
    dt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    dt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    dt((n) => {
      const { drag: r } = this.getProps();
      if (!ds(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - ue(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Hr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    dt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = O9({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      dt((s) => {
        if (!ds(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: c } = this.constraints[s];
        a.set(ue(l, c, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Z9.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Yt(t, "pointerdown", (l) => {
        const { drag: c, dragListener: d = !0 } = this.getProps();
        c && d && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Hr(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = Gt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (dt((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += l[d].translate),
                f.set(f.get() + l[d].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Cu,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function ds(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function G9(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class q9 extends Wn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Oe),
      (this.removeListeners = Oe),
      (this.controls = new K9(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Oe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const G0 = (e) => (t, n) => {
  e && Q.postRender(() => e(t, n));
};
class Y9 extends Wn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Oe);
  }
  onPointerDown(t) {
    this.session = new k6(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: b6(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: G0(t),
      onStart: G0(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && Q.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Yt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Q9() {
  const e = p.useContext(Wa);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = p.useId();
  return p.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Is = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function q0(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Ni = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (O.test(e)) e = parseFloat(e);
        else return e;
      const n = q0(e, t.target.x),
        r = q0(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  X9 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = _n.parse(e);
      if (i.length > 5) return r;
      const o = _n.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const c = ue(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= c),
        typeof i[3 + s] == "number" && (i[3 + s] /= c),
        o(i)
      );
    },
  };
class J9 extends p.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    Yg(ex),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Is.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              Q.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      G1.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function P6(e) {
  const [t, n] = Q9(),
    r = p.useContext(Q1);
  return u.jsx(J9, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: p.useContext(Sp),
    isPresent: t,
    safeToRemove: n,
  });
}
const ex = {
    borderRadius: {
      ...Ni,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Ni,
    borderTopRightRadius: Ni,
    borderBottomLeftRadius: Ni,
    borderBottomRightRadius: Ni,
    boxShadow: X9,
  },
  M6 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  tx = M6.length,
  Y0 = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Q0 = (e) => typeof e == "number" || O.test(e);
function nx(e, t, n, r, i, o) {
  i
    ? ((e.opacity = ue(0, n.opacity !== void 0 ? n.opacity : 1, rx(r))),
      (e.opacityExit = ue(t.opacity !== void 0 ? t.opacity : 1, 0, ix(r))))
    : o &&
      (e.opacity = ue(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < tx; s++) {
    const a = `border${M6[s]}Radius`;
    let l = X0(t, a),
      c = X0(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || Q0(l) === Q0(c)
        ? ((e[a] = Math.max(ue(Y0(l), Y0(c), r), 0)),
          (_t.test(c) || _t.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = ue(t.rotate || 0, n.rotate || 0, r));
}
function X0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const rx = j6(0, 0.5, h6),
  ix = j6(0.5, 0.95, Oe);
function j6(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(yo(e, t, r)));
}
function J0(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ut(e, t) {
  J0(e.x, t.x), J0(e.y, t.y);
}
function e2(e, t, n, r, i) {
  return (
    (e -= t), (e = va(e, 1 / n, r)), i !== void 0 && (e = va(e, 1 / i, r)), e
  );
}
function ox(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (_t.test(t) &&
      ((t = parseFloat(t)), (t = ue(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = ue(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = e2(e.min, t, n, a, i)),
    (e.max = e2(e.max, t, n, a, i));
}
function t2(e, t, [n, r, i], o, s) {
  ox(e, t[n], t[r], t[i], t.scale, o, s);
}
const sx = ["x", "scaleX", "originX"],
  ax = ["y", "scaleY", "originY"];
function n2(e, t, n, r) {
  t2(e.x, t, sx, n ? n.x : void 0, r ? r.x : void 0),
    t2(e.y, t, ax, n ? n.y : void 0, r ? r.y : void 0);
}
function r2(e) {
  return e.translate === 0 && e.scale === 1;
}
function R6(e) {
  return r2(e.x) && r2(e.y);
}
function lx(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function A6(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function i2(e) {
  return it(e.x) / it(e.y);
}
class cx {
  constructor() {
    this.members = [];
  }
  add(t) {
    vd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (yd(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function o2(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: d,
      rotateX: f,
      rotateY: h,
      skewX: g,
      skewY: w,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      f && (r += `rotateX(${f}deg) `),
      h && (r += `rotateY(${h}deg) `),
      g && (r += `skewX(${g}deg) `),
      w && (r += `skewY(${w}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const ux = (e, t) => e.depth - t.depth;
class dx {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    vd(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    yd(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(ux),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function fx(e, t) {
  const n = In.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (on(r), e(o - t));
    };
  return Q.read(r, !0), () => on(r);
}
function hx(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function px(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function mx(e, t, n) {
  const r = $e(e) ? e : xo(e);
  return r.start(gd("", r, t, n)), r.animation;
}
const Ql = ["", "X", "Y", "Z"],
  gx = { visibility: "hidden" },
  s2 = 1e3;
let vx = 0;
const Xn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Xl(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function I6(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
  const { visualElement: t } = e.options;
  return t
    ? w6(t)
      ? !0
      : e.parent && !e.parent.hasCheckedOptimisedAppear
      ? I6(e.parent)
      : !1
    : !1;
}
function D6({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = vx++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Xn.totalNodes =
              Xn.resolvedTargetDeltas =
              Xn.recalculatedProjection =
                0),
            this.nodes.forEach(wx),
            this.nodes.forEach(Tx),
            this.nodes.forEach(Nx),
            this.nodes.forEach(Cx),
            hx(Xn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new dx());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new xd()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = px(s)), (this.instance = s);
      const { layoutId: l, layout: c, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = fx(h, 250)),
            Is.hasAnimatedSinceResize &&
              ((Is.hasAnimatedSinceResize = !1), this.nodes.forEach(l2));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          d &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: g,
              layout: w,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || d.getDefaultTransition() || jx,
                { onLayoutAnimationStart: k, onLayoutAnimationComplete: m } =
                  d.getProps(),
                y = !this.targetLayout || !A6(this.targetLayout, w) || g,
                x = !h && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                x ||
                (h && (y || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, x);
                const C = { ...ad(v, "layout"), onPlay: k, onComplete: m };
                (d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((C.delay = 0), (C.type = !1)),
                  this.startAnimation(C);
              } else
                h || l2(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = w;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        on(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Lx),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.HandoffCancelAllAnimations &&
          I6(this) &&
          window.HandoffCancelAllAnimations(),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(a2);
        return;
      }
      this.isUpdating || this.nodes.forEach(Ex),
        (this.isUpdating = !1),
        this.nodes.forEach(Sx),
        this.nodes.forEach(yx),
        this.nodes.forEach(xx),
        this.clearAllSnapshots();
      const a = In.now();
      (be.delta = Vn(0, 1e3 / 60, a - be.timestamp)),
        (be.timestamp = a),
        (be.isProcessing = !0),
        Hl.update.process(be),
        Hl.preRender.process(be),
        Hl.render.process(be),
        (be.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), G1.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(kx), this.sharedNodes.forEach(bx);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Q.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = pe()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !R6(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        d = c !== this.prevTransformTemplateValue;
      s &&
        (a || Qn(this.latestValues) || d) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        Rx(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return pe();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (yn(a.x, l.offset.x), yn(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = pe();
      ut(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l],
          { scroll: d, options: f } = c;
        if (c !== this.root && d && f.layoutScroll) {
          if (d.isRoot) {
            ut(a, s);
            const { scroll: h } = this.root;
            h && (yn(a.x, -h.offset.x), yn(a.y, -h.offset.y));
          }
          yn(a.x, d.offset.x), yn(a.y, d.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = pe();
      ut(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        !a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          Ur(l, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          Qn(d.latestValues) && Ur(l, d.latestValues);
      }
      return Qn(this.latestValues) && Ur(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = pe();
      ut(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Qn(c.latestValues)) continue;
        ku(c.latestValues) && c.updateSnapshot();
        const d = pe(),
          f = c.measurePageBox();
        ut(d, f),
          n2(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d);
      }
      return Qn(this.latestValues) && n2(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== be.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (
          ((this.resolvedRelativeTargetAt = be.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = pe()),
              (this.relativeTargetOrigin = pe()),
              Ki(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              ut(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = pe()), (this.targetWithTransforms = pe())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                A9(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : ut(this.target, this.layout.layoutBox),
                N6(this.target, this.targetDelta))
              : ut(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = pe()),
                (this.relativeTargetOrigin = pe()),
                Ki(this.relativeTargetOrigin, this.target, g.target),
                ut(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Xn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          ku(this.parent.latestValues) ||
          T6(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === be.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || f))
      )
        return;
      ut(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        g = this.treeScale.y;
      B9(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = pe()));
      const { target: w } = a;
      if (!w) {
        this.projectionTransform &&
          ((this.projectionDelta = zr()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = zr()),
        (this.projectionDeltaWithTransform = zr()));
      const v = this.projectionTransform;
      Zi(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
        (this.projectionTransform = o2(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== h ||
          this.treeScale.y !== g) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", w)),
        Xn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        d = { ...this.latestValues },
        f = zr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const h = pe(),
        g = l ? l.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        v = g !== w,
        k = this.getStack(),
        m = !k || k.members.length <= 1,
        y = !!(v && !m && this.options.crossfade === !0 && !this.path.some(Mx));
      this.animationProgress = 0;
      let x;
      (this.mixTargetDelta = (C) => {
        const E = C / 1e3;
        c2(f.x, s.x, E),
          c2(f.y, s.y, E),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ki(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Px(this.relativeTarget, this.relativeTargetOrigin, h, E),
            x && lx(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = pe()),
            ut(x, this.relativeTarget)),
          v &&
            ((this.animationValues = d), nx(d, c, this.latestValues, E, y, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (on(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Q.update(() => {
          (Is.hasAnimatedSinceResize = !0),
            (this.currentAnimation = mx(0, s2, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(s2),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: d,
      } = s;
      if (!(!a || !l || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          $6(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || pe();
          const f = it(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const h = it(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + h);
        }
        ut(a, l),
          Ur(a, d),
          Zi(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new cx()),
        this.sharedNodes.get(s).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && Xl("z", s, c, this.animationValues);
      for (let d = 0; d < Ql.length; d++)
        Xl(`rotate${Ql[d]}`, s, c, this.animationValues),
          Xl(`skew${Ql[d]}`, s, c, this.animationValues);
      s.render();
      for (const d in c)
        s.setStaticValue(d, c[d]),
          this.animationValues && (this.animationValues[d] = c[d]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return gx;
      const c = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = Rs(s == null ? void 0 : s.pointerEvents) || ""),
          (c.transform = d ? d(this.latestValues, "") : "none"),
          c
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Rs(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !Qn(this.latestValues) &&
            ((v.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = o2(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h
        )),
        d && (c.transform = d(h, c.transform));
      const { x: g, y: w } = this.projectionDelta;
      (c.transformOrigin = `${g.origin * 100}% ${w.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (l =
                    (a = h.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : h.opacityExit)
          : (c.opacity =
              f === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                ? h.opacityExit
                : 0);
      for (const v in da) {
        if (h[v] === void 0) continue;
        const { correct: k, applyTo: m } = da[v],
          y = c.transform === "none" ? h[v] : k(h[v], f);
        if (m) {
          const x = m.length;
          for (let C = 0; C < x; C++) c[m[C]] = y;
        } else c[v] = y;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            f === this
              ? Rs(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(a2),
        this.root.sharedNodes.clear();
    }
  };
}
function yx(e) {
  e.updateLayout();
}
function xx(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? dt((f) => {
          const h = s ? n.measuredBox[f] : n.layoutBox[f],
            g = it(h);
          (h.min = r[f].min), (h.max = h.min + g);
        })
      : $6(o, n.layoutBox, r) &&
        dt((f) => {
          const h = s ? n.measuredBox[f] : n.layoutBox[f],
            g = it(r[f]);
          (h.max = h.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const a = zr();
    Zi(a, r, n.layoutBox);
    const l = zr();
    s ? Zi(l, e.applyTransform(i, !0), n.measuredBox) : Zi(l, r, n.layoutBox);
    const c = !R6(a);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: g } = f;
        if (h && g) {
          const w = pe();
          Ki(w, n.layoutBox, h.layoutBox);
          const v = pe();
          Ki(v, r, g.layoutBox),
            A6(w, v) || (d = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = w),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function wx(e) {
  Xn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Cx(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function kx(e) {
  e.clearSnapshot();
}
function a2(e) {
  e.clearMeasurements();
}
function Ex(e) {
  e.isLayoutDirty = !1;
}
function Sx(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function l2(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Tx(e) {
  e.resolveTargetDelta();
}
function Nx(e) {
  e.calcProjection();
}
function Lx(e) {
  e.resetSkewAndRotation();
}
function bx(e) {
  e.removeLeadSnapshot();
}
function c2(e, t, n) {
  (e.translate = ue(t.translate, 0, n)),
    (e.scale = ue(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function u2(e, t, n, r) {
  (e.min = ue(t.min, n.min, r)), (e.max = ue(t.max, n.max, r));
}
function Px(e, t, n, r) {
  u2(e.x, t.x, n.x, r), u2(e.y, t.y, n.y, r);
}
function Mx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const jx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  d2 = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  f2 = d2("applewebkit/") && !d2("chrome/") ? Math.round : Oe;
function h2(e) {
  (e.min = f2(e.min)), (e.max = f2(e.max));
}
function Rx(e) {
  h2(e.x), h2(e.y);
}
function $6(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !wu(i2(t), i2(n), 0.2))
  );
}
const Ax = D6({
    attachResizeListener: (e, t) => Gt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Jl = { current: void 0 },
  O6 = D6({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Jl.current) {
        const e = new Ax({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Jl.current = e);
      }
      return Jl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Ix = {
    pan: { Feature: Y9 },
    drag: { Feature: q9, ProjectionNode: O6, MeasureLayout: P6 },
  },
  Su = { current: null },
  V6 = { current: !1 };
function Dx() {
  if (((V6.current = !0), !!W1))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Su.current = e.matches);
      e.addListener(t), t();
    } else Su.current = !1;
}
function $x(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if ($e(o)) e.addValue(i, o), ga(r) && r.add(i);
    else if ($e(s)) e.addValue(i, xo(o, { owner: e })), ga(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const a = e.getValue(i);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        const a = e.getStaticValue(i);
        e.addValue(i, xo(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const p2 = new WeakMap(),
  Ox = [...Gp, Ie, _n],
  Vx = (e) => Ox.find(Kp(e)),
  _6 = Object.keys(go),
  _x = _6.length,
  m2 = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  Fx = Y1.length;
function F6(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : F6(e.parent);
}
class Hx {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {}
  ) {
    (this.resolveKeyframes = (h, g, w, v) =>
      new this.KeyframeResolver(h, g, w, v, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = ld),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => Q.render(this.render, !1, !0));
    const { latestValues: l, renderState: c } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = Ka(n)),
      (this.isVariantNode = Ep(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in f) {
      const g = f[h];
      l[h] !== void 0 && $e(g) && (g.set(l[h], !1), ga(d) && d.add(h));
    }
  }
  mount(t) {
    (this.current = t),
      p2.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      V6.current || Dx(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Su.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    p2.delete(this.current),
      this.projection && this.projection.unmount(),
      on(this.notifyUpdate),
      on(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features)
      (t = this.features[n]) === null || t === void 0 || t.unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Cr.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && Q.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, a;
    for (let l = 0; l < _x; l++) {
      const c = _6[l],
        {
          isEnabled: d,
          Feature: f,
          ProjectionNode: h,
          MeasureLayout: g,
        } = go[c];
      h && (s = h),
        d(n) &&
          (!this.features[c] && f && (this.features[c] = new f(this)),
          g && (a = g));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      s
    ) {
      const {
        layoutId: l,
        layout: c,
        drag: d,
        dragConstraints: f,
        layoutScroll: h,
        layoutRoot: g,
      } = n;
      (this.projection = new s(
        this.latestValues,
        n["data-framer-portal-id"] ? void 0 : F6(this.parent)
      )),
        this.projection.setOptions({
          layoutId: l,
          layout: c,
          alwaysMeasureLayout: !!d || (f && Hr(f)),
          visualElement: this,
          scheduleRender: () => this.scheduleRender(),
          animationType: typeof c == "string" ? c : "both",
          initialPromotionConfig: o,
          layoutScroll: h,
          layoutRoot: g,
        });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : pe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < m2.length; r++) {
      const i = m2[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = $x(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < Fx; r++) {
      const i = Y1[r],
        o = this.props[i];
      (mo(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = xo(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Wp(i) || Up(i))
          ? (i = parseFloat(i))
          : !Vx(i) && _n.test(n) && (i = n6(t, n)),
        this.setBaseTarget(t, $e(i) ? i.get() : i)),
      $e(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = sd(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !$e(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new xd()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class H6 extends Hx {
  constructor() {
    super(...arguments), (this.KeyframeResolver = r6);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function Bx(e) {
  return window.getComputedStyle(e);
}
class zx extends H6 {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (Cr.has(n)) {
      const r = ud(n);
      return (r && r.default) || 0;
    } else {
      const r = Bx(t),
        i = (Lp(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return L6(t, n);
  }
  build(t, n, r, i) {
    td(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return od(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    $e(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Rp(t, n, r, i);
  }
}
class Ux extends H6 {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Cr.has(n)) {
      const r = ud(n);
      return (r && r.default) || 0;
    }
    return (n = Ap.has(n) ? n : K1(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return pe();
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Dp(t, n, r);
  }
  build(t, n, r, i) {
    rd(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Ip(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = id(t.tagName)), super.mount(t);
  }
}
const Wx = (e, t) =>
    X1(e)
      ? new Ux(t, { enableHardwareAcceleration: !1 })
      : new zx(t, {
          allowProjection: e !== p.Fragment,
          enableHardwareAcceleration: !0,
        }),
  Zx = { layout: { ProjectionNode: O6, MeasureLayout: P6 } },
  Kx = { ...P9, ...Vv, ...Ix, ...Zx },
  xn = Gg((e, t) => Tv(e, t, Kx, Wx));
function B6() {
  const e = p.useRef(!1);
  return (
    Z1(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function Gx() {
  const e = B6(),
    [t, n] = p.useState(0),
    r = p.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [p.useCallback(() => Q.postRender(r), [r]), t];
}
class qx extends p.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Yx({ children: e, isPresent: t }) {
  const n = p.useId(),
    r = p.useRef(null),
    i = p.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = p.useContext(U1);
  return (
    p.useInsertionEffect(() => {
      const { width: s, height: a, top: l, left: c } = i.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      const d = document.createElement("style");
      return (
        o && (d.nonce = o),
        document.head.appendChild(d),
        d.sheet &&
          d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(d);
        }
      );
    }, [t]),
    u.jsx(qx, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: p.cloneElement(e, { ref: r }),
    })
  );
}
const ec = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  const a = $p(Qx),
    l = p.useId(),
    c = p.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (d) => {
          a.set(d, !0);
          for (const f of a.values()) if (!f) return;
          r && r();
        },
        register: (d) => (a.set(d, !1), () => a.delete(d)),
      }),
      o ? [Math.random()] : [n]
    );
  return (
    p.useMemo(() => {
      a.forEach((d, f) => a.set(f, !1));
    }, [n]),
    p.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = u.jsx(Yx, { isPresent: n, children: e })),
    u.jsx(Wa.Provider, { value: c, children: e })
  );
};
function Qx() {
  return new Map();
}
function Xx(e) {
  return p.useEffect(() => () => e(), []);
}
const Jn = (e) => e.key || "";
function Jx(e, t) {
  e.forEach((n) => {
    const r = Jn(n);
    t.set(r, n);
  });
}
function ew(e) {
  const t = [];
  return (
    p.Children.forEach(e, (n) => {
      p.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const er = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: s = "sync",
}) => {
  const a = p.useContext(Q1).forceRender || Gx()[0],
    l = B6(),
    c = ew(e);
  let d = c;
  const f = p.useRef(new Map()).current,
    h = p.useRef(d),
    g = p.useRef(new Map()).current,
    w = p.useRef(!0);
  if (
    (Z1(() => {
      (w.current = !1), Jx(c, g), (h.current = d);
    }),
    Xx(() => {
      (w.current = !0), g.clear(), f.clear();
    }),
    w.current)
  )
    return u.jsx(u.Fragment, {
      children: d.map((y) =>
        u.jsx(
          ec,
          {
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: s,
            children: y,
          },
          Jn(y)
        )
      ),
    });
  d = [...d];
  const v = h.current.map(Jn),
    k = c.map(Jn),
    m = v.length;
  for (let y = 0; y < m; y++) {
    const x = v[y];
    k.indexOf(x) === -1 && !f.has(x) && f.set(x, void 0);
  }
  return (
    s === "wait" && f.size && (d = []),
    f.forEach((y, x) => {
      if (k.indexOf(x) !== -1) return;
      const C = g.get(x);
      if (!C) return;
      const E = v.indexOf(x);
      let T = y;
      if (!T) {
        const N = () => {
          f.delete(x);
          const S = Array.from(g.keys()).filter((P) => !k.includes(P));
          if (
            (S.forEach((P) => g.delete(P)),
            (h.current = c.filter((P) => {
              const b = Jn(P);
              return b === x || S.includes(b);
            })),
            !f.size)
          ) {
            if (l.current === !1) return;
            a(), r && r();
          }
        };
        (T = u.jsx(
          ec,
          {
            isPresent: !1,
            onExitComplete: N,
            custom: t,
            presenceAffectsLayout: o,
            mode: s,
            children: C,
          },
          Jn(C)
        )),
          f.set(x, T);
      }
      d.splice(E, 0, T);
    }),
    (d = d.map((y) => {
      const x = y.key;
      return f.has(x)
        ? y
        : u.jsx(
            ec,
            { isPresent: !0, presenceAffectsLayout: o, mode: s, children: y },
            Jn(y)
          );
    })),
    u.jsx(u.Fragment, {
      children: f.size ? d : d.map((y) => p.cloneElement(y)),
    })
  );
};
function tw({ isOpen: e, setIsOpen: t, resetSelectedComponent: n }) {
  return u.jsx("button", {
    onClick: () => {
      t(!e), e || n();
    },
    className: "z-30 flex-shrink-0 p-3 text-primary dark:text-white",
    children: u.jsx(er, {
      mode: "wait",
      children: e
        ? u.jsx(
            xn.svg,
            {
              initial: { opacity: 1, rotate: 0 },
              animate: { opacity: 1, rotate: 0 },
              exit: { opacity: 1, rotate: 0 },
              transition: { duration: 0.2 },
              width: "30",
              height: "30",
              viewBox: "0 0 15 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: u.jsx("path", {
                d: "M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",
                fill: "currentColor",
              }),
            },
            "close-icon"
          )
        : u.jsx(
            xn.svg,
            {
              initial: { opacity: 1, rotate: 0 },
              animate: { opacity: 1, rotate: 0 },
              exit: { opacity: 1, rotate: 0 },
              transition: { duration: 0.2 },
              width: "30",
              height: "30",
              viewBox: "0 0 15 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: u.jsx("path", {
                d: "M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",
                fill: "currentColor",
              }),
            },
            "burger-icon"
          ),
    }),
  });
}
const Li = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { x: "100%", opacity: 1, transition: { duration: 0.3 } },
  },
  nw = "64px",
  rw = [
    {
      id: 595,
      name: "Business Types",
      icon: "businesstypesicon",
      component: "BusinessTypesNavMobile",
    },
    {
      id: 596,
      name: "Features",
      icon: "featuresicon",
      component: "FeaturedItemsNavMobile",
    },
    {
      id: 597,
      name: "Enterprise",
      icon: "enterpriseicon",
      link: "https://www.vagaro.com/pro/enterprise-business-software",
    },
    {
      id: 598,
      name: "Pricing",
      icon: "pricingicon",
      link: "https://www.vagaro.com/pro/pricing",
    },
    {
      id: 599,
      name: "Contact Us",
      icon: "contactusicon",
      link: "/pro/contact",
    },
    {
      id: 600,
      name: "Support",
      icon: "supporticon",
      component: "SupportItemsNavMobile",
    },
    { id: 601, name: "Blog", icon: "blogicon", link: "/learn" },
    {
      id: 603,
      name: "Book a Service",
      icon: "bookserviceicon",
      link: "https://www.vagaro.com",
    },
    {
      id: 604,
      name: "Log In",
      icon: "login",
      link: "https://www.vagaro.com/Login.aspx",
    },
  ];
function iw() {
  const [e, t] = p.useState(!1),
    [n, r] = p.useState(""),
    [i, o] = p.useState(!1),
    s = (m, y = "") => {
      const x = Ro[m],
        C = jo[x];
      return C ? u.jsx(C, { className: y }) : null;
    },
    [a, l] = p.useState(!0),
    c = p.useRef(null),
    d = () => {
      r("");
    },
    f = () => {
      r(n === "BusinessTypesNavMobile" ? "" : "BusinessTypesNavMobile");
    },
    h = () => {
      r(n === "FeaturedItemsNavMobile" ? "" : "FeaturedItemsNavMobile");
    },
    g = () => {
      r(n === "LocaleItemsNavMobile" ? "" : "LocaleItemsNavMobile");
    },
    w = (m) => {
      r(n === m ? "" : m);
    },
    v = () => {
      const m = c.current ? c.current.offsetTop : 0;
      l(window.scrollY >= m);
    };
  p.useEffect(() => {
    o(n === "BusinessTypesNavMobile");
  }, [n]),
    p.useEffect(() => {
      o(n === "FeaturedItemsNavMobile");
    }, [n]),
    p.useEffect(() => {
      o(n === "SupportItemsNavMobile");
    }, [n]),
    p.useEffect(() => {
      o(n === "LocaleItemsNavMobile");
    }, [n]),
    p.useEffect(() => {
      const m = () => {
        i && (r(""), o(!1));
      };
      return (
        window.addEventListener("popstate", m),
        () => {
          window.removeEventListener("popstate", m);
        }
      );
    }, [i]),
    p.useEffect(
      () => (
        window.addEventListener("scroll", v),
        () => {
          window.removeEventListener("scroll", v);
        }
      ),
      []
    ),
    p.useEffect(
      () => (
        window.addEventListener("scroll", v),
        () => window.removeEventListener("scroll", v)
      ),
      []
    );
  const k = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", duration: 0.3, ease: "easeOut" },
    },
    closed: {
      x: "100%",
      opacity: 1,
      transition: { type: "tween", duration: 0.3, ease: "easeIn" },
    },
  };
  return u.jsxs(u.Fragment, {
    children: [
      u.jsxs("div", {
        className:
          "fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-white dark:bg-darkpaper px-1 shadow-md lg:hidden",
        children: [
          u.jsx("div", {
            className: "flex flex-shrink-0 items-center pl-3",
            children: u.jsx("a", { href: "/", children: u.jsx(cp, {}) }),
          }),
          u.jsx("div", {
            className:
              "absolute left-1/2 transform -translate-x-1/2 flex items-center",
            children: u.jsx(Dg, {}),
          }),
          u.jsx("div", {
            className: "flex items-center",
            children: u.jsx(tw, {
              isOpen: e,
              setIsOpen: t,
              resetSelectedComponent: d,
            }),
          }),
        ],
      }),
      u.jsx("div", {
        className: "relative",
        children: u.jsx(er, {
          children:
            e &&
            u.jsx(xn.div, {
              className:
                "fixed right-0 z-10 mt-0 h-full w-full bg-white dark:bg-charcoal",
              initial: "closed",
              animate: "open",
              exit: "closed",
              variants: k,
              style: { top: nw },
              children: u.jsxs("nav", {
                className: "h-full overflow-y-auto overscroll-contain",
                children: [
                  u.jsx(er, {
                    children:
                      n === "BusinessTypesNavMobile" &&
                      u.jsx(xn.div, {
                        variants: Li,
                        initial: "hidden",
                        animate: "visible",
                        exit: "exit",
                        children: u.jsx(Eg, { onCloseBusinessTypes: f }),
                      }),
                  }),
                  u.jsx(er, {
                    children:
                      n === "FeaturedItemsNavMobile" &&
                      u.jsx(xn.div, {
                        variants: Li,
                        initial: "hidden",
                        animate: "visible",
                        exit: "exit",
                        children: u.jsx(bg, {
                          onCloseFeaturedItemsNavMobile: h,
                        }),
                      }),
                  }),
                  u.jsx(er, {
                    children:
                      n === "SupportItemsNavMobile" &&
                      u.jsx(xn.div, {
                        variants: Li,
                        initial: "hidden",
                        animate: "visible",
                        exit: "exit",
                        children: u.jsx(jg, {
                          onCloseFeaturedItemsNavMobile: h,
                        }),
                      }),
                  }),
                  u.jsx(er, {
                    children:
                      n === "LocaleItemsNavMobile" &&
                      u.jsx(xn.div, {
                        variants: Li,
                        initial: "hidden",
                        animate: "visible",
                        exit: "exit",
                        children: u.jsx(Ig, { onCloseLocaleItemsNavMobile: g }),
                      }),
                  }),
                  u.jsx(er, {
                    children:
                      !n &&
                      rw.map((m) =>
                        u.jsx(
                          xn.div,
                          {
                            variants: Li,
                            initial: "hidden",
                            animate: "visible",
                            exit: "exit",
                            onClick: () => w(m.component),
                            className:
                              "flex cursor-pointer items-center justify-between border-y px-4 py-3 text-base font-semibold text-charcoal hover:bg-inkLightest hover:dark:bg-menuItemDarkBg",
                            children:
                              m.link && !m.component
                                ? u.jsx("a", {
                                    href: m.link,
                                    className:
                                      "flex gap-4 items-center justify-between w-full",
                                    children: u.jsxs("div", {
                                      className: "flex gap-4 items-center",
                                      children: [
                                        u.jsx("div", {
                                          className:
                                            "h-12 w-12 bg-vlightpink dark:bg-inkDark rounded-full flex items-center justify-center",
                                          children:
                                            m.icon &&
                                            s(
                                              m.icon,
                                              "text-current dark:text-white"
                                            ),
                                        }),
                                        u.jsx("span", {
                                          className:
                                            "text-inkDarker dark:text-white text-lg",
                                          children: m.name,
                                        }),
                                      ],
                                    }),
                                  })
                                : u.jsxs("div", {
                                    className:
                                      "flex gap-4 items-center justify-between w-full",
                                    children: [
                                      u.jsxs("div", {
                                        className: "flex gap-4 items-center",
                                        children: [
                                          u.jsx("div", {
                                            className:
                                              "h-12 w-12 bg-vlightpink dark:bg-inkDark rounded-full flex items-center justify-center",
                                            children:
                                              m.icon &&
                                              s(
                                                m.icon,
                                                "text-current dark:text-white"
                                              ),
                                          }),
                                          u.jsx("span", {
                                            className:
                                              "text-inkDarker dark:text-white text-lg",
                                            children: m.name,
                                          }),
                                        ],
                                      }),
                                      m.component &&
                                        u.jsx(up, {
                                          className:
                                            "text-charcoal dark:text-white",
                                        }),
                                    ],
                                  }),
                          },
                          m.id
                        )
                      ),
                  }),
                ],
              }),
            }),
        }),
      }),
    ],
  });
}
const ow = async (e) =>
    (
      await (
        await fetch(
          "https://api-us-west-2.hygraph.com/v2/cld3gw4bb0hr001ue9afzcunb/master",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ query: e }),
          }
        )
      ).json()
    ).data.navigationMenu,
  fs = () =>
    u.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      className: "h-5 w-5",
      children: u.jsx("path", {
        fillRule: "evenodd",
        d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
        clipRule: "evenodd",
      }),
    }),
  hs = () =>
    u.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      className: "h-5 w-5",
      children: u.jsx("path", {
        fillRule: "evenodd",
        d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
        clipRule: "evenodd",
      }),
    });
function ps({ item: e, className: t }) {
  const n = (r, i = "") => {
    const o = Ro[r],
      s = jo[o];
    return s ? u.jsx(s, { className: i }) : null;
  };
  return u.jsx(u.Fragment, {
    children: u.jsx(rn, {
      href: `https://www.vagaro.com/pro${e.link.startsWith("/") ? "" : "/"}${
        e.link
      }`,
      children: u.jsx(
        "div",
        {
          className: `group ${t}`,
          children: u.jsx("div", {
            className:
              "h-16 flex items-center w-full group-hover:cursor-pointer",
            children: u.jsxs("div", {
              className:
                "menu-item flex flex-row items-center gap-4 group-hover:bg-graywave dark:group-hover:bg-menuItemDarkHover rounded-full w-full h-[50px] mx-2",
              children: [
                u.jsx("div", {
                  className:
                    "flex items-center justify-center rounded-full bg-navIconPink group-hover:bg-white  dark:bg-inkDark dark:group-hover:bg-menuItemDarkBg   h-[51px] w-[51px] border-2 border-white/0 dark:group-hover:border-2 group-hover:border-2 group-hover:border-inkLight dark:group-hover:border-iconDarkRingHover -ml-2",
                  children: n(
                    e.svgName,
                    "text-charcoal dark:text-white dark:group-hover:text-white"
                  ),
                }),
                u.jsx("span", {
                  className:
                    "text-charcoal dark:text-white text-base font-semibold",
                  children: e.name,
                }),
              ],
            }),
          }),
        },
        e.id
      ),
    }),
  });
}
function sw() {
  const [e, t] = p.useState(!1),
    [n, r] = p.useState(!1),
    [i, o] = p.useState(!1),
    { data: s, error: a } = un(
      `
  {
    navigationMenu(where: {id: "clwf5eift1g5107lkal4vbfi9"}) {
      beautyItems {
        id
        name
        link
        svgName
        iconImage {
          id
          url
        }
      }
      wellnessItems {
        id
        name
        link
        svgName
        iconImage {
          id
          url
        }
      }
      fitnessItems {
        id
        name
        link
        svgName
        iconImage {
          id
          url
        }
      }
      featureItems {
        id
        name
        description
        link
        svgName
        iconImage {
          id
          url
        }
      }
    }
  }`,
      ow
    );
  if (a)
    return u.jsx("div", {
      className: "text-black",
      children: "Failed to load",
    });
  if (!s)
    return u.jsx("div", { className: "text-white", children: "Loading..." });
  const l = (c, d) => (d ? c : c.slice(0, 8));
  return u.jsx(u.Fragment, {
    children: u.jsx("div", {
      className: "z-10 h-full w-full dark:bg-menuBgDark",
      children:
        s &&
        u.jsx(u.Fragment, {
          children: u.jsx("div", {
            className: "menuBgDark mx-auto max-w-6xl py-1",
            children: u.jsx("div", {
              className: "",
              children: u.jsxs("div", {
                className: "flex flex-col",
                children: [
                  u.jsx("div", {
                    className: "max-w-5xl",
                    children: u.jsxs("div", {
                      className: "List One",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-center justify-between py-1",
                          children: [
                            u.jsx("h2", {
                              className:
                                "pl-2 text-xl font-semibold text-gray-900 dark:text-white",
                              children: "Beauty",
                            }),
                            u.jsx("div", {
                              className: "mx-2 flex-grow bg-black",
                              style: { height: "1px" },
                            }),
                            s.wellnessItems.length > 8 &&
                              u.jsxs("button", {
                                className:
                                  "flex cursor-pointer items-center text-base text-charcoal dark:text-white",
                                onClick: () => t(!e),
                                children: [
                                  u.jsx("span", {
                                    className: "text-lg font-semibold",
                                    children: e ? "View Less" : "View All",
                                  }),
                                  e ? u.jsx(fs, {}) : u.jsx(hs, {}),
                                ],
                              }),
                          ],
                        }),
                        u.jsx("div", {
                          className: "grid grid-cols-4 gap-2 px-3",
                          children: l(s.beautyItems, e).map((c) =>
                            u.jsx(ps, { item: c }, c.id)
                          ),
                        }),
                      ],
                    }),
                  }),
                  u.jsx("div", {
                    className: "max-w-5xl",
                    children: u.jsxs("div", {
                      className: "List One",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-center justify-between py-1",
                          children: [
                            u.jsx("h2", {
                              className:
                                "pl-2 text-xl font-semibold text-gray-900 dark:text-white",
                              children: "Wellness",
                            }),
                            u.jsx("div", {
                              className: "mx-2 flex-grow bg-black",
                              style: { height: "1px" },
                            }),
                            s.wellnessItems.length > 8 &&
                              u.jsxs("button", {
                                className:
                                  "flex cursor-pointer items-center text-base text-charcoal dark:text-white",
                                onClick: () => r(!n),
                                children: [
                                  u.jsx("span", {
                                    className: "text-lg font-semibold",
                                    children: n ? "View Less" : "View All",
                                  }),
                                  n ? u.jsx(fs, {}) : u.jsx(hs, {}),
                                ],
                              }),
                          ],
                        }),
                        u.jsx("div", {
                          className: "grid grid-cols-4 gap-2 px-3",
                          children: l(s.wellnessItems, n).map((c) =>
                            u.jsx(ps, { item: c }, c.id)
                          ),
                        }),
                      ],
                    }),
                  }),
                  u.jsx("div", {
                    className: "max-w-5xl",
                    children: u.jsxs("div", {
                      className: "List One",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-center justify-between py-1",
                          children: [
                            u.jsx("h2", {
                              className:
                                "pl-2 text-xl font-semibold text-gray-900 dark:text-white",
                              children: "Fitness",
                            }),
                            u.jsx("div", {
                              className: "mx-2 flex-grow bg-black",
                              style: { height: "1px" },
                            }),
                            s.fitnessItems.length > 8 &&
                              u.jsxs("button", {
                                className:
                                  "flex cursor-pointer items-center text-base text-charcoal dark:text-white",
                                onClick: () => o(!i),
                                children: [
                                  u.jsx("span", {
                                    className: "text-base font-semibold",
                                    children: i ? "View Less" : "View All",
                                  }),
                                  i ? u.jsx(fs, {}) : u.jsx(hs, {}),
                                ],
                              }),
                          ],
                        }),
                        u.jsx("div", {
                          className: "grid grid-cols-4 gap-2 px-3",
                          children: l(s.fitnessItems, i).map((c) =>
                            u.jsx(ps, { item: c }, c.id)
                          ),
                        }),
                      ],
                    }),
                  }),
                  u.jsx("div", {
                    className: "max-w-5xl",
                    children: u.jsxs("div", {
                      className: "List One",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-center justify-between py-1",
                          children: [
                            u.jsx("h2", {
                              className:
                                "pl-2 text-xl font-semibold text-gray-900 dark:text-white",
                              children: "& More",
                            }),
                            u.jsx("div", {
                              className: "mx-2 flex-grow bg-black",
                              style: { height: "1px" },
                            }),
                            s.fitnessItems.length > 8 &&
                              u.jsxs("button", {
                                className:
                                  "flex cursor-pointer items-center text-base text-charcoal dark:text-white",
                                onClick: () => o(!i),
                                children: [
                                  u.jsx("span", {
                                    className: "text-base font-semibold",
                                    children: i ? "View Less" : "View All",
                                  }),
                                  i ? u.jsx(fs, {}) : u.jsx(hs, {}),
                                ],
                              }),
                          ],
                        }),
                        u.jsx("div", {
                          className: "grid grid-cols-4 gap-2 px-3",
                          children: l(s.fitnessItems, i).map((c) =>
                            u.jsx(ps, { item: c }, c.id)
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
    }),
  });
}
const aw = async (e) => {
    const t = await fetch(
      "https://api-us-west-2.hygraph.com/v2/cld3gw4bb0hr001ue9afzcunb/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: e }),
      }
    );
    if (!t.ok)
      throw (
        (console.error("Network response was not ok"),
        console.error(t.statusText),
        new Error("Network response was not ok"))
      );
    const n = await t.json();
    return console.log("API Response:", n), n;
  },
  lw = () =>
    u.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      className: "w-5 h-5",
      children: u.jsx("path", {
        fillRule: "evenodd",
        d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
        clipRule: "evenodd",
      }),
    }),
  cw = () =>
    u.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      className: "w-5 h-5",
      children: u.jsx("path", {
        fillRule: "evenodd",
        d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
        clipRule: "evenodd",
      }),
    });
function uw() {
  var f, h;
  const [e, t] = p.useState({}),
    n = (g, w = "") => {
      const v = Ro[g],
        k = jo[v];
      return k ? u.jsx(k, { className: w }) : null;
    },
    r = `
    query MyNavQuery {
      navigationMenu(where: { id: "clezyiora1akc0an0g68whmx0" }) {
        featureItems {
          id
          name
          flagAsNew
          flagAsBeta
          link
          svgName
          iconImage {
            id
            url
          }
          locale
          description
          ignoreThisLocale
          featureMenuItemType
        }
      }
    }
  `,
    { data: i, error: o } = un(r, aw);
  if (o) return u.jsx("div", { children: "Error loading data" });
  if (!i) return u.jsx("div", { children: "Loading..." });
  const a = (
    ((h = (f = i.data) == null ? void 0 : f.navigationMenu) == null
      ? void 0
      : h.featureItems) || []
  ).filter((g) => g.featureMenuItemType !== null);
  console.log("Navigation Menu:", i.navigationMenu);
  const l = [
      { id: 1, heading: "Client Experience", type: "ClientExperience" },
      { id: 2, heading: "Run Your Business", type: "RunYourBusiness" },
      { id: 3, heading: "Payments", type: "Payments" },
      { id: 4, heading: "Marketing & Branding", type: "MarketingBranding" },
    ],
    c = {};
  a.forEach((g) => {
    (c[g.featureMenuItemType] = c[g.featureMenuItemType] || []),
      c[g.featureMenuItemType].push(g);
  });
  const d = (g) => {
    t((w) => ({ ...w, [g]: !w[g] }));
  };
  return u.jsx("div", {
    className: "light:bg-white dark:bg-menuBgDark",
    children: u.jsx("div", {
      className: "max-w-6xl mx-auto gap-2 py-1",
      children: l.map((g, w) => {
        const v = c[g.type] || [],
          k = !!e[g.type];
        return u.jsxs(
          "div",
          {
            children: [
              u.jsxs("div", {
                className: "flex items-center justify-between py-1",
                children: [
                  u.jsx("div", {
                    className:
                      "pl-3 text-xl font-semibold text-gray-900 dark:text-white",
                    children: g.heading,
                  }),
                  u.jsx("div", {
                    className: "mx-2 flex-grow bg-black dark:bg-white",
                    style: { height: "1px" },
                  }),
                  v.length > 8 &&
                    u.jsxs("button", {
                      className:
                        "flex items-center text-charcoal cursor-pointer text-base font-semibold dark:text-white",
                      onClick: () => d(g.type),
                      children: [
                        u.jsx("span", {
                          className:
                            "mr-2 text-charcoal dark:text-white text-lg font-semibold ",
                          children: k ? "View Less" : "View All",
                        }),
                        k ? u.jsx(lw, {}) : u.jsx(cw, {}),
                      ],
                    }),
                ],
              }),
              u.jsx("div", {
                className: "grid grid-cols-4 gap-3 py-3",
                children: v
                  .slice(0, k ? void 0 : 8)
                  .map((m) =>
                    u.jsx(
                      rn,
                      {
                        href: `https://www.vagaro.com/pro${
                          m.link.startsWith("/") ? "" : "/"
                        }${m.link}`,
                        className: "group",
                        children: u.jsxs("div", {
                          className:
                            "group flex items-center rounded-full p-2 hover:bg-inkLight/70 dark:group-hover:bg-menuItemDarkHover dark:bg-menuItemDarkBg",
                          children: [
                            u.jsx("div", {
                              className:
                                "rounded-full bg-vlightpink dark:bg-inkDark dark:group-hover:bg-menuItemDarkBg p-3 group-hover:bg-white border-2 border-inkDark/0 group-hover:dark:border-2 group-hover:dark:border-inkLight",
                              children: u.jsx("div", {
                                className:
                                  "flex h-6 w-6 items-center justify-center rounded-full text-black",
                                children: n(
                                  m.svgName,
                                  "text-charcoal dark:text-white dark:group-hover:text-white"
                                ),
                              }),
                            }),
                            u.jsxs("div", {
                              className: "flex flex-col px-2",
                              children: [
                                u.jsxs("div", {
                                  className:
                                    "w-full text-base font-semibold text-gray-900 dark:text-white flex items-center",
                                  children: [
                                    m.name,
                                    m.flagAsNew &&
                                      u.jsx("span", {
                                        className:
                                          "inline-flex mx-2 h-4 w-10 items-center rounded-full bg-green px-2 text-[10px] font-bold text-white",
                                        children: "NEW",
                                      }),
                                    m.flagAsBeta &&
                                      u.jsx("span", {
                                        className:
                                          "inline-flex mx-2 h-4 rounded-full bg-[#D5E0EB] px-2 text-[10px] font-bold text-[#26639C]",
                                        children: "BETA",
                                      }),
                                  ],
                                }),
                                u.jsx("span", {
                                  className:
                                    "text-xs text-gray-900 dark:text-white",
                                  children: m.description,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      m.id
                    )
                  ),
              }),
            ],
          },
          w
        );
      }),
    }),
  });
}
function dw({ title: e, titleId: t, ...n }, r) {
  return p.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? p.createElement("title", { id: t }, e) : null,
    p.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    })
  );
}
const fw = p.forwardRef(dw);
function hw({ title: e, titleId: t, ...n }, r) {
  return p.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? p.createElement("title", { id: t }, e) : null,
    p.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
    })
  );
}
const pw = p.forwardRef(hw);
function mw({ title: e, titleId: t, ...n }, r) {
  return p.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? p.createElement("title", { id: t }, e) : null,
    p.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
    })
  );
}
const gw = p.forwardRef(mw);
function vw({ title: e, titleId: t, ...n }, r) {
  return p.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? p.createElement("title", { id: t }, e) : null,
    p.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z",
    })
  );
}
const yw = p.forwardRef(vw);
function xw({ title: e, titleId: t, ...n }, r) {
  return p.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? p.createElement("title", { id: t }, e) : null,
    p.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
    })
  );
}
const ww = p.forwardRef(xw);
function Cw({ title: e, titleId: t, ...n }, r) {
  return p.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? p.createElement("title", { id: t }, e) : null,
    p.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
    })
  );
}
const kw = p.forwardRef(Cw);
function Ew({ title: e, titleId: t, ...n }, r) {
  return p.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? p.createElement("title", { id: t }, e) : null,
    p.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18 18 6M6 6l12 12",
    })
  );
}
const Sw = p.forwardRef(Ew);
class Qr extends Error {
  constructor(n, r) {
    const i = `${Qr.extractMessage(n)}: ${JSON.stringify({
      response: n,
      request: r,
    })}`;
    super(i);
    Sr(this, "response");
    Sr(this, "request");
    Object.setPrototypeOf(this, Qr.prototype),
      (this.response = n),
      (this.request = r),
      typeof Error.captureStackTrace == "function" &&
        Error.captureStackTrace(this, Qr);
  }
  static extractMessage(n) {
    var r, i;
    return (
      ((i = (r = n.errors) == null ? void 0 : r[0]) == null
        ? void 0
        : i.message) ?? `GraphQL Error (Code: ${String(n.status)})`
    );
  }
}
const g2 = (e) => e.toUpperCase(),
  tc = (e) => (typeof e == "function" ? e() : e),
  z6 = (e, t) => e.map((n, r) => [n, t[r]]),
  Nr = (e) => {
    let t = {};
    return (
      e instanceof Headers
        ? (t = Tw(e))
        : Array.isArray(e)
        ? e.forEach(([n, r]) => {
            n && r !== void 0 && (t[n] = r);
          })
        : e && (t = e),
      t
    );
  },
  Tw = (e) => {
    const t = {};
    return (
      e.forEach((n, r) => {
        t[r] = n;
      }),
      t
    );
  },
  Nw = (e) => {
    try {
      const t = e();
      return Lw(t) ? t.catch((n) => v2(n)) : t;
    } catch (t) {
      return v2(t);
    }
  },
  v2 = (e) => (e instanceof Error ? e : new Error(String(e))),
  Lw = (e) =>
    typeof e == "object" &&
    e !== null &&
    "then" in e &&
    typeof e.then == "function" &&
    "catch" in e &&
    typeof e.catch == "function" &&
    "finally" in e &&
    typeof e.finally == "function",
  wd = (e) => {
    throw new Error(`Unhandled case: ${String(e)}`);
  },
  Ds = (e) => typeof e == "object" && e !== null && !Array.isArray(e),
  bw = (e, t) =>
    e.documents ? e : { documents: e, requestHeaders: t, signal: void 0 },
  Pw = (e, t, n) =>
    e.query ? e : { query: e, variables: t, requestHeaders: n, signal: void 0 };
function $s(e, t) {
  if (!!!e) throw new Error(t);
}
function Mw(e) {
  return typeof e == "object" && e !== null;
}
function jw(e, t) {
  if (!!!e) throw new Error("Unexpected invariant triggered.");
}
const Rw = /\r\n|[\n\r]/g;
function Tu(e, t) {
  let n = 0,
    r = 1;
  for (const i of e.body.matchAll(Rw)) {
    if ((typeof i.index == "number" || jw(!1), i.index >= t)) break;
    (n = i.index + i[0].length), (r += 1);
  }
  return { line: r, column: t + 1 - n };
}
function Aw(e) {
  return U6(e.source, Tu(e.source, e.start));
}
function U6(e, t) {
  const n = e.locationOffset.column - 1,
    r = "".padStart(n) + e.body,
    i = t.line - 1,
    o = e.locationOffset.line - 1,
    s = t.line + o,
    a = t.line === 1 ? n : 0,
    l = t.column + a,
    c = `${e.name}:${s}:${l}
`,
    d = r.split(/\r\n|[\n\r]/g),
    f = d[i];
  if (f.length > 120) {
    const h = Math.floor(l / 80),
      g = l % 80,
      w = [];
    for (let v = 0; v < f.length; v += 80) w.push(f.slice(v, v + 80));
    return (
      c +
      y2([
        [`${s} |`, w[0]],
        ...w.slice(1, h + 1).map((v) => ["|", v]),
        ["|", "^".padStart(g)],
        ["|", w[h + 1]],
      ])
    );
  }
  return (
    c +
    y2([
      [`${s - 1} |`, d[i - 1]],
      [`${s} |`, f],
      ["|", "^".padStart(l)],
      [`${s + 1} |`, d[i + 1]],
    ])
  );
}
function y2(e) {
  const t = e.filter(([r, i]) => i !== void 0),
    n = Math.max(...t.map(([r]) => r.length));
  return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
}
function Iw(e) {
  const t = e[0];
  return t == null || "kind" in t || "length" in t
    ? {
        nodes: t,
        source: e[1],
        positions: e[2],
        path: e[3],
        originalError: e[4],
        extensions: e[5],
      }
    : t;
}
class Cd extends Error {
  constructor(t, ...n) {
    var r, i, o;
    const {
      nodes: s,
      source: a,
      positions: l,
      path: c,
      originalError: d,
      extensions: f,
    } = Iw(n);
    super(t),
      (this.name = "GraphQLError"),
      (this.path = c ?? void 0),
      (this.originalError = d ?? void 0),
      (this.nodes = x2(Array.isArray(s) ? s : s ? [s] : void 0));
    const h = x2(
      (r = this.nodes) === null || r === void 0
        ? void 0
        : r.map((w) => w.loc).filter((w) => w != null)
    );
    (this.source =
      a ??
      (h == null || (i = h[0]) === null || i === void 0 ? void 0 : i.source)),
      (this.positions = l ?? (h == null ? void 0 : h.map((w) => w.start))),
      (this.locations =
        l && a
          ? l.map((w) => Tu(a, w))
          : h == null
          ? void 0
          : h.map((w) => Tu(w.source, w.start)));
    const g = Mw(d == null ? void 0 : d.extensions)
      ? d == null
        ? void 0
        : d.extensions
      : void 0;
    (this.extensions =
      (o = f ?? g) !== null && o !== void 0 ? o : Object.create(null)),
      Object.defineProperties(this, {
        message: { writable: !0, enumerable: !0 },
        name: { enumerable: !1 },
        nodes: { enumerable: !1 },
        source: { enumerable: !1 },
        positions: { enumerable: !1 },
        originalError: { enumerable: !1 },
      }),
      d != null && d.stack
        ? Object.defineProperty(this, "stack", {
            value: d.stack,
            writable: !0,
            configurable: !0,
          })
        : Error.captureStackTrace
        ? Error.captureStackTrace(this, Cd)
        : Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: !0,
            configurable: !0,
          });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let t = this.message;
    if (this.nodes)
      for (const n of this.nodes)
        n.loc &&
          (t +=
            `

` + Aw(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t +=
          `

` + U6(this.source, n);
    return t;
  }
  toJSON() {
    const t = { message: this.message };
    return (
      this.locations != null && (t.locations = this.locations),
      this.path != null && (t.path = this.path),
      this.extensions != null &&
        Object.keys(this.extensions).length > 0 &&
        (t.extensions = this.extensions),
      t
    );
  }
}
function x2(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
function Ee(e, t, n) {
  return new Cd(`Syntax Error: ${n}`, { source: e, positions: [t] });
}
class Dw {
  constructor(t, n, r) {
    (this.start = t.start),
      (this.end = n.end),
      (this.startToken = t),
      (this.endToken = n),
      (this.source = r);
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return { start: this.start, end: this.end };
  }
}
class W6 {
  constructor(t, n, r, i, o, s) {
    (this.kind = t),
      (this.start = n),
      (this.end = r),
      (this.line = i),
      (this.column = o),
      (this.value = s),
      (this.prev = null),
      (this.next = null);
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column,
    };
  }
}
const Z6 = {
    Name: [],
    Document: ["definitions"],
    OperationDefinition: [
      "name",
      "variableDefinitions",
      "directives",
      "selectionSet",
    ],
    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
    Variable: ["name"],
    SelectionSet: ["selections"],
    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
    Argument: ["name", "value"],
    FragmentSpread: ["name", "directives"],
    InlineFragment: ["typeCondition", "directives", "selectionSet"],
    FragmentDefinition: [
      "name",
      "variableDefinitions",
      "typeCondition",
      "directives",
      "selectionSet",
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ["values"],
    ObjectValue: ["fields"],
    ObjectField: ["name", "value"],
    Directive: ["name", "arguments"],
    NamedType: ["name"],
    ListType: ["type"],
    NonNullType: ["type"],
    SchemaDefinition: ["description", "directives", "operationTypes"],
    OperationTypeDefinition: ["type"],
    ScalarTypeDefinition: ["description", "name", "directives"],
    ObjectTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields",
    ],
    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
    InputValueDefinition: [
      "description",
      "name",
      "type",
      "defaultValue",
      "directives",
    ],
    InterfaceTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields",
    ],
    UnionTypeDefinition: ["description", "name", "directives", "types"],
    EnumTypeDefinition: ["description", "name", "directives", "values"],
    EnumValueDefinition: ["description", "name", "directives"],
    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
    DirectiveDefinition: ["description", "name", "arguments", "locations"],
    SchemaExtension: ["directives", "operationTypes"],
    ScalarTypeExtension: ["name", "directives"],
    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
    UnionTypeExtension: ["name", "directives", "types"],
    EnumTypeExtension: ["name", "directives", "values"],
    InputObjectTypeExtension: ["name", "directives", "fields"],
  },
  $w = new Set(Object.keys(Z6));
function w2(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && $w.has(t);
}
var or;
(function (e) {
  (e.QUERY = "query"),
    (e.MUTATION = "mutation"),
    (e.SUBSCRIPTION = "subscription");
})(or || (or = {}));
var Nu;
(function (e) {
  (e.QUERY = "QUERY"),
    (e.MUTATION = "MUTATION"),
    (e.SUBSCRIPTION = "SUBSCRIPTION"),
    (e.FIELD = "FIELD"),
    (e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION"),
    (e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD"),
    (e.INLINE_FRAGMENT = "INLINE_FRAGMENT"),
    (e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION"),
    (e.SCHEMA = "SCHEMA"),
    (e.SCALAR = "SCALAR"),
    (e.OBJECT = "OBJECT"),
    (e.FIELD_DEFINITION = "FIELD_DEFINITION"),
    (e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION"),
    (e.INTERFACE = "INTERFACE"),
    (e.UNION = "UNION"),
    (e.ENUM = "ENUM"),
    (e.ENUM_VALUE = "ENUM_VALUE"),
    (e.INPUT_OBJECT = "INPUT_OBJECT"),
    (e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION");
})(Nu || (Nu = {}));
var $;
(function (e) {
  (e.NAME = "Name"),
    (e.DOCUMENT = "Document"),
    (e.OPERATION_DEFINITION = "OperationDefinition"),
    (e.VARIABLE_DEFINITION = "VariableDefinition"),
    (e.SELECTION_SET = "SelectionSet"),
    (e.FIELD = "Field"),
    (e.ARGUMENT = "Argument"),
    (e.FRAGMENT_SPREAD = "FragmentSpread"),
    (e.INLINE_FRAGMENT = "InlineFragment"),
    (e.FRAGMENT_DEFINITION = "FragmentDefinition"),
    (e.VARIABLE = "Variable"),
    (e.INT = "IntValue"),
    (e.FLOAT = "FloatValue"),
    (e.STRING = "StringValue"),
    (e.BOOLEAN = "BooleanValue"),
    (e.NULL = "NullValue"),
    (e.ENUM = "EnumValue"),
    (e.LIST = "ListValue"),
    (e.OBJECT = "ObjectValue"),
    (e.OBJECT_FIELD = "ObjectField"),
    (e.DIRECTIVE = "Directive"),
    (e.NAMED_TYPE = "NamedType"),
    (e.LIST_TYPE = "ListType"),
    (e.NON_NULL_TYPE = "NonNullType"),
    (e.SCHEMA_DEFINITION = "SchemaDefinition"),
    (e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
    (e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
    (e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
    (e.FIELD_DEFINITION = "FieldDefinition"),
    (e.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
    (e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
    (e.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
    (e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
    (e.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
    (e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
    (e.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
    (e.SCHEMA_EXTENSION = "SchemaExtension"),
    (e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
    (e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
    (e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
    (e.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
    (e.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
    (e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension");
})($ || ($ = {}));
function Lu(e) {
  return e === 9 || e === 32;
}
function wo(e) {
  return e >= 48 && e <= 57;
}
function K6(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function G6(e) {
  return K6(e) || e === 95;
}
function Ow(e) {
  return K6(e) || wo(e) || e === 95;
}
function Vw(e) {
  var t;
  let n = Number.MAX_SAFE_INTEGER,
    r = null,
    i = -1;
  for (let s = 0; s < e.length; ++s) {
    var o;
    const a = e[s],
      l = _w(a);
    l !== a.length &&
      ((r = (o = r) !== null && o !== void 0 ? o : s),
      (i = s),
      s !== 0 && l < n && (n = l));
  }
  return e
    .map((s, a) => (a === 0 ? s : s.slice(n)))
    .slice((t = r) !== null && t !== void 0 ? t : 0, i + 1);
}
function _w(e) {
  let t = 0;
  for (; t < e.length && Lu(e.charCodeAt(t)); ) ++t;
  return t;
}
function Fw(e, t) {
  const n = e.replace(/"""/g, '\\"""'),
    r = n.split(/\r\n|[\n\r]/g),
    i = r.length === 1,
    o =
      r.length > 1 &&
      r.slice(1).every((g) => g.length === 0 || Lu(g.charCodeAt(0))),
    s = n.endsWith('\\"""'),
    a = e.endsWith('"') && !s,
    l = e.endsWith("\\"),
    c = a || l,
    d = !i || e.length > 70 || c || o || s;
  let f = "";
  const h = i && Lu(e.charCodeAt(0));
  return (
    ((d && !h) || o) &&
      (f += `
`),
    (f += n),
    (d || c) &&
      (f += `
`),
    '"""' + f + '"""'
  );
}
var L;
(function (e) {
  (e.SOF = "<SOF>"),
    (e.EOF = "<EOF>"),
    (e.BANG = "!"),
    (e.DOLLAR = "$"),
    (e.AMP = "&"),
    (e.PAREN_L = "("),
    (e.PAREN_R = ")"),
    (e.SPREAD = "..."),
    (e.COLON = ":"),
    (e.EQUALS = "="),
    (e.AT = "@"),
    (e.BRACKET_L = "["),
    (e.BRACKET_R = "]"),
    (e.BRACE_L = "{"),
    (e.PIPE = "|"),
    (e.BRACE_R = "}"),
    (e.NAME = "Name"),
    (e.INT = "Int"),
    (e.FLOAT = "Float"),
    (e.STRING = "String"),
    (e.BLOCK_STRING = "BlockString"),
    (e.COMMENT = "Comment");
})(L || (L = {}));
class Hw {
  constructor(t) {
    const n = new W6(L.SOF, 0, 0, 0, 0);
    (this.source = t),
      (this.lastToken = n),
      (this.token = n),
      (this.line = 1),
      (this.lineStart = 0);
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  advance() {
    return (this.lastToken = this.token), (this.token = this.lookahead());
  }
  lookahead() {
    let t = this.token;
    if (t.kind !== L.EOF)
      do
        if (t.next) t = t.next;
        else {
          const n = zw(this, t.end);
          (t.next = n), (n.prev = t), (t = n);
        }
      while (t.kind === L.COMMENT);
    return t;
  }
}
function Bw(e) {
  return (
    e === L.BANG ||
    e === L.DOLLAR ||
    e === L.AMP ||
    e === L.PAREN_L ||
    e === L.PAREN_R ||
    e === L.SPREAD ||
    e === L.COLON ||
    e === L.EQUALS ||
    e === L.AT ||
    e === L.BRACKET_L ||
    e === L.BRACKET_R ||
    e === L.BRACE_L ||
    e === L.PIPE ||
    e === L.BRACE_R
  );
}
function hi(e) {
  return (e >= 0 && e <= 55295) || (e >= 57344 && e <= 1114111);
}
function Qa(e, t) {
  return q6(e.charCodeAt(t)) && Y6(e.charCodeAt(t + 1));
}
function q6(e) {
  return e >= 55296 && e <= 56319;
}
function Y6(e) {
  return e >= 56320 && e <= 57343;
}
function gr(e, t) {
  const n = e.source.body.codePointAt(t);
  if (n === void 0) return L.EOF;
  if (n >= 32 && n <= 126) {
    const r = String.fromCodePoint(n);
    return r === '"' ? `'"'` : `"${r}"`;
  }
  return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function ge(e, t, n, r, i) {
  const o = e.line,
    s = 1 + n - e.lineStart;
  return new W6(t, n, r, o, s, i);
}
function zw(e, t) {
  const n = e.source.body,
    r = n.length;
  let i = t;
  for (; i < r; ) {
    const o = n.charCodeAt(i);
    switch (o) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++i;
        continue;
      case 10:
        ++i, ++e.line, (e.lineStart = i);
        continue;
      case 13:
        n.charCodeAt(i + 1) === 10 ? (i += 2) : ++i,
          ++e.line,
          (e.lineStart = i);
        continue;
      case 35:
        return Uw(e, i);
      case 33:
        return ge(e, L.BANG, i, i + 1);
      case 36:
        return ge(e, L.DOLLAR, i, i + 1);
      case 38:
        return ge(e, L.AMP, i, i + 1);
      case 40:
        return ge(e, L.PAREN_L, i, i + 1);
      case 41:
        return ge(e, L.PAREN_R, i, i + 1);
      case 46:
        if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46)
          return ge(e, L.SPREAD, i, i + 3);
        break;
      case 58:
        return ge(e, L.COLON, i, i + 1);
      case 61:
        return ge(e, L.EQUALS, i, i + 1);
      case 64:
        return ge(e, L.AT, i, i + 1);
      case 91:
        return ge(e, L.BRACKET_L, i, i + 1);
      case 93:
        return ge(e, L.BRACKET_R, i, i + 1);
      case 123:
        return ge(e, L.BRACE_L, i, i + 1);
      case 124:
        return ge(e, L.PIPE, i, i + 1);
      case 125:
        return ge(e, L.BRACE_R, i, i + 1);
      case 34:
        return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34
          ? Yw(e, i)
          : Zw(e, i);
    }
    if (wo(o) || o === 45) return Ww(e, i, o);
    if (G6(o)) return Qw(e, i);
    throw Ee(
      e.source,
      i,
      o === 39
        ? `Unexpected single quote character ('), did you mean to use a double quote (")?`
        : hi(o) || Qa(n, i)
        ? `Unexpected character: ${gr(e, i)}.`
        : `Invalid character: ${gr(e, i)}.`
    );
  }
  return ge(e, L.EOF, r, r);
}
function Uw(e, t) {
  const n = e.source.body,
    r = n.length;
  let i = t + 1;
  for (; i < r; ) {
    const o = n.charCodeAt(i);
    if (o === 10 || o === 13) break;
    if (hi(o)) ++i;
    else if (Qa(n, i)) i += 2;
    else break;
  }
  return ge(e, L.COMMENT, t, i, n.slice(t + 1, i));
}
function Ww(e, t, n) {
  const r = e.source.body;
  let i = t,
    o = n,
    s = !1;
  if ((o === 45 && (o = r.charCodeAt(++i)), o === 48)) {
    if (((o = r.charCodeAt(++i)), wo(o)))
      throw Ee(
        e.source,
        i,
        `Invalid number, unexpected digit after 0: ${gr(e, i)}.`
      );
  } else (i = nc(e, i, o)), (o = r.charCodeAt(i));
  if (
    (o === 46 &&
      ((s = !0),
      (o = r.charCodeAt(++i)),
      (i = nc(e, i, o)),
      (o = r.charCodeAt(i))),
    (o === 69 || o === 101) &&
      ((s = !0),
      (o = r.charCodeAt(++i)),
      (o === 43 || o === 45) && (o = r.charCodeAt(++i)),
      (i = nc(e, i, o)),
      (o = r.charCodeAt(i))),
    o === 46 || G6(o))
  )
    throw Ee(
      e.source,
      i,
      `Invalid number, expected digit but got: ${gr(e, i)}.`
    );
  return ge(e, s ? L.FLOAT : L.INT, t, i, r.slice(t, i));
}
function nc(e, t, n) {
  if (!wo(n))
    throw Ee(
      e.source,
      t,
      `Invalid number, expected digit but got: ${gr(e, t)}.`
    );
  const r = e.source.body;
  let i = t + 1;
  for (; wo(r.charCodeAt(i)); ) ++i;
  return i;
}
function Zw(e, t) {
  const n = e.source.body,
    r = n.length;
  let i = t + 1,
    o = i,
    s = "";
  for (; i < r; ) {
    const a = n.charCodeAt(i);
    if (a === 34) return (s += n.slice(o, i)), ge(e, L.STRING, t, i + 1, s);
    if (a === 92) {
      s += n.slice(o, i);
      const l =
        n.charCodeAt(i + 1) === 117
          ? n.charCodeAt(i + 2) === 123
            ? Kw(e, i)
            : Gw(e, i)
          : qw(e, i);
      (s += l.value), (i += l.size), (o = i);
      continue;
    }
    if (a === 10 || a === 13) break;
    if (hi(a)) ++i;
    else if (Qa(n, i)) i += 2;
    else throw Ee(e.source, i, `Invalid character within String: ${gr(e, i)}.`);
  }
  throw Ee(e.source, i, "Unterminated string.");
}
function Kw(e, t) {
  const n = e.source.body;
  let r = 0,
    i = 3;
  for (; i < 12; ) {
    const o = n.charCodeAt(t + i++);
    if (o === 125) {
      if (i < 5 || !hi(r)) break;
      return { value: String.fromCodePoint(r), size: i };
    }
    if (((r = (r << 4) | Ai(o)), r < 0)) break;
  }
  throw Ee(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`
  );
}
function Gw(e, t) {
  const n = e.source.body,
    r = C2(n, t + 2);
  if (hi(r)) return { value: String.fromCodePoint(r), size: 6 };
  if (q6(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
    const i = C2(n, t + 8);
    if (Y6(i)) return { value: String.fromCodePoint(r, i), size: 12 };
  }
  throw Ee(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`
  );
}
function C2(e, t) {
  return (
    (Ai(e.charCodeAt(t)) << 12) |
    (Ai(e.charCodeAt(t + 1)) << 8) |
    (Ai(e.charCodeAt(t + 2)) << 4) |
    Ai(e.charCodeAt(t + 3))
  );
}
function Ai(e) {
  return e >= 48 && e <= 57
    ? e - 48
    : e >= 65 && e <= 70
    ? e - 55
    : e >= 97 && e <= 102
    ? e - 87
    : -1;
}
function qw(e, t) {
  const n = e.source.body;
  switch (n.charCodeAt(t + 1)) {
    case 34:
      return { value: '"', size: 2 };
    case 92:
      return { value: "\\", size: 2 };
    case 47:
      return { value: "/", size: 2 };
    case 98:
      return { value: "\b", size: 2 };
    case 102:
      return { value: "\f", size: 2 };
    case 110:
      return {
        value: `
`,
        size: 2,
      };
    case 114:
      return { value: "\r", size: 2 };
    case 116:
      return { value: "	", size: 2 };
  }
  throw Ee(
    e.source,
    t,
    `Invalid character escape sequence: "${n.slice(t, t + 2)}".`
  );
}
function Yw(e, t) {
  const n = e.source.body,
    r = n.length;
  let i = e.lineStart,
    o = t + 3,
    s = o,
    a = "";
  const l = [];
  for (; o < r; ) {
    const c = n.charCodeAt(o);
    if (c === 34 && n.charCodeAt(o + 1) === 34 && n.charCodeAt(o + 2) === 34) {
      (a += n.slice(s, o)), l.push(a);
      const d = ge(
        e,
        L.BLOCK_STRING,
        t,
        o + 3,
        Vw(l).join(`
`)
      );
      return (e.line += l.length - 1), (e.lineStart = i), d;
    }
    if (
      c === 92 &&
      n.charCodeAt(o + 1) === 34 &&
      n.charCodeAt(o + 2) === 34 &&
      n.charCodeAt(o + 3) === 34
    ) {
      (a += n.slice(s, o)), (s = o + 1), (o += 4);
      continue;
    }
    if (c === 10 || c === 13) {
      (a += n.slice(s, o)),
        l.push(a),
        c === 13 && n.charCodeAt(o + 1) === 10 ? (o += 2) : ++o,
        (a = ""),
        (s = o),
        (i = o);
      continue;
    }
    if (hi(c)) ++o;
    else if (Qa(n, o)) o += 2;
    else throw Ee(e.source, o, `Invalid character within String: ${gr(e, o)}.`);
  }
  throw Ee(e.source, o, "Unterminated string.");
}
function Qw(e, t) {
  const n = e.source.body,
    r = n.length;
  let i = t + 1;
  for (; i < r; ) {
    const o = n.charCodeAt(i);
    if (Ow(o)) ++i;
    else break;
  }
  return ge(e, L.NAME, t, i, n.slice(t, i));
}
const Xw = 10,
  Q6 = 2;
function kd(e) {
  return Xa(e, []);
}
function Xa(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Jw(e, t);
    default:
      return String(e);
  }
}
function Jw(e, t) {
  if (e === null) return "null";
  if (t.includes(e)) return "[Circular]";
  const n = [...t, e];
  if (eC(e)) {
    const r = e.toJSON();
    if (r !== e) return typeof r == "string" ? r : Xa(r, n);
  } else if (Array.isArray(e)) return nC(e, n);
  return tC(e, n);
}
function eC(e) {
  return typeof e.toJSON == "function";
}
function tC(e, t) {
  const n = Object.entries(e);
  return n.length === 0
    ? "{}"
    : t.length > Q6
    ? "[" + rC(e) + "]"
    : "{ " + n.map(([i, o]) => i + ": " + Xa(o, t)).join(", ") + " }";
}
function nC(e, t) {
  if (e.length === 0) return "[]";
  if (t.length > Q6) return "[Array]";
  const n = Math.min(Xw, e.length),
    r = e.length - n,
    i = [];
  for (let o = 0; o < n; ++o) i.push(Xa(e[o], t));
  return (
    r === 1
      ? i.push("... 1 more item")
      : r > 1 && i.push(`... ${r} more items`),
    "[" + i.join(", ") + "]"
  );
}
function rC(e) {
  const t = Object.prototype.toString
    .call(e)
    .replace(/^\[object /, "")
    .replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "") return n;
  }
  return t;
}
const iC = globalThis.process
  ? function (t, n) {
      return t instanceof n;
    }
  : function (t, n) {
      if (t instanceof n) return !0;
      if (typeof t == "object" && t !== null) {
        var r;
        const i = n.prototype[Symbol.toStringTag],
          o =
            Symbol.toStringTag in t
              ? t[Symbol.toStringTag]
              : (r = t.constructor) === null || r === void 0
              ? void 0
              : r.name;
        if (i === o) {
          const s = kd(t);
          throw new Error(`Cannot use ${i} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
      }
      return !1;
    };
class X6 {
  constructor(t, n = "GraphQL request", r = { line: 1, column: 1 }) {
    typeof t == "string" ||
      $s(!1, `Body must be a string. Received: ${kd(t)}.`),
      (this.body = t),
      (this.name = n),
      (this.locationOffset = r),
      this.locationOffset.line > 0 ||
        $s(!1, "line in locationOffset is 1-indexed and must be positive."),
      this.locationOffset.column > 0 ||
        $s(!1, "column in locationOffset is 1-indexed and must be positive.");
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function oC(e) {
  return iC(e, X6);
}
function sC(e, t) {
  return new aC(e, t).parseDocument();
}
class aC {
  constructor(t, n = {}) {
    const r = oC(t) ? t : new X6(t);
    (this._lexer = new Hw(r)), (this._options = n), (this._tokenCounter = 0);
  }
  parseName() {
    const t = this.expectToken(L.NAME);
    return this.node(t, { kind: $.NAME, value: t.value });
  }
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: $.DOCUMENT,
      definitions: this.many(L.SOF, this.parseDefinition, L.EOF),
    });
  }
  parseDefinition() {
    if (this.peek(L.BRACE_L)) return this.parseOperationDefinition();
    const t = this.peekDescription(),
      n = t ? this._lexer.lookahead() : this._lexer.token;
    if (n.kind === L.NAME) {
      switch (n.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (t)
        throw Ee(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (n.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(n);
  }
  parseOperationDefinition() {
    const t = this._lexer.token;
    if (this.peek(L.BRACE_L))
      return this.node(t, {
        kind: $.OPERATION_DEFINITION,
        operation: or.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
      });
    const n = this.parseOperationType();
    let r;
    return (
      this.peek(L.NAME) && (r = this.parseName()),
      this.node(t, {
        kind: $.OPERATION_DEFINITION,
        operation: n,
        name: r,
        variableDefinitions: this.parseVariableDefinitions(),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet(),
      })
    );
  }
  parseOperationType() {
    const t = this.expectToken(L.NAME);
    switch (t.value) {
      case "query":
        return or.QUERY;
      case "mutation":
        return or.MUTATION;
      case "subscription":
        return or.SUBSCRIPTION;
    }
    throw this.unexpected(t);
  }
  parseVariableDefinitions() {
    return this.optionalMany(
      L.PAREN_L,
      this.parseVariableDefinition,
      L.PAREN_R
    );
  }
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: $.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(L.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(L.EQUALS)
        ? this.parseConstValueLiteral()
        : void 0,
      directives: this.parseConstDirectives(),
    });
  }
  parseVariable() {
    const t = this._lexer.token;
    return (
      this.expectToken(L.DOLLAR),
      this.node(t, { kind: $.VARIABLE, name: this.parseName() })
    );
  }
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: $.SELECTION_SET,
      selections: this.many(L.BRACE_L, this.parseSelection, L.BRACE_R),
    });
  }
  parseSelection() {
    return this.peek(L.SPREAD) ? this.parseFragment() : this.parseField();
  }
  parseField() {
    const t = this._lexer.token,
      n = this.parseName();
    let r, i;
    return (
      this.expectOptionalToken(L.COLON)
        ? ((r = n), (i = this.parseName()))
        : (i = n),
      this.node(t, {
        kind: $.FIELD,
        alias: r,
        name: i,
        arguments: this.parseArguments(!1),
        directives: this.parseDirectives(!1),
        selectionSet: this.peek(L.BRACE_L) ? this.parseSelectionSet() : void 0,
      })
    );
  }
  parseArguments(t) {
    const n = t ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(L.PAREN_L, n, L.PAREN_R);
  }
  parseArgument(t = !1) {
    const n = this._lexer.token,
      r = this.parseName();
    return (
      this.expectToken(L.COLON),
      this.node(n, {
        kind: $.ARGUMENT,
        name: r,
        value: this.parseValueLiteral(t),
      })
    );
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  parseFragment() {
    const t = this._lexer.token;
    this.expectToken(L.SPREAD);
    const n = this.expectOptionalKeyword("on");
    return !n && this.peek(L.NAME)
      ? this.node(t, {
          kind: $.FRAGMENT_SPREAD,
          name: this.parseFragmentName(),
          directives: this.parseDirectives(!1),
        })
      : this.node(t, {
          kind: $.INLINE_FRAGMENT,
          typeCondition: n ? this.parseNamedType() : void 0,
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet(),
        });
  }
  parseFragmentDefinition() {
    const t = this._lexer.token;
    return (
      this.expectKeyword("fragment"),
      this._options.allowLegacyFragmentVariables === !0
        ? this.node(t, {
            kind: $.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
          })
        : this.node(t, {
            kind: $.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
          })
    );
  }
  parseFragmentName() {
    if (this._lexer.token.value === "on") throw this.unexpected();
    return this.parseName();
  }
  parseValueLiteral(t) {
    const n = this._lexer.token;
    switch (n.kind) {
      case L.BRACKET_L:
        return this.parseList(t);
      case L.BRACE_L:
        return this.parseObject(t);
      case L.INT:
        return (
          this.advanceLexer(), this.node(n, { kind: $.INT, value: n.value })
        );
      case L.FLOAT:
        return (
          this.advanceLexer(), this.node(n, { kind: $.FLOAT, value: n.value })
        );
      case L.STRING:
      case L.BLOCK_STRING:
        return this.parseStringLiteral();
      case L.NAME:
        switch ((this.advanceLexer(), n.value)) {
          case "true":
            return this.node(n, { kind: $.BOOLEAN, value: !0 });
          case "false":
            return this.node(n, { kind: $.BOOLEAN, value: !1 });
          case "null":
            return this.node(n, { kind: $.NULL });
          default:
            return this.node(n, { kind: $.ENUM, value: n.value });
        }
      case L.DOLLAR:
        if (t)
          if ((this.expectToken(L.DOLLAR), this._lexer.token.kind === L.NAME)) {
            const r = this._lexer.token.value;
            throw Ee(
              this._lexer.source,
              n.start,
              `Unexpected variable "$${r}" in constant value.`
            );
          } else throw this.unexpected(n);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const t = this._lexer.token;
    return (
      this.advanceLexer(),
      this.node(t, {
        kind: $.STRING,
        value: t.value,
        block: t.kind === L.BLOCK_STRING,
      })
    );
  }
  parseList(t) {
    const n = () => this.parseValueLiteral(t);
    return this.node(this._lexer.token, {
      kind: $.LIST,
      values: this.any(L.BRACKET_L, n, L.BRACKET_R),
    });
  }
  parseObject(t) {
    const n = () => this.parseObjectField(t);
    return this.node(this._lexer.token, {
      kind: $.OBJECT,
      fields: this.any(L.BRACE_L, n, L.BRACE_R),
    });
  }
  parseObjectField(t) {
    const n = this._lexer.token,
      r = this.parseName();
    return (
      this.expectToken(L.COLON),
      this.node(n, {
        kind: $.OBJECT_FIELD,
        name: r,
        value: this.parseValueLiteral(t),
      })
    );
  }
  parseDirectives(t) {
    const n = [];
    for (; this.peek(L.AT); ) n.push(this.parseDirective(t));
    return n;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  parseDirective(t) {
    const n = this._lexer.token;
    return (
      this.expectToken(L.AT),
      this.node(n, {
        kind: $.DIRECTIVE,
        name: this.parseName(),
        arguments: this.parseArguments(t),
      })
    );
  }
  parseTypeReference() {
    const t = this._lexer.token;
    let n;
    if (this.expectOptionalToken(L.BRACKET_L)) {
      const r = this.parseTypeReference();
      this.expectToken(L.BRACKET_R),
        (n = this.node(t, { kind: $.LIST_TYPE, type: r }));
    } else n = this.parseNamedType();
    return this.expectOptionalToken(L.BANG)
      ? this.node(t, { kind: $.NON_NULL_TYPE, type: n })
      : n;
  }
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: $.NAMED_TYPE,
      name: this.parseName(),
    });
  }
  peekDescription() {
    return this.peek(L.STRING) || this.peek(L.BLOCK_STRING);
  }
  parseDescription() {
    if (this.peekDescription()) return this.parseStringLiteral();
  }
  parseSchemaDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("schema");
    const r = this.parseConstDirectives(),
      i = this.many(L.BRACE_L, this.parseOperationTypeDefinition, L.BRACE_R);
    return this.node(t, {
      kind: $.SCHEMA_DEFINITION,
      description: n,
      directives: r,
      operationTypes: i,
    });
  }
  parseOperationTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseOperationType();
    this.expectToken(L.COLON);
    const r = this.parseNamedType();
    return this.node(t, {
      kind: $.OPERATION_TYPE_DEFINITION,
      operation: n,
      type: r,
    });
  }
  parseScalarTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("scalar");
    const r = this.parseName(),
      i = this.parseConstDirectives();
    return this.node(t, {
      kind: $.SCALAR_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i,
    });
  }
  parseObjectTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("type");
    const r = this.parseName(),
      i = this.parseImplementsInterfaces(),
      o = this.parseConstDirectives(),
      s = this.parseFieldsDefinition();
    return this.node(t, {
      kind: $.OBJECT_TYPE_DEFINITION,
      description: n,
      name: r,
      interfaces: i,
      directives: o,
      fields: s,
    });
  }
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements")
      ? this.delimitedMany(L.AMP, this.parseNamedType)
      : [];
  }
  parseFieldsDefinition() {
    return this.optionalMany(L.BRACE_L, this.parseFieldDefinition, L.BRACE_R);
  }
  parseFieldDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      r = this.parseName(),
      i = this.parseArgumentDefs();
    this.expectToken(L.COLON);
    const o = this.parseTypeReference(),
      s = this.parseConstDirectives();
    return this.node(t, {
      kind: $.FIELD_DEFINITION,
      description: n,
      name: r,
      arguments: i,
      type: o,
      directives: s,
    });
  }
  parseArgumentDefs() {
    return this.optionalMany(L.PAREN_L, this.parseInputValueDef, L.PAREN_R);
  }
  parseInputValueDef() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      r = this.parseName();
    this.expectToken(L.COLON);
    const i = this.parseTypeReference();
    let o;
    this.expectOptionalToken(L.EQUALS) && (o = this.parseConstValueLiteral());
    const s = this.parseConstDirectives();
    return this.node(t, {
      kind: $.INPUT_VALUE_DEFINITION,
      description: n,
      name: r,
      type: i,
      defaultValue: o,
      directives: s,
    });
  }
  parseInterfaceTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("interface");
    const r = this.parseName(),
      i = this.parseImplementsInterfaces(),
      o = this.parseConstDirectives(),
      s = this.parseFieldsDefinition();
    return this.node(t, {
      kind: $.INTERFACE_TYPE_DEFINITION,
      description: n,
      name: r,
      interfaces: i,
      directives: o,
      fields: s,
    });
  }
  parseUnionTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("union");
    const r = this.parseName(),
      i = this.parseConstDirectives(),
      o = this.parseUnionMemberTypes();
    return this.node(t, {
      kind: $.UNION_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i,
      types: o,
    });
  }
  parseUnionMemberTypes() {
    return this.expectOptionalToken(L.EQUALS)
      ? this.delimitedMany(L.PIPE, this.parseNamedType)
      : [];
  }
  parseEnumTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("enum");
    const r = this.parseName(),
      i = this.parseConstDirectives(),
      o = this.parseEnumValuesDefinition();
    return this.node(t, {
      kind: $.ENUM_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i,
      values: o,
    });
  }
  parseEnumValuesDefinition() {
    return this.optionalMany(
      L.BRACE_L,
      this.parseEnumValueDefinition,
      L.BRACE_R
    );
  }
  parseEnumValueDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      r = this.parseEnumValueName(),
      i = this.parseConstDirectives();
    return this.node(t, {
      kind: $.ENUM_VALUE_DEFINITION,
      description: n,
      name: r,
      directives: i,
    });
  }
  parseEnumValueName() {
    if (
      this._lexer.token.value === "true" ||
      this._lexer.token.value === "false" ||
      this._lexer.token.value === "null"
    )
      throw Ee(
        this._lexer.source,
        this._lexer.token.start,
        `${ms(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  parseInputObjectTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("input");
    const r = this.parseName(),
      i = this.parseConstDirectives(),
      o = this.parseInputFieldsDefinition();
    return this.node(t, {
      kind: $.INPUT_OBJECT_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i,
      fields: o,
    });
  }
  parseInputFieldsDefinition() {
    return this.optionalMany(L.BRACE_L, this.parseInputValueDef, L.BRACE_R);
  }
  parseTypeSystemExtension() {
    const t = this._lexer.lookahead();
    if (t.kind === L.NAME)
      switch (t.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(t);
  }
  parseSchemaExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const n = this.parseConstDirectives(),
      r = this.optionalMany(
        L.BRACE_L,
        this.parseOperationTypeDefinition,
        L.BRACE_R
      );
    if (n.length === 0 && r.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: $.SCHEMA_EXTENSION,
      directives: n,
      operationTypes: r,
    });
  }
  parseScalarTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const n = this.parseName(),
      r = this.parseConstDirectives();
    if (r.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: $.SCALAR_TYPE_EXTENSION,
      name: n,
      directives: r,
    });
  }
  parseObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const n = this.parseName(),
      r = this.parseImplementsInterfaces(),
      i = this.parseConstDirectives(),
      o = this.parseFieldsDefinition();
    if (r.length === 0 && i.length === 0 && o.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: $.OBJECT_TYPE_EXTENSION,
      name: n,
      interfaces: r,
      directives: i,
      fields: o,
    });
  }
  parseInterfaceTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const n = this.parseName(),
      r = this.parseImplementsInterfaces(),
      i = this.parseConstDirectives(),
      o = this.parseFieldsDefinition();
    if (r.length === 0 && i.length === 0 && o.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: $.INTERFACE_TYPE_EXTENSION,
      name: n,
      interfaces: r,
      directives: i,
      fields: o,
    });
  }
  parseUnionTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const n = this.parseName(),
      r = this.parseConstDirectives(),
      i = this.parseUnionMemberTypes();
    if (r.length === 0 && i.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: $.UNION_TYPE_EXTENSION,
      name: n,
      directives: r,
      types: i,
    });
  }
  parseEnumTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const n = this.parseName(),
      r = this.parseConstDirectives(),
      i = this.parseEnumValuesDefinition();
    if (r.length === 0 && i.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: $.ENUM_TYPE_EXTENSION,
      name: n,
      directives: r,
      values: i,
    });
  }
  parseInputObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const n = this.parseName(),
      r = this.parseConstDirectives(),
      i = this.parseInputFieldsDefinition();
    if (r.length === 0 && i.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: $.INPUT_OBJECT_TYPE_EXTENSION,
      name: n,
      directives: r,
      fields: i,
    });
  }
  parseDirectiveDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(L.AT);
    const r = this.parseName(),
      i = this.parseArgumentDefs(),
      o = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const s = this.parseDirectiveLocations();
    return this.node(t, {
      kind: $.DIRECTIVE_DEFINITION,
      description: n,
      name: r,
      arguments: i,
      repeatable: o,
      locations: s,
    });
  }
  parseDirectiveLocations() {
    return this.delimitedMany(L.PIPE, this.parseDirectiveLocation);
  }
  parseDirectiveLocation() {
    const t = this._lexer.token,
      n = this.parseName();
    if (Object.prototype.hasOwnProperty.call(Nu, n.value)) return n;
    throw this.unexpected(t);
  }
  node(t, n) {
    return (
      this._options.noLocation !== !0 &&
        (n.loc = new Dw(t, this._lexer.lastToken, this._lexer.source)),
      n
    );
  }
  peek(t) {
    return this._lexer.token.kind === t;
  }
  expectToken(t) {
    const n = this._lexer.token;
    if (n.kind === t) return this.advanceLexer(), n;
    throw Ee(this._lexer.source, n.start, `Expected ${J6(t)}, found ${ms(n)}.`);
  }
  expectOptionalToken(t) {
    return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1;
  }
  expectKeyword(t) {
    const n = this._lexer.token;
    if (n.kind === L.NAME && n.value === t) this.advanceLexer();
    else
      throw Ee(this._lexer.source, n.start, `Expected "${t}", found ${ms(n)}.`);
  }
  expectOptionalKeyword(t) {
    const n = this._lexer.token;
    return n.kind === L.NAME && n.value === t ? (this.advanceLexer(), !0) : !1;
  }
  unexpected(t) {
    const n = t ?? this._lexer.token;
    return Ee(this._lexer.source, n.start, `Unexpected ${ms(n)}.`);
  }
  any(t, n, r) {
    this.expectToken(t);
    const i = [];
    for (; !this.expectOptionalToken(r); ) i.push(n.call(this));
    return i;
  }
  optionalMany(t, n, r) {
    if (this.expectOptionalToken(t)) {
      const i = [];
      do i.push(n.call(this));
      while (!this.expectOptionalToken(r));
      return i;
    }
    return [];
  }
  many(t, n, r) {
    this.expectToken(t);
    const i = [];
    do i.push(n.call(this));
    while (!this.expectOptionalToken(r));
    return i;
  }
  delimitedMany(t, n) {
    this.expectOptionalToken(t);
    const r = [];
    do r.push(n.call(this));
    while (this.expectOptionalToken(t));
    return r;
  }
  advanceLexer() {
    const { maxTokens: t } = this._options,
      n = this._lexer.advance();
    if (
      t !== void 0 &&
      n.kind !== L.EOF &&
      (++this._tokenCounter, this._tokenCounter > t)
    )
      throw Ee(
        this._lexer.source,
        n.start,
        `Document contains more that ${t} tokens. Parsing aborted.`
      );
  }
}
function ms(e) {
  const t = e.value;
  return J6(e.kind) + (t != null ? ` "${t}"` : "");
}
function J6(e) {
  return Bw(e) ? `"${e}"` : e;
}
function lC(e) {
  return `"${e.replace(cC, uC)}"`;
}
const cC = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function uC(e) {
  return dC[e.charCodeAt(0)];
}
const dC = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "\\t",
    "\\n",
    "\\u000B",
    "\\f",
    "\\r",
    "\\u000E",
    "\\u000F",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001A",
    "\\u001B",
    "\\u001C",
    "\\u001D",
    "\\u001E",
    "\\u001F",
    "",
    "",
    '\\"',
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\\\",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\u007F",
    "\\u0080",
    "\\u0081",
    "\\u0082",
    "\\u0083",
    "\\u0084",
    "\\u0085",
    "\\u0086",
    "\\u0087",
    "\\u0088",
    "\\u0089",
    "\\u008A",
    "\\u008B",
    "\\u008C",
    "\\u008D",
    "\\u008E",
    "\\u008F",
    "\\u0090",
    "\\u0091",
    "\\u0092",
    "\\u0093",
    "\\u0094",
    "\\u0095",
    "\\u0096",
    "\\u0097",
    "\\u0098",
    "\\u0099",
    "\\u009A",
    "\\u009B",
    "\\u009C",
    "\\u009D",
    "\\u009E",
    "\\u009F",
  ],
  fC = Object.freeze({});
function hC(e, t, n = Z6) {
  const r = new Map();
  for (const m of Object.values($)) r.set(m, pC(t, m));
  let i,
    o = Array.isArray(e),
    s = [e],
    a = -1,
    l = [],
    c = e,
    d,
    f;
  const h = [],
    g = [];
  do {
    a++;
    const m = a === s.length,
      y = m && l.length !== 0;
    if (m) {
      if (
        ((d = g.length === 0 ? void 0 : h[h.length - 1]),
        (c = f),
        (f = g.pop()),
        y)
      )
        if (o) {
          c = c.slice();
          let C = 0;
          for (const [E, T] of l) {
            const N = E - C;
            T === null ? (c.splice(N, 1), C++) : (c[N] = T);
          }
        } else {
          c = Object.defineProperties({}, Object.getOwnPropertyDescriptors(c));
          for (const [C, E] of l) c[C] = E;
        }
      (a = i.index), (s = i.keys), (l = i.edits), (o = i.inArray), (i = i.prev);
    } else if (f) {
      if (((d = o ? a : s[a]), (c = f[d]), c == null)) continue;
      h.push(d);
    }
    let x;
    if (!Array.isArray(c)) {
      var w, v;
      w2(c) || $s(!1, `Invalid AST Node: ${kd(c)}.`);
      const C = m
        ? (w = r.get(c.kind)) === null || w === void 0
          ? void 0
          : w.leave
        : (v = r.get(c.kind)) === null || v === void 0
        ? void 0
        : v.enter;
      if (((x = C == null ? void 0 : C.call(t, c, d, f, h, g)), x === fC))
        break;
      if (x === !1) {
        if (!m) {
          h.pop();
          continue;
        }
      } else if (x !== void 0 && (l.push([d, x]), !m))
        if (w2(x)) c = x;
        else {
          h.pop();
          continue;
        }
    }
    if ((x === void 0 && y && l.push([d, c]), m)) h.pop();
    else {
      var k;
      (i = { inArray: o, index: a, keys: s, edits: l, prev: i }),
        (o = Array.isArray(c)),
        (s = o ? c : (k = n[c.kind]) !== null && k !== void 0 ? k : []),
        (a = -1),
        (l = []),
        f && g.push(f),
        (f = c);
    }
  } while (i !== void 0);
  return l.length !== 0 ? l[l.length - 1][1] : e;
}
function pC(e, t) {
  const n = e[t];
  return typeof n == "object"
    ? n
    : typeof n == "function"
    ? { enter: n, leave: void 0 }
    : { enter: e.enter, leave: e.leave };
}
function mC(e) {
  return hC(e, vC);
}
const gC = 80,
  vC = {
    Name: { leave: (e) => e.value },
    Variable: { leave: (e) => "$" + e.name },
    Document: {
      leave: (e) =>
        A(
          e.definitions,
          `

`
        ),
    },
    OperationDefinition: {
      leave(e) {
        const t = W("(", A(e.variableDefinitions, ", "), ")"),
          n = A([e.operation, A([e.name, t]), A(e.directives, " ")], " ");
        return (n === "query" ? "" : n + " ") + e.selectionSet;
      },
    },
    VariableDefinition: {
      leave: ({ variable: e, type: t, defaultValue: n, directives: r }) =>
        e + ": " + t + W(" = ", n) + W(" ", A(r, " ")),
    },
    SelectionSet: { leave: ({ selections: e }) => kt(e) },
    Field: {
      leave({
        alias: e,
        name: t,
        arguments: n,
        directives: r,
        selectionSet: i,
      }) {
        const o = W("", e, ": ") + t;
        let s = o + W("(", A(n, ", "), ")");
        return (
          s.length > gC &&
            (s =
              o +
              W(
                `(
`,
                Os(
                  A(
                    n,
                    `
`
                  )
                ),
                `
)`
              )),
          A([s, A(r, " "), i], " ")
        );
      },
    },
    Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
    FragmentSpread: {
      leave: ({ name: e, directives: t }) => "..." + e + W(" ", A(t, " ")),
    },
    InlineFragment: {
      leave: ({ typeCondition: e, directives: t, selectionSet: n }) =>
        A(["...", W("on ", e), A(t, " "), n], " "),
    },
    FragmentDefinition: {
      leave: ({
        name: e,
        typeCondition: t,
        variableDefinitions: n,
        directives: r,
        selectionSet: i,
      }) =>
        `fragment ${e}${W("(", A(n, ", "), ")")} on ${t} ${W(
          "",
          A(r, " "),
          " "
        )}` + i,
    },
    IntValue: { leave: ({ value: e }) => e },
    FloatValue: { leave: ({ value: e }) => e },
    StringValue: { leave: ({ value: e, block: t }) => (t ? Fw(e) : lC(e)) },
    BooleanValue: { leave: ({ value: e }) => (e ? "true" : "false") },
    NullValue: { leave: () => "null" },
    EnumValue: { leave: ({ value: e }) => e },
    ListValue: { leave: ({ values: e }) => "[" + A(e, ", ") + "]" },
    ObjectValue: { leave: ({ fields: e }) => "{" + A(e, ", ") + "}" },
    ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
    Directive: {
      leave: ({ name: e, arguments: t }) => "@" + e + W("(", A(t, ", "), ")"),
    },
    NamedType: { leave: ({ name: e }) => e },
    ListType: { leave: ({ type: e }) => "[" + e + "]" },
    NonNullType: { leave: ({ type: e }) => e + "!" },
    SchemaDefinition: {
      leave: ({ description: e, directives: t, operationTypes: n }) =>
        W(
          "",
          e,
          `
`
        ) + A(["schema", A(t, " "), kt(n)], " "),
    },
    OperationTypeDefinition: {
      leave: ({ operation: e, type: t }) => e + ": " + t,
    },
    ScalarTypeDefinition: {
      leave: ({ description: e, name: t, directives: n }) =>
        W(
          "",
          e,
          `
`
        ) + A(["scalar", t, A(n, " ")], " "),
    },
    ObjectTypeDefinition: {
      leave: ({
        description: e,
        name: t,
        interfaces: n,
        directives: r,
        fields: i,
      }) =>
        W(
          "",
          e,
          `
`
        ) +
        A(["type", t, W("implements ", A(n, " & ")), A(r, " "), kt(i)], " "),
    },
    FieldDefinition: {
      leave: ({
        description: e,
        name: t,
        arguments: n,
        type: r,
        directives: i,
      }) =>
        W(
          "",
          e,
          `
`
        ) +
        t +
        (k2(n)
          ? W(
              `(
`,
              Os(
                A(
                  n,
                  `
`
                )
              ),
              `
)`
            )
          : W("(", A(n, ", "), ")")) +
        ": " +
        r +
        W(" ", A(i, " ")),
    },
    InputValueDefinition: {
      leave: ({
        description: e,
        name: t,
        type: n,
        defaultValue: r,
        directives: i,
      }) =>
        W(
          "",
          e,
          `
`
        ) + A([t + ": " + n, W("= ", r), A(i, " ")], " "),
    },
    InterfaceTypeDefinition: {
      leave: ({
        description: e,
        name: t,
        interfaces: n,
        directives: r,
        fields: i,
      }) =>
        W(
          "",
          e,
          `
`
        ) +
        A(
          ["interface", t, W("implements ", A(n, " & ")), A(r, " "), kt(i)],
          " "
        ),
    },
    UnionTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, types: r }) =>
        W(
          "",
          e,
          `
`
        ) + A(["union", t, A(n, " "), W("= ", A(r, " | "))], " "),
    },
    EnumTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, values: r }) =>
        W(
          "",
          e,
          `
`
        ) + A(["enum", t, A(n, " "), kt(r)], " "),
    },
    EnumValueDefinition: {
      leave: ({ description: e, name: t, directives: n }) =>
        W(
          "",
          e,
          `
`
        ) + A([t, A(n, " ")], " "),
    },
    InputObjectTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, fields: r }) =>
        W(
          "",
          e,
          `
`
        ) + A(["input", t, A(n, " "), kt(r)], " "),
    },
    DirectiveDefinition: {
      leave: ({
        description: e,
        name: t,
        arguments: n,
        repeatable: r,
        locations: i,
      }) =>
        W(
          "",
          e,
          `
`
        ) +
        "directive @" +
        t +
        (k2(n)
          ? W(
              `(
`,
              Os(
                A(
                  n,
                  `
`
                )
              ),
              `
)`
            )
          : W("(", A(n, ", "), ")")) +
        (r ? " repeatable" : "") +
        " on " +
        A(i, " | "),
    },
    SchemaExtension: {
      leave: ({ directives: e, operationTypes: t }) =>
        A(["extend schema", A(e, " "), kt(t)], " "),
    },
    ScalarTypeExtension: {
      leave: ({ name: e, directives: t }) =>
        A(["extend scalar", e, A(t, " ")], " "),
    },
    ObjectTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
        A(
          ["extend type", e, W("implements ", A(t, " & ")), A(n, " "), kt(r)],
          " "
        ),
    },
    InterfaceTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
        A(
          [
            "extend interface",
            e,
            W("implements ", A(t, " & ")),
            A(n, " "),
            kt(r),
          ],
          " "
        ),
    },
    UnionTypeExtension: {
      leave: ({ name: e, directives: t, types: n }) =>
        A(["extend union", e, A(t, " "), W("= ", A(n, " | "))], " "),
    },
    EnumTypeExtension: {
      leave: ({ name: e, directives: t, values: n }) =>
        A(["extend enum", e, A(t, " "), kt(n)], " "),
    },
    InputObjectTypeExtension: {
      leave: ({ name: e, directives: t, fields: n }) =>
        A(["extend input", e, A(t, " "), kt(n)], " "),
    },
  };
function A(e, t = "") {
  var n;
  return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null &&
    n !== void 0
    ? n
    : "";
}
function kt(e) {
  return W(
    `{
`,
    Os(
      A(
        e,
        `
`
      )
    ),
    `
}`
  );
}
function W(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function Os(e) {
  return W(
    "  ",
    e.replace(
      /\n/g,
      `
  `
    )
  );
}
function k2(e) {
  var t;
  return (t =
    e == null
      ? void 0
      : e.some((n) =>
          n.includes(`
`)
        )) !== null && t !== void 0
    ? t
    : !1;
}
const E2 = "Accept",
  bu = "Content-Type",
  Pu = "application/json",
  e3 = "application/graphql-response+json",
  S2 = (e) => e.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim(),
  yC = (e) => {
    const t = e.toLowerCase();
    return t.includes(e3) || t.includes(Pu);
  },
  T2 = (e) => {
    try {
      if (Array.isArray(e))
        return { _tag: "Batch", executionResults: e.map(N2) };
      if (Ds(e)) return { _tag: "Single", executionResult: N2(e) };
      throw new Error(`Invalid execution result: result is not object or array. 
Got:
${String(e)}`);
    } catch (t) {
      return t;
    }
  },
  N2 = (e) => {
    if (typeof e != "object" || e === null)
      throw new Error("Invalid execution result: result is not object");
    let t, n, r;
    if ("errors" in e) {
      if (!Ds(e.errors) && !Array.isArray(e.errors))
        throw new Error(
          "Invalid execution result: errors is not plain object OR array"
        );
      t = e.errors;
    }
    if ("data" in e) {
      if (!Ds(e.data) && e.data !== null)
        throw new Error("Invalid execution result: data is not plain object");
      n = e.data;
    }
    if ("extensions" in e) {
      if (!Ds(e.extensions))
        throw new Error(
          "Invalid execution result: extensions is not plain object"
        );
      r = e.extensions;
    }
    return { data: n, errors: t, extensions: r };
  },
  xC = (e) =>
    e._tag === "Batch" ? e.executionResults.some(L2) : L2(e.executionResult),
  L2 = (e) => (Array.isArray(e.errors) ? e.errors.length > 0 : !!e.errors),
  t3 = (e) =>
    typeof e == "object" &&
    e !== null &&
    "kind" in e &&
    e.kind === $.OPERATION_DEFINITION,
  wC = (e) => {
    var r;
    let t;
    const n = e.definitions.filter(t3);
    return (
      n.length === 1 && (t = (r = n[0].name) == null ? void 0 : r.value), t
    );
  },
  CC = (e) => {
    let t = !1;
    const n = e.definitions.filter(t3);
    return n.length === 1 && (t = n[0].operation === or.MUTATION), t;
  },
  rc = (e, t) => {
    const n = typeof e == "string" ? e : mC(e);
    let r = !1,
      i;
    if (t) return { expression: n, isMutation: r, operationName: i };
    const o = Nw(() => (typeof e == "string" ? sC(e) : e));
    return o instanceof Error
      ? { expression: n, isMutation: r, operationName: i }
      : ((i = wC(o)),
        (r = CC(o)),
        { expression: n, operationName: i, isMutation: r });
  },
  Ed = JSON,
  ic = async (e) => {
    const t = {
        ...e,
        method:
          e.request._tag === "Single"
            ? e.request.document.isMutation
              ? "POST"
              : g2(e.method ?? "post")
            : e.request.hasMutations
            ? "POST"
            : g2(e.method ?? "post"),
        fetchOptions: {
          ...e.fetchOptions,
          errorPolicy: e.fetchOptions.errorPolicy ?? "none",
        },
      },
      r = await EC(t.method)(t);
    if (!r.ok)
      return new Qr(
        { status: r.status, headers: r.headers },
        {
          query:
            e.request._tag === "Single"
              ? e.request.document.expression
              : e.request.query,
          variables: e.request.variables,
        }
      );
    const i = await kC(r, e.fetchOptions.jsonSerializer ?? Ed);
    if (i instanceof Error) throw i;
    const o = { status: r.status, headers: r.headers };
    if (xC(i) && t.fetchOptions.errorPolicy === "none") {
      const s =
        i._tag === "Batch"
          ? { ...i.executionResults, ...o }
          : { ...i.executionResult, ...o };
      return new Qr(s, {
        query:
          e.request._tag === "Single"
            ? e.request.document.expression
            : e.request.query,
        variables: e.request.variables,
      });
    }
    switch (i._tag) {
      case "Single":
        return { ...o, ...b2(t)(i.executionResult) };
      case "Batch":
        return { ...o, data: i.executionResults.map(b2(t)) };
      default:
        wd(i);
    }
  },
  b2 = (e) => (t) => ({
    extensions: t.extensions,
    data: t.data,
    errors: e.fetchOptions.errorPolicy === "all" ? t.errors : void 0,
  }),
  kC = async (e, t) => {
    const n = e.headers.get(bu),
      r = await e.text();
    return n && yC(n) ? T2(t.parse(r)) : T2(r);
  },
  EC = (e) => async (t) => {
    const n = new Headers(t.headers);
    let r = null,
      i;
    n.has(E2) || n.set(E2, [e3, Pu].join(", ")),
      e === "POST"
        ? ((i = (t.fetchOptions.jsonSerializer ?? Ed).stringify(SC(t))),
          typeof i == "string" && !n.has(bu) && n.set(bu, Pu))
        : (r = TC(t));
    const o = { method: e, headers: n, body: i, ...t.fetchOptions };
    let s = new URL(t.url),
      a = o;
    if (t.middleware) {
      const c = await Promise.resolve(
          t.middleware({
            ...o,
            url: t.url,
            operationName:
              t.request._tag === "Single"
                ? t.request.document.operationName
                : void 0,
            variables: t.request.variables,
          })
        ),
        { url: d, ...f } = c;
      (s = new URL(d)), (a = f);
    }
    return (
      r &&
        r.forEach((c, d) => {
          s.searchParams.append(d, c);
        }),
      await (t.fetch ?? fetch)(s, a)
    );
  },
  SC = (e) => {
    switch (e.request._tag) {
      case "Single":
        return {
          query: e.request.document.expression,
          variables: e.request.variables,
          operationName: e.request.document.operationName,
        };
      case "Batch":
        return z6(e.request.query, e.request.variables ?? []).map(([t, n]) => ({
          query: t,
          variables: n,
        }));
      default:
        throw wd(e.request);
    }
  },
  TC = (e) => {
    var r;
    const t = e.fetchOptions.jsonSerializer ?? Ed,
      n = new URLSearchParams();
    switch (e.request._tag) {
      case "Single":
        return (
          n.append("query", S2(e.request.document.expression)),
          e.request.variables &&
            n.append("variables", t.stringify(e.request.variables)),
          e.request.document.operationName &&
            n.append("operationName", e.request.document.operationName),
          n
        );
      case "Batch": {
        const i =
            ((r = e.request.variables) == null
              ? void 0
              : r.map((a) => t.stringify(a))) ?? [],
          o = e.request.query.map(S2),
          s = z6(o, i).map(([a, l]) => ({ query: a, variables: l }));
        return n.append("query", t.stringify(s)), n;
      }
      default:
        throw wd(e.request);
    }
  };
class NC {
  constructor(t, n = {}) {
    Sr(this, "url");
    Sr(this, "requestConfig");
    Sr(this, "rawRequest", async (...t) => {
      const [n, r, i] = t,
        o = Pw(n, r, i),
        {
          headers: s,
          fetch: a = globalThis.fetch,
          method: l = "POST",
          requestMiddleware: c,
          responseMiddleware: d,
          excludeOperationName: f,
          ...h
        } = this.requestConfig,
        { url: g } = this;
      o.signal !== void 0 && (h.signal = o.signal);
      const w = rc(o.query, f),
        v = await ic({
          url: g,
          request: { _tag: "Single", document: w, variables: o.variables },
          headers: { ...Nr(tc(s)), ...Nr(o.requestHeaders) },
          fetch: a,
          method: l,
          fetchOptions: h,
          middleware: c,
        });
      if (
        (d &&
          (await d(v, {
            operationName: w.operationName,
            variables: r,
            url: this.url,
          })),
        v instanceof Error)
      )
        throw v;
      return v;
    });
    (this.url = t), (this.requestConfig = n);
  }
  async request(t, ...n) {
    const [r, i] = n,
      o = bC(t, r, i),
      {
        headers: s,
        fetch: a = globalThis.fetch,
        method: l = "POST",
        requestMiddleware: c,
        responseMiddleware: d,
        excludeOperationName: f,
        ...h
      } = this.requestConfig,
      { url: g } = this;
    o.signal !== void 0 && (h.signal = o.signal);
    const w = rc(o.document, f),
      v = await ic({
        url: g,
        request: { _tag: "Single", document: w, variables: o.variables },
        headers: { ...Nr(tc(s)), ...Nr(o.requestHeaders) },
        fetch: a,
        method: l,
        fetchOptions: h,
        middleware: c,
      });
    if (
      (d &&
        (await d(v, {
          operationName: w.operationName,
          variables: o.variables,
          url: this.url,
        })),
      v instanceof Error)
    )
      throw v;
    return v.data;
  }
  async batchRequests(t, n) {
    const r = bw(t, n),
      { headers: i, excludeOperationName: o, ...s } = this.requestConfig;
    r.signal !== void 0 && (s.signal = r.signal);
    const a = r.documents.map(({ document: h }) => rc(h, o)),
      l = a.map(({ expression: h }) => h),
      c = a.some(({ isMutation: h }) => h),
      d = r.documents.map(({ variables: h }) => h),
      f = await ic({
        url: this.url,
        request: {
          _tag: "Batch",
          operationName: void 0,
          query: l,
          hasMutations: c,
          variables: d,
        },
        headers: { ...Nr(tc(i)), ...Nr(r.requestHeaders) },
        fetch: this.requestConfig.fetch ?? globalThis.fetch,
        method: this.requestConfig.method || "POST",
        fetchOptions: s,
        middleware: this.requestConfig.requestMiddleware,
      });
    if (
      (this.requestConfig.responseMiddleware &&
        (await this.requestConfig.responseMiddleware(f, {
          operationName: void 0,
          variables: d,
          url: this.url,
        })),
      f instanceof Error)
    )
      throw f;
    return f.data;
  }
  setHeaders(t) {
    return (this.requestConfig.headers = t), this;
  }
  setHeader(t, n) {
    const { headers: r } = this.requestConfig;
    return r ? (r[t] = n) : (this.requestConfig.headers = { [t]: n }), this;
  }
  setEndpoint(t) {
    return (this.url = t), this;
  }
}
async function LC(e, t, ...n) {
  const r = PC(e, t, ...n);
  return new NC(r.url).request({ ...r });
}
const bC = (e, t, n) =>
    e.document
      ? e
      : { document: e, variables: t, requestHeaders: n, signal: void 0 },
  PC = (e, t, ...n) => {
    const [r, i] = n;
    return typeof e == "string"
      ? { url: e, document: t, variables: r, requestHeaders: i, signal: void 0 }
      : e;
  },
  MC = "https://api-us-west-2.hygraph.com/v2/cld3gw4bb0hr001ue9afzcunb/master",
  n3 = async (e) => {
    try {
      return await LC(MC, e);
    } catch (t) {
      throw (console.error("Error fetching data:", t), t);
    }
  },
  jC = `
query GetBlogPosts {
  blogPosts(
    first: 3
    where: { postTypeSelect: Learn}
    orderBy: date_DESC
  ) {
    id
    title
    category
    postTypeSelect
    slug
    coverImage {
      fileName
      url
    }
    date
  }

}
`,
  RC = `
query GetProUpdatesPost {
  blogPosts(
    first: 1
    where: { postTypeSelect: SalesUpdates }
    orderBy: date_DESC
  ) {
    id
    title
    category
    postTypeSelect
    slug
    coverImage {
      fileName
      url
    }
    date
  }
}
`,
  P2 = (e, t) => {
    e.postTypeSelect.toLowerCase();
    let n = "";
    t &&
      typeof t == "string" &&
      (n = encodeURIComponent(t.trim()).toLowerCase()),
      n === "insidevagaro" && (n = "inside-vagaro");
    const r = `/learn/${n ? n + "/" : ""}${e.slug}`;
    return console.log(`Generated URL for post ${e.id}: ${r}`), r;
  };
function AC() {
  const { data: e, error: t } = un(jC, n3);
  if (t) return u.jsx("div", { children: "Error loading posts." });
  if (!e) return u.jsx("div", { children: "Loading..." });
  const n = e.blogPosts;
  return u.jsx("div", {
    className: "mx-auto flex w-full max-w-4xl flex-col justify-center",
    children: u.jsxs("div", {
      className: "mx-auto px-6",
      children: [
        u.jsx("h2", {
          className: "text-lg font-bold text-primary dark:text-white my-2",
          children: "WHAT'S TRENDING",
        }),
        u.jsxs("div", {
          className: "mx-auto grid grid-cols-2",
          children: [
            u.jsx("div", {
              className: "col-span-1 row-span-2 items-center justify-center",
              children: (n[0].category || []).map((r, i) =>
                u.jsx(
                  "div",
                  {
                    className: "group h-full w-full",
                    children: u.jsxs(rn, {
                      href: P2(n[0], r),
                      children: [
                        u.jsx("div", {
                          className:
                            "flex h-full flex-col overflow-hidden rounded",
                          children: u.jsx("img", {
                            className:
                              "aspect-square h-full w-full max-w-[600px] rounded object-cover transition duration-1000 ease-in-out group-hover:scale-105",
                            src: n[0].coverImage.url,
                            alt: n[0].title,
                          }),
                        }),
                        u.jsx("h3", {
                          className:
                            "mt-2 font-semibold text-charcoal dark:text-white",
                          children: n[0].title,
                        }),
                      ],
                    }),
                  },
                  i
                )
              ),
            }),
            n
              .slice(1, 3)
              .map((r) =>
                (r.category || []).map((i, o) =>
                  u.jsx(
                    "div",
                    {
                      className:
                        "col-span-1 row-span-1 flex h-full items-center justify-center gap-3",
                      children: u.jsxs(rn, {
                        href: P2(r, i),
                        children: [
                          u.jsx("div", {
                            className: "flex flex-col overflow-hidden rounded",
                            children: u.jsx("img", {
                              className:
                                "h-fill w-64 rounded object-cover transition duration-1000 ease-in-out hover:scale-105",
                              src: r.coverImage.url,
                              alt: r.title,
                            }),
                          }),
                          u.jsx("h3", {
                            className:
                              "mt-2 max-w-xs text-xs font-bold text-charcoal dark:text-white",
                            children: r.title,
                          }),
                        ],
                      }),
                    },
                    o
                  )
                )
              ),
          ],
        }),
      ],
    }),
  });
}
function IC() {
  const e = [
    { id: 1, name: "Trending", href: "/pro/resources#trending", icon: gw },
    { id: 2, name: "Education", href: "/pro/resources#education", icon: kw },
    { id: 3, name: "Media", href: "/pro/resources#media", icon: yw },
    {
      id: 4,
      name: "Pro Updates",
      href: "/pro/resources#pro-updates",
      icon: pw,
    },
    {
      id: 5,
      name: "Inside Look",
      href: "/pro/resources#inside-look",
      icon: ww,
    },
  ];
  return u.jsxs("div", {
    className: "w-40 max-w-96 rounded-lg bg-white p-2 dark:bg-menuBgDark",
    children: [
      u.jsx("h2", {
        className: "mb-4 text-lg font-bold text-primary dark:text-white",
        children: "RESOURCES",
      }),
      u.jsx("ul", {
        className: "flex flex-col gap-2 font-semibold text-charcoal",
        children: e.map((t) =>
          u.jsx(u.Fragment, {
            children: u.jsx(
              "div",
              {
                className: "group cursor-pointer",
                children: u.jsx("li", {
                  className:
                    "flex items-center rounded p-2 group-hover:bg-wavegray",
                  children: u.jsx("a", {
                    href: t.href,
                    className:
                      "text-charcoal group-hover:text-primary dark:text-white/70",
                    children: t.name,
                  }),
                }),
              },
              t.id
            ),
          })
        ),
      }),
    ],
  });
}
function DC() {
  const { data: e, error: t } = un(RC, n3);
  if (t) return u.jsx("div", { children: "Error loading updates." });
  if (!e) return u.jsx("div", { children: "Loading..." });
  const n = e.blogPosts[0];
  return u.jsx(u.Fragment, {
    children: u.jsx(
      rn,
      {
        href: `/pro/updates/${n.slug}`,
        children: u.jsxs("div", {
          className: "mx-auto w-full p-2",
          children: [
            u.jsx("h2", {
              className: "text-lg font-bold text-primary dark:text-white",
              children: "PRO UPDATES",
            }),
            u.jsxs("div", {
              className: "group",
              children: [
                u.jsxs("div", {
                  className:
                    "mt-4 flex flex-col items-start justify-start gap-4",
                  children: [
                    u.jsx("img", {
                      className:
                        "max-w-96 rounded transition duration-1000 ease-in-out group-hover:scale-105",
                      src: n.coverImage.url,
                      alt: "",
                    }),
                    u.jsx("span", {
                      className:
                        "text-xl font-bold text-charcoal dark:text-white",
                      children: n.title,
                    }),
                  ],
                }),
                u.jsx("div", {
                  className: "mt-4 text-left",
                  children: u.jsx("button", {
                    className: "text-blue-500 hover:text-blue-600",
                    children: "Learn more",
                  }),
                }),
              ],
            }),
          ],
        }),
      },
      n.id
    ),
  });
}
function $C({ recentPosts: e }) {
  return u.jsx("div", {
    className:
      "hidden h-[500px] w-full justify-center gap-x-8 bg-white pb-8 dark:bg-menuBgDark lg:flex",
    children: u.jsxs("div", {
      className: "flex flex-col p-2 md:flex-row px-8 mx-auto",
      children: [
        u.jsx("div", {
          className: "flex-0 md:border-r md:border-gray-300",
          children: u.jsx(IC, {}),
        }),
        u.jsx("div", {
          className: "flex-2 mx-auto md:border-r md:border-gray-300",
          children: u.jsx(AC, { recentPosts: e }),
        }),
        u.jsx("div", { className: "flex-1", children: u.jsx(DC, {}) }),
      ],
    }),
  });
}
function Y() {
  return (
    (Y = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Y.apply(null, arguments)
  );
}
function re(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (i) {
    if ((e == null || e(i), n === !1 || !i.defaultPrevented))
      return t == null ? void 0 : t(i);
  };
}
function Ja(e, t = []) {
  let n = [];
  function r(o, s) {
    const a = p.createContext(s),
      l = n.length;
    n = [...n, s];
    function c(f) {
      const { scope: h, children: g, ...w } = f,
        v = (h == null ? void 0 : h[e][l]) || a,
        k = p.useMemo(() => w, Object.values(w));
      return p.createElement(v.Provider, { value: k }, g);
    }
    function d(f, h) {
      const g = (h == null ? void 0 : h[e][l]) || a,
        w = p.useContext(g);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return (c.displayName = o + "Provider"), [c, d];
  }
  const i = () => {
    const o = n.map((s) => p.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || o;
      return p.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (i.scopeName = e), [r, OC(i, ...t)];
}
function OC(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (o) {
      const s = r.reduce((a, { useScope: l, scopeName: c }) => {
        const f = l(o)[`__scope${c}`];
        return { ...a, ...f };
      }, {});
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Xe(e) {
  const t = p.useRef(e);
  return (
    p.useEffect(() => {
      t.current = e;
    }),
    p.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      []
    )
  );
}
function r3({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, i] = VC({ defaultProp: t, onChange: n }),
    o = e !== void 0,
    s = o ? e : r,
    a = Xe(n),
    l = p.useCallback(
      (c) => {
        if (o) {
          const f = typeof c == "function" ? c(e) : c;
          f !== e && a(f);
        } else i(c);
      },
      [o, e, i, a]
    );
  return [s, l];
}
function VC({ defaultProp: e, onChange: t }) {
  const n = p.useState(e),
    [r] = n,
    i = p.useRef(r),
    o = Xe(t);
  return (
    p.useEffect(() => {
      i.current !== r && (o(r), (i.current = r));
    }, [r, i, o]),
    n
  );
}
function _C(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Sd(...e) {
  return (t) => e.forEach((n) => _C(n, t));
}
function xt(...e) {
  return p.useCallback(Sd(...e), e);
}
const FC = ["top", "right", "bottom", "left"],
  $t = Math.min,
  Je = Math.max,
  ya = Math.round,
  gs = Math.floor,
  Fn = (e) => ({ x: e, y: e }),
  HC = { left: "right", right: "left", bottom: "top", top: "bottom" },
  BC = { start: "end", end: "start" };
function Mu(e, t, n) {
  return Je(e, $t(t, n));
}
function sn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function an(e) {
  return e.split("-")[0];
}
function pi(e) {
  return e.split("-")[1];
}
function Td(e) {
  return e === "x" ? "y" : "x";
}
function Nd(e) {
  return e === "y" ? "height" : "width";
}
function mi(e) {
  return ["top", "bottom"].includes(an(e)) ? "y" : "x";
}
function Ld(e) {
  return Td(mi(e));
}
function zC(e, t, n) {
  n === void 0 && (n = !1);
  const r = pi(e),
    i = Ld(e),
    o = Nd(i);
  let s =
    i === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[o] > t.floating[o] && (s = xa(s)), [s, xa(s)];
}
function UC(e) {
  const t = xa(e);
  return [ju(e), t, ju(t)];
}
function ju(e) {
  return e.replace(/start|end/g, (t) => BC[t]);
}
function WC(e, t, n) {
  const r = ["left", "right"],
    i = ["right", "left"],
    o = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? i : r) : t ? r : i;
    case "left":
    case "right":
      return t ? o : s;
    default:
      return [];
  }
}
function ZC(e, t, n, r) {
  const i = pi(e);
  let o = WC(an(e), n === "start", r);
  return (
    i && ((o = o.map((s) => s + "-" + i)), t && (o = o.concat(o.map(ju)))), o
  );
}
function xa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => HC[t]);
}
function KC(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function i3(e) {
  return typeof e != "number"
    ? KC(e)
    : { top: e, right: e, bottom: e, left: e };
}
function wa(e) {
  const { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
function M2(e, t, n) {
  let { reference: r, floating: i } = e;
  const o = mi(t),
    s = Ld(t),
    a = Nd(s),
    l = an(t),
    c = o === "y",
    d = r.x + r.width / 2 - i.width / 2,
    f = r.y + r.height / 2 - i.height / 2,
    h = r[a] / 2 - i[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = { x: d, y: r.y - i.height };
      break;
    case "bottom":
      g = { x: d, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: f };
      break;
    case "left":
      g = { x: r.x - i.width, y: f };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch (pi(t)) {
    case "start":
      g[s] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      g[s] += h * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const GC = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: i = "absolute",
      middleware: o = [],
      platform: s,
    } = n,
    a = o.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: d, y: f } = M2(c, r, l),
    h = r,
    g = {},
    w = 0;
  for (let v = 0; v < a.length; v++) {
    const { name: k, fn: m } = a[v],
      {
        x: y,
        y: x,
        data: C,
        reset: E,
      } = await m({
        x: d,
        y: f,
        initialPlacement: r,
        placement: h,
        strategy: i,
        middlewareData: g,
        rects: c,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (d = y ?? d),
      (f = x ?? f),
      (g = { ...g, [k]: { ...g[k], ...C } }),
      E &&
        w <= 50 &&
        (w++,
        typeof E == "object" &&
          (E.placement && (h = E.placement),
          E.rects &&
            (c =
              E.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i,
                  })
                : E.rects),
          ({ x: d, y: f } = M2(c, h, l))),
        (v = -1));
  }
  return { x: d, y: f, placement: h, strategy: i, middlewareData: g };
};
async function Co(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: i, platform: o, rects: s, elements: a, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: h = !1,
      padding: g = 0,
    } = sn(t, e),
    w = i3(g),
    k = a[h ? (f === "floating" ? "reference" : "floating") : f],
    m = wa(
      await o.getClippingRect({
        element:
          (n = await (o.isElement == null ? void 0 : o.isElement(k))) == null ||
          n
            ? k
            : k.contextElement ||
              (await (o.getDocumentElement == null
                ? void 0
                : o.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: d,
        strategy: l,
      })
    ),
    y =
      f === "floating"
        ? { x: r, y: i, width: s.floating.width, height: s.floating.height }
        : s.reference,
    x = await (o.getOffsetParent == null
      ? void 0
      : o.getOffsetParent(a.floating)),
    C = (await (o.isElement == null ? void 0 : o.isElement(x)))
      ? (await (o.getScale == null ? void 0 : o.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = wa(
      o.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: y,
            offsetParent: x,
            strategy: l,
          })
        : y
    );
  return {
    top: (m.top - E.top + w.top) / C.y,
    bottom: (E.bottom - m.bottom + w.bottom) / C.y,
    left: (m.left - E.left + w.left) / C.x,
    right: (E.right - m.right + w.right) / C.x,
  };
}
const qC = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: i,
          rects: o,
          platform: s,
          elements: a,
          middlewareData: l,
        } = t,
        { element: c, padding: d = 0 } = sn(e, t) || {};
      if (c == null) return {};
      const f = i3(d),
        h = { x: n, y: r },
        g = Ld(i),
        w = Nd(g),
        v = await s.getDimensions(c),
        k = g === "y",
        m = k ? "top" : "left",
        y = k ? "bottom" : "right",
        x = k ? "clientHeight" : "clientWidth",
        C = o.reference[w] + o.reference[g] - h[g] - o.floating[w],
        E = h[g] - o.reference[g],
        T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
      let N = T ? T[x] : 0;
      (!N || !(await (s.isElement == null ? void 0 : s.isElement(T)))) &&
        (N = a.floating[x] || o.floating[w]);
      const S = C / 2 - E / 2,
        P = N / 2 - v[w] / 2 - 1,
        b = $t(f[m], P),
        I = $t(f[y], P),
        V = b,
        z = N - v[w] - I,
        _ = N / 2 - v[w] / 2 + S,
        B = Mu(V, _, z),
        Z =
          !l.arrow &&
          pi(i) != null &&
          _ !== B &&
          o.reference[w] / 2 - (_ < V ? b : I) - v[w] / 2 < 0,
        H = Z ? (_ < V ? _ - V : _ - z) : 0;
      return {
        [g]: h[g] + H,
        data: {
          [g]: B,
          centerOffset: _ - B - H,
          ...(Z && { alignmentOffset: H }),
        },
        reset: Z,
      };
    },
  }),
  YC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: i,
              middlewareData: o,
              rects: s,
              initialPlacement: a,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: v = !0,
              ...k
            } = sn(e, t);
          if ((n = o.arrow) != null && n.alignmentOffset) return {};
          const m = an(i),
            y = an(a) === a,
            x = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            C = h || (y || !v ? [xa(a)] : UC(a));
          !h && w !== "none" && C.push(...ZC(a, v, w, x));
          const E = [a, ...C],
            T = await Co(t, k),
            N = [];
          let S = ((r = o.flip) == null ? void 0 : r.overflows) || [];
          if ((d && N.push(T[m]), f)) {
            const V = zC(i, s, x);
            N.push(T[V[0]], T[V[1]]);
          }
          if (
            ((S = [...S, { placement: i, overflows: N }]),
            !N.every((V) => V <= 0))
          ) {
            var P, b;
            const V = (((P = o.flip) == null ? void 0 : P.index) || 0) + 1,
              z = E[V];
            if (z)
              return {
                data: { index: V, overflows: S },
                reset: { placement: z },
              };
            let _ =
              (b = S.filter((B) => B.overflows[0] <= 0).sort(
                (B, Z) => B.overflows[1] - Z.overflows[1]
              )[0]) == null
                ? void 0
                : b.placement;
            if (!_)
              switch (g) {
                case "bestFit": {
                  var I;
                  const B =
                    (I = S.map((Z) => [
                      Z.placement,
                      Z.overflows
                        .filter((H) => H > 0)
                        .reduce((H, j) => H + j, 0),
                    ]).sort((Z, H) => Z[1] - H[1])[0]) == null
                      ? void 0
                      : I[0];
                  B && (_ = B);
                  break;
                }
                case "initialPlacement":
                  _ = a;
                  break;
              }
            if (i !== _) return { reset: { placement: _ } };
          }
          return {};
        },
      }
    );
  };
function j2(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function R2(e) {
  return FC.some((t) => e[t] >= 0);
}
const QC = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...i } = sn(e, t);
        switch (r) {
          case "referenceHidden": {
            const o = await Co(t, { ...i, elementContext: "reference" }),
              s = j2(o, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: R2(s) },
            };
          }
          case "escaped": {
            const o = await Co(t, { ...i, altBoundary: !0 }),
              s = j2(o, n.floating);
            return { data: { escapedOffsets: s, escaped: R2(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function XC(e, t) {
  const { placement: n, platform: r, elements: i } = e,
    o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    s = an(n),
    a = pi(n),
    l = mi(n) === "y",
    c = ["left", "top"].includes(s) ? -1 : 1,
    d = o && l ? -1 : 1,
    f = sn(t, e);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: w,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
  return (
    a && typeof w == "number" && (g = a === "end" ? w * -1 : w),
    l ? { x: g * d, y: h * c } : { x: h * c, y: g * d }
  );
}
const JC = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: i, y: o, placement: s, middlewareData: a } = t,
            l = await XC(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: i + l.x, y: o + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  ek = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: i } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (k) => {
                  let { x: m, y } = k;
                  return { x: m, y };
                },
              },
              ...l
            } = sn(e, t),
            c = { x: n, y: r },
            d = await Co(t, l),
            f = mi(an(i)),
            h = Td(f);
          let g = c[h],
            w = c[f];
          if (o) {
            const k = h === "y" ? "top" : "left",
              m = h === "y" ? "bottom" : "right",
              y = g + d[k],
              x = g - d[m];
            g = Mu(y, g, x);
          }
          if (s) {
            const k = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              y = w + d[k],
              x = w - d[m];
            w = Mu(y, w, x);
          }
          const v = a.fn({ ...t, [h]: g, [f]: w });
          return { ...v, data: { x: v.x - n, y: v.y - r } };
        },
      }
    );
  },
  tk = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: i, rects: o, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = sn(e, t),
            d = { x: n, y: r },
            f = mi(i),
            h = Td(f);
          let g = d[h],
            w = d[f];
          const v = sn(a, t),
            k =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (l) {
            const x = h === "y" ? "height" : "width",
              C = o.reference[h] - o.floating[x] + k.mainAxis,
              E = o.reference[h] + o.reference[x] - k.mainAxis;
            g < C ? (g = C) : g > E && (g = E);
          }
          if (c) {
            var m, y;
            const x = h === "y" ? "width" : "height",
              C = ["top", "left"].includes(an(i)),
              E =
                o.reference[f] -
                o.floating[x] +
                ((C && ((m = s.offset) == null ? void 0 : m[f])) || 0) +
                (C ? 0 : k.crossAxis),
              T =
                o.reference[f] +
                o.reference[x] +
                (C ? 0 : ((y = s.offset) == null ? void 0 : y[f]) || 0) -
                (C ? k.crossAxis : 0);
            w < E ? (w = E) : w > T && (w = T);
          }
          return { [h]: g, [f]: w };
        },
      }
    );
  },
  nk = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: i, elements: o } = t,
            { apply: s = () => {}, ...a } = sn(e, t),
            l = await Co(t, a),
            c = an(n),
            d = pi(n),
            f = mi(n) === "y",
            { width: h, height: g } = r.floating;
          let w, v;
          c === "top" || c === "bottom"
            ? ((w = c),
              (v =
                d ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(o.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((v = c), (w = d === "end" ? "top" : "bottom"));
          const k = g - l.top - l.bottom,
            m = h - l.left - l.right,
            y = $t(g - l[w], k),
            x = $t(h - l[v], m),
            C = !t.middlewareData.shift;
          let E = y,
            T = x;
          if (
            (f ? (T = d || C ? $t(x, m) : m) : (E = d || C ? $t(y, k) : k),
            C && !d)
          ) {
            const S = Je(l.left, 0),
              P = Je(l.right, 0),
              b = Je(l.top, 0),
              I = Je(l.bottom, 0);
            f
              ? (T = h - 2 * (S !== 0 || P !== 0 ? S + P : Je(l.left, l.right)))
              : (E =
                  g - 2 * (b !== 0 || I !== 0 ? b + I : Je(l.top, l.bottom)));
          }
          await s({ ...t, availableWidth: T, availableHeight: E });
          const N = await i.getDimensions(o.floating);
          return h !== N.width || g !== N.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function gi(e) {
  return o3(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function nt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function dn(e) {
  var t;
  return (t = (o3(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function o3(e) {
  return e instanceof Node || e instanceof nt(e).Node;
}
function Ft(e) {
  return e instanceof Element || e instanceof nt(e).Element;
}
function Ht(e) {
  return e instanceof HTMLElement || e instanceof nt(e).HTMLElement;
}
function A2(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof nt(e).ShadowRoot;
}
function Oo(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = Pt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(i)
  );
}
function rk(e) {
  return ["table", "td", "th"].includes(gi(e));
}
function bd(e) {
  const t = Pd(),
    n = Pt(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function ik(e) {
  let t = Hn(e);
  for (; Ht(t) && !li(t); ) {
    if (bd(t)) return t;
    t = Hn(t);
  }
  return null;
}
function Pd() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function li(e) {
  return ["html", "body", "#document"].includes(gi(e));
}
function Pt(e) {
  return nt(e).getComputedStyle(e);
}
function el(e) {
  return Ft(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Hn(e) {
  if (gi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (A2(e) && e.host) || dn(e);
  return A2(t) ? t.host : t;
}
function s3(e) {
  const t = Hn(e);
  return li(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Ht(t) && Oo(t)
    ? t
    : s3(t);
}
function ko(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = s3(e),
    o = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = nt(i);
  return o
    ? t.concat(
        s,
        s.visualViewport || [],
        Oo(i) ? i : [],
        s.frameElement && n ? ko(s.frameElement) : []
      )
    : t.concat(i, ko(i, [], n));
}
function a3(e) {
  const t = Pt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const i = Ht(e),
    o = i ? e.offsetWidth : n,
    s = i ? e.offsetHeight : r,
    a = ya(n) !== o || ya(r) !== s;
  return a && ((n = o), (r = s)), { width: n, height: r, $: a };
}
function Md(e) {
  return Ft(e) ? e : e.contextElement;
}
function Xr(e) {
  const t = Md(e);
  if (!Ht(t)) return Fn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: i, $: o } = a3(t);
  let s = (o ? ya(n.width) : n.width) / r,
    a = (o ? ya(n.height) : n.height) / i;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const ok = Fn(0);
function l3(e) {
  const t = nt(e);
  return !Pd() || !t.visualViewport
    ? ok
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function sk(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== nt(e)) ? !1 : t;
}
function vr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(),
    o = Md(e);
  let s = Fn(1);
  t && (r ? Ft(r) && (s = Xr(r)) : (s = Xr(e)));
  const a = sk(o, n, r) ? l3(o) : Fn(0);
  let l = (i.left + a.x) / s.x,
    c = (i.top + a.y) / s.y,
    d = i.width / s.x,
    f = i.height / s.y;
  if (o) {
    const h = nt(o),
      g = r && Ft(r) ? nt(r) : r;
    let w = h,
      v = w.frameElement;
    for (; v && r && g !== w; ) {
      const k = Xr(v),
        m = v.getBoundingClientRect(),
        y = Pt(v),
        x = m.left + (v.clientLeft + parseFloat(y.paddingLeft)) * k.x,
        C = m.top + (v.clientTop + parseFloat(y.paddingTop)) * k.y;
      (l *= k.x),
        (c *= k.y),
        (d *= k.x),
        (f *= k.y),
        (l += x),
        (c += C),
        (w = nt(v)),
        (v = w.frameElement);
    }
  }
  return wa({ width: d, height: f, x: l, y: c });
}
const ak = [":popover-open", ":modal"];
function jd(e) {
  return ak.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function lk(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
  const o = i === "fixed",
    s = dn(r),
    a = t ? jd(t.floating) : !1;
  if (r === s || (a && o)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = Fn(1);
  const d = Fn(0),
    f = Ht(r);
  if (
    (f || (!f && !o)) &&
    ((gi(r) !== "body" || Oo(s)) && (l = el(r)), Ht(r))
  ) {
    const h = vr(r);
    (c = Xr(r)), (d.x = h.x + r.clientLeft), (d.y = h.y + r.clientTop);
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y,
  };
}
function ck(e) {
  return Array.from(e.getClientRects());
}
function c3(e) {
  return vr(dn(e)).left + el(e).scrollLeft;
}
function uk(e) {
  const t = dn(e),
    n = el(e),
    r = e.ownerDocument.body,
    i = Je(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    o = Je(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + c3(e);
  const a = -n.scrollTop;
  return (
    Pt(r).direction === "rtl" && (s += Je(t.clientWidth, r.clientWidth) - i),
    { width: i, height: o, x: s, y: a }
  );
}
function dk(e, t) {
  const n = nt(e),
    r = dn(e),
    i = n.visualViewport;
  let o = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    (o = i.width), (s = i.height);
    const c = Pd();
    (!c || (c && t === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: o, height: s, x: a, y: l };
}
function fk(e, t) {
  const n = vr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    o = Ht(e) ? Xr(e) : Fn(1),
    s = e.clientWidth * o.x,
    a = e.clientHeight * o.y,
    l = i * o.x,
    c = r * o.y;
  return { width: s, height: a, x: l, y: c };
}
function I2(e, t, n) {
  let r;
  if (t === "viewport") r = dk(e, n);
  else if (t === "document") r = uk(dn(e));
  else if (Ft(t)) r = fk(t, n);
  else {
    const i = l3(e);
    r = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return wa(r);
}
function u3(e, t) {
  const n = Hn(e);
  return n === t || !Ft(n) || li(n)
    ? !1
    : Pt(n).position === "fixed" || u3(n, t);
}
function hk(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ko(e, [], !1).filter((a) => Ft(a) && gi(a) !== "body"),
    i = null;
  const o = Pt(e).position === "fixed";
  let s = o ? Hn(e) : e;
  for (; Ft(s) && !li(s); ) {
    const a = Pt(s),
      l = bd(s);
    !l && a.position === "fixed" && (i = null),
      (
        o
          ? !l && !i
          : (!l &&
              a.position === "static" &&
              !!i &&
              ["absolute", "fixed"].includes(i.position)) ||
            (Oo(s) && !l && u3(e, s))
      )
        ? (r = r.filter((d) => d !== s))
        : (i = a),
      (s = Hn(s));
  }
  return t.set(e, r), r;
}
function pk(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? jd(t)
          ? []
          : hk(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = s[0],
    l = s.reduce((c, d) => {
      const f = I2(t, d, i);
      return (
        (c.top = Je(f.top, c.top)),
        (c.right = $t(f.right, c.right)),
        (c.bottom = $t(f.bottom, c.bottom)),
        (c.left = Je(f.left, c.left)),
        c
      );
    }, I2(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function mk(e) {
  const { width: t, height: n } = a3(e);
  return { width: t, height: n };
}
function gk(e, t, n) {
  const r = Ht(t),
    i = dn(t),
    o = n === "fixed",
    s = vr(e, !0, o, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Fn(0);
  if (r || (!r && !o))
    if (((gi(t) !== "body" || Oo(i)) && (a = el(t)), r)) {
      const f = vr(t, !0, o, t);
      (l.x = f.x + t.clientLeft), (l.y = f.y + t.clientTop);
    } else i && (l.x = c3(i));
  const c = s.left + a.scrollLeft - l.x,
    d = s.top + a.scrollTop - l.y;
  return { x: c, y: d, width: s.width, height: s.height };
}
function oc(e) {
  return Pt(e).position === "static";
}
function D2(e, t) {
  return !Ht(e) || Pt(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function d3(e, t) {
  const n = nt(e);
  if (jd(e)) return n;
  if (!Ht(e)) {
    let i = Hn(e);
    for (; i && !li(i); ) {
      if (Ft(i) && !oc(i)) return i;
      i = Hn(i);
    }
    return n;
  }
  let r = D2(e, t);
  for (; r && rk(r) && oc(r); ) r = D2(r, t);
  return r && li(r) && oc(r) && !bd(r) ? n : r || ik(e) || n;
}
const vk = async function (e) {
  const t = this.getOffsetParent || d3,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: gk(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function yk(e) {
  return Pt(e).direction === "rtl";
}
const xk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: lk,
  getDocumentElement: dn,
  getClippingRect: pk,
  getOffsetParent: d3,
  getElementRects: vk,
  getClientRects: ck,
  getDimensions: mk,
  getScale: Xr,
  isElement: Ft,
  isRTL: yk,
};
function wk(e, t) {
  let n = null,
    r;
  const i = dn(e);
  function o() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), o();
    const { left: c, top: d, width: f, height: h } = e.getBoundingClientRect();
    if ((a || t(), !f || !h)) return;
    const g = gs(d),
      w = gs(i.clientWidth - (c + f)),
      v = gs(i.clientHeight - (d + h)),
      k = gs(c),
      y = {
        rootMargin: -g + "px " + -w + "px " + -v + "px " + -k + "px",
        threshold: Je(0, $t(1, l)) || 1,
      };
    let x = !0;
    function C(E) {
      const T = E[0].intersectionRatio;
      if (T !== l) {
        if (!x) return s();
        T
          ? s(!1, T)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(C, { ...y, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, y);
    }
    n.observe(e);
  }
  return s(!0), o;
}
function Ck(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: o = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    c = Md(e),
    d = i || o ? [...(c ? ko(c) : []), ...ko(t)] : [];
  d.forEach((m) => {
    i && m.addEventListener("scroll", n, { passive: !0 }),
      o && m.addEventListener("resize", n);
  });
  const f = c && a ? wk(c, n) : null;
  let h = -1,
    g = null;
  s &&
    ((g = new ResizeObserver((m) => {
      let [y] = m;
      y &&
        y.target === c &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var x;
          (x = g) == null || x.observe(t);
        }))),
        n();
    })),
    c && !l && g.observe(c),
    g.observe(t));
  let w,
    v = l ? vr(e) : null;
  l && k();
  function k() {
    const m = vr(e);
    v &&
      (m.x !== v.x ||
        m.y !== v.y ||
        m.width !== v.width ||
        m.height !== v.height) &&
      n(),
      (v = m),
      (w = requestAnimationFrame(k));
  }
  return (
    n(),
    () => {
      var m;
      d.forEach((y) => {
        i && y.removeEventListener("scroll", n),
          o && y.removeEventListener("resize", n);
      }),
        f == null || f(),
        (m = g) == null || m.disconnect(),
        (g = null),
        l && cancelAnimationFrame(w);
    }
  );
}
const kk = JC,
  Ek = ek,
  Sk = YC,
  Tk = nk,
  Nk = QC,
  $2 = qC,
  Lk = tk,
  bk = (e, t, n) => {
    const r = new Map(),
      i = { platform: xk, ...n },
      o = { ...i.platform, _c: r };
    return GC(e, t, { ...i, platform: o });
  };
var Vs = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function Ca(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ca(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const o = i[r];
      if (!(o === "_owner" && e.$$typeof) && !Ca(e[o], t[o])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function f3(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function O2(e, t) {
  const n = f3(e);
  return Math.round(t * n) / n;
}
function V2(e) {
  const t = p.useRef(e);
  return (
    Vs(() => {
      t.current = e;
    }),
    t
  );
}
function Pk(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: i,
      elements: { reference: o, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: c,
    } = e,
    [d, f] = p.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, g] = p.useState(r);
  Ca(h, r) || g(r);
  const [w, v] = p.useState(null),
    [k, m] = p.useState(null),
    y = p.useCallback((H) => {
      H !== T.current && ((T.current = H), v(H));
    }, []),
    x = p.useCallback((H) => {
      H !== N.current && ((N.current = H), m(H));
    }, []),
    C = o || w,
    E = s || k,
    T = p.useRef(null),
    N = p.useRef(null),
    S = p.useRef(d),
    P = l != null,
    b = V2(l),
    I = V2(i),
    V = p.useCallback(() => {
      if (!T.current || !N.current) return;
      const H = { placement: t, strategy: n, middleware: h };
      I.current && (H.platform = I.current),
        bk(T.current, N.current, H).then((j) => {
          const D = { ...j, isPositioned: !0 };
          z.current &&
            !Ca(S.current, D) &&
            ((S.current = D),
            Mo.flushSync(() => {
              f(D);
            }));
        });
    }, [h, t, n, I]);
  Vs(() => {
    c === !1 &&
      S.current.isPositioned &&
      ((S.current.isPositioned = !1), f((H) => ({ ...H, isPositioned: !1 })));
  }, [c]);
  const z = p.useRef(!1);
  Vs(
    () => (
      (z.current = !0),
      () => {
        z.current = !1;
      }
    ),
    []
  ),
    Vs(() => {
      if ((C && (T.current = C), E && (N.current = E), C && E)) {
        if (b.current) return b.current(C, E, V);
        V();
      }
    }, [C, E, V, b, P]);
  const _ = p.useMemo(
      () => ({ reference: T, floating: N, setReference: y, setFloating: x }),
      [y, x]
    ),
    B = p.useMemo(() => ({ reference: C, floating: E }), [C, E]),
    Z = p.useMemo(() => {
      const H = { position: n, left: 0, top: 0 };
      if (!B.floating) return H;
      const j = O2(B.floating, d.x),
        D = O2(B.floating, d.y);
      return a
        ? {
            ...H,
            transform: "translate(" + j + "px, " + D + "px)",
            ...(f3(B.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: j, top: D };
    }, [n, a, B.floating, d.x, d.y]);
  return p.useMemo(
    () => ({ ...d, update: V, refs: _, elements: B, floatingStyles: Z }),
    [d, V, _, B, Z]
  );
}
const Mk = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: i } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? $2({ element: r.current, padding: i }).fn(n)
            : {}
          : r
          ? $2({ element: r, padding: i }).fn(n)
          : {};
      },
    };
  },
  jk = (e, t) => ({ ...kk(e), options: [e, t] }),
  Rk = (e, t) => ({ ...Ek(e), options: [e, t] }),
  Ak = (e, t) => ({ ...Lk(e), options: [e, t] }),
  Ik = (e, t) => ({ ...Sk(e), options: [e, t] }),
  Dk = (e, t) => ({ ...Tk(e), options: [e, t] }),
  $k = (e, t) => ({ ...Nk(e), options: [e, t] }),
  Ok = (e, t) => ({ ...Mk(e), options: [e, t] }),
  ka = p.forwardRef((e, t) => {
    const { children: n, ...r } = e,
      i = p.Children.toArray(n),
      o = i.find(_k);
    if (o) {
      const s = o.props.children,
        a = i.map((l) =>
          l === o
            ? p.Children.count(s) > 1
              ? p.Children.only(null)
              : p.isValidElement(s)
              ? s.props.children
              : null
            : l
        );
      return p.createElement(
        Ru,
        Y({}, r, { ref: t }),
        p.isValidElement(s) ? p.cloneElement(s, void 0, a) : null
      );
    }
    return p.createElement(Ru, Y({}, r, { ref: t }), n);
  });
ka.displayName = "Slot";
const Ru = p.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return p.isValidElement(n)
    ? p.cloneElement(n, { ...Fk(r, n.props), ref: t ? Sd(t, n.ref) : n.ref })
    : p.Children.count(n) > 1
    ? p.Children.only(null)
    : null;
});
Ru.displayName = "SlotClone";
const Vk = ({ children: e }) => p.createElement(p.Fragment, null, e);
function _k(e) {
  return p.isValidElement(e) && e.type === Vk;
}
function Fk(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? i && o
        ? (n[r] = (...a) => {
            o(...a), i(...a);
          })
        : i && (n[r] = i)
      : r === "style"
      ? (n[r] = { ...i, ...o })
      : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
const Hk = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  je = Hk.reduce((e, t) => {
    const n = p.forwardRef((r, i) => {
      const { asChild: o, ...s } = r,
        a = o ? ka : t;
      return (
        p.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        p.createElement(a, Y({}, s, { ref: i }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Au(e, t) {
  e && Mo.flushSync(() => e.dispatchEvent(t));
}
const Bk = p.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: i = 5, ...o } = e;
    return p.createElement(
      je.svg,
      Y({}, o, {
        ref: t,
        width: r,
        height: i,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
      }),
      e.asChild ? n : p.createElement("polygon", { points: "0,0 30,0 15,10" })
    );
  }),
  zk = Bk,
  ln = globalThis != null && globalThis.document ? p.useLayoutEffect : () => {};
function Uk(e) {
  const [t, n] = p.useState(void 0);
  return (
    ln(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((i) => {
          if (!Array.isArray(i) || !i.length) return;
          const o = i[0];
          let s, a;
          if ("borderBoxSize" in o) {
            const l = o.borderBoxSize,
              c = Array.isArray(l) ? l[0] : l;
            (s = c.inlineSize), (a = c.blockSize);
          } else (s = e.offsetWidth), (a = e.offsetHeight);
          n({ width: s, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
const h3 = "Popper",
  [p3, m3] = Ja(h3),
  [Wk, g3] = p3(h3),
  Zk = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, i] = p.useState(null);
    return p.createElement(Wk, { scope: t, anchor: r, onAnchorChange: i }, n);
  },
  Kk = "PopperAnchor",
  Gk = p.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...i } = e,
      o = g3(Kk, n),
      s = p.useRef(null),
      a = xt(t, s);
    return (
      p.useEffect(() => {
        o.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : p.createElement(je.div, Y({}, i, { ref: a }))
    );
  }),
  v3 = "PopperContent",
  [qk, Yk] = p3(v3),
  Qk = p.forwardRef((e, t) => {
    var n, r, i, o, s, a, l, c;
    const {
        __scopePopper: d,
        side: f = "bottom",
        sideOffset: h = 0,
        align: g = "center",
        alignOffset: w = 0,
        arrowPadding: v = 0,
        avoidCollisions: k = !0,
        collisionBoundary: m = [],
        collisionPadding: y = 0,
        sticky: x = "partial",
        hideWhenDetached: C = !1,
        updatePositionStrategy: E = "optimized",
        onPlaced: T,
        ...N
      } = e,
      S = g3(v3, d),
      [P, b] = p.useState(null),
      I = xt(t, (ne) => b(ne)),
      [V, z] = p.useState(null),
      _ = Uk(V),
      B = (n = _ == null ? void 0 : _.width) !== null && n !== void 0 ? n : 0,
      Z = (r = _ == null ? void 0 : _.height) !== null && r !== void 0 ? r : 0,
      H = f + (g !== "center" ? "-" + g : ""),
      j =
        typeof y == "number"
          ? y
          : { top: 0, right: 0, bottom: 0, left: 0, ...y },
      D = Array.isArray(m) ? m : [m],
      F = D.length > 0,
      K = { padding: j, boundary: D.filter(tE), altBoundary: F },
      {
        refs: J,
        floatingStyles: at,
        placement: lt,
        isPositioned: qe,
        middlewareData: Te,
      } = Pk({
        strategy: "fixed",
        placement: H,
        whileElementsMounted: (...ne) =>
          Ck(...ne, { animationFrame: E === "always" }),
        elements: { reference: S.anchor },
        middleware: [
          jk({ mainAxis: h + Z, alignmentAxis: w }),
          k &&
            Rk({
              mainAxis: !0,
              crossAxis: !1,
              limiter: x === "partial" ? Ak() : void 0,
              ...K,
            }),
          k && Ik({ ...K }),
          Dk({
            ...K,
            apply: ({
              elements: ne,
              rects: Ye,
              availableWidth: fn,
              availableHeight: ye,
            }) => {
              const { width: Ne, height: wt } = Ye.reference,
                Kn = ne.floating.style;
              Kn.setProperty("--radix-popper-available-width", `${fn}px`),
                Kn.setProperty("--radix-popper-available-height", `${ye}px`),
                Kn.setProperty("--radix-popper-anchor-width", `${Ne}px`),
                Kn.setProperty("--radix-popper-anchor-height", `${wt}px`);
            },
          }),
          V && Ok({ element: V, padding: v }),
          nE({ arrowWidth: B, arrowHeight: Z }),
          C && $k({ strategy: "referenceHidden", ...K }),
        ],
      }),
      [jt, rl] = y3(lt),
      Er = Xe(T);
    ln(() => {
      qe && (Er == null || Er());
    }, [qe, Er]);
    const Zn = (i = Te.arrow) === null || i === void 0 ? void 0 : i.x,
      Bo = (o = Te.arrow) === null || o === void 0 ? void 0 : o.y,
      ee =
        ((s = Te.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !==
        0,
      [te, Ce] = p.useState();
    return (
      ln(() => {
        P && Ce(window.getComputedStyle(P).zIndex);
      }, [P]),
      p.createElement(
        "div",
        {
          ref: J.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...at,
            transform: qe ? at.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: te,
            "--radix-popper-transform-origin": [
              (a = Te.transformOrigin) === null || a === void 0 ? void 0 : a.x,
              (l = Te.transformOrigin) === null || l === void 0 ? void 0 : l.y,
            ].join(" "),
          },
          dir: e.dir,
        },
        p.createElement(
          qk,
          {
            scope: d,
            placedSide: jt,
            onArrowChange: z,
            arrowX: Zn,
            arrowY: Bo,
            shouldHideArrow: ee,
          },
          p.createElement(
            je.div,
            Y({ "data-side": jt, "data-align": rl }, N, {
              ref: I,
              style: {
                ...N.style,
                animation: qe ? void 0 : "none",
                opacity:
                  (c = Te.hide) !== null && c !== void 0 && c.referenceHidden
                    ? 0
                    : void 0,
              },
            })
          )
        )
      )
    );
  }),
  Xk = "PopperArrow",
  Jk = { top: "bottom", right: "left", bottom: "top", left: "right" },
  eE = p.forwardRef(function (t, n) {
    const { __scopePopper: r, ...i } = t,
      o = Yk(Xk, r),
      s = Jk[o.placedSide];
    return p.createElement(
      "span",
      {
        ref: o.onArrowChange,
        style: {
          position: "absolute",
          left: o.arrowX,
          top: o.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0",
          }[o.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)",
          }[o.placedSide],
          visibility: o.shouldHideArrow ? "hidden" : void 0,
        },
      },
      p.createElement(
        zk,
        Y({}, i, { ref: n, style: { ...i.style, display: "block" } })
      )
    );
  });
function tE(e) {
  return e !== null;
}
const nE = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, i, o, s;
    const { placement: a, rects: l, middlewareData: c } = t,
      f =
        ((n = c.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !==
        0,
      h = f ? 0 : e.arrowWidth,
      g = f ? 0 : e.arrowHeight,
      [w, v] = y3(a),
      k = { start: "0%", center: "50%", end: "100%" }[v],
      m =
        ((r = (i = c.arrow) === null || i === void 0 ? void 0 : i.x) !== null &&
        r !== void 0
          ? r
          : 0) +
        h / 2,
      y =
        ((o = (s = c.arrow) === null || s === void 0 ? void 0 : s.y) !== null &&
        o !== void 0
          ? o
          : 0) +
        g / 2;
    let x = "",
      C = "";
    return (
      w === "bottom"
        ? ((x = f ? k : `${m}px`), (C = `${-g}px`))
        : w === "top"
        ? ((x = f ? k : `${m}px`), (C = `${l.floating.height + g}px`))
        : w === "right"
        ? ((x = `${-g}px`), (C = f ? k : `${y}px`))
        : w === "left" &&
          ((x = `${l.floating.width + g}px`), (C = f ? k : `${y}px`)),
      { data: { x, y: C } }
    );
  },
});
function y3(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const rE = Zk,
  iE = Gk,
  oE = Qk,
  sE = eE,
  aE = p.forwardRef((e, t) => {
    var n;
    const {
      container: r = globalThis == null ||
      (n = globalThis.document) === null ||
      n === void 0
        ? void 0
        : n.body,
      ...i
    } = e;
    return r
      ? lp.createPortal(p.createElement(je.div, Y({}, i, { ref: t })), r)
      : null;
  });
function lE(e, t) {
  return p.useReducer((n, r) => {
    const i = t[n][r];
    return i ?? n;
  }, e);
}
const kr = (e) => {
  const { present: t, children: n } = e,
    r = cE(t),
    i =
      typeof n == "function" ? n({ present: r.isPresent }) : p.Children.only(n),
    o = xt(r.ref, i.ref);
  return typeof n == "function" || r.isPresent
    ? p.cloneElement(i, { ref: o })
    : null;
};
kr.displayName = "Presence";
function cE(e) {
  const [t, n] = p.useState(),
    r = p.useRef({}),
    i = p.useRef(e),
    o = p.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = lE(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    p.useEffect(() => {
      const c = vs(r.current);
      o.current = a === "mounted" ? c : "none";
    }, [a]),
    ln(() => {
      const c = r.current,
        d = i.current;
      if (d !== e) {
        const h = o.current,
          g = vs(c);
        e
          ? l("MOUNT")
          : g === "none" || (c == null ? void 0 : c.display) === "none"
          ? l("UNMOUNT")
          : l(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e);
      }
    }, [e, l]),
    ln(() => {
      if (t) {
        const c = (f) => {
            const g = vs(r.current).includes(f.animationName);
            f.target === t && g && Mo.flushSync(() => l("ANIMATION_END"));
          },
          d = (f) => {
            f.target === t && (o.current = vs(r.current));
          };
        return (
          t.addEventListener("animationstart", d),
          t.addEventListener("animationcancel", c),
          t.addEventListener("animationend", c),
          () => {
            t.removeEventListener("animationstart", d),
              t.removeEventListener("animationcancel", c),
              t.removeEventListener("animationend", c);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: p.useCallback((c) => {
        c && (r.current = getComputedStyle(c)), n(c);
      }, []),
    }
  );
}
function vs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function uE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Xe(e);
  p.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return (
      t.addEventListener("keydown", r),
      () => t.removeEventListener("keydown", r)
    );
  }, [n, t]);
}
const Iu = "dismissableLayer.update",
  dE = "dismissableLayer.pointerDownOutside",
  fE = "dismissableLayer.focusOutside";
let _2;
const hE = p.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  x3 = p.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: s,
        onInteractOutside: a,
        onDismiss: l,
        ...c
      } = e,
      d = p.useContext(hE),
      [f, h] = p.useState(null),
      g =
        (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, w] = p.useState({}),
      v = xt(t, (S) => h(S)),
      k = Array.from(d.layers),
      [m] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = k.indexOf(m),
      x = f ? k.indexOf(f) : -1,
      C = d.layersWithOutsidePointerEventsDisabled.size > 0,
      E = x >= y,
      T = pE((S) => {
        const P = S.target,
          b = [...d.branches].some((I) => I.contains(P));
        !E ||
          b ||
          (o == null || o(S),
          a == null || a(S),
          S.defaultPrevented || l == null || l());
      }, g),
      N = mE((S) => {
        const P = S.target;
        [...d.branches].some((I) => I.contains(P)) ||
          (s == null || s(S),
          a == null || a(S),
          S.defaultPrevented || l == null || l());
      }, g);
    return (
      uE((S) => {
        x === d.layers.size - 1 &&
          (i == null || i(S),
          !S.defaultPrevented && l && (S.preventDefault(), l()));
      }, g),
      p.useEffect(() => {
        if (f)
          return (
            r &&
              (d.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((_2 = g.body.style.pointerEvents),
                (g.body.style.pointerEvents = "none")),
              d.layersWithOutsidePointerEventsDisabled.add(f)),
            d.layers.add(f),
            F2(),
            () => {
              r &&
                d.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (g.body.style.pointerEvents = _2);
            }
          );
      }, [f, g, r, d]),
      p.useEffect(
        () => () => {
          f &&
            (d.layers.delete(f),
            d.layersWithOutsidePointerEventsDisabled.delete(f),
            F2());
        },
        [f, d]
      ),
      p.useEffect(() => {
        const S = () => w({});
        return (
          document.addEventListener(Iu, S),
          () => document.removeEventListener(Iu, S)
        );
      }, []),
      p.createElement(
        je.div,
        Y({}, c, {
          ref: v,
          style: {
            pointerEvents: C ? (E ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: re(e.onFocusCapture, N.onFocusCapture),
          onBlurCapture: re(e.onBlurCapture, N.onBlurCapture),
          onPointerDownCapture: re(
            e.onPointerDownCapture,
            T.onPointerDownCapture
          ),
        })
      )
    );
  });
function pE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Xe(e),
    r = p.useRef(!1),
    i = p.useRef(() => {});
  return (
    p.useEffect(() => {
      const o = (a) => {
          if (a.target && !r.current) {
            let d = function () {
              w3(dE, n, c, { discrete: !0 });
            };
            var l = d;
            const c = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", i.current),
                (i.current = d),
                t.addEventListener("click", i.current, { once: !0 }))
              : d();
          } else t.removeEventListener("click", i.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", o);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", o),
          t.removeEventListener("click", i.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function mE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Xe(e),
    r = p.useRef(!1);
  return (
    p.useEffect(() => {
      const i = (o) => {
        o.target &&
          !r.current &&
          w3(fE, n, { originalEvent: o }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function F2() {
  const e = new CustomEvent(Iu);
  document.dispatchEvent(e);
}
function w3(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? Au(i, o) : i.dispatchEvent(o);
}
let sc;
const C3 = "HoverCard",
  [k3, RT] = Ja(C3, [m3]),
  tl = m3(),
  [gE, nl] = k3(C3),
  vE = (e) => {
    const {
        __scopeHoverCard: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: o,
        openDelay: s = 700,
        closeDelay: a = 300,
      } = e,
      l = tl(t),
      c = p.useRef(0),
      d = p.useRef(0),
      f = p.useRef(!1),
      h = p.useRef(!1),
      [g = !1, w] = r3({ prop: r, defaultProp: i, onChange: o }),
      v = p.useCallback(() => {
        clearTimeout(d.current),
          (c.current = window.setTimeout(() => w(!0), s));
      }, [s, w]),
      k = p.useCallback(() => {
        clearTimeout(c.current),
          !f.current &&
            !h.current &&
            (d.current = window.setTimeout(() => w(!1), a));
      }, [a, w]),
      m = p.useCallback(() => w(!1), [w]);
    return (
      p.useEffect(
        () => () => {
          clearTimeout(c.current), clearTimeout(d.current);
        },
        []
      ),
      p.createElement(
        gE,
        {
          scope: t,
          open: g,
          onOpenChange: w,
          onOpen: v,
          onClose: k,
          onDismiss: m,
          hasSelectionRef: f,
          isPointerDownOnContentRef: h,
        },
        p.createElement(rE, l, n)
      )
    );
  },
  yE = "HoverCardTrigger",
  xE = p.forwardRef((e, t) => {
    const { __scopeHoverCard: n, ...r } = e,
      i = nl(yE, n),
      o = tl(n);
    return p.createElement(
      iE,
      Y({ asChild: !0 }, o),
      p.createElement(
        je.a,
        Y({ "data-state": i.open ? "open" : "closed" }, r, {
          ref: t,
          onPointerEnter: re(e.onPointerEnter, Ea(i.onOpen)),
          onPointerLeave: re(e.onPointerLeave, Ea(i.onClose)),
          onFocus: re(e.onFocus, i.onOpen),
          onBlur: re(e.onBlur, i.onClose),
          onTouchStart: re(e.onTouchStart, (s) => s.preventDefault()),
        })
      )
    );
  }),
  E3 = "HoverCardPortal",
  [wE, CE] = k3(E3, { forceMount: void 0 }),
  kE = (e) => {
    const { __scopeHoverCard: t, forceMount: n, children: r, container: i } = e,
      o = nl(E3, t);
    return p.createElement(
      wE,
      { scope: t, forceMount: n },
      p.createElement(
        kr,
        { present: n || o.open },
        p.createElement(aE, { asChild: !0, container: i }, r)
      )
    );
  },
  Du = "HoverCardContent",
  EE = p.forwardRef((e, t) => {
    const n = CE(Du, e.__scopeHoverCard),
      { forceMount: r = n.forceMount, ...i } = e,
      o = nl(Du, e.__scopeHoverCard);
    return p.createElement(
      kr,
      { present: r || o.open },
      p.createElement(
        SE,
        Y({ "data-state": o.open ? "open" : "closed" }, i, {
          onPointerEnter: re(e.onPointerEnter, Ea(o.onOpen)),
          onPointerLeave: re(e.onPointerLeave, Ea(o.onClose)),
          ref: t,
        })
      )
    );
  }),
  SE = p.forwardRef((e, t) => {
    const {
        __scopeHoverCard: n,
        onEscapeKeyDown: r,
        onPointerDownOutside: i,
        onFocusOutside: o,
        onInteractOutside: s,
        ...a
      } = e,
      l = nl(Du, n),
      c = tl(n),
      d = p.useRef(null),
      f = xt(t, d),
      [h, g] = p.useState(!1);
    return (
      p.useEffect(() => {
        if (h) {
          const w = document.body;
          return (
            (sc = w.style.userSelect || w.style.webkitUserSelect),
            (w.style.userSelect = "none"),
            (w.style.webkitUserSelect = "none"),
            () => {
              (w.style.userSelect = sc), (w.style.webkitUserSelect = sc);
            }
          );
        }
      }, [h]),
      p.useEffect(() => {
        if (d.current) {
          const w = () => {
            g(!1),
              (l.isPointerDownOnContentRef.current = !1),
              setTimeout(() => {
                var v;
                ((v = document.getSelection()) === null || v === void 0
                  ? void 0
                  : v.toString()) !== "" && (l.hasSelectionRef.current = !0);
              });
          };
          return (
            document.addEventListener("pointerup", w),
            () => {
              document.removeEventListener("pointerup", w),
                (l.hasSelectionRef.current = !1),
                (l.isPointerDownOnContentRef.current = !1);
            }
          );
        }
      }, [l.isPointerDownOnContentRef, l.hasSelectionRef]),
      p.useEffect(() => {
        d.current &&
          NE(d.current).forEach((v) => v.setAttribute("tabindex", "-1"));
      }),
      p.createElement(
        x3,
        {
          asChild: !0,
          disableOutsidePointerEvents: !1,
          onInteractOutside: s,
          onEscapeKeyDown: r,
          onPointerDownOutside: i,
          onFocusOutside: re(o, (w) => {
            w.preventDefault();
          }),
          onDismiss: l.onDismiss,
        },
        p.createElement(
          oE,
          Y({}, c, a, {
            onPointerDown: re(a.onPointerDown, (w) => {
              w.currentTarget.contains(w.target) && g(!0),
                (l.hasSelectionRef.current = !1),
                (l.isPointerDownOnContentRef.current = !0);
            }),
            ref: f,
            style: {
              ...a.style,
              userSelect: h ? "text" : void 0,
              WebkitUserSelect: h ? "text" : void 0,
              "--radix-hover-card-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-hover-card-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-hover-card-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-hover-card-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-hover-card-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          })
        )
      )
    );
  }),
  TE = p.forwardRef((e, t) => {
    const { __scopeHoverCard: n, ...r } = e,
      i = tl(n);
    return p.createElement(sE, Y({}, i, r, { ref: t }));
  });
function Ea(e) {
  return (t) => (t.pointerType === "touch" ? void 0 : e());
}
function NE(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) =>
        r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
const LE = vE,
  bE = xE,
  PE = kE,
  ME = EE,
  jE = TE;
function RE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var AE = ["color"],
  _s = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      i = RE(e, AE);
    return p.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        i,
        { ref: t }
      ),
      p.createElement("path", {
        d: "M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  });
const IE = async (e) =>
  (
    await (
      await fetch(
        "https://api-us-west-2.hygraph.com/v2/cld3gw4bb0hr001ue9afzcunb/master",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ query: e }),
        }
      )
    ).json()
  ).data.navigationMenu;
function DE({ item: e, className: t }) {
  const { externalLink: n, link: r, id: i, name: o } = e,
    s = r ? `/pro${r.startsWith("/") ? "" : "/"}${r}` : n;
  return (
    console.log(s),
    u.jsx(u.Fragment, {
      children: r
        ? u.jsx(rn, {
            href: s,
            children: u.jsx(
              "div",
              {
                className: `group ${t}`,
                children: u.jsx("div", {
                  className:
                    "h-16 flex items-center w-full group-hover:cursor-pointer",
                  children: u.jsx("div", {
                    className:
                      "flex flex-row items-center gap-4 group-hover:bg-graywave dark:group-hover:bg-menuItemDarkHover rounded-lg w-full h-[50px] px-2",
                    children: u.jsx("span", {
                      className:
                        "text-charcoal dark:text-white text-base font-semibold",
                      children: o,
                    }),
                  }),
                }),
              },
              i
            ),
          })
        : u.jsx("a", {
            href: n,
            className: `group ${t}`,
            children: u.jsx(
              "div",
              {
                className:
                  "h-16 flex items-center w-full group-hover:cursor-pointer",
                children: u.jsx("div", {
                  className:
                    "flex flex-row items-center gap-4 group-hover:bg-graywave dark:group-hover:bg-menuItemDarkHover rounded-lg w-full h-[50px] px-2",
                  children: u.jsx("span", {
                    className:
                      "text-charcoal dark:text-white text-base font-semibold",
                    children: o,
                  }),
                }),
              },
              i
            ),
          }),
    })
  );
}
function $E() {
  const [e, t] = p.useState(!0),
    { data: n, error: r } = un(
      `
    {
      navigationMenu(where: {id: "clwf5eift1g5107lkal4vbfi9"}) {
        supportItems {
          id
          name
          description
          link
          externalLink
          svgName
          iconImage {
            id
            url
          }
        }
      }
    }
  `,
      IE
    );
  if (r)
    return u.jsx("div", {
      className: "text-black",
      children: "Failed to load",
    });
  if (!n)
    return u.jsx("div", { className: "text-white", children: "Loading..." });
  const i = (o, s) => (s ? o : o.slice(0, 8));
  return u.jsx(u.Fragment, {
    children: u.jsxs(LE, {
      defaultOpen: !1,
      openDelay: 350,
      children: [
        u.jsx(bE, {
          asChild: !0,
          children: u.jsx("a", {
            className: "",
            href: "https://support.vagaro.com/hc/en-us",
            target: "_blank",
            rel: "noreferrer noopener",
            children: u.jsxs("div", {
              className:
                "flex h-8 items-center gap-1 pl-2 text-charcoal dark:text-white group",
              children: [
                u.jsx("span", {
                  className:
                    "font-semibold text-charcoal dark:text-white dark:group-hover:text-primary",
                  children: "Contact Support",
                }),
                u.jsx(_s, {
                  className:
                    "CaretDown2 text-charcoal dark:text-white dark:group-hover:text-primary",
                  "aria-hidden": !0,
                }),
              ],
            }),
          }),
        }),
        u.jsx(PE, {
          children: u.jsxs(ME, {
            className: "HoverCardContent bg-white dark:bg-inkDarker",
            sideOffset: 8,
            children: [
              u.jsxs("div", {
                className: "w-92 flex flex-col bg-white dark:bg-inkDarker",
                children: [
                  i(n.supportItems, e).map((o) => u.jsx(DE, { item: o }, o.id)),
                  u.jsx(z1, {}),
                ],
              }),
              u.jsx(jE, {
                className: "fill-white dark:fill-inkDarker w-[18px] h-[10px]",
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const OE = p.createContext(void 0);
function VE(e) {
  const t = p.useContext(OE);
  return e || t || "ltr";
}
const _E = mm.useId || (() => {});
let FE = 0;
function S3(e) {
  const [t, n] = p.useState(_E());
  return (
    ln(() => {
      e || n((r) => r ?? String(FE++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function T3(e) {
  const t = e + "CollectionProvider",
    [n, r] = Ja(t),
    [i, o] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (g) => {
      const { scope: w, children: v } = g,
        k = ie.useRef(null),
        m = ie.useRef(new Map()).current;
      return ie.createElement(i, { scope: w, itemMap: m, collectionRef: k }, v);
    },
    a = e + "CollectionSlot",
    l = ie.forwardRef((g, w) => {
      const { scope: v, children: k } = g,
        m = o(a, v),
        y = xt(w, m.collectionRef);
      return ie.createElement(ka, { ref: y }, k);
    }),
    c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = ie.forwardRef((g, w) => {
      const { scope: v, children: k, ...m } = g,
        y = ie.useRef(null),
        x = xt(w, y),
        C = o(c, v);
      return (
        ie.useEffect(
          () => (
            C.itemMap.set(y, { ref: y, ...m }), () => void C.itemMap.delete(y)
          )
        ),
        ie.createElement(ka, { [d]: "", ref: x }, k)
      );
    });
  function h(g) {
    const w = o(e + "CollectionConsumer", g);
    return ie.useCallback(() => {
      const k = w.collectionRef.current;
      if (!k) return [];
      const m = Array.from(k.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort(
        (C, E) => m.indexOf(C.ref.current) - m.indexOf(E.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: l, ItemSlot: f }, h, r];
}
function HE(e) {
  const t = p.useRef({ value: e, previous: e });
  return p.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
const BE = p.forwardRef((e, t) =>
    p.createElement(
      je.span,
      Y({}, e, {
        ref: t,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style,
        },
      })
    )
  ),
  zE = BE,
  Vo = "NavigationMenu",
  [Rd, N3, UE] = T3(Vo),
  [$u, WE, ZE] = T3(Vo),
  [Ad, AT] = Ja(Vo, [UE, ZE]),
  [KE, Mt] = Ad(Vo),
  [GE, qE] = Ad(Vo),
  YE = p.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        onValueChange: i,
        defaultValue: o,
        delayDuration: s = 200,
        skipDelayDuration: a = 300,
        orientation: l = "horizontal",
        dir: c,
        ...d
      } = e,
      [f, h] = p.useState(null),
      g = xt(t, (P) => h(P)),
      w = VE(c),
      v = p.useRef(0),
      k = p.useRef(0),
      m = p.useRef(0),
      [y, x] = p.useState(!0),
      [C = "", E] = r3({
        prop: r,
        onChange: (P) => {
          const b = P !== "",
            I = a > 0;
          b
            ? (window.clearTimeout(m.current), I && x(!1))
            : (window.clearTimeout(m.current),
              (m.current = window.setTimeout(() => x(!0), a))),
            i == null || i(P);
        },
        defaultProp: o,
      }),
      T = p.useCallback(() => {
        window.clearTimeout(k.current),
          (k.current = window.setTimeout(() => E(""), 150));
      }, [E]),
      N = p.useCallback(
        (P) => {
          window.clearTimeout(k.current), E(P);
        },
        [E]
      ),
      S = p.useCallback(
        (P) => {
          C === P
            ? window.clearTimeout(k.current)
            : (v.current = window.setTimeout(() => {
                window.clearTimeout(k.current), E(P);
              }, s));
        },
        [C, E, s]
      );
    return (
      p.useEffect(
        () => () => {
          window.clearTimeout(v.current),
            window.clearTimeout(k.current),
            window.clearTimeout(m.current);
        },
        []
      ),
      p.createElement(
        QE,
        {
          scope: n,
          isRootMenu: !0,
          value: C,
          dir: w,
          orientation: l,
          rootNavigationMenu: f,
          onTriggerEnter: (P) => {
            window.clearTimeout(v.current), y ? S(P) : N(P);
          },
          onTriggerLeave: () => {
            window.clearTimeout(v.current), T();
          },
          onContentEnter: () => window.clearTimeout(k.current),
          onContentLeave: T,
          onItemSelect: (P) => {
            E((b) => (b === P ? "" : P));
          },
          onItemDismiss: () => E(""),
        },
        p.createElement(
          je.nav,
          Y({ "aria-label": "Main", "data-orientation": l, dir: w }, d, {
            ref: g,
          })
        )
      )
    );
  }),
  QE = (e) => {
    const {
        scope: t,
        isRootMenu: n,
        rootNavigationMenu: r,
        dir: i,
        orientation: o,
        children: s,
        value: a,
        onItemSelect: l,
        onItemDismiss: c,
        onTriggerEnter: d,
        onTriggerLeave: f,
        onContentEnter: h,
        onContentLeave: g,
      } = e,
      [w, v] = p.useState(null),
      [k, m] = p.useState(new Map()),
      [y, x] = p.useState(null);
    return p.createElement(
      KE,
      {
        scope: t,
        isRootMenu: n,
        rootNavigationMenu: r,
        value: a,
        previousValue: HE(a),
        baseId: S3(),
        dir: i,
        orientation: o,
        viewport: w,
        onViewportChange: v,
        indicatorTrack: y,
        onIndicatorTrackChange: x,
        onTriggerEnter: Xe(d),
        onTriggerLeave: Xe(f),
        onContentEnter: Xe(h),
        onContentLeave: Xe(g),
        onItemSelect: Xe(l),
        onItemDismiss: Xe(c),
        onViewportContentChange: p.useCallback((C, E) => {
          m((T) => (T.set(C, E), new Map(T)));
        }, []),
        onViewportContentRemove: p.useCallback((C) => {
          m((E) => (E.has(C) ? (E.delete(C), new Map(E)) : E));
        }, []),
      },
      p.createElement(
        Rd.Provider,
        { scope: t },
        p.createElement(GE, { scope: t, items: k }, s)
      )
    );
  },
  XE = "NavigationMenuList",
  JE = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      i = Mt(XE, n),
      o = p.createElement(
        je.ul,
        Y({ "data-orientation": i.orientation }, r, { ref: t })
      );
    return p.createElement(
      je.div,
      { style: { position: "relative" }, ref: i.onIndicatorTrackChange },
      p.createElement(
        Rd.Slot,
        { scope: n },
        i.isRootMenu ? p.createElement(j3, { asChild: !0 }, o) : o
      )
    );
  }),
  eS = "NavigationMenuItem",
  [tS, L3] = Ad(eS),
  nS = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...i } = e,
      o = S3(),
      s = r || o || "LEGACY_REACT_AUTO_VALUE",
      a = p.useRef(null),
      l = p.useRef(null),
      c = p.useRef(null),
      d = p.useRef(() => {}),
      f = p.useRef(!1),
      h = p.useCallback((w = "start") => {
        if (a.current) {
          d.current();
          const v = Ou(a.current);
          v.length && Id(w === "start" ? v : v.reverse());
        }
      }, []),
      g = p.useCallback(() => {
        if (a.current) {
          const w = Ou(a.current);
          w.length && (d.current = hS(w));
        }
      }, []);
    return p.createElement(
      tS,
      {
        scope: n,
        value: s,
        triggerRef: l,
        contentRef: a,
        focusProxyRef: c,
        wasEscapeCloseRef: f,
        onEntryKeyDown: h,
        onFocusProxyEnter: h,
        onRootContentClose: g,
        onContentFocusOutside: g,
      },
      p.createElement(je.li, Y({}, i, { ref: t }))
    );
  }),
  H2 = "NavigationMenuTrigger",
  rS = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, disabled: r, ...i } = e,
      o = Mt(H2, e.__scopeNavigationMenu),
      s = L3(H2, e.__scopeNavigationMenu),
      a = p.useRef(null),
      l = xt(a, s.triggerRef, t),
      c = A3(o.baseId, s.value),
      d = I3(o.baseId, s.value),
      f = p.useRef(!1),
      h = p.useRef(!1),
      g = s.value === o.value;
    return p.createElement(
      p.Fragment,
      null,
      p.createElement(
        Rd.ItemSlot,
        { scope: n, value: s.value },
        p.createElement(
          R3,
          { asChild: !0 },
          p.createElement(
            je.button,
            Y(
              {
                id: c,
                disabled: r,
                "data-disabled": r ? "" : void 0,
                "data-state": Dd(g),
                "aria-expanded": g,
                "aria-controls": d,
              },
              i,
              {
                ref: l,
                onPointerEnter: re(e.onPointerEnter, () => {
                  (h.current = !1), (s.wasEscapeCloseRef.current = !1);
                }),
                onPointerMove: re(
                  e.onPointerMove,
                  Sa(() => {
                    r ||
                      h.current ||
                      s.wasEscapeCloseRef.current ||
                      f.current ||
                      (o.onTriggerEnter(s.value), (f.current = !0));
                  })
                ),
                onPointerLeave: re(
                  e.onPointerLeave,
                  Sa(() => {
                    r || (o.onTriggerLeave(), (f.current = !1));
                  })
                ),
                onClick: re(e.onClick, () => {
                  o.onItemSelect(s.value), (h.current = g);
                }),
                onKeyDown: re(e.onKeyDown, (w) => {
                  const k = {
                    horizontal: "ArrowDown",
                    vertical: o.dir === "rtl" ? "ArrowLeft" : "ArrowRight",
                  }[o.orientation];
                  g && w.key === k && (s.onEntryKeyDown(), w.preventDefault());
                }),
              }
            )
          )
        )
      ),
      g &&
        p.createElement(
          p.Fragment,
          null,
          p.createElement(zE, {
            "aria-hidden": !0,
            tabIndex: 0,
            ref: s.focusProxyRef,
            onFocus: (w) => {
              const v = s.contentRef.current,
                k = w.relatedTarget,
                m = k === a.current,
                y = v == null ? void 0 : v.contains(k);
              (m || !y) && s.onFocusProxyEnter(m ? "start" : "end");
            },
          }),
          o.viewport && p.createElement("span", { "aria-owns": d })
        )
    );
  }),
  B2 = "navigationMenu.linkSelect",
  iS = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: i, ...o } = e;
    return p.createElement(
      R3,
      { asChild: !0 },
      p.createElement(
        je.a,
        Y(
          {
            "data-active": r ? "" : void 0,
            "aria-current": r ? "page" : void 0,
          },
          o,
          {
            ref: t,
            onClick: re(
              e.onClick,
              (s) => {
                const a = s.target,
                  l = new CustomEvent(B2, { bubbles: !0, cancelable: !0 });
                if (
                  (a.addEventListener(B2, (c) => (i == null ? void 0 : i(c)), {
                    once: !0,
                  }),
                  Au(a, l),
                  !l.defaultPrevented && !s.metaKey)
                ) {
                  const c = new CustomEvent(Fs, {
                    bubbles: !0,
                    cancelable: !0,
                  });
                  Au(a, c);
                }
              },
              { checkForDefaultPrevented: !1 }
            ),
          }
        )
      )
    );
  }),
  b3 = "NavigationMenuIndicator",
  oS = p.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      i = Mt(b3, e.__scopeNavigationMenu),
      o = !!i.value;
    return i.indicatorTrack
      ? lp.createPortal(
          p.createElement(
            kr,
            { present: n || o },
            p.createElement(sS, Y({}, r, { ref: t }))
          ),
          i.indicatorTrack
        )
      : null;
  }),
  sS = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      i = Mt(b3, n),
      o = N3(n),
      [s, a] = p.useState(null),
      [l, c] = p.useState(null),
      d = i.orientation === "horizontal",
      f = !!i.value;
    p.useEffect(() => {
      var g;
      const v =
        (g = o().find((k) => k.value === i.value)) === null || g === void 0
          ? void 0
          : g.ref.current;
      v && a(v);
    }, [o, i.value]);
    const h = () => {
      s &&
        c({
          size: d ? s.offsetWidth : s.offsetHeight,
          offset: d ? s.offsetLeft : s.offsetTop,
        });
    };
    return (
      Vu(s, h),
      Vu(i.indicatorTrack, h),
      l
        ? p.createElement(
            je.div,
            Y(
              {
                "aria-hidden": !0,
                "data-state": f ? "visible" : "hidden",
                "data-orientation": i.orientation,
              },
              r,
              {
                ref: t,
                style: {
                  position: "absolute",
                  ...(d
                    ? {
                        left: 0,
                        width: l.size + "px",
                        transform: `translateX(${l.offset}px)`,
                      }
                    : {
                        top: 0,
                        height: l.size + "px",
                        transform: `translateY(${l.offset}px)`,
                      }),
                  ...r.style,
                },
              }
            )
          )
        : null
    );
  }),
  Eo = "NavigationMenuContent",
  aS = p.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      i = Mt(Eo, e.__scopeNavigationMenu),
      o = L3(Eo, e.__scopeNavigationMenu),
      s = xt(o.contentRef, t),
      a = o.value === i.value,
      l = {
        value: o.value,
        triggerRef: o.triggerRef,
        focusProxyRef: o.focusProxyRef,
        wasEscapeCloseRef: o.wasEscapeCloseRef,
        onContentFocusOutside: o.onContentFocusOutside,
        onRootContentClose: o.onRootContentClose,
        ...r,
      };
    return i.viewport
      ? p.createElement(lS, Y({ forceMount: n }, l, { ref: s }))
      : p.createElement(
          kr,
          { present: n || a },
          p.createElement(
            P3,
            Y({ "data-state": Dd(a) }, l, {
              ref: s,
              onPointerEnter: re(e.onPointerEnter, i.onContentEnter),
              onPointerLeave: re(e.onPointerLeave, Sa(i.onContentLeave)),
              style: {
                pointerEvents: !a && i.isRootMenu ? "none" : void 0,
                ...l.style,
              },
            })
          )
        );
  }),
  lS = p.forwardRef((e, t) => {
    const n = Mt(Eo, e.__scopeNavigationMenu),
      { onViewportContentChange: r, onViewportContentRemove: i } = n;
    return (
      ln(() => {
        r(e.value, { ref: t, ...e });
      }, [e, t, r]),
      ln(() => () => i(e.value), [e.value, i]),
      null
    );
  }),
  Fs = "navigationMenu.rootContentDismiss",
  P3 = p.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        triggerRef: i,
        focusProxyRef: o,
        wasEscapeCloseRef: s,
        onRootContentClose: a,
        onContentFocusOutside: l,
        ...c
      } = e,
      d = Mt(Eo, n),
      f = p.useRef(null),
      h = xt(f, t),
      g = A3(d.baseId, r),
      w = I3(d.baseId, r),
      v = N3(n),
      k = p.useRef(null),
      { onItemDismiss: m } = d;
    p.useEffect(() => {
      const x = f.current;
      if (d.isRootMenu && x) {
        const C = () => {
          var E;
          m(),
            a(),
            x.contains(document.activeElement) &&
              ((E = i.current) === null || E === void 0 || E.focus());
        };
        return x.addEventListener(Fs, C), () => x.removeEventListener(Fs, C);
      }
    }, [d.isRootMenu, e.value, i, m, a]);
    const y = p.useMemo(() => {
      const C = v().map((b) => b.value);
      d.dir === "rtl" && C.reverse();
      const E = C.indexOf(d.value),
        T = C.indexOf(d.previousValue),
        N = r === d.value,
        S = T === C.indexOf(r);
      if (!N && !S) return k.current;
      const P = (() => {
        if (E !== T) {
          if (N && T !== -1) return E > T ? "from-end" : "from-start";
          if (S && E !== -1) return E > T ? "to-start" : "to-end";
        }
        return null;
      })();
      return (k.current = P), P;
    }, [d.previousValue, d.value, d.dir, v, r]);
    return p.createElement(
      j3,
      { asChild: !0 },
      p.createElement(
        x3,
        Y(
          {
            id: w,
            "aria-labelledby": g,
            "data-motion": y,
            "data-orientation": d.orientation,
          },
          c,
          {
            ref: h,
            onDismiss: () => {
              var x;
              const C = new Event(Fs, { bubbles: !0, cancelable: !0 });
              (x = f.current) === null || x === void 0 || x.dispatchEvent(C);
            },
            onFocusOutside: re(e.onFocusOutside, (x) => {
              var C;
              l();
              const E = x.target;
              (C = d.rootNavigationMenu) !== null &&
                C !== void 0 &&
                C.contains(E) &&
                x.preventDefault();
            }),
            onPointerDownOutside: re(e.onPointerDownOutside, (x) => {
              var C;
              const E = x.target,
                T = v().some((S) => {
                  var P;
                  return (P = S.ref.current) === null || P === void 0
                    ? void 0
                    : P.contains(E);
                }),
                N =
                  d.isRootMenu &&
                  ((C = d.viewport) === null || C === void 0
                    ? void 0
                    : C.contains(E));
              (T || N || !d.isRootMenu) && x.preventDefault();
            }),
            onKeyDown: re(e.onKeyDown, (x) => {
              const C = x.altKey || x.ctrlKey || x.metaKey;
              if (x.key === "Tab" && !C) {
                const N = Ou(x.currentTarget),
                  S = document.activeElement,
                  P = N.findIndex((V) => V === S),
                  I = x.shiftKey
                    ? N.slice(0, P).reverse()
                    : N.slice(P + 1, N.length);
                if (Id(I)) x.preventDefault();
                else {
                  var T;
                  (T = o.current) === null || T === void 0 || T.focus();
                }
              }
            }),
            onEscapeKeyDown: re(e.onEscapeKeyDown, (x) => {
              s.current = !0;
            }),
          }
        )
      )
    );
  }),
  M3 = "NavigationMenuViewport",
  cS = p.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = !!Mt(M3, e.__scopeNavigationMenu).value;
    return p.createElement(
      kr,
      { present: n || o },
      p.createElement(uS, Y({}, r, { ref: t }))
    );
  }),
  uS = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, children: r, ...i } = e,
      o = Mt(M3, n),
      s = xt(t, o.onViewportChange),
      a = qE(Eo, e.__scopeNavigationMenu),
      [l, c] = p.useState(null),
      [d, f] = p.useState(null),
      h = l ? (l == null ? void 0 : l.width) + "px" : void 0,
      g = l ? (l == null ? void 0 : l.height) + "px" : void 0,
      w = !!o.value,
      v = w ? o.value : o.previousValue;
    return (
      Vu(d, () => {
        d && c({ width: d.offsetWidth, height: d.offsetHeight });
      }),
      p.createElement(
        je.div,
        Y({ "data-state": Dd(w), "data-orientation": o.orientation }, i, {
          ref: s,
          style: {
            pointerEvents: !w && o.isRootMenu ? "none" : void 0,
            "--radix-navigation-menu-viewport-width": h,
            "--radix-navigation-menu-viewport-height": g,
            ...i.style,
          },
          onPointerEnter: re(e.onPointerEnter, o.onContentEnter),
          onPointerLeave: re(e.onPointerLeave, Sa(o.onContentLeave)),
        }),
        Array.from(a.items).map(([m, { ref: y, forceMount: x, ...C }]) => {
          const E = v === m;
          return p.createElement(
            kr,
            { key: m, present: x || E },
            p.createElement(
              P3,
              Y({}, C, {
                ref: Sd(y, (T) => {
                  E && T && f(T);
                }),
              })
            )
          );
        })
      )
    );
  }),
  dS = "FocusGroup",
  j3 = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      i = Mt(dS, n);
    return p.createElement(
      $u.Provider,
      { scope: n },
      p.createElement(
        $u.Slot,
        { scope: n },
        p.createElement(je.div, Y({ dir: i.dir }, r, { ref: t }))
      )
    );
  }),
  z2 = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
  fS = "FocusGroupItem",
  R3 = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      i = WE(n),
      o = Mt(fS, n);
    return p.createElement(
      $u.ItemSlot,
      { scope: n },
      p.createElement(
        je.button,
        Y({}, r, {
          ref: t,
          onKeyDown: re(e.onKeyDown, (s) => {
            if (["Home", "End", ...z2].includes(s.key)) {
              let l = i().map((f) => f.ref.current);
              if (
                ([
                  o.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
                  "ArrowUp",
                  "End",
                ].includes(s.key) && l.reverse(),
                z2.includes(s.key))
              ) {
                const f = l.indexOf(s.currentTarget);
                l = l.slice(f + 1);
              }
              setTimeout(() => Id(l)), s.preventDefault();
            }
          }),
        })
      )
    );
  });
function Ou(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const i = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || i
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Id(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
function hS(e) {
  return (
    e.forEach((t) => {
      (t.dataset.tabindex = t.getAttribute("tabindex") || ""),
        t.setAttribute("tabindex", "-1");
    }),
    () => {
      e.forEach((t) => {
        const n = t.dataset.tabindex;
        t.setAttribute("tabindex", n);
      });
    }
  );
}
function Vu(e, t) {
  const n = Xe(t);
  ln(() => {
    let r = 0;
    if (e) {
      const i = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        i.observe(e),
        () => {
          window.cancelAnimationFrame(r), i.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
function Dd(e) {
  return e ? "open" : "closed";
}
function A3(e, t) {
  return `${e}-trigger-${t}`;
}
function I3(e, t) {
  return `${e}-content-${t}`;
}
function Sa(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
const pS = YE,
  mS = JE,
  pn = nS,
  ac = rS,
  Ii = iS,
  gS = oS,
  lc = aS,
  vS = cS;
var D3 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var a = arguments[s];
        a && (o = i(o, r(a)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var s = "";
      for (var a in o) t.call(o, a) && o[a] && (s = i(s, a));
      return s;
    }
    function i(o, s) {
      return s ? (o ? o + " " + s : o + s) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(D3);
var yS = D3.exports;
const xS = Zu(yS);
function wS() {
  return u.jsx(u.Fragment, {
    children: u.jsx("div", {
      id: "main-nav-bar",
      children: u.jsx(u.Fragment, {
        children: u.jsx("div", {
          className: "NavigationWrapper ",
          children: u.jsx("div", {
            className: "center-items mx-auto hidden lg:flex",
            children: u.jsxs(pS, {
              className: "NavigationMenuRoot",
              defaultopen: "true",
              children: [
                u.jsxs(mS, {
                  className: "NavigationMenuList",
                  children: [
                    u.jsx(pn, {
                      children: u.jsx(Ii, {
                        className:
                          "NavigationMenuLink text-primary dark:text-white dark:hover:text-primary",
                        href: "https://www.vagaro.com",
                        target: "_blank",
                        children: u.jsxs("div", {
                          className:
                            "flex items-center text-center text-primary hover:text-charcoal",
                          children: [
                            u.jsx("span", {
                              children: u.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: "2",
                                stroke: "currentColor",
                                className: "h-4 w-4",
                                children: u.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
                                }),
                              }),
                            }),
                            u.jsx("span", {
                              className:
                                "ml-1 inline-block text-base font-semibold",
                              children: "Book a Service",
                            }),
                          ],
                        }),
                      }),
                    }),
                    u.jsxs(pn, {
                      children: [
                        u.jsxs(ac, {
                          className:
                            "NavigationMenuTrigger text-charcoal dark:text-white dark:hover:text-primary text-base",
                          children: [
                            "Business Types",
                            u.jsx(_s, {
                              className: "CaretDown",
                              "aria-hidden": !0,
                            }),
                          ],
                        }),
                        u.jsx(lc, {
                          className:
                            "NavigationMenuContent bg-white dark:bg-menuBgDark",
                          children: u.jsx("div", {
                            className: "flex",
                            children: u.jsx("div", {
                              className: "div",
                              children: u.jsx("div", {
                                className: "flex flex-col",
                                children: u.jsx("ul", {
                                  className: "List one",
                                  children: u.jsx(sw, {}),
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    u.jsxs(pn, {
                      children: [
                        u.jsxs(ac, {
                          className:
                            "NavigationMenuTrigger text-charcoal dark:text-white dark:hover:text-primary",
                          children: [
                            "Features",
                            u.jsx(_s, {
                              className: "CaretDown",
                              "aria-hidden": !0,
                            }),
                          ],
                        }),
                        u.jsx(lc, {
                          className:
                            "NavigationMenuContent z-50 bg-white dark:bg-menuBgDark",
                          children: u.jsx("div", {
                            children: u.jsx("ul", {
                              className: "List three",
                              children: u.jsx(uw, {}),
                            }),
                          }),
                        }),
                      ],
                    }),
                    u.jsx(pn, {
                      children: u.jsx(Ii, {
                        className:
                          "NavigationMenuLink text-charcoal dark:text-white dark:hover:text-primary text-base",
                        href: "https://www.vagaro.com/pro/enterprise-business-software",
                        children: "Enterprise",
                      }),
                    }),
                    u.jsx(pn, {
                      children: u.jsx(Ii, {
                        className:
                          "NavigationMenuLink text-charcoal dark:text-white dark:hover:text-primary text-base",
                        href: "https://www.vagaro.com/pro/pricing",
                        children: "Pricing",
                      }),
                    }),
                    u.jsx(pn, {
                      children: u.jsx(Ii, {
                        className:
                          "NavigationMenuLink text-charcoal dark:text-white dark:hover:text-primary text-base",
                        href: "https://www.vagaro.com/pro/contact-us",
                        children: "Contact Sales",
                      }),
                    }),
                    u.jsx(pn, { children: u.jsx($E, {}) }),
                    u.jsxs(pn, {
                      children: [
                        u.jsxs(ac, {
                          className:
                            "NavigationMenuTrigger text-charcoal dark:text-white dark:hover:text-primary text-base",
                          children: [
                            "Resources",
                            u.jsx(_s, {
                              className: "CaretDown",
                              "aria-hidden": !0,
                            }),
                          ],
                        }),
                        u.jsx(lc, {
                          className: "NavigationMenuContent",
                          children: u.jsx("div", {
                            className: "resources-flyout",
                            children: u.jsx($C, {}),
                          }),
                        }),
                      ],
                    }),
                    u.jsx(gS, {
                      className: "NavigationMenuIndicator",
                      children: u.jsx("div", {
                        className: "Arrow bg-white dark:bg-menuBgDark",
                      }),
                    }),
                  ],
                }),
                u.jsx("div", {
                  className: "ViewportPosition",
                  children: u.jsx(vS, {
                    className:
                      "NavigationMenuViewport bg-white dark:bg-menuBgDark ",
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
const CS = ie.forwardRef(({ className: e, children: t, title: n, ...r }, i) =>
  u.jsx("li", {
    children: u.jsx(Ii, {
      asChild: !0,
      children: u.jsxs(rn, {
        className: xS("ListItemLink", e),
        ...r,
        ref: i,
        children: [
          u.jsx("div", { className: "ListItemHeading", children: n }),
          u.jsx("p", { className: "ListItemText", children: t }),
        ],
      }),
    }),
  })
);
CS.displayName = "ListItem";
const $3 = typeof document < "u" ? ie.useLayoutEffect : () => {};
function kS(e) {
  const t = p.useRef(null);
  return (
    $3(() => {
      t.current = e;
    }, [e]),
    p.useCallback((...n) => {
      const r = t.current;
      return r == null ? void 0 : r(...n);
    }, [])
  );
}
const _o = (e) => {
    var t;
    return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0
      ? t
      : document;
  },
  sr = (e) =>
    e && "window" in e && e.window === e ? e : _o(e).defaultView || window;
function ES(e) {
  var t;
  return typeof window > "u" || window.navigator == null
    ? !1
    : ((t = window.navigator.userAgentData) === null || t === void 0
        ? void 0
        : t.brands.some((n) => e.test(n.brand))) ||
        e.test(window.navigator.userAgent);
}
function SS(e) {
  var t;
  return typeof window < "u" && window.navigator != null
    ? e.test(
        ((t = window.navigator.userAgentData) === null || t === void 0
          ? void 0
          : t.platform) || window.navigator.platform
      )
    : !1;
}
function TS() {
  return SS(/^Mac/i);
}
function NS() {
  return ES(/Android/i);
}
function LS(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : NS() && e.pointerType
    ? e.type === "click" && e.buttons === 1
    : e.detail === 0 && !e.pointerType;
}
class bS {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {}
  constructor(t, n) {
    (this.nativeEvent = n),
      (this.target = n.target),
      (this.currentTarget = n.currentTarget),
      (this.relatedTarget = n.relatedTarget),
      (this.bubbles = n.bubbles),
      (this.cancelable = n.cancelable),
      (this.defaultPrevented = n.defaultPrevented),
      (this.eventPhase = n.eventPhase),
      (this.isTrusted = n.isTrusted),
      (this.timeStamp = n.timeStamp),
      (this.type = t);
  }
}
function O3(e) {
  let t = p.useRef({ isFocused: !1, observer: null });
  $3(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), (r.observer = null));
    };
  }, []);
  let n = kS((r) => {
    e == null || e(r);
  });
  return p.useCallback(
    (r) => {
      if (
        r.target instanceof HTMLButtonElement ||
        r.target instanceof HTMLInputElement ||
        r.target instanceof HTMLTextAreaElement ||
        r.target instanceof HTMLSelectElement
      ) {
        t.current.isFocused = !0;
        let i = r.target,
          o = (s) => {
            (t.current.isFocused = !1),
              i.disabled && n(new bS("blur", s)),
              t.current.observer &&
                (t.current.observer.disconnect(), (t.current.observer = null));
          };
        i.addEventListener("focusout", o, { once: !0 }),
          (t.current.observer = new MutationObserver(() => {
            if (t.current.isFocused && i.disabled) {
              var s;
              (s = t.current.observer) === null ||
                s === void 0 ||
                s.disconnect();
              let a =
                i === document.activeElement ? null : document.activeElement;
              i.dispatchEvent(new FocusEvent("blur", { relatedTarget: a })),
                i.dispatchEvent(
                  new FocusEvent("focusout", { bubbles: !0, relatedTarget: a })
                );
            }
          })),
          t.current.observer.observe(i, {
            attributes: !0,
            attributeFilter: ["disabled"],
          });
      }
    },
    [n]
  );
}
function PS(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: i } = e;
  const o = p.useCallback(
      (l) => {
        if (l.target === l.currentTarget) return r && r(l), i && i(!1), !0;
      },
      [r, i]
    ),
    s = O3(o),
    a = p.useCallback(
      (l) => {
        const c = _o(l.target);
        l.target === l.currentTarget &&
          c.activeElement === l.target &&
          (n && n(l), i && i(!0), s(l));
      },
      [i, n, s]
    );
  return {
    focusProps: {
      onFocus: !t && (n || i || r) ? a : void 0,
      onBlur: !t && (r || i) ? o : void 0,
    },
  };
}
let Fo = null,
  _u = new Set(),
  Gi = new Map(),
  yr = !1,
  Fu = !1;
const MS = { Tab: !0, Escape: !0 };
function $d(e, t) {
  for (let n of _u) n(e, t);
}
function jS(e) {
  return !(
    e.metaKey ||
    (!TS() && e.altKey) ||
    e.ctrlKey ||
    e.key === "Control" ||
    e.key === "Shift" ||
    e.key === "Meta"
  );
}
function Ta(e) {
  (yr = !0), jS(e) && ((Fo = "keyboard"), $d("keyboard", e));
}
function pt(e) {
  (Fo = "pointer"),
    (e.type === "mousedown" || e.type === "pointerdown") &&
      ((yr = !0), $d("pointer", e));
}
function V3(e) {
  LS(e) && ((yr = !0), (Fo = "virtual"));
}
function _3(e) {
  e.target === window ||
    e.target === document ||
    (!yr && !Fu && ((Fo = "virtual"), $d("virtual", e)), (yr = !1), (Fu = !1));
}
function F3() {
  (yr = !1), (Fu = !0);
}
function Hu(e) {
  if (typeof window > "u" || Gi.get(sr(e))) return;
  const t = sr(e),
    n = _o(e);
  let r = t.HTMLElement.prototype.focus;
  (t.HTMLElement.prototype.focus = function () {
    (yr = !0), r.apply(this, arguments);
  }),
    n.addEventListener("keydown", Ta, !0),
    n.addEventListener("keyup", Ta, !0),
    n.addEventListener("click", V3, !0),
    t.addEventListener("focus", _3, !0),
    t.addEventListener("blur", F3, !1),
    typeof PointerEvent < "u"
      ? (n.addEventListener("pointerdown", pt, !0),
        n.addEventListener("pointermove", pt, !0),
        n.addEventListener("pointerup", pt, !0))
      : (n.addEventListener("mousedown", pt, !0),
        n.addEventListener("mousemove", pt, !0),
        n.addEventListener("mouseup", pt, !0)),
    t.addEventListener(
      "beforeunload",
      () => {
        H3(e);
      },
      { once: !0 }
    ),
    Gi.set(t, { focus: r });
}
const H3 = (e, t) => {
  const n = sr(e),
    r = _o(e);
  t && r.removeEventListener("DOMContentLoaded", t),
    Gi.has(n) &&
      ((n.HTMLElement.prototype.focus = Gi.get(n).focus),
      r.removeEventListener("keydown", Ta, !0),
      r.removeEventListener("keyup", Ta, !0),
      r.removeEventListener("click", V3, !0),
      n.removeEventListener("focus", _3, !0),
      n.removeEventListener("blur", F3, !1),
      typeof PointerEvent < "u"
        ? (r.removeEventListener("pointerdown", pt, !0),
          r.removeEventListener("pointermove", pt, !0),
          r.removeEventListener("pointerup", pt, !0))
        : (r.removeEventListener("mousedown", pt, !0),
          r.removeEventListener("mousemove", pt, !0),
          r.removeEventListener("mouseup", pt, !0)),
      Gi.delete(n));
};
function RS(e) {
  const t = _o(e);
  let n;
  return (
    t.readyState !== "loading"
      ? Hu(e)
      : ((n = () => {
          Hu(e);
        }),
        t.addEventListener("DOMContentLoaded", n)),
    () => H3(e, n)
  );
}
typeof document < "u" && RS();
function B3() {
  return Fo !== "pointer";
}
const AS = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);
function IS(e, t, n) {
  var r;
  const i =
      typeof window < "u"
        ? sr(n == null ? void 0 : n.target).HTMLInputElement
        : HTMLInputElement,
    o =
      typeof window < "u"
        ? sr(n == null ? void 0 : n.target).HTMLTextAreaElement
        : HTMLTextAreaElement,
    s =
      typeof window < "u"
        ? sr(n == null ? void 0 : n.target).HTMLElement
        : HTMLElement,
    a =
      typeof window < "u"
        ? sr(n == null ? void 0 : n.target).KeyboardEvent
        : KeyboardEvent;
  return (
    (e =
      e ||
      ((n == null ? void 0 : n.target) instanceof i &&
        !AS.has(
          n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type
        )) ||
      (n == null ? void 0 : n.target) instanceof o ||
      ((n == null ? void 0 : n.target) instanceof s &&
        (n == null ? void 0 : n.target.isContentEditable))),
    !(e && t === "keyboard" && n instanceof a && !MS[n.key])
  );
}
function DS(e, t, n) {
  Hu(),
    p.useEffect(() => {
      let r = (i, o) => {
        IS(!!(n != null && n.isTextInput), i, o) && e(B3());
      };
      return (
        _u.add(r),
        () => {
          _u.delete(r);
        }
      );
    }, t);
}
function $S(e) {
  let {
      isDisabled: t,
      onBlurWithin: n,
      onFocusWithin: r,
      onFocusWithinChange: i,
    } = e,
    o = p.useRef({ isFocusWithin: !1 }),
    s = p.useCallback(
      (c) => {
        o.current.isFocusWithin &&
          !c.currentTarget.contains(c.relatedTarget) &&
          ((o.current.isFocusWithin = !1), n && n(c), i && i(!1));
      },
      [n, i, o]
    ),
    a = O3(s),
    l = p.useCallback(
      (c) => {
        !o.current.isFocusWithin &&
          document.activeElement === c.target &&
          (r && r(c), i && i(!0), (o.current.isFocusWithin = !0), a(c));
      },
      [r, i, a]
    );
  return t
    ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
    : { focusWithinProps: { onFocus: l, onBlur: s } };
}
let Na = !1,
  cc = 0;
function Bu() {
  (Na = !0),
    setTimeout(() => {
      Na = !1;
    }, 50);
}
function U2(e) {
  e.pointerType === "touch" && Bu();
}
function OS() {
  if (!(typeof document > "u"))
    return (
      typeof PointerEvent < "u"
        ? document.addEventListener("pointerup", U2)
        : document.addEventListener("touchend", Bu),
      cc++,
      () => {
        cc--,
          !(cc > 0) &&
            (typeof PointerEvent < "u"
              ? document.removeEventListener("pointerup", U2)
              : document.removeEventListener("touchend", Bu));
      }
    );
}
function VS(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: i } = e,
    [o, s] = p.useState(!1),
    a = p.useRef({
      isHovered: !1,
      ignoreEmulatedMouseEvents: !1,
      pointerType: "",
      target: null,
    }).current;
  p.useEffect(OS, []);
  let { hoverProps: l, triggerHoverEnd: c } = p.useMemo(() => {
    let d = (g, w) => {
        if (
          ((a.pointerType = w),
          i ||
            w === "touch" ||
            a.isHovered ||
            !g.currentTarget.contains(g.target))
        )
          return;
        a.isHovered = !0;
        let v = g.currentTarget;
        (a.target = v),
          t && t({ type: "hoverstart", target: v, pointerType: w }),
          n && n(!0),
          s(!0);
      },
      f = (g, w) => {
        if (
          ((a.pointerType = ""),
          (a.target = null),
          w === "touch" || !a.isHovered)
        )
          return;
        a.isHovered = !1;
        let v = g.currentTarget;
        r && r({ type: "hoverend", target: v, pointerType: w }),
          n && n(!1),
          s(!1);
      },
      h = {};
    return (
      typeof PointerEvent < "u"
        ? ((h.onPointerEnter = (g) => {
            (Na && g.pointerType === "mouse") || d(g, g.pointerType);
          }),
          (h.onPointerLeave = (g) => {
            !i && g.currentTarget.contains(g.target) && f(g, g.pointerType);
          }))
        : ((h.onTouchStart = () => {
            a.ignoreEmulatedMouseEvents = !0;
          }),
          (h.onMouseEnter = (g) => {
            !a.ignoreEmulatedMouseEvents && !Na && d(g, "mouse"),
              (a.ignoreEmulatedMouseEvents = !1);
          }),
          (h.onMouseLeave = (g) => {
            !i && g.currentTarget.contains(g.target) && f(g, "mouse");
          })),
      { hoverProps: h, triggerHoverEnd: f }
    );
  }, [t, n, r, i, a]);
  return (
    p.useEffect(() => {
      i && c({ currentTarget: a.target }, a.pointerType);
    }, [i]),
    { hoverProps: l, isHovered: o }
  );
}
function _S(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e,
    i = p.useRef({ isFocused: !1, isFocusVisible: t || B3() }),
    [o, s] = p.useState(!1),
    [a, l] = p.useState(() => i.current.isFocused && i.current.isFocusVisible),
    c = p.useCallback(
      () => l(i.current.isFocused && i.current.isFocusVisible),
      []
    ),
    d = p.useCallback(
      (g) => {
        (i.current.isFocused = g), s(g), c();
      },
      [c]
    );
  DS(
    (g) => {
      (i.current.isFocusVisible = g), c();
    },
    [],
    { isTextInput: n }
  );
  let { focusProps: f } = PS({ isDisabled: r, onFocusChange: d }),
    { focusWithinProps: h } = $S({ isDisabled: !r, onFocusWithinChange: d });
  return { isFocused: o, isFocusVisible: a, focusProps: r ? h : f };
}
var FS = Object.defineProperty,
  HS = (e, t, n) =>
    t in e
      ? FS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  uc = (e, t, n) => (HS(e, typeof t != "symbol" ? t + "" : t, n), n);
let BS = class {
    constructor() {
      uc(this, "current", this.detect()),
        uc(this, "handoffState", "pending"),
        uc(this, "currentId", 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  z3 = new BS();
function U3(e) {
  return z3.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
function zS(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function W3() {
  let e = [],
    t = {
      addEventListener(n, r, i, o) {
        return (
          n.addEventListener(r, i, o),
          t.add(() => n.removeEventListener(r, i, o))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          zS(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, i) {
        let o = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: i }),
          this.add(() => {
            Object.assign(n.style, { [r]: o });
          })
        );
      },
      group(n) {
        let r = W3();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.includes(n) || e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let i of e.splice(r, 1)) i();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function US() {
  let [e] = p.useState(W3);
  return p.useEffect(() => () => e.dispose(), [e]), e;
}
let zu = (e, t) => {
  z3.isServer ? p.useEffect(e, t) : p.useLayoutEffect(e, t);
};
function WS(e) {
  let t = p.useRef(e);
  return (
    zu(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let ur = function (e) {
  let t = WS(e);
  return ie.useCallback((...n) => t.current(...n), [t]);
};
function ZS(e) {
  let t = e.width / 2,
    n = e.height / 2;
  return {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t,
  };
}
function KS(e, t) {
  return !(
    !e ||
    !t ||
    e.right < t.left ||
    e.left > t.right ||
    e.bottom < t.top ||
    e.top > t.bottom
  );
}
function GS({ disabled: e = !1 } = {}) {
  let t = p.useRef(null),
    [n, r] = p.useState(!1),
    i = US(),
    o = ur(() => {
      (t.current = null), r(!1), i.dispose();
    }),
    s = ur((a) => {
      if ((i.dispose(), t.current === null)) {
        (t.current = a.currentTarget), r(!0);
        {
          let l = U3(a.currentTarget);
          i.addEventListener(l, "pointerup", o, !1),
            i.addEventListener(
              l,
              "pointermove",
              (c) => {
                if (t.current) {
                  let d = ZS(c);
                  r(KS(d, t.current.getBoundingClientRect()));
                }
              },
              !1
            ),
            i.addEventListener(l, "pointercancel", o, !1);
        }
      }
    });
  return {
    pressed: n,
    pressProps: e ? {} : { onPointerDown: s, onPointerUp: o, onClick: o },
  };
}
function W2(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
function Ho(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((i) => `"${i}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Ho), r);
}
var Uu = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Uu || {}),
  qS = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(qS || {});
function Od({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: i,
  visible: o = !0,
  name: s,
  mergeRefs: a,
}) {
  a = a ?? YS;
  let l = K3(t, e);
  if (o) return ys(l, n, r, s, a);
  let c = i ?? 0;
  if (c & 2) {
    let { static: d = !1, ...f } = l;
    if (d) return ys(f, n, r, s, a);
  }
  if (c & 1) {
    let { unmount: d = !0, ...f } = l;
    return Ho(d ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return ys({ ...f, hidden: !0, style: { display: "none" } }, n, r, s, a);
      },
    });
  }
  return ys(l, n, r, s, a);
}
function ys(e, t = {}, n, r, i) {
  let {
      as: o = n,
      children: s,
      refName: a = "ref",
      ...l
    } = dc(e, ["unmount", "static"]),
    c = e.ref !== void 0 ? { [a]: e.ref } : {},
    d = typeof s == "function" ? s(t) : s;
  "className" in l &&
    l.className &&
    typeof l.className == "function" &&
    (l.className = l.className(t)),
    l["aria-labelledby"] &&
      l["aria-labelledby"] === l.id &&
      (l["aria-labelledby"] = void 0);
  let f = {};
  if (t) {
    let h = !1,
      g = [];
    for (let [w, v] of Object.entries(t))
      typeof v == "boolean" && (h = !0),
        v === !0 && g.push(w.replace(/([A-Z])/g, (k) => `-${k.toLowerCase()}`));
    if (h) {
      f["data-headlessui-state"] = g.join(" ");
      for (let w of g) f[`data-${w}`] = "";
    }
  }
  if (
    o === p.Fragment &&
    (Object.keys(Lr(l)).length > 0 || Object.keys(Lr(f)).length > 0)
  )
    if (!p.isValidElement(d) || (Array.isArray(d) && d.length > 1)) {
      if (Object.keys(Lr(l)).length > 0)
        throw new Error(
          [
            'Passing props on "Fragment"!',
            "",
            `The current component <${r} /> is rendering a "Fragment".`,
            "However we need to passthrough the following props:",
            Object.keys(Lr(l))
              .concat(Object.keys(Lr(f)))
              .map((h) => `  - ${h}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((h) => `  - ${h}`).join(`
`),
          ].join(`
`)
        );
    } else {
      let h = d.props,
        g = h == null ? void 0 : h.className,
        w =
          typeof g == "function"
            ? (...m) => W2(g(...m), l.className)
            : W2(g, l.className),
        v = w ? { className: w } : {},
        k = K3(d.props, Lr(dc(l, ["ref"])));
      for (let m in f) m in k && delete f[m];
      return p.cloneElement(
        d,
        Object.assign({}, k, f, c, { ref: i(d.ref, c.ref) }, v)
      );
    }
  return p.createElement(
    o,
    Object.assign(
      {},
      dc(l, ["ref"]),
      o !== p.Fragment && c,
      o !== p.Fragment && f
    ),
    d
  );
}
function Z3() {
  let e = p.useRef([]),
    t = p.useCallback((n) => {
      for (let r of e.current)
        r != null && (typeof r == "function" ? r(n) : (r.current = n));
    }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return (e.current = n), t;
  };
}
function YS(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function K3(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let i in r)
      i.startsWith("on") && typeof r[i] == "function"
        ? (n[i] != null || (n[i] = []), n[i].push(r[i]))
        : (t[i] = r[i]);
  if (t.disabled || t["aria-disabled"])
    for (let r in n)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) &&
        (n[r] = [
          (i) => {
            var o;
            return (o = i == null ? void 0 : i.preventDefault) == null
              ? void 0
              : o.call(i);
          },
        ]);
  for (let r in n)
    Object.assign(t, {
      [r](i, ...o) {
        let s = n[r];
        for (let a of s) {
          if (
            (i instanceof Event ||
              (i == null ? void 0 : i.nativeEvent) instanceof Event) &&
            i.defaultPrevented
          )
            return;
          a(i, ...o);
        }
      },
    });
  return t;
}
function Z2(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let i in r)
      i.startsWith("on") && typeof r[i] == "function"
        ? (n[i] != null || (n[i] = []), n[i].push(r[i]))
        : (t[i] = r[i]);
  for (let r in n)
    Object.assign(t, {
      [r](...i) {
        let o = n[r];
        for (let s of o) s == null || s(...i);
      },
    });
  return t;
}
function Vd(e) {
  var t;
  return Object.assign(p.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Lr(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function dc(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function QS(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && XS(n) ? !1 : r;
}
function XS(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let G3 = Symbol();
function JS(e, t = !0) {
  return Object.assign(e, { [G3]: t });
}
function _d(...e) {
  let t = p.useRef(e);
  p.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = ur((r) => {
    for (let i of t.current)
      i != null && (typeof i == "function" ? i(r) : (i.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[G3])) ? void 0 : n;
}
var br = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(br || {});
let eT = p.createContext(() => {});
function tT({ value: e, children: t }) {
  return ie.createElement(eT.Provider, { value: e }, t);
}
function K2(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function nT(e, t) {
  let [n, r] = p.useState(() => K2(e));
  return (
    zu(() => {
      r(K2(e));
    }, [e.type, e.as]),
    zu(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute("type") &&
          r("button"));
    }, [n, t]),
    n
  );
}
let Fd = p.createContext(null);
Fd.displayName = "OpenClosedContext";
var So = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(So || {});
function rT() {
  return p.useContext(Fd);
}
function iT({ value: e, children: t }) {
  return ie.createElement(Fd.Provider, { value: e }, t);
}
var G2;
let oT =
  (G2 = ie.startTransition) != null
    ? G2
    : function (e) {
        e();
      };
var sT = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(sT || {}),
  aT = ((e) => (
    (e[(e.ToggleDisclosure = 0)] = "ToggleDisclosure"),
    (e[(e.CloseDisclosure = 1)] = "CloseDisclosure"),
    (e[(e.SetButtonId = 2)] = "SetButtonId"),
    (e[(e.SetPanelId = 3)] = "SetPanelId"),
    (e[(e.LinkPanel = 4)] = "LinkPanel"),
    (e[(e.UnlinkPanel = 5)] = "UnlinkPanel"),
    e
  ))(aT || {});
let lT = {
    0: (e) => ({
      ...e,
      disclosureState: Ho(e.disclosureState, { 0: 1, 1: 0 }),
    }),
    1: (e) => (e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }),
    4(e) {
      return e.linkedPanel === !0 ? e : { ...e, linkedPanel: !0 };
    },
    5(e) {
      return e.linkedPanel === !1 ? e : { ...e, linkedPanel: !1 };
    },
    2(e, t) {
      return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
    },
    3(e, t) {
      return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
    },
  },
  Hd = p.createContext(null);
Hd.displayName = "DisclosureContext";
function Bd(e) {
  let t = p.useContext(Hd);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Bd), n);
  }
  return t;
}
let zd = p.createContext(null);
zd.displayName = "DisclosureAPIContext";
function q3(e) {
  let t = p.useContext(zd);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, q3), n);
  }
  return t;
}
let Ud = p.createContext(null);
Ud.displayName = "DisclosurePanelContext";
function cT() {
  return p.useContext(Ud);
}
function uT(e, t) {
  return Ho(t.type, lT, e, t);
}
let dT = p.Fragment;
function fT(e, t) {
  let { defaultOpen: n = !1, ...r } = e,
    i = p.useRef(null),
    o = _d(
      t,
      JS((k) => {
        i.current = k;
      }, e.as === void 0 || e.as === p.Fragment)
    ),
    s = p.useRef(null),
    a = p.useRef(null),
    l = p.useReducer(uT, {
      disclosureState: n ? 0 : 1,
      linkedPanel: !1,
      buttonRef: a,
      panelRef: s,
      buttonId: null,
      panelId: null,
    }),
    [{ disclosureState: c, buttonId: d }, f] = l,
    h = ur((k) => {
      f({ type: 1 });
      let m = U3(i);
      if (!m || !d) return;
      let y = k
        ? k instanceof HTMLElement
          ? k
          : k.current instanceof HTMLElement
          ? k.current
          : m.getElementById(d)
        : m.getElementById(d);
      y == null || y.focus();
    }),
    g = p.useMemo(() => ({ close: h }), [h]),
    w = p.useMemo(() => ({ open: c === 0, close: h }), [c, h]),
    v = { ref: o };
  return ie.createElement(
    Hd.Provider,
    { value: l },
    ie.createElement(
      zd.Provider,
      { value: g },
      ie.createElement(
        tT,
        { value: h },
        ie.createElement(
          iT,
          { value: Ho(c, { 0: So.Open, 1: So.Closed }) },
          Od({
            ourProps: v,
            theirProps: r,
            slot: w,
            defaultTag: dT,
            name: "Disclosure",
          })
        )
      )
    )
  );
}
let hT = "button";
function pT(e, t) {
  let n = p.useId(),
    {
      id: r = `headlessui-disclosure-button-${n}`,
      disabled: i = !1,
      autoFocus: o = !1,
      ...s
    } = e,
    [a, l] = Bd("Disclosure.Button"),
    c = cT(),
    d = c === null ? !1 : c === a.panelId,
    f = p.useRef(null),
    h = _d(f, t, d ? null : a.buttonRef),
    g = Z3();
  p.useEffect(() => {
    if (!d)
      return (
        l({ type: 2, buttonId: r }),
        () => {
          l({ type: 2, buttonId: null });
        }
      );
  }, [r, l, d]);
  let w = ur((b) => {
      var I;
      if (d) {
        if (a.disclosureState === 1) return;
        switch (b.key) {
          case br.Space:
          case br.Enter:
            b.preventDefault(),
              b.stopPropagation(),
              l({ type: 0 }),
              (I = a.buttonRef.current) == null || I.focus();
            break;
        }
      } else
        switch (b.key) {
          case br.Space:
          case br.Enter:
            b.preventDefault(), b.stopPropagation(), l({ type: 0 });
            break;
        }
    }),
    v = ur((b) => {
      switch (b.key) {
        case br.Space:
          b.preventDefault();
          break;
      }
    }),
    k = ur((b) => {
      var I;
      QS(b.currentTarget) ||
        i ||
        (d
          ? (l({ type: 0 }), (I = a.buttonRef.current) == null || I.focus())
          : l({ type: 0 }));
    }),
    { isFocusVisible: m, focusProps: y } = _S({ autoFocus: o }),
    { isHovered: x, hoverProps: C } = VS({ isDisabled: i }),
    { pressed: E, pressProps: T } = GS({ disabled: i }),
    N = p.useMemo(
      () => ({
        open: a.disclosureState === 0,
        hover: x,
        active: E,
        disabled: i,
        focus: m,
        autofocus: o,
      }),
      [a, x, E, m, i, o]
    ),
    S = nT(e, f),
    P = Z2(
      d
        ? {
            ref: h,
            type: S,
            disabled: i || void 0,
            autoFocus: o,
            onKeyDown: w,
            onClick: k,
          }
        : {
            ref: h,
            id: r,
            type: S,
            "aria-expanded": a.disclosureState === 0,
            "aria-controls": a.linkedPanel ? a.panelId : void 0,
            disabled: i || void 0,
            autoFocus: o,
            onKeyDown: w,
            onKeyUp: v,
            onClick: k,
          },
      y,
      C,
      T
    );
  return Od({
    mergeRefs: g,
    ourProps: P,
    theirProps: s,
    slot: N,
    defaultTag: hT,
    name: "Disclosure.Button",
  });
}
let mT = "div",
  gT = Uu.RenderStrategy | Uu.Static;
function vT(e, t) {
  let n = p.useId(),
    { id: r = `headlessui-disclosure-panel-${n}`, ...i } = e,
    [o, s] = Bd("Disclosure.Panel"),
    { close: a } = q3("Disclosure.Panel"),
    l = Z3(),
    c = _d(t, o.panelRef, (w) => {
      oT(() => s({ type: w ? 4 : 5 }));
    });
  p.useEffect(
    () => (
      s({ type: 3, panelId: r }),
      () => {
        s({ type: 3, panelId: null });
      }
    ),
    [r, s]
  );
  let d = rT(),
    f = d !== null ? (d & So.Open) === So.Open : o.disclosureState === 0,
    h = p.useMemo(() => ({ open: o.disclosureState === 0, close: a }), [o, a]),
    g = { ref: c, id: r };
  return ie.createElement(
    Ud.Provider,
    { value: o.panelId },
    Od({
      mergeRefs: l,
      ourProps: g,
      theirProps: i,
      slot: h,
      defaultTag: mT,
      features: gT,
      visible: f,
      name: "Disclosure.Panel",
    })
  );
}
let yT = Vd(fT),
  xT = Vd(pT),
  wT = Vd(vT),
  q2 = Object.assign(yT, { Button: xT, Panel: wT });
var Wu = {},
  Wd = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ Wd.parse = kT;
Wd.serialize = ET;
var CT = Object.prototype.toString,
  xs = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function kT(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var n = {}, r = t || {}, i = r.decode || ST, o = 0; o < e.length; ) {
    var s = e.indexOf("=", o);
    if (s === -1) break;
    var a = e.indexOf(";", o);
    if (a === -1) a = e.length;
    else if (a < s) {
      o = e.lastIndexOf(";", s - 1) + 1;
      continue;
    }
    var l = e.slice(o, s).trim();
    if (n[l] === void 0) {
      var c = e.slice(s + 1, a).trim();
      c.charCodeAt(0) === 34 && (c = c.slice(1, -1)), (n[l] = LT(c, i));
    }
    o = a + 1;
  }
  return n;
}
function ET(e, t, n) {
  var r = n || {},
    i = r.encode || TT;
  if (typeof i != "function") throw new TypeError("option encode is invalid");
  if (!xs.test(e)) throw new TypeError("argument name is invalid");
  var o = i(t);
  if (o && !xs.test(o)) throw new TypeError("argument val is invalid");
  var s = e + "=" + o;
  if (r.maxAge != null) {
    var a = r.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    s += "; Max-Age=" + Math.floor(a);
  }
  if (r.domain) {
    if (!xs.test(r.domain)) throw new TypeError("option domain is invalid");
    s += "; Domain=" + r.domain;
  }
  if (r.path) {
    if (!xs.test(r.path)) throw new TypeError("option path is invalid");
    s += "; Path=" + r.path;
  }
  if (r.expires) {
    var l = r.expires;
    if (!NT(l) || isNaN(l.valueOf()))
      throw new TypeError("option expires is invalid");
    s += "; Expires=" + l.toUTCString();
  }
  if (
    (r.httpOnly && (s += "; HttpOnly"),
    r.secure && (s += "; Secure"),
    r.partitioned && (s += "; Partitioned"),
    r.priority)
  ) {
    var c =
      typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority;
    switch (c) {
      case "low":
        s += "; Priority=Low";
        break;
      case "medium":
        s += "; Priority=Medium";
        break;
      case "high":
        s += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (r.sameSite) {
    var d =
      typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite;
    switch (d) {
      case !0:
        s += "; SameSite=Strict";
        break;
      case "lax":
        s += "; SameSite=Lax";
        break;
      case "strict":
        s += "; SameSite=Strict";
        break;
      case "none":
        s += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return s;
}
function ST(e) {
  return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
}
function TT(e) {
  return encodeURIComponent(e);
}
function NT(e) {
  return CT.call(e) === "[object Date]" || e instanceof Date;
}
function LT(e, t) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
(function (e) {
  var t =
      (zo && zo.__assign) ||
      function () {
        return (
          (t =
            Object.assign ||
            function (v) {
              for (var k, m = 1, y = arguments.length; m < y; m++) {
                k = arguments[m];
                for (var x in k)
                  Object.prototype.hasOwnProperty.call(k, x) && (v[x] = k[x]);
              }
              return v;
            }),
          t.apply(this, arguments)
        );
      },
    n =
      (zo && zo.__rest) ||
      function (v, k) {
        var m = {};
        for (var y in v)
          Object.prototype.hasOwnProperty.call(v, y) &&
            k.indexOf(y) < 0 &&
            (m[y] = v[y]);
        if (v != null && typeof Object.getOwnPropertySymbols == "function")
          for (
            var x = 0, y = Object.getOwnPropertySymbols(v);
            x < y.length;
            x++
          )
            k.indexOf(y[x]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(v, y[x]) &&
              (m[y[x]] = v[y[x]]);
        return m;
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.hasCookie =
      e.deleteCookie =
      e.setCookie =
      e.getCookie =
      e.getCookies =
        void 0);
  var r = Wd,
    i = function () {
      return typeof window < "u";
    },
    o = function (v) {
      return v
        ? "getAll" in v &&
            "set" in v &&
            typeof v.getAll == "function" &&
            typeof v.set == "function"
        : !1;
    },
    s = function (v) {
      return (
        (!!(v != null && v.req) &&
          "cookies" in v.req &&
          o(v == null ? void 0 : v.req.cookies)) ||
        (!!(v != null && v.res) &&
          "cookies" in v.res &&
          o(v == null ? void 0 : v.res.cookies)) ||
        (!!(v != null && v.cookies) && o(v.cookies()))
      );
    },
    a = function (v) {
      var k = {};
      return (
        v.getAll().forEach(function (m) {
          var y = m.name,
            x = m.value;
          k[y] = x;
        }),
        k
      );
    },
    l = function (v) {
      try {
        if (typeof v == "string") return v;
        var k = JSON.stringify(v);
        return k;
      } catch {
        return v;
      }
    },
    c = function (v) {
      return v && v.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    },
    d = function (v) {
      if (s(v)) {
        if (v != null && v.req) return a(v.req.cookies);
        if (v != null && v.cookies) return a(v.cookies());
      }
      var k;
      if ((v && (k = v.req), !i()))
        return k && k.cookies
          ? k.cookies
          : k && k.headers.cookie
          ? (0, r.parse)(k.headers.cookie)
          : {};
      for (
        var m = {},
          y = document.cookie ? document.cookie.split("; ") : [],
          x = 0,
          C = y.length;
        x < C;
        x++
      ) {
        var E = y[x].split("="),
          T = E.slice(1).join("="),
          N = E[0];
        m[N] = T;
      }
      return m;
    };
  e.getCookies = d;
  var f = function (v, k) {
    var m = (0, e.getCookies)(k),
      y = m[v];
    if (y !== void 0) return c(y);
  };
  e.getCookie = f;
  var h = function (v, k, m) {
    if (s(m)) {
      var y = m.req,
        x = m.res,
        C = m.cookies,
        E = n(m, ["req", "res", "cookies"]),
        T = t({ name: v, value: l(k) }, E);
      y && y.cookies.set(T), x && x.cookies.set(T), C && C().set(T);
      return;
    }
    var N, S, P;
    if (m) {
      var b = m,
        y = b.req,
        x = b.res,
        I = n(b, ["req", "res"]);
      (S = y), (P = x), (N = I);
    }
    var V = (0, r.serialize)(v, l(k), t({ path: "/" }, N));
    if (i()) document.cookie = V;
    else if (P && S) {
      var z = P.getHeader("Set-Cookie");
      if (
        (Array.isArray(z) || (z = z ? [String(z)] : []),
        P.setHeader("Set-Cookie", z.concat(V)),
        S && S.cookies)
      ) {
        var _ = S.cookies;
        k === "" ? delete _[v] : (_[v] = l(k));
      }
      if (S && S.headers && S.headers.cookie) {
        var _ = (0, r.parse)(S.headers.cookie);
        k === "" ? delete _[v] : (_[v] = l(k)),
          (S.headers.cookie = Object.entries(_).reduce(function (Z, H) {
            return Z.concat("".concat(H[0], "=").concat(H[1], ";"));
          }, ""));
      }
    }
  };
  e.setCookie = h;
  var g = function (v, k) {
    return (0, e.setCookie)(v, "", t(t({}, k), { maxAge: -1 }));
  };
  e.deleteCookie = g;
  var w = function (v, k) {
    if (!v) return !1;
    var m = (0, e.getCookies)(k);
    return m.hasOwnProperty(v);
  };
  e.hasCookie = w;
})(Wu);
function bT() {
  const [e, t] = p.useState(0),
    [n, r] = p.useState(!1),
    [i, o] = p.useState(!1);
  p.useEffect(() => {
    const a = () => {
      t(window.scrollY);
    };
    return (
      window.addEventListener("scroll", a),
      () => {
        window.removeEventListener("scroll", a);
      }
    );
  }, []),
    p.useEffect(() => {
      r(Wu.getCookie("eB_2")), o(Wu.getCookie("eU_2"));
    }, []);
  const s =
    e > 60
      ? "bg-white shadow fixed top-0 w-full z-20 transition-all lg:block"
      : "bg-white shadow lg:block";
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx(q2, {
        as: "header",
        className: s,
        children: ({ open: a }) =>
          u.jsx(u.Fragment, {
            children: u.jsxs("div", {
              className:
                "mx-auto lg:divide-y lg:divide-gray-200 lg:dark:divide-gray-600 lg:px-8 bg-white dark:bg-darkpaper",
              id: "main-nav-bar",
              children: [
                u.jsxs("div", {
                  className: "hidden lg:flex relative h-16 justify-between",
                  children: [
                    u.jsx("div", {
                      className: "relative z-10 flex px-2 lg:px-0",
                      children: u.jsx("div", {
                        className:
                          "flex flex-shrink-0 items-center text-primary",
                        children: u.jsx("a", {
                          href: "/",
                          children: u.jsx(cp, {}),
                        }),
                      }),
                    }),
                    u.jsx("div", {
                      className: "relative z-10 flex items-center lg:hidden",
                      children: u.jsxs(q2.Button, {
                        className:
                          "hidden relative lg:inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                        children: [
                          u.jsx("span", { className: "absolute -inset-0.5" }),
                          a
                            ? u.jsx(Sw, {
                                className: "block h-6 w-6",
                                "aria-hidden": "true",
                              })
                            : u.jsx(fw, {
                                className: "block h-6 w-6",
                                "aria-hidden": "true",
                              }),
                        ],
                      }),
                    }),
                    u.jsxs("div", {
                      className:
                        "hidden gap-4 lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center",
                      children: [
                        !i &&
                          (n || i
                            ? u.jsx("a", {
                                href: "https://us04.vagaro.com/merchants/calendar",
                                className:
                                  "text-inkDarkest light:text-gray-900 whitespace-nowrap text-[15px] font-semibold hover:text-inkDark dark:text-white",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: u.jsxs("div", {
                                  className:
                                    "flex items-center text-center text-charcoal hover:text-charcoal",
                                  children: [
                                    u.jsx("span", {
                                      children: u.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "2",
                                        stroke: "currentColor",
                                        className: "h-4 w-4",
                                        children: u.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
                                        }),
                                      }),
                                    }),
                                    u.jsx("span", {
                                      className:
                                        "ml-1 inline-block text-[15px] font-semibold",
                                      children: "Go to My Business",
                                    }),
                                  ],
                                }),
                              })
                            : u.jsx("a", {
                                href: "https://www.vagaro.com/Login.aspx",
                                className:
                                  "text-inkDarkest light:text-inkDarker whitespace-nowrap text-[15px] font-semibold hover:text-inkDark dark:text-white",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Log In",
                              })),
                        i && u.jsx("div", {}),
                        n &&
                          i &&
                          u.jsx("a", {
                            href: "https://us04.vagaro.com/merchants/calendar",
                            className:
                              "text-inkDarkest light:text-gray-900 whitespace-nowrap text-[15px] font-semibold hover:text-inkDark dark:text-white",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: u.jsxs("div", {
                              className:
                                "flex items-center text-center text-charcoal hover:text-charcoal",
                              children: [
                                u.jsx("span", {
                                  children: u.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "2",
                                    stroke: "currentColor",
                                    className: "h-4 w-4",
                                    children: u.jsx("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
                                    }),
                                  }),
                                }),
                                u.jsx("span", {
                                  className:
                                    "ml-1 inline-block text-[15px] font-semibold",
                                  children: "Go to My Business",
                                }),
                              ],
                            }),
                          }),
                        u.jsx("a", {
                          href: "https://www.vagaro.com/SignUp.aspx",
                          className:
                            "signup signupval ml-6 inline-flex h-[50px] w-[145px] items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-primary px-4 py-4 text-base font-semibold text-white shadow-sm hover:bg-charcoal",
                          children: "Sign up",
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx("nav", {
                  className: "hidden lg:flex lg:space-x-8 lg:py-2",
                  "aria-label": "Global",
                  children: u.jsx("div", {
                    className: "mx-auto",
                    children: u.jsx(wS, {}),
                  }),
                }),
              ],
            }),
          }),
      }),
      u.jsx("div", {
        className: "block lg:hidden",
        id: "main-nav-bar",
        children: u.jsx(iw, {}),
      }),
    ],
  });
}
fc.createRoot(document.getElementById("root")).render(
  u.jsx(ie.StrictMode, { children: u.jsx(bT, {}) })
);
